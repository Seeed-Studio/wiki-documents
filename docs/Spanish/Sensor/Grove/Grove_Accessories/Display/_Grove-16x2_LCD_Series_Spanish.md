---
description: El ha sido bien recibido desde su comienzo. Basado en las retroalimentaciones de los clientes, ahora brindamos una mayor relación costo-beneficio con una luz de fondo monocromática para ti.
title: Grove- LCD RGB
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-16x2_LCD_Series_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/main.jpg)

El [Grove - LCD RGB Backlight](http://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/) ha sido bien recibido desde su comienzo. Basado en las retroalimentaciones de los clientes, ahora brindamos una mayor relación costo-beneficio con una luz de fondo monocromática para ti.

El Grove - 16 x 2 LCD (Fondo Amarrillo)  
El Grove - 16 x 2 LCD (Fondo Rojo)  
El Grove - 16 x 2 LCD (Blanco con Azul)

Excepto por la luz de fondo RGB, estos tres producto son casi identicos al Grove - LCD RGB Backlingh, ambos son de 16 carácteres en la fila, y 2 en columnas, con alto brillo de fondo.

<p style=":center"><a href="https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/Y1.png" height="48" width="300" /></a></p>
<p style=":center"><a href="https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/R1.png" height="48" width="300" /></a></p>
<p style=":center"><a href="https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/B1.png"  height="48" width="300" /></a></p>

## Características

- Construcción del Display: 16 filas de carácteres \* 2 columnas
- Modo de visualizaciín: STN(Amarrillo Verde)
- MCU en la tarjeta
- Interfaz I2C
- Soportan fuentes en Inglés y Japónes

## Especificaciones

| Articulo                      | Valor               |
| ----------------------------- | ------------------- |
| Voltaje de Operación          | 3.3V / 5V           |
| Temepratura de Operación      | 0 to 50℃            |
| Temperatura de Almacenamiento | -10 to 60℃          |
| Método de Conducción          | 1/16 duty, 1/5 bias |
| Interfaz                      | I^2^C               |
| Dirección I^2^C               | 0X3E                |

## Aplicaciones Típicas

- Visualizador de Temperaturas
- Visualizador de Tiempo
- Cualquier proyecto que requira un display simple.

## Descripción del Hardware

### Esquema

![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/outline.jpg)

## Plataformas Soportadas

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

### Juega con Arduino

#### Hardware

**Materiales necesarios**

| Seeeduino V4.2                                                                                                           | Base Shield                                                                                                           | Grove - 16 x 2 LCD                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/perspective.jpg) |
| [Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                     | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                 | [Get One Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)                          |

¡Nota!
**1** Por favor conecte con gentiliza el USB, de otra manera podría generar algún daño en el puerto. Por favor use el cable USB con 4 cables dentro, los dos cables de información no podrán transmitir datos. Si no estas seguro respecto al cable que tienes, puedes revisar lo siguiente [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprarlo.

    **2** Cada módulo Grove incluye su cable Grove cuando lo adquieres. En caso de que hayas extraviado tu cable, haz click [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

- **Paso 1.** Conecta el Grove - 16 x 2 LCD al puerto **I^2^C** del Grove - Shield Base.

- **Paso 2.** Ensambla el Grove - Shield Base en el Seeeduino o Arduino.

- **Paso 3.** Conecta el Seeeduino a la PC utilizando el cable USB.

![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/connect.jpg)

¡Nota!
Si no cuentas con el Grove Shield Base, es posible conectar de igual manera el módulo directamente siguiendo el orden debajo.

| Seeeduino  | Grove Cable | Grove - 16 x 2 LCD |
| ---------- | ----------- | ------------------ |
| GND        | Negro       | GND                |
| 5V or 3.3V | Rojo        | VCC                |
| SDA        | Blanco      | SDA                |
| SCL        | Amarillo    | SCL                |

#### Software

¡Atención!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

- **Paso 1.** Descarga la librería [Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) de GitHub.

¡Consejos!
El Grove - 16 x 2 LCD comparte la misam librería con [Grove-LCD RGB Backlight](http://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/). Su uso es casi el mismo, excepto por el hecho de que el Grove - 16 x 2 LCD no soporta el API de colores RGB, **setRGB()**.

- **Paso 2.** Ve a [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar una librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes hacerlo de cualquiera las siguientes tres maneras:

  1. Abrir directamente del IDE de Arduino por medio del path: **Archivo --> Ejemplos --> Grove - LCD RGB Backlight --> HelloWorld**.
     ![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/path_1.jpg)

  2. Abrir desde tu computadora dando click en le **HelloWorld.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**, **XXXX** es la ubicación donde intalaste Arduino previamente.
     ![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/path_2.jpg)

  3. O, puedes simplemente dar click en el ícono ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) en la esquina superior derecha del bloque de código de tu actual código en el IDE de Arduino.

```C++
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

/*
const int colorR = 255;
const int colorG = 0;
const int colorB = 0;
*/

void setup()
{
    // Configura el número de filas y columnas:
    lcd.begin(16, 2);

    //lcd.setRGB(colorR, colorG, colorB);

    // Imprimir un mensaje en el LCD
    lcd.print("hello, world!");

    delay(1000);
}

void loop()
{
    // Posiciona el cursos en la columna 0, fila 1.
    // (nota: La linea 1 es la segunda linda, comenzando a contar en 0:
    lcd.setCursor(0, 1);
    // Imprimer el número de segundos contando apartir del último reset.
    lcd.print(millis()/1000);

    delay(100);
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
```

¡Atenciónª
1** El archivo de la librería puede ser actualizado. Este código podría no ser aplicable para actualizar los archivos de la librería, por ello, recomendamos usar los dos primeros métodos.
2** Desde el **Grove - 16 x 2 LCD** todas las series tienen luces de fondo monocromáticas, deberás comentar el color RGB rojo en el código en relación. Línea 6 y 17.

- **Paso 4.** Carga la demostración. Si no sabes como subir el código, por favor revisa [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

¡Éxito!
Si todo va bien, podrás ver en tu LCD la clásica secuencia: hello, world.

## Recursos

- **[Zip]** [Grove-LCD RGB Backlight Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

- **[PDF]** [JDH_1804_Datasheet](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/res/JDH_1804_Datasheet.pdf)

## Proyecto

Este es un video de introducción a este producto, en el podrás encontrar demostraciones simples que puedes intentar.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte Técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
