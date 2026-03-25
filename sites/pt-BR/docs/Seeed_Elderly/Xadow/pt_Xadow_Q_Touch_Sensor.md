---
description: Xadow - Sensor de Toque Q
title: Xadow - Sensor de Toque Q
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Q_Touch_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Q_Touch_Sensor/
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow%20Q%20touch%20sensor.jpg)

O Sensor de Toque Q é um dispositivo de entrada por toque de alta sensibilidade e alta imunidade a ruídos. Ele é baseado no Atmel AT42QT1070.

O AT42QT1070 modula seus pulsos em um modo de espectro espalhado para suprimir fortemente os efeitos de ruído externo e para suprimir emissões de RF. O QT1070 usa um método de aquisição de pulso duplo. Isso proporciona maior imunidade a ruídos e elimina a necessidade de capacitores de amostragem externos, permitindo detecção de toque usando um único pino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html)

## Especificação
---
*   Tensão de Operação: 3 ~ 5,5V
*   Corrente de Operação @3,3V: 1mA
*   Teclas de Toque: 7 teclas; key0, key1, key2 estão no lado inferior da placa Xadow
*   Protocolo de Comunicação: I2C
*   Endereço I2C: 0x1B

## Função da Interface
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow-Q_Touch.png)

*   ①: Saída das teclas de toque key3, key4
*   ②: Saída das teclas de toque key5, key6

A faixa recomendada para a capacitância da tecla Cx é de 1 pF – 30 pF. Valores maiores de Cx resultarão em sensibilidade reduzida.

*   ③: Interface Xadow
*   ④: Tecla de toque on-board key0
*   ⑤: Tecla de toque on-board key1
*   ⑥: Tecla de toque on-board key2

## Uso
---
Demo:

Quando você tocar no keypad na placa, verá a mensagem pela porta serial.

## Instalação de Hardware
---
- Conecte o Xadow - Q Touch Sensor à Xadow - Main Board

## Parte de Software
---
- 1) Baixe a biblioteca [[Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)];

- 2) Extraia o arquivo para a pasta libraries da IDE Arduino pelo caminho: ..\arduino-1.0.5\libraries.

- 3) Abra o código diretamente pelo caminho: File -&gt; Example -&gt; getTouchNumber.ino

- 4) Envie o código. Observe que você deve selecionar o tipo correto de placa e a porta COM.

Você pode ver:

![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Q_Touch_Demo_output.jpg)


## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
*   [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)

*   [PDF do Esquemático](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0.pdf)

*   [Arquivo Eagle](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip)

*   [Datasheet AT42QT107](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/AT42QT1070-MMH.pdf)

<!-- *   [How to detect finger touch?](/pt-br/How_to_detect_finger_touch) -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
