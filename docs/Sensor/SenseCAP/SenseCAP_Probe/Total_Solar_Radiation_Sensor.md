---
description: Total Solar Radiation Sensor
title: Total Solar Radiation Sensor
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /total_solar_radiation_sensor
last_update:
  date: 4/23/2025
  author: Leo
---

# Total Solar Radiation Sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

The IP68 RS485 Total Solar Radiation Sensor measures real-time solar total radiation from 300 to 1100 nanometers. It's ideal for environmental monitoring and agriculture. Pair it with the SenseCAP Sensor Hub 4G Data Logger or SenseCAP S2100 LoRaWAN® Data Logger for seamless data collection and management.

## Upgradable to Industrial Sensors

With the SenseCAP S2100 [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), you can easily turn this sensor into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

## Use with S2100 LoRaWAN Data Logger

On this page, we'll guide you through the process of connecting the S2100 LoRaWAN Data Logger with a Total Solar Radiation Sensor, enabling you to create a robust, industrial-grade LoRaWAN wireless sensor that can be used commercially in just five minutes.

### Hardware Preparation

<table align="center">
 <tr>
     <th>SenseCAP S2100 Data Logger</th>
      <th>Total Solar Radiation Sensor</th>
    <th>Cross screwdriver</th>
 </tr>
 <tr>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p></td>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image2.png" alt="pir" width={800} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image3.png" alt="pir" width={800} height="auto" /></p></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**Data logger**: It is a LoRaWAN converter that converts MODBUS RS485/Analog/GPIO sensors into LoRa-enabled sensors and therefore transfers data through the LoRaWAN protocol.

**Total Solar Radiation Sensor**: The total solar radiation sensor utilizes a silicon photodetector that generates a current signal proportional to the intensity of the incident light when light is irradiated and can directly output a measured value in W/㎡.

**Cross screwdriver**: Used to assemble the sensor probe.

**Gateway**: The LoRaWAN sensor transmits data to a LoRaWAN gateway, which then transmits it to the cloud server. If you don't have a gateway, there are two options:

- Option 1: Sensors work in areas covered by Helium Network(Check on [Helium Explorer](https://explorer.helium.com/)). Wherever the helium network is available, you can use sensors to transfer data without purchasing a gateway.
- Option 2: Buy a [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

**Download the SenseCAP Mate App for configuration:**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

The preparation is done. Let's get started!

### 2. Network Architecture

Let's start with LoRaWAN's networking.
The data logger converts sensor data into LoRa data and uploads the data to the gateway. The gateway uploads the data to the server.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### Connect Total Solar Radiation Sensor to SenseCAP Data Logger

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

Wire sequence of the Total Solar Radiation Sensor, Waterproof connector is included by default, in order to connect with S2100, you need to cut off the connector:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **Step 6:** Put back the hardware unit inside the case, close it from bottom cover and screw it back

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Step 7:** Tighten the thread cap and secure the cable in place

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Once all the connections are done for the Total Solar Radiation Sensor and the Data Logger, it should look like below

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### Configure Settings for RS485 Communication

**Step 1:** Select **S2100 Data Logger** and Click **Setup** on the config page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**Step 2:** Press the button and hold for **3** seconds, the green LED will flash at 1s frequency. Then click **Scan** to start scanning the data logger's Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**Step 3:** Configure the LoRaWAN and sensor parameters(including RS485 Modbus-RTU command).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### How to import template

**Step 1:**Please click the following link and choose your browser to download it.[Total Solar Radiation Sensor](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**Step 2:** Tap "➕" in the upper right corner, select "import Template", then select the downloaded file, and the template will be imported.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**Step 3:** Click Send and Test the sensor by clicking **Measure**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

The total solar radiation of the sensor are obtained successfully!

## Resources

- **[PDF]** [Total Solar Radiation Sensor User Manual](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
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
