---
title: Seeed Studio XIAO nRF54L15 Matter
description: ''
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /xiao_nrf54l15_sense_matter
keywords:
  - XIAO
  - nRF54L15
  - Matter
last_update:
  date: 9/22/2025
  author: Jason
sidebar_position: 0
createdAt: '2025-09-25'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_matter/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';


## Introducción

El nRF54L15 de Nordic Semiconductor es un SoC inalámbrico de ultra bajo consumo de nueva generación diseñado para el Internet de las Cosas. Es compatible con múltiples protocolos, incluidos Matter, Thread, Zigbee, Bluetooth LE y NFC, lo que permite a los desarrolladores crear dispositivos de hogar inteligente interoperables y preparados para el futuro.

Con el auge de Matter como un estándar de conectividad unificado promovido por la Connectivity Standards Alliance (CSA), el nRF54L15 proporciona una plataforma de desarrollo sólida para explorar y validar aplicaciones Matter. Su alto rendimiento, bajo consumo de energía y radio multiprotocolo integrada lo hacen muy adecuado tanto para productos de hogar inteligente de consumo como para dispositivos IoT industriales.

En esta documentación, recorreremos los ejemplos de aplicaciones Matter disponibles en el SDK de Nordic para el nRF54L15. Estos ejemplos demuestran funciones clave como la incorporación del dispositivo, la comunicación segura y la interacción con ecosistemas comunes como Apple HomeKit, Google Home y Amazon Alexa.


## Requisitos previos

Para comenzar a desarrollar una aplicación Matter en la XIAO nRF54L15, asegúrate de que los siguientes componentes de hardware y software estén preparados y listos.

### Hardware

- Placa Seeed Studio XIAO nRF54L15.
- Matter Hub compatible (por ejemplo, [Amazon - Echo Dot](https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?th=1)) para conectarse a la red Matter.
- Matter Controller (por ejemplo, Amazon Alexa App) para gestionar e interactuar con tu dispositivo compatible con Matter

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

:::tip
Antes de ejecutar el ejemplo, asegúrate de que la XIAO nRF54L15 haya sido configurada en el nRF Connect SDK. Si aún no lo has hecho, consulta esta guía de [Wiki](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/).
:::

## Inicio rápido con el ejemplo Matter

### Crear una rutina Matter
En la extensión nRF Connect para VSCode, selecciona: Create New Application → Copy Example → introduce “matter” → selecciona Matter Thermostat

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter_54l15.png" style={{width:900, height:'auto'}}/></div>


Cuando se programa, el ejemplo inicia automáticamente la publicidad Bluetooth® LE y prepara el dispositivo Matter para su puesta en servicio en una red Thread habilitada para Matter. El ejemplo utiliza un LED para mostrar el estado de la conexión.

El ejemplo puede funcionar en uno de los siguientes modos:

- Modo de sensor de temperatura simulado: en este modo, el ejemplo de termostato genera mediciones de temperatura simuladas y las imprime en el terminal. Este es el modo predeterminado, en el que el ejemplo proporciona valores de temperatura simulados.**（Here we default to using）**

- Modo de sensor de temperatura real: en este modo, el ejemplo de termostato se vincula a un sensor de temperatura Matter remoto, que proporciona mediciones de temperatura reales. Este modo requiere la integración de un sensor externo.



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
:::tip
- Ten en cuenta que tu versión del SDK debe ser 3.0.2. Las versiones inferiores pueden causar errores.

- Actualmente, solo se admiten dos rutinas (Matter Thermostat y Matter Light Bulb). Se irán añadiendo rutinas adicionales gradualmente en el futuro.
:::

### Configurar la placa de desarrollo

Crea los siguientes dos archivos en el directorio de la placa, nombrándolos respectivamente

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

Navega al directorio `sysbuild/mcuboot/boards` y añade los siguientes dos archivos:

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

###  Habilitar partición y DFU
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>


### Configuración de Sysbuild

- [sysbuild.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/sysbuild.conf)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/00000.png" style={{width:600, height:'auto'}}/></div>


