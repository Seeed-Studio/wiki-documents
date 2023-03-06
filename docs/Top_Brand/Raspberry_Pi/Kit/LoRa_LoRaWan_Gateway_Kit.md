---
description: LoRa/LoRaWAN Gateway Kit
title: LoRa/LoRaWAN Gateway Kit
keywords:
- Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LoRa_LoRaWan_Gateway_Kit
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: LoRa/LoRaWAN Gateway Kit
category: Wireless
bzurl:  https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html
prodimagename:
surveyurl: https://www.research.net/r/LoRa_LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3
sku: 110060622
--- -->
<!-- ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/LoraWan%20Getway%20868MHz.jpg) -->

LoRa is a perfect long-range wireless solution to create low-power, wide area networks.So far we have released several “LoRa” boards such as Seeeduino LoRaWan and Grove LoRa Radio etc. However if you want to build you own LoRa network, there are 3 things   that you should prepare to get started: a Gateway, at least one Node and a local server where you can monitor all your devices.

This kit provides all the basic elements you need: a Raspberry Pi 3, a Seeeduino LoRaWAN with GPS and a gateway & local server that allows you to collect and transfer data among all your LoRa nodes. By connecting the gateway with Seeeduino LoRaWAN and Grove modules, you can build your IOT prototype within minutes.

Regarding the gateway module RHF0M301, it is a 10 channel(8 x Multi-SF + 1 x Standard LoRa + 1 x FSK) LoRaWan gateway moduel with a 24pin DIP port on board, users can easily connect the RHF0M301 with PRI 2 bridge RHF4T002, adapter for Raspberry Pi 3 and RHF0M301. We also included a 868MHz antenna, an 8GB SD card and USB cables, Ethernet Cables and other accessories.

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

:::caution
Please always plug 3.7V Lipo battery in case USB power supply is not sufficient. We use 868MHZ kit in this wiki, but this wiki works for both 868MHz kit and 915MHz kit.

:::

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-s6z2{:center}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-s6z2">868MHz Kit for Raspberry Pi 3</th>
      <th className="tg-s6z2"><a href="https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></th>
    </tr>
    <tr>
      <td className="tg-5hgy">915MHz Kit for Raspberry Pi 3</td>
      <td className="tg-5hgy"><a href="https://www.seeedstudio.com/LoRa%2FLoRaWAN-Gateway-915MHz-for-Raspberry-Pi-3-p-2821.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></td>
    </tr>
  </tbody></table>

## Features

- Low power consumption & wide area
- Industrial standard reliability
- Economic solution to build LoRa /LoRaWAN network
- Rich Accessories of sensor and actuator
- Real time monitoring

## Hardware Overview

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png)

### Partlist
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-0fxu{background-color:#6ab0de;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-0fxu">Parts number</th>
      <th className="tg-0fxu">Parts name</th>
      <th className="tg-0fxu">Quantity</th>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❶</font></td>
      <td className="tg-vn4c"><a href="https://wiki.seeedstudio.com/Raspberry_Pi_3_Model_B/">Raspberry Pi 3</a></td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❷</font></td>
      <td className="tg-031e">Gateway module RHF0M301–868</td>
      <td className="tg-031e">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❸</font></td>
      <td className="tg-vn4c">PRI 2 Bridge RHF4T002</td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❹</font></td>
      <td className="tg-031e"><a href="https://wiki.seeedstudio.com/Seeeduino_LoRAWAN/">Seeeduino LoRaWAN with GPS (RHF76-052AM)</a></td>
      <td className="tg-031e">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❺</font></td>
      <td className="tg-vn4c">USB to UART Adapter</td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❻</font></td>
      <td className="tg-031e">upgrade to 16GB Micro SD Card – Class 10</td>
      <td className="tg-031e">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❼</font></td>
      <td className="tg-vn4c">0dBi Rubber Duck Antenna</td>
      <td className="tg-vn4c">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❽</font></td>
      <td className="tg-yw4l">5V/2.1A American Standard Adapter with Micro USB Connector</td>
      <td className="tg-yw4l">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❾</font></td>
      <td className="tg-6k2t">Micro USB Cable 20cm</td>
      <td className="tg-6k2t">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❿</font></td>
      <td className="tg-yw4l">Micro USB Cable 100cm</td>
      <td className="tg-yw4l">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">⓫</font></td>
      <td className="tg-6k2t">RJ45 Ethernet Cable 200cm</td>
      <td className="tg-6k2t">1 PCS</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">⓬</font></td>
      <td className="tg-yw4l">JST2.0 Cable 10cm</td>
      <td className="tg-yw4l">1 PCS</td>
    </tr>
  </tbody></table>

## Application Ideas

- Internet of Things
- Smart House
- Security
- Smart Grid
- Intelligent Farm
- Intelligent Park

## Getting Started

### Hardware

#### Interfaces overview

Since there are many interfaces here, it is necessary to know the capabilities of these interfaces. Please refer to the following figure for details.
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_interface.jpg)

