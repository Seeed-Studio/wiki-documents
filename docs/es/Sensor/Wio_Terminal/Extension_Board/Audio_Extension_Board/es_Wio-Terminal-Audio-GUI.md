---
description: Herramienta de Diseño de Sistemas de Audio
title: Herramienta de Diseño de Sistemas de Audio
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Audio-GUI
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Herramienta de Diseño de Sistemas de Audio

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"/></div>

Este wiki presenta cómo usar la **Herramienta de Diseño de Sistemas de Audio** para diseñar un sistema de audio para la biblioteca de Audio usando [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y [**ReSpeaker 2-Mit Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html). Esto hace que diseñar sistemas de audio sea mucho más fácil cuando puedes ver hacia dónde van las entradas y salidas.

> **Este es un fork de Seeed de la [Herramienta de Diseño de Sistemas de Audio para la Biblioteca de Audio de Teensy](https://www.pjrc.com/teensy/gui/).**

## Comenzando

- Visita la [**Herramienta de Diseño de Sistemas de Audio**](https://seeed-studio.github.io/Seeed_Arduino_Audio/) aquí. Para más información sobre esto, por favor también visita [teensy](https://www.pjrc.com/teensy/).

- Una vez que estés en el sitio, deberías ver todas las **características disponibles de la biblioteca de Audio en la columna izquierda**.

- Puedes hacer clic en cada clase y ver cuáles son las funciones disponibles dentro de cada clase y cómo usarlas.

### Diseñando un Sistema de Audio

#### Reproduciendo Archivos de Música desde la Tarjeta SD

Usemos un ejemplo paso a paso para obtener los conceptos básicos del Sistema de Diseño de Audio. Digamos que quieres simplemente reproducir una canción desde la tarjeta SD a través del altavoz mediante el hat ReSpeaker 2-Mic:

- **`INPUT`** es la reproducción desde la tarjeta SD.

- **`OUTPUT`** es la salida I2S.

- **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

Así que el diseño debería verse algo así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"/></div>

- Haz clic en **Export** en la parte superior para exportar las definiciones de Macros para el sistema y pegarlas en el IDE de Arduino.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"/></div>

#### Código de Ejemplo

Este código de ejemplo usa las definiciones de Macros del sistema de diseño previo, reproduce archivos de música desde la tarjeta SD.

:::note
Por favor asegúrate de que haya archivos de música `SDTEST1.wav`, `SDTEST2.wav`, `SDTEST3.wav` y `SDTEST4.wav` en la tarjeta MicroSD en Wio Terminal.
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=376,277
AudioOutputI2S           i2s1;           //xy=611,277
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960       wm8960_1;       //xy=496,363
// GUItool: end automatically generated code

void setup() {
  Serial.begin(9600);
  while(!Serial);

  // Audio connections require memory to work.  For more
  // detailed information, see the MemoryAndCpuUsage example
  AudioMemory(8);

  wm8960_1.enable();
  wm8960_1.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
    Serial.println("Card Mount Failed");
    return;
  }
}

void playFile(const char *filename)
{
  Serial.print("Playing file: ");
  Serial.println(filename);
  // Start playing the file.  This sketch continues to
  // run while the file plays.
  playSdWav1.play(filename);
  // A brief delay for the library read WAV info
  delay(5);
  // Simply wait for the file to finish playing.
  while (playSdWav1.isPlaying()) {
  }
}

void loop() {
  playFile("SDTEST1.WAV");  // filenames are always uppercase 8.3 format
  delay(500);
  playFile("SDTEST2.WAV");
  delay(500);
  playFile("SDTEST3.WAV");
  delay(500);
  playFile("SDTEST4.WAV");
  delay(1500);
}
```

### Detección de Picos

Usemos la herramienta de diseño para diseñar un sistema para detección de picos mientras se reproduce la música desde la tarjeta SD.

- **`INPUT`** es la reproducción desde la tarjeta SD.

- **`OUTPUT`** es la salida I2S y dos picos! Un pico para el canal izquierdo, y uno para el canal derecho.

- **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"/></div>

#### Código de Ejemplo

Por favor revisa [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Audio-Play-Record/#peak-detection).

### Visualizador de Espectro de Audio

Este es el ejemplo de reproducir música desde la tarjeta SD mientras se realiza una FFT para obtener los datos de frecuencia para implementar un Visualizador de Espectro de Audio.

- **`INPUT`** es la reproducción desde la tarjeta SD.

- **`OUTPUT`** es la salida I2S y cálculos FFT.

- **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

Aquí presentaremos otra característica útil, el **Mixer**. Esto te permite combinar máximo **cuatro** canales de audio en uno. Esto se usa ya que realizar FFT a canales combinados (izquierdo y derecho) es más preciso en lugar de un solo canal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"/></div>

#### Código de Ejemplo

Por favor revisa [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Audio-Play-Record/#audio-spectrum-visualizer).

### Grabando y Reproduciendo en Tiempo Real

¡Esta vez diseñemos un sistema para grabar y reproducir en tiempo real!

- **`INPUT`** es la grabación desde el micrófono: **Input I2S** -> **RecordQueue**

- **`OUTPUT`** es la salida I2S. **PlayQueue** -> **Output I2S**

- **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"/></div>

#### Código de Ejemplo

Por favor revisa [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Audio-Play-Record/#record-and-play-at-real-time).