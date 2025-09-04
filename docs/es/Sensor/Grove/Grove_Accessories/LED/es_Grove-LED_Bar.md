---
description: Grove - Barra LED
title: Grove - Barra LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-LED_Bar
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-1.jpg" alt="pir" width={600} height="auto" /></p>

Grove – Barra LED está compuesta por una barra de medición LED de 10 segmentos y un chip controlador de LED MY9221. Se puede usar como indicador para la vida útil restante de la batería, voltaje, nivel de agua, volumen de música u otros valores que requieren una visualización gradual. Hay 10 barras LED en el gráfico de barras LED: una roja, una amarilla, una verde claro y siete barras verdes. El código de demostración está disponible para que puedas empezar rápidamente. Enciende los LEDs secuencialmente de rojo a verde, por lo que toda la barra gráfica se ilumina al final. ¿Quieres ir más lejos? Adelante y programa tu propio efecto.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)
Versión
--------

| Versión del Producto              | Cambios                                   | Fecha de Lanzamiento |
|------------------------------|-------------------------------------------|---------------|
| Grove – Barra LED V1 | Inicial                                   | Junio 2014     |
| Grove – Barra LED V2 | Mejoró la fuente de alimentación                                   | Oct 2015     |

Características
--------------

- Voltaje de Entrada: 3.3V/5V
- Cada segmento LED puede ser controlado individualmente mediante código
- Pantalla intuitiva
- Opción de alimentación flexible, soporta 3-5.5DC
- Código de demostración disponible
- Biblioteca compatible con Suli

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificación

| Parámetro                                                   | Valor/Rango  |
|-------------------------------------------------------------|--------------|
| Voltaje de operación                                        | 3.3/5V       |
| Temperatura de Operación                                    | -20℃ a +80℃  |
| Longitud de Onda de Emisión Pico-ROJO(Corriente 20mA)      | 630-637nm    |
| Longitud de Onda de Emisión Pico-Verde Amarillo(Corriente 20mA) | 570-573nm    |
| Longitud de Onda de Emisión Pico-Amarillo(Corriente 20mA)   | 585-592nm    |
| Intensidad Luminosa Por Segmento-ROJO(Corriente 20mA)       | 50-70mcd     |
| Intensidad Luminosa Por Segmento-Verde Amarillo(Corriente 20mA) | 28-35mcd     |
| Intensidad Luminosa Por Segmento-Amarillo(Corriente 20mA)   | 45-60mcd     |
| Segmento LED                                                | 10           |
| Tamaño                                                      | 40mm * 20mm  |

Plataformas Compatibles
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Primeros Pasos
-------------

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove-LED Bar |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)|

- **Paso 2.** Conecta Grove-LED Bar al puerto **D8** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/seeeduino_ledbar.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/seeeduino_ledbar.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-LED Bar al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove-LED Bar |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| D9            | Blanco                   |
| D8            | Amarillo                  |

**Software**

- **Paso 1.** Descarga la [Librería Grove - LED Bar](https://github.com/Seeed-Studio/Grove_LED_Bar) desde Github

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo "Level" a través de la ruta: **File --> Examples --> Grove LED Bar --> Level**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_BAR_IDE.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_BAR_IDE.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

El resultado debería ser así:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_Bar_shining.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_Bar_shining.gif" alt="pir" width={600} height="auto" /></p>

### Jugar Con Raspberry Pi

**Hardware**

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove-LED Bar |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 3.** Conecta Grove-LED Bar al puerto **D5** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/rpi_ledbar.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/rpi_ledbar.jpg" alt="pir" width={600} height="auto" /></p>

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Sigue [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente del GrovePi.

:::tip
En esta wiki usamos la ruta **~/GrovePi/** en lugar de **/home/pi/Desktop/GrovePi**, necesitas asegurarte de que el Paso 2 y el Paso 3 usen la misma ruta.
:::

:::note
Te sugerimos firmemente que actualices el firmware, o para algunos sensores podrías obtener errores.
:::
:::note
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 3.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 4.** Navega al directorio de demostraciones:

```
cd yourpath/GrovePi/Software/Python/
```

Aquí está el código grove_ledbar.py.

```python
import time
import grovepi
import random

# Connect the Grove LED Bar to digital port D5
# DI,DCKI,VCC,GND
ledbar = 5

grovepi.pinMode(ledbar,"OUTPUT")
time.sleep(1)
i = 0

# LED Bar methods
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
        # ledbar_init(pin,orientation)
        # orientation: (0 = red to green, 1 = green to red)
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
        # led: which led (1-10)
        # state: off or on (0,1)
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
        # flip a single led - if it is currently on, it will become off and vice versa
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
        # state = ledbar_getBits(ledbar)
        # state: (0-1023) a bit for each of the 10 LEDs
        state = grovepi.ledBar_getBits(ledbar)
        print "with first 5 leds lit, the state should be 31 or 0x1F"
        print state

        # bitwise shift five bits to the left
        state = state << 5
        # the state should now be 992 or 0x3E0
        # when saved the last 5 LEDs will be lit instead of the first 5 LEDs
        time.sleep(.5)


        print "Test 7) Set state - save the state we just modified"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) a bit for each of the 10 LEDs
        grovepi.ledBar_setBits(ledbar, state)
        time.sleep(.5)


        print "Test 8) Swap orientation - green to red - current state is preserved"
        # ledbar_orientation(pin,orientation)
        # orientation: (0 = red to green, 1 = green to red)
        # when you reverse the led bar orientation, all methods know how to handle the new LED index
        # green to red
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)

        # red to green
        grovepi.ledBar_orientation(ledbar, 0)
        time.sleep(.5)

        # green to red
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)


        print "Test 9) Set level, again"
        # ledbar_setLevel(pin,level)
        # level: (0-10)
        # note the red LED is now at index 10 instead of 1
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
        # state: (0-1023) a bit for each of the 10 LEDs
        state = grovepi.ledBar_getBits(ledbar)

        # the last 5 LEDs are lit, so the state should be 992 or 0x3E0

        # bitwise shift five bits to the right
        state = state >> 5
        # the state should now be 31 or 0x1F


        print "Test 13) Set state, again"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) a bit for each of the 10 LEDs
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

- **Paso 5.** Ejecuta la demostración.

```
sudo python3 grove_ledbar.py
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [**Eagle&PDF**][Archivo Eagle de Grove - LED Bar](https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip)
- [**Librería**][Librería de Grove - LED Bar](https://github.com/Seeed-Studio/Grove_LED_Bar)
- [**Librería**][Librería Compatible con Suli](https://github.com/Seeed-Studio/LED_Bar_Suli)
- [**Hoja de Datos**][Hoja de Datos MY9221](https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/MY9221_DS_1.0.pdf)
- [**Más Lectura**][Pistola Láser de Madera](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

## Proyectos

**Grove LED Bar v2.0**: Calliope Mini está equipado con dos conectores Grove. En este proyecto, quiero explorar cómo comunicarse con estas partes Grove de Seeed.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/luuc/grove-led-bar-v2-0-c4b74f/embed' width='350'></iframe>

**Controlador de Grove LED Bar con el Bean+**: ¡Aprende los conceptos básicos de usar componentes Grove populares con el nuevo LightBlue Bean+ para comenzar a construir tus propios proyectos!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karel/grove-led-bar-controller-with-the-bean-c3b81e/embed' width='350'></iframe>

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
