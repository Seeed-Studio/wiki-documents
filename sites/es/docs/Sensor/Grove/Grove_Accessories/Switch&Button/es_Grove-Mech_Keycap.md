---
description: Grove-Mech keycap
title: Grove-Mech keycap
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mech_Keycap
sku: 111020049
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/es/Grove-Mech_Keycap/
---
<!-- ---
name: Grove-Mech keycap
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020049
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/2.jpg)

El Grove-Mech keycap es un interruptor mecánico con un LED integrado. El LED RGB de 255 colores completos hace que sea simple y fácil mostrar el estado de tu interruptor. Esta tecla es muy fiable, con una vida útil de funcionamiento de 20.000.000 de pulsaciones.

Verás que este es un módulo interesante y estable para hacer proyectos o productos realmente divertidos. De hecho, incluso puedes hacer un teclado mecánico usando varios Grove-Mech keycaps.

:::tip
Se deben realizar 20.000.000 ciclos de funcionamiento de forma continua a una velocidad de 300 ciclos por minuto sin carga.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mech-Keycap.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" style={{maxWidth: '300px', height: 'auto'}} alt="Consigue uno ahora" /></a></p>

## Características

- LED programable
- Estructura mecánica fiable  
- Vida útil de funcionamiento extremadamente larga

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de trabajo|3v-5v|
|Resistencia de aislamiento|100MΩ mín.|
|Resistencia de contacto|200 mΩ máx.|
|Vida útil de funcionamiento sin carga|20.000.000|

## Aplicaciones

- dispositivos automotrices
- dispositivos visuales
- electrodomésticos
- dispositivos de información

## Hardware

### Mapa de pines

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg)

El K1 está conectado al botón; cuando la tecla está abierta, **SIG1** será arrastrado a nivel bajo por R2, entonces la salida de **SIG1** debería ser baja.
Una vez que se pulsa el botón, el K1 se cerrará y **SIG1** se conectará a **VCC**, entonces la salida de **SIG1** se vuelve alta.

