---
description: Xadow - Placa Principal
title: Xadow - Placa Principal
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Main_Board
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Main_Board/
---

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_00V1.jpg)

O módulo Xadow Main Board é baseado no controlador **ATmega32U4**. Ele oferece alto desempenho e baixo consumo de energia, o que torna seu projeto pequeno e portátil, sendo especialmente adequado para projetos vestíveis.

O controlador on-board **ATmega32U4** possui 32K de Flash, 2.5K de SRAM e 1K de EEPROM, e também pode ser usado como um módulo USB escravo, assim como o [Seeeduino Lite](https://www.seeedstudio.com/seeeduino-lite-p-1487.html?cPath=6_7), permitindo que você desenvolva muito mais projetos com ele. Esta placa pode ser alimentada tanto pela conexão USB on-board quanto por uma bateria de lítio. Além disso, há um circuito de carga neste módulo que permite carregar a bateria de lítio pela porta USB.

Na primeira vez que você usar esta Xadow Main Board, instale o driver correspondente e faça uma pequena modificação conforme indicado aqui.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Main-Board-p-1524.html)

## Especificações
---
- Microcontrolador: ATmega32u4
- Tensão de trabalho: 3,3V
- Corrente DC por pino de E/S: 40mA
- Pinos de E/S digitais: 20
- Canais PWM: 7
- Canais de entrada analógica: 12
- Temperatura de operação: -20~70 ℃
- Dimensões: 25,43mm x 20,35mm


## Função da Interface
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/XadowMainBoardScreen.jpg)

- J1: Micro USB. Pode ser usado para carregar a bateria de lítio e para fazer upload de código.
- U2: ATmega32U4 IC, microcontrolador AVR de 8 bits com 32K bytes de Flash ISP e controlador USB.
- RST: Botão de reset. Pode reiniciar todo o sistema quando estiver conectado a vários módulos Xadow.
- J2,J3: Interface FPC.
- U1: CI CN3065, chip de gerenciamento de carga.
- BAT: Conector de bateria, usado para conectar bateria LiPo, a interface é JST 1.0.
- U4: MIC5205-3.3YM5, reguladores de tensão.

## Descrição dos Pinos
---
Os pinos em ambos os lados dos módulos Xadow são simétricos, aqui estão as descrições dos pinos da interface J2 de cima para baixo.

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Pins.jpg)

|Pinos Xadow	|Pinos do Microcontrolador	|Função|
|---|---|---|
|1|	9	|(PCINT1/SCLK)PB1|
|2|	10	|(PDI/PCINT2/MOSI)PB2|
|3|	11	|(PDO/PCINT3/MISO)PB3|
|4|	38	|PF5(ADC5/TMS)|
|5|	14,34,24,44	|VCC|
|6|	5,23,35,43	|GND|
|7|	5,23,35,43	|GND|
|8|	14,34,24,44	|VCC|
|9|	18	|(OC0B/SCL/INT0 )PD0|
|10|	19	|(SDA/INT1)PD1|
|11|	20	|(RXD/INT2)PD2|
|12|	21	|(TXD/INT3)PD3|

## Revisões e Alterações da Placa
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_-_Main_board_v1.3.JPG)

**Revisão 1.3**
1. Esta versão substitui o conector FPC J2 e J3 por um tipo flip. Isso facilita muito para os usuários conectar ou desconectar periféricos.
2. Otimiza o circuito de carregamento com função de controle de caminho.
3. Separa a fonte de alimentação para o MCU e periféricos. Isso torna o funcionamento do MCU mais estável.

## Primeiros Passos com a Xadow Main Board
---
Semelhante ao Arduino, a Xadow Main Board usa apenas um único microcontrolador (o Atmel ATmega32U4) tanto para executar seus sketches quanto para se comunicar via USB com o computador. Isso significa que você só precisa de um cabo USB para programar a Xadow. Os passos específicos são os seguintes:
<!-- - To make your Arduino IDE support Xadow, there're a few steps you need to follow, please refer to [here]() -->
- Baixe os arquivos de driver em [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)
- Conecte o cabo Micro-USB à Xadow Main Board.
- Conecte a outra extremidade do conector Micro-USB à porta USB do computador.
- Em seguida, instale o driver da Xadow. Você pode consultar [Download Arduino and install Arduino driver](https://wiki.seeedstudio.com/pt-br/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) para aprender como instalar o driver da Xadow.

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_Driver_step4.jpg)

 Agora, você pode programar e usar a Xadow da mesma forma que usa outras placas Arduino.

[Boards.txt and USBCore.cpp](https://github.com/freespace/Files_For_Seeed_Main_Board) para Arduino IDE v1.6.3


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo eagle da Xadow Main Board.zip](https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip)
- [Biblioteca da Xadow Main Board](https://github.com/Seeed-Studio/Xadow_MainBoard)

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
