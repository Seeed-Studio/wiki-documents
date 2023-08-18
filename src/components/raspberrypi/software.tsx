import React, { useState } from 'react';
import './software.css';

const SoftwarePage = () => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedScenes, setSelectedScenes] = useState([]);
  const brands = [
    { id: 1, name: 'CVEDIA-RT',link:'https://wiki.seeedstudio.com/CVEDIA-Jetson-Getting-Started/',bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index.png', scenes: [4] },
    { id: 2, name: 'Lumeo', link:'https://wiki.seeedstudio.com/Lumeo-Jetson-Getting-Started/',bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index2.png', scenes: [4,5] },
    { id: 3, name: 'alwaysAI', link:'https://wiki.seeedstudio.com/alwaysAI-Jetson-Getting-Started/',bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index3.png', scenes: [1,2,4,5] },
    { id: 4, name: 'YOLOv8',link:'/tags/yolov-8/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index4.png', scenes: [2, 4] },
    { id: 5, name: 'YOLOv5',link:'https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index5.png', scenes: [2, 4] },
    { id: 6, name: 'roboflow',link:'https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index6.png', scenes: [1, 2, 4] },
    { id: 7, name: 'Allxon',link:'https://wiki.seeedstudio.com/Update-Jetson-Linux-OTA-Using-Allxon/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index7.png', scenes: [5] },
    { id: 8, name: 'Deci',link:'https://wiki.seeedstudio.com/DeciAI-Getting-Started/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index8.png', scenes: [3,2,4] },
    { id: 9, name: 'Edge Impulse',link:'https://wiki.seeedstudio.com/HardHat/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index9.png', scenes: [1, 2, 4] },
    { id: 10, name: 'Cochl.Sense',link:'https://wiki.seeedstudio.com/Cochl.Sense-Jetson-Getting-Started/', bg:'https://files.seeedstudio.com/wiki/NVIDIA/parnter_logo/NVIDIA_Jetson_index10.png', scenes: [4,5] },
  ];
  const scenes = [
    { id: 1, name: 'Data Upload & Label',img:'label.png', brands: [3, 6, 9]},
    { id: 2, name: 'AI Model Train', img:'train.png',brands: [4, 5, 9, 3, 6, 8] },
    { id: 3, name: 'AI Model Optimize', img:'optimize.png', brands: [8] },
    { id: 4, name: 'AI Model Deploy', img:'deploy.png',brands: [1, 2, 4, 5, 6, 9, 10, 3, 8] },
    { id: 5, name: 'Remote Manage', img:'manage.png',brands: [7,2,3,10] },
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
    <div className="software_container">
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

export default SoftwarePage;