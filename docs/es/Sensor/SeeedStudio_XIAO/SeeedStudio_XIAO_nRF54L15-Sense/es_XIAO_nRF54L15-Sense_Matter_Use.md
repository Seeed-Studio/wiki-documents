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

- Placa Seeed Studio XIAO nRF54L15.
- Hub Matter compatible (ej., [Amazon - Echo Dot](https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?th=1)) para conectar a la red Matter.
- Controlador Matter (ej., Amazon Alexa App) para gestionar e interactuar con su dispositivo habilitado para Matter

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

:::tip
Antes de ejecutar el ejemplo, asegúrese de que el XIAO nRF54L15 haya sido configurado en el nRF Connect SDK. Si no se ha completado, consulte esta guía [Wiki](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/).
:::

## Inicio Rápido con Ejemplo de Matter

### Crear una rutina Matter
En la extensión nRF Connect para VSCode, seleccione: Create New Application → Copy Example → Ingrese "matter" → Seleccione Matter Thermostat

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter_54l15.png" style={{width:900, height:'auto'}}/></div>


Cuando se programa, la muestra inicia automáticamente la publicidad Bluetooth® LE y prepara el dispositivo Matter para la puesta en servicio en una red Thread habilitada para Matter. La muestra usa un LED para mostrar el estado de la conexión.

La muestra puede operar en uno de los siguientes modos:

- Modo de sensor de temperatura simulado - En este modo, la muestra del termostato genera mediciones de temperatura simuladas y las imprime en el terminal. Este es el modo predeterminado, en el cual la muestra proporciona valores de temperatura simulados.**（Aquí usamos por defecto）**

- Modo de sensor de temperatura real - En este modo, la muestra del termostato está vinculada a un sensor de temperatura Matter remoto, que proporciona mediciones de temperatura reales. Este modo requiere integración de sensor externo.



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
:::tip
- Tenga en cuenta que su versión del SDK debe ser 3.0.2. Las versiones inferiores a esta pueden causar errores.

- Actualmente, solo se admiten dos rutinas (Matter Thermostat y Matter Light Bulb). Se agregarán gradualmente rutinas adicionales en el futuro.
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
- En el campo SDK, seleccione la versión requerida (ej., nRF Connect SDK v3.0.2).
- En el campo Toolchain, seleccione la versión correspondiente.
- Para Board target:`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### Programa de grabación West Flash
- Abra el terminal nRF
- Simplemente ingrese el comando west flash. Para grabar su dispositivo, simplemente ingrese el comando west flash. La ruta resaltada en rojo indica la ubicación de su archivo .elf compilado. Puede usar esta misma ruta para encontrar el archivo .hex correspondiente, que es adecuado para programar con un depurador J-Link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Agregar dispositivo Matter
Después de compilar y grabar el firmware en el XIAO nRF54L15, puede usar la herramienta nRF Serial Terminal para ver los registros de depuración y recuperar el código QR de puesta en servicio del dispositivo.

**Paso 1.** Abra Manager Toolchains y lance las Terminal Tools.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**Paso 2.** En la barra de herramientas lateral, seleccione nRF Serial Terminal para acceder al puerto serie.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**Paso 3.** Del menú emergente, elija el puerto serie que corresponde a su XIAO nRF54L15.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Una vez que el terminal esté abierto, verá un enlace de código QR de puesta en servicio impreso en el registro. Copie este enlace y ábralo en su navegador para generar el código QR del dispositivo Matter.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**Paso 5.** Escanee este código QR con una plataforma compatible con Matter para agregar su dispositivo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>


## Configuración del Hub Matter

### Descargar la App Alexa
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/app.png" style={{width:900, height:'auto'}}/></div>

### Agregar un Dispositivo Matter en la App Alexa

- Ir a Home：Abra la App Alexa y toque el botón "+" en la esquina superior derecha.
- Add Device：Del menú, seleccione "Device".
- Choose Device Type：En la lista de dispositivos, seleccione "Matter".
- Scan QR Code：En la pantalla de configuración de Matter, toque "Scan QR Code" y escanee el código QR en su dispositivo (o elija ingresar el código numérico en su lugar).
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter7.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter9.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

- Rename Device：Después de la configuración, asigne un nombre a su dispositivo, como "Thermostat", luego toque Update Name.
- Device Appears in List：Una vez agregado, verás el nuevo Termostato en la lista de Dispositivos.
- Control Device：Abre la página de control del Termostato para ajustar la temperatura (ej., Enfriar a 79°F, Calentar a 68°F) y configurar el modo (ej., Auto).

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/15.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>


## Descripción General del Directorio del Proyecto

### default_zap/
- thermostat.zap
  - Archivo de configuración ZAP que define la configuración de clúster y atributos para la aplicación de termostato Matter.
- zap-generated/
  - Archivos fuente generados automáticamente desde la herramienta ZAP basados en la configuración .zap.


### temperature_measurement/

- `sensor.cpp` / `sensor.h`
  - Abstracción de controlador de bajo nivel para el sensor de temperatura.
  - Maneja la lectura de valores de temperatura en bruto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code1.png" style={{width:900, height:'auto'}}/></div>


- `temp_sensor_manager.cpp` / `temp_sensor_manager.h`
  - Gestiona la recolección de datos del sensor.
  - Proporciona valores de temperatura procesados para componentes de nivel superior.
  - temperature_manager.cpp / temperature_manager.h
  - Supervisa la lógica de control de temperatura.
  - Interfaz con atributos Matter (ej., temperatura actual, puntos de ajuste).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code3.png" style={{width:900, height:'auto'}}/></div>


### Capa de Aplicación

- `app_task.cpp` / `app_task.h`
  - Define el bucle principal de la tarea de aplicación.
  - Coordina la inicialización, manejo de eventos y comunicación con la pila Matter.
- main.cpp
  - Punto de entrada de la aplicación.
  - Inicializa el hardware, la pila Matter y comienza la tarea de aplicación.
  - chip_project_config.h
  - Configuración específica del proyecto para la pila Matter.
  - Incluye definiciones de clúster, tamaño de almacenamiento de atributos y alternadores de características.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code2.png" style={{width:900, height:'auto'}}/></div>

### Integración Matter

- `thermostat.matter`
  - Archivo de definición de dispositivo Matter que describe clústeres, atributos y puntos finales para el termostato.
- `zcl_callbacks.cpp`
  - Implementa funciones de callback para la Biblioteca de Clúster Zigbee (ZCL).
  - Maneja cambios de atributos, comandos (ej., actualización de punto de ajuste) y reportes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code5.png" style={{width:900, height:'auto'}}/></div>

## Referencia y Recursos

Si eres nuevo en Matter, los siguientes recursos proporcionan conocimiento fundamental y soporte de desarrollo para trabajar dentro del ecosistema Matter:

- **[Quick-Start Guides](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**: Un punto de partida ideal para aprender los fundamentos de Matter, cubriendo conceptos esenciales y componentes del ecosistema.
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**: Una guía completa a través del proceso de desarrollo Matter, incluyendo herramientas necesarias, recursos y mejores prácticas para una implementación efectiva.
- **[Matter Specifications](https://csa-iot.org/developer-resource/specifications-download-request/)**: Especificaciones técnicas para el protocolo Matter y sus componentes. Este es el recurso principal para entender las capacidades del protocolo y detalles operacionales.
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**: Una explicación detallada del modelo de datos del dispositivo, que estandariza cómo las características y capacidades del dispositivo se representan en el ecosistema Matter.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
