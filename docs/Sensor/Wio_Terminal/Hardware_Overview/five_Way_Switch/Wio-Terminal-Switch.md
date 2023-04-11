---
description: Overview
title: Overview
keywords:
- Wio_terminal five_Way_Switch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Switch
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Getting Started with 5 Way Switch

This repo demonstrates how to use the 5 way Switch in Wio Terminal.

## Example Code

**Note:** **`WIO_5S_UP`**, **`WIO_5S_DOWN`**, **`WIO_5S_LEFT`**, **`WIO_5S_RIGHT`** and  **`WIO_5S_PRESS`** are defined for the Wio Terminal 5 Way Switch.

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
