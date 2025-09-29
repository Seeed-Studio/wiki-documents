---
description: Descripción general
title: Primeros Pasos con Botones Configurables
keywords:
- Wio_terminal Configurable_Buttons
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Buttons
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Primeros Pasos con Botones Configurables

Este repositorio demuestra cómo usar los botones configurables en Wio Terminal. Hay tres botones que se pueden usar para Wio Terminal.

## Código de Ejemplo

**Nota:** **`WIO_KEY_A`**, **`WIO_KEY_B`** y **`WIO_KEY_C`** están definidos para los botones configurables de Wio Terminal.

:::note
También puedes usar `BUTTON_1`, `BUTTON_2` y `BUTTON_3` para usar los botones configurables.
:::

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);
}

void loop() {
  // put your main code here, to run repeatedly:
   if (digitalRead(WIO_KEY_A) == LOW) {
    Serial.println("A Key pressed");
   }
   else if (digitalRead(WIO_KEY_B) == LOW) {
    Serial.println("B Key pressed");
   }
   else if (digitalRead(WIO_KEY_C) == LOW) {
    Serial.println("C Key pressed");
   }
   delay(200);
}
```