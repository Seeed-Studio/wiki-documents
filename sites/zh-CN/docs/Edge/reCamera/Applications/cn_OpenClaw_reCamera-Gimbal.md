---
description: 使用 OpenClaw 控制 reCamera Gimbal
title: 使用 OpenClaw 控制 reCamera Gimbal
keywords:
  - reCamera Gimbal
  - 感知控制
  - OpenClaw
image: https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_9.png
slug: /use_cpenclaw_to_control_the_recamera_gimbal
sku: 100029708
sidebar_position: 10
last_update:
  date: 03/27/2026
  author: Xinrui Wu
createdAt: '2026-03-27'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/cn/use_cpenclaw_to_control_the_recamera_gimbal/
---


# 使用 OpenClaw 控制 reCamera Gimbal

## 介绍

本项目通过将 OpenClaw Agent 框架与 Seeed Studio 的 reCamera Gimbal 边缘 AI 相机深度集成，成功打破了虚拟大模型与物理世界之间的壁垒。  
依托 reCamera 强大的 RISC-V 架构、内置的 Node-RED 低代码环境以及 1 TOPS 的边缘算力，我们为 OpenClaw 开发了一套专用的底层交互 Skill。  
现在，大模型不再是只能在屏幕上打字的“瓶中之脑”。它拥有可以主动 360° 旋转的“脖子”、能够看见物理世界的“眼睛”（图像采集 + VLM 分析）、可以改变环境的“手”（LED 控制），以及用于双向交互的“耳朵和嘴巴”（麦克风和扬声器）。

下面是完成本示例后的使用效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw.gif" /></div>

## 硬件准备

一台 reCamera Gimbal
一台电脑

<table align="center">
 <tr>
  <th>reCamera Gimbal</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 1. 在电脑上安装 OpenClaw

:::note
在安装前需要先安装 Git 和 nodejs。如果是 Windows10 用户，还需要安装 Visual Studio，如果未安装会报错。
:::

