---
description: La introducción del Kit XIAO ESP32S3 & Wio-SX1262
title: Introducción del Kit XIAO ESP32S3 & Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_with_xiao_esp32s3_kit
sku: 102010611
sidebar_position: 1
last_update:
  date: 09/30/2024
  author: Evelyn Chen
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/wio_sx1262_with_xiao_esp32s3_kit/
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
    Consigue uno en la Tienda Online de Seeed
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
    Consigue uno en Aliexpress
  </a>
</div>

## Introducción

Este kit de desarrollo LoRa del tamaño de un pulgar, que consiste en el XIAO ESP32S3 y el módulo LoRa Wio-SX1262, es un kit de inicio ideal para proyectos Meshtastic y LoRa/LoRaWAN. Compatible con WiFi, BLE y LoRa, incluye un chip de gestión de energía integrado y puede extenderse a través de interfaces IIC, UART y otros GPIO, y es compatible con el desarrollo de Arduino.
El Kit XIAO ESP32S3 & Wio-SX1262 es un módulo LoRa LoRaWAN de canal único con un precio bajo y alto rendimiento de costo. Es adecuado para escenarios de aplicación con larga distancia, bajo consumo de energía y pequeño volumen de datos. Soporta más de 30 dispositivos nodo (dependiendo del intervalo de carga, carga útil de datos, etc.).

Seeed proporciona 3 aplicaciones para este Kit XIAO ESP32S3 & Wio-SX1262.

- Usar Meshtastic para comunicación de red
- Configurar como nodo LoRaWAN
- Configurar como gateway LoRaWAN

## Características

- **Meshtactic funciona desde el primer momento**: Pre-cargado con firmware Meshtastic, está listo para funcionar una vez encendido.
- **Rendimiento RF excepcional**: Soporta LoRa(862-930MHz) Wi-Fi de 2.4GHz y comunicación inalámbrica dual BLE 5.0, soporta comunicación remota de 2~5km(LoRa) y 100m+(Wi-Fi/BLE) cuando se conecta con antena U.FL.
- **Diseño Compacto del Tamaño de un Pulgar**: 21 x 18mm, adoptando el factor de forma clásico de XIAO, adecuado para proyectos con espacio limitado como dispositivos portátiles.
- **Placa MCU Potente**: Incorpora el procesador ESP32S3 de 32 bits, doble núcleo, Xtensa funcionando hasta 240MHz, montado con múltiples puertos de desarrollo, compatible con Arduino / MicroPython.
- **Diseño de Energía Elaborado**: Incluye una interfaz USB Type-C y gestión de carga de batería de litio.

## Especificaciones

| Característica | Detalles |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8, Xtensa LX7 doble núcleo, procesador de 32 bits funcionando hasta 240 MHz |
| LoRa | Basado en Semtech SX1262, soporta 862-930MHz |
| BLE | Bluetooth 5.0, Bluetooth mesh |
| Wi-Fi | Subsistema Wi-Fi completo de 2.4GHz |
| Interfaz (ESP32S3) | 1x UART, 1x IIC, 1x IIS, 1x SPI(conectar a SX1262),11x GPIO(PWM), 9x ADC, 1x LED de Usuario, 1x LED de Carga, 1x botón Reset, 1x botón Boot |
| Interfaz (Wio-SX1262) | 1x botón de Usuario, 1x SPI(conectar a ESP32S3) |
| Energía | Voltaje de entrada (Type-C): 5V <br/> Voltaje de entrada (BAT): 4.2V <br/> Corriente de carga de batería: 100mA |
| Temperatura de Funcionamiento | -40°C ~ 65°C |
| Dimensiones | 21 x 17.8mm |

## Preparación del Hardware

### Lista de Partes

| Artículo | Cantidad |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Placa de extensión Wio-SX1262 | x1 |
| Antena Wi-Fi | x1 |
| Antena LoRa | x1 |

### Accesorios recomendados

Compatible con la Placa de Expansión XIAO para agregar pantallas y sensores, y añadir sensores Grove a través de la Placa de expansión Grove.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa de Expansión XIAO</th>
      <th>Base Grove para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

También suministramos dos tipos de antenas para este kit para soportar aplicaciones multifuncionales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
Antena FPC Original: Solo para **pruebas**. Para requisitos confiables, por favor compre la Antena 2 adicionalmente.
:::

## Descripción del Hardware

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

## Instrucciones en Video

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Recursos

- [Hoja de Datos del Módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Diagrama Esquemático Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Archivo 3D Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
