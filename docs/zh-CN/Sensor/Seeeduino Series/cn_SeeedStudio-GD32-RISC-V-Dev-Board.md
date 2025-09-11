---
description: SeeedStudio GD32 RISC-V 开发板
title: SeeedStudio GD32 RISC-V 开发板
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SeeedStudio-GD32-RISC-V-Dev-Board
last_update:
  date: 1/31/2023
  author: shuxu hu
---


![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-all.jpg)

SeeedStudio GD32 RISC-V 开发板基于 GD32VF103VBT6 MCU，运行频率可达 108MHz。GD32VF103 器件是基于 RISC-V 内核的 32 位通用微控制器，提供 128 KB 片上 Flash 存储器和 32 KB SRAM 存储器。同时，它提供丰富的接口资源：5x U(S)ART、2 x I2C、3 x SPI、2 x I2S、2 x CAN2.0、1 x USBFS。

我们引出了 GD32VF103 的所有 I/O 引脚（总共 80 个 GPIO），这将满足您多样化的开发需求。借助板载 8MB flash 和 256 字节 EEPROM，您可以实现更复杂的应用。此外，我们在开发板上提供了丰富的外设资源，包括一个 LCD、一个 type c USB 端口、一个 TF 卡插槽、两个用户按钮和三个用户 LED。

## 特性

+ GD32VF103VBT6 RISC-V MCU @108MHz
+ 128KB 片上 Flash + 8MB 板载 Flash
+ LCD 接口：16 位 8080 接口和 SPI 触摸屏控制接口
+ USB Type C
+ GUI 支持
+ LCD 显示

## 硬件概述

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-pin.jpg)

### 引脚图

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-c.jpg)

## 支持的平台

| PlatformIO IDE                                                                                            |
|-----------------------------------------------------------------------------------------------------|
| ![enter image description here](https://files.seeedstudio.com/wiki/Bazaar_Document/platformio-logo.17fdc3bc.png)  |

## 入门指南

### 使用 platformIO IDE 进行测试演示

#### 硬件

**所需材料**

SeeedStudio GD32 RISC-V 开发板、2.8 英寸 240x320 像素电阻式 LCD 屏幕和一根 FPC 电缆，您可以与产品一起购买 [SeeedStudio GD32 RISC-V kit with LCD](https://www.seeedstudio.com/SeeedStudio-GD32-RISC-V-kit-with-LCD-p-4303.html)。

![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/d/gd32vf-103vbt6-connect-2.jpg) <!-- 图片链接有问题-->

[USB 3.1 Type C to A Cable](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

+ **步骤1**
使用 FPC 电缆连接 LCD 显示屏和 SeeedStudio GD32 RISC-V 开发板。连接 FPC 电缆时，请让"蓝色"一面朝上，如上图所示。

+ **步骤2**
将 USB Type C 电缆插入 PC 和您的 GD32 开发板。

现在您完成了硬件配置。

#### 软件

:::note
由于 GD32 开发板可以支持 Arduino 框架，但与 Arduino IDE 不完全兼容，这里我们使用 platformIO IDE 来创建一个简单的演示。Arduino IDE 版本将在之后更新。
:::

+ **步骤1**
设置 platformIO IDE，platformIO IDE 基于 Visual Studio Code。
下载 [Visual Studio Code](https://code.visualstudio.com/)。
点击"Extensions"图标，您可以在 Visual Studio Code 的左侧找到它。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

在搜索引擎中输入"platformIO"来安装它。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

+ **步骤2**
点击"Open Project"并找到您的项目文件。这里以 ["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip) 为例。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki3.png)

选择 Arduino 框架和 GD32 开发板。

+ **步骤3**
在 platformIO IDE 中添加 ["LCD" 库](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)。通常库文件位于 /C:/user/admin/.platformio/lib/，压缩"LCD"库并将其添加到目标路径。Git clone [Arduino 框架](https://github.com/LynnL4/framework-arduino-gd32v)，并将其添加到 /.platformio/packages/... 。

+ **步骤4**
您可以看到工作栏位于左侧。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki4.png)

点击"main.cpp"并编译代码。编译按钮位于 Visual Studio Code 的底部。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

+ **步骤5**
代码被编译为二进制文件。您可以使用 [DFU 工具](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) 将二进制文件下载到开发板。此外，您需要安装 DFU 固件，让开发板以 DFU 方式下载代码。DFU 固件与 [DFU 工具](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) 在同一文档中。
+ **步骤6**
检查您的开发板并通过 USB type-C 接口将其连接到 PC。确保开发板启动方式正确，即 boot0 连接到高电平，boot1 连接到地。它们都在 GD32 开发板的左侧，您可以用几根导线调整它们。
+ **步骤7**
打开 DFU 工具，按照上述步骤设置开发板后，DFU 工具将自动识别您的开发板，如图所示。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

然后您应该将二进制文件添加到 APP 程序文件列中。二进制文件位于路径 \TFT_GD32.pio\build\gd32vf103v-eval。
选择 Index 4 并点击"ok"将代码下载到开发板，下载后，点击"Leave DFU"让开发板断开与 DFU 工具的连接。然后您将在 LCD 上看到一个计算图形处理时间的演示。它几乎包含了"TFT_eSPI"库中的所有 API。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/gd32.gif)

:::note
如果您想下载其他代码，只需按下开发板上的复位按钮，打开 [DFU 工具](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)，DFU 工具将再次识别开发板。您也可以将 boot0 连接到地线，以防您按下复位按钮并删除开发板中的代码。
:::

## 资源

+ **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
+ **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
+ **[Zip]** ["LCD" 库](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)
+ **[Zip]** 项目文件["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip)
+ **[Zip]** [DFU 工具](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)

## 技术支持与产品讨论


<br />感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>