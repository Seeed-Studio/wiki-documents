---
description: LPWAN Asset Tracker Dev Kit for Amazon Sidewalk – Wio Tracker 1110
title: LPWAN Dev Kit for Sidewalk
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wio_tracker_for_sidewalk
last_update:
  date: 12/4/2023
  author: Jessie
---

The LPWAN Asset Tracker Dev kit is based on [Wio-WM1110 Wireless Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html), gathers location data via passive WiFi scanning or GNSS, and communicates with the Amazon Sidewalk network bridges using the BLE and/or LoRa radios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LPWAN-Asset-Tracker-Dev-kit-WM1110-p-5846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::tip
Amazon Sidewalk is currently only available in the US. Check [Sidewalk Network Coverage](https://coverage.sidewalk.amazon/).

For other regions, you can also choose the [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html), which is compatible with the worldwide LoRaWAN® network.
:::

## Feature

- **Support Amazon Sidewalk Network**

- **Offers multiple connectivity options** including: LoRa®, GNSS(GPS/BeiDou), Bluetooth, Wi-Fi Sniffer

- **Supports over 300+ Seeed Grove Sensors**: Making it highly adaptable for different tracking and sensing requirements.

- **Onboard temperature sensor, humidity sensor, and a 3-axis accelerometer**: Capturing a wide range of environmental and motion data

- **Fully Open Source Platform**: Leverage the extensive LR1110 and nRF52840 open-source ecosystem for infinite application possibilities

## Description

### Amazon Sidewalk Supported

Amazon Sidewalk is an encrypted free-to-connect long-range network that provides persistent connectivity for billions of devices. It anonymously connects smart devices together and creates a highly reliable shared community network that you can use to create more cost-effective connected solutions.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

### Multiple positioning technologies

The LPWAN Asset Tracker Dev kit – WM1110 integrates Multi-Purpose Radio Front-End Targeting Geolocation Purposes. It's equipped with GNSS dedicated to outdoor positioning, as well as Wi-Fi Sniffer and Bluetooth scanning for indoor positioning. It's able to automatically transition between outdoor and indoor activities, replacing the need to build different trackers for indoor or outdoor use, this provides all-around location coverage while reducing complexity and cost.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_234601_twY1xjCUq9Z8yoYu_1701143222?w=2032&h=1070&type=image/png" alt="pir" width={800} height="auto" /></p>

### Rich peripherals

In addition to the onboard temperature and humidity sensor(SHT41) and 3-axis accelerometer(LIS3DHTR), it features a series of peripheral interfaces and supports ADC/UART and IIC transmission protocols, which can be connected to 300+ Grove modules, enabling easy upgrades to smarter solutions.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_639823_3yeu0eTFcW0f2AHj_1701143279?w=1802&h=844&type=image/png" alt="pir" width={800} height="auto" /></p>

### Build an asset tracker application using Amazon Sidewalk

Learn about [Amazon Sidewalk](https://www.amazon.com/Amazon-Sidewalk/b?ie=UTF8&node=21328123011) and [AWS IoT Core for Amazon Sidewalk](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sidewalk.html) and how to connect the LPWAN Asset Tracker Dev kit to the wide-reaching Amazon Sidewalk network and integrate with AWS IoT Core.

This Demo application is created specifically for IOT202 Building compliant, secure connected products with AWS IoT Workshop at re: Invent 2023, and aims to be used in further AWS-workshop events. Developers or enthusiasts should be able to get a good understanding of the AWS IoT services, including AWS IoT Core, and Amazon Sidewalk, and how to integrate them into your connected product via the Workshop.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_817803_KG4rJQIohMMzPyR4_1701150525?w=1370&h=798&type=image/png" alt="pir" width={800} height="auto" /></p>

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_19830_N9NXJqFu1LJ_Rku__1700122819?w=1608&h=1060&type=image/png" alt="pir" width={800} height="auto" /></p>

## Application

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_419290_B_TS3XqgFv7LnMbQ_1700474791?w=1752&h=858&type=image/png" alt="pir" width={800} height="auto" /></p>

## Specifications

**LoRa® and Positioning (Semtech LR1110)**

|Frequency|863~928MHz|
| :- | :- |
|Sensitivity|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|Output Power|20dBm max @LoRa®|
|Positioning Technology|GNSS(GPS,BeiDou),WiFi|
|Range|2~10km (Depends on antenna and environment)|

**Bluetooth(Nordic nRF52840)**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|Flash|1MB|
|RAM|256KB|
|Protocol|Bluetooth LE,Bluetooth mesh,Thread,Zigbee,802.15.4, ANT and 2.4 GHz proprietary stacks|
|Output Power|6dBm max @Bluetooth|

**Built-in Sensors**

**TH Sensor (SHT41)**

|  | Range | Accuracy |
| -------- | -------- | -------- |
|Temperature  | -40~125°C |0.2°C|
| Humidity | 0~100%RH |1.8%RH|

**3-axis Accelerometer(LIS3DHTR)**

| Range | Bandwidth | Sensitivity(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)
