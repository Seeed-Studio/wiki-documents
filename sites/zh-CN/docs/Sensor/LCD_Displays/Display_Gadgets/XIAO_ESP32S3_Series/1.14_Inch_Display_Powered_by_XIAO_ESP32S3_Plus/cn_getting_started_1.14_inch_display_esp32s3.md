---
description: XIAO 1.14'' IPS Display (ESP32-S3) 入门指南。
title: XIAO 1.14'' IPS Display (ESP32-S3) 入门指南
keywords:
  - XIAO
  - ESP32-S3
  - 显示屏
  - LCD
  - 1.14
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_1.14_inch_display_esp32s3
sku: 100086099
sidebar_label: 入门指南
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/getting_started_1.14_inch_display_esp32s3/
---

# XIAO 1.14'' IPS Display (ESP32-S3) 入门指南

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.14'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-14-Inch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6991.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## 介绍

1.14'' IPS Display 是一款为 XIAO 系列设计的扩展板，由 XIAO ESP32-S3 Plus 提供算力。它配备 135×240 IPS 彩色 LCD、板载 PDM 麦克风、6 轴 IMU、Grove I2C 接口、三个用户按键以及电池电压测量功能——所有这些都集成在一个紧凑的外形尺寸中。

这种组合使其成为可穿戴设备、紧凑型传感节点、便携式仪器以及对空间要求极高的 IoT 原型开发的理想平台。借助 ESP32-S3 的双核处理器、Wi-Fi 和 Bluetooth 能力，它可以将显示屏扩展为一个具备无线连接能力的设备。

<div class="table-center">
  <table align="center">
    <tr><th>规格</th><th>详细参数</th></tr>
    <tr><td>产品定位</td><td>感知与扩展</td></tr>
    <tr><td>核心控制器</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>处理器</td><td>ESP32-S3R8，双核，最高 240 MHz</td></tr>
    <tr><td>内存</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>无线连接</td><td>2.4 GHz Wi-Fi + BLE 5.0</td></tr>
    <tr><td>显示类型</td><td>1.14" IPS TFT LCD</td></tr>
    <tr><td>分辨率</td><td>135 × 240</td></tr>
    <tr><td>显示驱动</td><td>ST7789</td></tr>
    <tr><td>显示接口</td><td>SPI</td></tr>
    <tr><td>触摸输入</td><td>无</td></tr>
    <tr><td>6 轴 IMU</td><td>有</td></tr>
    <tr><td>PDM 数字麦克风</td><td>有</td></tr>
    <tr><td>MicroSD 卡槽</td><td>无</td></tr>
    <tr><td>Grove I2C 接口</td><td>有</td></tr>
    <tr><td>用户按键</td><td>3</td></tr>
    <tr><td>电池连接器</td><td>2 针 JST，3.7 V 锂电池</td></tr>
    <tr><td>电池监测</td><td>通过 D16 ADC 进行电池电压监测；可根据测得电压估算电池电量。不支持电池状态检测。</td></tr>
    <tr><td>扩展接口</td><td>1x I2S 接口，1x JTAG 接口，3x 用户按键接口</td></tr>
    <tr><td>板卡尺寸</td><td>26 × 48 × 10.6 mm</td></tr>
    <tr><td>最佳应用</td><td>传感器仪表盘、Grove 项目、物理控制器</td></tr>
  </table>
</div>

:::note
该显示板专为 **XIAO ESP32-S3 Plus** 设计。如果你使用的是 XIAO nRF52840 Plus 版本，请改为参考 [XIAO 1.14'' IPS Display (nRF52840)](/cn/getting_started_1.14_inch_display_nrf52840) 指南。
:::

:::note
ESP32-S3 Plus 使用 D16 进行电压测量。电压示例程序不会显示电池百分比，也没有将充电状态信号连接到任何 ESP32-S3 GPIO。
:::

## 硬件概览

在开始之前，请参考下图来了解 1.14'' IPS Display 的物理布局。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_display_hardware_overviewNEW.png" style={{width:1000, height:'auto'}}/></div>

### 引脚分布图

