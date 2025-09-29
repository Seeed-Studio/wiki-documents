---
description: Wio Terminal Almacenando Datos
title: Wio Terminal Almacenando Datos
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Storting-Analog-Data
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Wio Terminal mostrando y almacenando datos analógicos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" /></div>

## Descripción general

Este ejemplo demuestra el uso de las funciones de gráfico de líneas para mostrar las lecturas del sensor de luz Grove en Wio Terminal, ¡como el Serial Plotter! Para añadir más, los datos del sensor de luz se almacenan en la tarjeta SD.

### Características

- Lectura de valores del sensor de luz y trazado en un gráfico de líneas

## Librerías de Arduino necesarias

- Instala la librería de gráficos de líneas `Seeed_Arduino_Linechart`, por favor visita [Gráficos de Líneas](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Linecharts/) para más información.

- Instala la librería SD, por favor visita [FS](https://wiki.seeedstudio.com/es/Wio-Terminal-FS-Overview/) para más información.

## Instrucciones de Arduino

1. Es altamente recomendable leer primero [Gráficos de Líneas](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Linecharts/) antes de probar este código de ejemplo.

2. Descarga el archivo [`LightReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip) y súbelo a tu Wio Terminal a través del `Arduino IDE`. Asegúrate de haber instalado todas las librerías.

3. ¡Cambia el brillo del entorno y observa los cambios en el gráfico de líneas!

4. La lectura analógica se puede encontrar en la tarjeta SD en `Readings.txt`

## Código

- **Para inicializar LCD y puerto analógico**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

Como podemos ver, Wio Terminal tiene dos puertos Grove, uno es el puerto I2C predeterminado y el otro es configurable como puertos Digital D0, D1 o puertos Analógicos A0 y A1, así como puertos UART. En este caso, se necesita el puerto analógico, por lo que se define como entrada analógica.

También, inicializando la tarjeta SD como sigue:

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

- **Lectura de valores del sensor y carga de datos**

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

- **Configuraciones de título**

Por favor consulta [Gráficos de Líneas](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Linecharts/) para más información.

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

- **Configuraciones de gráficos de líneas**

Consulte [Gráficos de líneas](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Linecharts/) para obtener más información.

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

- **Escribir Datos a la Tarjeta SD**

Por favor consulta [Lectura/Escritura desde la Tarjeta SD](https://wiki.seeedstudio.com/es/Wio-Terminal-FS-ReadWrite/) para más información.

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
