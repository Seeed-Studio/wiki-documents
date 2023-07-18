import React, { useState } from 'react';
import './index.css';

const BrandSceneList = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedScenes, setSelectedScenes] = useState([]);
  const brands = [
    { id: 1, name: '品牌33',link:'https://www.baidu.com/', scenes: [1, 2, 3] },
    { id: 2, name: '品牌2', link:'https://www.baidu.com/',scenes: [3] },
    { id: 3, name: '品牌3', link:'https://www.baidu.com/',scenes: [1] },
    { id: 4, name: '品牌4',link:'https://www.baidu.com/', scenes: [5,4] },
  ];
  const scenes = [
    { id: 1, name: '场景1',link:'https://www.baidu.com/',img:'huang.png', brands: [1, 2, 3]},
    { id: 2, name: '场景2',link:'https://www.baidu.com/', img:'huang.png',brands: [3] },
    { id: 3, name: '场景3',link:'https://www.baidu.com/',img:'huang.png', brands: [1] },
    { id: 4, name: '场景4',link:'https://www.baidu.com/', img:'huang.png',brands: [4] },
    { id: 5, name: '场景5',link:'https://www.baidu.com/', img:'huang.png',brands: [3] },
  ];
  const handleBrandMouseEnter = (brand) => {
    setSelectedBrand(brand);
    const associatedScenes = scenes.filter((scene) =>
      scene.brands.includes(brand.id)
    );
    setSelectedScenes(associatedScenes);
  };

  const handleSceneMouseEnter = (scene) => {
    console.log(scene);
    
    setSelectedBrand(null);
    const associatedBrandIds = scene.brands;
    const associatedBrands = brands.filter((brand) =>
      associatedBrandIds.includes(brand.id)
    );
    console.log(associatedBrands[0].id);
    
    setSelectedScenes([scene]);
    associatedBrands.length&&setSelectedBrand(associatedBrands[0].id);
  };

  const getBrandNameById = (brandId) => {
    const brand = brands.find((brand) => brand.id === brandId);
    return brand ? brand.name : '';
  };

const handleMouseLeave=()=>{
  setSelectedBrand(null);
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
              `padding--sm ${selectedBrand === brand.id  ? 'selected' : ''}`
            }
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