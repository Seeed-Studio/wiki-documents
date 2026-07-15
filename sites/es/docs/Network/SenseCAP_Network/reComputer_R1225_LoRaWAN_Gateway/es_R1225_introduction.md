---
description: Descripción general de la pasarela LoRaWAN reComputer R1225
title: Descripción general de la pasarela LoRaWAN reComputer R1225
keywords:
  - SenseCAP Network
  - Controlador de borde
  - reComputer R1225
  - Pasarela
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_introduction
last_update:
  date: 03/13/2026
  author: Kian
createdAt: '2026-01-05'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/es/r1225_introduction/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background.png" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

# Descripción general

## Descripción

El reComputer R1225 es una potente y flexible pasarela y controlador IoT LoRaWAN industrial basado en Raspberry Pi, impulsado por el CM4 y equipado con capacidades de IA. Cuenta con 3 interfaces RS485, puertos Ethernet duales y es compatible con los protocolos BACnet y Modbus, proporcionando toda la funcionalidad necesaria para un dispositivo IoT de borde industrial robusto y fiable. Con soporte para aceleradores de IA NPU, es una solución ideal para aplicaciones de control de acceso remoto, especialmente en sistemas BMS, BAS e iBMS.

## Características

### Diseñado para sistemas de automatización de edificios

- Múltiples canales RS485 aislados que admiten comunicación tanto de alta como de baja velocidad

- Compatible con los protocolos BACnet, Modbus RTU y Modbus TCP/IP
- Hasta 4GB de RAM admiten el procesamiento de miles de puntos de datos
- Indicadores LED de doble cara y claros que permiten a los usuarios comprobar rápidamente el estado de funcionamiento
- Caja metálica de alta calidad, compatible con montaje en carril DIN y en pared
- Software de código abierto que incluye SenseCAP Gateway OS, ChirpStack, Basics™ Station y un reenviador de paquetes integrado. Admite personalización y desarrollo secundario.

### Rendimiento potente

- Impulsado por Raspberry Pi CM4

- Broadcom BCM2711 SoC de cuatro núcleos Cortex-A72 (ARM v8) de 64 bits @ 1.5GHz
- Hasta 4GB de RAM y 32GB eMMC

### Amplias capacidades inalámbricas

- Wi-Fi integrado

- BLE integrado

- Mini-PCle1: LTE
  - Versión 4G preinstalada con módulo LTE:
    - EU868: EC25-EUX-mini-PCIe (LTE Cat 4)
    - US915: EC25-AFXGA-mini-PCIe (LTE Cat 4)

- Mini-PCle2: Módulo LoRa® SPI preinstalado
  - EU868: Wio-WM1302 LoRaWAN Gateway Module (SPI) - EU868
  - US915: Wio-WM1302 LoRaWAN Gateway Module (SPI) - US915

### Interfaces abundantes

- 3x RS485 (aislados)
- 1x Ethernet 10M/100M/1000M (compatible con PoE)
- 1x Ethernet 10M/100M
- 1x HDMI 2.0
- 2x USB2.0 Tipo A
- 1x USB2.0 Tipo C (consola USB para actualización del SO)
- 1x ranura para tarjeta SIM

### Seguridad y fiabilidad

- Watchdog de hardware
- Supercondensador UPS (**incluido**)
- Carcasa metálica con paneles laterales de PC
- ESD: EN61000-4-2, nivel 3
- EFT: EN61000-4-4, nivel 2
- Sobretensión: EN61000-4-5, nivel 2
- Vida útil de producción: reComputer R1225 permanecerá en producción al menos hasta diciembre de 2030

