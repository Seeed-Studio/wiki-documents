---
description: Uso del Micrófono PDM en Seeed Studio XIAO nRF52840 Sense
title: Uso de PDM para XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 06/25/2024
  author: Spencer
---

# El Uso del Micrófono PDM en Seeed Studio XIAO nRF52840 Sense

## Descripción General

**Seeed Studio XIAO nRF52840 Sense** está equipado con un **Micrófono PDM (Modulación de Densidad de Pulsos)** que puede recibir datos de audio en tiempo real y puede ser utilizado para reconocimiento de audio. Con su conectividad inalámbrica y excelente rendimiento en el procesamiento de datos de audio gracias a la FPU, es ideal para proyectos interesantes de TinyML como el control remoto por voz de dispositivos.

:::note Nota

- **Seeed Studio XIAO nRF52840** no está equipado con este módulo de Micrófono PDM.
- El Micrófono PDM funcionará mejor cuando usemos la *Seeed nrf52 mbed-enabled Boards Library*, por lo que lo recomendamos encarecidamente.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={680} height="auto" /></p>

Esta wiki introducirá los conceptos básicos del **uso del Micrófono PDM** en esta placa e incluye dos ejemplos:

1. [Visualización de Datos en Bruto](#demo1): Este ejemplo demuestra cómo visualizar datos en bruto del micrófono en tiempo real.
2. [Guardado de Audio Grabado](#demo2): Este ejemplo muestra cómo guardar audio grabado del micrófono en una tarjeta SD.

¡Exploremos estos ejemplos ahora!

## Ejemplo 1: Visualizar Datos en Bruto del Micrófono PDM en Tiempo Real {#demo1}

En este ejemplo, visualizaremos los datos en bruto del Micrófono PDM en un **Monitor Serie** y **Plotter Serie** en tiempo real.

### Prerrequisitos

- **Paso 1**. Obtén la Librería de Arduino, [Descarga la Librería Seeed_Arduino_Mic](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) como un archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2**. Abre Arduino IDE, navega a `Sketch > Include Library > Add .ZIP Library...` y abre el archivo zip descargado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

### Ejecutar Ejemplo

- **Paso 3.** Navega a `File > Examples > Seeed Arduino Mic > mic_serial_plotter` para abrir **mic_serial_plotter**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **Paso 4.** Sube los códigos y abre el **Monitor Serie**

:::note Nota
Una vez que subas los códigos, no se ejecutarán automáticamente hasta que hagas clic en **Monitor Serie** en la esquina superior derecha de la ventana de Arduino.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

¡Ahora verás los datos en bruto del micrófono mostrados en tiempo real en el monitor serie como se muestra arriba!

### Visualización de Datos en Bruto

- **Paso 5.** Si navegas a `Tools > Serial Plotter` y abres **Serial Plotter**, ¡verás los datos en bruto del micrófono mostrados en tiempo real en un gráfico de forma de onda!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## Ejemplo 2: Guardar Audio Grabado del Micrófono en una Tarjeta SD {#demo2}

Al igual que la serie Seeed Studio XIAO, el Seeed Studio XIAO nRF52840 Sense es perfectamente compatible con la [placa de expansión Seeeduino Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Se puede instalar en la placa de expansión, permitiéndote usar el módulo de tarjeta SD en la placa. Si prefieres no usar la placa de expansión, puedes conectar un módulo de tarjeta SD separado a través de la interfaz **SPI**.

### Prerrequisitos

- **Paso 1.** Conecta el Seeed Studio XIAO nRF52840 Sense a una Placa de Expansión Seeed Studio XIAO e inserta una tarjeta SD en la ranura de tarjeta SD de la placa de expansión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

:::tip

Cuando veas que la luz en la placa de expansión parpadea regularmente en **verde**, la conexión es exitosa.

> Dado que ya hemos instalado la *Librería Seeed_Arduino_Mic* anteriormente, no necesitamos instalarla nuevamente para este ejemplo. Sin embargo, si no la tienes instalada, por favor sigue las instrucciones del ejemplo anterior.
:::

- **Paso 2**. [Descarga la Librería Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS) como un archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** Esta librería es necesaria para acceder a la tarjeta SD y guardar los datos.

### Ejecutar Ejemplo

- **Paso 3**. Abre Arduino IDE, navega a `Sketch > Include Library > Add .ZIP Library...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Navega a `File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard` para abrir **mic_Saved_OnSDcard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **Paso 5.** Sube los códigos y abre el **Monitor Serie**

### Guardando datos

**Nota:** Una vez que subas los códigos, no se ejecutarán automáticamente hasta que hagas clic en **Monitor Serie** en la esquina superior derecha de la ventana de Arduino.

Ahora los datos de audio comenzarán a muestrearse, grabarán durante 5 minutos, y guardarán los datos en la tarjeta SD automáticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

Este **test.9568.wav** es un archivo de audio de 5 segundos y está guardado en la tarjeta SD.

:::note ¿Muestrear Nuevamente?
Si quieres volver a muestrear datos de audio, debes presionar el botón de reinicio y luego hacer clic en **Monitor Serie** nuevamente para comenzar el muestreo.
:::