---
description: SenseCAP MeshTracker X1 适用于 Meshtastic 的介绍。本 Wiki 将介绍其特性、规格、硬件概览、按键、LED 和引脚列表。
title: SenseCAP MeshTracker X1 介绍
keywords:
  - Tracker
  - Meshtastic
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
sku: 100087698
slug: /meshtracker_x1_intro
sidebar_position: 0
last_update:
  date: 5/29/2026
  author: MichelleHuang
url: https://wiki.seeedstudio.com/cn/meshtracker_x1_intro/
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
---

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" alt="pir" width={900} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>

全球首款卡片尺寸、支持双频 GPS 的 Meshtastic 设备。MeshTracker X1 专为可靠的离网通信而打造，是一款支持 863–928 MHz 频段、具备 IP66 防护等级的 [Meshtastic®](https://meshtastic.org/) GPS 追踪器。其采用最新的 Semtech LR2021 LoRa 芯片，具备 USB-C 连接、最长 5 天电池续航，以及紧凑且适用于户外的设计。

### 特性
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/LoRaWio/20260723-194348.jpg" alt="pir" width={900} height="auto" /></p>


- **一款你真的会随身携带的 Meshtastic 设备** 

SenseCAP MeshTracker X1 专为需要在蜂窝网络覆盖之外实现可靠通信和位置共享的人群设计——无论是在户外、在大型活动现场，还是在紧急情况下。凭借真正便携的外形和坚固的 IP66 防护，它将 Meshtastic 连接带入日常随身携带和真实野外应用场景。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/CompactTracker.jpg" alt="pir" width={900} height="auto" /></p>

- **超高精度双频 GPS 追踪** 

得益于双频 L1+L5 GNSS 和内置气压计，MeshTracker X1 相比单频 GPS 提供更可靠的定位和高度感知能力。它也是全球首款卡片尺寸、支持双频 GPS 的 Meshtastic 设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/GNSSBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **新一代 LoRa 连接（LR2021）** 

得益于 Semtech LR2021，MeshTracker X1 提供更强的射频性能，灵敏度高达 -141 dBm，并支持 2.6 Mbps 的 FLRC 数据速率，实现更快速、更可靠的 Mesh 通信，为未来的语音和图像传输等功能奠定基础。

- **可靠的远距离通信** 

在 915 MHz 频段测试中，MeshTracker X1 在开阔视距条件下可实现最长 8 km 的可靠通信距离，让团队在户外探险、活动和紧急情况下始终保持联络。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Dazzaristance.jpg" alt="pir" width={900} height="auto" /></p>

- **卡片尺寸设计，便于携带** 

MeshTracker X1 机身纤薄轻巧，专为户外活动中的日常随身携带而设计。你可以将其挂在挂绳上、固定在背包上、绑在车包上，或直接放入口袋中，轻松实现离网连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/EasyTakingBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **灵活的振动与声音提醒** 

MeshTracker X1 通过内置振动和蜂鸣器反馈提供灵活的通知选项。无论你身处嘈杂的活动现场、户外骑行途中，还是在希望尽量减少干扰的安静小径上，都能及时感知收到的新消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/VibraBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **IP66 级坚固户外防护** 

具备 IP66 级防尘防水能力，可在雨天、泥地和尘土飞扬的道路等恶劣户外环境中保持可靠运行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IP66Bazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **USB-C 连接** 
采用标准 USB-C 接口，用于充电、固件更新和调试，同时兼顾户外耐用性与日常使用的便利性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Type-CBazzar.jpg" alt="pir" width={900} height="auto" /></p>

- **延长电池续航** 

高度集成的卡片尺寸外形围绕高容量 1100mAh 电池进行优化，在保持紧凑便携、适合户外携带和离网通信的同时，可提供最长 5 天的续航时间。


### 规格

**通用参数**

|项目|参数|
| :- | :- |
|**主控制器**|Nordic nRF52840|
|**无线**|Bluetooth (v5.0)|
|**LoRa**|Semtech LR2021<br/>863–928 MHz<br/>最大发电功率：22dBm|
|**LED**|1\* RGB|
|**蜂鸣器**|1\* 蜂鸣器用于状态指示|
|**按键**|1\* 按键用于操作|
|**电机**|1\* DRV2605L|
| **气压**|范围：300–1100 hPa<br/>精度：±0.03 hPa<br/>分辨率：0.06 Pa|
| **温度**<br/>(温度从气压计中读取)| 范围：-40-85°C<br/>精度：± 1°C<br/>分辨率：0.0006 °C |
|**天线**|内置（GNSS/LoRa/Bluetooth）|
|**通信距离**|最长 8 km|
|**防护等级**|IP66|
|**尺寸**|90\*57\*8 mm|
|**设备重量**|45g|
|**工作温度**|-20 至 60℃|
|**认证**|CE/FCC/RoHS/TELEC|

**电池**

|项目|参数|s
| :- | :- |
|**电池容量**|可充电 LCD 电池，1100mAh|
|**电池电量监测**|定期上报电池电量|
|**充电协议**|USB Type-C|
|**设备电源输入**|5V, 0.55A|
|**电池电源输入**|4.4V, 0.22A|
|**充满电截止电压**|4.37V|
|**充电温度限制**|5 至 +45℃|

X1 未来可能发展为一个产品系列，后续推出的新产品将配备更多传感器（3 轴传感器、六轴磁力计等）。

### 引脚列表

<table>
  <tr>
    <th>组件</th>
    <th>引脚</th>
    <th>引脚号</th>
    <th>协议</th>
  </tr>
  <tr>
    <td rowspan="3">LED</td>
    <td>R</td>
    <td>P0.03</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>G</td>
    <td>P0.24</td>
  </tr>
  <tr>
    <td>B</td>
    <td>P0.28</td>
  </tr>
  <tr>
    <td>Sensor PWR EN</td>
    <td>-</td>
    <td>P1.07</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>蜂鸣器</td>
    <td>-</td>
    <td>P0.25</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="3">电机驱动</td>
    <td>EN</td>
    <td>P1.05</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="2">气压传感器</td>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">6 轴传感器（未来版本）</td>
    <td>INT</td>
    <td>P1.02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td rowspan="3">3 轴传感器（未来版本）</td>
    <td>INT</td>
    <td>P1.12</td>
    <td>GPIO</td>
  </tr>
    <tr>
    <td>SCL</td>
    <td>P1.14</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>SDA</td>
    <td>P1.15</td>
  </tr>
  <tr>
    <td>按键</td>
    <td>-</td>
    <td>P0.06</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="7">LR2021</td>
    <td>SPIMISO</td>
    <td>P1.08</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>SPIMOSI</td>
    <td>P1.09</td>
  </tr>
  <tr>
    <td>SPISCK</td>
    <td>P0.11</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.12</td>
  </tr>
  <tr>
    <td>LR_RST</td>
    <td>P1.10</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LR_BUSY</td>
    <td>P0.07</td>
  </tr>
  <tr>
    <td>LR_DIO8</td>
    <td>P1.01</td>
  </tr>
  <tr>
    <td rowspan="7">GNSS</td>
    <td>TX</td>
    <td>P0.13</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>RX</td>
    <td>P0.14</td>
  </tr>
  <tr>
    <td>Sleep_INT</td>
    <td>P0.30</td>
    <td rowspan="5">GPIO</td>
  </tr>
  <tr>
    <td>PPS0</td>
    <td>P0.04</td>
  </tr>
  <tr>
    <td>RTC_INT</td>
    <td>P0.29</td>
  </tr>
  <tr>
    <td>PWR_EN</td>
    <td>P1.11</td>
  </tr>
  <tr>
    <td>RTC_PWR_EN</td>
    <td>P1.13</td>
  </tr>
   <tr>
    <td rowspan="6">8MB Flash</td>
    <td>SPISCK</td>
    <td>P0.19</td>
    <td rowspan="6">SPI</td>
  </tr>
  <tr>
    <td>SPInCS</td>
    <td>P0.20</td>
  </tr>
  <tr>
    <td>SPIO0</td>
    <td>P0.21</td>
  </tr>
  <tr>
    <td>SPIO1</td>
    <td>P0.22</td>
  </tr>
  <tr>
    <td>SPIO2</td>
    <td>P0.23</td>
  </tr>
  <tr>
    <td>SPIO3</td>
    <td>P1.00</td>
  </tr>
</table>

### 按键

|按键操作|说明|蜂鸣器|
|- |- |- |
|单击一次|开机|上升音调|
|单击两次|更新节点/位置信息|-|
|单击三次|打开/关闭 GPS|-|
|连续点击四次|临时静音/取消静音|-|
|长按 5 秒|关机|下降音调|

### LED

<table>
  <tr>
    <th colspan="2">灯光状态</th>
    <th colspan="1">设备状态</th>
  </tr>
  <tr>
    <td rowspan="4">🟢绿色</td>
    <td>常亮</td>
    <td>设备开机中</td>
  </tr>
  <tr>
    <td>快速闪烁 </td>
    <td>正常运行</td>
  </tr>
  <tr>
    <td>慢速闪烁 </td>
    <td>充电中</td>
  </tr>
 <tr>
    <td>常亮</td>
    <td>已充满</td>
  </tr>
  <tr>
    <td>🔴红色</td>
    <td>闪烁</td>
    <td>电量低</td>
  </tr>
    <tr>
    <td>⚪️白色</td>
    <td>常亮</td>
    <td>DFU 模式/Bootloader 模式</td>
  </tr>
</table>

### 硬件示意图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardwareDiagramBu.png" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/HardwareDiagram729.png" alt="pir" width={900} height="auto" /></p>

### 资源

[电池测试报告](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Battry_Certification.zip)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>