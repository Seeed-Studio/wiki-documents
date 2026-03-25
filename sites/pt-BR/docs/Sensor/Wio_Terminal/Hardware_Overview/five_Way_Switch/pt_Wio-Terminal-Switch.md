---
description: Visão geral
title: Primeiros passos com o 5 Way Switch
keywords:
  - Wio_terminal five_Way_Switch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Switch
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Switch/
---

# Primeiros passos com o 5 Way Switch

Este repositório demonstra como usar o 5 Way Switch no Wio Terminal.

## Código de exemplo

**Nota:** **`WIO_5S_UP`**, **`WIO_5S_DOWN`**, **`WIO_5S_LEFT`**, **`WIO_5S_RIGHT`** e **`WIO_5S_PRESS`** são definidos para o 5 Way Switch do Wio Terminal.

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
