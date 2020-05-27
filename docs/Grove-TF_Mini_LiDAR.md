---
name: Grove-TF Mini LiDAR
category: Sensor
bzurl: https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html
oldwikiname: Grove-TF Mini LiDAR
prodimagename:
surveyurl:
sku: 114991434
tags: io_5v, plat_duino

---
![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR.JPG)

This product is based on ToF (Time of Flight) principle and integrated with unique optical and electrical designs, so as to achieve stable, precise, high sensitivity and high-speed distance detection.

ToF is the abbreviation of Time of Flight technology, and its operating principle is as follows: a modulated near-infrared light is sent from the sensor and reflected by an object; the distance to the object to be shot can be converted with the sensor by calculating the time difference or phase difference between the light sending and the light reflection, so as to produce the depth information.

[![Get one now](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)

!!!Warning
    Prevent dust or any other foreign matter from entering the lens; otherwise it may affect the light transmission.


## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-TF Mini LiDAR V1.0 | Initial | Nov 2017      |


## Specification
---
| Product   Name                              | TFmini                           |
|---------------------------------------------|----------------------------------|
| Operating range                             | 0.3m-12m                         |
| Maximum operating range at 10% reflectivity | 5m                               |
| Average power consumption                   | 0.6W                            |
| Applicable voltage range                    | 4.5V-6V                          |
| Acceptance angle                            | 2.3°                             |
| Minimum resolution ratio                    | 1cm                              |
| Frequency                                   | 100Hz                            |
| Accuracy                                    | 1%   (less than 6m), 2% (6m-12m) |
| Distance detection unit                     | cm                               |
| Wavelength                                  | 850nm                            |
| Size                                        | 42mm×15mm×16mm                   |
| Operating temperature                       | -20℃-60℃                       |
| Light sensitivity                           | 70,000lux                        |
| Weight                                      | 4.7g                             |
| Communication interface                     | UART 115200                      |
| LED peak current                            | 800ma                            |
| Serial port TTL voltage level               | 3.3V                              |
| Electromagnetic Compatibility(EMC)          | EN 55032 Class B                  |

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started
---
### Play With Arduino

#### Hardware

- Step 1. Prepare the below stuffs:

| Seeeduino Lite |  Grove-TF-Mini-LiDAR |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Seeed%20lite_S.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html)|[Get ONE Now](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)|

- Step 2. Connect Grove-TF-Mini-LiDAR to UART port of Seeeduino Lite.
- Step 3. Connect Seeeduino to PC through a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Seeeduino.JPG)

!!!Note
    The Grove-TF Mini LiDAR's UART baud rate is 115200 and the SoftwareI2C can't support it. So if we use 1 hardware UART to hook up the sensor and other hardware UART for Serial Port display, we need at least 2 hardware UART platforms, such as arduino mega, seeeduino lite and so on.  If we only have 1 UART platform(ie. seeeduino v4.2, arduino uno), we can use the I2C LCD as display.


#### Software

- **Step 1**. The Grove-TF Mini LiDAR is a hexadecimal output data. Each frame data is encoded with 9 bytes, including 1 distance data (Dist). Each distance data has corresponding signal strength information (Strength). The frame end is the data parity bit. 

| Byte  | Data encoding interpretation                |
|-------|---------------------------------------------|
| Byte1 | 0x59, frame header, all frames are the same |
| Byte2 | 0x59, frame header, all frames are the same |
| Byte3 | Dist_L distance value is a low 8-bit.       |
| Byte4 | Dist_H distance value is a high 8-bit.      |
| Byte5 | Strength_L is a low 8-bit.                  |
| Byte6 | Strength_H is a high 8-bit.                 |
| Byte7 | Integration time.                           |
| Byte8 | Reserved bytes.                             |
| Byte9 | Checksum parity.                             |


- **Step 2**. Copy the code into Arduino IDE and upload.

