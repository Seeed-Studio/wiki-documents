---
description: Visão geral
title: Visão geral
keywords:
  - Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBCLIENT-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-USBCLIENT-Overview/
---

# Visão geral

Este repositório apresenta como usar o Wio Terminal como USB-Client, incluindo seu uso como Human Interface Device (HID), como teclado, mouse etc. Ele também é compatível com Musical Instrument Digital Interface (MIDI).

Essa funcionalidade depende da [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). A biblioteca foi testada com o Wio Terminal (SAMD51) e está funcionando corretamente.

## Instalando a Adafruit TinyUSB Library for Arduino

1. Acesse o repositório da [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Adafruit_TinyUSB_Arduino` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)