1.14'' IPS Display 引出了所有 XIAO ESP32-S3 Plus 引脚。下表列出了每个引脚、其在显示板上的网络名称、功能说明以及与板载外设的连接方式。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 引脚</th><th>网络名称</th><th>功能说明</th><th>硬件连接说明</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM 数字麦克风时钟</td><td>内部连接到 PDM 麦克风</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM 数字麦克风数据</td><td>内部连接到 PDM 麦克风</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>屏幕片选信号</td><td>内部连接到 LCD 驱动 IC</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>屏幕数据/命令切换</td><td>内部连接到 LCD 驱动 IC</td></tr>
    <tr><td>D4</td><td>SDA</td><td>I2C 数据总线</td><td>总线共享：内部连接到 IMU；外部引出到 Grove I2C 接口</td></tr>
    <tr><td>D5</td><td>SCL</td><td>I2C 时钟总线</td><td>总线共享：内部连接到 IMU；外部引出到 Grove I2C 接口</td></tr>
    <tr><td>D6</td><td>BTN_A</td><td>物理按键 A（左）</td><td>内部连接到前左侧微动开关，并带有外部 1 KΩ 上拉。外部引出为 U1 测试焊盘</td></tr>
    <tr><td>D7</td><td>BTN_B</td><td>物理按键 B（右）</td><td>内部连接到前右侧微动开关，并带有外部 1 KΩ 上拉。外部引出为 U2 测试焊盘</td></tr>
    <tr><td>D8</td><td>SCK</td><td>硬件 SPI 时钟</td><td>内部连接到 LCD 驱动 IC</td></tr>
    <tr><td>D9</td><td>NC</td><td>悬空（预留）</td><td>无物理连接</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>硬件 SPI 数据输出</td><td>内部连接到 LCD 驱动 IC</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>音频数据输出</td><td>外部引出到底部扩展焊盘</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>音频位时钟</td><td>外部引出到底部扩展焊盘</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>音频字选择</td><td>外部引出到底部扩展焊盘</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU 运动硬件中断</td><td>内部连接到 6 轴 IMU，用于异步唤醒</td></tr>
    <tr><td>D15</td><td>NC</td><td>预留（测试点）</td><td>连接到 PCB 上的测试点 TP15，无功能外设</td></tr>
    <tr><td>D16</td><td>BAT_ADC</td><td>电池电压检测</td><td>内部连接到分压电路（316K / 160K）。<strong>请勿外接使用</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>屏幕软复位</td><td>内部连接到 LCD 驱动 IC</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>屏幕背光控制</td><td>内部连接到背光驱动电路</td></tr>
    <tr><td>D19</td><td>BTN_C</td><td>物理按键 C（侧边）</td><td>内部连接到侧边微动开关，并带有外部 1 KΩ 上拉。外部引出为 U3 测试焊盘</td></tr>
  </table>
</div>


## 入门

本指南会向显示板上传一个最小的 **"Hello, XIAO"** 示例：屏幕会点亮背光、填充为黑色背景，并以两行居中的大号绿色文字打印 **"Hello,"** 和 **"XIAO"**。这是在深入各个外设示例之前，最快确认屏幕和你的开发环境是否正常工作的方式。

### 软件准备

你需要以下工具和库：

- **Arduino IDE**（版本 1.8 或更高）

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **Espressif 提供的 esp32 开发板包 (3.3.11)** — 将以下 URL 添加到 **File > Preferences > Additional Boards Manager URLs**：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

然后进入 **Tools > Board > Boards Manager**，搜索 **esp32** 并安装 **3.3.11** 版本。

- **Seeed_GFX2（手动安装）** — 此库在 Library Manager 中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到某个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆该仓库。

**步骤 2.** 在 Arduino IDE 中，依次进入 **Sketch > Include Library > Add .ZIP Library...**，然后选择下载的 ZIP 文件。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你无需重命名解压后的文件夹。（如果要改为手动安装，请先解压压缩包，将解压后的文件夹重命名为 `Seeed_GFX2`，再放入 `Documents/Arduino/libraries/` 中。）

