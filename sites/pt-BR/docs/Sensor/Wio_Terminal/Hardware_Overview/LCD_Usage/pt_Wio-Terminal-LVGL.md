---
title: Como usar a LvGL Graphics Library
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LVGL/
slug: /Wio-Terminal-LVGL
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-LVGL/
---

# Como usar a LvGL Graphics Library para o Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif" /></div>

Neste tutorial, vamos ensinar como usar a [**LvGL**](https://lvgl.io/) (Light and Versatile
Graphics Library) biblioteca gráfica para o Wio Terminal. Esta é uma portabilidade a partir do [lv_arduino](https://github.com/lvgl/lv_arduino) original para o Wio Terminal.

[**LvGL**](https://lvgl.io/) é uma biblioteca gráfica de código aberto que fornece tudo o que você precisa para criar uma GUI embarcada com elementos gráficos fáceis de usar, belos efeitos visuais e baixo consumo de memória.

## Hardware Necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Primeiros Passos

- Siga [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/) antes dos passos a seguir.

### Instale a Seeed_Arduino_LvGL

1. Acesse o repositório [Seeed_Arduino_LvGL](https://github.com/Seeed-Studio/Seeed_Arduino_LvGL) e faça o download de todo o repositório para o seu disco local.

2. Agora, a biblioteca FS pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_LvGL` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Exemplos

#### 1. Bench Mark

Este é o demo de benchmark da biblioteca gráfica LvGL no Wio Terminal, basta enviar o `benchmark.ino` para o dispositivo usando a IDE Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif" /></div>

:::note
    A porta atual dos FPS no demo de benchmark não está sendo exibida corretamente, fique ligado para mais atualizações.
:::

#### 2. Stress Test

Este é o demo de benchmark da biblioteca gráfica LvGL no Wio Terminal, basta enviar o `lv_stresss.ino` para o dispositivo usando a IDE Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif" /></div>

Para mais formas de uso, você também pode utilizar a [**documentação oficial da LvGL**](https://docs.lvgl.io/latest/en/html/index.html) e o [Exemplo Arduino](https://github.com/lvgl/lvgl/tree/master/examples/arduino) como referência.

## Recursos

- [Documentação oficial da LvGL Library](https://docs.lvgl.io/latest/en/html/index.html)
- [LvGL Github](https://github.com/lvgl/lvgl)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
