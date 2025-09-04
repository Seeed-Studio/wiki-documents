---
description: Flashear la versión Sidewalk a la versión LoRaWAN
title: Flashear la versión Sidewalk a la versión LoRaWAN
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/flash_to_wio_tracker
last_update:
  date: 12/22/2023
  author: Jessie
---

Este tutorial guiará a los usuarios para flashear la LPWAN Dev Board para Amazon Sidewalk a la Wio Tracker 1110 Dev Board, para aquellos que quieran usar la red LoRaWAN.

### Preparación

- LPWAN Dev Kit para Amazon Sidewalk x 1

- Computadora x 1

- Cable USB Tipo-C x 1

- Programador de Depuración J-Link x 1

- [Archivo de Bootloader](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)

- [Firmware de Aplicación](https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

:::note
Tenga en cuenta que, después de flashear la placa, no puede usar SenseCAP Cloud, porque no hay claves de SenseCAP Cloud, pero puede usar otras plataformas como TTN, Helium, AWS, etc.
:::

### Conectar la placa

Conecte la Dev Board al Programador de Depuración J-Link de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connection-pin.png" alt="pir" width={700} height="auto" /></p>

:::info Conexión:
**DIO** (Wio-WM1110 Dev Board Pin2) -> **SWDIO** (J-Link Debug Programmer Pin7)  
**CLK** (Wio-WM1110 Dev Board Pin4) -> **SWDCLK** (J-Link Debug Programmer Pin9)  
**GND** (Wio-WM1110 Dev Board Pin5) -> **GND** (J-Link Debug Programmer GND)
:::

### Flashear el bootloader

- **Paso 1**: Crear un nuevo proyecto

Abra JFlash, seleccione `Create new project`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Haga clic en `...` para seleccionar el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Seleccione `nRF52840_xxAA`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/choose-device.png" alt="pir" width={700} height="auto" /></p>

Interfaz objetivo: `SWD`, luego haga clic en `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/new-created.png" alt="pir" width={700} height="auto" /></p>

- **Paso 2**: Conectar el objetivo

Encienda la placa y conéctela al JLink, luego haga clic en `Target` -> `Connect`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connect-target.png" alt="pir" width={700} height="auto" /></p>

Cuando la conexión sea exitosa, mostrará un mensaje como este:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connected-.png" alt="pir" width={700} height="auto" /></p>

<details>

<summary>Respaldo de Datos</summary>

Antes de comenzar a flashear la placa, se recomienda hacer un respaldo por si acaso.

Haga clic en `Target` -> `Manual Programming` -> `Read Back` -> `Entire chip`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-chip.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-success.png" alt="pir" width={700} height="auto" /></p>

Luego guarde los datos, haga clic en `File` -> `Save data file as`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/files-save.png" alt="pir" width={700} height="auto" /></p>

</details>

- **Paso 3**: Descargar el archivo

Haga clic en `File` -> Abrir `data file`, seleccione el archivo de [bootloader](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110) de la Wio Tracker 1110 Dev Board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/open-data-file.png" alt="pir" width={700} height="auto" /></p>

Haga clic en `Target` -> `Production Programming`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flashing.png" alt="pir" width={700} height="auto" /></p>

Cuando la programación sea exitosa, mostrará un mensaje como este:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flash-success.png" alt="pir" width={700} height="auto" /></p>

### Descargar la aplicación

Haga doble clic en el botón `Reset`, debería aparecer un disco `BOOT` en su PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/boot-disk.png" alt="pir" width={700} height="auto" /></p>

Copie el archivo .uf2 al disco, la descarga se ejecutará automáticamente, luego el disco se desconectará.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/uf2-file.png" alt="pir" width={700} height="auto" /></p>

También puede actualizar su propia aplicación mediante Arduino.

### Verificar el registro

Luego podemos abrir el monitor serie para verificar el registro.
Después del flasheo, el DevEUI/AppEUI/Appkey será 0.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/join-fail.png" alt="pir" width={700} height="auto" /></p>

Puede usar la APP SenseCAP Mate para elegir la plataforma y definir el DevEUI/AppEUI/Appkey, consulte [Comenzar](https://wiki.seeedstudio.com/es/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

:::info nota
Si quiere usar SenseCAP Cloud, por favor contacte sensecap@seeed.cc
:::

Después de la configuración, la placa se reiniciará y se volverá a unir a la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/joined.png" alt="pir" width={700} height="auto" /></p>
