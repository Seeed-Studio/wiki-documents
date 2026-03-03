---
description: Micro_bit bitwear
title: BitWear
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitWear
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991110-809f156c-23cb-47b0-82fd-15fc1e221ba2.png#align=left&display=inline&height=670&originHeight=670&originWidth=1021&size=0&status=done&style=none&width=1021) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/1.png)

## Introduction

BitWear is a low-cost compact accessory for micro:bit users to make fun wearable gadgets. The BitWear is simply attached to the micro:bit with 5 screws (M3x5mm), and powered with two CR2032 batteries, which are securely clipped in and unable to be taken out unless you unscrew the BitWear. There is a vibration motor, a buzzer and an addressable RGB LED on board, all designed for your fun wearable projects. Our goal design for the BitWear is to maximize micro:bit functions while minimizing the space footprint to provide new micro:bit users with enriched wearable experience.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991124-7551ded4-89b3-4524-8ea2-d43cf23c85dd.png#align=left&display=inline&height=547&originHeight=547&originWidth=1099&size=0&status=done&style=none&width=1099) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/2.png)

:::note
Users should prepare two C2032 batteries and five M3*5 screws separately.
:::

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991126-2181a46f-99d0-4ee3-b587-3c82a082af0b.png#align=left&display=inline&height=527&originHeight=527&originWidth=995&size=0&status=done&style=none&width=995) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/3.png)

:::tip
When testing a program, do not install batteries on BitWear first. Use a USB cable instead to provide power and ensure program transmission. Only install batteries when a program completes and offline implementation is required.
:::

## Tutorials

Here are some related tutorials to help you get started with the BitWear.

### 1. Wake-Up Alarm

#### 1.1 Implementation

This is a magical gadget that can wake you up! Once the project completes, use the double-sided tape to secure the gadget onto your back. Slowly bend down as if you are falling to sleep, and see if it can send out a remind.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991109-4bb68ed4-02eb-4499-b6df-bcebc2efe496.png#align=left&display=inline&height=522&originHeight=522&originWidth=928&size=0&status=done&style=none&width=928) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/4.png)

#### 1.2 Write a Program

First, add a forever block. Connect the block show icon inside. Keep this heart icon on it.
Next, add an IF-THEN statement. Connect a comparison block &lt; into it. Inside the block, add the block acceleration (mg) from the tab Input to the box on the left; and input 800 into the box on the right.
Then, go to the tab Music and connect the block start melody (dadadum) repeating (once) underneath.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991101-b137ce8c-40cc-4e0f-a08b-a8b867c44cf6.png#align=left&display=inline&height=461&originHeight=461&originWidth=1303&size=0&status=done&style=none&width=1303) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/5.png)

#### 1.3 Connect a Device

Attach the BitWear onto the micro:bit. Use a USB cable to connect the micro:bit and your PC together. Ensure that the LED indicator on the micro:bit lights up.

#### 1.4 Download a Program

You have been introduced how to download a program in the [previous tutorials](https://docproxy.tinkergen.com/web/#/2?page_id=329), which can be simplified into steps as: rename a program, click the "Download" button and send it to the micro:bit.

#### 1.5 Run a Program

Turn on the power switch on the BitWear and see if the program can run normally.

### 2. Light Detector

#### 2.1 Implementation

With a BitWear attached, the micro:bit shows a smiley face if the light level is greater than 80; if not, the BitWear vibrates, and the micro:bit shows a sad face and plays the melody Baddy. (The specified light level may differ in a real scenario; you can adjust it as needed.)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991125-adfecd70-04c0-4415-9c82-829929c8e68c.png#align=left&display=inline&height=494&originHeight=494&originWidth=878&size=0&status=done&style=none&width=878) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/6.png)

#### 2.2 Write a Program

Note that MakeCode does not provide blocks to control the BitWear. Therefore we need to manually add an extension in MakeCode to make sure everything goes well. Let's learn how to do it now!
How to Add a BitWear Extension:
Go to MakeCode:
[https://makecode.microbit.org](https://makecode.microbit.org/)

<!-- - Step 1: Create a new project to enter the workspace. Click the gear icon (for settings) on the blue bar.![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991129-3a81d155-0279-412d-a66f-28ab0f9530cb.png#align=left&display=inline&height=496&originHeight=496&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/7.png)

- Step 2: Select Extensions from the drop-down list which takes you to the extensions page.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991368-facfd798-ea8e-4703-89d8-78114f26d22e.png#align=left&display=inline&height=638&originHeight=638&originWidth=834&size=0&status=done&style=none&width=834) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/8.png)

- Step 3: Input the address of the BitWear extension into the search box: [https://github.com/TinkerGen/pxt-BitWear](https://github.com/TinkerGen/pxt-BitWear)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991151-7ca03e5e-ce2a-4c82-b993-788be270b4e7.png#align=left&display=inline&height=455&originHeight=455&originWidth=1007&size=0&status=done&style=none&width=1007) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/9.png)

> If it prompts that the extension does not exist, close the browser and enter MakeCode to try again.

- Step 4: Click the extension package which takes you back to the workspace. You will see that the BitWear extension is then successfully added.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991400-25ce2189-c8b8-461d-ae36-98595d4c26a4.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/10.png)

Let's move on to the task after we added the extension.

First, add a forever block and connect an IF-THEN-ELSE statement inside.
Follow this program logic and code: if the light level is greater than 80, then the micro:bit will show a smiley face; if not, the BitWear will vibrate, and the micro:bit will show a sad face and play the melody Baddy.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991145-87f4c2d0-d211-489c-8886-8d5f257f1968.png#align=left&display=inline&height=635&originHeight=635&originWidth=1264&size=0&status=done&style=none&width=1264) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/11.png)

#### 2.3 Connect a Device

Attach the BitWear onto the micro:bit. Use a USB cable to connect the micro:bit and your PC together. Ensure that the LED indicator on the micro:bit lights up.

#### 2.4 Download a Program

You have been introduced how to download a program in the previous tutorials, which can be simplified into steps as: rename a program, click the "Download" button and send it to the micro:bit.

#### 2.5 Run a Program

Turn on the power switch on the BitWear and see if the program can run normally.

:::note
Due to no light sensor is built on a micro:bit, the micro:bit uses the LED matrix to sense the light around it. The LED actuators are constantly converted into input signals and take sample of the voltage attenuation duration, which is roughly proportional to the light level from an ambient environment.
:::

## Course Materials

You can see related course materials about the micro:bit and BitWear on our online learning platform Make2Learn via this address: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Attachments

#### [Attachment: BitWear Tutorial Source Code](https://tinkergen.com/filedownload/179236)

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
