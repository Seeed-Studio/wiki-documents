---
title: 2.8英寸TFT触摸屏盾牌 V1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/2.8inch-TFT_Touch_Shield_V1.0/
slug: /cn/2.8inch-TFT_Touch_Shield_V1.0
last_update:
  date: 02/03/2022
  author: gunengyu
---

2.8英寸TFT触摸屏盾牌是一款兼容Arduino / Arduino Mega的多彩TFT显示屏，配备4线电阻式触摸屏。它包括一个兼容Arduino盾牌的脚位设计以便连接。TFT驱动基于专业驱动IC，采用8位数据和4位控制接口。

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/Tft.jpg)

##   特性   ##

- 兼容Arduino/Seeeduino、Arduino Mega和Seeeduino Mega

- 2.8英寸QVGA显示屏

- 电阻式触摸屏

##   规格   ##

<table cellspacing="0" width="80%">
<tr>
<th scope="col">项目</th>
<th scope="col">最小值</th>
<th scope="col">典型值</th>
<th scope="col">最大值</th>
<th scope="col">单位</th>
</tr>
<tr>
<th scope="row">电压</th>
<td>4.5</td>
<td>5</td>
<td>5.5</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">电流</th>
<td>/</td>
<td>/</td>
<td>250</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">LCD面板尺寸</th>
<td colspan="3">2.8</td>
<td>英寸</td>
</tr>
<tr>
<th scope="row">视角</th>
<td colspan="3">60~120</td>
<td>度</td>
</tr>
<tr>
<th scope="row">分辨率</th>
<td colspan="3">320x240</td>
<td>/</td>
</tr>
<tr>
<th scope="row">LCD颜色</th>
<td colspan="3">65k</td>
<td>/</td>
</tr>
<tr>
<th scope="row">背光类型</th>
<td colspan="3">LED</td>
<td>/</td>
</tr>
<tr>
<th scope="row">LCD驱动IC</th>
<td colspan="3">ST7781R</td>
<td>/</td>
</tr>
<tr>
<th scope="row">接口类型</th>
<td colspan="3">10±2</td>
<td>g</td>
</tr>
<tr>
<th scope="row">接口类型</th>
<td colspan="3">并口（8位数据 + 4位控制）</td>
<td>/</td>
</tr>
<tr>
<th scope="row">触摸屏</th>
<td colspan="3">4线电阻式触摸屏</td>
<td>/</td>
</tr>
<tr>
<th scope="row">活动区域</th>
<td colspan="3">43.2*57.3</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">ESD接触放电</th>
<td colspan="3">±4</td>
<td>KV</td>
</tr>
<tr>
<th scope="row">ESD空气放电</th>
<td colspan="3">±8</td>
<td>KV</td>
</tr>
<tr>
<th scope="row">尺寸</th>
<td colspan="3">72.5x54.7x18</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">重量</th>
<td colspan="3">24±2</td>
<td>g</td>
</tr>
</table>

**注意事项**

- 请勿使模块受到机械冲击或因掉落而受损。

- 请勿对显示屏表面或相邻区域施加过大的压力，否则可能导致颜色调变化。

##   Arduino上的引脚使用   ##

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg)
**D0** - 未使用。

**D1** - 未使用。

**D2** - LCD数据位8。

**D3** - LCD数据位9。

**D4** - LCD数据位10。

**D5** - LCD数据位11。

**D6** - LCD数据位12。

**D7** - LCD数据位13。

**D8** - LCD数据位14。

**D9** - LCD数据位15。

**D10** - LCD CS引脚，低电平有效。

**D11** - LCD RS引脚。

**D12** - LCD WR引脚。

**D13** - LCD RD引脚。

**D14(A0)** - 触摸屏Y-。

**D15(A1)** - 触摸屏X-。

**D16(A2)** - 触摸屏Y+。

**D17(A3)** - 触摸屏X+。

**D18(A4)** - 未使用。

**D19(A5)** - 未使用。

## 使用说明 ##

### 硬件安装 ###

- 按如下所示将 TFT 触摸屏扩展板插入 Seeeduino。

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg)

### TFT 编程 ###

