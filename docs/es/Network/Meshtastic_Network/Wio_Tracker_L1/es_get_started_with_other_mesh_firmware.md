---
description: Guía para flashear el firmware MeshCore en el Wio Tracker L1 Pro vía Web USB o arrastrar‑y‑soltar, junto con la configuración de la app para la región LoRa, GPS y envío de mensajes.
title:  Primeros pasos con Meshcore
keywords:
- Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /es/get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 3/2/2026
  author: Michelle Huang
---       


## Flasheo de firmware

### Método 1 vía Web Flasher

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve a [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Elige `Seeed Studio Wio Tracker L1 Pro` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "L1 Pro" o "TinyUSB serial". Luego haz clic en `Erase Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Erase Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego en `Erase Flash` para asegurarte de que has entrado correctamente en DFU.

Si ves "Flashing erase firmware:100%", el dispositivo se ha borrado correctamente.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flashear firmware

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "L1 Pro" o "TinyUSB" serial. Luego haz clic en `Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego en `Flash` para asegurarte de que has entrado correctamente en DFU.

Cuando la barra de progreso esté completamente llena, indica que el flasheo se ha completado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastrar y Soltar

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve a [Meshcore Web Flasher](https://flasher.meshcore.co.uk/). 

Elige `Seeed Studio Wio Tracker L1 Pro` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [click here](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Podrás ver que aparece un disco llamado `TRACKER L1` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que ha aparecido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo `NOT` se reiniciará automáticamente.

#### Flashear firmware

Elige la versión de firmware más reciente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Podrás ver que aparece un disco llamado `TRACKER L1` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que ha aparecido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo NOT se reiniciará automáticamente.

## Configuración

### Encender el dispositivo

Levanta el interruptor de encendido hacia arriba para encenderlo.

:::tip
Si el dispositivo no responde cuando pulsas el botón, por favor cárgalo primero. No uses un cargador de carga rápida.
:::

### Obtener la APP

Descárgala desde Google Store o Apple Store. O [click here](https://meshcore.co.uk/apps.html) para obtener la APP de Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar vía App

Haz clic en `Connect` y elige el dispositivo objetivo. El ID de dispositivo predeterminado es `Meshcore-MAC Address`. La dirección MAC se puede ver en la etiqueta en la parte inferior del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Introduce el código PIN que se muestra en la pantalla del dispositivo y luego haz clic en `Pair` para conectar el dispositivo.

:::tip
Si la conexión falla, abre la lista de Bluetooth de tu teléfono y `forget` o `Unpair` el dispositivo. Luego intenta reconectar de nuevo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias usa tu dispositivo y debe configurarse de acuerdo con tu ubicación regional.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Luego reinicia el dispositivo, de lo contrario la configuración no surtirá efecto.

**Lista de regiones**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868 MHz|869.4 - 869.65|10|27|

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa parameter](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para adaptarlo a tus necesidades.

### Configurar el GPS

Si quieres usar el GPS, por favor actívalo.

Puedes ir a la APP `Position Settings` para activar el GPS. O puedes ir a la página de GPS del dispositivo y pulsar el joystick de cuatro direcciones para encender o apagar el GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### Configurar el zumbador

Pulsa el botón User cuatro veces para controlar el encendido o apagado del zumbador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/UserButton.png" alt="pir" width={500} height="auto" /></p>

## Transmisión de mensajes

Si tienes dos dispositivos compatibles, y no hay muchos usuarios de MeshCore cerca de ti, flashea ambos con el firmware BLE Companion para que puedas usar tus dispositivos para comunicarte con tus amigos y familiares cercanos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### Advert

MeshCore te permite difundir manualmente tu nombre, posición y clave pública de cifrado, que también se firma para evitar suplantaciones. Cuando haces clic en el botón advert, se difunden esos datos por LoRa. MeshCore lo llama un Advert. Hay dos formas de hacer advert, "zero hop" y "flood".

- **Zero hop** significa que tu advert se difunde a cualquiera que pueda oírlo, y eso es todo.
- **Flooded** significa que se difunde y luego es repetido por todos los repetidores que lo oyen.

Puedes enviar advert en la APP. También puedes enviar advert directamente en la página de advert del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### Mensaje público

Después de configurar el LoRa, puedes enviar mensajes en el canal principal. Todas las personas cercanas en la misma banda de frecuencia lo oirán.


### Mensaje privado

Los dos dispositivos solo establecen una conexión cuando ambos han recibido el advert del otro.


## Preguntas frecuentes (FAQ)

### Dispositivo bloqueado (bricked) e instalación del bootloader

**Descripción:**

El dispositivo no responde, no hay LED, no se puede emparejar con tu app. Si encuentras que el dispositivo está completamente muerto después de flashear tu propio firmware, también puedes intentar reinstalar el bootloader.

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de flasheo.
:::

- Paso 1: [Haz clic aquí para descargar el Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Paso 2: Entra en modo DFU

  Haz doble clic en el botón RST para entrar en modo DFU. Aparecerá el disco con el nombre "Tracker L1".

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- Paso 3: Pega el archivo del bootloader

  Sustituye todos los archivos del disco con el archivo de bootloader descargado.

- Paso 4: Flashea el firmware

  Cuando hayas completado los pasos anteriores, puedes seguir este [step](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para flashear el firmware de la aplicación. Es posible que necesites [enter the DFU mode manually](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#no-se-puede-entrar-en-dfu--entrar-en-modo-dfu-manualmente)


### No se puede entrar en DFU y Entrar en modo DFU manualmente

Conecta el dispositivo a tu PC y pulsa dos veces el botón `Reset`. El LED amarillo permanecerá fijo y aparecerá en tu PC una nueva unidad USB llamada `Tracker L1`.

### Salir del modo DFU

Pulsa una vez el botón `User` para salir del modo DFU.

 ### El dispositivo se apaga automáticamente

 #### Descripción

 - Después de que el dispositivo se enciende, se apagará o reiniciará automáticamente después de un tiempo. 
 - El registro del puerto serie funciona durante un tiempo y luego se detiene.

 Esto posiblemente se deba a reiniciar o apagar el dispositivo de forma manual y forzada cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

 #### Solución de problemas

Borrar el firmware mediante Flash Erase

### Restablecimiento de fábrica
Si quieres restaurar la configuración predeterminada, puedes hacer un restablecimiento de fábrica. Hay dos métodos para hacer un restablecimiento de fábrica.

- Borrar el firmware mediante Flash Erase

- Haz clic en el botón `Factory Reset` en la app. El dispositivo se reiniciará automáticamente con la configuración de fábrica. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>


### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Los dispositivos normales suelen funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Se considera que un dispositivo con un RSSI inferior a -115 dBm tiene un rendimiento deficiente.

    Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstrucciones, con una interferencia mínima.

### Antena compatible

Si necesitas un reemplazo de antena para el L1 Pro, [haz clic aquí](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para conseguir una.

## Recursos
- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [Archivo de referencia de impresión 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [Archivo de referencia de impresión 3D (V2 New Four-way Joystick)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [Desafío de diseño de carcasa L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Archivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificación TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificación FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificación CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Prueba de consumo de energía y cálculo de la vida útil de la batería](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
