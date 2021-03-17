![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png)

<p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

LoRa-E5 mini is a compacted-sized development board suitable for the rapid testing and building of small-size prototyping and helps you design your ideal LoRaWAN wireless IoT device with a long-distance transmission range. 

LoRa-E5 mini is embedded with [LoRa-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), which delivers the world-first combo of LoRa RF and MCU chip into one single tiny chip and is FCC and CE certified. It is powered by ARM Cortex-M4 core and Semtech SX126X LoRa chip and supports LoRaWAN protocol on the worldwide frequency and (G)FSK, BPSK, (G)MSK, and LoRa modulations. 

Learn more about [LoRa-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) here.

More comparison between the LoRa-E5 and LoRa RFM95 chip:

![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)

LoRa-E5 mini leads out all GPIOs of LoRa-E5, including UART, ADC, SPI, IIC, and etc. It contains RESET and BOOT buttons and is use-friendly. Supporting LoRaWAN protocol, LoRa-E5 mini features ultra-long-range transmission and ultra-low power consumption: it is able to achieve a transmission range of up to 10 km, and the sleep current of LoRa-E5 modules on board is as low as 2.1 uA(WOR mode). It is designed with industrial standards with a wide working temperature at -40 ℃ ~ 85℃, high sensitivity between -116.5dBm ~ -136 dBm, and RF output power up to +20.8 dBm at 3.3V.
 
Other than the LoRa-E5 mini, we also provide other choices including the LoRa-E5 Development Board carrying more complex interfaces and features to unlock the more powerful performance of the LoRa-E5 module.  It provides a broader range of access protocols and superabundant types of interfaces. Thus you are able to test and prototype the module rapidly with RS-485, Grove interfaces, and rich GPIOs.  (Learn more about LoRa-E5 Development Board)
 
Since LoRa-E5 is a LoRaWAN chip with an MCU, there are three main ways to utilize the LoRa-E5 mini:
 
**1. Connect LoRa-E5 mini to PC and control by AT commands**

There is a built-in USB to UART function on board, you could connect the LoRa-E5 mini to your PC with a USB type C cable, and use serial communication software to send AT commands and read data from the board.

**2. Connect LoRa-E5 mini to another mainboard via UART and control by AT commands**

For example, connect LoRa-E5 mini to Seeeduino XIAO and the Expansion Board via UART, and send AT commands and read data from Seeeduino XIAO through Arduino IDE serial monitor.

**3. User Application Development by using SDK**

Develop your own LoRa development board with MCU function by using STM32Cube Programmer, which is the SDK officially provided by STMicroelectronics. To download this SDK resource, please find the resources in learning and document down below.

With all the outstanding features listed above, the LoRa-E5 mini will be a superior choice for IoT device development, testing, prototyping, and applications in long-distance, ultra-low power consumption IoT scenarios like smart agriculture, smart office, and smart industry.

If you are unfamiliar with LoRa and LoRaWAN technology, please check out this blog [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) in detail.


## Features

- Full GPIOs led out from the Lora-E5 STM32WLE5JC

- Global LoRaWAN® and LoRa frequency plan supported

- Long-distance transmission range to 10km (ideal value in open area)

- Mini and compact size, suitable for rapid testing and building small size prototype

- Convenient RESET and BOOT buttons on board

## Harware Overview 

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4041615358935_.pic_hd.jpg)

![](https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg)



## Specification


<style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-6cwf{background-color:#c0c0c0;border-color:#efefef;color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-g9rn{background-color:#ffffff;border-color:#efefef;color:#343434;text-align:left;vertical-align:top}
--></style>
<table class="tg">
<thead>
<tr><th class="tg-6cwf">Parameters</th><th class="tg-6cwf">Specifications</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">size</td>
<td class="tg-g9rn">50*23mm</td>
</tr>
<tr>
<td class="tg-g9rn">voltage - supply</td>
<td class="tg-g9rn">3.7V - 5V</td>
</tr>
<tr>
<td class="tg-g9rn">power - output</td>
<td class="tg-g9rn">up to +20.8 dBm at 3.3V</td>
</tr>
<tr>
<td class="tg-g9rn">working frequency</td>
<td class="tg-g9rn">868/915MHz</td>
</tr>
<tr>
<td class="tg-g9rn">protocol</td>
<td class="tg-g9rn">LoRaWAN</td>
</tr>
<tr>
<td class="tg-g9rn">sensitivity</td>
<td class="tg-g9rn">-116.5 dBm ~ -136 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / 2P-2.54mm Hole / 1*12P-2.54mm Header*2 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">modulation</td>
<td class="tg-g9rn">LoRa, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">working temperature</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">current</td>
<td class="tg-g9rn">LoRa-E5 module sleep current as low as 2.1uA (WOR mode)</td>
</tr>
</tbody>
</table>
<div></div>
<div></div>
<div></div>
<style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}
--></style>
<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">Part List:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">LoRa-E5 mini *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Antenna(EU868/US915) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Sticker *1 </td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">1X12pin male pin headers *2</td>
</tr>
</tbody>
</table>


