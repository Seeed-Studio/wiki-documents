---
description: XIAO 圆形显示屏基础教程
title: Seeed Studio XIAO 圆形显示屏入门指南
keywords:
- XIAO
- Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/get_start_round_display
last_update:
  date: 07/11/2024
  author: Spencer
---

# Seeed Studio XIAO 圆形显示屏入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 介绍

Seeed Studio XIAO 圆形显示屏是一款与所有 XIAO 开发板兼容的扩展板。它的一面配备了全覆盖触摸屏，设计为 39mm 圆盘形状。在紧凑的尺寸内集成了板载 RTC、充电芯片、TF 卡槽，非常适合智能家居、可穿戴设备等交互式显示应用。

<table align="center">
 <tr>
  <th>版本</th>
  <th>描述</th>
  <th>日期</th>
  <th>作者</th>
 </tr>
 <tr>
  <td>v1.0</td>
  <td>初始版本</td>
  <td>2023/1/29</td>
  <td>Linus.Liao</td>
 </tr>
 <tr>
  <td>v1.1</td>
  <td>1.更换锂电池充电IC<br />2.在A0和D6之间添加开关</td>
  <td>2023/4/7</td>
  <td>Linus.Liao</td>
 </tr>
</table>

### 规格参数

<table align="center">
 <tr>
     <th>项目</th>
     <th>详细信息</th>
 </tr>
 <tr>
     <th>电源供应</th>
     <td>USB Type-C: 5V @35 mA <br></br> 电池充电: 3.7V @37mA</td>
 </tr>
 <tr>
     <th>充电电流</th>
     <td>~ 485 mA</td>
 </tr>
  <tr>
     <th>可扩展存储</th>
     <td>TF 卡插槽，支持最大 32GB FAT 格式</td>
 </tr>
  <tr>
     <th>屏幕</th>
     <td>1.28 英寸触摸屏 <br></br> 240×240 分辨率 <br></br> 65K 色彩</td>
 </tr>
  <tr>
     <th>其他外部设备</th>
     <td>JST 1.25 连接器</td>
 </tr>
  <tr>
     <th>尺寸</th>
     <td>39mm x 39mm</td>
 </tr>
</table>

### 特性

- **电容触摸屏扩展板**：配备1.28英寸圆形显示屏，240×240分辨率，65K色彩，提供清晰多彩的图像展示
- **高兼容性**：与所有XIAO系列产品高度兼容，轻松集成到您现有的项目中
- **丰富外设**：在紧凑尺寸内集成板载RTC、电池充电芯片、TF卡槽、JST 1.25连接器
- **手表尺寸设计**：采用39毫米圆形设计，适用于可穿戴和空间受限的项目
- **即插即用**：所有引脚均已引出，无需焊接

## 硬件概述

在开始之前，我们可以参考以下图片了解圆形显示屏的引脚设计，以便于我们理解圆形显示屏的功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

自2023年4月7日起，改进后的圆形显示屏增加了一个2位开关来控制屏幕背光和电池电压读取。用户可以自由选择是否使用该引脚或释放它。点击[这里](https://wiki.seeedstudio.com/cn/seeedstudio_round_display_usage/#ke-button--gpio)阅读更多详细信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

### 硬件准备

如果您想充分利用圆形显示屏的全部功能并获得出色的体验，我们强烈建议您购买我们的XIAO系列作为圆形显示屏的主板。

:::tip
XIAO SAMD21、RP2040和RA4M1由于内存不足，可能**不**兼容圆形屏幕。
:::

<table align="center">
 <tr>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C6</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Round Display 背面的引脚排设计用于 XIAO 系列。如果您手头有 XIAO，则无需准备任何额外的电缆，只需对齐 XIAO 的引脚并将其直接插入 Round Display 即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
请注意，连接 XIAO 时，**XIAO 的 Type-C 连接器应朝向 Round Display 的外侧**。如果您意外接反了极性，不要过于担心，Round Display 具有电源保护电路，不会轻易损坏，但我们不建议您长时间保持反向连接。
:::

Round Display 的推荐方向是：当您面对 Round Display 时，XIAO 的 Type-C 连接器朝向右侧，这样 Round Display 的开/关按钮就在左下角。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### 软件准备

要使用 Round Display，我们需要对 XIAO 系列进行编程。推荐的编程工具是 Arduino IDE，您需要为 XIAO 配置 Arduino 环境并添加板载包。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 步骤 1. 根据您的操作系统下载并安装稳定版本的 Arduino IDE

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

#### 步骤 2. 启动 Arduino 应用程序

#### 步骤 3. 为您正在使用的 XIAO 配置 Arduino IDE

- 如果您想在后续例程中使用 **Seeed Studio XIAO RP2350**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/getting-started-xiao-rp2350/)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO nRF52840**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO ESP32C3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO ESP32C6**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/#software-preparation)** 完成添加。

