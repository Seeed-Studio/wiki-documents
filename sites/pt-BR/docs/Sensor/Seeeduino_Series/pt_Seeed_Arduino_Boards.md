---
description: Como adicionar placas Seeed à Arduino IDE
title: Como adicionar placas Seeed à Arduino IDE
keywords:
  - Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeed_Arduino_Boards
last_update:
  date: 02/02/2023
  author: w0x7ce
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/
---


A Seeed projetou muitas placas que funcionam com a Arduino IDE, incluindo:

* [Seeeduino XIAO](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/)
* [Seeeduino Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/)
* [Seeeduino Lotus Cortex-M0+](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus_Cortex-M0-/)
* [Seeeduino LoRaWAN](https://wiki.seeedstudio.com/pt-br/Seeeduino_LoRAWAN/)/GPS
* [Seeeduino Cortex M0](https://wiki.seeedstudio.com/pt-br/Seeeduino-Cortex-M0/)

:::caution
A placa mencionada acima é da série de microcontroladores AT SAMD21. Copie o URL abaixo para *Additional Boards Manager URLs* na etapa 2.
:::

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

* Seeeduino [V3](https://wiki.seeedstudio.com/pt-br/Seeeduino_v3.0/)/[4](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.0/)
* [Seeeduino Lotus](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus/)
* Seeeduino Stalker [V2.3](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_v2.3/)/[3](https://wiki.seeedstudio.com/pt-br/Seeeduino_v3.0/)/[3.1](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_V3.1/)
* [Seeeduino Lite](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lite/)
* [Seeeduino Mega](https://wiki.seeedstudio.com/pt-br/Seeeduino_Mega/)
* [Seeeduino Mega Protoshield Kit](https://wiki.seeedstudio.com/pt-br/Seeeduino_Mega_Protoshield_Kit/)
* [Seeeduino GPRS](https://wiki.seeedstudio.com/pt-br/Seeeduino_GPRS/)
* [Seeeduino Ethernet](https://wiki.seeedstudio.com/pt-br/Seeeduino_Ethernet/)
* [Seeeduino Cloud](https://wiki.seeedstudio.com/pt-br/Seeeduino_Cloud/)
* [Seeeduino Nano](https://wiki.seeedstudio.com/pt-br/Seeeduino-Nano/)
* [Seeeduino Crypto (ATmega4809 ECC608)](https://wiki.seeedstudio.com/pt-br/Seeeduino-Crypto-ATmega4809-ECC608/)
* [LinkIt ONE](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/)
* [RePhone Series](https://wiki.seeedstudio.com/pt-br/RePhone/)

:::note
As placas mencionadas acima, desde a Seeeduino V3 até a RePhone Série, não são da série de microcontroladores AT SAMD21. Copie o URL abaixo para *Additional Boards Manager URLs* na etapa 2.
:::

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

Graças aos novos recursos da Arduino IDE, agora é fácil adicionar essas placas à sua Arduino IDE.

Há algumas etapas a serem seguidas.

## Etapa 1. Baixe a versão mais recente da Arduino IDE

Você precisa de uma Arduino IDE posterior à versão 1.6.4. Baixe uma caso não haja Arduino IDE em seu computador.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

## Etapa 2. Configurando sua Arduino IDE

Abra sua Arduino IDE, clique em **File > Preferences** e copie o URL abaixo para *Additional Boards Manager URLs*

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## Etapa 3. Board Manager

Clique em **Toos > Board > Board Manager**.

Agora você pode pesquisar a placa pelo nome. Se precisar usar `LinkIt ONE`, basta pesquisar por `LinkIt`; e se precisar usar `RePhone Series`,
basta digitar `RePhone`. Neste wiki, usaremos `Seeeduino Stalker V3` como exemplo.

Clique em Seeeduino Stalker V3 e então aparecerá um botão **Install**. Clique nele para finalizar esta etapa. Esse processo leva de cerca de 5 minutos a meia hora, dependendo da velocidade da sua rede.

![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png)

## Etapa 4. Selecione uma placa

Depois que a Etapa 3 for concluída com sucesso, uma placa chamada Seeeduino Stalker V3 aparecerá na lista de placas.

Clique em **Tools > Board**, *Seeeduino Stalker V3* está disponível agora.

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
