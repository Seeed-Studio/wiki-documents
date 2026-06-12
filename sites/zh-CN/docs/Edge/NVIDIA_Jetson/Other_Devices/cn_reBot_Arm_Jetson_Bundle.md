---
description: ....
title: reBot Arm Jetson 套装
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
url: https://wiki.seeedstudio.com/cn/rebot_arm_jetson_bundle/
---

# reBot Arm B601 × NVIDIA Jetson 入门指南

## 介绍

面向物理 AI 新时代的一体化具身智能开发平台。
随着生成式 AI 从简单的“理解世界”发展到主动“与世界交互”，机器人开发正迈入一个全新的时代：物理 AI。
为了帮助开发者、研究人员和教育工作者加速踏入具身智能领域，Seeed Studio 将完全开源的 reBot Arm B601 与前沿的 NVIDIA Jetson 开发套件相结合，打造出一款强大的下一代机器人开发套装。

该套装不仅提供高精度的机器人操作能力，还具备运行多模态 AI 模型、视觉语言模型（VLM）以及在边缘本地进行实时机器人推理所需的强大 AI 计算能力。
它是一个完整的平台，可用于构建新一代智能机器人——从学习与研究到快速原型开发与部署。

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
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 快速上手 </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/quick_start.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 快速上手 </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_J30_40_with_Jetson_getting_start/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 快速上手 </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::danger
在这里，我们以 NVIDIA Jetson Thor 为例，演示如何使用 Jetson 快速控制 reBot Arm B601 机械臂。你也可以根据自己的具体需求选择其他 Jetson 设备。
:::

## 为什么选择这个套装？

一个完整的具身智能开发平台

传统的机器人开发通常存在以下几个限制：

1. 封闭的硬件生态系统
2. 不足的 AI 计算能力
3. 支离破碎的软件栈
4. 较高的开发门槛
5. 难以验证真实世界的物理 AI 场景

reBot Arm × Jetson 套装正是为了解决这些挑战而设计的。

通过这个套装，你将获得：

1. 一套完全开源的 6+1 自由度机械臂平台
2. 由 GPU 提供算力的 NVIDIA 旗舰边缘 AI 计算平台
3. 对 ROS1、ROS2、Isaac Sim 和 LeRobot 的原生支持
4. 为多模态 AI 和生成式 AI 工作流做好准备
5. 一个统一的环境，用于教育、研究和 AI 机器人原型开发

## 入门

### 硬件连接

1. 参考[本指南](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/)组装机械臂。
2. 使用 USB 转 CAN 适配器，通过 Type-C 接口将机械臂连接到 NVIDIA Jetson。

### 一键安装机械臂驱动

在 Jetson 上打开终端窗口并运行以下命令。

```bash
uv pip install motorbridge
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/install_driver.png" />
</div>

### WebUI

在 Nvidia Jetson 上运行以下命令：

```bash
motorbridge-gateway --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port /dev/ttyACM0 --serial-baud 921600 --dt-ms 20
```

然后在浏览器中打开 `https://rebot-devarm.w0x7ce.eu/`，你将看到如下页面。通过该界面，你可以调整电机参数、查看机械臂状态以及执行其他操作。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/webui.png" />
</div>

## 应用

<div
    style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginTop: '24px'
    }}
>
    <a [LINE_173]        href="/cn/rebot_arm_b601_dm_lerobot/"
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
            在 LeRobot 中使用 reBot Arm B601-DM 入门
                </h3>
            </div>
        </a>
    <a [LINE_199]        href="/cn/rebot_arm_b601_dm_grasping_demo/"
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
        reBot Arm B601-DM 视觉抓取演示
            </h3>
                </div>
            </a>
        <a [LINE_225]        href="/cn/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor/"
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
        在 Nvidia Jetson Thor 上使用 NemoClaw 控制 reBot Arm
        </h3>
            </div>
                </a>
            </div>

    ## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
