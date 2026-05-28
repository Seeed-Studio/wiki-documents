---
description: ....
title: reBot Arm Jetson Bundle
tags:
  - reBot Arm
  - reComputer Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /rebot_arm_jetson_bundle
sku: 100060965 | E26041401
last_update:
  date: 05/18/2026
  author: Youjiang
createdAt: '2026-05-18'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/rebot_arm_jetson_bundle/
---

# reBot Arm B601 × NVIDIA Jetson Getting Started

## Introduction

An All-in-One Embodied AI Development Platform for the New Era of Physical AI.
As generative AI evolves from simply “understanding the world” to actively “interacting with the world,” robotics development is entering a new era: Physical AI.
To help developers, researchers, and educators accelerate their journey into Embodied AI, Seeed Studio combines the fully open-source reBot Arm B601 with the cutting-edge NVIDIA Jetson Developer Kit to create a powerful next-generation robotics development bundle.

This bundle delivers not only precise robotic manipulation capabilities, but also the massive AI computing power required for running multimodal AI models, vision-language models (VLMs), and real-time robotic inference locally at the edge.
It is a complete platform for building the next wave of intelligent robots — from learning and research to rapid prototyping and deployment.

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reBot Arm B601 </th>
        <th> NVIDIA® Jetson AGX Thor™ Developer Kit </th>
        <th> reComputer Classic J3011 </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110147.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Quick Start </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/quick_start.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Quick Start </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/reComputer_J30_40_with_Jetson_getting_start/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Quick Start </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::danger
Here, we use the NVIDIA Jetson Thor as an example to demonstrate how to quickly control the reBot Arm B601 robotic arm with Jetson. You can also choose other Jetson devices based on your specific needs.
:::

## Why This Bundle?

A Complete Embodied AI Development Platform

Traditional robotics development often comes with several limitations:

1. Closed hardware ecosystems
2. Insufficient AI computing power
3. Fragmented software stacks
4. High development barriers
5. Difficulty validating real-world Physical AI scenarios

The reBot Arm × Jetson Bundle is designed to solve these challenges.

With this bundle, you get:

1. A fully open-source 6+1 DoF robotic arm platform
2. NVIDIA’s flagship edge AI computing platform powered by GPU
3. Native support for ROS1, ROS2, Isaac Sim, and LeRobot
4. Ready for multimodal AI and generative AI workflows
5. A unified environment for education, research, and AI robotics prototyping

## Getting Started

### Hardware Connection

1. Refer to [this guide](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/) to assemble the robotic arm.
2. Use a USB-to-CAN adapter to connect the robotic arm to the NVIDIA Jetson via the Type-C interface.

### One-Click Install Arm Driver

Open the terminal window on the Jetson and run the following command.

```bash
uv pip install motorbridge
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/install_driver.png" />
</div>

### WebUI

run this command on Nvidia Jetson:

```bash
motorbridge-gateway --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port /dev/ttyACM0 --serial-baud 921600 --dt-ms 20
```

Then, Open `https://rebot-devarm.w0x7ce.eu/` in your browser, and you will see the following page. From this interface, you can adjust motor parameters, check the status of the robotic arm, and perform other operations.

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/webui.png" />
</div>

## Application

<div
    style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginTop: '24px'
    }}
>
    <a
        href="/rebot_arm_b601_dm_lerobot/"
        style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
        }}
    >
        <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
            <img
                src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/lerobot.png"
                alt="LeRobot for reBot Arm B601-DM"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
            />
        </div>
        <div style={{padding: '18px'}}>
            <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
                Getting Started with reBot Arm B601-DM in LeRobot
            </h3>
        </div>
    </a>
    <a
        href="/rebot_arm_b601_dm_grasping_demo/"
        style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
        }}
    >
        <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
            <img
                src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png"
                alt="Visual Grasping Demo for reBot Arm B601-DM"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
            />
        </div>
        <div style={{padding: '18px'}}>
            <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
                reBot Arm B601-DM Visual Grasping Demo
            </h3>
        </div>
    </a>
    <a
        href="/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor/"
        style={{
            textDecoration: 'none',
            color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
        }}
    >
        <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
            <img
                src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/robot_webui.png"
                alt="Control reBot Arm with NemoClaw on Nvidia Jetson Thor"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
            />
        </div>
        <div style={{padding: '18px'}}>
            <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
                Control reBot Arm with NemoClaw on Nvidia Jetson Thor
            </h3>
        </div>
    </a>
</div>

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
