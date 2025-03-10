---
description: Getting Started
title: Comenzando con TensorFlow Lite en Seeed Studio XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Comenzando con TensorFlow Lite en Seeed Studio XIAO nRF52840 Sense


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

Esta wiki demostrará cómo puedes usar TensorFlow Lite en el Seeed Studio XIAO nRF52840 Sense y detectar gestos como puñetazos y flexiones utilizando el acelerómetro integrado. El entrenamiento de los datos se realizará en el propio dispositivo.

> Para aplicaciones de IA embebida, recomendamos encarecidamente usar la "Seeed nrf52 mbed-enabled Boards Library".

## Configuración del software

Asegúrate de seguir primero la wiki ["Comenzando con Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/XIAO-BLE-Sense-Getting-Started) para la configuración inicial de hardware y software.

Ahora pasemos al resto de la configuración del software.

- **Paso 1**. Descarga la [biblioteca Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como archivo zip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2**. Descarga la [biblioteca tflite-micro-arduino-examples](https://github.com/lakshanthad/tflite-micro-arduino-examples) como archivo zip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 3**. Abre el IDE de Arduino, navega a **Esquema > Incluir biblioteca > Agregar biblioteca .ZIP...** y abre ambos archivos zip descargados uno después del otro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Paso 4.** Navega a **Archivo > Ejemplos > Seeed Arduino LSM6DS3 > IMU_Capture** para abrir **IMU_Capture.ino**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>


- **Paso 5.** Subir el código y abrir el **Monitor Serial**

**Nota:** Una vez que subas el código, no se ejecutará automáticamente hasta que hagas clic en **Monitor Serial** en la esquina superior derecha de la ventana de Arduino.

## Entrenamiento de datos

### Acción de puñetazo

Mientras el monitor serial esté abierto, comienza a entrenar los datos para la acción de puñetazo.

- **Paso 1.** Toma el Seeed Studio XIAO nRF52840 Sense en tu palma y comienza a lanzar puñetazos hacia adelante; verás algunos datos impresos en el monitor serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2.** Repite la acción de puñetazo unas 10 veces y verás que se generan nuevos datos después de cada puñetazo.

- **Paso 3.** Copia y pega la salida completa del monitor serial en un archivo de texto y guarda el archivo como **punch.csv**.

**Nota:** Por favor, copia también la primera línea que contiene **aX,aY,aZ,gX,gY,gZ**.

### Acción de flexión

- **Paso 1.** Reconecta el cable USB al Seeed Studio XIAO nRF52840 Sense, abre el monitor serial, toma el Seeed Studio XIAO nRF52840 Sense en tu palma y comienza a flexionar hacia adentro; verás algunos datos impresos en el monitor serial. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2.** Repite la acción de flexión unas 10 veces y verás que se generan nuevos datos después de cada flexión.

- **Paso 3.** Copia y pega la salida completa del monitor serial en un archivo de texto y guarda el archivo como **flex.csv**.

**Nota:** Por favor, copia también la primera línea que contiene **aX,aY,aZ,gX,gY,gZ**.

## Generar el archivo del modelo TensorFlow Lite

Ahora vamos a generar un archivo del modelo TensorFlow Lite **(model.h)**, utilizando los archivos **punch.csv** y **flex.csv** que creamos antes.

- **Paso 1.** Abre [este cuaderno de Python](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) que ayudará a generar el archivo model.h que necesitamos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>


- **Paso 2.** Navega a la pestaña de archivos en el panel de navegación izquierdo, arrastra y suelta los archivos **punch.csv** y **flex.csv** dentro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>


- **Paso 3.** Dentro de la sección **Setup Python Environment**, cambia el código de **pip install tensorflow==2.0.0-rc1** a **pip install tensorflow**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>


- **Paso 4.** Navega a **Ejecutar > Ejecutar todo** para ejecutar todas las celdas de código.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>


- **Paso 5.** Haz clic en **Ejecutar de todos modos** para el mensaje de error que aparezca.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


- **Paso 6.** Una vez que todas las celdas de código se hayan ejecutado, encontrarás un nuevo archivo **model.h** generado bajo la pestaña **archivos** que viste antes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>


**Nota:** Si no puedes ver el archivo **model.h** arriba, actualiza la página.

- **Paso 7.** Haz clic derecho sobre el archivo y selecciona **Descargar** para descargar el archivo a tu PC.

## Inferencia

Ahora vamos a usar el archivo del modelo TensorFlow Lite descargado **(model.h)** para reconocer las acciones de puñetazo y flexión desde Seeed Studio XIAO nRF52840 Sense.

- **Paso 1.** Navega a la ruta de la biblioteca **Seeed_Arduino_LSM6DS3** (normalmente en **Documentos > Arduino > libraries > Seeed_Arduino_LSM6DS3**), y ve a **ejemplos > IMU_Classifier**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>


- **Paso 2.** Reemplaza el archivo **model.h** con el que descargamos antes.

- **Paso 3.** Haz doble clic en **IMU_Classifier.ino** y sube el código a tu Seeed Studio XIAO nRF52840 Sense.

### Acción de puñetazo

Abre el **monitor serial** y realiza una acción de puñetazo. Verás que el resultado será cercano a **1** junto a **punch**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>


### Acción de flexión

Realiza una acción de flexión. Verás que el resultado será cercano a **1** junto a **flex**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>


## Recursos

- **[Página web]** [Documentación de TensorFlow Lite](https://www.tensorflow.org/lite/guide)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diversas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>