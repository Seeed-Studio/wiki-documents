---
title: Getting Started with Seeed Studio XIAO ESP32-C5
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_getting_started
last_update:
  date: 11/26/2025
  author: Zeller
  sidebar_position: 0
---

## Introduction

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Specification

<table>
    <thead>
        <tr>
            <th>Item</th>
            <th>Seeed Studio XIAO ESP32-C5</th>
            <th>Seeed Studio XIAO ESP32-S3</th>
            <th>Seeed Studio XIAO ESP32-C3</th>
            <th>Seeed Studio XIAO ESP32-C6</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processor</th>
            <td>ESP32-C5 RISC-V 32-bit @240 MHz</td>
            <td>ESP32R8N8 32-bit Xtensa LX7 dual-core @240 MHz</td>
            <td>ESP32-C3 32-bit RISC-V @160 MHz</td>
            <td>ESP32-C6 32-bit RISC-V @160 MHz</td>
        </tr>
        <tr>
            <th>Wireless Connectivity</th>
            <td>**2.4 GHz & 5 GHz dual-band Wi-Fi 6** and Bluetooth 5 (LE)</td>
            <td>2.4 GHz Wi-Fi and Bluetooth 5 (LE)</td>
            <td>2.4 GHz Wi-Fi and Bluetooth 5 (LE)</td>
            <td> 2.4 GHz Wi-Fi 6, Bluetooth 5 (LE)</td>
        </tr>
        <tr>
            <th>Memory</th>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>400 KB SRAM, 4 MB Flash</td>
            <td>512KB SRAM , 4MB Flash</td>
        </tr>
        <tr>
            <th>Interfaces</th>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
        </tr>
        <tr>
            <th>PWM/Analog Pins</th>
            <td>11 / 5</td>
            <td>11 / 9</td>
            <td>11 / 4</td>
            <td>11 / 7</td>
        </tr>
        <tr>
            <th>Onboard Buttons</th>
            <td>Reset / Boot Button</td>
            <td>Reset / Boot Button</td>
            <td>Reset / Boot Button</td>
            <td>Reset button / Boot button</td>
        </tr>
        <tr>
            <th>Onboard LEDs</th>
            <td>Charge / USER LED</td>
            <td>Charge / USER LED</td>
            <td>Charge LED</td>
            <td>Charge / USER LED</td>
        </tr>
        <tr>
            <th>Battery Charge Chip</th>
            <td>SGM40567</td>
            <td>SGM40567</td>
            <td>ETA4054S2F</td>
            <td>SGM40567</td>
        </tr>
    </tbody>
</table>

### Features

- **Powerful CPU:** ESP32-C5, 32­bit RISC­-V single­core processor that operates at up to 240 MHz
- **Complete Wi­Fi subsystem:** Dual-band Wi-Fi 6 subsystem (2.4 GHz and 5 GHz) compliant with IEEE 802.11 a/b/g/n/ac/ax, supporting Station, SoftAP, concurrent SoftAP+Station operation, and promiscuous (monitor) mode.
- **Bluetooth LE subsystem:** Supports features of Bluetooth 5 and Bluetooth mesh
- **Better RF performance:** External RF antenna included.
- **Battery charging chip:** Supports lithium battery charge and discharge management.
- **Rich on-chip resources:** 384 KB on-chip SRAM, 320 KB of ROM
- **Ultra small size:** As small as a thumb(21x17.8mm) XIAO series classic form-factor for wearable devices and small projects
- **Reliable security features**: Cryptographic hardware accelerators supporting AES-128/256, SHA family hashing, HMAC, a dedicated digital signature peripheral, and Secure Boot (V2).
- **Rich interfaces**: 1×I2C, 1×SPI, 2×UART, up to 11×GPIO (PWM-capable), 5×ADC channels, and a JTAG bonding-pad interface.
- Single-sided components, surface mounting design

## Hardware overview

<table align="center">
 <tr>
     <th>XIAO ESP32-C5 indication diagram</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/front.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-C5 Pin List</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/PinList_1.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

## Getting Started

To enable you to get started with the XIAO ESP32-C5 faster, please read the hardware and software preparation below to prepare the XIAO.

### Hardware

You need to prepare the following:

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-5884.html)
- 1 x Computer
- 1 x USB Type-C cable

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Software

The recommended programming tool for the XIAO ESP32-C5 is the Arduino IDE, so you need to complete the Arduino installation as part of the software preparation.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

- **Step 1.** Download and Install the stable version of Arduino IDE according to your operating system.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Step 2.** Launch the Arduino application.
- **Step 3.**  Open BOARDS MANAGER -> Search **esp32** -> Install version 3.3.4 or a higher version

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### Upload Progaram

Let's take a lighting program as an example below

**Step 1.** Select **XIAO_ESP32C5** and PORT. If you don't know the PORT, you can reinsert and remove the XIAO_ESP3-2C5 to check.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** Paste Code in your Skecth

**LED_BUILTIN** corresponds to the **L LED** on the development board.

