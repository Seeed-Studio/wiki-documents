---
description: Seeeduino Crypto (ATmega4809 ECC608)
title: Seeeduino Crypto (ATmega4809 ECC608)
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-Crypto-ATmega4809-ECC608
last_update:
  date: 1/31/2023
  author: shuxu hu
---


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Seeed-Crypto-ATmega4809-ECC608-wiki.jpg)


Seeeduino Crypto is made for encryption. It is based on the high performance ATmega4809 and microchip ECC608 encryption chip.With the help of ECC608 encryption chip, you can experience I2C encryption and other encrypted communication.


In addition to encryption, Seeeduino Crypto has the same functions as Seeeduino V4.2 / Arduino Uno Rev3. It has rich interface resources, including 6 analog input pins, 14 digital I/ o-5s for PWM output, with 2 Grove I2C ports and 1 Grove UART port. Just plug it in and use hundreds of sensors and actuators.


The control solution Seeeduino Crypto is the same as ARDUINO UNO WIFI REV2. The difference is that Seeeduino Crypto does not have onboard WIFI. You can add an Arduino wifi module if necessary. Correspondingly, the price of Seeeduino Crypto is less than half of ARDUINO UNO WIFI REV2.


:::tip

    This product allows users to experience the encryption mode of I2C communication with great plasticity.
:::



<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html)


## Features


 - High-performance ATmega4809 microcontroller 

 - High-securitycryptographic Chip ECC608, supports SHA-256 & HMAC Hash / AES-128

 - 2 Grove I2C + 1 Grove UART, easy to prototype

 - Type C power supply + data transmit




## Specification

|Item|Detail|
|---|---|
| Chip | Microcontroller: ATMEGA4809-AFR   / Encryption: ECC608 |
| Clock Speed | 16Mhz |
| I/O Resource |Analog Input Channels: 6  /Digital I/O Pins: 14 / PWM Channels: 5|
| Peripheral Interface |2 Grove I2C Port / 1 Grove UART Port / 1 ICSP Interface /1 USB Type C data port|
| Operating Voltage | 5V|
| Power Supply |5V USB Type C / 8 -15 V DC Jack Input|


## Hardware Overview


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Hardware-figure.jpg)



 - **Type C** It is the board Type C interface, connected to the PC end, used as power supply and download.  
 
 - **LED RX / LED TX** Serial communication indicator LEDS TX,RX, Convenient for users to know the receiving and receiving status of serial communication.  
  
 - **DC Power Jack** The input voltage is 8v-15v.

 - **Reset Button and Reset LED** Used to reset the board, when reset, the reset lamp will flicker.

 - **Power LED** The system power indicator.

 - **ATMEGA32U4-MU Chip** The chip used as a USB to UPDI download is connected to the master MCU atmega4809-afr to burn the program to the master MCU.

 - **ATECC608 Encryption Chip** An encryption chip for I2C communication.

 - **ATMEGA4809-AFR Chip** Onboard MCU, as the main control chip of the system.

 - **Grove Connectors** Contains two I2C and a UART standard Grove interface



:::note

    When using serial port to communicate the output data, there should be a certain delay of more than 25ms, otherwise the serial port may be stuck.
:::


## Getting Started


:::note

    This part is based on Arduino 1.8.10 under Windows 10.
:::



First of all, you need to Install an Arduino Software.


[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.


:::note
 
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.
:::



**Open the Blink example**

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/select-blink.png)


**Add Seeeduino to your Arduino IDE**


Click on **Tools > Board > Boards Manager**, you can tap the keyword 'MegaAVR' at the search bar , find **Arduino MegaAVR**, and Install it.




![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/install.png)




**Select your board**

You'll need to select the entry in the **Tools > Board** menu that corresponds to your Arduino.
Selecting a **Arduino Uon WIFI Rev2**.


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/board.png)



**Select your serial port**

Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/port.png)


**Upload the program**


Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)


A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.



## Resources


- **Schematic**    

   [Seeeduino Crypto Schematic Diagram](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/Seeeduino-Crypto-(ATmega4809%26ECC608).zip)  

- **Data Sheet**

   [ATECC608A-MAHDA-S Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATECC608A-MAHDA-S-datasheet.pdf)

   [ATMEGA32U4-MU Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA32U4-MU-datasheet.pdf)

   [ATMEGA4809-AFR Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA4809-AFR-datasheet.pdf)  

- **References**

   [Getting Started with Arduino](https://www.arduino.cc/en/Guide/HomePage)

   [Arduino Language Reference](https://www.arduino.cc/en/Reference/HomePage)

   [Download the Arduino Software(IDE)](https://www.arduino.cc/en/Main/Software)

   [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)

   [Arduino Introduction](https://www.arduino.cc/en/guide/introduction)

   [Wikipedia page for Arduino](https://en.wikipedia.org/wiki/Arduino)




## Tech Support


<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
                                                                                                                                                                                                                                                                                                                                                                                                           