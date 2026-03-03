---
description: Micro_bit BitMaker
title: BitMaker
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitMaker
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249977-72e43eb6-aa32-4fa3-8e31-d49d1110d946.png#height=466&id=TVoRI&originHeight=466&originWidth=800&originalType=binary&ratio=1&size=0&status=done&style=none&width=800) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/1.png)

## Introduction

BitMaker is a credit card-sized, plug and play expansion board that bridges Grove modules with a micro:bit. It incorporates 4 RGB LEDs, 1 inbuilt buzzer for playing melodies and 6 Grove ports (one is an I2C port) that allows micro:bit to connect to hundreds of modules, such as sensors, actuators, communication modules and displays.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656250001-d4b242c7-636e-430b-8565-1503c4272f34.png#height=384&id=zyWSH&originHeight=384&originWidth=1123&originalType=binary&ratio=1&size=0&status=done&style=none&width=1123) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/2.png)

:::note
After you download a program to micro:bit, make sure the BitMaker is connected to power through a micro USB cable.
:::

## Tutorials

Here are some related tutorials to help you get started with BitMaker.

### 1. Mini Music Player

#### 1.1 Implementation

This is a cool music player which can play a birthday song and flash yellow, green light.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249956-97e452a2-7a79-46f5-ab56-4f84a2333b3a.png#height=337&id=Q8LWx&originHeight=337&originWidth=599&originalType=binary&ratio=1&size=0&status=done&style=none&width=599) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/3.png)

#### 1.2 Write a Program

Note that in MakeCode we don’t have blocks to control the RGB LEDs. Therefore we need to add a Neopixel extension in MakeCode to make sure that everything goes well. Let’s learn how to do it now!
[How to Add the Neopixel Extension]
Let’s go to MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)

- Step 1 Click the gear icon (for settings) on the blue bar in MakeCode.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249950-b8584720-ef46-4f7f-83ac-0f6ac745f224.png#height=549&id=f8O2j&originHeight=549&originWidth=1124&originalType=binary&ratio=1&size=0&status=done&style=none&width=1124) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/4.png)

- Step 2 Select “Extensions” from the drop-down list which takes you to the extensions page.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249951-f3c071db-d274-45d5-b10e-f83303155562.png#height=653&id=Zd6ki&originHeight=653&originWidth=853&originalType=binary&ratio=1&size=0&status=done&style=none&width=853) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/5.png)

- Step 3 Input the address of the Neopixel extension into the search box: [https://www.adafruit.com/category/168](https://www.adafruit.com/category/168)

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249966-9061a1f4-eaea-4070-9416-d32bc76663f6.png#height=826&id=Gpf25&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/6.png)

> If it prompts that this extension does not exist, please close the browser and try again.

- Step 4 Click the extension package which takes you back to the homepage. You will see that the Neopixel extension is then successfully added.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249970-0c17f823-8b1c-4ea0-8e65-74fae74c493b.png#height=826&id=rHYia&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/7.png)

Let’s move to the task after we added the extension.

:::note
If you want to add a BitMaker extension, follow the same instruction above. BitMaker extension: [https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
:::

Firstly, add an “on start” block. Go to the tab “Music” and connect the block “start melody repeating” underneath. Select a birthday song in this block. Then drag and drop the “forever” block. Set the initial LEDs numbers as 4 and confirm the color format. Follow this program logic: the strip firstly flashes red; after 0.5 seconds, the strip flashes green and pauses for 0.5 seconds again.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249961-3f674736-8e2a-4dd3-bab0-f2177cd17f71.png#height=514&id=FqxUe&originHeight=514&originWidth=1193&originalType=binary&ratio=1&size=0&status=done&style=none&width=1193) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

#### 1.3 Connect a Device

Straightly slide the micro:bit into BitMaker and be careful not to reverse it. Then connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up. If not, you need to unplug in the USB cable and connect it to the devices again.

#### 1.4 Download a Program

You have been introduced how to download a program in the [previous tutorials](#), which can be simply concluded into steps as: rename a program, click the “Download” button and send it to the micro:bit.
<!-- [previous tutorials](#https://docproxy.tinkergen.com/web/#/2?page_id=329) -->

#### 1.5 Run a Program

Turn on the switch on the BitMaker and see if the micro:bit can work normally.

### 2. Other Tutorials

As mentioned in the beginning, BitMaker is able to bridges Grove modules with a micro:bit. We provide specific tutorials in [4.3 BitGadget Kit](#) to show you how to do that. If you have some Grove modules with you, go ahead and follow the tutorials to start your projects. If you don’t, visit our TinkerGen Shop and buy!

> BitMaker is compatible with all of the Grove modules.
<!-- [4.3 BitGadget Kit](#https://docproxy.tinkergen.com/web/#/2?page_id=325)  -->

## Course Materials

You can see course materials about the micro:bit and BitMaker on our online learning platform Make2Learn via this address: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Attachments

Attachment: https://files.seeedstudio.com/wiki/microbit_wiki_page/microbit-music player.hex

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
