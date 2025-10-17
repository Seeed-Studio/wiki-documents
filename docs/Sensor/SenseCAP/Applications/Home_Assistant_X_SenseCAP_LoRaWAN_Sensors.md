---
description: Tango with Home Assistant and SenseCAP Sensors
title: Tango with Home Assistant and SenseCAP Sensors
keywords:
- LoRaWAN
- Sensor
- Home Assistant
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /home_assistant_with_sensecap_lorawan_sensors
last_update:
  date: 9/14/2023
  author: Jessie
---

Share a way to integrate LoRaWAN® Sensor into Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={800} height="auto" /></p>

There are already enough intelligent devices(sensors, lights, switches) in the smart home playground, and you might already have multiple Apps from Apple Homekit, Google Home, and Amazon Alexa to serve different devices. It’s highly required to connect all of them with each other in one place. I read the news recently in Sep 2022 that matter 1.0 was released and aim to uniform the ecosystem. however, this will definitely take time.

Actually, before the matter was released years ago, [Home Assistant](https://www.home-assistant.io/) is one of the best platforms to build a fully customized smart home ecosystem, integrating mainstream devices and setting automation rules to make your home a better and smarter place. That is definitely something I want to learn and share the experience.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

In this series of articles, I will share how I build a decent smart home in Home Assistant and use sensors from Seeed Studio SenseCAP products. And this is the first milestone.

Running a home assistant from scratch and integrating SenseCAP weather sensors.

Here are the steps to get there:

- Install home assistant on a Raspberry Pi
- Get the SenseCAP sensor onboard with App
- Add MQTT integration and subscribe to the SenseCAP data
- Add entities with different sensor measurement values.
- Create a sensor data dashboard

### Install home assistant on a Raspberry Pi

To get started with Home Assistant, the [official tutorial](https://www.home-assistant.io/getting-started/) is very useful.

There are many devices and platforms to run home assistant, I happen to have one unused Raspberry Pi, so I will start from [here](https://www.home-assistant.io/installation/raspberrypi).

Instead of using the Balena etcher to flash the SD card, I prefer using the official [Raspberry Pi Imager](https://www.raspberrypi.com/software/), it is lightweight and simple to use.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527038/image_xXpG0MaQJS.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Get yourself a Micro SD card bigger than 32GB and plug it into your computer, here I use MacBook as an example.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527041/image_vb64IHZx5B.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Navigate to other specific -purpose OS and select the Home Assistant and Home Automation.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527042/image_xf5OXUliuo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Select Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527044/image_tIB5zVlxm5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Select the Home Assistant OS version for RPi4

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527045/image_UQdhYJt88T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Then select the SD card drive, be careful, and DO NOT choose the wrong disk, which may format your driver and lose all the valuable data.

<img src="https://hackster.imgix.net/uploads/attachments/1527046/image_Le62Kc3fGH.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />
<img src="https://hackster.imgix.net/uploads/attachments/1527047/image_tiE1gwdlBw.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

It may take a while to download the Home Assistant image depending on your internet speed.

Then insert the micro SD card into Raspberry Pi and connect one ethernet cable to it. boot it up, the Red LED should stay red and Green LED will start to flash, if the green LED does not flash, that indicates something is wrong during image flashing.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527053/image_UaCcGJHjzs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

go to `http://homeassistant.local:8123/` and wait for the installation to finish.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527051/image_rEn7iALm78.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={400} height="auto" /></p>

Following this [link](https://www.home-assistant.io/getting-started/onboarding/) to register your Home Assistant account and login.

Bingo Finally, you have your Home Assitant installed.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527055/image_5mAwRA0PMG.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Onboard the SenseCAP sensor with App

SenseCAP is a series of industrial sensor devices, and gateway product, among which, the S210x LoRaWAN sensor are mainly built for the long-range and battery-powered scenario.

I want to use the new launch [S2120 Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html), and deploy it on the top of my roof, which is 6 floors high, so LoRa's long-distance communication feature did the job well. It already comes with all the accessories for quick installation.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527056/image_61yawsK9oe.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

The Weather Station works as a standard LoRaWAN device, so I can use a [SenseCAP M2 indoor LoRaWAN gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) in my home, it has a 3dBi antenna with a magnet base.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527058/image_BRnDKw5tLD.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Next, download SenseCAP Mate App and register an account.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

just for your reference, this video is coming from Seeed Studio that demonstrates the basic onboarding process.

<div class="video-container">
<iframe class="youtube-video" src="https://youtu.be/TUQ9UmF7e7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Connect the M2 LoRaWAN gateway to the internet with an ethernet cable and connect the antenna before you power it on, when you saw the panel RGB LED stay green, that means the gateway is set well.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527070/image_zEm7RxadAf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Now let me onboard the M2 LoRaWAN gateway

- Open the Mate App and go to the "device" tab<br/>
- Click the "+" icon in the upper right corner to scan the gateway QR code, which is on the device label.<br/>
- Name your device and set the location.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527073/image_xoxYLPEmeE.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

in the same way, scan the QR code to onboard the S2120 weather sensor. tap the S2120 sensor, now I can see weather data.

- Air Temperature
- Air Humidity
- Light Intensity
- Barometric Pressure
- Wind Direction
- Wind Speed
- Rainfall Hourly
- UV Index

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527082/image_Tr85o39OKT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
and now it is time to go to my roof and install it on a pole.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527110/img_3683_qMfEaREbxR.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

I also have another [S2103 CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) and [S2105 Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html), they share the same benefits in the S210x series and the onboarding process is the same. and they are high quality with industrial standards.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527107/image_Q55T2OnZjs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

so I also add them to SenseCAP Mate App and install them in my bedroom and flowerpot.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527108/image_rkLg6bXCX9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Now, I have everything set on the SenseCAP sensor side.

### Add MQTT integration

- **Why do I need the sensor data integrated into the Home Assistant?**

`I can take advantage of the automation flow in Home Asssitant, and the SenseCAP App currently do not have that feature.`

- **What is the process to get the SenseCAP data to Home Assistant?**

`Get your SenseCAP account API key<br/>
Read the SenseCAP open stream API document(MQTT)<br/>
Add MQTT integration in Home Assistant<br/>
Subscribe SenseCAP data via MQTT and using the API key<br/>`

- **Now, Let's get to SenseCAP Portal, here you can find your**

`OrgID` = Organization ID<br/>
`Password` = Access API keys

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527113/image_Q3vkEnuKU2.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

My MQTT subscription info is :

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527114/image_V4qotIEmN1.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Go back to the Home Assistant web UI.

there are a lot of integrations in Home Assitant

https://www.home-assistant.io/integrations/

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527115/image_igs1T1yKAk.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Today I will use MQTT integration to subscribe data in JSON format and use [MQTT sensor integration](https://www.home-assistant.io/integrations/sensor.mqtt/) to bind the sensor value to a specific entity.

Go to settings and move into Devices & Services

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527116/image_udflzRbXDp.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
Click add integration button and search MQTT

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527118/image_VPTvmh0hMc.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Do remember to enable the advanced setting, if you forget to input the Client ID, the setup will fail.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527120/image_y4yAFffD4f.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

then, you can test if the subscription works, by clicking the CONFIGURE button and listening to the topic

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527123/image_Fku83wMfdA.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527121/image_G5lZNHW9P5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

wait for a while, there will sensor message.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527122/image_5pGjBZ4ZqZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>
Until now, the MQTT client is set successfully.

### Add entities

I will add multiple entities to store sensor measurement data, for example, create a new "Air temperature" entity and take the measurement value from the S2120 MQTT JSON message. and add the other sensor entities likewise.

I will finish this by editing the Home Assistant configuration file

```cpp
configuration.yaml
```

go to the setting and move to Add-ons, then

<img src="https://hackster.imgix.net/uploads/attachments/1527130/image_em25CYMJaj.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" /><img src="https://hackster.imgix.net/uploads/attachments/1527131/image_DfFNubnQaf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

install it and enable show in the sidebar, and click start.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527132/image_RNwnNZNnBX.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

now this is the important part to modify the YAML file with below scripts

```cpp
mqtt:
  sensor:
    - name: "Air Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4097"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Air Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4098"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Light Intensity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4099"
      unit_of_measurement: "Lux"
      value_template: "{{ value_json.value }}"
    - name: "Barometric Pressure"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4101"
      unit_of_measurement: "Pa"
      value_template: "{{ value_json.value }}"
    - name: "Wind Direction"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4104"
      unit_of_measurement: "°"
      value_template: "{{ value_json.value }}"
    - name: "Wind Speed"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4105"
      unit_of_measurement: "m/s"
      value_template: "{{ value_json.value }}"
    - name: "Rainfall Hourly"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4113"
      unit_of_measurement: "mm/hour"
      value_template: "{{ value_json.value }}"
    - name: "UV Index"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4190"
      unit_of_measurement: "UV"
      value_template: "{{ value_json.value }}"
    - name: "Soil Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Soil Moisture"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%"
      value_template: "{{ value_json.value }}"
    - name: "Electrical Conductivity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "dS/m"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room CO2"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.value }}"
```

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527133/image_sWi5PsDmyl.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

save it and go to developer tools to check if the YAML file is correct.

then, restart the Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527134/image_4eyghWeM61.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

after restarting, make sure the MQTT is listening to the SenseCAP topic

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527135/image_2zfIHuOxvC.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

then, go to Settings -> Devices and Services -> Entities

wow~~~ all the sensor measurements are listed there.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527136/image_nf7n2EARnh.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Create a sensor data dashboard

The last step is to add sensor entities to a dashboard.

go to overview and find the "Edit Dashboard"

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527137/image_aUUUbBvb9V.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Choose entities card, this card can include multiple sensor values in a card.

I will create three cards for each sensor

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527138/image_Ebs1nBNDow.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Finally, I have made the very basic integration and show SenseCAP sensor data in Home Assitant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527146/image_zV3lKcDL3T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Next, I will spend more time optimizing the UI and making it looks beautiful.

and using ESP32 to add new sensors to Home Assistant.

### Resource

[Tango with Home Assistant and SenseCAP Sensors](https://www.hackster.io/Pistachio9to5/tango-with-home-assistant-and-sensecap-sensors-1ee587)
