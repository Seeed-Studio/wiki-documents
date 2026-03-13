---
description: ReSpeaker 4-Mic Array para Raspberry Pi
title: reSpeaker 4-Mic Array para Raspberry Pi
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_4_Mic_Array_for_Raspberry_Pi
sku: 103030216
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/
---


![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array para Raspberry Pi é uma placa de expansão com quatro microfones para Raspberry Pi projetada para aplicações de IA e voz. Isso significa que podemos construir um produto de voz mais poderoso e flexível que integre Amazon Alexa Voice Service, Google Assistant e assim por diante.

Diferente da [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), esta placa é desenvolvida com base no AC108, um ADC de quatro canais altamente integrado com saída I2S/TDM para captura de voz em alta definição, o que permite ao dispositivo captar sons em um raio de 3 metros. Além disso, esta versão com 4 microfones possui um anel de LED com 12 LEDs programáveis APA102. Com esses 4 microfones e o anel de LED, o Raspberry Pi terá a capacidade de fazer VAD (Detecção de Atividade de Voz), estimar DOA (Direção de Chegada), fazer KWS (Busca por Palavra-chave) e mostrar a direção via anel de LED, assim como o Amazon Echo ou Google Home.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IkSfBSf1IRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

## Recursos

- Compatível com Raspberry Pi (suporta Raspberry Pi Zero e Zero W, Raspberry PiB+, Raspberry Pi 2B, Raspberry Pi 3B, Raspberry Pi 3B+, Raspberry Pi3 A+ e Raspberry Pi 4B)
- 4 Microfones
- Captura de voz em um raio de 3 metros
- 2 Interfaces Grove
- 12 LEDs de Usuário APA102
- Algoritmos de Software: VAD (Detecção de Atividade de Voz), DOA (Direção de Chegada) e KWS (Busca por Palavra-chave)

Nota: Não há interface de saída de áudio na ReSpeaker 4-Mic Array para Raspberry Pi. Ela é apenas para captura de voz. Podemos usar o [conector de fone de ouvido](https://www.raspberrypi.org/documentation/configuration/audio-config.md) no Raspberry Pi para saída de áudio.

## Ideias de Aplicação

- Aplicação de Interação por Voz
- Assistente de IA

## Visão Geral do Hardware

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 microfones analógicos
- LED: 12 LEDs RGB programáveis APA102, conectados à interface SPI
- Headers de 40 pinos do Raspberry Pi: compatível com Raspberry Pi Zero e Zero W, Raspberry PiB+, Raspberry Pi 2B, Raspberry Pi 3B, Raspberry Pi 3B+, Raspberry Pi3 A+ e Raspberry Pi 4
- AC108: ADC de quatro canais altamente integrado com saída I2S/TDM
- I2C: porta Grove I2C, conectada ao I2C-1
- GPIO12: porta digital Grove, conectada ao GPIO12 & GPIO13

Nota: Se você usar os LEDs RGB APA102, certifique-se de escrever HIGH em `GPIO5` primeiro para habilitar o VCC dos LEDs.

## Primeiros Passos

**Conectar a ReSpeaker 4-Mic Array ao Raspberry Pi**

Monte a ReSpeaker 4-Mic Array no Raspberry Pi, certificando-se de que os pinos estejam corretamente alinhados ao empilhar a ReSpeaker 4-Mic Array para Raspberry Pi.

Nota: Não é permitido conectar ou desconectar a ReSpeaker 4-Mic Array com o sistema ligado (hot-plugging). Isso danificará a ReSpeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Instalar driver**

Certifique-se de que você está executando [a versão mais recente do Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) no seu Pi. *(atualizado em 30/06/2021)*

- Passo 1. Obtenha o código-fonte da placa de voz da Seeed, instale e reinicie.

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

- Passo 2. Em seguida selecione a saída de áudio no Raspberry Pi:

```sh
sudo raspi-config
# Select 1 System options
# Select S2 Audio
# Select your preferred Audio output device
# Select Finish
```

- Passo 3. Verifique se o nome da placa de som se parece com isto:

```sh
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

Se quisermos alterar as configurações do `alsa`, podemos usar `sudo alsactl --file=ac108_asound.state store` para salvá-las. E quando precisarmos usar as configurações novamente, copie para: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Passo 4. Abra o Audacity e selecione **AC108 & 4 channels** como entrada e **bcm2835 alsa: - (hw:0:0)** como saída para testar:

```sh
sudo apt update
sudo apt install audacity
audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Alternativamente, se você usar a imagem Lite do Raspbian Pi OS e não tiver GUI, você pode gravar com `arecord` e reproduzir com `aplay`:

```
sudo apt-get install sox                             //for audio conversion
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
sox hello.wav -c 2 stereo.wav                        // convert to stereo
aplay stereo.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

## Visão geral de uso

Para executar os exemplos a seguir, faça o clone do repositório [4mics_hat](https://github.com/respeaker/4mics_hat.git) no seu Raspberry Pi

```
git clone https://github.com/respeaker/4mics_hat.git
```

Todos os scripts Python mencionados nos exemplos abaixo podem ser encontrados dentro deste repositório. Para instalar as dependências necessárias, a partir da pasta do repositório mic_hat, execute

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**LEDs APA102**

Cada LED APA102 on-board possui um chip driver adicional. O chip driver se encarrega de receber a cor desejada por meio de suas linhas de entrada e então manter essa cor até que um novo comando seja recebido.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Passo 1. Ativar SPI:

```bash
sudo raspi-config
```

1. Selecione "Interfacing Options"
2. Selecione "SPI"
3. Selecione Enable SPI
4. Por fim, saia da ferramenta

- Passo 2. Em seguida execute o código de exemplo, agora podemos ver os LEDs piscando como o Alexa Assistant.

```bash
python3 interfaces/pixels.py
```

### Gravar som com Python

Nós usamos a [biblioteca PyAudio para Python](https://people.csail.mit.edu/hubert/pyaudio/) para gravar som com Python.

Primeiro, execute o seguinte script para obter o número de índice do dispositivo do 2 Mic Pi HAT:

```bash
python3 recording_examples/get_device_index.py
```

Você verá o ID do dispositivo como abaixo.

```txt
Input Device id  2  -  seeed-4mic-voicecard: - (hw:1,0)
```

Para gravar o som, abra o arquivo ```recording_examples/record.py``` com nano ou outro editor de texto e altere `RESPEAKER_INDEX = 2` para o número de índice da ReSpeaker no seu sistema. Em seguida, execute o script Python record.py para fazer uma gravação:

```bash
python3 recording_examples/record.py
```

- Passo 6. Se você quiser extrair os dados do canal 0 dentre os 4 canais, dê uma olhada no conteúdo de ```record_one_channel.py```. Para outro canal X, altere [0::4] para [X::4].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproduzir as amostras gravadas, você pode usar o utilitário de sistema aplay, por exemplo

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## Localização e Rastreamento em Tempo Real da Fonte Sonora

[ODAS](https://github.com/introlab/odas) significa Open embeddeD Audition System. Esta é uma biblioteca dedicada a realizar localização, rastreamento, separação e pós-filtragem de fontes sonoras.

- Passo 1. Obtenha o [ODAS](https://github.com/introlab/odas.git) e faça a compilação.

O arquivo executável que iremos chamar será gerado no diretório bin

```bash
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
cd ~/Desktop
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- Passo 2. Obtenha o [ODAS Studio](https://github.com/introlab/odas_web) e execute-o.

Instale nodejs v12.22 e npm 6.14.

```bash
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

Certifique-se de que as ferramentas de compilação relevantes estejam instaladas

```bash
sudo apt -y install gcc g++ make
sudo apt -y install nodejs
```

Instalando as dependências do odas_web com npm

```bash
cd ~/Desktop
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
```

Nosso objetivo é instalar os módulos de dependência relevantes sem precisar recompilar, então podemos ignorar erros durante a recompilação. Em seguida, execute npm start.

```bash
npm start
```

Ou podemos fazer o downgrade do Python para 2.7 para compilar o módulo antigo election-rebuild. (Não precisamos fazer este passo)

```bash
sudo apt remove python3 -y
sudo apt install python2 -y
```

- Passo 3. O odascore estará em **~/Desktop/odas/build/bin/odaslive**, o arquivo de configuração estará em **~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg**.

Precisamos modificar a configuração para especificar a placa de som para o nosso dispositivo

```bash
arecord -l  #type this commond  make sure u have arecord installed
```

Você verá algo como a saída a seguir

```bash
pi@raspberrypi:~/Desktop/odas/config/odaslive $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed4micvoicec [seeed-4mic-voicecard], device 0: bcm2835-i2s-ac10x-codec0 ac10x-codec0-0 [bcm2835-i2s-ac10x-codec0 ac10x-codec0-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

Altere a designação da placa de som na 18ª linha, no arquivo de configuração cfg

```bash
vim ~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg
# Then type :18
# Then press Enter
# Then press i
# Change card = YOUR CARD ;  # We found in "arecord -l"
# For mine is
# card = 3 ;
# Then type  :wq  # To save the configuration file
```

Em seguida, abrimos a interface web do odas, onde podemos ver os dados de monitoramento do sistema na interface **Local System Monitor** e selecionar o núcleo de controle e o arquivo de configuração a ser lido na interface **ODAS Control**.

Para iniciar a interface gráfica web do odas

```bash
cd ~/Desktop/odas_web
npm start
```

Clique na seção em branco sob **ODAS Core** para abrir o navegador de arquivos e selecione o caminho do núcleo em "~/Desktop/odas/build/bin/odaslive"

Clique na seção em branco sob **ODAS Config** para abrir o navegador de arquivos e selecione o caminho de configuração em "~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg"

Quando estiver configurado corretamente, ficará assim

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/odas.png)

## Habilitando Reconhecimento de Voz na Borda com Picovoice

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **permite que empresas inovem e se diferenciem rapidamente com IA de voz privada**. Construa uma estratégia unificada de IA em torno da sua marca e produtos com nosso reconhecimento de fala e [**tecnologias de compreensão de linguagem natural (NLU)**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU).

**A Seeed fez uma parceria com a Picovoice para trazer uma solução de Reconhecimento de Fala na borda usando [ReSpeaker 4 Mic](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi.html) para desenvolvedores.**

Picovoice é uma plataforma ponta a ponta para construir produtos de voz nos seus próprios termos. Ela permite criar experiências de voz semelhantes à Alexa e ao Google. Mas é executada inteiramente, 100%, no dispositivo. Há vantagens do Picovoice:

- **Privado**: Tudo é processado offline. Intrinsecamente compatível com HIPAA e GDPR.
- **Confiável**: Funciona sem precisar de conectividade constante.
- **Latência Zero**: A arquitetura voltada para a borda elimina atrasos de rede imprevisíveis.
- **Preciso**: Resistente a ruído e reverberação. Supera alternativas baseadas em nuvem por ampla margem.
- **Multiplataforma**: Projete uma vez, implante em qualquer lugar. Crie usando linguagens e frameworks familiares.

### Picovoice com ReSpeaker 4-Mic Array - Primeiros Passos

**Passo 1.** Siga o **tutorial passo a passo acima do ReSpeaker 4-Mic Array com Raspberry Pi** antes do que se segue.

**Nota:** Certifique-se de que `Audacity` e os LEDs `APA102` estejam funcionando corretamente no ReSpeaker 4-Mic Array com Raspberry Pi.

**Passo 2.** Abra o Terminal e digite o seguinte comando para instalar o driver `pyaudio`.

```sh
pip3 install pyaudio
```

**Nota**: Certifique-se de que você tem o `pip3` instalado no seu Raspberry Pi

**Passo 3.** Digite o seguinte comando no terminal para **instalar o demo do Picovoice para ReSpeaker 4-Mic Array**.

```sh
pip3 install pvrespeakerdemo
```

### Uso do Demo

O demo utiliza o ReSpeaker 4-Mic Array em um Raspberry Pi com tecnologia Picovoice para controlar os LEDs. **Este demo é acionado pela palavra de ativação "`Picovoice`" e ficará pronto para executar ações subsequentes, como ligar e desligar LEDs, e alterar as cores dos LEDs.**

Após a instalação terminar, digite este comando para executar o demo no terminal:

```sh
picovoice_respeaker_demo
```

### Comandos de Voz

Aqui estão os comandos de voz para este demo:

- **Picovoice**

O demo exibe:

```txt
wake word
```

- **Turn on the lights**

Você deverá ver as luzes acesas e a seguinte mensagem no terminal:

```config
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

A lista de comandos é mostrada no terminal:

```config
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

**Demonstração em Vídeo do Demo**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/icTZeMIJAxw" frameBorder={0} allow="accelerometer; encrypted-media;gyroscope; picture-in-picture" allowFullScreen /></p>

### Código-fonte do Demo

O demo é construído com o **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. O código-fonte do demo está disponível no GitHub em [Picovoice Respeaker Demo](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker)

### Diferentes Palavras de Ativação

O [**Picovoice SDK**](https://github.com/Picovoice/picovoice) inclui amostras gratuitas de palavras de ativação licenciadas sob Apache 2.0, incluindo os principais assistentes de voz (por exemplo, "**`Hey Google`**", "**`Alexa`**") e algumas divertidas como "**`Computer`**" e "**`Jarvis`**".

### Comandos de Voz Personalizados

Os comandos de iluminação são definidos por um *contexto Speech-to-Intent* do Picovoice. Você pode projetar e treinar contextos digitando a gramática permitida usando o Picovoice Console. Você pode testar suas alterações no navegador à medida que edita com o botão de microfone. Acesse o [Picovoice Console](https://picovoice.ai/console/) e registre-se para uma conta. Use o **Rhino Speech-to-Intent editor** para criar contextos e depois treiná-los para Raspberry Pi.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Exemplos com Múltiplas Palavras de Ativação

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Dfn3wBE2pwY" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Para demonstrar a capacidade do Picovoice, também preparamos exemplos com múltiplas palavras de ativação usando o ReSpeaker 4-Mic Array com Raspberry Pi! Diferentes palavras de ativação podem ser definidas para executar determinadas tarefas.

*Este pacote contém um demo de linha de comando para controlar os LEDs da matriz de microfones ReSpeaker 4-Mic usando Porcupine.*

### Porcupine

**Porcupine** é um mecanismo de palavra de ativação altamente preciso e leve. Ele permite criar aplicações sempre atentas e habilitadas por voz. Ele é

- baseado em redes neurais profundas treinadas em ambientes do mundo real.
- compacto e computacionalmente eficiente. É perfeito para IoT.
- multiplataforma. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64) e navegadores web são suportados. Além disso, clientes corporativos têm acesso ao SDK para ARM Cortex-M.
- escalável. Pode detectar múltiplos comandos de voz sempre ativos sem aumentar a pegada em tempo de execução.
- autosserviço. Desenvolvedores podem treinar modelos personalizados de palavras de ativação usando o [Picovoice Console](https://picovoice.ai/console/).

#### Primeiros Passos com Múltiplas Palavras de Ativação

Execute o seguinte comando no terminal para instalar o driver de demonstração:

```sh
pip3 install ppnrespeakerdemo
```

#### Uso de Múltiplas Palavras de Ativação

Execute o seguinte no terminal após a instalação do driver:

```sh
porcupine_respeaker_demo
```

Aguarde o demo inicializar e imprimir `[Listening]` no terminal. Diga:

> Picovoice

O demo exibe:

```text
detected 'Picovoice'
```

As luzes agora estão definidas para `green`. Diga:

> Alexa

As luzes agora são definidas para `yellow`. Diga:

> Terminator

para apagar as luzes.

#### Palavra de Ativação para Cores

Abaixo estão as cores associadas às palavras de ativação suportadas para este demo:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código-fonte do Exemplo com Múltiplas Palavras de Ativação

Veja o código-fonte completo deste exemplo aqui: [Porcupine Respeaker Demo](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)

### Suporte Técnico Picovoice

Se você encontrar problemas técnicos ao usar o Picovoice, visite **[Picovoice](https://github.com/Picovoice)** para discussões.

## FAQ

**P1: Não há resposta quando executamos kws_doa.py e dizemos snow boy**

R2: Execute o audacity para se certificar de que os 4 canais estão bons. Se houver um canal sem dados, não haverá resposta quando dissermos snow boy.

**P2: Erro #include "portaudio.h" ao executar "sudo pip install pyaudio".**

R3: Execute o comando abaixo para resolver o problema.

```sh
sudo apt-get install portaudio19-dev
```

**P3: ...WARNING: memory leak will occur if overlay removed... mensagem no journalctl**

A4: Há uma pequena perda real e única de memória quando o driver é carregado pela primeira vez (após a inicialização). No entanto, como isso ocorre por inicialização ou por carregamento, e o usuário típico só precisa carregar o driver uma vez por inicialização, perder o controle de alguns bytes por inicialização não é relevante. Portanto, este é apenas um pequeno problema, improvável de afetar qualquer usuário de forma real, além de exibir uma mensagem preocupante sobre perda de memória por inicialização.

## Recursos

- **[PDF]** [ReSpeaker 4-Mic Array for Raspberry Pi(PDF)](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
- **[DXF]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20v1.0.dxf.zip)
- **[3D]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0 3D Model](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mics%20Pi%20HAT%20v1.0.skp.zip)
- **[AC108]** [AC108 DataSheet](http://www.x-powers.com/en.php/Info/product_detail/article_id/41)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
