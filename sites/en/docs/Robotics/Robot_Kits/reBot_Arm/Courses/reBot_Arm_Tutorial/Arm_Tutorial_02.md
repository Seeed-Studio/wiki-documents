---
description: "Chapter 2 of the Seeed Embodied Intelligence Beginner's Course — get to know the reBot Arm open-source project, the difference between the DM and RS versions, and its open-source hardware and software."
title: Chapter 2 - Getting to Know reBot Arm Hardware and the Open-Source Project
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Open Source
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_2
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_2/
---

# Chapter 2 [Theory & Practice]: Getting to Know reBot Arm Hardware and the Open-Source Project

## 2.1 What Is reBot Arm

![reBot Arm](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-01.png)

The reBot Arm B601 is a fully open-source robotic arm released by Seeed Studio, from structural hardware to software. It is an open-source desktop robotic arm for robotics education, algorithm development, and embodied intelligence research. It adopts a modular mechanical structure, provides approximately 750 mm reach and 6+1 degrees of freedom, connects to a computer via USB-CAN, and can be used for experiments such as robotic arm control, robot vision, imitation learning, and VLA.

reBot Arm is not just robotic arm hardware; it also provides complete development materials from low-level control to high-level AI applications. From this open-source project, you can learn from scratch:

- Robotic arm design and assembly (DM product detail video);
- Robotic arm calibration and joint control;
- Forward kinematics, inverse kinematics, and trajectory planning;
- Pinocchio dynamics analysis and MeshCat visualization;
- Leader–Follower master-slave teleoperation;
- LeRobot data collection, training, and evaluation; Hugging Face web page recording;
- RGB-D visual recognition and autonomous grasping;
- Isaac Sim;
- ROS2 integration and secondary development;
- Adaptation of robot policy models such as ACT and GR00T.

Its main goal is to allow users to learn and validate robotic arm and embodied intelligence algorithms using relatively low-cost, open, and modifiable hardware.

## 2.2 Why Design Two Versions: DM and RS

The reBot Arm B601 offers two versions:

- **B601-DM**
- **B601-RS**

Both versions use a similar mechanical structure and upper-layer software system, but use different types of joint motors.

![DM and RS comparison](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-02.png)

## 2.3 Parameter Comparison Between reBot Arm DM and reBot Arm RS

A detailed parameter comparison table (joint ranges, zero position posture, and safety ranges) is covered in Stage 2.

## 2.4 Open-Source Hardware and Open-Source Software

Both the hardware and software materials of reBot Arm are open to the public.

GitHub repository: [https://github.com/Seeed-Projects/reBot-DevArm/](https://github.com/Seeed-Projects/reBot-DevArm/)

![Open-source hardware and software](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-03.png)
