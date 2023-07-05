---
description: Este sensor de humedad puede ser utilizado para detectar la humedad en la tierra o juzgar si existe agua alrededor.
title: Sensor de HUmedad
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Moisture_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernadez
---

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/Moisture_sensor_.jpg)

Este sensor de humedad puede ser utilizado para detectar la humedad en la tierra o juzgar si existe agua alrededor, dejar una planta en tu jardín y darle la capacidad de solicitar ayuda humana cuando tenga sed. El sensor es muy simple de utilizar, puedes simplemente insertarlo en la tierra y leer los datos. Con este sensor, puedes crear pequeños proyectos que permitan a tu planta enviarte un mensaje como "Tengo sed, por favor dame un poco de agua".

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Versión

| Versión del Producto           | Cambios | Fecha de Lanzamiento |
| ------------------------------ | ------- | -------------------- |
| Grove - Sensor de Humedad V1.4 | Inicial | Junio 2014           |

## Características

- Sensor de Humedad de Tierra basado en la medición de resistencia en la tierra.
- Fácil de Usar
- Módulo Grove de 2.0 cm X 6.0 cm

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

| Articulo        | Condición                                                              | Min                       | Nominal | Max                   | Unidad |
| --------------- | ---------------------------------------------------------------------- | ------------------------- | ------- | --------------------- | ------ |
| Voltaje         | -                                                                      | 3.3                       | -       | 5                     | V      |
| Corriente       | -                                                                      | 0                         | -       | 35                    | mA     |
| Valor de Salida | Sensor en Tierra Seca<br />Sensor en Tierra Humeda<br />Sensor en Agua | 0<br />300<br />700<br /> | -       | 300<br />700<br />950 | -      |

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Ideas de Aplicación

- Jardinería Botanica
- Monitoreo de Humedad
- Medición de Consistencia

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

**Hardware**

- **Paso 1.** Prepara los siguiente componentes:

| Seeeduino V4.2                                                                                                           | Shield Base                                                                                                           | Grove - Sensor de Humedad                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/img/Moisture_sensor_S.jpg) |
| [Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                     | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                 | [Get One Now](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)                                                  |

- **Paso 2.** Conecta el Grove - Sensor de Humedad al puerto A0 del Grove - Base Shield.
- **Paso 3.** Ensambla Grove - Shield Base en tu Seeeduino.
- **Paso 4.** Conecta el Seeeduino al PC usanndo un cable USB.

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/img/Seeeduino_moisture.jpg)

¡Nota!
Si no cuantas con un Grove Shield Base, puedes conectar el Grove - Sensor de Huemdad a tu Seeeduino/Arduino como se muestra a continuación.

| Seeeduino    | Grove - Sensor de Humedad |
| ------------ | ------------------------- |
| 5V           | Rojo                      |
| GND          | Negro                     |
| Sin Conectar | Blanco                    |
| A0           | Amarillo                  |

**Software**

- **Paso 1.** Copia el código en el IDE de Arduino y carguelo. Si no sabes como cargar un código, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c++
int sensorPin = A0;
int sensorValue = 0;

void setup() {
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

- **Paso 2.** Podremos ver la humedad mostrada en la terminal como a continuación.

```
Moisture = 0
Moisture = 31
Moisture = 48
Moisture = 139
Moisture = 155
Moisture = 124
Moisture = 236
Moisture = 218
Moisture = 215
Moisture = 221
```

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Sensor de Humedad al puerto A0 de tu Shield Base.

**Paso 2.** Ensambla el Shield Base a tu Seeeduino/Arduino.

**Paso 3.** Enlaza el Seeeduino/Arduino a tu PC usando un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Moisture_Sensor/master/img/cc_Moisture_Sensor.png)

Carga el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando el código finalice de cargar, podrás ver los valores de humedad en el Monitor Serial.

