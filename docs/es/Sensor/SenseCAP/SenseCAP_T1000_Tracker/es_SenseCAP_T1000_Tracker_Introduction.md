---
description: SenseCAP_T1000_tracker_Introduction
title: Introducción
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker/Introduction
last_update:
  date: 9/11/2023
  author: Jessie
---


[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) es un rastreador LoRaWAN® compacto que utiliza GNSS/Wi-Fi/Bluetooth para un seguimiento preciso de ubicación en interiores y exteriores. Cuenta con capacidades de auto-geo-adaptación, almacenamiento local de datos y una impresionante duración de batería de meses. Además, está equipado con sensores de temperatura, luz y movimiento, lo que lo hace ideal para una variedad de aplicaciones basadas en ubicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
    </a>
</div>

---

:::tip Comparación de Versiones

||Red Compatible|Temperatura|Luz|Acelerómetro|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|

:::

## Características

### Posicionamiento Preciso

GNSS, Wifi, BLE, 3 tecnologías de posicionamiento para soluciones tanto interiores como exteriores.

**Posicionamiento GNSS (Exterior)**

El rastreador obtendrá la ubicación en exteriores a través del sistema satelital (GPS/BeiDou/más), luego carga los datos al servidor mediante LoRa inalámbrico.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Posicionamiento Wi-Fi (Interior)**

El rastreador escanea la dirección MAC y RSSI de Wi-Fi/Bluetooth cercanos y lo carga a través de LoRaWAN. El servidor de aplicaciones necesita calcular la ubicación geográfica real basándose en la dirección MAC y la intensidad de señal (RSSI).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### Almacenamiento de Datos Sin Conexión

Capaz de almacenar más de 1000 registros localmente. La capacidad de almacenamiento con intervalo de carga de 1 hora supera los 40 días.

Cuando la cobertura de señal LoRaWAN es débil o no hay cobertura de red, los datos se guardarán e ingresarán en el siguiente ciclo. Cuando el dispositivo regrese a un área con cobertura de red LoRaWAN, enviará los datos sin conexión automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Adaptabilidad Inter-Regional

T1000 proporciona cambio de región LoRaWAN® global sin interrupciones, ajustándose automáticamente al plan de frecuencia LoRaWAN® apropiado basado en las coordenadas de ubicación detectadas, asegurando rendimiento óptimo a través de Europa, pan-América y más allá.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### Meses de Vida de Batería

Alimentado por el LR1110 y con bajo consumo de energía, la batería dura 3 meses con intervalo de carga de 1 hora en modo solo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life.png" alt="pir" width={800} height="auto" /></p>

### Sensores de Temperatura, Luz y Movimiento

Los sensores de temperatura y luz están incluidos para hacer seguimiento de los datos ambientales en movimiento. Por ejemplo, los datos de temperatura pueden usarse para inferir la posibilidad de que la comida/vacuna se eche a perder. Los datos de luz muestran si es visto por ojos no deseados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### Red de Gateway Descentralizada para Procedencia de Ubicación

La red descentralizada de Helium está construida sobre un mecanismo de confianza donde cada gateway comparte su ubicación, y Helium valida la autenticidad de estas ubicaciones. Al usar Helium con T1000, mediante verificación cruzada de la ubicación del gateway, puedes tener una ubicación aproximada del T1000. Esto proporciona una capa adicional de validación, aumentando la validez de los datos comparado con otras redes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### Reporte de Emergencia

Sensor de movimiento para detectar anomalías, botón SOS para reporte de emergencia y cambio automático a transmisión de datos de alta frecuencia

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## Arquitectura

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%B4%A0%E6%9D%9033.png" alt="pir" width={800} height="auto" /></p>

## Aplicaciones

- Rastreo Internacional de Activos
- Búsqueda y Rescate
- Monitoreo de Equipos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## Especificación

### Especificación del Modelo

Proporcionamos dos soluciones diferentes para los usuarios, y viene en cuatro versiones: A, B, C y D. T1000 A/B soporta posicionamiento GNSS regular, mientras que T1000 C/D soporta el Servicio de Geolocalización LoRa Cloud.

- **T1000-A/T1000-B**: Datos GNSS sin cifrado especial.

- **T1000-C/T1000-D**: Datos GNSS cifrados vía Semtech LoRa Edge, los datos GNSS necesitan ser descifrados a través de [LoRa Cloud](https://www.loracloud.com/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_spec2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-11@1.5x.png" alt="pir" width={800} height="auto" /></p>

### Parámetros Generales

|Modelo del Producto|T1000-A/T1000-B/T1000-C/T1000-D|
| :- | :- |
|Backhaul|LoRaWAN® (v1.0.4 Clase A)|
|Bluetooth|Bluetooth v5.1, configuración vía App|
|Plan de Canales LoRaWAN|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|Temperatura|<p>Rango: -20 a 60℃;</p><p>Precisión: ± 1℃ (mín ±0.5℃, máx ±1℃)</p><p>Resolución: 0.1℃</p>|
|Luz|0 a 100% (0% es oscuro, 100% es más brillante)|
|Acelerómetro de 3 Ejes|Acelerómetro de 3 ejes para detectar movimiento|
|LED y Zumbador|1xLED y 1x zumbador para indicar estado|
|Botón|1xBotón para operar y activar eventos (SOS)|
|Antena|Interna (GNSS/LoRa/Wi-Fi/BLE)|
|Distancia de Comunicación|2 a 5km (dependiendo de la antena del gateway, instalación y entornos)|
|Clasificación IP|IP65|
|Dimensiones|85 x 55 x 6.5 mm|
|Peso del Dispositivo|32g|
|Temperatura de Operación|-20℃ a +60<a name="ole_link12"></a>℃|
|Humedad de Operación|5% - 95% (Sin condensación)|
|Certificación|CE /FCC /TELEC /RoHS /REACH|

**Ubicación**

|Constelación GNSS|<p>T1000-A/B: GPS/GLONASS/Galileo/BeiDou/QZSS</p><p>T1000-C/D: GPS/ BeiDou</p>|
| :- | :- |
|Sensibilidad GNSS|-145dBm arranque en frío / -160 dBm Seguimiento|
|Precisión de Ubicación GNSS|2.5m CEP 50%|
|Posicionamiento Wi-Fi|Escaneo pasivo, carga las 4 direcciones MAC escaneadas|
|Posicionamiento Bluetooth|carga las 3 mejores direcciones MAC de señal de Beacon escaneadas|
|Caché de Datos|Almacena 1000 datos cuando no hay red LoRaWAN|

**Batería**

|Capacidad de Batería|Batería de litio recargable, 700mAh|
| :- | :- |
|\*Estimaciones de Vida de Batería|4 meses con una sola carga (enlace ascendente cada 1 hora, solo datos GNSS)|
|Monitoreo de Vida de Batería|Nivel de batería de enlace ascendente periódico|
|Cable de Carga (Adaptador no incluido)|Cable de carga magnético USB, 1 metro|
|<a name="ole_link9"></a>Voltaje de Entrada de Alimentación|4.7 a 5.5V DC|
|Límite de Temperatura de Carga|0 a +45℃ (Más allá del rango de temperatura, la carga será limitada, y el LED parpadeará rápidamente)|
