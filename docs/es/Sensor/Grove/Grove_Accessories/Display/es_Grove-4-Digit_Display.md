---
description: Grove - Pantalla de 4 Dígitos
title: Grove - Pantalla de 4 Dígitos
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-4-Digit_Display
last_update:
  date: 1/7/2023
  author: shuxu hu
---

[<p><img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/Grove-4_digit_display.jpg" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/depot/grove-4digital-display-p-1198.html)

El módulo Grove - Pantalla de 4 Dígitos es un módulo de 12 pines. En este módulo, utilizamos un TM1637 para reducir el número de pines de control a 2. Es decir, controla tanto el contenido como la luminosidad a través de solo 2 pines digitales de Arduino o Seeeduino. Para proyectos que requieren una pantalla alfanumérica, esta puede ser una buena opción.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-4digital-display-p-1198.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)

## Versión

| Versión del Producto              | Cambios                                   | Fecha de Lanzamiento |
|------------------------------|-------------------------------------------|---------------|
|Grove - Pantalla de 4 Dígitos V1.0  | Inicial                                   | Mayo 2012      |

## Características

- Pantalla alfanumérica roja de 4 dígitos
- Interfaz compatible con Grove (3.3V/5V)
- 8 niveles de luminosidad ajustables

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

<table border="2" cellspacing="0" width="58.2%">
<tr>
<th scope="col">
Elemento
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
3.3
</td>
<td>
5.0
</td>
<td>
5.5
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
0.2
</td>
<td>
27
</td>
<td>
80
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensiones
</th>
<td colspan="3">
42x24x14
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
Peso Neto
</th>
<td colspan="3">
7±1
</td>
<td>
g
</td>
</tr>
</table>

## Ideas de Aplicación

- Visualización de hora
- Cronómetro
- Visualización de entrada de sensores

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-4-Digit Display |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **Paso 2.** Conecta Grove-4-Digit Display al puerto **D2** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-4-Digit Display al Seeeduino como se muestra a continuación. También podemos conectar Grove-4-Digit Display a otro puerto digital Grove.
:::

| Seeeduino |  Grove-4-Digit Display |
|-----------|-----------------|
| 5V        | Rojo            |
| GND       | Negro           |
| D3        | Blanco (DIO)    |
| D2        | Amarillo(CLK)   |

:::warning
    El Grove-4-Digit Display incluye 4 pines, GND, VCC, DIO, CLK. Podemos conectar DIO y CLK a cualquier pin digital. No es protocolo I2C.   
:::
**Software**

