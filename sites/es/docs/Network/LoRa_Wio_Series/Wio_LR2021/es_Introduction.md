---
description: La introducción de Wio-LR2021
title: Introducción a Wio-LR2021
keywords:
  - Wio-LR2021
  - LoRa
  - LR2021
  - Semtech
  - Sub-GHz
  - 2.4GHz
  - LoRaWAN
  - BLE 5.0
  - Transceptor
  - Wio
image: https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg
slug: /wio_lr2021_introduction
sku: 100058045
sidebar_position: 1
last_update:
  date: 06/03/2026
  author: David Du
createdAt: '2026-06-03'
updatedAt: '2026-06-03'
url: https://wiki.seeedstudio.com/es/wio_lr2021_introduction/
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Wio-LR2021-Wireless-module-868-915MHz-Tape-reel-p-6831.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## 1. Introducción
El **Módulo Inalámbrico Wio-LR2021** es un módulo transceptor inalámbrico multibanda de próxima generación, impulsado por el chipset LR2021 de cuarta generación de Semtech. Integra el funcionamiento en **Sub-GHz (863-928MHz)** y **2.4GHz ISM** en un único subsistema compacto, eliminando la necesidad de múltiples diseños de radio a través de regiones y límites de aplicación.

Diseñado para desarrolladores de IoT, proveedores de soluciones LPWAN, ingenieros de rastreo de activos, integradores de sistemas de agricultura inteligente y gestores de productos de IoT industrial, el Wio-LR2021 cierra la brecha entre la comunicación Sub-GHz de ultra largo alcance y los enlaces de datos de alta velocidad a 2.4GHz, permitiendo a los desarrolladores crear productos desplegables globalmente sin mantener múltiples variantes de hardware RF.

## 2. Características

### 2.1. Arquitectura RF Multibanda Unificada

El Wio-LR2021 integra múltiples bandas RF distintas en un único subsistema compacto. La cobertura Sub-GHz (863-928MHz) garantiza el cumplimiento de las bandas sin licencia regionales en todo el mundo, mientras que el funcionamiento en 2.4GHz ISM proporciona mayores tasas de datos y armonización global.

:::info Detalles técnicos
El chipset Semtech LR2021 emplea una arquitectura de red de adaptación **Switchless Direct-Tie** que elimina la necesidad de interruptores RF externos. La salida del PA y la entrada del LNA comparten el mismo nodo RF en el puerto Sub-GHz, reduciendo el conteo de la BOM y la complejidad de la placa. Al transmitir por encima de +6dBm, se requiere protección adicional de front-end; la entrada máxima absoluta es de +10dBm.
:::

:::caution
La interfaz RF del módulo tiene una potencia de entrada máxima de **+10dBm**; superarla puede causar daños irreversibles. Recomendamos añadir protección adicional al front-end RF cuando la potencia de entrada supere **+6dBm**. Por favor, tenga especial cuidado al usar el módulo cerca de transmisores de alta potencia.
:::

### 2.2. Diseño de Ultra Bajo Consumo

Con una corriente en modo de sueño profundo de solo **583nA** y una corriente en reposo de **960uA**, el Wio-LR2021 está optimizado para aplicaciones alimentadas por batería y de recolección de energía. 

:::info Consejos de optimización de energía
Para maximizar la vida útil de la batería, utilice el modo Warm Sleep, que conserva la configuración de los DIO a lo largo de los ciclos de activación.
:::

| Modo | Corriente | Condiciones |
|------|---------|------------|
| TX (868MHz, +22dBm) | 116.0 mA | Potencia máxima Sub-GHz |
| TX (915MHz, +22dBm) | 119.4 mA | Potencia máxima Sub-GHz |
| TX (2.4GHz, +12dBm) | 28.4 mA | Potencia máxima a 2.4GHz |
| RX (Sub-GHz, LoRa SF12/125kHz) | 8.19 mA | Modo de sensibilidad máxima |
| RX (2.4GHz, LoRa SF12/125kHz) | 8.59 mA | Modo de sensibilidad máxima |
| Sueño profundo | 583 nA | Todas las funciones apagadas, configuración conservada |
| Inactivo / Espera | 960 uA | Oscilador RC en funcionamiento, retención de registros |

### 2.3. Modulación Avanzada y Compatibilidad con Protocolos

El módulo admite una amplia gama de esquemas de modulación: **LoRa** para LPWAN de largo alcance, **FLRC** (Fast Long Range Communication) para enlaces de alta velocidad de hasta 2.6Mbps, **(G)FSK** y **(G)MSK** para compatibilidad heredada, **4-FSK** y **O-QPSK** para protocolos estandarizados, y LR-FHSS para conexiones robustas de IoT satelital.

:::info Agilidad de protocolo
La compatibilidad nativa por hardware permite la migración definida por software entre LoRaWAN, BLE 5.0, IEEE 802.15.4 (Thread/Zigbee), Wi-SUN, Wireless M-BUS y Amazon Sidewalk sin cambios de hardware. Esto prepara los diseños para el futuro frente a estándares y requisitos regionales en evolución.
:::

