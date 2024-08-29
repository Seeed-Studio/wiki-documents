---
title: 连接到 Blynk
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Blynk/
slug: /cn/Wio-Terminal-Blynk
last_update:
  date: 3/07/2024
  author: jessie
---

# 将 Wio Terminal 连接到 Blynk

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" /></div>

这篇wiki介绍了如何使用Wio Terminal与 [**Blynk**](https://blynk.io/) 软件配合使用，通过Wi-Fi或蓝牙与硬件进行交互。这使您可以将Wio Terminal作为物联网设备的核心，并能够轻松地通过手机控制硬件！

- **什么是 Blynk**

[**Blynk**](https://blynk.io/) 是一个新的平台，可以让您快速构建用于控制和监控硬件项目的界面，您可以从iOS和Android设备上进行操作。下载Blynk应用后，您可以创建一个项目仪表板，并将按钮、滑块、图表和其他小部件排列在屏幕上。

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- 手机
  - 从应用商店下载Blynk应用

## 入门指南

### 安装 blynk 库

1. 访问 [**blynk-library**](https://github.com/blynkkk/blynk-library) 存储库并将整个存储库下载到本地驱动器。

2. 现在，可以将库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的 `blynk-library` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Wi-Fi 依赖

目前，Wio Terminal的Wi-Fi和蓝牙是 **两个独立的固件** ， **因此不能同时使用。**

>注: Wi-Fi和蓝牙同时工作的新固件正在开发中，将很快发布。

- 请按照 **[Wi-Fi Wiki 概览](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/)** 的说明将Wi-Fi固件上传到Wio Terminal。

- 请 **下载并安装所有相关 Wi-Fi 库**。

### 蓝牙依赖

- 请按照 [**Bluetooth  Wiki 概览**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) 的说明将蓝牙固件上传到Wio Terminal。

- 请 **下载并安装所有相关 Bluetooth 库**。

## Blynk 手机应用设置

一旦您下载了Blynk应用。

- 打开应用。

- 点击 **New Project**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.jpg" /></div>

- 填写 **Project Name**, 选择 **Arduino UNO** 作为设备，并选择 **WiFi** 或者 **Bluetooth** 作为连接类型。然后点击Create Project:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.1.png" /></div>

- 现在，您将 **收到一个发送到您在Blynk注册时使用的电子邮件的令牌** 。稍后在Arduino Sketches中需要使用该令牌。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/3.png" /></div>

## Wi-Fi 示例

这些示例使用Wi-Fi在Wio Terminal和Blynk应用之间进行通信：

### 简单的 Wi-Fi 连接

这个示例简单地连接到一个特定的 Wi-Fi 然后连接到 Blynk 服务器：

- 将发送到您的电子邮件的 **令牌** 替换为 `auth`。

- 替换网络的  `SSID` 和 `Password`。

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

一旦上传完成，从手机上打开 Blynk 应用，并点击右上角的  `play`  按钮以启动。您应该能够看到连接成功！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/wifi.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/4.png" /></div>

## 发送温度到 Blynk

这个示例演示了如何从 Wio Terminal 发送数据到 Blynk 服务器，并在移动应用中查看这些数据。

- 替换 Wi-Fi 的凭据和令牌。

- 温度数据被发送到  **Virtual Pin 0** (`V0`)。

- 将代码上传到 Wio Terminal。

:::注
    在这个示例中，温度值是随机生成的。
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

现在再次从您的手机上打开 Blynk 应用。

- 向左滑动以打开 Widget框，并选择  **Value Display**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-1.png" /></div>

- 点击按钮并将按钮配置为分配给 **Virtual Pin 0**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-3.png" /></div>

- 保存配置并点击右上角的播放按钮以启动！您可以在手机上看到温度值。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-4.png" /></div>

## 蓝牙示例

这些示例使用蓝牙在Wio Terminal 和Blynk应用之间进行通信：

### 简单蓝牙连接

这是使用Wio Terminal 的蓝牙与手机蓝牙连接的简单示例：

- 用你的 `auth` 令牌替换代码中的令牌。

- 上传到 Wio Terminal.

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

现在打开Blynk应用并进行以下配置：

- 向左滑动以打开 Widget 框，并向下滚动查找 **BLE**  Widget:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-1.jpg" /></div>

- 点击 **BLE widget**  并选择与名为 `Blynk` 的BLE设备连接：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-3.jpg" /></div>

- 一旦BLE连接成功，点击播放按钮开始！

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-4.jpg" /></div>

现在，Wio Terminal通过蓝牙与Blynk连接成功！

### 使用Blynk控制RGB灯带

该示例连接了一个RGB灯带到Wio Terminal，并使用Blynk控制显示的颜色！

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/RGB.mp4" type="video/mp4" />
  </video></div>

#### 安装Adafruit_NeoPixel库

1. 访问 [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel) 存储库，并将整个存储库下载到本地驱动器。

2. 现在，可以将库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择刚刚下载的 `Adafruit_NeoPixel` 文件。

---

- 根据你的环境配置 `PIN` 和 `NUMPIXELS` 。
- RGB值从Blynk应用读取，并分配给 **Virtual Pin 2(V2)**.
- 上传到 Wio Terminal.

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

打开Blynk应用，并进行以下配置：

- 向左滑动以打开 Widget 框，并向下滚动查找 **zeRGBa**  Widget：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-1.png" /></div>

- 点击zeRGBa Widget，并进行以下配置。设置为 **Merge** 输出，并分配给 **Virtual Pin 2 (V2)** ，数值范围为 **0 到 255**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-2.png" /></div>

- 确保BLE Widget先连接，并点击播放按钮开始！你可以通过在Blynk上拖动颜色来简单地改变LED灯带的RGB颜色。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-result.png" /></div>

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