### Jugando con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Componentes utilizados para este proyecto:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Sensor de Humedad                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/img/Moisture_sensor_S.jpg) |
| [Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                         | [Get ONE Now](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)                                                  |

- **Paso 2**. Conecta el Grove Base Hat en tu Raspberry Pi.
- **Paso 3**. Conecta el Grove - Sensor de Humedad al puerto A0 del Hat Base.
- **Paso 4**. Conecta el Raspberry Pi a tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/with_hat.jpg)

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3.** Ejecuta el siguiente comando para correr el código.

```
cd grove.py/grove
python grove_moisture_sensor.py 0
```

A continuación está el código grove_moisture_sensor.py.

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
#
# Grove Base Hat for the Raspberry Pi, used to connect grove sensors.
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
'''
This is the code for
    - Grove - Moisture Sensor <https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html>`_

Examples:

    .. code-block:: python

        import time
        from grove.grove_moisture_sensor import GroveMoistureSensor

        # connect to alalog pin 2(slot A2)
        PIN = 2

        sensor = GroveMoistureSensor(PIN)

        print('Detecting moisture...')
        while True:
            m = sensor.moisture
            if 0 <= m and m < 300:
                result = 'Dry'
            elif 300 <= m and m < 600:
                result = 'Moist'
            else:
                result = 'Wet'
            print('Moisture value: {0}, {1}'.format(m, result))
            time.sleep(1)
'''
import math
import sys
import time
from grove.adc import ADC

__all__ = ["GroveMoistureSensor"]

class GroveMoistureSensor:
    '''
    Grove Moisture Sensor class

    Args:
        pin(int): number of analog pin/channel the sensor connected.
    '''
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def moisture(self):
        '''
        Get the moisture strength value/voltage

        Returns:
            (int): voltage, in mV
        '''
        value = self.adc.read_voltage(self.channel)
        return value

Grove = GroveMoistureSensor


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveMoistureSensor(pin)

    print('Detecting moisture...')
    while True:
        m = sensor.moisture
        if 0 <= m and m < 300:
            result = 'Dry'
        elif 300 <= m and m < 600:
            result = 'Moist'
        else:
            result = 'Wet'
        print('Moisture value: {0}, {1}'.format(m, result))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

¡Éxito!
Si todo ha salido bien, serás capáz de ver los siguietes resultados:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_moisture_sensor.py 0
Detecting moisture...
Moisture value: 0, Dry
Moisture value: 1, Dry
Moisture value: 25, Dry
Moisture value: 3, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 0, Dry
Moisture value: 1, Dry
^CTraceback (most recent call last):
  File "grove_moisture_sensor.py", line 74, in <module>
    main()
  File "grove_moisture_sensor.py", line 71, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes utilizar este sensor para medir la humedad en la tierra. Presiona ++ctrl+c++ para salir.

¡Nota!
Debes notar que los puertos tienen una etiqueta con el número de pin similares a **A1, A0**. Sin embargo, en el comando utilizamos parametros **0** y **1**, de manera identica a un puerto digital. Por favor, asegurate de conectar el módulo en el puerto correcto, de cualquier otra manera, podrás tener conflictos con los pines.

### Jugando con Raspberry Pi(con GrovePi_Plus)

**Hardware**

