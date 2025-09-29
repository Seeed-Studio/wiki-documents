---
description: Spartan_Edge_Accelerator_Board
title: Spartan Edge 加速器开发板

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Spartan-Edge-Accelerator-Board
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Spartan Edge 加速器开发板（简称 SEA 开发板）是一款轻量级 FPGA 开发板，基于 Xilinx Spartan-7 芯片，采用 Arduino 扩展板外形规格。因此，您可以将其用作 Arduino 扩展板来驱动 LCD 和摄像头，或作为独立的 FPGA 开发板使用。此外，借助板载 ESP32 芯片，SEA 开发板还能为您的 Arduino 提供 WiFi 和蓝牙功能。

**Spartan-7** 是 Xilinx FPGA 系列中最新且最具成本效益的 FPGA 芯片，提供同类产品中最佳的性能功耗比。

除此之外，我们为 Arduino 提供了完整的 FPGA API，这意味着 Arduino 用户无需了解任何 FPGA 知识即可使用 FPGA 功能。该开发板将在许多方面扩展 Arduino 的能力，如简单图像处理和计算机视觉应用、信号加密和解密，以及信号采样和处理。

## 特性

#### 高速图像处理

- 集成 mipi、mini HDMI 接口
- 支持树莓派摄像头 v1.0 (OV5640)
- 最大支持 30fps 图像传输

#### 加密物联网

- 基于 ESP32 的物联网 WiFi 和蓝牙
- 支持 AWS、Azure 和其他云服务
- 支持软件加密算法

#### 多种 I/O 端口扩展

- 20 个用户自定义扩展 I/O 端口（独立模式）
- 10 个用户自定义扩展 I/O 端口（Arduino 扩展板模式）
- 为 Arduino 提供完整的 FPGA API

#### 板载功能模块

- 8 位 ADC 和 DAC
- 6 轴加速度计和陀螺仪
- 2 个用户 RGB LED 和按钮

#### 两种定制开发模式

- Arduino 扩展板模式
- FPGA 独立模式

_备注：用户可根据不同需求选择不同的排针，并根据开发需要焊接引脚。_

## 目标用户

- Arduino 开发者
- 物联网开发者
- FPGA 开发者

## 适用案例

- MIPI 摄像头输入和 HDMI 输出 Vivado 工程
- 板载 LED、DIP 开关、ADC 和 DAC 参考案例
- 板载陀螺仪案例
- 为 Arduino 提供 GPIO/UART/ADC/DAC/RGB-LED 扩展
- 信号发生器案例（需要 Arduino 配置）
- ESP32 控制信号发生器案例
- 使用 AWS GreenGrass 物联网平台案例
- 颜色识别和物体跟踪案例
- 图形识别案例（三角形、圆形和方形识别）
- 数字字符识别案例
- 在 FPGA 中实现 AES 加密和解密算法
- 在 FPGA 中实现 PID 算法

_新应用将持续更新............._

