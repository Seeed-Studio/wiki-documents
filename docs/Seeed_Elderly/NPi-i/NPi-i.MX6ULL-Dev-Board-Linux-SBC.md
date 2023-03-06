---
description: NPi i.MX6ULL Dev Board - Linux SBC
title: NPi i.MX6ULL Dev Board - Linux SBC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /NPi-i.MX6ULL-Dev-Board-Linux-SBC
last_update:
  date: 2/15/2023
  author: jianjing Huang 
---
<!-- ---
name: NPi i.MX6ULL Dev Board - Linux SBC
category: Single Board Computer 
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html
wikiurl:
sku: 102991306(emmc)
sku: 102991306(NANO)
--- -->

# NPi i.MX6ULL Dev Board - Linux SBC

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/preview_3.jpg)

The NPi i.MX6ULL Dev Board is a low power consumption Linux single board computer built around the powerful i.MX6ULL. You would love the onboard 512MB DDR3L and 512MB NAND, not to mention the rich interfaces and I/O resources.

At the same time, we provide you with a wealth of software resources. You can find debian/ubuntu/yocto and system distribution images [here](https://github.com/Seeed-Studio/image-builder). Meanwhile, we also provide lots of Pi hats kernel and application layer. Hence, you can put your favorite Pi hat directly into this board to use. Most of SeeedStudio Pi Hats can work with NPi i.MX6ULL Dev Board (except NPi i.MX6ULL Dev Board 6-Mic Circular Array Kit for Raspberry Pi and NPi i.MX6ULL Dev Board 4-Mic Linear Array Kit for Raspberry Pi). You can also use our Grove base PI Hat to prototype whatever you like with Grove modules. Please follow us on Github for the latest software updates.

The whole board is made by a core module and a breakout board, and the components are all industrial grade.

The core module is composed of the i.MX6ULL core and 512MB DDR3L, 512MB NAND FLASH(or 8GB eMMC). In fact, depending on the Flash, the NPi i.MX6ULL Dev Board can be divided into two different Version.

The breakout board mainly includes various peripheral interfaces and input and output, IO expansion. Including but not limited to two 100M ethernet port, one USB Host and one USB OTG port, one 24bit RGB LCD Interface, 2x 40 Pin I/O expansion header, etc. Such a wealth of resources will meet your various control needs. All those features make it a perfect solution for industrial control, rail transit, drone control, and audio output, etc.

NPi i.MX6ULL Dev Board - 8G eMMC Version:

[![Get one now](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html)

NPi i.MX6ULL Dev Board - 512MB NAND FLASH Version:

[![Get one now](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html)

## Features

- Arm-Cortex-A7 core processor
- Industrial grade
- Low power consumption
- debian/ubuntu/yocto OS
- Raspberry Pi 40-Pin Compatible Carrier Board.

## Specification

|Item|Values|
|----|------|
|Peripheral Interface| 1 x USB Host<br />2 x 100M Ethernet interface<br />1 x FPC LCD interface (including 24 bit RGB and I2C touch control)<br />1 x SD card interface (on the back of the board)<br />1 x Uart interface<br />2 x 40pin header|
|On-board LED|3 x user-defined LED<br />1 x power LED<br />1 x Heartbeat LED|
|Power|1 x DC interface (5V±2%)<br />1 x USB Type - C|
|Button|4 x key|
|Switch|1 X 8-digit DIP switch|
|RTC|1 x RTC battery slot|
|CPU|1 X NXP MCIMX6Y2CVM08AB|
|Frequency|up to 800Mhz|
|DDR3L|onboard 512MB|
|eMMC|onboard 8GB(NPi i.MX6ULL Dev Board - 8G eMMC Version)|
|NAND|onboard 512M(NPi i.MX6ULL Dev Board - 512MB NAND FLASH Version)|
|dimension|61mm x 100mm|
|Operating temperature(NPi i.MX6ULL Dev Board - 8G eMMC Version)| -20℃ ~ 80℃ |
|Operating temperature(NPi i.MX6ULL Dev Board - 512MB NAND FLASH Version)| -40℃ ~ 80℃ |

:::note
The operating temperature here refers specifically to the Core module, and the temperature range of the Breakout Board is narrower. We have not tested the specific temperature range of the Breakout Board.
:::

## Application

- Industrial (CAN-Ethernet gateways etc)
- White goods(refrigerators,Type-c waves etc)
- Smart Home Devices

## Hardware Overview

### Interface

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/NAND-over.jpg)

**100M Ethernet Interface with LEDs**: 2 x 100M Ethernet interfaces

**5V Power Jack**: Use 5V ± 2% single power supply

**Overvoltage protection indicator**: When this lamp is on, it indicates that the voltage is out of range

**USB Device Type C**: USB Type C interface

**UART TTL**: direct lead from serial port of main controller

**Heartbeat LED**: The heartbeat light will flash continuously after the system is running

**Power LED**:the LED will turn on when power on the board.

**Raspberry Pi Compatitle Header**: includes UART, I2C, SPI, PWM and other compatible Raspberry Pi IO interfaces

**LCD FPC interface**: including 24-bit RGB interface and I2C touch screen control interface

**Reset & User Button**: There are 4 buttons in total, which are reset, ON / OFF, normal button and Mode switch button

**USB Host Type A**: USB Host interface

**8-Digit DIP Switch**: An 8-bit DIP switch that supports switching between NAND, eMMC, SD, and USB boot modes

**Extra GPIO Header**: Contains a 74LV595PW chip, which expands a 4-channel IO into 8-channel

**User LED**:Programmable LED

**RTC Battery Slot**: can be connected to the CR1220 battery to power the RTC

**Type-c  SD Card Slot**: Type-c  SD card slot, supports SD card 3.0

### Pin Function

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/eMMC-c.jpg)

The more informtion you can go to [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) to view.

## Introduction To Software

### Preparatory Work

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- 4GB (or more memory) SD card and SD card reader
- PC or Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (optional)
- A USB type-c cable

:::caution
Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click<a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><B>here</B></a>to buy
:::

**Mirror Installation**

you need to install the NPi i.MX6ULL Dev Board - Linux SBC image from your SD card to get it up and running. We offer two ways to boot the NPi i.MX6ULL Dev Board - Linux SBC. You can either boot from the SD card or boot from the eMMC(or NAND).

**A.Boot from SD card**

- **Step 1.** Select the latest [firmware](https://files.seeedstudio.com/linux/NPi+i.MX6ULL/imx6ull-debian-buster-console-armhf-latest-2gb.img.xz)

- **Step 2.** Connect an SD card to a PC or MAC with an SD card reader, an SD card with more than 4G memory is required.

- **Step 3.** Click here to download <a href="https://etcher.io/">Etcher</a>, then use the Etcher to write the  ```*.img.xz``` file directly to the SD card. Or extract the ```*.img.xz``` file into a ```*.img``` file, and then burn it to an SD card using another mirror write tool.
<br />
<br />Click the plus icon to add the newly downloaded image file and the software will automatically select the SD card you inserted. Then click Flash! writing. It takes about 10 minutes to finish.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/etcher.png)

- **Step 4.** After writing the image to the SD card, insert the SD card into NPi i.MX6ULL Dev Board - Linux SBC.Set the 8-digit DIP switch to 2-5-8 mode to enable boot from SD.

- **Step 5.** Use USB type-c port to power the board. Do not take out the SD card during writing. NPi i.MX6ULL Dev Board - Linux SBC will boot from the SD card, you can see the PWR and Heatbeat LED lighting on Board.

:::note
if Heartbeat LED cannot flash, it means starting failed. Please check the image whether it installs fine.
:::

**B. Boot from eMMC(NAND) card**

- **Step 1.** the process is the same as **A. Boot from SD card** if you first start up the NPi i.MX6ULL Dev Board.

- **Step 2.** Select P22 in `fire-config` to enable flash boot then reboot.

```bash
sudo fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/flasher.png)

- **Step 3.** Wait for the LED  on the NPI i.MX6ULL Dev Board flash continuously. that indicate the eMMC(or NAND) buring successfully if the LED flash continuously.

- **Step 4.** Power off and unplug the SD card.

- **Step 5.** Set the 8-digit DIP switch to EMMC(2-4-5-7) or NAND(2-3-6) and restart.

**Serial Console**

Now your NPi i.MX6ULL Dev Board - Linux SBC can boot, you might want to get access to the Linux system via a console, to setup the WiFi, etc.
<!-- You have two ways to get the console: -->

<!-- - A. The OTG USB port - This requires a running Linux system on the board -->

- B. The UART port - This is the hard way to access the console, it can be used for debugging low level issues

<!-- **A. Connection via OTG**

- **Step 1.** Find a Type-c USB cable, and please make sure it's a data cable (not just a power cable), plug the Type-c USB end to the NPi i.MX6ULL Dev Board's Type-c USB port , then plug another end of this cable into your computer.

- **Step 2.** Check at your computer if the serial port has risen:

    - Windows: check the device manager, there should be new serial deviced named ```COMx``` which x is an increasing number. 
    - Linux: `ls /dev/ttyACM*`, you should get ```/dev/ttyACMx``` where x will vary depending on which USB port you used.
    - Mac: `ls /dev/cu.usb*`, you should get ```/dev/cu.usbmodem14xx``` where xx will vary depending on which USB port you used.

- **Step 3.** Use your favorite serial debugging tool to connect the serial port, the serial has: 115200 baud rate, 8Bits, Parity None, Stop Bits 1, Flow Control None. For examples:

    - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the correct COM port of NPi i.MX6ULL Dev Board - Linux SBC, ```115200``` baud, 8Bits, Parity None, Stop Bits 1, Flow Control None.
    - Linux: Depend on your USB To TTL Adapter, it could be ```screen /dev/ttyACM0(,1, and so on)``` 115200 or ```screen /dev/ttyUSB0(,1, and so on) 115200```
    - Mac: Depend on your USB To TTL Adapter, it could be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```

- **Step 4.** The default user name is ```debian```, and password is ```temppwd```. -->

**B. Connection via The UART port**

In this section we will guide you how to establish a connection from your computer to your NPi i.MX6ULL Dev Board using your USB to TTL adapter which will be connected to the NPi i.MX6ULL Dev Board's Uart port.

- **Step 1.** Connect Uart port and your PC/Mac with an USB To TTL Adapter. If you don't have an USB To TTL Adapter, you can click [here](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) to get one.

- **Step 2.** Use the following Serial debugging tools with 115200 baud:
  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the correct COM port of NPi i.MX6ULL Dev Board - Linux SBC, 115200 baud, 8Bits, Parity None, Stop Bits 1, Flow Control None.you can go to
  - Linux: Depend on your USB To TTL Adapter, it could be ```screen /dev/ttyACM0(,1, and so on) 115200``` or ```screen /dev/ttyUSB0(,1, and so on) 115200```.
  - Mac: Depend on your USB To TTL Adapter, it could be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Step 3.** The default user name is ```debian```, and password is ```temppwd```.

- **Step 4.** If you do not have a USB to TTL Adapter, you may also use an Arduino. If using an Arduino, connect one end of a jumper wire to the RESET pin on the Arduino and the other end to the GND pin on the Arduino. This will bypass your Arduino's ATMEGA MCU and turn your Arduino into a USB to TTL adapter, see video tutorial [here](https://www.youtube.com/watch?v=qqSLwK1DP8Q). Now connect the GND pin on the Arduino to the GND pin on the Uart port of the NPi i.MX6ULL Dev Board. Connect the Rx pin on the Arduino to the Rx pin on the Uart port of the NPi i.MX6ULL Dev Board. Connect the Tx pin on the Arduino to the Tx pin on the Uart port of the NPi i.MX6ULL Dev Board. And lastly, connect the Arduino to your PC/Mac via the Arduino's USB cable. Now check that your Mac or Linux PC finds your Arduino by typing this command:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

You should get back something like:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Now follow step above to connect to your NPi i.MX6ULL Dev Board over this serial connection.

### Pin Control

this section we will guide you on how to Control the PIN that in NPi i.MX6ULL Dev Board by using the shell. Note you must use root permissions for the command to work

```bash
su root
username root password root
```

#### GPIO

In this section, we will explain the control principle of the Linux GPIO subsystem driver-related application layer program. Now we will control the Grove - Buzzer to tell you how to use it.

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer.html)

