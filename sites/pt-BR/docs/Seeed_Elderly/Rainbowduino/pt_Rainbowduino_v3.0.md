---
description: Rainbowduino_v3.0
title: Rainbowduino v3.0
keywords:
  - Rainbowduino_v3.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rainbowduino_v3.0
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-01-05'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Rainbowduino_v3.0/
---


![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0.jpg)

A placa Rainbowduino é uma placa controladora compatível com Arduino com driver LED multiplexado profissional. Ela pode controlar uma **matriz de LED RGB 8x8** ou um **cubo de LED RGB 4x4x4** em modo ânodo comum. A Rainbowduino v3.0 usa dois chips **MY9221**, que são um **driver de 12 canais** (R/G/B x 4) de corrente constante com Modulação de Densidade de Pulso Adaptativa **(APDM)**. A Rainbowduino v3.0 possui recursos para emendar (cascatear) mais placas desse tipo com interface I2C.

A **Rainbowduino v3.0** vem gravada com o bootloader do Arduino, o que torna fácil programar sketches usando a IDE do Arduino. Diferente de outros drivers de LED, ela vem com um USB para UART (FT232RL) integrado para programar os sketches.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328.html?queryID=bc1228bcd9b9d4b2534accb940b86bea&objectID=2019&indexName=bazaar_retailer_products)

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0b_board_bottom.png)
Parte inferior da **Rainbowduino v3.0**

Características
--------

| Parâmetro                       | Valor                                  |
|---------------------------------|----------------------------------------|
| Saída de corrente constante     | 20,8 mA                                |
| Cabeçalhos de pinos             | 2 x 16 para conectar LEDs multiplexados |
| Capacidade máxima de LEDs       | 192 (ou seja, 8x8x3)                   |
| Mostradores de LED suportados   | Cubo RGB 4x4x4 e Matriz de LED RGB 8x8 |
| USB para UART                   | FT232RL                                |
| Alimentação CC                  | Alimentado por USB ou 6V~12V CC externa |
| Regulador de tensão integrado   | 5V / 1A                                |

Ideias de aplicação
-----------------

- Driver de LED de uso geral
  - Conectar Cubo RGB 4x4x4
  - Conectar Matriz RGB 8x8
- Criar painéis de letreiro de LED encadeando mais de uma **Rainbowduino v3.0**

Uso
-----

### Configuração de hardware

:::note
Sempre coloque a chave deslizante na posição <b>USB</b> para programar a Rainbowduino v3.0. Colocar a chave deslizante na posição <b>HOST</b> faz com que o FT232 onboard atue como UartSBee (este recurso não é necessário para a operação normal da Rainbowduino v3.0)
:::

A conexão com a matriz de LED é muito simples.

- **Conectando a Matriz de LED RGB**
    Conecte o cabeçalho macho 2x16 da Matriz RGB à Rainbowduino como mostrado abaixo (veja a parte de trás da matriz RGB, o cabeçalho macho de 16 pinos mais próximo da marcação de texto "2088RGB" deve ser conectado ao cabeçalho de pinos DRIVE - GREEN - DRIVE da Rainbowduino.)

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_v3.0_with_LED_Matrix.jpg)

**Rainbowduino v3.0 conectada à Matriz de LED RGB 8x8**

(ou)

- **Conectando o Cubo de LED RGB**
    Conecte o cabeçalho macho 2x16 do Rainbow Cube Kit à Rainbowduino como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_1.jpg)

Posicionamento do **cabeçalho de pinos 2x16**

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_2.jpg)

Uma **Rainbowduino** conectada corretamente ao **Rainbow Cube kit**

- Conecte um cabo USB à Rainbowduino para programação.

### Configuração de software

- Na IDE do Arduino --> menu Tools --> Board, selecione "Duemilanove or Diecimila".
- Baixe e instale a biblioteca Rainbouduino 3.0 a partir da seção de recursos.

### Programação

#### Usando com o Cubo de LED RGB

------------------------------------------------------------------------