- <font face size={5} font color="ffc000">❶</font> <strong>Micro-USB Input:</strong>
The whole system use this Micro-USB interface for power supply.

- <font face size={5} font color="ffc000">❷</font> <strong>USB HOST Connector:</strong>
 Output power to supply for Raspberry Pi

- <font face size={5} font color="ffc000">❸</font> <strong>Raspberry Pi power input:</strong> Input power for Raspberry.

- <font face size={5} font color="ffc000">❹</font> <strong>HDMI:</strong> HD digital video output interface.

- <font face size={5} font color="ffc000">❺</font> <strong>Headphone jack:</strong> 3.5mm Headphone jack

- <font face size={5} font color="ffc000">❻</font> <strong>Ethernet interface:</strong> You can use the Ethernet interface to connect this system to the Internet. Or you can use Wifi after you configured the wireless network.

### Hardware connection

- Step 1. Plug **Gateway module RHF0M301–868** into **PRI 2 Bridge RHF4T002**.
- Step 2. Plug **PRI 2 Bridge RHF4T002** into **Raspberry Pi 3**.
- Step 3. Connect <font face size={5} font color="ffc000">❷</font> and <font face size={5} font color="ffc000">❸</font> via the 20cm Micro-USB cable.
- Step 4. Connect the **USB to UART Adapter** to the GPIO of **Raspberry Pi 3**. Please connect them as the picture shown below.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/RX-TX.png)

- Step 5. Plug the **USB to UART Adapter** into your PC.
- Step 6. Connect <font face size={5} font color="ffc000">❶</font> with 5V/2.1A Standard Adapter via 100cm Micro-USB cable.

When you finished all the steps, the whole system should be like the picture below.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/connection.jpg)

## Software

### Software Tool

In the following guide, below tools will be needed, please install it to your computer.

- **[Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)**, portable serial tool, used to open the serial port of Seeeduino LoRaWAN with GPS (RHF76-052AM) and send AT commands to it.
- **[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)**, terminal tool include both serial and SSH terminal, used to control Raspberry Pi.
- Internet browser, used to access RHF2S001 integrated LoRaWAN server (It is recommended to use Chrome or Firefox).

:::note
You may have your other favorite serial tools,of cause you can use them.However if you are not sure about your tools.Please use the ones we recommend.

:::

### Connect To Local Server

#### Step 1. Power up and connect to putty

a) First, make sure the serial tool and RPi (RHF4T002 Adapter) are connected correctly.  

b) Plug FT232 tool to PC (If COM port is not recognized correctly, please refer to [Virtual COM Port Drivers](https://www.ftdichip.com/Drivers/VCP.html))<!-- 源文件链接有误 -->

c) Open **Device Manager** of your PC to get the right COM port. Like COM15 for example. Configure
ExtraPuTTY according to below picture (Speed 115200, others use defaults), click **Open**. As the gateway is still not opened, so there is nothing in the terminal.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

d) Power the gateway up. Booting log will be showed in the PuTTY terminal, in the end it will
prompt you to input your log in name. Please note it takes 1 or 2 minutes to get the prompt
information.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/login_putty.png)

