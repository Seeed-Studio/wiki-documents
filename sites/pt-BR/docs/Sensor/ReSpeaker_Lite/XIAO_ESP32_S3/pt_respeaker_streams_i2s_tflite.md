---
description: Detecção de palavras‑chave com ReSpeaker Lite e TensorFlow Lite
title: Detecção de palavras‑chave no reSpeaker Lite 
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_i2s_tflite
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2024-10-09'
url: https://wiki.seeedstudio.com/pt-br/respeaker_streams_i2s_tflite/
---


Este projeto demonstra como realizar detecção de palavras‑chave usando a placa reSpeaker Lite e o TensorFlow Lite. A reSpeaker Lite é uma placa de áudio com um microcontrolador XIAO ESP32S3 integrado, que possui microfone de dois canais e alto‑falante. O projeto utiliza a biblioteca reSpeaker Lite, que é construída sobre o framework AudioTools e se integra ao TensorFlow Lite para classificação de áudio.


### Biblioteca necessária

* [TensorFlow Lite library](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)



### Funcionalidades

* Captura áudio da interface I2S usando a placa reSpeaker Lite
* Realiza detecção de palavras‑chave usando um modelo TensorFlow Lite pré‑treinado
* Classifica o áudio capturado em categorias predefinidas: `silence`, `unknown`, `yes` e `no`
* Fornece uma função de callback para responder aos comandos detectados
* Utiliza o framework AudioTools para processamento e streaming de áudio
* `AudioLogger` de fácil uso para depuração e monitoramento



### Código

Abra o sketch `streams-i2s-tflite.ino` na Arduino IDE.


Envie o sketch para a sua placa reSpeaker Lite.

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

Abra o `Serial Monitor` para visualizar a saída e quaisquer mensagens de log.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/yes_or_no.png" alt="pir" width={800} height="auto" /></p>




### Configuração

`i2s`: Cria uma instância da classe `I2SStream` para capturar áudio da interface I2S.

`tfl`: Cria uma instância da classe `TfLiteAudioStream` para processar o áudio capturado usando TensorFlow Lite.

`kCategoryLabels`: Define os rótulos de categoria para os resultados da classificação.

`copier`: Cria um objeto `StreamCopy` para copiar os dados de áudio do fluxo I2S para o fluxo TensorFlow Lite.

`channels`: Especifica o número de canais de áudio (1 para mono).

`samples_per_second`: Especifica a taxa de amostragem da entrada de áudio.

`respondToCommand`: Uma função de callback que é chamada quando um comando é detectado. Ela recebe o comando detectado, a pontuação e um sinalizador indicando se é um novo comando.


### Personalização

* Você pode modificar o array `kCategoryLabels` para definir seu próprio conjunto de rótulos de categoria para os resultados da classificação.

* A função `respondToCommand` pode ser personalizada para executar ações específicas com base nos comandos detectados.

* O modelo TensorFlow Lite pode ser substituído pelo seu próprio modelo treinado atualizando o arquivo model.h.


### Recurso

[TensorFlow Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library/tree/main/examples/streams-i2s-tflite)