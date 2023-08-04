import React, { useState } from 'react';
import './hardware.css';

const HardwarePage = () => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedScenes, setSelectedScenes] = useState([]);
  const brands = [
    { id: 1, name: 'reComputer J1020 v2',link:'https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/',bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product.png', scenes: [1] },
    { id: 2, name: 'reComputer J20 Series', link:'https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/',bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product2.png', scenes: [1] },
    { id: 3, name: 'reComputer J30 Series', link:'https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/',bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product3.png', scenes: [1] },
    { id: 4, name: 'reComputer J40 Series',link:'https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product4.png', scenes: [1] },
    { id: 5, name: 'reComputer Industrial',link:'https://wiki.seeedstudio.com/reComputer_Industrial_Getting_Started/#flash-jetpack', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product5.png', scenes: [2] },
    { id: 6, name: 'A203E Mini PC',link:'/reComputer_A203E_Flash_System/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product6.png', scenes: [3] },
    { id: 7, name: 'A205E Mini PC',link:'https://wiki.seeedstudio.com/reComputer_A205E_Flash_System/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product7.png', scenes: [3] },
    { id: 8, name: 'T906 Mini PC',link:'https://wiki.seeedstudio.com/Mini_AI_Computer_T906/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product8.png', scenes: [3] },
    { id: 9, name: 'NVIDIA Xavier AGX H01',link:'https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product9.png', scenes: [4] },
    { id: 10, name: 'NVIDIA Orin AGX H01',link:'https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product10.png', scenes: [4] },
    { id: 11, name: 'reServer NVIDIA Jetson',link:'https://wiki.seeedstudio.com/reServer_J2032_Flash_Jetpack/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/Seeed_Product/NVIDIA_Jetson_Seeed_product11.png', scenes: [5] },
  ];
  const scenes = [
    { id: 1, name: 'reComputer',link:'https://wiki.seeedstudio.com/reComputer_Jetson_Series_Introduction/',img:'huang.png', brands: [1, 2, 3, 4]},
    { id: 2, name: 'reComputer Indutrial',link:'/tags/re-computer-industrial/', img:'huang.png',brands: [5] },
    { id: 3, name: 'Mini PC',link:'/tags/mini-pc-jetpack-flash/',img:'huang.png', brands: [6, 7, 8] },
    { id: 4, name: 'NVIDIA Jetson H01',link:'/tags/nvidia-jetson-h-01/', img:'huang.png',brands: [9, 10] },
    { id: 5, name: 'reServer NVIDIA Jetson',link:'https://wiki.seeedstudio.com/reServer_J2032_Getting_Started/', img:'huang.png',brands: [11] },
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
                        src={require("../../../assets/recomputer/nvidia_icon.png").default}
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