import React, { useState } from 'react';
import css from './form.module.scss'
import clsx from 'clsx'

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
const getIndexImage = (src) => {
  return src && require(`../../../assets/index/${src}`).default;
}

function IndexPlatform() {
  const platformList = [
    {
      title: 'SenseCraft Data',
      subTitle: 'Accelerating Your Digital Transformation',
      desc: 'SenseCraft data is a cloud-based IoT data management platform designed to provide users with efficient, secure and reliable data collection, storage, processing, analysis and visualization services. The platform supports various types of IoT devices such as sensors, trackers, etc., which can help users to realize remote monitoring and control of devices and accelerate industry digital transformation.',
      img: 'platform_sensecraft.png',
      btnList: [
        {
          label: 'SenseCraft DATA',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Tutorials_Datasets/'
        }, {
          label: 'SenseCraft EDGE',
          link: 'https://wiki.seeedstudio.com/sensecraft_ai_main/'
        }, {
          label: 'Model Assistant',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Introduce_Overview/'
        }, {
          label: 'SenseCraft AI',
          link: 'https://sensecraft.seeed.cc/ai/#/home'
        }, {
          label: 'SenseCAP AI',
          link: 'https://wiki.seeedstudio.com/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP/'
        }
      ]
    },
    {
      title: 'SenseCraft EDGE',
      subTitle: 'Accelerating Your Digital Transformation',
      desc: 'SenseCraft data is a cloud-based IoT data management platform designed to provide users with efficient, secure and reliable data collection, storage, processing, analysis and visualization services. The platform supports various types of IoT devices such as sensors, trackers, etc., which can help users to realize remote monitoring and control of devices and accelerate industry digital transformation.',
      img: 'platform_edge.png',
      btnList: [
        {
          label: 'SenseCraft DATA',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Tutorials_Datasets/'
        }, {
          label: 'SenseCraft EDGE',
          link: 'https://wiki.seeedstudio.com/sensecraft_ai_main/'
        }, {
          label: 'Model Assistant',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Introduce_Overview/'
        }, {
          label: 'SenseCraft AI',
          link: 'https://sensecraft.seeed.cc/ai/#/home'
        }, {
          label: 'SenseCAP AI',
          link: 'https://wiki.seeedstudio.com/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP/'
        }
      ]
    },
    {
      title: 'SenseCraft AI',
      subTitle: 'Accelerating Your Digital Transformation',
      desc: 'SenseCraft data is a cloud-based IoT data management platform designed to provide users with efficient, secure and reliable data collection, storage, processing, analysis and visualization services. The platform supports various types of IoT devices such as sensors, trackers, etc., which can help users to realize remote monitoring and control of devices and accelerate industry digital transformation.',
      img: 'platform_AI.png',
      btnList: [
        {
          label: 'SenseCraft DATA',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Tutorials_Datasets/'
        }, {
          label: 'SenseCraft EDGE',
          link: 'https://wiki.seeedstudio.com/sensecraft_ai_main/'
        }, {
          label: 'Model Assistant',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Introduce_Overview/'
        }, {
          label: 'SenseCraft AI',
          link: 'https://sensecraft.seeed.cc/ai/#/home'
        }, {
          label: 'SenseCAP AI',
          link: 'https://wiki.seeedstudio.com/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP/'
        }
      ]
    }, {
      title: 'SenseCraft AI',
      subTitle: 'Accelerating Your Digital Transformation',
      desc: 'SenseCraft data is a cloud-based IoT data management platform designed to provide users with efficient, secure and reliable data collection, storage, processing, analysis and visualization services. The platform supports various types of IoT devices such as sensors, trackers, etc., which can help users to realize remote monitoring and control of devices and accelerate industry digital transformation.',
      img: 'platform_AI1.png',
      btnList: [
        {
          label: 'SenseCraft DATA',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Tutorials_Datasets/'
        }, {
          label: 'SenseCraft EDGE',
          link: 'https://wiki.seeedstudio.com/sensecraft_ai_main/'
        }, {
          label: 'Model Assistant',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Introduce_Overview/'
        }, {
          label: 'SenseCraft AI',
          link: 'https://sensecraft.seeed.cc/ai/#/home'
        }, {
          label: 'SenseCAP AI',
          link: 'https://wiki.seeedstudio.com/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP/'
        }
      ]
    },
    {
      title: 'Model Assistant',
      subTitle: 'Accelerating Your Digital Transformation',
      desc: 'SenseCraft data is a cloud-based IoT data management platform designed to provide users with efficient, secure and reliable data collection, storage, processing, analysis and visualization services. The platform supports various types of IoT devices such as sensors, trackers, etc., which can help users to realize remote monitoring and control of devices and accelerate industry digital transformation.',
      img: 'platform_assistant.png',
      btnList: [
        {
          label: 'SenseCraft DATA',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Tutorials_Datasets/'
        }, {
          label: 'SenseCraft EDGE',
          link: 'https://wiki.seeedstudio.com/sensecraft_ai_main/'
        }, {
          label: 'Model Assistant',
          link: 'https://wiki.seeedstudio.com/ModelAssistant_Introduce_Overview/'
        }, {
          label: 'SenseCraft AI',
          link: 'https://sensecraft.seeed.cc/ai/#/home'
        }, {
          label: 'SenseCAP AI',
          link: 'https://wiki.seeedstudio.com/How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP/'
        }
      ]
    },
  ]

  return (
    <div className={clsx(css.index_platform, 'com_module')}>
      <div className={clsx(css.platform_header)}>More Platforms</div>
      <div className={clsx(css.platform_header1)}>Explore more software and services from Seeed Studio</div>
      <div className={clsx(css.platform_container, 'com_module')}>
        <Swiper
        loop
        modules={[Autoplay]}
          slidesPerView={1} // 每次显示的幻灯片数量
          pagination={{ clickable: true }} // 显示分页器
          scrollbar={{ draggable: true }} // 显示滚动条
          autoplay={{ delay: 3000, disableOnInteraction:true }}
        >
          {platformList.map((item, index) => {
            return (
              <SwiperSlide >
                <div className={css.platform_item}>
                  <div className={css.platform_item_info}>
                    <h1 className={clsx(css.platform_item_info_title, css.green)}>{item.title
                    }</h1>
                    <h2 className={css.platform_item_info_title1}>{item.subTitle}</h2>
                    <p className={css.platform_description}>{item.desc}</p>
                    <div className={css.platform_btn}>
                      {item.btnList.map((btn, index) => {
                        return (
                          <a href={btn.link} className={clsx(css.platform_btn_item)} key={index}>
                            {btn.label}
                          </a>
                        )
                      })}
                    </div>
                  </div>

                  <div className={css.platform_item_img}>
                    <img src={getIndexImage(item.img)} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default IndexPlatform;