**步骤 3.** 重启 Arduino IDE，以便检测到新安装的库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个示例都通过一次 `display.begin<Board_..., Config_...>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 135×240 分辨率、颜色顺序和方向。无需 `driver.h` 或手动引脚配置。
- 在这块板子上，示例程序使用 `Board_XIAO_1inch14_LCD<13, 12>`（RST=13，BL=12）和 `Config_Seeed_1inch14_LCD_ST7789`。
:::

### 下载代码

示例程序可以在 GitHub 上获取：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_114_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

进入 `code_GFX2/getting_started_code/xiao_esp32s3_114_hello/` 并在 Arduino IDE 中打开 `xiao_esp32s3_114_hello.ino`。**请下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

### 上传示例程序

**步骤 1.** 通过 USB-C 接口将 XIAO ESP32-S3 Plus 连接到电脑。

**步骤 2.** 在 Arduino IDE 中选择开发板：**Tools > Board > esp32 > XIAO_ESP32S3_PLUS**。

**步骤 3.** 在 **Tools > Port** 中选择正确的 **端口（Port）**。

**步骤 4.** 点击 **Upload** 按钮（→）。示例程序会被编译并上传到开发板。

### 预期输出

上传完成后，屏幕会点亮为黑色背景，并显示两行居中的大号绿色文字——第一行是 **"Hello,"**，第二行是 **"XIAO"**。该问候语会保持在屏幕上，不会重复重绘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

如果显示屏初始化失败，示例程序会以 **115200** 波特率在串口监视器中打印库的错误信息。打开 **Tools > Serial Monitor** 并将波特率设置为 115200 以查看。

## 接下来做什么

这块显示板集成了多个板载外设。[Function](/cn/function_1.14_inch_display_esp32s3) 页面为每个外设都提供了独立的演示：

<div class="table-center">
  <table align="center">
    <tr><th>外设</th><th>演示</th></tr>
    <tr><td>屏幕</td><td>[GraphicTest](/cn/function_1.14_inch_display_esp32s3#screen-display--graphictest) — 十种图形基本图元及其计时基准测试</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/cn/function_1.14_inch_display_esp32s3#imu) — 六轴运动特效和抬手唤醒</td></tr>
    <tr><td>麦克风和扬声器</td><td>[Voice Bar + Flash Recorder](/cn/function_1.14_inch_display_esp32s3#microphone--speaker) — 实时 PDM 电平指示和录音</td></tr>
    <tr><td>Grove I2C</td><td>[SHT31 Temperature & Humidity](/cn/function_1.14_inch_display_esp32s3#grove-i2c) — 读取 Grove SHT31 传感器</td></tr>
    <tr><td>按键</td><td>[User Buttons](/cn/function_1.14_inch_display_esp32s3#user-buttons) — 读取按键并使用中断进行去抖</td></tr>
    <tr><td>电池</td><td>[Battery Voltage Detection](/cn/function_1.14_inch_display_esp32s3#battery-voltage-detection) — 测量分压电压</td></tr>
  </table>
</div>

## 常见问题（FAQ）

### 开发板没有出现在 Tools > Board 菜单中

请确保你已经在 Arduino IDE 中添加了 ESP32 开发板包：

1. 进入 **File > Preferences**，并将下面的 URL 粘贴到 **Additional Boards Manager URLs** 中：
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
2. 进入 **Tools > Board > Boards Manager**，搜索 **esp32**，并安装 **3.3.11** 版本。
3. 安装完成后，菜单中应出现 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**。

如果开发板仍然没有显示，请重启 Arduino IDE 后再试一次。

### [关于出厂固件 - DashBoard]

#### 仪表盘上的 I2C 扫描卡住了——我该怎么办？

按一下 XIAO ESP32-S3 Plus 上的 **Reset** 按钮以重启开发板。这会清除卡住的 I2C 总线，使仪表盘恢复正常。

我们强烈建议**不要热插拔** I2C 接口上的设备。在 Grove I2C 接口或 SDA/SCL 引出焊盘上连接或断开任何设备前，请务必先关闭开发板电源——热插拔可能会导致 I2C 总线挂起。

## 资源

- **🗃️[PCB 设计文件]** [XIAO 1.14'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[原理图]** [XIAO 1.14'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D 模型]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[数据手册]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[出厂固件]** [XIAO 1.14'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