<!-- ![](https://www.seeedstudio.com/depot/images/cubeani.gif) -->
Vamos começar com um exemplo simples com o Cubo de LED RGB:

- Baixe a biblioteca Rainbowduino v3.0 a partir dos recursos.
- Abra o sketch Cube1.ino (uma cópia dele é reproduzida abaixo):
- Compile e carregue o sketch, cuja cópia é reproduzida abaixo:

```
/*
 Rainbowduino v3.0 Library examples:  Cube1

 Sets pixels on 3D plane (4x4x4 cube)
*/

#include <Rainbowduino.h>

void setup()
{
  Rb.init(); //initialize Rainbowduino driver
}

void loop()
{
  //Set (Z,X,Y):(0,0,0) pixel BLUE
  Rb.setPixelZXY(0,0,0,0x0000FF); //uses 24bit RGB color Code

  //Set (Z,X,Y):(0,3,0) pixel RED
  Rb.setPixelZXY(0,3,0,0xFF,0,0); //uses R, G and B color bytes

  //Set (Z,X,Y):(3,0,3) pixel GREEN
  Rb.setPixelZXY(3,0,3,0x00FF00); //uses 24bit RGB color Code
}
```

Saída:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube1.jpg)

Demo Cube1.pde

A biblioteca Rainbowduino v3.0 fornece muitas APIs para usar o cubo de LED RGB. A seção seguinte as lista e descreve:

| API                                                                                                                                     | Descrição                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Rb.init(void)**                                                                                                                       | Inicializa o driver Rainbowduino; isso deve ser colocado dentro de setup()    |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)** | Define o pixel (z,x,y) especificando cada canal (cor) com um número de 8 bits. |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, uint32_t colorRGB)**                                              | Define o pixel (z,x,y) especificando um código de cor RGB de 24 bits.         |
| **Rb.blankDisplay(void)**                                                                                                               | Esta função é usada para apagar todos os LEDs.                                |

**Demo de setPixelZXY()**

- Para entender o endereçamento de pixels (Z,X,Y), vejamos outro exemplo. Neste demo, a Camada 0 (ou seja, Z-0) é pintada de verde e a Camada 3 é pintada de azul.

```
/*
 Rainbowduino v3.0 Library examples:  Cube2

 Sets pixels on 3D plane (4x4x4 cube)
*/

#include <Rainbowduino.h>

void setup()
{
  Rb.init(); //initialize Rainbowduino driver
}

unsigned int z,x,y;

void loop()
{
  for(x=0;x<4;x++)
  {
    for(y=0;y<4;y++)
    {
     //Paint layer 0 Green
     Rb.setPixelZXY(0,x,y,0x00FF00); //uses 24bit RGB color Code
    }
  }  

  for(x=0;x<4;x++)
  {
    for(y=0;y<4;y++)
    {
     //Paint layer 3 Blue
     Rb.setPixelZXY(3,x,y,0x0000FF); //uses 24bit RGB color Code
    }
  }
}
```

Saída:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube2.jpg)

Demo Cube2.pde

**Demo de Cores Aleatórias com setPixelZXY()**

- Neste demo, todos os LEDs são pintados com alguma cor aleatória. Após cinco segundos de atraso, todo o cubo é repintado com cores aleatórias.

```
    /*
     Rainbowduino v3.0 Library examples:  Cube3

     Sets pixels on 3D plane (4x4x4 cube)
    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init(); //initialize Rainbowduino driver
    }

    unsigned int z,x,y;

    void loop()
    {
     for(z=0;z<4;z++)
     { 
      for(x=0;x<4;x++)
      {
        for(y=0;y<4;y++)
        {
         //Paint random colors
         Rb.setPixelZXY(z,x,y,random(0xFF),random(0xFF),random(0xFF)); //uses R, G and B color bytes
        }
      }
     }
    delay(5000);
    Rb.blankDisplay(); //Clear the LEDs (make all blank)
    }
```

Saída:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube3.jpg)

Demo Cube3.pde

**Demo de Abajur Noturno / Luminária de Humor**

