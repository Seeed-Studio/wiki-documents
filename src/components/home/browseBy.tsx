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
      key: 'edgeAi',
      image: 'edgeAi',
      moreLink:'https://wiki.seeedstudio.com/edge_ai_topic/',
      docList: [
        {
          "path": "/gun_detection_with_frigate_nvr_on_r2000",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/gun_detection.gif",
          "title": "Gun detection with Frigate NVR on R2xxx",
        },
        {
          "path": "/openremote_r1x00",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/openremote.webp",
          "title": "Deploying OpenRemote on reComputer R - Manage IoT Devices at the Edge",
        },
        {
          "path": "/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/speech_subtitle.gif",
          "title": "Speech Subtitle Generation on Nvidia Jetson",
        },
        {
          "path": "/alwaysAI-Jetson-Getting-Started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/object_detection_alwaysai.gif",
          "title": "Object Detection with AlwaysAI",
        }
        , {
          "path": "/YOLOv8-TRT-Jetson",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/object_detection_yolov8.gif",
          "title": "Deploy YOLOv8 on NVIDIA Jetson using TensorRT",
        },
        {
          "path": "/Lumeo-Jetson-Getting-Started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/object_detection_lumeo.gif",
          "title": "Object Detection with Lumeo",
        },
        {
          "path": "/a_loam",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/fig0.gif",
          "title": "How to run A-LOAM 3D SLAM on reComputer",
        },
        {
          "path": "/CVEDIA-Jetson-Getting-Started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/CVEDIA-RT.gif",
          "title": "Getting Started with CVEDIA-RT on NVIDIA® Jetson Devices",
        }
      ]
    },
    {
      key: 'arduino',
      image: 'arduino',
      moreLink:'https://wiki.seeedstudio.com/Arduino/',
      docList: [
        {
          "path": "/xiao_esp32s3_getting_started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/xiaoesp32s3sense.webp",
          "title": "Seeed Studio XIAO ESP32S3 (Sense)",
        },
        {
          "path": "/XIAO_BLE",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/XIAO-nRF52840-Sense-45font.webp",
          "title": "Seeed Studio XIAO nRF52840 (Sense)",
        },
        {
          "path": "/XIAO_ESP32C3_Getting_Started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/xiao-esp32c3.webp",
          "title": "Seeed Studio XIAO ESP32C3",
        },
        {
          "path": "/xiao_esp32c6_getting_started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/xiaoc6.webp",
          "title": "Seeed Studio XIAO ESP32C6",
        }, 
        {
          "path": "/Seeeduino-XIAO",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/Seeeduino-XIAO-preview-1.webp",
          "title": "Seeed Studio XIAO SAMD21",
        },
        {
          "path": "/Grove-Beginner-Kit-For-Arduino",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/grove-beginner-kit-for-arduino.webp",
          "title": "Grove Beginner Kit For Arduino",
        },
        {
          "path": "/Wio-Terminal-Getting-Started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/wio.webp",
          "title": "Wio Terminal",
        }, {
          "path": "/Edgebox-ESP-100-Arduino",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/EdgeBox-ESP-100.webp",
          "title": "EdgeBox-ESP-100",
        }
      ]
    }, {
      key: 'raspberry',
      image: 'raspberry',
      moreLink:'https://wiki.seeedstudio.com/Raspberry_Pi/',
      docList: [
        {
          "path": "/r2000_series_getting_start",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-ai-r2000.webp",
          "title": "Getting Started with reComputer AI R20",
        }, 
        {
          "path": "/recomputer_ai_industrial_r2135_getting_start",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-industrial-r2135.webp",
          "title": "Getting Started with reComputer AI Industrial R21",
        },
        {
          "path": "/recomputer_industrial_r20xx_getting_start",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-industrial-r20xx.webp",
          "title": "Getting Started with reComputer Industrial R20",
        },
        {
          "path": "/recomputer_industrial_R21xx_getting_start",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-industrial-r21xx.webp",
          "title": "Getting Started with reComputer Industrial R21",
        },
        {
          "path": "/recomputer_r",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-r1000.webp",
          "title": "Getting Started with reComputer R10",
        }, 
        {
          "path": "/recomputer_r1100_intro",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-r1100.webp",
          "title": "Getting Started with reComputer R11",
        },
        {
          "path": "/reTerminal",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/reTerminal.webp",
          "title": "Getting Started with reTerminal",
        },
        {
          "path": "/recomputer_r1000_flash_OS",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/reComputer_R1025.webp",
          "title": "reComputer R1000 Raspbian OS to eMMC",
        }
      ]
    },
    {
      key: 'nvidia',
      image: 'nvidia',
      moreLink:'https://wiki.seeedstudio.com/NVIDIA_Jetson/',

      docList: [
        {
          "path": "/reServer_Industrial_Getting_Started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/reserver.webp",
          "title": "Getting Started with reServer Industrial",
        },
        {
          "path": "/reComputer_Industrial_Getting_Started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/reComputerheadline.webp",
          "title": "Getting Started with reComputer Industrial",
        },
        {
          "path": "/reserver_j501_getting_started",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/reServer_J501.webp",
          "title": "Getting Started with reServer J501",
        },
        {
          "path": "/reComputer_J4012_Flash_Jetpack",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-j401.webp",
          "title": "Flash JetPack OS to J401 Carrier Board",
        },
        {
          "path": "/reComputer_Jetson_Series_Initiation",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/rekaiji6.webp",
          "title": "reComputer for Jetson Initiation",
        },
        {
          "path": "/deploy_frigate_on_jetson",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/frigate.webp",
          "title": "Deploy Frigate On NVIDIA Jetson device",
        },
        {
          "path": "/reComputer_Jetson_Memory_Expansion",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/jetson_memory_expansion.webp",
          "title": "reComputer for Jetson Memory Expansion",
        },
        {
          "path": "/YOLOv8-DeepStream-TRT-Jetson",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/yolov8_car.webp",
          "title": "YOLOv8 on Jetson with TensorRT and DeepStream",
        }
      ]
    }, {
      key: 'homeAssistant',
      image: 'ha',
      moreLink:'https://wiki.seeedstudio.com/home_assistant_topic/',
      docList: [
        {
          "path": "/respeaker_xvf3800_xiao_home_assistant",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/respeaker-xmos-xvf3800-with-ha.webp",
          "title": "Smart Home Voice Control on ReSpeaker XVF3800 with Home Assistant",
        },
        {
          "path": "/r2000_series_frigate_and_home_assistant",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/frigate-on-recomputer-r2000-with-ha.webp",
          "title": "Frigate NVR and Hailo on reComputer R2xxx connect with Home Assistant",
        },
        {
          "path": "/xiao-esp32c3-esphome",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/c3_accesses_ha.webp",
          "title": "XIAO ESP32C3 accesses Home Assistant via ESPHome service",
        },
        {
          "path": "/home_assistant_with_sensecap_lorawan_sensors",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/ha_sensecap.webp",
          "title": "Tango with Home Assistant and SenseCAP Sensors",
        },
        {
          "path": "/SenseCAP_Indicator_Application_Matter",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/indicator-matter-7.webp",
          "title": "SenseCAP Indicator - Matter Application Development",
        },
        {
          "path": "/reterminal-DM-Frigate",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/frigate_with_reterminal.webp",
          "title": "Frigate intergrating with reTerminal DM",
        }, 
                {
          "path": "/Connect-Grove-to-Home-Assistant-ESPHome",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/grove_to_esphome.webp",
          "title": "Connect Grove Modules to Home Assistant using ESPHome",
        },
        {
          "path": "/home_assistant_sensecap",
          "image": "https://files.seeedstudio.com/wiki/Homepage_browseby/config_11.webp",
          "title": "SenseCAP Integration for Home Assistant",
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