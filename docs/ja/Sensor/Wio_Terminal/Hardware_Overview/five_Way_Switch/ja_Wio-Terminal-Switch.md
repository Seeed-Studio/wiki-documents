---
description: 概要
title: 5 Way Switch の使い方
keywords:
- Wio_terminal five_Way_Switch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Switch
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 5 Way Switch の使い方

このリポジトリでは、Wio Terminal の 5 Way Switch の使用方法を示します。

## サンプルコード

**注意:** Wio Terminal の 5 Way Switch 用に **`WIO_5S_UP`**, **`WIO_5S_DOWN`**, **`WIO_5S_LEFT`**, **`WIO_5S_RIGHT`** および **`WIO_5S_PRESS`** が定義されています。

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
  // 繰り返し実行されるメインコードをここに記述します:
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