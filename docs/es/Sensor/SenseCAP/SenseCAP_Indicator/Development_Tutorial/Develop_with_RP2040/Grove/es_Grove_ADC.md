---
description: Grove ADC
title: Grove ADC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Descripción general**

Hay dos interfaces Grove en el SenseCAP Indicator para conectar módulos Grove, una es el puerto I2C predeterminado y la otra es un pin digital/analógico configurable, que también se puede usar para salidas PWM. Ambos puertos Grove se pueden usar como digitales. Proporcionando más posibilidades para los desarrolladores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Este repositorio presentará cómo usar las E/S Grove en el SenseCAP Indicator. Esto te permite disfrutar de la funcionalidad plug and play del [ecosistema Grove](https://www.seeedstudio.com/category/Grove-c-1003.html) así como usar el GPIO compatible con RP2040.

# **Grove(ADC)**

Para usar el puerto A/D configurable Grove como puerto analógico, simplemente defínelo de la siguiente manera:

```cpp
#define ADC1  27
```

## **Código de ejemplo**:

Este código de ejemplo presenta cómo conectar el [sensor de luz](/es/Grove-Light_Sensor) en la interfaz ADC grove.
La señal de salida es un valor analógico, cuanto más brillante es la luz, mayor es el valor.

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