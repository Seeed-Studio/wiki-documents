---
description: 概述
title: 五向开关入门指南
keywords:
- Wio_terminal five_Way_Switch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Switch
last_update:
  date: 3/09/2024
  author: 金菊
---

# 五向开关入门指南

该存储库演示了如何在 Wio Terminal 上使用五向开关。

## 示例代码

**注:** **`WIO_5S_UP`**, **`WIO_5S_DOWN`**, **`WIO_5S_LEFT`**, **`WIO_5S_RIGHT`** 和  **`WIO_5S_PRESS`** 是为 Wio Terminal 的五向开关定义的常量。

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
