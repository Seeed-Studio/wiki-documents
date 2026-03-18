---
description: Music Shield V1.0
title: Music Shield V1.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Music_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Music_Shield_V1.0/
---

<!-- ---
name:  Music Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Music_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Music_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/Musicshieldnew500.jpg)

O Music Shield é um codec de áudio profissional. Ele pode funcionar com Arduino, Seeeduino, Seeeduino Mega e Arduino Mega. É baseado no CI VS1053b e pode reproduzir uma variedade de formatos de música armazenados em cartões MicroSD com a biblioteca Arduino fornecida pela Seeed.

Observação: A gravação é suportada apenas no Seeeduino Mega e Arduino Mega por enquanto.

## Recursos ##

- Compatível com Arduino, Seeeduino, Arduino Mega e Seeeduino Mega

- 2 botões de controle e 1 chave rotativa

- Reproduz música de cartões micro SD. Decodifica: MP3, WAV, MIDI, Ogg Vorbis

- Interface I2S para DAC externo

- Saída para Fone de Ouvido/Linha para reprodução

- Entrada de Linha para gravação em formato OGG

- Excelente qualidade de som com Resposta de Frequência de ±1dB

- Certificação FCC

## Especificação ##

|Item| Min|Typical|Max| Unit|
|--|--|--|--|--|
| Voltage|4.5| 5|5.5| VDC|
| Current| /| /| 70|mA|
 |Output S/N Ratio (With A-Weighting)|/| 60|/|dB|
 |Channel Isolation (With A-Weighting)|/|50|/|dB|
 |Frequency Response|-1|/|1|dB|
 |Signal Distortion|/|/|0.5%|/|
 |Maximum output(each channel with 16 ohm load)|500|/|/|mV|
 |Audio Interface|3.5mm Audio Jack|||/|
 |Supporting Format|MP3, WAV,MIDI, Ogg|||/|
 |Supported SD Card|Micro SD Card|||/|
 |ESD contact discharge|±4|||KV|
 |ESD air discharge|±8|||/|
|Dimension|80.4x52.5x13.9|||mm|
 |Net Weight|11±2|||g|

## Função da Interface ##

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicShield-hard.jpg)

**Botão multifunção:** Gire para a esquerda para reproduzir a música anterior e para a direita para a próxima música, enquanto pressioná-lo pausa e retoma a reprodução.

**LED indicador de volume (VERMELHO):** Se o volume aumentar, o LED vermelho ficará mais brilhante.

**LED indicador de Reprodução/Pausa (VERDE):** Se estiver reproduzindo, o LED verde pisca.

**Saída de linha** pode acionar fones de ouvido de 16 ohms ou 32 ohms.

**Entrada de linha** é usada para gravar áudio de outras fontes.

**Cartão Micro SD** pode ser FAT16 ou FAT32, e tamanhos maiores que 2GB não são suportados. (OBSERVE: O código de exemplo incluído com a biblioteca usará apenas cartões formatados em FAT16)

**I2S e GPIO** são para saída de áudio digital.

**Interface ISP** é mantida para trazer a porta SPI ao usar com a Mega.

### Uso de pinos no Arduino ###

**D0** - Não utilizado.

**D1** - Não utilizado.

**D2** - Usado para receber sinal do dock do iPod (pode ser usado para sua própria aplicação se o dock do iPod não for usado).

**D3** - Usado para receber sinal do botão de Aumentar Volume (pode ser usado para sua própria aplicação se a chave não for usada).

**D4** - Usado para receber sinal da chave para a função Próxima Música (pode ser usado para sua própria aplicação se a chave não for usada).

**D5** - Usado para receber sinal da chave para as funções Reproduzir&Parar e Gravar (pode ser usado para sua própria aplicação se a chave não for usada).

**D6** - Usado para receber sinal da chave para a função Música Anterior (pode ser usado para sua própria aplicação se a chave não for usada).

**D7** - Usado para receber sinal do botão de Diminuir Volume (pode ser usado para sua própria aplicação se a chave não for usada).

**D8** - Usado para instruções do LED Verde (pode ser usado para sua própria aplicação se a chave não for usada).

**D9** - Usado para instruções do LED Vermelho (pode ser usado para sua própria aplicação se a chave não for usada).

**D10** - Usado para Chip Select de SPI.

**D11** - Usado para SPI MOSI.

**D12** - Usado para SPI MISO.

**D13** - Usado para SPI SCK.

**D14(A0)** - Usado para Reset do VS1053.

**D15(A1)** - Usado para Data Require do VS1053.

**D16(A2)** - Usado para Data Select do VS1053.

**D17(A3)** - Usado para Chip Select do VS1053.

**D18(A4)** - Não utilizado.

