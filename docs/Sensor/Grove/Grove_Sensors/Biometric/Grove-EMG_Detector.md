---
description: Grove - EMG Detector
title: Grove - EMG Detector
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-EMG_Detector
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_product.jpg" /></div>

EMG detector is a bridge connects human body and electrical, the sensor gathers small muscle signal then process with 2th amplify and filter, the output signal can be recognized by Arduino. You can add this signal into your control system.

:::note
The sensor cannot be used for medical purposes.
:::

In standby mode, the output voltage is 1.5V. When detect muscle active, the output signal rise up, the maximum voltage is 3.3V. You can use this sensor in 3.3V or 5V system.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Features
--------

- Grove Compatible
- 3.5mm Connector
- 6 Disposable Surface Electrodes
- Power supply voltage: 3.3V-5V
- 1000mm Cable Leads
- No additional power supply

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Hardware Overview
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_EMG_detector.jpg" /></div>

- J2: grove interface, connect to analog I/O;
- J1: EMG Disposable Surface Electrodes connector.
- U1: INA331IDGKT, difference amplifier.
- U2, U3: OPA333, Zero drift amplifier.

Demonstration
-------------

This demonstration will show you how to use Grove - LCD RGB Backlight, we need a Seeeduino V3.0, a Grove - LED Bar and Grove - Base Shield.

### Hardware Installation

Plug Grove - Base Shield to Seeeduino, then connect Grove - LED Bar to D8, connect Grove - EMG Sensor to A0.

Finally, tack the three electrodes to your muscle, and keep a distance between each electrodes.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_connect.jpg" /></div>

### Download Code and Upload

You can download the demo code in github, click [here](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/), then extract it to anywhere.

Then upload the code to Seeeduino, if you have any problem about code uploading, please refer to Getting Started With Seeeduino

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_ide.png" /></div>

### Move

When finish downloading demo code, it'll take about 5s to initialize, you should keep static when initializing.

You can see that when initializing, the Led Bar will go form level 10 to level 0. When Led Bar All off, you can move now.

When you are moving, you can find that the level of Led Bar will change.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_emg_demo_2.gif" /></div>

# Grove-EMG Sensor v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/Grove-EMG_Sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-EMG Sensor v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
--------

- [Grove-EMG Sensor v1.0 Eagle File](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/Grove-EMG_Sensor_v1.0.zip)
- [Grove-EMG Sensor v1.1 Eagle File](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip)
- [Demo Code](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EMG_Detector -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
