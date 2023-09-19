import React from 'react';
import Chip from '@mui/material/Chip';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const LawyerTag = ({ text, color }) => {

  return (
    // This div is a workaround for not integrating Material UI and Tailwind perfectly
    // it should not cause too many issues
    // On the plus side if you integrate it properly
    // this will work anyways
    <div className='mr-1'>
    <Chip
      // style={{backgroundColor: color}}
      color="primary"
      label={text}
      onClick={handleClick}

    />
    </div>
  );
};

export default LawyerTag;