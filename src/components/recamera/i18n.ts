export type ReCameraLocale = 'en' | 'zh-CN' | 'ja' | 'es' | 'pt-BR';

type TranslationMap = Record<string, string>;

const translations: Record<Exclude<ReCameraLocale, 'en'>, TranslationMap> = {
  'zh-CN': {
    'reCamera Family': 'reCamera 产品家族',
    'Open Source AI Camera Platform': '开源 AI 摄像头平台',
    'From entry-level edge AI to high-performance industrial vision — the reCamera family offers flexible solutions for every scenario. Powered by open-source software, dual-architecture support, and a growing ecosystem of modules and accessories.':
      '从入门级边缘 AI 到高性能工业视觉，reCamera 产品家族可为不同场景提供灵活的解决方案。依托开源软件、双架构支持，以及持续扩展的模块与配件生态，帮助你快速构建视觉 AI 应用。',
    'reCamera Product Family': 'reCamera 产品家族',
    'Choose Your': '选择你的',
    'Select from the reCamera family — devices, modules, and accessories to build your edge AI vision solution':
      '从 reCamera 产品家族中选择设备、模块和配件，构建你的边缘 AI 视觉解决方案',
    'New': '新品',
    'Getting Started': '快速入门',
    'Train your custom model in': '训练你的自定义模型，仅需',
    '1 minute': '1 分钟',
    'Collect data': '采集数据',
    'One-click training': '一键训练',
    'Deploy to reCamera': '部署到 reCamera',
    'Build with': '使用',
    'Applications, open-source tools, and community to accelerate your development':
      '通过应用案例、开源工具和社区资源，加速你的开发',
    'Seeed Studio empowers innovators with open-source hardware and AI-powered edge computing solutions. reCamera is built for developers, by developers.':
      'Seeed Studio 通过开源硬件和 AI 边缘计算解决方案赋能创新者。reCamera 面向开发者打造，也由开发者共同推动。',
    'Product': '产品',
    'Accessories': '配件',
    'Buy reCamera': '购买 reCamera',
    'Resources': '资源',
    'Node-RED Guide': 'Node-RED 指南',
    'Model Zoo': '模型库',
    'GitHub Repo': 'GitHub 仓库',
    'Community': '社区',
    'Forum': '论坛',
    'All rights reserved.': '保留所有权利。',

    'Devices': '设备',
    'Modules': '模块',
    'Entry-Level': '入门级',
    'M12 Lens': 'M12 镜头',
    'Gimbal': '云台',
    'AI Tracking': 'AI 跟踪',
    'Multimodal AI': '多模态 AI',
    'M12 Mount': 'M12 卡口',
    'Replaceable': '可更换',
    'Core': '核心板',
    'WiFi Option': 'WiFi 可选',
    'Base Board': '底板',
    'Gen 1': '第一代',
    'Long Range': '远距离',
    'Wireless': '无线',
    'Outdoor Enclosure': '户外防护外壳',
    'Outdoor': '户外',
    'M12 Lens Collection': 'M12 镜头套装',
    '4 Options': '4 种选择',
    'Wide to Macro': '广角到微距',
    'reCamera 2002 Sensor Board (GC2053)': 'reCamera 2002 传感器板（GC2053）',
    'reCamera 2002 Core Board': 'reCamera 2002 核心板',
    'reCamera 2002 Base Board with PoE': 'reCamera 2002 PoE 底板',
    'reCamera 2002 Base Board WiFi HaLow': 'reCamera 2002 WiFi HaLow 底板',
    'Entry-level open-source AI camera. SG2002 (RISC-V), 1 TOPS NPU, Node-RED visual programming. The most affordable reCamera for quick project prototyping and validation. Available with/without WiFi and in 8GB/64GB storage options.':
      '入门级开源 AI 摄像头，搭载 SG2002（RISC-V）、1 TOPS NPU，并支持 Node-RED 可视化编程。作为价格最亲民的 reCamera，非常适合快速完成项目原型和验证。提供带/不带 WiFi，以及 8GB/64GB 存储版本。',
    'PoE-powered AI camera with swappable M12 lens mount. GC2053 sensor, data and power through a single Ethernet cable. Supports wide-angle, telephoto and macro lenses for flexible viewing angles in production deployments.':
      '支持 PoE 供电的 AI 摄像头，配备可更换的 M12 镜头卡口和 GC2053 传感器，通过一根以太网线同时传输数据和供电。支持广角、长焦和微距镜头，适合生产部署中的多种视角需求。',
    'AI camera with dual brushless motor gimbal and CAN bus communication. Pan and tilt control combined with AI tracking for dynamic viewpoint control. Ideal for robotics, interactive systems, and applications requiring flexible camera angles.':
      '搭载双无刷电机云台并支持 CAN 总线通信的 AI 摄像头。通过水平/俯仰控制结合 AI 跟踪，实现动态视角控制，适用于机器人、交互系统以及需要灵活拍摄角度的应用。',
    'High-performance AI camera for B2B and professional security. Rockchip RV1126B (quad-core Cortex-A53 ARM), 3 TOPS NPU, 2GB/4GB LPDDR4, 4K@30FPS starlight sensor. Supports CV / VLM / LLM / voice AI multimodal inference. Starting at $299.90.':
      '面向 B2B 和专业安防场景的高性能 AI 摄像头。搭载 Rockchip RV1126B（四核 Cortex-A53 ARM）、3 TOPS NPU、2GB/4GB LPDDR4 和 4K@30FPS 星光级传感器，支持 CV / VLM / LLM / 语音 AI 多模态推理。起售价 $299.90。',
    'Replaceable front panel with GC2053 sensor and M12 swappable lens mount. Upgrade your Gen 1 reCamera with interchangeable lenses for custom fields of view. Compatible with all reCamera 2002 series devices.':
      '可更换前面板，搭载 GC2053 传感器和可更换 M12 镜头卡口。可为第一代 reCamera 增加可更换镜头能力，以自定义视场角，并兼容所有 reCamera 2002 系列设备。',
    'Universal core board for all Gen 1 reCamera devices. Available with/without WiFi and in 8GB/64GB storage. Use for storage expansion or adding WiFi capability to your existing reCamera.':
      '适用于所有第一代 reCamera 设备的通用核心板。提供带/不带 WiFi 和 8GB/64GB 存储版本，可用于扩展存储或为现有 reCamera 增加 WiFi 能力。',
    'PoE-enabled base board for all Gen 1 reCamera devices. Add PoE power and networking through a single Ethernet cable, or replace a damaged existing base board.':
      '适用于所有第一代 reCamera 设备的 PoE 底板。可通过一根以太网线同时实现 PoE 供电和网络连接，也可用于替换损坏的现有底板。',
    'WiFi HaLow base board for all Gen 1 reCamera devices. Adds long-range, low-power wireless communication and video transmission capability using sub-GHz band.':
      '适用于所有第一代 reCamera 设备的 WiFi HaLow 底板。利用 Sub-GHz 频段增加远距离、低功耗无线通信和视频传输能力。',
    'IP65-rated weatherproof outdoor enclosure designed for reCamera 2002 HQ PoE. Protects your camera from rain, dust, and harsh environments for reliable long-term outdoor operation.':
      '专为 reCamera 2002 HQ PoE 设计的 IP65 防护等级户外外壳，可防雨、防尘并应对严苛环境，帮助摄像头长期稳定地在户外运行。',
    'Interchangeable M12 mount lens collection. Four options: 160° fisheye, 140° wide angle, 20° telephoto, and 15° ultra telephoto/macro. Flexible configuration for diverse visual scenarios.':
      '可更换 M12 卡口镜头套装，提供 4 种选择：160° 鱼眼、140° 广角、20° 长焦和 15° 超长焦/微距，可灵活适配不同视觉场景。',

    'Demo Showcases': '示例展示',
    'Smart Home & IoT': '智能家居与 IoT',
    'Integrate reCamera with popular home automation platforms for intelligent monitoring and control.':
      '将 reCamera 与主流家庭自动化平台集成，实现智能监控与控制。',
    'Home Assistant Integration': 'Home Assistant 集成',
    'Pro + Home Assistant Sound-Triggered Photo Alert': 'Pro + Home Assistant 声音触发拍照告警',
    'Notifications & IM': '通知与即时通信',
    'Set up real-time alerts and AI event notifications through popular messaging platforms.':
      '通过主流消息平台设置实时告警和 AI 事件通知。',
    'AI Human Detection + Meshtastic Broadcast': 'AI 人体检测 + Meshtastic 广播',
    'WeCom (WeChat Work) Alerts': '企业微信告警',
    'Telegram Bot': 'Telegram 机器人',
    'n8n Workflow Automation': 'n8n 工作流自动化',
    'Long-Range Security System with Meshtastic': '基于 Meshtastic 的远距离安防系统',
    'Smart City & Monitoring': '智慧城市与监控',
    'Deploy scalable AI vision systems for urban and industrial scenarios.':
      '面向城市和工业场景部署可扩展的 AI 视觉系统。',
    'AI Parking Slot Monitoring': 'AI 车位监控',
    'Wi-Fi HaLow Remote Monitoring': 'Wi-Fi HaLow 远程监控',
    'RTSP to WebRTC Streaming': 'RTSP 转 WebRTC 串流',
    'Motion Detection for Selected Area': '指定区域运动检测',
    'Robotics & Interaction': '机器人与交互',
    'Advanced applications combining reCamera with robotics and interactive systems.':
      '将 reCamera 与机器人和交互系统结合的进阶应用。',
    'Stream Deck Gimbal Control': '使用 Stream Deck 控制云台',
    'OpenClaw Gimbal Control': '使用 OpenClaw 控制云台',
    'Sound Source Localization': '声源定位',
    'UDP Face Analysis': 'UDP 人脸分析',
    'AI Voice Interaction': 'AI 语音交互',
    'Pro Tilt and Shake Detection': 'Pro 倾斜与晃动检测',
    'Creative Projects': '创意项目',
    'Fun and creative projects built with reCamera. Get inspired and start building your own.':
      '探索基于 reCamera 构建的有趣创意项目，获取灵感并开始打造自己的应用。',
    'Subway Surfers Body Control': '体感控制 Subway Surfers',
    'Grafana Heatmap Dashboard': 'Grafana 热力图仪表盘',
    'Local Picoclaw Deployment': '本地部署 Picoclaw',
    'Real-Time QR Code Recognition': '实时二维码识别',
    'MediaPipe Hand Gesture Recognition': 'MediaPipe 手势识别',
    'Performance & Benchmarking': '性能与基准测试',
    'Performance testing, benchmarking, and development tools for reCamera.':
      'reCamera 的性能测试、基准测试与开发工具。',
    'YOLO11n Benchmarking': 'YOLO11n 基准测试',
    'Pro Laboratory Use': 'Pro 实验室应用',
    'Open Source Resources': '开源资源',
    'Hardware Reference (OSHW)': '硬件参考（OSHW）',
    'Complete hardware documentation, design files, and specifications.':
      '完整的硬件文档、设计文件和规格说明。',
    'OSHW GitHub Repository': 'OSHW GitHub 仓库',
    'reCamera 2002 Series Hardware Specs': 'reCamera 2002 系列硬件规格',
    'reCamera Gimbal Hardware Specs': 'reCamera Gimbal 硬件规格',
    'reCamera HQ POE Hardware Specs': 'reCamera HQ POE 硬件规格',
    'reCamera Pro Hardware Usage': 'reCamera Pro 硬件使用指南',
    'OS Basics': '操作系统基础',
    'Operating system fundamentals and system configuration.': '操作系统基础知识与系统配置。',
    'OS Version Control': '操作系统版本控制',
    'reCamera OS Structure': 'reCamera OS 结构',
    'Linux Fundamentals': 'Linux 基础',
    'Configure Static IP': '配置静态 IP',
    'Low-Code Development': '低代码开发',
    'Rapid AI deployment with Node-RED visual programming.': '通过 Node-RED 可视化编程快速部署 AI。',
    'Develop with Node-RED': '使用 Node-RED 开发',
    'Professional Development': '专业开发',
    'SDK, API, and advanced development guides for professionals.': '面向专业开发者的 SDK、API 和进阶开发指南。',
    'Develop with C/C++': '使用 C/C++ 开发',
    'Auto-Start Program on Boot': '程序开机自动启动',
    'Real-Time YOLO Object Detection (C++)': '实时 YOLO 目标检测（C++）',
    'reCamera Pro API Reference': 'reCamera Pro API 参考',
    'Join the Community': '加入社区',
    'Hackaday Project': 'Hackaday 项目',
    'Peek under the hood. Explore detailed project logs and learn how reCamera is built from scratch.':
      '深入了解 reCamera，查看详细项目日志，了解它如何从零开始构建。',
    '5K+ Views — Explore Project Log': '5K+ 浏览量 — 查看项目日志',
    'GitHub Repository': 'GitHub 仓库',
    'Full open-source hardware design files, software stack, and documentation. Star the repo and contribute.':
      '完整的开源硬件设计文件、软件栈和文档。欢迎 Star 仓库并参与贡献。',
    '500+ Stars — OSHW-reCamera-Series': '500+ Stars — OSHW-reCamera-Series',
    'Discord Community': 'Discord 社区',
    "Join Seeed Studio's Discord to ask questions, share projects, get support, and connect with fellow developers.":
      '加入 Seeed Studio Discord，提问、分享项目、获取支持，并与其他开发者交流。',
    '10K+ Members — Join Discord': '10K+ 成员 — 加入 Discord',
  },

  ja: {
    'reCamera Family': 'reCamera ファミリー',
    'Open Source AI Camera Platform': 'オープンソース AI カメラプラットフォーム',
    'From entry-level edge AI to high-performance industrial vision — the reCamera family offers flexible solutions for every scenario. Powered by open-source software, dual-architecture support, and a growing ecosystem of modules and accessories.':
      'エントリーレベルのエッジ AI から高性能な産業用ビジョンまで、reCamera ファミリーはさまざまなシーンに柔軟なソリューションを提供します。オープンソースソフトウェア、デュアルアーキテクチャ対応、拡大を続けるモジュールとアクセサリのエコシステムを活用できます。',
    'reCamera Product Family': 'reCamera 製品ファミリー',
    'Choose Your': 'あなたの',
    'Select from the reCamera family — devices, modules, and accessories to build your edge AI vision solution':
      'reCamera ファミリーのデバイス、モジュール、アクセサリから選び、エッジ AI ビジョンソリューションを構築できます',
    'New': '新製品',
    'Getting Started': 'はじめに',
    'Train your custom model in': 'カスタムモデルをわずか',
    '1 minute': '1 分でトレーニング',
    'Collect data': 'データ収集',
    'One-click training': 'ワンクリック学習',
    'Deploy to reCamera': 'reCamera にデプロイ',
    'Build with': '開発に使える',
    'Applications, open-source tools, and community to accelerate your development':
      'アプリケーション、オープンソースツール、コミュニティを活用して開発を加速',
    'Seeed Studio empowers innovators with open-source hardware and AI-powered edge computing solutions. reCamera is built for developers, by developers.':
      'Seeed Studio は、オープンソースハードウェアと AI 搭載エッジコンピューティングソリューションでイノベーターを支援します。reCamera は開発者のために、開発者によって作られています。',
    'Product': '製品',
    'Accessories': 'アクセサリ',
    'Buy reCamera': 'reCamera を購入',
    'Resources': 'リソース',
    'Node-RED Guide': 'Node-RED ガイド',
    'Model Zoo': 'モデル Zoo',
    'GitHub Repo': 'GitHub リポジトリ',
    'Community': 'コミュニティ',
    'Forum': 'フォーラム',
    'All rights reserved.': 'すべての権利を留保します。',

    'Devices': 'デバイス',
    'Modules': 'モジュール',
    'Entry-Level': 'エントリー',
    'M12 Lens': 'M12 レンズ',
    'Gimbal': 'ジンバル',
    'AI Tracking': 'AI トラッキング',
    'Multimodal AI': 'マルチモーダル AI',
    'M12 Mount': 'M12 マウント',
    'Replaceable': '交換可能',
    'Core': 'コア',
    'WiFi Option': 'WiFi オプション',
    'Base Board': 'ベースボード',
    'Gen 1': '第1世代',
    'Long Range': '長距離',
    'Wireless': 'ワイヤレス',
    'Outdoor Enclosure': '屋外用エンクロージャ',
    'Outdoor': '屋外',
    'M12 Lens Collection': 'M12 レンズコレクション',
    '4 Options': '4 種類',
    'Wide to Macro': '広角からマクロまで',
    'reCamera 2002 Sensor Board (GC2053)': 'reCamera 2002 センサーボード（GC2053）',
    'reCamera 2002 Core Board': 'reCamera 2002 コアボード',
    'reCamera 2002 Base Board with PoE': 'reCamera 2002 PoE ベースボード',
    'reCamera 2002 Base Board WiFi HaLow': 'reCamera 2002 WiFi HaLow ベースボード',
    'Entry-level open-source AI camera. SG2002 (RISC-V), 1 TOPS NPU, Node-RED visual programming. The most affordable reCamera for quick project prototyping and validation. Available with/without WiFi and in 8GB/64GB storage options.':
      'エントリーレベルのオープンソース AI カメラ。SG2002（RISC-V）、1 TOPS NPU、Node-RED ビジュアルプログラミングを搭載しています。最も手頃な reCamera として、プロジェクトの迅速なプロトタイピングや検証に最適です。WiFi の有無、8GB/64GB ストレージを選択できます。',
    'PoE-powered AI camera with swappable M12 lens mount. GC2053 sensor, data and power through a single Ethernet cable. Supports wide-angle, telephoto and macro lenses for flexible viewing angles in production deployments.':
      '交換可能な M12 レンズマウントを備えた PoE 対応 AI カメラ。GC2053 センサーを搭載し、1 本の Ethernet ケーブルでデータ通信と給電を行えます。広角、望遠、マクロレンズに対応し、実運用で柔軟な画角を選択できます。',
    'AI camera with dual brushless motor gimbal and CAN bus communication. Pan and tilt control combined with AI tracking for dynamic viewpoint control. Ideal for robotics, interactive systems, and applications requiring flexible camera angles.':
      'デュアルブラシレスモータージンバルと CAN バス通信を備えた AI カメラ。パン・チルト制御と AI トラッキングを組み合わせ、動的な視点制御を実現します。ロボティクス、インタラクティブシステム、柔軟なカメラ角度が必要な用途に最適です。',
    'High-performance AI camera for B2B and professional security. Rockchip RV1126B (quad-core Cortex-A53 ARM), 3 TOPS NPU, 2GB/4GB LPDDR4, 4K@30FPS starlight sensor. Supports CV / VLM / LLM / voice AI multimodal inference. Starting at $299.90.':
      'B2B およびプロフェッショナルなセキュリティ用途向けの高性能 AI カメラ。Rockchip RV1126B（クアッドコア Cortex-A53 ARM）、3 TOPS NPU、2GB/4GB LPDDR4、4K@30FPS スターライトセンサーを搭載し、CV / VLM / LLM / 音声 AI のマルチモーダル推論に対応します。価格は $299.90 から。',
    'Replaceable front panel with GC2053 sensor and M12 swappable lens mount. Upgrade your Gen 1 reCamera with interchangeable lenses for custom fields of view. Compatible with all reCamera 2002 series devices.':
      'GC2053 センサーと交換可能な M12 レンズマウントを備えた交換式フロントパネル。第1世代 reCamera に交換レンズ機能を追加し、用途に合わせて視野角を調整できます。すべての reCamera 2002 シリーズに対応します。',
    'Universal core board for all Gen 1 reCamera devices. Available with/without WiFi and in 8GB/64GB storage. Use for storage expansion or adding WiFi capability to your existing reCamera.':
      '第1世代 reCamera デバイス共通のコアボード。WiFi の有無、8GB/64GB ストレージを選択でき、既存の reCamera のストレージ拡張や WiFi 機能追加に利用できます。',
    'PoE-enabled base board for all Gen 1 reCamera devices. Add PoE power and networking through a single Ethernet cable, or replace a damaged existing base board.':
      'すべての第1世代 reCamera デバイスに対応する PoE ベースボード。1 本の Ethernet ケーブルで PoE 給電とネットワーク接続を追加でき、破損したベースボードの交換にも使用できます。',
    'WiFi HaLow base board for all Gen 1 reCamera devices. Adds long-range, low-power wireless communication and video transmission capability using sub-GHz band.':
      'すべての第1世代 reCamera デバイスに対応する WiFi HaLow ベースボード。Sub-GHz 帯を利用し、長距離・低消費電力の無線通信と映像伝送機能を追加します。',
    'IP65-rated weatherproof outdoor enclosure designed for reCamera 2002 HQ PoE. Protects your camera from rain, dust, and harsh environments for reliable long-term outdoor operation.':
      'reCamera 2002 HQ PoE 用に設計された IP65 防水・防塵の屋外用エンクロージャ。雨、ほこり、厳しい環境からカメラを保護し、長期的な屋外運用を支えます。',
    'Interchangeable M12 mount lens collection. Four options: 160° fisheye, 140° wide angle, 20° telephoto, and 15° ultra telephoto/macro. Flexible configuration for diverse visual scenarios.':
      '交換可能な M12 マウントレンズコレクション。160° 魚眼、140° 広角、20° 望遠、15° 超望遠/マクロの 4 種類を用意し、多様なビジョン用途に柔軟に対応できます。',

    'Demo Showcases': 'デモ事例',
    'Smart Home & IoT': 'スマートホーム & IoT',
    'Integrate reCamera with popular home automation platforms for intelligent monitoring and control.': 'reCamera を主要なホームオートメーションプラットフォームと連携し、インテリジェントな監視と制御を実現します。',
    'Home Assistant Integration': 'Home Assistant 連携',
    'Pro + Home Assistant Sound-Triggered Photo Alert': 'Pro + Home Assistant 音声トリガー写真アラート',
    'Notifications & IM': '通知 & メッセージング',
    'Set up real-time alerts and AI event notifications through popular messaging platforms.': '主要なメッセージングプラットフォームを通じて、リアルタイムアラートや AI イベント通知を設定します。',
    'AI Human Detection + Meshtastic Broadcast': 'AI 人体検出 + Meshtastic ブロードキャスト',
    'WeCom (WeChat Work) Alerts': 'WeCom（WeChat Work）アラート',
    'Telegram Bot': 'Telegram Bot',
    'n8n Workflow Automation': 'n8n ワークフロー自動化',
    'Long-Range Security System with Meshtastic': 'Meshtastic を使った長距離セキュリティシステム',
    'Smart City & Monitoring': 'スマートシティ & モニタリング',
    'Deploy scalable AI vision systems for urban and industrial scenarios.': '都市・産業用途向けにスケーラブルな AI ビジョンシステムを展開します。',
    'AI Parking Slot Monitoring': 'AI 駐車スペース監視',
    'Wi-Fi HaLow Remote Monitoring': 'Wi-Fi HaLow リモート監視',
    'RTSP to WebRTC Streaming': 'RTSP から WebRTC へのストリーミング',
    'Motion Detection for Selected Area': '指定エリアのモーション検出',
    'Robotics & Interaction': 'ロボティクス & インタラクション',
    'Advanced applications combining reCamera with robotics and interactive systems.': 'reCamera とロボティクス、インタラクティブシステムを組み合わせた高度なアプリケーションです。',
    'Stream Deck Gimbal Control': 'Stream Deck によるジンバル制御',
    'OpenClaw Gimbal Control': 'OpenClaw によるジンバル制御',
    'Sound Source Localization': '音源定位',
    'UDP Face Analysis': 'UDP 顔分析',
    'AI Voice Interaction': 'AI 音声インタラクション',
    'Pro Tilt and Shake Detection': 'Pro 傾き・揺れ検出',
    'Creative Projects': 'クリエイティブプロジェクト',
    'Fun and creative projects built with reCamera. Get inspired and start building your own.': 'reCamera で作られた楽しくクリエイティブなプロジェクトを紹介します。アイデアを得て、自分のプロジェクトを始めましょう。',
    'Subway Surfers Body Control': 'Subway Surfers ボディコントロール',
    'Grafana Heatmap Dashboard': 'Grafana ヒートマップダッシュボード',
    'Local Picoclaw Deployment': 'Picoclaw ローカルデプロイ',
    'Real-Time QR Code Recognition': 'リアルタイム QR コード認識',
    'MediaPipe Hand Gesture Recognition': 'MediaPipe ハンドジェスチャー認識',
    'Performance & Benchmarking': '性能 & ベンチマーク',
    'Performance testing, benchmarking, and development tools for reCamera.': 'reCamera の性能テスト、ベンチマーク、開発ツール。',
    'YOLO11n Benchmarking': 'YOLO11n ベンチマーク',
    'Pro Laboratory Use': 'Pro ラボ利用',
    'Open Source Resources': 'オープンソースリソース',
    'Hardware Reference (OSHW)': 'ハードウェアリファレンス（OSHW）',
    'Complete hardware documentation, design files, and specifications.': '完全なハードウェアドキュメント、設計ファイル、仕様。',
    'OSHW GitHub Repository': 'OSHW GitHub リポジトリ',
    'reCamera 2002 Series Hardware Specs': 'reCamera 2002 シリーズ ハードウェア仕様',
    'reCamera Gimbal Hardware Specs': 'reCamera Gimbal ハードウェア仕様',
    'reCamera HQ POE Hardware Specs': 'reCamera HQ POE ハードウェア仕様',
    'reCamera Pro Hardware Usage': 'reCamera Pro ハードウェア使用ガイド',
    'OS Basics': 'OS 基礎',
    'Operating system fundamentals and system configuration.': 'オペレーティングシステムの基礎とシステム設定。',
    'OS Version Control': 'OS バージョン管理',
    'reCamera OS Structure': 'reCamera OS 構造',
    'Linux Fundamentals': 'Linux 基礎',
    'Configure Static IP': '静的 IP の設定',
    'Low-Code Development': 'ローコード開発',
    'Rapid AI deployment with Node-RED visual programming.': 'Node-RED のビジュアルプログラミングで AI を迅速にデプロイします。',
    'Develop with Node-RED': 'Node-RED で開発',
    'Professional Development': 'プロフェッショナル開発',
    'SDK, API, and advanced development guides for professionals.': 'プロフェッショナル向けの SDK、API、高度な開発ガイド。',
    'Develop with C/C++': 'C/C++ で開発',
    'Auto-Start Program on Boot': '起動時にプログラムを自動実行',
    'Real-Time YOLO Object Detection (C++)': 'リアルタイム YOLO 物体検出（C++）',
    'reCamera Pro API Reference': 'reCamera Pro API リファレンス',
    'Join the Community': 'コミュニティに参加',
    'Hackaday Project': 'Hackaday プロジェクト',
    'Peek under the hood. Explore detailed project logs and learn how reCamera is built from scratch.': '内部まで詳しく見てみましょう。詳細なプロジェクトログを読み、reCamera がゼロからどのように作られたかを確認できます。',
    '5K+ Views — Explore Project Log': '5K+ 閲覧 — プロジェクトログを見る',
    'GitHub Repository': 'GitHub リポジトリ',
    'Full open-source hardware design files, software stack, and documentation. Star the repo and contribute.': 'オープンソースのハードウェア設計ファイル、ソフトウェアスタック、ドキュメントをすべて公開しています。リポジトリを Star して貢献してください。',
    '500+ Stars — OSHW-reCamera-Series': '500+ Stars — OSHW-reCamera-Series',
    'Discord Community': 'Discord コミュニティ',
    "Join Seeed Studio's Discord to ask questions, share projects, get support, and connect with fellow developers.": 'Seeed Studio の Discord に参加して、質問、プロジェクト共有、サポートの利用、開発者同士の交流ができます。',
    '10K+ Members — Join Discord': '10K+ メンバー — Discord に参加',
  },

  es: {
    'reCamera Family': 'Familia reCamera',
    'Open Source AI Camera Platform': 'Plataforma de cámara de IA de código abierto',
    'From entry-level edge AI to high-performance industrial vision — the reCamera family offers flexible solutions for every scenario. Powered by open-source software, dual-architecture support, and a growing ecosystem of modules and accessories.':
      'Desde IA en el borde de nivel inicial hasta visión industrial de alto rendimiento, la familia reCamera ofrece soluciones flexibles para cada escenario. Se basa en software de código abierto, compatibilidad con doble arquitectura y un ecosistema creciente de módulos y accesorios.',
    'reCamera Product Family': 'Familia de productos reCamera',
    'Choose Your': 'Elige tu',
    'Select from the reCamera family — devices, modules, and accessories to build your edge AI vision solution':
      'Elige entre dispositivos, módulos y accesorios de la familia reCamera para crear tu solución de visión de IA en el borde',
    'New': 'Nuevo',
    'Getting Started': 'Primeros pasos',
    'Train your custom model in': 'Entrena tu modelo personalizado en',
    '1 minute': '1 minuto',
    'Collect data': 'Recopilar datos',
    'One-click training': 'Entrenamiento con un clic',
    'Deploy to reCamera': 'Desplegar en reCamera',
    'Build with': 'Desarrolla con',
    'Applications, open-source tools, and community to accelerate your development':
      'Aplicaciones, herramientas de código abierto y comunidad para acelerar tu desarrollo',
    'Seeed Studio empowers innovators with open-source hardware and AI-powered edge computing solutions. reCamera is built for developers, by developers.':
      'Seeed Studio impulsa a los innovadores con hardware de código abierto y soluciones de computación en el borde con IA. reCamera está creada por desarrolladores, para desarrolladores.',
    'Product': 'Producto',
    'Accessories': 'Accesorios',
    'Buy reCamera': 'Comprar reCamera',
    'Resources': 'Recursos',
    'Node-RED Guide': 'Guía de Node-RED',
    'Model Zoo': 'Model Zoo',
    'GitHub Repo': 'Repositorio de GitHub',
    'Community': 'Comunidad',
    'Forum': 'Foro',
    'All rights reserved.': 'Todos los derechos reservados.',

    'Devices': 'Dispositivos',
    'Modules': 'Módulos',
    'Entry-Level': 'Nivel inicial',
    'M12 Lens': 'Lente M12',
    'Gimbal': 'Gimbal',
    'AI Tracking': 'Seguimiento por IA',
    'Multimodal AI': 'IA multimodal',
    'M12 Mount': 'Montura M12',
    'Replaceable': 'Reemplazable',
    'Core': 'Núcleo',
    'WiFi Option': 'WiFi opcional',
    'Base Board': 'Placa base',
    'Gen 1': 'Gen 1',
    'Long Range': 'Largo alcance',
    'Wireless': 'Inalámbrico',
    'Outdoor Enclosure': 'Carcasa para exteriores',
    'Outdoor': 'Exterior',
    'M12 Lens Collection': 'Colección de lentes M12',
    '4 Options': '4 opciones',
    'Wide to Macro': 'De gran angular a macro',
    'reCamera 2002 Sensor Board (GC2053)': 'Placa de sensor reCamera 2002 (GC2053)',
    'reCamera 2002 Core Board': 'Placa central reCamera 2002',
    'reCamera 2002 Base Board with PoE': 'Placa base reCamera 2002 con PoE',
    'reCamera 2002 Base Board WiFi HaLow': 'Placa base reCamera 2002 WiFi HaLow',
    'Entry-level open-source AI camera. SG2002 (RISC-V), 1 TOPS NPU, Node-RED visual programming. The most affordable reCamera for quick project prototyping and validation. Available with/without WiFi and in 8GB/64GB storage options.':
      'Cámara de IA de código abierto de nivel inicial. Incorpora SG2002 (RISC-V), NPU de 1 TOPS y programación visual con Node-RED. Es la reCamera más asequible para crear y validar prototipos rápidamente. Disponible con o sin WiFi y con almacenamiento de 8GB/64GB.',
    'PoE-powered AI camera with swappable M12 lens mount. GC2053 sensor, data and power through a single Ethernet cable. Supports wide-angle, telephoto and macro lenses for flexible viewing angles in production deployments.':
      'Cámara de IA alimentada por PoE con montura de lente M12 intercambiable. Incorpora sensor GC2053 y transmite datos y alimentación mediante un único cable Ethernet. Admite lentes gran angular, teleobjetivo y macro para ofrecer ángulos de visión flexibles en despliegues de producción.',
    'AI camera with dual brushless motor gimbal and CAN bus communication. Pan and tilt control combined with AI tracking for dynamic viewpoint control. Ideal for robotics, interactive systems, and applications requiring flexible camera angles.':
      'Cámara de IA con gimbal de doble motor sin escobillas y comunicación por bus CAN. Combina control de paneo e inclinación con seguimiento por IA para controlar dinámicamente el punto de vista. Ideal para robótica, sistemas interactivos y aplicaciones que requieren ángulos de cámara flexibles.',
    'High-performance AI camera for B2B and professional security. Rockchip RV1126B (quad-core Cortex-A53 ARM), 3 TOPS NPU, 2GB/4GB LPDDR4, 4K@30FPS starlight sensor. Supports CV / VLM / LLM / voice AI multimodal inference. Starting at $299.90.':
      'Cámara de IA de alto rendimiento para B2B y seguridad profesional. Incorpora Rockchip RV1126B (ARM Cortex-A53 de cuatro núcleos), NPU de 3 TOPS, 2GB/4GB LPDDR4 y sensor starlight 4K@30FPS. Admite inferencia multimodal de CV / VLM / LLM / IA de voz. Desde $299.90.',
    'Replaceable front panel with GC2053 sensor and M12 swappable lens mount. Upgrade your Gen 1 reCamera with interchangeable lenses for custom fields of view. Compatible with all reCamera 2002 series devices.':
      'Panel frontal reemplazable con sensor GC2053 y montura M12 intercambiable. Permite actualizar tu reCamera Gen 1 con lentes intercambiables para personalizar el campo de visión. Compatible con todos los dispositivos de la serie reCamera 2002.',
    'Universal core board for all Gen 1 reCamera devices. Available with/without WiFi and in 8GB/64GB storage. Use for storage expansion or adding WiFi capability to your existing reCamera.':
      'Placa central universal para todos los dispositivos reCamera Gen 1. Disponible con o sin WiFi y con almacenamiento de 8GB/64GB. Puede usarse para ampliar el almacenamiento o añadir WiFi a una reCamera existente.',
    'PoE-enabled base board for all Gen 1 reCamera devices. Add PoE power and networking through a single Ethernet cable, or replace a damaged existing base board.':
      'Placa base con PoE para todos los dispositivos reCamera Gen 1. Añade alimentación PoE y conexión de red mediante un único cable Ethernet o sustituye una placa base dañada.',
    'WiFi HaLow base board for all Gen 1 reCamera devices. Adds long-range, low-power wireless communication and video transmission capability using sub-GHz band.':
      'Placa base WiFi HaLow para todos los dispositivos reCamera Gen 1. Añade comunicación inalámbrica de largo alcance y bajo consumo, además de transmisión de vídeo mediante la banda sub-GHz.',
    'IP65-rated weatherproof outdoor enclosure designed for reCamera 2002 HQ PoE. Protects your camera from rain, dust, and harsh environments for reliable long-term outdoor operation.':
      'Carcasa para exteriores con protección IP65 diseñada para reCamera 2002 HQ PoE. Protege la cámara de la lluvia, el polvo y entornos exigentes para un funcionamiento fiable a largo plazo en exteriores.',
    'Interchangeable M12 mount lens collection. Four options: 160° fisheye, 140° wide angle, 20° telephoto, and 15° ultra telephoto/macro. Flexible configuration for diverse visual scenarios.':
      'Colección de lentes intercambiables con montura M12. Cuatro opciones: ojo de pez de 160°, gran angular de 140°, teleobjetivo de 20° y ultra teleobjetivo/macro de 15°. Configuración flexible para distintos escenarios de visión.',

    'Demo Showcases': 'Demostraciones',
    'Smart Home & IoT': 'Hogar inteligente e IoT',
    'Integrate reCamera with popular home automation platforms for intelligent monitoring and control.': 'Integra reCamera con plataformas populares de automatización del hogar para monitorización y control inteligentes.',
    'Home Assistant Integration': 'Integración con Home Assistant',
    'Pro + Home Assistant Sound-Triggered Photo Alert': 'Pro + Home Assistant: alerta fotográfica activada por sonido',
    'Notifications & IM': 'Notificaciones y mensajería',
    'Set up real-time alerts and AI event notifications through popular messaging platforms.': 'Configura alertas en tiempo real y notificaciones de eventos de IA mediante plataformas de mensajería populares.',
    'AI Human Detection + Meshtastic Broadcast': 'Detección humana por IA + difusión Meshtastic',
    'WeCom (WeChat Work) Alerts': 'Alertas de WeCom (WeChat Work)',
    'Telegram Bot': 'Bot de Telegram',
    'n8n Workflow Automation': 'Automatización de flujos con n8n',
    'Long-Range Security System with Meshtastic': 'Sistema de seguridad de largo alcance con Meshtastic',
    'Smart City & Monitoring': 'Ciudad inteligente y monitorización',
    'Deploy scalable AI vision systems for urban and industrial scenarios.': 'Despliega sistemas escalables de visión con IA para escenarios urbanos e industriales.',
    'AI Parking Slot Monitoring': 'Monitorización de plazas de aparcamiento con IA',
    'Wi-Fi HaLow Remote Monitoring': 'Monitorización remota con Wi-Fi HaLow',
    'RTSP to WebRTC Streaming': 'Streaming de RTSP a WebRTC',
    'Motion Detection for Selected Area': 'Detección de movimiento en un área seleccionada',
    'Robotics & Interaction': 'Robótica e interacción',
    'Advanced applications combining reCamera with robotics and interactive systems.': 'Aplicaciones avanzadas que combinan reCamera con robótica y sistemas interactivos.',
    'Stream Deck Gimbal Control': 'Control del gimbal con Stream Deck',
    'OpenClaw Gimbal Control': 'Control del gimbal con OpenClaw',
    'Sound Source Localization': 'Localización de la fuente de sonido',
    'UDP Face Analysis': 'Análisis facial por UDP',
    'AI Voice Interaction': 'Interacción de voz con IA',
    'Pro Tilt and Shake Detection': 'Detección de inclinación y sacudidas en Pro',
    'Creative Projects': 'Proyectos creativos',
    'Fun and creative projects built with reCamera. Get inspired and start building your own.': 'Proyectos divertidos y creativos creados con reCamera. Inspírate y empieza a construir el tuyo.',
    'Subway Surfers Body Control': 'Control corporal de Subway Surfers',
    'Grafana Heatmap Dashboard': 'Panel de mapa de calor en Grafana',
    'Local Picoclaw Deployment': 'Despliegue local de Picoclaw',
    'Real-Time QR Code Recognition': 'Reconocimiento de códigos QR en tiempo real',
    'MediaPipe Hand Gesture Recognition': 'Reconocimiento de gestos de mano con MediaPipe',
    'Performance & Benchmarking': 'Rendimiento y benchmarks',
    'Performance testing, benchmarking, and development tools for reCamera.': 'Pruebas de rendimiento, benchmarks y herramientas de desarrollo para reCamera.',
    'YOLO11n Benchmarking': 'Benchmark de YOLO11n',
    'Pro Laboratory Use': 'Uso de Pro en laboratorio',
    'Open Source Resources': 'Recursos de código abierto',
    'Hardware Reference (OSHW)': 'Referencia de hardware (OSHW)',
    'Complete hardware documentation, design files, and specifications.': 'Documentación completa de hardware, archivos de diseño y especificaciones.',
    'OSHW GitHub Repository': 'Repositorio OSHW en GitHub',
    'reCamera 2002 Series Hardware Specs': 'Especificaciones de hardware de reCamera 2002',
    'reCamera Gimbal Hardware Specs': 'Especificaciones de hardware de reCamera Gimbal',
    'reCamera HQ POE Hardware Specs': 'Especificaciones de hardware de reCamera HQ POE',
    'reCamera Pro Hardware Usage': 'Uso del hardware de reCamera Pro',
    'OS Basics': 'Conceptos básicos del SO',
    'Operating system fundamentals and system configuration.': 'Fundamentos del sistema operativo y configuración del sistema.',
    'OS Version Control': 'Control de versiones del SO',
    'reCamera OS Structure': 'Estructura del SO de reCamera',
    'Linux Fundamentals': 'Fundamentos de Linux',
    'Configure Static IP': 'Configurar IP estática',
    'Low-Code Development': 'Desarrollo low-code',
    'Rapid AI deployment with Node-RED visual programming.': 'Despliegue rápido de IA mediante programación visual con Node-RED.',
    'Develop with Node-RED': 'Desarrollar con Node-RED',
    'Professional Development': 'Desarrollo profesional',
    'SDK, API, and advanced development guides for professionals.': 'SDK, API y guías de desarrollo avanzadas para profesionales.',
    'Develop with C/C++': 'Desarrollar con C/C++',
    'Auto-Start Program on Boot': 'Iniciar un programa automáticamente al arrancar',
    'Real-Time YOLO Object Detection (C++)': 'Detección de objetos YOLO en tiempo real (C++)',
    'reCamera Pro API Reference': 'Referencia de la API de reCamera Pro',
    'Join the Community': 'Únete a la comunidad',
    'Hackaday Project': 'Proyecto en Hackaday',
    'Peek under the hood. Explore detailed project logs and learn how reCamera is built from scratch.': 'Descubre cómo funciona por dentro. Explora registros detallados del proyecto y aprende cómo se construyó reCamera desde cero.',
    '5K+ Views — Explore Project Log': '5K+ vistas — Explorar el registro del proyecto',
    'GitHub Repository': 'Repositorio de GitHub',
    'Full open-source hardware design files, software stack, and documentation. Star the repo and contribute.': 'Archivos completos de diseño de hardware de código abierto, pila de software y documentación. Dale una estrella al repositorio y contribuye.',
    '500+ Stars — OSHW-reCamera-Series': '500+ estrellas — OSHW-reCamera-Series',
    'Discord Community': 'Comunidad de Discord',
    "Join Seeed Studio's Discord to ask questions, share projects, get support, and connect with fellow developers.": 'Únete al Discord de Seeed Studio para hacer preguntas, compartir proyectos, obtener soporte y conectar con otros desarrolladores.',
    '10K+ Members — Join Discord': '10K+ miembros — Únete a Discord',
  },

  'pt-BR': {
    'reCamera Family': 'Família reCamera',
    'Open Source AI Camera Platform': 'Plataforma de câmera de IA de código aberto',
    'From entry-level edge AI to high-performance industrial vision — the reCamera family offers flexible solutions for every scenario. Powered by open-source software, dual-architecture support, and a growing ecosystem of modules and accessories.':
      'Da IA de borda de entrada à visão industrial de alto desempenho, a família reCamera oferece soluções flexíveis para diferentes cenários. Ela conta com software de código aberto, suporte a duas arquiteturas e um ecossistema crescente de módulos e acessórios.',
    'reCamera Product Family': 'Família de produtos reCamera',
    'Choose Your': 'Escolha sua',
    'Select from the reCamera family — devices, modules, and accessories to build your edge AI vision solution':
      'Escolha entre dispositivos, módulos e acessórios da família reCamera para criar sua solução de visão com IA na borda',
    'New': 'Novo',
    'Getting Started': 'Primeiros passos',
    'Train your custom model in': 'Treine seu modelo personalizado em',
    '1 minute': '1 minuto',
    'Collect data': 'Coletar dados',
    'One-click training': 'Treinamento com um clique',
    'Deploy to reCamera': 'Implantar no reCamera',
    'Build with': 'Desenvolva com',
    'Applications, open-source tools, and community to accelerate your development':
      'Aplicações, ferramentas de código aberto e comunidade para acelerar seu desenvolvimento',
    'Seeed Studio empowers innovators with open-source hardware and AI-powered edge computing solutions. reCamera is built for developers, by developers.':
      'A Seeed Studio capacita inovadores com hardware de código aberto e soluções de computação de borda com IA. O reCamera é feito por desenvolvedores, para desenvolvedores.',
    'Product': 'Produto',
    'Accessories': 'Acessórios',
    'Buy reCamera': 'Comprar reCamera',
    'Resources': 'Recursos',
    'Node-RED Guide': 'Guia do Node-RED',
    'Model Zoo': 'Model Zoo',
    'GitHub Repo': 'Repositório GitHub',
    'Community': 'Comunidade',
    'Forum': 'Fórum',
    'All rights reserved.': 'Todos os direitos reservados.',

    'Devices': 'Dispositivos',
    'Modules': 'Módulos',
    'Entry-Level': 'Entrada',
    'M12 Lens': 'Lente M12',
    'Gimbal': 'Gimbal',
    'AI Tracking': 'Rastreamento por IA',
    'Multimodal AI': 'IA multimodal',
    'M12 Mount': 'Montagem M12',
    'Replaceable': 'Substituível',
    'Core': 'Core',
    'WiFi Option': 'Opção WiFi',
    'Base Board': 'Placa base',
    'Gen 1': '1ª geração',
    'Long Range': 'Longo alcance',
    'Wireless': 'Sem fio',
    'Outdoor Enclosure': 'Gabinete para uso externo',
    'Outdoor': 'Externo',
    'M12 Lens Collection': 'Coleção de lentes M12',
    '4 Options': '4 opções',
    'Wide to Macro': 'De grande angular a macro',
    'reCamera 2002 Sensor Board (GC2053)': 'Placa de sensor reCamera 2002 (GC2053)',
    'reCamera 2002 Core Board': 'Placa central reCamera 2002',
    'reCamera 2002 Base Board with PoE': 'Placa base reCamera 2002 com PoE',
    'reCamera 2002 Base Board WiFi HaLow': 'Placa base reCamera 2002 WiFi HaLow',
    'Entry-level open-source AI camera. SG2002 (RISC-V), 1 TOPS NPU, Node-RED visual programming. The most affordable reCamera for quick project prototyping and validation. Available with/without WiFi and in 8GB/64GB storage options.':
      'Câmera de IA de código aberto de entrada. Usa SG2002 (RISC-V), NPU de 1 TOPS e programação visual com Node-RED. É o reCamera mais acessível para prototipagem e validação rápidas de projetos. Disponível com ou sem WiFi e com armazenamento de 8GB/64GB.',
    'PoE-powered AI camera with swappable M12 lens mount. GC2053 sensor, data and power through a single Ethernet cable. Supports wide-angle, telephoto and macro lenses for flexible viewing angles in production deployments.':
      'Câmera de IA alimentada por PoE com montagem de lente M12 intercambiável. Possui sensor GC2053 e transmite dados e energia por um único cabo Ethernet. Suporta lentes grande angular, telefoto e macro para ângulos de visão flexíveis em implantações de produção.',
    'AI camera with dual brushless motor gimbal and CAN bus communication. Pan and tilt control combined with AI tracking for dynamic viewpoint control. Ideal for robotics, interactive systems, and applications requiring flexible camera angles.':
      'Câmera de IA com gimbal de dois motores brushless e comunicação via barramento CAN. Combina controle de pan e tilt com rastreamento por IA para controle dinâmico do ponto de vista. Ideal para robótica, sistemas interativos e aplicações que exigem ângulos de câmera flexíveis.',
    'High-performance AI camera for B2B and professional security. Rockchip RV1126B (quad-core Cortex-A53 ARM), 3 TOPS NPU, 2GB/4GB LPDDR4, 4K@30FPS starlight sensor. Supports CV / VLM / LLM / voice AI multimodal inference. Starting at $299.90.':
      'Câmera de IA de alto desempenho para B2B e segurança profissional. Equipada com Rockchip RV1126B (ARM Cortex-A53 quad-core), NPU de 3 TOPS, 2GB/4GB LPDDR4 e sensor starlight 4K@30FPS. Suporta inferência multimodal de CV / VLM / LLM / IA de voz. A partir de $299.90.',
    'Replaceable front panel with GC2053 sensor and M12 swappable lens mount. Upgrade your Gen 1 reCamera with interchangeable lenses for custom fields of view. Compatible with all reCamera 2002 series devices.':
      'Painel frontal substituível com sensor GC2053 e montagem M12 intercambiável. Atualize seu reCamera de 1ª geração com lentes intercambiáveis para personalizar o campo de visão. Compatível com todos os dispositivos da série reCamera 2002.',
    'Universal core board for all Gen 1 reCamera devices. Available with/without WiFi and in 8GB/64GB storage. Use for storage expansion or adding WiFi capability to your existing reCamera.':
      'Placa central universal para todos os dispositivos reCamera de 1ª geração. Disponível com ou sem WiFi e com armazenamento de 8GB/64GB. Pode ser usada para expandir o armazenamento ou adicionar WiFi ao seu reCamera existente.',
    'PoE-enabled base board for all Gen 1 reCamera devices. Add PoE power and networking through a single Ethernet cable, or replace a damaged existing base board.':
      'Placa base com PoE para todos os dispositivos reCamera de 1ª geração. Adicione alimentação PoE e rede por um único cabo Ethernet ou substitua uma placa base danificada.',
    'WiFi HaLow base board for all Gen 1 reCamera devices. Adds long-range, low-power wireless communication and video transmission capability using sub-GHz band.':
      'Placa base WiFi HaLow para todos os dispositivos reCamera de 1ª geração. Adiciona comunicação sem fio de longo alcance e baixo consumo, além de transmissão de vídeo usando a faixa sub-GHz.',
    'IP65-rated weatherproof outdoor enclosure designed for reCamera 2002 HQ PoE. Protects your camera from rain, dust, and harsh environments for reliable long-term outdoor operation.':
      'Gabinete externo com classificação IP65 projetado para o reCamera 2002 HQ PoE. Protege a câmera contra chuva, poeira e ambientes severos para operação externa confiável de longo prazo.',
    'Interchangeable M12 mount lens collection. Four options: 160° fisheye, 140° wide angle, 20° telephoto, and 15° ultra telephoto/macro. Flexible configuration for diverse visual scenarios.':
      'Coleção de lentes intercambiáveis com montagem M12. Quatro opções: olho de peixe de 160°, grande angular de 140°, telefoto de 20° e ultra telefoto/macro de 15°. Configuração flexível para diferentes cenários de visão.',

    'Demo Showcases': 'Demonstrações',
    'Smart Home & IoT': 'Casa inteligente e IoT',
    'Integrate reCamera with popular home automation platforms for intelligent monitoring and control.': 'Integre o reCamera a plataformas populares de automação residencial para monitoramento e controle inteligentes.',
    'Home Assistant Integration': 'Integração com Home Assistant',
    'Pro + Home Assistant Sound-Triggered Photo Alert': 'Pro + Home Assistant: alerta de foto acionado por som',
    'Notifications & IM': 'Notificações e mensagens',
    'Set up real-time alerts and AI event notifications through popular messaging platforms.': 'Configure alertas em tempo real e notificações de eventos de IA por plataformas populares de mensagens.',
    'AI Human Detection + Meshtastic Broadcast': 'Detecção de pessoas por IA + transmissão Meshtastic',
    'WeCom (WeChat Work) Alerts': 'Alertas do WeCom (WeChat Work)',
    'Telegram Bot': 'Bot do Telegram',
    'n8n Workflow Automation': 'Automação de fluxo de trabalho com n8n',
    'Long-Range Security System with Meshtastic': 'Sistema de segurança de longo alcance com Meshtastic',
    'Smart City & Monitoring': 'Cidade inteligente e monitoramento',
    'Deploy scalable AI vision systems for urban and industrial scenarios.': 'Implante sistemas escaláveis de visão com IA para cenários urbanos e industriais.',
    'AI Parking Slot Monitoring': 'Monitoramento de vagas com IA',
    'Wi-Fi HaLow Remote Monitoring': 'Monitoramento remoto com Wi-Fi HaLow',
    'RTSP to WebRTC Streaming': 'Streaming de RTSP para WebRTC',
    'Motion Detection for Selected Area': 'Detecção de movimento em área selecionada',
    'Robotics & Interaction': 'Robótica e interação',
    'Advanced applications combining reCamera with robotics and interactive systems.': 'Aplicações avançadas que combinam reCamera com robótica e sistemas interativos.',
    'Stream Deck Gimbal Control': 'Controle do gimbal com Stream Deck',
    'OpenClaw Gimbal Control': 'Controle do gimbal com OpenClaw',
    'Sound Source Localization': 'Localização da fonte sonora',
    'UDP Face Analysis': 'Análise facial via UDP',
    'AI Voice Interaction': 'Interação por voz com IA',
    'Pro Tilt and Shake Detection': 'Detecção de inclinação e vibração no Pro',
    'Creative Projects': 'Projetos criativos',
    'Fun and creative projects built with reCamera. Get inspired and start building your own.': 'Projetos divertidos e criativos feitos com reCamera. Inspire-se e comece a criar o seu.',
    'Subway Surfers Body Control': 'Controle corporal no Subway Surfers',
    'Grafana Heatmap Dashboard': 'Painel de mapa de calor no Grafana',
    'Local Picoclaw Deployment': 'Implantação local do Picoclaw',
    'Real-Time QR Code Recognition': 'Reconhecimento de QR Code em tempo real',
    'MediaPipe Hand Gesture Recognition': 'Reconhecimento de gestos de mão com MediaPipe',
    'Performance & Benchmarking': 'Desempenho e benchmarks',
    'Performance testing, benchmarking, and development tools for reCamera.': 'Testes de desempenho, benchmarks e ferramentas de desenvolvimento para reCamera.',
    'YOLO11n Benchmarking': 'Benchmark do YOLO11n',
    'Pro Laboratory Use': 'Uso do Pro em laboratório',
    'Open Source Resources': 'Recursos de código aberto',
    'Hardware Reference (OSHW)': 'Referência de hardware (OSHW)',
    'Complete hardware documentation, design files, and specifications.': 'Documentação completa de hardware, arquivos de projeto e especificações.',
    'OSHW GitHub Repository': 'Repositório OSHW no GitHub',
    'reCamera 2002 Series Hardware Specs': 'Especificações de hardware da série reCamera 2002',
    'reCamera Gimbal Hardware Specs': 'Especificações de hardware do reCamera Gimbal',
    'reCamera HQ POE Hardware Specs': 'Especificações de hardware do reCamera HQ POE',
    'reCamera Pro Hardware Usage': 'Uso do hardware do reCamera Pro',
    'OS Basics': 'Fundamentos do SO',
    'Operating system fundamentals and system configuration.': 'Fundamentos do sistema operacional e configuração do sistema.',
    'OS Version Control': 'Controle de versão do SO',
    'reCamera OS Structure': 'Estrutura do SO do reCamera',
    'Linux Fundamentals': 'Fundamentos do Linux',
    'Configure Static IP': 'Configurar IP estático',
    'Low-Code Development': 'Desenvolvimento low-code',
    'Rapid AI deployment with Node-RED visual programming.': 'Implantação rápida de IA com programação visual no Node-RED.',
    'Develop with Node-RED': 'Desenvolver com Node-RED',
    'Professional Development': 'Desenvolvimento profissional',
    'SDK, API, and advanced development guides for professionals.': 'SDK, API e guias avançados de desenvolvimento para profissionais.',
    'Develop with C/C++': 'Desenvolver com C/C++',
    'Auto-Start Program on Boot': 'Iniciar programa automaticamente na inicialização',
    'Real-Time YOLO Object Detection (C++)': 'Detecção de objetos YOLO em tempo real (C++)',
    'reCamera Pro API Reference': 'Referência da API do reCamera Pro',
    'Join the Community': 'Participe da comunidade',
    'Hackaday Project': 'Projeto no Hackaday',
    'Peek under the hood. Explore detailed project logs and learn how reCamera is built from scratch.': 'Veja como tudo funciona por dentro. Explore logs detalhados do projeto e descubra como o reCamera foi construído do zero.',
    '5K+ Views — Explore Project Log': '5K+ visualizações — Ver log do projeto',
    'GitHub Repository': 'Repositório GitHub',
    'Full open-source hardware design files, software stack, and documentation. Star the repo and contribute.': 'Arquivos completos de projeto de hardware de código aberto, stack de software e documentação. Dê uma estrela no repositório e contribua.',
    '500+ Stars — OSHW-reCamera-Series': '500+ estrelas — OSHW-reCamera-Series',
    'Discord Community': 'Comunidade no Discord',
    "Join Seeed Studio's Discord to ask questions, share projects, get support, and connect with fellow developers.": 'Entre no Discord da Seeed Studio para fazer perguntas, compartilhar projetos, obter suporte e se conectar com outros desenvolvedores.',
    '10K+ Members — Join Discord': '10K+ membros — Entrar no Discord',
  },
};

