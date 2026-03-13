---
description: Xadow - RGB OLED 96*64
title: Xadow - RGB OLED 96*64
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_RGB_OLED_96multiply64
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_RGB_OLED_96multiply64/
---
![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_MainPicture.jpg)

RBG OLED é um módulo de display OLED de matriz de pontos 96*64 de 16 bits com cor RGB. Ele é baseado no módulo SSD1331, que é um driver OLED/PLED CMOS de chip único com 288 segmentos e 64 saídas comuns, suportando até 96 RGB* 64 de matriz de pontos. Ele usa SPI para comunicação.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-RGB-OLED-96x64-p-2125.html)

## Especificações

---
- Tensão de alimentação (VCC)：3,3 V
- Cor do display: RGB
- Matriz de pontos: 96*64
- Temperatura de operação: -20~70 ℃
- Dimensões: 25,43 mm x 20,35 mm

## Definição dos pinos

---
![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_HardwareInterface.png)

Precisamos apenas dos 4 pinos CS, DC, MOSI, SCLK para comunicação. e

**CS**   &lt;==&gt;  **A5**

**DC**   &lt;==&gt;  **3**

**MOSI** &lt;==&gt;  **16**

**SCLK** &lt;==&gt;  **15**

:::caution
    Atenção: impacto forte ou pressão sobre o OLED causará a quebra da tela.
:::

## Primeiros Passos

---
O RGB OLED pode exibir todos os tipos de gráficos e caracteres. Oferecemos vários sketches de exemplo para você brincar com ele.

**A instalação de hardware**

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Connection.jpg)

Nota: Ao conectar o Xadow RGB OLED ao Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto sem preenchimento de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).

**Desenhar linha**

Baixe a [RGB OLED Library](https://github.com/Seeed-Studio/RGB_OLED_SSD1331) e a [SGL Library](https://github.com/Seeed-Studio/SGL) e instale-as na sua biblioteca do Arduino. Abra o sketch de exemplo DrawLine pelo caminho: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawLine.

```
<pre>
/*
 draw rectangle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw several line with different color

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include <SGL.h>
#include <SSD1331.h>
#include <SPI.h>

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
    oled.drawLine(5,7,65,48,COLOR_BLUE);
    delay(1000);
    oled.drawLine(5,40,48,7,COLOR_RED);
    delay(1000);
    oled.drawLine(65,5,47,50,COLOR_GREEN);
    delay(1000);
    oled.drawLine(3,10,80,21,COLOR_YELLOW);
}

void loop(){
    //nothing to do
}
</pre>
```

Selecione a porta correta e o tipo de placa deve ser Seeeduino Xadow, depois envie o código; você poderá ver quatro linhas com cores diferentes sendo desenhadas na tela do RGB OLED como a seguir.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Line.jpg)
![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Line.gif)

**Desenhar círculo**

Abra o sketch de exemplo DrawCircle pelo caminho: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawCircle.

```

/*
 draw circle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a circle

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include <SGL.h>
#include <SSD1331.h>
#include <SPI.h>

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
}

void loop(){
    for(int i = 30; i > 0; i--){
        oled.drawCircle(48,32,i,COLOR_CYAN);
        delay(50);
    }
    for(int i = 1; i <= 30; i++){
        oled.drawCircle(48,32,i,COLOR_RED);
        delay(50);
    }
    for(int i = 30; i > 0; i--){
        oled.drawCircle(48,32,i,COLOR_PURPLE);
        delay(50);
    }
    for(int i = 1; i <= 30; i++){
        oled.drawCircle(48,32,i,COLOR_GOLDEN);
        delay(50);
    }
}

```

Ele é usado para desenhar círculos concêntricos com cores diferentes. Selecione a porta correta e o tipo de placa deve ser Seeeduino Xadow, depois envie o código; você poderá ver muitos círculos com cores diferentes sendo desenhados na tela do RGB OLED como a seguir.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Circle.gif)

**Desenhar retângulo**

Abra o sketch de exemplo DrawRectangle pelo caminho: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawRectangle.

```

/*
 draw rectangle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a rectangle with blue color

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include <SGL.h>
#include <SSD1331.h>
#include <SPI.h>

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
}

void loop(){
    for(int i = 1; i < 16; i++){
        oled.drawRectangle(3*i,2*i,95-6*i,63-4*i,COLOR_YELLOW);
        delay(50);
    }
    delay(2000);
    for(int i = 15; i > 0; i--){
        oled.drawRectangle(3*i,2*i,95-6*i,63-4*i,COLOR_BLUE);
        delay(50);
    }
    delay(2000);
}

```