### Compilar el proyecto
- Abre la ventana Add Build Configuration.
- En el campo SDK, selecciona la versión requerida (por ejemplo, nRF Connect SDK v3.0.2).
- En el campo Toolchain, selecciona la versión correspondiente.
- Para Board target:`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### Programa de grabación West Flash
- Abre el terminal nRF
- Solo tienes que introducir el comando west flash. Para programar tu dispositivo, simplemente introduce el comando west flash. La ruta resaltada en rojo indica la ubicación de tu archivo .elf compilado. Puedes usar esta misma ruta para encontrar el archivo .hex correspondiente, que es adecuado para programar con un depurador J-Link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Añadir dispositivo Matter
Después de compilar y grabar el firmware en la XIAO nRF54L15, puedes usar la herramienta nRF Serial Terminal para ver los registros de depuración y obtener el código QR de puesta en servicio del dispositivo.

**Paso 1.** Abre Manager Toolchains y lanza las Terminal Tools.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**Paso 2.** En la barra lateral de herramientas, selecciona nRF Serial Terminal para acceder al puerto serie.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**Paso 3.** En el menú emergente, elige el puerto serie que corresponde a tu XIAO nRF54L15.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Una vez que el terminal esté abierto, verás un enlace de código QR de puesta en servicio impreso en el registro. Copia este enlace y ábrelo en tu navegador para generar el código QR del dispositivo Matter.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**Paso 5.** Escanea este código QR con una plataforma compatible con Matter para añadir tu dispositivo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>


## Configuración del Matter Hub

### Descargar Alexa App
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/app.png" style={{width:900, height:'auto'}}/></div>

### Añadir un dispositivo Matter en la Alexa App

- Ir a Home: abre la Alexa App y toca el botón “+” en la esquina superior derecha.
- Add Device: en el menú, selecciona “Device”.
- Elegir tipo de dispositivo: en la lista de dispositivos, selecciona “Matter”.
- Escanear código QR: en la pantalla de configuración de Matter, toca “Scan QR Code” y escanea el código QR de tu dispositivo (o elige introducir el código numérico en su lugar).
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter7.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter9.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

- Renombrar dispositivo: Después de la configuración, asigna un nombre a tu dispositivo, como “Thermostat”, y luego toca Update Name.
- El dispositivo aparece en la lista: Una vez añadido, verás el nuevo Thermostat en la lista Devices.
- Controlar dispositivo: Abre la página de control de Thermostat para ajustar la temperatura (por ejemplo, Cool a 79°F, Heat a 68°F) y establecer el modo (por ejemplo, Auto).

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/15.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>


## Descripción general del directorio del proyecto

### default_zap/
- thermostat.zap
  - Archivo de configuración ZAP que define la configuración de clústeres y atributos para la aplicación de termostato Matter.
- zap-generated/
  - Archivos fuente autogenerados por la herramienta ZAP basados en la configuración .zap.


### temperature_measurement/

- `sensor.cpp` / `sensor.h`
  - Abstracción de controlador de bajo nivel para el sensor de temperatura.
  - Gestiona la lectura de valores de temperatura en bruto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code1.png" style={{width:900, height:'auto'}}/></div>


- `temp_sensor_manager.cpp` / `temp_sensor_manager.h`
  - Gestiona la recopilación de datos del sensor.
  - Proporciona valores de temperatura procesados para componentes de nivel superior.
  - temperature_manager.cpp / temperature_manager.h
  - Supervisa la lógica de control de temperatura.
  - Interactúa con los atributos Matter (por ejemplo, temperatura actual, puntos de consigna).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code3.png" style={{width:900, height:'auto'}}/></div>


### Capa de aplicación

- `app_task.cpp` / `app_task.h`
  - Define el bucle principal de tareas de la aplicación.
  - Coordina la inicialización, el manejo de eventos y la comunicación con la pila Matter.
- main.cpp
  - Punto de entrada de la aplicación.
  - Inicializa el hardware, la pila Matter y arranca la tarea de la aplicación.
  - chip_project_config.h
  - Configuración específica del proyecto para la pila Matter.
  - Incluye definiciones de clústeres, tamaño de almacenamiento de atributos y conmutadores de funciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code2.png" style={{width:900, height:'auto'}}/></div>

### Integración con Matter

- `thermostat.matter`
  - Archivo de definición de dispositivo Matter que describe clústeres, atributos y endpoints para el termostato.
- `zcl_callbacks.cpp`
  - Implementa funciones de devolución de llamada para Zigbee Cluster Library (ZCL).
  - Gestiona cambios de atributos, comandos (por ejemplo, actualización de punto de consigna) e informes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code5.png" style={{width:900, height:'auto'}}/></div>

## Referencias y recursos

Si eres nuevo en Matter, los siguientes recursos proporcionan conocimientos fundamentales y soporte de desarrollo para trabajar dentro del ecosistema Matter:

- **[Quick-Start Guides](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Un punto de partida ideal para aprender los fundamentos de Matter, que cubre conceptos esenciales y componentes del ecosistema.
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**: Una guía completa a través del proceso de desarrollo con Matter, que incluye las herramientas necesarias, recursos y buenas prácticas para una implementación eficaz.
- **[Matter Specifications](https://csa-iot.org/developer-resource/specifications-download-request/)**: Especificaciones técnicas para el protocolo Matter y sus componentes. Este es el recurso principal para comprender las capacidades del protocolo y los detalles de su funcionamiento.
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: Una explicación detallada del modelo de datos del dispositivo, que estandariza cómo se representan las funciones y capacidades del dispositivo en el ecosistema Matter.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
