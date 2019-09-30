---
name: Grove - I2C UV Sensor (VEML6070)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020600
tags:
---

![](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/perspective.jpg)

The Grove - I2C UV Sensor(VEML6070) is an advanced ultraviolet (UV) light sensor with I2C protocol interface. Ultraviolet (UV) is electromagnetic radiation with a wavelength from 10 nm to 400 nm, shorter than that of visible light but longer than X-rays, this sensor detects 320-410nm light most effectively, and will converts solar UV light intensity to digital data.


This module is based on VEML6070, which has linear sensitivity to solar UV light and is easily adjusted by an external resistor.


What's more the active acknowledge (ACK) feature with threshold windows setting allows the UV sensor to send out a UVI alert message. Under a strong solar UVI condition, the smart ACK signal can be easily implemented by the software programming.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- Excellent performance of UV radiation measurement under long time solar UV exposure
- Excellent UV sensitivity and linearity
- Excellent temperature compensation
- High dynamic detection resolution
- Support acknowledge feature (ACK)



## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Range of spectral sensitivity|320 ~ 410 nm|
|Peak Sensitivity|355 nm|
|UVA Sensitivity|5 μW/cm2/step(typical) |
|Interface|I^2^C|
|I^2^C Address|0x38(Data LSB) / 0x39(Data MSB)|


!!!Attention
        Actually, this sensor has 3 I^2^C address, each address 


## Typical applications

- Solar UV indicator
- Cosmetic / outdoor sport handheld product
- Consumer products

## Hardware Overview

### Pin Out


![](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/pin_out.jpg)

![](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/pin_out_back.jpg)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - I2C UV Sensor (VEML6070) |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Connect the Grove - I2C UV Sensor (VEML6070) to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/connect.jpg)


!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino      |  Grove Cable       | Grove - I2C UV Sensor (VEML6070) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Seeed_VEML6070](https://github.com/Seeed-Studio/Seeed_VEML6070) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Seeed_VEML6070 --> INT_mode**. 
    ![](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/path_1.jpg)
    
    2. Open it in your computer by click the **INT_mode.ino** which you can find in the folder **XXXX\Arduino\libraries\Seeed_VEML6070-master\examples\INT_mode**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/path_2.jpg)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.


```C++
#include "Seeed_VEML6070.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

VEML6070 sensor;

char *UV_str[]={"low level","moderate level","high_level","very high","extreme"};

err_t read_UV()
{
    err_t ret=NO_ERROR;
    u16 step;
    sensor.wait_for_ready();
    CHECK_RESULT(ret,sensor.read_step(step));
    SERIAL.print("UV step = ");
    SERIAL.println(step);
    RISK_LEVEL level=sensor.convert_to_risk_level(step);
    SERIAL.print("UV level is ");
    SERIAL.println(UV_str[level]);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    return ret;
}



void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    delay(1000);
    if(sensor.init())
    {
      SERIAL.println("init failed!!!");
    }
    /*threshold is 145 steps*/
    /*enable*/
    sensor.set_interrupt(INT_145_STEP,ENABLE);
}


void loop()
{
    if(read_UV())
    {
      SERIAL.print("read UV sensor failed!!");
    }
    //sensor.enable();
    //sensor.disable();
    delay(1000);
}
```

!!!Note
        **There are 2 demos in the library:**  
        **basic_demo.ino**
        >This example can get the UV index and UV level from the serial.polling for data. 
        
        **INT_mode.ino**  
        >here is a INT pad on the sensor module which connect to ACK pin of VEML6070. You can set UV threshold by 102 steps or 145 steps(only two choises).The INT pin outputs low when the UV value beyond limit.You can attach INT pin to a interrupt pin of host,To improve the efficiency of program operation.  


!!!Attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.



- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


!!!success
     If every thing goes well, when you use UV light to illuminate this module, you will see information like:


```
4serial start!!
cmd reg=32
UV step = 20
UV level is low level
 
 
 
UV step = 125
UV level is low level
 
 
 
UV step = 511
UV level is low level

```


#### Alert Function


As we can see in the hardware Overview part, there is a ACK pin for user to work as a interrupt signal. The good news is that there are two threshold 102 step and 145 step to choose, the bad one is that you can not set your own number, only 102 and 145 are valid. The ACK pin default output low, once the UV value exceed the threshold you setted, the ACK pin output High. Let's come back to the example code **INT_mode.ino**.

Line 46, the default setting of threshold is 145, if you want to use the 102, you should just change the code as below:

```C++
sensor.set_interrupt(INT_145_STEP,ENABLE);
```
$$
\downdownarrows
$$

```C++
sensor.set_interrupt(INT_102_STEP,ENABLE);
```



### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - I2C UV Sensor (VEML6070)|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove - I2C UV Sensor (VEML6070) to **I^2^C** port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/img/UV_Hat.jpg)




#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python grove_uv_sensor.py 

```

Following is the grove_uv_sensor.py code.

```python


from __future__ import print_function
import time, sys, signal, atexit
from upm import pyupm_veml6070 as veml6070

def main():
    # Instantiate a Vishay UV Sensor on the I2C bus 0
    veml6070_sensor = veml6070.VEML6070(0);

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from abpdrrt005pg2a5
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    # Read the value every second and detect the pressure
    while(1):
        print("UV Value: {0}".format(veml6070_sensor.getUVIntensity()))
        time.sleep(1)

if __name__ == '__main__':
    main()


```

!!!success
    If everything goes well, you will be able to see the following result

```python

pi@raspberrypi:~/grove.py/grove $ python grove_uv_sensor.py 
UV Value: 0
UV Value: 0
UV Value: 0
UV Value: 0
^CExiting

```


You can quit this program by simply press ++ctrl+c++.



## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - I2C UV Sensor (VEML6070) Eagle Files](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip)

- **[Zip]** [Seeed VEML6070 Library](https://github.com/Seeed-Studio/Seeed_VEML6070/archive/master.zip)

- **[PDF]** [Datasheet VEML6070](https://github.com/SeeedDocument/Grove-I2C_UV_Sensor-VEML6070/raw/master/res/VEML6070.pdf)

- **[PDF]** [VEML6070 Application Note](https://github.com/Seeed-Studio/Seeed_VEML6070/raw/master/doc/designingveml6070.pdf)



## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>