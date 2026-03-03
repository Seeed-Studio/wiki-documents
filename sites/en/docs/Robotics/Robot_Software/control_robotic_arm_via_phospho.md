---
description: --
title: Getting Started with Phospho
keywords:
- NVIDIA Jetson
- Phospho
- Robotic Arm
- SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.webp
slug: /control_robotic_arm_via_phospho
last_update:
  date: 7/1/2025
  author: Youjiang
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Phospho is how ML engineers make real robots intelligent. We provide the hardware, libraries, and remote control capabilities so developers can collect data, train AI models and deploy applications to real robots in minutes instead of months.

In this wiki, we will demonstrate SO Arm 100 robotic arm motion control using phospho.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/phospho_1.png" />
</div>

## Prerequisites

- SO Arm 100/101
- Computer with Mac/Windows/Linux OS

:::note
You can purchase a ready-to-use robotic arm from [phospho](https://robots.phospho.ai/starter-pack), or acquire the assembly kit from [SeeedStudio](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html).
:::

## Getting Started

### Prepare the Robotic Arm

1. If you purchased the robotic arm kit from Seeedstudio, you will need to refer to [this link](https://wiki.seeedstudio.com/lerobot_so100m/#assembly) to assemble your robotic arm.
2. If you bought it from [Phospho](https://robots.phospho.ai/), you will receive a ready-to-use device that allows you to skip the assembly process entirely.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.jpg" />
</div>

After assembly is complete, please connect the robotic arm to your computer using a USB data cable.

### Install Phospho

<div style={{ textAlign: 'justify' }}>

The installation of phospho software are very user-friendly, requiring no complicated environment configuration and taking little time to download. You simply need to select the appropriate installation command based on your computer's operating system.

</div>

<Tabs>
<TabItem value="MacOS" label="MacOS">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | bash
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | sudo bash
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
powershell -ExecutionPolicy ByPass -Command "irm https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.ps1 | iex"
```

</TabItem>
</Tabs>

Then, fire up the the server:

```bash
phosphobot run
```

:::info
It can take up to 15 seconds for the server to start.
:::

Once the service is fully started, you can access the UI interface in your browser at http://0.0.0.0:8020/.
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/webui.png" />
</div>

### Connect the Robotic Arm

After the WebUI starts, it will automatically discover and recognize the robotic arm. If recognition fails, you may manually initiate a connection.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/connection.png" />
</div>

Before operating the robotic arm, we need to perform the second calibration. You may refer to the following video tutorial for the calibration procedure.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/calibration.png" />
</div>

<div class="video-container">
  <iframe width="900" height="540" src="https://www.youtube.com/embed/65DW8yLcRmM" title="How to calibrate the SO-100 or SO-101 robot arm? Step by step guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::info
The Lerobot SO Arm 100/101 typically requires two calibration stages:

1. During assembly: Zero-position initialization must be performed for each servo motor.
2. During software operation: Recalibration is required to compensate for assembly errors.

:::

### Control Robotic Arm by Phospho

Unlike the Lerobot repository, Phospho not only supports teleoperation via Leader, but also provides multiple control methods: keyboard/mouse control, manual drag-and-drop control, and VR-based control. This design will significantly enrich our data collection methodologies.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/control.png" />
</div>

`Control Robot` --> `Keyboard control` --> `Start Moving Robot`

If everything went smoothly, you should now be able to control the robotic arm's movement using your computer keyboard.

:::note
Beyond remote control of robotic arms, phospho offers many other exciting features waiting to be explored! Try it out now!
:::

## Effect Demonstration

Here we experiment with VR-based robotic arm control. After installing the phospho teleop app in VR, the system can discover the robotic arm via local network. As demonstrated in the video, the VR interface enables remarkably smooth remote operation of the robotic arm's movements.

<div class="video-container">
<iframe width="900" height="540" src="https://www.youtube.com/embed/dvkHfyivQjI" title="AI-Powered Control of the Robotic Arm via Phospho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## References

- [https://phospho.ai/](https://phospho.ai/)
- [https://docs.phospho.ai/welcome](https://docs.phospho.ai/welcome)
- [https://github.com/phospho-app/phosphobot](https://github.com/phospho-app/phosphobot)
- [https://wiki.seeedstudio.com/lerobot_so100m](https://wiki.seeedstudio.com/lerobot_so100m/)

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
