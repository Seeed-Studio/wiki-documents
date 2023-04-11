---
description: Getting Started with Microsoft Azure IoT Central
title: Getting Started with Microsoft Azure IoT Central
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Connect-Wio-Terminal-to-Azure-IoT-Central
last_update:
  date: 1/12/2023
  author: shuxu hu
---
# Connect Wio Terminal to Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

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

## Introduction

In this tutorial, we will walk you through the process of connecting the Wio Terminal to Microsoft Azure IoT Central and send telemetry data from the onboard sensors/ hardware on the Wio Terminal such as the 3-axis accelerometer, light sensor, 3 buttons to Microsoft Azure IoT Central. Then you will be able to visualize the sensor data on interactive dashboards. Also you will be able to use Azure IoT Central to control hardware such as beeping the onboard buzzer on the Wio Terminal. Microsoft Azure IoT Central supports HTTP, MQTT and AMQP protocols for communication, but, however we will be using the MQTT protocol in this tutorial.

### What is Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) is Microsoft's public cloud computing platform. You can use Microsoft Azure to build, test, deploy, and manage applications and services through Microsoft-managed data centers.

Also, it provides a range of cloud services, including compute, analytics, storage and networking. Microsoft Azure provides software as a service (SaaS), platform as a service (PaaS), Infrastructure as a service (IaaS) and serverless. Finally, it supports many different programming languages, tools and frameworks.

### What is Microsoft Azure IoT?

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) is a collection of Microsoft-managed cloud services that connect, monitor, and control billions of IoT assets. It includes security and operating systems for devices and equipment, along with data and analytics that help businesses to build, deploy and manage IoT applications.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### What is Microsoft Azure IoT Central?

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) is a fully managed global IoT SaaS (software as a service) solution that makes it easy to connect, monitor and manage your IoT assets at scale. It is highly secure, scales with your business as it grows, ensures that your investments are repeatable and integrates with your existing business apps. It also bridges the gap between your business applications and IoT data. Finally it offers centralized management to reconfigure and update your devices.

### What is IoT Plug and Play?

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) enables solutions builders to integrate smart devices with their solutions without any manual configuration. At the core of IoT Plug and Play, is a device model that a device uses to advertise its capabilities to an IoT Plug and Play-enabled application. It contains:

- Properties: represents the read-only or writable state of a device or other entity
- Telemetry: data sent by a device
- Commands: describes a function or operation that can be done on a device

IoT Plug and Play certified devices eliminate the hassle of configuring devices in Azure IoT Central, such as creating templates and adding features and interfaces.

### IoT Plug and Play Certified Devices

IoT Plug and Play Certified Devices are devices listed in the [Azure Certified Device Catalog](https://devicecatalog.azure.com) with the IoT Plug and Play badge.

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) is an IoT Plug and Play Certified Device.

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

To be IoT Plug and Play Certified, you will need to clear a few criteria, one of which is to publish a DTDL (Digital Twins Definition Language) model that defines the capabilities of the device to [Azure/ iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) on GitHub.

This allows cloud services that use IoT Plug and Play Certified Devices to learn about device capabilities from this repository.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Connecting Wio Terminal to Microsoft Azure IoT Central via MQTT

As explained before, we will be using MQTT for the communication between the Wio Terminal and Microsoft Azure IoT Central. However, you may use the HTTP bridge as well, if that is your requirement.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Microsoft Azure IoT Central Set Up

First, you need to visit Microsoft Azure IoT Central, log in to your Microsoft account and create a new application for your project.

**Step 1.** Log in to Azure IoT Central.

