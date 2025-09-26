---
description: Reconocimiento de Voz
title: Reconocimiento de Voz
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Reconocimiento de Voz en Seeed Studio XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>


Este wiki demostrará cómo puedes usar TensorFlow Lite en Seeed Studio XIAO nRF52840 Sense y realizar reconocimiento de voz usando el micrófono integrado.

> Cuando se trata de aplicaciones de IA embebida, recomendamos encarecidamente usar la "Seeed nrf52 mbed-enabled Boards Library".

## Configuración del software

Asegúrate de seguir primero el wiki ["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/es/XIAO_BLE/) para la configuración inicial de hardware y software.

Ahora continuemos con el resto de la configuración del software.

- **Paso 1**. Descarga la [biblioteca tflite-micro-arduino-examples](https://github.com/lakshanthad/tflite-micro-arduino-examples) como un archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2**. Abre Arduino IDE, navega a `Sketch > Include Library > Add .ZIP Library...` y abre el archivo zip descargado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


## Entrenar datos y generar modelo TensorFlow Lite

Ahora usaremos un notebook de Google Colab para realizar el entrenamiento de datos y generar un modelo TensorFlow Lite.

- **Paso 1.** Abre [este notebook de Python](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>


Por defecto, cargará [este conjunto de datos](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz) que puede reconocer las palabras: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

- **Paso 2.** Bajo la columna **Configure Defaults**, cambia el parámetro **WANTED_WORDS** según las palabras que quieras que el modelo reconozca. Puedes elegir entre: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>


**Nota:** En este ejemplo, se eligen las palabras **yes,no,up,down**

- **Paso 3.** Navega a `Runtime > Run all` para ejecutar todas las celdas de código

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>


- **Paso 4.** Haz clic en **Run anyway** para el mensaje de error que aparece

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


**Nota:** Este proceso tomará aproximadamente 2 horas en completarse

- **Paso 5.** Una vez que todas las celdas de código se ejecuten, navega a la pestaña **files** en la esquina izquierda y encontrarás un nuevo archivo **model.cc** generado bajo la carpeta **models**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>


**Nota:** Si no puedes ver el archivo **model.cc** anterior, actualiza la página.

- **Paso 6.** Haz clic derecho en el archivo y haz clic en **Download** para descargar el archivo a tu PC

## Inferencia 

Ahora usaremos el archivo de modelo TensorFlow Lite descargado **(model.cc)** para reconocer diferentes palabras usando el micrófono en el Seeed Studio XIAO nRF52840 Sense.

- **Paso 1.** Navega a la ruta de la biblioteca **tflite-micro-arduino-examples** (normalmente bajo **Documents > Arduino > libraries > tflite-micro-arduino-examples**), visita **examples > micro_speech** y abre **micro_features_model.cpp**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>


- **Paso 2.** Reemplaza los valores bajo `const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {` con los nuevos valores del archivo **model.cc**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width="550" height="auto" /></p>


- **Paso 3.** Cambia **g_model_len** según el valor de **model.cc**. Aquí obtuvimos **26720**

```cpp
const int g_model_len = 26720;
```

- **Paso 4.** Abre **micro_features_micro_model_settings.cpp** dentro de la carpeta **micro_speech** y añade todas las palabras que definimos en el proceso de entrenamiento. Aquí usamos **yes,no,up,down**

```cpp
#include "micro_features_micro_model_settings.h"

const char* kCategoryLabels[kCategoryCount] = {
    "silence",
    "unknown",
    "yes",
    "no",
    "up",
    "down",
};
```

- **Paso 5.** Abre **micro_features_micro_model_settings.h** dentro de la carpeta **micro_speech** y cambia **constexpr int kCategoryCount** según el número de categorías definidas. Aquí tenemos 6 categorías

```cpp
constexpr int kCategoryCount = 6;
```

- **Paso 6.** Abre **micro_speech.ino** dentro de la carpeta **micro_speech** y sube los códigos al Seeed Studio XIAO nRF52840 Sense

- **Paso 7.** Abre la **ventana del monitor serie** y di en voz alta las palabras que definimos antes. Verás que el monitor serie muestra las palabras correctas habladas después del reconocimiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>