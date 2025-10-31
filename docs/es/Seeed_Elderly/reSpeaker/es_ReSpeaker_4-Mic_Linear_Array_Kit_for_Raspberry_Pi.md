---
description: ReSpeaker 4-Mic Linear Array Kit
title: ReSpeaker 4-Mic Linear Array Kit
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg)

El ReSpeaker 4-Mic Linear Array Kit de Seeed es
una placa de extensión, también conocida como HAT diseñada para Raspberry Pi. Es un kit de matriz de micrófonos lineal
que viene con cuatro micrófonos y
está diseñado para aplicaciones de IA y voz. Esto
significa que puedes construir un producto de voz más potente y
flexible con Raspberry Pi
que puede integrar Amazon Alexa Voice
Service, Google Assistant, y más.

El ReSpeaker 4-Mic Linear Array Kit para
Raspberry Pi consta de dos placas, una es
el HAT accesorio de voz, la otra es la matriz lineal de cuatro
micrófonos.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

El ReSpeaker 4-Mic Linear Array Kit para
Raspberry Pi soporta 8 canales de entrada y 8 de salida
en Raspberry Pi OS. Los primeros 6
canales de entrada para grabación de micrófono
(solo los primeros 4 canales de entrada son
datos de captura válidos), el resto de 2 canales de entrada
son canal de eco de reproducción. Los primeros 2
canales de salida son para salida de sonido, el resto de 6 canales de salida
son ficticios.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- 2 chips ADC y 1 chip DAC
- 8 canales de entrada y 8 de salida
- Matriz de cuatro micrófonos
- Soporte Grove
- Compatible con Raspberry Pi (Soporta Raspberry Pi Zero y Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ y Raspberry Pi 4)
- Salida de voz por auriculares y altavoz

## Especificaciones

- 2 x X-Power AC108 ADC
- 4 x micrófonos analógicos de alto rendimiento
- 1 x X-Power AC101 DAC
- Salida de voz:
  - Jack de audio para auriculares de 3.5mm
  - Jack para altavoz
- Compatible con conectores de 40 pines de Raspberry Pi
- Micrófonos: MSM321A3729H9BP
- Sensibilidad: -22 dBFS (Omnidireccional)
- SNR: 59 dB
- Frecuencia de muestreo máxima: 48Khz

## Ideas de aplicación

- Altavoz inteligente
- Sistemas de asistente de voz inteligente
- Grabadoras de voz
- Sistema de conferencias de voz
- Equipo de comunicación para reuniones
- Robot de interacción por voz
- Asistente de voz para automóvil
- Otros escenarios que necesiten comando de voz

## Descripción general del hardware

**Diagrama del sistema**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"/></a>

**Interfaz**

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg)

:::note
Después de conectar, asegúrate de usar un multímetro para determinar si la conducción del circuito es como se indica en la figura anterior.
:::

## Diagrama de ensamblaje  

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

## Primeros pasos

**Conectar ReSpeaker 4-Mic Array a Raspberry Pi**

**Paso 1.**  Conecta el *ReSpeaker Voice Accessory HAT* con el *ReSpeaker 4-Mic linear Array* mediante el Cable de Cinta

**Paso 2.**  Conecta el *ReSpeaker Voice Accessory HAT* al *Raspberry Pi* mediante el conector de 40 pines GPIO

**Paso 3.**  Conecta los *auriculares* al *conector de audio de 3.5mm* o conecta el *altavoz* al *conector JST 2.0 para altavoz*

**Paso 4.**  Conecta el *Raspberry Pi* con la *PC* mediante el cable micro-USB

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg)

### Software

**Paso 1. Instalar seeed-voicecard**

Obtén el código fuente de seeed voice card e instala todos los controladores del kernel de linux.

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh  
sudo reboot

```

**Paso 2. Verificar la Tarjeta de Sonido**

Toca el comando a continuación para verificar el dispositivo de grabación.

```
pi@raspberrypi:~ $ arecord -L
```

Debería ser así:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions
```

Usa el siguiente comando para verificar el dispositivo de reproducción.

```
pi@raspberrypi:~ $ aplay -L
```

Debería ser así:

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=ALSA
    bcm2835 ALSA, bcm2835 ALSA
    Default Audio Device
