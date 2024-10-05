---
description: Usr Button Usage with XIAO ESP32S3
title: Usr Button Usage
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_button
last_update:
  date: 8/16/2024
  author: Jessie
---


User button is connected to XMOS XU316 and it's not programmed yet(reserve for futurn usage). If you want to use this button with XIAO ESP32S3, connect the `Usr` pin to the `D2` or `D3` pin.

:::tip
The mute button usage is the same.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usr.png" alt="pir" width={600} height="auto" /></p>


This example connects the `Usr` pin to `D3`, and then uses XIAO ESP32S3 to detect whether the button is pressed.

### Code

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

Open the `Serial Monitor`, when you operate the button, the log will show the button status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/button-status.png" alt="pir" width={800} height="auto" /></p>