- **step 1.** Config GPIO 19 to export in /sys/class/gpio.

```
echo 19 > /sys/class/gpio/export
```

GPIO 19's location of the NPi i.MX6ULL Dev Board you can use [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) to view. The pin number that you get is GPIOx_IOn.you need the following formula to convert to the index of gpio.

```
index = GPIO1_IO19 = (1-1)*32 + 19 = 19
index = GPIO4_IO20 = (4-1)*32 + 20 = 116
```

- **step 2.** Connect Grove - Buzzer to  GPIO 19 on NPi i.MX6ULL Dev Board with Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable.

- **step 3.** Config GPIO 19 to output mode

```
echo out > /sys/class/gpio/gpio19/direction
```

- **step 4.** Config GPIO 19 to high

```
echo 1 > /sys/class/gpio/gpio19/value
```

final, you will hear the sound that Grove - Buzzer makes. meanwhile , about the sysfs of gpio you should need this [link](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt) to get more information.

#### INPUT

In this section, we will explain the control principle of the Linux input subsystem driver-related application layer program. Now we will use the `KEY Button` of NPi i.MX6ULL Dev Board to tell you how to use it.

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)

**Software**

- **step 1.** Install `evtest` to get `KEY Button`'status.

```
apt install evtest -y
```

- **step 2.** Check the `KEY Button` whether it is existing in /dev/input/by-path.

