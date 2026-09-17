---

description: This guide explains how to use EasySkyMesh with Wio Tracker L1 to build low-power IoT sensor networks based on MeshCore.
title: EasySkyMesh IoT Firmware
keywords:
   - EasySkyMesh
   - MeshCore
   - Wio Tracker L1
   - LoRa Mesh
   - MeshCore Sensor
   - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_MeshCore_Device_Low_Power_Consumption_L1_Pro.png
slug: /easyskymesh_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
   date: 9/17/2026
   author: Michelle Huang
createdAt: 2026-09-17
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/easyskymesh_wio_tracker_l1/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) is a community project based on [MeshCore](https://meshcore.io/) that focuses on building low-power firmware. This firmware enables the L1 Pro to achieve a **18-day** battery life while maintaining the MeshCore communication function.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshProject.png" style={{width:900, height:'auto'}}/></div>

EasySkyMesh adds features for **power saving and sensor data collection**. Sensor data can be collected by MeshCore nodes and transmitted through an existing MeshCore network. It is particularly useful for:

* Low-power sensor networks
* Remote monitoring
* Solar-powered deployments
* Environmental monitoring
* Infrastructure monitoring
* IoT prototyping

## EasySkyMesh Features

### Power Saving

The project provides PowerSaving firmware releases with optimizations for different MeshCore boards. EasySkyMesh releases have introduced power-saving features for ESP32 and nRF52-based devices, as well as additional power-management functions for different MeshCore roles.

You can enable PowerSaving through the MeshCore CLI when supported by the firmware:

```text
powersaving on
```

To check the current PowerSaving status:

```text
powersaving
```

### Sensor Support

EasySkyMesh extends MeshCore with sensor support, allowing sensor readings to be collected and transmitted through the existing MeshCore network. The project currently documents support for several common I2C sensors, including:

| Sensor        | Measurement                             | I2C Address |
| ------------- | --------------------------------------- | ----------- |
| AHT10 / AHT20 | Temperature / Humidity                  | `0x38`      |
| BME280        | Temperature / Humidity / Pressure       | `0x76`      |
| BME680        | Temperature / Humidity / Pressure / Gas | `0x76`      |
| BMP280        | Temperature / Pressure                  | `0x76`      |
| SHTC3         | Temperature / Humidity                  | `0x70`      |
| SHT4X         | Temperature / Humidity                  | `0x44`      |
| LPS22HB       | Temperature / Pressure                  | `0x5C`      |
| INA3221       | Voltage / Current / Power               | `0x42`      |
| INA219        | Voltage / Current / Power               | `0x40`      |
| INA260        | Voltage / Current / Power               | `0x41`      |
| INA226        | Voltage / Current / Power               | `0x44`      |
| MLX90614      | Non-contact Temperature                 | `0x5A`      |
| VL53L0X       | Distance                                | `0x29`      |

 Some firmware versions can automatically select the I2C address for sensors such as BME280, BME680, and BMP280.For supported EasySkyMesh versions, the `sensor` CLI command can be used to check the I2C and GPS serial pins:

```text
sensor
```

## Getting Started

### Hardware Preparation

Before flashing the firmware, prepare:

* Wio Tracker L1. [Click here](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) to get one.
* USB Type-C cable
* Computer

Connect the Wio Tracker L1 to your computer using the USB Type-C port.

### Download EasySkyMesh Firmware

Go to the [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases) page. Select a release that supports your board.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshFirmwareDownload.png" style={{width:600, height:'auto'}}/></div>




EasySkyMesh releases may provide different firmware files for different hardware and different upgrade scenarios. For a new installation, the project generally provides a fresh-install firmware image. For an existing installation, use the upgrade firmware when you want to preserve the existing configuration.


### Flash the Firmware

The EasySkyMesh project recommends using the MeshCore Web Flasher for supported devices.

**Step1:** Open [MeshCore Web Flasher](https://meshcore.io/flasher)

**Step2:** Select **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Step3:** Select the EasySkyMesh firmware file.


**Step4:** Enter DFU mode if required.

**Step5:** Start flashing.Wait until the flashing process is completed. 

**Step6:** Reset the device.


## Troubleshooting

### The Device Does Not Appear in the Flasher

1. Make sure the USB cable supports data transfer.
2. Reconnect the Wio Tracker L1.
3. Enter DFU mode again.
4. Refresh the Web Flasher.
5. Try another USB port or cable.

### The Sensor Is Not Detected

Check:
1. VCC and GND wiring.
2. SDA and SCL wiring.
3. Sensor operating voltage.
4. I2C address.
5. EasySkyMesh firmware version.
6. Whether the sensor is listed as supported.


If the problem persists, check the [EasySkyMesh GitHub repository](https://github.com/IoTThinks/EasySkyMesh) for the latest documentation and issues.

## Useful Resources

* [EasySkyMesh GitHub Repository](https://github.com/IoTThinks/EasySkyMesh)
* [EasySkyMesh Flashing Instructions](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [EasySkyMesh Sensor Instructions](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

## Tech Support & Product Discussion
<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>