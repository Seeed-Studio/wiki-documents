---
description: El Sensor Touch - Grove permite reemplazar la presión con el contacto.
title: Sensor Touch
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Touch_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Touch_Sensor/master/img/surface.jpg)

El Sensor Touch - Grove permite reemplazar la presión con el contacto. Puede detectar el cambio de capacitancia cuando un dedo está cerca, así que no importa si lo está tocando directamente o sólo permanece cerca, el sensor emitirá HIGH.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)

## Especificaciones

- Voltaje de operación: 2.0 - 5.5V
- Corriente de operación(Vcc=3V):1.5 - 3.0μA
- Corriente de operación(VDD=3V):3.5 - 7.0μA
- Tiempo de respuesta de salida: 60 - 220mS
- Chip utilizado: TTP223-BA6

¡Consejo!
Para más información sobre módulos Grove, visita [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

**Características opcionales**

| AHLB                     | TOG           | LPMB                 | MOTB         | SLRFTB               | RST       | Q           | OPDO            |
| ------------------------ | ------------- | -------------------- | ------------ | -------------------- | --------- | ----------- | --------------- |
| Salida activa High / Low | Modo alternar | Modo de alimentación | Max. On Time | Longitud de muestreo | PIN RESET | Salida CMOS | Open Drain Mode |
| V                        | V             | 0                    | 1            | 1                    | X         | V           | X               |
| High activo              | Deshabilitado | LOW                  | Infinito     | 1.6 msec             | N/A       | Presente    | N/A             |

## Primeros pasos

### Juega con Arduino

Esta demo le mostrará cómo encender/apagar un LED.

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                             | Base Shield                                                                                                                | Sensor Touch - Grove                                                                                              | LED - Grove                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Touch_Sensor/raw/master/img/45d_small.jpg) | ![enter image description](https://github.com/SeeedDocument/Grove-Red_LED/raw/master/img/45d_small.jpg) |
| [Obtenlo ahora](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                     | [Obtenlo ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                    | [Obtenlo ahora](http://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)                                         | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)                                  |

- **Paso 2.** Conecta el Sensor Touch - Grove al puerto **D2** de la Base Shield - Grove.
- **Paso 3.** Conecta el LED - Grove al puerto **D3** de la Base Shield - Grove.
- **Paso 4.** Conecta la Base Shield - Grove al Seeeduino.
- **Paso 5.** Conecta el Seeeduino a la PC con un cable USB.

![with_ardu](https://github.com/SeeedDocument/Grove-Touch_Sensor/raw/master/img/with_ardu.jpg)

#### Software

- **Paso 1.** Copia y pega el código que se muestra a continuación en un sketch nuevo de Arduino.

```c
const int TouchPin=2;
const int ledPin=3;

void setup() {
    pinMode(TouchPin, INPUT);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorValue = digitalRead(TouchPin);
    if(sensorValue==1)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

**Paso 2.** Monitorea el LED encendido y apagado.

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el Sensor Touch - Grove al puerto D2, y conecta el LED rojo - Grove al puerto D3 de la Base Shield.

**Paso 2.** Conecta la Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino y arrastra un procedimiento principal al área de trabajo.

Nota:
Si es tu primera vez usando Codecraft, por favor revisa [Guía para Codecraft usando Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como se muestra en la imagen, o abre el archivo cdc que puedes descargar al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Touch_Sensor/master/image/cc_Touch_Sensor.png)

Carga el programa al Arduino/Seeeduino.

¡Éxito!
Cuando el código termine de cargarse, el LED se encenderá cuando toques el sensor.

### Juega con Raspberry Pi (con Base Hat-Grove para Raspberry Pi)

#### Hardware

- **Paso 1**. Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | Base Hat- Grove para RasPi                                                                                                     | Sensor Touch - Grove                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Touch_Sensor/raw/master/img/45d_small.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                       | [Obtenlo ahora](http://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)                                         |

- **Paso 2**. Conecta la Base Hat - Grove a la Raspberry.
- **Paso 3**. Conecta el Sensor Touch - Grove al puerto 12 de la Base Hat.
- **Paso 4**. Conecta la Raspberry Pi a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove-Touch_Sensor/raw/master/img/Touch_Hat.jpg)

Nota:
En el paso 3, puedes conectar el Sensor Touch a **cualquier puerto GPIO** pero debes asegurarte de cambiar el comando con el puerto correspondiente.

#### Software

- **Paso 1**. Sigue [Configuración de Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los comandos de abajo para correr el código.

```
cd grove.py/grove
python grove_touch_sensor.py 12

```

Aquí está el código grove_touch_sensor.py

```python

import time
from grove.gpio import GPIO


class GroveTouchSensor(GPIO):
    def __init__(self, pin):
        super(GroveTouchSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_press = None
        self._on_release = None

    @property
    def on_press(self):
        return self._on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_press = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if value:
            if callable(self._on_press):
                self._on_press(dt)
        else:
            if callable(self._on_release):
                self._on_release(dt)

Grove = GroveTouchSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    touch = GroveTouchSensor(int(sys.argv[1]))

    def on_press(t):
        print('Pressed')
    def on_release(t):
        print("Released.")

    touch.on_press = on_press
    touch.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

¡Éxito!
Si todo salió bien, podrás ver el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_touch_sensor.py 12
Pressed
Released.
Pressed
Released.
Pressed
Released.
Pressed
Released.
^CTraceback (most recent call last):
  File "grove_touch_sensor.py", line 110, in <module>
    main()
  File "grove_touch_sensor.py", line 106, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes quitar este programa presionando ctrl+c.

### Juega con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

<!--false link-->

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Sensor Touch - Grove                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Touch_Sensor/raw/master/img/45d_small.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                  | [Obtenlo ahora](http://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)                                         |

- **Paso 2.** Conecta el GrovePi_Plus a la Raspberry.
- **Paso 3.** Conecta el Sensor Touch - Grove al puerto **D2** del GrovePi_Plus.
- **Paso 4.** Conecta la Raspberry a la PC con un cable USB.

![with_rpi](https://github.com/SeeedDocument/Grove-Touch_Sensor/raw/master/img/with_rpi.jpg)

#### Software

- **Paso 1.** Sigue [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para usar el sensor, por favor cambia el puerto D4 a D2.

```bash
python grove_touch_sensor.py
```

```python
#!/usr/bin/env python
#
# GrovePi ejemplo para usar el Sensor Touch Grove (http://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor)
#
# El GrovePi conecta la Raspberry Pi y los sensores Grove.  Puedes aprender más acerca de GrovePi aquí:  http://www.dexterindustries.com/GrovePi
#
# ¿Tienes alguna pregunta sobre este ejemplo?  Pregunta en los foros aquí:  http://forum.dexterindustries.com/c/grovepi
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

# Conecta el Sensor Touch Grove al puerto digital D2
# SIG,NC,VCC,GND
touch_sensor = 2

grovepi.pinMode(touch_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(touch_sensor))
        time.sleep(.5)

    except IOError:
        print ("Error")

```

Así se ve el resultado:

![](https://github.com/SeeedDocument/Grove-Touch_Sensor/raw/master/img/rpi_result.jpg)

## Recursos

- **[Eagle]** [Sensor Touch-Grove Esquemático](https://raw.githubusercontent.com/SeeedDocument/Grove-Touch_Sensor/master/res/Touch_sensor_Eagle_File.zip)
- **[PDF]** [TTP223](https://raw.githubusercontent.com/SeeedDocument/Grove-Touch_Sensor/master/res/TTP223.pdf)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Touch_Sensor/master/resource/Grove_Touch_Sensor_CDC_File.zip)

## Proyectos

**Usando el Sensor Touch - Grove para controlar un LED - Grove**: Cómo conectar y usar el Sensor Touch - Grove para controlar un Juego de enchufes LED - Grove.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-touch-sensor-to-control-grove-led-56a5ed/embed' width='350'></iframe>

**Módulo Grove Sensor Touch**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/VFKYYG_hNUE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vPkf4czFQsY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte técnico

Por favor envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