:::note
En esta sección solo te mostramos parte del esquemático; para el documento completo, consulta los [Resources](/es/#recursos)
:::

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas arriba como compatibles son una indicación de la compatibilidad teórica o del software del módulo. En la mayoría de los casos solo proporcionamos librerías de software o ejemplos de código para la plataforma Arduino. No es posible proporcionar librerías de software o código de demostración para todas las posibles plataformas MCU. Por lo tanto, los usuarios tienen que escribir sus propias librerías de software.
:::

## Primeros pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::
### Jugar con PlatformIO

**Hardware**


<table align="center">
  <tr>
    <th>XIAO nRF52840 Sense</th>
    <th>Seeed Studio Grove Base para XIAO</th>
    <th>Grove-Mech keycap</th>
  </tr>
  <tr>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank" rel="noopener noreferrer">Consigue uno ahora</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank" rel="noopener noreferrer">Consigue uno ahora</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank" rel="noopener noreferrer">Consigue uno ahora</a></td>
  </tr>
</table>


- **Paso 1.** Conecta los pines de señal del Grove-Mech keycap: `S1` -> `D1`, `S2` -> `D2` en la Seeed Studio Grove Base para XIAO.  (VCC/GND como de costumbre)
- **Paso 2.** Inserta la Grove Base en la XIAO nRF52840 Sense.
- **Paso 3.** Conecta la XIAO a tu PC mediante USB.

**Software** 

- **Paso 1.** Instala la librería `Adafruit_NeoPixel` en PlatformIO.
- **Paso 2.** Crea un nuevo sketch / proyecto y pega el código de abajo.
- **Paso 3.** Carga a la XIAO y abre el Monitor Serie (baud 115200) para ver el estado.

**Qué hace** 

- Cada pulsación del Grove-Mech keycap hace que el LED RGB integrado recorra una lista de colores.

Código 
```cpp
/*
  Grove-Mech Keycap demo for XIAO (nRF52840 Sense)
  Wiring: S1 -> D1 (button), S2 -> D2 (pixel data)
*/
#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN 1   // D1
#define PIXEL_PIN  2   // D2
#define PIXEL_COUNT 1

Adafruit_NeoPixel strip(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

uint8_t colorPos = 0;
bool lastState = LOW;
unsigned long lastDebounce = 0;
const unsigned long debounceDelay = 50;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.show();
  Serial.begin(115200);
  Serial.println("Grove-Mech Keycap: ready");
}

uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

void cycleColor() {
  colorPos += 32; // step size
  strip.setPixelColor(0, Wheel(colorPos));
  strip.show();
  Serial.print("Color pos: "); Serial.println(colorPos);
}

void loop() {
  bool reading = digitalRead(BUTTON_PIN) == LOW ? true : false; // pressed = LOW for INPUT_PULLUP

  if (reading != lastState) {
    lastDebounce = millis();
  }

  if ((millis() - lastDebounce) > debounceDelay) {
    // stable state
    static bool pressed = false;
    if (reading && !pressed) {
      // button pressed (edge)
      cycleColor();
      pressed = true;
    } else if (!reading) {
      pressed = false;
    }
  }

  lastState = reading;
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/xiao_capkey.gif" style={{width:400, height:'auto'}}/></div>

:::note
 Si tu cableado o asignación de pines es diferente, cambia `BUTTON_PIN` y `PIXEL_PIN` en consecuencia.
:::



### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove-Mech keycap |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Consigue uno ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Consigue uno ahora</a>|<a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank">Consigue uno ahora</a>|

:::note
**1** Inserta el cable USB suavemente, de lo contrario podrías dañar el puerto. Utiliza un cable USB con 4 hilos internos; los cables de 2 hilos no pueden transferir datos. Si no estás seguro del cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprarlo.

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprarlo.
:::

- **Paso 1.** Conecta el Grove-Mech keycap al puerto **D2** del Grove-Base Shield.

- **Paso 2.** Inserta el Grove - Base Shield en el Seeeduino.

- **Paso 3.** Conecta el Seeeduino al PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente el Grove-Mech keycap al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove-Mech keycap       |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| D3         | Blanco                  |
| D2            | Amarillo                |

#### Software

- **Paso 1.** Descarga la librería [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Abre el Arduino IDE y crea un archivo nuevo, luego copia el siguiente código en el archivo nuevo.

```cpp
/**
 * This is an exmaple of the Grove - Mech Keycap.
 * Every press of the key will change the color the SK6805 RGB LED. The SK6805 is a NeoPixel compatible chip.
 * 
 * Credit:
 * Adafruit_NeoPixel - https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING
 */

#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN   2    // Digital IO pin connected to the button.  This will be
                          // driven with a pull-up resistor so the switch should
                          // pull the pin to ground momentarily.  On a high -> low
                          // transition the button press logic will execute.

#define PIXEL_PIN    3    // Digital IO pin connected to the NeoPixels.

#define PIXEL_COUNT 60

// Parameter 1 = number of pixels in strip,  neopixel stick has 8
// Parameter 2 = pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_RGB     Pixels are wired for RGB bitstream
//   NEO_GRB     Pixels are wired for GRB bitstream, correct for neopixel stick
//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)
//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip), correct for neopixel stick
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

bool oldState = LOW;
uint8_t color_pos = 0;
int i=0;
int longpress=2000;
long timecheck;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.clear();
  strip.show(); // Initialize all pixels to 'off'
  Serial.begin(9600); 
}

