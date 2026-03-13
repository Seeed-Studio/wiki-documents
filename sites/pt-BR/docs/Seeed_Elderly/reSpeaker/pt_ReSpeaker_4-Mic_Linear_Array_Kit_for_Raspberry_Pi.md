---
description: Kit de Array Linear ReSpeaker 4-Mic
title: reSpeaker 4-Mic Linear Array Kit
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi
sku: 107990056
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/
---

![enter image description here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg)

O Kit de Array Linear ReSpeaker 4-Mic da Seeed é uma placa de extensão, também conhecida como HAT, projetada para Raspberry Pi. É um kit de array linear de microfones, vem com quatro microfones e é projetado para aplicações de IA e voz. Isso significa que você pode construir um produto de voz mais poderoso e flexível com Raspberry Pi que pode integrar Amazon Alexa Voice Service, Google Assistant e assim por diante.

O Kit de Array Linear ReSpeaker 4-Mic para Raspberry Pi é composto por duas placas, uma é o HAT de acessório de voz e a outra é o array linear de quatro microfones.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

O Kit de Array Linear ReSpeaker 4-Mic para Raspberry Pi suporta 8 canais de entrada e 8 canais de saída no Raspberry Pi OS. Os primeiros 6 canais de entrada são para gravação de microfone (apenas os primeiros 4 canais de entrada possuem dados de captura válidos), os 2 canais de entrada restantes são canais de eco da reprodução. Os primeiros 2 canais de saída são para saída de som, os 6 canais de saída restantes são fictícios.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- 2 chips ADC e 1 chip DAC
- 8 canais de entrada e 8 canais de saída
- Array de quatro microfones
- Suporte Grove
- Compatível com Raspberry Pi (Suporta Raspberry Pi Zero e Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ e Raspberry Pi 4)
- Saída de voz para headset e alto-falante

## Especificação

- 2 x X-Power AC108 ADC
- 4 x microfones analógicos de alto desempenho
- 1 x X-Power AC101 DAC
- Saída de voz:
  - Conector de áudio para headset de 3,5 mm
  - Conector para alto-falante
- Compatível com cabeçalhos de 40 pinos do Raspberry Pi
- Microfones: MSM321A3729H9BP
- Sensibilidade: -22 dBFS (Omnidirecional)
- SNR: 59 dB
- Taxa Máxima de Amostragem: 48Khz

## Ideias de Aplicação

- Caixa de som inteligente
- Sistemas inteligentes de assistente de voz
- Gravadores de voz
- Sistema de conferência de voz
- Equipamentos de comunicação para reuniões
- Robô de interação por voz
- Assistente de voz para carro
- Outros cenários que precisam de comando de voz

## Visão geral do hardware

**Diagrama do Sistema**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg)

:::note
Após a conexão, lembre-se de usar um multímetro para verificar se a condução do circuito está conforme indicado na figura acima.
:::

## Desenho de montagem  

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

## Primeiros Passos

**Conectar o Array ReSpeaker 4-Mic ao Raspberry Pi**

**Passo 1.**  Conecte o *ReSpeaker Voice Accessory HAT* ao *ReSpeaker 4-Mic linear Array* por meio do cabo flat (Ribbon Cable)

**Passo 2.**  Conecte o *ReSpeaker Voice Accessory HAT* ao *Raspberry Pi* através do GPIO de 40 pinos

**Passo 3.**  Conecte o *fone de ouvido* ao *conector de áudio para headset de 3,5 mm* ou conecte o *alto-falante* ao *conector para alto-falante JST 2.0*

**Passo 4.**  Conecte o *Raspberry Pi* ao *PC* através do cabo micro-USB

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg)

### Software

**Passo 1. Instalar seeed-voicecard**

Obtenha o código-fonte da seeed voice card e instale todos os drivers do kernel Linux.

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh  
sudo reboot

