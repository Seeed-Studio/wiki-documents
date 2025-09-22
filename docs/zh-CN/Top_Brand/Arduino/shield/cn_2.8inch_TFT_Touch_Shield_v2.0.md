---
description: 2.8inch_TFT_Touch_Shield_v2.0
title: 2.8英寸 TFT 触摸屏扩展板 v2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/2.8inch_TFT_Touch_Shield_v2.0
last_update:
  date: 01/10/2023  
  author: Eico 
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/main.jpg" alt="pir" width={600} height="auto" /></p>

TFT 触摸屏扩展板 V2.0 是一款电阻式触摸屏，兼容 Arduino/Seeeduino/Arduino Mega/SAMD21 平台。它可以用作显示设备或绘图板。与之前的版本 2.8''TFT 触摸屏扩展板 V1.0 相比，我们将屏幕驱动升级为更专业的芯片 ILI9341 驱动器，提供不同的节省引脚的 SPI 通信方式，而不会牺牲数据传输速度。由于通信方式的改变，为原始版本开发的程序在移植到新版本之前需要进行修改。该扩展板集成了 SD 卡模块，为您项目的其他扩展保留了能力。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

* 大屏幕，体验简单舒适
* 背光可通过编程控制
* 65k 丰富色彩显示
* SPI 节省引脚的通信方式
* 全屏触摸活动范围

## 规格参数

<table align="center">
  <tbody>
  <tr>
    <td><h3>项目</h3></td>
    <td><h3>数值</h3></td>
  </tr>
  <tr>
    <td><h4>工作电压</h4></td>
    <td><h4>5 V</h4></td>
  </tr>
  <tr>
    <td><h4>分辨率</h4></td>
    <td><h4>320 x 240</h4></td>
  </tr>  
  <tr>
    <td><h4>颜色</h4></td>
    <td><h4>65k</h4></td>
  </tr>
  </tbody></table>

## 兼容开发板

2.8 英寸 TFT 触摸屏扩展板 v2.0 已测试并完全兼容以下开发板：

* Arduino Uno（所有版本）/Seeeduino（V4&V4.2）
* Arduino Mega/Seeeduino Mega
* Arduino Zero（M0）/Seeeduino Lorawan
* Arduino Leonardo/Seeeduino Lite
* Seeeduino Cortex-M0+/Seeeduino Lotus Cortex-M0+

## 应用创意

* 游戏
* 传感器集线器
* 人机界面
* 智能家居

以下是一些精彩的项目供您参考。

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino 手机</h3></td>
    <td><h3>Facebook 监视器</h3></td>
    <td><h3>Instrucatbles 监视器</h3></td>
  </tr>
  <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/" target="_blank"><span>立即制作！</span></a></td>
  <td><a href="https://www.instructables.com/id/Facebook-Like-Monitor/" target="_blank"><span>立即制作！</span></a></td>
  <td><a href="https://www.instructables.com/id/Make-a-Instructables-Indicator/" target="_blank"><span>立即制作！</span></a></td>  
  </tr>  
  </tbody></table>

## 引脚映射

:::note
您可以使用未使用的引脚来控制其他模块。
:::

数字引脚

<table align="center">
  <tbody>
  <tr>
    <td><h3>引脚名称</h3></td>
    <td><h3>功能</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>未使用</h4></td>
  </tr>  
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>TF_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>TFT_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>TFT_DC</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>背光（可选择）</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>SPI_MOSI</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>SPI_MISO</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>SPI_SCK</h4></td>
  </tr>  
  </tbody></table>

模拟引脚

<table align="center">
  <tbody>
  <tr>
    <td><h3>引脚名称</h3></td>
    <td><h3>功能</h3></td>
  </tr>
  <tr>
    <td><h4>A0</h4></td>
    <td><h4>触摸面板</h4></td>
  </tr>
  <tr>
    <td><h4>A1</h4></td>
    <td><h4>触摸面板</h4></td>
  </tr>  
  <tr>
    <td><h4>A2</h4></td>
    <td><h4>触摸面板</h4></td>
  </tr>
  <tr>
    <td><h4>A3</h4></td>
    <td><h4>触摸面板</h4></td>
  </tr>
  <tr>
    <td><h4>A4</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>A5</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  </tbody></table>

