---
description: I2S test with XIAO ESP32S3
title: I2S Test
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_i2s_test
last_update:
  date: 7/1/2024
  author: Jessie
---



This project is a test sketch for verifying the functionality of the I2S interface on the ReSpeaker Lite board, which integrates a [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) microcontroller and a microphone array. The sketch generates a square wave audio signal, writes it to the I2S interface, and then reads back the samples from the onboard microphone array to check the integrity of the I2S transmission and reception.


### Functionality

The sketch starts by initializing the serial communication and configuring the I2S pins, it generates a square wave audio signal based on the specified frequency and amplitude. The generated audio samples are written to the I2S interface using the `I2S.write()` function.

The sketch then reads back the samples from the microphone array through the I2S interface using the `I2S.read()` function and counts the number of non-zero samples received.

### Code

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




If the number of non-zero samples received exceeds a threshold (16000 in this case), the I2S reception is considered a pass. Otherwise, it is considered a fail.

The test results, including the I2S sample values and the pass/fail status, are printed to the Serial Monitor.

Open the `Serial Monitor` to view the test result.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-test-pass.png" alt="pir" width={800} height="auto" /></p>


