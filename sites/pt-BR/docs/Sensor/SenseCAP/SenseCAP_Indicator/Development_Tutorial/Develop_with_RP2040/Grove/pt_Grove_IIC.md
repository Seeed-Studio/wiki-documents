---
description: Grove IIC
title: Grove IIC
keywords:
  - Tutorial de Desenvolvimento
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_RP2040_Grove_IIC/
---
# **Visão Geral**

Existem duas interfaces Grove no SenseCAP Indicator para conectar módulos Grove, uma é a porta I2C padrão e a outra é um pino Digital/Analógico configurável, que também pode ser usado para saídas PWM. Ambas as portas Grove podem ser usadas como digitais, oferecendo mais possibilidades para desenvolvedores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

Este repositório apresentará como usar os IOs Grove no SenseCAP Indicator. Isso permite que você aproveite a funcionalidade plug and play do [Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html), bem como use os GPIO compatíveis com o RP2040!

# **Grove(IIC)**

Para expandir mais aplicações, você pode usar a interface IIC para conectar mais sensores.
Diferente dos sensores integrados, você só precisa definir as conexões dos pinos SCL e SDA.

## **Exemplo de Códi**go

Este código de exemplo apresenta como conectar um [Grove TH sensor](/pt-br/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor):

[AHT20 temperature and humidity sensor library](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

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
