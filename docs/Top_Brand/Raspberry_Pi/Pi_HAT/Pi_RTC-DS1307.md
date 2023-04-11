---
description: DS1307 RTC (Real Time Clock) for Raspberry Pi
title: DS1307 RTC (Real Time Clock) for Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Pi_RTC-DS1307
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/main.jpg)

The Pi RTC is based on the clock chip DS1307, it can provide a real-time clock(RTC) for raspberry pi via the I2C interface. Real-time clock of this module counts seconds,minutes, hours, date of the month,month, day of the week, and year with leap-year compensation valid up to 2100. The clock operates in either the 24-hour or 12-hour format with AM/PM indicator. If you want to keep this module timing when the Raspberry Pi is powered off, you need to put a 3-Volt CR1225 lithium cell in the battery-holder.  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::note
        The battery is not included.
:::

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

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/pin_out.jpg)

:::note
RX/TX is not used in this module, but the 5x2 header takes up the RX/TX pin of the Raspberry Pi, so we bring the RX/TX out and come with a 2pin header.
:::

### Schemaitc

**Bi-directional level shifter circuit**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/schematic.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of Raspberry Pi uses 3.3V, however the chip DS1307 works at 5V, so this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

### Materials required

|Raspberry Pi|Pi RTC(DS1307)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|

:::note
Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
:::

### Install

The driver we provide only applied for Raspbian Jessie/Stretch.

:::tip
If you do not know how to use a raspberry pi, please check [here](https://www.raspberrypi.org/documentation/) before start.
:::

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

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/connect.jpg)

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

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Pi RTC(DS1307) Eagle Files](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip)

- **[http]** [Seeed Pi RTC Library](https://github.com/Seeed-Studio/pi-hats)

- **[PDF]** [Datasheet DS1307](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/DS1307.pdf)

## Project

This is the introduction Video of this product

<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
