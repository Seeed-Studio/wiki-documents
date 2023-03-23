---
description: 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)
title: 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/main.jpg)

The analog-to-digital converter(ADC) is a common accessory for Raspberry Pi. This is a 4-channel ADC based on Texas Instrument's ADS1115, which is a precision, low-power, 16-bit ADC chip. We make this ADC into a compact Raspberry Pi Zero form factor and integrated an analog Grove connector so that you can also use analog Grove modules with it.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) | Initial                                                                                               | Sep 2018      |

## Feature

- LOW current consumption:
  - Continuous Mode: Only 150μA
  - Single-Shot Mode: Auto Shut-Down
- Wide supply voltage range
- Input multiplexer (MUX) that provides two differential or four single-ended inputs.
- Programmable comparator
- Internal low-drift voltage reference
- Internal oscillator
- Internal PGA
- Programmable data rate: 8SPS to 860SPS
- I2C-compatible serial  interface
- Support Raspberry Pi 3B/3B+/4

## Specification

|Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|Analog input current|100mA(momentary)<br />10mA(continuous)|
|Storage temperature|-60～150℃|
|Maximum junction temperature|150℃|
|Interface|I2C|
|I2C address|0x48(defult)<br />0x49~0x4B(configurable)|
|Size|L: 65mm W: 30mm H: 20mm|
|Weight|36.5g|
|Package size|L: 140mm W: 78mm H: 27mm|
|Gross Weight|37g|

There are 4 possible I2C addresses of this grove, from 0x48 to 0x4B. The default I2C address is 0x48. You can change the I2C address by doing some soldering.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout1.png)

:::note
If SDA(corresponding address 0x4A) is used as the device address, hold the SDA line low for at least 100 ns after the SCL line goes low to make sure the device decodes the address correctly during I2C communication.
:::

## Typical applications

- Portable instrumentation
- Consumer goods
- Battery monitoring
- Temperature measurement
- Factory automation and process controls

## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout.png)

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

### Hardware

**Materials required**

|Raspberry pi|4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)|

### Software

In this section, we will introduce you how to install the driver and how to enable I2C.

**Enable I2C**
As I2C is not turned on by default, we need to configure I2C by hand.

- **Step 1**. Power up the Raspberry Pi.
- **Step 2**. Open raspi-config by typing following command in terminal.

```C++

sudo raspi-config

```

- **Step 3**. Arrow down to 5 interfacing Options and press "enter" to select.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp1.png)

- **Step 4**. Arrow down to P5 I2C and press "enter" to select.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp2.png)

- **Step 4**. Select "Yes" to enable it.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp3.png)

- **Step 5**. Select "Ok".

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp4.png)

- **Step 6**. Select "Finish" to save the changes.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp5.png)

**Installation**

- To check the I2C is enabled in Raspberry Pi.

Navigate to the `config.txt` file by running the following in the terminal:

```sh
cd /boot
sudo nano config.txt
```

- Make sure there is line stating of `dtparam=i2c_arm=on` in the file.

- The default I2C speed is 100 kHz. You can increase it to 400 kHz like by adding the following line to the config file:

```sh
dtparam=i2c_arm_baudrate=400000
```

- Then to use the ads1115-overlay add the following to `config.txt`:

```sh
dtoverlay=ads1115
```

- After that you need to provide parameters to the overlay to configure the driver. To enable all 4 channels of the ADC in single-ended mode, add the following:

```sh
dtparam=cha_enable
dtparam=chb_enable
dtparam=chc_enable
dtparam=chd_enable
```

- Save the file and reboot your raspberry pi.

If you reboot the system with those changes to `config.txt` you will see the following kernel modules:

- Run the following to check the kernel modules:

```sh
lsmod | grep ads
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/1.png"/></div>

:::note
 Note that the ADS1115 uses the same kernel as ADS1015.
:::

We can see that the ADS1115 is already there and can be used by Industrial IO.

- Navigate to the Industrial IO folder:

```sh
cd /sys/bus/iio/devices/iio\:device0/
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/2.png"/></div>

- Now you may access these hardware config files easily:

```sh
cat in_voltage0-voltage1_raw
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/3.png"/></div>

Channel 0 and 1 using scale of 0.1875mV. Measured potential difference is **17670 * 0.1875mv = 3.3V**

This adding kernel method allows you to develop your own shell or python script using the ADS1115!

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) Eagle Files](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip)

- **[Zip]** [4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) Software Library](https://github.com/Seeed-Studio/pi-hats/archive/master.zip)

- **[PDF]** [Datasheet ADS1115](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/ADS1115.pdf)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) .

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
