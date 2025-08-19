---
description: Introducción y guía de ensamble del kit Wio-SX1262 y XIAO ESP32S3 con carcasa impresa en 3d
title: XIAO ESP32S3 & Wio-SX1262 Kit con carcasa 3d
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /es/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 05/19/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Este dispositivo está basado en el XIAO ESP32S3 y el módulo LoRa Wio-SX1262. Junto con una carcasa impresa en 3D de diseño elegante, está equipado con una antena externa de amplio rango de frecuencia de 868 - 915 MHz y ganancia de 2dBi. Puede soportar una distancia de comunicación de 2.5 km como gateway LoRaWAN de un solo canal y también permite comunicación vía Meshtastic. A través del puerto GPIO, puede conectarse con módulos GNSS y otros módulos adicionales.

## Características

* **Alto rendimiento RF**: Compatible con LoRa (862 - 930 MHz), Wi-Fi 2.4GHz y BLE 5.0, permite comunicación inalámbrica dual. Con antena externa, permite comunicación remota de hasta 2.5 km (LoRa) y más de 100 m (Wi-Fi / BLE).
* **Hub LoRaWAN**: Viene con firmware LoRaWAN de un solo canal precargado, listo para funcionar al encenderlo.
* **Diseño con carcasa 3D**: Con dimensiones de 22x23x57 mm, está fabricado en material ABS negro, con un amplio rango de temperatura (-40℃ ~ 100℃), ideal para proyectos al aire libre o con espacio limitado.
* **Potente placa MCU**: Incorpora el procesador Xtensa de 32 bits, doble núcleo, ESP32S3 funcionando hasta 240 MHz, múltiples puertos de desarrollo, compatible con Arduino / MicroPython.
* **Diseño eléctrico elaborado**: Incluye interfaz USB Tipo-C, múltiples interfaces GPIO/I2C/UART y gestión de carga de batería de litio.
* **Hardware versátil para múltiples aplicaciones**: Puede desarrollarse como nodo o router para [Meshtastic](https://meshtastic.org/), dispositivo para [Gateway LoRaWAN de canal único](https://github.com/Lora-net/one_channel_hub), o sensor LoRa & LoRaWAN.

## Especificaciones

| Característica | Detalles |
| ---- | ---- |
| Procesador | ESP32-S3R8, procesador de doble núcleo Xtensa LX7 de 32 bits a hasta 240 MHz |
| Memoria | 8M PSRAM en chip y 8MB de Flash |
| Inalámbrico | Wi-Fi de 2.4GHz completo<br/>BLE: Bluetooth 5.0, Bluetooth mesh<br/>LoRa: Gateway de Canal Único |
| Interfaces | 1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x LED de usuario, 1x LED de carga<br/>1x Botón de reinicio, 1x Botón de arranque |
| Alimentación | Voltaje de entrada (Tipo-C): 5V<br/>Voltaje de entrada (BAT): 4.2V<br/>Corriente de carga de batería: 100mA |
| Temperatura de Operación | -40 ~ 65°C | 
| **Antena** |
| Tipo | Antena externa SMA a I-PEX |
| Ganancia Máxima | 2 dBi |
| Dimensión | 13.0x195mm |
| Instalación | Se instala en el exterior de la carcasa |
| Distancia | 2.5 km en entorno abierto |
| Aplicación | Apta para la mayoría de escenarios, diseñada para interiores y exteriores |
| **Mecánico** |
| Dimensiones | 22x23x57mm |
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
	    <th>Diagrama frontal del XIAO ESP32S3</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Diagrama trasero del XIAO ESP32S3</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Lista de pines del XIAO ESP32S3</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
</table>

### Lista de Partes
| Ítem | Cantidad |
| ---- | -------- |
| Kit XIAO ESP32S3 & Wio-SX1262 con carcasa 3D | x1 |
| Cable USB tipo C de 20 cm | x1 |

### Accesorios recomendados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Modulo L76K GNSS para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Aplicación

Se proveen 2 aplicaciones para este kit.

- Configuración como gateway LoRaWAN (pre-flasheado), por favor sigue [Configuración del Gateway LoRaWAN](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/) y [la instrucción para conexión LNS](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- Uso de Meshtastic para comunicación en red, por favor sigue [la instrucción de Meshtastic](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_meshtastic/)

## Recursos

* [Archivo 3D Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
* [Diagrama esquemático Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Ficha técnica del módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Proyecto Github One-Channel Hub](https://github.com/Lora-net/one_channel_hub)
* [Archivo 3D de carcasa](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)

