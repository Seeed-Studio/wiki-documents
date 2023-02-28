---
description: Connect to Helium
title: Connect to Helium
keywords:
- SenseCap
image: https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4
slug: /Connecting-to-Helium
last_update:
  date: 1/13/2023
  author: shuxu hu
---

# Connecting to Helium

In this chapter, we will go over the basic use of the Helium platform and how to relay sensor data out through the Helium platform.

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div>
  <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
        </td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
        </td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
        </td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Soil Moisture &amp; Temp</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Soil Moisture &amp; Temp &amp; EC</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 Weather Station</strong></a></td>
      </tr>
    </tbody></table>
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/28.png" /></div>
  If you are completely inexperienced with Helium, we recommend that you read about the Helium console first.
  <table align="center">
    <tbody><tr>
        <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium Introduction</strong><br /><br />In this chapter, we will introduce the Helium console controls that we use to get a first impression of the Helium console.<br /><br /><a href="https://wiki.seeedstudio.com/Helium-Introduction">Let's get started &gt;</a></td>
      </tr>
    </tbody></table>
</div>

:::note
Before starting this section, make sure you have Helium LoRaWAN® coverage around your deployment environment, otherwise you will not be able to add devices to Helium via LoRa®. For more details, please read [Helium LoRaWAN®](https://www.helium.com/lorawan).
:::

## <span id="jump1">Adding Grove - Wio-E5 devices to the Helium console</span>

To relay sensor data out of Helium, first step we need to add Grove - Wio-E5 to the Helium console to build the connection between the local device and the Helium platform.

To add Grove - Wio-E5, go to **Devices** and click the **+** Add Device icon on the top right of the window.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

As described above for the Helium console device, a triplet of data -- **DevEUI**, **AppEUI**, and **AppKey** is automatically generated at this point.

We'll start by filling in the name of the device, here I'll name it **lora wio terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/129.png" /></div>

:::note
Please download the necessary environment for Arduino and Wio Terminal in [pre-approved content](https://wiki.seeedstudio.com/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation).
:::
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Grove - Wio-E5 allows users to set their own **DevEUI**, **AppEUI**, and **AppKey**, so we can fill in the triad information generated by Helium above under the corresponding columns.

Open the Arduino IDE and copy the following code into the Arduino IDE.

```c
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */

char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";

void setup() {

  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 1500 );  // Open the Serial Monitor to get started or wait for 1.5"

  // init the library, search the LORAE5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("LoRa E5 Init Failed");
    while(1); 
  }

  // Setup the LoRaWan Credentials
  if ( ! lorae5.setup(
        Frequency,     // LoRaWan Radio Zone EU868 here
        deveui,
        appeui,
        appkey
     ) ){
    Serial.println("LoRa E5 Setup Failed");
    while(1);         
  }
}

void loop() {

}
```

:::note
The above code has no restrictions on the Grove - Wio-E5 connection, it will automatically search for the Grove port that the Grove - Wio-E5 is connected to, but the search process may take a while (about a minute or so).
:::
Please select the LoRaWAN® band you wish to use. This band must be consistent with the gateway band you are using. The available frequency bands are in the comments of the code below. In the tutorials we use, the default is the **EU868** band.

```c++
#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
```

:::tip
The **EU868** band is commonly used in the **European** region.<br />
The **US915** band is commonly used in **North America**.<br />
The **AU915** band is commonly used in **Australia** region.
:::
Please replace the Helium generated **DevEUI**, **AppEUI**, and **AppKey** with the code below.

```c
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/89.png" /></div>

Upload the code for Wio Terminal and open the serial port monitor of Arduino IDE, set the baud rate to 9600 and observe the setting.

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/K1100/90.png" /></div>

After making sure the above information is completed, click **Save Device** below to finish adding the device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/130.png" /></div>

Please wait patiently for the device to be added. (This will take about 20 minutes.)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/131.png" /></div>

## Write decoders function for different sensors

In the previous sections, we instructed you on how to use the Wio Terminal to read the values of the individual sensors in the kit. To send the sensor values to Helium via Grove - Wio-E5, it is necessary to use AT commands to do so. The sent data is received by Helium and needs to be decoded before it becomes real data that we can read. This is the reason why we wrote the decoder.

Also, since the data format sent is not uniform, with sensors having integer, float, positive and negative data, etc., the decoder code required for each sensor is different.

<table align="center">
  <tbody><tr>
      <th>Sensor Type</th>
      <th>Download Address</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal built-in light sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-Light-Sensor-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal built-in IMU sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-IMU-Sensor-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Soil Moisture Sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">VOC and eCO2 Gas Sensor (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SGP30-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Temp&amp;Humi Sensor (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Vision AI Module</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">Download</a></td>
    </tr>
  </tbody></table>

### Option 1. Wio Terminal Light Sensor data decoder

We create a new Custom Script and name it Light_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/132.png" /></div>

In the previous section [Wio Terminal Light Sensor](https://wiki.seeedstudio.com/K1100-Light-Sensor-Grove-LoRa-E5/), we used an integer variable `light` to store the light value read by the light sensor and sent that value out using the **send_sync()** function. So, the goal of the decoder we wrote in Helium is to be able to parse this integer data.

The configuration code of its decoder is as follows. Please paste the following code into the code section of Helium. Click the **Save Function** to save this decoder.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/133.png" /></div>

We can input the data of 8-bit light sensor in **SCRIPT VALIDATOR** on the right side to check whether the decoder parses correctly.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/134.png" /></div>

Go back to Flows and connect the device to the decoder.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/180.png" /></div>

### Option 2. Wio Terminal IMU Sensor data decoder

We create a new Custom Script and name it IMU_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/135.png" /></div>

In the previous section [Wio Terminal IMU Sensor](https://wiki.seeedstudio.com/K1100-IMU-Sensor-Grove-LoRa-E5/), We use float numbers `x_values`, `y_values`, `z_values` to store the three axes of data returned by IMU, and multiply these three sets of data by 100 to convert them to integers and then send them together.

In particular, it is important to note that these data can be both positive and negative, so we also need to parse this and restore it to a float number.

The configuration code of its decoder is as follows. Please paste the following code into the code section of Helium. Click the **Save Function** to save this decoder.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    if (value >= 32768) {
      value = 32768 - value;
    }
    value = value/100.0;
    return value;
  }
    
  if (port == 8) {
    decoded.x = transformers(bytes.slice(0,2));
    decoded.y = transformers(bytes.slice(2,4));
    decoded.z = transformers(bytes.slice(4,6));
  }
  
  return decoded;
}
```

We can input the data of 48-bit IMU sensor in **SCRIPT VALIDATOR** on the right side to check whether the decoder parses correctly.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/91.png" /></div>

Go back to Flows and connect the device to the decoder.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/179.png" /></div>

### Option 3. Grove Soil Moisture Sensor data decoder

We create a new Custom Script and name it Soil_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

In the previous section [Grove Soil Moisture Sensor](https://wiki.seeedstudio.com/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/), we used an integer variable `sensorValue` to store the soil moisture value read by the soil moisture sensor and sent that value out using the **send_sync()** function. So, the goal of the decoder we wrote in Helium is to be able to parse this integer data.

The configuration code of its decoder is as follows. Please paste the following code into the code section of Helium. Click the **Save Function** to save this decoder.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

We can input the data of 8-bit soil moisture sensor in **SCRIPT VALIDATOR** on the right side to check whether the decoder parses correctly.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Go back to Flows and connect the device to the decoder.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/186.png" /></div>

### Option 4. Grove VOC and eCO2 Gas Sensor (SGP30) data decoder

We create a new Custom Script and name it SGP30_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/173.png" /></div>

In the previous section [Grove VOC and eCO2 Gas Sensor (SGP30)](https://wiki.seeedstudio.com/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/), We use integer variable `tvoc_ppb` and `co2_eq_ppm` to store the VOC and eCO2 values.

The configuration code of its decoder is as follows. Please paste the following code into the code section of Helium. Click the **Save Function** to save this decoder.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.voc = transformers(bytes.slice(0,2));
    decoded.eco2 = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

We can input the data of 16-bit SGP30 in **SCRIPT VALIDATOR** on the right side to check whether the decoder parses correctly.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/174.png" /></div>

Go back to Flows and connect the device to the decoder.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/181.png" /></div>

### Option 5. Grove Temp&Humi Sensor (SHT40) data decoder

We create a new Custom Script and name it SHT40_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/189.png" /></div>

In the previous section [Grove Temp&Humi Sensor (SHT40)](https://wiki.seeedstudio.com/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/), We use float variables `temperature` and `humidity` to store the temperature and humidity values. And send the two values after they have been enlarged a hundred times into integers.

The configuration code of its decoder is as follows. Please paste the following code into the code section of Helium. Click the **Save Function** to save this decoder.

```java
function Decoder(bytes, port) {

    var decoded = {};

    function transformers(bytes){
        value = bytes[0] * 256 + bytes[1];
        if (value >= 32768) {
        value = 32768 - value;
        }
        value = value/100.0;
        return value;
    }

    if (port == 8) {
        decoded.temp = transformers(bytes.slice(0, 2));
        decoded.humi = transformers(bytes.slice(2, 4));
    }

    return decoded;
}
```

We can input the data of 32-bit SHT40 in **SCRIPT VALIDATOR** on the right side to check whether the decoder parses correctly.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/92.png" /></div>

Go back to Flows and connect the device to the decoder.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/190.png" /></div>

### Option 6. Grove Vision AI Module data decoder

We create a new Custom Script and name it AI_Version_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/195.png" /></div>

In the previous section [Grove Vision AI Module](https://wiki.seeedstudio.com/K1100-Vision-AI-Module-Grove-LoRa-E5/), We use int variables `model` and `confi` to store the type of model identified and its confidence level.

The configuration code of its decoder is as follows. Please paste the following code into the code section of Helium. Click the **Save Function** to save this decoder.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.model = transformers(bytes.slice(0,2));
    decoded.confidence = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

We can input the data of 16-bit Vision AI in **SCRIPT VALIDATOR** on the right side to check whether the decoder parses correctly.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/200.png" /></div>

Go back to Flows and connect the device to the decoder.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/196.png" /></div>

## Upload code send data to Helium

On the different sensor pages we provide detailed codes for uploading data. You can also find the sensor code you want to use in the list below.

:::note
Before using the code provided in this section, please note that the Device EUI, App EUI and App Key in the code are consistent with the device information added by Helium. And check if the frequency band configured for Grove - Wio-E5 is the same as the gateway band in your area or Helium. Failure to do so may result in network access failure.

The code to set the LoRaWAN® band is as follows, and the default setting is EU868 band. (The EU868 band is commonly used in the European region.)
    `#define Frequency DSKLORAE5_ZONE_EU868`
US915 band (The US915 band is commonly used in North America.)
    `#define Frequency DSKLORAE5_ZONE_US915`
AU915 band (The AU915 band is commonly used in Australia Region.)
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::
<table align="center">
  <tbody><tr>
      <th>Sensor Type</th>
      <th>Download Address</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal built-in light sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal built-in IMU sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Soil Moisture Sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">VOC and eCO2 Gas Sensor (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Temp&amp;Humi Sensor (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data">Download</a></td>
    </tr>
    <tr>
      <td align="center">Vision AI Module</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data">Download</a></td>
    </tr>
  </tbody></table>

The above code for sending sensor data can be uploaded directly to the Wio Terminal from the Arduino IDE and run. At that time, please turn on the serial monitor and adjust the baud rate to **9600** to observe the data transmission in real time.

For more details, please return to the section on the use of individual sensors in the reference catalog.

### Real-time data and debug

Once we have the device connected, you can start to view data transfers in the real-time packets and event log.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/93.png" /></div>

:::note
In the latest version of Helium update, Helium no longer gives away 10,000 DATA CREDITS to new users, only **250 DATA CREDITS**. You are free to adjust the frequency of sending data to reduce DC consumption, or purchase it at your own choice.
:::
In the **My Devices** tab, we can click on the **beetle button** on the right side of the screen to see the information about the data received by Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

We can pay special attention to the information in the following sections.

- payload: Information about the data sent to Helium in base64 format.

- port: The port number where the data was received.

:::note
In our code, the port number for sending messages is set to **8**, so in the debug window, all messages about the sensor should be payload for port **8**. For reading and decoding the payload, you can do it with the help of this [decoding website](https://cryptii.com/pipes/base64-to-hex).
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/175.png" /></div>

### Source Code Analysis

If you want to apply the content of this tutorial to your own project development, learning to understand the meaning of the code is essential. Here we will use the code of **SHT40** sensor as an example to explain the logic of code implementation.

At the beginning of the program, we need to prepare the necessary triad information to connect to Helium and to set the frequency of the Wio-E5.

```c++
#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
 
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

Next, a `data_decord()` function is defined. This function converts the sensor values into data frames that can be parsed by the Helium decoder and also comply with the LoRaWAN® protocol, and stores them in the array `data[]`.

In general, to prevent data overflow, we need to consider the maximum and minimum values that the sensor may read. And split into hexadecimal numbers that will not overflow.

```c++
void data_decord(int val_1, int val_2, uint8_t data[4])
{
  int val[] = {val_1, val_2};

  for(int i = 0, j = 0; i < 2; i++, j += 2)
  {
    if(val[i] < 0)
    {
      val[i] = ~val[i] + 1;
      data[j] = val[i] >> 8 | 0x80;
      data[j+1] = val[i] & 0xFF;
    }
    else
    {
      data[j] = val[i] >> 8 & 0xFF;
      data[j+1] = val[i] & 0xFF;
    }
  }
}
```

For the SHT40 sensor, he will have two data, one is temperature data and one is humidity data, and there are positive and negative values, so the negative numbers need to be processed, and also the decimal places need to be processed.

```c++
int_temp = temperature*100;
int_humi = humidity*100;
```

The next step is the initialization of the SHT40 and the initial setup of the Wio-E5. These will all be executed in the `setup()` function.

```c++
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

In the initialization code, `DSKLORAE5_SWSERIAL_WIO_P2` represents the Grove interface on the **right** side of the Wio Terminal, while `DSKLORAE5_SWSERIAL_WIO_P1` represents the Grove interface on the **left** side. For other projects without external sensors, you can also use `DSKLORAE5_SEARCH_WIO` , which will automatically search for the Grove interface your Wio-E5 is connected to.

```c++
lorae5.send_sync(              //Sending the sensor values out
        8,                     // LoRaWan Port
        data,                  // data array
        sizeof(data),          // size of the data
        false,                 // we are not expecting a ack
        7,                     // Spread Factor
        14                     // Tx Power in dBm
       ) 
```

The important role of the `send_sync()` function is to send the sensor values over the LoRaWAN®. The first parameter indicates the channel number to send the data, the second parameter indicates the content of the data sent, and the third parameter indicates the length of the data sent. In general, we only need to focus on the content of the first three parameters.

```c++
delay(15000);
```

The delay at the end of the program determines how often you want to send data. We do not recommend sending at a rate of less than 10 seconds, as sending at such a high frequency may cause the Wio-E5 to work abnormally, and may be recognized by Helium as an abnormal device and blocked because of the high frequency.

To learn more about the code and features of Grove - Wio-E5, please refer to the [GitHub link of the repository](https://github.com/limengdu/Disk91_LoRaE5). A special thanks to [**Paul Pinault (disk91)**](https://github.com/disk91) for writing the library for Grove - Wio-E5.

The above section is a step-by-step guide on how to use the device to connect to Helium and receive data. However, from a practical point of view, the data currently sent to Helium is not human readable. If you have a requirement for data visualization, you can then refer to the following steps to complete the tutorial on integrating Helium into Microsoft Azure IoT hubs, which will take you through the process of displaying the data in a graphical way.

<div>
  <table align="center">
    <tbody><tr>
        <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/azure.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium integrate into Azure IoT Hub</strong><br /><br />This section describes how to configure Microsoft Azure and integrate with Helium to upload data to the Microsoft Azure platform.<br /><br /><a href="https://wiki.seeedstudio.com/Integrate-into-Azure-IoT-Hub">Let's get started &gt;</a></td>
      </tr>
    </tbody></table>
  In addition to this, you can choose more platforms according to your needs.
  <table align="center">
    <tbody><tr>
        <td colSpan={2} bgcolor="8FBC8F"><b>Cloud Platform Section</b></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/Google-Sheets.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium integrate into Google Sheets</strong><br /><br />This section introduces the use of Google Forms in Helium integration. and using Google Forms to store sensor data.<br /><br /><a href="https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization">Jump to chapter &gt;</a></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/AWS.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Helium integrate into AWS IOT Core</strong><br /><br />This section describes how to visualize the data information received by Microsoft Azure using the free Web APP integration.<br /><br /><a href="https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization">Jump to chapter &gt;</a></td>
      </tr>
    </tbody></table>
</div>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
