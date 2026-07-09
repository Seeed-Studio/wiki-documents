---
description: Referencia de los bloques de herramientas disponibles al crear una aplicación SenseCraft AI.
title: Bloques de herramientas
keywords:
  - tool blocks
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/tool-blocks
sidebar_position: 2
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/application/tool-blocks/
---
# Uso de bloques de herramientas

En el flujo de despliegue puedes insertar funciones integradas de SenseCraft AI con un solo clic. Agilizan tanto tu experiencia de creación como el despliegue para el usuario final.

## Visión por IA

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 4c2.787 0 5.263 1.257 7.026 2.813c.885.781 1.614 1.658 2.128 2.531c.505.857.846 1.786.846 2.656s-.34 1.799-.846 2.656c-.514.873-1.243 1.75-2.128 2.531C17.263 18.743 14.786 20 12 20c-2.787 0-5.263-1.257-7.026-2.813c-.885-.781-1.614-1.658-2.128-2.531C2.34 13.799 2 12.87 2 12s.34-1.799.846-2.656c.514-.873 1.243-1.75 2.128-2.531C6.737 5.257 9.214 4 12 4m0 2c-2.184 0-4.208.993-5.702 2.312c-.744.656-1.332 1.373-1.729 2.047C4.163 11.049 4 11.62 4 12s.163.951.569 1.641c.397.674.985 1.39 1.729 2.047C7.792 17.007 9.816 18 12 18s4.208-.993 5.702-2.312c.744-.657 1.332-1.373 1.729-2.047c.406-.69.569-1.261.569-1.641s-.163-.951-.569-1.641c-.397-.674-.985-1.39-1.729-2.047C16.208 6.993 14.184 6 12 6m0 3q.132 0 .261.011a2 2 0 0 0 2.728 2.728A3 3 0 1 1 12 9"/></svg>Despliega modelos de visión por IA para reconocimiento, detección, clasificación de objetos y tareas relacionadas en hardware compatible. Los resultados de inferencia se pueden transmitir en tiempo real mediante MQTT, GPIO o serie (Serial), según la configuración.

El bloque de herramientas actualmente admite **Detección** y **Clasificación**. La segmentación y la estimación de pose están previstas para una versión posterior.

### Dispositivos compatibles

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### Seleccionar un modelo

- **Modelo de SenseCraft AI:** Selecciona modelos de alta calidad compartidos públicamente por la comunidad desde la biblioteca de modelos.
- **Mi modelo:** Elige un modelo de tu lista privada guardada.
- **Subir modelo:** Sube archivos de modelo entrenados en plataformas de terceros. Debes proporcionar el nombre del modelo, el tipo de tarea (Task), las categorías del modelo (Class ID y Class Name), adjuntar el archivo del modelo y seleccionar los dispositivos compatibles. Después de subirlo, el modelo aparece en **Mi modelo**.
- **Entrenar modelo:** Para entrenar un modelo nuevo o reentrenar uno existente, abre la entrada de entrenamiento y sigue el asistente. Cuando termines, abre **Modelos históricos**, elige **Send to SenseCraft**, completa el flujo de subida y guarda el resultado en **Mi modelo**.

:::caution
Cuando publiques una aplicación que incluya un modelo privado en la comunidad, ese modelo se volverá público automáticamente.
:::

### Seleccionar dispositivo

En el menú desplegable, elige el hardware que realmente utilizas de la lista compatible con este modelo.

### Parámetros recomendados

Ajusta la inferencia y la configuración del dispositivo para tu escenario. Estos valores se escriben en el dispositivo como valores predeterminados en el momento del despliegue.

- **Umbral de confianza:** Criterio para decidir si el modelo emite una predicción final. Aumentar el umbral tiende a reducir falsos positivos; disminuirlo tiende a reducir falsos negativos.
- **Umbral de IOU:** En tareas de detección, IoU compara las cajas predichas con la verdad de terreno. Un umbral más alto ayuda a separar objetos superpuestos, pero puede producir cajas duplicadas sobre un mismo objeto si se establece demasiado alto. Un umbral más bajo fusiona duplicados, pero puede fusionar dos objetos cercanos si se establece demasiado bajo.

#### Modo de salida

