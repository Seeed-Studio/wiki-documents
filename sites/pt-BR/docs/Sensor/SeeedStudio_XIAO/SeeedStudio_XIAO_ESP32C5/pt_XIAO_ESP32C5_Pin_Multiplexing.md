---
title: Multiplexação de pinos com Seeed Studio XIAO ESP32-C5
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
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_pin_multiplexing/
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

O Seeed Studio XIAO ESP32-C5 é uma placa de desenvolvimento poderosa e versátil que possui uma variedade de interfaces periféricas e pinos GPIO. Esses pinos podem ser usados para diversos propósitos, como se comunicar com outros dispositivos, ler sensores analógicos, controlar LEDs e muito mais. Neste tutorial, vamos orientá-lo sobre como usar os pinos multiplexados do XIAO ESP32-C5.<br/>
Em resumo, o XIAO ESP32-C5 possui 1×I2C, 1×SPI, 2×UART, até 11×GPIO (com capacidade de PWM), 5×canais ADC e uma interface de almofadas de conexão JTAG (pads no lado inverso).

## Introdução

Em seguida, fornecerei tutoriais de exemplo e código, respectivamente, com base em duas plataformas: **PlatformIO** e **Arduino IDE**, e você pode escolher a plataforma de desenvolvimento de acordo com suas circunstâncias específicas.<br/>
Se você ainda não usou o **Arduino IDE**, consulte [Getting Started with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_getting_started/).<br/>
Se você ainda não usou o **PlatfromIO**, consulte [Platform IO with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_with_platformio/)。

### Visão geral dos pinos

Antes de começarmos, vamos revisar todos os pinos que o XIAO ESP32-C5 possui e suas funções com o seguinte esquema.

### Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Digital

Todos os 11 pinos IO (D0–D10) do XIAO ESP32-C5 suportam funções digitais. Abaixo está um exemplo prático demonstrando como usar funções digitais para controlar o estado ligado/desligado de uma luz, e você pode multiplexar esses pinos de acordo com suas necessidades específicas.

#### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Os exemplos de código a seguir são baseados, respectivamente, no Arduino IDE e no PlatformIO, e alcançam o mesmo efeito de controle. Você pode selecionar e reutilizar o código apropriado de acordo com sua situação real de desenvolvimento.

<Tabs>
<TabItem value=' Arduino IDE'>

- Código de referência

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

- Certifique-se de que o conteúdo de `platform.ini` seja o seguinte.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referência

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

- Após enviar o código, pressione o botão — cada pressão alterna o LED entre ligado e desligado, simulando o efeito real de controlar uma luz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_1.gif" style={{width:400, height:'auto'}}/></div>

:::tip
Se o efeito acima não for alcançado depois que você pressionar o botão, talvez seja necessário pressionar primeiro o botão RESET onboard para “acordar” a placa.
:::

### PWM

Todos os pinos D0–D11 do XIAO ESP32-C5 suportam funcionalidade PWM. O PWM pode ser usado para acionar dispositivos como servos, motores e luzes LED. A seguir está um exemplo de LEDs respirantes controlados por PWM para demonstrar a funcionalidade de PWM.

#### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Os exemplos de código a seguir são baseados, respectivamente, no Arduino IDE e no PlatformIO, e alcançam o mesmo efeito de controle. Você pode selecionar e reutilizar o código apropriado de acordo com sua situação real de desenvolvimento.

<Tabs>
<TabItem value=' Arduino IDE'>

- Código de referência

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

- Certifique-se de que o conteúdo de `platform.ini` seja o seguinte.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referência

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

Após enviar o código, o Grove - Variable Color LED exibirá um efeito de luz respiratória.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_2.gif" style={{width:400, height:'auto'}}/></div>

### Analógico

Para o XIAO ESP32-C5, os pinos A0–A5 suportam funcionalidade de leitura analógica. A leitura de ADC pode ser aplicada a cenários como medição de tensão de bateria e leitura de encoders rotativos. Em seguida, demonstraremos a função de leitura de ADC tomando como exemplo a medição de tensão do Grove-Rotary Angle Sensor.

#### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Software

Os seguintes exemplos de código são baseados em Arduino IDE e PlatformIO, respectivamente, e alcançam o mesmo efeito de controle. Você pode selecionar e reutilizar o código apropriado de acordo com a sua situação real de desenvolvimento.

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

- Certifique-se de que o conteúdo de `platform.ini` seja o seguinte.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referência

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

Abra o monitor serial, e ele imprimirá o valor bruto de ADC (analogValue), o valor em milivolts (analogVolts) e o valor de tensão (voltage) lidos do Grove-Rotary Angle Sensor. Mudanças óbvias ocorrerão à medida que você girar o Grove-Rotary Angle Sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_3.png" style={{width:600, height:'auto'}}/></div>

### Comunicação serial

O XIAO ESP32-C5 possui duas interfaces de comunicação serial por hardware: **USB Serial** e **UART1 Serial**, que você pode utilizar para comunicação serial. Além disso, você pode usar outros pinos de uso geral para simular interfaces de comunicação serial.

#### USB / UART1 Serial

Para **USB Serial**, conecte a placa diretamente a um computador via USB-C para monitoramento — esta é a interface usada nos exemplos anteriores. Para **UART1 Serial**, use o **XIAO Debug Mate** da Seeed Studio para monitoramento.

##### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### Software

Os seguintes exemplos de código são baseados em Arduino IDE e PlatformIO, respectivamente, e alcançam o mesmo efeito de controle. Você pode selecionar e reutilizar o código apropriado de acordo com a sua situação real de desenvolvimento.<br/>
Os pinos correspondentes para Serial1 são `RX_PIN - D7` e `TX_PIN - D6`.

<Tabs>
<TabItem value=' Arduino IDE'>

- Código de referência

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

- Certifique-se de que o conteúdo de platform.ini seja o seguinte.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
```

- Código de referência

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

Após enviar o programa, você pode monitorá-lo por meio da função UART do **XIAO Debug Mate** da Seeed Studio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_debug.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Se você ainda não usou o Seeed Studio XIAO Debug Mate, pode visitar [Getting Started with XIAO Debug Mate](https://wiki.seeedstudio.com/pt-br/getting_started_with_xiao_debug_mate/).
:::

#### Serial por software

Esta seção demonstrará a funcionalidade da comunicação serial por software, simulando pinos de comunicação serial usando pinos de uso geral.

##### Preparação de hardware

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO ESP32-C5</th>
<th>Módulo&Adaptador CH340G USB para Serial (TTL)</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="hhttps://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

##### Software

Os exemplos de código a seguir são baseados respectivamente no Arduino IDE e no PlatformIO, e alcançam o mesmo efeito de controle. Você pode selecionar e reutilizar o código apropriado de acordo com a sua situação real de desenvolvimento.<br/>
Os pinos correspondentes simulados por software são `RX_PIN - D2` e `TX_PIN - D1`.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instale a biblioteca de dependência `EspSoftwareSerial`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_1.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de referência

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

- Certifique-se de que o conteúdo de `platform.ini` seja o seguinte.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = plerup/EspSoftwareSerial@^8.2.0
```

- Código de referência

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

- Diagrama de fiação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_1.png" style={{width:600, height:'auto'}}/></div>

- Após enviar o programa, conecte a placa a qualquer ferramenta serial, configure a taxa de baud correspondente e então a comunicação bidirecional poderá ser estabelecida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.png" style={{width:600, height:'auto'}}/></div>

### I2C

O chip XIAO ESP32-C5 integra uma interface I2C, que pode ser usada para conectar dispositivos I2C externos, como memória flash, displays e sensores. Em seguida, demonstraremos o uso de I2C com a Seeed Studio Expansion Board Base for XIAO como exemplo.

#### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### Software

Os exemplos de código a seguir são baseados respectivamente no Arduino IDE e no PlatformIO, e alcançam o mesmo efeito de exibição. Você pode selecionar e reutilizar o código apropriado de acordo com o seu cenário real de desenvolvimento.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instale a biblioteca U8g2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de referência

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

- Certifique-se de que o conteúdo de `platform.ini` seja o seguinte.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps = 
	olikraus/U8g2@^2.36.15
```

- Código de referência

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

- Após enviar o programa, o texto `Hello World!` e `XIAO ESP32-C5!` será exibido na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_4.jpg" style={{width:600, height:'auto'}}/></div>

### SPI

O chip XIAO ESP32-C5 integra uma interface SPI, que pode ser usada para conectar dispositivos SPI externos, como memória flash, displays e sensores. Este exemplo demonstra a funcionalidade do SPI usando uma tela SPI.

#### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div>
   </td>
</tr>
</table>
</div>

#### Software

Os trechos de código a seguir são baseados, respectivamente, no Arduino IDE e no PlatformIO, e alcançam o mesmo efeito de exibição. Você pode selecionar e reutilizar o código apropriado de acordo com suas necessidades reais de desenvolvimento.

<Tabs>
<TabItem value=' Arduino IDE'>

- Instale a biblioteca U8g2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_library_2.png" style={{width:400, height:'auto'}}/></div><br/>

- Código de referência

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

- Certifique-se de que o conteúdo de `platform.ini` seja o seguinte.

```ini
[env:seeed-xiao-esp32-c5]
platform = Seeed Studio
board = seeed-xiao-esp32-c5
framework = arduino
lib_deps =
  olikraus/U8g2@^2.36.15
```

- Código de referência

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

- Diagrama de fiação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_wire_2.png" style={{width:600, height:'auto'}}/></div>

- Após enviar o código, o texto Hello XIAO ESP32-C5 será exibido na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pin_mux_5.jpg" style={{width:600, height:'auto'}}/></div>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
