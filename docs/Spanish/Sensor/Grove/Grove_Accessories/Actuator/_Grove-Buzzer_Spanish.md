---
description: El Zumbador - Grove tiene un zumbador piezoeléctrico  como componente principal.
title: Zumbador-Grove
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Buzzer_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/Grove%20Buzzer.jpg)

El Zumbador - Grove tiene un [zumbador piezoeléctrico](https://en.wikipedia.org/wiki/Buzzer#Piezoelectric) como componente principal. Este componente puede conectarse a salidas digitales y emitirá un tono cuando la salida sea HIGH. Alternativamente, puede conectarse a una salida de modulación de ancho de pulso (pwm) analógico para generar varios tonos y efectos.

[![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

## Versión

| Versión del producto | Cambios                  | Fecha de lanzamiento |
| -------------------- | ------------------------ | -------------------- |
| Zumbador-Grove V1.0  | Inicial                  | 25 Nov 2010          |
| Zumbador-Grove V1.1  | Transistor S9013 añadido | 30 Mayo 2014         |

## Características

- Zumbador piezoelétrico fácil de usar
- Utiliza cables Grove estándar de 4 pines para conectarse a otros módulos Grove, como [Grove Power Modules](/Grove_System/) y la Shield Base- Grove.

Consejo:
Para más información sobre los módulos Grove, por favor visite [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/)

## Especificaciones

| Detalle                  | Valor      |
| ------------------------ | ---------- |
| Voltaje de operación     | 3.3V/5V    |
| Salida de sonido         | ≥ 85dB     |
| Frequencia de resonancia | 2300±300Hz |

## Plataformas compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                               | BeagleBone                                                                                        | Wio                                                                                               | LinkIt ONE                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros pasos

### Juega con Arduino

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Seeeduino V4.2                                                                                                           | Base Shield                                                                                                           | Zumbador - Grove                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/img/buzzer_s.jpg) |
| [Obtenlo ahora](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)                                                   | [Obtenlo ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)                                               | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)                                       |

- **Paso 2.** Conecta el Zumbador - Grove al puerto D6 de la Base Shield - Grove.
- **Paso 3.** Conecta la Base Shield - Grove al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/img/seeeduino_buzzer.jpg)

Nota:
Si no tienes la Base Shield - Grove, puedes conectar directamente el Zumbador - Grove al Seeeduino como se muestra a continuación.

| Seeeduino    | Zumbador - Grove |
| ------------ | ---------------- |
| 5V           | Rojo             |
| GND          | Negro            |
| No conectado | Blanco           |
| D6           | Amarillo         |

#### Software

- Paso 1. Copia el código en el IDE de Arduino y cárgalo.

```c
void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(1000);
  digitalWrite(6, LOW);
  delay(1000);
}
```

- Paso 2. Podrás oir el zumbador encendiendo y apagándose.

### Juega con Codecraft

#### Hardware

**Paso 1.** Conecta el Zumbador - Grove al puerto D6 de la Base Shield.

**Paso 2.** Conecta la Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta el Seeeduino/Arduino a tu PC con un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino y arrastra un procedimiento principal al área de trabajo.

Nota:
Si es tu primera vez usando Codecraft, ve también [Guía para Codecraft usando Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra los bloques como se muestra en la imagen o abre el archivo cdc que puedes descargar al final de esta página.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove_Buzzer/master/img/cc_Buzzer.png)

Carga el programa a tu Arduino/Seeeduino.

¡Éxito!
Cuando el código termine de cargarse, podrás escuchar al zumbador sonar de manera intermitente.

### Juega con Raspberry Pi (con Base Hat -Grove para Raspberry Pi)

#### Hardware

- **Paso 1**. Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | Base Hat - Grove para RasPi                                                                                                    | Zumbador - Grove                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/img/buzzer_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)                                       | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)                                       |

- **Paso 2**. Conecta la Base Hat - Grove al Raspberry Pi.
- **Paso 3**. Conecta el Zumbador - Grove al puerto PWM de la Base Hat.
- **Paso 4**. Conecta la Raspberry Pi a tu PC con un cable USB.
  ![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/connect1.jpg)

#### Software

- **Paso 1**. Sigue [Configuración de Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Descarga el archivo fuente clonando la librería grove.py

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 3**. Ejecuta el comando que se muestra a continuación para correr el código.

```
cd grove.py/grove
python grove_pwm_buzzer.py
```

Aquí está el código grove_led.py

```python

from __future__ import print_function

import time
from mraa import getGpioLookup
from upm import pyupm_buzzer as upmBuzzer

def main():
    print("Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]")

    #Base Hat Grove para Raspberry Pi
    #   PWM JST SLOT - PWM[12 13 VCC GND]
    pin = 12
    #
    # Crea el objeto del zumbador usando RaspberryPi GPIO12
    mraa_pin = getGpioLookup("GPIO%d" % pin)
    buzzer = upmBuzzer.Buzzer(mraa_pin)

    chords = [upmBuzzer.BUZZER_DO, upmBuzzer.BUZZER_RE, upmBuzzer.BUZZER_MI,
              upmBuzzer.BUZZER_FA, upmBuzzer.BUZZER_SOL, upmBuzzer.BUZZER_LA,
              upmBuzzer.BUZZER_SI];

    # Imprime el nombre del sensor
    print(buzzer.name())

    # Reproduce sonido (DO, RE, MI, etc.), pausado por 0.1 segundos entre notas
    for chord_ind in range (0,7):
        # reproduce cada nota por medio segundo
        print(buzzer.playSound(chords[chord_ind], 500000))
        time.sleep(0.1)

    print("exiting application")

    # Borra el objeto del zumbador
    del buzzer

if __name__ == '__main__':
    main()



```

¡Éxito!
Si todo ha ido bien, el zumbador sonará unas veces y luego se detendrá. El programa se saldrá automáticamente.

### Juega con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Reúne los siguientes artículos:

| Raspberry pi                                                                                                   | GrovePi_Plus                                                                                                         | Zumbador - Grove                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg) | ![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/Grovepi%2B.jpg) | ![enter image description here](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/img/buzzer_s.jpg) |
| [Obtenlo ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)                                | [Obtenlo ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)                                                  | [Obtenlo ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)                                       |

