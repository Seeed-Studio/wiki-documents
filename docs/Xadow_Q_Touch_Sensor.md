---
name: Xadow-Q Touch Sensor
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html
oldwikiname: Xadow-Q Touch Sensor
prodimagename: Xadow_OLED.jpg
surveyurl: https://www.research.net/r/Xadow_Q_Touch_Sensor
sku:  101040001
---
![](https://github.com/SeeedDocument/Xadow_Q_Touch_Sensor/raw/master/img/Xadow%20Q%20touch%20sensor.jpg)

The Q Touch Sensor is a high sensitivity and high noise immunity touch input device.It is based on Atmel AT42QT1070.

The AT42QT1070 modulates its bursts in a spread-spectrum fashion in order to heavily suppress the effects of external noise, and to suppress RF emissions. The QT1070 uses a dual-pulse method of acquisition. This provides greater noise immunity and eliminates the need for external sampling capacitors, allowing touch sensing using a single pin.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html)

## Specification
---
*   Operating Voltage: 3 ~ 5.5V
*   Operating Current @3.3V: 1mA
*   Touch Keys: 7 Keys ; key0 ,key1 ,key2 are on the Xadow PCB bottom side
*   Communicating Protocol: I2C
*   I2C Address: 0x1B

## Interface Function
---
![](https://github.com/SeeedDocument/Xadow_Q_Touch_Sensor/raw/master/img/Xadow-Q_Touch.png)

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

![](https://github.com/SeeedDocument/Xadow_Q_Touch_Sensor/raw/master/img/Q_Touch_Demo_output.jpg)

## Resource
---
*   [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)

*   [Schematic pdf](https://github.com/SeeedDocument/Xadow_Q_Touch_Sensor/raw/master/res/Xadow-Q_Touch_Sensor_v1.0.pdf)

*   [Eagle file](https://github.com/SeeedDocument/Xadow_Q_Touch_Sensor/raw/master/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip)

*   [AT42QT107 datasheet](https://github.com/SeeedDocument/Xadow_Q_Touch_Sensor/raw/master/res/AT42QT1070-MMH.pdf)

*   [How to detect finger touch?](/How_to_detect_finger_touch)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>