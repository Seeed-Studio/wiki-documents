import React, { useState } from 'react';
import './index.css';

const BrandSceneList = () => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedScenes, setSelectedScenes] = useState([]);
  const brands = [
    { id: 1, name: 'CVEDIA-RT',link:'https://www.baidu.com/',bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/cvedia-logo.jpg', scenes: [4] },
    { id: 2, name: 'Lumeo', link:'https://www.baidu.com/',bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/lumeo-logo.jpg', scenes: [4] },
    { id: 3, name: 'alwaysAI', link:'https://www.baidu.com/',bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools83.png', scenes: [1] },
    { id: 4, name: 'YOLOv8',link:'https://www.baidu.com/', bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/yolov8-logo.png', scenes: [1, 2, 4] },
    { id: 5, name: 'YOLOv5',link:'https://www.baidu.com/', bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools80.png', scenes: [2, 4] },
    { id: 6, name: 'roboflow',link:'https://www.baidu.com/', bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools81.png', scenes: [1, 4] },
    { id: 7, name: 'Allxon1',link:'https://www.baidu.com/', bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools4.png', scenes: [5] },
    { id: 8, name: 'Deci',link:'https://www.baidu.com/', bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/jetsonaitools82.png', scenes: [3] },
    { id: 9, name: 'Edge Impulse',link:'https://www.baidu.com/', bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/ei-logo.png', scenes: [1, 2, 4] },
    { id: 10, name: 'Cochl.Sense',link:'https://www.baidu.com/', bg:'https://files.seeedstudio.com/wiki/recomputerzhongwen/cochl-logo.png', scenes: [4] },
  ];
  const scenes = [
    { id: 1, name: 'Data Upload & Label',link:'https://www.baidu.com/',img:'huang.png', brands: [3, 4, 6, 9]},
    { id: 2, name: 'Train',link:'https://www.baidu.com/', img:'huang.png',brands: [4, 5, 9] },
    { id: 3, name: 'Optimize',link:'https://www.baidu.com/',img:'huang.png', brands: [8] },
    { id: 4, name: 'Deploy',link:'https://www.baidu.com/', img:'huang.png',brands: [1, 2, 4, 5, 6, 9, 10] },
    { id: 5, name: 'Remote Manage',link:'https://www.baidu.com/', img:'huang.png',brands: [7] },
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
    <div className="dvc_container">
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
                        src={require("../../../assets/recomputer/huang.png").default}
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

export default BrandSceneList;