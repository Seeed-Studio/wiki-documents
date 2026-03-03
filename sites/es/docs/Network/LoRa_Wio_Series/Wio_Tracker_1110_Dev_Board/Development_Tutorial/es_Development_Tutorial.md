---
description: Development_Tutorial_of_Wio-Tracker 1110 
title: Tutorial de Desarrollo
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/development_tutorial_for_Wio-trakcer
sidebar_position: 2
sidebar_class_name: hidden
last_update:
  date: 9/4/2023
  author: Jessie
---

Antes de comenzar el desarrollo, por favor revisa [Configurar tu cadena de herramientas](https://wiki.seeedstudio.com/es/setup_toolchain_for_wio_tracker/) para configurar las herramientas primero.

## Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

## Descripción general del firmware

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples/raw/b2ebc5f1de0af24a9f72316418f9313de4264e0f/media/1.png
" alt="pir" width={600} height="auto" /></p>


## Grove

Hay 6 interfaces Grove en la Placa de Desarrollo Wio Tracker 1110, que pueden conectarse a más de 300 módulos Grove. Haz clic [aquí](https://wiki.seeedstudio.com/es/Grove_Sensor_Intro/) para conocer más sobre el módulo Grove.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker-grove.png" alt="pir" width={800} height="auto" /></p>


### Grove I2C

Hay un puerto Grove I2C en el DK, con `SDA` en el pin 27 y `SCL` en el pin 26. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>


### Grove UART


La Placa de Desarrollo Wio Tracker 1110 tiene dos periféricos UART, llamados `uart0` y `uart1`. Los pines de `uart0` están conectados al CH340C para propósitos de depuración, mientras que `uart1` sirve como Puerto UART Grove.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>


Refiriéndose al esquemático, TXD está ubicado en el pin 8 y RXD está en el pin 6. 


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

// Define el pin al cual está conectado el sensor ultrasónico
constexpr int ULTRASONIC_PIN = D0;  

Ultrasonic ultrasonic(ULTRASONIC_PIN);  

void setup()
{
  delay(100);                 
  Serial.begin(115200);        // Iniciar comunicación Serial a una velocidad de baudios de 115200
  while (!Serial) delay(100); 

void loop()
{
  long RangeInInches;         // Variable para almacenar distancia en pulgadas
  long RangeInCentimeters;    // Variable para almacenar distancia en centímetros

  Serial.println("La distancia a los obstáculos al frente es: ");  

  RangeInInches = ultrasonic.MeasureInInches();  // Medir distancia en pulgadas usando el sensor Ultrasónico
  Serial.print(RangeInInches);  
  Serial.println(" pulgada");       

  delay(250); 

  RangeInCentimeters = ultrasonic.MeasureInCentimeters();  
  Serial.print(RangeInCentimeters);  
  Serial.println(" cm");             

  delay(2500);  
}
```

### Grove Analógico


<details> 
<summary>Código de Ejemplo:</summary>

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


## Recursos

**[Github]** [Seeed-Studio/Wio_Tracker_1110_Dev_Board](https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples)