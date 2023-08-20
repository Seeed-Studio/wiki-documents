import React, {useState} from 'react';
import './hats.css'

const hats =[
    {
        "id":1,
        "name":"Grove Base Hat for Raspberry Pi",
        "description":"Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs",
        "compatibleWith" :"3B+, 4B",
        "image":"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg",
        "wikiPage":"./Grove_Base_Hat_for_Raspberry_Pi",
        "purchasePage": "https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"
    },
    {
        "id":2,
        "name":"Grove Base Hat for Raspberry Pi Zero",
        "description":"Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs in the pHat form factor of the RPi Zero family",
        "compatibleWith" :"Zero, Zero W/WH",
        "image":"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/main.jpg",
        "wikiPage":"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi_Zero/",
        "purchasePage": "https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html"
    },
    {
        "id":3,
        "name":"WM1302 Raspberry Pi Hat",
        "description":"Add-on board for connecting the WM1302 LoRaWAN module, based on LoRa Concentrator Semtech SX1302",
        "compatibleWith" :"3B+, 4B, Zero, Zero W/WH",
        "image":"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png",
        "wikiPage":"https://wiki.seeedstudio.com/WM1302_Pi_HAT/",
        "purchasePage": "https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html"
    },
    {
        "id":4,
        "name":"LTE Cat 1 Pi HAT",
        "description":"Open-source cellular extension modem for Raspberry Pi, based on u-blox LARA-R2xx series",
        "compatibleWith" :"3B+, 4B, Zero, Zero W/WH",
        "image":"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG",
        "wikiPage":"https://wiki.seeedstudio.com/LTE_Cat_1_Pi_HAT/",
        "purchasePage": "https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-USA-AT--p-3056.html"
    },
    {
        "id":5,
        "name":"ReSpeaker 2-Mics Pi HAT",
        "description":"Dual-microphone expansion board for Raspberry Pi designed for AI and voice applications.",
        "compatibleWith" :"3B+, 4B, Zero, Zero W/WH",
        "image":"https://files.seeedstudio.com/products/107100001/01.png",
        "wikiPage":"https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/",
        "purchasePage": "https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html"
    },
    {
        "id":6,
        "name":"ReSpeaker 4-Mics Pi HAT",
        "description":"Quad-microphone expansion board for Raspberry Pi designed for more powerful AI and voice applications.",
        "compatibleWith" :"3B+, 4B",
        "image":"https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg",
        "wikiPage":"https://wiki.seeedstudio.com/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/",
        "purchasePage": "https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html"
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

                    <img className={"rpi_hat_pic " + (hat.id % 2 ? 'reverse' : '')} src={hat.image}/>

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


