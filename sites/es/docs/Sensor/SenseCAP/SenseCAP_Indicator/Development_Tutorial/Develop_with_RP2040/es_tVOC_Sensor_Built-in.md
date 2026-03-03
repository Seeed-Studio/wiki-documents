---
description: tVOC Sensor Built-in
title: tVOC Sensor Built-in
keywords:
- Indicator Development Tutorial RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_tVOC
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Sensor tVOC (Integrado)**

El sensor SGP40 integrado en el SenseCAP Indicator es un sensor TVOC de alta calidad y confiable que puede utilizarse en una amplia gama de aplicaciones para monitorear la calidad del aire interior y exterior. Tiene un rango de medición de 1-500 Puntos de Índice VOC.

Los TVOCs son un grupo de químicos orgánicos que se emiten como gases de una variedad de fuentes, incluyendo materiales de construcción, productos de limpieza y productos de cuidado personal.


**Código de Ejemplo:**

Este ejemplo lee el valor del sensor TVOC SGP40 integrado a través de la interfaz IIC, y lo imprime en el monitor serie.

Basado en las siguientes librerías:

[Librería Sensirion Arduino Core](https://github.com/Sensirion/arduino-core/)

[Librería del sensor TVOC SGP40](https://github.com/Sensirion/arduino-i2c-sgp40)

[Librería de índice de transferencia: Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

Nota: Al usar el sensor integrado, la alimentación del sensor debe estar habilitada.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <VOCGasIndexAlgorithm.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;
VOCGasIndexAlgorithm voc_algorithm;


//El sensor integrado necesita ser encendido
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

/************************ sgp40 tvoc  ****************************/

void sensor_sgp40_init(void) {
  uint16_t error;
  char errorMessage[256];

  sgp40.begin(Wire);

  uint16_t serialNumber[3];
  uint8_t serialNumberSize = 3;

  error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

  if (error) {
    Serial.print("Error trying to execute getSerialNumber(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SerialNumber:");
    Serial.print("0x");
    for (size_t i = 0; i < serialNumberSize; i++) {
      uint16_t value = serialNumber[i];
      Serial.print(value < 4096 ? "0" : "");
      Serial.print(value < 256 ? "0" : "");
      Serial.print(value < 16 ? "0" : "");
      Serial.print(value, HEX);
    }
    Serial.println();
  }

  uint16_t testResult;
  error = sgp40.executeSelfTest(testResult);
  if (error) {
    Serial.print("Error trying to execute executeSelfTest(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (testResult != 0xD400) {
    Serial.print("executeSelfTest failed with error: ");
    Serial.println(testResult);
  }
}

void sensor_sgp40_get(void) {
  uint16_t error;
  char errorMessage[256];
  uint16_t defaultRh = 0x8000;
  uint16_t defaultT = 0x6666;
  uint16_t srawVoc = 0;

  Serial.print("sensor sgp40: ");

  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
  if (error) {
    Serial.print("Error trying to execute measureRawSignal(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SRAW_VOC:");
    Serial.print(srawVoc);

    int32_t voc_index = voc_algorithm.process(srawVoc);
    Serial.print(", VOC Index: ");
    Serial.println(voc_index);
  }
}

/************************ setup & loop ****************************/

void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_sgp40_init();
}

void loop() {
  sensor_sgp40_get();
  delay(5000);
}

```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/tvoc.png"/></div>

"SRAW_VOC" se refiere a la salida de señal cruda del sensor para VOCs, que usualmente es una medición de voltaje o resistencia que es proporcional a la concentración de VOCs en el aire.

"VOC Index" es un valor calculado que se utiliza como una forma de representar la concentración de VOCs en el aire en un formato más amigable para el usuario. El índice VOC es un valor numérico que va de 0 a 500, con valores más altos indicando concentraciones más altas de VOCs.


# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes pedidos grandes o requerimientos de personalización, por favor contacta iot@seeed.cc