---
description: Base_Shield_V2
title: Base Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Base_Shield_V2
sku: 103030000
last_update:
  date: 01/11/2023
  author: Eico
no_comments: false
createdAt: '2025-08-07'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Base_Shield_V2/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Uno 是迄今为止最受欢迎的 Arduino 开发板，但是当您的项目需要大量传感器或 LED 时，跳线杂乱无章会让人感到沮丧。创建 Base Shield 的目的是帮助您摆脱面包板和跳线。通过底板上丰富的 Grove 连接器，您可以方便地将所有 Grove 模块添加到 Arduino Uno 上！Base Shield V2 的引脚排列与 Arduino Uno R3 相同。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 版本

<table align="center">
  <tbody>
  <tr>
    <td><h3>产品版本</h3></td>
    <td><h3>变更</h3></td>
    <td><h3>发布日期</h3></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.2</h4></td>
    <td><h4>初始版本</h4></td>
    <td><h4>2011年10月</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>更改 Grove 连接器布局和数量</h4></td>
    <td><h4>2012年8月</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>更改 Grove 连接器布局和数量，以及增加电源开关以支持 3.3V 和 5V。</h4></td>
    <td><h4>2014年3月</h4></td>
  </tr>
  </tbody></table>

## 规格参数

<table align="center">
  <tbody>
  <tr>
    <td><h3>参数</h3></td>
    <td><h3>数值/范围</h3></td>
  </tr>
  <tr>
    <td><h4>工作电压</h4></td>
    <td><h4>3.3V/5V</h4></td>
  </tr>
  <tr>
    <td><h4>工作温度</h4></td>
    <td><h4>-25℃ 至 +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>模拟端口</h4></td>
    <td><h4>4</h4></td>
  </tr>  
  <tr>
    <td><h4>数字端口</h4></td>
    <td><h4>7</h4></td>
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
    <td><h4>69mm x 53mm</h4></td>
  </tr>
  </tbody></table>

## 兼容开发板

Base Shield 已测试并完全兼容以下开发板：

- Arduino Uno（所有版本）/Seeeduino（V4 和 V4.2）
- Arduino Mega/Seeeduino Mega
- Arduino Zero（M0）/Seeeduino Lorawan
- Arduino Leonardo/Seeeduino Lite
- Arduino 101
- Arduino Due 3.3V
- Intel Edison 5V
- Linkit One

:::caution
Grove Base Shield 的默认 I2C 引脚是 D70/D71，但 Arduino DUE 的默认 I2C Wire 定义为 D20/D21，因此当两者一起使用时，如果使用 `Wire` 定义，您将无法正常使用扩展板的 I2C 引脚，您需要使用 `Wire1`。
:::

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-模拟端口**：包括 4 个模拟端口，A0、A1、A2 和 A3。
- **2-数字端口**：包括 7 个数字端口，D2、D3、D4、D5、D6、D7 和 D8。
- **3-UART 端口**：1 个 UART 端口。
- **4-I2C 端口**：4 个 I2C 端口。
- **5-电源开关**：当使用 Arduino UNO 与 Base Shield v2 时，请将开关切换到 5V 位置；当使用 Seeeduino Arch 与 Base Shield v2 时，请将开关切换到 3.3V。
- **6-复位按钮**：复位 Arduino 开发板。
- **7-PWR LED**：绿色 LED 在通电时点亮。
- **8-P1、P2**：如果将 Base Shield v2 与 Seeeduino V3 一起使用，请焊接焊盘 P1 和 P2。
- **尺寸**：2.1 * 2.7 英寸

## 入门指南

### 硬件

- 步骤 1. 准备以下物品：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4.2</h3></td>
    <td><h3>Base Shield</h3></td>
    <td><h3>Grove - 蜂鸣器</h3></td>
    <td><h3>Grove - 按钮</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>立即购买</span></a></h4></td>
  </tr>  
  </tbody></table>

- 步骤 2. 将 Grove - 蜂鸣器连接到 Base Shield 的 D3 端口。
- 步骤 3. 将 Grove - 按钮连接到 Base Shield 的 D2 端口。
- 步骤 4. 将 Base Shield 插入 Seeeduino。
- 步骤 5. 通过 USB 线将 Seeeduino 连接到 PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### 软件

- 步骤 1. 将下面的代码复制到 Arduino IDE 并上传到 Seeeduino。

```cpp
const int button = 2;       // connect a button
const int buzzer = 3;       // connect a buzzer
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

请点击[这里](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000)查看所有 Base Shield V2 常见问题。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [下载 Wiki PDF](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 原理图](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 原理图](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## 项目

**智能植物物联网**：通过 Helium 和 Microsoft Azure IoT 自动浇灌植物并跟踪植物健康状况。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/Nyceane/smart-plant-iot-59cbc3/embed" width={350} />

**太阳能环境监测套件**：一个太阳能供电的开源套件，用于监测空气质量、声音水平、湿度和温度。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed" width={350} />

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