import React, { useState } from 'react';
import './hero.css';

const rpiPage = () => {
    return (
    <div className="hero_container">
        <div className='hero_topic'>
            <p>Raspberry Pi (aka "RPi") was originally designed and created by a non-profit organization with the intention to promote teaching computer science at an affordable cost. Several generations and models of Raspberry Pis have now been released that have expanded their footprints, power and applications.</p>
            <p>At Seeed Studio, we offer the entire Raspberry Pi family of boards as well as complementary accessories and starter kits that can help you create projects centered around the product. Additionally, we have created many tutorials in Seeed’s Raspberry Pi community where you can easily find references to build your own circuits or write your own applications.</p>
        </div>
        <div className='hero_img'>
            <img src='https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/r/a/raspberry-pi-preview_2.png'></img>
        </div>
    </div>
    );
  };
  
  export default rpiPage;