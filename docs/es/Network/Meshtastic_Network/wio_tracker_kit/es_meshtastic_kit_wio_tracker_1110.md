---
description: Comience con el Kit de Desarrollo Wio Tracker para Meshtastic® 
title:  Primeros Pasos con el Kit Meshtastic®
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/meshtastic_kit_wio_tracker_1110
last_update:
  date: 6/17/2024
  author: Jessie
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-kit.gif" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

Con una Placa de Desarrollo Wio Tracker 1110 (basada en Nordic nRF52840 para BLE, Semtech LR1110 para LoRa), [Módulo GPS Grove Air530](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html), [Pantalla OLED Grove de 0.96"](https://www.seeedstudio.com/Grove-OLED-Display-0-96.html) y compatibilidad nativa con el firmware [Meshtastic®](https://meshtastic.org/), es un kit de desarrollo plug and play para construir tu dispositivo rastreador Meshtastic de bajo consumo.

### Características

- **Configuración Fácil**: Simplemente flashea el firmware para experimentar las potentes características de la red Meshtastic.
- **Posicionamiento en Tiempo Real**: Equipado con un módulo GPS (Air530), soporta posicionamiento GPS de alta precisión.
- **Visualización de Información**: Cuenta con una pantalla Grove - OLED Display 0.96" para visualización clara de datos en tiempo real.
- **Interfaces de Expansión Extensas**: Compatible con el ecosistema Grove, permitiendo fácil expansión con más sensores y módulos.
- **Hardware y Software de Código Abierto**: Soporta desarrollo secundario y personalización, proporcionando recursos de desarrollo ricos y soporte de la comunidad Meshtastic.

### Especificaciones

<table>
<tr><th colspan="3"><b>General</b></th></tr>
<tr><td colspan="1" rowspan="2"><b>Voltaje - suministro</b></td><td colspan="2">5V (USB 2.0 Type-C)</td></tr>
<tr><td colspan="1">Conector de Batería</td><td colspan="1">3.7V</td></tr>
<tr><td colspan="1" rowspan="3"><b>Interfaz</b></td><td colspan="1">RFIO</td><td colspan="1"><p>Conector de Antena GNSS* 1</p><p>Conector de Antena LoRa* 1</p></td></tr>
<tr><td colspan="1">USB type-C</td><td colspan="1">* 1</td></tr>
<tr><td colspan="1">Interfaz Grove</td><td colspan="1"><p>ADC* 1I2C* 1UART* 1</p><p>Digital*3</p></td></tr>
<tr><td colspan="1" rowspan="2"><b>Botón</b></td><td colspan="1">USER</td><td colspan="1">Botón configurable</td></tr>
<tr><td colspan="1">RESET</td><td colspan="1">Reinicio</td></tr>
<tr><td colspan="1"><b>Memoria FLASH Externa</b></td><td colspan="2">4M</td></tr>
<tr><td colspan="3"><b>LoRa® y Posicionamiento (Semtech LR1110)</b></td></tr>
<tr><td colspan="1"><b>Protocolo LoRaWAN®</b></td><td colspan="2">V1.0.4</td></tr>
<tr><td colspan="1"><b>Plan de Frecuencia</b></td><td colspan="2">863&#126;928MHz</td></tr>
<tr><td colspan="1"><b>Sensibilidad</b></td><td colspan="2"><p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p></td></tr>
<tr><td colspan="1"><b>Potencia de Salida</b></td><td colspan="2">20dBm máx @LoRa®</td></tr>
<tr><td colspan="1"><b>Tecnología de Posicionamiento</b></td><td colspan="2">GNSS(GPS/BeiDou), WiFi Sniffer</td></tr>
<tr><td colspan="1"><b>Alcance</b></td><td colspan="2">2&#126;10km (Depende de la antena y el entorno)</td></tr>
<tr><td colspan="3"><b>Bluetooth(Nordic nRF52840)</b></td></tr>
<tr><td colspan="1"><b>Bluetooth</b></td><td colspan="2">Bluetooth 5.3</td></tr>
<tr><td colspan="1"><b>Flash</b></td><td colspan="2">1MB</td></tr>
<tr><td colspan="1"><b>RAM</b></td><td colspan="2">256KB</td></tr>
<tr><td colspan="1"><b>Protocolo</b></td><td colspan="2">Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT y pilas propietarias de 2.4 GHz</td></tr>
<tr><td colspan="1"><b>Potencia de Salida</b></td><td colspan="2">6dBm máx @Bluetooth</td></tr>
<tr><td colspan="3"><b>Sensores Integrados -- Sensor TH (SHT41)</b></td></tr>
<tr><td colspan="1"></td><td colspan="1"><b>Rango</b></td><td colspan="1"><b>Precisión</b></td></tr>
<tr><td colspan="1"><b>Temperatura</b></td><td colspan="1">-40&#126;85°C</td><td colspan="1">± 0.2°C</td></tr>
<tr><td colspan="1"><b>Humedad</b></td><td colspan="1">0&#126;100%RH</td><td colspan="1">±1.8%RH</td></tr>
<tr><td colspan="3"><b>Sensores Integrados -- Acelerómetro de 3 Ejes( No utilizado )</b></td></tr>
<tr><td colspan="1"><b>Rango</b></td><td colspan="2">±2g, 4g, 8g, 16g</td></tr>
<tr><td colspan="1"><b>Ancho de Banda</b></td><td colspan="2">0.5Hz &#126; 625Hz</td></tr>
<tr><td colspan="1"><b>Sensibilidad (LSB/g)</b></td><td colspan="2">1000 (±2g) &#126; 83 (±16g)</td></tr>
</table>

**Grove - Pantalla OLED de 0.96 pulgadas**

|**Voltaje de Alimentación (VCC)**|3.3 / 5 V|
| :- | :- |
|**IC Controlador**|SSD1308Z|
|**Color de Pantalla**|Blanco|
|**Matriz de Puntos**|128×64|
|**Tamaño del Panel**|26.7(W)×19.26(H) mm|
|**Área Activa**|21.74(W)×11.175 (H) mm|
|**Separación de Puntos**|0.17(W)×0.175 (H) mm|
|**Tamaño de Punto**|0.15(W)×0.15 (H) mm|
|**Amplio rango de temperatura de funcionamiento**|-20&#126;70 ℃|

## Primeros Pasos

### Conexión de Hardware

Conecta el `módulo Grove-GPS` al puerto `UART`, y la `Pantalla Grove-OLED` al puerto `I2C`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-grove.png" alt="pir" width={800} height="auto" /></p>

Enciende la placa.

### Configuración

#### Conexión del Dispositivo

Diferentes tipos de conexión, descubre qué cliente es mejor para tu tipo de conexión.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="Aplicación IOS">

- Descarga la aplicación `Meshtastic`.<br/>

- Selecciona el dispositivo objetivo en el panel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- La pantalla mostrará el nombre y código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

- Ingresa el código y luego haz clic en `Emparejar` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicación Android">

- Descarga la aplicación `Meshtastic`.<br/>

- Haz clic en `+` y elige el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- La pantalla mostrará el nombre y código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

- Ingresa el código y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>

<TabItem value="web" label="Cliente Web">

Abre [Cliente Web](https://client.meshtastic.org/), haz clic en `Nueva Conexión`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-new.png" alt="pir" width={600} height="auto" /></p>

- **Conectar vía Bluetooth**

 Habilita el Bluetooth de tu PC, y selecciona la pestaña `Bluetooth` para conectar un nuevo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ble-new.png" alt="pir" width={600} height="auto" /></p>

 Selecciona el dispositivo e ingresa el código PIN en la pantalla para conectar el dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-ble-pair.png" alt="pir" width={600} height="auto" /></p>

- **Conectar vía Serial**

 Conecta la placa a tu PC y selecciona la pestaña `Serial` para conectar un nuevo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-new.png" alt="pir" width={600} height="auto" /></p>

 Puedes verificar el puerto vía:

 ```
 ls /dev/cu.*
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-connect.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

Esta biblioteca proporciona una interfaz de línea de comandos (CLI) para gestionar la configuración de usuario de los nodos Meshtastic y proporciona una API fácil para enviar y recibir mensajes a través de radios de malla.

</TabItem>
</Tabs>

#### Configuración de Parámetros

Para comenzar a comunicarse a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencia usa tu dispositivo y debe establecerse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="Aplicación IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicación Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
<TabItem value="web" label="Cliente Web">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-lora-config.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

Ejecuta el siguiente comando, reemplazando `REGION-CODE` con el código de región listado arriba según tu ubicación regional.

```
meshtastic --set lora.region <REGION-CODE>
```

Por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/cli-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiones**

Consulta [Región LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.

|**Código de Región**|**Descripción**|**Rango de Frecuencia (MHz)**|**Ciclo de Trabajo (%)**|**Límite de Potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin establecer|N/A|N/A|N/A|
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
|LORA_24|Banda de 2.4 GHz mundial|2400.0 - 2483.5|100|10|

:::info
**EU_433** y **EU_868** deben cumplir con una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto en una base móvil de 1 hora. Su dispositivo dejará de transmitir si lo alcanza, hasta que se permita nuevamente.
:::

Ahora que ha configurado la región LoRa en su dispositivo, puede continuar configurando cualquier [configuración adicional](https://meshtastic.org/docs/configuration/) para satisfacer sus necesidades.

## Recursos

[Wio Tracker 1110 Dev Board v1.0_SCH](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%201110%20v1.0_SCH_PDF_20230822.pdf)

[Documentación de Meshtastic](https://meshtastic.org/docs/introduction/)

[Github-Firmware de Meshtastic](https://github.com/meshtastic/firmware/blob/master/boards/wio-tracker-wm1110.json)

[Archivo de Carcasa (Impresión 3D)](https://files.seeedstudio.com/products/E24070201/wio%20tracker%20723.stp)

[Archivo de Carcasa (Acrílico)](https://files.seeedstudio.com/products/114993370/%E4%BA%9A%E5%85%8B%E5%8A%9B%E5%A4%96%E5%A3%B3%E5%9B%BE%E7%BA%B8.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
