---
description: Un kit meshtastic DIY basado en XIAO ESP32S3 & Wio-SX1262 kit, placa de expansión XIAO, sensor grove y módulo GNSS L76K con carcasa acrílica.
title: Kit sandwich de 4 capas para Meshtastic
image: https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg
slug: /es/4_layer_sandwich_for_meshtastic
sidebar_position: 6
last_update:
  date: 12/13/2024
  author: Evelyn Chen
---

# Un kit Meshtastic sandwich DIY de 4 capas

Un nodo meshtastic con todas las funciones está desarrollado basado en XIAO ESP32S3 & Wio-SX1262 Kit. Este kit tipo meshtastic con estructura sandwich de 4 capas toma la placa de expansión xiao como su base. A través de la interfaz grove y la interfaz pin a pin, soporta una variedad de módulos expandibles que son compatibles con el firmware meshtastic. También soporta el protocolo de comunicación I2C, incluyendo iluminación ambiental controlable, sensores de telemetría, sensores ambientales y módulos GPS. Puede configurarse fácilmente para diseño modular y aplicación de funciones a través de la tecnología de comunicación meshtastic. Además, puede conectarse a una batería externa de 3.7V a través del conector de batería JST para realizar un nodo móvil.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg" alt="pir" width={600} height="auto" /></p>

## Preparación del Hardware

| SKU | Nombre del Producto |
| ---- | ---- |
| 102010611 | XIAO ESP32S3 & Wio-SX1262 Kit|
| 103030356 | Placa de Expansión XIAO|
| 110010024 | Carcasa Acrílica para placa de expansión XIAO |
| 109100021 | Módulo GNSS, Alimentado por Quectel L76K |
| 101020513 | Grove - Sensor de Temperatura, Humedad, Presión y Gas (BME680) |
|  | Batería LiPo 403040-450mA con conector JST |

:::note

1. El módulo GNSS necesita tener los pines conflictivos modificados en su predecesor para que pueda conectarse al módulo XIAO ESP32S3 de manera pin a pin. Por lo tanto, por favor compre los módulos GNSS recién almacenados después del **22 de diciembre de 2024**.
2. Se proporciona el archivo DXF de la carcasa acrílica. Puede usar placas acrílicas de 3mm de espesor para cortarla y ensamblarla usted mismo.

:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit</th>
      <th>Placa de Expansión XIAO</th>
      <th>Carcasa Acrílica para placa de expansión XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110010024_preview-08.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo GNSS, Alimentado por Quectel L76K</th>
      <th>Grove - Sensor de Temperatura, Humedad, Presión y Gas (BME680)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-l76k-gnss-module-for-seeed-studio-xiao-feature.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar896611_img_0076a.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Además de los módulos anteriores, el kit también soporta los siguientes módulos grove, por favor cómpralos según tus propias necesidades.

Módulos adicionales soportados:

| SKU | Nombre del Producto | Enlace de Compra|
| ---- | ---- |---- |
| 101020932 | Grove - Temperature & Humidity Sensor V2.0 (DHT20) / Upgraded DHT11/ I2C Port | [Obtener Uno](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) |
| 101020192 | Grove - Barometer Sensor (BMP280) | [Obtener Uno](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html) |
| 101020193 | Grove - Temp&Humi&Barometer Sensor (BME280) | [Obtener Uno](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) |
| 101020556 | Grove - I2C High Accuracy Temperature Sensor(MCP9808) | [Obtener Uno](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) |
| 101020212 | Grove - Temp&Humi Sensor(SHT31) | [Obtener Uno](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html) |
| 101020513 | Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680) | [Obtener Uno](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) |

## Paso 1: Flashear el Firmware de Meshtastic

Asegúrate de haber pre-flasheado el firmware de meshtastic al XIAO ESP32S3 ya. Si no lo has hecho, por favor flashea siguiendo [esta instrucción](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_meshtastic/#flash-firmware).

## Paso 2: Resoldar el conector de pines de la placa de expansión XIAO

Para instalar el módulo GNSS en la parte inferior de la placa de expansión XIAO a través de conexión pin a pin, es necesario resoldar el conector hembra de la placa de expansión XIAO y reemplazarlo con un conector hembra equipado con pines macho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/120.png" alt="pir" width={400} height="auto" /></p>

## Paso 3: Corte láser de carcasa de acrílico de 3mm

El archivo dxf proporcionado para corte láser.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/1.png" alt="pir" width={400} height="auto" /></p>

- [archivo dxf](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dxf)
- [archivo dwg](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dwg)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
