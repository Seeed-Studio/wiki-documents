import { useEffect } from "react";
import { Table, Flex, ConfigProvider, Tabs, theme } from "antd";
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';

/** i18n 文案（最小必要集） */
const i18n = {
  en: {
    tabs: {
      s1: 'SG3S-ISX031C-GMSL2-H (6G bps)',
      s2: 'SG3S-ISX031C-GMSL2-F (3G bps)',
      s3: 'SG8S-AR0820C-5300-G2A-H (6G bps)',
      s4: 'SG2-IMX390C-5200-G2A-H (6G bps)',
      s5: 'SG2-AR0233C-5200-G2A-H (6G bps)',
    },
    cols: {
      name: 'Name',
      param: 'Parameter',
      value: 'Value',
      category: 'Category',
      spec: 'spec',
    },
    hw: 'Hardware Settings',
    desc: {
      d_isx031_h:
        'The camera is equipped with SONY CMOS image sensor ISX031 and Maxim GMSL2 serializer MAX96717F. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.',
      d_isx031_f:
        'The camera is equipped with SONY CMOS image sensor ISX031 and Maxim GMSL2 serializer MAX9295A. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.',
      d_ar0820:
        'The camera is equipped with On-semi Semiconductor CMOS image sensor AR0820, image processor GW5300 and Maxim GMSL2 serializer MAX9295A. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.',
      d_imx390:
        'The camera is equipped with Sony image sensor IMX390, image processor GW5200 and Maxim GMSL2 serializer MAX9295A. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.',
      d_ar0233:
        'The camera is equipped with ONSEMI image sensor AR0233, image processor GW5200 and Maxim GMSL2 serializer MAX9295A. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factory.',
    },
    // 行内字段名翻译映射（英文保持原样）
    labels: {},
    specs: {},
  },
  zh: {
    tabs: {
      s1: 'SG3S-ISX031C-GMSL2-H（6G bps）',
      s2: 'SG3S-ISX031C-GMSL2-F（3G bps）',
      s3: 'SG8S-AR0820C-5300-G2A-H（6G bps）',
      s4: 'SG2-IMX390C-5200-G2A-H（6G bps）',
      s5: 'SG2-AR0233C-5200-G2A-H（6G bps）',
    },
    cols: {
      name: '名称',
      param: '参数',
      value: '参数',
      category: '类别',
      spec: '规格',
    },
    hw: '硬件设置',
    desc: {
      d_isx031_h:
        '该相机采用索尼 CMOS 图像传感器 ISX031 与 Maxim GMSL2 串行器 MAX96717F。配备汽车级传感器与精细调校的图像信号处理器（ISP），可输出卓越的图像质量；整机为 IP67 防护外壳，并配有在工厂完成对焦并胶合固定的 AA 镜头。',
      d_isx031_f:
        '该相机采用索尼 CMOS 图像传感器 ISX031 与 Maxim GMSL2 串行器 MAX9295A。配备汽车级传感器与精细调校的 ISP，成像质量出色；整机为 IP67 防护外壳，并配有在工厂完成对焦并胶合固定的 AA 镜头。',
      d_ar0820:
        '该相机采用 On-semi CMOS 图像传感器 AR0820、图像处理器 GW5300 与 Maxim GMSL2 串行器 MAX9295A。配备汽车级传感器与精细调校的 ISP，成像质量出色；整机为 IP67 防护外壳，并配有在工厂完成对焦并胶合固定的 AA 镜头。',
      d_imx390:
        '该相机采用索尼图像传感器 IMX390、图像处理器 GW5200 与 Maxim GMSL2 串行器 MAX9295A。配备汽车级传感器与精细调校的 ISP，成像质量出色；整机为 IP67 防护外壳，并配有在工厂完成对焦并胶合固定的 AA 镜头。',
      d_ar0233:
        '该相机采用 ONSEMI 图像传感器 AR0233、图像处理器 GW5200 与 Maxim GMSL2 串行器 MAX9295A。配备汽车级传感器与精细调校的 ISP，成像质量出色；整机为 IP67 防护外壳，并配有在工厂完成对焦并胶合固定的 AA 镜头。',
    },
    // 行内字段名映射
    labels: {
      'Sensor': '传感器',
      'ISP': '图像信号处理器（ISP）',
      'Image Size': '图像尺寸',
      'Output Pixels': '输出像素',
      'Pixel Size': '像素尺寸',
      'Frame Rate': '帧率',
      'HDR Support': 'HDR 支持',
      'LFM': '抗频闪（LFM）',
      'Output data': '输出数据',
      'Serializer': '串行器',
      'Camera Interface': '相机接口',
      'Power Supply': '供电',
      'Current': '电流',
      'Connector': '连接器',
      'Operating temp. range': '工作温度范围',
      'Dimensions': '尺寸',
      'Weight': '重量',
      'RGB Resolution@Frame Rate': 'RGB 分辨率 @ 帧率',
      'IR Resolution @ Frame Rate': '红外分辨率 @ 帧率',
      'Depth Resolution @ Frame Rate': '深度分辨率 @ 帧率',
      'Depth FOV (H × V)': '深度视场（水平 × 垂直）',
      'Depth FOV (H × V) with D2C': 'D2C 时深度视场（水平 × 垂直）',
      'Spatial Precision [2]': '空间精度 [2]',
      'Depth Sensor Technology': '深度传感器技术',
      'Depth Filter': '深度滤光片',
      'IR FOV (H × V)': '红外视场（水平 × 垂直）',
      'RGB Sensor FOV (H × V)': 'RGB 视场（水平 × 垂直）',
      'RGB Sensor Technology': 'RGB 传感器技术',
      'Use Environment': '使用环境',
      'Technology': '技术体制',
      'Baseline': '基线',
      'Data Connection': '数据连接',
      'Camera Protocol': '相机协议',
      'UVC Compliant': 'UVC 兼容',
      'SDK': 'SDK',
      'Depth Range [1]': '深度范围 [1]',
      'Ideal Range': '理想范围',
      'Multi-camera Hardware Sync': '多相机硬件同步',
      'Ingress Protection [4]': '防护等级 [4]',
      'Installation': '安装',
      'Ambient Temperature': '环境温度',
      'EMC Requirement': '电磁兼容要求',
      'Vibration': '振动',
      'Lifespan [5]': '寿命 [5]',
      'Output data': '输出数据',
    },
    specs: {
      'Model': '型号',
      'I2C Address': 'I2C 地址',
      'Rate': '速率',
      'Frame Sync': '帧同步',
      'Reset': '复位',
    },
  },
  ja: {
    tabs: {
      s1: 'SG3S-ISX031C-GMSL2-H（6G bps）',
      s2: 'SG3S-ISX031C-GMSL2-F（3G bps）',
      s3: 'SG8S-AR0820C-5300-G2A-H（6G bps）',
      s4: 'SG2-IMX390C-5200-G2A-H（6G bps）',
      s5: 'SG2-AR0233C-5200-G2A-H（6G bps）',
    },
    cols: {
      name: '名称',
      param: 'パラメータ',
      value: '値',
      category: 'カテゴリ',
      spec: '仕様',
    },
    hw: 'ハードウェア設定',
    desc: {
      d_isx031_h:
        '本カメラは SONY 製 CMOS イメージセンサー ISX031 と Maxim 製 GMSL2 シリアライザ MAX96717F を搭載しています。自動車グレードのセンサーと入念にチューニングされた ISP により優れた画質を実現。IP67 等級のエンクロージャを採用し、工場で焦点調整・接着固定された AA レンズが付属します。',
      d_isx031_f:
        '本カメラは SONY 製 CMOS イメージセンサー ISX031 と Maxim 製 GMSL2 シリアライザ MAX9295A を搭載しています。自動車グレードのセンサーと調整済み ISP により高品位な画質を提供。IP67 等級の筐体に、工場で焦点調整・接着固定された AA レンズが付属します。',
      d_ar0820:
        '本カメラは On-semi 製 CMOS センサー AR0820、画像プロセッサ GW5300、Maxim 製 GMSL2 シリアライザ MAX9295A を搭載。高品位な画質を提供し、IP67 等級の筐体に工場で焦点調整・接着固定された AA レンズが付属します。',
      d_imx390:
        '本カメラは Sony 製センサー IMX390、画像プロセッサ GW5200、Maxim 製 GMSL2 シリアライザ MAX9295A を搭載。高品位な画質を提供し、IP67 等級の筐体に工場で焦点調整・接着固定された AA レンズが付属します。',
      d_ar0233:
        '本カメラは ONSEMI 製センサー AR0233、画像プロセッサ GW5200、Maxim 製 GMSL2 シリアライザ MAX9295A を搭載。高品位な画質を提供し、IP67 等級の筐体に工場で焦点調整・接着固定された AA レンズが付属します。',
    },
    labels: {
      'Sensor': 'センサー',
      'ISP': '画像信号処理（ISP）',
      'Image Size': '画像サイズ',
      'Output Pixels': '出力画素',
      'Pixel Size': '画素サイズ',
      'Frame Rate': 'フレームレート',
      'HDR Support': 'HDR 対応',
      'LFM': 'フリッカ低減（LFM）',
      'Output data': '出力データ',
      'Serializer': 'シリアライザ',
      'Camera Interface': 'カメラインターフェース',
      'Power Supply': '電源',
      'Current': '電流',
      'Connector': 'コネクタ',
      'Operating temp. range': '動作温度範囲',
      'Dimensions': '寸法',
      'Weight': '重量',
    },
    specs: {
      'Model': '型番',
      'I2C Address': 'I2C アドレス',
      'Rate': 'レート',
      'Frame Sync': 'フレーム同期',
      'Reset': 'リセット',
    },
  },
  es: {
    tabs: {
      s1: 'SG3S-ISX031C-GMSL2-H (6G bps)',
      s2: 'SG3S-ISX031C-GMSL2-F (3G bps)',
      s3: 'SG8S-AR0820C-5300-G2A-H (6G bps)',
      s4: 'SG2-IMX390C-5200-G2A-H (6G bps)',
      s5: 'SG2-AR0233C-5200-G2A-H (6G bps)',
    },
    cols: {
      name: 'Nombre',
      param: 'Parámetro',
      value: 'Valor',
      category: 'Categoría',
      spec: 'Especificación',
    },
    hw: 'Ajustes de hardware',
    desc: {
      d_isx031_h:
        'La cámara incorpora el sensor CMOS SONY ISX031 y el serializador GMSL2 MAX96717F de Maxim. Con un sensor de grado automotriz y un ISP bien ajustado, ofrece una calidad de imagen excepcional. Viene con carcasa IP67 e incluye una lente AA enfocada y fijada en fábrica.',
      d_isx031_f:
        'La cámara incorpora el sensor CMOS SONY ISX031 y el serializador GMSL2 MAX9295A de Maxim. Con un sensor de grado automotriz y un ISP bien afinado, ofrece una calidad de imagen excepcional. Viene con carcasa IP67 e incluye una lente AA enfocada y fijada en fábrica.',
      d_ar0820:
        'La cámara incorpora el sensor CMOS AR0820 de On-semi, el procesador de imagen GW5300 y el serializador GMSL2 MAX9295A de Maxim. Con un sensor de grado automotriz y un ISP bien afinado, ofrece una calidad de imagen superior. Se entrega con carcasa IP67 y una lente AA enfocada y fijada en fábrica.',
      d_imx390:
        'La cámara incorpora el sensor Sony IMX390, el procesador de imagen GW5200 y el serializador GMSL2 MAX9295A de Maxim. Con un sensor de grado automotriz y un ISP bien afinado, ofrece una calidad de imagen superior. Se entrega con carcasa IP67 y una lente AA enfocada y fijada en fábrica.',
      d_ar0233:
        'La cámara incorpora el sensor ONSEMI AR0233, el procesador de imagen GW5200 y el serializador GMSL2 MAX9295A de Maxim. Con un sensor de grado automotriz y un ISP bien afinado, ofrece una calidad de imagen superior. Se entrega con carcasa IP67 y una lente AA enfocada y fijada en fábrica.',
    },
    labels: {
      'Sensor': 'Sensor',
      'ISP': 'Procesador de señal de imagen (ISP)',
      'Image Size': 'Tamaño de imagen',
      'Output Pixels': 'Píxeles de salida',
      'Pixel Size': 'Tamaño de píxel',
      'Frame Rate': 'Frecuencia de cuadro',
      'HDR Support': 'Compatibilidad HDR',
      'LFM': 'Mitigación de parpadeo (LFM)',
      'Output data': 'Datos de salida',
      'Serializer': 'Serializador',
      'Camera Interface': 'Interfaz de cámara',
      'Power Supply': 'Alimentación',
      'Current': 'Corriente',
      'Connector': 'Conector',
      'Operating temp. range': 'Rango de temperatura de operación',
      'Dimensions': 'Dimensiones',
      'Weight': 'Peso',
    },
    specs: {
      'Model': 'Modelo',
      'I2C Address': 'Dirección I2C',
      'Rate': 'Velocidad',
      'Frame Sync': 'Sincronización de fotogramas',
      'Reset': 'Reinicio',
    },
  },
};