**TFT** 库提供了以下应用程序接口（**API**）。该库直接访问 PORT 寄存器，而不是使用 Arduino 的 API。这是为了提高 MCU 和 TFT 之间的通信速度。目前，该库支持 Arduino、Arduino Mega（1280 或 2560）以及与 Seeeduino ADK 主板兼容的开发板。在 Mega 上，TFT 的 8 位数据端口分布在属于不同端口的不同引脚上。与 Arduino 相比，这会降低图形绘制的速度。端口引脚的选择完全基于 Arduino / Mega 的端口引脚排列。

### 通用功能 ###

---

**paintScreenBlack(void)**

- TFT RAM 只能在显示关闭模式下初始化，因此此功能仅用于用黑色清屏。

**setXY(unsigned int poX, unsigned int poY)**

- 将光标位置设置为 (poX, poY)。此功能由其他图形 API 内部使用。

**setPixel(unsigned int poX, unsigned int poY, unsigned int color)**

- 将 (poX, poY) 像素设置为颜色 color。此功能由其他图形 API 内部使用。

### 线条 ###

---

**drawLine(unsigned int x0, unsigned int y0, unsigned int x1, unsigned int y1, unsigned int color)**

- 从像素 (x0, y0) 到像素 (x1, y1) 绘制一条颜色为 color 的线。

**drawVerticalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color)**

- 从像素 (poX, poY) 开始绘制长度为 length 的水平线，颜色为 color。

**drawHorizontalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color)**

- 从像素 (poX, poY) 开始绘制长度为 length 的垂直线，颜色为 color。

### 矩形 ###

---

**drawRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- 从 (poX, poY) 开始绘制一个长度为 length、宽度为 width、颜色为 **color** 的矩形。

**fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- 从像素 (poX, poY) 开始绘制一个填充的矩形，长度为 length，宽度为 width，颜色为 **color**。

### 圆形 ###

---

**drawCircle(int poX, int poY, int r, unsigned int color)**

- 在 (poX, poY) 绘制一个半径为 **r**、颜色为 **color** 的圆。

**fillCircle(int poX, int poY, int r, unsigned int color)**

- 在 (poX, poY) 绘制一个填充的圆，半径为 **r**，颜色为 **color**。

### 文本 ###

---

**drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor)**

- 从 (poX, poY) 开始绘制一个字符，使用内置字体，大小为 **size**，颜色为 fgcolor。此功能由 drawString() 函数使用。

**drawString(char *string, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor)**

- 从 (poX, poY) 开始绘制一段文本，使用内置字体，大小为 **size**，颜色为 fgcolor。

### 触摸屏编程 ###

---

