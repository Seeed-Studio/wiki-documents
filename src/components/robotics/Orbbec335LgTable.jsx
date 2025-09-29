import { useEffect, useMemo } from "react";
import { Table, ConfigProvider, theme } from "antd";
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';

// ✅ 多语言字典（最小修改：只翻译表头、类别/规格名、若干常见固定值）
const i18n = {
  en: {
    thCategory: 'Category',
    thSpec: 'Spec',
    thModel: 'Gemini 335Lg',

    // Categories
    catBasic: 'Basic',
    catDepth: 'Depth',
    catIR: 'IR',
    catRGB: 'RGB',
    catBuiltIn: 'Built-in Sensor',
    catElectrical: 'Electrical',
    catPhysical: 'Physical',
    catEnv: 'Environmental',
    catOthers: 'Others',

    // Spec labels
    specUseEnv: 'Use Environment',
    specTech: 'Technology',
    specBaseline: 'Baseline',
    specDataConn: 'Data Connection',
    specProtocol: 'Camera Protocol',
    specUvc: 'UVC Compliant',
    specSdk: 'SDK',

    specDepthRange: 'Depth Range [1]',
    specIdealRange: 'Ideal Range',
    specDepthResol: 'Depth Resolution @ Frame Rate',
    specDepthFov: 'Depth FOV (H × V)',
    specDepthFovD2C: 'Depth FOV (H × V) with D2C',
    specSpatialPrecision: 'Spatial Precision [2]',
    specDepthTech: 'Depth Sensor Technology',
    specDepthFilter: 'Depth Filter',

    specIrResol: 'IR Resolution @ Frame Rate',
    specIrFov: 'IR FOV (H × V)',

    specRgbResol: 'RGB Resolution@Frame Rate',
    specRgbFov: 'RGB Sensor FOV (H × V)',
    specRgbTech: 'RGB Sensor Technology',

    specImu: 'IMU',

    specPower: 'Power Consumption',
    specSupply: 'Power Supply',

    specSync: 'Multi-camera Hardware Sync',
    specDim: 'Dimensions (W × H × D)',
    specWeight: 'Weight',
    specIngress: 'Ingress Protection [4]',
    specInstall: 'Installation',

    specTemp: 'Ambient Temperature',
    specEmc: 'EMC Requirement',
    specVibration: 'Vibration',

    specLifespan: 'Lifespan [5]',

    // Common values
    valIndoorOutdoor: 'Indoor & Outdoor',
    valActPasStereo: 'Active & Passive Stereo',
    valGmslUsb3: 'GMSL2 FAKRA & USB 3',
    valUsbGmsl2: 'USB & GMSL 2',
    valYes: 'Yes',
    valOrbbecSdk: 'Orbbec SDK',
    valGlobalShutter: 'Global Shutter',
    valVisibleNirPass: 'Visible+NIR-pass',
    valSupport: 'Support',
    valIp65: 'IP65',
  },

  zh: {
    thCategory: '类别',
    thSpec: '规格',
    thModel: 'Gemini 335Lg',

    catBasic: '基础',
    catDepth: '深度',
    catIR: '红外（IR）',
    catRGB: 'RGB',
    catBuiltIn: '内置传感器',
    catElectrical: '电气特性',
    catPhysical: '物理特性',
    catEnv: '环境',
    catOthers: '其他',

    specUseEnv: '使用环境',
    specTech: '技术类型',
    specBaseline: '双目基线',
    specDataConn: '数据连接',
    specProtocol: '相机协议',
    specUvc: '是否符合 UVC',
    specSdk: 'SDK',

    specDepthRange: '深度范围 [1]',
    specIdealRange: '理想范围',
    specDepthResol: '深度分辨率 / 帧率',
    specDepthFov: '深度视场 (H × V)',
    specDepthFovD2C: 'D2C 时的深度视场 (H × V)',
    specSpatialPrecision: '空间精度 [2]',
    specDepthTech: '深度传感器技术',
    specDepthFilter: '深度滤光片',

    specIrResol: 'IR 分辨率 / 帧率',
    specIrFov: 'IR 视场 (H × V)',

    specRgbResol: 'RGB 分辨率 / 帧率',
    specRgbFov: 'RGB 视场 (H × V)',
    specRgbTech: 'RGB 传感器技术',

    specImu: 'IMU',

    specPower: '功耗',
    specSupply: '供电',

    specSync: '多机硬件同步',
    specDim: '尺寸（宽 × 高 × 厚）',
    specWeight: '重量',
    specIngress: '防护等级 [4]',
    specInstall: '安装方式',

    specTemp: '工作环境温度',
    specEmc: 'EMC 要求',
    specVibration: '振动',

    specLifespan: '使用寿命 [5]',

    // Common values
    valIndoorOutdoor: '室内与室外',
    valActPasStereo: '主/被动双目',
    valGmslUsb3: 'GMSL2 FAKRA 与 USB 3',
    valUsbGmsl2: 'USB 与 GMSL 2',
    valYes: '是',
    valOrbbecSdk: 'Orbbec SDK',
    valGlobalShutter: '全球快门',
    valVisibleNirPass: '可见光 + NIR 通行',
    valSupport: '支持',
    valIp65: 'IP65',
  },

  ja: {
    thCategory: 'カテゴリ',
    thSpec: '仕様',
    thModel: 'Gemini 335Lg',

    catBasic: '基本',
    catDepth: '深度',
    catIR: 'IR',
    catRGB: 'RGB',
    catBuiltIn: '内蔵センサー',
    catElectrical: '電気特性',
    catPhysical: '物理特性',
    catEnv: '環境',
    catOthers: 'その他',

    specUseEnv: '使用環境',
    specTech: 'テクノロジー',
    specBaseline: 'ベースライン',
    specDataConn: 'データ接続',
    specProtocol: 'カメラプロトコル',
    specUvc: 'UVC 準拠',
    specSdk: 'SDK',

    specDepthRange: '深度レンジ [1]',
    specIdealRange: '推奨レンジ',
    specDepthResol: '深度解像度 / フレームレート',
    specDepthFov: '深度 FOV (H × V)',
    specDepthFovD2C: 'D2C 時の深度 FOV (H × V)',
    specSpatialPrecision: '空間精度 [2]',
    specDepthTech: '深度センサー技術',
    specDepthFilter: '深度フィルタ',

    specIrResol: 'IR 解像度 / フレームレート',
    specIrFov: 'IR FOV (H × V)',

    specRgbResol: 'RGB 解像度 / フレームレート',
    specRgbFov: 'RGB センサー FOV (H × V)',
    specRgbTech: 'RGB センサー技術',

    specImu: 'IMU',

    specPower: '消費電力',
    specSupply: '電源',

    specSync: 'マルチカメラ・ハード同期',
    specDim: '寸法（W × H × D）',
    specWeight: '重量',
    specIngress: '保護等級 [4]',
    specInstall: '取り付け',

    specTemp: '周囲温度',
    specEmc: 'EMC 要件',
    specVibration: '振動',

    specLifespan: '寿命 [5]',

    valIndoorOutdoor: '屋内・屋外',
    valActPasStereo: 'アクティブ/パッシブステレオ',
    valGmslUsb3: 'GMSL2 FAKRA と USB 3',
    valUsbGmsl2: 'USB と GMSL 2',
    valYes: 'はい',
    valOrbbecSdk: 'Orbbec SDK',
    valGlobalShutter: 'グローバルシャッター',
    valVisibleNirPass: '可視+NIR パス',
    valSupport: '対応',
    valIp65: 'IP65',
  },

  es: {
    thCategory: 'Categoría',
    thSpec: 'Especificación',
    thModel: 'Gemini 335Lg',

    catBasic: 'Básico',
    catDepth: 'Profundidad',
    catIR: 'IR',
    catRGB: 'RGB',
    catBuiltIn: 'Sensor integrado',
    catElectrical: 'Eléctrico',
    catPhysical: 'Físico',
    catEnv: 'Ambiental',
    catOthers: 'Otros',

    specUseEnv: 'Entorno de uso',
    specTech: 'Tecnología',
    specBaseline: 'Línea base',
    specDataConn: 'Conexión de datos',
    specProtocol: 'Protocolo de cámara',
    specUvc: 'Compatible con UVC',
    specSdk: 'SDK',

    specDepthRange: 'Rango de profundidad [1]',
    specIdealRange: 'Rango ideal',
    specDepthResol: 'Resolución de profundidad / FPS',
    specDepthFov: 'FOV de profundidad (H × V)',
    specDepthFovD2C: 'FOV de profundidad (H × V) con D2C',
    specSpatialPrecision: 'Precisión espacial [2]',
    specDepthTech: 'Tecnología del sensor de profundidad',
    specDepthFilter: 'Filtro de profundidad',

    specIrResol: 'Resolución IR / FPS',
    specIrFov: 'FOV IR (H × V)',

    specRgbResol: 'Resolución RGB / FPS',
    specRgbFov: 'FOV del sensor RGB (H × V)',
    specRgbTech: 'Tecnología del sensor RGB',

    specImu: 'IMU',

    specPower: 'Consumo de energía',
    specSupply: 'Alimentación',

    specSync: 'Sincronización HW multicámara',
    specDim: 'Dimensiones (An × Al × Pr)',
    specWeight: 'Peso',
    specIngress: 'Protección IP [4]',
    specInstall: 'Instalación',

    specTemp: 'Temperatura ambiente',
    specEmc: 'Requisitos EMC',
    specVibration: 'Vibración',

    specLifespan: 'Vida útil [5]',

    valIndoorOutdoor: 'Interior y exterior',
    valActPasStereo: 'Estéreo activo y pasivo',
    valGmslUsb3: 'GMSL2 FAKRA y USB 3',
    valUsbGmsl2: 'USB y GMSL 2',
    valYes: 'Sí',
    valOrbbecSdk: 'Orbbec SDK',
    valGlobalShutter: 'Global Shutter',
    valVisibleNirPass: 'Paso visible + NIR',
    valSupport: 'Compatible',
    valIp65: 'IP65',
  },
};

