---
title: Preguntas frecuentes sobre reComputer R1000 y R1100
description: Preguntas frecuentes sobre los controladores de borde reComputer R1000 y R1100, incluidas las credenciales predeterminadas, la comunicación RS485 y BACnet, el flasheo del sistema operativo y la configuración del sistema.
slug: /recomputer_r1000_r1100_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer R1000 FAQ
  - reComputer R1100 FAQ
  - reComputer R1000 troubleshooting
  - reComputer R1100 edge gateway
  - Raspberry Pi CM4
  - RS485 Modbus RTU
  - BACnet MS/TP
---

<div class="recomputer-faq-page">

# Preguntas frecuentes sobre reComputer R1000 y R1100

Esta página contiene respuestas verificadas para los reComputer R1000 y R1100. Cada respuesta indica la variante de producto y el modo de firmware al que se aplica, junto con la fecha en que se verificó por última vez frente a las fuentes oficiales actuales.

## Antes de comenzar

- Confirma el modelo exacto: reComputer R1000 o reComputer R1100, y la variante de Raspberry Pi CM4 instalada.
- Comprueba la versión actual de la imagen de Raspberry Pi OS antes de aplicar pasos específicos de versión.
- Las respuestas de esta página se verificaron por última vez el 2026-11-10; vuelve a comprobar las fuentes oficiales enlazadas si la estás leyendo más tarde.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Sistema operativo y firmware {#os-and-firmware}

### ¿Cómo desactivo la función de USB Mass Storage / Bootloader del reComputer R1024-10 sin privilegios de root? {#r1024-10-disable-usb-mass-storage}

**Aplica a:** serie reComputer R10xx (reComputer R1024-10 como ejemplo), para casos en los que la función de USB Mass Storage / Bootloader deba desactivarse sin privilegios de root

**Última verificación:** 2026-11-01

Los productos estándar reComputer R10xx (incluido el R1024-10) no proporcionan una forma de desactivar la función de USB Mass Storage / Bootloader sin privilegios de root; la función no está soportada en la configuración estándar de firmware. Técnicamente se puede hacer modificando el controlador USB de Linux, pero eso requiere solicitar el servicio de personalización de sistema ODM. Ponte en contacto con el equipo de ventas de Seeed para conocer las opciones de personalización.

**Referencias:**

- [Introducción a reComputer R1000](https://wiki.seeedstudio.com/es/recomputer_r/)

### ¿Cómo instalo Raspberry Pi OS Lite 64-bit Bookworm en el reComputer R1124-10? {#r1124-10-raspberry-pi-os-lite}

**Aplica a:** serie reComputer R11xx (reComputer R1124-10 como ejemplo), para casos que necesitan Raspberry Pi OS Lite 64-bit Bookworm

**Última verificación:** 2026-11-01

Actualmente no existe una imagen oficial adaptada a la versión Raspberry Pi OS Lite. Si quieres usar una imagen proporcionada oficialmente, sigue el flujo de instalación "reComputer R1100 Flash OS" en el Wiki de Seeed Studio: https://wiki.seeedstudio.com/es/recomputer_r1100_flash_os/ . Si aún necesitas Raspberry Pi OS Lite, puedes grabarla directamente con Raspberry Pi Imager, pero debido a que no hay archivo de device tree, es posible que algunas funciones no funcionen correctamente.

**Referencias:**

- [reComputer R1100 Flash OS](https://wiki.seeedstudio.com/es/recomputer_r1100_flash_os/)

## Conectividad y redes {#connectivity-and-networking}

### ¿El reComputer R1125-10 admite actualmente el módulo Zigbee mini-PCIe? ¿Todavía se puede comprar y desplegar? {#r1125-10-mini-pcie-zigbee}

**Aplica a:** serie reComputer R11xx (reComputer R1125-10 como ejemplo), para despliegues que necesitan un módulo Zigbee en la interfaz mini-PCIe

**Última verificación:** 2026-11-01

El reComputer R1125-10 no admite actualmente el módulo Zigbee mini-PCIe. Ese módulo sigue descatalogado y no se espera que vuelva a estar en stock, por lo que no se puede comprar y desplegar directamente como una configuración soportada del dispositivo. Si el proyecto no tiene que usar la interfaz mini-PCIe, puedes considerar el Zigbee 3.0 USB Dongle Plus (ZBDongle-E), que actualmente está disponible para su compra, y primero confirmar que sus funciones cumplen los requisitos para conectar dispositivos Zigbee.

**Requisitos previos:**

- Confirmar si el proyecto tiene que ocupar la interfaz mini-PCIe

**Referencias:**

- [Sonoff Zigbee 3.0 USB Dongle Plus（ZBDongle-E）](https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html)
- [Introducción a reComputer R1100](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/)

### ¿Se puede sustituir directamente el reComputer ER1124-10 por un módulo Laird/Ezurio BL654 (Nordic nRF52840) y conectarlo a una antena externa? {#er1124-10-laird-bl654-replacement}

**Aplica a:** serie reComputer R11xx (reComputer ER1124-10 como ejemplo), para casos que necesitan sustituir el Bluetooth integrado por un Laird/Ezurio BL654 o usar una antena externa

**Última verificación:** 2026-11-01

El Laird/Ezurio BL654 no puede sustituir directamente el Bluetooth integrado del reComputer ER1124-10. La Raspberry Pi CM4 utilizada en esa placa ya integra Bluetooth de forma nativa, y el BL654 no puede hacerse cargo del Bluetooth integrado de la CM4. Si el BL654 y una antena externa son obligatorios, el BL654 solo puede diseñarse como un módulo externo independiente. Actualmente no existe un módulo externo BL654 ni una solución de compatibilidad de antena externa que Seeed haya verificado para el ER1124-10, por lo que esto no puede tratarse como una opción de actualización que Seeed proporcione o garantice que sea compatible. Antes de implementarlo, tienes que confirmar las interfaces de placa disponibles, el método de conexión del módulo, el soporte de controladores, la alimentación y el diseño de la antena, y completar la verificación completa de comunicación y RF.

**Referencias:**

- [Introducción a reComputer R1100](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/)

### ¿Se puede usar directamente el reComputer R1124-10 (SKU 113991374) como pasarela de red Zigbee? ¿Es obligatorio un módulo Zigbee independiente y puede el BLE integrado sustituirlo? {#r1124-10-zigbee-gateway}

**Aplica a:** serie reComputer R11xx (reComputer R1124-10, SKU 113991374, como ejemplo), para casos que necesitan que el dispositivo se use como pasarela de red Zigbee

**Última verificación:** 2026-11-01

No, no se puede usar directamente. La interfaz Mini PCIe del actual reComputer R1124-10 no admite Zigbee, y el BLE integrado no puede actuar como radio Zigbee. Aunque BLE y Zigbee operan ambos en la banda de 2,4 GHz, utilizan protocolos inalámbricos diferentes y necesitan hardware y software incompatibles, por lo que el BLE integrado no puede sustituir a un módulo Zigbee dedicado. Para usar el dispositivo como pasarela Zigbee, es necesario instalar un coordinador o módulo Zigbee dedicado compatible y conectarlo a través de una de las interfaces de host que el dispositivo admite.

**Referencias:**

- [Introducción a reComputer R1100](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/)

### ¿Puede el reComputer R1124-10 usar al mismo tiempo el módulo Quectel EC25-EUX 4G LTE Cat 4 y el módulo WM1302 SPI EU868 LoRaWAN? {#r1124-10-ec25-wm1302-concurrent}

**Aplica a:** serie reComputer R11xx (reComputer R1124-10 como ejemplo), para casos que necesitan un módulo 4G LTE Cat 4 y un módulo SPI LoRaWAN conectados al mismo tiempo

**Última verificación:** 2026-11-01

Sí, el reComputer R1124-10 admite que el EC25-EUX y el WM1302 SPI funcionen al mismo tiempo: instala el EC25-EUX en la ranura Mini-PCIe 1 y conéctalo a través del puerto 4 del USB HUB2; instala el WM1302 SPI en la ranura Mini-PCIe 2 y conéctalo a través de SPI0 / CE1.

**Referencias:**

- [Configurar sistema de reComputer R1100](https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/)
- [Introducción a reComputer R1100](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/)

### ¿Cuál es el número de parte y la forma de comprar el conector de 3 pines del reComputer R1024 / R1025? {#r1024-r1025-3pin-connector}

**Aplica a:** serie reComputer R10xx (reComputer R1024 / R1025 como ejemplo), para proyectos que necesitan seleccionar un conector enchufable para un cable de 3 pines

**Última verificación:** 2026-11-01

El reComputer-R1024 / R1025 se envía con tres conectores de 3 pines que los clientes pueden usar en sus propios diseños. El conector no está listado en Bazaar, por lo que no se puede comprar por separado.

**Referencias:**

- [Introducción a reComputer R1000](https://wiki.seeedstudio.com/es/recomputer_r/)

## Hardware e interfaces {#hardware-and-interfaces}

### ¿Existe un módulo TPM oficialmente soportado para el módulo reComputer R1035 y cómo lo instalo? {#r1035-tpm-module}

**Aplica a:** serie reComputer R10xx (reComputer R1035 como ejemplo), para casos que necesitan añadir un chip de seguridad TPM 2.0 al dispositivo

**Última verificación:** 2026-11-01

Sí, pero el módulo no se vende como un elemento independiente; necesitas cumplir el requisito mediante personalización.

**Referencias:**

- [Introducción a reComputer R1000](https://wiki.seeedstudio.com/es/recomputer_r/)

### ¿Hay espacio en el R1025-10 para instalar al mismo tiempo el módulo Seeed PoE y el Seeed SuperCAP UPS Module (LTC3350)? {#r1025-10-poe-ups-fit}

**Aplica a:** serie reComputer R10xx (reComputer R1025-10 como ejemplo), para casos que necesitan el módulo Seeed PoE y el Seeed SuperCAP UPS Module (LTC3350) instalados al mismo tiempo

**Última verificación:** 2026-11-01

Sí, el R1025-10 puede alojar al mismo tiempo el módulo Seeed PoE y el Seeed SuperCAP UPS Module (LTC3350). Para la instalación exacta, consulta la sección "assemble-ups-and-poe-module" de la guía de montaje de reComputer R1000: https://wiki.seeedstudio.com/es/recomputer_r1000_assembly_guide/ .

**Referencias:**

- [Guía de montaje de reComputer R1000 — Montar módulo UPS y PoE](https://wiki.seeedstudio.com/es/recomputer_r1000_assembly_guide/)

### ¿Puede el reComputer R1100 alimentar directamente sensores externos de 24 V y 12 V y, si se tienen que usar 220 V, 24 V y 12 V al mismo tiempo, cómo se debe elegir la fuente de alimentación? {#r1100-external-sensor-power}

**Aplica a:** serie reComputer R11xx (reComputer R1100 como ejemplo), para aplicaciones que alimentan sensores externos de 24 V / 12 V o usan 220 V, 24 V y 12 V al mismo tiempo

**Última verificación:** 2026-11-01

La serie reComputer R1100 no integra una salida de alimentación dedicada para sensores externos de 12 V o 24 V, por lo que esos sensores necesitan una fuente de alimentación independiente. Si la aplicación necesita 220 V, 24 V y 12 V al mismo tiempo, puedes elegir una combinación de fuentes independientes o una fuente de alimentación multi-salida adecuada según la carga real, pero antes de seleccionarla tienes que confirmar la tensión nominal, la corriente o potencia de los sensores, su polaridad, los requisitos de cableado, la carga de arranque, el propósito exacto de los 220 V y los requisitos de seguridad eléctrica in situ. Los sensores de 12 V y 24 V normalmente usan una alimentación de CC, por lo que se debe seleccionar una fuente de alimentación industrial que coincida con esas especificaciones de salida, añadiendo un convertidor CC/CC cuando sea necesario; no se debe emparejar un transformador con los sensores solo en función del valor de tensión.

**Referencias:**

- [Primeros pasos con reComputer R1100](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

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

</div>
