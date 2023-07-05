---
description: EL Grove - Sensor de Luz integra una fotoresistencia (Resistencia dependiente a la luz) para detectar la intensidad de la luz.
title: Light Sensor
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Light_Sensor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/cover.jpg)

EL Grove - Sensor de Luz integra una fotoresistencia (Resistencia dependiente a la luz) para detectar la intensidad de la luz. En una fotoresistencia la resistencia decrese cuando la intensidad de la luz incrementa. Con un OpAmp (Amplificador Operarional) LM358 integrado en la tarjeta se produce el voltaje correspondiente de la intensidad de la luz (basado en el valor de la resistencia). La señal de salida es un valor analógico, entre más brillante es la luz, más alto es el valor.

Este módulo puede ser usado para construir un interruptor controlado por luz. Por ejemplo, apagando las luces durante el día y encendiendolas durante la noche.

¡Advertencia!
El valor del sensor de luz solamente refleja un aproximado de la intensidad de la luz, esto NO REPRESENTA el valor exacto de lumenes.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versión

| Versión del Producto           | Cambios                                                                    | Fecha de Lanzamiento |
| ------------------------------ | -------------------------------------------------------------------------- | -------------------- |
| Grove - Sensor de Luz 1.0      | Inicial                                                                    | Abril 28 2013        |
| Grove - Sensor de Luz (P)      | Cambio del conector Grove a la parte trasera                               | Mayo 15 2014         |
| Grove - Sensor de Luz (P) V1.1 | Remplazo del fotoresistor 5528 con el LS06-S Vs. Grove - Sensor de Luz 1.0 | Diciembre 31 2015    |
| Grove - Sensor de Luz V1.2     | Remplazo del fotoresistor 5528 con el LS06-S Vs. Grove - Sensor de Luz 1.0 | Enero 20 2016        |

## Especificaciones

- Salida de valor Analógico
- Alta Fidelidad y Sensibilidad
- Tamaño Compacto
- Reconoce un amplio espectro

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

### Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Especificaciones

| Articulo                | Valor              |
| ----------------------- | ------------------ |
| Voltaje Operativo       | 3~5V               |
| Corriente Operativa     | 0.5~3 mA           |
| Tiempo de Respuesta     | 20-30 milisegundos |
| Longitud Máxima de Onda | 540 nm             |
| Peso                    | 4 g                |

## Primeros Pasos

### Jugando con Arduino

#### Hardware

- Paso 1. Prepara los siguiente materiales:

| Seeeduino V4                                                                                                               | Shield Base                                                                                                                | Grove - Sensor de Luz                                                                                                  | Grove - Barra LED                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/img/light_sensor_s.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_3.jpg) |
| [Adquierelo Aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                   | [Adquierlo Aquí](http://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                    | [Adquierlo Aquí](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)                                      | [Adquierlo Aquí](http://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html)                                                |

- Paso 2. Conecta el Grove - Sensor de Luz al puerto A0 del Grove - Shield Base.
- Paso 3. Conecta el Grove - Barra LED al puerto D2 del Grove - Shield Base.
- Paso 4. Inserta el Grove - Shield Base al Seeeduino.
- Paso 5. Conecta el Seeeduino al PC por medio de un cable USB.

![](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/img/seeeduino_light.jpg)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove - Sensor de Luz |
| ------------ | --------------------- |
| 5V           | Rojo                  |
| GND          | Negro                 |
| No Conectado | Blanco                |
| A0           | Amarillo              |

| Seeeduino | Grove-Led Bar |
| --------- | ------------- |
| 5V        | Rojo          |
| GND       | Negro         |
| D3        | Blanco        |
| D2        | Amarillo      |

#### Software

- Paso 1. Descarga la librería [ Grove - LED Bar](https://github.com/Seeed-Studio/Grove_LED_Bar/archive/master.zip) desde GitHub.
- Paso 2. Refierete a [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería para el Seeeduino.
- Paso 3. Copia el código en tu IDE de Arduino y cargalo.

```c

#include <Grove_LED_Bar.h>

Grove_LED_Bar bar(3, 2, 0);  // Clock pin, Data pin, Orientation

void setup()
{
  // nothing to initialize
  bar.begin();
  bar.setGreenToRed(true);
}

void loop()
{

  int value = analogRead(A0);
  value = map(value, 0, 800, 0, 10);

  bar.setLevel(value);
  delay(100);
}
```

- Paso 4. La Barra LED cambiará con base en la luz.

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Sensor del Luz al puerto A0 del Shield Base.

**Paso 2.** Inserta el Shield Base en tu Seeeduino/Arduino.

**Paso 3.** Enlaza el Seeeduino usando un cable USB al PC.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/img/cc_Light_Sensor.png)

Sube el código a tu Arduino .

¡Éxito!
Cuando el código finalice de cargar, verás el nivel de iluminación mostrandose en el Monitor Serial.

### Jugando con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Material a utilizar para este proyecto:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Sensor de Luz                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/img/light_sensor_s.jpg) |
| [Adquierelo Aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                              | [Adquielo Aquí](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                       | [Adquielo Aquí](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)                                       |

- **Paso 2**. Ensambla el Grove Hat Base en el Raspberry.
- **Step 3**. Conecta el sensor de Luz al puerto A0 del Hat Base.
- **Step 4**. Conecta el Raspberry Pi a tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/img/Light_Hat.jpg)

¡Nota!
Para el paso 3, puedes conectar el sensor de luz a cualquier **Puerto Analógico**, asegurate de hacer los cambios correspondientes en el comando.

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el Archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta el siguiente comando para correr el código.

```
cd grove.py/grove
python grove_light_sensor_v1_2.py 0

```

A continuación encontrarás el código grove_light_sensor_v1_2.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveLightSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def light(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveLightSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLightSensor(int(sys.argv[1]))

    print('Detecting light...')
    while True:
        print('Light value: {0}'.format(sensor.light))
        time.sleep(1)

if __name__ == '__main__':
    main()

```

¡Éxito!
Si todo ha salido bien, serás capaz de ver un resultado similar al siguiente, considerando la luz de tu entorno.

```python

pi@raspberrypi:~/grove.py/grove $ python grove_light_sensor_v1_2.py 0
Detecting light...
Light value: 600
Light value: 448
Light value: 267
Light value: 311
Light value: 102
Light value: 82
Light value: 63
Light value: 54
Light value: 49
Light value: 45
Light value: 545
^CTraceback (most recent call last):
  File "grove_light_sensor_v1_2.py", line 67, in <module>
    main()
  File "grove_light_sensor_v1_2.py", line 64, in main
    time.sleep(1)
KeyboardInterrupt

```

Puedes salir del programa presionando ctrl+c.

¡Nota!
Debes notar que para el puerto Analógico, la serigrafóa marcada en el pin del circuito se ve algo similar **A1, A0**, sin embargo en al comando usamos los parámetros **0** y **1**, al igual que los puertos digitales. Asegurate de conectar el módulo al puerto correcto, de otra manera podrás tener conflictos de pines.

### Jugando con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- Paso 1. Prepara los siguientes materiales:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Sensor de Luz                                                                                                  | Grove - LED Rojo                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/img/light_sensor_s.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Red_LED/raw/master/img/Red%20LED_s.jpg) |
| [Adquierlo Aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                               | [Adquierlo Aquí](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                 | [Adquierlo Aquí](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)                                      | [Adquierlo Aquí](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)                                      |

- Paso 2. Ensambla del GrovePi_Plus en tu Raspberry.
- Paso 3. Conecta el Grove - Sensor de Luz al puerto A0 del GrovePi_Plus.
- Paso 4. Conecta el Grove - Led Rojo al puerto D4 del GrovePi_Plus.
- Paso 5. Conecta el Raspberry a tu PC a través del cable USB.

![](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/img/rasp_light.jpg)

#### Software

- Paso 1. Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- Paso 2. Git clone el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Paso 3. Ejecuta el siguiente comando.

```
cd ~/GrovePi/Software/Python
python grove_light_sensor.py
```

Aquí está el código grove_light_sensor.py.

```python
import time
import grovepi

# Conecta el Grove Sensor de Luz al puerto Analógio A0
# SIG,NC,VCC,GND
light_sensor = 0

# Conecta el LED al puerto digital D4
# SIG,NC,VCC,GND
led = 4

# Encenderá el LED una vez que el sensor exceda el limite de la resitencia definido
threshold = 10

grovepi.pinMode(light_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

while True:
    try:
        # Obtener el valor del sensor
        sensor_value = grovepi.analogRead(light_sensor)

        # Calcula la resistencia en K
        resistance = (float)(1023 - sensor_value) * 10 / sensor_value

        if resistance > threshold:
            # Manda HIGH al LED
            grovepi.digitalWrite(led,1)
        else:
            # Manda LOW al LED
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d resistance = %.2f" %(sensor_value,  resistance))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- Paso 4. EL LED se encenderá cuando el sensor de Luz sea cubierto.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_light_sensor.py
sensor_value = 754 resistance = 3.57
sensor_value = 754 resistance = 3.57
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 313 resistance = 22.68
sensor_value = 155 resistance = 56.00
sensor_value = 753 resistance = 3.59
```

## Recursos

- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/res/Grove_Light_Sensor_CDC_File.zip)
- **[Eagle&PDF]** [Archivo Eagle para Grove - Sensor de Luz V1.0](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/resources/Grove%20-%20Light%20Sensor.zip)
- **[Eagle&PDF]** [Archivo Eagle para Grove - Light Sensor(P) V1.0](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/resources/Grove%20-%20Light%20Sensor%28P%29.zip)
- **[Eagle&PDF]** [Archivo Eagle para Grove - Light Sensor(P) V1.1](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip)
- **[Datasheet]** [LS06-MΦ5 Información de Referencia](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/res/LS06-M%CE%A65_datasheet.pdf)
- **[Datasheet]** [LM358.PDF](https://github.com/SeeedDocument/Grove_Light_Sensor/raw/master/res/LM358.pdf)
- **[Más Lecturas]** Secret Box

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/secret_box.png)

Aquí te mostraremos un proyecto hecho con el Grove - Sensor de Luz. Secret Box: Primero, necesitamos una caja de papel, madera, o cualquier caja es buena. Pon algo dentro de la caja, como sabemos que es secreta, eso significa que naide debe abrirla, si esto sucede una alarma te avisará.
Aquí usamos el LinKit ONE como controlador, el cual es compatible con Arduino y su gran abasto de funciones. Necesitarás los siguientes materiales:

- [LinkIt ONE](http://www.seeedstudio.com/LinkIt-ONE-p-2017.html)
- Grove - Sensor de Luz
- Grove - Shield Base
- Tarjeta SIM

Vamos a conectar el Grove - Sensor del Luz al puerto A0 del Shield Base, abre el IDE de Arduino, copia el siguiente código y sube el ejemplo al LinKit ONE. Ahora, si alguien abre la caja, la luz será detectada y te enviará un SMS.

```c
// demo of Grove Starter kit for LinkIt ONE
// Secret box

#include <LGSM.h>

char num[20] = "13425171053";           //Escribe tu número aquí
char text[100] = "Warning: Your box had been opened!!";    // Lo que quieras enviar what


const int pinLight = A0;                // Sensor de Luz conectado a A0

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // when get data less than 50, means light sensor was in box
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // Espera a ponerse en la caja
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // Si la caja se abre
    {
        Serial.println("box had been opened");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIM ready for work!");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("SMS is sent");
        }
        else
        {
            Serial.println("SMS send fail");
        }

        while(!isLightInBox());             // hasta que se pone en la caja
        delay(2000);
    }

    delay(10);
}
```

Diviertete.

## Proyectos

**Grove - Introducción al Sensor de Luz**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed' width='350'></iframe>

**El Cubo del Ambiente! The Environment Cube! Conoce la Tierra debajo de ti usando Sigfox**: Un cubo con todos los sensores necesarios, con un gran rango de aplicaciones como agricultura, monitoreo, etc.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

**Módulo Sensor de Luz**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/GOROc2f5Xkg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
