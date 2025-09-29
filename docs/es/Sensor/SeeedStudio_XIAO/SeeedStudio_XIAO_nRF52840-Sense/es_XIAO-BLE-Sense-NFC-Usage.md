---
description: Uso de NFC para XIAO nRF52840 (Sense)
title: Uso de NFC para ambas versiones
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/31/2023
  author: Matthew
---

# Uso de NFC en Seeed Studio XIAO nRF52840 (Sense)

<!-- :::note
La función NFC para la placa Seeed Studio XIAO nRF52840 no está funcionando temporalmente. La nueva wiki se actualizará tan pronto como sea posible, una vez que salga la nueva biblioteca NFC.
::: -->

:::note
Las versiones Seeed nRF52 Boards 1.1.3 y Seeed nRF52 mbed-enabled Boards 2.9.2 han sido probadas y aprobadas.
:::

Tanto el **Seeed Studio XIAO nRF52840** como el **Seeed Studio XIAO nRF52840 Sense** están equipados con un **módulo NFC (Near Field Communication)**. Esta wiki te ayudará a comenzar a usar NFC en estas placas. Aquí demostraremos un ejemplo básico donde enviamos una cadena de texto desde la placa al teléfono después de colocar el teléfono sobre la antena NFC.

## Trabajo preparatorio

> La función NFC funcionará bien cuando usemos la "Biblioteca Seeed nRF52 mbed-enabled Boards".

Para la instalación de las bibliotecas de la placa, consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para completar la instalación. Si ya la has instalado, podemos continuar y procesar el proyecto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## Hardware requerido

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Antena NFC
- 1 x Cable USB Type-C
- 1 x Teléfono inteligente

## Software requerido

- [Aplicación NFC TagInfo (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [Aplicación NFC TagInfo (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## Conexión del hardware

Solda la antena NFC al Seeed Studio XIAO nRF52840 (Sense) de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png" alt="pir" width={550} height="auto" /></p>


## Enviar cadena de texto con NFC

- **Paso 1.** Abre Arduino IDE y sube los siguientes códigos

```cpp
#include <NFCT.h>

void setup() { 
  // set the NFC message as first parameter and the language code as second
  NFC.setTXTmessage("Hello World!", "en");
  // start the NFC module
  NFC.start();
}

void loop() {
}

```

Aquí simplemente enviamos la cadena de texto "Hello World!" 

- **Paso 2.** Abre la aplicación móvil "NFC TagInfo" y haz clic en **Scan & Launch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **Paso 3.** Coloca la antena NFC cerca del teléfono y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>