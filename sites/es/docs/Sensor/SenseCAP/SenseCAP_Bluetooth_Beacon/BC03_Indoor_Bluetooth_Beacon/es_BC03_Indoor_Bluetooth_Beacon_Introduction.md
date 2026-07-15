---
title: Introducción
description: SenseCAP_Bluetooth_Beacon_for_Tracker_Introduction
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - Posicionamiento
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_introduction
sku: 100085893
last_update:
  date: 4/2/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/es/bluetooth_beacon03_for_tracker_introduction/
---
# Introducción a la baliza Bluetooth de interior BC03

SenseCAP BC03 Indoor Bluetooth Beacon es un pequeño dispositivo inalámbrico que transmite señales Bluetooth a intervalos regulares. Estas señales pueden ser detectadas por dispositivos con Bluetooth, como [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), [**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html), permitiéndoles determinar su proximidad a la baliza, construyendo una solución basada en la ubicación para posicionamiento en interiores, seguimiento de activos y otras aplicaciones, lo que permite la detección de proximidad y un posicionamiento en interiores a nivel de metros.


![BC03](https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>
<br />

:::tip Comparación de versiones
![Comparación de versiones](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

## Sistema de posicionamiento Bluetooth en interiores

El GPS funciona bien en exteriores, pero su rendimiento es limitado en interiores. Al desplegar balizas Bluetooth BC03 en entornos interiores, los rastreadores SenseCAP pueden escanear las señales de la baliza y estimar distancias basadas en los valores RSSI. Combinado con algoritmos de posicionamiento, esto permite **una precisión de posicionamiento en interiores a nivel de metros (aproximadamente 2–3 metros)**.

Los escenarios de aplicación típicos incluyen:

* Seguimiento de activos
* Posicionamiento de personal
* Análisis de rutas
* Navegación en interiores

La solución se puede integrar en plataformas en la nube, aplicaciones móviles y mini programas.

![Posicionamiento en interiores](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

Proporcionamos un sistema de posicionamiento Bluetooth en interiores de código abierto diseñado para funcionar sin problemas con las balizas SenseCAP BLE y los rastreadores SenseCAP LoRaWAN.
Esta solución es completamente de código abierto y personalizable, lo que permite a los usuarios crear, modificar e integrar sus propios servicios backend basados en nuestro repositorio de GitHub.

![Sistema de posicionamiento en interiores](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
Consulta [Sistema de posicionamiento en interiores](https://wiki.seeedstudio.com/es/solutions/indoor-positioning-bluetooth-lorawan-tracker/) para más detalles.
:::

## Características
---

* **Bluetooth® LE 5.0**
* **Ultra bajo consumo de energía**: Batería reemplazable de Li/SOCl2, más de **5 años de vida útil de la batería** (0 dBm / 500 ms, configuración predeterminada)
* **Transmisión de larga distancia**: Hasta **130 m** en áreas abiertas
* **Instalación sencilla**：Saque la película aislante y se puede pegar e instalar, reduciendo los costos de construcción.
* **Protección UV**: Adecuado para lámparas de esterilización UV y escenarios similares, sin alterar la apariencia.
* **Configuración flexible**: Intervalo de publicidad y potencia de transmisión configurables
* **Alta compatibilidad**: Compatible con iOS 7.0+ y Android 4.3+
* **Soporte opcional de acelerómetro**: Huella de PCBA reservada para detección de movimiento o vibración

---
:::info
El BC03 tiene una antena BLE omnidireccional de alta ganancia, bajo consumo de energía e interacción con el usuario:

* **Capacidad mejorada de transmisión de baliza**
Se ha optimizado la estabilidad de publicidad BLE y la consistencia de RSSI, mejorando la precisión del posicionamiento en interiores y la robustez en entornos complejos.
* **Diseño de antena**
Excelente eficiencia de radiación y consistencia direccional, antena integrada, logrando así un mayor alcance de comunicación y una comunicación más estable sin un ajuste preciso de la dirección de instalación.
* **Mayor duración de la batería**
Diseño de bajo consumo aún más optimizado. Bajo la misma configuración (0 dBm / 500 ms), el BC03 logra un despliegue a gran escala y a largo plazo.
* **LED de estado añadido**
Un LED azul proporciona una retroalimentación intuitiva del estado del dispositivo durante el encendido y la operación, mostrando el estado de encendido y de actualización del dispositivo.
:::

## Especificaciones

### Especificaciones generales

| Elemento            | Descripción                |
| ------------------- | -------------------------- |
| Material            | ABS（Anti-UV）              |
| Color               | Blanco                     |
| Grado de protección IP | Ninguno                     |
| Dimensión(L\*W\*H)    | Φ50*20.5mm                 |
| Peso                | ~45 g (incluyendo batería) |
| Batería             | Batería Li/SOCl2, 2400 mAh|
| Chip                | Serie nRF52                |
| Versión Bluetooth   | BLE 5.0 (retrocompatible con BLE 4.1) |
| Protocolo Bluetooth | iBeacon                    |
| Sensores            | Acelerómetro (opcional)    |
| LED                 | 1 × LED azul               |
| App                 | SenseCraft APP             |
| Temperatura de trabajo | -20 ~ 60 °C                |
| Vida útil de la batería | > 5 años (0 dBm / 500 ms en la configuración predeterminada) |

### Parámetros de transmisión predeterminados

| Parámetro           | Valor predeterminado       |
| -------------------- | ------------------------------ |
| UUID                 | 5EEEDBCA-AC02-43B0-B0CF-C6EB07647825
 |
| Major                | Asignado automáticamente a partir de la dirección MAC del dispositivo (2 bytes inferiores) |
| Minor                | Asignado automáticamente a partir de la dirección MAC del dispositivo (2 bytes superiores) |
| Potencia medida      | -59 dBm              |
| Potencia de transmisión (Tx Power) | -40 ~ +4dBm (0dBm por defecto)   |
| Intervalo de publicidad | 20ms ~ 30s (500ms por defecto)  |
| Contraseña           | 12345678                       |
| Nombre del dispositivo | 03                             |

### Información de compatibilidad

| Sistema      | Dispositivos                                |
| ------------ | ----------------------------------------- |
| BLE          | BLE 4.1+                                  |
| iOS 7.0+     | iPhone 4S, iPhone 5/5C/5S, iPhone 6/6Plus/6S/6S Plus, iPhone 7/7Plus, iPad mini/mini2/4/Air/Pro, etc.      |
| Android 4.3+ | Samsung, XIAOMI, HUAWEI, ONEPLUS, vivo, OPPO, etc. |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>