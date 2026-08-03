---
description: reSpeaker Flex é um poderoso sistema de voz modular com XMOS XVF3800, com arrays de 4 microfones circulares e lineares intercambiáveis para captura de áudio 360° ou direcional precisa — perfeito para robótica e dispositivos inteligentes.
title: DoA e VAD reSpeaker Flex com Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_doa_vad
sku: 100070894,100026178
last_update:
  date: 05/29/2026
  author: Kasun Thushara
createdAt: '2026-05-29'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_xiao_doa_vad/
---

## Introdução 

O ReSpeaker Flex é uma solução de processamento de voz com múltiplos microfones baseada no XMOS XVF3800, projetada para aplicações embarcadas que exigem inteligência de áudio em tempo real. O XVF3800 calcula internamente a Detecção de Atividade de Voz (VAD) e a Direção de Chegada (DoA) para indicar quando a fala está presente e de que direção ela se origina. Esses resultados de inferência podem ser acessados diretamente por um MCU host via I2C usando comandos baseados em recursos, permitindo recursos como ativação por voz, localização da fonte sonora e feedback sensível à direção sem processar o áudio bruto no host.


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear com XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular com XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

:::note
O firmware que oferece suporte para este código é `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k_test5.bin`. Portanto, certifique-se de gravá-lo primeiro
:::

## Código Arduino 

```cpp
#include <Wire.h>
#include "AudioTools.h"

// ── I2C ──────────────────────────────────────────────────────────
#define XMOS_ADDR              0x2C
#define GPO_SERVICER_RESID     20   // resid
#define GPO_SERVICER_RESID_DOA 18   // cmdid — fixed from 19 to 18 (matches Python)
#define GPO_DOA_READ_NUM_BYTES  4

// ── I2S pins (XIAO ESP32S3 ↔ ReSpeaker Flex) ─────────────────────
#define I2S_BCK_PIN    8
#define I2S_WS_PIN     7
#define I2S_DATA_PIN  43   // RX from XVF3800

// ── Audio config ──────────────────────────────────────────────────
const int SAMPLE_RATE   = 16000;
const int CHANNELS      = 2;    // stereo interleaved from XVF3800
const int BITS          = 32;
const int BLOCK_SAMPLES = 512;  // samples per chunk (both channels)

AudioInfo audioInfo(SAMPLE_RATE, CHANNELS, BITS);
I2SStream i2s;

// ── Timing ────────────────────────────────────────────────────────
unsigned long lastDoaMs = 0;
const unsigned long DOA_INTERVAL_MS = 250;

// ─────────────────────────────────────────────────────────────────
bool read_doa(uint16_t &doa_angle, uint16_t &speech) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(GPO_SERVICER_RESID);
  Wire.write(GPO_SERVICER_RESID_DOA | 0x80);  // read flag
  Wire.write(GPO_DOA_READ_NUM_BYTES + 1);      // +1 for status byte
  if (Wire.endTransmission() != 0) return false;

  uint8_t total = GPO_DOA_READ_NUM_BYTES + 1;
  Wire.requestFrom(XMOS_ADDR, total);
  if (Wire.available() < total) return false;

  uint8_t status = Wire.read();  // status byte (0x00 = OK)
  uint8_t buf[4];
  for (uint8_t i = 0; i < GPO_DOA_READ_NUM_BYTES; i++) buf[i] = Wire.read();

  // Match Python: DOA = result[1] + result[2]*256
  //               SPEECH = result[3]
  doa_angle = (uint16_t)buf[0] | ((uint16_t)buf[1] << 8);
  speech    = (uint16_t)buf[2] | ((uint16_t)buf[3] << 8);

  return true;
}

// RMS on left channel only (stride 2 over stereo interleaved buffer)
float compute_rms(int32_t *samples, int total_samples) {
  double sum = 0;
  int count = 0;
  for (int i = 0; i < total_samples; i += 2) {
    double s = (double)samples[i] / (double)INT32_MAX;
    sum += s * s;
    count++;
  }
  return count > 0 ? (float)sqrt(sum / count) : 0.0f;
}

// ─────────────────────────────────────────────────────────────────
void setup() {
  Serial.begin(115200);
  while (!Serial);

  Wire.begin();
  delay(500);

  I2SConfig cfg = i2s.defaultConfig(RX_MODE);
  cfg.copyFrom(audioInfo);
  cfg.pin_bck     = I2S_BCK_PIN;
  cfg.pin_ws      = I2S_WS_PIN;
  cfg.pin_data_rx = I2S_DATA_PIN;
  cfg.is_master   = true;

  if (!i2s.begin(cfg)) {
    Serial.println("ERROR: I2S init failed");
    while (true);
  }

  Serial.println("Ready — angle | speech | rms");
}

// ─────────────────────────────────────────────────────────────────
static int32_t audioBuf[BLOCK_SAMPLES * CHANNELS];

void loop() {
  // ── I2S read ─────────────────────────────────────────────────
  size_t bytesRead = i2s.readBytes((uint8_t *)audioBuf, sizeof(audioBuf));
  float rms = 0.0f;
  if (bytesRead > 0) {
    rms = compute_rms(audioBuf, bytesRead / sizeof(int32_t));
  }

  // ── DOA poll ─────────────────────────────────────────────────
  unsigned long now = millis();
  if (now - lastDoaMs >= DOA_INTERVAL_MS) {
    lastDoaMs = now;

    uint16_t doa = 0, speech = 0;
    if (read_doa(doa, speech)) {
      Serial.printf("%4u deg | %s | %.4f\n",
        doa,
        speech ? "SPEECH" : "silent",
        rms
      );
    } else {
      Serial.println("I2C read failed");
    }
  }
}
```


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

