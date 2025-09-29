---
description: 使用从 Seeed Studio Github 下载的演示程序指南
title: 使用 Seeed Studio Github 的演示程序

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Guide_to_use_demos_downloaded_from_Seeed-s_Github
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

经常需要使用 Seeeduino Github 上的演示程序，对于新手来说，要顺利运行演示程序可能会有一些困难。
因此我们想向您展示一个标准流程来快速运行演示程序。

## 开始使用

1. 您可以在 [Seeed Studio 的 Github](https://github.com/Seeed-Studio) 网站上下载示例代码和库文件或头文件。

2. 在 Github 上点击名为"Download Zip"的按钮。

3. 解压下载的 ZIP 文件。

4. 在解压后的文件名中删除两次"-master"。

5. 将解压后的文件夹 _xxx_ 复制到您的库文件夹中（默认情况下，它与 Sketchbook 位置相同，可以通过点击 File > Preference 找到）。

6. 在 Windows 下，它通常被称为"My Documents\Arduino\libraries"。对于 Mac 用户，它通常被称为"Documents/Arduino/libraries"。在 Linux 上，它将是您 sketchbook 中的"libraries"文件夹。

7. 通过下载的 ZIP 文件添加 ZIP 库（首先删除"-master"）。

![](https://files.seeedstudio.com/wiki/Guide_to_use_demos_downloaded_from_Seeed-s_Github/img/Add_ZIP_library.png)

8. 在子目录 _**example**_ 中打开 _**.ino**_ 文件
9. 编译或上传演示程序到您的主控制器板。

**提示：** 如果 Arduino 提示找不到 _foo.h_ 文件，请始终添加压缩库文件（在大多数情况下是头文件），格式为 **zip**。

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