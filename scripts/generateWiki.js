const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const rootDir = path.join(__dirname, '..');
const docsDirectory = path.join(rootDir, 'docs');
const wikiFilePath = path.join(rootDir, '/src/utils/wiki.js');

const docList = [];
const excludedPaths = [
  path.join(docsDirectory, 'Seeed_Elderly', 'weekly_wiki'), // weekly wiki 的历史目录
  path.join(docsDirectory, 'zh-CN'), // 排除中文文档的目录
  path.join(docsDirectory, 'ja'), // 排除日文文档的目录
  path.join(docsDirectory, 'es'), // 排除西班牙语文档的目录
  path.join(docsDirectory, 'weekly_wiki.md'), // 排除 weekly wiki 的文件


  // 排除指定文档
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'T1000-E', 'sensecap_t1000_e.md'), //10.29
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'Wio_Tracker_L1', 'get_started_with_wio_tracker_l1.md'), //10.29
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'Wio_Tracker_L1', 'wio_tracker_node.md'), //11.5
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'XIAO_ESP32S3_&_SX1262_Kit', 'Get_Started_meshtastic.md'), //11.5
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_ONE_Weather_Station', 'SenseCAP_ONE_Compact_Weather_Station', 'Introduction.md'), //11.12
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'wio_tracker_kit', 'flash_meshtastic_kit.md'), //11.11
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'Solar_Node', 'get_started_with_solar_node.md'), //11.11
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_ONE_Weather_Station', 'SenseCAP_ONE_Compact_Weather_Station', 'Tutorials-Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor.md'), //11.25
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'XIAO_ESP32S3_&_SX1262_Kit', 'nrf52840_1262.md'), //11.24
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_Watcher', 'Applications', 'SenseCAP_Watcher_for_Xiaozhi_AI', 'Face_Regonition_with_MCP.md'), //11.24
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'LoRaWAN_Tracker', 'get_started_with_lorawan_tracker.md'), //11.26
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_LoRaWAN_Sensor', 'SenseCAP_A1102', 'DeployAI_With_A1102.md'), //11.26
  path.join(docsDirectory, 'Sensor', 'ePaper', 'XIAO_ePaper_Display_Board_EN04', 'EN04_GettingStart.md'), //11.25
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_T2000_Tracker', 'SenseCAP_T2000_intro.md'), //12.1
  path.join(docsDirectory, 'Robotics', 'Robot_Actuator', 'HighTorque', 'HighTorque_Getting_Started.md'), //12.4
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_Watcher', 'Applications', 'SenseCAP_Watcher_for_Xiaozhi_AI', 'Flash_Watcher_Agent_Firmware.md'), //12.4
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_Watcher', 'Applications', 'SenseCAP_Watcher_for_Xiaozhi_AI', 'Visual_Trigger_and_AI_Flash.md'), //12.4
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_T2000_Tracker', 'SenseCAP_T2000_Tracker_Introduction.md'), //12.1
  path.join(docsDirectory, 'Robotics', 'Robot_Kits', 'StackForce', 'StackForce_Giant_Bipedal_Wheeled_Robot.md'), //12.12
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'meshtastic_intro.md'), //12.11
  path.join(docsDirectory, 'Network', 'Meshtastic_Network', 'Solar_Node', 'solar_node.md'), //12.16
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO', 'SeeedStudio_XIAO_ESP32C5', 'Application', 'XIAO_ESP32C5_ESP-Mesh_Audio.md'), //12.12
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_T1000_Tracker', 'User_Guide', 'Get_Started.md'), //12.24
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Accessories', 'Display', 'Grove-OLED_Display_0.96inch.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Sensors', 'All_in_one', 'Grove-CO2_Temperature_Humidity_Sensor-SCD30.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Sensors', 'Light', 'Grove-I2C_Color_Sensor.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Sensors', 'Temp&Humi', 'Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Sensors', 'Temp&Humi', 'Grove-TempAndHumi_Sensor-SHT31.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Sensors', 'Temp&Humi', 'Grove-Temperature-Humidity-Sensor-DH20.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Sensors', 'Temp&Humi', 'Grove-TemperatureAndHumidity_Sensor.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'Grove', 'Grove_Sensors', 'Temp&Humi', 'Grove-Temperature_and_Humidity_Sensor_Pro.md'), //12.29
  path.join(docsDirectory, 'Top_Brand', 'Raspberry_Pi', 'Pi_HAT', 'Grove_Base_Hat_for_Raspberry_Pi.md'), //12.29
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_LoRaWAN_Sensor', 'SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor', 'SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction.md'), //12.29
  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'Make_DIY_BSP_for_Jetson.md'), //1.4
  path.join(docsDirectory, 'Network', 'SenseCAP_Network', 'reComputer_R1225_LoRaWAN_Gateway', 'R1225_introduction.md'), //1.4
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_LoRaWAN_Sensor', 'SenseCAP_A1102', 'SettingAI_With_A1102.md'), //12.31
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO', 'SeeedStudio_XIAO_ESP32C5', 'Wireless_Connection', 'XIAO_ESP32C5_WiFi_Usage.md'), //12.30
  path.join(docsDirectory, 'Sensor', 'ePaper', 'epaper_driver_board_main_page.md'), //12.21
  path.join(docsDirectory, 'Edge', 'NVIDIA_Jetson', 'FAQs', 'How_to_Deal_the_Issue_of_UUID_error.md'), //1.8
  path.join(docsDirectory, 'Network', 'SenseCAP_Network', 'SenseCAP_Gateway_Intro.md'), //1.8
  path.join(docsDirectory, 'Cloud_Chain', 'SenseCraft_APP', 'overview.md'), //1.8
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_T2000_Tracker', 'Integrated_with_LoRaWAN_Network_Server', 'Connect_to_The_Things_Network.md'), //1.6
  path.join(docsDirectory, 'Network', 'LoRa_Wio_Series', 'Wio-E5', 'LoRa_E5_mini.md'), //1.15
  path.join(docsDirectory, 'Sensor', 'ePaper', 'XIAO_ePaper_Display_Board_EN04', 'Application', 'OpenEpaperLink_GettingStart.md'), //1.13
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO', 'SeeedStudio_XIAO_ESP32C5', 'Zigbee', 'XIAO_ESP32C5_Zigbee_arduino.md'), //1.9
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO', 'SeeedStudio_XIAO_ESP32C5', 'Zigbee', 'XIAO_ESP32C5_Zigbee_homeassistant.md'), //1.9
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO', 'SeeedStudio_XIAO_ESP32C5', 'Zigbee', 'XIAO_ESP32C5_Zigbee_idf.md'), //1.9  
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO', 'SeeedStudio_XIAO_ESP32C5', 'Application', 'XIAO_ESP32C5_WiFi_Throughput_tester.md'), //1.16
  path.join(docsDirectory, 'Robotics', 'Robot_Kits', 'Lerobot', 'Lerobot_SO_ARM101_DAMO.md'), //1.12
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_Decoder.md'), //1.26
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_T2000_Tracker', 'Integrated_with_LoRaWAN_Network_Server', 'Connect_to_AWS_IoT_Core.md'), //1.23
  path.join(docsDirectory, 'Sensor', 'SenseCAP', 'SenseCAP_T2000_Tracker', 'Integrated_with_LoRaWAN_Network_Server', 'Connect_to_Helium.md'), //1.23
  path.join(docsDirectory, 'Sensor', 'ReSpeaker_2-Mics_Pi_HAT', 'v1-deprecated', 'ReSpeaker_2_Mics_Pi_HAT_Raspberry.md'), //1.29
  path.join(docsDirectory, 'Sensor', 'ReSpeaker_2-Mics_Pi_HAT', 'v2', 'ReSpeaker_2_Mics_Pi_HAT_Raspberry_v2.md'), //1.29
  path.join(docsDirectory, 'Sensor', 'SeeedStudio_XIAO', 'SeeedStudio_XIAO_nRF54L15-Sense', 'XIAO_nRF54L15-Sense_Zigbee.md'), //1.27
  
  
];

