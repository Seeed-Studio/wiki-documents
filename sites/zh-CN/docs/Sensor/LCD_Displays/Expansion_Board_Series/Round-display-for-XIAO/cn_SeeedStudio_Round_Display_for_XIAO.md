---
description: XIAO 圆形显示屏基础教程
title: Seeed Studio XIAO 圆形显示屏入门指南
keywords:
  - XIAO
  - Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /get_start_round_display
sidebar_position: 1
sku: 104030087
last_update:
  date: 07/11/2024
  author: Spencer
createdAt: '2023-03-17'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/get_start_round_display/
---

# Seeed Studio XIAO 圆形显示屏入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

Seeed Studio Round Display for XIAO 是一款兼容所有 XIAO 开发板的扩展板。一侧配备全覆盖触摸屏，设计为直径 39mm 的圆盘。它在紧凑的尺寸中集成了板载 RTC、充电芯片和 TF 卡槽，非常适合用于智能家居、可穿戴设备等场景中的交互式显示。

<table align="center">
 <tr>
  <th>REV</th>
  <th>说明</th>
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
  <td>1.更换锂电池充电 IC<br />2.在 A0 和 D6 上增加一个开关</td>
  <td>2023/4/7</td>
  <td>Linus.Liao</td>
 </tr>
</table>

### 规格参数

<table align="center">
 <tr>
     <th>项目</th>
     <th>详细参数</th>
 </tr>
 <tr>
     <th>电源</th>
     <td>USB Type-C：5V @35 mA <br></br> 电池充电：3.7V @37mA</td>
 </tr>
 <tr>
     <th>充电电流</th>
     <td>~ 485 mA</td>
 </tr>
  <tr>
     <th>可扩展存储</th>
     <td>TF 卡槽，最大支持 32GB FAT</td>
 </tr>
  <tr>
     <th>屏幕</th>
     <td>1.28 英寸触摸屏 <br></br> 240×240 分辨率 <br></br> 65K 色</td>
 </tr>
  <tr>
     <th>其他外接设备</th>
     <td>JST 1.25 接插件</td>
 </tr>
  <tr>
     <th>尺寸</th>
     <td>39mm x 39mm</td>
 </tr>
</table>

### 特性

- **电容触摸屏扩展板**：配备 1.28 英寸圆形显示屏，240×240 分辨率，65K 色，提供清晰且色彩丰富的图像显示
- **高度兼容**：与所有 XIAO 系列产品高度兼容，可轻松集成到你当前的项目中
- **丰富外设**：板载 RTC、电池充电芯片、TF 卡槽、JST 1.25 接插件，全部集成在紧凑尺寸中
- **表盘尺寸设计**：采用 39 mm 圆形设计，适用于可穿戴和空间受限的项目
- **即插即用**：所有引脚均已引出，无需焊接

## 硬件概览

在开始之前，我们可以参考下图来了解 Round Display 的引脚设计，以便更好地理解 Round Display 的功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

