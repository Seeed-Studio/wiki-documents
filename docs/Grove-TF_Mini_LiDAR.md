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
![](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/img/Grove-TF-Mini-LiDAR.JPG)

This product is based on ToF (Time of Flight) principle and integrated with unique optical and electrical designs, so as to achieve stable, precise, high sensitivity and high-speed distance detection.

ToF is the abbreviation of Time of Flight technology, and its operating principle is as follows: a modulated near-infrared light is sent from the sensor and reflected by an object; the distance to the object to be shot can be converted with the sensor by calculating the time difference or phase difference between the light sending and the light reflection, so as to produce the depth information.

[![Get one now](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)

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
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started
---
### Play With Arduino

#### Hardware

- Step 1. Prepare the below stuffs:

| Seeeduino Lite |  Grove-TF-Mini-LiDAR |
|--------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/img/Seeed%20lite_S.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/img/Grove-TF-Mini-LiDAR_S.JPG)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html)|[Get ONE Now](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)|

- Step 2. Connect Grove-TF-Mini-LiDAR to UART port of Seeeduino Lite.
- Step 3. Connect Seeeduino to PC through a USB cable.

![](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/img/Seeeduino.JPG)

!!!Note
    The Grove-TF Mini LiDAR's UART baud rate is 115200 and the SoftwareI2C can't support it. So if we use 1 hardware UART to hook up the sensor and other hardware UART for Serial Port display, we need at least 2 hardware UART platforms, such as arduino mega, seeeduino lite and so on.  If we only have 1 UART platform(ie. seeeduino v4.2, arduino uno), we can use the I2C LCD as display.


#### Software

- Step 1. The Grove-TF Mini LiDAR is a hexadecimal output data. Each frame data is encoded with 9 bytes, including 1 distance data (Dist). Each distance data has corresponding signal strength information (Strength). The frame end is the data parity bit. 

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


- Step 2. Copy the code into Arduino IDE and upload.

```
unsigned char dta[100];
unsigned char len = 0;

void setup()
{
    Serial1.begin(115200);
    Serial.begin(115200);
}

void loop()
{
    while(Serial1.available()>=9)
    {
        if((0x59 == Serial1.read()) && (0x59 == Serial1.read())) //Byte1 & Byte2
        {
            unsigned int t1 = Serial1.read(); //Byte3
            unsigned int t2 = Serial1.read(); //Byte4

            t2 <<= 8;
            t2 += t1;
            Serial.print(t2);
            Serial.print('\t');

            t1 = Serial1.read(); //Byte5
            t2 = Serial1.read(); //Byte6

            t2 <<= 8;
            t2 += t1;
            Serial.println(t2);

            for(int i=0; i<3; i++) 
            { 
                Serial1.read(); ////Byte7,8,9
            }
        }
    }
}
```
- Step 3. We will see the distance display on terminal. The blue curve is the distance and the red is Strength. 

![](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/img/curve.png)

- Step 4. We also can connect the sensor to PC USB port directly through Serial to USB convertor. We can use the [Grove-TF-Mini-LiDAR Master Computer Software
](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/res/Grove-TF-Mini-LiDAR%20Master%20Computer%20Software.zip) to monitor the distance and strength.  

## Resources
---
- **[Datasheet]** [Grove-TF-Mini-LiDAR
](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/res/DE-LiDAR%20TFmini%20Datasheet-V1.7-EN.pdf)
- **[Software]** [Grove-TF-Mini-LiDAR Master Computer Software
](https://github.com/SeeedDocument/Grove-TF_Mini_LiDAR/raw/master/res/Grove-TF-Mini-LiDAR%20Master%20Computer%20Software.zip)
- **[Library]** [TFmini Examples on Arduino](https://github.com/TFmini/TFmini-Arduino)
- **[Library]** [TFmini Examples on RaspberryPi](https://github.com/TFmini/TFmini-RaspberryPi)
- **[Library]** [TFmini Examples on TFmini-STM32](https://github.com/TFmini/TFmini-STM32)
- **[Library]** [TFmini Examples on 51MCU](https://github.com/TFmini/TFmini-51MCU)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>