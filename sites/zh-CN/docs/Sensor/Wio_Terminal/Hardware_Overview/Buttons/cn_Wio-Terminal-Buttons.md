---
description: 概述
title: 可配置按钮入门指南
keywords:
- Wio_terminal Configurable_Buttons
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Buttons
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 可配置按钮入门指南

本仓库演示了如何在 Wio Terminal 中使用可配置按钮。Wio Terminal 有三个可用的按钮。

## 示例代码

**注意：** **`WIO_KEY_A`**、**`WIO_KEY_B`** 和 **`WIO_KEY_C`** 是为 Wio Terminal 可配置按钮定义的。

:::note
您也可以使用 `BUTTON_1`、`BUTTON_2` 和 `BUTTON_3` 来使用可配置按钮。
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