---
description: Building a smart home control centre around Home Assistant
title: Building a smart home control centre around Home Assistant
keywords:
  - LinkStar
  - Getting started
image: https://avatars.githubusercontent.com/u/10758833
slug: /h68k-ha-esphome
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

<p><meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" /></p>

# Building a smart home control centre around Home Assistant

In this article, we will detail how to set up Home Assistant on Seeed Studio's new product LinkStar H68K and deploy the ESPHome environment. ESPHome is a very common service in Home Assistant. Due to the system limitations of soft routing, we will use ESPHome as an example to guide you through a clever method of installing this service.

## Getting Started

If you want to follow this tutorial through everything, you will need to prepare the following.

<table align="center">
 <tr>
     <th>LinkStar H68K with Wi-Fi 6</th>
      <th>reRouter CM4 1432 (Optional)</th>
      <th>XIAO ESP32C3</th>
 </tr>
  <tr>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg"/></div></td>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png"/></div></td>
      <td><div align="center"><img width ={100} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
  </tr>
 <tr>
      <td align = "center"><a href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html">Get One Now</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html">Get One Now</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">Get One Now</a></td>
 </tr>
</table>

*The reRouter CM4 1432 is also compatible with this tutorial. You can purchase LinkStar or reRouter.

The aim of this project is to install Home Assitant and ESPHome using LinkStar's Docker service, and then configure a LinkStar hotspot to connect to LinkStar using the XIAO ESP32C3's WiFi capabilities to complete the network.

Then combined with the vast Grove ecosystem, you can make even more possibilities in Home Assistant.

The content of this tutorial will broadly go through the following steps.

