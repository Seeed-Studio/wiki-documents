---
description: ArduPy LCD
title: ArduPy LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ArduPy-LCD
last_update:
  date: 11/20/2022
  author: Matthew
createdAt: '2023-11-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ArduPy-LCD/
---

# LCD - Referência da API ArduPy

Esta é a referência da API de LCD para uso com ArduPy. Atualmente isso foi testado apenas com o módulo LCD no Wio Terminal.

Para mais informações, visite [**ArduPy**](https://github.com/Seeed-Studio/ArduPy). Para começar com ArduPy, siga as instruções [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-ArduPy/).

**Exemplo de Uso:**

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

## Construtores

```py
class machine.LCD(self)
```

Constrói um novo objeto LCD.


## Referência de Métodos

```py
LCD.setRotation(r)
```

Define a tela para rotação `r`. por exemplo, `LCD.setRotation(1)`.

```py
LCD.setTextColor(color)
LCD.setTextColor(fgcolor, bgcolor)
```

Define a fonte do texto para `color` ou define `fgcolor` como cor de primeiro plano e `bgcolor` como cor de fundo. por exemplo, `LCD.setTextColor(LCD.color.RED)`

```py
LCD.drawCentreString(string, dX, poY, font)
```

Desenha uma string a partir do centro em (x, y) com a fonte especificada. a fonte é usada como um número. por exemplo, `LCD.drawCentreString("Hello", 0, 0, 1)`

```py
LCD.drawString(string, poX, poY, font)
```

Desenha uma string em (x, y) com a fonte especificada. por exemplo, `LCD.drawString("Hello", 160, 120, 2)`

```py
LCD.drawChar(char, poX, poY)
```

Desenha um `char` em (x, y), onde char é o número Ascii. por exemplo, `LCD.drawChar(65, 160, 120)`

```py
LCD.drawCircle(x0, y0, r, color)
```

Desenha um círculo em (x, y) com raio `r` e uma cor especificada. por exemplo, `LCD.drawCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.drawCircleHelper(x0, y0, r, cornername, color)
```

Desenha um auxiliar de círculo em (x0, y0) com raio `r` e um nome de canto numerado. por exemplo, `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.drawEllipse(x, y, rx, ry, color)
```

Desenha uma elipse em (x, y) com raios `rx` e `ry` e `color`. por exemplo, `LCD.drawEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.drawFastHLine(x, y, w, color)
```

Desenha uma linha horizontal na tela começando de (x, y) com largura `w`. por exemplo, `LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)`

```py
LCD.drawFastVLine(x, y, h, color)
```

Desenha uma linha vertical na tela começando de (x, y) com altura `h`. por exemplo, `LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)`

```py
LCD.drawFloat(floatNumber, decimal, x, y , font)
```

Desenha um número float com casas decimais em (x, y). por exemplo, `LCD.drawFloat(3.1415, 2, 160, 120, 1)`

```py
LCD.drawLine(x, y, x1, x2, color)
```

Desenha uma linha de (x, y) até (x1, y1) com `color`. por exemplo, `LCD.drawLine(0, 0, 320, 240,  LCD.color.WHITE)`

```py
LCD.drawNumber(number, x, y, font)
```

Desenha um int `number` em (x, y). por exemplo,`LCD.drawNumber(23, 160, 120, 1)`

```py
LCD.drawPixel(x, y, color)
```

Desenha um pixel em (x, y). por exemplo,`LCD.drawPixel(160, 120, LCD.color.RED)`

```py
LCD.drawRect(x, y, w, h, color)
```

Desenha um retângulo começando em (x, y) com largura `w` e altura `h`. por exemplo, `LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.drawRoundRect(x, y, w, h, r, color)
```

Desenha um retângulo arredondado começando em (x, y) com largura `w`, altura `h` e raio de canto `r`. por exemplo, `LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)
```

Desenha um triângulo usando (x0, y0), (x1, y1) e (x2, y2). por exemplo, `LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`.

```py
LCD.fillCircle(x0, y0, r, color)
```

Preenche um círculo em (x, y) com raio `r` e uma cor especificada. por exemplo, `LCD.fillCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.fillCircleHelper(x0, y0, r, cornername, color)
```

Preenche um auxiliar de círculo em (x0, y0) com raio `r` e um nome de canto numerado. por exemplo, `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.fillEllipse(x, y, rx, ry, color)
```

Preenche uma elipse em (x, y) com raios `rx` e `ry` e `color`. por exemplo, `LCD.fillEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.fillRect(x, y, w, h, color)
```

Preenche um retângulo começando em (x, y) com largura `w` e altura `h`. por exemplo, `LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.fillRoundRect(x, y, w, h, r, color)
```

Preenche um retângulo arredondado começando em (x, y) com largura `w`, altura `h` e raio de canto `r`. por exemplo, `LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)
```

Preenche um triângulo usando (x0, y0), (x1, y1) e (x2, y2). por exemplo, `LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`.

```py
LCD.fillScreen(color)
```

Preenche toda a tela do LCD com uma cor. por exemplo, `LCD.fillScreen(LCD.color.GREEN)`.

```py
LCD.invertDisplay(n)
```

Inverte a tela. por exemplo, `LCD.invertDisplay(0)` ou `LCD.invertDisplay(1)`

```py
LCD.setPivot(x, y)
```

Define o pivô em (x, y)

```py
LCD.setTextDatum(datum)
```

Define `datum` como o datum do texto.

```py
LCD.setTextFont(font)
```

Define a fonte, onde a fonte pode ser usada como cor. por exemplo, `LCD.setTextFont(2)`.

```py
LCD.setTextSize(size)
```

Define o tamanho da fonte. por exemplo, `LCD.setTextSize(5)`

```py
LCD.textWidth(string)
```

Retorna o comprimento da string. por exemplo, `LCD.textWidth("Hello World")`

## Referência de Constantes

```py
LCD.color.BLACK # use TAB to check other available colors
```

Cores definidas. Também inclui muitas cores diferentes; é possível usar `dir(LCD.color)` para verificar todas as cores disponíveis.

```py
LCD.color565(R, G, B)
```

Converte o modelo de cor RGB em código de cor de 16 bits. Por exemplo, você pode usar `LCD.fillScreen(LCD.color565(255,0,0))` para preencher a tela de vermelho.

```py
LCD.color16to8()
```

Converte cor de 16 bits para 8 bits.

```py
LCD.width # Width of LCD, 320
```

```py
LCD.height # Height of LCD, 240
```

```py
LCD.getCursorX()
```

Retorna a posição x do cursor.

```py
LCD.getCursorY()
```

Retorna a posição y do cursor.

```py
LCD.getRotation()
```

Retorna a rotação atual da tela do LCD.

```py
LCD.getTextDatum()
```

Retorna o datum do texto.

## Exemplo de Uso

Aqui serão exibidos alguns gráficos desenhados usando a API de LCD.

### Gráfico de Pizza

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif" /></div>


Encontre o código completo [aqui](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

### Medidor Analógico

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif" /></div>

Encontre o código completo [aqui](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