// 语言目录/文件名前缀映射（语言都在 docs/<langDir> 下）
const LANG_DIR = { cn: 'zh-CN', ja: 'ja', es: 'es' };
const LANG_PREFIX = { cn: 'cn_', ja: 'ja_', es: 'es_' };

// 提取标题：首个 H1 或 frontmatter.title
function extractTitle(fileContent) {
  const { data, content } = matter(fileContent);
  const markdownWithoutYaml = content.replace(/^---[\s\S]+?---\s*/, '');
  const markdownWithoutCodeBlocks = markdownWithoutYaml.replace(/```[\s\S]*?```/g, '');
  const titleMatch = markdownWithoutCodeBlocks.match(/^#\s+(.*)/m);
  return (titleMatch ? titleMatch[1].trim() : (data.title || '')).trim();
}

// 读取文件标题（若存在）
function tryReadTitle(absFile) {
  if (!absFile) return null;
  if (!fs.existsSync(absFile)) return null;
  try {
    const raw = fs.readFileSync(absFile, 'utf-8');
    const t = extractTitle(raw);
    return t || null;
  } catch {
    return null;
  }
}

// 扫描英文文档
function processDirectory(directory) {
  if (excludedPaths.includes(directory)) return;

  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (excludedPaths.includes(filePath)) return;

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (stat.isFile() && path.extname(file) === '.md') {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);

      const title = extractTitle(raw);
      let relPath = path.relative(docsDirectory, filePath).replace(/\\/g, '/');
      relPath = relPath.replace(/\.md$/i, ''); // 去掉 .md

      const slug = data.slug || relPath;

      if (data.last_update && data.last_update.date) {
        docList.push({
          path: slug.startsWith('/') ? slug : `/${slug}`,
          relPath,
          image: data.image || '',
          title,
          date: data.last_update.date,
        });
      }
    }
  });
}
processDirectory(docsDirectory);

