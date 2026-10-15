---
description: Multiplexación de pines en Seeed Studio XIAO nRF52840 (Sense)
title: Multiplexación de pines para ambas versiones
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-Pin-Multiplexing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Multiplexación de pines en Seeed Studio XIAO nRF52840 (Sense)

Seeed Studio XIAO nRF52840 (Sense) tiene interfaces muy completas. Hay **11 E/S digitales** que se pueden usar como **pines PWM** y **6 entradas analógicas** que se pueden usar como **pines ADC**. Es compatible con las tres interfaces de comunicación serie más comunes, como **UART, I2C y SPI**. ¡Este wiki será útil para aprender sobre estas interfaces e implementarlas en tus próximos proyectos!

> Las funciones básicas aquí funcionan bien para ambas bibliotecas de Arduino de Seeed Studio XIAO nRF52840.

## Descripción general del hardware

<Tabs>
<TabItem value="nRF52840" label="XIAO nRF52840" default>

### Parte frontal de XIAO nRF52840

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO nRF52840

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pines**

| Pin XIAO                 | Función          | Pin del chip | Descripción                                         | Nombre Arduino |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | Entrada/Salida de alimentación                      |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | Salida de alimentación                              |              |
| D0                      | Analógico        | P0.02         | GPIO, AIN0                                           | 0            |
| D1                      | Analógico        | P0.03         | GPIO, AIN1                                           | 1            |
| D2                      | Analógico        | P0.28         | GPIO, AIN4                                           | 2            |
| D3                      | Analógico        | P0.29         | GPIO, AIN5                                           | 3            |
| D4                      | Analógico, SDA   | P0.04         | GPIO, datos I2C, AIN2                                | 4            |
| D5                      | Analógico, SCL   | P0.05         | GPIO, reloj I2C, AIN3                                | 5            |
| D6                      | TX               | P1.11         | GPIO, transmisión UART                               | 7/6          |
| D7                      | RX               | P1.12         | GPIO, recepción UART                                 | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO, reloj SPI                                      | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO, datos SPI                                      | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO, datos SPI                                      | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | RESET                                                |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | Control de habilitación para lectura de voltaje de batería |              |
| RF Switch Port Select   |                  | P2.05         | Conmutar antena integrada                            |              |
| RF Switch Power         |                  | P2.03         | Alimentación                                         |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | Pin de LED RGB rojo controlado por el usuario        | 11           |
| USER_LED_B              |                  | P0.06         | Pin de LED RGB azul controlado por el usuario        | 13/12        |
| USER_LED_G              |                  | P0.30         | Pin de LED RGB verde controlado por el usuario       | 12/13        |

</TabItem>
<TabItem value="nRF52840Plus" label="XIAO nRF52840 Plus">

### Parte frontal de XIAO nRF52840 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO nRF52840 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pines**

| Pin XIAO                 | Función             | Pin del chip | Funciones alternativas | Descripción                              | Nombre Arduino |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | Entrada/Salida de alimentación           |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | Salida de alimentación                   |              |
| D0                      | Analógico           | P0.02     |                    | GPIO, ADC                                | 0            |
| D1                      | Analógico           | P0.03     |                    | GPIO, ADC                                | 1            |
| D2                      | Analógico           | P0.28     |                    | GPIO, ADC                                | 2            |
| D3                      | Analógico           | P0.29     |                    | GPIO, ADC                                | 3            |
| D4                      | Analógico, SDA      | P0.04     |                    | GPIO, datos I2C, ADC                     | 4            |
| D5                      | Analógico, SCL      | P0.05     |                    | GPIO, reloj I2C, ADC                     | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO, transmisión UART                   | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO, recepción UART                     | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO, reloj SPI                          | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO, datos SPI                          | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO, datos SPI                          | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO, I2S, ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO, I2S, ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO, I2S, ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO, recepción UART, ADC                |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO, transmisión UART, ADC              |              |
| D16                     | AIN7_BAT             | P0.31     |                    | Pin de lectura ADC de voltaje de batería |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO, SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO, SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO, SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | Control de habilitación para lectura de voltaje de batería |              |
| Reset                   |                      | P0.18     |                    | RESET                                    |              |
| RF Switch Port Select   |                      | P2.05     |                    | Conmutar antena integrada                |              |
| RF Switch Power         |                      | P2.03     |                    | Alimentación                             |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | Pin de LED RGB rojo controlado por el usuario | 11           |
| USER_LED_B              |                      | P0.06     |                    | Pin de LED RGB azul controlado por el usuario | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | Pin de LED RGB verde controlado por el usuario | 12/13        |