## Convenciones de nomenclatura

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
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Especificaciones de hardware</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>CPU</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi CM4, Quad-core Cortex-A72@ 1.5GHz</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Sistema operativo</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Raspberry Pi OS, Ubuntu</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RAM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>eMMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>32GB</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Especificaciones del sistema</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Entrada</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Bloque de terminales de 2 pines</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>PoE (como dispositivo alimentado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Estándar IEEE 802.3af, 12.95W </td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Tensión de alimentación (CA/CC)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>12&#126;24 V AC/9&#126;36 V DC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Protección contra sobretensión</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>40V</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Interruptor de encendido</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>No</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Interruptor de reinicio</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Sí</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interfaz</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps (compatible con PoE*)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (para flashear el SO)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x bloque de terminales de 3 pines (aislados)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura para tarjeta SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite una tarjeta SIM estándar</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite SSD M.2 NVMe</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botón de reinicio</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI (reservado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>soporta LCD* (a bordo dentro de la carcasa)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Comunicación inalámbrica</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>Wi-Fi: 2.4/5.0 GHz</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>Wi-Fi integrado en el chip</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Sí</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" style={{height: 18, width: '35.4622%'}}>BLE: 5.0</td>
      <td data-style="height: 18px; width: 31.5967%;" style={{height: 18, width: '31.5967%'}}>BLE integrado en el chip</td>
      <td data-style="height: 18px; width: 31.5966%;" style={{height: 18, width: '31.5966%'}}>Sí</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>LoRa®(Ocupado)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>SPI LoRa®</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>4G Celular (Opcional)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>4G LTE*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Normas</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={3} style={{height: 18, width: '35.4622%'}}>EMC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ESD:  EN61000-4-2, Nivel 3</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>EFT:  EN61000-4-4, Nivel 2</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Sobretensión:  EN61000-4-5, Nivel 2</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Certificación</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>CE, FCC</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RoHS</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Condiciones ambientales</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Grado de protección IP</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>IP40</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de funcionamiento</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-30~70 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Humedad de funcionamiento</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>10~95% HR</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Temperatura de almacenamiento</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>-40~80 °C</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Otros</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>UPS de supercondensador</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Módulo SuperCAP UPS LTC3350</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Watchdog de hardware</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1~255s</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RTC</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>RTC de alta precisión</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Seguridad</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Chip de cifrado TPM 2.0*</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>ATECC608A</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Disipación de calor</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Sin ventilador</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Garantía</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 años</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Vida útil de producción</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Hasta diciembre de 2030</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Declaración de estado de componentes e interfaces</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Reservado</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Designado para uso o expansión futura.</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Opcional</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Componentes no esenciales, los usuarios pueden elegir incluirlos o excluirlos.</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Dimensiones (W x H x D)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>130 mm x 93 mm x 49.6 mm</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Carcasa</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Carcasa de aleación de aluminio 6061 con paneles laterales de PC transparente</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Montaje</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>Carril DIN/Pared</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Peso (Neto)</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>750 g; R1225 con módulo 4G: 800 g</td>
    </tr>
  </tbody>
</table>
</div>

### Declaración

**Las opciones marcadas con * requieren una compra adicional de acuerdo con la lista de accesorios.**

## Descripción general del hardware

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Hardware_Overview03.jpg" /></div>

## Descripción general de la placa principal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Mainboard_Overview02.jpg" /></div>

## Diagrama de alimentación

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Power_Diagram04.jpg" /></div>

El reComputer R1225 admite tres opciones de alimentación: CA, terminal de CC y PoE. De forma predeterminada, el reComputer R1225 se alimenta a través del terminal de CA/CC (adaptador de corriente oficial regional SKU:110061505/110061506).  **Se incluye un módulo PoE (SKU:110991925)**, que proporciona una mayor flexibilidad de alimentación.

### Terminal de alimentación de 2 pines

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

El reComputer R1225 admite un voltaje de entrada nominal de 12&#126;24 V o un voltaje de CC de 9&#126;36V. La fuente de alimentación se conecta mediante el conector de bloque de terminales de alimentación de 2 pines. Para conectar correctamente a tierra el dispositivo, el cable de tierra se puede fijar al tornillo situado en la esquina superior izquierda del terminal de alimentación.

:::note
La solución de alimentación utiliza un diodo rectificador de puente para la protección contra polaridad inversa y es compatible tanto con entradas de CA como de CC. Esto garantiza que **independientemente de cómo se conecten los terminales positivo y negativo de la fuente de alimentación**, el circuito no se dañará. Al utilizar un rectificador de puente, la polaridad del voltaje de salida permanece fija independientemente de la polaridad de entrada de CC, proporcionando una protección eficaz contra la polaridad inversa.
:::

### POE (incluido)

Con el módulo PoE instalado, el puerto ETH0 del reComputer R1225 puede admitir alimentación PoE, proporcionando una forma cómoda y eficiente de alimentar el dispositivo a través de Ethernet. Esta opción simplifica el proceso de instalación y reduce la cantidad de cableado necesario, lo que la convierte en una solución ideal para aplicaciones con fuentes de alimentación limitadas o donde no hay tomas de corriente fácilmente disponibles.

- Entrada PoE: rango 44~57V; típico 48V
- Salida PoE: 12V, 1.1A máx.

:::note
Cabe señalar que el módulo PoE proporcionado con el reComputer R1225 cumple con el estándar IEEE 802.3af y puede proporcionar una potencia máxima de 12.95W. **Por lo tanto, si es necesario conectar periféricos de alta potencia como SSD o módulos 4G, la alimentación PoE puede no ser suficiente**. En este caso, se recomienda utilizar en su lugar el terminal de CA/CC para la alimentación, a fin de garantizar un funcionamiento estable y fiable del dispositivo.
:::

### Consumo de energía

Consulta la siguiente tabla para conocer el consumo de energía probado del reComputer R1225 en el laboratorio de Seeed Studio. Ten en cuenta que este valor es solo de referencia, ya que los métodos y el entorno de prueba pueden provocar variaciones en los resultados.

[R1225 Power Consumption Table](https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/res/R1225_Power_Consumption_Table.xlsx)

### Encendido y apagado

El reComputer R1225 no incluye un botón de encendido de forma predeterminada. El sistema se encenderá automáticamente una vez que se conecte la alimentación. Al apagarlo, selecciona la opción de apagado en el sistema operativo y espera a que el sistema se apague por completo antes de cortar la alimentación. Para reiniciar el sistema, simplemente vuelve a conectar la alimentación.

:::note
Ten en cuenta que, después de apagar, espera **al menos 10 segundos** antes de reiniciar el sistema para permitir que los condensadores internos se descarguen por completo.
:::

## Diagrama de bloques

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Details_Image/Block_Diagram05.jpg" /></div>

### Diagrama IIC

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig10.png" /></div>

## Interfaz

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 98.6555%;" colSpan={3} style={{height: 18, width: '98.6555%'}}><strong>Interface</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>Ethernet</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100/1000 Mbps IEEE 1588-2008 (admite PoE)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x 10/100 Mbps IEEE802.3/802.3u</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} rowspan={2} style={{height: 18, width: '35.4622%'}}>USB</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>2 x USB-A 2.0 Host</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x USB-C 2.0 (para flashear el SO)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>RS485</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>3 x bloque de terminales de 3 pines (aislado)</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura para tarjeta SIM</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite una tarjeta SIM estándar</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Ranura M.2</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite M.2 NVMe SSD</td>
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
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>Botón de reinicio</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>HDMI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>1 x HDMI 2.0</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 35.4622%;" colSpan={1} style={{height: 18, width: '35.4622%'}}>DSI</td>
      <td data-style="height: 18px; width: 63.1933%;" colSpan={2} style={{height: 18, width: '63.1933%'}}>admite LCD* (en la placa dentro de la carcasa)</td>
    </tr>
  </tbody>
</table>
</div>

Para consultar las asignaciones y desplazamientos de GPIO, utiliza el siguiente comando:

```bash
cat /sys/kernel/debug/gpio
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/16.png" /></div>

### Estado de los indicadores LED

El reComputer R1225 cuenta con 6 indicadores LED que sirven para señalar el estado de funcionamiento de la máquina. Consulta la siguiente tabla para conocer las funciones y el estado específicos de cada LED:

| Indicador LED | Color          | Estado | Descripción                                                                |
| ------------- | -------------- | ------ | -------------------------------------------------------------------------- |
| PWR           | Verde          | On     | El dispositivo se ha conectado a la alimentación.                          |
|               |                | Off    | El dispositivo no está conectado a la alimentación.                        |
| ACT           | Verde          |        | En Linux este pin parpadeará para indicar el acceso a la eMMC.<br /> Si se produce algún error durante el arranque, este LED parpadeará con un <br />patrón de error que puede descodificarse utilizando la [tabla en el sitio web de Raspberry Pi](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes).|
| USER          | Verde/Rojo/Azul |        | Debe ser definido por el usuario.                                          |
| RS485-1       | Verde          | Off    | No hay transferencia de datos en el canal RS485 1.                         |
|               |                | Blink  | El canal RS485 1 está recibiendo o enviando datos.                         |
| RS485-2       | Verde          | Off    | No hay transferencia de datos en el canal RS485 2.                         |
|               |                | Blink  | El canal RS485 2 está recibiendo o enviando datos.                         |
| RS485-3       | Verde          | Off    | No hay transferencia de datos en el canal RS485 3.                         |
|               |                | Blink  | El canal RS485 3 está recibiendo o enviando datos.                         |

#### Tabla de estado de ACT

| **Destellos largos** | **Destellos cortos** | **Estado**                          |
| ---------------- | ----------------- | ----------------------------------- |
| 0                | 3                 | Fallo genérico de arranque          |
| 0                | 4                 | start*.elf no encontrado            |
| 0                | 7                 | Imagen del kernel no encontrada     |
| 0                | 8                 | Fallo de SDRAM                      |
| 0                | 9                 | SDRAM insuficiente                  |
| 0                | 10                | En estado HALT                      |
| 2                | 1                 | Partición no FAT                    |
| 2                | 2                 | Error al leer desde la partición    |
| 2                | 3                 | Partición extendida no FAT          |
| 2                | 4                 | No coincide la firma/hash del archivo - Pi 4 |
| 4                | 4                 | Tipo de placa no compatible         |
| 4                | 5                 | Error fatal de firmware             |
| 4                | 6                 | Fallo de alimentación tipo A        |
| 4                | 7                 | Fallo de alimentación tipo B        |

Si el LED ACT parpadea con un patrón regular de cuatro destellos, no puede encontrar el bootcode (start.elf)
Si el LED ACT parpadea con un patrón irregular, entonces el arranque ha comenzado.
Si el LED ACT no parpadea, es posible que el código de la EEPROM esté dañado; inténtalo de nuevo sin nada conectado para asegurarte. Para más detalles, consulta el foro de Raspberry Pi:
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums
Para más detalles, consulta el [foro de Raspberry Pi](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

#### Luces LED personalizables mediante la interfaz Luci

Consulta la guía de [Inicio rápido](https://wiki.seeedstudio.com/es/r1225_quick_start/#access-the-sensecap-gateway-os) para acceder a la interfaz Luci.

Navega a `System` > `LED Configuration`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/led.png" alt="pir" width={800} height="auto" /></p>

#### Controlar las luces LED mediante comandos

Para controlar los LED de usuario, recomendamos usar sysfs, un seudosis­tema de archivos proporcionado por el kernel de Linux que expone información sobre varios subsistemas del kernel, dispositivos de hardware y sus controladores asociados. En el reComputer R1225, hemos abstraído la interfaz de los LED de usuario en tres archivos de dispositivo (led-red, led-blue y led-green), lo que permite a los usuarios controlar las luces LED simplemente interactuando con estos archivos. Los ejemplos son los siguientes:

1. Para encender el LED rojo, introduce el siguiente comando en el Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. Para apagar el LED rojo, introduce el siguiente comando en el Terminal:

```bash
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. Puedes encender el LED rojo y el verde al mismo tiempo; introduce el siguiente comando en el Terminal:

```bash
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### Zumbador

<div align="left"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig07.png" /></div>

El reComputer R1225 incorpora un zumbador activo, que puede utilizarse para diversos fines, como alarmas y notificaciones de eventos.

Para los usuarios de reComputer R1225 (**R1225 se basa en la plataforma de hardware R1000 v1.1**), el zumbador está conectado al PCA9535 P15; para apagar(encender) el zumbador, introduce el siguiente comando en el Terminal:

```bash
echo 591 | sudo tee /sys/class/gpio/export
echo out | sudo tee /sys/class/gpio/gpio591/direction
echo 1 | sudo tee /sys/class/gpio/gpio591/value # turn on
echo 0 | sudo tee /sys/class/gpio/gpio591/value # turn off
```

### RS485

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig21.png" /></div>

El reComputer R1225 está equipado con 3 conjuntos de interfaz RS485 mediante un conector de 3 pines, que está aislado tanto para señal como para alimentación, a fin de garantizar un funcionamiento seguro y fiable en aplicaciones industriales y de automatización. Las señales RS485A y RS485B están aisladas mediante aislamiento capacitivo, lo que proporciona una excelente inmunidad al EMI y cumple los requisitos de comunicación de alta velocidad de la interfaz RS485.

**De forma predeterminada, la resistencia de terminación de 120 Ω no está instalada. Sin embargo, se incluyen cinco resistencias de orificio pasante en el paquete. Si es necesario, los usuarios pueden fijar la resistencia sujetándola entre los terminales A y B del conector de bloque de terminales de 3 pines.**

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/RS485_compressed.png" alt="pir" width={500} height="auto" /></p>

:::note
La interfaz RS485 utiliza una fuente de alimentación aislada, lo que significa que la señal de tierra de los dispositivos externos conectados a la interfaz RS485 debe conectarse al pin GND_ISO.

:::

Estos son los pines relacionados con la interfaz 485 de reComputer para la tabla de datos.

| RS485         | RS485_POWER_EN         | Archivo de dispositivo del SO | P14         | predeterminado(Alto) |
| ------------- | ---------------------- | ------------------------------ | ----------- | --------------------- |
| TX5           |                        | /dev/ttyAMA5                   | GPIO12      |                       |
| RX5           |                        |                                | GPIO13      |                       |
| TX2           | ID_SD                  | /dev/ttyAMA2                   | GPIO0/ID_SD |                       |
| RX2           | ID_SC                  |                                | GPIO1/ID_SC |                       |
| TX3           |                        | /dev/ttyAMA3                   | GPIO4       |                       |
| RX3           |                        |                                | GPIO5       |                       |
| RS485_1_DE/RE | (Hight/DE \|\| Low/RE) | /dev/ttyAMA2                   | GPIO6       | Low predeterminado    |
| RS485_2_DE/RE |                        | /dev/ttyAMA3                   | GPIO17      | Low predeterminado    |
| RS485_3_DE/RE |                        | /dev/ttyAMA5                   | GPIO24      | Low predeterminado    |

De forma predeterminada, el puerto de habilitación de alimentación del puerto RS485 está en alto. Y cada interfaz RS485 está en estado de recepción. Puedes hacer un experimento sencillo.

El puerto 485 que conecta el PC al reComputer-R.

Introduce en el terminal de reComputer:

```shell
cat /dev/ttyAMA2
```

Luego envía algunos datos en la herramienta de depuración serie de tu ordenador; podrás observar los datos en la ventana de terminal de reComputer.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/21.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/22.png" /></div>

### Interruptor de arranque

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

El interruptor de arranque del reComputer R1225 está conectado al pin nRPI_BOOT del CM4. Este interruptor ofrece a los usuarios la opción de seleccionar la fuente de arranque entre eMMC y USB. En el modo normal, el interruptor debe colocarse alejado del lado con la etiqueta "BOOT", lo que permite que el sistema arranque desde eMMC. Por el contrario, cuando los usuarios necesiten grabar la imagen del sistema, deben colocar el interruptor hacia la etiqueta "BOOT", lo que permite que el sistema arranque desde la interfaz USB Type-C.

<div class="table-center">

| Posición del interruptor                                                                                               | Modo        | Descripción        | nRPI-BOOT |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Arranque desde eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo flash  | Arranque desde USB | High      |

</div>

:::note
**En modo Boot, la función de alimentación POE no está disponible.**
:::

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

El reComputer R1225 está equipado con un puerto USB Type-C y dos puertos USB Type-A. Consulta la siguiente tabla para conocer sus funciones y descripciones.

| **Tipo**  | **Cantidad** | **Protocolo** | **Función** | **Descripción**                                                                    |
| ---------- | ------------ | ------------ | ------------ | ---------------------------------------------------------------------------------- |
| **Type-C** | *1           | USB2.0       | USB-Device   | Se utiliza para depuración serie y grabación de firmware, etc.                    |
| **Type-A** | *2           | USB2.0       | USB-Host     | Conecta varios dispositivos USB como memorias flash, teclados USB y ratones.      |

Comprueba si el hub USB es detectado ejecutando el comando **lsusb**. Este comando lista todos los dispositivos USB conectados, incluidos los hubs.

```shell
lsusb
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/23.png" /></div>

Al ejecutar este comando, debería mostrarse información sobre los dispositivos USB conectados a tu sistema, incluidos los hubs USB presentes.

Si el hub USB funciona correctamente, deberías ver sus detalles en la salida del comando **lsusb**. Si no aparece en la lista, puede haber un problema con el hub o con su conexión al sistema. En ese caso, puede que necesites solucionar problemas del hub USB o de sus conexiones.

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
El reComputer R1225 utiliza una ranura para tarjeta SIM de tamaño estándar, comúnmente utilizada en aplicaciones industriales, que requiere una tarjeta SIM estándar con dimensiones de 25 mm x 15 mm.
:::note
El reComputer R1225 está disponible en una versión 4G. Si compras la edición estándar (sin el módulo 4G), puedes adquirir por separado un módulo 4G para su instalación. Bazaar Mall ofrece actualmente dos módulos 4G: Europa (EMEA y Tailandia <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>) y América (Norteamérica **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**)
:::

### Ranura SSD

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig08.png" /></div>
<br />
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig04.png" /></div>
La ranura SSD del reComputer R1225 está diseñada para alojar SSD NVMe M.2 2280 con capacidades de 128 GB, 256 GB, 512 GB y 1 TB. Esta ranura permite una expansión de almacenamiento de alta velocidad, lo que permite a los usuarios mejorar el rendimiento y la capacidad de su sistema.

Para listar los discos, incluido el SSD, puedes usar el comando *fdisk -l*. Aquí te mostramos cómo:

```bash
sudo fdisk -l
```

Este comando mostrará una lista de todos los discos conectados a tu sistema, incluido el SSD si se detecta correctamente. Busca las entradas que representen tu SSD. Normalmente comienzan con /dev/sd seguido de una letra (por ejemplo, /dev/sda, /dev/sdb, etc.).
Una vez que identifiques la entrada correspondiente a tu SSD, puedes proceder a particionarlo o formatearlo según sea necesario.

:::note
Hay dos usos principales para las tarjetas SSD:<br />
1. Almacenamiento de alta capacidad: las tarjetas SSD se pueden utilizar para necesidades de almacenamiento de alta capacidad.<br />
2. Unidad de arranque con imagen: otro uso consiste en utilizar la SSD tanto como almacenamiento de alta capacidad como para almacenar imágenes del sistema, permitiendo arrancar directamente desde la tarjeta SSD.<br />
Es importante tener en cuenta que no todas las tarjetas SSD disponibles en el mercado admiten el segundo uso. Por lo tanto, si pretendes utilizarla como unidad de arranque y no estás seguro de qué modelo comprar, te recomendamos optar por nuestro SSD recomendado de 1 TB (SKU 112990267). Este modelo ha sido probado y verificado para la funcionalidad de arranque, reduciendo el riesgo de problemas de compatibilidad y minimizando los costes de prueba y error.
:::

### Ranura Mini-PCIe

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig06.png" /></div>
<br />
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/slot.png" /></div>
<br />
<div class="table-center">

|         Ranura       | Protocolo compatible |
| -------------------- | -------------------- |
|       Mini-PCIe 1    |       4G LTE         |
|       Mini-PCIe 2    |      SPI LoRa®       |

</div>

:::note
El reComputer R1225 viene en versiones estándar y 4G: para la versión estándar, la Mini-PCIe 1 queda vacía; para la versión 4G, la Mini-PCIe 1 viene preinstalada con 4G LTE.
:::

Este dispositivo cuenta con dos interfaces Mini-PCIe, denominadas Ranura Mini-PCIe 1 y Ranura Mini-PCIe 2. La Ranura 1 se conecta a la ranura para tarjeta SIM y admite protocolos USB, mientras que la Ranura 2 admite tanto protocolos USB como SPI pero no se conecta a la ranura para tarjeta SIM. Por lo tanto, dispositivos como 4G LTE se pueden conectar a través de la Ranura 1, mientras que los dispositivos SPI LoRa® se pueden conectar a través de la Ranura 2.

### Orificio de reinicio

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig16.png" /></div>

Hay un interruptor pulsador miniatura ubicado en el orificio de reinicio del reComputer R1225. Al presionar este botón con un objeto delgado, se puede reiniciar el CM4. Este pin, cuando está en alto, indica que el CM4 ha arrancado. Llevar este pin a nivel bajo reinicia el módulo.

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig15.png" /></div>
<br />
<div class="table-left">

| Nombre | Tipo                        | Velocidades        | PoE                                |
| ------ | --------------------------- | ------------------ | ---------------------------------- |
| ETH0   | Ethernet Gigabit nativo CM4 | 10/100/1000 Mbit/s | Preinstalado                       |
| ETH1   | Convertido desde USB        | 10/100 Mbit/s      | No compatible                      |

</div>

El reComputer R1225 viene con dos puertos Ethernet RJ45. ETH0 es una interfaz Ethernet Gigabit nativa del CM4 que admite tres velocidades diferentes: 10/100/1000 Mbit/s. Se puede adquirir un módulo PoE adicional para habilitar la alimentación a través de Ethernet (PoE) mediante esta interfaz, proporcionando energía al reComputer R1225. El otro, ETH1, admite 10/100 Mbit/s y se convierte desde USB.

#### Arquitectura de la interfaz de red

El reComputer R1225 está equipado con **dos puertos Ethernet físicos** (ETH0 y ETH1). Estos dos puertos cumplen diferentes funciones según la arquitectura host-contenedor:

|   Puerto |       Rol                  | Descripción |
|---------|----------------------------|-------------|
| **ETH0** | Interfaz de contenedor (LXC) | Esta interfaz está **mapeada directamente (passthrough) desde el hardware al contenedor LXC** mediante la configuración de red LXC del host. El contenedor OpenWrt tiene control total sobre esta interfaz, gestionándola como un puerto WAN o LAN estándar. Todo el tráfico a nivel de aplicación (uplink LoRaWAN, MQTT, acceso a la interfaz web, etc.) fluye a través de este puerto. |
| **ETH1** | Interfaz del host (Debian)   | Esta interfaz es **gestionada por el sistema host Debian**. Se utiliza para tareas de gestión a nivel de host, como acceso SSH al host, operaciones de gestión de contenedores, actualizaciones de firmware y comunicación de monitorización del SAI. Permanece aislada de la pila de red del contenedor. |

Esta separación garantiza que, incluso si la red del contenedor está mal configurada o no es accesible, la interfaz de gestión del host siga siendo accesible para recuperación y mantenimiento.

### HDMI

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig17.png" /></div>

El reComputer R1225 incorpora una interfaz HDMI nativa del CM4, que admite salida de vídeo de hasta 4K a 60 fps. Es ideal para aplicaciones que requieren múltiples pantallas, permitiendo a los usuarios enviar su contenido a pantallas externas de gran tamaño.

### RTC

El reComputer R1225 incorpora un circuito RTC que viene preinstalado con una batería CR2032, lo que le permite mantener la función de cronometraje incluso en caso de pérdida de alimentación.

Para probar la funcionalidad del reloj en tiempo real (RTC), sigue estos pasos:

1. Desactiva la sincronización automática de la hora:

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

4. Comprueba la hora del RTC:

```bash
sudo hwclock -r
```

Este comando leerá y mostrará la hora almacenada en el RTC.
5. Desconecta la fuente de alimentación del RTC, espera unos minutos, luego vuelve a conectarla y comprueba de nuevo la hora del RTC para ver si ha conservado la hora correcta.

### Watchdog

El reComputer R1225 viene equipado con un circuito watchdog de hardware independiente que garantiza el reinicio automático del sistema en caso de bloqueos anómalos del sistema. El circuito watchdog se implementa a través del RTC y permite tiempos de alimentación flexibles de 1 a 255 segundos.

Para realizar una prueba del watchdog, sigue estos pasos:

1. Instala el software watchdog:

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

Puedes ajustar otros parámetros según sea necesario.
3. Asegúrate de que el servicio watchdog se esté ejecutando:

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
Este comando provoca un fallo del kernel y debería hacer que el watchdog reinicie el sistema.
:::

5. Supervisa el sistema para confirmar que se reinicia después del periodo de tiempo de espera especificado.
Estos pasos te ayudarán a probar y garantizar la funcionalidad del temporizador watchdog en tu sistema.

## Interfaces y módulos opcionales

### Wi-Fi/BLE (incluido)

El reComputer R1225 está impulsado por el CM4 con una versión Wi-Fi/BLE integrada, que proporciona los mismos parámetros de Wi-Fi/BLE que el CM4. Para obtener información detallada sobre los parámetros, consulta el sitio web oficial de Raspberry Pi.

:::note
Es importante tener en cuenta que, debido a la carcasa metálica del reComputer R1225, las señales Wi-Fi/BLE pueden tener dificultades para atravesar el exterior metálico. Por lo tanto, si necesitas esta función, te recomendamos instalar la antena externa que hemos preparado para ti.
:::

#### Conectar Wi-Fi

##### Conectarse a Wi-Fi mediante la interfaz Luci

Consulta la guía de [Inicio rápido](https://wiki.seeedstudio.com/es/r1225_quick_start/#wifi-connection) para la conexión Wi-Fi

##### Comando para conectarse a Wi-Fi

paso 1. Para escanear redes Wi‑Fi:

  ```bash
  nmcli dev wifi list
  ```

paso 2. Conéctate a la red Wi‑Fi:

  ```bash
  sudo nmcli dev wifi connect network-ssid password "network-password"
  sudo nmcli --ask dev wifi connect network-ssid
  ```

paso 3. Después de encender el dispositivo, se conectará automáticamente a la red Wi‑Fi.  
  Si deseas eliminar la información de Wi‑Fi guardada:

  ```bash
  nmcli con del network-ssid
  ```

  Después de que la conexión se desconecte, conéctate a otra red Wi‑Fi.

#### Conectar dispositivos Bluetooth

Antes de añadir un dispositivo Bluetooth, el servicio Bluetooth de tu ordenador debe estar iniciado y en ejecución. Puedes comprobarlo con el comando systemctl.

```bash
sudo systemctl status bluetooth
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/32.png" /></div>
<br />
Si el estado del servicio Bluetooth no es activo, primero debes habilitarlo. Luego inicia el servicio para que se inicie automáticamente cuando enciendas tu dispositivo.

```bash
sudo systemctl enable bluetooth
sudo systemctl start bluetooth
```

Puedes usar la herramienta bluetoothctl para conectar y gestionar Bluetooth; a continuación se muestran algunos comandos y comentarios comunes:

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

### Módulo 4G (opcional)

El reComputer R1225 LoRaWAN Gateway está disponible en versiones Estándar y 4G. La ranura Mini‑PCIe 1 de la versión Estándar está vacía, mientras que la versión 4G viene con un módulo Mini‑PCIe preinstalado diseñado para Europa (EMEA y Tailandia <a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">**SKU 113991135**</a>) y América (Norteamérica **<a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html">SKU 113991134</a>**) respectivamente.

### Módulo LoRa® (incluido)

La ranura Mini‑PCIe 2 del reComputer R1225 LoRaWAN Gateway está ocupada por el módulo SPI LoRa®.

### PoE (incluido)

El reComputer R1225 LoRaWAN Gateway viene equipado con un módulo PoE, lo que elimina la necesidad de que los usuarios compren, suelden y ensamblen uno por sí mismos.

### Ranura M.2 (opcional)

El reComputer R1225 es compatible con SSD NVMe 2280 y acelerador de IA (Hailo) mediante el uso de una ranura PCIe (J62) situada debajo de dos ranuras Mini‑PCIe en la placa. Es importante tener en cuenta que el PCIe del CM4 es gen2.0 con una velocidad teórica máxima de 5 Gbps. Si utilizas un SSD Gen3.0 o superior, es posible que no pueda alcanzar la velocidad máxima del SSD. Después de las pruebas, el reTerminal DM con SSD instalado puede alcanzar una velocidad máxima de escritura de 230 MB/s y una velocidad máxima de lectura de 370 MB/s. Si no estás seguro de qué SSD son compatibles, puedes comprar siguiendo la lista de accesorios que aparece a continuación.

[Haz clic aquí para ver las instrucciones de montaje](/es/recomputer_r1000_assembly_guide/#assemble-ssd).

<div class="table-center">

<table >
  <tbody>
  <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 25%;" colSpan={1} rowspan={4} style={{height: 18, width: '25%'}}>Tarjeta SSD</td>
      <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>NVMe M.2 2280 SSD 1TB</td>
      <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">112990267</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>512GB NVMe M.2 PCle Gen3x4 2280 SSD interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html">112990247</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>256GB NVMe M.2 PCle Gen3x4 2280 SSD interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html">112990246</a></td>
  </tr>
  <tr data-style="height: 18px;" style={{height: 18}}>
    <td data-style="height: 18px; width: 50%;" colSpan={1} style={{height: 18, width: '50%'}}>128GB NVMe M.2 PCle Gen3x4 2280 SSD interno</td>
    <td data-style="height: 18px; width: 25%;" colSpan={1} style={{height: 18, width: '25%'}}><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html">112990226</a></td>
  </tr>
  </tbody>
</table>
</div>

:::note
Ten en cuenta que:<br />
1- Los resultados de las pruebas de velocidad pueden variar según el modelo de SSD, el método de prueba y el entorno de prueba. Los valores proporcionados aquí son solo de referencia y se obtuvieron en el laboratorio de Seeed.<br />

Hay dos usos principales para las tarjetas SSD:<br />
1. Almacenamiento de alta capacidad: las tarjetas SSD se pueden utilizar para necesidades de almacenamiento de alta capacidad.<br />
2. Unidad de arranque con imagen: otro uso consiste en utilizar la SSD tanto como almacenamiento de alta capacidad como para almacenar imágenes del sistema, lo que permite arrancar directamente desde la tarjeta SSD.<br />
Es importante tener en cuenta que no todas las tarjetas SSD disponibles en el mercado admiten el segundo uso. Por lo tanto, si tienes la intención de utilizarla como unidad de arranque y no estás seguro de qué modelo comprar, te recomendamos optar por nuestra **SSD de 1TB (<a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html">SKU [112990267]</a>)** recomendada. Este modelo ha sido probado y verificado para la funcionalidad de arranque, lo que reduce el riesgo de problemas de compatibilidad y minimiza los costes de prueba y error.
:::

### Chip de cifrado TPM 2.0 (opcional)

El TPM incorpora el OPTIGA™ TPM SLB9670 de Infineon, que cumple con la especificación TPM 2.0 del Trusted Computing Group (TCG) y se recomienda como chip de cifrado para el reComputer R1225. El chip incorpora una interfaz SPI aplicada al puerto J13 de la placa, para habilitar una raíz de confianza para la integridad de la plataforma, la atestación remota y los servicios criptográficos.

:::note
[Haz clic aquí para ver las instrucciones de montaje](https://wiki.seeedstudio.com/es/recomputer_r1000_assembly_guide/#assemble-tpm-20-module).
:::

Si conectas el módulo TPM 2.0 al dispositivo, el siguiente código puede ayudar a comprobar la conexión TPM.

```bash
ls /dev | grep tpm
```

Si ves **tpm0** y **tpmrm0** en la salida, significa que los dispositivos TPM (Trusted Platform Module) se detectan y están disponibles en tu sistema. Esto indica que el hardware TPM es reconocido y accesible, lo cual es una buena señal. Puedes continuar utilizando funcionalidades o aplicaciones relacionadas con TPM sabiendo que los dispositivos están presentes y accesibles.

### UPS (incluido)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/30.png" /></div>

El UPS es 7F, que funciona en serie. El módulo UPS está situado entre los componentes DC5V y CM4, con una señal GPIO utilizada para alertar a la CPU en caso de pérdida de alimentación de la fuente de 5V. Al recibir esta señal, la CPU ejecuta un script de emergencia antes de que se agote la energía del supercondensador, iniciando un comando "$ shutdown".
<br />
La duración de respaldo proporcionada por el UPS depende en gran medida de la carga del sistema. A continuación se muestran algunos escenarios típicos probados con un módulo CM4 con 4 GB de RAM, 32 GB de almacenamiento eMMC y un módulo Wi‑Fi.
<br />

| Modo de funcionamiento | Tiempo(s) | Observación                                                            |
| --------------------- | --------- | ---------------------------------------------------------------------- |
| Inactivo              | 37        | Prueba en condiciones de inactividad con el programa de controlador oficial cargado |
| Carga completa de CPU | 18        | stress -c 4 -t 10m -v &                                                |

:::note
Para la función de UPS, ponte en contacto con nosotros para obtener más información; la señal de alarma es activa en nivel BAJO.
:::

Se utiliza un GPIO25 entre la CPU y la entrada de alimentación CC/CA para avisar a la CPU cuando la fuente de alimentación de 5V se cae. Entonces la CPU debe hacer algo urgente en un script antes de que se agote la energía del supercondensador y ejecutar un `$ shutdown`
<br />
Otra forma de utilizar esta función es iniciar un apagado cuando cambie el pin GPIO. El pin GPIO dado se configura como una tecla de entrada que genera eventos KEY_POWER. Este evento es gestionado por systemd-logind iniciando un apagado.
Utiliza `/boot/overlays/README` como referencia y luego modifica `/boot/config.txt`.

```bash
dtoverlay=gpio-shutdown,gpio_pin=25,active_low=1
```

El siguiente código en Python es una demostración para detectar el modo de funcionamiento del UPS de supercondensador a través de GPIO25 y guardar automáticamente los datos y apagar cuando se corta la alimentación del sistema.

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

### DSI(opcional)

Se reserva un DSI (J24) en la placa para usos especiales. Se solicita a los usuarios que compren complementos según sus propias necesidades.

## Recursos adicionales

- [Archivo 3D de reComputer R1225](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000.stp)
- [Diseño esquemático y diseño de PCB de reComputer R1225](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_schematic_design_files.zip)
- [Asignación de pines de reComputer R1225 (R1000 v1.1)](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer_R1000_v1_1_Pin_Assignment.xlsx)
- [Tabla de consumo de energía de R1225](https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/res/R1225_Power_Consumption_Table.xlsx)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
