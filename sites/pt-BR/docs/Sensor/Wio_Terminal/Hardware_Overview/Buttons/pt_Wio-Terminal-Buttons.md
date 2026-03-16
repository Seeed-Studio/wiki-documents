---
description: Visão geral
title: Primeiros passos com botões configuráveis
keywords:
  - Wio_terminal Configurable_Buttons
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Buttons
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Buttons/
---

# Primeiros passos com botões configuráveis

Este repositório demonstra como usar os botões configuráveis no Wio Terminal. Há três botões que podem ser usados para o Wio Terminal.

## Código de exemplo

**Nota:** **`WIO_KEY_A`**, **`WIO_KEY_B`** e **`WIO_KEY_C`** são definidos para os botões configuráveis do Wio Terminal.

:::note
Você também pode usar `BUTTON_1`, `BUTTON_2` e `BUTTON_3` para usar os botões configuráveis.
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