e)  Please use RHF2S001 default user name and password to log in. ( Username: **rxhf**, Password:
**risinghf** ). Note, when input the password, there is no any echo

f)  Connect RHF2S001 with router through ethernet cable

g)  Run **ifconfig** to check the ip address and mac address.
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_getip.png)

##### IP is in the blue square, MAC address is in orange square (Format: b8:27:eb:xx:xx:xx)

:::note
After you get the IP, it is recommended to login RHF2S001 again through SSH. Because SSH is faster (Ethernet than UART) and stable. We normally use serial tool to get the IP. Reopen PuTTY, use the SSH  module to connect again.

:::

To login through SSH, you need to fill in the Hostname with the IP address you've just got.And use port 22,choose the SSH connection type. Just leave the other options by default. Then simply click **Open**.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

#### Step 2. Expand SD Card File System

By default, the image enables only 2GB for Raspbian System, it is recommended to expand to use the
whole SD card (8GB or 16GB). Or the SD card will be full soon.
Run below command in the PuTTY terminal to start raspi-config,  

```
sudo raspi-config
```

Choose “Expand Filesystem”, when finished reboot to make it effect. Run below command in the PuTTY terminal to know the SD card capacity and usage.

```
df -h
```

Please refer to Raspberry Pi raspi-config tool instruction for details.Click [here](https://www.raspberrypi.org/documentation/configuration/raspi-config.md) see more.

#### Step 3. Use RHF2S001 integrated LoRaWAN server

**a) Connect Gateway with internal server**

Run below commands in the PuTTY terminal, and check the status:

```
sudo systemctl status pktfwd
```

If pktfwd service is not active, run below command to start it:

```
sudo systemctl enable pktfwd
sudo systemctl restart pktfwd
```

**b) Frequency Plan**

Frequency Plan for EU868
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">EU868</th>
    <th class="tg-s6z2">Uplink DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">867.1</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">867.3</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">867.5</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">867.7</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">867.9</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">868.1</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">868.3</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">868.5</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
</table>

Frequency Plan for US915 HYBRID

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">US915</th>
    <th class="tg-s6z2">Uplink DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">902.3</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">902.5</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">902.7</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">902.9</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">903.1</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">903.3</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">903.5</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">903.7</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH64</td>
    <td class="tg-j0tj">903.0</td>
    <td class="tg-j0tj">DR4</td>
  </tr>
</table>

 **c) RHF76-052AM Settings**

 Now let's configure the Seeeduino LoRaWAN with GPS (RHF76-052AM).

- Firstly, you need to connect Seeeduino LoRaWAN GPS to your PC.

- Secondly, open the **[Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)** IDE, and copy the code blew into a new skech.

```
 void setup()
 {
     Serial1.begin(9600);
     SerialUSB.begin(115200);
 }

 void loop()
 {
     while(Serial1.available())
     {
         SerialUSB.write(Serial1.read());
     }
     while(SerialUSB.available())
     {
         Serial1.write(SerialUSB.read());
     }
 }
```

- Then choose the right serial port of Seeeduino Lora GPS, and choose the board **Tool->Board->Seeeduino_LoRAWAN**. After that you can click the upload button.If you can not find Seeeduino_LoRAWAN in the board list or do not know how to update the code,please click [here](https://wiki.seeedstudio.com/Seeeduino_LoRAWAN/#install-the-driver-for-windows) for more information.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/port_lora.png)

- Now please open the serial monitor in the upper right corner ( or you can press Ctrl+Shift+M at the same time ).Choose **Newline** (This option will add "\r\n" at the end of each command.), set the baud rate 9600.Then tap the commands below and press **send**.

For EU868

```
AT+FDEFAULT=RISINGHF
AT+DR=EU868
```

For US915

```
 AT+FDEFAULT=RISINGHF
 AT+DR=US915HYBRID
 AT+RXWIN2=923.3,DR8
```

 ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/At_send.png)

