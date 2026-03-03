---
description: 概要
title: 設定可能なボタンの使い方
keywords:
- Wio_terminal Configurable_Buttons
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Buttons
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 設定可能なボタンの使い方

このリポジトリでは、Wio Terminalの設定可能なボタンの使用方法を示します。Wio Terminalには使用可能な3つのボタンがあります。

## サンプルコード

**注意:** Wio Terminalの設定可能なボタンには、**`WIO_KEY_A`**、**`WIO_KEY_B`**、**`WIO_KEY_C`** が定義されています。

:::note
設定可能なボタンを使用するには、`BUTTON_1`、`BUTTON_2`、`BUTTON_3`を使用することもできます。
:::

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);
}

void loop() {
  // 繰り返し実行されるメインコードをここに記述します:
   if (digitalRead(WIO_KEY_A) == LOW) {
    Serial.println("Aキーが押されました");
   }
   else if (digitalRead(WIO_KEY_B) == LOW) {
    Serial.println("Bキーが押されました");
   }
   else if (digitalRead(WIO_KEY_C) == LOW) {
    Serial.println("Cキーが押されました");
   }
   delay(200);
}
```