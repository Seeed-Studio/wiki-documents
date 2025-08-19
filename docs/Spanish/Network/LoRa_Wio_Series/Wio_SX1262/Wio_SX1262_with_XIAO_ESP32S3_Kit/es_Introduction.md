---
description: Introducción al kit XIAO ESP32S3 & Wio-SX1262
title: Introducción al kit XIAO ESP32S3 & Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /es/wio_sx1262_with_xiao_esp32s3_kit
sidebar_position: 1
last_update:
  date: 05/20/2025
  author: Guillermo
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:600, height:'auto'}}/></div>

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <a
    href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Consígue uno de la tienda en línea de Seeed
  </a>

  <a
    href="https://s.click.aliexpress.com/e/_o2E9vLh"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Consígue uno de Aliexpress
  </a>
</div>

## Introducción

Este kit de desarrollo LoRa del tamaño de un pulgar, que consiste en el XIAO ESP32S3 y el módulo LoRa Wio-SX1262, es un kit ideal para comenzar con Meshtastic y proyectos LoRa/LoRaWAN. Soporta WiFi, BLE y LoRa, incluye un chip integrado de gestión de energía y puede extenderse vía interfaces IIC, UART y otros GPIO. Además, es compatible con desarrollo en Arduino.  
El Kit XIAO ESP32S3 & Wio-SX1262 es un módulo LoRaWAN de canal único con bajo costo y alto rendimiento. Es adecuado para escenarios de aplicación con largas distancias, bajo consumo de energía y pequeños volúmenes de datos. Soporta más de 30 nodos (dependiendo del intervalo de subida, carga útil, etc.).

Seeed ofrece 3 aplicaciones para este kit XIAO ESP32S3 & Wio-SX1262:
- Uso con Meshtastic para comunicación en red
- Configuración como nodo LoRaWAN
- Configuración como gateway LoRaWAN

## Características

* **Meshtastic listo para usar:** Pre-flasheado con firmware Meshtastic, funciona al encenderlo.
* **Rendimiento RF sobresaliente:** Soporta LoRa (862-930MHz), Wi-Fi 2.4GHz y BLE 5.0 para comunicación inalámbrica dual. Soporta comunicación remota de 2 a 5 km (LoRa) y más de 100 m (Wi-Fi/BLE) con antena U.FL conectada.
* **Diseño compacto tamaño pulgar:** 21 x 18 mm, con factor de forma clásico de XIAO, ideal para proyectos con espacio limitado como dispositivos wearables.
* **Placa MCU potente:** Incorpora ESP32S3, procesador Xtensa de 32 bits y doble núcleo a hasta 240 MHz, con múltiples puertos para desarrollo, compatible con Arduino y MicroPython.
* **Diseño de energía elaborado:** Incluye interfaz USB Tipo-C y gestión de carga para batería de litio.

## Especificaciones

| Característica | Detalles |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8, procesador Xtensa LX7 dual-core, 32 bits, hasta 240 MHz |
| LoRa | Basado en Semtech SX1262, soporta 862-930MHz |
| BLE | Bluetooth 5.0, Bluetooth mesh |
| Wi-Fi | Subsistema completo de Wi-Fi 2.4 GHz |
| Interfaces (ESP32S3) | 1x UART, 1x IIC, 1x IIS, 1x SPI (conectado a SX1262), 11x GPIO (PWM), 9x ADC, 1x LED usuario, 1x LED de carga, 1x botón reset, 1x botón boot |
| Interfaces (Wio-SX1262) | 1x botón usuario, 1x SPI (conectado a ESP32S3) |
| Energía | Voltaje entrada (Tipo-C): 5V <br/> Voltaje entrada (BAT): 4.2V <br/> Corriente de carga de batería: 100mA |
| Temperatura de trabajo | -40°C a 65°C |
| Dimensiones | 21 x 17.8 mm |

## Preparación de Hardware

### Lista de componentes

| Ítem | Cantidad |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Placa de extensión Wio-SX1262 | x1 |
| Antena Wi-Fi | x1 |
| Antena LoRa | x1 |

### Accesorios recomendados

Compatible con la placa de expansión XIAO para agregar pantallas y sensores, además de sensores Grove mediante la placa de expansión Grove.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa de Expansión XIAO</th>
      <th>Placa de Expansión Grove para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

También contamos con dos tipos de antenas para aplicaciones multifuncionales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
Original FPC Antenna: Only for **testing**. For reliable requirments, please purchase Antenna 2 additionally.
:::

## Visión General del Hardware

<table align="center">
  <tr>
	    <th>Diagrama de la placa de extensión Wio-SX1262</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	    <th>Diagrama frontal de XIAO ESP32S3</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Diagrama trasero de XIAO ESP32S3</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>Lista de pines de XIAO ESP32S3</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
</table>

## Video

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Recursos

* [Datasheet del Módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Diagrama Esquemático Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Archivo 3D de Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte con el fin de asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>