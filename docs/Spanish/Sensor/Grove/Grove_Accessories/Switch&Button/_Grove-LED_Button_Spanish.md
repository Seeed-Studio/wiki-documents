---
description: El Grove - Botón LED está compuesto de Grove - Botón Amarillo, Grove - Botón Azul y Grove - Botón Rojo.
title: Grove - Botón LED
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-LED_Button_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/main.jpg)

El Grove - Botón LED está compuesto de Grove - Botón Amarillo, Grove - Botón Azul y Grove - Botón Rojo. Este botón es estable y tiene una resistencia de hasta 100 000 pulsaciones.
Con el LED agregado, puedes aplicarlo a muchos proyectos interesantas, es bastante útil usar el LED para mostrar el estado del botón. Hemos utilzado un MOSFET Canal-N de alta calidad para controlar y garantizar la alta velocidad de conmutación del LED, así como también su bajo consumo. Todo en uno, ¿Querías un realmente asombroso botón? Aquí lo tienes...

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/Y.png" height="48" width="300" /></a></p>
<p style=":center"><a href="https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/B.png" height="48" width="300" /></a></p>
<p style=":center"><a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/R.png"  height="48" width="300" /></a></p>

## Versión

| Versión del Producto | Cambios | Fecha de Lanzamiento |
| -------------------- | ------- | -------------------- |
| Grove - Botón LED    | Inicial | Jun 2018             |

## Versión

| Versón del Producto | Cambios | Fecha de Lanzamiento |
| ------------------- | ------- | -------------------- |
| Grove - Botón LED   | Inicial | Jun 2018             |

## Versión

| Versión del Producto | Cambios | Fecha de Lanzamiento |
| -------------------- | ------- | -------------------- |
| Grove - Botón LED    | Inicial | Jun 2018             |

## Características

- Larga Vida de Operación
- Fácil de Usar
- Interfaz Digital Grove

## Especificaciones

| Articulo                      | Valpr                    |
| ----------------------------- | ------------------------ |
| Voltaje de Operación          | 3.3V/5V                  |
| Vida Operativa sin carga      | 100 000 times            |
| LED corriente nominal         | 50mA                     |
| Resistencia de Presión^1^     | <100mΩ                   |
| Resistencia de Lanzamiento^2^ | >100MΩ                   |
| Tamaño                        | L: 40mm W: 20mm H: 13mm  |
| Peso                          | 4.3g                     |
| Tamaño del Paquete            | L: 140mm W: 90mm H: 10mm |
| Peso Bruto                    | 11g                      |

¡Consejo!
1- Si quieres medir la resistencia, retira la tecla de la tarjeta. De otra menra obtentar el valor equivalente de la resistencia de la tarjeta en lugar de la verdadera resistencia de la tecla.

## Hardware Overview

### Pines

![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/pin_map.jpg)

### Esquemático

![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/schematic.jpg)

**SIG1** es la señal de control del LED, el valor por defecto es LOW, por lo tanto el MOSFET Canal N está Apagado y el LED también. Cuando la señal cambia a HIGH, el MOSFET se enciende y el LED también.

**SIG2** Contada el pin del Botón. Con una resistencia pull-up, el valor por defecto de la señal es HIGH. Cuando lo presionamos el voltaje cae, y la señal se vuelve LOW.

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

¡Atención!
Para esta parte, usamos el Grove - Botón Rojo como ejemplo. Lo que verás a continuación es aplicable también al Azul y Amarillo.

### Jugando con Arduino

#### Hardware

**Material Requerido**

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Botón LED Rojo                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/IMG_0068a.jpg) |
| <a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquierelo Aquí</a>                        | <a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquierelo Aquí</a>                       | <a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank">Adquierelo Aquí</a>          |

- **Paso 1.** Grove - Botón LED Rojo al puerto **D3** del Grove - Shield Base.

- **Paso 2.** Ensambla el Grove - Shield en tu Seeeduino.

- **Paso 3.** Conecta el Seeeduino al PC vía cable USB.

