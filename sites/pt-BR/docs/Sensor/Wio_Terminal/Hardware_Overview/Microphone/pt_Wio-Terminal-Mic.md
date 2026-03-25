---
description: Visão geral
title: Primeiros Passos com o Microfone
keywords:
  - Wio_terminal Microphone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Mic
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Mic/
---

# Primeiros Passos com o Microfone

Este wiki apresenta como usar o microfone integrado para entrada de áudio no Wio Terminal. O microfone pode ser usado para detectar o som ao redor e responder de acordo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png"/></div>

:::note
Este wiki demonstra apenas o básico do microfone, e estamos trabalhando em uma biblioteca de microfone para o Wio Terminal para habilitar muito mais funções! Fique ligado!
:::

## Código de Exemplo

Observação: `WIO_MIC` é definido para o microfone integrado.

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

## Código de Exemplo com Tela LCD

### Instalação de Bibliotecas

- Instale a biblioteca [LCD](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/).

- Instale a biblioteca [Linechart](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Linecharts/).

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
