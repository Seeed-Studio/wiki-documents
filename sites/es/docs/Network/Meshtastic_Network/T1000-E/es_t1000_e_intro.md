---
description: Introducción del SenseCAP Card Tracker T1000-E para Meshtastic
title: Introducción del Tracker T1000-E
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/t1000_e_intro
sidebar_position: 1
last_update:
  date: 7/1/2024
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

Es un rastreador de alto rendimiento diseñado para [Meshtastic®](https://meshtastic.org/), tan pequeño como una tarjeta de crédito, que se ajusta sin esfuerzo en tu bolsillo o se adhiere a tus activos. Integra el LR1110 de Semtech, el nRF52840 de Nordic y el módulo GPS AG3335 de Mediatek, proporcionando a los usuarios de [Meshtastic®](https://meshtastic.org/) una solución de posicionamiento y comunicación de alta precisión y bajo consumo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip Comparación de Versiones
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### Características

- **Soporte Multi-Protocolo**: Con nRF52840 y LR1110, soporta Bluetooth 5.0, Thread, Zigbee y LoRa, asegurando compatibilidad con una amplia gama de dispositivos y redes.
- **Potentes Capacidades de Posicionamiento**: Integrado con el chip GPS AG3335 de Mediatek, proporciona servicios de posicionamiento de alta precisión.
- **Interfaces Expandibles**: Diseñado con cuatro pines pogo, soporta interfaz USB para DFU (Actualización de Firmware del Dispositivo), registro serie e interfaz API, simplificando la gestión y depuración del dispositivo.
- **Soporte de Código Abierto**: Compatible con el protocolo de red de malla de código abierto Meshtastic, adecuado para necesidades de comunicación de largo alcance y bajo consumo.

### Especificaciones

**General**

|**Protocolo de red**|LoRa, Bluetooth v5.1|
| :- | :- |
|**Temperatura**|<p>Rango: -20 a 60℃;</p><p>Precisión: ± 1℃ (mín ±0.5℃, máx ±1℃)</p><p>Resolución: 0.1℃</p>|
|**Luz**|0 a 100% (0% es oscuro, 100% es más brillante)|
|**LED y Zumbador**|1\*LED y 1\* zumbador para indicar estado|
|**Botón**|1\* Botón para operar|
|**Antena**|Interna (GNSS/LoRa/Wi-Fi/BLE)|
|**Distancia de Comunicación**|2 a 5km (dependiendo de la antena, instalación y entornos)|
|**Clasificación IP**|IP65|
|**Dimensiones**|85 \* 55 \* 6.5 mm|
|**Peso del Dispositivo**|32g|
|**Temperatura de Operación**|-20℃ a +60℃|
|**Humedad de Operación**|5% - 95% (Sin condensación)|
|**Certificación**|CE /FCC|

**Batería**

|**Capacidad de Batería**|Batería de litio recargable, 700mAh|
| :- | :- |
|**Monitoreo de Vida de Batería**|Nivel de batería de enlace ascendente periódico|
|<p>**Cable de Carga**</p><p>**(Adaptador no incluido)**</p>|Cable de carga magnético USB, 1 metro|
|**Voltaje de Entrada de Alimentación**|4.7 a 5.5V DC|
|**Límite de Temperatura de Carga**|0 a +45℃|

### Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### Lista de Pines

||||
|- |- |- |
|Alimentación al Sensor|P0.4|GPIO|
|Temperatura|P0.31|NTC (analógico)|
|Luz|P0.29|LUX(analógico)|
|Acelerómetro de 3 Ejes<br/>(Actualmente no se usa en el firmware de Meshtastic)|SDA: P0.26<br/>SCL: P0.27|Vía IIC|
|Alimentación al Acelerómetro|P1.7|GPIO|
|LED|P0.24  |GPIO|
|Zumbador|P0.25|GPIO|
|Habilitar Zumbador|P1.05|GPIO|
|Botón|P0.6|GPIO|
|Alimentación al sensor|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: LoRa Reset<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0_DIO3_TCXO_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|

### Botón

|Acción del botón|Descripción|Zumbador|
|- |- |- |
|Presionar una vez|Encender|Melodía ascendente|
|Presionar dos veces|Actualizar información de nodo/ubicación|-|
|Presionar tres veces|Encender/apagar el GPS|-|
|Mantener presionado por 5s|Apagar|Melodía descendente|

### LED

|Acción del dispositivo|Descripción|
|- |- |
|Encender|Se enciende y luego parpadea rápidamente|
|Modo DFU|Encendido sólido|
|Funcionando|Parpadeo aleatorio|
