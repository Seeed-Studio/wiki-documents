---
description: Primeros pasos con la reComputer R1000
title: reComputer R1000 - Primeros Pasos
keywords:
  - Edge
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /es/recomputer_r
last_update:
  date: 02/18/2025
  author: Erick González
---

<!-- ---
name: The reComputer R1000 edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC.
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 113991274
tags:
--- -->


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />


El controlador IoT de borde reComputer R1000 está basado en la plataforma de alto rendimiento Raspberry Pi CM4, con un procesador de cuatro núcleos A72 y compatibilidad con hasta 8GB de RAM y 32GB de almacenamiento eMMC. 

Equipado con dos interfaces Ethernet configurables de manera flexible, también incluye tres canales RS485 aislados que admiten los protocolos BACnet, Modbus RTU y Modbus TCP/IP. 

Con sólidas capacidades de comunicación en redes IoT, la serie R1000 es compatible con múltiples opciones de comunicación inalámbrica, incluyendo 4G, LoRa®, Wi-Fi/BLE, permitiendo configuraciones flexibles para funcionar como gateways inalámbricos específicos. 

Este controlador es ideal para la gestión remota de dispositivos, la administración de energía y diversas aplicaciones en el ámbito de los edificios inteligentes.


## Características

### Diseñado para Sistemas de Automatización de Edificios
* Múltiples canales RS485 aislados compatibles con comunicación de alta y baja velocidad.
* Soporta protocolos BACnet, Modbus RTU y Modbus TCP/IP.
* Hasta 8GB de RAM para procesar miles de puntos de datos, asegurando un rendimiento eficiente.
* Indicadores LED en ambas caras para una rápida verificación del estado operativo.
* Carcasa metálica de alta calidad, compatible con instalación en riel DIN y montaje en pared.
* Compatible con Yocto y Buildroot para sistemas operativos personalizados.

### Alto Rendimiento
* Basado en Raspberry Pi CM4.
* Broadcom BCM2711 quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz.
* Hasta 8GB de RAM y 32GB eMMC.

### Capacidades Inalámbricas
* Wi-Fi integrado.
* BLE integrado.
* Mini-PCIe1: LTE, USB LoRa®, USB Zigbee.
* Mini-PCIe2: SPI LoRa®, USB LoRa®, USB Zigbee.

### Interfaces Disponibles
* 3x RS485 (aislados).
* 1x Ethernet 10M/100M/1000M (compatible con PoE).
* 1x Ethernet 10M/100M.
* 1x HDMI 2.0.
* 2x USB 2.0 Tipo-A.
* 1x USB 2.0 Tipo-C (consola USB para actualización de sistema operativo).
* 1x ranura para tarjeta SIM.

### Seguridad y Confiabilidad
* Watchdog de hardware.
* Supercondensador UPS (opcional).
* Carcasa metálica con paneles laterales de policarbonato.
* Protección contra descargas electrostáticas (ESD): EN61000-4-2, nivel 3.
* Inmunidad a transitorios eléctricos rápidos (EFT): EN61000-4-4, nivel 2.
* Protección contra sobretensiones: EN61000-4-5, nivel 2.
* Vida útil de producción: reComputer R1000 estará en producción al menos hasta diciembre de 2030.

> \*Los módulos 4G y LoRa® no vienen incluidos con el reComputer R1000 por defecto. Deben adquirirse por separado.

## Convenciones de Nomenclatura
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig11.png" alt="pir" width="800" height="auto"/></p>

## Especificaciones

<div class="table-center">

