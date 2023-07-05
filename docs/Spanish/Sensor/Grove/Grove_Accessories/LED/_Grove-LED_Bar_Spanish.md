---
description: El Grove - Barra LED es un compuesto de 10 segmentos LED en forma de barra medidora y un chip de control MY92221.
title: Led bar
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-LED_Bar_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-LED_Bar/master/img/Grove-LED_Bar-1.jpg)

El Grove - Barra LED es un compuesto de 10 segmentos LED en forma de barra medidora y un chip de control MY92221. Este módulo podría ser usado como indicador mostrando el nivel de una batería, voltaje, nivel del agua, volumen de música, entre muchas otras aplicaciones que requieran una pantalla gradiente. Hay 10 barras LED en módulo Grove: Uno rojo, uno amarillo, uno ligeramente verde, y siete completamente verdes. El código LED esta disponible para ayudarte a usarlo rápidamente. Este enciende los LEDs de manera secuencial del rojo al verde, por lo tanto la barra completa queda encendida al final. ¿Quieres llegar más lejos? ¡Ve y crea tus propios efectos!

<p style={{}}><a href="https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Versión

| Versión del Producto  | Cambios                             | Fecha de lanzamiento |
| --------------------- | ----------------------------------- | -------------------- |
| Grove – Barra LED V.1 | Inicial                             | Junio 2014           |
| Grove – Barra LED V.2 | Mejora en la fuente de alimentación | Octubre 2015         |

## Características

- Voltaje de entrada: 3.3V/5V
- Cada segmento LED puede ser controlado individualmente usando código
- Pantalla Intuitiva
- Opciones de Alimentación Flexibles, suporta 3 - 5.5 VDC
- Código de Demostración Disponible
- Suli-compatible Library

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

