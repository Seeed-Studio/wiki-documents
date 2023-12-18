---
description: EdgeBox RPi 200 with LoRaWAN® Module
title: EdgeBox RPi 200 with LoRaWAN® Module
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 7/14/2023
  author: Peter Pan
---

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200 series are all-in-one Raspberry Pi-based industrial edge computing controllers, combining multiple industrial purposes. Designed as high-scalability and rugged industrial hardware, mounted with rich IO resources and supported by the great Raspberry Pi industrial software ecosystem, it is an ideal choice for smart automation and Industrial Internet of Things(IIoT) solutions.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## WM1302 LoRaWAN module


> LoRaWAN® is a mark used under license from the LoRa Alliance®.
The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.

:::note
        We has recently released the Wio-E5 Series based on Wio-E5 module. Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [Wio-E5 Module](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). To learn more on creating a LoRaWAN® End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN® Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
:::

WM1302 module is a new generation of LoRaWAN® gateway module with mini-PCIe form-factor. Based on the Semtech® SX1302 baseband LoRaWAN® chip, WM1302 unlocks the greater potential capacity of long-range wireless transmission for gateway products. It features higher sensitivity, less power consumption, and lower operating temperature than the previous SX1301 and SX1308 LoRa® chip. 


WM1302 LoRaWAN® gateway module has SPI and USB versions on both US915 and EU868 frequency bands, enable you to have a wide-range of LoRaWAN® frequency plans options to choose including EU868, US915, AS923, AS920, AU915, KR920, and IN865.


WM1302 module is CE, FCC and Telec certified, which helps simplify the development and certification process of the LoRaWAN® gateway devices.
 
 
WM1302 is designed for M2M and IoT applications and can be widely applied in LPWAN gateway supported scenarios. It would be a perfect choice for you to significantly reduce the technical difficulties and time-consumption when developing the LoRa® gateway devices, including LoRaWAN® gateway, hotspots, etc.


## Hardware installation

**Step 1:** Disassemble the Edgebox-RPI-200

**Step 2:** Place the LoRaWAN® Module into onto the mini-PCIe Slot

**Step 3:** Please reassemble the Edgebox-RPI-200 and then apply power

**Step 4:** Please follow the steps below according to your module version:

:::note
The following steps requires a direct access to Edgebox-RPI-200 OS, so please choose a method to connect such as using ssh or using display, mouse and keyboard with `Terminal APP`, at your own preference. 
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


In the Terminal APP or your preferred Command Line tool

**Step 5.** type `sudo raspi-config` in command line to open Raspberry Pi Software Configuration Tool:

- Select Interface Options
- Select I2C, then select **Yes** to enable it
- Select Serial Port, then select **No** for "Would you like a login shell..." and select **Yes** for "Would you like the serial port hardware..."

After this, please reboot Raspberry Pi to make sure these settings work.

**Step 6.** Download the [WM1302 code](https://github.com/Lora-net/sx1302_hal) and compile it.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Step 7.** Copy the reset_lgw.sh script

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Step 8.** replace the USB port of the LoraWAN®  Module in the `global_conf.json.sx1250.US915.USB` config file:

**Step 8-1.**
First to get the specific USB port please follow the steps below:

```sh
lsusb
```

In my case our WM1302 is using the `STMicroelectronics Virtual COM Port` so we can get the product id `5740`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device.png"/></div>

**Step 8-2.**

Then get the usb device with the Product ID number `5740`, In this case we get the USB port number `1-1.3`:

```sh
sudo dmesg | grep 5740
```
<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-1.png"/></div>

Then we could get the device port as follow:

```sh
sudo dmesg | grep 1-1.3
```

so in my case the USB device is `ttyACM0`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-2.png"/></div>


So lets modify the USB device in the  `global_conf.json.sx1250.US915.USB` config with the sed command `sed -i 's/search_string/replacement_string/g' filename`, so please follow the pattern as `sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB`, to be note that please replace `the_result_from_above` and `frequency_of_your_module` for your own application:

for example in my case:

```sh
sed -i 's/ttyACM0/ttyACM0/g'  global_conf.json.sx1250.US915.USB
```

**Step 9.** Start LoraWAN® Module

Then run the following code to start LoraWAN® Module according to your WM1302 operation frequence version.

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```
<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/lora-activate.png"/></div>


Please choose your preferred Lora® Network server and use the `EUI ID` as shown in the picture above to setup the connections.


</TabItem>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


**Step 5.** type `sudo raspi-config` in command line to open Rasberry Pi Software Configuration Tool:

- Select Interface Options
- Select SPI, then select **Yes** to enable it
- Select I2C, then select **Yes** to enable it
- Select Serial Port, then select **No** for "Would you like a login shell..." and select **Yes** for "Would you like the serial port hardware..."

After this, please reboot Raspberry Pi to make sure these settings work.

**Step 6.** Download the [WM1302 source code](https://github.com/peterpanstechland/sx1302_hal.git) and compile it.

:::note
This is modified version of sx1302 hal library, because of the temperature sensor of the WM1302 module is not accessible on Edgebox-RPI-200, so the source code is modified accordingly, also the pin configuration in the `reset_lgw.sh` is also set accordingly.
:::

```sh
cd ~/
git clone https://github.com/peterpanstechland/sx1302_hal.git
cd sx1302_hal
git checkout Edgebox-RPI-200
sudo make
```

**Step 7.** Copy the reset_lgw.sh script

```sh
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Step 8.** Start LoraWAN® Module

Then run the following code to start LoraWAN® Module according to your WM1302 operation frequence version.

```sh
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

Please choose your preferred Lora® Network server and use the `EUI ID` as shown in the picture above to setup the connections.

</TabItem>
</Tabs>

<!-- Code END -->

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
