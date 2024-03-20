---
description: Train and Deploy Your Own AI Model with Edge Impulse
title: Train and Deploy Your Own AI Model with Edge Impulse
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/edge-impulse-vision-ai
last_update:
  date: 3/13/2024
  author: DuKaiyin
---


# 通过Edge Impulse快速训练Grove Vision AI模块的模型

[Grove - Vision AI 模块](https://wiki.seeedstudio.com/Grove-Vision-AI-Module)是一款基于Himax HX6537-A处理器的拇指大小的板，配备了一颗200万像素的OV2640摄像头、麦克风、3轴加速度计和3轴陀螺仪。它具有32 MB SPI闪存的存储空间，预装了用于人脸识别和人体检测的机器学习算法，并支持定制模型。它与XIAO生态系统和Arduino兼容，非常适合开始进行基于人工智能摄像头项目的开发！

它完全受到Edge Impulse的支持，这意味着您可以从摄像头中采样原始数据，构建模型，并在不需要任何编程的情况下直接从工作室部署经过训练的机器学习模型到模块中。Grove - Vision AI模块可以直接从[Seeed Studio Bazaar](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html)购买。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/1.jpg"/></div>

该板的Edge Impulse固件是开源的，托管在GitHub上：[edgeimpulse/firmware-seeed-vision-ai-internal](https://github.com/edgeimpulse/firmware-seeed-vision-ai-internal/tree/edge-impulse-firmware)

快速链接：

- 固件源代码： [GitHub 储存库](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)
- 预编译固件: [seeed-grove-vision-ai.zip](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)

## 安装依赖项
要在Edge Impulse中设置此板，您需要安装以下软件：

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
2. 在Linux上：
   - GGNU Screen：例如通过 `sudo apt install screen`安装.
3. 下载最新的[Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**在安装Edge Impulse CLI时遇到问题？**
请参阅 [安装和故障排除指南](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## 连接到Edge Impulse

安装好所有软件后，现在是时候将板连接到Edge Impulse了。

### 步骤1. 更新BL702芯片固件

BL702是USB-UART芯片，负责在PC和Himax芯片之间进行通信。您需要更新此固件，以使Edge Impulse固件正常工作。

1. 在下面的链接中下载BootLoader文件的最新版本。 BootLoader的名称通常是 `tinyuf2-grove_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

1.  连接板到PC，使用USB Type-C线缆，并在板上按住**Boot** 按钮.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/2.jpg" /></div>

1. 打开之前安装的Bouffalo Lab Dev Cube软件，选择 **BL702/704/706**,然后点击**Finish**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/3.png" /></div>

4. 进入 **MCU** 选项卡。在 **Image file**下，点击 **Browse** a选择刚刚下载的固件文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/4.png" /></div>

5. 点击 **Refresh**, 选择与已连接板相关的 **Port** 将 **Chip Erase** 设置**True**, 点击 **Open UART**,点击 **Creat & Download** 等待过程完成。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/5.png"/></div>

如果一切顺利，您将看到输出为**All Success**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/6.png"/></div>

:::注意
如果刷写过程中出现错误，请尝试多次点击**Create & Download**，直到看到**All Success**消息。
:::

### 步骤2. 更新Edge Impulse固件

该板未预装正确的Edge Impulse固件。为了更新固件：

1. [下载最新的Edge Impulse固件](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)并解压缩，以获取**firmware.uf2**文件。

2. 再次通过USB Type-C线缆将板连接到PC，然后双击板上的**Boot**按钮，以进入**大容量存储模式**

3. 之后，您将在文件浏览器中看到一个名为**GROVEAI**的新存储驱动器。将**firmware.uf2**文件拖放到GROVEAI驱动器中。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/7.jpg"/></div>

一旦复制完成，**GROVEAI**驱动器将消失。这是我们检查复制是否成功的方式。

### 步骤3. 设置密钥

从命令提示符或终端运行：

```
edge-impulse-daemon
```

这将启动一个向导，要求您登录并选择一个Edge Impulse项目。如果您想切换项目，请使用`--clean`运行命令。

或者，最近版本的Google Chrome和Microsoft Edge可以直接从您的板收集数据，无需使用Edge Impulse CLI。有关更多信息，请参阅[这篇博客文章](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser)。

### 步骤4. 验证设备是否已连接

就是这样！您的设备现在已连接到Edge Impulse。要验证这一点，请转到[您的Edge Impulse项目](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1)，然后点击**Devices**。设备将在这里列出。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/8.png"/></div>

## 从Grove - Vision AI收集数据

一切都设置好后，您现在可以使用以下教程构建和运行您的第一个机器学习模型：

- [为传感器添加视觉](https://docs.edgeimpulse.com/docs/tutorials/image-classification)。
- [目标检测](https://docs.edgeimpulse.com/docs/tutorials/object-detection)。
- [使用FOMO计数对象](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo)。

可以直接从工作室捕获来自板载摄像头的帧：

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png"/></div>

模型训练完成后，可以轻松部署到Grove – Vision AI模块上开始推理！

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/10.png"/></div>

## 部署模型到Grove - Vision AI

在构建机器学习模型并从Edge Impulse Studio下载Edge Impulse固件之后，按照[更新Edge Impulse固件部分](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-grove-vision-ai#2.-update-edge-impulse-firmware)的步骤1和步骤2，将模型uf2部署到Grove - Vision AI。

## 从源代码编译Edge Impulse固件

如果您想从源代码编译Edge Impulse固件，可以访问[此GitHub仓库](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)，并按照README中包含的说明进行操作。用于官方固件的模型可以在[此公共项目](https://studio.edgeimpulse.com/public/87291/latest)中找到。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您与我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
