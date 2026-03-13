---
title: Kits de chave relé remoto 315Mhz - 2 canais
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/315Mhz_remote_relay_switch_kits-2_channels/
slug: /315Mhz_remote_relay_switch_kits-2_channels
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/315Mhz_remote_relay_switch_kits-2_channels/
---

![](http://bz.seeedstudio.com/depot/images/P2130781.jpg)

Este interruptor remoto permite controlar remotamente qualquer dispositivo DC de 12 Volts. Perfeito para controlar quaisquer dispositivos de 12V, como luzes, ventiladores, iluminação de paisagismo e muito mais. Este kit fácil de ligar é perfeito para qualquer pessoa com conhecimento básico de fiação elétrica e pode ser facilmente conectado a muitas aplicações de 12V. Para PC Modders, o resultado final do kit Remote Control 12VDC é realmente impressionante e com certeza irá surpreender o público. Para quem faz DIY, o kit dará um efeito mágico aos seus projetos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Skeleton-Box-p-1407.html)

##   Especificação
---
*   Frequência: 315Mhz.

*   Modulação: ASK

*   Tensão de trabalho: 12VDC

*   Sensibilidade do receptor: -105dbm

*   Distância de emissão: 100m em campo aberto

*   Tamanho: 68mm*47mm*12mm

*   *Padrão com receptor 315Mhz, intercambiável com receptor 433Mhz.

##   Definição de pinos e classificação
---
Cada relé possui um grupo de 3 pinos:

*   **A** - Normalmente fechado, abre quando o relé é ativado

*   **B** -  Nó comum

*   **C** - Normalmente aberto, fecha quando o relé é ativado

##   Uso
---

###   Codificação e Decodificação

O link popular é assim: MCU -&gt; Encoder -&gt; Transmitter ------ Receiver -&gt; Decoder -&gt; MCU,

PT2262(Encoder) e PT2272(Decoder) são opcionais, sua existência serve para

1) evitar confusão quando múltiplos links RF estiverem no alcance

2) isolar interferência. Você pode integrar o trabalho de codificação e decodificação aos MCUs em ambos os lados. Sempre que não houver dispositivos 315Mhz por perto, você pode usá-lo como conexão direta por cabo.

Para configurar um link PT2272 e PT2262, você precisará configurar o PT2262 com um pouco de soldagem:

![](http://bz.seeedstudio.com/depot/images/product/RFReceiverDec.jpg)

E configurar os pinos correspondentes no PT2272:

![](http://bz.seeedstudio.com/depot/images/product/RFTransmitEnc.jpg)

###  Modos de operação do relé

O receptor possui três modos que controlam como as saídas do relé funcionam. Esses modos são selecionáveis pelo usuário usando
o jumper de 3 pinos no receptor.

**Momentary:**
Mova a posição do interruptor para “M???para definir o(s) relé(s) selecionado(s) no modo momentâneo. No modo momentâneo, o(s)
relé(s) selecionado(s) mudará(ão) seu estado e o manterá(ão) pela duração da transmissão recebida. Assim que a
transmissão for encerrada, o relé voltará ao seu estado original.

**Flip-Flop:**
Remova o shunt para definir o(s) relé(s) selecionado(s) no modo Flip-Flop. No modo Flip-Flop, o(s) relé(s) selecionado(s)
mudará(ão) seu estado e o manterá(ão) até que uma transmissão correspondente seja recebida. Cada vez que uma transmissão for
recebida, o relé mudará seu estado e o manterá até que outra transmissão seja recebida.

**Latching:**
Mova a posição do interruptor para “L???para definir o(s) relé(s) selecionado(s) no modo Latching. No modo latching, quando o relé selecionado for ativado pelo transmissor, esse relé mudará seu estado e o manterá até que a alimentação do receptor seja removida ou interrompida.

Consulte o desenho simples para o link RF de 315Mhz. No lado do transmissor, você precisará fornecer 3-5VDC ao pino "+12V" (**Cuidado**: o 12v é uma serigrafia incorreta na PCB, nunca forneça mais de 5V), e definir "TE" em nível alto (5V) para habilitar a transmissão. No lado do receptor, você pode usar +5VDC (também chamado de VCC) para alimentação e ler a saída de D0~D3. "TV" indicará sempre que houver dados alterados chegando.

![](http://bz.seeedstudio.com/depot/images/product/315MhzTransmitter.gif)


##   Recursos
---
*   [Manual de como usar](https://www.seeedstudio.com/depot/datasheet/How%20to%20Use%20315MHz%20Remote%20Relay%20Kits.pdf)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie a questão para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>