- **Ninguno:** Después de encender, la inferencia no se inicia hasta que se ejecute otro disparador. Adecuado para configuraciones de bajo consumo donde la inferencia solo se ejecuta cuando es necesario.
- **MQTT:** Inicia la inferencia inmediatamente después de encender y envía los resultados por Wi‑Fi mediante MQTT.
  - **Servicio oficial de SenseCraft (recomendado):** Selecciona o crea un Dev Kit para tu aplicación y MQTT se configura automáticamente. Abre la [plataforma de datos SenseCraft](https://sensecap.seeed.cc) para ver y procesar los datos entrantes.
  - **Servicio de terceros:** Usa tu propio broker MQTT o uno de terceros y configura los parámetros manualmente.
- **GPIO:** Controla pines GPIO con señales de nivel.
  - **Condiciones de disparo:** Define reglas con objeto, condición y umbral de confianza.
  - **Acciones de disparo:** Cuando se cumplan las condiciones, el dispositivo puede poner un pin en alto/bajo, guardar capturas en la tarjeta SD, encender un LED, etc.
- **Serie:** Usa la [biblioteca SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) para exportar datos de inferencia por UART (GPIO), I2C o SPI.

```text
**UART (GPIO)**
Baud Rate Value: 921600
Data Format: 8N1
TX: GPIO43
RX: GPIO44

**I2C**
Slave Address: 0x62
SDA: GPIO5 (PULLUP)
SCL: GPIO6 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06

**SPI**
Slave CPOL0 CPHA0
MOSI GPIO9 (PULLUP)
MISO GPIO8,
SCLK GPIO7 (PULLUP)
CS GPIO4 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06
```

## Audio por IA

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"/></svg>Despliega modelos de audio por IA para reconocimiento de voz en hardware compatible. Los resultados se pueden transmitir mediante MQTT, GPIO o serie, según la configuración.

### Dispositivos compatibles

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

### Seleccionar un modelo

- **Modelo de SenseCraft AI:** Selecciona modelos compartidos por la comunidad desde la biblioteca.
- **Mi modelo:** Elige desde tu lista privada.
- **Subir modelo:** Sube archivos de modelo entrenados en plataformas de terceros. Proporciona el nombre del modelo y las categorías (Class ID y Class Name). Después de subirlo, el modelo aparece en **Mi modelo**.
- **Entrenar modelo:** Entrena un modelo nuevo o actualizado y luego envíalo a SenseCraft desde **Modelos históricos**, igual que con los modelos de visión.

:::caution
Cuando publiques una aplicación que incluya un modelo privado en la comunidad, ese modelo se volverá público automáticamente.
:::

### Seleccionar dispositivo

Los modelos de audio actualmente solo son compatibles con XIAO ESP32S3 Sense.

### Parámetros recomendados

Ajusta los valores para tu escenario.

- **Umbral de confianza:** Mismo papel que para visión; ajusta el equilibrio entre salidas omitidas y espurias.
- **Modo de salida:** Ruta de salida predeterminada para el modelo de audio.

## Vibración por IA

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M7.71 5.012a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812L17.94 7.824l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258L7.272 7.824l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324m0 8a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812l-1.147-2.582l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324"/></svg>Despliega detección de anomalías de vibración aprendiendo la vibración “normal” y marcando las desviaciones.

### Dispositivos compatibles

- XIAO ESP32S3 Sense (con [acelerómetro de 3 ejes](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html))

### Parámetros recomendados

Ajusta el muestreo, el comportamiento al encender, GPIO y la salida para tu configuración.

- **Ventana de muestreo:** Muestras por unidad de tiempo. Demasiado grande ralentiza la inferencia; demasiado pequeña puede infraajustar la vibración normal.
- **Habilitar inferencia predeterminada al encender:** Cuando está desactivado, la inferencia no se inicia automáticamente al encender; usa un disparador externo para un uso de baja potencia.
- **GPIO:** Controla pines ante vibración anómala; por ejemplo, establecer un nivel o conmutar un LED.
- **Modo de salida:** Ruta de salida predeterminada para el modelo de vibración.

## Desplegar aplicación de contenedor

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12.01 2.378a2.5 2.5 0 0 1 2.985 2.29l.005.161v.551c1.503-.3 2.9.792 2.995 2.288l.005.161v.55c1.503-.3 2.9.793 2.995 2.289l.005.162v6.53a3 3 0 0 1-2.239 2.902l-.173.04l-6.598 1.32a2.5 2.5 0 0 1-2.985-2.29L9 19.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L6 16.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L3 13.17V6.64a3 3 0 0 1 2.238-2.902l.174-.04zm6.392 7.961l-6.598 1.32a1 1 0 0 0-.804.98v6.531a.5.5 0 0 0 .598.49l6.598-1.32a1 1 0 0 0 .804-.98v-6.53a.5.5 0 0 0-.598-.49m-3-3L8.804 8.66A1 1 0 0 0 8 9.64v6.531a.5.5 0 0 0 .598.49L9 16.58v-3.94a3 3 0 0 1 2.412-2.942L16 8.78v-.95a.5.5 0 0 0-.598-.49m-3-3L5.804 5.66A1 1 0 0 0 5 6.64v6.531a.5.5 0 0 0 .598.49L6 13.58V9.64a3 3 0 0 1 2.412-2.942L13 5.78v-.95a.5.5 0 0 0-.598-.49"/></svg>Despliega aplicaciones de contenedor en dispositivos de borde en unos pocos clics.

### Aplicaciones destacadas

La biblioteca integrada incluye (y sigue creciendo):

- **Home Assistant** — concentrador de automatización del hogar de código abierto
- **Ollama** — ejecuta modelos de lenguaje grandes de código abierto localmente en el borde
- **OpenClaw** — plataforma de código abierto para desplegar y gestionar aplicaciones de borde en contenedores
- **reComputer AI Suite** — Computer Vision (CV), Vision-Language Models (VLM) y Large Language Models (LLM) optimizados para hardware reComputer

Compatible con **M1 Gate**, **Raspberry Pi 4 / 5**, **NVIDIA Jetson** y **Seeed reComputer**.

### Cómo funciona con SenseCraft Fleet

Las aplicaciones en contenedor se gestionan en [**SenseCraft Fleet**](https://seeed-fleet.com) y se despliegan a través de [**SenseCraft AI**](https://sensecraft.seeed.cc/ai) (en **`Applications`**):

- **SenseCraft Fleet** es donde residen las imágenes de contenedor: subes imágenes, defines su esquema de configuración y vinculas tus dispositivos.
- **SenseCraft AI** es donde eliges una app de tu biblioteca, seleccionas un dispositivo de destino, la configuras y lanzas el despliegue.

Tu cuenta de SenseCraft AI se vincula automáticamente con SenseCraft Fleet; los dispositivos vinculados y las apps se mantienen sincronizados en ambas plataformas.

### Plataformas compatibles

Las apps son específicas de la plataforma: la imagen y el dispositivo de destino deben coincidir:

- **Linux / ARM64** — p. ej., Seeed reComputer, Raspberry Pi 4 / 5, NVIDIA Jetson, M1 Gate
- *Linux / AMD64 — próximamente*

### Flujo de trabajo de configuración

**Seleccionar una app:** Elige desde la biblioteca de apps en SenseCraft Fleet, el catálogo integrado. Si prefieres subir tu aplicación en contenedor personalizada, tendrás que añadirla a través de [**SenseCraft Fleet**](https://seeed-fleet.com).

**Configurar la app:** Cada app expone los elementos de configuración que su autor definió en SenseCraft Fleet. Normalmente no deberías necesitar configurar nada, a menos que tengas requisitos especiales.

### Flujo de trabajo de despliegue

**Paso 1 — Seleccionar una app:** Haz clic en **Deploy Container App**. SenseCraft AI carga toda tu biblioteca de apps desde SenseCraft Fleet (catálogo integrado más cualquier app personalizada que hayas subido), cada una mostrada con nombre, icono y descripción.

**Paso 2 – Vincular un dispositivo:** Si ya tienes un dispositivo vinculado, salta al Paso 3. De lo contrario, enciende el dispositivo, conéctalo a la red y luego vincúlalo según tu hardware:

- **Dispositivo Seeed que ejecuta la imagen de fábrica de Seeed:** Introduce los últimos 6 dígitos del **ID de CPU** o de la **dirección MAC** del dispositivo para vincularlo al instante.
- **Dispositivo Seeed sin la imagen de fábrica, o dispositivo de terceros:** Obtén la dirección IP del dispositivo, abre una terminal y conéctate por SSH, luego ejecuta el comando de vinculación que se muestra en el flujo de vinculación.

Una vez que la vinculación se complete, el dispositivo aparecerá en tu lista de dispositivos vinculados.

**Paso 3 — Seleccionar un dispositivo de destino:** Elige de la lista de dispositivos vinculados compatibles con la plataforma de la app. Los dispositivos incompatibles se filtran automáticamente.

**Paso 4 — Configurar la app:** Rellena los elementos de configuración expuestos por el autor de la app. Consulta la sección [Flujo de trabajo de configuración](#flujo-de-trabajo-de-configuración) anterior para ver los tipos de control y valores predeterminados.

**Paso 5 — Despliegue con un clic:** Haz clic en **Deploy**. SenseCraft AI muestra un indicador de progreso en tiempo real y transmite el estado en cada fase. Si algo falla, el error exacto aparece en una ventana emergente para que puedas corregirlo y reintentarlo. Vuelve a desplegar con nuevos valores para actualizar un despliegue existente: el anterior se reemplaza automáticamente.

:::note
Hoy se admiten aplicaciones Docker de una sola imagen. Docker Compose (apps de varios contenedores) está en la hoja de ruta.
:::

## Grabar firmware

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10h14zm-7 1a1 1 0 0 1 1 1v3.186l.414-.414a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0l-2.121-2.121a1 1 0 1 1 1.414-1.414l.414.414V11a1 1 0 0 1 1-1m4.586-5H7.414l-2 2h13.172z"/></svg>Graba un binario de firmware precompilado en un dispositivo ESP32 directamente desde el navegador, sin instalar una herramienta de grabación aparte. Usa esto cuando tu firmware ya esté compilado con todos los parámetros integrados.

**Dispositivos compatibles:**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) *(próximamente)*
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) *(próximamente)*
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html) *(próximamente)*

### Requisitos previos:

**Un único archivo `.bin` combinado.** Si tienes binarios separados de bootloader, partición y app, combínalos antes de subirlos.

- **Arduino IDE 2.x:** Solo se genera un binario combinado cuando ejecutas **Sketch → Export Compiled Binary**. La salida `*.ino.merged.bin` se escribe en una carpeta `build/` junto a tu archivo `.ino`.
- **Arduino IDE antiguo / combinación manual:** **Export Compiled Binary** escribe archivos `.bin` separados de bootloader, partición y app; combínalos con `esptool.py merge_bin` antes de subirlos. Consulta la guía del foro de Seeed Studio: [How to export a single merged `.bin` file from Arduino IDE](https://forum.seeedstudio.com/t/how-to-export-compiled-binary-create-a-single-bin-file-for-production-and-test/274990).

### Flujo de trabajo de configuración

1. Haz clic en **Upload firmware** y sube tu archivo `.bin`.
2. **Selecciona el tipo de dispositivo** en la lista desplegable.

### Flujo de trabajo de despliegue

1. Conecta el dispositivo a tu ordenador.
2. Haz clic en **Flash firmware**. El botón muestra la fase actual, con una barra de progreso y un registro de depuración debajo: conectar serie → detectar dispositivo → grabar → reiniciar.
3. Después de que la grabación se complete, verifica el comportamiento en la ventana de vista previa.

Si algún paso falla, una ventana emergente de error explica la causa para que puedas corregirla y reintentarlo.

## Node-RED

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 128 128" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'#8F0000'}}><path fill="currentColor" d="M64 0L8.61 32.033v63.979L64 128l55.39-31.986V32.053zm.023 5.3a1 1 0 0 1 .471.132l50.022 28.873c.306.176.523.502.523.855v57.744c0 .354-.217.68-.523.856l-50.022 28.879a.99.99 0 0 1-.988 0l-50.1-28.877a.99.99 0 0 1-.494-.856V35.16c0-.353.188-.679.494-.855l50.1-28.873a1 1 0 0 1 .517-.131zM64 7.43l-49.06 28.3v17.088h20.308c3.273.019 6.052 2.326 6.363 5.524c2.41-.304 3.891-.97 4.95-1.94c1.24-1.138 2.095-2.763 3.136-4.652c1.042-1.889 2.316-4.057 4.643-5.654c1.88-1.291 4.649-1.93 7.902-2.09v-1.127c0-3.478 2.713-6.281 6.192-6.281h25.183c3.479 0 6.586 2.803 6.586 6.28v6.188c0 3.479-3.121 6.325-6.6 6.325h-25.18c-3.478 0-6.18-2.846-6.18-6.325v-.802c-2.46.146-4.36.605-5.472 1.369c-1.43.98-2.323 2.4-3.311 4.191c-.92 1.667-1.95 3.622-3.666 5.342c9.2 1.46 13.774 4.955 17.426 8.148c4.393 3.842 7.916 6.9 19.728 6.987v-.856c0-3.478 2.979-6.383 6.457-6.383h19.657V35.73zm4.434 33.52c-1.175 0-2.143.754-2.143 1.929v6.187c0 1.175.956 1.973 2.13 1.973h25.184c1.175 0 2.047-.798 2.047-1.973V42.88c0-1.175-.86-1.93-2.035-1.93zM14.94 56.774v10.287h20.307c1.175 0 2.047-.776 2.047-1.95v-6.188c0-1.175-.873-2.149-2.047-2.149zm26.793 5.983l-.002 2.353c0 3.479-3.004 6.303-6.482 6.303H14.941v20.92L64 120.641l49.06-28.307v-6.479H93.407c-3.478 0-6.457-2.744-6.457-6.222v-1.074c-12.79-.17-18.177-4.186-22.554-8.014c-4.562-3.989-8.474-7.564-22.66-7.787zm51.674 8.656c-1.174 0-2.107.857-2.107 2.031v6.08c0 1.175.933 1.979 2.107 1.979h19.655v-10.09z"/></svg>El bloque [Node-RED](https://nodered.org) te ayuda a crear flujos lógicos visuales para reCamera.

### Recursos oficiales

- [GitHub](https://github.com/node-red/node-red)
- [Documentation](https://nodered.org/docs/)

### Dispositivos compatibles

- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### Prepara tu flujo de trabajo

Después de añadir el bloque Node-RED, configura el flujo de cualquiera de estas maneras:

1. **Crear nuevo flujo de trabajo:** Conéctate a reCamera (por cable o de forma inalámbrica), abre su Panel de control y edita en línea.
2. **Subir archivo local:** Sube un flujo JSON que ya hayas creado. El sistema valida el tipo de archivo para que pueda analizarse de forma fiable.

### Seleccionar modelo de visión por IA

Los flujos JSON no incluyen binarios de modelo. Especifica qué modelo debe usar este flujo:

- **Integrado en el dispositivo:** Usa modelos preinstalados en reCamera, incluidas variantes YOLO11n para clasificación, detección, segmentación y pose.
- **Modelos públicos:** Explora los modelos públicos de SenseCraft compartidos por otros para reCamera.
- **Mi modelo:** Elige desde tu biblioteca privada.

:::caution
Si utilizas un modelo privado en **Mi modelo** y publicas la app en la comunidad pública, ese modelo también se hará público. Se te pedirá confirmación antes de publicar.
:::

## Aily Blockly

<img src="https://github.com/ailyProject.png" alt="" style={{width:'1.25em',height:'1.25em',verticalAlign:'-0.3em',marginRight:'0.35em',borderRadius:'4px'}}/>[Aily Blockly](https://aily.pro) es un entorno de programación visual. Con este bloque puedes grabar en un solo paso en dispositivos de borde los programas que hayas creado en Aily Blockly.

### Recursos oficiales

- [GitHub](https://github.com/ailyProject/aily-blockly)
- [Documentación - Sitio global](https://aily.pro/doc)
- [Documentación - Sitio de China continental](https://yiyu.pro/doc)

### Dispositivos compatibles

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

### Vincular ID de proyecto

Introduce el código de proyecto que apunta a tu plantilla pública de Aily Blockly.

#### Cómo obtener un ID de proyecto

1. Crea tu proyecto en Aily Blockly y luego haz clic en **`Build (F5)`** para compilar.
2. Después de compilar correctamente, abre el panel **Cloud Space** y haz clic en **`Sync this project to cloud`**.
3. Tu ID de proyecto aparece en el área etiquetada (**`ID: …`**); usa solo los números.
4. Repite estos pasos cada vez que cambies el proyecto para que la copia en la nube se mantenga actualizada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/tool_blocks/aily-get-project-id.png" alt="Cómo obtener un ID de proyecto de Aily Blockly" style={{width:1000, height:'auto'}}/></div>
