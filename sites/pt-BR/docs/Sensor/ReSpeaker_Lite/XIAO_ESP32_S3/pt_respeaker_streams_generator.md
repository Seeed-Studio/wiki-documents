---
description: Gerador de Onda Senoidal com ReSpeaker Lite
title: Gerador de Onda Senoidal com ReSpeaker Lite
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_generator
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/respeaker_streams_generator/
---


Este projeto demonstra como gerar uma onda senoidal e reproduzi-la usando a interface I2S na placa reSpeaker Lite. A reSpeaker Lite é uma placa de áudio com um microcontrolador XIAO ESP32S3 integrado, com microfone e alto-falante de dois canais.

### Funcionalidades

* Gera uma onda senoidal com uma frequência específica
* Reproduz a onda senoidal gerada por meio da interface I2S
* Utiliza o framework AudioTools para processamento e streaming de áudio
* AudioLogger de fácil uso para depuração e monitoramento

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

### Configuração

`info`: Define a configuração de áudio, incluindo a taxa de amostragem, o número de canais (2 para estéreo, 1 para mono) e o número de bits por amostra (16 bits).

`sineWave`: Cria uma instância da classe SineWaveGenerator com uma amplitude máxima de 32000.

`sound`: Cria um objeto GeneratedSoundStream usando o gerador sineWave.

`out`: Cria uma instância da classe I2SStream para saída de áudio.

`copier`: Cria um objeto StreamCopy para copiar o som gerado para a saída I2S.

