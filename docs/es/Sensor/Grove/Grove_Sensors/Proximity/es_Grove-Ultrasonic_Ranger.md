---
title: Grove - Sensor Ultrasónico de Distancia
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Ultrasonic_Ranger/
slug: /es/Grove-Ultrasonic_Ranger
last_update:
  date: 03/01/2023
  author: gunengyu
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/V2.jpg" alt="pir" width={600} height="auto" /></p>

Este Grove - Sensor ultrasónico de distancia es un módulo de medición de distancia sin contacto que funciona a 40KHz. Cuando proporcionamos una señal de pulso disparador con más de 10uS a través del pin de señal, el Grove_Ultrasonic_Ranger emitirá 8 ciclos de nivel de ciclo de 40kHz y detectará el eco. El ancho de pulso de la señal de eco es proporcional a la distancia medida. Aquí está la fórmula: Distancia = tiempo alto de la señal de eco * Velocidad del sonido (340M/S)/2. Las señales trig y echo del Grove_Ultrasonic_Ranger comparten 1 pin SIG.

:::warning
 No conecte en caliente el Grove-Ultrasonic-Ranger, de lo contrario dañará el sensor. El área medida debe ser no menor a 0.5 metros cuadrados y lisa.
:::
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## Versión

| Versión del Producto              | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Sensor ultrasónico de distancia V1.0 | Inicial                                                                                                                                                                                    | Mar 2012      |
| Grove-Sensor ultrasónico de distancia V2.0 | Mejora la estabilidad de energía con placa principal de bajo voltaje con los siguientes cambios: 1. Agregó una capacitancia C14 2. Rediseñó el diseño para hacerlo más ordenado 3. Compatible con sistema de voltaje de 3.3V | Julio 2017     |

## Especificación

|Parámetro| Valor/Rango|
|:------|:------------------|
|Voltaje de operación| 3.2~5.2V|
|Corriente de operación| 8mA|
|Frecuencia ultrasónica| 40kHz|
|Rango de medición| 2-350cm|
|Resolución| 1cm|
|Salida|PWM|
|Tamaño|50mm X 25mm X 16mm|
|Peso|13g|
|Ángulo de medición|15 grados|
|Temperatura de trabajo|-10~60 grados C|
|Señal de disparo|10uS TTL|
|Señal de eco|TTL|

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

|Arduino|Raspberry|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::note
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Paso 2.** Conecta el Sensor Ultrasónico al puerto D7 del Grove-Base Shield.

- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/arduino%20connection.jpg)

:::note
 Si no tenemos el Grove Base Shield, también podemos conectar directamente el Grove_Ultrasonic_Ranger al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| Sin Conexión | Blanco                   |
| D7            | Amarillo                  |

#### Software

- **Paso 1.** Descarga la  [Librería UltrasonicRanger](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)  desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Copia el código en el IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
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

 Serial.println("The distance to obstacles in front is: ");
 RangeInInches = ultrasonic.MeasureInInches();
 Serial.print(RangeInInches);//0~157 inches
 Serial.println(" inch");
 delay(250);

 RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // two measurements should keep an interval
 Serial.print(RangeInCentimeters);//0~400cm
 Serial.println(" cm");
 delay(250);
}
```

- **Paso 4.** Veremos la visualización de la distancia en la terminal como se muestra a continuación.

```sh
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
The distance to obstacles in front is:
2 inches
6 cm
```

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Ultrasonic Ranger al puerto D7 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/cc_Ultrasonic_Ranger.png)

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, verás la distancia mostrada en el Monitor Serie.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor Ultrasónico de Distancia |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.

- **Paso 3**. Conecta el Grove - Ultrasonic Ranger al puerto D5 del Base Hat.

- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

:::note
    Para el paso 3 puedes conectar el sensor ultrasónico a **cualquier Puerto GPIO** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.

- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```sh
cd grove.py/grove
python3 grove_ultrasonic_ranger.py 5 6
```

A continuación se muestra el código de grove_ultrasonic_ranger.py.

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

:::success
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ultrasonic_ranger.py 5 6
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

Puedes salir de este programa simplemente presionando ++ctrl+c++.

### Jugar con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Sensor Ultrasónico |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.

- **Paso 3.** Conecta el Grove-Ultrasonic ranger al puerto **D4** del GrovePi_Plus.

- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/pi%20connection.jpg)

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Clona el repositorio de Github con Git.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos para usar el ultrasonic_ranger para medir la distancia.

```
cd ~/GrovePi/Software/Python
python3 grove_ultrasonic.py
```

Aquí está el código de grove_ultrasonic.py.

```python
# GrovePi + Grove Ultrasonic Ranger

