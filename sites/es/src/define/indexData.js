// getting Started Wiki dropdown data
/** @typedef {'en' | 'cn' | 'ja' | 'es' | 'pt-br'} Locale */
const BASE_STARTED_LIST = [
  {
    title: 'SenseCAP',
    img: 'sensecap',
    link: '/SenseCAP_introduction/',
    children: [
      {
        title: 'SenseCAP Tracker T1000',
        link: '/sensecap_t1000_tracker/',
      },
      {
        title: 'SenseCAP LoRaWAN Sensors',
        link: '/SenseCAP_Sensor_Intro/',
      },
      {
        title: 'SenseCAP Sensors Builder',
        link:
          '/Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger/',
      },
      {
        title: 'SenseCAP Data Logger',
        link: '/SenseCAP_Data_Logger_Intro/',
      },
      {
        title: 'SenseCAP Decoder',
        link: '/SenseCAP_Decoder/',
      },
      {
        title: 'SenseCAP Gateway',
        link:
          '/Network/SenseCAP_Network/SenseCAP_Gateway_Intro/',
      },
    ],
  },
  {
    title: 'grove',
    img: 'grove',
    link: '/Grove_System/',
    children: [
      {
        title: 'Grove Sensors',
        link: '/Grove_Sensor_Intro/',
      },
      {
        title: 'Grove Network',
        link: '/Grove_network_module_intro/',
      },
      {
        title: 'Grove Accessories',
        link: '/Grove_Accessories_Intro/',
      },
    ],
  },
  {
    title: 'reterminal',
    img: 'reterminal',
    link: '/raspberry-pi-devices',
    children: [
      {
        title: 'reTerminal',
        link: '/reTerminal_Intro/',
      },
      {
        title: 'reTerminal DM',
        link: '/reTerminal-dm_Intro/',
      },
      {
        title: 'reRouter',
        link: '/reRouter_Intro/',
      },
      {
        title: 'Edge Controller',
        link: '/Edge_Box_intro/',
      },
      {
        title: 'Raspberry Pi Official',
        link: '/Raspberry_Pi/',
      },
    ],
  },
  {
    title: 'recomputer',
    img: 'recomputer',
    link: '/NVIDIA_Jetson/',
    children: [
      {
        title: 'reComputer Jetson Series',
        link: '/reComputer_Intro/',
      },
      {
        title: 'reComputer Jetson Industrial Series',
        link:
          '/reComputer_Industrial_Getting_Started/',
      },
      {
        title: 'reServer Jetson Industrial',
        link: '/reServer_Industrial_Getting_Started/',
      },
      {
        title: 'Mini PC',
        link: '/reComputer_A203E_Flash_System/',
      },
      {
        title: 'Carrier Boards',
        link: '/reComputer_J1010_J101_Flash_Jetpack/',
      },
    ],
  },
  {
    title: 'MCU Board',
    img: 'mcu_board',
    link: '/Edge_Computing/#microcontrollers',
    children: [
      {
        title: 'Seeed Studio XIAO Series',
        link:
          '/SeeedStudio_XIAO_Series_Introduction/',
      },
      {
        title: 'Wio Terminal',
        link: '/Wio_Terminal_Intro/',
      },
      {
        title: 'Wio Tracker 1110 Dev Board',
        link: '/Wio-Tracker_Introduction/',
      },
      {
        title: 'SenseCAP Indicator',
        link:
          '/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/',
      },
      {
        title: 'Edge Controller',
        link: '/Edgebox-ESP-100-Arduino/',
      },
    ],
  },
  {
    title: 'Single Board Computer',
    img: 'sbc_board',
    link: '/Edge_Computing/#single-board-computers',
    children: [
      {
        title: 'BeagleBone®',
        link: '/BeagleBone/',
      },
      {
        title: 'ODYSSEY',
        link: '/ODYSSEY_Intro/',
      },
      {
        title: 'LinkStar Router Series',
        link: '/Linkstar_Intro/',
      },
    ],
  },
  {
    title: 'Arduino',
    img: 'arduino',
    link: '/Arduino/',
    children: [
      {
        title: 'Arduino Official',
        link: '/Getting_Started_with_Arduino/',
      },
      {
        title: 'Arduino Shields',
        link: '/Shield/',
      },
      {
        title: 'mmWave Radar Sensor',
        link: '/mmwave_radar_Intro/',
      },
      {
        title: 'Arduino Kits withs Courses',
        link: '/Grove-Beginner-Kit-For-Arduino/',
      },
    ],
  },
  {
    title: 'micro',
    img: 'micro',
    link: '/MicroBit_Intro/',
    children: [
      {
        title: 'BitWear',
        link: '/BitWear/',
      },
      {
        title: 'BitMaker',
        link: '/BitMaker/',
      },
      {
        title: 'BitMaker Lite',
        link: '/BitMaker_Lite/',
      },
      {
        title: 'BitPlayer',
        link: '/BitPlayer/',
      },
      {
        title: 'BItCar',
        link: '/BitCar/',
      },
      {
        title: 'Micro:Bit Kits',
        link: '/Grove_Inventor_Kit_for_microbit/',
      },
    ],
  },
];
// Explore & Learn dropdown data
const BASE_EXPLORE_LIST = [
  {
    title: 'Awaken Your Home',
    img: 'awaken',
    link: '/home_assistant_topic/',
    children: [
      {
        title: 'Awaken Your Home',
        link: '/home_assistant_topic/',
      },
      {
        title: 'Home Assistant Projects',
        link: '/home_assistant_topic/#what-is-home-assistant',
        children: [
          {
            title: 'SenseCAP Integration for Home Assistant',
            link:
              '/home_assistant_sensecap/',
          },
          {
            title: 'Extend Home Assistant with LoRaWAN device',
            link:
              '/ha_xiao_esp32/',
          },
          {
            title: 'SenseCraft-HomeAssistant User Manual',
            link:
              '/sensecraft_homeassistant_userguide/',
          },
        ],
      },
      {
        title: 'Home Assistant Official devices',
        link:
          '/home_assistant_topic/#top-picks-form-home-assistant-official',
      },
      {
        title: 'Popular Add-ons',
        link:
          '/home_assistant_topic/#popular-add-onsv',
      },
      {
        title: 'Seeed-powered Home Assistant Devices',
        link:
          '/home_assistant_topic/#getting-started-with-seeed-devices-a-quick-setup-guide',
      },
      {
        title: 'Seeed powered Home Assistant Applications',
        link:
          '/home_assistant_topic/#seeed-powered-home-assistant-applications',
      },
    ],
  },
  {
    title: 'TinyMl',
    img: 'tinyml',
    link: '/tinyml_topic/',
    children: [
      {
        title: 'Explore easilist ML everywhere',
        link: '/tinyml_topic/#tinyml-appication',
        split: true,
        children: [
          {
            title: 'Human-Machine Interaction',
            link:
              '/tinyml_topic/#human-machine-interaction',
          },
          {
            title: 'Farming',
            link: '/tinyml_topic/#farming',
          },
          {
            title: 'Healthcare',
            link: '/tinyml_topic/#healthcare',
          },
          {
            title: 'Animal Husbandry',
            link: '/tinyml_topic/#animal-husbandry',
          },
          {
            title: 'Retail',
            link: '/tinyml_topic/#retail',
          },
          {
            title: 'Industrial',
            link: '/tinyml_topic/#industrial',
          },
          {
            title: 'Transportation',
            link: '/tinyml_topic/#transportation',
          },
          {
            title: 'Microsoft Reactor',
            link:
              '/tinyml_topic/#microsoft-reactor',
          },
        ],
      },
      {
        title: 'Modules for TinyML',
        link:
          '/tinyml_topic/#recommended-boards-supporting-tinyml',
      },
      {
        title: 'Platforms for TinyML',
        link: '/tinyml_topic/#support-platforms',
      },
      {
        title: 'TinyML Courses',
        link: '/tinyml_topic/#tinyml-courese',
      },
    ],
  },
  {
    title: 'Workshop',
    img: 'workshop',
    link: '/tinyml_workshop_course_new/',
    children: [
      {
        title: 'Course & Workshop',
        link: '/tinyml_workshop_course_new/',
        children: [
          {
            title: 'SenseCraft AI Platform',
            link: '/sscma/',
          },
          {
            title: 'Edge Impulse',
            link:
              '/edgeimpulse/',
          },
        ],
      },
    ],
  },
  {
    title: 'Edge AI Solutions',
    img: 'edgeai',
    link: '/edge_ai_topic/',
    children: [
      {
        title: 'Generative AI',
        link: '/edge_ai_topic/#generative-ai',
      },
      {
        title: 'Object Recognition',
        link: '/edge_ai_topic/#object-recognition',
      },
      {
        title: 'Sound Recognition',
        link: '/edge_ai_topic/#sound-recognition',
      },
      {
        title: 'Enhance Deep Learning Model',
        link: '/edge_ai_topic/#enhance-deep-learning-model',
      },      
    ],
  },
  {
    title: 'Open Source',
    img: 'opensource',
    link: '/Seeed_Studio_Open_Souce_Intro',
    children: [
      {
        title: 'Hardware',
        link:
          '/open_source_topic/#open-source-hardware',
      },
      {
        title: 'Software',
        link:
          '/open_source_topic/#open-source-software',
      },
    ],
  },
  {
    title: '矽递科技Wiki文档平台',
    img: 'language',
    link: 'https://wiki.seeedstudio.com/Getting_Started/',
    children: [
      {
        title: 'Wiki SeeedStudio (English)',
        link: 'https://wiki.seeedstudio.com/Getting_Started/',
      },
      {
        title: 'Wiki 矽递科技 (中文)',
        link: 'https://wiki.seeedstudio.com/cn/Getting_Started/',
      },
      {
        title: 'Wiki SeeedStudio (日本語)',
        link: 'https://wiki.seeedstudio.com/ja/Getting_Started/',
      },
      {
        title: 'Wiki SeeedStudio (Español)',
        link: 'https://wiki.seeedstudio.com/es/Getting_Started/',
      },
    ],
  },
];

