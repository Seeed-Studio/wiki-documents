---
description: Grove - RGB LED Stick (10 - WS2813 Mini)
title: Grove - RGB LED Stick (10 - WS2813 Mini)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-RGB_LED_Stick-10-WS2813_Mini
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Hemos integrado 10 LEDs RGB de color completo en esta barra, con solo un pin de señal puedes controlar fácilmente los 10 LEDs. Todos los LEDs son WS2813 Mini, que es un LED de control inteligente y altamente rentable.
Además, el WS2813 soporta transmisión continua de punto de ruptura de señal, lo que significa que puedes continuar usando otros leds aunque uno se rompa.

Puedes usar esta pequeña barra para crear cientos de miles de efectos de luz, esperamos que te traiga más diversión.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html)

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED Stick (10 WS2813 Mini) | Inicial                                                                                               | Nov 2018      |

## Características

- IC WS2813B, LED 3535
- Protección inteligente contra conexión inversa.
- Los niveles de gris de cada píxel son de 256, lo que logra una visualización a todo color de "256*256*256=16777216".
- La frecuencia de actualización alcanza los 2KHz.
- Interfaz de cascada en serie, la recepción y decodificación de datos depende de solo una línea de señal.
- Versión de cables de señal dual, transmisión continua de punto de ruptura de señal.

### Transmisión continua de punto de ruptura de señal

<!-- ![](https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg" alt="pir" width={600} height="auto" /></p>

Mientras no se rompan dos o más LEDs adyacentes, los LEDs restantes podrán funcionar normalmente.

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Temperatura de Operación|-25℃ ~ +85℃|
|Temperatura de Almacenamiento|-40℃ ~ +105℃|
|Corriente Constante del Canal RGB|16mA|
|Interfaz|Digital|
|Tamaño|L: 80mm A: 10mm H: 10mm|
|Peso|3.7g|
|Tamaño del Paquete|L: 150mm A: 100mm H: 25mm|
|Peso Bruto|13g|

## Aplicaciones Típicas

- Decoración navideña
- Iluminación
- Juguetes

## Descripción General del Hardware

### Distribución de Pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB suavemente, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

:::important
    **1**. Si usas Arduino UNO como placa madre, se recomienda que uses la fuente de alimentación DC. De lo contrario, la ondulación máxima de VCC puede exceder 100mV. Si usas Seeeduino V4.2 como placa madre, no necesitas conectar alimentación DC.

    **2**. El intercambio en caliente no está soportado.
:::

- **Paso 1.** Conecta el Grove - RGB LED Stick (10 WS2813 Mini) al puerto **D6** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
| Sin conexión            | Blanco              | NC |
| D6            | Amarillo             | SIG |

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Led_Strip](https://github.com/Seeed-Studio/Seeed_Led_Strip) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Adafruit_Neopixel --> simple**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Ábrelo en tu computadora haciendo clic en **simple.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_Led_Strip-master\examples\simple**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

    3. O, simplemente puedes hacer clic en el icono
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Which pin on the Arduino is connected to the NeoPixels?
// On a Trinket or Gemma we suggest changing this to 1
#define PIN            6

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS      10

// When we setup the NeoPixel library, we tell it how many pixels, and which pin to use to send signals.
// Note that for older NeoPixel strips you might need to change the third parameter--see the strandtest
// example for more information on possible values.
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // delay for half a second

void setup() {
  // This is for Trinket 5V 16MHz, you can remove these three lines if you are not using a Trinket
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // End of trinket special code
  pixels.setBrightness(255);
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.

  for(int i=0;i<NUMPIXELS;i++){

    // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // Moderately bright green color.

    pixels.show(); // This sends the updated pixel color to the hardware.

    delay(delayval); // Delay for a period of time (in milliseconds).

  }
}
```

:::note
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::success
        Si todo va bien, ahora puedes ver la tira LED brillando:
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - RGB LED Stick (10 WS2813 Mini) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip)

- **[Zip]** [Biblioteca Led_Strip](https://github.com/Seeed-Studio/Seeed_Led_Strip/archive/master.zip)

- **[PDF]** [Hoja de Datos WS2813-Mini](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/WS2813-Mini.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