<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Parámetro</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Descripción</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Características de Hardware</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Serie de Producto</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>R10xx-10</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>R10xx-00</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4, Quad-core Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Sistema Operativo</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS, Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1GB/2GB/4GB/8GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>8GB/16GB/32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Características del Sistema</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Entradas</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2-pin Terminal Block</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE (como dispositivo alimentado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Estándar IEEE 802.3af - 12.95W PoE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Voltaje de Alimentación (AC/DC)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12~24V AC/9~36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Protección de Sobrevoltaje</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Consumo Energético</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Ralentí:2.88W; Máxima Carga:5.52W</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Switch de Encendido</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Switch de Reinicio</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Yes</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interfaz</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps(soporta PoE*)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (para flashear OS)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Terminales 3 x 3-pin (aislado)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Tarjeta SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>acepta tarjetas SIM estándar</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Puerto M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>acepta SSD M.2 NVMe</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 indicadores LED</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Buzzer</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botón Reset</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI (reservado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite LCD*(en la placa montado en el gabinete)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Altavoz(reservado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite Micrófono (en la placa dentro del gabinete)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Comunicaciones Inalámbricas</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>On-chip Wi-Fi*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>On-chip BLE*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB LoRa®/SPI LoRa®*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G Cellular</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Zigbee</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB Zigbee*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Estándares</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD:  EN61000-4-2, Nivel 3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT:  EN61000-4-4, Nivel 2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Surge:  EN61000-4-5, Nivel 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={4} style={{height: 18, width: '35.4622%'}}>Certificaciones</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE, FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>TELEC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>REACH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Condiciones Ambientales</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Resistencia al Polvo y Agua</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de Operación</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Humedad Operativa</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10~95% RH</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de Almacenamiento</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Otros</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>UPS de Supercapacitor*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Módulo SuperCAP UPS LTC3350*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Watchdog de Hardware</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255s</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RTC de alta precisión</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Seguridad</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Chip de Encripción TPM 2.0*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Disipación Térmica</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Pasiva</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Garantía</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 años</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Soporte de Producción</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Hasta Diciembre 2030</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Aviso</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Options marked con * requiere la compra de accesorios adicionales.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Aviso de Interfaz y Componentes</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reservado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Designado para uso futuro o expansiones.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Opcional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes no escenciales, el cliente puede optar por ellos o no.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ocupado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Actualmente en uso y fundamental para el funcionamiento del dispositivo.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Incluído</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes escenciales contenidos en el paquete estándar.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Propiedades Mecánicas</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Dimensiones(A x A x P)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Gabinete</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Gabinete fabricado en aleación de Aluminio 6061 con páneles transparentes laterales en policarbonato.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Montaje</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Pared/Riel-DIN</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Peso(Neto)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>560g</td>
    </tr>
  </tbody>
</table>

</div>

## Visión General del Hardware

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig03.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## Visión General de la Placa Base

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig02.png" /></div>

## Diagrama de Alimentación

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

El reComputer R1000 admite tres opciones de alimentación: AC, terminal de DC y puerto PoE. Por defecto, el reComputer R1000 se alimenta a través del terminal AC/DC (Adaptador de corriente oficial por región SKU:110061505/110061506), mientras que **el módulo de alimentación PoE (SKU:110991925) es opcional**. Esto proporciona flexibilidad en la selección de la fuente de alimentación y permite una fácil integración con diversas fuentes de energía.

### Terminal de Alimentación de 2 Pines

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

El reComputer R1000 se alimenta con un voltaje nominal de 12~24V AC o 9~36V DC. La conexión de la alimentación se realiza mediante un bloque de terminales de 2 pines. Para conectar a tierra el reComputer R1000, el cable de tierra puede asegurarse con el tornillo ubicado en la esquina superior izquierda del terminal de alimentación.

:::note
La solución de alimentación utiliza un puente rectificador de diodos para protección contra polaridad inversa y es compatible con entradas tanto AC como DC. Esto garantiza que **sin importar cómo se conecten los terminales positivo y negativo de la fuente de alimentación**, el circuito no sufrirá daños. Al utilizar un puente rectificador, la polaridad de salida permanece fija independientemente de la polaridad de entrada en DC, proporcionando una protección efectiva contra polaridad inversa.
:::

### POE (opcional)

Con el módulo PoE instalado, el puerto ETH0 del reComputer R1000 puede admitir alimentación PoE, proporcionando una manera eficiente y conveniente de alimentar el dispositivo a través de Ethernet. Esta opción simplifica el proceso de instalación y reduce la cantidad de cableado necesario, lo que la hace ideal para aplicaciones con fuentes de alimentación limitadas o donde los tomacorrientes no están disponibles fácilmente.

* Entrada PoE: Rango de 44~57V; Típico 48V 
* Salida PoE: 12V, 1.1A máx.

:::note
Cabe destacar que el módulo PoE proporcionado con el reComputer R1000 cumple con el estándar IEEE 802.3af y puede suministrar una potencia máxima de 12.95W. Por lo tanto, si se necesita conectar periféricos de alto consumo, como un SSD o módulos 4G, la alimentación PoE puede no ser suficiente. En este caso, se recomienda utilizar el terminal AC/DC para garantizar un funcionamiento estable y confiable del dispositivo.
:::

### Consumo de Energía

Consulta la siguiente tabla para conocer el consumo de energía del reComputer R1000, probado en los laboratorios de Seeed Studio. Ten en cuenta que estos valores son solo de referencia, ya que los métodos de prueba y el entorno pueden afectar los resultados.

| Estado      | Voltaje | Corriente | Consumo de Energía | Descripción |
|------------|---------|-----------|---------------------|-------------|
| Apagado    | 24V     | 51mA      | 1.224W              | Consumo en estado de apagado. |
| Inactivo   | 24V     | 120mA     | 2.88W               | Corriente de entrada al alimentar con 24V sin ejecutar programas. |
| Carga Máx. | 24V     | 230mA     | 5.52W               | CPU ejecutando carga completa con "stress -c 4" sin dispositivos externos conectados. |

### Encendido y Apagado

El reComputer R1000 no incluye un botón de encendido por defecto y el sistema se iniciará automáticamente una vez que se conecte la alimentación. Para apagar el dispositivo, selecciona la opción de apagado en el sistema operativo y espera a que el sistema se apague completamente antes de cortar la alimentación. Para reiniciar el sistema, simplemente reconéctalo a la alimentación.

:::note
Después de apagar el sistema, espera al menos 10 segundos antes de reiniciarlo para permitir que los condensadores internos se descarguen por completo.
:::

## Diagrama en Bloques

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig12.png" /></div>

### Diagrama IIC

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## Interfaz

<div class="table-center">

<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interfaz</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008(soporta PoE*)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (para flashear SO)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Bloque de Terminales 3 x 3-pin (aislados)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Conector Tarjeta SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Admite tarjetas SIM estándar</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Puerto M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite SSD M.2 NVMe</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 indicadores LED</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Buzzer</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botón Reset</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite LCD*(en la placa, dentro del gabinete)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Altavoz*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite Microphone*(en la placa, dentro del gabinete)</td>
    </tr>
  </tbody>
</table>

</div>

Para obtener un mapa de GPIO y offsets, usa el siguiente comando:

```bash
cat /sys/kernel/debug/gpio
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### Estado de los Indicadores LED

El reComputer R1000 cuenta con 6 indicadores LED que señalan el estado operativo del dispositivo. Consulta la siguiente tabla para conocer la función y el estado de cada LED:

| Indicador LED | Color          | Estado  | Descripción                                                  |
|--------------|---------------|---------|--------------------------------------------------------------|
| PWR          | Verde         | Encendido  | El dispositivo está conectado a la alimentación.             |
|              |               | Apagado   | El dispositivo no está conectado a la alimentación.          |
| ACT          | Verde         |          | En Linux, este LED parpadea para indicar acceso a la eMMC.<br />Si ocurre un error durante el arranque, el LED parpadeará en un patrón de error que puede interpretarse con la [tabla en la web de Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes). |
| USER         | Verde/Rojo/Azul |         | Definido por el usuario.                                     |
| RS485-1      | Verde         | Apagado  | No hay transferencia de datos en el canal RS485-1.          |
|              |               | Parpadeo | Se están enviando o recibiendo datos en el canal RS485-1.   |
| RS485-2      | Verde         | Apagado  | No hay transferencia de datos en el canal RS485-2.          |
|              |               | Parpadeo | Se están enviando o recibiendo datos en el canal RS485-2.   |
| RS485-3      | Verde         | Apagado  | No hay transferencia de datos en el canal RS485-3.          |
|              |               | Parpadeo | Se están enviando o recibiendo datos en el canal RS485-3.   |

**Tabla de estados del LED ACT**

| Parpadeos largos | Parpadeos cortos | Estado                          |
|------------------|-----------------|---------------------------------|
| 0                | 3               | Fallo genérico de arranque      |
| 0                | 4               | start*.elf no encontrado        |
| 0                | 7               | Imagen del kernel no encontrada |
| 0                | 8               | Fallo de SDRAM                  |
| 0                | 9               | SDRAM insuficiente              |
| 0                | 10              | En estado HALT                  |
| 2                | 1               | Partición no FAT                |
| 2                | 2               | Error de lectura de partición   |
| 2                | 3               | Partición extendida no FAT      |
| 2                | 4               | Error de firma/hash - Pi 4      |
| 4                | 4               | Tipo de placa no compatible     |
| 4                | 5               | Error fatal de firmware         |
| 4                | 6               | Fallo de alimentación tipo A    |
| 4                | 7               | Fallo de alimentación tipo B    |

Si el LED ACT parpadea en un patrón regular de cuatro destellos, significa que no se puede encontrar el bootcode (start.elf).
Si el LED ACT parpadea de forma irregular, entonces el arranque ha comenzado.
Si el LED ACT no parpadea, el código EEPROM podría estar dañado; intenta arrancar sin ningún periférico conectado para asegurarte.

Para más detalles, consulta el [foro de Raspberry Pi](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

Para controlar los LED de usuario, recomendamos utilizar sysfs, un pseudo-sistema de archivos proporcionado por el kernel de Linux que expone información sobre varios subsistemas del kernel, dispositivos de hardware y sus controladores asociados. En el ReComputer R1000, la interfaz de los LED de usuario ha sido abstraída en tres archivos de dispositivo (led-red, led-blue y led-green), lo que permite a los usuarios controlar las luces LED simplemente interactuando con estos archivos. Los ejemplos son los siguientes:

1. Para encender el LED rojo, ingresa el siguiente comando en la Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. Para apagar el LED rojo, ingresa el siguiente comando en la Terminal:

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. Para encender los LED rojo y verde al mismo tiempo, ingresa el siguiente comando en la Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### Buzzer

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

El reComputer R1000 cuenta con un buzzer activo, que puede utilizarse para diversas funciones como alarmas y notificaciones de eventos. El buzzer se controla mediante el GPIO21 en el CM4 en la versión 1.0 del reComputer R1000, y mediante el GPIO20 en el CM4 en la versión 1.1 del reComputer R1000.

:::note
Para distinguir entre las versiones de hardware (v1.0 y v1.1), puedes consultar los [detalles del cambio del producto reComputer R1000 V1.1](https://wiki.seeedstudio.com/recomputer_r1000_v1_1_description/).
:::

Para los usuarios de reComputer R1000 v1.0, el buzzer está conectado al GPIO-21. Para encender o apagar el buzzer, ingresa el siguiente comando en la Terminal:

```bash
raspi-gpio set 21 op dh # encender
raspi-gpio set 21 op dl # apagar
```

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

El reComputer R1000 está equipado con 3 interfaces RS485 mediante un conector de 3 pines, las cuales están aisladas tanto para la señal como para la alimentación, garantizando una operación segura y confiable en aplicaciones industriales y de automatización. Las señales RS485A y RS485B están aisladas mediante aislamiento capacitivo, lo que proporciona una excelente inmunidad al ruido EMI y cumple con los requisitos de comunicación de alta velocidad de la interfaz RS485.

Por defecto, las resistencias de terminación de 120Ω no están instaladas. Sin embargo, la caja del producto incluye cinco resistencias de montaje en superficie. Si es necesario, los usuarios deben soldar la resistencia en el dispositivo por su cuenta.

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
La interfaz RS485 utiliza una fuente de alimentación aislada, lo que significa que la señal de tierra de los dispositivos externos conectados a la interfaz RS485 debe estar conectada al pin GND_ISO.
:::

Estos son los pines relacionados con la interfaz 485 del reComputer según la tabla de datos:

| RS485         | RS485_POWER_EN         | Archivo del dispositivo OS | P14         | Predeterminado (Alto) |
| ------------- | ---------------------- | -------------------------- | ----------- | ---------------------- |
| TX5           |                        | /dev/ttyAMA5               | GPIO12      |                        |
| RX5           |                        |                            | GPIO13      |                        |
| TX2           | ID_SD                  | /dev/ttyAMA2               | GPIO0/ID_SD |                        |
| RX2           | ID_SC                  |                            | GPIO1/ID_SC |                        |
| TX3           |                        | /dev/ttyAMA3               | GPIO4       |                        |
| RX3           |                        |                            | GPIO5       |                        |
| RS485_1_DE/RE | (Alto/DE \|\| Bajo/RE) | /dev/ttyAMA2               | GPIO6       | Bajo por defecto       |
| RS485_2_DE/RE |                        | /dev/ttyAMA3               | GPIO17      | Bajo por defecto       |
| RS485_3_DE/RE |                        | /dev/ttyAMA5               | GPIO24      | Bajo por defecto       |

Por defecto, el puerto de habilitación de alimentación de la interfaz RS485 está en alto. Cada interfaz RS485 se encuentra en estado de recepción. Puedes realizar un experimento simple.

Conecta el puerto 485 del PC al reComputer-R y, en la terminal del reComputer, ingresa:

```shell
cat /dev/ttyAMA2
```

Conecta el puerto 485 del PC al reComputer-R y envía algunos datos desde la herramienta de depuración serial de tu computadora. Podrás observar los datos en la ventana de terminal del reComputer.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### Interruptor de Arranque (Boot Switch)

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

El interruptor de arranque del reComputer R1000 está conectado al pin nRPI_BOOT del CM4. Este interruptor permite a los usuarios seleccionar la fuente de arranque entre eMMC y USB. En modo normal, el interruptor debe estar configurado lejos del lado con la etiqueta "BOOT", lo que permite que el sistema arranque desde eMMC. Por el contrario, cuando los usuarios necesiten flashear la imagen del sistema, deben configurar el interruptor hacia la etiqueta "BOOT", permitiendo que el sistema arranque desde la interfaz USB tipo C.

<div class="table-center">

| Posición del Interruptor | Modo         | Descripción          | nRPI-BOOT |
| ------------------------ | ------------ | -------------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Arranque desde eMMC | Bajo      |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo Flash  | Arranque desde USB  | Alto      |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

El reComputer R1000 está equipado con un puerto USB tipo C y dos puertos USB tipo A. Consulte la tabla a continuación para conocer sus funciones y descripciones.

| **Tipo**   | **Cantidad** | **Protocolo** | **Función**   | **Descripción**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Tipo-C** | *1           | USB2.0       | USB-Device   | Usado para depuración de puerto serie, grabación de imagen, etc. |
| **Tipo-A** | *2           | USB2.0       | USB-Host     | Conectar diferentes dispositivos USB, como memorias flash, teclados USB o ratones. |

Para verificar si el hub USB es detectado, ejecute el comando **lsusb**. Este comando lista todos los dispositivos USB conectados, incluidos los hubs.

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

Ejecutar este comando debería mostrar información sobre los dispositivos USB conectados a su sistema, incluidos los hubs USB presentes.

Si el hub USB funciona correctamente, verá sus detalles en la salida del comando **lsusb**. Si no aparece en la lista, puede haber un problema con el hub o su conexión al sistema. En tales casos, es posible que deba solucionar problemas relacionados con el hub USB o sus conexiones.

### Ranura para SIM

<div style={{ position: 'relative', left: '150px' }}>
    <img 
        width="40" 
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png" 
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }} 
    />
</div>
<br />
<br />

El reComputer R1000 utiliza una ranura para tarjeta SIM de tamaño estándar, comúnmente encontrada en aplicaciones industriales, que requiere una tarjeta SIM estándar con dimensiones de 25mm x 15mm.

:::note
Tenga en cuenta que la versión estándar del reComputer R1000 no incluye un módulo 4G. Si necesita funcionalidad 4G, debe adquirir un módulo 4G adicional por separado.
:::

### Ranura para SSD

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>

La ranura para SSD en el reComputer R1000 está diseñada para alojar SSDs NVMe M.2 2280 con capacidades de 128GB, 256GB, 512GB y 1TB. Esta ranura permite una expansión de almacenamiento de alta velocidad, lo que permite a los usuarios mejorar el rendimiento y la capacidad de su sistema.

Para listar los discos, incluido el SSD, puede utilizar el comando *fdisk -l*. Aquí está cómo hacerlo:
 
```bash
sudo fdisk -l
```

Este comando mostrará una lista de todos los discos conectados a su sistema, incluido el SSD si está correctamente detectado. Busque entradas que representen su SSD. Normalmente comienzan con /dev/sd seguido de una letra (por ejemplo, /dev/sda, /dev/sdb, etc.).

Una vez que haya identificado la entrada correspondiente a su SSD, puede proceder a particionarlo o formatearlo según sea necesario.

:::note
Existen dos usos principales para las tarjetas SSD:<br />
1. **Almacenamiento de alta capacidad:** Las tarjetas SSD pueden utilizarse para satisfacer necesidades de almacenamiento masivo.<br />
2. **Unidad de arranque con imagen del sistema:** Otro uso implica utilizar la SSD tanto para almacenamiento de alta capacidad como para alojar imágenes del sistema, permitiendo el arranque directamente desde la SSD.<br />
Es importante tener en cuenta que no todas las tarjetas SSD disponibles en el mercado son compatibles con el segundo uso. Por lo tanto, si planea usarla como unidad de arranque y no estás seguro de qué modelo comprar, recomendamos optar por nuestro SSD de 1TB recomendado (SKU 112990267). Este modelo ha sido probado y verificado para la funcionalidad de arranque, reduciendo el riesgo de problemas de compatibilidad y minimizando los costos de prueba y error.
::: 

### Mini-PCIe Slot

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig05.png" /></div>
<br />
<div class="table-center">

| Ranura        | Protocolo Compatible |
| ------------- | -------------------- |
| Mini-PCIe 1  | 4G LTE               |
|              | USB LoRa®            |
|              | USB Zigbee           |
| Mini-PCIe 2  | SPI LoRa®            |
|              | USB LoRa®            |
|              | USB Zigbee           |

</div>

Este dispositivo cuenta con dos interfaces Mini-PCIe, denominadas Mini-PCIe Slot 1 y Mini-PCIe Slot 2. La ranura 1 se conecta a la ranura para tarjeta SIM y admite protocolos USB, mientras que la ranura 2 admite protocolos USB y SPI, pero no se conecta a la ranura SIM. Por lo tanto, dispositivos como 4G LTE, USB LoRa® y USB Zigbee pueden conectarse a través de la ranura 1, mientras que dispositivos SPI LoRa®, USB LoRa® y USB Zigbee pueden conectarse a través de la ranura 2.

### Orificio de Reinicio

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

Hay un mini interruptor de botón ubicado en el orificio de reinicio del reComputer R1000. Al presionar este botón con un objeto delgado, se puede reiniciar el CM4. Este pin, cuando está en alto, indica que el CM4 ha iniciado. Al llevar este pin a bajo, se reinicia el módulo.

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| Nombre | Tipo                        | Velocidades       | PoE                                |
| ------ | --------------------------- | ----------------- | ---------------------------------- |
| ETH0   | Ethernet Gigabit nativo de CM4 | 10/100/1000 Mbit/s | Compatible (con módulo adicional) |
| ETH1   | Convertido desde USB        | 10/100 Mbit/s     | No compatible                      |

</div>

El reComputer R1000 cuenta con dos puertos Ethernet RJ45. ETH0 es una interfaz Gigabit Ethernet nativa del CM4 que admite tres velocidades diferentes: 10/100/1000 Mbit/s. Se puede adquirir un módulo PoE adicional para habilitar la entrega de energía a través de Ethernet (PoE), proporcionando alimentación al reComputer R1000. Por otro lado, ETH1 admite velocidades de 10/100 Mbit/s y está convertido desde USB.

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

El reComputer R1000 cuenta con una interfaz HDMI nativa del CM4, compatible con salida de video de hasta 4K a 60 fps. Es ideal para aplicaciones que requieren múltiples pantallas, permitiendo a los usuarios proyectar su contenido en pantallas externas de gran tamaño.

### RTC

El reComputer R1000 cuenta con un circuito RTC que viene preinstalado con una batería CR2032, lo que le permite mantener la funcionalidad de reloj incluso en caso de pérdida de energía.

Para probar la funcionalidad del Reloj en Tiempo Real (RTC), sigue estos pasos:

1. Deshabilita la sincronización automática de la hora:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Establece la hora a las 12:00 PM del 20 de marzo de 2024:

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. Sincroniza la hora del RTC con el sistema:

```bash
sudo hwclock --hctosys
```

4. Verifica la hora del RTC:

```bash
sudo hwclock -r
```

Este comando leerá y mostrará la hora almacenada en el RTC.

5. Desconecta la fuente de alimentación del RTC, espera unos minutos, luego vuelve a conectarla y verifica nuevamente la hora del RTC para comprobar si se ha mantenido correctamente.

### Watchdog

El reComputer R1000 está equipado con un circuito de watchdog de hardware independiente que garantiza el reinicio automático del sistema en caso de fallos anormales. El circuito de watchdog se implementa a través del RTC y permite tiempos de alimentación flexibles de 1 a 255 segundos.

Para realizar una prueba del watchdog, sigue estos pasos:

1. Instala el software de watchdog:

```bash
sudo apt install watchdog 
```

2. Edita el archivo de configuración del watchdog:

```bash
# Asegúrate de tener vim instalado. Si no lo tienes, instálalo con el siguiente comando:
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

Modifica la configuración como sigue:

```bash
watchdog-device		= /dev/watchdog
# Descomenta y edita esta línea para valores de tiempo de espera de hardware diferentes
# del valor predeterminado de un minuto.
watchdog-timeout	= 120
# Si tu watchdog se activa automáticamente al alcanzar el primer intervalo de tiempo de espera,
# prueba descomentando la siguiente línea y cambiando el valor a 'yes'.
#watchdog-refresh-use-settimeout	= auto
# Si tienes un dispositivo watchdog defectuoso (por ejemplo, algunas implementaciones de IPMI),
# intenta descomentar esta línea y establecer el valor en 'yes'.
#watchdog-refresh-ignore-errors	= no
# ====================== Otras configuraciones del sistema ========================
#
# Intervalo entre pruebas. Debe ser un par de segundos menor que el valor de tiempo de espera del hardware.
interval		= 15
max-load-1		= 24
#max-load-5		= 18
#max-load-15		= 12
realtime		= yes
priority		= 1
```

Puedes ajustar otras configuraciones según sea necesario.

3. Asegúrate de que el servicio de watchdog esté en ejecución:

```bash
sudo systemctl start watchdog
```

4. Para probar la funcionalidad del watchdog, ejecuta el siguiente comando para simular un bloqueo del sistema:

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
Este comando provoca un fallo en el kernel y debería hacer que el watchdog reinicie el sistema.
:::

5. Supervisa el sistema para confirmar que se reinicia después del período de tiempo de espera especificado.
Estos pasos te ayudarán a probar y garantizar la funcionalidad del temporizador de watchdog en tu sistema.

## Interfaces y Módulos Opcionales

El reComputer R1000 admite una amplia selección de módulos de expansión y accesorios, lo que lo hace adecuado para una gran variedad de escenarios y necesidades. Si estás interesado en personalizar el reComputer R1000, contacta a odm@seeed.cc para más información.
Aquí está la lista de accesorios y módulos opcionales:

<div class="table-center">

<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Nota</strong></td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Artículo</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>Producto</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>Debe usarse en conjunto para usar LoRa®WAN</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>LoRa® Module</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}> LoRaWAN Gateway Module(SPI)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Region optional LoRaWAN Gateway Module(SPI)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Region optional LoRaWAN Gateway Module(USB)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Region optional LoRaWAN Gateway Module(USB)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>LoRa® Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LoRa Antenna Kit - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbee Module</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Mini-PCIe USB Zigbee Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Zigbee Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Zigbee Antenna Kit for reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Este accesorio se requiere para habilitar la función WiFi</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Wi-Fi/BLE Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Raspberry Pi Compute Module 4 Antenna Kit</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>Antena 4G con módulo 4G para funciones 4G, Antena GPS con módulo 4G con funciones GPS.</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>4G module</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AFXGA-Mini-PCIe Module - para Norteamérica</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EUXGR-Mini-PCIe Module - para Tailandia y EMEA</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-AUXGR-Mini-PCIe Module - para Australia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EFA-Mini-PCIe Module - para Tailandia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-EMGA-Mini-PCIe Module - para Malasia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-JFA-mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>4G Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>4G Antenna Kit for 4G module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>GPS Antenna</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>GPS Antenna Kit for EC25 4G Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Plataforma de Encripción TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>TPM 2.0 Module with infineon SLB9670</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Tarjeta SSD</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Este módulo debe soldarse a la tarjeta principal de la R1000</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>MQ7813T120 PoE Module Kit for reTerminal DM</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>SuperCAP UPS LTC3350 Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>


  </tbody>
</table>

</div>

### Ranuras Mini-PCIe

La placa base del reComputer R1000 cuenta con dos ranuras Mini-PCIe. La ranura Mini-PCIe 1 es compatible con módulos 4G, módulos LoRa® que utilizan el protocolo USB y módulos Zigbee mediante USB. Por otro lado, la ranura Mini-PCIe 2 admite módulos LoRa® que utilizan los protocolos USB y SPI, así como módulos Zigbee mediante USB.

:::note
No es posible conectar dos módulos LoRa® en la placa simultáneamente.
:::

### Wi-Fi/BLE

El reComputer R1000-10 funciona con el CM4 en su versión con Wi-Fi/BLE integrado, proporcionando los mismos parámetros de conectividad que el CM4. Para más información sobre los parámetros detallados, consulta el sitio web oficial de Raspberry Pi.

:::note
Es importante tener en cuenta que, debido al chasis metálico del reComputer R1000, las señales de Wi-Fi/BLE pueden tener dificultades para atravesar el exterior metálico. Si necesitas esta funcionalidad, se recomienda adquirir una antena externa y [haz clic aquí para ver las instrucciones de ensamblaje](/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna).
:::

#### Conectar a Wi-Fi

**Paso 1:** Escanear redes Wi-Fi disponibles:

```bash
nmcli dev wifi list
```

**Paso 2:** Conectarse a una red Wi-Fi:

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid # Si no deseas escribir tu contraseña en pantalla, usa la opción --ask.
```

**Paso 3:** Después de encender el dispositivo, este se conectará automáticamente a la red Wi-Fi. Si deseas eliminar la información de una red guardada:

```bash
nmcli con del network-ssid
```

Una vez desconectado, puedes conectarte a otra red Wi-Fi.


#### Conectar dispositivos Bluetooth

Antes de agregar un dispositivo Bluetooth, el servicio Bluetooth en tu computadora debe estar iniciado y en ejecución. Puedes verificarlo con el siguiente comando:

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Si el estado del servicio Bluetooth no es activo, primero debes habilitarlo y luego iniciarlo para que se ejecute automáticamente al encender el dispositivo.

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

Puedes usar la herramienta `bluetoothctl` para conectar y administrar dispositivos Bluetooth. A continuación, algunos comandos comunes:

```bash
# Escanear dispositivos Bluetooth cercanos
bluetoothctl scan on

# Hacer que tu adaptador Bluetooth sea visible para otros dispositivos
bluetoothctl discoverable on

# Reemplaza A4:C1:38:F4:83:2E con la dirección MAC del dispositivo al que deseas conectar
# Emparejar un nuevo dispositivo Bluetooth
bluetoothctl pair A4:C1:38:F4:83:2E

# Conectar dispositivos previamente emparejados
bluetoothctl connect A4:C1:38:F4:83:2E

# Ver la lista de dispositivos emparejados con el sistema
bluetoothctl paired-devices

# Confiar en un dispositivo Bluetooth para que se conecte automáticamente
bluetoothctl trust A4:C1:38:F4:83:2E

# Revocar la confianza en un dispositivo
bluetoothctl untrust A4:C1:38:F4:83:2E

# Eliminar un dispositivo Bluetooth emparejado
bluetoothctl remove A4:C1:38:F4:83:2E

# Desconectar un dispositivo Bluetooth sin eliminarlo de la lista de emparejados
bluetoothctl disconnect A4:C1:38:F4:83:2E

# Bloquear un dispositivo específico para evitar que se conecte al sistema
bluetoothctl block A4:C1:38:F4:83:2E

# Desbloquear un dispositivo
bluetoothctl unblock A4:C1:38:F4:83:2E

# Modo interactivo de bluetoothctl y salida
bluetoothctl
exit
```


### Módulo 4G

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
    </a>
</div>

La placa base del reComputer R1000 cuenta con dos ranuras Mini-PCIe, donde la ranura Mini-PCIe 1 admite un módulo 4G mediante el protocolo USB. El módulo 4G EC25 de Quectel ha sido completamente probado y es compatible con el reComputer R1000.

:::note
Ten en cuenta que si necesitas funcionalidad 4G, es necesario adquirir el módulo 4G correspondiente y una antena externa. [Haz clic aquí para las instrucciones de ensamblaje](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna).
:::

Para interactuar con un módulo 4G utilizando comandos AT a través de minicom, sigue estos pasos:

**Paso 1.** Inserta la tarjeta SIM con capacidad 4G en la [ranura para tarjeta SIM](/recomputer_r/#sim-slot) antes de encender el sistema.

**Paso 2.** Verifica si el EC25-EUX es detectado usando `lsusb`:

```bash
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Paso 3.** Instala la herramienta de comunicación serial minicom.

```sh
sudo apt install minicom
```

**Paso 4.** Conecta el módulo 4G EC25-EUX a través de minicom.

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

Una vez que la conexión serial esté abierta, escribe `AT` y presiona 'Enter'. Deberías ver la respuesta `OK`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Paso 5.** Habilita el módulo 4G para conectarse a la red 4G.

En la misma ventana de minicom, escribe:

```sh
AT+QCFG="usbnet"
```

Esto devolverá algo como ```+QCFG: "usbnet",0,``` pero necesitamos que esté configurado en 1 (modo ECM), así que ingresa el siguiente comando:

```sh
AT+QCFG="usbnet",1
```

Luego, introduce el siguiente comando para forzar el reinicio del módem:

```sh
AT+CFUN=1,1
```

Después de esto, puedes reiniciar el sistema o esperar un momento para que el módulo obtenga acceso a Internet a través del operador de la tarjeta SIM.

También puedes usar el comando `ifconfig` para consultar el estado de la red en el reComputer R1000.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>


### Módulo LoRa®

:::note
Ambas ranuras Mini-PCIe admiten módulos LoRa® mediante el protocolo USB. Mientras tanto, la ranura Mini-PCIe 2 admite un módulo LoRa® mediante el protocolo SPI. El módulo WM1302 de Seeed Studio ha sido completamente probado y es compatible con el reComputer R1000. Sin embargo, la versión USB debe utilizar la ranura Mini-PCIe diseñada para el módulo 4G. Esto significa que si deseas utilizar tanto el módulo 4G como el módulo LoRaWAN®, elige la versión SPI del módulo WM1302 LoRaWAN®.
<br />
Ten en cuenta que si necesitas funcionalidad LoRa®, es necesario adquirir el módulo LoRa® correspondiente y una antena externa.
:::


<!-- Código -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

**Paso 1.** Consulta la guía de [ensamblaje de hardware del módulo LoRaWAN®](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) para instalar el `Módulo WM1302 SPI LoRaWAN®` en la `ranura Mini PCIe de LoRaWAN®`, que debe estar etiquetada como *`LoRa`*.

**Paso 2.** Escribe `sudo raspi-config` en la línea de comandos para abrir la herramienta de configuración de software de Raspberry Pi:

- Selecciona **Interface Options**
- Selecciona **SPI**, luego selecciona **Yes** para habilitarlo
- Selecciona **I2C**, luego selecciona **Yes** para habilitarlo
- Selecciona **Serial Port**, luego selecciona **No** en "¿Quieres una shell de inicio de sesión...?" y **Yes** en "¿Quieres habilitar el hardware del puerto serial...?"

Después de esto, reinicia la Raspberry Pi para asegurarte de que estos ajustes surtan efecto.

**Paso 3.** Descarga el [código de WM1302](https://github.com/Lora-net/sx1302_hal) en el reComputer R1000 y compílalo.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

Cambia `#define I2C_DEVICE "/dev/i2c-1"` a `#define I2C_DEVICE "/dev/i2c-3"`.

```bash
sudo make
```

**Paso 4.** Copia el Script reset_lgw.sh

```bash
vim ./tools/reset_lgw.sh
```

Modifica el Código

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 Habilitar Energía
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Escaneo Espectral)
// AD5338R_RESET_PIN=13    # AD5338R reset (diseño de referencia full-duplex CN490 )
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Paso 5.** Modifica el contenido del archivo de condiguración: `global_conf.json.sx1250.EU868`

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

Change `"com_path": "/dev/spidev0.0"` to `"com_path": "/dev/spidev0.1"`

**Paso 6.** Inicializa el Módulo LoraWAN®

Después ejecuta el siguiente código para iniciar el módulo LoraWAN® de acuerdo con la versión de frecuencia de operación de tu WM1302

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el tuyo! 🖱️</font></span></strong>
    </a>
</div>

**Paso 1.** Consulta la guía de [ensamblaje de hardware del módulo LoRaWAN®](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) para instalar el `Módulo WM1302 USB LoRaWAN®` en la `ranura Mini PCIe de 4G`, que debe estar etiquetada como *`4G`*.

**Paso 2.** Escribe `sudo raspi-config` en la línea de comandos para abrir la herramienta de configuración de software de Raspberry Pi:

- Selecciona **Interface Options**
- Selecciona **I2C**, luego selecciona **Yes** para habilitarlo
- Selecciona **Serial Port**, luego selecciona **No** en "¿Quieres una shell de inicio de sesión...?" y **Yes** en "¿Quieres habilitar el hardware del puerto serial...?"

Después de esto, reinicia la Raspberry Pi para asegurarte de que estos ajustes surtan efecto.

**Paso 3.** Descarga el [código de WM1302](https://github.com/Lora-net/sx1302_hal) en el reTerminal y compílalo.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo vim ./libloragw/inc/loragw_i2c.h
```

Cambia `#define I2C_DEVICE "/dev/i2c-1"` a `#define I2C_DEVICE "/dev/i2c-3"`.

```bash
sudo make
```

**Paso 4.** Copia el Script reset_lgw.sh

```bash
vim ./tools/reset_lgw.sh
```

Modifica el Código:

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 Habilitar Energía
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Escaneo Espectral)
// AD5338R_RESET_PIN=13    # AD5338R reset (diseño de referencia full-duplex CN490 )
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Step 5.** Modify el contenido del archivo de configuración: `global_conf.json.sx1250.EU868.usb`

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.usb
```

Cambia `"com_path": "/dev/spidev0.0"` a `"com_path": "/dev/spidev0.1"`

**Paso 6.** Iniciar el módulo LoRaWAN®

Ejecuta el siguiente código para iniciar el módulo LoRaWAN® según la versión de frecuencia de operación de tu WM1302.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.usb
```

Este comando especifica el archivo de configuración que se utilizará para LoRa® USB.

</TabItem>
</Tabs>

<!-- Code END -->


### Módulo Zigbee

Las ranuras Mini-PCIe ofrecen compatibilidad con módulos Zigbee que utilizan el protocolo USB, permitiendo la integración fluida de la funcionalidad Zigbee en dispositivos compatibles. Esta característica posibilita una comunicación y control eficiente dentro de redes Zigbee, mejorando la versatilidad y conectividad del sistema. Con dos ranuras Mini-PCIe disponibles para módulos Zigbee, los usuarios tienen la flexibilidad de implementar diversas aplicaciones para una mayor fiabilidad.

:::note
Ten en cuenta que si necesitas funcionalidad Zigbee, es necesario adquirir el módulo Zigbee correspondiente y una antena externa.
[Haz clic aquí para las instrucciones de ensamblaje](/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna).
:::

#### Configurar reComputer R1000 con el módulo Zigbee como Coordinador Zigbee:

**Paso 1.** Verificar los puertos serie:
Usa el siguiente comando para comprobar los puertos serie disponibles:

```bash
cat /dev/ttyACM*
```

**Paso 2.** Instalar la herramienta de comunicación serie y abrir la interfaz gráfica de *cutecom*:

```bash
sudo apt-get install cutecom
```

**Paso 3.** Configurar y abrir la comunicación:
* Configura la velocidad en baudios a 115200
* Marca 'Hex output' en la parte inferior
* Selecciona el puerto del dispositivo correcto, por ejemplo: `/dev/ttyACM0`
* Luego, haz clic en 'Open' para establecer la comunicación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbee1.png" /></div>

:::note
Para obtener más información, consulta [E18-MS1PA2-IPX](https://www.ebyte.com/product-view-news.html?id=894). Para instrucciones sobre comandos Hex, revisa la [Especificación de comandos HEX del módulo Zigbee 3.0 de Ebyte](https://www.ebyte.com/pdf-down.aspx?id=2936).
:::

**Paso 4.** Configurar el módulo Zigbee como Coordinador:
Sigue estos pasos para configurar el primer módulo Zigbee después de verificar que está en modo de código HEX:

- Establecer como coordinador: Envía el comando `55 04 00 05 00 05` y espera la respuesta `55 04 00 05 00 05`.<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand.png" /></div>

- Reiniciar el dispositivo: Presiona el botón de reinicio o envía el comando `55 07 00 04 00 FF FF 00 04`.<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand2.png" /></div>

- Formación de red: Envía el comando `55 03 00 02 02`.<br />
  <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand3.png" /></div>

:::note
Para el cálculo del dígito de verificación, puedes usar herramientas como el [Calculador de Caracteres de Verificación de Bloques (BCC)](https://bcc.beyerleinf.de/). También puedes utilizar herramientas de comunicación serie como SSCOM y XCOM con cálculo BCC.
:::

**Paso 5.** Verificar el estado del dispositivo:
Envía el comando `5 03 00 00 00` para comprobar el estado del dispositivo. Se espera una respuesta similar a `55 2a 00 00 00 01 XX XX XX XX`, donde `XX` representa la información del dispositivo.

**Paso 6.** Entrar en modo transparente:
Si la formación de red se realizó con éxito, entra en modo transparente enviando el comando `55 07 00 11 00 03 00 01 13`. Ambos módulos deben estar en modo transparente para la comunicación directa. No olvides configurar el modo de entrada como *None*. Para salir del modo transparente, envía `+++`.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand4.png" /></div>

**Paso 7.** Notas adicionales:
- Si la configuración del router falla, el dispositivo puede estar configurado como coordinador. Abandona la red con el comando `55 07 00 04 02 xx xx xx`.
- Prueba la potencia de transmisión con los comandos `55 04 0D 00 00 0D` (consulta) y `55 04 0D 01 XX XX` (configurar).

Luego, puedes conectar el dispositivo Zigbee al reComputer R1000 a través de plataformas como ZHA, zigbee2mqtt, Tasmota, entre otras.¿

### PoE

El reComputer R1000, cuando funciona como dispositivo alimentado, puede admitir el estándar IEEE 802.3af mediante la adición de un módulo de alimentación PoE. Los usuarios deben desmontar el dispositivo para instalar el módulo PoE y habilitar la función de alimentación a través de Ethernet.

:::note
El reComputer R1000 admite alimentación PoE, pero el producto estándar no incluye un módulo PoE por defecto. Seeed puede proporcionar servicios de soldadura y ensamblaje de PoE para pedidos personalizados por lotes. Sin embargo, si un cliente está probando una muestra, deberá [soldar y ensamblar el módulo PoE por su cuenta](/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

### Ranura M.2

El reComputer R1000 admite SSD NVMe 2280 y aceleradores de IA (Hailo) mediante una ranura PCIe (J62) ubicada debajo de las dos ranuras Mini-PCIe en la placa. Es importante destacar que el PCIe del CM4 es de generación 2.0, con una velocidad teórica máxima de 5 Gbps. Si utilizas un SSD Gen3.0 o superior, es posible que no alcance su velocidad máxima. Después de pruebas, el reTerminal DM con un SSD instalado puede lograr una velocidad de escritura máxima de 230 MB/s y una velocidad de lectura máxima de 370 MB/s. Si no estás seguro de qué SSD es compatible, puedes adquirirlo siguiendo la lista de accesorios a continuación.

[Haz clic aquí para las instrucciones de ensamblaje](/recomputer_r1000_assembly_guide/#assemble-ssd).

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>SSD card</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>

</div>

:::note
Ten en cuenta lo siguiente:<br />
1- Los resultados de las pruebas de velocidad pueden variar según el modelo de SSD, el método de prueba y el entorno de prueba. Los valores proporcionados aquí son solo de referencia y fueron obtenidos en el laboratorio de Seeed.<br />

Existen dos usos principales para las tarjetas SSD:<br />
1. **Almacenamiento de alta capacidad:** Las tarjetas SSD pueden utilizarse para satisfacer necesidades de almacenamiento de gran capacidad.<br />
2. **Unidad de arranque con imagen del sistema:** Otro uso consiste en utilizar el SSD tanto para almacenamiento de alta capacidad como para almacenar imágenes del sistema, permitiendo el arranque directo desde la tarjeta SSD.<br />
Es importante señalar que no todas las tarjetas SSD disponibles en el mercado admiten el segundo uso. Por lo tanto, si planeas usarla como unidad de arranque y no estás seguro de qué modelo comprar, te recomendamos optar por nuestro **SSD de 1TB (SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html))**. Este modelo ha sido probado y verificado para la funcionalidad de arranque, reduciendo el riesgo de problemas de compatibilidad y minimizando los costos de prueba y error.
:::

### Chip de Cifrado TPM 2.0

El TPM cuenta con el chip de seguridad OPTIGA™ TPM SLB9670 de Infineon, el cual cumple con la especificación TPM 2.0 del Trusted Computing Group (TCG) y se recomienda como chip de cifrado para el reComputer R1000. Este chip utiliza una interfaz SPI aplicada al puerto J13 de la placa, permitiendo establecer una raíz de confianza para la integridad de la plataforma, la certificación remota y los servicios criptográficos.

:::note
[Haz clic aquí para las instrucciones de ensamblaje](/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

Si conectas un módulo TPM 2.0 al dispositivo, el siguiente código puede ayudar a verificar la conexión del TPM:

```bash
ls /dev | grep tpm
```

Si en la salida aparecen **tpm0** y **tpmrm0**, significa que los dispositivos TPM (Trusted Platform Module) han sido detectados y están disponibles en el sistema. Esto indica que el hardware TPM ha sido reconocido y es accesible, lo que es una buena señal. Puedes proceder a utilizar funcionalidades o aplicaciones relacionadas con el TPM, sabiendo que los dispositivos están presentes y listos para su uso.

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

El UPS es de 7F y funciona en serie. El módulo UPS se encuentra entre los componentes DC5V y CM4, utilizando una señal GPIO para alertar a la CPU en caso de pérdida de energía de la fuente de 5V. Al recibir esta señal, la CPU ejecuta un script de emergencia antes de que la energía del supercondensador se agote, iniciando un comando `$ shutdown`.
<br />
La duración de la energía de respaldo proporcionada por el UPS depende en gran medida de la carga del sistema. A continuación, se presentan algunos escenarios típicos probados con un módulo CM4 con 4GB de RAM, 32GB de almacenamiento eMMC y un módulo Wi-Fi.
<br />

| Modo de operación | Tiempo (s) | Observación                                                      |
| ----------------- | --------- | ----------------------------------------------------------------- |
| Inactivo         | 37        | Prueba en condiciones de inactividad con el programa oficial cargado |
| Carga completa de la CPU | 18 | `stress -c 4 -t 10m -v &`                                       |

:::note
Para obtener más información sobre la función UPS, contáctanos. La señal de alarma es **activo en bajo**.
[Haz clic aquí para las instrucciones de ensamblaje](/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

Un GPIO25 entre la CPU y la fuente de alimentación DC/AC se usa para alertar a la CPU cuando la fuente de 5V se interrumpe. Luego, la CPU debe ejecutar un script de emergencia antes de que la energía del supercondensador se agote y ejecutar `$ shutdown`.
<br />
Otra forma de usar esta función es iniciar un apagado cuando el pin GPIO cambia de estado. El pin GPIO configurado actúa como una tecla de entrada que genera eventos `KEY_POWER`. Este evento es manejado por `systemd-logind`, iniciando un apagado.

Usa `/boot/overlays/README` como referencia y luego modifica `/boot/config.txt`:

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note
1. Para obtener más información sobre la función UPS, contáctanos.
2. La señal de alarma es **activo en bajo**.
:::


El siguiente código en Python es un ejemplo para detectar el modo de operación del UPS con supercondensador a través de GPIO25, y guardar automáticamente los datos antes de apagar el sistema cuando se interrumpe la alimentación.

```python
import RPi.GPIO as GPIO
import time, os

num = 0

GPIO.setmode(GPIO.BCM)
# Configurar GPIO25 como entrada
# Agregar un tiempo de estabilización de 500ms para evitar falsos positivos
GPIO.setup(25, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.add_event_detect(25, GPIO.FALLING, bouncetime=500)

while True:
  if GPIO.event_detected(25):
    print('...Fuente de alimentación externa desconectada...')
    print('')
    os.system('sync')
    print('...Guardando datos...')
    print('')
    time.sleep(3)
    os.system('sync')
    # Guardar dos veces para seguridad
    while num < 5:
      print('-----------')
      s = 5 - num
      print('---' + str(s) + '---')
      num += 1
      time.sleep(1)
    print('---------')
    os.system('sudo shutdown -h now')
```

### DSI & Altavoz

En la placa se han reservado una interfaz DSI (J24) y una interfaz de altavoz de 4 pines (J7) para usos específicos. Se recomienda a los usuarios adquirir los complementos según sus necesidades.


## Recursos adicionales

* [Manual de usuario - reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
* [Manual de usuario - reComputer R1000 en chino](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf)
* [Archivo 3D del reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
* [Diseño esquemático y PCB del reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
* [Folleto del reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
* [Folleto del reComputer R1000 en chino](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
* [Asignación de pines del reComputer R1000 v1.1](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
