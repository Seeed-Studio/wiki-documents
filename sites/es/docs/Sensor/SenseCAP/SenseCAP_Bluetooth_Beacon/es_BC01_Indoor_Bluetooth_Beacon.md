---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: Baliza Bluetooth BC01 para interiores
keywords:
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /bluetooth_beacon01_for_sensecap_tracker
sku: 113991194
last_update:
  date: 03/24/2026
  author: Janet
createdAt: '2023-10-19'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/es/bluetooth_beacon01_for_sensecap_tracker/
---

Una baliza de localización BLE (Bluetooth Low Energy) es un pequeño dispositivo inalámbrico que transmite señales Bluetooth a intervalos regulares. Estos señales pueden ser detectadas por dispositivos con Bluetooth, como [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), [**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html), lo que les permite determinar su proximidad a la baliza, construyendo una solución basada en la ubicación para posicionamiento en interiores, seguimiento de activos y otras aplicaciones.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>
<br />

:::tip Comparación de versiones
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### Sistema de posicionamiento Bluetooth en interiores

El GPS ha demostrado su capacidad para localizar en exteriores. Ahora, también tendemos a pasar al posicionamiento en interiores, y las balizas Bluetooth hacen posible el posicionamiento preciso en interiores. Combínalo con SenseCAP T1000 Tracker para construir una solución de posicionamiento en interiores.

