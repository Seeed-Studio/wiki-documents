---
description: Guía para flashear el firmware MeshCore en el Wio Tracker L1 Pro mediante Web USB o arrastrar y soltar, junto con la configuración de la app para la región LoRa, GPS y envío de mensajes.
title: Primeros pasos con MeshCore en Wio Tracker L1 Pro
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Flasheo de firmware

### Método 1 mediante Web Flasher

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos.

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve al [Meshcore Web Flasher](https://meshcore.io/flasher).

Elige `Seeed Studio Wio Tracker L1 Pro` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "L1 Pro" o "TinyUSB serial". Luego haz clic en `Erase Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Erase Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Erase Flash` para asegurarte de que has entrado correctamente en DFU.

Si ves "Flashing erase firmware:100%", el dispositivo se ha borrado correctamente.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Flashear firmware

Haz clic en `Enter DFU Mode`, elige el puerto serie llamado "L1 Pro" o "TinyUSB" serial. Luego haz clic en `Flash` y elige el puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Si has hecho clic en `Flash` pero no hay respuesta, haz clic en `Enter DFU` de nuevo y luego haz clic en `Flash` para asegurarte de que has entrado correctamente en DFU.

Cuando la barra de progreso esté completamente llena, indica que el flasheo ha finalizado. Entonces el dispositivo se reiniciará automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastrar y Soltar

Conecta tu dispositivo al ordenador con un cable USB. Asegúrate de que el cable admite transmisión de datos.

:::warning
Mantén el cable USB conectado durante la transmisión de datos, de lo contrario el dispositivo puede dañarse.
:::

Ve al [Meshcore Web Flasher](https://meshcore.io/flasher).

Elige `Seeed Studio Wio Tracker L1 Pro` en el grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Elige `Companion Bluetooth`. Los dispositivos flasheados con el firmware Companion Bluetooth se pueden conectar a la APP. Si quieres flashear otro firmware, por favor [haz clic aquí](https://docs.meshcore.io/) para ver el tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Borrado de la Flash

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Podrás ver que aparece un disco llamado `TRACKER L1` después de 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco emergente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo `NO` se reiniciará automáticamente.

#### Flashear firmware

Elige la versión de firmware más reciente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Descarga el archivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el botón RST para entrar manualmente en el modo DFU. Podrás ver que aparece un disco llamado `TRACKER L1` después de 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 descargado al disco emergente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

El disco desaparecerá después de que el firmware se haya flasheado correctamente. En este punto no hay firmware en el dispositivo, por lo que el dispositivo NO se reiniciará automáticamente.

## Configuración

### Encender el dispositivo

Levanta el interruptor de encendido hacia arriba para encenderlo.

:::tip
Si el dispositivo no responde cuando pulsas el botón, por favor cárgalo primero. No utilices un cargador de carga rápida.
:::

### Obtener la APP

Descárgala desde Google Store o Apple Store. O [haz clic aquí](https://meshcore.io/#download) para obtener la APP Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar mediante la App

Haz clic en `Connect` y elige el dispositivo de destino. El ID de dispositivo predeterminado es `Meshcore-MAC Address`. La dirección MAC se puede ver en la etiqueta en la parte inferior del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Introduce el código PIN que se muestra en la pantalla del dispositivo y luego haz clic en `Pair` para conectar el dispositivo.

:::tip
Si la conexión falla, abre la lista de Bluetooth de tu teléfono y `forget` o `Unpair` el dispositivo. Luego intenta reconectar de nuevo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Conectar mediante la interfaz web（BLE）

1. Abre la [MeshCore Web App](https://app.meshcore.nz/) y haz clic en el icono **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Selecciona la pestaña **BLE** y luego haz clic en **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. En la ventana emergente de Bluetooth del sistema, selecciona tu dispositivo (por ejemplo, MeshCore-xxxxxx) y haz clic en **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. Cuando se te solicite, introduce la clave de acceso Bluetooth que se muestra en la pantalla del dispositivo y luego haz clic en **OK**. Esta clave de acceso no es `123456`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Espera hasta que el estado cambie a conectado y tu nodo aparezca en la interfaz de MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe configurarse de acuerdo con tu ubicación regional.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Luego reinicia el dispositivo, de lo contrario la configuración no surtirá efecto.

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868 MHz|869.4 - 869.65|10|27|

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [parámetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para adaptarlo a tus necesidades.

### Configurar el GPS

Si quieres usar GPS, por favor actívalo.

Puedes ir a `Position Settings` en la APP para activar el GPS. O puedes ir a la página de GPS del dispositivo y pulsar el joystick de cuatro direcciones para encender o apagar el GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### Configurar el zumbador

Haz clic en el botón de usuario cuatro veces para controlar el encendido o apagado del zumbador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

### Configurar el sensor

El Wio Tracker L1 se envía con el firmware MeshCore `1.12` preinstalado. La compatibilidad con sensores Grove a través del conector Grove integrado se añadió en el firmware `1.13`; la versión más reciente es `1.16`.

:::note
Los sensores Grove requieren el firmware `1.13` o posterior. Si tu dispositivo aún ejecuta la versión de fábrica `1.12`, sigue el [Método1 vía Web Flasher](#método1-vía-web-flasher) y selecciona la versión más reciente.
:::

Desde la versión `1.13` en adelante, esto permite una integración sencilla de sensores ambientales — temperatura, humedad, calidad del aire y más — a través del conector Grove integrado del L1, sin necesidad de soldar ni de hardware adicional. Conecta un sensor Grove compatible al conector y será reconocido automáticamente.

## Transmisión de mensajes

Si tienes dos dispositivos compatibles, y no hay muchos usuarios de MeshCore cerca de ti, flashea ambos con el firmware BLE Companion para que puedas usar tus dispositivos para comunicarte con tus amigos y familiares cercanos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### Anuncio

MeshCore te permite difundir manualmente tu nombre, posición y clave pública de cifrado, que también se firma para evitar suplantaciones. Cuando haces clic en el botón de anuncio, se difunden esos datos por LoRa. MeshCore llama a esto un Anuncio. Hay dos formas de anunciar, "zero hop" y "flood".

- **Zero hop** significa que tu anuncio se difunde a cualquiera que pueda oírlo, y eso es todo.
- **Flooded** significa que se difunde y luego se repite por todos los repetidores que lo escuchan.

Puedes enviar anuncios en la APP. También puedes enviar anuncios directamente en la página de anuncios del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### Mensaje público

Después de configurar LoRa, puedes enviar mensajes en el canal principal. Todas las personas cercanas en la misma banda de frecuencia lo escucharán.

### Mensaje privado

Los dos dispositivos solo establecen una conexión cuando ambos han recibido el anuncio del otro.

## Preguntas frecuentes (FAQ)

### Dispositivo bloqueado y recuperación del bootloader {#dispositivo-bloqueado-y-recuperación-del-bootloader}

**Descripción:**

El dispositivo no responde, no hay LED, no se puede emparejar con tu aplicación. Si encuentras el dispositivo completamente muerto después de flashear tu propio firmware, también puedes intentar reinstalar el bootloader.

El bootloader se restaura a través del puerto serie USB (Serial DFU) con `adafruit-nrfutil`.

:::danger note
Durante el flasheo, mantén la conexión del cable estable y **NO** lo desconectes, incluso si el número de puerto serie cambia.
:::

**Paso 1: Preparar**

- Un dispositivo de la serie Wio Tracker L1 (L1 / L1 Pro)
- Un cable de datos USB en buen estado (no solo de carga)
- Un PC con Windows, macOS o Linux con Python 3 y pip
- El paquete del bootloader: [Haz clic aquí para descargar el Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — NO extraigas el ZIP; `adafruit-nrfutil` lo usa tal cual

**Paso 2: Instalar adafruit-nrfutil**

<Tabs>
<TabItem value="windows" label="Windows">

Comprueba que Python 3 y pip estén disponibles (si falta pip, ejecuta primero `python -m ensurepip --upgrade`):

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

Luego instala y verifica (la versión probada para esta guía es `0.5.3.post16`):

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Si falta pip, ejecuta primero `python3 -m ensurepip --upgrade`.

</TabItem>

<TabItem value="linux" label="Linux">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Si falta pip, ejecuta primero `python3 -m ensurepip --upgrade`.

</TabItem>
</Tabs>

:::note
Comprueba siempre la versión con `adafruit-nrfutil version`. NO uses `adafruit-nrfutil --version`.
:::

**Paso 3: Comprobar el puerto serie**

Toma nota del puerto serie del dispositivo; los ejemplos siguientes varían según el PC:

<Tabs>
<TabItem value="windows" label="Windows">

Abre **Device Manager → Ports (COM & LPT)**, por ejemplo:

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

El dispositivo aparece como `/dev/cu.usbmodemXXXX`.

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

El dispositivo normalmente aparece como `/dev/ttyACM0`; si no se lista nada, prueba también con `ls /dev/ttyUSB*`.

</TabItem>
</Tabs>

**Paso 4: Flashear el bootloader**

Sustituye el puerto por el que encontraste en el Paso 3:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

Si el ZIP no está en la carpeta actual de tu terminal, pasa su ruta completa a `--package`, por ejemplo `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`.

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**Paso 5: Gestionar el cambio de puerto serie**

`--touch 1200` reinicia el dispositivo en modo DFU, por lo que el puerto serie normalmente cambia y el primer comando puede detenerse con un traceback como este:

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

Esto NO es un fallo: el dispositivo ya entró en modo DFU en un puerto NUEVO. En el PC con Windows probado, por ejemplo, cambió de `COM43` a `COM45`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="DFU serial port after re-enumeration in Windows Device Manager" width={600} height="auto" /></p>

**Mantén el cable USB conectado.** Encuentra el nuevo puerto (actualiza **Device Manager → Ports (COM & LPT)**, o vuelve a ejecutar `ls /dev/cu.*` / `ls /dev/ttyACM*`), luego vuelve a flashear en el nuevo puerto SIN `--touch 1200`:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**Paso 6: Confirmar el resultado**

El flasheo se realizó correctamente cuando la salida termina con `Device programmed.`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="adafruit-nrfutil output ending with Device programmed" width={600} height="auto" /></p>

Después de eso, aparece una unidad UF2 en tu PC (captura de pantalla del PC con Windows probado). Su etiqueta de volumen varía según la compilación del bootloader — la unidad probada mostraba `XIAO-BOOT` — y NO es un criterio de aprobación o fallo; no juzgues el resultado por el nombre de la unidad ni por `INFO_UF2.TXT`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="UF2 drive appears after bootloader flashing" width={600} height="auto" /></p>

**Paso 7: Reinstalar el firmware de la aplicación**

:::warning
Restaurar el bootloader NO reinstala el firmware de la aplicación: el dispositivo aún no tiene un firmware funcional hasta que lo vuelvas a flashear.
:::

Cuando hayas completado los pasos anteriores, sigue [Firmware Flashing](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#firmware-flashing) para flashear el firmware de la aplicación.

**Solución de problemas**

- `adafruit-nrfutil` no se reconoce después de la instalación: el directorio de scripts de usuario de Python no está en tu PATH (`Scripts` en Windows, `bin` en tu directorio de inicio en macOS/Linux); añádelo al PATH o reinstala sin `--user`.
- Puerto ocupado / acceso denegado: cierra monitores serie, pestañas de web flasher, Arduino IDE o cualquier otra cosa que esté usando el puerto.
- `FileNotFoundError: could not open port ...` después de `Touched serial port ...`: el dispositivo entró en modo DFU en un puerto nuevo; sigue el Paso 5.
- No se puede entrar en modo DFU: consulta [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#unable-to-enter-dfu--entering-dfu-mode-manually).

**Recuperación DFU manual**

Si `--touch 1200` no puede poner el dispositivo en modo DFU (por ejemplo, el firmware no responde en absoluto), entra en él manualmente: conecta el dispositivo, pulsa dos veces `Reset` (el LED amarillo permanece fijo), encuentra el puerto serie DFU como en el Paso 3 y luego ejecuta el comando del Paso 5 en ese puerto SIN `--touch 1200`. El resultado satisfactorio se ve igual que en el Paso 6.

### No se puede entrar en DFU y entrar en modo DFU manualmente

Conecta el dispositivo a tu PC y pulsa dos veces el botón `Reset`; el LED amarillo permanece fijo y aparece un puerto serie DFU en tu PC.

Para flashear el bootloader en este modo, sigue [Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#dispositivo-bloqueado--instalación-del-bootloader), pero omite `--touch 1200`; el dispositivo ya está en modo DFU.

### Salir del modo DFU

Pulsa una vez el botón `Reset` para salir del modo DFU.

### El dispositivo se apaga automáticamente

#### Descripción

- Después de que el dispositivo se enciende, se apagará o reiniciará automáticamente después de un tiempo.
- El registro del puerto serie funcionó durante un tiempo y luego se detuvo.

 Esto posiblemente se deba a reiniciar o apagar el dispositivo manualmente y por la fuerza cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

#### Solución de problemas

[Flash Erase](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#borrado-de-flash-1) del firmware

### Restablecimiento de fábrica

Si quieres restaurar la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para que realices un restablecimiento de fábrica.

- [Flash Erase](https://wiki.seeedstudio.com/es/get_started_with_other_mesh_firmware/#borrado-de-flash-1) del firmware

- Haz clic en el botón `Factory Reset` en la app. El dispositivo se reiniciará automáticamente con la configuración de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Los dispositivos normales suelen funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Se considera que un dispositivo con un RSSI inferior a -115 dBm tiene un rendimiento deficiente.

    Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstrucciones, con una interferencia mínima.

### Antena compatible

Si necesitas un reemplazo de antena para el L1 Pro, [haz clic aquí](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para conseguir una.

## Recursos

- [Bootloader (paquete Serial DFU)](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [Archivo de referencia de impresión 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [Archivo de referencia de impresión 3D (V2 nuevo joystick de cuatro direcciones)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafío de diseño de carcasa L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Archivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificación TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificación FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificación CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Prueba de consumo de energía y cálculo de la vida útil de la batería](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

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