---
name: LTE Cat 1 Pi HAT
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

Seeed’s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,
based on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions.

LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP.

LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It’s well suited for building prototyping rapidly.


<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|Version|Links|
|--|--|
|<br>Europe</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-AT&T</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-VZW<br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

---
name: LTE Cat 1 Pi HAT
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

Seeed’s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,
based on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions.

LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP.

LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It’s well suited for building prototyping rapidly.


<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|Version|Links|
|--|--|
|<br>Europe</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-AT&T</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-VZW<br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

---
name: LTE Cat 1 Pi HAT
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

Seeed’s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,
based on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions.

LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP.

LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It’s well suited for building prototyping rapidly.


<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|Version|Links|
|--|--|
|<br>Europe</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-AT&T</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-VZW<br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

---
name: LTE Cat 1 Pi HAT
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

Seeed’s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,
based on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions.

LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP.

LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It’s well suited for building prototyping rapidly.


<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|Version|Links|
|--|--|
|<br>Europe</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-AT&T</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-VZW<br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

---
name: LTE Cat 1 Pi HAT
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

Seeed’s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,
based on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions.

LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP.

LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It’s well suited for building prototyping rapidly.


<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|Version|Links|
|--|--|
|<br>Europe</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-AT&T</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-VZW<br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

---
name: LTE Cat 1 Pi HAT
category: Sensor
bzurl: https://seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html
oldwikiname: Grove_-_Infrared_Temperature_Sensor
prodimagename: Grove-Infrared_Temperature_Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020062 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Temperature_Sensor
sku: 101020062
tags: grove_analog, io_3v3, io_5v, plat_duino
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

Seeed’s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,
based on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions.

LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP.

LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It’s well suited for building prototyping rapidly.


<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

|Version|Links|
|--|--|
|<br>Europe</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-AT&T</br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|<br>USA-VZW<br>|<p style=":center"><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)


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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

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

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

---
name: MakerPro Introduction
nointro:
---

Shenzhen is like the paradise of makers. As an open-source company which based in Shenzhen, SeeedStudio has the advantage and ability to sourcing and provide all the best resources to makers all around the world. MakerPro is the section where the products are not developed by Seeed, but sourcing directly from Shenzhen. 

The following MakerPro product are available here:

## Product  List
---

Here is the list of the MakerPro Boards you can find in the Seeed WiKi. The list will be constantly updated.

