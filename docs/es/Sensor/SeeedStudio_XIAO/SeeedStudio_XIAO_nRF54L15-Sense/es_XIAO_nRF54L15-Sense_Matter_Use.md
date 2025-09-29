---
title: Seeed Studio XIAO nRF54L15 Matter
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /es/xiao_nrf54l15_sense_matter
keywords:
  - XIAO
  - nRF54L15
  - Matter
last_update:
  date: 9/22/2025
  author: Jason
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';


## Introducción

El nRF54L15 de Nordic Semiconductor es un SoC inalámbrico de ultra bajo consumo de próxima generación diseñado para el Internet de las Cosas. Soporta múltiples protocolos, incluyendo Matter, Thread, Zigbee, Bluetooth LE y NFC, permitiendo a los desarrolladores construir dispositivos domésticos inteligentes interoperables y preparados para el futuro.

Con el auge de Matter como estándar de conectividad unificado promovido por la Connectivity Standards Alliance (CSA), el nRF54L15 proporciona una plataforma de desarrollo robusta para explorar y validar aplicaciones Matter. Su alto rendimiento, bajo consumo de energía y radio multiprotocolo integrado lo hacen muy adecuado tanto para productos domésticos inteligentes de consumo como para dispositivos IoT industriales.

En esta documentación, recorreremos las aplicaciones de ejemplo de Matter disponibles en el Nordic SDK para el nRF54L15. Estos ejemplos demuestran características clave como la incorporación de dispositivos, comunicación segura e interacción con ecosistemas comunes como Apple HomeKit, Google Home y Amazon Alexa.


## Prerrequisitos

Para comenzar a desarrollar una aplicación Matter en el XIAO nRF54L15, asegúrese de que los siguientes componentes de hardware y software estén preparados y listos.

### Hardware
- Placa Seeed Studio XIAO nRF54L15
- Hub Matter compatible (ej. Echo Dot)

### Software

:::tip
Antes de ejecutar el ejemplo, asegúrese de que el XIAO nRF54L15 haya sido configurado en el nRF Connect SDK. Si no se ha completado, consulte esta guía [Wiki](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/).
:::

## Inicio Rápido con Ejemplo Matter

### Crear una rutina Matter
En la extensión nRF Connect para VSCode, seleccione: Create New Application → Copy Example → Ingrese "matter" → Seleccione Matter Thermostat
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:900, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:900, height:'auto'}}/></div>
:::tip
- Tenga en cuenta que su versión del SDK debe ser 3.0.2. Las versiones inferiores pueden causar errores.

- Actualmente, solo se admiten dos rutinas. Se agregarán gradualmente rutinas adicionales en el futuro.
:::

### Configurar la placa de desarrollo

Cree los siguientes dos archivos bajo el directorio board, nombrándolos respectivamente

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

Navegue al directorio `sysbuild/mcuboot/boards` y agregue los siguientes dos archivos:

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

### Habilitar Partición y DFU
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>

### Construir Proyecto
- Abra la ventana Add Build Configuration.
- En el campo SDK, seleccione la versión requerida (ej. nRF Connect SDK v3.0.2).
- En el campo Toolchain, seleccione la versión correspondiente.
- Para Board target: `xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### West Flash programa de grabación
- Abra la terminal nRF
- Simplemente ingrese el comando west flash. Para flashear su dispositivo, simplemente ingrese el comando west flash. La ruta resaltada en rojo indica la ubicación de su archivo .elf compilado. Puede usar esta misma ruta para encontrar el archivo .hex correspondiente, que es adecuado para programar con un depurador J-Link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Agregar dispositivo Matter
Después de compilar y flashear el firmware al XIAO nRF54L15, puede usar la herramienta nRF Serial Terminal para ver los registros de depuración y recuperar el código QR de comisionado del dispositivo.

**Paso 1.** Abra Manager Toolchains y lance las Terminal Tools.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**Paso 2.** En la barra de herramientas lateral, seleccione nRF Serial Terminal para acceder al puerto serie.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**Paso 3.** Del menú emergente, elija el puerto serie que corresponde a su XIAO nRF54L15.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Una vez que la terminal esté abierta, verá un enlace de código QR de comisionado impreso en el registro. Copie este enlace y ábralo en su navegador para generar el código QR del dispositivo Matter.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**Paso 5.** Escanee este código QR con una plataforma compatible con Matter para agregar su dispositivo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>

## Referencia y Recursos

Si es nuevo en Matter, los siguientes recursos proporcionan conocimiento fundamental y soporte de desarrollo para trabajar dentro del ecosistema Matter:

- **[Guías de Inicio Rápido](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Un punto de partida ideal para aprender los fundamentos de Matter, cubriendo conceptos esenciales y componentes del ecosistema.
- **[Viaje del Desarrollador Matter](https://www.silabs.com/wireless/matter/matter-developer-journey)**: Una guía completa a través del proceso de desarrollo Matter, incluyendo herramientas necesarias, recursos y mejores prácticas para una implementación efectiva.
- **[Especificaciones Matter](https://csa-iot.org/developer-resource/specifications-download-request/)**: Especificaciones técnicas para el protocolo Matter y sus componentes. Este es el recurso principal para entender las capacidades del protocolo y detalles operacionales.
- **[El Modelo de Datos del Dispositivo - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: Una explicación detallada del modelo de datos del dispositivo, que estandariza cómo se representan las características y capacidades del dispositivo en el ecosistema Matter.
- **[Descripción General del Framework de Desarrollo Matter](/es/matter_development_framework)**: Una guía específicamente adaptada al Framework de Desarrollo Matter para el XIAO ESP32C6, ofreciendo un enfoque alternativo para el desarrollo de dispositivos Matter.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