```
root@npi:~# ls -lh /dev/input/by-path
total 0
lrwxrwxrwx 1 root root 9 Feb 14  2019 platform-gpio-keys-event -> ../event0
```

You need to adjust the driver tree if you cannot get this result.

- **step 3.** Use `evtest` to get `KEY Button`' status. Note the NPi i.MX6ULL Dev Board has four buttons that control different functions. you only need to control the `KEY Button`.

```
root@npi:~# evtest
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:      gpio-keys
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "gpio-keys"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 11 (KEY_0)
Properties:
Testing ... (interrupt to exit)
Event: time 1583478811.552488, type 1 (EV_KEY), code 11 (KEY_0), value 1
Event: time 1583478811.552488, -------------- SYN_REPORT ------------
Event: time 1583478811.752195, type 1 (EV_KEY), code 11 (KEY_0), value 0
Event: time 1583478811.752195, -------------- SYN_REPORT ------------
```

Finally, you will get the above information.

#### UART

In this section, we will explain the basic use of serial port and terminal equipment. Now we will control the uart3 to tell you how to use it.

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- PC or Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)

**Software**

- **step 1.** Select P17 in `fire-config` to enable uart3  

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/fire-config-uart3-enable.png)

You will get cmd as follow if enabled successfully.

```
root@npi:~# ls /dev/ttymxc2
/dev/ttymxc2
```

