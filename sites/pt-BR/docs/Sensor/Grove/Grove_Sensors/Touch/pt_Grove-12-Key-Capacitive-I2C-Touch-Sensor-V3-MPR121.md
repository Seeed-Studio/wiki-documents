---
description: Grove - Sensor de Toque Capacitivo I2C de 12 Teclas V3 (MPR121)
title: Grove - Sensor de Toque Capacitivo I2C de 12 Teclas V3 (MPR121)
keywords:
  - Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121
sku: 101020872
last_update:
  date: 1/19/2023
  author: jianjing Huang
createdAt: '2023-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121/
---


<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/touch_sensor_V3.png"/></div>

Este sensor é uma versão atualizada do Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121); ele adiciona mais duas portas GND na cabeça para ser mais estável e, ao mesmo tempo, os pinos frontais são mais espaçados para evitar curto‑circuito causado por fios que se toquem acidentalmente.

O **Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)** é um sensor de toque capacitivo de proximidade multicanal. É um módulo 3 em 1 com os seguintes recursos: detecção de capacitância, detecção de toque e detecção de proximidade.

**Detecção de Capacitância**: este módulo usa um esquema de detecção de capacitância com corrente contínua (DC) constante. Ele pode medir capacitâncias de 10 pF até mais de 2000 pF com resolução de até 0,01 pF.

**Detecção de Toque**: depois que os dados de capacitância do eletrodo são adquiridos, o estado de toque/liberação do eletrodo é determinado comparando‑o com o valor de linha de base da capacitância.

**Detecção de Proximidade**: um novo recurso do MPR121 é o sistema de detecção de proximidade. Isso significa que todos os eletrodos do sistema podem ser
somados para criar um único eletrodo grande.

Baseado no Freescale MPR121, este sensor possui 12 eletrodos totalmente independentes com autoconfiguração integrada. Graças à interface I2C, você pode detectar todos os sinais dos 12 eletrodos com apenas uma porta Grove, e o endereço I2C é configurável por hardware, de 0X5B a 0X5D. Isso também torna possível que vários
**Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)** sejam usados juntos para expansão de canais em um único sistema; você pode construir um sistema de toque que contenha no máximo 36 eletrodos.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Mudanças de Versão

|Item| Grove - 12 Key Capacitive I2C Touch Sensor V2 | Grove - I2C Touch Sensor |
|---|---|---|
|Main Chip|MPR121|MPR121|
|I2C Address|changeable(0X5B ~ 0X5D)|unmodifiable(0X5A)|
|Touch Sensor Feeler|x|√|
|Input Interface|alligator interface|DIP 2Pin Female Header|
|Cost Performance|High|Low|
|Release Time|September 11-2018|October 31-2015|

## Recursos

- ADC interno de 10 bits
- Autocalibração independente integrada para cada entrada de eletrodo
- Eletrodos totalmente independentes com autoconfiguração integrada
- Interface I2C, com IRQ, saída de interrupção para indicar mudanças de status dos eletrodos
- Endereço I2C configurável por hardware
- 12 entradas de eletrodo/capacitância, das quais 8 são multifuncionais para acionamento de LED e GPIO
- Autoconfiguração da corrente de carga e tempo de carga para cada entrada de eletrodo
- Limiares separados de toque e liberação para cada eletrodo, proporcionando histerese e independência entre eletrodos
- Adiciona mais dois pinos GND e amplia o espaçamento dos pinos para manuseio seguro

## Aplicações

- Periféricos de PC
- Reprodutores MP3
- Controles Remotos
- Telefones Celulares
- Controles de Iluminação

## Visão Geral de Hardware

### Mapa de Pinos

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/Touch-sensor-V3-with-GND.png"/></div>

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/V3-data.png"/></div>

:::tip
Para o CH0 ~ CH11, depois que os dados de capacitância do eletrodo são adquiridos, o estado de toque/liberação do eletrodo é determinado comparando‑o com o valor de linha de base da capacitância. E você pode definir o valor de linha de base para cada canal separadamente. Os pinos Pin12 ~ Pin19 são multifuncionais, o que significa que você pode configurá‑los como GPIO ou driver de LED; para mais detalhes, consulte a nota de aplicação da Freescale [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf).

:::

## Plataformas Compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
As plataformas mencionadas acima como compatíveis são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples que você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Piano de Folhas**: fizemos um piano usando um sensor de toque, bem como folhas como teclas do piano.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Brinque com Scratch**: como jogar um jogo de Scratch com um Sensor de Toque?

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
