---
description: 探索 SenseCAP MeshPager X2 系列独立 Meshtastic 通信设备，搭载 LR2021 LoRa、双频 GNSS、2.0 英寸显示屏、IP66 防护等级，以及最长 7 天的电池续航。
title: SenseCAP MeshPager X2 系列介绍
keywords:
  - MeshPager X2 Series
  - Meshtastic
  - ESP32-S3
  - LR2021
slug: /meshpager_x2_intro
sidebar_position: 0
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-10-09'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/cn/meshpager_x2_intro/
---


SenseCAP MeshPager X2 系列提供独立手持式 [Meshtastic®](https://meshtastic.org/) 通信设备，用于离网消息通信和位置共享。其由 ESP32-S3 和基于 **Semtech LR2021** 的 Wio-LR2021 模组驱动，将 **863–928 MHz LoRa、Bluetooth LE 和 Wi-Fi** 与双频 GNSS、**2.0 英寸 IPS 显示屏**、物理按键以及 **3400 mAh 电池**相结合。最长可达 **7 天续航时间**，并在 915 MHz 频段测试实现 **最长 10 km 视距通信**，你可以在 X2 上直接撰写消息、阅读会话和跟踪位置，而无需智能手机。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-angle.png" alt="MeshPager X2 product view showing the external antenna, display, orange buttons, and directional pad" width={1248} height={800} style={{width: 800, maxWidth: '100%', height: 'auto'}} />
  <figcaption>MeshPager X2。<a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-front.png" target="_blank" rel="noopener noreferrer">正面视图。</a></figcaption>
</figure>

## 特性

- **独立通信与便携设计：** 使用物理按键在 2.0 英寸显示屏上输入文本、查看消息并跟踪位置。紧凑机身配备金属背夹和挂绳孔，可将 X2 固定在背包、腰带或衣物上，挂在挂绳上，或放入口袋中携带。

- **新一代 LoRa 与远距离通信：** Semtech LR2021 支持 **863–928 MHz**，接收灵敏度低至 **−141 dBm**，在 **915 MHz 频段测试下视距通信距离最长可达 10 km**。外置 70 mm 柔性鞭状天线为身处偏远环境的团队提供远距离通信能力。

- **双频 GNSS 与海拔感知：** AG3335MV/B 提供适用于复杂户外环境（包括林地和峡谷）的 **L1 + L5 双频定位**。内置气压计提供大气压测量，用于实时海拔跟踪，补充徒步路径上的 GNSS 位置信息。

- **最长一周续航与 USB-C：** **3400 mAh 电池**可提供 **最长 7 天连续运行时间**，适合多日户外行程。USB-C 支持充电、固件更新和调试。

- **IP66 户外防护：** **IP66 级外壳**可防尘、防强降雨，适用于苛刻条件下的户外使用。

- **内置传感器、可扩展存储与音频硬件：** 气压计、磁力计和陀螺仪提供大气、航向和运动数据。**microSD 卡槽**在兼容固件下支持离线地图和数据记录。集成麦克风和扬声器为**未来语音消息更新**提供硬件基础。

实际通信距离和电池续航会随设备设置、使用方式、地形和工作环境而变化。

## 规格

<table aria-label="MeshPager X2 specification" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>项目</th>
      <th scope="col" style={{textAlign: 'center'}}>参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>处理器</th>
      <td>Espressif ESP32-S3R8，双核，最高 240 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>LoRa</th>
      <td>Wio-LR2021（Semtech LR2021）</td>
    </tr>
    <tr>
      <td>频率范围：863–928 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>GNSS</th>
      <td>AG3335MV/B，双频 L1 + L5 定位</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>内存</th>
      <td>32 MB Flash / 8 MB PSRAM</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={5} style={{textAlign: 'left', verticalAlign: 'middle'}}>天线</th>
      <td>外置 LoRa 天线，RP-SMA 公头连接器</td>
    </tr>
    <tr>
      <td>频率范围：863–928 MHz</td>
    </tr>
    <tr>
      <td>尺寸：Ø10.5 × 70 mm</td>
    </tr>
    <tr>
      <td>峰值增益：0.32 dBi</td>
    </tr>
    <tr>
      <td>最大效率：48.7%</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>无线连接</th>
      <td>Wi-Fi：2.4 GHz</td>
    </tr>
    <tr>
      <td>Bluetooth 5.0</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>接口</th>
      <td>USB Type-C</td>
    </tr>
    <tr>
      <td>MicroSD 卡槽（1-bit SDIO/SDMMC）</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>电源输入</th>
      <td>USB Type-C：5 V DC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>IPS 显示屏</th>
      <td>尺寸：2.0 英寸</td>
    </tr>
    <tr>
      <td>分辨率：240 × 320 像素</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>按键</th>
      <td>电源 × 1<br />方向键 × 4<br />确认 × 1<br />返回 × 1</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>音频</th>
      <td>麦克风：带 ES7243E ADC 的模拟麦克风<br />输出：ES8311 编解码器和 NS4150B 扬声器功放</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>通信距离</th>
      <td>最长 10 km（视距，在 915 MHz 下测试）</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>防护等级</th>
      <td>IP66</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>尺寸</th>
      <td>110.6 × 64.3 × 26.85 mm</td>
    </tr>
  </tbody>
</table>

## 电池

<table aria-label="MeshPager X2 battery" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>项目</th>
      <th scope="col" style={{textAlign: 'center'}}>参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>电池容量</th>
      <td>3400 mAh</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>充电接口</th>
      <td>USB Type-C（充电、固件烧录和数据传输）</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>设备电源输入</th>
      <td>5 V DC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>工作温度（放电）</th>
      <td>-20°C 至 60°C</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>充电温度</th>
      <td>5°C 至 45°C</td>
    </tr>
  </tbody>
</table>

<details>
<summary>电池温度条件</summary>

电芯在以下温度范围内规定了不同的电流：

- **放电：** -20°C 至 15°C 为 0.2C；15°C 至 60°C 为 0.5C。
- **充电：** 5°C 至 15°C 为 0.2C；15°C 至 45°C 为 0.5C。

避免在温度极限附近长时间充电或放电。

</details>

<details>
<summary style={{fontSize: '1.5rem', fontWeight: 600}}>硬件概览</summary>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" target="_blank" rel="noopener noreferrer">
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" alt="MeshPager X2 V1.0 hardware block diagram showing power, ESP32-S3, LoRa, GNSS, sensors, display, storage, and audio connections, with GPIO41 feeding ES8311 DSDIN and ES7243E SDOUT feeding GPIO42" width={4680} height={3960} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  </a>
  <figcaption>MeshPager X2 硬件框图。点击放大。</figcaption>
</figure>

| 组件 | 功能 |
| --- | --- |
| 前置显示屏 | 显示消息、节点信息、GNSS 状态和地图 |
| 方向键 | 菜单导航、屏幕键盘选择和地图平移 |
| 确认 / 返回 | 选择项目或返回上一视图 |
| 电源键 | 电源控制以及屏幕熄灭/唤醒 |
| 柔性 LoRa 天线 | Sub-GHz Mesh 无线连接 |
| USB-C 接口 | 充电和连接电脑 |
| microSD 卡槽 | 存储离线地图瓦片 |
| 麦克风和扬声器 | 音频输入和输出 |
| 气压计 | 提供用于海拔跟踪的大气压测量 |
| 金属背夹和挂绳孔 | 将 X2 固定在腰带、背包或挂绳上 |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="Close-up of the MeshPager X2 microSD card slot with its outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>microSD 卡槽。有关卡片准备，请参见 <a href="/cn/x2_get_started_for_meshtastic/#microsd-和离线地图">microSD 和离线地图</a>。</figcaption>
</figure>

有关设置和按键操作，请参见 [MeshPager X2 系列快速上手](/cn/x2_get_started_for_meshtastic/)。

### 引脚列表

<details>
<summary>ESP32-S3 引脚分配</summary>

这些分配遵循 MeshPager X2 V1.0 原理图。GPIO 编号标识的是 ESP32-S3 信号，而不是封装引脚编号。

| 功能 | 信号 | ESP32-S3 GPIO |
| --- | --- | --- |
| 返回 / BOOT 按键 | `ESP_BOOT/Return` | GPIO0 |
| 电池电压 | `BAT_ADC` | GPIO1 |
| 扩展器中断 | `EXP_I2C_INT1` | GPIO2 |
| LoRa SPI 时钟 | `LR_SPI_SCK` | GPIO3 |
| LoRa SPI 数据输出 | `LR_SPI_MOSI` | GPIO4 |
| LoRa SPI 数据输入 | `LR_SPI_MISO` | GPIO5 |
| LoRa 片选 | `LR_NSS` | GPIO6 |
| LoRa 中断 | `LR_DIO8` | GPIO7 |
| LoRa 忙碌 | `LR_BUSY` | GPIO8 |
| 电源按键 | `PWR_BUTTON` | GPIO9 |
| TFT 片选 | `TFT_CS` | GPIO10 |
| TFT SPI 数据 | `TFT_SDA` | GPIO11 |
| TFT SPI 时钟 | `TFT_SCK` | GPIO12 |
| TFT 数据/命令 | `TFT_A0` | GPIO13 |
| microSD 命令 | `SD_CMD` | GPIO14 |
| microSD 时钟 | `SD_CLK` | GPIO15 |
| microSD 数据 | `SD_DAT0` | GPIO16 |
| 扩展器 / RTC I2C | SDA / SCL | GPIO17 / GPIO18 |
| 原生 USB | D− / D+ | GPIO19 / GPIO20 |
| GNSS 每秒脉冲 | `AG_PPS0` | GPIO21 |
| 音频主时钟 | `CODEC_I2S0_MCLK` | GPIO38 |
| 音频位时钟 | `CODEC_I2S0_SCLK` | GPIO39 |
| 音频字时钟 | `CODEC_I2S0_LRCK` | GPIO40 |
| 音频播放数据 | `CODEC_I2S0_DSDIN` | GPIO41 |
| 音频采集数据 | `CODEC_I2S0_SDOUT` | GPIO42 |
| GNSS UART | MCU TX / MCU RX | GPIO43 / GPIO44 |
| RTC 输出 | `RTC_OUT` | GPIO45 |
| TFT 背光 | `TFT_PWM` | GPIO46 |
| 传感器 / 音频 I2C | SDA / SCL | GPIO47 / GPIO48 |

</details>

<details>
<summary>I/O 扩展器和 I2C 设备</summary>

**I/O 扩展器**

TCA6424A 的 I2C 地址为 `0x22`。诸如 `P14` 之类的端口名称标识的是扩展器引脚，而不是 ESP32-S3 的 GPIO。

| TCA6424A 端口 | 原理图信号 / 功能 |
| --- | --- |
| P00 / P01 / P02 / P03 | 上 / 下 / 左 / 右 |
| P04 | 确认 |
| P05 | 测试点 TP47 |
| P06 | `CHARGER_STAT`，充电器状态 |
| P07 | `EXP_SD_DET`，microSD 检测 |
| P10 / P11 | `AG_RTC_INT` / `AG_SLEEP_INT`，GNSS 中断 |
| P12 | `IMU_INT1`，运动传感器中断 |
| P13 | 测试点 TP41 |
| P14 | `VCC_SEN_EN`，传感器和音频电源使能 |
| P15 | `VCC_SD_EN`，microSD 供电使能 |
| P16 | `VCC_TFT_EN`，TFT 和背光电源使能 |
| P17 | `AG_VRTC_EN`，GNSS 备份电源使能 |
| P20 | `AG_PWR_EN`，GNSS 主电源使能 |
| P21 | `VBAT_ADC_EN`，电池测量使能 |
| P22 | `AUDIO_PA_EN`，扬声器功放使能 |
| P23 | `USB_IN`，USB 输入检测 |
| P24 | `PWR_HOLD`，主电源锁存 |
| P25 / P26 / P27 | TFT / LoRa / GNSS 复位 |

**I2C 设备**

| 总线 | 设备 | 原理图中显示的地址 |
| --- | --- | --- |
| GPIO17 SDA / GPIO18 SCL | TCA6424A I/O 扩展器 | `0x22` |
| GPIO47 SDA / GPIO48 SCL | LSM6DSO 运动传感器 | `0x6A` |
| GPIO47 SDA / GPIO48 SCL | BMM350 磁力计 | `0x15` |
| GPIO47 SDA / GPIO48 SCL | SPA06-003 气压计 | `0x77` |
| GPIO47 SDA / GPIO48 SCL | ES8311 编解码器 | `0x18` |
| GPIO47 SDA / GPIO48 SCL | ES7243E ADC | `0x14` |

在 V1.0 原理图中，BMM350 的 `ADSEL` 引脚通过 R147（10 kΩ）上拉，选择 `0x15`。ES7243E 使用 `0x14`，因此这两个器件在共享的 I2C 总线上具有不同的地址。

</details>

<details>
<summary>硬件集成注意事项</summary>

- **天线：** 规格基于 M02-0401060R0A，并使用供应商的参考测试设置。请根据当地法规选择设备的 LoRa 区域。
- **电池：** 使用指定的 X2 电池，其额定充电电压为 4.4 V，并带有温度检测连接。不要替换为最大充电电压额定值为 4.2 V 的电芯。
- **Flash：** X2 具有 32 MB 外部 Flash。V1.0 原理图指定为 PY25Q256HB-SUH-IR。请使用与匹配固件包一起提供的分区布局。
- **按键和电源检测：** Return 连接到 ESP32-S3 `GPIO0`。TCA6424A 的 `P06` 提供充电器状态，`P23` 提供 USB 输入检测；`P05` 和 `P13` 连接到测试点 TP47 和 TP41。
- **射频：** LoRa 使用模块的 `Sub-G_RF` 连接。其 `2.4G_RF` 端口未连接；Wi-Fi 和 Bluetooth 使用 ESP32-S3 的天线路径。

</details>

</details>

## 应用

- **离网团队通信：** 当蜂窝或 Wi-Fi 服务不可用时，与其他 Meshtastic 节点交换文本消息并共享位置。
- **徒步和露营：** 直接在 X2 上查看 GNSS 位置和预加载离线地图。使用物理按键在无需智能手机的情况下撰写和阅读消息。

有关设置和操作，请参阅 [MeshPager X2 系列入门指南](/cn/x2_get_started_for_meshtastic/)。

## 文档

- [MeshPager X2 功耗表格 (.xlsx)](https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager%20X2%20power%20consumption.xlsx)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="加入 Seeed Studio Meshtastic Facebook 社区"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed Studio technical forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed Studio support"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Studio Discord community"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Seeed Studio Wiki discussion"></a>
</div>
