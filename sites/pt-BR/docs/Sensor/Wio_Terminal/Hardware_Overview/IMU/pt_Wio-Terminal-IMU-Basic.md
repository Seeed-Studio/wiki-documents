---
description: Primeiros Passos
title: Primeiros Passos com o acelerômetro
keywords:
  - Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-IMU-Basic
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IMU-Basic/
---

# Primeiros Passos com o acelerômetro

Este repositório demonstra como ler valores do acelerômetro a partir do Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## Inicialização do Acelerômetro Digital de 3 Eixos

Para inicializar o acelerômetro no Wio Terminal:

- Definindo a taxa de dados de saída: `lis.setOutputDataRate()`, de 1Hz até 5kHz.

- Definindo a faixa de escala: `lis.FullScaleRange()`, de 2g até 16g.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
    ...
    lis.begin(Wire1); 
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Setting scale range to 2g, select from 2,4,8,16g
    ...
}
```

## Lendo Valores do acelerômetro

Para ler os valores do acelerômetro de cada eixo no Wio Terminal, simplesmente siga isto:

```cpp
void loop() {
    float x_values, y_values, z_values;
    x_values = lis.getAccelerationX();
    y_values = lis.getAccelerationY();
    z_values = lis.getAccelerationZ();
    delay(50);  // delay to avoid large amount of data being read
    ...
}
```

Observação: É fortemente recomendado usar um atraso para evitar uma grande quantidade de dados de uma só vez.

### Código de Exemplo

Este exemplo imprime todos os valores dos 3 eixos do acelerômetro no monitor serial.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```
