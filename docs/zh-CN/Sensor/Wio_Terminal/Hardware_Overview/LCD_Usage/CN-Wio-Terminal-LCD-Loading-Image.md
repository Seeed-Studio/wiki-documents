---
title: 图片加载
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/
slug: /cn/Wio-Terminal-LCD-Loading-Image
last_update:
  date: 3/10/2024
  author: 金菊
---

# 图片加载

本仓库描述了如何从SD卡加载和显示图片到Wio Terminal的TFT LCD屏幕上。这可以非常有用，可以在各种场合下使用！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg" /></div>

## 库的安装

### 安装Wio Terminal的SD卡库

- 访问 [File System Overview](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/)

### 安装Wio Terminal的TFT LCD库

- 访问 [TFT LCD Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/)

## 图片格式配置

### 步骤 1: 准备图片
:::注
    我们需要将图片格式转换为Windows的24位BMP格式，并将图片放置在正确的文件夹中。我们建议使用 `Microsoft paint` 进行转换。
:::
 - **步骤 1-1:** 使用 `Microsoft paint` 调整图片大小，以适应屏幕显示区域的最大像素尺寸。

 - **步骤 1-2:** 然后点击 `Save as` 选择 `BMP picture` 图片，然后从文件类型下拉菜单中选择 `24-bit bitmap (.bmp)` 文件格式保存图片。
  
 - **步骤 1-3:** 创建一个名为 `bmp` 的文件夹，并将Windows的 `.bmp` 格式图片保存在此文件夹中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png" /></div>

### 步骤 2: 将 `24-bit bitmap` 图片转换为微控制器可读取的 `8-bit or 16-bit bmp`  格式。
:::注
    为了在嵌入式系统上显示bmp图像，我们需要去除Windows bmp格式中的一些信息（头文件）。我们编写了一个Python脚本来完成这个任务，请选择以下两个选项之一来转换您的图片。
:::
#### 选项 1: 使用预编译的Windows可执行文件（仅适用于Windows）：

- **步骤 2-1-1:** 我们使用 [Pyinstaller](https://pyinstaller.org/en/stable/){target=_blank} 软件包准备了可执行文件，您只需点击 [bmp_converter.exe](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe) 即可下载可执行文件。

- **步骤 2-1-2:** 将下载的 `bmp_converter.exe` 放置在与步骤 `步骤 1-3` 中创建的 `bmp folder` 相同的目录中。

- **步骤 2-1-3:** 双击运行 `bmp_converter.exe`, 然后在弹出的命令行窗口 `terminal` 中选择两个选项之一: "输入 `1` 进行8位颜色转换; 输入 `2` 进行16位颜色转换"。

#### 选项 2: 使用Python源代码（跨平台）
:::注
    您的计算机上应该已经安装了Python
:::
- **步骤 2-2-1:** 下载Python脚本 [bmp_converter.py](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py) ，并将其保存在与 `步骤 1-3` 中创建的 `bmp folder` 夹相同的目录中。

- **步骤 2-2-2:** 打开 `cmd` 或者 `terminal` 运行Python脚本。首先，使用 `cd` 命令切换到保存 `bmp_converter.py` 和 `bmp folder`的目录，然后运行Python脚本。

- **步骤 2-2-3:** Two 两个选项: 输入 `1` 进行8位颜色转换; 输入 `2` 进行16位颜色转换;

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif" /></div>

### 步骤 3: 准备就绪的图片

现在，您可以在 `.bmp` 文件夹中的 `rgb332`(8-bit) 或者 `rgb565`(16-bit) 文件夹中找到转换后的.bmp图片。

## 入门指南

### 安装 [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h) 库。

这个库用于更轻松地加载和显示图片。下载 [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)  并将这个头文件附加到您的Sketch位置。

### Arduino中的图片初始化

- **显示图片在屏幕上**

```Cpp
//To draw on 8-bit color image on screen, starting from point (x, y):
drawImage<uint8_t>("path to sd card iamge", x, y);

//To draw on 16-bit color image on screen, starting from point  (x, y):
drawImage<uint16_t>("path to sd card iamge", x, y);
```

- **初始化图像（如果使用上述的drawImage函数，则不需要）**

```Cpp
//when using 8-bit colour, initialise the image following this:
Raw8 * img8 = newImage<uint8_t>("path to sd card image");

//when using 16-bit colour, initialise the image following this:
Raw16 * img16 = newImage<uint16_t>("path to sd card image");
```

## 示例代码

```cpp

# include"TFT_eSPI.h"
# include "Seeed_FS.h" //Including SD card library
# include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

void setup() {
    //Initialise SD card
    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    tft.begin();
    tft.setRotation(3);

    drawImage<uint8_t>("test.bmp", 0, 0); //Display this 8-bit image in sd card from (0, 0)

}

void loop() {
}

```

## 常见问题解答

**如果出现 `ImportError: No module named PIL`  错误:**

- 在命令提示符或终端中输入 `pip install pillow` 安装Python模块。

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
