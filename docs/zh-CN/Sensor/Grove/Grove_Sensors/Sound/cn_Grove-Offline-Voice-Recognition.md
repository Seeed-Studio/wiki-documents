---
description: Grove 离线语音识别传感器入门指南。
title: Grove 离线语音识别传感器
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/Grove-Offline-Voice-Recognition
last_update:
  date: 01/02/2024
  author: Allen
---

# Grove 离线语音识别

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/headPic.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 介绍

Grove - 离线语音识别模块适用于低功耗纯离线语音识别，基于 VC-02 模块。它拥有多达 150 个预编程命令，可用于控制您的智能设备。它的识别时间少于 100ms，采用紧凑的 18mm * 17mm 外形尺寸。该模块可通过 UART 外设进行通信，并为每个识别的命令提供唯一的十六进制代码。这个模块只需要 5V 电源就可以开始识别命令！

### 特性

- **支持 150 个语音命令** 
- **低功耗**
- **ESD 保护电源轨**
- **命令 LED 指示器**
- **Grove UART 接口**

### 规格参数

<table align="center">
  <tbody>
    <tr>
    <td><h4>参数</h4></td>
    <td><h4>范围/值</h4></td>
    </tr>
    <tr>
    <td>输入电压</td>
    <td>5V/3.3V</td>
    </tr>
    <tr>
    <td>默认波特率</td>
    <td>115200</td>
    </tr>
    <tr>
    <td>默认输出</td>
    <td>检测到命令的十六进制值</td>
    </tr>
  </tbody></table>


## 入门指南

### 演示1：使用 Arduino IDE 的 Grove 离线语音识别模块

#### 硬件设置

