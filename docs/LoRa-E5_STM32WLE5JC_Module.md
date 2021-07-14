![LORA E5](https://files.seeedstudio.com/products/317990687/image/lora-e5_Preview-07.png)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)

## Product Introduction

!!!Notes
        We has recently released the LoRa-E5 Series based on LoRa-E5 module. Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). To learn more on creating a LoRaWAN End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).

LoRa-E5 is a low-cost, ultra-low power, extremely compact, and high-performance LoRaWAN Module designed by Seeed Technology Co., Ltd. **It contains ST system-level package chip STM32WLE5JC, which is the world first SoC integrated with the combo of LoRa RF and MCU chip.** This module is also embedded with ARM Cortex M4 ultra-low-power MCU and LoRa SX126X, and therefore supports (G)FSK mode and LoRa. 62.5kHz, 125kHz, 250kHz, and 500kHz bandwidth can be used in LoRa® mode, making it suitable for the design of various IoT nodes, supporting EU868 and US915.

This LoRa E5 module is designed with industrial standards, hence it's highly suitable to be used in designing industrial IoT products, with a wide working temperature at -40℃ ~ 85℃.

If you are not quite familiar with LoRa and LoRaWAN, check out this article [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) for detail. 

![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)


![SIZE COMPARE](https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg)
*(extremely compacted size, smaller than 1 euro coin)*

## Features

* **Ultra-low Power Consumption**: as low as 2.1uA sleep current (WOR mode)

* **Extremely Compacted Size**: 12mm * 12mm * 2.5mm 28 pins SMT

* **High Performance**: TXOP=22dBm@868/915MHz; -136.5dBm sensitivity for SF12 with 125KHz BW

* **Long Distance Use**: 158dB link budget

* **Wireless Connectivity**: Embedded LoRaWAN® protocol, AT command, support global LoRaWAN® frequency plan

* **Worldwide Compatibility**: wide frequency range; EU868 / US915 / AU915 / AS923 / KR920 / IN865

* **Great Flexibility**: For users who want to develop software on the MCU of the module, other GPIOs of the MCU can be easily manipulated, including UART, I2C, ADC, etc. These rich GPIO interfaces are useful for users who need to expand peripherals.

* **FCC and CE Certified**

## Applications

* Works for LoRaWAN sensor nodes and any wireless communication application.

