---
description: I2S RGB with XIAO ESP32S3
title: I2S RGB Usage
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_i2s_rgb
last_update:
  date: 7/1/2024
  author: Jessie
---

This project demonstrates how to use the reSpeaker board to control a NeoPixel LED strip based on the intensity of audio input received through the I2S interface. The LED strip reacts to the audio by adjusting its brightness and color according to the average intensity of the audio samples.

### Hardware Requirements

* ReSpeaker Lite board (with integrated XIAO ESP32S3 microcontroller)

* [Grove - RGB LED Stick](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html)

* Jumper wires


### Wiring

Connect the NeoPixel LED strip to the reSpeaker board:

* Data pin of the LED strip to pin D2 of the reSpeaker

* Power and ground pins of the LED strip to the appropriate power supply

The I2S microphone is already integrated on the reSpeaker board, so no additional wiring is needed for audio input.


Modify the following constants in the sketch if needed:

`PIN`: The pin number connected to the data pin of the NeoPixel strip (default: D2)
`NUMPIXELS`: The number of pixels in the NeoPixel strip (default: 10)
`sampleRate`: The sample rate of the I2S audio input (default: 16000 Hz)


Open the `Serial Monitor` to view the average audio intensity values.

### Functionality

The sketch performs the following tasks:

Initializes the NeoPixel LED strip and sets its brightness.

Configures the I2S interface.

Continuously reads audio samples from the I2S interface in blocks of 1024 samples.

Calculates the absolute value sum of the non-zero audio samples and determines the average intensity.

Maps the average intensity to the number of active LEDs on the NeoPixel strip.

Updates the color and brightness of each LED based on its position and the mapped intensity value.

The color transitions from blue to green along the length of the strip.
Inactive LEDs are turned off.
Displays the updated LED colors on the NeoPixel strip.

Prints the average audio intensity value to the Serial Monitor for debugging purposes.

Repeats the process with a delay of 100 milliseconds between each iteration.


### Code

```cpp
/**
 * @file i2s_rgb.ino
 * @author Seeed Studio
 * @brief Making a music spectrometer
 * @version 1.0
 * @date 2024-06-28
 *
 * @copyright Copyright (c) 2024
 */

#include <ESP_I2S.h>
#include <wav_header.h>
#include <Adafruit_NeoPixel.h>

I2SClass I2S;

#define PIN        D2
#define NUMPIXELS  10
Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL   500                                // Time (in milliseconds) to pause between pixels

const int sampleRate = 16000;                         // sample rate in Hz
const int frequency = 440;                            // frequency of square wave in Hz
const int amplitude = 500;                            // amplitude of square wave
int32_t sample = amplitude;                           // current sample value
const int halfWavelength = sampleRate / frequency;    // half wavelength of square wave

bool i2s_rgb = true;


void setup() {
  Serial.begin(115200);
//  while(!Serial);             // Wait for the serial port to connect

  strip.begin();
  strip.show();
  strip.setBrightness(20);

  I2S.setPins(8, 7, 43, 44);  // Configure I2S pins
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("Failed to initialize I2S!");
    while(1);                 // Halt if failed to initialize
  }
}

void loop() {
  int32_t sample_read;
  uint32_t sum = 0;
  int count = 0;

  // Reading audio data from I2S
  for (int i = 0; i < 1024; i++) {
    sample_read = I2S.read();
    if (sample_read != 0 && sample_read != 0xFFFF){
      sum += abs(sample_read);  // Calculating Absolute Value Sums
      count++;
    }
  }

  int average = sum / count;    // Calculation of average intensity
  Serial.println(average);

  int activeLEDs = map(average, 30000, 36000, 0, NUMPIXELS);  // Mapping average to LED quantity, value to map, value current range, value target range after mapping

  // Update LED strip brightness and colour
  for (int i = 0; i < NUMPIXELS; i++) {
    if (i < activeLEDs) {
      // Setting the colour according to the LED position
      int colorIntensity = map(i, 0, NUMPIXELS - 1, 0, 255);
      strip.setPixelColor(i, strip.Color(0, colorIntensity, 255 - colorIntensity));  // Transition from blue to green
    } else {
      strip.setPixelColor(i, strip.Color(0, 0, 0));  // Switching off inactive LEDs
    }
  }
  strip.show();

  delay(100);
}
```

### Customization

You can customize the behavior of the audio reactive NeoPixel strip by modifying the following parameters:

`DELAYVAL`: The delay time (in milliseconds) between each pixel update (default: 500)
`Mapping range for activeLEDs`: Adjust the range of average intensity values to map to the number of active LEDs (default: 30000 to 36000)
`Color scheme`: Modify the strip.setPixelColor() function to change the color transition or use different colors for the LEDs
