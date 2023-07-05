---
description: El Módulo sensor de agua es parte de sistema Grove. Indica si el sensor se encuentra seco, húmedo o completamente sumergido en agua midiendo la conductividad.
title: Water Sensor
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Water_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor_1.png)

El Módulo sensor de agua es parte de sistema Grove. Indica si el sensor se encuentra seco, húmedo o completamente sumergido en agua midiendo la conductividad. Las trazas del sensor tienen una resistencia débil pull-up de 1MΩ. La resistencia elevará el valor de rastreo del sensor hasta que una gota de agua acorte el rastreo del sensor hasta el rastreo conectado a tierra. Lo creas o no, este circuito funciona utilizando los puertos digitales I/O de tu Arduino, o puedes usarlo con pines analógicos para detectar la cantidad de agua que crea contracto entre los trazos del sensor y los de tierra.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versión

| Versión del Producto      | Cambios | Fecha de Lanzamiento |
| ------------------------- | ------- | -------------------- |
| Grove-Sensor de Agua V1.1 | Inicial | Julio 2014           |

## Características

- Interfaz compatible Grove
- Bajo consumo de energía
- 2.0cm x 2.0cm módulo Grove
- Alta Sensibilidad

## Ideas de Aplicación

- Detector de Lluvia
- Fugas de Líquido
- Detector de sobreflujo en tanques

## Especificaciones

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Articulos
</th>
<th scope="col">
Min
</th>
<th scope="col">
Nominal
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unidades
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Operación
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente
</th>
<td colspan="3">
&lt;20
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de Operación
</th>
<td>
10
</td>
<td>
-
</td>
<td>
30
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Humedad de Trabajo (Sin condensación)
</th>
<td>
10
</td>
<td>
-
</td>
<td>
90
</td>
<td>
 %
</td>
</tr>
</table>

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

#### Hardware

Conecta el módulo a la tarjeta básica usando cualquier pin digital. Podrás obtener el valor del pin de señal. Cuando haya agua en los cables conductores, el valor sera LOW. En cualquier otro caso, será HIGH.

- **Paso 1.** Prepara las siguientes cosas:

| Seeeduino V4.2                                                                                                             | Shield base                                                                                                                | Grove - Sensor de Agua                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor_small.png) |
| [Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                       | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                      | [Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)                                                                    |

- **Paso 2.** Conecta el Sensor de Agua al puerto D2 del Grove - Shield Base.
- **Paso 3.** Ensambla el Grove - Base Shield en tu Seeeduino.
- **Step 4.** Conecta el Seeeduino a tu PC usando un cable USB.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/3.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove - Sensor de Agua |
| ------------ | ---------------------- |
| 5V           | Rojo                   |
| GND          | Negro                  |
| Sin Conectar | Blanco                 |
| D2           | Amarillo               |

#### Software

- **Paso 1.** Copia el código en el IDE de Arduino y carguelo. Si no sabes como cargar un código, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c
#define WATER_SENSOR 2

void setup()
{
  Serial.begin (9600);
  pinMode(WATER_SENSOR, INPUT);
}
void loop()
{
  Serial.println(digitalRead(WATER_SENSOR));
  delay(500);
}

```

- **Paso 2.** Verás una salida en la terminal como la siguiente.

```c
1
1
0
0
1
1
```

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Sensor Grove al puerto D2 del Shield Base.

**Paso 2.** Ensambla el Grove - Base Shield en tu Seeeduino.

**Paso 3.** Enlaza el Seeeduino/Arduino a tu PC usando un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un procedimiento main al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/cc_Water_Sensor.png)

Sube el programa a tu Arduino o Seeeduino.

¡Éxito!
Cuando el código finalice de cargarse, verás en el Monitor Serial si hay agua o no.

### Jugando con Raspberry Pi (Con la Base Grove para Raspberry Pi)

#### Hardware

- **Paso 1**. Cosas utilizadas en este proyecto:

| Raspberry Pi                                                                                                   | Grove Base para Raspberry Pi                                                                                                   | Grove - Sensor de Agua                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor_small.png) |
| [Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                         | [Get ONE Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)                                                                    |

- **Paso 2**. Ensambla la Base Grove en tu Raspberry Pi.
- **Paso 3**. Conecta el Grove Sensor de Agua a tu puerto A0 de la Base.
- **Step 4**. Conecta tu Raspberry Pi a la PC utilizando un cable USB.

![](https://github.com/SeeedDocument/Grove-Water_Sensor/raw/master/img/with_rpi_basehat.jpg)

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el ambiente de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3.** Ejecuta el siguiente comando para ejercutar el código.

```
cd grove.py/grove
python grove_water_sensor.py 0
```

A continuación encontrarás el código grove_water_sensor.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveWaterSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveWaterSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveWaterSensor(int(sys.argv[1]))

    print('Detecting ...')
    while True:
        value = sensor.value
        if sensor.value > 800:
            print("{}, Detected Water.".format(value))
        else:
            print("{}, Dry.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()


```

¡Éxito!
Si todo ha salido bien, serás capaz de ver el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_water_sensor.py 0
Detecting ...
612, Dry.
749, Detected Water.
829, Dry.
357, Dry.
98, Dry.
352, Dry.
517, Dry.
718, Detected Water.
868, Detected Water.
581, Dry.
90, Dry.
326, Dry.
451, Dry.
666, Dry.
867, Detected Water.
684, Dry.
100, Dry.
^CTraceback (Llamada más reciente):
  File "grove_water_sensor.py", line 71, in <module>
    main()
  File "grove_water_sensor.py", line 62, in main
    value = sensor.value
  File "grove_water_sensor.py", line 48, in value
    return self.adc.read(self.channel)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 66, in read
    return self.read_register(addr)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 84, in read_register
    return self.bus.read_word_data(self.address, n)
  File "/home/pi/.local/lib/python2.7/site-packages/smbus2/smbus2.py", line 396, in read_word_data
    ioctl(self.fd, I2C_SMBUS, msg)
KeyboardInterrupt


```

Puedes utilizar el sensor para detectar el agua. Presiona ++ctrl+c++ para salir.
z

¡Nota!
Deberás notar que para el puerto analógico, el número de pin de la serigrafía es algo así como **A1, A0**. Sin embargo, en el comando usamos los parámetros **0** y **1**, igual que el puerto digital. Por lo tanto, asegúrese de enchufar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pin.

### Jugando con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara lo siguiente materiales:

| Raspberry Pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Sensor de Agua                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/Grove-Water_Sensor_small.png) |
| [Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                  | [Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                    | [Get One Now](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)                                                                    |

- **Paso 2.** Ensambla el GrovePi_Plus en el Raspberry.
- **Step 3.** Conecta el Grove - Sensor de Agua al puerto **D2** del GrovePi_Plus.
- **Step 4.** Conecta el Raspberry a la PC usando un cable USB.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/img/7.jpg)

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para confirgurar el ambiente de desarrollo.
- **Paso 2.** Navega entre el directorio de demostraciones:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 3.** Para ver el código

```
nano grove_water_sensor.py
```

```python
import time
import grovepi

# Conecta el Sensor de Agua Grove al puerto D2
# SIG,NC,VCC,GND
water_sensor = 2

grovepi.pinMode(water_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(water_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Paso 4.** Corre la demostración.

```
sudo python grove_water_sensor.py
```

- **Paso 5.** Veremos una salida como la siguiente en el display.

```
1
1
0
0
1
```

## Recursos

- **[Eagle]** [Esquematico Grove Sensor de Agua](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/res/Water_sensor.zip)
- **[Library]** [Código de Demostración para el Sensor de Agua](https://github.com/Seeed-Studio/Grove_Water_Sensor)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove-Water_Sensor/master/res/Grove_Water_Sensor_CDC_File.zip)

<!-- This Markdown file was created from http://wiki.seeedstudio.com/Grove-Water_Sensor/ -->

## Proyecto

**Smart Crops: Implementación de IoT en la Agricultura Convencional!**: Nuestra misión con la naturaleza es perservarla, diseñando e implementando tecnologías y monitoriando métodos con la ayuda de IoT via Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
