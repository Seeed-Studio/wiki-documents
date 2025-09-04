---
description: Micro_bit bitcar
title: BitCar
keywords:
- Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bitcar
last_update:
  date: 12/29/2023
  author: Seraphina
---

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113289-2b808a5b-f4e6-4205-ba05-f5ef6339f38d.png#align=left&display=inline&height=415&originHeight=415&originWidth=415&size=0&status=done&style=none&width=415) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/9.png)

## Introduction

BitCar is a micro:bit project that designs a smart, programmable robot car to encourage kids’ STEAM learning. After combining programs from Microsoft MakeCode, the robot car will be able to perform line following, obstacle avoidance and even a wheelie. The car carries a speaker itself for playing melodies and sound effect, and has 4 colorful RGB LEDs on the underside of it and a detachable ultrasonic sensor in the front for avoiding obstacles on the way.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113282-0a378b93-75f4-4f4a-a776-9d20a53ffc20.png#align=left&display=inline&height=554&originHeight=554&originWidth=923&size=0&status=done&style=none&width=923) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/10.png)

:::note
The micro:bit, USB cable and batteries are not included in the package. You need to prepare them separately. For specific details about how to assemble the car, see Attachment 1 BitCar Assembly Instruction. For details about the cover and chassis, see Attachment 3 BitCar Cover & Chassis.
:::

## Tutorials

Here are some example tutorials for you to learn how to use this kit. Let’s get started!

### 1. Line Following

#### 1.1 Implementation

After the car starts up, it can drive along the track.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113288-c57403ca-ae55-473e-ae97-42c2b0c7ca78.png#align=left&display=inline&height=632&originHeight=632&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/11.png)

> See Attachment 2 BitCar Map

#### 1.2 Write a Program

Note that you need to add an extension in MakeCode because it doesn’t have blocks that control the car. Follow the instruction below to add the extension.

