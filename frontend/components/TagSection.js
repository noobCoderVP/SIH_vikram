// ChipBox.js
import React from 'react';
import Chip from '@mui/material/Chip';

function TagSection({ chipData }) {
  return (
    <div className="p-4 mt-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg text-black font-semibold mb-4">Choose Tags: </h2>
      <div className="flex flex-wrap gap-2">
        {chipData.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            color="primary"
            variant="outlined"
            size="small"
          />
        ))}
      </div>
    </div>
  );
}

export default TagSection;
