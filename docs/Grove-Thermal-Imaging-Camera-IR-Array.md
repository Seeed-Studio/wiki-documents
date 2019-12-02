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


![](https://github.com/SeeedDocument/IR-thermal-imaging-sensor-MLX90640-/raw/master/114020142-previewbig.jpg)


Grove - Thermal Imaging Camera is a thermal sensor which carries MLX90640 IR Array. The camera can present dynamic thermal images and detect the surrounding temperature from -40℃~300℃. The camera with narrow-angle/wide-angle has an FOV(Field of View) of 55°x35°/110°x75°.   


The IR thermal camera carries a 32x24 array of thermal sensors (MLX90640), it can detect the temperature of objects from feet away with the accuracy of ±1.5℃. In order to obtain the thermal image easily, I2C protocol is used to get the low-resolution image from the camera. 


This module connects the MCU with the I2C interface. However, it needs an MCU which has over 20000 bytes of RAM to drive the camera. As a matter of fact, Dev board like Arduino Uno can not be used with this Sensor camera due to its lower ability of calculation. We recommend you to choose Arch Mix as an MCU to control the camera because it really has a good performance to process the complex data from the IR sensor camera.


<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> 



## Features

- IR Thermal Sensor Array 32X24(MLX90640)
- 55°x35°/110°x75° FOV(field of view)
- Temperature measurement range:-40℃~300℃
- I2C Grove interface


## Specification

|Item|Value|
|----|----|
|Operating Voltage|3V ~ 6V|
|Current consumption|~18mA|
|FOV(Field of View)|55°x35°/110°x75°|
|Temperature Measurement Range|-40°C-300°C|
|Temperature Resolution|±1.5°C|
|Refresh Rate|0.5Hz-64Hz|
|Interface|I2C Grove interface|
|I2C Address|0x33|

## Getting Started


### Getting Started by python

#### Hardware

**Materials required**


|Arch Mix|Arch Mix Grove Breakout|Grove - Thermal Imaging Camera / IR Array MLX90640 110 degree|
|-----|-----|----|
|![](https://github.com/SeeedDocument/IR-thermal-imaging-sensor-MLX90640-/raw/master/main1.jpg)|![](https://github.com/SeeedDocument/IR-thermal-imaging-sensor-MLX90640-/raw/master/103030315-preview.jpg)|![](https://github.com/SeeedDocument/IR-thermal-imaging-sensor-MLX90640-/raw/master/114020142-preview.jpg)|
|[Get one now](https://www.seeedstudio.com/Arch-Mix-p-2901.html)|[Get one now](https://www.seeedstudio.com/Arch-Mix-Grove-Breakout-p-4362.html)|[Get one now](https://www.seeedstudio.com/Grove-Thermal-Imaging-Camera-IR-Array-MLX90640-110-degree-p-4334.html)|


- **Step 1** Connect the Grove - Thermal Imaging Camera to one of the two I2C ports(Default Address is J9 port).
- **Step 2** Plug the Arch Mix into Arch Mix Grove Breakout.
- **Step 3** Connect the Arch Mix to PC via a micro USB cable.


#### Software

This project is based on python 3.7 platform, so please set up python 3.7 environment first on your computer.

- **Step 1** Install the [python 3.7](https://www.python.org/downloads/), if your python is another version, we recommend you to reinstall the version 3.7 for this project.
- **Step 2** Open your "Command Prompt" on your computer, you can search "CMD" to open it from the "Start" menu.
- **Step 3** If you have already installed python 3.7, type the command to install the pypi package.
  
```
pip install seeed_python_ircamera
```

!!! Note
	Make sure your that the path of your python folder and python scripts folder(inside the python folder) added into your computer's environmental PATH.

- **Step 4** After insralling the package, check your Arch Mix is connecting your PC. Open your "Device manager" to find the port name of your device.(Like COM1,COM2 in Windows system)
- **Step 5** Type the following command to start the python programme of IR thermal camera. And your will see the thermal images on your computer.

```
ircamera PortName
```

PortName is like COM1,COM2 in Windows system.

!!!Note
	If you want to operate this programme on another system like linix or unix, please follow [this link](https://pypi.org/project/seeed-python-ircamera/) to configurate the programming environment.



![](https://github.com/SeeedDocument/IR-thermal-imaging-sensor-MLX90640-/raw/master/20191121_173909.gif)



## Resourse

- **[PDF]** [Datasheet of MLX90640](https://github.com/SeeedDocument/IR-thermal-imaging-sensor-MLX90640-/raw/master/MLX90640-Datasheet-Melexis.pdf)


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).