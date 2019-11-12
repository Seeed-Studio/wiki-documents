---
name: LTE Cat 1 Pi HAT
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---


![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/overview.JPG)

Seeed’s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,
based on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions.

LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP.

LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It’s well suited for building prototyping rapidly.


<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|Version|Links|
|--|--|
|<br>Europe</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-AT&T</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-VZW<br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/get_one_now_small.png" /></a></p>|


## Version

| Product Version              | Changes | Released Date |
|------------------------------|---------|---------------|
| LTE Cat 1 Pi HAT(USA-AT&T)   | Initial | Dec 2017      |
| LTE Cat 1 Pi HAT(USA-VZW)    | Initial | Dec 2017      |
| LTE Cat 1 Pi HAT(Europe)     | Initial | Dec 2017      |



## Specifications

- Compatible with Raspberry Pi 1 Model
B+ and later versions
    
- LTE CAT.1 and support 2G fallback(EU
version only)
    
- UART and USB interface for
communicate
    
- Support Grove I2C and Digital
connector
    
- Protocols on cellular module
    
- Embed TCP/UDP stack
    
- Embed HTTP, FTP, SSL
    
- Dual stack IPV4/IPV6
    
- 3GPP TS 27.007 [8], TS 27.005 [9]standard AT command


## Applications
- IoT gateway
- Data logger
- Vending machine
- POS
- Smart home devices
- Robot
- Advertising
- Other scenario need cellular networks


## Hardware Overview

**Interfaces**

![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/interfaces1.png)

![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/interfaces2.png)


