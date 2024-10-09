import React, { useState } from 'react';
import clsx from 'clsx'
import styles from './index.module.scss'
import { listData,listData1, communityList_cv,communityList_gen, communityList_robot} from './config'
import {
  useThemeConfig,
  useColorMode,
  ThemeConfig
} from '@docusaurus/theme-common';
function getImgUrl(str: string, suffix?: string) {
  return `https://files.seeedstudio.com/wiki/Jetson/${str}.${suffix || 'png'}`
}

const toUrl = (url: string) => {
  if (!url) return;
  window.location.href = url;  // 在当前窗口打开链接
}



const bannerRender = () => {
  return (
    <div className={styles.banner}>
      <div  className={styles.banner_left}>
        <div className={styles.title}>
          Community Projects
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
        Community Projects
      </div>

      {/* Computer Vision Section */}
      <div className={clsx(styles.subtitle, styles.bold, styles.center)}>
        Computer Vision
      </div>
      <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
        {
          communityList_cv.map((item) => {
            return (
              <div className={clsx(styles.com_item)}>
                {/* 图片不进行跳转 */}
                <img src={item.img} alt={item.name} />
                {/* 只有文字部分进行跳转 */}
                <div 
                  className={clsx(styles.com_title, styles.cursor)} 
                  onClick={() => toUrl(item.URL)}
                >
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>

      {/* Generative AI Section */}
      <div className={clsx(styles.subtitle, styles.bold, styles.center)}>
        Generative AI
      </div>
      <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
        {
          communityList_gen.map((item) => {
            return (
              <div className={clsx(styles.com_item)}>
                {/* 图片不进行跳转 */}
                <img src={item.img} alt={item.name} />
                {/* 只有文字部分进行跳转 */}
                <div 
                  className={clsx(styles.com_title, styles.cursor)} 
                  onClick={() => toUrl(item.URL)}
                >
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>

      {/* Robotics Section */}
      <div className={clsx(styles.subtitle, styles.bold, styles.center)}>
        Robotics
      </div>
      <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
        {
          communityList_robot.map((item) => {
            return (
              <div className={clsx(styles.com_item)}>
                {/* 图片不进行跳转 */}
                <img src={item.img} alt={item.name} />
                {/* 只有文字部分进行跳转 */}
                <div 
                  className={clsx(styles.com_title, styles.cursor)} 
                  onClick={() => toUrl(item.URL)}
                >
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


const usageRender = (obj) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={clsx(styles.section, styles.usage, obj.class)}>
      <div className={styles.title}>
        {obj.title}
      </div>
      <div className={styles.desc}>
        {obj.desc}
      </div>
      <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
        <div className={styles.left_container}>
          {obj.list.map((item, index) => {
            return (
              <div 
                className={clsx(styles.flex, styles.tab, activeIndex === index && styles.active)}
                onClick={() => setActiveIndex(index)} // 选中不同的品牌
              >
                {/* 上级的 img 和 name 不进行跳转 */}
                <img 
                  src={item.img} 
                  alt={item.name} 
                />
                <div className={styles.name}>
                  {item.name}
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.right_container}>
          <div className={styles.right_wrapper}>
            {/* 只对 brands 的 img 和 name 进行跳转 */}
            {obj.list[activeIndex].brands.map((brand) => {
              return (
                <div 
                  className={clsx(styles.prod_item, styles.cursor)}  
                  onClick={() => toUrl(brand.href)} // 点击整个品牌项时跳转
                >
                  <img 
                    src={brand.img} 
                    alt={brand.name} 
                  />
                  <div className={styles.name}>{brand.name}</div>
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
        title: 'AI Developer Tools',
        desc: `
        After accessing an NVIDIA Jetson device, the AI development process involves several key steps: obtaining and labeling data for training, training and optimizing the AI model to ensure optimal performance on the device, and finally deploying the model to build applications. Additionally, applications can be managed remotely, allowing for tracking of device performance metrics to ensure field efficiency. Comprehensive wiki guides are available to support this AI workflow using various software tools. 
        `,
        list:listData1
      })}
      {communityRender()}
 
    </div>
  );
};

export default computerPageA;