import React, {useState} from 'react';
import './value.css';

const featureContents =[
  {"rpifeature1":"The Raspberry Pi is a low-cost computer that is affordable for everyone. The price of a Raspberry Pi ranges from $5 to $55, depending on the model"},
  {"rpifeature2":"The Raspberry Pi can be used for a wide range of projects, from home automation to gaming to robotics. It can also run a variety of operating systems, including Linux and Android"},
  {"rpifeature3":"The Raspberry Pi is easy to set up and use, even for beginners. It comes with a stable Raspbian operating system and a huge number of enthusiasts are constantly developing new applications for it"},
  {"rpifeature4":"The Raspberry Pi is small and lightweight, making it easy to carry around and use in different locations"}
]
const value = () => {

  return (
    <div>
      <div className='feature-container'>
            <div id='rpifeature1' className='feature'>💰 Affordability</div>
            <div id='rpifeature2' className='feature'>🧩 Versatility</div>
            <div id='rpifeature3' className='feature'>🚀 Ease of use</div>
            <div id='rpifeature4' className='feature'>🐜 Size</div>
      </div>
      {/* todo: change content on hover
      <div className='feature-explanation'>
        <p>{name}</p>
      </div> */}
    </div>
  );
};

export default value;
