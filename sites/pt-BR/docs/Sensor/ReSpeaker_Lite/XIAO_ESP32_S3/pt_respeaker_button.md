---
description: Uso do Botão Usr com XIAO ESP32S3
title: Uso do Botão Usr
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_button
last_update:
  date: 8/16/2024
  author: Jessie
createdAt: '2024-08-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_button/
---


O botão de usuário está conectado ao XMOS XU316 e ainda não está programado (reservado para uso futuro). Se você quiser usar este botão com o XIAO ESP32S3, conecte o pino `Usr` ao pino `D2` ou `D3`.

:::tip
O uso do botão de mudo é o mesmo.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usr.png" alt="pir" width={600} height="auto" /></p>


Neste exemplo, o pino `Usr` é conectado a `D3` e, em seguida, o XIAO ESP32S3 é usado para detectar se o botão está pressionado.

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

Abra o `Serial Monitor`; quando você operar o botão, o log mostrará o status do botão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/button-status.png" alt="pir" width={800} height="auto" /></p>

