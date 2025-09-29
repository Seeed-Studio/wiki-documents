---
description: Detección de Palabras Clave con ReSpeaker Lite y TensorFlow Lite
title: Detección de Palabras Clave
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_i2s_tflite
last_update:
  date: 7/1/2024
  author: Jessie
---


Este proyecto demuestra cómo realizar detección de palabras clave utilizando la placa reSpeaker Lite y TensorFlow Lite. El ReSpeaker Lite es una placa de audio con un microcontrolador XIAO ESP32S3 integrado, que cuenta con un micrófono de doble canal y altavoz. El proyecto utiliza la biblioteca reSpeaker Lite, que está construida sobre el framework AudioTools, e integra con TensorFlow Lite para clasificación de audio.


### Biblioteca Requerida

* [Biblioteca TensorFlow Lite](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)


### Funcionalidad

* Captura audio desde la interfaz I2S utilizando la placa reSpeaker Lite
* Realiza detección de palabras clave utilizando un modelo TensorFlow Lite pre-entrenado
* Clasifica el audio capturado en categorías predefinidas: `silence`, `unknown`, `yes`, y `no`
* Proporciona una función de callback para responder a comandos detectados
* Utiliza el framework AudioTools para procesamiento y transmisión de audio
* AudioLogger fácil de usar para depuración y monitoreo


### Código

Abre el sketch `streams-i2s-tflite.ino` en el IDE de Arduino.


Sube el sketch a tu placa reSpeaker Lite.

```cpp
#include "AudioTools.h"
#include "AudioLibs/TfLiteAudioStream.h"
#include "model.h"  // tensorflow model

I2SStream i2s;  // Audio source
TfLiteAudioStream tfl;  // Audio sink
const char* kCategoryLabels[4] = {
    "silence",
    "unknown",
    "yes",
    "no",
};
StreamCopy copier(tfl, i2s);  // copy mic to tfl
int channels = 1;
int samples_per_second = 16000;

void respondToCommand(const char* found_command, uint8_t score,
                      bool is_new_command) {
//  if (is_new_command) {
    char buffer[80];
    sprintf(buffer, "Result: %s, score: %d, is_new: %s", found_command, score,
            is_new_command ? "true" : "false");
    Serial.println(buffer);
//  }
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Warning);

  // setup Audioi2s input
  auto cfg = i2s.defaultConfig(RX_MODE);
  cfg.channels = channels;
  cfg.sample_rate = samples_per_second;
  cfg.use_apll = false;
  cfg.buffer_size = 512;
  cfg.buffer_count = 16;
  i2s.begin(cfg);

  // Setup tensorflow output
  auto tcfg = tfl.defaultConfig();
  tcfg.setCategories(kCategoryLabels);
  tcfg.channels = channels;
  tcfg.sample_rate = samples_per_second;
  tcfg.kTensorArenaSize = 10 * 1024;
  tcfg.respondToCommand = respondToCommand;
  tcfg.model = g_model;
  tfl.begin(tcfg);
}

void loop() { copier.copy(); }
```

Abre el `Monitor Serie` para ver la salida y cualquier mensaje de registro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/yes_or_no.png" alt="pir" width={800} height="auto" /></p>


### Configuración

`i2s`: Crea una instancia de la clase `I2SStream` para capturar audio desde la interfaz I2S.

`tfl`: Crea una instancia de la clase `TfLiteAudioStream` para procesar el audio capturado utilizando TensorFlow Lite.

`kCategoryLabels`: Define las etiquetas de categoría para los resultados de clasificación.

`copier`: Crea un objeto `StreamCopy` para copiar los datos de audio desde el stream I2S al stream TensorFlow Lite.

`channels`: Especifica el número de canales de audio (1 para mono).

`samples_per_second`: Especifica la frecuencia de muestreo de la entrada de audio.

`respondToCommand`: Una función de callback que se invoca cuando se detecta un comando. Recibe el comando detectado, puntuación, y una bandera indicando si es un comando nuevo.


### Personalización

* Puedes modificar el array `kCategoryLabels` para definir tu propio conjunto de etiquetas de categoría para los resultados de clasificación.

* La función `respondToCommand` puede ser personalizada para realizar acciones específicas basadas en los comandos detectados.

* El modelo TensorFlow Lite puede ser reemplazado con tu propio modelo entrenado actualizando el archivo model.h.


### Recurso

[Biblioteca TensorFlow Lite](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library/tree/main/examples/streams-i2s-tflite)