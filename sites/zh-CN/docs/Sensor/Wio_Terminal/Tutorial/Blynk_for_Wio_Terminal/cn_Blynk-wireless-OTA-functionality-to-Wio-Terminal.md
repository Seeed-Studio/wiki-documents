---
title: Wio Terminal 的 Blynk OTA 功能
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
slug: /cn/Blynk-wireless-OTA-functionality-to-Wio-Terminal
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 在 Wio Terminal 上使用 Blynk 无线 OTA 功能

在本教程中，我们将介绍如何在 Wio Terminal 上使用 Blynk 无线 OTA 功能。

- **什么是 Blynk**

[**Blynk**](https://blynk.io/) 是一个新平台，允许您快速构建界面，从您的 iOS 和 Android 设备控制和监控您的硬件项目。下载 Blynk 应用程序后，您可以创建项目仪表板，并在屏幕上排列按钮、滑块、图表和其他小部件。

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- 手机
- 从应用商店下载 Blynk 应用
- WiFi

## 准备工作

前往 [**Blynk 注册并登录**](https://blynk.cloud/dashboard/login)，进入模板界面，创建一个新模板。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png)

然后编辑名称并选择设备和连接模式，在本例中选择"Seeed Wio Terminal"和"WiFi"。
![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg)

记下 BLYNK_TEMPLATE_ID 和 BLYNK_DEVICE_NAME。
在示例中，它们是：

```cpp
#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"
#define BLYNK_DEVICE_NAME "WioTerminal"
```

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png)

然后点击右上角的保存按钮。

## 设置 Arduino IDE 并调整代码

接下来，在 Arduino IDE 中下载并打开示例代码。

[**Edgent_Wio_Terminal_0-2.zip**](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg)

从开发板选项中选择 Wio Terminal 设备（[**参见 Wio Terminal 教程页面**](https://blynk.cloud/dashboard/login) 了解如何在 Arduino IDE 中添加 Wio Terminal）。

添加 [**blynk-library**](https://github.com/blynkkk/blynk-library)

在 Arduino IDE 库管理器中搜索并添加以下库文件：

- Seeed Arduino rpcunified
- Seeed Arduino rpcWiFi
- Seeed Arduino SFUD
- Seeed Arduino FS
- Seeed Arduino mbedtls
- ArduinoOTA
- ArduinoHttpClient

在代码的第 16 和 17 行，填入系统刚刚生成的 ID 和 NAME：

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg)

然后编译并将代码上传到 Wio Terminal（如果编译过程中缺少库文件，请在库管理器中搜索并下载）

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png)

程序成功上传后，打开串口监视器并将波特率设置为 115200。等待 5-10 秒。串口显示以下信息：（如果串口监视器没有响应，请尝试重新连接数据线并重新打开串口监视器。）

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg)

## 移动应用设置

下载 Blynk IoT 应用：

Android: [https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US](https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US)

IOS: [https://apps.apple.com/us/app/blynk-iot/id1559317868](https://apps.apple.com/us/app/blynk-iot/id1559317868)

登录到主屏幕

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png)

应用配置成功后，串口监视器将提示网络连接状态。当显示"Ready"时，WiFi 连接成功。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg)

现在是时候尝试 OTA 功能了。

## OTA：更新 BLYNK_FIRMWARE_VERSION

您可以在"edgent_wio_terminal_0-2"中编写个人程序，包含"void setup()"和"void loop()"。在这个示例中，为了演示方便，我们将直接更改程序的版本信息。如果程序成功上传，版本信息将会改变。
我们将 BLYNK_FIRMWARE_VERSION 从"0.2.0"更改为"0.2.11"

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg)

然后点击"Export compiled Binary"并等待构建完成。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png)

然后打开文件夹并找到 BIN 文件。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg)

打开 Blynk Air 并在右上角选择"New Shipping"。在此屏幕上向下点击找到"Firmware"选项。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg)

在这里选择您刚刚生成的 bin 文件，您将看到软件版本已更改为我们刚刚设置的"0.2.11"。然后点击右下角的"Start Shipping"按钮开始无线上传程序。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg)

您可以在网页上或串口监视器上看到实时上传。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg)

等待大约 2 分钟，如果您的串口监视器没有输出，请尝试重启设备并再次打开串口监视器，您将看到实时上传。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg)

重启设备，您可以看到这里的软件版本已经更改为我们刚刚更改的"0.2.11"。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg)

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