---
description: Tutorial de configuración de la pasarela Meshtastic MQTT basada en Wio-Trcker L2. Permite mensajería global, proporciona un respaldo cuando las señales de malla son débiles y garantiza una entrega de mensajes más rápida a través de Internet.
title: Pasarela MQTT
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png
slug: /set_up_mqtt_gateway_l2
sku: 100029766
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/es/set_up_mqtt_gateway_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por qué necesitas Meshtastic + mqtt

Integrar MQTT con Meshtastic amplía la comunicación fuera de la red al conectar redes distantes. Esto permite mensajería global, proporciona un respaldo cuando las señales de malla son débiles y garantiza una entrega de mensajes más rápida a través de Internet. Es perfecto para zonas remotas y situaciones de emergencia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/mqttworkflow.png" style={{width:900, height:'auto'}}/></div>

## Preparación de hardware

Configurar una pasarela Meshtastic requiere un dispositivo que pueda ejecutar tanto LoRa como Wifi. Además, si quieres compartir la ubicación de tu pasarela a través de mqtt, puedes añadir un módulo GPS.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
</a>
</div>

## Configuración

### Paso 1 Flashear firmware

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecciona el dispositivo de destino como `Seeed Wio Tracker L2` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

Enciende el dispositivo, haz clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `Tracker L2`, haz clic y conéctalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en "Flash". No olvides marcar "Full Erase and Install" si quieres sobrescribir el firmware anterior.

### Paso 2 Comprueba tu ID de dispositivo

<Tabs>
<TabItem value="23" label="Comprueba la parte trasera del dispositivo">
Los `últimos cuatro dígitos` de la dirección MAC son el ID del dispositivo

Por ejemplo, el ID del dispositivo del dispositivo de abajo sería `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="Vía herramienta serie">
Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Haz clic en `Open Serial Monitor`, conecta el dispositivo a tu PC, revisa el registro serie, palabra clave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### Paso 3 Conexión con la APP

<Tabs>

<TabItem value="3" label="MUI">

Ve a la página `Setting`, haz clic en `Reboot/Shutdown`, luego haz clic en el `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

El dispositivo se reiniciará en modo Bluetooth. El código de emparejamiento Bluetooth se mostrará en la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

El dispositivo está siempre en modo de emparejamiento Bluetooth, sin necesidad de ninguna operación especial.

</TabItem>
</Tabs>

[Haz clic aquí](https://meshtastic.org/downloads/) para descargar la APP Meshtastic.

Empareja tu dispositivo con la APP de tu teléfono.

<Tabs>

<TabItem value="5" label="IOS">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código que se muestra en la pantalla y luego haz clic en `Pair` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código que se muestra en la pantalla y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### Paso 4 Configurar la pasarela Mesh-mqtt de Xiao ESP32S3

<Tabs>
<TabItem value="pypi" label="Android">

**1. Configuración LoRa**
- cambia la región de UNSET a tu país/región (por ejemplo, EU868 para Europa, US para EE. UU., etc.).
- Elige `OK to MQTT`
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y se reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. Configuración MQTT**

- Puedes usar los valores predeterminados `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) y `Password`(large4cats). 
- Elige `MQTT Enabled`
- Elige `MQTT Client Proxy Enabled`
- (Opcional) Si quieres que otros usuarios mqtt te vean en el mapa, elige `Map Reporting` y `I agree`.
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y se reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. Configuración de canal**

- abre `Uplink enabled` y `Downlink enabled` para tu canal principal
- Haz clic en Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. Configuración de red**

Después de esta configuración, tu dispositivo no podrá conectarse a tu APP vía Bluetooth. Pero podrá conectarse a tu APP vía red.

- Rellena el SSID (nombre de la Wifi) y la contraseña de la Wifi. La wifi que esperas usar debe ser de 2,4 G.
- Haz clic en Send
- El dispositivo se reinicia automáticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

**5. Conexión con la APP**

Ahora tu dispositivo no puede conectarse vía Bluetooth. Pero puedes conectarte vía red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. Configuración LoRa**
- cambia la región de UNSET a tu país/región (por ejemplo, EU868 para Europa, US para EE. UU., etc.).
- Elige `OK to MQTT`
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y se reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. Configuración MQTT**

- Puedes usar los valores predeterminados `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) y `Password`(large4cats). 
- Elige `MQTT Enabled`
- Elige `MQTT Client Proxy Enabled`
- (Opcional) Si quieres que otros usuarios mqtt te vean en el mapa, elige `Map Reporting` y `I agree`.
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y se reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. Configuración de canal**

- abre `Uplink enabled` y `Downlink enabled` para tu canal principal
- Haz clic en Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. Configuración de red**

Después de esta configuración, tu dispositivo no podrá conectarse a tu APP vía Bluetooth. Pero podrá conectarse a tu APP vía red.

- Rellena el SSID (nombre de la Wifi) y la contraseña de la Wifi. La wifi que esperas usar debe ser de 2,4 G.
- Haz clic en Send
- El dispositivo se reinicia automáticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

**5. Conexión con la APP**

Ahora tu dispositivo no puede conectarse vía Bluetooth. Pero puedes conectarte vía red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTConnect.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## Envío de mensajes

Ahora puedes comunicarte con otras personas desde Internet. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTTest.png" style={{width:600, height:'auto'}}/></div> 

Si tienes otro dispositivo Meshtastic que esté en la misma banda de frecuencia que la pasarela MQTT, también podrá transmitir mensajes a través de la pasarela L2 con otras personas en Internet.

