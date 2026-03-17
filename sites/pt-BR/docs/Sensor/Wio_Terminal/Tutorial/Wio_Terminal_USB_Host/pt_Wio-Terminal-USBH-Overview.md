---
description: Visão geral
title: Visão geral
keywords:
  - Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBH-Overview
sku: 102991299
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-USBH-Overview/
---

# Visão geral

Este repositório apresenta como usar o Wio Terminal como um USB-Host, o que significa que você pode conectar dispositivos USB ao Wio Terminal e brincar com ele como se fosse um computador!

Esta funcionalidade depende da [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD). A biblioteca foi testada com o Wio Terminal (SAMD51) e está funcionando corretamente.

## Instalando a USB Host Library SAMD

1. Acesse o repositório [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca pode ser instalada na Arduino IDE. Abra a Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_LCD` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Configurações de USB Host

Para habilitar USB Host no Wio Terminal, você deve configurar dois pinos. É necessário definir `PIN_USB_HOST_ENABLE` como **BAIXO** e `OUTPUT_CTR_5V` como **ALTO**.

Você pode fazer isso simplesmente adicionando o seguinte código em `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```