![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/red%20LED.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino | Grove- Botón LED Rojo |
| --------- | --------------------- |
| 5V        | Rojo                  |
| GND       | Negro                 |
| SIG2      | Blanco                |
| SIG1      | Amarillo              |

#### Software

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar. .

- **Paso 1.** Abre el IDE Arduino y crea un archivo nuevo, copía el siguiente código en el archivo nuevo.

```C++
#include "Arduino.h"

//1: toggle mode, 2: follow mode
#define LED_MODE   1

const int ledPin = 3;      // Puerto del LED, D3
const int buttonPin = 4;    // Puerto del PushButton, D4
const boolean breathMode = true;

//Variables:
int ledState = LOW;         //El estado actual de la salida del pin
int ledFadeValue = 0;
int ledFadeStep = 5;
int ledFadeInterval = 20;   //Millisegundos
int buttonState;             // Lecturad de la corriente del pin de entrada.
int lastButtonState = HIGH;   //Lectura anterior de pin de Entrada.

unsigned long lastDebounceTime = 0;  // Ultima aplciación del pin de salida
unsigned long debounceDelay = 50;    // Tiempo de rebote; ajustar si la salida parpadea
unsigned long lastLedFadeTime = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, ledState);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // El interruptor cambia, por el ruido o presión:
  if (reading != lastButtonState) {
    //Reincio del temporizador antirebote
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // Cualquiera que sea la lectura, estará ahí por más tiempo que esto
    // Esto es el retrazo de push, por lo tanto se tomará como estado actual medible

    // El el estado de botón a cambiado:
    if (reading != buttonState) {
      buttonState = reading;

#if LED_MODE == 1
      if (buttonState == LOW) {  //botón está presionado
          ledState = !ledState;
          ledFadeValue = 0;
          lastLedFadeTime = millis();
      }
#else
      if (buttonState == LOW) {  //botón está presionado
        ledState = HIGH;
        ledFadeValue = 0;
        lastLedFadeTime = millis();
      } else {                   //botón está presionado
        ledState = LOW;
      }
#endif
    }
  }

  // Configuramos el LED:
  if (breathMode && ledState != LOW) {
    if (millis() - lastLedFadeTime > ledFadeInterval) {
      lastLedFadeTime = millis();
      analogWrite(ledPin, ledFadeValue);
      ledFadeValue += ledFadeStep;
      if (ledFadeValue > 255){
        ledFadeValue = 255 - ledFadeStep;
        ledFadeStep = -ledFadeStep;
      } else if (ledFadeValue < 0) {
        ledFadeValue = 0;
        ledFadeStep = -ledFadeStep;
      }
    }
  } else {
    digitalWrite(ledPin, ledState);
  }

  lastButtonState = reading;
}

```

¡Consejo!
En esta demostracióñn, hemos elejido el modo 1 el cual es el modo de alternar, puedes cambiar la linea 4 <mark>#define LED_MODE 1</mark> a <mark>#define LED_MODE 2</mark> para usar el modo de siguimiento.

- **Paso 2.** Sube la demostración. Si no sabes como hacerlo, por favor revisa [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Paso 3.** Ahora, intenta rpesionar el botón, verás el LED desvanecer desde el encendido, así como desde el apagado. Este es el efecto esperado.

Deberá lucir así:

<p style=":center"><img src="https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/result.gif"  /></p>

### Jugando con Raspberry Pi

#### Hardware

- **Paso 1**. Material requerido:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Botón con LED Rojo                                                                                          |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/IMG_0068a.jpg) |
| [Adquierelo Aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                              | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                     | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)                                     |

- **Paso 2**. Ensanbla el Grove Base Hat en tu Raspberry.
- **Paso 3**. Conecta el Botón LED Rojo en el puerto D5 del Hat Base.
- **Paso 4**. Conecta el Raspberry Pi en tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/LED_Hat.jpg)

¡Nota!
Para el paso 3, puedes conectar el botón a **Cualquier puerto GPIO** pero asegurate de hacer los cambios correspondientes en el comando.

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo funte clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta el siguiente comando para correr el código.

```
cd grove.py/grove
python grove_ryb_led_button.py 5

```

Following is the grove_ryb_led_button.py code.

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveLedButton(object):
    def __init__(self, pin):
        # High = light on
        self.__led = Factory.getOneLed("GPIO-HIGH", pin)
        # Low = pressed
        self.__btn = Factory.getButton("GPIO-LOW", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveLedButton.__handle_event)

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


Grove = GroveLedButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    ledbtn = GroveLedButton(pin)

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

¡Éxito!
Si todo sale bien, serás capaz de ver el LED encender cuando presiones el botón, y en caso contrario apagarse. Además, si presionas dos veces seguidas el LED comenzará a parpadear.P

```python

pi@raspberrypi:~/grove.py/grove $ python grove_ryb_led_button.py 5
Hat Name = 'Grove Base Hat RPi'
turn on  LED
turn on  LED
blink    LED
turn on  LED
turn off LED
^CTraceback (most recent call last):
  File "grove_ryb_led_button.py", line 101, in <module>
    main()
  File "grove_ryb_led_button.py", line 97, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir del programa simplemente presionando ctrl+c.

## Recursos

- **[Zip]** [Grove-Botón LED Archivos Eagle](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/res/Grove-Red_LED_Button.zip)

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
