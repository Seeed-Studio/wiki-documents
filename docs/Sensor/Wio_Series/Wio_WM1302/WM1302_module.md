---
title: LoRaWAN® Gateway Module WM1302
nointro:
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /WM1302_module
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) 
> LoRaWAN® is a mark used under license from the LoRa Alliance®.
The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.

:::note
        We has recently released the Wio-E5 Series based on Wio-E5 module. Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [Wio-E5 Module](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). To learn more on creating a LoRaWAN® End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN® Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).
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

### Diagram:

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>
### Pinout:

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

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

#### Step1. Mounting WM1302 Raspberry Pi Hat and install WM1302 module

It is easy to mount the Pi Hat on Raspberry Pi 40 Pin Header. Power off Raspberry Pi first, insert WM1302 module to the Pi Hat as the following picture and screw it down.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>
If USB version WM1302 module is using, please also connect its Type C port to the Raspberry Pi USB port with a Type C USB cable.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>
#### Step2. Enable the Raspbian I2C and SPI interface

WM1302 module communicates with Raspberry Pi with SPI and I2C. But these two interfaces are not enabled by default in Raspbian, so developer need to enable them before using WM1302. Here, we introduce a command line way to enable SPI and I2C interface.

First, login in Raspberry Pi via SSH or using a monitor(don't use serial console as the GPS module on the Pi Hat takes over the Pi's hardware UART pins), then type `sudo raspi-config` in command line to open Rasberry Pi Software Configuration Tool:

```
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

```
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Move to `sx1302_hal` folder and compile everything:

```
cd ~/sx1302_hal
make
```

#### Step4. Run Semtech SX1302 packet forwarder

Firstly, modify `reset pin` for SX1302 and SX1261 in `reset_lgw.sh` script, with text editor `nano`:

```
nano tools/reset_lgw.sh
```

The following code is shown at the head of text editor:

```
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Use the navigation keys to move the cursor, change `SX1302_RESET_PIN=23` to `SX1302_RESET_PIN=17` and `SX1261_RESET_PIN=22` to `SX1261_RESET_PIN=5`, as following:

```
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Save these changes by pressing `CTRL + x`, and then `y`, finally pressing `Enter` to close the text editor.

Copy `reset_lgw.sh` to `packet_forwarder` folder, then run `lora_pkt_fwd`. Please note that you should select a `global_conf.json.sx1250.xxxx` config file based on the module you are using:

```
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

Now, packet forwarder are able to run correctly. But there are still something to do if developers need to forward lora® packet to their LoRa® Server(e.g. TTN or chripstack). 

To achieve this target, developers must add the Raspberry Pi Gateway to Lora Server first. Take [TTNv3](https://www.thethingsindustries.com/docs/getting-started/) as an example, login [TTNv3 console](https://eu1.cloud.thethings.network/console), click `Go to gateways` and click `Add gateway`, in the `Add gateway` page you will find dozens of settings to fill. What you need to focus on are `Gateway EUI` and `Gateway Server address` and `Frequency plan`, the others just leave it to the default.

- `Gateway EUI`: A 64 bit extended unique identifier for your gateway, we set it to `AA555A0000000000` in this wiki

- `Gateway Server address`:  The server addresss which gateway will connect to, copy this to clipboard, developers need to save this to the config file later

- `Frequency plan`:  If using EU868 module, choose `Europe 863-870 MHz (SF9 for RX2)`, if using US915 module, choose `United States 902-928 MHz, FSB 2`
<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>
After adding gateway, back to the Raspberry Pi, press `CTRL + c` to stop `lora_pkt_fwd`, then edit the `global_conf.json.sx1250.xxxx` config file you used just now, with text editor `nano`:

```
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
nano global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
nano global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
nano global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
nano global_conf.json.sx1250.US915.USB
```

Basically, you only need to modify these parameters: `"server_address" "serv_port_up" "serv_port_down"`, which can be found at the tail of the config file. Copy `Gateway Server address` to `"server_address"`, change `"serv_port_up"` and `"serv_port_down"` to `1700`, these parameters should be edited like this: 

```
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
```

Save these changes by pressing `CTRL + x`, and then `y`, finally pressing `Enter` to close the text editor. 

Restart `lora_pkt_fwd`, you will find your Raspberry Pi Gateway are conntected to TTNv3.

```
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

## Sources

- [Semtech SX1302 datasheet](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

Certificates

- [WM1302(USB) CE Certificate](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE Certificate](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
