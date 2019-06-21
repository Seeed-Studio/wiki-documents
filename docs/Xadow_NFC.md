---
name: Xadow NFC
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-NFC-p-1627.html
oldwikiname: Xadow - NFC
prodimagename: X_nfc_01.jpg
surveyurl: https://www.surveymonkey.com/r/Xadow-NFC
sku: 113040000

---

---
Near Field Communication (NFC) is a set of short-range wireless technologies. It's behind daily applications such as access control system and mobile payment system.

![](https://github.com/SeeedDocument/Xadow_NFC/raw/master/images/X_nfc_01.jpg)

Xadow NFC features a highly integrated transceiver module PN532 which handles contactless communication at 13.56MHz. You can read and write a 13.56MHz tag with this module or implement point to point data exchange with two Xadow NFCs. Xadow NFC is designed to use I2C, SPI or UART communication protocols, and I2C is the default mode. In addition, we assign an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-p-1627.html)

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

!!!Note:
    When Xadow NFC is using SPI communication protocols, there is an existing library which supports phone-to-Xadow NFC communication. The default communication mode for this product is I2C, so the library cannot use directly.

Before reading/writing tag, what you need to prepare is the hardware installation and the libraries.

- The hardware installation as shown below:

![](https://github.com/SeeedDocument/Xadow_NFC/raw/master/images/XadowNFC.jpg)

!!!Note:
    When connect Xadow - NFC to [Xadow - Main Board](http://wiki.seeedstudio.com/Xadow_Main_Board), you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module (see four corners of each Xadow module).


- Download [PN532 library](https://github.com/Seeed-Studio/PN532) and [NDEF Library](https://github.com/don/NDEF). Do not forget to install these libraries into Arduino Library. If you haven't knew clearly the operation, please refer [here](http://www.seeedstudio.com/wiki/How_to_install_Arduino_Library) for a closer look.

!!!Note:
    Make sure that you have folders - PN532, PN532_SPI, PN532_I2C, PN532_HSU and NDEF (from NDEF Library) in your Arduino Library folder.

**Demo 1: Write messages to tag**

- Open the code directly by the path:File -> Example ->Ndef_dev->WriteTag.

![](https://github.com/SeeedDocument/Xadow_NFC/raw/master/images/Code_Interfae.jpg)

In this code, the function message.addUriRecord("http://arduino.cc") is used to write message to tag. You can replace the message "http://arduino.cc" with new message. For example, we input "do you happy?" and "hello, world" using this function.

- Upload the code and open the Serial Monitor, It prompts you to place a NFC tag on the NFC antenna. After a successful operation, it will prompt you to read the tag.

![](https://github.com/SeeedDocument/Xadow_NFC/raw/master/images/WriteTag.jpg)

**Demo 2: Read tag**

If you want to know whether the writing operation you have just done is successful, you can use the code:ReadTag for checking.

- Open the code:ReadTag directly by the path:File -> Example ->Ndef_dev->ReadTag and upload it to your Xadow Main Board.

![](https://github.com/SeeedDocument/Xadow_NFC/raw/master/images/ReadTag_code.bmp)

- Open the Serial Monitor to see the tag information. Following figure shows the reading result:

![](https://github.com/SeeedDocument/Xadow_NFC/raw/master/images/Read_a_Tag.jpg)

It is essential to explain a NDEF message in order to have a clear recognition about the above picture. There can be multiple records in a NDEF message. For our analysis purposes we use only one NDEF records.

**TNF(001)** - The TNF field value indicates the structure of the value of the TYPE field. The value 0x01 (NFC Forum well-known type) indicates that the TYPE field contains a value that follows the RTD type name format defined in the NFC Forum RTD specification).

**Type Length** - The TYPE_LENGTH field is an unsigned 8-bit integer that specifies the length in octets of the TYPE field. The TYPE_LENGTH field is always zero for certain values of the TNF field.

**Pay load Length** - The PAYLOAD_LENGTH field is an unsigned integer that specifies the length in octets of the PAYLOAD field (the application payload). The size of the PAYLOAD_LENGTH field is determined by the value of the SR flag

**Type(55)** - The value of the TYPE field is an identifier describing the type of the payload, The URI record type (“U”)

**Pay Load** - The rest of the string in UTF-8

## Resources
---
- [Xadow NFC Eagle File](https://github.com/SeeedDocument/Xadow_NFC/raw/master/resources/Xadow_NFC_Eagle_File.zip)
- [Xadow NFC Antenna Eagle File](https://github.com/SeeedDocument/Xadow_NFC/raw/master/resources/Xadow_NFC_Antanna.zip)
- [PN532 Datasheet](https://github.com/SeeedDocument/Xadow_NFC/raw/master/resources/PN532.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>