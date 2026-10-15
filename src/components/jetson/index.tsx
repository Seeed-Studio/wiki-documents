import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';

// 动态加载多语言配置
import * as config_en from './config.en';
import * as config_ja from './config.ja';
import * as config_zh from './config.zh';
import * as config_es from './config.es';
import * as config_pt from './config.pt.js';

// 自动生成的项目配置
import * as config_auto from './config.auto';

// 共享产品数据
import { productOptions, PRODUCT_DATA, PRODUCT_CATEGORIES, type ProductOption } from './productData';
import { productOptionsAuto } from './config.products.auto';

// 自动生成产品中已知的“系列级/非产品”噪音条目（value 由 scripts/generate-jetson-products.js 生成）。
// 新增真实产品文档后重跑生成脚本，新条目会自动出现在设备网格里；这里只屏蔽历史噪音。
const AUTO_NOISE_VALUES = new Set([
  'other-nvidia-jetson', 'carrier-j501', 'mini-mini-j401', 'other-faqs',
  'other-jetson-developtool', 'other-recomputer-jetson-series', 'industrial-recomputer-industrial',
  'other-recomputer-j10', 'other-recomputer-j1010', 'other-recomputer-j1020v2',
  'other-recomputer-j20', 'other-recomputer-j30-40', 'other-recomputer-j401b',
  'mini-recomputer-mini', 'robotics-recomputer-robotics-j40', 'super-recomputer-super',
  'robotics-recomputer-robotics-j50-mini',
]);

export const ALL_PRODUCTS: ProductOption[] = [
  ...productOptions,
  ...productOptionsAuto.filter(p => !AUTO_NOISE_VALUES.has(p.value)),
];

// SVG Icons
import {
  ProductsIcon, DemoIcon, FaqIcon, StorageIcon, RefreshIcon, ZapIcon, LinuxIcon, TreeIcon,
  PackageIcon, MonitorIcon, WrenchIcon, BookIcon, EyeIcon, BotIcon,
  FactoryIcon, BookOpenIcon, SparklesIcon, SettingsIcon, MessageSquareIcon,
  MicIcon, PaletteIcon, GemIcon, MoreHorizontalIcon, RocketIcon, HelpCircleIcon,
  CloudIcon
} from './icons';

type Lang = 'en' | 'ja' | 'zh' | 'es' | 'pt';

type CommunityCategoryKey =
  | 'all'
  | 'cv'
  | 'gen'
  | 'devtools'
  | 'multimodal'
  | 'physical'
  | 'managed';

type CommunityProject = {
  name?: Partial<Record<Lang, string>>;
  img?: string;
  URL?: Partial<Record<Lang, string>>;
  category?: Partial<Record<Lang, string[]>>;
  description?: Partial<Record<Lang, string>>;
};

type Props = {
  lang?: Lang;
};

function getImgUrl(str: string, suffix?: string) {
  return `https://files.seeedstudio.com/wiki/Jetson/${str}.${suffix || 'png'}`;
}

const toUrl = (url: string) => {
  if (!url) return;
  window.location.href = url;
};

const getLangFromPath = (pathname?: string): Lang => {
  const path = (pathname || '').toLowerCase();

  if (path === '/cn' || path.startsWith('/cn/')) return 'zh';
  if (path === '/ja' || path.startsWith('/ja/')) return 'ja';
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  if (path === '/pt-br' || path.startsWith('/pt-br/')) return 'pt';

  return 'en';
};

const COMMUNITY_CATEGORIES: Array<{ id: CommunityCategoryKey; key: CommunityCategoryKey }> = [
  { id: 'all', key: 'all' },
  { id: 'cv', key: 'cv' },
  { id: 'gen', key: 'gen' },
  { id: 'devtools', key: 'devtools' },
  { id: 'multimodal', key: 'multimodal' },
  { id: 'physical', key: 'physical' },
  { id: 'managed', key: 'managed' }
];

