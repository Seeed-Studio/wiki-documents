---
description: Getting Started XIAO eInk Expansion Board
title: 基于 XIAO 的 墨水屏接口扩展板
keywords:
- XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO-eInk-Expansion-Board
last_update:
  date: 11/09/2023
  author: 金 菊
---

# 基于 XIAO 的 墨水屏接口扩展板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div><br />

认识 XIAO eInk 扩展板，它是您轻松驱动 eInk 显示屏的首选解决方案。该扩展板采用24针FPC连接器设计，与我们的 eInk 产品系列完美连接。如果您希望扩展选项，8针2.54排针接口可以轻松集成您选择的任何微控制器。将这块扩展板视为您的 eInk "最好的朋友"，增强其功能并让您的生活更加便利。

:::注意
这个扩展板不包含 eInk 显示屏，显示屏需要另外购买。
:::

## 简介

### 特点

- 24针FPC连接器：为eInk显示屏提供坚固可靠的连接。
- XIAO插座：允许您将XIAO作为处理器使用，提供紧凑而强大的控制解决方案。
- 8针2.54排针接口：通过允许您连接到任何微控制器，提供灵活性，为您打开了无限的可能性。
- 即插即用：设计简单易用，非常适合初学者和专家使用。
- 多功能应用：适用于各种尺寸的eInk显示屏，从小型到大型都可以使用。

### 应用领域

- 数字标牌：使用 eInk 扩展板创建动态且节能的数字标牌。
- 电子阅读器：根据您的需求构建定制的电子阅读器，拥有量身定制的功能。
- 智能家居控制面板：将该扩展板整合到智能家居系统中，打造时尚现代的控制面板。
- 零售价格标签：创建电子价格标签，提供更高效和环保的零售体验。
- 教育工具：开发交互式教育材料，可轻松更新且节能高效。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>


1. 24针FPC连接器：用于2.13英寸电子纸显示屏。
2. XIAO插座：用于连接Seeed Studio XIAO开发板。
3. IO扩展接口：用于连接其他控制器，如Arduino UNO或Raspberry Pi。


### 引脚定义

<div class="table-center">

|  eInk SPI引脚 |  XIAO  | 
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D5   |
|      SCK       |   D8   |
|      MOSI      |   D10  |

</div>

### 支持的eInk显示屏

1. [1.54英寸电子纸 - 点阵 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13英寸电子纸 - 柔性单色 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13英寸电子纸 - 四色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9英寸电子纸 - 单色 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9英寸电子纸 - 四色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2英寸电子纸 - 单色 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [5.65英寸电子纸 - 七色 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
8. [5.83英寸电子纸 - 单色 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
9. [7.5英寸电子纸 - 单色 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

## 入门指南

这是一个使用2.13英寸eInk和XIAO ESP32S3的示例。如果您想使用其他尺寸的eInk，请查看上面的支持的eInk表格，您还可以在各自的示例代码文件夹中找到针对这些显示屏的演示代码。

**步骤一:** 将XIAO ESP32S3插入XIAO插座：对准引脚，轻轻地将XIAO ESP32S3插入扩展板上的XIAO插座中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**步骤二:** 将eInk插入FPC连接器：小心地将您的2.13英寸电子纸滑入ePaper扩展板上的24针FPC连接器中。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

**步骤三:** 下载演示代码：前往 [演示代码存储库](https://github.com/peterpanstechland/e-ink) ，打开适用于您特定的eInk屏幕的代码，并使用Arduino IDE将其烧录到XIAO ESP32S3上。按照存储库中的说明上传代码。

**步骤 3-1:** 在您下载并解压演示代码后，请导航到并打开"2.9 inch E-paper - Monocolor 128x296"文件夹。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/select_2.9inch_eink_folder.png" style={{width:400, height:'auto'}}/></div>

**步骤 3-2:** 然后打开"example"文件夹：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/enter_example.png" style={{width:400, height:'auto'}}/></div>

**步骤 3-3:** 接下来，使用Arduino打开"example.ino"文件:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/open_example_sketch.png" style={{width:400, height:'auto'}}/></div>

**步骤 3-4:** 请点击板型选择下拉菜单，然后点击"选择其他板型和端口...

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/select_other_board.png" style={{width:400, height:'auto'}}/></div>

**步骤 3-5:** 选择适用于您的XIAO的通信端口，然后搜索并选择"XIAO_ESP32S3
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/find_and_select_xiaoesp32s3.png" style={{width:400, height:'auto'}}/></div>

**步骤 3-6:** 点击"上传"将固件烧录到XIAO上
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/upload_code.png" style={{width:400, height:'auto'}}/></div>

您应该会看到eInk显示屏按照下面显示的演示图片进行刷新。现在，您已经准备好开始探索使用XIAO eInk扩展板和XIAO ESP32S3的无限可能性了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/screen_update.gif" style={{width:400, height:'auto'}}/></div>

## 资源

- **[ZIP]** [PCB&SCH Eagle 文件](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## 技术支持和产品讨论


感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








