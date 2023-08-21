import React, {useState} from 'react';
import './kits.css'

const items =[
    {
        "id":1,
        "name":"Skeleton Box for Raspberry Pi Compute Module Development Kit",
        "description":"Constructed from military grade aluminum and hardwearing acrylic, this box is stackable in all three dimensions, allowing for limitless expansion possibilities",
        "compatibleWith" :"CM4",
        "image":"https://files.seeedstudio.com/wiki/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit/img/Pic_2100.bmp",
        "wikiPage":"https://wiki.seeedstudio.com/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit/",
        "purchasePage": "https://www.seeedstudio.com/Skeleton-Box-for-Raspberry-Pi-Compute-Module.html"
    },    
    {
        "id":2,
        "name":"Skeleton Box for Raspberry Pi",
        "description":"Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
        "compatibleWith" :"3B+,4B",
        "image":"https://files.seeedstudio.com/wiki/Skeleton_box_for_Rasberry_Pi/img/Pi_skeleton_02.jpg",
        "wikiPage":"https://wiki.seeedstudio.com/Skeleton_box_for_Rasberry_Pi/",
        "purchasePage": "https://www.seeedstudio.com/Skeleton-box-for-Raspberry-Pi.html"
    },    
    {
        "id":3,
        "name":"Raspberry PI B+ Clear Case",
        "description":"An easy to assemble clear acryllic case, made using a better-performing 4-piece design over the standard 6-piece",
        "compatibleWith" :"3B+",
        "image":"https://files.seeedstudio.com/wiki/Raspberry_PI_Bplus_Case/img/IMG_9955b.jpg",
        "wikiPage":"https://wiki.seeedstudio.com/Raspberry_PI_Bplus_Case/",
        "purchasePage": "https://www.seeedstudio.com/Raspberry-Pi-Model-B-2-Case.html?queryID=f4fedf9ea695b42efea237236cb2a0ab&objectID=1036&indexName=bazaar_retailer_products"
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


