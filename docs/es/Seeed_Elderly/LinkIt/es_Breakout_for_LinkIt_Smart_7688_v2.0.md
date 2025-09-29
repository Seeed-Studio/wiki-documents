---
description: Breakout para LinkIt Smart 7688 v2.0
title: Breakout para LinkIt Smart 7688 v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Breakout_for_LinkIt_Smart_7688_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

:::danger
Debido al cierre de MediaTek Labs, todos los enlaces relacionados se han vuelto inválidos. Si necesitas descargar archivos relevantes, por favor búscalos en el siguiente enlace: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

---
**Breakout para LinkIt Smart 7688 v2.0** es una placa de expansión integrada con puerto Grove para la placa de desarrollo LinkItTM Smart 7688. Esta placa breakout ayudará a los principiantes a comenzar rápidamente porque puede ahorrar mucho trabajo y hacer que la creación de prototipos sea más fácil a través de un cableado simplificado. Viene con puertos USB, Ethernet y Audio de 3.5mm y soporta buses serie como I2C, UART.

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg)

**Seguimiento de Versiones**

|Revisión del producto | Fecha de lanzamiento |Estado de soporte |Notas                  |
|---------------------|---------------------|------------------|-----------------------|
|Versión 1.0          |Noviembre 2015       |Soportado         | Ninguna               |
|Versión 2.0          |Abril 2016          |Soportado         | Consultar Nuevas Características |

**Nuevas características:**

- Soporte para funcionalidad de grabación.
- Para el conector de teléfono de 3.5 mm (conector de audio), soporta los protocolos OMTP y CTIA. Puedes usar cualquiera de los dos protocolos mediante un interruptor. Sobre cómo cambiar el protocolo, por favor desplázate hacia abajo en la página para leer **Cómo cambiar el protocolo del conector de teléfono entre OMTP y CTIA**

[![enter image description here](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html)

## Características

---
- La interfaz Grove facilita el cableado y permite expansiones con módulos Grove.
- Host USB
- Salida de audio
- Puerto Ethernet
- Costo-efectivo
- Soporte para funcionalidad de grabación
- Cambio entre OMTP y CTIA

## Ideas de aplicación

---
- Dispositivo IoT/Gateway.
- Robótica
- Dispositivos multimedia inteligentes
- Enseñanza y aprendizaje

## Especificación

---

|Voltaje de entrada|Voltaje de operación|
|:---------------:|:---------------:|
|5.0V(Con puerto de alimentación USB)  |  3.3V  |

:::note
    Los pines de depuración, pines Ethernet y pines host USB tipo-A se conectan con MT7688, otros pines se conectan con ATmega32U4.
:::

## Descripción General del Hardware

---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_hardware_connections_1200_s.jpg)

|Hardware|Cant|Hardware|Cant|Hardware|Cant|
|---|---|---|---|---|---|
|Puerto de depuración |1|Puerto de auriculares|1|Pines auxiliares|2|
|Puerto Ethernet |1|Pines para cambiar protocolo |6|Conector Grove|3|
|USB tipo-A |1|Interfaz de controlador de altavoz estéreo|1|Puerto de auriculares| 1|

### Acerca de la interfaz Grove

Si alguna vez has usado los productos [Grove](https://www.seeedstudio.com/wiki/Grove_System) de Seeed, te enamorarás de este tipo de módulos. Con este tipo de puertos, puedes despedirte de los cables puente y el trabajo de soldadura, y puedes crear aplicaciones más potentes con esos módulos funcionales.

### Cómo cambiar el protocolo del conector de teléfono entre OMTP y CTIA

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_switch_procotol_1200_.jpg)

Si comparas V1.0 y V2.0, puedes notar que hay seis pines y dos tapas de puente en la esquina inferior derecha. Estos pines se usan para cambiar el protocolo del conector de teléfono. Cuando colocas el pequeño puente (ambos) en los cuatro pines de la izquierda, se usa el protocolo OMTP. Cuando colocas el pequeño puente (ambos) en los cuatro pines de la derecha (como muestra la figura anterior), se usa el protocolo CTIA. Como muestran las siguientes figuras:
Breakout for LinkIt Smart 7688 v2.0 CTIA OMTP Switch Manner.JPG
Ten en cuenta que para usar la funcionalidad de grabación, necesitas actualizar el firmware de la placa al firmware de Breakout for LinkIt Smart 7688 (versión v0.9.2 o superior).

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_CTIA_OMTP_Switch_Manner.JPG)

:::note
 * Debido a que la velocidad de Escritura/Lectura de la memoria flash de la placa es limitada, te recomendamos usar un dispositivo de almacenamiento externo.
:::

## Comenzar

---
En este tutorial, vas a crear un reproductor MP3 simple con Breakout for LinkIt Smart 7688 V2.0.

### Material requerido

Excepto Breakout for Linkit Smart 7688 V2.0, aquí están otros materiales que se necesitan para la aplicación. Antes de comenzar, por favor asegúrate de tener todo a mano, o puedes visitar el [Bazaar](https://www.seeedstudio.com/) de Seeed para obtenerlos.

|LinkIt Smart 7688 × 1|Cable USB (tipo A a micro tipo-B) × 2|UARTBee × 1|Cables puente × 3
|:---:|:---:|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/linkit%20smart%207688.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/jw100n.jpg)
|[Obtener Uno Ahora](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-v2.0-p-2641.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|

Para los siguientes 2, creo que seguramente los tienes.

- Altavoz estéreo (con cable de audio de 3.5 mm) × 1
- Memoria USB (con archivo de audio en formato MP3 dentro) × 1

**Paso1:** Consulta [aquí](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688#Getting_Started) para conectar tu LinkIt Smart 7688 a Internet.

:::note
    Puedes conectar cables puente al puerto MT7688 UART2 en lugar de soldarlos al Pin 8, Pin 9 y Pin GND.
:::
:::note
    En casos raros, podrías no conectarte a Internet exitosamente, reinicia el SO embebido.
:::
**Paso2:** Abre una consola con adaptador USB a Serial.

**Paso3:** Conecta todas las partes como sigue:

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_demo_connection_New.jpg)

:::note
    Esta es una figura de Breakout for LinkIt Smart 7688(v1.0).
:::
**Paso4:** Ingresa a la carpeta de USB escribiendo **cd /Media/USB-A1** en la consola.

**Paso5:** Reproduce música con la utilidad **Madplay** (instalada en OpenWRT) escribiendo **madplay filename.mp3** en la consola.

**Paso6:** Ahora escucharás la música.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Archivos de esquemas](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)
- [LinkIt smart 7688](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
- [Enlace para comprar un LinkIt Smart 7688](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142)

## Proyecto

**Smart Vendy** Seguimiento de ventas de vendedores para gestionar eficazmente qué inventario necesita comprar para llenar las máquinas antes de que se agote el stock.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sainath-komakula/smart-vendy-cd197e/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