自 2023 年 4 月 7 日起，改版后的 Round Display 增加了一个 2 位开关，用于控制屏幕背光和电池电压读取，方便用户自由选择是否使用该引脚或将其释放。点击[这里](https://wiki.seeedstudio.com/cn/seeedstudio_round_display_usage/#ke-按钮--gpio)查看更多详情。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

### 硬件准备

如果你想充分发挥 Round Display 的全部功能并获得良好的体验，我们强烈建议你购买我们的 XIAO 系列作为 Round Display 的主控板。

:::tip
XIAO SAMD21、RP2040 和 RA4M1 由于内存不足，**可能**与圆形屏幕不兼容。
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Round Display 背面的一排引脚是为 XIAO 系列设计的。如果你手头已经有 XIAO，就不需要准备任何额外的线缆，只需将 XIAO 的引脚对齐后直接插入 Round Display 即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
请注意，在连接 XIAO 时，**XIAO 的 Type-C 接口应朝向 Round Display 的外侧**。如果你不小心接反了电源，也不用太担心，Round Display 具有电源保护电路，不会轻易损坏，但我们不建议长时间保持反接状态。
:::

Round Display 推荐的放置方向是：当你正对 Round Display 时，XIAO 的 Type-C 接口朝右侧，这样 Round Display 的电源开关按钮就在左下角。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### 软件准备

要使用 Round Display，我们需要对 XIAO 系列进行编程。推荐的编程工具是 Arduino IDE，你需要为 XIAO 配置 Arduino 环境并添加对应的板卡包。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 步骤 1. 根据你的操作系统下载并安装稳定版本的 Arduino IDE

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### 步骤 2. 启动 Arduino 应用程序

#### 步骤 3. 为你正在使用的 XIAO 配置 Arduino IDE

- 如果你想在后续示例中使用 **Seeed Studio XIAO RP2350**，请参考**[本教程](https://wiki.seeedstudio.com/cn/getting-started-xiao-rp2350/)**完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO nRF52840**，请参考**[本教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)**完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO ESP32C3**，请参考**[本教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)**完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO ESP32C6**，请参考**[本教程](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/#software-preparation)**完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO ESP32S3**，请参考**[本教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)**完成添加。

#### 步骤 4. 安装图形库和屏幕驱动库

要使用圆形显示屏，我们需要预先安装两个库。一个是圆形显示屏设备驱动库，用于驱动设备的屏幕和触摸功能；另一个是图形显示库，提供了一些非常常用的绘图接口。

1. 从 GitHub 下载 **Seeed_Arduino_RoundDisplay** 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. 从 GitHub 下载 **Seeed_GFX** 库：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. 在 Arduino IDE 中通过添加 ZIP 文件的方式安装该库。依次点击 **Sketch > Include Library > Add .ZIP Library**，然后选择下载好的 ZIP 文件。

:::note
如果你之前安装过 TFT_eSPI 库，可能需要暂时从 Arduino 库文件夹中移除或重命名它，以避免冲突，因为 Seeed_GFX 是在 TFT_eSPI 基础上分支并增加功能的库。
:::

### Arduino 库概览

从上面的教程我们大致可以看出，Round Display 主要使用 **LVGL**、**TFT_eSPI** 和 **Arduino GFX** 这几个库。出于篇幅考虑，我们将以绘制表盘为例，分别介绍 **LVGL** 和 **TFT_eSPI** 库的使用。

- 你可以点击**[这里](https://wiki.seeedstudio.com/cn/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**了解 **TFT_eSPI** 库的接口和使用方法。

- 你可以点击**[这里](https://wiki.seeedstudio.com/cn/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**了解 **LVGL** 库的接口和使用方法。

- 你可以点击**[这里](https://github.com/moononournation/Arduino_GFX)**了解 **Arduino GFX** 库的接口和使用方法。

## 点亮你的 Round Display

### 示例 1：Arduino Life - 如何在圆形屏幕上使用 Seeed_GFX 库

从 Seeed_GFX 库中打开示例程序：**[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

在与 Arduino 草图相同的文件夹中创建一个名为 `driver.h` 的新文件，方法是点击示例标签旁边的箭头并选择 "New Tab"。

将新文件命名为 `driver.h`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

前往 [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)，并按照图片所示选择 "TRMNL 7.5" (OG) DIY Kit"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

复制生成的代码并粘贴到你创建的 `driver.h` 文件中。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

现在你可以将该示例上传到 TRMNL DIY Kit 上，查看电子纸屏幕的实际显示效果！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
请注意，后续所有屏幕的代码都需要配套一个 driver.h 文件，用于选择要使用的屏幕类型。
:::

### 示例 2：TFT 时钟

:::caution
请参考示例 1，在与 `.ino` 文件相同的目录下新建一个 `driver.h` 文件，并在其中保留以下代码：`#define BOARD_SCREEN_COMBO 501`
:::

:::tip
我们需要在 Round Display 上使用 RTC 功能，因此你还需要搜索并安装 **I2C BM8563 RTC** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

当硬件和软件都准备就绪后，我们就可以开始上传第一个示例程序了。该示例程序可用于检查 Round Display 的 RTC 时钟是否正常工作。由于此示例占用的内存较少，适用于所有 XIAO 型号。

:::tip
如果你想在此示例基础上修改以实现更复杂的显示，请注意你所使用的 XIAO 的内存大小。具体大小可以在该 XIAO 的介绍页面中找到。
:::

你可以在 Arduino IDE 中通过 **File -> Examples -> Seeed Arduino Round display -> TFT_Clock** 找到该示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

只需选择你正在使用的 XIAO 型号以及 XIAO 所在的端口号，然后编译并上传即可。

确保 Round Display 的电源开关拨到 ON 位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

如果程序运行顺利，你将看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### 示例 3：硬件测试

:::caution
请参考示例 1，在与 `.ino` 文件相同的目录下新建一个 `driver.h` 文件，并在其中保留以下代码：`#define BOARD_SCREEN_COMBO 501`
:::

由于 HardwareTest 示例较为复杂且占用的内存较大，一些 XIAO 型号可能会因为内存不足而无法成功运行。我们基于 TFT 库和 Arduino GFX 库制作了一张测试表供你参考。

|         | TFT 库 | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 non mbed version| ✅  | ❌  |
| XIAO nRF52840 mbed version| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

该示例程序可用于检查 Round Display 的 RTC 时钟、SD 卡以及触摸功能是否正常工作。

:::tip
我们需要在 Round Display 上使用 RTC 功能，因此你还需要搜索并安装 **I2C BM8563 RTC** 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

你可以在 Arduino IDE 中通过 **File -> Examples -> Seeed Arduino Round display -> HardwareTest** 找到该示例程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

只需选择你正在使用的 XIAO 型号以及 XIAO 所在的端口号，然后编译并上传即可。

确保 Round Display 的电源开关拨到 ON 位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

如果程序运行顺利，你将看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
该示例程序会测试扩展板的所有功能项，包括 RTC 功能。如果你没有安装 I2C BM8563 RTC 库，则可能会报错，你可以将函数 `lv_hardware_test()` 注释掉，此时对 SD 卡的功能检测也会被关闭。
:::

## 校准固件更新

:::tip
如果你发现触摸有时没有响应，可以按照以下步骤为屏幕更新校准固件。
:::

1. 通过此[链接](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)下载代码

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. 将它们放在同一目录下并运行该固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. 打开串口监视器，你会看到如下图所示的成功提示信息，这表示更新成功，你就可以上传自己的程序来试一试了！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## 故障排查

### Q1：为什么我上传程序后屏幕没有任何显示？

A：请检查 Round Display 的电源开关是否已打开。如果你使用的是 XIAO ESP32C3，在上传程序后可能还需要按一下 Reset 按钮才能正常工作。

### Q2：如果我想把 Seeed Studio XIAO ESP32S3 Sense 接到这个扩展屏上，两路 TF 卡槽会不会冲突？

A：不会产生冲突。不同的 SD 卡槽是通过片选引脚进行控制的，如果你想使用 Sense 上的 microSD 卡槽，片选引脚应为 **21**；如果你想使用 Round Display 上的 microSD 卡槽，片选引脚应为 **D2**。

在 S3 Sense 相机教程中，我们有同时使用摄像头和 microSD 卡的[示例](https://wiki.seeedstudio.com/cn/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera)。

### Q3：为什么我的 XIAO RP2040 在使用 Round Display 的 HardwareTest 代码时会出现非常奇怪的 C++ 错误？

A：这可能是因为你没有为 XIAO RP2040 选择合适的编译选项。请参考下图进行设置并重新上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[PDF]** [充电 IC 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [1.28'' a-Si TFT 液晶显示屏数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 原理图](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 原理图 v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [GJX0128A4-15HY 数据手册](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio Round Display for XIAO 原理图和 PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio Round Display for XIAO 原理图和 PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [Round Display for XIAO 的 3D 模型](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [Round Display 外壳的 3D 模型图](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense 圆形屏幕外壳](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
