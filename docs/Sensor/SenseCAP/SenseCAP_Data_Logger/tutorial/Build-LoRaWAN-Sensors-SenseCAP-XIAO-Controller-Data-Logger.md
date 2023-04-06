---
description: Build LoRaWAN Sensors with SenseCAP S2110 Sensor Builder and SenseCAP Data Logger
title: Build LoRaWAN Sensors with SenseCAP S2110 Sensor Builder and SenseCAP Data Logger
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger
last_update:
  date: 3/23/2023
  author: Yvonne
---

# Build LoRaWAN Sensors with SenseCAP S2110 Sensor Builder and SenseCAP Data Logger

SenseCAP S2110 Sensor Builder is an open-source tool to build RS485 sensors with 500+ Grove sensors. It also enables developers to build a custom industrial-grade LoRaWAN sensor connecting to SenseCAP Cloud with SenseCAP Data Logger.


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"/></div>

It has Seeed Studio XIAO RP2040 as the dual-core ARM Cortex M0+ processor, and has one Grove and one RS485 connector, enabling developers to connect with 500+ Grove sensors and various MODBUS RS485 sensors to develop custom industrial-grade MODBUS RS485 sensors for various IoT applications.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/107.jpg"/></div>

For the LoRaWAN application, developers could easily connect it with a [SenseCAP LoRaWAN Data Logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)(*Grove sensors and data logger are not included in the product, learn more on the bundle kit [here](https://www.seeedstudio.com/sensecap-outdoor-lorawan-sensor-kit-based-on-grove-p-5503.html)) to transfer the data to SenseCAP Cloud, which only takes a 5-minute simple BLE configuration in SenseCAP Mate App. Clear data results and further analysis could be easily obtained from SenseCAP Dashboard and SenseCAP Mate App. IoT platforms such as Helium, TTN, LORIOT, etc. are also supported.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-106.jpg"/></div>

The product comes with an IP66 industrial-grade enclosure and also the mounting pads and screws set, which enables you to deploy the sensor outdoors easily and safely.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/108.png"/></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

## Features

- **Easily build Modbus RS485 Industrial-grade Sensors:** With open-source source code and IP66 enclosure, easily convert over 500+ existing Grove sensors to Modbus RS485 industrial-grade sensors. 6 of the most popular environmental Grove sensors are already fully compatible with native firmware with more to come
- **SenseCAP Data Logger and IoT Platform Compatible:** Convert to a SenseCAP LoRaWAN® sensor with SenseCAP Data Logger and take advantage of quick and easy set-up in just 5-minutes with SenseCAP Mate APP
- **Supports Third-party Data Loggers and IoT Platforms:** Besides SenseCAP Data Logger, developers could connect to other data loggers that support Modbus RS485 protocol and third-party IoT platforms
- **Ready-to-deploy Industrial-grade Outdoor Enclosure:** IP66 waterproof rate outdoor enclosure with window and waterproof ventilation hole reserved for light and gas sensors, also comes with a customized mounting panel, suitable for pole and wall installation
- **Powered by Seeed Studio XIAO RP2040:** Take advantage of the powerful Seeed Studio XIAO RP2040 dual-core ARM M0+ processor and vast open-source resources to customize your own sensor. Easily upload code via USB-C port

## Get Started

### Preparation

1.LoRaWAN network coverage

Check whether you are within LoRaWAN network coverage of Helium or TTN (The Things Network). If you do not have coverage, you can use any gateway powered by Helium/ TTN to send the sensor data to the cloud. However, this wiki focuses on sending the sensor data to Sensecap platform. And to do that, you need to have either a [SenseCAP Outdoor LoRaWAN Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) for TTN or [SenseCAP M1 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html) or [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html) or any other Helium-enabled gateway for Helium.

2.SenseCAP S2110 Sensor Builder x 1

3.SenseCAP Data Logger x 1

4.Grove Sensor x 1

Currently, SenseCAP S2110 Sensor Builder supports the following Grove modules out-of-the-box to communicate with SenseCAP Data Logger and send the sensor data to the SenseCAP platform via LoRa.

- [Grove - Temperature and Barometer Sensor (BMP280)](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)
- [Grove - Oxygen Sensor (MIX8410)](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)
- [Grove - CO2 & Temperature & Humidity Sensor - SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)
- [Grove - Sunlight Sensor - SI1151](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)
- [Grove - Light Sensor v1.2 - LS06-S phototransistor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - Flame Sensor](https://www.seeedstudio.com/Grove-Flame-Sensor.html)
- [Grove - Gas Sensor(BME688)](https://www.seeedstudio.com/Grove-Gas-Sensor-BME688-p-5478.html)
- [Grove - Multichannel Gas Sensor v2](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html?queryID=e92bca5d79e17a6d5bf1447be36e2ee2&objectID=4569&indexName=bazaar_retailer_products)
- [Grove - TDS Sensor/Meter For Water Quality (Total Dissolved Solids)](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html?queryID=9f138cfc508f141092493577c1ca83bb&objectID=4400&indexName=bazaar_retailer_products)
- [Grove - UV Sensor](https://www.seeedstudio.com/Grove-UV-Sensor.html?queryID=07ecb93f63b4035df7dfa9aea8b1e498&objectID=1345&indexName=bazaar_retailer_products)
- [Grove - Ultrasonic Distance Sensor](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html?queryID=ebe18a5e13611be3b60f176e7bfabde7&objectID=2281&indexName=bazaar_retailer_products)
- [Grove - Turbidity Sensor](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html?queryID=42f9c89339bce9fbff617e5c8a0328eb&objectID=4399&indexName=bazaar_retailer_products)

We will add support to more Grove sensors in the near future. So stay tuned! We have made the source code for SenseCAP S2110 Sensor Builder open-source so that users could develop their own Grove sensors as well!

:::tip
If you would like to Build a LoRaWAN sensor with the Grove sensors which are not currently supported in the above list or build with third-party sensors with Grove or RS485 connector, please refer to the guidance here: https://github.com/Seeed-Studio/Seeed_Arduino_S2110 
:::

### Connect Grove Sensor to SenseCAP S2110 Sensor Builder

- **Step 1:** Unscrew the four screws on the SenseCAP S2110 Sensor Builder lid and open the lid

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/84.jpg"/></div>

- **Step 2:** Remove the thread cap

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/78.jpg"/></div>

- **Step 3:** Pass the included cable through the cap into the SenseCAP S2110 Sensor Builder

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/79.jpg"/></div>

- **Step 4:** Connect the wires of the cable into the screw terminal as follows

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/86.jpg"/></div>

- **Step 5:** Place a Grove sensor inside the SenseCAP S2110 Sensor Builder and screw it

Grove with 2 holes (ex: Grove - Light Sensor v1.2)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/80.jpg"/></div>

Grove with 3 holes (Grove Temperature and Barometer Sensor (BMP280))

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/81.jpg"/></div>

- **Step 6:** Connect Grove cable to Grove sensor and Grove connector on SenseCAP S2110 Sensor Builder board

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/85.jpg"/></div>

- **Step 7:** Close lid and screw it back

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/82.jpg"/></div>

- **Step 8:** Tighten the thread cap and secure in place

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/83.jpg"/></div>

### Connect SenseCAP S2110 Sensor Builder to SenseCAP Data Logger

- **Step 1:** Uncrew the three screws on the data logger

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Step 2:** Remove the bottom cover and take out the inside PCBA until the screw terminals are accessible. You do not need to take out the entire board

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Step 3:** Remove the thread cap by unscrewing in clockwise counter-clockwise direction

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Step 4:** Pass the included cable through the thread cap and the bottom cover

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Step 5:** Connect the wires of the cable into the screw terminal as follows

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/74.png"/></div>

**Note:** Since there are 5 wires inside the cable and we are only using 4, it is better to tape the extra wire to avoid accidental contacts with the screw terminals

- **Step 6:** Put back the hardware unit inside the case, close it from bottom cover and screw it back

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Step 7:** Tighten the thread cap and secure the cable in place

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Once all the connections are done for the SenseCAP S2110 Sensor Builder and the Data Logger, it should look like below

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/93.jpg"/></div>

### Connect to SenseCAP Cloud via SenseCAP Mate App

#### Download, Install SenseCAP Mate App and Log In

- **Step 1:** Download and install **SenseCAP Mate App** on your mobile phone according to your OS

  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

- **Step 2:** Open the SenseCAP Mate APP and sign in to your SenseCAP account by entering your registered **email and password** and clicking **Login** buttons

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/1.jpg"/></div>

**Note:** Keep the **Server Location** as **Global**, which is the default

If it is your first time to use the SenseCAP platform, please register an account first by clicking **Register** button and login afterwards with the newly created account

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/2.jpg"/></div>

**Note:** The fields with *are required fields, and those without* can be filled in optionally.

#### Update Data Logger Firmware

- **Step 1:** Under **Config** page, select **S2100 Data Logger**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/4.jpg"/></div>

- **Step 2:** Press and hold the configuration button on the SenseCAP Data Logger for 3 seconds to enter bluetooth pairing mode

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/96.jpg"/></div>

If it enters bluetooth pairing mode, a green LED will start to blink

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/99.gif"/></div>

- **Step 3:** Click **Update**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/5.jpg"/></div>

- **Step 4:** Now it will prompt you to turn on location services. Click **GO TO** to open the location services page on your phone

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/6.jpg"/></div>

- **Step 5:** Turn on location services. It will look as follows for Android

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/9.jpg"/></div>

- **Step 6:** Come back to SenseCAP Mate App and click **Scan**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/10.jpg"/></div>

Now it will start scanning for nearby SenseCAP Data Loggers

- **Step 7:** Click on the discovered device

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/11.jpg"/></div>

- **Step 8:** If an update is available, click **Get Updates** to update to the latest version. After updating to the latest version or if it says **The device is already running the latest firmware**, go back to the previous set up page

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12.jpg"/></div>

#### Configure Settings for Data Logger and SenseCAP S2110 Sensor Builder Communication

- **Step 1:** Enter **bluetooth pairing mode** on the Data Logger again and click **Setup**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/13.jpg"/></div>

- **Step 2:** Click on the device found

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/14.jpg"/></div>

It will open a page with useful information under **General**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/15.jpg"/></div>

- **Step 3:** Go to **Setting** page and under **Basic Setting**, choose the platform either as **SenseCAP for the Things Network** or **SenseCAP for Helium**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/16.jpg"/></div>

**Note:** You can choose others as well, but in that case, you cannot use SenseCAP platform

- **Step 4:** Choose the **Frequency Plan**, **Uplink interval** and **Packet Policy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/17.jpg"/></div>

**Note:** The default Packet Policy is **2C+1N** and the below table explains more about it and others

| Parameter | Description |
|---|---|
| 2C+1N (default) | 2C+1N (2 confirm packets and 1 none-confirm) is the best  strategy, the mode can minimize the packet loss rate, however  the device will consume the most data packet in TTN, or date  credits in Helium network. |
| 1C | 1C (1 confirm) the device will sleep after get 1 received confirm  packet from server. |
| 1N | 1N (1 none-confirm) the device only send packet and then start to  sleep, no matter the server received the data or not. |

- **Step 5:** Under Sensor Setting, fill as follows

| Parameter | Description |
|---|:---:|
| Protocol | RS485 Modbus RTU |
| Baud Rate | Baud rate of communication with the sensor.   Select **9600** here. |
| Modbus Address | Slave address of the sensor. The range is 1 to 247. Enter **1** here. |
| Power Type | Periodic power: Power the sensor before data collection, and power  off the sensor after data collection. This mode reduces power  consumption and increases battery life. Always-on: Select this mode when the sensor needs constant  power supply. Generally, an external 12V DC power supply is used.  If it is powered only by batteries, it may not work for long. Select **periodic power** here. |
| Power Voltage | Select the supply voltage to the sensor. It supports 3V/5V/12V.  Select **5V** here. |
| Sensor Warm-up Time | The warm-up time denotes the amount of time it takes for the  sensor to attain its highest accuracy or performance level once the  voltage supply has been applied. This depends from sensor to sensor. Only the **Grove - Oxygen Sensor (MIX8410)** needs a warm-up time of **5s**, which means you need to enter **5000** inside the box. The other Grove sensors supported by the SenseCAP S2110 Sensor Builder at the moment only need **0ms** warm-up time. |
| Response Timeout | After Data Logger initiates a data read request to the sensor, it  waits for the timeout time for a response. If this time is exceeded,  the command will be resent. Enter **1** here, which means **100ms**. |
| Startup Time | The length of time the sensor can communicate from powered -on  to communicating with Modbus. Enter **20** here, which means **2000ms=2s** |

A filled settings page can be seen below

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/18.jpg"/></div>

- **Step 6:** For the **Measurement Number**, refer to the table below according to the specific sensor.

<table>
<thead>
  <tr>
    <th>Grove Sensor Name</th>
    <th>Measure Number</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Light Sensor v1.2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Flame Sensor</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove - Sunlight sensor (SI1151)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove Temperature and Barometer Sensor (BMP280)</td>
    <td>3</td>
  </tr>
</tbody>
</table>

**Note:** SenseCAP Data Logger can collect 0 to 10 measurements in RS485 mode.

- **Step 7:** After specifying the **Measurement Number**, you need to fill the **Measurement Settings**. Here we will choose a **Grove - Light Sensor v1.2**. For this sensor, we only need **one measurement**, which is the light level. Select **1** for the **Measurement Number** and click **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/19.jpg"/></div>

- **Step 8:** Under **Measurement Setting** click **Measurement1**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/20.jpg"/></div>

If you use the **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** we need **three measurements**, which is the **temprature, humidity and C02 levels**. Select **3** for the **Measurement Number** and click **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/23.jpg"/></div>

Also, here you need to configure the 3 measurements separately

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/24.jpg"/></div>

- **Step 9:** For the **Register Address**, refer to the table below and enter the **decimal value** of the **register address**

<table>
<thead>
  <tr>
    <th>Grove Sensor Name</th>
    <th>Register Name</th>
    <th>Register Address<br />(Hexadecimal)</th>
    <th>Register Address<br />(Decimal)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
    <td>Temperature</td>
    <td>0x0004</td>
    <td>04</td>
  </tr>
  <tr>
    <td>Humidity</td>
    <td>0x0006</td>
    <td>06</td>
  </tr>
  <tr>
    <td>CO2</td>
    <td>0x0008</td>
    <td>08</td>
  </tr>
  <tr>
    <td>Grove - Light Sensor v1.2</td>
    <td>Light</td>
    <td>0x000A</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Grove - Flame Sensor</td>
    <td>Flame</td>
    <td>0x000C</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>Oxygen</td>
    <td>0x000E</td>
    <td>14</td>
  </tr>
  <tr>
    <td rowspan="3">Grove - Sunlight sensor (SI1151)</td>
    <td>Light Intensity</td>
    <td>0x0010</td>
    <td>16</td>
  </tr>
  <tr>
    <td>Visible Light</td>
    <td>0x0012</td>
    <td>18</td>
  </tr>
  <tr>
    <td>UV</td>
    <td>0x0014</td>
    <td>20</td>
  </tr>
  <tr>
    <td rowspan="3">Grove Temperature and Barometer Sensor (BMP280)</td>
    <td>Barometric Temperature</td>
    <td>0x0016</td>
    <td>22</td>
  </tr>
  <tr>
    <td>Atmospheric Pressure</td>
    <td>0x0018</td>
    <td>24</td>
  </tr>
  <tr>
    <td>Height</td>
    <td>0x001A</td>
    <td>26</td>
  </tr>
  <tr>
     <td rowspan="4">Grove - Temperature Humidity Pressure Gas Sensor(BME680)</td>
     <td>Temperature</td>
     <td>0x001C</td>
     <td>28</td>
  </tr>
  <tr>
    <td>Atmospheric Pressure</td>
    <td>0x001E</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Humidity</td>
    <td>0x0020</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Air Quality(VOC)</td>
    <td>0x0022</td>
    <td>34</td>
  </tr>
  <tr>
    <td rowspan="4">Grove - Gas Sensor V2(Multichannel)</td>
    <td>N02</td>
    <td>0x0024</td>
    <td>36</td>
  </tr>
  <tr>
    <td>C2H50H</td>
    <td>0x0026</td>
    <td>38</td>
  </tr>
  <tr>
    <td>VOC</td>
    <td>0x0028</td>
    <td>40</td>
  </tr>
  <tr>
    <td>CO</td>
    <td>0x002A</td>
    <td>42</td>
  </tr>
  <tr>
    <td>Grove - UV Sensor</td>
    <td>UV Intensity</td>
    <td>0x002C</td>
    <td>44</td>
  </tr>
  <tr>
    <td>Grove - Turbidity Sensor Meter V1.0</td>
    <td>Turbidity</td>
    <td>0x002E</td>
    <td>46</td>
  </tr>
  <tr>
    <td>Grove - TDS Sensor</td>
    <td>TDS</td>
    <td>0x0030</td>
    <td>48</td>
  </tr>
  <tr>
    <td>Grove - Ultrasonic Ranger</td>
    <td>Distance</td>
    <td>0x0032</td>
    <td>50</td>
  </tr>
</tbody>
</table>

A filled register address for the **Grove - Light Sensor v1.2** can be seen below

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/21.jpg"/></div>

Filled register addresses for the **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** can be seen below

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/26.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/28.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/29.jpg"/></div>

- **Step 10:** The rest of the settings are common to all the Grove sensors and fill them as follows

| Function Code | Modbus function code. Select **03** here |
|---|---|
| Data Type | The data type determines the number of registers read from the  sensor and how the data should parse the value.  Select **Signed 32bit integer, 0xABCD** here. |
| Precision | Precision of the value. You can choose the decimal place of the  measurement value. If 1 is selected, one decimal place is reserved. Select **2, #.##** here. |
| Y= Ax + B | “Y”: It is the value of Data Logger will upload.  “x”: It is the original current value.  Factory A: Custom values that can be scaled up or down by  multiples of the “x”.  Factory B: A custom value that increments or diminishes the value of the “x”. By setting the values of A and B, you can calculate the desired value. If only raw values need to be uploaded, set A=1 and B=0. Here we set **Factory A is 0.001 and Factory B is 0**. |
| Write Strategy | This function is enabled only for some special sensors and is  generally disabled by default After reading the value of the register, special instructions can be  issued to the sensor, such as the instruction to empty the register  after reading register 0. None: Off by default. After Read: Send the RS485 command to sensor after reading the  register. On New Data: Send the RS485 command to sensor every 24  hours. We don’t need to write strategy so we select **None** here |

A filled **Measurement Setting** page can be seen below

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/30.jpg"/></div>

- **Step 11:** Click **Confirm** to save the changes and it will go back to the **Setting** page

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/32.jpg"/></div>

- **Step 12:** Click **Send** to send the changes to the Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/33.jpg"/></div>

#### Test and View the Sensor Data Locally

Now we need to test whether the SenseCAP S2110 Sensor Builder is properly sending the sensor data to the Data Logger.

- **Step 1:** Go to General and click **Measure**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/34.jpg"/></div>

Now it will display the sensor value and you will see the LEDs of the Seeed Studio XIAO RP2040 on the SenseCAP S2110 Sensor Builder lighting up

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

The below is for **Grove - Oxygen Sensor (MIX8410)**. This indicates oxygen concentration of air which is 21.36%.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/35.jpg"/></div>

The below is for **Grove Temperature and Barometer Sensor (BMP280)**. This indicates barometric temperature as 30.55°C, atmospheric pressure as 101401Pa, and height as 53.08m.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/36.jpg"/></div>

#### Add Newly Created Sensor to SenseCAP Platform

- **Step 1:** Go back to the app home page and Data Logger Red LEDs will start blinking for a couple of seconds followed by Green LEDs blinking for a brief amount of time to indicate that the LoRaWAN connection is successful and the data is sent. Alternatively you can click the button on the data logger once, to force this data sending.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

You will also see the LEDs of the Seeed Studio XIAO RP2040 on the SenseCAP S2110 Sensor Builder lighting up

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

Now we need to add this sensor to SenseCAP platform in order to view the data on the cloud

- **Step 2:** Go to **Device** page, click the **+** symbol and click **Add device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/39.jpg"/></div>

- **Step 3:** Scan the QR code located on the Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/40.jpg"/></div>

- **Step 4:** Enter a **Device name** according to the connected Grove sensor and click **Next**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/41.jpg"/></div>

- **Step 5:** Enter a **Device Location** and click **Confirm**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/42.jpg"/></div>

### Visualize Sensor Data on SenseCAP Mate App

Now you will see the Data Logger online on the SenseCAP Mate App

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/43.jpg"/></div>

Click on it to display the sensor values

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/45.jpg"/></div>

Below is for **Grove Temperature and Barometer Sensor (BMP280)**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/44.jpg"/></div>

### Visualize Sensor Data on SenseCAP Dashboard

You can also use the SenseCAP Web Dashboard to visualize the sensor data.

- **Step 1:** Visit sensecap.seeed.cc and sign in to your SenseCAP account that you created inside the SenseCAP Mate App before

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/88.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/87.png"/></div>

- **Step 2:** Click **Sensor Node** and select the sensor that we created before inside the SenseCAP Mate App

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/89.png"/></div>

- **Step 3:** Click **Data** tab and you will see all sensor data displayed from the connected Grove sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/90.jpg"/></div>

## Use as XIAO Development Board with RS485

Since there is a Seeed Studio XIAO inside, with a Grove connector as well, you can use this SenseCAP S2110 Sensor Builder as a development device just as you would normally use a XIAO with a Grove module. There is an added bonus here as well and that is, you get RS485 connectivity to add more RS485-enabled sensors to XIAO and expand your project ideas. We already have a lot of content around tinkering with XIAO and you can check [this wiki](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino) to learn more.

## Build Your Own LoRaWAN Grove Sensor With SenseCAP S2110 Sensor Builder and Data Logger

If you want to add more Grove sensors to the SenseCAP S2110 Sensor Builder and send the sensor data to the cloud with the help of the Data Logger, you can explore the [SenseCAP S2110 Sensor Builder source code](https://github.com/Seeed-Studio/Seeed_Arduino_S2110) and start tinkering by yourself!

## Flash Factory Firmware into SenseCAP S2110 Sensor Builder

Now we will go through the steps of flashing firmware into SenseCAP S2110 Sensor Builder. Here we will flash the initial factory firmware, download [the latest uf2 firmware](https://github.com/Seeed-Studio/Seeed_Arduino_S2110/releases) before starting.

- **Step 1:** Unscrew the four screws on the SenseCAP S2110 Sensor Builder lid to open the lid and unscrew the PG connector (with a coin)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/92.jpg"/></div>

- **Step 2:** If you have already made the connection between the SenseCAP S2110 Sensor Builder and the Data Logger with the 4 wires, it is recommended to remove the red wire which connects to the 5V pin of the SenseCAP S2110 Sensor Builder

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/97.jpg"/></div>

- **Step 3:** Connect one end of a USB Type-C cable to the SenseCAP S2110 Sensor Builder. While holding down the **B** button, connect the other end of the USB cable to the PC to enter mass storage mode.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/98.jpg"/></div>

- **Step 4:** If the **RPI-RP2** disk is shown on the PC and the Power LED on the XIAO is on, the connection is complete.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/91.png"/></div>

- **Step 5:** Copy sensorBuilder.ino.uf2 firmware file into the **RPI-RP2** disk.

The **RPI-RP2** disk will disappear once the firmware flashing is complete.

## Resources

- **[GitHub]** [SenseCAP S2110 Sensor Builder source code](https://github.com/Seeed-Studio/Seeed_Arduino_S2110)

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
