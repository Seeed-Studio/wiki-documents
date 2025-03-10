---
description: Speech Recognition
title: Reconocimiento de Voz XIAO nRF52840
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-TFLite-Mic
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Reconocimiento de Voz en XIAO nRF52840 Sense de Seeed Studio 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" alt="pir" width={1000} height="auto" /></p>


Esta wiki demostrará cómo usar TensorFlow Lite en el Seeed Studio XIAO nRF52840 Sense y realizar el reconocimiento de voz utilizando el micrófono integrado.

> Para aplicaciones de IA embebida, recomendamos encarecidamente usar la "Seeed nrf52 mbed-enabled Boards Library".

## Configuración del software

Asegúrate de seguir primero la wiki de ["Getting Started with Seeed Studio XIAO nRF52840 (Sense)"](https://wiki.seeedstudio.com/XIAO_BLE/) para la configuración inicial del hardware y software.

Ahora pasemos al resto de la configuración del software.

- **Paso 1**. Descarga la [biblioteca tflite-micro-arduino-examples](https://github.com/lakshanthad/tflite-micro-arduino-examples) como un archivo zip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2**. Abre el IDE de Arduino, ve a `Esquema > Incluir biblioteca > Agregar biblioteca .ZIP...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


## Entrenar datos y generar el modelo TensorFlow Lite

Ahora usaremos un cuaderno de Google Colab para realizar el entrenamiento de datos y generar un modelo TensorFlow Lite.

- **Paso 1.** Abre [este cuaderno de Python](https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg" alt="pir" width={1000} height="auto" /></p>


Por defecto, se cargará [este conjunto de datos](https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz) que puede reconocer las palabras: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**

- **Paso 2.** En la columna **Configurar valores predeterminados**, cambia el parámetro **WANTED_WORDS** según las palabras que deseas que el modelo reconozca. Puedes elegir entre: **"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png" alt="pir" width={600} height="auto" /></p>


**Nota:** En este ejemplo, las palabras **yes, no, up, down** son las seleccionadas.

- **Paso 3.** Navega a `Ejecutar > Ejecutar todo` para ejecutar todas las celdas de código.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png" alt="pir" width={450} height="auto" /></p>


- **Paso 4.** Haz clic en **Ejecutar de todos modos** para el mensaje de error que aparece.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


**Nota:** Este proceso tomará alrededor de 2 horas para completarse.

- **Paso 5.** Una vez que todas las celdas de código se hayan ejecutado, navega a la pestaña **archivos** en la esquina izquierda y encontrarás un nuevo archivo **model.cc** generado en la carpeta **models**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png" alt="pir" width={300} height="auto" /></p>


**Nota:** Si no puedes ver el archivo **model.cc** arriba, actualiza la página.

- **Paso 6.** Haz clic derecho en el archivo y selecciona **Descargar** para descargar el archivo en tu PC.

## Inferencia

Ahora utilizaremos el archivo de modelo de TensorFlow Lite descargado **(model.cc)** para reconocer diferentes palabras utilizando el micrófono en el Seeed Studio XIAO nRF52840 Sense.

- **Paso 1.** Navega a la ruta de la biblioteca de **tflite-micro-arduino-examples** (normalmente en **Documentos > Arduino > libraries > tflite-micro-arduino-examples**), visita **examples > micro_speech** y abre **micro_features_model.cpp**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png" alt="pir" width={550} height="auto" /></p>


- **Paso 2.** Reemplaza los valores bajo **const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {** con los nuevos valores del archivo **model.cc**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png" alt="pir" width={550} height="auto" /></p>


- **Paso 3.** Cambia **g_model_len** de acuerdo con el valor del archivo **model.cc**. Aquí tenemos **26720**.

```cpp
const int g_model_len = 26720;
```

- **Paso 4.** Abre **micro_features_micro_model_settings.cpp** dentro de la carpeta **micro_speech** y agrega todas las palabras que definimos en el proceso de entrenamiento. Aquí usamos **yes, no, up, down**.

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

- **Paso 5.** Abre **micro_features_micro_model_settings.h** dentro de la carpeta **micro_speech** y cambia **constexpr int kCategoryCount** de acuerdo con el número de categorías definidas. Aquí tenemos 6 categorías.

```cpp
constexpr int kCategoryCount = 6;
```

- **Paso 6.** Abre **micro_speech.ino** dentro de la carpeta **micro_speech** y sube el código al Seeed Studio XIAO nRF52840 Sense.

- **Paso 7.** Abre la **ventana del monitor serie** y di en voz alta las palabras que definimos antes. Verás que el monitor serie muestra las palabras correctas que se pronunciaron después del reconocimiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png" alt="pir" width={300} height="auto" /></p>


## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>