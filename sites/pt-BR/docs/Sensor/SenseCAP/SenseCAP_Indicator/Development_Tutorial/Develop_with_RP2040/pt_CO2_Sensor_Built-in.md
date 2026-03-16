---
description: Sensor de CO2 Integrado
title: Sensor de CO2 Integrado
keywords:
  - Tutorial de Desenvolvimento SenseCAP Indicator RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_RP2040_CO2/
---
# **Sensor de CO2 (Integrado)**

SenseCAP Indicator (Versão D1S/D1Pro) possui um sensor SCD41 embutido, que pode detectar o valor de CO2 com uma faixa de 0-40000 ppm.
O teor de CO2 é um critério importante para avaliar a qualidade do ar e garantir que ele seja seguro e saudável para todos que o respiram.


Os níveis de CO2 no ar:
* Nível externo normal: 350 - 450 ppm
* Níveis aceitáveis: < 600 ppm
* Queixas de abafamento e odores: 600 - 1000 ppm
* Padrões ASHRAE e OSHA: 1000 ppm
* Sonolência geral: 1000 - 2500 ppm
* Efeitos adversos à saúde podem ser esperados: 2500 - 5000 ppm




**Código de Exemplo**:

Este exemplo lê o valor do sensor SCD41 de CO2 embutido através da interface IIC e o imprime no monitor serial.

Baseado na seguinte biblioteca：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)
[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

**Nota**: Ao usar o sensor embutido, a alimentação do sensor deve ser ativada.


```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
String SDDataString = "";

//The built-in sensor needs to be powered on
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
}

int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}


```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"/></div>

**Nota:** A temperatura e a umidade neste sensor SCD41 embutido não representam totalmente a temperatura e a umidade do ar


# **Suporte Técnico**

Não se preocupe, nós cuidamos de você! Visite nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um grande pedido ou necessidade de customização, entre em contato pelo e-mail iot@seeed.cc