更多案例资源，请访问[此 Github 页面。](https://github.com/Pillar1989)

## 规格参数

<table align="center">
  <tbody>
  <tr>
    <td><h3>参数</h3></td>
    <td><h3>数值</h3></td>
  </tr>
  <tr>
    <td><h4>FPGA</h4></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>FPGA 芯片</h4></td>
    <td><h4>Spartan-7 XC7S15</h4></td>
  </tr>  
  <tr>
    <td><h4>逻辑单元</h4></td>
    <td><h4>12,800</h4></td>
  </tr>
  <tr>
    <td><h4>切片</h4></td>
    <td><h4>2000</h4></td>
  </tr>
  <tr>
    <td><h4>CLB 触发器</h4></td>
    <td><h4>16000</h4></td>
  </tr>
  <tr>
    <td><h4>最大分布式 RAM (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>块 RAM/FIFO w / ECC (每个 36 kb)</h4></td>
    <td><h4>10</h4></td>
  </tr>
    <tr>
    <td><h4>最大分布式 RAM (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>总块 RAM (Kb)</h4></td>
    <td><h4>360</h4></td>
  </tr>
  <tr>
    <td><h4>最大分布式 RAM (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>时钟管理瓦片 (1 MMCM + 1 PLL)</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>DSP 切片</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h3>无线</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>无线芯片</h4></td>
    <td><h4>Espressif ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>WiFi</h4></td>
    <td><h4>802.11 b/g/n 2.4GHz</h4></td>
  </tr>
  <tr>
    <td><h4>蓝牙</h4></td>
    <td><h4>蓝牙 4.1 支持 BLE</h4></td>
  </tr>
  <tr>
    <td><h3>外设</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>视频</h4></td>
    <td><h4>Mini HDMI x1</h4></td>
  </tr>
  <tr>
    <td><h4>摄像头</h4></td>
    <td><h4>CSI/MIPI 接口 x1 (兼容树莓派摄像头 V1 - OV5640)</h4></td>
  </tr>
  <tr>
    <td><h4>SD 卡</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h4>DSP 切片</h4></td>
    <td><h4>Micro SD/TF 卡槽 x1</h4></td>
  </tr>
  <tr>
    <td><h4>FPGA GPIO</h4></td>
    <td><h4>10 针排针 (IO9~IO0)</h4></td>
  </tr>
  <tr>
    <td><h4>Arduino GPIO</h4></td>
    <td><h4>32 针排针 (Arduino 外形规格)</h4></td>
  </tr>
  <tr>
    <td><h4>Grove</h4></td>
    <td><h4>Grove 连接器 x2 (I2C/D2)</h4></td>
  </tr>
  <tr>
    <td><h4>LED</h4></td>
    <td><h4>单色 LED x2<br/>RGB LED x2</h4></td>
  </tr>
  <tr>
    <td><h4>按钮</h4></td>
    <td><h4>启动 x1<br/>复位 x1<br/>FPGA 复位 x1<br/>用户 x2</h4></td>
  </tr>
  <tr>
    <td><h4>开关</h4></td>
    <td><h4>电源模式开关 x1<br/>5 通道 DIP 开关 x1</h4></td>
  </tr>
  <tr>
    <td><h3>电源</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>工作电压</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>IO 电压</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>电源模式</h4></td>
    <td><h4>USB Type C 5V<br/>VIN 8~17V<br/>Arduino Micro USB 5V</h4></td>
  </tr>
  <tr>
    <td><h3>其他</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>ADC</h4></td>
    <td><h4>8 位 ADC1173</h4></td>
  </tr>
  <tr>
    <td><h4>加速度计和陀螺仪</h4></td>
    <td><h4>6 轴 LSM6DS3TR</h4></td>
  </tr>
  </tbody></table>

:::caution
SEA 扩展板的 IO 电压为 5V，而 FPGA 的 IO 电压为 3.3V，因此我们制作了分压器来使 IO 电压兼容。SAM D21 系列的 3.3V IO 电压经过分压后会低于 3.3V，这不足以驱动 FPGA 的 IO。因此，目前 SEA 开发板仅支持 5V IO 的 Arduino 板，如 [Arduino UNO](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-2995.html) 和 [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)。
:::

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-pin.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>编号</h3></td>
    <td><h3>详细信息</h3></td>
  </tr>
  <tr>
    <td><h4>1</h4></td>
    <td><h3>FPGA : XC7S15-1FTGB196C</h3></td>
  </tr>
  <tr>
    <td><h4>2</h4></td>
    <td><h4>WiFi/蓝牙 : ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>3</h4></td>
    <td><h4>6轴加速度计和陀螺仪 : LSM6DS3TR</h4></td>
  </tr>  
  <tr>
    <td><h4>4</h4></td>
    <td><h4>DAC : DAC7311IDCKR</h4></td>
  </tr>
  <tr>
    <td><h4>5</h4></td>
    <td><h4>降压DCDC : TPS62130</h4></td>
  </tr>
  <tr>
    <td><h4>6</h4></td>
    <td><h4>USB转UART : CP2102-GMR</h4></td>
  </tr>
  <tr>
    <td><h4>7</h4></td>
    <td><h4>USB : Type-C</h4></td>
  </tr>
  <tr>
    <td><h4>8</h4></td>
    <td><h4>Mini HDMI</h4></td>
  </tr>
  <tr>
    <td><h4>9</h4></td>
    <td><h4> CSI 接口 ：MIPI 摄像头（兼容树莓派摄像头 V1 - OV5640）</h4></td>
  </tr>
  <tr>
    <td><h4>10</h4></td>
    <td><h4>Arduino 接头 : 兼容 Arduino UNO</h4></td>
  </tr>
  <tr>
    <td><h4>11</h4></td>
    <td><h4>DIP 开关 :<br/>K1-K4 用户开关<br/>K5 切换 FPGA 编程模式<br/>->>>> JTAG : 使用 Xilinx 官方编程工具<br/>->>>> Slave : <a href="https://github.com/Pillar1989/spartan-edge-esp32-boot" target="_blank"><span>使用 ESP32 对 FPGA 进行编程</span></a></h4></td>
  </tr>
  <tr>
    <td><h4>12</h4></td>
    <td><h4>ESP32 按钮 ：Boot 和 RST</h4></td>
  </tr>
  <tr>
    <td><h4>13</h4></td>
    <td><h4>FPGA 按钮 ：USER1 USER2 FPGA_RST</h4></td>
  </tr>
  <tr>
    <td><h4>14</h4></td>
    <td><h4>用户 LED: L1/L2/RGB1/RGB2<br/>PWR : 电源开启<br/>FPGA_DONE : 使用 esp32 对 FPGA 编程后点亮。</h4></td>
  </tr>
  <tr>
    <td><h4>15</h4></td>
    <td><h4>电源开关 :<br/>USB->通过 USB Type C 供电（5V DC）<br/>5V->通过 VIN 引脚供电（8~17V DC）</h4></td>
  </tr>
  <tr>
    <td><h4>16</h4></td>
    <td><h4>电源模式:<br/>OFF->隔离 Arduino 和扩展板的电源<br/>ON->连接 Arduino 和扩展板的电源</h4></td>
  </tr>
  <tr>
    <td><h4>17</h4></td>
    <td><h4>DAC 输出和 ADC 输入接头</h4></td>
  </tr>
  <tr>
    <td><h4>18</h4></td>
    <td><h4>FPGA IO : IO9~IO0</h4></td>
  </tr>
  <tr>
    <td><h4>19</h4></td>
    <td><h4>FPGA JTAG 下载接口</h4></td>
  </tr>
  <tr>
    <td><h4>20</h4></td>
    <td><h4>Grove 连接器 : 1x I2C; 1x D2&D3</h4></td>
  </tr>
  <tr>
    <td><h4>21</h4></td>
    <td><h4>陶瓷贴片天线</h4></td>
  </tr>
  <tr>
    <td><h4>22</h4></td>
    <td><h4>ADC : ADC1173</h4></td>
  </tr>
  <tr>
    <td><h4>23</h4></td>
    <td><h4>SPI Flash : W25Q32JVZPIG</h4></td>
  </tr>
  <tr>
    <td><h4>24</h4></td>
    <td><h4>模拟开关 ：DG2788A</h4></td>
  </tr>
  <tr>
    <td><h4>25</h4></td>
    <td><h4>LDO : XC6221B102MR</h4></td>
  </tr>
  <tr>
    <td><h4>26</h4></td>
    <td><h4>LDO : RT9013-18GB</h4></td>
  </tr>
  <tr>
    <td><h4>27</h4></td>
    <td><h4>LDO : CJ1117-3V3</h4></td>
  </tr>
  <tr>
    <td><h4>28</h4></td>
    <td><h4>SD 卡槽 : Micro SD/TF 卡</h4></td>
  </tr>
  </tbody></table>

## 开始使用

Spartan Edge Accelerator Board 可以在两种模式下工作：

- Arduino 扩展板模式
- 独立模式

简而言之，它可以作为 Arduino 扩展板为 Arduino 带来 FPGA 和无线功能，也可以作为独立的 FPGA 开发板工作，无需 Arduino。

### Arduino 扩展板模式

在本 wiki 中，我们使用 Seeeduino V4.2，您也可以使用 Arduino UNO，它们完全兼容。

#### 硬件

**所需材料**

- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Spartan Edge Accelerator Board](#A) x1
- [Micro SD 卡或 TF 卡](https://www.seeedstudio.com/micro-SD-Card-Card-with-Card-Reader-32GB-Class-10-p-4082.html) x1
- [USB Type C 数据线](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1

**硬件连接**

- 步骤1. 将 Micro SD 卡或 TF 卡插入 SD 卡槽
- 步骤2. 将 SEA 板插入 Arduino
- 步骤3. 使用以下三种方法之一为系统供电

<table align="center">
  <tbody>
  <tr>
    <td><h3>电源端口</h3></td>
    <td><h3>输入电压</h3></td>
    <td><h3>电源开关位置</h3></td>
    <td><h3>电源模式位置</h3></td>
  </tr>
  <tr>
    <td><h4>通过 SEA 板 USB Type C 端口供电</h4></td>
    <td><h4>5V DC</h4></td>
    <td><h4>USB</h4></td>
    <td><h4>ON</h4></td>
  </tr>
  <tr>
    <td><h4>通过 Seeeduino V4.2 micro USB 端口供电</h4></td>
    <td><h4>5V DC</h4></td>
    <td><h4>-</h4></td>
    <td><h4>ON</h4></td>
  </tr>  
  <tr>
    <td><h4>通过 Seeeduino V4.2 DC 端口供电</h4></td>
    <td><h4>8~17V DC</h4></td>
    <td><h4>5V</h4></td>
    <td><h4>ON</h4></td>
  </tr>
</tbody></table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-combine-2.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
您也可以同时为 SEA 板和 Arduino 供电，但请确保将电源模式位置设置为 **OFF**。只有这样，系统电源才会被隔离，您可以分别为 Arduino 和 SEA 板供电。
:::

-------

#### Spartan Edge Accelerator Board ESP32 启动

首先，要与 Arduino 配合工作，我们应该从 SD 卡将比特流（FPGA 逻辑）加载到板载 FPGA（xc7s15）。以下库将向您展示如何通过板载 ESP32 完成此操作。

一个用于 Spartan Edge Accelerator Board 的库

此库的目的是通过板载 ESP32 从 SD 卡将比特流（FPGA 逻辑）加载到板载 FPGA（xc7s15）。

软件开发环境是支持 [ESP32 开发板](https://github.com/espressif/arduino-esp32)的 [Arduino IDE](https://www.arduino.cc/en/Main/Software)。

从版本 1.6.4 开始，Arduino 允许使用开发板管理器安装第三方平台包。我们为 Windows、Mac OS 和 Linux（32 位和 64 位）提供了可用的包。

- 安装 1.8 级别或更高版本的当前上游 Arduino IDE。当前版本可在 [Arduino 网站](https://arduino.cc/en/main/software)获取。
- 启动 Arduino 并打开首选项窗口。
- 在 _附加开发板管理器网址_ 字段中输入 ```https://dl.espressif.com/dl/package_esp32_index.json```。您可以添加多个网址，用逗号分隔。
- 从工具 > 开发板菜单打开开发板管理器，安装 _esp32_ 平台（安装后不要忘记从工具 > 开发板菜单中选择您的 ESP32 开发板）。
- 选择 _**工具->开发板->DOIT ESP32 DEVKIT**_

稳定版本链接：`https://dl.espressif.com/dl/package_esp32_index.json`  
开发版本链接：`https://dl.espressif.com/dl/package_esp32_dev_index.json`  
如果您想了解更多详细信息，可以点击[链接](https://github.com/espressif/arduino-esp32)

##### 库的使用

- **1.下载 ESP32 启动库**

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-esp32-boot/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-boot.png" /></a></p>

然后将此库添加到您的 Arduino IDE。

如果您不知道如何安装库，请查看：  

 [安装其他 Arduino 库](https://www.arduino.cc/en/Guide/Libraries)

 您可以在此库中找到两个示例文件夹

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/example.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>示例</h3></td>
    <td><h3>描述</h3></td>
  </tr>
  <tr>
    <td><h4>01LoadDefaultBitstream</h4></td>
    <td><h4>此示例将加载 SD 卡文件 /overlay/default.bit 到 FPGA</h4></td>
  </tr>
  <tr>
    <td><h4>02LoadConfigBitstream</h4></td>
    <td><h4>此示例将读取 SD 卡中的 ini 格式文件 /board_config.ini，然后将 overlay_on_boot 键值指定的比特流加载到 FPGA。</h4></td>
  </tr>  
  </tbody></table>

- **2.准备 SD 卡**  
  2.1 使用 FAT16/FAT32 文件系统格式化 SD 卡。  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/format.jpg" alt="pir" width={600} height="auto" /></p>

  2.2 在 SD 卡中创建一个名为 **overlay** 的顶级子文件夹。  
  2.3 将您的比特流或[示例比特流](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio)文件（必须具有扩展名 .bit）放入 **overlay** 文件夹。  

:::tip
示例比特流：通过 SPI 接口控制的 GPIO 扩展，支持 ADC/DAC/RGB-LED，请参见[源代码](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio)。
:::

  2.4 如果您运行示例 01LoadDefaultBitstream，请将 **overlay** 中的比特流文件重命名为 **default.bit**。  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/folder.jpg" alt="pir" width={600} height="auto" /></p>

2.5 如果您运行示例 02LoadConfigBitstream，请将 [**board_config.ini**](https://github.com/Pillar1989/spartan-edge-esp32-boot/blob/master/extras/board_config.ini) 放入 SDCard 根目录。  
  2.6 将 SDCard 插入 Spartan (Edge Accelerator) 开发板。  

- **3.上传示例**  
  3.1 通过 USB Type-C 线将 Spartan 开发板连接到 PC，并安装 USB232 驱动程序（芯片 CP2102）。  
  3.2 将电源开关（靠近 USB Type-C 插槽）切换到 USB 侧为开发板供电。  
  3.3 通过 Arduino IDE 打开库示例之一。  
  3.4 在 Arduino IDE 中检查开发板和端口设置，如上一节所述。  
  3.5 按住 Sparton 开发板上的 'BOOT' 按钮超过 1 秒，强制 ESP32 进入 Bootloader 模式。  
  3.6 在 Arduino IDE 中按 'Upload' 按钮将示例（编译后的二进制文件）上传到 ESP32。  

- **4.运行示例**  
  4.1 确保板载 DIP 开关 K5（最后一个）在 Slave(ON) 侧，这样可以使 FPGA 被其他设备（MCU）编程。  
  4.2 按 Spartan 开发板上的 'RST' 按钮启动示例。  
  4.3 示例启动几秒钟后，开发板上的 FPGA_DONE（红色）LED 将点亮。

------

#### Spartan Edge Accelerator Board IO 示例

接下来，以下教程将向您展示如何使用 Arduino 控制 Spartan Edge Accelerator Board 的 GPIO/ADC/DAC/RGB-LED 资源。

- 下载 IO 示例库：

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-ioex/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-IO.png" /></a></p>

- 将此库添加到您的 Arduino IDE。如果您不知道如何安装库，请查看：  

 [安装其他 Arduino 库](https://www.arduino.cc/en/Guide/Libraries)

- 定位到 `examples` 文件夹，选择任何示例，双击 .ino 文件。

- 上传演示。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

### 独立模式

#### 硬件

**所需材料**

- [Spartan Edge Accelerator Board](#A) x1
- [USB Type C 数据线](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1

只需通过 USB Type C 线为 Spartan Edge Accelerator Board 供电。

#### 软件

Spartan Edge Accelerator Board 也可以作为传统的 FPGA 开发板工作。以下传统教程将向您展示如何在独立模式下使用它。

在本节中，您将了解项目模式功能，包括项目创建、源文件管理、设计分析、约束定义以及综合和实现运行管理。这可以用作快速参考。

首先，您应该下载 vivado 教程库，我们需要一些源文件。

<p style={{textAlign: 'center'}}><a href="https://github.com/swjtu-mxb/vivado-tutorial/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/Vivado-Tutorial-Library.png" /></a></p>

- **步骤 1：创建项目**

  _启动 Vivado_

  _创建新项目_

1. Vivado 打开后，在入门页面选择 **Create Project**。

2. 在新建项目向导中点击 **Next**

3. 指定项目名称和位置（选择"**Create project subdirectory**"为您的项目创建文件夹）

4. 点击 **Next**。

5. 选择 **RTL Project** 作为 **Project Type** 并点击 **Next**。（选择 **Do not specify sources at this time** 并稍后添加您的文件）

   _(Vivado Design Suite 允许根据您的源文件类型和设计任务选择不同的设计入口点。您可以选择合适的项目类型。)_

6. 为项目选择 **xc7s15ftgb196-1** 器件，并点击 Next，如图 1 所示。

7. 点击 **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/1.png" alt="pir" width={600} height="auto" /></p>

Vivado IDE 以默认布局打开 project_tutorial，如图 2 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/2.png" alt="pir" width={600} height="auto" /></p>

**Flow Navigator** 清楚地显示了基本设计流程。

**Sources** 由 **Constraints**、**Simulation** **Sources** 和 **Utility** **Sources** 组成。

**Design Runs** 默认创建 synth_1 和 impl_1。

vivado 的**运行状态**显示在右上角。

- **步骤 2：添加和创建您的文件**

  *在此步骤中，我们在项目中添加 **test.v**、**test_pin.xdc**、**test_sim.v**。这些文件位于 **vivado_tutorial/vivado_tutorial.srcs** 的不同文件夹中*

1. 在 Flow **Navigator** 的 **PROJECT MANAGER** 中点击 **Add Sources** 来添加 **RTL 文件**。

2. 选择 **Add or create design sources** 并点击 Next。

3. 点击按钮并选择选项或直接点击选项来添加或创建文件，如图 3 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/3.png" alt="pir" width={600} height="auto" /></p>

4. 在这里，我们直接添加 RTL 文件。选择 **Add Files** 并在您的目录中添加文件 **test.v**，如图 4 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/4.png" alt="pir" width={600} height="auto" /></p>

5. 点击 **Finish**。

6. 再次在 Flow **Navigator** 的 **PROJECT MANAGER** 中点击 **Add Sources** 来添加 **约束文件**。

7. 选择 **Add or create constraints** 并点击 Next。

8. 点击 **Add Files** 并添加您的约束文件 **test_pin.xdc**，如图 5 所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/5.png" alt="pir" width={600} height="auto" /></p>

9. 点击 **Finish**。

10. 在 Flow **Navigator** 的 **PROJECT MANAGER** 中再次点击 **Add Sources** 来添加**仿真文件**。

11. 选择 **Add or create simulation sources** 并点击 Next。

12. 点击 **Add Files** 并添加您的仿真文件 **test_sim.v**，如图 6 所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/6.png" alt="pir" width={600} height="auto" /></p>

13. 点击 **Finish**。

     最后，我们添加的文件将出现在 **Sources** 中，如图 7 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/7.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3：详细分析 RTL 设计**

  Vivado IDE 包含一个 RTL 分析和 IP 定制环境。还有几个 RTL 设计规则检查 (DRC) 来检查改进 RTL 设计性能或功耗的方法。

1. 在 Flow Navigator 中选择 Open Elaborated Design 来详细分析设计。

2. 确保主工具栏中的 Layout Selector 下拉菜单选择了 Default Layout。Elaborated Design 启用各种分析视图，包括 RTL Netlist、Schematic 和 Graphical Hierarchy。这些视图具有交叉选择功能，可帮助您调试和优化 RTL。

3. 在 RTL Netlist 窗口中探索逻辑层次结构并检查 Schematic。您可以通过双击单元格来深入层次结构，或使用 Schematic 弹出菜单中的 Expand Cone 或 Expand/Collapse 等命令来遍历原理图。

4. 在 Schematic 中选择任何逻辑实例并右键单击以选择 **Go to Source** 或 **Go to Definition** 命令。

5. 点击 Vivado IDE 底部的 Messages 窗口，并检查消息。

6. 点击 Messages 工具栏中的 **Collapse All** 按钮。

7. 展开 Elaborated Design 和消息，如图 8 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/8.png" alt="pir" width={600} height="auto" /></p>

8. 点击其中一个链接，Text Editor 将打开 RTL 源文件并突出显示相关行。
9. 关闭 Text Editor 窗口。
10. 通过点击 Elaborated Design 窗口横幅右侧的 **X** 来关闭 Elaborated Design，并点击 OK 确认。

- **步骤 4：使用 IP Catalog**

  Xilinx IP Catalog 提供对 Vivado IP 配置和生成功能的访问。您可以通过多种方式对 Catalog 进行排序和搜索。IP 可以进行定制、生成和实例化。

1. 在 Flow Navigator 中，在 Project Manager 下点击 **IP Catalog** 按钮。

2. 浏览 IP Catalog 以检查各种类别和 IP 过滤功能。

3. 选择相应的 IP 并在工具内执行 IP 的本机定制和配置，然后选择 **OK**

4. 通过点击窗口选项卡上的 X 来关闭 IP Catalog 选项卡。

- **步骤 5：运行行为仿真**

  Vivado IDE 集成了 Vivado Simulator，使您能够在项目中添加和管理仿真源。您可以配置仿真选项，创建和管理仿真源集。您可以在综合之前对 RTL 源运行行为仿真。

1. 在 Flow Navigator 中，在 Project Manager 下，点击 Settings 命令。Settings 对话框打开，顶部显示 Project Settings，下方显示 Tool Settings，如图 9 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/9.png" alt="pir" width={600} height="auto" /></p>

2. 检查 **Simulation** 页面上可用的设置，然后点击 **Cancel** 关闭对话框。
3. 在 Flow Navigator 中点击 **Run Simulation** 命令，然后在子菜单中点击 **Run Behaviora Simulation**，如图 10 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/10.png" alt="pir" width={600} height="auto" /></p>

4. 将滑动条拖到左侧并使用这些工具放大或缩小以查看适当的图像，如图 11 和图 12 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/11.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/12.png" alt="pir" width={600} height="auto" /></p>

5. 点击图 13 右上角的 **X** 并点击 **OK** 关闭 SIMULATION。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/13.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6：查看设计运行设置**

  设计运行是配置和存储综合和实现过程不同步骤中众多可用选项的一种方式。您可以配置这些选项并将配置保存为策略，以便在将来的运行中使用。

1. 在 Flow Navigator 中，在 Project Manager 下，点击 **Settings** 命令。

2. 在 Project Settings 下选择 **Synthesis** 页面。有关这些选项的完整描述，请参阅 _Vivado Design Suite User Guide: Synthesis_([UG901](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug901-vivado-synthesis.pdf))。

3. 在 Project Settings 下选择 **Implementation** 页面。有关这些选项的完整描述，请参阅 _Vivado Design Suite User Guide: Implementation_([UG904](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug904-vivado-implementation.pdf ))。

- **步骤 7：综合和实现设计**

配置综合和实现运行选项后，您可以在 **Design Runs** 中**运行综合**和**运行实现**，或者在 **Flow Navigator** 中点击按钮或点击相应按钮来执行此操作。在综合和实现过程中，vivado 的**运行状态**显示在右上角。

​ 在本教程中，我们将在 Design Runs 中运行这些步骤。

1. 右键点击 syth_1 并选择 **Launch Runs**，如图 14 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/14.png" alt="pir" width={600} height="auto" /></p>

2. 点击 ok，运行状态显示在右上角，如图 15 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/15.png" alt="pir" width={600} height="auto" /></p>

3. 点击 **Open Synthesized Design** 进行进一步的设计和分析。您可以看到 **Report Timing Summary**、**Report Utilization** 和其他选项，如图 16 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/16.png" alt="pir" width={600} height="auto" /></p>

4. 以相同方式运行实现，如图 17 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/17.png" alt="pir" width={600} height="auto" /></p>

5. 点击 **Open implemented Design** 查看实现后的报告

- **步骤 8：生成比特流文件**

  **实现设计**后，我们可以在 **Design Runs** 中看到综合和实现完成，如图 18 所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/18.png" alt="pir" width={600} height="auto" /></p>

 在 Flow Navigator 中点击 **Generate Bitstream**。

- **步骤 9：下载文件**

  **生成比特流**后，您有两种方式将文件加载到 FPGA。

  您可以使用 JTAG 接口（图 19 右上角）在 vivado 中将 bit 文件加载到 FPGA，或者使用 ESP32（图 19 右下角）将 bit 文件加载到 FPGA。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/19.png" alt="pir" width={600} height="auto" /></p>

  **按照以下步骤，通过 JTAG 接口将比特流加载到 FPGA**

1. 给板子供电并连接 [Platform Cable USB II](https://www.xilinx.com/products/boards-and-kits/hw-usb-ii-g.html)（或兼容线缆）。

2. 在 Flow Navigator 中点击 **Open Target** 和 **Auto Connect**。

3. 成功连接到板子后，点击 **Program Device** 并选择 bit 文件，然后点击 **Program**，如图 20 所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/20.png" alt="pir" width={600} height="auto" /></p>

1. 下载 bit 文件后，**FPGA**_**DONE** **led** 将点亮。

   *在这个项目中，如果您按下任意按键或同时按下两个按键（**USER1** 和 **USER2**），**LED L1** 将熄灭。*

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan Edge Accelerator Board v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [Spartan-7 FPGA 数据手册](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan-7%20FPGAs%20Data%20Sheet.pdf)
- **[PDF]** [ESP32 数据手册](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/ESP32-datasheet.pdf)
- **[PDF]** [Spartan-Edge-Accelerator-Board Eagle 文件](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/tree/master/res/Spartan%20Edge%20Accelerator%20Board%20v1.0/202002626_Spartan%20Edge%20Accelerator%20Board%20v1.0_SCH%20%26%20PCB)

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