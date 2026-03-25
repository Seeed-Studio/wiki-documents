---
description: reComputer R1225 LoRaWAN Gateway Qucik Start
title:  reComputer R1225 LoRaWAN Gateway Qucik Start
keywords:
- Gateway
- SenseCAP
- Edge Controller
- reComputer R1225 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/13/2026
  author: Kian
createdAt: '2026-02-05'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/
---

# Qucik Start

## Power connection

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

- Step 1: Connect your R1225 to a Ethernet cable, and connect your PC to the same router

:::note
 Your PC and device should be connected to the same router/network.
:::

#### Network Connection Diagram

When using the R1225 for the first time, if there are routers and Ethernet cables nearby, you can choose to connect the R1225 to the network via a wired connection.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了Wifi，即使不插网线，也可以通过访问路由器分配的IP进入管理界面-->

:::tip
During the initial setup, if you have configured Wi-Fi, you can access the Luci interface by entering the R1225’s IP address—even if you haven’t connected an Ethernet cable—as long as your computer and the R1225 are connected to the same Wi-Fi network.
:::

- Step 2: Get IP Address of your device

Check the IP Address of your device on your router admin page.

- Step 3: Get your device Username and Password

  - Username：admin
  - Password：null  (**No password required for first-time login**)

- Step 4: Login Luci

Input the IP Address of your device in a browser to enter the Luci page.
Then input your device username and password to login, and click the Login button.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

### Access via device AP hotspot

- Step 1: Turn on R1225

- Step 2: Connect to the AP hotspot

  - SSID : R1225-XXXX (**last 4 digits of the SN**)
  - Password : 1234567890

When the reComputer R1225 is powered on for the first time, it automatically enables hotspot mode. The default SSID for the hotspot is “R1225-XXXX (**last 4 digits of the SN**)”, and the default password is “1234567890”,connect your computer to this AP hotspot.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 3: Get your device Username and Password

  - Username：admin
  - password：null  (**No password required for first-time login**)

- Step 4: Login Luci

Input the IP Address (192.168.168.1) in your browser to enter the Local Console.  
Then input your device username and password, and click the Login button.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## R1225 Network Configuration

### Ethernet Connection

<!--补充图片和内容-->

### WIFI Connection

- Step 1: Click on `Network` - `Wireless`

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 2: Click on the `Scan` button to scan the WIFI

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 3: Select your WI-FI to join the network

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 4: Submit the Wi-Fi password, and then click `Submit` and Save

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 5: Click `Save & Apply` to apply your settings

### Cellular Connection (for 4G version)

- Step 1: Plug your SIM card into the Nano-SIM card slot

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 2: Login the Luci page, and click on `Network` - `Cellular`

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 3: Setup the APN info, and click `Save & Apply` to apply your settings

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## R1225 LoRaWAN Configuration

- Step 1: Click on `LoRa` - `LoRa Network`

- Step 2: Check the  `Enable LoRa functionality`

- Step 3: Click `Save & Apply` to apply your settings

### Channel Plan Settings

- Step : Navigate to `LoRa` > `Channel Plan`

- Step : Select `Region` and `Channel-plan`

- Step : Click `Save & Apply` to apply your settings

### Select the built-in Chirpstack platform

:::tip
R1225 comes with ChirpStack (open-source LoRaWAN network server) pre-installed.
:::

- Step : Select `Platform Type` - `ChirpStack`

- Step : Check the **EUI**

- Step : Click `Open ChirpStack Application Server` in the lower-left corner

- Step : Log in to the Chirpstack Cloud Platform
  - Username/email: admin
  - Password: admin

The default username and password are both “admin”

Then click `Submit` to go to the Chirpstack platform interface

### Bind R1225 LoRaWAN Gateway

- Step : Navigate to `Gateway` > `Add gateway`

  - Gateway name: A name of your gateway

  - Gateway ID(EUI64): Gateway EUI can be found on the device label or Local Console

  - Stats interval(secs): The expected interval in seconds in which the gateway sends its statistics

Then click `Submit`

### Checking the Gateway Connection Status