- **Paso 1.** Descarga la [Librería Grove-4-Digit Display](https://github.com/Seeed-Studio/Grove_4Digital_Display/archive/master.zip) y la [Librería TimerOne](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=).
- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3.** Sigue las instrucciones a continuación para seleccionar el código en Arduino IDE y subirlo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/). Hay 3 ejemplos como se muestra a continuación.
  - Pantalla de Reloj
  - Flujo de Números
  - Cronómetro

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Veremos que el Grove-4-Digit Display se enciende.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - 4-Digit Diaplsy al puerto D2 en un Base Shield

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen a continuación o abre el archivo cdc que se puede descargar al final de esta página.
<!-- 
![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, verás números fluyendo del 0 al 9.
:::

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - 4 Digit Display |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry Pi.
- **Paso 3**. Conecta la pantalla de 4 dígitos al puerto 12 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar la pantalla a **cualquier GPIO Puerto** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python grove_4_digit_display.py 12 13

```

A continuación se muestra el código grove_4_digit_display.py.

```python

import sys
import time
from grove.gpio import GPIO


charmap = {
    '0': 0x3f,
    '1': 0x06,
    '2': 0x5b,
    '3': 0x4f,
    '4': 0x66,
    '5': 0x6d,
    '6': 0x7d,
    '7': 0x07,
    '8': 0x7f,
    '9': 0x6f,
    'A': 0x77,
    'B': 0x7f,
    'b': 0x7C,
    'C': 0x39,
    'c': 0x58,
    'D': 0x3f,
    'd': 0x5E,
    'E': 0x79,
    'F': 0x71,
    'G': 0x7d,
    'H': 0x76,
    'h': 0x74,
    'I': 0x06,
    'J': 0x1f,
    'K': 0x76,
    'L': 0x38,
    'l': 0x06,
    'n': 0x54,
    'O': 0x3f,
    'o': 0x5c,
    'P': 0x73,
    'r': 0x50,
    'S': 0x6d,
    'U': 0x3e,
    'V': 0x3e,
    'Y': 0x66,
    'Z': 0x5b,
    '-': 0x40,
    '_': 0x08,
    ' ': 0x00
}

ADDR_AUTO = 0x40
ADDR_FIXED = 0x44
STARTADDR = 0xC0
BRIGHT_DARKEST = 0
BRIGHT_DEFAULT = 2
BRIGHT_HIGHEST = 7


class Grove4DigitDisplay(object):
    colon_index = 1

    def __init__(self, clk, dio, brightness=BRIGHT_DEFAULT):
        self.brightness = brightness

        self.clk = GPIO(clk, direction=GPIO.OUT)
        self.dio = GPIO(dio, direction=GPIO.OUT)
        self.data = [0] * 4
        self.show_colon = False

    def clear(self):
        self.show_colon = False
        self.data = [0] * 4
        self._show()

    def show(self, data):
        if type(data) is str:
            for i, c in enumerate(data):
                if c in charmap:
                    self.data[i] = charmap[c]
                else:
                    self.data[i] = 0
                if i == self.colon_index and self.show_colon:
                    self.data[i] |= 0x80
                if i == 3:
                    break
        elif type(data) is int:
            self.data = [0, 0, 0, charmap['0']]
            if data < 0:
                negative = True
                data = -data
            else:
                negative = False
            index = 3
            while data != 0:
                self.data[index] = charmap[str(data % 10)]
                index -= 1
                if index < 0:
                    break
                data = int(data / 10)

            if negative:
                if index >= 0:
                    self.data[index] = charmap['-']
                else:
                    self.data = charmap['_'] + [charmap['9']] * 3
        else:
            raise ValueError('Not support {}'.format(type(data)))
        self._show()

    def _show(self):
        with self:
            self._transfer(ADDR_AUTO)

        with self:
            self._transfer(STARTADDR)
            for i in range(4):
                self._transfer(self.data[i])

        with self:
            self._transfer(0x88 + self.brightness)

    def update(self, index, value):
        if index < 0 or index > 4:
            return

        if value in charmap:
            self.data[index] = charmap[value]
        else:
            self.data[index] = 0

        if index == self.colon_index and self.show_colon:
            self.data[index] |= 0x80

        with self:
            self._transfer(ADDR_FIXED)

        with self:
            self._transfer(STARTADDR | index)
            self._transfer(self.data[index])

        with self:
            self._transfer(0x88 + self.brightness)


    def set_brightness(self, brightness):
        if brightness > 7:
            brightness = 7

        self.brightness = brightness
        self._show()

    def set_colon(self, enable):
        self.show_colon = enable
        if self.show_colon:
            self.data[self.colon_index] |= 0x80
        else:
            self.data[self.colon_index] &= 0x7F
        self._show()

    def _transfer(self, data):
        for _ in range(8):
            self.clk.write(0)
            if data & 0x01:
                self.dio.write(1)
            else:
                self.dio.write(0)
            data >>= 1
            time.sleep(0.000001)
            self.clk.write(1)
            time.sleep(0.000001)

        self.clk.write(0)
        self.dio.write(1)
        self.clk.write(1)
        self.dio.dir(GPIO.IN)

        while self.dio.read():
            time.sleep(0.001)
            if self.dio.read():
                self.dio.dir(GPIO.OUT)
                self.dio.write(0)
                self.dio.dir(GPIO.IN)
        self.dio.dir(GPIO.OUT)

    def _start(self):
        self.clk.write(1)
        self.dio.write(1)
        self.dio.write(0)
        self.clk.write(0)

    def _stop(self):
        self.clk.write(0)
        self.dio.write(0)
        self.clk.write(1)
        self.dio.write(1)

    def __enter__(self):
        self._start()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self._stop()


Grove = Grove4DigitDisplay


def main():
    if len(sys.argv) < 3:
        print('Usage: {} clk dio'.format(sys.argv[0]))
        sys.exit(1)

    display = Grove4DigitDisplay(int(sys.argv[1]), int(sys.argv[2]))

    count = 0
    while True:
        t = time.strftime("%H%M", time.localtime(time.time()))
        display.show(t)
        display.set_colon(count & 1)
        count += 1
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::success
    Si todo va bien, la pantalla de 4 dígitos mostrará la hora actual.
:::

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar Con Raspberry Pi (con GrovePi_Plus)

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove-4-Digit Display |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta Grove-4-Digit Display al puerto **D5** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para monitorear el volumen.

```python
cd ~/GrovePi/Software/Python
python grove_4_digit_display.py
```

Aquí está el código de grove_4_digit_display.py.

```python
# NOTE: 4x red 7 segment display with colon and 8 luminance levels, but no decimal points

import time
import grovepi

# Connect the Grove 4 Digit Display to digital port D5
# CLK,DIO,VCC,GND
display = 5
grovepi.pinMode(display,"OUTPUT")

# If you have an analog sensor connect it to A0 so you can monitor it below
sensor = 0
grovepi.pinMode(sensor,"INPUT")

time.sleep(.5)

# 4 Digit Display methods
# grovepi.fourDigit_init(pin)
# grovepi.fourDigit_number(pin,value,leading_zero)
# grovepi.fourDigit_brightness(pin,brightness)
# grovepi.fourDigit_digit(pin,segment,value)
# grovepi.fourDigit_segment(pin,segment,leds)
# grovepi.fourDigit_score(pin,left,right)
# grovepi.fourDigit_monitor(pin,analog,duration)
# grovepi.fourDigit_on(pin)
# grovepi.fourDigit_off(pin)

while True:
    try:
        print ("Test 1) Initialise")
        grovepi.fourDigit_init(display)
        time.sleep(.5)

        print ("Test 2) Set brightness")
        for i in range(0,8):
            grovepi.fourDigit_brightness(display,i)
            time.sleep(.2)
        time.sleep(.3)

        # set to lowest brightness level
        grovepi.fourDigit_brightness(display,0)
        time.sleep(.5)

        print ("Test 3) Set number without leading zeros")
        leading_zero = 0
        grovepi.fourDigit_number(display,1,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,12,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,123,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,1234,leading_zero)
        time.sleep(.5)

        print ("Test 4) Set number with leading zeros")
        leading_zero = 1
        grovepi.fourDigit_number(display,5,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,56,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,567,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,5678,leading_zero)
        time.sleep(.5)

        print ("Test 5) Set individual digit")
        grovepi.fourDigit_digit(display,0,2)
        grovepi.fourDigit_digit(display,1,6)
        grovepi.fourDigit_digit(display,2,9)
        grovepi.fourDigit_digit(display,3,15) # 15 = F
        time.sleep(.5)

        print ("Test 6) Set individual segment")
        grovepi.fourDigit_segment(display,0,118) # 118 = H
        grovepi.fourDigit_segment(display,1,121) # 121 = E
        grovepi.fourDigit_segment(display,2,118) # 118 = H
        grovepi.fourDigit_segment(display,3,121) # 121 = E
        time.sleep(.5)

        grovepi.fourDigit_segment(display,0,57) # 57 = C
        grovepi.fourDigit_segment(display,1,63) # 63 = O
        grovepi.fourDigit_segment(display,2,63) # 63 = O
        grovepi.fourDigit_segment(display,3,56) # 56 = L
        time.sleep(.5)

        print ("Test 7) Set score")
        grovepi.fourDigit_score(display,0,0)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,0)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,1)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,2)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,3)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,4)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,5)
        time.sleep(.5)

        print ("Test 8) Set time")
        grovepi.fourDigit_score(display,12,59)
        time.sleep(.5)

        print ("Test 9) Monitor analog pin")
        seconds = 10
        grovepi.fourDigit_monitor(display,sensor,seconds)
        time.sleep(.5)

        print ("Test 10) Switch all on")
        grovepi.fourDigit_on(display)
        time.sleep(.5)

        print ("Test 11) Switch all off")
        grovepi.fourDigit_off(display)
        time.sleep(.5)

    except KeyboardInterrupt:
        grovepi.fourDigit_off(display)
        break
    except IOError:
        print ("Error")

```

- **Paso 4.** Veremos el Grove-4-Digit Display como se muestra a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_4_digit_display.py 
Test 1) Initialise
Test 2) Set brightness
Test 3) Set number without leading zeros
Test 4) Set number with leading zeros
Test 5) Set individual digit
Test 6) Set individual segment
Test 7) Set score
Test 8) Set time
Test 9) Monitor analog pin
Test 10) Switch all on
Test 11) Switch all off
```

### Jugar con TI LaunchPad

Mostrar los Números (Pantalla de 4 Dígitos)

Este ejemplo demuestra cómo mostrar algunos números digitales usando una Pantalla de 4 Dígitos Grove.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg" alt="pir" width={600} height="auto" /></p>

```
/*
 * TM1637.cpp
 * A library for the 4 digit display
 */
