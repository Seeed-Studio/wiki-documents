---
description: DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi
title: DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /High_Accuracy_Pi_RTC-DS3231
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/main.jpg"/></div>

The High Accuracy Pi RTC is based on the clock chip DS3231. The DS3231 is a low-cost, extremely accurate I2C realtime clock (RTC). It provides an RTC for Raspberry Pi via the I2C interface. With the clock source from the TCXO(temperature compensated crystal oscillator), the RTC maintains seconds, minutes, hours, day, date, month, and year information. The date at the end of the month is automatically adjusted for months with fewer than 31 days, including corrections for leap year. The clock operates in either the 24-hour or 12-hour format with an AM/PM indicator. The clock provides two programmable time-of-day alarms and programmable square-wave output. The INT/SQW pin either generates an interrupt due to alarm condition or outputs a square-wave signal and the selection is controlled by the bit INTCN.

If you want to retain the time infomation even when the Raspberry Pi is powered off, you need to insert a 3V CR1225 lithium cell into the battery holder. And if you are looking for an RTC for your Arduino project, please also take a look at our blog  Arduino RTC Tutorial: Using DS1307 RTC with Arduino to easily get started.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-%28DS3231%29-p-3214.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| High Accuracy Pi RTC (DS3231) | Initial                                                                                               | Sep 2018      |

:::note
        The battery is not included.
:::

## Features

- Support Raspberry Pi 2/ 3 B/B+/4/Zero
- Suport seconds,minuutes,hours,day of week,month, year
- Support 24-hour or 12-hour format with AM/PM indicator
- Low-Power Consumption
- Two Time-of-Day Alarms
- Fast (400kHz) I2C Interface

## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V|
|Operating Temperature|0℃ to +70℃|
|Accuracy|±2ppm from 0°C to +40°C|
|Interface|I2C|
|I2C Address|0x68|
|Size|L: 25mm W: 25mm H: 8mm|
|Weight|4.2g|
|Package size|L: 85mm W: 75mm H: 25mm|
|Gross Weight|15g|

## Typical applications

Any applications need Real Time on Raspberry.

## Get Started

### Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

### Materials required

|Raspberry Pi|High Accuracy Pi RTC(DS3231)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/High-Accuracy-Pi-RTC-DS3231.html" target="_blank">Get One Now</a>|

:::note
Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy.
:::

### Pin Out

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/pin_out.jpg)

:::note

- The chip itself supports the alarm function, we also reserved the relevant hardware interface, but our software library does not include this function(S/INT pin), you need to carry out related software development.

- RX/TX is not used in this module, but the 6x2 header takes up the RX/TX pin of the Raspberry Pi, so we bring the RX/TX out and come with a 2pin header.
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
sudo ./install.sh -u rtc_ds3231
```

- **Step 2. Power off Raspberry Pi**

```
sudo shutdown -h now
```

- **Step 3. Insert the HAT to Raspberry Pi**

![](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/connect.jpg)

Please make sure plug the pin 1 of this hat into the pin 1 of raspberry GPIO, just like the picture above.

- **Step 4. Power up Raspberry Pi**

## Usage

Now you can use the command to check whether the driver is installed successfully.

```
./install.sh -l
```

If you want to uninstall the driver you can use the command below:

```
sudo ./install.sh -u
```

**Now let's see what the RTC module can do:**

Read hardware clock and print result

```
sudo hwclock -r
```

Set the system time from the hardware clock

```
sudo hwclock -s
```

Set the hardware clock from the current system time

```
sudo hwclock -w
```

More usage

```
hwclock --help
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [High Accuracy Pi RTC(DS3231) Eagle Files](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip)

- **[PDF]** [Datasheet DS3231](https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/datasheet.pdf)

## Project

This is the introduction Video of this product

<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