- **step 2.** Config uart3 by using stty

```
stty -F /dev/ttymxc2 ispeed 115200 ospeed 115200
```

- **step 3.** Visit the [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) to find uart3's pin number of NPi i.MX6ULL Dev Board.

- **Step 4.** Connect Uart3 to your PC/Mac with a USB To TTL Adapter. If you don't have an USB To TTL Adapter, you can click [here](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) to get one.

- **Step 5.** Use the following Serial debugging tools with 115200 baud:
  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the correct COM port of NPi i.MX6ULL Dev Board - Linux SBC, 115200 baud, 8Bits, Parity None, Stop Bits 1, Flow Control None.you can go to
  - Linux: Depend on your USB To TTL Adapter, it could be ```screen /dev/ttyACM0(,1, and so on) 115200``` or ```screen /dev/ttyUSB0(,1, and so on) 115200```.
  - Mac: Depend on your USB To TTL Adapter, it could be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Step 6.** Use the following command to test the sending and receiving data:

```
echo seeedstduio > /dev/ttymxc2
```

finally,we will get 'seeedstduio' string in the putty if connect successfully.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/putty_recive.png)

#### I2C

In this section, we will explain the control principle of the Linux i2c driver-related application layer program. Now we will use i2c1 and Grove - Barometer Sensor (BMP280) to tell you how to use it.

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - BME280 Environmental Sensor (Temperature Humidity Barometer)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

