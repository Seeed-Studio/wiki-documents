---
description: El Sensor de Flama - Grove puede utilizarse para detectar fuentes de incendio u otras fuentes de luz siempre que su longitud de onda esté en un rango de 760nm - 1100 nm.
title: Sensor de Flama
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Flame_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/img/Flame_Sensor_01.jpg)

El Sensor de Flama - Grove puede utilizarse para detectar fuentes de incendio u otras fuentes de luz siempre que su longitud de onda esté en un rango de 760nm - 1100 nm. Está basado en el sensor YG1006, el cual es un fototransistor NPN de silicio de alta velocidad y alta sensibilidad. Debido a su resina epoxi negra, es sensible a la radiación infrarroja. En el juego de robots de lucha contra incendios, este sensor juega un papel muy importarte pudiendo utilizarse como los ojos de los robots para encontrar la fuente del incendio.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

## Características

- Interfaz Grove
- Alta fotosensibilidad
- Tiempo de respuesta rápido
- Fácil de usar
- Sensibilidad ajustable

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Detalle
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.30
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente
</th>
<td>
/
</td>
<td>
20
</td>
<td>
/
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de longitud de onda
</th>
<td>
760
</td>
<td>
940
</td>
<td>
1100
</td>
<td>
nm
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de detección
</th>
<td>
0
</td>
<td>
~
</td>
<td>
1
</td>
<td>
m
</td>
</tr>
<tr align="center">
<th scope="row">
Tiempo de respuesta
</th>
<td colspan="3">
15
</td>
<td>
μS
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de operación
</th>
<td>
-25
</td>
<td>
~
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
</table>

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

### Jugando con Arduino

El módulo es utilizado principalmente para detectar luz infrarroja. Entrega las señales digitales 0 y 1 a través de una salida de comparador. El valor de salida será 0 cuando se detecte luz infrarroja. El valor de la sensibilidad puede ajustarse con el potenciómetro de precisión.

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                           | Shield Base - Grove                                                                                                   | Sensor de Flama - Grove                                                                                           | LED rojo - Grove                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Flame_Sensor/raw/master/img/45d_small.jpg) | ![enter image description](https://github.com/SeeedDocument/Grove-Red_LED/raw/master/img/Red%20LED_s.jpg) |
| [¡Obtenlo ya!](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                    | [¡Obtenlo ya!](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                | [¡Obtenlo ya!](http://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)                                         | [¡Obtenlo ya!](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)                                   |

- **Paso 2.** Conecta el Sensor de Flama - Grove al puerto **D2** de la Shield Base - Grove.
- **Paso 3.** Conecta el LED rojo - Grove al puerto **D3** de la Shield Base - Grove.
- **Paso 4.** Inserta el Shield Base - Grove al Seeeduino.
- **Paso 5.** Conecta el Seeeduino a tu PC con un clable USB.

<!--link-->

![with_ardu](https://github.com/SeeedDocument/Grove-Flame_Sensor/raw/master/img/with_ardu.jpg)

Nota:
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo al Seeeduino como se muestra en la tabla:

| Seeeduino    | Sensor de Flama - Grove |
| ------------ | ----------------------- |
| 5V           | Rojo                    |
| GND          | Negro                   |
| No conectado | Blanco                  |
| D2           | Amarillo                |

| Seeeduino    | LED rojo - Grove |
| ------------ | ---------------- |
| 5V           | Rojo             |
| GND          | Negro            |
| No conectado | Blanco           |
| D3           | Amarillo         |

#### Software

**Paso 1.** Copia el código y actualízalo en la placa de controlador.

Este es el código:

```c
    /******************************************************************************/

#define FLAME_SENSOR 2 // Conecta el SENSOR al pin digital 2
#define LED 3 // Conecta el LED - Grove al pin 3

void setup()
{
    pinsInit();
}
void loop()
{
    if(isFlameDetected())
    turnOnLED();
    else turnOffLED();
}
    /********************************/
void pinsInit()
{
    pinMode(FLAME_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
    digitalWrite(LED,LOW);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
boolean isFlameDetected()
{
    if(digitalRead(FLAME_SENSOR))
    return false;
    else return true;
}
```

**Paso 2.** El LED se encenderá cuando se detecte luz infrarroja.

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el Sensor de Flama - Grove al puerto D2, y el LED rojo - Grove al puerto D3 de la Shield Base.

**Paso 2.** Conecta la Shield Base al Seeeduino/Arduino.

**Paso 3.** Vincula el Seeeduino/Arduino a tu PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega el soporte para Arduino y arrastra el procedimiento principal al área de trabajo.

Nota:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra los bloques como se muestra en la imagen o abre el archivo cdc que puedes descargar al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/img/cc_Flame_Sensor.png)

Carga el programa al Arduino o Seeeduino.

¡Éxito!
Cuando el código termine de cargarse, el LED se encenderá cuando el sensor detecte la flama.

### Juega con Raspberry Pi

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Sensor de Flama - Grove                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Flame_Sensor/raw/master/img/45d_small.jpg) |
| [¡Obtenlo ya!](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                 | [¡Obtenlo ya!](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                   | [¡Obtenlo ya!](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)                                        |

- **Paso 2.** Conecta el GrovePi_Plus en la Raspberry.
- **Paso 3.** Conecta el Sensor de Flama - Grove al puerto **D2** de la GrovePi_Plus.
- **Paso 4.** Conecta la Raspberry a la PC con un cable USB.

![with_rpi](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/img/with_rpi.jpg)

#### Software

- **Paso 1.** Sigue los pasos de [Configurar Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el siguiente repositorio de Github.

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para usar el sensor.

```bash
cd ~/GrovePi/Software/Python
python grove_flame_sensor.py
```

Aquí está el código de ejemplo:

```python
#!/usr/bin/env python
#
# GrovePi Ejemplo para usar el Sensor de Flama Grove (http://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor)
#
# GrovePi conecta los sensores Grove y Raspberry.  Puedes aprender más sobre GrovePi aquí:  http://www.dexterindustries.com/GrovePi
#
# ¿Alguna pregunta sobre este ejemplo? Pregunta en los foros aquí:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''
import time
import grovepi

# Conecta el Sensor de Flama Grove al puerto digital D2
# SIG,NC,VCC,GND
flame_sensor = 2

grovepi.pinMode(flame_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(flame_sensor))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

## Referencias

Este sensor puede detectar fuentes de luz cuya longitud de onda esté en un rango de 760nm - 1100 nm. La siguiente imagen muestra la sensibilidad de lectura del espectro.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/img/Spectral_Sensitive.jpg)

## Recursos

- **[Eagle]** [Archivo de Eagle del Sensor de Flama - Grove](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/res/Grove-Directional_Light_Sensor_Eagle_File.zip)
- **[Librería]** [Github repository for Grove_Flame_Sensor Library](https://github.com/Seeed-Studio/Grove_Flame_Sensor)
- **[Hola de datos (Datasheet)]** [LM293D datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/res/LM293D.pdf)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove-Flame_Sensor/master/res/Grove_Flame_Sensor_CDC_File.zip)

## Soporte técnico

Envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
