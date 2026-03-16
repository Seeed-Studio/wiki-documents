---
description: Primeiros passos com Raspberry Pi
title: Primeiros passos com Raspberry Pi
keywords:
  - ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /respeaker_2_mics_pi_hat_raspberry_v2
last_update:
  date: 01/29/2026
  author: Mingxi
createdAt: '2024-12-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_2_mics_pi_hat_raspberry_v2/
---

:::caution
Este wiki foi escrito para o ReSpeaker 2-Mics Pi HAT **v2**; para diferenciar os dispositivos v1 e v2, consulte [How to Distinguish ReSpeaker 2-Mics Pi HAT Hardware Revisions](/pt-br/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

No Raspberry Pi OS mais recente, o método tradicional de instalação de driver (para dispositivo v1) não está mais disponível e pode levar aos seguintes problemas conhecidos:

- O ambiente de área de trabalho pode ser corrompido após a instalação.
- O dispositivo ReSpeaker pode não ser detectado por `aplay` / `arecord`.

Portanto, relançamos um novo wiki sobre este problema; se você estiver usando uma versão mais moderna do Raspberry Pi OS em vez de versões anteriores, siga estas etapas para fazer seu ReSpeaker funcionar.

## Instalação e configuração do driver

### 1. Conectar o ReSpeaker 2-Mics Pi HAT ao Raspberry Pi

Monte o ReSpeaker 2-Mics Pi HAT no seu Raspberry Pi, certificando-se de que os pinos estejam devidamente alinhados ao empilhar o ReSpeaker 2-Mics Pi HAT.

Conexão com Raspberry Pi

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Conexão com Raspberry Pi Zero

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

### 2. Configurar o driver no Raspberry Pi

Certifique-se de que você esteja executando [o Raspberry Pi OS mais recente](https://www.raspberrypi.com/software/operating-systems/) no seu Pi. *(atualizado em 19.11.2024)*
<details>
<summary style={{ color: 'red' }}>Preparar para Raspberry Pi Zero W</summary>

```sh
## Install kernel 
sudo apt install flex bison libssl-dev bc build-essential libncurses5-dev libncursesw5-dev linux-headers-6.6.51+rpt-rpi-v6
git clone --depth=1 --branch rpi-6.6.y https://github.com/raspberrypi/linux.git

## Make target directory
mkdir ~/tlv320aic3x_i2c_driver
cd ~/tlv320aic3x_i2c_driver
## Copy code
cp ~/linux/sound/soc/codecs/tlv320aic3x.c ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x.h ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x-i2c.c ~/tlv320aic3x_i2c_driver/
## Modify Makefile
nano Makefile
-------------------
obj-m += snd-soc-tlv320aic3x-i2c.o
snd-soc-tlv320aic3x-i2c-objs := tlv320aic3x.o tlv320aic3x-i2c.o

KDIR := /lib/modules/$(shell uname -r)/build
PWD := $(shell pwd)

all:
        $(MAKE) -C $(KDIR) M=$(PWD) modules

clean:
        $(MAKE) -C $(KDIR) M=$(PWD) clean

install:
        sudo cp snd-soc-tlv320aic3x-i2c.ko /lib/modules/$(shell uname -r)/kernel/sound/soc/codecs/
        sudo depmod -a

-------------------

## Compile the driver 
make
sudo make install
sudo modprobe snd-soc-tlv320aic3x-i2c

## Check logs
lsmod | grep tlv320
dmesg | grep tlv320

```

</details>

- Etapa 1: Obter o Device Tree Source (DTS) para o ReSpeaker 2-Mics Pi HAT (V2.0), compilá-lo e instalar o device tree overlay.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git  
cd seeed-linux-dtoverlays/  
make overlays/rpi/respeaker-2mic-v2_0-overlay.dtbo  
sudo cp overlays/rpi/respeaker-2mic-v2_0-overlay.dtbo /boot/firmware/overlays/respeaker-2mic-v2_0.dtbo  
echo "dtoverlay=respeaker-2mic-v2_0" | sudo tee -a /boot/firmware/config.txt 
```


> **Observação:** Se a versão do seu kernel for superior a 4.0, você não precisa adicionar `dtoverlay=i2s-mmap`.

![config example](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/dtoverlays.png)

- Etapa 2: Reinicie o seu Pi.

```bash
sudo reboot
```

- Etapa 3: Verifique se o dispositivo é detectado por `aplay` / `arecord`.

A saída esperada para `aplay` deve ser:

```
$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

A saída esperada para `arecord` deve ser:

```
$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**Onde `card 2` é o índice do ReSpeaker 2-Mics Pi HAT; dependendo do seu sistema, esse número pode ser diferente. Para acessar o ReSpeaker neste exemplo, você pode usar `arecord -D plughw:2,0` ou `aplay -D plughw:2,0`.**

### 3. Configurar as definições de som e ajustar o volume com alsamixer

`alsamixer` é um mixer com interface de usuário em terminal para o Advanced Linux Sound Architecture (ALSA), usado para configurar definições de som e ajustar o volume.

```bash
alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

As setas esquerda e direita são usadas para selecionar o canal ou dispositivo e as setas para cima e para baixo controlam o volume do dispositivo selecionado no momento. Saia do programa com ALT+Q ou pressionando a tecla Esc. [Mais informações](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    Use F6 para selecionar primeiro o dispositivo seeed-2mic-voicecard.
:::

## Visão geral de uso

Para começar, clone o repositório [https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) no seu Raspberry Pi.

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

Todos os scripts Python mencionados nos exemplos abaixo podem ser encontrados dentro deste repositório. Para instalar as dependências necessárias, a partir da pasta do repositório mic_hat, execute

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### LEDs APA102

Para usar os LEDs, você precisa habilitar primeiro a interface SPI. Para habilitar a interface SPI, abra a ferramenta de configuração de software do Raspberry Pi:

```bash
sudo raspi-config
```

Escolha "3 Interface Options" -> "I4 SPI" para habilitar a interface SPI. Em seguida, reinicie o seu Raspberry Pi.

```bash
sudo reboot
```

Cada LED APA102 on-board possui um chip driver adicional. O chip driver é responsável por receber a cor desejada através de suas linhas de entrada e mantê-la até que um novo comando seja recebido.

```bash
cd mic_hat
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
</video>

### Botão de Usuário

Há um Botão de Usuário on-board, conectado ao GPIO_17.

:::caution
    O código de demonstração do repositório não está disponível para o Raspberry Pi 5 devido à incompatibilidade com `RPI.GPIO`. Mas fornecemos um código de demonstração alternativo para o Raspberry Pi 5 usando a biblioteca `gpiozero`.
:::

#### Dispositivo que não seja Raspberry Pi 5

Execute o script de exemplo do repositório que você clonou na Etapa 4; ele deve exibir "on" quando você pressionar o botão:

```txt
$ python3 button.py
off
off
on
on
off
```

#### Dispositivo Raspberry Pi 5

Copie o código a seguir e salve-o em `~/button.py`:

```python
from gpiozero import DigitalInputDevice
from time import sleep

def main():
    pin = DigitalInputDevice(pin=17, pull_up=True)
    try:
        while True:
            print("on" if pin.value == 1 else "off")
            sleep(1)
    finally:
        pin.close()

if __name__ == '__main__':
    main()
```

Ele também deve exibir "on" quando você pressionar o botão:

```bash
$ python3 ~/button.py
off
on
on
off
on
off
```

:::note
Ele não funciona em um ambiente virtual; você precisa sair dele primeiro:

```bash
deactivate
python3 ~/button.py
```

:::

### Gravar som com Python

Usamos a [biblioteca Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para gravar som com Python.

Primeiro, execute o seguinte script para obter o número de índice de dispositivo do ReSpeaker:

```bash
cd mic_hit
python3 recording_examples/get_device_index.py
```

Você verá o ID do dispositivo como abaixo.

```bash
Input Device id  1  -  seeed2micvoicec: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 (hw:2,0)
```

Para gravar o som, abra o arquivo ```recording_examples/record.py``` com `nano`, `vim` ou outro editor de texto e altere `RESPEAKER_INDEX = 2` para o número de índice do ReSpeaker no seu sistema. Em seguida, execute o script Python `record.py` para fazer uma gravação:

```bash
python3 recording_examples/record.py
```

Se você quiser extrair os dados do canal 0 de 2 canais, dê uma olhada no conteúdo de ```record_one_channel.py```. Para outro canal X, altere [0::2] para [X::2].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproduzir as amostras gravadas, você pode usar o utilitário de sistema aplay, por exemplo

```bash
aplay -f cd -D hw:2,0 output.wav # for Stereo sound
aplay -D plughw:2,0 output_one_channel.wav #for Mono sound from one channel
```

Como alternativa, você pode usar o script recording_examples/play.py para reproduzir os arquivos .wav com PyAudio.

```bash
python3 recording_examples/play.py path-to-wav-file
```

Certifique-se de especificar o índice correto do dispositivo de saída em play.py – caso contrário, o PyAudio irá travar!

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
