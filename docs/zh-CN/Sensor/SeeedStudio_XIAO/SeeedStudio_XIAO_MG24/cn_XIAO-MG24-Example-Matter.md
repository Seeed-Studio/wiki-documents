---
description: XIAO MG24 示例 - Matter
title: Seeed Studio XIAO MG24 示例 - Matter
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /cn/xiao_mg24_matter
sidebar_position: 2
last_update:
  date: 11/07/2024
  author: Spencer
---

## 介绍

Matter 是一个**开源、统一的标准**，用于智能家居技术，促进设备和生态系统之间的互操作性。由连接标准联盟（CSA）开发，它使来自不同制造商的设备能够无缝通信，而无需互联网连接。Matter 支持与 Apple HomeKit、Google Home 和 Amazon Alexa 等平台的原生兼容性，使在智能家居设置中集成设备变得更加容易。要更深入地了解 Matter，请参考[官方 Matter 文档](https://project-chip.github.io/connectedhomeip-doc/index.html)。

> 在 2024 年[^1]，Silicon Labs 和 Arduino 联手降低 Matter 采用的障碍，提供了一个开发路径，简化了在 Arduino 生态系统中使用 Matter。这种合作旨在使 Matter 开发更加易于访问，帮助 Arduino 开发者克服典型挑战并无缝采用 Matter。

[^1]: [Silicon Labs and Arduino Partner to Democratize Matter - Feb 6, 2024](https://news.silabs.com/2024-02-06-Silicon-Labs-and-Arduino-Partner-to-Democratize-Matter)

Matter 在本地网络上高效运行，提供可靠、低延迟的通信，无需互联网访问。这一特性显著提高了安全性和设备性能。

本文档将指导您完成在 XIAO MG24 上使用 Arduino 开发 Matter 应用程序的步骤。

## 先决条件

要开始在 XIAO MG24 上开发 Matter 应用程序，请确保以下硬件和软件组件已准备就绪。

### 硬件

- **Seeed Studio XIAO MG24** 开发板。
- **支持的 Matter 集线器**（例如，Apple HomePod mini）以连接到 Matter 网络。
- **Matter 控制器**（例如，Apple HomeKit App）以管理和与您的 Matter 设备交互。

下表[^2]提供了各种生态系统中 Matter 兼容集线器的示例：

| 制造商 / 生态系统 | 设备                       |
| ---------------- | -------------------------- |
| Google Home      | Nest Hub Gen2              |
| Apple HomeKit    | HomePod Gen2, HomePod mini |
| Amazon Alexa     | Echo Gen4                  |
| Raspberry Pi OTBR| Raspberry Pi               |

默认情况下，假设您至少有一个 [Matter Hub](https://en.wikipedia.org/wiki/Matter_(standard)#Supported_ecosystems_and_hubs) 和一个 Matter 控制器（例如，安装了 HomeKit 的 iPhone）准备用于测试。

[^2]: [README - Arduino Matter library](https://github.com/SiliconLabs/arduino/blob/main/libraries/Matter/readme.md)

### 软件

所需软件包括 **Arduino IDE 和 Silicon Labs 的 Arduino Core**：

- 如果尚未安装，请下载并设置 [Silicon Labs Arduino Core](https://github.com/SiliconLabs/arduino) 以与 XIAO MG24 兼容。
- 有关详细的设置说明，请参考 [入门指南](/cn/xiao_mg24_getting_started/#add-board)。

确保选择 Matter 协议栈：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-arduino-tool-option.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

## Matter 灯泡示例快速入门

[Matter 灯泡示例](https://github.com/Silabs/arduino-matter/tree/main/examples/MatterLightBulb) 演示了一个简单的 Matter 应用程序，允许通过 Matter 网络控制 `内置 LED`。此示例为初次接触 XIAO MG24 上 Matter 集成的开发者提供了一个实用的起点。

要在 Arduino IDE 中访问该示例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-bulb-example.png" style={{width:480, height:'auto', "border-radius": '12.8px'}}/></div>

为了方便起见，下面提供了对示例代码中设备名称的修改，以便进行个性化设置。

```cpp
/*
   Matter lightbulb example

   The example shows how to create a simple on/off lightbulb with the Arduino Matter API.

   The example lets users control the onboard LED through Matter.
   The device has to be commissioned to a Matter hub first.

   Author: Tamas Jozsi (Silicon Labs)
   Modified by: Spencer Y (Seeed Studio)
 */
#include <Matter.h>
#include <MatterLightbulb.h>

MatterLightbulb matter_bulb;

void setup()
{
  Serial.begin(115200);
  Matter.begin();
  matter_bulb.begin();

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);

  Serial.println("Matter lightbulb");

  matter_bulb.set_device_name("XIAO MG24 bulb");    // Customize the default device name
  matter_bulb.set_vendor_name("Seeed Studio");      // Set the vendor name
  matter_bulb.set_product_name("Seeed Matter Lightbulb"); // Define the product name

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }

  Serial.println("Waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Connected to Thread network");

  Serial.println("Waiting for Matter device discovery...");
  while (!matter_bulb.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop()
{
  static bool matter_lightbulb_last_state = false;
  bool matter_lightbulb_current_state = matter_bulb.get_onoff();

  // Turn on the LED if the state is ON and the previous state was OFF
  if (matter_lightbulb_current_state && !matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
    Serial.println("Bulb ON");
  }

  // Turn off the LED if the state is OFF and the previous state was ON
  if (!matter_lightbulb_current_state && matter_lightbulb_last_state) {
    matter_lightbulb_last_state = matter_lightbulb_current_state;
    digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
    Serial.println("Bulb OFF");
  }
}
```

### 刷写固件

1. 将代码复制到 Arduino IDE 中并上传到 XIAO MG24 开发板。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-lightbulb-flash.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>
2. 刷写固件后，按下 `RESET` 按钮或重新连接 XIAO MG24 以重启开发板。
3. 打开串口监视器确认设置。您应该看到类似这样的输出：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-url.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### 配网用二维码

串口监视器将显示一个用于生成二维码的 URL，这是设备配网所必需的。复制该 URL，将其粘贴到浏览器中，然后使用您的 Matter 控制器（例如 HomeKit）扫描生成的二维码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-qr-scan.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

### 测试设备

扫描二维码后，Matter 控制器（HomeKit）将提示您确认设备的身份。确认后，设备将在应用程序中可见。您现在可以控制 XIAO MG24 的内置 LED，并直接从应用程序界面测试其响应性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/matter-device-online.png" style={{width:480, height: 'auto', "border-radius": '12.8px'}}/></div>

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://youtube.com/embed/tmCpIWuRojQ"
  title="MG24 Matter Lightbulb Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

## 参考资料与资源

如果您是 Matter 的新手，以下资源提供了在 Matter 生态系统中工作的基础知识和开发支持：

- **[快速入门指南](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：学习 Matter 基础知识的理想起点，涵盖生态系统的基本概念和组件。
- **[Matter 开发者之旅](https://www.silabs.com/wireless/matter/matter-developer-journey)**：Matter 开发过程的综合指南，包括有效实施所需的工具、资源和最佳实践。
- **[Matter 规范](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matter 协议及其组件的技术规范。这是了解协议功能和操作细节的主要资源。
- **[设备数据模型 - Google Home 开发者](https://developers.home.google.com/matter/primer/device-data-model)**：对设备数据模型的深入解释，该模型标准化了设备功能和能力在 Matter 生态系统中的表示方式。
- **[Matter 开发框架概述](/cn/matter_development_framework)**：专门为 XIAO ESP32C6 的 Matter 开发框架量身定制的指南，为 Matter 设备开发提供了另一种方法。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
