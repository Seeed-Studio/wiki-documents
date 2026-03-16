---
description: Visão geral
title: Visão geral da biblioteca de áudio para Wio Terminal
keywords:
  - Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Audio-Overview
sku: A1716470
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Audio-Overview/
---

# Visão geral da biblioteca de áudio para Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif"/></div>

Este wiki apresenta como usar a biblioteca Audio com o Wio Terminal usando o [**ReSpeaker 2-Mic Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html). Com a ajuda desta biblioteca, você poderá gravar, reproduzir e analisar áudio usando o Wio Terminal! Além disso, esta biblioteca de áudio pode ser implementada em diferentes áreas, como reconhecimento de fala e muito mais!

## Hardware necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**ReSpeaker 2-Mics Pi HAT**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

- *Placa adaptadora Pi HAT de 40 pinos para Wio Terminal (Ainda não lançada)*

## Conexão de hardware

> Por enquanto, se você quiser testar o software, terá que usar fios soltos.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/ai-wt.png"/></div>

## Primeiros passos

Para começar a usar a biblioteca Audio para Wio Terminal, siga os seguintes passos:

## Instalando o Seeed_Arduino_Audio

1. Visite o repositório [Seeed_Arduino_Audio](https://github.com/Seeed-Studio/Seeed_Arduino_Audio) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_Audio` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Instalando as bibliotecas FS para Wio Terminal

- Visite a página oficial do [**Wio Terminal File System wiki**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-FS-Overview/) .