请访问 OpenClaw 官网查看详细安装教程：[OpenClaw-Personal AI Assistant](https://openclaw.ai/)

安装完成后，你可以直接进入网页尝试与它聊天。如果此时可以正常获得反馈，那么你已经成功安装并配置好 OpenClaw，请继续按步骤往下操作。如果安装 OpenClaw 出现问题，请自行排查原因并解决。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_2.png" /></div>

你也可以点击左侧的 "Overview" 页面，查看 "Status" 是否正常。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_3.png" /></div>

## 2. 导入 reCamera Gimbal 的 Skills

### 2.1 新建 skills 文件夹

在安装 OpenClaw 的文件夹中找到 workspace，并在该路径下新建一个名为 "skills" 的文件夹。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_1.png" /></div>

### 2.2 在 GitHub 上下载 reCamera Gimbal 项目

项目地址为：

```
https://github.com/Seeed-Projects/reCamera_Gimbal-OpenClaw
```

下载并解压后，将项目中的 "recamera-gimbal" 文件夹放入步骤 2.1 中创建的 "skills" 文件夹内。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_8.png" /></div>

### 2.3 配置 openclaw.json

openclaw.json 位于你安装 OpenClaw 的文件夹中。该文件包含了访问 AI 模型所需的全部配置。你需要做的是将以下关于 reCamera Gimbal 的内容添加到 openclaw.json 中：

:::note

1. 将 "C :\\ Users\\seeed\\.openclaw\\workspace\\skills" 替换为你实际的 skills 文件夹路径

2. 将 "192.168.31.198" 替换为你实际的 reCamera Gimbal 所在 IP 地址

3. 将 "recamera.1" 替换为你 reCamera Gimbal 的实际密码

:::

```json
"skills": {
    "load": {
      "extraDirs": [
        "C:\\Users\\seeed\\.openclaw\\workspace\\skills"
      ]
    },
    "entries": {
      "recamera-gimbal": {
        "enabled": true,
        "env": {
          "RECAMERA_IP": "192.168.31.198",
          "RECAMERA_PASS": "recamera.1"
        }
      }
    }
  }
```

:::note
如果你想编写自己的 Skills，请参考官方编写[规范](https://agentskills.io/specification#allowed-tools-field)
:::

## 3. 打开 SenseCraft 部署应用

### 3.1 设置 reCamera Gimbal

首先，不要连接 reCamera Gimbal 的电源，直接将 Type-C 连接到电脑并访问 192.168.42.1。进入后，点击左下角的 "Login to SenseCraft"。登录后，为其连接 WiFi，确保连接的 WiFi 与电脑相同。然后查看 reCamera Gimbal 的 IP 地址，复制该 IP 地址并访问，确认是否可以正常访问。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_5.png" /></div>

### 3.2 部署应用

在 SenseCraft AI 平台上，依次进入 **`Applications`** > **`Application Square`**（或[直接打开](https://sensecraft.seeed.cc/ai/application)），找到名为 "OpenClaw & reCamera Gimbal" 的项目，点击 **`Deploy Application`** > **`Visit Workspace Via USB`**，部署后你看到的工作流应如下面图片所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_4.png" /></div>

## 4. 测试电机和拍照

然后拔下 Type-C 线，插上 12V 电源，等待 reCamera Gimbal 自动校准完成，在浏览器中重新访问刚才的 IP 地址，进入 reCamera Gimbal 的界面，并确保 Node-RED 已经正常启动运行。接下来，我们测试拉出的两个 HTTP 接口是否可以正常工作：

### 4.1 测试电机

首先测试云台电机是否正常，请将 "`<DEVICE_IP>`" 替换为你 reCamera Gimbal 的真实 IP：

```http
http://<DEVICE_IP>:1880/api/gimbal?yaw=120&pitch=90
```

如果一切正常，那么当你访问该网址时，你会看到 reCamera Gimbal 的电机发生转动，你也可以将 120 和 90 替换为其他角度。

### 4.2 测试拍照

然后测试拍照是否正常，请将 "`<DEVICE_IP>`" 替换为你 reCamera Gimbal 的真实 IP：

```http
http://<DEVICE_IP>:1880/api/photo
```

如果一切正常，那么当你访问该 URL 时，你可以在网页中看到 reCamera Gimbal 此刻拍摄的图像。

:::note
请确保 reCamera Gimbal 和你的电脑连接在同一个 WiFi 下
:::

## 5. 在 OpenClaw 中测试

在测试前我们需要确认两件事：

### 5.1 确保你的 Skills 配置正确

如果你已经按照步骤 2 配置了 Skills，在 OpenClaw 界面中，点击左侧的 "Skills"，再点击 "WORKSPACE SKILLS"，你应该可以看到你在本地配置好的 "recamera-gimbal"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_6.png" /></div>

### 5.2 确保你的模型配置正确

请确保你的模型配置正确。点击左侧的 "Agent" 后，你可以在 "Primary model" 下看到你配置的模型。这里我使用的是 GLM4.7 模型。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_7.png" /></div>

### 5.3 开始使用 OpenClaw Gimbal 控制你的 reCamera

请直接在聊天窗口中对 OpenClaw 说“打开相机的 LED 灯”、“环顾四周看看有没有人”、“录制一段 5s 的音频并播放”等任务，或者你也可以尝试更复杂的任务，例如“打开 reCamera 的哨兵模式（快速环顾四周，一次扫描周期，即一圈扫描控制在 6s 内），如果画面中出现穿白色 T 恤的人，就打开相机灯并播放 test.wav 音频，分析画面内容并将图片保存到本地”，然后稍等片刻，观察 reCamera Gimbal 的反应。

:::note
OpenClaw 执行任务会比较慢，复杂指令大约需要两三分钟才能看到效果，所以请耐心等待，这是正常现象。
:::

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
