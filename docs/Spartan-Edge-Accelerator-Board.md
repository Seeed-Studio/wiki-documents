---
name: Spartan Edge Accelerator Board
category: Platform
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 102030005
tags:
---

![](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/raw/master/img/Spartan-Edge-Accelerater-Board-v1.0-wiki.jpg)



The Spartan Edge Accelerator Board (SEA Board in short) is a lightweight FPGA development board, it is based on the Xilinx Spartan-7 chip and follows the Arduino shield form factor. Hence, you can use it as an Arduino shield to driver an LCD and a camera or as a stand-alone FPGA development board. Besides, with the help of on-board ESP32 chip, the SEA board also enables your Arduino with WiFi and Bluetooth function.



**Spartan-7** is the newest and most cost-effective FPGA chip among Xilinx’s FPGA family, offers the best in class performance per watt. 


On top of that, we provide the full FPGA APIs for Arduino, which means Arduino users are able to use the FPGA function without knowing anything about FPGA. This board will broaden Arduino’s capability in many ways like simple image processing and computer vision application, signal encryption and decryption, and signal sampling and processing. 



## Features

- Full FPGA APIs for Arduino
- Stand alone mode/Arduino Shield mode
- On-board WiFi and bluetooth 4.1 with BLE
- On-board 8 bit ADC
- On-board 6 axis Accelerometer and Gyroscope
- On-board Grove Connector(I2C/D2)



## Specification

|Parameter|Value|
|---|---|
|**FPGA**||
|FPGA Chip|Spartan-7 XC7S15|
|Logic Cells|12,800|
|Slics|2000|
|CLB Flip-Flops|16,000|
|Max. Distributed RAM (Kb)|150|
|Block RAM/FIFO w / ECC (36 kb each)|10|
|Total Block RAM (Kb)|360|
|Clock Mgmt Tiles (1 MMCM + 1 PLL)|2|
|DSP Slices|20|
|**Wireless**||
|Wireless Chip|Espressif ESP32-D0WDQ6|
|WiFi |802.11 b/g/n 2.4GHz|
|Bluetooth|Bluetooth 4.1 with BLE|
|**Peripheral**||
|Video|Mini HDMI x1|
|Camera|CSI/MIPI interface x1 (compatible with Raspberry Pi Camera V1 - OV5640)|
|SD card|Micro SD/TF card slot x1|
|FPGA GPIO|10 pins header (IO9~IO0)|
|Arduino GPIO|32 pins header (Arduino form factor)|
|Grove|Grove Connector x2 (I2C/D2)|
|LED|Monochrome LED x2<br>RGB LED x2|
|Button|Boot x1<br> Reset x1<br> FPGA Reset x1 <br> User x2|
|Switch|Power Mode Switch x1<br>5-Channel DIP Switch x1|
|**Power**||
|Operating Voltage|5V|
|IO Voltage|5V|
|Power Mode|USB Type C 5V<br>VIN 8~17V<br>Arduino Micro USB 5V|
|**Others**||
|ADC|8 bit ADC1173|
|Accelerometer and Gyroscope|6-axis LSM6DS3TR |


!!!Attention
    The SEA shield's IO voltage is 5V, and the FPGA's IO voltage is 3.3V, so we made a voltage divider to make the IOs voltage compatible. The 3.3V IO voltage of the SAM D21 series will be less than 3.3V after voltage division, which is not enough to drive the FPGA's IO. Therefore, at present, the SEA development board only supports the 5V IO Arduino board, such as [Arduino UNO](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-2995.html) and [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html).



## Hardware Overview


<div align="center">
<figure>
  <a href="https://raw.githubusercontent.com/SeeedDocument/Spartan-Edge-Accelerator-Board/master/img/Spartan-Edge-Accelerater-Board-v1.0-pin.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/raw/master/img/Spartan-Edge-Accelerater-Board-v1.0-pin.jpg" alt="Hardware Overview of SEA Board" title="Hardware Overview of SEA Board" />
  <figcaption><b>Figure 1</b>. <i>Hardware Overview of SEA Board</i></figcaption></a>
</figure>
</div>



