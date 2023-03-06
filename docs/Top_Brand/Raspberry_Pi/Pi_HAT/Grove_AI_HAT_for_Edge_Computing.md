---
description: Grove AI HAT for Edge Computing
title: Grove AI HAT for Edge Computing
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_AI_HAT_for_Edge_Computing
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove%20AI%20HAT%20for-Edge-Computing-wiki-front.jpg)

The Grove AI HAT for Edge Computing(hereafter called 'Grove AI HAT') is built around Sipeed MAix M1 AI MODULE with Kendryte K210 processor inside. It's a low cost but powerful raspberry pi AI hat which assists raspberry pi run the AI at the edge, it also can work independently for edge computing applications.

The  MAix M1 is a powerful RISC-V 600MHz AI module features dual core 64-bit cpu, 230GMULps 16-bit KPU(Neural Network Processor), FPU(Float Point Unit) supports DP&SP, and APU(Audio Processor) supports 8 mics.

In addition to the powerful Kendryte K210 processor, the Grove AI HAT for Edge Computing board provide a wealth of peripherals: I2C/UART/SPI/I2S/PWM/GPIO. The hat also offers LCD and camera interface, which support the Sipeed 2.4inch QVGA LCD and DVP camera, it will be helpful and convenience with your AI vision project. Just like the <a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-1-p-2873.html" target="_blank">Sipeed MAix BiT Kit for RISC-V AI+IoT</a>
, we will release the kit with camera and LCD soon. For AI voice recognition applications, we add a high-quality microphone. And for robot or motion applications, there is a onboard 3-axis accelerometers sensor, which is more accurate and easy to use compared to external sensors.

We have released varies of SIPPED AI products, we believe it is time to make it Grove, and bring all our hundreds of grove senors and grove acvotors to your AI applications. So here comes the  Grove AI HAT for Edge Computing. We've added 6 grove connectors to this hat, including 1xDigital IO, 2xAnalog IO, 1xI2C, 1xUART and 1xPWM. On top of that, based on <a href="https://github.com/kendryte/kendryte-standalone-sdk" target="_blank">kendryte-standalone-sdk</a>
, we support Linux, Windows, Mac OS X and other development environments.

We hope this board may help you with your edge computing, AI vision, voice recognition, and other AI projects, just enjoy it.

<iframe width="800" height="450" src="https://www.youtube.com/embed/5BF3ExL1HOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Processor: Sipeed MAIX-I module w/o WiFi ( 1st RISC-V 64 AI Module, K210 inside )
- 1x USB 2.0 Device, Type C(Power and Programming)
- 6x Grove Interface: include 1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC
- 1x Power LED, 1x Boot LED
- 1x Reset Button, 1x Boot Button
- 1x LCD Interface
- 1x Camera Interface
- 1x Digital Mic
- 1x Accelerometers Sensor
- 1x JTAG & ISP UART Pin Header
- 2x 20 Pin Header with I2C, UART, SPI, I2S, PWM, GPIO

## Specification

|Parameter|Value|
|---|---|
|CPU|K210 RISC-V Dual Core 64bit, 400Mh(Max. 600Mhz) |
|FPU|IEEE754-2008 compliant high-performance pipelined FPU|
|KPU(Neural Network Processor )|• Supports the fixed-point model that the mainstream training framework trains according to specific restriction rules<br />• Support for 1x1 and 3x3 convolution kernels<br />• Support for any form of activation function<br />• The maximum supported neural network parameter size for real-time work is 5MiB to 5.9MiB|
|Debugging Support|High-speed UART and JTAG interface for debugging|
|Supply Voltage|5V<br />can not exceed 5.5V|
|IO Voltage|3.3V|
|Operating Ambient Temperature| -20 – 70℃|
|ADC|Onboard 16-bit ADC|
|3-Axis Accelerometers|ADXL345 ±2 g/±4 g/±8 g/±16 g|
|Micrephone|Sensitivity:-26 dB;SNR:61 dB|
|GPIO|2x 20 Pin Header compatible with Raspberry Pi|
|Grove Interface|1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC|
|USB Interface|USB 2.0 Device, Type C(Power and Programming)|
|LCD Interface|8bit MCU LCD 24P 0.5mm FPC connector|
|DVP Camera Interface|24P 0.5mm FPC connector|
|Button|1x Reset Button, 1x Boot Button (can be used as User Button)|
|LED|1x Power LED, 1x Boot LED(can be used as User LED)|

:::caution

- All digital and analog IO interface levels are 3.3V. Please do not input more than 3.3V, otherwise the CPU may be damaged.  
- The input power supply voltage is 5V and cannot exceed 5.5V.
:::

## Applications

- AI for Edge Computing
- Smart Building
- Medical equipment
- Automation & Process Control
- Robot

## Hardware Overview

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/pinout1.jpg" alt="Grove AI HAT for Edge Computing hardware overview" title="hardware overview" />
  <figcaption><b>Figure 1</b>. <i>Grove AI HAT for Edge Computing hardware overview</i></figcaption>
</figure>
</div>

## Platforms Supported

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

#### Digital Demo

**Materials required**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - LED](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) x1
- USB Type C cable x1

##### Hardware Connection

- 1. Connect the Grove - LED to the Grove **J2** port(D13 pin) of the Grove AI HAT
- 2. Connect the Grove AI HAT to the computer via USB Type C port.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect.png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figure 8</b>. <i>Hardware connection</i></figcaption>
</figure>
</div>

#### Analog Demo

**Materials required**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - Round Force Sensor (FSR402)](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html) x1
- USB Type C cable x1

##### Hardware Connection

- 1 Conect the Grove - Round Force Sensor (FSR402) to the Grove **J11** port(A0 pin) of the Grove AI HAT
- 2 Conect the Grove AI HAT to the computer via USB Type C port.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect2(1).png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figure 9</b>. <i>Hardware connection</i></figcaption>
</figure>
</div>

#### Face Detect Demo

**Materials required**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [OV2640 Camera](https://www.seeedstudio.com/OV2640-Fisheye-Camera-p-4048.html) x1
- [2.4 inch TFT LCD](https://www.seeedstudio.com/2-4-TFT-LCD-p-4049.html) x1
- USB Type C cable x1

##### Hardware Connection

- a. Connect the OV2640 camera into the Grove AI Hat 24 pin FPC camera connector
- b. Connect the 2.4 inch TFT LCD into the Grove AI Hat 24 pin FPC LCD connector
- c. Connect the Grove AI HAT to the computer via USB Type C port.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-connect.jpg" alt="Grove AI HAT face detect demo-1" title="" />
  <figcaption><b>Figure 12</b>. <i>Hardware connection of face detect demo</i></figcaption>
</figure>
</div>

## Resources

- **[PDF]** [Grove AI HAT for Edge Computing Schematic file](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Grove%20AI%20HAT%20for%20Edge%20Computing_v1.0_SCH_190426.pdf)
- **[PDF]** [Accelerometers_Sensor_datasheet Datasheet](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Accelerometers_Sensor_datasheet.pdf)
- **[PDF]** [ADS1115 Datasheet](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/ADS1115.pdf)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