// 行合并规则（保持不变）
const rowSpanRules = [
  { start: 0, span: 7 },
  { start: 7, span: 8 },
  { start: 15, span: 2 },
  { start: 17, span: 3 },
  { start: 20, span: 1 },
  { start: 21, span: 2 },
  { start: 23, span: 5 },
  { start: 28, span: 3 },
  { start: 31, span: 1 },
].map((rule, idx, arr) => ({
  ...rule,
  end: (arr[idx + 1]?.start ?? Infinity) - 1
}));

// 原始英文数据（不动）
const baseData = [
  { key: "1",  category: "Basic",        spec: "Use Environment",                         gemini335Lg: "Indoor & Outdoor" },
  { key: "2",  category: "Basic",        spec: "Technology",                              gemini335Lg: "Active & Passive Stereo" },
  { key: "3",  category: "Basic",        spec: "Baseline",                                gemini335Lg: "95mm" },
  { key: "4",  category: "Basic",        spec: "Data Connection",                         gemini335Lg: "GMSL2 FAKRA & USB 3" },
  { key: "5",  category: "Basic",        spec: "Camera Protocol",                         gemini335Lg: "USB & GMSL 2" },
  { key: "6",  category: "Basic",        spec: "UVC Compliant",                           gemini335Lg: "Yes" },
  { key: "7",  category: "Basic",        spec: "SDK",                                     gemini335Lg: "Orbbec SDK" },

  { key: "8",  category: "Depth",        spec: "Depth Range [1]",                         gemini335Lg: "0.17m - 20m+" },
  { key: "9",  category: "Depth",        spec: "Ideal Range",                             gemini335Lg: "0.25m - 6m" },
  { key: "10", category: "Depth",        spec: "Depth Resolution @ Frame Rate",           gemini335Lg: "Up to: 1280 × 800 @ 30fps; 848 × 480 @ 60fps" },
  { key: "11", category: "Depth",        spec: "Depth FOV (H × V)",                       gemini335Lg: "90° × 65° ± 3° @ 2m" },
  { key: "12", category: "Depth",        spec: "Depth FOV (H × V) with D2C",              gemini335Lg: "Up to: 90° × 65° ± 3° @ 2m" },
  { key: "13", category: "Depth",        spec: "Spatial Precision [2]",                   gemini335Lg: "≤0.8% @ 2m; ≤1.6% @ 4m" },
  { key: "14", category: "Depth",        spec: "Depth Sensor Technology",                 gemini335Lg: "Global Shutter" },
  { key: "15", category: "Depth",        spec: "Depth Filter",                            gemini335Lg: "Visible+NIR-pass" },

  { key: "16", category: "IR",           spec: "IR Resolution @ Frame Rate",              gemini335Lg: "Up to: 1280 × 800 @ 30fps; 848 × 480 @ 60fps" },
  { key: "17", category: "IR",           spec: "IR FOV (H × V)",                          gemini335Lg: "91° × 65° ± 3°" },

  { key: "18", category: "RGB",          spec: "RGB Resolution@Frame Rate",               gemini335Lg: "Up to 1280 × 800 @ 60 FPS; 1280 × 720 @ 60 FPS" },
  { key: "19", category: "RGB",          spec: "RGB Sensor FOV (H × V)",                  gemini335Lg: "94° × 68° ± 3°" },
  { key: "20", category: "RGB",          spec: "RGB Sensor Technology",                   gemini335Lg: "Global Shutter" },

  { key: "21", category: "Built-in Sensor", spec: "IMU",                                  gemini335Lg: "Support" },

  { key: "22", category: "Electrical",   spec: "Power Consumption",                       gemini335Lg: "GMSL2: Average ≤ 3.8 W (Peak ≤ 7.5W); USB3: Average ≤ 3.0 W (Peak ≤ 6W)" },
  { key: "23", category: "Electrical",   spec: "Power Supply",                            gemini335Lg: "GMSL2: For Best Performance, DC 12V/≥0.7A (Laser Energy Level 6); For Default Performance:  DC 12V/≥0.5A [3] (Laser Energy Level 4); USB 3: DC 5V/≥1.5A " },

  { key: "24", category: "Physical",     spec: "Multi-camera Hardware Sync",              gemini335Lg: "8-pin & FAKRA-Z" },
  { key: "25", category: "Physical",     spec: "Dimensions (W × H × D)",                  gemini335Lg: "124 mm × 29mm × 36 mm" },
  { key: "26", category: "Physical",     spec: "Weight",                                  gemini335Lg: "164g ± 3g" },
  { key: "27", category: "Physical",     spec: "Ingress Protection [4]",                  gemini335Lg: "IP65" },
  { key: "28", category: "Physical",     spec: "Installation",                            gemini335Lg: "Bottom: 1 × 1/4 - 20 UNC; BACK: 2 × M4" },

  { key: "29", category: "Environmental", spec: "Ambient Temperature",                    gemini335Lg: "-10℃ - 50 ℃ @ 15 FPS; -10℃ - 45 ℃ @ 30/60 FPS" },
  { key: "30", category: "Environmental", spec: "EMC Requirement",                        gemini335Lg: "EN61000-6-2; EN610000-6-4" },
  { key: "31", category: "Environmental", spec: "Vibration",                              gemini335Lg: "3.8Grms @ 5 ~ 500 Hz, random, 2hr/axis" },

  { key: "32", category: "Others",       spec: "Lifespan [5]",                            gemini335Lg: "5 years" },
];