- **Paso 1.** Prepara los siguientes componentes:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Sensor de Humedad                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/img/Moisture_sensor_S.jpg) |
| [Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                    | [Get One Now](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)                                                  |

- **Paso 2.** Conecta el GrovePi_Plus en tu Raspberry.
- **Step 3.** Conecta el Grove - Sensor de Humedad al puerto **A0** del GrovePi_Plus.
- **Step 4.** Conecta el Raspberry a tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/img/rpi_moisture.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de Desarrollo.
- **Paso 2.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los comandos de acontinuación para usar el Grove - Sensor de Humedad para medir la humedad.

```
cd ~/GrovePi/Software/Python
python grove_moisture_sensor.py
```

Aquí se encuenta el código grove_moisture_sensor.py.

```python
# 	      Valores sugeridos del sensor:
# 		Min  Typ  Max  Condition
# 		0    0    0    sensor in open air
# 		0    20   300  sensor in dry soil
# 		300  580  700  sensor in humid soil
# 		700  940  950  sensor in water


import time
import grovepi

# Conecta el Grove Sensor de Humedad al puerto A0.
# SIG,NC,VCC,GND
sensor = 0

while True:
    try:
        print(grovepi.analogRead(sensor))
        time.sleep(.5)

    except KeyboardInterrupt:
        break
    except IOError:
        print ("Error")
```

- **Paso 4.** Veremos la humedad en la termianl como a continuación.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_moisture_sensor.py
0
90
130
150
160
218
238
```

### Jugando con TI LaunchPad

**Hardware**

El siguiente sketch demuestra una aplicación simple de sensado de humedad en tierra. Con esto, puedes saber si tu planta necesita agua o no observando los resultados de salida del sensor.

![](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/images/Moisture.jpg)

**Software**

```c
/*
  Moisture-Sensor
  The following sketch demonstrates a simple application of sensing
  the moisture of the soil. You can know whether a plant needs water
  or not by observing the results that the sensor outputs.
  The circuit:
    * Moisture-Sensor attached to pin 24 (J6 plug on Grove Base BoosterPack)
    * one side pin (either one) to ground
    * the other side pin to +VCC
    * LED anode (long leg) attached to RED_LED
    * LED cathode (short leg) attached to ground
  - NOTE:
    This example code is in the public domain.
    http://seeedstudio.com/wiki/Grove_-_Moisture_Sensor
*/
#include "TM1637.h"
/* Macro Define */
#define CLK 39              /* 4-digital display clock pin */
#define DIO 38              /* 4-digiral display data pin */
#define BLINK_LED RED_LED   /* blink led */
#define MOISTURE_PIN 24     /* pin of moisture sensor */
#define THRESHOLD_VALUE 300 /* threshold for watering the flowers */
#define ON HIGH             /* led on */
#define OFF LOW             /* led off */
#define _handle_led(x) digitalWrite(BLINK_LED, x) /* handle led */

/* Global Varibles */
TM1637 tm1637(CLK, DIO);    /* 4-digital display object */
int analog_value = 0;       /* varible to store the value coming from rotary angle
sensor */
int8_t bits[4] = {0};       /* array to store the single bits of the value */
/* the setup() method runs once, when the sketch starts */
void setup() {
/* Initialize 4-digital display */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);
/* declare the red_led pin as an OUTPUT */
    pinMode(BLINK_LED, OUTPUT);
}
/* the loop() method runs over and over again */
void loop() {
    analog_value = analogRead(MOISTURE_PIN); /* read the value from the sensor */
/* if the value is smaller than threshold, turn on led */
    if(analog_value < THRESHOLD_VALUE) {
        _handle_led(ON);
    } else {
        _handle_led(OFF);
    }
    memset(bits, 0, 4); /* reset array when we use it */
    for(int i = 3; i >= 0; i--) {
/* get single bits of the analog value */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;
        tm1637.display(i, bits[i]); /* display by 4-digital display */
    }
    delay(200);
}
```

## FAQs

**Q1: ¿Qué significa la salida? ¿Voltaje o cuentas?**

A1: La salida son valores de voltaje. Cuando utilizamos analogRead(), 5V se divide entre 1023. Entonces el valor de salida = Vout \* 1023/5. Entre mayor voltaje de salida, más humedad hay.

## Recursos

- [**Eagle&PDF**][Grove - Sensor de Humedad v1.4 Schematic](https://github.com/SeeedDocument/Grove_Moisture_Sensor/raw/master/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip)
- [**Codecraft**][Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Moisture_Sensor/master/res/Grove_Moisture_Sensor_CDC_File.zip)

## Proyectos

**Sistema de Monitoreo para Plantas usando AWS IoT**: Si estás planenado unas vaciones, aquí encontrarás un gran proyecto para monotorear la temperatura y humedad de la tierra de tu planta usando dweet.io y AWS Iot.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carmelito/plant-monitoring-system-using-aws-iot-6cb054/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