dmix:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample mixing device
dmix:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample mixing device
dsnoop:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample snooping device
dsnoop:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample snooping device
hw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct hardware device without any conversions
hw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct hardware device without any conversions
plughw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Hardware device with all software conversions
plughw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Hardware device with all software conversions
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions

```

**Paso 3. Grabar y Reproducir**

Puedes grabar y luego reproducir, o puedes grabar y reproducir al mismo tiempo.

```
#It will capture sound on AC108 and save as a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#Take care of that the captured mic audio is on the first 6 channels

#It will play sound file a.wav on AC101
aplay -D ac101 a.wav
#Do not use -D plughw:1,0 directly except your wave file is single channel only.

```

:::note
Límite para desarrolladores que usan el Kit de Array Lineal de 4 Micrófonos haciendo captura y reproducción al mismo tiempo:

-1. la captura debe iniciarse primero, o de lo contrario los canales de captura posiblemente estarán desordenados.

-2. los canales de salida de reproducción deben llenarse con datos de 8 canales iguales o datos de 4 canales estéreo iguales, o de lo contrario el altavoz o los auriculares posiblemente no producirán salida.

-3. Si quieres reproducir y grabar al mismo tiempo, el archivo de música aplay debe ser mono, o no podrás usar este comando para reproducir.
:::

También puedes reproducir y grabar con Audacity.

:::tip
        Debes abrir Audacity a través de VNC o simplemente puedes usar un monitor para abrirlo
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png)

## Resumen de uso

Para ejecutar los siguientes ejemplos, clona el repositorio [4mics_hat repository](https://github.com/respeaker/4mics_hat.git) en tu Raspberry Pi

```
git clone https://github.com/respeaker/4mics_hat.git
```

Todos los scripts de Python mencionados en los ejemplos a continuación se pueden encontrar dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta del repositorio mic_hat, ejecuta

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### Grabar sonido con Python

Usamos la [biblioteca de Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el número de índice del dispositivo del 2 Mic pi hat:

```
python3 recording_examples/get_device_index.py
```

Verás el ID del dispositivo como se muestra a continuación.

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

Para grabar el sonido, abre el archivo ```recording_examples/record.py``` con nano u otro editor de texto y cambia `RESPEAKER_INDEX = 2` al número de índice del ReSpeaker en tu sistema. Luego ejecuta el script de python record.py para hacer una grabación:

```
python3 recording_examples/record.py
```

- Paso 6. Si quieres extraer datos del canal 0 de 8 canales, echa un vistazo al contenido de ```record_one_channel.py```. Para otro canal X, por favor cambia [0::8] a [X::8].

```
python3 recording_examples/record_one_channel.py
```

Para reproducir las muestras grabadas puedes usar la utilidad del sistema aplay, por ejemplo

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## FAQ

**P1: Solo hay 4 micrófonos en el Array de Micrófonos, ¿cómo puede tener 8 canales?**

R1: Hay 2 AC108 en este array, y cada chip AC108 tiene 4 canales de salida. Así que viene un total de 8 canales aquí, 4 de los cuales son para el micrófono, dos canales para la reproducción y los 2 canales restantes no se usan.

**P2: ¿Si Raspberry puede detectar ReSpeaker 2-mics hat, pero no puede detectar ReSpeaker 4-mics linear array?**

R2: Por favor haz clic en raspberry -> Preferences -> Raspberry Pi Configuration, luego selecciona la pestaña Interfaces, asegúrate de que 1-Wire esté Deshabilitado.

## Recursos

- **[PDF]** [Hoja de datos AC101](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [Hoja de datos AC108](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algoritmos]** [Algoritmos incluye DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Motor de Voz]** [Proyecto Voice Engine, proporciona bloques de construcción para crear objetos habilitados por voz](https://github.com/voice-engine/voice-engine)
- **[Algoritmos]** [AEC](https://github.com/voice-engine/ec)
- **[Dibujo Mecánico]** [Dibujo 2D](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip)

## Proyectos

[Mojing Mojing - ¡Un Espejo Inteligente con ReSpeaker!](https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20): Un espejo inteligente con control de interfaz de voz a través de ReSpeaker. ¡También nos conectamos con Wio Link para controlar otros objetos! Basado en Raspberry Pi.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
