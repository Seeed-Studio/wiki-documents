---
description: ArduPy LCD
title: ArduPy LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/ArduPy-LCD
last_update:
  date: 3/04/2024
  author: 金菊
---

# LCD - ArduPy API 参考

这是用于 ArduPy 的 LCD API 参考。目前仅在 Wio Terminal 上的 LCD 模块上进行了测试.

有关更多信息，请访问 [**ArduPy**](https://github.com/Seeed-Studio/ArduPy). 要开始使用 ArduPy，请按照 [此处](https://wiki.seeedstudio.com/Wio-Terminal-ArduPy/)的说明。

**示例用法:**

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

## 构造函数

```py
class machine.LCD(self)
```

构造一个新的LCD对象。


## 方法参考

```py
LCD.setRotation(r)
```

设置显示屏的旋转为  `r` 。例如： `LCD.setRotation(1)`。

```py
LCD.setTextColor(color)
LCD.setTextColor(fgcolor, bgcolor)
```

设置文本字体颜色为  `color`  或将  `fgcolor` 设置为前景色，  `bgcolor`  设置为背景色。例如： `LCD.setTextColor(LCD.color.RED)`

```py
LCD.drawCentreString(string, dX, poY, font)
```

在指定字体中心位置(x, y)处绘制字符串。字体以数字表示。例如： `LCD.drawCentreString("Hello", 0, 0, 1)`

```py
LCD.drawString(string, poX, poY, font)
```

在指定字体位置(x, y)处绘制字符串。例如： `LCD.drawString("Hello", 160, 120, 2)`

```py
LCD.drawChar(char, poX, poY)
```

在指定位置(x, y)处绘制字符  `char` ，其中 char 是 ASCII 码。例如： `LCD.drawChar(65, 160, 120)`

```py
LCD.drawCircle(x0, y0, r, color)
```

在指定位置(x, y)处绘制半径为 r 的圆，并指定颜色。例如： `LCD.drawCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.drawCircleHelper(x0, y0, r, cornername, color)
```

在指定位置(x0, y0)处绘制具有半径 r 和指定角落名称的圆。例如： `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.drawEllipse(x, y, rx, ry, color)
```

在指定位置(x, y)处绘制具有  `rx` 和 `ry`  半径的椭圆，并指定 `color`。例如： `LCD.drawEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.drawFastHLine(x, y, w, color)
```

从指定位置(x, y)开始绘制水平线段，宽度为 `w` 。例如： `LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)`

```py
LCD.drawFastVLine(x, y, h, color)
```

从指定位置(x, y)开始绘制垂直线段，高度为 `h`。例如： `LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)`

```py
LCD.drawFloat(floatNumber, decimal, x, y , font)
```

在指定位置(x, y)绘制带有小数位数的浮点数。例如： `LCD.drawFloat(3.1415, 2, 160, 120, 1)`

```py
LCD.drawLine(x, y, x1, x2, color)
```

从位置(x, y)绘制线段到(x1, y1)，并指定 `color`。例如： `LCD.drawLine(0, 0, 320, 240,  LCD.color.WHITE)`

```py
LCD.drawNumber(number, x, y, font)
```

在位置(x, y)处绘制整数  `number` 。例如：`LCD.drawNumber(23, 160, 120, 1)`

```py
LCD.drawPixel(x, y, color)
```

在位置(x, y)处绘制像素点。例如：`LCD.drawPixel(160, 120, LCD.color.RED)`

```py
LCD.drawRect(x, y, w, h, color)
```

从位置(x, y)开始绘制具有宽度  `w` 和高度  `h`  的矩形。例如： `LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.drawRoundRect(x, y, w, h, r, color)
```

从位置(x, y)开始绘制具有宽度  `w` 、高度  `h` 和 `r`  圆角半径的圆角矩形。例如：`LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)
```

使用(x0, y0)，(x1, y1)和(x2, y2)绘制一个三角形。例如： `LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`

```py
LCD.fillCircle(x0, y0, r, color)
```

在位置(x, y)处绘制填充半径为  `r`的圆，并指定颜色。例如： `LCD.fillCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.fillCircleHelper(x0, y0, r, cornername, color)
```

在位置(x0, y0)处绘制具有半径  `r` 、指定角落名称和 delta 的填充圆。例如： `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.fillEllipse(x, y, rx, ry, color)
```

在位置(x, y)处绘制具有  `rx` 和 `ry` 半径的填充椭圆，并指定 `color`。例如： `LCD.fillEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.fillRect(x, y, w, h, color)
```

从位置(x, y)开始绘制具有宽度  `w` 和高度 `h` 的填充矩形。例如. `LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.fillRoundRect(x, y, w, h, r, color)
```

从位置(x, y)开始绘制具有宽度  `w` 、高度 `h` 和 `r` 圆角半径的填充圆角矩形。例如： `LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)
```

填充三角形，使用顶点坐标(x0, y0)，(x1, y1)，(x2, y2)。例如： `LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`

```py
LCD.fillScreen(color)
```

填充整个LCD屏幕为指定颜色。例如： `LCD.fillScreen(LCD.color.GREEN)`

```py
LCD.invertDisplay(n)
```

反转显示。例如： `LCD.invertDisplay(0)` 或 `LCD.invertDisplay(1)`

```py
LCD.setPivot(x, y)
```

设置旋转的中心点坐标为(x, y)

```py
LCD.setTextDatum(datum)
```

设置文本的对齐方式为 `datum` 

```py
LCD.setTextFont(font)
```

设置字体，其中字体可以用作颜色。例如： `LCD.setTextFont(2)`.

```py
LCD.setTextSize(size)
```

设置字体大小。例如： `LCD.setTextSize(5)`

```py
LCD.textWidth(string)
```

返回字符串的长度。例如： `LCD.textWidth("Hello World")`

## 常量参考

```py
LCD.color.BLACK # use TAB to check other available colors
```

定义的颜色。还包括许多不同的颜色，可以使用 `dir(LCD.color)` 查看所有可用的颜色。

```py
LCD.color565(R, G, B)
```

将RGB颜色模型转换为16位颜色代码。例如，可以使用 `LCD.fillScreen(LCD.color565(255,0,0))` 将屏幕填充为红色。

```py
LCD.color16to8()
```

将16位颜色转换为8位颜色。

```py
LCD.width # Width of LCD, 320
```

```py
LCD.height # Height of LCD, 240
```

```py
LCD.getCursorX()
```

返回光标的x位置。

```py
LCD.getCursorY()
```

返回光标的y位置。

```py
LCD.getRotation()
```

返回LCD显示的当前旋转。

```py
LCD.getTextDatum()
```

返回文本的对齐方式。

## 示例用法

这里将展示使用LCD API绘制的一些图形。

### 饼图

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif" /></div>


请在 [此处](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/)此处找到完整的代码。

### 模拟仪表

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif" /></div>

请在 [此处](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/)此处找到完整的代码。

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品有一个顺利的体验。我们提供多种沟通渠道，以满足不同的偏好和需求！

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
