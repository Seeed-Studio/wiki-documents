import React, {useState} from 'react';
import './hats.css'

const hats =[
    {
    "id":1,
    "name":"Grove Base Hat for Raspberry Pi",
    "description":"The Grove Base Hat for Raspberry Pi provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs",
    "compatibleWith" :"3B, 4, Zero, Zero W/WH",
    "image":"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg",
    "wikiPage":"./Grove_Base_Hat_for_Raspberry_Pi",
    "purchasePage": "https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"
    }
];
const value = () => {

  return (
    <div>
        <div className="rpi_hat_container">
            {hats.map((hat) => (
                <div className='rpi_hat_grid'>
                    <div className="rpi_hat_vertical">
                        <span className='rpi_hat_description'>
                            <h2>{hat.name}</h2>
                            <p>{hat.description}</p>
                        </span>
                        <span className='rpi_hat_compatible'>
                            <h3>Compatible With</h3>
                            <p>{hat.compatibleWith}</p>
                        </span>
                    </div>

                    <img className="rpi_hat_pic" src={hat.image}/>

                    <span className='rpi_hat_purchase pagelink'>
                        <a href={hat.purchasePage}> 🖱️ Buy Now </a>
                    </span>

                    <span className='rpi_hat_wikilink pagelink'>
                        <a href={hat.wikiPage}> 📚 Getting Started </a>
                    </span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default value;


