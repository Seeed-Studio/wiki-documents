---
description: Joystick de Pulgar es un módulo compatible con la linea Grove, el cual es muy similar al Joystick en el control del PS2 (PlayStation 2).
title: Thumb joystick
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Thumb_Joystick_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Bgjoy1.jpg)

Grove - Joystick de Pulgar es un módulo compatible con la linea Grove, el cual es muy similar al Joystick en el control del PS2 (PlayStation 2). El eje X y Y son dos potenciometros de ~10k que controlan el movimiento generando señales analógicas. El Joystick tiene también un botón de pulsl que puede ser usado para apliacaciones especiales. Cuando el módulo está en modo de operación, generará dos valores analógicos como salida, estás representarán las direcciones. Comparado con un Joystick normal, los valores de salida están restringidos a un pequeño rango (200 - 800). Solamente al ser presionado el valor de X se fijará a 1023 y el MCU puede detectar la acción.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versión

| Versión del Producto            | Cambios | Fecha de Lanzamiento |
| ------------------------------- | ------- | -------------------- |
| Grove - Joystick de Pulgar V1.1 | Inicial | Octubre 2016         |

## Especificaciones

| Articulo                                    | Min  | Nominal | Max  | Unidad |
| ------------------------------------------- | ---- | ------- | ---- | ------ |
| Voltaje de Operación                        | 4.75 | 5.0     | 5.25 | V      |
| Valores de Salida Analógica（Coordenada X） | 206  | 516     | 798  | \      |
| Valores de Salida Analógica（Coordenada Y） | 203  | 507     | 797  | \      |

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                                 | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

#### Demostración

El Grove - Joystick de Pulgar es un dispositivo analógico que genera una señal de salida analógica con un rango entre 0 y 1023. Esto requiere que usemos un puerto Analógico del nuestro Arduino para analizar las lecturas.

#### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Joystick de Pulgar                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Bgjoy1_small.jpg) |
| [Adquierelo Aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                   | [Adquierelo Aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                  | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)                                                    |

- **Paso 2.** Conecta el módulo al puerto **A0/A1** del Grove - Shield Base usando los cables Grove.
- **Paso 3.** Inserta el Grove - Shield Base al Seeeduino.
- **Paso 4.** Conecta el Seeeduino al PC usando un cable USB.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Grove-Thumb_Joystick.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino | Grove - Joystick de Pulgar |
| --------- | -------------------------- |
| 5V        | Rojo                       |
| GND       | Negro                      |
| A1        | Blanco                     |
| A0        | Amarillo                   |

#### Software

- **Paso 1.** Copia y pega el siguinte código en un nuevo Sketch de Arduino.

```c

/*
  Thumb Joystick demo v1.0
  by:http://www.seeedstudio.com
  Conecta el módulo a los puertos A0&A1*/

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("The X and Y coordinate is:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

- **Paso 2.** Puedes revisar los valores de la señal analógica abriendo el Monitor Serial.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Grove-Thumd_Joystick_Result.jpg)

El valor de salidad del puerto analógico del Arduino puede ser transformado al valor correspondiente de la resistencia usando la formula: R=(float)(1023-sensorValue)\*10/sensorValue.

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Joystick de Pulgar al puerto A0 del Shield Base.

**Paso 2.** Ensambla el Shield Base a tu Seeeduino/Arduino.

**Paso 3.** Enlaza el Seeeduino/Arduino a tu PC vía USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/cc_Thumb_Joystick.png)

Sube el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando el código termine de cargar, verás las coordenadas X y Y mostradas en la pantalla del Monitor Serial.

### Jugando con Raspberry Pi (con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Materiales usados en este proyecto:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Joystick de Pulgar                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Bgjoy1_small.jpg) |
| [Adquierelo Aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                              | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                     | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)                                                    |

- **Paso 2**. Ensambla el Grove Hat Base para Raspberry.
- **Paso 3**. Conecta el Joystick de Pulgar al puerto A0 del Hat Base.
- **Paso 4**. Conecta el Raspberry Pi a tu PC usando el cable USB.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Thumb_Hat.jpg)

¡Nota!
Para el Paso 3, puedes conectar eFor step 3 you are able to connect the the thumb joystick to **any Analog Port** but make sure you change the command with the corresponding port number.

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de Desarrollo.
- **Step 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta el siguiente comando para correr el código.

```
cd grove.py/grove
python grove_thumb_joystick.py 0

```

¡Nota!
Puedes ejecutar el programa con ++python grove_thumb_joystick.py pin++, donde el pin deberá ser alguno de los siguientes {0, 2, 4, 6} en el grupo de ADC y conectar el dispostivo al espacio correspondiente {A0, A2, A4, A6}.

El código grove_thumb_joystick.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveThumbJoystick:

    def __init__(self, channelX, channelY):
        self.channelX = channelX
        self.channelY = channelY
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channelX), self.adc.read(self.channelY)

Grove = GroveThumbJoystick


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveThumbJoystick(int(pin), int(pin + 1))

    while True:
        x, y = sensor.value
        if x > 900:
            print('Joystick Pressed')
        print("X, Y = {0} {1}".format(x, y))
        time.sleep(.2)

if __name__ == '__main__':
    main()


```

¡Éxito!
Si todo ha salido bien, verás el siguiente resultado:

```python

pi@raspberrypi:~/grove.py/grove $ python grove_thumb_joystick.py 0
Hat Name = 'Grove Base Hat RPi'
X, Y = 506 484
X, Y = 484 484
X, Y = 506 484
X, Y = 506 487
Joystick Pressed
X, Y = 999 485
X, Y = 310 736
X, Y = 681 484
Joystick Pressed
X, Y = 999 277
Joystick Pressed
X, Y = 999 487
X, Y = 506 484
X, Y = 501 486
X, Y = 509 484
X, Y = 511 486
X, Y = 510 485
^CTraceback (most recent call last):
  File "grove_thumb_joystick.py", line 69, in <module>
    main()
  File "grove_thumb_joystick.py", line 66, in main
    time.sleep(.2)
KeyboardInterrupt

```

Puedes salir de este programa presionando ctrl+c.

¡Atención!
Deberás notar que para los puertos analógicos, la serigrafía tiene algo como **A1, A0**, sin embargo, en los parámetros usamos
**0** y **1**, al igual que con los puertos digitales. Asegurate de conectar el módulo al puerto correcto, de otra manera podrás tener conflictos de pines.

### Jugando con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes materiales:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Joystick de Pulgar                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/Bgjoy1_small.jpg) |
| [Adquierelo Aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                       | [Adquierelo Aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                            | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)                                                    |

- **Paso 2.** Inserta el GrovePi_Plus en el Raspberry.
- **Paso 3.** Conecta el Grove - Joystick de Pulgar al puerto **A0** del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry al PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove-Thumb_Joystick/raw/master/img/Pi_Joystick%20connection.jpg)

#### Software

- **Paso 1.** Navega el directorio de demostraciones:

```
cd yourpath/GrovePi/Software/Python/

```

- **Paso 2.** Para ver el código:

```
nano grove_thumb_joystick.py   # "Ctrl+x" para salir #
```

```python
import time
import grovepi

# Conecta el Joystick al puerto A0

# GrovePi Puerto A0 usa los pines Arduino 0 y 1
# GrovePi Puerto A1 usa los pines Arduino 1 y 2
# No conectes nada al puerto A1 que utilice el pin 1.
# La mayoría de los sensores Grove solo utilizan 3 de sus 4 pines, es por ellos que GrovePi comparte adyacencia con los puertos de Arduino.
# Si el sensor tiene la descripción SIG,NC,VCC,GND, el segundo pin (blanco) no está conectado

# Si deseas conectar dos joysticks, usa los puertos A0 y A2 (Salta el A1)

# Usa dos pines - uno para el eje X y otro para el Y
# Esta configuración significa que estas usando A0
xPin = 0
yPin = 1
grovepi.pinMode(xPin,"INPUT")
grovepi.pinMode(yPin,"INPUT")

# El Grove Joystick es un dispositivo analógico con un rango de señal entre 0 y 1023.
# Los Ejes X y Y son dos portenciometros de 10k y un botón momentaneo que marca en X

# El Joystick usado en esta demostración tiene una variación considerable
# Aquí las diferencias:

# Esècificaciones
#     Min  Typ  Max  Click
#  X  206  516  798  1023
#  Y  203  507  797

# Joystick demo
#     Min  Typ  Max  Click
#  X  253  513  766  1020-1023
#  Y  250  505  769
while True:
    try:
        # obtener coordenadas X/Y
        x = grovepi.analogRead(xPin)
        y = grovepi.analogRead(yPin)

        # Calcular la resistencia x/y
        Rx = (float)(1023 - x) * 10 / x
        Ry = (float)(1023 - y) * 10 / y

        # Was a click detected on the X axis?
        click = 1 if x >= 1020 else 0

        print "x =", x, " y =", y, " Rx =", Rx, " Ry =", Ry, " click =", click
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Paso 3.** Corre la demostración.

```
sudo python grove_thumb_joystick.py
```

- **Paso 4.** Veremos un resultado en la pantalla de la terminal como el siguiente:

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/img/pi_result.png)|

## Recursos

- **[Eagle]** [Esquemático Grove-Thumb Joystick ](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/res/Eagle_Design_Files.zip)
- **[Datasheet]** [Analog Joystick Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/res/Analog_Joystick_Datasheet.jpg)
- **[PDF]** [Esquemático PDF Joystick](https://github.com/SeeedDocument/Grove-Thumb_Joystick/raw/master/res/Joystick.pdf)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove-Thumb_Joystick/master/res/Grove_Thumb_Joystick_CDC_File.zip)

## Proyectos

**Servidor de Música con Raspberry Pi**: Un primer paso para proyectos con Raspberry Pi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

**Construye un control personalizado para Minecraft**: Construye un control personalizado para Minecraft con GrovePi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dexterindustries/build-a-custom-minecraft-controller-d55d9c/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
