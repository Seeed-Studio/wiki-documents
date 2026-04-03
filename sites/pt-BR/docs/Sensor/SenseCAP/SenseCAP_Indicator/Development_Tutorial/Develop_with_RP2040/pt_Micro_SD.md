---
description: MicroSD
title: MicroSD
keywords:
  - Tutorial de Desenvolvimento
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_RP2040_MicroSD
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_RP2040_MicroSD/
---
# **MicroSD**

O RP2040 possui um conjunto de pinos GPIO que podem ser usados para fazer interface com um módulo de cartão MicroSD externo.

Para usar um cartão MicroSD com o RP2040, utilizamos o protocolo SPI (Serial Peripheral Interface) para conectar o módulo de cartão SD aos pinos GPIO do microcontrolador. Isso envolve conectar os seguintes pinos no RP2040 aos pinos correspondentes no módulo de cartão MicroSD:

SPI SCK (como GPIO10) ao SD_SCK
SPI TX (como GPIO11) ao SD_MOSI
SPI RX (como GPIO12) ao SD_MISO
Um único pino GPIO (como GPIO13) ao pino CS (chip select) no módulo de cartão SD

```cpp
 // Initialize the SPI interface for the SD card
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
```

Depois que a conexão de hardware é estabelecida, você pode usar uma biblioteca de software, como a biblioteca SD do Arduino, para ler e gravar dados no cartão MicroSD. A biblioteca SD fornece funções para inicializar o cartão SD, abrir e fechar arquivos, ler e gravar dados de arquivos e realizar outras operações do sistema de arquivos.

**Nota**: O desempenho da interface do cartão MicroSD no RP2040 dependerá de fatores como a velocidade do cartão SD, a qualidade da fiação e a eficiência do software, e é suportado um cartão SD com capacidade máxima de 32 GB

## **Código de Exemplo**

Este código de exemplo realiza a leitura de dados de CO2 e o armazenamento dos dados no SD.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
//Initialize a string to store data for writing to the SD card
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// Function to power on the sensor
void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }
  // Add data to the SD data string
  SDDataString += "scd4x,";
  if (error) {
    SDDataString += "-,-,-,";
  } else {
    SDDataString += String(co2);
    SDDataString += ',';
    SDDataString += String(temperature);
    SDDataString += ',';
    SDDataString += String(humidity);
    SDDataString += ',';
  }
}


int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();
 // Initialize the SPI interface for the SD card
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
// Check if the SD card is initialized
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("Card failed, or not present");
  } else {
    Serial.println("card initialized.");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // Clear the SD data string and print a message to the serial monitor
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- start measure %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // Open the datalog.csv file for writing
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // if the file is available, write to it:
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // print to the serial port too:
    Serial.print("sd write: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("error opening datalog.txt");
  }

}


```

# **Suporte Técnico**

Não se preocupe, nós cuidamos de você! Visite nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um pedido em grande quantidade ou necessidade de personalização, entre em contato pelo e-mail iot@seeed.cc
