---
description: TFT Touch Shield V1.0
title: TFT Touch Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/TFT_Touch_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/Tft.jpg)

2.8" TFT Touch Shield 是一个与 Arduino / Arduino Mega 兼容的多彩 TFT 显示屏，配有 4 线电阻式触摸屏。它包含一个与 Arduino shield 兼容的引脚布局用于连接。TFT 驱动器基于专业的驱动 IC，具有 8 位数据和 4 位控制接口。

## 特性 ##

- 与 Arduino/Seeeduino、Arduino Mega 和 Seeeduino Mega 兼容

- 2.8" 尺寸 QVGA 显示屏

- 电阻式触摸屏

## 规格 ##

|项目| 最小值| 典型值| 最大值| 单位|
|---|---|---|---|---|
|电压| 4.5| 5| 5.5| VDC|
|电流 |/ |/ |250| mA|
|LCD 面板尺寸 ||||2.8 英寸|
|视角 |60~120 |||度|
|分辨率 |320x240 |||/|
|LCD 颜色 |65k |||/|
|背光类型| LED||| /|
|LCD 驱动 IC |ST7781R||| /|
|接口类型| 并行端口（8位数据 + 4位控制）|||/|
|触摸屏| 4 线电阻式触摸屏||| /|
|有效区域 |43.2*57.3||| mm|
|ESD 接触放电 |±4 |||KV|
|ESD 空气放电 |±8||| KV|
|尺寸 |72.5x54.7x18||| mm|
|重量 |24±2 |||g|

## 注意事项 ##

- 不要让模块受到机械冲击或跌落撞击。

- 不要对显示表面或邻近区域施加过大的力，因为这可能会导致色调变化。

### Arduino 上的引脚使用 ###

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg) (width=undefined)

**D0** - 未使用。

**D1** - 未使用。

**D2** - LCD 数据位 8。

**D3** - LCD 数据位 9。

**D4** - LCD 数据位 10。

**D5** - LCD 数据位 11。

**D6** - LCD 数据位 12。

**D7** - LCD 数据位 13。

**D8** - LCD 数据位 14。

**D9** - LCD 数据位 15。

**D10** - LCD CS 引脚，低电平有效。

**D11** - LCD RS 引脚。

**D12** - LCD WR 引脚。

**D13** - LCD RD 引脚。

**D14(A0)** - 触摸屏 Y-。

**D15(A1)** - 触摸屏 X-。

**D16(A2)** - 触摸屏 Y+。

**D17(A3)** - 触摸屏 X+。

**D18(A4)** - 未使用。

**D19(A5)** - 未使用。

## 使用方法 ##

### 硬件安装 ###

- 将 TFT Touch Shield 插入 Seeeduino，如下图所示。

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg)

## TFT 编程 ##

**TFT** 库提供以下应用程序编程接口（API）。该库使用直接访问端口寄存器而不是 Arduino API。这是为了提高 MCU 和 TFT 之间的通信速度。目前，该库支持 Arduino、Arduino Mega（1280 或 2560）和 Seeeduino ADK 主板兼容的开发板。在 Mega 中，TFT 的 8 位数据端口分布到属于不同端口的不同引脚。与 Arduino 相比，这降低了图形绘制的速度。端口引脚的选择纯粹基于 Arduino / Mega 端口引脚排列。

### 通用函数 ###

---

#### setXY(unsigned int poX, unsigned int poY) ####

将光标位置设置为 (poX,poY)。此函数由其他图形 API 内部使用。

#### setPixel(unsigned int poX, unsigned int poY,unsigned int color) ####

将 (poX,poY) 像素设置为颜色 color。此函数由其他图形 API 内部使用。

### 线条 ###

#### drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1,unsigned int color) ####

从像素 (x0,y0) 到像素 (x1,y1) 绘制一条颜色为 color 的线。

#### drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color) ####

从像素 (poX,poY) 开始绘制一条长度为 length、颜色为 color 的水平线。

#### drawHorizontalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color) ####

从像素 (poX,poY) 开始绘制一条长度为 length、颜色为 color 的垂直线。

### 矩形 ###

#### drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width,unsigned int color) ####