您需要准备以下物品：

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 离线语音识别器](/cn/Grove-Offline-Voice-Recognition)
- [扬声器](https://www.seeedstudio.com/Mono-Enclosed-Speaker-2W-6-Ohm-p-2832.html)


:::tip

某些 USB 线缆只能供电而无法传输数据。如果您没有 USB 线缆或不知道您的 USB 线缆是否可以传输数据，您可以查看 [Seeed USB Type-C 支持 USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。

:::

**步骤 1.** 通过 USB Type-C 线缆将 XIAO RP2040 连接到您的计算机。

**步骤 2.** 将 XIAO RP2040 连接到 XIAO 扩展板。

**步骤 3.** 通过 Grove 线缆将 XIAO 扩展板连接到离线语音识别器的 UART 端口。

**步骤 4.** 将离线语音识别器连接到扬声器。

以下是连接图片供您参考。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/connection.png" style={{width:1000, height:'auto'}}/></div>

#### **软件设置**

**步骤 1.** 根据您的操作系统下载并安装最新版本的 Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。如果您想在后续例程中使用 **XIAO RP2040**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)完成添加。

:::tip
如果您想使用其他类型的 XIAO，您可以参考[这里](https://wiki.seeedstudio.com/cn/xiao_topic_page/)。
:::

**步骤 3.** 安装 Arduino 代码库。

首先从 [GitHub](https://github.com/Seeed-Projects/SeeedStudio-Grove_offline_voice_recognition_sensor) 获取代码库并下载到您的本地计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.png" style={{width:1000, height:'auto'}}/></div>

由于您已经下载了 zip 库文件，打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/2.png" style={{width:1000, height:'auto'}}/></div>


#### 离线语音识别演示

**步骤 1.** 在您的 Arduino 中打开此文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/3.png" style={{width:1000, height:'auto'}}/></div>

您将看到如下代码。

```cpp
#include "GroveOfflineSensor.h"
#include <SoftwareSerial.h>
#define RX_VC02 D7
#define TX_VC02 D6

SoftwareSerial groveSerial(RX_VC02, TX_VC02); // RX, TX

void setup() {
  Serial.begin(115200);
  // wait for serial port to connect. Needed for native USB port only , This port is for displaying data Grove Sensor sends
  while (!Serial); 
  // Make sure to set the baud rate to match your communication
  groveSerial.begin(115200); 
}

void loop() {
  // detect voice from voice recognition sensor
   uint8_t *voiceData = detectVoiceFromGroveSensor(&groveSerial);

  //transfer the voice to command string
  if(voiceData != NULL){
    String response = getCommandInString(voiceData);
    Serial.println(response);
  }
  delay(1000);
}

```

**步骤 2.** 点击 **Upload** 按钮将代码上传到开发板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/5.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 对传感器说出唤醒词"hello pudding"，然后您将听到扬声器的语音反馈，并在Arduino IDE的串口监视器上看到文字反馈。更多说明，您可以在本文底部的**资源**部分找到。

<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/offlineVoiceRecognition.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 演示2：Grove离线语音识别与ESPHome和Home Assistant

#### 硬件设置

您需要准备以下物品：
- **一台安装了Home Assistant的设备**

开始使用Home Assistant的第一步是将其安装在设备上，您可以按照[这里](https://www.home-assistant.io/installation/)的分步指南进行操作。

- [XIAO-ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 离线语音识别模块](https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html)

:::tip

某些USB线缆只能供电而无法传输数据。如果您没有USB线缆或不知道您的USB线缆是否可以传输数据，您可以查看[Seeed USB Type-C支持USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。

:::

**步骤 1.** 硬件准备

通过USB Type-C线缆将XIAO ESP32S3连接到您的计算机。
将XIAO ESP32S3连接到XIAO扩展板。
通过Grove线缆将XIAO扩展板连接到UART端口上的离线语音识别器。
将离线语音识别器连接到扬声器。
将天线连接到XIAO ESP32S3。

这里是连接图片供您参考。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/29.jpg" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 创建您的智能家居
在浏览器地址栏中输入Home Assistant设备的地址，并创建一个Home Assistant账户，您可以按照[这里](https://www.home-assistant.io/getting-started/onboarding/)的分步指南进行操作。

**步骤 3.** 在Home Assistant上安装ESPHome
您可以按照[这里](https://wiki.seeedstudio.com/cn/Connect-Grove-to-Home-Assistant-ESPHome/#install-esphome-on-home-assistant)快速在Home Assistant上设置ESPHome


#### 软件

将XIAO ESP32S3添加到ESPHome

- 点击**+ NEW DEVICE**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/6.png" style={{width:1000, height:'auto'}}/></div>

- 点击**CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/7.png" style={{width:500, height:'auto'}}/></div>

- 为设备输入**名称**，并输入WiFi凭据，如**网络名称**和**密码**。然后点击**NEXT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/8.png" style={{width:500, height:'auto'}}/></div>

- 选择**ESP32-S3**并点击NEXT
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/9.png" style={{width:500, height:'auto'}}/></div>

- 点击**Install**并选择**Manual download**。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/11.png" style={{width:800, height:'auto'}}/></div>

- 下载成功后，打开ESPHome Web并选择**Modern format**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/13.png" style={{width:1000, height:'auto'}}/></div>

- 连接您的XIAO ESP32S3端口，并安装您刚刚获得的bin文件，现在它将下载所有必要的板包并将ESPHome固件刷入XIAO ESP32S3。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/16.png" style={{width:500, height:'auto'}}/></div>

- 打开LOGS，如果刷写成功，您将看到以下输出，现在返回ESPHome页面，如果您看到板状态为ONLINE，这意味着板已成功连接到WiFi。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/28.png" style={{width:1000, height:'auto'}}/></div>


:::tip
如果您收到警告"[wifi_esp32:482][arduino_events]: Event: Disconnected …… reason='Auth Expired'"，请确保ESP32设备在WiFi网络范围内，信号强度差可能导致连接问题。您可以将天线更换为[Rod Antenna](https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html)。
:::

现在您可以断开XIAO ESP32C3与计算机的连接，只需通过USB线缆为其供电。这是因为从现在开始，如果您想要将固件刷入XIAO ESP32C3，您可以简单地通过OTA进行，而无需通过USB线缆连接到X86板。

- 点击三个点并点击Install，选择Wirelessly，它将无线推送更改到板上
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/25.png" style={{width:700, height:'auto'}}/></div>

- 转到Settings并选择Devices & Services，您将看到ESPHome作为已发现的集成。点击CONFIGURE。如果它要求加密密钥，请返回ESPHome页面复制API密钥并输入。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/24.png" style={{width:600, height:'auto'}}/></div>


#### 离线语音识别

**步骤1.** 在我们之前创建的offline-voice-recognition.yaml文件中，在**文件末尾**添加以下内容，并通过OTA推送到XIAO ESP32S3

<details>

<summary>点击这里预览完整代码</summary>

```yaml
uart:
  id: uart_bus
  tx_pin: GPIO43
  rx_pin: GPIO44
  baud_rate: 115200

globals:
  - id: hex_code
    type: uint8_t
    restore_value: no
    initial_value: '0'

interval:
  - interval: 1s
    then:
      - lambda: |-
          while (id(uart_bus).available() >= 5) {
            uint8_t receivedData[5];
            for (int i = 0; i < 5; i++) {
              id(uart_bus).read_byte(&receivedData[i]);
            }
            id(hex_code) = receivedData[1];
            ESP_LOGD("main", "Hex code: %02X", id(hex_code));
          }

sensor:
  - platform: template
    name: "Received Hex Code"
    lambda: |-
      return id(hex_code);
    update_interval: 5s
    unit_of_measurement: ""
    accuracy_decimals: 0
    on_value:
      then:
        - lambda: |-
            auto call_acwind = id(acwind).make_call();
            auto call_actemp = id(actemp).make_call();
              switch (id(hex_code)) {
                case 0x03:
                  id(ac).publish_state(true);
                  break;
                case 0x04:
                  id(ac).publish_state(false);
                  break;
                case 0x05:
                  id(acmode).publish_state("automatic mode");
                  break;
                case 0x06:
                  id(acmode).publish_state("cold mode");
                  break;
                case 0x07:
                  id(acmode).publish_state("heat mode");
                  break;
                case 0x08:
                  id(acmode).publish_state("dry mode");
                  break;
                case 0x09:
                  id(acmode).publish_state("fan mode");
                  break;
                case 0x0A:
                  id(acmode).publish_state("sleeping mode");
                  break;
                case 0x0B:
                  id(acwind).publish_state("automatic fan");
                  break;
                case 0x0C:
                  id(acwind).publish_state("low fan");
                  break;
                case 0x0D:
                  id(acwind).publish_state("medium fan");
                  break;
                case 0x0E:
                  id(acwind).publish_state("high fan");
                  break;
                case 0x0F:
                  call_acwind.select_next(false);
                  call_acwind.perform();
                  break;
                case 0x10:
                  call_acwind.select_previous(false);
                  call_acwind.perform();
                  break;
                case 0x11:
                  id(actemp).publish_state("sixteen centigrade");
                  break;
                case 0x12:
                  id(actemp).publish_state("seventeen centigrade");
                  break;
                case 0x13:
                  id(actemp).publish_state("eighteen centigrade");
                  break;
                case 0x14:
                  id(actemp).publish_state("nineteen centigrade");
                  break;
                case 0x15:
                  id(actemp).publish_state("twenty centigrade");
                  break;
                case 0x16:
                  id(actemp).publish_state("twenty one centigrade");
                  break;
                case 0x17:
                  id(actemp).publish_state("twenty two centigrade");
                  break;
                case 0x18:
                  id(actemp).publish_state("twenty three centigrade");
                  break;
                case 0x19:
                  id(actemp).publish_state("twenty four centigrade");
                  break;
                case 0x1A:
                  id(actemp).publish_state("twenty five centigrade");
                  break;
                case 0x1B:
                  id(actemp).publish_state("twenty six centigrade");
                  break;
                case 0x1C:
                  id(actemp).publish_state("twenty seven centigrade");
                  break;
                case 0x1D:
                  id(actemp).publish_state("twenty eight centigrade");
                  break;
                case 0x1E:
                  id(actemp).publish_state("twenty nine centigrade");
                  break;
                case 0x1F:
                  id(actemp).publish_state("thirty centigrade");
                  break;
                case 0x20:
                  call_actemp.select_next(false);
                  call_actemp.perform();
                  break;
                case 0x21:
                  call_actemp.select_previous(false);
                  call_actemp.perform();
                  break;
                case 0x22:
                  id(fan).publish_state(true);
                  break;
                case 0x23:
                  id(fan).publish_state(false);
                  break;
                case 0x24:
                  id(acswept).publish_state("air swing up and down");
                  break;
                case 0x25:
                  id(acswept).publish_state("air swing left and right");
                  break;
                case 0x26:
                  id(acmode).publish_state("automatic mode");
                  id(acwind).publish_state("automatic fan");
                  id(actemp).publish_state("twenty six centigrade");
                  id(fan).publish_state(false);
                  break;
                case 0x27:
                  id(light).publish_state(true);
                  break;
                case 0x28:
                  id(light).publish_state(false);
                  break;
                case 0x29:
                  id(cold_light).publish_state(true);
                  break;
                case 0x2A:
                  id(cold_light).publish_state(false);
                  break;
                case 0x2B:
                  id(warm_light).publish_state(true);
                  break;
                case 0x2C:
                  id(warm_light).publish_state(false);
                  break;
                default:
                  ESP_LOGW("main", "Unknown hex code: %02X", id(hex_code));
                  break;
              }

switch:
  - platform: template
    name: "air conditioner"
    id: ac
    optimistic: True
  - platform: template
    name: "fan"
    id: fan
    optimistic: True
  - platform: template
    name: "light"
    id: light
    optimistic: True
  - platform: template
    name: "cold light"
    id: cold_light
    optimistic: True
  - platform: template
    name: "warm light"
    id: warm_light
    optimistic: True
  
select:

  - platform: template
    name: Air conditioner mode
    id: acmode
    optimistic: True
    options:
      - "automatic mode"
      - "cold mode"
      - "heat mode"
      - "dry mode"
      - "fan mode"
      - "sleeping mode"
    initial_option: "automatic mode"  

  - platform: template
    name: Fan mode 
    id: acwind
    optimistic: True
    options:
      - "automatic fan"
      - "low fan"
      - "medium fan"
      - "high fan"
    initial_option: "automatic fan"

  - platform: template
    name: Temperature
    id: actemp
    optimistic: True
    options:
      - "sixteen centigrade"
      - "seventeen centigrade"
      - "eighteen centigrade"
      - "nineteen centigrade"
      - "twenty centigrade"
      - "twenty one centigrade"
      - "twenty two centigrade"
      - "twenty three centigrade"
      - "twenty four centigrade"
      - "twenty five centigrade"
      - "twenty six centigrade"
      - "twenty seven centigrade"
      - "twenty eight centigrade"
      - "twenty nine centigrade"
      - "thirty centigrade"
    initial_option: "twenty six centigrade"

  - platform: template
    name: Fan direction
    id: acswept
    optimistic: True
    options: 
      - "air swing up and down"
      - "air swing left and right"
```

</details>

:::note
当我们创建一个新设备时，由于不同的配置和设备类型，自动生成的 yaml 文件会有所不同，因此我们建议**不要更改文件的开头部分**，只需在末尾添加代码即可。
:::

- 您可以在[这里](https://esphome.io/components/uart)了解更多关于 **Uart Bus** 的信息
- 您可以在[这里](https://esphome.io/components/switch/)了解更多关于 **Switch Component** 的信息
- 您可以在[这里](https://esphome.io/components/select/)了解更多关于 **Select Component** 的信息

**步骤2.** 在仪表板上可视化

- 现在回到设备页面，选择离线语音识别设备
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/23.png" style={{width:1000, height:'auto'}}/></div>


- 点击 **ADD TO DASHBOARD**→**NEXT**→**ADD TO DASHBOARD**，然后返回 **OVERVIEW**，现在您的 Home Assistant 仪表板将如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/27.png" style={{width:600, height:'auto'}}/></div>


**步骤3.** 对传感器说唤醒词"hello pudding"，然后您将听到语音反馈并在 Home Assistant 上看到动作反馈。更多说明，您可以在本文底部的**资源**部分找到。
<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


## 资源

- **[PDF]** [离线语音命令](https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/VoiceCommends.pdf)

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