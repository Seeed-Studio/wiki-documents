---
description: 使用 Edge Impulse 训练并部署您自己的 AI 模型
title: 使用 Edge Impulse 训练并部署您自己的 AI 模型
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/edge-impulse-vision-ai
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


# 使用 Edge Impulse 快速训练 Grove Vision AI 模型

[Grove - Vision AI 模块](https://wiki.seeedstudio.com/cn/Grove-Vision-AI-Module) 是一个拇指大小的开发板，基于 Himax HX6537-A 处理器，配备了 200 万像素 OV2640 摄像头、麦克风、三轴加速度计和三轴陀螺仪。它提供 32 MB SPI 闪存存储，预装了用于人脸识别和人员检测的机器学习算法，同时支持自定义模型。该模块兼容 XIAO 生态系统和 Arduino，非常适合用于 AI 驱动的摄像头项目入门！

该模块完全支持 Edge Impulse，这意味着您可以直接从 Edge Impulse Studio 采集摄像头的原始数据、构建模型并将训练好的机器学习模型部署到模块，无需编程。Grove - Vision AI 模块可直接从 [Seeed Studio Bazaar](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html) 购买。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/1.jpg"/></div>

此开发板的 Edge Impulse 固件是开源的，托管在 GitHub 上：[edgeimpulse/firmware-seeed-vision-ai-internal](https://github.com/edgeimpulse/firmware-seeed-vision-ai-internal/tree/edge-impulse-firmware)

快速链接访问：

- 固件源代码：[GitHub 仓库](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)
- 预编译固件：[seeed-grove-vision-ai.zip](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)

## 安装依赖项

要在 Edge Impulse 中设置此开发板，您需要安装以下软件：

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)。
2. 在 Linux 上：
   - GNU Screen：例如通过 `sudo apt install screen` 安装。
3. 下载最新的 [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)。

:::tip
**安装 Edge Impulse CLI 时遇到问题？**
请参阅 [安装和故障排除指南](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)。
:::

## 连接到 Edge Impulse

安装完所有软件后，现在可以将开发板连接到 Edge Impulse。

### 步骤 1. 更新 BL702 芯片固件

BL702 是 USB-UART 芯片，用于实现 PC 与 Himax 芯片之间的通信。您需要更新此固件以确保 Edge Impulse 固件正常工作。

1. 下载以下链接中的最新 BootLoader 文件。BootLoader 的名称通常为 `tinyuf2-grove_vision_ai_vx.x.x.bin`。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. 按住开发板上的 **Boot** 按钮，同时通过 USB Type-C 数据线将开发板连接到 PC。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/2.jpg" /></div>

3. 打开之前安装的 Bouffalo Lab Dev Cube 软件，选择 **BL702/704/706**，然后点击 **Finish**。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/3.png" /></div>

4. 转到 **MCU** 标签。在 **Image file** 下，点击 **Browse** 并选择您刚刚下载的固件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/4.png" /></div>

5. 点击 **Refresh**，选择与连接的开发板相关的 **Port**，将 **Chip Erase** 设置为 **True**，点击 **Open UART**，然后点击 **Create & Download** 并等待过程完成。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/5.png"/></div>

如果一切顺利，您将看到输出为 **All Success**。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/6.png"/></div>

:::note
如果烧录过程中出现错误，请多次点击 **Create & Download**，直到看到 **All Success** 消息。
:::

### 步骤 2. 更新 Edge Impulse 固件

开发板尚未预装正确的 Edge Impulse 固件。要更新固件：

1. [下载最新的 Edge Impulse 固件](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip) 并解压以获取 **firmware.uf2** 文件。

2. 再次通过 USB Type-C 数据线将开发板连接到 PC，并双击开发板上的 **Boot** 按钮以进入 **mass storage mode**。

3. 此时，您将在文件资源管理器中看到一个名为 **GROVEAI** 的新存储驱动器。将 **firmware.uf2** 文件拖放到 GROVEAI 驱动器中。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/7.jpg"/></div>

一旦复制完成，**GROVEAI** 驱动器将会消失。这就是我们检查复制是否成功的方法。

### 第 3 步：设置密钥

在命令提示符或终端中运行以下命令：

```
edge-impulse-daemon
```

这将启动一个向导，要求您登录并选择一个 Edge Impulse 项目。如果您想切换项目，可以使用 `--clean` 参数运行该命令。

或者，最新版本的 Google Chrome 和 Microsoft Edge 可以直接从您的开发板收集数据，而无需使用 Edge Impulse CLI。有关更多信息，请参阅[这篇博客文章](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser)。

### 第 4 步：验证设备是否已连接

就是这样！您的设备现在已连接到 Edge Impulse。要验证这一点，请访问[您的 Edge Impulse 项目](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1)，然后点击 **Devices**。设备将会列在这里。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/8.png"/></div>

## 从 Grove - Vision AI 收集数据

一切设置完成后，您现在可以通过以下教程构建并运行您的第一个机器学习模型：

- [为传感器添加视觉功能](https://docs.edgeimpulse.com/docs/tutorials/image-classification)。
- [目标检测](https://docs.edgeimpulse.com/docs/tutorials/object-detection)。
- [使用 FOMO 计数物体](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo)。

可以直接从 Edge Impulse Studio 捕获来自板载摄像头的帧：

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png"/></div>

最后，一旦模型训练完成，它可以轻松部署到 Grove – Vision AI 模块上开始推理！

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/10.png"/></div>

## 将模型部署到 Grove - Vision AI

在构建机器学习模型并从 Edge Impulse Studio 下载 Edge Impulse 固件后，请按照[更新 Edge Impulse 固件部分](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-grove-vision-ai#2.-update-edge-impulse-firmware)中的第 1 和第 2 步，将模型 uf2 文件部署到 Grove - Vision AI。

## 从源代码编译 Edge Impulse 固件

如果您希望从源代码编译 Edge Impulse 固件，可以访问[这个 GitHub 仓库](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)，并按照 README 中的说明操作。官方固件使用的模型可以在[这个公共项目](https://studio.edgeimpulse.com/public/87291/latest)中找到。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>