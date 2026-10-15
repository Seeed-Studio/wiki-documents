---
description: Descripción general
title: Primeros pasos con el Switch de 5 direcciones
keywords:
  - Wio_terminal five_Way_Switch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Switch
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2025-07-28'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/Wio-Terminal-Switch/
---

# Primeros pasos con el Switch de 5 direcciones

Este repositorio demuestra cómo usar el Switch de 5 direcciones en Wio Terminal.

## Código de ejemplo

**Nota:** **`WIO_5S_UP`**, **`WIO_5S_DOWN`**, **`WIO_5S_LEFT`**, **`WIO_5S_RIGHT`** y **`WIO_5S_PRESS`** están definidos para el Switch de 5 direcciones de Wio Terminal.

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(WIO_5S_UP, INPUT_PULLUP);
  pinMode(WIO_5S_DOWN, INPUT_PULLUP);
  pinMode(WIO_5S_LEFT, INPUT_PULLUP);
  pinMode(WIO_5S_RIGHT, INPUT_PULLUP);
  pinMode(WIO_5S_PRESS, INPUT_PULLUP);
}

void loop() {
  // put your main code here, to run repeatedly:
   if (digitalRead(WIO_5S_UP) == LOW) {
    Serial.println("5 Way Up");
   }
   else if (digitalRead(WIO_5S_DOWN) == LOW) {
    Serial.println("5 Way Down");
   }
   else if (digitalRead(WIO_5S_LEFT) == LOW) {
    Serial.println("5 Way Left");
   }
   else if (digitalRead(WIO_5S_RIGHT) == LOW) {
    Serial.println("5 Way Right");
   }
   else if (digitalRead(WIO_5S_PRESS) == LOW) {
    Serial.println("5 Way Press");
   }
   delay(200);
}
```