// 在语言目录查找标题：同路径 或 同目录前缀文件
function getLocalizedTitle(item, lang /* 'cn'|'ja'|'es' */) {
  const langDir = LANG_DIR[lang];
  const prefix = LANG_PREFIX[lang];

  // relPath: 例如 Edge/NVIDIA_Jetson/foo/bar
  const relPath = item.relPath;

  const abs1md  = path.join(docsDirectory, langDir, relPath + '.md');
  const abs1mdx = path.join(docsDirectory, langDir, relPath + '.mdx');

  // 1) 完全相同相对路径
  let t = tryReadTitle(abs1md) || tryReadTitle(abs1mdx);
  if (t) return t;

  // 2) 同一相对目录 + 语言前缀文件名（cn_/ja_/es_）
  const dir = path.dirname(relPath);
  const base = path.basename(relPath);
  const abs2md  = path.join(docsDirectory, langDir, dir, `${prefix}${base}.md`);
  const abs2mdx = path.join(docsDirectory, langDir, dir, `${prefix}${base}.mdx`);
  t = tryReadTitle(abs2md) || tryReadTitle(abs2mdx);
  if (t) return t;

  // 3) 对 slug 解码后再重试 1) 和 2)
  const relFromSlug = (item.path.startsWith('/') ? item.path.slice(1) : item.path);
  const decoded = relFromSlug.split('/').map(s => {
    try { return decodeURIComponent(s); } catch { return s; }
  }).join('/');

  const abs3md  = path.join(docsDirectory, langDir, decoded + '.md');
  const abs3mdx = path.join(docsDirectory, langDir, decoded + '.mdx');
  t = tryReadTitle(abs3md) || tryReadTitle(abs3mdx);
  if (t) return t;

  const dirD = path.dirname(decoded);
  const baseD = path.basename(decoded);
  const abs4md  = path.join(docsDirectory, langDir, dirD, `${prefix}${baseD}.md`);
  const abs4mdx = path.join(docsDirectory, langDir, dirD, `${prefix}${baseD}.mdx`);
  t = tryReadTitle(abs4md) || tryReadTitle(abs4mdx);
  if (t) return t;

  // 4) 兜底：只用最后一段文件名在语言根下试一次
  const last = decoded.split('/').pop();
  if (last) {
    const abs5md  = path.join(docsDirectory, langDir, last + '.md');
    const abs5mdx = path.join(docsDirectory, langDir, last + '.mdx');
    t = tryReadTitle(abs5md) || tryReadTitle(abs5mdx);
    if (t) return t;

    const abs6md  = path.join(docsDirectory, langDir, `${prefix}${last}.md`);
    const abs6mdx = path.join(docsDirectory, langDir, `${prefix}${last}.mdx`);
    t = tryReadTitle(abs6md) || tryReadTitle(abs6mdx);
    if (t) return t;
  }

  return null;
}

// 排序/截取
docList.sort((a, b) => new Date(b.date) - new Date(a.date));
const latestDocs = docList.slice(0, 12);

// 填充多语言标题
const latestDocsWithI18n = latestDocs.map((it) => {
  const out = { ...it };
  const tCN = getLocalizedTitle(it, 'cn');
  const tJA = getLocalizedTitle(it, 'ja');
  const tES = getLocalizedTitle(it, 'es');
  if (tCN) out.title_cn = tCN;
  if (tJA) out.title_ja = tJA;
  if (tES) out.title_es = tES;
  delete out.relPath;
  return out;
});

// 每 2 条分组
const docList2D = [];
for (let i = 0; i < latestDocsWithI18n.length; i += 2) {
  docList2D.push(latestDocsWithI18n.slice(i, i + 2));
}

// 输出 wiki.js
const wikiContent = `const docList = ${JSON.stringify(docList2D, null, 2)};\n\nexport default docList;`;
fs.writeFileSync(wikiFilePath, wikiContent);

console.log('wiki.js 生成成功：已从 docs/zh-CN、docs/ja、docs/es 补全 title_cn/title_ja/title_es。');