## Application

- LoRa-E5 module Easy testing
- Rapid small-dimension prototyping of LoRa devices with LoRa-E5
- Any long-distance wireless communication application development
- LoRa and LoRaWAN application learn and research


![](https://files.seeedstudio.com/products/317990687/image/application.png)

## Application Notes


**1. Factroy AT Firmare**

LoRa-E5 series has a built-in AT command firmware, which supports LoRaWAN Class A/B/C protocol and a wide frequency plan: EU868/US915/AU915/AS923/KR920/IN865. With this AT command firmware, developers can easily and quickly build their prototype or application.

The AT command firmware contains a bootloader for DFU and the AT application. The "PB13/SPI_SCK/BOOT" pin is used to control LoRa-E5 to stay in the bootloader or jump to the AT application. When PB13 is HIGH, the module will jump to AT application after reset, with a default baud rate of 9600. When PB13 is LOW (press the "Boot" button on LoRa-E5 Dev Board or LoRa-E5 mini), the module will stay in the bootloader, and keep transmitting "C" character every 1S at baud rate 115200.

!!!Attention
        - Factory AT Firmware is programmed with RDP(Read Protection) Level 1, developers need to remove RDP first with STM32Cube Programmer. Note that regression RDP to level 0 will cause a flash memory mass to erase and the Factory AT Firmware can't be restored again.
        - The "PB13/SPI_SCK/BOOT" pin on the LoRa-E5 module is just a normal GPIO, not the "BOOT0" pin of the MCU. This "PB13/SPI_SCK/BOOT" pin is used in the bootloader of the Factory AT firmware, to decide to jump to APP or stay in bootloader(for DFU). The real "BOOT0" pin doesn't pinout to the module, so users need to be careful when developing the low-power applications.


**2. Clock Configuration**

2.1 HSE 

- 32MHz TCXO

- TCXO power supply: PB0-VDD_TCXO

2.2 LSE

- 32.768KHz crystal oscillator

**3. RF Switch**

**LoRa-E5 module ONLY transmits through RFO_HP:**

- Receive: PA4=1, PB5=0

- Transmit(high output power, SMPS mode): PA4=0, PB5=1




## Getting Started

### 1. Quick start of AT Commands

#### 1.1 Preparation

- **Step 1.** Connect LoRa-E5 mini to PC via a Type-C cable

- **Step 2.** Open a serial tool(eg. Arudino Serial Monitor), select the right COM port, set baudrate to 9600 and select Both NL & CR

- **Step 3.** Try to send "AT" and you will see the response.

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png)

#### 1.2 Basic AT Commands

- AT+ID // Read all, DevAddr(ABP), DevEui(OTAA), AppEui(OTAA)

- AT+ID=DevAddr // Read DevAddr

- AT+ID=DevEui // Read DevEui

- AT+ID=AppEui // Read AppEui

- AT+ID=DevAddr,"devaddr" // Set new DevAddr

- AT+ID=DevEui,"deveui" // Set new DevEui

- AT+ID=AppEui,"appeui" // Set new AppEui

- AT+KEY=APPKEY,"16 bytes length key" // Change application session key

- AT+DR=band // Change the Band Plans

- AT+DR=SCHEME // Check current band

- AT+CH=NUM, 0-7 // Enable channel 0~7

- AT+MODE="mode" // Select work mode: LWOTAA, LWABP or TEST

- AT+JOIN // Send JOIN request

- AT+MSG="Data to send" // Use to send string format frame which is no need to be confirmed by the server

- AT+CMSG="Data to send" // Use to send string format frame which must be confirmed by the server

