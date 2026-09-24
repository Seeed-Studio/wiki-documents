---
description: Chapter 6 of the Seeed Embodied Intelligence Beginner's Course — assemble the reBot Arm, assemble the power supply, wire the arm, and power it on for the first time.
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
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 2 · Chapter 6 · Practice</span>
    <h2>6. Assembly, Power Supply, and First Power-On</h2>
    <p>
      Chapter 6 of the Seeed Embodied Intelligence Beginner's Course — assemble the reBot Arm,
      assemble the power supply, wire the arm, and power it on for the first time.
    </p>
    <div className="hero-actions">
      <a href="#assembly">Assembly</a>
      <a href="#wiring">Wiring</a>
      <a href="#power">Power-on</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>In this chapter</strong>
    <span>6.1 Robotic Arm Assembly</span>
    <span>6.2 Power Supply Assembly</span>
    <span>6.3 Robotic Arm Wiring</span>
    <span>6.4 Robotic Arm Power Supply Requirements</span>
    <span>6.5 Robotic Arm Power-On</span>
  </div>
</section>

<RebotCourseNav />

## 6.1 Robotic Arm Assembly

<section id="assembly" className="section-card">
  <div className="section-title">
    <span>Step 1</span>
    <h2>6.1 Robotic Arm Assembly</h2>
  </div>

- [reBot DM Robotic Arm Assembly](https://www.youtube.com/watch?v=rfTQoFCfnMc&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=15)
- [reBot RS Robotic Arm Assembly](https://www.youtube.com/watch?v=Bv60NPO0TRo&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=6)

</section>

## 6.2 Power Supply Assembly

<section id="power-supply-assembly" className="section-card">
  <div className="section-title">
    <span>Step 2</span>
    <h2>6.2 Power Supply Assembly</h2>
  </div>

- [reBot DM Power Supply Assembly](https://www.youtube.com/watch?v=DHFA2UfQzUo&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=3)
- [reBot RS Power Supply Assembly](https://www.youtube.com/watch?v=5GitUWT9gx0)

</section>

## 6.3 Robotic Arm Wiring

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Step 3</span>
    <h2>6.3 Robotic Arm Wiring</h2>
  </div>

### reBot DM Wiring

Video: [reBot DM Robotic Arm Wiring](https://www.youtube.com/watch?v=vVxCOfu5ZCE)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Connect the robotic arm to the adapter board.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-01.jpg" alt="Connect the robotic arm to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Power supply connection: XT60 to XT30 cable.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-02.jpg" alt="Power supply connection: XT60 to XT30 cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Connect the XT60 to XT30 cable to the adapter board.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-03.jpg" alt="Connect the XT60 to XT30 cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Connect USB2CAN to GH1.25 2-pin.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-04.jpg" alt="Connect USB2CAN to GH1.25 2-pin" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Connect the other end of the GH1.25 2-pin cable to the adapter board.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-05.jpg" alt="Connect the other end of the GH1.25 2-pin cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Connect USB2CAN to the computer via a Type-C data cable.</h4>

:::warning
Motor 1 and motor 2 must be connected to each other.
:::

</div>
</section>
</div>

### reBot RS Wiring

Video: [reBot RS Robotic Arm Wiring](https://www.youtube.com/watch?v=llSa6qn3yrY&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=8)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Connect the robotic arm to the adapter board.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-06.jpg" alt="Connect the robotic arm to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Power supply connection: XT60 to XT30 cable.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-07.jpg" alt="Power supply connection: XT60 to XT30 cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Connect the XT60 to XT30 cable to the adapter board.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-08.jpg" alt="Connect the XT60 to XT30 cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Connect CANable to GH1.25 2-pin cable.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-09.jpg" alt="Connect CANable to GH1.25 2-pin cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Connect the other end of the GH1.25 2-pin cable to the adapter board.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-10.jpg" alt="Connect the other end of the GH1.25 2-pin cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Connect CANable to the computer.</h4>

:::warning
Motor 1 and motor 2 must be connected to each other.
:::

</div>
</section>
</div>

</section>

## 6.4 Robotic Arm Power Supply Requirements

<section id="power-requirements" className="section-card">
  <div className="section-title">
    <span>Power</span>
    <h2>6.4 Robotic Arm Power Supply Requirements</h2>
  </div>

The power supply requirement for reBot DM is 24V, and the power supply requirement for reBot RS is 48V.

Below are our recommended power supply usage instructions:

:::danger Set the voltage selector correctly!
If your household voltage is 220V, please set the DIP switch on the side of the power supply to 230V. If your household voltage is 110V, please set the DIP switch on your power supply to 115V.
:::

| 220V → 230V | 110V → 115V |
| :---: | :---: |
| ![Power supply DIP switch 220V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-11.png) | ![Power supply DIP switch 110V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-12.png) |

</section>

## 6.5 Robotic Arm Power-On

<section id="power" className="section-card">
  <div className="section-title">
    <span>Power-On</span>
    <h2>6.5 Robotic Arm Power-On</h2>
  </div>

For the reBot DM robotic arm, the lights of all joints will light up and turn red, at which point the robotic arm is in a disabled state.

The reBot RS robotic arm is no different from when it is powered off, and can only be determined through communication with the motor.

</section>

</div>
