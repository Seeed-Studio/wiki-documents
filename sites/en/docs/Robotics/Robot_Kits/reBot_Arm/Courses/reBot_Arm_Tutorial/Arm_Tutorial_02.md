---
description: Chapter 2 of the Seeed Embodied Intelligence Beginner's Course — get to know the reBot Arm open-source project, the difference between the DM and RS versions, and its open-source hardware and software.
title: Chapter 2 - Hardware and the Open-Source Project
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
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 2 · Theory &amp; Practice</span>
    <h2>2. Getting to Know reBot Arm Hardware and the Open-Source Project</h2>
    <p>
      Chapter 2 of the Seeed Embodied Intelligence Beginner's Course — get to know the reBot Arm
      open-source project, the difference between the DM and RS versions, and its open-source
      hardware and software.
    </p>
    <div className="hero-actions">
      <a href="#what-is-rebot-arm">What is reBot Arm</a>
      <a href="#open-source">Open source</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>In this chapter</strong>
    <span>2.1 What Is reBot Arm</span>
    <span>2.2 Why Design Two Versions: DM and RS</span>
    <span>2.3 Parameter Comparison Between reBot Arm DM and reBot Arm RS</span>
    <span>2.4 Open-Source Hardware and Open-Source Software</span>
  </div>
</section>

<RebotCourseNav />

## 2.1 What Is reBot Arm

<section id="what-is-rebot-arm" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>2.1 What Is reBot Arm</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-01.png" alt="reBot Arm" />
</div>

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

</section>

## 2.2 Why Design Two Versions: DM and RS

<section id="two-versions" className="section-card">
  <div className="section-title">
    <span>Hardware Versions</span>
    <h2>2.2 Why Design Two Versions: DM and RS</h2>
  </div>

The reBot Arm B601 offers two versions:

- **B601-DM**
- **B601-RS**

Both versions use a similar mechanical structure and upper-layer software system, but use different types of joint motors.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-02.png" alt="DM and RS comparison" />
</div>

</section>

## 2.3 Parameter Comparison Between reBot Arm DM and reBot Arm RS

<section id="parameter-comparison" className="section-card">
  <div className="section-title">
    <span>Comparison</span>
    <h2>2.3 Parameter Comparison Between reBot Arm DM and reBot Arm RS</h2>
  </div>

| Product                | reBot Arm DM                                                                     | reBot Arm RS                                                                     |
| ---------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **SKU**                | 100065783                                                                        | 100019336                                                                        |
| **Purchase Link**      | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html) | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) |
| **Degrees of Freedom** | 6+1                                                                              | 6+1                                                                              |
| **Rated Payload**      | **1.5 kg**                                                                       | **2.5 kg**                                                                       |
| **Maximum Payload**    | **2.5 kg**                                                                       | **5 kg**                                                                         |
| **Repeatability**      | **0.2 mm**                                                                       | **0.1 mm**                                                                       |
| **Reach**              | 767 mm                                                                           | 754.7 mm                                                                         |
| **Communication**      | CAN Bus via USB-CAN Adapter                                                      | CAN Bus via USB-CAN Adapter                                                      |
| **Power Supply**       | 24V DC, 15A                                                                      | 48V DC, 12.5A                                                                    |
| **Actuator Type**      | [Damiao DM Planetary Gear Joint Actuators](https://www.seeedstudio.com/DM4340P-Actuator-p-6663.html)    | [RoboStride Quasi-Direct-Drive Joint Actuators](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)  |


</section>

## 2.4 Open-Source Hardware and Open-Source Software

<section id="open-source" className="section-card">
  <div className="section-title">
    <span>Open Source</span>
    <h2>2.4 Open-Source Hardware and Open-Source Software</h2>
  </div>

Both the hardware and software materials of reBot Arm are open to the public.

GitHub repository: <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">https://github.com/Seeed-Projects/reBot-DevArm/</a>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-03.png" alt="Open-source hardware and software" />
</div>

</section>

</div>
