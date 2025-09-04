---
description: reComputer R1000 Primeros Pasos
title: reComputer R1000 Primeros Pasos
keywords:
  - Edge
  - reComputer R1000
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /es/recomputer_r
last_update:
  date: 07/17/2025
  author: Jiahao
---

<!-- ---
name: El controlador IoT edge reComputer R1000 está construido sobre la plataforma de alto rendimiento Raspberry Pi CM4, con un procesador quad-core A72 con soporte máximo de 8GB RAM y 32GB eMMC.
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

El controlador IoT edge reComputer R1000 está construido sobre la plataforma de alto rendimiento Raspberry Pi CM4, con un procesador quad-core A72 con soporte máximo de 8GB RAM y 32GB eMMC. Equipado con interfaces Ethernet duales que pueden configurarse de manera flexible, también incluye 3 canales RS485 aislados que soportan protocolos BACnet, Modbus RTU, Modbus TCP/IP.
Con capacidades robustas de comunicación de red IoT, la serie R1000 soporta múltiples opciones de comunicación inalámbrica incluyendo 4G, LoRa®, Wi-Fi/BLE, permitiendo configuraciones flexibles para servir como gateways inalámbricos correspondientes. Este controlador es muy adecuado para gestión remota de dispositivos, gestión de energía y varios otros escenarios en el campo de edificios inteligentes.

## Características

### Diseñado para Sistema de Automatización de Edificios

* Múltiples canales RS485 aislados soportan comunicación de alta y baja velocidad.
- Soporta protocolos BACnet, Modbus RTU, y Modbus TCP/IP
- Hasta 8GB RAM soporta el procesamiento de miles de puntos de datos, asegurando rendimiento eficiente
- Indicadores LED claros de doble cara ayudan a verificar el estado operacional rápidamente
- Carcasa metálica de alta calidad, compatible con instalación en riel DIN y pared
- Soporta Yocto y Buildroot para OS personalizado

### Rendimiento Potente

* Alimentado por Raspberry Pi CM4
- Broadcom BCM2711 quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
- Hasta 8GB RAM y 32GB eMMC

### Capacidades Inalámbricas Ricas

* Wi-Fi integrado
- BLE integrado
- Mini-PCIe1: LTE, USB LoRa®, USB Zigbee
- Mini-PCIe2: SPI LoRa®, USB LoRa®, USB Zigbee

### Interfaces Ricas

* 3x RS485 (aislado)
- 1x 10M/100M/1000M Ethernet (Soporta PoE)
- 1x 10M/100M Ethernet
- 1x HDMI 2.0
- 2x Type-A USB2.0
- 1x Type-C USB2.0 (consola USB para actualización de OS)
- 1x ranura para tarjeta SIM

### Seguridad y Confiabilidad

* Watchdog por Hardware
- Supercondensador UPS (opcional)
- Carcasa metálica con paneles laterales de PC
- ESD: EN61000-4-2,nivel 3
- EFT: EN61000-4-4, nivel 2
- Surge: EN61000-4-5, nivel 2
- Vida Útil de Producción: reComputer R1000 permanecerá en producción hasta al menos diciembre de 2030

