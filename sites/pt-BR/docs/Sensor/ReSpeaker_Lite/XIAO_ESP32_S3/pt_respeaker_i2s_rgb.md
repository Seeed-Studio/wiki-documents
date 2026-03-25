---
description: I2S RGB com XIAO ESP32S3
title: Uso de I2S RGB
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_i2s_rgb
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_i2s_rgb/
---

Este projeto demonstra como usar a placa reSpeaker para controlar uma faixa de LED NeoPixel com base na intensidade da entrada de áudio recebida através da interface I2S. A faixa de LED reage ao áudio ajustando seu brilho e cor de acordo com a intensidade média das amostras de áudio.

### Requisitos de Hardware

* Placa ReSpeaker Lite (com microcontrolador XIAO ESP32S3 integrado)

* [Grove - RGB LED Stick](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html)

* Jumpers


### Fiação

Conecte a faixa de LED NeoPixel à placa reSpeaker:

* Pino de dados da faixa de LED ao pino D2 do reSpeaker

* Pinos de alimentação e terra da faixa de LED à fonte de alimentação adequada

O microfone I2S já está integrado na placa reSpeaker, portanto não é necessária fiação adicional para a entrada de áudio.


Modifique as seguintes constantes no sketch, se necessário:

`PIN`: O número do pino conectado ao pino de dados da faixa NeoPixel (padrão: D2)
`NUMPIXELS`: O número de pixels na faixa NeoPixel (padrão: 10)
`sampleRate`: A taxa de amostragem da entrada de áudio I2S (padrão: 16000 Hz)


Abra o `Serial Monitor` para visualizar os valores médios de intensidade de áudio.

### Funcionalidade

O sketch executa as seguintes tarefas:

Inicializa a faixa de LED NeoPixel e define seu brilho.

Configura a interface I2S.

Lê continuamente amostras de áudio da interface I2S em blocos de 1024 amostras.

Calcula a soma dos valores absolutos das amostras de áudio diferentes de zero e determina a intensidade média.

Mapeia a intensidade média para o número de LEDs ativos na faixa NeoPixel.

Atualiza a cor e o brilho de cada LED com base em sua posição e no valor de intensidade mapeado.

A cor faz a transição de azul para verde ao longo do comprimento da faixa.
Os LEDs inativos são desligados.
Exibe as cores atualizadas dos LEDs na faixa NeoPixel.

Imprime o valor médio da intensidade de áudio no Serial Monitor para fins de depuração.

Repete o processo com um atraso de 100 milissegundos entre cada iteração.


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

### Personalização

Você pode personalizar o comportamento da faixa NeoPixel reativa ao áudio modificando os seguintes parâmetros:

`DELAYVAL`: O tempo de atraso (em milissegundos) entre cada atualização de pixel (padrão: 500)
`Mapping range for activeLEDs`: Ajuste a faixa de valores de intensidade média para mapear para o número de LEDs ativos (padrão: 30000 a 36000)
`Color scheme`: Modifique a função strip.setPixelColor() para alterar a transição de cor ou usar cores diferentes para os LEDs
