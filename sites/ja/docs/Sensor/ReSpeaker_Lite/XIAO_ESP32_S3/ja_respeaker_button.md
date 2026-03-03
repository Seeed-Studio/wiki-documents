---
description: XIAO ESP32S3でのUsrボタンの使用方法
title: Usrボタンの使用
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/respeaker_button
last_update:
  date: 05/15/2025
  author: Jessie
---


UsrボタンはXMOS XU316に接続されていますが、まだプログラムされていません（将来の使用のために予約されています）。このボタンをXIAO ESP32S3で使用したい場合は、`Usr`ピンを`D2`または`D3`ピンに接続してください。

:::tip
ミュートボタンの使用方法も同じです。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usr.png" alt="pir" width={600} height="auto" /></p>

この例では、`Usr`ピンを`D3`に接続し、XIAO ESP32S3を使用してボタンが押されているかどうかを検出します。

### コード

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
    Serial.println("ボタンが押されました");
  } else {
    Serial.println("ボタンが離されました");
  }
  
  delay(500);  
}
```

`シリアルモニタ`を開き、ボタンを操作すると、ログにボタンの状態が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/button-status.png" alt="pir" width={800} height="auto" /></p>