---
name: Pi RTC (DS1307)
category: Pi
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 103030277
tags:
---

![](https://github.com/SeeedDocument/Pi_RTC-DS1307/raw/master/img/main.jpg)

The Pi RTC is based on the clock chip DS1307, it can provide a real-time clock(RTC) for raspberry pi via the I2C interface. Real-time clock of this module counts seconds,minutes, hours, date of the month,month, day of the week, and year with leap-year compensation valid up to 2100. The clock operates in either the 24-hour or 12-hour format with AM/PM indicator. If you want to keep this module timing when the Raspberry Pi is powered off, you need to put a 3-Volt CR1225 lithium cell in the battery-holder.  

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


!!!Note
        The battery is not included.


## Features

- Support Raspberry Pi 2/ 3 B/B+/4/Zero
- Suport seconds,minuutes,hours,day of week,month, year
- Support 24-hour or 12-hour format with AM/PM indicator
- 56-byte, battery-backed, nonvolatile (NV) RAM for data storage
- Two-wire serial interface
- Programmable squarewave output signal
- Automatic power-fail detect and switch circuitry


## Specification

|Item|Value|
|---|---|
|Operating Voltage|5V|
|Interface|I2C|
|I2C Address|0x68|


## Typical applications

Any applications need Real Time on Raspberry.


## Pin Out

![](https://github.com/SeeedDocument/Pi_RTC-DS1307/raw/master/img/pin_out.jpg)


!!!Note
        RX/TX is not used in this module, but the 5x2 header takes up the RX/TX pin of the Raspberry Pi, so we bring the RX/TX out and come with a 2pin header.


### Schemaitc

**Bi-directional level shifter circuit**

![](https://github.com/SeeedDocument/Pi_RTC-DS1307/raw/master/img/schematic.jpg)


This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of Raspberry Pi uses 3.3V, however the chip DS1307 works at 5V, so this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [2N7002A](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/AN10441.pdf)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


## Getting Started


### Materials required

|Raspberry Pi|Pi RTC(DS1307)|
|---|---|
|![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![](https://github.com/SeeedDocument/Pi_RTC-DS1307/raw/master/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|


!!!note
    Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy


### Install

The driver we provide only applied for Raspbian Jessie/Stretch.

!!!Tip
        If you do not know how to use a raspberry pi, please check [here](https://www.raspberrypi.org/documentation/) before start.


- **Step 1. Driver Installation** 

Tap the following command in your terminal

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

When the download finish, tap the following command in your terminal

```
cd pi-hats
sudo ./install.sh -u rtc_ds1307
```

- **Step 2. Power off Raspberry Pi**

```
sudo shutdown -h now
```

- **Step 3. Insert the HAT to Raspberry Pi**

![](https://github.com/SeeedDocument/Pi_RTC-DS1307/raw/master/img/connect.jpg)


Please make sure plug the pin 1 of this hat into the pin 1 of raspberry GPIO, just like the picture above.


- **Step 4. Power up Raspberry Pi**


### Usage

Now you can use the command to check whether the driver is installed successfully.

```
./install.sh -l
```

If you want uninstall the driver you can use the command below:

```
sudo ./install.sh -u
```

Now let's see what the RTC module can do:

___
Read hardware clock and print result

```
sudo hwclock -r
```
___

Set the system time from the hardware clock

```
sudo hwclock -s
```
___

Set the hardware clock from the current system time

```
sudo hwclock -w
```
___

More usage
```
hwclock --help
```


## Resources

- **[Zip]** [Pi RTC(DS1307) Eagle Files](https://github.com/SeeedDocument/Pi_RTC-DS1307/raw/master/res/Pi%20RTC%20(DS1307).zip)

- **[http]** [Seeed Pi RTC Library](https://github.com/Seeed-Studio/pi-hats)

- **[PDF]** [Datasheet DS1307](https://github.com/SeeedDocument/Pi_RTC-DS1307/raw/master/res/DS1307.pdf)


## Project

This is the introduction Video of this product

<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>