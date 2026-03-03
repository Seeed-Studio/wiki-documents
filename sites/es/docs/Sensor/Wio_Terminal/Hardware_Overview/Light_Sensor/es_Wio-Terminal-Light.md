---
description: Descripción general
title: Primeros pasos con el Sensor de Luz
keywords:
- Wio_terminal Light_Sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Light
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Primeros pasos con el Sensor de Luz

Este repositorio demuestra cómo usar el sensor de luz integrado como un componente en Wio Terminal. El sensor de luz utiliza interfaz analógica y puedes simplemente leer los valores del sensor de luz del entorno mediante la lectura de su pin.

## Código de Ejemplo

**Nota:** **`WIO_LIGHT`** es el pin para el Sensor de Luz integrado. El sensor de luz está conectado a **A13**.

```cpp
void setup() {
  pinMode(WIO_LIGHT, INPUT);
  Serial.begin(115200);

}

void loop() {
   int light = analogRead(WIO_LIGHT);
   Serial.print("Light value: ");
   Serial.println(light);
   delay(200);
}
```

**Nota:** El sensor de luz está en la parte posterior del Wio Terminal, justo encima de la ranura para tarjeta microSD.