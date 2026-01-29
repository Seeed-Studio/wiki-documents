---
description: La introducción del Wio-SX1262
title: Introducción al Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/34.png
slug: /es/wio_sx1262
sku: 114993390,113991436
sidebar_position: 1
last_update:
  date: 10/12/2024
  author: Evelyn Chen
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Wio-SX1262 es un módulo RF puro LoRa® de bajo costo, ultra bajo consumo y ultra compacto basado en el IC de comunicación inalámbrica LoRa® SX1262 de alto rendimiento de Semtech, que soporta frecuencias LoRa & LoRaWAN de 868 a 915 MHz y hasta +22 dBm de potencia de transmisión altamente eficiente. Equipado con un conector de antena IPEX integrado y un oscilador de alta calidad TCXO (Oscilador de Cristal Compensado por Temperatura), garantiza un funcionamiento estable en entornos industriales de alta y baja temperatura. Está diseñado para redes de sensores inalámbricos y otros dispositivos IoT, especialmente aquellos que requieren alimentación por batería, bajo consumo de energía y conectividad de largo alcance. Ideal para aplicaciones como lectura inalámbrica de medidores, sensores agrícolas, gateway LoRaWAN de canal único, etc.

## Características

- Wio SX1262 está basado en SX1262 que es un transceptor de radio sub-GHz diseñado por Semtech Corporation
- Wio SX1262 puede transmitir hasta +22 dBm con amplificadores de potencia integrados altamente eficientes
- Wio SX1262 soporta modulación LoRa® para casos de uso LPWAN y modulación (G)FSK para casos de uso heredados.
- Cobertura de frecuencia de 868 MHz a 960 MHz.
- Con interfaz SPI.
- Wio SX1272-N tiene pines RF empaquetados SMT para facilitar el diseño de PCB, lo que significa que no contiene conector IPEX.

### Comparación con otros módulos

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/69.png" style={{width:500, height:'auto'}}/></div></td>

## Descripción del Hardware

El módulo Wio-SX1262 está basado en SX1262, lo que lo hace ideal para diseñar varios nodos IoT. Soporta tanto modulaciones (G)FSK como LoRa®, con un rango de ancho de banda de 7.8 a 500 kHz en modo LoRa®. El módulo proporciona la interfaz SPI para comunicación con un MCU externo. Su esquema de distribución de energía soporta dos opciones de hardware: DC-DC o un regulador lineal LDO, y el módulo Wio-SX1262 utiliza el diseño DC-DC. Además, cuenta con un TCXO activo de alta precisión como su frecuencia de referencia RF interna, con DIO3 sirviendo como la fuente de alimentación de voltaje del TCXO.

### Diagrama Esquemático

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/31.png" style={{width:500, height:'auto'}}/>
</div>
</td>

### Pinout

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/30.png" style={{width:500, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/68.jpg" style={{width:700, height:'auto'}}/>
</div>
</td>

## Diseño de Referencia Basado en el módulo Wio-SX1262

El siguiente es un diseño de referencia típico usando el módulo Wio-SX1262, simplemente conecte el módulo al MCU anfitrión según el diseño de referencia.

Consideraciones de diseño de antena: La interfaz de antena está diseñada con una impedancia de 50Ω, y se recomienda que los usuarios reserven una red de adaptación tipo π para la antena.

**El diseño de referencia:**

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/35.png" style={{width:700, height:'auto'}}/></div></td>

## Recursos

- [Hoja de Datos del Módulo Wio SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262-N_Module_Datasheet.pdf)
- [Diagrama Esquemático Wio SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Archivo de símbolo y paquete Wio SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_symbol_and_package_file.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
