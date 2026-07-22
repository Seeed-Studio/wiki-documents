---
description: Página preliminar de introducción para la carrier board reComputer Robotics J601 diseñada para módulos NVIDIA Jetson AGX Thor.
title: Introducción a reComputer Robotics J601
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robótica
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 04/24/2026
  author: Dayu
createdAt: '2026-04-24'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/es/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

# Introducción a reComputer Robotics J601

:::note
Esta página es un borrador preliminar para la próxima carrier board reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor. Las especificaciones, el soporte de software, los kits de accesorios y los detalles mecánicos aún están sujetos a cambios.
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

La reComputer Robotics J601 es una carrier board enfocada en robótica para módulos NVIDIA Jetson AGX Thor. Está pensada para cargas de trabajo de IA encarnada y control robótico de alto rendimiento que requieren redes de alta velocidad, E/S industriales, expansión de cámaras GMSL y entrada de CC de amplio rango en un factor de forma compacto de carrier board.

## Características preliminares

- Compatibilidad con el módulo **NVIDIA Jetson AGX Thor**
- Ranura **M.2 Key M** para SSD NVMe 2280
- Ranura **M.2 Key E** para módulo Wi‑Fi/Bluetooth
- Ranura **M.2 Key B** para módulo 5G y compatibilidad con **Nano SIM**
- Ethernet de alta velocidad con soporte previsto para **PTP** y **EtherCAT**
- E/S ricas para robótica, incluidas **CAN**, **RS-232/422/485**, **DI/DO**, **I2C**, **I2S**, **SPI** y **GPIO**
- **Expansión GMSL** para hasta **8 cámaras**
- Entrada de **19V a 48V CC** de amplio rango mediante **XT30**
- Plataforma de software objetivo: **JetPack 7**

## Especificaciones preliminares

La siguiente tabla mantiene intencionadamente solo las partes más claras de la definición de hardware actual y deja los elementos no definidos como TBD.

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td>NVIDIA Jetson AGX Thor x 1</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td>1x M.2 Key M para SSD M.2 NVMe 2280</td>
    </tr>
    <tr>
      <td>Red</td>
      <td>Definición de Ethernet en progreso; el plan preliminar incluye puertos RJ45 de alta velocidad con soporte PTP y EtherCAT</td>
    </tr>
    <tr>
      <td>Expansión inalámbrica</td>
      <td>1x M.2 Key E para Wi‑Fi/Bluetooth, 1x M.2 Key B para 5G, 1x Nano SIM</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>Hasta 4x USB 3.2 Tipo A (Host), 1x USB 2.0 Tipo C (UART de depuración / modo dispositivo), 1x USB 3.0 Tipo C para flasheo</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1x HDMI</td>
    </tr>
    <tr>
      <td>Refrigeración</td>
      <td>1x conector de ventilador de 4 pines (PWM de 12V); se prevé vender la carrier board y el ventilador por separado</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td>Expansión GMSL, hasta 8 cámaras</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>4x CAN mediante conectores JST</td>
    </tr>
    <tr>
      <td>Serie</td>
      <td>1x RS-232/422/485 (conector DB9), 1x RS-485 (conector JST)</td>
    </tr>
    <tr>
      <td>E/S digital</td>
      <td>4x DI y 4x DO mediante conectores de terminal JST</td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>1x I2S, 2x salidas de amplificador, 1x entrada de micrófono</td>
    </tr>
    <tr>
      <td>Expansión de baja velocidad</td>
      <td>1x I2C, 1x SPI, GPIO mediante JST/cabecera de pines</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC de 2 pines</td>
    </tr>
    <tr>
      <td>Botones</td>
      <td>Recovery y Reset</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>PWR, ACT y LED RGB definido por el usuario</td>
    </tr>
    <tr>
      <td>Entrada de alimentación</td>
      <td>XT30, 19V a 48V CC</td>
    </tr>
    <tr>
      <td>Corriente / Potencia</td>
      <td>Corriente máxima de 10A, definición de potencia del sistema de 160W</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td>-10°C a +60°C</td>
    </tr>
    <tr>
      <td>Humedad</td>
      <td>10% a 95% HR</td>
    </tr>
    <tr>
      <td>Certificación</td>
      <td>CE, FCC, RoHS, clase EMI objetivo: Clase A</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td>Tamaño objetivo de la carrier board dentro de 150 mm x 130 mm</td>
    </tr>
  </tbody>
</table>
</div>

## Definición de LED y botones

### Botones

| Botón | Pin | Señal | Tipo | Descripción |
| --- | --- | --- | --- | --- |
| RECOVERY | 240 | - | CMOS-5V | Se utiliza para la recuperación del sistema / flujo de configuración de bajo nivel |
| RESET | 239 | SYS_RESET* | Drenaje abierto, 1.8V | Tirar a nivel bajo para reiniciar el módulo; cuando la alimentación del módulo está lista, el nivel alto se puede usar como habilitación de alimentación de la carrier board |

### Indicadores LED

| LED | Color | Estado | Descripción |
| --- | --- | --- | --- |
| PWR | Verde | On | El dispositivo está conectado a la alimentación |
| PWR | Verde | Off | El dispositivo no está conectado a la alimentación |
| ACT | Verde | Flashing | Actividad del SSD |
| USER | R / G / B | TBD | Comportamiento definido por el usuario |

## Software

- Línea base de software prevista: **JetPack 7**
- Capacidad Ethernet prevista: **EtherCAT**
- Guía detallada de flasheo, paquete BSP y pasos de validación: **TBD**

## Adaptación de cámaras prevista

La lista de requisitos actual incluye los siguientes modelos de cámaras GMSL:

- Senyun `SG3S-ISX031C-GMSL2F`
- Senyun `SG2-AR0233C-5200-G2A`
- Senyun `SG2-IMX390C-5200-G2A`
- Senyun `SG8S-AR0820C-5300-G2A`
- Orbbec `335LG`

## Diseño térmico

Esta carrier board está pensada para su uso dentro de carcasas de robots humanoides, donde los clientes pueden diseñar su propia solución térmica. Seeed planea proporcionar una guía de diseño térmico para despliegues basados en AGX Thor.

Documento de referencia:

- `Jetson_Thor_Thermal_DG_TDG12271001_v1.0.pdf`

## Lista de empaque preliminar

### Accesorios

- Cable XT30 a DC, 200 mm x 1
- Arnés de cables sueltos JST, 100 mm x 10
- Cable USB Tipo C a Tipo A, 1 m x 1
- Tornillo para Key E x 1
- Tornillo para Key M x 1
- Tornillo para Key B x 1
- Tornillos para AGX Thor SOM x 4
- Espaciadores para soporte de la carrier board x 4
- Tornillos para espaciadores x 4
- Manual de usuario x 1

### Embalaje

- Caja para transporte aéreo
- Bandeja interior para la carrier board y los accesorios
- Manual de usuario en la parte superior con una capa adicional de espuma
- Estilo de embalaje similar al de la mini carrier board J501

## Recursos

- Diseño detallado de hardware: TBD
- Guía de flasheo: TBD
- Notas de la versión del BSP: TBD

## Soporte técnico

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
