---
description: Prueba I2S con XIAO ESP32S3
title: Prueba I2S
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_i2s_test
last_update:
  date: 7/1/2024
  author: Jessie
---


Este proyecto es un sketch de prueba para verificar la funcionalidad de la interfaz I2S en la placa ReSpeaker Lite, que integra un microcontrolador [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) y un arreglo de micrófonos. El sketch genera una señal de audio de onda cuadrada, la escribe en la interfaz I2S, y luego lee las muestras del arreglo de micrófonos integrado para verificar la integridad de la transmisión y recepción I2S.


### Funcionalidad

El sketch comienza inicializando la comunicación serie y configurando los pines I2S, genera una señal de audio de onda cuadrada basada en la frecuencia y amplitud especificadas. Las muestras de audio generadas se escriben en la interfaz I2S usando la función `I2S.write()`.

El sketch luego lee las muestras del arreglo de micrófonos a través de la interfaz I2S usando la función `I2S.read()` y cuenta el número de muestras no cero recibidas.

### Código

```cpp
#include <ESP_I2S.h>
#include <wav_header.h>

I2SClass I2S;

const int sampleRate = 16000;                         // sample rate in Hz
const int frequency = 440;                            // frequency of square wave in Hz
const int amplitude = 500;                            // amplitude of square wave
int32_t sample = amplitude;                           // current sample value
const int halfWavelength = sampleRate / frequency;    // half wavelength of square wave

int count = 0;
int i2s_read = 0;
bool i2s_test = true;

void setup() {
  Serial.begin(115200);
  while(!Serial);             // Wait for the serial port to connect

  I2S.setPins(8, 7, 43, 44);  // Configure I2S pins
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("Failed to initialize I2S!");
    while(1);                 // Halt if failed to initialize
  }
}

void loop() {
  if(i2s_test){
    Serial.println("I2S test!");

    // Generate and write square wave samples
    for(int i = 0; i < 32000; i++){
      if(count % halfWavelength == 0){
        sample = -sample;    // Toggle sample value to create square wave
      }
      I2S.write(sample);     // Write sample to right channel
      count++;
    }

    // Read samples from I2S and count non-zero samples
    i2s_read=0;
    for(int i = 0; i < 32000; i++){
      int sample_read = I2S.read();
      Serial.print(sample_read);
      Serial.print(" ");
      if(sample_read != 0 && sample_read != 0xFFFF){
        i2s_read++;
      }
    }
    Serial.println();

    // Check if the number of valid samples is above a threshold
    if(i2s_read > 16000){
      Serial.println("I2S RX pass!");
    } else{
      i2s_read = 0;
      for(int i = 0; i < 32000; i++){
        int sample_read = I2S.read();
        if (sample_read != 0 && sample_read != 0xFFFF){
          i2s_read++;
        }
      }
      if(i2s_read > 16000)
        Serial.println("I2S RX pass!");
      else
        Serial.println("I2S RX fail!");
    }

    Serial.println("OVER");
    i2s_test = false;
  }
}
```


Si el número de muestras no cero recibidas excede un umbral (16000 en este caso), la recepción I2S se considera exitosa. De lo contrario, se considera fallida.

Los resultados de la prueba, incluyendo los valores de muestra I2S y el estado de éxito/fallo, se imprimen en el Monitor Serie.

Abre el `Monitor Serie` para ver el resultado de la prueba.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-test-pass.png" alt="pir" width={800} height="auto" /></p>