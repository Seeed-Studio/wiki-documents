---
description: La introducción del kit XIAO ESP32S3 & Wio-SX1262
title: Introducción al kit XIAO ESP32S3 & Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_with_xiao_esp32s3_kit
sku: 102010611
sidebar_position: 1
last_update:
  date: 09/30/2024
  author: Evelyn Chen
createdAt: '2024-10-08'
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
    Consigue uno en la tienda online de Seeed
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

Este kit de desarrollo LoRa del tamaño de un pulgar, que consta del XIAO ESP32S3 y el módulo LoRa Wio-SX1262, es un kit de inicio ideal para proyectos con Meshtastic y LoRa/LoRaWAN. Al ser compatible con WiFi, BLE y LoRa, incluye un chip de gestión de energía integrado y se puede ampliar mediante interfaces IIC, UART y otros GPIO, y es compatible con el desarrollo en Arduino.
El kit XIAO ESP32S3 & Wio-SX1262 es un módulo LoRaWAN LoRa de un solo canal con un precio bajo y una alta rentabilidad. Es adecuado para escenarios de aplicación con larga distancia, bajo consumo de energía y pequeño volumen de datos. Admite más de 30 dispositivos nodo (dependiendo del intervalo de subida, carga útil de datos, etc.).

Seeed proporciona 3 aplicaciones para este kit XIAO ESP32S3 & Wio-SX1262.

- Uso de Meshtastic para comunicación de red
- Configuración como nodo LoRaWAN
- Configuración como gateway LoRaWAN

## Características

- **Meshtactic funciona listo para usar**: Con firmware Meshtastic pregrabado, está listo para funcionar una vez encendido.
- **Rendimiento RF sobresaliente**: Admite LoRa (862-930MHz), Wi-Fi de 2,4GHz y comunicación inalámbrica dual BLE 5.0, admite comunicación remota de 2~5km (LoRa) y más de 100m (Wi-Fi/BLE) cuando se conecta con una antena U.FL.
- **Diseño compacto del tamaño de un pulgar**: 21 x 18mm, adopta el factor de forma clásico de XIAO, adecuado para proyectos con espacio limitado como dispositivos wearables.
- **Potente placa MCU**: Incorpora el procesador Xtensa ESP32S3 de 32 bits y doble núcleo que funciona hasta 240MHz, con múltiples puertos de desarrollo montados, compatible con Arduino / MicroPython.
- **Diseño de alimentación elaborado**: Incluye una interfaz USB Type-C y gestión de carga de batería de litio.

## Especificación

| Característica | Detalles |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8, procesador Xtensa LX7 de doble núcleo y 32 bits que funciona hasta 240 MHz |
| LoRa | Basado en Semtech SX1262, admite 862-930MHz |
| BLE | Bluetooth 5.0, Bluetooth mesh |
| Wi-Fi | Subsistema Wi-Fi completo de 2,4GHz |
| Interfaz (ESP32S3) | 1x UART, 1x IIC, 1x IIS, 1x SPI (conectado al SX1262), 11x GPIO (PWM), 9x ADC, 1x LED de usuario, 1x LED de carga, 1x botón de reinicio, 1x botón de arranque |
| Interfaz (Wio-SX1262) | 1x botón de usuario, 1x SPI (conectado al ESP32S3) |
| Alimentación | Tensión de entrada (Type-C): 5V <br/> Tensión de entrada (BAT): 4,2V <br/> Corriente de carga de la batería: 100mA |
| Temperatura de trabajo | -40°C ~ 65°C |
| Dimensiones | 21 x 17,8mm |

## Preparación de hardware

### Lista de componentes

| Elemento | Cantidad |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Placa de expansión Wio-SX1262 | x1 |
| Antena Wi-Fi | x1 |
| Antena LoRa | x1 |

### Accesorios recomendados

Compatible con la placa de expansión XIAO para añadir pantallas y sensores, y añadir sensores Grove mediante la placa de expansión Grove.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa de expansión XIAO</th>
      <th>Grove Base para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

También suministramos dos tipos de antenas para este kit para admitir aplicaciones multifuncionales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
Antena FPC original: Solo para **pruebas**. Para requisitos de fiabilidad, compra adicionalmente la Antena 2.
:::

## Descripción general del hardware

<table align="center">
  <tr>
     <th>Diagrama de la placa de expansión Wio-SX1262</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
     <th>Comparación de la placa de expansión Wio-SX1262</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/extension_comparation.jpg" style={{width:700, height:'auto'}}/></div></td>
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
     <th>Lista de pines del XIAO ESP32S3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
</table>

:::note
Ten en cuenta que el `Wio-SX1262 for XIAO ESP32S3` utiliza una conexión B2B, mientras que el `Wio-SX1262 for XIAO nRF52840` utiliza una conexión mediante encabezado de pines pasantes; ambas placas de expansión deben utilizarse con la correspondiente placa de desarrollo XIAO.
:::

## Instrucciones en video

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Recursos

- [Hoja de datos del módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Diagrama esquemático del Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Archivo 3D del Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
