---
description: Offline SD audio recording and playback demo for XIAO 1.47 Inch Touch Display
title: SD Offline Record and Play with XIAO 1.47 Inch Touch Display
keywords:
  - XIAO
  - Display
  - SD
  - PDM
  - I2S
image: TODO
slug: /xiao_1_47_inch_touch_display_sd_unline_record_and_play
sidebar_position: 1
sku: TODO
last_update:
  date: 06/26/2026
  author: Seeed Studio
createdAt: '2026-06-26'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/xiao_1_47_inch_touch_display_sd_unline_record_and_play/
---

# SD Offline Record and Play with XIAO 1.47 Inch Touch Display

This tutorial shows how to build an offline audio recording and playback demo with the XIAO 1.47 Inch Touch Display. The demo records audio from the onboard PDM microphone into RAM, saves it as a WAV file on the microSD card, and then plays the latest recording through the reserved I2S output pins.

The display is used as a simple recorder interface. USR1 starts a new recording, and USR2 plays back the latest saved audio file.

:::note
This demo is designed for the XIAO nRF52840 Plus version of the XIAO 1.47 Inch Touch Display. The recording path uses the onboard PDM microphone and microSD slot. Playback requires an external I2S audio amplifier, such as a MAX98357A module, connected to the reserved I2S pins.
:::

## Environment Preparation

### Hardware

For this project, you need:

- Seeed Studio XIAO 1.47 Inch Touch Display
- USB-C cable for programming
- FAT-formatted microSD card
- External I2S amplifier and speaker for playback

For I2S playback, connect the amplifier as follows:

<table align="center">
 <tr>
     <th>I2S Amplifier Pin</th>
     <th>XIAO 1.47 Inch Touch Display Pin</th>
     <th>Description</th>
 </tr>
 <tr>
     <td>DIN</td>
     <td>D11</td>
     <td>I2S serial audio data</td>
 </tr>
 <tr>
     <td>BCLK</td>
     <td>D12</td>
     <td>I2S bit clock</td>
 </tr>
 <tr>
     <td>LRC / WS</td>
     <td>D13</td>
     <td>I2S word select / left-right clock</td>
 </tr>
 <tr>
     <td>VIN</td>
     <td>3V3</td>
     <td>Power input</td>
 </tr>
 <tr>
     <td>GND</td>
     <td>GND</td>
     <td>Ground</td>
 </tr>
</table>

:::caution
Keep the speaker volume low during the first test. If the amplifier has a gain or shutdown pin, configure it carefully before playback.
:::

### Software Preparation

Before starting this application, complete the basic setup guide:

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)

Make sure the following basic examples work correctly before continuing:

- Display
- Microphone
- SD
- I2S
- Button

The demo uses the following Arduino libraries and board components:

- Seeed nRF52 Boards
- Adafruit TinyUSB Library
- Seeed_GFX / TFT_eSPI display configuration
- Arduino PDM library
- SdFat from the nRF52 board package

## Hardware Pin Mapping

The offline recorder demo uses the following pins.

<table align="center">
 <tr>
     <th>Function</th>
     <th>Pin</th>
     <th>Description</th>
 </tr>
 <tr>
     <td>PDM CLK</td>
     <td>D0</td>
     <td>Onboard PDM microphone clock</td>
 </tr>
 <tr>
     <td>PDM DATA</td>
     <td>D1</td>
     <td>Onboard PDM microphone data</td>
 </tr>
 <tr>
     <td>LCD CS</td>
     <td>D2</td>
     <td>Display chip select</td>
 </tr>
 <tr>
     <td>LCD DC</td>
     <td>D3</td>
     <td>Display data/command control</td>
 </tr>
 <tr>
     <td>SD CS</td>
     <td>D6</td>
     <td>microSD card chip select</td>
 </tr>
 <tr>
     <td>LCD SCK</td>
     <td>D8</td>
     <td>Display SPI clock</td>
 </tr>
 <tr>
     <td>LCD MOSI</td>
     <td>D10</td>
     <td>Display SPI data</td>
 </tr>
 <tr>
     <td>I2S SD</td>
     <td>D11</td>
     <td>I2S audio data output</td>
 </tr>
 <tr>
     <td>I2S SCK</td>
     <td>D12</td>
     <td>I2S bit clock</td>
 </tr>
 <tr>
     <td>I2S WS</td>
     <td>D13</td>
     <td>I2S word select</td>
 </tr>
 <tr>
     <td>USR2</td>
     <td>D15</td>
     <td>Play the latest recording</td>
 </tr>
 <tr>
     <td>LCD RST</td>
     <td>D17</td>
     <td>Display hardware reset</td>
 </tr>
 <tr>
     <td>LCD BL</td>
     <td>D18</td>
     <td>Display backlight PWM</td>
 </tr>
 <tr>
     <td>USR1</td>
     <td>D19</td>
     <td>Start recording</td>
 </tr>
</table>

:::note
The LCD and microSD card share the SPI bus. The demo explicitly switches chip-select states before display and SD operations.
:::

## Code

This demo works as an offline recorder. It does not stream audio directly to the SD card while recording. Instead, it first captures a fixed-length PDM audio clip into RAM, then writes the complete buffer to a WAV file on the SD card.

The default recording format is:

