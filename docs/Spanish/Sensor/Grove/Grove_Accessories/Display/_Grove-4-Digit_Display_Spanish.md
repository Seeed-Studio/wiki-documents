---
description: El Display de 4 Segmentos - Grove es un módulo de 12 pines.
title: Display de 4 Segmentos
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-4-Digit_Display_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

[![](https://raw.githubusercontent.com/SeeedDocument/Grove-4-Digit_Display/master/img/Grove-4_digit_display.jpg)](http://www.seeedstudio.com/depot/grove-4digital-display-p-1198.html)

El Display de 4 Segmentos - Grove es un módulo de 12 pines. En este, utilizamos un TM1637 para reducir el número de pines de control a 2. Es decir, puedes controlar tanto el contenido como la luminancia con sólo 2 pines digitales de Arduino o Seeeduino. Es una buena opción para proyectos que requieren visualización alfanumérica.

<p style={{}}><a href="https://www.seeedstudio.com/grove-4digital-display-p-1198.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Versión

| Versión de producto             | Cambios | Fecha de lanzamiento |
| ------------------------------- | ------- | -------------------- |
| Display de 4 Dígitos-Grove V1.0 | Inicial | Mayo 2012            |

## Características

- Display alfanumérico rojo de 4 dígitos
- Compatible con la interfaz Grove (3.3V/5V)
- 8 niveles de luminancia ajustables

¡Consejo!
Para más información sobre módulos Grove, visita [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

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
Norminal
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
Peso neto
</th>
<td colspan="3">
7±1
</td>
<td>
g
</td>
</tr>
</table>

## Aplicaciones típicas

- Visualización de tiempo
- Cronómetro
- Pantalla de entrada de sensor

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

Nota:
Si es tu primera vez utilizando Arduino, te recomendamos visitar [Comenzando con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de empezar.

### Juega con Arduino

**Hardware**

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                           | Base Shield                                                                                                           | Display de 4 Dígitos - Grove                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/500px-Grove_-_4_digit_display_s.jpg) |
| [Obtenlo ahora](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                   | [Obtenlo ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                               | [Obtenlo ahora](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)                                                              |

- **Paso 2.** Conecta el Display de 4 Dígitos - Grove al puerto **D2** de la Base Shield - Grove.
- **Paso 3.** Conecta la Base Shield - Grove al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/seeeduino_digital_led.jpg)

Nota:
Si no tienes la Base Shield - Grove, también puedes conectar el Display de 4 Dígitos - Grove al Seeeduino directamente como se muestra a continuación. También se puede conectar el Display de 4 Dígitos a cualquier otro puerto digital.

| Seeeduino | Display de 4 Dígitos - Grove |
| --------- | ---------------------------- |
| 5V        | Rojo                         |
| GND       | Negro                        |
| D3        | Blanco (DIO)                 |
| D2        | Amarillo (CLK)               |

¡Aviso!
El Display de 4 Dígitos - Grove tiene 4 pines, GND, VCC, DIO, CLK. Se pueden conectar DIO y CLK a cualquier pin digital. No es protocolo I2C.

**Software**

- **Paso 1.** Descarga [Grove-4-Digit Display Librería](https://github.com/Seeed-Studio/Grove_4Digital_Display/archive/master.zip) y [TimerOne Librería](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=).
- **Paso 2.** Revisa [cómo instalar librerías](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar librerías de Arduino.
- **Paso 3.** Sigue las instrucciones a continuación para seleccionar un código en el IDE de Arduino y cárgalo. Si no sabes cómo cargar el código, revisa [cómo cargar código](http://wiki.seeedstudio.com/Upload_Code/). Ahí hay tres ejemplos como los de abajo.
  - Pantalla de reloj
  - Flujo numérico
  - Cronómetro

![](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/arduino_example.jpg)

- **Paso 4.** La pantalla del Display de 4 Dígitos - Grove se encenderá.

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el Display de 4 Dígitos - Grove al puerto D2 de la Base Shield - Grove.

**Paso 2.** Conecta la Base Shield al Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino y arrastra un procedimiento principal al área de trabajo.

Nota:
Si es tu primera vez usando Codecraft, ve también [Guía para Codecraft usando Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra los bloques como se muestra en la imagen o abre el archivo cdc que puedes descargar al final de esta página.

![](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/4-Digit_Display.png)

Carga el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando el código termine de cargar, podrás ver los números del 0 al 9 cambiando en el Display.

### Juega con Raspberry Pi (con Base Hat - Grove para Raspberry Pi)

#### Hardware

- **Paso 1**. Artículos usados en el proyecto:

| Raspberry pi                                                                                                   | Base Hat - Grove para RasPi                                                                                                    | Grove - Display de 4 Dígitos                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/500px-Grove_-_4_digit_display_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                       | [Obtenlo ahora](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)                                                              |

- **Paso 2**. Inserta la Base Hat - Grove a la Raspberry Pi.
- **Paso 3**. Conecta el Display de 4 Dígitos - Grove al puerto 12 de la Base Hat.
- **Paso 4**. Conecta la Raspberry Pi a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/Digit_Hat.jpg)

Nota:
Para el paso 3, puedes conectar el Display a **cualquier puerto GPIO** pero debes asegurarte de cambiar el comando con el número del puerto correspondiente.

#### Software

- **Paso 1**. Revisa [Configuración de Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para correr el código.

```
cd grove.py/grove
python grove_4_digit_display.py 12 13

```

A continuación está el código grove_4_digit_display.py

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

¡Éxito!
Si todo ha ido bien, el Display de 4 Dígitos mostrará la hora actual.

Puedes salir de este programa presionando ctrl+c.

### Jugando con Raspberry Pi (con GrovePi_Plus)

**Hardware**

- **Paso 1.** Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Display de 4 Dígitos - Grove                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/500px-Grove_-_4_digit_display_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                  | [Obtenlo ahora](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)                                                              |

- **Paso 2.** Inserta el GrovePi_Plus a la Raspberry.
- **Paso 3.** Conecta el Display de 4 Dígitos-Grove al puerto **D5** del GrovePi_Plus.
- **Paso 4.** Conecta la Raspberry a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/image/rpi_digital_led.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Step 2.** Clona el repositorio de GitHub.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para controlar el brillo.

```python
cd ~/GrovePi/Software/Python
python grove_4_digit_display.py
```

Aquí está el código grove_4_digit_display.py

```python
# NOTE: 4x display 7 segmentos rojo con color y 8 niveles de luminancia, sin punto decimal

import time
import grovepi

# Conecta el Display de 4 Dígitos Grove al puerto digital D5
# CLK,DIO,VCC,GND
display = 5
grovepi.pinMode(display,"OUTPUT")

# Si tiene un sensor analógico conéctelo a A0 para monitorearlo a continuación
sensor = 0
grovepi.pinMode(sensor,"INPUT")

time.sleep(.5)

# Display de 4 Dígitos métodos
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

        # establece el nivel más bajo de brillo
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

- **Paso 4.** Veremos el Display de 4 Dígitos de la siguiente manera.

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

### Juega con TI LaunchPad

Mostrando los números (Display-4-Dígitos)

Este ejemplo enseña cómo mostrar algunos números en el Display de 4 Dígitos - Grove.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-4-Digit_Display/master/img/4_digital_display.jpg)

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

## Recursos

- **[Eagle&PDF]** [Display 4-Digitos Grove V1.0 Esquemático](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip)
- **[Librería]** [Display 4-Digitos librería](https://raw.githubusercontent.com/SeeedDocument/Grove-4-Digit_Display/master/res/DigitalTube.zip)
- **[Librería]** [TimerOne librería](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)
- **[Librería]** [Four-Digit Display Suli Librería](https://github.com/Seeed-Studio/Four_Digit_Display_Suli)
- **[Librería]** [CodeCraft Código](https://github.com/SeeedDocument/Grove_4_Digit_Display/raw/master/resource/4-Digit%20Display.zip)
- **[Hoja de datos]** [TM1637 datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-4-Digit_Display/master/res/TM1637_datasheet.pdf)
- **[Más lectura]** [Pistola Láser de Madera](http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Lotus/master/img/gun.jpg)

¡Inspirados por OVERWATCH, hemos hecho una Pistola Láser de Madera de juguete para divertirse en estos días!

La Pistola Láser de Madera y el Objetivo del Arma están basados en una tarjeta Arduino llamada Seeeduino Lotus. El emisor de láser de la Pistola está controlado para lanzar un pulso láser que activa el Objetivo del Arma, en el cual hay 3 sensores de luz para detectar el pulso. Parece muy fácil, ¿verdad? si está interesado en este proyecto, ¡haga uno para usted o para su hijo! Vale la pena pasar un día DIY para regalarlo en Navidad.

## Proyectos

**MSP430 Reloj Despertador con Módulos Grove**: Crea tu propio reloj despertador usando el LaunchPad MSP430F5529 y los Módulos Grove SeeedStudio.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carlosventura/alarm-clock-with-grove-modules-e4e9f1/embed' width='350'></iframe>

**Reloj - Display de 4 Dígitos-Grove usando Photon**: Tu primer reloj de 4 componentes, basado en Grove y TM1637

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/clock-grove-4-digit-display-using-photon-7c4369/embed' width='350'></iframe>

## Soporte Técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