![applications](https://files.seeedstudio.com/products/317990687/image/application.png)


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

- Receive: PA4=1, PA5=0

- Transmit(high output power, SMPS mode): PA4=0, PA5=1


## Hardware Pinout

![](https://files.seeedstudio.com/products/317990687/image/pin.jpg)

![](https://files.seeedstudio.com/products/317990687/image/pinout.png)

## Specifications
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-2fdn{border-color:#9b9b9b;text-align:left;vertical-align:top}
.tg .tg-e2cz{background-color:#9b9b9b;border-color:#9b9b9b;color:#ffffff;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-e2cz">ITEMs</th>
    <th class="tg-e2cz">Parameter</th>
    <th class="tg-e2cz" colspan="4">Specifications</th>
    <th class="tg-e2cz">Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-2fdn" rowspan="2">Structure</td>
    <td class="tg-2fdn">Size</td>
    <td class="tg-2fdn" colspan="4">12(W)*12(L)*2.5(H)</td>
    <td class="tg-2fdn">mm</td>
  </tr>
  <tr>
    <td class="tg-2fdn">Package</td>
    <td class="tg-2fdn" colspan="4">28 pins, SMT</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="18">Electrical Characteristics</td>
    <td class="tg-2fdn">power supply</td>
    <td class="tg-2fdn" colspan="4">3.3V type</td>
    <td class="tg-2fdn">V</td>
  </tr>
  <tr>
    <td class="tg-2fdn">sleep current</td>
    <td class="tg-2fdn" colspan="4">2.1uA(WDT on)</td>
    <td class="tg-2fdn">uA</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="3">Operation current (Transmitter+MCU)</td>
    <td class="tg-2fdn" colspan="4">50mA @10dBm in 434MHz type</td>
    <td class="tg-2fdn" rowspan="3">mA</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">111mA @22dBm in 470MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">111mA @22dBm in 868MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="3">Operation current (Receiver+MCU)</td>
    <td class="tg-2fdn" colspan="4">6.7mA @BW125kHz, 868MHz type</td>
    <td class="tg-2fdn" rowspan="3">mA</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">6.7mA @BW125kHz, 434MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">6.7mA @BW125kHz, 470MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="3">Output power</td>
    <td class="tg-2fdn" colspan="4">10dBm max @434MHz</td>
    <td class="tg-2fdn" rowspan="3">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4">22dBm max @470MHz</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4">22dBm max @868MHz</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="5">Sensitivity</td>
    <td class="tg-2fdn" colspan="4">@SF12, BW125kHz</td>
    <td class="tg-2fdn" rowspan="5">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn">Fr(MHz)</td>
    <td class="tg-2fdn">min</td>
    <td class="tg-2fdn">type</td>
    <td class="tg-2fdn">max</td>
  </tr>
  <tr>
    <td class="tg-2fdn">434</td>
    <td class="tg-2fdn">-</td>
    <td class="tg-2fdn">-134.5</td>
    <td class="tg-2fdn">-136</td>
  </tr>
  <tr>
    <td class="tg-2fdn">470</td>
    <td class="tg-2fdn">-</td>
    <td class="tg-2fdn">-136.5</td>
    <td class="tg-2fdn">-137.5</td>
  </tr>
  <tr>
    <td class="tg-2fdn">868</td>
    <td class="tg-2fdn">-</td>
    <td class="tg-2fdn">-135</td>
    <td class="tg-2fdn">-137</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="2">Harmonics</td>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">&lt; -36dBm below 1GHz</span></td>
    <td class="tg-2fdn">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">&lt; -40dBm above 1GHz</span></td>
    <td class="tg-2fdn">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="6">Interface </td>
    <td class="tg-2fdn">RFIO</td>
    <td class="tg-2fdn" colspan="4">RF port</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">UART</td>
    <td class="tg-2fdn" colspan="4">3 group of UART, include 2 pins</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">I2C</td>
    <td class="tg-2fdn" colspan="4">1 group of I2C, include 2 pins</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">ADC</td>
    <td class="tg-2fdn" colspan="4">1 ADC Input, include 1 pins, 12-bit 1Msps</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">NRST</td>
    <td class="tg-2fdn" colspan="4">Manual reset pin input</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">SPI</td>
    <td class="tg-2fdn" colspan="4">1 group of SPI, include 4 pins</td>
    <td class="tg-2fdn"></td>
  </tr>
</tbody>
</table>


## Sources

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">LoRa-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">LoRa-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

Certifications:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">LoRa-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">LoRa-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">LoRa-E5-HF FCC Certification -DTS</a></p>

Library: 

- [LoRa-E5 kicad library](https://files.seeedstudio.com/products/317990687/res/LoRa-E5_kicad_Library.zip)

- [LoRa-E5 HF 3D File](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF_3D_File.stp)

- [LoRa-E5 Eagle Library](https://files.seeedstudio.com/products/317990687/res/LORA_E5_Eagle_Library.lbr)

Relevant SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32Cube MCU Package for STM32WL series</a></p>
<div id="gtx-trans" style="position: absolute; left: -36px; top: 48.875px;">
<div class="gtx-trans-icon"></div>
</div>

## Getting Started

### 1. Quick start of AT Commands

#### 1.1 Preparation

- **Step 1.** Connect LoRa-E5 Development Board to PC via a Type-C cable

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

- Step4: Send AT command `AT+ID=DevEui` to get your Device EUI, send AT command `AT+KEY=APPKEY,"11223344556677889900112233445566"` to set the App Key, and send AT command `AT+ID=AppEui,"APPLICATION EUIS you copy just now"` to set the App EUI, finally fill all these EUIs and Key to the page to register your device
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

// If you are using US915 FSB2
// Tx: AT+DR=US915
// Rx: +DR: US915
// Tx: AT+CH=NUM,8-15
// Rx: +CH: NUM, 8-15

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

This section is for LoRa-E5 Mini or LoRa-E5 Dev Board, aiming at creating a LoRaWAN End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and send data to LoRaWAN Network.

!!!Attention
       Please read [Erase Factory AT Firmware](https://wiki.seeedstudio.com/LoRa_E5_mini/#21-erase-factory-at-firmware) section first, as if we need to erase the Factory AT Firmware before we program with SDK. After erasing the Factory AT Firmware it CANNOT be recovered.

#### 2.1 Preparations

Softwares:

- Install [STM32CubeIDE(to compilation and debug)](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html) 

- Install [STM32CubeProgrammer(to program STM32 devices)](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)

- Download and extract [STM32Cube MCU Package for STM32WL series(SDK)](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

Hardwares:

- LoRaWAN Gateway connected to LoRaWAN Network Server(e.g. TTN)

- Prepare an USB TypeC cable and a ST-LINK. Connect the TypeC cable to the TypeC port for power and serial communication, connect the ST-LINK to the SWD pins like this:

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)


#### 2.2 GPIO Configuration Overview

- As the hardware design of LoRa-E5 series is a bit different with NUCLEO-WL55JC, the official STM32WL55JC development board from ST, developers need to reconfigure some gpios, to adapt the SDK example to LoRa-E5 series. We have already reconfigured gpios in this example, but we think it is nessary to point out the difference.

|SDK Example Label|GPIO of NUCLEO-WL55JC|GPIO of LoRa-E5 Mini and LoRa-E5 Dev Board|
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

#### 2.3 Build the LoRaWAN End Node Example

- Download and copy [this repo](https://github.com/seeed-lora/LoRa-E5-LoRaWAN-End-Node.git) to your SDK folder `en.stm32cubewl\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN` and replace the origin `en.stm32cubewl\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node` folder

- Open the `LoRaWAN_End_Node` example with `STM32CubeIDE`, by double click file `LoRaWAN_End_Node\STM32CubeIDE\.project`

- Click `Build Debug` for this example, it should work without any errors

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

#### 2.4 Modify your Device EUI, Application EUI, Application KEY and your LoRawan Region

- Please follow the [guide](https://wiki.seeedstudio.com/LoRa_E5_mini/#13-connect-and-send-data-to-ttn) here to setup your TTN application, get your Application EUI and copy it to the macro definition `LORAWAN_JOIN_EUI` in `LoRaWAN/App/se-identity.h` , for example, my Application EUI is `70 B3 D5 7E D0 03 F0 6A` :

```C
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x03, 0xF0, 0x6A }

```

- Also, you can modify your Device EUI and Application Key, by setting the macro definition `LORAWAN_DEVICE_EUI` and `LORAWAN_NWK_KEY` in `LoRaWAN/App/se-identity.h` , don't forget to ensure `LORAWAN_DEVICE_EUI` and `LORAWAN_NWK_KEY` are the same as the `Device EUI` and `App Key` in TTN console.

```C
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x00, 0x80, 0xE1, 0x15, 0x00, 0x07, 0x4C, 0xD5 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

![](https://github.com/seeed-lora/LoRa-E5-LoRaWAN-End-Node/blob/master/Doc/key.png?raw=true)

- The default LoRaWAN Region is `EU868`, you can modify it, by setting the macro definition `ACTIVE_REGION` in `LoRaWAN/App/lora_app.h`

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_EU868

```

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/region.png)

- After modification, please **rebuild the example** and program to your LoRa-E5. Open `STM32CubeProgrammer`, connect ST-LINK to your PC, hold `RESET Button` of your Device, then click `Connect` and release `RESET Button`:

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png)

- Make sure the Read Out Protection is `AA`, if it is shown as `BB`, select `AA` and click `Apply`:

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png)

- Now, go to the `Erasing & Programming` page, select your hex file path(my path is `E:\en.stm32cubewl\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\LoRaWAN_End_Node_Debug.hex` ), select the programming options as the following picture, then click `Start Programming`! Once the prgramming is finished, 

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png)


#### 2.5 Connect to TTN

- If your LoRaWAN Gateway and TTN are setup, LoRa-E5 will join successfully after reset! A comfirm LoRaWAN package will be sent to TTN every 30 seconds. The following log will come out from the serial port if the join is successful:

```
APP_VERSION:        V1.0.0
MW_LORAWAN_VERSION: V2.2.1
MW_RADIO_VERSION:   V0.6.1
###### OTAA ######
###### AppKey:  2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C
###### NwkKey:  2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C
###### ABP  ######
###### AppSKey: 2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C
###### NwkSKey: 2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C
###### DevEui:  00-80-E1-15-00-07-4C-D5
###### AppEui:  70-B3-D5-7E-D0-03-F0-6A
0s045:TX on freq 868100000 Hz at DR 0
1s550:MAC txDone
6s572:RX_1 on freq 868100000 Hz at DR 0
6s779:MAC rxTimeOut
7s572:RX_2 on freq 869525000 Hz at DR 0
7s709:PRE OK
8s246:HDR OK
9s393:MAC rxDone

###### = JOINED = OTAA =====================
30s068:temp= 25
30s068:VDDA= 254
30s069:TX on freq 868500000 Hz at DR 0
30s082:SEND REQUEST
31s728:MAC txDone
32s750:RX_1 on freq 868500000 Hz at DR 0
32s957:MAC rxTimeOut
33s706:RX_2 on freq 869525000 Hz at DR 3
33s744:PRE OK
33s815:HDR OK
33s897:MAC rxDone

###### ========== MCPS-Confirm =============
```

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/serial.png)

- Cheers! You have already connected LoRa-E5 to LoRaWAN Network! Can't wait to see you develop some wonderful LoRaWAN End Node applications!

## Application Notes

- LoRa-E5 only supports high power output mode, so you can't use these macro defnitions in `radio_board_if.h` :

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```


## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>