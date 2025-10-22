---
description: Grove - Barometer Sensor (SPA06-003)
title: Grove - Barometer Sensor (SPA06-003)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/show.webp
slug: /grove_barometer_sensor_spa06_003
last_update:
  date: 05/13/2025
  author: robben
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/SPA06-003.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Description

**Grove - Temperature and Barometer Sensor(SPA06-003)** is a high-precision and a low-current environmental sensor measures the temperature and barometer. It supports both I2C and SPI communication and we provide the SPA06-003 Arduino library.

:::note

As the sensor is quite sensitive to the environmental conditions, **please DO NOT touch it with your fingers**.
:::

## Feature

- **Wide measurement range:**  Pressure measurements range from 300hPa - 1100hPa and temperature measurements range from -40℃ - +85℃.
- **High accuracy:** The absolute accuracy of ±0.3 hPa for pressure measurement and ±1 ℃ accuracy for temperature measurement.
- **Long standby time**: Using the FIFO allows the host processor to stay in sleep mode for longer periods between readouts, reducing overall system power consumption and achieving a standby current as low as 0.5 μA.
- **Grove Interface:** Features a [Grove 4-pin connector, ensuring a "Plug and Play"](https://wiki.seeedstudio.com/Grove_System/) experience to connect with mainstream hardware platforms like Arduino, Raspberry Pi, Micro:bit and many more.

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/).
:::

## Specification

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Supply Voltage</td>
      <td>3.3V</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>I2C and SPI</td>
    </tr>
    <tr>
      <td>I2C address</td>
     <td>0x77 (default)<br />0x76</td>
    </tr>
    <tr>
      <th colspan="2">Barometric Pressure Measure</th>
    </tr>
    <tr>
      <td>Range</td>
      <td>300~1100 hPa</td>
    </tr>
    <tr>
      <td>Absolute Accuracy</td>
      <td>±0.3 hPa</td>
    </tr>
    <tr>
      <th colspan="2">Temperature Measurement</th>
    </tr>
    <tr>
      <td>Range</td>
      <td>-40℃ to +85℃</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>±1℃</td>
    </tr>
    <tr>
      <td>Dimensions</td>
      <td>40mm x 20mm x 6.5mm</td>
    </tr>
  </table>
</div>

### **BMP280 vs. BME280 vs. DPS310 vs. SPA06-003**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>ITEM</th>
      <th>Grove-BMP280</th>
      <th>Grove-BME280</th>
      <th>Grove-DPS310</th>
      <th>Grove-SPA06-003</th>
    </tr>
    <tr>
      <td>Pressure Range</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1200 hPa</td>
      <td>300 ~ 1100 hPa</td>
    </tr>
    <tr>
      <td>Temperature Range</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 °C</td>
      <td>-40 ~ 85 °C</td>
    </tr>
    <tr>
      <td>Pressure Precision</td>
      <td>-</td>
      <td>-</td>
      <td>± 0.002 hPa (or ±0.02 m)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Pressure Accuracy (Absolute)</td>
      <td>± 1 hPa (or ±8 m)</td>
      <td>± 1 hPa (or ±8 m)</td>
      <td>± 1 hPa (or ±8 m)</td>
      <td>± 0.3 hPa</td>
    </tr>
    <tr>
      <td>Pressure Accuracy (Relative)</td>
      <td>± 0.12 hPa</td>
      <td>± 0.12 hPa</td>
      <td>± 0.06 hPa (or ±0.5 m)</td>
      <td>± 0.03 hPa (or ±0.25 m)</td>
    </tr>
    <tr>
      <td>Pressure Resolution</td>
      <td>0.18 Pa</td>
      <td>0.18 Pa</td>
      <td>0.06 Pa</td>
      <td>0.06 Pa</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>-</td>
      <td>0 ~ 100%</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Communication</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>\$9.8</td>
      <td>\$18.7</td>
      <td>\$7.5</td>
      <td>\$4.5</td>
    </tr>
  </table>
</div>

### **Part List**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>Item</th>
      <th>Quantity</th>
    </tr>
    <tr>
      <td>Grove Temperature and Barometer Sensor (SPA06-003)</td>
      <td>×1</td>
    </tr>
    <tr>
      <td>Grove - 20cm Cable</td>
      <td>×1</td>
    </tr>
  </table>
</div>

## Application

- Weather Station and Weather Sensing
- Measure Temperature, Pressure, and Altitude

## Getting Started

### Indication diagram

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/Grove-Barometer_Sensor-SPA06-003-Components.png" style={{width:800, height:'auto'}}/></div>

- **SPI soldering pads**.
- **Interface bus selection pads** , to select I<sup>2</sup>C bus, connect the two pads by soldering (this is connected by default); to select SPI bus, cut the two pads with a sharp knife or a soldering iron.
- **Slave board address selection pads**, to select slave board address to avoid address collision.

:::tip

- If you have selected I2C bus, the default address for slave board is 0x77(right-two pads are connected). If you want to use the address 0x76, connect only left two (disconnect right two) by soldering.
- You can disconnect pads with just a sharp knife.
- If you have selected SPI bus, the default address for slave board is 0x77(right-two pads are connected). If you want to use the address 0x76, disconnect all three pads.

:::

### Hardware

**Prepare the below stuffs:**

- *Play with Arduino*

