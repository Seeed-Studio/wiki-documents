---
description: XIAO 1.47'' IPS Display (nRF52840) 入门指南。
title: XIAO 1.47'' IPS Display (nRF52840) 入门指南
sidebar_label: 入门指南
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/getting_started_1.47_inch_touch_display_nrf52840/
---

# XIAO 1.47'' IPS Display (nRF52840) 入门指南

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.47'' IPS Display (nRF52840)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/NEW147_nRF52840Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-nRF52840-Plus-p-6995.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## 介绍

1.47'' IPS Display 是一款为 XIAO 系列设计的扩展板，由 XIAO nRF52840 Plus 提供算力。它配备 172×320 彩色 LCD 电容触摸屏、板载 PDM 麦克风、6 轴 IMU（LSM6DS3）、MicroSD 卡槽以及电池电源管理——所有功能都集成在一个紧凑的外形中。

这种组合使其成为便携式 HMI 应用、IoT 仪表盘、可穿戴设备和交互式原型开发的理想平台。

<div class="table-center">
  <table align="center">
    <tr><th>规格</th><th>详细参数</th></tr>
    <tr><td>产品定位</td><td>触控与全交互</td></tr>
    <tr><td>核心控制器</td><td>Seeed Studio XIAO nRF52840 Plus</td></tr>
    <tr><td>处理器</td><td>Nordic nRF52840，ARM® Cortex®-M4 32 位处理器，带 FPU，64 MHz</td></tr>
    <tr><td>内存</td><td>256 KB RAM + 1 MB 片上 Flash + 2 MB 板载 Flash</td></tr>
    <tr><td>无线连接</td><td>BLE 5.4</td></tr>
    <tr><td>显示类型</td><td>1.47" IPS TFT LCD</td></tr>
    <tr><td>分辨率</td><td>172 × 320</td></tr>
    <tr><td>显示驱动</td><td>JD9853A</td></tr>
    <tr><td>显示接口</td><td>SPI</td></tr>
    <tr><td>触控输入</td><td>电容触摸</td></tr>
    <tr><td>6 轴 IMU</td><td>有</td></tr>
    <tr><td>PDM 数字麦克风</td><td>有</td></tr>
    <tr><td>MicroSD 卡槽</td><td>有</td></tr>
    <tr><td>Grove I2C 接口</td><td>无</td></tr>
    <tr><td>用户按键</td><td>2</td></tr>
    <tr><td>电池接口</td><td>适用于 3.7 V 锂聚合物电池的 2 针 JST 2.0 接口</td></tr>
    <tr><td>电池监测</td><td>支持电池状态检测；还可以监测电池电压以估算电量。</td></tr>
    <tr><td>扩展接口</td><td>1x I2C 焊盘、1x I2S 焊盘、1x SWD 焊盘、2x 用户按键焊盘</td></tr>
    <tr><td>板卡尺寸</td><td>26.4 × 51.4 × 12.6 mm</td></tr>
    <tr><td>最佳应用</td><td>触控 UI、便携式 HMI、本地多媒体与数据记录</td></tr>
  </table>
</div>

## 硬件总览

在开始之前，请参考下图来了解 1.47'' IPS Display 的物理布局。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### 引脚分布图

