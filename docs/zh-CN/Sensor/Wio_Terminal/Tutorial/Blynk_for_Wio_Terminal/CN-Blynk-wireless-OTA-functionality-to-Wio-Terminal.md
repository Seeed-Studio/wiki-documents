---
title: 适用于Blynk的WT OTA
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
slug: /cn/Blynk-wireless-OTA-functionality-to-Wio-Terminal
last_update:
  date: 3/07/2024
  author: jessie
---

# 使用Blynk的无线OTA功能将Wio Terminal与Blynk平台集成

在这篇文章中，我们将描述如何使用Blynk的无线OTA功能将Wio Terminal与Blynk平台集成。

- **什么是 Blynk**

[**Blynk**](https://blynk.io/) 是一个新的平台，可以让您快速构建用于控制和监控硬件项目的界面，您可以从iOS和Android设备上进行操作。下载Blynk应用后，您可以创建一个项目仪表板，并将按钮、滑块、图表和其他小部件排列在屏幕上。

## 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- 手机
- 从应用商店下载Blynk应用
- WiFi连接

## 从应用商店下载Blynk应用

进入 [**Blynk 注册并登录**](https://blynk.cloud/dashboard/login) ，进入模板界面，创建一个新的模板。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png)

然后编辑名称，选择设备和连接模式，本例中为 "Seeed Wio Terminal" 和 "WiFi" 。
![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg)

记下BLYNK_TEMPLATE_ID和BLYNK_DEVICE_NAME。
在本示例中，它们分别为：

```C++
#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"
#define BLYNK_DEVICE_NAME "WioTerminal"
```

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png)

然后点击右上角的保存按钮。

## 设置Arduino IDE并调整代码

接下来，下载并在Arduino IDE中打开示例代码。

[**Edgent_Wio_Terminal_0-2.zip**](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg)

在开发板选项中选择Wio Terminal设备 ( [**参见 Wio Terminal wiki 页面**](https://blynk.cloud/dashboard/login) 了解如何在Arduino IDE中添加Wio Terminal）。

添加 [**blynk库**](https://github.com/blynkkk/blynk-library)

在Arduino IDE库管理器中搜索并添加以下库文件：

- Seeed Arduino rpcunified
- Seeed Arduino rpcWiFi
- Seeed Arduino SFUD
- Seeed Arduino FS
- Seeed Arduino mbedtls
- ArduinoOTA
- ArduinoHttpClient

在代码的第16行和第17行中，填入系统刚生成的ID和NAME：

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg)

然后将代码编译并上传到Wio Terminal（如果在编译过程中缺少库文件，请在库管理器中搜索并下载它）。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png)

程序成功上传后，打开串口监视器，并将波特率设置为115200。等待5-10秒钟。串口显示以下信息：（如果串口监视器没有响应，请尝试重新连接数据线并重新打开串口监视器。）

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg)

## 移动应用程序设置

下载Blynk IoT应用程序：

Android: <https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US>

IOS: <https://apps.apple.com/us/app/blynk-iot/id1559317868>

登录到主屏幕

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png)

在APP配置成功后，串口监视器将提示网络连接状态。当显示'Ready'时，表示WiFi连接成功。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg)

现在是时候尝试OTA功能了。

## OTA：更新BLYNK_FIRMWARE_VERSION

您可以在"edgent_wio_terminal_0-2"中编写个人程序，其中包含"void setup()"和"void loop()"。在本例中，为了演示的目的，我们将直接更改程序的版本信息。如果程序成功上传，版本信息将发生变化。
我们将BLYNK_FIRMWARE_VERSION从"0.2.0"更改为"0.2.11"。
![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg)

然后点击"Export compiled Binary"并等待构建完成。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png)

然后打开文件夹，进入BIN文件夹。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg)

打开Blynk Air并在右上角选择"New Shipping"。在此屏幕上向下滑动，找到"Firmware"选项。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg)

在这里选择刚刚生成的bin文件，您会看到软件版本已经更改为我们刚刚设置的"0.2.11"。然后点击右下角的"Start Shipping"按钮开始无线上传程序。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg)

您可以在网页或串口监视器上实时查看上传情况。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg)

如果您的串口监视器没有输出，请等待大约2分钟，然后尝试重新启动设备并再次打开串口监视器，您将实时看到上传情况。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg)

重新启动设备，您会看到软件版本在此处已经更改为我们刚刚修改的"0.2.11"。

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg)

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
