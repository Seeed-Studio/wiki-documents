---
title: Grove - Buzzer
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Buzzer/
slug: /es/Grove-Buzzer
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)

El módulo Grove - Buzzer tiene un [buzzer piezoeléctrico](https://en.wikipedia.org/wiki/Buzzer#Piezoelectric) como componente principal. El piezo puede conectarse a salidas digitales y emitirá un tono cuando la salida esté en HIGH. Alternativamente, puede conectarse a una salida analógica de modulación por ancho de pulso para generar varios tonos y efectos.

[![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

## Versión

| Versión del Producto              | Cambios                                                                                                                                                                                    | Fecha de Lanzamiento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Buzzer V1.0| Inicial                                                                                                                                                                                    | Nov 25 2010      |
| Grove-Buzzer V1.1 | Añadir Transistor S9013                                                                                                                                                                                    | May 30 2014      |

## Características

- Zumbador piezoeléctrico fácil de usar
- Utiliza cables Grove estándar de 4 pines para conectar con otros módulos Grove como - Módulos de alimentación Grove y Grove - Base Shield

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Elementos          | Especificación |
|--------------------|----------------|
| Voltaje de operación | 3.3V/5V      |
| Salida de sonido   | ≥85dB          |
| Frecuencia de resonancia | 2300±300Hz |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Paso 2.** Conecta Grove-Buzzer al puerto D6 del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC a través de un cable USB.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/seeeduino_buzzer.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-buzzer al Seeeduino como se muestra a continuación.
:::
| Seeeduino       | Grove-Buzzer |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D6            | Amarillo                  |


#### Software

- Paso 1. Copia el código en Arduino IDE y súbelo.

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

- Paso 2. Escucharemos el zumbador encenderse y apagarse.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - Buzzer al puerto D6 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/cc_Buzzer.png)

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, escucharás el sonido del zumbador de forma intermitente.
:::

### Jugar Con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove -  Buzzer|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry Pi.
- **Paso 3**. Conecta el Grove Buzzer al puerto PWM del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect1.jpg)

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo, e instala grove.py en tu raspberry pi.

- **Paso 2**. Ejecuta el siguiente comando para ejecutar el código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
# enter commmand
grove_pwm_buzzer
```

A continuación se muestra el código de grove_pwm_buzzer.py.

```python
from __future__ import print_function

import time
import RPi.GPIO as GPIO

def main():
    from grove.helper import helper
    # helper.root_check()

    print("Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]")
    # Grove Base Hat for Raspberry Pi
    pin = 12
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin, GPIO.OUT)

    # create PWM instance
    pwm = GPIO.PWM(pin, 10)
    pwm.start(0) 

    chords = [1047, 1175, 1319, 1397, 1568, 1760, 1976]
    # Play sound (DO, RE, MI, etc.), pausing for 0.5 seconds between notes
    try:
        for note in chords:
            pwm.ChangeFrequency(note)
            pwm.ChangeDutyCycle(95)
            time.sleep(0.5) 
    finally:
        pwm.stop()
        GPIO.cleanup()

    print("Exiting application")

if __name__ == '__main__':
    main()
```

:::success
    Si todo va bien, el zumbador sonará unas cuantas veces y luego se detendrá, el programa saldrá automáticamente.
 :::

Puedes salir de este programa simplemente presionando **ctrl+c**.

### Jugar Con Raspberry Pi (con GrovePi_Plus)

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Raspberry pi | GrovePi_Plus | Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Paso 2.** Conecta el GrovePi_Plus al Raspberry.
- **Paso 3.** Conecta el Grove-Buzzer al puerto D8 del GrovePi_Plus.
- **Paso 4.** Conecta el Raspberry a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/rasp_buzzer.jpg)

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

- **Paso 3.** Ejecuta los siguientes comandos.

```
cd ~/GrovePi/Software/Python
python3 grove_buzzer.py
```

Aquí está el código de grove_buzzer.py.

```python
import time
import grovepi

# Connect the Grove Buzzer to digital port D8
# SIG,NC,VCC,GND
buzzer = 8

grovepi.pinMode(buzzer,"OUTPUT")

while True:
    try:
        # Buzz for 1 second
        grovepi.digitalWrite(buzzer,1)
        print ('start')
        time.sleep(1)

        # Stop buzzing for 1 second and repeat
        grovepi.digitalWrite(buzzer,0)
        print ('stop')
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(buzzer,0)
        break
    except IOError:
        print ("Error")
```

- Paso 4. Escucharemos el zumbador encenderse y apagarse.

```
(env)pi@raspberrypi:~ grove_pwm_buzzer
start
stop
start
stop
```

### Jugar Con TI LaunchPad

#### Hardware

- Este ejemplo muestra cómo usar el módulo zumbador Grove para reproducir melodías. Envía una onda cuadrada de la frecuencia apropiada al zumbador, generando el tono correspondiente.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Buzzer.jpg)

#### Software

```c
/*
  Buzzer
 The example use a buzzer to play melodies. It sends a square wave of the
 appropriate frequency to the buzzer, generating the corresponding tone.

 The circuit:
 * Buzzer attached to pin39 (J14 plug on Grove Base BoosterPack)
 * one side pin (either one) to ground
 * the other side pin to VCC
 * LED anode (long leg) attached to RED_LED
 * LED cathode (short leg) attached to ground

 * Note:
 This example code is in the public domain.

 https://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Kit_v1.1b#Grove_-_Buzzer

*/

/* Macro Define */
#define BUZZER_PIN               39            /* sig pin of the buzzer */

int length = 15;         /* the number of notes */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup()
{
    /* set buzzer pin as output */
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
        delay(tempo / 2);    /* delay between notes */
    }

}

/* play tone */
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

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

# Grove - Archivos de Esquemas del Buzzer v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Archivos de Esquemas del Buzzer v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Grove - Archivos de Esquemas del Buzzer v1.1](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip)
- **[Eagle&PDF]** [Grove - Archivos de Esquemas del Buzzer v1.0](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip)
- **[Hoja de Datos]** [S9013datasheet](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/S9013.pdf)
- **[Lectura Adicional]** [Pistola Láser de Madera](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove_Buzzer/res/Grove_Buzzer_CDC_File.zip)

![](https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg)

Inspirados por OVERWATCH, hemos creado un juguete muy genial de Pistola Láser de Madera para divertirnos estos días!

La Pistola Láser de Madera y el Objetivo de la Pistola están basados en una placa Arduino llamada Seeeduino Lotus. El emisor láser en la Pistola Láser está controlado para disparar pulsos láser para "activar" el Objetivo de la Pistola. Y hay 3 sensores de luz en el Objetivo de la Pistola para detectar el pulso láser. Parece muy simple, ¿verdad? Si estás interesado en nuestro proyecto, ¡por favor haz uno para ti o tu hijo! Vale la pena pasar un día haciéndolo como regalo de Navidad.

## Proyectos

**Grove - Introducción a un Buzzer**: Mis primeros pasos con los componentes Grove 'plug & play'. Esto es principalmente un Buzzer.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-buzzer-981efd/embed' width='350'></iframe>

**Monitor de Desperdicio de Agua**: Millones de galones de agua se desperdician cada año. ¡Aprende a conservar agua con este proyecto!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/exp0nge/water-waste-monitor-98378e/embed' width='350'></iframe>

**Módulo Buzzer Grove**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XBqvG6R1ueA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ug8dJHPmdMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
