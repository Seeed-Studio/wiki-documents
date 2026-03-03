---
description: Rainbowduino_v3.0
title: Rainbowduino v3.0
keywords:
- Rainbowduino_v3.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Rainbowduino_v3.0
last_update:
  date: 01/20/2023
  author: Matthew
---

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0.jpg)

Rainbowduino板是一款兼容Arduino的控制板，配备专业的多路复用LED驱动器。它可以驱动**8x8 RGB LED矩阵**或**4x4x4 RGB LED立方体**，采用共阳极模式。Rainbowduino v3.0使用了两个**MY9221**芯片，这是一种**12通道**（R/G/B x 4）恒流自适应脉冲密度调制（**APDM**）。Rainbowduino v3.0支持通过I2C接口级联更多类似的板。

**Rainbowduino v3.0**预装了Arduino引导加载程序，这使得可以使用Arduino IDE轻松编写程序。与其他LED驱动器不同，它内置了USB到UART（FT232RL）模块，用于编程。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328.html?queryID=bc1228bcd9b9d4b2534accb940b86bea&objectID=2019&indexName=bazaar_retailer_products)

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0b_board_bottom.png)
**Rainbowduino v3.0**底部

功能特点
--------

| 参数                           | 值                                      |
|--------------------------------|-----------------------------------------|
| 恒流输出                       | 20.8mA                                  |
| 引脚排针                       | 2 x 16，用于连接多路复用LED             |
| 最大LED驱动能力                | 192（即8x8x3）                          |
| 支持的LED显示                  | 4x4x4 RGB立方体 & 8x8 RGB LED矩阵       |
| USB到UART                      | FT232RL                                 |
| 直流供电                       | USB供电或外部6V~12V直流电源             |
| 内置电压调节器                 | 5V / 1A                                 |

应用场景
--------

- 通用LED驱动器
  - 连接4x4x4 RGB立方体
  - 连接8x8 RGB矩阵
- 通过级联多个**Rainbowduino v3.0**创建LED标志牌

使用方法
--------

### 硬件设置

:::note
在编程Rainbowduino v3.0时，请始终将滑动开关设置为<b>USB</b>位置。将滑动开关设置为<b>HOST</b>位置会使板载FT232充当UartSBee（此功能在Rainbowduino v3.0正常操作中不需要）。
:::

连接到LED矩阵非常简单。

- **连接RGB LED矩阵**
    将RGB矩阵的2x16公针排针连接到Rainbowduino，如下图所示（查看RGB矩阵背面，靠近“2088RGB”文字标记的16公针排针应连接到Rainbowduino的DRIVE - GREEN - DRIVE排针）。

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_v3.0_with_LED_Matrix.jpg)

**Rainbowduino v3.0连接到8x8 RGB LED矩阵**

或者

- **连接RGB LED立方体**
    将Rainbow Cube Kit的2x16公针排针连接到Rainbowduino，如下图所示。

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_1.jpg)

**2x16排针**定位

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_2.jpg)

**Rainbowduino**正确连接到**Rainbow Cube Kit**

- 连接USB线到Rainbowduino进行编程。

### 软件设置

- 在Arduino IDE中 --> 工具 --> 板菜单，选择“Duemilanove or Diecimila”。
- 从资源部分下载并安装Rainbowduino 3.0库。

### 编程

#### 使用RGB LED立方体

------------------------------------------------------------------------

<!-- ![](https://www.seeedstudio.com/depot/images/cubeani.gif) -->
让我们从一个简单的RGB LED立方体示例开始：

- 从资源部分下载Rainbowduino v3.0库。
- 打开Cube1.ino示例程序（其副本如下所示）：
- 编译并上传程序，其副本如下所示：

```
/*
 Rainbowduino v3.0库示例：Cube1
 
 在3D平面（4x4x4立方体）上设置像素
*/
 
#include <Rainbowduino.h>
 
void setup()
{
  Rb.init(); //初始化Rainbowduino驱动
}
 
void loop()
{
  //设置(Z,X,Y):(0,0,0)像素为蓝色
  Rb.setPixelZXY(0,0,0,0x0000FF); //使用24位RGB颜色代码
 
  //设置(Z,X,Y):(0,3,0)像素为红色
  Rb.setPixelZXY(0,3,0,0xFF,0,0); //使用R、G和B颜色字节
 
  //设置(Z,X,Y):(3,0,3)像素为绿色
  Rb.setPixelZXY(3,0,3,0x00FF00); //使用24位RGB颜色代码
}
```

输出：

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube1.jpg)

