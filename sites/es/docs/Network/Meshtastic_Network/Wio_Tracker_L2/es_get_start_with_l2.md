---
description: Comienza con Wio Tracker L2 Serie. Guía para la instalación del dispositivo, flasheo de firmware y conexión del dispositivo.
title: Comienza con Wio Tracker L2
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /get_started_with_meshtastic_wio_tracker_l2
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l2/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger note
Cuando el dispositivo se encuentre en los estados siguientes, no lo reinicies ni lo apagues manualmente. De lo contrario, el dispositivo podría quedar inservible.

1. No ha finalizado el proceso de transmisión de mensajes
2. Está siendo configurado
:::

## Flashear firmware


Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecciona el dispositivo de destino como `Seeed Wio Tracker L2` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

Enciende el dispositivo, haz clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `Tracker L2`, haz clic y conéctalo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en "Flash". No olvides marcar "Full Erase and Install" si quieres sobrescribir el firmware anterior.

## Primeros pasos


### Cambio de interfaz de usuario


<Tabs>

<TabItem value="1" label="MUI a BaseUI">
Ve a la página Setting **->** Elige `Reboot/Shutdown` **->** Mantén presionado el icono de Bluetooth **->** Haz clic en `OK`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
La ventana emergente de cambio a BaseUI aparece cuando `mantienes presionado` el icono de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

Si solo haces clic en el icono de Bluetooth, entrarás en el modo Bluetooth. Si esto ocurre, mantén presionado el icono de Bluetooth que se muestra en la pantalla y el dispositivo se reiniciará automáticamente a MUI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI a MUI">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Conexión con el teléfono

**Paso 1. Entrar en modo de conexión Bluetooth**

<Tabs>

<TabItem value="3" label="MUI">

Ve a la página `Setting`, haz clic en `Reboot/Shutdown` y luego haz clic en el `icono de Bluetooth`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

:::tip
Cuando uses MUI, primero cambia al modo de emparejamiento Bluetooth antes de emparejar con tu teléfono. De lo contrario, tu teléfono no podrá reconocer tu dispositivo.
:::

El dispositivo se reiniciará entonces en modo Bluetooth. El código de emparejamiento Bluetooth se mostrará en la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

El dispositivo está siempre en modo de emparejamiento Bluetooth, sin necesidad de ninguna operación especial.

</TabItem>
</Tabs>

**Paso 2. Descargar la APP Meshtastic**

