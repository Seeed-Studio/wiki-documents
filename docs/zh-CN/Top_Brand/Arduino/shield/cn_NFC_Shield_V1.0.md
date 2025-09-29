---
description: NFC Shield V1.0
title: NFC Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/NFC_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: NFC Shield V1.0
category: Discontinued
bzurl:
oldwikiname: NFC_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/NFC_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/) 是一个为 **Arduino** 构建的 **近场通信** 接口，基于流行的 NXP PN532 集成电路。**NFC** 是一种短距离无线技术，能够实现近距离设备之间的通信。**NFC** 起源于 **RFID** 技术，是一个开放平台技术，在 ECMA-340 和 ISO/IEC 18092 中标准化。

NFC 像 RFID 一样广泛用于识别卡片/标签（NXP Mifare 卡片/标签）。NFC 可以作为 **交通卡** 的替代方案，使用卡片/标签提供的读/写存储器。一些手机内置了 NFC - 它们被用作卡片、标签、带有网址的智能海报的读取器（类似于手机二维码读取器）。这项技术也被应用于 **智能无现金支付**。

像许多其他标准一样，NFC 技术由 **近场通信论坛** 监管，该论坛标准化 **NFC** 通信 -- 设备如何配对、共享数据并允许安全交易发生。[NFC Forum](http://www.nfc-forum.org) 开发并认证符合 **NFC 标准** 的设备。

NFC 工作在 **13.56 MHz** 频率的免许可 ISM（工业科学医疗）频段。NFC 通信范围可达 10 厘米。但是，这受到天线和功率辐射设计的限制。大多数设备在 10 毫米范围内工作。[NFC Shield](https://seeeddoc.github.io/NFC_Shield/) 天线设计在 1 厘米范围内工作。[NFC Shield](https://seeeddoc.github.io/NFC_Shield/) 为 **PN532** 提供所有必要的电路，如 27.12Mhz 晶振、电源。它还引出了 **PN532** 的 I/O 引脚以便于访问。

Arduino 和 [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) 之间的通信通过 SPI。

型号：[SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)

## 特性 ##

- Arduino Shield 兼容。无需焊接。

- **SPI** 接口。因此，大多数 **Arduino** 引脚可用于其他应用。

- 内置 **PCB 天线**。

- 使用 TI 的 **TXB0104** 电平转换器支持 3.3V 和 5V 操作。

- 插座可连接其他扩展板。

- 此 NFC Shield 的最大通信范围约为 5 厘米

- 无法读/写 ultralightC 芯片，只能读取其 ID

## 应用创意 ##

- 用作 RFID 读取器，配合 **Mifare One 标签**（ISO14443 Type-A）和卡片（13.56Mhz）。

- 构建名片共享系统。

- 构建考勤系统。

- 设计认证系统。

- 读取智能海报。

- 与其他 NFC 设备安全交换小数据

- 与 [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/) 配合使用，创建移动 NFC 应用。

- 以及其他无限可能。

## 使用方法 ##

### 硬件安装 ###

- 将 **Seeeduino** 电源选择滑动开关设置为 3.3V。

- 将 [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) 连接到 **Seeeduino**，如下所示。

- 编译并上传提供的示例代码。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - 连接到 Seeeduino**

- 将 **MIFARE 卡** 靠近天线。NFC Shield 将读取被动 ID 数据。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**Mifare 卡靠近 NFC Shield 天线**

- 将 MIFARE 标签靠近天线。NFC Shield 将读取被动 ID 数据。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**Mifare 标签靠近 NFC Shield 天线**

- 使用以下设置在两个使用 NFC Shield 的 Seeeduino 之间建立点对点通信。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC 点对点通信设置**

### 编程 ###

下载 [PN532_SPI Library For NFC Shield](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) 并将其安装到 \arduino\libraries。您可以将以下代码复制到 Arduino IDE 中，或打开库中的示例开始使用。

**演示 1：读取 MIFARE 卡的完整存储器**

1.打开并上传 readAllMemoryBlocks 示例，如下所示。

```cpp
//此示例读取从0x00到0x63的所有MIFARE内存块。
//已在新的MIFARE 1K卡上测试通过。使用默认密钥进行身份验证。
//由Seeed Technology Inc (www.seeedstudio.com)贡献

#include <PN532.h>
#include <SPI.h>

/*片选引脚可以连接到D10或D9，这是硬件可选的*/
/*如果您使用的是SeeedStudio的NFC Shield v2.0版本。*/
#define PN532_CS 10

PN532 nfc(PN532_CS);

#define  NFC_DEMO_DEBUG 1

void setup(void) {
#ifdef NFC_DEMO_DEBUG
  Serial.begin(9600);
  Serial.println("Hello!");
#endif
  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (! versiondata) {
#ifdef NFC_DEMO_DEBUG
    Serial.print("Didn't find PN53x board");
#endif
    while (1); // halt
  }
#ifdef NFC_DEMO_DEBUG
  // 获取到正确数据，打印出来！
  Serial.print("Found chip PN5");
  Serial.println((versiondata>>24) & 0xFF, HEX);
  Serial.print("Firmware ver. ");
  Serial.print((versiondata>>16) & 0xFF, DEC);
  Serial.print('.');
  Serial.println((versiondata>>8) & 0xFF, DEC);
  Serial.print("Supports ");
  Serial.println(versiondata & 0xFF, HEX);
#endif
  // 配置板子以读取RFID标签和卡片
  nfc.SAMConfig();
}

void loop(void) {
  uint32_t id;
  // 寻找MiFare类型的卡片
  id = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

  if (id != 0)
  {
#ifdef NFC_DEMO_DEBUG
    Serial.print("Read card #");
    Serial.println(id);
    Serial.println();
#endif
    uint8_t keys[]= { 0xFF,0xFF,0xFF,0xFF,0xFF,0xFF };// 新卡的默认密钥
    for(uint8_t blockn=0;blockn<64;blockn++)
    {
      if(nfc.authenticateBlock(1, id ,blockn,KEY_A,keys)) //验证块blockn
      {
        //如果验证成功
        uint8_t block[16];
        //读取内存块blockn
        if(nfc.readMemoryBlock(1,blockn,block))
        {
#ifdef NFC_DEMO_DEBUG
          //如果读取操作成功
          for(uint8_t i=0;i<16;i++)
          {
            //打印内存块
            Serial.print(block[i],HEX);
            if(block[i] <= 0xF) //数据排列/美化
            {
              Serial.print("  ");
            }
            else
            {
              Serial.print(" ");
            }
          }

          Serial.print("| Block ");
          if(blockn <= 9) //数据排列/美化
          {
            Serial.print(" ");
          }
          Serial.print(blockn,DEC);
          Serial.print(" | ");

          if(blockn == 0)
          {
            Serial.println("Manufacturer Block");
          }
          else
          {
            if(((blockn + 1) % 4) == 0)
            {
              Serial.println("Sector Trailer");
            }
            else
            {
              Serial.println("Data Block");
            }
          }
#endif
        }
      }
    }
  }
  delay(2000);
}
```

**这个示例使用默认认证密钥读取MIFARE标准卡的完整内存。输出显示了全新MIFARE标准卡的典型内存布局。**

2.将Mifare卡靠近NFC天线。打开串口监视器，您可以看到如下所示的结果：

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

**注意：** 块被分类为制造商块（只读）、数据块（用户/应用程序可写区域）和扇区尾部（该扇区的认证和访问位）

**演示2：向MIFARE内存块写入数据**

1.打开示例writeMifareMemory。此示例使用默认认证密钥向新MIFARE 1K卡的内存块0x08写入数据。在完成向MIFARE内存块写入数据后读取块内存。

注意：内存块0是只读的，包含制造商数据。除非您知道自己在做什么，否则不要写入扇区尾部块。否则，MIFARE卡将来可能无法使用。

2.编译并上传示例。如果您不知道如何上传，请点击[这里](https://seeeddoc.github.io/Upload_Code/)。

3.将Mifare卡靠近NFC天线。  
4.打开串口监视器，您可以看到如下所示的结果：
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_1.jpg)

**演示3：点对点通信**

最新的NFC库中实现了实验性的NFC点对点通信。这使用主动发起器进行P2P通信。

1.将示例"PtoPInitiator"和"PtoPTarge"下载到两个不同的带有NFC扩展板的Arduino中。

2.将天线彼此靠近放置。

3.打开串口终端并观察数据的收发。

**输出结果：**

P2P发起器：
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPInitiator.jpg)

P2P目标：
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPTarget.jpg)

