---
description: Get Started with Wio Tracker Dev Kit for Meshtastic® 
title:  Primeros Pasos con Meshtastic® Kit
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/meshtastic_kit_wio_tracker_1110
last_update:
  date: 06/02/2025
  author: Guillermo
---

## Introducción


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-kit.gif" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>


Con una placa de desarrollo Wio Tracker 1110 (basada en Nordic nRF52840 para BLE y Semtech LR1110 para LoRa), el [Módulo GPS Grove Air530](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html), la [Pantalla OLED Grove de 0.96"](https://www.seeedstudio.com/Grove-OLED-Display-0-96.html) y compatibilidad nativa con el firmware Meshtastic, este kit de desarrollo es plug and play para construir tu propio dispositivo rastreador Meshtastic de bajo consumo.

---

### Características

* **Configuración sencilla**: Simplemente flashea el firmware para experimentar las potentes funciones de la red Meshtastic.
* **Posicionamiento en tiempo real**: Equipado con un módulo GPS (Air530), que permite un posicionamiento de alta precisión.
* **Visualización de información**: Incluye una pantalla OLED Grove de 0.96" para mostrar datos en tiempo real de forma clara.
* **Amplias interfaces de expansión**: Compatible con el ecosistema Grove, lo que permite una fácil expansión con más sensores y módulos.
* **Hardware y software de código abierto**: Soporta desarrollo y personalización secundaria, con abundantes recursos para desarrolladores y el respaldo de la comunidad Meshtastic.

### Especificación

<table>
<tr><th colspan="3"><b>General</b></th></tr>
<tr><td colspan="1" rowspan="2"><b>Voltaje de alimentación</b></td><td colspan="2">5V (USB 2.0 Tipo-C)</td></tr>
<tr><td colspan="1">Conector de batería</td><td colspan="1">3.7V</td></tr>
<tr><td colspan="1" rowspan="3"><b>Interfaz</b></td><td colspan="1">RFIO</td><td colspan="1"><p>GNSS Conector de Antena* 1</p><p>LoRa Conector de Antena* 1</p></td></tr>
<tr><td colspan="1">USB tipo-C</td><td colspan="1">* 1</td></tr>
<tr><td colspan="1">Interfaz Grove</td><td colspan="1"><p>ADC* 1I2C* 1UART* 1</p><p>Digital*3</p></td></tr>
<tr><td colspan="1" rowspan="2"><b>Botón</b></td><td colspan="1">USER</td><td colspan="1">Botón Configurable</td></tr>
<tr><td colspan="1">RESET</td><td colspan="1">Reset</td></tr>
<tr><td colspan="1"><b>Exterior FLASH Memory</b></td><td colspan="2">4M</td></tr>
<tr><td colspan="3"><b>LoRa® y posicionamiento (Semtech LR1110)</b></td></tr>
<tr><td colspan="1"><b>Protocolo LoRaWAN®</b></td><td colspan="2">V1.0.4</td></tr>
<tr><td colspan="1"><b>Frecuencias</b></td><td colspan="2">863&#126;928MHz</td></tr>
<tr><td colspan="1"><b>Sensitividad</b></td><td colspan="2"><p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p></td></tr>
<tr><td colspan="1"><b>Potencia de Salida</b></td><td colspan="2">20dBm max @LoRa®</td></tr>
<tr><td colspan="1"><b>Tecnología de Posicionamiento</b></td><td colspan="2">GNSS(GPS/BeiDou), WiFi Sniffer</td></tr>
<tr><td colspan="1"><b>Range</b></td><td colspan="2">2&#126;10km (Depende de la antena y el ambiente)</td></tr>
<tr><td colspan="3"><b>Bluetooth(Nordic nRF52840)</b></td></tr>
<tr><td colspan="1"><b>Bluetooth</b></td><td colspan="2">Bluetooth 5.3</td></tr>
<tr><td colspan="1"><b>Flash</b></td><td colspan="2">1MB</td></tr>
<tr><td colspan="1"><b>RAM</b></td><td colspan="2">256KB</td></tr>
<tr><td colspan="1"><b>Protocolo</b></td><td colspan="2">Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT y 2.4 GHz proprietary stacks</td></tr>
<tr><td colspan="1"><b>Potencia de Salida</b></td><td colspan="2">6dBm max @Bluetooth</td></tr>
<tr><td colspan="3"><b>Sensores integrados -- TH Sensor (SHT41)</b></td></tr>
<tr><td colspan="1"></td><td colspan="1"><b>Rango</b></td><td colspan="1"><b>Precisión</b></td></tr>
<tr><td colspan="1"><b>Temperatura</b></td><td colspan="1">-40&#126;85°C</td><td colspan="1">± 0.2°C</td></tr>
<tr><td colspan="1"><b>Humedad</b></td><td colspan="1">0&#126;100%RH</td><td colspan="1">±1.8%RH</td></tr>
<tr><td colspan="3"><b>Sensores integrados -- 3-Axis Accelerometro( No usado )</b></td></tr>
<tr><td colspan="1"><b>Rango</b></td><td colspan="2">±2g, 4g, 8g, 16g</td></tr>
<tr><td colspan="1"><b>Ancho de Banda</b></td><td colspan="2">0.5Hz &#126; 625Hz</td></tr>
<tr><td colspan="1"><b>Sensitividad (LSB/g)</b></td><td colspan="2">1000 (±2g) &#126; 83 (±16g)</td></tr>
</table>



## Grove - OLED Display 0.96 inch

| **Power Voltage (VCC)** | 3.3 / 5 V |
| ----------------------- | --------- |
| **Driver IC**           | SSD1308Z  |
| **Display Color**       | White     |
| **Dot Matrix**          | 128 × 64  |
| **Panel Size**          | 26.7 (W) × 19.26 (H) mm |
| **Active Area**         | 21.74 (W) × 11.175 (H) mm |
| **Dot Pitch**           | 0.17 (W) × 0.175 (H) mm  |
| **Dot Size**            | 0.15 (W) × 0.15 (H) mm   |
| **Operating Temperature Range** | -20 &#126; 70 ℃ |


## Primeros Pasos

### Conexiones de Hardware

Conecta el módulo `Grove-GPS` al puerto `UART`. Conecta la pantalla `Grove-OLED Display` al puerto `I2C`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-grove.png" alt="pir" width={800} height="auto" /></p>


Enciende la placa. 


### Configuración

#### Conexiones de Dispositivo

Según el tipo de conexión, elige el cliente más adecuado:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* Descarga la aplicación `Meshtastic`.<br/>

* Selecciona el dispositivo objetivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

* La pantalla mostrará el nombre y el código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

* Ingresa el código y luego haz clic en `Emparejar` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

* Descarga la aplicación `Meshtastic`.<br/>

* Haz clic en `+` y elige el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

* La pantalla mostrará el nombre y el código PIN

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

* Ingresa el código y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>

<TabItem value="web" label="Web Client">


Abre [Cliente Web](https://client.meshtastic.org/) y haz clic en `Nueva Conexión`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-new.png" alt="pir" width={600} height="auto" /></p>


* **Conectar vía Bluetooth**

 Activa el Bluetooth de tu PC y selecciona la pestaña `Bluetooth` para conectar un nuevo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ble-new.png" alt="pir" width={600} height="auto" /></p>

 Selecciona el dispositivo e ingresa el código PIN que aparece en la pantalla para conectar el dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-ble-pair.png" alt="pir" width={600} height="auto" /></p>

* **Conectar vía Serial**

 Conecta la placa a tu PC y selecciona la pestaña `Serial` para conectar un nuevo dispositivo.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-new.png" alt="pir" width={600} height="auto" /></p>

 Puedes verificar el puerto con el comando:
 ```
 ls /dev/cu.*
 ```
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-connect.png" alt="pir" width={600} height="auto" /></p>


</TabItem>

<TabItem value="cli" label="CLI">


Esta biblioteca provee una interfaz de línea de comandos (CLI) para gestionar la configuración del usuario en nodos Meshtastic y ofrece una API sencilla para enviar y recibir mensajes a través de radios mesh.


</TabItem>
</Tabs>


#### Configuración de Parámetros


Para comenzar a comunicarte a través del mesh, debes configurar tu región. Esta configuración controla qué rango de frecuencia usará tu dispositivo y debe ajustarse según tu ubicación regional.


<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
<TabItem value="web" label="Web Client">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-lora-config.png" alt="pir" width={800} height="auto" /></p>



</TabItem>

<TabItem value="cli" label="CLI">

Ejecuta el siguiente comando, reemplazando `REGION-CODE` con el código de región correspondiente a tu ubicación.

```
meshtastic --set lora.region <REGION-CODE>
```

Por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/cli-region.png" alt="pir" width={600} height="auto" /></p>


</TabItem>
</Tabs>






**Lista de Regiones**

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.


|**Código de Región**|**Descripción**|**Rango de Frecuencia (MHz)**|**Ciclo de Trabajo (%)**|**Límite de Potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin asignar|N/A|N/A|N/A|
|US|Estados Unidos|902\.0 - 928.0|100|30|
|EU\_433|Unión Europea 433MHz|433\.0 - 434.0|10|12|
|EU\_868|Unión Europea 868MHz|869\.4 - 869.65|10|27|
|CN|China|470\.0 - 510.0|100|19|
|JP|Japón|920\.8 - 927.8|100|16|
|ANZ|Australia y Nueva Zelanda|915\.0 - 928.0|100|30|
|KR|Corea|920\.0 - 923.0|100||
|TW|Taiwán|920\.0 - 925.0|100|27|
|RU|Rusia|868\.7 - 869.2|100|20|
|IN|India|865\.0 - 867.0|100|30|
|NZ\_865|Nueva Zelanda 865MHz|864\.0 - 868.0|100|36|
|TH|Tailandia|920\.0 - 925.0|100|16|
|UA\_433|Ucrania 433MHz|433\.0 - 434.7|10|10|
|UA\_868|Ucrania 868MHz|868\.0 - 868.6|1|14|
|MY\_433|Malasia 433MHz|433\.0 - 435.0|100|20|
|MY\_919|Malasia 919MHz|919\.0 - 924.0|100|27|
|SG\_923|Singapur 923MHz|917\.0 - 925.0|100|20|
|LORA\_24|Banda 2\.4 GHz mundial|2400\.0 - 2483.5|100|10|

:::info
**EU_433** y **EU_868** deben respetar una limitación de ciclo de trabajo del 10% por hora, calculado cada minuto en un período móvil de 1 hora. Tu dispositivo dejará de transmitir al alcanzarlo, hasta que se le permita de nuevo.
:::


Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar con la configuración de [opciones adicionales](https://meshtastic.org/docs/configuration/) según tus necesidades.


## Recursos

[Wio Tracker 1110 Dev Board v1.0_SCH](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%201110%20v1.0_SCH_PDF_20230822.pdf)

[Documentación Meshtastic](https://meshtastic.org/docs/introduction/)

[Github - Firmware Meshtastic](https://github.com/meshtastic/firmware/blob/master/boards/wio-tracker-wm1110.json)

[Archivo de carcasa (Impresión 3D)](https://files.seeedstudio.com/products/E24070201/wio%20tracker%20723.stp)

[Archivo de carcasa (Acrílico)](https://files.seeedstudio.com/products/114993370/%E4%BA%9A%E5%85%8B%E5%8A%9B%E5%A4%96%E5%A3%B3%E5%9B%BE%E7%BA%B8.zip)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>