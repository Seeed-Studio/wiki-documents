---
description: Xadow - Q Touch Sensor
title: Xadow - Q Touch Sensor
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Q_Touch_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow%20Q%20touch%20sensor.jpg)

The Q Touch Sensor is a high sensitivity and high noise immunity touch input device.It is based on Atmel AT42QT1070.

The AT42QT1070 modulates its bursts in a spread-spectrum fashion in order to heavily suppress the effects of external noise, and to suppress RF emissions. The QT1070 uses a dual-pulse method of acquisition. This provides greater noise immunity and eliminates the need for external sampling capacitors, allowing touch sensing using a single pin.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html)

## Specification
---
*   Operating Voltage: 3 ~ 5.5V
*   Operating Current @3.3V: 1mA
*   Touch Keys: 7 Keys ; key0 ,key1 ,key2 are on the Xadow PCB bottom side
*   Communicating Protocol: I2C
*   I2C Address: 0x1B

## Interface Function
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow-Q_Touch.png)

*   ①：Touch key3 , key4 break out
*   ②：Touch key5 , key6 break out

The recommended range for key capacitance Cx is 1 pF – 30 pF. Larger values of Cx will give reduced sensitivity.

*   ③：Xadow interface
*   ④：On board touch key0
*   ⑤：On board touch key1
*   ⑥：On board touch key2

## Usage
---
Demo:

When you touch the key pad on the board  ,you will see the message from a serial port.

## Hardware Installation
---
- Connect Xadow - Q Touch Senor to Xadow - Main Board

## Software Part
---
- 1) Download the library [[Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)];

- 2) Unzip it into the libraries file of Arduino IDE by the path: ..\arduino-1.0.5\libraries.

- 3) Open the code directly by the path: File -&gt; Example -&gt; getTouchNumber.ino

- 4) Upload the code. Note that you should select the correct board type and COM port.

You can see :

![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Q_Touch_Demo_output.jpg)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resource
---
*   [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)

*   [Schematic pdf](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0.pdf)

*   [Eagle file](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip)

*   [AT42QT107 datasheet](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/AT42QT1070-MMH.pdf)

<!-- *   [How to detect finger touch?](/How_to_detect_finger_touch) -->

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