1. [Configure the Docker environment in LinkStar OpenWRT](#configure-home-assistant-panel)
2. [Installation and configuration of Home Assistant, ESPHome](#installation-and-configuration-of-home-assistant-esphome)
3. [Add Seeed Studio XIAO ESP32C3 to ESPHome](#add-seeed-studio-xiao-esp32c3-to-esphome)
4. [Grove Modules with ESPHome and Home Assistant](#grove-modules-with-esphome-and-home-assistant)

## Configure the Docker environment in LinkStar OpenWRT

### Step 1. Install OpenWRT for LinkStar

We have detailed how to install various systems for LinkStar in the LinkStar Wiki. In this tutorial, we will take the OpenWRT system as an example and explain how to install the Home Assistant Container while ensuring that LinkStar acts as a soft route.

- [Flash OpenWRT to the TF card](https://wiki.seeedstudio.com/linkstar-install-system/#flash-openwrt-to-the-tf-card)
- [Flash OpenWRT to eMMC](https://wiki.seeedstudio.com/linkstar-install-system/#flash-openwrt-to-emmc)

Please select above the system location where you would like to install OpenWRT for LinkStar.

### Step 2. Configure the LinkStar network

Please connect to LinkStar via a network cable and enter the IP address: `192.168.100.1` in your browser to access the operating backend of OpenWRT.

The initial account password is:

```
Account: root
Password: password
```

Next we need to get LinkStar connected to the internet.

You need to purchase a LinkStar with wireless networking, so you can choose to connect a network cable to the LinkStar or to WiFi.

- If it is a wired network, please configure your network according to your network operator's instructions.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/53.png"/></div>

- If you want to use a wireless LAN, you can search for a network in the **Wireless** options.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/54.png"/></div>

After that, just enter your network password, click **Save and Apply**.

Make sure you have a good network state before continuing with the next steps.

### Step 3. Allocate more space to Docker

By default, docker is only about 250MB in size, which is not enough for us to install the image, so first we need to expand the capacity for Docker.

Click **System** --> **Disk Man** --> **EDIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/1.png"/></div>

In the last line, write the size of the storage space to be added in the END SECTOR column. In my case, it's `+20G`. Then click **NEW** button.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/2.png"/></div>

Choose the **ext4** format, then click **FORMAT** button.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/4.png"/></div>

When it is done, you'll see a new 20GB space is added. However, it's a free space now, you need to mount it to the Docker.

Then choose **System** --> **Mount Points**, find **Mount Point** section, click **ADD** button.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/5.png"/></div>

Choose the new space you've just created.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/6.png"/></div>

Choose the Mount Point **Use as Docker data (/opt)**. Don't forget to check the checkbox **Enable this mount**, then click **SAVE & APPLY** button.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/7.png"/></div>

All settings for the expansion are complete, just need to reboot to make it valid.

Choose **System** --> **Reboot**, click the **PERFORM REBOOT** button. Wait for OpenWRT to reboot and login again.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/8.png"/></div>

## Installation and configuration of Home Assistant, ESPHome

### Step 4. Install Home Assistant with Docker

A better way to install Home Assistant in OpenWRT is to do it on Docker, which ensures that LinkStar is stable as a soft route and also allows Home Assistant to be deployed.

Then all we need to do is pull the specific Home Assistant image. This image will serve us well in installing the ESPHome service later on.

```
homeassistant/qemuarm-64-homeassistant:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/12.png"/></div>

We use the downloaded image to create a Container.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/11.png"/></div>

On the page where the container is created, we need to make some simple settings.

- Container Name: your container name
- Docker Image: choose just downloaded **qemuarm-64-homeassistant** image
- Network: choose **host** mode
- Environment Variables(-e): your environment variable

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/13.png"/></div>

Once you have filled in the above, save and apply. You will see that the Container has been created. Let we start it.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/14.png"/></div>

### Step 5. Install ESPHome with Docker

As we are installing the Home Assistant Container, we cannot simply download the ESPHome service via the Add-on shop, so a compromise is needed.

Repeating the above steps, we download the ESPHome image.

```
esphome/esphome:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png"/></div>

On the page where the container is created, we need to make some simple settings.

- Container Name: your container name
- Docker Image: choose just downloaded **esphome** image
- Network: choose **host** mode
- Environment Variables(-e): your environment variable

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png"/></div>

Once you have filled in the above, save and apply. You will see that the Container has been created. You also need to start it.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png"/></div>

### Step 6. Add the ESPHome service to Home Assistant

In order to achieve the same effect as downloading ESPHome in Home Assistant, we need to modify the configuration file under Home Assistant.

Go to the Home Assistant Container.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png"/></div>

We go to the terminal in Home Assistant.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png"/></div>

Enter the following command in the terminal.

```sh
vi configuration.yaml
```

Add following content to the end of `configuration.yaml`.

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

Exit the docker container by type ```exit``` in the Home Assistant Container shell. Once this is done, we restart the Home Assistant  container.

Create a new browser page, enter IP address `192.168.100.1:8123` and register your Home Assistant account and you will see ESPHome appear in the toolbar on the left.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png"/></div>

## Add Seeed Studio XIAO ESP32C3 to ESPHome

- **Step 1.** Click **+ NEW DEVICE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png"/></div>

- **Step 2.** Click **CONTINUE**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png"/></div>

- **Step 3.** Enter a **Name** for the device and enter WiFi credentials such as **Network name** and **Password**. Then click **NEXT**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png"/></div>

- **Step 4.** Select **ESP32-C3** and click

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png"/></div>

- **Step 5.** Click **SKIP** because we will configure this board manually

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png"/></div>

- **Step 6.** Click **EDIT** under the newly created board

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png"/></div>

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

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png"/></div>

- **Step 8.** then, please click on the **Save** button in the top right corner.

LinkStar H68K do not support recognition of external MCU devices, we need to download the compiled firmware first and then upload the firmware via another PC.

- **Step 9.** Click on the **Install** button in the top right hand corner. Then select the last item **Manual download**.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png"/></div>

- **Step 10.** Select **Modern format**.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png"/></div>

It will then take a long time to download and compile, so please be patient. Once everything is ready, the firmware will be automatically downloaded to your computer.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png"/></div>

- **Step 11.** To upload the firmware to XIAO ESP32C3 there are couple options here we show 2 ways of doing it:

  - Option 1: using the [ESPhome Web tool](https://web.esphome.io/?dashboard_install) to upload.

Make sure you have the right drivers installed. Below are the drivers for common chips used in ESP devices.

1. CP2102 drivers: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
2. CH342, CH343, CH9102 drivers: [Windowns](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)
3. CH340, CH341 drivers: [Windowns](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

Open the [ESPhome Web tool](https://web.esphome.io/?dashboard_install) with Chrome or Edge web browser.

Click **CONNECT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png"/></div>

select the XIAO ESP32 serial port in the popup window.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png"/></div>

Click **INSTALL** and then select the `.bin` file downloaded from above steps.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png"/></div>

- Option 2: Using the [esphome-flasher tool](https://github.com/esphome/esphome-flasher).

If you are still unable to upload firmware using method one after installing the driver and changing browsers, then you can try using method two. Please refer to the official tutorial for specific installation methods and instructions.

:::tip
If you wish to observe the log messages of the XIAO ESP32C3, you can also view them through the View Logs button of this software.
<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png"/></div>
:::

Once the upload is complete, you can disconnect the XIAO ESP32C3 from the PC (unless you have a need to view the logs) and simply power the XIAO separately.

If all goes well, the XIAO ESP32C3 will search for and connect to the WiFi you have set up for it.

Just like me, I use LinkStar H68K's network. You can find it in the network options and see the IP address assigned to it by LinkStar H68K.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png"/></div>

- **Step 12.** If you see the board status as **ONLINE**, that means the board is successful connected to WiFi

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png"/></div>

- **Step 13.** Connect to XIAO ESP32C3

If you do not have many Home Assistant devices on your LAN, Home Assistant can automatically search for and add your ESP devices to the Devices tab. You can see this device inside the **Devices & Services** tab in **Settings**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png"/></div>

If it does not automatically search, you can also connect to the XIAO ESP32C3 based on its IP address.

Click **ADD INTEGRSTION** and search for **esphome**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png"/></div>

Then enter the IP address of the XIAO ESP32C3 with port number **6053**. Then click on **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png"/></div>

If the IP address and port number entered are correct, then you will see that you are asked to enter the Encryption key, which we asked to save in yaml file.

Then click on **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png"/></div>

At this point, the steps to add the device have been successfully completed.

## Grove Modules with ESPHome and Home Assistant

Now we will connect Grove modules to Seeed Studio XIAO ESP32C3 so that we can display sensor data or control the devices using Home Assistant!

### Connect Grove Modules to XIAO ESP32C3

In order to use Grove modules with Seeed Studio XIAO ESP32C3, we will use a [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) and connect XIAO ESP32C3 on it.

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png"/></div>

After that, the Grove connectors on the board can be used to connect Grove modules

### Pin Definitions

You need to follow the table below to use the appropriate internal pin numbers when connecting the Grove modules to the Grove connectors on Grove Shield for Seeed Studio XIAO.

| Internal Pin Number  | Pin Mapping  |
|--- |--- |
| 2  | D0  |
| 3  | D1  |
| 4  | D2  |
| 5  | D3  |
| 6  | D4  |
| 7  | D5  |
| 21  | D6  |
| 20  | D7  |
| 8  | D8  |
| 9  | D9  |
| 10  | D10  |
| 6  | SDA  |
| 7  | SCL  |

For example, if you want to connect a Grove module to **D0** port, you need to define the pin on ESPHome as **2**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png"/></div>

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

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

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

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png"/></div>

- **Step 2.** Click **+ ADD CARD**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png"/></div>

- **Step 3.** Select **By ENTITY**, type **temperature** and select the **check box** next to **Temperature**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png"/></div>

- **Step 4.** Repeat the same for **Humidity**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png"/></div>

- **Step 5.** Click **CONTINUE**

<div align="center"><img width ={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png"/></div>

- **Step 6.** Click **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png"/></div>

Now your Home Assistant dashboard will look like below

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png"/></div>

- **Step 7.** You can also visualize sensor data as gauges. Click **Gauge** under **BY CARD**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png"/></div>

- **Step 8.** Select **Temperature** from the drop-down menu

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png"/></div>

- **Step 9.** Click **SAVE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png"/></div>

- **Step 10.** Repeat the same for **Humidity**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png"/></div>

Now your dashboard will look like below

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png"/></div>

For the **Grove - VOC and eCO2 Gas Sensor (SGP30)** and **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** in this wiki, you can follow a similar procedure to visualize the sensor data on the dashboard

### Grove - VOC and eCO2 Gas Sensor (SGP30)

#### Setup configuration

- **Step 1.** Connect [Grove - VOC and eCO2 Gas Sensor (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) to one of the I2C connectors on the Grove Shield for Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

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

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

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

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

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

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png"/></div>

- **Step 2.** Click **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png"/></div>

Now you can turn the relay **ON/OFF** using the toggle switch

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg"/></div>

### Grove - mini PIR motion sensor

#### Setup configuration

- **Step 1.** Connect [Grove - mini PIR motion sensor](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) to one of the **Digital** ports on the Grove Shield for Seeed Studio XIAO. Here we select **D0** port

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

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

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png"/></div>

- **Step 2.** Click **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png"/></div>

Now if a motion is detected, it will show as **Detected**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png"/></div>

## What Next?

Congratulations, you have learned to complete the deployment of Home Assistant on LinkStar and are able to use the ESPHome plugin. For anything similar to not being able to install a Home Assistant Container with Add-on, you can use this method to install other Home Assistant plugin.

We also look forward to having you join our team of creators and bring us more useful examples!

Of course, there is more to the XIAO ESP32C3 than just support for the MR24HPCB1 in Home Assistant, and you can find more tutorials for your own use in this document.

- [Connect Grove Modules to Home Assistant using ESPHome (Odyssey)](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)
- [XIAO ESP32C3 accesses Home Assistant via ESPHome service](https://wiki.seeedstudio.com/xiao-esp32c3-esphome/)

Get your creative juices flowing!

## Troubleshooting

**FAQ1: I got the following error while uploading firmware using ESPhome Web tool, how can I fix it?**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png"/></div>

> A: If this prompt appears while uploading, disconnect the XIAO ESP32C3 from the PC. Then, hold the BOOT BUTTON, connect the board to your PC while holding the BOOT button, and then release it to enter bootloader mode. At this point it is sufficient to reconnect and upload the firmware again.

**FAQ2: I can't install esphome flasher under Linux following the tutorial of esphome flasher?**

> A: When executing the following commands, you need to select your system version, otherwise an error will occur. For example, my computer is Ubuntu 22.04, then the command that should be executed is as follows.

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

**FAQ3: I filled in the correct WiFi and password, why don't I see the IP address of the XIAO ESP32C3?**

> A: When you encounter this problem, please check that the XIAO ESP32C3's antenna is connected in place. If the antenna is already connected, please make sure that the XIAO is not further than 3m from the LinkStar if possible (unless you have replaced the antenna with a more powerful one).
If you still do not see XIAO, you can use the [esphome flasher](https://github.com/esphome/esphome-flasher) software to check the XIAO log information and check the XIAO connection through the logs.
You can re-plug the xiao to let it try to search for WiFi and connect again.

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
