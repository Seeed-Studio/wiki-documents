---
description: Guía para configurar una pasarela MQTT de Meshtastic usando XIAO ESP32S3 y Wio-SX1262, conectando redes malladas LoRa a internet para el intercambio global de mensajes.
title: Configuración de la pasarela MQTT
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_mqtt
sku: 102010611,113110064
sidebar_position: 1
last_update:
  date: 3/2/2026
  author: Michelle Huang
createdAt: '2026-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_sx1262_kit_mqtt/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Por qué necesitas Meshtastic + mqtt

Integrar MQTT con Meshtastic amplía la comunicación fuera de la red al conectar redes distantes. Esto permite la mensajería global, proporciona un respaldo cuando las señales de la malla son débiles y garantiza una entrega de mensajes más rápida a través de internet. Es perfecto para áreas remotas y situaciones de emergencia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:900, height:'auto'}}/></div>

## Preparación de hardware

Configurar una pasarela Meshtastic requiere un dispositivo que pueda ejecutar tanto LoRa como Wifi. Además, si quieres compartir tu ubicación mediante mqtt, puedes añadir un módulo GPS.

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic & LoRa</th>
<th>Módulo L76K GNSS (opcional)</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver más🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Instalación de hardware

Antes de usar Meshtastic, primero es necesario conectar el dispositivo. Hay dos métodos de conexión. El primero es usar una placa de expansión, y la información correspondiente se mostrará en la pantalla. Luego, la configuración se puede realizar en la plataforma correspondiente según la información reflejada. El segundo es conectar el XIAO y el módulo Wio-SX1262, y usar una herramienta de puerto serie para obtener el ID de nodo y la contraseña.

### Conectado a la batería

El XIAO ESP32S3 tiene un chip de gestión de energía integrado que permite alimentar el XIAO ESP32S3 de forma independiente usando una batería o cargar la batería a través del puerto USB del XIAO ESP32S3.

Si quieres conectar la batería para XIAO, te recomendamos comprar una batería recargable `3.7V lithium` calificada con `protection circuit`. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe ser el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación es el lado más alejado del puerto USB.

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Conectado al SX-1262

El SX-1262 se puede conectar al Xiao ESP32-S3 mediante la interfaz B2B. El SX-1262 utiliza SPI para comunicarse con el Xiao ESP32-S3.
:::warning
El SX-1262 compatible solo se puede comprar dentro del kit.
:::

### (Opcional) Conectado al módulo L76K GNSS

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:600, height:'auto'}}/></div>

## Configuración

### Paso 1 Flashear firmware

**1**: Primero, abre un navegador y visita https://flasher.meshtastic.org/# requiere navegador Chrome o Edge.

**2**: Luego, usa un cable USB adecuado para conectar el dispositivo al PC. Es posible que necesites apagarlo y luego **mantener presionado el botón BOOT** mientras conectas el cable USB.

**3**: Sigue las siguientes instrucciones proporcionadas para realizar las operaciones de flasheo posteriores. Selecciona el Device como "**Seeed XIAO S3**", Firmware como **the lastest** y luego haz clic en "**Flash**". No olvides marcar "**Full Erase and Install**" si quieres sobrescribir el firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

### Paso 2 Comprobar tu Device ID



El Device ID normalmente son los últimos cuatro dígitos de la dirección MAC. Puedes abrir el monitor del puerto serie para comprobarlo.

