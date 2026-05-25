---
description: Kit de Matriz Circular ReSpeaker 6-Mic para Raspberry Pi
title: Kit de Matriz Circular reSpeaker 6-Mic para Raspberry Pi
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi
sku: 107990055
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)

O Kit de Matriz Circular ReSpeaker 6-Mic da Seeed é uma placa de extensão, também conhecida como HAT, projetada para Raspberry Pi. É um kit de matriz de microfones circular, vem com seis microfones e é projetado para aplicações de IA e voz. Isso significa que você pode construir um produto de voz mais poderoso e flexível com o Raspberry Pi, que pode integrar Amazon Alexa Voice Service, Google Assistant e assim por diante.

O Kit de Matriz Circular ReSpeaker 6-Mic para Raspberry Pi consiste em duas placas, uma é o HAT de acessório de voz e a outra é a matriz circular de seis microfones.

O Kit de Matriz Circular ReSpeaker 6-Mic para Raspberry Pi suporta 8 canais de entrada e 8 canais de saída no sistema Raspbian. Os primeiros 6 canais de entrada são para gravação de microfone, os 2 canais de entrada restantes são canais de eco da reprodução. Os primeiros 2 canais de saída são para reprodução, os 6 canais de saída restantes são fictícios.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- 2 chips ADC e 1 chip DAC
- 8 canais de entrada e 8 canais de saída
- Matriz de seis microfones
- Suporte Grove
- Compatível com Raspberry Pi (Suporta Raspberry Pi Zero e Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ e Raspberry Pi 4)
- Saída de voz para headset e alto-falante

## Especificação

- 2 x X-Power AC108 ADC
- 6 x microfones de alto desempenho
- 1 x X-Power AC101 DAC
- Saída de voz:
  - Conector de áudio para headset de 3,5 mm
  - Conector para alto-falante
- Compatível com cabeçalhos de 40 pinos do Raspberry Pi
- Microfones: MSM321A3729H9CP
- Sensibilidade: -22 dBFS (Omnidirecional)
- SNR: 59 dB
- Taxa Máxima de Amostragem: 48Khz

## Aplicações

- Alto-falante inteligente
- Sistemas inteligentes de assistente de voz
- Gravadores de voz
- Sistema de conferência por voz
- Equipamentos de comunicação para reuniões
- Robô de interação por voz
- Assistente de voz para carro
- Outros cenários que precisam de comando por voz

## Visão Geral de Hardware

**Diagrama do Sistema**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

:::note
Depois de conectar, certifique-se de usar um multímetro para determinar se a condução do circuito está conforme indicado na figura acima.
:::

## Desenho de Montagem

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>

## Primeiros Passos

### Hardware

**Pré-requisitos**

ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B ou 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Cabo Micro-USB](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Fone de ouvido ou Alto-falante                 x1

:::tip
Na verdade, o ReSpeaker 6-Mic Circular Array suporta Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 model B+, Raspberry Pi 3 A+ e Raspberry Pi 4; neste wiki estamos usando Raspberry Pi 3.
:::

**Conexão**

**Passo 1.**  Conecte o *ReSpeaker Voice Accessory HAT* com o *ReSpeaker 6-Mic Circular Array* através do Cabo Flat

**Passo 2.**  Conecte o *ReSpeaker Voice Accessory HAT* ao *Raspberry Pi* através do GPIO de 40 pinos

**Passo 3.**  Conecte o *fone de ouvido* ao *conector de áudio para headset de 3,5 mm* ou conecte o *alto-falante* ao *conector para alto-falante JST 2.0*

**Passo 4.**  Conecte o *Raspberry Pi* ao *PC* através do cabo micro-USB

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)

### Software

**Pré-requisitos**

*Plano A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Você precisa usar o *Putty* ou outras ferramentas *ssh* para se conectar ao seu Raspberry Pi. Antes de começar, certifique-se de:

1- Ativar a função *ssh* do seu Pi para permitir o acesso do Putty. Se você não souber como ativar o *ssh*, pesquise no Google `how to setup ssh raspberry pi`

2- Seu Raspberry Pi e seu PC estarem conectados na mesma rede WiFi. Se você não souber como configurar o WiFi, pesquise no Google `how to setup wifi raspberry pi`