### 2.4. FLRC de Alta Velocidad para Transmisión Multimedia

La modulación FLRC permite tasas de datos de hasta 2.6Mbps, superando ampliamente las capacidades tradicionales de LoRa. Esto hace que el Wio-LR2021 sea adecuado para aplicaciones que requieren vista previa de video, transmisión de audio o actualizaciones masivas de firmware a través de enlaces inalámbricos que aún se benefician de las características de alcance y robustez de LoRa.

### 2.5. Sensibilidad de Recepción de Clase Mundial

El Wio-LR2021 alcanza una sensibilidad de **-141.1dBm** en Sub-GHz SF12/125kHz de ancho de banda, lo que permite presupuestos de enlace superiores a 160dBm en condiciones favorables. A 2.4GHz, la sensibilidad alcanza **-133dBm** en SF12/400kHz, superando a la mayoría de las soluciones de doble banda competidoras.

### 2.6. Encapsulado SMT Compacto con Precertificación

Con unas dimensiones de solo 17.07x10.42x2.8mm en un encapsulado SMT de 22 pines, el Wio-LR2021 minimiza el espacio en la placa mientras maximiza la capacidad. El estado de precertificación FCC y CE reduce el tiempo de salida al mercado al simplificar el proceso de certificación del dispositivo anfitrión.

:::note MCU anfitrión requerido
El Wio-LR2021 es un módulo transceptor RF puro sin procesador de aplicación integrado. Requiere un MCU anfitrión externo (como STM32, nRF52, ESP32 o RP2040) para el control mediante interfaz SPI.
:::

## 3. Descripción general del hardware

### 3.1. Diagrama esquemático

<td><div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/Wio-LR2021-pinout-5-mask.jpg" style={{width:950, height:'auto'}}/></div></td>

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/WIO-LR2021_Pinout-3.png" style={{width:900, height:'auto'}}/></div></td>

### 3.2. Distribución de pines
| Número de pin| Nombre de pin | Tipo | Descripción |
|-----|----------|------|-------------|
|1| VCC_IN | Entrada de alimentación | Entrada de alimentación de 1.8V - 3.7V |
|2| DIO5 | E/S digital | IRQ, control de interruptor RF, salida de reloj, resistencia pull-up débil interna a VCC_IN en el reinicio |
|3| RESET | Entrada digital | **Activo en LOW** |
|4| SPI_MISO | Salida digital | Lógica de 3.3V, alta impedancia cuando NSS está desactivado (HIGH) |
|5| SPI_MOSI | Entrada digital | Lógica de 3.3V, alta impedancia cuando NSS está desactivado (HIGH) |
|6| SPI_SCK | Entrada digital | Máx. 16MHz, Modo 0 (CPOL=0, CPHA=0). |
|7| SPI_NSS | Entrada digital | **Activo en LOW** |
|8| BUSY | Salida digital | Salida de drenador abierto, se requiere pull-up externo en la PCB del host. LOW = listo; HIGH = procesando. Se lleva automáticamente a HIGH en el flanco de bajada de NSS. |
|9| GND | Tierra | Referencia de tierra común |
|10| SubG_RF | RF | Distribución de pines RF Sub-GHz |
|11| GND | Tierra | Referencia de tierra común |
|12| GND | Tierra | Referencia de tierra común |
|13| 2.4G_RF | RF | Distribución de pines RF de 2.4GHz |
|14| GND | Tierra | Referencia de tierra común |
|15| GND | Tierra | Referencia de tierra común |
|16| DIO11 | E/S digital | Alta impedancia en el reinicio |
|17| DIO10 | E/S digital | Alta impedancia en el reinicio |
|18| DIO9 | E/S digital | Alta impedancia en el reinicio |
|19| DIO8 | E/S digital | Alta impedancia en el reinicio |
|20| GND | Tierra | Referencia de tierra común |
|21| DIO6 | E/S digital | Resistencia pull-up débil interna a VCC_IN en el reinicio |
|22| DIO7 | E/S digital | Alta impedancia en el reinicio |

<br />

:::tip Configuración de DIO
Todas las funciones DIO deben configurarse mediante el comando SPI `SetDioFunction` mientras se está en modo STDBY_RC. La configuración se conserva a lo largo de los ciclos de sueño Warm. Planifique el firmware de su host para configurar los DIO inmediatamente después del reinicio del módulo.
:::



## Recursos

- **[PDF]** [Hoja de datos del módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021%20Module%20Datasheet.pdf)

- **[STEP]** [Modelo 3D del módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_3D%20Model.step)

- **[DXF]** [Dibujo mecánico del módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/Wio-LR2021_Mechanical%20Drawing.dxf)

- **[ZIP]** [Librería KiCad del módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/kicad-library.zip)

- **[ZIP]** [Librería Allegro del módulo Wio-LR2021](https://files.seeedstudio.com/wiki/Wio-LR2021/res/allegro-library.zip)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerle diferentes tipos de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>