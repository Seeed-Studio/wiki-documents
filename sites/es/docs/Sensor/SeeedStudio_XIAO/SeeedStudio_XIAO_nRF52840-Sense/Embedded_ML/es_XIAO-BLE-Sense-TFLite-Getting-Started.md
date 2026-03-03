---
description: Primeros Pasos
title: Primeros Pasos con TensorFlow Lite en Seeed Studio XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Primeros Pasos con TensorFlow Lite en Seeed Studio XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>


Esta wiki demostrará cómo puedes usar TensorFlow Lite en Seeed Studio XIAO nRF52840 Sense y detectar gestos como golpear y flexionar usando el acelerómetro integrado. Aquí el entrenamiento de datos se realizará en el propio dispositivo.

> Para aplicaciones de IA embebida, recomendamos encarecidamente usar la "Seeed nrf52 mbed-enabled Boards Library".

## Configuración del software

Asegúrate de seguir primero la wiki ["Primeros Pasos con Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-Getting-Started) para la configuración inicial de hardware y software.

Ahora continuemos con el resto de la configuración del software.

- **Paso 1**. Descarga la [librería Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como un archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2**. Descarga la [librería tflite-micro-arduino-examples](https://github.com/lakshanthad/tflite-micro-arduino-examples) como un archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 3**. Abre Arduino IDE, navega a `Sketch > Include Library > Add .ZIP Library...` y abre ambos archivos zip descargados uno después del otro

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Paso 4.** Navega a `File > Examples > Seeed Arduino LSM6DS3 > IMU_Capture` para abrir **IMU_Capture.ino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>


- **Paso 5.** Sube los códigos y abre el **Monitor Serie**

**Nota:** Una vez que subas los códigos, no se ejecutarán automáticamente hasta que hagas clic en **Monitor Serie** en la esquina superior derecha de la ventana de Arduino.

## Entrenar datos

### Acción de golpe

Mientras el monitor serie esté abierto, comienza a entrenar datos para la acción de golpe.

- **Paso 1.** Agarra el Seeed Studio XIAO nRF52840 Sense en tu palma y comienza a golpear hacia adelante y verás algunos datos impresos en el monitor serie 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2.** Repite la acción de golpe aproximadamente 10 veces y verás nuevos datos generados después de cada golpe

- **Paso 3.** Copia y pega la salida completa del monitor serie en un archivo de texto y guarda el archivo de texto como **punch.csv**

**Nota:** Por favor copia también la primera línea que contiene **aX,aY,aZ,gX,gY,gZ**

### Acción de flexión

- **Paso 1.** Reconecta el cable USB al Seeed Studio XIAO nRF52840 Sense, abre el monitor serie, agarra el Seeed Studio XIAO nRF52840 Sense en tu palma y comienza a flexionar hacia adentro y verás algunos datos impresos en el monitor serie 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2.** Repite la acción de flexión aproximadamente 10 veces y verás nuevos datos generados después de cada flexión

- **Paso 3.** Copia y pega la salida completa del monitor serie en un archivo de texto y guarda el archivo de texto como **flex.csv**

**Nota:** Por favor copia también la primera línea que contiene **aX,aY,aZ,gX,gY,gZ**

## Generar archivo de modelo TensorFlow Lite 

Ahora generaremos un archivo de modelo TensorFlow Lite **(model.h)**, utilizando los archivos **punch.csv** y **flex.csv** que creamos anteriormente.

- **Paso 1.** Abre [este cuaderno de Python](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) que ayudará a generar el archivo model.h que necesitamos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>


- **Paso 2.** Navega a la pestaña de archivos en el panel de navegación izquierdo, arrastra y suelta los archivos **punch.csv** y **flex.csv** dentro

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>


- **Paso 3.** Dentro de la sección **Setup Python Environment**, cambia el código de **pip install tensorflow==2.0.0-rc1** a **pip install tensorflow** 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>


- **Paso 4.** Navega a `Runtime > Run all` para ejecutar todas las celdas de código

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>


- **Paso 5.** Haz clic en **Run anyway** para el mensaje de error que aparece

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


- **Paso 6.** Una vez que todas las celdas de código se ejecuten, encontrarás un nuevo archivo **model.h** generado bajo la pestaña **files** que vimos antes

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>


**Nota:** Si no puedes ver el archivo **model.h** anterior, actualiza la página.

- **Paso 7.** Haz clic derecho en el archivo y haz clic en **Download** para descargar el archivo a tu PC

## Inferencia 

Ahora usaremos el archivo de modelo TensorFlow Lite descargado **(model.h)** para reconocer las acciones de golpe y flexión desde el Seeed Studio XIAO nRF52840 Sense.

- **Paso 1.** Navega a la ruta de la librería **Seeed_Arduino_LSM6DS3** (normalmente bajo **Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3**), y visita **examples > IMU_Classifier**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>


- **Paso 2.** Reemplaza el archivo **model.h** con el que descargamos anteriormente

- **Paso 3.** Haz doble clic en **IMU_Classifier.ino** y sube el código al Seeed Studio XIAO nRF52840 Sense.

### Acción de golpe

Abre el **monitor serie** y realiza una acción de golpe. Verás que dará un resultado cercano a **1** junto a **punch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>


### Acción de flexión

Realiza una acción de flexión. Verás que dará un resultado cercano a **1** junto a **flex**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>

## Recursos

- **[Página web]** [Documentación de TensorFlow Lite](https://www.tensorflow.org/lite/guide)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>