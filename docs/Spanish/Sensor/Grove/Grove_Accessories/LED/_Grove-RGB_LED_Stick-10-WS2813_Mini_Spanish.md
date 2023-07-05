---
description: Hemos integrado 10 LEDs RGB full-color en esta barra, con un solo pin de señal podrás controlar los 10 LED integrados con gran facilidad.
title: RGB LED Stick
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-RGB_LED_Stick-10-WS2813_Mini_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-RGB_LED_Stick-10-WS2813_Mini/raw/master/img/main.jpg)

Hemos integrado 10 LEDs RGB full-color en esta barra, con un solo pin de señal podrás controlar los 10 LED integrados con gran facilidad. Los LEDs son WS2813 Mini, los cuales cuentan con un control inteligente y un LED de alto costo-eficiencia.
Además, el WS2813 soporta señales de ruptura de transmisión continua, lo cual te permitirá controlar todos los LEDS aún con alguno dañado.

Puedes utilizar esta pequeña barra de led para crear cientos de miles efectos de luz, ¡Esperamos te diviertas!

<p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión de Producto                    | Cambios | Fecha de lanzamiento |
| -------------------------------------- | ------- | -------------------- |
| Grove - RGB LED Stick (10 WS2813 Mini) | Inicial | Nov 2018             |

## Características

- WS2813B IC, 3535 LED
- Protección Inteligente de Conexión-Inversa.
- El nivel gris de cada pixel es de 256, logrando “256*256*256=16777216” un diplay full-color.
- El nivel de frecuencia alcanza 2KHz.
- Interfaz Serial de Cascada, la recipción de datos y decodificación depende de una sola linea señal.
- Versión dual de cables, señal de tranmisión continua de ruptura.

### Señal de transmisión continua de ruptura.

