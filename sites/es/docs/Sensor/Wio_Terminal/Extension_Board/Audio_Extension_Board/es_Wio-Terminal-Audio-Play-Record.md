---
description: Reproducir y Grabar
title: Reproducir y Grabar
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Audio-Play-Record
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Características de Audio

Este wiki presenta cómo configurar el Audio para Wio Terminal usando con ReSpeaker 2-Mic Hats.

:::note
Por favor visita la [**Descripción General de Audio**](https://wiki.seeedstudio.com/es/Wio-Terminal-Audio-Overview/) para la **Conexión de Hardware**.
:::

## Reproduciendo Audio desde Tarjeta SD

Este ejemplo reproduce un archivo de música desde una tarjeta MicroSD usando ReSpeaker 2-Mic Hat.

- Necesitarás una tarjeta MicroSD para Wio Terminal.

- Guarda tu archivo de música en formato **`.wav`** y guárdalo en tu tarjeta MicroSD. En este ejemplo, necesitarás nombrar el archivo de música como `SDTEST2.WAV`.

- Inserta la tarjeta MicroSD en Wio Terminal, sube el siguiente código a Wio Terminal.

- Asegúrate de que ReSpeaker 2-Mic esté conectado con Wio Terminal correctamente, y **un altavoz esté conectado al pin JST2.0 Speaker en el ReSpeaker 2-Mic**.

También puedes encontrar este ejemplo en la página de [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_1_03_Playing_Music/Part_1_03_Playing_Music.ino).

:::note
¡Puedes configurar `wm8960.volume(0.7)` para ajustar el volumen del altavoz! Además, también puedes descomentar `wm8960.outputSelect(HEADPHONE)` para tener el conector de audio como salida!
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

AudioPlaySdWav           playSdWav1;
AudioOutputI2S           i2s1;
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

void setup() {
  Serial.begin(9600);
  AudioMemory(8);
  while (!Serial) {};
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
  delay(1000);
}

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("Start playing");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // wait for library to parse WAV info
  }
  // do nothing while playing...
}
```

## Grabación de Sonido y Reproducción

Este ejemplo graba sonido usando el micrófono en ReSpeaker 2-Mic Hat, almacena los datos sin procesar en la tarjeta MicroSD y los reproduce a través del Altavoz.

- Necesitarás una tarjeta MicroSD para Wio Terminal.

- Sube el código a Wio Terminal.

- Presiona el **botón derecho** en la parte superior de Wio Terminal (`WIO_KEY_A`) y comenzará a grabar. Habla al micrófono de ReSpeaker 2-Mic Hat. Guarda la grabación en la tarjeta MicroSD como `RECORD.WAV`.

:::note
    Mientras grabas, presiona cualquiera de los otros dos botones para detener la grabación.
:::

- Presiona el **botón izquierdo** en la parte superior de Wio Terminal (`WIO_KEY_C`) y reproducirá el `RECORD.WAV` que acabas de grabar.

- Presiona el **botón del medio** en la parte superior de Wio Terminal (`WIO_KEY_B`) detendrá la reproducción de la grabación.

También puedes encontrar este ejemplo en la página de [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Recorder/Recorder.ino).

```cpp
// Record sound as raw data to a SD card, and play it back.
#include <Bounce.h>
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioInputI2S            i2s2;           //xy=105,63
AudioAnalyzePeak         peak1;          //xy=278,108
AudioRecordQueue         queue1;         //xy=281,63
AudioPlaySdRaw           playRaw1;       //xy=302,157
AudioOutputI2S           i2s1;           //xy=470,120
AudioConnection          patchCord1(i2s2, 0, queue1, 0);
AudioConnection          patchCord2(i2s2, 0, peak1, 0);
AudioConnection          patchCord3(playRaw1, 0, i2s1, 0);
AudioConnection          patchCord4(playRaw1, 0, i2s1, 1);

AudioControlWM8960 wm8960;

// GUItool: end automatically generated code
Bounce buttonRecord = Bounce(WIO_KEY_A, 8);
Bounce buttonStop =   Bounce(WIO_KEY_B, 8);  // 8 = 8 ms debounce time
Bounce buttonPlay =   Bounce(WIO_KEY_C, 8);

// which input on the audio shield will be used?
const int myInput = AUDIO_INPUT_MIC;

