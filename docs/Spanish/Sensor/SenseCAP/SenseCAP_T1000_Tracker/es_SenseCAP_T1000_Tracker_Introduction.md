---
description: SenseCAP_T1000_tracker_Introduction
title: Introducción
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 07/24/2025
  author: Guillermo
---

[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) es un rastreador LoRaWAN® compacto que utiliza GNSS/Wi-Fi/Bluetooth para posicionamiento preciso tanto en interiores como en exteriores. Ofrece capacidades de geolocalización auto-adaptativa, almacenamiento local de datos y una impresionante duración de batería de varios meses. Además, cuenta con sensores de temperatura, luz y movimiento, lo que lo hace ideal para una amplia gama de aplicaciones basadas en ubicación.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png"
    alt="SenseCAP T1000 Tracker"
    width="800"
  />
</p>

<div class="get_one_now_container" style={{ textAlign: "center"}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank">
    <strong><span><font color="FFFFFF" size="4">¡Consíguelo ahora!</font></span></strong>
  </a>
</div>

:::tip Comparativa de Versiones

|Versión|Red Compatible|Sensor de Temperatura|Sensor de Luz|Acelerómetro|
|--|--|--|--|--|
|[T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|LoRaWAN / Helium|✅|✅|✅|
|[T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|LoRaWAN / Helium|❌|❌|❌|
|[T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|Meshtastic|✅|✅|✅|
:::

## Características

### Posicionamiento Preciso

Compatible con GNSS, Wi-Fi y BLE para soluciones de localización interior y exterior.

**GNSS (exterior)**  
Posicionamiento vía GPS/BeiDou/satélites. Los datos se envían por LoRa.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png"
    alt="GNSS"
    width="800"
  />
</p>

**Wi-Fi (interior)**  
Escanea direcciones MAC y RSSI de redes cercanas y las sube por LoRaWAN para cálculo de ubicación.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png"
    alt="WiFi Positioning"
    width="800"
  />
</p>

### Almacenamiento de Datos Offline

Almacena más de 1000 registros localmente. Si no hay cobertura, guarda los datos y los envía al recuperar señal.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png"
    alt="Data Cache"
    width="800"
  />
</p>

### Adaptabilidad Regional

Cambio automático de frecuencias LoRaWAN según la ubicación, compatible con EU, América y más.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif"
    alt="Adaptabilidad Global"
    width="800"
  />
</p>

### Meses de Vida de Batería

Gracias al chip LR1110 y bajo consumo, puede durar hasta 3 meses con una subida por hora en modo solo GNSS.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life.png"
    alt="Battery Life"
    width="800"
  />
</p>

### Sensores de Temperatura, Luz y Movimiento

Útil para aplicaciones como monitoreo de temperatura en alimentos o detección de luz para seguridad.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png"
    alt="Sensores"
    width="800"
  />
</p>

### Red Descentralizada con Helium

Helium valida ubicación de gateways, lo que mejora la fiabilidad del posicionamiento del T1000.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png"
    alt="Helium Map"
    width="800"
  />
</p>

### Reporte de Emergencia

Sensor de movimiento para anomalías, botón SOS y transmisión de datos de alta frecuencia en modo emergencia.

<p style={{ textAlign: "center" }}>
  <img
    src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png"
    alt="SOS"
    width="800"
  />
</p>

## Arquitectura

<p style={{ textAlign: "center" }}>
  <img
    src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%B4%A0%E6%9D%9033.png"
    alt="Arquitectura"
    width="800"
  />
</p>

## Aplicaciones

- Rastreo de activos internacionales  
- Búsqueda y rescate  
- Monitoreo de equipos  

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png"
    alt="Aplicaciones"
    width="800"
  />
</p>

## Especificaciones

### Modelos

- **T1000-A/B**: GNSS sin cifrado.
- **T1000-C/D**: GNSS cifrado, requiere [LoRa Cloud](https://www.loracloud.com/) para descifrado.

<p style={{ textAlign: "center" }}>
  <img
    src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_spec2.png"
    alt="Modelos"
    width="800"
  />
</p>

### Parámetros Generales

|Parámetro|Valor|
|--|--|
|Red|LoRaWAN® v1.0.4 Clase A|
|Bluetooth|v5.1 (configurable desde App)|
|Planes de Canal|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|Temperatura|−20 a 60 °C (±1 °C)|
|Luz|0 a 100%|
|Acelerómetro|3 ejes|
|LED & Buzzer|1 LED + 1 buzzer|
|Botón|1 botón (SOS)|
|Antenas|Internas (GNSS/LoRa/Wi-Fi/BLE)|
|Alcance|2–5 km|
|Protección|IP65|
|Dimensiones|85 × 55 × 6.5 mm|
|Peso|32 g|
|Certificaciones|CE / FCC / TELEC / RoHS / REACH|

### Posicionamiento

|Tecnología|Especificaciones|
|--|--|
|Constelación GNSS|T1000-A/B: GPS/GLONASS/Galileo/BeiDou/QZSS<br />T1000-C/D: GPS/BeiDou|
|Sensibilidad GNSS|−145 dBm (inicio en frío), −160 dBm (seguimiento)|
|Precisión|2.5 m (CEP 50%)|
|Wi-Fi|Escaneo pasivo de 4 MACs|
|Bluetooth|3 MACs con mejor señal|
|Caché|1,000 registros sin red|

### Batería

|Especificación|Detalle|
|--|--|
|Capacidad|700 mAh (litio recargable)|
|Duración*|~4 meses (1 uplink/hora, solo GNSS)|
|Monitoreo de batería|Nivel reportado periódicamente|
|Carga|Cable magnético USB (1 m)|
|Entrada|4.7 V – 5.5 V DC|
|Rango de carga|0 – 45 °C (fuera de este rango, se desactiva carga)|
