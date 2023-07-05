---
description: El Grove - Sensor de Ruido esta diseñado apra detectar sonido ambiental.
title: Loudness Sensor
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Loudness_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/Loudness%20Sensor_new.jpg)

El Grove - Sensor de Ruido esta diseñado apra detectar sonido ambiental. Basado en el amplificador LM2904 y un microfono en el, amplifica y filtra las señales de alta frecuencia que recibe del micrófono, y genera un sobre positivo de salida. Esto es usado para la adquisión de señales del Arduino. El valor de salida depende del nivel del sonido de entrada. En orden de eliminar las perturbaciones de señales innecesarias, la señal de entrada pasará por un doble filtro dentro del módulo. Además, encontrarás un potenciómetro que habilita hacer ajustes manuales a la ganancia de salida.

<iframe width="800" height="450" src="https://www.youtube.com/embed/EhZ7uDvoALE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p style={{}}><a href="http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Versión

| Versión del Producto           | Modificaciones | Fecha de Lanzamiento |
| ------------------------------ | -------------- | -------------------- |
| Grove - Sensor de Sonido V0.9b | Inicial        | Diciembre 2012       |

## Características

- Interfaz Grove
- Fácil de usar
- Elemento Grove básico

¡Consejo!
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

| Parámetros               | Valor/Rango              |
| ------------------------ | ------------------------ |
| Voltaje                  | 3.5~10 VDC               |
| Frecuencia de Operación  | 50~2000 Hz               |
| Sensibilidad             | -48~66 dB                |
| Relación Señal-Ruido     | >58 dB                   |
| Rango de Señal de Salida | Señal Analógica (0-1023) |

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                                 | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

**Hardware**

- **Paso 1.** Prepara las siguientes cosas:

| Seeeduino V4.2                                                                                                           | Shield Base                                                                                                           | Grove - Sensor de Sonido                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/LoudnessSensor_s.jpg) |
| [Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                     | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                 | [Get One Now](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)                                                 |

- **Paso 2.** Conecta el Grove - Sensor de Sonido al puerto **A0** del Grove - Shield Base.
- **Paso 3.** Ensambla el Grove - Shield Base con tu Seeeduino.
- **Step 4.** Conecta el Seeeduino a la PC utilizando un cable USB.

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/seeeduino_loudness.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino | Grove- Sensor de Sonido |
| --------- | ----------------------- |
| 5V        | Rojo                    |
| GND       | Negro                   |
| NC        | Blanco                  |
| A0        | Amarillo                |

**Software**

- **Paso 1.** Copia el código en el IDE de Arduino y carguelo. Si no sabes como cargar un código, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```
int loudness;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    loudness = analogRead(0);
    Serial.println(loudness);
    delay(200);
}

```

- **Paso 2.** Abre el Monitor Serial para ver la salida. Cambiará significativamente cuando soples al sensor.
  ![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/seeeduino_serial.png)

### Jugando con Raspberry Pi (Con la Base Grove para Raspberry Pi)

#### Hardware

- **Paso 1**. Utiliza los siguientes componentes para este proyecto:

| Raspberry pi                                                                                                   | Grove Base para RasPi                                                                                                          | Grove - Sensor de Sonido                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/LoudnessSensor_s.jpg) |
| [Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                         | [Get ONE Now](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)                                                |

- **Paso 2**. Ensambla la Base Grove en tu Raspberry Pi.
- **Paso 3**. Conecta el Grove - Sensor de Sonido al puerto A0 del Grove - Base.
- **Paso 4**. Conecta el Raspberry Pi al PC utilizando un cable USB.
  ![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/withrpi_basehat.jpg)

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el ambiente de desarrollo.
- **Paso 2**. Descarga el Archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3.** Ejecuta el siguiente comando para ejecutar el Código.

```
cd grove.py/grove
python grove_loudness_sensor.py 0
```

A continuación se encuentra el código grove_loudness_sensor.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveLoudnessSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveLoudnessSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLoudnessSensor(int(sys.argv[1]))

    print('Detecting loud...')
    while True:
        value = sensor.value
        if value > 10:
            print("Loud value {}, Loud Detected.".format(value))
            time.sleep(.5)

if __name__ == '__main__':
    main()


```

¡Éxito!
Si todo ha salido bien, serás capaz de ver el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_loudness_sensor.py 0
Detecting loud...
Loud value 15, Loud Detected.
Loud value 11, Loud Detected.
Loud value 250, Loud Detected.
Loud value 429, Loud Detected.
Loud value 203, Loud Detected.
Loud value 16, Loud Detected.
Loud value 11, Loud Detected.
^CTraceback (most recent call last):
  File "grove_loudness_sensor.py", line 68, in <module>
    main()
  File "grove_loudness_sensor.py", line 65, in main
    time.sleep(.5)
KeyboardInterrupt


```

Puedes usar el sensor para detectar sonido. Presiona ++ctrl+c++ para salir.

¡Nota!
Deberás notar que para el puerto analógico, el número de pin de la serigrafía es algo así como **A1, A0**. Sin embargo, en el comando usamos los parámetros **0** y **1**, igual que el puerto digital. Por lo tanto, asegúrese de enchufar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pin.

### Jugando con Raspberry Pi(con GrovePi_Plus)

**Hardware**

- **Paso 1.** Prepara los siguientes materiales:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove-Sensor de Sonido                                                                                                      |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/LoudnessSensor_s.jpg) |
| [Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                    | [Get One Now](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)                                                 |

- **Paso 2.** Ensambla el GrovePi_Plus en tu Raspberry.
- **Step 3.** Conecta el Grove - Sensor de Sonido al puerto **A0** del GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/img/rpi_loudness.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para confirgurar el ambiente de desarrollo.
- **Paso 2.** Clona el siguiente repositorio de GitHub.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta el siguiente comando para monitar el sonido.

```python
cd ~/GrovePi/Software/Python
python grove_loudness_sensor.py
```

Este es el código de grove_loudness_sensor.py.

```python
import time
import grovepi

# Conecta el Grove - Sensor de Sonido al puerto A0
# SIG,NC,VCC,GND
loudness_sensor = 0

while True:
    try:
        # Lee el nivel de sonido
        sensor_value = grovepi.analogRead(loudness_sensor)

        print("sensor_value = %d" %sensor_value)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **Paso 4.** Veremos el estado del sonido como a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_loudness_sensor.py
sensor_value = 135
sensor_value = 23
sensor_value = 196
sensor_value = 258
sensor_value = 98
sensor_value = 131
```

## FAQ

- Q1: ¿Cuál es la diferencia entre el Grove - Sensor de Sonido y el Grove de este articulo?
  - A1: El Grove-Loudness sensor cuenta con un potenciómetro para ajustar la ganancia de salida.

## Recursos

- **[Eagle&PDF]** [Esquemático Grove - Loudness Sensor](https://github.com/SeeedDocument/Grove-Loudness_Sensor/raw/master/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip)
- **[Datasheet]** [LM2904DR Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Loudness_Sensor/master/res/LM2904DR.pdf)

## Proyectos

**Kit de Monitoreo Ambiental Alimentado con Energía Solar**: Un kit de fuente abierta alimentado por energía solar para monitorear la calidad del aire, el nivel de sonido, la humedad y la temperatura.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed' width='350'></iframe>

**The Da Vinci Code**: El trabajo que combina el arte y electrónica. La parte del arte que conforma el esqueleto consta de 11 capas de fibra de densidad media (MDF).

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
