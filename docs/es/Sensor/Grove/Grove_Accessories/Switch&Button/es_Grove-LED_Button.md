---
description: Grove-LED Button
title: Grove-LED Button
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-LED_Button
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove-LED Button
category: Acator
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020044,111020045,111020046
tags: 2-链接 
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg)

El Grove - LED Button está compuesto por Grove - Yellow Button, Grove - Blue LED Button y Grove - Red LED Button. Este botón es estable y confiable con una larga vida útil de 100 000 veces.
Con el LED incorporado, puedes aplicarlo a muchos proyectos interesantes, es realmente útil usar el LED para mostrar el estado del botón. Utilizamos un MOSFET de canal N de alta calidad para controlar el LED para asegurar una alta velocidad de conmutación y un bajo consumo. En resumen, ¿quieres algunos botones realmente increíbles? Aquí los tienes...

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/Y.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/B.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/R.png"  height="48" width="300" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED Button | Inicial                                                                                               | Jun 2018      |

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED Button | Inicial                                                                                               | Jun 2018      |

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED Button | Inicial                                                                                               | Jun 2018      |

## Características

- Larga vida útil de funcionamiento
- Fácil de usar
- Interfaz digital Grove

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de trabajo|3.3V/5V|
|Vida útil de funcionamiento sin carga|100 000 veces|
|Corriente nominal del LED|50mA|
|Resistencia de presión^1^|&lt;100mΩ|
|Resistencia de liberación^2^|&gt;100MΩ|
|Tamaño|L: 40mm A: 20mm H: 13mm|
|Peso|4.3g|
|Tamaño del paquete|L: 140mm A: 90mm H: 10mm|
|Peso bruto|11g|

:::tip
1,2- Si desea medir la resistencia, retire la tapa de la tecla de la placa. De lo contrario, obtendrá el valor de la resistencia equivalente de la placa en lugar de la resistencia real de la tapa de la tecla.
:::

## Descripción general del hardware

### Mapa de pines

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/schematic.jpg)

**SIG1** es la señal de control del LED, el valor predeterminado es bajo, por lo que el MOSFET de canal N está apagado, el LED también está apagado. Cuando SIG1 se vuelve alto, el MOSFET de canal N se enciende, y el LED se ilumina.

**SIG2** se conecta al pin del botón. Con una resistencia pull-up, el valor predeterminado de **SIG2** es alto. Cuando presiona el botón, el voltaje se reduce, el **SIG2** se vuelve bajo.

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## Comenzando

:::tip
En esta parte, usamos el Grove - Red LED Button como ejemplo. Las siguientes partes también se aplican al Amarillo y Azul.
:::

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove- Red LED Button |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Compra ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Compra ahora</a>|<a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank">Compra ahora</a>|

- **Paso 1.** Grove- Red LED Button al puerto **D3** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/red%20LED.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove- Red LED Button           |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| SIG2           | Blanco                  |
| SIG1          | Amarillo                  |

#### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Abre el IDE de Arduino y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
#include "Arduino.h"

//1: toggle mode, 2: follow mode
#define LED_MODE   1

const int ledPin = 3;      // the number of the LED pin, D3
const int buttonPin = 4;    // the number of the pushbutton pin, D4
const boolean breathMode = true;  // if or not the led lights as breath mode when it's on

// Variables will change:
int ledState = LOW;         // the current state of the output pin
int ledFadeValue = 0;
int ledFadeStep = 5;
int ledFadeInterval = 20;   //milliseconds
int buttonState;             // the current reading from the input pin
int lastButtonState = HIGH;   // the previous reading from the input pin

unsigned long lastDebounceTime = 0;  // the last time the output pin was toggled
unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers
unsigned long lastLedFadeTime = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, ledState);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // If the switch changed, due to noise or pressing:
  if (reading != lastButtonState) {
    // reset the debouncing timer
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // whatever the reading is at, it's been there for longer
    // than the debounce delay, so take it as the actual current state:

    // if the button state has changed:
    if (reading != buttonState) {
      buttonState = reading;

#if LED_MODE == 1
      if (buttonState == LOW) {  //button is pressed
          ledState = !ledState;
          ledFadeValue = 0;
          lastLedFadeTime = millis();
      }
#else
      if (buttonState == LOW) {  //button is pressed
        ledState = HIGH;
        ledFadeValue = 0;
        lastLedFadeTime = millis();
      } else {                   //button is released
        ledState = LOW;
      }
#endif
    }
  }

  // set the LED:
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

:::tip
En esta demostración, elegimos el modo 1 que es el modo de alternancia, puedes cambiar la línea 4 <mark>#define LED_MODE   1</mark> por <mark>#define LED_MODE   2</mark> para usar el modo de seguimiento.
:::

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 3.** Ahora, intenta presionar tu botón, verás que el LED se enciende con un efecto de aparición/desaparición gradual.

Debería verse así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/result.gif"  /></p>

### Jugar Con Raspberry Pi

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Botón LED Rojo|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el botón LED rojo al puerto D5 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/LED_Hat.jpg)

:::note
Para el paso 3 puedes conectar el botón LED a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
sudo pip3 install Seeed-grove.py
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
sudo python3 grove_ryb_led_button.py 5

```

A continuación se muestra el código grove_ryb_led_button.py.

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

:::tip
Si todo va bien, podrás ver que el LED se enciende si lo presionas y se apaga si lo mantienes presionado. Si haces doble clic en el botón del LED, el LED parpadeará.
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ryb_led_button.py 5
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

Puedes salir de este programa simplemente presionando ++ctrl+c++.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo Eagle del Grove-LED Button](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip)

## Soporte Técnico y Discusión de Productos

<br />
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
