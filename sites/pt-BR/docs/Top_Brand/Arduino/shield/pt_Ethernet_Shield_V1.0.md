---
description: Ethernet Shield V1.0
title: Ethernet Shield V1.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Ethernet_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Ethernet_Shield_V1.0/
---

<!-- ---
name:  Ethernet Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V1-0
sku:
tags:

--- -->
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_Shield_Pic.jpg)

O Ethernet Shield permite instantaneamente a conectividade à internet para projetos com Arduino. Um controlador ethernet Wiz5100 integrado lida com até quatro conexões TCP e UDP; basta empilhá-lo em um Arduino para criar seus próprios dispositivos em rede. Verifique facilmente o status da conexão com os LEDs indicadores on-board. Estenda ainda mais o seu projeto com duas fileiras extras de pinos que se conectam a shields e placas de prototipagem.

**Modelo:** [ARD124B2P](https://www.seeedstudio.com/depot/wiznet-ethernet-shield-w5100-p-518.html?cPath=102)

## Recursos ##

- Compatível com Arduino padrão e Arduino Mega

- Compatível com a biblioteca Arduino Ethernet

- Conector ethernet RJ45 padrão

- Buffer interno de 16K bytes

- LEDs indicadores para todas as funções

- Botão de reset de fácil acesso

- Cabeçalhos de pinos padrão para placas de prototipagem com malha de 0,1"

- Até 4 conexões de rede TCP/UDP

## Especificações ##

 |Item| Min| Típico| Máx| Unidade
 |---|---|---|---|---|
 |**Tensão**|3.5|5|5.5|V|
 |**Corrente**| 120| 210| 350| mA|
|**Dimensão**| 72.6x58.4x23.2||| mm|
 |**Conexão suportada**| TCP/UDP||| /|
 |**Peso líquido**|24.2|||g|

## Função da Interface ##

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet-hard1.png)
**RJ45** - Porta Ethernet

**LED de alimentação** - Alimentação

**LED RST (vermelho)** - Vermelho durante o reset

**LED LINK** - Sempre ligado quando o link está ok e pisca durante um estado de TX ou RX

**LED SPD** - A luz indica que a velocidade do link é 100 Mbps

**LED FDX** - A luz indica o status do modo full-duplex.

**LED Coll** - A luz indica a presença de atividade de colisão

**LED Rx** - A luz indica a presença de atividade de recepção

**LED Tx** - A luz indica a presença de atividade de transmissão

**Botão de Reset** - Reinicia o Ethernet Shield e o Arduino quando pressionado

### Uso de pinos no Arduino ###

**D0** - Não utilizado

**D1** - Não utilizado

**D2** - Conecta-se ao pino INT do W5100

**D3** - Controla o reset do W5100

**D4** - Não utilizado

**D5** - Não utilizado

**D6** - Não utilizado

**D7** - Não utilizado

**D8** - Não utilizado

**D9** - Não utilizado

**D10** - Usado para Chip Select SPI

**D11** - Usado para SPI MOSI

**D12** - Usado para SPI MISO

**D13** - Usado para SPI SCK

**D14(A0)** - Não utilizado

**D15(A1)** - Não utilizado

**D16(A2)** - Não utilizado

**D17(A3)** - Não utilizado

**D18(A4)** - Não utilizado

**D19(A5)** - Não utilizado

## Uso ##

### Instalação de Hardware ###

Conecte o Ethernet Shield à internet via conector RJ45 e o Arduino ao PC via cabo USB. Encaixe o Ethernet Shield na placa Arduino:
![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield_hard.jpg)

### Software ###

- Abra o Arduino IDE(1.0) e abra o exemplo **WebServer** na biblioteca Ethernet:

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield1.jpg) ![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield3.jpg)

- Selecione a placa Arduino correspondente, como Arduino UNO, Duemilanove ou outras, em: **Tools- Board**; Selecione a porta COM que você está usando em: **Tools- Serial port**.

- Abra o seu navegador web e digite o endereço:192.168.1.177; você verá o resultado da operação da placa Arduino como servidor web:

![](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield2.jpg)

## Rastreador de Versão ##

|Revisão| Descrições|Lançamento|
|---|---|---|
|v1.0|Lançamento V1.0|2012/3/29|

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Introdução]**[Ethernet Shield Introdução](https://arduino.cc/en/Guide/ArduinoEthernetShield)
- **[Eagle]**[Arquivos Eagle do Ethernet Shield](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip)
- **[PDF]**[PCB do W5100_ethernet_shield](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield.pdf)
- **[PDF]**[Esquemático do W5100_ethernet_shield](https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield%20SCH.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
