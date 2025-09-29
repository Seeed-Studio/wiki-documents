---
description: 如何安装 Arduino 库
title: 如何安装 Arduino 库

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_to_install_Arduino_Library
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---


:::note

    本教程基于 Arduino 1.6.9。
:::

在这里我们将向您展示如何安装 Arduino 库。您应该注意到我们几乎所有的库都存储在 [Github](https://github.com/Seeed-Studio) 上。当产品需要库时，我们会提供 Arduino 库。对于一些简单的产品，不需要编写库，例如 Grove - Button。

## 下载库

有两种方式下载 Arduino 库。

### 1.在产品页面下载
通常，如果产品需要库，您会在下方找到一个下载库按钮栏，如下所示：

[![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/library.png)](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip)

点击按钮开始下载。几秒钟后您将获得一个包。

### 2.从 github 下载

如果您需要从 Github 页面下载，那么您可以点击 **Clone or download >Download ZIP** 按钮来获取库包。

![enter image description here](https://files.seeedstudio.com/wiki/Tutorial_Add_Arduino_Library/images/github_download.png)

## 添加库

同样有两种方式将库添加到 Arduino IDE。

### 1.添加 ZIP 库

由于您已经下载了 zip 库，打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。

![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png)

选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png)

### 2.手动添加库文件夹
有时您无法正确添加 ZIP 库，因为 Zip 库的根文件夹缺少 .cpp 或 .h 文件，Arduino 无法识别。然后您可以解压 zip 文件并将库文件夹复制到以下路径 **...\Arduino\libraries**。**....\** 是您设置 Arduino 的路径。在我的情况下是 **D:\Workwork\Software\Arduino\libraries**。

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png)

### 检查
然后让我们检查库是否安装正确。

当您成功添加库时，示例中会有一个演示。在这种情况下，点击 **File > Example > OLED_Display_96x96-master > OLED_Hello_World** 打开一个示例，点击验证按钮，如果没有错误，恭喜，库已完美安装。


![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/successlly.png)

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