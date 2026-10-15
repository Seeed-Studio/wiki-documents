---
title: Kit de link RF de 315Mhz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/315Mhz_RF_link_kit/
slug: /315Mhz_RF_link_kit
sku: 113990017
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/315Mhz_RF_link_kit/
---
![](http://bz.seeedstudio.com/depot/images/product/3151.jpg)

O kit é constituído por transmissor e receptor, popularmente usado para controle remoto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html)

##   Especificação
---
*   Frequência: 315Mhz.

*   Modulação: ASK

*   Saída de Dados do Receptor: High - 1/2 Vcc, Low - 0,7v

*   Tensão de Entrada do Transmissor: 3-12V (tensão alta = mais potência de transmissão)

##   Uso
---
A ligação popular é assim: MCU -&gt; Encoder -&gt; Transmitter ------ Receiver -&gt; Decoder -&gt; MCU,

PT2262 (Encoder) e PT2272 (Decoder) são opcionais, sua existência serve para 1) evitar confusão quando houver múltiplos links RF no alcance 2) isolar interferências. Você pode integrar o trabalho de codificação e decodificação nos MCUs de ambos os lados. Sempre que não houver dispositivos de 315Mhz por perto, você pode usá-lo como uma conexão direta por cabo.

Perdoe a documentação, vamos trabalhar nela. Antes disso, consulte-nos para quaisquer detalhes, teremos prazer em encontrar a resposta para você ^^ Nós os testamos usando o guia da Sparkfun, é compatível. A única diferença está no pacote, com alguns pinos GND em excesso.

Além disso, faremos mais módulos RF nós mesmos, com diferentes frequências e capacidades. O próximo em planejamento é baseado no cc1100. Por favor, envie suas sugestões sobre o que você precisa :)

![](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/img/315433RF.jpg)

##   Recursos
---
*   [Esquema de Demonstração](https://www.seeedstudio.com/depot/datasheet/315MRFlink.pdf)

*   [Arquivo:VirtualWire.zip](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/res/VirtualWire.zip "File:VirtualWire.zip")

*   [Documentação para 1.3](https://www.seeedstudio.com/depot/images/product/VirtualWire.pdf)

*   [Exemplo da sparkfun](http://www.sparkfun.com/datasheets/RF/KLP_Walkthrough.pdf)

*   [Exemplo de módulos rf em execução](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>