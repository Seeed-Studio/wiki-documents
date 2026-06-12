---
description: Introducción al SenseCAP Card Tracker T1000-E para Meshtastic
title: Introducción al T1000-E Tracker
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /t1000_e_intro
sidebar_position: 1
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-09-05'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/es/t1000_e_intro/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

Es un tracker de alto rendimiento diseñado para [Meshtastic®](https://meshtastic.org/), tan pequeño como una tarjeta de crédito, que cabe fácilmente en tu bolsillo o se puede sujetar a tus activos. Incorpora el LR1110 de Semtech, el nRF52840 de Nordic y el módulo GPS AG3335 de Mediatek, proporcionando a los usuarios de [Meshtastic®](https://meshtastic.org/) una solución de posicionamiento y comunicación de alta precisión y bajo consumo.

:::note
Opciones de personalización disponibles: branding del logotipo, embalaje y flasheo de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personaliza ahora ➜</font></span></strong></a>
</div>

<br></br>

:::tip Comparación de versiones
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### Características

- **Compatibilidad con múltiples protocolos**: Con nRF52840 y LR1110, es compatible con Bluetooth 5.0, Thread, Zigbee y LoRa, lo que garantiza la compatibilidad con una amplia gama de dispositivos y redes.
- **Potentes capacidades de posicionamiento**: Integrado con el chip GPS AG3335 de Mediatek, proporciona servicios de posicionamiento de alta precisión.
- **Interfaces ampliables**: Diseñado con cuatro pines pogo, es compatible con interfaz USB para DFU (Device Firmware Upgrade), registro serie e interfaz API, lo que simplifica la gestión y depuración del dispositivo.
- **Compatibilidad con código abierto**: Compatible con el protocolo de red mallada de código abierto Meshtastic, adecuado para necesidades de comunicación de largo alcance y bajo consumo.

### Especificaciones

**General**

|**Protocolo de red**|LoRa, Bluetooth v5.1|
| :- | :- |
|**Temperatura**|<p>Rango: -20 a 60℃;</p><p>Precisión: ± 1℃ (mín ±0.5℃, máx ±1℃)</p><p>Resolución: 0.1℃</p>|
|**Luz**|0 a 100% (0% es oscuro, 100% es el más brillante)|
|**LED y zumbador**|1\*LED y 1\* zumbador para indicar el estado|
|**Botón**|1\* botón para operar|
|**Antena**|Interna (GNSS/LoRa/Wi-Fi/BLE)|
|**Distancia de comunicación**|2 a 5 km (dependiendo de la antena, la instalación y el entorno)|
|**Grado de protección IP**|IP65|
|**Dimensiones**|85 \* 55 \* 6.5 mm|
|**Peso del dispositivo**|32 g|
|**Temperatura de funcionamiento**|-20℃ a +60℃|
|**Humedad de funcionamiento**|5% - 95% (Sin condensación)|
|**Certificación**|CE /FCC|

**Batería**

|**Capacidad de la batería**|Batería de litio recargable, 700 mAh|
| :- | :- |
|**Supervisión de la vida de la batería**|Nivel de batería en enlace ascendente periódico|
|<p>**Cable de carga**</p><p>**(Adaptador no incluido)**</p>|Cable de carga magnético USB, 1 metro|
|**Tensión de entrada de alimentación**|4.7 a 5.5 V CC|
|**Límite de temperatura de carga**|0 a +45℃|

### Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### Lista de pines

||||
|- |- |- |
|Alimentación al sensor|P0.4|GPIO|
|Temperatura|P0.31|NTC (analógico)|
|Luz|P0.29|LUX(analógico)|
|Acelerómetro de 3 ejes<br/>(Actualmente no se utiliza en el firmware de Meshtastic)|SDA: P0.26<br/>SCL: P0.27|Vía IIC|
|Alimentación al acelerómetro|P1.7|GPIO|
|LED|P0.24  |GPIO|
|Zumbador|P0.25|GPIO|
|Activar zumbador|P1.05|GPIO|
|Botón|P0.6|GPIO|
|Alimentación al sensor|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: Reloj SPI<br/>P0.12: SPI NSS<br/>P1.10: Reinicio LoRa<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0_DIO3_TCXO_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|

### Botón

|Acción del botón|Descripción|Zumbador|
|- |- |- |
|Pulsar una vez|Encender|Melodía ascendente|
|Pulsar dos veces|Actualizar información de nodo/ubicación|-|
|Pulsar tres veces|Encender/apagar el GPS|-|
|Pulsar y mantener durante 5 s|Apagar|Melodía descendente|

### LED

|Acción del dispositivo|Descripción|
|- |- |
|Encendido|Se enciende y luego parpadea rápidamente|
|Modo DFU|Encendido fijo|
|Funcionando|Parpadeo aleatorio|
|Cargando|Parpadea a 0.5 Hz, alternando cada segundo|