export function normalizeReCameraLocale(locale?: string): ReCameraLocale {
  const value = (locale || 'en').toLowerCase();

  if (value === 'cn' || value === 'zh-cn' || value.startsWith('zh')) return 'zh-CN';
  if (value === 'ja' || value.startsWith('ja-')) return 'ja';
  if (value === 'es' || value.startsWith('es-')) return 'es';
  if (value === 'pt-br' || value === 'pt_br' || value.startsWith('pt-br')) return 'pt-BR';

  return 'en';
}

export function detectReCameraLocale(locale?: string, pathname?: string): ReCameraLocale {
  const pathSegments = (pathname || '').toLowerCase().split('/').filter(Boolean);
  const pathLocale = pathSegments[0];

  if (pathLocale === 'cn') return 'zh-CN';
  if (pathLocale === 'ja') return 'ja';
  if (pathLocale === 'es') return 'es';
  if (pathLocale === 'pt-br') return 'pt-BR';

  return normalizeReCameraLocale(locale);
}

const localePathPrefix: Record<Exclude<ReCameraLocale, 'en'>, string> = {
  'zh-CN': 'cn',
  ja: 'ja',
  es: 'es',
  'pt-BR': 'pt-br',
};

const supportedLocalePathPrefixes = new Set(Object.values(localePathPrefix));

