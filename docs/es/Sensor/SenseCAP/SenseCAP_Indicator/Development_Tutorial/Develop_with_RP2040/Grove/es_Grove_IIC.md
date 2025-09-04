---
description: Grove IIC
title: Grove IIC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Descripción General**

Hay dos interfaces Grove en el SenseCAP Indicator para conectar módulos Grove, una es el Puerto I2C predeterminado y la otra es un Pin Digital/Analógico configurable, que también puede usarse para salidas PWM. Ambos puertos Grove pueden usarse como Digital. Proporcionando más posibilidades para los desarrolladores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

Este repositorio introducirá cómo usar las E/S Grove en el SenseCAP Indicator. Esto te permite disfrutar de la funcionalidad plug and play del [Ecosistema Grove](https://www.seeedstudio.com/category/Grove-c-1003.html) así como usar el GPIO compatible con RP2040!

# **Grove(IIC)**

Para expandir más aplicaciones, puedes usar la interfaz IIC para conectar más sensores.
A diferencia de los sensores integrados, solo necesitas definir las conexiones de los pines SCL y SDA.

## **Código de Ejemplo**

Este código de ejemplo introduce cómo conectar un [sensor TH Grove](/es/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor):

[Biblioteca del sensor de temperatura y humedad AHT20](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void sensor_aht_init(void) {
  AHT.begin();
}

void sensor_aht_get(void) {
  float humi, temp;
  int ret = AHT.getSensor(&humi, &temp);
  if (ret)  // GET DATA OK
  {
    Serial.print("humidity: ");
    Serial.print(humi * 100);
    Serial.print("  temerature: ");
    Serial.println(temp);
  } else  // GET DATA FAIL
  {
    Serial.println("GET DATA FROM AHT20 FAIL");
  }
}

void setup() {
  Serial.begin(115200);

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_aht_init();
}

void loop() {
  sensor_aht_get();
  delay(5000);
}
```
