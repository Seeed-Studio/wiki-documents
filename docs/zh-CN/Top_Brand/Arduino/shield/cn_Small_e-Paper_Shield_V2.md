---
description: 小型电子纸扩展板 V2
title: 小型电子纸扩展板 V2
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Small_e-Paper_Shield_V2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Small e-Paper Shield V2
category: Shield
bzurl: https://www.seeedstudio.com/Small-e-paper-Shield-V2-p-2462.html
oldwikiname:  Small e-Paper Shield V2
prodimagename:  Small_e-Paper_shield_b.jpg
surveyurl: https://www.research.net/r/Small_e-Paper_Shield_V2
sku:   104030019
--- -->
 ![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Small_e-Paper_shield_b.jpg)

电子纸可能是最舒适的阅读材料。它通过反射光而不是发射光来模拟传统纸张阅读的体验。这种方式消耗的电力要少得多。小型电子纸扩展板是一个用于小尺寸电子纸的驱动扩展板。它能够驱动1.44英寸、2.0英寸和2.7英寸的电子纸，并支持超过170种语言。该扩展板的上表面保持平整干净，为附着在其上的电子纸提供良好的支撑。如果您正在考虑一个轻量级且阅读舒适的显示器，电子纸将是一个不错的选择。

**注意：** 由于此驱动板支持不同尺寸的电子纸。本产品不包含电子纸。我们同时销售2.0英寸和2.7英寸的电子纸。现在就去将最适合的一款添加到您的购物车吧！

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Small-e-paper-Shield-V2-p-2462.html)

### 选择库文件

为了选择正确的库文件，您应该知道您的面板版本。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Definition_of_Model_Labels.jpg)

**请注意您面板的标签**：

* 如果型号名称是'EG020AS012'或'EM027AS011'，那么您应该选择旧库，请点击这里 [Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield)。

* 如果型号名称是'EG020BS011'或'EM027BS013'，那么您应该选择新库，请点击这里 [New Panel Library【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar)。

## 规格参数

---
兼容板：Arduino Uno/Leonardo/Arduino Mega/Linkit ONE

工作电压：3.3/5VDC

工作电流（刷新屏幕）：40mA

接口类型：SPI

<font color="Green">Arduino上的引脚</font>

<table>
  <tr>
    <th>Arduino</th>
    <th>E-paper</th>
  </tr>
  <tr>
    <td width="150px">D2</td>
    <td width="250px">M_EPD_PANEL_ON</td>
  </tr>
  <tr>
    <td>D3</td>
    <td>M_EPD_BORDER</td>
  </tr>
  <tr>
    <td>D4</td>
    <td>M_/SD_CS</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>M_EPD_PWM</td>
  </tr>
  <tr>
    <td>D6</td>
    <td>M_EPD_/RESET</td>
  </tr>
  <tr>
    <td>D7</td>
    <td>M_EPD_BUSY</td>
  </tr>
  <tr>
    <td>D8</td>
    <td>M_EPD_DISCHARGE</td>
  </tr>
  <tr>
    <td>D9</td>
    <td>M_/WORD_STOCK_CS</td>
  </tr>
  <tr>
    <td>D10</td>
    <td>M_/EPD_CS</td>
  </tr>
  <tr>
    <td>ICSP PORT</td>
    <td>M_MOSI , M_SCK , M_MISO</td>
  </tr>
  <tr>
    <td>A0</td>
    <td>M_TEMP_SEN</td>
  </tr>
  <tr>
    <td>A1</td>
    <td>M_OE123﻿﻿</td>
  </tr>
  <tr>
    <td>A2</td>
    <td>M_CKV</td>
  </tr>
  <tr>
    <td>A3</td>
    <td>M_STV_IN</td>
  </tr>
  <tr>
    <td>3.3V</td>
    <td>M_VCC_3V3</td>
  </tr>
  <tr>
    <td>5V</td>
    <td>M_VCC_5V</td>
  </tr>
</table>

## 演示

---
小型电子纸扩展板可以显示图像、各种图形和文本。库中有大量示例，为您提供如何使用该模块的想法。现在让我们体验电子纸的强大库和宽视角。

### 硬件安装

* 将电子纸连接到小型电子纸扩展板的FFC接口。
* 将小型电子纸扩展板插入Arduino/Seeeduino，并使用USB线缆将其连接到PC。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/E-Paper_Screen.jpg)

