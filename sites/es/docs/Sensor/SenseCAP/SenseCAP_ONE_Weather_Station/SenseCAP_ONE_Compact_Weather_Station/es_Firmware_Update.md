---
description: Actualización de firmware del sensor meteorológico SenseCAP ONE
title: Actualización de firmware
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /firmware_update
last_update:
  date: 03/19/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/es/firmware_update/
updatedAt: '2026-03-31'
---
## Actualización de firmware del sensor meteorológico SenseCAP ONE

:::tip
    Esta actualización de firmware está destinada exclusivamente a la estación meteorológica SenseCAP ONE V2.
:::

### Estaciones meteorológicas V1 vs V2

Las estaciones meteorológicas V1 y V2 se pueden identificar por **el SKU en la etiqueta blanca** o por el diseño de la base.

Además, el puerto USB Tipo C está ubicado de forma diferente: en la V1, está en el mismo lado que la etiqueta blanca, mientras que en la V2 está en el lado opuesto.

<div class="table-center">

| Nombre del producto   |      SKU V1          |       SKU V2         |
| -------------------- | -------------------- | -------------------- |
| S200                 |        Ninguno       |      101991044       |
| S500                 |      101990693       |      101991021       |
| S600-A               |        Ninguno       |      101991232       |
| S700                 |      101990787       |      101991022       |
| S700-A               |        Ninguno       |      101991050       |
| S700-B               |        Ninguno       |      101991102       |
| S700-C               |        Ninguno       |      101991141       |
| S800                 |        Ninguno       |      101991023       |
| S900                 |      101990784       |        Ninguno       |
| S1000                |      101990902       |      101991024       |

</div>

### Herramienta de configuración SenseCAP ONE

La herramienta de configuración SenseCAP ONE ofrece una interfaz gráfica para que configures el dispositivo. Puedes descargar la herramienta desde el siguiente enlace de GitHub:

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

Selecciona el software para el sistema operativo correspondiente, Windows, macOS o Linux, según tus necesidades.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

La siguiente imagen muestra la interfaz principal de la herramienta de configuración SenseCAP ONE.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

### Procedimiento de actualización de firmware

1. Abre `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Conecta el dispositivo a tu ordenador mediante el cable Tipo C

3. Abre el software, selecciona el puerto `COM` correcto para el dispositivo y haz clic en `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. Después de conectar, haz clic en `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. Selecciona la placa de destino y el archivo de firmware correspondiente

- Selecciona la `Master board` o `Slave Board1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- Haz clic en `"Local File"` y navega hasta la carpeta del firmware

- Haz clic en `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. Pulsa el botón Reset en el dispositivo (situado junto al puerto Tipo C) después de hacer clic en `"Update"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

El proceso de actualización comenzará unos segundos después de pulsar el botón.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. Una vez completada la actualización, pulsa de nuevo el botón Reset y luego haz clic en `"OK"` en la pantalla.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. Repite los pasos anteriores para grabar otro firmware en `Slave Board 1`.

9. Cierra la ventana de Firmware Update después de finalizar y haz clic en `"Disconnect"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

Con esto se completan todos los pasos de actualización de firmware para la estación meteorológica.

## Recursos de firmware

### 2025-04

- [Firmware de la Master Board](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-communication-v2_v4.7_release_20250407_154759.bin)

- [Firmware de la Slave Board 1](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-driver-v2_v4.1_release_20250423_194038.bin)