Please go to the official [Azure IoT Central](https://apps.azureiotcentral.com/home) website, click **Build** from the navigation menu on the left, and click **Custom apps**.

If you are not already logged into Azure IoT Central, you will be asked to complete a registration/login at this point.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**Step 2.** Fill in **Application name** and choose **Standard 0** under the **Pricing plan**. Application URL will be created automatically when you fill in application name. In this example, we will accomplish this task at minimal cost.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
If you are a new user of Azure IoT Central, we recommend that you select **Free** as this will not consume your fees.
:::
    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**Step 3.** Create a Device template

Please create a new device template by clicking on **Device templates** in the left-hand menu bar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

Please select **Wio Terminal** as our template.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

Then just click on **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

Then, a ready-made template is created.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**Step 5.** Create a Device

Click on **Devices -> Seeed Wio Terminal** under the left menu bar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

Click on **New**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

Click on the **Create** button to complete the creation of the device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

Once you have created the device, you will see the device we have just created under **Device**, please tap into the device and click on the **Connect** button in the top left corner.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

Here we need the information there.

```
ID scope
Device ID
Primary key
```

Please make a note of this information, which we will use in the next steps.

### Set Up Wio Terminal

**Step 1.** Download the firmware to your computer

Our second firmware release, SenseCraft, will support Azure IoT Central in the easiest way possible.

Under the **Latest release**, click on **SenseCraft-vx.x.uf2** to download the .uf2 file.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Step 2.** Upload the firmware to Wio Terminal

Connect the Wio Terminal to PC and turn in ON, Enter **Bootloader Mode** by sliding down the power switch further away from "ON" position, release, slide again and release.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Once Wio Terminal is in the Bootloader mode, the blue LED will start to breathe in a way that is different from blinking.
:::
Open File Explorer on your PC and you will see a new external drive, named **Arduino**, drag the previously downloaded **.uf2 file** into this **Arduino drive**.

Now we have successfully uploaded the firmware into the Wio Terminal.

**Step 3.** Wi-Fi and Azure IoT Configuration

When we use the **SenseCraft** firmware, a USB stick appears as soon as the Wio Terminal is connected to the computer.

:::note
This means that the USB stick appears when the Wio Terminal is connected to the computer, **without the need to toggle the side button twice extra**!
:::
At this point, there will be a **config.txt** file inside the USB stick. Please open it with a suitable txt editor and add the required configuration to it.

```
SSID=WiFi_Name                        // Put your Wifi name here
PASSWORD=WiFi_Password                // Put your wifi password here          
ID_SCOPE=Default_ID_Scope             // Put your ID Scope here
DEVICE_ID=Device_ID                   // Put your device ID here
PRIMARY_KEY=Primary_Key               // Put your device Primary key here
```

Once you have completed the above, please save it. Restart Wio Terminal to take effect.

### Display Telemetry Data on Microsoft Azure IoT Central

**Step 1.** Wio Terminal connect to WiFi

Enter **Network** tab and select **WiFi**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

Now it will wait for the configuration to load.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

Once the loaded WiFi configuration is picked up, it will first connect with the WiFi network and then with the Azure IoT Central. If the connection with Azure IoT Central is successful, it will display the following.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**Step 2.** Parsing Wio Terminal data

We need to change the template style displayed in the **template**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

In order to adapt the data type of SenseCraft and achieve a suitable data presentation, here we need to fill in the raw data according to the table below.

| Display name    | Name       | Capability type   | Semantic type   |
|-----------------|------------|-------------------|-----------------|
| Acceleration X  | IMU0       | Telemetry         | None            |
| Acceleration Y  | IMU1       | Telemetry         | None            |
| Acceleration Z  | IMU2       | Telemetry         | None            |
| Light           | Light      | Telemetry         | None            |
| Sound           | Sound      | Telemetry         | None            |
| Temperature     | Temp_Humi0 | Telemetry         | None            |
| Humidity        | Temp_Humi1 | Telemetry         | None            |
| CO2             | CO2_VOC0   | Telemetry         | None            |
| VOC             | CO2_VOC1   | Telemetry         | None            |
| Soil Moisture   | Soil       | Telemetry         | None            |
| Vision AI 1     | Vision0    | Telemetry         | None            |
| Vision AI 2     | Vision1    | Telemetry         | None            |
| Vision AI 3     | Vision2    | Telemetry         | None            |
| Vision AI 4     | Vision3    | Telemetry         | None            |
| Vision AI 5     | Vision4    | Telemetry         | None            |
| Vision AI 6     | Vision5    | Telemetry         | None            |
| Vision AI 7     | Vision6    | Telemetry         | None            |
| Vision AI 8     | Vision7    | Telemetry         | None            |
| Vision AI 9     | Vision8    | Telemetry         | None            |
| Vision AI 10    | Vision9    | Telemetry         | None            |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/68.png" /></div>

Once you have completed the form, please click the **Save** button.

Click on **Overview** on the left navigation menu.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

Collapse **select a telemetry** drop-down menu and select the telemetry that you want to visualize.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

Click **Add tile** and you will see the tile added into the Azure IoT Central Dashboard.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/71.png" /></div>

**Note:** You can resize or change the visualization of the tiles according to your preference

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_azure_central/19.png" /></div>

Click **Save** & Click **Publish**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/27.png" /></div>

Open Azure IoT Central Dashboard that you visited before. Click on **Devices** from the left navigation menu. You will see **Seeed Wio Terminal** appear under Devices. Click on it.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/14.png" /></div>

Click on the entry with the **device name** that you configured before.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/23.png" /></div>

You can also click on the **Raw data** tab to view all the telemetry data in real-time.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/28.png" /></div>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
