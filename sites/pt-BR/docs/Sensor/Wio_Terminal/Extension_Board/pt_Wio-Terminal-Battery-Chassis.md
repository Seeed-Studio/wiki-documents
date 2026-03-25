---
description: Chassi de Bateria para Wio Terminal
title: Chassi de Bateria para Wio Terminal
keywords:
  - Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Battery-Chassis
last_update:
  date: 1/30/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Battery-Chassis/
---


![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

:::note
1. Esta versão do chassi de bateria do Wio Terminal não consegue desligar completamente a alimentação (sem impacto no uso).
2. A corrente de carga chegará a 1,5A, o que pode reduzir a vida útil da bateria ou causar outros problemas.
Estamos otimizando o design da nova versão (a data estimada de lançamento ainda não está disponível) e recomendamos a nova versão se você for iniciante.
*Entre em contato conosco (techsupport@seeed.cc) para suporte técnico ou troca se você encontrar qualquer problema durante o uso desta versão.
*NÃO deixe os pinos tocarem outros objetos quando a alimentação estiver ligada.
:::

O Chassi de Bateria para Wio Terminal é uma placa de extensão indispensável para a placa de desenvolvimento [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html), pois fornece uma fonte de alimentação externa para o Wio Terminal, aumentando sua portabilidade e compacidade. Ele possui **uma bateria de polímero de lítio recarregável de 650mAH, 4 portas Grove analógicas/digitais, 1 porta Grove I2C e 1 porta Grove UART, além de um gabinete em ABS para estética e proteção.** Há também o mesmo conector GPIO compatível com 40 pinos do Raspberry Pi na parte de trás do Chassi de Bateria para Wio Terminal para mais expansões!

Com a [Wio-Terminal Dev Board](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) + Chassi de Bateria para Wio Terminal, você consegue construir projetos IoT extremamente poderosos e compactos com muita facilidade. Com as portas Grove estendidas, você pode aproveitar os recursos plug and play do [Ecossistema Grove](https://www.seeedstudio.com/category/Grove-c-1003.html)!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

## Características

- Bateria de Polímero de Lítio Recarregável Integrada de 650mAh
- Carregamento via USB Type-C
- Proteção contra sobrecorrente
- Modo Hiccup/Proteção Hiccup
- 4 x Portas Grove Analógicas/Digitais
- 1 x Porta Grove I2C
- 1 x Porta Grove UART
- Ímãs ficam ocultos dentro do gabinete para que ele possa ser preso no quadro branco!

## Especificações

- O Chassi de Bateria para Wio Terminal é alimentado pela interface USB Type-C ou pela bateria interna. A corrente máxima de entrada da USB Type-C é 2A, e a faixa de tensão de entrada é **4,75V ~ 5,25V.**

- A bateria integrada é uma bateria de polímero de lítio recarregável, com capacidade de 650mAh. A tensão de saída da bateria é 3,7V, com tensão de carga de 4,2V.
A bateria só pode ser carregada através da interface USB Type-C e não pode ser carregada através do conector fêmea ou da interface Grove.

- A corrente em modo de espera do Chassi de Bateria para Wio Terminal é inferior a 300uA.

- O Chassi de Bateria para Wio Terminal possui proteção contra sobrecorrente quando é alimentado pela interface USB Type-C, e o limite de corrente da proteção contra sobrecorrente é 2,5A.

- Quando o Chassi de Bateria para Wio Terminal entra em curto-circuito no modo alimentado por bateria, ele entrará em modo hiccup. Após a remoção do curto-circuito, retornará automaticamente ao modo normal de fornecimento de energia.

## Visão Geral do Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

## Precauções

- O Chassi de Bateria para Wio Terminal não pode fornecer tensão de 3,3V sozinho, ele só pode fornecer tensão de 5V. Para fornecer 3,3V, ele deve ser usado com o Wio Terminal.
- Quando o Chassi de Bateria para Wio Terminal é alternado do modo de carregamento de bateria para o modo de alimentação por bateria, haverá um tempo de queda de tensão de 1,2s.
- Por padrão, o Chassi de Bateria para Wio Terminal é alimentado pela bateria quando não está conectado ao USB Type-C. Depois de conectar o USB Type-C, ele alterna automaticamente para o USB Type-C para o fornecimento de energia.
- Quando o Chassi de Bateria para Wio Terminal está conectado ao USB Type-C, ele fornecerá energia tanto para a bateria quanto para o pino RPI_5V no conector. Nesse momento, a bateria não fornecerá energia. Se a bateria de lítio não estiver totalmente carregada, ela interromperá o carregamento após atingir 100%.

## FAQ

Corrente de Carga:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png" /></div>

- Este resistor é alterado para **680kΩ/1%** para limitar a corrente de carga a **450mA**.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo de Projeto do Esquemático do Chassi de Bateria para Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip)

## Suporte Técnico & Discussão sobre Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