```
/*

 Rainbowduino v3.0 Library examples : Mood Lamp 

*/

#include <Rainbowduino.h>


// HSV to RGB array 

unsigned char RED[64] = {255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,171,154,137,119,102,85,
68,51,34,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,35,52};

unsigned char GREEN[64] = {0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,
255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,170,154,136,120,102,86,68,52,34,18,0,0,0,0};

unsigned char BLUE[64] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,34,52,68,86,102,120,136,154,170,188,
204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255};

void setup()
{
  Rb.init(); //initialize Rainbowduino driver
}

unsigned int z,x,y;
void loop()
{

for(z=0; z<64 ;z++)
{
 for(x=0;x<8;x++)
 {
    for(y=0;y<8;y++)
    {
     //Paint random colors
     //Rb.setPixelZXY(z,x,y,RED[i],GREEN[i],BLUE[i]); //uses R, G and B color bytes
     Rb.setPixelXY(x,y,RED[z],GREEN[z],BLUE[z]); //uses R, G and B color bytes
    }
 }
 delay(100);
}

for(z=63; z > 0 ;z--)
{
 for(x=0;x<8;x++)
 {
    for(y=0;y<8;y++)
    {
     //Paint random colors
     //Rb.setPixelZXY(z,x,y,RED[i],GREEN[i],BLUE[i]); //uses R, G and B color bytes
     Rb.setPixelXY(x,y,RED[z],GREEN[z],BLUE[z]); //uses R, G and B color bytes
    }
 }
 delay(100);
}

}
```

**Cubo de Plasma**

```
/*

 Rainbowduino v3.0 Library examples : 3D Plasma

*/

#include <Rainbowduino.h>

// HSV to RGB array

unsigned char RED[64] = {255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,171,154,137,119,102,85,
68,51,34,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,35,52};

unsigned char GREEN[64] = {0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,
255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,238,221,204,188,170,154,136,120,102,86,68,52,34,18,0,0,0,0};

unsigned char BLUE[64] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,34,52,68,86,102,120,136,154,170,188,
204,221,238,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255};

unsigned char plasma[4][4][4];

void setup()
{
  Rb.init(); //initialize Rainbowduino driver

  for(unsigned char x = 0; x < 4; x++)
  {
    for(unsigned char y = 0; y < 4; y++)
    {
      for(unsigned char z = 0; z < 4; z++)
       {
        int color = int(32.0 + (32.0 * sin(x / 1.0))+ 32.0 + (32.0 * sin(y / 1.0)) + 32.0 + (32.0 * sin(z / 1.0))) / 3;
        plasma[x][y][z] = color;      
       }   
    }
  }
}

unsigned char x,y,z,colorshift=0;

void loop()
{
for(x=0;x<4;x++)  
{
 for(y=0;y<4;y++)  
 {
  for(z=0;z<4;z++)
    {
     Rb.setPixelZXY(z,x,y,(RED[plasma[x][y][z] + colorshift]) % 256,(GREEN[plasma[x][y][z] + colorshift]) % 256,(BLUE[plasma[x][y][z] + colorshift]) % 256); //uses R, G and B color bytes
    }
 }
}
 delay(100);
 colorshift=  colorshift + 1;
}
```

Saída:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Plasma_demo.jpg)

Demonstração PlasmaCube.pde

#### Usando com matriz de LEDs RGB

A biblioteca Rainbowduino v3.0 fornece muitas APIs para usar a matriz de LEDs RGB. A seção a seguir as lista e descreve:

| API                                                                                                                   | Descrição                                                                  |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Rb.init(void)**                                                                                                     | Inicializa o driver do Rainbowduino, isto deve ser colocado dentro de setup()        |
| **Rb.setPixelXY(unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)** | Define o pixel(x,y) especificando cada canal(cor) com um número de 8 bits. |
| **Rb.setPixelXY(unsigned char x, unsigned char y, uint32_t colorRGB)**                                              | Define o pixel(x,y) especificando um código de cor RGB de 24 bits.               |
| **Rb.blankDisplay(void)**                                                                                             | Esta função é usada para apagar todos os LEDs.                                |
| **Rb.drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, uint32_t colorRGB)**                          | Desenha um caractere ASCII de cor uint32_t em (poX,poY).                    |
| **Rb.drawCircle(int poX, int poY, int r, uint32_t color)**                                                           | Desenha um círculo de cor uint32_t com raio r em (poX,poY).                     |
| **Rb.fillCircle(int poX, int poY, int r, uint32_t color)**                                                           | Desenha um círculo preenchido de cor uint32_t com raio r em (poX,poY).                |
| **Rb.drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1, uint32_t color)**                     | Desenha uma linha de (x0,y0) até (x1,y1).                                        |
| **Rb.drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length, uint32_t color)**                      | Desenha uma linha horizontal a partir de (poX,poY) com comprimento em pixels.                     |
| **Rb.drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width, uint32_t color)**     | Desenha o contorno de um retângulo a partir de (poX,poY) com comprimento e largura em pixels.            |
| **Rb.fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, uint32_t color)**    | Desenha um retângulo preenchido a partir de (poX,poY) com comprimento e largura em pixels.     |