</TabItem>
<TabItem value="nRF52840Sense" label="XIAO nRF52840 Sense">

### Parte frontal de XIAO nRF52840 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO nRF52840 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pines**

| Pin XIAO                | Función         | Pin del chip | Descripción                                          | Nombre Arduino |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | Entrada/Salida de alimentación                       |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | Salida de alimentación                               |              |
| D0                      | Analógico        | P0.02         | GPIO, AIN0                                           | 0            |
| D1                      | Analógico        | P0.03         | GPIO, AIN1                                           | 1            |
| D2                      | Analógico        | P0.28         | GPIO, AIN4                                           | 2            |
| D3                      | Analógico        | P0.29         | GPIO, AIN5                                           | 3            |
| D4                      | Analógico, SDA   | P0.04         | GPIO, datos I2C, AIN2                                | 4            |
| D5                      | Analógico, SCL   | P0.05         | GPIO, reloj I2C, AIN3                                | 5            |
| D6                      | TX               | P1.11         | GPIO, transmisión UART                               | 7/6          |
| D7                      | RX               | P1.12         | GPIO, recepción UART                                 | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO, reloj SPI                                      | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO, datos SPI                                      | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO, datos SPI                                      | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                  |              |
| NFC2                    |                  | P0.10         | NFC                                                  |              |
| Reset                   |                  | P0.18         | RESET                                                |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | Control de habilitación para lectura de voltaje de batería |              |
| 6 DOF IMU_PWR           |                  | P1.08         | Interruptor de alimentación del módulo 6D            |              |
| 6 DOF IMU__INT1         |                  | P0.11         | Pin de señal de interrupción del módulo 6D           |              |
| PDM Microphone_DATA     |                  | P0.16         | Pin de entrada de datos de audio PDM                 |              |
| PDM Microphone_CLK      |                  | P1.00         | Pin de salida de reloj de audio PDM                  |              |
| RF Switch Port Select   |                  | P2.05         | Conmutar antena integrada                            |              |
| RF Switch Power         |                  | P2.03         | Alimentación                                         |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                          |              |
| USER_LED_R              |                  | P0.26         | Pin de LED RGB rojo controlado por el usuario        | 11           |
| USER_LED_B              |                  | P0.06         | Pin de LED RGB azul controlado por el usuario        | 13/12        |
| USER_LED_G              |                  | P0.30         | Pin de LED RGB verde controlado por el usuario       | 12/13        |

</TabItem>
<TabItem value="nRF52840SensePlus" label="XIAO nRF52840 Sense Plus">

### XIAO nRF52840 Sense Plus frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 Sense Plus posterior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pines**