Conecta el dispositivo mediante un cable USB. Luego [haz clic aquí](https://flasher.meshtastic.org/#) para ir al Meshtastic web flasher. Haz clic en `Open the serial port monitor`. Selecciona el Device como `Seeed XIAO S3` o `Tiny USB XXX`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/OpenSerialPortMonitor.png" style={{width:600, height:'auto'}}/></div>

Comprueba tu Device ID en el registro del puerto serie. Por ejemplo, el registro de abajo indica que el Device ID es 24c0.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/DEviceIDD.png" style={{width:600, height:'auto'}}/></div>

### Paso 3 Conexión de la APP

Abre la app Meshtastic para Android y conéctate a tu dispositivo mediante Bluetooth. El código PIN predeterminado es 123456

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ConnectionESP32S33.png" style={{width:600, height:'auto'}}/></div>

### Paso 4 Configurar la pasarela Mesh-mqtt de Xiao ESP32S3

<Tabs>
<TabItem value="pypi" label="Android">

**1. LoRa Configuration**
- cambia la región de UNSET a tu país/región (por ejemplo, EU868 para Europa, US para EE. UU., etc.).
- Elige `OK to MQTT`
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTLoRaConfiguration.jpg" style={{width:350, height:'auto'}}/></div>

**2. MQTT Configuration**

- Puedes usar los valores predeterminados `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) y `Password`(large4cats). 
- Elige `MQTT Enabled`
- Elige `MQTT Client Proxy Enabled`
- (Opcional) Si quieres que otros usuarios de mqtt te vean en el mapa, selecciona `Map Reporting` y `I agree`.
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTSetting.jpg" style={{width:350, height:'auto'}}/></div>


**3. Chanel Configuration**

- abre `Uplink enabled` y `Downlink enabled` para tu canal principal
- Haz clic en Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UPLINKDOWNLINK.jpg" style={{width:350, height:'auto'}}/></div>


**4. Network Configuration**

Después de esta configuración, tu dispositivo no podrá conectarse a tu APP mediante Bluetooth. Pero podrá conectarse a tu APP mediante la red.

- Rellena el SSID y la contraseña. El wifi que esperas usar debe ser de 2.4G.
- Haz clic en Send
- El dispositivo se reinicia automáticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTNetwork.jpg" style={{width:350, height:'auto'}}/></div> 

</TabItem>

<TabItem value="sou" label="IOS">

**1. LoRa Configuration**
- cambia la región de UNSET a tu país/región (por ejemplo, EU868 para Europa, US para EE. UU., etc.).
- Elige `OK to MQTT`
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTLoRa.png" style={{width:350, height:'auto'}}/></div>

**2. MQTT Configuration**

- Puedes usar los valores predeterminados `MQTT Address`(mqtt.meshtastic.org), `User name`(meshdev) y `Password`(large4cats). 
- Elige `MQTT Enabled`
- Elige `MQTT Client Proxy Enabled`
- (Opcional) Si quieres que otros usuarios de mqtt te vean en el mapa, selecciona `Map Reporting` y `I agree`.
- Haz clic en Send
- El dispositivo se reinicia y se reconecta automáticamente. El dispositivo se reiniciará y reconectará automáticamente. Esto puede tardar de 30 s a 2 min.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTSetting.png" style={{width:350, height:'auto'}}/></div>


**3. Chanel Configuration**

- abre `Uplink enabled` y `Downlink enabled` para tu canal principal
- Haz clic en Send

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMQTTChanel.png" style={{width:350, height:'auto'}}/></div>


**4. Network Configuration**

Después de esta configuración, tu dispositivo no podrá conectarse a tu APP mediante Bluetooth. Pero podrá conectarse a tu APP mediante la red.

- Rellena el SSID y la contraseña. El wifi que esperas usar debe ser de 2.4G.
- Haz clic en Send
- El dispositivo se reinicia automáticamente. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSMTTNestwork.png" style={{width:350, height:'auto'}}/></div> 

</TabItem>
</Tabs>

## Envío de mensajes

Ahora puedes comunicarte con otras personas desde internet. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Message Testing.png" style={{width:600, height:'auto'}}/></div> 

Si tienes otro dispositivo Meshtastic que esté en la misma banda de frecuencia que la pasarela ESP32S3 MQTT, también podrá transmitir mensajes a través del ESP32S3 con otras personas en internet.

