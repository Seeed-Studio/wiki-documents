---
description: Getting Started with LoRaWAN® Gateway Module WM1302.
title: LoRaWAN® Gateway Module WM1302
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /WM1302_module
last_update:
  date: 4/24/2025
  author: Leo
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® is a mark used under license from the LoRa Alliance®.
The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.

:::note
We has recently released the Wio-E5 Series based on Wio-E5 module.

Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [Wio-E5 Module](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).

To learn more on creating a LoRaWAN® End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN® Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
:::

WM1302 module is a new generation of LoRaWAN® gateway module with mini-PCIe form-factor. Based on the Semtech® SX1302 baseband LoRaWAN® chip, WM1302 unlocks the greater potential capacity of long-range wireless transmission for gateway products. It features higher sensitivity, less power consumption, and lower operating temperature than the previous SX1301 and SX1308 LoRa® chip.

WM1302 LoRaWAN® gateway module has SPI and USB versions on both US915 and EU868 frequency bands, enable you to have a wide-range of LoRaWAN® frequency plans options to choose including EU868, US915, AS923, AS920, AU915, KR920, and IN865.

WM1302 module is CE, FCC and Telec certified, which helps simplify the development and certification process of the LoRaWAN® gateway devices.

WM1302 is designed for M2M and IoT applications and can be widely applied in LPWAN gateway supported scenarios. It would be a perfect choice for you to significantly reduce the technical difficulties and time-consumption when developing the LoRa® gateway devices, including LoRaWAN® gateway, hotspots, etc.

## Features

- **Powered by Semtech® SX1302 baseband LoRa® chip**, extremely low power consumption and high performance.
- **Mini-PCIe form factor with the standard 52-pin golden finger**, easy to integrate with various gateway devices.
- **Ultra-low operating temperature**, no additional heat dissipation needed, reducing the size of LoRaWAN® gateway.
- **High sensitivity** down to -139 dBm @SF12 with SX1250 TX/RX front-end; TX power up to 26 dBm @3.3V.
- **Certified with CE, FCC, and TELEC**. Simplify the final product certification process.

## Harware Overview

### Diagram

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### Pinout

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

<br />

#### Raspberry Pi Pinout Mapping

