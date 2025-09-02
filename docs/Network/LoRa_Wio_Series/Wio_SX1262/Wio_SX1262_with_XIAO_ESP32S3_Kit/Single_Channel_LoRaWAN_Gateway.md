---
description: Single Channel LoraWAN Gateway based on XIAO ESP32S3 & Wio-SX1262 Kit
title: Single Channel LoRaWAN Gateway
keywords: ["XIAO ESP32S3", "LoRa", "Wio SX1262", "Single Channel Gateway"]
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_xiao_esp32s3_for_single_channel_gateway
sidebar_position: 3
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---

# **Configuring XIAO ESP32S3 & Wio-SX1262 Kit as Single Chanel LoRaWAN Gateway**

Single channel gateways(called One-Channel Hub) are low-cost tools that enable users to begin exploring the LoRa realm. These gateways can receive LoRa packets on a specific spreading factor and channel and facilitate the exchange of these packets with the network. Due to their affordability, many users have embarked on building their own single-channel gateways to experiment with LoRa.

The XIAO ESP32S3 as host MCU and Wio-SX1262 LoRa radio kit can be configured to function as single channel gateway. This kit offers a practical solution for those interested in delving into LoRa technology and establishing connections to LNS(lora network server).

This is the github project: [One Channel Hub](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config).

## Flash Firmware

The firmware is prepared for installation which is pre-flashed to XIAO ESP32S3 & Wio-SX1262 Kit with 3D case. If you want to flash XIAO ESP32S3 & Wio-SX1262 Kit as Single Channel LoRaWAN Gateway, simply download from [bin library](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config/bin).