- 如果您想在后续例程中使用 **Seeed Studio XIAO ESP32S3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

#### 步骤 4. 安装图形库和屏幕驱动库

要使用圆形显示屏，我们需要提前安装两个库。一个是圆形显示设备驱动库，用于驱动设备的屏幕和触摸功能。另一个是图形显示库，它提供了一些非常常用的绘制图形接口。

1. 从 GitHub 下载 **Seeed_Arduino_RoundDisplay** 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. 从 GitHub 下载 **Seeed_GFX** 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. 在 Arduino IDE 中通过添加 ZIP 文件来安装库。转到 **Sketch > Include Library > Add .ZIP Library** 并选择下载的 ZIP 文件。

:::note
如果您之前安装了 TFT_eSPI 库，您可能需要暂时从 Arduino 库文件夹中删除或重命名它以避免冲突，因为 Seeed_GFX 是 TFT_eSPI 的一个分支，具有额外的功能。
:::

### Arduino 库概述

从上面的教程中我们可以看出，Round Display 主要使用 **LVGL**、**TFT_eSPI** 和 **Arduino GFX** 库。为了节省篇幅，我们将以绘制表盘为例，分别介绍 **LVGL** 和 **TFT_eSPI** 库的使用。

- 您可以点击**[这里](https://wiki.seeedstudio.com/cn/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**了解 **TFT_eSPI** 库的接口和使用方法。

- 您可以点击**[这里](https://wiki.seeedstudio.com/cn/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**了解 **LVGL** 库的接口和使用方法。

- 您可以点击**[这里](https://github.com/moononournation/Arduino_GFX)**了解 **Arduino GFX** 库的接口和使用方法。

## 点亮您的 Round Display

### 演示 1：Arduino Life - 如何在圆形显示屏上使用 Seeed_GFX 库

从 Seeed_GFX 库中打开示例代码：**[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

在与您的 Arduino 代码相同的文件夹中创建一个名为 `driver.h` 的新文件，点击示例选项卡旁边的箭头并选择"New Tab"。

将新文件命名为 `driver.h`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

前往 [Seeed GFX 配置工具](https://seeed-studio.github.io/Seeed_GFX/)，选择"TRMNL 7.5" (OG) DIY Kit"，如图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

复制生成的代码并将其粘贴到您创建的 `driver.h` 文件中。代码应该如下所示：

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

现在您可以将示例上传到您的 TRMNL DIY 套件，并看到 ePaper 显示屏的实际效果！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
请注意，所有后续屏幕的代码都需要配备一个 driver.h 文件，该文件用于选择要使用的屏幕类型。
:::

### 演示 2：TFT 时钟

:::caution
请参考演示1，在与 `.ino` 文件相同的目录中创建一个新的 `driver.h` 文件，并在其中保留以下代码：`#define BOARD_SCREEN_COMBO 501`
:::

:::tip
我们需要使用圆形显示屏上的 RTC 功能，因此您还需要搜索并安装 **I2C BM8563 RTC** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

硬件和软件准备就绪后，我们开始上传第一个示例程序。此示例程序可用于检查圆形显示屏的 RTC 时钟是否正常工作。由于此演示需要少量内存，适用于所有 XIAO 型号。

:::tip
如果您想修改此演示以实现更复杂的显示，请注意您使用的 XIAO 的内存大小。具体大小可以在该 XIAO 的介绍页面上找到。
:::

您可以在 Arduino IDE 中的 **文件 -> 示例 -> Seeed Arduino Round display -> TFT_Clock** 下找到此示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

只需选择您使用的 XIAO 和 XIAO 所在的端口号，编译并上传即可。

确保圆形显示屏开关切换到 ON 位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

如果程序运行顺利，您将看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### 演示 3：硬件测试

:::caution
请参考演示1，在与 `.ino` 文件相同的目录中创建一个新的 `driver.h` 文件，并在其中保留以下代码：`#define BOARD_SCREEN_COMBO 501`
:::

由于硬件测试演示比较复杂且占用较大内存，一些 XIAO 型号可能由于内存不足而无法成功运行。我们创建了一个测试表供您参考，使用 TFT 库和 Arduino GFX 库。

|         | TFT 库 | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 非 mbed 版本| ✅  | ❌  |
| XIAO nRF52840 mbed 版本| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

这个示例程序可以用来检查圆形显示屏的RTC时钟、SD卡和触摸功能是否正常工作。

:::tip
我们需要使用圆形显示屏上的RTC功能，所以您还需要搜索并安装 **I2C BM8563 RTC** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

您可以在Arduino IDE中的 **文件 -> 示例 -> Seeed Arduino Round display -> HardwareTest** 下找到这个示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

只需选择您正在使用的XIAO和XIAO所在的端口号，编译并上传即可。

确保圆形显示屏的开关切换到ON位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

如果程序运行顺利，您将看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
这个示例程序将测试扩展板的所有功能项目，包括RTC功能。如果您没有安装I2C BM8563 RTC库，那么可能会报错，您可以注释掉函数 `lv_hardware_test()`，然后SD卡的功能检测也会被关闭。
:::

## 校准固件更新

:::tip
如果您发现触摸有时无响应，您可以按照以下步骤更新屏幕的校准固件。
:::

1. 从这个[链接](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)下载代码

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. 将它们放在同一个目录中并运行这个固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. 打开串口监视器，您将看到如下图所示的成功消息，这意味着更新成功，您可以上传您的程序来尝试！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## 故障排除

### Q1: 为什么我上传程序后显示屏什么都不显示？

A: 请检查圆形显示屏的开关是否打开。如果您使用的是XIAO ESP32C3，您可能还需要在上传程序后按下复位键才能使其工作。

### Q2: 如果我想将Seeed Studio XIAO ESP32S3 Sense连接到这个扩展屏幕，两个TF卡槽会产生冲突吗？

A: 这不会产生冲突。不同的SD卡槽通过片选控制，如果您想使用Sense上的microSD卡槽，片选引脚应该是 **21**，如果您想使用圆形显示屏上的microSD卡槽，片选引脚应该是 **D2**。

我们在S3 Sense相机教程中有同时使用硬件和microSD卡的[示例](https://wiki.seeedstudio.com/cn/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera)。

### Q3: 为什么我的XIAO RP2040在使用圆形显示屏的HardwareTest代码时出现非常奇怪的C++错误？

A: 这可能是由于您没有为XIAO RP2040选择适当的编译选项造成的。请参考下图进行设置并重新上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[PDF]** [充电IC数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [1.28英寸a-Si TFT液晶显示屏数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO圆形显示屏原理图](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio XIAO圆形显示屏原理图v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [GJX0128A4-15HY数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio XIAO圆形显示屏原理图和PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio XIAO圆形显示屏原理图和PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [XIAO圆形显示屏的3D模型](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [圆形显示屏外壳的3D模型图](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense带圆形屏幕的外壳](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