<table class="tg">
<thead>
<tr>
<th class="tg-4onr">40 Pin No.(BOARD#)</th><th class="tg-ev79">Raspberry Pi GPIO(BCM#)</th><th class="tg-ev79">WM1302 Pi HAT Pinout</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="tg-4onr">1</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">2</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">3</td>
  <td class="tg-f42p">GPIO 2</td>
  <td class="tg-f42p">I2C_SDA</td>
</tr>

<tr>
  <td class="tg-4onr">4</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">5</td>
  <td class="tg-f42p">GPIO 3</td>
  <td class="tg-f42p">I2C_SCL</td>
</tr>

<tr>
  <td class="tg-4onr">6</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">7</td>
  <td class="tg-f42p">GPIO 4</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">8</td>
  <td class="tg-f42p">GPIO 14</td>
  <td class="tg-f42p">GPS_RXD</td>
</tr>

<tr>
  <td class="tg-4onr">9</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">10</td>
  <td class="tg-f42p">GPIO 15</td>
  <td class="tg-f42p">GPS_TXD</td>
</tr>

<tr>
  <td class="tg-4onr">11</td>
  <td class="tg-f42p">GPIO 17</td>
  <td class="tg-f42p">SX1302_RESET<br />SPI version: Active HIGH<br />USB version: Active LOW</td>
</tr>

<tr>
  <td class="tg-4onr">12</td>
  <td class="tg-f42p">GPIO 18</td>
  <td class="tg-f42p">SX1262_BUSY</td>
</tr>

<tr>
  <td class="tg-4onr">13</td>
  <td class="tg-f42p">GPIO 27</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">14</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">15</td>
  <td class="tg-f42p">GPIO 22</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">16</td>
  <td class="tg-f42p">GPIO 23</td>
  <td class="tg-f42p">SX1262_DIO1</td>
</tr>

<tr>
  <td class="tg-4onr">17</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">18</td>
  <td class="tg-f42p">GPIO 24</td>
  <td class="tg-f42p">SX1262_DIO2</td>
</tr>

<tr>
  <td class="tg-4onr">19</td>
  <td class="tg-f42p">GPIO 10</td>
  <td class="tg-f42p">SPI_MOSI</td>
</tr>

<tr>
  <td class="tg-4onr">20</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">21</td>
  <td class="tg-f42p">GPIO 9</td>
  <td class="tg-f42p">SPI_MISO</td>
</tr>

<tr>
  <td class="tg-4onr">22</td>
  <td class="tg-f42p">GPIO 25</td>
  <td class="tg-f42p">GPS_RST</td>
</tr>

<tr>
  <td class="tg-4onr">23</td>
  <td class="tg-f42p">GPIO 11</td>
  <td class="tg-f42p">SPI_SCK</td>
</tr>

<tr>
  <td class="tg-4onr">24</td>
  <td class="tg-f42p">GPIO 8</td>
  <td class="tg-f42p">SX1302_CS</td>
</tr>

<tr>
  <td class="tg-4onr">25</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">26</td>
  <td class="tg-f42p">GPIO 7</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">27</td>
  <td class="tg-f42p">GPIO 0</td>
  <td class="tg-f42p">I2C_SDA(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">28</td>
  <td class="tg-f42p">GPIO 1</td>
  <td class="tg-f42p">I2C_SCL(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">29</td>
  <td class="tg-f42p">GPIO 5</td>
  <td class="tg-f42p">SX1262_RST</td>
</tr>

<tr>
  <td class="tg-4onr">30</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">31</td>
  <td class="tg-f42p">GPIO 6</td>
  <td class="tg-f42p">SX1262_CS</td>
</tr>

<tr>
  <td class="tg-4onr">32</td>
  <td class="tg-f42p">GPIO 12</td>
  <td class="tg-f42p">GPS_WAKE_UP</td>
</tr>

<tr>
  <td class="tg-4onr">33</td>
  <td class="tg-f42p">GPIO 13</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">34</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">35</td>
  <td class="tg-f42p">GPIO 19</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">36</td>
  <td class="tg-f42p">GPIO 16</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">37</td>
  <td class="tg-f42p">GPIO 26</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">38</td>
  <td class="tg-f42p">GPIO 20</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">39</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">40</td>
  <td class="tg-f42p">GPIO 21</td>
  <td class="tg-f42p">NC</td>
</tr>

</tbody>
</table>


## Specification

<table class="tg">
<thead>
<tr><th class="tg-4onr">Region</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">Frequency</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">Sensitivity</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">TX Power</td>
    <td class="tg-f42p">26 dBm (with 3.3V power supply)</td>
    <td class="tg-f42p">25 dBm (with 3.3V power supply)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LEDs</td>
    <td class="tg-f42p" colspan="2">Power: Green Config: Red TX: Green RX: Blue</td>
  </tr>
  <tr>
    <td class="tg-4onr">Form Factor</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, 52pin Golden Finger</td>
  </tr>
  <tr>
    <td class="tg-4onr">Power Consumption (SPI version)</td>
    <td class="tg-f42p" colspan="2">Standby: 7.5 mA<br />TX maximum power: 415 mA<br />RX: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">Power Consumption (USB version)</td>
    <td class="tg-f42p" colspan="2">Standby: 20 mA<br />TX maximum power: 425 mA<br />RX: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT(Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">Support</td>
  </tr>
  <tr>
    <td class="tg-4onr">Antenna Connector</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">Operating Temperature</td>
    <td class="tg-f42p" colspan="2">-40°C to 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">Dimensions</td>
    <td class="tg-f42p" colspan="2">30 mm (width) × 50.95 mm (length)</td>
  </tr>
  <tr>
    <td class="tg-4onr">Certification</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## Application

- LPWAN Gateway devices development

- Any long-distance wireless communication application development

- LoRa® and LoRaWAN® application learn and research

## Dimension

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## Getting Started

### Difference between SPI version and USB version

For WM1302 LoRaWAN® Gateway Module SPI version, the Semtech SX1302 and SX126x chip are conntected to Raspberry Pi via the same SPI bus with different chip select(CS) pin.

For WM1302 LoRaWAN® Gateway Module USB version, the Semtech SX1302 and SX126x chip are conntected to a STM32L4 MCU, and this factory programmed MCU will work as a USB device, becoming a bridge between Raspberry Pi and SX1302/SX126x.

### Quick Start with WM1302

#### Hardware Required

- WM1302 LoRaWAN® Gateway Module

- Raspberry Pi boards with 40-pin GPIO header(e.g. Raspberry Pi 4B or Raspberry 3B+)

- WM1302 Pi Hat for Raspberry Pi

- Power Adapter for Raspberry Pi

- A LoRa® antenna

- A 8G or larger SD card and a card reader

- A Type C USB cable if using WM1302 LoRaWAN® Gateway Module USB version

#### Software Required

- [Lastest Raspberry Pi OS image](https://www.raspberrypi.org/software/operating-systems/): Raspberry Pi OS Lite is recommended

- [Balena Etcher](https://www.balena.io/etcher/): To flash Raspberry Pi OS image to SD card

- [putty](https://www.putty.org/): To connect to Raspberry Pi via SSH on Windows

<br />

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Version" label="WM1302 SPI Version">

#### Step1. Mounting WM1302 Raspberry Pi Hat and install WM1302 module

Power off Raspberry Pi first, insert WM1302 module to the Pi Hat as the following picture and screw it down.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>


#### Step2. Enable the Raspbian I2C and SPI interface

WM1302 module communicates with Raspberry Pi via SPI and I2C interfaces. But these two interfaces are not enabled by default in Raspbian, so developer need to enable them before using WM1302. Here, we introduce a command line way to enable SPI and I2C interface.

First, login in Raspberry Pi via SSH or using a monitor(don't use serial console as the GPS module on the Pi Hat takes over the Pi's hardware UART pins), then type `sudo raspi-config` in command line to open Rasberry Pi Software Configuration Tool:

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Select `Interface Options`

2. Select `SPI`, then select `Yes` to enable it

3. Select `I2C`, then select `Yes` to enable it

4. Select `Serial Port`, then select `No` for "Would you like a login shell..." and select `Yes` for "Would you like the serial port hardware..."

5. After this, please reboot Raspberry Pi to make sure these settings work.

#### Step3. Get and compile SX1302 source code

Now let's install `git` and download `sx1302_hal`(library and programs for SX1302 LoRa Gateway) from github:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Move to `sx1302_hal` folder and compile everything:

```shell
cd ~/sx1302_hal
make
```

#### Step4. Run Semtech SX1302 packet forwarder

Copy `reset_lgw.sh` to `packet_forwarder` folder, and modify the `reset pin` for SX1302 and SX1261 in `reset_lgw.sh` script with text editor `nano`:

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder
nano tools/reset_lgw.sh
```

You will see the default `reset pin` as following:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Modify the `SX1302_RESET_PIN`, `SX1302_POWER_EN_PIN` and `SX1261_RESET_PIN` as following:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Save these changes by pressing `CTRL + x`, followed by `y` and `Enter` to close the text editor.

<br />

You may also refer to the complete script below:

<details>
<summary>reset_lgw.sh</summary>

```shell
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0

```
</details>

<br />

Choose your prefered LoRaWAN Network Server `server_address` and the gateway EUI `gateway_ID` in the corresponding `global_conf.json.sx1250.xxxxx` based on the module you are using, and modify the `up/down port` to `1700`. Then run the following code to start the concentrator:


```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

</TabItem>
<TabItem value="WM1302 USB Version" label="WM1302 USB Version">

#### Step1. Mounting WM1302 Raspberry Pi Hat and install WM1302 module

Power off Raspberry Pi first, insert WM1302 module to the Pi Hat as the following picture and screw it down. Connect its Type C port to one of the Raspberry Pi USB port with a Type C USB cable.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### Step2. Enable the Raspbian I2C and SPI interface

WM1302 module communicates with Raspberry Pi with SPI and I2C. But these two interfaces are not enabled by default in Raspbian, so developer need to enable them before using WM1302. Here, we introduce a command line way to enable SPI and I2C interface.

First, login in Raspberry Pi via SSH or using a monitor(don't use serial console as the GPS module on the Pi Hat takes over the Pi's hardware UART pins), then type `sudo raspi-config` in command line to open Rasberry Pi Software Configuration Tool:


```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Select `Interface Options`

2. Select `SPI`, then select `Yes` to enable it

3. Select `I2C`, then select `Yes` to enable it

4. Select `Serial Port`, then select `No` for "Would you like a login shell..." and select `Yes` for "Would you like the serial port hardware..."

5. After this, please reboot Raspberry Pi to make sure these settings work.

#### Step3. Get and compile SX1302 source code

Now let's install `git` and download `sx1302_hal`(library and programs for SX1302 LoRa Gateway) from github:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Move to `sx1302_hal` folder and compile everything:

```shell
cd ~/sx1302_hal
make
```

#### Step4. Run Semtech SX1302 packet forwarder

To get the specific USB port please follow the steps below:

```shell
lsusb
```

In my case, the `Product` ID of our WM1302 module is `8047`

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ lsusb
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 2109:3431 VIA Labs, Inc. Hub
Bus 001 Device 003: ID 2886:8047 Seeed Technology Co., Ltd. WM1302 USB Port  
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
```

Then get the USB device with the `Product ID` `8047`. 

```shell
sudo dmesg | grep 8047
sudo modprobe cdc_acm
```

In my case, the USB port number is `1-1.3`.

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 8047
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
```

Now we can get the device port by using:

```shell
sudo dmesg | grep 1-1.3
```

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 1-1.3
[  215.364299] usb 1-1.3: new full-speed USB device number 3 using xhci_hcd
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
[  215.459643] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  215.459657] usb 1-1.3: Product: WM1302 USB Port  
[  215.459669] usb 1-1.3: Manufacturer: SEEED
[  215.459680] usb 1-1.3: SerialNumber: 4E100336FF7F
[  215.543301] cdc_acm 1-1.3:1.0: ttyACM0: USB ACM device
```

So in my case, the USB device is `ttyACM0`. The default USB device setting in `global_conf.json.sx1250.xxxxx.USB` is `ttyACM0`, so we do not need to do anything here.

If your device uses other USB port, we can use the `sed` command `sed -i 's/search_string/replacement_string/g' filename` to modify the `global_conf.json.sx1250.xxxxx.USB` config file for the corresponding region.

<br />

Choose your prefered LoRaWAN Network Server `server_address` and the gateway EUI `gateway_ID` in the corresponding `global_conf.json.sx1250.xxxxx` based on the module you are using, and modify the `up/down port` to `1700`. Then run the following code to start the concentrator:

```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

</TabItem>
</Tabs>

<!-- Code END -->

---

Now, packet forwarder are able to run correctly. To successfully forward data to our LoRaWAN Network Server(e.g. TTN or ChripStack), we still need to make some configurations on the server side.

To do that, we need to register the Raspberry Pi Gateway we just build to our LoRa Network Server first. Take [TTN](https://www.thethingsindustries.com/docs/getting-started/) as an example, login [TTN console](https://eu1.cloud.thethings.network/console), click `Gateways` button on the left-hand side panel and click `Register gateway`. Fill the `Gateway EUI`, `Gateway Server address` and `Frequency plan`, leave other options with the default settings.

- **Gateway EUI:** A 64 bit unique identifier for your gateway.

- **Gateway Server address:**  The URL of the cluster on which the network server deployed(`eu1.cloud.thethings.network` for example). 

- **Frequency plan:**  Configure the corresponding frequency plan based on your region. `Europe 863-870 MHz (SF9 for RX2-recommended)` for Europe, `United States 902-928 MHz, FSB 2` for US.

<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>

<br />

After successfully registering the gateway, press `CTRL + c` to stop `lora_pkt_fwd`, then edit and check the `global_conf.json.sx1250.xxxx` config file to make sure that the `"gateway_ID"` and `"server_address"` entries exactly match the settings in LNS.

```json
    ...
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
    ...
```

Restart `lora_pkt_fwd` by using the command `./lora_pkt_fwd -c global_conf.json.sx1250.xxxxx`, and you should be able to find your Raspberry Pi Gateway are conntected to TTN.

## FAQ

<details>
<summary>Why my devices can not join the network server even if all the settings are correct?</summary>

<br />

We have observed that certain modules(WM1302-US915 USB version) may fail to transmit downlink data packets properly due to difference of the hardware. To fix this issue, please modify the value of the macro `TX_JIT_DELAY` (you can find this macro in `/sx1302_hal/packet_forwarder/src/jitqueue.c`) from 40000 to 120000 and remake the sx1302_hal. 


</details>

## Sources

- [Semtech SX1302 datasheet](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## Certificates

- [WM1302(USB) CE Certificate](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE Certificate](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## Tech Support & Product Discussion

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
