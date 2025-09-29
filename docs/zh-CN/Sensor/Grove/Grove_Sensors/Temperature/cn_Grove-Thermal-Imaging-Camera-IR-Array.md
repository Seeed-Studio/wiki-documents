---
description: Grove - 热成像摄像头 IR-Array MLX90641
title: Grove - 热成像摄像头 IR-Array MLX90641
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Thermal-Imaging-Camera-IR-Array
last_update:
  date: 1/3/2023
  author: jianjing Huang
---


<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/grove-thermal-imaging-camera_-ir-array-mlx90641-55-front.jpg" />
  <figcaption><b /> <i>Grove - 热成像摄像头 / IR Array MLX90641</i></figcaption>
</div>

这款红外热成像摄像头搭载了一个16x12阵列的热传感器 **(MLX90641)**，可以远距离检测物体温度，中心区域精度为±1℃，平均精度为±1.5℃。为了便于获取热成像图像，采用I2C协议从摄像头获取低分辨率图像。该摄像头的FOV（视场角）为110°x75°，温度测量范围为-40℃至300℃。为了便于获取热成像图像，使用I2C协议从摄像头获取低分辨率图像。

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/90640.png" />
  <figcaption><b /> <i>Grove - 热成像摄像头 / IR Array MLX90640</i></figcaption>
</div>

而Grove - 热成像摄像头是一款热传感器 **(MLX90640)**，搭载32x24阵列的热传感器，可以在数英尺外检测物体温度，精度为±1.5℃，能够呈现动态热成像图像并检测-40℃~300℃范围内的环境温度。该摄像头有窄角/广角版本，FOV（视场角）分别为55°x35°/110°x75°。为了便于获取热成像图像，使用I2C协议从摄像头获取低分辨率图像。

## 版本

|版本|发布日期|订购|
|----|-----|------|
|Grove - 热成像摄像头 / IR Array **MLX90641** 110度 **[*新品*]**|2020年6月3日|[购买](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641-110-degree-p-4612.html)|
|Grove - 热成像摄像头 / IR Array **MLX90640** 110度|2019年11月12日|[购买](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|

:::note
本wiki适用于热成像摄像头IR Array MLX90641和MLX90640两种类型。
:::

## 特性

- 紧凑尺寸16x12像素红外热传感器阵列（MLX90641），32x24阵列像素红外热传感器阵列（MLX90640）
- 高FOV（视场角）110°x75°，可捕获更大区域
- 宽温度测量范围（-40℃~300℃）
- I2C Grove接口，便于与MCU通信
- 完全校准的红外阵列，设置方便

## 规格参数

|项目|Grove - 热成像摄像头 - MLX90640|Grove - 热成像摄像头 - MLX90641|
|----|-----|------|
|热传感器|32X24阵列 MLX90640|16x12阵列 MLX90641|
|工作电压|3.3V - 5V|3.3V - 5V
|电流消耗|~18mA|~18mA|
|FOV（视场角）|110°x75°|110°x75°|
|温度测量范围|-40°C - 300°C|-40°C - 300°C
|温度分辨率|± 1.5°C|± 1.5°C（中心区域±1℃）|
|刷新率|0.5Hz - 64Hz|0.5Hz - 64Hz|
|接口|I2C Grove接口|I2C Grove接口|
|I2C地址|0x33|0x33|

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

### 通过 Wio Terminal 入门

**所需材料**

|Wio Terminal|Grove - 热成像摄像头 / 红外阵列 MLX90641 110度|
|--------|---------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/wio.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/small.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641-110-degree-p-4612.html)|

#### 硬件连接

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/hardware-connection.jpg" /></div>

**步骤 1.** 通过 Grove 线缆将 Grove - 热成像摄像头连接到 Wio Terminal，同时通过 USB 线缆将 Wio Terminal 连接到 PC。

