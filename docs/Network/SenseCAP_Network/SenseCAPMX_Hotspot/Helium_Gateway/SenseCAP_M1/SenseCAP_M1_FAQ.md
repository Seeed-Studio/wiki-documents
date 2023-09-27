---
description: SenseCAP M1 FAQ
title: SenseCAP M1 FAQ
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 02/14/2023
  author: Matthew
---



**How do I find the ETH or Wi-Fi MAC ID?**
------------------------------------------

The MAC ID is located on the bottom label of the Hotspot as described below. You will see both ETH and Wi-Fi MAC ID.

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

* * *

**How do I find my SN (Serial Number) from the device?**
--------------------------------------------------------

The serial number is located on the bottom label of the Hotspot as described below.

![SenseCAP M1 Serial Number](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

* * *

**What is the difference between the 2G / 4G / 8G RAM version?**
----------------------------------------------------------------

2G /4G / 8G stands for the RAM (random access memory) difference of Raspberry Pi 4 in SenseCAP M1. For the hotspot function, there would be no difference between different RAM. Also, in Seeed Online Store, we are not supposed to choose the RAM when purchasing SenseCAP M1, please note that all distribution will be random based on the stock.

* * *

**How can I find out which RAM version I have?**
------------------------------------------------

You could tell from the model name. M1-X, X refers to the RAM. e.g. M1-2915 refers to 2GB RAM while M1-4915 refers to 4GBRAM.

* * *

**Why isn't my SenseCAP M1 can’t witnessing other Helium Hotspots?**
--------------------------------------------------------------------

Some possible reasons resulting in low RF signals and short distance of transmissions of Helium Hotspots include:

*   Obstacles, including buildings, mountains, and forestry in a comparatively dense environment
*   Possible Electromagnetic Interference, Line of Sight Interference, Fresnel Zone Interference, or RF Interference existing around cities
*   Weather Conditions
*   System Operating Margin, Shadowing, and or Link Badger.

* * *

**Why isn't my SenseCAP M1 earnings/rewards are not as I expected?**
--------------------------------------------------------------------

There is a complex mechanism on the earnings and rewards. As long as your Hotspot configuration is correct, placement, no relayed status, and internet connection is solid, then you should be OK.  
If you are confused about the mechanism, you are encouraged to discuss this on the Helium channel to seek further explanations. The **[Helium Doc](https://docs.helium.com/)** is also useful for you to learn more.

* * *

**How to improve the RF signals of SenseCAP M1?**
-------------------------------------------------

Set up and place your device in a broad and obstacle-free environment (e.g., close to your window or place the antenna outside, such as a roof).

* * *

**How many volts of electricity does SenseCAP M1 might approximately use?**
---------------------------------------------------------------------------

About 5W, just as the electricity consumption of an ordinary light bulb.

* * *

**What is the recommended distance between gateways?**
------------------------------------------------------

Hotspots should not be deployed too close to one another. A good rule of thumb is to provide a minimum distance of 300 to 500 meters between Hotspots; though this could vary depending on the environment (in a dense city closer, and a more rural environment farther).

* * *

**Any extra fees for setting up SenseCAP M1?**
----------------------------------------------

The device includes a covered $40 activation fee for users to set up SenseCAP M1 and a $10 fee to set the location of SenseCAP M1 on the Helium App.

You will only pay additional fees if you reassert to another location after the first time, which is about $10. For detailed information about fees, please refer to the Helium Transaction Fees page.

* * *

**Does SenseCAP M1 support connecting to a 3rd party server other than Helium?**
--------------------------------------------------------------------------------

No, the SenseCAP M1 LoRaWAN gateway is only compatible with the Helium Network server.

* * *

**Does SenseCAP M1 support PoE?**
---------------------------------

No. 5V-3A power adapter is used to power the unit through the Type-C connector next to the Ethernet port. You will need a PoE injector and splitter to support POE on the Sensecap M1.

* * *

**As an indoor gateway, can it be used outdoors?**
--------------------------------------------------

SenseCAP M1 is an indoor gateway, so it is not designed to withstand harsh outdoor environments and it should not be placed in an outdoor environment without any extra protection.

* * *

**Are SenseCAP LoRaWAN sensors compatible with SenseCAP M1 Gateway?**
---------------------------------------------------------------------

Yes. As long as the end nodes (i.e., SenseCAP LoRaWAN Sensor series of products) are compatible with and are registered on the Helium Network, they can work with the SenseCAP M1 Gateway.

* * *

**Are SenseCAP M1's full hotspots or light hotspots?**
------------------------------------------------------

The SenseCAP M1 LoRaWAN Indoor Gateway is a full hotspot which supports both POC and data transfer.

* * *

**Will there be a hotspot for outdoor use?**
--------------------------------------------

Currently, the SenseCAP M1 is only for indoor use but we will consider the request

* * *

**Will there be light hotspots as well?**
-----------------------------------------

Yes, the SenseCAP M2 Data Only is a lightspot.

* * *

**Will there be AS923, AU915, IN865, and other frequencies?**
-------------------------------------------------------------

Currently, there are only US915 (with FCC) and EU868 (with CE) available. Other frequencies are not supported yet. We've noticed the need for different frequencies. The hardware device’s specification is in the range of 902Mhz ~ 928Mhz / 863Mhz ~ 870Mhz, hence it is configurable to different frequencies within this range. HOWEVER, after configuration, the product has to go through specific certifications to be allowed to enter different markets.

Currently, our team is focusing on the supply chain and manufacturing of US915 and EU868.

* * *

**Are all SenseCAP LoRaWAN Gateways Helium hotspots?**
------------------------------------------------------

When you google SenseCAP, you will find there are other gateways also under the name SenseCAP. Please be aware that not all the SenseCAP branded gateways are Helium hotspots, SenseCAP M1 LoRaWAN Indoor Gateway is the only one that supports Helium Network for now.

* * *

**If I buy the hotspot in Europe and bring it to India, will it auto-switch to 865 MHz?**
-----------------------------------------------------------------------------------------

Yes, it will auto-switch. But we only have CE and FCC certification, we do not have BIS certification which is required in India.

* * *

**Is the SenseCAP M1 also listed in the Helium App?**
-----------------------------------------------------

Yes, SenseCAP M1 has already been added to the Helium App!

* * *

**What type of antenna connector is on the Sensecap M1?**
---------------------------------------------------------

SenseCAP M1 has RP-SMA female connector, and the antenna is with RP-SMA male connector. Our stock fiberglass antenna all have an N-type male connector, with a provided LMR200 cable with N-female and RP-SMA male connector.

![SenseCAP M1 Antenna Connection](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

* * *

**What voltage/amps does the device run on?**
---------------------------------------------

The voltage is 5V DC.

* * *

**Do you know the size/measurements of the PCB?**
-------------------------------------------------

The size of the device is 154\*100\*44 mm and the weight is 370g.

* * *

**Some people don’t like 5GHz in their area, is it possible to turn the WiFi off on the hotspot itself?**
---------------------------------------------------------------------------------------------------------

This device is a Wi-fi transmitter. If it is not connected to the AP, it will automatically stop emitting electromagnetic waves.

* * *

**Why isn't my SenseCAP M1 not turning to the slow flash mode by pressing the button?**
---------------------------------------------------------------------------------------

Please keep pressing the button for 6-10 seconds and don’t release it. Sometimes you may have to hard-press the button on the back. If you need additional support, please visit us on Discord here.  
Please note that if SenseCAP M1 is updating its firmware, pressing the button may not change the blue LED to slow flash mode, please try 10-15 minutes later.

* * *

**When does the SenseCAP M1 exit slow flash mode?**
---------------------------------------------------

The slow flash mode will last about 10 minutes and then turn back to constant LED or fast flash mode.

If the SenseCAP M1 exits slow flash mode when configuring, please press the button for 5-10 seconds to turn back to slow flash mode and restart your configuration.

* * *

**Why does the blue LED always stay in fast flash mode?**
---------------------------------------------------------

That means SenseCAP M1 is not connected to the Internet or is trying to connect to Helium P2P Network. After each boot, SenseCAP M1 may take 5-20 minutes to connect to Helium P2P Network, which depends on your network quality.

If SenseCAP M1 has booted for more than 20 minutes, please check your network status, make sure the Ethernet cable or the Wi-Fi are fine for SenseCAP M1.

When using an Ethernet cable, please firmly press the Ethernet cable into the port to hear a "click" to ensure the cable does not fail and to ensure it is not loose.

* * *

**Steps to check your Hotspot Firmware version:**
-------------------------------------------------

1.  Long press the Hotspot Bluetooth button for 6-10s, the blue LED will be flashing slowly, then pair your hotspot.
2.  Run Diagnostics and find the Hotspot Firmware version. Alternatively you can use the SenseCAP Dashboard once registered to check your firmware.

![SenseCAP M1 Firmware Version](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![SenseCAP M1 Firmware Version Step2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![SenseCAP M1 Firmware Version Step3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

* * *

What is transmit power out of SenseCAP M1 without the antenna?
--------------------------------------------------------------

<table style={{borderCollapse: 'collapse', width: '100%', height: 125}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Frequency Plan</strong></td><td style={{width: '33.3333%', height: 21}}>EU868</td><td style={{width: '33.3333%', height: 21}}>US915</td></tr><tr style={{height: 20}}><td style={{width: '33.3333%', height: 20}}><strong>Certification</strong></td><td style={{width: '33.3333%', height: 20}}>CE</td><td style={{width: '33.3333%', height: 20}}>FCC</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Regulation Max Transmit Power</strong></td><td style={{width: '33.3333%', height: 21}}>14 dBm</td><td style={{width: '33.3333%', height: 21}}>30 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Transmit Power With Stock Antenna</strong></td><td style={{width: '33.3333%', height: 21}}>13.487 dBm</td><td style={{width: '33.3333%', height: 21}}>26.7 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Transmit Power Without Antenna</strong></td><td style={{width: '33.3333%', height: 21}}>10.687 dBm</td><td style={{width: '33.3333%', height: 21}}>25 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Stock Antenna Gain</strong></td><td style={{width: '33.3333%', height: 21}}>2.8 dBi</td><td style={{width: '33.3333%', height: 21}}>2.6 dBi</td></tr></tbody></table>


* * *

**What is the FAN Auto Control Rules?**
---------------------------------------

![SenseCAP M1 Fan Auto Control Logic](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

* * *

**What should I do if my SD card usage is above 85%?**
------------------------------------------------------

Normally you don't need to worry about the SD card usage as the system will automatically manage it. If you find your SD card could not recover from full usage, you may reboot the device to it back to normal.

If you still find it could not solve the issue, or are suggested by tech support to reset the block, you may click here to learn how to 'reset blocks'.