| Seeeduino V4.2                                               | Base Shield                                                  | Grove-Barometer Sensor SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" alt="pir" width="350" height="auto" /></p> |
| [Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [Get One Now](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

- *Play with XIAO Series*

| Seeed Studio Grove Base for XIAO                             | XIAO ESP32-S3                                                | Grove-Barometer Sensor SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div> | <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div> | <div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" /></div> |
| [Get One Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) | [Get One Now](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) | [Get One Now](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

### Software

**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2350** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_rp2350_arduino/#setting-up-the-software)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C6** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#software-preparation)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

- If you want to use **Seeed Studio XIAO RA4M1** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/#software-preparation)** to finish adding.

- If you want to use **Seeed Studio XIAO MG24** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_mg24_getting_started/#software-preparation)** to finish adding.

**Step 3.** Download the library from Github, and refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SPA06" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Use I2C Bus

**Step 1.** Connect your Grove with controller

- *Connect Grove with Arduino*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_arduino.png" /></div>

- *Connect Grove and XIAO*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_esp32.png" /></div>

Two different combinations, but using the same code.

:::tip

Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected.

:::

This connection table applies to all boards with I2C support.

<div className="table-center" style={{ textAlign: 'center' }}>
  <table style={{ borderCollapse: 'collapse', margin: 'auto' }} border="1" cellPadding="6">
    <thead>
      <tr>
        <th>Boards</th>
        <th>Grove-Barometer_Sensor-SPA06-003</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3.3V</td>
        <td>VCC</td>
      </tr>
      <tr>
        <td>GND</td>
        <td>GND</td>
      </tr>
      <tr>
        <td>SDA</td>
        <td>SDA</td>
      </tr>
      <tr>
        <td>SCL</td>
        <td>SCL</td>
      </tr>
    </tbody>
  </table>
</div>

**Step 2.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Seeed Arduino SPA06>Example1_BasicRead

**Step 3.** Upload the code. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

**Step 4.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, and altitude.

:::success
The outcome will display on the **Serial Port** as following if everything goes well.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/outcome.png" style={{width:400, height:'auto'}}/></div>

**Here is the code:**

```cpp
/*
 * Author: Kennan / Kenneract
 * GitHub: https://github.com/Kenneract/SPL07-003-Arduino-Library
 * Created: Mar.15.2025
 * Updated: Apr.14.2025, V1.0.0
 * Purpose: Example usage for the SPL07-003 sensor library. Connects
 *          to the sensor, configures the measurement and oversampling
 *          rate, sets the SPL07-003 to continuous sampling mode, then
 *          prints pressure/temperature measurements to the serial monitor.
 */

#include <Wire.h>
#include "SPL07-003.h"

// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start I2C
  //Wire.setSDA(PB7); //for STM32F103C8Tx
  //Wire.setSCL(PB6); //for STM32F103C8Tx
  Wire.begin();

  // Connect to SPL07-003
  if (spl.begin(SPL07_ADDR) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

#### Use SPI Bus

**Step 1.** Connect Grove Barometer Sensor SPA06-003 with your controller

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/connect_grove_with_xiao.png" /></div>

:::tip

- To select SPI bus, please use a sharp knife or a soldering iron to cut the two pads in the Interface Bus Configuration Area.

- Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected.

:::

**Step 2.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Seeed Arduino SPA06>Example3_SPIRead

**Step 3.** Upload the code. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

**Step 4.** Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, and altitude.

:::success
The outcome will display on the **Serial Port** as following if everything goes well.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/spi_outcome.png" style={{width:400, height:'auto'}}/></div>

**Here is the code:**

```cpp
#include <SPI.h>
#include "SPL07-003.h"


// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)
#define SS 1 //Define your own SPI pins

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start SPI
  SPI.begin();

  // Connect to SPL07-003
  if (spl.begin(SS,&SPI) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()

```

#### Fuction

The following functions are used in the example code above.

```cpp
spl.begin(SPL07_ADDR) / spl.begin(SS,&SPI)
```

Initializes the SPL07-003 sensor. It returns false if the sensor is not found on the bus.

```cpp
spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES)
```

Configures the pressure sensor with:

- 4 Hz output data rate
- 32 samples averaging for noise reduction

Higher sample count improves accuracy but increases response time.

```cpp
spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE)
```

Configures the temperature sensor with:

- 4 Hz update rate
- 1 sample averaging (faster response, less smoothing)

```cpp
spl.setMode(SPL07_CONT_PRES_TEMP)
```

Sets the SPL07-003 to continuous pressure and temperature measurement mode, so it updates data automatically without manual triggering.

```cpp
spl.pressureAvailable(), spl.temperatureAvailable()
```

Checks if a new pressure or temperature measurement is available from the sensor. These return true when fresh data is ready to read.

```cpp
spl.readPressure()
```

Reads the latest pressure value from the sensor in Pascals (Pa).

```cpp
spl.readTemperature()
```

Reads the current temperature in degrees Celsius (°C).

```cpp
spl.calcAltitude()
```

Estimates altitude (in meters) based on the current pressure reading using the standard atmosphere model.
Useful in applications like barometric altitude estimation for drones or weather stations.

## Resources

- **[KiCAD]** [Grove-Barometer Sensor SPA06-003 SCH&PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/SCH&PCB.zip)
- **[Datasheet]** [SPA06-003 Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/Datasheet.PDF)
- **[References]** [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

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
