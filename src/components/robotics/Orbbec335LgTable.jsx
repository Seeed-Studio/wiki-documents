import { useEffect } from "react";
import { Table, ConfigProvider, theme } from "antd";
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeStore } from '@site/src/stores/useJetsonStore';


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

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    align: 'center',
    render: (text, row, index) => {
      const obj = {
        children: text,
        props: {},
      };

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
    title: "Spec",
    dataIndex: "spec",
    key: "spec",
    width: 220,
    align: 'center',
  },
  {
    title: "Gemini 335Lg",
    dataIndex: "gemini335Lg",
    key: "gemini335Lg",
    align: 'center',
  },
];



const data = [
  { key: "1", category: "Basic", spec: "Use Environment", gemini335Lg: "Indoor & Outdoor" },
  { key: "2", category: "Basic", spec: "Technology", gemini335Lg: "Active & Passive Stereo" },
  { key: "3", category: "Basic", spec: "Baseline", gemini335Lg: "95mm" },
  { key: "4", category: "Basic", spec: "Data Connection", gemini335Lg: "GMSL2 FAKRA & USB 3" },
  { key: "5", category: "Basic", spec: "Camera Protocol", gemini335Lg: "USB & GMSL 2" },
  { key: "6", category: "Basic", spec: "UVC Compliant", gemini335Lg: "Yes" },
  { key: "7", category: "Basic", spec: "SDK", gemini335Lg: "Orbbec SDK" },

  { key: "8", category: "Depth", spec: "Depth Range [1]", gemini335Lg: "0.17m - 20m+" },
  { key: "9", category: "Depth", spec: "Ideal Range", gemini335Lg: "0.25m - 6m" },
  { key: "10", category: "Depth", spec: "Depth Resolution @ Frame Rate", gemini335Lg: "Up to: 1280 × 800 @ 30fps; 848 × 480 @ 60fps" },
  { key: "11", category: "Depth", spec: "Depth FOV (H × V)", gemini335Lg: "90° × 65° ± 3° @ 2m" },
  { key: "12", category: "Depth", spec: "Depth FOV (H × V) with D2C", gemini335Lg: "Up to: 90° × 65° ± 3° @ 2m" },
  { key: "13", category: "Depth", spec: "Spatial Precision [2]", gemini335Lg: "≤0.8% @ 2m; ≤1.6% @ 4m" },
  { key: "14", category: "Depth", spec: "Depth Sensor Technology", gemini335Lg: "Global Shutter" },
  { key: "15", category: "Depth", spec: "Depth Filter", gemini335Lg: "Visible+NIR-pass" },

  { key: "16", category: "IR", spec: "IR Resolution @ Frame Rate", gemini335Lg: "Up to: 1280 × 800 @ 30fps; 848 × 480 @ 60fps" },
  { key: "17", category: "IR", spec: "IR FOV (H × V)", gemini335Lg: "91° × 65° ± 3°" },

  { key: "18", category: "RGB", spec: "RGB Resolution@Frame Rate", gemini335Lg: "Up to 1280 × 800 @ 60 FPS; 1280 × 720 @ 60 FPS" },
  { key: "19", category: "RGB", spec: "RGB Sensor FOV (H × V)", gemini335Lg: "94° × 68° ± 3°" },
  { key: "20", category: "RGB", spec: "RGB Sensor Technology", gemini335Lg: "Global Shutter" },
  
  {key: "21", category: "Built-in Sensor", spec: "IMU", gemini335Lg: "Support"},
  
  
  {key: "22", category: "Electrical", spec: "Power Consumption", gemini335Lg: "GMSL2: Average ≤ 3.8 W (Peak ≤ 7.5W); USB3: Average ≤ 3.0 W (Peak ≤ 6W)"},
  {key: "23", category: "Electrical", spec: "Power Supply", gemini335Lg: "GMSL2: For Best Performance, DC 12V/≥0.7A (Laser Energy Level 6); For Default Performance:  DC 12V/≥0.5A [3] (Laser Energy Level 4); USB 3: DC 5V/≥1.5A "},
  
  {key: "24", category: "Physical", spec: "Multi-camera Hardware Sync", gemini335Lg: "8-pin & FAKRA-Z"},
  {key: "25", category: "Physical", spec: "Dimensions (W × H × D)", gemini335Lg: "124 mm × 29mm × 36 mm"},
  {key: "26", category: "Physical", spec: "Weight", gemini335Lg: "164g ± 3g"},
  {key: "27", category: "Physical", spec: "Ingress Protection [4]", gemini335Lg: "IP65"},
  {key: "28", category: "Physical", spec: "Installation", gemini335Lg: "Bottom: 1 × 1/4 - 20 UNC; BACK: 2 × M4"},

  {key: "29", category: "Environmental", spec: "Ambient Temperature", gemini335Lg: "-10℃ - 50 ℃ @ 15 FPS; -10℃ - 45 ℃ @ 30/60 FPS"},
  {key: "30", category: "Environmental", spec: "EMC Requirement", gemini335Lg: "EN61000-6-2; EN610000-6-4"},
  {key: "31", category: "Environmental", spec: "Vibration", gemini335Lg: "3.8Grms @ 5 ~ 500 Hz, random, 2hr/axis"},

  {key: "32", category: "Others", spec: "Lifespan [5]", gemini335Lg: "5 years"},

];

export const Orbbec335LgTable = () => {
  // Docusaurus color mode (dark/light)
  const { colorMode } = useColorMode();
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
          setTheme(colorMode === 'dark' ? 'dark' : 'light');
      }, [colorMode]);
  
  const currentTheme = useThemeStore((state) => state.theme);
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
}

export default Orbbec335LgTable