---
description: How to Add Seeed boards to Arduino IDE
title: How to Add Seeed boards to Arduino IDE
keywords:
  - Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeed_Arduino_Boards
last_update:
  date: 02/02/2023
  author: w0x7ce
---


Seeed had designed so many boards that work with Arduino IDE, include,

* [Seeeduino XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO/)
* [Seeeduino Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/)
* [Seeeduino Lotus Cortex-M0+](https://wiki.seeedstudio.com/Seeeduino_Lotus_Cortex-M0-/)
* [Seeeduino LoRaWAN](https://wiki.seeedstudio.com/Seeeduino_LoRAWAN/)/GPS
* [Seeeduino Cortex M0](https://wiki.seeedstudio.com/Seeeduino-Cortex-M0/)

:::caution
The board mentioned above is the AT SAMD21 Microcontroller series,Please copy the below url to *Additional Boards Manager URLs* in the step2 .
:::

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

* Seeeduino [V3](https://wiki.seeedstudio.com/Seeeduino_v3.0/)/[4](https://wiki.seeedstudio.com/Seeeduino_v4.0/)
* [Seeeduino Lotus](https://wiki.seeedstudio.com/Seeeduino_Lotus/)
* Seeeduino Stalker [V2.3](https://wiki.seeedstudio.com/Seeeduino_Stalker_v2.3/)/[3](https://wiki.seeedstudio.com/Seeeduino_v3.0/)/[3.1](https://wiki.seeedstudio.com/Seeeduino_Stalker_V3.1/)
* [Seeeduino Lite](https://wiki.seeedstudio.com/Seeeduino_Lite/)
* [Seeeduino Mega](https://wiki.seeedstudio.com/Seeeduino_Mega/)
* [Seeeduino Mega Protoshield Kit](https://wiki.seeedstudio.com/Seeeduino_Mega_Protoshield_Kit/)
* [Seeeduino GPRS](https://wiki.seeedstudio.com/Seeeduino_GPRS/)
* [Seeeduino Ethernet](https://wiki.seeedstudio.com/Seeeduino_Ethernet/)
* [Seeeduino Cloud](https://wiki.seeedstudio.com/Seeeduino_Cloud/)
* [Seeeduino Nano](https://wiki.seeedstudio.com/Seeeduino-Nano/)
* [Seeeduino Crypto (ATmega4809 ECC608)](https://wiki.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608/)
* [LinkIt ONE](https://wiki.seeedstudio.com/LinkIt_ONE/)
* [RePhone Series](https://wiki.seeedstudio.com/RePhone/)

:::note
The board mentioned above from Seeeduino V3 to RePhone Series isn't the AT SAMD21 Microcontroller series,Please copy the below url to *Additional Boards Manager URLs* in the step2.
:::

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

Thanks to the new features of Arduino IDE, it's easy to add those board to your Arduino IDE now.

There're few step to be followed.

## Step 1. Download the latest Arduino IDE

You need a Arduino IDE that after version 1.6.4, please download one if there's no Arduino IDE in your computer.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

## Step 2. Setting your Arduino IDE

Open your Arudino IDE, click on **File > Preferences**, and copy below url to *Additional Boards Manager URLs*

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## Step 3. Board Manager

Click on **Toos > Board > Board Manager**.

Now you can search the board by name, if you need to use `LinkIt ONE`, then just search `LinkIt`; and if you need to use `RePhone Series`,
just tap `RePhone`. In this wiki, we will take `Seeeduino Stalker V3` example.

Click Seeeduino Stalker V3 then an **Install** button appear, click on it to finish the step, this process takes about 5 minutes to half an hour, which depend on the speed of your network.

![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png)

## Step 4. Select a board

After Step 3 was successful, a board named Seeeduino Stalker V3 will show up at the boards list.

Click on **Tools > Board**, *Seeeduino Stalker V3* is available now.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
