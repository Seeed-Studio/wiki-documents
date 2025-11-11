---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: BC01 Baliza Bluetooth Interior
keywords:
- BLE
- Posicionamiento
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /es/bluetooth_beacon_for_SenseCAP_Traker
last_update:
  date: 05/29/2025
  author: Zeke
---

Una Baliza de Ubicación BLE (Bluetooth Low Energy) es un pequeño dispositivo inalámbrico que transmite señales Bluetooth a intervalos regulares. Estas señales pueden ser detectadas por dispositivos habilitados para Bluetooth, como el SenseCAP T1000 Tracker, permitiéndoles determinar su proximidad a la baliza, construyendo una solución basada en ubicación para posicionamiento interior, seguimiento de activos y otras aplicaciones.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
    </a>
</div>

### Sistema de Posicionamiento Interior Bluetooth

El GPS ha demostrado su capacidad para localizar en exteriores. Ahora, también tendemos a movernos hacia el posicionamiento interior, y las balizas Bluetooth hacen posible el posicionamiento preciso interior. Combínalo con el SenseCAP T1000 Tracker para construir una solución de posicionamiento interior.

Despliega balizas Bluetooth en tu área objetivo, el tracker recibe la señal enviada por la baliza, y la precisión de posicionamiento está a nivel de metros (2-3 metros). Puede realizar funciones como seguimiento de activos, planificación de rutas, búsqueda inversa de vehículos, etc., y puede integrarse en mini programas y APPs.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
Consulta [Sistema de Posicionamiento Interior](https://wiki.seeedstudio.com/es/IPS_For_SenseCAP_T1000_Traker) para más detalles.
:::

### Características

- **Bluetooth® LE 5.0**
- **Larga duración de batería**: Batería de litio reemplazable, más de 5 años (0dBm/500ms en configuración predeterminada).
- **Transmisión de larga distancia**: Hasta 120 metros en áreas abiertas.
- **Alta compatibilidad**: Compatible con sistemas iOS 7.0+ y Android 4.3+

### Función del Botón

|Encender|Apagar|
| :-: | :-: |
|Abre la tapa trasera del producto, mantén presionado el botón durante 3 segundos, y el LED azul se encenderá durante 5 segundos, entonces el arranque será exitoso.|En el estado de encendido, abre la tapa trasera del producto, mantén presionado el botón durante 3 segundos, y el LED azul parpadea 5 veces para indicar un apagado exitoso.|

## Guías de despliegue

- Las balizas Bluetooth se posicionan típicamente a 2.5-3m sobre el nivel del suelo, con un espaciado horizontal de 5-10m. Estas balizas pueden desplegarse en formaciones de columna o distribuidas uniformemente en patrones triangulares, dependiendo del entorno.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- Las estrategias de despliegue varían según los escenarios. Por ejemplo, los entornos interiores pueden involucrar colocación central (estrecha) o distribución en cuadrícula triangular (dispersa). En corredores interiores, las opciones incluyen despliegue en línea central (para corredores de alrededor de 3m de ancho) o disposición de doble columna (corredores más anchos). Evita el montaje en techo en edificios de gran altura (altura de piso > 4m). Opta en su lugar por instalación en pared o a bajo nivel, aproximadamente 5m de separación. En exteriores, usa un patrón de cuadrícula triangular para espacios abiertos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>Los rojos son ejemplos incorrectos y los azules son correctos.</i></center>

- En entornos húmedos, considera la clasificación de resistencia al agua del producto durante el despliegue para prevenir exposición prolongada al agua.

- Mantén una distancia de elementos metálicos, de vidrio u otros obstáculos al situar el producto, no debe estar cerca de la esquina.

:::tip
Las guías de despliegue son solo para referencia. El despliegue real debe personalizarse basándose en algoritmos de posicionamiento del cliente, entornos de instalación del producto y condiciones de prueba.
:::

### Instrucciones de Instalación por Adsorción Magnética

#### Condiciones de instalación

- La herramienta o tabla de material de plataforma para la instalación del producto debe ser la superficie de equipos o soportes que puedan ser atraídos por imanes;
- Rango de temperatura de instalación recomendado: 20~40°C;
- Al instalar el producto, trata de mantenerlo alejado de esquinas, otros campos magnéticos circundantes y grandes obstáculos.

#### Pasos de instalación

La superficie de contacto magnético del producto puede ser adsorbida directamente a la superficie del soporte o equipo a instalar.

:::tip
Debido a que el volumen de productos magnéticos es más pesado que el de productos generales (sin adsorción magnética), se recomienda no instalar tales productos en superficies como techos para evitar el riesgo de caída.
:::

### Instrucciones de instalación con pegamento 3M/pegamento sin clavos

#### Condiciones de instalación

- La superficie del material de plataforma en la que se instala el producto debe ser una superficie plana y seca como cerámica, vidrio/resina epoxi, acrílico, PBT, ABS, PC y PVC rígido. Debido a las diferencias en la viscosidad e instalabilidad de diferentes modelos de adhesivo de doble cara, no se recomienda usar el adhesivo de doble cara predeterminado en paredes con textura gris, secado incompleto, envejecimiento y humedad (como cemento, tablero de yeso, etc.). Existe riesgo de desprendimiento;
- Rango de temperatura de instalación recomendado: 20~40℃;
- El producto debe instalarse alejado de metal, blindaje de vidrio u otras obstrucciones; el producto no debe desplegarse cerca de la esquina.

#### Pasos de instalación

- Antes de la instalación: limpia la superficie de la plataforma de aplicación o herramienta a pegar, y asegúrate de que la superficie a pegar esté seca y libre de polvo;
- Al pegar, adhiere la cinta de doble cara al dispositivo con tus manos o herramientas y presiónala durante 1-2 segundos. Repite la presión varias veces para que la cinta de doble cara o pegamento sin clavos del producto y la superficie de aplicación se adhieran mejor.

:::tip
Si necesitas instalar el producto en un entorno de baja temperatura o en un entorno hostil, se recomienda usar adhesivo de doble cara + adhesivo fuerte sin clavos para instalar el producto para el mejor efecto. Por favor contacta a nuestro personal de ventas para más información sobre pegamento sin clavos.
:::

### Especificación

**Especificación General**

|UUID|PC|
| :-: | :-: |
|Color|Blanco|
|Clasificación IP|Ninguna|
|Dimensión(L\*W\*H)|Φ50\*20.5mm|
|Peso|39g(incluye batería)|
|Batería|Batería de litio, 2400mAh|
|Chip|serie nRF52|
|Versión Bluetooth|BLE 5.0|
|Protocolo Bluetooth|iBeacon|
|Sensores|Soporta acelerómetro|
|LED|Incluido|
|APP|BeaconSET|
|Temperatura de trabajo|-30~60°C|
|Duración de batería|<p>Más de 5 años</p><p>(0dBm/500ms en configuración predeterminada).</p><p></p>|

**Parámetros de transmisión predeterminados**

|**Parámetros**|**Valor Predeterminado**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|Potencia medida|-59dBm|
|Potencia Tx|-30 - +4dBm, predeterminado 0dBm|
|Intervalo Adv|100ms~10s,predeterminado 500ms|
|Contraseña|seeed123 （Letras y números）|
|ID Serial|Ninguno|
|Nombre del Dispositivo|BC01 (1-7 caracteres)|
|Modo de Conexión|Sí/No|
|Reinicio Suave|seeed123 （igual que la contraseña）|
|Servicio de Batería|<p>Visualización de icono de batería, detección en tiempo real</p><p>cuadrícula completa es 100%</p>|

**Información de compatibilidad**

|**Sistema**|**Dispositivos**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,etc.</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,etc.</p><p></p>|

## Configuración

- **Paso 1**: Descarga la APP `Beaconset`

- **Paso 2**: Conecta la baliza, puedes distinguirlas por la dirección MAC que también está adjunta a la etiqueta de la baliza.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3**: Configuraciones

Modifica el parámetro según tu necesidad y haz clic en `Save`. Cuando se te solicite, ingresa la contraseña `seeed123` para confirmar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