| Pin XIAO                | Función             | Pin del chip | Funciones alternativas | Descripción                              | Nombre Arduino |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | Entrada/Salida de alimentación           |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | Salida de alimentación                   |              |
| D0                      | Analógico           | P0.02     |                    | GPIO, ADC                                | 0            |
| D1                      | Analógico           | P0.03     |                    | GPIO, ADC                                | 1            |
| D2                      | Analógico           | P0.28     |                    | GPIO, ADC                                | 2            |
| D3                      | Analógico           | P0.29     |                    | GPIO, ADC                                | 3            |
| D4                      | Analógico, SDA      | P0.04     |                    | GPIO, datos I2C, ADC                     | 4            |
| D5                      | Analógico, SCL      | P0.05     |                    | GPIO, reloj I2C, ADC                     | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO, transmisión UART                   | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO, recepción UART                     | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO, reloj SPI                          | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO, datos SPI                          | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO, datos SPI                          | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO, I2S, ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO, I2S, ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO, I2S, ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO, recepción UART, ADC                |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO, transmisión UART, ADC              |              |
| D16                     | AIN7_BAT             | P0.31     |                    | Pin de lectura ADC de voltaje de batería |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO, SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO, SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO, SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | Control de habilitación para lectura de voltaje de batería |              |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | Interruptor de alimentación del módulo 6D |              |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | Pin de señal de interrupción del módulo 6D |              |
| PDM Microphone_DATA     |                      | P0.16     |                    | Pin de entrada de datos de audio PDM     |              |
| PDM Microphone_CLK      |                      | P1.00     |                    | Pin de salida de reloj de audio PDM      |              |
| Reset                   |                      | P0.18     |                    | RESET                                    |              |
| RF Switch Port Select   |                      | P2.05     |                    | Conmutar antena integrada                |              |
| RF Switch Power         |                      | P2.03     |                    | Alimentación                             |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | Pin de LED RGB rojo controlado por el usuario | 11           |
| USER_LED_B              |                      | P0.06     |                    | Pin de LED RGB azul controlado por el usuario | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | Pin de LED RGB verde controlado por el usuario | 12/13        |

</TabItem>
</Tabs>

## Digital

Conecta un pulsador al pin D6 y un LED al pin D10. Luego sube el siguiente código para controlar el ENCENDIDO/APAGADO del LED usando el pulsador.

```cpp
const int buttonPin = 6;     // pushbutton connected to digital pin 6
const int ledPin =  10;      // LED connected to digital pin 10

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```

## Digital como PWM

Conecta un LED al pin D10. Luego sube el siguiente código para ver cómo el LED se va atenuando gradualmente.

```cpp
int ledPin = 10;    // LED connected to digital pin 10

void setup() {

}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

## Analógico

Conecta un potenciómetro al pin A5 y un LED al pin D10. Luego sube el siguiente código para controlar el intervalo de parpadeo del LED girando la perilla del potenciómetro.

```cpp
const int sensorPin = 5;
const int ledPin =  10; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  int sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

## Serie

Usa Serial1 para usar el UART a través de GPIO en lugar de USB. También puedes usar ambos de forma simultánea.
Usa el pin D6 como pin TX de UART y el pin D7 como pin RX de UART para enviar el mensaje "Hello World!".

```cpp
void setup() {
    Serial1.begin(115200);
    while (!Serial1);
}

void loop() {
    Serial1.println("Hello World!");
    delay(1000);
}
```

## I2C

- **Paso 1.** Conecta un [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) al Seeed Studio XIAO nRF52840 (Sense) siguiendo la conexión de hardware que se indica a continuación.

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       |
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Abre Arduino IDE, navega a `Sketch > Include Library > Manage Libraries...`

- **Paso 3.** Busca **u8g2** e instálala

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Sube el siguiente código para mostrar cadenas de texto en la pantalla OLED

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

## SPI

- **Paso 1.** Conecta un [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) al Seeed Studio XIAO nRF52840 (Sense) siguiendo la conexión de hardware que se indica a continuación.

| Grove - OLED Display 1.12 (SH1107) | Seeed Studio XIAO nRF52840 (Sense) |
|-----------|------------|
| GND        | GND       |
| 5V         | 5V        |
| SCL        | SCK       |
| SI         | MOSI      |
| RES        | D3        |
| D/C        | D4        |
| CS         | D5        |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Esta pantalla OLED es compatible tanto con comunicación I2C como SPI, y el modo predeterminado es I2C. Para usar el modo SPI, debes consultar la [Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/es/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) para cambiar la comunicación de la pantalla OLED a SPI antes de continuar

**Nota:** Asegúrate de que la biblioteca U8g2 esté instalada a partir de los pasos anteriores.

- **Paso 3.** Sube el siguiente código para mostrar cadenas de texto en la pantalla OLED

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 5, /* dc=*/ 4, /* reset=*/ 3);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```