```cpp
void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**Step 3.** Click and Upload

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_1.png" style={{width:800, height:'auto'}}/></div><br/>

Effect demonstration:

After you upload the program, you will see the L indicator light flashing at intervals of 1 second, and at the same time, the serial monitor will print LED ON and LED OFF.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## Deep sleep mode

The XIAO ESP32-C5 features deep sleep and wake-up functions. This example utilizes a high-level trigger on pin **D0** to wake the device from deep sleep.<br/>
It is important to note that this is a configurable option, as the hardware supports both high-level and low-level triggers to accommodate different circuit designs.

```cpp
#define WAKEUP_PIN D0 // LP_GPIO1

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    case ESP_SLEEP_WAKEUP_GPIO : Serial.println("Wakeup caused by GPIO"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000);

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();

  pinMode(WAKEUP_PIN, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);

  uint64_t mask = 1ULL << WAKEUP_PIN;
  esp_deep_sleep_enable_gpio_wakeup(mask, ESP_GPIO_WAKEUP_GPIO_HIGH);

  digitalWrite(LED_BUILTIN, LOW);
  delay(100);
  digitalWrite(LED_BUILTIN, HIGH);

  delay(2000);  //Delay time depends on the serial port / Give the PC time to stabilize
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
}

void loop(){}
```

If you are quick enough to turn on the serial monitor before the XIAO goes into deep sleep, then you can see the message output as shown below. This means that the XIAO is now **asleep**. Then you can also view and activate it by pressing the button.You can also observe the on-off state of the **L LED** to check if the device has been awakened. Once it is awakened, it will exhibit a flashing effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
After entering deep sleep mode, the XIAO's port will disappear and you'll need to wake it up to see its port number again!
:::

:::caution
Currently the XIAO ESP32-C5 only supports GPIO wake-up, and the only pins that support wake-up are D0~D1. This program may not work on other pins.
:::

## Battery Usage

The XIAO ESP32-C5 is capable of using a 3.7V lithium battery as the power supply input. You can refer to the following diagram for the wiring method.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
Please be careful not to short-circuit the positive and negative terminals and burn the battery and equipment when soldering.
:::

**Instructions on the use of batteries:**

1. Please use qualified batteries that meet the specifications.
2. XIAO can be connected to your computer device via data cable while using the battery, rest assured that XIAO has a built-in circuit protection chip, which is safe.
3. When XIAO ESP32-C5 is powered by a battery, the **C LED** will light up. You can use this as a basis for determining whether charging management has been carried out.

### Check the battery voltage

The XIAO ESP32-C5 is equipped with the SGM40567 battery charging chip and the TPS22916CYFPR battery voltage acquisition chip. You can enable the **BAT_VOLT_PIN_EN** to activate the battery voltage acquisition function and read the battery voltage through the **BAT_VOLT_PIN**.

:::tip
On the XIAO ESP32C5, the pin corresponding to BAT_VOLT_PIN is GPIO6, and the pin corresponding to BAT_VOLT_PIN_EN is GPIO26.
:::

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(BAT_VOLT_PIN, INPUT);         // Configure A0 as ADC input
  pinMode(BAT_VOLT_PIN_EN , OUTPUT);
  digitalWrite(BAT_VOLT_PIN_EN , LOW);
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(BAT_VOLT_PIN ); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

- **`analogReadMilliVolts(BAT_Voltage_Read)`**

  - This function is used to read the current analog voltage from the `BAT_VOLT_PIN` pin and return a calibrated voltage value in millivolts (mV).
  - Unlike the conventional `analogRead()`, which only provides a raw ADC value, `analogReadMilliVolts()` automatically applies the factory calibration parameters embedded in the chip. This results in higher accuracy, improved linearity in voltage measurement, and eliminates the need for manual ADC-to-voltage conversion.
  - During the voltage sampling process, a **16-times repeated sampling** is performed through a `for` loop, and the results are accumulated. The purpose of multiple sampling is to suppress transient noise and discrete errors, thereby improving measurement stability. Finally, the accumulated value is divided by the number of samples (16) to obtain a smoother and more reliable averaged voltage value.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
According to the datasheet, the effective measurement range of the ESP32-C5 covers 0~3300 mV. Therefore, the built-in battery voltage acquisition circuit of the XIAO ESP32-C5 is designed with two 100K resistors for voltage division, enabling accurate reading of values.
:::

## Resource

- **[PDF]** [ESP32-C5 datasheet](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf)

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32-C5 KiCAD Libraries](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5_V1.0_SCH&PCB_KiCAD.zip)

- **[PDF]** [Seeed Studio XIAO ESP32-C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_ESP32C5_SCH_251202.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32-C5 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)

- 🔗**[Kicad]** [Seeed Studio XIAO ESP32-C5 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[STEP]** [Seeed Studio XIAO ESP32-C5 Step file](https://grabcad.com/library/seeed-studio-xiao-esp32-c5-1) -->

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