const getT = (lang) => i18n[lang] || i18n.en;
const tr = (dict, text) => (dict && dict[text]) || text;

export const SensingGMSLCamTable = ({ lang = 'en' }) => {
  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);

  const currentTheme = useThemeStore((state) => state.theme);
  const t = getT(lang);

  const tableItems = [
    { key: '1', label: t.tabs.s1, children: <SG3SISX031CGMSL2 lang={lang} /> },
    { key: '2', label: t.tabs.s2, children: <SG3SISX031CGMSL2F lang={lang} /> },
    { key: '3', label: t.tabs.s3, children: <SG8SAR0820C5300G2AH lang={lang} /> },
    { key: '4', label: t.tabs.s4, children: <SG2IMX390C5200G2AH lang={lang} /> },
    { key: '5', label: t.tabs.s5, children: <SG2AR0233C5200G2AH lang={lang} /> },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Tabs tabPosition="left" items={tableItems} />
    </ConfigProvider>
  );
};

const SG3SISX031CGMSL2 = ({ lang = 'en' }) => {
  const t = getT(lang);

  const columns = [
    { title: t.cols.name, dataIndex: 'name', align: 'center', key: 'name',
      render: (text) => tr(t.labels, text) },
    { title: t.cols.param, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const data = [
    { key: 1, name: 'Sensor', value: 'SONY 2.95MP ISX031 RGGB' },
    { key: 2, name: 'ISP', value: 'Built-in' },
    { key: 3, name: 'Image Size', value: '1/2.42 inch CMOS' },
    { key: 4, name: 'Output Pixels', value: '1920 H * 1536 V' },
    { key: 5, name: 'Pixel Size', value: '3.0 um * 3.0 um' },
    { key: 6, name: 'Frame Rate', value: '1920 * 1536 @ 30fps' },
    { key: 7, name: 'HDR Support', value: 'Yes' },
    { key: 8, name: 'LFM', value: 'Yes' },
    { key: 9, name: 'Output data', value: 'YUV422@8bit' },
    { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
    { key: 11, name: 'Camera Interface', value: 'GMSL2' },
    { key: 12, name: 'Power Supply', value: '9~16V POC' },
    { key: 13, name: 'Current', value: '<200mA@12VDC' },
    { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
    { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
    { key: 16, name: 'Dimensions', value: 'W:25mm, L:25mm, H:18.6mm' },
    { key: 17, name: 'Weight', value: '<50g' },
  ];

  const hwColumn = [
    {
      title: t.cols.category,
      dataIndex: 'category',
      align: 'center',
      key: 'category',
      render: (text, row, index) => {
        const shown = tr(t.labels, text);
        if (index === 0) return { children: shown, props: { rowSpan: 3 } };
        if (index > 0 && index < 3) return { children: shown, props: { rowSpan: 0 } };
        if (index === 3) return { children: shown, props: { rowSpan: 4 } };
        if (index > 3 && index < 7) return { children: shown, props: { rowSpan: 0 } };
        return shown;
      },
    },
    { title: t.cols.spec, dataIndex: 'spec', key: 'spec', align: 'center',
      render: (text) => tr(t.specs, text) },
    { title: t.cols.param, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: 'MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    { key: 4, category: 'ISP', spec: 'Model', value: 'ISX031' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0x34 (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Frame Sync', value: 'Controlled by MAX9295A MFP7' },
    { key: 7, category: 'ISP', spec: 'Reset', value: 'Controlled by MAX9295A MFP0' },
  ];

  return (
    <Flex gap="middle" vertical align="center" wrap>
      <p>{t.desc.d_isx031_h}</p>
      <Table dataSource={data} columns={columns} bordered size="small" pagination={false} />
      <p>{t.hw}</p>
      <Table dataSource={hwData} columns={hwColumn} bordered size="small" pagination={false} />
    </Flex>
  );
};

const SG3SISX031CGMSL2F = ({ lang = 'en' }) => {
  const t = getT(lang);

  const columns = [
    { title: t.cols.name, dataIndex: 'name', align: 'center', key: 'name',
      render: (text) => tr(t.labels, text) },
    { title: t.cols.param, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const data = [
    { key: 1, name: 'Sensor', value: 'SONY 2.95MP ISX031 RGGB' },
    { key: 2, name: 'ISP', value: 'Built-in' },
    { key: 3, name: 'Image Size', value: '1/2.42 inch CMOS' },
    { key: 4, name: 'Output Pixels', value: '1920H*1536V' },
    { key: 5, name: 'Pixel Size', value: '3.0um*3.0um' },
    { key: 6, name: 'Frame Rate', value: '1920*1536@30fps' },
    { key: 7, name: 'HDR Support', value: 'Yes' },
    { key: 8, name: 'LFM', value: 'Yes' },
    { key: 9, name: 'Output data', value: 'YUV422@8bit' },
    { key: 10, name: 'Serializer', value: 'MAXIM MAX96717F' },
    { key: 11, name: 'Camera Interface', value: 'GMSL2' },
    { key: 12, name: 'Power Supply', value: '9~16V POC' },
    { key: 13, name: 'Current', value: '<200mA@12VDC' },
    { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
    { key: 15, name: 'Operating temp. range', value: '-40 ~ 85 ℃' },
    { key: 16, name: 'Dimensions', value: 'W:25mm, L:25mm, H:18.6mm' },
    { key: 17, name: 'Weight', value: '<50g' },
  ];

  const hwColumn = [
    {
      title: t.cols.category,
      dataIndex: 'category',
      align: 'center',
      key: 'category',
      render: (text, row, index) => {
        const shown = tr(t.labels, text);
        if (index === 0) return { children: shown, props: { rowSpan: 3 } };
        if (index > 0 && index < 3) return { children: shown, props: { rowSpan: 0 } };
        if (index === 3) return { children: shown, props: { rowSpan: 4 } };
        if (index > 3 && index < 7) return { children: shown, props: { rowSpan: 0 } };
        return shown;
      },
    },
    { title: t.cols.spec, dataIndex: 'spec', key: 'spec', align: 'center',
      render: (text) => tr(t.specs, text) },
    { title: t.cols.param, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: ' MAX96717F' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (3G bps)' },
    { key: 4, category: 'ISP', spec: 'Model', value: 'ISX031' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0x34 (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Frame Sync', value: 'Controlled by  MAX96717F MFP7' },
    { key: 7, category: 'ISP', spec: 'Reset', value: 'Controlled by  MAX96717F MFP0' },
  ];

  return (
    <Flex gap="middle" vertical align="center" wrap>
      <p>{t.desc.d_isx031_f}</p>
      <Table dataSource={data} columns={columns} bordered size="small" pagination={false} />
      <p>{t.hw}</p>
      <Table dataSource={hwData} columns={hwColumn} bordered size="small" pagination={false} />
    </Flex>
  );
};

const SG8SAR0820C5300G2AH = ({ lang = 'en' }) => {
  const t = getT(lang);

  const columns = [
    { title: t.cols.name, dataIndex: 'name', align: 'center', key: 'name',
      render: (text) => tr(t.labels, text) },
    { title: t.cols.value, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const data = [
    { key: 1, name: 'Sensor', value: 'ONSEMI 8.3MP AR0820 RGGB' },
    { key: 2, name: 'ISP', value: 'GW5300' },
    { key: 3, name: 'Image Size', value: '1/2 inch CMOS' },
    { key: 4, name: 'Output Pixels', value: '3840 H * 2160 V' },
    { key: 5, name: 'Pixel Size', value: '2.1 um * 2.1 um' },
    { key: 6, name: 'Frame Rate', value: '3840*2160@30fps' },
    { key: 7, name: 'HDR Support', value: 'Yes' },
    { key: 8, name: 'LFM', value: '/' },
    { key: 9, name: 'Output data', value: 'YUV422@8bit' },
    { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
    { key: 11, name: 'Camera Interface', value: 'GMSL2' },
    { key: 12, name: 'Power Supply', value: '9~16V POC' },
    { key: 13, name: 'Current', value: '<400mA@12V DC' },
    { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
    { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
    { key: 16, name: 'Dimensions', value: 'W:30 mm, L:30 mm, H:22.57 mm' },
    { key: 17, name: 'Weight', value: '<80g' },
  ];

  const hwColumn = [
    {
      title: t.cols.category,
      dataIndex: 'category',
      align: 'center',
      key: 'category',
      render: (text, row, index) => {
        const shown = tr(t.labels, text);
        if (index === 0) return { children: shown, props: { rowSpan: 3 } };
        if (index > 0 && index < 3) return { children: shown, props: { rowSpan: 0 } };
        if (index === 3) return { children: shown, props: { rowSpan: 3 } };
        if (index > 3 && index < 6) return { children: shown, props: { rowSpan: 0 } };
        if (index === 6) return { children: shown, props: { rowSpan: 3 } };
        if (index > 6 && index < 9) return { children: shown, props: { rowSpan: 0 } };
        return shown;
      },
    },
    { title: t.cols.spec, dataIndex: 'spec', key: 'spec', align: 'center',
      render: (text) => tr(t.specs, text) },
    { title: t.cols.param, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: ' MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    { key: 4, category: 'ISP', spec: 'Model', value: 'GW5300' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0xDA (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Reset', value: 'Controlled by  MAX9295A MFP0' },
    { key: 7, category: 'Sensor', spec: 'Model', value: 'AR0820' },
    { key: 8, category: 'Sensor', spec: 'I2C Address', value: '0x20 (8 bit address)' },
    { key: 9, category: 'Sensor', spec: 'Frame Sync', value: 'Controlled by  MAX9295A MFP7' },
  ];

  return (
    <Flex gap="middle" vertical align="center" wrap>
      <p>{t.desc.d_ar0820}</p>
      <Table dataSource={data} columns={columns} bordered size="small" pagination={false} />
      <p>{t.hw}</p>
      <Table dataSource={hwData} columns={hwColumn} bordered size="small" pagination={false} />
    </Flex>
  );
};

const SG2IMX390C5200G2AH = ({ lang = 'en' }) => {
  const t = getT(lang);

  const columns = [
    { title: t.cols.name, dataIndex: 'name', align: 'center', key: 'name',
      render: (text) => tr(t.labels, text) },
    { title: t.cols.value, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const data = [
    { key: 1, name: 'Sensor', value: 'SONY 2.12 MP IMX390 RGGB' },
    { key: 2, name: 'ISP', value: 'GW5200' },
    { key: 3, name: 'Image Size', value: '1/2.7 inch CMOS' },
    { key: 4, name: 'Output Pixels', value: '1920 H * 1080 V' },
    { key: 5, name: 'Pixel Size', value: '3 um * 3 um' },
    { key: 6, name: 'Frame Rate', value: '1920 * 1080 @ 30fps' },
    { key: 7, name: 'HDR Support', value: 'Yes' },
    { key: 8, name: 'LFM', value: 'Yes' },
    { key: 9, name: 'Output data', value: 'YUV422@8bit' },
    { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
    { key: 11, name: 'Camera Interface', value: 'GMSL2' },
    { key: 12, name: 'Power Supply', value: '9~16V POC' },
    { key: 13, name: 'Current', value: '<250mA@12V DC' },
    { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
    { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
    { key: 16, name: 'Dimensions', value: 'W:30 mm, L:30 mm, H:22.57 mm' },
    { key: 17, name: 'Weight', value: '<50g' },
  ];

  const hwColumn = [
    {
      title: t.cols.category,
      dataIndex: 'category',
      align: 'center',
      key: 'category',
      render: (text, row, index) => {
        const shown = tr(t.labels, text);
        if (index === 0) return { children: shown, props: { rowSpan: 3 } };
        if (index > 0 && index < 3) return { children: shown, props: { rowSpan: 0 } };
        if (index === 3) return { children: shown, props: { rowSpan: 3 } };
        if (index > 3 && index < 6) return { children: shown, props: { rowSpan: 0 } };
        if (index === 6) return { children: shown, props: { rowSpan: 4 } };
        if (index > 6 && index < 10) return { children: shown, props: { rowSpan: 0 } };
        return shown;
      },
    },
    { title: t.cols.spec, dataIndex: 'spec', key: 'spec', align: 'center',
      render: (text) => tr(t.specs, text) },
    { title: t.cols.param, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: ' MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    { key: 4, category: 'ISP', spec: 'Model', value: 'GW5200' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0xDA (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Reset', value: 'Controlled by  MAX9295A MFP0' },
    { key: 7, category: 'Sensor', spec: 'Model', value: 'IMX390' },
    { key: 8, category: 'Sensor', spec: 'I2C Address', value: '0x42 (8 bit address)' },
    { key: 9, category: 'Sensor', spec: 'Frame Sync', value: 'Controlled by MAX9295A MFP7' },
    { key: 9, category: 'Sensor', spec: 'Error', value: 'Controlled by MAX9295A MFP5' },
  ];

  return (
    <Flex gap="middle" vertical align="center" wrap>
      <p>{t.desc.d_imx390}</p>
      <Table dataSource={data} columns={columns} bordered size="small" pagination={false} />
      <p>{t.hw}</p>
      <Table dataSource={hwData} columns={hwColumn} bordered size="small" pagination={false} />
    </Flex>
  );
};

const SG2AR0233C5200G2AH = ({ lang = 'en' }) => {
  const t = getT(lang);

  const columns = [
    { title: t.cols.name, dataIndex: 'name', align: 'center', key: 'name',
      render: (text) => tr(t.labels, text) },
    { title: t.cols.value, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const data = [
    { key: 1, name: 'Sensor', value: 'ONSEMI 2.6 MP AR0233 RGGB' },
    { key: 2, name: 'ISP', value: 'GW5200' },
    { key: 3, name: 'Image Size', value: '1/2.5 inch CMOS' },
    { key: 4, name: 'Output Pixels', value: '1920 H * 1080 V' },
    { key: 5, name: 'Pixel Size', value: '3 um * 3 um' },
    { key: 6, name: 'Frame Rate', value: '1920 * 1080 @ 30fps' },
    { key: 7, name: 'HDR Support', value: 'Yes' },
    { key: 8, name: 'LFM', value: 'Yes' },
    { key: 9, name: 'Output data', value: 'YUV422@8bit' },
    { key: 10, name: 'Serializer', value: 'MAXIM MAX9295A' },
    { key: 11, name: 'Camera Interface', value: 'GMSL2' },
    { key: 12, name: 'Power Supply', value: '9~16V POC' },
    { key: 13, name: 'Current', value: '<250mA@12V DC' },
    { key: 14, name: 'Connector', value: 'Amphenol Fakra (Z Code)' },
    { key: 15, name: 'Operating temp. range', value: '-40 ~ 85℃' },
    { key: 16, name: 'Dimensions', value: 'W:30 mm, L:30 mm, H:22.5 mm' },
    { key: 17, name: 'Weight', value: '<50g' },
  ];

  const hwColumn = [
    {
      title: t.cols.category,
      dataIndex: 'category',
      align: 'center',
      key: 'category',
      render: (text, row, index) => {
        const shown = tr(t.labels, text);
        if (index === 0) return { children: shown, props: { rowSpan: 3 } };
        if (index > 0 && index < 3) return { children: shown, props: { rowSpan: 0 } };
        if (index === 3) return { children: shown, props: { rowSpan: 3 } };
        if (index > 3 && index < 6) return { children: shown, props: { rowSpan: 0 } };
        if (index === 6) return { children: shown, props: { rowSpan: 3 } };
        if (index > 6 && index < 9) return { children: shown, props: { rowSpan: 0 } };
        return shown;
      },
    },
    { title: t.cols.spec, dataIndex: 'spec', key: 'spec', align: 'center',
      render: (text) => tr(t.specs, text) },
    { title: t.cols.param, dataIndex: 'value', key: 'value', align: 'center' },
  ];

  const hwData = [
    { key: 1, category: 'Serializer', spec: 'Model', value: 'MAX9295A' },
    { key: 2, category: 'Serializer', spec: 'I2C Address', value: '0x80 (8 bit address)' },
    { key: 3, category: 'Serializer', spec: 'Rate', value: 'GMSL2 (6G bps)' },
    { key: 4, category: 'ISP', spec: 'Model', value: 'GW5200' },
    { key: 5, category: 'ISP', spec: 'I2C Address', value: '0xDA (8 bit address)' },
    { key: 6, category: 'ISP', spec: 'Reset', value: 'Controlled by MAX9295A MFP0' },
    { key: 7, category: 'Sensor', spec: 'Model', value: 'AR0233' },
    { key: 8, category: 'Sensor', spec: 'I2C Address', value: '0x20 (8 bit address)' },
    { key: 9, category: 'Sensor', spec: 'Frame Sync', value: 'Controlled by MAX9295A MFP7' },
  ];

  return (
    <Flex gap="middle" vertical align="center" wrap>
      <p>{t.desc.d_ar0233}</p>
      <Table dataSource={data} columns={columns} bordered size="small" pagination={false} />
      <p>{t.hw}</p>
      <Table dataSource={hwData} columns={hwColumn} bordered size="small" pagination={false} />
    </Flex>
  );
};

export default SensingGMSLCamTable;
