---
description: reComputer R1225 LoRaWAN Gateway Quick Start
title: reComputer R1225 LoRaWAN Gateway Quick Start
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/25/2026
  author: Kian
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/r1225_quick_start/
updatedAt: '2026-03-30'
---
# Quick Start

## Power Connection

### Powered by a power adapter

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

The reComputer R1225 is supplied with a nominal AC voltage of 12&#126;24  V or DC voltage of 9&#126;36V. The power supply is connected via the 2-pin power terminal block connector. To ground the reComputer R1225, the ground wire can be secured to the screw located at the top left corner of the power terminal.

:::note
The power solution utilizes a bridge rectifier diode for reverse polarity protection and is compatible with both AC and DC inputs. This ensures that **regardless of how the power supply's positive and negative terminals are connected**, the circuit will not be damaged. By using a bridge rectifier, the output voltage polarity remains fixed irrespective of the input DC polarity, providing effective reverse polarity protection.
:::

### PoE power supply

With the PoE module installed, the ETH0 port of reComputer R1225 can support PoE power supply, providing a convenient and efficientway to power the device over Ethernet. This option simplifies the installation process and reduces the amount of cabling required, making it an ideal solution for applications with limited power sources or where power outlets are not readily available.

- PoE input: Range 44~57V; Typical 48V
- PoE output: 12V, 1.1A Max.

:::tip
It's worth noting that the PoE module provided with the reComputer R1225 is compliant with the IEEE 802.3af standard and can provide a maximum power supply of 12.95W. **Therefore, if there is a need to connect high-power peripherals such as SSD or 4G modules, the PoE power supply may not be sufficient**. In this case, it's recommended to use the AC/DC terminal for power supply instead to ensure stable and reliable operation of the device.
:::

## Access the Seeed Gateway OS

### Access via router

- Step 1: Connect your R1225 to an Ethernet cable, and connect your PC to the same router

:::note
 Your PC and device should be connected to the same router/network.
:::

#### Network Connection Diagram

When using the R1225 for the first time, if there are routers and Ethernet cables nearby, you can choose to connect the R1225 to the network via a wired connection.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram1.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了Wifi，即使不插网线，也可以通过访问路由器分配的IP进入管理界面-->

:::tip
If Wi-Fi is configured, you can access the LuCI interface via the R1225’s IP address without an Ethernet cable, as long as your computer and the R1225 are on the same network.
:::

- Step 2: Get IP Address of your device

Check the IP Address of your device on your router admin page.

- Step 3: Get your device Username and Password

  - Username：admin
  - Password：null  (**No password required for first-time login**)

- Step 4: Login Luci

Input the IP Address of your device in a browser to enter the Luci page.
Then input your device username and password to login, and click the Login button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

### Access via device AP hotspot

:::caution
When the R1225 is turned on for the first time, its Wi-Fi hotspot remains active for 5 minutes by default. After this time, the R1225’s hotspot will automatically turn off.
:::

- Step 1: Turn on R1225

Plug in the reComputer R1225 LoRaWAN Gateway, and the device will power on automatically.

- Step 2: Connect to the AP hotspot

  - SSID : R1225-XXXX (**last 4 digits of the SN**)
  - Password : 1234567890

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_AP.png" alt="pir" width={450} height="auto" /></p>

When the reComputer R1225 is powered on for the first time, it automatically enables hotspot mode. The default SSID for the hotspot is “R1225-XXXX (**last 4 digits of the SN**)”, and the default password is “1234567890”,connect your computer to this AP hotspot.

- Step 3: Get IP Address of your device

After connecting to the AP with the SSID R1225-XXXX, click the details icon in the upper-right corner.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi.png" alt="pir" width={450} height="auto" /></p>

Click to open the “Network and Internet” page in the system settings, then scroll down to the bottom to find the IP address.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi2.png" alt="pir" width={450} height="auto" /></p>

- Step4 : Get your device Username and Password

  - Username：admin
  - password：null  (**No password required for first-time login**)

- Step5 : Login Luci

Input the IP Address (192.168.2.1) in your browser to enter the Local Console.  
Then input your device username and password, and click the Login button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

## R1225 Network Configuration

### Ethernet Connection

Ethernet is plug-and-play and requires no configuration.
<!--补充图片和内容-->

### WIFI Connection

- Step 1: Click on `Network` - `Wi-Fi`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi1.png" alt="pir" width={200} height="auto" /></p>

- Step 2: Click on the `Scan` button to scan the WIFI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi2.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Select your Wi-Fi to join the network

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi3.png" alt="pir" width={800} height="auto" /></p>

- Step 4: Submit the Wi-Fi password, and then click `Submit` and Save

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi5.png" alt="pir" width={800} height="auto" /></p>

- Step 5: Click `Save & Apply` to apply your settings

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi6.png" alt="pir" width={800} height="auto" /></p>

### Cellular Connection (for 4G version)

- Step 1: Plug your SIM card into the Nano-SIM card slot

Please use the DIN-rail clip we provided to insert it into the small hole next to the SIM card slot, then insert your SIM card.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE.png" alt="pir" width={400} height="auto" /></p>

- Step 2: Login the Luci page, and click on `Network` - `LTE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE1.png" alt="pir" width={200} height="auto" /></p>

- Step 3: Setup the APN info, and click `Save & Apply` to apply your settings

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE2.png" alt="pir" width={800} height="auto" /></p>

## R1225 LoRaWAN Configuration

- Step 1: Click on `LoRa` - `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa1.png" alt="pir" width={200} height="auto" /></p>

- Step 2: Check the  `Enable LoRa functionality`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa2.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Click `Save & Apply` to apply your settings

### Channel Plan Settings

- Step 1: Navigate to `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan1.png" alt="pir" width={200} height="auto" /></p>

- Step 2: Select `Region` and `Channel-plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan2.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Click `Save & Apply` to apply your settings

### Select the built-in Chirpstack platform

:::tip
R1225 comes with ChirpStack (open-source LoRaWAN network server) pre-installed.
:::

- Step 1: Select `Platform Type` - `ChirpStack`

- Step 2: Check the **EUI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack1.png" alt="pir" width={800} height="auto" /></p>

- Step 3: Click `Open ChirpStack Application Server` in the lower-left corner

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack2.png" alt="pir" width={800} height="auto" /></p>

- Step 4: Log in to the Chirpstack Cloud Platform

  - Username/email: admin

  - Password: admin

The default username and password are both “admin”

Then click `Submit` to go to the Chirpstack platform interface

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack3.png" alt="pir" width={800} height="auto" /></p>

### Bind R1225 LoRaWAN Gateway

- Step 5: Navigate to `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

- Step 6: Enter the `Gateway Name` and `Gateway ID (EUI: 64)`

  - Gateway name: A name of your gateway

  - Gateway ID(EUI64): Gateway EUI can be found on the device label or Local Console

  - Stats interval(secs): The expected interval in seconds in which the gateway sends its statistics

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

Then click `Submit`

### Checking the Gateway Connection Status

Upon completion of all configuration steps, the gateway should be displayed as **`Online`** on the ChirpStack platform.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack6.png" alt="pir" width={800} height="auto" /></p>

#### Gateway data

Navigate to Gateways, choose the gateway you want to check.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack7.png" alt="pir" width={800} height="auto" /></p>
