---
description: El Grove - Ultrasónico es un módulo medidor de distancia sin contacto que trabaja a 40KHz.
title: Grove - Ultrasónico
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Ultrasonic_Ranger_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernadez
---

![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic.jpg)

El Grove - Ultrasónico es un módulo medidor de distancia sin contacto que trabaja a 40KHz. Cuando le damos una señar de más de 10uS a travez del pin de señal, el Grove Ultrasónico emitirá 8 ciclos de 40KHz niveles y detectará el eco. El tamaño del pulso del eco de la señal es proporcional a la distancia medida. Representando la siguiente formula: Distancia = (Tiempo de la señal del eco en high) \* (Velocidad el sonido ((340M/s)/2)).
En este módulo las señales de eco y trig comparten un solo puerto de señal.

¡Precaución!
No conectar el Módulo Grove - Ultrasónico en un lugar caliente, o podría ser dañado. El área a medir no deberá ser menor de 0.5 metros cuadrados y lisa.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versión

| Versión del Producto            | Cambios                                                                                                                                                                                                                 | Fecha de Lanzamiento |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Grove - Ranger Ultrasónico V1.0 | Inicial                                                                                                                                                                                                                 | Marzo 2012           |
| Grove - Ranger Ultrasónico V2.0 | Mejora en la estabilidad de alimentación con un bajo voltaje con los siguientes cambios: 1. Se agregó capacitancia (C14) 2. Rediseño del trazado del PCB para optimizarlo más 3. Sistema compatible con voltaje de 3.3V | Julio 2017           |

## Especificaciones

| Parámetros             | Valor/Rango        |
| :--------------------- | :----------------- |
| Voltaje de Operación   | 3.2~5.2V           |
| Corriente de Operación | 8mA                |
| Frecuencia Ultrasónica | 40kHz              |
| Rango de Medición      | 2-350cm            |
| Resolución             | 1cm                |
| Salida                 | PWM                |
| Tamaño                 | 50mm X 25mm X 16mm |
| Peso                   | 13g                |
| Ángulo de Medición     | 15 degree          |
| Temperatura de Trabajo | -10~60 degree C    |
| Señal Trigger          | 10uS TTL           |
| Señal de Eco           | TTL                |

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

#### Hardware