现在是时候使用库来展示演示了，需要从[这里](https://github.com/Seeed-Studio/ePaper)下载库。下载后，您需要将其放入Arduino IDE的库文件中，路径为：...\arduino-1.0.1\libraries。

### 演示展示

这里我们选择2.0英寸屏幕作为示例来展示其显示功能。

#### 演示1：显示文本

* 打开代码：File- &gt;Examples- &gt;ePaper-&gt;text，如下所示：

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Text_Code.jpg)

**重要说明：**

> 我们需要重新强调这个说明：
>
> - 如果您使用Arduino UNO、Seeeduino 3.0和任何使用Atmega 328P或Atmega32U4作为控制器的板子，您应该在使用此演示时插入SD卡。由于Atmega328p和Atmega32U4的存储空间较小，SD卡用于存储临时数据。
> - 如果您使用Arduino Mega或任何其他使用Atmega1280或Atmega2560的板子，您不需要插入SD卡。

* 更改参数以匹配您的屏幕尺寸。如果您的屏幕是2.7英寸，您需要将200更改为270。在使用其他示例时也需要进行此更改。

<pre>#define SCREEN_SIZE 200 // choose screen size: 144, 200, 270</pre>

* 将代码上传到您的微控制器。如果您不知道如何操作，请点击[这里](/cn/Upload_Code)。

* 现在您可以看到这个：

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_text.jpg)

* 尝试更改显示文本和显示位置。您可以学习每个函数的用法。

#### 演示2：显示图形

示例：_draw_ 将是显示各种图形的好例子。您需要像演示1一样打开这个代码：_draw_。记住关于是否需要SD卡来完成演示的说明。请确保根据您的微控制器类型确定是否需要SD卡。并更改参数以匹配您的屏幕尺寸。

完成修改并上传代码后，屏幕上将显示一个美丽的图案：

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_graphic.jpg)

这个图片是通过调用绘图函数创建的。您可以制作自己的图案并在屏幕上尝试。每个绘图函数在参考中都有具体的描述。

#### 演示3：显示图像

与TFT显示器和OLED显示器类似，小型电子纸扩展板支持显示图像。

现在您需要打开图像示例：File- &gt;Examples- &gt;ePaper-&gt;image。

您需要上传代码以查看结果。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Dispaly_image.jpg)

**注意：如您所见，此"image"示例中的默认屏幕尺寸设置为2.7英寸。请修改屏幕尺寸设置以防显示不当。**

<pre>  #define SCREEN_SIZE 200         // choose screen size here: 144, 200, 270 </pre>

当然，您可以通过更改图像的点阵数据来更改显示图像。

例如，您的电子纸屏幕是2.7英寸，所以您需要获取264 X176像素的点阵数据，并将代码复制到picture.h中的'static unsigned char image_270[] PROGMEM ={}'。当使用2.0英寸屏幕时，您需要将200x96像素的点阵数据代码复制到'static unsigned char image_200[] PROGMEM ={}'。

#### 如何显示图像

感谢Muchiri John的贡献，我们得到了一个非常有用且易于使用的工具。有了这个工具，显示图像不再是一件困难的事情。

您可以在[这里](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip)下载该工具

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Snapshot_epaper_shied_tools.jpg)

## 参考

---
小型电子纸库提供完整的软件接口来发挥电子纸显示屏的功能。以下是关于函数的具体描述。

### 函数描述

<u>1. void begin(EPD_size sz);</u>

_该函数用于设置屏幕尺寸。_

* sz: 可以是 EPD_1_44、EPD_2_0、EPD_2_7。

<u>2. void setDirection(EPD_DIR dir);</u>

_该函数用于设置显示方向。_

* dir: 可以是 DIRLEFT、DIRRIGHT、DIRNORMAL、DIRDOWN

<u>3. int drawChar(char c, int x, int y);</u>

_该函数可用于显示字符。_

* c: 您要显示的字符。
* x: 字符的起始 X 坐标。

* y: 字符的起始 Y 坐标。

<u>4. int drawString(char *string, int poX, int poY);</u>

_该函数可用于显示字符串。_

* *string: 您要显示的字符串。
* poX: 字符串的起始 X 坐标。

* poY: 字符串的起始 Y 坐标。

<u>5. int drawNumber(long long_num,int poX, int poY);</u>

_该函数可用于显示长整型数据。_

* long_num: 您要显示的长整型数据。最大值为
* poX: 数据的起始 X 坐标

* poY: 数据的起始 Y 坐标

