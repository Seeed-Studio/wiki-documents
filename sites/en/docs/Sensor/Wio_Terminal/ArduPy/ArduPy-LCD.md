---
description: ArduPy LCD
title: ArduPy LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ArduPy-LCD
last_update:
  date: 11/20/2022
  author: Matthew
---

# LCD - ArduPy API Reference

This is the LCD API reference for ArduPy usage. This is currently only tested with LCD module on Wio Terminal.

For more information, please visit [**ArduPy**](https://github.com/Seeed-Studio/ArduPy). To get started with ArduPy, please follow [here](https://wiki.seeedstudio.com/Wio-Terminal-ArduPy/).

**Example Usage:**

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

## Constructors

```py
class machine.LCD(self)
```

Construct a new LCD object.


## Methods Reference

```py
LCD.setRotation(r)
```

Sets the Display  to `r` rotation. e.g. `LCD.setRotation(1)`.

```py
LCD.setTextColor(color)
LCD.setTextColor(fgcolor, bgcolor)
```

Sets the text font to `color` or setting `fgcolor` to frontend color and `bgcolor` to backend color. e.g. `LCD.setTextColor(LCD.color.RED)`

```py
LCD.drawCentreString(string, dX, poY, font)
```

Draws a string from centre at (x, y) with specified font. font is used as a number. e.g. `LCD.drawCentreString("Hello", 0, 0, 1)`

```py
LCD.drawString(string, poX, poY, font)
```

Draws a string at (x, y) with specified font. e.g. `LCD.drawString("Hello", 160, 120, 2)`

```py
LCD.drawChar(char, poX, poY)
```

Draws a `char` at (x, y), where char is the Ascii number. e.g. `LCD.drawChar(65, 160, 120)`

```py
LCD.drawCircle(x0, y0, r, color)
```

Draws a circle at (x, y) with `r` radius and a specified color. e.g. `LCD.drawCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.drawCircleHelper(x0, y0, r, cornername, color)
```

Draws a circle helper at (x0, y0) with `r` radius and a numbered cornername. e.g. `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.drawEllipse(x, y, rx, ry, color)
```

Draws a Ellipse at (x, y) with `rx` and `ry` radius and `color`. e.g. `LCD.drawEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.drawFastHLine(x, y, w, color)
```

Draws a Horizontal Line on screen starting from (x, y) with width `w`. e.g. `LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)`

```py
LCD.drawFastVLine(x, y, h, color)
```

Draws a vertical Line on screen starting from (x, y) with height `h`. e.g. `LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)`

```py
LCD.drawFloat(floatNumber, decimal, x, y , font)
```

Draws a float number with decimal places at (x, y). e.g. `LCD.drawFloat(3.1415, 2, 160, 120, 1)`

```py
LCD.drawLine(x, y, x1, x2, color)
```

Draws a line from (x, y) to (x1, y1) with `color`. e.g. `LCD.drawLine(0, 0, 320, 240,  LCD.color.WHITE)`

```py
LCD.drawNumber(number, x, y, font)
```

Draws an int `number` at (x, y). e.g.`LCD.drawNumber(23, 160, 120, 1)`

```py
LCD.drawPixel(x, y, color)
```

Draws a pixel at (x, y). e.g.`LCD.drawPixel(160, 120, LCD.color.RED)`

```py
LCD.drawRect(x, y, w, h, color)
```

Draws a rectangle starting at (x, y) with `w` width and `h` height. e.g. `LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.drawRoundRect(x, y, w, h, r, color)
```

Draws a rounded rectangle starting at (x, y) with `w` width and `h` height and `r` corner radius. e.g. `LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)
```

Draws a triangle using (x0, y0), (x1, y1) and (x2, y2). e.g. `LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`.

```py
LCD.fillCircle(x0, y0, r, color)
```

Fills a circle at (x, y) with `r` radius and a specified color. e.g. `LCD.fillCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.fillCircleHelper(x0, y0, r, cornername, color)
```

Fills a circle helper at (x0, y0) with `r` radius and a numbered cornername. e.g. `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.fillEllipse(x, y, rx, ry, color)
```

Filss a Ellipse at (x, y) with `rx` and `ry` radius and `color`. e.g. `LCD.fillEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.fillRect(x, y, w, h, color)
```

Fills a rectangle starting at (x, y) with `w` width and `h` height. e.g. `LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.fillRoundRect(x, y, w, h, r, color)
```

Fills a rounded rectangle starting at (x, y) with `w` width and `h` height and `r` corner radius. e.g. `LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)
```

Fills a triangle using (x0, y0), (x1, y1) and (x2, y2). e.g. `LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`.

```py
LCD.fillScreen(color)
```

Fills the entire LCD screen with color. e.g. `LCD.fillScreen(LCD.color.GREEN)`.

```py
LCD.invertDisplay(n)
```

Inverts the display. e.g. `LCD.invertDisplay(0)` or `LCD.invertDisplay(1)`

```py
LCD.setPivot(x, y)
```

Sets the Pivot at (x, y)

```py
LCD.setTextDatum(datum)
```

Sets the `datum` as the text datum.

```py
LCD.setTextFont(font)
```

Sets the font, where font can be used as color. e.g. `LCD.setTextFont(2)`.

```py
LCD.setTextSize(size)
```

Sets the size of font. e.g. `LCD.setTextSize(5)`

```py
LCD.textWidth(string)
```

Returns the length of string. e.g. `LCD.textWidth("Hello World")`

## Constants Reference

```py
LCD.color.BLACK # use TAB to check other available colors
```

Defined colors. Also include many different colors, can use `dir(LCD.color)` to check all available colors.

```py
LCD.color565(R, G, B)
```

Converts RGB color model to color code in 16 bit. For example, you can do `LCD.fillScreen(LCD.color565(255,0,0))` to fill the screen to red.

```py
LCD.color16to8()
```

Converts 16 bit color to 8 bit.

```py
LCD.width # Width of LCD, 320
```

```py
LCD.height # Height of LCD, 240
```

```py
LCD.getCursorX()
```

Returns the x position of the cursor.

```py
LCD.getCursorY()
```

Returns the y position of the cursor.

```py
LCD.getRotation()
```

Returns the current rotation of the LCD displaying.

```py
LCD.getTextDatum()
```

Returns the Datum of text.

## Example Usage

Here will show some graphics drawn using the LCD API.

### Pie Chart

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif" /></div>


Please find the complete code [here](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

### Analog Meter

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif" /></div>

Please find the complete code [here](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
