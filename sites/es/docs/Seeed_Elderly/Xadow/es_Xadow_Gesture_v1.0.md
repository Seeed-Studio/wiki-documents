---
description: Xadow - Gesture v1.0
title: Xadow - Gesture v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Gesture_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_3.jpg)

El sensor en Xadow - Gesture v1.0 es PAJ7620U2 que integra la función de reconocimiento de gestos con interfaz I2C general en un solo chip. Puede reconocer 13 gestos incluyendo mover arriba, mover abajo, mover izquierda, mover derecha, mover adelante, mover atrás, círculo en sentido horario, círculo en sentido antihorario, arriba a abajo, abajo a arriba, izquierda a derecha, derecha a izquierda y onda. Esta información de gestos puede ser accedida simplemente a través del bus I2C.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Gesture-v1.0-p-2460.html)

## Características
---
- Reconocimiento de 13 gestos
- La velocidad de gesto es de 60°/s a 600°/s en Modo Normal y de 60°/s a 1200°/s en Modo Gaming
- Inmunidad a luz ambiente: < 100k Lux
- Detección de proximidad integrada
- Interfaz I2C hasta 400 kbit/s
- Compatible con la interfaz Xadow

## Especificaciones
---
- Sensor: PAJ7620U2
- Alimentación: 2.8V a 3.3V y el voltaje de I/O es 1.8V~3.3V
- Compatible: interfaz Xadow
- Interfaz: IIC
- Temperatura de Operación: -40°C a +85°C
- Dimensiones: 25 * 20mm;
-
## Función de la Interfaz
---
![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_2.jpg)

- P1: Cortocircuitos, entonces la señal de interrupción se conectará con el pin PF0/A5.
- U1: PAJ7620U2; Sensor de Reconocimiento de Gestos Integrado.
- J1, J2: interfaz FPC.

:::note
Cuando conecte Xadow - Gesture a Xadow Main Board, la dirección de conexión debe ser cuidadosa. El método de conexión es que la esquina no rellena de un módulo xadow se conecte al ángulo recto de otro módulo (vea las cuatro esquinas de cada módulo xadow).
:::
## Descripción de Pines
---
Los pines en ambos lados de los módulos Xadow son simétricos, aquí están las descripciones de pines sobre la Interfaz de arriba a abajo.

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_5.jpg)

|Pines Xadow|	Pines PAJ7620U2	|Función|
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


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Xadow - Gesture v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip)
- [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- [Librería de Xadow - Guesture](https://github.com/Seeed-Studio/Grove_Guesture)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>