<u>6. int drawFloat(float floatNumber,int decimal,int poX, int poY);</u>

_该函数可用于显示浮点数。显示的浮点数据根据设置的小数位数进行四舍五入。_

* floatNumber: 您要显示的浮点数。
* decimal: 设置小数位数。
* poX: 数据的起始 X 坐标。

* poY: 数据的起始 Y 坐标。

<u>7. int drawUnicode(unsigned int uniCode, int x, int y);</u>

_该函数可用于使用 unicode 显示字符或中文。请参阅 [GT20L16P1Y 数据手册](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/GT20L16P1Y_Datasheet.pdf) 第 18 到 24 页查找字符 unicode，字符包括拉丁文、希伯来文、泰文、希腊文、西里尔文和阿拉伯文。中文 unicode 可参见 [GB2312（简体中文）字符编码表](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Character_code_table.pdf)。_

* uniCode: 根据字符或中文的机器码。
* x: 起始 X 坐标。

* y: 起始 Y 坐标。

注意：0x0020 到 0x007E 之间的字符 unicode 可以直接通过键盘输入。例如显示字符 'G'，函数可以是 drawUnicode(0x0047, 3,10) 或 displayChar ('s',3,10)；

<u>8. int drawUnicodeString(unsigned int *uniCode, int len, int x, int y);</u>

_该函数可用于显示多个字符和中文。_

* *uniCode: unicode 数组。
* len: 字符串长度。
* x: 字符串的起始 X 坐标。

* y: 字符串的起始 Y 坐标。

<u>9. void drawLine(int x0, int y0, int x1, int y1);</u>

_该函数可用于显示直线。_

* x0: 直线的起始 X 坐标

* y0: 直线的起始 Y 坐标

* x1: 直线的结束 X 坐标

* y1: 直线的结束 Y 坐标

<u>10. void drawCircle(int poX, int poY, int r);</u>

_该函数可用于绘制圆形。_

* poX: 圆心的 X 坐标

* poY: 圆心的 Y 坐标
* r: 圆心的半径

<u>11. void drawHorizontalLine( int poX, int poY, int len);</u>

_该函数可用于绘制水平线。_

* poX: 直线的起始 X 坐标。

* poY: 直线的起始 Y 坐标。

* len: 直线的长度

<u>12. void drawVerticalLine( int poX, int poY, int len);</u>

_该函数可用于绘制垂直线。_

* poX: 直线的起始 X 坐标。

* poY: 直线的起始 Y 坐标。

* len: 直线的长度。

<u>13. void drawRectangle(int poX, int poY, int len, int width);</u>

_该函数可用于绘制矩形。_

* poX: 矩形的起始 X 坐标。

* poY: 矩形的起始 Y 坐标。

* len: 矩形的长度。

* width: 矩形的宽度。

<u>14. void fillRectangle(int poX, int poY, int len, int width);</u>

_该函数可用于绘制填充矩形。_

* poX: 矩形的起始 X 坐标。

* poY: 矩形的起始 Y 坐标。

* len: 矩形的长度。

* width: 矩形的宽度。

<u>15. void fillCircle(int poX, int poY, int r);</u>

_该函数可用于绘制填充圆形。_

* poX: 圆心的 X 坐标。

* poY: 圆心的 Y 坐标。
* r: 圆心的半径
**示例：**

```
    EPAPER.drawRectangle(10, 10, 100, 80);
    EPAPER.fillCircle(50, 50, 30);
    EPAPER.fillRectangle(50, 65, 50, 20);
    EPAPER.drawCircle(150, 50, 10);
    EPAPER.fillCircle(150, 50, 5);
    EPAPER.drawHorizontalLine(120, 50, 60);
    EPAPER.drawVerticalLine(150, 20, 60);
```

<u>16. void drawTraingle( int poX1, int poY1, int poX2, int poY2, int poX3, int poY3);</u>

_该函数可用于绘制三角形。它由三个点组成。_

* poX1(poX2,poX3): 三角形一个点的 X 坐标。

* poY1(poY2,poY3): 三角形一个点的 Y 坐标。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---
* [小型电子纸扩展板 Eagle 文件](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip)

* [小型电子纸库](https://github.com/Seeed-Studio/Small_ePaper_Shield)

* [电子纸面板数据手册](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/4P008-00_02_COG_Driver_Interface_Timing_for_smallPlussize.pdf)

* [epdImageKit 工具](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip)

* [新面板库【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar)

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