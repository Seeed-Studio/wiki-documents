---
description: Reproductor de Tema de Star Wars con XIAO ESP32S3
title: Reproductor de Tema de Star Wars
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_memory
last_update:
  date: 7/1/2024
  author: Jessie
---

Este proyecto demuestra cómo reproducir la canción del tema de Star Wars usando la placa reSpeaker Lite.


### Funcionalidad

* Reproduce la canción del tema de Star Wars almacenada en memoria
* Utiliza la interfaz I2S para salida de audio
* Emplea el framework AudioTools para procesamiento y transmisión de audio
* AudioLogger fácil de usar para depuración y monitoreo


### Código

```cpp
#include "AudioTools.h"
#include "StarWars30.h"

AudioInfo info(22050, 1, 16);
I2SStream i2s;  // Output to I2S
MemoryStream music(StarWars30_raw, StarWars30_raw_len);
StreamCopy copier(i2s, music); // copies sound into i2s

void setup(){
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);

    auto config = i2s.defaultConfig(TX_MODE);
    config.copyFrom(info);
    i2s.begin(config);
}

void loop(){
    if (!copier.copy()){
      i2s.end();
      stop();
    }
}
```

### Configuración

`info`: Define la configuración de audio, incluyendo la frecuencia de muestreo (22050 Hz), número de canales (1 para mono), y el número de bits por muestra (16 bits).

`i2s`: Crea una instancia de la clase I2SStream para enviar audio a través de la interfaz I2S.

`music`: Crea un objeto MemoryStream para almacenar los datos de la canción del tema de Star Wars en memoria.

`copier`: Crea un objeto StreamCopy para copiar los datos de audio desde el flujo de memoria al flujo I2S.

### Personalización

Puedes reemplazar las variables `StarWars30_raw` y `StarWars30_raw_len` con tus propios datos de audio para reproducir una canción o efecto de sonido diferente.

La configuración de audio puede modificarse ajustando los parámetros del objeto AudioInfo, como la frecuencia de muestreo, número de canales, y número de bits por muestra.