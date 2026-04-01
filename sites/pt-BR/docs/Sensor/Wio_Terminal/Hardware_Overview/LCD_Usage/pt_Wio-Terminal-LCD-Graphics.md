---
title: Gráficos
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Graphics/
slug: /Wio-Terminal-LCD-Graphics
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LCD-Graphics/
---
# Funções gráficas básicas

Este repositório descreve algumas das funções gráficas básicas da biblioteca TFT LCD no Wio Terminal. Você pode usar essas funções para criar suas próprias funções de desenho!

## Desenhando pixels

Para desenhar um pixel na tela LCD:

```cpp
drawPixel(int32_t x, int32_t y, uint32_t color);
```

onde `(x, y)` é a coordenada do pixel e `color` é a cor do pixel.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawPixel(4,7,TFT_BLACK); //drawing a black pixel at (4,7)
}

void loop() {}
```

## Desenhando linhas

Para desenhar uma linha entre dois pontos na tela LCD:

```cpp
drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);
```

onde a linha começa a ser desenhada de `(x0, y0)` até `(x1, y1)` com `color`.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawLine(0,0,160,120,TFT_BLACK); //drawing a black line from (0,0) to (160,120)
}

void loop() {}
```

Para desenhar linhas horizontais ou verticais, esta biblioteca também fornece funções otimizadas:

### Desenhando linhas horizontais e verticais

```cpp
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); //Horizontal line
drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); //Verical line

```

onde `(x, y)` é a coordenada inicial, `w` é a largura da linha horizontal, `h` é a altura da linha vertical e `color`.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawFastHLine(0,120,320,TFT_BLACK); //A black horizontal line starting from (0, 120)
    tft.drawFastVLine(160,0,240,TFT_BLACK); // A black vertical line starting from (160, 0)
}

void loop() {}
```

## Desenhando retângulos

Para desenhar ou preencher um retângulo na tela LCD:

```cpp
drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
```

onde `(x, y)` é a coordenada inicial, `w` é a largura, `h` é a altura do retângulo e `color`.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawRect(110,70,100,100,TFT_BLACK); //A 100x100 black rectangle starting from (110, 70)
}

void loop() {}
```

## Desenhando círculos

Para desenhar ou preencher um círculo na tela LCD:

```cpp
drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
```

onde `(x0, y0)` é a origem, `r` é o raio do círculo e `color`.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawCircle(160,120,50,TFT_BLACK); //A black circle origin at (160, 120)
}

void loop() {}
```

Esta biblioteca também fornece uma função para desenhar ou preencher uma elipse:

```cpp
drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
```

onde `(x0, y0)` é a origem da elipse, `rx` é o raio horizontal, `ry` é o raio vertical e `color`.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawEllipse(160,120,50,100,TFT_BLACK); 
    //A black ellipse origin at (160, 120) with horizontal radius of 50, and vertical radius of 100
}

void loop() {}
```

## Desenhando triângulos

Para desenhar ou preencher um triângulo na tela LCD:

```cpp
drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
```

onde `(x0, y0)` são as primeiras coordenadas, `(x1, y1)` são as segundas coordenadas e `(x2, y2)` são as terceiras coordenadas do triângulo, `color`.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawTriangle(160,70,60,170,260,170,TFT_BLACK);
    //A triangle with points at (160, 70), (60, 170) and (260, 170)
}

void loop() {}
```

## Desenhando retângulos arredondados

Para desenhar ou preencher retângulos arredondados na tela LCD:

```cpp
drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
fillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
```

onde `(x, y)` é a coordenada inicial, `w` e `h` são a largura e a altura dos retângulos, `r` é o raio do canto e `color`.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawRoundRect(110,70,100,100,10,TFT_BLACK);
    //A 100x100 black roudned rectangle starting from (110, 70)
}

void loop() {}
```

## Desenhando caracteres

Para desenhar um caractere único na tela LCD:

```cpp
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
```

onde `(x, y)` é a posição inicial, `c` é o caractere, `color` é a cor do caractere, `bg` é a cor de fundo do caractere e `size` é a escala do tamanho do caractere.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawChar(140,120,'A',TFT_BLACK, TFT_RED,2); //Draw a black character A from (140,120)
    tft.drawChar(155,120,'B',TFT_BLACK, TFT_RED,2); //Draw a black character B from (155,120)
    tft.drawChar(170,120,'C',TFT_BLACK, TFT_RED,2); //Draw a black character C from (170,120)
}

void loop() {}
```

## Desenhando strings de texto

Para desenhar strings na tela LCD:

```cpp
drawString(const String& string, int32_t poX, int32_t poY);
```

onde `string` é a string de texto e `(poX, poY)` são as coordenadas iniciais.

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);

  tft.fillScreen(TFT_RED); //Red background

  tft.setTextColor(TFT_BLACK);          //sets the text colour to black
  tft.setTextSize(1);                   //sets the size of text
  tft.drawString("Hello world!", 0, 0); //prints strings from (0, 0)
  tft.setTextSize(2);
  tft.drawString("Hello world!", 0, 10);
}

void loop() {}
```

## Preenchendo a tela

Para preencher ou colorir a tela inteira:

```cpp
fillScreen(uint32_t color);
```

### Código de exemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
}

void loop() {
    //Looping through color R-G-B
    tft.fillScreen(TFT_RED);
    delay(1000);
    tft.fillScreen(TFT_GREEN);
    delay(1000);
    tft.fillScreen(TFT_BLUE);
    delay(1000);
}

void loop() {}
```

## Suporte técnico e discussão sobre produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
