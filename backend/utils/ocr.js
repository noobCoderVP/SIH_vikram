import fs from 'fs'
import Tesseract from 'tesseract.js';
import Validator from 'aadhaar-validator'
import sharp from "sharp"

// only need to give input
const inputFile = "/home/hrc/git-workspace/SIH_vikram/backend/images/aadhar_test_1.jpeg";
const outputFile = inputFile.replace(/\.[^/.]+$/, "") + "_resized.png";

async function preProcessImage() {
  try {
    await sharp(inputFile)
      .resize(512, 512, {
        fit: 'fill',
      })
      .grayscale()
      .toFile(outputFile)
      ;
  } catch (error) {
    console.log(error);
  }
}

preProcessImage();

const worker = await Tesseract.createWorker();
// // 512 + grayscale image
  const rectangles = [
    // x2,y2 = 400,167
    {
      left: 155,
      top: 140,
      width: 245,
      height: 27,
    },
    // x2,y2=340,439
    {
      left: 130,
      top: 400,
      width: 210,
      height: 39,
    },
  ];
  
  (async () => {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const values = [];
    for (let i = 0; i < rectangles.length; i++) {
      const { data: { text } } = await worker.recognize(outputFile, { rectangle: rectangles[i] });
      values.push(text);
    }
    console.log(values[0]);
    let num = values[1].replaceAll(/\D/g, "");
    console.log(num);
    if(Validator.isValidNumber(num)){
        console.log("The AadharCard has been verified successfully!");
        // delete the preprocessed image
        fs.unlink(outputFile, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          // console.log('File deleted!');
        });
    }
    else{
        console.log("The AadharCard wasn't verified.")
        // delete the preprocessed image
        fs.unlink(outputFile, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          // console.log('File deleted!');
        });
    }
    await worker.terminate();
    await worker.terminate();
  })();
  