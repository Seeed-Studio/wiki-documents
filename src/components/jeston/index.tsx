import React, { useState } from 'react';
import clsx from 'clsx'
import styles from './index.module.scss'
import { listData,listData1, communityList } from './config'
import {
  useThemeConfig,
  useColorMode,
  ThemeConfig
} from '@docusaurus/theme-common';
function getImgUrl(str: string, suffix?: string) {
  return `https://files.seeedstudio.com/wiki/Jetson/${str}.${suffix || 'png'}`
}

const toUrl=(url:string)=>{
if(!url) return
  window.open(url,'_blank')
}
const bannerRender = () => {
  return (
    <div className={styles.banner}>
      <div  className={styles.banner_left}>
        <div className={styles.title}>
          NVIDIA® Jetson™ Powered Edge AI Devices Guide
        </div>
        <div>NVIDIA® Jetson™ delivers high-performance AI at the edge with energy-efficient modules using NVIDIA CUDA-X™ software. As an authorized reseller and Elite Partner, Seeed provides a comprehensive edge AI development solution, leveraging 15+ years of hardware expertise. Our offerings include standard carrier boards, ODM services, and image flashing, ensuring a seamless integration process. Partnering with top AI ecosystem players, we expedite your market launch with our end-to-end service from integration to distribution.</div>
        <div className={clsx(styles.flex, styles.bottom)}>
          <div className={clsx(styles.right, styles.flex)}>
            <img src={getImgUrl('right', 'svg')} alt="" />
          </div>
          <span>
            learn more about the comparison between the NVIDIA Jetson powered devices
          </span>
        </div>
      </div>
      <div  className={styles.banner_right}>
        <img src={getImgUrl('banner_img')} alt="" />
      </div>
    </div>
  )
}
const communityRender = () => {
  return (
    <div className={clsx(styles.section, styles.community)}>
      <div className={styles.title}>
        NVIDIA® Jetson™ Powered Edge AI Devices Guide
      </div>
      <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
        {
          communityList.map((item) => {
            return (
              <div className={clsx(styles.com_item)} onClick={()=>toUrl(item.URL)}>
                <img src={getImgUrl(item.img)} alt="" />
                <div className={clsx(styles.com_title,styles.cursor)} >{item.name}</div>
              </div>
            )
          })}
      </div>

    </div>
  )
}
const usageRender = (obj) => {
  const [activeIndex,setActiveIndex]=useState(0)

  return (
    <div className={clsx(styles.section, styles.usage,obj.class)}>
      <div className={styles.title}>
        {obj.title}
      </div>
      <div className={styles.desc}>
        {obj.desc}
      </div>
      <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
        <div className={styles.left_container}>
          {obj.list.map((item,index) => {
            return (
              <div  className={clsx( styles.flex, styles.tab,activeIndex==index&&styles.active)} onClick={()=>{
                setActiveIndex(index)
              }}>
                <img src={require(`../../../assets/recomputer/${item.img}`).default} alt="" />
                <div className={styles.name}>{item.name}</div>
              </div>
            )
          })}
        </div>
        <div className={styles.right_container}>
        <div className={styles.right_wrapper}>
         
        {obj.list[activeIndex].brands.map((item) => {
            return (
              <div  className={clsx( styles.prod_item,styles.cursor)}  onClick={()=>toUrl(item.URL)}>
                <img src={require(`../../../assets/recomputer/${item.img}`).default} alt="" />
                <div className={styles.name}>{item.name}</div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </div>
  )
}
const computerPageA = () => {



  const { colorMode } =useColorMode()
  
  return (
    <div className={clsx(styles.jeston_page,styles[colorMode])}>
      {bannerRender()}
      {usageRender({
        title: 'Jetpack Flash and Hardware Usage',
        desc: `
        Most of our reComputer Jetson products come with NVIDIA JetPack system pre-installed on the device. However, if you want to flash these devices again or flash other devices which do not come with JetPack system, you can follow the below links for step-by-step guidance. We have also included guidance on how to use different hardware peripherals on these NVIDIA Jetson powered devices.
        `,
        list:listData
      })}
       {usageRender({
       class:styles.gray,
        title: 'Jetpack Flash and Hardware Usage',
        desc: `
        Most of our reComputer Jetson products come with NVIDIA JetPack system pre-installed on the device. However, if you want to flash these devices again or flash other devices which do not come with JetPack system, you can follow the below links for step-by-step guidance. We have also included guidance on how to use different hardware peripherals on these NVIDIA Jetson powered devices.
        `,
        list:listData1
      })}
      {communityRender()}

    </div>
  );
};

export default computerPageA;