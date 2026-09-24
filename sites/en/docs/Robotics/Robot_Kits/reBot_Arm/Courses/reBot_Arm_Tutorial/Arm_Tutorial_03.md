---
description: Chapter 3 of the Seeed Embodied Intelligence Beginner's Course — the hands-on hardware list required for each stage, including main control units, the reBot Arm, cameras, leader arm, and printable mounts.
title: Chapter 3 - Hardware Selection for Courses
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Hardware
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_3
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 3 · Theory &amp; Practice</span>
    <h2>3. Hardware Selection for Subsequent Courses</h2>
    <p>
      Chapter 3 of the Seeed Embodied Intelligence Beginner's Course — the hands-on hardware list
      required for each stage, including main control units, the reBot Arm, cameras, leader arm,
      and printable mounts.
    </p>
    <div className="hero-actions">
      <a href="#main-control-unit">Main control unit</a>
      <a href="#stage-2">Hardware by stage</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>What you will need</strong>
    <span>A main control device (Ubuntu recommended) for all chapters.</span>
    <span>The reBot Arm B601 (DM or RS) plus a leader arm for teleoperation stages.</span>
    <span>Cameras and printable mounts for the vision and imitation-learning stages.</span>
  </div>
</section>

<RebotCourseNav />

## 3.1 Hardware Selection for Subsequent Courses

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>3.1 Hardware Selection for Subsequent Courses</h2>
  </div>

This section introduces the hands-on hardware list required for each chapter. Students can purchase according to their own situation.

Throughout the course, you will need to use your own computer as the algorithm deployment device. It can be Ubuntu, Mac, or even a Raspberry Pi and Jetson. However, remember **not to use Windows, WSL, or a virtual machine Ubuntu**, otherwise you will spend a great deal of effort solving bugs and reduce your learning efficiency.

### Main Control Unit

All chapters require a main control device as your code deployment endpoint. Below are our recommended devices and systems:

| Required Hardware | Link | Quantity | Notes | Chapters Covered |
| :--- | :--- | :---: | :--- | :--- |
| Desktop or Laptop | - | 1 | Ubuntu 22.04 native system, GTX 4080 or above with 12GB+ VRAM, 16GB+ RAM | All chapters |
| reComputer Robotics J4012 | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | - | Stage 2, Stage 3, Stage 5, Stage 6, Stage 7 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | - | Stage 2, Stage 3, Stage 4, Stage 5, Stage 6, Stage 7 |

### Stage 2: Robotic Arm Hardware and Basic Control

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Choose one of DM/RS<br/>- To reduce purchase pressure, you can also buy the parts-only version. Seeed also provides very detailed, step-by-step assembly tutorials.<br/>- Because the power supply shipped by Seeed uses fire-resistant materials, the price is somewhat higher. You can also purchase genuine Mean Well (Taiwan) power supplies on your own. |

### Stage 3: Imitation Learning and LeRobot

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Choose one of DM/RS<br/>- To reduce purchase pressure, you can also buy the parts-only version. Seeed also provides very detailed, step-by-step assembly tutorials.<br/>- Because the power supply shipped by Seeed uses fire-resistant materials, the price is somewhat higher. You can also purchase genuine Mean Well (Taiwan) power supplies on your own. |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| 720P Monocular Wrist Camera | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| Wrist Camera Mount | [UVC32_mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/UVC32_mount.step) | 1 | You need to print this yourself. If you don't have a printer, you can contact customer service to get one for free. |
| Hikvision Camera Overhead Mount | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### Stage 4: VLA and Isaac Groot

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Choose one of DM/RS<br/>- To reduce purchase pressure, you can also buy the parts-only version. Seeed also provides very detailed, step-by-step assembly tutorials.<br/>- Because the power supply shipped by Seeed uses fire-resistant materials, the price is somewhat higher. You can also purchase genuine Mean Well (Taiwan) power supplies on your own. |
| reBot Arm 102 Leader Arm | [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html)<br/>[Power for leader arm](https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html) | 1 | - |
| 720P Monocular Wrist Camera | [UVC Monocular Camera](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 2 | - |
| Wrist Camera Mount | [UVC32_mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/UVC32_mount.step) | 1 | You need to print this yourself. If you don't have a printer, you can contact customer service to get one for free. |
| Hikvision Camera Overhead Mount | [Single Mount + Universal Ring + Live Overhead; Universal](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 1 | - |

### Stage 5: Robotic Arm Mathematics and Motion Control

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Choose one of DM/RS<br/>- To reduce purchase pressure, you can also buy the parts-only version. Seeed also provides very detailed, step-by-step assembly tutorials.<br/>- Because the power supply shipped by Seeed uses fire-resistant materials, the price is somewhat higher. You can also purchase genuine Mean Well (Taiwan) power supplies on your own. |

### Stage 6: Robotic Arm Vision and Autonomous Grasping

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Choose one of DM/RS<br/>- To reduce purchase pressure, you can also buy the parts-only version. Seeed also provides very detailed, step-by-step assembly tutorials.<br/>- Because the power supply shipped by Seeed uses fire-resistant materials, the price is somewhat higher. You can also purchase genuine Mean Well (Taiwan) power supplies on your own. |
| Realsense 435i or Orbbec Gemini2 Depth Camera or Realsense 405 Stereo Camera | [Intel RealSense Depth Camera D435i](https://www.seeedstudio.com/Intel-RealSense-Depth-Camera-D435i-p-4423.html) | 1 | - |
| Camera Wrist Mount | [D435_Gemini2_Mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/D435_Gemini2_Mount.step)<br/>[D405_305_Mount.step](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-3/D405_305_Mount.step) | 1 | You need to print this yourself. If you don't have a printer, you can contact customer service to get one for free. |

### Stage 7: ROS2 and Robot System Integration

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Choose one of DM/RS<br/>- To reduce purchase pressure, you can also buy the parts-only version. Seeed also provides very detailed, step-by-step assembly tutorials.<br/>- Because the power supply shipped by Seeed uses fire-resistant materials, the price is somewhat higher. You can also purchase genuine Mean Well (Taiwan) power supplies on your own. |

### Stage 8: MuJoCo and Isaac Sim Robotic Arm Simulation

- A computer with 32GB RAM, a 4080 or above GPU, and Ubuntu 22.04 is required.
- The robotic arm is used for virtual reality synchronization.

| Required Hardware | Link | Quantity | Notes |
| :--- | :--- | :---: | :--- |
| reBot Arm B601 DM/RS | [reBot DM Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html)<br/>[reBot RS Robotic Arm with Power Supply and Wood Clamp](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) | 1 | - Choose one of DM/RS<br/>- To reduce purchase pressure, you can also buy the parts-only version. Seeed also provides very detailed, step-by-step assembly tutorials.<br/>- Because the power supply shipped by Seeed uses fire-resistant materials, the price is somewhat higher. You can also purchase genuine Mean Well (Taiwan) power supplies on your own. |

</section>

</div>
