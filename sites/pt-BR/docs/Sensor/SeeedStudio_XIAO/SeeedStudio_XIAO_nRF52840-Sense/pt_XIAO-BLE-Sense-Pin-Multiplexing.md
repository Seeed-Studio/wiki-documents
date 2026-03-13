---
description: Multiplexação de pinos no Seeed Studio XIAO nRF52840 (Sense)
title: Multiplexação de pinos para ambas as versões
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-Pin-Multiplexing/
---

# Multiplexação de pinos no Seeed Studio XIAO nRF52840 (Sense)

O Seeed Studio XIAO nRF52840 (Sense) possui interfaces ricas. Existem **11 E/S digitais** que podem ser usadas como **pinos PWM** e **6 entradas analógicas** que podem ser usadas como **pinos ADC**. Ele suporta todas as três interfaces de comunicação serial comuns, como **UART, I2C e SPI**. Este wiki será útil para aprender sobre essas interfaces e implementá-las em seus próximos projetos!

> As funções básicas aqui funcionam bem para ambas as bibliotecas Arduino do Seeed Studio XIAO nRF52840.

## Digital

Conecte um botão ao pino D6 e um LED ao pino D10. Em seguida, faça o upload do código a seguir para controlar o LIGA/DESLIGA do LED usando o botão.

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

Conecte um LED ao pino D10. Em seguida, faça o upload do código a seguir para ver o LED diminuindo gradualmente o brilho.

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

Conecte um potenciômetro ao pino A5 e um LED ao pino D10. Em seguida, faça o upload do código a seguir para controlar o intervalo de piscagem do LED girando o botão do potenciômetro.

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

## Serial

Use Serial1 para usar a UART via GPIO em vez de USB. Você também pode usar ambas simultaneamente.
Use o pino D6 como pino TX da UART e o pino D7 como pino RX da UART para enviar a mensagem "Hello World!".

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

- **Passo 1.** Conecte um [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) ao Seeed Studio XIAO nRF52840 (Sense) seguindo a conexão de hardware a seguir.

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       |
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Abra o Arduino IDE, navegue até `Sketch > Include Library > Manage Libraries...`

- **Passo 3.** Procure por **u8g2** e instale

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Faça o upload do código a seguir para exibir strings de texto no Display OLED

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

- **Passo 1.** Conecte um [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) ao Seeed Studio XIAO nRF52840 (Sense) seguindo a conexão de hardware a seguir.

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

- **Passo 2.** Este display OLED suporta comunicação tanto I2C quanto SPI, e o modo padrão é I2C. Para usar o modo SPI, você precisa consultar o [Grove - OLED Display 1.12 (SH1107) V3.0 wiki](https://wiki.seeedstudio.com/pt-br/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) para mudar a comunicação do display OLED para SPI antes de prosseguir

**Nota:** Certifique-se de que a biblioteca U8g2 esteja instalada a partir dos passos anteriores.

- **Passo 3.** Faça o upload do código a seguir para exibir strings de texto no Display OLED

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
