---
description: Grove ADC
title: Grove ADC
keywords:
  - Tutorial de Desenvolvimento
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_RP2040_Grove_ADC/
---
# **Visão Geral**

Há duas interfaces Grove no SenseCAP Indicator para conectar módulos Grove, uma é a porta I2C padrão e a outra é um pino Digital/Analógico configurável, que também pode ser usado para saídas PWM. Ambas as portas Grove podem ser usadas como Digitais, proporcionando mais possibilidades para os desenvolvedores. 

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>


Este repositório apresentará como usar os IOs Grove no SenseCAP Indicator. Isso permite que você aproveite a funcionalidade plug and play do [Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html), além de usar o GPIO compatível com o RP2040!

# **Grove(ADC)**

Para usar a porta A/D configurável Grove como porta Analógica, simplesmente defina-a da seguinte forma:

```cpp
#define ADC1  27
```

## **Código de Exemplo**:

Este código de exemplo apresenta como conectar o [Light sensor](/pt-br/Grove-Light_Sensor) na interface Grove ADC.
O sinal de saída é um valor analógico, quanto mais forte for a luz, maior será o valor.

```cpp
#include <Arduino.h>

#define ADC1  27

void setup() {
  Serial.begin(115200);
}

void loop() {
  int adc0_data = analogRead(ADC1);
  Serial.println(adc0_data);
  delay(1000);
}
```