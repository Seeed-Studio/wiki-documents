---
description: El Sensor Rotatorio produce una salida analógica entre 0 y VCC (5V DC con el Seeeduino) en el conector D1.
title: Sensor Rotatorio
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Rotary_Angle_Sensor_Spanish
last_update:
  date: 06/20/23
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/rotary.jpg)

El Sensor Rotatorio produce una salida analógica entre 0 y VCC (5V DC con el Seeeduino) en el conector D1. El conectar D2 no es usado. El rango agular es de 300 grados con un cambio en el valor lineal. El valor d la resistencia es de 10k ohms, perfecto para su uso con Arduino. Este módulo también es conocido como "Potenciómetro".

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

Tenemos otro producto, Grove - Sensor de Ángulo Rotatorio (P), ¿Qué significa P? "P" es el "montaje del panel" en este producto. Es la versión hermana del Grove - Sensor de Ángulo Rotatorio. Son identicos por la excepción de que el conector Grove ha sido movido a la parte de atrás para facilitar su uso como dispotivo libre de cables para interfaz humano-máquina.

<table>
  <tbody><tr>
      <td>
        <img src="https://raw.githubusercontent.com/SeeedDocument/Grove-Rotary_Angle_Sensor/master/img/Grove-Rotary_Angle_Sensor-P-.jpg" />
      </td>
      <td>
        <img src="https://raw.githubusercontent.com/SeeedDocument/Grove-Rotary_Angle_Sensor/master/img/GroveRotaryP_02.jpg" />
      </td>
    </tr>
  </tbody></table>

<p style={{}}><a href="http://www.seeedstudio.com/depot/grove-rotary-angle-sensorp-p-1242.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Versión

| Versión del Producto                        | Cambios | Fecha de Lanzamiento |
| ------------------------------------------- | ------- | -------------------- |
| Grove - Sensor de Ángulo Rotatorio (P) V1.1 | Inicial | Enero 2013           |
| Grove - Sensor de Ángulo Rotatorio V1.2     | Inicial | Mayo 2014            |

## Características

- Interfaz Grove
- Fácil de Usar
- Módulo Base Grove

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Articulo
</th>
<th scope="col">
Min
</th>
<th scope="col">
Nominal
</th>
<th scope="col">
Max
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
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Ángulo Rotatorio
</th>
<td>
0
</td>
<td>
~
</td>
<td>
300
</td>
<td>
Grados
</td>
</tr>
<tr align="center">
<th scope="row">
Tamaño
</th>
<td colspan="3">
19x19x30.1
</td>
<td>
mm
</td>
</tr>
</table>

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primero Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

**Hardware**

- **Paso 1.** Prepara los siguientes materiales:

| Seeeduino V4.2                                                                                                           | Shield Base                                                                                                           | Grove - Sensor de Ángulo Rotatorio                                                                                      | Grove - LED                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/rorary_s.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/grove_led.jpg) |
| [Adquierelo Aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                 | [Adquierelo Aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                             | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)                                     | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-LED-p-767.html)                                                      |

- **Paso 2.** Conecta el Grove - Sensor de Ángulo Rotatorio al puerto **A0** del Grove - Shield Base.
- **Paso 3.** Conceta el Grove - LED al puerto **D3** del Grove - Shield Base.
- **Paso 4.** Inserta el Grove - Shield Base en el Seeeduino.
- **Step 5.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/seeeduino_rotary.jpg)

!!!Note
If we don't have Grove Base Shield, We also can directly connect Grove-Rotary Angle Sensor and Grove-Led to Seeeduino as below. Grove-Led must be connected to PWM port. For Seeeduino, they are D3,5,6,9,10,11.

| Seeeduino | Grove - Sensor de Ángulo Rotatorio | Seeeduino | Grove-LED |
| --------- | ---------------------------------- | --------- | --------- |
| 5V        | Rojo                               | 5V        | Rojo      |
| GND       | Negro                              | GND       | Negro     |
| NC        | Blanco                             | NC        | Blanco    |
| A0        | Amarillo                           | D3        | Amarillo  |

**Software**

- **Paso 1.** Por favor, copia el siguiente código en el IDE de Arduino y subelo al Arduino. Si no sabes como hacerlo, revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c++
/*Macro definiciones del Sensor de Ángulo Rotatorio y pin LED*/

#define ROTARY_ANGLE_SENSOR A0
#define LED 3  //El módulo Grove - LED se conectar al puerto PWM D3 del Arduino.
#define ADC_REF 5 //Voltaje de referencia
                 //Tarjetas que trabajan a 3V3, la referencia debe ser 3.3
#define GROVE_VCC 5 //VCC de la interfaz Grove se encuentra normalmente a 5v
#define FULL_ANGLE 300 //El valor total del angulo es de 300 grados

void setup()
{
    Serial.begin(9600);
    pinMode(ROTARY_ANGLE_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
}

void loop()
{
    float voltage;
    int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
    voltage = (float)sensor_value*ADC_REF/1023;
    float degrees = (voltage*FULL_ANGLE)/GROVE_VCC;
    Serial.println("El angulo entre la marca y la posición inicial: ");
    Serial.println(degrees);

    int brightness;
    brightness = map(degrees, 0, FULL_ANGLE, 0, 255);
    analogWrite(LED,brightness);
    delay(500);
}

```

- **Paso 2.** Ajusta el Grove - Sensor de Ángulo Rotatorio y podrás ver el como el brillo del Grove - LED cambia.

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Sensor de Ángulo Rotatorio al puerto A0, y coencta el Grove - LED al puerto D3 del Grove - Shield Base.

**Paso 2.** Insera el Shield Base en el Seeeduino/Arduino.

**Paso 3.** Enlaza el Seeeduino/Arduino a tu PC vía USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.
![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Rotary_Angle_Sensor/master/img/cc_Rotary_Angle_Sensor.png)

Sube el programa a tu Arduino o Seeeduino.

¡Éxito!
Cuando el código finalice de subir, el brillo del LED variará dependiendo del ángulo del sensor, valor del ángulo se mostrará en el Monitor Serial.

### Jugando con Raspberry Pi (con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Materiales usados para este proyecto:

| Raspberry pi                                                                                                   | Grove Base Hat para RasPi                                                                                                      | Grove - Sensor de Ángulo Rotatorio                                                                                      |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/rorary_s.jpg) |
| [Adquierelo Aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                              | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                     | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)                                   |

- **Paso 2**. Inserta el Grove Base Hat en el Rapsberry.
- **Paso 3**. Conecta el sensor rotatorio al puerto A0 del Base Hat.
- **Paso 4**. Conecta el Raspberry a tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/Rotary_Hat.jpg)

¡Nota!
Para el paso 3, puedes coenctar el sensor rotatorio a **Cualquier Puerto Analógico** pero asegurate de hacer las modificaciones correspondientes al número del pin.

#### Software

- **Paso 1**. Sigue [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.

- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta los siguientes comandos para correr el código.

```
cd grove.py/grove
python grove_rotary_angle_sensor.py 0

```

A continuación verás el código grove_rotary_angle_sensor.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveRotaryAngleSensor(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveRotaryAngleSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveRotaryAngleSensor(int(sys.argv[1]))

    while True:
        print('Rotary Value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

¡Éxito!
Si todo ha salido bien, serás capaz de ver el siguiente resultado.

```python

pi@raspberrypi:~/grove.py/grove $ python grove_rotary_angle_sensor.py 0
Rotary Value: 932
Rotary Value: 931
Rotary Value: 931
Rotary Value: 931
Rotary Value: 933
Rotary Value: 931
Rotary Value: 742
Rotary Value: 666
Rotary Value: 666
Rotary Value: 549
Rotary Value: 520
Rotary Value: 499
Rotary Value: 430
Rotary Value: 430
Rotary Value: 321
Rotary Value: 286
Rotary Value: 205
Rotary Value: 127
Rotary Value: 88
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
^CTraceback (most recent call last):
  File "grove_rotary_angle_sensor.py", line 66, in <module>
    main()
  File "grove_rotary_angle_sensor.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt


```

Puedes salir de este programa presionando ctrl+c.

¡Atención!
Habrás notado que para el puerto analógico, la serigrafía dice algo como **A0, A1**. Sin embargo, en el comando usamos **0** y **1** como parametro, al igual que como con un puerto digital. Asegurate de conectar el módiulo en que puerto correcto, o podrías tener conflictos de puertos.

### Jugando con Raspberry Pi (con GrovePi_Plus)

**Hardware**

- **Paso 1.** Prepara los siguientes materiales:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove-Rotary Angle Sensor                                                                                               | Grove-LED                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/rorary_s.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/grove_led.jpg) |
| [Adquierelo Aquí](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                              | [Adquierelo Aquí](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)                                     | [Adquierelo Aquí](https://www.seeedstudio.com/Grove-LED-p-767.html)                                                      |

- **Paso 2.** Inserta el GrovePi_Plus en el Raspberry.
- **Paso 3.** Conecta el Grove - Sensor de Ángulo Rotatorio al puerto **A0** del GrovePi_Plus.
- **Paso 4.** Conecta el Grove - LED al puerto **D5** del GrovePi_Plus.
- **Paso 5.** Conecta el Raspberry a tu PC usando un cable USB.

![](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/img/rpi_rotary.jpg)

**Software**

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta el siguiente comando para monitoreal el sensor.

```python
cd ~/GrovePi/Software/Python
python grove_rotary_angle_sensor.py
```

A continuación verás el código grove_rotary_angle_sensor.py.

```python
import time
import grovepi

# Conecta el sensor al puerto A0
# SIG,NC,VCC,GND
potentiometer = 0

# Conecta el LED al puerto digital D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(potentiometer,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

# ADC de referencia 5v
adc_ref = 5

# La interfaz Grove normalemnte se encuenta a 5v
grove_vcc = 5

# Valor total del modulo 300 grados
full_angle = 300

while True:
    try:
        # Leemos el valor del potenciometro
        sensor_value = grovepi.analogRead(potentiometer)

        # Calculamos el voltaje
        voltage = round((float)(sensor_value) * adc_ref / 1023, 2)

        # Calculamos la rotación en grados (0 to 300)
        degrees = round((voltage * full_angle) / grove_vcc, 2)

        # Calculamos el brollo del led (0 to 255)
        brightness = int(degrees / full_angle * 255)

        # Give PWM output to LED
        grovepi.analogWrite(led,brightness)

        print("sensor_value = %d voltage = %.2f degrees = %.1f brightness = %d" %(sensor_value, voltage, degrees, brightness))
    except KeyboardInterrupt:
        grovepi.analogWrite(led,0)
        break
    except IOError:
        print ("Error")

```

- **Paso 4.** Ajusta el Grove - Sensor de Ángulo Rotatorio y verás el LED cambiar su brillo.

### Jugando con TI LaunchPad

**Leyendo un Potenciómetro (Sensor de Ángulo Rotatorio)**

Este ejemplo muestra como leer el valor analógico proveniente de un módulo Grove - Potenciómetro. !Combinaremos varios módulos Grove en este ejemplo! Moviendo el potenciómetro, podremos mostrar la lectura analógica en el Grove - Display de 4 digitos.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Rotary_Angle_Sensor/master/img/Angle_sensor.jpg)

```
/*
    Sensor de Ángulos Rotatorios

    Demuestra entrada analógica leyendo un sensor analógico en J16 del Grove Base BoosterPack. La velocidad del LED rojo en el LaunchPad cambiará dependiendo de la posición del potenciómetro. Este ejemplo también mostrará el valor de lectura analógica en  Grove Display de 4 Digitos.

    El circuito:
     * Potenciómetro conectado al pin 24 (J6 en Grove Base BoosterPack)
     * Pin central del potenciómetro al pin analógico
     * Un pin de un lado(cualquiera) a tierra
     * El otro pin lateral a VCC (3.3V)

    * Nota: Por la inestabilidad del voltaje, el valor del sensor de ángulo rotatorio varía un poco en cada corrida, aunque no sea tocado.


    Creado por Oliver Wang

    Este ejemplo de código es de dominio público.

    http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_v1.1b#Grove_-_Rotary_Angle_Sensor
    */

#include "TM1637.h"

/* Macro Define */
#define CLK               39                  /* 4-digital display clock pin */
#define DIO               38                /* 4-digital display data pin */
#define ROTARY_ANGLE_P    24               /* pin of rotary angle sensor */

/* Global Variables */
TM1637 tm1637(CLK, DIO);                  /* 4-digital display object */
int analog_value = 0;                     /* variable to store the value coming from rotary angle sensor */

int8_t bits[4] = {0};                     /* array to store the single bits of the value */

/* the setup() method runs once, when the sketch starts */
void setup() {

    /* Initialize 4-digital display */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);

}

/* the loop() method runs over and over again */
void loop() {

    analog_value = analogRead(ROTARY_ANGLE_P);      /* read the value from the sensor */
    memset(bits, 0, 4);                             /* reset array when we use it */
    for(int i = 3; i >= 0; i--) {
        /* get single bits of the analog value */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;
        tm1637.display(i, bits[i]);                 /* display by 4-digital display */
    }
    delay(100);
}
```

## Recursos

- **[Eagle&PDF]** [Archivo Esquemático Grove-Rotary Angle Sensor v1.2](https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/res/Grove%20-%20Rotary%20Angle%20Sensor%20v1.2.zip)
- **[Eagle&PDF]** [Archivo Esquemático Grove - Rotary Angle Sensor(P) v1.1](<https://github.com/SeeedDocument/Grove-Rotary_Angle_Sensor/raw/master/res/Grove%20%20-%20Rotary%20Angle%20Sensor(P)%20v1.1.zip>)
- **[Library]** [Repositorio Github Rotary Angle Sensor](https://github.com/Seeed-Studio/Grove_Rotary_Angle_Sensor)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove-Rotary_Angle_Sensor/master/res/Grove_Rotary_Angle_Sensor_CDC_File.zip)

## Proyectos

**Usando el Grove - Sensor de Ángulo Rotatorio para controlar el brillo de luz**: Usando Arduino/Genuino 101 para controlar el brillo de LED a través del potenciómetro.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-rotary-angle-sensor-p-to-control-grove-led-725e32/embed' width='350'></iframe>

**Módulo Grove Ángulo Rotatorio**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/31RaX7JGv5s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/xx7hMoFQohY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
