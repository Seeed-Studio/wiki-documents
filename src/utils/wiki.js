const docList = [
  [
    {
      "path": "/deploy_nvblox_jetson_agx_orin",
      "image": "https://files.seeedstudio.com/wiki/other/page-nvblox.jpg",
      "title": "Deploy NVBlox with Orbbec Camera on Jetson AGX Orin",
      "date": "2026-01-20T00:00:00.000Z",
      "title_cn": "在 Jetson AGX Orin 上部署 NVBlox 与 Orbbec 相机",
      "title_ja": "Jetson AGX Orin上でOrbbecカメラとNVBloxを展開する",
      "title_es": "Desplegar NVBlox con Cámara Orbbec en Jetson AGX Orin"
    },
    {
      "path": "/deploy_whisper_on_raspberry_pi_ai_box",
      "image": "https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",
      "title": "Deploy Whisper on  Raspberry Pi AI box",
      "date": "01/19/2026",
      "title_cn": "在树莓派 AI 盒子上部署 Whisper",
      "title_ja": "Raspberry Pi AI ボックスに Whisper をデプロイする",
      "title_es": "Desplegar Whisper en Raspberry Pi AI box"
    }
  ],
  [
    {
      "path": "/xiao-esp32c3-espresense",
      "image": "https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image132.webp",
      "title": "Deploying ESPresense on Seeed Studio XIAO ESP32-C3 with Home Assistant",
      "date": "01/16/2026",
      "title_cn": "在 Seeed Studio XIAO ESP32-C3 上部署 ESPresense 与 Home Assistant",
      "title_ja": "Seeed Studio XIAO ESP32-C3でESPresenseをHome Assistantと連携してデプロイする",
      "title_es": "Desplegando ESPresense en Seeed Studio XIAO ESP32-C3 con Home Assistant"
    },
    {
      "path": "/xiao_nrf54l15_sense_micropython",
      "image": "https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.webp",
      "title": "MicroPython for Seeed Studio XIAO nRF54L15",
      "date": "1/15/2026",
      "title_cn": "Seeed Studio XIAO nRF54L15 的 MicroPython",
      "title_ja": "Seeed Studio XIAO nRF54L15 用 MicroPython",
      "title_es": "MicroPython para Seeed Studio XIAO nRF54L15"
    }
  ],
  [
    {
      "path": "/recomputer_rs485_loopback_test",
      "image": "https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/RS485_connection.jpg",
      "title": "reComputer RS485 test",
      "date": "01/14/2026",
      "title_cn": "reComputer RS485 测试",
      "title_ja": "reComputer RS485 テスト",
      "title_es": "Prueba RS485 de reComputer"
    },
    {
      "path": "/xiao_esp32c5_with_freertos",
      "image": "https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp",
      "title": "XIAO ESP32-C5 With FreeRTOS",
      "date": "1/13/2026",
      "title_cn": "XIAO ESP32-C5 与 FreeRTOS",
      "title_ja": "XIAO ESP32-C5 と FreeRTOS",
      "title_es": "XIAO ESP32-C5 Con FreeRTOS"
    }
  ],
  [
    {
      "path": "/deploy_depth_anything_v3_jetson_agx_orin",
      "image": "https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp",
      "title": "Deploy Depth Anything V3 on Jetson AGX Orin",
      "date": "2026-01-09T00:00:00.000Z",
      "title_cn": "在 Jetson AGX Orin 上部署 Depth Anything V3",
      "title_ja": "Jetson AGX Orin上でDepth Anything V3をデプロイ",
      "title_es": "Desplegar Depth Anything V3 en Jetson AGX Orin"
    },
    {
      "path": "/ai_robotics_distributed_llama_cpp_rpc_jetson",
      "image": "https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg",
      "title": "Distributed llama.cpp on reComputer Jetson (RPC Mode)",
      "date": "2026-01-09T00:00:00.000Z",
      "title_cn": "在 reComputer Jetson 上的分布式 llama.cpp（RPC 模式）",
      "title_ja": "reComputer Jetson での分散 llama.cpp（RPC モード）",
      "title_es": "llama.cpp Distribuido en reComputer Jetson (Modo RPC)"
    }
  ],
  [
    {
      "path": "/t1000e_for_lorawan_introduction",
      "image": "https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp",
      "title": "T1000-E for LoRaWAN Introduction",
      "date": "1/9/2026",
      "title_cn": "T1000-E for LoRaWAN 介绍",
      "title_ja": "T1000-E for LoRaWAN 紹介",
      "title_es": "Introducción al T1000-E para LoRaWAN"
    },
    {
      "path": "/reachymini_getting_started",
      "image": "https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.webp",
      "title": "ReachyMini Getting Started",
      "date": "1/7/2026"
    }
  ],
  [
    {
      "path": "/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection",
      "image": "https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp",
      "title": "Vibration Anomaly Detection",
      "date": "01/06/2026",
      "title_cn": "振动异常检测",
      "title_ja": "振動異常検出",
      "title_es": "Detección de Anomalías de Vibración"
    },
    {
      "path": "/local_voice_llm_on_recomputer_jetson_for_reachy_mini",
      "image": "https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.webp",
      "title": "Deploy local voice LLM on reComputer Mini for Reachy Mini!",
      "date": "01/06/2026",
      "title_cn": "在 reComputer Mini 上为 Reachy Mini 部署本地语音 LLM！",
      "title_ja": "Reachy Mini用reComputer Miniにローカル音声LLMをデプロイ！",
      "title_es": "¡Despliega LLM de voz local en reComputer Mini para Reachy Mini!"
    }
  ]
];

export default docList;