---
name: Grove - Thermal Imaging Camera / IR Array MLX90640 110 degree
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 114020142 
tags:
---


![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/114020142-previewbig.jpg)


Grove - Thermal Imaging Camera is a thermal sensor which carries MLX90640 IR Array. The camera can present dynamic thermal images and detect the surrounding temperature from -40℃~300℃. The camera with narrow-angle/wide-angle has an FOV(Field of View) of 55°x35°/110°x75°.   


The IR thermal camera carries a 32x24 array of thermal sensors (MLX90640), it can detect the temperature of objects from feet away with the accuracy of ±1.5℃. In order to obtain the thermal image easily, I2C protocol is used to get the low-resolution image from the camera. 


This module connects the MCU with the I2C interface. However, it needs an MCU which has over 20000 bytes of RAM to drive the camera. As a matter of fact, Dev board like Arduino Uno can not be used with this Sensor camera due to its lower ability of calculation. We recommend you to choose Arch Mix as an MCU to control the camera because it really has a good performance to process the complex data from the IR sensor camera.


<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> 
Grove - Thermal Imaging Camera / IR Array MLX90640 110 degree

<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-55-degree-p-4335.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> 
Grove - Thermal Imaging Camera / IR Array MLX90640 55 degree

!!! Note
	 This wiki fits both types of the Thermal Imageing Camera IR Array MLX90640 55/110 degree 

## Versions

