import React, {useState} from 'react';
import './kits.css'

const items =[
    {
        "id":1,
        "name":"Grove Base Kit for Raspberry Pi",
        "description":"Seeed Grove starter kit contains one Grove Base Hat(for Raspberry Pi ) and 10 Grove modules",
        "compatibleWith" :"3B+,4B,Zero,Zero W/H",
        "image":"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png",
        "wikiPage":"https://wiki.seeedstudio.com/Grove_Base_Kit_for_Raspberry_Pi/",
        "purchasePage": "https://www.seeedstudio.com/Grove-Base-Kit-for-Raspberry-Pi-p-2945.html"
    },    
    {
        "id":2,
        "name":"LoRa/LoRaWAN Gateway Kit",
        "description":"Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
        "compatibleWith" :"3B+,4B,Zero,Zero W/H",
        "image":"https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png",
        "wikiPage":"https://wiki.seeedstudio.com/LoRa_LoRaWan_Gateway_Kit/",
        "purchasePage": "https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3.html"
    },    
    {
        "id":3,
        "name":"Grove Starter Kit for Microsoft IoT",
        "description":"Seeed and Microsoft have worked together to alleviate some of the challenges in complex setup using Windows 10 IoT Core and Grove modules",
        "compatibleWith" :"3B+,4B,Zero,Zero W/H",
        "image":"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg",
        "wikiPage":"https://wiki.seeedstudio.com/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi/",
        "purchasePage": "https://www.seeedstudio.com/Grove-Starter-Kit-for-IoT-based-on-Raspberry-Pi.html"
    },
];
const value = () => {

  return (
    <div>
        <div className="rpi_item_container">
            {items.map((item) => (
                <div className='rpi_item_grid'>
                    {/* todo: make this a slot to use as base component */}
                    <div className="rpi_item_vertical">
                        <span className='rpi_item_description'>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </span>
                        <span className='rpi_item_compatible'>
                            <h3>Compatible With</h3>
                            <p>{item.compatibleWith}</p>
                        </span>
                    </div>

                    <img className={"rpi_item_pic " + (item.id % 2 ? 'reverse' : '')} src={item.image}/>

                    <span className='grid_item_center pagelink'>
                        <a href={item.purchasePage}> 🖱️ Buy Now </a>
                    </span>

                    <span className='grid_item_center pagelink'>
                        <a href={item.wikiPage}> 📚 Getting Started </a>
                    </span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default value;