[Haz clic aquí](https://meshtastic.org/downloads/) para descargar la APP Meshtastic.

**Paso 3. Emparejar con el dispositivo**

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### Configurar LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencia utiliza tu dispositivo y debe configurarse de acuerdo con tu ubicación regional.

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para ver una lista más completa.

:::info
**EU_868** debe cumplir una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

<Tabs>

<TabItem value="7" label="Configurar en MUI">

Ve a la página `Setting`, haz clic en `LeoR Region`, el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="8" label="Configurar en BaseUI">

Ve a la página `LoRa Info`, haz clic en `Region`, elige la región y luego haz clic en `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BaseUILoRa.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="Configurar en el teléfono">

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

### Uso del mapa

<Tabs>

<TabItem value="10" label="Mapa sin conexión">

**Paso 1. Habilitar GPS**

Necesitas habilitar el GPS para obtener la posición. Esto se puede configurar directamente en el dispositivo `manteniendo presionado el icono de posición`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

También puedes configurarlo en la APP de tu teléfono.

**Paso 2. Preparación de la tarjeta SD**

Necesitas formatear e instalar el mapa en tu tarjeta SD. Para un tutorial detallado sobre el uso de la tarjeta SD, haz clic aquí para verlo.

**Paso 3. Instalar la tarjeta SD**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**Paso 4. Ver el mapa**

Espera a que el mapa se cargue. Después de conectarte correctamente a la red Wi‑Fi y obtener la ubicación, el dispositivo mostrará un mapa sin conexión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="Mapa en línea">

**Paso 1. Habilitar GPS**

Necesitas habilitar el GPS para obtener la posición. Esto se puede configurar directamente en el dispositivo `manteniendo presionado el icono de posición`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

También puedes configurarlo en la APP de tu teléfono.

**Paso 2. Configurar y habilitar Wifi**

Configura el nombre y la contraseña de la red Wifi. Esto se puede hacer directamente en el dispositivo. 

:::tip

La red Wifi conectada debe ser de 2.4G. El Wifi de 5G no puede ser utilizado por el dispositivo.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

El Wifi está deshabilitado cuando la IP de wifi está vacía y el icono de wifi es gris. El Wifi está habilitado cuando se muestra la IP de wifi y el icono de wifi es blanco. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

Mantén presionado el icono `Wifi` para cambiar el estado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>



**Paso 3. Ver el mapa**

Espera a que el mapa se cargue. Después de conectarte correctamente a la red Wi‑Fi y obtener la ubicación, el dispositivo mostrará un mapa en línea.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


## Uso avanzado

### Conectar a través del sitio web

Si quieres enviar mensajes de texto y comunicarte con otros nodos en el sitio web, ahora puedes conectar el dispositivo al [sitio web de Meshtastic](https://client.meshtastic.org/messages/broadcast/0).

  **Paso 1**: Cambiar a BaseUI

  **Paso 2**: Abrir el sitio web

[Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir al sitio web.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  **Paso 3**: Añadir el nuevo dispositivo

    Haz clic en "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Elige el método serie. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Elige ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión tiene éxito, podrás ver el estado del dispositivo directamente en la página web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar GPS

Puedes ajustar el intervalo de actualización y el intervalo de difusión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, por favor activa `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Conexión de sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SensorConnection.png" alt="pir" width={500} height="auto" /></p>

Puedes añadir sensores al dispositivo mediante la interfaz Grove. Los siguientes sensores han sido verificados como compatibles con la interfaz Grove del dispositivo.

<table>
  <tr>
    <th colspan="2">Tipo de sensor</th>
    <th colspan="1">Modelo de sensor</th>
  </tr>
  <tr>
    <td rowspan="4">Sensor ambiental</td>
    <td>Presión</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>Temperatura</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>Temperatura y humedad</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>Temperatura, humedad y presión</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">Otros</td>
    <td>Frecuencia cardíaca y SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>Teclado I2C</td>
    <td>CardKB</td>
  </tr>
</table>

<Tabs>

<TabItem value="ios" label="IOS">

- Habilita Telemetry para obtener datos del sensor. Si quieres mostrar los datos del sensor en la pantalla OLED, habilita `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Habilita Telemetry para obtener datos del sensor. Si quieres mostrar los datos del sensor en la pantalla OLED, habilita `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### Otras funciones

<Tabs>

<TabItem value="12" label="MUI">

<Tabs>

<TabItem value="13" label="Barra de menús">
| Método de interacción | Efecto |
|---|---|
| Pulsación larga en el icono de inicio | Resincronizado |
| Pulsación larga en el icono de lista de nodos | Entra en la página de filtro de nodos |
| Pulsación larga en el icono de ajustes | La pantalla se apaga |

</TabItem>


<TabItem value="15" label="Página de inicio">

| Método de interacción | Efecto |
|---|---|
| Clic en el icono de Mensaje| Navega a la página de mensajes |
| Clic en el icono de Nodo | Navega a la página de nodos |
| Clic en el icono de Reloj| Conmutación Tiempo real/Tiempo de actividad |
| Pulsación larga en el icono LoRa| LoRa TX apagado/encendido|
| Pulsación larga en el icono de Notificación| Notificación habilitada/deshabilitada|
| Clic en el icono de Notificación| Conmutación Sonido/Banner/Sonido y banner|
| Pulsación larga en el icono de GPS| GPS encendido/apagado|
| Pulsación larga en el icono de WiFi| WiFi encendido/apagado|
| Pulsación larga en el icono MQTT| MQTT encendido/apagado|
| Clic en el icono de código QR| Muestra el código QR del dispositivo |

</TabItem>

<TabItem value="16" label="Página de nodos">
| Método de interacción | Efecto |
|---|---|
| Clic en un nodo| Muestra información detallada|
| Pulsación larga en un nodo| Entra en el chat privado|
| Ver la posición de un nodo| Muestra la ubicación del nodo en el mapa|

</TabItem>

<TabItem value="17" label="Página de canales">
Mantén pulsado un canal para deshabilitar/habilitar las notificaciones. Elige y haz clic en un canal para entrar en la ventana de chat.

</TabItem>

<TabItem value="18" label="Página de mensajes">
Mantén pulsado un chat para eliminarlo. Elige y haz clic en un chat para entrar en la ventana de chat.

</TabItem>

<TabItem value="19" label="Página de ajustes">

| Método de interacción | Efecto |
|---|---|
| Nombre corto de usuario | Cambia el nombre corto del dispositivo|
| Nombre largo de usuario | Cambia el nombre largo del dispositivo|
| PIN de pantalla | Establece la contraseña para el arranque del dispositivo |
| PIN de configuración | Establece la contraseña para cambios de configuración |
| Región | Configura la región LoRa|
| Modem Preset| Configura el preset de LoRa |
| Canal | Edita el canal|
| Rol del dispositivo | Configura el rol |
| WiFi | Establece el SSID y la contraseña de WiFi |
| Tiempo de espera de pantalla| Establece el tiempo de espera de la pantalla|
| Brillo de pantalla| Establece el brillo de la pantalla|
| Tema| Cambia el tema entre fondos oscuros y claros |
| Calibración de pantalla | Calibra la pantalla|
| Idioma| Cambia el idioma mostrado|
| Restablecimiento de fábrica | La configuración se restaura a los valores predeterminados |
| Restablecer NodeDB | Los datos de nodos se borran |
| Borrar historial de chat | El historial de chat se borra |
| Reiniciar (icono verde) | El dispositivo se reinicia |
| Apagar (icono rojo) | El dispositivo se apaga |

</TabItem>

<TabItem value="20" label="Herramienta">
| Método de interacción | Efecto |
|---|---|
| Mesh Detector| Muestra los nodos activos detectados |
| Signal Scanner| Muestra el RSSI y SNR del nodo seleccionado |
| Trace Route| Muestra la ruta de enrutamiento del nodo seleccionado |
| Statistic | Muestra información de decodificación de paquetes |
| Packet Log | Muestra el registro del dispositivo|

</TabItem>
</Tabs>

</TabItem>

<TabItem value="13" label="BaseUI">

<Tabs>

<TabItem value="21" label="Inicio">
| Método de interacción | Efecto |
|---|---|
| Seleccionar "Sleep Screen" | Apaga la pantalla temporalmente; se activa con la pulsación del botón de usuario |
| Seleccionar "Send Position" | Anuncia manualmente la posición del dispositivo a los nodos de la malla (acelera el descubrimiento) |

</TabItem>

<TabItem value="23" label="Nodo">

Navega a "Node Action"

| Método de interacción | Efecto |
|---|---|
| Seleccionar "Favorite" | Marca el nodo seleccionado como favorito|
| Seleccionar "Trace Route" | Realiza un trace route al nodo seleccionado |

</TabItem>

<TabItem value="24" label="Posición">
| Método de interacción | Efecto |
|---|---|
| Seleccionar "GPS Toggle" | GPS encendido/apagado|
| Seleccionar "GPS Format" | Cambia el formato de GPS|
| Seleccionar "Compass Headings" | Conmuta entre Dynamic, Fixed y Freeze Heading para "N" |
| Seleccionar "Compass Calibrate" | Inicia una rutina de calibración de brújula de 30 segundos |
</TabItem>

<TabItem value="25" label="LoRa">
| Método de interacción | Efecto |
|---|---|
| Seleccionar "LoRa Region" | Selecciona la región LoRa |
| Seleccionar "Device Role" | Cambia entre roles de dispositivo |
| Seleccionar "Radio Preset" | Elige entre los presets disponibles|

</TabItem>

<TabItem value="26" label="Sistema">
| Método de interacción | Efecto |
|---|---|
| Seleccionar "Notifications" | Habilita/deshabilita los pitidos|
| Seleccionar "Bluetooth Toggle" | Habilita/deshabilita Bluetooth|
| Seleccionar "Reboot/Shutdown" | Reinicia manualmente o apaga el dispositivo|

</TabItem>

</Tabs>

</TabItem>
</Tabs>

## Preguntas frecuentes

### El dispositivo no puede emparejarse con el teléfono vía BLE

- Cuando uses MUI, primero cambia al modo de emparejamiento Bluetooth antes de emparejar con tu teléfono. De lo contrario, tu teléfono no podrá reconocer tu dispositivo. Ve a la página `Setting`, haz clic en `Reboot/Shutdown` y luego haz clic en el `Bluetooth icon`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

- Cuando uses BaseUI, después de configurar y habilitar Wifi, solo podrás conectar tu dispositivo con la app del teléfono a través de la red. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

### El dispositivo no puede conectarse a mi Wifi

- Asegúrate de que te estás conectando a una `2.4g Wifi`. El dispositivo no puede emparejarse con Wifi de 5G. Normalmente el punto de acceso del teléfono se puede ajustar a 2.4g en los ajustes del teléfono. Así que primero puedes probar con el punto de acceso de tu teléfono.

- Habilita Wifi después de configurar el nombre y la contraseña de Wifi.

Wifi está deshabilitado cuando la IP de wifi está vacía y el icono de wifi es gris. Wifi está habilitado cuando se muestra la IP de wifi y el icono de wifi es blanco. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

### El dispositivo se apaga automáticamente

**Descripción**

- Después de encender el dispositivo, se apagará o reiniciará automáticamente al cabo de un rato.
- El registro del puerto serie se ejecuta durante un rato y luego se detiene.

 Esto posiblemente se deba a reiniciar o apagar el dispositivo manualmente y a la fuerza cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

**Solución de problemas**

Necesitas realizar un borrado de la memoria flash y luego volver a flashear el firmware más reciente.

### Restablecimiento de fábrica

Si quieres restaurar la configuración predeterminada, puedes hacer un restablecimiento de fábrica. Hay dos métodos para hacerlo.

<Tabs>

<TabItem value="7" label="Configurar en MUI">

Ve a la página `Setting`, haz clic en `Configure Reset`, elige `Factory Reset` y luego haz clic en `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="pir" width={900} height="auto" /></p>

El dispositivo se reiniciará con la configuración predeterminada.

</TabItem>

<TabItem value="9" label="Configurar en el teléfono">

Haz clic en el botón `Factory Reset` en la App. El dispositivo se reiniciará automáticamente con la configuración de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

</TabItem>

</Tabs>

### Fallo de mensaje directo

#### Restablecer NodeDB

NodeDB es la base de datos local que almacena información sobre los nodos descubiertos en la red Mesh actual. Si te encuentras en una situación en la que no puedes comunicarte con un determinado nodo, puede deberse a que tu NodeDB haya almacenado información desactualizada de ese nodo. Necesitarás actualizarla.

<Tabs>

<TabItem value="7" label="Configurar en MUI">

Ve a la página `Setting`, haz clic en `Configure Reset`, elige `NodedB Reset` y luego haz clic en `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="pir" width={900} height="auto" /></p>

El dispositivo se reiniciará.

</TabItem>

<TabItem value="9" label="Configurar en el teléfono">

Abre la app y conéctate al dispositivo de destino. Ve a **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

</TabItem>
</Tabs>


#### Intercambiar información de usuario

Cada nodo enviará periódicamente su propia información de nodo, lo que permite que otros nodos en la malla lo "vean" y lo "reconozcan". Dos nodos necesitan intercambiar su información de nodo entre sí para poder comunicarse entre ellos. Si no puedes enviar o recibir mensajes privados con otro nodo de la lista, puedes pedirles manualmente que intercambien información en la app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### Regenerar clave privada

Dos nodos necesitan conocer su clave privada entre sí para poder comunicarse mutuamente. Si un nodo sigue fallando en la transmisión de mensajes privados, intenta regenerar la clave privada para él.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

Reinicia el dispositivo defectuoso para que la configuración surta efecto.

:::note
Después de la regeneración de la clave, el otro dispositivo necesita volver a conectarse con el nodo. Por lo tanto, es mejor eliminar el nodo de la lista de nodos del otro dispositivo.
:::

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente.

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con una interferencia mínima.


<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>
