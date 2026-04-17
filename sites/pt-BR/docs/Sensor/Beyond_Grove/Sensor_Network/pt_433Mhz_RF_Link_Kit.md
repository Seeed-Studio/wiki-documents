---
title: Kit de Link RF 433Mhz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/433Mhz_RF_Link_Kit/
slug: /433Mhz_RF_Link_Kit
sku: 113990010
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/433Mhz_RF_Link_Kit/
---

![](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/img/113990010%201.jpg)

O kit é composto por transmissor e receptor, popularmente usado para controle remoto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/433mhz-rf-link-kit-p-127.html?cPath=139_140)

## Especificação
---
- Frequência: 433Mhz.
- Modulação: ASK
- Saída de Dados do Receptor: Alto - 1/2 Vcc, Baixo - 0,7v
- Tensão de Entrada do Transmissor: 3-12V (tensão alta = mais potência de transmissão)
- Tensão de Entrada do Receptor: 3,3-6V (tensão alta = mais potência de recepção)

## Uso
---
A conexão popular é assim: MCU -> Codificador -> Transmissor ------ Receptor -> Decodificador -> MCU

PT2262(Codificador) e PT2272(Decodificador) são opcionais, sua existência é para 1) evitar confusão quando múltiplos links RF estiverem no alcance 2) isolar interferências. Você pode integrar o trabalho de codificação e decodificação nas MCUs de ambos os lados. Sempre que não houver dispositivos de 315Mhz por perto, você pode usá-lo como uma conexão direta por cabo.

Pedimos desculpas pela documentação, vamos trabalhar nela. Antes disso, consulte-nos para quaisquer detalhes, teremos prazer em encontrar a resposta para você ^^ Nós os testamos usando o guia da Sparkfun, é compatível. A única diferença está no encapsulamento, com alguns pinos GND em excesso.

Além disso, iremos fabricar mais módulos RF nós mesmos com diferentes frequências e capacidades. O próximo planejado é baseado no cc1100. Por favor, diga-nos quais são as suas necessidades :)

## Suporte

Se você tiver dúvidas ou outras ideias de design melhores, pode ir ao nosso [fórum](https://community.seeedstudio.com/) para discutir.

## Recursos

- [Esquema de Demonstração](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/315MRFlink.pdf)
- [VirtualWire 1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.rar)
- [Documentação da versão 1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.pdf)
- [exemplo da sparkfun](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/KLP_Walkthrough.pdf)
- [exemplo de uso de módulos rf](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)


## Licenciamento

Esta documentação é licenciada sob a licença Creative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulte os arquivos de código-fonte para detalhes.
Links Externos

Links para páginas da web externas que fornecem mais ideias de aplicação, documentos/datasheets ou bibliotecas de software
- [RCSwitch - Biblioteca Arduino para controlar tomadas de energia remotas 433Mhz](http://code.google.com/p/rc-switch)

## Suporte Técnico & Discussão de Produtos
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>