---
description: Kit de matriz circular ReSpeaker de 6 micrófonos para Raspberry Pi
title: reSpeaker Kit de matriz circular de 6 micrófonos para Raspberry Pi
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi
sku: 107990055
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/es/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)

El Kit de matriz circular ReSpeaker de 6 micrófonos de Seeed es una placa de expansión, también conocida como HAT, diseñada para Raspberry Pi. Es un kit de matriz de micrófonos circular, viene con seis micrófonos y está diseñado para aplicaciones de IA y voz. Esto significa que puedes construir un producto de voz más potente y flexible con Raspberry Pi que pueda integrar Amazon Alexa Voice Service, Google Assistant, etc.

El Kit de matriz circular ReSpeaker de 6 micrófonos para Raspberry Pi consta de dos placas, una es el HAT de accesorio de voz y la otra es la matriz circular de seis micrófonos.

El Kit de matriz circular ReSpeaker de 6 micrófonos para Raspberry Pi admite 8 canales de entrada y 8 canales de salida en el sistema Raspbian. Los primeros 6 canales de entrada son para la grabación de micrófono, los 2 canales de entrada restantes son canales de eco de la reproducción. Los primeros 2 canales de salida son para reproducción, los 6 canales de salida restantes son ficticios.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- 2 chips ADC y 1 chip DAC
- 8 canales de entrada y 8 canales de salida
- Matriz de seis micrófonos
- Compatibilidad con Grove
- Compatible con Raspberry Pi (Soporta Raspberry Pi Zero y Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ y Raspberry Pi 4)
- Salida de voz para auriculares y altavoz

## Especificación

- 2 x X-Power AC108 ADC
- 6 x micrófonos de alto rendimiento
- 1 x X-Power AC101 DAC
- Salida de voz:
  - Conector de audio para auriculares de 3,5 mm
  - Conector para altavoz
- Compatible con cabeceras de 40 pines de Raspberry Pi
- Micrófonos: MSM321A3729H9CP
- Sensibilidad: -22 dBFS (Omnidireccional)
- SNR: 59 dB
- Frecuencia de muestreo máxima: 48Khz

## Aplicaciones

- Altavoz inteligente
- Sistemas de asistente de voz inteligente
- Grabadoras de voz
- Sistema de conferencias de voz
- Equipos de comunicación para reuniones
- Robot de interacción por voz
- Asistente de voz para automóvil
- Otros escenarios que necesitan comandos de voz

## Descripción general del hardware

**Diagrama del sistema**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interfaz**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

:::note
Después de conectar, asegúrate de usar un multímetro para determinar si la conducción del circuito es como se indica en la figura anterior.
:::

## Dibujo de ensamblaje

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>

## Introducción

### Hardware

**Requisitos previos**

ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B o 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Auriculares o altavoz                 x1

:::tip
En realidad, el ReSpeaker 6-Mic Circular Array es compatible con Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 modelo B+, Raspberry Pi 3 A+ y Raspberry Pi 4; en este wiki estamos usando Raspberry Pi 3.
:::

**Conexión**

**Paso 1.**  Conecta el *ReSpeaker Voice Accessory HAT* con el *ReSpeaker 6-Mic circular Array* mediante el cable de cinta

**Paso 2.**  Inserta el *ReSpeaker Voice Accessory HAT* en la *Raspberry Pi* a través del GPIO de 40 pines

**Paso 3.**  Conecta los *auriculares* al *conector de audio para auriculares de 3,5 mm* o conecta el *altavoz* al *conector para altavoz JST 2.0*

**Paso 4.**  Conecta la *Raspberry Pi* con el *PC* mediante el cable micro-USB

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)

### Software

**Requisitos previos**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Necesitas usar *Putty* u otras herramientas *ssh* para conectarte con tu Raspberry Pi. Antes de empezar, asegúrate de lo siguiente:

1- Abre la función *ssh* de tu Pi para permitir la conexión de Putty. Si no sabes cómo abrir *ssh*, por favor busca en Google `how to setup ssh raspberry pi`

2- Tu Raspberry Pi y tu PC están trabajando en la misma red WiFi. Si no sabes cómo configurar WiFi, por favor busca en Google `how to setup wifi raspberry pi`

