---
description: Buzzer
title: Buzzer
keywords:
  - Tutorial de Desenvolvimento do SenseCAP Indicator RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_RP2040_Buzzer
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_RP2040_Buzzer/
---
# **Buzzer**


O buzzer integrado do SenseCAP Indicator é um buzzer passivo, o que significa que ele requer um sinal AC (PWM) para acionar e emitir um som, permitindo que você gere vários tons e efeitos.


## **Básico**


```cpp
#include <Arduino.h>

#define Buzzer  19 //Buzzer GPIO

void setup() {
  digitalWrite(Buzzer, OUTPUT); //Set Buzzer as an output
  analogWrite(Buzzer, 127);   //Generates pwm of 50% duty cycle
}

void loop() {
  delay(1000);
  digitalWrite(Buzzer, LOW); //Turn off the Buzzer
}

```

## **Código de Exemplo 1**

Este exemplo usa um buzzer para tocar melodias. Ele envia uma onda quadrada com a frequência adequada para o buzzer, gerando o tom correspondente.
" Twinkle Twinkle Little Star..."


```cpp
#include <Arduino.h>
#define Buzzer  19 //Buzzer GPIO


int length = 15;         /* the number of notes */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    //set buzzer pin as output
    pinMode(19, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* delay between notes */
    }

}

//Play tone
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(19, HIGH);
        delayMicroseconds(tone);
        digitalWrite(19, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```


## **Código de Exemplo 2**

Este exemplo demonstra um alarme quando o valor de CO2 é maior que 1000 ppm.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>

#define Buzzer  19 //Buzzer GPIO

SensirionI2CScd4x scd4x;
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }


  if( co2 > 1000 ) {
    analogWrite(Buzzer, 10);
  } else {
    analogWrite(Buzzer, 0);
  }
}



int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();

  digitalWrite(Buzzer, OUTPUT);

}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}
```




# **Suporte Técnico**

Não se preocupe, nós cuidamos de você! Visite nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um grande pedido ou necessidade de personalização, entre em contato pelo e-mail iot@seeed.cc
