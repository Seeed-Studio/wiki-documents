---
description: Rainbowduino_v3.0
title: Rainbowduino v3.0
keywords:
- Rainbowduino_v3.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Rainbowduino_v3.0
last_update:
  date: 01/20/2023
  author: Matthew
---


![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0.jpg)

La placa Rainbowduino es una placa controladora compatible con Arduino con controlador LED multiplexado profesional. Puede controlar una **Matriz LED RGB de 8x8** o un **Cubo LED RGB de 4x4x4** en modo ánodo común. Rainbowduino v3.0 utiliza dos chips **MY9221** que son de **12 canales** (R/G/B x 4) de corriente constante con Modulación de Densidad de Pulso Adaptativa **(APDM)**. Rainbowduino v3.0 tiene provisiones para conectar en cascada más placas de este tipo con interfaz I2C.

**Rainbowduino v3.0** viene programado con el cargador de arranque de Arduino y esto facilita la programación de sketches usando el IDE de Arduino. A diferencia de otros controladores LED, este viene con un USB a UART (FT232RL) integrado para programar los sketches.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328.html?queryID=bc1228bcd9b9d4b2534accb940b86bea&objectID=2019&indexName=bazaar_retailer_products)

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_V3.0b_board_bottom.png)
**Rainbowduino v3.0** parte inferior

Características
---------------

| Parámetro                           | Valor                                      |
|-------------------------------------|--------------------------------------------|
| Salida de corriente constante       | 20.8mA                                     |
| Conectores de pines                 | 2 x 16 para conectar LEDs multiplexados   |
| Capacidad máxima de control de LEDs | 192 (es decir 8x8x3)                      |
| Pantallas LED compatibles           | Cubo RGB 4x4x4 y Matriz LED RGB 8x8       |
| USB a UART                          | FT232RL                                    |
| Alimentación DC                     | Alimentado por USB o DC externo 6V~12V    |
| Regulador de voltaje integrado      | 5V / 1A                                    |

Ideas de Aplicación
-----------------

- Controlador LED de propósito general
  - Conectar Cubo RGB 4x4x4
  - Conectar Matriz RGB 8x8
- Crear tableros de señalización LED encadenando más de un **Rainbowduino v3.0**

Uso
-----

### Configuración de Hardware

:::note
Siempre configura el interruptor deslizante en la posición <b>USB</b> para programar el Rainbowduino v3.0. Configurar el interruptor deslizante en la posición <b>HOST</b> hace que el FT232 integrado actúe como UartSBee (Esta característica no es requerida para la operación normal del Rainbowduino v3.0)
:::

Conectar a la matriz LED es muy directo.

- **Conectando Matriz LED RGB**
    Conecta el conector macho de 2x16 pines de la Matriz RGB al Rainbowduino como se muestra a continuación (Ve la parte posterior de la matriz RGB, el conector macho de 16 pines más cercano al texto "2088RGB" debe conectarse al conector DRIVE - GREEN- DRIVE del Rainbowduino.)

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbowduino_v3.0_with_LED_Matrix.jpg)

**Rainbowduino v3.0 conectado a Matriz LED RGB 8x8**

(o)

- **Conectando Cubo LED RGB**
    Conecta el conector macho de 2x16 pines del Kit Rainbow Cube al Rainbowduino como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_1.jpg)

Posicionamiento del **conector de 2x16 pines**

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Installation_2.jpg)

Un **Rainbowduino** conectado correctamente al **kit Rainbow Cube**

- Conecta un cable USB al Rainbowduino para programación.

### Configuración de Software

- En Arduino IDE --> Herramientas --> menú Placa, selecciona "Duemilanove or Diecimila".
- Descarga e instala la librería Rainbouduino 3.0 de la sección de recursos.

### Programación

#### Usando con Cubo LED RGB

------------------------------------------------------------------------

<!-- ![](https://www.seeedstudio.com/depot/images/cubeani.gif) -->
Comencemos con un ejemplo simple con Cubo LED RGB:

- Descarga la Librería Rainbowduino v3.0 de los recursos.
- Abre el sketch Cube1.ino (una copia del mismo se reproduce a continuación):
- Compila y sube el sketch, una copia del cual se reproduce a continuación:

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

Salida:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube1.jpg)

Demo Cube1.pde

La biblioteca de Rainbowduino v3.0 proporciona muchas APIs para usar el cubo de LED RGB. La siguiente sección las enumera y describe:

| API                                                                                                                                     | Descripción                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Rb.init(void)**                                                                                                                       | Inicializa el controlador de Rainbowduino, esto debe colocarse dentro de setup() |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)** | Esto establece el píxel(z,x,y) especificando cada canal(color) con un número de 8 bits. |
| **Rb.setPixelZXY(unsigned char z, unsigned char x, unsigned char y, uint32_t colorRGB)**                                              | Esto establece el píxel(z,x,y) especificando un código de color RGB de 24 bits. |
| **Rb.blankDisplay(void)**                                                                                                               | Esta función se usa para apagar todos los LEDs.                               |

**Demo setPixelZXY()**

- Para entender el direccionamiento de píxeles (Z,X,Y) veamos otro ejemplo. En esta demostración, la Capa 0 (es decir Z-0) se pinta de Verde y la Capa 3 se pinta de Azul.

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

Salida:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube2.jpg)

Demo Cube2.pde

**Demo de setPixelZXY() con Colores Aleatorios**

- En esta demostración, todos los LEDs se pintan con algún color aleatorio. Después de cinco segundos de retraso, todo el cubo se vuelve a pintar con colores aleatorios.

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

Salida:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube3.jpg)

Demo Cube3.pde

**Demo de Lámpara Nocturna / Lámpara de Ambiente**

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

Salida:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Rainbow_Cube_Plasma_demo.jpg)

Demo PlasmaCube.pde

#### Uso con Matriz LED RGB

La biblioteca de Rainbowduino v3.0 proporciona muchas APIs para usar matriz LED RGB. La siguiente sección las enumera y describe:

| API                                                                                                                   | Descripción                                                                 |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Rb.init(void)**                                                                                                     | Inicializa el controlador de Rainbowduino, esto debe colocarse dentro de setup() |
| **Rb.setPixelXY(unsigned char x, unsigned char y, unsigned char colorR, unsigned char colorG, unsigned char colorB)** | Esto establece el píxel(x,y) especificando cada canal(color) con un número de 8 bits. |
| **Rb.setPixelXY(unsigned char x, unsigned char y, uint32_t colorRGB)**                                              | Esto establece el píxel(x,y) especificando un código de color RGB de 24 bits. |
| **Rb.blankDisplay(void)**                                                                                             | Esta función se usa para apagar todos los LEDs.                             |
| **Rb.drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, uint32_t colorRGB)**                          | Dibuja un carácter ASCII de color uint32_t en (poX,poY).                   |
| **Rb.drawCircle(int poX, int poY, int r, uint32_t color)**                                                           | Dibuja un círculo de color uint32_t de radio r en (poX,poY).               |
| **Rb.fillCircle(int poX, int poY, int r, uint32_t color)**                                                           | Dibuja un círculo relleno de color uint32_t de radio r en (poX,poY).       |
| **Rb.drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1, uint32_t color)**                     | Dibuja una línea desde (x0,y0) hasta (x1,y1).                              |
| **Rb.drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length, uint32_t color)**                      | Dibuja una línea horizontal desde (poX,poY) de length píxeles.              |
| **Rb.drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width, uint32_t color)**     | Dibuja un rectángulo desde (poX,poY) de length y width píxeles.             |
| **Rb.fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, uint32_t color)**    | Dibuja un rectángulo relleno desde (poX,poY) de length y width píxeles.     |

**Demo de Formas**

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

Salida:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/Shapes.jpg)

Formas

**Demo drawChar**

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

Salida:

![](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/img/CharE.jpg)

## Visor de Esquemas en Línea

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip"></div>

Recursos
--------

- [Librería Rainbowduino V3.0 para Arduino IDE 1.0 y superior](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_for_Arduino1.0.zip)
- [Librería Rainbowduino3.0 SnakeGame para Arduino 1.0](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/SnakeGame20120601.zip)
- [Esquema y Layout de Rainbowduino V3.0 en formato Eagle](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_v3.0b_EagleCADFiles.zip)
- [Esquema de Rainbowduino V3.0 en PDF](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/Rainbowduino_V3.0b.pdf)
- [Hoja de datos del controlador LED MY9221](https://files.seeedstudio.com/wiki/Rainbowduino_v3.0/res/MY9221_DS_1.0.pdf)

**Otros productos relacionados, recursos y proyectos:**

- [Kit Rainbow Cube (Ensamblado)](https://www.seeedstudio.com/depot/rainbow-cube-kit-assembled-p-998.html?cPath=138)
- [Kit Rainbow Cube - RGB 4X4X4](https://www.seeedstudio.com/depot/rainbow-cube-kit-rgb-4x4x4-rainbowduino-compatible-p-596.html?cPath=138)
- [Matriz LED cuadrada de 60mm 8*8 - RGB súper brillante](https://www.seeedstudio.com/depot/60mm-square-88-led-matrix-super-bright-rgb-p-113.html?cPath=163_165)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Rainbowduino_v3.0 -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
