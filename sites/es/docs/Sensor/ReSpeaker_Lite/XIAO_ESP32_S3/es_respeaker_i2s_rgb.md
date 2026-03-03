---
description: I2S RGB con XIAO ESP32S3
title: Uso de I2S RGB
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_i2s_rgb
last_update:
  date: 7/1/2024
  author: Jessie
---

Este proyecto demuestra cómo usar la placa reSpeaker para controlar una tira de LEDs NeoPixel basándose en la intensidad de la entrada de audio recibida a través de la interfaz I2S. La tira de LEDs reacciona al audio ajustando su brillo y color según la intensidad promedio de las muestras de audio.

### Requisitos de Hardware

* Placa ReSpeaker Lite (con microcontrolador XIAO ESP32S3 integrado)

* [Grove - RGB LED Stick](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html)

* Cables puente


### Conexiones

Conecta la tira de LEDs NeoPixel a la placa reSpeaker:

* Pin de datos de la tira de LEDs al pin D2 del reSpeaker

* Pines de alimentación y tierra de la tira de LEDs a la fuente de alimentación apropiada

El micrófono I2S ya está integrado en la placa reSpeaker, por lo que no se necesita cableado adicional para la entrada de audio.


Modifica las siguientes constantes en el sketch si es necesario:

`PIN`: El número de pin conectado al pin de datos de la tira NeoPixel (por defecto: D2)
`NUMPIXELS`: El número de píxeles en la tira NeoPixel (por defecto: 10)
`sampleRate`: La frecuencia de muestreo de la entrada de audio I2S (por defecto: 16000 Hz)


Abre el `Monitor Serie` para ver los valores de intensidad promedio del audio.

### Funcionalidad

El sketch realiza las siguientes tareas:

Inicializa la tira de LEDs NeoPixel y establece su brillo.

Configura la interfaz I2S.

Lee continuamente muestras de audio de la interfaz I2S en bloques de 1024 muestras.

Calcula la suma de valores absolutos de las muestras de audio no nulas y determina la intensidad promedio.

Mapea la intensidad promedio al número de LEDs activos en la tira NeoPixel.

Actualiza el color y brillo de cada LED basándose en su posición y el valor de intensidad mapeado.

El color transiciona de azul a verde a lo largo de la tira.
Los LEDs inactivos se apagan.
Muestra los colores de LED actualizados en la tira NeoPixel.

Imprime el valor de intensidad promedio del audio en el Monitor Serie para propósitos de depuración.

Repite el proceso con un retraso de 100 milisegundos entre cada iteración.


### Código

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

### Personalización

Puedes personalizar el comportamiento de la tira NeoPixel reactiva al audio modificando los siguientes parámetros:

`DELAYVAL`: El tiempo de retraso (en milisegundos) entre cada actualización de píxel (por defecto: 500)
`Rango de mapeo para activeLEDs`: Ajusta el rango de valores de intensidad promedio para mapear al número de LEDs activos (por defecto: 30000 a 36000)
`Esquema de colores`: Modifica la función strip.setPixelColor() para cambiar la transición de color o usar diferentes colores para los LEDs