**Demonstração de formas**

```
    /*
     Rainbowduino v3.0 Library examples:

     Print Shapes on 2D plane (8x8 matrix)

    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init();
    }

    unsigned char x,y,z;

    void loop()
    {

         Rb.drawCircle(3, 4, 3, 0xFF0000); // draw a red circle of radius 3 at (3,4).
         delay(1000);
         Rb.blankDisplay();

         Rb.fillCircle(3, 4, 2, 0x0000FF); // draw a filled blue circle of radius 2 at (3,4).
         delay(1000);
         Rb.blankDisplay();

         Rb.drawLine(0, 0, 7, 7, 0x00FF00); // draw a line from (0,0) to (7,7).
         delay(1000);
         Rb.blankDisplay();

         Rb.drawVerticalLine(0, 0, 7, random(0xFFFFFF)); // draw a vertical line from (0,0) of length 7 pixels
         delay(1000);
         Rb.blankDisplay();

         Rb.drawHorizontalLine(0, 0, 7, random(0xFFFFFF)); // draw a horizontal line from (0,0) of length 7 pixels
         delay(1000);
         Rb.blankDisplay();

         Rb.drawRectangle(0, 0, 4, 6, random(0xFFFFFF)); // draw a rectangle line from (0,0) of length 4 and width 6 pixels
         delay(1000);
         Rb.blankDisplay();

         Rb.fillRectangle(0, 0, 7, 7, random(0xFFFFFF)); // draw a filled rectangle line from (0,0) of length and width 7 pixels
         delay(1000);
         Rb.blankDisplay();

    }
```

Saída:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Shapes.jpg)

Formas

**Demonstração drawChar**

```
    /*
     Rainbowduino v3.0 Library examples:

     Print Chars on 2D plane (8x8 matrix)

    */

    #include <Rainbowduino.h>

    void setup()
    {
      Rb.init();
    }

    unsigned char x,y,z;

    void loop()
    {

      for(int i= 0x20; i<=0x7E; i++) //generates ASCII value of all printable characters
      {
         Rb.drawChar(i,0,1,random(0xFFFFFF)); 
         delay(500);
         Rb.blankDisplay();
      }

    }
```

Saída:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/CharE.jpg)

## Visualizador de esquemático online

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip"></div>

Recursos
---------

- [Biblioteca Rainbowduino V3.0 para Arduino IDE 1.0 e superior](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_for_Arduino1.0.zip)
- [Biblioteca Rainbowduino3.0 SnakeGame para Arduino 1.0](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/SnakeGame20120601.zip)
- [Esquemático e layout do Rainbowduino V3.0 em formato Eagle](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip)
- [Esquemático do Rainbowduino V3.0 em PDF](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_V3.0b.pdf)
- [Datasheet do driver de LED MY9221](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/MY9221_DS_1.0.pdf)

**Outros produtos, recursos e projetos relacionados:**

- [Rainbow Cube Kit (Montado)](https://www.seeedstudio.com/depot/rainbow-cube-kit-assembled-p-998.html?cPath=138)
- [Rainbow Cube kit- RGB 4X4X4](https://www.seeedstudio.com/depot/rainbow-cube-kit-rgb-4x4x4-rainbowduino-compatible-p-596.html?cPath=138)
- [Matriz de LED 8*8 quadrada de 60 mm - RGB super brilhante](https://www.seeedstudio.com/depot/60mm-square-88-led-matrix-super-bright-rgb-p-113.html?cPath=163_165)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Rainbowduino_v3.0 -->

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
