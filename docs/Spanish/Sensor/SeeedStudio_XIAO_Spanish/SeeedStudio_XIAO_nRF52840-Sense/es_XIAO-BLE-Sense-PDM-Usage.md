---
description: PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense
title: Uso de PDM en XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Uso del Micrófono PDM en Seeed Studio XIAO nRF52840 Sense

## Descripción general

**Seeed Studio XIAO nRF52840 Sense** está equipada con un **micrófono PDM (Modulación por Densidad de Pulso)** que puede recibir datos de audio en tiempo real y puede ser utilizado para el reconocimiento de audio. Con su conectividad inalámbrica y un excelente rendimiento en el procesamiento de datos de audio gracias a la FPU, es ideal para proyectos interesantes de TinyML, como el control remoto por voz de dispositivos.

:::note Note

- **Seeed Studio XIAO nRF52840** no está equipada con este módulo de micrófono PDM.
- El micrófono PDM funcionará mejor cuando utilicemos la *Biblioteca de Placas Seeed nRF52 habilitada para mbed*, por lo que recomendamos encarecidamente su uso.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={680} height="auto" /></p>

Este wiki introducirá lo básico sobre **cómo usar el micrófono PDM** en esta placa e incluirá dos ejemplos:

1. [Visualizar los datos sin procesar](#demo1): Este ejemplo demuestra cómo visualizar los datos sin procesar del micrófono en tiempo real.
2. [Guardar el audio grabado](#demo2): Este ejemplo muestra cómo guardar el audio grabado desde el micrófono en una tarjeta SD.

¡Vamos a explorar estos ejemplos ahora!

## Ejemplo 1: Visualizar los datos sin procesar del micrófono PDM en tiempo real {#demo1}

En este ejemplo, visualizaremos los datos sin procesar del micrófono PDM en un **Monitor Serie** y en el **Serial Plotter** en tiempo real.

### Requisitos previos

- **Paso 1**. Obtén la biblioteca de Arduino, [Descargar Seeed_Arduino_Mic Library](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) como archivo zip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2**. Abre el IDE de Arduino, navega a `Sketch > Incluir biblioteca > Agregar biblioteca .ZIP...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

### Ejecutar el ejemplo

- **Paso 3**. Navega a `Archivo > Ejemplos > Seeed Arduino Mic > mic_serial_plotter` para abrir **mic_serial_plotter**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **Paso 4**. Sube el código y abre el **Monitor Serie**.

:::note Note
Una vez que subas el código, no se ejecutará automáticamente hasta que hagas clic en **Monitor Serie** en la esquina superior derecha de la ventana de Arduino.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

¡Ahora verás los datos sin procesar del micrófono mostrados en tiempo real en el monitor serie como se muestra arriba!

### Visualizar los datos sin procesar

- **Paso 5**. Si navegas a `Herramientas > Serial Plotter` y abres **Serial Plotter**, verás los datos sin procesar del micrófono mostrados en tiempo real en un gráfico de onda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## Ejemplo 2: Guardar el audio grabado desde el micrófono en una tarjeta SD {#demo2}

Al igual que la serie Seeed Studio XIAO, la **Seeed Studio XIAO nRF52840 Sense** es totalmente compatible con la [placa de expansión Seeeduino Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Se puede instalar sobre la placa de expansión, permitiéndote usar el módulo de tarjeta SD en la placa. Si prefieres no usar la placa de expansión, puedes conectar un módulo de tarjeta SD separado a través de la interfaz **SPI**.

### Requisitos previos

- **Paso 1.** Conecta la Seeed Studio XIAO nRF52840 Sense a una placa de expansión Seeeduino Seeed Studio XIAO e inserta una tarjeta SD en la ranura para tarjeta SD de la placa de expansión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

:::tip

Cuando veas la luz de la placa de expansión parpadeando regularmente en **verde**, la conexión será exitosa.

> Como ya hemos instalado la *Seeed_Arduino_Mic Library* anteriormente, no necesitamos instalarla nuevamente para este ejemplo. Sin embargo, si no la tienes instalada, por favor sigue las instrucciones del ejemplo anterior.
:::

- **Step 2**. [Download Seeed_Arduino_FS Library](https://github.com/Seeed-Studio/Seeed_Arduino_FS) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Esta biblioteca es necesaria para acceder a la tarjeta SD y guardar los datos.

### Ejecutar el ejemplo

- **Paso 3**. Abre Arduino IDE, navega a `Sketch > Incluir Biblioteca > Añadir Biblioteca .ZIP...` y abre el archivo .zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Navega a `Archivo > Ejemplos > Seeed Arduino Mic > mic_Saved_OnSDcard` para abrir **mic_Saved_OnSDcard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **Paso 5.** Sube el código y abre el **Monitor Serial**

### Guardar datos

**Nota:** Una vez que subas el código, no se ejecutará automáticamente hasta que hagas clic en **Monitor Serial** en la esquina superior derecha de la ventana de Arduino.

Ahora los datos de audio comenzarán a muestrearse, se grabarán durante 5 minutos y se guardarán automáticamente en la tarjeta SD.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

Este archivo **test.9568.wav** es un archivo de audio de 5 segundos y se ha guardado en la tarjeta SD.

:::note ¿Muestrear de nuevo?
Si deseas volver a muestrear los datos de audio, debes presionar el botón de reinicio y luego hacer clic en **Serial Monitor** nuevamente para comenzar a muestrear.
:::