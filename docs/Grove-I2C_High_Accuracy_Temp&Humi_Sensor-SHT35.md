---
name: Grove - I2C High Accuracy Temp&Humi Sensor(SHT35)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020592
tags:
---

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/main.jpg)


Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) is based on SHT3x-DIS, which is the next generation of Sensirion’s temperature and humidity sensors. It builds on a new CMOSens® sensor chip that is at the heart of Sensirion’s new humidity and temperature platform. The SHT3x-DIS has increased intelligence, reliability and improved accuracy specifications compared to its predecessor. Its functionality includes enhanced signal processing, two distinctive and user selectable I2C addresses and communication speeds of up to 1 MHz.

<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Features

- High accuracy of ±1.5 %RH and ±0.1 °C
- Fully calibrated, linearized, and temperature compensated digital output
- I2C Interface with communication speeds up to 1MHz and two user selectable addresses
- Very fast start-up and measurement time


## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Specified Temperature Range|-40°C to +125°C|
|Temperature Resolution|0.01°C|
|Temperature Accuracy Tolerance|±0.1 °C|
|Specified Humidity Range|0%RH to +100%RH|
|Humidity Resolution|0.01%RH|
|Humidity Accuracy Tolerance|±1.5 %RH|
|Interface|I^2^C|
|I^2^C Address|0x45(default) / 0x44(optional)|


## Applications

- Industrial Freezers and Refrigerators
- Food Processing
- Personal Computers and Servers
- PC Peripherals
- Consumer Electronics
- Handheld/Portable Devices



## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/pin_out.jpg)
![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/pin_out_back.jpg)



### Schemaitc

**Power**

This module is based on **SHT35**, the input voltage of this chip range from 2.15v-5.5v, so you can use both 3.3v and 5v pin of Arduino to supply for this module.



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

| Seeeduino V4.2 | Base Shield | Grove-SHT35 Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Connect the Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/connect.jpg)



!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino      |  Grove Cable       | Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |



#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



- **Step 1.** Download the [Grove-SHT35 Sensor](https://github.com/Seeed-Studio/Seeed_SHT35) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove Temperature sensor SHT35 --> basic_demo**. 
    ![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/path.jpg)
    
    2. Open it in your computer by click the **basic_demo.ino** which you can find in the folder **XXXX\Arduino\libraries\Seeed_SHT35-master\examples\basic_demo**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/path_1.jpg)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```C++
#include "Seeed_SHT35.h"


/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SDAPIN  20
  #define SCLPIN  21
  #define RSTPIN  7
  #define SERIAL SerialUSB
#else
  #define SDAPIN  A4
  #define SCLPIN  A5
  #define RSTPIN  2
  #define SERIAL Serial
#endif

SHT35 sensor(SCLPIN);


void setup()
{
    SERIAL.begin(115200);
    delay(10);
    SERIAL.println("serial start!!");
    if(sensor.init())
    {
      SERIAL.println("sensor init failed!!!");
    }
    delay(1000);
}


void loop()
{
     u16 value=0;
    u8 data[6]={0};
    float temp,hum;
    if(NO_ERROR!=sensor.read_meas_data_single_shot(HIGH_REP_WITH_STRCH,&temp,&hum))
    {
      SERIAL.println("read temp failed!!");
      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    else
    {
      SERIAL.println("result======>");
      SERIAL.print("temperature =");
      SERIAL.println(temp);

      SERIAL.print("humidity =");
      SERIAL.println(hum);

      SERIAL.println("   ");
      SERIAL.println("   ");
      SERIAL.println("   ");
    }
    delay(1000);
}
```


!!!Attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


!!!success
     If every thing goes well, when you open the Serial Monitor , it may show as below:


```C++
serial start!!
=>
temperature =24.10
humidity =51.09


result======>
temperature =24.10
humidity =50.96
   
      
result======>
temperature =24.10
humidity =51.04
   
   
result======>
temperature =24.11
humidity =51.09
```


### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - SHT35 Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp%26Humi-Sensor%28SHT35%29-p-3182.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) to **I^2^C** port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/img/With_Hat.jpg)



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
python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 

```

Following is the grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py code.

```python

import time
from grove.i2c import Bus

def CRC(data):
  crc = 0xff
  for s in data:
    crc ^= s
    for i in range(8):
      if crc & 0x80:
        crc <<= 1
        crc ^= 0x131
      else:
        crc <<= 1
  return crc

class GroveTemperatureHumiditySensorSHT3x(object):

    def __init__(self, address=0x45, bus=None):
        self.address = address

        # I2C bus
        self.bus = Bus(bus)

    def read(self):
        # high repeatability, clock stretching disabled
        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])

        # measurement duration < 16 ms
        time.sleep(0.016)

        # read 6 bytes back
        # Temp MSB, Temp LSB, Temp CRC, Humididty MSB, Humidity LSB, Humidity CRC
        data = self.bus.read_i2c_block_data(0x45, 0x00, 6)
        temperature = data[0] * 256 + data[1]
        celsius = -45 + (175 * temperature / 65535.0)
        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0
        if data[2] != CRC(data[:2]):
            raise RuntimeError("temperature CRC mismatch")
        if data[5] != CRC(data[3:5]):
            raise RuntimeError("humidity CRC mismatch")
        return celsius, humidity


def main():
    sensor = GroveTemperatureHumiditySensorSHT3x()
    while True:
        temperature, humidity = sensor.read()

        print('Temperature in Celsius is {:.2f} C'.format(temperature))
        print('Relative Humidity is {:.2f} %'.format(humidity))

        time.sleep(1)

if __name__ == "__main__":
  main()


```

!!!success
    If everything goes well, you will be able to see the following result

```python

pi@raspberrypi:~/grove.py/grove $ python grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py 
Temperature in Celsius is 20.47 C
Relative Humidity is 40.28 %
Temperature in Celsius is 20.47 C
Relative Humidity is 40.47 %
Temperature in Celsius is 20.47 C
Relative Humidity is 40.70 %
Temperature in Celsius is 20.43 C
Relative Humidity is 40.70 %
Temperature in Celsius is 20.41 C
Relative Humidity is 40.60 %
^CTraceback (most recent call last):
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 89, in <module>
    main()
  File "grove_I2C_High_Accuracy_tem_hum_SHT35_sensor.py", line 86, in main
    time.sleep(1)
KeyboardInterrupt

```


You can quit this program by simply press ++ctrl+c++.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) Eagle Files](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/res/Grove%20-%20I2C%20High%20Accuracy%20Temp%26Humi%20Sensor%20(SHT35).zip)

- **[Zip]** [Seeed SHT35 Library](https://github.com/Seeed-Studio/Seeed_SHT35/archive/master.zip)

- **[PDF]** [Datasheet SHT3x-DIS](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temp-Humi_Sensor-SHT35/raw/master/res/Datasheet%20SHT3x-DIS.pdf)


## Projects

**Transportation data visualization with Google Map**：We use the Wio LTE cat.1 to monitor transportation GPS and other info. For cold chain, we can monitor the GPS location together with temperature and humidity. For the bicycling,  we can monitor the GPS location together with the hear rate. 

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed' width='350'></iframe>


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>