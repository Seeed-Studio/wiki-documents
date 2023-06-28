---
description: reComputer Industrial J40, J30 Hardware and Interfaces Usage
title: reComputer Industrial J40, J30 Hardware and Interfaces Usage
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

This wiki introduces the various different hardware and interfaces on the reComputer Industrial J4012, J4011, J3011, J3010 and how to use them to expand your project ideas.

## Disassemble reComputer Industrial

First of all,it is better to disassemble the outer enclosure to access all the interfaces
. Unscrew the 4 screws located at the back as follows in order to disassemble reComputer Industrial

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## CSI Cameras

reComputer Industrial is equipped with **2x 2-lane 15pin MIPI CSI camera connectors** and the below cameras are supported

- IMX219 cameras

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

### Connection Overview

Here the 2 CSI camera connectors are marked as **CAM0 and CAM1**. You can either connect one camera to any connector out of the 2 or connect 2 cameras to both the connectors at the same time.

- **Step 1:** Gently pull out the black color lock on the CSI connector

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **Step 2:** Insert the 15-pin ribbon cable into the connector making sure the gold fingers are facing downwards

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **Step 3:** Push in the black color lock to lock the ribbon cable in place

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### Usage

You can use CSI cameras in 2 different methods. Follow the below commands according to the camera connector 

- Method 1:

For CAM0 port

```sh
nvgstcapture-1.0 sensor-id=0 
```

For CAM1 port

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
If you want to change further settings of the camera, you can type **"nvgstcapture-1.0 --help"** to access all the configurable options available
:::

- Method 2:

For CAM0 port

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

For CAM1 port

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
If you want to change further settings of the camera, you can update the arguments such as **width, height, framerate, format**, etc.
:::

## RTC

reComputer Industrial is equipped with 2 different ways to connect to an RTC battery

### Connection Overview

- Method 1:

Connect a **3V CR1220 coin cell battery** to the RTC socket on the board as shown below. Make sure the **positive (+)** end of the battery is facing upwards

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- Method 2:

Connect a **3V CR2302 coin cell battery with JST connector** to the 2-pin 1.25mm JST socket on the board as shown below

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### Usage

- **Step 1:** Connect an RTC battery as mentioned above

- **Step 2:** Turn on reComputer Industrial

- **Step 3:** On the Ubuntu Desktop, click the drop-down menu at the top right corner, navigate to `Settings > Date & Time`, connect to a network via an Ethernet cable and select **Automatic Date & Time** to obtain the date/ time automatically

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
If you have not connected to internet via Ethernet, you can manually set the date/ time here
:::

- **Step 4:** Open a terminal window, and execute the below command to check the hardware clock time 

```sh
sudo hwclock
```

You will see the output something like below which is not the correct date/ time

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **Step 5:** Change the hardware clock time to the current system clock time by entering the below command

```sh
sudo hwclock --systohc
```

- **Step 6:** Remove any Ethernet cables connected to make sure it will not grab the time from the internet and reboot the board 

```sh
sudo reboot
```

- **Step 7:** Check hardware clock time to verify that the date/ time stays the same eventhough the device was powered off 

## M.2 Key M

Out of the box, reComputer Industrial includes a 128GB SSD connected to the M.2 Key M slot, which is pre-installed with JetPack system.

### Connection Overview 

If you want to remove the included SSD and install a new one, you can follow the steps below. Here we only recommend to use Seeed SSDs with [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) and [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) storage because we have only tested those SSDs. Further this interface supports PCIe Gen4.0 SSDs.

- **Step 1:** Remove the pre-installed SSD screw

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **Step 2:** Remove the SSD by sliding away from the SSD connector

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **Step 3:** Insert a new SSD and tighten back the screw

### Usage

We will explain how to do a simple benchmark on the connected SSD 

- **Step 1:** Check the write speed by executing the below command

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Step 2:** Check the read speed by executing the below commands. Make sure to execute this after executing the above command for write speed.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

reComputer Industrial comes with a mini PCIe connector that supports 4G and LoRa modules. However, you can only connect either a 4G module or a LoRa module at once. 

### 4G Module Connection Overview

Currently this board supports EC25EUXGA and EC20CEHCLG modules.

- **Step 1:** Power off the board if it is already on

- **Step 2:** Remove the included standoff. This standoff is only needed if you are using the M.2 Key B interface

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **Step 3:** Slide in the 4G module to the mini PCIe slot, use the pre-installed screws and screw them to the 2 holes to secure the 4G module in place

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **Step 4:** Connect an antenna to the the antenna connector labelled as **MAIN**. Here you need to use an IPEX connector

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **Step 5:** Insert a 4G-enabled nano SIM card to the SIM card slot on the board making sure the gold surface of the SIM card is facing down. Here insert the card all the way in so that it will bounce back after hitting the internal spring and lock in place.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
If you want to remove the SIM card, push the card in to hit the internal spring so that the SIM will come out of the slot
:::

- **Step 6:** Add a jumper between **SIM_MUX_SEL** and **GND** pins on the **J8 (Control and UART) Header**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **Step 6:** Power on the board

### 4G Module Usage - Test Dialing

When using the EC25 module, the module will automatically start and will be ready to use. However, when using the EC20 module, you need to reset the module for it to work

- **Step 1:** If you are using EC25 module, you can skip this step. However if you are using EC20 module, enter the following commands to access GPIO309 pin which is responsible to reset the 4G module

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

For EC25 module, LED2 will light up in green as soon as the board is booted up. For EC20 module, LED2 will light up in green after resetting the module as explained above

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

- **Step 2:** Install minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Step 3:** Enter the serial console of the connected 4G module so that we can enter AT commands and interact with the 4G module

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Step 4:** Press **Ctrl+A** and then press **E** to turn on local echo 

- **Step 5:** Enter the command **"AT"** and press enter. If you see the response as "OK", the 4G module is working properly

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **Step 6:** Enter the command **"ATI"** to check the module information

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **Step 7:** To test the module, enter the below command to call another phone number 

```sh
ATD<phone_number>;
```

And you will see the below output

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

If the entered phone number can receive the call, the module is working as expected

### 4G Module Usage - Connect to Internet

#### EC25 module

If you are using the EC25 module, follow the below steps 

- **Step 1:** After opening the serial console of the 4G module as explained above (4G Module Usage - Test Dialing section), execute the following command to connect to the internet. Here replace **YOUR_APN** with the APN of your network provider

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

On successful connection, it should output **OK** as you can see from the image below

- **Step 2:** Type **ifconfig** and you will see an IP address on the **usb0** interface

<div align="center"><img width ="0" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **Step 3:** You can try to ping a website as follows to check whether there is internet connectivity

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### EC20 module

If you are using the EC20 module, follow the below steps

- **Step 1:** If you have already reset the 4G module as explained in the previous section (4G Module Usage - Test Dialing section) for EC20 module, you can skip this step. However, if you have not yet done it, please do it now

- **Step 2:** Enter the serial console of the 4G module and enter the following command to set to ECM mode

```sh
AT+QCFG="usbnet",1
```

- **Step 3:** Reset the 4G module

- **Step 4:** Inside the 4G module console, execute the following command to connect to the internet. Here replace **YOUR_APN** with the APN of your network provider

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **Step 6:** Type **ifconfig** and you will see an IP address on the **usb1** interface

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **Step 7:** You can try to ping a URL as follows to check whether there is internet connectivity

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### LoRa Module Connection Overview

- LoRa RF works. But need to work on packet_forwarder for TTN

Currently this board supports WM1302 SPI module. You can either use [US version](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) or [EU version](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) which is available on our Bazaar.

- **Step 1:** Power off the board if is already on

- **Step 2:** Slide in the LoRa module to the mini PCIe slot and use the pre-installed screws and screw them to the 2 holes to secure the 4G module in place

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **Step 3:** Connect an antenna to the the antenna connector. Here you need to use an IPEX connector

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
Make sure there is no jumper between **SIM_MUX_SEL** and **GND** pins on the **J8 (Control and UART) Header**. This jumper is only needed when using 4G modules
:::

- **Step 4:** Power on the board

### LoRa Module Usage - Testing LoRa RF

When the LoRa module is connected, you will see the green and blue LEDs on the module light up

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **Step 1:** Enter the below command to check whether the LoRa module is detected by the system

```sh
i2cdetect -r -y 7
```

If you see the below output, the module is detected by the system

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **Step 2:** Enter the below commands to compile and build the LoRa signals transmitting tool

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

If you see the below result and the LED on the LoRa module turns RED, that means the module is trasmitting RF signals successfully

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

To stop transmitting, you can press **CTRL + C** on the keyboard.

### LoRa Module Usage - Connect to TTN

Now we will connect to TTN (The Things Network) and use the reComputer Industrial as a TTN LoRaWAN gateway

- **Step 1:** Enter the below to make the packet forwarder ready
```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **Step 2:** Run the following according to the LoRa module you are using. Here we have tested SPI US915 version

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

However, the commands for different other modules are as follows

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

After running the above command, you will see the below output with last line showing the **concentrator EUI** information. Please keep this information because we will use it later when setting up the gateway with TTN

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **Step 3:** Visit [this URL](https://console.cloud.thethings.network) to enter the TTN console and select a region of your choice

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **Step 4:** Login if you already have an account, or sign up for a new account if you do not have one

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **Step 5:** Click **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **Step 6:** Click **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **Step 7:** Enter the **Concentrator EUI** that you obtained before inside the **Gateway EUI** section and click **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>


- **Step 8:** Enter the **Frequency plan** according to the LoRa module you are using. Here we are using US915 verison of the module and therefore have selected **United Stated 902-928 MHz, FSB 2 (used by TTN)**. After that click **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
The **Gateway ID** has been filled automatically for you. However, you can change it to anything you prefer. **Gateway name** is not a must to fill. However, you can fill it as well according to your preference
:::

- **Step 9:** Make note of the **Gateway Server Address** on the main homepage of the gateway

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **Step 9:** On the reTerminal Industrial, edit the **global_conf_json** file that we used along with the **lora_pkt_fwd** command. Here you need to change the **gateway_ID**, **server_address**, **serv_port_up** and **serv_port_down** options as follows 

  - gateway_ID: Concentrator EUI from device
  - server_address: Gateway Server Address from TTN
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **Step 10:** Rerun the packet forwarder

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

If you see the below output, that means the device has successfully connected with TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reComputer Industrial comes with a M.2 Key B connector that supports 4G and 5G modules. Currently we have tested **SIM8202G-M2 5G module**

### 5G Module Connection Overview

- **Step 1:** Power off the board if it is already on

- **Step 2:** Make sure the standoff is in place and then remove the top screw on the standoff

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **Step 2:** Slide in the 5G module to the M.2 Key B slot and screw in the standoff screw to secure the 5G module in place (talk about standoff)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **Step 3:** Connect 4 antennas to the the antenna connectors on the module. Here you need to use an IPEX 4 connector

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **Step 4:** Insert a 5G-enabled nano SIM card to the SIM card slot on the board making sure the gold surface of the SIM card is facing down. Here insert the card all the way in so that it will bounce back after hitting the internal spring and lock in place.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
If you want to remove the SIM card, push the card in to hit the internal spring so that the SIM will come out of the slot
:::

- **Step 5:** Power on the board

### 5G Module Usage - Test Dialing

When using the SIM8202G-M2 5G module, the module will not automatically start. So we first need to toggle a few GPIOs to make it start

- **Step 1:** Enter the following to start the 5G module

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 0 > value

cd..
echo 341 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 330 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

Once the above is executed, LED2 will light up in green as below 

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **Step 2:** Install minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **Step 3:** Enter the serial console of the connected 5G module so that we can enter AT commands and interact with the 5G module

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **Step 4:** Enter the command **"AT"** and press enter. If you see the response as "OK", the 5G module is working properly

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **Step 6:** Enter the command **"ATI"** to check the module information

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>


- **Step 7:** To test the module, enter the below command to call another phone number 

```sh
ATD<phone_number>;
```

And you will see the below output

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G Module Usage - Connect to Internet

Coming soon

## DI/ DO 

reComputer Industrial supports 4 digital input and 4 digital output channels, all of which are optically isolated to effectively protect the mainboard from voltage spikes or other electrical disturbances. There is also a CAN interface on this same connector which we will discuss later in this wiki

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO Pin Assignment Table

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Label Name</th>
      <th>Schematic Signal</th>
      <th>Module Pin Number</th>
      <th>BGA Number</th>
      <th>GPIO Number</th>
      <th>V/A Limits</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Input</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>12V/ 20mA current in total</td>
      <td rowSpan={4}>12V Digital Input, ground signal needs to<br />be connected to GND_DI (Pin2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PAC.06</td>
      <td>492</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>454</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PH.00</td>
      <td>391</td>
    </tr>
    <tr>
      <td rowSpan={4}>Output</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>40V/40mA load per pin</td>
      <td rowSpan={4}>Digital output, maximum withstand<br />voltage 40V, ground signal needs to be<br />connected to GND_DO(Pin8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PI.01</td>
      <td>400</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PI.02</td>
      <td>401</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PH.07</td>
      <td>398</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>CAN bus with standard differential signals, <br />ground signal needs to be connected to GND_ISO (Pin 12)</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>Ground</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>The reference ground signal for the 12V Digital<br />Input, which is also the return path for the DI</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>The reference ground signal of the digital output, which is also the return path of the DO</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>The reference ground signal for CAN</td>
    </tr>
  </tbody>
</table>


### Connection Overview for DI

You can make the connection for DI by following the diagram below. It is better to add a resistor in series for the DI line. Here we have tested with a 4.7kΩ resistor connected to the DI1 pin.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### Usage for DI

You need to input a voltage of 12V on the DI line in order to get detected as an input

- **Step 1:** Make the connetions as shown above to **DI1 pin** and input **12V**

- **Step 2:** Open the GPIO for DI1 as follows

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
You can refer the **DI/ DO Pin Assignment Table** to find the GPIO number and BGA number. In the above example, for DI1 pin, GPIO number is 453 and BGA number is PQ.05
:::

- **Step 3:** Execute the following to check the status

```sh
cat value
```

If it outputs 0, that means there is 12V input. If it outputs 1, that means there is no input voltage.

### Connection Overview for DO

You can make the connection for DO by following the diagram below. It is better to add a resistor in series for the DO line. Here we have tested with a 4.7kΩ resistor

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### Usage for DO

Here you need to connect a load as mentioned in the above diagram. The easiest way to test this would be to connect a multimeter if you have access to one, or else connect a load that requires less than 40V maximum voltage

- **Step 1:** Make the connetions as shown above to **DO1 pin** and input **40V as max**

- **Step 2:** Open the GPIO for D01 as follows

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
You can refer the **DI/ DO Pin Assignment Table** to find the GPIO number and BGA number. In the above example, for DO1 pin, GPIO number is 399 and BGA number is PI.00
:::

- **Step 3:** Execute the following to turn on the pin

```sh
echo 1 > value
```

If the load is turned on or the multimeter outputs the voltage that you have input, the test it is functioning properly.

## CAN

reComputer Industrial features a CAN interface that supports the CAN FD (Controller Area Network Flexible Data-Rate) protocol at 5Mbps. The CAN interface is isolated using capacitive isolation, which provides excellent EMI protection and ensures reliable communication in industrial and automation applications. A terminal resistor of 120Ω has been installed by default and you can toggle this resistor ON and OFF using GPIO.

Note: The CAN interface uses an isolated power supply, which means that the ground signal for external devices connected to the CAN interface should be connected to the CG pin

### Connection Overview with USB to CAN Adapter

To test and interface with CAN bus, connect a USB to CAN adapter to the CAN connectors on the board as shown below

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

Here we have used [USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) available on our Bazaar.

### Usage with USB to CAN Adapter

- **Step 1:** Download the driver for the USB to CAN adapter you are using from the manufacturer's website and install it. In our case, according to the adapter that we used, the drivers can be found [here](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **Step 2:** Some adapters also come with the necessary software for the PC in order to communicate with the CAN device. In our case, according to the adapter that we used, we have downloaded and installed the software which can be found [here](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **Step 3:** Open a terminal window on the reComputer Industrial and execute the following commands to configure and enable the CAN interface

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Step 4:** Type **ifconfig** on the terminal and you will see the CAN interface in enabled

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Step 5:** Open the CAN software that you have installed before. In this case, we will open the software that we installed according to the CAN adapter that we are using

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **Step 6:** Connect the USB to CAN adapter to the PC and open **Device Manager** by searching it on windows search bar. Now you will see the connected adapter under **Ports (COM & LPT)**. Make a note of the serial port listed here. According to the below image, the serial port is **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **Step 7:** Open the CAN software, click **Refresh** next to **COM** section, click the drop-down-menu and select the serial port according to the connected adapter. Keep the **COM bps** at default and click **Open**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **Step 8:** Keep the **Mode** and **CAN bps** at default, change the **Type** to **Standard frame** and click **Set and Start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **Step 9:** On reComputer Industrial, execute the following command to send a CAN signal to the PC

```sh
cansend can0 123#abcdabcd
```

Now you will see the above signal received by the software as shown below

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **Step 10:** On reComputer Industrial, execute the following command to wait for receiving CAN signals from the PC

```sh
candump can0 &
```

- **Step 11:** On the CAN software, click **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

Now you will see it received by reComputer Industrial as follows

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### Connection Overview with reTerminal DM

If you have access to a [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html), you can communicate with it directly because reTerminal DM also has a CAN interface.

Refer to the below image to connect reComputer Industrial and reTerminal DM via CAN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### Usage with reTerminal DM

- **Step 1:** Before using reTerminal DM, visit [this wiki](https://wiki.seeedstudio.com/reterminal-dm) to get started with reTerminal DM

- **Step 2:** Open a terminal window on the reComputer Industrial and execute the following commands to configure and enable the CAN interface

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Step 3:** Open a terminal window on the reTerminal DM and execute the following commands to configure and enable the CAN interface

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Step 4:** Open a terminal window on the reTerminal DM and execute the following commands to configure and enable the CAN interface

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **Step 5:** If you type **ifconfig** on both devices, you will see the CAN interfaces are enabled 

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **Step 6:** On the reTerminal DM, execute the following to wait for receiving CAN signals from the reComputer Industrial

```sh
candump can0 &
```

- **Step 7:** On the reComputer Industrial, execute the following command to send a CAN signal to the reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

Now you will see it received by reTerminal DM as follows

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Step 8:** Repeat **step 6 and step 7** but interchanging the devices. Use reTerminal DM to send CAN signals and use reComputer Industrial to receive them

## RS232/ RS422/ RS485 interfaces

reComputer Industrial has a DB9 connector which supports RS232, RS422 and RS485 communication protocols and there is a DIP switch panel onboard to switch between the different interface options

You can see the DIP switch panel as below:

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
Make sure to remove the yellow plastic cover before using the DIP switch panel
:::

And the below table explains the different modes based on the DIP switch positions 

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>Mode</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>Pure RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422 with termination resistor</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>Pure RS-232</td>
      <td>1T/1R RS-232 co-exists with RS485</td>
    </tr>
    <tr>
      <td>application without the need for the bus</td>
    </tr>
    <tr>
      <td>switch IC (for special usage).</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 with termination resistor</td>
    </tr>
    <tr>
      <td>TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>Low Power</td>
      <td rowSpan={2}>All I/O pins are High Impedance</td>
    </tr>
    <tr>
      <td>Shutdown</td>
    </tr>
  </tbody>
</table>

:::note
Out of the box, the default mode of the switches will be set to RS485 with 010 from factory
:::

The above table takes into account the first three switches of the DIP switch panel. However, the fourth switch is responsible to toggle the slew rate which is directly related to the data rate 

<table>
  <thead>
    <tr>
      <th />
      <th>Status</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />This RS232/RS422/RS485 Multiprotocol Transceiver limits the communication rateas follows :<br />RS-232: MaximumData Rate is 1.5Mbps<br />RS-485/RS-422; MaximumData Rate is 10Mbps<br />The actual Maximum Data Rate depends on the Jetson SO Mused</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: Maximum Data Rate is 250Kbps<br />RS-485/RS-422: Maximum Data Rate is 250kbps</td>
    </tr>
  </tbody>
</table>

Here we will be using USB to RS232, RS485 and RS422 adapters in order to test the interfaces. So before moving on, you need to install a serial terminal application on your PC. Here we recommend you to install **Putty** which is easy to setup and use.

- **Step 1:** Visit [this website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and download Putty according to your PC architecture 

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

Here we have selected Putty according to the PC that we used which is a X86 windows 64-bit machine

- **Step 2:** Open the downloaded setup and go through the prompts to install the application

### General Connection Overview

You can refer to the pin numbering of DB9 connector and the table to make the connections

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>MODE</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PIN</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

### RS232 Connection Overview 

Here you can use a USB to RS232 adapter to test the interface. We have used [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) for our testing.

- **Step 1:** Turn off the board

- **Step 2:** Here we have 2 options to set the DIP switches. Either in 001 mode or 101 mode. The switch positions for each mode is shown below

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **Step 3:** Connect the USB to RS232 adapter to the DB9 connector. Here we have connected the adapter that we have mentioned above 

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **Step 4:** Connect the other end to one of the USB ports on your PC

- **Step 5:** Turn on the board

### RS232 Usage

- **Step 1:** You may need to install a driver for the adapter that you are using or windows will automatically install the driver for you. Go to Device Manager by typing **Device Manager** inside windows search and check whether you can see the conenected adapter as a COM device.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **Step 2:** If you cannot see the adapter, you need to install the driver according to the adapter that you are using. You can generally find these drivers on the manufacturer website. For the adapter that we are using, you can [this page](https://www.ugreen.com/pages/download), search for **20201** as the model number and download the driver accordingly 

- **Step 3:** Open Putty on the PC, select the **Terminal** section set the following

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Step 4:** Select **Session**, under **Coonection type**, select **Serial**, set the serial port number according to what you see on **Device Manager**, keep the Speed as default (9600) and click **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **Step 4:** On the reTerminal Industrial terminal window, type the following to send a signal from the reComputer to the PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

Now you will see this message displayed on Putty

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **Step 5:** On the reTerminal Industrial terminal window, type the following to wait for receiving signals from the PC

```sh
sudo cat /dev/ttyTHS0
```

- **Step 6:** On Putty, type anything, press **ENTER** and it will be displayed on the reComputer Industrial terminal window

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 Connection Overview 

Here you can use a USB to RS422 adapter to test the interface. We have used [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) for our testing.

- **Step 1:** Turn off the board

- **Step 2:** Here we have 2 options to set the DIP switches. Either in 000 mode or 100 mode. The switch positions for each mode is shown below

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **Step 3:** Connect the USB to RS422 adapter to the DB9 connector using Jumper wires as shown below. Here we have connected the adapter that we have mentioned above 

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **Step 4:** Connect the other end to one of the USB ports on your PC

- **Step 5:** Turn on the board

### RS422 Usage

- **Step 1:** You may need to install a driver for the adapter that you are using or windows will automatically install the driver for you. Go to Device Manager by typing **Device Manager** inside windows search and check whether you can see the connected adapter as a COM device.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Step 2:** If you cannot see the adapter, you need to install the driver according to the adapter that you are using. You can generally find these drivers on the manufacturer website. For the adapter that we are using, you can [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Step 3:** Open Putty on the PC, select the **Terminal** section set the following

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Step 4:** Select **Session**, under **Coonection type**, select **Serial**, set the serial port number according to what you see on **Device Manager**, keep the Speed as default (9600) and click **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Step 4:** On the reTerminal Industrial terminal window, type the following to send a signal from the reComputer to the PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

Now you will see this message displayed on Putty

- **Step 5:** On the reTerminal Industrial terminal window, type the following to wait for receiving signals from the PC

```sh
sudo cat /dev/ttyTHS0
```

- **Step 6:** On Putty, type anything, press **ENTER** and it will be displayed on the reComputer Industrial terminal window

### RS485 Connection Overview 

Here you can use a USB to RS422 adapter to test the interface. We have used [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) for our testing.

- **Step 1:** Turn off the board

- **Step 2:** Here we have 3 options to set the DIP switches. Either in 010 mode or 011 mode or 110 mode. The switch positions for each mode is shown below

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **Step 3:** Connect the USB to RS422 adapter to the DB9 connector using Jumper wires as shown below. Here we have connected the adapter that we have mentioned above 

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **Step 4:** Connect the other end to one of the USB ports on your PC

- **Step 5:** Turn on the board

### RS485 Usage

- **Step 1:** You may need to install a driver for the adapter that you are using or windows will automatically install the driver for you. Go to Device Manager by typing **Device Manager** inside windows search and check whether you can see the conenected adapter as a COM device.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **Step 2:** If you cannot see the adapter, you need to install the driver according to the adapter that you are using. You can generally find these drivers on the manufacturer website. For the adapter that we are using, you can [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **Step 3:** Open Putty on the PC, select the **Terminal** section set the following

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Step 4:** Select **Session**, under **Coonection type**, select **Serial**, set the serial port number according to what you see on **Device Manager**, keep the Speed as default (9600) and click **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **Step 4:** On the reTerminal Industrial terminal window, type the following to send a signal from the reComputer to the PC

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

Now you will see this message displayed on Putty

- **Step 5:** On the reTerminal Industrial terminal window, type the following to wait for receiving signals from the PC

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **Step 6:** On Putty, type anything, press **ENTER** and it will be displayed on the reComputer Industrial terminal window

## Gigabit Ethernet Connectors

There are two Gigabit Ethernet (10/100/1000M) Connectors on the reComputer Industrial and they function in different ways

- The leftmost connector is directy connected to the Jetson module and is able to provide PoE functionality with **PSE 802.3 af, 15W** specification. This means you can connect a PoE IP camera or any other PoE device to this port to provide power to the connected device.
- The other connector is connected via a PCIe to Ethernet (LAN7430-I/Y9X) module 

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

There are 2 LEDs (green and yellow) on each Ethernet port which indicates the following

- Green LED: ON only when connected to 1000M network
- Yellow LED: Shows the network activity status

## USB

reComputer Industrial comes with 3x USB3.2 connectors onboard and has the following features:
- On the dual stacked USB connectors, the upper and lower USB ports share a current-limiting IC, with a total power supply capacity of 2.1A maximum output current (single can also be 2.1A). If over 2.1A, it will enter the over-current protection state.
- On the single USB connector next to the dual stacked USB connectors, it has a total power supply capacity of 2.1A maximum output current. If over 2.1A, it will enter the over-current protection state.
- Orin NX module comes with 3 USB3.2, only one of which is used in reComputer and converted to 3 ways. (USB3.1 TYPE-A x2 - J4 and USB3.1 TYPE-A
x1 -J3).
- Only supports USB Host, not Device mode
- Provide 5V 2.1A
- Hot-swappable

### Usage 

We will explain how to do a simple benchmark on a connected USB flash drive

- **Step 1:** Check the write speed by executing the below command

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **Step 2:** Check the read speed by executing the below commands. Make sure to execute this after executing the above command for write speed.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## Configurable LED

There is a Green color LED located on the board as shown below. By default it is acting as the LED which shows the device is running properly. However, you can program this LED to turn ON and OFF by the system as well

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### Usage 

- **Step 1:** Enter the following commands on a terminal window to access the Green color LED

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **Step 2:** Turn OFF the LED

```sh
echo 0 > value 
```

- **Step 3:** Turn ON the LED

```sh
echo 1 > value 
```

If you have finished using the LED, you can execute the following

```sh
cd ..
echo 329 > unexport
```

## Monitor System Performance

We can use **jetson stats** application to monitor the temperatures of the system components and check other system details such as 

- View CPU, GPU, RAM utilizations
- Change power modes
- Set to max clocks 
- Check JetPack information

- **Step 1:** On the reComputer Industrial terminal windows, type the following 

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **Step 2:** Reboot the board

```sh
sudo reboot
```

- **Step 3:** Type the following on the terminal

```sh
jtop
```

Now **jtop** application will open as follows

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **Step 4:** Here you can cycle through the different pages of the applications and explore all the features!

## WiFi and Bluetooth

reComputer Industrial does not come with WiFi and Bluetooth out-of-the-box. But there is a reserved section on the PCB so that a WiFi/ Bluetooth module can be soldered to the board. Here we have reserved the space to support a **BL-M8723DU1** module. 

### Connection Overview 

- **Step 1:** If you want to solder the **BL-M8723DU1** module by yourself, you can solder it. But we do not recommend this because if you damage the board in the process, the warranty will be void. What we recommend is to use our professional service to help you solder this module onto the board and you can send an email to order@seeed.cc with your request.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **Step 2:** Connect two antennas to the two antenna connectors on the board for WiFi and Bluetooth. Here you need to use an IPEX connector

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### Usage

- **Step 1:** Turn on the board and once the device boots into Ubuntu Desktop, click on the drop-down menu at the top right corner, navigate to `Settings > Wi-Fi` and toggle the button on the title bar to enable WiFi. After that select a WiFi network, enter the required password and connect to it

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **Step 2:** On the same window, choose **Bluetooth** and toggle the button on the title bar to enable Bluetooth. After that select a Bluetooth device to connect to it

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial comes with a TPM interface to connect an external TPM module. Here we have tested with a Infineon SLB9670 based TPM2.0 Module.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### Connection Overview 

Connect the TPM module to the TPM connector as shown below 

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### Usage

Check whether the TPM module is loaded properly by executing the below commands

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

And you will see the output as follows

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## Max Performance on reComputer Industrial

If you want to enable maximum performance on the reComputer Industrial, please follow the below instructions 

- **Step 1:** Enter the below command to enable the maximum power mode 

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

Here it will ask to type **YES** in order to reboot the board  

- **Step 2:** Once the board is booted, enter the following command to set the CPU clocks to the maximum frequency 

```sh
sudo jetson_clocks
```

## GPIO Table 

You can access the GPIO table of the reComputer Industrial to get familiar with all the pin mappings.

Execute the following inside a terminal to access it

```sh
sudo cat /sys/kernel/debug/gpio
```

And you will see the output as follows

```sh
gpiochip2: GPIOs 300-315, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-300 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-301 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-302 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-303 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-304 (hst_wake_bt         )
 gpio-305 (bt_wake_hst         )
 gpio-306 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-307 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-308 (can_120R_en         )
 gpio-309 (M2B_PCIe_rst        )
 gpio-310 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-311 (PCIe_ETH_rst        )
 gpio-312 (M2B_WOWWAN          )
 gpio-313 (M2B_DPR_3V3         )
 gpio-314 (SIM_MUX_SEL         )
 gpio-315 (gpio_pin15          )

gpiochip1: GPIOs 316-347, parent: platform/c2f0000.gpio, tegra234-gpio-aon:
 gpio-316 (PAA.00              )
 gpio-317 (PAA.01              )
 gpio-318 (PAA.02              )
 gpio-319 (PAA.03              )
 gpio-320 (PAA.04              )
 gpio-321 (PAA.05              |fixed-regulators:reg) out hi
 gpio-322 (PAA.06              )
 gpio-323 (PAA.07              )
 gpio-324 (PBB.00              )
 gpio-325 (PBB.01              )
 gpio-326 (PBB.02              )
 gpio-327 (PBB.03              )
 gpio-328 (PCC.00              )
 gpio-329 (PCC.01              )
 gpio-330 (PCC.02              )
 gpio-331 (PCC.03              |mux                 ) out hi
 gpio-332 (PCC.04              )
 gpio-333 (PCC.05              )
 gpio-334 (PCC.06              )
 gpio-335 (PCC.07              )
 gpio-336 (PDD.00              )
 gpio-337 (PDD.01              )
 gpio-338 (PDD.02              )
 gpio-339 (PEE.00              )
 gpio-340 (PEE.01              )
 gpio-341 (PEE.02              )
 gpio-342 (PEE.03              )
 gpio-343 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-344 (PEE.05              )
 gpio-345 (PEE.06              )
 gpio-346 (PEE.07              )
 gpio-347 (PGG.00              )
