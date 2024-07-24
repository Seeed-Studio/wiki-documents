---
title: 直方图
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/
slug: /cn/Wio-Terminal-LCD-Histogram
last_update:
  date: 3/10/2024
  author: 金菊
---

# 直方图

该存储库描述了如何在Wio终端上绘制直方图。与线图库类似，您可以使用它来显示原始传感器值，以在屏幕上可视化读数。该库非常灵活，可以根据您的需求进行修改。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200114131505.png" /></div>

## 安装库

### 安装直方图库

- 访问 [Seeed_Arduino_Histogram](https://github.com/Seeed-Studio/Seeed_Arduino_Histogram) 并将整个存储库下载到您的本地驱动器。

- 现在，可以将库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 然后选择刚刚下载的 `Seeed_Arduino_Histogram` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 入门指南

### 初始化直方图

包括直方图库并初始化直方图，如下所示:

```cpp
#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
#include"Histogram.h"

TFT_Histogram histogram=TFT_Histogram(); //Initializing Histogram
TFT_eSPI tft = TFT_eSPI(); //Initializing TFT

void setup(void) {
  tft.init();
  histogram.initHistogram(&tft);
  ...
}
```

### 创建直方图列

创建直方图列：

```cpp
void formHistogram(String label,int NO,double Histogram_value,int Histogram_WIDTH,uint32_t colour);
```

其中 `label` 是列名， `NO` 是直方图列的编号, `Histogram_value` 是直方图列的值, `Histogram_WIDTH` 是直方图列的宽度 `colour` 是直方图列的颜色。

### 显示直方

图显示直方图：

```cpp
void showHistogram();
```

### 更改列值

更改已存在的列的值：

```cpp
void changeParam(uint8_t NO, String lable, float Histogram_value, uint32_t colour);
```

其中 `NO` 是要更改的直方图列的编号。

### 删除列

从直方图中删除列：

```cpp
void deleteCylinder(uint8_t NO);
```

其中 `NO` 是要删除的直方图列的编号。

### 添加线图到直方图

添加线图:

```cpp
void lineChart(uint32_t colour);
```

其中 `color` 是线图的颜色。

### 隐藏直方图的坐标轴

```cpp
void notShowAxis();
```

### 其他有用的函数

有关直方图库的其他有用函数，请参考 **`Histogram.h`**. 此外，它还提供了一组示例以及一个完整的功能演示，可以在 `examples` 文件夹中找到。

## 示例代码

```cpp
#include <TFT_eSPI.h> //Hardware-specific library
#include <SPI.h>
#include"Histogram.h" //include histogram library

TFT_Histogram histogram=TFT_Histogram(); //Initializing tft and histogram
TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  histogram.initHistogram(&tft);
  histogram.formHistogram("a",1,50.55,40,TFT_RED); //Column 1
  histogram.formHistogram("b",2,20,40,TFT_BLACK); //Column 2
  histogram.formHistogram("c",3,100,50,TFT_GREEN); //Column 3
  histogram.formHistogram("d",4,53,50,TFT_BLUE); //Column 4
  histogram.formHistogram("e",5,133,30,TFT_YELLOW); //Column 5
  histogram.formHistogram("f",6,53,50,TFT_ORANGE); //Column 6
  histogram.formHistogram("g",7,80,50,TFT_PINK); //Column 7

  histogram.showHistogram(); //show histogram
  delay(3000);

  histogram.changeParam(6,"F",55,TFT_PINK);//change column 6
  histogram.deleteCylinder(7);//delete colum 7
  histogram.lineChart(TFT_BLACK);

  delay(2000);
  histogram.notShowAxis();//hiding the axis of histogram
}
void loop() {

}
```

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
