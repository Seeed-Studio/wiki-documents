---
description: Tutorial de tarjeta SD para la Serie Wio Tracker L2. Incluye formateo, generación de mapas e instalación de mapas
title: Uso de la tarjeta SD
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /l2_sd_card
sku: 100029766
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/l2_sd_card/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Los mapas sin conexión permiten que **Wio Tracker L2** muestre teselas de mapa localmente sin una conexión a Internet. Son útiles cuando se opera en áreas remotas o en ubicaciones con cobertura de red limitada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={600} height="auto" /></p>

## Requisitos previos

Prepara los siguientes elementos antes de comenzar.

### Hardware

- Wio Tracker L2
- Tarjeta microSD (Capacidad: **8 GB–32 GB**, Sistema de archivos: **FAT32**)
- Ordenador
- Lector de tarjetas microSD

### Software

- Firmware Meshtastic
- Paquete de mapas sin conexión

:::tip

Si MUI no se ha instalado en tu dispositivo, completa primero la instalación del firmware.

:::

## Preparar la tarjeta microSD

### Paso 1. Formatear la tarjeta microSD

[Haz clic aquí](https://www.sdcard.org/downloads/formatter/) para descargar la herramienta de formateo:

Después de instalar el software:

1. Inserta la tarjeta microSD en el lector de tarjetas.
2. Inicia **SD Memory Card Formatter**.
3. Selecciona tu tarjeta microSD.
4. Elige `Quick format`
5. Haz clic en **Format**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardFormat.png" alt="pir" width={400} height="auto" /></p>

La tarjeta ya está lista para almacenar mapas sin conexión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FormatSucceed.png" alt="pir" width={400} height="auto" /></p>

:::warning

El formateo elimina permanentemente todos los datos de la tarjeta microSD. Haz una copia de seguridad de cualquier archivo importante antes de continuar.

:::
### Paso 2. Crear la estructura de directorios
Para que MUI reconozca tus mapas, deben colocarse en una jerarquía de carpetas específica en la raíz de tu tarjeta SD:
1. Crea una carpeta llamada maps (en minúsculas).
2. Dentro de maps, crea una subcarpeta para el estilo, como CartoDark.
3. La ruta final debería ser: SD_ROOT/maps/CartoDark/


###  Paso 3. Descargar el mapa sin conexión

[Haz clic aquí](https://github.com/meshtastic/device-ui/tree/master/maps) para descargar el paquete de mapas sin conexión desde la página oficial de descargas. 

El paquete descargado contiene todos los datos de mapa necesarios para MUI. `atlas.zip`, `dark-matter-brown.zip`, `osm.zip`, `positron.zip` son cuatro tipos diferentes de paquetes de archivos de mapas. Puedes elegir uno o más de tus favoritos para descargar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Downloadmap.png" alt="pir" width={400} height="auto" /></p>

###  Paso 4. Copiar los archivos de mapas

1. Abre la tarjeta microSD.
2. Extrae el paquete ZIP descargado en la carpeta `maps`

El directorio debería verse así:

```text
microSD
└── maps
    ├── atlas
        └── 0
        └── ...
        └── 8
    ├── dark-matter-brown
    └── osm
```

:::note

No cambies el nombre de la carpeta **maps** a menos que se indique lo contrario.

:::

Expulsa de forma segura la tarjeta microSD una vez que se complete el proceso de copia. Luego puedes insertar la tarjeta en la L2 y comprobar el mapa.