Selecione a porta correta e o tipo de placa deve ser Seeeduino Xadow, depois envie o código; você poderá ver muitos retângulos sendo desenhados na tela do RGB OLED como a seguir.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Rectangle.gif)

**Desenhar triângulo**

Abra o sketch de exemplo DrawTriangle pelo caminho: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawTriangle.

```

/*
 draw triangle

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a triangle

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include <SGL.h>
#include <SSD1331.h>
#include <SPI.h>

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);

}

void loop(){
    //nothing to do
    uint8_t x0 = random(0,96);
    uint8_t y0 = random(0,64);
    uint8_t x1 = random(0,96);
    uint8_t y1 = random(0,64);
    uint8_t x2 = random(0,96);
    uint8_t y2 = random(0,64);
    oled.drawTraingle(x0,y0,x1,y1,x2,y2,random(0,65536));
    delay(3000);
    oled.fillScreen(COLOR_BLACK);
}

```

Envie o código; você poderá ver triângulos com posição e formato aleatórios sendo desenhados na tela do RGB OLED como a seguir.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Triangle.gif)

**Desenhar string**

Abra o sketch de exemplo DrawString pelo caminho: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawString.

```

/*
 draw string

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a string

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include <SGL.h>
#include <SSD1331.h>
#include <SPI.h>

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

char* str = "Seeed";

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
    oled.drawString(str,15,25,2,COLOR_GREEN);
    delay(2000);
    oled.setScolling(Horizontal,0,64,1);
}

void loop(){
    //nothing to do
}

```

Envie o código; você poderá ver a string "seeed" sendo desenhada na tela do RGB OLED como a seguir.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_String.gif)

**Desenhar BitMap**

Abra o sketch de exemplo DrawBitMap pelo caminho: Files-&gt;Examples-&gt;RGB_OLED_96_64-&gt;examples-&gt;drawBitMap.

