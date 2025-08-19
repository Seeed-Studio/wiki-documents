---
description: SenseCAP Card Tracker T1000-E for Meshtastic Introduction
title: Introducción al T1000-E Tracker
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/t1000_e_intro
sidebar_position: 1
last_update:
  date: 06/02/2024
  author: Guillermo
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>



Es un rastreador de alto rendimiento diseñado para Meshtastic, tan pequeño como una tarjeta de crédito, que cabe fácilmente en tu bolsillo o se puede sujetar a tus objetos. Incorpora el LR1110 de Semtech, el nRF52840 de Nordic y el módulo GPS AG3335 de Mediatek, proporcionando a los usuarios de Meshtastic una solución de posicionamiento y comunicación de alta precisión y bajo consumo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip Comparación de Versiones
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::


### Características

* **Soporte Multiprotocolo**: Con nRF52840 y LR1110, es compatible con Bluetooth 5.0, Thread, Zigbee y LoRa, garantizando compatibilidad con una amplia gama de dispositivos y redes.
* **Capacidades de Posicionamiento Potentes**: Integra el chip GPS AG3335 de Mediatek, que ofrece servicios de posicionamiento de alta precisión.
* **Interfaces Expansibles**: Diseñado con cuatro pines pogo, admite interfaz USB para DFU (Actualización de Firmware), registro serial y acceso a API, facilitando la gestión y depuración del dispositivo.
* **Soporte de Código Abierto**: Compatible con el protocolo de red mesh de código abierto Meshtastic, ideal para comunicación de largo alcance y bajo consumo.

### Especificaciones

**Generales**

| **Protocolo de red**       | LoRa, Bluetooth v5.1 |
|---------------------------|----------------------|
| **Temperatura**           | <p>Rango: -20 a 60℃;</p><p>Precisión: ± 1℃ (mín ±0.5℃, máx ±1℃)</p><p>Resolución: 0.1℃</p> |
| **Luz**                   | 0 a 100% (0% es oscuridad total, 100% es máxima luminosidad) |
| **LED y Buzzer**          | 1\*LED y 1\*buzzer para indicar estado |
| **Botón**                 | 1\*Botón de operación |
| **Antena**                | Interna (GNSS/LoRa/Wi-Fi/BLE) |
| **Distancia de comunicación** | 2 a 5 km (dependiendo de antena, instalación y entorno) |
| **Grado de Protección (IP)** | IP65 |
| **Dimensiones**           | 85 \* 55 \* 6.5 mm |
| **Peso del dispositivo**  | 32 g |
| **Temperatura de operación** | -20℃ a +60℃ |
| **Humedad de operación**  | 5% - 95% (sin condensación) |
| **Certificación**         | CE / FCC |

**Batería**

| **Capacidad de batería** | Batería de litio recargable, 700 mAh |
|--------------------------|--------------------------------------|
| **Monitoreo del estado de la batería** | Envío periódico del nivel de batería |
| **Cable de carga**<br/>(Adaptador no incluido) | Cable de carga magnético USB, 1 metro |
| **Voltaje de entrada**   | 4.7 a 5.5 V DC |
| **Temperatura de carga** | 0 a +45℃ |

### Vista general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>


### Lista de Pines

||||
|-|-|-|
| Alimentación al sensor | P0.4 | GPIO |
| Temperatura | P0.31 | NTC (analógico) |
| Luz | P0.29 | LUX (analógico) |
| Acelerómetro de 3 ejes <br/>(No usado actualmente en el firmware de Meshtastic) | SDA: P0.26<br/>SCL: P0.27 | Vía IIC |
| Alimentación del acelerómetro | P1.7 | GPIO |
| LED | P0.24 | GPIO |
| Buzzer | P0.25 | GPIO |
| Activar Buzzer | P1.05 | GPIO |
| Botón | P0.6 | GPIO |
| Alimentación al sensor | P1.6 | GPIO |
| LR1110 | P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: Reinicio LoRa<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0_DIO3_TCXO_VOLTAGE 1.6V | SPI |
| GPS | RX: P0.14<br/>TX: P0.13 | Serial1 <br/>BAUDRATE: 115200 |


### Botón

| Acción del botón | Descripción | Sonido del Buzzer |
|-|-|-|
| Presionar una vez | Encender | Melodía ascendente |
| Presionar dos veces | Actualizar nodo/información de ubicación | - |
| Presionar tres veces | Activar/desactivar el GPS | - |
| Mantener presionado 5s | Apagar | Melodía descendente |


### LED

| Acción del dispositivo | Descripción |
|-|-|
| Encendido | Se enciende y luego parpadea rápidamente |
| Modo DFU | Luz fija encendida |
| Funcionamiento | Parpadeo aleatorio |