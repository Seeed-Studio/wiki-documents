---
description: Este wiki fornece um guia passo a passo sobre como obter os logs de boot do reComputer J4012 (ou dispositivo similar) usando a porta serial do Jetson.
title: Como obter o log do sistema do reComputer J30/J40?
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /get_the_system_log_of_recomputer_j30_and_j40
last_update:
  date: 1/22/2025
  author: Youjiang
createdAt: '2025-01-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/get_the_system_log_of_recomputer_j30_and_j40/
---


Este wiki usará o [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) como exemplo para demonstrar como obter os logs de boot de um dispositivo via porta serial do Jetson.

## Pré-requisitos

- reComputer J4012/ J4011/ J3010 ou J3011
- [Módulo USB para Serial (TTL)](https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html)
- Um computador com uma ferramenta de depuração de porta serial instalada

:::info
Você pode baixar e instalar uma ferramenta de depuração de porta serial de acordo com sua preferência pessoal. Recomendamos usar [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [XShell](https://www.netsarang.com/en/xshell/) ou [MobaXterm](https://mobaxterm.mobatek.net/). 

Este tutorial usa MobaXterm.
:::

## Conexão de Hardware

1. Conecte os pinos correspondentes da interface J15 ao módulo USB2TTL.
2. Conecte o módulo USB2TTL ao computador com a ferramenta de depuração de porta serial instalada.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/hardware_connection.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/pin.png"/>
</div>

## Obter Log do Sistema

**Passo 1.** Obtenha o número de identificação do módulo USB2TTL reconhecido pelo computador.

:::note
Se o seu computador estiver executando Windows, você pode encontrar o número de identificação reconhecido no Gerenciador de Dispositivos.
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/com.png"/>
</div>

**Passo 2.** Abra a ferramenta de depuração de porta serial, configure o número da porta serial e defina a taxa de baud para `115200`.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/config_serial.png"/>
</div>

**Passo 3.** Ligue o Jetson. Se tudo estiver funcionando corretamente, você deverá ver os logs de boot do sistema na janela da ferramenta de depuração de porta serial.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/rwiKgF91mNE" title="Get Sys Log of reComputer J30/J40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
