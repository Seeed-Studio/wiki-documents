---
description: La guía de introducción y ensamblaje del kit Wio-SX1262 y XIAO ESP32S3 con carcasa impresa en 3D
title: Kit XIAO ESP32S3 y Wio-SX1262 con carcasa 3D
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /es/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 11/21/2024
  author: Evelyn Chen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Este dispositivo está basado en XIAO ESP32S3 y el módulo LoRa Wio-SX1262. Junto con una carcasa impresa en 3D exquisita, está equipado con un rango de frecuencia amplio de 868-915MHz y una antena externa de ganancia de 2dBi. Puede soportar gateway LoRaWAN de canal único de 2.5km y comunicación meshtastic. A través del puerto GPIO, puede emparejarse con módulos GNSS y otros módulos adicionales.

## Características

* **Alto rendimiento RF**: Soporta LoRa (862-930MHz), Wi-Fi de 2.4GHz, y comunicación inalámbrica dual BLE 5.0. Cuando se conecta a una antena externa, permite comunicación remota a una distancia de 2.5km (LoRa) y 100m+ (Wi-Fi/BLE).
* **Hub LoRaWAN**: Pre-cargado con firmware LoRaWAN de canal único, está listo para funcionar una vez encendido.
* **Diseño de carcasa 3D**: Midiendo 22x23x57mm, este dispositivo presenta un material ABS negro con un rango de temperatura extenso (-40℃ ~ 100℃), haciéndolo ideal para proyectos al aire libre y con restricciones de espacio.
* **Placa MCU Potente**: Incorpora el procesador ESP32S3 de 32 bits, doble núcleo, Xtensa funcionando hasta 240MHz, con múltiples puertos de desarrollo montados, compatible con Arduino/MicroPython.
* **Diseño de Alimentación Elaborado**: Incluye una interfaz USB Type-C, múltiples interfaces GPIO/I2C/UART y gestión de carga de batería de litio.
* **Hardware Versátil para Múltiples Aplicaciones**: Puede desarrollarse como un nodo o router para [Meshtastic](https://meshtastic.org/), un dispositivo para [Gateway LoRaWAN de Canal Único](https://github.com/Lora-net/one_channel_hub), o un sensor LoRa y LoRaWAN.


## Especificaciones

| Característica | Detalles |
| ---- | ---- |
| Procesador | ESP32-S3R8, Xtensa LX7 doble núcleo, procesador de 32 bits funcionando hasta 240 MHz |
| Memoria | PSRAM de 8M en chip y Flash de 8MB |
| Inalámbrico | Subsistema Wi-Fi completo de 2.4GHz<br/>BLE: Bluetooth 5.0, Bluetooth mesh,<br/>LoRa: Gateway de Canal Único |
| Interfaz | 1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x LED de Usuario, 1x LED de Carga<br/>1x botón Reset, 1x botón Boot |
| Alimentación | Voltaje de entrada (Type-C): 5V<br/>Voltaje de entrada (BAT): 4.2V<br/>Corriente de carga de batería: 100mA |
| Temperatura de Operación | -40 ~ 65°C | 
| **Antena** |
| Tipo | Antena Externa SMA a I-PEX |
| Ganancia Máxima | 2 dBi |
| Dimensión | 13.0x195mm |
| Instalación | Instalar en el exterior de la carcasa |
| Distancia | 2.5km en ambiente abierto |
| Aplicación | Adecuada para la mayoría de escenarios, diseñada para interior y exterior |
| **Mecánico** |
| Dimensión | 22x23x57mm |
| Material | ABS |
| Peso | 37.1g |

## Descripción General del Hardware

<table align="center">
  <tr>
	    <th>Diagrama de la placa de extensión Wio-SX1262</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	    <th>Diagrama de indicación frontal del XIAO ESP32S3</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Diagrama de indicación trasera del XIAO ESP32S3</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Lista de Pines del XIAO ESP32S3</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
</table>

### Lista de Partes
| Artículo | Cantidad |
| ---- | ---- |
| XIAO ESP32S3 & Wio-SX1262 Kit con carcasa 3D | x1 |
| Cable USB tipo C de 20cm | x1 |

### Accesorios recomendados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo GNSS L76K para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Aplicación

2 aplicaciones proporcionadas para este kit.

- Configurando como gateway LoRaWAN (pre-flasheado), por favor sigue [Configuración de Gateway LoRaWAN](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/) y [las instrucciones para conexión LNS](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- Usando Meshtastic para comunicación de red, por favor sigue [las instrucciones de meshtastic](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_meshtastic/)


## Recursos

* [Archivo 3D Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
* [Diagrama Esquemático Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Hoja de Datos del Módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Proyecto Github One-Channel Hub](https://github.com/Lora-net/one_channel_hub)
* [archivo 3D de carcasa](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)