```C++
#include "TFLidar.h"
#define USE_3V3_SOFT_SERIAL

#ifdef USE_3V3_SOFT_SERIAL
  SoftwareSerial uart(0, 1);
#else
  SoftwareSerial uart(2, 3);
#endif

TFLuna SeeedTFLuna;
TFLidar SeeedTFLidar(&SeeedTFLuna);

void setup() {
  // put your setup code here, to run once:
  SERIAL.begin(9600);
  while(!Serial);
#ifdef USE_3V3_SOFT_SERIAL
  SeeedTFLidar.begin(&uart,9600);
#else
  SeeedTFLidar.begin(&uart,115200);
#endif
}

void loop() {
  while(!SeeedTFLidar.get_frame_data()){
  #ifdef USE_3V3_SOFT_SERIAL
      delay(20);
  #else
      delay(1);
  #endif
  }
  // put your main code here, to run repeatedly:
  SERIAL.print("dist = ");
  SERIAL.print(SeeedTFLidar.get_distance()); //output measure distance value of LiDAR
  SERIAL.println(" ");
}
```

#### API Reference

- Begin(SoftwareSerial *TFSerial,unsigned long baud_rate):void

```C++
SoftwareSerial uart(2, 3);
SeeedTFLidar.begin(&uart,115200);
```

- Begin(HardwareSerial *TFSerial,unsigned long baud_rate):void

```C++
SeeedTFLidar.begin(&Serial1,115200);
```

- Get_frame_data:bool

```C++
while(!SeeedTFLidar.get_frame_data()){
    delay(1);
}
```

- Get_distance():uint16_t

```C++
int distance;
while(!SeeedTFLidar.get_frame_data()){
    delay(1);
}
distance = SeeedTFLidar.get_distance();
```

- Get_strength():uint16_t

```C++
int distance;
while(!SeeedTFLidar.get_frame_data()){
    delay(1);
}
distance = SeeedTFLidar.get_strength();
```

- **Step 3**. We will see the distance display on terminal. The blue curve is the distance and the red is Strength. 

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/curve.png)

- **Step 4**. We also can connect the sensor to PC USB port directly through Serial to USB convertor. We can use the [Grove-TF-Mini-LiDAR Master Computer Software
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/Grove-TF-Mini-LiDAR%20Master%20Computer%20Software.zip) to monitor the distance and strength.  

### Play With Ardupy

- Install [AIP](https://github.com/Seeed-Studio/ardupy-aip)

- Build firmware with Seeed ArduPy TFLidar
```C++
aip install Seeed-Studio/seeed-ardupy-TFLidar
aip build
```
- Flash new firmware to you ArduPy board
```C++
aip flash # + Ardupy Bin PATH
```
For more examples of using AIP, please refer to [AIP](https://github.com/Seeed-Studio/ardupy-aip).

#### Usage
```C++
from arduino import grove_tf_lidar
import time

lidar = grove_tf_lidar()

while True:
    while(lidar.get_frame_data() == False):
        time.sleep(0.001)
    print ("The distance is:", lidar.distance, 'CM')
    print ("The strength is:", lidar.strength, '')
    time.sleep_ms(1000)
```

#### API Reference

- Get_frame_data() : get frame data (include distance and strength)
```C++
while(lidar.get_frame_data() == False):
    time.sleep(0.001)
```

- Distance :distance from obstacle
```C++
print ("The distance is:", lidar.distance, 'CM')
```

- Strength : lidar strength
```C++
print ("The strength is:", lidar.strength, '')
```





## Resources
---
- **[Datasheet]** [Grove-TF-Mini-LiDAR
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/DE-LiDAR%20TFmini%20Datasheet-V1.7-EN.pdf)
- **[Software]** [Grove-TF-Mini-LiDAR Master Computer Software
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/Grove-TF-Mini-LiDAR%20Master%20Computer%20Software.zip)
- **[Product Manual]** [SJ-PM-TFmini-T-01_A06 Product Manual_EN.pdf
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/SJ-PM-TFmini-T-01_A06_Product_Manual_EN.pdf)
- **[Library]** [TFmini Examples on Arduino](https://github.com/TFmini/TFmini-Arduino)
- **[Library]** [TFmini Examples on RaspberryPi](https://github.com/TFmini/TFmini-RaspberryPi)
- **[Library]** [TFmini Examples on TFmini-STM32](https://github.com/TFmini/TFmini-STM32)
- **[Library]** [TFmini Examples on 51MCU](https://github.com/TFmini/TFmini-51MCU)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
