---
description: "Aplicación Wi-Fi HaLow Media Gateway: carga de contenido multimedia desde un smartphone a través de XIAO ESP32-S3 y Wio-WM6180 sobre un enlace Wi-Fi HaLow hacia una puerta de enlace HaLowLink 2 y una consola multimedia en PC"
title: Wi-Fi HaLow Media Gateway
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - Media Gateway
  - XIAO ESP32-S3
  - Wio-WM6180
  - Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_media_gateway
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/es/halowlink2_media_gateway/
---

# Wi-Fi HaLow Media Gateway

<!-- Internal note: TOP-PRIORITY application page. Content sourced from the Seeed engineering demo write-up "Wi-Fi HaLow Media Gateway Demo.docx" (received 2026-11-12) — the end-to-end path was demonstrated by Seeed engineering and the figures below come from that demonstration. Firmware files, source code, and flashing instructions must NOT be documented until officially released and verified; those parts stay as internal comments, not visible TODOs. -->

## Introducción

Esta aplicación convierte un HaLowLink 2 más un nodo XIAO ESP32-S3 en una **media gateway**: un smartphone estándar envía fotos, vídeos y archivos a un PC a través de un enlace de largo alcance **Wi-Fi HaLow**, sin ningún soporte HaLow en el teléfono.

La ruta extremo a extremo demostrada:

```text
Smartphone --2.4 GHz Wi-Fi--> XIAO ESP32-S3 + Wio-WM6180 --Wi-Fi HaLow--> HaLowLink 2 --Ethernet--> PC (Media Console)
```

El smartphone solo necesita Wi-Fi de 2,4 GHz ordinario. El nodo XIAO hace de puente entre ambos mundos: aloja un hotspot de 2,4 GHz para el teléfono y mantiene el enlace HaLow con la puerta de enlace.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-setup.jpg" alt="HaLowLink 2 with antenna beside its retail box, and the XIAO ESP32-S3 plus Wio-WM6180 gateway node in front" width={600} height="auto" /></p>

## Requisitos de hardware

| Producto | SKU | Función en la demo |
|:----|:----|:----|
| HaLowLink 2 Wi-Fi HaLow Gateway | 100072966 | Punto de acceso Wi-Fi HaLow; puente Ethernet hacia el PC |
| Wi-Fi HaLow Transceiver for Seeed Studio XIAO (Wio-WM6180) | 109100041 | La radio HaLow en el nodo gateway |
| Seeed Studio XIAO ESP32-S3 | 113991114 | Controlador del gateway: aloja el SoftAP de 2,4 GHz y retransmite el contenido multimedia |

También necesitas:

- Un smartphone con Wi-Fi de 2,4 GHz (no se requiere soporte HaLow)
- Un PC con Windows con un puerto Ethernet, ejecutando la Media Console
- Fuentes de alimentación y cableado para todos los dispositivos

## Arquitectura del sistema

Cinco etapas, cada una entregando el contenido multimedia a la siguiente:

| Etapa | Enlace | Notas |
|:-----:|:----:|:------|
| Smartphone → nodo XIAO | Wi-Fi de 2,4 GHz | El teléfono carga al SoftAP del nodo a través de una página del navegador |
| XIAO ESP32-S3 → Wio-WM6180 | SPI | El controlador envía en streaming los bytes recibidos a la radio HaLow |
| Wio-WM6180 → HaLowLink 2 | Wi-Fi HaLow (sub-1 GHz) | El salto de largo alcance; el nodo se une a la red HaLow de la puerta de enlace |
| HaLowLink 2 → PC con Windows | Ethernet | La puerta de enlace entrega el tráfico a la Media Console |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-architecture.png" alt="System architecture of the Wi-Fi HaLow Media Gateway demo: smartphone, XIAO ESP32-S3, Wio-WM6180 transceiver, HaLowLink 2, Windows PC" width={800} height="auto" /></p>

## Configurar el lado de la puerta de enlace

