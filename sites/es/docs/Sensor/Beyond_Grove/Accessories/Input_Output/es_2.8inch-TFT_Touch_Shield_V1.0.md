---
title: 2.8inch TFT Touch Shield V1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/2.8inch-TFT_Touch_Shield_V1.0/
slug: /es/2.8inch-TFT_Touch_Shield_V1.0
last_update:
  date: 02/03/2022
  author: gunengyu
---


El 2.8" TFT Touch Shield es una pantalla TFT multicolor compatible con Arduino / Arduino Mega con una pantalla táctil resistiva de 4 hilos. Incluye una huella compatible con shield de Arduino para su conexión. El controlador TFT está basado en un IC controlador profesional y con interfaz de datos de 8 bits y control de 4 bits.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/Tft.jpg)

##   Características   ##

- Compatible con Arduino/Seeeduino, Arduino Mega, y Seeeduino Mega

- Pantalla QVGA de 2.8" de tamaño

- Pantalla táctil resistiva

##   Especificaciones   ##

<table cellspacing="0" width="80%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Mín</th>
<th scope="col">Típico</th>
<th scope="col">Máx</th>
<th scope="col">Unidad</th>
</tr>
<tr>
<th scope="row">Voltaje</th>
<td>4.5</td>
<td>5</td>
<td>5.5</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">Corriente</th>
<td>/</td>
<td>/</td>
<td>250</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Tamaño del Panel LCD</th>
<td colspan="3">2.8</td>
<td>pulgada</td>
</tr>
<tr>
<th scope="row">Ángulo de visión</th>
<td colspan="3">60~120</td>
<td>Grados</td>
</tr>
<tr>
<th scope="row">Resolución</th>
<td colspan="3">320x240</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Color LCD</th>
<td colspan="3">65k</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Tipo de retroiluminación</th>
<td colspan="3">LED</td>
<td>/</td>
</tr>
<tr>
<th scope="row">IC controlador LCD</th>
<td colspan="3">ST7781R</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Tipo de interfaz</th>
<td colspan="3">10±2</td>
<td>g</td>
</tr>
<tr>
<th scope="row">Tipo de interfaz</th>
<td colspan="3">Puerto paralelo ( 8bit Datos + 4bit Control )</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Pantalla táctil</th>
<td colspan="3">Pantalla táctil resistiva de 4 hilos</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Área activa</th>
<td colspan="3">43.2*57.3</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">Descarga por contacto ESD</th>
<td colspan="3">±4</td>
<td>KV</td>
</tr>
<tr>
<th scope="row">Descarga por aire ESD</th>
<td colspan="3">±8</td>
<td>KV</td>
</tr>
<tr>
<th scope="row">Dimensiones</th>
<td colspan="3">72.5x54.7x18</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">Peso</th>
<td colspan="3">24±2</td>
<td>g</td>
</tr>
</table>

**Precauciones**

- No someta el módulo a golpes mecánicos o impactos dejándolo caer.

- No aplique fuerza excesiva a la superficie de la pantalla o las áreas adyacentes ya que esto puede causar que el tono de color varíe.

##   Uso de pines en Arduino   ##

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg)
**D0** - Sin usar.

**D1** - Sin usar.

**D2** - Bit de datos LCD 8.

**D3** - Bit de datos LCD 9.

**D4** - Bit de datos LCD 10.

**D5** - Bit de datos LCD 11.

**D6** - Bit de datos LCD 12.

**D7** - Bit de datos LCD 13.

**D8** - Bit de datos LCD 14.

**D9** - Bit de datos LCD 15.

**D10** - Pin CS del LCD, activo bajo.

**D11** - Pin RS del LCD.

**D12** - Pin WR del LCD.

**D13** - Pin RD del LCD.

**D14(A0)** - Touch Screen Y-.

**D15(A1)** - Touch Screen X-.

**D16(A2)** - Touch Screen Y+.

**D17(A3)** - Touch Screen X+.

**D18(A4)** - Sin usar.

**D19(A5)** - Sin usar.

##   Uso   ##

###   Instalación de Hardware   ###

- Inserte el TFT Touch Shield en Seeeduino como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg)

###   Programación TFT   ###

La biblioteca **TFT** proporciona las siguientes Interfaces de Programación de Aplicaciones (**API**). La biblioteca hace uso del acceso directo a los registros PORT en lugar de las APIs de Arduino. Esto es para aumentar la velocidad de comunicación entre MCU y TFT. En la actualidad, la biblioteca soporta placas compatibles con Arduino, Arduino Mega (1280 o 2560) y Seeeduino ADK Main Board. En Mega el puerto de datos de 8 bits del TFT está distribuido a diferentes pines pertenecientes a diferentes puertos. Esto disminuye la velocidad de dibujo de gráficos cuando se compara con Arduino. La elección de los pines del puerto se basa puramente en la disposición de pines del puerto de Arduino / Mega.