|Number|Detail|
|-----|-------|
|1.|FPGA : XC7S15-1FTGB196C|
|2.|WiFi/Bluetooth : ESP32-D0WDQ6|
|3.|6-axis Accelerometer and Gyroscope : LSM6DS3TR |
|4.|DAC : DAC7311IDCKR|
|5.|Buck-DCDC : TPS62130|
|6.|USB-to-UART : CP2102-GMR|
|7.|USB : Type-C |
|8.|Mini HDMI|
|9.|CSI Interface ：MIPI Camera (compatible with Raspberry Pi Camera V1 - OV5640)|
|10.|Arduino Header : Compatible with Arduino UNO|
|11.|DIP Switchs :<br>K1-K4 user switchs<br>K5 Switch FPGA Programming Mode <br>  ->>>> JTAG : Using Xilinx official Programming Tool<br>->>>> Slave : [Using ESP32 to Program the FPGA](https://github.com/sea-s7/spartan-edge-esp32-boot) |
|12.|ESP32 Button ：Boot and RST|
|13.|FPGA Button ：USER1 USER2 FPGA_RST|
|14.|User LED: L1/L2/RGB1/RGB2<br>PWR : Power On <br> FPGA_DONE : Light up after programming the FPGA with esp32.|
|15.|Power Switch :<br> USB->Powered by USB Type C (5V DC)<br>5V->Powered by VIN Pin (8~17V DC)|
|16.|Power Mode:<br>OFF->Isolate the power supply of Arduino and Shield<br>ON->Connect Power of Arduino and Shield|
|17.|DAC Output and ADC Input Header|
|18.|FPGA IO : IO9~IO0|
|19.|FPGA JTAG Download Interface|
|20.|Grove Connector : 1x I2C; 1x D2&D3|
|21.|Ceramic chip antenna|
|22.|ADC : ADC1173|
|23.|SPI Flash : W25Q32JVZPIG|
|24.|Analog Switch ：DG2788A|
|25.|LDO : XC6221B102MR|
|26.|LDO : RT9013-18GB|
|27.|LDO : CJ1117-3V3|
|28.|SD card slot : Micro SD/TF card|


## Getting Started

Spartan Edge Accelerator Board can work in two modes:

- Arduino shield Mode
- Stand-alone Mode


In brief, it can work as a Arduino shield to bring the Arduino FPGA and Wireless features, it also can work as a FPGA development board without an Arduino. 


### Arduino shield Mode

In this wiki, we use Seeeduino V4.2, you can also use Arduino UNO, there are fully compatible with each other.

#### Hardware


**Materials required**

- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1 
- [Spartan Edge Accelerator Board]() x1
- [Micro SD card or TF card](https://www.seeedstudio.com/micro-SD-Card-Card-with-Card-Reader-32GB-Class-10-p-4082.html) x1
- [USB Type C data cable](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1


**Hardware Connection**

- Step1. Insert the Micro SD card or TF card into the SD card slot
- Step2. Plug the SEA Board into the Arduino
- Step3. Use one of the following three methods to power the system


|Power Port|Input Voltage|Power Switch Position|Power Mode Position|
|----------|-------------|---------------------|-------------------|
|Powered by SEA board USB Type C port| 5V DC|USB|ON|
|Powered by Seeeduino V4.2 micro USB port| 5V DC|--|ON| 
|Powered by Seeeduino V4.2 DC port| 8~17V DC|5V|ON|


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/raw/master/img/Spartan-Edge-Accelerater-Board-v1.0-combine-2.jpg" alt="Spartan Edge Accelerator Board Work with Arduino" title="Spartan Edge Accelerator Board Work with Arduino" />
  <figcaption><b>Figure 2</b>. <i>SEA board Work with Arduino</i></figcaption>
</figure>
</div>


!!!Attention
    You can also power both the SEA board and the Arduino at the same time, but please make sure you have set the Power Mode Position to **OFF**. Only then, the system power will be isolated, and you can power the Arduino and SEA board separately.


#### Software


Firstly, to work with Arduino, we should load bitstream(FPGA Logic) from SD Card to the on-board FPGA(xc7s15). The following library will show you how to do this via on-board ESP32.

[Spartan Edge Accelerator Board esp32 boot](https://github.com/sea-s7/spartan-edge-esp32-boot)


Then, the following tutorial will show you how to control the GPIO/ADC/DAC/RGB-LED resources of Spartan Edge Accelerator Board with Arduino.


[Spartan Edge Accelerator Board IO example](https://github.com/sea-s7/spartan-edge-ioex)




### Stand-alone Mode


#### Hardware


**Materials required**


- [Spartan Edge Accelerator Board]() x1
- [USB Type C data cable](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1


Just power the Spartan Edge Accelerator Board via the USB Type C cable.


#### Software

Spartan Edge Accelerator Board can also work as a traditional FPGA development board. The following traditional will show you how to use it at the stand-alone mode.


[vivado-tutorial](https://github.com/swjtu-mxb/vivado-tutorial)



## Resources

- **[ZIP]** [Spartan Edge Accelerator Board Eagle file](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/raw/master/res/Spartan%20Edge%20Accelerator%20Board%20v1.0.zip)
- **[PDF]** [Spartan-7 FPGAs Datasheet](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/raw/master/res/Spartan-7%20FPGAs%20Data%20Sheet.pdf)
- **[PDF]** [ESP32 Datasheet](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/raw/master/res/ESP32-datasheet.pdf)




## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 