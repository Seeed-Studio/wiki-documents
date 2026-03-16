---
description: Sensor tVOC Embutido
title: Sensor tVOC Embutido
keywords:
  - Tutorial de Desenvolvimento do Indicator RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_RP2040_tVOC
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_RP2040_tVOC/
---
# **Sensor tVOC (Embutido)**

O sensor SGP40 embutido no SenseCAP Indicator é um sensor TVOC de alta qualidade e confiável que pode ser usado em uma ampla gama de aplicações para monitorar a qualidade do ar interno e externo. Ele possui uma faixa de medição de 1–500 Pontos de Índice VOC.

TVOCs são um grupo de compostos orgânicos que são emitidos como gases a partir de diversas fontes, incluindo materiais de construção, produtos de limpeza e produtos de cuidados pessoais.


**Código de Exemplo:**

Este exemplo lê o valor do sensor TVOC SGP40 embutido por meio da interface IIC e o imprime no monitor serial.

Baseado na seguinte biblioteca：

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)

[SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)

[Transfer index library: Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

Observação: Ao usar o sensor embutido, a alimentação do sensor deve ser habilitada.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <VOCGasIndexAlgorithm.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;
VOCGasIndexAlgorithm voc_algorithm;


//The built-in sensor needs to be powered on
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

"SRAW_VOC" refere-se ao sinal bruto de saída do sensor para VOCs, que geralmente é uma medição de tensão ou resistência proporcional à concentração de VOCs no ar.

"VOC Index" é um valor calculado que é usado como uma forma de representar a concentração de VOCs no ar em um formato mais amigável para o usuário. O índice VOC é um valor numérico que varia de 0 a 500, com valores mais altos indicando maiores concentrações de VOCs.



# **Suporte Técnico**

Não se preocupe, estamos aqui para ajudar! Acesse nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um pedido em grande quantidade ou necessidade de personalização, entre em contato pelo e-mail iot@seeed.cc