- **Paso 2.** Conecta el GrovePi_Plus a la Raspberry.
- **Paso 3.** Conecta el Zumbador - Grove al puerto D8 del GrovePi_Plus.
- **Paso 4.** Conecta la Raspberry a tu PC con un cable USB.

![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/img/rasp_buzzer.jpg)

#### Software

- **Paso 1.** Sigue [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar el entorno de desarrollo.
- **Paso 2.** Clona el repositorio de Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Paso 3.** Ejecuta los siguientes comandos.

```
cd ~/GrovePi/Software/Python
python grove_buzzer.py
```

Aquí está el código grove_buzzer.py

```python
import time
import grovepi

# Conecta el zumbador Grove al puerto digital D8
# SIG,NC,VCC,GND
buzzer = 8

grovepi.pinMode(buzzer,"OUTPUT")

while True:
    try:
        # Zumba por 1 segundo
        grovepi.digitalWrite(buzzer,1)
        print ('start')
        time.sleep(1)

        # Deja de zumbar por 1 segundo y repite
        grovepi.digitalWrite(buzzer,0)
        print ('stop')
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(buzzer,0)
        break
    except IOError:
        print ("Error")
```

- Paso 4. Oirás el zumbador encendiendo y apagándose.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_buzzer.py
start
stop
start
stop
```

### Juega con TI LaunchPad

#### Hardware

- Este ejemplo muestra cómo usar el zumbador Grove para tocar melodías. Envía una onda cuadrada de la frecuencia apropiada, generando el tono correspondiente.

![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/Buzzer.jpg)

#### Software

```c
/*
  Zumbador
 El ejemplo usa un zumbador para tocar melodías. Envía una onda cuadrada de la frecuencia apropiada, generando el tono correspondiente.

 El circuito:
 * Zumbador al pin39 (J14 conectado al Grove Base BoosterPack)
 * un pin lateral (cualquiera de los dos) a tierra
 * El otro pin lateral a VCC
 * ánodo del LED (pata larga) al LED_ROJO
 * cátodo del LED (pata corta) a tierra

 * Nota:
 Este ejemplo está en el dominio público.

 http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Kit_v1.1b#Grove_-_Buzzer

*/

/* Macro Define */
#define BUZZER_PIN               39            /* sig pin of the buzzer */

int length = 15;         /* número de notas */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup()
{
    /* establece el pin de zumbador como salida */
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop()
{
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* delay entre notas */
    }

}

/* reproduce el tono */
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(BUZZER_PIN, HIGH);
        delayMicroseconds(tone);
        digitalWrite(BUZZER_PIN, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // reproduce el tono correspondiente al nombre de la nota
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

## Recursos

- **[Eagle&PDF]** [Zumbador - Grove Archivos Esquemáticos v1.1](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/resources/Grove-Buzzer_V1.1_eagle.zip)
- **[Eagle&PDF]** [Zumbador - Grove Archivos Esquemáticos v1.0](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/resources/Grove_-_Buzzer_v1.0_Source_File.zip)
- **[Hoja de datos]** [S9013 datasheet](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/resources/S9013.pdf)
- **[Más información]** [Pistola láser de madera](http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)
- **[Codecraft]** [Archivo CDC](https://raw.githubusercontent.com/SeeedDocument/Grove_Buzzer/master/res/Grove_Buzzer_CDC_File.zip)

![](https://raw.githubusercontent.com/SeeedDocument/Grove_Button/master/img/gun.jpg)

Inspirados en OVERWATCH, hemos hecho una pistola láser de madera de juguete para divertirse en estos días.

La pistola láser de madera y el objetivo del arma están basados en una tarjeta arduino llamada Seeeduino lotus. El emisor láser de la pistola está controlado para disparar un pulso láser para activar el objetivo de arma. Hay tres sensores de luz en el objetivo de arma para detectar el pulso láser. Suena fácil, ¿cierto? si estás interesado en este proyecto, ¡haz uno para ti o para tu hijo!. Vale la pena pasar el día haciendo este proyecto como un regalo de Navidad.

## Proyectos

**Introducción al Zumbador - Grove**: Mis primeros pasos con con los componentes Grove 'plug & play'. Es principalmente un timbre.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-buzzer-981efd/embed' width='350'></iframe>

**Monitor de desperdicio de agua**: Se gastan millones de galones de agua cada año. ¡Aprende a conservar agua con este proyecto!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/exp0nge/water-waste-monitor-98378e/embed' width='350'></iframe>

**Módulo zumbador Grove**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/XBqvG6R1ueA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ug8dJHPmdMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
