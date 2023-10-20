---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3
title: ESPHome Support on Seeed Studio XIAO ESP32C3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-ESP32C3-for-ESPHome-Support
last_update:
  date: 10/20/2023
  author: Zachary
---


<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->


![](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/1.png)

This wiki will walkthrough step-by-step on how to connect [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) with ESPHome running on Home Assistant and send the sensor data/ control devices after connecting Grove modules to XIAO ESP32C3. So, let's get started!

## What is ESPHome?


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:700, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) is a tool which aims to make managing your ESP boards as simple as possible. It reads in a YAML configuration file and creates custom firmware which it installs on your ESP device. Devices or sensors added in ESPHome’s configuration will automatically show up in Home Assistant’s UI.

## Install Home Assistant

Make sure you already have Home Assistant up and running. You can follow [this wiki](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant) for a step-by-step guide on installing Home Assistant on an ODYSSEY-X86 SBC or this [link](https://www.mbreviews.com/how-to-home-assistant-seeed-mini-router/) for a detailed instruction use Home Assistant with a Seeed Mini Router.

## Install ESPHome on Home Assistant

ESPHome is available as a **Home Assistant Add-On** and can simply be installed via the add-on store.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/3.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/3.png" style={{width:700, height:'auto'}}/></div>

- **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div>

- **Step 2.** Once you see the following pop-up, click **OPEN LINK**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div>

- **Step 3.** Click **INSTALL**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/6.png"style={{width:700, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/6.png" style={{width:700, height:'auto'}}/></div>

- **Step 4.** Enable all the options and click **START**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/7.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/7.png" style={{width:700, height:'auto'}}/></div>

- **Step 5.** Click **OPEN WEB UI** or **ESPHOME from the side-panel**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png" style={{width:700, height:'auto'}}/></div>

You will see the following window if ESPHome is successfully loaded

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/9.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/9.png" style={{width:700, height:'auto'}}/></div>

## Add Seeed Studio XIAO ESP32C3 to ESPHome

- **Step 1.** Click **+ NEW DEVICE**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/10.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/10.png" style={{width:700, height:'auto'}}/></div>

- **Step 2.** Click CONTINUE

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/11.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/11.png" style={{width:300, height:'auto'}}/></div>

- **Step 3.** Enter a **Name** for the device and enter WiFi credentials such as **Network name** and **Password**. Then click **NEXT**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/12.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/12.png" style={{width:300, height:'auto'}}/></div>

- **Step 4.** Select **ESP32-C3** and click

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/13.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/13.png" style={{width:300, height:'auto'}}/></div>

- **Step 5.** Click **SKIP** because we will configure this board manually

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:300, height:'auto'}}/></div>

- **Step 6.** Click **EDIT** under the newly created board

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/15.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/15.png" style={{width:300, height:'auto'}}/></div>

- **Step 7.** This will open a **YAML** file and this file will be used to set all the board configurations. Edit the content under **esp32** as follows

**Note:** Here we are using the latest version of [Arduino core](https://github.com/espressif/arduino-esp32/releases) for ESP32 and [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)

- **Step 8.** Click **SAVE** and then click **INSTALL**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/16.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/16.png" style={{width:700, height:'auto'}}/></div>

- **Step 9.** Connect one end of a USB Type-C cable to Seeed Studio XIAO ESP32C3 and the other end to one of the USB ports on the reRouter CM4 1432

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:700, height:'auto'}}/></div>