- Sample rate: `16000 Hz`
- Channel: mono
- Sample width: `16-bit`
- Recording length: `5 seconds`
- Output file: `/REC_001_RAW.WAV`, `/REC_002_RAW.WAV`, and so on

:::caution
The nRF52840 has limited RAM. The default 5-second buffer uses about 160 KB. Increasing the recording time may exceed available RAM.
:::

### Step 1. Paste the Main Sketch

Paste the `sd_unline_record` demo code into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus offline RAM recorder and raw playback example.

  Flow:
    IDLE -> PREPARE_SYSTEM -> QUIET_RADIO -> PREPARE_PERIPHERALS
    -> START_HFCLK -> START_PDM -> DISCARD_WARMUP -> CAPTURE_RAM
    -> STOP_PDM -> SAVE_RAW -> DONE

  nRF52840 RAM note:
    5 seconds * 16000 samples/s * 2 bytes = 160000 bytes.
    Ten seconds would require 320000 bytes and does not fit in 256 KB RAM.

  Output:
    /REC_001_RAW.WAV

  Operation:
    Insert a FAT-formatted SD card, power on the board, then press USR1.
    The LCD shows the current recorder state and capture progress.
    After a successful recording, press USR2 to play the latest raw audio
    through a MAX98357A module connected to D11/D12/D13.
*/

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include "driver.h"
#include <PDM.h>
#include <SPI.h>
#include <SdFat.h>
#include <TFT_eSPI.h>
#include <nrf.h>

static constexpr uint8_t PDM_CLK_PIN = D0;
static constexpr uint8_t PDM_DATA_PIN = D1;
static constexpr uint8_t LCD_CS_PIN = D2;
static constexpr uint8_t LCD_DC_PIN = D3;
static constexpr uint8_t SD_CS_PIN = D6;
static constexpr uint8_t LCD_SCK_PIN = D8;
static constexpr uint8_t LCD_MOSI_PIN = D10;
static constexpr uint8_t LCD_RST_PIN = D17;
static constexpr uint8_t LCD_BL_PIN = D18;
static constexpr uint8_t USR1_PIN = D19;
static constexpr uint8_t USR2_PIN = D15;
static constexpr uint8_t I2S_DIN_PIN = D11;
static constexpr uint8_t I2S_BCLK_PIN = D12;
static constexpr uint8_t I2S_LRCLK_PIN = D13;

static constexpr uint32_t SAMPLE_RATE_HZ = 16000;
static constexpr uint16_t CHANNELS = 1;
static constexpr uint16_t BITS_PER_SAMPLE = 16;
static constexpr uint32_t RECORD_SECONDS = 5;
static constexpr uint32_t RECORD_SAMPLES = SAMPLE_RATE_HZ * RECORD_SECONDS;
static constexpr uint32_t RECORD_BYTES = RECORD_SAMPLES * sizeof(int16_t);
static constexpr uint32_t WARMUP_MS = 300;
static constexpr size_t PDM_CHUNK_SAMPLES = 256;
static constexpr int PDM_GAIN = 30;

static constexpr size_t I2S_PLAYBACK_FRAMES = 256;
static constexpr float PLAYBACK_GAIN = 0.75f;

TFT_eSPI tft;

enum RecorderState {
  STATE_IDLE,
  STATE_PREPARE_SYSTEM,
  STATE_QUIET_RADIO,
  STATE_PREPARE_PERIPHERALS,
  STATE_START_HFCLK,
  STATE_START_PDM,
  STATE_DISCARD_WARMUP,
  STATE_CAPTURE_RAM,
  STATE_STOP_PDM,
  STATE_SAVE_RAW,
  STATE_DONE,
  STATE_ERROR
};

struct WavHeader {
  char riff[4];
  uint32_t chunkSize;
  char wave[4];
  char fmt[4];
  uint32_t subchunk1Size;
  uint16_t audioFormat;
  uint16_t numChannels;
  uint32_t sampleRate;
  uint32_t byteRate;
  uint16_t blockAlign;
  uint16_t bitsPerSample;
  char data[4];
  uint32_t subchunk2Size;
};

SdFat sdCard;

// Static allocation makes the RAM cost visible at link time.
static int16_t recordBuffer[RECORD_SAMPLES];
static int16_t pdmChunk[PDM_CHUNK_SAMPLES];
static uint32_t i2sBufferA[I2S_PLAYBACK_FRAMES];
static uint32_t i2sBufferB[I2S_PLAYBACK_FRAMES];

volatile uint32_t capturedSamples = 0;
volatile uint32_t discardedSamples = 0;
volatile bool captureEnabled = false;
volatile bool captureComplete = false;

RecorderState recorderState = STATE_IDLE;
uint32_t lastProgressDrawMs = 0;
const char *errorReason = "unknown";
bool displayReady = false;
bool recordingBusy = false;
bool hasRecording = false;
bool lastUsr1State = HIGH;
bool lastUsr2State = HIGH;

char rawPath[32];

static const char *stateName(RecorderState state);

