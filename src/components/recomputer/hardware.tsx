import React, { useState } from 'react';
import './hardware.css';

const HardwarePage = () => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedScenes, setSelectedScenes] = useState([]);
  const brands = [
    { id: 1, name: 'reComputer J10 Series',link:'https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack',bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/1.png', scenes: [1] },
    { id: 2, name: 'reComputer J20 Series', link:'https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack',bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product2.png', scenes: [1] },
    { id: 3, name: 'reComputer J30/ J40 Series', link:'https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack',bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/3.png', scenes: [1] },
    { id: 4, name: 'reComputer Industrial J30/ J40 Series',link:'https://wiki.seeedstudio.com/reComputer_Industrial_Getting_Started', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/4.png', scenes: [2] },
    { id: 5, name: 'A203E Mini PC',link:'/reComputer_A203E_Flash_System', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product6.png', scenes: [3] },
    { id: 6, name: 'A205E Mini PC',link:'https://wiki.seeedstudio.com/reComputer_A205E_Flash_System/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product7.png', scenes: [3] },
    { id: 7, name: 'T906 Mini PC',link:'https://wiki.seeedstudio.com/Mini_AI_Computer_T906/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product8.png', scenes: [3] },
    { id: 8, name: 'Jetson AGX Xavier H01',link:'https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/13.png', scenes: [3] },
    { id: 9, name: 'Jetson AGX Orin H01',link:'https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/14.png', scenes: [3] },
    { id: 10, name: 'Jetson Mate',link:'https://wiki.seeedstudio.com/Jetson-Mate', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/15.png', scenes: [3] },
    { id: 11, name: 'A203 Carrier Board',link:'/reComputer_A203_Flash_System/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/6.png', scenes: [4] },
    { id: 12, name: 'A205 Carrier Board',link:'https://wiki.seeedstudio.com/reComputer_A205_Flash_System/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/8.png', scenes: [4] },
    { id: 13, name: 'A206 Carrier Board',link:'https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/9.png', scenes: [4] },
    { id: 14, name: 'A603 Carrier Board',link:'https://wiki.seeedstudio.com/reComputer_A603_Flash_System/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/10.png', scenes: [4] },
    { id: 15, name: 'A607 Carrier Board',link:'https://wiki.seeedstudio.com/reComputer_A607_Flash_System/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/11.png', scenes: [4] },
    { id: 16, name: 'reServer Jetson',link:'https://wiki.seeedstudio.com/reServer_J2032_Getting_Started', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/16.png', scenes: [5] },
  ];
  const scenes = [
    { id: 1, name: 'reComputer',img:'17.png', brands: [1, 2, 3]},
    { id: 2, name: 'reComputer Industrial', img:'19.png',brands: [4] },
    { id: 3, name: 'Mini AI PC',img:'20.png', brands: [5, 6, 7, 8, 9, 10] },
    { id: 4, name: 'Carrier Board',img:'21.png', brands: [ 11, 12, 13, 14, 15] },
    { id: 5, name: 'reServer Jetson', img:'22.png',brands: [16] },
  ];
  const handleBrandMouseEnter = (brand) => {
    setSelectedBrand([brand]);
    const associatedScenes = scenes.filter((scene) =>
      scene.brands.includes(brand.id)
    );
    setSelectedScenes(associatedScenes);
  };

  const handleSceneMouseEnter = (scene) => {
    
    setSelectedBrand([]);
    const associatedBrandIds = scene.brands;
    const associatedBrands = brands.filter((brand) =>
      associatedBrandIds.includes(brand.id)
    )
    console.log(associatedBrands);
    
    setSelectedScenes([scene]);
    associatedBrands.length&&setSelectedBrand(associatedBrands);
  };

  const getBrandNameById = (brandId) => {
    const brand = brands.find((brand) => brand.id === brandId);
    return brand ? brand.name : '';
  };

const handleMouseLeave=()=>{
  setSelectedBrand([]);
  setSelectedScenes([]);
}
  return (
    <div className="hardware_container">
      <div className="brand-list ">
        <ul>
          {brands.map((brand) => (
            <li
              key={brand.id}
              onMouseEnter={() => handleBrandMouseEnter(brand)}
              onMouseLeave={handleMouseLeave}
                            className={
              `padding--sm ${selectedBrand.find((d) => d.id === brand.id)   ? 'selected' : ''}`
            }
            style={{backgroundImage:selectedBrand.find((d) => d.id === brand.id)   ? `url(${brand.bg})` :''}}
            >
              <a target='_blank' href={brand.link}>{brand.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="scene-list">
        <ul>
          {scenes.map((scene) => (
            <li
              key={scene.id}
              onMouseEnter={() => handleSceneMouseEnter(scene)}
              onMouseLeave={handleMouseLeave}
              className={
                `padding--sm ${selectedScenes.find((s) => s.id === scene.id) ? 'selected' : ''}`
              }
            >
                <a className='scene-item' target='_blank' href={scene.link}>
                <img
                        src={require(`../../../assets/recomputer/${scene.img}`).default}
                      />
                <div className='srene-title'>  {scene.name}</div>
                  </a> 
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default HardwarePage;