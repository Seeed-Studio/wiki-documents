---
description: Comienza con SenseCAP MeshTracker X1 para Meshcore. Guía para la instalación del dispositivo, flasheo de firmware y conexión del dispositivo.
title: Comienza con MeshCore
keywords:
  - Tracker
  - Meshtastic
  - GNSS de doble banda
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /sensecap_meshtracker_x1_meshcore
sku: 100087698
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/es/sensecap_meshtracker_x1_meshcore/
---

# Comienza con MeshCore en SenseCAP MeshTracker X1

## Flasheo de firmware


<Tabs>
<TabItem value="111" label="Vía Web Flasher">

Conecta tu dispositivo al ordenador con un cable USB. 

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve al [Meshcore Web Flasher](https://meshcore.io/flasher). 

Elige `Seeed Studio SenseCAP MeshTracker X1` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

**Paso 1 Borrado de Flash**

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "nRF xxx" o "TinyUSB" serial. Luego haz clic en `Erase Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Erase Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Erase Flash` para asegurarte de que has entrado correctamente en DFU.

Si ves "Flashing erase firmware:100%", el dispositivo se ha borrado correctamente.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

**Paso 2 Flashear firmware**

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "nRF xxx" o "TinyUSB" serial. Luego haz clic en `Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Flash` para asegurarte de que has entrado correctamente en DFU.

Cuando la barra de progreso esté completamente llena, indica que el flasheo se ha completado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="222" label="Arrastrar y soltar">
Conecta tu dispositivo al ordenador con un cable USB.

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve al [Meshcore Web Flasher](https://meshcore.io/flasher). 

Elige `Seeed Studio SenseCAP MeshTracker X1` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

**Paso 1 Borrado de Flash**

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

Intenta entrar en modo DFU manualmente: mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el dispositivo al ordenador mediante el cable USB, mantén pulsado el botón hasta que se encienda un LED blanco ⚪️.

:::warning
Para entrar correctamente en el modo DFU, necesitas realizar esta operación rápidamente. Puede que tengas que intentarlo varias veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

Verás que aparece un disco llamado `X1` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco emergente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseDragDisk.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo `NO` se reiniciará automáticamente.

**Paso 2 Flashear firmware**

Elige la última versión de firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/VersionSelection.png" alt="pir" width={500} height="auto" /></p>

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Firmwareuf2.png" alt="pir" width={500} height="auto" /></p>

Intenta entrar en modo DFU manualmente: mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el dispositivo al ordenador mediante el cable USB, mantén pulsado el botón hasta que se encienda un LED blanco ⚪️.

:::warning
Para entrar correctamente en el modo DFU, necesitas realizar esta operación rápidamente. Puede que tengas que intentarlo varias veces.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

Verás que aparece un disco llamado `X1` después de 10~15 s. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco emergente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/UF2FirmwareDrag.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto ya hay firmware en el dispositivo, por lo que el dispositivo se reiniciará automáticamente.

</TabItem>

</Tabs>

## Configuración

### Encender el dispositivo

Pulsa el botón para encenderlo. El LED se encenderá y sonará una melodía ascendente.

### Apagar el dispositivo

Mantén pulsado el botón durante 3 s para apagarlo. El LED se apagará y sonará una melodía descendente.

:::tip
Si el dispositivo no responde cuando pulsas el botón, por favor cárgalo primero. No utilices un cargador de carga rápida.
:::

### Conexión con la APP

Descárgala desde Google Store o Apple Store. O [haz clic aquí](https://meshcore.io/#download) para obtener la APP Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

#
Haz clic en `Connect` y elige el dispositivo de destino. El ID de dispositivo predeterminado es `Meshcore-MAC Address`. La dirección MAC se puede ver en la parte posterior del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Introduce el código PIN predeterminado `123456` y luego haz clic en `Pair` para conectar el dispositivo.

:::tip
Si la conexión falla, abre la lista de Bluetooth de tu teléfono y `forget` o `Unpair` el dispositivo. Luego intenta conectarte de nuevo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes configurar tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe establecerse de acuerdo con tu ubicación regional.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Luego reinicia el dispositivo, de lo contrario la configuración no surtirá efecto.

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868 MHz|869.4 - 869.65|10|27|

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [parámetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para adaptarlo a tus necesidades.


## Configuración avanzada

### Conectar mediante la interfaz web (BLE)

1. Abre la [MeshCore Web App](https://app.meshcore.nz/) y haz clic en el icono **Settings**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={800} height="auto" /></p>

2. Selecciona la pestaña **BLE** y luego haz clic en **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={800} height="auto" /></p>

3. En la ventana emergente de Bluetooth del sistema, selecciona tu dispositivo (por ejemplo, Meshcore-xxxxxx) y haz clic en **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={800} height="auto" /></p>

4. Cuando se te solicite, introduce la clave de acceso Bluetooth predeterminada `123456` y luego haz clic en **OK**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={800} height="auto" /></p>

5. Espera hasta que el estado cambie a conectado y tu nodo aparezca en la interfaz de MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={800} height="auto" /></p>

### Configurar GPS

Si quieres usar GPS, por favor actívalo.

Puedes ir a la APP `Position Settings` para activar el GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>


## Transmisión de mensajes

Si tienes dos dispositivos compatibles, y no hay muchos usuarios de MeshCore cerca de ti, flashea ambos con el firmware BLE Companion para que puedas usar tus dispositivos para comunicarte con tus amigos y familiares cercanos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/MeshCoreFramework.png" alt="pir" width={800} height="auto" /></p>

### Anuncio

MeshCore te permite difundir manualmente tu nombre, posición y clave pública de cifrado, que también se firma para evitar suplantaciones. Cuando haces clic en el botón de anuncio, difunde esos datos por LoRa. MeshCore llama a esto un Anuncio. Hay dos formas de anunciar, "zero hop" y "flood".

- **Zero hop** significa que tu anuncio se difunde a cualquiera que pueda oírlo, y eso es todo.
- **Flooded** significa que se difunde y luego se repite por todos los repetidores que lo escuchan.

Puedes enviar anuncios en la APP. También puedes enviar anuncios directamente en la página de anuncios del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### Mensaje público

Después de configurar LoRa, puedes enviar mensajes en el canal principal. Todas las personas cercanas en la misma banda de frecuencia lo escucharán.


### Mensaje privado

Los dos dispositivos solo establecen una conexión cuando ambos han recibido el anuncio del otro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Preguntas frecuentes (FAQ)

### Atajos de botón

El firmware X1 Companion (v1.18.0+) admite atajos de pulsaciones múltiples en el botón. Cada clic debe realizarse dentro de 0,5 segundos del anterior.

| Acción del botón | Función | Indicador en pantalla |
| --- | --- | --- |
| Pulsación simple | Despertar / actualizar la pantalla | — |
| Doble pulsación | Enviar un Anuncio | `Advert sent!` |
| Triple pulsación | Cambiar el modo de alerta: Zumbido+Vibración → Solo zumbido → Solo vibración → Silencio | `Alerts: ...` |
| Cuádruple pulsación | Activar/desactivar GPS | `GPS: Enabled` / `GPS: Disabled` |
| Pulsación larga 3 s (con cable de carga) | Forzar reinicio / entrar en modo DFU | — |

:::note
- Con una triple pulsación, el nuevo modo de alerta se confirma con un pitido y/o una vibración, para que puedas cambiar de modo sin mirar la pantalla.
- Pulsar el botón 4 o más veces siempre se trata como una cuádruple pulsación.
- Para más detalles sobre el comportamiento de la pulsación larga (reinicio y modo DFU), consulta [How to reboot the device](#how-to-reboot-the-device).
:::

### Cómo comprobar el ID del dispositivo

Los `últimos cuatro dígitos` de la dirección MAC son el ID del dispositivo

Por ejemplo, el ID del dispositivo del dispositivo de abajo sería `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>


### Cómo reiniciar el dispositivo

 Presiona y mantén pulsado el botón, luego conecta el cable de carga y suelta el botón inmediatamente.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260818150011.gif" alt="pir" width={300} height="auto" /></p>

 :::note
  Mantén pulsado el botón, luego conecta el cable de carga y sigue manteniéndolo pulsado durante más de 3 s para forzar que el dispositivo entre en modo DFU.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

   Si quieres salir del modo DFU, simplemente mantén pulsado el botón, luego conecta el cable de carga y suelta el botón inmediatamente.

 :::

## Solución de problemas

### Error en la actualización de firmware / Recuperación OTA

Si tu SenseCAP MeshTracker X1 no se inicia, deja de responder o el LED blanco ⚪️ permanece encendido de forma continua después de una actualización de firmware, es posible que el dispositivo esté atascado en modo DFU. Prueba lo siguiente:

1. Fuerza un reinicio para salir del modo DFU: desconecta el cable de carga USB, mantén pulsado el botón del dispositivo, conecta el cable de carga USB y suelta el botón inmediatamente. No sigas manteniendo pulsado el botón: mantenerlo más de 3 segundos después de conectar el cable forzará que el dispositivo vuelva al modo DFU.
2. Comprueba si el dispositivo se inicia con normalidad. Si no, conecta el dispositivo a tu ordenador con un cable de datos USB y sigue la guía de [Firmware Flashing](#firmware-flashing) para entrar en modo DFU, borrar la memoria flash y reinstalar el firmware MeshCore.
3. Si el dispositivo aún no puede recuperarse, sigue [Bootloader Installation](#bootloader-installation) para volver a flashear el bootloader y luego reinstalar el firmware de la aplicación.

No fuerces un reinicio ni desconectes el cable USB mientras el firmware se está borrando o flasheando. Si el dispositivo no puede entrar en modo DFU o no puede ser detectado por tu ordenador, ponte en contacto con el soporte técnico.

### El dispositivo nunca se enciende

- Usa un cable USB que sepas que funciona para `charge the device` de forma continua durante 1–2 horas para asegurarte de que la batería tiene suficiente energía para despertar el sistema.

- Si el dispositivo sigue sin responder después de la carga, `perform a hard reset` de la siguiente manera: Desconecta el cable USB. Mantén pulsado el botón, luego conecta el cable USB y suelta el botón inmediatamente. Esto fuerza un reinicio del sistema.

 - Si aún así no hay suerte, conecta un cable USB a un ordenador. Mantén pulsado el botón del dispositivo, luego conecta el dispositivo al ordenador y comprueba si aparece o no un disco en tu PC. Si es así, vuelve a instalar el bootloader

### El dispositivo se queda atrapado en un bucle de arranque

**Descripción:**

El dispositivo se reiniciará repetidamente y el puerto serie se conectará y desconectará repetidamente.

**Solución:**

- Paso 1: Intenta entrar en modo DFU manualmente: mantén pulsado el botón del dispositivo y luego conecta **rápidamente** el dispositivo al ordenador mediante un cable USB, mantén pulsado el botón hasta que se encienda un LED blanco ⚪️.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

El dispositivo está en modo DFU si el LED blanco permanece encendido de forma continua.

:::note
Para entrar correctamente en modo DFU, necesitas realizar esta operación rápidamente. Puede que tengas que intentarlo varias veces.
:::

- Paso 2: Borrar la Flash

- Paso 3: Flashear el firmware

### Instalación del bootloader


- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Bootloader.zip)

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** la desconectes durante el proceso de flasheo.
:::

**Paso 1: Instalación de Adafruit-nrfutil**

Para usuarios de Windows, presiona la tecla "Win" y la tecla "r", luego introduce "cmd" en la ventana emergente y haz clic en "Enter". Esto puede abrir la línea de comandos.

Para usuarios de MAC, presiona la tecla "Command" y la tecla "Space", para que puedas abrir Spotlight. Luego introduce "termial" y haz clic en "Return". Esto puede abrir la línea de comandos.

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

Para usuarios de Windows, puede que necesites añadir la ruta manualmente. Copia la ubicación de instalación mostrada en el último paso. Luego añádela como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**Paso 2: Comprueba tu número de puerto**

Conecta tu dispositivo a tu PC y comprueba el número de puerto.

Para usuarios de Windows, abre el administrador de dispositivos y ve a `port`; el número de puerto que aparece tras conectar el dispositivo es el número de puerto del dispositivo.

Para usuarios de Mac, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Para usuarios de Windows, por ejemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Paso 3: Flashear el bootloader**

En la terminal o símbolo del sistema, navega al directorio donde descargaste el paquete zip del bootloader y ejecuta el siguiente comando, sustituyendo el puerto correcto para tu dispositivo:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Por favor cambia COMXX por tu número de COM. Por ejemplo, si tu dispositivo está en com6, cambia el comando a:

`adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Algunos dispositivos cambiarán su número de puerto después de introducir este comando. Así que si la instalación falla, comprueba de nuevo el número de puerto.

- **Para otros**:

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

Cuando hayas completado los pasos anteriores, puedes seguir este [paso](https://wiki.seeedstudio.com/es/sensecap_meshtracker_x1_meshcore/#flasheo-de-firmware) para flashear el firmware de la aplicación.


**2) El dispositivo no puede entrar en modo DFU, pero se puede detectar el puerto serie**.

- Abre una herramienta de puerto serie

- Ajusta la velocidad en baudios a `1200`.

- Conecta el dispositivo.
   La luz parpadeará brevemente cuando lo conectes. Sigue intentándolo hasta que la luz permanezca encendida, lo que significa que el dispositivo puede volver al modo DFU, luego [flashea el bootloader](https://wiki.seeedstudio.com/es/sensecap_meshtracker_x1_meshcore/#instalación-de-bootloader) -> [borra la flash](https://wiki.seeedstudio.com/es/sensecap_meshtracker_x1_meshcore/#flasheo-de-firmware) -> [flashea el firmware](https://wiki.seeedstudio.com/es/sensecap_meshtracker_x1_meshcore/#flasheo-de-firmware).

**3) El dispositivo no puede entrar en modo DFU y no se muestra ningún puerto serie**

- Mantén pulsado el botón del dispositivo, luego conecta el cable de carga y suelta el botón inmediatamente. Después de que aparezca un disco en tu PC, es posible que veas el puerto serie.

- Si aún así no hay suerte, desconecta el cable de carga y deja el dispositivo unos días hasta que la batería se agote por completo, luego conecta el cable de carga e intenta emparejarlo de nuevo.

**4) Si ninguno de los pasos anteriores funciona, ponte en contacto con el soporte técnico: support@sensecapmx.com**

 ### El dispositivo se apaga automáticamente

- **Descripción del fenómeno**

 - Después de encender el dispositivo, se apagará o reiniciará automáticamente al cabo de un rato. 
 - El registro del puerto serie funcionó durante un tiempo y luego se detuvo.

 Esto puede deberse a reiniciar o apagar manualmente y a la fuerza el dispositivo cuando este se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

- **Solución de problemas**

 [Haz clic aquí](https://wiki.seeedstudio.com/es/sensecap_meshtracker_x1_meshcore/#flasheo-de-firmware) para realizar un borrado por flasheo. 


### Calidad de la señal

  - **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

  - **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Se considera que un dispositivo con un RSSI inferior a -115 dBm tiene un rendimiento deficiente. 

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con una interferencia mínima.

### Mapeo de batería

```bash
#define OCV_ARRAY 4290, 4118, 4002, 3889, 3798, 3728, 3677, 3643, 3594, 3500, 3100
```

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
