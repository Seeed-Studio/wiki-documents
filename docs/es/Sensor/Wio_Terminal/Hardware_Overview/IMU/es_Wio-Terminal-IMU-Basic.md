---
description: Primeros Pasos
title: Primeros Pasos con el acelerómetro
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-IMU-Basic
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Primeros Pasos con el acelerómetro

Este repositorio demuestra cómo leer valores del acelerómetro desde Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## Inicialización del Acelerómetro Digital de 3 Ejes

Para inicializar el acelerómetro en Wio Terminal:

- Configurar la tasa de datos de salida: `lis.setOutputDataRate()`, de 1Hz hasta 5kHz.

- Configurar el rango de escala: `lis.FullScaleRange()`, de 2g hasta 16g.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
    ...
    lis.begin(Wire1); 
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Configurar la tasa de datos de salida a 25Hz, puede configurarse hasta 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Configurar el rango de escala a 2g, seleccionar entre 2,4,8,16g
    ...
}
```

## Lectura de Valores del Acelerómetro

Para leer los valores del acelerómetro de cada eje en Wio Terminal, simplemente sigue esto:

```cpp
void loop() {
    float x_values, y_values, z_values;
    x_values = lis.getAccelerationX();
    y_values = lis.getAccelerationY();
    z_values = lis.getAccelerationZ();
    delay(50);  // retraso para evitar que se lea una gran cantidad de datos
    ...
}
```

Nota: Se recomienda encarecidamente el retraso para evitar una gran cantidad de datos de una vez.

### Código de Ejemplo

Este ejemplo imprime todos los valores de los 3 ejes del acelerómetro en el monitor serie.

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