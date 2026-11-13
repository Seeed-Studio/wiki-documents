---
description: "Introducción a la HaLowLink 2 Wi-Fi HaLow Gateway: características, especificaciones, descripción general del hardware, contenido del paquete y recursos"
title: HaLowLink 2 Wi-Fi HaLow Gateway
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - MM8108
  - IEEE 802.11ah
  - OpenWrt
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_introduction
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/es/halowlink2_introduction/
---

# HaLowLink 2 Wi-Fi HaLow Gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-hero.png" alt="HaLowLink 2 Wi-Fi HaLow Gateway standing on a desk with its antenna attached" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>HaLowLink 2 en su base con la antena específica de la región conectada.</em></p>

## Introducción

El **HaLowLink 2** es un gateway Wi-Fi HaLow (IEEE 802.11ah) vendido por Seeed Studio (SKU **100072966**). Funciona como **Router, Punto de Acceso o Extensor** Wi-Fi HaLow: crea una nueva red HaLow, añade conectividad HaLow a una red existente o empareja dos unidades para alcanzar ubicaciones remotas hasta 1 km de distancia (línea de vista; depende del entorno). Su radio sub-1 GHz **MM8108** proporciona el enlace HaLow.

Con una segunda unidad como Extensor, también transporta **hotspots Wi-Fi de 2,4 GHz y Ethernet por cable a ubicaciones remotas** a través del enlace HaLow, de modo que teléfonos, portátiles y dispositivos IoT ordinarios también se puedan unir. Las configuraciones de Router y Punto de Acceso se seleccionan en el asistente de configuración basado en OpenWrt; el botón físico Mode cambia la unidad al modo Extensor, inicia el emparejamiento o realiza un restablecimiento de fábrica.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

<!-- Internal note: features below are taken from the Seeed product page and the official Morse Micro HaLowLink 2 Product Brief (Rev 9), which agree with each other. -->

- **Wi-Fi HaLow sub-1 GHz de largo alcance**: IEEE 802.11ah en la radio MM8108: hasta 1 km de alcance en línea de vista, mejor penetración que el Wi-Fi de 2,4 GHz, anchos de canal de 1 / 2 / 4 / 8 MHz y una tasa PHY máxima de 43,3 Mbps.
- **Tres modos, asistente o botón**: funciona como Router, Punto de Acceso o Extensor Wi-Fi HaLow. Elige Router o Punto de Acceso en el asistente de configuración; usa el botón Mode para cambiar una unidad al modo Extensor y emparejarla.
- **Conectividad HaLow y 2,4 GHz**: Wi-Fi HaLow más un punto de acceso de 2,4 GHz (802.11n, 2×2), para que los dispositivos que no son HaLow también puedan unirse a la red.
- **Interfaces cableadas Gigabit**: 2 puertos Ethernet Gigabit (WAN y LAN) y un puerto USB-C que transporta tanto alimentación como datos Ethernet.
- **Gestión basada en OpenWrt**: basado en OpenWrt 23.05, con interfaz web, asistentes de configuración, diagnósticos, SSH/CLI y actualizaciones en línea.

:::note
43,3 Mbps es la **tasa de datos PHY (capa física) máxima** a 8 MHz de ancho de banda, no el rendimiento de aplicación medido en la práctica; "hasta 1 km" es un máximo en línea de vista y no está garantizado en todos los entornos.
:::

## Especificaciones

<!-- Internal note (Specifications Audit): every row below was cross-checked between the Seeed product page (primary baseline) and the Morse Micro HaLowLink 2 Product Brief (Rev 9). No conflicts were found as of 2026-11-06. Audit table: D:\SeeedWiki\notes\halowlink2\SPEC_AUDIT.md. Never populate this table with HaLowLink 1 values. -->

### Inalámbrico

| Elemento | Valor |
|:----:|:-----:|
| Estándar Wi-Fi HaLow | IEEE 802.11ah |
| Módulo / Radio HaLow | AzureWave AW-HM677 / Morse Micro MM8108 |
| Ancho de Canal | 1 / 2 / 4 / 8 MHz (dependiente de la región) |
| Tasa de Datos PHY Máxima | 43,3 Mbps a 8 MHz de ancho de banda (tasa PHY, no rendimiento de aplicación) |
| Potencia TX | Hasta 26 dBm (dependiente de la región) |
| Wi-Fi de 2,4 GHz | IEEE 802.11n, MediaTek MT7603E, 2×2 con antenas internas |
| Modos de Red | Router / Punto de Acceso / Extensor Wi-Fi HaLow |
| Alcance | Hasta 1 km en línea de vista (dependiente del entorno, no garantizado) |

### Hardware

| Elemento | Valor |
|:----:|:-----:|
| CPU | MediaTek MT7621 |
| Memoria / Almacenamiento | 256 MB DRAM / 32 MB NAND Flash |
| Entrada de Alimentación | 5 V ⎓ 2 A (USB-C) |
| Temperatura de Funcionamiento | 0–40 °C, 5–95% HR sin condensación |
| Dimensiones / Peso | 88 × 68 × 24 mm / 102 g (168 g con base y antena) |

### Interfaces y Software

| Elemento | Valor |
|:----:|:-----:|
| Ethernet | 2 puertos Ethernet Gigabit (etiquetados WAN y LAN) |
| USB-C | 1 puerto USB-C (alimentación y datos Ethernet) |
| Conector de Antena | SMA (se incluye antena externa específica de la región) |
| Control / Indicadores | Botón Mode; LEDs de Status, Wi-Fi HaLow y Wi-Fi 2,4 GHz |
| Sistema Operativo | Basado en OpenWrt 23.05 (puede cambiar con actualizaciones de firmware) |
| Configuración | Interfaz web (HTTPS) y SSH/CLI (SSH desactivado por defecto) |
| Dirección de Gestión | `https://192.168.12.1` (por defecto) |

