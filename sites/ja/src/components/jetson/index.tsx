import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { useColorMode } from '@docusaurus/theme-common';

// 动态加载四种语言的配置
import * as config_en from './config.en';
import * as config_ja from './config.ja';
import * as config_zh from './config.zh';
import * as config_es from './config.es';
// 自动生成的项目配置
import * as config_auto from './config.auto';
// 共享产品数据
import { productOptions, PRODUCT_DATA, PRODUCT_CATEGORIES } from './productData';
// SVG Icons
import {
  ProductsIcon, DemoIcon, FaqIcon, WarningIcon, StorageIcon, ClockIcon,
  RefreshIcon, PlugIcon, HardDriveIcon, ZapIcon, LinuxIcon, TreeIcon,
  PackageIcon, MonitorIcon, WrenchIcon, BookIcon, EyeIcon, BotIcon,
  FactoryIcon, BookOpenIcon, SparklesIcon, SettingsIcon, MessageSquareIcon,
  MicIcon, PaletteIcon, GemIcon, MoreHorizontalIcon, RocketIcon, HelpCircleIcon
} from './icons';

function getImgUrl(str: string, suffix?: string) {
  return `https://files.seeedstudio.com/wiki/Jetson/${str}.${suffix || 'png'}`;
}

const toUrl = (url: string) => {
  if (!url) return;
  window.location.href = url;
};

const COMMUNITY_CATEGORIES = [
  { id: 'all', key: 'all' },
  { id: 'cv', key: 'cv' },
  { id: 'gen', key: 'gen' },
  { id: 'devtools', key: 'devtools' },
  { id: 'multimodal', key: 'multimodal' },
  { id: 'physical', key: 'physical' },
  { id: 'managed', key: 'managed' }
];

const LANG_PATH_PREFIX = {
  en: '',
  zh: '/cn',
  ja: '/ja',
  es: '/es'
};


// jetson-examples 模型数据
const EXAMPLE_MODELS = [
  { name: 'LLaVA', category: 'vision', Icon: EyeIcon },
  { name: 'Ollama', category: 'llm', Icon: MessageSquareIcon },
  { name: 'Whisper', category: 'audio', Icon: MicIcon },
  { name: 'Stable Diffusion', category: 'genai', Icon: PaletteIcon },
  { name: 'YOLOv8', category: 'vision', Icon: EyeIcon },
  { name: 'CLIP', category: 'multimodal', Icon: GemIcon },
  { name: 'LLaMA2', category: 'llm', Icon: MessageSquareIcon },
  { name: 'LLaMA3', category: 'llm', Icon: MessageSquareIcon },
  { name: 'Phi-3', category: 'llm', Icon: MessageSquareIcon },
  { name: 'Gemma', category: 'llm', Icon: MessageSquareIcon },
  { name: 'Qwen2', category: 'llm', Icon: MessageSquareIcon },
  { name: '+10 more', category: 'more', Icon: MoreHorizontalIcon }
];

// FAQ 数据
const FAQ_DATA = [
  {
    Icon: WarningIcon,
    title: {
      en: 'System Crashed After apt upgrade',
      ja: 'apt upgrade 後にシステムがクラッシュ',
      zh: 'apt upgrade 后系统崩溃',
      es: 'El sistema falló después de apt upgrade'
    },
    desc: {
      en: 'Why you should NOT run apt upgrade on custom carrier boards and how to recover',
      ja: 'カスタムキャリアボードで apt upgrade を実行すべきでない理由と復旧方法',
      zh: '为什么不应在自定义载板上执行 apt upgrade，以及如何恢复',
      es: 'Por qué NO debe ejecutar apt upgrade en carrier boards personalizados y cómo recuperarse'
    },
    url: {
      en: 'https://wiki.seeedstudio.com/Jetson_FAQ/#q8-my-system-crashedunable-to-bootblack-screenlost-peripheral-drivers-after-i-execute-sudo-apt-get-update--sudo-apt-get-upgrade-commands',
      ja: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q8-sudo-apt-get-update--sudo-apt-get-upgrade-コマンドを実行した後システムがクラッシュし起動できないブラックスクリーンになったり周辺機器ドライバーが失われたりしました',
      zh: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q8-执行-sudo-apt-get-update--sudo-apt-get-upgrade-命令后我的系统崩溃无法启动黑屏丢失外设驱动',
      es: 'https://wiki.seeedstudio.com/es/Jetson_FAQ/#q8-mi-sistema-falló-no-puede-arrancar-pantalla-negra-perdió-los-controladores-de-los-periféricos-después-de-ejecutar-los-comandos-sudo-apt-get-update--sudo-apt-get-upgrade'
    }
  },
  {
    Icon: StorageIcon,
    title: {
      en: 'Insufficient eMMC Space',
      ja: 'eMMC 容量不足',
      zh: 'eMMC 空间不足',
      es: 'Espacio insuficiente en eMMC'
    },
    desc: {
      en: 'Only 2GB left on eMMC? Solutions for expanding storage on reComputer devices',
      ja: 'eMMC の空き容量が 2GB しかない？reComputer デバイスのストレージ拡張方法',
      zh: 'eMMC 只剩 2GB？reComputer 设备的存储扩展方案',
      es: '¿Solo quedan 2 GB en eMMC? Soluciones para ampliar el almacenamiento en dispositivos reComputer'
    },
    url: {
      en: 'https://wiki.seeedstudio.com/Jetson_FAQ/#q2-the-remaining-space-in-the-emmc-in-the-received-recomputer-is-only-about-2gb-how-to-solve-the-problem-of-insufficient-space',
      ja: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q2-受け取った-recomputer-の-emmc-の残り容量が約-2gb-しかありませんストレージ不足の問題をどう解決すればよいですか',
      zh: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q2-收到的-recomputer-中-emmc-剩余空间只有约-2gb如何解决空间不足问题',
      es: 'https://wiki.seeedstudio.com/es/Jetson_FAQ/#q2-el-espacio-restante-en-la-emmc-del-recomputer-recibido-es-de-solo-unos-2-gb-cómo-resolver-el-problema-de-espacio-insuficiente'
    }
  },
  {
    Icon: ClockIcon,
    title: {
      en: 'Flash Timeout Issues',
      ja: 'フラッシュ時のタイムアウト問題',
      zh: '刷机超时问题',
      es: 'Problemas de tiempo de espera al flashear'
    },
    desc: {
      en: 'Troubleshooting timeout problems during JetPack flashing process',
      ja: 'JetPack 書き込み中のタイムアウト問題のトラブルシューティング',
      zh: '排查 JetPack 刷机过程中的超时问题',
      es: 'Solución de problemas de tiempo de espera durante el proceso de flasheo de JetPack'
    },
    url: {
      en: 'https://wiki.seeedstudio.com/Jetson_FAQ/#q6-timeout-issue-during-flash-jetpack',
      ja: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q6-jetpack-フラッシュ中のタイムアウト問題',
      zh: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q6-刷写-jetpack-时出现超时问题',
      es: 'https://wiki.seeedstudio.com/es/Jetson_FAQ/#q6-problema-de-tiempo-de-espera-durante-el-flasheo-de-jetpack'
    }
  },
  {
    Icon: RefreshIcon,
    title: {
      en: 'SSD Boot Issues',
      ja: 'SSD 起動の問題',
      zh: 'SSD 启动问题',
      es: 'Problemas de arranque desde SSD'
    },
    desc: {
      en: 'System fails to boot from SSD after flashing? Solutions for JetPack 5',
      ja: '書き込み後に SSD から起動できない？JetPack 5 向けの解決策',
      zh: '刷机后系统无法从 SSD 启动？JetPack 5 的解决方案',
      es: '¿El sistema no arranca desde SSD después del flasheo? Soluciones para JetPack 5'
    },
    url: {
      en: 'https://wiki.seeedstudio.com/Jetson_FAQ/#q13-why-is-it-that-sometimes-after-completing-the-flashing-process-on-jetson-the-system-fails-to-boot-from-the-ssd',
      ja: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q13-jetson-でフラッシュ処理を完了した後にssdから起動できないことがあるのはなぜですか',
      zh: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q13-为什么有时在-jetson-上完成刷机后系统无法从-ssd-启动',
      es: 'https://wiki.seeedstudio.com/es/Jetson_FAQ/#q13-por-qué-a-veces-después-de-completar-el-proceso-de-flasheo-en-jetson-el-sistema-no-arranca-desde-el-ssd'
    }
  },
  {
    Icon: PlugIcon,
    title: {
      en: 'Missing Driver Module',
      ja: '不足しているドライバーモジュール',
      zh: '缺失驱动模块',
      es: 'Módulo de controlador faltante'
    },
    desc: {
      en: 'How to compile custom .ko driver modules for reComputer/reServer',
      ja: 'reComputer/reServer 向けにカスタム .ko ドライバーモジュールをコンパイルする方法',
      zh: '如何为 reComputer/reServer 编译自定义 .ko 驱动模块',
      es: 'Cómo compilar módulos de controlador .ko personalizados para reComputer/reServer'
    },
    url: {
      en: 'https://wiki.seeedstudio.com/Jetson_FAQ/#q16-if-the-recomputerreserver-does-not-have-the-required-ko-driver-module-how-can-i-compile-a-usable-driver',
      ja: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q16-recomputer-reserver-に必要な-ko-ドライバーモジュールがない場合使用可能なドライバーをどのようにコンパイルできますか',
      zh: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q16-如果-recomputerreserver-没有所需的-ko-驱动模块如何编译可用驱动',
      es: 'https://wiki.seeedstudio.com/es/Jetson_FAQ/#q16-si-recomputerreserver-no-tiene-el-módulo-de-controlador-ko-requerido-cómo-puedo-compilar-un-controlador-utilizable'
    }
  },
  {
    Icon: HardDriveIcon,
    title: {
      en: 'exFAT External Drive',
      ja: 'exFAT 外付けドライブ',
      zh: 'exFAT 外接硬盘',
      es: 'Unidad externa exFAT'
    },
    desc: {
      en: 'Mount exFAT formatted external drives on Jetson with JetPack 6',
      ja: 'JetPack 6 の Jetson で exFAT フォーマットの外付けドライブをマウントする方法',
      zh: '在 JetPack 6 的 Jetson 上挂载 exFAT 格式的外接硬盘',
      es: 'Montar unidades externas formateadas en exFAT en Jetson con JetPack 6'
    },
    url: {
      en: 'https://wiki.seeedstudio.com/Jetson_FAQ/#q17-how-can-i-mount-an-external-hard-drive-formatted-with-exfat-on-jetson-jetpack-6',
      ja: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q17-jetson-jetpack-6-で-exfat-形式の外付けハードドライブをマウントするにはどうすればよいですか',
      zh: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q17-如何在-jetson-jetpack-6-上挂载-exfat-格式的外部硬盘',
      es: 'https://wiki.seeedstudio.com/es/Jetson_FAQ/#q17-cómo-puedo-montar-un-disco-duro-externo-formateado-con-exfat-en-jetson-jetpack-6'
    }
  }
];

