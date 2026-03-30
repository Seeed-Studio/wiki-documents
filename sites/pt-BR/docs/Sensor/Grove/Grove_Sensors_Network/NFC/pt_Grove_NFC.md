---
title: Grove - NFC
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove_NFC/
slug: /Grove_NFC
sku: 113020006
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove_NFC/
---

<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_01.jpg" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_02.jpg" />
      </td>
    </tr>
  </tbody></table>

Near Field Communication (NFC) é um conjunto de tecnologias sem fio de curto alcance. Ela está por trás de aplicações diárias como sistemas de controle de acesso e sistemas de pagamento móvel.
O Grove NFC apresenta um módulo transceptor altamente integrado PN532 que gerencia a comunicação sem contato em 13,56MHz. Você pode ler e gravar uma tag de 13,56MHz com este módulo ou implementar troca de dados ponto a ponto com dois NFCs. O Grove NFC é projetado para usar protocolos de comunicação I2C ou UART, sendo UART o modo padrão. Além disso, atribuímos uma antena PCB independente que pode facilmente se estender para fora de qualquer gabinete que você use, deixando mais espaço para você projetar o exterior do seu projeto.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

|Versão|Data|Alteração|
|--|--|--|
|Grove NFC V1.0|11 de dezembro de 2015 |inicial|
|Grove NFC V1.1|31 de agosto de 2016| Adicionado pad TP2/TP3 na parte de trás da PCB, para alternar entre I2C e UART|

## Especificações

- Tensão de operação: 3,3V
- Corrente de operação:
  - Modo estático: 73mA
  - Modo de gravação/leitura: 83mA
- Suporta interface host: I2C, UART (padrão).
- Serve para comunicação sem contato em 13,56MHz.
- Suporta protocolos ISO14443 Tipo A e Tipo B.
- A distância máxima de operação para detecção de tags NFC é 28mm, dependendo do tamanho atual da antena.
- Dimensões: 25,43mm x 20,35mm

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Visão geral de hardware

### Grove NFC v1.0

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC_cutAndsolder.jpg)  

A configuração padrão é UART; se você precisar alterá-la para I2C, então será necessário fazer alguma soldagem primeiro.

Corte as seguintes conexões:

- TP1 para UART
- TP2 para RX
- TP3 para TX

Solde as seguintes conexões:

- TP1 para I2C
- TP2 para SCL
- TP3 para SDA

### Grove NFC v1.1

A configuração padrão é UART; se você precisar alterá-la para I2C, então você deve cortar a conexão UART e depois soldar os pinos I2C como abaixo.

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/v1.1%20hardware%20connection.png)

## Primeiros passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

O Grove - NFC suporta I2C e UART, e a [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) oferece suporte a Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan e Arduino Leonardo/Seeeduino Lite.

### Brincar com o Seeeduino Lite

#### Hardware

**Materiais necessários**

| Seeeduino Lite | Base Shield| Grove - NFC |  Tags NFC|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">Adquira agora</a>|Por favor, prepare por conta própria|

- **Passo 1.** Conecte o Grove - NFC à porta **UART** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino Lite.

- **Passo 3.** Conecte o Seeeduino Lite ao PC via um cabo USB

#### Software

- **Passo 1.**  Baixe a [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Passo 2.**  Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca **Seeed Arduino NFC** para Arduino.

- **Passo 3.**  Abra o código “WriteTag” pelo caminho: **File --> Examples --> WriteTag**.

- **Passo 4.**  Modifique o código como abaixo para habilitar a comunicação SPI.

:::tip
xiao pode ter problemas de compatibilidade de pinos.
:::

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **Passo 5.** Faça o upload do código. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 6.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ctrl+shift+m ao mesmo tempo. Defina o baud rate para **9600**.

- **Passo 7.** Use o Grove - NFC para se aproximar de uma Tag NFC. Se tudo correr bem, você obterá as informações da Tag NFC no Serial Monitor.

:::warning
Se você quiser conectar às portas UART do Arduino Mega, você pode mudar de PN532_HSU pn532hsu(Serial1) para PN532_HSU pn532hsu(SerialX). X representa a porta serial do Arduino Mega que você usar. Se você quiser conectar sensores Grove-NFC ao Arduino Uno, pode usar a serial por software. Siga o guia abaixo para configurar a [software serial](https://www.arduino.cc/en/Reference/softwareSerial).
:::

```cpp
#if 0 // use SPI
#include <SPI.h>
#include <PN532/PN532_SPI/PN532_SPI.h>
PN532_SPI pn532spi(SPI, 9);
NfcAdapter nfc = NfcAdapter(pn532spi);
#elif 0 // use hardware serial

#include <PN532/PN532_HSU/PN532_HSU.h>
PN532_HSU pn532hsu(Serial1);
NfcAdapter nfc(pn532hsu);
#elif 1  // use software serial

#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
#include "SoftwareSerial.h"
SoftwareSerial SWSerial(2, 3);
PN532_SWHSU pn532swhsu(SWSerial);
NfcAdapter nfc(pn532swhsu);
#else //use I2C

#include <Wire.h>
#include <PN532/PN532_I2C/PN532_I2C.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
``` 

### Brincar com o Seeedunio V4.2 

### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove - NFC |  Tags NFC|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">Adquira agora</a>|Por favor, prepare por conta própria|

:::note
**1.** Por favor, escolha Tags NFC de 13,5MHZ, ISO14443, ou o módulo Grove - NFC pode não conseguir ler a tag.

**2.** Conecte o cabo USB gentilmente, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**3.** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

**4.** Para esta demonstração, você pode trabalhar sem o Base Shield, pois o Seeeduino V4.2 possui um conector Grove I2C on-board. 
:::

- **Passo 1.** Conecte o Grove - NFC à porta **I2C** do Grove-Base Shield. Certifique-se de seguir a visão geral de hardware para alterar a configuração padrão de UART para I2C.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino V4.2.

- **Passo 3.** Conecte o Seeeduino V4.2 ao PC via um cabo USB


#### Software

- **Passo 1.** Baixe a [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca **Seeed Arduino NFC** para Arduino.

- **Passo 3.** Abra o código “WriteTag” pelo caminho: **File --> Examples --> WriteTag**.

- **Passo 4.** Modifique o código como abaixo para habilitar a comunicação I2C.

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **Passo 5.** Envie o código. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 6.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina o baud rate para **9600**

- **Passo 7.** Use o Grove - NFC para se aproximar de uma Tag NFC. Se tudo correr bem, você obterá as informações da Tag NFC no Serial Monitor.

# Grove - NFC v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - NFC v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos EAGLE (esquemático e placa) do Grove - NFC v1.0](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip)
- **[Zip]** [Arquivos EAGLE (esquemático e placa) do Grove - NFC v1.1](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip)
- **[PDF]** [PN532 Datasheet PDF](https://files.seeedstudio.com/wiki/Grove-NFC/res/PN532.pdf)
- **[Library]** [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)

## Projeto

**Particle Photon + Grove NFC + Grove LCD via I2C** Use o Particle Photon para ler o UID de um Cartão NFC e exibi-lo no LCD, tudo via I2C.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-photon-grove-nfc-grove-lcd-via-i2c-7e7d36/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_NFC -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
