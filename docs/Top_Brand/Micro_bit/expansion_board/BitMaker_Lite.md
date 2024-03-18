---
description: Micro_bit BitMaker lite
title: BitMaker Lite
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitMaker_lite
last_update:
  date: 12/29/2023
  author: Seraphina
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-e058e745-c2f4-4263-8a0b-9c38faa4085d.png#align=left&display=inline&height=512&originHeight=512&originWidth=814&size=0&status=done&style=none&width=814) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

## Introduction
BitMaker Lite is a compact and simplified version of BitMaker. It has only 3 Grove ports, but this is sufficient for many projects. The plug & play convenience means that you can easily implement a project using a grove module. The included buzzer also makes possible a lot of interesting audio projects, e.g. a fruit piano. If you want to access more GPIOs, BitMaker Lite also provides breakouts of all available pins of micro:bit, you can solder header connectors to use them.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416911-961efb23-8578-4cfa-a224-29da21dcd517.png#align=left&display=inline&height=419&originHeight=419&originWidth=1156&size=0&status=done&style=none&width=1156) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/10.png)

## Tutorials
### 1. Music Player
#### 1.1 Implementation

The micro:bit plays a birthday song once when turning on.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416918-8d8828f3-a79b-45ad-a721-186f3f7756fb.png#align=left&display=inline&height=399&originHeight=399&originWidth=709&size=0&status=done&style=none&width=709) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/11.png)

#### 1.2 Write a Program
Add the block on start and connect the block start melody (dadadum) repeating (once), from the tab Music. Select a birthday song in this block.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416887-1ca9e66a-ee00-4f89-83cf-7b8faafdfa3b.png#align=left&display=inline&height=171&originHeight=171&originWidth=535&size=0&status=done&style=none&width=535) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/12.png)

#### 1.3 Connect a Device
Slide the micro:bit into BitMaker Lite and be careful not to reverse it. Connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up. If not, the USB cable may be connected mistakenly.

#### 1.4 Download a Program
You have been introduced how to download a program in the [previous tutorials](https://docproxy.tinkergen.com/web/#/2?page_id=329), which can be simplified into steps as: rename a program, click the “Download” button and send it to the micro:bit.

#### 1.5 Run a Program
Turn on the switch on the BitMaker Lite and see if the micro:bit plays the birthday song.


### 2. Fun with Accelerometer
#### 2.1 Implementation

The micro:bit shows a pattern and plays a melody accordingly every time it does different gestures.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416904-9f5c413e-032f-4651-8d51-303ca7f57420.png#align=left&display=inline&height=490&originHeight=490&originWidth=632&size=0&status=done&style=none&width=632) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/13.png)

#### 2.2 Write a Program
Follow the program logic and code:<br />
When turning on, the micro:bit shows a heart icon.<br />
When the micro:bit shakes, the screen clears and shows nothing.<br />
When the logo is straight upwards, the micro:bit shows a “North” arrow and plays the melody “jump up”.<br />
When the logo is straight downwards, the micro:bit shows a “South” arrow and plays the melody “jump down”.<br />
When the micro:bit tilts left, it shows a “West” arrow and plays the melody “dadadum”.<br />
When the micro:bit tilts right, it shows an “East” arrow and plays the melody “entertainer”.<br />
When the screen is face up, the micro:bit shows a happy face and plays the melody “power up”.<br />
When the screen is face down, the micro:bit shows a sad face and plays the melody “power down”.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416885-b70ab193-d5c2-47d1-ab29-bdb3452d6aa2.png#align=left&display=inline&height=741&originHeight=741&originWidth=982&size=0&status=done&style=none&width=982) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/14.png)

#### 2.3 Connect a Device
Slide the micro:bit into BitMaker Lite and be careful not to reverse it. Connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up. If not, the USB cable may be connected mistakenly.

#### 2.4 Download a Program
You have been introduced how to download a program in the previous tutorials, which can be simplified into steps as: rename a program, click the “Download” button and send it to the micro:bit.

#### 2.5 Run a Program
Turn on the switch on the BitMaker Lite and see if the program can run normally.

### 3. Other Projects

As mentioned from the start, BitMaker Lite is able to bridges Grove modules with a micro:bit. We provide specific tutorials in [4.2 BitStarter Kit](https://docproxy.tinkergen.com/web/#/2?page_id=403) to show you how to do that. If you have some Grove modules with you, go ahead and follow the tutorials to start your projects. If you don’t, visit our TinkerGen Shop and order some!

> BitMaker Lite is compatible with all Grove modules.

#### Adding an Extension
To enable Grove modules when a BitMaker Lite is used, we need to add an extension to MakeCode. Let’s find out how to do that:

- Go to MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)
- Create a new project to enter the workspace. Click the gear icon (for settings) on the blue bar.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416889-8342e086-2cdc-4416-bbbf-95d991f48444.png#align=left&display=inline&height=524&originHeight=524&originWidth=1072&size=0&status=done&style=none&width=1072) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/15.png)

- Select Extensions from the drop-down list which takes you to the extensions page.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-ee4ae33c-ffc2-44b8-a127-bf55f7e4e0e5.png#align=left&display=inline&height=712&originHeight=712&originWidth=931&size=0&status=done&style=none&width=931) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/16.png)

- Input the address of the BitMaker Lite extension into the search box: [https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416930-10133e74-2d1f-41d1-9a3c-1c29482f27a3.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/17.png)

> If it prompts that the extension does not exist, close the browser and enter MakeCode to try again.

- Click the extension package which takes you back to the workspace. You will see that the Grove extension is then successfully added.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416925-93ed4b5a-8d37-4841-be77-0d6564d01cc8.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/18.png)


## Course Materials
You can see related course materials about the micro:bit and BitMaker Lite on our online learning platform Make2Learn via this address: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Attachments
#### [Attachment: BitMaker Lite Tutorial Source Code](https://tinkergen.com/filedownload/179268)

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
