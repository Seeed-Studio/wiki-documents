---
description: Xadow - NFC
title: Xadow - NFC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_NFC
last_update:
  date: 1/13/2023
  author: shuxu hu
---
---
Near Field Communication (NFC) is a set of short-range wireless technologies. It's behind daily applications such as access control system and mobile payment system.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/X_nfc_01.jpg)

Xadow NFC features a highly integrated transceiver module PN532 which handles contactless communication at 13.56MHz. You can read and write a 13.56MHz tag with this module or implement point to point data exchange with two Xadow NFCs. Xadow NFC is designed to use I2C, SPI or UART communication protocols, and I2C is the default mode. In addition, we assign an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-p-1627.html)

## Specification
---
- Working Voltage: 3.3V
- Working Current:
  - Static Mode: 73mA
  - Write/Read Mode: 83mA
- Support host interface: I2C(default), SPI, UART.
- Serve for contactless communication at 13.56MHz.
- Support ISO14443 Type A and Type B protocols.
- Max operating distance for detecting NFC tags is 28mm depending on current antenna size.
- Support P2P communication.
- Dimensions: 25.43mm x 20.35mm

## Demonstration
---
Xadow NFC has many capabilities which integrates a PN532 NFC controller, our Arduino library supports reading/writing tags, phone-to-Xadow NFC communication, tag emulation at this time, it's a 3-in-1 allstar.

:::note:
    When Xadow NFC is using SPI communication protocols, there is an existing library which supports phone-to-Xadow NFC communication. The default communication mode for this product is I2C, so the library cannot use directly.
:::
Before reading/writing tag, what you need to prepare is the hardware installation and the libraries.

- The hardware installation as shown below:

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/XadowNFC.jpg)

:::note:
    When connect Xadow - NFC to [Xadow - Main Board](https://wiki.seeedstudio.com/Xadow_Main_Board), you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module (see four corners of each Xadow module).
:::

- Download [PN532 library](https://github.com/Seeed-Studio/PN532) and [NDEF Library](https://github.com/don/NDEF). Do not forget to install these libraries into Arduino Library. If you haven't knew clearly the operation, please refer [here](https://www.seeedstudio.com/wiki/How_to_install_Arduino_Library) for a closer look.

:::note:
    Make sure that you have folders - PN532, PN532_SPI, PN532_I2C, PN532_HSU and NDEF (from NDEF Library) in your Arduino Library folder.
:::
**Demo 1: Write messages to tag**

- Open the code directly by the path:File -> Example ->Ndef_dev->WriteTag.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Code_Interfae.jpg)

In this code, the function message.addUriRecord("https://arduino.cc") is used to write message to tag. You can replace the message "https://arduino.cc" with new message. For example, we input "do you happy?" and "hello, world" using this function.

- Upload the code and open the Serial Monitor, It prompts you to place a NFC tag on the NFC antenna. After a successful operation, it will prompt you to read the tag.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/WriteTag.jpg)

**Demo 2: Read tag**

If you want to know whether the writing operation you have just done is successful, you can use the code:ReadTag for checking.

- Open the code:ReadTag directly by the path:File -> Example ->Ndef_dev->ReadTag and upload it to your Xadow Main Board.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/ReadTag_code.bmp)

- Open the Serial Monitor to see the tag information. Following figure shows the reading result:

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Read_a_Tag.jpg)

It is essential to explain a NDEF message in order to have a clear recognition about the above picture. There can be multiple records in a NDEF message. For our analysis purposes we use only one NDEF records.

**TNF(001)** - The TNF field value indicates the structure of the value of the TYPE field. The value 0x01 (NFC Forum well-known type) indicates that the TYPE field contains a value that follows the RTD type name format defined in the NFC Forum RTD specification).

**Type Length** - The TYPE_LENGTH field is an unsigned 8-bit integer that specifies the length in octets of the TYPE field. The TYPE_LENGTH field is always zero for certain values of the TNF field.

**Pay load Length** - The PAYLOAD_LENGTH field is an unsigned integer that specifies the length in octets of the PAYLOAD field (the application payload). The size of the PAYLOAD_LENGTH field is determined by the value of the SR flag

**Type(55)** - The value of the TYPE field is an identifier describing the type of the payload, The URI record type (“U”)

**Pay Load** - The rest of the string in UTF-8


## Xadow NFC Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Xadow NFC Antenna Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources
---
- [Xadow NFC Eagle File](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip)
- [Xadow NFC Antenna Eagle File](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip)
- [PN532 Datasheet](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
