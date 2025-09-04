---
description: Multiplexación de Pines en Seeed Studio XIAO nRF52840 (Sense)
title: Multiplexación de Pines para ambas versiones
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Multiplexación de Pines en Seeed Studio XIAO nRF52840 (Sense)

Seeed Studio XIAO nRF52840 (Sense) tiene interfaces ricas. Hay **11 E/S digitales** que pueden usarse como **pines PWM** y **6 entradas analógicas** que pueden usarse como **pines ADC**. Soporta las tres interfaces de comunicación serie comunes como **UART, I2C, y SPI**. ¡Esta wiki será útil para aprender sobre estas interfaces e implementarlas en tus próximos proyectos!

> Las funciones básicas aquí funcionan bien para ambas librerías de Arduino de Seeed Studio XIAO nRF52840.

## Digital

Conecta un pulsador al Pin D6 y un LED al Pin D10. Luego sube el siguiente código para controlar el ENCENDIDO/APAGADO del LED usando el pulsador.

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

Conecta un LED al Pin D10. Luego sube el siguiente código para ver el LED desvaneciéndose gradualmente.

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

Conecta un potenciómetro al Pin A5 y un LED al Pin D10. Luego sube el siguiente código para controlar el intervalo de parpadeo del LED girando la perilla del potenciómetro.

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
Usa Serial1 para utilizar el UART a través de GPIO en lugar de USB. También puedes usar ambos de forma concurrente.
Usa el pin D6 como pin TX del UART y el pin D7 como pin RX del UART para enviar el mensaje "Hello World!". 

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

- **Paso 1.** Conecta un [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) al Seeed Studio XIAO nRF52840 (Sense) siguiendo la conexión de hardware como se muestra a continuación.

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       | 
| SCL       | SCL       |


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2.** Abre Arduino IDE, navega a `Sketch > Include Library > Manage Libraries...`

- **Paso 3.** Busca **u8g2** e instálalo

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

- **Paso 1.** Conecta un [Grove - OLED Display 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) al Seeed Studio XIAO nRF52840 (Sense) siguiendo la conexión de hardware como se muestra a continuación.

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


- **Paso 2.** Esta pantalla OLED admite comunicación tanto I2C como SPI, y el modelo predeterminado es I2C. Para usar el modo SPI, necesitas consultar la [wiki de Grove - OLED Display 1.12 (SH1107) V3.0](https://wiki.seeedstudio.com/es/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) para cambiar la comunicación de la pantalla OLED a SPI antes de continuar

**Nota:** Asegúrate de que la biblioteca U8g2 esté instalada desde los pasos anteriores.

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
