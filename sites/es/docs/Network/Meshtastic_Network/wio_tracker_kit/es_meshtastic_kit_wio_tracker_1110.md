---
description: Comienza con Wio Tracker Dev Kit para Meshtastic®
title: Introducción al Kit Meshtastic®
keywords:
  - Meshtastic
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /meshtastic_kit_wio_tracker_1110
sku: E24070201,114993370
last_update:
  date: 6/17/2024
  author: Jessie
createdAt: '2024-06-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/meshtastic_kit_wio_tracker_1110/
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-kit.gif" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

Con una placa de desarrollo Wio Tracker 1110 (basada en Nordic nRF52840 para BLE y Semtech LR1110 para LoRa), [Grove Air530 GPS Module](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html), [Grove0.96" OLED Display](https://www.seeedstudio.com/Grove-OLED-Display-0-96.html) y compatibilidad nativa con el firmware de [Meshtastic®](https://meshtastic.org/), es un kit de desarrollo plug and play para que construyas tu propio dispositivo rastreador Meshtastic de bajo consumo.

### Características

- **Configuración sencilla**: Simplemente flashea el firmware para experimentar las potentes funciones de la red Meshtastic.
- **Posicionamiento en tiempo real**: Equipado con un módulo GPS (Air530), que admite posicionamiento GPS de alta precisión.
- **Visualización de información**: Incorpora una pantalla Grove - OLED Display de 0,96" para una visualización clara de datos en tiempo real.
- **Amplias interfaces de expansión**: Compatible con el ecosistema Grove, lo que permite una fácil expansión con más sensores y módulos.
- **Hardware y software de código abierto**: Admite desarrollo secundario y personalización, proporcionando abundantes recursos de desarrollo y soporte de la comunidad Meshtastic.

### Especificación

<table>
<tr><th colspan="3"><b>General</b></th></tr>
<tr><td colspan="1" rowspan="2"><b>Tensión de alimentación</b></td><td colspan="2">5V (USB 2.0 Type-C)</td></tr>
<tr><td colspan="1">Conector de batería</td><td colspan="1">3.7V</td></tr>
<tr><td colspan="1" rowspan="3"><b>Interfaz</b></td><td colspan="1">RFIO</td><td colspan="1"><p>Conector de antena GNSS* 1</p><p>Conector de antena LoRa* 1</p></td></tr>
<tr><td colspan="1">USB type-C</td><td colspan="1">* 1</td></tr>
<tr><td colspan="1">Interfaz Grove</td><td colspan="1"><p>ADC* 1I2C* 1UART* 1</p><p>Digital*3</p></td></tr>
<tr><td colspan="1" rowspan="2"><b>Botón</b></td><td colspan="1">USER</td><td colspan="1">Botón configurable</td></tr>
<tr><td colspan="1">RESET</td><td colspan="1">Reiniciar</td></tr>
<tr><td colspan="1"><b>Memoria FLASH externa</b></td><td colspan="2">4M</td></tr>
<tr><td colspan="3"><b>LoRa® y posicionamiento (Semtech LR1110)</b></td></tr>
<tr><td colspan="1"><b>Protocolo LoRaWAN®</b></td><td colspan="2">V1.0.4</td></tr>
<tr><td colspan="1"><b>Plan de frecuencias</b></td><td colspan="2">863&#126;928MHz</td></tr>
<tr><td colspan="1"><b>Sensibilidad</b></td><td colspan="2"><p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p></td></tr>
<tr><td colspan="1"><b>Potencia de salida</b></td><td colspan="2">20dBm máx. @LoRa®</td></tr>
<tr><td colspan="1"><b>Tecnología de posicionamiento</b></td><td colspan="2">GNSS(GPS/BeiDou), WiFi Sniffer</td></tr>
<tr><td colspan="1"><b>Alcance</b></td><td colspan="2">2&#126;10km (depende de la antena y del entorno)</td></tr>
<tr><td colspan="3"><b>Bluetooth (Nordic nRF52840)</b></td></tr>
<tr><td colspan="1"><b>Bluetooth</b></td><td colspan="2">Bluetooth 5.3</td></tr>
<tr><td colspan="1"><b>Flash</b></td><td colspan="2">1MB</td></tr>
<tr><td colspan="1"><b>RAM</b></td><td colspan="2">256KB</td></tr>
<tr><td colspan="1"><b>Protocolo</b></td><td colspan="2">Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT y pilas propietarias de 2.4 GHz</td></tr>
<tr><td colspan="1"><b>Potencia de salida</b></td><td colspan="2">6dBm máx. @Bluetooth</td></tr>
<tr><td colspan="3"><b>Sensores integrados -- Sensor de temperatura y humedad (SHT41)</b></td></tr>
<tr><td colspan="1"></td><td colspan="1"><b>Rango</b></td><td colspan="1"><b>Precisión</b></td></tr>
<tr><td colspan="1"><b>Temperatura</b></td><td colspan="1">-40&#126;85°C</td><td colspan="1">± 0.2°C</td></tr>
<tr><td colspan="1"><b>Humedad</b></td><td colspan="1">0&#126;100%RH</td><td colspan="1">±1.8%RH</td></tr>
<tr><td colspan="3"><b>Sensores integrados -- Acelerómetro de 3 ejes (no utilizado)</b></td></tr>
<tr><td colspan="1"><b>Rango</b></td><td colspan="2">±2g, 4g, 8g, 16g</td></tr>
<tr><td colspan="1"><b>Ancho de banda</b></td><td colspan="2">0.5Hz &#126; 625Hz</td></tr>
<tr><td colspan="1"><b>Sensibilidad (LSB/g)</b></td><td colspan="2">1000 (±2g) &#126; 83 (±16g)</td></tr>
</table>

**Grove - OLED Display 0.96 inch**

|**Tensión de alimentación (VCC)**|3.3 / 5 V|
| :- | :- |
|**IC controlador**|SSD1308Z|
|**Color de pantalla**|Blanco|
|**Matriz de puntos**|128×64|
|**Tamaño del panel**|26.7(An)×19.26(Al) mm|
|**Área activa**|21.74(An)×11.175 (Al) mm|
|**Paso de punto**|0.17(An)×0.175 (Al) mm|
|**Tamaño de punto**|0.15(An)×0.15 (Al) mm|
|**Amplio rango de temperatura de funcionamiento**|-20&#126;70 ℃|

## Primeros pasos

### Conexión de hardware

Conecta el `Grove-GPS module` al puerto `UART`, y el `Grove-OLED Display` al puerto `I2C`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-grove.png" alt="pir" width={800} height="auto" /></p>

Enciende la placa.

### Configuración

#### Conexión del dispositivo

Diferentes tipos de conexión; averigua qué cliente es el mejor para tu tipo de conexión.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Descarga la App `Meshtastic`.<br/>

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- La pantalla mostrará el nombre y el código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

- Introduce el código y luego haz clic en `Pair` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Descarga la App `Meshtastic`.<br/>

- Haz clic en `+` y elige el dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- La pantalla mostrará el nombre y el código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

- Introduce el código y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>

<TabItem value="web" label="Cliente web">

Abre el [Cliente web](https://client.meshtastic.org/), haz clic en `New Connection`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-new.png" alt="pir" width={600} height="auto" /></p>

- **Conectar vía Bluetooth**

 Activa el Bluetooth de tu PC y selecciona la pestaña `Bluetooth` para conectar un nuevo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ble-new.png" alt="pir" width={600} height="auto" /></p>

 Selecciona el dispositivo e introduce el código PIN que aparece en la pantalla para conectar el dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-ble-pair.png" alt="pir" width={600} height="auto" /></p>

- **Conectar vía Serial**

 Conecta la placa a tu PC y selecciona la pestaña `Serial` para conectar un nuevo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-new.png" alt="pir" width={600} height="auto" /></p>

 Puedes comprobar el puerto mediante:

 ```
 ls /dev/cu.*
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-connect.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

Esta biblioteca proporciona una interfaz de línea de comandos (CLI) para gestionar la configuración de usuario de los nodos Meshtastic y ofrece una API sencilla para enviar y recibir mensajes a través de radios mesh.

</TabItem>
</Tabs>

#### Configuración de parámetros

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe configurarse de acuerdo con tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
<TabItem value="web" label="Cliente web">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-lora-config.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

Ejecuta el siguiente comando, sustituyendo `REGION-CODE` por el código de región indicado arriba según tu ubicación regional.

```
meshtastic --set lora.region <REGION-CODE>
```

Por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/cli-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiones**

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para obtener una lista más completa.

|**Código de región**|**Descripción**|**Rango de frecuencias (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_433|Unión Europea 433MHz|433.0 - 434.0|10|12|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|
|CN|China|470.0 - 510.0|100|19|
|JP|Japón|920.8 - 927.8|100|16|
|ANZ|Australia y Nueva Zelanda|915.0 - 928.0|100|30|
|KR|Corea|920.0 - 923.0|100||
|TW|Taiwán|920.0 - 925.0|100|27|
|RU|Rusia|868.7 - 869.2|100|20|
|IN|India|865.0 - 867.0|100|30|
|NZ_865|Nueva Zelanda 865MHz|864.0 - 868.0|100|36|
|TH|Tailandia|920.0 - 925.0|100|16|
|UA_433|Ucrania 433MHz|433.0 - 434.7|10|10|
|UA_868|Ucrania 868MHz|868.0 - 868.6|1|14|
|MY_433|Malasia 433MHz|433.0 - 435.0|100|20|
|MY_919|Malasia 919MHz|919.0 - 924.0|100|27|
|SG_923|Singapur 923MHz|917.0 - 925.0|100|20|
|LORA_24|Banda de 2.4 GHz en todo el mundo|2400.0 - 2483.5|100|10|

:::info
**EU_433** y **EU_868** deben cumplir una limitación de ciclo de trabajo por hora del 10 %, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [configuración adicional](https://meshtastic.org/docs/configuration/) para adaptarla a tus necesidades.

## Recurso

[Wio Tracker 1110 Dev Board v1.0_SCH](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%201110%20v1.0_SCH_PDF_20230822.pdf)

[Documentación de Meshtastic](https://meshtastic.org/docs/introduction/)

[Github-Firmware de Meshtastic](https://github.com/meshtastic/firmware/blob/master/boards/wio-tracker-wm1110.json)

[Archivo de carcasa (impresión 3D)](https://files.seeedstudio.com/products/E24070201/wio%20tracker%20723.stp)

[Archivo de carcasa (acrílico)](https://files.seeedstudio.com/products/114993370/%E4%BA%9A%E5%85%8B%E5%8A%9B%E5%A4%96%E5%A3%B3%E5%9B%BE%E7%BA%B8.zip)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
