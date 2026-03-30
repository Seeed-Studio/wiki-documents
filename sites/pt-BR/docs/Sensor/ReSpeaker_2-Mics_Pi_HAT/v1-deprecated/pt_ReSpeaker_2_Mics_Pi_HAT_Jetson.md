---
description: Introdução ao Nvidia Jetson
title: Introdução ao Nvidia Jetson
keywords:
  - ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_2_Mics_Pi_HAT_Jetson
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT_Jetson/
---

:::caution
Este wiki foi escrito para ReSpeaker 2-Mics Pi HAT **v1**. Para diferenciar os dispositivos v1 e v2, consulte [How to Distinguish ReSpeaker 2-Mics Pi HAT Hardware Revisions](/pt-br/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

### Instalação e configuração do driver

**1. Conecte o ReSpeaker 2-Mics Pi HAT ao Jetson Nano**

Monte o ReSpeaker 2-Mics Pi HAT no seu Jetson Nano, certificando-se de que os pinos estejam devidamente alinhados ao empilhar o ReSpeaker 2-Mics Pi HAT.

Conexão do Jetson Nano

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

**2. Configure o driver no Jetson Nano**

Certifique-se de que você está executando [a imagem mais recente do sistema operacional do Jetson Nano](https://developer.nvidia.com/embedded/downloads) no seu dispositivo. *(atualizado em 2021.07.03)*

:::note
Isto foi testado para JetPack 4.5.1. Para outras versões, você precisará verificar o número da versão dos cabeçalhos do kernel com ```ls /usr/src/linux-headers-*```
:::

**ETAPA 1.** Clone o repositório

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd ~/seeed-linux-dtoverlays
```

**ETAPA 2.** Compile dtbo e o driver

```sh
export CUSTOM_MOD_FILTER_OUT="lis3lv02d mcp25xxfd gt9xx seeed-voicecard"
KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make all_jetsonnano
```

**ETAPA 3.** Instale o driver

```sh
sudo -E KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make install_jetsonnano
```

**ETAPA 4.** Instale o dtbo

```sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed Voice Card 2MIC"
```

**ETAPA 5.** Reinicie

```sh
sudo reboot
```

**ETAPA 6.** Restaure as configurações dos widgets Alsa

:::note
        Aguarde um momento, pois o cartão de som estará ocupado após o login.
:::

```sh
cd ~/seeed-linux-dtoverlays
alsactl -f extras/wm8960_asound.state-jetson-nano restore 1
```

**ETAPA 7.** Verifique se o nome da placa de som corresponde ao código-fonte seeed-voicecard com o comando ```aplay -l``` e ```arecord -l```.

```
jetson@jetson:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: tegrahda [tegra-hda], device 3: HDMI 0 [HDMI 0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 0/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0


jetson@jetson:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

- Etapa 3. Teste, você ouvirá o que disser aos microfones (não se esqueça de conectar um fone de ouvido ou um alto-falante):

```
arecord -f cd -Dhw:1 test.wav
aplay -Dhw:1 test.wav
```

ou (para reproduzir o som do microfone imediatamente nos alto-falantes/fones de ouvido):

```sh
arecord -D hw:1,0 -f S32_LE -r 48000 -c 2 | aplay -D hw:1,0 -f S32_LE -r 48000 -c 2
```

**Nota:** -Dhw:1 é o número do dispositivo de gravação (ou reprodução); dependendo do seu sistema, esse número pode ser diferente.

## Visão geral de uso

Para executar os exemplos a seguir, clone o repositório [https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) no seu Jetson Nano

```
git clone https://github.com/respeaker/mic_hat.git
```

Todos os scripts Python mencionados nos exemplos abaixo podem ser encontrados dentro deste repositório. Para instalar as dependências necessárias, a partir da pasta do repositório mic_hat, execute

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install Jetson.GPIO spidev pyaudio
```

**LEDs APA102**

Cada LED APA102 on-board possui um chip driver adicional. O chip driver se encarrega de receber a cor desejada por meio de suas linhas de entrada e então manter essa cor até que um novo comando seja recebido.

```
python3 interfaces/pixels.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker/img/IMG_20210703_125819.jpg"/></div>

### Gravar som com Python

Usamos a [biblioteca Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para gravar som com Python.

Primeiro, execute o script a seguir para obter o número de índice de dispositivo do 2 Mic Pi HAT:

```
python3 recording_examples/get_device_index.py
```

Você verá o ID do dispositivo como abaixo.

```
Input Device id  1  -  tegra-snd-t210ref-mobile-rt565x: - (hw:1,1)
```

Para gravar o som, abra o arquivo ```recording_examples/record.py``` com nano ou outro editor de texto e altere `RESPEAKER_INDEX = 1` para o número de índice do ReSpeaker no seu sistema. Em seguida, execute o script Python record.py para fazer uma gravação:

```
python3 recording_examples/record.py
```

Se você quiser extrair os dados do canal 0 de 2 canais, dê uma olhada no conteúdo de ```record_one_channel.py```. Para o outro canal X, altere [0::2] para [X::2].

```
python3 recording_examples/record_one_channel.py
```

Para reproduzir as amostras gravadas você pode usar o utilitário de sistema aplay, por exemplo

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
```
