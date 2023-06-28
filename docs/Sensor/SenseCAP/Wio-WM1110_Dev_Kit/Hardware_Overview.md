---
description: Wio-WM1110 Dev Kit Hardware Overview
title: Hardware Overview
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 6/27/2023
  author: Jessie
---



The Wio WM1110 Dev Kit is an open source platform for building IoT projects. It provides low-power loRa network connection and a full range of location coverage services. This kit also includes a range of sensors and peripherals, making it a versatile platform for building IoT projects.

In this tutorial, we will introduce the hardware overview and how to develop your own application! 


# Hardware Overview

The Wio-WM1110 Dev Kit is based on [Wio-WM1110 Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html),integrates Semtech's LoRa® transceiver and a multi-purpose radio front-end for geolocation, the board has a built-in TH sensor and a 3-axis Accelerometer, also providing connectivity options for a variety of peripherals.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>



# Pinout

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>



## LoRaWAN® Communication

### Define the keys

Define the JoinEUI/DevEUI/APPEUI in config file.

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>


**LoRa Basics Modem LoRaWAN® Class A/C example**

The application will automatically starts a procedure to join a LoRaWAN network see **lorawan_key_config.h**

Once a network is joined (i.e. when the corresponding event is triggered), uplinks are sent periodically. This periodic action is based on the LoRa Basics Modem alarm functionality. Each time the alarm-related event is triggered, the application requests an uplink.

The content of the uplink is the value read out from the charge counter by calling `smtc_modem_get_charge()`.

The application is also capable of displaying data and meta-data of a received downlink.

**Configuration**

Several parameters can be updated in `main_lorawan.h` header file:

| Constant                   | Description                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | LoRaWAN® FPort used for the uplink messages                                    |
| `LORAWAN_CONFIRMED_MSG_ON` | Request a confirmation from the LNS that the uplink message has been received |
| `APP_TX_DUTYCYCLE`         | Delay in second between two uplinks                                           |


## Positioning

### GNSS 

By capturing a short portion of the signal broadcast by the GNSS satellites, and extracting the information required to calculate the device position - the pseudo-ranges. This information is aggregated into a NAV message which can be sent to a back-end system to compute the device position.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

The GNSS scanner of the Wio-WM1110 has two modes of operations: autonomous and assisted.

**GNSS autonomous mode:** Does not require any assistance location or almanac data, and aims to detect strong satellite signals. Therefore it is suitable for outdoor conditions with good sky visibility.

**GNSS assisted mode**：It allows the most efficient GNSS geolocation. Assistance information can build a list of the satellites in view at the current time and location, in order to reduce the GNSS satellites search space, and therefore optimize the time and energy spent geolocating. The assistance information is tailored to an LPWAN network, limiting the data sent, especially the downlink size and frequency. It consists of:  
* LR1110 approximate position 
* Current time 
* Up-to-date reduced size Almanac information (less than 3 months old)


#### Geolocation GNSS Example 

This example illustrates the GNSS scan procedure:

- configuration of the LoRa Basics Modem library; and
- execution of GNSS *scan & send* feature using the *GNSS geolocation middleware*.




**GNSS demonstration related configuration**

The `main_geolocation_gnss.h` header file defines several constants to configure geolocation parameters.

| Constant                                 | Comments                                                                                | Possible values  | Default Value |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | If set to `true`: configures the application to autonomously get an assistance position | {`true`,`false`} | `true`        |

If manual mode is selected for assistance position, the following constants define the position to be used.

| Constant                                 | Comments                                                                        | Possible values            | Default Value      |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | The latitude to use for GNSS Assisted scan (decimal degree)                     | Any `float` in [-90, 90]   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | The longitude to use for GNSS Assisted scan (decimal degree)                    | Any `float` in [-180, 180] | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | A text representation of the assistance position, for information printing only | Any constant c-string      | "Grenoble, FRANCE" |

***Note***: The pre-defined assistance position must be within a 150 km range of the actual location.

| Constant                 | Comments                                                                                      | Possible values           | Default Value         |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Defines the duration between the end of a scan & send sequence and the start of next sequence | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | Defines the GNSS scan mode (static or mobile) to be used for scan & send sequences.           | Value in `gnss_mw_mode_t` | `GNSS_MW_MODE_STATIC` |

The GNSS scan mode selected by default is `GNSS_MW_MODE_STATIC`, meaning that
this application example targets non-mobile objects.




### Wi-Fi

By discovering the Wi-Fi b/g/n access points available in the vicinity of the device, and extract MAC addresses allowing to geolocate the device. The objective is to obtain at least 2 MAC addresses, which can be used to position the device, after they have been sent to an online Wi-Fi lookup service


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>