``` 
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "WiFi_SSID"
  password: "Your Password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

- **Step 10.** Click **Plug into the computer running ESPHome Dashboard**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/18.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/18.png" style={{width:300, height:'auto'}}/></div>

- **Step 11.** Select the connected port. It is likely to be ```/dev/ttyACM1 because /dev/ttyACM0``` is connected to the reRouter CM4 1432

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/19.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/19.png" style={{width:700, height:'auto'}}/></div>

Now it will download all the necessary board packages and flash the ESPHome firmware into the XIAO ESP32C3. If the flashing is successful, you will see the following output. If you see something error, try to restart your xiao esp32c3 or enter bootloader mode by holding on the BOOT BUTTON and connect XIAO ESP32C3.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:700, height:'auto'}}/></div>

- **Step 12.** The above window displays the real-time logs from the connected board. Close it by clicking **STOP**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/21.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/21.png" style={{width:700, height:'auto'}}/></div>

- **Step 13.** If you see the board status as **ONLINE**, that means the board is successful connected to WiFi

Now you can disconnect the XIAO ESP32C3 from the reRouter CM4 1432 and just power it via a USB cable. This is because from now on, if you want to flash firmware to the XIAO ESP32C3, you can simply do it OTA without connecting to the X86 board via a USB cable.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/22.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/22.png" style={{width:300, height:'auto'}}/></div>

- **Step 14.** Click the **three dots** and click **Install**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/23.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/23.png" style={{width:300, height:'auto'}}/></div>

- **Step 15.** Select **Wirelessly** and it will push the changes to the board wirelessly

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/24.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/24.png" style={{width:300, height:'auto'}}/></div>

- **Step 16.** Go to **Settings** and select **Devices & Services**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/25.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/25.png" style={{width:700, height:'auto'}}/></div>

- **Step 17.** You will see **ESPHome** as a discovered integration. Click **CONFIGURE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/26.png"style={{width:700, height:'auto'}}/></div>

- **Step 18.** Click **SUBMIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/27.png"style={{width:300, height:'auto'}}/></div>

- **Step 19.** Click **FINISH**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/28.png"style={{width:300, height:'auto'}}/></div>

# Grove Modules with ESPHome and Home Assistant

Now we will connect Grove modules to Seeed Studio XIAO ESP32C3 so that we can display sensor data or control the devices using Home Assistant!

## Connect Grove Modules to XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

In order to use Grove modules with Seeed Studio XIAO ESP32C3, we will use a [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) and connect XIAO ESP32C3 on it.

After that, the Grove connectors on the board can be used to connect Grove modules

## Pin Definitions

You need to follow the table below to use the appropriate internal pin numbers when connecting the Grove modules to the Grove connectors on Grove Shield for Seeed Studio XIAO.

| First Header  | Second Header |
| ------------- | ------------- |
| 2  | 	D0  |
| 3  | 	D1  |
| 4  | 	D2  |
| 5  | 	D3  |
| 6  | 	D4  |
| 7  | 	D5  |
| 21 | 	D6  |
| 20 | 	D7  |
| 8  | 	D8  |
| 9  | 	D9  |
| 10 |  D10 |
| 6  |  SDA |
| 7  |  SCL |


For example, if you want to connect a Grove module to D0 port, you need to define the pin on ESPHome as 2

## Grove Compatibility List with ESPHome

Currently the following Grove modules are supported by ESPHome

Check [here](https://esphome.io/components/sensor/index.html#see-also)

Now we will select 6 Grove modules from the above table and explain how they can be connected with ESPHome and Home Assistant.

## Grove - Temperature and Humidity Sensor (BME680)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

The Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) is a multiple function sensor which can measure temperature, pressure, humidity and gas at the same time. It is based on the BME680 module and you can use this sensor in your GPS, IoT devices or other device which needs those four parameters. [Click here](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html) for the purchase.

### Setup Configuration

- **Step 1.** Connect Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) to one of the I2C connectors on the Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:700, height:'auto'}}/></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

i2c:
  sda: GPIO6
  scl: GPIO7

sensor:
  - platform: bme680
    temperature:
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
    update_interval: 60s
```

You can learn more about the [BME680 component](https://esphome.io/components/sensor/bme680) here. It allows you to use BME280, BME680, BMP085, BMP280, AHT10, AHT20 and AHT21 based sensors. Here we add the I²C Bus component because AHT20 communicates using I2C protocol.


### Visualize on Dashboard

- **Step 1.** On the Overview page of Home Assistant, click the 3 dots and click **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:700, height:'auto'}}/></div>

- **Step 2.** Click **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:700, height:'auto'}}/></div>