3- Obter o endereço IP do seu Raspberry Pi; se você não souber como obter o endereço IP, consulte a [documentação oficial do Raspberry](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Usar o endereço IP para conectar o Raspberry Pi ao seu PC via serviço ssh do Putty.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Então, digite o nome de host e a senha. O ID padrão é `pi` e a senha é `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Agora você está dentro e pode digitar comandos no Putty e brincar com o seu Raspberry.

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

Para fazer este kit funcionar com Alexa ou DuerOS, você precisa abrir um site para obter a autorização. Então você precisa usar o *VNC Viewer* para entrar na sua conta da Amazon ou Baidu. Portanto, certifique-se de ter ativado o serviço *VNC* do seu Raspberry.

Ou você pode simplesmente considerar o plano B.

*Plano B*

Se você estiver cansado de tudo isso, pode simplesmente usar um monitor HDMI e conectar o teclado USB e o mouse USB ao seu Raspberry; também funciona, simples e fácil.

**Passo 1. Instalar seeed-voicecard**

Obtenha o código-fonte da placa de voz da Seeed e instale todos os drivers do kernel Linux.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh   
sudo reboot

```

**Passo 2. Verificar a Placa de Som**

Digite o comando abaixo para verificar o dispositivo de gravação.

```
pi@raspberrypi:~ $ arecord -L
```

Deve ser algo como:

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

Use o seguinte comando para verificar o dispositivo de reprodução.

```
pi@raspberrypi:~ $ aplay -L
```

Deve ser algo como:

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

**Passo 3. Gravar e Reproduzir**

Você pode gravar e depois reproduzir, ou pode gravar e reproduzir ao mesmo tempo.

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
Limitações para desenvolvedores que usam o Kit de Matriz Circular 6-Mic (ou Kit de Matriz Linear 4-Mics) para captura e reprodução ao mesmo tempo:

-1. a captura deve ser iniciada primeiro, caso contrário os canais de captura podem ficar desordenados.

-2. os canais de saída de reprodução devem ser preenchidos com dados de 8 canais iguais ou dados de 4 canais estéreo iguais, caso contrário o alto-falante ou fone de ouvido possivelmente não emitirá nada.

-3. Se você quiser reproduzir e gravar ao mesmo tempo, o arquivo de música do aplay deve ser mono, caso contrário você não poderá usar este comando para reproduzir.
:::

Você também pode reproduzir e gravar com o Audacity.

:::tip
Você deve abrir o Audacity via VNC ou pode simplesmente usar um monitor para abri-lo
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

### Brincar com os LEDs

Há 12 LEDs GRB no array circular de 6 microfones; você pode configurar os LEDs por conta própria, agora vamos ver como acendê-los.

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py

```

Você verá os LEDs acenderem e correrem. E você pode consultar o arquivo `python examples/respeaker_4mic_array.py` para criar seus próprios efeitos.

## Localização e Rastreamento da Fonte de Som em Tempo Real

[ODAS](https://github.com/introlab/odas) significa Open embeddeD Audition System. Esta é uma biblioteca dedicada a realizar localização, rastreamento, separação e pós-filtragem de fontes sonoras. Vamos nos divertir com ela.

- Passo 1. Obtenha o ODAS e compile-o.

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- Passo 2. Obtenha o [ODAS Studio](https://github.com/introlab/odas_web/releases) e abra-o.

- Passo 3. O odascore estará em **odas/bin/odaslive**, o **arquivo de configuração** está [aqui](https://raw.githubusercontent.com/xiongyihui/odas/master/config/odaslive/respeaker_6_mic_array.cfg).

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/odas.png)

## Extrair Voz

Usamos a [biblioteca PyAudio para python](https://people.csail.mit.edu/hubert/pyaudio/) para extrair voz.

- Passo 1, precisamos executar o seguinte script para obter o número de índice de dispositivo do 6 Mic Pi Hat:

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- Passo 2, copie o código abaixo e cole em get_index.py.

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- Passo 3, pressione Ctrl + X para sair e pressione Y para salvar.

- Passo 4, execute 'sudo python get_index.py' e veremos o ID do dispositivo como abaixo.

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

- Passo 5, mude `RESPEAKER_INDEX = 2` para o número de índice. Execute o script python record.py para gravar uma fala.

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

- Passo 6. Se você quiser extrair os dados do canal 0 de 8 canais, siga o código abaixo. Para outro canal X, altere [0::8] para [X::8].

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

### DOA com Palavras-chave

**Requisitos**

- pyaudio
- numpy
- snowboy

**Instalação**

Instale pyaudio, numpy e snowboy, use virtualenv, um ambiente virtual de python.

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

**Vamos dizer snowboy**

- Passo 1. Execute o kws_doa.py

```shell
cd ~/voice-engine/examples/respeaker_6mic_array_for_pi/
python kws_doa.py
```

Aqui está o código do kws_doa.py

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

- Passo 2. Vamos dizer snowboy e aqui está a saída do DOA.

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

## Botão

se você quiser verificar se o seu respeaker_6-Mic está instalado corretamente no raspberry. O botão é uma boa ideia. Podemos usar o código abaixo para verificar.

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

## FAQ

**P1: Há apenas 6 micros no Array de Microfones, como podem ser 8 canais?**

R1: Há 2 AC108 neste array, e cada chip AC108 tem saída de 4 canais. Então temos um total de 8 canais aqui, 6 dos quais são para o microfone, e os outros 2 são os canais de reprodução.

**P2: E se o Raspberry conseguir detectar o ReSpeaker 2-mics hat, mas não conseguir detectar o ReSpeaker 6-mics Circular array?**

A2: Clique em raspberry -> Preferences -> Raspberry Pi Configuration, depois selecione a aba Interfaces e certifique-se de que o 1-Wire está Disabled.

## Recursos

- **[PDF]** [AC101 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Dxf]** [Arquivo de case ReSpeaker Circular Array para Voice Accessory HAT com 6 microfones](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/ReSpeaker%20Circular%20Array%20for%20Voice%20Accessory%20HAT%20with%206%20Microphones.dxf)
- **[Dxf]** [Arquivo 2D ReSpeaker Circular Array para Voice Accessory HAT com 6 microfones](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/2d.zip)
- **[Driver]** [Driver Seeed-Voice](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algoritmos incluindo DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Projeto Voice Engine, fornece blocos de construção para criar objetos habilitados por voz](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
