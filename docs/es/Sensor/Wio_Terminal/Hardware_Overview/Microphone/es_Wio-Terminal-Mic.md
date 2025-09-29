---
description: Descripción general
title: Primeros pasos con el micrófono
keywords:
- Wio_terminal Microphone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Mic
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Primeros pasos con el micrófono

Esta wiki introduce cómo usar el micrófono integrado para entrada de audio en Wio Terminal. El micrófono se puede usar para detectar el sonido del entorno y responder en consecuencia.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png"/></div>

:::note
Esta wiki solo demuestra lo más básico del micrófono, ¡y estamos trabajando en una biblioteca de micrófono para Wio Terminal para habilitar muchas más funciones! ¡Mantente atento!
:::

## Código de ejemplo

Nota: `WIO_MIC` está definido para el micrófono integrado.

```cpp
void setup() {
  pinMode(WIO_MIC, INPUT);
  Serial.begin(115200);
}

void loop() {
  int val = analogRead(WIO_MIC);
  Serial.println(val);
  delay(200);
}
```

## Código de ejemplo con pantalla LCD

### Instalación de bibliotecas

- Instala la biblioteca [LCD](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/).

- Instala la biblioteca [Linechart](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Linecharts/).

```cpp
#include"seeed_line_chart.h" //include the library
#include <math.h>

TFT_eSPI tft;

#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

void setup() {
    pinMode(WIO_MIC, INPUT);

    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKGREY);

    int val = analogRead(WIO_MIC);

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(val); //read variables and store in data

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Microphone Reading")
                .align(center)
                .color(TFT_WHITE)
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
                .show_circle(true) //drawing a cirle at each point, default is on.
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) //passing through the data to line graph
                .color(TFT_RED) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```