Cube1.pde演示

Rainbowduino v3.0库提供了许多用于RGB LED立方体的API，以下部分列出了这些API并进行了描述：

| API                                                                                                                                     | 描述                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Rb.init(void)**                                                                                                                       | 初始化Rainbowduino驱动，应放置在setup()中                                      |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)** | 通过指定每个通道（颜色）为8位数字设置像素(z,x,y)。                            |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, uint32_t colorRGB)**                                              | 通过指定24位RGB颜色代码设置像素(z,x,y)。                                      |
| **Rb.blankDisplay(void)**                                                                                                               | 此函数用于清空所有LED。                                                       |

**setPixelZXY() 示例**

- 为了理解 (Z,X,Y) 像素寻址，让我们看另一个例子。在此示例中，第 0 层（即 Z-0）被涂成绿色，第 3 层被涂成蓝色。

```
/*
 Rainbowduino v3.0 库示例: Cube2

 在 3D 平面上设置像素 (4x4x4 立方体)
*/

#include <Rainbowduino.h>

void setup()
{
  Rb.init(); // 初始化 Rainbowduino 驱动
}

unsigned int z,x,y;

void loop()
{
  for(x=0;x<4;x++)
  {
    for(y=0;y<4;y++)
    {
     // 将第 0 层涂成绿色
     Rb.setPixelZXY(0,x,y,0x00FF00); // 使用 24 位 RGB 颜色代码
    }
  }  

  for(x=0;x<4;x++)
  {
    for(y=0;y<4;y++)
    {
     // 将第 3 层涂成蓝色
     Rb.setPixelZXY(3,x,y,0x0000FF); // 使用 24 位 RGB 颜色代码
    }
  }
}
```

输出：

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube2.jpg)

Cube2.pde 示例

**setPixelZXY() 随机颜色示例**

- 在此示例中，所有 LED 都被涂上随机颜色。经过五秒的延迟后，整个立方体将重新涂上随机颜色。

```
    /*
     Rainbowduino v3.0 库示例: Cube3

     在 3D 平面上设置像素 (4x4x4 立方体)
    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init(); // 初始化 Rainbowduino 驱动
    }

    unsigned int z,x,y;

    void loop()
    {
     for(z=0;z<4;z++)
     { 
      for(x=0;x<4;x++)
      {
        for(y=0;y<4;y++)
        {
         // 涂上随机颜色
         Rb.setPixelZXY(z,x,y,random(0xFF),random(0xFF),random(0xFF)); // 使用 R、G 和 B 颜色字节
        }
      }
     }
    delay(5000);
    Rb.blankDisplay(); // 清除 LED（全部变为空白）
    }
```

输出：

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube3.jpg)

Cube3.pde 示例

**夜灯 / 氛围灯示例**