from grovepi import *

# Connect the Grove Ultrasonic Ranger to digital port D4
# SIG,NC,VCC,GND

ultrasonic_ranger = 4

while True:
    try:
        # Read distance value from Ultrasonic
        print ultrasonicRead(ultrasonic_ranger)

    except TypeError:
        print "Error"
    except IOError:
        print "Error"
```

- **Paso 4.** Veremos la visualización de la distancia en la terminal como se muestra a continuación.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_ultrasonic.py
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

### Jugar con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Wio Terminal | Grove - Sensor Ultrasónico de Distancia |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **Paso 2.** Conecta Grove - Ultrasonic Ranger al puerto **D0** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/with-WT.jpg)

#### Software

- **Paso 1.** Sigue [**ArduPy Getting Started**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en el Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy contenga la biblioteca ArduPy del sensor ultrasónico usando los siguientes comandos. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-ultrasonic.py`:

```python
from arduino import grove_ultra_ranger
from machine import LCD
from machine import Sprite
import time

Ultrasonic = grove_ultra_ranger(0)
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.RED)
        spr.drawString("Ultrasonic Sensor", 55, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Centimeters: ", 20, 50)
        spr.drawString("- Inches: ", 20, 80)
        spr.drawNumber(Ultrasonic.cm, 200,50)
        time.sleep_ms(50) # Needed for data to be read again
        spr.drawNumber(Ultrasonic.inch, 130,80)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("The distance to obstacles in front is:", Ultrasonic.cm, 'centimeter')
        print("The distance to obstacles in front is:", Ultrasonic.inch, 'inches')

if __name__ == "__main__":
    main()
```

- **Paso 4.** Guarda el `ArduPy-ultrasonic.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-ultrasonic.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
```

- **Paso 5.** Veremos la visualización de la distancia en la terminal como se muestra a continuación, y se mostrará en la pantalla de Wio Terminal LCD.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
The distance to obstacles in front is: 3 centimeter
The distance to obstacles in front is: 1 inches
The distance to obstacles in front is: 7 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 6 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 6 centimeter
The distance to obstacles in front is: 2 inches
The distance to obstacles in front is: 4 centimeter
The distance to obstacles in front is: 1 inches
The distance to obstacles in front is: 7 centimeter
The distance to obstacles in front is: 2 inches
```

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/WT-ur.jpg)

## Preguntas Frecuentes

**P1: ¿Cómo funciona el sensor ultrasónico Grove?**

- R1: Cuando proporcionamos una señal de pulso disparador con más de 10uS a través del pin de señal, el Grove_Ultrasonic_Ranger emitirá 8 ciclos de nivel de ciclo de 40kHz y detectará el eco. El ancho de pulso de la señal de eco es proporcional a la distancia medida. Aquí está la fórmula: Distancia = tiempo alto de la señal de eco * Velocidad del sonido (340M/S)/2.

**P2: ¿Por qué el sensor ultrasónico Grove solo tiene 1 pin de señal, comparado con otros sensores ultrasónicos que tienen pines Trig y Echo?**

- R2: Las señales trig y echo del Grove_Ultrasonic_Ranger comparten 1 pin SIG a través del MCU.

**P3: ¿Podemos conectar múltiples ultrasónicos a un arduino?**

- R4: Sí, aquí está el ejemplo, un sensor está conectado a D2 y el otro a D3.

```cpp
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

## Recursos

- **[PDF]** [Descargar PDF de Wiki](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Esquemático de Grove_Ultrasonic Ranger](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[PDF]** [Sensor Ultrasónico Cerámico NU40C16T/R-1](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/NU40C16T-R-1.pdf)
- **[Librería]** [Librería Grove_Ultrasonic Ranger](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic_Ranger_CDC_File.zip)
- **[Proyecto]** [The Color Helix](https://community.seeedstudio.com/project_detail.html?id=138)
- **[Proyecto]** [Indoor Lightning Cloud](https://community.seeedstudio.com/project_detail.html?id=182)
- **[Proyecto]** [Controlador Automático de Nivel de Agua](https://community.seeedstudio.com/project_detail.html?id=241)
- **[Ejemplo]** [Ejemplo_Medir_distancia_y_mostrar_led](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_distance_and_led_display.zip)
- **[Ejemplo]** [Ejemplo_Medir_y_mostrar_la_distancia](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_and_display_the_distance.zip)

## Proyecto

**Hackeando las Escaleras en la Nueva Oficina de Seeed**: Convierte las escaleras de la oficina en una instalación interactiva, e incluso una forma genial de transmitir el mensaje "SOLO PERSONAL" a los visitantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

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
