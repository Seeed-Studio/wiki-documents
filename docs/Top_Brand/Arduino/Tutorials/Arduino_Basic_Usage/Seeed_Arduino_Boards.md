---
description: How to Add Seeed boards to Arduino IDE
title: How to Add Seeed boards to Arduino IDE
tags:
  - Tutorial
keywords:
  - Tutorial
image: https://avatars.githubusercontent.com/u/10758833
slug: /Seeed_Arduino_Boards
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---


Seeed had designed so many boards that work with Arduino IDE, include,

* [Seeeduino XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO/)
* [Seeeduino Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/)
* [Seeeduino Lotus Cortex-M0+](https://wiki.seeedstudio.com/Seeeduino_Lotus_Cortex-M0-/)
* [Seeeduino LoRaWAN](https://wiki.seeedstudio.com/Seeeduino_LoRAWAN/)/GPS
* [Seeeduino Cortex M0](https://wiki.seeedstudio.com/Seeeduino-Cortex-M0/)

:::cautionattention
The board mentioned above is the AT SAMD21 Microcontroller series,Please copy the below url to *Additional Boards Manager URLs* in the step2 .
:::

```c
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

:::cautionattention
The board mentioned above from Seeeduino V3 to RePhone Series isn't the AT SAMD21 Microcontroller series,Please copy the below url to *Additional Boards Manager URLs* in the step2.
:::

```c++
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

 ![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json) <!--图片链接有误-->

Now you can search the board by name, if you need to use `LinkIt ONE`, then just search `LinkIt`; and if you need to use `RePhone Series`,
just tap `RePhone`. In this wiki, we will take `Seeeduino Stalker V3` example.

Click Seeeduino Stalker V3 then an **Install** button appear, click on it to finish the step, this process takes about 5 minutes to half an hour, which depend on the speed of your network.

![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png)

## Step 4. Select a board

After Step 3 was successful, a board named Seeeduino Stalker V3 will show up at the boards list.

Click on **Tools > Board**, *Seeeduino Stalker V3* is available now.

![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json)<!--图片链接有误-->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