```
/*

 Rainbowduino v3.0 库示例: 氛围灯

*/

#include <Rainbowduino.h>


// HSV 转 RGB 数组

unsigned char RED[64] = {255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,171,154,137,119,102,85,
68,51,34,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,35,52};

unsigned char GREEN[64] = {0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,
255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,170,154,136,120,102,86,68,52,34,18,0,0,0,0};

unsigned char BLUE[64] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,34,52,68,86,102,120,136,154,170,188,
204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255};

void setup()
{
  Rb.init(); // 初始化 Rainbowduino 驱动
}

unsigned int z,x,y;
void loop()
{

for(z=0; z<64 ;z++)
{
 for(x=0;x<8;x++)
 {
    for(y=0;y<8;y++)
    {
     // 涂上随机颜色
     //Rb.setPixelZXY(z,x,y,RED[i],GREEN[i],BLUE[i]); // 使用 R、G 和 B 颜色字节
     Rb.setPixelXY(x,y,RED[z],GREEN[z],BLUE[z]); // 使用 R、G 和 B 颜色字节
    }
 }
 delay(100);
}

for(z=63; z > 0 ;z--)
{
 for(x=0;x<8;x++)
 {
    for(y=0;y<8;y++)
    {
     // 涂上随机颜色
     //Rb.setPixelZXY(z,x,y,RED[i],GREEN[i],BLUE[i]); // 使用 R、G 和 B 颜色字节
     Rb.setPixelXY(x,y,RED[z],GREEN[z],BLUE[z]); // 使用 R、G 和 B 颜色字节
    }
 }
 delay(100);
}

}
```

**等离子立方体**

```
/*

 Rainbowduino v3.0 库示例: 3D 等离子

*/

#include <Rainbowduino.h>

// HSV 转 RGB 数组

unsigned char RED[64] = {255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,171,154,137,119,102,85,
68,51,34,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,35,52};

unsigned char GREEN[64] = {0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,
255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,170,154,136,120,102,86,68,52,34,18,0,0,0,0};

unsigned char BLUE[64] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,34,52,68,86,102,120,136,154,170,188,
204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255};

unsigned char plasma[4][4][4];

void setup()
{
  Rb.init(); // 初始化 Rainbowduino 驱动

  for(unsigned char x = 0; x < 4; x++)
  {
    for(unsigned char y = 0; y < 4; y++)
    {
      for(unsigned char z = 0; z < 4; z++)
       {
        int color = int(32.0 + (32.0 * sin(x / 1.0))+ 32.0 + (32.0 * sin(y / 1.0)) + 32.0 + (32.0 * sin(z / 1.0))) / 3;
        plasma[x][y][z] = color;      
       }   
    }
  }
}

unsigned char x,y,z,colorshift=0;

void loop()
{
for(x=0;x<4;x++)  
{
 for(y=0;y<4;y++)  
 {
  for(z=0;z<4;z++)
    {
     Rb.setPixelZXY(z,x,y,(RED[plasma[x][y][z] + colorshift]) % 256,(GREEN[plasma[x][y][z] + colorshift]) % 256,(BLUE[plasma[x][y][z] + colorshift]) % 256); // 使用 R、G 和 B 颜色字节
    }
 }
}
 delay(100);
 colorshift=  colorshift + 1;
}
```

输出：

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Plasma_demo.jpg)

PlasmaCube.pde 示例

#### 使用 RGB LED 矩阵

Rainbowduino v3.0 库提供了许多用于 RGB LED 矩阵的 API。以下部分列出了这些 API 并进行了描述：

| API                                                                                                                   | 描述                                                                         |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Rb.init(void)**                                                                                                     | 初始化 Rainbowduino 驱动，应放置在 setup() 中                              |
| **Rb.setPixelXY(unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)** | 通过指定每个通道（颜色）为 8 位数字设置像素 (x,y)。                        |
| **Rb.setPixelXY(unsigned char x, unsigned char y, uint32_t colorRGB)**                                                | 通过指定 24 位 RGB 颜色代码设置像素 (x,y)。                                |
| **Rb.blankDisplay(void)**                                                                                             | 此函数用于清空所有 LED。                                                    |
| **Rb.drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, uint32_t colorRGB)**                           | 在 (poX,poY) 绘制一个 uint32_t 颜色的 ASCII 字符。                         |
| **Rb.drawCircle(int poX, int poY, int r, uint32_t color)**                                                            | 在 (poX,poY) 绘制一个半径为 r 的 uint32_t 颜色圆。                         |
| **Rb.fillCircle(int poX, int poY, int r, uint32_t color)**                                                            | 在 (poX,poY) 绘制一个填充的半径为 r 的 uint32_t 颜色圆。                   |
| **Rb.drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1, uint32_t color)**                      | 从 (x0,y0) 到 (x1,y1) 绘制一条线。                                         |
| **Rb.drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length, uint32_t color)**                       | 从 (poX,poY) 绘制一条长度为 length 像素的水平线。                          |
| **Rb.drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width, uint32_t color)**      | 从 (poX,poY) 绘制一个长度和宽度为 length 和 width 像素的矩形线。           |
| **Rb.fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, uint32_t color)**     | 从 (poX,poY) 绘制一个填充的长度和宽度为 length 和 width 像素的矩形。       |