// Remember which mode we're doing
int mode = 0;  // 0=stopped, 1=recording, 2=playing

// The file where data is recorded
File frec;

void setup() {
  Serial.begin(9600);
  // Configure the pushbutton pins
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  // Audio connections require memory, and the record queue
  // uses this memory to buffer incoming audio.
  AudioMemory(60);

  // Enable the audio shield, select input, and enable output
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(1);

  // Initialize the SD card
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
}

void loop() {
  // First, read the buttons
  buttonRecord.update();
  buttonStop.update();
  buttonPlay.update();

  // Respond to button presses
  if (buttonRecord.fallingEdge()) {
    Serial.println("Record Button Press");
    if (mode == 2) stopPlaying();
    if (mode == 0) startRecording();
  }
  if (buttonStop.fallingEdge()) {
    Serial.println("Stop Button Press");
    if (mode == 1) stopRecording();
    if (mode == 2) stopPlaying();
  }
  if (buttonPlay.fallingEdge()) {
    Serial.println("Play Button Press");
    if (mode == 1) stopRecording();
    if (mode == 0) startPlaying();
  }

  // If we're playing or recording, carry on...
  if (mode == 1) {
    continueRecording();
  }
  if (mode == 2) {
    continuePlaying();
  }

  // when using a microphone, continuously adjust gain
  if (myInput == AUDIO_INPUT_MIC) adjustMicLevel();
  
}

void startRecording() {
  Serial.println("startRecording");
  if (SD.exists("RECORD.RAW")) {
    // The SD library writes new data to the end of the
    // file, so to start a new recording, the old file
    // must be deleted before new data is written.
    SD.remove("RECORD.RAW");
  }
  frec = SD.open("RECORD.RAW", FILE_WRITE);
  if (frec) {
    queue1.begin();
    mode = 1;
  }
}

void continueRecording() {
  if (queue1.available() >= 2) {
    byte buffer[512];
    // Fetch 2 blocks from the audio library and copy
    // into a 512 byte buffer.  The Arduino SD library
    // is most efficient when full 512 byte sector size
    // writes are used.
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    memcpy(buffer+256, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // write all 512 bytes to the SD card
    elapsedMicros usec = 0;
    frec.write(buffer, 512);
    // Uncomment these lines to see how long SD writes
    // are taking.  A pair of audio blocks arrives every
    // 5802 microseconds, so hopefully most of the writes
    // take well under 5802 us.  Some will take more, as
    // the SD library also must write to the FAT tables
    // and the SD card controller manages media erase and
    // wear leveling.  The queue1 object can buffer
    // approximately 301700 us of audio, to allow time
    // for occasional high SD card latency, as long as
    // the average write time is under 5802 us.
    Serial.print("SD write, us=");
    Serial.println(usec);
  }
}

void stopRecording() {
  Serial.println("stopRecording");
  queue1.end();
  if (mode == 1) {
    while (queue1.available() > 0) {
      frec.write((byte*)queue1.readBuffer(), 256);
      queue1.freeBuffer();
    }
    frec.close();
  }
  mode = 0;
}

void startPlaying() {
  Serial.println("startPlaying");
  playRaw1.play("RECORD.RAW");
  mode = 2;
}

void continuePlaying() {
  if (!playRaw1.isPlaying()) {
    playRaw1.stop();
    mode = 0;
  }
}

void stopPlaying() {
  Serial.println("stopPlaying");
  if (mode == 2) playRaw1.stop();
  mode = 0;
}

void adjustMicLevel() {
  // TODO: read the peak1 object and adjust sgtl5000_1.micGain()
  // if anyone gets this working, please submit a github pull request :-)
}
```

## Detección de Picos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detect.gif"/></div>

Este ejemplo reproduce un archivo de música desde la tarjeta MicroSD y detecta el valor pico de ambos canales y lo muestra en el Monitor Serie.

- Las mismas configuraciones que *Reproducir Audio desde Tarjeta SD* de arriba.

- Sube el código, y deberías poder ver los picos de ambos canales en el Monitor Serie, mientras la música se reproduce a través del altavoz.

```cpp
#include <Audio.h>
#include <Wire.h>
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=422,359
AudioAnalyzePeak         peak1;          //xy=611,306
AudioAnalyzePeak         peak2;          //xy=612,396
AudioOutputI2S           i2s1;           //xy=792,365
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

void setup() {
  Serial.begin(9600);
  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
  delay(1000);
}

// for best effect make your terminal/monitor a minimum of 62 chars wide and as high as you can.
elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("Start playing");
    //playSdWav1.play("SDTEST1.WAV");
    playSdWav1.play("SDTEST2.WAV");
    //playSdWav1.play("SDTEST3.WAV");
    //playSdWav1.play("SDTEST4.WAV");
    delay(10); // wait for library to parse WAV info
  }
  
  if (msecs > 40) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      int leftPeak = leftNumber * 30.0;
      int rightPeak = rightNumber * 30.0;
      int count;
      for (count=0; count < 30-leftPeak; count++) {
        Serial.print(" ");
      }
      while (count++ < 30) {
        Serial.print("<");
      }
      Serial.print("||");
      for (count=0; count < rightPeak; count++) {
        Serial.print(">");
      }
      while (count++ < 30) {
        Serial.print(" ");
      }
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.print(rightNumber);
      Serial.println();
    }
  }
}
```

## Reproduciendo Audio con la Pantalla LCD

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio.mp4" type="video/mp4" />
  </video></div>

Este ejemplo también reproduce archivos de música desde la tarjeta MicroSD y muestra los picos de ambos canales en la pantalla del Wio Terminal.

- Mismas configuraciones que *Reproduciendo Audio desde Tarjeta SD* de arriba.

- Sube el código, y deberías poder ver los picos de ambos canales en la pantalla, mientras la música se reproduce a través del altavoz.

**NOTA:** Debido a que estamos usando gráficos LCD con la biblioteca de audio, tiene una carga de trabajo mayor. Se recomienda **Hacer Overclock al SAMD51** en este ejemplo. En el IDE de Arduino, selecciona **Tools** -> **CPU Speed** -> **200MHz**. Esto aumentará el rendimiento general de los gráficos.

También puedes encontrar este ejemplo en la página de [github](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_3_03_TFT_Display/Part_3_03_TFT_Display.ino).

```cpp
#include <TFT_eSPI.h> // Hardware-specific library
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=512,375
AudioAnalyzePeak         peak2;          //xy=787,543
AudioAnalyzePeak         peak1;          //xy=790,488
AudioOutputI2S           i2s1;           //xy=827,334
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