Despliega balizas Bluetooth en tu área objetivo, el rastreador recibe la señal enviada por la baliza y la precisión de posicionamiento es a nivel de metros (2-3 metros). Puede realizar funciones como seguimiento de activos, planificación de rutas, búsqueda inversa de vehículos, etc., y puede integrarse en miniaplicaciones y APPs.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
Consulta [Sistema de posicionamiento en interiores](https://wiki.seeedstudio.com/es/IPS_For_SenseCAP_T1000_Traker) para más detalles.
:::

### Características

- **Bluetooth® LE 5.0**
- **Larga duración de la batería**: batería de litio reemplazable, más de 5 años (0dBm/500ms en la configuración predeterminada).
- **Transmisión de larga distancia**: hasta 120 metros en áreas abiertas.
- **Alta compatibilidad**: compatible con sistemas iOS 7.0+ y Android 4.3+

### Función del botón

|Encendido|Apagado|
| :-: | :-: |
|Abra la tapa trasera del producto, mantenga presionado el botón durante 3 segundos y el LED azul se encenderá durante 5 segundos, luego el arranque será exitoso.|En estado de encendido, abra la tapa trasera del producto, mantenga presionado el botón durante 3 segundos y el LED azul parpadeará 5 veces para indicar un apagado exitoso.|

## Directrices de despliegue

- Las balizas Bluetooth suelen colocarse a 2,5-3 m sobre el nivel del suelo, con un espaciado horizontal de 5-10 m. Estas balizas pueden desplegarse en formaciones en columna o distribuidas uniformemente en patrones triangulares, según el entorno.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- Las estrategias de despliegue varían según los escenarios. Por ejemplo, los entornos interiores pueden implicar una colocación central (estrecha) o una distribución en cuadrícula triangular (dispersa). En los pasillos interiores, las opciones incluyen despliegue en la línea central (para pasillos de unos 3 m de ancho) o disposición de doble columna (pasillos más anchos). Evita el montaje en el techo en edificios de gran altura (altura de piso > 4 m). En su lugar, opta por la instalación en pared o a baja altura, aproximadamente cada 5 m. En exteriores, utiliza un patrón de cuadrícula triangular para espacios abiertos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>Los rojos son ejemplos incorrectos y los azules son correctos.</i></center>

- En entornos húmedos, ten en cuenta el grado de impermeabilidad del producto durante el despliegue para evitar una exposición prolongada al agua.

- Mantén una distancia de elementos metálicos, de vidrio u otros elementos que obstruyan al situar el producto; no debe estar cerca de la esquina.

:::tip
Las directrices de despliegue son solo de referencia. El despliegue real debe personalizarse en función de los algoritmos de posicionamiento del cliente, el entorno de instalación del producto y las condiciones de prueba.
:::

### Instrucciones de instalación por adsorción magnética

#### Condiciones de instalación

- La herramienta o la mesa de material de la plataforma para la instalación del producto debe ser la superficie de equipos o soportes que puedan ser atraídos por imanes;
- Rango de temperatura de instalación recomendado: 20~40°C;
- Al instalar el producto, intenta mantenerlo alejado de esquinas, otros campos magnéticos circundantes y grandes obstáculos.

#### Pasos de instalación

La superficie de contacto magnético del producto puede adsorberse directamente a la superficie del soporte o equipo donde se va a instalar.

:::tip
Debido a que el volumen de los productos magnéticos es más pesado que el de los productos generales (sin absorción magnética), se recomienda no instalar dichos productos en superficies como techos para evitar el riesgo de caída.
:::

### Instrucciones de instalación con pegamento 3M/pegamento sin clavos

#### Condiciones de instalación

- La superficie de la plataforma de material sobre la que se instala el producto debe ser una superficie plana y seca, como cerámica, vidrio/resina epoxi, acrílico, PBT, ABS, PC y PVC rígido. Debido a las diferencias en la viscosidad y la capacidad de instalación de los diferentes modelos de adhesivo de doble cara, no se recomienda utilizar el adhesivo de doble cara predeterminado en paredes con textura gris, secado incompleto, envejecimiento y humedad (como cemento, placas de yeso, etc.). Existe riesgo de desprendimiento;
- Rango de temperatura de instalación recomendado: 20~40℃;
- El producto debe instalarse lejos de blindaje metálico, de vidrio u otras obstrucciones; el producto no debe desplegarse cerca de la esquina.

#### Pasos de instalación

- Antes de la instalación: limpia la superficie de la plataforma o herramienta de aplicación donde se va a pegar y asegúrate de que la superficie a pegar esté seca y libre de polvo;
- Al pegar, adhiere la cinta de doble cara al dispositivo con las manos o herramientas y presiónala durante 1-2 segundos. Repite la presión varias veces para que la cinta de doble cara o el pegamento sin clavos del producto y la superficie de aplicación queden mejor unidos.

:::tip
Si necesitas instalar el producto en un entorno de baja temperatura o en un entorno hostil, se recomienda utilizar adhesivo de doble cara + adhesivo fuerte sin clavos para instalar el producto y obtener el mejor efecto. Ponte en contacto con nuestro personal de ventas para obtener más información sobre el pegamento sin clavos.
:::

### Especificación

**Especificación general**

|Material|PC|
| :-: | :-: |
|Color|Blanco|
|Grado IP|Ninguno|
|Dimensión(L\*W\*H)|Φ50\*20.5mm|
|Peso|39g (incluye batería)|
|Batería|Batería de litio, 2400mAh|
|Chip|Serie nRF52|
|Versión Bluetooth|BLE 5.0|
|Protocolo Bluetooth|iBeacon|
|Sensores|Soporta acelerómetro|
|LED|Incluido|
|APP|BeaconSET|
|Temperatura de trabajo|-30~60°C|
|Vida útil de la batería|<p>Más de 5 años</p><p>(0dBm/500ms en la configuración predeterminada).</p><p></p>|

**Parámetros de transmisión predeterminados**

|**Parámetros**|**Valor predeterminado**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|Potencia medida|-59dBm|
|Tx Power|-30 - +4dBm, predeterminado 0dBm|
|Intervalo de anuncio|100ms~10s, predeterminado 500ms|
|Contraseña|seeed123 （Letras y números）|
|ID de serie|Ninguno|
|Nombre del dispositivo|BC01 (1-7 caracteres)|
|Modo de conexión|Sí/No|
|Reinicio por software|seeed123 （igual que la contraseña）|
|Servicio de batería|<p>Visualización del icono de batería, detección en tiempo real</p><p>la cuadrícula completa es 100%</p>|

**Información de compatibilidad**

|**Sistema**|**Dispositivos**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,etc.</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,etc.</p><p></p>|

## Configuración

- **Paso 1**: Descarga la APP `Beaconset`

- **Paso 2**: Conecta la baliza, puedes distinguirlas por la dirección MAC que también está adherida a la etiqueta de la baliza.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3**: Configuración

Modifica el parámetro según tus necesidades y haz clic en `Save`. Cuando se te solicite, introduce la contraseña `seeed123` para confirmar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
