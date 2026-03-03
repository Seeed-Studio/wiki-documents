---
description: ArduPy LCD
title: ArduPy LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/ArduPy-LCD
last_update:
  date: 11/20/2022
  author: Matthew
---

# LCD - Referencia de API de ArduPy

Esta es la referencia de API de LCD para el uso de ArduPy. Actualmente solo está probada con el módulo LCD en Wio Terminal.

Para más información, por favor visita [**ArduPy**](https://github.com/Seeed-Studio/ArduPy). Para comenzar con ArduPy, por favor sigue [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-ArduPy/).

**Ejemplo de Uso:**

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

## Constructores

```py
class machine.LCD(self)
```

Construye un nuevo objeto LCD.

## Referencia de Métodos

```py
LCD.setRotation(r)
```

Establece la pantalla a la rotación `r`. Por ejemplo, `LCD.setRotation(1)`.

```py
LCD.setTextColor(color)
LCD.setTextColor(fgcolor, bgcolor)
```

Establece la fuente del texto a `color` o configurando `fgcolor` al color del primer plano y `bgcolor` al color del fondo. p. ej. `LCD.setTextColor(LCD.color.RED)`

```py
LCD.drawCentreString(string, dX, poY, font)
```

Dibuja una cadena desde el centro en (x, y) con la fuente especificada. font se usa como un número. p. ej. `LCD.drawCentreString("Hello", 0, 0, 1)`

```py
LCD.drawString(string, poX, poY, font)
```

Dibuja una cadena en (x, y) con la fuente especificada. ej. `LCD.drawString("Hello", 160, 120, 2)`

```py
LCD.drawChar(char, poX, poY)
```

Dibuja un `char` en (x, y), donde char es el número Ascii. ej. `LCD.drawChar(65, 160, 120)`

```py
LCD.drawCircle(x0, y0, r, color)
```

Dibuja un círculo en (x, y) con radio `r` y un color especificado. ej. `LCD.drawCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.drawCircleHelper(x0, y0, r, cornername, color)
```

Dibuja un ayudante de círculo en (x0, y0) con radio `r` y un nombre de esquina numerado. ej. `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.drawEllipse(x, y, rx, ry, color)
```

Dibuja una elipse en (x, y) con radio `rx` y `ry` y `color`. ej. `LCD.drawEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.drawFastHLine(x, y, w, color)
```

Dibuja una línea horizontal en pantalla comenzando desde (x, y) con ancho `w`. ej. `LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)`

```py
LCD.drawFastVLine(x, y, h, color)
```

Dibuja una línea vertical en pantalla comenzando desde (x, y) con altura `h`. ej. `LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)`

```py
LCD.drawFloat(floatNumber, decimal, x, y , font)
```

Dibuja un número flotante con lugares decimales en (x, y). ej. `LCD.drawFloat(3.1415, 2, 160, 120, 1)`

```py
LCD.drawLine(x, y, x1, x2, color)
```

Dibuja una línea desde (x, y) hasta (x1, y1) con `color`. ej. `LCD.drawLine(0, 0, 320, 240,  LCD.color.WHITE)`

```py
LCD.drawNumber(number, x, y, font)
```

Dibuja un `number` entero en (x, y). ej. `LCD.drawNumber(23, 160, 120, 1)`

```py
LCD.drawPixel(x, y, color)
```

Dibuja un píxel en (x, y). ej. `LCD.drawPixel(160, 120, LCD.color.RED)`

```py
LCD.drawRect(x, y, w, h, color)
```

Dibuja un rectángulo comenzando en (x, y) con ancho `w` y altura `h`. ej. `LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.drawRoundRect(x, y, w, h, r, color)
```

Dibuja un rectángulo redondeado comenzando en (x, y) con ancho `w` y altura `h` y radio de esquina `r`. ej. `LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)
```

Dibuja un triángulo usando (x0, y0), (x1, y1) y (x2, y2). p. ej. `LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`.

```py
LCD.fillCircle(x0, y0, r, color)
```

Rellena un círculo en (x, y) con radio `r` y un color especificado. ej. `LCD.fillCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.fillCircleHelper(x0, y0, r, cornername, color)
```

Rellena un ayudante de círculo en (x0, y0) con radio `r` y un nombre de esquina numerado. ej. `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.fillEllipse(x, y, rx, ry, color)
```

Rellena una elipse en (x, y) con radio `rx` y `ry` y `color`. ej. `LCD.fillEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.fillRect(x, y, w, h, color)
```

Rellena un rectángulo comenzando en (x, y) con ancho `w` y altura `h`. ej. `LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.fillRoundRect(x, y, w, h, r, color)
```

Rellena un rectángulo redondeado comenzando en (x, y) con ancho `w` y altura `h` y radio de esquina `r`. ej. `LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)
```

Rellena un triángulo usando (x0, y0), (x1, y1) y (x2, y2). ej. `LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`.

```py
LCD.fillScreen(color)
```

Llena toda la pantalla LCD con color. ej. `LCD.fillScreen(LCD.color.GREEN)`.

```py
LCD.invertDisplay(n)
```

Invierte la pantalla. ej. `LCD.invertDisplay(0)` o `LCD.invertDisplay(1)`

```py
LCD.setPivot(x, y)
```

Establece el punto de pivote en (x, y)

```py
LCD.setTextDatum(datum)
```

Establece el `datum` como el datum del texto.

```py
LCD.setTextFont(font)
```

Establece la fuente, donde font puede usarse como color. ej. `LCD.setTextFont(2)`.

```py
LCD.setTextSize(size)
```

Establece el tamaño de la fuente. ej. `LCD.setTextSize(5)`

```py
LCD.textWidth(string)
```

Devuelve la longitud de la cadena. ej. `LCD.textWidth("Hello World")`

## Referencia de Constantes

```py
LCD.color.BLACK # use TAB to check other available colors
```

Colores definidos. También incluye muchos colores diferentes, puedes usar `dir(LCD.color)` para verificar todos los colores disponibles.

```py
LCD.color565(R, G, B)
```

Convierte el modelo de color RGB a código de color de 16 bits. Por ejemplo, puedes hacer `LCD.fillScreen(LCD.color565(255,0,0))` para llenar la pantalla de rojo.

```py
LCD.color16to8()
```

Convierte color de 16 bits a 8 bits.

```py
LCD.width # Width of LCD, 320
```

```py
LCD.height # Height of LCD, 240
```

```py
LCD.getCursorX()
```

Devuelve la posición x del cursor.

```py
LCD.getCursorY()
```

Devuelve la posición y del cursor.

```py
LCD.getRotation()
```

Devuelve la rotación actual de la pantalla LCD.

```py
LCD.getTextDatum()
```

Devuelve el Datum del texto.

## Ejemplo de Uso

Aquí se mostrarán algunos gráficos dibujados usando la API LCD.

### Gráfico Circular

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif" /></div>

Por favor encuentra el código completo [aquí](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

### Medidor Analógico

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif" /></div>

Por favor encuentra el código completo [aquí](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

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
