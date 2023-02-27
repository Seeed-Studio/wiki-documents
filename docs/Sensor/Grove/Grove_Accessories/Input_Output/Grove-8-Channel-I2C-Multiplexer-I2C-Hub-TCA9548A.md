---
title: Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/
slug: /Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg)

We've already released the [Grove - I2C Hub (4 Port)](https://www.seeedstudio.com/Grove-I2C-Hub.html) and the [Grove - I2C Hub (6 Port)](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html). Wait, still not enough? Well well, we know you are seeking more. Here you are, we present you the Grove - 8 Channel I2C Hub.

More importantly, this is more than just a superposition of port quantities. As we all know, I2C devices must use different addresses in the same bus system, even use the Grove I2C Hub (4 or 6 port), the rule is still the rule. However, with the help of  Grove - 8 Channel I2C Hub, you can plug up to 8 same-address I2C devices to the same Grove I2C system. All thanks to the TCA9548A I2C Multiplexer Chip. It adopts time-division multiplexing technology so that the same controller can control 8 I2C devices with the same address. No more worrying about address conflicts.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Features

- 8 Grove I2C Port
- Support multiple devices with the same I2C address
- Support 3.3V/5V System

## Platform Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

### Read the I2C address of devices connecting on the Grove - 8 Channel I2C Hub

#### Materials Required

|Seeeduino XIAO|Grove Breadboard|Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-thumbnail.jpg)|
|[Get one now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get one now](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Get one now](https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html)|

We also require up to 8 I2C devices, please click [here](https://www.seeedstudio.com/catalogsearch/result/?q=i2c) to find the Grove I2C devices you like.
At these example, we use three I2C devices.

#### Hardware connection

![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-example.jpg)

Connect the I2C Hub with Seeeduino XIAO's I2C interface, and connect each I2C device with each hub.

#### Software code

```C++
#include "TCA9548A.h"

// if you use the software I2C to drive, you can uncommnet the define SOFTWAREWIRE which in TCA9548A.h. 
#ifdef SOFTWAREWIRE
  #include <SoftwareWIRE.h>
  SoftwareWire myWIRE(3, 2);
  TCA9548A<SoftwareWire> TCA;
  #define WIRE myWIRE
#else   
  #include <Wire.h>
  TCA9548A<TwoWire> TCA;
  #define WIRE Wire
#endif

#define SERIAL Serial

void setup()
{
  SERIAL.begin(115200);
  while(!SERIAL){};

  //WIRE.begin();
  TCA.begin(WIRE);
  //defaut all channel was closed
  //TCA.openAll();
  //TCA.closeAll();

  // Select the channels you want to open. You can open as many channels as you want
  TCA.openChannel(TCA_CHANNEL_0);   //TCA.closeChannel(TCA_CHANNEL_0);
  TCA.openChannel(TCA_CHANNEL_1); //TCA.closeChannel(TCA_CHANNEL_1);
  TCA.openChannel(TCA_CHANNEL_2); //TCA.closeChannel(TCA_CHANNEL_2);
  TCA.openChannel(TCA_CHANNEL_3); //TCA.closeChannel(TCA_CHANNEL_3);
  TCA.openChannel(TCA_CHANNEL_4); //TCA.closeChannel(TCA_CHANNEL_4);
  TCA.openChannel(TCA_CHANNEL_5); //TCA.closeChannel(TCA_CHANNEL_5);
  TCA.openChannel(TCA_CHANNEL_6); //TCA.closeChannel(TCA_CHANNEL_6);
  TCA.openChannel(TCA_CHANNEL_7); //TCA.closeChannel(TCA_CHANNEL_7); 

}

void loop()
{

  uint8_t error, i2cAddress, devCount, unCount;

  SERIAL.println("Scanning...");

  devCount = 0;
  unCount = 0;
  for(i2cAddress = 1; i2cAddress < 127; i2cAddress++ )
  {
    WIRE.beginTransmission(i2cAddress);
    error = WIRE.endTransmission();

    if (error == 0)
    {
      SERIAL.print("I2C device found at 0x");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      devCount++;
    }
    else if (error==4)
    {
      SERIAL.print("Unknow error at 0x");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      unCount++;
    }    
  }

  if (devCount + unCount == 0)
    SERIAL.println("No I2C devices found\n");
  else {
    SERIAL.print(devCount);
    SERIAL.print(" device(s) found");
    if (unCount > 0) {
      SERIAL.print(", and unknown error in ");
      SERIAL.print(unCount);
      SERIAL.print(" address");
    }
    SERIAL.println();
  }
  SERIAL.println();
  delay(1000); 
}
```

- **Step 1** Download the library from the resource and add the "zip" library to your Arduino IDE. Please refer to [How to install an Arduino Library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

- **Step 2** Find the example code and upload it to your board. Please refer to [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 3** After uploading the code, you will see the I2C adress of each device from the serial monitor. The adress 0x70 is the I2C adress of I2C Hub.
![](https://files.seeedstudio.com/products/103020293/img/Grove-8-channel-I2C-Hub-test-result.png)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

- **[PDF]** [TCA9548A_DATASHEET](https://files.seeedstudio.com/products/103020293/document/TCA9548A_datasheet.pdf)
- **[PDF]** [Hardware schematic](https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-TCA9548A_v1.0_SCH_190814.pdf)
- **[ZiP]** [Grove 8 Channel I2C Hub Library](https://files.seeedstudio.com/products/103020293/document/Grove_8Channel_I2C_Hub_test_library.zip)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