:::tip
XIAO ESP32S3 & Wio-SX1262 Kit with 3D case is pre-flashed as a Single Channel LoRaWAN gateway, please jump to the next section for [configuration](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#configuration-via-sensecraft-app).
:::

:::note
This firmware build with:

- Select Seeed XIAO ESP32S3 Gateway board
- Modify the Flash size to 8 MB
- Enable Get config from flash
- Disable Wi-Fi provisionning
- Disable OLED Display

Usage:

- Enable/disable config through user button
- Bluetooth broadcast name by "GW-XIAO-ESP32S3"
- Connect through SenseCraft APP and config Wi-Fi/LoRa

:::

If you don't use the complete ESP-IDF environment, it is also possible to flash the provided binary files using the **esptool** utility.

Click to download the firmware:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/seeed_xiao_esp32s3_one_chanel_hub_2024_12_09_01.rar" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬ </font></span></strong></a>
</div>

**Step 1**: Download Esptool, for more information please refer to the [Esptool documentation](https://docs.espressif.com/projects/esptool/en/latest/esp32/).

```python
pip install esptool
```

**Step 2**: Connect the XIAO ESP32S3 to your PC.

**Step 3**: Navigate to the downloaded file and open the terminal/Command, then run **esptool.py** commands.

- For Linux/macOS

```linux
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

- For Windows

```linux
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

Replace `port` with the name of used serial port. If connection fails, see [Troubleshooting](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

### Flash with esp-idf

Identify the serial device associated to the One-Channel Hub to be flashed.
For linux and mac, can check the serial port by

```
ls /dev/cu*
```

then flash using `idf.py`, replace the **port**

```
idf.py -p port flash
```

If a **permission error** is returned, check that the current user is part of the dialout group. If not, do the following, reboot the linux machine and try again:

```
sudo usermod -a -G dialout $USERNAME
```

On a **Windows** setup, let's suppose that the device is mounted as COM14, the above command would be like:

```
idf.py -p COM14 flash
```

Launch the monitor console to see logs (optional).

```
idf.py -p port monitor
```

### Flash with esptool

If not using the complete ESP-IDF environment, can just download the provided binary files following [the first section](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#flash-firmware).

### Flash with esptool-JS

[Online esptool](https://espressif.github.io/esptool-js/) is recommended for flashing.

**Step1**: Set Baud rate to 115200 and connect to correct port.

**Step2**: Choose bin file and fill in coresponding flash address.

|**Flash Address**|**File**|
|----|----|
|0x0|seeed_xiao_esp32s3_devkit_bootloader.bin|
|0x10000|seeed_xiao_esp32s3_devkit_lorahub.bin|
|0x8000|seeed_xiao_esp32s3_devkit_partition-table.bin|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/70.png" alt="pir" width={600} height="auto" /></p>

## Configuration via Sensecraft APP

### WiFi & LoRaWAN Configuration

**Step 1**: Download `SenseCraft` App: [Download Link](https://sensecap-mate-download.seeed.cn/)

**Step 2**: Connect the XIAO ESP32S3 & Wio-SX1262 Kit to power.

**Step 3**: Follow the instructions in the app to configure the WiFi and LoRaWAN.

- Register and Login SenseCraft APP
- Navigate to `User` → `Device Bluetooth Configuration`
- Select `XIAO ESP32S3 & Wio-SX1262 Kit`
- Click `Device is ready for configuration`
- Press the kit botton once, When the LED starts to blink, it will enter the Bluetooth pairing mode.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/APPOperation.gif" alt="pir" width={300} height="auto" /></p>

**Step 4**: Resigter the LoRaWAN Gateway on The Things Network(TTN).

- create an account and login to https://eu1.cloud.thethings.network/.
- Register gateway.
- Copy the correct `gateway EUI` to TTN, and also fill in correct `frequency plan` and `gateway ID`.
- Reboot your gateway module and wait for about 2 mins. Then can check the gateway status of connected.

## Configuration via ESP BLE prov

:::note
If you want to configure Wi-Fi using **ESP BLE prov** and configure LoRaWAN using **web client**, you need to flash [this firmware](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip). Please note that it is not the same firmware as the one used for configuration via the SenseCraft app. Besides, you can configure `Enable Wi-Fi provisioning` following [Customize and Build Firmware](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#customize-and-build-firmware).
:::

### Wi-Fi Configuration

**Step 1**: Download `ESP BLE prov` App:

- [for Android](https://play.google.com/store/apps/details?id=com.espressif.provble)
- [for IOS](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)

Press the `RST` button on the board, and then press the `BOOT` button, the LED will be on.

**Step 2**: Connect the XIAO to your PC and open a serial port tool, like PuTTY, COMTOOL, or any other tools you prefered.

**Step 3**: Open terminal communication

- For `COMTOOL`:
  
(1). Select correct serial port and set baudrate to **115200**

(2). Go to Terminal and open communication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/23.png" alt="pir" width={500} height="auto" /></p>

- For `PuTTY`:

(1). Select correct serial line and set baudrate to **115200**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/25.png" alt="pir" width={500} height="auto" /></p>

(2). Go to Terminal and click 'Implicit CR in every LF'

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/26.png" alt="pir" width={500} height="auto" /></p>

**Step 4**: Click 'Provison Device' on ESP BLE prov app

Once connected successfully, The wifi connection information and lora gateway ID will show up on terminal.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/wifi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

:::tip
Please take the notes, it is useful for Lora configuration.

1. IP address: 192.168.1.44
2. Port: 8000
3. Gateway EUI: 0xF09E9EFFFE20D02C

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/24.png" alt="pir" width={600} height="auto" /></p>

The lora package forwarder's message which in Json format can be checked on Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/27.png" alt="pir" width={400} height="auto" /></p>

### LoRaWAN Configuration

As the IP address and port we taken down, the web interface is available at: `http://ip_address:8000`, and open it on browser.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/28.png" alt="pir" width={400} height="auto" /></p>

The web interface allows to configure the following parameters:

Channel parameters:

- Frequency
- Spreading Factor
- Bandwidth

LoRaWAN network server:

- Address
- Port

SNTP server address: to get UTC time

There are 2 buttons at the bottom of the configuration form:

`Configure`: when pressed, the parameters set in the HTML form are written to flash memory (NVS).<br/>
`Reboot`: when pressed, a reboot command is triggered, the LoRaHub will restart and the new configuration is applied.

:::note
Note that the configuration written in flash memory is only taken into account on the next reboot.
:::

All are set down. Now we can connect the XIAO ESP32S3 & SX1262 Kit lora kit to Lora Network Server like TTN(The things network) and Chirpstack.

- [Connect to TTN](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- [Connect to Chirpstack](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/)

## Customize and build firmware

If you want to reset the configuration, the following instruction can help you build the firmware by yourself under ESP-IDF environment.

### Setup environment

This project is based on the Espressif ESP-IDF development, check this [guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation ) to setup the environment.

#### Get ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### Set up Tools

```linux
cd esp-idf/
./install.sh
```

### Installation of One Channel Hub

**Step 1**: Clone the hub to local repository. And navigate to the project path.

```linux
git clone https://github.com/Seeed-Studio/one_channel_hub.git

cd ~/this_project_directory
```

**Step 2**: Install required driver

- SX126x driver(sx1261, sx1262, sx1268):

```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68 driver:

```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xx driver(lr1121):

```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### Build Firmware

**Step 1**: Enter the lorahub directory.

```
cd lorahub
```

Prepare your Linux/MAC terminal for building with ESP-IDF from the command line. This step can be skipped on Windows as the installed 'ESP-IDF x.x CMD' tool will prepare the environment automatically.

```
. ~/esp/esp-idf/export.sh
```

Configure the ESP32 target to build for.

```
idf.py set-target esp32s3
```

Customize the build if necessary:

```
idf.py menuconfig
```

(1) Set **board type**:

`LoRaWAN 1-CH HUB Configuration` → `Hardware Configuration` → `Board type` → `Seeed XIAO ESP32S3 Gateway`

The default setting of Lora radio type is `sx1262`.

Don't forget to disable the OLED Display.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/21.png" alt="pir" width={800} height="auto" /></p>

(2) Set **flash size**:

`Serial flasher config` → `Flash size` → for XIAO ESP32S3 is `8MB`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/22.png" alt="pir" width={800} height="auto" /></p>

 (3) Set **Wi-Fi Provisionning**:

- Set the Wi-Fi Provisionning via **SenseCraft APP**:
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Disable WiFi Provisionning over BLE`

- Set the Wi-Fi Provisionning via **ESP BLE prov**:
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Enable WiFi Provisionning over BLE`

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/100.png" alt="pir" width={800} height="auto" /></p>

Build the project:

```
idf.py all
```

## Resource

- [One Channel Hub Firmware for XIAO ESP32S3 & Wio-SX1262 Kit via SenseCraft APP](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip)
- [One Channel Hub Firmware for XIAO ESP32S3 & Wio-SX1262 Kit via ESP BLE prov](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)
- [Github Repository](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)

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
