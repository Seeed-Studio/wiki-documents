---
description: Xadow - Gesture v1.0
title: Xadow - Gesture v1.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Gesture_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Gesture_v1.0/
---

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_3.jpg)

O sensor do Xadow - Gesture v1.0 é o PAJ7620U2, que integra a função de reconhecimento de gestos com a interface I2C geral em um único chip. Ele pode reconhecer 13 gestos, incluindo mover para cima, mover para baixo, mover para a esquerda, mover para a direita, mover para frente, mover para trás, círculo no sentido horário, círculo no sentido anti-horário, de cima para baixo, de baixo para cima, da esquerda para a direita, da direita para a esquerda e acenar. Essas informações de gestos podem ser acessadas facilmente via barramento I2C.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Gesture-v1.0-p-2460.html)

## Recursos
---
- Reconhecimento de 13 gestos
- A velocidade do gesto é de 60°/s a 600°/s em Modo Normal e 60°/s a 1200°/s em Modo de Jogo
- Imunidade à luz ambiente: < 100k Lux
- Detecção de proximidade embutida
- Interface I2C de até 400 kbit/s
- Compatível com a interface Xadow

## Especificação
---
- Sensor:PAJ7620U2
- Fonte de alimentação: 2,8V a 3,3V e a tensão de E/S é 1,8V~3,3V
- Compatível: interface Xadow
- Interface:IIC
- Temperatura de operação: -40°C a +85°C
- Dimensões:25 * 20mm;
-
## Função da Interface
---
![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_2.jpg)

- P1:Em curto-circuito, então o sinal de interrupção será conectado ao pino PF0/A5 .
- U1:PAJ7620U2; Sensor de Reconhecimento de Gestos Integrado.
- J1,J2:Interface FPC.

:::note
Ao conectar o Xadow - Gesture à Xadow Main Board, a direção da conexão deve ser cautelosamente observada. O método de conexão é que o canto chanfrado de um módulo Xadow se conecta ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
## Descrição dos Pinos
---
Os pinos em ambos os lados dos módulos Xadow são simétricos; aqui estão as descrições dos pinos da interface de cima para baixo.

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_5.jpg)

|Pinos Xadow|	 Pinos PAJ7620U2	|Função|
|---|---|---|
|1	|NC	|(PCINT1/SCLK)PB1
|2	|NC	|(PDI/PCINT2/MOSI)PB2
|3	|NC	|(PDO/PCINT3/MISO)PB3
|4	|3/INT	|PF5(ADC5/TMS)
|5	|1/VBUS , 11/VLED , 12/VDD	|VCC
|6	|6/GND , 10/GND	|GND
|7	|6/GND , 10/GND	|GND
|8	|1/VBUS , 11/VLED , 12/VDD	|VCC
|9	|5/SCL	|(OC0B/SCL/INT0 )PD0
|10	|2/SDA	|(SDA/INT1)PD1
|11	|NC	|(RXD/INT2)PD2
|12	|NC	|(TXD/INT3)PD3


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Xadow - Gesture v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip)
- [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- [Biblioteca do Xadow - Guesture](https://github.com/Seeed-Studio/Grove_Guesture)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