static void acquireForLcd() {
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(SD_CS_PIN, HIGH);
  pinMode(LCD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  delayMicroseconds(2);
}

static void acquireForSd() {
  pinMode(LCD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(SD_CS_PIN, HIGH);
  delayMicroseconds(2);
}

static void applyPanelFix() {
  acquireForLcd();
  tft.writecommand(0x36);
  tft.writedata(0x48);
  delay(10);
}

static void initDisplay() {
  pinMode(LCD_CS_PIN, OUTPUT);
  pinMode(LCD_DC_PIN, OUTPUT);
  pinMode(LCD_SCK_PIN, OUTPUT);
  pinMode(LCD_MOSI_PIN, OUTPUT);
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  digitalWrite(LCD_DC_PIN, HIGH);
  digitalWrite(LCD_SCK_PIN, LOW);
  digitalWrite(LCD_MOSI_PIN, LOW);
  digitalWrite(SD_CS_PIN, HIGH);

  pinMode(LCD_BL_PIN, OUTPUT);
  digitalWrite(LCD_BL_PIN, HIGH);
  analogWrite(LCD_BL_PIN, 255);

  pinMode(LCD_RST_PIN, OUTPUT);
  digitalWrite(LCD_RST_PIN, HIGH);
  delay(20);
  digitalWrite(LCD_RST_PIN, LOW);
  delay(80);
  digitalWrite(LCD_RST_PIN, HIGH);
  delay(180);

  acquireForLcd();
  tft.init();
  tft.setSwapBytes(true);
  tft.setRotation(0);
  applyPanelFix();
  tft.invertDisplay(false);
  tft.fillScreen(TFT_BLACK);
  displayReady = true;
}

static void drawHeader(const char *title, uint16_t color) {
  if (!displayReady) return;
  acquireForLcd();
  tft.fillScreen(TFT_BLACK);
  tft.setTextDatum(TL_DATUM);
  tft.setTextColor(color, TFT_BLACK);
  tft.drawString(title, 8, 10, 2);
  tft.drawFastHLine(0, 32, tft.width(), color);
}

static void showScreen(
  const char *title,
  const char *line1,
  const char *line2,
  uint16_t color
) {
  if (!displayReady) return;
  drawHeader(title, color);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.drawString(line1, 8, 54, 2);
  if (line2 && line2[0]) {
    tft.setTextColor(TFT_DARKGREY, TFT_BLACK);
    tft.drawString(line2, 8, 78, 2);
  }
}

static void showReadyScreen() {
  showScreen("RAM Recorder", "USR1: record", "USR2: play last", TFT_CYAN);
}

static void showStateScreen(RecorderState state) {
  if (!displayReady) return;
  char line[48];
  snprintf(line, sizeof(line), "State: %s", stateName(state));
  showScreen("Recorder", line, "Please wait...", TFT_YELLOW);
}

static void showRecordingProgress(uint32_t elapsedMs) {
  if (!displayReady) return;
  uint32_t now = millis();
  if (now - lastProgressDrawMs < 200) return;
  lastProgressDrawMs = now;

  uint32_t percent = min((uint32_t)100, elapsedMs * 100 / (RECORD_SECONDS * 1000UL));
  int barX = 8;
  int barY = 118;
  int barW = tft.width() - 16;
  int barH = 14;
  int fillW = barW * percent / 100;

  acquireForLcd();
  tft.fillRect(0, 42, tft.width(), 116, TFT_BLACK);
  tft.setTextColor(TFT_RED, TFT_BLACK);
  tft.drawString("Recording", 8, 54, 4);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);

  char line[40];
  snprintf(line, sizeof(line), "%lu.%01lus / %lus",
           (unsigned long)(elapsedMs / 1000),
           (unsigned long)((elapsedMs % 1000) / 100),
           (unsigned long)RECORD_SECONDS);
  tft.drawString(line, 8, 92, 2);

  tft.drawRect(barX, barY, barW, barH, TFT_DARKGREY);
  if (fillW > 2) {
    tft.fillRect(barX + 1, barY + 1, fillW - 2, barH - 2, TFT_RED);
  }
}

static void showDoneScreen() {
  if (!displayReady) return;
  drawHeader("Done", TFT_GREEN);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.drawString(rawPath, 8, 52, 2);
  tft.drawString("Saved raw WAV", 8, 78, 2);
  tft.setTextColor(TFT_CYAN, TFT_BLACK);
  tft.drawString("USR1: record", 8, 128, 2);
  tft.drawString("USR2: play raw", 8, 150, 2);
}

static void showErrorScreen() {
  if (!displayReady) return;
  showScreen("Error", errorReason, "Check Serial Monitor", TFT_RED);
}

static void showNoRecordingScreen() {
  showScreen("Playback", "No recording yet", "Press USR1 first", TFT_YELLOW);
}

static void showPlaybackDoneScreen() {
  showScreen("Playback", "Finished", "USR1: record  USR2: play", TFT_GREEN);
}

static void showPlaybackLoadError() {
  showScreen("Playback", "RAW file load failed", "Record again or check SD", TFT_RED);
}

static const char *stateName(RecorderState state) {
  switch (state) {
    case STATE_IDLE: return "IDLE";
    case STATE_PREPARE_SYSTEM: return "PREPARE_SYSTEM";
    case STATE_QUIET_RADIO: return "QUIET_RADIO";
    case STATE_PREPARE_PERIPHERALS: return "PREPARE_PERIPHERALS";
    case STATE_START_HFCLK: return "START_HFCLK";
    case STATE_START_PDM: return "START_PDM";
    case STATE_DISCARD_WARMUP: return "DISCARD_WARMUP";
    case STATE_CAPTURE_RAM: return "CAPTURE_RAM";
    case STATE_STOP_PDM: return "STOP_PDM";
    case STATE_SAVE_RAW: return "SAVE_RAW";
    case STATE_DONE: return "DONE";
    default: return "ERROR";
  }
}

static void enterState(RecorderState state) {
  recorderState = state;
  Serial.print("[STATE] ");
  Serial.println(stateName(state));
  if (state != STATE_CAPTURE_RAM && state != STATE_ERROR && state != STATE_DONE) {
    showStateScreen(state);
  }
}

static bool failWithReason(const char *reason) {
  errorReason = reason;
  Serial.print("[FAIL] ");
  Serial.println(reason);
  Serial.flush();
  return false;
}

static bool beginSd() {
  acquireForSd();
  pinMode(LCD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(SD_CS_PIN, HIGH);
  SPI.begin();

  const uint32_t freqs[] = {8000000, 4000000, 1000000, 400000};
  for (size_t i = 0; i < sizeof(freqs) / sizeof(freqs[0]); ++i) {
    SdSpiConfig cfg(SD_CS_PIN, SHARED_SPI, freqs[i], &SPI);
    if (sdCard.begin(cfg)) {
      return true;
    }
    delay(100);
  }
  return false;
}

static void selectOutputPaths() {
  for (int i = 1; i < 1000; ++i) {
    snprintf(rawPath, sizeof(rawPath), "/REC_%03d_RAW.WAV", i);
    if (!sdCard.exists(rawPath)) return;
  }

  snprintf(rawPath, sizeof(rawPath), "/REC_999_RAW.WAV");
}

static void quietRadio() {
  // This sketch never initializes Bluefruit/BLE. Ensure the RADIO peripheral
  // is disabled before the timing-sensitive capture section.
  NRF_RADIO->EVENTS_DISABLED = 0;
  NRF_RADIO->TASKS_DISABLE = 1;
  uint32_t start = millis();
  while (NRF_RADIO->STATE != RADIO_STATE_STATE_Disabled &&
         millis() - start < 20) {
    delay(1);
  }
}

static bool startExternalHfclk() {
  uint32_t current = NRF_CLOCK->HFCLKSTAT;
  bool alreadyRunning =
    ((current & CLOCK_HFCLKSTAT_STATE_Msk) >> CLOCK_HFCLKSTAT_STATE_Pos) ==
    CLOCK_HFCLKSTAT_STATE_Running;
  bool alreadyXtal =
    ((current & CLOCK_HFCLKSTAT_SRC_Msk) >> CLOCK_HFCLKSTAT_SRC_Pos) ==
    CLOCK_HFCLKSTAT_SRC_Xtal;
  if (alreadyRunning && alreadyXtal) return true;

  NRF_CLOCK->EVENTS_HFCLKSTARTED = 0;
  NRF_CLOCK->TASKS_HFCLKSTART = 1;

  uint32_t start = millis();
  while (!NRF_CLOCK->EVENTS_HFCLKSTARTED) {
    if (millis() - start > 100) return false;
  }

  uint32_t stat = NRF_CLOCK->HFCLKSTAT;
  bool running =
    ((stat & CLOCK_HFCLKSTAT_STATE_Msk) >> CLOCK_HFCLKSTAT_STATE_Pos) ==
    CLOCK_HFCLKSTAT_STATE_Running;
  bool xtal =
    ((stat & CLOCK_HFCLKSTAT_SRC_Msk) >> CLOCK_HFCLKSTAT_SRC_Pos) ==
    CLOCK_HFCLKSTAT_SRC_Xtal;
  return running && xtal;
}

static void onPdmData() {
  int bytesAvailable = PDM.available();
  if (bytesAvailable <= 0) return;
  if (bytesAvailable > (int)sizeof(pdmChunk)) {
    bytesAvailable = sizeof(pdmChunk);
  }

  int bytesRead = PDM.read(pdmChunk, bytesAvailable);
  if (bytesRead <= 0) return;

  uint32_t count = (uint32_t)bytesRead / sizeof(int16_t);
  if (!captureEnabled) {
    discardedSamples += count;
    return;
  }

  uint32_t offset = capturedSamples;
  uint32_t remaining = RECORD_SAMPLES - offset;
  if (count > remaining) count = remaining;
  if (count > 0) {
    memcpy(&recordBuffer[offset], pdmChunk, count * sizeof(int16_t));
    capturedSamples = offset + count;
  }
  if (capturedSamples >= RECORD_SAMPLES) {
    captureEnabled = false;
    captureComplete = true;
  }
}

static bool startPdm() {
  capturedSamples = 0;
  discardedSamples = 0;
  captureEnabled = false;
  captureComplete = false;

  NVIC_EnableIRQ(PDM_IRQn);
  PDM.setPins(PDM_DATA_PIN, PDM_CLK_PIN, -1);
  PDM.onReceive(onPdmData);
  PDM.setBufferSize(sizeof(pdmChunk));
  PDM.setGain(PDM_GAIN);
  return PDM.begin(CHANNELS, SAMPLE_RATE_HZ);
}

static bool stopPdmCleanly() {
  captureEnabled = false;

  // Request a peripheral stop and wait for END/STOPPED before PDM.end()
  // disconnects the pins and disables the IRQ.
  NVIC_DisableIRQ(PDM_IRQn);
  NRF_PDM->EVENTS_END = 0;
  NRF_PDM->EVENTS_STOPPED = 0;
  NRF_PDM->TASKS_STOP = 1;

  uint32_t start = millis();
  while (!NRF_PDM->EVENTS_STOPPED && millis() - start < 100) {
    delay(1);
  }
  bool stopped = NRF_PDM->EVENTS_STOPPED != 0;
  PDM.end();
  return stopped;
}

static uint32_t packStereoSample(int16_t sample) {
  int32_t scaled = (int32_t)((float)sample * PLAYBACK_GAIN);
  if (scaled > 32767) scaled = 32767;
  if (scaled < -32768) scaled = -32768;
  uint16_t s = (uint16_t)(int16_t)scaled;
  return ((uint32_t)s << 16) | s;
}

static size_t fillI2SBuffer(uint32_t *buffer, uint32_t startSample) {
  size_t frames = 0;
  while (frames < I2S_PLAYBACK_FRAMES && startSample + frames < RECORD_SAMPLES) {
    buffer[frames] = packStereoSample(recordBuffer[startSample + frames]);
    frames++;
  }
  while (frames < I2S_PLAYBACK_FRAMES) {
    buffer[frames++] = 0;
  }
  return frames;
}

static bool loadRawRecordingFromSd() {
  acquireForSd();

  File32 file;
  if (!file.open(rawPath, O_RDONLY)) return false;
  if (!file.seekSet(44)) {
    file.close();
    return false;
  }

  uint8_t *dst = reinterpret_cast<uint8_t *>(recordBuffer);
  uint32_t remaining = RECORD_BYTES;
  while (remaining > 0) {
    uint32_t chunk = min((uint32_t)4096, remaining);
    int bytesRead = file.read(dst, chunk);
    if (bytesRead <= 0) {
      file.close();
      return false;
    }
    dst += bytesRead;
    remaining -= (uint32_t)bytesRead;
  }

  file.close();
  return true;
}

static void initI2SPlayback(uint32_t *firstBuffer) {
  NRF_I2S->TASKS_STOP = 1;
  NRF_I2S->ENABLE = 0;

  NRF_I2S->EVENTS_RXPTRUPD = 0;
  NRF_I2S->EVENTS_TXPTRUPD = 0;
  NRF_I2S->EVENTS_STOPPED = 0;

  NRF_I2S->CONFIG.MODE = I2S_CONFIG_MODE_MODE_Master;
  NRF_I2S->CONFIG.RXEN = I2S_CONFIG_RXEN_RXEN_Disabled;
  NRF_I2S->CONFIG.TXEN = I2S_CONFIG_TXEN_TXEN_Enabled;
  NRF_I2S->CONFIG.MCKEN = I2S_CONFIG_MCKEN_MCKEN_Enabled;
  NRF_I2S->CONFIG.MCKFREQ = I2S_CONFIG_MCKFREQ_MCKFREQ_32MDIV63;
  NRF_I2S->CONFIG.RATIO = I2S_CONFIG_RATIO_RATIO_32X;
  NRF_I2S->CONFIG.SWIDTH = I2S_CONFIG_SWIDTH_SWIDTH_16Bit;
  NRF_I2S->CONFIG.ALIGN = I2S_CONFIG_ALIGN_ALIGN_Left;
  NRF_I2S->CONFIG.FORMAT = I2S_CONFIG_FORMAT_FORMAT_I2S;
  NRF_I2S->CONFIG.CHANNELS = I2S_CONFIG_CHANNELS_CHANNELS_Stereo;

  NRF_I2S->PSEL.MCK = 0xFFFFFFFF;
  NRF_I2S->PSEL.SCK = g_ADigitalPinMap[I2S_BCLK_PIN];
  NRF_I2S->PSEL.LRCK = g_ADigitalPinMap[I2S_LRCLK_PIN];
  NRF_I2S->PSEL.SDIN = 0xFFFFFFFF;
  NRF_I2S->PSEL.SDOUT = g_ADigitalPinMap[I2S_DIN_PIN];

  NRF_I2S->TXD.PTR = (uint32_t)firstBuffer;
  NRF_I2S->RXD.PTR = 0;
  NRF_I2S->RXTXD.MAXCNT = I2S_PLAYBACK_FRAMES;

  NRF_I2S->ENABLE = 1;
  NRF_I2S->TASKS_START = 1;
}

static void stopI2SPlayback() {
  NRF_I2S->TASKS_STOP = 1;
  uint32_t startMs = millis();
  while (!NRF_I2S->EVENTS_STOPPED && millis() - startMs < 100) {
    delay(1);
  }
  NRF_I2S->EVENTS_STOPPED = 0;
  NRF_I2S->ENABLE = 0;
}

static void playLatestRecording() {
  if (!hasRecording) {
    showNoRecordingScreen();
    delay(900);
    showReadyScreen();
    return;
  }

  showScreen("Playback", "Loading RAW audio...", rawPath, TFT_GREEN);
  if (!loadRawRecordingFromSd()) {
    showPlaybackLoadError();
    delay(1200);
    showDoneScreen();
    return;
  }

  Serial.println("[PLAY] latest RAW audio");
  showScreen("Playback", "Playing RAW audio", "Please wait...", TFT_GREEN);

  uint32_t nextSample = 0;
  uint8_t drainBuffers = 0;
  bool useA = false;
  uint32_t lastI2SEventMs = millis();

  fillI2SBuffer(i2sBufferA, nextSample);
  nextSample += I2S_PLAYBACK_FRAMES;

  initI2SPlayback(i2sBufferA);

  while (nextSample < RECORD_SAMPLES || drainBuffers < 2) {
    if (NRF_I2S->EVENTS_TXPTRUPD) {
      NRF_I2S->EVENTS_TXPTRUPD = 0;
      lastI2SEventMs = millis();

      uint32_t *nextBuffer = useA ? i2sBufferA : i2sBufferB;
      if (nextSample < RECORD_SAMPLES) {
        fillI2SBuffer(nextBuffer, nextSample);
        nextSample += I2S_PLAYBACK_FRAMES;
      } else {
        memset(nextBuffer, 0, I2S_PLAYBACK_FRAMES * sizeof(uint32_t));
        drainBuffers++;
      }
      NRF_I2S->TXD.PTR = (uint32_t)nextBuffer;
      useA = !useA;
    }

    if (millis() - lastI2SEventMs > 500) {
      Serial.println("[PLAY] I2S timeout");
      break;
    }
  }

  stopI2SPlayback();
  showPlaybackDoneScreen();
  delay(700);
  showDoneScreen();
  Serial.println("[PLAY] finished");
}

static void fillWavHeader(WavHeader &header, uint32_t pcmBytes) {
  memcpy(header.riff, "RIFF", 4);
  memcpy(header.wave, "WAVE", 4);
  memcpy(header.fmt, "fmt ", 4);
  memcpy(header.data, "data", 4);
  header.chunkSize = 36 + pcmBytes;
  header.subchunk1Size = 16;
  header.audioFormat = 1;
  header.numChannels = CHANNELS;
  header.sampleRate = SAMPLE_RATE_HZ;
  header.bitsPerSample = BITS_PER_SAMPLE;
  header.blockAlign = CHANNELS * BITS_PER_SAMPLE / 8;
  header.byteRate = SAMPLE_RATE_HZ * header.blockAlign;
  header.subchunk2Size = pcmBytes;
}

static bool writeBufferToWav(
  const char *path,
  const int16_t *samples,
  uint32_t sampleCount
) {
  acquireForSd();
  File32 file;
  if (!file.open(path, O_WRONLY | O_CREAT | O_TRUNC)) return false;

  uint32_t pcmBytes = sampleCount * sizeof(int16_t);
  WavHeader header;
  fillWavHeader(header, pcmBytes);
  if (file.write(
        reinterpret_cast<const uint8_t *>(&header),
        sizeof(header)) != sizeof(header)) {
    file.close();
    sdCard.remove(path);
    return false;
  }

  const uint8_t *data = reinterpret_cast<const uint8_t *>(samples);
  uint32_t offset = 0;
  while (offset < pcmBytes) {
    uint32_t chunk = min((uint32_t)4096, pcmBytes - offset);
    size_t written = file.write(data + offset, chunk);
    if (written == 0) {
      file.close();
      sdCard.remove(path);
      return false;
    }
    offset += written;
  }

  file.flush();
  file.close();
  return true;
}

static bool runRecorder() {
  errorReason = "unknown";
  lastProgressDrawMs = 0;
  enterState(STATE_PREPARE_SYSTEM);
  pinMode(LCD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);

  enterState(STATE_QUIET_RADIO);
  quietRadio();

  enterState(STATE_PREPARE_PERIPHERALS);
  if (!beginSd()) return failWithReason("SD mount failed");
  selectOutputPaths();
  digitalWrite(SD_CS_PIN, HIGH);

  enterState(STATE_START_HFCLK);
  if (!startExternalHfclk()) return failWithReason("external HFCLK start failed");

  enterState(STATE_START_PDM);
  if (!startPdm()) return failWithReason("PDM begin failed");

  enterState(STATE_DISCARD_WARMUP);
  uint32_t warmupStart = millis();
  while (millis() - warmupStart < WARMUP_MS) delay(1);

  enterState(STATE_CAPTURE_RAM);
  capturedSamples = 0;
  captureComplete = false;
  captureEnabled = true;
  uint32_t captureStart = millis();
  while (!captureComplete) {
    showRecordingProgress(millis() - captureStart);
    if (millis() - captureStart > (RECORD_SECONDS + 2) * 1000UL) {
      captureEnabled = false;
      return failWithReason("PDM capture timeout");
    }
    delay(1);
  }
  enterState(STATE_STOP_PDM);
  if (!stopPdmCleanly()) return failWithReason("PDM stop failed");

  enterState(STATE_SAVE_RAW);
  if (!writeBufferToWav(rawPath, recordBuffer, RECORD_SAMPLES)) {
    return failWithReason("save RAW WAV failed");
  }

  enterState(STATE_DONE);
  showDoneScreen();
  return true;
}

static void haltWithError() {
  enterState(STATE_ERROR);
  showErrorScreen();
  uint32_t lastPrintMs = 0;
  while (1) {
    if (Serial && millis() - lastPrintMs >= 1000) {
      lastPrintMs = millis();
      Serial.print("[ERROR] state=");
      Serial.print(stateName(recorderState));
      Serial.print(" reason=");
      Serial.println(errorReason);
      Serial.flush();
    }
    delay(240);
  }
}

void setup() {
  Serial.begin(115200);

  pinMode(USR1_PIN, INPUT_PULLUP);
  pinMode(USR2_PIN, INPUT_PULLUP);
  initDisplay();
  showReadyScreen();

  uint32_t serialStartMs = millis();
  while (!Serial && millis() - serialStartMs < 2000) delay(10);

  Serial.println();
  Serial.println("=== XIAO nRF52840 Plus RAM PDM recorder ===");
  Serial.print("[RAM] record buffer bytes=");
  Serial.println(RECORD_BYTES);
  Serial.println("[RADIO] BLE is not initialized by this sketch");
  Serial.println("[PDM] library uses EasyDMA double buffering");

  enterState(STATE_IDLE);
  showReadyScreen();
}

void loop() {
  bool usr1State = digitalRead(USR1_PIN);
  bool usr2State = digitalRead(USR2_PIN);

  if (lastUsr1State == HIGH && usr1State == LOW && !recordingBusy) {
    delay(20);
    if (digitalRead(USR1_PIN) == LOW) {
      recordingBusy = true;
      if (!runRecorder()) haltWithError();
      hasRecording = true;

      Serial.print("[SAVE] ");
      Serial.println(rawPath);

      recordingBusy = false;
      showDoneScreen();
    }
  }

  if (lastUsr2State == HIGH && usr2State == LOW && !recordingBusy) {
    delay(20);
    if (digitalRead(USR2_PIN) == LOW) {
      playLatestRecording();
    }
  }

  lastUsr1State = usr1State;
  lastUsr2State = usr2State;
  delay(20);
}
```

### Step 2. Create `driver.h`

Create a new file named `driver.h` in the same folder as your Arduino sketch by clicking on the arrow next to the example tab and selecting **New Tab**.

Name the new file as `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Paste the following configuration into `driver.h`:

```cpp
#define BOARD_SCREEN_COMBO 75
#define USE_XIAO_TFT_DISPLAY_BOARD
```

### Step 3. Upload and Test

1. Insert a FAT-formatted microSD card.
2. Connect the I2S amplifier and speaker if you want to test playback.
3. Open Arduino IDE.
4. Select the XIAO nRF52840 Plus board.
5. Select the correct serial port.
6. Paste the main sketch.
7. Create `driver.h` in the same sketch folder.
8. Upload the sketch.
9. Press USR1 to start recording.
10. Wait until the display shows the saved WAV file.
11. Press USR2 to play the latest recording through the I2S amplifier.

## Expected Result

After uploading the sketch, the display shows the RAM recorder interface.

When USR1 is pressed, the display shows the recorder state and then a recording progress bar. After the recording is complete, the firmware writes a WAV file to the microSD card and shows the saved file name.

When USR2 is pressed, the firmware loads the latest saved WAV file from the SD card into RAM and plays it through the I2S output pins.

The serial monitor also prints the recorder state changes, buffer size, SD save path, and playback status.

## Code Function Explanation

This section explains the library APIs used by the demo and the settings users can adjust.

### TFT Display APIs

- **`tft.init()`**: Initializes the TFT display driver and its SPI communication.

- **`tft.setSwapBytes(true)`**: Swaps byte order for 16-bit color data. This is required by many RGB565 display workflows to keep colors correct.

- **`tft.setRotation(0)`**: Sets the screen orientation. The demo uses portrait orientation for the 172 x 320 display.

- **`tft.writecommand()` and `tft.writedata()`**: Send a command and data directly to the LCD controller. The demo uses them for the panel-specific memory access configuration.

- **`tft.invertDisplay(false)`**: Controls display color inversion. If colors look inverted, this is one of the first settings to check.

- **`tft.fillScreen(color)`**: Clears or fills the complete display with one color.

- **`tft.setTextDatum()`**: Sets the text reference point used by later text drawing operations.

- **`tft.setTextColor(foreground, background)`**: Sets text and background colors.

- **`tft.drawString(text, x, y, font)`**: Draws a text string at a fixed position using a selected built-in font.

- **`tft.drawFastHLine(x, y, width, color)`**: Draws a horizontal separator line.

- **`tft.drawRect()` and `tft.fillRect()`**: Draw outlined and filled rectangles. The demo uses them for progress bars and screen updates.

### PDM Microphone APIs

- **`PDM.setPins(dataPin, clockPin, pwrPin)`**: Assigns the PDM microphone data and clock pins. The demo uses D1 for data and D0 for clock.

- **`PDM.onReceive(callback)`**: Registers a callback that runs when new PDM microphone data is available.

- **`PDM.setBufferSize(bytes)`**: Sets the internal PDM transfer buffer size.

- **`PDM.setGain(value)`**: Sets the PDM microphone gain. Higher values increase recording level but may clip louder sounds.

- **`PDM.begin(channels, sampleRate)`**: Starts PDM capture with the selected channel count and sample rate.

- **`PDM.available()`**: Returns the number of available audio bytes in the PDM buffer.

- **`PDM.read(buffer, bytes)`**: Reads captured microphone data into a user buffer.

- **`PDM.end()`**: Stops the PDM library and releases the microphone peripheral.

### SD and SPI APIs

- **`SPI.begin()`**: Initializes the shared SPI bus used by the display and microSD card.

- **`SdSpiConfig(csPin, SHARED_SPI, frequency, &SPI)`**: Configures SdFat to use the shared SPI bus with the selected chip-select pin and speed.

- **`sdCard.begin(config)`**: Mounts the microSD card. The demo tries multiple SPI speeds for better compatibility.

- **`sdCard.exists(path)`**: Checks whether a file already exists. The demo uses it to select the next available recording filename.

- **`File32::open(path, flags)`**: Opens a file for reading or writing.

- **`file.write(buffer, length)`**: Writes WAV header or PCM data to the SD card.

- **`file.read(buffer, length)`**: Reads saved audio data back from the SD card before playback.

- **`file.seekSet(offset)`**: Moves the read pointer. The demo skips the 44-byte WAV header before loading PCM samples.

- **`file.flush()`**: Forces pending file data to be written to the SD card.

- **`file.close()`**: Closes the file after reading or writing.

- **`sdCard.remove(path)`**: Deletes an incomplete output file if writing fails.

### I2S Playback and nRF52840 APIs

- **`NRF_I2S->CONFIG.MODE`**: Sets the I2S peripheral as master mode.

- **`NRF_I2S->CONFIG.TXEN`**: Enables I2S transmit mode for audio output.

- **`NRF_I2S->CONFIG.MCKFREQ`**: Selects the master clock frequency used to derive the I2S clocks.

- **`NRF_I2S->CONFIG.RATIO`**: Sets the MCLK to LRCLK ratio.

- **`NRF_I2S->CONFIG.SWIDTH`**: Sets the audio sample width. The demo uses 16-bit samples.

- **`NRF_I2S->CONFIG.CHANNELS`**: Sets stereo output. Mono microphone samples are duplicated to left and right channels.

- **`NRF_I2S->PSEL.SCK`, `PSEL.LRCK`, and `PSEL.SDOUT`**: Map the I2S clock and data signals to D12, D13, and D11.

- **`NRF_I2S->TXD.PTR`**: Points the I2S EasyDMA engine to the next playback buffer.

- **`NRF_I2S->RXTXD.MAXCNT`**: Sets how many 32-bit words the I2S peripheral should transmit from the buffer.

- **`NRF_I2S->TASKS_START`**: Starts I2S playback.

- **`NRF_I2S->EVENTS_TXPTRUPD`**: Indicates that the I2S peripheral is ready for the next transmit buffer pointer.

- **`NRF_I2S->TASKS_STOP`**: Requests I2S playback stop.

- **`NRF_I2S->ENABLE`**: Enables or disables the I2S peripheral.

- **`NVIC_EnableIRQ(PDM_IRQn)` and `NVIC_DisableIRQ(PDM_IRQn)`**: Enable and disable the PDM interrupt at the NVIC level.

- **`NRF_CLOCK->TASKS_HFCLKSTART`**: Starts the external high-frequency clock, which improves timing stability during audio capture.

- **`NRF_RADIO->TASKS_DISABLE`**: Disables the radio peripheral before the timing-sensitive recording section.



### User-Adjustable Settings

- **Recording sample rate**: `SAMPLE_RATE_HZ` controls the PDM recording sample rate.

```cpp
static constexpr uint32_t SAMPLE_RATE_HZ = 16000;
```

- **Recording length**: `RECORD_SECONDS` controls how long each recording lasts. Increasing this value increases RAM usage.

```cpp
static constexpr uint32_t RECORD_SECONDS = 5;
```

- **PDM gain**: `PDM_GAIN` controls microphone gain. Lower it if the recording clips; raise it if the recorded sound is too quiet.

```cpp
static constexpr int PDM_GAIN = 30;
```

- **PDM warm-up time**: `WARMUP_MS` discards unstable samples at the beginning of capture.

```cpp
static constexpr uint32_t WARMUP_MS = 300;
```

- **PDM chunk size**: `PDM_CHUNK_SAMPLES` controls how much audio is handled per PDM callback.

```cpp
static constexpr size_t PDM_CHUNK_SAMPLES = 256;
```

- **Playback buffer size**: `I2S_PLAYBACK_FRAMES` controls the number of frames in each I2S DMA buffer.

```cpp
static constexpr size_t I2S_PLAYBACK_FRAMES = 256;
```

- **Playback gain**: `PLAYBACK_GAIN` scales the recorded samples before I2S playback. Lower this value if the speaker is too loud.

```cpp
static constexpr float PLAYBACK_GAIN = 0.75f;
```

## Troubleshooting

- **SD mount failed**: Check that the microSD card is inserted and formatted as FAT/FAT32.

- **No WAV file is saved**: Check the Serial Monitor for the exact failing state. Also confirm that the SD card is writable.

- **Recording is silent**: Check the PDM microphone pins and make sure the microphone basic example works first.

- **Playback is silent**: Check the I2S amplifier wiring, power, speaker connection, and amplifier shutdown/gain settings.

- **Playback is too loud**: Reduce `PLAYBACK_GAIN` before uploading again.

- **The program reports PDM capture timeout**: Reduce system load, keep BLE disabled, and test again with the default 5-second recording length.

## Resources

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)
- [Seeed_GFX GitHub Repository](https://github.com/Seeed-Studio/Seeed_GFX)
- [Adafruit TinyUSB Arduino Library](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)
- [SdFat Library](https://github.com/greiman/SdFat)
- TODO: Product page
- TODO: Schematic


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
