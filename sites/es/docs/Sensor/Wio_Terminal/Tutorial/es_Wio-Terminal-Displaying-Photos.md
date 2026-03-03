---
description:  Wio Terminal Mostrando Fotos
title:  Wio Terminal Mostrando Fotos
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Displaying-Photos
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Wio Terminal Mostrando fotos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" /></div>

## Descripción general

Este ejemplo demuestra cómo mostrar imágenes desde la tarjeta SD en bucle.

### Características

- Recorrido en bucle a través de fotos

## Librerías de Arduino necesarias

- Instala la librería de pantalla LCD `Seeed_Arduino_LCD`, por favor visita [Wio Terminal Overview](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/) para más información.

- Instala la librería de tarjeta SD `Seeed_Arduino_FS`, Por favor visita [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS) para más información.

- Instala la librería `RawImage.h`, Por favor visita [Loading Images](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Loading-Image/) para más información.

## Instrucciones de Arduino

1. Descarga el archivo [`displayPhotos.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos.zip) y `RawImage.h` y súbelos a tu Wio Terminal a través del `Arduino IDE`. Asegúrate de haber instalado todas las librerías.

2. Arrastra el archivo `photos` y guarda todo el archivo en la tarjeta SD.

3. ¡Deberías ver que la imagen comienza a hacer bucle!

## Código

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" //Including SD card library
#include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

void setup() {
    //Initialise SD card
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    //Initialise LCD screen
    tft.begin();
    tft.setRotation(3);

}
//storing the names of photos 
const char* list[] = {"photos/1.bmp", "photos/2.bmp", "photos/3.bmp", "photos/4.bmp"};

void loop() {
    for (uint8_t cnt = 0; cnt < 4; cnt++) {
        drawImage<uint16_t>(list[cnt],0,0); //dispalying images one by one
        delay(1000);
    }
}
```

## Wio Terminal Mostrando fotos con Botón

### Descripción general

Este ejemplo es similar al anterior, ¡pero en su lugar se utilizan botones integrados para cambiar las imágenes mostradas!

### Características

- Botón Izquierdo: Imagen Anterior

- Botón Derecho: Siguiente Imagen

### Librerías de Arduino necesarias

- Instala la librería de pantalla LCD `Seeed_Arduino_LCD`, por favor visita [Wio Terminal Overview](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/) para más información.

- Instala la librería de tarjeta SD `Seeed_Arduino_FS`, Por favor visita [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) para más información.

- Instala la librería `RawImage.h`, Por favor visita [Loading Images](https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Loading-Image/) para más información.

### Instrucciones de Arduino

1. Descarga el archivo [`displayPhotos_buttons.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos_buttons.zip) y `RawImage.h` y súbelos a tu Wio Terminal a través del `Adruino IDE`. Asegúrate de haber instalado todas las librerías.

2. Arrastra el archivo `photos` y guarda todo el archivo en la tarjeta SD.

3. ¡Presiona el botón izquierdo para desplazarte hacia la izquierda y presiona el botón derecho para desplazarte hacia la derecha!

### Código

- **Para inicializar los Botones**

```cpp
void setup() {
    ...
    pinMode(BUTTON_1, INPUT); //left button
    pinMode(BUTTON_3, INPUT); //right button
    ...
}
```

### Código Completo

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" //Including SD card library
#include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

bool left_flag = false;
void button_handler_left() {
  left_flag = true;
}

bool right_flag = false;
void button_handler_right() {
  right_flag = true;
}

void setup() {
  //Initialise SD card
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI,16000000)) {
    while (1);
  }
  tft.begin();
  tft.setRotation(3);

  pinMode(BUTTON_1, INPUT);
  pinMode(BUTTON_3, INPUT);
  attachInterrupt(digitalPinToInterrupt(BUTTON_1), button_handler_left, FALLING);
  attachInterrupt(digitalPinToInterrupt(BUTTON_3), button_handler_right, FALLING);

}

const char* list[] = {"1.bmp", "2.bmp", "3.bmp", "4.bmp"};
int8_t cnt = 0;

void loop() {
  if (left_flag) {
    cnt++;
    left_flag = false;
    if (cnt == 4) {
      cnt = 0;
    }
  }
  if (right_flag) {
    cnt--;
    right_flag = false;
    if (cnt < 0) {
      cnt = 3;
    }
  }
  drawImage<uint16_t>(list[cnt], 0, 0);
}
```