- **LTE CAT.1**: U-blox LARA-R2xx series LTE CAT.1
module, please refer to [u-blox LARA-R2 series product page](https://www.u-blox.com/en/product/lara-r2-series) for more information.
- **Grove Port**: 2 Grove I2C/Digital Port, connected to SDA_RPI, SCL_RPI, it can be used as I2C or GPIO port.
- **Switcher**: Control Grove port voltage as 5V or 3.3V
- **USB Interface**: It can be used to power up the LTE Cat.1 Pi HAT and raspberry together, and used for debug port as well. Please refer to FAQ Q1 about how to use as debug port.
- **Battery Holder**: MP2617 is used for battery power management. If the battery is not connected, the CHG led will flash by 6HZ frequency. It will be off when under charging and on when finish charging. The connector is JST2.0 standard. 
- **Lara-R2XX Reset button**: Reset Lara-R2xx module.
- **Lara-R2XX Power on button**: Press 2 seconds to power on the Lara-R2xx module.
- **Antenna**: It includes 2 antennas, one is main and other is div. The main antenna is used for both sending and receiving signals. It must be connected. The div antenna is used for the receving only and to improve receiver sensitivity. It is optional. 
- **Rpi 40 pins**: Refer to pinout.
- **SIM card slot**: Follow silk screen direction to plug LTE SIM card.

!!!Warning
    For the battery, we suggest 3.7V Li-ion battery and connect to JST2.0. Especially for Lara-R211(Europe) Pi HAT, it includes the GSM function with high power consumption. If there is no LTE signal around, the LTE CAT.1 Pi HAT also consumes a lot of power supply. So we highly suggest attach the battery.

**Pinout**

![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/pinout.jpg)

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-us36{border-color:inherit;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-us36">Pin Used</th>
    <th class="tg-us36">Python (BCM)</th>
    <th class="tg-us36">WiringPi GPIO</th>
    <th class="tg-us36">Name</th>
    <th class="tg-us36" colspan="2">P1 Pin Number</th>
    <th class="tg-us36">Name</th>
    <th class="tg-us36">WiringPi GPIO</th>
    <th class="tg-us36">Python (BCM)</th>
    <th class="tg-us36">Pin Used</th>
  </tr>
  <tr>
    <td class="tg-us36">3V3_RPI</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">3.3v DC Power</td>
    <td class="tg-us36">1</td>
    <td class="tg-us36">2</td>
    <td class="tg-us36">5v DC Power</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">5V_RPI</td>
  </tr>
  <tr>
    <td class="tg-us36">SDA_RPI</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">8</td>
    <td class="tg-us36">GPIO02 (SDA1, I2C)</td>
    <td class="tg-us36">3</td>
    <td class="tg-us36">4</td>
    <td class="tg-us36">5v DC Power</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">5V_RPI</td>
  </tr>
  <tr>
    <td class="tg-us36">SCL_RPI</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">9</td>
    <td class="tg-us36">GPIO03 (SCL1, I2C)</td>
    <td class="tg-us36">5</td>
    <td class="tg-us36">6</td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">GND</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36">4</td>
    <td class="tg-us36">7</td>
    <td class="tg-us36">GPIO04</td>
    <td class="tg-us36">7</td>
    <td class="tg-us36">8</td>
    <td class="tg-us36">GPIO14 (TXD0)</td>
    <td class="tg-us36">15</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">TX_RPI</td>
  </tr>
  <tr>
    <td class="tg-us36">GND</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36">9</td>
    <td class="tg-us36">10</td>
    <td class="tg-us36">GPIO15 (RXD0)</td>
    <td class="tg-us36">16</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">RX_RPI</td>
  </tr>
  <tr>
    <td class="tg-us36">RTS_RPI</td>
    <td class="tg-us36">17</td>
    <td class="tg-us36">0</td>
    <td class="tg-us36">GPIO17</td>
    <td class="tg-us36">11</td>
    <td class="tg-us36">12</td>
    <td class="tg-us36">GPIO18</td>
    <td class="tg-us36">1</td>
    <td class="tg-us36">18</td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36">27</td>
    <td class="tg-us36">2</td>
    <td class="tg-us36">GPIO27</td>
    <td class="tg-us36">13</td>
    <td class="tg-us36">14</td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">GND</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36">22</td>
    <td class="tg-us36">3</td>
    <td class="tg-us36">GPIO22</td>
    <td class="tg-us36">15</td>
    <td class="tg-us36">16</td>
    <td class="tg-us36">GPIO23</td>
    <td class="tg-us36">4</td>
    <td class="tg-us36">23</td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">3V3_RPI</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">3.3v DC Power</td>
    <td class="tg-us36">17</td>
    <td class="tg-us36">18</td>
    <td class="tg-us36">GPIO24</td>
    <td class="tg-us36">5</td>
    <td class="tg-us36">24</td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">12</td>
    <td class="tg-us36">GPIO10 (SPI0_MOSI)</td>
    <td class="tg-us36">19</td>
    <td class="tg-us36">20</td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">GND</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">13</td>
    <td class="tg-us36">GPIO09 (SPI0_MISO)</td>
    <td class="tg-us36">21</td>
    <td class="tg-us36">22</td>
    <td class="tg-us36">GPIO25 </td>
    <td class="tg-us36">6</td>
    <td class="tg-us36">25</td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">14</td>
    <td class="tg-us36">GPIO11 (SPI0 SCLK)</td>
    <td class="tg-us36">23</td>
    <td class="tg-us36">24</td>
    <td class="tg-us36">GPIO08 (SPI0_CS0)</td>
    <td class="tg-us36">10</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">GND</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36">25</td>
    <td class="tg-us36">26</td>
    <td class="tg-us36">GPIO07 (SPI0_CS1)</td>
    <td class="tg-us36">11</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">30</td>
    <td class="tg-us36">Reserved</td>
    <td class="tg-us36">27</td>
    <td class="tg-us36">28</td>
    <td class="tg-us36">Reserved</td>
    <td class="tg-us36">31</td>
    <td class="tg-us36"></td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">LARA_PWR</td>
    <td class="tg-us36">5</td>
    <td class="tg-us36">21</td>
    <td class="tg-us36">GPIO05</td>
    <td class="tg-us36">29</td>
    <td class="tg-us36">30</td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">GND</td>
  </tr>
  <tr>
    <td class="tg-us36">LARA_RST</td>
    <td class="tg-us36">6</td>
    <td class="tg-us36">22</td>
    <td class="tg-us36">GPIO06</td>
    <td class="tg-us36">31</td>
    <td class="tg-us36">32</td>
    <td class="tg-us36">GPIO12</td>
    <td class="tg-us36">26</td>
    <td class="tg-us36">12</td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36">13</td>
    <td class="tg-us36">23</td>
    <td class="tg-us36">GPIO13</td>
    <td class="tg-us36">33</td>
    <td class="tg-us36">34</td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">GND</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36">19</td>
    <td class="tg-us36">24</td>
    <td class="tg-us36">GPIO19(SPI1 MISO)</td>
    <td class="tg-us36">35</td>
    <td class="tg-us36">36</td>
    <td class="tg-us36">GPIO16(SPI1 CS0)</td>
    <td class="tg-us36">27</td>
    <td class="tg-us36">16</td>
    <td class="tg-us36">CTS_RPI</td>
  </tr>
  <tr>
    <td class="tg-us36">FREE</td>
    <td class="tg-us36">26</td>
    <td class="tg-us36">25</td>
    <td class="tg-us36">GPIO26</td>
    <td class="tg-us36">37</td>
    <td class="tg-us36">38</td>
    <td class="tg-us36">GPIO20(SPI1 MOSI)</td>
    <td class="tg-us36">28</td>
    <td class="tg-us36">20</td>
    <td class="tg-us36">FREE</td>
  </tr>
  <tr>
    <td class="tg-us36">GND</td>
    <td class="tg-us36"></td>
    <td class="tg-us36"></td>
    <td class="tg-us36">Ground</td>
    <td class="tg-us36">39</td>
    <td class="tg-us36">40</td>
    <td class="tg-us36">GPIO21(SPI1 SCLK)</td>
    <td class="tg-us36">29</td>
    <td class="tg-us36">21</td>
    <td class="tg-us36">FREE</td>
  </tr>
</table>

**Dimensions**

![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/Hard01.png)


<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=eeee1715-69fe-4e5e-a643-15a3c1f3510d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>


**Versions**

Now we have made three versions of the LTE Cat 1 Pi HAT. In addition to supporting different networks, they are almost the same. And you may pay attention that the only the Europe version support 2G net.

| Version  | Module    | Network |
|----------|-----------|---------|
| Europe   | LARA-R211 | 2G/4G   |
| USA-AT&T | LARA-R203 | 4G      |
| USA-VZW  | LARA-R204 | 4G      |


## Getting Started

### Hardware

!!!Note
    We use the Raspberry Pi3 with 2018-04-18 [RASPBIAN STRETCH WITH DESKTOP](https://www.raspberrypi.org/downloads/raspbian/) for below demo.

- Step 1. Stack LTE Cat 1 Pi HAT on top of Raspberrry and connect the 2 antennas. 

![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/Rasp_Pi_HAT.jpg)

- Step 2. Connect the mouse, keyboard and monitor as well.
- Step 3. Power the Raspberry Pi.

### Software

- Step 1. Use dtoverlay=pi3-disable-bt to enable Raspberry Pi3/Pi4 UART0.

```
sudo nano /boot/config.txt
```

Then add `dtoverlay=pi3-disable-bt` and `enable_uart=1` to bottom of the config.txt. it should look like this.

```bash
[all]
#dtoverlay=vc4-fkms-v3d
dtoverlay=pi3-disable-bt
enable_uart=1
```

- Step 2. Disable the system serivce to use the UART0.

```
sudo systemctl disable hciuart 
```

!!!Note
    Pi3-disable-bt disables the Bluetooth device and restores UART0/ttyAMA0 to GPIOs 14 and 15. It is also necessary to disable the system service that initialises the modem so it doesn't use the UART: sudo systemctl disable hciuart.

- Step 3. Delete the console=serial0,115200 in cmdline.txt.

```
sudo nano /boot/cmdline.txt
```

Then delete console=serial0,115200 from the string. 

- Step 4. Reboot the Raspberry Pi3/Pi4

```
sudo reboot
```

- Step 5. Run below commands to run the demo

```
cd ~
git clone https://github.com/Seeed-Studio/ublox_lara_r2_pi_hat.git
cd ublox_lara_r2_pi_hat
sudo python setup.py install
cd test
sudo python test01.py
```

- Step 6. Here is the output from terminal. 

```
pi@raspberrypi:~/Desktop/ublox_lara_r2_pi_hat/examples $ sudo python test01.py
40-pin GPIO header detected
Enabling CTS0 and RTS0 on GPIOs 16 and 17
rts cts on
waking up...
module name:  LARA-R211
RSSI:  3
```

## FAQ

**Q1: Can we communicate with LTE Cat 1 Pi HAT directly with PC?**

A1: Yes, there are 2 ways. One is USB and other is UART port. 

- For USB, Please use the USB cable to connect the Pi HAT with PC directly. Then download and install the [u-blox Cellular USB_Windows Driver, v2.0](https://www.u-blox.com/sites/default/files/ubloxCell_usbcdc_windows_3264_v2.0.0.0.exe.zip). The COM3 and COM4 are used for AT command in device manager. We can use any Serial COM monitor tool to run AT commands or use 
evaluation software [m-center for Windows, version 1.11.0](https://www.u-blox.com/sites/default/files/products/tools/m-center-01.11.00.exe) for windows. 

![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/device_manager.png)

- For the UART port,　Please use the [usb to serial adaptor](https://www.seeedstudio.com/UartSBee-V5-p-1752.html), follow below connection and use the baudrate as 115200. We can use any Serial COM monitor tool to run AT commands.

|   USB to UART Adaptor | LTE Cat1 Pi HAT              |
|-----------------------|------------------------------|
| GND                   | Pin6-GND                     |
| TX                    | Pin8-TX_RPI                  |
| RX                    | Pin10-RX_RPI                 |
| NA                    | Pin11-RTS_RPI Connect to Pin9-GND |

![](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/Img/UART.png)

!!!Warning
    Please do connect the RTS_RPI to GND as marked as red at above picture if we use the UART port for communication.

**Q2: Do you have AT command list?**

A2: Here is [u-blox-CEL_ATCommands](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf).

**Q3: What is differences between the Lara-R203/204/211?**

A3: Please refer to [u-blox LARA-R2 series product page](https://www.u-blox.com/en/product/lara-r2-series).

**Q4: How to register to AT&T network for LARA-203?**

A4: Please run below commands.

```
AT+COPS=2
AT+UMNOCONF=2
AT+COPS=0
```

You can try below command to verify AT&T network connection. 

```
AT+UPSD=0,1,"AT&T"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

**Q5: How to register to Verizon network for LARA-204?**

A5: Please run below commands.

```
AT+COPS=2
AT+UMNOCONF=3
AT+COPS=0
```

You can try below command to verify Verizon network connection. 

```
AT+UPSD=0,1,"vzwinternet"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```


## Resource

- **[PDF]** [LTE Cat.1 Pi HAT Schematic](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/res/LTE%20CAT.1%20Pi%20HAT%20v1.0.pdf)
- **[PDF]** [u-blox-CEL_ATCommands](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf)
- **[PDF]** [LARA-R2_DataSheet](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/res/LARA-R2_DataSheet_(UBX-16005783).pdf)
- **[PDF]** [LARA-R2_SysIntegrManual](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/res/LARA-R2_SysIntegrManual_(UBX-16010573).pdf)
- **[PDF]** [AT-Commands Examples AppNote](https://github.com/SeeedDocument/LTE_Cat_1_Pi_HAT/raw/master/res/AT-CommandsExamples_AppNote_(UBX-13001820).pdf)


## Projects

**Face Recognization Smart Lock with LTE Pi HAT**: Face recognition is becoming more and more widely used, we can use it to make a smart lock.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/face-recognization-smart-lock-with-lte-pi-hat-abcec9/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>