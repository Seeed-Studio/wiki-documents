---
title: 连接到 Blynk
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-Blynk/
slug: /cn/Wio-Terminal-Blynk
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 将 Wio Terminal 连接到 Blynk

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" /></div>

本教程介绍如何将 Wio Terminal 与 [**Blynk**](https://blynk.io/) 软件配合使用，通过 Wi-Fi 或蓝牙进行交互。这使您能够将 Wio Terminal 用作物联网设备的核心，并能够非常轻松地通过手机控制硬件！

- **什么是 Blynk**

[**Blynk**](https://blynk.io/) 是一个新平台，允许您快速构建界面，从您的 iOS 和 Android 设备控制和监控您的硬件项目。下载 Blynk 应用程序后，您可以创建项目仪表板，并在屏幕上排列按钮、滑块、图表和其他小部件

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- 手机
  - 从应用商店下载 Blynk 应用程序

## 入门指南

### 安装 blynk-library

1. 访问 [**blynk-library**](https://github.com/blynkkk/blynk-library) 仓库，将整个仓库下载到您的本地驱动器。

2. 现在，可以将库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `blynk-library` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Wi-Fi 依赖项

目前，Wi-Fi 和蓝牙是 Wio Terminal 的**两个独立固件**，因此**不能同时使用**。

>注意：Wi-Fi 和蓝牙协同工作的新固件正在开发中，将很快发布。

- 请按照 **[Wi-Fi 概述教程](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/)** 将 Wi-Fi 固件上传到 Wio Terminal。

- 请同时**下载并安装所有依赖的 Wi-Fi 库**。

### 蓝牙依赖项

- 请按照 [**蓝牙概述教程**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Bluetooth-Overview/) 将蓝牙固件上传到 Wio Terminal。

- 请同时**下载并安装所有依赖的蓝牙库**。

## Blynk 手机应用程序设置

下载 Blynk 应用程序后。

- 打开应用程序。

- 点击 **New Project**：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.jpg" /></div>

- 填写您的**项目名称**，选择 **Arduino UNO** 作为设备，选择 **WiFi** 或 **Bluetooth** 作为连接类型。然后点击 Create Project：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.1.png" /></div>

- 现在，您将**收到一个发送到您在 Blynk 注册的邮箱的令牌**。这在后续的 Arduino 代码中是必需的。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/3.png" /></div>

## Wi-Fi 示例

这些示例使用 Wi-Fi 在 Wio Terminal 和 Blynk 应用程序之间进行通信：

### 简单 Wi-Fi 连接

此示例简单地连接到特定的 Wi-Fi，然后连接到 Blynk 服务器：

- 将发送到您邮箱的 **token** 替换为 `auth`。

- 替换您网络的 `SSID` 和 `Password`。

- 将代码上传到 Wio Terminal。

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "SSID";
char pass[] = "Password";

void setup()
{
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
}

void loop()
{
  Blynk.run();
}
```

上传完成后，从手机打开 Blynk 应用程序，点击右上角的 `播放` 按钮进入实时模式。您应该能够看到它已连接！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/wifi.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/4.png" /></div>

## 向 Blynk 发送温度数据

此示例演示了如何从 Wio Terminal 向 Blynk 服务器发送数据，然后可以在移动应用程序上查看这些数据。

- 替换 WiFi 凭据和 token。

- 温度数据发送到 **虚拟引脚 0** (`V0`)。

- 上传到 Wio Terminal。

:::note
    在此示例中，温度值是随机生成的。
:::

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// Your WiFi credentials.
const char* ssid = "SSID";
const char* pass = "Password";

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

BlynkTimer timer;

void sendTemperature() {
  // Generate random temperature value 10.0 to 30.0 (for example)
  float t = float(random(100, 300)) / 10;
  // Format: 1 decimal place, add ℃
  String str = String(t, 1) + "℃";
  // Send it to the server
  Blynk.virtualWrite(V0, str);
}


void setup() {
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, sendTemperature);
}

void loop() {
  Blynk.run();
  timer.run();
}
```

现在再次从手机打开 Blynk 应用程序。

- 向左滑动打开组件盒并选择 **Value Display**：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-1.png" /></div>

- 点击按钮并配置按钮分配到 **虚拟引脚 0**：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-3.png" /></div>

- 保存配置并点击右上角播放按钮进入实时模式！您可以在手机上看到温度值。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-4.png" /></div>

## 蓝牙示例

这些示例使用蓝牙在 Wio Terminal 和 Blynk 应用程序之间进行通信：

### 简单蓝牙连接

这是使用 Wio Terminal 的蓝牙与手机蓝牙连接的简单示例：

- 将您的 token 替换为 `auth`。

- 上传到 Wio Terminal。

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

void setup()
{
  // Debug console
  Serial.begin(9600);
  Serial.println("Waiting for connections...");
  Blynk.setDeviceName("Blynk");
  Blynk.begin(auth);
}

void loop()
{
  Blynk.run();
}
```

现在打开 Blynk 应用程序并按如下方式配置：

- 向左滑动打开组件盒，向下滚动找到 **BLE** 组件：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-1.jpg" /></div>

- 点击 **BLE 组件** 并选择连接名为 `Blynk` 的 BLE 设备：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-3.jpg" /></div>

- BLE 连接后，点击播放按钮进入实时模式！

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-4.jpg" /></div>

现在，Wio Terminal 已通过蓝牙与 Blynk 连接！

### 使用 Blynk 控制 RGB 灯带

此示例将 RGB 灯带连接到 Wio Terminal，并使用 Blynk 控制要显示的颜色！

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/RGB.mp4" type="video/mp4" />
  </video></div>

#### 安装 Adafruit_NeoPixel 库

1. 访问 [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel) 仓库并将整个仓库下载到本地驱动器。

2. 现在，可以将库安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择刚刚下载的 `Adafruit_NeoPixel` 文件。

---

- 根据您的环境配置 `PIN` 和 `NUMPIXELS`。
- RGB 值从 Blynk 应用程序读取并分配给 **虚拟引脚 2(V2)**。
- 上传到 Wio Terminal。

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <Adafruit_NeoPixel.h>

#include <TFT_eSPI.h> // Hardware-specific library
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library

#define PIN 0
#define NUMPIXELS 20
#define BLYNK_PRINT Serial
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

BLYNK_WRITE(V2)
{
  int R = param[0].asInt();
  int G = param[1].asInt();
  int B = param[2].asInt();
  tft.fillScreen(tft.color565(R, G, B));
  for (int i = 0; i < NUMPIXELS; i++) {
    pixels.setPixelColor(i, pixels.Color(R, G, B));
    pixels.show();
  }
}

void setup() {
  // Debug console
  Serial.begin(9600);
  Serial.println("Waiting for connections...");
  Blynk.setDeviceName("Blynk");

  Blynk.begin(auth);
  
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  pixels.begin();
}

void loop() {
  Blynk.run();
}
```

打开 Blynk 应用，并按以下步骤配置：

- 向左滑动进入组件盒，向下滚动找到 **zeRGBa** 组件：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-1.png" /></div>

- 点击 zeRGBa 组件并按以下方式配置。设置为 **Merge** 输出，分配到 **虚拟引脚 2 (V2)**，并设置数值范围从 **0 到 255**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-2.png" /></div>

- 确保 BLE 组件首先连接，然后点击播放按钮开始运行！您可以通过在 Blynk 上拖动颜色来简单地改变 LED 灯带的 RGB 颜色。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-result.png" /></div>

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