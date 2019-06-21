---
name: ReSpeaker Drive Unit
category: ReSpeaker
bzurl:
oldwikiname:  ReSpeaker Drive Unit
prodimagename:  respeaker_core.jpg
surveyurl:  https://www.research.net/r/ReSpeaker_Drive_Unit
sku:     
---

![](https://github.com/SeeedDocument/ReSpeaker_Drive_Unit/raw/master/img/Meow_King_Drive_Unit.jpg)

ReSpeaker Drive Unit is specially designed for ReSpeaker Core, as a separate speaker drive unit.

With this drive unit that you can build your own smart speaker with Amazon Alexa Voice Services or other voice services. What's more, it supports Airplay that means you can stream your music via smart phone, PC and Mac. And of course play local music is possible.

ReSpeaker Core contains powerful exntension ability, we hopefully it can help you to enable voice on your prototype/product easily.

## Features

- Chargeable bettery included
- Touch button
- Airplay support
- Impedance is 4Ω, and Rated Power is 5W
- Indicator LED on the ReSpeaker Core


## Specification

- Rated Power: 5W
- Impedance: 4Ω
- SNR: ≥ 75dBA
- Sensitivity: 550 ± 50mV
- Degree of Distortion: ≤ 0.5%
- Frequency Response: 85Hz - 20kHz
- Power Supply: 5V through USB or through 3.7V, 1500mAh battery
- Speaker Diameter: 40mm

## Out of the box guide

### Prepare the ReSpeaker Core

To drive the Meow King drive unit, the firmware for ReSpeaker Core should be updated. To know the differences between the original stock firmware and this firmware, please refer to the change log [here](https://onedrive.live.com/?authkey=%21AKD3ZD6g0DE2M9E&cid=5219529519B9B6A1&id=5219529519B9B6A1%21720&parId=5219529519B9B6A1%21721&o=OneUp).

Now let's update the firmware. Firstly, download `ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin` from [OneDrive](https://1drv.ms/f/s!AqG2uRmVUhlShUyg92Q-oNAxNjPR). Copy the firmware to SD card and then plug the SD card into the ReSpeaker Core. Follow [the instruction here](http://wiki.seeed.cc/ReSpeaker_Core/#2-connect-to-serial-console) to get the serial console. Please note that, to get the USB serial working we need to restore [the default firmware](https://github.com/SeeedDocument/ReSpeaker_Drive_Unit/blob/master/res/respeaker_arduino_library/examples/pixels_pattern/pixels_pattern.ino) for the Arduino chip (ATMega32U4) if we have changed it. After we get the USB serial, type the following commands to update the firmware:

```shell
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-v1.0.01-LinkIt7688-squashfs-sysupgrade.bin
```

After the system image has been written, the ReSpeaker Core will reboot.

### Build up

Plug your ReSpeaker Core onto the Meow King drive unit like the image below.

<div class="text-center">
<img src="https://github.com/SeeedDocument/ReSpeaker_Drive_Unit/raw/master/img/mk_1.jpg" width="50%" height="50%">
</div>

Press the power logo over 5 seconds, the drive unit will power on, and also the ReSpeaker Core board.

!!!Note
    The power control circuit is in the drive unit, even when you pulled the ReSpeaker Core off, pressing the power logo over 5 seconds will still power on the drive unit.

To power down the whole device, please press the power logo over 5 seconds again.

When the device is powered on, the ReSpeaker Core will enter the boot up process. The LED ring will light up with red color for 1 second, indicating that the ReSpeaker Core is booting up.

<div class="text-center">
<img src="https://github.com/SeeedDocument/ReSpeaker_Drive_Unit/raw/master/img/mk_2.jpg" width="50%" height="50%">
</div>

Now wait a few seconds, find your smart phone and prepare to stream your music onto the Meow King drive unit.

### Stream your music

#### For iOS

1. Connect to the same Wi-Fi network on your iOS device and ReSpeaker.
2. On your iOS device, swipe up from the bottom of your screen to open Control Center.
3. In Control Center, swipe horizontally to find the Now Playing screen.
4. Select ReSpeaker as the following picture:

	<div class="text-center">
	<img src="https://github.com/SeeedDocument/ReSpeaker_Drive_Unit/raw/master/img/airplay.png" width="50%" height="50%">
	</div>

5. Connect your headphone/speaker to respeaker, then you can enjoy the music now.


#### For Android

1. Connect your smart phone to **ReSpeaker's Wi-Fi**.
2. On your smart phone, open an AirPlay client software, such as: *AllConnect*.
3. Select ReSpeaker as the following picture:

	<div class="text-center">
	<img src="https://github.com/SeeedDocument/ReSpeaker_Drive_Unit/raw/master/img/dlna.png" width="50%" height="50%">
	</div>

4. Connect your headphone/speaker to respeaker, then you can enjoy the music now.

!!!Note
        An additional tip is that, try to tune the volume up of your player application if you hear no sound after the playing.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>