- **Paso 1.** Prepara el siguiente material:

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Ranger Ultrasónico                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg) |
| [Aquiere uno aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                  | [Aquiere uno aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                 | [Aquiere uno aquí](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)                                            |

- **Paso 2.** Conecta el Grove - Ultrasónico al puerto **D7** del Grove - Shield Base.
- **Paso 3.** Conecta el Grove - Shield Base en tu Seeeduino.
- **Paso 4.** Conecta el Seeeduino al PC vía USB.

![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/arduino%20connection.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove-Rager Ultrasónico |
| ------------ | ----------------------- |
| 5V           | Rojo                    |
| GND          | Negro                   |
| No conectado | Blanco                  |
| D7           | Amarillo                |

#### Software

- **Paso 1.** Descarga la [ Librería UltrasonicRanger](https://github.com/Seeed-Studio/Grove_Ultrasonic_Ranger/archive/master.zip) desde GitHub.
- **Paso 2.** Revisa [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería en Arduino.
- **Paso 3.** Copia el código en el Arduino IDE y subelo. Si no sabes como cargar un código, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```
#include "Ultrasonic.h"

Ultrasonic ultrasonic(7);
void setup()
{
	Serial.begin(9600);
}
void loop()
{
	long RangeInInches;
	long RangeInCentimeters;

	Serial.println("La distancia al obstaculo de enfrente es: ");
	RangeInInches = ultrasonic.MeasureInInches();
	Serial.print(RangeInInches);//0~157 inches
	Serial.println(" inch");
	delay(250);

	RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // Entre mediciones tenemos un intervalo
	Serial.print(RangeInCentimeters);//0~400cm
	Serial.println(" cm");
	delay(250);
}
```

- **Paso 4.** Verás la distancia mostrada en la terminal como a continuación.

```
La distancia al obstaculo de enfrente es:
2 inches
6 cm
La distancia al obstaculo de enfrente es:
2 inches
6 cm
La distancia al obstaculo de enfrente es:
2 inches
6 cm
```

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Ranger Ultrasónico al puerto D7 del Shield Base.

**Paso 2.** Ensambla el Base Shield en tu Seeeduino/Arduino.

**Paso 3.** Enlaza tu Seeeduino/Arduino a tu PC usando un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Ultrasonic_Ranger/master/img/cc_Ultrasonic_Ranger.png)

Sube el programa a tu Arduino o Seeeduino.

¡Éxito!
Cuando el código termine de cargar, verás la distancia mostrada en el Monitor Serial.

## Jugando con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Material a utilizar en este proyecto:

| Raspberry pi                                                                                                   | Grove Base Hat con RasPi                                                                                                       | Grove - Ranger Ultrasónico                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg) |
| [Aquiere uno aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                             | [Aquiere uno aquí](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                    | [Aquiere uno aquí](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)                                            |

- **Paso 2**. Ensambla el Grove Base Hat en tu Raspberry.
- **Paso 3**. Conecta el Grove - Rangr Ultrasónico al puerto **D5** al Base Hat.
- **Paso 4**. Conecta la Raspberry Pi a tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/connect2.jpg)

¡Nota!
Para el paso 3, puedes conectar el Grove - Ultrasónico a **cualquier puerto GPIO** pero, asegurate de cambiar el comando con el número de puerto correspondiente.

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecute el siguiente comando para correr el código.

```
cd grove.py/grove
python grove_ultrasonic_ranger.py 5 6

```

A continuacón el código grove_ultrasonic_ranger.py.

```python

import sys
import time
from grove.gpio import GPIO

usleep = lambda x: time.sleep(x / 1000000.0)

_TIMEOUT1 = 1000
_TIMEOUT2 = 10000

class GroveUltrasonicRanger(object):
    def __init__(self, pin):
        self.dio =GPIO(pin)

    def _get_distance(self):
        self.dio.dir(GPIO.OUT)
        self.dio.write(0)
        usleep(2)
        self.dio.write(1)
        usleep(10)
        self.dio.write(0)

        self.dio.dir(GPIO.IN)

        t0 = time.time()
        count = 0
        while count < _TIMEOUT1:
            if self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT1:
            return None

        t1 = time.time()
        count = 0
        while count < _TIMEOUT2:
            if not self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT2:
            return None

        t2 = time.time()

        dt = int((t1 - t0) * 1000000)
        if dt > 530:
            return None

        distance = ((t2 - t1) * 1000000 / 29 / 2)    # cm

        return distance

    def get_distance(self):
        while True:
            dist = self._get_distance()
            if dist:
                return dist


Grove = GroveUltrasonicRanger

def main():
    if len(sys.argv) < 2:
        print('Usage: {} pin_number'.format(sys.argv[0]))
        sys.exit(1)

    sonar = GroveUltrasonicRanger(int(sys.argv[1]))

    print('Detecting distance...')
    while True:
        print('{} cm'.format(sonar.get_distance()))
        time.sleep(1)

if __name__ == '__main__':
    main()

```

¡Éxito!
Si todo ha salido bien, serás capáz ver el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_ultrasonic_ranger.py 5 6
Detecting distance...
121.757901948 cm
246.894770655 cm
2.60205104433 cm
0.205533257846 cm
0.657706425108 cm
247.433267791 cm
122.485489681 cm
^CTraceback (most recent call last):
  File "grove_ultrasonic_ranger.py", line 110, in <module>
    main()
  File "grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt


```

Puedes salir del programa simplemente presionando ctrl+c.

### Jugando con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguiente materiales:

| Raspberry pi                                                                                                      | GrovePi_Plus                                                                                                            | Grove - Ranger Ultrasónico                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Ultrasonic_small.jpg) |
| [Aquiere uno aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Aquiere uno aquí](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                  | [Aquiere uno aquí](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)                                            |

- **Paso 2.** Inserta el GrovePi_Plus en tu Raspberry.
- **Paso 3.** Conecta el Grove - Ultrasónico al puerto **D4** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a tu PC por medio del cable USB.

![](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/pi%20connection.jpg)

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Git clone el repositorio Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comando para usar el ultrasonic_ranger para medir la distancia.

```
cd ~/GrovePi/Software/Python
python grove_ultrasonic.py
```

Aquí encontrarás el código grove_ultrasonic.py.

```python
# GrovePi + Grove Ranger Ultrasónico

from grovepi import *

# Conecta el Ranger Ultrasónico al puerto digital D4
# SIG,NC,VCC,GND

ultrasonic_ranger = 4

while True:
    try:
        # Lee la distancia del sensor
        print ultrasonicRead(ultrasonic_ranger)

    except TypeError:
        print "Error"
    except IOError:
        print "Error"
```

- **Paso 4.** Podrás ver la distancia en la terminal como a continuación:

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_ultrasonic.py
9
9
9
9
9
9
9
9
9
9
9

```

```c++
#include "Ultrasonic.h"

Ultrasonic ultrasonic1(2);
Ultrasonic ultrasonic2(3);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    long RangeInCentimeters1;
    long RangeInCentimeters2;

    RangeInCentimeters1 = ultrasonic1.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters1);//0~400cm
    Serial.println(" cm");

    RangeInCentimeters2 = ultrasonic2.MeasureInCentimeters(); // two measurements should keep an interval
    Serial.print(RangeInCentimeters2);//0~400cm
    Serial.println(" cm");

    delay(250);
}

```

## FAQs

**Q1: ¿Cómo funciona el sensor Grove - Ultrasónico?**

- A1: Cuando proporcionamos la señal trigger o de dispaso con más de 10uS por medio del pin de señal. el Grove - Ranger Ultrasónico generará 8 cliclos dde 40KHz cada uno para detectar el eco. El tamñao de la señal del eco es proporcional a la distancia. Representando la siguiente formula: Distancia = (Tiempo de la señal del eco en high) \* (Velocidad el sonido ((340M/s)/2)).

**Q2: ¿Por qué el sensor Grove - Ultrasónico solo tiene 1 pin de señal, comparado con otros sensores ultrasónicos que tienen pines para Echo y Trig de manera independiente?**

- A2: El Grove - Ranger Ultrasónico comparte un pin de señal trig y eco por medio a un MCU.

**Q3: ¿Dónde puedo encontrar ayuda técnica si tengo algún otro problema?**

- A3: Por favor envia un correo a techsupport@seeed.cc

**Q4: ¿Podemos conectar multiples sensores ultrasónicos a un Arduino?**

- A4: Sí, aquí en contrarás un ejemplo donde el sensor se encuentra conectado a D2 y otro a D3.

## Recursos

- **[PDF]** [Descarga Wiki PDF](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Grove_Ultrasonic Ranger Esquemático](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[PDF]** [Cerámico Ultrasonic Sensor NU40C16T/R-1](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/blob/master/res/NU40C16T-R-1.pdf)
- **[Librería]** [Grove_Ultrasonic Ranger librería](https://github.com/Seeed-Studio/Grove_Ultrasonic_Ranger/archive/master.zip)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Ultrasonic_Ranger/master/res/Grove_Ultrasonic_Ranger_CDC_File.zip)
- **[Proyecto]** [The Color Helix](https://community.seeedstudio.com/project_detail.html?id=138)
- **[Proyecto]** [Indoor Lightning Cloud](https://community.seeedstudio.com/project_detail.html?id=182)
- **[Proyecto]** [Automatic Water Level Controller](https://community.seeedstudio.com/project_detail.html?id=241)
- **[Ejemplo]** [Ejemplo_Medición_distancia_y_led_muestra](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Example_Measure_distance_and_led_display.zip)
- **[Ejemplo]** [Ejemplo_Medición_y_muestra_de_distancia](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/res/Example_Measure_and_display_the_distance.zip)

## Proyecto

**Hackeando las escaleras en las nuevas oficinas de SEEED**: Transforma las escaleras de la oficina en una instalación interactiva, e incluso una increible manera de mostrar el mensaje "SOLO STAFF" a visitantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
