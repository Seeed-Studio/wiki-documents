---
description: Ferramenta de Design de Sistema de Áudio
title: Ferramenta de Design de Sistema de Áudio
keywords:
  - Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Audio-GUI
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Audio-GUI/
---

# Ferramenta de Design de Sistema de Áudio

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"/></div>

Este wiki apresenta como usar a **Ferramenta de Design de Sistema de Áudio** para projetar um sistema de áudio para a biblioteca Audio usando o [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) e o [**ReSpeaker 2-Mit Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html). Isso torna o design de sistemas de áudio muito mais fácil quando você pode ver para onde as entradas e saídas estão indo.

> **Este é um fork da Seeed da [Audio System Design Tool for Teensy Audio Library](https://www.pjrc.com/teensy/gui/).**

## Primeiros Passos

- Visite a [**Ferramenta de Design de Sistema de Áudio**](https://seeed-studio.github.io/Seeed_Arduino_Audio/) aqui. Para mais informações sobre isso, visite também o [teensy](https://www.pjrc.com/teensy/).

- Assim que estiver no site, você deverá ver todos os **recursos disponíveis da biblioteca Audio na coluna da esquerda**.

- Você pode clicar em cada classe e ver quais são as funções disponíveis dentro de cada classe e como usá-las.

### Projetando um Sistema de Áudio

#### Reproduzindo arquivos de música a partir do cartão SD

Vamos percorrer um exemplo para entender o básico do Sistema de Design de Áudio. Digamos que você queira simplesmente reproduzir uma música do cartão SD pelo alto-falante através do ReSpeaker 2-Mic Hat:

- **`INPUT`** é a reprodução a partir do cartão SD.

- **`OUTPUT`** é a saída I2S.

- **`wm8960`** é a unidade de controle do ReSpeaker 2-Mics.

Portanto, o design deve ser algo como isto:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"/></div>

- Clique em **Export** na parte superior para exportar as definições de Macros do sistema para colar na Arduino IDE.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"/></div>

#### Código de Exemplo

Este código de exemplo usa as definições de Macros do sistema projetado anteriormente e reproduz arquivos de música do cartão SD.

:::note
Certifique-se de que haja arquivos de música `SDTEST1.wav`, `SDTEST2.wav`, `SDTEST3.wav` e `SDTEST4.wav` no cartão MicroSD do Wio Terminal.
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

### Detecção de Pico

Vamos usar a ferramenta de design para projetar um sistema de detecção de pico enquanto reproduz a música a partir do cartão SD.

- **`INPUT`** é a reprodução a partir do cartão SD.

- **`OUTPUT`** é a saída I2S e dois picos! Um pico para o canal esquerdo e um pico para o canal direito.

- **`wm8960`** é a unidade de controle do ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"/></div>

#### Código de Exemplo

Confira [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Audio-Play-Record/#detecção-de-pico).

### Visualizador de Espectro de Áudio

Este é o exemplo de reprodução de música a partir do cartão SD enquanto é executada uma FFT para obter os dados de frequência para implementar um Visualizador de Espectro de Áudio.

- **`INPUT`** é a reprodução a partir do cartão SD.

- **`OUTPUT`** é a saída I2S e os cálculos de FFT.

- **`wm8960`** é a unidade de controle do ReSpeaker 2-Mics.

Aqui apresentaremos outro recurso útil, o **Mixer**. Ele permite combinar no máximo **quatro** canais de áudio em um só. Isso é usado porque executar a FFT em canais combinados (esquerdo e direito) é mais preciso do que em um único canal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"/></div>

#### Código de Exemplo

Confira [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Audio-Play-Record/#visualizador-de-espectro-de-áudio).

### Gravação e Reprodução em Tempo Real

Desta vez vamos projetar um sistema para gravar e reproduzir em tempo real!

- **`INPUT`** é a gravação a partir do microfone: **Input I2S** -> **RecordQueue**

- **`OUTPUT`** é a saída I2S. **PlayQueue** -> **Output I2S**

- **`wm8960`** é a unidade de controle do ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"/></div>

#### Código de Exemplo

Confira [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Audio-Play-Record/#gravar-e-reproduzir-em-tempo-real).