- Let’s go to MakeCode first: [https://makecode.microbit.org/](https://makecode.microbit.org/)

- Step 1 Create a new project which takes you to the workspace. Click on the gear icon (for setting).
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113277-c32373b0-93fd-4471-b79b-e1dfd4958188.png#align=left&display=inline&height=565&originHeight=565&originWidth=1152&size=0&status=done&style=none&width=1152) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/12.png)

- Step 2 Click “Extensions” from the drop-down list and then you will enter the extension page.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-225fdfab-20b1-4d31-bc32-1ae7adad3f6d.png#align=left&display=inline&height=723&originHeight=723&originWidth=945&size=0&status=done&style=none&width=945) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/13.png)

- Step 3 Copy and paste this extension link onto the search box: [https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113278-4c8a39b6-2479-47c5-900f-a785f201815c.png#align=left&display=inline&height=448&originHeight=448&originWidth=992&size=0&status=done&style=none&width=992) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/14.png)

> If a prompt says that this extension does not exist, please close the browser and try again.

- Step 4 Click the extension icon and go back to the workspace.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-405a3a72-1457-4dbb-a230-84db87fe68d1.png#align=left&display=inline&height=505&originHeight=505&originWidth=1119&size=0&status=done&style=none&width=1119) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/15.png)

After you added the extension, we can start the task.

Firstly, add a “forever” block. If the black line is detected on the left side, the car should make a short left turn so that it can still follow the track. In this case, we set the left motor speed as 3% and the right motor speed as 15%. Similarly, if the black line is detected on the right side, the car should make a short right turn. And we set the right motor speed as 3% and left motor speed as 15%.

> You can adjust the motor speed as needed.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113295-500e52b5-b3ff-4474-9e87-ed72c1329f1e.png#align=left&display=inline&height=556&originHeight=556&originWidth=1282&size=0&status=done&style=none&width=1282) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/16.png)

#### 1.3 Connect a Device

Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113285-2552ad75-17d6-4f40-aa08-4223e9ccb65e.png#align=left&display=inline&height=543&originHeight=543&originWidth=642&size=0&status=done&style=none&width=642) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/17.png)

#### 1.4 Upload a Program

The previous tutorials have already shown you how to download the program that you wrote. You just need to rename your program, click the “Download” button and send it to your micro:bit.

#### 1.5 Run a Program

Turn on the switch on the car and see if it can run normally.

### 2. Obstacle Avoidance

#### 2.1 Implementation

After the car starts up, it can drive along the track and stop as soon as it sees an obstacle.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113304-c6853e11-bd23-455c-8ca9-ab9b897a9f74.png#align=left&display=inline&height=311&originHeight=311&originWidth=554&size=0&status=done&style=none&width=554) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/18.png)

#### 2.2 Write a Program

Still we use a same method in Tutorial 1 to add the BitCar extension.<br />
Firstly, add a “Forever” block. If the ultrasonic sensor detects an object to a distance smaller than 12, then set the left motor speed as 20% and right motor speed as 0%. Then set a 0.7 s timeout.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113303-d80b5cc8-83ce-4109-bdbd-0c9244e69358.png#align=left&display=inline&height=474&originHeight=474&originWidth=1305&size=0&status=done&style=none&width=1305) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/19.png)

#### 2.3 Connect a Device

Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again. Bring out the ultrasonic sensor and install it to the car.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-308bd885-a798-4c30-9a7c-18c399ba6fce.png#align=left&display=inline&height=314&originHeight=314&originWidth=408&size=0&status=done&style=none&width=408) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/20.png)

How to install the ultrasonic sensor (see the user manual in the package):
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113361-abf193ef-4dc7-4d2e-916b-e6cefef00147.png#align=left&display=inline&height=500&originHeight=500&originWidth=1012&size=0&status=done&style=none&width=1012) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/21.png)

#### 2.4 Upload a Program

You have been introduced how to download your programs in the previous tutorials. You just need to rename your program, click the “Download” button and send it to your micro:bit.

#### 2.5 Run a Program

Turn on the switch on the car and see if it can run normally.

### 3. RC Car (Controlled by a micro:bit)

#### 3.1 Implementation

After the car starts up, the car will go forward if the button A on micro:bit is pressed down; and it will go backward if the button B is pressed down.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113317-0bc5b339-1106-4562-839e-8ce42d2f8dd7.png#align=left&display=inline&height=539&originHeight=539&originWidth=944&size=0&status=done&style=none&width=944) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/22.png)

#### 3.2 Write a Program

Still we use a same method in Tutorial 1 to add the BitCar extension.

- micro:bit Program<br />
Add an “on start” block. Connect the block “radio set group” into it. Drag and drop the “Forever” block. Follow this program logic: if the button A is pressed, then the radio will send the number “1”; if the button B is pressed, then the radio will send the number “2”.

- BitCar Program<br />
Add an “on start” block. Connect the block “radio set group” into it. Follow this program logic: the radio receives a signal “receivedNumber”. If “receivedNumber” equals to 1, then the car will go forward at a 15% speed. If “receivedNumber” equals to 2, then the car will go backward at a 15% speed.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113345-98bd2a99-0f62-4ea6-adc8-6522c0cee2cb.png#align=left&display=inline&height=486&originHeight=486&originWidth=1213&size=0&status=done&style=none&width=1213) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/23.png)

micro:bit Controller Program
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113327-1cb7faa3-45f1-440e-9192-7a1ca64bbf2e.png#align=left&display=inline&height=518&originHeight=518&originWidth=1283&size=0&status=done&style=none&width=1283) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/24.png)

BitCar Receiver Program

#### 3.3 Connect a Device

Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again.

:::note
There are 2 groups of programs, thus you’ll need 2 micro:bits for this project. Use one micro:bit to connect to the power, and the other one to control the car. You also need to write and download programs separately to distinguish the two micro:bits. The micro:bits mentioned in this tutorial are not included in the package.
:::

#### 3.4 Upload a Program

You have been introduced how to download your programs in the previous tutorials. You just need to rename your program, click the “Download” button and send it to your micro:bit.

#### 3.5 Run a Program

Turn on the switch on the car and see if it can run normally.

### 4. RC Car (Controlled by a micro:bit and a BitPlayer)

#### 4.1 Implementation

If the joystick is pulled up, the car goes forward; if the joystick is pulled back, the car goes backward; if the joystick is pulled to the left, the car turns left; if the joystick is pulled to the right, the car turns right; if the button A is pressed, the car stands up; if the button B is pressed, the car stops.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-83bb83d6-af28-4ffa-87bc-26df831aef8a.png#align=left&display=inline&height=639&originHeight=639&originWidth=1083&size=0&status=done&style=none&width=1083) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/25.png)

#### 4.2 Write a Program

Still we use a same method in Tutorial 1 to add the BitCar extension.<br />
BitCar Extension: [https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)<br />
BitPlayer Extension: [https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)

- BitPlayer Program<br />
  Add an “on start” block. Connect the block “radio set group” into it. Drag and drop a “Forever” block. Start adding blocks under this program logic: if the joystick is pulled up, the radio will send the number “1”; if the joystick is pulled back, the radio will send the number “2”; if the joystick is pulled to the left, the radio will send the number “3”; if the joystick is pulled to the right, the radio will send the number “4”; if the button A is pressed, the radio will send the number “5”; if the button B is pressed, the radio will send the number “6”.

- BitCar Program<br />
  Add an “on start” block. Connect the block “radio set group” into it. If “receivedNumber” equals to 1, the car will go forward at a 15% speed; if “receivedNumber” equals to 2, the car will go backward at a 15% speed; if “receivedNumber” equals to 3, the right motor speed will be 20% and the left motor speed will be 0%, then the car will go forward at a 15% speed again; if the “receivedNumber” equals to 4, the left motor speed will be 20% and the right motor speed will be 0%, then the car will go forward at a 15% speed again; if the “receivedNumber” equals to 5, the car will do a stand-up act at a 100% speed; if the “receivedNumber” equals to 6, the car will stop.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113324-b23e7a3c-37cf-4616-9d5a-85078a7f7617.png#align=left&display=inline&height=780&originHeight=780&originWidth=857&size=0&status=done&style=none&width=857) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/26.png)

BitPlayer Program
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113335-24bb344c-3f6e-4af8-abb4-b6d80fe210cb.png#align=left&display=inline&height=851&originHeight=851&originWidth=902&size=0&status=done&style=none&width=902) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/27.png)

BitCar Program

#### 4.3 Connect a Device

Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again.
:::note
There are 2 groups of programs, thus you’ll need 2 micro:bits for this project. One micro:bit is for BitPlayer; the other one is for BitCar. You also need to write and download programs separately to distinguish the two micro:bits. The micro:bits mentioned in this tutorial are not included in the package.
:::

#### 4.4 Upload a Program

You have been introduced how to download your programs in the previous tutorials. You just need to rename your program, click the “Download” button and send it to your micro:bit.

#### 4.5 Run a Program

Turn on the BitCar and BitPlayer. After they match up, observe how the program is runing.

### 5. Python

In addition to the tutorials above, you can also use Python to control the BitCar. Below is the example program:

#### 5.1 Motor Control

First, we will import all necessary micro:bit modules.

1. Add your Python code here. E.g.
2. from microbit import *

Then we define a function called movement(left,right), the value of left and right is the speed (from -255 to 255) for each motor.

```cpp
1. def movement(left, right):
2.     if left > 0:
3.         pin13.write_analog(0)
4.         pin14.write_analog(left)
5.     elif left < 0:
6.         pin13.write_analog(left)
7.         pin14.write_analog(0)
8.     if right > 0:
9.         pin15.write_analog(0)
10.         pin16.write_analog(right)
11.     elif right > 0:
12.         pin15.write_analog(right)
13.         pin16.write_analog(0)
```

Define another function called stop(), we call this function to stop the BitCar.

``` cpp
1. def stop():
2.         pin13.write_analog(0)
3.         pin14.write_analog(0)
4.         pin15.write_analog(0)
5.         pin16.write_analog(0)
```

With the functions we just defined above, we can control BitCar as follow:

**Move forward in full speed:**<br />
movement(255, 255)

**Move backward in full speed:**<br />
movement(-255, -255)

**Spin clockwise:**<br />
movement(255, -255)

**Stop:** <br />
stop()

## Course Information and Sample Lesson Download

You can see related micro:bit and BitCar courses on Make 2 Learn via this address: [https://make2learn.tinkergen.com](https://make2learn.tinkergen.com/)

## IV Attachments

#### Attachment 1 BitCar Assembly Instruction：[Attachment 1 BitCar Assembly Instruction.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf?_lake_card=%7B%22uid%22%3A%221611139151730-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf%22%2C%22name%22%3A%22Attachment%201%20BitCar%20Assembly%20Instruction.pdf%22%2C%22size%22%3A818663%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22UXHlE%22%2C%22card%22%3A%22file%22%7D)

#### Attachment 2 BitCar Map：[Attachment 2 BitCar Map.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf?_lake_card=%7B%22uid%22%3A%221611139162975-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf%22%2C%22name%22%3A%22Attachment%202%20BitCar%20Map.pdf%22%2C%22size%22%3A753958%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22n0BjB%22%2C%22card%22%3A%22file%22%7D)

#### Attachment 3 BitCar Cover & Chassis：[Attachment 3 BitCar Cover - Chassis.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip?_lake_card=%7B%22uid%22%3A%221611139172665-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip%22%2C%22name%22%3A%22Attachment%203%20BitCar%20Cover%20-%20Chassis.zip%22%2C%22size%22%3A367966%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22T1EXv%22%2C%22card%22%3A%22file%22%7D)

#### Attachment 4 Source Code：[Attachment 4 Source Code.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip?_lake_card=%7B%22uid%22%3A%221611139180453-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip%22%2C%22name%22%3A%22Attachment%204%20Source%20Code.zip%22%2C%22size%22%3A1535318%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%227lUfd%22%2C%22card%22%3A%22file%22%7D)

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