## 参考代码 ##

这些API利用命令通过SPI调用PN532固件提供的接口。所有这些命令都在PN532用户手册中有文档记录。PN532_SPI库提供了以下API。

**boolean SAMConfig(void)**

此API调用PN532的**SAMConfiguration**命令并将其设置为**正常模式**。**SAM**代表安全访问模块（即PN532系统）。PN532系统可以在**正常**模式、**虚拟卡**模式、**有线卡**模式和**双卡**模式下工作。

**用法：**

```
nfc.SAMConfig(); // 在任何读/写操作之前调用此函数

```

**uint32_t readPassiveTargetID(uint8_t cardbaudrate)**

此方法读取被动目标ID并将其作为32位数字返回。目前仅支持读取MIFARE ISO14443A卡/标签。因此请使用**PN532_MIFARE_ISO14443A**作为参数。返回32位卡号

**用法：**

```
uint32_t cid;
// 查找MiFare类型的卡/标签
cid = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

```

uint32_t 验证块(uint8_t 卡号, uint32_t cid, uint8_t 块地址, uint8_t 认证类型, uint8_t * 密钥)

此方法用于在读/写操作之前使用密钥对内存块进行身份验证。成功时返回true。

- **cardnumber** 可以是1或2

- **cid** 是32位卡片ID

