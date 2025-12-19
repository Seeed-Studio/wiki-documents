---
description: Comenzando con WM1302 Pi Hat para Raspberry Pi.
title: WM1302 Pi Hat para Raspberry Pi
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/es/wio_gps_board/
slug: /es/WM1302_Pi_HAT
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)

## Introducción del Producto

:::note
        Recientemente hemos lanzado el [Módulo Gateway LoRaWAN WM1302](https://wiki.seeedstudio.com/es/WM1302_module/) y la Serie LoRa-E5 basada en el módulo LoRa-E5. Haz clic [aquí](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conocer los nuevos miembros de la familia LoRa-E5 desde el [módulo Grove](https://wiki.seeedstudio.com/es/Grove_LoRa_E5_New_Version/), [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) hasta el [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/). Para aprender más sobre crear un Nodo Final LoRaWAN con el Paquete MCU STM32Cube para la serie STM32WL(SDK), para unirse y enviar datos a la Red LoRaWAN, lee más en las páginas wiki para [placas de desarrollo mini](https://wiki.seeedstudio.com/es/LoRa_E5_mini/) y [Kit de Desarrollo](https://wiki.seeedstudio.com/es/LoRa_E5_Dev_Board/).
:::

WM1302 Pi HAT es una placa de expansión adicional diseñada específicamente para conectar el módulo Gateway LoRaWAN WM1302 basado en SX1302 a versiones de Raspberry Pi hasta Raspberry Pi 4B. También integra el chip de autenticación LoRaWAN y el módulo GPS.

El [módulo WM1302](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) es una nueva generación de módulo gateway LoRaWAN con factor de forma mini-PCIe. Basado en el chip LoRaWAN® de banda base Semtech® SX1302, WM1302 desbloquea el mayor potencial de capacidad de transmisión inalámbrica de largo alcance para productos gateway. Presenta mayor sensibilidad, menor consumo de energía y menor temperatura de operación que los chips LoRa® anteriores SX1301 y SX1308.

WM1302 Pi HAT soporta el factor de forma mini-PCIe del módulo WM1302 y puede configurar automáticamente los dedos dorados estándar de 52 pines al conector GPIO de Raspberry Pi con un encabezado compatible de 40 pines. Esto simplifica el proceso de desarrollo para que los usuarios se integren con Raspberry Pi. WM1302 Pi HAT funciona como una placa de extensión y ayuda a agregar la funcionalidad de SX1302 en la Raspberry Pi, para soportar protocolos LoRaWAN y LoRa para transmisión inalámbrica de largo alcance. El módulo GPS integrado también mejora la precisión de temporización y ubicación del módulo WM1302.

WM1302 Pi HAT, junto con el Módulo Gateway WM1302 y Raspberry Pi, puede ayudar a construir tus gateways de comunicación inalámbrica LoRaWAN muy completos y compactos que soporten agricultura inteligente, ciudades inteligentes y otros escenarios IoT.

## Características

- Factor de forma estándar Pi Hat con conector hembra de 40 pines

- Compatible con Raspberry Pi 3 Model B+/ Raspberry 4

- Módulo GPS integrado

- Chip de autenticación LoRaWAN integrado

## Descripción General del Hardware

<!-- ![](https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/pi%20hat.png" alt="pir" width={600} height="auto" /></p>

## Aplicación

- Desarrollo de dispositivos/hotspots de gateway LoRaWAN

- Desarrollo de aplicaciones de comunicación inalámbrica de larga distancia

- Cualquier aprendizaje y experimentación basada en Raspberry Pi

- Aprendizaje e investigación de aplicaciones LoRa y LoRaWAN

## Especificaciones

<table class="tg">
<thead>
  <tr>
    <th >Dimensiones</th>
    <th >56*65mm</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td >Peso</td>
    <td >0.501</td>
  </tr>
  <tr>
    <td>Voltaje de Operación</td>
    <td >5V</td>
  </tr>
  <tr>
    <td >Interfaz de Alimentación</td>
    <td >Conector de 40 Pines o USB</td>
  </tr>
  <tr>
    <td >Conectores de 40 Pines de Raspberry Pi</td>
    <td >Compatible con Raspberry Pi 5 / Compatible con Raspberry Pi 4 B / Compatible con Raspberry Pi 3 A+/B/B+ / Compatible con Raspberry Pi 2 B / Compatible con Raspberry Pi A+/B+ /   Compatible con Raspberry Pi Zero/Zero W</td>
  </tr>
  <tr>
    <td >Conector PCIe</td>
    <td >Conector Mini-PCIe de 52 Pines</td>
  </tr>
  <tr>
    <td >GNSS</td>
    <td >Compatible con GPS L1, GLONASS L1, BeiDou B1</td>
  </tr>
  <tr>
    <td >Batería</td>
    <td >Excluida</td>
  </tr>
</tbody>
</table>

<table class="tg">
<thead>
  <tr><th class="tg-f2tp" colspan="2">Lista de Partes:</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-uu1j" colspan="2">WM1302 Pi Hat *1</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">Tornillo APM2.5*6mm *8</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">Espárrago M2.5*11.0mm *4</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">Tornillo PM2.0*H6.0mm *2</td>
  </tr>
</tbody>
</table>

## Dimensiones

<!-- ![](https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png" alt="pir" width={600} height="auto" /></p>
## Soporte Técnico y Discusión de Productos

Por favor envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