|Version|Order|
|----|-----|
|Grove - Thermal Imaging Camera / IR Array **MLX90640** 110 degree|[Buy it](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|
|Grove - Thermal Imaging Camera / IR Array **MLX90641** 110 degree|[Buy it](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90641-110-degree-p-4612.html)|


## Features
- IR Thermal Sensor Array 32X24(MLX90640)
- 55°x35°/110°x75° FOV(field of view)
- Temperature measurement range:-40℃~300℃
- I2C Grove interface


## Specification

|Item|Grove - Thermal Imaging Camera - MLX90640|Grove - Thermal Imaging Camera - MLX90641|
|----|-----|------|
|Thermal sensor|32X24 array MLX90640|16x12 array MLX90641|
|Operating Voltage|3V - 6V|3.3V - 5V
|Current consumption|~18mA|~18mA|
|FOV(Field of View)|110°x75°|110°x75°|
|Temperature Measurement Range|-40°C - 300°C|-40°C - 300°C
|Temperature Resolution|± 1.5°C|± 1.5°C (±1℃ at center area)|
|Refresh Rate|0.5Hz - 64Hz|0.5Hz - 64Hz|
|Interface|I2C Grove interface|I2C Grove interface|
|I2C Address|0x33|0x33|


## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Note
	This thermal imageing sensor is compatibale with many Arduino boards and Seeeduino boards which are assembled with SAMD21/SAMD51 like [Seeeduino Lotus Cortex - M0](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html). And it also supports all series of Raspberry Pi including [Raspberry Pi Zero](https://www.seeedstudio.com/Raspberry-Pi-Zero-p-4254.html).

## Getting Started


### Getting Started by Arduino

#### Hardware

**Materials required**


|Arch Mix|Arch Mix Grove Breakout|Grove - Thermal Imaging Camera / IR Array MLX90640 110 degree|
|--------|-----------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/main1.jpg)|![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/103030315-preview.jpg)|![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/114020142-preview.jpg)|
|[Get one now](https://www.seeedstudio.com/Arch-Mix-p-2901.html)|[Get one now](https://www.seeedstudio.com/Arch-Mix-Grove-Breakout-p-4362.html)|[Get one now](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|


- **Step 1** Connect the Grove - Thermal Imaging Camera to one of the two I2C ports(Default Address is J9 port).
- **Step 2** Plug the Arch Mix into Arch Mix Grove Breakout.
- **Step 3** Connect the Arch Mix to PC via a micro USB cable.


#### Software

We choose Arch Mix to read data from the camera by I2C interface, Arch Mix is perfectly compatible with Arduino IDE platform. 
First, you need to download the board of Arch Mix at Arduino IDE, you can find details in [Arch Mix github](https://github.com/Seeed-Studio/ArduinoCore-imxrt).
We need two parts to realize this project. First,an Arduino program should be downloaded to the Arch Mix in order to read data from I2C interface. Then we need to change the data into the frame of image by Python. As a matter of fact, Python 3.7 is ought to be downloaded for image processing.


- **Step 1** Open the Arduino IDE and select the Arch Mix board you have downloaded.
- **Step 2** Download the Arduino library from the [github](https://github.com/Seeed-Studio/Seeed_Arduino_MLX90640), Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) to install library for Arduino.
- **Step 3** Select File-> Examples -> Seeed_Arduino_MLX90640 -> BasicReadings, Download the code to Arch Mix.If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).
- **Step 4** Install the [python 3.7](https://www.python.org/downloads/), if your python is another version, we recommend you to reinstall the version 3.7 for this project.
- **Step 5** Open your "Command Prompt" on your computer, you can search "CMD" to open it from the "Start" menu.
- **Step 6** If you have already installed python 3.7, type the command to install the pypi package.
  


```
pip install seeed_python_ircamera
```

!!! Note
	Make sure your that the path of your python folder and python scripts folder(inside the python folder) added into your computer's environmental PATH.

- **Step 7** After insralling the package, check your Arch Mix is connecting your PC. Open your "Device manager" to find the port name of your device.(Like COM1,COM2 in Windows system)
- **Step 8** Type the following command to start the python programme of IR thermal camera. And your will see the thermal images on your computer.

```
ircamera PortName
```

PortName is like COM1,COM2 in Windows system.

!!!Note
	If you want to operate this programme on another system like linix or unix, please follow [this link](https://pypi.org/project/seeed-python-ircamera/) to configurate the programming environment.



![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/20191121_173909.gif)

### Getting Started by Raspberry Pi 

#### Hardware 

**Materials required**

|Raspberry Pi 4|Grove Base Hat for Raspberry Pi|Grove - Thermal Imaging Camera / IR Array MLX90640 110 degree|
|--------------|-------------------------------|-------------------------------------------------------------|
|![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/raspberry-pi-preview_2.jpg)|![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/httpsstatics3.jpg)|![](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/114020142-preview.jpg)|
|[Get one now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Get one now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get one now](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|

- **Step 1** Connect the Grove - Thermal Imaging Camera to one of the two I2C ports.
- **Step 2** Plug the Raspberry Pi 4 into Grove Base Hat for Raspberry Pi.
- **Step 3** Connect the Raspberry Pi to a display via HDMI cable, and power on the Raspberry Pi 4 by USB type-C.

#### Software 

Raspberry Pi 4 supports Python, so the project demo can be easily displayed from the Raspberry Pi 4 display if you follow the below steps.

- **Step 1** Install [grove.py](https://github.com/Seeed-Studio/grove.py) by the commend
```
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```
- **Step 2** Install the MLX90640 driver with the following commend.
Python environment(If you don't have authority of your Raspberry Pi):
```
pip3 install seeed-python-mlx90640
```
or (If you have the authority of yuor Raspberry Pi):
```
sudo pip3 install seeed-python-mlx90640
```
Upgrade to the latest driver:
```
pip3 install --upgrade seeed-python-mlx90640
```
- **Step 3** Check the corresponding i2c number of the Raspberry Pi:
```
ls /dev/i2c*
```
You may get the result like this:
```
/dev/i2c-1
```
- **Step 4** Check if the i2c device works properly， 0x33 is the MLX90640 i2c address.
```
i2cdetect -y -r 1
```
The received results:
```
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- 33 -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --

```
- **Step 5** Initialize the sersor object and config the sersor refresh rate. You can change the refresh rate by optional choice.(The maximal of the refresh rate of Raspberry Pi 4 is 8Hz)
```
import seeed_mlx90640
mlx = seeed_mlx90640.grove_mxl90640()
mlx.refresh_rate = seeed_mlx90640.RefreshRate.REFRESH_8_HZ  # The fastest for raspberry 4 
# REFRESH_0_5_HZ = 0b000  # 0.5Hz
# REFRESH_1_HZ = 0b001  # 1Hz
# REFRESH_2_HZ = 0b010  # 2Hz
# REFRESH_4_HZ = 0b011  # 4Hz
# REFRESH_8_HZ = 0b100  # 8Hz
# REFRESH_16_HZ = 0b101  # 16Hz
# REFRESH_32_HZ = 0b110  # 32Hz
# REFRESH_64_HZ = 0b111  # 64Hz
```
- **Step 6** Read the data from MLX90640 sensor
```
    try:
          frame = [0]*768
          mlx.getFrame(frame)
     except ValueError:
          continue
```
maybe you can add content that below to the config.txt to get the fastest rate recommended for compatibility
```
dtparam=i2c_arm=on,i2c_arm_baudrate=400000
```
This will give you a framerate of - at most - 8FPS.

## Resourse

- **[PDF]** [Datasheet of MLX90640](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/MLX90640-Datasheet-Melexis.pdf)
- **[PDF]** [Hardware Schematic](https://files.seeedstudio.com/wiki/IR-thermal-imaging-sensor-MLX90640-/MLX9064x.pdf)
- **[Github]** [Grove - Thermal Imaging Camera IR Array MLX90640 Python Library](https://github.com/Seeed-Studio/Seeed_Python_MLX90640)


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).