> \*Los módulos 4G y LoRa® no vienen con reComputer R1000 por defecto, por favor compre los módulos relevantes según corresponda.

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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Especificaciones de Hardware</strong></td>
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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Especificaciones del Sistema</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Entrada</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Bloque de Terminales de 2 pines</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE(como dispositivo alimentado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Estándar IEEE 802.3af 12.95W PoE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Voltaje de Alimentación(AC/DC)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12~24V AC/9~36V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Protección contra Sobrevoltaje</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Consumo de Energía</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Inactivo:2.88W; Carga Completa:5.52W</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Interruptor de Alimentación</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Interruptor de Reinicio</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Sí</td>
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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (Para flashear SO)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x Bloque de Terminales de 3 pines (aislado)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura para Tarjeta SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta Tarjeta SIM Estándar</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta M.2 NVMe SSD</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x indicadores LED</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Zumbador</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botón de Reinicio</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI(reservado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta LCD*(en placa dentro de la carcasa)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Altavoz(reservado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta Micrófono*(en placa dentro de la carcasa)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Comunicación Inalámbrica</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>Wi-Fi integrado*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>BLE integrado*</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>USB LoRa®/SPI LoRa®*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G Celular</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={4} style={{height: 18, width: '35.4622%'}}>Certificación</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Protección de Ingreso</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de Operación</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Humedad de Operación</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>UPS de Supercondensador</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Módulo SuperCAP UPS LTC3350*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Watchdog de Hardware</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255s</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RTC de Alta Precisión</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Seguridad</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Chip de Encriptación TPM 2.0*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Disipación de Calor</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Sin ventilador</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Garantía</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 años</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Vida Útil de Producción</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Hasta diciembre de 2030</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Declaración</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Las opciones marcadas con * requieren compra adicional según la lista de accesorios.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Declaración de Estado de Componentes e Interfaces</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reservado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Designado para uso futuro o expansión.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Opcional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes no esenciales, los usuarios pueden elegir incluir o excluir.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ocupado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Actualmente en uso e integral para la funcionalidad del producto.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Incluido</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes esenciales proporcionados con el paquete estándar.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Mecánico</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Dimensión(An x Al x Pr)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Carcasa</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Carcasa de Aleación de Aluminio 6061 con Paneles Laterales de PC Transparente</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Montaje</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Riel DIN/Pared</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Peso(Neto)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>560g</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción General del Hardware

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig03.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig031.png" /></div>

## Descripción General de la Placa Principal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig02.png" /></div>

## Diagrama de Alimentación

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig13.png" /></div>

El reComputer R1000 soporta tres opciones de fuente de alimentación: terminal AC, terminal DC y puerto PoE. Por defecto, el reComputer R1000 se alimenta a través del terminal AC/DC (Adaptador de corriente regional oficial SKU:110061505/110061506), mientras que **la fuente de alimentación PoE (módulo PoE, SKU:110991925) es opcional**. Esto proporciona flexibilidad en la selección de fuente de alimentación y permite una fácil integración con varias fuentes de energía.

### Terminal de Alimentación de 2 Pines

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

El reComputer R1000 se suministra con un voltaje nominal AC de 12~24 V o voltaje DC de 9~36V. La fuente de alimentación se conecta a través del conector de bloque terminal de alimentación de 2 pines. Para conectar a tierra el reComputer R1000, el cable de tierra puede asegurarse al tornillo ubicado en la esquina superior izquierda del terminal de alimentación.

:::note
La solución de alimentación utiliza un diodo rectificador de puente para protección contra polaridad inversa y es compatible con entradas tanto AC como DC. Esto asegura que **independientemente de cómo estén conectados los terminales positivo y negativo de la fuente de alimentación**, el circuito no se dañará. Al usar un rectificador de puente, la polaridad del voltaje de salida permanece fija independientemente de la polaridad de entrada DC, proporcionando protección efectiva contra polaridad inversa.
:::

### POE (opcional)

Con el módulo PoE instalado, el puerto ETH0 del reComputer R1000 puede soportar fuente de alimentación PoE, proporcionando una forma conveniente y eficiente de alimentar el dispositivo a través de Ethernet. Esta opción simplifica el proceso de instalación y reduce la cantidad de cableado requerido, convirtiéndola en una solución ideal para aplicaciones con fuentes de alimentación limitadas o donde las tomas de corriente no están fácilmente disponibles.

- Entrada PoE: Rango 44~57V; Típico 48V
- Salida PoE: 12V, 1.1A Máx.

:::note
Vale la pena señalar que el módulo PoE proporcionado con el reComputer R1000 cumple con el estándar IEEE 802.3af y puede proporcionar una fuente de alimentación máxima de 12.95W. Por lo tanto, si hay necesidad de conectar periféricos de alta potencia como SSD o módulos 4G, la fuente de alimentación PoE puede no ser suficiente. En este caso, se recomienda usar el terminal AC/DC para la fuente de alimentación en su lugar para asegurar una operación estable y confiable del dispositivo.
:::

### Consumo de Energía

Por favor consulte la tabla a continuación para el consumo de energía probado del reComputer R1000 en el laboratorio de Seeed Studio. Tenga en cuenta que este valor es solo para referencia, ya que los métodos de prueba y el entorno pueden resultar en variaciones en los resultados.

| Estado   | Voltaje | Corriente | Consumo de Energía | Descripción |
|   ---      |    ---    |   ---      |         ---          |        ---    |
|Apagado  |24V      |  51mA  |    1.224W         | Prueba de consumo de energía estático en estado de apagado y sin energía.|
|Inactivo      |24V      |  120mA |    2.88W          | Para probar la corriente de entrada al suministrar energía de 24V al dispositivo reComputer R1000 sin ejecutar ningún programa de prueba.|
|Carga Completa |24V      |  230mA  |    5.52W          | Configurar CPU para ejecutar a carga completa usando el comando "stress -c 4". Sin dispositivos externos conectados. |

### Encendido y Apagado

El reComputer R1000 no viene con un botón de encendido por defecto, y el sistema se iniciará automáticamente una vez que se conecte la energía. Al apagar, por favor seleccione la opción de apagado en el sistema operativo y espere a que el sistema se apague completamente antes de cortar la energía. Para reiniciar el sistema, simplemente reconecte la energía.

:::note
Tenga en cuenta que después del apagado, por favor espere al menos 10 segundos antes de reiniciar el sistema para permitir que los capacitores internos se descarguen completamente.
:::

## Diagrama de Bloques

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
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x Bloque de Terminales de 3 pines (aislado)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura para Tarjeta SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta Tarjeta SIM Estándar</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta M.2 NVMe SSD</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LED</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>6 x indicadores LED</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Zumbador</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botón de Reinicio</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta LCD*(en placa dentro de la carcasa)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Altavoz*</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta Micrófono*(en placa dentro de la carcasa)</td>
    </tr>
  </tbody>
</table>
</div>

Para consultar los mapeos y desplazamientos de GPIO, utilice el siguiente comando:

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### Estado de los Indicadores LED

El reComputer R1000 cuenta con 6 indicadores LED que sirven para señalar el estado operacional de la máquina. Por favor, consulte la tabla a continuación para las funciones específicas y el estado de cada LED:

| Indicador LED | Color          | Estado | Descripción                                                  |
| ------------- | -------------- | ------ | ------------------------------------------------------------ |
| PWR           | Verde          | Encendido     | El dispositivo ha sido conectado a la alimentación.                      |
|               |                | Apagado    | El dispositivo no está conectado a la alimentación.                       |
| ACT           | Verde          |        | Bajo Linux este pin parpadeará para indicar acceso a eMMC.<br /> Si ocurre algún error durante el arranque, entonces este LED parpadeará un <br />patrón de error que puede ser decodificado usando la [tabla de consulta en el sitio web de Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes). |
| USER          | Verde/Rojo/Azul |        | Necesita ser definido por el usuario.                                  |
| RS485-1       | Verde          | Apagado    | No hay transferencia de datos en el canal 1 de RS485.                         |
|               |                | Parpadeo  | El canal 1 de RS485 está recibiendo o enviando datos.               |
| RS485-2       | Verde          | Apagado    | No hay transferencia de datos en el canal 2 de RS485.                         |
|               |                | Parpadeo  | El canal 2 de RS485 está recibiendo o enviando datos.               |
| RS485-3       | Verde          | Apagado    | No hay transferencia de datos en el canal 3 de RS485.                         |
|               |                | Parpadeo  | El canal 3 de RS485 está recibiendo o enviando datos.               |

**Tabla de estado ACT**

| **Destellos largos** | **Destellos cortos** | **Estado**                                    |
| -------------------- | -------------------- | --------------------------------------------- |
| 0                    | 3                    | Fallo genérico al arrancar                    |
| 0                    | 4                    | start*.elf no encontrado                      |
| 0                    | 7                    | Imagen del kernel no encontrada               |
| 0                    | 8                    | Fallo de SDRAM                                |
| 0                    | 9                    | SDRAM insuficiente                            |
| 0                    | 10                   | En estado HALT                                |
| 2                    | 1                    | Partición no es FAT                           |
| 2                    | 2                    | Fallo al leer desde la partición              |
| 2                    | 3                    | Partición extendida no es FAT                 |
| 2                    | 4                    | Discrepancia de firma/hash de archivo - Pi 4 |
| 4                    | 4                    | Tipo de placa no compatible                   |
| 4                    | 5                    | Error fatal de firmware                       |
| 4                    | 6                    | Fallo de alimentación tipo A                  |
| 4                    | 7                    | Fallo de alimentación tipo B                  |

Si el LED ACT parpadea en un patrón regular de cuatro parpadeos, no puede encontrar el código de arranque (start.elf)
Si el LED ACT parpadea en un patrón irregular, entonces el arranque ha comenzado.
Si el LED ACT no parpadea, entonces el código EEPROM podría estar corrupto, inténtalo de nuevo sin nada conectado para asegurarte. Para más detalles, por favor revisa el foro de Raspberry Pi:
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
Para más detalles, por favor revisa el [foro de Raspberry Pi](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

Para controlar los LEDs de usuario, recomendamos usar sysfs, un pseudo-sistema de archivos proporcionado por el kernel de Linux que expone información sobre varios subsistemas del kernel, dispositivos de hardware y sus controladores asociados. En el ReComputer R1000, hemos abstraído la interfaz de LED de usuario en tres archivos de dispositivo (led-red, led-blue y led-green), permitiendo a los usuarios controlar las luces LED simplemente interactuando con estos archivos. Los ejemplos son los siguientes:

1. Para encender el LED rojo, por favor ingresa el siguiente comando en la Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. Para apagar el LED rojo, por favor ingrese el siguiente comando en la Terminal:

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. Puedes encender los LED rojo y verde al mismo tiempo, por favor ingresa el siguiente comando en la Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### Zumbador

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

El reComputer R1000 cuenta con un zumbador activo, que puede utilizarse para diversos propósitos como alarmas y notificaciones de eventos. El zumbador se controla a través del GPIO21 al CM4 en el reComputer R1000 v1.0, y del GPIO20 al CM4 en el reComputer R1000 1.1.

:::note
Para distinguir entre la revisión de hardware (v1.0 y v1.1), puedes consultar [detalles de cambios del producto reComputer R1000 V1.1](https://wiki.seeedstudio.com/es/recomputer_r1000_v1_1_description/).
:::

Para usuarios del reComputer R1000 v1.0, el zumbador está conectado al GPIO-21, para encender/apagar el zumbador, por favor ingresa el siguiente comando en la Terminal:

```bash
raspi-gpio set 21 op dh # turn on
raspi-gpio set 21 op dl # turn off
```

Para usuarios de reComputer R1000 v1.1, el zumbador está conectado a PCA9535 P15, para apagar(encender) el zumbador, por favor ingrese el siguiente comando en la Terminal:

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

El reComputer R1000 está equipado con 3 conjuntos de interfaz RS485 usando conector de 3 pines, que está aislado tanto para señal como para alimentación para garantizar una operación segura y confiable en aplicaciones industriales y de automatización. Las señales RS485A y RS485B están aisladas usando aislamiento capacitivo, que proporciona excelente inmunidad EMI y cumple con los requisitos de comunicación de alta velocidad de la interfaz RS485.
Por defecto, las resistencias terminales de 120Ω no están instaladas. Sin embargo, la caja de empaque incluye cinco resistencias de montaje superficial. Si es necesario, los usuarios deben soldar la resistencia en el dispositivo por sí mismos.

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position.png" /></div>

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/resistors_position2.png" /></div>

:::note
La interfaz RS485 usa una fuente de alimentación aislada, lo que significa que la señal de tierra para dispositivos externos conectados a la interfaz RS485 debe conectarse al pin GND_ISO.

:::

Estos son los pines relacionados con la interfaz 485 del reComputer para la tabla de datos.

| RS485         | RS485_POWER_EN         | OS device file | P14         | default(High) |
| ------------- | ---------------------- | -------------- | ----------- | ------------- |
| TX5           |                        | /dev/ttyAMA5   | GPIO12      |               |
| RX5           |                        |                | GPIO13      |               |
| TX2           | ID_SD                  | /dev/ttyAMA2   | GPIO0/ID_SD |               |
| RX2           | ID_SC                  |                | GPIO1/ID_SC |               |
| TX3           |                        | /dev/ttyAMA3   | GPIO4       |               |
| RX3           |                        |                | GPIO5       |               |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2   | GPIO6       | default Low   |
| RS485_2_DE/RE |                        | /dev/ttyAMA3   | GPIO17      | default Low   |
| RS485_3_DE/RE |                        | /dev/ttyAMA5   | GPIO24      | default Low   |

Por defecto, el puerto de habilitación de alimentación del puerto RS485 está en alto. Y cada interfaz RS485 está en estado de recepción. Puedes hacer un experimento simple.

El puerto 485 que conecta la pc al reComputer-R.

Ingresa en la terminal del reComputer:

```shell
cat /dev/ttyAMA2
```

Luego envía algunos datos en la herramienta de depuración serie de tu computadora, puedes observar los datos en la ventana del terminal de reComputer.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### Interruptor de Arranque

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

El Interruptor de Arranque del reComputer R1000 está conectado al pin nRPI_BOOT del CM4. Este interruptor proporciona a los usuarios la opción de seleccionar la fuente de arranque entre eMMC y USB. En modo normal, el interruptor debe estar configurado alejado del lado con la etiqueta "BOOT", permitiendo que el sistema arranque desde eMMC. Por el contrario, cuando los usuarios necesitan flashear la imagen del sistema, deben configurar el interruptor hacia la etiqueta "BOOT", permitiendo que el sistema arranque desde la interfaz USB Type-C.

<div class="table-center">

| Posición del Interruptor                                    | Modo        | Descripción           | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | --------------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Arrancar desde eMMC   | Bajo      |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash  | Arrancar desde USB    | Alto      |

</div>

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

El reComputer R1000 está equipado con un puerto USB Type-C y dos puertos USB Type-A. Consulte la tabla a continuación para conocer sus funciones y descripciones.

| **Tipo**   | **Cantidad** | **Protocolo** | **Función** | **Descripción**                                              |
| ---------- | ------------ | ------------- | ----------- | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0        | USB-Device  | Utilizado para depuración de puerto serie, grabación de imagen, etc. |
| **Type-A** | *2           | USB2.0        | USB-Host    | Conectar diferentes dispositivos USB como unidades flash,<br /> teclados USB o ratones. |

Verifique si el hub USB es detectado ejecutando el comando **lsusb**. Este comando lista todos los dispositivos USB conectados, incluyendo hubs.

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

Ejecutar este comando debería mostrar información sobre los dispositivos USB conectados a tu sistema, incluyendo cualquier hub USB que esté presente.

Si el hub USB está funcionando correctamente, deberías ver sus detalles listados en la salida del comando **lsusb**. Si no aparece listado, puede haber un problema con el hub o su conexión al sistema. En tales casos, puede que necesites solucionar problemas del hub USB o sus conexiones.

### Ranura SIM

<div style={{ position: 'relative', left: '150px' }}>
    <img
        width="40"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig19.png"
        style={{ transform: 'rotate(90deg)', position: 'absolute', top: '0', left: '0', transformOrigin: 'left top' }}
    />
</div>
<br />
<br />
El reComputer R1000 utiliza una ranura para tarjeta SIM de tamaño estándar comúnmente encontrada en aplicaciones industriales, que requiere una tarjeta SIM estándar con dimensiones de 25mm x 15mm.
:::note
Ten en cuenta que la versión estándar del reComputer R1000 no viene con un módulo 4G. Si requieres funcionalidad 4G, debe comprarse por separado un módulo 4G adicional.
:::

### Ranura SSD

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
La ranura SSD en el reComputer R1000 está diseñada para acomodar SSDs NVMe M.2 2280 de 128GB, 256GB, 512GB y 1TB de capacidad. Esta ranura permite la expansión de almacenamiento de alta velocidad, permitiendo a los usuarios mejorar el rendimiento y la capacidad de su sistema.

Para listar los discos, incluyendo el SSD, puedes usar el comando *fdisk -l*. Así es como:

```bash
sudo fdisk -l
```

Este comando mostrará una lista de todos los discos conectados a tu sistema, incluyendo el SSD si está detectado correctamente. Busca entradas que representen tu SSD. Típicamente comienzan con /dev/sd seguido de una letra (por ejemplo, /dev/sda, /dev/sdb, etc.).
Una vez que identifiques la entrada correspondiente a tu SSD, puedes proceder con el particionado o formateo según sea necesario.

:::note
Hay dos usos principales para las tarjetas SSD:<br />
1.Almacenamiento de Alta Capacidad: Las tarjetas SSD pueden utilizarse para necesidades de almacenamiento de alta capacidad.<br />
2.Unidad de Arranque con Imagen: Otro uso implica utilizar el SSD tanto como almacenamiento de alta capacidad como para almacenar imágenes del sistema, permitiendo arrancar directamente desde la tarjeta SSD.<br />
Es importante tener en cuenta que no todas las tarjetas SSD disponibles en el mercado soportan el segundo uso. Por lo tanto, si tienes la intención de usarla como unidad de arranque y no estás seguro sobre qué modelo comprar, recomendamos optar por nuestro SSD de 1TB recomendado (SKU 112990267). Este modelo ha sido probado y verificado para funcionalidad de arranque, reduciendo el riesgo de problemas de compatibilidad y minimizando los costos de prueba y error.
:::

### Ranura Mini-PCle

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig05.png" /></div>
<br />
<div class="table-center">

| Ranura      | Protocolo Soportado |
| ----------- | ------------------- |
| Mini-PCIe 1 | 4G LTE              |
|             | USB LoRa®           |
|             | USB Zigbee          |
| Mini-PCIe 2 | SPI LoRa®           |
|             | USB LoRa®           |
|             | USB Zigbee          |

</div>

Este dispositivo cuenta con dos interfaces Mini-PCIe, denominadas Mini-PCIe Slot 1 y Mini-PCIe Slot 2. El Slot 1 se conecta a la ranura de tarjeta SIM y soporta protocolos USB, mientras que el Slot 2 soporta tanto protocolos USB como SPI pero no se conecta a la ranura de tarjeta SIM. Por lo tanto, dispositivos como 4G LTE, USB LoRa®, y USB Zigbee pueden conectarse a través del Slot 1, mientras que dispositivos SPI LoRa®, USB LoRa®, y USB Zigbee pueden conectarse a través del Slot 2.

### Orificio de Reinicio

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

Hay un Mini Interruptor de Botón Pulsador ubicado en el orificio de reinicio del reComputer R1000. Al presionar este botón con un objeto delgado, el CM4 puede ser reiniciado. Este pin cuando está en alto señala que el CM4 ha iniciado. Llevar este pin a bajo reinicia el módulo.

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-center">

| Nombre | Tipo                        | Velocidades        | PoE                                |
| ------ | --------------------------- | ------------------ | ---------------------------------- |
| ETH0   | CM4 Gigabit Ethernet nativo | 10/100/1000 Mbit/s | Soportado (con módulo adicional)   |
| ETH1   | Convertido desde USB        | 10/100 Mbit/s      | No Soportado                       |

</div>

El reComputer R1000 viene con dos puertos Ethernet RJ45. ETH0 es una interfaz Gigabit Ethernet nativa del CM4 que soporta tres velocidades diferentes: 10/100/1000 Mbit/s. Se puede adquirir un módulo PoE adicional para habilitar la entrega de alimentación por Ethernet (PoE) a través de esta interfaz, proporcionando energía al reComputer R1000. El otro puerto ETH1 soporta 10/100 Mbit/s que se convierte desde USB.

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

El reComputer R1000 cuenta con una interfaz HDMI nativa del CM4, soportando salida de video de hasta 4K @ 60 fps. Es ideal para aplicaciones que requieren múltiples pantallas, permitiendo a los usuarios mostrar su contenido en pantallas externas grandes.

### RTC

El reComputer R1000 cuenta con un circuito RTC que viene preinstalado con una batería CR2032, permitiéndole mantener la funcionalidad de cronometraje incluso en caso de pérdida de energía.

Para probar la funcionalidad del Reloj de Tiempo Real (RTC), sigue estos pasos:

1. Deshabilita la sincronización automática de tiempo:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Establece la hora a las 12:00 PM del 20 de marzo de 2024:

```bash
sudo hwclock --set --date "2024-03-20 12:00:00"
```

3. Sincronizar la hora RTC con el sistema:

```bash
sudo hwclock --hctosys
```

4. Verificar la hora del RTC:

```bash
sudo hwclock -r
```

Este comando leerá y mostrará la hora almacenada en el RTC.
5. Desconecte la fuente de alimentación del RTC, espere unos minutos, luego reconéctela y verifique la hora del RTC nuevamente para ver si retuvo la hora correcta.

### Watchdog

El reComputer R1000 viene equipado con un circuito de watchdog de hardware independiente que asegura el reinicio automático del sistema en caso de fallos anormales del sistema. El circuito de watchdog se implementa a través del RTC y permite tiempos de alimentación flexibles de 1 a 255 segundos.

Para realizar una prueba de watchdog, siga estos pasos:

1. Instale el software de watchdog:

```bash
sudo apt install watchdog 
```

2. Edita el archivo de configuración del watchdog:

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

Modifica la configuración de la siguiente manera:

```bash
watchdog-device  = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.vi
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval  = 15
max-load-1  = 24
#max-load-5  = 18
#max-load-15  = 12
realtime  = yes
priority  = 1
```

Puedes ajustar otras configuraciones según sea necesario.
3. Asegúrate de que el servicio watchdog esté ejecutándose:

```bash
sudo systemctl start watchdog
```

4. Para probar la funcionalidad del watchdog, ejecuta el siguiente comando para simular un cuelgue del sistema:

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

:::warning
Este comando provoca un fallo del kernel y debería hacer que el watchdog reinicie el sistema.
:::

5. Monitorea el sistema para confirmar que se reinicia después del período de tiempo de espera especificado.
Estos pasos te ayudarán a probar y asegurar la funcionalidad del temporizador watchdog en tu sistema.

## Interfaces y Módulos Opcionales

El reComputer R1000 soporta una rica selección de módulos de expansión y accesorios, haciéndolo adecuado para una amplia gama de escenarios y requisitos. Si estás interesado en personalizar el reComputer R1000, por favor contacta odm@seeed.cc para más información.
Aquí está la lista de accesorios y módulos opcionales:

<div class="table-center">

<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Observación</strong></td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><strong>Artículo</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>Nombre del Producto</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={5} style={{height: 18, width: '25%'}}>Debe usarse junto para la función LoRa®WAN</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Módulo LoRa®</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN opcional por región(SPI)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN opcional por región(SPI)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN opcional por región(USB)-US915</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Gateway LoRaWAN opcional por región(USB)-EU868</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena LoRa®</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena LoRa - 868-915 MHz</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Módulo Zigbee</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo Zigbee USB Mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena Zigbee</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena Zigbee para reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Este accesorio es requerido para la función Wi-Fi</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena Wi-Fi/BLE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena Raspberry Pi Compute Module 4</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={8} style={{height: 18, width: '25%'}}>Antena 4G con módulo 4G para función 4G, antena GPS con módulo 4G para función GPS</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={6} style={{height: 18, width: '25%'}}>Módulo 4G</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-AFXGA-Mini-PCIe - para Norteamérica</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-EUXGR-Mini-PCIe - para EMEA y Tailandia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-AUXGR-Mini-PCIe - para Australia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-EFA-Mini-PCIe - para Tailandia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo LTE Cat 4 EC25-EMGA-Mini-PCIe - para Malasia</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>LTE Cat 4 EC25-JFA-mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena 4G</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena 4G para módulo 4G</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Antena GPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena GPS para Módulo 4G EC25</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Chip de Cifrado TPM 2.0</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo TPM 2.0 con infineon SLB9670</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Tarjeta SSD</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>512GB NVMe M.2 PCle Gen3x4 2280 SSD Interno</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>256GB NVMe M.2 PCle Gen3x4 2280 SSD Interno</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>128GB NVMe M.2 PCle Gen3x4 2280 SSD Interno</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>Este módulo necesita ser soldado en la placa portadora del reComputer R1000</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>PoE</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Módulo PoE MQ7813T120 para reTerminal DM</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}> </td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={1} style={{height: 18, width: '25%'}}>UPS</td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Módulo SuperCAP UPS LTC3350</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
  
  </tbody>
</table>
</div>

La placa base del reComputer R1000 cuenta con dos ranuras Mini-PCIe. La ranura Mini-PCIe 1 soporta módulo 4G, módulo LoRa® usando el protocolo USB y módulo Zigbee usando protocolo USB; mientras que la ranura Mini-PCIe 2 soporta módulo LoRa® usando el protocolo USB y SPI y módulo Zigbee usando protocolo USB.

:::note
No se pueden conectar 2 módulos LoRa® en la placa.
:::

### Wi-Fi/BLE

El reComputer R1000-10 está alimentado por el CM4 con una versión Wi-Fi/BLE integrada, proporcionando los mismos parámetros Wi-Fi/BLE que el CM4. Para información detallada de parámetros, por favor consulte el sitio web oficial de Raspberry Pi.

:::note
Es importante tener en cuenta que debido a la carcasa metálica del reComputer R1000, las señales Wi-Fi/BLE pueden tener dificultades para penetrar el exterior metálico. Si requiere funcionalidad Wi-Fi/BLE, se recomienda comprar una antena externa y [haga clic aquí para las instrucciones de ensamblaje](/es/recomputer_r1000_assembly_guide/#assemble-wi-fible-antenna).
:::

#### Conectar wifi

paso1. Para escanear redes Wi-Fi:

```bash
nmcli dev wifi list
```

paso2. Conectarse a la red wifi:

```bash
sudo nmcli dev wifi connect network-ssid password "network-password"
sudo nmcli --ask dev wifi connect network-ssid #If you don't want to write your password on the screen, you can use the --ask option.
```

paso3. Después de que el dispositivo se encienda, se conectará automáticamente al wifi. Si deseas eliminar la información WiFi guardada:

```bash
nmcli con del network-ssid
```

Después de que se desconecte la conexión, conéctate a otra wifi.

#### Conectar dispositivos bluetooth

Antes de agregar un dispositivo Bluetooth, el servicio Bluetooth en tu computadora debe estar iniciado y ejecutándose. Puedes verificar esto con el comando systemctl.

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Si el estado del servicio Bluetooth no está activo, primero debe habilitarlo. Luego inicie el servicio para que se inicie automáticamente cuando encienda su dispositivo.

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

Puedes usar la herramienta bluetoothctl para conectar y gestionar Bluetooth, los siguientes son algunos comandos comunes y comentarios:

```bash
#Scan attachments to the device
bluetoothctl scan on

#To make your Bluetooth adapter discoverable to other devices, use the following command:
bluetoothctl discoverable on


#Replace A4:C1:38:F4:83:2E below with the Media Access Control (MAC) address you want to connect to
#Pair a new Bluetooth device
bluetoothctl pair A4:C1:38:F4:83:2E

#Connect previously paired devices
bluetoothctl connect A4:C1:38:F4:83:2E

#View the list of devices paired with the system
bluetoothctl paired-devices

#When a Bluetooth device is trusted, the system automatically connects to it after discovering it
bluetoothctl trust A4:C1:38:F4:83:2E

#Cancel trust
bluetoothctl untrust A4:C1:38:F4:83:2E

#Remove a paired Bluetooth device
bluetoothctl remove A4:C1:38:F4:83:2E

#Disconnect the Bluetooth connection, but do not remove it from the paired list
bluetoothctl disconnect A4:C1:38:F4:83:2E

#Block specific devices from connecting to your system
bluetoothctl block A4:C1:38:F4:83:2E

#Unblock device
bluetoothctl unblock A4:C1:38:F4:83:2E


#Use interactive mode and exit
bluetoothctl
exit 
```

### Módulo 4G

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991135--lte-cat-4-ec25-eux-mini-pcie-font_1.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

La placa base del reComputer R1000 cuenta con dos ranuras Mini-PCIe, donde la ranura Mini-PCIe 1 soporta un módulo 4G usando el protocolo USB. El módulo 4G EC25 de Quectel ha sido completamente probado para ser compatible con el reComputer R1000.

:::note
Tenga en cuenta que si requiere funcionalidad 4G, es necesario comprar el módulo 4G correspondiente y la antena externa. [Por favor haga clic aquí para las instrucciones de ensamblaje](/es/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna).
:::

Para interactuar con un módulo 4G usando comandos AT a través de minicom, siga estos pasos:

**Paso 1.** Por favor inserte la tarjeta SIM habilitada para 4G en la [ranura de tarjeta SIM](/es/recomputer_r/#sim-slot), antes de encender el sistema.

**Paso 2.** Verifique si el EC25-EUX es detectado usando ```lsusb```

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Paso 3.** Instala la herramienta de comunicación serie minicom.

```sh
sudo apt install minicom
```

**Paso 4.** Conecta el módulo 4G EC25-EUX a través de minicom.

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

una vez que se abra la conexión serie, escriba AT y presione 'Enter', y debería ver OK.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Paso 5.** Habilitar el módulo 4G para conectarse a la red 4G

En la misma ventana serie de minicom, por favor escriba:

```sh
AT+QCFG="usbnet"
```

Devolverá algo como ```+QCFG: "usbnet",0,``` pero necesitamos que esté configurado en 1 (modo ECM), así que ingresa el siguiente comando:

```sh
AT+QCFG="usbnet",1
```

Luego ingresa el siguiente comando para forzar el reinicio del módem:

```sh
AT+CFUN=1,1
```

Luego podrías reiniciar o esperar un momento para que el módulo obtenga internet de tu operador de tarjeta SIM.

También puedes usar el comando `ifconfig` para consultar el estado de red del reComputer R1000.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### Módulo LoRa®

:::note
Ambas ranuras Mini-PCIe soportan módulos LoRa® usando el protocolo USB. Mientras tanto, la ranura Mini-PCIe slot2 soporta un módulo LoRa® usando el protocolo SPI. El módulo WM1302 de Seeed Studio ha sido completamente probado para ser compatible con el reComputer R1000. Sin embargo, la versión USB necesitará utilizar el Mini PCIe diseñado para el Módulo 4G, lo que significa que si quieres usar tanto el Módulo 4G como el Módulo LoraWAN®, por favor elige la versión SPI del Módulo LoraWAN® WM1302.
<br />
Ten en cuenta que si requieres funcionalidad LoRa®, es necesario comprar el módulo LoRa® correspondiente y la antena externa.
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

**Paso 1.** Por favor consulta la guía de [ensamblaje de hardware del Módulo LoraWAN®](/es/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) para instalar el `Módulo LoraWAN® WM1302 SPI` en la `ranura Mini PCIe LoraWAN®` donde deberías ver la serigrafía *`Lora`*.

**Paso 2.** escribe `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:

- Selecciona Interface Options
- Selecciona SPI, luego selecciona **Yes** para habilitarlo
- Selecciona I2C, luego selecciona **Yes** para habilitarlo
- Selecciona Serial Port, luego selecciona **No** para "Would you like a login shell..." y selecciona **Yes** para "Would you like the serial port hardware..."

Después de esto, por favor reinicia Raspberry Pi para asegurar que estas configuraciones funcionen.

**Paso 3.** Descarga el [código WM1302](https://github.com/Lora-net/sx1302_hal) al reComputer R1000 y compílalo.

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

**Paso 4.** Copia el script reset_lgw.sh

```bash
vim ./tools/reset_lgw.sh
```

Modifica el código:

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Paso 5.** Modifica el contenido del archivo de configuración `global_conf.json.sx1250.EU868`:

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868
```

Cambia `"com_path": "/dev/spidev0.0"` a `"com_path": "/dev/spidev0.1"`

**Paso 6.** Iniciar el Módulo LoraWAN®

Luego ejecuta el siguiente código para iniciar el Módulo LoraWAN® según la versión de frecuencia de operación de tu WM1302.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

</TabItem>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={300} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

**Paso 1.** Por favor, consulte la guía de [ensamblaje de hardware del módulo LoraWAN®](/es/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna) para instalar el `Módulo LoraWAN® USB WM1302` en la `ranura Mini PCIe 4G` donde debería ver la serigrafía *`4G`*.

**Paso 2.** escriba `sudo raspi-config` en la línea de comandos para abrir la Herramienta de Configuración de Software de Raspberry Pi:

- Seleccione Interface Options
- Seleccione I2C, luego seleccione **Yes** para habilitarlo
- Seleccione Serial Port, luego seleccione **No** para "Would you like a login shell..." y seleccione **Yes** para "Would you like the serial port hardware..."

Después de esto, por favor reinicie Raspberry Pi para asegurarse de que estas configuraciones funcionen.

**Paso 3.** Descargue el [código WM1302](https://github.com/Lora-net/sx1302_hal) a reTerminal y compílelo.

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

**Paso 4.** Copia el script reset_lgw.sh

```bash
vim ./tools/reset_lgw.sh
```

Modifica el código:

```bash
SX1302_RESET_PIN=580     # SX1302 reset
SX1302_POWER_EN_PIN=578  # SX1302 power enable
SX1261_RESET_PIN=579     # SX1261 reset (LBT / Spectral Scan)
// AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

```
cp ./tools/reset_lgw.sh ./packet_forwarder/
```

**Paso 5.** Cargar el módulo WM1302-USB

```bash
# Check the device
lsusb
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/check_lora_device.png" /></div>

```bash
# Use the ID number to find the port number
sudo dmesg | grep 5740
# Load ACM module 
sudo modprobe cdc_acm
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/load_lora_device.png" /></div>

**Paso 6.** Encuentra el archivo del dispositivo

```bash
sudo dmesg | grep 1-1.3.3
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ACM.png" /></div>

**Paso 7.** Modifica el contenido del archivo de configuración `global_conf.json.sx1250.EU868.USB`:

```sh
cd packet_forwarder
vim global_conf.json.sx1250.EU868.USB
```

Cambia `"com_path": "/dev/ttyACM0"` a `"com_path": "/dev/ttyACM4"`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/change_file.png" /></div>

**Paso 8.** Iniciar el Módulo LoraWAN®

Luego ejecuta el siguiente código para iniciar el Módulo LoraWAN® según la versión de frecuencia de operación de tu WM1302.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

Este comando especifica el archivo de configuración que se utilizará para LoRa® USB.

</TabItem>
</Tabs>

<!-- Code END -->

### Módulo Zigbee

Las ranuras Mini-PCIe ofrecen soporte para módulos Zigbee que utilizan el protocolo USB, permitiendo la integración perfecta de la funcionalidad Zigbee en dispositivos compatibles. Esta característica permite una comunicación y control eficientes dentro de las redes Zigbee, mejorando la versatilidad y conectividad del sistema. Con dos ranuras Mini-PCIe disponibles para módulos Zigbee, los usuarios tienen la flexibilidad de implementar diversas aplicaciones para mayor confiabilidad.

:::note
Tenga en cuenta que si requiere funcionalidad Zigbee, es necesario comprar el módulo Zigbee correspondiente y la antena externa.
[Haga clic aquí para las instrucciones de ensamblaje](/es/recomputer_r1000_assembly_guide/#assemble-4glorazigbee-module-and-antenna).
:::

#### Configurar reComputer R1000 con módulo Zigbee como Coordinador Zigbee

**Paso 1.** Verificar Puertos Serie:
Use el siguiente comando para verificar los puertos serie disponibles:

```bash
cat /dev/ttyACM*
```

**Paso 2.** Instala la Herramienta de Comunicación Serial, luego ingresa *cutecom* para abrir la interfaz:

```bash
sudo apt-get install cutecom
```

**Paso 3.** Configurar los ajustes y abrir la comunicación:
- Configurar la velocidad de baudios como 115200
- Marcar 'Salida Hex' en la parte inferior
- Seleccionar el puerto de dispositivo correcto, por ejemplo: /dev/ttyACM0
- Luego hacer clic en 'Abrir' para establecer la comunicación

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbee1.png" /></div>

:::note
Para información más detallada, consulte [E18-MS1PA2-IPX](https://www.ebyte.com/product-view-news.html?id=894). Para instrucciones de comandos Hex, consulte [Ebyte Zigbee 3.0 Module HEX Command Standard Specification](https://www.ebyte.com/pdf-down.aspx?id=2936).
:::

**Paso 4.** Configurar el módulo Zigbee como Coordinador
Siga estos pasos para configurar el primer módulo Zigbee después de verificar que el módulo esté en modo de código HEX:

- Establecer como coordinador: Enviar comando `55 04 00 05 00 05`, esperar respuesta `55 04 00 05 00 05`.<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand.png" /></div>

- Reiniciar dispositivo: Presionar botón de reinicio o enviar comando `55 07 00 04 00 FF FF 00 04`.<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand2.png" /></div>

- Formación de red: Enviar comando `55 03 00 02 02`.<br />
  <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand3.png" /></div>

:::note
Para el cálculo de dígito de verificación, puede usar herramientas como [Block Check Character calculator](https://bcc.beyerleinf.de/); También puede usar herramientas de comunicación serie como SSCOM y XCOM con cálculo BCC.
:::

**Paso 5.** Verificar el Estado del Dispositivo:
Enviar comando `5 03 00 00 00` para verificar el estado del dispositivo. Esperar una respuesta similar a `55 2a 00 00 00 01 XX XX XX XX`, donde `XX` representa información del dispositivo.

**Paso 6.** Entrar en Modo Transparente:
Si la formación de red es exitosa, entrar en modo transparente enviando comando `55 07 00 11 00 03 00 01 13`. Ambos módulos deben estar en modo transparente para comunicación directa. No olvide establecer el modo de entrada como *Ninguno*. Para salir del modo transparente, enviar `+++`.
 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/zigbeecommand4.png" /></div>

**Paso 7.** Notas Adicionales:

- Si la configuración del router falla, el dispositivo puede ya ser un coordinador. Salir de la red usando comando `55 07 00 04 02 xx xx xx`.
- Probar la potencia de transmisión usando comandos `55 04 0D 00 00 0D` (consulta) y `55 04 0D 01 XX XX` (establecer).

Luego puede conectar el dispositivo Zigbee al reComputer R1000 a través de ZHA, zigbee2mqtt, plataformas Tasmota, etc.

### PoE

El reComputer R1000 funcionando como dispositivo alimentado puede soportar el estándar IEEE 802.3af agregando un módulo de fuente de alimentación PoE. Los usuarios necesitan desarmar el dispositivo para instalar el módulo PoE para la función Ethernet PoE.

:::note
El reComputer R1000 soporta alimentación PoE, pero el producto estándar no incluye un módulo PoE por defecto. Seeed puede proporcionar servicios de soldadura y ensamblaje PoE para pedidos de personalización por lotes. Sin embargo, si un cliente está probando una muestra, necesitará [soldar y ensamblar el módulo PoE por sí mismo](/es/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

### Ranura M.2

El reComputer R1000 soporta SSD NVMe 2280 y acelerador de IA (Hailo) mediante el uso de una ranura PCIe (J62) debajo de dos ranuras Mini-PCIe en la placa. Es importante notar que el PCIe del CM4 es gen2.0 con una velocidad teórica máxima de 5Gbps. Si está usando un SSD Gen3.0 o superior, puede no ser capaz de alcanzar la velocidad máxima del SSD. Después de las pruebas, el reTerminal DM con SSD instalado puede alcanzar una velocidad máxima de escritura de 230MB/s y una velocidad máxima de lectura de 370MB/s. Si no está seguro de qué SSDs son compatibles, puede comprar siguiendo la lista de accesorios a continuación.

[Por favor haga clic aquí para instrucciones de ensamblaje](/es/recomputer_r1000_assembly_guide/#assemble-ssd).

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Tarjeta SSD</td>
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
Ten en cuenta que:<br />
1- Los resultados de las pruebas de velocidad pueden variar dependiendo del modelo de SSD, método de prueba y entorno de prueba. Los valores proporcionados aquí son solo para fines de referencia y fueron obtenidos en el laboratorio de Seeed.<br />

Hay dos usos principales para las tarjetas SSD:<br />
1.Almacenamiento de Alta Capacidad: Las tarjetas SSD pueden utilizarse para necesidades de almacenamiento de alta capacidad.<br />
2.Unidad de Arranque con Imagen: Otro uso implica utilizar el SSD tanto como almacenamiento de alta capacidad como para almacenar imágenes del sistema, permitiendo arrancar directamente desde la tarjeta SSD.<br />
Es importante tener en cuenta que no todas las tarjetas SSD disponibles en el mercado soportan el segundo uso. Por lo tanto, si tienes la intención de usarla como unidad de arranque y no estás seguro sobre qué modelo comprar, recomendamos optar por nuestro **SSD de 1TB recomendado (SKU [112990267](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html))**. Este modelo ha sido probado y verificado para funcionalidad de arranque, reduciendo el riesgo de problemas de compatibilidad y minimizando los costos de prueba y error.
:::

### Chip de Cifrado TPM 2.0

El TPM cuenta con el OPTIGA™ TPM SLB9670 de Infineon que cumple con la especificación TPM 2.0 del Trusted Computing Group (TCG) y se recomienda como chip de cifrado para el reComputer R1000. El chip cuenta con una interfaz SPI aplicada para el puerto J13 en la placa, para habilitar una raíz de confianza para la integridad de la plataforma, atestación remota y servicios criptográficos.

:::note
[Por favor haz clic aquí para las instrucciones de ensamblaje](/es/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

Si conectas el módulo TPM 2.0 al dispositivo, el siguiente código puede ayudar a verificar la conexión TPM.

```bash
ls /dev | grep tpm
```

Si ves **tpm0** y **tpmrm0** en la salida, significa que se detectan dispositivos TPM (Módulo de Plataforma Confiable) y están disponibles en tu sistema. Esto indica que el hardware TPM es reconocido y accesible, lo cual es una buena señal. Puedes proceder a usar funcionalidades o aplicaciones relacionadas con TPM sabiendo que los dispositivos están presentes y accesibles.

### UPS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

El UPS es 7F, que opera en serie. El módulo UPS está posicionado entre los componentes DC5V y CM4, con una señal GPIO utilizada para alertar a la CPU en caso de una pérdida de energía del suministro de 5V. Al recibir esta señal, la CPU ejecuta un script urgente antes de que se agote la energía del supercapacitor, iniciando un comando "$ shutdown".
<br />
La duración de respaldo proporcionada por el UPS depende en gran medida de la carga del sistema. A continuación se muestran algunos escenarios típicos probados con un módulo CM4 que cuenta con 4GB de RAM, almacenamiento eMMC de 32GB y un módulo Wi-Fi.
<br />

| Modo de Operación | Tiempo(s) | Observación                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| Inactivo          | 37        | Prueba bajo condiciones de inactividad con programa controlador oficial cargado |
| Carga completa de CPU | 18    | stress -c 4 -t 10m -v &                                     |

:::note
Para la función UPS, por favor contáctanos para más información, y la señal de alarma está activa en BAJO.
[Por favor haz clic aquí para las instrucciones de ensamblaje](/es/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module).
:::

Se utiliza un GPIO25 entre la CPU y la entrada de alimentación DC/AC para alertar a la CPU cuando la fuente de alimentación de 5V se desconecta. Entonces la CPU debe hacer algo urgente en un script antes del agotamiento de energía del supercondensador y ejecutar un `$ shutdown`
<br />
Otra forma de usar esta función es Iniciar un apagado cuando el pin GPIO cambia. El pin GPIO dado se configura como una tecla de entrada que genera eventos KEY_POWER. Este evento es manejado por systemd-logind iniciando un apagado.
Usa `/boot/overlays/README` como referencia, luego modifica `/boot/config.txt`.

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

:::note

1. Para la función UPS, por favor contáctanos para más información.
2. La señal de alarma es LOW activa.

:::

El código Python a continuación es una demostración para detectar el modo de funcionamiento del UPS de supercondensador a través de GPIO25, y guardar automáticamente los datos y apagar el sistema cuando se corta la alimentación.

```python
import RPi.GPIO as GPIO
import time,os

num = 0

GPIO.setmode(GPIO.BCM)
#set GPIO25 as input mode
#add 500ms jitter time for software stabilization
GPIO.setup(25,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.add_event_detect(25,GPIO.FALLING, bouncetime = 500) 
while True:
  if GPIO.event_detected(25):
    print('...External power off...')
    print('')
    os.system('sync')
    print('...Data saving...')
    print('')
    time.sleep(3)
    os.system('sync')
    #saving two times
    while num<5:
      print('-----------')
      s = 5-num
      print('---' + str(s) + '---')
      num = num + 1
      time.sleep(1)
    print('---------')
    os.system('sudo shutdown -h now')
```

### DSI y Altavoz

Se reservan en la placa una interfaz DSI (J24) y una interfaz de altavoz de 4 pines (J7), para uso especial. Se solicita a los usuarios que compren los conectores según sus propias necesidades.

## Recursos Adicionales

- [Manual de usuario-reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_version01.pdf)
- [Manual de usuario-reComputer R1000 en chino](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputerR_UserManual_CN_version01.pdf )
- [Archivo 3D reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [Diseño esquemático reComputer R1000, Diseño PCB](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [Folleto reComputer R1000](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer.pdf)
- [Folleto reComputer R1000 en chino](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_flyer_CN.pdf)
- [Asignación de pines reComputer R1000 v1.1](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
