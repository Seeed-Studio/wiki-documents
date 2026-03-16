---
description: Teste de I2S com XIAO ESP32S3
title: Teste de I2S
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_i2s_test
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_i2s_test/
---



Este projeto é um sketch de teste para verificar a funcionalidade da interface I2S na placa ReSpeaker Lite, que integra um microcontrolador [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) e um array de microfones. O sketch gera um sinal de áudio de onda quadrada, grava-o na interface I2S e, em seguida, lê novamente as amostras do array de microfones onboard para verificar a integridade da transmissão e recepção I2S.


### Funcionalidade

O sketch começa inicializando a comunicação serial e configurando os pinos de I2S, ele gera um sinal de áudio de onda quadrada com base na frequência e amplitude especificadas. As amostras de áudio geradas são gravadas na interface I2S usando a função `I2S.write()`.

Em seguida, o sketch lê novamente as amostras do array de microfones por meio da interface I2S usando a função `I2S.read()` e conta o número de amostras diferentes de zero recebidas.

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




Se o número de amostras diferentes de zero recebidas exceder um limite (16000 neste caso), a recepção I2S é considerada aprovada. Caso contrário, é considerada reprovada.

Os resultados do teste, incluindo os valores das amostras I2S e o status de aprovação/reprovação, são impressos no Monitor Serial.

Abra o `Serial Monitor` para visualizar o resultado do teste.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-test-pass.png" alt="pir" width={800} height="auto" /></p>