// GUItool: end automatically generated code
TFT_eSPI tft_e = TFT_eSPI();
TFT_eSprite tft = TFT_eSprite(&tft_e);

void setup() {
  Serial.begin(9600);
  delay(500);

  tft_e.begin();
  tft_e.fillScreen(ILI9341_BLACK);
  tft.createSprite(240, 320);
  tft.fillSprite(TFT_BLACK);
  tft.setTextColor(ILI9341_YELLOW);
  //tft.setTextSize(3);
  tft.setCursor(40, 8);
  tft.println("Peak Meter");
  
  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Card Mount Failed");
      return;
  }
  delay(1000);
}

elapsedMillis msecs;

void loop() {
  if (playSdWav1.isPlaying() == false) {
    Serial.println("Start playing");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // wait for library to parse WAV info
  }
  
  if (msecs > 15) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.print(rightNumber);
      Serial.println();

      // draw the verticle bars
      int height = leftNumber * 240;
      tft.fillRect(60, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(60, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      height = rightNumber * 240;
      tft.fillRect(140, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(140, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      // a smarter approach would redraw only the changed portion...

      // draw numbers underneath each bar
      tft.fillRect(60, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(67, 284);
      tft.print(leftNumber);
      tft.fillRect(140, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(147, 284);
      tft.print(rightNumber);
      tft.pushSprite(0, 0);
    }
  }
}
```

## Demostraciones de Ejemplo

### Visualizador de Espectro de Audio

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/Audio-Spectrum.mp4" type="video/mp4" />
  </video></div>

Este es un ejemplo que utiliza la función FFT de la Biblioteca de Audio para calcular y visualizar el Espectro de Audio.

#### Características

- Espectro de Audio de Música

- Presiona botones para aumentar/disminuir el volumen

#### Código Completo

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // Hardware-specific library
#include <Bounce.h>

// The display size and color to use
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// These parameters adjust the vertical thresholds
const float maxLevel = 0.5;      // 1.0 = max, lower is more "sensitive"
const float dynamicRange = 10.0; // total range to display, in decibels
const float linearBlend = 0.4;   // useful range is 0 to 0.7

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=260,184
AudioMixer4              mixer1;         //xy=505,238
AudioOutputI2S           i2s2;           //xy=701,139
AudioAnalyzeFFT1024      fft1024_1;      //xy=761,235
AudioConnection          patchCord1(playSdWav1, 0, mixer1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s2, 0);
AudioConnection          patchCord3(playSdWav1, 1, mixer1, 1);
AudioConnection          patchCord4(playSdWav1, 1, i2s2, 1);
AudioConnection          patchCord5(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;
float val = 0.7;

Bounce buttonUp = Bounce(WIO_KEY_A, 8);
Bounce buttonDown =   Bounce(WIO_KEY_C, 8);

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
//  while (!Serial);

  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("Audio Spectrum Visualiser", 10, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
//  wm8960.outputSelect(HEADPHONE);
  wm8960.volume(val);
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("Card Mount Failed");
    return;
  }
  playSdWav1.play("SDTEST2.WAV");
  delay(20);
  
  fft1024_1.windowFunction(AudioWindowHanning1024);
  
  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
    buttonUp.update();
    buttonDown.update();
    if (buttonUp.fallingEdge() && val < 1.0) {
        val += 0.1;
    }
    if(buttonDown.fallingEdge() && val >= 0.1) {
        val -= 0.1;
    }
    wm8960.volume(val);
  
    if (fft1024_1.available()) {
        colorRainbow();
        spr.pushSprite(0, 10);
    }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
        // Serial.println(xy(x, y));
      }
      else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### Visualizador de Espectro de Micrófono

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/mic-spec.mp4" type="video/mp4" />
  </video></div>

Este es un ejemplo que utiliza los micrófonos de ReSpeaker 2-Mic Hats y cálculos FFT.

#### Característica

- Espectro de Audio de Micrófonos

#### Código Completo

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // Hardware-specific library

// The display size and color to use
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// These parameters adjust the vertical thresholds
const float maxLevel = 0.6;      // 1.0 = max, lower is more "sensitive"
const float dynamicRange = 10.0; // total range to display, in decibels
const float linearBlend = 0.6;   // useful range is 0 to 0.7

// GUItool: begin automatically generated code
AudioInputI2S            i2s1;           //xy=376,203
AudioMixer4              mixer1;         //xy=608,235
AudioAnalyzeFFT1024      fft1024_1;      //xy=770,200
AudioConnection          patchCord1(i2s1, 0, mixer1, 0);
AudioConnection          patchCord2(i2s1, 1, mixer1, 1);
AudioConnection          patchCord3(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
  //  while (!Serial);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("Mic Spectrum Visualiser", 20, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("Card Mount Failed");
    return;
  }
  delay(20);

  fft1024_1.windowFunction(AudioWindowHanning1024);

  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
  if (fft1024_1.available()) {
    colorRainbow();
    spr.pushSprite(0, 10);
  }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
        // Serial.println(xy(x, y));
      }
      else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### Grabar y Reproducir en Tiempo Real

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play.mp4" type="video/mp4" />
  </video></div>

Este es un ejemplo de grabación y reproducción en tiempo real.

#### Característica

- Grabación y reproducción en tiempo real

#### Código Completo

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioInputI2S            i2s1;           //xy=274,186
AudioRecordQueue         queue1;         //xy=550,172
AudioPlayQueue           queue2;         //xy=550,220
AudioOutputI2S           i2s2;           //xy=769,208
AudioConnection          patchCord1(i2s1, 0, queue1, 0);
AudioConnection          patchCord2(queue2, 0, i2s2, 0);
AudioConnection          patchCord3(queue2, 0, i2s2, 1);
AudioControlWM8960 wm8960;
// GUItool: end automatically generated code

const int myInput = AUDIO_INPUT_MIC;

void setup() {
  Serial.begin(9600);
//  while (!Serial);
  AudioMemory(20);
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(0.9);
  //  wm8960.outputSelect(HEADPHONE);
  queue1.begin();
}

void loop() {
  if (queue1.available() >= 2)
  {
    // Recording buffer
    byte buffer[256];
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // Playing buffer
    queue2.getBuffer();
    queue2.playBuffer();
  }
}
```