const NAV_LABEL_I18N = {
  cn: {
    'Animal Husbandry': '畜牧业',
    'Arduino Kits withs Courses': 'Arduino 套件与课程',
    'Arduino Official': 'Arduino 官方',
    'Arduino Shields': 'Arduino 扩展板',
    'Awaken Your Home': '唤醒你的智能家居',
    'Carrier Boards': '载板',
    'Course & Workshop': '课程与工作坊',
    'Edge AI Solutions': '边缘 AI 解决方案',
    'Edge Controller': '边缘控制器',
    'Enhance Deep Learning Model': '强化深度学习模型',
    'Explore easilist ML everywhere': '随处探索最易上手的机器学习',
    'Extend Home Assistant with LoRaWAN device': '用 LoRaWAN 设备扩展 Home Assistant',
    'Farming': '农业',
    'Generative AI': '生成式 AI',
    'Grove Accessories': 'Grove 配件',
    'Grove Network': 'Grove 网络',
    'Grove Sensors': 'Grove 传感器',
    'Hardware': '硬件',
    'Healthcare': '医疗健康',
    'Home Assistant Official devices': 'Home Assistant 官方设备',
    'Home Assistant Projects': 'Home Assistant 项目',
    'Human-Machine Interaction': '人机交互',
    'Industrial': '工业',
    'LinkStar Router Series': 'LinkStar 路由器系列',
    'MCU Board': 'MCU 开发板',
    'Micro:Bit Kits': 'micro:bit 套件',
    'Mini PC': '迷你电脑',
    'Modules for TinyML': 'TinyML 模块',
    'Object Recognition': '目标识别',
    'Open Source': '开源',
    'Platforms for TinyML': 'TinyML 平台',
    'Popular Add-ons': '热门扩展',
    'Raspberry Pi Official': '树莓派官方',
    'Retail': '零售',
    'Seeed powered Home Assistant Applications': 'Seeed 驱动的 Home Assistant 应用',
    'Seeed-powered Home Assistant Devices': 'Seeed 驱动的 Home Assistant 设备',
    'Seeed Studio XIAO Series': 'Seeed Studio XIAO 系列',
    'SenseCAP Data Logger': 'SenseCAP 数据记录仪',
    'SenseCAP Decoder': 'SenseCAP 解码器',
    'SenseCAP Gateway': 'SenseCAP 网关',
    'SenseCAP Indicator': 'SenseCAP 指示器',
    'SenseCAP Integration for Home Assistant': 'Home Assistant 专用 SenseCAP 集成',
    'SenseCAP LoRaWAN Sensors': 'SenseCAP LoRaWAN 传感器',
    'SenseCAP Sensors Builder': 'SenseCAP 传感器构建器',
    'SenseCAP Tracker T1000': 'SenseCAP 追踪器 T1000',
    'SenseCraft AI Platform': 'SenseCraft AI 平台',
    'SenseCraft-HomeAssistant User Manual': 'SenseCraft-HomeAssistant 用户手册',
    'Single Board Computer': '单板计算机',
    'Software': '软件',
    'Sound Recognition': '声音识别',
    'TinyML Courses': 'TinyML 课程',
    'TinyMl': 'TinyML',
    'Transportation': '交通',
    'Wio Tracker 1110 Dev Board': 'Wio Tracker 1110 开发板',
    'Workshop': '工作坊',
    'mmWave Radar Sensor': '毫米波雷达传感器',
    'reComputer Jetson Industrial Series': 'reComputer Jetson 工业系列',
    'reComputer Jetson Series': 'reComputer Jetson 系列',
    'reServer Jetson Industrial': 'reServer Jetson 工业系列',
  },
  ja: {
    'Animal Husbandry': '畜産',
    'Arduino Kits withs Courses': 'Arduino キットとコース',
    'Arduino Official': 'Arduino 公式',
    'Arduino Shields': 'Arduino シールド',
    'Awaken Your Home': 'あなたの家を活性化',
    'Carrier Boards': 'キャリアボード',
    'Course & Workshop': 'コースとワークショップ',
    'Edge AI Solutions': 'エッジAIソリューション',
    'Edge Controller': 'エッジコントローラ',
    'Enhance Deep Learning Model': '深層学習モデルを強化',
    'Explore easilist ML everywhere': 'どこでも手軽に機械学習を体験',
    'Extend Home Assistant with LoRaWAN device': 'LoRaWAN デバイスで Home Assistant を拡張',
    'Farming': '農業',
    'Generative AI': '生成AI',
    'Grove Accessories': 'Grove アクセサリ',
    'Grove Network': 'Grove ネットワーク',
    'Grove Sensors': 'Grove センサー',
    'Hardware': 'ハードウェア',
    'Healthcare': 'ヘルスケア',
    'Home Assistant Official devices': 'Home Assistant 公式デバイス',
    'Home Assistant Projects': 'Home Assistant プロジェクト',
    'Human-Machine Interaction': 'ヒューマンマシンインタラクション',
    'Industrial': '産業',
    'LinkStar Router Series': 'LinkStar ルーターシリーズ',
    'MCU Board': 'MCU ボード',
    'Micro:Bit Kits': 'micro:bit キット',
    'Mini PC': 'ミニPC',
    'Modules for TinyML': 'TinyML モジュール',
    'Object Recognition': '物体認識',
    'Open Source': 'オープンソース',
    'Platforms for TinyML': 'TinyML プラットフォーム',
    'Popular Add-ons': '人気アドオン',
    'Raspberry Pi Official': 'Raspberry Pi 公式',
    'Retail': '小売',
    'Seeed powered Home Assistant Applications': 'Seeed 提供の Home Assistant アプリ',
    'Seeed-powered Home Assistant Devices': 'Seeed 提供の Home Assistant デバイス',
    'Seeed Studio XIAO Series': 'Seeed Studio XIAO シリーズ',
    'SenseCAP Data Logger': 'SenseCAP データロガー',
    'SenseCAP Decoder': 'SenseCAP デコーダ',
    'SenseCAP Gateway': 'SenseCAP ゲートウェイ',
    'SenseCAP Indicator': 'SenseCAP インジケーター',
    'SenseCAP Integration for Home Assistant': 'Home Assistant 向け SenseCAP 連携',
    'SenseCAP LoRaWAN Sensors': 'SenseCAP LoRaWAN センサー',
    'SenseCAP Sensors Builder': 'SenseCAP センサービルダー',
    'SenseCAP Tracker T1000': 'SenseCAP トラッカー T1000',
    'SenseCraft AI Platform': 'SenseCraft AI プラットフォーム',
    'SenseCraft-HomeAssistant User Manual': 'SenseCraft-HomeAssistant ユーザーマニュアル',
    'Single Board Computer': 'シングルボードコンピュータ',
    'Software': 'ソフトウェア',
    'Sound Recognition': '音声認識',
    'TinyML Courses': 'TinyML コース',
    'TinyMl': 'TinyML',
    'Transportation': '交通',
    'Wio Tracker 1110 Dev Board': 'Wio Tracker 1110 開発ボード',
    'Workshop': 'ワークショップ',
    'mmWave Radar Sensor': 'mmWave レーダーセンサー',
    'reComputer Jetson Industrial Series': 'reComputer Jetson 産業シリーズ',
    'reComputer Jetson Series': 'reComputer Jetson シリーズ',
    'reServer Jetson Industrial': 'reServer Jetson 産業シリーズ',
  },
  es: {
    'Animal Husbandry': 'Ganadería',
    'Arduino Kits withs Courses': 'Kits y cursos de Arduino',
    'Arduino Official': 'Arduino oficial',
    'Arduino Shields': 'Shields de Arduino',
    'Awaken Your Home': 'Activa tu hogar',
    'Carrier Boards': 'Placas portadoras',
    'Course & Workshop': 'Cursos y talleres',
    'Edge AI Solutions': 'Soluciones de Edge AI',
    'Edge Controller': 'Controlador perimetral',
    'Enhance Deep Learning Model': 'Mejora el modelo de deep learning',
    'Explore easilist ML everywhere': 'Explora el ML más sencillo en cualquier lugar',
    'Extend Home Assistant with LoRaWAN device': 'Amplía Home Assistant con un dispositivo LoRaWAN',
    'Farming': 'Agricultura',
    'Generative AI': 'IA generativa',
    'Grove Accessories': 'Accesorios Grove',
    'Grove Network': 'Red Grove',
    'Grove Sensors': 'Sensores Grove',
    'Hardware': 'Hardware',
    'Healthcare': 'Salud',
    'Home Assistant Official devices': 'Dispositivos oficiales de Home Assistant',
    'Home Assistant Projects': 'Proyectos de Home Assistant',
    'Human-Machine Interaction': 'Interacción humano-máquina',
    'Industrial': 'Industrial',
    'LinkStar Router Series': 'Serie de routers LinkStar',
    'MCU Board': 'Placa MCU',
    'Micro:Bit Kits': 'Kits micro:bit',
    'Mini PC': 'Mini PC',
    'Modules for TinyML': 'Módulos para TinyML',
    'Object Recognition': 'Reconocimiento de objetos',
    'Open Source': 'Código abierto',
    'Platforms for TinyML': 'Plataformas para TinyML',
    'Popular Add-ons': 'Complementos populares',
    'Raspberry Pi Official': 'Raspberry Pi oficial',
    'Retail': 'Retail',
    'Seeed powered Home Assistant Applications': 'Aplicaciones de Home Assistant potenciadas por Seeed',
    'Seeed-powered Home Assistant Devices': 'Dispositivos de Home Assistant potenciados por Seeed',
    'Seeed Studio XIAO Series': 'Serie Seeed Studio XIAO',
    'SenseCAP Data Logger': 'Registrador de datos SenseCAP',
    'SenseCAP Decoder': 'Decodificador SenseCAP',
    'SenseCAP Gateway': 'Puerta de enlace SenseCAP',
    'SenseCAP Indicator': 'Indicador SenseCAP',
    'SenseCAP Integration for Home Assistant': 'Integración SenseCAP para Home Assistant',
    'SenseCAP LoRaWAN Sensors': 'Sensores LoRaWAN SenseCAP',
    'SenseCAP Sensors Builder': 'Generador de sensores SenseCAP',
    'SenseCAP Tracker T1000': 'Rastreador SenseCAP T1000',
    'SenseCraft AI Platform': 'Plataforma SenseCraft AI',
    'SenseCraft-HomeAssistant User Manual': 'Manual de usuario de SenseCraft-HomeAssistant',
    'Single Board Computer': 'Computadora de placa única',
    'Software': 'Software',
    'Sound Recognition': 'Reconocimiento de sonido',
    'TinyML Courses': 'Cursos de TinyML',
    'TinyMl': 'TinyML',
    'Transportation': 'Transporte',
    'Wio Tracker 1110 Dev Board': 'Placa de desarrollo Wio Tracker 1110',
    'Workshop': 'Taller',
    'mmWave Radar Sensor': 'Sensor radar mmWave',
    'reComputer Jetson Industrial Series': 'Serie industrial reComputer Jetson',
    'reComputer Jetson Series': 'Serie reComputer Jetson',
    'reServer Jetson Industrial': 'reServer Jetson industrial',
  },
  'pt-br': {
    'Animal Husbandry': 'Pecuária',
    'Arduino Kits withs Courses': 'Kits e cursos de Arduino',
    'Arduino Official': 'Arduino oficial',
    'Arduino Shields': 'Shields para Arduino',
    'Awaken Your Home': 'Transforme sua casa',
    'Carrier Boards': 'Placas carrier',
    'Course & Workshop': 'Cursos e workshops',
    'Edge AI Solutions': 'Soluções de Edge AI',
    'Edge Controller': 'Controlador de borda',
    'Enhance Deep Learning Model': 'Aprimore modelos de deep learning',
    'Explore easilist ML everywhere': 'Explore o ML mais fácil em qualquer lugar',
    'Extend Home Assistant with LoRaWAN device': 'Expanda o Home Assistant com dispositivos LoRaWAN',
    'Farming': 'Agricultura',
    'Generative AI': 'IA generativa',
    'Grove Accessories': 'Acessórios Grove',
    'Grove Network': 'Rede Grove',
    'Grove Sensors': 'Sensores Grove',
    'Hardware': 'Hardware',
    'Healthcare': 'Saúde',
    'Home Assistant Official devices': 'Dispositivos oficiais do Home Assistant',
    'Home Assistant Projects': 'Projetos com Home Assistant',
    'Human-Machine Interaction': 'Interação homem-máquina',
    'Industrial': 'Industrial',
    'LinkStar Router Series': 'Série de roteadores LinkStar',
    'MCU Board': 'Placa MCU',
    'Micro:Bit Kits': 'Kits micro:bit',
    'Mini PC': 'Mini PC',
    'Modules for TinyML': 'Módulos para TinyML',
    'Object Recognition': 'Reconhecimento de objetos',
    'Open Source': 'Código aberto',
    'Platforms for TinyML': 'Plataformas para TinyML',
    'Popular Add-ons': 'Complementos populares',
    'Raspberry Pi Official': 'Raspberry Pi oficial',
    'Retail': 'Varejo',
    'Seeed powered Home Assistant Applications': 'Aplicações de Home Assistant com tecnologia Seeed',
    'Seeed-powered Home Assistant Devices': 'Dispositivos Home Assistant com tecnologia Seeed',
    'Seeed Studio XIAO Series': 'Série Seeed Studio XIAO',
    'SenseCAP Data Logger': 'Data Logger SenseCAP',
    'SenseCAP Decoder': 'Decodificador SenseCAP',
    'SenseCAP Gateway': 'Gateway SenseCAP',
    'SenseCAP Indicator': 'Indicador SenseCAP',
    'SenseCAP Integration for Home Assistant': 'Integração SenseCAP para Home Assistant',
    'SenseCAP LoRaWAN Sensors': 'Sensores LoRaWAN SenseCAP',
    'SenseCAP Sensors Builder': 'Construtor de sensores SenseCAP',
    'SenseCAP Tracker T1000': 'Rastreador SenseCAP T1000',
    'SenseCraft AI Platform': 'Plataforma SenseCraft AI',
    'SenseCraft-HomeAssistant User Manual': 'Manual do usuário do SenseCraft-HomeAssistant',
    'Single Board Computer': 'Computador de placa única',
    'Software': 'Software',
    'Sound Recognition': 'Reconhecimento de som',
    'TinyML Courses': 'Cursos de TinyML',
    'TinyMl': 'TinyML',
    'Transportation': 'Transporte',
    'Wio Tracker 1110 Dev Board': 'Placa de desenvolvimento Wio Tracker 1110',
    'Workshop': 'Workshop',
    'mmWave Radar Sensor': 'Sensor de radar mmWave',
    'reComputer Jetson Industrial Series': 'Série industrial reComputer Jetson',
    'reComputer Jetson Series': 'Série reComputer Jetson',
    'reServer Jetson Industrial': 'reServer Jetson industrial',
  },
};

function translateNavLabel(label, locale) {
  const dict = NAV_LABEL_I18N[locale];
  return dict && dict[label] ? dict[label] : label;
}

function translateNavItems(items, locale) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => {
    const next = {...item};
    if (typeof item.title === 'string') {
      next.title = translateNavLabel(item.title, locale);
    }
    if (Array.isArray(item.children)) {
      next.children = translateNavItems(item.children, locale);
    }
    return next;
  });
}

export function getStartedList(locale = 'en') {
  if (locale === 'en') return BASE_STARTED_LIST;
  return translateNavItems(BASE_STARTED_LIST, locale);
}

export function getExploreList(locale = 'en') {
  if (locale === 'en') return BASE_EXPLORE_LIST;
  return translateNavItems(BASE_EXPLORE_LIST, locale);
}

export const startedList = BASE_STARTED_LIST;
export const exploreList = BASE_EXPLORE_LIST;