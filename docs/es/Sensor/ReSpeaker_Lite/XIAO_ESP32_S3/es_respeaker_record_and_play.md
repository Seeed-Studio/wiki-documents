---
description: Grabación y reproducción
title: Grabación y reproducción
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_record_and_play
last_update:
  date: 7/1/2024
  author: Jessie
---


### Funcionalidad


Este proyecto demuestra un mecanismo básico de bucle de retorno utilizando la interfaz I2S, para probar las funciones de lectura y escritura de datos de audio I2S. Al cambiar el modo I2S, los datos de audio se leen desde el micrófono y luego se escriben al altavoz.


### Código

```cpp

#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
// SineWaveGenerator<int16_t> sineWave(32000);                // subclass of SoundGenerator with max amplitude of 32000
// GeneratedSoundStream<int16_t> sound(sineWave);             // Stream generated from sine wave
I2SStream out; 
I2SConfig config;
// StreamCopy copier(out, sound);                             // copies sound into i2s

uint8_t buffer[128000];
size_t bytes_read = 0;
size_t bytes_write = 0;

// Arduino Setup
void setup(void) {  
  // Open Serial 
  Serial.begin(115200);
  while(!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // start I2S
  Serial.println("starting I2S...");
  config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  // Custom I2S output pins
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 43;
  config.pin_data_rx = 44;
  config.is_master = false;
  out.begin(config);

  // Setup sine wave
  // sineWave.begin(info, N_B4);
  Serial.println("started...");
}

// Arduino loop - copy sound to out 
void loop() {
  // copier.copy();
  out.end();
  config.rx_tx_mode = RX_MODE;
  out.begin(config);
  bytes_read = out.readBytes(buffer, 128000);
  out.end();
  config.rx_tx_mode = TX_MODE;
  out.begin(config);
  bytes_write= out.write(buffer, 128000);
}
```


### Personalización


**Modificar la Duración de Lectura y Escritura**

Puedes controlar la duración de las operaciones de lectura y escritura de audio ajustando el tamaño del buffer y el número de bytes en out.readBytes y out.write. 

**Ejemplo**: 0.5 segundos de audio:

```cpp
uint8_t buffer[64000];
bytes_read = out.readBytes(buffer, 64000);
bytes_write = out.write(buffer, 64000);
```


:::tip
Asegúrate de tener suficiente memoria dinámica para acomodar el buffer, especialmente cuando leas duraciones más largas de datos de audio. Si tu dispositivo ESP32-S3 tiene memoria insuficiente, es posible que necesites optimizar el uso de memoria o considerar soluciones alternativas.
:::