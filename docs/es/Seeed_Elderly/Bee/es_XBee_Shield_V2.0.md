---
description: XBee Shield V2.0
title: XBee Shield V2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XBee_Shield_V2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/Xbeeshield_01.jpg)

La nueva versión del XBee Shield es un shield estandarizado y apilable compatible con Arduino. Puedes apilar fácilmente cualquier módulo de la serie Bee sobre él, y construir una red inalámbrica para tu proyecto. Además de eso, también está equipado con función de conversión de nivel, que permite una conversión bidireccional entre niveles de E/S altos y bajos. Los pines digitales reservados facilitan a los usuarios seleccionar el puerto TX/RX usando tapas de puente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)

##   Características
---
-  Diseño de forma estandarizada
-  Se puede configurar conectando el módulo UartSBee a USB
-  Los pines DIN y DOUT se pueden conectar tanto con UART como con otros pines digitales（D2~D12）
-  Espacio ampliado para tu propio desarrollo
-  Indicadores LED


## Descripción del Hardware
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_Interface%202.jpg)

- U2：[IC CJT1117](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf), proporciona voltaje de 3.3V para módulos XBee.
- U3：[IC SN74LVC1G125](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf), logra la función de traductor de nivel lógico.

##   Primeros Pasos
---

Aquí te mostraremos cómo funciona este XBee Shield V2.0 con RF Bee. También podemos usar Bluetooth Bee u otros módulos.

| XBee Shield V2.0 | RF Bee |
|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee%20Shield%20V2.0_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/rfbee1_s.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

- Conecta RF Bee al Xbee Shield V2.0.

 ![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_connect_RF_XBee.jpg)

- Usa una tapa de puente para **conectar XB_TX y Digital 4**. También, usa una tapa de puente para conectar **XB_RX y Digital 5**. Por supuesto puedes cambiar el puerto digital como gustes. Pero no olvides cambiar el número de puerto en la definición del código de demostración al mismo tiempo.

:::note
        Las siguientes son sus limitaciones conocidas:
        1. Si estás usando múltiples puertos serie por software, solo uno puede recibir datos a la vez.
        2. No todos los pines en el Mega y Mega 2560 soportan interrupciones de cambio, por lo que solo los siguientes se pueden usar para RX: 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69
        3. No todos los pines en el Leonardo soportan interrupciones de cambio, por lo que solo los siguientes se pueden usar para RX: 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).
:::
Si necesitas más información sobre cómo comunicarte, por favor consulta las páginas WIKI de los módulos relevantes.


## Visor de Esquemas en Línea

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip" style={borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}
</div> -->


##   Recursos
---
- **[Eagle]** [Archivo Eagle XBee Shield V2.0](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip)
- **[PDF]** [Archivo de Esquemas XBee Shield V2.0b](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_v2.0b.pdf)
- **[PDF]** [Archivo PCB XBee Shield V2.0b](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee%20Shield%20v2.0b%20PCB.pdf)
- **[Hoja de Datos]**[Hoja de Datos CJT1117](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf)
- **[Hoja de Datos]**[Hoja de Datos SN74LVC1G125](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>