---
title: Multiplexación de pines con Seeed Studio XIAO ESP32-C5
description: ''
keywords:
  - xiao
  - esp32c5
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_pin_multiplexing
last_update:
  date: 12/30/2025
  author: Zeller
createdAt: '2025-12-30'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_pin_multiplexing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

La Seeed Studio XIAO ESP32-C5 es una placa de desarrollo potente y versátil que incorpora una variedad de interfaces periféricas y pines GPIO. Estos pines pueden utilizarse para diversos fines, como comunicarse con otros dispositivos, leer sensores analógicos, controlar LED y mucho más. En este tutorial, te guiaremos sobre cómo utilizar los pines multiplexados de la XIAO ESP32-C5.<br/>
En resumen, la XIAO ESP32-C5 incorpora 1×I2C, 1×SPI, 2×UART, hasta 11×GPIO (compatibles con PWM), 5×canales ADC y una interfaz de almohadillas de conexión JTAG (almohadillas en el lado posterior).

## Introducción

A continuación, proporcionaré ejemplos de tutoriales y código respectivamente basados en las dos plataformas: **PlatformIO** y **Arduino IDE**, y puedes elegir la plataforma de desarrollo según tus circunstancias específicas.<br/>
Si no has utilizado **Arduino IDE** antes, consulta [Primeros pasos con Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/es/xiao_esp32c5_getting_started/).<br/>
Si no has utilizado **PlatfromIO** antes, consulta [Platform IO con Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/es/xiao_esp32c5_with_platformio/)。

### Descripción general del pinout

Antes de comenzar, revisemos todos los pines que tiene la XIAO ESP32-C5 y sus funciones con el siguiente esquema.

### Parte frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte posterior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Digital

Los 11 pines IO (D0–D10) de la XIAO ESP32-C5 admiten funciones digitales. A continuación se muestra un ejemplo práctico que demuestra cómo utilizar funciones digitales para controlar el estado de encendido/apagado de una luz, y puedes multiplexar estos pines según tus requisitos específicos.

#### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Los siguientes ejemplos de código se basan respectivamente en Arduino IDE y PlatformIO, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código adecuado según tu situación real de desarrollo.

<Tabs>
<TabItem value=' Arduino IDE'>

- Código de referencia

```cpp
const int buttonPin = D1;   // Button pin
const int ledPin    = D0;   // LED pin

bool ledState = false;      // LED current state (OFF/ON)

// Debounce
const unsigned long DEBOUNCE_MS = 30;
bool lastReading = HIGH;          // because INPUT_PULLUP idle is HIGH
bool stableState = HIGH;
unsigned long lastChangeTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP); 

}

void loop() {
  bool reading = digitalRead(buttonPin);

  // Detect a level change and start timing (for debouncing)
  if (reading != lastReading) {
    lastChangeTime = millis();
    lastReading = reading;
  }

  if (millis() - lastChangeTime >= DEBOUNCE_MS) {
    if (stableState != reading) {
      stableState = reading;


      if (stableState == LOW) {
        ledState = !ledState;                 // toggle
        digitalWrite(ledPin, ledState ? HIGH : LOW);
      }
    }
  }
}
```

</TabItem>

<TabItem value='PlatformIO'>

- Asegúrate de que el contenido de `platform.ini` sea el siguiente.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referencia

```cpp
#include <Arduino.h>

const int buttonPin = D1;   // Button pin
const int ledPin    = D0;   // LED pin

bool ledState = false;      // LED current state (OFF/ON)

// Debounce
const unsigned long DEBOUNCE_MS = 30;
bool lastReading = HIGH;          // because INPUT_PULLUP idle is HIGH
bool stableState = HIGH;
unsigned long lastChangeTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);

  pinMode(buttonPin, INPUT_PULLUP); 

}

void loop() {
  bool reading = digitalRead(buttonPin);

  // Detect a level change and start timing (for debouncing)
  if (reading != lastReading) {
    lastChangeTime = millis();
    lastReading = reading;
  }

  if (millis() - lastChangeTime >= DEBOUNCE_MS) {
    if (stableState != reading) {
      stableState = reading;


      if (stableState == LOW) {
        ledState = !ledState;                 // toggle
        digitalWrite(ledPin, ledState ? HIGH : LOW);
      }
    }
  }
}
```

</TabItem>
</Tabs>

#### Resultado

- Después de cargar el código, pulsa el botón: cada pulsación conmuta el LED entre encendido y apagado, simulando el efecto real de controlar una luz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_1.gif" style={{width:400, height:'auto'}}/></div>

:::tip
Si no se consigue el efecto anterior después de pulsar el botón, es posible que primero tengas que pulsar el botón RESET integrado para activar la placa.
:::

### PWM

Todos los pines D0–D11 de la XIAO ESP32-C5 admiten funcionalidad PWM. El PWM puede utilizarse para accionar dispositivos como servos, motores y luces LED. A continuación se muestra un ejemplo de luces respiratorias controladas por PWM para demostrar la funcionalidad de PWM.

#### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Los siguientes ejemplos de código se basan respectivamente en Arduino IDE y PlatformIO, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código adecuado según tu situación real de desarrollo.

<Tabs>
<TabItem value=' Arduino IDE'>

- Código de referencia

```cpp
int ledPin = D1;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(ledPin, OUTPUT);
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

</TabItem>

<TabItem value='PlatformIO'>

- Asegúrate de que el contenido de `platform.ini` sea el siguiente.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referencia

```cpp
#include <Arduino.h>

int ledPin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(ledPin, OUTPUT);
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

</TabItem>
</Tabs>

#### Resultado

Después de cargar el código, el Grove - Variable Color LED mostrará un efecto de luz respiratoria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_2.gif" style={{width:400, height:'auto'}}/></div>

### Analógico

Para el XIAO ESP32-C5, los pines A0–A5 admiten la funcionalidad de lectura analógica. La lectura ADC se puede aplicar a escenarios como la medición del voltaje de la batería y la lectura de codificadores rotatorios. A continuación, demostraremos la función de lectura ADC tomando como ejemplo la medición de voltaje del Grove-Rotary Angle Sensor.

#### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Rotary Angle Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881159_2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Los siguientes ejemplos de código se basan respectivamente en Arduino IDE y PlatformIO, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código apropiado según tu situación de desarrollo real.

<Tabs>
<TabItem value=' Arduino IDE'>

```cpp
iconst int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);

  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);

  // Convert millivolts to volts
  float voltage = analogVolts / 1000.0;

  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  Serial.printf("Voltage = %.3f V\n", voltage);

  delay(1000); // Delay for clear reading from serial
}
```

</TabItem>

<TabItem value='PlatformIO'>

- Asegúrate de que el contenido de `platform.ini` sea el siguiente.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referencia

```cpp
#include <Arduino.h>

iconst int analogPin = A0; 

void setup() {
  // Initialize serial communication at 115200 bits per second
  Serial.begin(115200);

  // Set the resolution to 12 bits (0-4095)
  analogReadResolution(12);
}

void loop() {
  // Read the analog value and millivolts for the analogPin
  int analogValue = analogRead(analogPin);
  int analogVolts = analogReadMilliVolts(analogPin);

  // Convert millivolts to volts
  float voltage = analogVolts / 1000.0;

  // Print the values to the Serial Monitor
  Serial.printf("ADC analog value = %d\n", analogValue);
  Serial.printf("ADC millivolts value = %d\n", analogVolts);
  Serial.printf("Voltage = %.3f V\n", voltage);

  delay(1000); // Delay for clear reading from serial
}
```

</TabItem>
</Tabs>

#### Resultado

Abre el monitor serie y este imprimirá el valor ADC bruto (analogValue), el valor en milivoltios (analogVolts) y el valor de voltaje (voltage) leídos desde el Grove-Rotary Angle Sensor. Se producirán cambios evidentes a medida que gires el Grove-Rotary Angle Sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_3.png" style={{width:600, height:'auto'}}/></div>

### Comunicación serie

El XIAO ESP32-C5 cuenta con dos interfaces de comunicación serie por hardware: **USB Serial** y **UART1 Serial**, que puedes utilizar para la comunicación serie. Además, puedes usar otros pines de propósito general para simular interfaces de comunicación serie.

#### USB / UART1 Serial

Para **USB Serial**, conecta la placa directamente a un ordenador mediante USB-C para la monitorización; esta es la interfaz utilizada en los ejemplos anteriores. Para **UART1 Serial**, utiliza el **XIAO Debug Mate** de Seeed Studio para la monitorización.

##### Preparación de hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Seeed Studio XIAO Debug Mate</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-xiao-debugger.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### Software

Los siguientes ejemplos de código se basan respectivamente en Arduino IDE y PlatformIO, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código apropiado según tu situación de desarrollo real.<br/>
Los pines correspondientes para Serial1 son `RX_PIN - D7` y `TX_PIN - D6`.

<Tabs>
<TabItem value=' Arduino IDE'>

- Código de referencia

```cpp
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial.begin(115200);
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
    Serial.print("PC Serial \n");
    Serial1.print("Hello XIAO ESP32-C5\n");
  delay(1000);
}
```

</TabItem>

<TabItem value='PlatformIO'>

- Asegúrate de que el contenido de platform.ini sea el siguiente.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referencia

```cpp
#include <Arduino.h>

#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial.begin(115200);
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
    Serial.print("PC Serial \n");
    Serial1.print("Hello XIAO ESP32-C5\n");
  delay(1000);
}
```

</TabItem>
</Tabs>

##### Resultado

Después de cargar el programa, puedes monitorizarlo mediante la función UART del **XIAO Debug Mate** de Seeed Studio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_debug.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Si no has utilizado antes el Seeed Studio XIAO Debug Mate, puedes visitar  [Primeros pasos con XIAO Debug Mate](https://wiki.seeedstudio.com/es/getting_started_with_xiao_debug_mate/).
:::

#### Puerto serie por software

Esta sección demostrará la funcionalidad de la comunicación serie por software simulando pines de comunicación serie utilizando pines de propósito general.

##### Preparación de hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Módulo y adaptador CH340G USB a serie (TTL)</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### Software

Los siguientes ejemplos de código se basan respectivamente en Arduino IDE y PlatformIO, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código adecuado según tu situación real de desarrollo.<br/>
Los pines correspondientes simulados por software son `RX_PIN - D2` y `TX_PIN - D1`.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instala la biblioteca de dependencias `EspSoftwareSerial`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_1.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de referencia

```cpp
#include <SoftwareSerial.h>

#define MYPORT_TX D1
#define MYPORT_RX D2

EspSoftwareSerial::UART mySerial;

String receivedData = "";  // Used for storing the received data
unsigned long lastReceiveTime = 0;  // Record the last reception time
const unsigned long TIMEOUT = 100;  // 100ms timeout period

void setup() {
  Serial.begin(115200); //USB-C
  mySerial.begin(38400, SWSERIAL_8N1, MYPORT_RX, MYPORT_TX, false);
}

void loop() {
  // Process the data received via the serial port of the software
  while (mySerial.available()) {
    char incomingChar = mySerial.read();
    receivedData += incomingChar;
    lastReceiveTime = millis();  // The latest time of reception
  }

  // Check if the time limit has been exceeded. If it has, consider that the reception of one frame of data is complete.
  if (receivedData.length() > 0 && (millis() - lastReceiveTime > TIMEOUT)) {
    Serial.print("Received via software serial: ");
    Serial.println(receivedData);
    receivedData = "";  // Clear the buffer area
  }

  // Process the data received through the hardware serial port
  if (Serial.available()) {
    String data = Serial.readString();  // Read the entire string at once
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

</TabItem>

<TabItem value='PlatformIO'>

- Asegúrate de que el contenido de `platform.ini` sea el siguiente.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = plerup/EspSoftwareSerial@^8.2.0
```

- Código de referencia

```cpp
#include <Arduino.h>
#include <SoftwareSerial.h>

#define MYPORT_TX D1
#define MYPORT_RX D2

EspSoftwareSerial::UART mySerial;

String receivedData = "";  // Used for storing the received data
unsigned long lastReceiveTime = 0;  // Record the last reception time
const unsigned long TIMEOUT = 100;  // 100ms timeout period

void setup() {
  Serial.begin(115200); //USB-C
  mySerial.begin(38400, SWSERIAL_8N1, MYPORT_RX, MYPORT_TX, false);
}

void loop() {
  // Process the data received via the serial port of the software
  while (mySerial.available()) {
    char incomingChar = mySerial.read();
    receivedData += incomingChar;
    lastReceiveTime = millis();  // The latest time of reception
  }

  // Check if the time limit has been exceeded. If it has, consider that the reception of one frame of data is complete.
  if (receivedData.length() > 0 && (millis() - lastReceiveTime > TIMEOUT)) {
    Serial.print("Received via software serial: ");
    Serial.println(receivedData);
    receivedData = "";  // Clear the buffer area
  }

  // Process the data received through the hardware serial port
  if (Serial.available()) {
    String data = Serial.readString();  // Read the entire string at once
    mySerial.print("Received via hardware serial: ");
    mySerial.println(data);
  }
}
```

</TabItem>
</Tabs>

##### Resultado

- Diagrama de cableado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_1.png" style={{width:600, height:'auto'}}/></div>

- Después de cargar el programa, conecta la placa a cualquier herramienta serie, configura la velocidad en baudios correspondiente y, a continuación, se podrá establecer la comunicación bidireccional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.png" style={{width:600, height:'auto'}}/></div>

### I2C

El chip XIAO ESP32-C5 integra una interfaz I2C, que se puede utilizar para conectar dispositivos I2C externos como memorias flash, pantallas y sensores. A continuación, demostraremos el uso de I2C con la Seeed Studio Expansion Board Base for XIAO como ejemplo.

#### Preparación de hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Seeed Studio Expansion Board Base for XIAO</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### Software

Los siguientes ejemplos de código se basan respectivamente en Arduino IDE y PlatformIO, y logran el mismo efecto de visualización. Puedes seleccionar y reutilizar el código adecuado según tu escenario real de desarrollo.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instala la biblioteca U8g2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de referencia

```cpp
#include <U8x8lib.h>
#include <Wire.h>

#define SCL D5
#define SDA D4

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(0);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  u8x8.setCursor(2, 10);
  u8x8.print("Hello World!");
  u8x8.setCursor(1, 28);
  u8x8.print("XIAO ESP32-C5!");
}
```

</TabItem>

<TabItem value='PlatformIO'>

- Asegúrate de que el contenido de `platform.ini` sea el siguiente.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = 
	olikraus/U8g2@^2.36.15
```

- Código de referencia

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

#define SCL D5
#define SDA D4

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(0); 
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  u8x8.setCursor(2, 10);
  u8x8.print("Hello World!");
  u8x8.setCursor(1, 28);
  u8x8.print("XIAO ESP32-C5!");
}
```

</TabItem>
</Tabs>

#### Resultado

- Después de cargar el programa, el texto `Hello World!` y `XIAO ESP32-C5!` se mostrará en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.jpg" style={{width:600, height:'auto'}}/></div>

### SPI

El chip XIAO ESP32-C5 integra una interfaz SPI, que se puede utilizar para conectar dispositivos SPI externos como memorias flash, pantallas y sensores. Este ejemplo demuestra la funcionalidad de SPI utilizando una pantalla SPI.

#### Preparación de hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
</tr>
<tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:250, height:'auto'}}/></div>
   </td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/10402050_main-02-min.png" style={{width:250, height:'auto'}}/></div></td>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### Software

Los siguientes fragmentos de código se basan respectivamente en Arduino IDE y PlatformIO, y logran el mismo efecto de visualización. Puedes seleccionar y reutilizar el código adecuado según tus necesidades reales de desarrollo.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instala la biblioteca U8g2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de referencia

```cpp
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, 
  /* cs=*/    D0, 
  /* dc=*/    D1, 
  /* reset=*/ D2);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  const char* msg = "Hello XIAO ESP32-C5";

  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);

    int16_t w = u8g2.getStrWidth(msg);
    int16_t x = (128 - w) / 2;

    int16_t ascent  = u8g2.getAscent();   
    int16_t descent = u8g2.getDescent();  
    int16_t h = ascent - descent;    
    int16_t y = (128 - h) / 2 + ascent; 

    u8g2.drawStr(x, y, msg);
  } while (u8g2.nextPage());
}
```

</TabItem>

<TabItem value='PlatformIO'>

- Asegúrate de que el contenido de `platform.ini` sea el siguiente.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps =
  olikraus/U8g2@^2.36.15
```

- Código de referencia

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, 
  /* cs=*/    D0, 
  /* dc=*/    D1, 
  /* reset=*/ D2);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  const char* msg = "Hello XIAO ESP32-C5";

  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);

    int16_t w = u8g2.getStrWidth(msg);
    int16_t x = (128 - w) / 2;

    int16_t ascent  = u8g2.getAscent();   
    int16_t descent = u8g2.getDescent();  
    int16_t h = ascent - descent;    
    int16_t y = (128 - h) / 2 + ascent; 

    u8g2.drawStr(x, y, msg);
  } while (u8g2.nextPage());
}
```

</TabItem>
</Tabs>

#### Resultado

- Diagrama de cableado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_2.png" style={{width:600, height:'auto'}}/></div>

- Después de cargar el código, el texto Hello XIAO ESP32-C5 se mostrará en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_5.jpg" style={{width:600, height:'auto'}}/></div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