- AT+MSGHEX="xx xx xx xx" // Use to send hex format frame which is no need to be confirmed by the server

- AT+CMSGHEX="xx xx xx xx" // Use to send hex format frame which must be confirmed by the server

#### 1.3 Connect and send Data to TTN

- Step 1: Load into TTN website: https://www.thethingsnetwork.org and create your account, then access "Console" and first click on "APPLICATIONS"

![](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

- Step 2: Add an Application

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/2.png)

- Step3: Copy the `APPLICATION EUIS` and click "register device" button to add your device to TTN

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/1.png)

- Step4: Send AT command `AT+ID=DevEu`i to get your Device EUI, send AT command `AT+KEY=APPKEY,"11223344556677889900112233445566"` to set the App Key, and send AT command `AT+ID=AppEui,"APPLICATION EUIS you copy just now"` to set the App EUI, finally fill all these EUIs and Key to the page to register your device
```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:16:1D
Tx: AT+KEY=APPKEY,"11223344556677889900112233445566"
Rx: +KEY: APPKEY 11223344556677889900112233445566
Tx: AT+ID=AppEui,"70B3D57ED003F06A"
Rx: +ID: AppEui, 70:B3:D5:7E:D0:03:F0:6A
```
![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/3.png)

- Step 5: Register your LoRaWAN Gateway on TTN Console,
please refer to the instruction shown in [The Things Indoor Gateway wiki page: The Things Indoor Gateway Get Started with SenseCAP](https://wiki.seeedstudio.com/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

- Step 6: Type the following AT Commmand to connect to TTN

```
Tx: AT+ID
Rx: +ID: DevAddr, 24:90:16:1D
+ID: DevEui, 2C:F7:F1:20:24:90:16:1D
+ID: AppEui, 70:B3:D5:7E:D0:03:F0:6A

Tx: AT+DR=EU868
Rx: +DR: EU868

Tx: AT+CH=NUM,0-2
Rx: +CH: NUM, 0-2

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

If you see `+JOIN: Network joined` in your serial console, congratulations, your device have already connect to TTN! You can also check your device status at the "overview" page.

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/5.jpg)

- Step 7: Type the following AT Command to send data to TTN

```
// send string "HELLO" to TTN 
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// send hex "00 11 22 33 44" 
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/6.jpg)

- Step 8: For more information about AT Commands, please refer to [LoRa-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### 2. Develop with STM32Cube MCU Package

#### 2.1 Erase Factory AT Firmware

LoRa-E5 has a built-in AT command firmware, which supports LoRaWAN Class A/B/C protocol and wide frequency plan: EU868/US915/AU915/AS923/KR920/IN865. With this AT commond firmware, developers can easily and quickly build their prototype or application.

But for those uesr who perfer to directly develop applications on LoRa-E5 module, with STM32Cube MCU packege for STM32WL series, there are several areas to pay attention to:

- Read Protection is needed to remove first, after you connect the MCU via SWD. STM32Cube Programmer is the recommended tool  to do this.

- Once the factory AT firmware is erased, it can't be flashed to the MCU again

- The "PB13/SPI_SCK/BOOT" pin on the LoRa-E5 module is just a normal GPIO, not the "BOOT0" pin of the MCU. This "PB13/SPI_SCK/BOOT" pin is used in the bootloader of the Fatory AT firmware, to decide to jump to APP or stay in bootloader(for DFU). The real "BOOT0" pin doesn't pinout to the module, so users need to be careful when develop low power application.

#### 2.2 Hardware

- Clock Configuration:
  - HSE
    - 32MHz TCXO
    - TCXO power supply: PB0-VDD_TCXO
  - LSE
    - 32.768KHz crystal oscillator
  -  RF Switch 
    - Receive: PA4=1, PB5=0
    - Transmit(high output power, SMPS mode): PA4=0, PB5=1

More demos coming soon...

## Resources

LoRa-E5 mini Datasheet:

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">LoRa-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">LoRa-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">LoRa-E5 mini v1.0.sch</a></p>

LoRa-E5 Datasheet: 

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">LoRa-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">LoRa-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

LoRa-E5 Certifications:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">LoRa-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">LoRa-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">LoRa-E5-HF FCC Certification -DTS</a></p>

Relevant SDK: 

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32Cube MCU Package for STM32WL series</a></p>



## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>