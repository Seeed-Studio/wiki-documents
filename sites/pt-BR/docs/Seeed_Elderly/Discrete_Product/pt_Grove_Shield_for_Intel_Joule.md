---
description: Grove Shield para Intel Joule
title: Grove Shield para Intel Joule
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Shield_for_Intel_Joule
sku: 103030095
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove_Shield_for_Intel_Joule/
---


![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/1.jpg)

No Intel Developer Forum de 2016, a Intel anunciou a disponibilidade do Módulo Joule, um sistema Linux em módulo que oferece alta capacidade computacional, RAM e armazenamento. Este Grove shield apresenta a família de módulos Grove ao poderoso Intel JouleTM, com o objetivo de ajudar inventores e desenvolvedores de IoT a criar seus projetos de forma mais conveniente e rápida.

Simplesmente conectando-o à sua placa Joule, ela passará a ter imediatamente 8 conectores Grove sólidos e fáceis de usar, que incluem interfaces como I2C, UART, E/S digitais e entradas analógicas. Além dos ricos conectores Grove, o shield também mantém cabeçalhos de pinos 2x20 caso você queira mais GPIOs para o projeto. Uma chave integrada na placa permite selecionar a tensão de operação em 5V ou 3,3V.


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Shield-for-Intel-Joule-p-2782.html)

## Recursos

- Interfaces: 8 conectores Grove

- Plug-and-play

- Detalhes das interfaces: I2C x 3, UART x 1, Digital x 2, Analógica x 2

- Tensão de operação: 5V/3,3V

- Uma chave para selecionar a tensão de operação.

- Interface analógica de 4 canais, resolução: 12 bits

- Temperatura de operação: -40 - 85℃

- Tamanho: 84,9*51,7 mm

## Visão geral do hardware

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/Grove%20Shield%20for%20intel%20Joule%20Pin.png)

- Porta analógica Grove: ⑥/⑨

- Porta digital Grove: ⑧/⑩

- Porta Grove UART: ⑦

- Porta Grove I2C: ③/④/⑤

- [Breakout 1 / J12 do Intel Joule: ①](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- [Breakout 2 / J13 do Intel Joule: ②](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- Chave de alimentação 3,3V & 5V: ⑪

### Diagrama pino a pino
|Conector/Pino do Grove Shield|Sinal do SoC (Esquemático)|Conector/Pino TuChuck
|:---:|:---:|:---:|
|J1|Breakout1|J12|
|J2|Breakout2|J13|
|J3-1|I2C_0_SCL_H|J12-13|
|J3-2|I2C_0_SDA_H|J12-11|
|J4-1|I2C_1_SCL_H|J13-33|
|J4-2|I2C_1_SDA_H|J13-31|
|J5-1|I2C_2_SCL_H|J13-37|
|J5-2|I2C_2_SDA_H|J13-35|
|J6-1|AIN2|/|
|J6-2|AIN3|/|
|J7-1|UART_0_TXD|J12-7|
|J7-2|UART_0_RXD|J13-28|
|J8-1|Digital_1_PWM_0|J12-26|
|J8-2|Digital_1_PWM_1|J12-28|
|J9-1|AIN0|/|
|J9-2|AIN01|/|
|J10-1|Digital_2_PWM_2|J12-30|
|J10-2|Digital_2_PWM_3|J12-32|


:::note
    * Por favor, preste atenção à orientação ao conectar o shield.
    * O Libmraa não oferece suporte, por enquanto, aos pinos UART do Joule. Portanto, a interface UART não está disponível.
:::

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

* [Arquivos do esquemático do Grove Shield para Intel Joule](https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res)

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