#### Geolocation Wi-Fi Example 

This application demonstrates the usage of the Wi-Fi geolocation middleware and
how the LoRa Basics Modem should be configured to meet the prerequisites for
This example illustrates the Wi-Fi scan procedure:

- configuration of the LoRa Basics Modem library; and
- execution of Wi-Fi *scan & send* feature using the *Wi-Fi geolocation middleware*.


**Wi-Fi demonstration related configuration**

The `main_geolocation_wifi.h` header file defines several constants which can be
set to define the configurable parameters of the application.

| Constant           | Comments                                                                                      | Possible values | Default Value |
| ------------------ | --------------------------------------------------------------------------------------------- | --------------- | ------------- |
| `WIFI_SCAN_PERIOD` | Defines the duration between the end of a scan & send sequence and the start of next sequence | `uint32_t`      | 30            |





### GNSS and Wi-Fi

#### Geolocation GNSS and Wi-Fi example
This example illustrates the combination of GNSS and Wi-Fi scan procedures:

- configuration of the LoRa Basics Modem library; and
- concurrent execution of GNSS and Wi-Fi *scan & send* features using the
*GNSS geolocation middleware* and the *Wi-Fi geolocation middleware*.



**Geolocation demonstration related configuration**

The `main_geolocation_gnss_wifi.h` header file defines several constants to configure geolocation parameters.

| Constant                                 | Comments                                                                                | Possible values  | Default Value |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | If set to `true`: configures the application to autonomously get an assistance position | {`true`,`false`} | `false`       |

If manual mode is selected for assistance position, the following constants define the position to be used.

| Constant                                 | Comments                                                                        | Possible values            | Default Value      |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | The latitude to use for GNSS Assisted scan (decimal degree)                     | Any `float` in [-90, 90]   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | The longitude to use for GNSS Assisted scan (decimal degree)                    | Any `float` in [-180, 180] | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | A text representation of the assistance position, for information printing only | Any constant c-string      | "Grenoble, FRANCE" |

***Note***: The pre-defined assistance position must be within a 150 km range of the actual location.

| Constant                 | Comments                                                                                      | Possible values           | Default Value         |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Defines the duration between the end of a scan & send sequence and the start of next sequence | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | Defines the GNSS scan mode (static or mobile) to be used for scan & send sequences.           | Value in `gnss_mw_mode_t` | `GNSS_MW_MODE_MOBILE` |

The GNSS scan mode selected by default is `GNSS_MW_MODE_MOBILE`, meaning that this application example targets mobile objects.




## Built-in Sensors

### TH Sensor(SHT41)

SHT41 is a digital humidity and temperature sensor, it communicates with a microcontroller or other digital device through an I2C interface.

The SHT41 sensor is commonly used in a wide range of applications, including HVAC systems, weather stations, indoor air quality monitoring, and industrial process control. Its small size, low power consumption, and high accuracy make it a popular choice for many different types of projects.


|  | Range | Accuracy |
| -------- | -------- | -------- |
|Temperature  | -40~125°C |0.2°C|
| Humidity | 0~100%RH |1.8%RH|



**Code:**

This example provides functions for initializing the sensor, reading temperature and humidity values, and setting the temperature unit.

Here's a brief summary of the functions defined in this code:


**SHT41Init**: a function that initializes the sensor by resetting it and waiting for 1ms before proceeding.

**SHT41GetTemperature, SHT41GetHumidity, and SHT41GetTempAndHumi**: functions for reading temperature and/or humidity values from the sensor. These functions convert the raw sensor values to a float value in degrees Celsius or Fahrenheit, depending on the current temperature unit setting.

**SHT41SetTemperatureUnit and SHT41GetTemperatureUnit**: functions for setting and getting the temperature unit.
crc8: an internal function that calculates the CRC-8 checksum of a byte array.


    
### 3-axis Accelerometer(LIS3DHTR)


The LIS3DHTR is a high-performance sensor that measures acceleration in three dimensions and provides accurate and reliable readings.

The LIS3DHTR sensor communicates with a microcontroller or other digital device through an I2C or SPI interface. It also includes advanced features such as programmable interrupts and a wide range of power-saving modes to help minimize power consumption.



| Range | Column 2 | Column 3 |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g  | Text     | Text     |
| Bandwidth|0.5Hz ~ 625Hz

    






# Resources

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)


# Tech Support

**Need help with your Wio-WM1110 Dev Kit? We're here to assist you!**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" class="button_discussion"></a>
</div>