**D19(A5)** - Não utilizado.

## Uso ##

### Instalação de Hardware ###

Insira o cartão Micro SD e o fone de ouvido; conecte o Music Shield ao Arduino/Seeeduino; conecte a placa ao PC usando um cabo USB. ![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicInstall.jpg)

### Instalação de Software ###

Reproduzir música:

1. Certifique-se de que há músicas no cartão micro SD.

2. Baixe [File:Music v1 14.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)  e [File:NewSoftSerial.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/NewSoftSerial.zip)  para o Music Shield.

3. Descompacte estes dois pacotes e coloque-os no programa Arduino-0022: ..\arduino-0022\libraries

4. **[Ignore isto se estiver em Linux]** Baixe um novo arquivo **portpins.h** e substitua o arquivo portpins.h padrão do programa Arduino-0022: ..\arduino-0022\hardware\tools\avr\avr\include\avr

5. Selecione a placa Arduino correspondente, como Arduino UNO ou Duemilanove ou outras.

6. Execute o programa Arduino, compile e faça o upload do sketch para a placa Arduino.

7. Apenas aproveite.

**Gravar música:** (Suporta apenas placas baseadas em ATmega1280 e ATmega2560)

1. Pressione o botão de reproduzir/parar antes de pressionar o botão RESET do **Arduino**.

2. Solte o botão RESET por um segundo e então solte o botão de reproduzir/parar. Quando o Music Shield estiver começando a gravar, os LEDs verde e vermelho piscarão de forma síncrona.

3. Pressionar o botão de reproduzir/parar interromperá a gravação.

Para Arduino 1.0:
Atenção por favor: A biblioteca Fat16 entre o demo-1 e o demo-2 é diferente, então confirme que você baixou a biblioteca correspondente ao usar os dois demos. E as duas bibliotecas não podem existir juntas, então exclua uma antes de usar a outra.

- Demo 1: Usar biblioteca SD

Este demo usará a biblioteca SD que vem com o Arduino 1.0.

1. Certifique-se de que há músicas no cartão micro SD.

2. Baixe [File:MusicPlayer v1 7.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicPlayer_v1_7.zip)  e [Fat16](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Demo1_Fat16.zip) para o Music Shield.

3. Descompacte o pacote e coloque-o no programa Arduino-1.0: ..\arduino-1.0\libraries

4. Selecione a placa Arduino correspondente, como Arduino UNO ou Duemilanove ou outras.

5. [Ignore isto se estiver em Linux] Baixe um novo arquivo **portpins.h** e substitua o arquivo portpins.h padrão do programa Arduino-1.0: ..\arduino-1.0\hardware\tools\avr\avr\include\avr

6. Execute o programa Arduino, compile e faça o upload do sketch music_v1_2 -> musicPlayAll para a placa Arduino.

- Demo 2: Usar biblioteca Fat16

Este demo usará uma biblioteca de código aberto [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip). Há dois sketches neste demo: Usando o sketch MusicPlayRandomly, você pode fazer a música tocar aleatoriamente. E usando MusicPlayWithName, você pode especificar qual música será reproduzida pelo nome. (Observação: O demo não pode coexistir com o demo 1 nas bibliotecas)

1. Certifique-se de que há músicas no cartão micro SD.

2. Baixe  [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip) para o Music Shield.

3. [Em Linux] Copie libraries/Fat16/Fat16util.h para libraries/Fat16/Fat16Util.h (observe util vs Util). Os includes estão com o caso errado e esta é a solução mais fácil.

4. Descompacte estes dois pacotes e coloque-os no programa Arduino-1.0: ..\arduino-1.0\libraries

5. Selecione a placa Arduino correspondente, como Arduino UNO ou Duemilanove ou outras.

6. [Ignore isto se estiver em Linux] Baixe um novo arquivo **portpins.h** e substitua o arquivo portpins.h padrão do programa Arduino-1.0: ..\arduino-1.0\hardware\tools\avr\avr\include\avr

7. Execute o programa Arduino, compile e faça o upload do sketch MusicShieldNewSdLib para a placa Arduino.

Observação: Sobre os métodos específicos de algumas funções na biblioteca, você pode consultar [the sofeware installation](https://wiki.seeedstudio.com/pt-br/Music_Shield_V1.0/#software-installation) do Music Shield V2.0.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]**[Arquivos Eagle do Music Shield](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip)
- **[PDF]**[Music Shield pdf](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.pdf)
- **[Eagle]**[Music Shield sch](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.sch)
- **[PDF]**[PDF do Esquemático do Music Shield](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield.pdf)
- **[Library]**[Arquivo de código-fonte do Music Shield para Arduino 0022](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
