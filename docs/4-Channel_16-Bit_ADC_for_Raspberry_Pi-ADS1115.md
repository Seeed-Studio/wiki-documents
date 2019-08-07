---
name: 
category: 4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 103030279
tags:
---


![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/main.jpg)

The analog-to-digital converter(ADC) is a common accessory for Raspberry Pi. This is a 4-channel ADC based on Texas Instrument's ADS1115, which is a precision, low-power, 16-bit ADC chip. We make this ADC into a compact Raspberry Pi Zero form factor and integrated an analog Grove connector so that you can also use analog Grove modules with it.




<p style=":center"><a href="https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

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
- I^2^C-compatible serial  interface
- Support Raspberry Pi 3B/3B+/4


## Specification

|Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|Analog input current|100mA(momentary)<br>10mA(continuous)|
|Storage temperature|-60～150℃|
|Maximum junction temperature|150℃|
|Interface|I2C|
|I2C address|0x48(defult)<br>0x49~0x4B(configurable)|
|Size|L: 65mm W: 30mm H: 20mm| 
|Weight|36.5g|
|Package size|L: 140mm W: 78mm H: 27mm|
|Gross Weight|37g|

There are 4 possible I2C addresses of this grove, from 0x48 to 0x4B. The default I^2^C address is 0x48. You can change the I2C address by doing some soldering.

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/pinout1.png)


!!! Note
		If SDA(corresponding address 0x4A) is used as the device address, hold the SDA line low for at least 100 ns after the SCL line goes low to make sure the device decodes the address correctly during I2C communication.



## Typical applications

- Portable instrumentation
- Consumer goods
- Battery monitoring
- Temperature measurement
- Factory automation and process controls


## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/pinout.png)



## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


## Getting Started

### Hardware

**Materials required**

|Raspberry pi|4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)|
|------------|-------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/thumbnail.jpg)|
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

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/rasp1.png)

- **Step 4**. Arrow down to P5 I2C and press "enter" to select. 

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/rasp2.png)

- **Step 4**. Select "Yes" to enable it. 

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/rasp3.png)

- **Step 5**. Select "Ok". 

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/rasp4.png)

- **Step 6**. Select "Finish" to save the changes.

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/rasp5.png) 

**Installation**

!!! Caution
		Please follow the steps strictly when installing, otherwise the installation may failed or even damage the module.

- **Step 1**. Power up Raspberry Pi.
- **Step 2**. Open the terminal and type the following commands.

```C++
cd ~
git clone https://github.com/Seeed-Studio/pi-hats.git
cd ~/pi-hats/tools
sudo ./install.sh -u adc_ads1115
sync
```

- **Step 3**. Power off Raspberry Pi.
- **Step 4**. Insert the HAT to Raspberry Pi
- **Step 5**. Power up Raspberry Pi.

**List install status**

```C++

 ./install.sh -l

```

!!! Success
		If your installation was successful, you should be able to see the following result.

```C++

pi@raspberrypi:~/pi-hats $ ./install.sh -l
adc_ads1115   : installed
rtc_ds1307    : not installed
rtc_ds3231    : not installed

```


**Uninstallation**

```C++

sudo ./install.sh -u

```


## ADC Guide

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/configuration.png) 

channels 0-3 is differntial voltage, full scale range -2.048V - +2.048V 

channels 4-7 is absolute voltage of AIN0-AIN3, full scale range 0 - +2.048V

Read AIN0(channel 4) voltage(unit mV).
```bash
    cat /sys/devices/platform/soc/*04000.i2c/i2c-1/1-0048/in4_input
```

|INPUT|channel|/sys/.../XXX|
|------|------|------|
|AIN0|4|in4_input|
|AIN1|5|in5_input|
|AIN2|6|in6_input|
|AIN3|7|in7_input|

Read all channels the same time.
```bash
    ./ads1115.sh
```

Take [Grove - Sound Sensor](http://wiki.seeedstudio.com/Grove-Sound_Sensor/) as an example, if you use the grove cable to connect sound sensor with the ADC hat as shown below, it means you are using A0(channel four). Now, run the command ++./ads1115.s++ inside the terminal, you will be able to see the following result if it is reading data from the sound sensor.

![](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/img/connection.jpg) 

```bash
pi@raspberrypi:~/pi-hats $ ./ads1115.sh
3f804000.i2c
four channels' value are :
1024
,
285
,
285
,
285
four channels' value are :
796
,
285
,
285
,
285
four channels' value are :
304
,
286
,
283
,
283
four channels' value are :
366
,
284
,
284
,
283
^Cpi@raspberrypi:~/pi-hats $ 

```

!!!Success

		You will be noticed that channel 5, 6, 7 is about fixed while channel 4 is reading some data.



## Resources

- **[Zip]** [4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) Eagle Files](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip)

- **[Zip]** [4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) Software Library](https://github.com/Seeed-Studio/pi-hats/archive/master.zip)

- **[PDF]** [Datasheet ADS1115](https://github.com/SeeedDocument/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/raw/master/res/ADS1115.pdf)


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).



<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>