import { detectReCameraLocale, type ReCameraLocale } from '../recamera/i18n';

export interface AgentSkillsCopy {
  eyebrow: string;
  installTitle: string;
  installDesc: string;
  runOn: string;
  copyAll: string;
  copied: string;
  selectAgent: string;
  targetLabel: string;
  sourceRepo: string;
  restart: string;
  stepLabels: {
    pro: string[];
    legacy: string[];
  };
  landingTitle: string;
  landingDesc: string;
  proCardTitle: string;
  proCardDesc: string;
  legacyCardTitle: string;
  legacyCardDesc: string;
  viewGuide: string;
  worksWith: string;
}

const COPY: Record<ReCameraLocale, AgentSkillsCopy> = {
  en: {
    eyebrow: 'AGENT SKILLS',
    installTitle: 'Install once. Use from every project.',
    installDesc:
      'Run this on your development host. The official skill puts reCamera hardware knowledge, build workflows, and templates where your coding agent can read them.',
    runOn: 'RUN ON YOUR DEV HOST',
    copyAll: 'COPY ALL STEPS',
    copied: 'COPIED',
    selectAgent: 'Choose your coding agent',
    targetLabel: 'Skill directory',
    sourceRepo: 'Source repository ↗',
    restart: 'Restart the agent after installation.',
    stepLabels: {
      pro: ['Clone the skill', 'Open the directory', 'Run the installer'],
      legacy: ['Clone the skill', 'Create the skills directory', 'Copy the skill into place'],
    },
    landingTitle: 'Build reCamera apps with your coding agent',
    landingDesc:
      'Official reCamera skills package device knowledge, build workflows, and templates for your agent. Install once, then reuse it in every project.',
    proCardTitle: 'reCamera Pro Skill',
    proCardDesc:
      'ONNX → RKNN conversion, native C/C++ RKNN apps, GStreamer, audio, and RTSP for RV1126B.',
    legacyCardTitle: 'reCamera 2002 Skill',
    legacyCardDesc:
      'Generate project templates, cross-compile, deploy, and verify SG200X C/C++ demos with reproducible evidence.',
    viewGuide: 'View install guide',
    worksWith: 'Works with',
  },
  'zh-CN': {
    eyebrow: 'AGENT SKILLS',
    installTitle: '安装一次，所有项目通用',
    installDesc:
      '在开发主机上运行。官方 skill 会把 reCamera 的硬件知识、构建流程和模板放到你的编码代理可以读取的位置。',
    runOn: '在开发主机上运行',
    copyAll: '复制全部步骤',
    copied: '已复制',
    selectAgent: '选择你的 AI 编码代理',
    targetLabel: 'Skill 目录',
    sourceRepo: '源码仓库 ↗',
    restart: '安装完成后请重启代理。',
    stepLabels: {
      pro: ['克隆 Skill', '进入目录', '运行安装脚本'],
      legacy: ['克隆 Skill', '创建 skills 目录', '复制到代理目录'],
    },
    landingTitle: '用 AI 编码代理开发 reCamera 应用',
    landingDesc:
      '官方 reCamera skills 打包了设备知识、构建流程和模板。只需安装一次，即可在每个项目中复用。',
    proCardTitle: 'reCamera Pro Skill',
    proCardDesc:
      '面向 RV1126B 的 ONNX → RKNN 转换、原生 C/C++ RKNN 应用、GStreamer、音频与 RTSP。',
    legacyCardTitle: 'reCamera 2002 Skill',
    legacyCardDesc: '面向 SG200X 的工程模板生成、交叉编译、部署与可复现证据链。',
    viewGuide: '查看安装指南',
    worksWith: '支持',
  },
  ja: {
    eyebrow: 'AGENT SKILLS',
    installTitle: '一度インストールすれば、すべてのプロジェクトで使えます。',
    installDesc:
      '開発ホスト上で実行します。公式スキルが reCamera のハードウェア知識、ビルド手順、テンプレートを、コーディングエージェントが読み取れる場所に配置します。',
    runOn: '開発ホストで実行',
    copyAll: 'すべての手順をコピー',
    copied: 'コピーしました',
    selectAgent: 'AI コーディングエージェントを選択',
    targetLabel: 'スキルディレクトリ',
    sourceRepo: 'ソースリポジトリ ↗',
    restart: 'インストール後にエージェントを再起動してください。',
    stepLabels: {
      pro: ['スキルをクローン', 'ディレクトリを開く', 'インストーラーを実行'],
      legacy: ['スキルをクローン', 'skills ディレクトリを作成', 'エージェントのディレクトリにコピー'],
    },
    landingTitle: 'AI コーディングエージェントで reCamera アプリを開発',
    landingDesc:
      '公式 reCamera スキルには、デバイス知識、ビルド手順、テンプレートが含まれています。一度インストールすれば、どのプロジェクトでも再利用できます。',
    proCardTitle: 'reCamera Pro スキル',
    proCardDesc:
      'RV1126B 向けの ONNX → RKNN 変換、ネイティブ C/C++ RKNN アプリ、GStreamer、オーディオ、RTSP。',
    legacyCardTitle: 'reCamera 2002 スキル',
    legacyCardDesc: 'SG200X 向けのプロジェクト生成、クロスコンパイル、デプロイ、再現可能な証跡。',
    viewGuide: 'インストールガイドを見る',
    worksWith: '対応',
  },
  es: {
    eyebrow: 'AGENT SKILLS',
    installTitle: 'Instala una vez. Úsalo en todos tus proyectos.',
    installDesc:
      'Ejecútalo en tu host de desarrollo. La skill oficial coloca el conocimiento de hardware, los flujos de compilación y las plantillas de reCamera donde tu agente de código puede leerlos.',
    runOn: 'EJECUTAR EN TU HOST DE DESARROLLO',
    copyAll: 'COPIAR TODOS LOS PASOS',
    copied: 'COPIADO',
    selectAgent: 'Elige tu agente de codificación',
    targetLabel: 'Directorio de la skill',
    sourceRepo: 'Repositorio de origen ↗',
    restart: 'Reinicia el agente después de la instalación.',
    stepLabels: {
      pro: ['Clonar la skill', 'Abrir el directorio', 'Ejecutar el instalador'],
      legacy: ['Clonar la skill', 'Crear el directorio de skills', 'Copiar al directorio del agente'],
    },
    landingTitle: 'Crea apps para reCamera con tu agente de código',
    landingDesc:
      'Las skills oficiales de reCamera incluyen el conocimiento del dispositivo, los flujos de compilación y las plantillas. Instálalas una vez y reutilízalas en todos tus proyectos.',
    proCardTitle: 'Skill de reCamera Pro',
    proCardDesc:
      'Conversión ONNX → RKNN, apps nativas C/C++ con RKNN, GStreamer, audio y RTSP para RV1126B.',
    legacyCardTitle: 'Skill de reCamera 2002',
    legacyCardDesc:
      'Generación de proyectos, compilación cruzada, despliegue y verificación de demos C/C++ para SG200X con evidencias reproducibles.',
    viewGuide: 'Ver guía de instalación',
    worksWith: 'Compatible con',
  },
  'pt-BR': {
    eyebrow: 'AGENT SKILLS',
    installTitle: 'Instale uma vez. Use em todos os projetos.',
    installDesc:
      'Execute no seu host de desenvolvimento. A skill oficial coloca o conhecimento de hardware, os fluxos de build e os templates do reCamera onde o seu agente de código consegue lê-los.',
    runOn: 'EXECUTAR NO HOST DE DESENVOLVIMENTO',
    copyAll: 'COPIAR TODOS OS PASSOS',
    copied: 'COPIADO',
    selectAgent: 'Escolha seu agente de código',
    targetLabel: 'Diretório da skill',
    sourceRepo: 'Repositório de origem ↗',
    restart: 'Reinicie o agente após a instalação.',
    stepLabels: {
      pro: ['Clonar a skill', 'Abrir o diretório', 'Executar o instalador'],
      legacy: ['Clonar a skill', 'Criar o diretório de skills', 'Copiar para o diretório do agente'],
    },
    landingTitle: 'Crie apps para reCamera com seu agente de código',
    landingDesc:
      'As skills oficiais do reCamera incluem conhecimento do dispositivo, fluxos de build e templates. Instale uma vez e reutilize em todos os projetos.',
    proCardTitle: 'Skill do reCamera Pro',
    proCardDesc:
      'Conversão ONNX → RKNN, apps nativos C/C++ com RKNN, GStreamer, áudio e RTSP para RV1126B.',
    legacyCardTitle: 'Skill do reCamera 2002',
    legacyCardDesc:
      'Geração de projetos, compilação cruzada, implantação e verificação de demos C/C++ para SG200X com evidências reproduzíveis.',
    viewGuide: 'Ver guia de instalação',
    worksWith: 'Compatível com',
  },
};

export function getAgentSkillsCopy(locale?: string, pathname?: string): AgentSkillsCopy {
  return COPY[detectReCameraLocale(locale, pathname)];
}
