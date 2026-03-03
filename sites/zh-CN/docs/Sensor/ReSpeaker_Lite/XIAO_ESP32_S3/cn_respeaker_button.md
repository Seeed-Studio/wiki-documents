---
description: 使用 XIAO ESP32S3 的用户按钮
title: 用户按钮使用
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_button
last_update:
  date: 8/16/2024
  author: Jessie
---


用户按钮连接到 XMOS XU316，但尚未编程（保留供将来使用）。如果您想在 XIAO ESP32S3 上使用此按钮，请将 `Usr` 引脚连接到 `D2` 或 `D3` 引脚。

:::tip
静音按钮的使用方法相同。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usr.png" alt="pir" width={600} height="auto" /></p>


此示例将 `Usr` 引脚连接到 `D3`，然后使用 XIAO ESP32S3 检测按钮是否被按下。

### 代码

```cpp
const int buttonPin = D3;  
int buttonState = 0;

void setup() {
  Serial.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);  
}

void loop() {
  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    Serial.println("Button Pressed");
  } else {
    Serial.println("Button Released");
  }
  
  delay(500);  
}
```

打开 `串口监视器`，当您操作按钮时，日志将显示按钮状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/button-status.png" alt="pir" width={800} height="auto" /></p>