TFT 触摸屏扩展板使用 [Adafruit 触摸屏库](https://github.com/adafruit/Touch-Screen-Library)。要了解电阻式触摸屏的原理，请参考 [外部链接](https://wiki.seeedstudio.com/cn/2.8inch-TFT_Touch_Shield_V1.0/)。简而言之，4 线电阻式触摸屏为 X 和 Y 轴分别提供两个电压分压器。通过为每个轴施加适当的电压并扫描 ADC 值，可以检测触摸的位置。这些值总是容易受到噪声影响，因此使用了数字滤波器。

- 要使用 TouchScreen 库，首先创建一个 TouchScreen 对象：

`
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
`

其中 XP、YP、XM 和 YM 是连接到触摸屏的 XPlus、YPlus、XMinus 和 YMinus 引脚的 ADC 端口引脚。300 是 X 板之间的电阻。

- 使用以下方法读取原始 ADC 值：

`
Point p = ts.getPoint();
`

- 原始 ADC 值需要转换为像素坐标。这可以通过 map 函数完成。此映射在 v0.9 和 v1.0 中有所不同。演示应用程序已经处理了此映射。

`
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
`

- 以下示例代码演示了如何使用 TouchScreen 库。这也可以用于校准触摸屏坐标。

- 编译并上传代码。

- 打开串口监视器并触摸屏幕上显示的点。

- 检查显示的 X 和 Y 值是否正确。如果不正确，则需要重新校准触摸屏坐标。

#### 如何校准触摸屏？ ####

- 参数 `TS_MINX, TS_MAXX, TS_MINY 和 TS_MAXY` 实际上决定了触摸屏的极限，并形成校准参数。

- 分配给这些变量的值是触摸屏对角线极限点（即原始 X 和原始 Y）时测量的 ADC 值。

- 触摸点 (0,0) 和 (239,319)，记录原始 X 和原始 Y 值。为了更高的准确性，请多次尝试并找到正确的值。

- TS_MINX 对应于 X = 0 时的 ADC 值；

- TS_MINY 对应于 Y = 0 时的 ADC 值；

- TS_MAXX 对应于 X = 240 -1 即 239 时的 ADC 值；

- TS_MAXY 对应于 Y = 320 -1 即 319 时的 ADC 值；

- 在代码中更改这些参数，重新编译并上传到 Arduino。

- 如果仍然无法获得准确的值，请重复上述步骤。

#### 触摸屏演示代码 ####

```
// Paint application - 演示 TFT 和触摸屏功能
// 此库是免费软件；您可以根据 GNU 较小通用公共许可证的条款
// 重新分发和/或修改它；许可证版本为 2.1 或更高版本。
//
// 此库分发的目的是希望它能有用，但不提供任何保证；
// 包括但不限于适销性或特定用途的适用性。
// 有关详细信息，请参阅 GNU 较小通用公共许可证。
//
// 您应该已经收到此库的 GNU 较小通用公共许可证副本；
// 如果没有，请联系：Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // Mega
#define YP A2   // 必须是模拟引脚，使用 "An" 表示法！
#define XM A1   // 必须是模拟引脚，使用 "An" 表示法！
#define YM 54   // 可以是数字引脚，这是 A0
#define XP 57   // 可以是数字引脚，这是 A3

#elif defined(__AVR_ATmega32U4__) // Leonardo
#define YP A2   // 必须是模拟引脚，使用 "An" 表示法！
#define XM A1   // 必须是模拟引脚，使用 "An" 表示法！
#define YM 18   // 可以是数字引脚，这是 A0
#define XP 21   // 可以是数字引脚，这是 A3

#else // 168, 328, 其他
#define YP A2   // 必须是模拟引脚，使用 "An" 表示法！
#define XM A1   // 必须是模拟引脚，使用 "An" 表示法！
#define YM 14   // 可以是数字引脚，这是 A0
#define XP 17   // 可以是数字引脚，这是 A3

#endif

// 测量 (0,0) 和 (210-1,320-1) 的 ADC 值
// TS_MINX 对应于 X = 0 时的 ADC 值
// TS_MINY 对应于 Y = 0 时的 ADC 值
// TS_MAXX 对应于 X = 240 -1 时的 ADC 值
// TS_MAXY 对应于 Y = 320 -1 时的 ADC 值

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  // 画笔颜色

// 为了更好的压力精度，我们需要知道 X+ 和 X- 之间的电阻
// 使用任意万用表读取
// 2.8" TFT 触摸屏扩展板的 X 板电阻为 300 欧姆

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); // 初始化触摸屏端口引脚

void setup()
{

    Tft.init();  // 初始化 TFT 库
    pinMode(0,OUTPUT);
    // 绘制调色板
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

    // 一个点对象包含 x、y 和 z 坐标。
    Point p = ts.getPoint();

    // 将读取的 ADC 值映射到像素坐标

    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // 我们有一些最低压力值认为是“有效”的
    // 压力为 0 表示没有按压！

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

### 演示代码展示 ###

- 按如下所示将 TFT 触摸屏扩展板插入 Seeeduino。

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/DemoShow.JPG)
TFT 触摸屏扩展板连接到 Seeeduino

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[库文件]**[TFT 触摸屏扩展板库文件](https://github.com/Seeed-Studio/TFT_Touch_Shield_V1)
- **[Eagle]**[TFT 触摸屏扩展板 v1.0 原理图和布局](https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[PDF]**[TFT 触摸 PCB](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20PCB.pdf)
- **[PDF]**[TFT 触摸原理图](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20Sch.pdf)
- **[版本]**[Radio Shack 版本的 TFT 触摸屏扩展板 Eagle 文件](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/Schematic_for_Radio_Shack_.zip)
- **[数据手册]** [ST7781R](http://garden.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf) , [FGD280E3715V1_8bit](http://garden.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf)
- **[应用笔记]**[ATMEL - 四线和五线触摸屏应用笔记](http://www.adafruit.com/datasheets/AVR341.pdf)
- **[触摸屏]**[TI - 使用电阻式触摸屏](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- **[SD 卡]**[https://github.com/adafruit/SD](https://github.com/adafruit/SD)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>