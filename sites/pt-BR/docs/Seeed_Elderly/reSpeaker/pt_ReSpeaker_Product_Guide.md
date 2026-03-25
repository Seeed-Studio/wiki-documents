---
description: Guia de Produtos ReSpeaker
title: Guia de Produtos reSpeaker
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_Product_Guide/
---

# **Guia de Produtos ReSpeaker**

## O Ecossistema Aberto de Voz para Desenvolvedores

[![All ReSpeaker Dev Boards](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **Escolhendo seu ReSpeaker**

Então você já sabe um pouco sobre o propósito e o uso da linha ReSpeaker – seja pela nossa [página de soluções](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Solutions/) ou pela nossa [página de introdução](https://wiki.seeedstudio.com/pt-br/ReSpeaker/), mas quais produtos realmente atendem às suas necessidades? Não se preocupe – esta página autoconsciente está aqui para ajudar.

## **As Três Categorias**

Atualmente a linha ReSpeaker possui 3 categorias principais de placas. Embora todas as três categorias sejam projetadas para habilitar interfaces de voz, cada uma delas é projetada para se integrar de forma diferente aos projetos.

- Solução SBC
- Solução de Matriz de Microfones
- e Soluções de Matriz de Microfones para Raspberry Pi

### **SBC Solution**

![SBC Solution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

Para projetos que giram totalmente em torno de interação por voz, a linha ReSpeaker Core é ideal. Funcionando como SBCs, elas não só são capazes de escutar a voz e executar DSP baseado em software para o processamento de áudio de front-end, como também controlar todo o fluxo do projeto. Desde manipular hardware até executar código avançado de aplicações de usuário, a linha ReSpeaker Core é projetada para ser o centro de seus projetos.

Sugerido para: Desenvolvedores, Empresas

**A [ReSpeaker Core v2.0](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_v2.0/)** oferece poder de processamento significativo, bem como uma matriz circular integrada de 6 microfones. No centro da placa está o módulo principal, que contém o SoC, memória (RAM) e PMU. Nas bordas externas da placa estão os periféricos, incluindo conectores, módulos WiFi, LEDs e a matriz de microfones. Isso permite fácil customização e faz da ReSpeaker Core v2.0 uma excelente solução de placa tudo‑em‑um para projetos, reduzindo o custo ao levar projetos para escala.

### **Mic Array Solution**

![MicArraySolution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

A linha ReSpeaker Mic Array usa DSP em hardware para aceleração de front-end, retornando voz limpa para o sistema no qual é integrada. Isso a torna ideal para ser adicionada a projetos existentes que se beneficiariam de uma interface de voz.

Sugerido para: Desenvolvedores, Maker Pros, Empresas

**[A ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Mic_Array_v2.0/)** é uma matriz circular de microfones alimentada pelo XMOS XVF3000. Ela oferece processamento de áudio de front-end habilitado por hardware e é compatível com a maioria dos sistemas operacionais comuns, incluindo Windows, macOS e muitas distribuições Linux. Também é capaz de saída de áudio, o que, quando utilizado, permite AEC. A configuração dos microfones também pode ser ajustada e personalizada.

### **Soluções de Matrizes de Microfones para Raspberry Pi**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

Criamos vários ReSpeaker Shields para o Raspberry Pi. Para usuários que querem experimentar comandos de voz simples, criar seu próprio Amazon Echo ou Google Home, ou desenvolver no Raspberry Pi, as matrizes de microfones para Raspberry Pi são uma excelente escolha. Semelhante a outros produtos ReSpeaker, estes também podem ser customizados.

Sugerido para: Makers, Maker Pros, Desenvolvedores

O **[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/pt-br/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** é ótimo para projetos que ficam estacionários contra uma parede. Capaz de detecção de voz em 180°, este kit pode detectar a localização relativa ou focar em uma direção específica enquanto ignora outras entradas de voz. A matriz possui um cabo flexível que permite ser posicionada em várias orientações, oferecendo mais opções para o design do gabinete. Diferente de outras placas, esta contém apenas um único LED azul.

Características notáveis:

- Matriz Linear de 4 Microfones
- Cabo Flat para Posicionamento Flexível
- 1 x LED Azul
- 2 x Conectores Grove (I2C e Digital)
- 1 x Conector de Áudio 3,5 mm (Estéreo)
- 1 x Conector de Alto‑falante JST (Mono)

O **[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/pt-br/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** é excelente para projetos que podem ser colocados no centro das pessoas. Capaz de detecção de voz em 360°, este kit pode detectar a localização relativa ou focar em uma direção específica enquanto ignora outras entradas de voz. A matriz possui um cabo flexível que permite ser posicionada em várias orientações e oferece mais opções para o design do gabinete.

Características notáveis:

- Matriz Circular de 6 Microfones
- Cabo Flat para Posicionamento Flexível
- 12 x LEDs RGB
- 2 x Conectores Grove (I2C e Digital)
- 1 x Conector de Áudio 3,5 mm (Estéreo)
- 1 x Conector de Alto‑falante JST (Mono)

O **[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/pt-br/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)** (circular) é capaz de detecção de voz em 360°. No entanto, diferente das outras placas, ela não possui capacidade de saída de áudio, exigindo que o Raspberry Pi suporte sozinho toda a saída de áudio. A placa possui 4 microfones, 12 LEDs RGB e 2 conectores Grove.

Características notáveis:

- Matriz Circular de 4 Microfones
- 12 LEDs RGB
- 2 x Conectores Grove (I2C e GPIO)

:::note
Não há interface de saída de áudio na ReSpeaker 4-Mic Array para Raspberry Pi. Ela é apenas para captura de voz. Você pode usar o [conector de fone de ouvido](https://www.raspberrypi.org/documentation/configuration/audio-config.md) no Raspberry Pi para saída de áudio. Se o seu projeto exigir saída de áudio de maior qualidade, selecione um produto diferente.
:::

O **[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT/)** é uma ótima opção de nível de entrada. É importante observar que, diferente dos outros itens desta categoria, o 2-Mic HAT não pode detectar a direção do interlocutor, sendo projetado apenas para entrada de voz de campo distante.

Características notáveis:

- Microfones Duplos
- Cabo Flat para Posicionamento Flexível
- 3 x LEDs RGB
- 2 x Conectores Grove (I2C e Digital)
- 1 x Conector de Áudio 3,5 mm (Estéreo)
- 1 x Conector de Alto‑falante JST (Mono)

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