:::note Información Regional
La familia de productos es compatible con mercados regionales que incluyen **EE. UU., Canadá, Australia, Reino Unido, Europa y Japón**. La potencia TX está limitada a 14 dBm en la UE/Reino Unido y a 16 dBm en Japón; las bandas, canales y anchos de banda disponibles varían según el modelo regional, y la operación EasyMesh / malla 802.11s no es compatible en la UE ni en el Reino Unido. Utiliza el modelo destinado a tu país o región, con la antena y el adaptador de alimentación suministrados. La región regulatoria no se puede cambiar mediante la configuración de usuario admitida. Las certificaciones y declaraciones se aplican a modelos y regiones específicos; confirma la variante regional exacta antes de la compra.
:::

<!-- Requires Verification (internal): confirm the manufacturer regional part number for Seeed SKU 100072966 and archive the applicable FCC, EU DoC, Japan MIC/Giteki, and Wi-Fi CERTIFIED documents before listing them as certifications of this SKU. The existing specification audit records source agreement, not certificate coverage verification. -->

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-ports.jpg" alt="HaLowLink 2 rear panel with WAN and LAN Ethernet ports and the USB-C power port" width={500} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Panel trasero: puertos Ethernet Gigabit WAN y LAN y el puerto de alimentación USB-C (5 V ⎓ 2 A); el conector de antena SMA se encuentra en el borde superior.</em></p>

| Interfaz | Función |
|:---------:|:-----|
| Puerto Ethernet (WAN) | Enlace ascendente: conéctalo a tu router o red existente |
| Puerto Ethernet (LAN) | Red local: conecta un ordenador para la configuración o un dispositivo aguas abajo |
| Puerto USB-C | Entrada de alimentación (5 V ⎓ 2 A) y datos Ethernet cuando se conecta a un ordenador |
| Conector SMA | Antena Wi-Fi HaLow externa específica de la región (conectar antes de encender) |
| Botón Mode | Entrar en modo Extensor (mantener pulsado hasta que el LED de Status parpadee en color aguamarina rápido y luego soltar); iniciar emparejamiento (pulsación corta); realizar un restablecimiento de fábrica (mantener pulsado hasta que el LED de Status parpadee en verde lentamente y luego soltar) |

Tres LEDs — **Status**, **Wi-Fi HaLow** y **Wi-Fi 2,4 GHz** — muestran el estado del dispositivo. El LED de Status es verde fijo en la configuración de Router o Punto de Acceso (ambos alojan el AP HaLow) y aguamarina fija en modo Extensor. En un Extensor, un LED Wi-Fi HaLow púrpura fijo significa que está asociado a través de HaLow; en el Punto de Acceso, púrpura fijo solo significa que HaLow está habilitado, así que confirma los clientes en Dispositivos Conectados. Hay un primer plano etiquetado en [Pair the Devices](/es/halowlink2_getting_started#emparejar-los-dispositivos); el comportamiento completo de los LEDs está en [Getting Started](/es/halowlink2_getting_started#configuración-de-red).

## Contenido del Paquete

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-package.png" alt="HaLowLink 2 retail box with the package contents laid out beside it" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Contenido del paquete de venta al por menor junto a la caja: dispositivo, base, antena específica de la región, cable USB-C a USB-C, cable Ethernet, adaptador de alimentación con adaptadores de enchufe regionales y documentación impresa (Guía de Inicio Rápido y tarjeta de Soporte y Garantía).</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-box-diagram.png" alt="Official What's in the box diagram with labelled ports, dimensions and included accessories" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Diagrama oficial del paquete: puertos etiquetados (conector SMA, WAN, LAN, USB-C), dimensiones del dispositivo (88 × 68 mm; base de 94 mm) y cada accesorio incluido con su adaptador de enchufe regional.</em></p>

<!-- Internal note: box contents below are from the official Morse Micro HaLowLink 2 Product Brief (Rev 9); the retail-package photo above (provided 2026-11-11) shows the same items in a Seeed-branded retail box. -->

- Dispositivo HaLowLink 2
- Base HaLowLink 2
- Adaptador de alimentación
- Cable USB-C a USB-C
- Cable Ethernet
- Antena específica de la región (SMA)
- Adaptadores regionales: EE. UU., AU, Reino Unido, UE
- Guía de Inicio Rápido
- Tarjeta de Soporte y Garantía

## Recursos

- [Página de producto de Seeed Studio — HaLowLink 2 Wi-Fi HaLow Gateway](https://www.seeedstudio.com/HaLowLink-2-Wi-Fi-Halow-Gateway-p-7025.html) (SKU 100072966)
- [HaLowLink 2 Product Brief (PDF)](https://www.morsemicro.com/resources/product_brief/HaLowLink-2_Product-Brief.pdf)
- [HaLowLink User Guide (PDF)](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf)
- [Notas de versión de software de HaLowLink 2](https://docs.morsemicro.com/software-releases/halowlink2-software-release-notes)
- [Código fuente de Morse Micro OpenWrt (GitHub)](https://github.com/MorseMicro/openwrt)

**Tutoriales relacionados de Seeed Studio Wiki:**

- [Primeros pasos con el Módulo Wi-Fi HaLow para XIAO](/es/getting_started_with_wifi_halow_module_for_xiao) (Wio-WM6180)
- [Primeros pasos con el Módulo Wi-Fi HaLow Mini PCIe](/es/getting_started_with_wifi_halow_mini_pcie_module) (familia Wio-WM6108)

**Siguiente paso:** continúa con [Getting Started](/es/halowlink2_getting_started) para configurar tu HaLowLink 2 por primera vez.

## Soporte Técnico y Debate sobre el Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
