---
description: This article is developed based on the Arduino core for nRF54L15 written by developer lolren, aiming to provide reference tutorials for users of the XIAO nRF54L15 to develop on the Arduino IDE.
title: Arduino for Seeed Studio XIAO nRF54L15
keywords:
  - nRF54L15
  - xiao
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.webp
slug: /xiao_nrf54l15_sense_arduino
last_update:
  date: 4/22/2026
  author: Zeller
createdAt: '2025-04-22'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/xiao_nrf54l15_sense_arduino/
---

This article is developed based on the XIAO nRF54L15 Sense with the Arduino platform.

## Acknowledgements

Special thanks to the developer **[lolren](https://github.com/lolren)** for providing Arduino adaptation support for the nRF54L15 chip. This enables the development and practical application of the XIAO nRF54L15 on the Arduino ecosystem. Gratitude is also extended for his continuous efforts and contributions to the related open-source ecological construction.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/lolren/nrf54-arduino-core" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> lolren's repository</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Getting Started

### Hardware Preparation

Before starting, prepare either the XIAO nRF54L15 or XIAO nRF54L15 Sense hardware.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

- **Step 1.** Download and Install the stable version of Arduino IDE according to your operating system.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Step 2.** Add Boards Manager URL

  Open File → Preferences

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_1.png" style={{width:400, height:'auto'}}/></div><br/>

  Add the URL for XIAO nRF54L15 support in the Additional Boards Manager URLs field.

```js
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

- **Step 3.** Select **XIAO nRF54L15 / Sense** and serial port

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_3.png" style={{width:800, height:'auto'}}/></div><br/>

- **Step 4.** Upload the program

```c
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_4.png" style={{width:800, height:'auto'}}/></div><br/>

Result:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

## Digital

Digital pins are MCU interfaces for reading and writing high/low logic levels, which can acquire external data and control peripheral devices. This section illustrates the functions of digital pins by implementing LED on-off control and PWM breathing light effect.

### Hardware Preparation

You need to prepare the XIAO nRF54L15 Sense and Grove devices.

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Grove Base for XIAO</th>
         <th>Grove – Chainable RGB LED</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2017-07bazaar501790_10402004845.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="Grove – Chainable RGB LED V2.0" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### Software

In the lolren repository, pins D0 to D10 of the XIAO nRF54L15 are redefined as PIN_D0 to PIN_D10.

```c
void setup() {
  pinMode(PIN_D0, OUTPUT);
}

void loop() {
  digitalWrite(PIN_D0, LOW);
  delay(500);
  digitalWrite(PIN_D0, HIGH);
  delay(500);

  for (int i = 0; i <= 255; i++) {
      analogWrite(PIN_D0, i);  // The duty cycle increases gradually.
      delay(5);
    }

  for (int i = 255; i >= 0; i--) {
        analogWrite(PIN_D0, i);  // The duty cycle decreases gradually.
        delay(5);
    }
}
```

### Result

Connect the Grove – Chainable RGB LED to Pin 0 of the Seeed Studio Grove Base for XIAO. The Grove – Chainable RGB LED will present flashing and gradual dimming breathing effects.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_2.gif" style={{width:800, height:'auto'}}/></div><br/>

## UART

UART is an asynchronous half-duplex communication protocol, commonly used for device debugging, log output and data transmission. The XIAO nRF54L15 provides one set of UART pins. This section demonstrates the usage of UART through serial data printing.

### Hardware Preparation

You need to prepare the XIAO nRF54L15 and CH340 device.

<table align="center">
 <tr>
        <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>CH340G USB to Serial (TTL) Module&Adapter</th>
 </tr>
 <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-317990026-ch340g-usb-to-serial-_ttl_-module_adapter_1.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

On the XIAO nRF54L15, D6 and D7 correspond to the TX and RX pins respectively. In the pin redefinition file from lolren, D6 and D7 are defined as **PIN_SERIAL1_RX** and **PIN_SERIAL1_TX**. The available serial ports for use are **Serial1** or **Serial2**.

:::tip
If you are not familiar with the pin distribution of the XIAO nRF54L15, click [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#hardware-overview) to check.
:::

:::caution
Do not use `PIN_SERIAL1_RX` and `PIN_SERIAL1_TX` for `Serial` (USB serial port).
This will disrupt the default download and debugging channels, and may result in program flashing failure (SWD/CDC malfunction).
:::

```c
#define RX_PIN PIN_SERIAL1_RX
#define TX_PIN PIN_SERIAL1_TX
#define BAUD 115200

void setup() {
    // Set RX and TX pins
    Serial1.setPins(RX_PIN, TX_PIN);
    
    // Initialize baud rate and communication configuration
    Serial1.begin(BAUD, SERIAL_8N1); 
}
 
void loop() {
    Serial1.print("Hello XIAO nRF54L15!\n");
    delay(1000);
}
```

### Result

:::tip
<br/>
Wiring
<table align="center">
 <tr>
     <th>XIAO nRF54L15</th>
     <th>CH340G USB to Serial (TTL) Module&Adapter</th>
 </tr>
  <tr>
     <th>RX</th>
     <th>TX</th>
 </tr>
  <tr>
     <th>TX</th>
     <th>RX</th>
 </tr>
  <tr>
     <th>GND</th>
     <th>GND</th>
 </tr>
   <tr>
     <th>VBUS</th>
     <th>5V</th>
 </tr>
</table>
:::

Open any serial monitor tool, set the baud rate to 115200, and you can observe the output data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_5.png" style={{width:800, height:'auto'}}/></div><br/>

## Analog

Analog pins are used to read continuous voltage signals through the ADC. They can be connected to various sensors such as potentiometers, photoresistors, thermistors for temperature detection, analog grayscale sensors and infrared sensors. This section demonstrates the functions of analog pins by reading the adjustment value of a potentiometer knob.

### Hardware Preparation

You need to prepare the XIAO nRF54L15 Sense and Grove devices.

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

There are four groups of analog pins on the XIAO nRF54L15, namely A0 to A3. In the pin redefinition provided by lolren, these pins are defined as PIN_A0 to PIN_A3.

:::tip
If you are not familiar with the pin distribution of the XIAO nRF54L15, click [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#hardware-overview) to check.
:::

```c
const int analogPin = PIN_A0;

void setup() {
  Serial.begin(115200);
  analogReadResolution(12);
}

void loop() {
  int analogValue = analogRead(analogPin);

  // Assume reference voltage is 3.3V
  int voltage_mv = analogValue * 3300 / 4095;

  Serial.printf("ADC value = %d\n", analogValue);
  Serial.printf("Voltage = %d mV\n", voltage_mv);

  delay(1000);
}
```

### Result

Connect the Grove-Rotary Angle Sensor to the Seeed Studio Grove Base for XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_5.jpg" style={{width:800, height:'auto'}}/></div><br/>

Rotate the knob, and the Arduino Serial Monitor will print the ADC reading value and the converted analog voltage.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_3.png" style={{width:800, height:'auto'}}/></div><br/>

## I2C

I2C is a synchronous serial communication protocol that enables multi-device communication between master and slave devices via the SCL clock line and SDA data line. The XIAO nRF54L15 / Sense provides two sets of I2C interfaces. This section demonstrates the functions of I2C by controlling the OLED display on the Expansion Board Base for XIAO.

### Hardware Preparation

You need to prepare the XIAO nRF54L15 Sense and devices with I2C interfaces.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

On the XIAO nRF54L15, D4 and D5 serve as the SCL and SDA pins respectively.
In the lolren framework, pin D4 is redefined as **PIN_WIRE_SCL**, and pin D5 is redefined as **PIN_WIRE_SDA**.

:::tip
If you are not familiar with the pin distribution of the XIAO nRF54L15, click [XIAO nRF54L15 Pin List](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#hardware-overview) to check.
:::

```c
#include <U8x8lib.h>
#include <Wire.h>

#define SCL PIN_WIRE_SCL
#define SDA PIN_WIRE_SDA

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
  u8x8.print("XIAO nRF54L15!");
}
```

### Result

After uploading the program, the phrases "Hello World!" and "XIAO nRF54L15!" will be displayed on the Expansion Board Base for XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_4.jpg" style={{width:800, height:'auto'}}/></div><br/>

## SPI

SPI is a synchronous serial and full-duplex communication protocol. It generally uses four wires — SCK clock, MOSI, MISO and CS — to achieve high-speed data transmission between master and slave devices. Compared with I2C, SPI features a higher transmission rate, lower latency and simpler and more straightforward communication. However, it requires more pins, and each slave device usually occupies an independent chip select line. It is commonly used to connect high-speed peripherals such as Flash memory, SD cards, LCD/OLED displays, ADC/DAC modules and high-speed sensors. This section demonstrates the usage of SPI by connecting an e-paper display.

### Hardware Preparation

You need to prepare a XIAO nRF54L15 and a device that supports SPI communication.

 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
   <th>2.9" Monochrome eInk</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-104990853-2.9-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

### Software

- Install the GxEPD2 library

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/arduino_6.png" style={{width:400, height:'auto'}}/></div><br/>

Modify and macro define the SPI pins according to Lolren's pin redefinition file.

```c
#include <Arduino.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <Fonts/FreeMonoBold9pt7b.h>
#include <Fonts/FreeMonoBold12pt7b.h>

// -------- Pin Definitions (from pins_arduino.h) --------
// PIN_D0=RST, PIN_D1=CS, PIN_D3=DC, PIN_D5=BUSY
// SPI: SCK=PIN_D8, MISO=PIN_D9, MOSI=PIN_D10 (macros are already defined)
#define EPD_RST  PIN_D0   // 0
#define EPD_CS   PIN_D1   // 1
#define EPD_DC   PIN_D3   // 3
#define EPD_BUSY PIN_D2   // 5

// -------- 029BN-T94-D2 Driver --------
GxEPD2_BW<GxEPD2_290_T94_V2, GxEPD2_290_T94_V2::HEIGHT> display(
  GxEPD2_290_T94_V2(EPD_CS, EPD_DC, EPD_RST, EPD_BUSY)
);

const char* LINE1 = "Hello XIAO nRF54L15";

void setup() {
  Serial.begin(115200);
  delay(2000);
  Serial.println("=== EPaper Start ===");

  // Close serial port to avoid TX(D1) interfering with CS(D1)
  delay(100);
  Serial.end();

  // Directly specify using macros, fully consistent with pins_arduino.h
  SPI.setPins(PIN_SPI_SCK, PIN_SPI_MISO, PIN_SPI_MOSI, -1);
  SPI.begin();

  // Pass 0 to disable GxEPD2 internal serial debug output
  display.init(0);
  display.setRotation(1);  // Landscape 296×128
  display.setTextColor(GxEPD_BLACK);
  display.setFullWindow();

  display.firstPage();
  do {
    display.fillScreen(GxEPD_WHITE);

    // ---- LINE1: Large font, upper half ----
    display.setFont(&FreeMonoBold12pt7b);
    int16_t tbx, tby;
    uint16_t tbw, tbh;
    display.getTextBounds(LINE1, 0, 0, &tbx, &tby, &tbw, &tbh);
    uint16_t x1 = (display.width()  - tbw) / 2 - tbx;
    uint16_t y1 = display.height() / 2 - 4;
    display.setCursor(x1, y1);
    display.print(LINE1);

  } while (display.nextPage());

  display.hibernate();

  // Reopen serial port for confirmation after screen refresh
  Serial.begin(115200);
  delay(100);
  Serial.println("=== Done ===");
}

void loop() {
  delay(1000000);
}
```

### Result

After uploading the program, `Hello XIAO nRF54L15` will be displayed on the e-paper screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/arduino/result_6.jpg" style={{width:800, height:'auto'}}/></div>

## FAQ

- Q1: When uploading the program, a prompt shows that there is no path for py.

- A: C:\Users\yourname\AppData\Local\Arduino15\packages\nrf54l15clean\hardware\nrf54l15clean\0.6.27\platform.txt.
  - Change `tools.python3.cmd.windows=py` to `tools.python3.cmd.windows=python`.
  - Change `tools.python3.args.windows=-3` to `tools.python3.args.windows=`.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