export const translations = {
  en: {
    tabs: {
      products: 'Products',
      demo: 'Demo',
      faq: 'FAQ',
      new: 'New'
    },
    banner: {
      title: 'NVIDIA® Jetson™ Powered Edge AI Devices Guide',
      subtitle: 'NVIDIA Jetson Series',
      desc: 'NVIDIA® Jetson™ delivers high-performance AI at the edge with energy-efficient modules using NVIDIA CUDA-X™ software. As an authorized reseller and Elite Partner, Seeed provides a comprehensive edge AI development solution, leveraging 15+ years of hardware expertise.',
      cta: 'Explore Devices'
    },
    usage1: {
      title: 'Jetpack Flash and Hardware Usage',
      desc: 'Start with our flashing guide, then explore hardware documentation for your specific device.',
      tabs: ['Carrier Board', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Others']
    },
    flashGuide: {
      title: 'JetPack Flashing Guide',
      desc: 'Complete step-by-step guide for flashing JetPack to your Jetson device',
      ctaTitle: 'Complete Flashing Guide',
      ctaDesc: 'Select your device and follow our comprehensive flashing instructions. Includes device preparation, recovery mode, dependency installation, and flashing commands.',
      features: ['All Device Series', 'Step-by-Step Instructions', 'Troubleshooting']
    },
    bsp: {
      title: 'BSP Customization',
      desc: 'Production-ready BSP for Seeed Jetson carrier boards',
      mainTitle: 'Linux_for_Tegra',
      mainDesc: 'A comprehensive BSP repository for customizing and deploying Jetson systems at scale. Includes kernel customization, device tree configuration, Yocto/Buildroot integration, and optimized tools for production environments.',
      supportedHardware: 'Supported Hardware',
      hardwareList: [
        'reComputer J4011/J4012 (Orin NX)',
        'reComputer Industrial J4011/J4012',
        'reComputer J3011/J3010 (Orin Nano)',
        'reComputer Industrial J3011/J3010',
        'reServer Industrial J4011/J4012',
        'reServer Industrial J3011/J3010'
      ],
      features: [
        { icon: '🐧', text: 'Kernel customization with cross-compilation support' },
        { icon: '🌳', text: 'Device tree overlays for carrier board hardware' },
        { icon: '📦', text: 'Yocto & Buildroot integration for production images' },
        { icon: '', text: 'Hardware drivers for all Seeed carrier boards' },
        { icon: '⚡', text: 'Optimized SSD flashing tools for mass production' }
      ],
      tags: ['Open Source', 'JetPack 6.2', 'Production Ready']
    },
    examples: {
      title: 'One-Command Deployment',
      desc: 'Deploy AI models instantly with jetson-examples',
      installTitle: 'Install jetson-examples',
      deployTitle: 'Deploy LLaVA',
      modelsTitle: 'Supported Models',
      features: ['20+ Examples', 'One Command', 'Open Source'],
      quickLinks: {
        github: 'GitHub Repo',
        docs: 'Full Docs',
        models: 'Model List'
      }
    },
    demoHero: {
      title: 'One-Command AI Deployment',
      desc: 'Deploy 20+ AI models with a single command. From LLMs to computer vision, run cutting-edge AI on your Jetson device instantly. No complex setup required.',
      cta: 'Get Started'
    },
    beginnerGuide: {
      title: 'Beginner\'s Guide',
      desc: 'Comprehensive learning resources from Jetson basics to advanced AI applications',
      mainTitle: 'reComputer Jetson for Beginners',
      mainDesc: 'A complete learning journey covering Jetson fundamentals, computer vision, generative AI, robotics, and edge deployment. Perfect for developers new to edge AI.',
      stats: [
        { value: '9+', label: 'Learning Modules' },
        { value: '20+', label: 'Code Examples' },
        { value: '5+', label: 'Real Projects' }
      ],
      modules: [
        { icon: '🔧', title: 'Environment Setup', desc: 'Development environment configuration, Docker setup, and basic tools introduction', topics: ['Docker', 'System Config', 'Tools'] },
        { icon: '📖', title: 'Basic Tutorials', desc: 'Learn Jetson platform fundamentals, GPIO control, and basic AI concepts', topics: ['GPIO', 'Camera', 'Basics'] },
        { icon: '👁️', title: 'Computer Vision', desc: 'Object detection, image classification, and video analytics applications', topics: ['YOLO', 'OpenCV', 'Detection'] },
        { icon: '🤖', title: 'Generative AI', desc: 'Deploy LLMs, multimodal models, and AI chatbots on Jetson', topics: ['LLM', 'VLM', 'Chatbot'] },
        { icon: '🏭', title: 'Robotics', desc: 'Build autonomous robots, AMR systems, and robotic arm applications', topics: ['ROS2', 'Navigation', 'Control'] },
        { icon: '⚡', title: 'Optimization', desc: 'TensorRT acceleration, quantization, and production deployment', topics: ['TensorRT', 'Optimize', 'Deploy'] }
      ],
      cta: 'Start Learning on GitHub'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Support Center',
      desc: 'Find answers to common questions about Jetson products, troubleshooting, system upgrades, and more. Get help with installation, flashing, and hardware compatibility issues.',
      cta: 'View Full FAQ',
      commonIssues: 'Common Issues',
      commonIssuesDesc: 'Quick answers to frequently encountered problems',
      installation: 'Installation & Setup',
      installationDesc: 'Guides for getting started with your Jetson device'
    },
    community: {
      title: 'Community Projects',
      desc: 'Explore real-world projects and tutorials built by our community using Jetson devices. From computer vision to generative AI, find inspiration for your next edge AI application.',
      all: 'All',
      cv: 'Computer Vision',
      gen: 'Generative AI',
      devtools: 'Developer Tools',
      multimodal: 'Multimodal AI',
      physical: 'Physical AI',
      managed: 'Managed Services',
      searchPlaceholder: 'Search projects...',
      searchResults: '{count} projects found',
      prev: '← Prev',
      next: 'Next →'
    },
    common: {
      clickMe: 'Click me',
      moreDetail: 'More detail',
      viewOnGithub: 'View on GitHub',
      tutorialsAndGuides: 'Tutorials & Guides',
      aiModels: '20+ AI Models',
      learnMore: 'Learn more →'
    }
  },
  ja: {
    tabs: {
      products: '製品',
      demo: 'デモ',
      faq: 'FAQ',
      new: 'New'
    },
    banner: {
      title: 'NVIDIA® Jetson™ エッジAIデバイスガイド',
      subtitle: 'NVIDIA Jetson シリーズ',
      desc: 'NVIDIA® Jetson™ は、エネルギー効率に優れたモジュールを使用し、エッジで高性能な AI を実現します。Seeed は正規代理店およびエリートパートナーとして、15 年以上のハードウェア経験を活かし、エッジ AI ソリューションを提供します。',
      cta: 'デバイスを探索'
    },
    usage1: {
      title: 'JetPack フラッシュとハードウェア使用法',
      desc: 'ほとんどの reComputer Jetson 製品には JetPack がプリインストールされています。すべてのデバイスでフラッシュガイドを利用可能です。',
      tabs: ['キャリアボード', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Others']
    },
    flashGuide: {
      title: 'JetPack フラッシュガイド',
      desc: 'JetsonデバイスへのJetPack書き込みの完全ステップバイステップガイド',
      ctaTitle: '完全なフラッシュガイド',
      ctaDesc: 'デバイスを選択して、包括的な書き込み手順に従ってください。デバイスの準備、リカバリーモード、依存関係のインストール、書き込みコマンドが含まれます。',
      features: ['すべてのデバイスシリーズ', 'ステップバイステップ手順', 'トラブルシューティング']
    },
    bsp: {
      title: 'BSP カスタマイズ',
      desc: 'Seeed Jetsonキャリアボード用本番環境BSP',
      mainTitle: 'Linux_for_Tegra',
      mainDesc: 'Jetsonシステムを大規模にカスタマイズ・デプロイするための包括的なBSPリポジトリ。カーネルカスタマイズ、デバイスツリー設定、Yocto/Buildroot統合、本番環境向け最適化ツールを含みます。',
      supportedHardware: '対応ハードウェア',
      hardwareList: [
        'reComputer J4011/J4012 (Orin NX)',
        'reComputer Industrial J4011/J4012',
        'reComputer J3011/J3010 (Orin Nano)',
        'reComputer Industrial J3011/J3010',
        'reServer Industrial J4011/J4012',
        'reServer Industrial J3011/J3010'
      ],
      features: [
        { icon: '🐧', text: 'クロスコンパイル対応のカーネルカスタマイズ' },
        { icon: '🌳', text: 'キャリアボードハードウェア用デバイスツリーオーバーレイ' },
        { icon: '📦', text: '本番環境イメージ用Yocto & Buildroot統合' },
        { icon: '💻', text: 'すべてのSeeedキャリアボード用ハードウェアドライバー' },
        { icon: '⚡', text: '量産向け最適化SSD書き込みツール' }
      ],
      tags: ['オープンソース', 'JetPack 6.2', '本番環境対応']
    },
    examples: {
      title: 'ワンコマンドデプロイメント',
      desc: 'jetson-examplesでAIモデルを即座にデプロイ',
      installTitle: 'jetson-examplesをインストール',
      deployTitle: 'LLaVAをデプロイ',
      modelsTitle: 'サポートされているモデル',
      features: ['20+ サンプル', 'ワンコマンド', 'オープンソース'],
      quickLinks: {
        github: 'GitHubリポジトリ',
        docs: '完全なドキュメント',
        models: 'モデルリスト'
      }
    },
    demoHero: {
      title: 'ワンコマンドAIデプロイ',
      desc: '単一コマンドで 20 以上の AI モデルをデプロイ。LLM からコンピュータビジョンまで、最先端の AI を Jetson デバイス上で即座に実行できます。複雑なセットアップは不要です。',
      cta: 'はじめる'
    },
    beginnerGuide: {
      title: 'ビギナーズガイド',
      desc: 'Jetsonの基礎から高度なAIアプリケーションまで包括的な学習リソース',
      mainTitle: 'reComputer Jetson for Beginners',
      mainDesc: 'Jetsonの基礎、コンピュータビジョン、生成AI、ロボティクス、エッジデプロイメントをカバーする完全な学習ジャーニー。エッジAI初心者の開発者に最適です。',
      stats: [
        { value: '9+', label: '学習モジュール' },
        { value: '20+', label: 'コード例' },
        { value: '5+', label: '実践プロジェクト' }
      ],
      modules: [
        { icon: '🔧', title: '環境セットアップ', desc: 'JetPackのインストール、システム設定、開発環境の準備', topics: ['JetPack', 'System Config', 'Docker'] },
        { icon: '📖', title: '基本チュートリアル', desc: 'Jetsonプラットフォームの基礎、GPIO制御、基本的なAI概念を学ぶ', topics: ['GPIO', 'Camera', 'Basics'] },
        { icon: '�️', title: 'コンピュータビジョン', desc: '物体検出、画像分類、ビデオ分析アプリケーション', topics: ['YOLO', 'OpenCV', 'Detection'] },
        { icon: '🤖', title: '生成AI', desc: 'JetsonでLLM、マルチモーダルモデル、AIチャットボットをデプロイ', topics: ['LLM', 'VLM', 'Chatbot'] },
        { icon: '🏭', title: 'ロボティクス', desc: '自律型ロボット、AMRシステム、ロボットアームアプリケーションを構築', topics: ['ROS2', 'Navigation', 'Control'] },
        { icon: '⚡', title: '最適化', desc: 'TensorRTアクセラレーション、量子化、本番デプロイメント', topics: ['TensorRT', 'Optimize', 'Deploy'] }
      ],
      cta: 'GitHubで学習を開始'
    },
    faq: {
      title: 'よくある質問',
      subtitle: 'サポートセンター',
      desc: 'Jetson製品、トラブルシューティング、システムアップグレードなどに関する一般的な質問の回答を見つけます。インストール、フラッシュ、ハードウェア互換性の問題に関するヘルプを取得します。',
      cta: 'FAQを見る',
      commonIssues: '一般的な問題',
      commonIssuesDesc: 'よく発生する問題への迅速な回答',
      installation: 'インストールと設定',
      installationDesc: 'Jetsonデバイスの開始に関するガイド'
    },
    community: {
      title: 'コミュニティプロジェクト',
      desc: 'Jetson デバイスを使用したコミュニティのプロジェクトやチュートリアルを探索します。コンピュータビジョンから生成 AI まで、次のエッジ AI アプリケーションのインスピレーションを見つけましょう。',
      all: 'すべて',
      cv: 'コンピュータビジョン',
      gen: '生成 AI',
      devtools: '開発ツール',
      multimodal: 'マルチモーダル AI',
      physical: '物理 AI',
      managed: '管理サービス',
      searchPlaceholder: 'プロジェクトを検索...',
      searchResults: '{count} 件のプロジェクト',
      prev: '← 前へ',
      next: '次へ →'
    },
    common: {
      clickMe: 'クリック',
      moreDetail: '詳細を見る',
      viewOnGithub: 'GitHubで見る',
      tutorialsAndGuides: 'チュートリアルとガイド',
      aiModels: '20+ AI モデル',
      learnMore: '詳細はこちら →'
    }
  },
  zh: {
    tabs: {
      products: '产品页',
      demo: 'Demo页',
      faq: 'FAQ',
      new: 'New'
    },
    banner: {
      title: 'NVIDIA® Jetson™ 边缘AI设备指南',
      subtitle: 'NVIDIA Jetson 系列',
      desc: 'NVIDIA® Jetson™ 通过搭载 NVIDIA CUDA-X™ 软件的高能效模块，在边缘提供高性能 AI。作为授权经销商和精英合作伙伴，Seeed 凭借 15 年以上的硬件经验，提供全面的边缘 AI 开发解决方案。',
      cta: '探索设备'
    },
    usage1: {
      title: 'JetPack 刷机和硬件使用',
      desc: '大多数 reComputer Jetson 产品预装了 JetPack。所有设备均可使用刷机指南。',
      tabs: ['载板', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Others']
    },
    flashGuide: {
      title: 'JetPack 刷机指南',
      desc: '为您的 Jetson 设备刷入 JetPack 的完整分步指南',
      ctaTitle: '完整刷机指南',
      ctaDesc: '选择您的设备并按照我们全面的刷机说明操作。包括设备准备、恢复模式、依赖安装和刷机命令。',
      features: ['所有设备系列', '分步说明', '故障排除']
    },
    bsp: {
      title: 'BSP 定制',
      desc: 'Seeed Jetson 载板生产级 BSP',
      mainTitle: 'Linux_for_Tegra',
      mainDesc: '用于大规模定制和部署 Jetson 系统的综合 BSP 仓库。包含内核定制、设备树配置、Yocto/Buildroot 集成以及生产环境的优化工具。',
      supportedHardware: '支持的硬件',
      hardwareList: [
        'reComputer J4011/J4012 (Orin NX)',
        'reComputer Industrial J4011/J4012',
        'reComputer J3011/J3010 (Orin Nano)',
        'reComputer Industrial J3011/J3010',
        'reServer Industrial J4011/J4012',
        'reServer Industrial J3011/J3010'
      ],
      features: [
        { icon: '🐧', text: '支持交叉编译的内核定制' },
        { icon: '🌳', text: '载板硬件设备树叠加层' },
        { icon: '📦', text: '生产镜像 Yocto & Buildroot 集成' },
        { icon: '', text: '所有 Seeed 载板的硬件驱动' },
        { icon: '⚡', text: '量产优化 SSD 刷机工具' }
      ],
      tags: ['开源', 'JetPack 6.2', '生产就绪']
    },
    examples: {
      title: '一键部署',
      desc: '使用 jetson-examples 即时部署 AI 模型',
      installTitle: '安装 jetson-examples',
      deployTitle: '部署 LLaVA',
      modelsTitle: '支持的模型',
      features: ['20+ 示例', '一键命令', '开源'],
      quickLinks: {
        github: 'GitHub 仓库',
        docs: '完整文档',
        models: '模型列表'
      }
    },
    demoHero: {
      title: '一键 AI 部署',
      desc: '只需一条命令即可部署 20+ AI 模型。从大语言模型到计算机视觉，让前沿 AI 在你的 Jetson 设备上即刻运行，无需复杂配置。',
      cta: '立即开始'
    },
    beginnerGuide: {
      title: '新手指南',
      desc: '从 Jetson 基础到高级 AI 应用的全面学习资源',
      mainTitle: 'reComputer Jetson for Beginners',
      mainDesc: '涵盖 Jetson 基础、计算机视觉、生成式 AI、机器人和边缘部署的完整学习之旅。非常适合边缘 AI 新手开发者。',
      stats: [
        { value: '9+', label: '学习模块' },
        { value: '20+', label: '代码示例' },
        { value: '5+', label: '实战项目' }
      ],
      modules: [
        { icon: '🔧', title: '环境搭建', desc: '开发环境配置、Docker 设置和基础工具介绍', topics: ['Docker', '系统配置', 'Tools'] },
        { icon: '📖', title: '基础教程', desc: '学习 Jetson 平台基础、GPIO 控制和基本 AI 概念', topics: ['GPIO', '摄像头', '基础'] },
        { icon: '�️', title: '计算机视觉', desc: '目标检测、图像分类和视频分析应用', topics: ['YOLO', 'OpenCV', '检测'] },
        { icon: '🤖', title: '生成式 AI', desc: '在 Jetson 上部署大语言模型、多模态模型和 AI 聊天机器人', topics: ['LLM', 'VLM', '聊天机器人'] },
        { icon: '🏭', title: '机器人', desc: '构建自主机器人、AMR 系统和机械臂应用', topics: ['ROS2', '导航', '控制'] },
        { icon: '⚡', title: '优化', desc: 'TensorRT 加速、量化和生产部署', topics: ['TensorRT', '优化', '部署'] }
      ],
      cta: '在 GitHub 上开始学习'
    },
    faq: {
      title: '常见问题',
      subtitle: '支持中心',
      desc: '查找有关 Jetson 产品、故障排除、系统升级等常见问题的答案。获取有关安装、刷机和硬件兼容性问题的帮助。',
      cta: '查看完整 FAQ',
      commonIssues: '常见问题',
      commonIssuesDesc: '快速解答经常遇到的问题',
      installation: '安装与设置',
      installationDesc: 'Jetson 设备入门指南'
    },
    community: {
      title: '社区项目',
      desc: '探索使用 Jetson 设备构建的社区项目和教程。从计算机视觉到生成式 AI，为您的下一个边缘 AI 应用寻找灵感。',
      all: '全部',
      cv: '计算机视觉',
      gen: '生成式 AI',
      devtools: '开发工具',
      multimodal: '多模态 AI',
      physical: '物理 AI',
      managed: '托管服务',
      searchPlaceholder: '搜索项目...',
      searchResults: '找到 {count} 个项目',
      prev: '← 上一页',
      next: '下一页 →'
    },
    common: {
      clickMe: '点击查看',
      moreDetail: '更多详情',
      viewOnGithub: '在 GitHub 查看',
      tutorialsAndGuides: '教程与指南',
      aiModels: '20+ AI 模型',
      learnMore: '了解更多 →'
    }
  },
  es: {
    tabs: {
      products: 'Productos',
      demo: 'Demo',
      faq: 'FAQ',
      new: 'New'
    },
    banner: {
      title: 'Guía de Dispositivos Edge AI con NVIDIA® Jetson™',
      subtitle: 'Serie NVIDIA Jetson',
      desc: 'NVIDIA® Jetson™ ofrece inteligencia artificial de alto rendimiento en el borde mediante módulos energéticamente eficientes y el software NVIDIA CUDA-X™. Como distribuidor autorizado y socio Elite, Seeed proporciona una solución integral de desarrollo de IA en el borde con más de 15 años de experiencia en hardware.',
      cta: 'Explorar Dispositivos'
    },
    usage1: {
      title: 'Flasheo JetPack y Uso de Hardware',
      desc: 'La mayoría de los productos reComputer Jetson vienen con JetPack preinstalado. Guías de flasheo disponibles para todos los dispositivos.',
      tabs: ['Carrier Board', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Others']
    },
    flashGuide: {
      title: 'Guía de Flasheo JetPack',
      desc: 'Guía completa paso a paso para flashear JetPack en su dispositivo Jetson',
      ctaTitle: 'Guía de Flasheo Completa',
      ctaDesc: 'Seleccione su dispositivo y siga nuestras instrucciones de flasheo completas. Incluye preparación del dispositivo, modo de recuperación, instalación de dependencias y comandos de flasheo.',
      features: ['Todas las Series', 'Instrucciones Paso a Paso', 'Solución de Problemas']
    },
    bsp: {
      title: 'Personalización BSP',
      desc: 'BSP listo para producción para carrier boards Seeed Jetson',
      mainTitle: 'Linux_for_Tegra',
      mainDesc: 'Un repositorio BSP integral para personalizar y desplegar sistemas Jetson a escala. Incluye personalización de kernel, configuración de árbol de dispositivos, integración Yocto/Buildroot y herramientas optimizadas para entornos de producción.',
      supportedHardware: 'Hardware Compatible',
      hardwareList: [
        'reComputer J4011/J4012 (Orin NX)',
        'reComputer Industrial J4011/J4012',
        'reComputer J3011/J3010 (Orin Nano)',
        'reComputer Industrial J3011/J3010',
        'reServer Industrial J4011/J4012',
        'reServer Industrial J3011/J3010'
      ],
      features: [
        { icon: '🐧', text: 'Personalización de kernel con soporte de compilación cruzada' },
        { icon: '🌳', text: 'Overlays de árbol de dispositivos para hardware de carrier boards' },
        { icon: '📦', text: 'Integración Yocto & Buildroot para imágenes de producción' },
        { icon: '💻', text: 'Controladores de hardware para todos los carrier boards Seeed' },
        { icon: '⚡', text: 'Herramientas de flasheo SSD optimizadas para producción masiva' }
      ],
      tags: ['Código Abierto', 'JetPack 6.2', 'Listo para Producción']
    },
    examples: {
      title: 'Despliegue con Un Comando',
      desc: 'Despliegue modelos de IA al instante con jetson-examples',
      installTitle: 'Instalar jetson-examples',
      deployTitle: 'Desplegar LLaVA',
      modelsTitle: 'Modelos Soportados',
      features: ['20+ Ejemplos', 'Un Comando', 'Código Abierto'],
      quickLinks: {
        github: 'Repositorio GitHub',
        docs: 'Documentación',
        models: 'Lista de Modelos'
      }
    },
    demoHero: {
      title: 'Despliegue de IA con un Comando',
      desc: 'Despliegue más de 20 modelos de IA con un solo comando. Desde LLM hasta visión por computadora, ejecute IA de vanguardia en su dispositivo Jetson al instante. No se requiere una configuración compleja.',
      cta: 'Comenzar'
    },
    beginnerGuide: {
      title: 'Guía para Principiantes',
      desc: 'Recursos de aprendizaje completos desde fundamentos de Jetson hasta aplicaciones avanzadas de IA',
      mainTitle: 'reComputer Jetson for Beginners',
      mainDesc: 'Un viaje de aprendizaje completo que cubre fundamentos de Jetson, visión por computadora, IA generativa, robótica y despliegue en el borde. Perfecto para desarrolladores nuevos en IA de borde.',
      stats: [
        { value: '9+', label: 'Módulos' },
        { value: '20+', label: 'Ejemplos' },
        { value: '5+', label: 'Proyectos' }
      ],
      modules: [
        { icon: '🔧', title: 'Configuración', desc: 'Configuración del entorno de desarrollo, instalación de Docker e introducción a herramientas básicas', topics: ['Docker', 'Config', 'Tools'] },
        { icon: '📖', title: 'Tutoriales Básicos', desc: 'Aprenda fundamentos de la plataforma Jetson, control GPIO y conceptos básicos de IA', topics: ['GPIO', 'Cámara', 'Básico'] },
        { icon: '👁️', title: 'Visión Computacional', desc: 'Detección de objetos, clasificación de imágenes y análisis de video', topics: ['YOLO', 'OpenCV', 'Detección'] },
        { icon: '🤖', title: 'IA Generativa', desc: 'Despliegue LLMs, modelos multimodales y chatbots de IA en Jetson', topics: ['LLM', 'VLM', 'Chatbot'] },
        { icon: '🏭', title: 'Robótica', desc: 'Construya robots autónomos, sistemas AMR y aplicaciones de brazos robóticos', topics: ['ROS2', 'Navegación', 'Control'] },
        { icon: '⚡', title: 'Optimización', desc: 'Aceleración TensorRT, cuantización y despliegue en producción', topics: ['TensorRT', 'Optimizar', 'Desplegar'] }
      ],
      cta: 'Comenzar en GitHub'
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Centro de Soporte',
      desc: 'Encuentre respuestas a preguntas comunes sobre productos Jetson, solución de problemas, actualizaciones del sistema y más. Obtenga ayuda con la instalación, el flasheo y los problemas de compatibilidad de hardware.',
      cta: 'Ver FAQ Completo',
      commonIssues: 'Problemas Comunes',
      commonIssuesDesc: 'Respuestas rápidas a problemas frecuentes',
      installation: 'Instalación y Configuración',
      installationDesc: 'Guías para comenzar con su dispositivo Jetson'
    },
    community: {
      title: 'Proyectos Comunitarios',
      desc: 'Explora proyectos y tutoriales de la comunidad construidos con dispositivos Jetson. Desde visión por computadora hasta IA generativa, encuentra inspiración para tu próxima aplicación de IA en el borde.',
      all: 'Todos',
      cv: 'Visión por Computadora',
      gen: 'IA Generativa',
      devtools: 'Herramientas de Desarrollo',
      multimodal: 'IA Multimodal',
      physical: 'IA Física',
      managed: 'Servicios Gestionados',
      searchPlaceholder: 'Buscar proyectos...',
      searchResults: '{count} proyectos encontrados',
      prev: '← Anterior',
      next: 'Siguiente →'
    },
    common: {
      clickMe: 'Haz clic',
      moreDetail: 'Más detalles',
      viewOnGithub: 'Ver en GitHub',
      tutorialsAndGuides: 'Tutoriales y guías',
      aiModels: '20+ modelos de IA',
      learnMore: 'Más información →'
    }
  },
};

const configMap = {
  en: config_en,
  ja: config_ja,
  zh: config_zh,
  es: config_es,
};

type Props = {
  lang?: 'en' | 'ja' | 'zh' | 'es';
};

const RecomputerPage = ({ lang = 'en' }: Props) => {
  const { colorMode } = useColorMode();
  const t = translations[lang];
  const config = configMap[lang];
  const [activePage, setActivePage] = useState<'products' | 'demo' | 'faq'>('products');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [activeDeviceTab, setActiveDeviceTab] = useState(0);
  
  // Community Projects search and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;
  
  // Section collapse states
  const [expandedSections, setExpandedSections] = useState({
    examples: true,
    devices: true,
    flashGuide: true,
    bsp: true,
    beginnerGuide: true,
    community: true,
    faq: true
  });
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };
  
  // Collapse button component
  const CollapseButton = ({ section, isExpanded }: { section: string; isExpanded: boolean }) => (
    <button 
      className={styles.collapse_btn}
      onClick={() => toggleSection(section)}
      title={isExpanded ? 'Collapse' : 'Expand'}
    >
      <svg 
        className={clsx(styles.collapse_icon, isExpanded && styles.expanded)}
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );

  const getAllProjects = () => {
    switch (activeCategory) {
      case 'cv': return config_auto.communityList_cv;
      case 'gen': return config_auto.communityList_gen;
      case 'devtools': return config_auto.developerToolsList;
      case 'multimodal': return config_auto.multimodalList;
      case 'physical': return config_auto.physicalAIList;
      case 'managed': return config_auto.managedServicesList;
      default: return [
        ...config_auto.communityList_cv,
        ...config_auto.communityList_gen,
        ...config_auto.developerToolsList,
        ...config_auto.multimodalList,
        ...config_auto.physicalAIList,
        ...config_auto.managedServicesList
      ];
    }
  };
  
  const getFilteredProjects = () => {
    const allProjects = getAllProjects();
    if (!searchQuery.trim()) return allProjects;
    
    const query = searchQuery.toLowerCase();
    return allProjects.filter(project => 
      (project.name?.[lang] || project.name?.en || '').toLowerCase().includes(query) ||
      (project.category?.[lang] || []).some((cat: string) => cat.toLowerCase().includes(query)) ||
      (project.category?.en || []).some((cat: string) => cat.toLowerCase().includes(query))
    );
  };
  
  const getPaginatedProjects = () => {
    const filtered = getFilteredProjects();
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };
  
  const totalPages = Math.ceil(getFilteredProjects().length / ITEMS_PER_PAGE);
  
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const selectedProductData = selectedProduct ? PRODUCT_DATA[selectedProduct] : null;

  return (
    <div className={clsx(styles.jetson_page, styles[colorMode])}>
      {/* Page Tabs */}
      <div className={styles.page_tabs_container}>
        <div className={styles.page_tabs}>
          <button 
            className={clsx(styles.page_tab, activePage === 'products' && styles.active)}
            onClick={() => setActivePage('products')}
          >
            <ProductsIcon className={styles.page_tab_icon} size={18} />
            <span className={styles.page_tab_text}>{t.tabs.products}</span>
          </button>
          <button 
            className={clsx(styles.page_tab, activePage === 'demo' && styles.active)}
            onClick={() => setActivePage('demo')}
          >
            <DemoIcon className={styles.page_tab_icon} size={18} />
            <span className={styles.page_tab_text}>{t.tabs.demo}</span>
            <span className={styles.page_tab_badge}>{t.tabs.new}</span>
          </button>
          <button 
            className={clsx(styles.page_tab, activePage === 'faq' && styles.active)}
            onClick={() => setActivePage('faq')}
          >
            <FaqIcon className={styles.page_tab_icon} size={18} />
            <span className={styles.page_tab_text}>{t.tabs.faq}</span>
          </button>
        </div>
      </div>

      {/* Products Page */}
      {activePage === 'products' && (
        <div className={styles.page_content}>
          {/* Hero Section */}
          <div className={styles.hero_section}>
            <div className={styles.hero_content}>
              <div className={styles.hero_subtitle}>{t.banner.subtitle}</div>
              <h1>{t.banner.title}</h1>
              <p className={styles.hero_description}>{t.banner.desc}</p>
              <a href="#devices" className={styles.hero_cta}>
                <span>{t.banner.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className={styles.hero_image}>
              <img src="https://files.seeedstudio.com/wiki/other/2026-2-Product-1.png" alt="NVIDIA Jetson Devices" />
            </div>
          </div>

          {/* Devices Section - Flash Guide & Products */}
          <div className={styles.section} id="devices">
            <div className={styles.section_header}>
              <div style={{ flex: 1 }}>
                <h2 className={styles.section_title}>{t.usage1.title}</h2>
                <p className={styles.section_description}>{t.usage1.desc}</p>
              </div>
              <CollapseButton section="devices" isExpanded={expandedSections.devices} />
            </div>
            
            {expandedSections.devices && (
            <>
            {/* Flash Guide CTA - Prominent placement at top */}
            <a href={`${LANG_PATH_PREFIX[lang]}/flash/jetpack_to_selected_product`} className={styles.flash_guide_promo}>
              <div className={styles.flash_guide_promo_icon}><ZapIcon size={40} /></div>
              <div className={styles.flash_guide_promo_content}>
                <h3 className={styles.flash_guide_promo_title}>{t.flashGuide.ctaTitle}</h3>
                <p className={styles.flash_guide_promo_desc}>{t.flashGuide.ctaDesc}</p>
                <div className={styles.flash_guide_promo_features}>
                  {t.flashGuide.features.map((feature, idx) => (
                    <span key={idx} className={styles.flash_guide_promo_feature}>✓ {feature}</span>
                  ))}
                </div>
              </div>
              <div className={styles.flash_guide_promo_arrow}>{t.common.clickMe}</div>
            </a>

            {/* Product Category Tabs */}
            <div className={styles.tab_nav} style={{ margin: '32px 0 24px' }}>
              {t.usage1.tabs.map((tab, idx) => (
                <button 
                  key={idx}
                  className={clsx(styles.tab_btn, activeDeviceTab === idx && styles.active)}
                  onClick={() => setActiveDeviceTab(idx)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className={styles.device_grid}>
              {/* Tab 0: Carrier Board */}
              {activeDeviceTab === 0 && (
                <>
                  {productOptions.filter(PRODUCT_CATEGORIES.carrier.filter).map(product => (
                    <a key={product.value} href={product.interfaceUsage[lang] || product.interfaceUsage.en} target="_blank" className={styles.device_card}>
                      <div className={styles.device_image}>
                        <img src={product.img} alt={product.label} />
                      </div>
                      <div className={styles.device_content}>
                        <div className={styles.device_name}>{product.label}</div>
                        <div className={styles.device_action}>
                          <span className={styles.device_action_text}>{t.common.moreDetail}</span>
                          <span className={styles.device_action_arrow}>→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
              {/* Tab 1: Super */}
              {activeDeviceTab === 1 && (
                <>
                  {productOptions.filter(PRODUCT_CATEGORIES.super.filter).map(product => (
                    <a key={product.value} href={product.interfaceUsage[lang] || product.interfaceUsage.en} target="_blank" className={styles.device_card}>
                      <div className={styles.device_image}>
                        <img src={product.img} alt={product.label} />
                      </div>
                      <div className={styles.device_content}>
                        <div className={styles.device_name}>{product.label}</div>
                        <div className={styles.device_action}>
                          <span className={styles.device_action_text}>{t.common.moreDetail}</span>
                          <span className={styles.device_action_arrow}>→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
              {/* Tab 2: Mini */}
              {activeDeviceTab === 2 && (
                <>
                  {productOptions.filter(PRODUCT_CATEGORIES.mini.filter).map(product => (
                    <a key={product.value} href={product.interfaceUsage[lang] || product.interfaceUsage.en} target="_blank" className={styles.device_card}>
                      <div className={styles.device_image}>
                        <img src={product.img} alt={product.label} />
                      </div>
                      <div className={styles.device_content}>
                        <div className={styles.device_name}>{product.label}</div>
                        <div className={styles.device_action}>
                          <span className={styles.device_action_text}>{t.common.moreDetail}</span>
                          <span className={styles.device_action_arrow}>→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
              {/* Tab 3: Robotics */}
              {activeDeviceTab === 3 && (
                <>
                  {productOptions.filter(PRODUCT_CATEGORIES.robotics.filter).map(product => (
                    <a key={product.value} href={product.interfaceUsage[lang] || product.interfaceUsage.en} target="_blank" className={styles.device_card}>
                      <div className={styles.device_image}>
                        <img src={product.img} alt={product.label} />
                      </div>
                      <div className={styles.device_content}>
                        <div className={styles.device_name}>{product.label}</div>
                        <div className={styles.device_action}>
                          <span className={styles.device_action_text}>{t.common.moreDetail}</span>
                          <span className={styles.device_action_arrow}>→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
              {/* Tab 4: Classic */}
              {activeDeviceTab === 4 && (
                <>
                  {productOptions.filter(PRODUCT_CATEGORIES.classic.filter).map(product => (
                    <a key={product.value} href={product.interfaceUsage[lang] || product.interfaceUsage.en} target="_blank" className={styles.device_card}>
                      <div className={styles.device_image}>
                        <img src={product.img} alt={product.label} />
                      </div>
                      <div className={styles.device_content}>
                        <div className={styles.device_name}>{product.label}</div>
                        <div className={styles.device_action}>
                          <span className={styles.device_action_text}>{t.common.moreDetail}</span>
                          <span className={styles.device_action_arrow}>→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
              {/* Tab 5: Industrial & reServer */}
              {activeDeviceTab === 5 && (
                <>
                  {productOptions.filter(PRODUCT_CATEGORIES.industrial.filter).map(product => (
                    <a key={product.value} href={product.interfaceUsage[lang] || product.interfaceUsage.en} target="_blank" className={styles.device_card}>
                      <div className={styles.device_image}>
                        <img src={product.img} alt={product.label} />
                      </div>
                      <div className={styles.device_content}>
                        <div className={styles.device_name}>{product.label}</div>
                        <div className={styles.device_action}>
                          <span className={styles.device_action_text}>{t.common.moreDetail}</span>
                          <span className={styles.device_action_arrow}>→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
              {/* Tab 6: Other */}
              {activeDeviceTab === 6 && (
                <>
                  {productOptions.filter(PRODUCT_CATEGORIES.other.filter).map(product => (
                    <a key={product.value} href={product.interfaceUsage[lang] || product.interfaceUsage.en} target="_blank" className={styles.device_card}>
                      <div className={styles.device_image}>
                        <img src={product.img} alt={product.label} />
                      </div>
                      <div className={styles.device_content}>
                        <div className={styles.device_name}>{product.label}</div>
                        <div className={styles.device_action}>
                          <span className={styles.device_action_text}>{t.common.moreDetail}</span>
                          <span className={styles.device_action_arrow}>→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
            </div>
            </>
            )}
          </div>

          {/* Beginner's Guide Section - Learning Modules */}
          <div className={styles.section}>
            <div className={styles.section_header}>
              <div>
                <h2 className={styles.section_title}>{t.beginnerGuide.title}</h2>
                <p className={styles.section_description}>{t.beginnerGuide.desc}</p>
              </div>
              <CollapseButton section="beginnerGuide" isExpanded={expandedSections.beginnerGuide} />
            </div>
            
            {expandedSections.beginnerGuide && (
            <div className={styles.beginner_container}>
              {/* Main Promo Card */}
              <a href="https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners" target="_blank" className={styles.beginner_promo_card}>
                <div className={styles.beginner_promo_header}>
                  <span className={styles.beginner_promo_icon}><BookOpenIcon size={36} /></span>
                  <div>
                    <h3 className={styles.beginner_promo_title}>{t.beginnerGuide.mainTitle}</h3>
                    <span className={styles.github_badge}>GitHub</span>
                  </div>
                </div>
                <p className={styles.beginner_promo_desc}>{t.beginnerGuide.mainDesc}</p>
                <div className={styles.beginner_promo_stats}>
                  {t.beginnerGuide.stats.map((stat, idx) => (
                    <div key={idx} className={styles.beginner_stat}>
                      <span className={styles.beginner_stat_value}>{stat.value}</span>
                      <span className={styles.beginner_stat_label}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </a>
              
              {/* Learning Module Cards */}
              <div className={styles.beginner_modules_grid}>
                {t.beginnerGuide.modules.map((module, idx) => {
                  const ModuleIcons = [WrenchIcon, BookIcon, EyeIcon, BotIcon, FactoryIcon, ZapIcon];
                  const ModuleIcon = ModuleIcons[idx];
                  return (
                    <div key={idx} className={styles.beginner_module_card}>
                      <div className={styles.beginner_module_icon}><ModuleIcon size={28} /></div>
                      <div className={styles.beginner_module_content}>
                        <h4 className={styles.beginner_module_title}>{module.title}</h4>
                        <p className={styles.beginner_module_desc}>{module.desc}</p>
                        <div className={styles.beginner_module_topics}>
                          {module.topics.map((topic, tidx) => (
                            <span key={tidx} className={styles.beginner_module_topic}>{topic}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA Button */}
              <a href="https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners" target="_blank" className={styles.beginner_cta_button}>
                <span>{t.beginnerGuide.cta}</span>
                <span>→</span>
              </a>
            </div>
            )}
          </div>

          {/* BSP Customization Section - Feature Grid */}
          <div className={styles.section}>
            <div className={styles.section_header}>
              <div>
                <h2 className={styles.section_title}>{t.bsp.title}</h2>
                <p className={styles.section_description}>{t.bsp.desc}</p>
              </div>
              <CollapseButton section="bsp" isExpanded={expandedSections.bsp} />
            </div>
            
            {expandedSections.bsp && (
            <a href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" className={styles.bsp_main_card}>
              {/* Main Content */}
              <div className={styles.bsp_main_content}>
                <div className={styles.bsp_header}>
                  <span className={styles.bsp_icon}><SettingsIcon size={32} /></span>
                  <div className={styles.bsp_title_group}>
                    <span className={styles.bsp_main_title}>{t.bsp.mainTitle}</span>
                    <span className={styles.github_badge}>GitHub</span>
                  </div>
                </div>

                <p className={styles.bsp_description}>{t.bsp.mainDesc}</p>

                {/* Features List */}
                <div className={styles.bsp_features}>
                  <div className={styles.bsp_feature_item}>
                    <span className={styles.bsp_feature_icon}><LinuxIcon size={20} /></span>
                    <span className={styles.bsp_feature_text}>{t.bsp.features[0].text}</span>
                  </div>
                  <div className={styles.bsp_feature_item}>
                    <span className={styles.bsp_feature_icon}><TreeIcon size={20} /></span>
                    <span className={styles.bsp_feature_text}>{t.bsp.features[1].text}</span>
                  </div>
                  <div className={styles.bsp_feature_item}>
                    <span className={styles.bsp_feature_icon}><PackageIcon size={20} /></span>
                    <span className={styles.bsp_feature_text}>{t.bsp.features[2].text}</span>
                  </div>
                  <div className={styles.bsp_feature_item}>
                    <span className={styles.bsp_feature_icon}><MonitorIcon size={20} /></span>
                    <span className={styles.bsp_feature_text}>{t.bsp.features[3].text}</span>
                  </div>
                  <div className={styles.bsp_feature_item}>
                    <span className={styles.bsp_feature_icon}><ZapIcon size={20} /></span>
                    <span className={styles.bsp_feature_text}>{t.bsp.features[4].text}</span>
                  </div>
                </div>
                
                {/* Hardware Support */}
                <div className={styles.bsp_hardware_section}>
                  <span className={styles.bsp_hardware_label}>{t.bsp.supportedHardware}</span>
                  <div className={styles.bsp_hardware_list}>
                    {t.bsp.hardwareList.map((hw, idx) => (
                      <span key={idx} className={styles.bsp_hardware_tag}>{hw}</span>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className={styles.bsp_tags_row}>
                  {t.bsp.tags.map((tag, idx) => (
                    <span key={idx} className={styles.bsp_tag}>{tag}</span>
                  ))}
                </div>
              </div>
              
              {/* Arrow */}
              <div className={styles.bsp_arrow}>→</div>
            </a>
            )}
          </div>
        </div>
      )}

      {/* Demo Page */}
      {activePage === 'demo' && (
        <div className={styles.page_content}>
          {/* Hero Section */}
          <div className={styles.hero_section}>
            <div className={styles.hero_content}>
              <div className={styles.hero_subtitle}><ZapIcon size={16} /> jetson-examples</div>
              <h1>{t.demoHero.title}</h1>
              <p className={styles.hero_description}>
                {t.demoHero.desc}
              </p>
              <a href="https://github.com/Seeed-Projects/jetson-examples" target="_blank" className={styles.hero_cta}>
                <span>{t.demoHero.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className={styles.hero_image}>
              <div style={{textAlign: 'center', color: '#76b900'}}><RocketIcon size={120} /></div>
            </div>
          </div>

          {/* jetson-examples Section */}
          <div className={styles.section}>
            <div className={styles.section_header}>
              <div>
                <h2 className={styles.section_title}>{t.examples.title}</h2>
                <p className={styles.section_description}>{t.examples.desc}</p>
              </div>
              <CollapseButton section="examples" isExpanded={expandedSections.examples} />
            </div>
            
            {expandedSections.examples && (
              <div className={styles.examples_container}>
                <div className={styles.examples_hero_card}>
                  <div className={styles.examples_hero_header}>
                    <div className={styles.examples_logo}>
                      <ZapIcon size={20} />
                      <span className={styles.examples_logo_text}>jetson-examples</span>
                    </div>
                    <a href="https://github.com/Seeed-Projects/jetson-examples" target="_blank" className={styles.github_link}>
                      <span>{t.common.viewOnGithub}</span>
                    </a>
                  </div>
                  
                  <div className={styles.examples_code_block}>
                    <pre className={styles.code_content}>
                      <code>
                        <span className={styles.code_comment}># {t.examples.installTitle}</span>
                        <br/>
                        <span className={styles.code_prompt}>$</span> pip3 install jetson-examples
                        <br/><br/>
                        <span className={styles.code_comment}># {t.examples.deployTitle}</span>
                        <br/>
                        <span className={styles.code_prompt}>$</span> reComputer run llava
                      </code>
                    </pre>
                  </div>

                  <div className={styles.examples_models}>
                    <div className={styles.models_title}>{t.examples.modelsTitle}</div>
                    <div className={styles.models_grid}>
                      {EXAMPLE_MODELS.map((model, idx) => {
                        const ModelIcon = model.Icon;
                        return (
                          <span key={idx} className={clsx(styles.model_tag, styles[model.category])}>
                            <span className={styles.model_icon}><ModelIcon size={14} /></span>
                            <span>{model.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className={styles.examples_features}>
                    {t.examples.features.map((feature, idx) => (
                      <span key={idx} className={styles.feature_badge}>
                        <span>✓</span>
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.examples_quick_links}>
                  <a href="https://github.com/Seeed-Projects/jetson-examples#readme" target="_blank" className={styles.example_link_card}>
                    <div className={styles.link_card_icon}><BookOpenIcon size={24} /></div>
                    <div className={styles.link_card_content}>
                      <h4>{t.examples.quickLinks.docs}</h4>
                      <p>{t.common.tutorialsAndGuides}</p>
                    </div>
                    <span className={styles.link_card_arrow}>→</span>
                  </a>
                  <a href="https://github.com/Seeed-Projects/jetson-examples/blob/main/docs/examples.md" target="_blank" className={styles.example_link_card}>
                    <div className={styles.link_card_icon}><BotIcon size={24} /></div>
                    <div className={styles.link_card_content}>
                      <h4>{t.examples.quickLinks.models}</h4>
                      <p>{t.common.aiModels}</p>
                    </div>
                    <span className={styles.link_card_arrow}>→</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Community Projects Section */}
          <div className={styles.section}>
            <div className={styles.section_header}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 className={styles.section_title}>{t.community.title}</h2>
                <p className={styles.section_description}>{t.community.desc}</p>
              </div>
              <CollapseButton section="community" isExpanded={expandedSections.community} />
            </div>
            
            {expandedSections.community && (
            <>
            {/* Search Bar */}
            <div className={styles.search_container}>
              <div className={styles.search_wrapper}>
                <span className={styles.search_icon}>🔍</span>
                <input
                  type="text"
                  className={styles.search_input}
                  placeholder={t.community.searchPlaceholder}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <button 
                    className={styles.search_clear}
                    onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                  >
                    ✕
                  </button>
                )}
              </div>
              <span className={styles.search_results}>
                {t.community.searchResults.replace('{count}', String(getFilteredProjects().length))}
              </span>
            </div>
            
            {/* Project Filters */}
            <div className={styles.project_filters}>
              {COMMUNITY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={clsx(styles.filter_btn, activeCategory === cat.id && styles.active)}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {t.community[cat.key]}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className={styles.project_grid}>
              {getPaginatedProjects().map((project, idx) => (
                <a key={idx} href={project.URL?.[lang] || project.URL?.en} target="_blank" className={styles.project_card}>
                  <div className={styles.project_image}>
                    <img src={project.img} alt={project.name?.[lang] || project.name?.en} />
                  </div>
                  <div className={styles.project_content}>
                    <span className={styles.project_category}>
                      {project.category?.[lang]?.[0] || project.category?.en?.[0] || 'Jetson'}
                    </span>
                    <h3 className={styles.project_title}>{project.name?.[lang] || project.name?.en}</h3>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.page_btn}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  {t.community.prev}
                </button>
                <div className={styles.page_numbers}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={clsx(styles.page_number, currentPage === page && styles.active)}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  className={styles.page_btn}
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  {t.community.next}
                </button>
              </div>
            )}
            </>
            )}
          </div>
        </div>
      )}

      {/* FAQ Page */}
      {activePage === 'faq' && (
        <div className={styles.page_content}>
          {/* Hero Section */}
          <div className={styles.hero_section}>
            <div className={styles.hero_content}>
              <div className={styles.hero_subtitle}>{t.faq.subtitle}</div>
              <h1>{t.faq.title}</h1>
              <p className={styles.hero_description}>{t.faq.desc}</p>
              <a href="https://wiki.seeedstudio.com/Jetson_FAQ/" target="_blank" className={styles.hero_cta}>
                <span>{t.faq.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className={styles.hero_image}>
              <div style={{textAlign: 'center', color: '#76b900'}}><HelpCircleIcon size={120} /></div>
            </div>
          </div>

          {/* Common Issues Section */}
          <div className={styles.section}>
            <div className={styles.section_header}>
              <div>
                <h2 className={styles.section_title}>{t.faq.commonIssues}</h2>
                <p className={styles.section_description}>{t.faq.commonIssuesDesc}</p>
              </div>
              <CollapseButton section="faq" isExpanded={expandedSections.faq} />
            </div>

            {expandedSections.faq && (
            <div className={styles.faq_grid}>
              {FAQ_DATA.map((faq, idx) => {
                const FaqIconComponent = faq.Icon;
                return (
                  <a key={idx} href={faq.url[lang] || faq.url.en} target="_blank" className={styles.faq_card}>
                    <div className={styles.faq_icon}><FaqIconComponent size={28} /></div>
                    <div className={styles.faq_content}>
                      <h3 className={styles.faq_title}>{faq.title[lang]}</h3>
                      <p className={styles.faq_desc}>{faq.desc[lang]}</p>
                      <span className={styles.faq_link}>{t.common.learnMore}</span>
                    </div>
                  </a>
                );
              })}
            </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecomputerPage;