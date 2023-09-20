import fs from 'fs';
import Tesseract from 'tesseract.js';
import Validator from 'aadhaar-validator';
import sharp from 'sharp';

async function verifyAadharCard(inputFile) {
  const outputFile = inputFile.replace(/\.[^/.]+$/, '') + '_resized.png';

  async function preProcessImage() {
    try {
      await sharp(inputFile)
        .resize(512, 512, {
          fit: 'fill',
        })
        .grayscale()
        .toFile(outputFile);
    } catch (error) {
      console.log(error);
    }
  }

  preProcessImage();

  const worker = await Tesseract.createWorker();
  const rectangles = [
    {
      left: 155,
      top: 140,
      width: 245,
      height: 27,
    },
    {
      left: 130,
      top: 400,
      width: 210,
      height: 39,
    },
  ];

  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const values = [];

  for (let i = 0; i < rectangles.length; i++) {
    const { data: { text } } = await worker.recognize(outputFile, { rectangle: rectangles[i] });
    values.push(text);
  }

  let num = values[1].replaceAll(/\D/g, '');

  if (Validator.isValidNumber(num)) {
    console.log('The AadharCard has been verified successfully!');
    // Delete the preprocessed image
    fs.unlink(outputFile, function (err) {
      if (err) throw err;
    });
    await worker.terminate();
    return true;
  } else {
    console.log("The AadharCard wasn't verified.");
    // Delete the preprocessed image
    fs.unlink(outputFile, function (err) {
      if (err) throw err;
    });
    await worker.terminate();
    return false;
  }
}

// Example usage:
const inputFile = '/home/sarrah/Downloads/aadhar.jpeg';
const isVerified = verifyAadharCard(inputFile);
console.log('Is AadharCard Verified:', isVerified);

export default verifyAadharCard;
