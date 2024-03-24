---
title: Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/
slug: /cn/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A
last_update:
  date: 03/23/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg)

我们已经发布了[Grove - I2C Hub（4端口）](https://www.seeedstudio.com/Grove-I2C-Hub.html)和[Grove - I2C Hub（6端口）](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html)。等等，还不够吗？好吧，我们知道你在寻求更多。这不，我们为你带来了Grove - 8通道I2C Hub。

更重要的是，这不仅仅只是端口数量的叠加。我们都知道，在同一个总线系统中，I2C设备必须使用不同的地址，即使使用Grove I2C Hub（4或6端口），这个规则依然适用。然而，借助Grove - 8通道I2C Hub，你可以将最多8个具有相同地址的I2C设备连接到同一个Grove I2C系统中。这都要归功于TCA9548A I2C多路复用芯片。它采用时分复用技术，使得同一个控制器可以控制8个具有相同地址的I2C设备。你再也不用担心地址冲突的问题了。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 功能特点

- 8个Grove I2C端口
- 支持多个具有相同I2C地址的设备
- 支持3.3V/5V系统

## 支持平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 读取连接在Grove - 8通道I2C Hub上的设备的I2C地址

#### 所需材料

|Seeeduino XIAO|Grove 面包板|Grove - 8通道I2C多路复用器/I2C Hub (TCA9548A)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即获取](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[立即获取](https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html)|

我们还需要最多8个I2C设备，请点击[这里](https://www.seeedstudio.com/catalogsearch/result/?q=i2c)找到你喜欢的Grove I2C设备。
以下为例，我们将使用三个I2C设备。

#### 硬件连接

![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-example.jpg)

将I2C Hub连接到Seeeduino XIAO的I2C接口，并将每个I2C设备连接到每个hub。

#### 软件代码

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

- **步骤1** 从资源中下载库文件，并将“zip”库添加到您的Arduino IDE中。请参考[如何安装Arduino库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

- **步骤2** 找到示例代码并将其上传到您的板子上。请参考[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。
- **步骤3** 上传代码后，您将在串行监视器中看到每个设备的I2C地址。地址0x70是I2C Hub的I2C地址。![](https://files.seeedstudio.com/products/103020293/img/Grove-8-channel-I2C-Hub-test-result.png)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [TCA9548A_数据手册](https://files.seeedstudio.com/products/103020293/document/TCA9548A_datasheet.pdf)
- **[PDF]** [硬件电路图](https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-TCA9548A_v1.0_SCH_190814.pdf)
- **[ZiP]** [Grove 8 通道 I2C Hub 库](https://files.seeedstudio.com/products/103020293/document/Grove_8Channel_I2C_Hub_test_library.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
