import React, { useState, useEffect } from 'react';
import css from './form.module.scss'
import clsx from 'clsx'
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { detectLocaleFromPath, localizeHref } from '../../pages/home/lib/locale';

const getIndexImage = (src) => {
  return src && require(`../../../assets/index/browse/${src}`).default;
};

// 读取本地化标题（无则回退英文）
function getLocalizedTitle(item: any, locale: 'en' | 'cn' | 'ja' | 'es' | 'pt-br') {
  if (locale === 'cn' && item.title_cn) return item.title_cn;
  if (locale === 'ja' && item.title_ja) return item.title_ja;
  if (locale === 'es' && item.title_es) return item.title_es;
  if (locale === 'pt-br' && item.title_pt_br) return item.title_pt_br;
  return item.title;
}

function IndexLatestedViki(props) {
  const [theme, setTheme] = useState(props.theme);

  // 当前语言（基于路径前缀 / /cn /ja /es）
  const locale = detectLocaleFromPath(typeof window !== 'undefined' ? window.location.pathname : '/');

  // 仅本组件需要的极小文案
  const I18N = {
    en: { title: 'Browse by', more: 'More' },
    cn: { title: '浏览分类', more: '更多' },
    ja: { title: 'カテゴリーから探す', more: 'もっと見る' },
    es: { title: 'Explorar por', more: 'Más' },
    'pt-br': { title: 'Explorar por', more: 'Mais' },
  } as const;

  const wikiList = [
    {
      key: 'edgeAi',
      image: 'edgeAi',
      moreLink:'https://wiki.seeedstudio.com/edge_ai_topic/',
      docList: [
        {
          path: '/gun_detection_with_frigate_nvr_on_r2000',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/gun_detection.gif',
          title: 'Gun detection with Frigate NVR on R2xxx',
          title_cn: '在 R2xxx 上使用 Frigate NVR 进行枪械检测',
          title_ja: 'R2xxx で Frigate NVR による銃検出',
          title_es: 'Detección de armas con Frigate NVR en R2xxx',
          title_pt_br: 'Detecção de armas com Frigate NVR no R2xxx',
        },
        {
          path: '/openremote_r1x00',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/openremote.webp',
          title: 'Deploying OpenRemote on reComputer R - Manage IoT Devices at the Edge',
          title_cn: '在 reComputer R 上部署 OpenRemote——边缘管理物联网设备',
          title_ja: 'reComputer R で OpenRemote をデプロイ—エッジで IoT デバイスを管理',
          title_es: 'Desplegar OpenRemote en reComputer R: gestionar dispositivos IoT en el Edge',
          title_pt_br: 'Implantando o OpenRemote no reComputer R - Gerencie dispositivos IoT na borda',
        },
        {
          path: '/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/speech_subtitle.gif',
          title: 'Speech Subtitle Generation on Nvidia Jetson',
          title_cn: '在 NVIDIA Jetson 上实现语音字幕生成',
          title_ja: 'NVIDIA Jetson で音声字幕を生成',
          title_es: 'Generación de subtítulos por voz en NVIDIA Jetson',
          title_pt_br: 'Geração de legendas por voz no NVIDIA Jetson',
        },
        {
          path: '/alwaysAI-Jetson-Getting-Started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/object_detection_alwaysai.gif',
          title: 'Object Detection with AlwaysAI',
          title_cn: '使用 AlwaysAI 实现目标检测',
          title_ja: 'AlwaysAI で物体検出',
          title_es: 'Detección de objetos con AlwaysAI',
          title_pt_br: 'Detecção de objetos com AlwaysAI',
        },
        {
          path: '/YOLOv8-TRT-Jetson',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/object_detection_yolov8.gif',
          title: 'Deploy YOLOv8 on NVIDIA Jetson using TensorRT',
          title_cn: '使用 TensorRT 在 NVIDIA Jetson 部署 YOLOv8',
          title_ja: 'TensorRT を用いて NVIDIA Jetson に YOLOv8 をデプロイ',
          title_es: 'Implementar YOLOv8 en NVIDIA Jetson con TensorRT',
          title_pt_br: 'Implante o YOLOv8 no NVIDIA Jetson usando TensorRT',
        },
        {
          path: '/Lumeo-Jetson-Getting-Started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/object_detection_lumeo.gif',
          title: 'Object Detection with Lumeo',
          title_cn: '使用 Lumeo 实现目标检测',
          title_ja: 'Lumeo で物体検出',
          title_es: 'Detección de objetos con Lumeo',
          title_pt_br: 'Detecção de objetos com Lumeo',
        },
        {
          path: '/a_loam',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/fig0.gif',
          title: 'How to run A-LOAM 3D SLAM on reComputer',
          title_cn: '在 reComputer 上运行 A-LOAM 三维 SLAM',
          title_ja: 'reComputer で A-LOAM 3D SLAM を実行する方法',
          title_es: 'Cómo ejecutar A-LOAM 3D SLAM en reComputer',
          title_pt_br: 'Como executar o A-LOAM 3D SLAM no reComputer',
        },
        {
          path: '/CVEDIA-Jetson-Getting-Started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/CVEDIA-RT.gif',
          title: 'Getting Started with CVEDIA-RT on NVIDIA® Jetson Devices',
          title_cn: '在 NVIDIA® Jetson 设备上使用 CVEDIA-RT 入门',
          title_ja: 'NVIDIA® Jetson デバイスでの CVEDIA-RT 入門',
          title_es: 'Introducción a CVEDIA-RT en dispositivos NVIDIA® Jetson',
          title_pt_br: 'Introdução ao CVEDIA-RT em dispositivos NVIDIA® Jetson',
        }
      ]
    },
    {
      key: 'arduino',
      image: 'arduino',
      moreLink:'https://wiki.seeedstudio.com/Arduino/',
      docList: [
        {
          path: '/xiao_esp32s3_getting_started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/xiaoesp32s3sense.webp',
          title: 'Seeed Studio XIAO ESP32S3 (Sense)',
          title_cn: 'Seeed Studio XIAO ESP32S3（Sense）',
          title_ja: 'Seeed Studio XIAO ESP32S3（Sense）',
          title_es: 'Seeed Studio XIAO ESP32S3 (Sense)',
          title_pt_br: 'Seeed Studio XIAO ESP32S3 (Sense)',
        },
        {
          path: '/XIAO_BLE',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/XIAO-nRF52840-Sense-45font.webp',
          title: 'Seeed Studio XIAO nRF52840 (Sense)',
          title_cn: 'Seeed Studio XIAO nRF52840（Sense）',
          title_ja: 'Seeed Studio XIAO nRF52840（Sense）',
          title_es: 'Seeed Studio XIAO nRF52840 (Sense)',
          title_pt_br: 'Seeed Studio XIAO nRF52840 (Sense)',
        },
        {
          path: '/XIAO_ESP32C3_Getting_Started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/xiao-esp32c3.webp',
          title: 'Seeed Studio XIAO ESP32C3',
          title_cn: 'Seeed Studio XIAO ESP32C3',
          title_ja: 'Seeed Studio XIAO ESP32C3',
          title_es: 'Seeed Studio XIAO ESP32C3',
          title_pt_br: 'Seeed Studio XIAO ESP32C3',
        },
        {
          path: '/xiao_esp32c6_getting_started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/xiaoc6.webp',
          title: 'Seeed Studio XIAO ESP32C6',
          title_cn: 'Seeed Studio XIAO ESP32C6',
          title_ja: 'Seeed Studio XIAO ESP32C6',
          title_es: 'Seeed Studio XIAO ESP32C6',
          title_pt_br: 'Seeed Studio XIAO ESP32C6',
        }, 
        {
          path: '/Seeeduino-XIAO',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/Seeeduino-XIAO-preview-1.webp',
          title: 'Seeed Studio XIAO SAMD21',
          title_cn: 'Seeed Studio XIAO SAMD21',
          title_ja: 'Seeed Studio XIAO SAMD21',
          title_es: 'Seeed Studio XIAO SAMD21',
          title_pt_br: 'Seeed Studio XIAO SAMD21',
        },
        {
          path: '/Grove-Beginner-Kit-For-Arduino',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/grove-beginner-kit-for-arduino.webp',
          title: 'Grove Beginner Kit For Arduino',
          title_cn: 'Grove Arduino 入门套件',
          title_ja: 'Grove ビギナーキット（Arduino向け）',
          title_es: 'Kit para Principiantes Grove para Arduino',
          title_pt_br: 'Kit Grove para Iniciantes com Arduino',
        },
        {
          path: '/Wio-Terminal-Getting-Started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/wio.webp',
          title: 'Wio Terminal',
          title_cn: 'Wio Terminal',
          title_ja: 'Wio Terminal',
          title_es: 'Wio Terminal',
          title_pt_br: 'Wio Terminal',
        }, 
        {
          path: '/Edgebox-ESP-100-Arduino',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/EdgeBox-ESP-100.webp',
          title: 'EdgeBox-ESP-100',
          title_cn: 'EdgeBox-ESP-100',
          title_ja: 'EdgeBox-ESP-100',
          title_es: 'EdgeBox-ESP-100',
          title_pt_br: 'EdgeBox-ESP-100',
        }
      ]
    }, 
    {
      key: 'raspberry',
      image: 'raspberry',
      moreLink:'https://wiki.seeedstudio.com/Raspberry_Pi/',
      docList: [
        {
          path: '/r2000_series_getting_start',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-ai-r2000.webp',
          title: 'Getting Started with reComputer AI R20',
          title_cn: 'reComputer AI R20 入门',
          title_ja: 'reComputer AI R20 入門',
          title_es: 'Introducción a reComputer AI R20',
          title_pt_br: 'Introdução ao reComputer AI R20',
        }, 
        {
          path: '/recomputer_ai_industrial_r2135_getting_start',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-industrial-r2135.webp',
          title: 'Getting Started with reComputer AI Industrial R21',
          title_cn: 'reComputer AI Industrial R21 入门',
          title_ja: 'reComputer AI Industrial R21 入門',
          title_es: 'Introducción a reComputer AI Industrial R21',
          title_pt_br: 'Introdução ao reComputer AI Industrial R21',
        },
        {
          path: '/recomputer_industrial_r20xx_getting_start',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-industrial-r20xx.webp',
          title: 'Getting Started with reComputer Industrial R20',
          title_cn: 'reComputer Industrial R20 入门',
          title_ja: 'reComputer Industrial R20 入門',
          title_es: 'Introducción a reComputer Industrial R20',
          title_pt_br: 'Introdução ao reComputer Industrial R20',
        },
        {
          path: '/recomputer_industrial_R21xx_getting_start',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-industrial-r21xx.webp',
          title: 'Getting Started with reComputer Industrial R21',
          title_cn: 'reComputer Industrial R21 入门',
          title_ja: 'reComputer Industrial R21 入門',
          title_es: 'Introducción a reComputer Industrial R21',
          title_pt_br: 'Introdução ao reComputer Industrial R21',
        },
        {
          path: '/recomputer_r',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-r1000.webp',
          title: 'Getting Started with reComputer R10',
          title_cn: 'reComputer R10 入门',
          title_ja: 'reComputer R10 入門',
          title_es: 'Introducción a reComputer R10',
          title_pt_br: 'Introdução ao reComputer R10',
        }, 
        {
          path: '/recomputer_r1100_intro',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-r1100.webp',
          title: 'Getting Started with reComputer R11',
          title_cn: 'reComputer R11 入门',
          title_ja: 'reComputer R11 入門',
          title_es: 'Introducción a reComputer R11',
          title_pt_br: 'Introdução ao reComputer R11',
        },
        {
          path: '/reTerminal',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/reTerminal.webp',
          title: 'Getting Started with reTerminal',
          title_cn: 'reTerminal 入门',
          title_ja: 'reTerminal 入門',
          title_es: 'Introducción a reTerminal',
          title_pt_br: 'Introdução ao reTerminal',
        },
        {
          path: '/recomputer_r1000_flash_OS',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/reComputer_R1025.webp',
          title: 'reComputer R1000 Raspbian OS to eMMC',
          title_cn: '在 reComputer R1000 上将 Raspbian OS 刷写到 eMMC',
          title_ja: 'reComputer R1000 に Raspbian OS を eMMC へ書き込み',
          title_es: 'Raspbian OS a eMMC en reComputer R1000',
          title_pt_br: 'Gravar o sistema Raspbian OS no eMMC do reComputer R1000',
        }
      ]
    },
    {
      key: 'nvidia',
      image: 'nvidia',
      moreLink:'https://wiki.seeedstudio.com/NVIDIA_Jetson/',
      docList: [
        {
          path: '/reServer_Industrial_Getting_Started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/reserver.webp',
          title: 'Getting Started with reServer Industrial',
          title_cn: 'reServer Industrial 入门',
          title_ja: 'reServer Industrial 入門',
          title_es: 'Introducción a reServer Industrial',
          title_pt_br: 'Introdução ao reServer Industrial',
        },
        {
          path: '/reComputer_Industrial_Getting_Started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/reComputerheadline.webp',
          title: 'Getting Started with reComputer Industrial',
          title_cn: 'reComputer Industrial 入门',
          title_ja: 'reComputer Industrial 入門',
          title_es: 'Introducción a reComputer Industrial',
          title_pt_br: 'Introdução ao reComputer Industrial',
        },
        {
          path: '/reserver_j501_getting_started',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/reServer_J501.webp',
          title: 'Getting Started with reServer J501',
          title_cn: 'reServer J501 入门',
          title_ja: 'reServer J501 入門',
          title_es: 'Introducción a reServer J501',
          title_pt_br: 'Introdução ao reServer J501',
        },
        {
          path: '/reComputer_J4012_Flash_Jetpack',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/recomputer-j401.webp',
          title: 'Flash JetPack OS to J401 Carrier Board',
          title_cn: '为 J401 载板刷写 JetPack OS',
          title_ja: 'J401 キャリアボードへ JetPack OS をフラッシュ',
          title_es: 'Flashear JetPack OS a la placa portadora J401',
          title_pt_br: 'Gravar o sistema JetPack OS na placa carrier J401',
        },
        {
          path: '/reComputer_Jetson_Series_Initiation',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/rekaiji6.webp',
          title: 'reComputer for Jetson Initiation',
          title_cn: 'reComputer for Jetson 入门',
          title_ja: 'reComputer for Jetson 入門',
          title_es: 'Iniciación a reComputer para Jetson',
          title_pt_br: 'Introdução ao reComputer para Jetson',
        },
        {
          path: '/deploy_frigate_on_jetson',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/frigate.webp',
          title: 'Deploy Frigate On NVIDIA Jetson device',
          title_cn: '在 NVIDIA Jetson 设备上部署 Frigate',
          title_ja: 'NVIDIA Jetson デバイスに Frigate をデプロイ',
          title_es: 'Desplegar Frigate en dispositivo NVIDIA Jetson',
          title_pt_br: 'Implantar o Frigate em dispositivos NVIDIA Jetson',
        },
        {
          path: '/reComputer_Jetson_Memory_Expansion',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/jetson_memory_expansion.webp',
          title: 'reComputer for Jetson Memory Expansion',
          title_cn: 'reComputer for Jetson 内存扩展',
          title_ja: 'reComputer for Jetson メモリ拡張',
          title_es: 'Expansión de memoria para reComputer en Jetson',
          title_pt_br: 'Expansão de memória do reComputer para Jetson',
        },
        {
          path: '/YOLOv8-DeepStream-TRT-Jetson',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/yolov8_car.webp',
          title: 'YOLOv8 on Jetson with TensorRT and DeepStream',
          title_cn: '在 Jetson 上基于 TensorRT 与 DeepStream 运行 YOLOv8',
          title_ja: 'Jetson で TensorRT と DeepStream による YOLOv8',
          title_es: 'YOLOv8 en Jetson con TensorRT y DeepStream',
          title_pt_br: 'YOLOv8 no Jetson com TensorRT e DeepStream',
        }
      ]
    }, 
    {
      key: 'homeAssistant',
      image: 'ha',
      moreLink:'https://wiki.seeedstudio.com/home_assistant_topic/',
      docList: [
        {
          path: '/respeaker_xvf3800_xiao_home_assistant',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/respeaker-xmos-xvf3800-with-ha.webp',
          title: 'Smart Home Voice Control on ReSpeaker XVF3800 with Home Assistant',
          title_cn: '基于 Home Assistant 的 ReSpeaker XVF3800 智能家居语音控制',
          title_ja: 'Home Assistant と ReSpeaker XVF3800 によるスマートホーム音声制御',
          title_es: 'Control por voz de hogar inteligente en ReSpeaker XVF3800 con Home Assistant',
          title_pt_br: 'Controle de voz para casa inteligente no ReSpeaker XVF3800 com Home Assistant',
        },
        {
          path: '/r2000_series_frigate_and_home_assistant',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/frigate-on-recomputer-r2000-with-ha.webp',
          title: 'Frigate NVR and Hailo on reComputer R2xxx connect with Home Assistant',
          title_cn: 'reComputer R2xxx 上的 Frigate NVR 与 Hailo 连接 Home Assistant',
          title_ja: 'reComputer R2xxx の Frigate NVR と Hailo を Home Assistant と連携',
          title_es: 'Frigate NVR y Hailo en reComputer R2xxx conectados con Home Assistant',
          title_pt_br: 'Frigate NVR e Hailo no reComputer R2xxx conectados ao Home Assistant',
        },
        {
          path: '/xiao-esp32c3-esphome',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/c3_accesses_ha.webp',
          title: 'XIAO ESP32C3 accesses Home Assistant via ESPHome service',
          title_cn: 'XIAO ESP32C3 通过 ESPHome 接入 Home Assistant',
          title_ja: 'XIAO ESP32C3 が ESPHome 経由で Home Assistant に接続',
          title_es: 'XIAO ESP32C3 accede a Home Assistant vía ESPHome',
          title_pt_br: 'O XIAO ESP32C3 acessa o Home Assistant via ESPHome',
        },
        {
          path: '/home_assistant_with_sensecap_lorawan_sensors',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/ha_sensecap.webp',
          title: 'Tango with Home Assistant and SenseCAP Sensors',
          title_cn: '搭配 Home Assistant 与 SenseCAP 传感器的应用',
          title_ja: 'Home Assistant と SenseCAP センサーで連携',
          title_es: 'Integración con Home Assistant y sensores SenseCAP',
          title_pt_br: 'Integração com Home Assistant e sensores SenseCAP',
        },
        {
          path: '/SenseCAP_Indicator_Application_Matter',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/indicator-matter-7.webp',
          title: 'SenseCAP Indicator - Matter Application Development',
          title_cn: 'SenseCAP Indicator —— Matter 应用开发',
          title_ja: 'SenseCAP Indicator ― Matter アプリ開発',
          title_es: 'SenseCAP Indicator: desarrollo de aplicaciones Matter',
          title_pt_br: 'SenseCAP Indicator - Desenvolvimento de aplicações Matter',
        },
        {
          path: '/reterminal-DM-Frigate',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/frigate_with_reterminal.webp',
          title: 'Frigate intergrating with reTerminal DM',
          title_cn: 'Frigate 集成 reTerminal DM',
          title_ja: 'Frigate を reTerminal DM と統合',
          title_es: 'Integración de Frigate con reTerminal DM',
          title_pt_br: 'Integração do Frigate com o reTerminal DM',
        }, 
        {
          path: '/Connect-Grove-to-Home-Assistant-ESPHome',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/grove_to_esphome.webp',
          title: 'Connect Grove Modules to Home Assistant using ESPHome',
          title_cn: '使用 ESPHome 将 Grove 模块接入 Home Assistant',
          title_ja: 'ESPHome を使って Grove モジュールを Home Assistant に接続',
          title_es: 'Conectar módulos Grove a Home Assistant con ESPHome',
          title_pt_br: 'Conecte módulos Grove ao Home Assistant usando ESPHome',
        },
        {
          path: '/home_assistant_sensecap',
          image: 'https://files.seeedstudio.com/wiki/Homepage_browseby/config_11.webp',
          title: 'SenseCAP Integration for Home Assistant',
          title_cn: 'Home Assistant 的 SenseCAP 集成',
          title_ja: 'Home Assistant 向け SenseCAP 連携',
          title_es: 'Integración de SenseCAP para Home Assistant',
          title_pt_br: 'Integração do SenseCAP para Home Assistant',
        }
      ]
    },
    {
      key: 'rockchip',
      image: 'rockchip',
      moreLink:'https://wiki.seeedstudio.com/object_detection_with_yolov11_on_recomputer_rk/',
      docList: [
        {
          path: 'https://sensecraft.seeed.cc/ai-lab',
          image: 'https://files.seeedstudio.com/wiki/object_detection_with_yolov11_on_recomputer-rk/recomputer_ai_lab_cover.webp',
          title: 'reComputer AI Lab',
          title_cn: 'reComputer AI Lab',
          title_ja: 'reComputer AI Lab',
          title_es: 'reComputer AI Lab',
          title_pt_br: 'reComputer AI Lab',
        },
        {
          path: '/object_detection_with_yolov11_on_recomputer_rk',
          image: 'https://files.seeedstudio.com/wiki/object_detection_with_yolov11_on_recomputer-rk/demonstration.webp',
          title: 'Object Detection with YOLOv11 on reComputer-RK',
          title_cn: '在 reComputer-RK 上使用 YOLOv11 进行目标检测',
          title_ja: 'reComputer-RK で YOLOv11 を使用した物体検出',
          title_es: 'Detección de objetos con YOLOv11 en reComputer-RK',
          title_pt_br: 'Detecção de objetos com YOLOv11 no reComputer-RK',
        }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [docList, setDocsList] = useState(wikiList[0].docList);
  const [moreLink, setMoreLink] = useState(wikiList[0].moreLink);

  const changeTab = (index) => {
    setActiveIndex(index);
    setDocsList(wikiList[index].docList);
    setMoreLink(wikiList[index].moreLink);
  };

  useEffect(() => {
    const dom = document.querySelector('.navbar__items--right .clean-btn')
    dom && dom.addEventListener('click', () => {
      setTimeout(() => {
        const htmlElement = document.documentElement;
        const dataTheme = htmlElement.getAttribute('data-theme');
        setTheme(dataTheme)
      }, 20);
    });
  }, [props.theme]);

  return (
    <div className={clsx(css.browseBy, css[theme], 'com_module')}>
      <div className={css.latested_header}>
        <div className={css.latested_header_left}>
          <div className={css.latested_header_title}>
            {I18N[locale].title}
          </div>
        </div>
      </div>

      <div className={css.browseBy_box}>
        <div className={css.browseBy_header}>
          {wikiList.map((item, index) => {
            const src = getIndexImage(item.image + `${theme === 'light' ? '_light' : ''}.png`);
            return (
              <div
                className={clsx(css.browseBy_item, index === activeIndex ? css.active : '')}
                key={item.key}
                onClick={() => changeTab(index)}
              >
                <img src={src} alt="" />
              </div>
            )
          })}
        </div>

        <div className={css.browseBy_container}>
          {docList.map((item, index) => {
            return (
              <a className={css.doc_item} href={localizeHref(item.path, locale)} key={`${item.path}-${index}`}>
                <img src={item.image} alt="" />
                <div className={clsx(css.wiki_name,'ellipsis-2')}>
                  {getLocalizedTitle(item, locale)}
                </div>
              </a>
            )
          })}
        </div>

        <div className={css.browseBy_more}>
          <a href={localizeHref(moreLink, locale)}>
            {I18N[locale].more}  <FaChevronRight size={14}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexLatestedViki;
