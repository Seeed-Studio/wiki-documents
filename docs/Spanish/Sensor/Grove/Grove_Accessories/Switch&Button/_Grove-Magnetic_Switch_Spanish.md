---
description: Este es un módulo de Interruptor Magnético compatible con la plataforma Grove.
title: Modulo Magnetico
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Magnetic_Switch_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/45d.jpg)

Este es un módulo de Interruptor Magnético compatible con la plataforma Grove. Basado en el encapsulado de interruptor de láminas secas CT10. El CT10 es un unipolo, de un solo tiro (SPST), que tiene contactos de rutenio normalmente abiertos. El sensor es un de tipo doble-extremo y que puede ser actuado con un electróiman, imán permanente o una combinación de ambos. El interruptor magnético es una herramienta increible para diseñadores que quieren crear un circuito on/off basado en proximidad.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

## Características

- Interfaz compatible con Grove
- 2.0cm x 2.0cm módulo Grove
- Minimum external parts
- Clasificación de 10W
- Encapsulación resistente

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Ideas de Aplicaciones

- Sensor de Proximidad
- Sensor de Alarma de Seguridad
- Sensor de nivel
- Sensor de Flujo
- Contador de pulsos

## Especificaciones

<table border="1">
<tr>
<th scope="col">
Artículo
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
<td>
Voltaje de Operación
</td>
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
V
</td>
</tr>
<tr align="center">
<td>
Potencia Conmutada
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
Voltaje Conmutado AC, Valor RMS(max)
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
Corriente Conmutada DC
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Acumulación de Corriente DC
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
Resistencia de Contacto
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
Resistencia de Aislamiento
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
Temperatura de Operación
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
Rango de Operación
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Platforms Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

#### Demostración

La señal del pin de salida del módulo se enceuntra normalmente en LOW. Cuando un imán se acerca al interruptor, el switcg magnético envia una señal positiva (HIGH) a tráves del pin de salida.

#### Hardware

- **Paso 1.** Prepara el siguiente material:

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Interruptor Magnético                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/45d_small.jpg) |
| [Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                       | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                      | [Get One Now](http://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)                                                      |

- **Paso 2.** Conecta el Grove- Interruptor Magnético al puerto **D2** del Grove - Shield Base.
- **Paso 3.** Ensambla el Grove - Base Shield en el Seeeduino.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/with_ardu.jpg)

¡Nota!
Si no cuantas con un Grove - Shield Base, puedes conectarlo directamente el Grove - Interruptor Magnético al Seeeduino como se muestra en la siguiente tabla.

| Seeeduino | Grove-Interruptor Magnético |
| --------- | --------------------------- |
| 5V        | Rojo                        |
| GND       | Negro                       |
| NC        | Blanco                      |
| D2        | Amarillo                    |

#### Software

- **Paso 1.** Copia el código en el IDE de Arduino y carguelo. Si no sabes como cargar un código, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c
/*******************************************************************************/

/*Macro Definiciones de pin Magnético y el pin del LED*/
#define MAGNECTIC_SWITCH 2
#define LED 13// LED dentro de la tarjeta de Arduino.

void setup()
{
    pinsInit();
}

void loop()
{
    if(isNearMagnet())//Esta el interuptor magnético cerca del imán?
    {
        turnOnLED();
    }
    else
    {
        turnOffLED();
    }
}
void pinsInit()
{
    pinMode(MAGNECTIC_SWITCH, INPUT);
    pinMode(LED,OUTPUT);
}

/*Si el interruptor magnético se encuentra cerca del imán, regresará un valor verdadero, */
/*De otra manera será falso                               */
boolean isNearMagnet()
{
    int sensorValue = digitalRead(MAGNECTIC_SWITCH);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
```

- **Paso 2.** Entonces el LED se encenderá cuando un imán se acerque al interruptor. ¡Intentalo!

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Interruptor Magnético al puerto D2 del Shield Base.

**Paso 2.** Ensambla el Shield Base a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu computadora usando un Cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega suporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo.

¡Nota!
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como se muestra en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/cc_Magnetic_Switch.png)

Carga el programa a tu Arduino o Seeeduino.

¡Éxito!
Cuando tu código ha sido cargado, mueve el imán cerca del interruptor mágnetico y verás el LED en el pin 13 de tu Arduinoa encender.

### Jugando Raspberry Pi

#### Hardware

- **Paso 1.** Reune los siguientes artículos:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Interruptor Magnético                                                                                                   |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/45d_small.jpg) |
| [Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                           | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                | [Get One Now](http://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)                                                      |

- **Step 2.** Ensambla el GrovePi Plus en tu Raspberry.
- **Step 3.** Conecta el Grove - Interruptor Magnético en el conector **D2** del GrovePi Plus.
- **Step 4.** Conecta la Raspberry Pi a tu computadora usando un cable USB.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/with_rpi.jpg)

#### Software

- **Paso 1.** Sigue [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.

- **Paso 2.** Navega al directorio de Demostraciones:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 3.** Para ver el cógido (Esta demostración puede ser usada con un sensor de inclinación).

```
nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Conecta el sensor al puerto digital D2
# SIG,NC,VCC,GND
tilt_switch = 2

grovepi.pinMode(tilt_switch,"INPUT")

while True:
    try:
        print grovepi.digitalRead(tilt_switch)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Paso 4.** Corre la demostración.

```
sudo python grovepi_tilt_switch.py
```

- **Paso 5.** Resultado.

Pon un imán sobre el sensor, el pin de señal dará una salida positiva (HIGH).

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/img/Grovepi_tilt_Switch_00.png)

## Recursos

- **[Eagle]** [Grove-Interruptor Magnético v0.9 Schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/Magnetic_Switch.zip)

- **[Eagle]** [Grove-Interuptor Magnético v1.3 Schematic](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)

- **[PDF]** [Grove-Interruptor Magnético v1.3 PDF File](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)

- **[Datasheet]** [CT10 Hoja de datos (Datasheet)](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/CT10.pdf)

- **[Codecraft]** [CDC Archivo](https://raw.githubusercontent.com/SeeedDocument/Grove-Magnetic_Switch/master/res/Grove_Magnetic_Switch_CDC_File.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch -->

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
