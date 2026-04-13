---
description: Guía para flashear el firmware MeshCore en el Wio Tracker L1 Pro vía Web USB o arrastrar y soltar, junto con la configuración de la app para la región LoRa, el GPS y el envío de mensajes.
title: Comenzar con MeshCore en Wio Tracker L1 Pro
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/
---

## Flasheo de firmware

### Método 1 vía Web Flasher

Conecta tu dispositivo con un cable USB al ordenador. Asegúrate de que el cable sea compatible con la transmisión de datos.

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve al [Meshcore Web Flasher](https://meshcore.io/flasher).

Elige `Seeed Studio Wio Tracker L1 Pro` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Bluetooth companion se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "L1 Pro" o "TinyUSB serial". Luego haz clic en `Erase Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si ya has hecho clic en `Erase Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Erase Flash` para asegurarte de que has entrado correctamente en DFU.

Si ves "Flashing erase firmware:100%", el dispositivo se ha borrado correctamente.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flashear firmware

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "L1 Pro" o "TinyUSB" serial. Luego haz clic en `Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si ya has hecho clic en `Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Flash` para asegurarte de que has entrado correctamente en DFU.

Cuando la barra de progreso se llene por completo, indicará que el flasheo ha finalizado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastrar y Soltar

Conecta tu dispositivo con un cable USB al ordenador. Asegúrate de que el cable sea compatible con la transmisión de datos.

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve al [Meshcore Web Flasher](https://meshcore.io/flasher).

Elige `Seeed Studio Wio Tracker L1 Pro` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Bluetooth companion se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Podrás ver que aparecerá un disco llamado `TRACKER L1` después de 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que ha aparecido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este momento no hay firmware en el dispositivo, por lo que el dispositivo `NO` se reiniciará automáticamente.

#### Flashear firmware

Elige la versión de firmware más reciente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Podrás ver que aparecerá un disco llamado `TRACKER L1` después de 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco que ha aparecido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este momento no hay firmware en el dispositivo, por lo que el dispositivo NO se reiniciará automáticamente.

## Configuración

### Encender el dispositivo

Levanta el interruptor de encendido hacia arriba para encenderlo.

:::tip
Si el dispositivo no responde cuando presionas el botón, por favor cárgalo primero. No uses un cargador de carga rápida.
:::

### Obtener la APP

Descárgala desde Google Store o Apple Store. O [haz clic aquí](https://meshcore.co.uk/apps.html) para obtener la APP Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar vía App

Haz clic en `Connect` y elige el dispositivo objetivo. El ID de dispositivo predeterminado es `Meshcore-MAC Address`. La dirección MAC se puede ver en la etiqueta en la parte inferior del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Introduce el código PIN que se muestra en la pantalla del dispositivo y luego haz clic en `Pair` para conectar el dispositivo.

:::tip
Si la conexión falla, abre la lista de Bluetooth de tu teléfono y `forget` o `Unpair` el dispositivo. Luego intenta reconectar de nuevo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Conectar vía la interfaz web（BLE）

1. Abre la [MeshCore Web App](https://app.meshcore.nz/) y haz clic en el icono de **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Selecciona la pestaña **BLE** y luego haz clic en **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. En la ventana emergente de Bluetooth del sistema, selecciona tu dispositivo (por ejemplo, MeshCore-xxxxxx) y haz clic en **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. Cuando se te pida, introduce la clave de acceso Bluetooth que aparece en la pantalla del dispositivo y luego haz clic en **OK**. Esta clave no es `123456`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Espera hasta que el estado cambie a conectado y tu nodo aparezca en la interfaz de MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes configurar tu región. Este ajuste controla qué rango de frecuencia usa tu dispositivo y debe establecerse de acuerdo con tu ubicación regional.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Luego reinicia el dispositivo, de lo contrario la configuración no surtirá efecto.

**Lista de regiones**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|No configurado|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868 MHz|869.4 - 869.65|10|27|

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa parameter](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para adaptarla a tus necesidades.

### Configurar GPS

Si quieres usar GPS, por favor actívalo.

Puedes ir a la APP `Position Settings` para habilitar el GPS. O puedes ir a la página de GPS del dispositivo y presionar el joystick de cuatro direcciones para encender o apagar el GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### Configurar el zumbador

Pulsa el botón de usuario cuatro veces para controlar el encendido o apagado del zumbador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

## Transmisión de mensajes

Si tienes dos dispositivos compatibles, y no hay muchos usuarios de MeshCore cerca de ti, flashea ambos con el firmware BLE Companion para que puedas usar tus dispositivos para comunicarte con tus amigos y familiares cercanos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### Anuncio

MeshCore te permite transmitir manualmente tu nombre, posición y clave pública de cifrado, que también está firmada para evitar suplantaciones. Cuando haces clic en el botón de anuncio, transmite esos datos a través de LoRa. MeshCore llama a esto un Anuncio. Hay dos formas de anunciar, "cero saltos" y "inundación".

- **Cero saltos** significa que tu anuncio se transmite a cualquiera que pueda oírlo, y eso es todo.
- **Inundado** significa que se transmite y luego se repite por todos los repetidores que lo oyen.

Puedes enviar anuncios en la APP. También puedes enviar anuncios directamente en la página de anuncios del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### Mensaje público

Después de configurar LoRa, puedes enviar mensajes en el canal principal. Todas las personas cercanas en la misma banda de frecuencia lo escucharán.

### Mensaje privado

Los dos dispositivos solo establecen una conexión cuando ambos han recibido el anuncio del otro.

## Preguntas frecuentes

### Dispositivo bloqueado e instalación del bootloader

**Descripción:**

El dispositivo no responde, no hay LED, no se puede enlazar con tu aplicación. Si encuentras que el dispositivo está completamente muerto después de grabar tu propio firmware, también puedes intentar reinstalar el bootloader.

:::danger note
Cuando estés grabando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de grabación.
:::

- Paso 1: [Haz clic aquí para descargar el Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Paso 2: Entra en modo DFU

  Haz doble clic en el botón RST para entrar en modo DFU. Aparecerá el disco con el nombre "Tracker L1".

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- Paso 3: Pega el archivo del bootloader

  Sustituye todos los archivos del disco con el archivo de bootloader descargado.

- Paso 4: Graba el firmware

  Cuando hayas completado los pasos anteriores, puedes seguir este [paso](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#borrado-de-flash-1) para grabar el firmware de la aplicación. Puede que necesites [entrar en modo DFU manualmente](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#incapaz-de-entrar-en-dfu--entrar-en-el-modo-dfu-manualmente)

### Incapaz de entrar en DFU y entrar en modo DFU manualmente

Conecta el dispositivo a tu PC y pulsa dos veces el botón `Reset`. El LED amarillo permanecerá encendido de forma fija y aparecerá en tu PC una nueva unidad USB llamada `Tracker L1`.

### Salir del modo DFU

Pulsa el botón `User` una vez para salir del modo DFU.

### El dispositivo se apaga automáticamente

#### Descripción

- Después de encender el dispositivo, se apagará o reiniciará automáticamente al cabo de un tiempo.
- El registro del puerto serie funcionó durante un tiempo y luego se detuvo.

 Esto puede estar causado por reiniciar o apagar el dispositivo manualmente y a la fuerza cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

#### Solución de problemas

[Borrado de Flash](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#borrado-de-flash-1) del firmware

### Restablecimiento de fábrica

Si deseas restaurar la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para que puedas realizar un restablecimiento de fábrica.

- [Borrado de Flash](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#borrado-de-flash-1) del firmware

- Haz clic en el botón `Factory Reset` en la aplicación. El dispositivo se reiniciará automáticamente con la configuración de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Los dispositivos normales suelen funcionar por encima de -7 dB. Un dispositivo con una SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Se considera que un dispositivo con un RSSI inferior a -115 dBm tiene un rendimiento deficiente.

    Para conseguir el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con la mínima interferencia posible.

### Antena compatible

Si necesitas un reemplazo de antena para el L1 Pro, [haz clic aquí](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para conseguir una.

## Recurso

- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [Archivo de referencia de impresión 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [Archivo de referencia de impresión 3D (V2 Nuevo joystick de cuatro direcciones)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafío de diseño de carcasa L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Archivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificación TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificación FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificación CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Prueba de consumo de energía y cálculo de la duración de la batería](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
