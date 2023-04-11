---
description:  Wio Terminal Storing Data
title:  Wio Terminal Storing Data
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Storting-Analog-Data
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Wio Terminal displaying and storing analog data

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" /></div>

## Overview

This example demonstrates using the line graph functions to display the Grove - Light sensor reading on Wio Terminal, just like the Serial Plotter! To add more, the light sensor data are stored in the SD Card.

### Features

- Reading Light sensor values and plotting into a line graph

## Arduino libraries needed

- Install the Line Chart library `Seeed_Arduino_Linechart`, please visit [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) for more information.

- Install the SD Library, please visit [FS](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/) for more information.

## Arduino Instructions

1. It is highly recommended to read through [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) first and before trying out this example code.

2. Download the [`LightReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip) file and upload to your Wio Terminal through `Arduino IDE`. Make sure you installed all the libraries.

3. Change the brightness of surroundings and see the changes in the linegraph!

4. The analog reading can be found in the SD Card in `Readings.txt`

## Code

- **To initialize LCD and Analog port**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

As we can see, Wio Terminal has two Grove ports, one is default I2C port and the other is configurable Digital D0, D1 or Analog A0 and A1 ports, as well as UART ports. In this case, analog port is needed so defined as analog input.

Also, initializing the SD Card as follow:

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //include the library

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define max_size 30 //maximum size of data
doubles data; //Initilising a doubles type to store data
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("initialization failed!");
        while(1);
  }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}
```

- **Reading sensor values and loading data**

```cpp
void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);
    int brightness = analogRead(LIGHT); //Reading light sensor values

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(brightness); //Storing light sensor values
    saveData(); //Saving data to SD card
    ...
}
```

- **Title configurations**

Please refer to [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) for more information.

```cpp
//Settings for the line graph title
auto header =  text(0, 0)
            .value("Light Sensor Readings")
            .align(center)
            .valign(vcenter)
            .width(tft.width())
            .thickness(2);

header.height(header.font_height() * 2);
header.draw(); //Header height is the twice the height of the font
```

- **Line Chart configurations**

Please refer to [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) for more information.

```cpp
//Settings for the line graph
auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
        content
            .height(tft.height() - header.height() * 1.5) //actual height of the line chart
            .width(tft.width() - content.x() * 2) //actual width of the line chart
            .based_on(0.0) //Starting point of y-axis, must be a float
            .show_circle(false) //drawing a cirle at each point, default is on.
            .value(data) //passing through the data to line graph
            .color(TFT_RED) //Setting the color for the line
            .draw();

spr.pushSprite(0, 0);
```

- **Writing Data to SD Card**

Please refer to [Reading/Writing from the SD Card](https://wiki.seeedstudio.com/Wio-Terminal-FS-ReadWrite/) for more information.

```cpp
void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```

## Complete code

```cpp
##include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //include the library

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define max_size 30 //maximum size of data
doubles data; //Initilising a doubles type to store data
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("initialization failed!");
        while(1);
  }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(brightness); //read variables and store in data
    saveData();

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Light Sensor Readings")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

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
                .color(TFT_RED) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
}

void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```
