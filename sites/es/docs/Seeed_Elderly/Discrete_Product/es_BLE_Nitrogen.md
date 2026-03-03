---
description: BLE Nitrogen
title: BLE Nitrogen
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BLE_Nitrogen
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/cover.png)

Las aplicaciones de Zephyr utilizan la configuración nrf52_nitrogen para ejecutarse en el hardware nRF52 Nitrogen. Proporciona soporte para el CPU Nordic Semiconductor nRF52832 ARM Cortex-M4F y los siguientes dispositivos:

* NVIC (Controlador de Interrupciones Vectorizadas Anidadas)
* SYSTICK (Reloj del Sistema de Tick del Sistema)
* UART
* GPIO
* FLASH

El [Nordic Semiconductor Infocenter](http://infocenter.nordicsemi.com/) contiene la información del procesador y la hoja de datos.

Se recomienda encarecidamente que actualices tu entorno de desarrollo con el último [SDK](https://www.zephyrproject.org/downloads/tools) ya que la nueva funcionalidad se prueba contra las últimas versiones.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Nitrogen-p-2711.html)


##Características

* Microcontrolador nRF52832 con 512kB Flash, 64kB ram
    * Cortex M4
    * BLE
    * NFC
* Alimentación USB con protección de fusible
* Gestión de batería
    * Cargador de batería integrado
    * Conector de batería
    * LED indicador de carga de batería
* Depurador SWD LPC11U35 integrado
    * Firmware de depurador SWD
    * USB a Uart
    * Actualización de firmware por arrastrar y soltar
    * Reinicio automático y ejecución después de la actualización del firmware
* Medición de consumo de energía BLE
    * Circuito de medición de corriente integrado
    * Capacidad de medición de 1uA
    * Medición de corriente hasta 150mA
* 7 LEDs
    * USR1, BT, PWR, CDC, DAP, MSD, Carga de batería
* Dos botones pulsadores
    * USR y RESET (también para actualización de firmware LPC11U35)
* Conectores de depuración SWD
    * Conector SWD nRF52832
    * Conector Uart nRF52832
* Antena chip integrada
* Voltaje de trabajo de 1.8V
* Conector de baja velocidad 2x20pin con paso de 2.0mm
* Totalmente compatible con los estándares 96Boards IoT


##Especificaciones


| Parámetro | Valor |
|-----------|-------|
|Chipset	|nRF52832 |
|Velocidad de Reloj |	64MHz|
|Flash|	512KB|
|SRAM|	96KB|
|Voltaje de Salida Digital	|1.8V|
|Pines Analógicos|	4|
|Voltaje de Entrada Analógica	|1.8V|
|Dimensiones|	60x30mm|

##Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/hardware_ov.png)

1.**Micro USB** - para depuración, programación, alimentación y carga de batería.

2.**Indicadores LED**

* ***USR1*** - LED controlado por el usuario, conectado a P0.29
* ***BT*** - Indicador Bluetooth. Este LED se encenderá cuando se conecte a un dispositivo.
* ***PWR*** - Se enciende cuando se inserta USB o batería.
* ***CDC*** - Indicador de datos Uart.
* ***DAP*** - Indicador SWD.
* ***MSD*** - Indicador de Almacenamiento Masivo/Arrastrar y Soltar;

3.**Conector de Batería** - Un conector JST-1.0 para batería de litio de 3.7V

* **Indicador de Carga**
    * PARPADEA: No hay batería insertada
    * ENCENDIDO: Cargando
    * APAGADO: Carga completada

4.**Botón de Reinicio** - Presiona para reiniciar el sistema

5.**Botón de Usuario** - Botón de usuario, conectado a P0.27, pull-up

6.**UART para Depuración**

7.**Antena chip BT**

8.**Conector UFL de antena NFC**

9.**Pines** - Los detalles se refieren al mapa de pines

A.IC - **NRF52832**

B.IC - **LPC11U35**

C.IC - **ETA6003**

##Mapa de Pines


[![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)

:::note
    Haz clic para ver una imagen más grande.
:::
##Software

###Instalar el Controlador

Haz clic para descargar el [controlador para Mbed](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe).

Inserta la placa en la PC a través de un cable micro USB, y haz doble clic en mbedWinSerial_16466.exe para instalarlo, luego encontrarás un nuevo dispositivo en tu administrador de dispositivos.

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/install_driver.png)

###Guía Avanzada

[![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/guide.png)](https://www.zephyrproject.org/)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

* [Esquemas en Archivo Eagle](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip)
* [Esquemas en PDF](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE%20Nitrogen%20v1.0_SCH.pdf)
* [Controlador para Mbed](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe)

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