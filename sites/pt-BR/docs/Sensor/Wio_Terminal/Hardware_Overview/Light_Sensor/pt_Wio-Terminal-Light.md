---
description: Visão geral
title: Primeiros Passos com o Sensor de Luz
keywords:
  - Wio_terminal Light_Sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Light
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Light/
---

# Primeiros Passos com o Sensor de Luz

Este repositório demonstra como usar o sensor de luz integrado como um componente no Wio Terminal. O sensor de luz usa a interface analógica e você pode simplesmente ler os valores do sensor de luz ambiente lendo seu pino.

## Código de Exemplo

**Observação:** **`WIO_LIGHT`** é o pino do Sensor de Luz integrado. O sensor de luz está conectado ao **A13**.

```cpp
void setup() {
  pinMode(WIO_LIGHT, INPUT);
  Serial.begin(115200);

}

void loop() {
   int light = analogRead(WIO_LIGHT);
   Serial.print("Light value: ");
   Serial.println(light);
   delay(200);
}
```

**Observação:** O sensor de luz está na parte de trás do Wio Terminal, logo acima do slot do cartão microSD.