// 映射表（类别/规格/常见值 → 多语言）
const translateCategory = (t, cat) => {
  const map = {
    'Basic': t.catBasic,
    'Depth': t.catDepth,
    'IR': t.catIR,
    'RGB': t.catRGB,
    'Built-in Sensor': t.catBuiltIn,
    'Electrical': t.catElectrical,
    'Physical': t.catPhysical,
    'Environmental': t.catEnv,
    'Others': t.catOthers,
  };
  return map[cat] || cat;
};

const translateSpec = (t, spec) => {
  const map = {
    'Use Environment': t.specUseEnv,
    'Technology': t.specTech,
    'Baseline': t.specBaseline,
    'Data Connection': t.specDataConn,
    'Camera Protocol': t.specProtocol,
    'UVC Compliant': t.specUvc,
    'SDK': t.specSdk,

    'Depth Range [1]': t.specDepthRange,
    'Ideal Range': t.specIdealRange,
    'Depth Resolution @ Frame Rate': t.specDepthResol,
    'Depth FOV (H × V)': t.specDepthFov,
    'Depth FOV (H × V) with D2C': t.specDepthFovD2C,
    'Spatial Precision [2]': t.specSpatialPrecision,
    'Depth Sensor Technology': t.specDepthTech,
    'Depth Filter': t.specDepthFilter,

    'IR Resolution @ Frame Rate': t.specIrResol,
    'IR FOV (H × V)': t.specIrFov,

    'RGB Resolution@Frame Rate': t.specRgbResol,
    'RGB Sensor FOV (H × V)': t.specRgbFov,
    'RGB Sensor Technology': t.specRgbTech,

    'IMU': t.specImu,

    'Power Consumption': t.specPower,
    'Power Supply': t.specSupply,

    'Multi-camera Hardware Sync': t.specSync,
    'Dimensions (W × H × D)': t.specDim,
    'Weight': t.specWeight,
    'Ingress Protection [4]': t.specIngress,
    'Installation': t.specInstall,

    'Ambient Temperature': t.specTemp,
    'EMC Requirement': t.specEmc,
    'Vibration': t.specVibration,

    'Lifespan [5]': t.specLifespan,
  };
  return map[spec] || spec;
};

