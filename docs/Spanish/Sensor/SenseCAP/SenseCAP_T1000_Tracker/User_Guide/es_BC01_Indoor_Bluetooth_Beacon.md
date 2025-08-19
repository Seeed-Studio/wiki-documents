---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: BC01 Bluetooth Beacon para interiores
keywords:
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /es/bluetooth_beacon_for_SenseCAP_Traker
last_update:
  date: 07/24/2025
  author: Guillermo
---

Un **Beacon de ubicación BLE (Bluetooth Low Energy)** es un pequeño dispositivo inalámbrico que transmite señales Bluetooth a intervalos regulares. Estas señales pueden ser detectadas por dispositivos compatibles con Bluetooth, como el **SenseCAP T1000 Tracker**, permitiéndoles determinar su proximidad al beacon y así construir una solución basada en ubicación para posicionamiento en interiores, rastreo de activos y otras aplicaciones.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>

### Sistema de posicionamiento interior con Bluetooth

El GPS ha demostrado ser eficaz en exteriores. Ahora también avanzamos hacia el posicionamiento interior, y los beacons Bluetooth hacen posible una localización precisa en interiores. Combina con el **SenseCAP T1000 Tracker** para construir una solución de posicionamiento interior.

Despliega beacons Bluetooth en tu zona objetivo, el tracker recibe las señales enviadas por los beacons, y la precisión de posicionamiento es a nivel de metros (2–3 m). Esto permite funciones como rastreo de activos, planeación de rutas, búsqueda inversa de automóviles, etc., y puede integrarse en aplicaciones móviles o mini apps.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
Consulta más detalles en [Indoor Positioning System](https://wiki.seeedstudio.com/IPS_For_SenseCAP_T1000_Traker)
:::

### Características

* **Bluetooth® LE 5.0**
* **Larga duración de batería**: pila de litio reemplazable, más de 5 años (0 dBm/500 ms en configuración predeterminada).
* **Transmisión de largo alcance**: hasta 120 m en espacios abiertos.
* **Alta compatibilidad**: compatible con sistemas iOS 7.0+ y Android 4.3+.

### Función del botón

| Encendido | Apagado |
| :-: | :-: |
| Abre la tapa trasera del producto, mantén presionado el botón por 3 s. El LED azul se encenderá durante 5 s, indicando encendido exitoso. | Con el equipo encendido, abre la tapa trasera, mantén presionado el botón por 3 s. El LED azul parpadeará 5 veces, indicando apagado exitoso. |

## Guía de despliegue

* Los beacons deben colocarse a 2.5–3 m de altura, con separación horizontal de 5–10 m. Se pueden distribuir en columnas o en patrón triangular según el entorno.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

* Estrategias de despliegue varían según el escenario:
  - Interiores: patrón central o rejilla triangular.
  - Pasillos: en línea central (pasillos de ~3 m) o doble columna (pasillos anchos).
  - Evita el montaje en techo en edificios altos (altura > 4 m), prefiere montaje en muros o bajo, con separación de 5 m.
  - Exteriores: patrón triangular.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>Los puntos rojos son ejemplos incorrectos, los azules son correctos.</i></center>

* En ambientes húmedos, ten en cuenta el nivel de impermeabilidad del producto.

* Evita instalar cerca de metales, vidrio u otros obstáculos. No debe instalarse cerca de esquinas.

:::tip
Estas guías son solo de referencia. El despliegue real debe ajustarse al algoritmo de posicionamiento, entorno de instalación y condiciones de prueba.
:::

### Instrucciones de instalación con imán

#### Condiciones

* La superficie donde se instalará debe ser metálica o permitir atracción magnética.
* Temperatura recomendada: 20–40 °C.
* Evita esquinas, campos magnéticos cercanos u obstáculos grandes.

#### Pasos

La superficie con imán del producto puede adherirse directamente a la estructura o equipo de instalación.

:::tip
Dado que los productos magnéticos son más pesados, no se recomienda instalarlos en techos para evitar caídas.
:::

### Instrucciones de instalación con pegamento 3M o sin clavos

#### Condiciones

* Superficie lisa, seca y compatible: cerámica, vidrio, acrílico, PBT, ABS, PC, PVC rígido.
* No se recomienda usar el adhesivo en muros rugosos, húmedos o deteriorados.
* Temperatura recomendada: 20–40 °C.
* Mantener lejos de metales, vidrios o esquinas.

#### Pasos

* Limpiar y secar la superficie.
* Pegar la cinta doble cara al dispositivo, presionar de 1–2 s varias veces para asegurar buena adhesión.

:::tip
En ambientes fríos o extremos, se recomienda combinar cinta doble cara con pegamento fuerte. Consulta a ventas para más detalles.
:::

### Especificaciones

**Especificación general**

| Atributo | Valor |
| :-: | :-: |
| Color | Blanco |
| IP | Sin clasificación |
| Dimensiones | Φ50 × 20.5 mm |
| Peso | 39 g (incluye batería) |
| Batería | Litio 2400 mAh |
| Chip | Serie nRF52 |
| Bluetooth | BLE 5.0 |
| Protocolo | iBeacon |
| Sensores | Acelerómetro incluido |
| LED | Sí |
| APP | BeaconSET |
| Temp. de trabajo | -30~60 °C |
| Duración batería | > 5 años (0dBm / 500ms) |

**Parámetros predeterminados**

| Parámetro | Valor |
| :-: | :-: |
| UUID | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major | 10001 |
| Minor | 19641 |
| Potencia medida | -59 dBm |
| Tx Power | -30 a +4 dBm (default: 0 dBm) |
| Intervalo de anuncio | 100 ms–10 s (default: 500 ms) |
| Contraseña | minew123 |
| Serial ID | Ninguno |
| Nombre del dispositivo | BC01 (1–7 caracteres) |
| Modo conexión | Sí / No |
| Reinicio suave | minew123 |
| Servicio batería | Indicador en tiempo real |

**Compatibilidad**

| Sistema | Dispositivos compatibles |
| :-: | :-: |
| BLE 4.2+ | General |
| iOS 7.0+ | iPhone 4S, 5/5C/5S, 6/6Plus/6S/6SPlus, 7/7Plus, iPad Mini, Air, Pro |
| Android 4.3+ | Samsung, Xiaomi, Huawei, OnePlus, Vivo, Oppo, etc. |

## Configuración

* **Paso 1**: Descarga la app `BeaconSET`

* **Paso 2**: Conecta al beacon; puedes distinguirlos por la dirección MAC (también está en la etiqueta del beacon).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

* **Paso 3**: Configuración

Modifica los parámetros según tus necesidades y haz clic en `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>


