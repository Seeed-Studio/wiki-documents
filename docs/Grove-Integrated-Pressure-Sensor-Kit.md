---
name: Grove - IMU 9DOF (lcm20600+AK09918)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020585
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg)


 The Grove - IMU 9DOF (lcm20600+AK09918) is a 9 Degrees of Freedom [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (Inertial measurement unit) which combines gyroscope, accelerometer and electronic compass. We use two chips LCM20600+AK09918 to implement those 3 functions.
 
 The LCM20600 is a 6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer. [Gyroscope](https://en.wikipedia.org/wiki/Gyroscope) is a device used for measuring or maintaining orientation and angular velocity, normally, we use it to measure spin and twist. [Accelerometer](https://en.wikipedia.org/wiki/Accelerometer) is a device that measures proper acceleration.

 The AK09918 is a 3-axis [electronic compass](https://en.wikipedia.org/wiki/Magnetometer) IC with high sensitive Hall sensor technology. We use an electronic compass to measure the magnetic force, which can provide us with the direction information. 

 As its name suggests just use this single small module and you can measure 9 Degrees of Freedom: angular rotation in x/y/z axis, acceleration in x/y/z axis, and magnetic force in x/y/z axis. 
 
 What an amazing module! Just use this module to build your own motion and orientation system😄



<p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- 3-Axis Gyroscope with Programmable FSR of ±250 dps, ±500 dps, ±1000 dps, and ±2000 dps
- 3-Axis Accelerometer with Programmable FSR of ±2g, ±4g, ±8g, and ±16g
- 3-Axis Electronic Compass with 0.15 μT/LSB (typ.) sensitivity
- User-programmable interrupts
- 16-bit ADC resolution and Programmable Filters for acceleration measurements
- 16-bit ADC resolution for magnetic measurements
- 1 KB FIFO buffer enables the applications processor to read the data in bursts(LCM20600)
- Embedded temperature sensor
- Magnetic sensor overflow monitor function
- Built-in oscillator for internal clock source



## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-30°C to +85°C|
|Gyroscope Full-Scale Range|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Gyroscope Sensitivity Scale Factor|131 LSB/(dps)@±250 dps <br>65.5 LSB/(dps)@±500 dps <br>32.8 LSB/(dps)@±1000 dps <br>16.4 LSB/(dps)@±2000 dps|
|Accelerometer Full-Scale Range|±2g, ±4g, ±8g, ±16g|
|Accelerometer Sensitivity Scale Factor|16384 LSB/g@±2g <br>8192 LSB/g@±4g <br>4096 LSB/g@±8g <br>2048 LSB/g@±16g|
|Magnetic sensor measurement range|±4912μT (typical)|
|Magnetic sensor sensitivity|0.15μT (typical)|
|Interface|I^2^C|
|I^2^C Address|**LCM20600** <br> 0x69(default) <br> 0x68(optional) <br> **AK09918** <br> 0x0C|

## Applications

- Smartphones and Tablets
- Wearable Sensors


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg)


!!!Danger
        The default I2C address of LCM20600 is 0x69, you can change it to 0x68. The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.


### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg)

Since the operating voltage range of LCM20600 is 1.71V to 3.45V, and the operating voltage range of AK09918 is 1.65V to 1.95V, we use a power conversion chip **XC6206P182MR** to provide a stable 1.8V for both chips.

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of two chips use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




- **Step 1.** Connect the Grove - IMU 9DOF (lcm20600+AK09918) to port **I^2^C** of Grove-Base Shield.

---
name: Grove - IMU 9DOF (lcm20600+AK09918)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020585
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg)


 The Grove - IMU 9DOF (lcm20600+AK09918) is a 9 Degrees of Freedom [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (Inertial measurement unit) which combines gyroscope, accelerometer and electronic compass. We use two chips LCM20600+AK09918 to implement those 3 functions.
 
 The LCM20600 is a 6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer. [Gyroscope](https://en.wikipedia.org/wiki/Gyroscope) is a device used for measuring or maintaining orientation and angular velocity, normally, we use it to measure spin and twist. [Accelerometer](https://en.wikipedia.org/wiki/Accelerometer) is a device that measures proper acceleration.

 The AK09918 is a 3-axis [electronic compass](https://en.wikipedia.org/wiki/Magnetometer) IC with high sensitive Hall sensor technology. We use an electronic compass to measure the magnetic force, which can provide us with the direction information. 

 As its name suggests just use this single small module and you can measure 9 Degrees of Freedom: angular rotation in x/y/z axis, acceleration in x/y/z axis, and magnetic force in x/y/z axis. 
 
 What an amazing module! Just use this module to build your own motion and orientation system😄



<p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- 3-Axis Gyroscope with Programmable FSR of ±250 dps, ±500 dps, ±1000 dps, and ±2000 dps
- 3-Axis Accelerometer with Programmable FSR of ±2g, ±4g, ±8g, and ±16g
- 3-Axis Electronic Compass with 0.15 μT/LSB (typ.) sensitivity
- User-programmable interrupts
- 16-bit ADC resolution and Programmable Filters for acceleration measurements
- 16-bit ADC resolution for magnetic measurements
- 1 KB FIFO buffer enables the applications processor to read the data in bursts(LCM20600)
- Embedded temperature sensor
- Magnetic sensor overflow monitor function
- Built-in oscillator for internal clock source



## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-30°C to +85°C|
|Gyroscope Full-Scale Range|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Gyroscope Sensitivity Scale Factor|131 LSB/(dps)@±250 dps <br>65.5 LSB/(dps)@±500 dps <br>32.8 LSB/(dps)@±1000 dps <br>16.4 LSB/(dps)@±2000 dps|
|Accelerometer Full-Scale Range|±2g, ±4g, ±8g, ±16g|
|Accelerometer Sensitivity Scale Factor|16384 LSB/g@±2g <br>8192 LSB/g@±4g <br>4096 LSB/g@±8g <br>2048 LSB/g@±16g|
|Magnetic sensor measurement range|±4912μT (typical)|
|Magnetic sensor sensitivity|0.15μT (typical)|
|Interface|I^2^C|
|I^2^C Address|**LCM20600** <br> 0x69(default) <br> 0x68(optional) <br> **AK09918** <br> 0x0C|

## Applications

- Smartphones and Tablets
- Wearable Sensors


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg)


!!!Danger
        The default I2C address of LCM20600 is 0x69, you can change it to 0x68. The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.


### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg)

Since the operating voltage range of LCM20600 is 1.71V to 3.45V, and the operating voltage range of AK09918 is 1.65V to 1.95V, we use a power conversion chip **XC6206P182MR** to provide a stable 1.8V for both chips.

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of two chips use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




- **Step 1.** Connect the Grove - IMU 9DOF (lcm20600+AK09918) to port **I^2^C** of Grove-Base Shield.

---
name: Grove - IMU 9DOF (lcm20600+AK09918)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020585
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg)


 The Grove - IMU 9DOF (lcm20600+AK09918) is a 9 Degrees of Freedom [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (Inertial measurement unit) which combines gyroscope, accelerometer and electronic compass. We use two chips LCM20600+AK09918 to implement those 3 functions.
 
 The LCM20600 is a 6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer. [Gyroscope](https://en.wikipedia.org/wiki/Gyroscope) is a device used for measuring or maintaining orientation and angular velocity, normally, we use it to measure spin and twist. [Accelerometer](https://en.wikipedia.org/wiki/Accelerometer) is a device that measures proper acceleration.

 The AK09918 is a 3-axis [electronic compass](https://en.wikipedia.org/wiki/Magnetometer) IC with high sensitive Hall sensor technology. We use an electronic compass to measure the magnetic force, which can provide us with the direction information. 

 As its name suggests just use this single small module and you can measure 9 Degrees of Freedom: angular rotation in x/y/z axis, acceleration in x/y/z axis, and magnetic force in x/y/z axis. 
 
 What an amazing module! Just use this module to build your own motion and orientation system😄



<p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- 3-Axis Gyroscope with Programmable FSR of ±250 dps, ±500 dps, ±1000 dps, and ±2000 dps
- 3-Axis Accelerometer with Programmable FSR of ±2g, ±4g, ±8g, and ±16g
- 3-Axis Electronic Compass with 0.15 μT/LSB (typ.) sensitivity
- User-programmable interrupts
- 16-bit ADC resolution and Programmable Filters for acceleration measurements
- 16-bit ADC resolution for magnetic measurements
- 1 KB FIFO buffer enables the applications processor to read the data in bursts(LCM20600)
- Embedded temperature sensor
- Magnetic sensor overflow monitor function
- Built-in oscillator for internal clock source



## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-30°C to +85°C|
|Gyroscope Full-Scale Range|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Gyroscope Sensitivity Scale Factor|131 LSB/(dps)@±250 dps <br>65.5 LSB/(dps)@±500 dps <br>32.8 LSB/(dps)@±1000 dps <br>16.4 LSB/(dps)@±2000 dps|
|Accelerometer Full-Scale Range|±2g, ±4g, ±8g, ±16g|
|Accelerometer Sensitivity Scale Factor|16384 LSB/g@±2g <br>8192 LSB/g@±4g <br>4096 LSB/g@±8g <br>2048 LSB/g@±16g|
|Magnetic sensor measurement range|±4912μT (typical)|
|Magnetic sensor sensitivity|0.15μT (typical)|
|Interface|I^2^C|
|I^2^C Address|**LCM20600** <br> 0x69(default) <br> 0x68(optional) <br> **AK09918** <br> 0x0C|

## Applications

- Smartphones and Tablets
- Wearable Sensors


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg)


!!!Danger
        The default I2C address of LCM20600 is 0x69, you can change it to 0x68. The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.


### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg)

Since the operating voltage range of LCM20600 is 1.71V to 3.45V, and the operating voltage range of AK09918 is 1.65V to 1.95V, we use a power conversion chip **XC6206P182MR** to provide a stable 1.8V for both chips.

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of two chips use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




- **Step 1.** Connect the Grove - IMU 9DOF (lcm20600+AK09918) to port **I^2^C** of Grove-Base Shield.

---
name: Grove - IMU 9DOF (lcm20600+AK09918)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020585
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg)


 The Grove - IMU 9DOF (lcm20600+AK09918) is a 9 Degrees of Freedom [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (Inertial measurement unit) which combines gyroscope, accelerometer and electronic compass. We use two chips LCM20600+AK09918 to implement those 3 functions.
 
 The LCM20600 is a 6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer. [Gyroscope](https://en.wikipedia.org/wiki/Gyroscope) is a device used for measuring or maintaining orientation and angular velocity, normally, we use it to measure spin and twist. [Accelerometer](https://en.wikipedia.org/wiki/Accelerometer) is a device that measures proper acceleration.

 The AK09918 is a 3-axis [electronic compass](https://en.wikipedia.org/wiki/Magnetometer) IC with high sensitive Hall sensor technology. We use an electronic compass to measure the magnetic force, which can provide us with the direction information. 

 As its name suggests just use this single small module and you can measure 9 Degrees of Freedom: angular rotation in x/y/z axis, acceleration in x/y/z axis, and magnetic force in x/y/z axis. 
 
 What an amazing module! Just use this module to build your own motion and orientation system😄



<p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- 3-Axis Gyroscope with Programmable FSR of ±250 dps, ±500 dps, ±1000 dps, and ±2000 dps
- 3-Axis Accelerometer with Programmable FSR of ±2g, ±4g, ±8g, and ±16g
- 3-Axis Electronic Compass with 0.15 μT/LSB (typ.) sensitivity
- User-programmable interrupts
- 16-bit ADC resolution and Programmable Filters for acceleration measurements
- 16-bit ADC resolution for magnetic measurements
- 1 KB FIFO buffer enables the applications processor to read the data in bursts(LCM20600)
- Embedded temperature sensor
- Magnetic sensor overflow monitor function
- Built-in oscillator for internal clock source



## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-30°C to +85°C|
|Gyroscope Full-Scale Range|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Gyroscope Sensitivity Scale Factor|131 LSB/(dps)@±250 dps <br>65.5 LSB/(dps)@±500 dps <br>32.8 LSB/(dps)@±1000 dps <br>16.4 LSB/(dps)@±2000 dps|
|Accelerometer Full-Scale Range|±2g, ±4g, ±8g, ±16g|
|Accelerometer Sensitivity Scale Factor|16384 LSB/g@±2g <br>8192 LSB/g@±4g <br>4096 LSB/g@±8g <br>2048 LSB/g@±16g|
|Magnetic sensor measurement range|±4912μT (typical)|
|Magnetic sensor sensitivity|0.15μT (typical)|
|Interface|I^2^C|
|I^2^C Address|**LCM20600** <br> 0x69(default) <br> 0x68(optional) <br> **AK09918** <br> 0x0C|

## Applications

- Smartphones and Tablets
- Wearable Sensors


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg)


!!!Danger
        The default I2C address of LCM20600 is 0x69, you can change it to 0x68. The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.


### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg)

Since the operating voltage range of LCM20600 is 1.71V to 3.45V, and the operating voltage range of AK09918 is 1.65V to 1.95V, we use a power conversion chip **XC6206P182MR** to provide a stable 1.8V for both chips.

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of two chips use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




- **Step 1.** Connect the Grove - IMU 9DOF (lcm20600+AK09918) to port **I^2^C** of Grove-Base Shield.

---
name: Grove - IMU 9DOF (lcm20600+AK09918)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020585
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg)


 The Grove - IMU 9DOF (lcm20600+AK09918) is a 9 Degrees of Freedom [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (Inertial measurement unit) which combines gyroscope, accelerometer and electronic compass. We use two chips LCM20600+AK09918 to implement those 3 functions.
 
 The LCM20600 is a 6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer. [Gyroscope](https://en.wikipedia.org/wiki/Gyroscope) is a device used for measuring or maintaining orientation and angular velocity, normally, we use it to measure spin and twist. [Accelerometer](https://en.wikipedia.org/wiki/Accelerometer) is a device that measures proper acceleration.

 The AK09918 is a 3-axis [electronic compass](https://en.wikipedia.org/wiki/Magnetometer) IC with high sensitive Hall sensor technology. We use an electronic compass to measure the magnetic force, which can provide us with the direction information. 

 As its name suggests just use this single small module and you can measure 9 Degrees of Freedom: angular rotation in x/y/z axis, acceleration in x/y/z axis, and magnetic force in x/y/z axis. 
 
 What an amazing module! Just use this module to build your own motion and orientation system😄



<p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- 3-Axis Gyroscope with Programmable FSR of ±250 dps, ±500 dps, ±1000 dps, and ±2000 dps
- 3-Axis Accelerometer with Programmable FSR of ±2g, ±4g, ±8g, and ±16g
- 3-Axis Electronic Compass with 0.15 μT/LSB (typ.) sensitivity
- User-programmable interrupts
- 16-bit ADC resolution and Programmable Filters for acceleration measurements
- 16-bit ADC resolution for magnetic measurements
- 1 KB FIFO buffer enables the applications processor to read the data in bursts(LCM20600)
- Embedded temperature sensor
- Magnetic sensor overflow monitor function
- Built-in oscillator for internal clock source



## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-30°C to +85°C|
|Gyroscope Full-Scale Range|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Gyroscope Sensitivity Scale Factor|131 LSB/(dps)@±250 dps <br>65.5 LSB/(dps)@±500 dps <br>32.8 LSB/(dps)@±1000 dps <br>16.4 LSB/(dps)@±2000 dps|
|Accelerometer Full-Scale Range|±2g, ±4g, ±8g, ±16g|
|Accelerometer Sensitivity Scale Factor|16384 LSB/g@±2g <br>8192 LSB/g@±4g <br>4096 LSB/g@±8g <br>2048 LSB/g@±16g|
|Magnetic sensor measurement range|±4912μT (typical)|
|Magnetic sensor sensitivity|0.15μT (typical)|
|Interface|I^2^C|
|I^2^C Address|**LCM20600** <br> 0x69(default) <br> 0x68(optional) <br> **AK09918** <br> 0x0C|

## Applications

- Smartphones and Tablets
- Wearable Sensors


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg)


!!!Danger
        The default I2C address of LCM20600 is 0x69, you can change it to 0x68. The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.


### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg)

Since the operating voltage range of LCM20600 is 1.71V to 3.45V, and the operating voltage range of AK09918 is 1.65V to 1.95V, we use a power conversion chip **XC6206P182MR** to provide a stable 1.8V for both chips.

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of two chips use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




- **Step 1.** Connect the Grove - IMU 9DOF (lcm20600+AK09918) to port **I^2^C** of Grove-Base Shield.

---
name: Grove - IMU 9DOF (lcm20600+AK09918)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020585
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg)


 The Grove - IMU 9DOF (lcm20600+AK09918) is a 9 Degrees of Freedom [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (Inertial measurement unit) which combines gyroscope, accelerometer and electronic compass. We use two chips LCM20600+AK09918 to implement those 3 functions.
 
 The LCM20600 is a 6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer. [Gyroscope](https://en.wikipedia.org/wiki/Gyroscope) is a device used for measuring or maintaining orientation and angular velocity, normally, we use it to measure spin and twist. [Accelerometer](https://en.wikipedia.org/wiki/Accelerometer) is a device that measures proper acceleration.

 The AK09918 is a 3-axis [electronic compass](https://en.wikipedia.org/wiki/Magnetometer) IC with high sensitive Hall sensor technology. We use an electronic compass to measure the magnetic force, which can provide us with the direction information. 

 As its name suggests just use this single small module and you can measure 9 Degrees of Freedom: angular rotation in x/y/z axis, acceleration in x/y/z axis, and magnetic force in x/y/z axis. 
 
 What an amazing module! Just use this module to build your own motion and orientation system😄



<p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- 3-Axis Gyroscope with Programmable FSR of ±250 dps, ±500 dps, ±1000 dps, and ±2000 dps
- 3-Axis Accelerometer with Programmable FSR of ±2g, ±4g, ±8g, and ±16g
- 3-Axis Electronic Compass with 0.15 μT/LSB (typ.) sensitivity
- User-programmable interrupts
- 16-bit ADC resolution and Programmable Filters for acceleration measurements
- 16-bit ADC resolution for magnetic measurements
- 1 KB FIFO buffer enables the applications processor to read the data in bursts(LCM20600)
- Embedded temperature sensor
- Magnetic sensor overflow monitor function
- Built-in oscillator for internal clock source



## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-30°C to +85°C|
|Gyroscope Full-Scale Range|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Gyroscope Sensitivity Scale Factor|131 LSB/(dps)@±250 dps <br>65.5 LSB/(dps)@±500 dps <br>32.8 LSB/(dps)@±1000 dps <br>16.4 LSB/(dps)@±2000 dps|
|Accelerometer Full-Scale Range|±2g, ±4g, ±8g, ±16g|
|Accelerometer Sensitivity Scale Factor|16384 LSB/g@±2g <br>8192 LSB/g@±4g <br>4096 LSB/g@±8g <br>2048 LSB/g@±16g|
|Magnetic sensor measurement range|±4912μT (typical)|
|Magnetic sensor sensitivity|0.15μT (typical)|
|Interface|I^2^C|
|I^2^C Address|**LCM20600** <br> 0x69(default) <br> 0x68(optional) <br> **AK09918** <br> 0x0C|

## Applications

- Smartphones and Tablets
- Wearable Sensors


## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg)


!!!Danger
        The default I2C address of LCM20600 is 0x69, you can change it to 0x68. The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.


### Schemaitc

**Power**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg)

Since the operating voltage range of LCM20600 is 1.71V to 3.45V, and the operating voltage range of AK09918 is 1.65V to 1.95V, we use a power conversion chip **XC6206P182MR** to provide a stable 1.8V for both chips.

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of two chips use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




- **Step 1.** Connect the Grove - IMU 9DOF (lcm20600+AK09918) to port **I^2^C** of Grove-Base Shield.

---
name: Grove-Integrated-Pressure-Sensor-Kit
category: sensor
bzurl: 
surveyurl: 
sku: 110020248
tags:
---


![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-wiki.jpg)


Grove integrated pressure sensor suite (MPX5700AP), this module adopts advanced integrated silicon pressure sensor MPX5700AP, which has the advantages of high precision, good reliability and no calibration. It is very suitable for the construction of Arduino pressure measurement system, capable of measuring air pressure in the range of 15Kpa to 700Kpa.We included a syringe and a rubber tube in the kit.  


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

 - 2.5% Maximum Error over 0° to 85°C
 - Available in Absolute, Differential and Gauge Configurations
 - Patented Silicon Shear Stress Strain Gauge
 - Durable Epoxy Unibody Element


!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)




## Specification

|Parameter|Value/Range|
|---|---|
|Operating Voltage|	3.3V/5V DC|
| output interface | analog |
|Measuring Range|15Kpa-700Kpa|
|Appearance size|<20*40mm|


## Hardware Overview


![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-pin.jpg)


## Platforms Supported


| Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


!!!Caution  

    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


!!!Note

    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.




**Materials required**


| Seeeduino V4.2 | Grove-Integrated-Pressure-Sensor-Kit | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-210-157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-p-4295.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


!!!note

	**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
	**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




#### Hardware Connection


- **Step 1.** Connect Grove Integrated Pressure Sensor to port **A0** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP-con.jpg)


!!!Note   
     
    If we don't have Grove Base Shield, We also can directly connect Grove-Integrated-Pressure-Sensor-Kit to Seeeduino as below.





| Seeeduino       | Grove-Integrated-Pressure-Sensor-Kit |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| A0            | Yellow                  |



#### Software


!!!Attention

    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



- **Step 1.** Copy the code below into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).


```c
int rawValue; // A/D readings
int offset = 410; // zero pressure adjust
int fullScale = 9630; // max pressure (span) adjust
float pressure; // final pressure
#define SERIAL Serial

void setup() {
  SERIAL.begin(9600);
}

void loop() {
  rawValue = 0;
  for (int x = 0; x < 10; x++) rawValue = rawValue + analogRead(A0);
  pressure = (rawValue - offset) * 700.0 / (fullScale - offset); // pressure conversion

  SERIAL.print("Raw A/D is  ");
  SERIAL.print(rawValue);
  SERIAL.print("   Pressure is  ");
  SERIAL.print(pressure, 1); // one decimal places
  SERIAL.println("  kPa");
  delay(1000);
}
```


- **Step 2.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.


![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result1.png)


- **Step 3.**  Now you can use this sensor, and the output will be like this:


![](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/img/result2.png)


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove%20-%20Integrated%20Pressure%20Sensor%20Kit%20(MPX5700AP)_v1.0.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources


- **[ZIP]** [Grove Integrated Pressure Sensor schematic diagram](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove%20-%20Integrated%20Pressure%20Sensor%20Kit%20(MPX5700AP)_v1.0.zip)

- **[PDF]** [LMV358 Datasheet](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/LMV358_datasheet.pdf)

- **[PDF]** [MPX5700AP Datasheet](https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/LMV358_datasheet.pdf)


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Integrated-Pressure-Sensor-Kit-MPX5700AP/res/Grove%20-%20Integrated%20Pressure%20Sensor%20Kit%20(MPX5700AP)_v1.0.zip" style="border-radius: 0px 0px 4px 4px; height:500px; border-style: solid; border-width: 1px; border-color: rgb(241,241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" /></div>


## Tech Support


Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>                                                                                                                                                                                                                                                                                                                                                                                                                                               
