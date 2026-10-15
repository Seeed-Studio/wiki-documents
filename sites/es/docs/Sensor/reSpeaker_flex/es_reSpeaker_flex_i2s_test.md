---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con matrices de 4 micrófonos circulares y lineales intercambiables para una captura de audio precisa de 360° o direccional, perfecto para robótica y dispositivos inteligentes.
title: Prueba I2S de reSpeaker Flex con XIAO ESP32S3
keywords:
  - reSpeaker Flex
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_flex_xiao_i2s
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 4/16/2025
  author: Kasun Thushara
createdAt: '2026-04-16'
updatedAt: '2026-04-17'
url: https://wiki.seeedstudio.com/es/respeaker_flex_xiao_i2s/
---

Este proyecto sirve como un boceto de prueba para verificar la funcionalidad de la interfaz I2S entre el **XIAO ESP32S3** y el **ReSpeaker Flex**. El objetivo es confirmar que la transmisión y recepción de datos a través del bus I2S funcionan correctamente. Para lograrlo, el boceto genera una señal de audio de onda cuadrada sintética y la escribe en la interfaz I2S. Luego lee los datos de audio de la matriz de micrófonos de ReSpeaker Flex y verifica la integridad de las muestras recibidas.



<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Lineal con XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


## Cómo funciona

Este boceto prueba la comunicación I2S full-dúplex entre el XIAO ESP32S3 y el ReSpeaker Flex. Genera una señal de onda cuadrada de 440 Hz y la escribe continuamente en la línea de transmisión I2S mientras lee simultáneamente las muestras de audio entrantes de la matriz de micrófonos. Los datos recibidos se analizan para contar las muestras válidas (distintas de cero) como una comprobación básica de integridad. En función del número de muestras válidas, el programa determina si la ruta de recepción I2S está funcionando correctamente.

```c
#include "AudioTools.h"

const int sampleRate = 16000;  // Hz
const int frequency = 440;     // Hz square wave
const int amplitude = 500;     // peak value
const int halfWavelength = sampleRate / frequency;

AudioInfo info(sampleRate, 2, 32); // stereo, 16-bit
I2SStream i2s;
I2SConfig cfg;

int32_t sample = amplitude;
int count = 0;

void printSamplesAndCount(int &nonZero) {
  nonZero = 0;
  bool truncated = false;
  for (int i = 0; i < 32000; i++) {
    int32_t rxSample;
    size_t n = i2s.readBytes((uint8_t*)&rxSample, sizeof(rxSample));
    if (n == sizeof(rxSample)) {
      if (rxSample != 0 && rxSample != 0xFFFFFFFF) {
        nonZero++;
      }
      if (i < 200) {
        Serial.printf("%d ", rxSample);
      } else if (!truncated) {
        Serial.print("... (truncated)");
        truncated = true;
      }
    }
  }
  Serial.println();
}


void setup() {
  Serial.begin(115200);
  while (!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  cfg = i2s.defaultConfig(RXTX_MODE); // full duplex
  cfg.copyFrom(info);
  cfg.pin_bck = 8;
  cfg.pin_ws = 7;
  cfg.pin_data = 44;     // TX data pin
  cfg.pin_data_rx = 43;  // RX data pin
  cfg.is_master = true;
  i2s.begin(cfg);

  Serial.println("I2S full-duplex test start");
}

void loop() {
  // 1) Generate and write 32k samples of square wave
  for (int i = 0; i < 32000; i++) {
    if (count % halfWavelength == 0) {
      sample = -sample; // toggle polarity for square wave
    }
    i2s.write((uint8_t*)&sample, sizeof(sample)); 
    count++;
  }

  // 2) First read attempt
  int nonZero = 0;
  Serial.println("First read attempt:");
  printSamplesAndCount(nonZero);
  Serial.printf("Valid samples: %d\n", nonZero);

  // 3) Check pass/fail or do second attempt
  if (nonZero > 16000) {
    Serial.println("I2S RX PASS!");
  } else {
    Serial.println("Valid samples below threshold, trying second read...");
    nonZero = 0;
    Serial.println("Second read attempt:");
    printSamplesAndCount(nonZero);
    Serial.printf("Valid samples: %d\n", nonZero);
    if (nonZero > 16000) {
      Serial.println("I2S RX PASS!");
    } else {
      Serial.println("I2S RX FAIL!");
    }
  }

  Serial.println("Test complete");
  while (true); // stop here
}


```


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