```

/*
 draw bitmap

 This sketch is used to test Seeed's Xadow - RGB OLED,
 it will draw a bitmap

 create on 2014/06/24, version: 0.1
 by lawliet.zou(lawliet.zou@gmail.com)
*/

#include <SGL.h>
#include <SSD1331.h>
#include <SPI.h>

#define cs     A5
#define dc     3
#define mosi   16
#define sclk   15

SSD1331 oled = SSD1331(cs, dc, mosi, sclk);

static unsigned char SeeedLogo[] PROGMEM ={
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x80, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x80, 0x06, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x80, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x03, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x0F, 0x00, 0x03, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x01, 0xE0,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x3E, 0x00, 0x01, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7C, 0x00, 0x00, 0xF8,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x7C, 0x00, 0x00, 0xF8, 0x00, 0x60, 0x00, 0x00,
0x00, 0x00, 0x18, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00,
0xFC, 0x00, 0x00, 0xFC, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC,
0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0xE0, 0x00, 0x00,
0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00,
0xFC, 0x00, 0x00, 0xFC, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0xFC, 0x00, 0x00, 0xFC,
0x01, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x01, 0xE0, 0x00, 0x00,
0x00, 0x00, 0x1F, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x03, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x80,
0xFC, 0x00, 0x00, 0xFC, 0x03, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x80, 0xFE, 0x00, 0x00, 0xFC,
0x07, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xC0, 0x7E, 0x00, 0x01, 0xFC, 0x0F, 0xE0, 0x00, 0x00,
0x00, 0x00, 0x0F, 0xC0, 0x7E, 0x00, 0x01, 0xF8, 0x0F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xE0,
0x7E, 0x00, 0x01, 0xF8, 0x1F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF0, 0x3F, 0x00, 0x01, 0xF0,
0x3F, 0x80, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF0, 0x3F, 0x00, 0x03, 0xF0, 0x3F, 0x80, 0x00, 0x00,
0x00, 0x00, 0x03, 0xF8, 0x1F, 0x00, 0x03, 0xE0, 0x7F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFC,
0x1F, 0x80, 0x07, 0xE0, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFE, 0x0F, 0x80, 0x07, 0xC1,
0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x07, 0xC0, 0x07, 0x83, 0xFC, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x7F, 0x83, 0xC0, 0x0F, 0x07, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F,
0xC1, 0xE0, 0x0E, 0x0F, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0xF0, 0xE0, 0x1C, 0x1F,
0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF8, 0x70, 0x38, 0x7F, 0x80, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x03, 0xFC, 0x38, 0x30, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0xFF, 0x00, 0x03, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0x80, 0x07, 0xF0,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xF0, 0x3F, 0xC0, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x01, 0xF8, 0x7E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x08, 0x40, 0x00, 0x00, 0x00, 0x3C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x3C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x00,
0x00, 0x03, 0xF0, 0x0F, 0xC0, 0x0F, 0xC0, 0x0F, 0x80, 0x1F, 0xBC, 0x00, 0x00, 0x0F, 0xF8, 0x3F,
0xF0, 0x3F, 0xF0, 0x3F, 0xE0, 0x7F, 0xFC, 0x00, 0x00, 0x1F, 0xFC, 0x7F, 0xF8, 0x7F, 0xF8, 0x7F,
0xF8, 0xFF, 0xFC, 0x00, 0x00, 0x1F, 0x7E, 0xFE, 0xFC, 0xFD, 0xFC, 0xFD, 0xFD, 0xFD, 0xFC, 0x00,
0x00, 0x1E, 0x1E, 0xF0, 0x3F, 0xF0, 0x3D, 0xE0, 0x3D, 0xE0, 0x7C, 0x00, 0x00, 0x1F, 0xF1, 0xFF,
0xFF, 0xFF, 0xFF, 0xFF, 0xFD, 0xE0, 0x3C, 0x00, 0x00, 0x0F, 0xFD, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
0xFD, 0xC0, 0x3C, 0x00, 0x00, 0x03, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFD, 0xC0, 0x3C, 0x00,
0x00, 0x3C, 0x1E, 0xF0, 0x31, 0xF0, 0x21, 0xE0, 0x21, 0xE0, 0x7C, 0x00, 0x00, 0x3F, 0x3E, 0xFE,
0xFC, 0xFC, 0xF8, 0xFD, 0xF9, 0xFD, 0xFC, 0x00, 0x00, 0x1F, 0xFE, 0x7F, 0xFC, 0x7F, 0xF8, 0x7F,
0xF8, 0xFF, 0xFC, 0x00, 0x00, 0x0F, 0xFC, 0x3F, 0xF0, 0x3F, 0xF0, 0x3F, 0xE0, 0x7F, 0xFC, 0x00,
0x00, 0x03, 0xF0, 0x0F, 0xC0, 0x0F, 0xC0, 0x0F, 0x80, 0x1F, 0xBC, 0x00, 0x00, 0x00, 0x00, 0x00,
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x64, 0xCD, 0xF6, 0xE1, 0xC9, 0x3F,
0x3F, 0xFB, 0xA6, 0x00, 0x00, 0x1F, 0xFF, 0xEF, 0xFF, 0xFF, 0xFF, 0xBF, 0xFF, 0xFF, 0xFE, 0x00,
0x00, 0x1F, 0xFF, 0xEF, 0xFF, 0xFF, 0xFF, 0xBF, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x1F, 0xFF, 0xED,
0xFF, 0xFF, 0xFF, 0xB7, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x20, 0x00, 0x01, 0x00,
0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};

void setup(){
    Serial.begin(9600);
    Serial.println("Start to draw");
    oled.init();
    oled.fillScreen(COLOR_BLACK);
    delay(2000);
    oled.drawBitMap(0,0,SeeedLogo,96,64,COLOR_YELLOW);
    delay(5000);
    Serial.println("start to scoll ...");
    oled.setScolling(Vertical,0,64,0);
}

void loop(){
    //nothing to do
}

```

Envie o código e você verá o logotipo da Seeed em cor amarela sendo desenhado na tela do RGB OLED como a seguir.

![](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_BitMap.gif)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/res/Xadow_OLED.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Arquivo Eagle do Xadow RGB OLED](https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/res/Xadow_OLED.zip)

- [Biblioteca Xadow RGB OLED](https://github.com/Seeed-Studio/RGB_OLED_SSD1331)

- [Biblioteca gráfica da Seeed](https://github.com/Seeed-Studio/SGL)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