- **blockaddress** 是块号（对于MIFARE卡，可以是0-63之间的任意数字）

- **authtype** 是用于身份验证的密钥类型（**KEY_A** 或 **KEY_B**）

- **keys** 指向包含6个密钥的字节数组。

**用法：**

```
uint8_t keys[]= {0xFF,0xFF,0xFF,0xFF,0xFF,0xFF};  // default key of a fresh card
nfc.authenticateBlock(1, id ,3,KEY_A,keys); //authenticate block 3, id is 32-bit passive target id.

```

**uint32_t 读取内存块(uint8_t 卡号,uint8_t 块地址, uint8_t * 块)**

此方法在使用密钥认证后读取内存块。成功时返回true。

- **cardnumber** 可以是1或2

- **blockaddress** 是要读取的块号（对于MIFARE卡，可以是0-63之间的任意数字）。对于MIFARE标准卡，每个块长度为16字节。

- **block** 指向缓冲区（字节数组）以保存16字节的块数据。

**用法：**

```
uint8_t block[16];
nfc.readMemoryBlock(1,3,block); //只有在认证成功时才能执行读取操作。

```

**uint32_t 写入内存块(uint8_t 卡号,uint8_t 块地址, uint8_t * 块)**

此方法在使用密钥认证后将数据写入内存块。成功时返回true。

- **cardnumber** 可以是1或2

- **blockaddress** 是要写入的块号（对于MIFARE卡，可以是0-63之间的任意数字）。对于MIFARE标准卡，每个块长度为16字节。

- **block** 指向缓冲区（字节数组），该缓冲区保存要写入的16字节块数据。

**用法**：

```
uint8_t writeBuffer[16];
    for(uint8_t ii=0;ii<16;ii++)
     {
       writeBuffer[ii]=ii; //用0,1,2....F填充缓冲区
     }
nfc.writeMemoryBlock(1,0x08,writeBuffer); //将writeBuffer[]写入块地址0x08。只有在认证成功时才能执行读取操作。

```

**uint32_t PN532::configurePeerAsInitiator(uint8_t 波特率)**

此方法实现点对点发起者。成功时返回true。

- **baudrate** 可以是0-2之间的任何数字。0表示106kbps，1表示201kbps，2表示424kbps。目前仅支持1和2。

*此功能是实验性的，支持与其他NFC扩展板进行NFC点对点通信。与移动设备的交互未经测试。*

**用法：**

```
// 将PN532配置为点对点发起者
if( nfc.configurePeerAsInitiator(2) ) //如果连接无错误
    {
     //您的发送接收代码在这里
    }

```

**uint32_t configurePeerAsTarget()**

此方法实现点对点目标。成功时返回 true。

**此功能为实验性功能，支持与其他 NFC 扩展板进行 NFC 点对点通信。与移动设备的交互未经测试。**

**用法：**

```
// 将 PN532 配置为点对点目标
if(nfc.configurePeerAsTarget()) //如果连接无错误
   {
        //您的数据收发代码
   }

```

**uint32_t initiatorTxRx(char *DataOut,char *DataIn)**

此方法用于向目标发送数据和从目标接收数据。此代码由 NFC 点对点发起方使用。成功时返回 true。

- **DataOut** 是指针和字符数组（16 字节）发送数据。

- **DataIn** 是指针和字符数组（16 字节）接收数据。

**此功能是实验性的，支持与其他 NFC 扩展板进行 NFC 点对点通信。与移动设备的交互未经测试。**

**用法：**

```
    // 将 PN532 配置为主动模式下的点对点发起方
    if( nfc.configurePeerAsInitiator(2) ) //如果连接无错误
    {
        //发送-接收数据
        if(nfc.initiatorTxRx(DataOut,DataIn))
        {
         Serial.print("Data Sent and Received: ");
         Serial.println(DataIn);
        }
    }

```

**uint32_t targetTxRx(char *DataOut,char *DataIn)**

此方法用于向发起方发送数据和从发起方接收数据。此代码由NFC点对点目标用于响应发起方。成功时返回true。

- **DataOut** 是指针和字符数组（16字节）发送数据。

- **DataIn** 是指针和字符数组（16字节）接收数据。

**用法：**

```
    // 将PN532配置为点对点目标
    if(nfc.configurePeerAsTarget()) //如果连接无错误
    {
        //发送-接收数据
        if(nfc.targetTxRx(DataOut,DataIn))
        {
         Serial.print("Data Received: ");
         Serial.println(DataIn);
        }
    }

```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/cn/images/8/81/NFC_Shield_V0.9b_Schematic_Board_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[库文件]**[NFC扩展板PN532_SPI库](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip)
- **[PDF]**[NXP PN532 - 用户手册](https://www.nxp.com/docs/en/user-guide/141520.pdf)
- **[链接]**[NFC论坛](http://www.nfc-forum.org)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
