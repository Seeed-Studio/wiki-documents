---
description: Reprodutor de MP3 com XIAO ESP32S3
title: Reprodutor de MP3
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_player_spiffs
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/respeaker_player_spiffs/
---


Este projeto demonstra como usar a placa reSpeaker Lite para reproduzir arquivos MP3 armazenados no sistema de arquivos SPIFFS.



### Biblioteca necessária

* [ReSpeaker Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git)
* [ReSpeaker Lite arduino libhelix](https://github.com/limengdu/reSpeaker_Lite-arduino-libhelix)

### Funcionalidades

* Reproduz arquivos MP3 a partir do sistema de arquivos SPIFFS
* Utiliza a interface I2S para saída de áudio
* Suporta extração de metadados e callback
* Classe AudioPlayer fácil de usar para reprodução de áudio contínua


### Enviando arquivos para o SPIFFS

Você pode consultar o [Wiki](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_filesystem/#Interface-serial-periférica-sistema-de-arquivos-flash-spiffs) aqui.

Certifique-se de ter as ferramentas necessárias para enviar arquivos para o SPIFFS. Você pode usar a ferramenta "ESP32 Sketch Data Upload" na Arduino IDE ou uma ferramenta externa como "ESP32 File Uploader".

Crie uma pasta chamada "data" no diretório do seu sketch e coloque dentro dela os arquivos MP3 que deseja reproduzir.

Envie os arquivos para o SPIFFS usando a ferramenta escolhida.

### Código

```cpp
#include "AudioTools.h"
#include "AudioLibs/AudioSourceSPIFFS.h"
#include "AudioCodecs/CodecMP3Helix.h"

const char *startFilePath="/";
const char* ext="mp3";
AudioSourceSPIFFS source(startFilePath, ext);
I2SStream i2s;
MP3DecoderHelix decoder;
AudioPlayer player(source, i2s, decoder);

void printMetaData(MetaDataType type, const char* str, int len){
  Serial.print("==> ");
  Serial.print(toStr(type));
  Serial.print(": ");
  Serial.println(str);
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // setup output
  auto cfg = i2s.defaultConfig(TX_MODE);
  i2s.begin(cfg);

  // setup player
  //source.setFileFilter("*Bob Dylan*");
  player.setMetadataCallback(printMetaData);
  player.begin();
}

void loop() {
  player.copy();
}
```


### Configuração

`startFilePath`: O caminho do diretório onde os arquivos MP3 estão localizados no SPIFFS (padrão: "/").

`ext`: A extensão de arquivo dos arquivos de áudio (padrão: "mp3").

Você pode modificar essas constantes no sketch para corresponder à sua estrutura de arquivos específica e aos seus requisitos.

### Personalização

`printMetaData`: Esta função é chamada quando os metadados são extraídos do arquivo de áudio. Você pode personalizar a função para tratar os metadados de acordo com suas necessidades.

`AudioSourceSPIFFS`: Você pode alterar o filtro de arquivos descomentando a linha //source.setFileFilter("*Bob Dylan*"); e substituindo o filtro pelos critérios desejados.