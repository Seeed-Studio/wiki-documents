---
title: Platform IO 与 Seeed Studio XIAO ESP32-C5
description: |
keywords:
  - xiao
  - esp32c5
  - platformio
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_start.webp
slug: /xiao_esp32c5_with_platformio
last_update:
  date: 12/18/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_started.png" style={{width:800, height:'auto'}}/></div>

## [PlatformIO](https://platformio.org/) 介绍

PlatformIO 是一个强大且高度可扩展的嵌入式系统开发生态系统。它无缝集成了对大量开发板和微控制器的支持，提供了无与伦比的灵活性。PlatformIO 的突出之处在于其卓越的可扩展性：即使您的特定开发板没有原生支持，其架构也允许直接的自定义开发板定义。

至关重要的是，PlatformIO 为熟悉 Arduino 的开发者架起了桥梁，通过简单地包含相关库，就能编译和部署 Arduino 风格的代码。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://platformio.org/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

## 为 XIAO ESP32-C5 使用 PlatformIO

接下来，我们将基于 PlatformIO 为 XIAO ESP32-C5 进行开发，帮助您探索 PlatformIO 开发工作流程。

### 硬件准备

您需要提前准备一个 **XIAO ESP32-C5**。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 下载 VS Code

根据您使用的系统下载 [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### 安装 PlatformIO

打开 VSCode，点击 Extensions，然后搜索 PlatformIO 并选择安装。安装完成后，重启 VSCode。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### 新建项目

- 打开 PIO Home 界面并选择 `New Project`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div><br/>

- Name：为您的项目命名
- Board：选择 **Seeed Studio XIAO ESP32-C5**
- Framework：选择 Ardunio
- Location：工程文件的路径可以设置为自定义路径或选择默认路径。
- 点击 **Finish** 并等待创建完成。然后，在工作区中打开项目文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_1.png" style={{width:800, height:'auto'}}/></div>

如果您想基于另一个 PlatformIO 项目进行修改，您也可以直接参考下面的配置。

- platfromio.ini

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
monitor_speed = 115200
```

### LED 闪烁示例

在这个 LED 闪烁示例中，我们将指导您使用 PlatformIO 编译和上传文件。

**步骤 1.** 复制示例代码

```cpp
#include <Arduino.h>

void setup()
{
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);
}

void loop()
{
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**步骤 2.** 构建项目

  点击 VS Code 底部状态栏中的 ***√*** 图标进行构建。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_2.png" style={{width:800, height:'auto'}}/></div><br/>

  如果构建成功，将显示如图所示。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 3.** 上传

  点击 VS Code 底部状态栏中的 **→** 图标进行上传。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_3_1.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 4.** 检查程序效果

如下图所示打开串口监视器。它将以 1 秒间隔打印 LED 开/关状态。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_4.png" style={{width:800, height:'auto'}}/></div><br/>

LED 将以相同的 1 秒间隔闪烁。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div><br/>

### 5 GHz Wi-Fi 连接示例

XIAO ESP-C5 支持 2.4 GHz 和 5 GHz 双频 Wi-Fi 6。此示例将演示连接到 5 GHz Wi-Fi 网络的效果。<br/>

将以下代码复制到您的 PlatformIO 项目中。
<details>

<summary> WiFi 连接参考代码 </summary>

```cpp
#include <Arduino.h>
#include <WiFi.h>

// ----------------------------------------------------------------
// Modify your WiFi SSID and Password here
// ----------------------------------------------------------------
const char* ssid     = "YOUR_WIFI_SSID";      // e.g., "MyHomeWiFi"
const char* password = "YOUR_WIFI_PASSWORD";  // e.g., "12345678"

void setup() {
  // Initialize serial communication at 115200 baud
  Serial.begin(115200);
  delay(5000); // Wait for serial to stabilize

  Serial.println("\nStarting ESP32 WiFi Connection Demo...");

  // 1. Set WiFi mode to Station (connect to a router as a client)
  WiFi.mode(WIFI_STA);

  // 2. Start connection
  Serial.printf("Connecting to SSID: %s ", ssid);
  WiFi.begin(ssid, password);

  // 3. Wait for connection to be established
  // This loop waits until the status becomes WL_CONNECTED
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  // ----------------------------------------------------------------
  // Connection successful, print detailed information
  // ----------------------------------------------------------------
  Serial.println("\n\n---------------------------------------");
  Serial.println("WiFi Connected Successfully!");
  Serial.println("---------------------------------------");

  // Print IP Address
  Serial.print("IPv4 Address:   ");
  Serial.println(WiFi.localIP());

  // Print Signal Strength (RSSI)
  // Unit is dBm, usually between -30 (Excellent) and -90 (Unusable)
  long rssi = WiFi.RSSI();
  Serial.print("Signal (RSSI):  ");
  Serial.print(rssi);
  Serial.println(" dBm");

  // Simple signal quality check based on RSSI value
  Serial.print("Signal Quality: ");
  if(rssi > -50) Serial.println("Excellent");
  else if(rssi > -60) Serial.println("Good");
  else if(rssi > -70) Serial.println("Fair");
  else if(rssi > -80) Serial.println("Weak");
  else Serial.println("Unstable/Very Poor");

  // Print MAC Address (Hardware ID)
  Serial.print("MAC Address:    ");
  Serial.println(WiFi.macAddress());

  // Print Gateway IP
  Serial.print("Gateway IP:     ");
  Serial.println(WiFi.gatewayIP());

  Serial.println("---------------------------------------");
}

void loop() {
  // In the main loop, we can periodically check the connection status
  // If the connection is lost, attempt to reconnect

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi Connection Lost! Reconnecting...");
    WiFi.disconnect();
    WiFi.reconnect();
    delay(5000); // Wait a bit before checking again to avoid spamming
  }

  // Your other application logic goes here
  // ...

  delay(10000); // Loop every 10 seconds
}
```

</details>

构建并上传代码<br/>

一旦 XIAO ESP32-C5 连接到 WiFi，串口监视器将打印连接的 WiFi 网络的信号强度等信息。<br/>
还可以清楚地看到 XIAO ESP32-C5 具有连接 5 GHz Wi-Fi 网络的强大能力。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_5_1.png" style={{width:600, height:'auto'}}/></div><br/>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

通过上面的两个示例，您应该已经掌握了 PlatformIO 的基本开发操作。我们期待看到您使用 XIAO ESP32-C5 创建更多有趣的项目！

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
