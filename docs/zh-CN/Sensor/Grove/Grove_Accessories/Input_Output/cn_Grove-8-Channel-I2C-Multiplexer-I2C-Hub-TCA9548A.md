---
title: Grove - 8通道I2C多路复用器/I2C集线器 (TCA9548A)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/
slug: /cn/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg)

我们已经发布了 [Grove - I2C集线器 (4端口)](https://www.seeedstudio.com/Grove-I2C-Hub.html) 和 [Grove - I2C集线器 (6端口)](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html)。等等，还不够？好吧好吧，我们知道你需要更多。现在，为你呈现 Grove - 8通道I2C集线器。

更重要的是，这不仅仅是端口数量的叠加。众所周知，在同一总线系统中，I2C设备必须使用不同的地址，即使使用 Grove I2C集线器（4或6端口），这一规则仍然适用。然而，有了 Grove - 8通道I2C集线器的帮助，你可以在同一个 Grove I2C系统中连接多达8个相同地址的I2C设备。这一切都要归功于TCA9548A I2C多路复用芯片。它采用时分复用技术，使得同一个控制器可以控制8个相同地址的I2C设备。再也不用担心地址冲突了。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特性

- 8个 Grove I2C端口
- 支持多个相同I2C地址的设备
- 支持3.3V/5V系统

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 读取连接到 Grove - 8 通道 I2C Hub 的设备的 I2C 地址

#### 所需材料

| Seeeduino XIAO | Grove 面包板 | Grove - 8 通道 I2C 多路复用器/I2C Hub (TCA9548A) |
|----------------|------------------|----------------------------------------------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即购买](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[立即购买](https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html)|

我们还需要最多 8 个 I2C 设备，请点击 [这里](https://www.seeedstudio.com/catalogsearch/result/?q=i2c) 查找您喜欢的 Grove I2C 设备。在本示例中，我们使用了三个 I2C 设备。

#### 硬件连接

![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-example.jpg)

将 I2C Hub 连接到 Seeeduino XIAO 的 I2C 接口，并将每个 I2C 设备连接到 Hub 的各个通道。

#### 软件代码

```cpp
#include "TCA9548A.h"

// 如果您使用软件 I2C 驱动，可以取消注释 TCA9548A.h 中的 define SOFTWAREWIRE。
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
  // 默认所有通道关闭
  //TCA.openAll();
  //TCA.closeAll();

  // 选择您想要打开的通道。您可以打开任意多个通道。
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

  SERIAL.println("扫描中...");

  devCount = 0;
  unCount = 0;
  for(i2cAddress = 1; i2cAddress < 127; i2cAddress++ )
  {
    WIRE.beginTransmission(i2cAddress);
    error = WIRE.endTransmission();

    if (error == 0)
    {
      SERIAL.print("在地址 0x 找到 I2C 设备：");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      devCount++;
    }
    else if (error==4)
    {
      SERIAL.print("未知错误发生在地址 0x：");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      unCount++;
    }    
  }

  if (devCount + unCount == 0)
    SERIAL.println("未找到 I2C 设备\n");
  else {
    SERIAL.print(devCount);
    SERIAL.print(" 个设备已找到");
    if (unCount > 0) {
      SERIAL.print("，并且在 ");
      SERIAL.print(unCount);
      SERIAL.print(" 个地址发生未知错误");
    }
    SERIAL.println();
  }
  SERIAL.println();
  delay(1000); 
}
```

- **步骤 1** 从资源下载库文件并将 "zip" 库添加到您的 Arduino IDE。请参考 [如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

- **步骤 2** 找到示例代码并将其上传到您的开发板。请参考 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 3** 上传代码后，您将在串行监视器中看到每个设备的 I2C 地址。地址 0x70 是 I2C Hub 的 I2C 地址。
![](https://files.seeedstudio.com/products/103020293/img/Grove-8-channel-I2C-Hub-test-result.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [TCA9548A 数据手册](https://files.seeedstudio.com/products/103020293/document/TCA9548A_datasheet.pdf)
- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-TCA9548A_v1.0_SCH_190814.pdf)
- **[ZiP]** [Grove 8 通道 I2C Hub 库](https://files.seeedstudio.com/products/103020293/document/Grove_8Channel_I2C_Hub_test_library.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>