1.47'' IPS Display 引出了所有 XIAO nRF52840 Plus 引脚。下表列出了每个引脚、其在显示板上的网络名称、功能说明以及与板载外设的连接方式。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 引脚</th><th>网络名称</th><th>功能描述</th><th>硬件连接说明</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>MIC_CLK</td><td>PDM 数字麦克风时钟</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM 数字麦克风数据</td><td>内部连接到 PDM 麦克风</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>屏幕片选信号</td><td>内部连接到 LCD 驱动 IC</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>屏幕数据/命令切换</td><td>内部连接到 LCD 驱动 IC</td></tr>
    <tr><td>D4</td><td>SDA</td><td>I2C 数据总线</td><td>总线共享：内部连接到 IMU 和触控 IC；外部引出为 I2C 扩展焊盘</td></tr>
    <tr><td>D5</td><td>SCL</td><td>I2C 时钟总线</td><td>总线共享：内部连接到 IMU 和触控 IC；外部引出为 I2C 扩展焊盘</td></tr>
    <tr><td>D6</td><td>SD_CS</td><td>SD 卡片选信号</td><td>内部连接到 MicroSD 卡槽</td></tr>
    <tr><td>D7</td><td>TOUCH_INT</td><td>触控中断信号</td><td>内部连接到触控 IC，用于异步唤醒</td></tr>
    <tr><td>D8</td><td>SCK</td><td>硬件 SPI 时钟</td><td>内部连接到 LCD 和 SD 卡槽</td></tr>
    <tr><td>D9</td><td>MISO</td><td>硬件 SPI 数据输入</td><td>内部连接到 SD 卡槽</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>硬件 SPI 数据输出</td><td>内部连接到 LCD 和 SD 卡槽</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>音频数据线</td><td>对应 I2S_SD 默认映射，引出到底部焊盘组</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>音频位时钟</td><td>对应 I2S_SCK 默认映射，引出到底部焊盘组</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>音频字选择</td><td>对应 I2S_WS 默认映射，引出到底部焊盘组</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU 运动中断</td><td>功能重映射：用于运动唤醒</td></tr>
    <tr><td>D15</td><td>BTN_B</td><td>物理按键 2（USR2）</td><td>功能重映射：用户按键 2。外部引出为按键扩展焊盘</td></tr>
    <tr><td>D16</td><td>NC</td><td>悬空（预留）</td><td>无物理连接</td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>屏幕复位信号</td><td>独立 GPIO 控制以确保可靠启动</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>屏幕背光控制</td><td>支持硬件 PWM 亮度调节</td></tr>
    <tr><td>D19</td><td>BTN_A</td><td>物理按键 1（USR1）</td><td>用户按键 1。外部引出为按键扩展焊盘</td></tr>
  </table>
</div>


## 入门指南

本指南会向显示板上传一个最小的 **“Hello, XIAO”** 示例程序：屏幕会点亮背光、填充为黑色背景，并以两行居中的大号绿色文字打印 **“Hello,”** 和 **“XIAO”**。这是在深入各个外设示例之前，最快确认屏幕和开发环境是否正常工作的方式。

### 软件准备

你需要以下工具和库：

- **Arduino IDE**（1.8 或更高版本）

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div><br />

- **Seeed nRF52 Boards (1.1.13)** — 将以下 URL 添加到 **File > Preferences > Additional Boards Manager URLs**：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

然后进入 **Tools > Board > Boards Manager**，搜索 **Seeed nRF52** 并安装 **1.1.13** 版本。

- **Seeed_GFX2（手动安装）** — 此库不在 Library Manager 中，需要手动安装：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 1.** 点击上方按钮，将 `Seeed_GFX2` v1.0.0 作为 ZIP 文件下载（固定到某个发布标签，以保证教程可复现）。或者，从 [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) 克隆仓库。

**步骤 2.** 在 Arduino IDE 中，依次点击 **Sketch > Include Library > Add .ZIP Library...**，然后选择下载的 ZIP 文件。IDE 会读取 `library.properties` 并自动将其安装到正确的 `Seeed_GFX2` 文件夹中——你无需重命名解压后的文件夹。（如果要改为手动安装，请先解压压缩包，并在将其放入 `Documents/Arduino/libraries/` 之前，将解压后的文件夹重命名为 `Seeed_GFX2`。）

**步骤 3.** 重启 Arduino IDE，使其检测到新库。

:::tip
- **Seeed_GFX2** 是 Seeed Studio 基于分层 `Board` + `Panel Config` 架构构建的图形库。每个示例只需一次 `display.begin<Board_..., Config_...>()` 调用即可初始化显示屏——**Board** 模板负责引脚映射（CS/DC/SCK/MOSI/RST/BL），而 **Panel Config** 预设了 172×320 分辨率、颜色顺序（BGR）和方向。无需 `driver.h` 或手动引脚配置。
- 在这块板子上，示例程序使用 `Board_XIAO_1inch47_Touch_Display<38, 37>`（RST=38，BL=37）配合 `Config_Seeed_1inch47_Touch_JD9853A`。
- 示例使用的 **Adafruit TinyUSB** 库已随 **Seeed nRF52 Boards** 包一起提供，因此无需单独安装。
:::

