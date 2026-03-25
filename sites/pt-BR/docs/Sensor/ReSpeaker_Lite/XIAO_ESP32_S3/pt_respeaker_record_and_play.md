---
description: Gravação e reprodução
title: Gravação e reprodução
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_record_and_play
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_record_and_play/
---


### Funcionalidade



Este projeto demonstra um mecanismo básico de loopback usando a interface I2S, para testar as funções de leitura e gravação de dados de áudio I2S. Ao alternar o modo I2S, os dados de áudio são lidos do microfone e então gravados no alto-falante.



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


### Personalização


**Modificando a duração de leitura e gravação**

Você pode controlar a duração das operações de leitura e gravação de áudio ajustando o tamanho do buffer e o número de bytes em out.readBytes e out.write. 

**Exemplo**: 0,5 segundos de áudio:

```cpp
uint8_t buffer[64000];
bytes_read = out.readBytes(buffer, 64000);
bytes_write = out.write(buffer, 64000);
```


:::tip
Verifique se você tem memória dinâmica suficiente para acomodar o buffer, especialmente ao ler durações mais longas de dados de áudio. Se o seu dispositivo ESP32-S3 tiver memória insuficiente, talvez seja necessário otimizar o uso de memória ou considerar soluções alternativas.
:::






