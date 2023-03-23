---
description: ODYSSEY - X86J41x5
title: Connect Grove Modules to Home Assistant using ESPHome
tags:
  - ODYSSEY
  - Home Assistant
keywords:
  - ODYSSEY
  - Home Assistant
image: https://avatars.githubusercontent.com/u/10758833
slug: /Connect-Grove-to-Home-Assistant-ESPHome
last_update:
  date: 03/16/2023
  author: Lakshantha

---

# Connect Grove Modules to Home Assistant using ESPHome

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/106.png" /></div>


## Introduction

This wiki will walkthrough step-by-step on how to connect [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) with ESPHome running on Home Assistant and send the sensor data/ control devices after connecting Grove modules to XIAO ESP32C3. So, let's get started!

## What is ESPHome?

[ESPHome](https://esphome.io) is a tool which aims to make managing your ESP boards as simple as possible. It reads in a YAML configuration file and creates custom firmware which it installs on your ESP device. Devices or sensors added in ESPHome’s configuration will automatically show up in Home Assistant’s UI.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/54.png" /></div>


## Install Home Assistant

Make sure you already have Home Assistant up and running. You can follow [this wiki](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant) for a step-by-step guide on installing Home Assistant on an ODYSSEY-X86 SBC.

## Install ESPHome on Home Assistant

ESPHome is available as a **Home Assistant Add-On** and can simply be installed via the add-on store. 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/6.png" /></div>

- **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button 

<div align="center"><a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=5c53de3b_esphome&repository_url=https%3A%2F%2Fgithub.com%2Fesphome%2Fhome-assistant-addon"><img width={200} src="https://files.seeedstudio.com/wiki/ESPHome/1.png" /></a></div>


- **Step 2.** Once you see the following pop-up, click **OPEN LINK**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/2.png" /></div>


- **Step 3.** Click **INSTALL**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/3.png" /></div>

- **Step 4.** Enable all the options and click **START**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/4.png" /></div>

- **Step 5.** Click **OPEN WEB UI** or **ESPHOME** from the side-panel

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/5.png" /></div>

You will see the following window if ESPHome is successfully loaded

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/7.png" /></div>

## Add Seeed Studio XIAO ESP32C3 to ESPHome

- **Step 1.** Click **+ NEW DEVICE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png" /></div>

- **Step 2.** Click **CONTINUE**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png" /></div>

- **Step 3.** Enter a **Name** for the device and enter WiFi credentials such as **Network name** and **Password**. Then click **NEXT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png" /></div>


- **Step 4.** Select **ESP32-C3** and click

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png" /></div>


- **Step 5.** Click **SKIP** because we will configure this board manually

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png" /></div>


- **Step 6.** Click **EDIT** under the newly created board 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png" /></div>


- **Step 7.** This will open a **YAML** file and this file will be used to set all the board configurations. Edit the content under **esp32** as follows

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**Note:** Here we are using the latest version of [Arduino core for ESP32](https://github.com/espressif/arduino-esp32/releases) and [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png" /></div>


- **Step 8.** Click **SAVE** and then click **INSTALL**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ESPHome/16.png" /></div>

- **Step 9.** Connect one end of a USB Type-C cable to Seeed Studio XIAO ESP32C3 and the other end to one of the USB ports on the ODYSSEY-X86

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/49.png" /></div>


- **Step 10.** Click **Plug into the computer running ESPHome Dashboard**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/17.png" /></div>


- **Step 11.** Select the connected port. It is likely to be **/dev/ttyACM1** because **/dev/ttyACM0** is connected to the onboard ATSAMD21 coprocesser on the ODYSSEY-X86

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>


Now it will download all the necessary board packages and flash the ESPHome firmware into the XIAO ESP32C3. If the flashing is successful, you will see the following output 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>


- **Step 12.** The above window displays the real-time logs from the connected board. Close it by clicking **STOP**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/20.png" /></div>


- **Step 12.** If you see the board status as **ONLINE**, that means the board is successful connected to WiFi

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png" /></div>


Now you can disconnect the XIAO ESP32C3 from the X86 board and just power it via a USB cable. This is because from now on, if you want to flash firmware to the XIAO ESP32C3, you can simply do it OTA without connecting to the X86 board via a USB cable. 

- **Step 13.** Click the **three dots** and click **Install**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>


- **Step 14.** Click the **three dots** and click **Install**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>


- **Step 15.** Select **Wirelessly** and it will push the changes to the board wirelessly

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/29.png" /></div>


- **Step 16.** Go to **Settings** and select **Devices & Services**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/22.png" /></div>


- **Step 17.** You will see **ESPHome** as a discovered integration. Click **CONFIGURE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/23.png" /></div>


- **Step 18.** Click **SUBMIT**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/24.png" /></div>


Here it will ask for the encryption key you have in your configuration for xiao-esp32c3

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/25.png" /></div>


- **Step 19.** Go back to **xiao-esp32c3.yaml**, copy the encryption key, paste inside the above dialog box and click **SUBMIT** 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/26.png" /></div>


- **Step 20.** Click **FINISH**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/27.png" /></div>


## Grove Modules with ESPHome and Home Assistant

Now we will connect Grove modules to Seeed Studio XIAO ESP32C3 so that we can display sensor data or control the devices using Home Assistant!

### Connect Grove Modules to XIAO ESP32C3

In order to use Grove modules with Seeed Studio XIAO ESP32C3, we will use a [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) and connect XIAO ESP32C3 on it. 

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png" /></div>


After that, the Grove connectors on the board can be used to connect Grove modules

### Pin Definitions

You need to follow the table below to use the appropriate internal pin numbers when connecting the Grove modules to the Grove connectors on Grove Shield for Seeed Studio XIAO.

| Internal Pin Number 	| Pin Mapping 	|
|---	|---	|
| 2 	| D0 	|
| 3 	| D1 	|
| 4 	| D2 	|
| 5 	| D3 	|
| 6 	| D4 	|
| 7 	| D5 	|
| 21 	| D6 	|
| 20 	| D7 	|
| 8 	| D8 	|
| 9 	| D9 	|
| 10 	| D10 	|
| 6 	| SDA 	|
| 7 	| SCL 	|

For example, if you want to connect a Grove module to **D0** port, you need to define the pin on ESPHome as **2**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png" /></div>


### Grove Compatibility List with ESPHome

Currently the following Grove modules are supported by ESPHome

<table>
<thead>
  <tr>
    <th>Grove Module</th>
    <th>Category</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - Laser PM2.5 Dust Sensor</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - SEN55 All-in-one environmental sensor</a>, NOx, PM, VOC, RH, Temp</td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - SEN54 All-in-one environmental sensor</a>, PM, VOC, RH, Temperature</td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html">Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD30)</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html">Grove - CO2 &amp; Temperature &amp; Humidity Sensor - SCD41</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - VOC and eCO2 Gas Sensor - SGP30</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html">Grove - 4 Channel 16-bit ADC (ADS1115)</a></td>
    <td>ADC</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html">Grove - Time of Flight Distance Sensor(VL53L0X)</a></td>
    <td>Distance</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html">Grove - Ultrasonic Distance Sensor</a></td>
    <td>Distance</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html">Grove - AHT20 I2C Industrial Grade Temperature and Humidity Sensor</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">Grove - Temperature &amp; Humidity Sensor V2.0 (DHT20)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html">Grove - Temperature &amp; Humidity Sensor Pro (DHT22/AM2302)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html">Grove - Temp&amp;Humi&amp;Barometer Sensor (BME280)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html">Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html">Grove Temperature and Barometer Sensor (BMP280)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html">One Wire Temperature Sensor - DS18B20</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">Grove - Temperature &amp; Humidity Sensor (DHT11)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - I2C High Accuracy Temperature Sensor - MCP9808</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - Temperature &amp; Humidity Sensor (SHT31)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank" rel="noopener noreferrer">Grove - Temperature&amp;Humidity Sensor (SHT40)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener noreferrer">Grove - High Precision Barometric Pressure Sensor (DPS310)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-MCP9600.html" target="_blank" rel="noopener noreferrer">Grove - I2C Thermocouple Amplifier (MCP9600)</a></td>
    <td>Environmental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - I2C Color Sensor V2</a></td>
    <td>Color</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - Digital Light Sensor - TSL2561</a></td>
    <td>Light</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html">Grove - ADC for Load Cell (HX711)</a></td>
    <td>Weight</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html">Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)</a></td>
    <td>Capacitive</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html">Grove - 16-Channel PWM Driver (PCA9685)</a></td>
    <td>PWM</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - 4-Digit Display</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html">Grove - OLED Display 0.66" (SSD1306)</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Relay.html">Grove - Relay</a></td>
    <td>Relay</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-SPDT-Relay-30A.html">Grove - SPDT Relay(30A)</a></td>
    <td>Relay</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html">Grove - Solid State Relay V2</a></td>
    <td>Relay</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html">Grove - 2-Channel SPDT Relay</a></td>
    <td>Relay</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor.html">Grove - PIR Motion Sensor</a></td>
    <td>Motion</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html">Grove - mini PIR motion sensor</a></td>
    <td>Motion</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html">Grove - Digital PIR Motion Sensor(12m)</a></td>
    <td>Motion</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - Servo</a></td>
    <td>Actuator</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank" rel="noopener noreferrer">Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)</a></td>
    <td>Multiplexer</td>
  </tr>
</tbody>
</table>

Now we will select 6 Grove modules from the above table and explain how they can be connected with ESPHome and Home Assistant.

### Grove - Temperature and Humidity Sensor (AHT20)

#### Setup Configuration

- **Step 1.** Connect [Grove - Temperature and Humidity Sensor (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) to one of the I2C connectors on the Grove Shield for Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, add the following at the end of the file and push it OTA to XIAO ESP32C3 

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

You can learn more about the **AHT10 component** [here](https://esphome.io/components/sensor/aht10.html). It allows you to use **AHT10, AHT20** and **AHT21** based sensors. Here we add the [I²C Bus](https://esphome.io/components/i2c.html) component because AHT20 communicates using I2C protocol.

#### Visualize on Dashboard

- **Step 1.** On the **Overview** page of Home Assistant, click the **3 dots** and click **Edit Dashboard**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png" /></div>


- **Step 2.** Click **+ ADD CARD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png" /></div>


- **Step 3.** Select **By ENTITY**, type **temperature** and select the **check box** next to **Temperature**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png" /></div>


- **Step 4.** Repeat the same for **Humidity**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png" /></div>


- **Step 5.** Click **CONTINUE**

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png" /></div>


- **Step 6.** Click **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png" /></div>


Now your Home Assistant dashboard will look like below 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png" /></div>

- **Step 7.** You can also visualize sensor data as gauges. Click **Gauge** under **BY CARD**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png" /></div>


- **Step 8.** Select **Temperature** from the drop-down menu

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png" /></div>


- **Step 9.** Click **SAVE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png" /></div>


- **Step 10.** Repeat the same for **Humidity**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png" /></div>


Now your dashboard will look like below 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png" /></div>


For the **Grove - VOC and eCO2 Gas Sensor (SGP30)** and **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** in this wiki, you can follow a similar procedure to visualize the sensor data on the dashboard

### Grove - VOC and eCO2 Gas Sensor (SGP30)

#### Setup configuration

- **Step 1.** Connect [Grove - VOC and eCO2 Gas Sensor (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) to one of the I2C connectors on the Grove Shield for Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>


- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, add the following at the end of the file and push it OTA to XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

You can learn more about the **SGP30 component** [here](https://esphome.io/components/sensor/sgp30.html).

### Grove - CO2 & Temperature & Humidity Sensor (SCD41)

#### Setup configuration

- **Step 1.** Connect [Grove - CO2 & Temperature & Humidity Sensor (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) to one of the I2C connectors on the Grove Shield for Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>


- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, add the following at the end of the file and push it OTA to XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

You can learn more about the **SGP4x component** [here](https://esphome.io/components/sensor/scd4x.html)

### Grove - Relay

#### Setup configuration

- **Step 1.** Connect [Grove - Relay](https://www.seeedstudio.com/Grove-Relay.html) to one of the **Digital** ports on the Grove Shield for Seeed Studio XIAO. Here we select **D0** port

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>


- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, add the following at the end of the file and push it OTA to XIAO ESP32C3

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

You can learn more about the **Relay component** [here](https://esphome.io/cookbook/relay.html)

#### Visualize on Dashboard

- **Step 1.** Under **+ ADD CARD** that we mentioned before, select **BY ENTITY**, type **relay**, select it and click **CONTINUE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png" /></div>


- **Step 2.** Click **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png" /></div>


Now you can turn the relay **ON/OFF** using the toggle switch

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg" /></div>


### Grove - mini PIR motion sensor

#### Setup configuration

- **Step 1.** Connect [Grove - mini PIR motion sensor](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) to one of the **Digital** ports on the Grove Shield for Seeed Studio XIAO. Here we select **D0** port

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>


- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, add the following at the end of the file and push it OTA to XIAO ESP32C3

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

You can learn more about the **PIR component** [here](https://esphome.io/cookbook/pir.html)

#### Visualize on Dashboard

- **Step 1.** Under **+ ADD CARD** that we mentioned before, select **BY ENTITY**, type **pir**, select it and click **CONTINUE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png" /></div>


- **Step 2.** Click **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png" /></div>


Now if a motion is detected, it will show as **Detected**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png" /></div>


## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). 
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>