---
title: 折线图
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/
slug: /cn/Wio-Terminal-LCD-Linecharts
last_update:
  date: 3/10/2024
  author: 金菊
---

# 折线图

这个存储库描述了如何在Wio Terminal上绘制折线图。您可以使用它将原始传感器值显示在屏幕上，就像串行绘图器一样！该库非常灵活，可以根据您的需求进行调整。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0277.2019-11-27%2018_19_05.gif" /></div>

## 库安装

### 安装Seeed_Arduino_Linechart库用于在Wio Terminal上绘制2D图形

- 访问 [Seeed_Arduino_Linechart](https://files.seeedstudio.com/wiki/Wio-Terminal-LCD-Linecharts/Seeed_Arduino_Linechart-1.0.0.zip) 并将整个存储库下载到本地驱动器。

- 现在，可以将Wio Terminal_graphics库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 然后选择刚刚下载的 `Seeed_Arduino_Linechart` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 入门指南

### 初始化绘制折线图

首先，定义要存储的变量的最大数量，并使用双精度类型存储数据，同时使用TFT Sprite函数创建一个缓冲区。

```cpp
#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
```

### 初始化LCD屏幕

```cpp
void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}
```

### 加载变量到数据

使用 `data.push(variable)` 将变量（例如传感器读数）存储在数据中，如果达到预定义的最大数量，则移除第一个变量（继续添加）。

```cpp
    spr.fillSprite(TFT_WHITE);
    if (data.size() == max_size) {
        data.pop(); //this is used to remove the first read variable
    }
    data.push(0.01 * random(1, 10)); //read variables and store in data
```

### 初始化折线图标题的设置

一些设置用于配置折线图标题的显示方式。初始化一个 `text(x, y)` 结构体，其中e `(x, y)` 是标题的起始坐标。并按照下面的设置进行配置。在这个示例中， `header` 是这个结构体的名称，可以像 `header.value("test")` 等一样更改设置和配置。

```cpp
    //Settings for the line graph title
    auto header =   text(0, 0)           //starting coordinates of title
                .value("test")      //actual title of the line graph
                .align(center)      //horizontal alignment of title
                .valign(vcenter)    //vertical alignment of title
                .width(tft.width()) //width of the title
                .thickness(3);      //thickness of the font

    header.height(header.font_height() * 2); //the height of title is the twice the height of the font
    header.draw(); 
```

为了帮助理解这个示例代码，请参考下面的图像来了解标题的配置：

<div align="center"><img width={645} height={374} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/title.png" /></div>

### 初始化折线图的设置并在LCD屏幕上绘制

一些设置用于配置折线图的显示方式。初始化一个 `line_chart(x, y)` 结构体，其中 `(x, y)` 是折线图的起始坐标。并按照下面的设置进行配置。在这个示例中， `content` 是这个结构体的名称，可以像 `content.based_on(0.0)` 等一样更改设置和配置。根据需要修改这些设置以获得所需的显示效果！

```cpp
  //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
         content
                .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                .width(tft.width() - content.x() * 2) //actual width of the line chart
                .based_on(0.0) //Starting point of y-axis, must be a float
                .show_circle(false) //drawing a cirle at each point, default is on.
                .value(data) //passing through the data to line graph
                .color(TFT_PURPLE) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
```

为了帮助理解这个示例代码，请参考下面的图像来了解折线图的配置：

<div align="center"><img width={768} height={432} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/linegraph2.png" /></div>

## 完整代码

```cpp
#include"seeed_line_chart.h" //include the library
TFT_eSPI tft;

#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(0.01 * random(1, 10)); //read variables and store in data

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("test")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(3);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font

  //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
         content
                .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                .width(tft.width() - content.x() * 2) //actual width of the line chart
                .based_on(0.0) //Starting point of y-axis, must be a float
                .show_circle(false) //drawing a cirle at each point, default is on.
                .value(data) //passing through the data to line graph
                .color(TFT_PURPLE) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
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