从 (poX,poY) 开始绘制一个长度为 length、宽度为 width、颜色为 color 的矩形。

#### fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color) ####

从像素 (poX,poY) 开始绘制一个长度为 length、宽度为 width、颜色为 color 的填充矩形。

### 圆形 ###

#### drawCircle(int poX, int poY, int r,unsigned int color) ####

在 (poX,poY) 处绘制一个半径为 radius、颜色为 color 的圆。

#### fillCircle(int poX, int poY, int r,unsigned int color) ####

在 (poX,poY) 处绘制一个半径为 radius、颜色为 color 的填充圆。

### 文本 ###

#### drawChar(unsigned char ascii,unsigned int poX, unsigned int poY,unsigned int size, unsigned int fgcolor) ####

从 (poX,poY) 开始使用内置字体绘制一个字符，字体大小为 size，颜色为 fgcolor。此函数由 drawString() 函数使用。

#### drawString(char *string,unsigned int poX, unsigned int poY,unsigned int size,unsigned int fgcolor) ####

从 (poX,poY) 开始使用内置字体绘制一串文本，字体大小为 size，颜色为 fgcolor。

### 触摸屏编程 ###

---

TFT Touch Shield 使用 [Adafruit Touch Screen Library](https://github.com/adafruit/Touch-Screen-Library)。要了解电阻式触摸屏背后的原理，请参考[外部链接](/cn/2.8inch_TFT_Touch_Shield_v2.0#resources)。简而言之，4 线电阻式触摸屏为 X 和 Y 轴各提供一个分压器。通过为每个轴施加适当的电压并扫描 ADC 值，可以检测到触摸的位置。这些值总是容易受到噪声影响。因此使用数字滤波器。

- 要使用 TouchScreen 库，首先创建一个 TouchScreen 对象：

`
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
`

其中 XP、YP、XM 和 YM 是连接到触摸屏 XPlus、YPlus、XMinus 和 YMinus 引脚的 ADC 端口引脚。300 是 X 板之间的电阻。

- 使用以下方式读取原始 ADC 值：

`
Point p = ts.getPoint();
`

- 原始 ADC 值必须转换为像素坐标。这通过 map 函数完成。这个映射在 v0.9 和 v1.0 中有所不同。演示应用程序已经处理了这个映射。

`
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
`

- 以下示例演示了 TouchScreen 库的使用。这也可以用来校准触摸屏坐标。

- 编译并上传示例代码。

- 打开串口监视器并触摸屏幕上显示的点。

- 查看显示的 X 和 Y 值是否正确。如果不正确，我们需要重新校准触摸屏坐标。

#### 如何校准触摸屏？ ####

- 参数 `TS_MINX, TS_MAXX, TS_MINY 和 TS_MAXY` 实际上决定了触摸屏的极端边界，实际上形成了校准参数。

- 分配给这些变量的值是当我们触摸触摸屏的极端对角端点时测量的 ADC 值（即原始 X，原始 Y）。

- 触摸点 (0,0) 和 (239,319) 并记录原始 X 和原始 Y 值。为了更好的精度，多次尝试并找到正确的值。

- **TS_MINX** 对应于 X = 0 时的 ADC 值；

- **TS_MINY** 对应于 Y = 0 时的 ADC 值；

- **TS_MAXX** 对应于 X = 240 -1 即 239 时的 ADC 值；

- **TS_MAXY** 对应于 Y = 320 -1 即 319 时的 ADC 值；

- 在示例代码中更改这些参数，重新编译并上传到 Arduino。

- 如果仍然无法获得准确的值，请重复上述步骤。

#### 触摸屏演示示例 ####

```cpp
// 绘画应用程序 - 演示TFT和触摸屏功能
//  此库是自由软件；您可以重新分发和/或
//  根据自由软件基金会发布的GNU较宽松通用公共
//  许可证的条款修改它；许可证版本2.1，
//  或（根据您的选择）任何更高版本。
//
//  分发此库是希望它有用，
//  但不提供任何保证；甚至不提供适销性或
//  特定用途适用性的暗示保证。请参阅GNU
//  较宽松通用公共许可证了解更多详情。
//
//  您应该已经收到GNU较宽松通用公共
//  许可证的副本；如果没有，请写信给自由软件
//  基金会，地址：51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega
#define YP A2   // 必须是模拟引脚，使用"An"标记！
#define XM A1   // 必须是模拟引脚，使用"An"标记！
#define YM 54   // 可以是数字引脚，这是A0
#define XP 57   // 可以是数字引脚，这是A3

#elif defined(__AVR_ATmega32U4__) // leonardo
#define YP A2   // 必须是模拟引脚，使用"An"标记！
#define XM A1   // 必须是模拟引脚，使用"An"标记！
#define YM 18   // 可以是数字引脚，这是A0
#define XP 21   // 可以是数字引脚，这是A3

#else //168, 328, 其他型号
#define YP A2   // 必须是模拟引脚，使用"An"标记！
#define XM A1   // 必须是模拟引脚，使用"An"标记！
#define YM 14   // 可以是数字引脚，这是A0
#define XP 17   // 可以是数字引脚，这是A3

#endif

//测量的(0,0)和(210-1,320-1)的ADC值
//TS_MINX对应X = 0时的ADC值
//TS_MINY对应Y = 0时的ADC值
//TS_MAXX对应X = 240 -1时的ADC值
//TS_MAXY对应Y = 320 -1时的ADC值

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  //画笔颜色

// 为了获得更好的压力精度，我们需要知道
// X+和X-之间的电阻 使用任何万用表读取它
// 2.8英寸TFT触摸屏在X板上有300欧姆

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); //初始化触摸屏端口引脚

void setup()
{

    Tft.init();  //初始化TFT库
    pinMode(0,OUTPUT);
    //绘制调色板
    Tft.fillRectangle(0,0,30,10,BLACK);
    Tft.fillRectangle(30,0,30,10,RED);
    Tft.fillRectangle(60,0,30,10,GREEN);
    Tft.fillRectangle(90,0,30,10,BLUE);
    Tft.fillRectangle(120,0,30,10,CYAN);
    Tft.fillRectangle(150,0,30,10,YELLOW);
    Tft.fillRectangle(180,0,30,10,WHITE);
    Tft.fillRectangle(210,0,30,10,GRAY1);

}

void loop()
{

    // 点对象保存x y和z坐标。
    Point p = ts.getPoint();

    //将读取的ADC值映射到像素坐标

    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // 我们有一些最小压力值被认为是'有效的'
    // 压力为0意味着没有按压！

    if (p.z > ts.pressureThreshhold) {


        // 检测画笔颜色变化
        if(p.y < 15)
        {
            if(p.x >= 0 && p.x < 30)
            {
                color = BLACK;
            }
            if(p.x >= 30 && p.x < 60)
            {
                color = RED;
                digitalWrite(0,HIGH);
            }
            if(p.x >= 60 && p.x < 90)
            {
                color = GREEN;
            }
            if(p.x >= 90 && p.x < 110)
            {
                color = BLUE;
                digitalWrite(0,LOW);
            }
            if(p.x >= 120 && p.x < 150)
            {
                color = CYAN;
            }
            if(p.x >= 150 && p.x < 180)
            {
                color = YELLOW;
            }
            if(p.x >= 180 && p.x < 210)
            {
                color = WHITE;
            }
            if(p.x >= 210 && p.x < 240)
            {
                color = GRAY1;
            }
        }
        else
        {
            Tft.fillCircle(p.x,p.y,2,color);
        }
    }
}
```

### 演示代码显示 ###

- 将 TFT 触摸屏扩展板插入 Seeeduino，如下所示。

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/DemoShow.JPG)
TFT 触摸屏扩展板连接到 Seeeduino

