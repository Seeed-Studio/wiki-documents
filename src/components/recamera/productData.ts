// ===================== Interfaces =====================

export interface ProductItem {
  name: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  isNew?: boolean;
}

export interface ProductCategory {
  id: string;
  title: string;
  icon: string;
  items: ProductItem[];
}

export interface FeatureHighlight {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface DeployStep {
  step: number;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface ResourceSubItem {
  label: string;
  href: string;
}

export interface ResourceCategory {
  title: string;
  description: string;
  icon: string;
  items: ResourceSubItem[];
}

export interface ResourceTab {
  id: string;
  title: string;
  icon: string;
  categories: ResourceCategory[];
}

export interface QuickStartItem {
  title: string;
  description: string;
  href: string;
  features: string[];
  cta: string;
}

// ===================== Product Family (Simplified) =====================

export const productFamily: ProductCategory[] = [
  {
    id: 'devices',
    title: 'Devices',
    icon: 'camera',
    items: [
      {
        name: 'reCamera 2002 Basic',
        description:
          'Entry-level open-source AI camera. SG2002 (RISC-V), 1 TOPS NPU, Node-RED visual programming. The most affordable reCamera for quick project prototyping and validation. Available with/without WiFi and in 8GB/64GB storage options.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102991895_2.jpg',
        href: 'https://wiki.seeedstudio.com/recamera_getting_started/',
        tags: ['RISC-V', '1 TOPS', 'Entry-Level'],
      },
      {
        name: 'reCamera HQ PoE',
        description:
          'PoE-powered AI camera with swappable M12 lens mount. GC2053 sensor, data and power through a single Ethernet cable. Supports wide-angle, telephoto and macro lenses for flexible viewing angles in production deployments.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100029708-recamera-2002-hq-poe-8gb_1_1.jpg',
        href: 'https://wiki.seeedstudio.com/recamera_hq_poe_getting_started/',
        tags: ['PoE', 'M12 Lens', 'GC2053'],
      },
      {
        name: 'reCamera Gimbal',
        description:
          'AI camera with dual brushless motor gimbal and CAN bus communication. Pan and tilt control combined with AI tracking for dynamic viewpoint control. Ideal for robotics, interactive systems, and applications requiring flexible camera angles.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-108990119-recamera-gimbal-2002w-8gb_2_1.jpg',
        href: 'https://wiki.seeedstudio.com/recamera_gimbal_getting_started/',
        tags: ['Gimbal', 'CAN Bus', 'AI Tracking'],
      },
      {
        name: 'reCamera Pro',
        description:
          'High-performance AI camera for B2B and professional security. Rockchip RV1126B (quad-core Cortex-A53 ARM), 3 TOPS NPU, 2GB/4GB LPDDR4, 4K@30FPS starlight sensor. Supports CV / VLM / LLM / voice AI multimodal inference. Starting at $299.90.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png',
        href: 'https://wiki.seeedstudio.com/recamera_pro_getting_started/',
        tags: ['ARM A53', '3 TOPS', '4K', 'Multimodal AI', 'NEW'],
        isNew: true,
      },
    ],
  },
  {
    id: 'modules',
    title: 'Modules',
    icon: 'cpu',
    items: [
      {
        name: 'reCamera 2002 Sensor Board (GC2053)',
        description:
          'Replaceable front panel with GC2053 sensor and M12 swappable lens mount. Upgrade your Gen 1 reCamera with interchangeable lenses for custom fields of view. Compatible with all reCamera 2002 series devices.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100041077-recamera-2002-sensor-board-gc2053.jpg',
        href: 'https://wiki.seeedstudio.com/reCamera_hq_poe_hardware_and_specs/#sensor-board-s4_gc2053',
        tags: ['GC2053', 'M12 Mount', 'Replaceable'],
      },
      {
        name: 'reCamera 2002 Core Board',
        description:
          'Universal core board for all Gen 1 reCamera devices. Available with/without WiFi and in 8GB/64GB storage. Use for storage expansion or adding WiFi capability to your existing reCamera.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-102991899-recamera-core-2002w-64gb_1.jpg',
        href: 'https://wiki.seeedstudio.com/recamera_2002_series_hardware_and_specs/#core-board-c101',
        tags: ['Core', 'WiFi Option', '8GB/64GB'],
      },
      {
        name: 'reCamera 2002 Base Board with PoE',
        description:
          'PoE-enabled base board for all Gen 1 reCamera devices. Add PoE power and networking through a single Ethernet cable, or replace a damaged existing base board.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100074316-recamera-2002-base-board-poe_1.jpg',
        href: 'https://wiki.seeedstudio.com/reCamera_hq_poe_hardware_and_specs/#b3_poe',
        tags: ['PoE', 'Base Board', 'Gen 1'],
      },
      {
        name: 'reCamera 2002 Base Board WiFi HaLow',
        description:
          'WiFi HaLow base board for all Gen 1 reCamera devices. Adds long-range, low-power wireless communication and video transmission capability using sub-GHz band.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100063704-recamera-2002-base-board-wifi-halow.jpg',
        href: 'https://wiki.seeedstudio.com/wifi_halow_getting_started/',
        tags: ['WiFi HaLow', 'Long Range', 'Wireless'],
      },
    ],
  },
  {
    id: 'accessories',
    title: 'Accessories',
    icon: 'puzzle',
    items: [
      {
        name: 'Outdoor Enclosure',
        description:
          'IP65-rated weatherproof outdoor enclosure designed for reCamera 2002 HQ PoE. Protects your camera from rain, dust, and harsh environments for reliable long-term outdoor operation.',
        image: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_29_2.jpg',
        href: 'https://www.youtube.com/watch?v=TbTROYjq2vg',
        tags: ['IP65', 'Outdoor', 'HQ PoE'],
      },
      {
        name: 'M12 Lens Collection',
        description:
          'Interchangeable M12 mount lens collection. Four options: 160° fisheye, 140° wide angle, 20° telephoto, and 15° ultra telephoto/macro. Flexible configuration for diverse visual scenarios.',
        image: 'https://www.seeedstudio.com/blog/wp-content/uploads/2026/06/58b823eb-5bdb-44fc-8d0d-a3fa05f8a013-scaled.jpg',
        href: 'https://www.youtube.com/watch?si=jo1lhecXue9MRtqo&v=7kKzJaNIS1A&feature=youtu.be',
        tags: ['M12 Mount', '4 Options', 'Wide to Macro'],
      },
    ],
  },
];

// ===================== Feature Highlights =====================

export const featureHighlights: FeatureHighlight[] = [
  {
    title: 'Dual Architecture',
    subtitle: 'RISC-V x ARM',
    description:
      'Gen 1: SG2002 RISC-V — open and flexible. Gen 2 Pro: Rockchip RV1126B ARM quad-core — industrial-grade performance. Choose the right platform for your application.',
    icon: 'cpu',
  },
  {
    title: 'Powerful NPU',
    subtitle: '1 TOPS to 3 TOPS',
    description:
      'Gen 1 delivers 1 TOPS for lightweight AI. Gen 2 Pro upgrades to 3 TOPS with INT8/INT16 mixed precision, running CV / VLM / LLM / voice AI multimodal models.',
    icon: 'zap',
  },
  {
    title: 'Node-RED Visual Programming',
    subtitle: 'Zero-Code AI Orchestration',
    description:
      'Built-in Node-RED drag-and-drop interface for rapid AI pipeline setup. Event-driven workflows deploy AI applications with one click.',
    icon: 'workflow',
  },
  {
    title: 'Open Source Ecosystem',
    subtitle: 'Full Stack Open',
    description:
      'Open hardware (OSHW), open OS, open SDK, open SSCMA model zoo. Complete documentation and community support with no restrictions.',
    icon: 'github',
  },
];

// ===================== AI Deploy Steps =====================

export const aiDeploySteps: DeployStep[] = [
  {
    step: 1,
    title: 'Collect data',
    description: '',
    detail: '',
    icon: 'database',
  },
  {
    step: 2,
    title: 'One-click training',
    description: '',
    detail: '',
    icon: 'settings',
  },
  {
    step: 3,
    title: 'Deploy to reCamera',
    description: '',
    detail: '',
    icon: 'rocket',
  },
];

// ===================== Resource Tabs =====================

export const resourceTabs: ResourceTab[] = [
  {
    id: 'applications',
    title: 'Demo Showcases',
    icon: 'layout',
    categories: [
      {
        title: 'Smart Home & IoT',
        description:
          'Integrate reCamera with popular home automation platforms for intelligent monitoring and control.',
        icon: 'home',
        items: [
          { label: 'Home Assistant Integration', href: 'https://wiki.seeedstudio.com/getting_started_for_home_assistant_with_recamera/' },
          { label: 'Pro + Home Assistant Sound-Triggered Photo Alert', href: 'https://wiki.seeedstudio.com/recamera_pro_ha_sound_alert/' },
        ],
      },
      {
        title: 'Notifications & IM',
        description:
          'Set up real-time alerts and AI event notifications through popular messaging platforms.',
        icon: 'bell',
        items: [
          { label: 'AI Human Detection + Meshtastic Broadcast', href: 'https://wiki.seeedstudio.com/ai_human_detection_meshtastic_broadcast/' },
          { label: 'WeCom (WeChat Work) Alerts', href: 'https://wiki.seeedstudio.com/getting_started_in_Wechat_work_with_recamera/' },
          { label: 'Telegram Bot', href: 'https://wiki.seeedstudio.com/getting_started_in_Telegram_work_with_recamera/' },
          { label: 'n8n Workflow Automation', href: 'https://wiki.seeedstudio.com/getting_started_for_n8n_with_recamera/' },
          { label: 'Long-Range Security System with Meshtastic', href: 'https://wiki.seeedstudio.com/recamera_meshtastic_ha_security_system/' },
        ],
      },
      {
        title: 'Smart City & Monitoring',
        description:
          'Deploy scalable AI vision systems for urban and industrial scenarios.',
        icon: 'city',
        items: [
          { label: 'AI Parking Slot Monitoring', href: 'https://wiki.seeedstudio.com/ai_parking_slot_monitoring_demo_with_recamera/' },
          { label: 'Wi-Fi HaLow Remote Monitoring', href: 'https://wiki.seeedstudio.com/ai_remote_wireless_monitor_system/' },
          { label: 'RTSP to WebRTC Streaming', href: 'https://wiki.seeedstudio.com/rtsp_to_webrtc_with_recamera/' },
          { label: 'Motion Detection for Selected Area', href: 'https://wiki.seeedstudio.com/recamera_motion_detection/' },
        ],
      },
      {
        title: 'Robotics & Interaction',
        description:
          'Advanced applications combining reCamera with robotics and interactive systems.',
        icon: 'bot',
        items: [
          { label: 'Stream Deck Gimbal Control', href: 'https://wiki.seeedstudio.com/using_stream_deck_to_control_recamera_gimbal/' },
          { label: 'OpenClaw Gimbal Control', href: 'https://wiki.seeedstudio.com/use_cpenclaw_to_control_the_recamera_gimbal/' },
          { label: 'Sound Source Localization', href: 'https://wiki.seeedstudio.com/sound_source_localization_of_recamera_gimbal/' },
          { label: 'UDP Face Analysis', href: 'https://wiki.seeedstudio.com/recamera_udp_face_analysis/' },
          { label: 'AI Voice Interaction', href: 'https://wiki.seeedstudio.com/ai_voice_assitant_with_recamera/' },
          { label: 'Pro Tilt and Shake Detection', href: 'https://wiki.seeedstudio.com/recamera_pro_imu_tilt_shake_detection/' },
        ],
      },
      {
        title: 'Creative Projects',
        description:
          'Fun and creative projects built with reCamera. Get inspired and start building your own.',
        icon: 'lightbulb',
        items: [
          { label: 'Subway Surfers Body Control', href: 'https://wiki.seeedstudio.com/use_the_motion-sensing_function_of_recamera_to_play_games/' },
          { label: 'Grafana Heatmap Dashboard', href: 'https://wiki.seeedstudio.com/integration_of_real-time_heat_map_with_grafana_data_dashboard/' },
          { label: 'Local Picoclaw Deployment', href: 'https://wiki.seeedstudio.com/recamera_picoclaw/' },
          { label: 'Real-Time QR Code Recognition', href: 'https://wiki.seeedstudio.com/recamera_qrcode_udp/' },
          { label: 'MediaPipe Hand Gesture Recognition', href: 'https://wiki.seeedstudio.com/recamera_hand_gesture/' },
        ],
      },
      {
        title: 'Performance & Benchmarking',
        description:
          'Performance testing, benchmarking, and development tools for reCamera.',
        icon: 'barchart',
        items: [
          { label: 'YOLO11n Benchmarking', href: 'https://wiki.seeedstudio.com/recamera_benchmarking/' },
          { label: 'Pro Laboratory Use', href: 'https://wiki.seeedstudio.com/recamera_pro_use_of_the_laboratory/' },
        ],
      },
    ],
  },
  {
    id: 'opensource',
    title: 'Open Source Resources',
    icon: 'code',
    categories: [
      {
        title: 'Hardware Reference (OSHW)',
        description: 'Complete hardware documentation, design files, and specifications.',
        icon: 'cpu',
        items: [
          { label: 'OSHW GitHub Repository', href: 'https://github.com/Seeed-Studio/OSHW-reCamera-Series' },
          { label: 'reCamera 2002 Series Hardware Specs', href: 'https://wiki.seeedstudio.com/recamera_2002_series_hardware_and_specs/' },
          { label: 'reCamera Gimbal Hardware Specs', href: 'https://wiki.seeedstudio.com/recamera_gimbal_hardware_and_specs/' },
          { label: 'reCamera HQ POE Hardware Specs', href: 'https://wiki.seeedstudio.com/reCamera_hq_poe_hardware_and_specs/' },
          { label: 'reCamera Pro Hardware Usage', href: 'https://wiki.seeedstudio.com/recamera_pro_hardware_usage/' },
        ],
      },
      {
        title: 'OS Basics',
        description: 'Operating system fundamentals and system configuration.',
        icon: 'terminal',
        items: [
          { label: 'OS Version Control', href: 'https://wiki.seeedstudio.com/recamera_os_version_control/' },
          { label: 'reCamera OS Structure', href: 'https://wiki.seeedstudio.com/recamera_os_structure/' },
          { label: 'Linux Fundamentals', href: 'https://wiki.seeedstudio.com/recamera_linux_fundamentals/' },
          { label: 'Configure Static IP', href: 'https://wiki.seeedstudio.com/configure_static_ip_on_recamera/' },
        ],
      },
      {
        title: 'Low-Code Development',
        description: 'Rapid AI deployment with Node-RED visual programming.',
        icon: 'mouseclick',
        items: [
          { label: 'Develop with Node-RED', href: 'https://wiki.seeedstudio.com/recamera_develop_with_node-red/' },
        ],
      },
      {
        title: 'Professional Development',
        description: 'SDK, API, and advanced development guides for professionals.',
        icon: 'code',
        items: [
          { label: 'Develop with C/C++', href: 'https://wiki.seeedstudio.com/recamera_develop_with_c_cpp/' },
          { label: 'Auto-Start Program on Boot', href: 'https://wiki.seeedstudio.com/make_the_cpp_program_auto_start_on_boot/' },
          { label: 'Real-Time YOLO Object Detection (C++)', href: 'https://wiki.seeedstudio.com/real_time_yolo_object_detection_using_recamera_based_on_cpp/' },
          { label: 'reCamera Pro API Reference', href: 'https://wiki.seeedstudio.com/recamera_pro_secondary_development_api/' },
        ],
      },
    ],
  },
  {
    id: 'community',
    title: 'Join the Community',
    icon: 'users',
    categories: [
      {
        title: 'Hackaday Project',
        description:
          'Peek under the hood. Explore detailed project logs and learn how reCamera is built from scratch.',
        icon: 'hackaday',
        items: [
          { label: '5K+ Views — Explore Project Log', href: 'https://hackaday.io/project/202736-recamera' },
        ],
      },
      {
        title: 'GitHub Repository',
        description:
          'Full open-source hardware design files, software stack, and documentation. Star the repo and contribute.',
        icon: 'github',
        items: [
          { label: '500+ Stars — OSHW-reCamera-Series', href: 'https://github.com/Seeed-Studio/OSHW-reCamera-Series' },
        ],
      },
      {
        title: 'Discord Community',
        description:
          "Join Seeed Studio's Discord to ask questions, share projects, get support, and connect with fellow developers.",
        icon: 'discord',
        items: [
          { label: '10K+ Members — Join Discord', href: 'https://discord.gg/MbKTxxR46v' },
        ],
      },
    ],
  },
];

// ===================== Quick Start =====================

export const quickStartItems: QuickStartItem[] = [
  {
    title: 'Complete Setup Guide',
    description: 'Get your reCamera up and running with our step-by-step setup instructions.',
    href: 'https://wiki.seeedstudio.com/recamera_getting_started/',
    features: [
      'All Device Series',
      'Step-by-Step Instructions',
      'Troubleshooting Guide',
    ],
    cta: 'Get Started',
  },
];

// ===================== Legacy exports =====================

/** @deprecated Use productFamily */
export const productCategories = productFamily;

/** @deprecated Use aiDeploySteps */
export const aiDeployFlowSteps = aiDeploySteps;
