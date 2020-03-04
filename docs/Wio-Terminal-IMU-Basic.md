# Getting Started with IMU

This repo demonstrates how to read IMU values from Rescreen.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## 3-Axis Digital Acclerator Initialisation

To initilise the acclerator on Rescreen:

- Setting output data rate: `lis.setOutputDataRate()`, 5Hz up to 5kHz.

- Setting scale range: `lis.FullScaleRange()`, 2g up to 16g.

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

## Reading IMU Values

To read IMU values of each axis on Rescreen, simply follow this:

```cpp
void loop() {
    float x_values, y_values, z_values;
    x_values = lis.getAcceleratationX();
    y_values = lis.getAcceleratationY();
    z_values = lis.getAcceleratationZ();
    delay(50);  // delay to avoid large amount of data being read
    ...
}
```

Note: Delay is strongly recommended to avoid large amount of data at once.

### Example Code

This exmaple prints all 3-axis values of IMU on the serial monitor.

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