1. **HaLowLink 2.** Configura la puerta de enlace — antena, alimentación, conexión al ordenador — siguiendo [Preparation](/es/halowlink2_getting_started#preparation), luego inicia sesión mediante [Access the Web UI](/es/halowlink2_getting_started#access-the-web-ui). La configuración de Router de fábrica es suficiente para una demo independiente; usa [Access Point Mode](/es/halowlink2_getting_started#access-point-mode-recommended) para integrarla en una LAN existente.
2. **Nodo XIAO.** Ensambla el XIAO ESP32-S3 con el módulo Wio-WM6180 siguiendo la guía [Wi-Fi HaLow Module for XIAO](/es/getting_started_with_wifi_halow_module_for_xiao), conecta su antena y flashea el firmware de Media Gateway proporcionado por Seeed Studio.
3. **PC.** Conecta el PC con Windows al **puerto LAN** de la puerta de enlace mediante Ethernet (red de demostración `192.168.12.x`) y arranca el servidor Media Console.

<!-- Pending official release (internal): XIAO firmware binary/source, flashing procedure, and the Media Console package. Do NOT fabricate download links, repository URLs, server ports, or flashing steps — insert the official ones here when the release package arrives. -->

Tras encender, el nodo funciona automáticamente: el ESP32-S3 inicializa el Wio-WM6180, se asocia con el punto de acceso HaLowLink 2 a través de Wi-Fi HaLow y arranca su SoftAP de 2,4 GHz para el teléfono.

**Verifica el enlace HaLow antes de ejecutar la demo:** en la página de inicio de la puerta de enlace, abre la tarjeta **Access Point (HaLow)**: el nodo asociado aparece con nivel de señal y velocidad RX/TX, y las páginas **Local Network** / **Network → Interfaces** muestran el lado LAN que transporta el tráfico hacia el PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-ap-clients.png" alt="HaLowLink 2 web UI Access Point (HaLow) dialog listing the associated gateway node with signal level and RX/TX rate" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Interfaz web de la puerta de enlace: la tarjeta Access Point (HaLow) lista el nodo gateway asociado con nivel de señal y velocidad RX/TX: el enlace está activo antes de que se mueva ningún contenido multimedia.</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-lan-interface.png" alt="HaLowLink 2 web UI Network Interfaces page showing the LAN interface used for the demo network" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Interfaz web de la puerta de enlace, Network → Interfaces: la interfaz LAN (192.168.12.x) transporta el tráfico de la demo hacia el PC.</em></p>

## Ejecutar la demo

1. **Teléfono:** conéctate al SoftAP de 2,4 GHz del nodo XIAO, abre la página web de Media Gateway en `192.168.4.1` en el navegador, elige una foto, vídeo o archivo y comienza la carga.
2. **Nodo:** el ESP32-S3 recibe la carga y la envía en streaming a través del enlace HaLow, sin almacenamiento intermedio.
3. **PC:** la Media Console recibe, almacena y lista el archivo; ábrelo allí para previsualizarlo, reproducirlo, guardarlo o descargarlo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-phone-upload.png" alt="Smartphone browser page of the Media Gateway with a photo selected and the upload in progress" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Lado del smartphone: la página de carga basada en navegador servida por el SoftAP del nodo XIAO, con una foto seleccionada y la transferencia en curso.</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-console.png" alt="PC Media Console page listing received photos, videos and files with preview and download actions" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Lado del PC: la Media Console lista cada archivo recibido — fotos, vídeos, documentos — listo para previsualizar, reproducir, guardar o descargar.</em></p>

Cómo mueve los datos el nodo:

- **Gateway de doble red:** el SoftAP atiende el lado del teléfono mientras que la interfaz HaLow atiende el lado del PC; la gestión de la ruta por defecto mantiene el contenido multimedia saliente en el camino Wi-Fi HaLow.
- **Relevo en streaming:** el contenido multimedia se reenvía en **bloques de 16 KB**: el ESP32-S3 nunca almacena un archivo completo en memoria y no se usa codificación Base64.
- **Tipos de archivo:** JPG, PNG, MP4 y archivos generales.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-node.png" alt="XIAO ESP32-S3 stacked with the Wio-WM6180 Wi-Fi HaLow module and antenna cable, the gateway node of the demo" width={600} height="auto" /></p>

## Resultados de la demo

La transferencia extremo a extremo completa fue demostrada por el equipo de ingeniería de Seeed:

- **Carga de fotos**: transferencia JPG / PNG verificada
- **Transferencia de vídeo**: carga y reproducción de MP4 verificadas
- **Archivos genéricos**: carga y descarga compatibles
- **PC Media Console**: archivos recibidos previsualizados, reproducidos, guardados y descargados
- **Conectividad extremo a extremo**: transferencia de contenido multimedia de smartphone a PC sobre Wi-Fi HaLow, sin soporte HaLow en el teléfono

<!-- Pending demo verification (internal): record the exact firmware versions, HaLow channel/bandwidth, and distance used in the demonstration once the engineering write-up is finalized; add per-stage troubleshooting entries observed in real runs. -->

## Solución de problemas

Para problemas de la puerta de enlace y del enlace HaLow — acceso a la interfaz web, emparejamiento, direccionamiento IP, rendimiento — consulta [Getting Started → Troubleshooting](/es/halowlink2_getting_started#troubleshooting).

## Recursos

- [Getting Started with Wi-Fi HaLow Module for XIAO](/es/getting_started_with_wifi_halow_module_for_xiao)
- [Getting Started with Wi-Fi HaLow Mini PCIe Module](/es/getting_started_with_wifi_halow_mini_pcie_module)
- [HaLowLink 2 Getting Started](/es/halowlink2_getting_started)

<!-- Pending official release (internal): add source code / firmware links here once released. -->

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