**Software**

**step 1.** Install the i2c-tools by using apt

```
apt install i2c-tools -y
```

**step 2.** Visit the [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) to find I2C1's pin number of NPi i.MX6ULL Dev Board.

**step 3.** Connect Grove - BME280 to I2C1 on NPi i.MX6ULL Dev Board with Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable.

**step 4.** Detect I2C's address of Grove - BME280 by using
`i2cdetect`. 0 means i2c1,so if you want to detect i2c2 you need use `i2cdetect -y 1` to detect.

```
root@npi:~# i2cdetect -y 0
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- 77
```

Now,we can find the 2C's address of Grove - BME280 is 0x77.

**step 5.** Get Grove - BME280's ID by using i2cget

```
root@npi:~# i2cget -y 0 0x77 0xD0
0x58
```

Finally, We can get 0x58 which is Grove - BME280's ID.and more infromation about Grove - BME280 you can visit [wiki](https://wiki.seeedstudio.com/Grove-Barometer_Sensor-BME280/) to learn.the usage of i2c-tool you can view [link](https://www.mankier.com/package/i2c-tools)

#### ADC

In this section, we will explain the control principle of the Linux ADC driver-related application layer program.Now we will use ADC1 and Grove - Rotary Angle Sensor to tell you how to use it.

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)

**Software**

- **step 1.** Select P12 in `fire-config` to enable ADC1  

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/enable-adc.png)

You will get cmd as follow if enabled successfully.

```
root@npi:~# ls /sys/bus/iio/devices/iio\:device0
buffer              in_voltage3_raw                sampling_frequency_available
dev                 in_voltage_sampling_frequency  scan_elements
in_conversion_mode  in_voltage_scale               subsystem
in_voltage0_raw     name                           trigger
in_voltage1_raw     of_node                        uevent
in_voltage2_raw     power
```

- **step 2.** Visit the [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) to find ADC1's pin number of NPi i.MX6ULL Dev Board.You can find the GPIO number as follow picture.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/adc-pin-map.png)

**step 3.** Connect Grove - Rotary Angle Sensor to ADC1 on NPi i.MX6ULL Dev Board with Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable.

**step 4.** Get the AD data of Grove - Grove - Rotary Angle Sensor.

```
root@npi:~# cat /sys/bus/iio/devices/iio\:device0/\\in_voltage3_raw
82
```

Refer to the above information you can learn we are reading GPIO1_IO3 pins analog value.

#### SPI

In this section, we will explain the control principle of the Linux SPI program.Now we will use SPI and 2-Channel CAN-BUS(FD) Shield for Raspberry Pi to tell you how to use it.

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- [2-Channel CAN-BUS(FD) Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)

**Software**

