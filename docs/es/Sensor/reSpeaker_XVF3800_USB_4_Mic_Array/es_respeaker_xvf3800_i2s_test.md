---
description: El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo de micrófonos circular profesional con AEC, beamforming, supresión de ruido y captura de voz de 360°. Emparejado con el XIAO ESP32S3, permite control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre la integración perfecta y flexibilidad de modo dual.

title: Prueba I2S del reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /es/respeaker_xvf3800_xiao_i2s
last_update:
  date: 8/11/2025
  author: Kasun Thushara
---

# Prueba I2S del reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3

Este proyecto sirve como un sketch de prueba para verificar la funcionalidad de la interfaz I2S entre el **XIAO ESP32S3** y el **ReSpeaker XVF3800 USB 4-Mic Array**. El objetivo es confirmar que la transmisión y recepción de datos a través del bus I2S funcionan correctamente. Para lograr esto, el sketch genera una señal de audio sintética de onda cuadrada y la escribe en la interfaz I2S. Luego lee datos de audio del arreglo de micrófonos XVF3800 y verifica la integridad de las muestras recibidas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Objetivo

El objetivo principal de este proyecto es probar y validar tanto las operaciones de transmisión (TX) como de recepción (RX) I2S. Su propósito es asegurar que el arreglo de micrófonos ReSpeaker XVF3800 pueda enviar exitosamente datos de audio de vuelta al ESP32S3 a través de I2S. Al hacerlo, establece una línea base confiable para la comunicación I2S entre los dos dispositivos, allanando el camino para aplicaciones más avanzadas de procesamiento de audio y voz.


## Cómo Funciona

Durante la fase de configuración, el sketch inicializa la comunicación serie y arranca la interfaz I2S usando configuración estéreo con ancho de muestra de 32 bits. Los pines I2S se configuran según los mapeos de hardware del ESP32S3. En la fase de transmisión (TX), se genera una onda cuadrada de 440 Hz alternando el valor de amplitud de la señal de audio. **Se escriben un total de 32,000 muestras al bus I2S. En la fase de recepción (RX), el sketch lee 32,000 muestras del arreglo de micrófonos XVF3800. Luego cuenta cuántas de estas muestras son no-cero y válidas. Si se reciben más de 16,000 muestras válidas, la prueba pasa**. Si no, se hace un segundo intento de lectura. Si el resultado aún queda por debajo del umbral, la prueba se marca como fallida.

## Código

```c
#include "AudioTools.h"

const int sampleRate = 16000;  // Hz
const int frequency = 440;     // Hz square wave
const int amplitude = 500;     // peak value
const int halfWavelength = sampleRate / frequency;

AudioInfo info(sampleRate, 2, 32); // stereo, 32-bit
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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/i2s.PNG" alt="pir" width={900} height="auto" /></p>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>