#include "TM1637.h"
#define CLK 39 //pins definitions for TM1637 and can be changed to other ports
#define DIO 38
TM1637 tm1637(CLK,DIO);
void setup()
{
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);//BRIGHT_TYPICAL = 2,BRIGHT_DARKEST = 0,BRIGHTEST = 7;
}
void loop()
{
    int8_t NumTab[] = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};//0~9,A,b,C,d,E,F
    int8_t ListDisp[4];
    unsigned char i = 0;
    unsigned char count = 0;
    delay(150);
    while(1)
    {
        i = count;
        count ++;
        if(count == sizeof(NumTab)) count = 0;
        for(unsigned char BitSelect = 0;BitSelect < 4;BitSelect ++)
        {
            ListDisp[BitSelect] = NumTab[i];
            i ++;
            if(i == sizeof(NumTab)) i = 0;
        }
        tm1637.display(0,ListDisp[0]);
        tm1637.display(1,ListDisp[1]);
        tm1637.display(2,ListDisp[2]);
        tm1637.display(3,ListDisp[3]);
        delay(300);
    }
}
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Grove-4-Digit Display V1.0 Esquemático](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip)
- **[Librería]** [Librería 4-Digit Display](https://github.com/Seeed-Studio/Grove_4Digital_Display)
- **[Librería]** [Librería TimerOne](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)
- **[Librería]** [Librería Suli Four-Digit Display](https://github.com/Seeed-Studio/Four_Digit_Display_Suli)
- **[Librería]** [Código CodeCraft](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/4-Digit%20Display.zip)
- **[Hoja de datos]** [Hoja de datos TM1637](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/res/TM1637_datasheet.pdf)
- **[Lectura adicional]** [La Pistola Láser de Madera](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg" alt="pir" width={600} height="auto" /></p>

Inspirados por OVERWATCH, hemos creado un juguete de Pistola Láser de Madera muy genial para divertirnos estos días!

La Pistola Láser de Madera y el Objetivo de la Pistola están basados en una placa Arduino llamada Seeeduino Lotus. El emisor láser en la Pistola Láser está controlado para disparar pulsos láser para "activar" el Objetivo de la Pistola. Y hay 3 sensores de luz en el Objetivo de la Pistola para detectar el pulso láser. Parece muy simple, ¿verdad? Si estás interesado en nuestro proyecto, ¡por favor haz uno para ti o tu hijo! Vale la pena pasar un día haciéndolo como regalo de Navidad.

## Proyectos

**Reloj Despertador MSP430 con Módulos Grove**: Crea tu propio reloj despertador usando el MSP430F5529 LaunchPad y los Módulos Grove de SeeedStudio.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carlosventura/alarm-clock-with-grove-modules-e4e9f1/embed' width='350'></iframe>

**Reloj - Display de 4 dígitos Grove Usando Photon**:　Tu primer reloj con 4 componentes, basado en Grove y TM1637

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/clock-grove-4-digit-display-using-photon-7c4369/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
