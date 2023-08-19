import React from 'react';
import './value.css';

const value = () => {
  return (
    <div>
    <h2>Why Do People Love Raspberry Pi?</h2>
      <div className='feature-container'>
        {/* <div className='feature'>Affordability: The Raspberry Pi is a low-cost computer that is affordable for everyone. The price of a Raspberry Pi ranges from $5 to $55, depending on the model</div>
        <div className='feature'>Versatility: The Raspberry Pi can be used for a wide range of projects, from home automation to gaming to robotics. It can also run a variety of operating systems, including Linux and Android</div>
        <div className='feature'>Ease of use: The Raspberry Pi is easy to set up and use, even for beginners. It comes with a stable Raspbian operating system and a huge number of enthusiasts are constantly developing new applications for it</div>
        <div className='feature'>Size: The Raspberry Pi is small and lightweight, making it easy to carry around and use in different locations</div> */}
            <div className='feature'>Affordability</div>
            <div className='feature'>Versatility</div>
            <div className='feature'>Ease of use</div>
            <div className='feature'>Size</div>
        </div>
    </div>
  );
};

export default value;
