---
description: Uso del Botón Usr con XIAO ESP32S3
title: Uso del Botón Usr
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_button
last_update:
  date: 8/16/2024
  author: Jessie
---


El botón de usuario está conectado al XMOS XU316 y aún no está programado (reservado para uso futuro). Si quieres usar este botón con XIAO ESP32S3, conecta el pin `Usr` al pin `D2` o `D3`.

:::tip
El uso del botón de silencio es el mismo.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usr.png" alt="pir" width={600} height="auto" /></p>


Este ejemplo conecta el pin `Usr` a `D3`, y luego usa XIAO ESP32S3 para detectar si el botón está presionado.

### Código

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

Abre el `Monitor Serie`, cuando operes el botón, el registro mostrará el estado del botón.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/button-status.png" alt="pir" width={800} height="auto" /></p>