## 版本跟踪 ##

|版本| 描述 |发布日期|
|---|---|---|
|v1.1| 更改图片和演示代码组合 |2011年11月22日|
|v1.0 |使用基于 SPFD5408A 的 TFT 替代基于 ST7781R 驱动芯片的 TFT| 2011年9月12日|
|v0.9b |初始公开发布| 2011年6月24日|

## 支持 ##

[在 Seeed 论坛提问](https://www.seeedstudio.com/forum)。

## TFT 触摸屏扩展板 v1.0 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## TFT 触摸屏扩展板 v0.9b 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/cn/images/1/17/2.8_TFT_Touch_Shield_v0.9b_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[库文件]**[TFT 和触摸屏库文件](https://www.seeedstudio.com/wiki/images/2/29/Tft_touch_libraries_11252011.zip)
- **[库文件]**[适用于 Arduino 1.0 的 TFT 和触摸屏库文件 20120628](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/res/TFT_TouchScreen_for_Arduino_1.0.zip)
- **[演示]**[TFT BMP 演示](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip)。
- **[Eagle]**[TFT 触摸屏扩展板 v1.0 原理图和板文件 - Eagle 格式](https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[Eagle]**[TFT 触摸屏扩展板 v0.9b 原理图和板文件 - Eagle 格式](https://wiki.seeedstudio.com/cn/images/1/17/2.8_TFT_Touch_Shield_v0.9b_EagleFiles.zip)
- **[数据手册]**[FGD280E3715V1 - TFT 触摸屏数据手册](https://wiki.seeedstudio.com/cn/images/7/75/FGD280E3715V1_8bit.pdf)
- **[数据手册]**[ST7781R 数据手册](https://wiki.seeedstudio.com/cn/images/4/4e/ST7781R_datasheet.pdf)

## 如何购买 ##

点击这里购买：[2.8 TFT 触摸屏扩展板](https://www.seeedstudio.com/depot/28-tft-touch-shield-p-864.html?cPath=132_134)

## 另请参阅 ##

- [Seeeduino ADK 主板](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)
- [Seeeduino Mega](https://seeeddoc.github.io/Seeeduino_Mega/)

## 许可证 ##

本文档采用知识共享[署名-相同方式共享许可证 3.0](http://creativecommons.org/licenses/by-sa/3.0/)授权。源代码和库文件采用各种开源许可证授权。详情请参阅源代码文件。

## 外部链接 ##

- [ATMEL - 四线和五线触摸屏应用笔记](http://www.adafruit.com/datasheets/AVR341.pdf)
- [TI - 使用电阻式触摸屏](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- [SD 卡库文件](https://github.com/adafruit/SD)。

## 相关项目 ##

很遗憾，我们在 [Recipe](https://www.seeedstudio.com/recipe/) 中还没有任何关于 TFT Touch Shield V1.0 的演示。

发布您关于 TFT Touch Shield V1.0 的精彩项目，赢取 $100 优惠券！请随时联系我们：**recipe@seeed.cc**

这里我们介绍一些关于 [3Dpad 无触摸手势控制器 Arduino 扩展板](https://www.seeedstudio.com/depot/3Dpad-touchless-gesture-controller-Arduino-shield-p-2332.html) 的项目

![](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/Seeed-recipe-3Dpad_inchAir_controlinch_MIDI_controller.jpg)

这个演示是一个由 Dpad 无触摸手势控制器 Arduino 扩展板制作的 3Dpad "空中控制" MIDI 控制器。

[我想制作它](https://www.seeedstudio.com/recipe/229-3dpad-quot-air-control-quot-midi-controller.html)。

### 与我们分享您的精彩项目 ###

天生具有制作和分享的精神，这就是我们相信成就创客的品质。

也正因为如此，开源社区才能像今天这样繁荣。

无论您是什么身份，制作了什么作品，黑客、创客、艺术家还是工程师，这都不重要。

只要您开始与他人分享您的作品，您就成为了开源社区的一部分，您就在做出自己的贡献。

现在在 [Recipe](https://www.seeedstudio.com/recipe/) 上与我们分享您的精彩项目，赢得成为 Seeed 核心用户的机会。

- 核心用户是那些对 Seeed 产品表现出高度兴趣并在 Recipe 上做出重要贡献的用户。

- 我们与核心用户在新产品开发方面进行合作，换句话说，核心用户将有机会在 Seeed 任何新产品正式发布之前体验它们，作为回报，我们期望他们提供有价值的反馈来帮助我们改进产品性能和用户体验。在大多数情况下，当我们的核心用户有一些制作东西的好想法时，我们会提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

获取更多关于核心用户的信息，请发邮件至：**recipe@seeed.cc**

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