const LANG_PATH_PREFIX: Record<Lang, string> = {
  en: '',
  zh: '/cn',
  ja: '/ja',
  es: '/es',
  pt: '/pt-br'
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

// 分类 FAQ 数据（由常见问题页面标题生成，锚点与 FAQ 页面实际渲染一致）
const FAQ_CATEGORIES: Array<{
  Icon: React.ComponentType<{ size?: number }>;
  title: Partial<Record<Lang, string>>;
  items: Array<{ title: Partial<Record<Lang, string>>; url: Partial<Record<Lang, string>> }>;
}> = [
  {
    Icon: RefreshIcon,
    title: {en: "Flashing & Installation", ja: "フラッシュとインストール", zh: "刷机与烧录", es: "Instalación y Flasheo", pt: "Instalação e Gravação"},
    items: [
      {
        title: {en: "Troubleshooting Installation", ja: "インストールに関するトラブルシューティング", zh: "安装故障排查", es: "Solución de problemas de instalación", pt: "Solução de problemas de instalação"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q1-troubleshooting-installation", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q1-インストールに関するトラブルシューティング", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q1-安装故障排查", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p1-solución-de-problemas-de-instalación", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q1-solução-de-problemas-de-instalação"}
      },
      {
        title: {en: "Common flashing errors during Jetson flashing.", ja: "Jetson のフラッシュ中によく発生する書き込みエラー", zh: "Jetson 烧录过程中常见的烧录错误。", es: "Errores comunes durante el flasheo de Jetson.", pt: "Erros comuns durante o processo de gravação (flashing) do Jetson."},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q6-common-flashing-errors-during-jetson-flashing", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q6-jetson-のフラッシュ中によく発生する書き込みエラー", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q6-jetson-烧录过程中常见的烧录错误", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p6-errores-comunes-durante-el-flasheo-de-jetson", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q6-erros-comuns-durante-o-processo-de-gravação-flashing-do-jetson"}
      },
      {
        title: {en: "I cannot use USB-A port, Ethernet port or no HDMI dispaly after flashing the device.", ja: "デバイスをフラッシュした後、USB-A ポートや Ethernet ポートが使えない、または HDMI に表示が出ません。", zh: "设备烧录完成后，我无法使用 USB-A 接口、以太网接口，或者没有 HDMI 显示。", es: "No puedo usar el puerto USB-A, el puerto Ethernet o no hay visualización HDMI después de flashear el dispositivo.", pt: "Não consigo usar a porta USB-A, a porta Ethernet ou não há exibição HDMI após gravar o dispositivo."},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q7-i-cannot-use-usb-a-port-ethernet-port-or-no-hdmi-dispaly-after-flashing-the-device", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q7-デバイスをフラッシュした後usb-a-ポートや-ethernet-ポートが使えないまたは-hdmi-に表示が出ません", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q7-设备烧录完成后我无法使用-usb-a-接口以太网接口或者没有-hdmi-显示", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p7-no-puedo-usar-el-puerto-usb-a-el-puerto-ethernet-o-no-hay-visualización-hdmi-después-de-flashear-el-dispositivo", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q7-não-consigo-usar-a-porta-usb-a-a-porta-ethernet-ou-não-há-exibição-hdmi-após-gravar-o-dispositivo"}
      },
      {
        title: {en: "Why is it that sometimes after completing the flashing process on Jetson, the system fails to boot from the SSD?", ja: "Jetson でフラッシュ処理を完了したのに、SSD からシステムが起動しないことがあるのはなぜですか？", zh: "为什么有时在完成 Jetson 烧录后，系统无法从 SSD 启动？", es: "¿Por qué a veces, después de completar el proceso de flasheo en Jetson, el sistema no arranca desde el SSD?", pt: "Por que às vezes, após concluir o processo de gravação no Jetson, o sistema não consegue inicializar a partir do SSD?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q13-why-is-it-that-sometimes-after-completing-the-flashing-process-on-jetson-the-system-fails-to-boot-from-the-ssd", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q13-jetson-でフラッシュ処理を完了したのにssd-からシステムが起動しないことがあるのはなぜですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q13-为什么有时在完成-jetson-烧录后系统无法从-ssd-启动", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p13-por-qué-a-veces-después-de-completar-el-proceso-de-flasheo-en-jetson-el-sistema-no-arranca-desde-el-ssd", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q13-por-que-às-vezes-após-concluir-o-processo-de-gravação-no-jetson-o-sistema-não-consegue-inicializar-a-partir-do-ssd"}
      },
      {
        title: {en: "I did not modify anything related to the Jetson kernel, but during boot the Jetson reported a UUID-related error and then entered the recovery terminal.", ja: "Jetson カーネルに関連する変更は何も行っていないのに、起動時に Jetson が UUID 関連のエラーを報告し、その後リカバリターミナルに入ってしまいます。", zh: "我没有修改任何与 Jetson 内核相关的内容，但在启动过程中 Jetson 报告了与 UUID 相关的错误，然后进入了恢复终端。", es: "No modifiqué nada relacionado con el kernel de Jetson, pero durante el arranque Jetson informó un error relacionado con el UUID y luego entró en la terminal de recuperación.", pt: "Eu não modifiquei nada relacionado ao kernel do Jetson, mas durante a inicialização o Jetson relatou um erro relacionado ao UUID e então entrou no terminal de recuperação."},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q20-i-did-not-modify-anything-related-to-the-jetson-kernel-but-during-boot-the-jetson-reported-a-uuid-related-error-and-then-entered-the-recovery-terminal", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q20-jetson-カーネルに関連する変更は何も行っていないのに起動時に-jetson-が-uuid-関連のエラーを報告しその後リカバリターミナルに入ってしまいます", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q20我没有修改任何与-jetson-内核相关的内容但在启动过程中-jetson-报告了与-uuid-相关的错误然后进入了恢复终端", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p20-no-modifiqué-nada-relacionado-con-el-kernel-de-jetson-pero-durante-el-arranque-jetson-informó-un-error-relacionado-con-el-uuid-y-luego-entró-en-la-terminal-de-recuperación", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q20-eu-não-modifiquei-nada-relacionado-ao-kernel-do-jetson-mas-durante-a-inicialização-o-jetson-relatou-um-erro-relacionado-ao-uuid-e-então-entrou-no-terminal-de-recuperação"}
      },
    ],
  },
  {
    Icon: ZapIcon,
    title: {en: "System & Upgrade", ja: "システムとアップグレード", zh: "系统与升级", es: "Sistema y Actualización", pt: "Sistema e Atualização"},
    items: [
      {
        title: {en: "How to get the system log of reComputer J30/J40?", ja: "reComputer J30/J40 のシステムログを取得するにはどうすればよいですか？", zh: "如何获取 reComputer J30/J40 的系统日志？", es: "¿Cómo obtener el registro del sistema de reComputer J30/J40?", pt: "Como obter o log do sistema do reComputer J30/J40?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q5-how-to-get-the-system-log-of-recomputer-j30j40", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q5-recomputer-j30j40-のシステムログを取得するにはどうすればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q5-如何获取-recomputer-j30j40-的系统日志", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p5-cómo-obtener-el-registro-del-sistema-de-recomputer-j30j40", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q5-como-obter-o-log-do-sistema-do-recomputer-j30j40"}
      },
      {
        title: {en: "My system crashed/unable to boot/black screen/lost peripheral drivers after I execute \"sudo apt-get update && sudo apt-get upgrade\" commands.", ja: "\"sudo apt-get update && sudo apt-get upgrade\" コマンドを実行した後、システムがクラッシュした／起動できない／画面が真っ黒になる／周辺機器ドライバが失われました。", zh: "在执行 \"sudo apt-get update && sudo apt-get upgrade\" 命令后，我的系统崩溃/无法启动/黑屏/外设驱动丢失。", es: "Mi sistema se bloqueó/no puede arrancar/pantalla en negro/perdió controladores de periféricos después de ejecutar los comandos \"sudo apt-get update && sudo apt-get upgrade\".", pt: "Meu sistema travou/não consegue inicializar/tela preta/perdeu drivers de periféricos depois que executei os comandos \"sudo apt-get update && sudo apt-get upgrade\"."},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q8-my-system-crashedunable-to-bootblack-screenlost-peripheral-drivers-after-i-execute-sudo-apt-get-update--sudo-apt-get-upgrade-commands", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q8-sudo-apt-get-update--sudo-apt-get-upgrade-コマンドを実行した後システムがクラッシュした起動できない画面が真っ黒になる周辺機器ドライバが失われました", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q8-在执行-sudo-apt-get-update--sudo-apt-get-upgrade-命令后我的系统崩溃无法启动黑屏外设驱动丢失", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p8-mi-sistema-se-bloqueóno-puede-arrancarpantalla-en-negroperdió-controladores-de-periféricos-después-de-ejecutar-los-comandos-sudo-apt-get-update--sudo-apt-get-upgrade", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q8-meu-sistema-travounão-consegue-inicializartela-pretaperdeu-drivers-de-periféricos-depois-que-executei-os-comandos-sudo-apt-get-update--sudo-apt-get-upgrade"}
      },
      {
        title: {en: "How can I upgrade software packages if you told me that I cannot execute apt upgrade? Will there be security risks if I don't upgrade the software?", ja: "apt upgrade を実行できないと言われましたが、ソフトウェアパッケージはどのようにアップグレードすればよいですか？ソフトウェアをアップグレードしないとセキュリティリスクはありますか？", zh: "如果你们说不能执行 apt upgrade，那我该如何升级软件包？如果不升级软件会有安全风险吗？", es: "¿Cómo puedo actualizar los paquetes de software si me dijeron que no puedo ejecutar apt upgrade? ¿Habrá riesgos de seguridad si no actualizo el software?", pt: "Como posso atualizar pacotes de software se vocês disseram que não posso executar apt upgrade? Haverá riscos de segurança se eu não atualizar o software?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q9-how-can-i-upgrade-software-packages-if-you-told-me-that-i-cannot-execute-apt-upgrade-will-there-be-security-risks-if-i-dont-upgrade-the-software", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q9-apt-upgrade-を実行できないと言われましたがソフトウェアパッケージはどのようにアップグレードすればよいですかソフトウェアをアップグレードしないとセキュリティリスクはありますか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q9-如果你们说不能执行-apt-upgrade那我该如何升级软件包如果不升级软件会有安全风险吗", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p9-cómo-puedo-actualizar-los-paquetes-de-software-si-me-dijeron-que-no-puedo-ejecutar-apt-upgrade-habrá-riesgos-de-seguridad-si-no-actualizo-el-software", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q9-como-posso-atualizar-pacotes-de-software-se-vocês-disseram-que-não-posso-executar-apt-upgrade-haverá-riscos-de-segurança-se-eu-não-atualizar-o-software"}
      },
      {
        title: {en: "Why can’t the `apt upgrade` command be executed on reComputer/reServer?", ja: "なぜ reComputer/reServer では `apt upgrade` コマンドを実行できないのですか？", zh: "为什么不能在 reComputer/reServer 上执行 `apt upgrade` 命令？", es: "¿Por qué no se puede ejecutar el comando `apt upgrade` en reComputer/reServer?", pt: "Por que o comando `apt upgrade` não pode ser executado em reComputer/reServer?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q15-why-cant-the-apt-upgrade-command-be-executed-on-recomputerreserver", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q15-なぜ-recomputerreserver-では-apt-upgrade-コマンドを実行できないのですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q15-为什么不能在-recomputerreserver-上执行-apt-upgrade-命令", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p15-por-qué-no-se-puede-ejecutar-el-comando-apt-upgrade-en-recomputerreserver", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q15-por-que-o-comando-apt-upgrade-não-pode-ser-executado-em-recomputerreserver"}
      },
      {
        title: {en: "What changes does JetPack 7.2 bring to Jetson AGX Orin inference performance?", ja: "JetPack 7.2 は Jetson AGX Orin の推論性能にどのような変化をもたらしますか？", zh: "JetPack 7.2 为 Jetson AGX Orin 的推理性能带来了哪些变化？", es: "¿Qué cambios aporta JetPack 7.2 al rendimiento de inferencia de Jetson AGX Orin?", pt: "Quais mudanças o JetPack 7.2 traz para o desempenho de inferência do Jetson AGX Orin?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q22-what-changes-does-jetpack-72-bring-to-jetson-agx-orin-inference-performance", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q22-jetpack-72-は-jetson-agx-orin-の推論性能にどのような変化をもたらしますか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q22-jetpack-72-为-jetson-agx-orin-的推理性能带来了哪些变化", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p22-qué-cambios-aporta-jetpack-72-al-rendimiento-de-inferencia-de-jetson-agx-orin", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q22-quais-mudanças-o-jetpack-72-traz-para-o-desempenho-de-inferência-do-jetson-agx-orin"}
      },
    ],
  },
  {
    Icon: StorageIcon,
    title: {en: "Storage & Disk", ja: "ストレージとディスク", zh: "存储与磁盘", es: "Almacenamiento y Disco", pt: "Armazenamento e Disco"},
    items: [
      {
        title: {en: "The remaining space in the eMMC in the received reComputer is only about 2GB, how to solve the problem of insufficient space?", ja: "受け取った reComputer の eMMC の残り容量が約 2GB しかありません。容量不足の問題をどのように解決すればよいですか？", zh: "收到的 reComputer 中 eMMC 的剩余空间只有约 2GB，如何解决空间不足的问题？", es: "El espacio restante en la eMMC del reComputer recibido es de solo unos 2GB, ¿cómo resolver el problema de espacio insuficiente?", pt: "O espaço restante no eMMC do reComputer recebido é de apenas cerca de 2GB. Como resolver o problema de espaço insuficiente?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q2-the-remaining-space-in-the-emmc-in-the-received-recomputer-is-only-about-2gb-how-to-solve-the-problem-of-insufficient-space", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q2-受け取った-recomputer-の-emmc-の残り容量が約-2gb-しかありません容量不足の問題をどのように解決すればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q2-收到的-recomputer-中-emmc-的剩余空间只有约-2gb如何解决空间不足的问题", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p2-el-espacio-restante-en-la-emmc-del-recomputer-recibido-es-de-solo-unos-2gb-cómo-resolver-el-problema-de-espacio-insuficiente", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q2-o-espaço-restante-no-emmc-do-recomputer-recebido-é-de-apenas-cerca-de-2gb-como-resolver-o-problema-de-espaço-insuficiente"}
      },
      {
        title: {en: "How can I mount an external hard drive formatted with exFAT on Jetson (JetPack 6)?", ja: "exFAT でフォーマットされた外付けハードドライブを Jetson（JetPack 6）でマウントするにはどうすればよいですか？", zh: "如何在 Jetson（JetPack 6）上挂载使用 exFAT 格式化的外置硬盘？", es: "¿Cómo puedo montar en Jetson (JetPack 6) un disco duro externo formateado con exFAT?", pt: "Como posso montar um disco rígido externo formatado com exFAT no Jetson (JetPack 6)?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q17how-can-i-mount-an-external-hard-drive-formatted-with-exfat-on-jetson-jetpack-6", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q17exfat-でフォーマットされた外付けハードドライブを-jetsonjetpack-6でマウントするにはどうすればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q17如何在-jetsonjetpack-6上挂载使用-exfat-格式化的外置硬盘", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p17cómo-puedo-montar-en-jetson-jetpack-6-un-disco-duro-externo-formateado-con-exfat", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q17como-posso-montar-um-disco-rígido-externo-formatado-com-exfat-no-jetson-jetpack-6"}
      },
      {
        title: {en: "How to encrypt the disk of Jetson before flashing the image?", ja: "Jetson のイメージを書き込む前にディスクを暗号化するにはどうすればよいですか？", zh: "如何在烧录镜像前对 Jetson 的磁盘进行加密？", es: "¿Cómo cifrar el disco de Jetson antes de flashear la imagen?", pt: "Como criptografar o disco do Jetson antes de gravar a imagem?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q18how-to-encrypt-the-disk-of-jetson-before-flashing-the-image", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q18jetson-のイメージを書き込む前にディスクを暗号化するにはどうすればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q18如何在烧录镜像前对-jetson-的磁盘进行加密", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p18cómo-cifrar-el-disco-de-jetson-antes-de-flashear-la-imagen", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q18como-criptografar-o-disco-do-jetson-antes-de-gravar-a-imagem"}
      },
    ],
  },
  {
    Icon: EyeIcon,
    title: {en: "Camera & Peripherals", ja: "カメラと周辺機器", zh: "相机与外设", es: "Cámara y Periféricos", pt: "Câmera e Periféricos"},
    items: [
      {
        title: {en: "How to solve the compatibility issue between reComputer and VEYE camera?", ja: "reComputer と VEYE カメラの互換性の問題をどのように解決すればよいですか？", zh: "如何解决 reComputer 与 VEYE 相机之间的兼容性问题？", es: "¿Cómo resolver el problema de compatibilidad entre reComputer y la cámara VEYE?", pt: "Como resolver o problema de compatibilidade entre o reComputer e a câmera VEYE?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q3-how-to-solve-the-compatibility-issue-between-recomputer-and-veye-camera", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q3-recomputer-と-veye-カメラの互換性の問題をどのように解決すればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q3-如何解决-recomputer-与-veye-相机之间的兼容性问题", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p3-cómo-resolver-el-problema-de-compatibilidad-entre-recomputer-y-la-cámara-veye", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q3-como-resolver-o-problema-de-compatibilidade-entre-o-recomputer-e-a-câmera-veye"}
      },
      {
        title: {en: "How to solve the compatibility issue between IMX477 Camera and A603 carrier board?", ja: "IMX477 カメラと A603 キャリアボードの互換性の問題をどのように解決すればよいですか？", zh: "如何解决 IMX477 相机与 A603 载板之间的兼容性问题？", es: "¿Cómo resolver el problema de compatibilidad entre la cámara IMX477 y la placa carrier A603?", pt: "Como resolver o problema de compatibilidade entre a câmera IMX477 e a placa carrier A603?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q4-how-to-solve-the-compatibility-issue-between-imx477-camera-and-a603-carrier-board", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q4-imx477-カメラと-a603-キャリアボードの互換性の問題をどのように解決すればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q4-如何解决-imx477-相机与-a603-载板之间的兼容性问题", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p4-cómo-resolver-el-problema-de-compatibilidad-entre-la-cámara-imx477-y-la-placa-carrier-a603", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q4-como-resolver-o-problema-de-compatibilidade-entre-a-câmera-imx477-e-a-placa-carrier-a603"}
      },
      {
        title: {en: "How to enable the SPI interface on Jetson-nano?", ja: "Jetson-nano で SPI インターフェースを有効にするにはどうすればよいですか？", zh: "如何在 Jetson-nano 上启用 SPI 接口？", es: "¿Cómo habilitar la interfaz SPI en Jetson-nano?", pt: "Como habilitar a interface SPI no Jetson-nano?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q12-how-to-enable-the-spi-interface-on-jetson-nano", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q12-jetson-nano-で-spi-インターフェースを有効にするにはどうすればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q12-如何在-jetson-nano-上启用-spi-接口", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p12-cómo-habilitar-la-interfaz-spi-en-jetson-nano", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q12-como-habilitar-a-interface-spi-no-jetson-nano"}
      },
      {
        title: {en: "How to use the IMX219 camera on NVIDIA Jetson devices?", ja: "NVIDIA Jetson デバイスで IMX219 カメラを使用するにはどうすればよいですか？", zh: "如何在 NVIDIA Jetson 设备上使用 IMX219 相机？", es: "¿Cómo usar la cámara IMX219 en dispositivos NVIDIA Jetson?", pt: "Como usar a câmera IMX219 em dispositivos NVIDIA Jetson?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q21-how-to-use-the-imx219-camera-on-nvidia-jetson-devices", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q21-nvidia-jetson-デバイスで-imx219-カメラを使用するにはどうすればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q21-如何在-nvidia-jetson-设备上使用-imx219-相机", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p21-cómo-usar-la-cámara-imx219-en-dispositivos-nvidia-jetson", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q21-como-usar-a-câmera-imx219-em-dispositivos-nvidia-jetson"}
      },
      {
        title: {en: "How to restore Wi-Fi modules such as Intel AX210/AX200 or Realtek RTL8852BE after upgrading to JetPack 7.2?", ja: "JetPack 7.2 にアップグレードした後、Intel AX210/AX200 や Realtek RTL8852BE などの Wi-Fi モジュールをどのように復旧すればよいですか？", zh: "升级到 JetPack 7.2 后，如何恢复 Intel AX210/AX200 或 Realtek RTL8852BE 等 Wi-Fi 模块？", es: "¿Cómo restaurar módulos Wi-Fi como Intel AX210/AX200 o Realtek RTL8852BE después de actualizar a JetPack 7.2?", pt: "Como restaurar módulos Wi-Fi como Intel AX210/AX200 ou Realtek RTL8852BE após atualizar para o JetPack 7.2?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q23-how-to-restore-wi-fi-modules-such-as-intel-ax210ax200-or-realtek-rtl8852be-after-upgrading-to-jetpack-72", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q23-jetpack-72-にアップグレードした後intel-ax210ax200-や-realtek-rtl8852be-などの-wi-fi-モジュールをどのように復旧すればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q23-升级到-jetpack-72-后如何恢复-intel-ax210ax200-或-realtek-rtl8852be-等-wi-fi-模块", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p23-cómo-restaurar-módulos-wi-fi-como-intel-ax210ax200-o-realtek-rtl8852be-después-de-actualizar-a-jetpack-72", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q23-como-restaurar-módulos-wi-fi-como-intel-ax210ax200-ou-realtek-rtl8852be-após-atualizar-para-o-jetpack-72"}
      },
    ],
  },
  {
    Icon: WrenchIcon,
    title: {en: "Driver & Kernel", ja: "ドライバーとカーネル", zh: "驱动与内核", es: "Controladores y Kernel", pt: "Drivers e Kernel"},
    items: [
      {
        title: {en: "What modifications does Seeed make to NVIDIA's Jetson BSP.", ja: "Seeed は NVIDIA の Jetson BSP にどのような変更を加えていますか。", zh: "Seeed 对 NVIDIA 的 Jetson BSP 做了哪些修改。", es: "¿Qué modificaciones hace Seeed al BSP de Jetson de NVIDIA?", pt: "Quais modificações a Seeed faz no BSP Jetson da NVIDIA."},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q11-what-modifications-does-seeed-make-to-nvidias-jetson-bsp", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q11-seeed-は-nvidia-の-jetson-bsp-にどのような変更を加えていますか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q11-seeed-对-nvidia-的-jetson-bsp-做了哪些修改", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p11-qué-modificaciones-hace-seeed-al-bsp-de-jetson-de-nvidia", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q11-quais-modificações-a-seeed-faz-no-bsp-jetson-da-nvidia"}
      },
      {
        title: {en: "How to Build the Source Code Project for Seeed's Jetson BSP?", ja: "Seeed の Jetson BSP 用ソースコードプロジェクトをビルドするにはどうすればよいですか？", zh: "如何为 Seeed 的 Jetson BSP 构建源码工程？", es: "¿Cómo compilar el proyecto de código fuente para el BSP de Jetson de Seeed?", pt: "Como compilar o projeto de código-fonte para o BSP Jetson da Seeed?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q14-how-to-build-the-source-code-project-for-seeeds-jetson-bsp", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q14-seeed-の-jetson-bsp-用ソースコードプロジェクトをビルドするにはどうすればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q14-如何为-seeed-的-jetson-bsp-构建源码工程", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p14-cómo-compilar-el-proyecto-de-código-fuente-para-el-bsp-de-jetson-de-seeed", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q14-como-compilar-o-projeto-de-código-fonte-para-o-bsp-jetson-da-seeed"}
      },
      {
        title: {en: "If the reComputer/reServer does not have the required `.ko` driver module, how can I compile a usable driver?", ja: "reComputer/reServer に必要な `.ko` ドライバモジュールがない場合、どのようにして使用可能なドライバをコンパイルできますか？", zh: "如果 reComputer/reServer 中没有所需的 `.ko` 驱动模块，该如何编译可用的驱动？", es: "Si el reComputer/reServer no tiene el módulo de controlador `.ko` requerido, ¿cómo puedo compilar un controlador utilizable?", pt: "Se o reComputer/reServer não tiver o módulo de driver `.ko` necessário, como posso compilar um driver utilizável?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q16-if-the-recomputerreserver-does-not-have-the-required-ko-driver-module-how-can-i-compile-a-usable-driver", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q16-recomputerreserver-に必要な-ko-ドライバモジュールがない場合どのようにして使用可能なドライバをコンパイルできますか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q16-如果-recomputerreserver-中没有所需的-ko-驱动模块该如何编译可用的驱动", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p16-si-el-recomputerreserver-no-tiene-el-módulo-de-controlador-ko-requerido-cómo-puedo-compilar-un-controlador-utilizable", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q16-se-o-recomputerreserver-não-tiver-o-módulo-de-driver-ko-necessário-como-posso-compilar-um-driver-utilizável"}
      },
    ],
  },
  {
    Icon: HelpCircleIcon,
    title: {en: "Others", ja: "その他", zh: "其他", es: "Otros", pt: "Outros"},
    items: [
      {
        title: {en: "How to establish communication between Jetson and EtherCAT devices?", ja: "Jetson と EtherCAT デバイス間で通信を確立するにはどうすればよいですか？", zh: "如何在 Jetson 与 EtherCAT 设备之间建立通信？", es: "¿Cómo establecer comunicación entre Jetson y dispositivos EtherCAT?", pt: "Como estabelecer comunicação entre o Jetson e dispositivos EtherCAT?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q19how-to-establish-communication-between-jetson-and-ethercat-devices", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q19jetson-と-ethercat-デバイス間で通信を確立するにはどうすればよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q19如何在-jetson-与-ethercat-设备之间建立通信", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p19cómo-establecer-comunicación-entre-jetson-y-dispositivos-ethercat", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q19como-estabelecer-comunicação-entre-o-jetson-e-dispositivos-ethercat"}
      },
      {
        title: {en: "What AI models can I deploy on my Jetson device and how?", ja: "Jetson デバイス上でどのような AI モデルをデプロイでき、どのように行えばよいですか？", zh: "我可以在 Jetson 设备上部署哪些 AI 模型，以及如何部署？", es: "¿Qué modelos de IA puedo desplegar en mi dispositivo Jetson y cómo?", pt: "Quais modelos de IA posso implantar no meu dispositivo Jetson e como?"},
        url: {en: "https://wiki.seeedstudio.com/Jetson_FAQ/#q24-what-ai-models-can-i-deploy-on-my-jetson-device-and-how", ja: "https://wiki.seeedstudio.com/ja/Jetson_FAQ/#q24-jetson-デバイス上でどのような-ai-モデルをデプロイできどのように行えばよいですか", zh: "https://wiki.seeedstudio.com/cn/Jetson_FAQ/#q24-我可以在-jetson-设备上部署哪些-ai-模型以及如何部署", es: "https://wiki.seeedstudio.com/es/Jetson_FAQ/#p24-qué-modelos-de-ia-puedo-desplegar-en-mi-dispositivo-jetson-y-cómo", pt: "https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/#q24-quais-modelos-de-ia-posso-implantar-no-meu-dispositivo-jetson-e-como"}
      },
    ],
  },
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
      tabs: ['Carrier Board', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Rugged', 'reServer', 'Others']
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
    devTool: {
      title: 'Seeed Jetson DevelopTool',
      desc: 'A desktop GUI that streamlines everyday Jetson developer workflows',
      subtitle: 'New Developer Tool',
      mainTitle: 'Seeed-Jetson-DevelopTool',
      mainDesc: 'One-click tooling for flashing, monitoring, and managing Seeed Jetson devices — now with Windows flashing via WSL. The tool handles the WSL setup for you, so you can flash straight from your Windows PC.',
      videoTitle: 'See it in action',
      features: [
        { icon: '🪟', text: 'Flash on Windows via WSL — auto-configured, no manual setup' },
        { icon: '⚡', text: 'One-click JetPack flashing for Seeed carrier boards' },
        { icon: '📊', text: 'Real-time device status and resource monitoring' },
        { icon: '🖥️', text: 'Cross-platform desktop GUI (Windows / Linux)' }
      ],
      tags: ['Windows Support', 'Open Source', 'New'],
      githubCta: 'View on GitHub',
      videoCta: 'Watch Demo'
    },
    examples: {
      title: 'One-Command Deployment',
      desc: 'Deploy AI models instantly with jetson-examples',
      installTitle: 'Install jetson-examples',
      deployTitle: 'Deploy LLaVA',
      modelsTitle: 'Supported Models',
      deployCta: 'One-Click Deploy',
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
        { value: '10', label: 'Learning Modules' },
        { value: '70+', label: 'Code Examples' },
        { value: '6', label: 'Application Categories' }
      ],
      modules: [
        { key: 'cv', icon: '👁️', title: 'Computer Vision', desc: 'Object detection, image classification, and video analytics applications', topics: ['YOLO', 'OpenCV', 'Detection'] },
        { key: 'gen', icon: '🤖', title: 'Generative AI', desc: 'Deploy LLMs, multimodal models, and AI chatbots on Jetson', topics: ['LLM', 'VLM', 'Chatbot'] },
        { key: 'devtools', icon: '🛠️', title: 'Developer Tools', desc: 'Development tools and utilities for Jetson platform', topics: ['Docker', 'Tools', 'Dev'] },
        { key: 'multimodal', icon: '🔄', title: 'Multimodal AI', desc: 'Combine vision, language, and audio for intelligent applications', topics: ['VLM', 'Audio', 'Fusion'] },
        { key: 'physical', icon: '🏭', title: 'Physical AI', desc: 'Build autonomous robots, AMR systems, and robotic arm applications', topics: ['ROS2', 'Robot', 'Control'] },
        { key: 'managed', icon: '☁️', title: 'Managed Services', desc: 'Cloud-based management and deployment services for Jetson', topics: ['Cloud', 'OTA', 'Manage'] }
      ],
      cta: 'GitHub Repository',
      ctaOnline: 'Read Online Tutorial'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Support Center',
      desc: 'Find answers to common questions about Jetson products, troubleshooting, system upgrades, and more. Get help with installation, flashing, and hardware compatibility issues.',
      cta: 'View Full FAQ',
      commonIssues: 'Common Issues',
      commonIssuesDesc: 'Quick answers to frequently encountered problems',
      searchPlaceholder: 'Search frequently asked questions...',
      searchResults: '{count} results found',
      searchEmpty: 'No results found. Try a different keyword or browse the full FAQ.',
      viewAll: 'View all',
      faqUrl: 'https://wiki.seeedstudio.com/Jetson_FAQ/',
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
      tabs: ['キャリアボード', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Rugged', 'reServer', 'Others']
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
    devTool: {
      title: 'Seeed Jetson DevelopTool',
      desc: 'Jetson 開発の日常作業を効率化するデスクトップ GUI ツール',
      subtitle: '新しい開発者ツール',
      mainTitle: 'Seeed-Jetson-DevelopTool',
      mainDesc: 'Seeed Jetson デバイスのフラッシュ、モニタリング、管理をワンクリックで。WSL による Windows 書き込みに対応し、WSL のセットアップはツールが自動で処理するため、Windows PC から直接フラッシュできます。',
      videoTitle: '動作デモ',
      features: [
        { icon: '🪟', text: 'WSL 経由で Windows から書き込み — セットアップは自動' },
        { icon: '⚡', text: 'Seeed キャリアボード向けワンクリック JetPack 書き込み' },
        { icon: '📊', text: 'デバイス状態とリソースをリアルタイムで監視' },
        { icon: '🖥️', text: 'クロスプラットフォーム GUI (Windows / Linux)' }
      ],
      tags: ['Windows 対応', 'オープンソース', 'New'],
      githubCta: 'GitHub で見る',
      videoCta: 'デモ動画を視聴'
    },
    examples: {
      title: 'ワンコマンドデプロイメント',
      desc: 'jetson-examplesでAIモデルを即座にデプロイ',
      installTitle: 'jetson-examplesをインストール',
      deployTitle: 'LLaVAをデプロイ',
      modelsTitle: 'サポートされているモデル',
      deployCta: 'ワンクリックでデプロイ',
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
        { value: '10', label: '学習モジュール' },
        { value: '70+', label: 'コード例' },
        { value: '6', label: 'アプリケーションカテゴリー' }
      ],
      modules: [
        { key: 'cv', icon: '👁️', title: 'コンピュータビジョン', desc: '物体検出、画像分類、ビデオ分析アプリケーション', topics: ['YOLO', 'OpenCV', 'Detection'] },
        { key: 'gen', icon: '🤖', title: '生成AI', desc: 'JetsonでLLM、マルチモーダルモデル、AIチャットボットをデプロイ', topics: ['LLM', 'VLM', 'Chatbot'] },
        { key: 'devtools', icon: '🛠️', title: '開発者ツール', desc: 'Jetsonプラットフォーム向け開発ツールとユーティリティ', topics: ['Docker', 'Tools', 'Dev'] },
        { key: 'multimodal', icon: '🔄', title: 'マルチモーダルAI', desc: '視覚、言語、音声を組み合わせたインテリジェントアプリケーション', topics: ['VLM', 'Audio', 'Fusion'] },
        { key: 'physical', icon: '🏭', title: '物理AI', desc: '自律型ロボット、AMRシステム、ロボットアームアプリケーションを構築', topics: ['ROS2', 'Robot', 'Control'] },
        { key: 'managed', icon: '☁️', title: 'マネージドサービス', desc: 'Jetson向けクラウドベース管理・デプロイメントサービス', topics: ['Cloud', 'OTA', 'Manage'] }
      ],
      cta: 'GitHub リポジトリ',
      ctaOnline: 'オンラインチュートリアルを読む'
    },
    faq: {
      title: 'よくある質問',
      subtitle: 'サポートセンター',
      desc: 'Jetson製品、トラブルシューティング、システムアップグレードなどに関する一般的な質問の回答を見つけます。インストール、フラッシュ、ハードウェア互換性の問題に関するヘルプを取得します。',
      cta: 'FAQを見る',
      commonIssues: '一般的な問題',
      commonIssuesDesc: 'よく発生する問題への迅速な回答',
      searchPlaceholder: 'よくある質問を検索...',
      searchResults: '{count} 件の結果が見つかりました',
      searchEmpty: '該当する結果が見つかりませんでした。別のキーワードをお試しいただくか、FAQ 全体をご覧ください。',
      viewAll: 'すべて見る',
      faqUrl: 'https://wiki.seeedstudio.com/ja/Jetson_FAQ/',
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
      tabs: ['载板', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Rugged', 'reServer', 'Others']
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
    devTool: {
      title: 'Seeed Jetson 开发工具',
      desc: '简化 Jetson 日常开发工作流的桌面 GUI 工具',
      subtitle: '全新开发者工具',
      mainTitle: 'Seeed-Jetson-DevelopTool',
      mainDesc: '一键完成 Seeed Jetson 设备的刷机、监控与管理。现已支持基于 WSL 的 Windows 刷机，工具会自动帮你配置好 WSL 环境，直接在 Windows 电脑上即可完成刷机。',
      videoTitle: '演示视频',
      features: [
        { icon: '🪟', text: '基于 WSL 的 Windows 刷机，WSL 自动配置无需手动搭建' },
        { icon: '⚡', text: '为 Seeed 载板提供一键 JetPack 刷机' },
        { icon: '📊', text: '实时监控设备状态与资源占用' },
        { icon: '🖥️', text: '跨平台桌面 GUI（Windows / Linux）' }
      ],
      tags: ['支持 Windows', '开源', '新工具'],
      githubCta: '在 GitHub 查看',
      videoCta: '观看演示'
    },
    examples: {
      title: '一键部署',
      desc: '使用 jetson-examples 即时部署 AI 模型',
      installTitle: '安装 jetson-examples',
      deployTitle: '部署 LLaVA',
      modelsTitle: '支持的模型',
      deployCta: '一键部署',
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
        { value: '10', label: '学习模块' },
        { value: '70+', label: '代码示例' },
        { value: '6', label: '应用分类' }
      ],
      modules: [
        { key: 'cv', icon: '👁️', title: '计算机视觉', desc: '目标检测、图像分类和视频分析应用', topics: ['YOLO', 'OpenCV', '检测'] },
        { key: 'gen', icon: '🤖', title: '生成式 AI', desc: '在 Jetson 上部署大语言模型、多模态模型和 AI 聊天机器人', topics: ['LLM', 'VLM', '聊天机器人'] },
        { key: 'devtools', icon: '🛠️', title: '开发者工具', desc: 'Jetson 平台的开发工具和实用程序', topics: ['Docker', 'Tools', 'Dev'] },
        { key: 'multimodal', icon: '🔄', title: '多模态 AI', desc: '结合视觉、语言和音频的智能应用', topics: ['VLM', '音频', '融合'] },
        { key: 'physical', icon: '🏭', title: '物理 AI', desc: '构建自主机器人、AMR 系统和机械臂应用', topics: ['ROS2', '机器人', '控制'] },
        { key: 'managed', icon: '☁️', title: '托管服务', desc: 'Jetson 的云端管理和部署服务', topics: ['Cloud', 'OTA', '管理'] }
      ],
      cta: 'GitHub 仓库',
      ctaOnline: '在线阅读教程'
    },
    faq: {
      title: '常见问题',
      subtitle: '支持中心',
      desc: '查找有关 Jetson 产品、故障排除、系统升级等常见问题的答案。获取有关安装、刷机和硬件兼容性问题的帮助。',
      cta: '查看完整 FAQ',
      commonIssues: '常见问题',
      commonIssuesDesc: '快速解答经常遇到的问题',
      searchPlaceholder: '搜索常见问题...',
      searchResults: '找到 {count} 个相关问题',
      searchEmpty: '未找到相关问题，请尝试其他关键词，或查看完整 FAQ。',
      viewAll: '查看全部',
      faqUrl: 'https://wiki.seeedstudio.com/cn/Jetson_FAQ/',
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
      tabs: ['Carrier Board', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Rugged', 'reServer', 'Others']
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
    devTool: {
      title: 'Seeed Jetson DevelopTool',
      desc: 'Una GUI de escritorio que agiliza los flujos de trabajo diarios del desarrollador Jetson',
      subtitle: 'Nueva Herramienta para Desarrolladores',
      mainTitle: 'Seeed-Jetson-DevelopTool',
      mainDesc: 'Flasheo, monitoreo y gestión de dispositivos Seeed Jetson con un solo clic. Ahora con flasheo en Windows mediante WSL: la herramienta configura WSL por ti, para que flashees directamente desde tu PC con Windows.',
      videoTitle: 'Míralo en acción',
      features: [
        { icon: '🪟', text: 'Flasheo en Windows vía WSL — configuración automática' },
        { icon: '⚡', text: 'Flasheo JetPack con un clic para carrier boards Seeed' },
        { icon: '📊', text: 'Estado del dispositivo y monitoreo de recursos en tiempo real' },
        { icon: '🖥️', text: 'GUI de escritorio multiplataforma (Windows / Linux)' }
      ],
      tags: ['Soporte Windows', 'Código Abierto', 'Nuevo'],
      githubCta: 'Ver en GitHub',
      videoCta: 'Ver Demo'
    },
    examples: {
      title: 'Despliegue con Un Comando',
      desc: 'Despliegue modelos de IA al instante con jetson-examples',
      installTitle: 'Instalar jetson-examples',
      deployTitle: 'Desplegar LLaVA',
      modelsTitle: 'Modelos Soportados',
      deployCta: 'Despliegue con un clic',
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
        { value: '10', label: 'Módulos' },
        { value: '70+', label: 'Ejemplos' },
        { value: '6', label: 'Categorías' }
      ],
      modules: [
        { key: 'cv', icon: '👁️', title: 'Visión Computacional', desc: 'Detección de objetos, clasificación de imágenes y análisis de video', topics: ['YOLO', 'OpenCV', 'Detección'] },
        { key: 'gen', icon: '🤖', title: 'IA Generativa', desc: 'Despliegue LLMs, modelos multimodales y chatbots de IA en Jetson', topics: ['LLM', 'VLM', 'Chatbot'] },
        { key: 'devtools', icon: '🛠️', title: 'Herramientas de Desarrollo', desc: 'Herramientas y utilidades de desarrollo para la plataforma Jetson', topics: ['Docker', 'Tools', 'Dev'] },
        { key: 'multimodal', icon: '🔄', title: 'IA Multimodal', desc: 'Combine visión, lenguaje y audio para aplicaciones inteligentes', topics: ['VLM', 'Audio', 'Fusión'] },
        { key: 'physical', icon: '🏭', title: 'IA Física', desc: 'Construya robots autónomos, sistemas AMR y aplicaciones de brazos robóticos', topics: ['ROS2', 'Robot', 'Control'] },
        { key: 'managed', icon: '☁️', title: 'Servicios Gestionados', desc: 'Servicios de gestión y despliegue basados en la nube para Jetson', topics: ['Cloud', 'OTA', 'Gestionar'] }
      ],
      cta: 'Repositorio GitHub',
      ctaOnline: 'Leer tutorial en línea'
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Centro de Soporte',
      desc: 'Encuentre respuestas a preguntas comunes sobre productos Jetson, solución de problemas, actualizaciones del sistema y más. Obtenga ayuda con la instalación, el flasheo y los problemas de compatibilidad de hardware.',
      cta: 'Ver FAQ Completo',
      commonIssues: 'Problemas Comunes',
      commonIssuesDesc: 'Respuestas rápidas a problemas frecuentes',
      searchPlaceholder: 'Buscar preguntas frecuentes...',
      searchResults: '{count} resultados encontrados',
      searchEmpty: 'No se encontraron resultados. Pruebe con otra palabra clave o consulte el FAQ completo.',
      viewAll: 'Ver todo',
      faqUrl: 'https://wiki.seeedstudio.com/es/Jetson_FAQ/',
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
  pt: {
    tabs: {
      products: 'Produtos',
      demo: 'Demo',
      faq: 'FAQ',
      new: 'New'
    },
    banner: {
      title: 'Guia de Dispositivos Edge AI com NVIDIA® Jetson™',
      subtitle: 'Série NVIDIA Jetson',
      desc: 'O NVIDIA® Jetson™ oferece IA de alto desempenho na borda com módulos energeticamente eficientes que utilizam o software NVIDIA CUDA-X™. Como revendedor autorizado e parceiro Elite, a Seeed fornece uma solução abrangente de desenvolvimento de IA na borda, aproveitando mais de 15 anos de experiência em hardware.',
      cta: 'Explorar Dispositivos'
    },
    usage1: {
      title: 'Gravação do JetPack e Uso do Hardware',
      desc: 'A maioria dos produtos reComputer Jetson vem com JetPack pré-instalado. Guias de gravação estão disponíveis para todos os dispositivos.',
      tabs: ['Carrier Board', 'Super', 'Mini', 'Robotics', 'Classic', 'Industrial', 'Rugged', 'reServer', 'Others']
    },
    flashGuide: {
      title: 'Guia de Gravação do JetPack',
      desc: 'Guia completo passo a passo para gravar o JetPack no seu dispositivo Jetson',
      ctaTitle: 'Guia Completo de Gravação',
      ctaDesc: 'Selecione seu dispositivo e siga nossas instruções completas de gravação. Inclui preparação do dispositivo, modo de recuperação, instalação de dependências e comandos de gravação.',
      features: ['Todas as Séries de Dispositivos', 'Instruções Passo a Passo', 'Solução de Problemas']
    },
    bsp: {
      title: 'Customização do BSP',
      desc: 'BSP pronto para produção para carrier boards Seeed Jetson',
      mainTitle: 'Linux_for_Tegra',
      mainDesc: 'Um repositório BSP abrangente para customizar e implantar sistemas Jetson em escala. Inclui customização de kernel, configuração de device tree, integração com Yocto/Buildroot e ferramentas otimizadas para ambientes de produção.',
      supportedHardware: 'Hardware Compatível',
      hardwareList: [
        'reComputer J4011/J4012 (Orin NX)',
        'reComputer Industrial J4011/J4012',
        'reComputer J3011/J3010 (Orin Nano)',
        'reComputer Industrial J3011/J3010',
        'reServer Industrial J4011/J4012',
        'reServer Industrial J3011/J3010'
      ],
      features: [
        { icon: '🐧', text: 'Customização de kernel com suporte a compilação cruzada' },
        { icon: '🌳', text: 'Overlays de device tree para hardware de carrier boards' },
        { icon: '📦', text: 'Integração com Yocto & Buildroot para imagens de produção' },
        { icon: '💻', text: 'Drivers de hardware para todos os carrier boards da Seeed' },
        { icon: '⚡', text: 'Ferramentas otimizadas de gravação em SSD para produção em massa' }
      ],
      tags: ['Código Aberto', 'JetPack 6.2', 'Pronto para Produção']
    },
    devTool: {
      title: 'Seeed Jetson DevelopTool',
      desc: 'Uma GUI de desktop que simplifica os fluxos diários de desenvolvimento no Jetson',
      subtitle: 'Nova Ferramenta para Desenvolvedores',
      mainTitle: 'Seeed-Jetson-DevelopTool',
      mainDesc: 'Gravação, monitoramento e gestão de dispositivos Seeed Jetson com um clique. Agora com gravação no Windows via WSL: a ferramenta configura o WSL automaticamente, para você gravar direto do seu PC com Windows.',
      videoTitle: 'Veja em ação',
      features: [
        { icon: '🪟', text: 'Gravação no Windows via WSL — configuração automática' },
        { icon: '⚡', text: 'Gravação de JetPack com um clique para carrier boards Seeed' },
        { icon: '📊', text: 'Status do dispositivo e monitoramento de recursos em tempo real' },
        { icon: '🖥️', text: 'GUI de desktop multiplataforma (Windows / Linux)' }
      ],
      tags: ['Suporte a Windows', 'Código Aberto', 'Novo'],
      githubCta: 'Ver no GitHub',
      videoCta: 'Assistir Demo'
    },
    examples: {
      title: 'Implantação com Um Comando',
      desc: 'Implante modelos de IA instantaneamente com jetson-examples',
      installTitle: 'Instalar jetson-examples',
      deployTitle: 'Implantar LLaVA',
      modelsTitle: 'Modelos Suportados',
      deployCta: 'Implantar com um clique',
      features: ['20+ Exemplos', 'Um Comando', 'Código Aberto'],
      quickLinks: {
        github: 'Repositório GitHub',
        docs: 'Documentação Completa',
        models: 'Lista de Modelos'
      }
    },
    demoHero: {
      title: 'Implantação de IA com Um Comando',
      desc: 'Implante mais de 20 modelos de IA com um único comando. De LLMs à visão computacional, execute IA de ponta no seu dispositivo Jetson instantaneamente. Nenhuma configuração complexa é necessária.',
      cta: 'Começar'
    },
    beginnerGuide: {
      title: 'Guia para Iniciantes',
      desc: 'Recursos completos de aprendizado, dos fundamentos do Jetson a aplicações avançadas de IA',
      mainTitle: 'reComputer Jetson for Beginners',
      mainDesc: 'Uma jornada completa de aprendizado cobrindo fundamentos do Jetson, visão computacional, IA generativa, robótica e implantação na borda. Perfeito para desenvolvedores iniciantes em IA de borda.',
      stats: [
        { value: '10', label: 'Módulos de Aprendizado' },
        { value: '70+', label: 'Exemplos de Código' },
        { value: '6', label: 'Categorias de Aplicação' }
      ],
      modules: [
        { key: 'cv', icon: '👁️', title: 'Visão Computacional', desc: 'Detecção de objetos, classificação de imagens e aplicações de análise de vídeo', topics: ['YOLO', 'OpenCV', 'Detecção'] },
        { key: 'gen', icon: '🤖', title: 'IA Generativa', desc: 'Implante LLMs, modelos multimodais e chatbots de IA no Jetson', topics: ['LLM', 'VLM', 'Chatbot'] },
        { key: 'devtools', icon: '🛠️', title: 'Ferramentas para Desenvolvedores', desc: 'Ferramentas e utilitários de desenvolvimento para a plataforma Jetson', topics: ['Docker', 'Tools', 'Dev'] },
        { key: 'multimodal', icon: '🔄', title: 'IA Multimodal', desc: 'Combine visão, linguagem e áudio para aplicações inteligentes', topics: ['VLM', 'Audio', 'Fusion'] },
        { key: 'physical', icon: '🏭', title: 'IA Física', desc: 'Construa robôs autônomos, sistemas AMR e aplicações com braços robóticos', topics: ['ROS2', 'Robot', 'Control'] },
        { key: 'managed', icon: '☁️', title: 'Serviços Gerenciados', desc: 'Serviços baseados em nuvem para gerenciamento e implantação no Jetson', topics: ['Cloud', 'OTA', 'Manage'] }
      ],
      cta: 'Repositório GitHub',
      ctaOnline: 'Ler tutorial online'
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Central de Suporte',
      desc: 'Encontre respostas para dúvidas comuns sobre produtos Jetson, solução de problemas, atualizações do sistema e muito mais. Obtenha ajuda com instalação, gravação e problemas de compatibilidade de hardware.',
      cta: 'Ver FAQ Completo',
      commonIssues: 'Problemas Comuns',
      commonIssuesDesc: 'Respostas rápidas para problemas encontrados com frequência',
      searchPlaceholder: 'Pesquisar perguntas frequentes...',
      searchResults: '{count} resultados encontrados',
      searchEmpty: 'Nenhum resultado encontrado. Tente outra palavra-chave ou consulte o FAQ completo.',
      viewAll: 'Ver tudo',
      faqUrl: 'https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/',
      installation: 'Instalação e Configuração',
      installationDesc: 'Guias para começar com seu dispositivo Jetson'
    },
    community: {
      title: 'Projetos da Comunidade',
      desc: 'Explore projetos e tutoriais do mundo real criados por nossa comunidade usando dispositivos Jetson. De visão computacional a IA generativa, encontre inspiração para sua próxima aplicação de IA na borda.',
      all: 'Todos',
      cv: 'Visão Computacional',
      gen: 'IA Generativa',
      devtools: 'Ferramentas para Desenvolvedores',
      multimodal: 'IA Multimodal',
      physical: 'IA Física',
      managed: 'Serviços Gerenciados',
      searchPlaceholder: 'Buscar projetos...',
      searchResults: '{count} projetos encontrados',
      prev: '← Anterior',
      next: 'Próximo →'
    },
    common: {
      clickMe: 'Clique aqui',
      moreDetail: 'Mais detalhes',
      viewOnGithub: 'Ver no GitHub',
      tutorialsAndGuides: 'Tutoriais e Guias',
      aiModels: '20+ Modelos de IA',
      learnMore: 'Saiba mais →'
    }
  },
};

const configMap = {
  en: config_en,
  ja: config_ja,
  zh: config_zh,
  es: config_es,
  pt: config_pt,
};

const getLocaleValue = <T,>(obj: Partial<Record<Lang, T>> | undefined, lang: Lang, fallback?: T): T | undefined => {
  if (!obj) return fallback;
  return obj[lang] ?? obj.en ?? fallback;
};

const RecomputerPage = ({ lang }: Props) => {
  const { colorMode } = useColorMode();
  const location = useLocation();

  const resolvedLang: Lang = lang ?? getLangFromPath(location.pathname);
  const t = translations[resolvedLang];
  const config = configMap[resolvedLang];

  const [activePage, setActivePage] = useState<'products' | 'demo' | 'faq' | 'community' | 'devices'>('products');
  const [activeCategory, setActiveCategory] = useState<CommunityCategoryKey>('all');
  const [activeDeviceTab, setActiveDeviceTab] = useState(0);

  // Sidebar "Applications" links use ?tab=demo&category=<key>; keep state in sync with the URL.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    const category = params.get('category');
    const devicetab = params.get('devicetab');
    if (tab === 'demo' || tab === 'products' || tab === 'faq' || tab === 'community' || tab === 'devices') {
      setActivePage(tab);
      if (tab === 'community') {
        setExpandedSections(prev => ({ ...prev, community: true }));
      }
      if (tab === 'devices') {
        setExpandedSections(prev => ({ ...prev, devices: true }));
      }
    }
    // 设备网格 tab 深链：?tab=devices&devicetab=N（0=Carrier Board … 8=Others）
    if (devicetab !== null && /^[0-8]$/.test(devicetab)) {
      setActiveDeviceTab(Number(devicetab));
    }
    if (
      category === 'cv' ||
      category === 'gen' ||
      category === 'devtools' ||
      category === 'multimodal' ||
      category === 'physical' ||
      category === 'managed'
    ) {
      setActiveCategory(category);
    }
  }, [location.search]);

  const [searchQuery, setSearchQuery] = useState('');
  const [faqQuery, setFaqQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const [expandedSections, setExpandedSections] = useState({
    examples: true,
    devices: true,
    flashGuide: true,
    bsp: true,
    devTool: true,
    beginnerGuide: true,
    community: true,
    faq: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CollapseButton = ({
    section,
    isExpanded
  }: {
    section: keyof typeof expandedSections;
    isExpanded: boolean;
  }) => (
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
      case 'cv':
        return config_auto.communityList_cv;
      case 'gen':
        return config_auto.communityList_gen;
      case 'devtools':
        return config_auto.developerToolsList;
      case 'multimodal':
        return config_auto.multimodalList;
      case 'physical':
        return config_auto.physicalAIList;
      case 'managed':
        return config_auto.managedServicesList;
      default:
        return [
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
    return allProjects.filter((project: CommunityProject) =>
      (getLocaleValue(project.name, resolvedLang, project.name?.en || '') || '').toLowerCase().includes(query) ||
      (getLocaleValue(project.category, resolvedLang, []) || []).some((cat: string) => cat.toLowerCase().includes(query)) ||
      (project.category?.en || []).some((cat: string) => cat.toLowerCase().includes(query))
    );
  };

  const getPaginatedProjects = () => {
    const filtered = getFilteredProjects();
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const totalPages = Math.ceil(getFilteredProjects().length / ITEMS_PER_PAGE);

  const handleCategoryChange = (catId: CommunityCategoryKey) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // FAQ categories filtered by the search query (matches question text in
  // the current locale; categories without matches are dropped).
  const getFilteredFaqCategories = () => {
    const query = faqQuery.trim().toLowerCase();
    return FAQ_CATEGORIES
      .map((cat) => ({
        ...cat,
        items: query
          ? cat.items.filter((item) => {
              const title = getLocaleValue(item.title, resolvedLang, item.title.en) || '';
              return title.toLowerCase().includes(query);
            })
          : cat.items
      }))
      .filter((cat) => cat.items.length > 0);
  };

  const filteredFaqCount = getFilteredFaqCategories().reduce(
    (total, cat) => total + cat.items.length,
    0
  );

  // Shared Community Projects section, used by the demo tab and the
  // standalone community view (?tab=community, reached from the sidebar
  // "Applications" link).
  const communityProjectsSection = (
    <div className={styles.section} id="community-projects">
      <div className={styles.section_header}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 className={styles.section_title}>{t.community.title}</h2>
          <p className={styles.section_description}>{t.community.desc}</p>
        </div>
        <CollapseButton section="community" isExpanded={expandedSections.community} />
      </div>

      {expandedSections.community && (
        <>
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
                  onClick={() => {
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
            <span className={styles.search_results}>
              {t.community.searchResults.replace('{count}', String(getFilteredProjects().length))}
            </span>
          </div>

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

          <div className={styles.project_grid}>
            {getPaginatedProjects().map((project: CommunityProject, idx: number) => (
              <a
                key={idx}
                href={getLocaleValue(project.URL, resolvedLang, project.URL?.en)}
                target="_blank"
                rel="noreferrer"
                className={styles.project_card}
              >
                <div className={styles.project_image}>
                  <img
                    src={project.img}
                    alt={getLocaleValue(project.name, resolvedLang, project.name?.en || '')}
                  />
                </div>
                <div className={styles.project_content}>
                  <span className={styles.project_category}>
                    {getLocaleValue(project.category, resolvedLang, project.category?.en || [])?.[0] || 'Jetson'}
                  </span>
                  <h3 className={styles.project_title}>
                    {getLocaleValue(project.name, resolvedLang, project.name?.en || '')}
                  </h3>
                  {getLocaleValue(project.description, resolvedLang, '') && (
                    <p className={styles.project_description}>
                      {getLocaleValue(project.description, resolvedLang, project.description?.en || '')}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>

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
  );

  // Shared "Jetpack Flash and Hardware Usage" section, used by the products
  // tab and the standalone devices view (?tab=devices, reached from the
  // sidebar "Devices" link).
  const devicesSection = (
    <div className={styles.section} id="devices">
      <div className={styles.section_header}>
        <div style={{ flex: 1 }}>
          <h2 className={styles.section_title}>{t.usage1.title}</h2>
          <p className={styles.section_description}>{t.usage1.desc}</p>
        </div>
        <CollapseButton section="devices" isExpanded={expandedSections.devices} />
      </div>

      <a
        href={`${LANG_PATH_PREFIX[resolvedLang]}/flash/jetpack_to_selected_product`}
        className={styles.flash_guide_promo}
      >
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

          {expandedSections.devices && (
            <>
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
            {activeDeviceTab === 0 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.carrier.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 1 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.super.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 2 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.mini.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 3 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.robotics.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 4 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.classic.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 5 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.industrial.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 6 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.rugged.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 7 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.reserver.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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

            {activeDeviceTab === 8 && (
              <>
                {ALL_PRODUCTS.filter(PRODUCT_CATEGORIES.other.filter).map((product: ProductOption) => (
                  <a
                    key={product.value}
                    href={getLocaleValue(product.interfaceUsage, resolvedLang, product.interfaceUsage?.en)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.device_card}
                  >
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
  );

  return (
    <div className={clsx(styles.jetson_page, styles[colorMode])}>
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

      {activePage === 'devices' && (
        <div className={styles.page_content}>
          {devicesSection}
        </div>
      )}

      {activePage === 'products' && (
        <div className={styles.page_content}>
          <div className={styles.hero_section}>
            <div className={styles.hero_content}>
              <div className={styles.hero_subtitle}>{t.banner.subtitle}</div>
              <h1>{t.banner.title}</h1>
              <p className={styles.hero_description}>{t.banner.desc}</p>
              <a href="#devices" className={styles.hero_cta}>
                <span>{t.banner.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className={styles.hero_image}>
              <img src="https://files.seeedstudio.com/wiki/other/2026-2-Product-1.png" alt="NVIDIA Jetson Devices" />
            </div>
          </div>

          {devicesSection}

          <div className={styles.section}>
            <div className={styles.section_header}>
              <div>
                <h2 className={styles.section_title}>{t.devTool.title}</h2>
                <p className={styles.section_description}>{t.devTool.desc}</p>
              </div>
              <CollapseButton section="devTool" isExpanded={expandedSections.devTool} />
            </div>

            {expandedSections.devTool && (
              <div className={styles.devtool_container}>
                <div className={styles.devtool_card}>
                  <div className={styles.devtool_info}>
                    <div className={styles.devtool_header}>
                      <span className={styles.devtool_icon}><WrenchIcon size={32} /></span>
                      <div className={styles.devtool_title_group}>
                        <span className={styles.devtool_subtitle}>
                          <SparklesIcon size={14} /> {t.devTool.subtitle}
                        </span>
                        <span className={styles.devtool_main_title}>{t.devTool.mainTitle}</span>
                      </div>
                    </div>

                    <p className={styles.devtool_description}>{t.devTool.mainDesc}</p>

                    <div className={styles.devtool_features}>
                      {t.devTool.features.map((feature, idx) => (
                        <div key={idx} className={styles.devtool_feature_item}>
                          <span className={styles.devtool_feature_icon}>{feature.icon}</span>
                          <span className={styles.devtool_feature_text}>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.devtool_tags_row}>
                      {t.devTool.tags.map((tag, idx) => (
                        <span key={idx} className={styles.devtool_tag}>{tag}</span>
                      ))}
                    </div>

                    <div className={styles.devtool_actions}>
                      <a
                        href="https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.devtool_cta_primary}
                      >
                        <span>{t.devTool.githubCta}</span>
                        <span>→</span>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=8_SjIEZI2lQ"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.devtool_cta_secondary}
                      >
                        <span>▶</span>
                        <span>{t.devTool.videoCta}</span>
                      </a>
                    </div>
                  </div>

                  <div className={styles.devtool_video}>
                    <div className={styles.devtool_video_label}>{t.devTool.videoTitle}</div>
                    <div className={styles.devtool_video_frame}>
                      <iframe
                        src="https://www.youtube.com/embed/8_SjIEZI2lQ"
                        title="Seeed Jetson DevelopTool Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

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
                <a
                  href="https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.beginner_promo_card}
                >
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

                <div className={styles.beginner_modules_grid}>
                  {t.beginnerGuide.modules.map((module, idx) => {
                    const ModuleIcons = [EyeIcon, BotIcon, WrenchIcon, RefreshIcon, FactoryIcon, CloudIcon];
                    const ModuleIcon = ModuleIcons[idx];
                    const categoryKey = module.key as CommunityCategoryKey;

                    return (
                      <a
                        key={idx}
                        className={styles.beginner_module_card}
                        href={`${LANG_PATH_PREFIX[resolvedLang]}/NVIDIA_Jetson/?tab=demo&category=${categoryKey}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActivePage('demo');
                          setActiveCategory(categoryKey);
                          setTimeout(() => {
                            const communitySection = document.getElementById('community-projects');
                            if (communitySection) {
                              communitySection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                      >
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
                      </a>
                    );
                  })}
                </div>

                <div className={styles.beginner_cta_group}>
                  <a
                    href="https://sensecraft.seeed.cc/ai-lab/tutorials/j/introduction"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.beginner_cta_button}
                  >
                    <span>{t.beginnerGuide.ctaOnline}</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.beginner_cta_button_secondary}
                  >
                    <span>{t.beginnerGuide.cta}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className={styles.section}>
            <div className={styles.section_header}>
              <div>
                <h2 className={styles.section_title}>{t.bsp.title}</h2>
                <p className={styles.section_description}>{t.bsp.desc}</p>
              </div>
              <CollapseButton section="bsp" isExpanded={expandedSections.bsp} />
            </div>

            {expandedSections.bsp && (
              <a
                href="https://github.com/Seeed-Studio/Linux_for_Tegra"
                target="_blank"
                rel="noreferrer"
                className={styles.bsp_main_card}
              >
                <div className={styles.bsp_main_content}>
                  <div className={styles.bsp_header}>
                    <span className={styles.bsp_icon}><SettingsIcon size={32} /></span>
                    <div className={styles.bsp_title_group}>
                      <span className={styles.bsp_main_title}>{t.bsp.mainTitle}</span>
                      <span className={styles.github_badge}>GitHub</span>
                    </div>
                  </div>

                  <p className={styles.bsp_description}>{t.bsp.mainDesc}</p>

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

                  <div className={styles.bsp_hardware_section}>
                    <span className={styles.bsp_hardware_label}>{t.bsp.supportedHardware}</span>
                    <div className={styles.bsp_hardware_list}>
                      {t.bsp.hardwareList.map((hw, idx) => (
                        <span key={idx} className={styles.bsp_hardware_tag}>{hw}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.bsp_tags_row}>
                    {t.bsp.tags.map((tag, idx) => (
                      <span key={idx} className={styles.bsp_tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.bsp_arrow}>→</div>
              </a>
            )}
          </div>
        </div>
      )}

      {activePage === 'demo' && (
        <div className={styles.page_content}>
          <div className={styles.hero_section}>
            <div className={styles.hero_content}>
              <div className={styles.hero_subtitle}><ZapIcon size={16} /> jetson-examples</div>
              <h1>{t.demoHero.title}</h1>
              <p className={styles.hero_description}>{t.demoHero.desc}</p>
              <a href="https://github.com/Seeed-Projects/jetson-examples" target="_blank" rel="noreferrer" className={styles.hero_cta}>
                <span>{t.demoHero.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className={styles.hero_image}>
              <div style={{ textAlign: 'center', color: '#76b900' }}><RocketIcon size={120} /></div>
            </div>
          </div>

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
                    <a href="https://github.com/Seeed-Projects/jetson-examples" target="_blank" rel="noreferrer" className={styles.github_link}>
                      <span>{t.common.viewOnGithub}</span>
                    </a>
                  </div>

                  <div className={styles.examples_code_block}>
                    <pre className={styles.code_content}>
                      <code>
                        <span className={styles.code_comment}># {t.examples.installTitle}</span>
                        <br />
                        <span className={styles.code_prompt}>$</span> pip3 install jetson-examples
                        <br /><br />
                        <span className={styles.code_comment}># {t.examples.deployTitle}</span>
                        <br />
                        <span className={styles.code_prompt}>$</span> reComputer run llava
                      </code>
                    </pre>
                  </div>

                  <a
                    href="https://sensecraft.seeed.cc/ai-lab/en/models"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.deploy_btn}
                  >
                    <span>{t.examples.deployCta}</span>
                    <span>→</span>
                  </a>

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
                  <a
                    href="https://github.com/Seeed-Projects/jetson-examples#readme"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.example_link_card}
                  >
                    <div className={styles.link_card_icon}><BookOpenIcon size={24} /></div>
                    <div className={styles.link_card_content}>
                      <h4>{t.examples.quickLinks.docs}</h4>
                      <p>{t.common.tutorialsAndGuides}</p>
                    </div>
                    <span className={styles.link_card_arrow}>→</span>
                  </a>
                  <a
                    href="https://github.com/Seeed-Projects/jetson-examples/blob/main/docs/examples.md"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.example_link_card}
                  >
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

          {communityProjectsSection}
        </div>
      )}

      {activePage === 'community' && (
        <div className={styles.page_content}>
          {communityProjectsSection}
        </div>
      )}

      {activePage === 'faq' && (
        <div className={styles.page_content}>
          <div className={styles.hero_section}>
            <div className={styles.hero_content}>
              <div className={styles.hero_subtitle}>{t.faq.subtitle}</div>
              <h1>{t.faq.title}</h1>
              <p className={styles.hero_description}>{t.faq.desc}</p>
              <a href={t.faq.faqUrl} target="_blank" rel="noreferrer" className={styles.hero_cta}>
                <span>{t.faq.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className={styles.hero_image}>
              <div style={{ textAlign: 'center', color: '#76b900' }}><HelpCircleIcon size={120} /></div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section_header}>
              <div>
                <h2 className={styles.section_title}>{t.faq.commonIssues}</h2>
                <p className={styles.section_description}>{t.faq.commonIssuesDesc}</p>
              </div>
              <CollapseButton section="faq" isExpanded={expandedSections.faq} />
            </div>

            {expandedSections.faq && (
              <>
                <div className={styles.search_container}>
                  <div className={styles.search_wrapper}>
                    <span className={styles.search_icon}>🔍</span>
                    <input
                      type="text"
                      className={styles.search_input}
                      placeholder={t.faq.searchPlaceholder}
                      value={faqQuery}
                      onChange={(e) => setFaqQuery(e.target.value)}
                    />
                    {faqQuery && (
                      <button
                        className={styles.search_clear}
                        onClick={() => setFaqQuery('')}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  <span className={styles.search_results}>
                    {t.faq.searchResults.replace('{count}', String(filteredFaqCount))}
                  </span>
                </div>

                {getFilteredFaqCategories().length === 0 ? (
                  <div className={styles.faq_empty}>{t.faq.searchEmpty}</div>
                ) : (
                  <div className={styles.faq_category_grid}>
                    {getFilteredFaqCategories().map((cat, catIdx) => {
                      const CatIcon = cat.Icon;
                      return (
                        <div key={catIdx} className={styles.faq_category_card}>
                          <div className={styles.faq_category_header}>
                            <span className={styles.faq_category_icon}><CatIcon size={22} /></span>
                            <h3 className={styles.faq_category_title}>
                              {getLocaleValue(cat.title, resolvedLang, cat.title.en)}
                            </h3>
                          </div>
                          <ul className={styles.faq_category_items}>
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a
                                  href={getLocaleValue(item.url, resolvedLang, item.url.en)}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={styles.faq_category_item}
                                >
                                  {getLocaleValue(item.title, resolvedLang, item.title.en)}
                                </a>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={t.faq.faqUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.faq_view_all}
                          >
                            {t.faq.viewAll} →
                          </a>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecomputerPage;