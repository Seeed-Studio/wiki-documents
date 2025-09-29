---
description: The Grove - ADC for Load Cell (HX711) is a 24-bit A/D converter designed specifically for the load cell.
title: Getting started Grove - ADC for Load Cell (HX711)
keywords:
- Grove
- weight sensor 
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_adc_for_load_cell_hx711 
last_update:
  date: 05/28/2024
  author: Carla
---

# Grove - ADC for Load Cell (HX711)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

The Grove - ADC for Load Cell (HX711) is a 24-bit A/D converter designed specifically for the load cell. It contains an on-chip low noise programmable amplifier with an optional gain of 32, 64 and 128. The HX711 chip integrates a regulated power supply, an on-chip clock oscillator, and other peripheral circuits, which have the advantages of high integration, fast response, and strong anti-interference.

:::note
With the Grove connector and 4-pin screw terminal, it becomes quite easy to connect the load cell and microcontroller, no soldering required. You can build your own Arduino weigh sensor system in just a few simple steps.
:::

## Specifications

<div class="table-center">
 <table align="center">
 <tr>
  <th>Item</th>
  <th>Value</th>
 </tr>
 <tr>
  <td>Battery</td>
  <td>Exclude</td>
 </tr>
 <tr>
  <td>Working voltage</td>
  <td>2.6V--5.5V</td>
 </tr>
 <tr>
  <td>Working current</td>
  <td>Less than 1.5A</td>
 </tr>
 <tr>
  <td>Detection accuracy</td>
  <td>24 bits</td>
 </tr>
 <tr>
  <td>Output date rate </td>
  <td>10SPS or 80SPS</td>
 </tr>
 <tr>
  <td>Optional gain</td>
  <td>32 for Channel B/ 64 and 128 for Channel A</td>
 </tr>
 </table>
</div>

## Application

- Electronic scales
- Price computing scales
- Electronic platform scales
- Digital scales
- Parcel post scales

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-pin.jpg" style={{width:700, height:'auto'}}/></div>

## Platforms Supported

<div class="table-center">
 <table align="center">
  <tr>
   <th>Arduino</th>
   <th>Raspberry Pi</th>
   <th> </th>
   <th> </th>
   <th> </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

In this part, we will use a **Arduino UNO R4 WiFi** as a controller,show how to use a **Grove - ADC for Load Cell (HX711)** and a **Weight Sensor (Load Cell) 0-500g** make a weight measuring module.

### Hardaware Preparation

**Step 1.** Material preparation

<div class="table-center">
 <table align="center">
 <tr>
  <th>Arduino UNO R4 WIFi</th>
  <th>Grove - ADC for Load Cell (HX711)</th>
  <th>Weight Sensor (Load Cell) 0-500g</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/1.png" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/2.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Weight-Sensor-Load-Cell-0-500g-p-525.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
 </tr>
 </table>
</div>

:::note

- Weight sensor output 0V when the load less than 150g, it not directly measure the load .So it suggests using a 200g local avoid measure blind spot.Read the analog data of 200g weight as no-load(0g),read the analog data of 700g weight as full load(500g).
- ADC for Load Cell (HX711) uses channel A by default, if you want to use other channels, it will require you to weld it yourself.

:::

And the **Grove - ADC for Load Cell (HX711)** is also suitable for our XIAO development board.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
  </div></td>
 </tr>
</table>

**Step 2.** Hardware Connection

 Connect the Grove Gesture Sensor to the IIC port of Arduino UNO R4 WiFi, connect the Arduino to PC via a USB cable, and the connection bettewn Grove - ADC for Load Cell (HX711) and Weight Sensor (Load Cell) 0-500g is show below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/9.png" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
 <table align="center">
 <tr>
     <th>Grove - ADC for Load Cell (HX711)</th>
  <th>Weight Sensor (Load Cell) 0-500</th>
 </tr>
    <tr>
     <td>E+</td>
  <td>Red</td>
    </tr>
 <tr>
  <td>E-</td>
  <td>Black</td>
 </tr>
 <tr>
  <td>INA-</td>
  <td>White</td>
 </tr>
 <tr>
  <td>INA+</td>
  <td>Green/Blue</td>
 </tr>
 </table>
</div>

:::tip
Using Grove Base Shield, you can directly connect HX711 module to Arduino UNO R4 WiFi as below.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/3.jpg" style={{width:700, height:'auto'}}/></div>
:::

### Software Preparation

 The recommended programming tool is the Arduino IDE, and you need to configure the Arduino environment for the XIAO and add the on-board package.
:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::
**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

- If you want to use **Seeeduino V4.3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino_v4.2/)** to finish adding.

- If you want to use **Arduino UNO R4 WiFi** for the later routines, please click **Tools-> Board-> Boards Manager...**, print keyword "UNO R4 WiFi" in the searching blank and install the latest version (or the version you want to use).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>

### HX711 Arduino Library Overview

#### Function

Before we get started developing a sketch, let's look at the available functions.

- `void begin(byte dout, byte pd_sck, byte gain )` —— Initialize library with data output pin, clock input pin and gain factor.Channel selection is made by passing the appropriate gain, the library default is "128" (Channel A).
 	- **Input Parameters:**
  		- **byte dout：** Passed as dout (converted to byte) HX711 circuit wiring.
  		- **byte pd_sck：** Passed as pd_sck (converted to byte) HX711 circuit wiring.
  		- **byte gain = 128：**
   			- With a gain factor of 64 or 128, channel A is selected.
   			- With a gain factor of 32, channel B is selected.

