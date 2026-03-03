---
description: Sensor de CO2 Integrado
title: Sensor de CO2 Integrado
keywords:
- SenseCAP Indicator RP2040 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Sensor de CO2 (Integrado)**

SenseCAP Indicator (Versión D1S/D1Pro) tiene un sensor SCD41 integrado, que puede detectar el valor de CO2 con un rango de 0-40000ppm.
El contenido de CO2 es un criterio importante para evaluar la calidad del aire y asegurar que sea seguro y saludable para todos los que lo respiran.

Los niveles de CO2 en el aire:
* Nivel exterior normal: 350 - 450 ppm
* Niveles aceptables: < 600 ppm
* Quejas de aire viciado y olores: 600 - 1000 ppm
* Estándares ASHRAE y OSHA: 1000 ppm
* Somnolencia general: 1000 - 2500 ppm
* Pueden esperarse efectos adversos para la salud: 2500 - 5000 ppm

**Código de Ejemplo**:

Este ejemplo lee el valor del sensor Co2 SCD41 integrado a través de la interfaz IIC, y lo imprime en el monitor serie.

Basado en las siguientes librerías:

[Librería Sensirion Arduino Core](https://github.com/Sensirion/arduino-core/)
[Librería del sensor CO2 SCD41](https://github.com/Sensirion/arduino-i2c-scd4x)

**Nota**: Cuando se usa el sensor integrado, la alimentación del sensor debe estar habilitada.

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

**Nota:** La temperatura y humedad en este sensor SCD41 integrado no representa completamente la temperatura y humedad del aire

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes pedidos grandes o requisitos de personalización, por favor contacta iot@seeed.cc