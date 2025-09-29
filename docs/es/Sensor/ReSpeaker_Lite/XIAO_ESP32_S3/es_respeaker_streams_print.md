---
description: Convertidor de I2S a CSV con ReSpeaker Lite
title: Convertidor CSV
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_print
last_update:
  date: 7/1/2024
  author: Jessie
---


Este proyecto demuestra cómo capturar datos de audio desde la interfaz I2S utilizando la placa reSpeaker Lite y convertirlos a formato CSV para análisis o procesamiento posterior. El reSpeaker Lite es una placa de audio con un microcontrolador XIAO ESP32S3 integrado, que cuenta con un micrófono de doble canal y altavoz.


### Funcionalidad

* Captura datos de audio desde la interfaz I2S
* Convierte los datos de audio capturados a formato CSV
* Transmite los datos CSV a través de la interfaz serie para procesamiento posterior
* Utiliza el framework AudioTools para procesamiento y transmisión de audio
* AudioLogger fácil de usar para depuración y monitoreo


### Código

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
I2SStream i2sStream; // Access I2S as stream
CsvOutput<int32_t> csvStream(Serial);
StreamCopy copier(csvStream, i2sStream); // copy i2sStream to csvStream

// Arduino Setup
void setup(void) {
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);
    
    auto cfg = i2sStream.defaultConfig(RX_MODE);
    cfg.copyFrom(info);
    cfg.i2s_format = I2S_STD_FORMAT; // or try with I2S_LSB_FORMAT
    cfg.is_master = false;  // this module nees a master clock if the ESP32 is master
    cfg.use_apll = false;   // try with yes
    i2sStream.begin(cfg);

    // make sure that we have the correct channels set up
    csvStream.begin(info);

}

// Arduino loop - copy data
void loop() {
    copier.copy();
}
```

### Configuración

`info`: Define la configuración de audio, incluyendo la frecuencia de muestreo, número de canales (2 para estéreo, 1 para mono), y el número de bits por muestra (32 bits).

`i2sStream`: Crea una instancia de la clase `I2SStream` para acceder a la interfaz I2S como un flujo.

`csvStream`: Crea un objeto `CsvOutput` para convertir los datos de audio a formato CSV y transmitirlos a través de la interfaz serie.

`copier`: Crea un objeto `StreamCopy` para copiar los datos de audio desde el flujo I2S al flujo CSV.

`cfg`: Configura el flujo I2S con los ajustes deseados, como el formato de audio, modo maestro/esclavo, y uso de APLL.


Abre el `Serial Plotter` para ver las ondas de salida.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/waves.gif" alt="pir" width={600} height="auto" /></p>