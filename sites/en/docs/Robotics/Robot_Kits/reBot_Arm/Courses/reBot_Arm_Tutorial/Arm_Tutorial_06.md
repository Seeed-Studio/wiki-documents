---
description: "Chapter 6 of the Seeed Embodied Intelligence Beginner's Course — assemble the reBot Arm, assemble the power supply, wire the arm, and power it on for the first time."
title: Chapter 6 - Assembly, Power Supply, and First Power-On
keywords:
  - reBot
  - Robotic Arm
  - Assembly
  - Power Supply
  - Wiring
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_6
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_6/
---

# Chapter 6 [Practice]: Assembly, Power Supply, and First Power-On

## 6.1 Robotic Arm Assembly

- [reBot DM Robotic Arm Assembly](https://www.youtube.com/watch?v=rfTQoFCfnMc&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=15)
- [reBot RS Robotic Arm Assembly](https://www.youtube.com/watch?v=Bv60NPO0TRo&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=6)

## 6.2 Power Supply Assembly

- [reBot DM Power Supply Assembly](https://www.youtube.com/watch?v=DHFA2UfQzUo&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=3)
- [reBot RS Power Supply Assembly](https://www.youtube.com/watch?v=5GitUWT9gx0)

## 6.3 Robotic Arm Wiring

### reBot DM Wiring

Video: [reBot DM Robotic Arm Wiring](https://www.youtube.com/watch?v=vVxCOfu5ZCE)

1. Connect the robotic arm to the adapter board.

![Connect the robotic arm to the adapter board](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-01.jpg)

2. Power supply connection: XT60 to XT30 cable.

![Power supply connection: XT60 to XT30 cable](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-02.jpg)

3. Connect the XT60 to XT30 cable to the adapter board.

![Connect the XT60 to XT30 cable to the adapter board](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-03.jpg)

4. Connect USB2CAN to GH1.25 2-pin.

![Connect USB2CAN to GH1.25 2-pin](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-04.jpg)

5. Connect the other end of the GH1.25 2-pin cable to the adapter board.

![Connect the other end of the GH1.25 2-pin cable to the adapter board](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-05.jpg)

6. Connect USB2CAN to the computer via a Type-C data cable.

:::warning
Motor 1 and motor 2 must be connected to each other.
:::

### reBot RS Wiring

Video: [reBot RS Robotic Arm Wiring](https://www.youtube.com/watch?v=llSa6qn3yrY&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=8)

1. Connect the robotic arm to the adapter board.

![Connect the robotic arm to the adapter board](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-06.jpg)

2. Power supply connection: XT60 to XT30 cable.

![Power supply connection: XT60 to XT30 cable](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-07.jpg)

3. Connect the XT60 to XT30 cable to the adapter board.

![Connect the XT60 to XT30 cable to the adapter board](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-08.jpg)

4. Connect CANable to GH1.25 2-pin cable.

![Connect CANable to GH1.25 2-pin cable](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-09.jpg)

5. Connect the other end of the GH1.25 2-pin cable to the adapter board.

![Connect the other end of the GH1.25 2-pin cable to the adapter board](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-10.jpg)

6. Connect CANable to the computer.

:::warning
Motor 1 and motor 2 must be connected to each other.
:::

## 6.4 Robotic Arm Power Supply Requirements

The power supply requirement for reBot DM is 24V, and the power supply requirement for reBot RS is 48V.

Below are our recommended power supply usage instructions:

:::danger Set the voltage selector correctly!
If your household voltage is 220V, please set the DIP switch on the side of the power supply to 230V. If your household voltage is 110V, please set the DIP switch on your power supply to 115V.
:::

| 220V → 230V | 110V → 115V |
| :---: | :---: |
| ![Power supply DIP switch 220V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-11.png) | ![Power supply DIP switch 110V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-12.png) |

## 6.5 Robotic Arm Power-On

For the reBot DM robotic arm, the lights of all joints will light up and turn red, at which point the robotic arm is in a disabled state.

The reBot RS robotic arm is no different from when it is powered off, and can only be determined through communication with the motor.
