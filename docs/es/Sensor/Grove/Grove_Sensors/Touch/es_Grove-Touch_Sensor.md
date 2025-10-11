---
description: Grove - Sensor Táctil
title: Grove - Sensor Táctil
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Touch_Sensor
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/surface.jpg)

Grove - Sensor Táctil te permite reemplazar la presión con el toque. Puede detectar el cambio en la capacitancia cuando un dedo está cerca. Esto significa que sin importar si tu dedo toca directamente la almohadilla o simplemente se mantiene cerca de la almohadilla, Grove - Sensor Táctil también emitirá HIGH.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)

## Especificaciones

- Voltaje de Operación: 2.0 - 5.5V
- Corriente de Operación(Vcc=3V):1.5 - 3.0μA
- Corriente de Operación(VDD=3V):3.5 - 7.0μA
- Tiempo de Respuesta de Salida: 60 - 220mS
- Chipset Utilizado: TTP223-BA6

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

**Características opcionales**

| AHLB                     | TOG              | LPMB           | MOTB              | SLRFTB                | RST       | Q               | OPDO                    |
|--------------------------|------------------|----------------|-------------------|-----------------------|-----------|-----------------|-------------------------|
| Output Active High / Low | Modo alternancia | Modo de energía | Tiempo máx. encendido | Longitud de muestreo | PIN RESET | Salida CMOS | Modo drenaje abierto |
| V                        | V                | 0              | 1                 | 1                     | X         | V               | X                       |
| Active High              | Deshabilitado    | LOW            | Infinito          | 1.6 mseg              | N/A       | Presente        | N/A                     |

## Comenzando

### Jugar con Arduino

Esta demostración te va a mostrar cómo encender/apagar un LED.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-Touch_Sensor |Grove-LED|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|![enter image description](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/45d_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

- **Paso 2.** Conecta Grove-Touch_Sensor al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove-LED al puerto **D3** del Grove-Base Shield.
- **Paso 4.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 5.** Conecta Seeeduino a la PC mediante un cable USB.

![with_ardu](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_ardu.jpg)

#### Software

- **Paso 1.** Por favor copia y pega el código de abajo en un nuevo sketch de Arduino.

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

**Paso 2.** Monitorea el encendido y apagado del led.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Touch Sensor al puerto D2, y conecta un Grove - Red LED al puerto D3 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/image/cc_Touch_Sensor.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, el LED se encenderá cuando toques el Touch Sensor.
:::

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Touch Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el sensor táctil al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/Touch_Hat.jpg)

:::note
Para el paso 3 puedes conectar el sensor táctil a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 grove_touch_sensor.py 12

```

A continuación se muestra el código grove_touch_sensor.py.

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

:::tip
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_touch_sensor.py 12
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

Puedes salir de este programa simplemente presionando `ctrl`+`c`.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

<!--false link-->
| Raspberry pi | GrovePi_Plus | Grove-Touch_Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Touch_Sensor al puerto **D2** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![with_rpi](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_rpi.jpg)

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para usar este sensor, por favor cambia el puerto de D4 a D2.

```bash
python3 grove_touch_sensor.py
```

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Touch Sensor (https://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
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

# Connect the Grove Touch Sensor to digital port D2
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

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/rpi_result.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquema del Grove-Touch_Sensor](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip)
- **[PDF]** [TTP223](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/TTP223.pdf)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/resource/Grove_Touch_Sensor_CDC_File.zip)

## Proyectos

**Usando el Sensor Táctil Grove para Controlar el LED Grove**: Cómo conectar y usar el Sensor Táctil Grove para controlar el kit de socket LED Grove.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-touch-sensor-to-control-grove-led-56a5ed/embed' width='350'></iframe>

**Módulo Grove de sensor táctil**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/VFKYYG_hNUE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vPkf4czFQsY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
