---
title: Gráficos 
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Graphics/
slug: /es/Wio-Terminal-LCD-Graphics
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Funciones gráficas básicas

Este repositorio describe algunas de las funciones gráficas básicas de la biblioteca TFT LCD en Wio Terminal. ¡Puedes usar estas funciones para crear tus propias funciones de dibujo!

## Dibujar píxeles

Para dibujar un píxel en la pantalla LCD:

```cpp
drawPixel(int32_t x, int32_t y, uint32_t color);
```

donde `(x, y)` es la coordenada del píxel y `color` es el color del píxel.

### Código de ejemplo

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

## Dibujar Líneas

Para dibujar una línea entre dos puntos en la pantalla LCD:

```cpp
drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);
```

donde la línea comienza a dibujarse desde `(x0, y0)` hasta `(x1, y1)` y `color`.

### Código de ejemplo

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

Para dibujar líneas horizontales o verticales, esta biblioteca también proporciona funciones optimizadas:

### Dibujar líneas horizontales y verticales

```cpp
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); //Horizontal line
drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); //Verical line

```

donde `(x, y)` son las coordenadas de inicio y `w` es el ancho de la línea horizontal, y `h` es la altura de la línea vertical, y `color`.

### Código de ejemplo

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

## Dibujar Rectángulos

Para dibujar o rellenar un rectángulo en la pantalla LCD:

```cpp
drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
```

donde `(x, y)` es la coordenada inicial, `w` es el ancho, `h` es la altura del rectángulo y `color`.

### Código de ejemplo

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

## Dibujar Círculos

Para dibujar o rellenar un círculo en la pantalla LCD:

```cpp
drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
```

donde `(x0, y0)` es el origen, `r` es el radio del círculo y `color`.

### Código de ejemplo

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

Esta biblioteca también proporciona una función para dibujar o rellenar una elipse:

```cpp
drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
```

donde `(x0, y0)` es el origen de la elipse, `rx` es el radio horizontal, `ry` es el radio vertical y `color`.

### Código de ejemplo

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

## Dibujar Triángulos

Para dibujar o rellenar un triángulo en la pantalla LCD:

```cpp
drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
```

donde `(x0, y0)` son las primeras coordenadas, `(x1, y1)` son las segundas coordenadas y `(x2, y2)` son las terceras coordenadas del triángulo, `color`.

### Código de ejemplo

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

## Dibujar rectángulos redondeados

Para dibujar o rellenar rectángulos redondeados en la pantalla LCD:

```cpp
drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
fillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
```

donde `(x, y)` es la coordenada inicial, `w` y `h` para el ancho y alto de los rectángulos, `r` para el radio de las esquinas y `color`.

### Código de ejemplo

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

## Dibujar Caracteres

Para dibujar un solo carácter en la pantalla LCD:

```cpp
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
```

donde `(x, y)` es la ubicación inicial, `c` es el carácter, `color` es el color del carácter, `bg` es el color de fondo del carácter, y `size` es la escala de tamaño del carácter.

### Código de ejemplo

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

## Dibujar Cadenas de Texto

Para dibujar cadenas en la pantalla LCD:

```cpp
drawString(const String& string, int32_t poX, int32_t poY);
```

donde `string` es la cadena de texto, y `(poX, poY)` son las coordenadas de inicio.

### Código de ejemplo

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

## Filling the Screen

Para llenar o colorear toda la pantalla:

```cpp
fillScreen(uint32_t color);
```

### Código de ejemplo

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

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
