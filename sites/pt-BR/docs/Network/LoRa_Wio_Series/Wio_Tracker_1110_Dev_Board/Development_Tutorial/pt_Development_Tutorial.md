---
description: Tutorial_de_Desenvolvimento_do_Wio-Tracker 1110
title: Tutorial de Desenvolvimento
keywords:
  - Tracker
  - Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /development_tutorial_for_Wio-trakcer
sidebar_position: 2
sidebar_class_name: hidden
last_update:
  date: 9/4/2023
  author: Jessie
createdAt: '2023-09-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/development_tutorial_for_Wio-trakcer/
---

Antes de iniciar o desenvolvimento, verifique [Setup your toolchain](https://wiki.seeedstudio.com/pt-br/setup_toolchain_for_wio_tracker/) para configurar a ferramenta primeiro.

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

## Visão geral do firmware

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples/raw/b2ebc5f1de0af24a9f72316418f9313de4264e0f/media/1.png
" alt="pir" width={600} height="auto" /></p>

## Grove

Existem 6 interfaces Grove na Wio Tracker 1110 Dev Board, que podem ser conectadas a mais de 300 módulos Grove. Clique [aqui](https://wiki.seeedstudio.com/pt-br/Grove_Sensor_Intro/) para saber mais sobre o módulo Grove.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker-grove.png" alt="pir" width={800} height="auto" /></p>

### Grove I2C

Há uma porta Grove I2C no DK, com `SDA` no pino 27 e `SCL` no pino 26.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

### Grove UART

A Wio Tracker 1110 Dev Board possui dois periféricos UART, denominados `uart0` e `uart1`. Os pinos de `uart0` são conectados ao CH340C para fins de depuração, enquanto `uart1` serve como uma porta Grove UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

Consultando o esquemático, TXD está localizado no pino 8 e RXD está no pino 6.

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

### Grove Digital

```cpp
#include <Adafruit_TinyUSB.h>  
#include <Wire.h>              
#include <Ultrasonic.h>        

// Define the pin to which the ultrasonic sensor is connected
constexpr int ULTRASONIC_PIN = D0;  

Ultrasonic ultrasonic(ULTRASONIC_PIN);  

void setup()
{
  delay(100);                 
  Serial.begin(115200);        // Start Serial communication at a baud rate of 115200
  while (!Serial) delay(100); 

void loop()
{
  long RangeInInches;         // Variable to store distance in inches
  long RangeInCentimeters;    // Variable to store distance in centimeters

  Serial.println("The distance to obstacles in front is: ");  

  RangeInInches = ultrasonic.MeasureInInches();  // Measure distance in inches using the Ultrasonic sensor
  Serial.print(RangeInInches);  
  Serial.println(" inch");       

  delay(250); 

  RangeInCentimeters = ultrasonic.MeasureInCentimeters();  
  Serial.print(RangeInCentimeters);  
  Serial.println(" cm");             

  delay(2500);  
}
```

### Grove Analógico

<details>
<summary>Código de Exemplo:</summary>

```cpp
#include <Adafruit_TinyUSB.h> // for Serial

constexpr int ADCIN = A0;
constexpr float MV_PER_LSB = 3600.0f / 1024.0f; // 10-bit ADC with 3.6V input range

void setup()
{
  delay(100);
  Serial.begin(115200);
  while (!Serial) delay(100);
}

void loop()
{
 // Get a fresh ADC value
  long sum = 0;
  for (int i = 0; i < 32; i++)
  {
    sum += analogRead(ADCIN);
  }
  int adcvalue = sum / 32;

  // Display the results
  Serial.print(adcvalue);
  Serial.print(" [");
  Serial.print((float)adcvalue * MV_PER_LSB);
  Serial.println(" mV]");

  delay(1000);
}
```

</details>

### LoRaWAN

## Recurso

**[Github]** [Seeed-Studio/Wio_Tracker_1110_Dev_Board](https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples)
