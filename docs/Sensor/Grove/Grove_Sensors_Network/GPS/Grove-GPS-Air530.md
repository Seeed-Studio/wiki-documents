---
title: Grove - GPS (Air530)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-GPS-Air530/
slug: /Grove-GPS-Air530
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/03.png)

Confused of your GPS not working well in urbans or outsides under only one or few statelite module? Then you should not miss our new Grove-GPS (Air530). It’s a high-performance, highly integrated multi-mode statelite positioning and navigation module. It supports GPS / Beidou / Glonass / Galileo / QZSS / SBAS, which makes it suitable for GNSS positioning applications such as car navigation, smart wear and drone.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)

:::tip
      We've released the [Seeed GPS Modules Selection Guide](https://wiki.seeedstudio.com/GPS-Modules-Selection-Guide/), it will help you choose the GPS Module that best suits your needs.
:::

## Features

- Cost-effective
- Highly integrated Multi-mode statelite positioning and navigation
- Compact size for easy deployment
- Tiny volume and low power consumption

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specifications

| **Parameter**    | **Value**              |
|------------------|------------------------------|
|Supply voltage|3.3V/5V|
|Working current|up to 60mA|
|Time of warm start| 4s|
|Time of cold boot| 30s|

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

This sample simply reads from the GPS by using software serial and sends it back on the serial port.

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - GPS (Air530)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/small.png)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

- **Step 2.** Connect Grove - GPS to port **D2** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/Hardware_conection.jpg)

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove - GPS to Seeeduino as below.
:::
| Seeeduino     | Grove - GPS |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D3            | White                   |
| D2            | Yellow                  |

#### Software

:::note
    Please note that the u-center software is for windows only.
:::

- **Step 1.** Install [u-center](https://www.u-blox.com/en/product/u-center-windows) software.
- **Step 2.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];                   // buffer array for data receive over serial port
int count=0;                                // counter for buffer array
void setup()
{
    SoftSerial.begin(9600);                 // the SoftSerial baud rate
    Serial.begin(9600);                     // the Serial port of Arduino baud rate.
}

void loop()
{
    if (SoftSerial.available())                     // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++]=SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);                 // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();                         // call clearBufferArray function to clear the stored data from the array
        count = 0;                                  // set counter of while loop to zero 
    }
    if (Serial.available())                 // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());        // write it to the SoftSerial shield
}


void clearBufferArray()                     // function to clear buffer array
{
    for (int i=0; i<count;i++)
    {
        buffer[i]=NULL;
    }                      // clear all index of array with command NULL
}
```

- **Step 3.** Open U-center.

- **Step 4.** Click Receiver -> Port and select the COM port that the Arduino is using.

- **Step 5.** Click Receiver -> Baudrate and make sure 9600 is selected.

- **Step 6.** Click View -> Text Console and you should get a window that will stream NMEA data.

- **Step 7.** Open the serial monitor,You can see as show below:

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg)

**We also can view data in Google Earth:**

- **Step 1.** Click File -&gt; Database Export -&gt; Google Earth KML

- **Step 2.** This should launch Google Earth with the history that was captured by u-center.

- **Step 3.** Alternatively, data can be recorded by pressing the red circle on the toolbar which will then ask where you want to save the record.

- **Step 4.** When we have captured enough data, click the black square to stop recording.

- **Step 5.** We can then convert the .ubx file generated to KML by using uploading the ubx file to [GPSVisualizer](http://www.gpsvisualizer.com/), and the location (Red spot) would be shown on the map as following:

![](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/IMG/outcome.png)

:::note
        Tests would rather be taken outdoors to avoid location inaccuracy caused by bad signal transmission.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [GPS Schematic(PDF)](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Grove-GPS_Air530_v1.0_.zip)
- **[PDF]** [Air 530 User Booklet](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_GPS -->

## Projects

**Project of GPS/GPRS Tracker**: In this new project we will present our GPS Tracker connected using the GPRS technique and MQTT protocol.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
