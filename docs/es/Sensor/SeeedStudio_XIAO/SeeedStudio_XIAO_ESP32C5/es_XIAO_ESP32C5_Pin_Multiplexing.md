---
title: Multiplexación de Pines con Seeed Studio XIAO ESP32-C5
description: |
keywords:
  - xiao
  - esp32c5
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /es/xiao_esp32c5_pin_multiplexing
last_update:
  date: 12/30/2025
  author: Zeller
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

El Seeed Studio XIAO ESP32-C5 es una placa de desarrollo potente y versátil que cuenta con una variedad de interfaces periféricas y pines GPIO. Estos pines pueden usarse para diversos propósitos, como comunicarse con otros dispositivos, leer sensores analógicos, controlar LEDs y más. En este tutorial, te guiaremos sobre cómo usar los pines multiplexados del XIAO ESP32-C5.<br/>
En resumen, el XIAO ESP32-C5 cuenta con 1×I2C, 1×SPI, 2×UART, hasta 11×GPIO (capaces de PWM), 5×canales ADC y una interfaz de pad de conexión JTAG.

## Introducción

A continuación, proporcionaré tutoriales de ejemplo y código respectivamente basados en las dos plataformas: **PlatformIO** y **Arduino IDE**, y puedes elegir la plataforma de desarrollo según tus circunstancias específicas.<br/>
Si no has usado **Arduino IDE** antes, por favor consulta [Introducción con Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/es/xiao_esp32c5_getting_started/).<br/>
Si no has usado **PlatfromIO** antes, por favor consulta [Platform IO con Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/es/xiao_esp32c5_with_platformio/)。

### Resumen de Pines

Antes de comenzar, revisemos todos los pines que tiene el XIAO ESP32-C5 y sus funciones con el siguiente esquema.

<table align="center">
 <tr>
     <th>Diagrama de indicación XIAO ESP32-C5</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/front.png" style={{width:600, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pines XIAO ESP32-C5</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/PinList_1.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

### Digital

Los 11 pines IO (D0–D10) del XIAO ESP32-C5 soportan funciones digitales. A continuación se muestra un ejemplo práctico que demuestra cómo usar funciones digitales para controlar el estado de encendido/apagado de una luz, y puedes multiplexar estos pines según tus requisitos específicos.

#### Preparación de Hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base para XIAO </th>
        <th>Grove - LED de Color Variable</th>
        <th>Grove - Botón</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Los siguientes ejemplos de código están basados en Arduino IDE y PlatformIO respectivamente, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código apropiado según tu situación de desarrollo actual.

<Tabs>
<TabItem value='Arduino IDE'>

- Código de Referencia

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

- Código de Referencia

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

- Después de cargar el código, presiona el botón—cada presión alterna el LED entre encendido y apagado, simulando el efecto de la vida real de controlar una luz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_1.gif" style={{width:400, height:'auto'}}/></div>

:::tip
Si el efecto anterior no se logra después de presionar el botón, es posible que necesites presionar primero el botón RESET de la placa para despertar la placa.
:::

### PWM

Todos los pines D0–D11 del XIAO ESP32-C5 soportan funcionalidad PWM. PWM puede usarse para controlar dispositivos como servos, motores y luces LED. A continuación se muestra un ejemplo de luces de respiración controladas por PWM para demostrar la funcionalidad de PWM.

#### Preparación de Hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base para XIAO </th>
        <th>Grove - LED de Color Variable</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Los siguientes ejemplos de código están basados en Arduino IDE y PlatformIO respectivamente, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código apropiado según tu situación de desarrollo actual.

<Tabs>
<TabItem value='Arduino IDE'>

- Código de Referencia

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

- Código de Referencia

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

Para el XIAO ESP32-C5, los pines A0–A5 soportan funcionalidad de lectura analógica. La lectura ADC puede aplicarse a escenarios como medir voltaje de batería y leer codificadores rotativos. A continuación, demostraremos la función de lectura ADC tomando como ejemplo la medición de voltaje del Grove-Rotary Angle Sensor.

#### Preparación de Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Los siguientes ejemplos de código están basados en Arduino IDE y PlatformIO respectivamente, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código apropiado según tu situación de desarrollo actual.

<Tabs>
<TabItem value='Arduino IDE'>

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

- Código de Referencia

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

Abre el monitor serie, y mostrará el valor ADC crudo (analogValue), valor en milivoltios (analogVolts), y valor de voltaje (voltage) leído del Grove-Rotary Angle Sensor. Ocurrirán cambios obvios mientras rotas el Grove-Rotary Angle Sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_3.png" style={{width:600, height:'auto'}}/></div>

### Comunicación Serie

El XIAO ESP32-C5 cuenta con dos interfaces de comunicación serie por hardware: **USB Serial** y **UART1 Serial**, que puedes utilizar para comunicación serie. Además, puedes usar otros pines de propósito general para simular interfaces de comunicación serie.

#### USB / UART1 Serial

Para **USB Serial**, conecta la placa directamente a una computadora vía USB-C para monitoreo — esta es la interfaz utilizada en los ejemplos anteriores. Para **UART1 Serial**, usa el Seeed Studio **XIAO Debug Mate** para monitoreo.

##### Preparación de Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### Software

Los siguientes ejemplos de código están basados en Arduino IDE y PlatformIO respectivamente, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código apropiado según tu situación de desarrollo actual.<br/>
Los pines correspondientes para Serial1 son `RX_PIN - D7` y `TX_PIN - D6`.

<Tabs>
<TabItem value='Arduino IDE'>

- Código de Referencia

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

- Código de Referencia

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

Después de cargar el programa, puedes monitorearlo a través de la función UART del Seeed Studio **XIAO Debug Mate**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_3.png" style={{width:600, height:'auto'}}/></div>

:::tip
Si no has usado el Seeed Studio XIAO Debug Mate antes, puedes visitar [Introducción al XIAO Debug Mate](https://wiki.seeedstudio.com/es/getting_started_with_xiao_debug_mate/).
:::

#### Serial por Software

Esta sección demostrará la funcionalidad de la comunicación serial por software simulando pines de comunicación serial usando pines de propósito general.

##### Preparación del Hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Módulo y Adaptador CH340G USB a Serial (TTL)</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### Software

Los siguientes ejemplos de código están basados en Arduino IDE y PlatformIO respectivamente, y logran el mismo efecto de control. Puedes seleccionar y reutilizar el código apropiado según tu situación de desarrollo actual.<br/>
Los pines simulados por software correspondientes son `RX_PIN - D2` y `TX_PIN - D1`.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instala la biblioteca de dependencias `EspSoftwareSerial`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_1.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de Referencia

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

- Código de Referencia

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

- Diagrama de Conexiones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_1.png" style={{width:600, height:'auto'}}/></div>

- Después de cargar el programa, conecta la placa a cualquier herramienta serial, configura la velocidad de baudios correspondiente, y luego se puede establecer comunicación bidireccional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.png" style={{width:600, height:'auto'}}/></div>

### I2C

El chip XIAO ESP32-C5 integra una interfaz I2C, que puede usarse para conectar dispositivos I2C externos como memoria flash, pantallas y sensores. A continuación, demostraremos el uso de I2C con el Seeed Studio Expansion Board Base for XIAO como ejemplo.

#### Preparación del Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### Software

Los siguientes ejemplos de código están basados en Arduino IDE y PlatformIO respectivamente, y logran el mismo efecto de visualización. Puedes seleccionar y reutilizar el código apropiado según tu escenario de desarrollo actual.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instala la biblioteca U8g2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de Referencia

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

- Código de Referencia

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

El chip XIAO ESP32-C5 integra una interfaz SPI, que puede usarse para conectar dispositivos SPI externos como memoria flash, pantallas y sensores. Este ejemplo demuestra la funcionalidad de SPI usando una pantalla SPI.

#### Preparación del Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### Software

Los siguientes fragmentos de código están basados en Arduino IDE y PlatformIO respectivamente, y logran el mismo efecto de visualización. Puedes seleccionar y reutilizar el código apropiado según tus necesidades reales de desarrollo.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instala la librería U8g2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de Referencia

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

- Código de Referencia

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

- Diagrama de Conexiones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_2.png" style={{width:600, height:'auto'}}/></div>

- Después de cargar el código, el texto Hello XIAO ESP32-C5 se mostrará en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_5.jpg" style={{width:600, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
