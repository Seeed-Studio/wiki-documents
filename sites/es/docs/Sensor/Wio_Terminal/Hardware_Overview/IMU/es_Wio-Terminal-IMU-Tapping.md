---
description: Tapping
title: Tapping
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-IMU-Tapping
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Demo de Detección de Movimiento de Toque en Wio Terminal

Este repositorio demuestra cómo Wio Terminal utiliza el acelerómetro integrado para detectar el movimiento de toque de un solo clic o doble clic.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"/></div>

## Inicialización del Acelerómetro de 3 Ejes

Para inicializar el acelerómetro en Wio Terminal, por favor visita [Primeros Pasos con IMU](https://wiki.seeedstudio.com/es/Wio-Terminal-IMU-Basic/) para más información.

## Configuraciones de Sensibilidad de Toque

Para la sensibilidad del toque, ajusta el valor de THRESHOLD según el rango de escala del IMU:

| Rango de Escala | 2g    | 4g    | 8g    | 16g  |
|-----------------|-------|-------|-------|------|
| THRESHOLD       | 40-80 | 20-40 | 10-20 | 5-10 |

## Clic simple o Doble clic

Para usar la función `click`, simplemente llámala como sigue, donde el primer parámetro se usa para determinar la detección de clic simple o doble clic (1 o 2), y el segundo parámetro es para el valor de umbral.

```cpp
void setup() {
    ...
    lis.click(1,THRESHOLD);
    //¡Señal de interrupción para activar cuando se detecta un toque!
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}
```

**Nota:** `GYROSCOPE_INT1` es el Pin de Interrupción 1 del Acelerómetro.

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