## 入门指南

:::note
本入门指南基于 Win10 和 Arduino IDE 1.6.9 环境。
:::
我们将向您展示此显示屏的工作原理，请准备以下材料开始。

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>2.8 TFT Touch Shield V2</h3></td>
    <td><h3>Micro USB 线缆</h3></td>
  </tr>

 <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>更多详情</span></a></td>
  <td><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><span>更多详情</span></a></td>
  <td><a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html" target="_blank"><span>更多详情</span></a></td>  
  </tr>  
  </tbody></table>

### 下载 Arduino 库

此库支持以下平台：

* Arduino/Genuino UNO
* Seeeduino V3/4.0/4.2
* Arduino/Genuino Mega
* Arduino Leonardo
* Seeeduino Lite/Clio/Lotus
* LinkIt ONE（触摸面板不工作）

点击下载 [Touch Screen Driver](https://github.com/Seeed-Studio/Touch_Screen_Driver/archive/master.zip)，然后请点击下面的按钮下载库并安装，如果您不知道如何安装 Arduino 库，请参考教程 [(如何安装 ARDUINO 库)](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

 <p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/TFT_Touch_Shield_V2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/library.png" /></a></p>
此库包含以下示例：

* 绘制圆形
* 绘制线条
* 绘制数字
* 绘制矩形
* 绘画
* 形状
* 文本
* tftbmp
* tftbmp2

我们使用示例 'shapes' 进行此演示。

:::note
我们建议在内部闪存芯片大于 128k 的设备上使用 Seeed_Arduino_LCD。如果您的闪存设备较小，我建议使用 TFT_Touch_Shield_V2。
:::

### 连接线缆并上传代码

**步骤1.** 将 TFT_Touch_Shield_V2 板插入 Seeeduino，

**步骤2.** 用 USB 线缆将您的 Seeeduino 板连接到计算机

**步骤3.** 打开 Arduino IDE，选择正确的 COM 端口和开发板（在此示例中我们使用 Seeeduino V4）

**步骤4.** 点击 **File > Examples > TFT_Touch_Shield_V2-master > shapes** 打开代码。将示例上传到 Seeeduino。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/shapes%20example.png" alt="pir" width={600} height="auto" /></p>
如果您对如何上传代码有任何疑问，请参考[这里](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/#getting-started)了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/display.jpeg" alt="pir" width={600} height="auto" /></p>

## 背光

背光默认始终开启，如果您想要更改背光，需要对板子进行一些改装。请查看板子的背面。有一个 BACKLIGHT 标签。一侧标记为 ON，另一侧标记为 D7。我们需要切断中间焊盘和 ON 焊盘之间的连线，将中间焊盘与 D7 焊盘焊接。如下所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/backlight.png" alt="pir" width={600} height="auto" /></p>
然后您可以通过 D7 控制背光。

 打开背光：

 ```cpp
     digitalWrite(7, HIGH);
 ```

关闭背光：

 ```cpp
    digitaWrite(7, LOW);
 ```

:::caution
使用美工刀和烙铁时请小心。
:::

## 常见问题

Q：如何使用 Seeed_Arduino_LCD 驱动 2.8 TFT Touch Shield V2？

A：如果您想要使用 Seeed_Arduino_LCD 驱动 2.8 TFT Touch Shield V2。以下详细信息将向您展示如何使用它。

**步骤1.** 下载并安装 [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD)。如果您不知道如何安装 Arduino 库，请参考教程 [(如何安装 ARDUINO 库)](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

**步骤2.** 通过参考 User_Setup.h 的注释来配置 User_Setup.h，使您的板子与 LCD 配合工作。

**步骤3.** 选择 Examples -> Seeed_Arduino_LCD -> 320 x 240，其中包含 2.8 TFT Touch Shield V2 的所有示例，将示例上传到板子。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [Eagle 格式的原理图和 PCB](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip)
* [PDF 格式的原理图](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch.pdf)
* [PDF 格式的 PCB](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch%20PCB.pdf)
* [Github 页面上的库](https://github.com/Seeed-Studio/TFT_Touch_Shield_V2)

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