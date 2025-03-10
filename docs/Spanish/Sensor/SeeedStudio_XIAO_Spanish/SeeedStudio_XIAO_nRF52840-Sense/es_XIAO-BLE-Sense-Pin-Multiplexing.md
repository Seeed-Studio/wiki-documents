---
description: Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)
title: Multiplexación de Pines para XIAO nRF52840
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-Pin-Multiplexing
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Multiplexación de Pines en Seeed Studio XIAO nRF52840 (Sense)

Seeed Studio XIAO nRF52840 (Sense) tiene interfaces ricas. Hay **11 pines digitales de entrada/salida** que pueden ser utilizados como **pines PWM** y **6 entradas analógicas** que pueden ser utilizadas como **pines ADC**. Soporta las tres interfaces comunes de comunicación serial: **UART, I2C y SPI**. ¡Esta wiki será útil para aprender sobre estas interfaces e implementarlas en tus próximos proyectos!

> Las funciones básicas aquí funcionan bien tanto para las bibliotecas de Seeed Studio XIAO nRF52840 para Arduino.

## Digital

Conecta un botón pulsador al Pin D6 y un LED al Pin D10. Luego sube el siguiente código para controlar el encendido/apagado del LED utilizando el botón pulsador.

```cpp
const int buttonPin = 6;     // botón conectado al pin digital 6
const int ledPin =  10;      // LED conectado al pin digital 10
 
int buttonState = 0;         // variable para leer el estado del botón
 
void setup() {
  // inicializa el pin del LED como salida:
  pinMode(ledPin, OUTPUT);
  // inicializa el pin del botón como entrada:
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // lee el estado del valor del botón:
  buttonState = digitalRead(buttonPin);
 
  // verifica si el botón está presionado. Si es así, el estado del botón es HIGH:
  if (buttonState == HIGH) {
    // apaga el LED:
    digitalWrite(ledPin, HIGH);
  } else {
    // enciende el LED:
    digitalWrite(ledPin, LOW);
  }
}
```

## Digital como PWM

Conecta un LED al Pin D10. Luego sube el siguiente código para ver cómo el LED se va desvaneciendo gradualmente.

```cpp
int ledPin = 10;    // LED conectado al pin digital 10

void setup() {

}

void loop() {
  // desvanecerse de mínimo a máximo en incrementos de 5 puntos:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // establece el valor (rango de 0 a 255):
    analogWrite(ledPin, fadeValue);
    // espera 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }

  // desvanecerse de máximo a mínimo en incrementos de 5 puntos:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // establece el valor (rango de 0 a 255):
    analogWrite(ledPin, fadeValue);
    // espera 30 milisegundos para ver el efecto de atenuación
    delay(30);
  }
}
```

## Analógico

Conecta un potenciómetro al Pin A5 y un LED al Pin D10. Luego sube el siguiente código para controlar el intervalo de parpadeo del LED al girar el botón del potenciómetro.

```cpp
const int sensorPin = 5;
const int ledPin =  10; 
void setup() {
  // declara el pin del LED como una salida:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // lee el valor del sensor:
  int sensorValue = analogRead(sensorPin);
  // enciende el LED:
  digitalWrite(ledPin, HIGH);
  // detiene el programa durante <sensorValue> milisegundos:
  delay(sensorValue);
  // apaga el LED:
  digitalWrite(ledPin, LOW);
  // detiene el programa durante <sensorValue> milisegundos:
  delay(sensorValue);
}
```

## Serial

Usa Serial1 para utilizar el UART a través de GPIO en lugar de USB. También puedes usar ambos de manera concurrente.
Utiliza el pin D6 como pin TX del UART y el pin D7 como pin RX del UART para enviar el mensaje "¡Hola Mundo!".

```cpp
void setup() {
    Serial1.begin(115200);
    while (!Serial1);
}
 
void loop() {
    Serial1.println("¡Hola Mundo!");
    delay(1000);
}
```

## I2C

- **Paso 1.** Conecta una [Pantalla OLED Grove 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) al Seeed Studio XIAO nRF52840 (Sense) siguiendo la conexión de hardware como se muestra a continuación.

|  Grove - OLED Display 1.12 (SH1107) |  Seeed Studio XIAO nRF52840 (Sense) |
|-----------|-----------|
| GND       | GND       |
| VCC       | 5V        |
| SDA       | SDA       | 
| SCL       | SCL       |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2.** Abre el IDE de Arduino, navega a `Esquema > Incluir Biblioteca > Administrar Bibliotecas...`

- **Paso 3.** Busca **u8g2** e instálala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>


- **Paso 4.** Sube el siguiente código para mostrar cadenas de texto en la Pantalla OLED.

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

- **Paso 1.** Conecta una [Pantalla OLED Grove 1.12 (SH1107) V3.0](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html) al Seeed Studio XIAO nRF52840 (Sense) siguiendo la conexión de hardware como se muestra a continuación.

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


- **Paso 2.** Esta pantalla OLED soporta tanto comunicación I2C como SPI, y el modelo por defecto es I2C. Para usar el modo SPI, debes consultar la [wiki de Grove - OLED Display 1.12 (SH1107) V3.0](https://wiki.seeedstudio.com/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c) para cambiar la comunicación de la pantalla OLED a SPI antes de continuar.

**Nota:** Asegúrate de que la biblioteca U8g2 esté instalada según los pasos anteriores.

- **Paso 3.** Sube el siguiente código para mostrar cadenas de texto en la Pantalla OLED.

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
