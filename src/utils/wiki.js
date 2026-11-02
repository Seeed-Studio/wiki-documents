const docList = [
  [
    {
      "path": "/solutions/crayfish-behavior-recognition",
      "image": "https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png",
      "title": "Aquaculture Crayfish Behavior Recognition: 4-Stage Pipeline and Edge Benchmarks",
      "date": "2026-10-30",
      "title_cn": "水产小龙虾争斗识别：4 级漏斗流水线与端侧实测性能",
      "title_ja": "水産ザリガニ争闘行動認識：4段階ファネルパイプラインとエッジ実測性能",
      "title_es": "Reconocimiento de Comportamiento de Cangrejo de Río en Acuicultura: Canalización de 4 Etapas y Benchmarks en el Borde",
      "title_pt": "Reconhecimento de Comportamento de Lagostim em Aquicultura: Pipeline em 4 Estágios e Benchmarks na Borda"
    },
    {
      "path": "/solutions/rehab-posture-analysis",
      "image": "https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/cover-93765b27.png",
      "title": "Edge AI Rehabilitation Posture Analysis: 33-Keypoint Pose and Clinical Kinematics",
      "date": "2026-10-30",
      "title_cn": "边缘 AI 康复姿态与动作分析：33 关键点与临床运动学评估",
      "title_ja": "エッジ AI リハビリ姿勢・動作分析：33キーポイント骨格と臨床運動力学評価",
      "title_es": "Análisis de Postura para Rehabilitación con Edge AI: Pose de 33 Puntos Clave y Cinemática Clínica",
      "title_pt": "Análise de Postura para Reabilitação com IA de Borda: Pose de 33 Pontos-Chave e Cinemática Clínica"
    }
  ],
  [
    {
      "path": "/jetson/accelerate_llm_inference_mtp",
      "image": "https://files.seeedstudio.com/wiki/Jetson/Application/jetson-mtp-cover-en.png",
      "title": "Speed Up llama.cpp on NVIDIA Jetson AGX Orin with MTP",
      "date": "2026-10-23",
      "title_cn": "使用 MTP 加速 NVIDIA Jetson AGX Orin 上的 llama.cpp",
      "title_ja": "NVIDIA Jetson AGX Orin 上の llama.cpp を MTP で高速化",
      "title_es": "Acelera llama.cpp en NVIDIA Jetson AGX Orin con MTP",
      "title_pt": "Acelere o llama.cpp no NVIDIA Jetson AGX Orin com MTP"
    },
    {
      "path": "/recamera_firgate",
      "image": "https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp",
      "title": "Integrate reCamera into Frigate",
      "date": "2026-10-18T00:00:00.000Z",
      "title_cn": "将 reCamera 集成到 Frigate 中",
      "title_ja": "reCamera を Frigate に統合する",
      "title_es": "Integrar reCamera en Frigate",
      "title_pt": "Integrar a reCamera ao Frigate"
    }
  ],
  [
    {
      "path": "/t1000e_meshcore_contact_sharing_companion_repeat",
      "image": "https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png",
      "title": "Extend Your MeshCore Network with T1000-E: Contact Sharing and Companion Repeat",
      "date": "10/16/2026",
      "title_cn": "使用 T1000-E 扩展 MeshCore 网络：联系人共享与同伴重复中继",
      "title_ja": "T1000-E で MeshCore ネットワークを拡張する：連絡先共有と Companion リピート",
      "title_es": "Amplía tu red MeshCore con T1000-E: compartir contactos y repetición con Companion",
      "title_pt": "Estenda sua rede MeshCore com o T1000-E: Compartilhamento de Contatos e Companion Repeat"
    },
    {
      "path": "/respeaker_xvf3800_i2s_usb_bridge",
      "image": "https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp",
      "title": "reSpeaker XVF3800 USB Audio Bridge with XIAO ESP32S3",
      "date": "2026-10-12",
      "title_cn": "reSpeaker XVF3800 搭配 XIAO ESP32S3 的 USB 音频桥",
      "title_ja": "reSpeaker XVF3800 USB オーディオブリッジ with XIAO ESP32S3",
      "title_es": "Puente de audio USB reSpeaker XVF3800 con XIAO ESP32S3",
      "title_pt": "Ponte de Áudio USB reSpeaker XVF3800 com XIAO ESP32S3"
    }
  ],
  [
    {
      "path": "/solutions/clip-private-transcription",
      "image": "https://files.seeedstudio.com/wiki/reference-design/clip_private_transcription/panel-transcript-detail-zh-20261009-a9a0f4d1.jpg",
      "title": "Private On-Premise Transcription for reSpeaker Clip — Selection, Deployment and Measured Data",
      "date": "2026-10-09",
      "title_cn": "reSpeaker Clip 本地私有化转写方案：选型、部署与实测数据",
      "title_ja": "reSpeaker Clip ローカル文字起こし：選定・導入・実測データ",
      "title_es": "Transcripción privada local para reSpeaker Clip — Selección, despliegue y datos medidos",
      "title_pt": "Transcrição privada local para reSpeaker Clip — seleção, implantação e dados medidos"
    },
    {
      "path": "/solutions/home-assistant-local-voice",
      "image": "https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg",
      "title": "Home Assistant Local Voice Control — Selection, Deployment and Measured Data",
      "date": "2026-10-09",
      "title_cn": "Home Assistant 本地语音控制方案：选型、部署与实测数据",
      "title_ja": "Home Assistant ローカル音声操作：選定・導入・実測データ",
      "title_es": "Control de voz local en Home Assistant — Selección, despliegue y datos medidos",
      "title_pt": "Controle de Voz Local no Home Assistant — Seleção, Implantação e Dados Medidos"
    }
  ],
  [
    {
      "path": "/solutions/edge-license-plate-recognition",
      "image": "https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg",
      "title": "Edge License Plate Recognition — Selection, Deployment and Measured Data",
      "date": "2026-10-09",
      "title_cn": "边缘车牌识别方案：选型、部署与实测数据",
      "title_ja": "エッジ ナンバープレート認識：選定・導入・実測データ",
      "title_es": "Reconocimiento de matrículas en el borde — Selección, despliegue y datos medidos",
      "title_pt": "Reconhecimento de Placas na Borda — Seleção, Implantação e Dados Medidos"
    },
    {
      "path": "/solutions/edge-parking-counting",
      "image": "https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg",
      "title": "Parking Entry/Exit Vehicle Counting — Selection, Deployment and Measured Data",
      "date": "2026-10-09",
      "title_cn": "停车场车辆进出计数方案：选型、部署与实测数据",
      "title_ja": "駐車場 入出庫カウント：選定・導入・実測データ",
      "title_es": "Conteo de vehículos en entradas/salidas de aparcamientos — Selección, despliegue y datos medidos",
      "title_pt": "Contagem de Veículos em Entradas/Saídas de Estacionamento — Seleção, Implantação e Dados Medidos"
    }
  ],
  [
    {
      "path": "/solutions/edge-parking-occupancy",
      "image": "https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg",
      "title": "Camera-Based Parking Occupancy Detection — Selection, Deployment and Measured Data",
      "date": "2026-10-09",
      "title_cn": "视频车位占用检测方案：选型、部署与实测数据",
      "title_ja": "カメラによる駐車スペース検知：選定・導入・実測データ",
      "title_es": "Detección de Ocupación de Aparcamiento Basada en Cámara — Selección, Despliegue y Datos Medidos",
      "title_pt": "Detecção de Ocupação de Estacionamento Baseada em Câmera — Seleção, Implantação e Dados Medidos"
    },
    {
      "path": "/sensecraft_robotics_rebot_arm_102_b601_dm",
      "image": "https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp",
      "title": "reBot Arm 102 + B601 DM Training Guide",
      "date": "2026-09-24",
      "title_cn": "reBot Arm 102 + B601 DM 训练指南",
      "title_ja": "reBot Arm 102 + B601 DM トレーニングガイド",
      "title_es": "Guía de entrenamiento reBot Arm 102 + B601 DM",
      "title_pt": "Guia de Treinamento reBot Arm 102 + B601 DM"
    }
  ]
];

export default docList;