- **Step 1.** According to the [installation guide](https://wiki.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) insert 2 Channel CAN BUS FD Shield for Raspberry Pi onto NPi i.MX6ULL Dev Board.

- **Step 2.** Select P23 in fire-config to expand Filesystem.

```bash
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/ExpandSDCard.png)

- **Step 3.** Install dependencies about seeed-linux-dtoverlays

```bsah
apt install -y make git device-tree-compiler linux-headers-$(uname -r) gcc
```

- **Step 4.** Make and install driver of NPi i.MX6ULL Dev Board from `seeed-linux-dtverlays` in the GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_imx6ull && make install_imx6ull
```

:::note
You can use mkdir -p /lib/modules/$(uname -r)/extra/seeed to create files if you find some error during the making.
:::

- **Step 5.** add dtbo package in `/boot/uEnv.txt` to make it become effective after reboot.

```bash
echo dtoverlay=/lib/firmware/imx-MCP2517FD-can0-overlay.dtbo >> /boot/uEnv.txt
reboot
```

- **Step 6.** Check the driver whether install successfully by using `dmesg`, you will view the below information if it is successful.

```bash
root@npi:~ insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
root@npi:~ dmesg | grep spi
[    1.057609] spi_imx 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

root@npi:~ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

The more information about the 2-Channel CAN-BUS(FD) Shield you can visit [wiki](https://wiki.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#install-can-hat)

#### IIS

In this section, we will explain the control principle of the Linux IIS program.Now we will use IIS and ReSpeaker 2-Mics Pi HAT to tell you how to use it.

**Materials Required**

- NPi i.MX6ULL Dev Board - Linux SBC NAND Version(or eMMC Version)
- [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

**Software**

- **Step 1.** According to the [installation guide](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/#getting-started) insert ReSpeaker 2-Mics Pi HAT onto NPi i.MX6ULL Dev Board.

- **Step 2.** Install alsa-utils by using `apt`

```bash
sudo apt install alsa-utils -y
```

- **Step 3.** add dtbo package in `/boot/uEnv.txt` to make it become effective after reboot.

```bash
sudo sh -c  "echo dtoverlay=/lib/firmware/imx-seeed-voicecard-2mic-overlay.dtbo >> /boot/uEnv.txt"
```

:::note
You need to view SPI's guide to install dependencies about the imx-seeed-voice card-2 mic-overlay.dtbo if you cannot find imx-seeed-voice card-2mic-overlay.dtbo.
:::

- **Step 4.** Check the driver whether install successfully by using `aplay`, you will view the below information if it is successful.

```sh
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/snd-soc-seeed-voicecard.ko
debian@npi:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **Step 5.** Go into the `seeed-linux-dtverleys` folder and configure soundstate as follow：

```sh
debian@npi:~$ cd seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound.state /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **Step 6.** Now you can start playing with ReSpeaker 2-Mics Pi Hat! For simple record and play testing, run the following command:

1. To record an audio to `test.wav`:

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. To play the `test.wav` audio. Remember to plug in a headphone or speaker to output the audio.

```sh
aplay -Dhw:0 -r 48000 test.wav
```

For more information about the ReSpeaker 2-Mics Pi HAT you can visit [wiki](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/)

## Resourses

-----

- **[PDF]** [i.MX 6ULL datasheet](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/IMX6ULLCEC.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Linux SBC Mechanical_Dimensions](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/Mechanical_Dimensions.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Linux SBC Breakout Board](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Breakout-Board-Schematic-V1.0.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Linux SBC Core Module](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Core-Module-Schematic-V1.0.pdf)
- **[URL]** [Advanced system development](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL)

## NPi i.MX6ULL Advanced system development

- [Availability](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Availability)
- [Vendor Documentation](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-VendorDocumentation)
- [Basic Requirements](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-BasicRequirements)
- [ARM Cross Compiler: GCC](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-ARMCrossCompiler:GCC)
- [Bootloader: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Bootloader:U-Boot)
- [Linux Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-LinuxKernel)
- [Root File System](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Ubuntu20.04LTS)
- [Setup microSD card](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-SetupmicroSDcard)
- [Install Kernel and Root File System](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-InstallKernelandRootFileSystem)
- [Copy Root File System](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyRootFileSystem)
- [Set uname_r in /boot/uEnv.txt](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Setuname_rin/boot/uEnv.txt)
- [Device Tree Binary](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-DeviceTreeBinary)
- [Copy Kernel Image](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelImage)
- [Copy Kernel Device Tree Binaries](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelDeviceTreeBinaries)
- [Copy Kernel Modules](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelModules)
- [File Systems Table (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-FileSystemsTable(/etc/fstab))
- [Remove microSD/SD card](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RemovemicroSD/SDcard)
- [Comments](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Comments)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
