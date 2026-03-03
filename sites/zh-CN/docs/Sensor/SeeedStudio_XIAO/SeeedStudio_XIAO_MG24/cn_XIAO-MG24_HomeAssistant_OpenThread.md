---
description: 使用基于 OpenThread 网络协议的 Matter 连接到 HA
title: Seeed Studio XIAO MG24 使用 Matter 连接 HomeAssistant
keywords:
- MG24
- xiao
- HomeAssistant
- Matter
- OpenThread
- Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E
image: https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki-XIAO-MG24-HA-Matter.webp
slug: /cn/xiao_mg24_ha_openthread
sidebar_position: 8
last_update:
  date: 05/5/2025
  author: Jason
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki XIAO MG24-HA-Matter.png" style={{width:900, height:'auto'}}/></div>

## 介绍

在本教程中，我们将使用 Sonoff Zigbee 3.0 USB Dongle 来访问 HomeAssistant，从而充当边界路由器，而 Seeed Studio XIAO MG24 将充当使用 Thread 网络的 Matter 协议设备。为了您的方便，我们将通过以下三个问题来带您更好地参与这个过程。***感谢作者 [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) 提供的 Wiki 思路***

### 什么是 Matter？

Matter（以前称为 CHIP）是由连接标准联盟（CSA）开发的通用应用层标准。

- 通过 IP 网络（Wi-Fi/以太网/Thread）实现跨厂商互操作性
- 标准化设备类型（例如，灯具、门锁、恒温器）
- 使用二维码/NFC 进行安全配网
- 使用分布式合规账本（DCL）进行端到端加密

### 什么是 OpenThread？

OpenThread 是 Thread 网络协议的开源实现。它使用 IEEE 802.15.4 无线电技术为物联网设备创建低功耗、安全的网状网络。主要特性：

- 内置 IPv6 支持（6LoWPAN）
- 自组织网络拓扑
- 所有通信的 AES-128 加密
- 兼容小到灯泡或传感器的设备

### Matter 和 Thread 之间的关系是什么？

***感谢作者[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) 对这一点的非常详细的解释，引用如下！***

在对 Matter 和 Thread 的简短介绍之后，您现在了解到 Thread 和 Matter 服务于不同的目的，并在技术栈的不同层次上运行。总结一下：

Thread：

- Thread 是一种为联网家居设备设计的低功耗无线网状网络协议。它为设备之间以及设备与互联网之间的通信提供了可靠和安全的方式。
- Thread 创建了一个本地网络，即使互联网断开，设备也能相互通信。

Matter：

- Matter 是一个应用层协议，位于 Thread、Wi-Fi 和以太网等网络协议之上。它旨在通过确保不同制造商的设备能够无缝协作来简化和统一智能家居生态系统。
- Matter 定义了设备在应用层如何通信和交互，专注于互操作性、安全性和易用性。

Thread 和 Matter 之间的连接：

- Matter 可以使用 Thread 作为其底层网络协议之一。这意味着使用 Matter 协议的设备可以通过 Thread 网络进行通信。
- Matter 和 Thread 的结合允许构建一个强大、安全且可互操作的智能家居生态系统，其中设备可以在本地高效地通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## 硬件概述

<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
        <th>XIAO MG24</th>
        <th>Grove - 温湿度传感器 (SHT31)</th>
        <th>Seeed Studio Grove Base for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Dongle.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/XIAO_MG24.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/SHT31.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

## 软件概述

### 刷写 Sonoff ZBDongle-E 适配器

Sonoff ZBDongle-E 适配器出厂时搭载的固件只允许与 Zigbee 设备通信。要使其能够与 Thread 无线协议配合工作，您必须刷写新的固件。您可以直接在 Chrome 浏览器中通过 https://darkxst.github.io/silabs-firmware-builder 刷新适配器的固件。将适配器插入计算机后，点击"Connect"并选择"OpenThread"固件来更改固件。
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/1.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/2.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/3.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Matter 温湿度传感器设备

如果这是您第一次使用 XIAO MG24 作为 Matter 设备，您可以参考这个[wiki](https://wiki.seeedstudio.com/cn/xiao_mg24_matter/)了解如何设置它。

- **步骤 1.** 从 Github 下载[库文件](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor)。

- **步骤 2.** 参考[如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库文件。

- **步骤 3.** 重启 Arduino IDE。打开一个新的草图，并将以下代码复制到新草图中。

```cpp
#include <Matter.h>
#include <MatterTemperature.h>
#include <MatterHumidity.h>
#include "ArduinoLowPower.h"
#include "SHT31.h"
#include <Wire.h>


SHT31 sht31 = SHT31();

float humidity;
float temperature;

MatterHumidity matter_humidity_sensor;
MatterTemperature matter_temp_sensor;


void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
  
  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  Matter.begin();
  matter_temp_sensor.begin();
  matter_humidity_sensor.begin();
  matter_temp_sensor.set_device_name("XIAO_MG24");
  matter_temp_sensor.set_vendor_name("Seeed_Studio");
  matter_temp_sensor.set_product_name("Matter_SHT31");

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }
  Serial.println("Matter device is commissioned, waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Device is connected to Thread network");
  Serial.println("Waiting for Matter device discovery...");
  while (!matter_temp_sensor.is_online() || !matter_humidity_sensor.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop() {

  delay(1000);

  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  matter_temp_sensor.set_measured_value_celsius(temperature);
  matter_humidity_sensor.set_measured_value(humidity);


  LowPower.sleep(600000);
}
```

### HomeAssistant 配置

**设置 1 .Add-on Store**

您需要根据图片下载两个插件。

<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

**设置 2 . Thread 配置**

添加 OpenThread Border Router 插件。此插件允许您创建或加入 Thread 网络，并将 Home Assistant 转换为 Thread Border Router！
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>
在Thread服务的配置中选择相应的网络。
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread3.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread4.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### 在移动设备上配置 Home Assistant

要将 Matter 设备添加到 Home Assistant，您需要在智能手机上安装 Home Assistant 应用程序。智能手机充当 Matter 的"协调器"，将新设备添加到 Matter 网络并进行安全设置，而 HomeAssistant Green 充当 Matter 的控制器，管理连接到 Matter 网络的所有设备。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone2.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### 添加 Matter 设备

要将新的 Matter 设备集成到您的家庭自动化系统中，请选择"添加 Matter 设备"并扫描设备附带的二维码。本教程演示如何使用 CHIP 网站生成二维码，基于 XIAO MG24 在串行监视器中提供的 URL。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone7.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone6.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone8.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone9.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### HA 面板查看温度和湿度

一旦二维码成功添加，我们就可以在 HA 面板上看到我们的温湿度传感器了！

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result3.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
</table>

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
