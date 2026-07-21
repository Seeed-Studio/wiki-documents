---
description: Comienza con SenseCAP MeshTracker X1 para Meshtastic. Este tutorial presentará la guía de configuración y la guía de preguntas frecuentes para el dispositivo
title: Comienza con MeshTracker X1
keywords:
  - Rastreador
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1First.png
slug: /x1_get_started_for_meshtastic
sku: 100087698
sidebar_position: 1
last_update:
  date: 7/13/2026
  author: Michelle Huang
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
Cuando el dispositivo se encuentre en los estados siguientes, no lo reinicies manualmente ni lo apagues. De lo contrario, el dispositivo puede quedar inutilizable.
1. No ha finalizado el proceso de transmisión de mensajes
2. Está siendo configurado
:::


## Comenzar


### Encender el dispositivo

Pulsa una vez para encender el dispositivo. Sonará una melodía ascendente y el LED verde 🟢 permanecerá encendido durante aproximadamente 1 s.

:::tip
Si el dispositivo no responde cuando pulsas el botón, cárgalo primero. No utilices un cargador de carga rápida.
::: 

### Apagar el dispositivo

Mantén pulsado el botón durante más de 5 s. El dispositivo se apagará después de tres pitidos del zumbador.

### Conectar mediante la App

Descarga la App `Meshtastic`:

