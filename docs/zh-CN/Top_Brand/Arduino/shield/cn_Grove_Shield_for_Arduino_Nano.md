---
description: Grove_Shield_for_Arduino_Nano
title: Grove Shield for Arduino Nano

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Shield_for_Arduino_Nano
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-front.png" alt="pir" width={600} height="auto" /></p>
Grove Shield for Arduino Nano 为您提供了一种连接 Arduino Nano 和 Seeeduino Nano 的简单方式。这款扩展板通过引出主板的引脚并扩展为 8 个 Grove 连接器，帮助您摆脱面包板和跳线的束缚。该扩展板引出主板的引脚并扩展为 8 个 Grove 连接器，包括 3 个 Grove 数字连接器、3 个 Grove 模拟连接器、1 个 Grove I2C 连接器和 1 个 Grove UART 连接器。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 规格参数

<table align="center">
  <tbody>
  <tr>
    <td><h3>参数</h3></td>
    <td><h3>数值/范围</h3></td>
  </tr>
  <tr>
    <td><h4>工作温度</h4></td>
    <td><h4>-25℃ 至 +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>模拟端口</h4></td>
    <td><h4>3</h4></td>
  </tr>  
  <tr>
    <td><h4>数字端口</h4></td>
    <td><h4>3</h4></td>
  </tr>
  <tr>
    <td><h4>UART 端口</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>I2C 端口</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>尺寸</h4></td>
    <td><h4>45mm x40mm</h4></td>
  </tr>
  </tbody></table>

Grove Shield V1.0 至 V1.1，支持 Arduino Nano 33 系列开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/change.png" alt="pir" width={600} height="auto" /></p>

**V1.1 更新说明**：增加 VCC 3.3V/5V 开关

目前，Grove Shield 已升级至 v1.3 版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/UUXvr7pmnK.png" alt="pir" width={350} height="auto" /></p>

**V1.3 更新说明**：Grove Shield V1.3 版本切断了连接两侧 RST 和 RSE 引脚的导线。

## 兼容开发板

V1.0 支持列表：

- [Seeeduino nano](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)
- Arduino nano

V1.1 支持列表：

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*

V1.3 支持列表：

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*
- Arduino ESP32 Nano

:::caution
要与 Arduino 33 系列开发板配合使用，请将 VCC 电源切换至 3.3V。如果将 VCC 电源切换至 5V，可能会损坏开发板！
:::

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-back-rr.jpg" alt="pir" width={600} height="auto" /></p>

- **1-模拟端口**：包括 3 个模拟端口，A0、A2、A6。
- **2-数字端口**：包括 3 个数字端口，D2、D4、D6。
- **3-UART 端口**：1 个 UART 端口。
- **4-I2C 端口**：1 个 I2C 端口。

## 开始使用

### 硬件

- 步骤 1. 准备以下物品：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino Nano</h3></td>
    <td><h3>Grove Shield for Arduino Nano</h3></td>
    <td><h3>Grove - 蜂鸣器</h3></td>
    <td><h3>Grove - 按钮</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-front.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-wiki.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>立即购买</span></a></h4></td>
  </tr>  
  </tbody></table>

- 步骤 2. 将 Grove - 蜂鸣器连接到 Grove Shield 的 D4 端口
- 步骤 3. 将 Grove - 按钮连接到 Grove Shield 的 D2 端口
- 步骤 4. 将 Grove Shield for Arduino Nano 插入 Seeeduino nano
- 步骤 5. 通过 USB 线将 Seeeduino 连接到 PC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/hardwareconnect.jpg" alt="pir" width={600} height="auto" /></p>

### 软件

- 步骤 1. 将以下代码复制到 Arduino IDE 并上传到 Seeeduino。

```cpp
const int button = 2;       // connect a button
const int buzzer = 4;       // connect a buzzer
void setup()
{
    pinMode(button, INPUT); //set button as an INPUT device
    pinMode(buzzer, OUTPUT);   //set LED as an OUTPUT device
}
void loop()
{
    int btn = digitalRead(button); //read the status of the button
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- 步骤 2. 按下按钮，我们将听到蜂鸣器的声音。

## 常见问题

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip)
- **[PDF]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.pdf)
- **[SCH]** [Grove shield for Arduino Nano SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.sch)
- **[BRD]** [Grove shield for Arduino Nano BRD](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.brd)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>