```

**Passo 2. Verificar a placa de som**

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

Use o comando a seguir para verificar o dispositivo de reprodução.

```
pi@raspberrypi:~ $ aplay -L
```

Deve ser algo como:

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

**Passo 3. Gravar e Reproduzir**

Você pode gravar e depois reproduzir, ou pode gravar e reproduzir ao mesmo tempo.

```
#It will capture sound on AC108 and save as a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#Take care of that the captured mic audio is on the first 6 channels

#It will play sound file a.wav on AC101
aplay -D ac101 a.wav
#Do not use -D plughw:1,0 directly except your wave file is single channel only.

```

:::note
Limites para desenvolvedores que usam o 4-Mic Linear Array Kit fazendo captura e reprodução ao mesmo tempo:

-1. a captura deve ser iniciada primeiro, caso contrário os canais de captura poderão ficar desordenados.

-2. os canais de saída de reprodução devem ser preenchidos com dados de 8 canais iguais ou 4 canais estéreo iguais, caso contrário o alto-falante ou fone de ouvido possivelmente não emitirá nada.

-3. Se você quiser reproduzir e gravar ao mesmo tempo, o arquivo de música do aplay deve ser mono, caso contrário você não poderá usar esse comando para reproduzir.
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

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png)

## Visão geral de uso

Para executar os exemplos a seguir, clone o repositório [4mics_hat repository](https://github.com/respeaker/4mics_hat.git) no seu Raspberry Pi

```
git clone https://github.com/respeaker/4mics_hat.git
```

Todos os scripts Python mencionados nos exemplos abaixo podem ser encontrados dentro deste repositório. Para instalar as dependências necessárias, a partir da pasta do repositório mic_hat, execute

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### Gravar som com Python

Usamos a [biblioteca PyAudio para Python](https://people.csail.mit.edu/hubert/pyaudio/) para gravar som com Python.

Primeiro, execute o seguinte script para obter o número de índice de dispositivo do 2 Mic pi hat:

```
python3 recording_examples/get_device_index.py
```

Você verá o ID do dispositivo como abaixo.

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

Para gravar o som, abra o arquivo ```recording_examples/record.py``` com nano ou outro editor de texto e altere `RESPEAKER_INDEX = 2` para o número de índice do ReSpeaker no seu sistema. Em seguida, execute o script Python record.py para fazer uma gravação:

```
python3 recording_examples/record.py
```

- Passo 6. Se você quiser extrair os dados do canal 0 de 8 canais, dê uma olhada no conteúdo de ```record_one_channel.py```. Para outro canal X, altere [0::8] para [X::8].

```
python3 recording_examples/record_one_channel.py
```

Para reproduzir os samples gravados, você pode usar o utilitário de sistema aplay, por exemplo

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## FAQ

**P1: Há apenas 4 microfones no Mic Array, como isso pode ser 8 canais?**

R1: Existem 2 AC108 neste array, e cada chip AC108 possui 4 canais de saída. Portanto, há um total de 8 canais aqui, 4 dos quais são para o microfone, dois canais para a reprodução e os 2 canais restantes não são usados.

**P2: Se o Raspberry consegue detectar o ReSpeaker 2-mics hat, mas não consegue detectar o ReSpeaker 4-mics linear array?**

R2: Clique em raspberry -> Preferences -> Raspberry Pi Configuration, depois selecione a aba Interfaces e certifique-se de que o 1-Wire está Disabled.

## Recursos

- **[PDF]** [AC101 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Driver]** [Driver Seeed-Voice](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algoritmos incluindo DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Projeto Voice Engine, fornece blocos de construção para criar objetos habilitados por voz](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)
- **[Mechanical Drawing]** [Desenho 2D](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip)

## Projetos

[Mojing Mojing - A Smart Mirror with ReSpeaker!](https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20): Um espelho inteligente com controle de interface de voz via ReSpeaker. Também o conectamos com Wio Link para controlar outros objetos! Baseado em Raspberry Pi.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
