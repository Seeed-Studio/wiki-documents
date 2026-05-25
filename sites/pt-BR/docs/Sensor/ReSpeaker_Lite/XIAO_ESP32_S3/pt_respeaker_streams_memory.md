---
description: Player do Tema de Star Wars com XIAO ESP32S3
title: Player do Tema de Star Wars
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_memory
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/respeaker_streams_memory/
---

Este projeto demonstra como reproduzir o tema de Star Wars usando a placa reSpeaker Lite. 



### Funcionalidade

* Reproduz o tema de Star Wars armazenado na memória
* Utiliza a interface I2S para saída de áudio
* Emprega o framework AudioTools para processamento e streaming de áudio
* `AudioLogger` de fácil utilização para depuração e monitoramento


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

### Configuração

`info`: Define a configuração de áudio, incluindo a taxa de amostragem (22050 Hz), o número de canais (1 para mono) e o número de bits por amostra (16 bits).

`i2s`: Cria uma instância da classe `I2SStream` para enviar o áudio pela interface I2S.

`music`: Cria um objeto `MemoryStream` para armazenar na memória os dados da música do tema de Star Wars.

`copier`: Cria um objeto `StreamCopy` para copiar os dados de áudio do fluxo de memória para o fluxo I2S.

### Personalização

Você pode substituir as variáveis `StarWars30_raw` e `StarWars30_raw_len` pelos seus próprios dados de áudio para reproduzir uma música ou efeito sonoro diferente.

A configuração de áudio pode ser modificada ajustando os parâmetros do objeto `AudioInfo`, como a taxa de amostragem, o número de canais e o número de bits por amostra.