gpiochip0: GPIOs 348-511, parent: platform/2200000.gpio, tegra234-gpio:
 gpio-348 (PA.00               |fixed-regulators:reg) out lo
 gpio-349 (PA.01               )
 gpio-350 (PA.02               )
 gpio-351 (PA.03               )
 gpio-352 (PA.04               )
 gpio-353 (PA.05               )
 gpio-354 (PA.06               )
 gpio-355 (PA.07               )
 gpio-356 (PB.00               )
 gpio-357 (PC.00               )
 gpio-358 (PC.01               )
 gpio-359 (PC.02               )
 gpio-360 (PC.03               )
 gpio-361 (PC.04               )
 gpio-362 (PC.05               )
 gpio-363 (PC.06               )
 gpio-364 (PC.07               )
 gpio-365 (PD.00               )
 gpio-366 (PD.01               )
 gpio-367 (PD.02               )
 gpio-368 (PD.03               )
 gpio-369 (PE.00               )
 gpio-370 (PE.01               )
 gpio-371 (PE.02               )
 gpio-372 (PE.03               )
 gpio-373 (PE.04               )
 gpio-374 (PE.05               )
 gpio-375 (PE.06               )
 gpio-376 (PE.07               )
 gpio-377 (PF.00               )
 gpio-378 (PF.01               )
 gpio-379 (PF.02               )
 gpio-380 (PF.03               )
 gpio-381 (PF.04               )
 gpio-382 (PF.05               )
 gpio-383 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-384 (PG.01               )
 gpio-385 (PG.02               )
 gpio-386 (PG.03               )
 gpio-387 (PG.04               )
 gpio-388 (PG.05               )
 gpio-389 (PG.06               )
 gpio-390 (PG.07               |cd                  ) in  lo IRQ
 gpio-391 (PH.00               )
 gpio-392 (PH.01               )
 gpio-393 (PH.02               )
 gpio-394 (PH.03               )
 gpio-395 (PH.04               )
 gpio-396 (PH.05               )
 gpio-397 (PH.06               )
 gpio-398 (PH.07               )
 gpio-399 (PI.00               )
 gpio-400 (PI.01               )
 gpio-401 (PI.02               )
 gpio-402 (PI.03               )
 gpio-403 (PI.04               )
 gpio-404 (PI.05               )
 gpio-405 (PI.06               )
 gpio-406 (PJ.00               )
 gpio-407 (PJ.01               )
 gpio-408 (PJ.02               )
 gpio-409 (PJ.03               )
 gpio-410 (PJ.04               )
 gpio-411 (PJ.05               )
 gpio-412 (PK.00               )
 gpio-413 (PK.01               )
 gpio-414 (PK.02               )
 gpio-415 (PK.03               )
 gpio-416 (PK.04               )
 gpio-417 (PK.05               )
 gpio-418 (PK.06               )
 gpio-419 (PK.07               )
 gpio-420 (PL.00               )
 gpio-421 (PL.01               )
 gpio-422 (PL.02               |nvidia,pex-wake     ) in  hi ACTIVE LOW
 gpio-423 (PL.03               )
 gpio-424 (PM.00               )
 gpio-425 (PM.01               )
 gpio-426 (PM.02               )
 gpio-427 (PM.03               )
 gpio-428 (PM.04               )
 gpio-429 (PM.05               )
 gpio-430 (PM.06               )
 gpio-431 (PM.07               )
 gpio-432 (PN.00               )
 gpio-433 (PN.01               )
 gpio-434 (PN.02               )
 gpio-435 (PN.03               )
 gpio-436 (PN.04               )
 gpio-437 (PN.05               )
 gpio-438 (PN.06               )
 gpio-439 (PN.07               )
 gpio-440 (PP.00               )
 gpio-441 (PP.01               )
 gpio-442 (PP.02               )
 gpio-443 (PP.03               )
 gpio-444 (PP.04               )
 gpio-445 (PP.05               )
 gpio-446 (PP.06               )
 gpio-447 (PP.07               )
 gpio-448 (PQ.00               )
 gpio-449 (PQ.01               )
 gpio-450 (PQ.02               )
 gpio-451 (PQ.03               )
 gpio-452 (PQ.04               )
 gpio-453 (PQ.05               )
 gpio-454 (PQ.06               )
 gpio-455 (PQ.07               )
 gpio-456 (PR.00               )
 gpio-457 (PR.01               )
 gpio-458 (PR.02               )
 gpio-459 (PR.03               )
 gpio-460 (PR.04               )
 gpio-461 (PR.05               )
 gpio-462 (PX.00               )
 gpio-463 (PX.01               )
 gpio-464 (PX.02               )
 gpio-465 (PX.03               )
 gpio-466 (PX.04               )
 gpio-467 (PX.05               )
 gpio-468 (PX.06               )
 gpio-469 (PX.07               )
 gpio-470 (PY.00               )
 gpio-471 (PY.01               )
 gpio-472 (PY.02               )
 gpio-473 (PY.03               )
 gpio-474 (PY.04               )
 gpio-475 (PY.05               )
 gpio-476 (PY.06               )
 gpio-477 (PY.07               )
 gpio-478 (PZ.00               )
 gpio-479 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-480 (PZ.02               )
 gpio-481 (PZ.03               )
 gpio-482 (PZ.04               )
 gpio-483 (PZ.05               )
 gpio-484 (PZ.06               |cs_gpio             ) out lo
 gpio-485 (PZ.07               )
 gpio-486 (PAC.00              )
 gpio-487 (PAC.01              )
 gpio-488 (PAC.02              )
 gpio-489 (PAC.03              )
 gpio-490 (PAC.04              )
 gpio-491 (PAC.05              )
 gpio-492 (PAC.06              )
 gpio-493 (PAC.07              )
 gpio-494 (PAD.00              )
 gpio-495 (PAD.01              )
 gpio-496 (PAD.02              )
 gpio-497 (PAD.03              )
 gpio-498 (PAE.00              )
 gpio-499 (PAE.01              )
 gpio-500 (PAF.00              )
 gpio-501 (PAF.01              )
 gpio-502 (PAF.02              )
 gpio-503 (PAF.03              )
 gpio-504 (PAG.00              )
 gpio-505 (PAG.01              )
 gpio-506 (PAG.02              )
 gpio-507 (PAG.03              )
 gpio-508 (PAG.04              )
 gpio-509 (PAG.05              )
 gpio-510 (PAG.06              )
 gpio-511 (PAG.07              )
```

## Tech Support

Please do not hesitate to submit issues into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>