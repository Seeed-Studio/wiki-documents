---
description: Reproductor MP3 con XIAO ESP32S3
title: Reproductor MP3
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_player_spiffs
last_update:
  date: 7/1/2024
  author: Jessie
---


Este proyecto demuestra cómo usar la placa reSpeaker Lite para reproducir archivos MP3 almacenados en el sistema de archivos SPIFFS.


### Biblioteca Requerida

* [Biblioteca ReSpeaker Lite](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git)
* [ReSpeaker Lite arduino libhelix](https://github.com/limengdu/reSpeaker_Lite-arduino-libhelix)

### Funcionalidad

* Reproduce archivos MP3 desde el sistema de archivos SPIFFS
* Utiliza la interfaz I2S para salida de audio
* Soporta extracción de metadatos y callback
* Clase AudioPlayer fácil de usar para reproducción de audio sin problemas


### Subiendo Archivos a SPIFFS

Puedes consultar el [Wiki](https://wiki.seeedstudio.com/es/xiao_esp32s3_sense_filesystem/#serial-peripheral-interface-flash-file-system-spiffs) aquí.

Asegúrate de tener las herramientas necesarias para subir archivos a SPIFFS. Puedes usar la herramienta "ESP32 Sketch Data Upload" en el IDE de Arduino o una herramienta externa como "ESP32 File Uploader".

Crea una carpeta llamada "data" en el directorio de tu sketch y coloca los archivos MP3 que quieres reproducir dentro de ella.

Sube los archivos a SPIFFS usando la herramienta elegida.

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


### Configuración

`startFilePath`: La ruta del directorio donde se encuentran los archivos MP3 en SPIFFS (por defecto: "/").

`ext`: La extensión de archivo de los archivos de audio (por defecto: "mp3").

Puedes modificar estas constantes en el sketch para que coincidan con tu estructura de archivos específica y requisitos.

### Personalización

`printMetaData`: Esta función se llama cuando se extraen metadatos del archivo de audio. Puedes personalizar la función para manejar los metadatos según tus necesidades.

`AudioSourceSPIFFS`: Puedes cambiar el filtro de archivos descomentando la línea //source.setFileFilter("*Bob Dylan*"); y reemplazando el filtro con tus criterios deseados.