- **Step 3.** Select **By ENTITY**, type **temperature** and select the **check box** next to **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:700, height:'auto'}}/></div>

- **Step 4.** Repeat the same for **Humidity**, **Gas Resitance** and **Pressure**

- **Step 5.** Click **CONTINUE**

- **Step 6.** Click **ADD TO DASHBOARD**

Now your Home Assistant dashboard will look like below

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:700, height:'auto'}}/></div>

- **Step 7.** You can also visualize sensor data as gauges. Click **Gauge** under **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:700, height:'auto'}}/></div>

- **Step 8.** Select **Temperature** from the drop-down menu

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:700, height:'auto'}}/></div>

- **Step 9.** Click **SAVE**

- **Step 10.** Repeat the same for **Humidity**, **Gas Resitance** and **Pressure**

- Now your dashboard will look like below

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:700, height:'auto'}}/></div>

## Grove -Smart Air Quality Sensor (SGP41)

The SGP41 digital gas sensor uses Sensirion's CMOSens® technology, which offers a complete and easy-to-use sensor system on a single chip. It can measure the concentration of volatile organic compounds (VOCs) and nitrogen oxides (NOx) in indoor air and provides digital output signals. Additionally, this sensor has outstanding long-term stability and lifetime. [Click here](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) for the purchase.

### Setup Configuration

- **Step 1.** Connect Grove - [Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) to one of the I2C connectors on the Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:700, height:'auto'}}/></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

```
- **Step 3.** Example With Compensation
compensation (Optional): The block containing sensors used for compensation. If not set defaults will be used.
We will use the Temperature and Humidity Sensor (BME680) compensate for Smart Air Quality Sensor (SGP41).
Here is the updated **xiao-esp32c3.yaml** file:

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz
sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
  
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```
**Note:** This sensor will cost 90 circles for collecting enough data samples and warning cannot be avoided so far.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

### Visualize on Dashboard

See before.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div>

## Grove - Analog Microphone

The Grove - Analog Microphone is a based on high-performance SiSonic MEMS technology, offering an extremely-low-noise, low-current, reliable, and small microphone to opensource hardware industry, and it has improved performance under severe conditions. [Click here](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) for a purchase.

### Setup Configuration

- **Step 1.** Connect Grove - [Analog Microphone](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) to the A0 connector on the Seeed Studio Expansion Base for XIAO

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/40.png"style={{width:700, height:'auto'}}/></div> -->

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3
```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```

You can check more information about [Binary Sensor Component](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component)

### Visualize on Dashboard

See before.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div>

## Grove - Digital PIR Sensor

PIR sensor is an IR sensor to detect human motions. This Grove Digital PIR Sensor is the cheapest PIR sensor in the PIR families, however, it is able to give a quick response and generate a high signal from the "sig" Pin. [Click here](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html) for a purchase.

### Setup Configuration

- **Step 1.** Connect [Grove - Digital PIR Sensor](https://wiki.seeedstudio.com/Grove-Digital-PIR-Sensor/) to the D7 connector on the Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
```

### Visualize on Dashboard

See before.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div>

## Expansion Base for XIAO - SSD1306

### Setup Configuration

- **Step 1.** Download fond files for display, [click here](https://esphome.io/components/display/index.html#fonts) for a reference

- **Step 2.** Install "File editor" in **Setting** >>> **Add-ons** >>> **File editor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **Step 3.** Click **File editor** >>> Enter the path: **config/esphome** >>> **uoload** your fond file

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **Step 4.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3
```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    lambda: |-
      it.print(0, 0, id(font), "Wi-fi Connected");

sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
  
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
    
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```
 You can explore more about the display component houses ESPHome’s powerful rendering and display engine [by clicking here.](https://esphome.io/components/display/#display-engine)
 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div>

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/12/views/1?pane=issue&itemId=40774119).
- Thanks [Zachary's efforts](https://github.com/orgs/Seeed-Studio/projects/12/views/1?pane=issue&itemId=40774119) and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).

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

