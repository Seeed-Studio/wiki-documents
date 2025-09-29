---
description: ArduPy LCD
title: ArduPy LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/ArduPy-LCD
last_update:
  date: 11/20/2022
  author: Matthew
---

# LCD - ArduPy API 参考

这是用于 ArduPy 的 LCD API 参考。目前仅在 Wio Terminal 上的 LCD 模块上进行了测试。

更多信息，请访问 [**ArduPy**](https://github.com/Seeed-Studio/ArduPy)。要开始使用 ArduPy，请参考[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-ArduPy/)。

**使用示例：**

```py
from machine import LCD

lcd = LCD()                            # 初始化 LCD 并打开背光
lcd.fillScreen(lcd.color.BLACK)        # 用黑色填充 LCD 屏幕
lcd.setTextSize(2)                     # 设置字体大小为 2
lcd.setTextColor(lcd.color.GREEN)      # 设置文本颜色为绿色
lcd.drawString("Hello World!", 0, 0)   # 在 (0, 0) 位置打印 Hello World
```

## 构造函数

```py
class machine.LCD(self)
```

构造一个新的 LCD 对象。


## 方法参考

```py
LCD.setRotation(r)
```

将显示屏设置为 `r` 旋转角度。例如 `LCD.setRotation(1)`。

```py
LCD.setTextColor(color)
LCD.setTextColor(fgcolor, bgcolor)
```

设置文本字体为 `color` 颜色，或设置 `fgcolor` 为前景色，`bgcolor` 为背景色。例如 `LCD.setTextColor(LCD.color.RED)`

```py
LCD.drawCentreString(string, dX, poY, font)
```

在 (x, y) 位置以指定字体居中绘制字符串。font 用作数字。例如 `LCD.drawCentreString("Hello", 0, 0, 1)`

```py
LCD.drawString(string, poX, poY, font)
```

在 (x, y) 位置以指定字体绘制字符串。例如 `LCD.drawString("Hello", 160, 120, 2)`

```py
LCD.drawChar(char, poX, poY)
```

在 (x, y) 位置绘制一个 `char` 字符，其中 char 是 ASCII 数字。例如 `LCD.drawChar(65, 160, 120)`

```py
LCD.drawCircle(x0, y0, r, color)
```

在 (x, y) 位置绘制一个半径为 `r` 的指定颜色圆形。例如 `LCD.drawCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.drawCircleHelper(x0, y0, r, cornername, color)
```

在 (x0, y0) 位置绘制一个半径为 `r` 的圆形辅助线，cornername 为编号。例如 `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.drawEllipse(x, y, rx, ry, color)
```

在 (x, y) 位置绘制一个 x 轴半径为 `rx`、y 轴半径为 `ry` 的指定 `color` 颜色椭圆。例如 `LCD.drawEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.drawFastHLine(x, y, w, color)
```

在屏幕上从 (x, y) 位置开始绘制宽度为 `w` 的水平线。例如 `LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)`

```py
LCD.drawFastVLine(x, y, h, color)
```

在屏幕上从 (x, y) 位置开始绘制高度为 `h` 的垂直线。例如 `LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)`

```py
LCD.drawFloat(floatNumber, decimal, x, y , font)
```

在 (x, y) 位置绘制带小数位的浮点数。例如 `LCD.drawFloat(3.1415, 2, 160, 120, 1)`

```py
LCD.drawLine(x, y, x1, x2, color)
```

从 (x, y) 到 (x1, y1) 绘制指定 `color` 颜色的直线。例如 `LCD.drawLine(0, 0, 320, 240,  LCD.color.WHITE)`

```py
LCD.drawNumber(number, x, y, font)
```

在 (x, y) 位置绘制整数 `number`。例如 `LCD.drawNumber(23, 160, 120, 1)`

```py
LCD.drawPixel(x, y, color)
```

在 (x, y) 位置绘制一个像素点。例如 `LCD.drawPixel(160, 120, LCD.color.RED)`

```py
LCD.drawRect(x, y, w, h, color)
```

从 (x, y) 位置开始绘制宽度为 `w`、高度为 `h` 的矩形。例如 `LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.drawRoundRect(x, y, w, h, r, color)
```

从 (x, y) 位置开始绘制宽度为 `w`、高度为 `h`、圆角半径为 `r` 的圆角矩形。例如 `LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)
```

使用 (x0, y0)、(x1, y1) 和 (x2, y2) 三个点绘制三角形。例如 `LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`。

```py
LCD.fillCircle(x0, y0, r, color)
```

在 (x, y) 位置填充一个半径为 `r` 的指定颜色圆形。例如 `LCD.fillCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.fillCircleHelper(x0, y0, r, cornername, color)
```

在 (x0, y0) 位置填充一个半径为 `r` 的圆形辅助区域，cornername 为编号。例如 `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.fillEllipse(x, y, rx, ry, color)
```

在 (x, y) 位置填充一个 x 轴半径为 `rx`、y 轴半径为 `ry` 的指定 `color` 颜色椭圆。例如 `LCD.fillEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.fillRect(x, y, w, h, color)
```

从 (x, y) 位置开始填充宽度为 `w`、高度为 `h` 的矩形。例如 `LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.fillRoundRect(x, y, w, h, r, color)
```

从 (x, y) 位置开始填充宽度为 `w`、高度为 `h`、圆角半径为 `r` 的圆角矩形。例如 `LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)
```

使用 (x0, y0)、(x1, y1) 和 (x2, y2) 三个点填充三角形。例如 `LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`。

```py
LCD.fillScreen(color)
```

用指定颜色填充整个 LCD 屏幕。例如 `LCD.fillScreen(LCD.color.GREEN)`。

```py
LCD.invertDisplay(n)
```

反转显示。例如 `LCD.invertDisplay(0)` 或 `LCD.invertDisplay(1)`

```py
LCD.setPivot(x, y)
```

在 (x, y) 位置设置枢轴点

```py
LCD.setTextDatum(datum)
```

设置 `datum` 作为文本基准点。

```py
LCD.setTextFont(font)
```

设置字体，其中 font 可以用作颜色。例如 `LCD.setTextFont(2)`。

```py
LCD.setTextSize(size)
```

设置字体大小。例如 `LCD.setTextSize(5)`

```py
LCD.textWidth(string)
```

返回字符串的长度。例如 `LCD.textWidth("Hello World")`

## 常量参考

```py
LCD.color.BLACK # 使用 TAB 键查看其他可用颜色
```

定义的颜色。还包括许多不同的颜色，可以使用 `dir(LCD.color)` 来查看所有可用颜色。

```py
LCD.color565(R, G, B)
```

将 RGB 颜色模型转换为 16 位颜色代码。例如，您可以执行 `LCD.fillScreen(LCD.color565(255,0,0))` 来将屏幕填充为红色。

```py
LCD.color16to8()
```

将 16 位颜色转换为 8 位。

```py
LCD.width # LCD 的宽度，320
```

```py
LCD.height # LCD 的高度，240
```

```py
LCD.getCursorX()
```

返回光标的 x 位置。

```py
LCD.getCursorY()
```

返回光标的 y 位置。

```py
LCD.getRotation()
```

返回 LCD 显示的当前旋转角度。

```py
LCD.getTextDatum()
```

返回文本的基准点。

## 示例用法

这里将展示一些使用 LCD API 绘制的图形。

### 饼图

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif" /></div>


请在[这里](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/)找到完整代码。

### 模拟仪表

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif" /></div>

请在[这里](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/)找到完整代码。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>