:::caution
After you plug Seeeduino LoRaWAN with GPS into your computer, you may find two serial Ports. One is for raspeberry with putty, one is for Seeeduino LoRaWAN GPS with SSCOM, please choose the right one.
:::

**d) Access Internal Server Console**

Fill your browser with the IP address(IP of your gateway) ,it Will jump to the website below.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_webin.png)

#### Step 4. Use Seeeduino LoRaWAN GPS(RHF76-052AM) access LoRaWAN server

There are two modes,in this wiki we only talk about the ABP Mode(This Mode is free for anyone),for more information about OTAA Mode(This model is commercial, you need to pay for it),you can click [here](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual-seeed-v2.1.pdf).

a) Find the "Application" button in the upper right corner of the website above, click it and you will see a new page.

b) Now you need **APPEui**,**DevAddr**,**DevEui** of Seeeduino LoRaWAN to add a new application.
In order to get the ID information of Seeeduino LoRaWAN, you need to tap the command below in the serial monitor of Arduino IDE.Click **Send**, you will get the ID then.

```
at+id
```

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/at%2Bid.png)

c) Fill in the blank with the ID info. you just get. You can fill in the name and  owner as your wish (here we use Seeed and my nick name：), use the APPEui you've just got. Then click **Add** button.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/applicationpage.png)

Then you will jump into the configure page. In this page, we choose Personalised Motes. Fill in the **DevEUI** and **DevAddr** with ID info. of your Seeeduino LoRaWAN GPS. And set the **NWKSKEY** and **APPSKEY** by default. You can refer to the picture below.

- DevEui： Seeeduino LoRaWAN GPS get through AT+ID command
- DevAddr: Seeeduino LoRaWAN GPS get through AT+ID command
- NWKSKEY：Default value 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：Default value 2B7E151628AED2A6ABF7158809CF4F3C

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Add_info.png)

d) To test whether you add the device successfully, you can use the serial monitor of Arduino IDE tap the command below.

```
at+mode=lwabp

AT+CMSGHEX="0a 0b 0c 0d 0e"
```

It should like something below.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test_send.png)

Then turn to the website, click **Application->Seeed(the name of the Application you just added)->View application data**, you will see the data you've
just sent form the Seeeduino_LoRAWAN. congratulations! Job done!

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test.png)

### Connect To Loriot Server

#### Step.1 Loriot Server Gateway Registration

a)  New user need register an account first, click **[registration address](https://cn1.loriot.io/register.html)** <!--源文件链接有误 -->. Fill in UserName, Password and email address to register, after registration an email will be sent to you, please follow the instruction in the email to activate.

b)  After successful activation, click **[here](https://cn1.loriot.io/home/login.html)** <!-- 源文件链接有误 -->to log in. Default tier is “Community Network”, it supports 1 Gateway (RHF2S001) and 10 nodes.

c)  Enter **Dashboard -> Gateway**, click **Add Gateway** start to add Gateway.

d)  Select **Raspberry Pi 3**

e)  Set as below:

- Radio front-end  ->  RHF2S001 868/915 MHz(SX1257)
- BUS  ->  SPI

f)  Fill in the MAC address of your RHF2S001, should be in format of b8:27:eb:xx:xx:xx. And also input
Gateway Location information.  

g)  Click “Register Raspberry Pi gateway” to finish the registration.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_gateway.png)

h)  Click the registered gateway to enter configuration page, switch “Frquency Plan” manually, your
plan here is decided by the type of your RHF2S001 type, available plan are CN470，CN473，
CN434，CN780，EU868, after selected please refresh the page to get the exact channel.In this wiki we choose **EU868**.

i)  Run the command in the putty terminal：

```
cd /home/rxhf/loriot/1.0.2
sudo systemctl stop pktfwd
sudo gwrst
wget https://cn1.loriot.io/home/gwsw/loriot-risinghf-rhf2s008-rhf1257-SPI-0-latest.bin -O loriot-gw.bin
chmod +x loriot-gw.bin
./loriot-gw.bin -f -s cn1.loriot.io
```

