---
title: Grove - Serial Bluetooth v3.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Serial_Bluetooth_v3.0/
slug: /Grove-Serial_Bluetooth_v3.0
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove-Serial_Bluetooth_v3.0.jpg)

Grove - Serial Bluetooth is an easy to use module compatible with the existing Grove Base Shield, and designed for transparent wireless serial connection setup. The serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 2Mbps Modulation with complete 2.4GHz radio transceiver and baseband. It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH(Adaptive Frequency Hopping Feature).It has the smallest footprint of 12.7mm x 27mm. Hope it will simplify your overall design/development cycle.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)

Specifications
--------------

- Operating Voltage: 5.0VDC
- Data Rate: 2Mbps
- RF Transmit Power (Max)：+4dBm
- Sensitivity：-80dBm
- Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation
- Selectable baud rate
- Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Demonstration
-------------

Two Bluethooth modules work as shown below:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt5.JPG)

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt6.JPG)

### Hardware Installation

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_3_.jpg.png)

### Download Code and Upload

1. You can download the code in github, click [here](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip),then extract it to libraries folder of Arduino.
2. Open Arduino IDE, open File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Master_Button, then you open the code of Master,modify the code as follows:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_4_.jpg.png)

1. Open Arduino IDE, open File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_led, then you open the code of Slave and modify the code as well like above.
2. Save the modification and click Upload to Upload the code, if you have any problem about how to start Arduino, please click <a href="/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}> here </font></span></a> for some help.

### Check The Result

1. After finish Uploading the code to both Master and Slave, reset the two devices meanwhile
2. You can see the led blink, indicate that devices was initializing and connecting.
3. After about servel seconds, led on, indicate that Master and Slave had connected.

<div class="admonition note">
<p class="admonition-title">Note</p>
If the phenomenon is not observed above, try unplugging the power and re-plug in again.
</div>

Reference
---------

### Commands to change default configuration

**1. Set working MODE**

| Command  | Description                                 |
|----------|---------------------------------------------|
| AT+ROLES | Set device working mode as client (slave).  |
| AT+ROLEM | Set device working mode as server (master). |

**2.Set BAUDRATE**

| Command  | Description                                 |
|----------|---------------------------------------------|
| AT+BAUD4 | Set baudrate 9600. Save and Reset.  |
| AT+BAUD5 | Set baudrate 19200. Save and Reset.  |
| AT+BAUD6 | Set baudrate 38400. Save and Reset.  |
| AT+BAUD7 | Set baudrate 57600. Save and Reset.  |
| AT+BAUD8 | Set baudrate 115200. Save and Reset.  |
| AT+BAUD9 | Set baudrate 230400. Save and Reset.  |
| AT+BAUDA | Set baudrate 460800. Save and Reset.  |

**3. Set Device NAME**

| Command        | Description                                    |
|----------------|------------------------------------------------|
| AT+NMAEabcdefg | Set device name as “abcdefg”.Max length is 12. |

**4. Set PINCODE**

| Command    | Description                          |
|------------|--------------------------------------|
| AT+PIN2222 | Set pincode “2222”,Max length is 12. |

**5.Restore all setup value to factory setup**

| Command    | Description                              |
|------------|------------------------------------------|
| AT+DEFAULT | Restore all setup value to factory setup |

**6. Query module address**

| Command | Description          |
|---------|----------------------|
| AT+ADDR | Query module address |

**7. Query Last Connected Device Address**

| Command | Description          |
|---------|----------------------|
| AT+RADD | Query module address |

<!-- ## Schematic Online Viewer -->

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} -&gt; < div>
</div> -->
## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Serial Bluetooth Eagle File](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [Bluetooth Software Instruction](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)
- [Bluetooth - Module Datasheet](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Bluetooth_module.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth_v3.0 -->

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
