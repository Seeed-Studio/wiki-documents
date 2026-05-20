---
description: SenseCAP_T1000_tracker_Introduction
title: Introducción
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker/Introduction
sku: 114993073, 114993169, 114993168, 113991194, 114993207, 114993208, 114993106, E2025081201, E2025081501
last_update:
  date: 10/11/2025
  author: Twelve
createdAt: '2023-08-14'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker/Introduction/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) es un rastreador LoRaWAN® compacto que utiliza GNSS/Wi-Fi/Bluetooth para un seguimiento de ubicación preciso tanto en interiores como en exteriores. Cuenta con capacidades de auto-adaptación geográfica, almacenamiento local de datos y una impresionante autonomía de batería de varios meses. Además, está equipado con sensores de temperatura, luz y movimiento, lo que lo hace ideal para una variedad de aplicaciones basadas en la ubicación.

:::note
Hay personalización disponible para la marca del logotipo, el embalaje y la carga de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personalizar ahora ➜</font></span></strong></a>
</div>

---

:::tip Comparación de versiones

||Red compatible|Temperatura|Luz|Acelerómetro|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>LoRaWAN</li><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

## Características

### Posicionamiento preciso

GNSS, Wifi, BLE, 3 tecnologías de posicionamiento para soluciones tanto en interiores como en exteriores.

**Posicionamiento GNSS (exterior)**

El rastreador obtendrá la ubicación en exteriores a través del sistema satelital (GPS/BeiDou/más), y luego cargará los datos al servidor mediante LoRa inalámbrico.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Posicionamiento Wi-Fi / Bluetooth (interior)**

El rastreador escanea la dirección MAC y el RSSI de las redes Wi-Fi/Bluetooth cercanas y las carga a través de LoRaWAN. El servidor de aplicaciones necesita calcular la ubicación geográfica real en función de la dirección MAC y la intensidad de la señal (RSSI).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### Almacenamiento de datos sin conexión

Capaz de almacenar más de 1000 registros localmente. La capacidad de almacenamiento con un intervalo de carga de 1 hora supera los 40 días.

Cuando la cobertura de señal LoRaWAN es débil o no hay cobertura de red, los datos se guardarán y se cargarán en el siguiente ciclo. Cuando el dispositivo regrese a un área con cobertura de red LoRaWAN, enviará automáticamente los datos sin conexión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Adaptabilidad transregional

T1000 proporciona un cambio de región LoRaWAN® global sin interrupciones, ajustándose automáticamente al plan de frecuencias LoRaWAN® adecuado según las coordenadas de ubicación detectadas, garantizando un rendimiento óptimo en Europa, Panamérica y más allá.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### Meses de duración de la batería

Impulsado por el LR1110 y con un bajo consumo de energía, la mayoría de los modelos pueden alcanzar más de 3 meses de duración de la batería con un intervalo de carga de 1 hora en modo solo GNSS, con el sensor de movimiento desactivado.
(La duración de la batería puede variar según los parámetros de configuración, como la banda de frecuencia, el modo de posicionamiento y el intervalo de carga de datos. Consulta el [Cálculo de la duración de la batería](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx) para una referencia detallada)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life_new_ABE.png" alt="pir" width={800} height="auto" /></p>

### Sensores de temperatura, luz y movimiento

Se incluyen sensores de temperatura y luz para realizar un seguimiento de los datos ambientales sobre la marcha. Por ejemplo, los datos de temperatura se pueden utilizar para inferir la posibilidad de que los alimentos o las vacunas se estropeen. Los datos de luz muestran si ha sido visto por ojos no deseados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### Red de gateways descentralizada para la procedencia de la ubicación

La red descentralizada de Helium se basa en un mecanismo de confianza en el que cada gateway comparte su ubicación, y Helium valida la autenticidad de estas ubicaciones. Al usar Helium con T1000, al verificar de forma cruzada la ubicación del gateway, puedes obtener una ubicación aproximada del T1000. Esto proporciona una capa adicional de validación, aumentando la validez de los datos en comparación con otras redes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### Informe de emergencia

