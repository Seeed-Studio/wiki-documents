---
description: Get_Started_with_Wio_Tracker_1110 
title: Get Started
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_Wio-Trakcer_1110
last_update:
  date: 9/11/2023
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

Go back to the `Device` page, then you will see the dev board has been bound.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>

:::info Note
The default region of the factory firmware is EU868, to configure the region, please check [here](https://wiki.seeedstudio.com/configure_param_for_wio_tracker/#Region-configuration)
:::


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


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/perphi.jpeg" alt="pir" width={800} height="auto" /></p>

### Check the data

Power on the dev board, and please make sure you have network coverage nearby，when the dev board is successfully connected to the network, it will show `online` on the `Device` page.

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
