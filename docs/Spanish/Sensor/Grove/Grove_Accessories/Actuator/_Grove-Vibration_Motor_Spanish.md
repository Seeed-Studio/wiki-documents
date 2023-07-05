---
description: Este es un mini motor vibrador adaptado como indicador no audible.
title: Vibration Motor
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Vibration_Motor_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/img/Gvib.jpg)

Este es un mini motor vibrador adaptado como indicador no audible. Cuando la entrada esta HIGH, el motor vibrará de manera idéntica a como lo hace tu celular en modo silencio.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

## Rastreador de Versión

| Revisión | Descripción                                                                        | Lanzamiento             |
| -------- | ---------------------------------------------------------------------------------- | ----------------------- |
| v0.9b    | Lanzamiento público inicial                                                        | 10 De Mayo 2011         |
| v1.0     | Utiliza directamente un puerto I/O para controlar el Motor Vibrador                | 5 de Noviembre del 2011 |
| v1.2     | Transistor Agregador, utiliza una mayor corriente para controlar el Motor Vibrador | 11 de Julio del 2013    |

## Carácteristicas

- Compatibilidad Grove
- No audible
- Bajo consumo eléctrico
- Alta Fiabilidad

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
</tr>
<tr align="center">
<th scope="row">
Voltaje de Operación
</th>
<td>
3.0V
</td>
<td>
5.0V
</td>
<td>
5.5V
</td>
</tr>
<tr align="center">
<th scope="row">
Modo de Control
</th>
<td colspan="3" rowspan="1">
Nivel Lógico
(Cuando lógica en HIGH, el motor se enciende, cuando está en LOW, el motor se apaga.)
</td>
</tr>
<tr align="center">
<th scope="row">
Velocidad Nominal
</th>
<td colspan="3" rowspan="1">
9000 rpm
</td>
</tr>
</table>

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                                 | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

Para hacerlo vibrar es tan fácil como encender un LED. Aquí encontrarás un ejemplo mostando como encender el motor vibrador.

#### Hardware

- **Paso 1.** Prepara el siguiente material:

| Seeeduino V4.2                                                                                                             | Shield Base                                                                                                                | Grove - Motor Vibrador                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/img/Gvib_small.jpg) |
| [Aquierelo aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                    | [Adquierlo aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                                   | [Adquierlo aquí](http://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)                                                    |

- **Paso 2.** Grove - Motor Vibrador al puerto D2 al Grove - Shield Base.
- **Paso 3.** Ensambla el Grove - Shield Base en tu Seeeduino.
- **Paso 4.** Conecta el Seeeduino a tu PC usando el cable USB.

![](https://github.com/SeeedDocument/Grove-Vibration_Motor/raw/master/img/vibration_motor.png)

¡Nota!
Si no tienes la Shield Base - Grove, puedes conectar directamente el módulo Grove - Hall Sensor como se muestra debajo.

| Seeeduino    | Grove - Motor Vibrador |
| ------------ | ---------------------- |
| 5V           | Rojo                   |
| GND          | Negro                  |
| No conectado | Blanco                 |
| D2           | Amarillo               |

#### Software

- **Paso 1.** Copia el código en el IDE de Arduino y carguelo. Si no sabes como cargar un código, por favor revisa [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```c
int MoPin = 2;    // Grove vibrador conectado al puerto digital 9

void setup()  {
    pinMode( MoPin, OUTPUT );
}

void loop()  {

    digitalWrite(MoPin, HIGH);
    delay(1000);

    digitalWrite(MoPin, LOW);
    delay(1000);
}

```

- **Paso 2.** Ahora ¡Siente la vibración de tu motor!Now, feel the vibration of your motor!

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Motor Vibrador al puerto D2 del Shield Base.

**Paso 2.** Ensambla el Base Shield en tu Seeeduino/Arduino.

**Paso 3.** Enlaza tu Seeeduino/Arduino a tu PC vía USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra un <em>main procedure</em> al área de trabajo

¡Nota!:
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![cc](https://github.com/SeeedDocument/Grove-Vibration_Motor/raw/master/img/cc_Vibration_Motor.png)

Sube el programa a tu Arduino o Seeeduino.

¡Éxito!
Cuando tu código finalice del subirse, podrás sentir la vibración del motor.

### Jugando con Raspberry Pi

#### Hardware

- **Paso 1.** Prepara el material siguiente:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Grove - Motor vibrador                                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/img/Gvib_small.jpg) |
| [Adquierelo aquí](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                       | [Adquierelo aquí](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                            | [Adquierelo aquí](http://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)                                                   |

- **Paso 2.** Inserta el GrovePi_Plus en tu Raspberry.
- **Paso 3.** Conecta el Grove - Motor Vibrador en el puerto **D8** del GrovePi_Plus.
- **Step 4.** Conecta la Raspberry a tu PC utilizando un cable USB.

#### Software

- **Paso 1.** Navega al directorio de demostraciones:

```
cd yourpath/GrovePi/Software/Python/
```

- **Paso 2.** Para ver el código

```
nano grove_vibration_motor.py   # "Ctrl+x" para salir#
```

```python
import time
import grovepi

# Conecta el Grove Motor Vibrador al puerto digital D8
# SIG,NC,VCC,GND
vibration_motor = 8

grovepi.pinMode(vibration_motor,"OUTPUT")

while True:
    try:
        # Inicial la vibración por 1 segundo
        grovepi.digitalWrite(vibration_motor,1)
        print 'start'
        time.sleep(1)

        # Detiene la vibración por un segundo, y repite
        grovepi.digitalWrite(vibration_motor,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(vibration_motor,0)
        break
    except IOError:
        print "Error"
```

- **Paso 3.** Ejecuta la demostración.

```
sudo python grove_vibration_motor.py
```

## Recursos

- **[Eagle]** [Grove - Motor Vibrador Esquemático](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/res/Grove-Vibration_Motor_Eagle_Files.zip)

- **[Datasheet]** [S9013 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/res/S9013.pdf)

- **[Datasheet]** [ANDA-B1020 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Motor/master/res/ANDA-B1020_datasheet.pdf)

- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Vibration_Motor/master/resource/Grove_Vibration_Motor_CDC_File.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Vibration_Motor -->

## Proyectos

**Grove - Introducción en el Motor Vibradors - solo para adultos**: Ejemplo principantes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-vibration-motor-only-for-adults-2acfc2/embed' width='350'></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
