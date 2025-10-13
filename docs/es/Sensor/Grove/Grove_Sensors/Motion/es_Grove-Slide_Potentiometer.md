---
description: Grove - Potenciómetro Deslizante
title: Grove - Potenciómetro Deslizante
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Slide_Potentiometer
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG" alt="pir" width={600} height="auto" /></p>

El módulo Grove - Potenciómetro Deslizante incorpora una resistencia variable lineal con una resistencia máxima de 10KΩ. Cuando mueves el deslizador de un lado al otro, su voltaje de salida variará desde 0 V hasta el Vcc que apliques. Se conecta a otros módulos Grove a través de un **Cable Grove** estándar de 4 pines. Tres de los pines están conectados a OUT (Pin 1), Vcc (Pin 3) y GND (Pin 4), mientras que el cuarto pin (Pin 2) está conectado a un LED indicador verde integrado. El LED se utiliza para representar visualmente el cambio de resistencia en el potenciómetro.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)
Características
--------

- Longitud de deslizamiento de 30 mm
- Conicidad de resistencia lineal
- Compatible con Grove

:::tip
    Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Ideas de Aplicación
-----------------

Aquí tienes algunos proyectos para tu referencia.

| **Arduino BoomBox**                                                  | **Arduino BeatBox**                                                    |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BoomBox.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BeatBox.jpg" alt="pir" width={600} height="auto" /></p>  |
| [¡Hazlo AHORA!](https://community.seeedstudio.com/project_detail.html?id=171)       | [¡Hazlo AHORA!](https://community.seeedstudio.com/project_detail.html?id=187)         |

Especificaciones
--------------

<table border="2" cellspacing="0" width="60%">
<tr>
<th scope="col">
Elemento
</th>
<th>
Mín
</th>
<th>
Típico
</th>
<th>
Máx
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje (DC)
</th>
<td>
3.3V
</td>
<td>
5.0V
</td>
<td>
30V
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente
</th>
<td>
-
</td>
<td>
-
</td>
<td>
30mA
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensión
</th>
<td colspan="3">
24mm x60mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Peso Neto
</th>
<td colspan="3">
8.6g
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Vida rotacional
</th>
<td colspan="3">
&gt;15,000 ciclos
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Resistencia total
</th>
<td colspan="3">
10KΩ
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Longitud de carrera
</th>
<td colspan="3">
30mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
Tolerancia de resistencia total
</th>
<td colspan="3">
+/- 20%
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Primeros Pasos
--------------

#### Como un Resistor Ajustable

Como se muestra a continuación, el Grove - Potenciómetro Deslizante puede ser usado como un simple potenciómetro deslizante en cualquier proyecto controlado por MCU o independiente.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG" alt="pir" width={600} height="auto" /></p>

### Independiente

Sigue estos pasos para construir un circuito Grove de muestra usando este módulo pero sin usar ninguna placa microcontroladora:

1. Conecta el módulo potenciómetro deslizante al lado de entrada de tu circuito (a la izquierda del módulo de alimentación). En el lado de salida del circuito, puedes usar una gama de módulos de Interfaz de Usuario (Grove - LED Rojo, Grove - Cadena de Luces LED, Grove - Mini Ventilador, Grove - Zumbador, Grove - Grabadora etc.)
2. Alimenta el circuito cuando esté completo.
3. El módulo potenciómetro deslizante ahora puede ser usado para activar una salida. Por ejemplo:

    - Cuando se usa en conjunto con un módulo de salida Grove - LED Rojo, observa que el brillo del LED aumenta a medida que mueves el deslizador de GND a Vcc. En Vcc, la resistencia del potenciómetro es mínima y el LED brilla más intensamente. El mismo comportamiento puede verse cuando el potenciómetro deslizante se usa con el módulo Grove - Cadena de Luces LED - mientras más voltaje apliques llevando el deslizador hacia la marca Vcc, más brillantes se volverán las luces LED.
    - De manera similar, puedes usar el potenciómetro deslizante para variar la velocidad de tu Grove - Mini Ventilador o la frecuencia con la que suena tu módulo Grove - Zumbador
    - El potenciómetro deslizante también puede ser usado como un interruptor ON/OFF para cualquier circuito. Lleva el deslizador a la posición Vcc para encenderlo y muévelo hacia abajo a GND para apagar un circuito.

En términos de elegir un módulo de alimentación, puedes usar ya sea el módulo Grove - Alimentación USB o el módulo Grove - Alimentación Jack DC para construir circuitos Grove independientes.

<!-- 链接有问题### With [Arduino](/Arduino "Arduino") -->

#### Como un Divisor de Voltaje

Sigue estos simples pasos para hacer que el módulo potenciómetro deslizante funcione como un divisor de voltaje:

<!-- 链接有问题1.When using the module in conjunction with an [Arduino](/Arduino "Arduino") or a [Seeeduino](/Seeeduino_v4.2 "Seeeduino"), use the Grove - Base Shield and connect the Grove - Slide Potentiometer module to the shield using a designated Grove Interface (e.g. Analog Port 0 as shown below). -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG" alt="pir" width={600} height="auto" /></p>

2.Conecta la placa a la PC usando cable USB.

3.Sube el siguiente sketch de muestra.

```
int adcPin = A0; // select the input pin for the potentiometer
int ledPin = A1; // select the pin for the LED
int adcIn = 0;   // variable to store the value coming from the sensor
void setup()
{
    Serial.begin(9600); // init serial to 9600b/s
    pinMode(ledPin, OUTPUT); // set ledPin to OUTPUT
    Serial.println("Sliding Potentiometer Test Code!!");
}
void loop()
{
    // read the value from the sensor:
    adcIn = analogRead(adcPin);
    if(adcIn >= 500) digitalWrite(ledPin,HIGH);  // if adc in > 500, led light
    else digitalWrite(ledPin, LOW);
    Serial.println(adcIn);
    delay(100);
}
```

4.Abre el monitor serie. Deberías ver algunos datos del ADC.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg" alt="pir" width={600} height="auto" /></p>

5.Mueve la palanca hacia adelante y hacia atrás. Los datos serie cambiarán correspondientemente. Cuando la resistencia de salida exceda un cierto valor preestablecido, el LED indicador a bordo también se encenderá.

#### Como Dispositivo HID

El Potenciómetro Deslizante puede ser un Dispositivo de Interfaz Humana (HID) efectivo y puede usarse, por ejemplo, en el controlador de radio de un coche de juguete controlado por radio. La imagen de abajo muestra dos Potenciómetros Deslizantes en el panel de control - uno para controlar la velocidad de la rueda izquierda, y el otro para controlar la velocidad de la rueda derecha del coche de juguete respectivamente. Ahora puedes cambiar las velocidades de ambos motores y ver el comportamiento. Verás que si haces que la rueda derecha gire más rápido que la rueda izquierda, el coche girará hacia la derecha, y si haces que la rueda izquierda gire más rápido que la rueda derecha, el coche girará hacia la izquierda.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG" alt="pir" width={600} height="auto" /></p>

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Potenciómetro Deslizante al puerto A0 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, desliza el Potenciómetro Deslizante, verás el valor del sensor mostrado en el Monitor Serie. Y si deslizas más allá de la mitad del Potenciómetro, el LED en él se encenderá.
:::

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos usados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Potenciómetro Deslizante |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_small.JPG" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Potenciómetro Deslizante al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Para el paso 3 puedes conectar el potenciómetro deslizante a **cualquier Puerto Analógico** pero asegúrate de cambiar el comando con el número de puerto correspondiente.
:::

#### Software

:::note
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
python3 grove_slide_potentiometer.py 0
```

A continuación se muestra el código de grove_slide_potentiometer.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveSlidePotentiometer(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()
    
    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveSlidePotentiometer


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveSlidePotentiometer(int(sys.argv[1]))

    while True:
        print('Slide potentiometer value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

:::success
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_slide_potentiometer.py 0
Slide potentiometer value: 987
Slide potentiometer value: 988
Slide potentiometer value: 986
Slide potentiometer value: 8
Slide potentiometer value: 2
Slide potentiometer value: 0
Slide potentiometer value: 1
Slide potentiometer value: 0
Slide potentiometer value: 24
Slide potentiometer value: 0
Slide potentiometer value: 0
Slide potentiometer value: 11
Slide potentiometer value: 995
Slide potentiometer value: 999
Slide potentiometer value: 999
^CTraceback (most recent call last):
  File "grove_slide_potentiometer.py", line 66, in <module>
    main()
  File "grove_slide_potentiometer.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

:::note
        Puede que hayas notado que para el puerto analógico, el número de pin en la serigrafía es algo como **A0, A1**, sin embargo en el comando usamos el parámetro **0** y **1**, igual que el puerto digital. Así que por favor asegúrate de conectar el módulo en el puerto correcto, de lo contrario puede haber conflictos de pines.
:::

### Jugar Con Raspberry Pi (con GrovePi_Plus)

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

1.Deberías tener una raspberry pi y un grovepi o grovepi+.

<!-- 链接有问题2.You should have completed configuring the development enviroment, otherwise follow [here](/es/GrovePi_Plus). -->

3.Conexión

- Conecta el sensor al socket A0 del grovepi usando un cable grove.

4.Navega al directorio de las demos:

```
    cd yourpath/GrovePi/Software/Python/
```

- Para ver el código

```
    nano grove_slide_potentiometer.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Connect the Grove Slide Potentiometer to analog port A0
# OUT,LED,VCC,GND
slide = 0   # pin 1 (yellow wire)

# The device has an onboard LED accessible as pin 2 on port A0
# OUT,LED,VCC,GND
led = 1     # pin 2 (white wire)

grovepi.pinMode(slide,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        # Read sensor value from potentiometer
        sensor_value = grovepi.analogRead(slide)

        # Illuminate onboard LED
        if sensor_value > 500:
            grovepi.digitalWrite(led,1)
        else:
            grovepi.digitalWrite(led,0)

        print "sensor_value =", sensor_value

    except IOError:
        print "Error"
```

5.Ejecuta la demostración.

```
sudo python3 grove_slide_potentiometer.py
```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle del Potenciómetro Deslizante](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar)
- [Potenciómetro Deslizante en PDF](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_protentiometer_sch.pdf)
- [Hoja de datos del Potenciómetro Deslizante](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_potentiometer_datasheet.pdf)
- [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Grove_Slide_Potentiometer_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Slide_Potentiometer -->

## Proyectos

**Servidor de música con Raspberry pi**: Un primer paso hacia un proyecto con Raspberry Pi

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

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