**形状演示**

```
    /*
     Rainbowduino v3.0 库示例：

     在二维平面（8x8矩阵）上绘制形状

    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init();
    }

    unsigned char x,y,z;

    void loop()
    {

         Rb.drawCircle(3, 4, 3, 0xFF0000); // 在 (3,4) 位置绘制一个半径为3的红色圆。
         delay(1000);
         Rb.blankDisplay();
      
         Rb.fillCircle(3, 4, 2, 0x0000FF); // 在 (3,4) 位置绘制一个半径为2的填充蓝色圆。
         delay(1000);
         Rb.blankDisplay();

         Rb.drawLine(0, 0, 7, 7, 0x00FF00); // 从 (0,0) 到 (7,7) 绘制一条线。
         delay(1000);
         Rb.blankDisplay();

         Rb.drawVerticalLine(0, 0, 7, random(0xFFFFFF)); // 从 (0,0) 开始绘制长度为7像素的垂直线。
         delay(1000);
         Rb.blankDisplay();

         Rb.drawHorizontalLine(0, 0, 7, random(0xFFFFFF)); // 从 (0,0) 开始绘制长度为7像素的水平线。
         delay(1000);
         Rb.blankDisplay();

         Rb.drawRectangle(0, 0, 4, 6, random(0xFFFFFF)); // 从 (0,0) 开始绘制一个长为4像素、宽为6像素的矩形。
         delay(1000);
         Rb.blankDisplay();

         Rb.fillRectangle(0, 0, 7, 7, random(0xFFFFFF)); // 从 (0,0) 开始绘制一个填充的矩形，长宽均为7像素。
         delay(1000);
         Rb.blankDisplay();
      
    }
```

输出：

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Shapes.jpg)

形状

**drawChar 演示**

```
    /*
     Rainbowduino v3.0 库示例：

     在二维平面（8x8矩阵）上打印字符

    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init();
    }

    unsigned char x,y,z;

    void loop()
    {

      for(int i= 0x20; i<=0x7E; i++) // 生成所有可打印字符的ASCII值
      {
         Rb.drawChar(i,0,1,random(0xFFFFFF)); 
         delay(500);
         Rb.blankDisplay();
      }
      
    }
```

输出：

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/CharE.jpg)

## 在线原理图查看器

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip"></div>

资源
---------

- [Rainbowduino V3.0 Arduino IDE 1.0及以上版本库](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_for_Arduino1.0.zip)
- [Rainbowduino3.0 SnakeGame Arduino 1.0库](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/SnakeGame20120601.zip)
- [Rainbowduino V3.0 Eagle格式原理图和布局](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip)
- [Rainbowduino V3.0 PDF格式原理图](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_V3.0b.pdf)
- [MY9221 LED驱动器数据手册](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/MY9221_DS_1.0.pdf)

**其他相关产品、资源和项目：**

- [Rainbow Cube Kit（组装版）](https://www.seeedstudio.com/depot/rainbow-cube-kit-assembled-p-998.html?cPath=138)
- [Rainbow Cube Kit - RGB 4X4X4](https://www.seeedstudio.com/depot/rainbow-cube-kit-rgb-4x4x4-rainbowduino-compatible-p-596.html?cPath=138)
- [60mm方形8*8 LED矩阵 - 超亮RGB](https://www.seeedstudio.com/depot/60mm-square-88-led-matrix-super-bright-rgb-p-113.html?cPath=163_165)

<!-- 此Markdown文件来源于 https://www.seeedstudio.com/wiki/Rainbowduino_v3.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>