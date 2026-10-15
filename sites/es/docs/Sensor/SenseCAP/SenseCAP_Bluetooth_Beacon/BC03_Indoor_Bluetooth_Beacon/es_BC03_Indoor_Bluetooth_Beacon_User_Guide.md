---
title: Guía del usuario
description: SenseCAP_Bluetooth_Beacon_for_Tracker_User_Guide
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_user_guide
sku: 100085893
last_update:
  date: 3/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/es/bluetooth_beacon03_for_tracker_user_guide/
---

# Guía del usuario del beacon Bluetooth de interior BC03

![BC03](https://files.seeedstudio.com/wiki/BC03/6-BC03-Bluetooth-Beacon.jpg)

## Alimentación y LED

* **Encendido**: Simplemente tire de la lengüeta de la batería situada en la parte posterior. El BC03 se encenderá automáticamente y el indicador LED del dispositivo se iluminará.
* **Apagado**: El dispositivo está diseñado para funcionar de forma continua y no tiene un botón de encendido físico. Para apagar el dispositivo, la batería debe retirarse manualmente.

## Directrices de despliegue

* Altura de instalación recomendada: **2,5–3 m** sobre el suelo
* Espaciado recomendado: **5–10 m**, según los requisitos de precisión
* Patrones de despliegue:
  * Cuadrícula triangular para áreas abiertas
  * Despliegue de una o dos filas para pasillos

![Deployment Example 1](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png)

Notas adicionales:

* Evite la instalación en el techo en entornos con alturas de piso superiores a **4 m**
* Mantenga el beacon alejado de **superficies metálicas, pantallas de vidrio y esquinas**
* En entornos húmedos, tenga en cuenta los requisitos de protección ambiental

![Deployment Example 2](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png)

*Los ejemplos en rojo son incorrectos, los ejemplos en azul son correctos.*

:::note
Las directrices de despliegue son solo de referencia. El despliegue real debe optimizarse en función del algoritmo de posicionamiento y de los resultados de las pruebas in situ.
:::

## Instrucciones de instalación

### Instalación con adhesivo 3M

#### Condiciones de instalación

* Superficies adecuadas: cerámica, vidrio, resina epoxi, acrílico, ABS, PC, PVC rígido
* No se recomienda para superficies rugosas, húmedas o envejecidas (por ejemplo, cemento, placas de yeso)
* Temperatura de instalación recomendada: **20–40°C**

#### Pasos de instalación

1. Limpie y seque la superficie de montaje
2. Tire de la película aislante y ya se puede pegar e instalar
3. Presione firmemente durante 1–2 segundos, repita varias veces para garantizar la adhesión

:::note
Para entornos de baja temperatura o severos, se recomienda utilizar adhesivo de doble cara combinado con pegamento fuerte sin clavos.
:::

## Configuración

BC03 admite la configuración de parámetros y el aprovisionamiento por lotes mediante la **APP SenseCraft** y herramientas de producción.

- **Paso 1**: Descargue la APP `SenseCraft`

    - Para iOS, busque “SenseCraft” en la App Store y descárguela.
    - Para Android, busque “SenseCraft” en Google Store y descárguela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>


- **Paso 2**: Conectar el beacon y configurar

En la página de usuario, haga clic en `Device Bluetooth Configuration`, luego seleccione `Bluetooth Beacon` y elija `BC03`. Después entre en la página de lista de dispositivos.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration.png)

Según la dirección MAC del dispositivo, seleccione el beacon que se va a configurar.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration2.png)

Puede modificar el UUID, MAJOR, MINOR, potencia de emisión, intervalo de emisión y contraseña del dispositivo.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration3.png)

**Configuración por lotes**

Haga clic en Guardar y configuración por lotes, introduzca el número de dispositivos y la contraseña, y luego inicie la configuración por lotes. Una vez que la barra de progreso se complete, podrá descargar el archivo de beacons de configuración por lotes y revisar el estado de la configuración.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration4.png)


- **Paso 3**: Ver la curva RSSI

Elija el beacon y haga clic en RSSI Curve. Podrá ver la curva RSSI dinámica.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_view.png)

:::tip
Para una pequeña cantidad de dispositivos (≤ 7-8 unidades), se recomienda la configuración manual de cada unidad. Para despliegues más grandes, utilice la configuración por lotes, ya que ofrece mayor estabilidad al manejar múltiples dispositivos.
:::

## Sistema de posicionamiento Bluetooth en interiores

El GPS funciona bien en exteriores, pero los entornos interiores como oficinas, almacenes, hospitales o centros comerciales suelen bloquear las señales de los satélites. Para lograr un posicionamiento preciso en interiores, utilizamos beacons Bluetooth BC03 junto con rastreadores SenseCAP.

**Cómo funciona**

**1. Despliegue de beacons BC03**
Instale los beacons BC03 en posiciones fijas. Siga estrictamente las   
[Directrices de despliegue](#directrices-de-despliegue), de lo contrario, los resultados del despliegue pueden no ser satisfactorios. 
Cada beacon emite continuamente una señal Bluetooth.

**2. El rastreador escanea las señales de los beacons**
Los rastreadores SenseCAP LoRaWAN escanean las señales de los beacons cercanos y miden el RSSI.

**3. Estimación de distancia**
El sistema estima la distancia relativa entre el rastreador y cada beacon en función de los valores RSSI.

**4. Cálculo de la posición**
Mediante algoritmos de posicionamiento, el sistema calcula la ubicación del dispositivo.

Combinado con algoritmos de posicionamiento, esto permite **una precisión de posicionamiento en interiores a nivel de metros (aproximadamente 2–3 metros)**.

Los escenarios de aplicación típicos incluyen:

* **Seguimiento de activos:** Localizar equipos de alto valor dentro de almacenes o fábricas.
* **Posicionamiento de personal:** Garantizar la seguridad de los trabajadores en hospitales, minas o obras de construcción.
* **Análisis de rutas:** Analizar el flujo de personas y los mapas de calor en espacios comerciales u oficinas.
* **Navegación en interiores:** Proporcionar posicionamiento en tiempo real para visitantes en grandes recintos.

La solución puede integrarse en plataformas en la nube, aplicaciones móviles y mini programas.

![BC03](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

Proporcionamos un sistema de posicionamiento Bluetooth en interiores de código abierto diseñado para funcionar perfectamente con SenseCAP BLE Beacons y rastreadores SenseCAP LoRaWAN.

Esta solución es totalmente de código abierto y personalizable, lo que permite a los usuarios crear, modificar e integrar sus propios servicios backend basados en nuestro repositorio de GitHub.

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
Consulta [Indoor Positioning System](https://wiki.seeedstudio.com/es/solutions/indoor-positioning-bluetooth-lorawan-tracker/) para más detalles.
:::

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