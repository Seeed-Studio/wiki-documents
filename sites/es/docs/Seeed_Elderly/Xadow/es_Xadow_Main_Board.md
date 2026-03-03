---
description: Xadow - Main Board
title: Xadow - Main Board
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Main_Board
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_00V1.jpg)

El módulo Xadow Main Board está basado en el controlador **ATmega32U4**. Presenta alto rendimiento y bajo consumo de energía, lo que hace que tu proyecto sea pequeño y portátil, especialmente adecuado para proyectos wearables.

El controlador integrado **ATmega32U4** tiene 32K de Flash y 2.5K de SRAM y 1K de EEPROM, también puede ser usado como un módulo esclavo USB, igual que el [Seeeduino Lite](https://www.seeedstudio.com/seeeduino-lite-p-1487.html?cPath=6_7), para que puedas hacer muchos más proyectos con esto. Esta placa puede ser alimentada desde la conexión USB integrada o una batería de litio. Además, hay un circuito de carga en este módulo para que puedas cargar la batería de litio a través del puerto USB.

La primera vez que uses esta placa principal Xadow, por favor instala el controlador relacionado y haz pequeñas modificaciones como se indica aquí.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Main-Board-p-1524.html)

## Especificaciones
---
- Microcontrolador: ATmega32u4
- Voltaje de trabajo: 3.3V
- Corriente DC por pin de E/S: 40mA
- Pines de E/S digitales: 20
- Canales PWM: 7
- Canales de entrada analógica: 12
- Temperatura de operación: -20~70 ℃
- Dimensiones: 25.43mm x 20.35mm


## Función de la interfaz
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/XadowMainBoardScreen.jpg)

- J1: Micro USB. puede ser usado para cargar la batería de litio y subir código.
- U2: IC ATmega32U4, microcontrolador AVR de 8 bits con 32K bytes de Flash ISP y controlador USB.
- RST: Botón de reinicio. Puede reiniciar todo el sistema cuando conecta varios módulos Xadow.
- J2,J3: Interfaz FPC.
- U1: IC CN3065, chip de gestión de carga.
- BAT: Conector de batería, usado para conectar batería LiPo, la interfaz es JST 1.0.
- U4: MIC5205-3.3YM5, reguladores de voltaje.

## Descripción de pines
---
Los pines en ambos lados de los módulos Xadow son simétricos, aquí están las descripciones de pines sobre la interfaz J2 de arriba hacia abajo.

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Pins.jpg)

|Pines Xadow	|Pines del microcontrolador	|Función|
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

## Revisiones de la placa y cambios
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_-_Main_board_v1.3.JPG)

**Revisión 1.3**
1. Esta versión reemplaza el conector FPC J2 y J3 por un tipo Flip. Hace que los usuarios puedan conectar o desconectar periféricos más fácilmente.
2. Optimiza el circuito de carga con función de control de ruta.
3. Separa la fuente de alimentación para MCU y periféricos. Hace que el MCU funcione de manera más estable.

## Comenzar con Xadow Main Board
---
Similar al Arduino, el Xadow Main Board usa solo un microcontrolador único (el Atmel ATmega32U4) para ejecutar tus sketches y comunicarse por USB con la computadora. Esto significa que solo necesitas un cable USB para programar el Xadow. Los pasos específicos son los siguientes:
<!-- - To make your Arduino IDE support Xadow, there're a few steps you need to follow, please refer to [here]() -->
- Descarga los archivos del controlador desde [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)
- Conecta el cable Micro-USB al Xadow Main Board.
- Conecta el otro lado del conector Micro-USB al puerto USB de la computadora.
- Luego instala el controlador Xadow. Puedes referirte a [Descargar Arduino e instalar el controlador de Arduino](https://wiki.seeedstudio.com/es/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) para aprender cómo instalar el controlador Xadow.

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_Driver_step4.jpg)

 Ahora, puedes programar y usar el Xadow como usas otras placas Arduino.

[Boards.txt y USBCore.cpp](https://github.com/freespace/Files_For_Seeed_Main_Board) para Arduino IDE v1.6.3


## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo eagle de Xadow Main Board.zip](https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip)
- [Librería de Xadow Main Board](https://github.com/Seeed-Studio/Xadow_MainBoard)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>