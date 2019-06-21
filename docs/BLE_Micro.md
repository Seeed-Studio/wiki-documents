---
name: BLE Micro
category: Wireless
bzurl: https://www.seeedstudio.com/Seeed-Micro-BLE-Module-w%26-Cortex-M0-Based-nRF51822-SoC-p-1975.html
oldwikiname:  BLE Micro
prodimagename: BLE%20Micro_03.jpg
surveyurl: https://www.research.net/r/BLE_Micro
sku:  113050012
---
![](https://github.com/SeeedDocument/BLE_Micro/raw/master/img/BLE%20Micro_03.jpg)

The BLE Mcicro is a low cost ARM cortex-m0 based module for Bluetooth® Smart designs with the nRF51822 SoC. The module gives access to at most 23 GPIO pins via pin pads and incorporates an on board PCB antenna to minimize material cost but also with a good performance.The application engineers can easily apply the module for theirs application without worrying about the specific impedance matching or soldering fine pitch related radio designing issues.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Micro-BLE-Module-w%26-Cortex-M0-Based-nRF51822-SoC-p-1975.html)

## Features
---
*   Multi-protocol 2.4GHz radio

*   32-bit ARM Cortex M0 processor

*   256kB flash/16kB RAM

*   Programmable output power from +4dBm to -20dBm

*   Flexible and configurable 23 pin GPIO

*   Wide supply voltage range (1.8 V to 3.6 V)

*   RSSI


## Specification
---
Specification|Value
--|--
Microprocessor|nRF51822 based on 32-bit ARM Cortex M0
Outline Dimension|13.0mm x 18.5mm x 2.3mm
Power supply|3.3V
On-air data rate|250 kbps, 1 Mbps or 2 Mbps
Modulation|GFSK
Output power|Programmable: +4 to -20dBm in 4dB steps
Sensitivity|-92.5dBm Bluetooth low energy /96dBm at 250kb/-90dBm at 1Mbs/-85dBm at 2Mbs
Radio current consumption LDO at 1.8V|16mA – TX at +4dBM output power/10.5mA – TX at 0dBm output power/13mA – RX at 1Mbs
Radio current consumption DC-DC at 3V|10.5mA – TX at +4dBm output power/8.1mA – TX at 0dBm output power/9.5mA – RX at 1Mbs
System current consumption|420nA – No RAM retention/530nA - 8k RAM retention/2μA – All peripherals in IDLE mode
Hardware Security|128-bit AES ECB/CCM/AAR co-processor
GPIO|23
Peripherals|10-bit ADC/Temperature sensor/RTC/RNG

## Pinout
---

Bottom view of BLE Micro:

![](https://github.com/SeeedDocument/BLE_Micro/raw/master/img/BLE_Micro_Pinout.png)

Note: the pin SWDIO is also nRESET.


## Dimension
---

![](https://github.com/SeeedDocument/BLE_Micro/raw/master/img/BLE_Micro_Dimension.jpeg)

## Over-The-Air
---
There are two batches of BLE Micro modules, one with Nordic S110 SoftDevice 6.0 and "DfuTarg" BLE device name, one with S110 SoftDevice 7.0 and "SD7DFU" BLE device name.
The BLE Micro has a pre-flashed OTA bootloader. To enter OTA mode:

1.  connect p18 of the BLE Micro to GND

2.  power on the BLE Micro

3.  a BLE device named DfuTarg (with SoftDevice 6.0) or SD7DFU (with SoftDevice 7.0) can be scaned

4.  use [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) to upgrade the BLE app

![](https://github.com/SeeedDocument/BLE_Micro/raw/master/img/Ota-ui.png)

## Download &amp; Debug through SWD interface
---
We can download and debug new application of BLE Micro with an [Arch BLE](http://www.seeedstudio.com/depot/Arch-BLE-p-1998.html) or a J-Link through SWD interface. The Arch BLE is a BLE Micro + a CMSIS DAP interface which provides features like drag-n-drop programming, debug and USB virtual serial port communication.

![](https://github.com/SeeedDocument/BLE_Micro/raw/master/img/Using_arch_ble_to_flash_ble_micro.png)

## Develop Applications
---
Go to [Seeedstudio mbed BLE project](https://github.com/Seeed-Studio/mbed_ble) (or [SoftDevice 6.0 branch](https://github.com/Seeed-Studio/mbed_ble/tree/softdevice_v6) to start developing. After you get your custom application hex file, use OTA to upgrade your BLE Micro.

If you are familiar with the Docker, there is [a Docker container](https://registry.hub.docker.com/u/skyplabs/ble-micro/) created by Paul for you to setup toolchain quickly. You can use [the Dockerfile](https://github.com/SkypLabs/ble_micro_dockerfile) to get started.

If you have an [Arch BLE](http://www.seeedstudio.com/depot/Arch-BLE-p-1998.html), you can also use [ARM mbed cloud-based IDE](https://developer.mbed.org/compiler/). See also [Arch BLE wiki](/Arch_BLE)

## BLE UART
---
By default, the BLE Micro is acted as a BLE to UART device. It can be connected to Android or iOS.

*   BLE Device Name: nRF UART

*   UART RX: p7

*   UART TX: p8

*   UART Baud: 38400

*   Android App: [nRF UART on Goole Play](https://play.google.com/store/apps/details?id=com.nordicsemi.nrfUARTv2&amp;hl=en)

*   iOS App: [nRF UART on iTunes](https://itunes.apple.com/us/app/nrf-uart/id614594903?mt=8)

## Resources
---
*   [Schematic pdf](https://github.com/SeeedDocument/BLE_Micro/raw/master/res/BLE_Micro.pdf)

*   [Eagle file](https://github.com/SeeedDocument/BLE_Micro/raw/master/res/BLE_Micro_v1.0.zip)

*   [Eagle Library](https://github.com/SeeedDocument/BLE_Micro/raw/master/res/BLE_Micro_Eagle_Library.zip)

*   [Firmware](https://github.com/SeeedDocument/BLE_Micro/raw/master/res/Ble_micro_firmware.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>