import React, { useState } from 'react';
import HardwarePage from './hardware'
import SoftwarePage from './software'

const computerPageA = () => {
  return (
    <div>
      <HardwarePage></HardwarePage>
      <SoftwarePage></SoftwarePage>
    </div>
  );
};

export default computerPageA;