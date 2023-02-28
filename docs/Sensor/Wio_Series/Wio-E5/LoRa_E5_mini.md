---
title: Wio-E5 mini
nointro:
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /LoRa_E5_mini
last_update:
  date: 01/30/2023
  author: hushuxu
---
<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html) 

> LoRaWAN® is a mark used under license from the LoRa Alliance®.
The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.

Wio-E5 mini is a compacted-sized development board suitable for the rapid testing and building of small-size prototyping and helps you design your ideal LoRaWAN® wireless IoT device with a long-distance transmission range. 

Wio-E5 mini is embedded with [Wio-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), which delivers the world-first combo of LoRa® RF and MCU chip into one single tiny chip and is FCC and CE certified. It is powered by ARM Cortex-M4 core and Semtech SX126X LoRa® chip and supports LoRaWAN® protocol on the worldwide frequency and (G)FSK, BPSK, (G)MSK, and LoRa® modulations. 

Learn more about [Wio-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) here.

More comparison between the Wio-E5 and LoRa® RFM95 chip:

<!-- ![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png" alt="pir" width={600} height="auto" /></p>

Wio-E5 mini leads out all GPIOs of Wio-E5, including UART, ADC, SPI, IIC, and etc. It contains RESET and BOOT buttons and is use-friendly. Supporting LoRaWAN® protocol, Wio-E5 mini features ultra-long-range transmission and ultra-low power consumption: it is able to achieve a transmission range of up to 10 km, and the sleep current of Wio-E5 modules on board is as low as 2.1 uA(WOR mode). It is designed with industrial standards with a wide working temperature at -40 ℃ ~ 85℃, high sensitivity between -116.5dBm ~ -136 dBm, and RF output power up to +20.8 dBm at 3.3V.

Other than the Wio-E5 mini, we also provide other choices including the Wio-E5 Development Board carrying more complex interfaces and features to unlock the more powerful performance of the Wio-E5 module.  It provides a broader range of access protocols and superabundant types of interfaces. Thus you are able to test and prototype the module rapidly with RS-485, Grove interfaces, and rich GPIOs.  (Learn more about Wio-E5 Development Board)
 
Since Wio-E5 is a LoRaWAN® chip with an MCU, there are three main ways to utilize the Wio-E5 mini:
 
**1. Connect Wio-E5 mini to PC and control by AT commands**

There is a built-in USB to UART function on board, you could connect the Wio-E5 mini to your PC with a USB type C cable, and use serial communication software to send AT commands and read data from the board.

**2. Connect Wio-E5 mini to another mainboard via UART and control by AT commands**

For example, connect Wio-E5 mini to Seeeduino XIAO and the Expansion Board via UART, and send AT commands and read data from Seeeduino XIAO through Arduino IDE serial monitor.

**3. User Application Development by using SDK**

Develop your own LoRa® development board with MCU function by using STM32Cube Programmer, which is the SDK officially provided by STMicroelectronics. To download this SDK resource, please find the resources in learning and document down below.

With all the outstanding features listed above, the Wio-E5 mini will be a superior choice for IoT device development, testing, prototyping, and applications in long-distance, ultra-low power consumption IoT scenarios like smart agriculture, smart office, and smart industry.

If you are unfamiliar with LoRa® and LoRaWAN® technology, please check out this blog [LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) in detail.


## Features

- Full GPIOs led out from the Wio-E5 STM32WLE5JC

- Global LoRaWAN® and LoRa® frequency plan supported

- Long-distance transmission range to 10km (ideal value in open area)

- Mini and compact size, suitable for rapid testing and building small size prototype

- Convenient RESET and BOOT buttons on board

## Hardware Overview 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4041615358935_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>


## Specifications



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
<td class="tg-g9rn">LoRaWAN®</td>
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
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">working temperature</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">current</td>
<td class="tg-g9rn">Wio-E5 module sleep current as low as 2.1uA (WOR mode)</td>
</tr>
</tbody>
</table>
<div></div>
<div></div>
<div></div>


<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">Part List:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 mini *1</td>
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

 
## Applications
- Wio-E5 module Easy testing
- Rapid small-dimension prototyping of LoRa® devices with Wio-E5
- Any long-distance wireless communication application development
- LoRa® and LoRaWAN® application learn and research


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## Application Notes
**1. Factory AT Firmare**

wio-E5 series has a built-in AT command firmware, which supports LoRaWAN® Class A/B/C protocol and a wide frequency plan: EU868/US915/AU915/AS923/KR920/IN865. With this AT command firmware, developers can easily and quickly build their prototype or application.

The AT command firmware contains a bootloader for DFU and the AT application. The "PB13/SPI_SCK/BOOT" pin is used to control Wio-E5 to stay in the bootloader or jump to the AT application. When PB13 is HIGH, the module will jump to AT application after reset, with a default baud rate of 9600. When PB13 is LOW (press the "Boot" button on Wio-E5 mini), the module will stay in the bootloader, and keep transmitting "C" character every 1S at baud rate 115200.

:::tip
        - Factory AT Firmware is programmed with RDP(Read Protection) Level 1, developers need to remove RDP first with STM32Cube Programmer. Note that regression RDP to level 0 will cause a flash memory mass to erase and the Factory AT Firmware can't be restored again.
        - The "PB13/SPI_SCK/BOOT" pin on the Wio-E5 module is just a normal GPIO, not the "BOOT0" pin of the MCU. This "PB13/SPI_SCK/BOOT" pin is used in the bootloader of the Factory AT firmware, to decide to jump to APP or stay in bootloader(for DFU). The real "BOOT0" pin doesn't pinout to the module, so users need to be careful when developing the low-power applications
:::

**2. Clock Configuration**

2.1 HSE 

- 32MHz TCXO

- TCXO power supply: PB0-VDD_TCXO

2.2 LSE

- 32.768KHz crystal oscillator

**3. RF Switch**

**Wio-E5 module ONLY transmits through RFO_HP:**

- Receive: PA4=1, PA5=0

- Transmit(high output power, SMPS mode): PA4=0, PA5=1

## Getting Started

###  Quick start of AT Commands

#### Preparation

- **Step 1.** Connect Wio-E5 mini to PC via a Type-C cable

- **Step 2.** Open a serial tool(eg. Arudino Serial Monitor), select the right COM port, set baudrate to 9600 and select Both NL & CR

- **Step 3.** Try to send "AT" and you will see the response.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### Basic AT Commands

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

#### Connect and send data to The Things Network

- **Step 1.** Visit [The Things Network](https://www.thethingsnetwork.org) website and sign up for a new account

- **Step 2.** After logging in, click your profile and select **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>
- **Step 3.** Select a cluster to start adding devices and gateways

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>
- **Step 4.** Click **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>
- **Step 5.** Click **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>
- **Step 6.** Fill **Application ID** and click **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>
**Note:** Here **Application name** and **Description** are not compulsory fields. If **Application name** is left blank, it will use the same name as **Application ID** by default

The following is the newly created application


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>
- **Step 7.** Click **+ Add end device**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>
- **Step 8.** Click **Manually**, to enter the registration credentials manually


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>
- **Step 9.** Select the **Frequency plan** according to your region. Also make sure you use the same frequency as the gateway in which you will connect this device to. Select **MAC V1.0.2** as the **LoRaWAN® version** and **PHY V1.0.2 REV B** as the **Regional Parameters version**. These settings are according to the LoraWAN® stack of Wio-E5.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>
- **Step 10.** While the Wio-E5 module is still accessible over the serial console, send the following AT commands on the serial monitor:


    - `AT+ID=DevEui` to get your Device EUI
    - `AT+ID=AppEui`, to get your App EUI
    - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` to set the App Key 

The output will be as follows:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **Step 11.** Copy and paste the above information into **DevEUI**, **AppEUI** and **AppKey** fields. **End device ID** field will be automatically filled when we fill **DevEUI**. Finally click **Register end device**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>
- **Step 12.** Register your LoRaWAN® Gateway with TTN Console. Please refer to the instructions shown [here](https://wiki.seeedstudio.com/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

- **Step 13.** Type the following AT commmands to connect to TTN

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

The output on serial monitor will be as follows:

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

If you see **+JOIN: Network joined** on your serial console, that means your device has successfully connected to TTN! 

You can also check your device status on the **End devices** page


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>
- **Step 14.** Type the following AT commands to send data to TTN

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

For more information about AT Commands, please refer to [LoRa-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Develop with STM32Cube MCU Package

This section is for Wio-E5 mini, aiming at building several applications with STM32Cube MCU Package for STM32WL series(SDK).

**Note:** We have now updated the library to support v1.1.0 which is the latest version of STM32Cube MCU Package for STM32WL series.

:::note
       Please read [Erase Factory AT Firmware](https://wiki.seeedstudio.com/LoRa_E5_mini/#21-erase-factory-at-firmware) section first, as if we need to erase the Factory AT Firmware before we program with SDK. After erasing the Factory AT Firmware it CANNOT be recovered.
:::
#### Preparations

Software:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): for compilation and debugging

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): for programming STM32 devices

Hardware:

- LoRaWAN® Gateway connected to LoRaWAN® Network Server (e.g. TTN)

- A USB Type-C cable and a ST-LINK. Connect the Type-C cable to the Type-C port of the board for power and serial communication. Connect the ST-LINK to the SWD pins as follows 

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO Configuration Overview

- As the hardware design of Wio-E5 series is a bit different with NUCLEO-WL55JC, the official STM32WL55JC development board from ST, developers need to reconfigure some gpios, to adapt the SDK example to Wio-E5 series. We have already reconfigured GPIOs, but we think it is nessary to point out the difference.

|SDK Example Label|GPIO of NUCLEO-WL55JC|GPIO of Wio-E5 mini|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Boot Button)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|DBG1|PB12|PA0 (D0 Button)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|


### Applications

Now we will explore several applications for Wio-E5 mini with STM32Cube MCU Package for STM32WL series(SDK).

#### LoRaWAN® End Node

This application will connect Wio-E5 mini with TTN (The Things Network) and send data after connecting with a LoRaWAN® gateway.

- **Step 1.** Click [here](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) to visit **Seeed-Studio/LoRaWan-E5-Node** repository and download it as a ZIP file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>
- **Step 2.** Extract the ZIP file and navigate to `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **Step 3.** Double click the **.project** file

- **Step 4.** Right click on the project and click **Properties**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>
- **Step 5.** Navigate to `C/C++ Build > Settings > MCU Post build outputs`, tick **Convert to Intel Hex file (-O ihex)** and click **Apply and Close**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>
- **Step 6.** Click **Build 'Debug'**, and it should compile without any errors

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>
Now we will modify our **Device EUI**, **Application EUI**, **Application KEY** and **LoRawan® Region**

- **Step 7.** Please follow the [guide](https://wiki.seeedstudio.com/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) here to setup your TTN application, get your **Application EUI** and copy it to the macro definition `LORAWAN_JOIN_EUI` in `LoRaWAN/App/se-identity.h` , for example, the Application EUI here is `80 00 00 00 00 00 00 0x07` :

```C
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **Step 8.** Also, you can modify your **Device EUI** and **Application Key**, by setting the macro definition `LORAWAN_DEVICE_EUI` and `LORAWAN_NWK_KEY` in `LoRaWAN/App/se-identity.h`. Make sure `LORAWAN_DEVICE_EUI` and `LORAWAN_NWK_KEY` are the same as the `Device EUI` and `App Key` in TTN console.

```C
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>
- **Step 9.** The default LoRaWAN Region is `EU868`, you can modify it, by setting the macro definition `ACTIVE_REGION` in `LoRaWAN/App/lora_app.h`

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>
- **Step 10.** After the above modifications, **rebuild** the example and program to your Wio-E5. Open `STM32CubeProgrammer`, connect ST-LINK to your PC, hold `RESET Button` of your Device, then click `Connect` and release `RESET Button`:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>
- **Step 11.** Make sure the Read Out Protection is `AA`, if it is shown as `BB`, select `AA` and click `Apply`:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>
- **Step 12.** Now, go to the `Erasing & Programming` page, select your hex file path(for example: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex` ), select the programming options as the following picture, then click `Start Programming`! 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
You will see the message **Download verified successfully**, once programming is finished.

- **Step 13.** If your LoRaWAN® Gateway and TTN are setup, Wio-E5 will join successfully after reset! A confirm LoRaWAN® package will be sent to TTN every 30 seconds. The following log will be printed on the serial monitor (Arduino Serial Monitor is used here) if the join is successful:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>
- Cheers! Now you have connected Wio-E5 to LoRaWAN® Network! You can now proceed to develop more exciting LoRaWAN® End Node applications!

**Note:** Wio-E5 only supports high power output mode, so you can't use these macro definitions in `radio_board_if.h` :

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Eventhough **RBI_CONF_RFO** is defined as **RBI_CONF_RFO_LP_HP** in `radio_board_if.h`, it will not be used because **USE_BSP_DRIVER** is defined and **BSP_RADIO_GetTxConfig()** function returns **RADIO_CONF_RFO_HP**

#### FreeRTOS LoRaWAN®

This application will also connect Wio-E5 mini with TTN (The Things Network) and send data after connecting with a LoRaWAN® gateway. The difference between previous LoRaWAN® End Node application and this FreeRTOS LoRaWAN® application is that, the previous one runs on bare metal whereas this runs under FreeRTOS.

- **Step 1.** Click [here](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) to visit **Seeed-Studio/LoRaWan-E5-Node** repository and download it as a ZIP file


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>
- **Step 2.** Extract the ZIP file and navigate to `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Step 3.** Double click the **.project** file

- **Step 4.** Refer to **step 4 - step 13** from the previous **LoRaWAN® End Node** application to connect Wio-E5 mini with TTN!  

#### FreeRTOS LoRaWAN® AT

This application will also connect Wio-E5 mini with TTN (The Things Network) and send data after connecting with a LoRaWAN® gateway. The difference between previous FreeRTOS LoRaWAN application and this application is that, you can use AT commands.

- **Step 1.** Click [here](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) to visit **Seeed-Studio/LoRaWan-E5-Node** repository and download it as a ZIP file


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>
- **Step 2.** Extract the ZIP file and navigate to `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Step 3.** Double click the **.project** file

- **Step 4.** Refer to **step 4 - step 12** from the previous **LoRaWAN End Node** application

- **Step 5.** Open a serial monitor such as **Arduino Serial Monitor** and you will see the following output


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>
- **Step 6.** Type **AT?** and press **ENTER** to view all the available AT commands


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>
- **Step 7.** If you still want to change **Device EUI**, **Application EUI**, **Application KEY** and **LoRawan® Region**, you can change using AT commands. However, these parameters are already set in **se-identity.h** and **lora_app.h** in this example

- **Step 8.** Type **AT+JOIN=1** and you will see the following output once the join is successful!


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>
**Note:** Here **AT+JOIN=(Mode)** format should be used. **Mode** corresponds to either **0 for ABP** or **1 for OTAA**

#### FreeRTOS LowPower

This application will enable low-power mode on Wio-E5 mini. Once the application is flashed, the board will consume power as normal for 2 seconds and enter low-power mode for 2 seconds and so on. 

- **Step 1.** Click [here](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) to visit **Seeed-Studio/LoRaWan-E5-Node** repository and download it as a ZIP file


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>
- **Step 2.** Extract the ZIP file and navigate to `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **Step 3.** Double click the **.project** file

- **Step 4.** Right click on the project and click **Properties**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>
- **Step 5.** Navigate to `C/C++ Build > Settings > MCU Post build outputs`, tick **Convert to Intel Hex file (-O ihex)** and click **Apply and Close**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>
- **Step 6.** Click **Build 'Debug'**, and it should compile without any errors


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>
- **Step 7.** Open `STM32CubeProgrammer`, connect ST-LINK to your PC, hold `RESET Button` of your Device, then click `Connect` and release `RESET Button`:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>
- **Step 8.** Make sure the Read Out Protection is `AA`, if it is shown as `BB`, select `AA` and click `Apply`:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>
- **Step 9.** Now, go to the `Erasing & Programming` page, select your hex file path(for example: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex` ), select the programming options as the following picture, then click `Start Programming`! 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
You will see the message **Download verified successfully**, once programming is finished.

- **Step 10.** Connect the Wio-E5 mini to a PC by attaching a power meter. You will notice the red LED on the board blinks every second and the board switches between normal and low power states (The current on the power meter comes down for 1 second for lower power state and comes back up for 1 second for normal working state)


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>
#### Low Power

This application will also enable low-power mode on Wio-E5 mini. The difference between previous FreeRTOS LowPower application and this Low Power application is that, the previous one runs under FreeRTOS whereas this runs on bare metal.

- **Step 1.** Click [here](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) to visit **Seeed-Studio/LoRaWan-E5-Node** repository and download it as a ZIP file


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>
- **Step 2.** Extract the ZIP file and navigate to `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Step 3.** Double click the **.project** file

- **Step 4.** Refer to **step 4 - step 10** from the previous **FreeRTOS LowPower** application and you will see the same output at the end on the power meter!

## Resources

Wio-E5 mini Datasheet:

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Wio-E5 Datasheet: 

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

Wio-E5 Certifications:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC Certification -DTS</a></p>

Relevant SDK: 

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32Cube MCU Package for STM32WL series</a></p>



## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
