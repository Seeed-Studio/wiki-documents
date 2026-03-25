---
description: Wio Terminal exibindo fotos
title: Wio Terminal exibindo fotos
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Displaying-Photos
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Displaying-Photos/
---

# Wio Terminal exibindo fotos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" /></div>

## Visão geral

Este exemplo demonstra como exibir imagens do cartão SD em loop.

### Recursos

- Percorrer fotos em loop

## Bibliotecas Arduino necessárias

- Instale a biblioteca da tela LCD `Seeed_Arduino_LCD`, visite [Wio Terminal Overview](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/) para mais informações.

- Instale a biblioteca do cartão SD `Seeed_Arduino_FS`, visite [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS) para mais informações.

- Instale a biblioteca `RawImage.h`, visite [Loading Images](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Loading-Image/) para mais informações.

## Instruções Arduino

1. Baixe o arquivo [`displayPhotos.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos.zip) e `RawImage.h` e faça o upload para o seu Wio Terminal através da `Arduino IDE`. Certifique-se de que todas as bibliotecas estejam instaladas.

2. Arraste o arquivo `photos` e salve o arquivo inteiro no cartão SD.

3. Você deverá ver as imagens começando a rodar em loop!

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

## Wio Terminal exibindo fotos com botão

### Visão geral

Este exemplo é semelhante ao acima, mas usa botões integrados para mudar as imagens exibidas!

### Recursos

- Botão Esquerdo: Imagem anterior

- Botão Direito: Próxima imagem

### Bibliotecas Arduino necessárias

- Instale a biblioteca da tela LCD `Seeed_Arduino_LCD`, visite [Wio Terminal Overview](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Overview/) para mais informações.

- Instale a biblioteca do cartão SD `Seeed_Arduino_FS`, visite [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) para mais informações.

- Instale a biblioteca `RawImage.h`, visite [Loading Images](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Loading-Image/) para mais informações.

### Instruções Arduino

1. Baixe o arquivo [`displayPhotos_buttons.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos_buttons.zip) e `RawImage.h` e faça o upload para o seu Wio Terminal através da `Adruino IDE`. Certifique-se de que todas as bibliotecas estejam instaladas.

2. Arraste o arquivo `photos` e salve o arquivo inteiro no cartão SD.

3. Pressione o botão esquerdo para rolar para a esquerda e pressione o botão direito para rolar para a direita!

### Código

- **Para inicializar botões**

```cpp
void setup() {
    ...
    pinMode(BUTTON_1, INPUT); //left button
    pinMode(BUTTON_3, INPUT); //right button
    ...
}
```

### Código completo

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
