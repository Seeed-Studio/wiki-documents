---
description: mmWave Kit And Grove Connect To ESPHome
title: mmWave Kit And Grove Connect To ESPHome
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmWave_Kit_And_Grove_Connect_To_ESPHome
sidebar_position: 1
last_update:
  date: 12/09/2023
  author: Allen
---

## Introduction

mmWave Human Detection Sensor Kit powered by Seeed Studio XIAO ESP32C3, it supports Wi-Fi/BLE connectivity and offers precise human detection via mmWave sensors. Seamlessly connect grove modules for added features. Achieve easy setup for Home Assistant within 1-2 minutes, coupled with convenient wireless Over-The-Air (OTA) updates. Enable extensive versatility with replaceable mmWave sensors. Ideal for customize smart home automation, detect intrusions, and monitor the well-being of the elderly.

## Hardware Preparation

I am using Raspberry Pi 4B as server to run HomeAssistant, using mmWave Human Detection Sensor Kit as the hardware here, along with multiple Grove Sensors.

<table align="center">
  <tbody><tr>
      <th>mmWave Human Detection Sensor Kit</th>
      <th>Raspberry Pi 4B</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/mmwavekit.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/pi.png" style={{width:350, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody>
</table>

**Grove Sensors**

- [Grove - Temperature and Humidity Sensor (DHT20)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)
- [Grove - Light Sensor (LS06-S)](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - Flame Sensor](https://www.seeedstudio.com/Grove-Flame-Sensor.html)

## Software Preparation

### Install Home Assistant

Make sure you already have Home Assistant up and running. There are multiple wiki introducing how to flash Home Assistant into the [products](https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-) here. I'm using Raspberry Pi 4B so I can [directly use the official one to flash the OS into the Raspberry Pi 4B](https://www.home-assistant.io/installation/raspberrypi).

### Install ESPHome on Home Assistant

ESPHome is available as a **Home Assistant Add-On** and can simply be installed via the add-on store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **Step 1.** Click **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **Step 2.** Enable all the options and click **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

You will see the following window if ESPHome is successfully loaded

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## Geting started

### mmWave kit connect to ESPHome

#### Step 1: Hardware connection

Connect the mmwave kit to the HomeAssistant via Type-C cable, you can refer the picture below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### Step 2: Software setup

##### a. Setup mmwave kit

1. Open ESPHome page and click the **NEW DEVICE** button on the lower right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. And then, click **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. Give it a name you want, click **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. Select your device type, click **ESP32-C3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. You can find the key later in the configuration file, so here just click **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. We need to edit the configuration file here, click **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. The code below is for your reference. You can copy them to your configuration file. After finishing the code, click **INSTALL** button on the upper right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip

1. api and ota part have default key or password you needn't to change it.
2. wifi part you need to change your own ssid and password.
3. [click here to see code](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)

:::

8. And then will be a pop-up window, click on the third entry.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. Click as below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. Now the mmwave kit already setup and you will see this page, click the **CLOSE** button on the lower right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. Add mmwave kit data to overview

1. Go to the **Settings** page and click **Devcies & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. Click **ESPHome** in the Configured zone.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip
If you found ESPHome not in the Configured zone, but in Discovered zone upper. You can follow step15 to step18 in this [link](https://wiki.seeedstudio.com/XIAO-ESP32C3-for-ESPHome-Support/).
:::

3. Click the **devices**. I have 2 devices here, probably in your situation just get 1 device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. Click the **mmWave Kit Plus Grove**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. Click **ADD TO DASHBOARD** to add those information to the dashboard. And you can scroll down this page to add more information you want.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. Continue to click **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. Finally you can see these information in the dashboard by click **overview** botton on the upper left corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### Grove connect to ESPHome

#### Light sensor(LS06-S)

##### Step 1: Hardware connection

Connect [light sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) to mmwave kit via Grove cable, you can refer the picture below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### Step 2: Software setup

###### a. Setup light sensor

1. Add these code to your configuration file at corresponding position you can refer to the image below.

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. And then click the **INSTALL** button on the upper left corner. If going well you will see this image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip
<span id="jump">If you meet error, you can clean build files as below.</span>
:::

1. Probably you will meet a error like this.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. You can Click **Clean Build Files** to clean some files.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. After cleaning, click **CLOSE** and try to **INSTALL** again.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. Add light sensor to dashboard

1. Click **Overview** on the upper left corner and the click **"three points"** and **Edit dashboard** on the upper right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Click **ADD CARD** on the lower right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Click **BY ENTITY**, select the **Light Sensor** entry and then click **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. Select **PICK DIFFERENT CARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. Select **Gauge**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. Set the Minimum as 0 and Maximum as 1, click **SAVE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. Finally you will see the light sensor in your dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### Temperature and humidity sensor(DHT20)

##### Step 1: Hardware connection

Connect [temperature and humidity sensor](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) to mmwave kit via Grove cable, you can refer the picture below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### Step 2: Software setup

###### a. Setup Temperature and humidity sensor

1. Add these code to your configuration file at corresponding position you can refer to the image below.

```
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38
```

```
sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/20.png" style={{width:1000, height:'auto'}}/></div>

2. And then click the **INSTALL** button on the upper left corner. If going well you will see this image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
If you meet error, you can jump to [here](#jump) for your reference.
:::

###### b. Add Temperature and humidity sensor to dashboard

1. Click **Overview** on the upper left corner and the click **"three points"** and **Edit dashboard** on the upper right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. Click **ADD CARD** on the lower right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. Click **BY ENTITY**, select **Humidiy** and **Temperature** entry and then click **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. Click **ADD TO DASHBOARD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. Finally you will see the Temperature and Humidity data in your dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### Flame sensor

##### Step 1: Hardware Connection

Use Grove cable connect [flame sensor](https://www.seeedstudio.com/Grove-Flame-Sensor.html) to mmWave kit analog port. You can refer the video below.

##### Step 2: Software Setup

###### a. Setup flame sensor

Add the code below to your configuration file and **INSTALL** to mmWave kit.

```
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      inverted: true
    name: "Flame Detecctor"
    device_class: smoke
```

###### b. Add flame sensor to dashboard

You can refer light sensor or temperature and humidity sensor above.

#### Other sensors with Yaml files

Supported by [Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/12/views/1), thanks Mohammed and there are more supported sensors below:

[ATH20 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)
[SHT35 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)
[SHT40 sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)
[Vibration Sensor](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)

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
