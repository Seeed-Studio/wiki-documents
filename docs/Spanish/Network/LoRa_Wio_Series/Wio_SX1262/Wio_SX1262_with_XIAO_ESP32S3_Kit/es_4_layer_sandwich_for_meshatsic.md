---
description: A DIY meshtastic kit based on XIAO ESP32S3 & Wio-SX1262 kit, XIAO expansion board, grove sensor and L76K GNSS module with acrylic casing.
title: Kit Meshtastic de 4 capas
image: https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg
slug: /es/4_layer_sandwich_for_meshtastic
sidebar_position: 6
last_update:
  date: 05/20/2025
  author: Guillermo
---

# Kit Meshtastic DIY de 4 capas

Se ha desarrollado un nodo Meshtastic con todas las funciones basado en el XIAO ESP32S3 y el kit Wio-SX1262. Esta estructura tipo sándwich de 4 capas toma como base la placa de expansión XIAO. A través de la interfaz Grove y la interfaz pin a pin, es compatible con una variedad de módulos expansibles soportados por el firmware Meshtastic. También es compatible con el protocolo de comunicación I2C, incluyendo iluminación ambiental controlable, sensores de telemetría, sensores ambientales y módulos GPS. Se puede configurar fácilmente para un diseño modular y aplicación funcional mediante la tecnología de comunicación Meshtastic. Además, puede conectarse a una batería externa de 3.7V a través del conector JST para funcionar como un nodo móvil.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg" alt="pir" width={600} height="auto" /></p>

## Preparación de Hardware

| SKU | Nombre del producto |
| ---- | ---- |
| 102010611 | Kit XIAO ESP32S3 & Wio-SX1262 |
| 103030356 | Placa de expansión XIAO |
| 110010024 | Caja acrílica para la placa de expansión XIAO |
| 109100021 | Módulo GNSS, impulsado por Quectel L76K |
| 101020513 | Grove - Sensor de temperatura, humedad, presión y gas (BME680) |
|  | Batería LiPo 403040-450mA con conector JST |

:::note
1. Es necesario modificar los pines en conflicto del módulo GNSS anterior para que pueda conectarse al módulo XIAO ESP32S3 mediante conexión pin a pin. Por lo tanto, por favor adquiere los módulos GNSS en existencia posterior al **22 de diciembre de 2024**.
2. Se proporciona el archivo DXF de la caja acrílica. Puedes utilizar placas acrílicas de 3 mm de grosor para cortarla y ensamblarla tú mismo.
:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>Kit XIAO ESP32S3 & Wio-SX1262</th>
      <th>Placa de expansión XIAO</th>
      <th>Caja acrílica para la placa de expansión XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110010024_preview-08.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>


<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo GNSS, impulsado por Quectel L76K</th>
      <th>Grove - Sensor de temperatura, humedad, presión y gas (BME680)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-l76k-gnss-module-for-seeed-studio-xiao-feature.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar896611_img_0076a.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Además de los módulos anteriores, el kit también es compatible con los siguientes módulos Grove. Adquiérelos según tus necesidades.

Módulos adicionales compatibles:

| SKU | Nombre del producto | Enlace de compra |
| ---- | ---- | ---- |
| 101020932 | Grove - Sensor de temperatura y humedad V2.0 (DHT20) / DHT11 mejorado / Puerto I2C | [Adquirir](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) |
| 101020192 | Grove - Sensor de barómetro (BMP280) | [Adquirir](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html) |
| 101020193 | Grove - Sensor de temperatura, humedad y barómetro (BME280) | [Adquirir](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) |
| 101020556 | Grove - Sensor de temperatura de alta precisión I2C (MCP9808) | [Adquirir](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) |
| 101020212 | Grove - Sensor de temperatura y humedad (SHT31) | [Adquirir](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html) |
| 101020513 | Grove - Sensor de temperatura, humedad, presión y gas (BME680) | [Adquirir](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) |

## Paso 1: Flashear el firmware Meshtastic

Asegúrate de que el XIAO ESP32S3 ya tenga el firmware Meshtastic preinstalado. Si no es así, flashea siguiendo [esta instrucción](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_meshtastic/#flash-firmware).

## Paso 2: Resoldar el header de la placa de expansión XIAO

Para instalar el módulo GNSS en la parte inferior de la placa de expansión XIAO mediante conexión pin a pin, es necesario resoldar el header hembra y reemplazarlo por un header hembra con pines macho.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/120.png" alt="pir" width={400} height="auto" /></p>

## Paso 3: Cortar la carcasa acrílica de 3 mm con láser

Se proporciona el archivo DXF para el corte láser.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/1.png" alt="pir" width={400} height="auto" /></p>


* [Archvio DXF](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dxf)
* [Archivo DWG](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dwg)


## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y garantizar que tu experiencia sea lo más fluida posible. Ofrecemos diversos canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>