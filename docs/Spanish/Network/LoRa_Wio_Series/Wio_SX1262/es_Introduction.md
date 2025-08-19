---
description: La introducción a Wio-SX1262
title: Introducción al Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/34.png
slug: /es/wio_sx1262
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Guillermo
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Wio-SX1262 es un módulo LoRa® de RF pura de bajo costo, ultra bajo consumo y ultra compacto, basado en el circuito integrado de comunicación inalámbrica SX1262 de alto rendimiento de Semtech. Soporta frecuencias LoRa y LoRaWAN desde 868 hasta 915 MHz y ofrece una potencia de transmisión altamente eficiente de hasta +22 dBm. Equipado con un conector de antena IPEX integrado y un oscilador de alta calidad TCXO (Oscilador de Cristal Compensado por Temperatura), garantiza un funcionamiento estable incluso en ambientes de temperaturas extremas, ideal para entornos industriales.

Está diseñado para redes de sensores inalámbricos y otros dispositivos IoT, especialmente aquellos que requieren conectividad de largo alcance con bajo consumo energético alimentados por batería. Es ideal para aplicaciones como lectura remota de medidores, sensores agrícolas, y gateways LoRaWAN de un solo canal, entre otras.

## Características

- El Wio SX1262 está basado en el SX1262, un transceptor de radio sub-GHz diseñado por Semtech Corporation.
- Puede transmitir hasta +22 dBm con amplificadores de potencia integrados altamente eficientes.
- Soporta modulación LoRa® para casos de uso LPWAN y modulación (G)FSK para casos de uso heredados.
- Cobertura de frecuencia desde 868 MHz hasta 960 MHz.
- Interfaz de comunicación SPI.
- El modelo Wio SX1272-N tiene pines RF en formato SMT para facilitar el diseño en PCB, lo que significa que no contiene conector IPEX. 

### Comparasión con otros módulos

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/69.png" style={{width:500, height:'auto'}}/></div></td>

## Descripción del Hardware

El módulo Wio-SX1262 está basado en el chip SX1262, lo que lo hace ideal para el diseño de diversos nodos IoT. Soporta modulación tanto (G)FSK como LoRa®, con un rango de ancho de banda de 7.8 a 500 kHz en modo LoRa®. El módulo proporciona una interfaz SPI para la comunicación con un microcontrolador externo (MCU). Su esquema de distribución de energía admite dos opciones de hardware: regulador DC-DC o regulador lineal LDO, y el Wio-SX1262 utiliza el diseño DC-DC. Además, cuenta con un TCXO (Oscilador de Cristal Compensado por Temperatura) activo de alta precisión como su frecuencia de referencia interna para RF, y el pin DIO3 funciona como fuente de alimentación de voltaje para el TCXO.

### Diagrama esquemático

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

## Diseño de Referencia Basado en el Módulo Wio-SX1262

A continuación, se muestra un diseño de referencia típico utilizando el módulo Wio-SX1262. Solo es necesario conectar el módulo al MCU anfitrión siguiendo el diseño de referencia.

Consideraciones para el diseño de la antena:
La interfaz de antena está diseñada con una impedancia de 50Ω, y se recomienda que los usuarios reserven una red de adaptación tipo π para la antena.

**Esquemático:**

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/35.png" style={{width:700, height:'auto'}}/></div></td>

## Recursos

- [Datasheet del Wio SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262-N_Module_Datasheet.pdf)
- [Diagrama esquemático del Wio SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Symbol y package file del Wio SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_symbol_and_package_file.zip)

## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte con el fin de asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