| Parámetros                                                          | Valor/Rango  |
| ------------------------------------------------------------------- | ------------ |
| Voltaje de Operación                                                | 3.3/5V       |
| Temperatura de Operación                                            | -20℃ to +80℃ |
| Longitud de onda de emisión pico - Rojo(Corriente 20mA)             | 630-637nm    |
| Longitud de onda de emisión pico - Verde(Coriente 20mA )            | 570-573nm    |
| Longitud de onda de emisión pico - Amarrillo(Corriente 20mA )       | 585-592nm    |
| Intensidad de Luminosidad por Segmento - Rojo (Corriente 20mA )     | 50-70mcd     |
| Intensidad de Luminosidad por Segmento - Verde(Current 20mA )       | 28-35mcd     |
| Intensidad de Luminosidad por Segmento - Amarrillo (Corriente 20mA) | 45-60mcd     |
| Segmentos LED                                                       | 10           |
| Tamaño                                                              | 40mm \* 20mm |

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2                                                                                                           | Base Shield                                                                                                           | Grove - Barra LED                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-LED_Bar/master/img/Grove-LED_Bar-3.jpg) |
| [Adquierelo Aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                 | [Adquierelo Aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                             | [Adquierelo Aquí](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)                                               |

- **Paso 2.** Conecta el Grove - Barra LED al puerto **D8** del Grove Shield Base.
- **Paso 3.** Conecta el Grove - Shield Base en tu Seeeduino.
- **Paso 4.** Conecta el Seeeduino al PC vía Cable USB.

![](https://github.com/SeeedDocument/Grove-LED_Bar/raw/master/img/seeeduino_ledbar.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino | Grove - Barra LED |
| --------- | ----------------- |
| 5V        | Rojo              |
| GND       | Negro             |
| D9        | Blanco            |
| D8        | Amarrilla         |

**Software**

- **Paso 1.** Descarga la librería [Grove - LED Bar Library](https://github.com/Seeed-Studio/Grove_LED_Bar) desde GitHub.

- **Paso 2.** Refiere a [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinica el Arduino IDE. Abre el ejemplo "Level" usando el path: **Archivo --> Ejemplos --> Grove LED Bar --> Level**.

![](https://github.com/SeeedDocument/Grove-LED_Bar/raw/master/img/code.png)

- **Paso 4.** Sube la demostración. Si no sabe como hacerlo, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

Deberás ver algo así:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-LED_Bar/master/img/LED_Bar_shining.gif)

### Jugando con Raspberry Pi

**Hardware**

- **Paso 1.** Prepara los siguientes materiales:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Barra LED                                                                                                |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![Adquierelo Aquí](https://raw.githubusercontent.com/SeeedDocument/Grove-LED_Bar/master/img/Grove-LED_Bar-3.jpg) |
| [Adquierelo Aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                              | [Adquierelo Aquí](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                | [Adquierelo Aquí](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)                                  |

- **Paso 2.** Inserta el GrovePi_Plus en el Raspberry.

- **Paso 3.** Conecta el Grove - Barra LED al puerto **D5** del GrovePi_Plus.
- **Paso 4.** Conecta el Rapsberry a tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove-LED_Bar/raw/master/img/rpi_ledbar.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualiza el firmware del GrovePi al más reciente.

¡Consejo!
En este wiki, usamos el path **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, debes estar seguro de que el Paso 2 y Paso 3 se encuentren en el mismo path.

¡Nota!
Te recomendamos actualizar el firmware, o algunos sensores podrían presentar errores.

- **Paso 3.** Clona el repositorio de GitHub.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Navega entre el directorio de demostraciones:

```
cd yourpath/GrovePi/Software/Python/
```

Here is the grove_ledbar.py code.

```python
import time
import grovepi
import random

# Conecta el Grov Barra LED al puerto digital D5
# DI,DCKI,VCC,GND
ledbar = 5

grovepi.pinMode(ledbar,"OUTPUT")
time.sleep(1)
i = 0

# Métodos Barra LED
# grovepi.ledBar_init(pin,orientation)
# grovepi.ledBar_orientation(pin,orientation)
# grovepi.ledBar_setLevel(pin,level)
# grovepi.ledBar_setLed(pin,led,state)
# grovepi.ledBar_toggleLed(pin,led)
# grovepi.ledBar_setBits(pin,state)
# grovepi.ledBar_getBits(pin)

    while True:
        try:
        print "Test 1) Initialise - red to green"
        # ledbar_init(pin,orientación)
        # orientación: (0 = red to green, 1 = green to red)
        grovepi.ledBar_init(ledbar, 0)
        time.sleep(.5)


        print "Test 2) Set level"
        # ledbar_setLevel(pin,level)
        # level: (0-10)
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        grovepi.ledBar_setLevel(ledbar, 8)
        time.sleep(.5)

        grovepi.ledBar_setLevel(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_setLevel(ledbar, 5)
        time.sleep(.5)


        print "Test 3) Switch on/off a single LED"
        # ledbar_setLed(pin,led,state)
        # led: numero de led (1-10)
        # estado: apagado o encendido (0,1)
        grovepi.ledBar_setLed(ledbar, 10, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 9, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 8, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 1, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 2, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 3, 0)
        time.sleep(.5)


        print "Test 4) Toggle a single LED"
        # Invierte el led - Si se encuentra encendido, lo apaga, y viceversa
        # ledbar_toggleLed(ledbar, led)
        grovepi.ledBar_toggleLed(ledbar, 1)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 9)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 10)
        time.sleep(.5)


        print "Test 5) Set state - control all leds with 10 bits"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) or (0x00-0x3FF) or (0b0000000000-0b1111111111) or (int('0000000000',2)-int('1111111111',2))
        for i in range(0,32):
            grovepi.ledBar_setBits(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)


        print "Test 6) Get current state"
        # estado = ledbar_getBits(ledbar)
        # Estado: (0-1023) un bit por cada uno de los 10 LEDS
        state = grovepi.ledBar_getBits(ledbar)
        print "with first 5 leds lit, the state should be 31 or 0x1F"
        print state

        # Bit a bit, movemos cienco bits a la izqueirda
        state = state << 5
        # El estado es ahora 992 o 0x3E0
        # Cuando se guarda, los últimos 5 led se encenderán en lugar de los primeros 5
        time.sleep(.5)


        print "Test 7) Set state - save the state we just modified"
        # ledbar_setBits(ledbar, state)
        # Estado: (0-1023) un bit por cada uno de los 10 LEDS
        grovepi.ledBar_setBits(ledbar, state)
        time.sleep(.5)


        print "Test 8) Swap orientation - green to red - current state is preserved"
        # ledbar_orientation(pin,orientación)
        # orientación: (0 = rojo a verde, 1 = verde a rojo)
        # Cuando inviertes la orientación de la barra LED, todos los métodos saben como manejar el nuevo orden.
        # Verde a Rojo
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)

        # Rojo a Verde
        grovepi.ledBar_orientation(ledbar, 0)
        time.sleep(.5)

        # Verde a Rojo
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)


        print "Test 9) Set level, again"
        # ledbar_setLevel(pin,level)
        # level: (0-10)
        # Nota que el LED Rojo está ahora en el index 10 en lugar del 1.
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)


        print "Test 10) Set a single LED, again"
        # ledbar_setLed(pin,led,state)
        # led: which led (1-10)
        # state: off or on (0,1)
        grovepi.ledBar_setLed(ledbar, 1, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 3, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 5, 0)
        time.sleep(.5)


        print "Test 11) Toggle a single LED, again"
        # ledbar_toggleLed(ledbar, led)
        grovepi.ledBar_toggleLed(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 4)
        time.sleep(.5)


        print "Test 12) Get state"
        # state = ledbar_getBits(ledbar)
        # Estado: (0-1023) un bit por cada uno de los 10 LEDS
        state = grovepi.ledBar_getBits(ledbar)

        # the last 5 LEDs are lit, so the state should be 992 or 0x3E0

        # bitwise shift five bits to the right
        state = state >> 5
        # the state should now be 31 or 0x1F


        print "Test 13) Set state, again"
        # ledbar_setBits(ledbar, state)
        # Estado: (0-1023) un bit por cada uno de los 10 LEDS
        grovepi.ledBar_setBits(ledbar, state)
        time.sleep(.5)


        print "Test 14) Step"
        # step through all 10 LEDs
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)


        print "Test 15) Bounce"
        # switch on the first two LEDs
        grovepi.ledBar_setLevel(ledbar, 2)

        # get the current state (which is 0x3)
        state = grovepi.ledBar_getBits(ledbar)

        # bounce to the right
        for i in range(0,9):
            # bit shift left and update
            state <<= 1;
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)

        # bounce to the left
        for i in range(0,9):
            # bit shift right and update
            state >>= 1;
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)


        print "Test 16) Random"
        for i in range(0,21):
            state = random.randint(0,1023)
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)


        print "Test 17) Invert"
        # set every 2nd LED on - 341 or 0x155
        state = 341
        for i in range(0,5):
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)

            # bitwise XOR all 10 LEDs on with the current state
            state = 0x3FF ^ state

            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)


        print "Test 18) Walk through all possible combinations"
        for i in range(0,1024):
            grovepi.ledBar_setBits(ledbar, i)
            time.sleep(.1)
        time.sleep(.4)

    except KeyboardInterrupt:
        grovepi.ledBar_setBits(ledbar, 0)
        break
    except IOError:
        print "Error"
```

- **Paso 5.** Ejecuta la Demostración.

```
sudo python grove_ledbar.py
```

## Recursos

- [**Eagle&PDF**][Grove - Barra LED Archivos Eagle](https://raw.githubusercontent.com/SeeedDocument/Grove-LED_Bar/master/res/Grove-LED_Bar_v1.0.zip)
- [**Libraría**][Librería Grove - Barra LED](https://github.com/Seeed-Studio/Grove_LED_Bar)
- [**Libraría**][Suli-Compatiblidad Librería](https://github.com/Seeed-Studio/LED_Bar_Suli)
- [**Datasheet**][MY9221 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-LED_Bar/master/res/MY9221_DS_1.0.pdf)
- [**Más Lecturas**][Laser-Gun de Madera](http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

## Proyectos

**Grove Barra LED v2.0**: Calliope Mini está equipado con dos conectaores Grove. En este proyecto descubriremos como comunicar estos módulos Grove.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/luuc/grove-led-bar-v2-0-c4b74f/embed' width='350'></iframe>

**Grove Barra LED y Control con Bean+**: Apredende las bases de usar populares componentes grove con el nuevo LightBlue Bean+ para comenzar a construir tus propios proyectos.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karel/grove-led-bar-controller-with-the-bean-c3b81e/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