**步骤 2.** 下载[库文件](https://github.com/Seeed-Studio/Seeed_Arduino_MLX9064x/archive/master.zip)，复制整个 **Seeed_Arduino_MLX9064x** 文件并粘贴到您的 Arduino IDE 库文件夹中。

:::note
如果这是您第一次使用 Wio Terminal 并且不确定应该插入 Wio Terminal 的哪个接口，请参考 **[Wio Terminal 入门指南](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)**。
:::

**步骤 3.** 将下面的软件代码 1 复制到您的 Arduino IDE 中并上传，以通过**串口**显示可视化格式。

#### 可视化格式的输出结果

**软件代码 1**

```cpp
/*
    输出所有像素的温度读数，供 Processing 可视化工具读取
*/

#include <Wire.h>

#define USE_MLX90641

#ifndef USE_MLX90641
    #include "MLX90640_API.h"
#else
    #include "MLX90641_API.h"
#endif

#include "MLX9064X_I2C_Driver.h"

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  Serial
#else
    #define debug  Serial
#endif

#ifdef USE_MLX90641
    const byte MLX90641_address = 0x33; //MLX90641 的默认 7 位未移位地址
    #define TA_SHIFT 8 //MLX90641 在开放空气中的默认移位

    uint16_t eeMLX90641[832];
    float MLX90641To[192];
    uint16_t MLX90641Frame[242];
    paramsMLX90641 MLX90641;
    int errorno = 0;
#else
    const byte MLX90640_address = 0x33; //MLX90640 的默认 7 位未移位地址

    #define TA_SHIFT 8 //MLX90640 在开放空气中的默认移位

    float mlx90640To[768];
    paramsMLX90640 mlx90640;
#endif
void setup() {
    Wire.begin();
    Wire.setClock(400000); //将 I2C 时钟速度提高到 400kHz

    debug.begin(115200); //尽可能快的调试速度

    while (!debug); //等待用户打开终端
    //debug.println("MLX90640 IR Array Example");


#ifndef USE_MLX90641
    if (isConnected() == false) {
        debug.println("在默认 I2C 地址未检测到 MLX9064x。请检查接线。程序冻结。");
        while (1);
    }
    //获取设备参数 - 我们只需要执行一次
    int status;
    uint16_t eeMLX90640[832];
    status = MLX90640_DumpEE(MLX90640_address, eeMLX90640);
    if (status != 0) {
        debug.println("加载系统参数失败");
    }

    status = MLX90640_ExtractParameters(eeMLX90640, &mlx90640);
    if (status != 0) {
        debug.println("参数提取失败");
    }

    //参数提取完成后，我们可以释放 eeMLX90640 数组

    //MLX90640_SetRefreshRate(MLX90640_address, 0x02); //设置速率为 2Hz
    MLX90640_SetRefreshRate(MLX90640_address, 0x03); //设置速率为 4Hz
    //MLX90640_SetRefreshRate(MLX90640_address, 0x07); //设置速率为 64Hz
#else
    if (isConnected() == false) {
        debug.println("在默认 I2C 地址未检测到 MLX90641。请检查接线。程序冻结。");
        while (1);
    }
    //获取设备参数 - 我们只需要执行一次
    int status;
    status = MLX90641_DumpEE(MLX90641_address, eeMLX90641);
    errorno = status;//MLX90641_CheckEEPROMValid(eeMLX90641);//eeMLX90641[10] & 0x0040;//
    
    if (status != 0) {
        debug.println("加载系统参数失败");
       while(1);
    }

    status = MLX90641_ExtractParameters(eeMLX90641, &MLX90641);
    //errorno = status;
    if (status != 0) {
        debug.println("参数提取失败");
        while(1);
    }

    //参数提取完成后，我们可以释放 eeMLX90641 数组

    //MLX90641_SetRefreshRate(MLX90641_address, 0x02); //设置速率为 2Hz
    MLX90641_SetRefreshRate(MLX90641_address, 0x03); //设置速率为 4Hz
    //MLX90641_SetRefreshRate(MLX90641_address, 0x07); //设置速率为 64Hz    
#endif 

}

void loop() {
#ifndef USE_MLX90641
    long startTime = millis();
    for (byte x = 0 ; x < 2 ; x++) {
        uint16_t mlx90640Frame[834];
        int status = MLX90640_GetFrameData(MLX90640_address, mlx90640Frame);

        float vdd = MLX90640_GetVdd(mlx90640Frame, &mlx90640);
        float Ta = MLX90640_GetTa(mlx90640Frame, &mlx90640);

        float tr = Ta - TA_SHIFT; //基于传感器环境温度的反射温度
        float emissivity = 0.95;

        MLX90640_CalculateTo(mlx90640Frame, &mlx90640, emissivity, tr, mlx90640To);
    }
    long stopTime = millis();

    for (int x = 0 ; x < 768 ; x++) {
        //if(x % 8 == 0) debug.println();
        debug.print(mlx90640To[x], 2);
        debug.print(",");
    }
    debug.println("");
#else
    long startTime = millis();
    
    for (byte x = 0 ; x < 2 ; x++) {
        int status = MLX90641_GetFrameData(MLX90641_address, MLX90641Frame);

        float vdd = MLX90641_GetVdd(MLX90641Frame, &MLX90641);
        float Ta = MLX90641_GetTa(MLX90641Frame, &MLX90641);

        float tr = Ta - TA_SHIFT; //基于传感器环境温度的反射温度
        float emissivity = 0.95;

        MLX90641_CalculateTo(MLX90641Frame, &MLX90641, emissivity, tr, MLX90641To);
    }
    long stopTime = millis();
   /*
    debug.print("vdd=");
    debug.print(vdd,2);
    debug.print(",Ta=");
    debug.print(Ta,2);
   
    debug.print(",errorno=");
    debug.print(errorno,DEC);
    
    
    for (int x = 0 ; x < 64 ; x++) {
        debug.print(MLX90641Frame[x], HEX);
        debug.print(",");
    }
    
    delay(1000);
    */
    for (int x = 0 ; x < 192 ; x++) {
        debug.print(MLX90641To[x], 2);
        debug.print(",");
    }
    debug.println("");    
#endif
}

//如果在 I2C 总线上检测到 MLX90640，则返回 true
boolean isConnected() {
#ifndef USE_MLX90641
    Wire.beginTransmission((uint8_t)MLX90640_address);
#else
    Wire.beginTransmission((uint8_t)MLX90641_address);
#endif
    if (Wire.endTransmission() != 0) {
        return (false);    //传感器未应答
    }
    return (true);
}
```

:::note
将上面的软件代码1上传到您的Arduino IDE中并打开**串口**，您将看到如下可视化格式的输出结果：
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/20200702112317.png" /><figcaption><b /> <i /></figcaption>
</div>

#### 在Wio Terminal上的可视化输出结果

**步骤4.** 将下面的软件代码2上传到您的Arduino IDE中，用于在Wio Terminal上显示可视化效果。

**软件代码2**

```cpp
#include <Wire.h>
#include "MLX90641_API.h"
#include "MLX9064X_I2C_Driver.h"
#include <TFT_eSPI.h>                // 包含图形库（包括精灵函数）  

const byte MLX90641_address = 0x33; //MLX90641的默认7位未移位地址
#define TA_SHIFT 12 //MLX90641在开放空气中的默认移位
#define debug  Serial
uint16_t eeMLX90641[832];
float MLX90641To[192];
uint16_t MLX90641Frame[242];
paramsMLX90641 MLX90641;
int errorno = 0;

TFT_eSPI    tft = TFT_eSPI(); 
TFT_eSprite Display = TFT_eSprite(&tft);  // 创建精灵对象"img"，指向"tft"对象
// 指针被pushSprite()用来将其推送到TFT上

unsigned long CurTime;
 
uint16_t TheColor;
// 从一些初始颜色开始
uint16_t MinTemp = 25;
uint16_t MaxTemp = 38;

// 插值颜色的变量
byte red, green, blue;
 
// 行/列插值的变量
byte i, j, k, row, col, incr;
float intPoint, val, a, b, c, d, ii;
byte aLow, aHigh;

// 显示"像素"的大小
byte BoxWidth = 3;
byte BoxHeight = 3;

int x, y;
char buf[20];
 
// 切换显示网格的变量
int ShowGrid = -1;
 
// 插值数组的数组
float HDTemp[6400];

void setup() {
    Wire.begin();
    Wire.setClock(2000000); //将I2C时钟速度增加到2M
    debug.begin(115200); //尽可能快的调试
    
    // 启动显示并将背景设置为黑色

    if (isConnected() == false) {
        debug.println("在默认I2C地址未检测到MLX90641。请检查接线。冻结。");
        while (1);
    }
    //获取设备参数 - 我们只需要做一次
    int status;
    status = MLX90641_DumpEE(MLX90641_address, eeMLX90641);
    errorno = status;//MLX90641_CheckEEPROMValid(eeMLX90641);//eeMLX90641[10] & 0x0040;//
    
    if (status != 0) {
        debug.println("加载系统参数失败");
       while(1);
    }

    status = MLX90641_ExtractParameters(eeMLX90641, &MLX90641);
    //errorno = status;
    if (status != 0) {
        debug.println("参数提取失败");
        while(1);
    }

    //一旦提取参数，我们可以释放eeMLX90641数组
    
    MLX90641_SetRefreshRate(MLX90641_address, 0x05); //将速率设置为16Hz

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    Display.createSprite(TFT_HEIGHT, TFT_WIDTH);
    Display.fillSprite(TFT_BLACK); 

    // 获取颜色插值例程的截止点
    // 注意当温度刻度改变时调用此函数
    Getabcd();

    // 绘制与传感器最大值和最小值匹配的刻度图例
    DrawLegend();    
}
void loop() {
    // 为温度区域绘制一个大的白色边框
    Display.fillRect(10, 10, 220, 220, TFT_WHITE);
    for (byte x = 0 ; x < 2 ; x++) {
        int status = MLX90641_GetFrameData(MLX90641_address, MLX90641Frame);

        float vdd = MLX90641_GetVdd(MLX90641Frame, &MLX90641);
        float Ta = MLX90641_GetTa(MLX90641Frame, &MLX90641);

        float tr = Ta - TA_SHIFT; //基于传感器环境温度的反射温度
        float emissivity = 0.95;

        MLX90641_CalculateTo(MLX90641Frame, &MLX90641, emissivity, tr, MLX90641To);
    }

    interpolate_image(MLX90641To,12,16,HDTemp,80,80);

    //显示80 x 80数组
    DisplayGradient();
    
    //屏幕中央的十字准线
    Display.drawCircle(115, 115, 5, TFT_WHITE);
    Display.drawFastVLine(115, 105, 20, TFT_WHITE);
    Display.drawFastHLine(105, 115, 20, TFT_WHITE);
    //显示屏幕中央的温度
     
    //将精灵推送到屏幕
    Display.pushSprite(0, 0);

    tft.setRotation(3);
    tft.setTextColor(TFT_WHITE);
    tft.drawFloat(HDTemp[35 * 80 + 35], 2, 90, 20);        

}
//如果在I2C总线上检测到MLX90640，则返回true
boolean isConnected() {
    Wire.beginTransmission((uint8_t)MLX90641_address);
    if (Wire.endTransmission() != 0) {
        return (false);    //传感器未应答
    }
    return (true);
}
// 显示结果的函数
void DisplayGradient() {
 
  tft.setRotation(4);
 
  // 遍历70行
  for (row = 0; row < 70; row ++) {
 
    // 绘制无闪烁网格的快速方法--只需将每10个MLX90641To设为2x2而不是3x3
    // 在网格后绘制线条会闪烁太多
    if (ShowGrid < 0) {
      BoxWidth = 3;
    }
    else {
      if ((row % 10 == 9) ) {
        BoxWidth = 2;
      }
      else {
        BoxWidth = 3;
      }
    }
    // 然后遍历每70列
    for (col = 0; col < 70; col++) {
 
      // 绘制无闪烁网格的快速方法--只需将每10个MLX90641To设为2x2而不是3x3
      if (ShowGrid < 0) {
        BoxHeight = 3;
      }
      else {
        if ( (col % 10 == 9)) {
          BoxHeight = 2;
        }
        else {
          BoxHeight = 3;
        }
      }
      // 最后我们可以绘制每个70 x 70点，注意调用获取插值颜色
      Display.fillRect((row * 3) + 15, (col * 3) + 15, BoxWidth, BoxHeight, GetColor(HDTemp[row * 80 + col]));
    }
  }
 
}
// 我的快速而有效的颜色插值例程
uint16_t GetColor(float val) {
 
  /*
    传入值并计算R G B
    有几种已发布的方法来做这件事，我基本上绘制了R G B图并开发了简单的线性方程
    再次，5-6-5颜色显示不需要精确的温度到R G B颜色计算
 
    基于以下方程
    http://web-tech.ga-usa.com/2012/05/creating-a-custom-hot-to-cold-temperature-color-gradient-for-use-with-rrdtool/index.html
 
  */
 
  red = constrain(255.0 / (c - b) * val - ((b * 255.0) / (c - b)), 0, 255);
 
  if ((val > MinTemp) & (val < a)) {
    green = constrain(255.0 / (a - MinTemp) * val - (255.0 * MinTemp) / (a - MinTemp), 0, 255);
  }
  else if ((val >= a) & (val <= c)) {
    green = 255;
  }
  else if (val > c) {
    green = constrain(255.0 / (c - d) * val - (d * 255.0) / (c - d), 0, 255);
  }
  else if ((val > d) | (val < a)) {
    green = 0;
  }
 
  if (val <= b) {
    blue = constrain(255.0 / (a - b) * val - (255.0 * b) / (a - b), 0, 255);
  }
  else if ((val > b) & (val <= d)) {
    blue = 0;
  }
  else if (val > d) {
    blue = constrain(240.0 / (MaxTemp - d) * val - (d * 240.0) / (MaxTemp - d), 0, 240);
  }
 
  // 使用显示器的颜色映射函数获取5-6-5颜色调色板（R=5位，G=6位，B=5位）
  return Display.color565(red, green, blue);
 
}
 
// 获取温度与RGB图中截止点的函数
void Getabcd() {
 
  a = MinTemp + (MaxTemp - MinTemp) * 0.2121;
  b = MinTemp + (MaxTemp - MinTemp) * 0.3182;
  c = MinTemp + (MaxTemp - MinTemp) * 0.4242;
  d = MinTemp + (MaxTemp - MinTemp) * 0.8182;
 
}
float get_point(float *p, uint8_t rows, uint8_t cols, int8_t x, int8_t y)
{
    if (x < 0)
    {
        x = 0;
    }
    if (y < 0)
    {
        y = 0;
    }
    if (x >= cols)
    {
        x = cols - 1;
    }
    if (y >= rows)
    {
        y = rows - 1;
    }
    return p[y * cols + x];
}

void set_point(float *p, uint8_t rows, uint8_t cols, int8_t x, int8_t y, float f)
{
    if ((x < 0) || (x >= cols))
    {
        return;
    }
    if ((y < 0) || (y >= rows))
    {
        return;
    }
    p[y * cols + x] = f;
}

// src是一个网格src_rows * src_cols
// dest是一个预分配的网格，dest_rows*dest_cols
void interpolate_image(float *src, uint8_t src_rows, uint8_t src_cols,
                       float *dest, uint8_t dest_rows, uint8_t dest_cols)
{
    float mu_x = (src_cols - 1.0) / (dest_cols - 1.0);
    float mu_y = (src_rows - 1.0) / (dest_rows - 1.0);

    float adj_2d[16]; // 存储相邻点的矩阵

    for (uint8_t y_idx = 0; y_idx < dest_rows; y_idx++)
    {
        for (uint8_t x_idx = 0; x_idx < dest_cols; x_idx++)
        {
            float x = x_idx * mu_x;
            float y = y_idx * mu_y;
            get_adjacents_2d(src, adj_2d, src_rows, src_cols, x, y);

            float frac_x = x - (int)x; // 我们只需要点之间的~增量~
            float frac_y = y - (int)y; // 我们只需要点之间的~增量~
            float out = bicubicInterpolate(adj_2d, frac_x, frac_y);
            set_point(dest, dest_rows, dest_cols, x_idx, y_idx, out);
        }
    }
}

// p是4个点的列表，左边2个，右边2个
float cubicInterpolate(float p[], float x)
{
    float r = p[1] + (0.5 * x * (p[2] - p[0] + x * (2.0 * p[0] - 5.0 * p[1] + 4.0 * p[2] - p[3] + x * (3.0 * (p[1] - p[2]) + p[3] - p[0]))));
    return r;
}

// p是一个16点4x4数组，包含左/右/上/下的2行2列
float bicubicInterpolate(float p[], float x, float y)
{
    float arr[4] = {0, 0, 0, 0};
    arr[0] = cubicInterpolate(p + 0, x);
    arr[1] = cubicInterpolate(p + 4, x);
    arr[2] = cubicInterpolate(p + 8, x);
    arr[3] = cubicInterpolate(p + 12, x);
    return cubicInterpolate(arr, y);
}

// src是rows*cols，dest是已分配的4点数组！
void get_adjacents_1d(float *src, float *dest, uint8_t rows, uint8_t cols, int8_t x, int8_t y)
{
    // 选择左边的两个项目
    dest[0] = get_point(src, rows, cols, x - 1, y);
    dest[1] = get_point(src, rows, cols, x, y);
    // 选择右边的两个项目
    dest[2] = get_point(src, rows, cols, x + 1, y);
    dest[3] = get_point(src, rows, cols, x + 2, y);
}

// src是rows*cols，dest是已分配的16点数组！
void get_adjacents_2d(float *src, float *dest, uint8_t rows, uint8_t cols, int8_t x, int8_t y)
{
    float arr[4];
    for (int8_t delta_y = -1; delta_y < 3; delta_y++)
    {                                          // -1, 0, 1, 2
        float *row = dest + 4 * (delta_y + 1); // 索引到每个4的块中
        for (int8_t delta_x = -1; delta_x < 3; delta_x++)
        { // -1, 0, 1, 2
            row[delta_x + 1] = get_point(src, rows, cols, x + delta_x, y + delta_y);
        }
    }
}

// 绘制图例的函数
void DrawLegend() {
 
  //带有最大值和最小值文本的颜色图例
  j = 0;
 
  float inc = (MaxTemp - MinTemp ) / 160.0;
 
  for (ii = MinTemp; ii < MaxTemp; ii += inc) {
    tft.drawFastHLine(260, 200 - j++, 30, GetColor(ii));
  }
 
  tft.setTextSize(2);
  tft.setCursor(245, 20);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  sprintf(buf, "%2d/%2d", MaxTemp, (int) (MaxTemp * 1.12) + 32);
  tft.print(buf);
 
  tft.setTextSize(2);
  tft.setCursor(245, 210);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  sprintf(buf, "%2d/%2d", MinTemp, (int) (MinTemp * 1.12) + 32);
  tft.print(buf);
 
}
```

:::tip
如果一切顺利，可视化结果将显示在 Wio Terminal 的屏幕上
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/thermal-sensor-90641.gif" /><figcaption><b /> <i /></figcaption></div>

### 通过 Raspberry Pi 入门

#### 硬件

**所需材料**

|Raspberry Pi 4|Grove Base Hat for Raspberry Pi|Grove - Thermal Imaging Camera / IR Array MLX90641 110 degree|
|--------------|-------------------------------|-------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/raspberry-pi-preview_2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/httpsstatics3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/small.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|

#### 硬件连接

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/ras_hardware-connection.jpg" /></div>

- **步骤 1** 将 Grove - Thermal Imaging Camera 连接到两个 I2C 端口中的一个。
- **步骤 2** 将 Raspberry Pi 4 插入 Grove Base Hat for Raspberry Pi。
- **步骤 3** 通过 HDMI 线缆将 Raspberry Pi 连接到显示器，并通过 USB type-C 为 Raspberry Pi 4 供电。

#### 软件

Raspberry Pi 4 支持 Python，因此如果您按照以下步骤操作，项目演示可以轻松地从 Raspberry Pi 4 显示器上显示。

- **步骤 1** 通过以下命令安装 [grove.py](https://github.com/Seeed-Studio/grove.py)

```
pip3 install Seeed-grove.py
```

- **步骤 2** 使用以下命令安装 MLX90641 驱动程序。
Python 环境（如果您没有 Raspberry Pi 的权限）：

```
pip3 install seeed-python-mlx9064x
```

升级到最新驱动程序：

```
pip3 install --upgrade seeed-python-mlx9064x
```

- **步骤 3** 检查 Raspberry Pi 对应的 i2c 编号：

```
ls /dev/i2c*
```

您可能会得到如下结果：

```
/dev/i2c-1
```

- **步骤 4** 通过 **git clone** 命令下载 [MLX90641 Library](https://github.com/Seeed-Studio/Seeed_Python_MLX9064x.git)。

- **步骤 5** 使用以下命令运行 **BasicReadings.py** 文件：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/90641-raspi.png" /></div>

:::tip
     如果一切顺利，结果将如上所示。
:::

:::note
     Raspberry Pi 上已发布升级版的 UI 结果，如下所示：
:::

- **步骤 1** 安装 pyqt5：

```
sudo apt-get install python3-pyqt5 -y
```

- **步骤 2** 从 PyPI 安装：

```
sudo pip3 install seeed_python_ircamera
```

- **步骤 3** 设置最大 i2c 速度然后重启：

```bash
sudo sh -c "echo dtparam=i2c_arm=on,i2c_arm_baudrate=400000 >> /boot/config.txt"
sudo reboot
```

- **步骤 4** 在终端中输入以下命令：

```
sudo ircamera I2C MLX90641
```

:::tip
     如果一切顺利，结果将如下所示。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thermal-Imaging-Camera-IR-Array/img/outcome_UI.png" /><figcaption><b /> <i /></figcaption></div>

## 资源

- **[PDF]** [MLX90641数据手册](https://files.seeedstudio.com/products/101020892/res/MLX90641-Datasheet-Melexis.pdf)
- **[ZIP]** [MLX90641可视化工具](https://files.seeedstudio.com/products/101020892/res/Visualization-mlx90641.zip)

## 技术支持与产品讨论

请将任何技术问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

## 可升级为工业传感器

通过SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了使用SenseCAP系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66外壳、蓝牙配置、与全球LoRaWAN®网络的兼容性、内置19Ah电池以及APP的强大支持，使[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。为您下一个成功的工业项目尝试最新的SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>