- [IOS App](https://apps.apple.com/us/app/meshtastic/id1586432531)
- [Android App](https://play.google.com/store/apps/details?id=com.geeksville.mesh&referrer=utm_source=downloads-page)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `Pair` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1PinCodee.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe configurarse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para obtener una lista más completa.

:::info
**EU_868** debe cumplir una limitación de ciclo de trabajo por hora del 10 %, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

### Estado del dispositivo

<table>
  <tr>
    <th colspan="2">Estado de la luz</th>
    <th colspan="1">Estado del dispositivo</th>
  </tr>
  <tr>
    <td rowspan="4">🟢green</td>
    <td>Constante</td>
    <td>Dispositivo encendiéndose</td>
  </tr>
  <tr>
    <td>Parpadeo rápido </td>
    <td>Funcionando normalmente</td>
  </tr>
  <tr>
    <td>Parpadeo lento </td>
    <td>Cargando</td>
  </tr>
 <tr>
    <td>Constante</td>
    <td>Totalmente cargado</td>
  </tr>
  <tr>
    <td>🔴Red</td>
    <td>Parpadeando</td>
    <td>Batería baja</td>
  </tr>
    <tr>
    <td>⚪️white</td>
    <td>Constante</td>
    <td>Modo DFU/Modo bootloader</td>
  </tr>
</table>

### Control del botón

<table>
  <tr>
    <th colspan="1">Control del botón</th>
    <th colspan="1">Respuesta del dispositivo</th>
  </tr>
  <tr>
   <td>Pulsar una vez (apagado)</td>
    <td>Dispositivo encendiéndose</td>
  </tr>
  <tr>
   <td>Pulsación larga durante 5 s</td>
    <td>Dispositivo apagándose</td>
  </tr>
  <tr>
    <td>Doble clic</td>
    <td>Difundir ID de nodo y posición</td>
  </tr>
  <tr>
    <td>Triple clic</td>
    <td>Encender/apagar GPS</td>
  </tr>
  <tr>
    <td>Cuatro clics</td>
    <td>Encender/apagar temporalmente el zumbador</td>
  </tr>
</table>

## Flashear firmware

:::caution note
Por favor, `don't use OTA` para actualizar el firmware, ya que puede hacer que el dispositivo quede completamente inutilizable. Para información detallada, por favor [haz clic aquí](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/ota/)
:::
#### Paso 1: Entrar en modo DFU

Entra en DFU a través del web flasher. Si esto falla muchas veces, entra en DFU manualmente.

<Tabs>
<TabItem value="method1" label="Via Web Flasher">

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecta el dispositivo a tu PC, selecciona el dispositivo como `SenseCAP Mesh Tracker X1` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SelectX1111.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `X1 xxx`. Haz clic y conéctalo. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SerialSelectionX111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Manually Enter">

Conecta el cable USB a tu PC, mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el cable de carga dos veces.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

El LED blanco ⚪️ permanecerá fijo si el X1 está en modo DFU. Y debería aparecer una unidad llamada `X1` en tu ordenador.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1DriveMAC.png" alt="pir" width={300} height="auto" /></p>

#### Paso 2: Borrado de la memoria flash

Antes de flashear el firmware, ¡bórralo primero!

Haz clic en el símbolo de `trash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/EraseX11.png" alt="pir" width={800} height="auto" /></p>

Descarga el firmware de borrado y cópialo en la unidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashFirmwareX11.png" alt="pir" width={800} height="auto" /></p>

Este proceso puede llevar algo de tiempo; espera a que la unidad desaparezca.

#### Paso 3: Flashear firmware

Selecciona el firmware más reciente y descarga el archivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashClick.png" alt="pir" width={800} height="auto" /></p>

Copia el archivo UF2 en la unidad DFU. El firmware debería flashearse después de que se copie el archivo y el dispositivo se reinicie.

## Tutorial avanzado

### Configurar GPS

Por favor, activa el GPS. Puedes ajustar el intervalo de actualización y el intervalo de difusión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, por favor activa la `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Conectar mediante el sitio web

Si quieres enviar mensajes de texto y comunicarte con otros nodos en el sitio web, ahora puedes conectar el dispositivo al [sitio web de Meshtastic](https://client.meshtastic.org/messages/broadcast/0). 

  Paso 1: Abrir el sitio web

    [Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir al sitio web.

  Paso 2: Añadir el nuevo dispositivo 

    Haz clic en "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Hay dos formas de conectar. Puedes elegir el método que prefieras.

<Tabs>

<TabItem value="11" label="Bluetooth">


    Elige Bluetooth. Elige el ID del dispositivo en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="12" label="Serial">

    Elige el método serie. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Elige ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>
</Tabs>

  Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión tiene éxito, podrás ver el estado del dispositivo directamente en el sitio web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Websitestatus.png" alt="pir" width={300} height="auto" /></p>

### Configurar sensor

|Sensor|Descripción|
|-|-|
|Presión|✅|
|Sensor de 6 ejes (versión futura)|✅|
|Sensor de 3 ejes (versión futura)|✅|

**Configuración del zumbador y LED**

||Tipo|PIN de salida|
|-|-|-|
|Zumbador|Zumbador PWM|25|
|LED|RGB|R:03<br/>G:24<br/>B:28|
|Vibra|-|05|

<Tabs>
<TabItem value="ios" label="IOS App">

Ve a `Settings` -> `External Notification` -> Activa `GPIO` -> Configura `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicación Android">

Ve a `Settings` -> `External Notification` -> Habilita `GPIO` -> Configura `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

Consulta [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) para más detalles.

:::tip
Después de actualizar la configuración del dispositivo, este se reiniciará, lo que puede llevar algún tiempo.
:::

### Configurar tono de llamada

Ve a `Settings` -> `Ringtone Config`, luego introduce la cadena de tono RTTTL que quieras usar para las notificaciones externas.

<Tabs>
<TabItem value="ios" label="Aplicación IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000E20260410.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicación Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="The Legend of Zelda: Item Get">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="Super Mario Theme (Short)">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="Mario Coin">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia Ringtone">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="Mario Power-Up">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="Morse Code CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

### Configurar zumbador

El zumbador está habilitado de forma predeterminada. Si quieres deshabilitar el zumbador, configura `Alert Message buzzer`, `Alert bell buzzer` y `Use PWM buzzer` como se muestra en la siguiente captura de pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

### Configurar alerta de mensajes

La alerta de mensajes se puede configurar en `External Notification`.

<Tabs>

<TabItem value="aaa" label="IOS">

Ve a `Setting` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ExternalNotificationIOS.png" alt="pir" width={300} height="auto" /></p>

Puedes configurar `buzzer off + vibra off`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IONotificationOff.png" alt="pir" width={600} height="auto" /></p>

O `buzzer on + vibra on`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IOSNotificationOn.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="bbb" label="Android">

Ve a `Setting` -> `Module Configuration` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Module_Notification_Android.png" alt="pir" width={600} height="auto" /></p>

Habilita `External notification enabled`, luego puedes configurar `buzzer only`, `vibra only` o `buzzer on + vibra on`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/NotificationSettingConfig.png" alt="pir" width={900} height="auto" /></p>

Deshabilita `External notification enabled`, luego puedes configurar `buzzer off + vibra off`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Notificationoff.jpg" alt="pir" width={300} height="auto" /></p>


</TabItem>

</Tabs>

## Preguntas frecuentes


### Cómo comprobar el ID del dispositivo

<Tabs>
<TabItem value="23" label="Comprobar la parte trasera del dispositivo">
Los `últimos cuatro dígitos` de la dirección MAC son el ID del dispositivo

Por ejemplo, el ID del dispositivo del dispositivo de abajo sería `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="A través de herramienta serie">
Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Haz clic en `Open Serial Monitor`, conecta el dispositivo a tu PC, revisa el registro serie, palabra clave `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### Cómo reiniciar el dispositivo

 Mantén pulsado el botón y luego conecta el cable de carga.

## Solución de problemas

### El dispositivo nunca se enciende

- El dispositivo puede parecer apagado cuando el indicador LED y el zumbador no están activados. Antes de realizar los pasos anteriores, se recomienda `comprobar los siguientes parámetros`:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- Usa un cable USB que sepas que funciona para `cargar el dispositivo` de forma continua durante 1–2 horas para asegurarte de que la batería tenga suficiente energía para activar el sistema.

- Si el dispositivo sigue sin responder después de la carga, `realiza un restablecimiento completo` de la siguiente manera: Desconecta el cable USB. Mantén pulsado el botón y luego conecta el cable USB mientras mantienes pulsado el botón. Manténlo durante aproximadamente 3 segundos y luego suéltalo. Esto fuerza un reinicio del sistema.

 - Si aún así no hay suerte, conecta un cable USB a un ordenador. Mantén pulsado el botón del dispositivo y luego conecta el dispositivo al ordenador, comprueba si aparece o no un disco en tu PC. Si es así, vuelve a instalar el bootloader

### El dispositivo se queda atascado en un bucle de arranque

**Descripción:**

El dispositivo se reiniciará repetidamente y el puerto serie se conectará y desconectará repetidamente.

**Solución:**

- Paso 1: Intenta entrar en modo DFU manualmente: mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el cable de carga dos veces

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

El dispositivo está en modo DFU si el LED blanco permanece encendido de forma fija.

:::note
Para entrar correctamente en el modo DFU, debes realizar esta operación rápidamente. Puede que necesites intentarlo varias veces.
:::

- Paso 2: Borrar la Flash

- Paso 3: Flashear el firmware

### Instalación del bootloader


<Tabs>

<TabItem value="m2" label="Instalar desde Adafruit-nrfutil">


- [Descarga del bootloader](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/mesh_tracker_x1_bootloader-0.10.0-13.zip)

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de flasheo.
:::

**Paso 1: Instalación de Adafruit-nrfutil**

Para usuarios de Windows, pulsa la tecla "Win" y la tecla "r", luego introduce "cmd" en la ventana emergente y haz clic en "Enter". Esto puede abrir la línea de comandos. 

Para usuarios de MAC, pulsa la tecla "Command" y la tecla "Space", para que puedas abrir Spotlight. Luego introduce "termial" y haz clic en "Return". Esto puede abrir la línea de comandos. 

**Requisitos previos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Comprueba en tu línea de comandos si Python y pip se han instalado correctamente.

```
python --version
```

```
python -m pip --version
```

Entonces deberían aparecer "Python xxx" y "pip xxx". Si no es así, intenta instalar Python de nuevo.

Este es el método recomendado para instalar la última versión:

```
pip3 install --user adafruit-nrfutil
```

Comprueba la ruta de instalación:

```
python -m pip show adafruit-nrfutil
```

Esta es la ubicación de instalación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, puede que necesites añadir la ruta manualmente. Copia la ubicación de instalación mostrada en el último paso. Luego añádela como se indica a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**Paso 2: Comprueba tu número de puerto**

Conecta tu dispositivo a tu PC y comprueba el número de puerto.

Para usuarios de Windows, abre el administrador de dispositivos y ve a `port`; el número de puerto que aparece tras la conexión del dispositivo es el número de puerto del dispositivo.

Para usuarios de Mac, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Paso 3: Flashear el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Cambia COMXX por tu número de COM. Por ejemplo, si tu dispositivo está en com6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de introducir este comando. Así que si la instalación falla, comprueba de nuevo el número de puerto.

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, puedes seguir este [paso](https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/#flash-firmware) para flashear el firmware de la aplicación.

</TabItem>

<TabItem value="m3" label="Install from Source">


Utiliza este método si tienes problemas instalando con PyPi o si quieres modificar la herramienta. Primero clona este repositorio y entra en su carpeta.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Nota: Los siguientes comandos usan `python3`; sin embargo, si estás en Windows, puede que necesites cambiarlo a `python` ya que la instalación de Windows de Python 3.x todavía usa el nombre python.exe

Para instalar en el espacio de usuario en tu directorio personal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Si obtienes errores de permisos al ejecutar `pip3 install`, tu `pip3` es antiguo o está configurado para intentar instalar en los directorios del sistema. En ese caso, usa la bandera `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Si quieres instalar en los directorios del sistema (generalmente no recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para generar un binario ejecutable autónomo de la utilidad (Windows y MacOS), ejecuta estos comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Encontrarás el .exe en `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (con `.exe` si estás en Windows).
Cópialo o muévelo a otro lugar para tu comodidad, como un directorio en tu %PATH%.

**Paso 2: Comprueba tu número de puerto**

Conecta tu dispositivo a tu PC y comprueba el número de puerto.

Para usuarios de Windows, abre el administrador de dispositivos y ve a "port"; el número de puerto que aparece tras la conexión del dispositivo es el número de puerto del dispositivo.

Para usuarios de Mac, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Paso 3: Flashea el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Por favor, cambia COMXX por tu número de COM. Por ejemplo, si tu dispositivo está en com6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de que introduzcas este comando. Así que si la instalación falla, comprueba de nuevo el número de puerto.

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, puedes seguir este [paso](https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/#flash-firmware) para flashear el firmware de la aplicación.

</TabItem>
</Tabs>


**2) El dispositivo no puede entrar en modo DFU, pero se puede detectar el puerto serie**.

- Abre una herramienta de puerto serie

- Ajusta la velocidad en baudios a `1200`.

- Conecta el dispositivo.
   La luz parpadeará brevemente cuando lo conectes. Sigue intentándolo hasta que la luz permanezca encendida, lo que significa que el dispositivo puede volver al modo DFU, luego [flashea el bootloader](https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/#bootloader-installation) -> [borra la flash](https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/#step-2-flash-erase) -> [flashea el firmware](https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/#step-3-flash-firmware).

**3) El dispositivo no puede entrar en modo DFU y no se muestra ningún puerto serie**

- Mantén pulsado el botón del dispositivo y luego conecta el cable de carga. Después de que aparezca un disco en tu PC, es posible que veas el puerto serie.

- Si aún así no hay suerte, desconecta el cable de carga y deja el dispositivo unos días hasta que la batería se agote por completo, luego conecta el cable de carga e intenta emparejarlo de nuevo.

**4) Si ninguno de los pasos anteriores funciona, contacta con el soporte técnico: support@sensecapmx.com**

 ### El dispositivo se apaga automáticamente

- **Descripción del fenómeno**

 - Después de encender el dispositivo, se apagará o reiniciará automáticamente al cabo de un rato. 
 - El registro del puerto serie funcionó durante un tiempo y luego se detuvo.

 Esto posiblemente se deba a reiniciar o apagar manualmente y a la fuerza el dispositivo cuando este se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

- **Solución de problemas**

 [Haz clic aquí](https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/#step-2-flash-erase) para realizar un borrado de la flash. 

 ### Restablecimiento de fábrica
Si quieres restaurar la configuración predeterminada, puedes hacer un restablecimiento de fábrica. Hay dos métodos para que realices el restablecimiento de fábrica.

- [Haz clic aquí](https://wiki.seeedstudio.com/es/x1_get_started_for_meshtastic/#step-2-flash-erase) para borrar la flash del dispositivo y luego volver a flashear el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la app. El dispositivo se reiniciará automáticamente con la configuración de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Fallo de mensaje directo

#### Restablecer NodeDB

NodeDB es la base de datos local que almacena información sobre los nodos descubiertos en la red Mesh actual. Si te encuentras en una situación en la que no puedes comunicarte con un determinado nodo, podría deberse a que tu nodeDB ha almacenado información obsoleta de ese nodo. Necesitarás actualizarla.

Abre la app y conéctate al dispositivo de destino. Ve a **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

#### Intercambiar información de usuario

Cada nodo enviará periódicamente su propia información de nodo, lo que permite que otros nodos en la malla lo "vean" y lo "reconozcan". Dos nodos necesitan intercambiar su información de nodo entre sí para poder comunicarse entre ellos. Si no puedes enviar o recibir mensajes privados con otro nodo de la lista, puedes pedirles manualmente que intercambien información en la app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### Regenerar clave privada

Dos nodos necesitan conocer su clave privada entre sí para poder comunicarse entre ellos. Si un nodo sigue fallando en la transmisión de mensajes privados, intenta regenerar la clave privada para él.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

Reinicia el dispositivo defectuoso para que la configuración surta efecto.

:::note
Después de la regeneración de la clave, otros dispositivos necesitan volver a conectarse con el nodo. Por lo tanto, es mejor eliminar el nodo de la lista de nodos del otro dispositivo.
:::

### Calidad de la señal

  - **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

  - **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Se considera que un dispositivo con un RSSI inferior a -115 dBm tiene un rendimiento deficiente. 

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con una interferencia mínima.

## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
