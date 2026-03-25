---
description: Firmware de Jogos Retrô do Wio Terminal
title: Firmware de Jogos Retrô do Wio Terminal
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Firmware
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Firmware/
---

# Firmware de Jogos Retrô do Wio Terminal

<div align="center"><img src="https://static-cdn.seeedstudio.site/media/wysiwyg/wtretro.gif" /></div>

Aqui liberamos o firmware inicial de fábrica do Wio Terminal, que é um jogo simples que você pode jogar com o Wio Terminal!

## Baixar o Código-Fonte Completo

Você pode baixar o código-fonte completo do Firmware Inicial do Wio Terminal a partir de [**este repositório**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/jumper) aqui.

- Baixe o repositório inteiro

- Na localização `examples/jumper`

## Bibliotecas Dependentes

### Instalando as Bibliotecas Adafruit ZeroTimer

1. Visite o repositório [Adafruit_ZeroTimer](https://github.com/adafruit/Adafruit_ZeroTimer) e baixe o repositório inteiro para o seu disco local.

2. Agora, a biblioteca Adafruit ZeroTimer pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Adafruit_ZeroTimer` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
Também depende de **1. Seeed_Arduino_LCD 2. Seeed_Arduino_FS 3. Seeed_Arduino_SFUD 4. Adafruit_ZeroDMA**, mas essas bibliotecas estão incluídas na biblioteca de placa do Wio Terminal. Se tiver problemas, atualize para a versão mais recente da biblioteca de placa.
:::

## Instruções para Arduino

Existem **2 maneiras** de carregar imagens dos elementos do jogo:

1. **Usando a Flash:**

      - Este é o método padrão e carrega as imagens na flash.

      - Envie o código.

2. **Carregando imagens usando o Cartão SD:**

      - Copie e cole o arquivo `rgb332` (com todas as imagens) no cartão SD.

      - Se estiver carregando imagens a partir do cartão SD, você precisa descomentar a macro `LOAD_IMAGE_SD`.

      - Envie o código.

Agora, você pode voltar a se divertir jogando games retrô usando o Wio Terminal!

## Suporte Técnico & Discussão de Produtos


Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
