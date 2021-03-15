![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png)

<p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

LoRa-E5 Development Kit is a compact development toolset for you to unlock the powerful performance of the [LoRa-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html). It consists of a LoRa-E5 Dev Board, an antenna(EU868/US915), a USB type C cable, and a 2*AA 3V Battery Holder.

LoRa-E5 Dev Board embedded with LoRa-E5 STM32WLE5JC Module that supports LoRaWAN protocol on global frequency band. It leads out full GPIOs of LoRa-E5 supporting various data protocols and interfaces including RS-485, Grove, male/female headers, etc. It would be a perfect choice for fast testing and rapid prototyping of your LoRa IoT projects.

LoRa-E5 Dev Board embedded with [LoRa-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), which is the world-first combo of LoRa RF and MCU chip into one single tiny chip and is FCC and CE certified. It is powered by ARM Cortex-M4 core and Semtech SX126X LoRa chip, supports both LoRaWAN and LoRa protocol on the worldwide frequency and (G)FSK, BPSK, (G)MSK, and LoRa modulations.
 
Learn more about [LoRa-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) here.

LoRa-E5 Dev Board has a long-distance transmission range of LoRa-E5 up to 10km in an open area. The sleep current of LoRa-E5 modules on board is as low as 2.1 uA(WOR mode). It is designed with industrial standards with a wide working temperature at -40 ℃ ~ 85℃, high sensitivity between -116.5 dBm ~ -136 dBm, and power output up to +20.8dBm at 3.3V.
 
LoRa-E5 Dev Board also has rich interfaces. Developed to unlock the full functionality of the LoRa-E5 module, LoRa-E5 Dev Board has led out full 28 pins of LoRa-E5 and provides with rich interfaces including Grove connectors, RS-485 terminal, male/female pin headers for you to connect sensors and modules with different connectors and data protocols, saving your time on wire soldering. You could also easily power the board by connecting the battery holder with 2 AA batteries, enabling temporary use when lacking an external power source. It is a user-friendly board for easy testing and rapid prototyping.
 
Since LoRa-E5 is a LoRaWAN chip with an MCU, there are three main ways to utilize the LoRa-E5 Dev Board:
 
1. Connect LoRa-E5 Dev Board to PC via USB and control by AT commands

There is a built-in USB to UART function on board, you could just simply connect the LoRa-E5 Dev Board to your PC with a USB type C cable, and use serial communication software to send AT commands and read data from the board

 
2. Connect LoRa-E5 Dev Board to another mainboard via UART and control by AT commands

For example, connect LoRa-E5 Dev Board to Seeeduino XIAO and the Expansion Board via UART, and send AT commands and read data from Seeeduino XIAO through Arduino IDE serial monitor.

 
3. Develop user application by using SDK

Develop your own LoRa development board with MCU function by using STM32Cube Programmer, which is the SDK officially provided by STMicroelectronics. To download this SDK resource, please find the resources in learning and document down below.

With all the outstanding features listed above, the LoRa-E5 Dev Board will be a superior choice for IoT device development, testing, prototyping, and applications in long-distance, ultra-low power consumption IoT scenarios like smart agriculture, smart office, and smart industry.

If you are unfamiliar with LoRa and LoRaWAN technology, please check out this blog [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) in detail.


## Features

- Ultra-low power consumption and high performance

- Easy testing and rapid prototyping

- Full GPIOs led out to rich interfaces, including RS-485, Grove, and etc.

- Global LoRaWAN® and LoRa frequency plan supported

- Long-distance transmission range to 10km (ideal value in open area)

## Harware Overview 

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4071615359366_.pic_hd.jpg)

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/3011615286741_.pic_hd.jpg)



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
<td class="tg-g9rn">Size</td>
<td class="tg-g9rn">LoRa-E5 Dev Board: 85.6*54mm  Package: 200*130*50mm</td>
</tr>
<tr>
<td class="tg-g9rn">Voltage - supply</td>
<td class="tg-g9rn">3-5V (Battery) / 5V(USB Type C)</td>
</tr>
<tr>
<td class="tg-g9rn">Voltage - output</td>
<td class="tg-g9rn">EN 3V3 / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Power - output</td>
<td class="tg-g9rn">Up to +20.8dBm at 3.3V</td>
</tr>
<tr>
<td class="tg-g9rn">Frequency</td>
<td class="tg-g9rn">EU868 / US915 / AU915 / AS923 / KR920 / IN865</td>
</tr>
<tr>
<td class="tg-g9rn">Protocol</td>
<td class="tg-g9rn">LoRaWAN</td>
</tr>
<tr>
<td class="tg-g9rn">Sensitivity</td>
<td class="tg-g9rn">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / JST2.0 / Grove*3(IIC*2/UART*1) / RS485 / SMA-K / IPEX</td>
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
<td class="tg-uu1j" colspan="2">LoRa-E5 Dev Board *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Antenna(EU868/US915) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">2*AA 3V Battery Holder *1</td>
</tr>
</tbody>
</table>


## Application

- LoRa-E5 module Easy testing
- Rapid prototyping of LoRa devices with LoRa-E5
- Any long-distance wireless communication application development
- LoRa and LoRaWAN application learn and research

![](https://files.seeedstudio.com/products/317990687/image/application.png)

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

LoRa-E5 has a built-in AT command firmware, which supports LoRaWAN Class A/B/C protocol and wide frequency plan: EU868/US915/AU915/AS923/KR920/IN865. With this AT commond firmware, customers can easily and quickly build their prototype or application.

But for those uesr who perfer to directly develop applications on LoRa-E5 module, with STM32Cube MCU packege for STM32WL series, there are several areas to pay attention to:

- Read Protection is needed to remove first, after you connect the MCU via SWD. STM32Cube Programmer is the recommended tool  to do this.

- Once the factory AT firmware is erased, it can't be flashed to the MCU again

- The "PB13/SPI_SCK/BOOT" pin on the LoRa-E5 module is just a normal GPIO, not the "BOOT0" pin of the MCU. This "PB13/SPI_SCK/BOOT" pin is used in the bootloader of the Fatory AT firmware, to decide to jump to APP or stay in bootloader(for DFU). The real "BOOT0" pin doesn't pinout to the module, so customers need to be careful when develop low power application.

#### 2.2 Hardware

- Clock Configuration:
  - HSE
    - 32MHz TCXO
    - TCXO power supply: PB0-VDD_TCXO
  - LSE
    - 32.768KHz crystal oscillator
- RF Switch 
  - Receive: PA4=1, PB5=0
  - Transmit(high output power, SMPS mode): PA4=0, PB5=1

More demos coming soon...

## Resources

LoRa-E5 Development Board Datasheet:

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">LoRa-E5 Development Board v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">LoRa-E5 Development Board v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">LoRa-E5 Development Board v1.0.sch</a></p>

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