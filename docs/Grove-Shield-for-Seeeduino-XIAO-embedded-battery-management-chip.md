---
name: Grove Shield for Seeeduino XIAO with embedded battery management chip
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 103020312
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png)



<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 


Grove Shield for Seeeduino XIAO is a plug-and-play Grove extension board for **[Seeeduino XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO/)**. With the on-board battery management chip and battery bonding pad, you could easily power your Seeeduino XIAO with lithium battery and recharge it. 8 Grove connectors onboard includes two Grove I2C and one UART. It acts as a bridge for Seeeduino XIAO and Seeed's Grove system. Flash SPI bonding pad allows you add Flash to Seeeduino XIAO to expand its memory space, providing Seeeduino XIAO with more possibilities. 

With the on-board battery management chip and battery bonding pad, you could easily power your Seeeduino XIAO with lithium 3.7V battery and recharge it, making your projects, especially wearables ones, more flexible and in portable. You could even break the board through the onboard PCB stamp holds according to your actual needs of the project (only 25*39mm in dimension after break-off), making it smaller than smaller and the weight would be reduced from 13g to 10g as well!

<p style="text-align:center"><a href=target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border=0 /></a></p> 

As an extension board, the Grove Shield for Seeeduino XIAO also pulls all 14 pinout from Seeeduino XIAO, and its on-board power switch and charging status indicator light makes it more user-friendly. The Shield even reserves the SPI-Flash bonding pad for an advanced developer who may need to add Flash to Seeeduino XIAO to expand its memory space, providing Seeeduino XIAO with more possibilities.

!!!Note
      This product does not include a Seeeduino XIAO, please click [here](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) if you need one.

## Feature

- On-board Lithium Battery Charging and Management Function
- Grove connectors ( Grove IIC x 2, Grove UART x 1 ), all 14 GPIO led out
- Compact and Breakable Design
- Flash SPI Bonding Pad Reserved
- On-board Power Switch and Charging Status Indicator Light

## Specification
|Item|Value|
|---|---|
|Operating voltage|3.3V / 3.7V Lithium Battery|
|Load Capacity|800mA|
|Charging current| 400mA (Max)|
|Operating Temperature|- 40°C to 85°C|
|Storage Temperature|-55°C to 150°C|
|Grove Interface|I2C * 2 / UART * 1|

## Applications
- Wearable devices
- Rapid prototyping
- Grove modules testing
- Projects require small size


## Platform Supported
| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Getting Started

### Materials Required

| Seeeduino XIAO | Grove-Doppler-Radar| Grove Shield for Seeeduino XIAO|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|


### Hardware Overview

<p style="text-align:center"><a href=target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border=0 /></a></p> 

#### External headers-pin description for Grove-Shield for Seeeduino XIAO
<p style="text-align:center"><a href=target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border=0 /></a></p> 

#### External headers-pin description for Grove-Doppler Radar
![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

|Pin number|Signal name|Pin description|
|---|---|----|
|1| DIV_OUT	|Frequency divider output from the BGT24LTR11 |
|2|GND|Ground|
|3|VCC_5V_EXT|External+5.0V input power supply pin(maximum=5.5V)|
|4|VTUNE|VCO frequency tuning voltage|
|5|IFQ_HG|BGT24LTR11 Q-channel-analog signal output-second gain stage|
|6|IFI_HG|BGT24LTR11 I-channel-analog signal output-second gain stage|
|7|PWM_OUT|External user-configurable GPIO with CCU4|
|8|OUT1|External GPIO pin (user configurable)|
|9|OUT2|External GPIO pin (user configurable)|


### Hardware Connection
![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

!!!Tip
    Please plug the USB cable， Doppler Radar Interface into Seeeduino XIAO expansion board Interface gently, otherwise you may damage the port.

- **Step 1.** Plug Doppler Radar into Seeeduino XIAO expansion board with a Grove Cable.

- **Step 2.** Connect Seeeduino XIAO to PC via a USB cable.

- **Step 3.** Download the code, please refer to the software part.

- **Step 4.** Run the code and the outcome will display on the screen of **Serial Monitor** in your Arduino IDE .


### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

- **Step 1.** Download the [Demo code](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.rar).

- **Step 2.** Copy the whole **Seeed_Arduino_DopplerRadar** file and paste it into your Arduino IDE library file.

- **Step 3.** Open the **BGT24LTR11_DETECTION_TARGET** file with your Arduino IDE.

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

#### Software Code
```C++
#include "GBT24LTR11.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    GBT24LTR11<SoftwareSerial> GBT;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    GBT24LTR11<Uart> GBT;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    GBT24LTR11<HardwareSerial> GBT;
#endif

void setup() {
    // put your setup code here, to run once:
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODE 0 -->detection target mode
        MODE 1 -->I/Q ADC mode
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // put your main code here, to run repeatedly:
    uint16_t state = 0;
    ShowSerial.print("target speed:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    //2 --> target approach
    //1 --> target leave
    //0 --> Not Found target
    if (state == 2) {
        ShowSerial.println("target approach");
    } else if (state == 1) {
        ShowSerial.println("target leave");
    }
    delay(200);
}
```

!!!Success
		If everything goes well, you can go to **Serial Monitor** to see an outcome as following:

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 3</b>. <i> No object approaching</i></figcaption>
</figure>
</div>

And if there's an object approaching the radar or passing by, the outcome will alter as below:


<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 3</b>. <i>Object approaching</i></figcaption>
</figure>
</div>

!!!Note
    The minimum speed accuracy that the sensor is capable of detecting is 52cm/s, which equals to 0.52m/s, 3.6km/h and 2.23mph. Additionally, the results returned by function getSpeed() are multiples of 52cm/s and are absolute values accordingly.

## Resources

- **[ZIP]** [Demo Code library](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)


## Project

<p><iframe src="http://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/demo.M4V" width="560" height="315" frameborder="0" allowfullscreen=""></iframe></p>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>