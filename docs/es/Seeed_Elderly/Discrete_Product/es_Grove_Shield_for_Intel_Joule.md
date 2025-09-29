---
description: Shield Grove para Intel Joule
title: Shield Grove para Intel Joule
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Shield_for_Intel_Joule
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/1.jpg)

En el Foro de Desarrolladores de Intel 2016, Intel anunció la disponibilidad del Módulo Joule, un sistema Linux en módulo que ofrece alta potencia computacional, RAM y almacenamiento. Este shield Grove introduce la familia de módulos Grove al poderoso Intel JouleTM, con el objetivo de ayudar a inventores y desarrolladores de IoT a crear sus proyectos de manera más conveniente y rápida.

Simplemente conectándolo a tu placa Joule, tendrás 8 conectores Grove sólidos y fáciles de usar que incluyen interfaces como I2C, UART, E/S digitales y entradas analógicas de inmediato. Además de los ricos conectores Grove, el shield también mantiene cabeceras de pines 2x20 en caso de que quieras más GPIOs para el proyecto. Un interruptor integrado en la placa te permite seleccionar el voltaje de trabajo a 5V o 3.3V.


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Shield-for-Intel-Joule-p-2782.html)

## Características

- Interfaces: 8 conectores Grove

- Plug-and-play

- Detalle de Interfaces: I2C x 3, UART x 1, Digital x 2, Analógico x 2

- Voltaje de Trabajo: 5V/3.3V

- Un interruptor para seleccionar el voltaje de trabajo.

- Interfaz analógica de 4 canales, Resolución: 12 Bits

- Temperatura de trabajo: -40 - 85℃

- Tamaño: 84.9*51.7mm

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/Grove%20Shield%20for%20intel%20Joule%20Pin.png)

- Puerto Analógico Grove: ⑥/⑨

- Puerto Digital Grove: ⑧/⑩

- Puerto UART Grove: ⑦

- Puerto I2C Grove: ③/④/⑤

- [Breakout 1 / J12 del Intel Joule: ①](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- [Breakout 2 / J13 del Intel Joule: ②](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- Interruptor de Alimentación 3.3V y 5V: ⑪

### Diagrama Pin a Pin
|Conector/Pin del Shield Grove|Señal SOC (Esquemático)|Conector/Pin TuChuck
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
    * Por favor presta atención a la orientación cuando estés conectando el shield.
    * Libmraa no soporta los pines UART de Joule por el momento. Por lo tanto, la interfaz UART no está disponible.
:::

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

* [Archivos de Esquemáticos del Shield Grove para Intel Joule](https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>