- [0.5w Solar Panel 55*70](/0.5w_Solar_Panel_55x70/)
- [1.5W Solar Panel 81*137](/1.5W_Solar_Panel_81x137/)
- [125Khz RFID module - UART](/125Khz_RFID_module-UART/)
- [13.56Mhz RFID module - IOS/IEC 14443 type a](/13.56Mhz_RFID_module-IOS-IEC_14443_type_a/)
- [1w Solar Panel 80*100](/1w_Solar_Panel_80x100/)
- [2.5W Solar Panel 116*160](/2.5W_Solar_Panel_116x160/)
- [2KM Long Range RF link kits w/ encoder and decoder](/2KM_Long_Range_RF_link_kits_w_encoder_and_decoder/)
- [3.6V Micro hydro generator](/3.6V_Micro_hydro_generator/)
- [315MHz Simple RF Link Kit](/315MHz_Simple_RF_Link_Kit/)
- [315Mhz RF link kit](/315Mhz_RF_link_kit/)
- [315Mhz Wireless car key fob with key chain](/315Mhz_Wireless_car_key_fob_with_key_chain/)
- [315Mhz remote relay switch kits - 2 channels](/315Mhz_remote_relay_switch_kits-2_channels/)
- [3W Solar Panel 138*160](/3W_Solar_Panel_138x160/)
- [433Mhz RF Link Kit](/433Mhz_RF_Link_Kit/)
- [AVR USB Programmer](/AVR_USB_Programmer/)
- [Bicycle Dynamo With Bracket - 6V 3W](/Bicycle_Dynamo_With_Bracket-6V_3W/)
- [Bluetooth Multimeter](/Bluetooth_Multimeter/)
- [Bluetooth V4.0 HM-11 BLE Module](/Bluetooth_V4.0_HM_11_BLE_Module/)
- [Bracket for Infrared Proximity Sensor](/Bracket_for_Infrared_Proximity_Sensor/)
- [Bugduino](/Bugduino/)
- [Bus Pirate v3 (assembled)](/Bus_Pirate_v3_assembled/)
- [CUI32Stem](/CUI32Stem/)
- [Capacitance Meter Kit](/Capacitance_Meter_Kit/)
- [Codec-Adaptive Wireless Relay](/Codec-Adaptive_Wireless_Relay/)
- [DC framework miniature solenoid VL-0063](/DC_framework_miniature_solenoid_VL-0063/)
- [DC framework solenoid HCNE1-0520](/DC_framework_solenoid_HCNE1-0520/)
- [DC framework solenoid HCNE1-0630](/DC_framework_solenoid_HCNE1-0630/)
- [DSO Nano](/DSO_Nano/)
- [DSO Nano v3](/DSO_Nano_v3/)
- [DSO Nano/Development](/DSO_Nano-Development/)
- [DSO Nano/OpenOCD gdb](/DSO_Nano-OpenOCD_gdb/)
- [DSO Nano/Qemu gdb](/DSO_Nano-Qemu_gdb/)
- [DSO Nano/gcc](/DSO_Nano-gcc/)
- [DSO Quad](/DSO_Quad/)
- [DSO Quad Manual (by the community)](/DSO_Quad_Manual_by_the_community/)
- [DSO Quad:Beta HW](/DSO_Quad-Beta_HW/)
- [DSO Quad:Building Firmware](/DSO_Quad-Building_Firmware/)
- [DSO Quad:Calibration](/DSO_Quad-Calibration/)
- [Danger Shield Complete Kits](/Danger_Shield_Complete_Kits/)
- [FSM-55](/FSM-55/)
- [FST-01](/FST-01/)
- [Fubarino SD](/Fubarino_SD/)
- [G1&#34; Water Flow Sensor](/G1_Water_Flow_Sensor/)
- [G1&amp;2&#34; Water Flow Sensor](/G1_and_2_inch_Water_Flow_Sensor/)
- [G1&#39;1/4 Water Flow sensor](/G1-1-4_Water_Flow_sensor/)
- [G1/8&#34; Water Flow Sensor](/G1-8_Water_Flow_Sensor/)
- [G3/4 Water Flow sensor](/G3-4_Water_Flow_sensor/)
- [GPS Bee kit](/GPS_Bee_kit/)
- [Grove - Base Shield for IOIO-OTG](/Grove-Base_Shield_for_IOIO-OTG/)
- [LCD 16*2 Characters- Green Yellow back light](/LCD_16-2_Characters-Green_Yellow_back_light/)
- [LCD 8*2 Characters- Blue back light](/LCD_8-2_Characters-Blue_back_light/)
- [LoNet 808 - Mini GSM/GPRS &#43; GPS Breakout](/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/)
- [M11*1.25 Water Flow Sensor](/M11_1.25_Water_flow_Sensor/)
- [Matrix Clock](/Matrix_Clock/)
- [Mini Soldering Iron](/Mini_Soldering_Iron/)
- [PIR Motion sensor module](/PIR_Motion_Sensor_Large_Lens_version/)
- [Photo Reflective Sensor](/Photo_Reflective_Sensor/)
- [Photo interrupter (OS25B10)](/Photo_interrupter_OS25B10/)
- [Piezo Sensor - MiniSense 100](/Piezo_Sensor-MiniSense_100/)
- [RF Explorer Software](/RF_Explorer_Software/)
- [RGBW Stripe WireLess Shield V1.0](/RGBW_Stripe_WireLess_Shield_V1.0/)
- [Raspberry PI B&#43; Case](/Raspberry_PI_Bplus_Case/)
- [Raspberry Pi 3 Model B](/Raspberry_Pi_3_Model_B/)
- [Renbotics ServoShield Rev](/Renbotics_ServoShield_Rev/)
- [SDLogger - Open Hardware Data Logger](/SDLogger-Open_Hardware_Data_Logger/)
- [Scream out loud - 110dBA fixed tone Siren](/Scream_out_loud-110dBA_fixed_tone_Siren/)
- [Shield MaTrix V0.9](/Shield-MaTrix-V0.9b/)
- [Starter bundle harness V1.0](/Starter_bundle_harness_V1/)
- [Ultra Sonic range measurement module](/Ultra_Sonic_range_measurement_module/)
- [Weight Sensor (Load Cell)0-500g](/Weight_Sensor_Load_Cell_0-500g/)
- [WiFi Serial Transceiver Module](/WiFi_Serial_Transceiver_Module/)
- [WireLess Gate Shield V1.0](/WireLess_Gate_Shield_V1.0/)
- [Wireless Sensor Node - Solar Kit](/Wireless_Sensor_Node-Solar_Kit/)

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>