Sensor de movimiento para detectar anomalías, botón SOS para informes de emergencia y cambio automático a transmisión de datos de alta frecuencia

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## Arquitectura

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/framework_new.png" alt="pir" width={800} height="auto" /></p>

## Aplicaciones

- Trazabilidad internacional de activos
- Búsqueda y rescate
- Monitorización de equipos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## Especificación

### Especificación del modelo

Proporcionamos dos soluciones diferentes para los usuarios, y vienen en tres versiones: A, B y E.

- **T1000-A/T1000-B**: Estas dos versiones están diseñadas para la **red LoRaWAN**, y admiten posicionamiento en interiores (Wi-Fi + Bluetooth) y en exteriores (GNSS). T1000-A está equipado con funciones esenciales, incluido un sensor de temperatura, un sensor de luz y un sensor de movimiento, mientras que T1000-B viene sin estos sensores.

- **T1000-E**: Incorpora software de código abierto y está disponible en dos versiones independientes: una para **LoRaWAN** y otra para **Meshtastic**. Ambas ofrecen el código fuente completo, lo que permite a los desarrolladores personalizar y ampliar sus funciones libremente.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

### Parámetros generales

|Modelo de producto|T1000-A/T1000-B/T1000-E|
| :- | :- |
|Backhaul|LoRaWAN® (v1.0.4 Clase A)|
|Bluetooth|Bluetooth v5.1, configuración mediante App|
|Plan de canales LoRaWAN|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|Temperatura|<p>Rango: -20 a 60℃;</p><p>Precisión: ± 1℃ (mín ±0.5℃, máx ±1℃)</p><p>Resolución: 0.1℃</p>|
|Luz|0 a 100% (0% es oscuro, 100% es lo más brillante)|
|Acelerómetro de 3 ejes|Acelerómetro de 3 ejes para detectar movimiento|
|LED y zumbador|1xLED y 1x zumbador para indicar el estado|
|Botón|1xBotón para operar y activar eventos (SOS)|
|Antena|Interna (GNSS/LoRa/Wi-Fi/BLE)|
|Distancia de comunicación|2 a 5 km (dependiendo de la antena del gateway, la instalación y el entorno)|
|Grado de protección IP|IP65|
|Dimensiones|85 x 55 x 6.5 mm|
|Peso del dispositivo|32 g|
|Temperatura de funcionamiento|-20℃ a +60<a name="ole_link12"></a>℃|
|Humedad de funcionamiento|5% - 95% (Sin condensación)|
|Certificación|CE /FCC /TELEC /RoHS /REACH|

**Ubicación**

|Constelación GNSS|GPS/GLONASS/Galileo/BeiDou/QZSS|
| :- | :- |
|Sensibilidad GNSS|-145dBm arranque en frío / -160 dBm seguimiento|
|Precisión de ubicación GNSS|2\.5m CEP 50%|
|Posicionamiento Wi-Fi|Escaneo pasivo, carga las 4 direcciones MAC escaneadas|
|Posicionamiento Bluetooth|Carga las 3 mejores direcciones MAC de Beacon según la intensidad de la señal escaneada|
|Caché de datos|Almacena en caché 1000 datos cuando no hay red LoRaWAN|

**Batería**

|Capacidad de la batería|Batería de litio recargable, 700mAh|
| :- | :- |
|\*Estimaciones de duración de la batería|4 meses con una sola carga (enlace ascendente cada 1 hora, solo datos GNSS)|
|Monitorización de la vida útil de la batería|Nivel de batería enviado periódicamente|
|Cable de carga (adaptador no incluido)|Cable de carga magnético USB, 1 metro|
|<a name="ole_link9"></a>Tensión de entrada de alimentación|4\.7 a 5.5V CC|
|Límite de temperatura de carga|0 a +45℃ (Fuera del rango de temperatura, la carga se limitará y el LED parpadeará rápidamente)|