- `bool is_ready()` —— Check if HX711 is ready. From the datasheet: When output data is not ready for retrieval, digital output pin DOUT is high. Serial clock input PD_SCK should be low. When DOUT goes to low, it indicates data is ready for retrieva.

- `void wait_ready(unsigned long delay_ms = 0);` —— Wait for the chip to become ready.

- `bool wait_ready_retry(int retries = 3, unsigned long delay_ms = 0)` ——  Wait for the chip to become ready by retrying for a specified amount of attempts.

- `bool wait_ready_timeout(unsigned long timeout = 1000, unsigned long delay_ms = 0)` —— Wait for the chip to become ready until timeout.

- `void set_gain(byte gain = 128)` —— set the gain factor; takes effect only after a call to read().
 	- **Input Parameters:**
  		- **byte gain = 128：** Channel A can be set for a 128 or 64 gain; channel B has a fixed 32 gain.

- `long read()` —— waits for the chip to be ready and returns a reading

- `long read_average(byte times = 10)` —— returns an average reading.
 	- **Input Parameters:**
  		- **byte times = 10:** times = how many times to read.

- `double get_value(byte times = 1)` ——  returns (read_average() - OFFSET), that is the current value without the tare weight.
 	- **Input Parameters:**
  		- **byte times = 1:** times = how many readings to do.
- `float get_units(byte times = 1)` —— returns get_value() divided by SCALE, that is the raw value divided by a value obtained via calibration.
 	- **Input Parameters:**
  		- **byte times = 1:** times = how many readings to do.

- `void tare(byte times = 10)` —— set the OFFSET value for tare weight.
 	- **Input Parameters:**
  		- **byte times = 10:** times = how many times to read the tare value.

- `void set_scale(float scale = 1.f)` —— set the SCALE value; this value is used to convert the raw data to "human readable" data (measure units)

- `float get_scale()` —— get the current SCALE

- `void set_offset(long offset = 0)` —— set OFFSET, the value that's subtracted from the actual reading (tare weight)

- `long get_offset()` —— get the current OFFSET

- `void power_down()` —— puts the chip into power down mode

- `void power_up()` —— wakes up the chip after power down mode

#### Installation

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/bogde/HX711" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfull.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### Example Demo

**Step 1.**  Before the Grove - ADC for Load Cell (HX711) measuring, the **PD_SCK** should be pulled down to make it ready for work and the load cell should be calibrated.The `Grove_ADC_for_Load_Cell_(HX711)` example code is as follow:

```cpp
#include "HX711.h"

// HX711 circuit wiring
const int LOADCELL_DOUT_PIN = 3;  //Set your I2C pin
const int LOADCELL_SCK_PIN = 2;


HX711 scale;

void setup() {
  Serial.begin(9600);
  Serial.println("HX711 Demo");

  Serial.println("Initializing the scale");

  // Initialize library with data output pin, clock input pin and gain factor.
  // Channel selection is made by passing the appropriate gain:
  // - With a gain factor of 64 or 128, channel A is selected
  // - With a gain factor of 32, channel B is selected
  // By omitting the gain factor parameter, the library
  // default "128" (Channel A) is used here.
  
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  Serial.println("Before setting up the scale:");
    if (scale.wait_ready_timeout(1000)) {
    long reading = scale.read();
    Serial.print("HX711 reading: ");
    Serial.println(reading);
  } else {
    Serial.println("HX711 not found.");
  }   // print a raw reading from the ADC

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));   // print the average of 20 readings from the ADC

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));  // print the average of 5 readings from the ADC minus the tare weight (not set yet)

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1); // print the average of 5 readings from the ADC minus tare weight (not set) divided
      // by the SCALE parameter (not set yet)

  scale.set_scale(2280.f);                      // this value is obtained by calibrating the scale with known weights; see the README for details
  scale.tare();            // reset the scale to 0

  Serial.println("After setting up the scale:");

  Serial.print("read: \t\t");
  Serial.println(scale.read());                 // print a raw reading from the ADC

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));       // print the average of 20 readings from the ADC

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));  // print the average of 5 readings from the ADC minus the tare weight, set with tare()

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);        // print the average of 5 readings from the ADC minus tare weight, divided
      // by the SCALE parameter set with set_scale

  Serial.println("Readings:");
}

void loop() {
  Serial.print("one reading:\t");
  Serial.print(scale.get_units(), 1);
  Serial.print("\t| average:\t");
  Serial.println(scale.get_units(10), 1);

  scale.power_down();           // put the ADC in sleep mode
  delay(5000);
  scale.power_up();
}

```

**Step 2.**  Please click the Board selection dropdown menu, and then click on "Select other board and port...".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/4.png" style={{width:400, height:'auto'}}/></div>

**Step 3.** And then search and select "Arduino UNO R4 WiFi".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/5.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** Please click "upload" to flash the firmware on to Arduino.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/6.png" style={{width:400, height:'auto'}}/></div>

**Step 5.**  Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. When you see serial print "After setting up the scale:", wait a few seconds and apply force to **Weight Sensor (Load Cell) 0-500g**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/10.gif" style={{width:400, height:'auto'}}/></div>

**Step 6.** The result should look like below.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/7.png" style={{width:800, height:'auto'}}/></div>

## Resource

**[PDF]**[INA125 datasheet](https://github.com/SeeedDocument/Weight_Sensor_Load_Cell_0-500g/raw/master/res/INA125.pdf)

**[PDF]**[HX711-datacheet](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/HX711.pdf)

**[ZIP]**[Grove - ADC for load cell (HX711)-Schematic File](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/Grove%20-%20ADC%20for%20load%20cell%20(HX711)_SCH%26PCB.zip)

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
