---
name: Grove - Serial MP3 Player
category: Actuator
bzurl: https://seeedstudio.com/Grove-Serial-MP3-Player-p-1542.html
oldwikiname: Grove_-_Serial_MP3_Player
prodimagename: Mp3sensor_02.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/mp3sensor.jpg
surveyurl: https://www.research.net/r/Grove-Serial_MP3_Player
sku: 107020002
tags: grove_uart, io_3v3, io_5v, plat_duino, plat_linkit
---

[![](https://raw.githubusercontent.com/SeeedDocument/Grove-Serial_MP3_Player/master/img/Mp3sensor_02.jpg)](http://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Grove-Serial MP3 Player is a kind of simple MP3 player device whose design is based on a high-quality MP3 audio chip---WT5001. It can support 8KHZ~44.1kHZ sampling frequency MP3 and WAV file formats. This product has several peripheral ports: a standard UART Grove interface, a dual track headphone jack, an external interface and also a Micro SD card interface. You can control the MP3 playback state by sending commands to module via serial port tools, such as switch songs, change the volume and play mode and so on. It seems a simple module, but it owns such strong function. Want to know how the sound quality is? Please come and experience it!

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Features
--------

-   Standard Grove interface
-   Asynchronous serial port control play mode
-   Busy Indicator
-   Reset Button
-   Standard Micro SD card Interface
-   Support FAT16 and FAT32 file system

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Serial_MP3_Player/master/img/Mp3_interface.jpg)

-   ①：Left Channel Grove Interface.
-   ②：Headset Interface:3.5mm headphones
-   ③：Right Channel Grove Interface.
-   ④：WT5001
-   ⑤：LED Indicator：LED is on when music is playing.
-   ⑥：UART Grove Interface
-   ⑦：SD Card: micro SD Card(≤2GB)

## Play With Arduino

### Hardware

The Grove - Serial MP3 Play can be controlled by Arduino/Seeeduino. And there is a Serial_MP3 test code for you to use. I believe you can easily get started. For more detailed information, please refer to the following description. The hardware installation:

-   Connect Grove - Serial MP3 Play to the Digital 2 port of Arduino/Seeeduino, Notice that you can change the pin number as you like, just make sure corresponding changes the code. Then connect your Arduino/Seeeduino to PC with a USB cable.
-   Plug a earphone into Grove - Serial MP3 Play. Now the hardware part has been completed.

### Software

- **Step 1.** Download the  [ Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)  from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** You can select **Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player** example and upload to arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).
- **Step 4.** We will see the info at COM terminal as below.

![](https://github.com/SeeedDocument/Grove-MP3_v2.0/raw/master/img/COM.png)


- **Step 5.** Please key in the related command to play the music.

!!!Tips
    The library supports AVR/SAMD/STM32F4 devices, both hardware and software serial as well.

There are 2 kinds of serial ports. One is COMSerial, stands for communication port(connecting with Grove-MP3 module). The other is ShowSerial, stands for serial info display port(connectiong with PC). 

Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin D0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails. Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an Software Serial that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it’s not as fast or efficient as hardware serial. For more info about the Serial, please refer to [Seeed Arduino Serial](http://wiki.seeedstudio.com/Seeed_Arduino_Serial/). 

- **AVR:** For the below example, We define Software Serial as COMSerial(connectiong with Grove-MP3 module). NOT all the digital pins can be used for software serial. You can refer to [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) for detail pins. We define hardware Serial as ShowSerial(connecting with PC). If you use Arduino Mega, you can connect the hardware Serial to ShowSerial and the other Serial1/Serial2/Serial3 to COMSerial. So you can refer to AVR Mega setting. 

- **SAMD:** For the below example, The SAMD does not support software serial. We use the hardware serial **Serial1** to commuincate with Grove-MP3 Module and **SerialUSB** to print message on PC. 

- **STM32F4:** For the below example, We use the hardware serial **Serial** to commuincate with Grove-MP3 Module and **SerialUSB** to print message on PC. 

!!!Note
    For more info about the Serial, please refer to [Seeed Arduino Serial](http://wiki.seeedstudio.com/Seeed_Arduino_Serial/). 

```
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

WT2003S<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

WT2003S<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

WT2003S<HardwareSerial> Mp3Player;
#endif
```




-   Now you can hear songs stored in your SD card. And in the playing mode, the D1 indicator is on. If in the pause mode, the indicator will blink. More experience is waiting for you！

There is another way to control MP3 play mode via serial tool.In this way, you need a [UartSBee](http://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66) to connect MP3 to PC. The hardware installation as shown below:
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Serial_MP3_Player/master/img/Using_UartSBee_to_Control_MP3.jpg)

After the connection is completed, open the serial tool to send commands. About the specific commands, please see the reference part!
![](https://raw.githubusercontent.com/SeeedDocument/Grove-Serial_MP3_Player/master/img/Serial_tool_to_send_commands.jpg)

More experience is waiting for you！

References
----------

Common Command Descriptions:

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Command Name
</th>
<th scope="col">
Command Format
</th>
<th scope="col">
Description
</th>
</tr>
<tr>
<th scope="row">
Pause
</th>
<td>
7E 02 A3 7E
</td>
<td>
The music will stop when you send this command at the first time. After resending this command, it will continue.
</td>
</tr>
<tr>
<th scope="row">
Stop
</th>
<td>
7E 02 A4 7E
</td>
<td>
This command is able to trigger play the next song, or trigger play the first one if the player is playing the last one.
</td>
</tr>
<tr>
<th scope="row">
Next
</th>
<td>
7E 02 A5 7E
</td>
<td>
This command is able to trigger play the next song, or trigger play the first one if the player is playing the last one.
</td>
</tr>
<tr>
<th scope="row">
Previous
</th>
<td>
7E 02 A6 7E
</td>
<td>
This command can trigger play the previous song. Sending this command can trigger playback to the last song when you are enjoying the first one.
</td>
</tr>
<tr>
<th scope="row">
Volume control
</th>
<td>
7E 03 A7 1F 7E
</td>
<td>
There are 32 volume levels from 00 to 31. 00 is mute, and 31 for the maximum volume.
</td>
</tr>
<tr>
<th rowspan="4" scope="row">
Assigned play mode
</th>
<td rowspan="4">
7E 03 A9 XX 7E
</td>
<td>
XX=00 means playing single without playback(default)
</td>
</tr>
<tr>
<td>
XX=01 means the single repeated play mode
</td>
</tr>
<tr>
<td>
XX=02 means that it is all tracks repeated playback mode.
</td>
</tr>
<tr>
<td>
XX=03 stands for random pattern.
</td>
</tr>
</table>

Resources
---------

- [Grove - Serial MP3 Play Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Serial_MP3_Player/master/res/Grove-UART_MP3_Play_Eagle_File.zip)
- [Grove - Serial MP3 Play Schematic in PDF format](https://raw.githubusercontent.com/SeeedDocument/Grove-Serial_MP3_Player/master/res/Grove-Serial_MP3_Player.pdf)
- [Demo code on github](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- [WT5001 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Serial_MP3_Player/master/res/WT5001_datasheet_V1.5.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Serial_MP3_Player -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>