function localizeWikiPathname(pathname: string, locale: ReCameraLocale): string {
  const hasTrailingSlash = pathname.length > 1 && pathname.endsWith('/');
  const segments = pathname.split('/').filter(Boolean);

  // Remove any existing locale prefix first so localization is idempotent.
  if (segments[0] && supportedLocalePathPrefixes.has(segments[0].toLowerCase())) {
    segments.shift();
  }

  if (locale !== 'en') {
    segments.unshift(localePathPrefix[locale]);
  }

  const localizedPath = `/${segments.join('/')}`;
  return hasTrailingSlash && localizedPath !== '/' ? `${localizedPath}/` : localizedPath;
}

/**
 * Localize Seeed Wiki links to the current Docusaurus locale.
 * External links are returned unchanged. Root-relative Wiki links are also
 * supported so productData can use either absolute or internal URLs later.
 */
export function localizeReCameraHref(
  href: string,
  locale?: string,
  pathname?: string
): string {
  const normalizedLocale = detectReCameraLocale(locale, pathname);

  // Root-relative links are treated as internal Wiki links.
  if (href.startsWith('/') && !href.startsWith('//')) {
    const [pathAndQuery, hash = ''] = href.split('#', 2);
    const [pathOnly, query = ''] = pathAndQuery.split('?', 2);
    const localizedPath = localizeWikiPathname(pathOnly, normalizedLocale);
    return `${localizedPath}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
  }

  try {
    const url = new URL(href);

    if (url.hostname !== 'wiki.seeedstudio.com') {
      return href;
    }

    url.pathname = localizeWikiPathname(url.pathname, normalizedLocale);
    return url.toString();
  } catch {
    return href;
  }
}

export function createReCameraTranslator(locale?: string, pathname?: string) {
  const normalizedLocale = detectReCameraLocale(locale, pathname);

  return (text: string): string => {
    if (normalizedLocale === 'en') return text;
    return translations[normalizedLocale][text] ?? text;
  };
}
