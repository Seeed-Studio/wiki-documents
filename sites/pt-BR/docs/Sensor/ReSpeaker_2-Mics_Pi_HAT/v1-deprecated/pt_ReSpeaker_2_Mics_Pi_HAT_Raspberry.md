---
description: Primeiros passos com Raspberry Pi
title: Primeiros passos com Raspberry Pi
keywords:
  - ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /ReSpeaker_2_Mics_Pi_HAT_Raspberry
sku: 102110358
last_update:
  date: 1/29/2026
  author: Mingxi
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT_Raspberry/
---

:::caution
Este wiki foi escrito para o ReSpeaker 2-Mics Pi HAT **v1**; para distinguir o dispositivo v1 do v2, consulte [How to Distinguish ReSpeaker 2-Mics Pi HAT Hardware Revisions](/pt-br/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

### Instalação e configuração do driver

**1. Conecte o ReSpeaker 2-Mics Pi HAT ao Raspberry Pi**

Monte o ReSpeaker 2-Mics Pi HAT no seu Raspberry Pi, certificando-se de que os pinos estejam devidamente alinhados ao empilhar o ReSpeaker 2-Mics Pi HAT.

Conexão com Raspberry Pi

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Conexão com Raspberry Pi Zero

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

**2. Configure o driver no Raspberry Pi**

Certifique-se de que esteja executando [a versão mais recente do Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) no seu Pi. *(atualizado em 2021.05.01)*

- Passo 1: Obtenha o Device Tree Source (DTS) para o ReSpeaker 2-Mics Pi HAT (V1.0), compile-o e instale o device tree overlay.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git  
cd seeed-linux-dtoverlays/  
make overlays/rpi/respeaker-2mic-v1_0-overlay.dtbo  
sudo cp overlays/rpi/respeaker-2mic-v1_0-overlay.dtbo /boot/firmware/overlays/respeaker-2mic-v1_0.dtbo  
echo "dtoverlay=respeaker-2mic-v1_0" | sudo tee -a /boot/firmware/config.txt  
```


- Passo 2: Reinicie o seu Pi.

```bash
sudo reboot
```


<!--
:::note
If your raspberry pi Linux kernel version is [rpi-6.6.y](https://github.com/raspberrypi/linux/tree/rpi-6.6.y) (like Raspberry Pi 5), you may encounter build errors due to changes in simple_card_utils.h[simple_card_utils.h](https://github.com/raspberrypi/linux/blob/rpi-6.6.y/include/sound/simple_card_utils.h), To fix this, make the following changes to seeed-voicecard.c.

- open the file seeed-voicecard/seeed-voicecard.c
- Replace all instances of "simple_util_" prefix with "asoc_simple_"
- Replace all instances of: "rtd->id" with "rtd->num"
- Save and exit
- Install again and reboot

```bash
sudo ./install.sh
sudo reboot now
```
:::
-->

- Passo 3. Verifique se o nome da placa de som corresponde ao código-fonte seeed-voicecard com o comando ```aplay -l``` e ```arecord -l```.

```shell
pi@raspberrypi:~/Desktop/mic_hat $ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: Headphones [bcm2835 Headphones], device 0: bcm2835 Headphones [bcm2835 Headphones]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 1: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

pi@raspberrypi:~/Desktop/mic_hat $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- Passo 4. Teste: você ouvirá o que disser nos microfones (não se esqueça de conectar um fone de ouvido ou um alto-falante):

```bash
arecord -D "plughw:3,0" -f S16_LE -r 16000 -d 5 -t wav test.wav
aplay -D "plughw:3,0" test.wav
```

**Nota:**  "plughw:3,0" é o número do dispositivo de gravação (ou reprodução); dependendo do seu sistema esse número pode ser diferente (por exemplo, no Raspberry Pi 0 será 0, já que ele não tem saída de áudio). Podemos encontrá-lo via "arecord -l" e "aplay -l".

**3. Configure as definições de som e ajuste o volume com alsamixer**

**alsamixer** é um programa de mixer gráfico para o Advanced Linux Sound Architecture (ALSA) usado para configurar definições de som e ajustar o volume.

```bash
pi@raspberrypi:~ $ alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

As setas Esquerda e Direita são usadas para selecionar o canal ou dispositivo e as setas Para Cima e Para Baixo controlam o volume do dispositivo atualmente selecionado. Saia do programa com ALT+Q ou pressionando a tecla Esc. [Mais informações](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    Use a tecla F6 para selecionar primeiro o dispositivo seeed-2mic-voicecard.
:::

## Visão geral de uso

Para executar os exemplos a seguir, clone o repositório [https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) no seu Raspberry Pi

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

Todos os scripts Python mencionados nos exemplos abaixo podem ser encontrados dentro deste repositório. Para instalar as dependências necessárias, a partir da pasta do repositório mic_hat, execute

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**LEDs APA102**

Cada LED APA102 integrado possui um chip driver adicional. O chip driver cuida de receber a cor desejada por meio de suas linhas de entrada e manter essa cor até que um novo comando seja recebido.

```bash
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
</video>

**Botão de Usuário**

Há um botão de usuário integrado, que está conectado ao GPIO17. Agora vamos tentar detectá-lo com Python e RPi.GPIO.

Execute o seguinte código a partir da pasta do repositório mic_hat, que você clonou no Passo 4.

```bash
python3 interfaces/button.py
```

Ele deve exibir "on" quando você pressionar o botão:

```bash
python3 button.py
```

Saída semelhante a

```txt
pi@raspberrypi:~ $ python3 button.py
off
off
on
on
off
```

### Gravar som com Python

Usamos a [biblioteca Python PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para gravar som com Python.

Primeiro, execute o seguinte script para obter o número de índice do dispositivo do 2 Mic Pi HAT:

```bash
python3 recording_examples/get_device_index.py
```

Você verá o ID do dispositivo como abaixo.

```bash
Input Device id  2  -  seeed-2mic-voicecard: - (hw:1,0)
```

Para gravar o som, abra o arquivo ```recording_examples/record.py``` com nano ou outro editor de texto e altere `RESPEAKER_INDEX = 2` para o número de índice do ReSpeaker no seu sistema. Em seguida, execute o script Python record.py para fazer uma gravação:

```bash
python3 recording_examples/record.py
```

Se quiser extrair os dados do canal 0 dentre 2 canais, veja o conteúdo de ```record_one_channel.py```. Para outro canal X, altere [0::2] para [X::2].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproduzir os samples gravados, você pode usar o utilitário de sistema aplay, por exemplo

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
aplay -D plughw:1,0 output_one_channel.wav #for Mono sound from one channel
```

Como alternativa, você pode usar o script recording_examples/play.py para reproduzir os arquivos .wav com PyAudio.

```bash
python3 recording_examples/play.py path-to-wav-file
```

Certifique-se de especificar o índice correto do dispositivo de saída em play.py – caso contrário o PyAudio irá travar!

### Picovoice com ReSpeaker 2-Mic Pi HAT e Raspberry Pi

**Passo 1.** Siga o **tutorial passo a passo acima do ReSpeaker 2-Mic Pi HAT com Raspberry Pi** antes do que se segue.

**Nota:** Certifique-se de que os LEDs `APA102` estejam funcionando corretamente no ReSpeaker 2-Mic Pi HAT com Raspberry Pi.

**Passo 2.** Digite o seguinte comando no terminal para **instalar o demo Picovoice para o ReSpeaker 2-Mic Pi HAT**.

```bash
pip3 install pvrespeakerdemo
```

**Nota:** Em uma instalação nova do Raspberry Pi OS, você pode notar o seguinte aviso ao instalar este demo:
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

Isso significa que, para executar o demo, você precisa adicionar /home/pi/.local/bin ao PATH do seu sistema:

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

#### Uso do Demo

O demo utiliza o ReSpeaker 2-Mic Pi HAT em um Raspberry Pi com a tecnologia Picovoice para controlar os LEDs. **Este demo é acionado pela palavra de ativação "`Picovoice`" e ficará pronto para executar ações em seguida, como ligar e desligar os LEDs e mudar as cores dos LEDs.**

Depois que a instalação for concluída, digite este comando no terminal para executar o demo:

```sh
picovoice_respeaker_demo
```

#### Comandos de voz

Aqui estão os comandos de voz para este demo:

- **Picovoice**

O demo gera a saída:

```txt
wake word
```

- **Turn on the lights**

Você deverá ver as luzes acesas e a seguinte mensagem no terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

A lista de comandos é mostrada no terminal:

```yaml
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

além disso, você pode tentar este comando para mudar a cor:

- **Picovoice, set the lights to orange**

Desligue as luzes com:

- **Picovoice, turn off all lights**

**Demonstração em vídeo do Demo**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/mPfZZQXjWMI" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

#### Código-fonte do Demo

O demo é construído com o **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. O código-fonte do demo está disponível no GitHub em [https://github.com/Picovoice/picovoice/tree/master/demo/respeaker](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker).

#### Diferentes Palavras de Ativação

O [**Picovoice SDK**](https://github.com/Picovoice/picovoice) inclui palavras de ativação de exemplo gratuitas licenciadas sob Apache 2.0, incluindo os principais assistentes de voz (por exemplo, "**`Hey Google`**", "**`Alexa`**") e algumas divertidas como "**`Computer`**" e "**`Jarvis`**".

#### Comandos de Voz Personalizados

Os comandos de iluminação são definidos por um *contexto de Fala‑para‑Intenção* (Speech-to-Intent) do Picovoice. Você pode criar e treinar contextos digitando a gramática permitida usando o Picovoice Console. Você pode testar suas alterações no navegador enquanto edita, usando o botão do microfone. Acesse o Picovoice Console ([https://picovoice.ai/console/](https://picovoice.ai/console/)) e crie uma conta. Use o **Rhino Speech-to-Intent editor** para criar contextos e, em seguida, treiná‑los para o Raspberry Pi.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Exemplos de Múltiplas Palavras de Ativação

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/GqxWHoQ560g" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Porcupine

**Porcupine** é um mecanismo de palavra de ativação altamente preciso e leve. Ele permite criar aplicações com reconhecimento de voz sempre ativo
aplicações. Ele é

- baseado em redes neurais profundas treinadas em ambientes do mundo real.
- compacto e computacionalmente eficiente. É perfeito para IoT.
- multiplataforma. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64) e
  navegadores web são suportados. Além disso, clientes corporativos têm acesso ao SDK para ARM Cortex-M.
- escalável. Ele pode detectar vários comandos de voz sempre ativos sem aumentar o uso de recursos em tempo de execução.
- autoatendimento. Desenvolvedores podem treinar modelos de palavra de ativação personalizados usando o [Picovoice Console](https://picovoice.ai/console/).

Para demonstrar a capacidade do Picovoice, também preparamos alguns exemplos de múltiplas palavras de ativação usando o ReSpeaker 2-Mic Pi HAT com Raspberry Pi! Diferentes palavras de ativação podem ser configuradas para executar determinadas tarefas.

*Este pacote contém uma demonstração de linha de comando para controlar os LEDs do ReSpeaker 2-Mic Pi HAT usando o Porcupine.*

#### Introdução ao Multi Wake Word

Execute o seguinte comando no terminal para instalar o driver de demonstração:

```sh
pip3 install ppnrespeakerdemo
```

#### Uso do Multi Wake Word

Execute o seguinte no terminal após a instalação do driver:

```sh
porcupine_respeaker_demo
```

Aguarde a inicialização da demonstração e a impressão de `[Listening]` no terminal. Diga:

> Picovoice

A demonstração exibe:

```text
detected 'Picovoice'
```

As luzes agora estão definidas para `green`. Diga:

> Alexa

As luzes agora estão definidas para `yellow`. Diga:

> Terminator

para apagar as luzes.

#### Palavras de Ativação para Cores

Abaixo estão as cores associadas às palavras de ativação compatíveis para esta demonstração:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código-Fonte de Exemplo de Múltiplas Palavras de Ativação

Consulte o código-fonte completo deste exemplo aqui: [https://github.com/Picovoice/porcupine/tree/master/demo/respeaker](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker).

## Detecção de Palavras‑Chave com ReSpeaker 2-Mic Pi HAT e Mycroft Precise

Mycroft Precise é um mecanismo de detecção de palavra‑chave completamente de código aberto. Embora tenha funcionalidades mais limitadas em comparação com o Picovoice, ele também possui uma licença mais permissiva (Apache 2.0), que permite modificação e redistribuição, incluindo fechada e comercial, desde que a licença seja preservada.

Para começar a usar o Mycroft Precise, instale a versão estável mais recente do fork do Mycroft Precise da Seeed:

```bash
sudo apt-get install libatlas-base-dev
pip3 install git+https://github.com/respeaker/mycroft_runner_simple.git
```

**Nota:** Em uma instalação nova do Raspberry Pi OS, você pode notar o seguinte aviso ao instalar esta demonstração:
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

Isso significa que, para executar a demonstração, você precisa adicionar /home/pi/.local/bin ao PATH do seu sistema:

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Em seguida, você pode testar a instalação do Mycroft Precise simplesmente executando

```bash
mycroft-precise --model hey-mycroft
```

Se você quiser integrar o Mycroft Precise ao seu próprio projeto, consulte o arquivo README do repositório no Github para mais informações sobre a API.

## Assistente Inteligente com ReSpeaker 2-Mic Pi HAT e Mycroft Core

Mycroft é um assistente de voz open source hackeável. Ele é semelhante em funcionalidade ao Amazon Alexa ou Google Assistant, mas possui uma licença mais permissiva (Apache 2.0), que permite modificação e redistribuição, incluindo fechada e comercial, desde que a licença seja preservada.

**Esta seção está em desenvolvimento no momento, adicionaremos mais detalhes sobre o uso do Mycroft Core com o Respeaker**

## Introdução ao Picovoice com ReSpeaker 2-Mic Pi HAT e Raspberry Pi Zero

**Passo 1.** Instale os drivers e configure o dispositivo conforme descrito em **Instalação e configuração do driver**.

Depois, execute git clone no repositório do Picovoice no GitHub:

```bash
git clone --recurse-submodules https://github.com/Picovoice/picovoice.git
cd picovoice
```

**Nota:** Certifique‑se de que os LEDs `APA102` estão funcionando corretamente no ReSpeaker 2-Mic Pi HAT com Raspberry Pi Zero.

**Passo 2.** Instale a biblioteca `wiringpi` digitando o seguinte no terminal.

```sh
sudo apt-get install wiringpi
```

**Passo 3.** A partir da raiz do repositório, digite o seguinte comando no terminal para **instalar a demonstração Picovoice para o ReSpeaker 2-Mic Pi HAT**.

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/picovoice_demo_mic \
-I sdk/c/include/ demo/respeaker-rpi0/picovoice_demo_mic.c \
-ldl -lasound -lwiringPi
```

### Uso da Demonstração

A demonstração utiliza o ReSpeaker 2-Mic Pi HAT em um Raspberry Pi Zero com a tecnologia Picovoice para controlar os LEDs. **Esta demonstração é acionada pela palavra de ativação "`Picovoice`" e ficará pronta para executar ações subsequentes, como ligar e desligar os LEDs e alterar as cores dos LEDs.**

Depois que a instalação terminar, digite este comando a partir da raiz do repositório para executar a demonstração no terminal:

```sh
./demo/respeaker-rpi0/picovoice_demo_mic \
sdk/c/lib/raspberry-pi/arm11/libpicovoice.so \
resources/porcupine/lib/common/porcupine_params.pv \
resources/porcupine/resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
0.65 \
resources/rhino/lib/common/rhino_params.pv \
demo/respeaker/pvrespeakerdemo/respeaker_raspberry-pi.rhn \
0.5 \
plughw:CARD=seeed2micvoicec,DEV=0
```

### Comandos de Voz

Aqui estão os comandos de voz para esta demonstração:

- **Picovoice**

A demonstração exibe:

```txt
wake word
```

- **Turn on the lights**

Você deverá ver as luzes acenderem e a seguinte mensagem no terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

A lista de comandos é exibida no terminal:

```yaml
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

além disso, você pode tentar este comando para mudar a cor:

- **Picovoice, set the lights to orange**

Desligue as luzes com:

- **Picovoice, turn off all lights**

**Demonstração em Vídeo**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/X12N2Rn-q5o" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Código-Fonte da Demonstração

A demonstração é construída com o **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. O código-fonte da demonstração está disponível no GitHub em [https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0).

### Diferentes Palavras de Ativação

O [**Picovoice SDK**](https://github.com/Picovoice/picovoice) inclui palavras de ativação de exemplo gratuitas licenciadas sob Apache 2.0, incluindo os principais assistentes de voz (por exemplo, "**`Hey Google`**", "**`Alexa`**") e algumas divertidas como "**`Computer`**" e "**`Jarvis`**".

### Comandos de Voz Personalizados

Os comandos de iluminação são definidos por um *contexto de Fala‑para‑Intenção* (Speech-to-Intent) do Picovoice. Você pode criar e treinar contextos digitando a gramática permitida usando o Picovoice Console. Você pode testar suas alterações no navegador enquanto edita, usando o botão do microfone. Acesse o Picovoice Console ([https://picovoice.ai/console/](https://picovoice.ai/console/)) e crie uma conta. Use o **Rhino Speech-to-Intent editor** para criar contextos e, em seguida, treiná‑los para o Raspberry Pi Zero.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Exemplos de Múltiplas Palavras de Ativação

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Fi_IJEcNr3I" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Para demonstrar a capacidade do Picovoice, também preparamos alguns exemplos de múltiplas palavras de ativação usando o ReSpeaker 2-Mic Pi HAT com Raspberry Pi Zero! Diferentes palavras de ativação podem ser configuradas para executar determinadas tarefas.

*Este pacote contém uma demonstração de linha de comando para controlar os LEDs do ReSpeaker 2-Mic Pi HAT usando o Porcupine.*

### Porcupine

**Porcupine** é um engine de palavra de ativação altamente preciso e leve. Ele possibilita criar aplicativos com voz
sempre escutando. Ele é

- baseado em redes neurais profundas treinadas em ambientes do mundo real.
- compacto e computacionalmente eficiente. É perfeito para IoT.
- multiplataforma. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64) e
  navegadores web são compatíveis. Além disso, clientes corporativos têm acesso ao SDK para ARM Cortex-M.
- escalável. Ele pode detectar vários comandos de voz sempre ativos sem aumento no tamanho de execução.
- autoatendimento. Desenvolvedores podem treinar modelos de palavra de ativação personalizados usando o [Picovoice Console](https://picovoice.ai/console/).

#### Introdução ao Multi Wake Word

**Passo 1** Instale a biblioteca `wiringpi` (se ainda não tiver instalado) digitando o seguinte no terminal.

```sh
sudo apt-get install wiringpi
```

Em seguida, faça o git clone do repositório do Picovoice no GitHub:

```bash
git clone --recurse-submodules https://github.com/Picovoice/porcupine.git
cd picovoice
```

**Passo 2.** A partir da raiz do repositório, digite o seguinte comando no terminal para **instalar a demonstração do Porcupine para o ReSpeaker 2-Mic Pi HAT**.

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/porcupine_demo_mic \
-I include/ demo/respeaker-rpi0/porcupine_demo_mic.c \
-ldl -lasound -lwiringPi
```

#### Uso do Multi Wake Word

Execute o seguinte no terminal a partir da raiz do repositório:

```sh
./demo/respeaker-rpi0/porcupine_demo_mic \
lib/raspberry-pi/arm11/libpv_porcupine.so \
lib/common/porcupine_params.pv \
0.65 \
plughw:CARD=seeed2micvoicec,DEV=0 \
resources/keyword_files/raspberry-pi/alexa_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/computer_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ google_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ siri_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/jarvis_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/porcupine_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/bumblebee_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/terminator_raspberry-pi.ppn
```

Aguarde a inicialização da demonstração e que seja impresso `[Listening]` no terminal. Diga:

> Picovoice

A demonstração gera a seguinte saída:

```text
detected 'Picovoice'
```

As luzes agora estão definidas para `green`. Diga:

> Alexa

As luzes agora são configuradas para `yellow`. Diga:

> Terminator

para desligar as luzes.

#### Palavras de Ativação para Cores

Abaixo estão as cores associadas às palavras de ativação compatíveis para esta demonstração:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código-fonte de Exemplo com Múltiplas Palavras de Ativação

Consulte o código-fonte completo deste exemplo aqui: [https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0).

### Suporte Técnico Picovoice

Se você encontrar problemas técnicos ao usar o Picovoice, visite **[Picovoice](https://github.com/Picovoice)** para discussões.

## FAQ

**Q1: Erro #include "portaudio.h" ao executar "sudo pip install pyaudio".**

A1: Execute o comando abaixo para resolver o problema.

```bash
sudo apt-get install portaudio19-dev
```

**Q2: Como alterar a fonte de Mirrors do Raspbian?**

A2: Consulte [Raspbian Mirrors](http://www.raspbian.org/RaspbianMirrors) e siga as instruções abaixo para modificar a fonte no início.

```bash
pi@raspberrypi ~ $ sudo nano /etc/apt/sources.list
```

Por exemplo, sugerimos usar a fonte de Tsinghua para usuários na China. Portanto, modifique o sources.list como abaixo.

```d
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
```