###   Funciones Generales   ###

---

**paintScreenBlack(void)**

- La RAM del TFT solo puede ser inicializada en modo display-off, por lo que esta función solo sirve para limpiar la pantalla con color negro.

**setXY(unsigned int poX, unsigned int poY)**

- Establece la posición del cursor a (poX,poY). Esta función es usada internamente por otras APIs de gráficos.

**setPixel(unsigned int poX, unsigned int poY,unsigned int color)**

- Establece el píxel (poX,poY) al color color. Esta función es usada internamente por otras APIs de gráficos.

###  Líneas ###

---

**drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1,unsigned int color)**

- Dibuja una línea desde el píxel (x0,y0) hasta el píxel (x1,y1) con color color.

**drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color**

- Dibuja una Línea Horizontal de longitud length con color color comenzando desde el píxel (poX,poY).

**drawHorizontalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color)**

- Dibuja una Línea Vertical de longitud length con color color comenzando desde el píxel (poX,poY).

###  Rectángulo ###

---

**drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width,unsigned int color)**

- Dibuja un rectángulo comenzando desde (poX,poY) de longitud length, ancho width y color **color**.

**fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- Dibuja un rectángulo relleno comenzando desde el píxel (poX,poY) de longitud length, ancho width y color **color**.

###  Círculo ###

---

**drawCircle(int poX, int poY, int r,unsigned int color)**

- Dibuja un círculo en (poX,poY) de radio **radius** y color **color**.

