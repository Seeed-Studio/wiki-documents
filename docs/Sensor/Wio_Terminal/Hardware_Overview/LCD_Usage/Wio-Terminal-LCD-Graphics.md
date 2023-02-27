---
title: Graphics 
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Graphics/
slug: /Wio-Terminal-LCD-Graphics
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Basic Graphical functions

This repo describes some of the basic graphical functions of the TFT LCD library on Wio Terminal. You can use these functions to create you own drawing functions!

## Drawing Pixels

To draw a pixel on the LCD screen:

```cpp
drawPixel(int32_t x, int32_t y, uint32_t color);
```

where `(x, y)` is the pixel coordinate and `color` is the colour of the pixel.

### Example code

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

## Drawing Lines

To draw a line between two points on the LCD screen:

```cpp
drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);
```

where the line starts drawing from `(x0, y0)` to `(x1, y1)` and `color`.

### Example code

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

To draw Horizontal or Vertical lines, this librabry also provides optimised functions:

### Drawing Horizontal lines & Vertical lines

```cpp
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); //Horizontal line
drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); //Verical line

```

where `(x, y)` is the starting coordinates and `w` is the width of the horizontal line, and `h` is the height of verical line, and `color`.

### Example code

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

## Drawing Rectangles

To draw or fill a rectangle on the LCD screen:

```cpp
drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
```

where `(x, y)` is the starting coordinate , `w` is the width, `h` is the height of the rectangle and `color`.

### Example code

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

## Drawing Circles

To draw or fill a circle on the LCD screen:

```cpp
drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
```

where `(x0, y0)` is the origin, `r` is the radius of the circle and `color`.

### Example code

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

This library also provides a function to draw or fill a ellipse:

```cpp
drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
```

where `(x0, y0)` is the origin of ellipse, `rx` is horizontal radius, `ry` is the vertical radius and `color`.

### Example code

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

## Drawing Triangles

To draw or fill a triangle on the LCD screen:

```cpp
drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
```

where `(x0, y0)` is the first coordinates, `(x1, y1)` is the second coordinates and `(x2, y2)` is the third coordinates of triangle, `color`.

### Example code

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

## Drawing Round rectangles

To draw or fill a rounded rectanges on the LCD screen:

```cpp
drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
fillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
```

where `(x, y)` is the starting coordinate, `w` and `h` for width and height of rectangles, `r` for the corner radius and `color`.

### Example code

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

## Drawing Characters

To draw a single character on the LCD screen:

```cpp
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
```

where `(x, y)` is the starting location, `c` is the char, `color` is the color of the char, `bg` is the background colour of the char, and `size` is the size scale of the char.

### Example code

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

## Drawing Text Strings

To draw Strings on the LCD screen:

```cpp
drawString(const String& string, int32_t poX, int32_t poY);
```

where `string` is the text string, and `(poX, poY)` is the starting coordinates.

### Example code

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

To fill or colour the entire screen:

```cpp
fillScreen(uint32_t color);
```

### Example code

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

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