### 下载代码

示例程序可以在 GitHub 上获取：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_nrf52840_147_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

导航到 `code_GFX2/getting_started_code/xiao_nrf52840_147_hello/` 并在 Arduino IDE 中打开 `xiao_nrf52840_147_hello.ino`。**请下载完整文件夹**，而不是从 GitHub 网页视图中复制 `.ino` 源码。

### 上传示例程序

**步骤 1.** 通过 USB-C 接口将 XIAO nRF52840 Plus 连接到电脑。

**步骤 2.** 在 Arduino IDE 中选择开发板：**Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus**。

**步骤 3.** 在 **Tools > Port** 下选择正确的 **端口（Port）**。

**步骤 4.** 点击 **Upload** 按钮 (→)。示例程序将被编译并上传到开发板。

:::note
如果遇到上传问题，请双击复位按钮进入 bootloader 模式。USR LED 会呈红色呼吸效果，并且电脑上会出现一个名为 **NRF52BOOT** 的磁盘，表示开发板已进入 bootloader 模式。
:::

### 预期输出

上传完成后，屏幕会点亮为黑色背景，并显示两行居中的大号绿色文字——第一行是 **"Hello,"**，第二行是 **"XIAO"**。该问候语会保持在屏幕上，不会重复重绘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

如果显示屏初始化失败，示例程序会以 **115200** 波特率在串口监视器中打印库的错误信息。请打开 **Tools > Serial Monitor** 并将波特率设置为 115200 以查看。

## 接下来做什么

该显示板集成了多个板载外设。[Function](/cn/function_1.47_inch_touch_display_nrf52840) 页面为每个外设提供了独立的演示：

<div class="table-center">
  <table align="center">
    <tr><th>外设</th><th>演示</th></tr>
    <tr><td>屏幕</td><td>[GraphicTest](/cn/function_1.47_inch_touch_display_nrf52840#screen-display--graphictest) — 十种图形基本元素及其计时基准测试</td></tr>
    <tr><td>触摸</td><td>[Touch Circle](/cn/function_1.47_inch_touch_display_nrf52840#touch--touch-circle) — 一个跟随你手指移动的圆圈</td></tr>
    <tr><td>SD 卡</td><td>[Image Reader](/cn/function_1.47_inch_touch_display_nrf52840#sd-card--image-reader) — 从 MicroSD 卡显示一张 BMP 图片</td></tr>
    <tr><td>麦克风和扬声器</td><td>[Volume Bar + Record to SD](/cn/function_1.47_inch_touch_display_nrf52840#microphone--speaker) — 实时 PDM 电平指示和录音到 SD</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/cn/function_1.47_inch_touch_display_nrf52840#imu) — 六轴运动特效和抬腕唤醒</td></tr>
    <tr><td>按键</td><td>[User Button](/cn/function_1.47_inch_touch_display_nrf52840#user-button) — 读取按键并通过中断进行去抖</td></tr>
    <tr><td>电池</td><td>[Battery Status](/cn/function_1.47_inch_touch_display_nrf52840#battery-status) — 测量电压并转换为百分比</td></tr>
  </table>
</div>

## 常见问题

### 如果上传失败或开发板未被识别怎么办？

双击 XIAO nRF52840 Plus 上的复位按钮。USR LED 会呈红色呼吸效果，并且电脑上会出现一个名为 **NRF52BOOT** 的磁盘。将编译好的 `.uf2` 文件拖到 **NRF52BOOT** 磁盘中。开发板会自动完成烧录并自动复位。

## 资源

- **🗃️[PCB 设计文件]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[原理图]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D 模型]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[数据手册]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[出厂固件]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

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
