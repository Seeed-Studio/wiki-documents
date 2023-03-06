---
description: Overview
title: Overview
keywords:
- Wio_terminal Configurable_Buttons
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Buttons
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Getting Started with Configurable Buttons

This repo demonstrates how to use the configurable buttons in Wio Terminal. There are three buttons that can be used for Wio Terminal.

## Example Code

**Note:** **`WIO_KEY_A`**, **`WIO_KEY_B`** and  **`WIO_KEY_C`** are defined for the Wio Terminal configurable buttons.

:::note
You can also use `BUTTON_1`, `BUTTON_2` and `BUTTON_3` to use the configurable buttons.
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