const translateValue = (t, value) => {
  const map = {
    'Indoor & Outdoor': t.valIndoorOutdoor,
    'Active & Passive Stereo': t.valActPasStereo,
    'GMSL2 FAKRA & USB 3': t.valGmslUsb3,
    'USB & GMSL 2': t.valUsbGmsl2,
    'Yes': t.valYes,
    'Orbbec SDK': t.valOrbbecSdk,
    'Global Shutter': t.valGlobalShutter,
    'Visible+NIR-pass': t.valVisibleNirPass,
    'Support': t.valSupport,
    'IP65': t.valIp65,
  };
  // 仅翻译常见固定值；包含单位/复杂句子的值保持原样，避免引入错误翻译
  return map[value] || value;
};

// 表头（按语言）
const makeColumns = (t) => ([
  {
    title: t.thCategory,
    dataIndex: 'category',
    align: 'center',
    render: (text, row, index) => {
      const obj = { children: text, props: {} };
      for (const rule of rowSpanRules) {
        if (index === rule.start) {
          obj.props.rowSpan = rule.span;
          break;
        }
        if (index > rule.start && index <= rule.end) {
          obj.props.rowSpan = 0;
          break;
        }
      }
      return obj;
    },
  },
  {
    title: t.thSpec,
    dataIndex: 'spec',
    key: 'spec',
    width: 220,
    align: 'center',
  },
  {
    title: t.thModel,
    dataIndex: 'gemini335Lg',
    key: 'gemini335Lg',
    align: 'center',
  },
]);

// 生成本地化数据
const makeLocalizedData = (t) =>
  baseData.map((row) => ({
    ...row,
    category: translateCategory(t, row.category),
    spec: translateSpec(t, row.spec),
    gemini335Lg: translateValue(t, row.gemini335Lg),
  }));

export const Orbbec335LgTable = ({ lang = 'en' }) => {
  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);

  const currentTheme = useThemeStore((state) => state.theme);

  // 当前语言字典
  const t = i18n[lang] || i18n.en;

  // Memo：避免每次渲染都重建数组/列
  const columns = useMemo(() => makeColumns(t), [t]);
  const data = useMemo(() => makeLocalizedData(t), [t]);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
        bordered
      />
    </ConfigProvider>
  );
};

export default Orbbec335LgTable;
