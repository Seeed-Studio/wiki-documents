---
description: Prueba RGB de ReSpeaker Lite
title: Prueba RGB
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_rgb_test
last_update:
  date: 9/27/2024
  author: Jessie
---


### Funcionalidad


La luz RGB en la placa ReSpeaker Lite utiliza el chip WS2812 y se controla a través del pin `GPIO1`. El proyecto recorre diferentes colores (rojo, verde, azul y blanco) para asegurar que la luz RGB esté funcionando correctamente. 


### Código

```cpp
#include <Adafruit_NeoPixel.h>

// Define parameters for the LED strip
#define PIN 1            // Pin connected to the RGB LED
#define NUMPIXELS 1      // Number of LEDs

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);  // Initialize the LED strip object

void setup() {
  // Initialize the serial monitor for debugging
  Serial.begin(115200);
  
  // Initialize the RGB LED strip
  strip.begin();
  strip.show();  // Initialize all pixels to the off state
}

void loop() {
  // Red color test
  Serial.println("Red color test");
  strip.setPixelColor(0, strip.Color(255, 0, 0));  // Set the first pixel to red
  strip.show();  // Update the strip display
  delay(1000);   // Delay for 1 second

  // Green color test
  Serial.println("Green color test");
  strip.setPixelColor(0, strip.Color(0, 255, 0));  // Set the first pixel to green
  strip.show();
  delay(1000);

  // Blue color test
  Serial.println("Blue color test");
  strip.setPixelColor(0, strip.Color(0, 0, 255));  // Set the first pixel to blue
  strip.show();
  delay(1000);

  // White color test
  Serial.println("White color test");
  strip.setPixelColor(0, strip.Color(255, 255, 255));  // Set the first pixel to white
  strip.show();
  delay(1000);

  // Turn off the LED
  Serial.println("Turn off the LED");
  strip.setPixelColor(0, strip.Color(0, 0, 0));  // Turn off the first pixel
  strip.show();
  delay(1000);
}
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/rgb_led.gif" alt="pir" width={400} height="auto" /></p>


### Configuración

`strip.setPixelColor`: establece el color del LED en la tira.

`strip.show`: aplica los cambios de color al LED.