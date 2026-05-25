---
description: Conversor I2S para CSV com ReSpeaker Lite
title: Conversor CSV
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_streams_print
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/respeaker_streams_print/
---




Este projeto demonstra como capturar dados de áudio a partir da interface I2S usando a placa reSpeaker Lite e convertê‑los para o formato CSV para posterior análise ou processamento. A reSpeaker Lite é uma placa de áudio com um microcontrolador XIAO ESP32S3 integrado, com microfone de dois canais e alto‑falante.




### Funcionalidade

* Captura dados de áudio da interface I2S
* Converte os dados de áudio capturados para o formato CSV
* Transmite os dados CSV pela interface serial para processamento posterior
* Utiliza o framework AudioTools para processamento e streaming de áudio
* AudioLogger de fácil uso para depuração e monitoramento



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

### Configuração

`info`: Define a configuração de áudio, incluindo a taxa de amostragem, número de canais (2 para estéreo, 1 para mono) e o número de bits por amostra (32 bits).

`i2sStream`: Cria uma instância da classe `I2SStream` para acessar a interface I2S como um stream.

`csvStream`: Cria um objeto `CsvOutput` para converter os dados de áudio para o formato CSV e transmiti‑los pela interface serial.

`copier`: Cria um objeto `StreamCopy` para copiar os dados de áudio do stream I2S para o stream CSV.

`cfg`: Configura o stream I2S com as definições desejadas, como o formato de áudio, modo mestre/escravo e uso do APLL.



Abra o `Serial Plotter` para visualizar as ondas de saída.



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/waves.gif" alt="pir" width={600} height="auto" /></p>
