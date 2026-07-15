---
description: Actualización del firmware LR1110 en Wio Tracker 1110 usando la herramienta oficial LR11xx Updater de Semtech
title: Actualizar el firmware LR1110 en Wio Tracker 1110
keywords:
  - Wio
  - Tracker
  - LR1110
  - Actualización de firmware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /update_internal_lr1110_firmware
sku: 114993186
sidebar_position: 8
last_update:
  date: 06/17/2026
  author: David Du
createdAt: '2026-06-17'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/es/update_internal_lr1110_firmware/
---

## Descripción general

La placa de desarrollo Wio Tracker 1110 está construida alrededor del módulo inalámbrico Wio-WM1110, que integra el transceptor LoRa® LR1110 de Semtech y un front‑end de radio multipropósito para geolocalización. Esta guía explica cómo actualizar el firmware en el chip LR1110 integrado en el Wio Tracker 1110 utilizando la herramienta oficial Semtech LR11xx Updater.

:::note
La herramienta LR11xx Updater es una implementación de referencia proporcionada por Semtech para actualizar la memoria de programa de los chips LR1110 / LR1120 / LR1121, basada en la Nota de Aplicación AN1200.57 – “LR1110: Upgrade of the Program Memory”.
:::

:::caution
**NO** reinicies manualmente ni apagues el dispositivo durante el proceso de actualización, ya que esto puede dañar el chip de forma permanente.
:::

## Requisitos previos

### Hardware necesario

- Placa de desarrollo Wio Tracker 1110 × 1
- Ordenador (Windows / Linux / macOS) × 1
- Cable USB Type‑C × 1
- (Opcional) Sonda de depuración J‑Link – para programar a través de la interfaz SWD

:::note
Ten en cuenta que hay una diferencia entre la `Wio Tracker 1110 dev board` (SKU:114993186) y el `LPWAN Asset Tracker Dev Kit for Amazon Sidewalk` (SKU:114993187). Si planeas usar la placa de desarrollo para el desarrollo con Sidewalk, ten en cuenta que tendrás que actualizar el firmware LR1110 siguiendo esta guía, ya que la versión predeterminada difiere de los requisitos de Sidewalk.
:::

## Actualización del firmware LR1110

1. Obtén el código fuente y prepara el entorno de trabajo de Zephyr:

```bash
# obtain the manifest repository from Seeed Studio's GitHub
git clone https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker

# initialize the zephyr workspace
cd <your_workspace_path>/SWSD006-Wenzy-dev/
west init
west update
```

2. Descarga el firmware deseado desde [Here](https://github.com/Lora-net/radio_firmware_images) y colócalo en el subdirectorio `include`. Solo el firmware "transceiver" funcionará con Sidewalk; no uses firmware "modem".

3. Edita `app.c` para incluir este archivo de cabecera descargado. (Aquí usamos el `lr1110_transceiver_0401.h` predeterminado)

```c
# The target project path is: /samples/SWTL001_nrf52840_wm1110/src/swtl001/app.c
#include <lr1110_transceiver_0401.h>
```

4. Compila el firmware de destino:

```bash
west build -p auto -b nrf52840_wm1110 -- -DRADIO=LR1110
```

Deberías poder encontrar el archivo compilado en: `/SWSD006-Wenzy-dev/samples/SWTL001_nrf52840_wm1110/build/zephyr/`

5. Tienes dos opciones para flashear el firmware compilado:

- **El Wio Tracker 1110 es compatible con el modo bootloader UF2 (recomendado):**
  1. Conecta la placa a tu ordenador usando un cable USB Type‑C.
  2. Pulsa dos veces el botón Reset de la placa. Debería aparecer una unidad de almacenamiento masivo llamada WM1110_BOOT.
  3. Arrastra el archivo compilado [.uf2](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2) a esa unidad.
  4. La programación se inicia automáticamente y la unidad se desmontará cuando termine.

- **Si prefieres programar por SWD usando un J-Link:**
  1. Usa sondas 2×3 con un paso de 1,2 mm para conectarte al puerto de depuración SWD en la parte posterior de la placa de desarrollo.
  2. Flashea el firmware compilado:
```bash
west flash
```

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWD_pinout.png" alt="pir" width={600} height="auto" /></p>

<br />

6. Cuando se conecta por USB, aparece un puerto COM (o /dev/ttyACM*). Abre un emulador de terminal (por ejemplo, PuTTY, Screen, Minicom) con: 

- **Velocidad en baudios**: 115200

- Se mostrarán mensajes de registro en vivo del proceso de actualización.

## Recursos

- **[.uf2]** [Firmware precompilado](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2)

- **[Link]** [Repositorio GitHub de la herramienta Updater](https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>