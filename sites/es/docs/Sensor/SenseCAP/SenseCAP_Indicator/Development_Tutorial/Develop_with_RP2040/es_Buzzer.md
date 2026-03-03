---
description: Buzzer
title: Buzzer
keywords:
- SenseCAP Indicator RP2040 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_Buzzer
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Buzzer**


El buzzer integrado del SenseCAP Indicator es un buzzer pasivo, lo que significa que requiere una señal AC (PWM) para activarse y emitir sonido, puedes generar varios tonos y efectos.


## **Básico**


```cpp
#include <Arduino.h>

#define Buzzer  19 //Buzzer GPIO

void setup() {
  digitalWrite(Buzzer, OUTPUT); //Configura el Buzzer como salida
  analogWrite(Buzzer, 127);   //Genera pwm con ciclo de trabajo del 50%
}

void loop() {
  delay(1000);
  digitalWrite(Buzzer, LOW); //Apaga el Buzzer
}

```

## **Código de Ejemplo 1**

Este ejemplo usa un buzzer para reproducir melodías. Envía una onda cuadrada de la frecuencia apropiada al buzzer, generando el tono correspondiente.
"Estrellita dónde estás..."


```cpp
#include <Arduino.h>
#define Buzzer  19 //Buzzer GPIO


int length = 15;         /* el número de notas */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    //configura el pin del buzzer como salida
    pinMode(19, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* retraso entre notas */
    }

}

//Reproducir tono
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

    // reproduce el tono correspondiente al nombre de la nota
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```


## **Código de Ejemplo 2**

Este ejemplo demuestra una alarma cuando el valor de CO2 es mayor a 1000ppm.

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

  // detiene la medición potencialmente iniciada previamente
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Inicia la Medición
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
  // Lee la Medición
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


# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes pedidos grandes o requisitos de personalización, por favor contacta iot@seeed.cc