3- Obtén la dirección IP de tu Raspberry Pi; si no sabes cómo obtener la dirección IP, consulta la [documentación oficial de Raspberry](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Usa la dirección IP para conectar la Raspberry Pi con tu PC mediante el servicio ssh de Putty.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Luego introduce el nombre de host y la contraseña. El ID predeterminado es `pi` y la contraseña es `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Ahora ya estás dentro, y puedes introducir comandos en Putty y jugar con tu Raspberry.

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

Para hacer que este kit funcione con alexa o dueros, necesitas abrir un sitio web para obtener la autorización. Así que necesitas usar *VNC Viewer* para iniciar sesión en tu cuenta de amazon o baidu. Por favor asegúrate de haber activado el servicio *VNC* de tu Raspberry.

O simplemente puedes considerar el plan B.

*Plan B*

Si estás cansado de todo lo anterior, simplemente puedes usar un monitor HDMI y conectar el teclado USB y el ratón USB a tu Raspberry; también funciona, es simple y fácil.

**Paso 1. Instalar seeed-voicecard**

Obtén el código fuente de la tarjeta de voz de Seeed e instala todos los controladores del kernel de Linux.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh   
sudo reboot

```

**Paso 2. Comprobar la tarjeta de sonido**

Introduce el siguiente comando para comprobar el dispositivo de grabación.

```
pi@raspberrypi:~ $ arecord -L
```

Debería ser algo como:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
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

Usa el siguiente comando para comprobar el dispositivo de reproducción.

```
pi@raspberrypi:~ $ aplay -L
```

Debería ser algo como:

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
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

**Paso 3. Grabar y reproducir**

Puedes grabar y luego reproducir, o puedes grabar y reproducir al mismo tiempo.

```
#It will capture sound on AC108 and save as a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#Take care of that the captured mic audio is on the first 6 channels

#It will play sound file a.wav on AC101
aplay -D ac101 a.wav
#Do not use -D plughw:1,0 directly except your wave file is single channel only.

#Doing capture && playback the same time
arecord -D hw:1,0 -f S32_LE -r 16000 -c 8 to_be_record.wav &
#mono_to_play.wav is a mono channel wave file to play
aplay -D plughw:1,0 -r 16000 mono_to_play.wav

```

:::note
Límites para desarrolladores que usan el 6-Mic Circular Array Kit (o 4-Mics Linear Array Kit) para capturar y reproducir al mismo tiempo:

-1. La captura debe iniciarse primero, de lo contrario los canales de captura posiblemente estarán desordenados.

-2. Los canales de salida de reproducción deben rellenarse con datos de 8 canales iguales o datos de 4 canales estéreo iguales, de lo contrario es posible que el altavoz o los auriculares no emitan nada.

-3. Si quieres reproducir y grabar al mismo tiempo, el archivo de música de aplay debe ser mono, o no podrás usar este comando para reproducir.
:::

También puedes reproducir y grabar con Audacity.

:::tip
Debes abrir Audacity mediante VNC o simplemente puedes usar un monitor para abrirlo
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

### Jugar con los LED

Hay 12 LED GRB en la matriz circular de 6 micrófonos; puedes configurar los LED tú mismo, ahora veamos cómo encenderlos.

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py

```

Verás que los LED se encienden y se mueven. Y puedes consultar el archivo `python examples/respeaker_4mic_array.py` para crear tus propios efectos.

## Localización y seguimiento de la fuente de sonido en tiempo real

[ODAS](https://github.com/introlab/odas) significa Open embeddeD Audition System. Es una biblioteca dedicada a realizar localización, seguimiento, separación y posfiltrado de fuentes de sonido. Vamos a divertirnos con ella.

- Paso 1. Obtén ODAS y compílalo.

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- Paso 2. Obtén [ODAS Studio](https://github.com/introlab/odas_web/releases) y ábrelo.

- Paso 3. El odascore estará en **odas/bin/odaslive**, el **archivo de configuración** está [aquí](https://raw.githubusercontent.com/xiongyihui/odas/master/config/odaslive/respeaker_6_mic_array.cfg).

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/odas.png)

## Extraer voz

Usamos la [biblioteca PyAudio de python](https://people.csail.mit.edu/hubert/pyaudio/) para extraer voz.

- Paso 1, necesitamos ejecutar el siguiente script para obtener el número de índice de dispositivo del 6 Mic pi hat:

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- Paso 2, copia el siguiente código y pégalo en get_index.py.

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- Paso 3, pulsa Ctrl + X para salir y pulsa Y para guardar.

- Paso 4, ejecuta 'sudo python get_index.py' y veremos el ID del dispositivo como se muestra a continuación.

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

- Paso 5, cambia `RESPEAKER_INDEX = 2` al número de índice. Ejecuta el script de python record.py para grabar un discurso.

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8 
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

- Paso 6. Si quieres extraer los datos del canal 0 de 8 canales, sigue el código siguiente. Para otro canal X, cambia [0::8] por [X::8].

```python
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 3
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # extract channel 0 data from 8 channels, if you want to extract channel 1, please change to [1::8]
    a = np.fromstring(data,dtype=np.int16)[0::8]
    frames.append(a.tostring())

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## DOA

### DOA con palabras clave

**Requisitos**

- pyaudio
- numpy
- snowboy

**Instalación**

Instala pyaudio, numpy y snowboy, usa virtualenv como entorno virtual de python.

```shell
sudo apt install python-pyaudio python-numpy python-virtualenv
sudo apt-get install swig python-dev libatlas-base-dev build-essential make
git clone --depth 1 https://github.com/Kitt-AI/snowboy.git
cd snowboy
virtualenv --system-site-packages env
source env/bin/activate
python setup.py build
python setup.py bdist_wheel
pip install dist/snowboy*.whl
git clone https://github.com/voice-engine/voice-engine.git
cd voice-engine
python setup.py bdist_wheel
pip install dist/*.whl
```

**Digamos snowboy**

- Paso 1. Ejecuta kws_doa.py

```shell
cd ~/voice-engine/examples/respeaker_6mic_array_for_pi/
python kws_doa.py
```

Aquí está el código de kws_doa.py

```python
"""
Search the keyword "snowboy".
After finding the keyword, Direction Of Arrival (DOA) is estimated.

Hardware: ReSpeaker 6 Mic Array for Raspberry Pi
"""

import sys
import time
from voice_engine.source import Source
from voice_engine.channel_picker import ChannelPicker
from voice_engine.kws import KWS
from voice_engine.doa_respeaker_6mic_array import DOA


def main():
    src = Source(rate=16000, channels=8)
    ch0 = ChannelPicker(channels=src.channels, pick=0)
    kws = KWS(model='snowboy', sensitivity=0.6, verbose=True)
    doa = DOA(rate=16000)

    src.link(ch0)
    ch0.link(kws)
    src.link(doa)

    def on_detected(keyword):
        print('detected {} at direction {}'.format(keyword, doa.get_direction()))

    kws.set_callback(on_detected)

    src.recursive_start()
    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            break

    src.recursive_stop()

    # wait a second to allow other threads to exit
    time.sleep(1)


if __name__ == '__main__':
    main()
```

- Paso 2. Digamos snowboy y aquí está la salida de DOA.

```shell
(env) pi@raspberrypi:~/voice-engine/examples/respeaker_6mic_array_for_pi $ python kws_doa.py 
['arecord', '-t', 'raw', '-f', 'S16_LE', '-c', '8', '-r', '16000', '-D', 'default', '-q']
0000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222/usr/local/lib/python2.7/dist-packages/voice_engine-0.1.3-py2.7.egg/voice_engine/gcc_phat.py:22: RuntimeWarning: invalid value encountered in divide
  cc = np.fft.irfft(R / np.abs(R), n=(interp * n))
detected 1 at direction 283.32811392
3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 210.0
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 223.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022222222222222222222222222222222222222222222222222detected 1 at direction 223.32811392
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000222222222222222222222222222222222222222detected 1 at direction 283.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 237.455170747
```

## Botón

si quieres comprobar que tu respeaker_6-Mic está instalado correctamente en la Raspberry, el botón es una buena idea. Podemos usar el siguiente código para comprobarlo.

```python

import RPi.GPIO as GPIO
import time

BUTTON = 26

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON, GPIO.IN)

while True:
    state = GPIO.input(BUTTON)
    if state:
        print("off")
    else:
        print("on")
    time.sleep(1)
```

## Preguntas frecuentes

**P1: Solo hay 6 micrófonos en la matriz de micrófonos, ¿cómo puede haber 8 canales?**

R1: Hay 2 AC108 en esta matriz, y cada chip AC108 tiene salida de 4 canales. Así que en total hay 8 canales aquí, 6 de los cuales son para el micrófono, y los otros 2 son los canales de reproducción.

**P2: Si Raspberry puede detectar ReSpeaker 2-mics hat, pero no puede detectar ReSpeaker 6-mics Circular array?**

A2: Haz clic en raspberry -> Preferences -> Raspberry Pi Configuration, luego selecciona la pestaña Interfaces y asegúrate de que 1-Wire esté en Disabled.

## Recursos

- **[PDF]** [Hoja de datos de AC101](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [Hoja de datos de AC108](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Dxf]** [Archivo de carcasa de ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphones](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/ReSpeaker%20Circular%20Array%20for%20Voice%20Accessory%20HAT%20with%206%20Microphones.dxf)
- **[Dxf]** [Archivo 2D de ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphone](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/2d.zip)
- **[Driver]** [Controlador Seeed-Voice](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algoritmos que incluyen DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Proyecto Voice Engine, proporciona bloques de construcción para crear objetos habilitados por voz](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
