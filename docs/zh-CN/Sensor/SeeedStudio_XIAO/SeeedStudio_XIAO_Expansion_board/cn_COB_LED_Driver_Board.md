---
description: XIAO 照明驱动器：锂电池供电，3 个开关 + 4 个 PWM，驱动 3V COB 灯丝——点亮微缩模型、立体模型、可穿戴设备。
title: XIAO COB LED 驱动板
image: https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first_COB-LED-Driver-Board-for-Seeed-Studio-XIAO.webp
slug: /cn/getting_started_with_cob_led_dirver_board
last_update:
  date: 11/27/2025
  author: Brandy
---
# Seeed Studio XIAO COB LED 驱动板入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

这是一款专为 Seeed Studio XIAO 设计的 7 通道 COB LED 驱动扩展板。该扩展板突破了 GPIO 功率限制，提供 7 个输出通道，专门为超窄 1mm 3V COB LED 灯带量身定制。集成 PMIC 电池管理功能，是构建紧凑、高亮度无线照明系统的理想即插即用解决方案。

 **推荐阅读：**[安全注意事项](#add-board)

## 简介

### 特性

- **适配 1mm 3V COB LED 灯带** 

  板载硬件限流专门调校以匹配 3V 1mm 柔性 COB 灯带的电气特性。分层的 300mA 和 100mA 电流限制有效驱动各种长度的灯带，为创客提供安全、稳定和即插即用的体验。

- **策略性 7 通道混合输出** 

  通过单块板高效管理整个照明系统。具有 3 个高功率通道（300mA）用于明亮的主照明，4 个可调光通道（80mA）用于精细的呼吸或渐变效果。一块板处理所有需求——保持主灯明亮，效果灯动态。

- **无线项目的电池管理** 

  集成电源电路支持 3.7V 锂电池或高功率 5V USB 适配器。非常适合构建无线装置和高亮度桌面环境照明。

- **简易传感器扩展** 

  包含标准 Grove I2C 连接器，可轻松连接传感器，让您的照明项目能够智能地响应环境变化。

  ### 规格参数
<table className="spec-table">
  <tbody>
    <tr>
      <th>LED 功率支持</th>
      <td>DC 3V</td>
    </tr>
    <tr>
      <th>电源输入</th>
      <td>
        5V USB（通过 XIAO）<br/>
        <small>注意：建议使用 5V/2A+ 壁式适配器进行满载运行。</small><br/>
        3.7V 锂电池（通过板载电池端口）
      </td>
    </tr>
    <tr>
      <th>3× 高功率端口<br/>（螺丝端子）</th>
      <td>
        3 通道输出<br/>
        驱动能力：最大 300mA/通道<br/>
        控制逻辑：1× 常开 + 2× GPIO 开关（D0、D1）<br/>
        <small>注意：仅支持开/关开关，不支持 PWM</small>
      </td>
    </tr>
    <tr>
      <th>4× FX/PWM 端口<br/>（底部焊盘）</th>
      <td>
        4 通道输出<br/>
        驱动能力：最大 80mA/通道<br/>
        控制逻辑：通过 D2、D3、D8、D9 完全可调光（PWM）<br/>
        <small>注意：低电平有效逻辑</small>
      </td>
    </tr>
    <tr>
      <th>板载</th>
      <td>
        Grove I²C 连接器 ×1<br/>
        电源开关 ×1<br/>
        电源 LED ×1<br/>
        电池连接器 ×1
      </td>
    </tr>
    <tr>
      <th>尺寸</th>
      <td>`30mm*41mm*16mm`（配备 Seeed Studio XIAO）</td>
    </tr>
  </tbody>
</table>

### 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/IO.png" style={{width:1000, height:'auto'}}/></div>

- **(1) D1-高功率端口：** 支持最大 300mA 电流的高功率端口，仅允许开/关开关控制（不支持 PWM 调光），用于连接高功率负载。
- **(2) D0-高功率端口：** 支持最大 300mA 电流的高功率端口，仅允许开/关开关控制（不支持 PWM 调光），用于连接高功率负载。
- **(3) VCC-常开端口：** 支持最大 300mA 电流的常供电 VCC 端口，不受电源开关控制，始终输出供电电压，可为需要持续供电的设备供电。
- **(4) GND：** 电路的公共接地端口，用于连接所有模块的接地线。
- **(5) I²C Grove 端口：** Grove 标准 I²C 接口（包括 VCC、GND、SDA、SCL 引脚），用于连接支持 I²C 协议的 Grove 模块（如传感器、显示器）。
- **(6) 电源开关：** 电源控制开关；切换到 "ON" 时，为高/低功率端口供电；切换到 "OFF" 时，切断电源（VCC 常开端口不受此开关控制）。
- **(7) 电源 LED：** 电源状态指示灯，当电源开关切换到 "ON" 时点亮，表示模块已通电。
- **(8) 电池连接器：** 电池接口，支持连接 3.7V 锂电池为模块供电。
- **(9) D2-低功率端口：** 支持最大 80mA 电流的低功率端口，支持 PWM 调光，使用低电平有效逻辑（电平为低时负载工作）。
- **(10) GND：** 低功率区域的接地端口，用于连接低功率负载的接地线。
- **(11) D3-低功率端口：** 支持最大 80mA 电流的低功率端口，支持 PWM 调光，使用低电平有效逻辑（电平为低时负载工作）。
- **(12) D9-低功率端口：** 支持最大 80mA 电流的低功率端口，支持 PWM 调光，使用低电平有效逻辑（电平为低时负载工作）。
- **(13) D8-低功率端口：** 支持最大 80mA 电流的低功率端口，支持 PWM 调光，使用低电平有效逻辑（电平为低时负载工作）。

#### 支持的 COB LED 指南
#### 支持的 LED 指南

<div class="table-center">
 <table style={{textAlign:'center'}}>
  <tr>
    <th>产品</th>
    <th>名称</th>
    <th>长度</th>
    <th>工作电流</th>
     <th>  光通量</th>
  </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100052952-Double-Ended-COB-LED-Strip---White(6500K)-38mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-38mm-10PCS-p-6592.html">双端 COB LED 灯带 - 白光(6500K)</a></td>
      <td>38mm</td>
      <td>100mA（推荐）</td>
       <td>  &gt;20 lm（@ 100mA）</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-130mm-5PCS-p-6593.html">双端 COB LED 灯带 - 白光(6500K) </a></td>
      <td>130mm </td>
      <td>300mA（推荐）</td>
      <td>21-25 lm（@ 300mA）</td>
  </tr>

  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html">双端 COB LED 灯带 - 白光(6500K)</a></td>
      <td>300mm</td>
      <td>300mA（推荐）</td>
       <td>&gt;50 lm（@ 300mA）</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100036812-Single-Ended-COB-LED-Strip---White(6500K)-110mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-110mm-5PCS-p-6590.html"> 单端 COB LED 灯带 - 白光(6500K)</a></td>
      <td>110mm</td>
      <td>100mA（推荐）</td>
       <td> &gt;23 lm（@ 200mA）</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html">单端 COB LED 灯带 - 白光(6500K)</a></td>
      <td>300mm </td>
      <td>100mA（推荐）</td>
       <td>&gt;22 lm（@ 100mA）</td>
  </tr>
  </table>
</div>

## 入门指南

为了充分发挥 COB LED 驱动板的潜力并享受最佳体验，我们强烈建议将其与 Seeed Studio XIAO 开发板和我们匹配的 COB LED 灯带配对使用。

:::note
安全提示：  
- **充电锂离子电池时**，请断开 LED 灯带和任何其他外设。  
- **连接 USB-C 5V 进行编程或调试时**，请断开电池。  

单独使用**电池**或单独使用 **5V 外部电源**是安全的。不建议在充电时连接外围设备。
:::

### 使用 Arduino

您需要为 XIAO 配置 Arduino 环境并添加板载包。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 软件准备

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。

- 如果您想在后续教程中使用 **Seeed Studio XIAO RP2040**，请参考**[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)**完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO RP2350**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_rp2350_arduino/#setting-up-the-software)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO nRF52840**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO ESP32-C3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO ESP32-C6**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/#software-preparation)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO ESP32-S3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO RA4M1**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/getting_started_xiao_ra4m1/#software-preparation)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO MG24**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_mg24_getting_started/#software-preparation)** 完成添加。

:::tip
XIAO SAMD21 和 XIAO nRF54L15 只能通过 USB-C 供电工作，不能单独使用电池。此外，nRF54L15 不能在 Arduino 环境中运行。
:::
####  低功耗端口驱动示例

一个支持最大电流 80mA 的低功耗端口，支持 PWM 调光，使用低电平有效逻辑（当电平为低时负载工作）。

**步骤 1.** 硬件准备

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> COB LED 驱动板</th>
        <th>单端 COB LED 灯带</th>
 </tr>
 <tr>

   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>


:::tip
将 XIAO 连接到驱动板时，请务必拔掉 USB 线。
:::
**步骤 2.**  按照下图连接 Seeed Studio XIAO ESP32-C3、XIAO COB LED 驱动板和单端 COB LED 灯带：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_ready2_new.jpg" style={{width:400, height:'auto'}}/></div>


**步骤 3.** 将 XIAO 连接到 USB 烧录程序。复制并下载相关示例代码。
```cpp
#define LED_BUILTIN     D2
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED on by making the voltage LOW
 // digitalWrite(LED_BUILTIN, HIGH);  // turn the LED off (HIGH is the voltage level)
}

```
:::tip 

注释中的"低功耗端口"意味着低电平有效：
将引脚拉低以打开灯带，释放（高电平）以关闭灯带。

:::
代码简单地控制 GPIO 引脚的高低电平。
由于驱动板已经配置好，您无需下载任何额外的库。
按照图片链接，上传程序并为 COB LED 驱动板供电，如果一切顺利，您可以看到如下效果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_new.jpg" style={{width:700, height:'auto'}}/></div>

#### 高功耗端口驱动示例

一个支持最大电流 300mA 的高功耗端口，仅允许开/关切换控制（不支持 PWM 调光），用于连接高功耗负载。

**步骤 1.**  硬件准备
<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> COB LED 驱动板</th>
        <th>双端 COB LED 灯带</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>



**步骤 2.**  按照下图连接 Seeed Studio XIAO ESP32-C3、XIAO COB LED 驱动板和双端 COB LED 灯带：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100074846-Double-Ended-COB-LED-Strip---White(6500K)-130mm.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new.jpg" style={{width:400, height:'auto'}}/></div>

**步骤 3.** 将 XIAO 连接到 USB 烧录程序。复制并下载相关示例代码。

```cpp
#define LED_BUILTIN       D0

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
 // digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
}

```


代码简单地控制 GPIO 引脚的高低电平。
由于驱动板已经配置好，您无需下载任何额外的库。
按照图片链接，上传程序并为 COB LED 驱动板供电，如果一切顺利，您可以看到如下效果：


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new_light.jpg" style={{width:700, height:'auto'}}/></div>

####   低功耗端口驱动 PWM 示例

一个支持最大电流 80mA 的低功耗端口，支持 PWM 调光，使用低电平有效逻辑（当电平为低时负载工作）。
**步骤 1.**   硬件准备

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> COB LED 驱动板</th>
        <th>单端 COB LED 灯带</th>
        <th>双端 COB LED 灯带</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**步骤 2.** 按照下图所示连接 Seeed Studio XIAO ESP32-C3、XIAO COB LED 驱动板、单端 COB LED 灯带和双端 COB LED 灯带：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Breath_new_ready.jpg"style={{width:700, height:'auto'}}/></div>

**步骤 3.** 将 XIAO 连接到 USB 烧录程序。复制并下载相关示例代码。

```cpp
#include <Arduino.h>

// ================= Define Pins =================
const int PIN_STRIP_1 = D2; 
const int PIN_STRIP_2 = D3; 

// ================= Parameter Configuration =================
// Breathing speed: larger number = slower, smaller number = faster
const int BREATH_SPEED = 2000; 

// Breathing phase offset: determines if the two light strips "light up together" or "alternate lighting"
// float PHASE_OFFSET = 0;    // Set to 0 -> fully synchronized
float PHASE_OFFSET = PI;   // Set to PI (3.14) -> fully alternating (complementary)
// float PHASE_OFFSET = PI/2; // Set to PI/2 -> slightly staggered rhythm

// ================= Helper Function: Handle Active LOW Lighting Logic =================
// This step is crucial, do not modify
// Input: brightness (0=off, 255=maximum brightness)
void setLedBrightness(int pin, int brightness) {
  // 1. Safety limit range
  brightness = constrain(brightness, 0, 255);

  // 2. Logic inversion (Active LOW)
  // Brightness 255 -> Output 0 (GND) -> Light at maximum brightness
  // Brightness 0   -> Output 255 (VCC) -> Light off
  int pwmValue = 255 - brightness;

  analogWrite(pin, pwmValue);
}

// ================= Math Function for Calculating Breathing Brightness =================
// Using the algorithm (e^sin(x) - 1/e), which mimics human breathing curve better than ordinary triangular wave
int calculateBreathBrightness(unsigned long time, float phaseOffset) {
  // Calculate angle: time / speed factor
  float angle = (time / (float)BREATH_SPEED) * PI;

  // Add phase offset
  angle += phaseOffset;

  // Core formula
  float val = (exp(sin(angle)) - 0.36787944) * 108.0;

  return (int)val;
}

void setup() {
  pinMode(PIN_STRIP_1, OUTPUT);
  pinMode(PIN_STRIP_2, OUTPUT);

  // Initialization: turn off all lights first
  setLedBrightness(PIN_STRIP_1, 0);
  setLedBrightness(PIN_STRIP_2, 0);
}

void loop() {
  unsigned long currentMillis = millis();

  // 1. Calculate brightness for D2 (no offset)
  int bright1 = calculateBreathBrightness(currentMillis, 0);
  setLedBrightness(PIN_STRIP_1, bright1);

  // 2. Calculate brightness for D3 (with offset)
  int bright2 = calculateBreathBrightness(currentMillis, PHASE_OFFSET);
  setLedBrightness(PIN_STRIP_2, bright2);

  // The delay here doesn't need to be too long, just give the CPU a short break
  delay(5);
}

```

这是一个电池供电的项目。这是呼吸灯样式的代码，如果你喜欢，可以在任何你想要发光的地方使用这种样式
上传程序并为 COB LED 驱动板供电，如果一切顺利，你可以看到如下效果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/PWM.gif"style={{width:500, height:'auto'}}/></div>
:::tip

额定电流限制为 300mA 或 100mA 的 LED 灯带都可以安全连接到最大输出为 80mA 的端口（端口的输出电流 ≤ LED 灯带的电流限制，确保安全冗余）。但是，额定电流限制为 100mA 的 LED 灯带不能连接到最大输出为 300mA 的端口——因为端口的最大输出电流远超过 LED 灯带的电流限制，这可能会因过流而损坏灯带。
:::
:::note
**严禁热插拔！**
始终先组装 XIAO 和驱动板，然后再插入 USB 线。
切勿在 XIAO 仍连接 USB 线时尝试连接。可能会导致 PMIC 损坏。
:::


### 通过 ESPHome 与 Home Assistant 配合使用

#### 硬件准备

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
      <th>Home Assistant 设备</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

#### 软件准备

[ESPHome](https://esphome.io/) 是一个旨在让管理 ESP 开发板尽可能简单的工具。它读取 YAML 配置文件并创建自定义固件，然后将其安装到你的 ESP 设备上。在 ESPHome 配置中添加的设备或传感器将自动显示在 Home Assistant 的用户界面中。ESPHome 可以帮助你连接并将数据发送到 Home Assistant 设备。

:::note
如果这是你第一次使用 Home Assistant 和 ESPHome，你可以按照<strong>[这里](https://www.home-assistant.io/installation/)</strong>的分步指南来安装 Home Assistant。
:::

ESPHome 作为 **Home Assistant 插件**提供，可以通过插件商店简单安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **步骤 1.** 点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项并点击 **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

如果 ESPHome 成功加载，你将看到以下窗口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### 黄昏到黎明 LED 灯

**概述**

让我们制作一个黄昏到黎明 LED 灯的演示，灯光将随着一天中光照强度的变化而改变。如果你感兴趣，请继续阅读。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/HA_demo.jpg" style={{width:500, height:'auto'}}/></div>
**步骤 1.** 硬件准备

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32-C3</th>
        <th>XIAO COB LED 驱动板</th>
        <th>Grove - 数字光传感器</th>
        <th>单端 COB LED 灯带</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**步骤 2.** 按照下图所示连接 Seeed Studio XIAO ESP32-C3、COB LED Driver Board for XIAO 和单端 COB LED 灯带 - 白色：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/connect2.png" style={{width:500, height:'auto'}}/></div>

**步骤 3.** 打开 ESPHome 页面，点击 **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**步骤 4.** 点击 **CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**步骤 5.** 为设备输入一个 **Name**，并输入 WiFi 凭据，如 **Network name** 和 **Password**。然后点击 **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_1.1.png" style={{width:400, height:'auto'}}/></div>

**步骤 6.** 选择 **ESP32-C3** 并点击

**步骤 7.** 点击 **SKIP**，因为我们将手动配置此板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**步骤 8.** 点击新创建板下的 **EDIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-ro-dawm_LED_lamp_2.2.png" style={{width:400, height:'auto'}}/></div>

**步骤 9.** 将以下代码部分复制到 .ymal 文件的末尾。XIAO ESP32-C3 从 Grove 数字光传感器读取光值，并根据光强度改变 D2 引脚的电流级别，从而控制灯带

```yaml

# ----------- Additional section (TSL2561, address 0x29) starts -----------
i2c:
  sda: 6
  scl: 7
  scan: true

# Global variables
globals:
  # Record the end timestamp of sensor ignore period (milliseconds)
  - id: ignore_sensor_until
    type: uint32_t
    restore_value: no
    initial_value: '0'
  # Flag: True means current operation is from sensor
  - id: is_robot
    type: bool
    restore_value: no
    initial_value: 'false'

sensor:
  - platform: tsl2561
    name: "Ambient Light"
    address: 0x29
    # Ultra-fast response configuration
    update_interval: 200ms
    integration_time: 101ms
    gain: 1X
    id: lux
    on_value:
      then:
        - lambda: |-
            // 1. Check if in manual control ignore period
            if (millis() < id(ignore_sensor_until)) {
              return;
            }

            // 2. Ultra-fast light control logic
            bool should_turn_on = (x < 180); // Threshold for turning on (dark)
            bool should_turn_off = (x > 220); // Threshold for turning off (bright)

            // Get current light state
            bool is_currently_on = id(light_strip).remote_values.is_on();

            if (should_turn_off && is_currently_on) {
              ESP_LOGD("custom", "Environment brightened (Lux: %.1f), sensor auto-off light", x);

              // Key: Inform Light component this is automated operation
              id(is_robot) = true;

              auto call = id(light_strip).turn_off();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            } 
            else if (should_turn_on && !is_currently_on) {
              ESP_LOGD("custom", "Environment darkened (Lux: %.1f), sensor auto-on light", x);

              // Key
              id(is_robot) = true;

              auto call = id(light_strip).turn_on();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            }

output:
  - platform: ledc
    pin: 4
    id: pwm_output
    frequency: 1000Hz
    inverted: true

light:
  - platform: monochromatic
    output: pwm_output
    name: "Light Strip"
    id: light_strip
    restore_mode: ALWAYS_OFF
    default_transition_length: 1s

    # Monitor all state changes (on/off/dimming)
    on_state:
      - lambda: |-
          // Check who triggered this state change
          if (id(is_robot)) {
            // If triggered by Sensor:
            ESP_LOGD("custom", "Detected automated operation, not ignoring sensor");
            // Task completed, wait for next cycle
            id(is_robot) = false;
          } else {
            // Triggered by human (HA/Switch):
            ESP_LOGD("custom", "Detected manual operation, ignoring sensor for 30 seconds");
            // Set ignore end time = current time + 30000 milliseconds
            id(ignore_sensor_until) = millis() + 30000;
          }
```
:::tip
在 Home Assistant 配置中，sda、scl 和 pin 的数字始终指的是 GPIO 编号，而不是 XIAO 板上印刷的丝印标签。
:::

**步骤 10.** 点击右上角的 Install 按钮。然后选择最后一项 **Manual download**，选择 **Modern format**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_3.png" style={{width:500, height:'auto'}}/></div>

然后需要很长时间来下载和编译，请耐心等待。一切准备就绪后，固件（XX.bin）将自动下载到您的计算机。编译成功，如下图所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_4.3.png" style={{width:350, height:'auto'}}/></div>

**步骤 11.** 使用 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install) 将固件上传到 XIAO ESP32，点击 **CONNECT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

在弹出窗口中选择 XIAO ESP32 串口，点击 **INSTALL**，然后选择从上述步骤下载的 .bin 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**步骤 12.** 安装成功后，您可以看到如下效果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/demo.gif" style={{width:700, height:'auto'}}/></div>
当光线强时，夜灯关闭，当光线弱时，夜灯开启。

**步骤 13.** 安装成功后，打开日志，您将看到反馈消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_5.png" style={{width:500, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_6.png" style={{width:500, height:'auto'}}/></div>


如果您喜欢，您也可以按照上述步骤制作一个属于您自己的独特夜灯！

:::tip
虽然板载组件的额定工作温度为 -40°C 至 85°C，但在最大负载下驱动所有 7 个通道（总电流 >1A）会产生大量热量。如果安装在密闭空间中（例如密封的塑料模型内），请确保被动通风以防止触发 PMIC 的热关断保护。
:::

## 特别感谢
我们特别感谢 Xinyu 对 3D 打印工作的宝贵贡献。

 原始设计展现了卓越的创造力和实用价值。对于有兴趣查看原始设计的人，演示视频和作者主页可通过下面提供的链接访问。

**[LED 灯 3D 打印外壳](https://makerworld.com.cn/zh/models/126527-leddeng-b3#profileId-11109)**

**[作者主页](https://makerworld.com.cn/zh/@GLB_xinyulin/upload)**

## 资源

[PDF] **[Seeed Studio COB LED Driver Board 原理图](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/SCH_Sch_V1.2_2025-11-21.pdf)**

[ZIP] **[Seeed Studio COB LED Driver Board PCB](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Gerber_PCB_V1.2_2025-11-25.zip)**

[STEP] **[Seeed Studio COB LED Driver Board 3D 模型](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/cob_led_driver_board.STEP)**

## 安全注意事项{#add-board}



**操作禁止事项和安全规则**
 - 充电时不要连接任何外设。在插入 USB-C 线缆之前，请先断开灯带。
 - 调试 USB-C 端口时，电池座必须为空（未安装电池）。
 - 对于满载电流 >1A 的情况，确保在外壳上钻散热孔；否则，PMIC 会过热并关闭。
 - 切勿用裸手触摸板背面的 PMIC 区域：静电放电（ESD）可能损坏芯片，且满载时表面可能达到烫伤温度。
**核心安全提醒**
 - 遵守这四条规则以确保安全操作：
 - 连接外设时使用单一电源
 - 接线/断开连接前请先断电
 - 提供充足的散热孔
 - 请勿触摸电路板背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/safety.png" style={{width:250, height:'auto'}}/></div>

## 常见问题

**Q1. 为什么我的电路板会发热？**
  - 因为存在热插拔现象。当 XIAO 插入 USB 然后再插回驱动板时，这个过程会导致开发板电流通道短路，甚至烧毁。


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