---
description: NFC Usage for XIAO nRF52840 (Sense)
title: Uso de NFC para ambas versiones XIAO nRF52840
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Uso de NFC en XIAO nRF52840 (Sense) en Seeed Studio

<!-- :::note
The NFC function for Seeed Studio XIAO nRF52840 board is temportorily not functioning. The new wiki will be updated as soon as possible, once the new NFC library comes out.
::: -->

:::note
Las versiones Seeed nRF52 Boards 1.1.3 y Seeed nRF52 mbed-enabled Boards 2.9.2 han sido probadas y aprobadas.
:::

Tanto la **Seeed Studio XIAO nRF52840** como la **Seeed Studio XIAO nRF52840 Sense** están equipadas con un **módulo NFC (Comunicación de Campo Cercano)**. Este wiki te ayudará a comenzar a usar NFC en estas placas. Aquí mostraremos un ejemplo básico en el que enviamos una cadena de texto desde la placa al teléfono después de colocar el teléfono sobre la antena NFC.

## Trabajo preparatorio

> La función NFC funcionará de manera óptima cuando usemos la "Biblioteca de Placas Seeed nRF52 habilitada para mbed".

Para la instalación de las bibliotecas de las placas, por favor consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) para completar la instalación. Si ya la has instalado, podemos continuar y procesar el proyecto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## Hardware requerido

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Antena NFC
- 1 x Cable USB Tipo-C
- 1 x Smartphone

## Software requerido

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## Conexión de hardware

Suelda la antena NFC a la Seeed Studio XIAO nRF52840 (Sense) de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png" alt="pir" width={550} height="auto" /></p>


## Enviar cadena de texto con NFC

- **Paso 1.** Abre el IDE de Arduino y sube el siguiente código:

```cpp
#include <NFCT.h>

void setup() { 
  // establece el mensaje NFC como primer parámetro y el código de idioma como segundo
  NFC.setTXTmessage("Hello World!", "en");
  // inicia el módulo NFC
  NFC.start();
}

void loop() {
}

```

Aquí simplemente enviamos la cadena de texto "Hello World!"

- **Paso 2.** Abre la aplicación móvil "NFC TagInfo" y haz clic en **Scan & Launch**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **Paso 3.** Coloca la antena NFC cerca del teléfono y verás la siguiente salida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>
