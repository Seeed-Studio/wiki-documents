---
description: Como usar o Wio Terminal como placa de desenvolvimento RTL8720DN
title: Como usar o Wio Terminal como placa de desenvolvimento RTL8720DN
keywords:
  - Tutorial Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-8720-dev
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-8720-dev/
---

# Como usar o Wio Terminal como placa de desenvolvimento RTL8720DN

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif" /></div>

O Wio Terminal está equipado com o núcleo Atmel SAMD51 com o núcleo sem fio Realtek RTL8720DN. Não seria legal se você também pudesse usar o Wio Terminal como uma simples placa de desenvolvimento RTL8720DN? Neste wiki, você aprenderá como usar o Wio Terminal como uma placa de desenvolvimento RTL8720DN para desenvolver a conectividade Wi‑Fi e Bluetooth!

## Primeiros Passos

- Por favor, siga primeiro o [**Wio Terminal Primeiros Passos**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/) antes do que segue.

### Adicionar a biblioteca de placa Realtek ao Arduino

1.Abra a sua IDE Arduino, clique em **File** > **Preferences**, e copie a URL abaixo em **Additional Boards Manager URLs**:

```sh
https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json
```

2.Clique em **Tools** > **Board** > **Board Manager** e pesquise por **realtek** no Boards Manager

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png" /></div>

## Programa de comunicação entre SAMD51 e RTL8720DN

Nós preparamos um código de exemplo em Arduino que pode ser usado para comunicar o núcleo SAMD51 do Wio Terminal com o RTL8720DN. Baixe o código‑fonte completo [**aqui**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720).

- Envie o código para o Wio Terminal selecionando a placa como **Wio Terminal**.

**Nota:** Este programa é carregado no núcleo SAMD51 do Wio Terminal.

Existem **2 modos** neste programa Arduino.

### MODO 1 - Modo de Gravação de Firmware do RTL8720DN

Pressione o botão (botão direito) para entrar neste modo. Este é **o modo em que você usa para gravar código Arduino no RTL8720DN**. Agora, você pode escolher um dos códigos de exemplo do RTL8720DN para enviar ao núcleo RTL8720DN. Você deve selecionar este modo para enviar ao núcleo RTL8720DN e **selecionar a placa como RTL8720**.

### MODO 2 - Modo USB para Serial

Pressione o botão (botão do meio) para entrar neste modo. Este é **o modo usado para ver saídas seriais a partir do núcleo RTL8720DN.** Neste modo, o núcleo SAMD51 está atuando como um módulo USB para Serial.

## Exemplo de Wi‑Fi

Vamos pegar um exemplo para passar pelos procedimentos!

- Envie o **programa de comunicação entre SAMD51 e RTL8720DN para o Wio Terminal** (selecione a placa como **Wio Terminal**).

- Uma vez enviado o programa, navegue até **Tools** -> **Board** e selecione a placa como **RTL8722DM**, como segue:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png" /></div>

- Navegue até **Files** -> **Examples** e, em **Examples for RTL8720DM**, você pode escolher exemplos para RTL8720DN. Vamos pegar ScanNetworks como exemplo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png" /></div>

:::note
Se estiver usando exemplos relacionados a Wi‑Fi, por favor verifique [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview/) primeiro para apagar o firmware do núcleo RTL8720DN.
:::

- Certifique‑se de que o Wio Terminal está no **Modo de Gravação de Firmware do RTL8720DN** como segue. Selecione a placa como **RTL8722DM** e clique em upload.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png" /></div>

- Depois de enviar o exemplo de Wi‑Fi para o núcleo RTL8720DN, reinicie o Wio Terminal e mude para o **Modo USB para Serial** pressionando o botão do meio do Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png" /></div>

- Agora, se você abrir o Serial Monitor, deverá conseguir ver os resultados sendo impressos a partir do núcleo RTL8720DN! Agora você pode usar o núcleo RTL8720DN do Wio Terminal como uma placa de desenvolvimento!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png" /></div>

## Exemplo de Bluetooth

Vamos também ver um exemplo de Bluetooth.

- Envie o **programa de comunicação entre SAMD51 e RTL8720DN para o Wio Terminal** (selecione a placa como **Wio Terminal**).

- Uma vez enviado o programa, navegue até **Tools** -> **Board** e selecione a placa como **RTL8722DM**. Navegue até **Files** -> **Examples** e, em **Examples for RTL8720DM**, você pode escolher exemplos para RTL8720DN. Vamos pegar ScanNetworks como exemplo.

- Certifique‑se de que o Wio Terminal está no **Modo de Gravação de Firmware do RTL8720DN**. Selecione a placa como **RTL8722DM** e clique em upload.

- Depois de enviar o exemplo de Wi‑Fi para o núcleo RTL8720DN, reinicie o Wio Terminal e mude para o **Modo USB para Serial** pressionando o botão do meio do Wio Terminal.

- Agora, se você abrir o Serial Monitor, deverá conseguir ver os resultados sendo impressos a partir do núcleo RTL8720DN! Agora você pode usar o núcleo RTL8720DN do Wio Terminal como uma placa de desenvolvimento!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png" /></div>

## Suporte Técnico & Discussão de Produtos


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
