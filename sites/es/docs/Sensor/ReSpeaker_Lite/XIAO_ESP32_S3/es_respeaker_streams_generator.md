---
description: Generador de Onda Senoidal con ReSpeaker Lite
title: Generador de Onda Senoidal con ReSpeaker Lite
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_generator
last_update:
  date: 7/1/2024
  author: Jessie
---


Este proyecto demuestra cómo generar una onda senoidal y reproducirla usando la interfaz I2S en la placa reSpeaker Lite. El reSpeaker Lite es una placa de audio con un microcontrolador XIAO ESP32S3 integrado, que cuenta con un micrófono de doble canal y altavoz.

### Funcionalidad

* Genera una onda senoidal con una frecuencia especificada
* Reproduce la onda senoidal generada a través de la interfaz I2S
* Utiliza el framework AudioTools para procesamiento de audio y streaming
* AudioLogger fácil de usar para depuración y monitoreo

### Código

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);                              // Sample Rate, Number of channels: 2=stereo, 1=mono, Number of bits per sample (int16_t = 16 bits)
SineWaveGenerator<int16_t> sineWave(32000);                // subclass of SoundGenerator with max amplitude of 32000
GeneratedSoundStream<int16_t> sound(sineWave);             // Stream generated from sine wave
I2SStream out; 
StreamCopy copier(out, sound);                             // copies sound into i2s

// Arduino Setup
void setup(void) {  
  // Open Serial 
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // start I2S
  Serial.println("starting I2S...");
  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  out.begin(config);

  // Setup sine wave
  sineWave.begin(info, N_B4);
  Serial.println("started...");
}

// Arduino loop - copy sound to out 
void loop() {
  copier.copy();
}
```

### Configuración

`info`: Define la configuración de audio, incluyendo la frecuencia de muestreo, número de canales (2 para estéreo, 1 para mono), y el número de bits por muestra (16 bits).

`sineWave`: Crea una instancia de la clase SineWaveGenerator con una amplitud máxima de 32000.

`sound`: Crea un objeto GeneratedSoundStream usando el generador sineWave.

`out`: Crea una instancia de la clase I2SStream para salida de audio.

`copier`: Crea un objeto StreamCopy para copiar el sonido generado a la salida I2S.