void loop()
{

  // Get current button state.
  bool newState = digitalRead(BUTTON_PIN);

  // Check if state changed from low to high (button press).
  if (newState == HIGH && oldState == LOW) {
      timecheck = millis(); 
    // Short delay to debounce button.
    delay(20);
    // Check if button is still low after debounce.
    newState = digitalRead(BUTTON_PIN);
    if (newState == HIGH){
      color_pos+=8;
      strip.setPixelColor(0, Wheel(color_pos));
      strip.show();
    }
  }

 if( millis()-timecheck > 300)
 {
   if (digitalRead(BUTTON_PIN)==HIGH)
   {
 if(millis()-timecheck > longpress)
 {
  while(digitalRead(BUTTON_PIN) == HIGH)
  {
  strip.setPixelColor(0,Wheel(color_pos));
  strip.show();
  delay(300);

  strip.setPixelColor(0,0,0,0);
  strip.show();
  delay(300);
  bool newState = digitalRead(BUTTON_PIN);
  }
  strip.setPixelColor(0,0,0,0);
  strip.show();
   timecheck = millis(); 
 }
  }
   }

  // Set the last button state to the old state.
  oldState = newState;
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, consulta [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Cada vez que presiones el Grove-Mech Keycap, verás que el color del LED cambia. Si mantienes presionado el botón durante unos 2 segundos, verás el efecto de luz respiratoria.

### Jugar con Raspberry Pi

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Mech Keycap|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|[Consigue uno ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|

- **Paso 2**. Conecta el Grove Base Hat a la Raspberry.
- **Paso 3**. Conecta el Grove - Mech Keycap al puerto PWM (puerto 12) del Base Hat.

:::note
el pin puede ser uno de los siguientes valores en la columna de pines para la función PWM y conecta el dispositivo a la ranura correspondiente.
:::

|Pin|Ranura|
|---|---|
|18|D18|
|12|PWM|

- **Paso 4**. Conecta la Raspberry Pi al PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg)

#### Software

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para correr el código.

```
cd grove.py/grove
sudo python grove_mech_keycap.py 12

```

:::caution
Unix tiene un "modelo de seguridad". Como usuario normal puedes hacer cosas, pero no deberías poder acceder a los archivos de otras personas en la misma computadora. Y como usuario no deberías poder hacer que la computadora deje de funcionar. Ahora bien, "/dev/mem" te permite hacer mucho, mucho más "trastornos" que solo cambiar un GPIO. Por eso /dev/mem debe estar protegido contra usuarios normales. Así que, para ejecutar este código, debes escribir **sudo python grove_mech_keycap.py** en la línea de comandos
:::

A continuación se muestra el código grove_mech_keycap.py.

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveKeycap(object):
    def __init__(self, pin):
        # High = pressed
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        # single WS2812 LED
        self.__led = Factory.getOneLed("WS2812-PWM", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveKeycap.__handle_event)

    @property
    def on_event(self):
        return self.__on_event

    @on_event.setter
    def on_event(self, callback):
        if not callable(callback):
            return
        self.__on_event = callback

    def __handle_event(self, evt):
        # print("event index:{} event:{} pressed:{}".format(evt['index'], evt['code'], evt['presesed']))
        if callable(self.__on_event):
            self.__on_event(evt['index'], evt['code'], evt['time'])
            return

        self.__led.brightness = self.__led.MAX_BRIGHT
        event = evt['code']
        if event & Button.EV_SINGLE_CLICK:
            self.__led.light(True)
            print("turn on  LED")
        elif event & Button.EV_DOUBLE_CLICK:
            self.__led.blink()
            print("blink    LED")
        elif event & Button.EV_LONG_PRESS:
            self.__led.light(False)
            print("turn off LED")


Grove = GroveKeycap

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.PWM)
    pin = sh.argv2pin()

    ledbtn = GroveKeycap(pin)

    # remove ''' pairs below to begin your experiment
    '''
    # define a customized event handle your self
    def cust_on_event(index, event, tm):
        print("event with code {}, time {}".format(event, tm))

    ledbtn.on_event = cust_on_event
    '''
    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
Si todo va bien, podrás ver el siguiente resultado. Si haces un solo clic en el keycap, verás "turn on LED", si haces doble clic en el keycap, verás "blink LED". Una pulsación larga en el keycap dará "turn off LED".
:::

```python

pi@raspberrypi:~/grove.py/grove $ sudo python grove_mech_keycap.py 12
Hat Name = 'Grove Base Hat RPi'
turn on  LED
turn on  LED
blink    LED
turn on  LED
turn off LED
^CTraceback (most recent call last):
  File "grove_mech_keycap.py", line 98, in <module>
    main()
  File "grove_mech_keycap.py", line 94, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo eagle de Grove-Mech Keycap](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [Resumen del producto del interruptor](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones sencillas, puedes probarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
