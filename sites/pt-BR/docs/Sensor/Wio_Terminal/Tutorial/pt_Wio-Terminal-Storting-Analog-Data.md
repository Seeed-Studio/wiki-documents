---
description: Armazenando dados no Wio Terminal
title: Armazenando dados no Wio Terminal
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Storting-Analog-Data
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Storting-Analog-Data/
---

# Wio Terminal exibindo e armazenando dados analógicos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" /></div>

## Visão geral

Este exemplo demonstra o uso das funções de gráfico de linha para exibir a leitura do sensor Grove - Light no Wio Terminal, assim como o Serial Plotter! Além disso, os dados do sensor de luz são armazenados no cartão SD.

### Recursos

- Ler valores do sensor de luz e plotá‑los em um gráfico de linha

## Bibliotecas Arduino necessárias

- Instale a biblioteca de gráfico de linha `Seeed_Arduino_Linechart`. Para mais informações, visite [Line Charts](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Linecharts/).

- Instale a biblioteca SD. Para mais informações, visite [FS](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-FS-Overview/).

## Instruções Arduino

1. É altamente recomendado ler primeiro [Line Charts](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Linecharts/) antes de testar este código de exemplo.

2. Baixe o arquivo [`LightReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip) e faça o upload para o seu Wio Terminal através da `Arduino IDE`. Certifique‑se de que você instalou todas as bibliotecas.

3. Altere o brilho do ambiente e veja as mudanças no gráfico de linhas!

4. A leitura analógica pode ser encontrada no cartão SD em `Readings.txt`

## Código

- **Inicializar LCD e porta analógica**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

Como podemos ver, o Wio Terminal possui duas portas Grove, uma é a porta I2C padrão e a outra é configurável como Digital D0, D1 ou Analógica A0 e A1, bem como portas UART. Neste caso, é necessária a porta analógica, portanto ela é definida como entrada analógica.

Além disso, inicializando o cartão SD da seguinte forma:

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

- **Ler valores do sensor e carregar dados**

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

- **Configurações de título**

Consulte [Line Charts](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Linecharts/) para mais informações.

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

- **Configurações do gráfico de linha**

Consulte [Line Charts](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Linecharts/) para mais informações.

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

- **Gravando dados no cartão SD**

Consulte [Reading/Writing from the SD Card](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-FS-ReadWrite/) para mais informações.

```cpp
void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```

## Código completo

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
