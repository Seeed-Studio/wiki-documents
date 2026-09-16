---
description: XIAO 0.96'' IPS Display (ESP32-S3) 入门指南。
title: XIAO 0.96'' IPS Display (ESP32-S3) 入门指南
keywords:
  - XIAO
  - ESP32-S3
  - 显示屏
  - LCD
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: 入门指南
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-20'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/getting_started_0.96_inch_display_esp32s3/
---

# XIAO 0.96'' IPS Display (ESP32-S3) 入门指南

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 0.96'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/0-96-Inch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6993.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## 介绍

0.96'' IPS Display 是一款由 XIAO ESP32-S3 Plus 驱动的紧凑型扩展板。它集成了 80×160 IPS 彩色 LCD、板载 PDM 麦克风、6 轴 IMU、两个用户按键、I2C 和 I2S 扩展焊盘以及电池电压检测，外形尺寸专为小型联网设备而设计。

ESP32-S3 Plus 提供了 Wi-Fi 和 Bluetooth 连接，使该板适用于紧凑型可穿戴设备、便携式传感器仪表盘、钥匙扣小工具以及无线 IoT 原型。

<div class="table-center">
  <table align="center">
    <tr><th>规格</th><th>详细参数</th></tr>
    <tr><td>产品定位</td><td>超紧凑</td></tr>
    <tr><td>核心控制器</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>处理器</td><td>ESP32-S3R8，双核，最高 240 MHz</td></tr>
    <tr><td>内存</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>无线连接</td><td>2.4 GHz Wi-Fi + BLE 5.0</td></tr>
    <tr><td>显示类型</td><td>0.96" IPS TFT LCD</td></tr>
    <tr><td>分辨率</td><td>80 × 160</td></tr>
    <tr><td>显示驱动</td><td>ST7789</td></tr>
    <tr><td>显示接口</td><td>SPI</td></tr>
    <tr><td>触摸输入</td><td>无</td></tr>
    <tr><td>6 轴 IMU</td><td>有</td></tr>
    <tr><td>PDM 数字麦克风</td><td>有</td></tr>
    <tr><td>MicroSD 卡槽</td><td>无</td></tr>
    <tr><td>Grove I2C 接口</td><td>无</td></tr>
    <tr><td>用户按键</td><td>2</td></tr>
    <tr><td>电池连接器</td><td>2 针 JST，3.7 V 锂电池</td></tr>
    <tr><td>电池监测</td><td>通过 D16 ADC 进行电池电压监测；可根据测得电压估算电池电量。不支持电池状态检测。</td></tr>
    <tr><td>扩展接口</td><td>1x I2C 接口，1x I2S 接口，1x JTAG 接口，2x 用户按键接口</td></tr>
    <tr><td>板子尺寸</td><td>18.8 × 43.6 × 10.6 mm</td></tr>
    <tr><td>最佳应用</td><td>微型 IoT 设备、可穿戴设备、状态显示屏</td></tr>
  </table>
</div>

:::note
该显示板专为 **XIAO ESP32-S3 Plus** 设计。如果你使用的是 XIAO nRF52840 Plus 版本，请参考 [XIAO 0.96'' IPS Display (nRF52840)](/cn/getting_started_0.96_inch_display_nrf52840) 指南。
:::

:::note
ESP32-S3 Plus 版本使用 D16 测量电池分压电压；不提供充电状态指示。
:::

## 硬件概览

在连接扩展硬件之前，请参考下图来识别连接器和板载元件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_overviewNEW.png" style={{width:1000, height:'auto'}}/></div>

### 引脚映射

下表列出了显示板及其板载外设所使用的 XIAO ESP32-S3 Plus 引脚。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 引脚</th><th>网络名称</th><th>功能描述</th><th>硬件连接说明</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM 麦克风时钟</td><td>内部连接到板载 PDM 麦克风</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>PDM 麦克风数据</td><td>内部连接到板载 PDM 麦克风</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>LCD 片选</td><td>内部连接到 LCD</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>LCD 数据/命令选择</td><td>内部连接到 LCD</td></tr>
    <tr><td>D4</td><td>I2C_SDA</td><td>I2C 数据</td><td>与板载 IMU 和背面 I2C 测试焊盘共用</td></tr>
    <tr><td>D5</td><td>I2C_SCL</td><td>I2C 时钟</td><td>与板载 IMU 和背面 I2C 测试焊盘共用</td></tr>
    <tr><td>D6</td><td>BTN_USR1</td><td>用户按键 1</td><td>低电平有效</td></tr>
    <tr><td>D7</td><td>BTN_USR2</td><td>用户按键 2</td><td>低电平有效</td></tr>
    <tr><td>D8</td><td>LCD_SCK</td><td>硬件 SPI 时钟</td><td>内部连接到 LCD</td></tr>
    <tr><td>D9</td><td>NC</td><td>未连接</td><td>无物理连接</td></tr>
    <tr><td>D10</td><td>LCD_MOSI</td><td>硬件 SPI 数据输出</td><td>内部连接到 LCD</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>I2S 音频数据</td><td>外部引出到底部扩展焊盘</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>I2S 位时钟</td><td>外部引出到底部扩展焊盘</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>I2S 字选择</td><td>外部引出到底部扩展焊盘</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU 中断</td><td>内部连接到 LSM6DS3，用于运动和双击事件</td></tr>
    <tr><td>D15</td><td>NC</td><td>未连接</td><td>无物理连接</td></tr>
    <tr><td>D16</td><td>VBAT_ADC</td><td>电池电压检测</td><td>连接到 316 kΩ / 160 kΩ 分压器。<strong>请勿外接使用</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>LCD 复位</td><td>内部连接到 LCD</td></tr>
    <tr><td>D18</td><td>LCD_BL_PWM</td><td>LCD 背光控制</td><td>内部连接到背光驱动电路</td></tr>
    <tr><td>D19</td><td>NC</td><td>未连接</td><td>无物理连接</td></tr>
  </table>
