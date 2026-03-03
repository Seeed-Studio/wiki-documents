---
description: RS485 RS485 Air Temperature, Humidity and Barometric Pressure Sensor(S-THP-01A)
title: RS485 Air Temperature, Humidity and Barometric Pressure Sensor(S-THP-01A)
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor
last_update:
  date: 10/14/2023
  author: Yvonne
---

# RS485 Air Temperature, Humidity and Barometric Pressure Sensor(S-THP-01A)

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image1.png"/></div>

An IP56 RS485 Air Temp, Humi and Barometric pressure sensor has a wide operating range of 0-100% RH, -40 to 125°C, and 300-1100 hPa. It is ideal for applications such as smart agriculture, weather monitoring, calculating evapotranspiration, mold prevention and more. By integrating this sensor with the SenseCAP S2100 [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), users can achieve seamless data collection and management.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Upgradable to Industrial Sensors

With the SenseCAP S2100 [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), you can easily turn this sensor into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

# Play with S2100 LoRaWAN Data Logger

On this page, we'll guide you through the process of connecting the S2100 LoRaWAN Data Logger with an RS485 Air Temperature, Humidity, and Barometric Pressure Sensor, enabling you to create a robust, industrial-grade LoRaWAN wireless sensor that can be used commercially in just five minutes.

## Get Started

### Preparation

#### Hardware

##### Materials required

<table align="center">
 <tr>
     <th>SenseCAP S2100 Data Logger</th>
      <th>RS485 RS485 Air Temperature, Humidity and Barometric Pressure Sensor</th>
    <th>Cross screwdriver</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/101991101/image1.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## 1. Prepare data logger, RS485 Air Temperature, Humidity and Barometric Pressure Sensor, gateway, and tools

1. **Data logger**: It is a LoRaWAN converter that converts MODBUS RS485/Analog/GPIO sensors into LoRa-enabled sensors and therefore transfers data through the LoRaWAN protocol.

2. **RS485 Air Temperature, Humidity and Barometric Pressure Sensor**: This sensor accurately measures air temperature, humidity, and barometric pressure within the ranges of 0-100% RH, -40 to 125°C, and 300-1100 hPa. It is suitable for precise industrial environmental monitoring applications.

3. **Cross screwdriver**: Used to assemble the sensor probe.

4. **Gateway**: The LoRaWAN sensor transmits data to a LoRaWAN gateway, which then transmits it to the cloud server. If you don't have a gateway, there are two options:

- Option 1: Sensors work in areas covered by Helium Network(Check on [Helium Explorer](https://explorer.helium.com/)). Wherever the helium network is available, you can use sensors to transfer data without purchasing a gateway.
- Option 2: Buy a [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. Download the SenseCAP Mate App for configuration:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS&Android</div>

The preparation is done. Let's get started!

### 2. Network Architecture

Let's start with LoRaWAN's networking.
The data logger converts sensor data into LoRa data and uploads the data to the gateway. The gateway uploads the data to the server.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. Connect RS485 Air Temperature, Humidity and Barometric Pressure Sensor

- **Step 1:** Uncrew the three screws on the data logger

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Step 2:** Remove the bottom cover and take out the inside PCBA until the screw terminals are accessible. You do not need to take out the entire board

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Step 3:** Remove the thread cap by unscrewing in clockwise counter-clockwise direction

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Step 4:** Pass the included cable through the thread cap and the bottom cover

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Step 5:** Connect the wires of the cable into the screw terminal as follows

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Tips**: If you are using another protocol, such as 4-20mA, please refer to the pin table:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Wire sequence of the RS485 Air Temperature, Humidity and Barometric Pressure Sensor:

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image8.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image10.png"/></div>

- **Step 6:** Put back the hardware unit inside the case, close it from bottom cover and screw it back

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Step 7:** Tighten the thread cap and secure the cable in place

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Once all the connections are done for the Ultrasonic Level Sensor and the Data Logger, it should look like below

<div align="center"><img width={500} src="https://files.seeedstudio.com/products/101991101/image9.png"/></div>

### 4. Configure Settings for Data Logger and RS485 Air Temperature, Humidity and Barometric Pressure Sensor Communication

- **Step 1:** Select **S2100 Data Logger** and Click **Setup** on the config page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Step 2:** Press the button and hold for **3** seconds, the green LED will flash at 1s frequency. Then click **Scan** to start scanning the data logger's Bluetooth.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Step 3:** Configure the LoRaWAN and sensor parameters(including RS485 Modbus-RTU command).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### How to import template

- **Step 1:**Please click this template link and choose your browser to download it.
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Step 2:** Tap "➕" in the upper right corner, select "import Template", then select the downloaded file, and the template will be imported.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Step 3:** Click Send and Test the sensor by clicking **Measure**

The distance and temperature of the sensor are obtained successfully!

### 5. Upload the data to SenseCAP Portal and Mate App

- **Step 1:** Go back to the app home page and Data Logger Red LEDs will start blinking for a couple of seconds followed by Green LEDs blinking for a brief amount of time to indicate that the LoRaWAN connection is successful and the data is sent. Alternatively you can click the button on the data logger once, to force this data sending.
Before uploading data, make sure the gateway is working properly or has helium network coverage.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Now we need to add this sensor to SenseCAP platform in order to view the data on the cloud

- **Step 2:** Binding the data logger via scanning the QR code.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Step 3:** Check the data on App and Portal.(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

### 6. Test the sensor in a real environment

Fast application to the outdoor real scene for long-term monitoring.

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image7.png"/></div>

At present, a LoRaWAN sensor has been developed.

## Resources

- **[PDF]** [RS485 Air Temperature, Humidity and Barometric Pressure Sensor](https://files.seeedstudio.com/products/101991101/Air%20Temperature%20&%20Humidity%20&%20Barometric%20Sensor%20User%20Guide%20v1.0.pdf)
- **[PDF]** [SenseCAP S2100 Data Logger User Guide](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

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
