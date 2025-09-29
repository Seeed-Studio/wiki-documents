---
description: Grove - Sensor de Humedad
title: Grove - Sensor de Humedad
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Moisture_Sensor
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div>

Este Sensor de Humedad puede ser usado para detectar la humedad del suelo o determinar si hay agua alrededor del sensor, permitiendo que la planta en tu jardín pueda pedir ayuda humana cuando tenga sed. Este sensor es muy fácil de usar, simplemente puedes insertarlo en el suelo y leer los datos. Con este sensor, puedes hacer un pequeño proyecto que permita a la planta enviarte un mensaje como "Tengo sed ahora, por favor dame un poco de agua."

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## Versión

| Versión del Producto         | Cambios                                   | Fecha de Lanzamiento |
|------------------------------|-------------------------------------------|----------------------|
| Grove - Sensor de Humedad V1.4 | Inicial                                   | Junio 2014           |

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para el sensado ambiental. Por favor consulta el Sensor Inalámbrico de Humedad del Suelo, Temperatura y EC S2105 con mayor rendimiento y robustez para el monitoreo de condiciones del suelo. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8-en-1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 Humedad del Suelo &amp; Temp &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Características

- Sensor de humedad del suelo basado en medición de resistividad del suelo
- Fácil de usar
- Módulo grove de 2.0 cm X 6.0 cm

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

|Elemento|Condición|Mín|Típico|Máx|Unidad|
|---|---|---|---|---|---|
|Voltaje|-|3.3|-|5|V|
|Corriente|-|0|-|35|mA|
|Valor de Salida|Sensor en suelo seco,      Sensor en suelo húmedo,Sensor en agua|0, 300, 700,|-|300, 700, 950|-|


## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Ideas de Aplicación

- Jardinería Botánica
- Detección de Humedad
- Medición de Consistencia

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-Sensor de Humedad |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **Paso 2.** Conecta el Sensor de Humedad Grove al puerto A0 del Shield Base Grove.
- **Paso 3.** Conecta el Shield Base Grove al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Seeeduino_moisture.jpg" /></div>

:::note
Si no tenemos el Shield Base Grove, también podemos conectar directamente el Sensor de Humedad Grove al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Sensor de Humedad Grove |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| A0            | Amarillo                  |


**Software**

- **Paso 1.** Copia el código en el IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
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

- **Paso 2.** Veremos la humedad mostrada en la terminal como se muestra a continuación.

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

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Sensor de Humedad Grove al puerto A0 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/cc_Moisture_Sensor.png" /></div>

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, verás el valor de humedad mostrado en el Monitor Serie.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi | Sensor de Humedad Grove |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|

|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)

- **Paso 2**. Conecta el Grove Base Hat a la Raspberry Pi.
- **Paso 3**. Conecta el Grove - Moisture Sensor al puerto A0 del Base Hat.
- **Paso 4**. Conecta la Raspberry Pi a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/with_hat.jpg" /></div>

#### Software

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3.** Ejecuta el siguiente comando para ejecutar el código.

```
cd grove.py/grove
python grove_moisture_sensor.py 0
```

A continuación se muestra el código de grove_moisture_sensor.py.

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

:::tip
Si todo va bien, podrás ver el siguiente resultado:
:::

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

Puedes usar este sensor para detectar la calidad del aire. Presiona ++ctrl+c++ para salir.

:::note
Es posible que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A1, A0**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario, puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi(con GrovePi_Plus)

**Hardware**

- **Paso 1.** Prepara las siguientes cosas:

| Raspberry pi | GrovePi_Plus | Grove-Sensor de Humedad |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/Moisture_sensor_S.jpg" /></div>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Moisture Sensor al puerto **A0** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/img/rpi_moisture.jpg" /></div>

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para usar el Sensor de Humedad Grove para medir la humedad.

```
cd ~/GrovePi/Software/Python
python grove_moisture_sensor.py
```

Aquí está el código de grove_moisture_sensor.py.

```python
#  Here are suggested sensor values:
#   Min  Typ  Max  Condition
#   0    0    0    sensor in open air
#   0    20   300  sensor in dry soil
#   300  580  700  sensor in humid soil
#   700  940  950  sensor in water


import time
import grovepi

# Connect the Grove Moisture Sensor to analog port A0
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

- **Paso 4.** Veremos la humedad mostrada en la terminal como se muestra a continuación.

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

### Jugar con TI LaunchPad

**Hardware**

El siguiente esquema demuestra una aplicación simple de detección de la humedad en el suelo. Con esto, puedes saber si tu planta necesita agua o no observando el resultado de la salida del sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture.jpg" /></div>

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
    https://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor
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

## Preguntas Frecuentes

**P1: ¿Qué significa la salida? ¿voltaje o cuentas?**

R1: La salida son valores de voltaje. Cuando se usa analogRead(), 5V se dividirá por 1023. Así que el valor de salida = Vout * 1023/5. Cuanto mayor sea el voltaje de salida, mayor será la humedad.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]**[Grove - Moisture Sensor v1.4 Schematic](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip)

- **[Codecraft]**[CDC File](https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/res/Grove_Moisture_Sensor_CDC_File.zip)

## Proyectos

**Sistema de Monitoreo de Plantas usando AWS IoT**: Si planeas unas vacaciones, aquí tienes un gran proyecto para rastrear la temperatura y humedad del suelo de tu planta usando dweet.io y AWS IoT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carmelito/plant-monitoring-system-using-aws-iot-6cb054/embed' width='350'></iframe>

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