**fillCircle(int poX, int poY, int r,unsigned int color**

- Dibuja un círculo relleno en (poX,poY) de radio **radius** y color **color**.

###  Texto ###

---

**drawChar(unsigned char ascii,unsigned int poX, unsigned int poY,unsigned int size, unsigned int fgcolor)**

- Dibuja un carácter comenzando desde (poX,poY) usando la fuente incorporada de tamaño **size** y con color fgcolor. Esta función es usada por la función drawString().

**drawString(char *string,unsigned int poX, unsigned int poY,unsigned int size,unsigned int fgcolor)**

- Dibuja una cadena de texto comenzando desde (poX,poY) usando la fuente incorporada de tamaño **size** y con color fgcolor.

###   Programación de TouchScreen   ###

---

TFT Touch Shield usa la [Biblioteca Touch Screen de Adafruit](https://github.com/adafruit/Touch-Screen-Library). Para entender el principio detrás de la pantalla táctil resistiva consulte [Enlaces Externos](https://wiki.seeedstudio.com/es/2.8inch-TFT_Touch_Shield_V1.0/). En resumen, una pantalla táctil resistiva de 4 hilos proporciona dos divisores de voltaje cada uno para el eje X e Y. Al aplicar voltajes apropiados para cada eje y escanear los valores ADC se puede detectar la posición del toque. Estos valores siempre son propensos al ruido. Por lo tanto se usa un filtro digital.

- Para usar la Biblioteca TouchScreen primero cree un objeto TouchScreen con

`
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
`

Donde XP, YP, XM e YM son pines del puerto ADC conectados a los pines XPlus, YPlus, XMinus e YMinus de Touch Screen. 300 es la resistencia a través de las placas X.

- Lea el valor ADC Raw usando

`
Point p = ts.getPoint();
`

- El valor ADC Raw tiene que ser convertido a Coordenadas de Píxel. Esto se hace con la función map. Este mapeo cambia para v0.9 y v1.0. Las aplicaciones demo ya se encargan de este mapeo.

`
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
`

- El siguiente sketch demuestra el uso de la Biblioteca TouchScreen. Esto también puede ser usado para calibrar las coordenadas de la pantalla táctil.

- Compile y cargue el sketch.

- Abra el monitor del puerto serie y toque los puntos mostrados en la pantalla.

- Vea si los valores X e Y mostrados son correctos. Si no, tenemos que recalibrar las coordenadas de la pantalla táctil.

####  ¿Cómo calibrar la pantalla táctil? ####

- Los parámetros `TS_MINX, TS_MAXX, TS_MINY y TS_MAXY ` realmente deciden los extremos de la pantalla táctil y realmente forman los parámetros de calibración.

- Los valores asignados a estas variables son valores ADC medidos (es decir Raw X, Raw Y) cuando tocamos los extremos diagonales de la pantalla táctil.

- Toque los puntos (0,0) y (239,319) y anote los valores Raw X y Raw Y. Para mejor precisión, pruebe muchas veces y encuentre el valor correcto.

- TS_MINX corresponde al valor ADC cuando X = 0 ;

- TS_MINY corresponde al valor ADC cuando Y = 0 ;

- TS_MAXX corresponde al valor ADC cuando X = 240 -1 es decir 239 ;

- TS_MAXY corresponde al valor ADC cuando Y = 320 -1 es decir 319 ;

- Cambie estos parámetros en el sketch, recompile y cargue a Arduino.

- Repita los pasos anteriores si aún no obtiene valores precisos.

####  Sketch Demo de Touch Screen ####

```
// Paint application - Demonstate both TFT and Touch Screen
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 54   // can be a digital pin, this is A0
#define XP 57   // can be a digital pin, this is A3

#elif defined(__AVR_ATmega32U4__) // leonardo
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 18   // can be a digital pin, this is A0
#define XP 21   // can be a digital pin, this is A3

#else //168, 328, something else
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 14   // can be a digital pin, this is A0
#define XP 17   // can be a digital pin, this is A3

#endif

//Measured ADC values for (0,0) and (210-1,320-1)
//TS_MINX corresponds to ADC value when X = 0
//TS_MINY corresponds to ADC value when Y = 0
//TS_MAXX corresponds to ADC value when X = 240 -1
//TS_MAXY corresponds to ADC value when Y = 320 -1

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  //Paint brush color

// For better pressure precision, we need to know the resistance
// between X+ and X- Use any multimeter to read it
// The 2.8" TFT Touch shield has 300 ohms across the X plate

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); //init TouchScreen port pins

void setup()
{

    Tft.init();  //init TFT library
    pinMode(0,OUTPUT);
    //Draw the pallet
    Tft.fillRectangle(0,0,30,10,BLACK);
    Tft.fillRectangle(30,0,30,10,RED);
    Tft.fillRectangle(60,0,30,10,GREEN);
    Tft.fillRectangle(90,0,30,10,BLUE);
    Tft.fillRectangle(120,0,30,10,CYAN);
    Tft.fillRectangle(150,0,30,10,YELLOW);
    Tft.fillRectangle(180,0,30,10,WHITE);
    Tft.fillRectangle(210,0,30,10,GRAY1);

}

void loop()
{

    // a point object holds x y and z coordinates.
    Point p = ts.getPoint();

    //map the ADC value read to into pixel co-ordinates

    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // we have some minimum pressure we consider 'valid'
    // pressure of 0 means no pressing!

    if (p.z > ts.pressureThreshhold) {


        // Detect  paint brush color change
        if(p.y < 15)
        {
            if(p.x >= 0 && p.x < 30)
            {
                color = BLACK;
            }
            if(p.x >= 30 && p.x < 60)
            {
                color = RED;
                digitalWrite(0,HIGH);
            }
            if(p.x >= 60 && p.x < 90)
            {
                color = GREEN;
            }
            if(p.x >= 90 && p.x < 110)
            {
                color = BLUE;
                digitalWrite(0,LOW);
            }
            if(p.x >= 120 && p.x < 150)
            {
                color = CYAN;
            }
            if(p.x >= 150 && p.x < 180)
            {
                color = YELLOW;
            }
            if(p.x >= 180 && p.x < 210)
            {
                color = WHITE;
            }
            if(p.x >= 210 && p.x < 240)
            {
                color = GRAY1;
            }
        }
        else
        {
            Tft.fillCircle(p.x,p.y,2,color);
        }
    }
}
```

###  Código de demostración mostrado ###

- Inserta el TFT Touch Shield en el Seeeduino como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/DemoShow.JPG)
TFT Touch Shield conectado al Seeeduino


## Visor de esquemático en línea

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos   ##

- **[Librerías]**[Librerías del TFT Touch Shield](https://github.com/Seeed-Studio/TFT_Touch_Shield_V1)
- **[Eagle]**[Esquemático y diseño del TFT Touch Shield v1.0](https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[PDF]**[PCB del TFT Touch](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20PCB.pdf)
- **[PDF]**[Esquemático del TFT Touch](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20Sch.pdf)
- **[Versión]**[Versión Radio Shack del TFT Touch Shield en archivos Eagle](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/Schematic_for_Radio_Shack_.zip)
- **[Hoja de datos]** [ST7781R](http://garden.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf) , [FGD280E3715V1_8bit](http://garden.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf)
-  **[Notas de aplicación]**[ATMEL - Notas de aplicación sobre pantallas táctiles de cuatro y cinco cables](http://www.adafruit.com/datasheets/AVR341.pdf)
- **[Pantalla táctil]**[TI - Uso de pantalla táctil resistiva](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- **[Tarjeta SD]**[https://github.com/adafruit/SD](https://github.com/adafruit/SD)

## Soporte técnico y discusión del producto
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>