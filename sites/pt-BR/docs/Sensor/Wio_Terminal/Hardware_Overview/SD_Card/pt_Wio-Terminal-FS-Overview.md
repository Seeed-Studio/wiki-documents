---
description: Visão geral
title: Visão geral
keywords:
  - Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-FS-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-FS-Overview/
---

# Visão geral

Este repositório apresenta como instalar a biblioteca de sistema de arquivos usada no Wio Terminal. Ela fornece funcionalidades básicas de operação de arquivos com o cartão SD, permitindo Ler/Gravar no ou a partir do cartão SD usando a interface SPI.

## Instalando a biblioteca de sistema de arquivos

1. Visite o repositório [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) e baixe todo o repositório para a sua unidade local.

2. Agora, a biblioteca FS pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_FS` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Instalando as bibliotecas SFUD dependentes

1. Visite o repositório [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) e baixe todo o repositório para a sua unidade local.

2. Agora, a biblioteca SFUD pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_SFUD` que você acabou de baixar.

## Formato do cartão MicroSD

- **Capacidade máxima do cartão MicroSD: `16GB`**

- **Formato de cartão MicroSD suportado:**

  - FAT12

  - FAT16

  - FAT32

  - exFAT