j)  Finish gateway registration. You will see the gateway is Connected now. Next is to register node.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/service_done.png)

#### Step 2. Loriot Server Connect Node device

**a) Get the available gateway channels**

Current gateway channels could be got from **Dashboard -> Gateway -> Your Gateway** , you can see the available channels as the picture below.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/radio_list.png)

**b) Seeeduino LoRAWAN GPS(RHF3M076) Configuration**

Open the serial monitor of Arduino IDE, tap the command below.

```
at+ch
```  

To confirm the default channel of your Seeeduino_LoRAWAN GPS, you will get 3 channels. If there is no available channel, you can change the channels of Seeeduino_LoRAWAN by the command below.

```
at+ch=0,868.1
at+ch=1,868.3
at+ch=2,868.5
```

Then you can use **at+ch** again to check.

**c)  Add Seeeduino_LoRAWAN GPS as an ABP Node**

Log in Loriot server , Click **Dash Board->Applications->SimpleApp** . Click **Import ABP** ，input below items：

- DevAddr: Seeeduino_LoRAWAN GPS get through "AT+ID" command (Note: Loriot doesn't support colon connector,
need remove manually)  
- FCntUp：Set to 1
- FCntDn：Set to 1
- NWKSKEY：Default value 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：Default value 2B7E151628AED2A6ABF7158809CF4F3C
- EUI：DEVEUI, Seeeduino_LoRAWAN GPS get through "AT+ID" command

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_apb.png)

Click **Import Device** button to finish the device import.
Now choose **Dashboard -> Applications -> SampleApp** , you will see the new ABP Node you've just added.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/inite_status_apb.png)

**d)  Send data from Seeeduino_LoRAWAN**

Back to serial monitor of Arduino IDE, send command:

```
AT+CMSGHEX="0a 0b 0c 0d 0e"
```

Then go to **Dashboard -> Applications -> SampleApp ->Device** , click the Node Device EUI or DevAddr, you will find the data you've just sent here.

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/final.png).

## FAQs

**Q1: How to find the factory firmware?**

**A1:** When the firmware is broken or some terrible errors happen, you can download the [firmware](https://drive.google.com/open?id=1MVLQlxjhir_mWvKhvuqBsr1a0ievZRDC) here. It is for raspberry 3b only, NOT support raspberry 3b +.

**Q2: How to build the latest image?**

**A2:** It works well with both raspberry 3b and 3b+. We tested it under 2018-11-13 raspbian image.

- Step 1. Download the [latest raspberry image](https://www.raspberrypi.org/downloads/raspbian/)

- Step 2. Download libssl1.0.0.deb to your Raspberry Pi by running `wget https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/libssl1.0.0.deb`, and run `sudo dpkg -i ./libssl1.0.0.deb` to install it in terminal.

- Step 3.  Run `sudo raspi-config` in terminal, select _Interfacing Options_ -- _P4 SPI_ -- _YES_ to enable SPI, so that Raspberry Pi can communicate with RHF0M301.

- Step 4. Run following commands in terminal, download and start loriot gateway.

```
wget https://cn1.loriot.io/home/gwsw/loriot-pi-3-rhf1257-SPI-0-latest.bin -O loriot-gw
chmod +x loriot-gw
./loriot-gw -f
```

## Resources

- **[PDF]** [Download Wiki PDF](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/LoRa_LoRaWan_Gateway_Kit.pdf)
- **[Uer Manual]** [User Manual](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual%20-%20v3.2.pdf).<!-- 源文件链接有误 -->
- **[More Reading]** <a href="/Seeeduino_LoRAWAN" ><span><font size={"3"}> Wiki of Seeeduino LoRaWAN </font></span></a>
- **[More Reading]** [RisingHF Website](http://www.risinghf.com/product/risinghf-iot-dicovery/?lang=en)
- **[Azure IoT Edge LoRaWAN]** [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)

## Projects

**LoRa IoTea**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
