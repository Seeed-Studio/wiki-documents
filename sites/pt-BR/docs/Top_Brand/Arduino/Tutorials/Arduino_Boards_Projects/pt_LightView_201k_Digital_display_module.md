---
description: Módulo de display digital LightView 201k
title: Módulo de display digital LightView 201k
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LightView_201k_Digital_display_module
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LightView_201k_Digital_display_module/
---
<!-- ---
name: LightView 201k Digital display module
category: Tutorial
bzurl:
oldwikiname: LightView 201k Digital display module
prodimagename:
surveyurl: https://www.research.net/r/LightView_201k_Digital_display_module
sku:
--- -->

Guia de início para o display digital LightView 201k
Este guia mostrará como conectar o display digital LightView 201k ao Camera Shield para começar facilmente.

1. Materiais

- Seeeduino V3.0
- Camera Shield
- Display digital LightView 201k

2. Conexão

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/Lightviewdisplay.png)

1. – Brilho+
2. – Brilho-
3. – GND
4. – AV-
5. – AV+
6. – GND
7. – VCC (3.9~5V)

Você precisa conectar apenas 4 linhas.

1. 4 AV- =&gt; V_OUT- do Camera Shield (é necessário soldar um header de 2 pinos)

2. 5 AV+ =&gt;V_OUT+ do Camera Shield(é necessário soldar um header de 2 pinos)

3. 6 GND =&gt; GND do Arduino

4. 7 VCC =&gt; 5V do Arduino

O conjunto final fica assim:

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/图片2.jpg)

3. Como funciona
O display precisa apenas de uma entrada AV. O Camera Shield é usado para gerar o sinal AV. Você não precisa carregar nenhum código no Seeeduino. O Seeeduino faz apenas uma coisa: alimentar o Camera Shield. A saída de sinal AV é uma funcionalidade embutida do chipset VC0706 usado no Camera Shield. Em outras palavras, você pode não precisar do Seeeduino + Camera Shield. O que você precisa é de um sinal AV. Você pode conectar o display a qualquer tipo de TV box que possa gerar o sinal AV. Você também pode conectar o display à saída AV de uma GoPro. É isso.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
