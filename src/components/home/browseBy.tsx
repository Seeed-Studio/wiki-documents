import React, { useState, useEffect } from 'react';
import css from './form.module.scss'
import clsx from 'clsx'
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const getIndexImage = (src) => {
  return src && require(`../../../assets/index/browse/${src}`).default;
}

function IndexLatestedViki(props) {
  const [theme, setTheme] = useState(props.theme);
  const wikiList = [
    {
      key: 'arduino',
      image: 'arduino',
      moreLink:'https://wiki.seeedstudio.com/Arduino/',
      docList: [
        {
          "path": "/xiao_esp32s3_getting_started",
          "image": "https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg",
          "title": "Seeed Studio XIAO ESP32S3 (Sense)",
        },
        {
          "path": "/XIAO_BLE",
          "image": "https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg",
          "title": "Seeed Studio XIAO nRF52840 (Sense)",
        },
        {
          "path": "/XIAO_ESP32C3_Getting_Started",
          "image": "https://files.seeedstudio.com/wiki/xiao_topicpage/4.jpg",
          "title": "Seeed Studio XIAO ESP32C3",
        },
        {
          "path": "/xiao_esp32c6_getting_started",
          "image": "https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg",
          "title": "Seeed Studio XIAO ESP32C6",
        }
        , {
          "path": "/Grove-Beginner-Kit-For-Arduino",
          "image": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061162-grove-beginner-kit-for-arduino-first.jpg",
          "title": "Grove Beginner Kit For Arduino",
        },
        {
          "path": "/Wio-Terminal-Getting-Started",
          "image": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/0/0072.jpg",
          "title": "Wio Terminal",
        }, {
          "path": "/Edgebox-ESP-100-Arduino",
          "image": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg",
          "title": "EdgeBox-ESP-100",
        },
        {
          "path": "/Grove-LCD_RGB_Backlight",
          "image": "https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg",
          "title": "Grove - LCD RGB Backlight",
        }
      ]
    }, {
      key: 'raspberry',
      image: 'raspberry',
      moreLink:'https://wiki.seeedstudio.com/Raspberry_Pi/',
      docList: [
        {
          "path": "/reTerminal",
          "image": "https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png",
          "title": "Getting Started with reTerminal",
        },
        {
          "path": "/recomputer_r1000_flash_OS",
          "image": "https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",
          "title": "reComputer R1000 Raspbian OS to eMMC",
        },
        {
          "path": "/Edge_Box_introduction",
          "image": "https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg",
          "title": "Getting Started Edge Box RPI-200",
        }, 
        {
          "path": "/reTerminal-hardware-interfaces-usage",
          "image": "https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png",
          "title": "Hardware and Interfaces Usage",
        },
        {
          "path": "/raspberry_pi_5_uses_pcie_hat_dual_hat",
          "image": "https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg",
          "title": "Raspberry Pi 5 uses PCIe hat/dual hat",
        },
        {
          "path": "/Edgebox-rpi-200-codesys",
          "image": "https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png",
          "title": "Codesys for Edge Box RPi 200",
        },
        {
          "path": "/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection",
          "image": "https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/resultvideo.gif",
          "title": "AI Kit with Raspberry Pi 5 about YOLOv8n object detection",
        }, 
        {
          "path": "/reTerminal-DM_intro_FUXA",
          "image": "https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif",
          "title": "Getting Start with FUXA - Web Based SCADA Tool",
        }
      ]
    }
    ,
    {
      key: 'nvidia',
      image: 'nvidia',
      moreLink:'https://wiki.seeedstudio.com/NVIDIA_Jetson/',

      docList: [
        {
          "path": "/reComputer_J4012_Flash_Jetpack",
          "image": "https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/recomputer-j401.png",
          "title": "Flash JetPack OS to J401 Carrier Board",
        },
        {
          "path": "/reComputer_Industrial_Getting_Started",
          "image": "https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png",
          "title": "Getting Started with reComputer Industrial",
        },
        {
          "path": "/reComputer_Jetson_Series_Initiation",
          "image": "https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg",
          "title": "reComputer for Jetson Initiation",
        },
        {
          "path": "/reServer_Industrial_Getting_Started",
          "image": "https://files.seeedstudio.com/wiki/reServer-Industrial/1.png",
          "title": "Getting Started with reServer Industrial",
        }, 
        {
          "path": "/deploy_frigate_on_jetson",
          "image": "https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png",
          "title": "Deploy Frigate On NVIDIA Jetson device",
        },
        {
          "path": "/J101_Enable_SD_Card",
          "image": "https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png",
          "title": "J101 Enable SD Card",
        },
        {
          "path": "/J401_carrierboard_Hardware_Interfaces_Usage",
          "image": "https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif",
          "title": "J401 Carrier Board Interfaces Usage",
        },
        {
          "path": "/YOLOv8-DeepStream-TRT-Jetson",
          "image": "https://files.seeedstudio.com/wiki/YOLOV8/car.gif",
          "title": "YOLOv8 on Jetson with TensorRT and DeepStream",
        }
      ]
    }, {
      key: 'homeAssistant',
      image: 'ha',
      moreLink:'https://wiki.seeedstudio.com/home_assistant_topic/',
      docList: [
        {
          "path": "/home_assistant_sensecap",
          "image": "https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_11.png",
          "title": "SenseCAP Integration for Home Assistant",
        },
        {
          "path": "/xiao-esp32c3-esphome",
          "image": "https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg",
          "title": "XIAO ESP32C3 accesses Home Assistant via ESPHome service",
        },
        {
          "path": "/ha_xiao_esp32",
          "image": "https://files.seeedstudio.com/wiki/SenseCAP/Home_Assistant/ha-xiao5.png",
          "title": "XIAO ESP32S3 for Home Assistant",
        },
        {
          "path": "/sensecraft_homeassistant_userguide",
          "image": "https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage49.png",
          "title": "SenseCraft-HomeAssistant User Manual",
        },
        {
          "path": "/SenseCAP_Indicator_Application_Matter",
          "image": "https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-matter-7.jpg",
          "title": "SenseCAP Indicator - Matter Application Development",
        },
        {
          "path": "/home_assistant_with_sensecap_lorawan_sensors",
          "image": "https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min",
          "title": "Tango with Home Assistant and SenseCAP Sensors",
        },
        {
          "path": "/Connect-Grove-to-Home-Assistant-ESPHome",
          "image": "https://files.seeedstudio.com/wiki/ESPHome/106.png",
          "title": "Connect Grove Modules to Home Assistant using ESPHome",
        },
        {
          "path": "/reterminal-DM-Frigate",
          "image": "https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif",
          "title": "Frigate intergrating with reTerminal DM",
        }, 
      ]
    }, {
      key: 'edgeAi',
      image: 'edgeAi',
      moreLink:'https://wiki.seeedstudio.com/edge_ai_topic/',
      docList: [
        {
          "path": "/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson",
          "image": "https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif",
          "title": "Speech Subtitle Generation on Nvidia Jetson",
        },
        {
          "path": "https://wiki.seeedstudio.com/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/",
          "image": "https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif",
          "title": "Deploy Whisper on NVIDIA Jetson Orin for Real time Speech to Text",
        },
        {
          "path": "https://wiki.seeedstudio.com/How_to_run_local_llm_text_to_image_on_reComputer/",
          "image": "https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/23_creating_image1.gif",
          "title": "Run a Local LLM Text-to-Image on reComputer",
        },
        {
          "path": "/alwaysAI-Jetson-Getting-Started",
          "image": "https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif",
          "title": "Object Detection with AlwaysAI",
        }
        , {
          "path": "/YOLOv8-TRT-Jetson",
          "image": "https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif",
          "title": "Object Detection with Yolov8",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/Lumeo/thumb.gif",
          "title": "Object Detection with Lumeo",
        }, {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/node-red/36.png",
          "title": "No code Edge AI Tool",
        },
        {
          "path": "/Security_Scan",
          "image": "https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan22.jpg",
          "title": "Knife Detection(X-ray)",
        }
      ]
    }
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [docList, setDocsList] = useState(wikiList[0].docList)
  const [moreLink, setMoreLink] = useState(wikiList[0].moreLink)

  const changeTab = (index) => {
    setActiveIndex(index)
    setDocsList(wikiList[index].docList)
    setMoreLink(wikiList[index].moreLink)
  }
  useEffect(() => {
    const dom = document.querySelector('.navbar__items--right .clean-btn')
    dom && dom.addEventListener('click', () => {
      setTimeout(() => {
        const htmlElement = document.documentElement;
        const dataTheme = htmlElement.getAttribute('data-theme');
        setTheme(dataTheme)
      }, 20);
    });
  }, [props.theme])

  return (
    <div className={clsx(css.browseBy,css[theme], 'com_module')}>
      <div className={css.latested_header}>
        <div className={css.latested_header_left}>
          <div className={css.latested_header_title}>
            Browse by
          </div>
        </div>
      </div>
      <div className={css.browseBy_box}>
        <div className={css.browseBy_header}>
          {wikiList.map((item, index) => {
            const src = getIndexImage(item.image + `${theme === 'light' ? '_light' : ''}.png`)
            return (
              <div className={clsx(css.browseBy_item, index === activeIndex ? css.active : '')} key={item.key} onClick={() => changeTab(index)}>
                <img src={src} alt="" />
              </div>
            )
          })}
        </div>
        <div className={css.browseBy_container}>
          {docList.map((item, index) => {
            return (
              <a className={css.doc_item} href={item.path}>
                <img src={item.image} alt="" />
                <div className={clsx(css.wiki_name,'ellipsis-2')}>{item.title}</div>
              </a>
            )
          })}
        </div>
        <div className={css.browseBy_more}>
          <a href={moreLink}>More  <FaChevronRight size={14}/></a>
        </div>
      </div>
    </div>
  )
}

export default IndexLatestedViki;