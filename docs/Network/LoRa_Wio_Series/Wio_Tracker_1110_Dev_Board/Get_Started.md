---
description: Get Started with Wio Tracker 1110 
title: Get Started with Wio Tracker 1110 
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_Wio-Trakcer_1110
sidebar_position: 2
last_update:
  date: 11/3/2023
  author: Jessie
---

In this tutorial, we will guide users to quickly set up the Wio Tracker 1110 development board through the factory firmware, connect it to SenseCAP cloud and check the data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png" alt="pir" width={800} height="auto" /></p>

### Bind the dev board

Download the SenseCAP Mate APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

:::tip Note
Please select the **Global** version when registering.
:::

Click `+` -> `Add Device`.

Then scan the QR code on the board label.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png" alt="pir" width={500} height="auto" /></p>

Name your device and select the `Device Group`(optional), then click `Bind to account`.<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png" alt="pir" width={300} height="auto" /></p>

### Configure the frequency and connect to the gateway

Go back to the `Device` page, then you will see the dev board has been bound.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>

Click `Configuration Now`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg" alt="pir" width={300} height="auto" /></p>

Click `Ready, go to the next step`, which is entering the device search.

:::info Note
The device needs to be powered on first.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg" alt="pir" width={300} height="auto" /></p>

Search for the device by `Scan`, and when you find an item in the list with the same `S/N code` as your own device, click to enter.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg" alt="pir" width={300} height="auto" /></p>

Go to `Setting` page, choose the platform either as `SenseCAP for the Things Network` or `SenseCAP for Helium`.

:::info Note
You can choose others as well, but in that case, you cannot use SenseCAP platform.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

<div style={{textAlign: 'center'}}>
<h2>Platform</h2>
  <table>
    <tbody>
      <tr>
        <td><h4>Platform</h4></td>
        <td><h4>Description</h4></td>
      </tr>
      <tr>
        <td>SenseCAP for The Things Network</td>
        <td>Default platform.
  It must be used with SenseCAP Gateway. SenseCAP builds a proprietary TTN server that enables sensors to be used out of the box when paired with an SenseCAP gateway.<br />
        <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
        <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
      </tr>
      <tr>
        <td>SenseCAP for Helium</td>
        <td>When there is the Helium network coverage, data can upload via Helium. Devices run on a private Helium console of SenseCAP. Users do not need to create devices on Helium console, out of the box with SenseCAP Mate App and Portal.<br />
        <a href="https://explorer.helium.com/" target="_blank"><span>Helium Coverage</span></a></td>
      </tr>
      <tr>
        <td>Helium</td>
        <td>Connect device to your public Helium console</td>
      </tr>
      <tr>
        <td>The Things Network</td>
        <td>Connect device to your TTN(TTS) server</td>
      </tr>
      <tr>
        <td>Other Platform</td>
        <td>Other LoRaWAN Network Server</td>
      </tr>
    </tbody>
  </table>
</div>

Choose the `Frequency Plan`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg" alt="pir" width={300} height="auto" /></p>

Enter the `Position Uplink Interval (in minutes)` and `Sensor Uplink Interval (in minutes)`.

| Parameters | Description |
| - | - |
| Position Uplink Interval (minutes) | Scheduled upload of location information.<br/>Default 5 minutes.<br/>The higher the frequency, the higher the power consumption. |
| Sensor Uplink Interval (minutes) | Scheduled upload of sensor data.<br/>Default 5 minutes.<br/>The higher the frequency, the higher the power consumption. |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg" alt="pir" width={300} height="auto" /></p>

Once all the information in Settings aligns with your requirements, you can click `Send` to transmit it to **Tracker Wio 1110**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg" alt="pir" width={300} height="auto" /></p>

Go to `Measure` page, click the `Measure`, then you will get the sensor values.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg" alt="pir" width={500} height="auto" /></p>

### Check the data

Power on the dev board, and please make sure you have network coverage nearby，when the dev board is successfully connected to the network, it will show `online` on the `Device` page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg" alt="pir" width={300} height="auto" /></p>

If your area suffers from poor signal, just simply install a LoRaWAN gateway - it's as simple as setting up a Wi-Fi router. The beauty of LoRa lies in its flexibility and ease of network expansion. This reliable solution is also cost-effective. For instance, the [SenseCAP M2 Indoor LoRaWAN Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html),it can extend your coverage up to 10km!

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png" alt="pir" width={600} height="auto" /></p>

:::tip
Please put your dev board by the window or in an unobstructed place, so that there will be a better GPS signal, and then the board can successfully obtain the location data.
:::

You can check the location and sensor data on SenseCAP Mate APP or SenseCAP Portal.

**SenseCAP Mate APP**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png" alt="pir" width={500} height="auto" /></p>

**SenseCAP Portal**

If you have created an account through the APP, you can log in directly.
Navigate to your device page, click `Data` to check.

:::info
[SenseCAP Portal User Guide](https://sensecap-docs.seeed.cc/quickstart.html)
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png" alt="pir" width={800} height="auto" /></p>

### How to upload data immediately

1、When the development board is shaken, causing vibrations, it triggers **the three-axis accelerometer sensor** to immediately collect and upload data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF" alt="pir" width={800} height="auto" /></p>

You can view the information on the serial monitor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png" alt="pir" width={800} height="auto" /></p>

The SenseCAP Mate app interface will display data packets when the device is shaken.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG" alt="pir" width={300} height="auto" /></p>

2、Press the `BUTTON` once, and the device will immediately collect and upload data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF" alt="pir" width={800} height="auto" /></p>

You can view the information on the serial monitor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png" alt="pir" width={800} height="auto" /></p>

The SenseCAP Mate app interface will display SOS signals and data packets.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG" alt="pir" width={300} height="auto" /></p>

### Add Grove Sensor(optional)

In addition to the onboard sensors, the possibilities are endless with the Wio tracker 1110 dev board. In the factory firmware, the following Grove sensors are also allowed to access this board and be recognized automatically.

<table align="center">
  <caption> <h2>Grove Modules</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Get One Now</h4></td>
    <td><h4>Sensor</h4></td>
    <td><h4>Get One Now</h4></td>
    </tr>
    <tr>
    <td>Sound Sensor-Based on LM358 amplifier</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png" alt="" width={200} height="auto"/></a>
</div></td>
    <td>High Precision Barometer Sensor-DPS310</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Air Quality Sensor(SGP41)</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sunlight sensor-SI1151</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Ultrasonic Distance Sensor</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>

  </tbody></table>

Connect the Grove sensor to the corresponding Grove port on the Wio Tracker dev board.

You can also use a [Grove-I2C Hub](https://www.seeedstudio.com/Grove-I2C-Hub.html) to connect multiply I2C sensors to the board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

## Flash Firmware

- [Latest Firmware](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

Double click the `Reset` button, there should be a `WM1110_BOOT` driver on your PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Drag the `.uf2` file to the driver. The download will run automatically, then the driver will log out.

## SenseCAP API

SenseCAP API is for users to manage IoT devices and data. It includes 3 types of API methods: HTTP protocol, MQTT protocol, and Websocket protocol.
- With HTTP API, users can manage LoRa devices, to get raw data or historical data.
- With MQTT API, users can subscribe to the sensor's real-time measurement data through the MQTT protocol.
- With Websocket API, users can get real-time measurement data of sensors through Websocket protocol.

Please check [API User Guide](https://sensecap-docs.seeed.cc/) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
