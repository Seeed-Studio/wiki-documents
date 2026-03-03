---
title: 加载图像
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Loading-Image/
slug: /cn/Wio-Terminal-LCD-Loading-Image
last_update:
  date: 01/11/2022
  author: gunengyu
---


# 加载图像

本文档描述了如何从SD卡加载图像并在Wio Terminal的TFT LCD屏幕上显示。这是一个非常有用的功能实现，可以在各种场合使用！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg" /></div>

## 库安装

### 为Wio Terminal安装SD卡库

- 访问 [文件系统概述](https://wiki.seeedstudio.com/cn/Wio-Terminal-FS-Overview/)

### 为Wio Terminal安装TFT LCD库

- 访问 [TFT LCD概述](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/)

## 图像格式配置

### 步骤1：准备图像
:::note
    我们需要将图像格式转换为Windows 24位BMP格式，并将图像放在正确的文件夹设置中。我们建议使用`Microsoft画图`来完成此操作。
:::
 - **步骤1-1：** 使用`Microsoft画图`调整图像大小以适应屏幕显示区域的最大像素尺寸

 - **步骤1-2：** 然后通过点击`另存为`保存图像，接着选择`BMP图片`，然后从文件类型下拉菜单中选择`24位位图(.bmp)`文件。
  
 - **步骤1-3：** 创建一个名为`bmp`的文件夹，并将您的Windows `.bmp`格式图像保存在此文件夹内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png" /></div>

### 步骤2：将`24位位图`图像转换为微控制器可读的`8位或16位bmp`格式
:::note
    要在我们的嵌入式系统上显示bmp图像，我们需要去除Windows bmp格式中的一些信息（头文件）。我们编写了一个python脚本来完成此操作，因此请选择以下两个选项之一来转换您的图像。
:::
#### 选项1：使用预构建的Windows可执行文件（仅限Windows）：

- **步骤2-1-1：** 我们使用[Pyinstaller](https://pyinstaller.org/en/stable/)包准备了可执行文件，您可以通过点击[bmp_converter.exe](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe)下载可执行文件

- **步骤2-1-2：** 将下载的`bmp_converter.exe`放入与`步骤1-3`中创建的`bmp文件夹`相同的目录中。

- **步骤2-1-3：** 双击运行`bmp_converter.exe`，然后在弹出的`终端`中选择两个选项之一："输入`1`进行8位颜色转换；输入`2`进行16位颜色转换"。

#### 选项2：使用Python源代码（跨平台）
:::note
    您的计算机上应该安装了python
:::
- **步骤2-2-1：** 下载Python脚本[bmp_converter.py](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py)，并将其保存在与`步骤1-3`中创建的`bmp文件夹`相同的目录中。

- **步骤2-2-2：** 打开`cmd`或`终端`运行Python脚本。首先，`cd`到保存`bmp_converter.py`和`bmp文件夹`的目录，然后运行Python脚本。

- **步骤2-2-3：** 两个选项：输入`1`进行8位颜色转换；输入`2`进行16位颜色转换

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif" /></div>

### 步骤3：图像准备就绪

现在，您可以在bmp文件夹内名为`rgb332`（8位）或`rgb565`（16位）的另一个文件夹中找到转换后的`.bmp`图像。

## 入门指南

### 安装[`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)库

此库用于使加载和显示图像变得更加容易。下载[`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)并将此头文件附加到您的sketch位置。

### Arduino中的图像初始化

- **在屏幕上显示图像**

```Cpp
//在屏幕上绘制8位颜色图像，从点(x, y)开始：
drawImage<uint8_t>("sd卡图像路径", x, y);

//在屏幕上绘制16位颜色图像，从点(x, y)开始：
drawImage<uint16_t>("sd卡图像路径", x, y);
```

- **初始化图像（如果使用上述drawImage函数则不需要）**

```Cpp
//使用8位颜色时，按以下方式初始化图像：
Raw8 * img8 = newImage<uint8_t>("sd卡图像路径");

//使用16位颜色时，按以下方式初始化图像：
Raw16 * img16 = newImage<uint16_t>("sd卡图像路径");
```

## 示例代码

```cpp

# include"TFT_eSPI.h"
# include "Seeed_FS.h" //包含SD卡库
# include"RawImage.h"  //包含图像处理库
TFT_eSPI tft;

void setup() {
    //初始化SD卡
    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    tft.begin();
    tft.setRotation(3);

    drawImage<uint8_t>("test.bmp", 0, 0); //从(0, 0)显示sd卡中的这个8位图像

}

void loop() {
}

```

## 常见问题

**如果出现`ImportError: No module named PIL`：**

- 在cmd或终端中输入`pip install pillow`安装python模块
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