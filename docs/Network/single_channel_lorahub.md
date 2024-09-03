---
description: Single Channel LoRaHub
title: Single Channel LoRaHub
keywords:
- gateway
- XIAO ESP32C6
- SX1262
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /single_channel_lorahub
last_update:
  date: 8/27/2024
  author: Jessie
---

This project demonstrates how to implement a single channel LoRa gateway (LoRaHub) using a [XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html) as host MCU and Wio SX1262 LoRa radio.


## Get Started

### Setup environment


This project is based on the Espressif ESP-IDF development, check this [guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation ) to setup the environment.


#### Get ESP-IDF

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```


#### Set up Tools

```
cd esp-idf/
./install.sh
```



### Start Project



#### Install driver

```
cd ~/this_project_directory/components/radio_drivers
```

```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

#### Start 

```
cd ~/this_project_directory/lorahub
```



* Set up Environment Variables:

 This step can be skipped on Windows, as the installed "ESP-IDF x.x CMD" command will prepare it automatically.

 ```
 . ~/esp/esp-idf/export.sh
 ```

* Set the target device:

 ```
 idf.py set-target esp32c6
 ```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/lorahub/set-target.png" alt="pir" width={600} height="auto" /></p>


* Customize the build configuration:

 ```
 idf.py menuconfig
 ```

 1) Set flash size.

 `Serial flasher config` -> `Flash size` -> for XIAO ESP32C6 is `4MB`.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/lorahub/flash-size.png" alt="pir" width={600} height="auto" /></p>

 2) Set board type:

 `LoRaWAN 1-CH HUB Configuration` -> `Hardware Configuration` -> `Board type` -> `Semtech DevKit`

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/lorahub/board-type.png" alt="pir" width={600} height="auto" /></p>

 :::tip
 If you didn't connect the OLED display, please disable it.

 `LoRaWAN 1-CH HUB Configuration` -> `Hardware Configuration` -> Disable `OLED Display`

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/lorahub/oled.png" alt="pir" width={600} height="auto" /></p>
 :::




### Build this Project

Build the project by running:

```
idf.py build
```



### Flash this Project

#### Flash via ESP-IDF

To flash the binaries, run the following command:

```
idf.py -p /dev/ttyUSB0 flash
```


Launch the monitor console to see logs (optional).
```
idf.py -p /dev/ttyUSB0 monitor
```




#### Flash via ESPTOOL

If not using the complete ESP-IDF environment,you can also flash the binary files using the [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/) utility.



for Linux/MacOS:
```
esptool.py --chip esp32s3 -p /dev/ttyUSB0 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 2MB 0x0 bootloader.bin 0x10000 lorahub.bin 0x8000 partition-table.bin
```

for Windows:

```
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 2MB 0x0 bootloader.bin 0x10000 lorahub.bin 0x8000 partition-table.bin
```

### Wi-Fi Configuration


Download `ESP BLE prov` App:

* [for Android](https://play.google.com/store/apps/details?id=com.espressif.provble)
* [for IOS](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)


Press the `RST` button on the board, and then press the `BOOT` button, the LED will be on. 


<div class="table-center">
<iframe width="200" height="400" src="https://files.seeedstudio.com/wiki/SenseCAP/lorahub/wifi-pro.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Click Provision New Device button, click `I don't have a QR code` .
Change the prefix to `LRHB_`.

A device should be listed with a name prefixed with `LRHB_xxxx`.

Click on the device name, enter the proof of possession PIN. Default is `abcd1234`.

Select the WiFi network to be joined and enter credentials.







### LoRa Configuration

A web interface is available at:

```
http://xx.xx.xx.xx:8000
```
The IP can be checked in the serial monitor.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/lorahub/ip-port.png" alt="pir" width={800} height="auto" /></p>

The web interface allows to configure the following:

channel parameters: frequency, datarate, bandwidth
LoRaWAN network server: address, port
SNTP server address (to get UTC time)
There are 2 buttons at the bottom of the configuration form:

`Configure`: when pressed, the parameters set in the HTML form are written to flash memory (NVS).<br/>
`Reboot`: when pressed, a reboot command is triggered, the LoRaHub will restart and the new configuration is applied.

:::note
Note that the configuration written in flash memory is only taken into account on the next reboot.
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/lorahub/web-config.png" alt="pir" width={800} height="auto" /></p>



### Resource

[Github-LoRaHub](https://github.com/Seeed-Studio/SWDM019-LoRaHub-modified)