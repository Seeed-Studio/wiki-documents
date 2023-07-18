---
description: Grove - LCD RGB Backlight
title: Grove - LCD RGB Backlight
keywords:
- Grove
- cn
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LCD_RGB_Backlight
last_update:
  date: 7/18/2023
  author: Matthew
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg)

想要完成丰富多彩的的单色背光显示吗？ 通过这个模块您可以将显示的颜色设置为任何您喜欢的颜色
它具有简单而且简洁的界面。 它以I2C总线作为微控制器的通信方式。
因此，数据交换和背光控制所需的引脚数可以从10个减少到2个，从而减轻了IO口的使用 此外，Grove - LCD RGB Backlight支持用户自己定义的字符。 想要得到
爱心图案和其他一些人物形象的图案吗？ 只要利用这个模块您就可以自己设计！
该产品是Grove - Serial LCD的替代品。 如果您正在寻找原始的16x2液晶显示模块，我们
有绿色、黄色和蓝色的Grove - LCD RGB Backlight出售。

[![](https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG)](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11z7Fw9H&id=45475311124)

!!!Note
    本文档适用于1.0，2.0和4.0版本。


## 产品特性

* 具有RGB背光显示的功能
* I2C总线连接
* 内部设置有英文字体
* 16x2 LCD背光屏

!!!Tip
    关于Grove模块的更多细节请参考 [Grove System](http://wiki.seeedstudio.com/cn/Grove_System/)

## 产品特性

|项目|数值|
|------|----------|
| 输入电压|5V|
| 工作电流 | <60mA |
|CGROM | 10880位 |
| CGRAM | 64x8 位 |

## 创意应用

* 人机接口
* 智慧之家
* 传感器中心

这里有一些项目给您参考

|Edison Wi-Fi Address|WiFi Enabled Greenhouse|Grove Lucky Dumpling|
|------------------------|-------------------|--------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project3.jpg)|
|[Make it Now!](http://www.instructables.com/id/Show-the-Intel-Edison-WiFi-IP-Address-on-a-Grove-L/)|[Make it Now!](http://www.instructables.com/id/Arduino-Grove-Greenhouse/)|[Make it Now!](http://www.instructables.com/id/Grove-Lucky-Dumpling/)|


|Toothbrushing Instructor|LinkIt ONE Pager|LinkIt ONE IoT Demo|
|------------------------|-------------------|--------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project6.jpg)|
|[Make it Now!](http://www.instructables.com/id/Toothbrushing-Instructor/)|[Make it Now!](http://www.instructables.com/id/LinkIt-ONE-Pager/)|[Make it Now!](http://www.seeed.cc/project_detail.html?id=78)|


## 入门指导

这个入门指导将向你展示怎么使用Grove - LCD RGB Backlight。同时我们也需要 [Seeeduino](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11rndqnS&id=45721222112)

!!!Note
    这个演示是在Win10和Arduino IDE1.6.9环境下进行的。

### 第一步.下载 Arduino 库

您需要下载该库并安装到您的Arduino IDE。


如果您是第一次安装Arduino库文件，请点击 [这里](http://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 查看库文件的安装方法，并且完成 LCD RGB Backlight 库的安装。

[![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/library.png)](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

### 第二步. 硬件安装

硬件连接非常简单，因为Seeeduino有一个I2C Grove端口，所以我们需要做的是
通过Grove连接线将其连接到I2C Grove端口就好。

!!!Note
    请通过Seeeduino V4.2上的拨动开关选择5v，否则Grove - LCD RGB Backlight可能无法正常工作。

![// image 1](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/1.png)

### 第三步.下载数据并且上传

您可以在Github中下载演示代码，点击 [这里](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight)，然后将其解压缩到任何地方。

如果您这个步骤有问题，请参阅 [Arduino入门指导](http://wiki.seeedstudio.com/cn/Getting_Started_with_Seeeduino/) 在库中有一个Hello World示例，将其打开并上传到Seeeduino V4.2。 然后可以在第一行看到“Hello world”，第二行将显示从复位后显示时间的秒数。

![// image 1](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/2.png)

### 第四步. 改变背光屏的颜色

 Grove - LCD RGB Backlight的最重要的特点之一是：您可以更改背光源
这是一个很简单的事情，只需使用以下功能：

    void setRGB(int r, int g, int b);

然后让我们尝试红色的背光显示。
将颜色代码修改为：

    const int colorR = 255;
    const int colorG = 0;
    const int colorB = 0;

再次上传代码，是不是可以看到背光屏的颜色转到红色了？ 那么为什么不尝试另一种颜色呢？


## 资源下载

* [Software Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)
* [Github page for the Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight)