</div>


:::caution
D4 和 D5 与板载 IMU 共用。连接到测试焊盘的任何外部 I2C 设备必须使用唯一地址，并支持 3.3 V 逻辑电平。
:::

## 入门指南

:::caution
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_handing_tips.png" style={{width:600, height:'auto'}}/></div>
:::

本指南会向显示板上传一个最小的 **"Hello, XIAO"** 示例：屏幕点亮背光、填充为黑色，并以两行居中的大号绿色文字打印 **"Hello,"** 和 **"XIAO"**。这是在深入各个外设示例之前，最快确认屏幕和开发环境是否正常工作的方式。

### 软件准备

你需要以下工具和库：

- **Arduino IDE**（版本 1.8 或更高）

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **esp32 Boards by Espressif (3.3.11)** — 将以下 URL 添加到 **File > Preferences > Additional Boards Manager URLs**：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

然后进入 **Tools > Board > Boards Manager**，搜索 **esp32**，并安装 **3.3.11** 版本。

- **Seeed_GFX2（手动安装）** — 此库在 Library Manager 中不可用，必须手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到一个发布标签，以便教程保持可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆仓库。

**步骤 2.** 在 Arduino IDE 中，依次进入 **Sketch > Include Library > Add .ZIP Library...**，并选择下载的 ZIP。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你无需重命名解压后的文件夹。（如果要改为手动安装，请先解压压缩包，并在将其放入 `Documents/Arduino/libraries/` 之前，将解压后的文件夹重命名为 `Seeed_GFX2`。）

**步骤 3.** 重启 Arduino IDE，以便检测到新库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个示例都通过一次 `display.begin<Board_..., Config_...>()` 调用来初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 80×160 分辨率、颜色顺序（BGR）和方向。无需 `driver.h` 或手动引脚配置。
- 在此板上，示例程序使用 `Board_XIAO_0inch96_LCD<13, 12>`（RST=13，BL=12）以及 `Config_Seeed_0inch96_LCD_ST7789`。
:::

### 下载代码

示例程序可以在 GitHub 上获取：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_096_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

进入 `code_GFX2/getting_started_code/xiao_esp32s3_096_hello/`，并在 Arduino IDE 中打开 `xiao_esp32s3_096_hello.ino`。**请下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

### 上传示例程序

**步骤 1.** 通过 USB-C 将 XIAO ESP32-S3 Plus 连接到电脑。

**步骤 2.** 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**。

**步骤 3.** 在 **Tools > Port** 下选择正确的 **Port**。

**步骤 4.** 点击 **Upload**。示例程序将被编译并上传到开发板。

### 预期输出

上传完成后，屏幕会以黑色背景点亮，并显示两行居中的大号绿色文字——第一行是 **"Hello,"**，第二行是 **"XIAO"**。该问候语会保持在屏幕上，不会重复重绘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

如果显示屏初始化失败，示例程序会以 **115200** 波特率在串口监视器中打印库的错误信息。打开 **Tools > Serial Monitor** 并将波特率设置为 115200 以查看。

## 接下来做什么

该显示板集成了多个板载外设。[Function](/cn/function_0.96_inch_display_esp32s3) 页面为每个外设都提供了一个独立的演示：

<div class="table-center">
  <table align="center">
    <tr><th>外设</th><th>演示</th></tr>
    <tr><td>屏幕</td><td>[GraphicTest](/cn/function_0.96_inch_display_esp32s3#screen-display--graphictest) — 十种图形基本元素及其计时基准测试</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/cn/function_0.96_inch_display_esp32s3#imu) — 六轴运动特效和抬手唤醒</td></tr>
    <tr><td>麦克风和扬声器</td><td>[Flash Recorder](/cn/function_0.96_inch_display_esp32s3#microphone--speaker--flash-recorder) — 录制并回放音频</td></tr>
    <tr><td>按键</td><td>[User Buttons](/cn/function_0.96_inch_display_esp32s3#user-buttons) — 读取按键按下并使用中断进行去抖</td></tr>
    <tr><td>电池</td><td>[Battery Voltage Detection](/cn/function_0.96_inch_display_esp32s3#battery-voltage-detection) — 测量分压电压</td></tr>
  </table>
</div>

## 常见问题

### 开发板没有出现在 Tools > Board 菜单中

1. 打开 **File > Preferences**，并添加 ESP32 Boards Manager URL：

   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```

2. 打开 **Tools > Board > Boards Manager**，搜索 **esp32**，并安装 **3.3.11** 版本。
3. 选择 **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**。

如果开发板条目仍未出现，请重启 Arduino IDE。

### 我应该如何拿着这块板子？

请在靠近按键的位置握住电路板，不要触摸 **XIAO** 模块。请用手抓住按键区域来握持电路板。

### [关于出厂固件-DashBoard]

#### 为什么我插上 USB-C 线后屏幕不亮？

屏幕背光可能处于关闭状态。按下 **USR2 (D7)** 按钮以切换背光重新打开——显示屏就会正常点亮。

## 资源

- **🗃️[PCB 设计文件]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[原理图]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D 模型]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[数据手册]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[出厂固件]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

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
