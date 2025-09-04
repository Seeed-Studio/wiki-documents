---
description: Micro_bit BitPlayer
title: BitPlayer
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitPlayer
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608299-82ca0e88-02a3-4a72-bb27-0d6e31d508f5.png#height=609&id=HttEj&originHeight=609&originWidth=904&originalType=binary&ratio=1&size=0&status=done&style=none&width=904) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/1.png)

## Introduction

BitPlayer provides you inspiration and excitement to make creations such as a portable piano or a smart calculator. To be easier to carry and use, BitPlayer abandoned an all-button design that a typical game controller would use in favor of a 2-axes joystick. It includes another 6 programmable buttons labeled as L, R, A, B, C and D. Besides, the BitPlayer itself features a buzzer, a vibration motor and a Grove I2 C port to give kids lively and interactive experience of game. You can easily enjoy DIY projects anywhere by installing 2 AAA batteries into the BitPlayer. As tested already, BitPlayer can interact with other devices when Bluetooth positioning is within a distance range about 10 meter. If you want to implement a remote control car, we recommend that you also prepare a [BitCar](https://docproxy.tinkergen.com/web/#/2?page_id=357).

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608604-b8c61682-56cb-4c53-aa80-90e45003792c.png#height=907&id=yenfN&originHeight=907&originWidth=905&originalType=binary&ratio=1&size=0&status=done&style=none&width=905) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/2.png)

## Tutorials

Here are some related tutorials to help you get started with BitPlayer.

### 1. Finger Speed Game

#### 1.1 Implementation

In this project, we’ll light up the LEDs in sequence by manipulating the joystick. The light will run around the screen like a looping square.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608313-1eb60ba3-e82b-4cea-baa3-0eba2906910c.png#height=266&id=FXfhp&originHeight=266&originWidth=473&originalType=binary&ratio=1&size=0&status=done&style=none&width=473) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/3.png)

#### 1.2 Write a Program

Note that in MakeCode we don’t have blocks to control the BitPlayer. Therefore we need to add a BitPlayer extension in MakeCode to make sure everything goes well. Let’s learn how to do it now!
【How to Add the BitPlayer Extension】
Let’s go to MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)

- Step 1 Click the gear icon (for settings) on the blue bar in MakeCode.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608337-28675e0d-cba2-4fcd-9e95-ea566db99f46.png#height=489&id=URYAb&originHeight=489&originWidth=1000&originalType=binary&ratio=1&size=0&status=done&style=none&width=1000) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/4.png)

- Step 2 Select “Extensions” from the drop-down list which takes you to the extensions page.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608593-1510b8dd-4f3f-49b2-8145-fd6e87b854db.png#height=699&id=AAz5P&originHeight=699&originWidth=914&originalType=binary&ratio=1&size=0&status=done&style=none&width=914) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/5.png)

- Step 3 Input the address of the BitPlayer extension into the search box: [https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608308-08990569-fce3-4dc8-a07a-ad1c3f1182e1.png#height=937&id=b9Blo&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/6.png)

> If it prompts that this extension does not exist, please close the browser and enter MakeCode again.

<!-- - Step 4 Click the extension package which takes you back to the workspace. You will see that the BitPlayer extension is then successfully added.![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608597-2ade6798-937e-47e0-8215-99e146f6d983.png#height=937&id=jyFxX&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/7.png)

Let’s move on to the task.
Firstly, add an “on start” block. Let’s create 3 variables named as LED on, x coordinate and y coordinate.
Next, set the variable “LED on” as a sprite with an ordered pair (x coordinate, y coordinate). This ordered pair will initially start from (0, 0).<br />
Then, follow this program logic to code: if the joystick is pulled up, the y coordinate will change by -1; if the joystick is pulled down, the y coordinate will change by 1; if the joystick is pulled to left, the x coordinate will change by -1; if the joystick is pulled to right, the x coordinate will change by 1.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608356-3c424c72-15e0-4ee2-895e-4eee6ec085a1.png#height=699&id=GohIO&originHeight=699&originWidth=1434&originalType=binary&ratio=1&size=0&status=done&style=none&width=1434) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/8.png)

#### 1.3 Connect a Device

Straightly slide the micro:bit into BitPlayer and be careful not to reverse it. Then connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up. If not, you need to unplug in the USB cable and connect it to the devices again.

#### 1.4 Download a Program

You have been introduced how to download a program in the [previous tutorials](https://docproxy.tinkergen.com/web/#/2?page_id=329), which can be simply concluded into steps as: rename a program, click the “Download” button and send it to the micro:bit.

#### 1.5 Run a Program

Turn on the switch on the BitPlayer and see if the micro:bit can work normally.

### 2. Remote Control Car

See [BitCar Tutorial 4.](https://docproxy.tinkergen.com/web/#/2?page_id=357)

## Course Materials

You can see course materials about the micro:bit and BitPlayer on our online learning platform Make2Learn via this address: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

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
