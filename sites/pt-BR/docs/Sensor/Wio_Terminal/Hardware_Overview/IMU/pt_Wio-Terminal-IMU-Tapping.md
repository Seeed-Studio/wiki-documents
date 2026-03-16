---
description: Toque
title: Toque
keywords:
  - Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-IMU-Tapping
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IMU-Tapping/
---

# Demonstração de Detecção de Toque com Wio Terminal

Este repositório demonstra como o Wio Terminal utiliza o acelerômetro integrado para detectar o movimento de toque com clique único ou clique duplo!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"/></div>

## Inicialização do Acelerômetro de 3 Eixos

Para inicializar o acelerômetro no Wio Terminal, visite [Primeiros Passos com IMU](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IMU-Basic/) para mais informações.

## Configurações de Sensibilidade do Toque

Para a sensibilidade do toque, ajuste o valor de THRESHOLD de acordo com a faixa de escala da IMU:

| Faixa de Escala | 2g    | 4g    | 8g    | 16g  |
|-----------------|-------|-------|-------|------|
| THRESHOLD       | 40-80 | 20-40 | 10-20 | 5-10 |

## Clique único ou Clique duplo

Para usar a função `click`, simplesmente chame-a como a seguir, onde o primeiro parâmetro é usado para determinar se a detecção é de clique único ou clique duplo (1 ou 2), e o segundo parâmetro é para o valor de threshold.

```cpp
void setup() {
    ...
    lis.click(1,THRESHOLD);
    //Interrupt signal to trigger when a tap is detected!
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}
```

**Nota:** `GYROSCOPE_INT1` é o pino 1 de interrupção do acelerômetro.

## Código Completo

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

//Adjust this threshold value for sensitivity of clicking
#define THRESHOLD 40
uint8_t cnt=0;

void count() {
    cnt++;
    Serial.print("Tap Count: ");
    Serial.println(cnt);
}

void setup() {
    Serial.begin(115200);
    lis.begin(Wire1);

    if (!lis) {
        Serial.println("ERROR");
        while(1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g

    //1 for single click, 2 for double click
    //smaller the threshold value, the more sensitive
    lis.click(1, THRESHOLD);
    //Interrupt signal to trigger when a tap is detected!
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}

void loop() {
}
```