![](https://github.com/SeeedDocument/Outsourcing/raw/master/104020108/img/LED_RFBP.jpg)

Mientrás no sean dañados dos o más LEDs ayadcentes, los restantes LEDs podrán continuar funcionando.

## Especificaciones

| Articulo                                     | Valor                   |
| -------------------------------------------- | ----------------------- |
| Voltaje de Operación                         | 3.3V / 5V               |
| Temperatura de Operación                     | -25℃ ~ +85℃             |
| Temperatura de Almacenamiento                | -40℃ ~ +105℃            |
| Corriente constante del Canal RGB            | 16mA                    |
| Interfaz                                     | Digital                 |
| Dimensiones                                  | L: 80mm W: 10mm H: 10mm |
| Peso                                         | 3.7g                    |
| Tamaño del paquete L: 150mm W: 100mm H: 25mm |
| Peso Bruto                                   | 13g                     |

## Aplicaciones Típicas

- Decoraciones Navideñas
- Iluminación
- Juguetes

## Descipción del Hardware

### Pinout

![](https://github.com/SeeedDocument/Grove-RGB_LED_Stick-10-WS2813_Mini/raw/master/img/pin_out.jpg)

## Plataformas Soportadas

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

### Juegando con Arduino

#### Hardware

**Materiales Requeridos**

| Seeeduino V4.2                                                                                                             | Base Shield                                                                                                                | Grove - RGB LED Stick (10 WS2813 Mini)                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-RGB_LED_Stick-10-WS2813_Mini/raw/master/img/thumbnail.jpg) |
| <a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>                            | <a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>                           | <a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank">Get One Now</a>               |

¡Nota!
**1** Por favor conecte con gentiliza el USB, de otra manera podría generar algún daño en el puerto. Por favor use el cable USB con 4 cables dentro, los dos cables de información no podrán transmitir datos. Si no estas seguro respecto al cable que tienes, puedes revisar lo siguiente [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprarlo.

    **2** Cada módulo Grove incluye su cable Grove cuando lo adquieres. En caso de que hayas extraviado tu cable, haz click [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

¡Importante!
**1**. Si utilizas Arduino Uno cómo tarjeta madre, es recomendable utilizar una fuente externa DC. If the you uses Arduino UNO as the motherboard, it is recommended that use the DC power supply. De otra manera, la ondulación máxima de voltaje podría excerder los 100mV. Si utilizas el Seeeduino V4.2 como tarjeta madre, no necesitas una fuente DC externa.

    **2**. No soporta Hot-swap.

- **Paso 1.** Conecta el Grove - RGB LED Stick (10 WS2813 Mini) al puerto **D6** del Grove - Shield Base.

- **Paso 2.** Ensambla el Grove - Shield base en el Seeeduino o Arduino.

- **Step 3.** Conecta el Seeeduino a la PC utilizando un cable USB.

![](https://github.com/SeeedDocument/Grove-RGB_LED_Stick-10-WS2813_Mini/raw/master/img/connect.jpg)

¡Nota!
Si no cuentas con el Grove Shield Base, es posible conectar de igual manera el módulo directamente siguiendo el order debajo.

| Seeeduino   | Cable Grove | Grove - RGB LED Stick (10 WS2813 Mini) |
| ----------- | ----------- | -------------------------------------- |
| GND         | Negro       | GND                                    |
| 5V or 3.3V  | Rojo        | VCC                                    |
| No conexión | Blanco      | NC                                     |
| D6          | Amarillo    | Señal                                  |

#### Software

¡Atención!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

- **Paso 1.** Descarga la librería [Led_Strip](https://github.com/Seeed-Studio/Seeed_Led_Strip) de GitHub.

- **Paso 2.** Ve a [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar una librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes hacerlo de cualquiera las siguientes tres maneras:
  1. Abrir directamente del IDE de Arduino por medio del path: **Archivo --> Ejemplos --> Grove - LCD RGB Backlight --> HelloWorld**.
     ![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/path_1.jpg)

  2. Abrir desde tu computadora dando click en le **HelloWorld.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**, **XXXX** es la ubicación donde intalaste Arduino previamente.
     ![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/path_2.jpg)

  3. O, puedes simplemente dar click en el ícono ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) en la esquina superior derecha del bloque de código de tu actual código en el IDE de Arduino.

```C++
// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// ¿A qué pin se encuentra coenctar el NeoPixel?
#define PIN            6

// ¿Cuántos LED se encuentran en conectados en tu Stick?
#define NUMPIXELS      10

// Cuando configuramos la librería NeoPixel, le decimos cuantos LED/Pixeles, y que pin utilizar para enviar las señales.
// Ejemplo para más infirmación en posibles valores.
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // Esperamos por medio segundo

void setup() {
  // Esto es para el Trinket 5V 16MHz, puedes remover estas tres lineas si no estas utilizandolo
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // End of trinket special code
  pixels.setBrightness(255);
  pixels.begin(); // Esto inicializa la librería NeoPixel.
}

void loop() {

  // Para un set de NeoPixeles el primer LED es 0, toda la cuenta de los pixeles menos uno.
  for(int i=0;i<NUMPIXELS;i++){

    // pixels.Color toma los valores RGB, desde 0,0,0 hasta 255,255,255
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // Brillo moderado en verde.

    pixels.show(); // Esto envia el color actualizado al hardware.

    delay(delayval); //Espera por un periodo de tiempo(en millisegundos).
  }
}
```

¡Atención!
1\*\* El archivo de la librería puede ser actualizado. Este código podría no ser aplicable para actualizar los archivos de la librería, por ello, recomendamos usar los dos primeros métodos.

- **Paso 4.** Carga la demostración. Si no sabes cómo hacerlo, por favor revisa [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

¡Éxito!
Sí todo sale bien, ahora podrás ver tu barra LED brillando:

![](https://github.com/SeeedDocument/Grove-RGB_LED_Stick-10-WS2813_Mini/raw/master/img/test20181210_162208.gif)

## Recursos

- **[Zip]** [Grove - RGB LED Stick (10 WS2813 Mini) Eagle Files](<https://github.com/SeeedDocument/Grove-RGB_LED_Stick-10-WS2813_Mini/raw/master/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip>)

- **[Zip]** [Led_Strip Library](https://github.com/Seeed-Studio/Seeed_Led_Strip/archive/master.zip)

- **[PDF]** [Datasheet WS2813-Mini](https://github.com/SeeedDocument/Grove-RGB_LED_Stick-10-WS2813_Mini/raw/master/res/WS2813-Mini.pdf)

## Soporte Técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
