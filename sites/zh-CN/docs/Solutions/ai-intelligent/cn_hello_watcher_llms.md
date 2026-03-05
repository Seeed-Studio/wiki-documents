---
description: Hello Watcher
title: 主动与世界互动的 AI 助手
keywords:
  - Jarvis
  - SenseCAP Watcher
  - xiaozhi
  - AI
  - LLM
  - Chat-Bot
  - SenseCraft AI
  - Himax
  - Yolo
  - Assistant
  - MCP
image: https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/display.webp
slug: /solutions/hello_watcher_llms
sidebar_position: 1
last_update:
  date: 09/16/2025
  author: Spencer
createdAt: '2025-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/solutions/hello_watcher_llms/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info 想象一下
你走进书房，桌上的 SenseCAP Watcher 立刻感知到你的存在。屏幕亮起，它微笑着向你问好，并显示出你当天的待办事项——你无需说话，甚至不必抬手操作。
:::

SenseCAP Watcher 正在重新定义人与设备的交互方式。

它具备独特的「无摩擦触发」对话能力，当你靠近时会主动发起交互。这不仅是一次技术升级，更是交互逻辑的根本变革：**人机交互史上首次，将主动权从人转移到机器，实现从「人适应机器」到「机器主动适应人」的体验飞跃。**

Watcher 的「敏锐之眼」由强大的 **本地 AI 视觉芯片（Himax）** 驱动，实现快速的本地目标识别与目标追踪。配合可扩展的助手固件，它不仅是一台摄像头，更是一位会进化、懂你的专属 AI 助手。

## 核心优势

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html?utm=wiki&utm=hello_watcher_llms">SenseCAP Watcher</a></h2>
      <p>一款集成本地 AI 视觉与灵活开发环境的智能设备，帮助你轻松构建和部署个性化 AI 应用。</p>
  </div>
	<ul class="info-list">
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v13.5m-3.75-13.5v13.5m-3.75-13.5v13.5m11.25-13.5v13.5m3.75-13.5v13.5m-1.5-13.5H9.75v13.5h9.75V5.25z" />
				</svg>
			</div>
			<div class="info-content">
				<h3>离线「敏锐之眼」：高效本地视觉处理</h3>
				<p>内置高性能 AI 视觉芯片（Himax），所有图像处理均在本地完成。响应迅速，同时大幅提升隐私保护——你的数据无需上传云端。</p>
			</div>
		</li>
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</div>
			<div class="info-content">
				<h3>零代码搭建 AI 应用，像拼乐高一样简单</h3>
				<p>借助 SenseCraft AI 平台，一键部署 AI 模型，并通过几次点击即可快速构建特定场景应用。部署 AI 模型就像修图一样简单，完全不需要编程基础。</p>
			</div>
		</li>
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
				</svg>
			</div>
			<div class="info-content">
				<h3>灵活的集成平台与工具</h3>
				<p>基于灵活的 MCP 架构，你可以自由定义新的 AI 工具，并快速集成本地或云端服务，轻松融入现有智能系统。</p>
			</div>
		</li>
		<li class="info-item">
			<div class="info-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
				</svg>
			</div>
			<div class="info-content">
				<h3>硬件可扩展性：更多接口支持</h3>
				<p>提供 GPIO 扩展接口，可轻松连接各类传感器与执行器，支持深度定制，释放更多创意玩法。</p>
			</div>
		</li>
	</ul>
</div>

## 工作原理

你可以将 SenseCAP Watcher 理解为一台「模块化」智能机器人，其核心运行依赖于三个主要组件的协同工作：

1.  **硬件核心（ESP32S3）**：驱动底层硬件，处理摄像头数据，并维持与云端服务的稳定连接。
2.  **视觉神经（Himax AI 芯片）**：强大的本地 AI 视觉处理单元，为设备赋予实时环境感知能力。
3.  **云端大脑（后端服务）**：负责 AI 角色配置、MCP 工具调度以及统一设备管理。

整体流程可以简化为：

Watcher 的「眼睛」（摄像头）采集画面 → 「视觉神经」（Himax 芯片）进行识别并唤醒助手 → 「大脑」（后端 AI、MCP 服务）理解上下文并做出响应。

这种模块化设计带来了极高的灵活性与可扩展性。

<div align="center">
  <img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-chatbot-diagram.png" alt="watcher-chatbot-diagram"/>
</div>

## 入门指南

### 三步快速上手

只需三步即可激活你的 Watcher：

1.  **设备上电**：通过 Type-C 数据线供电；如果使用电池，长按侧边按键开机。
2.  **连接网络**：开机后，设备会生成一个 Wi-Fi 热点。将手机或电脑连接到该热点。| 「[Watcher Network Setup](/cn/device_network_setup)」
3.  **配置并激活**：在浏览器中访问 `192.168.4.1`，为 Watcher 配置 Wi-Fi，并按照 SenseCraft AI 平台上的指引完成激活。| 「[Watcher Web Control Panel](/cn/watcher_web_control_panel/)」

:::info[激活小贴士]
如果激活失败，请确认验证码是否正确，以及设备认证信息是否丢失。以下操作通常会导致认证信息丢失：

1.  固件被其他程序覆盖。
2.  在未备份认证信息的情况下进行了重大固件升级。
3.  刷入了全新的固件。

<!-- If reactivation is needed, please send the device's STA Mac address (can be obtained from serial logs) to sensecap@seeed.cc for assistance. Please refer to: [Flashing Authentication Info](/cn/flash_watcher_agent_firmware/#flashing-authentication-info). -->
:::

你也可以观看下方视频中的详细教程：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/6UDVsv953Tw?si=6OYFfx4orpC5p90d" title="SenseCAP Watcher for Xiaozhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 模型与固件更新：定制专属技能

开发者或高级用户可以刷入不同的模型或固件，为 Watcher 赋予更强大、更加专属的能力。

详细操作说明请参考我们完整指南中的相关章节：
- **[AI Model Flashing Process](/cn/visual_trigger_and_ai_flash#AI-模型刷写流程)**
- **[Firmware Flashing Process](/cn/visual_trigger_and_ai_flash#固件刷写流程)**

## 开始对话

在对 SenseCAP Watcher 有了基本了解之后，你可以开始探索它的对话与工具调用能力，例如使用摄像头功能，或设置基于时间的策略来实现主动交互。

例如，如果我的 Agent 角色名称设置为 `Watcher`，配置大致如下所示：

<div align="center">
<img class='img-responsive' width="800" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-agent-role.png" alt="watcher-agent-role"/>
</div>

### 唤醒设备

设备在未被唤醒时会保持待机状态，此时不会监听周围的对话。一旦被唤醒，就会开始监听，并可根据用户指令进行对话或执行操作。

<Tabs>
<TabItem value="vision" label="Visual Wake-Up" default>

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/vision-trigger-watcher.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

:::info[如何开启视觉唤醒]
默认情况下，视觉唤醒功能是关闭的。要开启它，你可以在 Watcher 被唤醒时对它说：

**"Hey Watcher, turn on model inference."**
:::

当前视觉唤醒功能提供以下配置选项：

- **目标 ID**（`target`）：指定要检测的目标 ID。该 ID 取决于所使用的视觉模型；默认值为 0。
- **检测持续时间**（`duration`）：单位为秒，用于调节视觉唤醒的灵敏度。默认值为 1 秒（该默认值不包含 1 秒的消抖处理时间）。
- **置信度阈值**（`threshold`）：视觉模型识别目标时的最低置信度，用于调节检测灵敏度。以百分比表示，默认值为 75%。
- **冷却时间**（`interval`）：单位为秒，表示一次对话结束后再次触发前所需的等待时间，用于避免同一对象频繁打断。默认值为 8 秒。

例如，你可以通过修改 `threshold` 参数来调整模型的灵敏度。如果你觉得当前阈值过于严格，只需对 Watcher 说：“Please set the confidence threshold to 60%”。

</TabItem>

<TabItem value="voice" label="语音唤醒">

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/voice-trigger-watcher.mov" type="video/mp4" />
  您的浏览器不支持 video 标签。
</video>
</div>

</TabItem>

<TabItem value="button" label="按键唤醒">
  <div style={{ textAlign: 'center' }}>
  <video width="auto" height="320" controls>
    <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/click-trigger-watcher.mov" type="video/mp4" />
    您的浏览器不支持 video 标签。
  </video>
  </div>
</TabItem>
</Tabs>

### 使用摄像头

对 Watcher 说：

- `Please turn on the camera`
- `What can you see?`
- `What's in front of you?`

<div style={{ textAlign: 'center' }}>
<video width="auto" height="320" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-activate-camera.mov" type="video/mp4" />
  您的浏览器不支持 video 标签。
</video>
</div>

## 资源

以下是一些进阶资源，可帮助你根据自身需求进一步拓展 SenseCAP Watcher 的应用边界，无论是本地部署、隐私保护，还是构建个性化知识库：

- [AI Conversation-Driven Smart Home](/cn/ha_dify_watcher_llms) - 通过 SenseCAP Watcher 直接用语音控制灯光、空调、窗帘等智能家居设备，告别手动操作。
<!--- [Knowledge Based chatbots](/cn/knowledge_watcher_llms) - Transform SenseCAP Watcher into a virtual exhibition secretary, automatically explaining products and solutions for businesses, with the ability to intelligently identify customer points of interest.-->

## 参考资料

- [SenseCAP Watcher 硬件概述](/cn/watcher_hardware_overview) - SenseCAP Watcher 的硬件资源、结构设计等。
- [SenseCAP Watcher 操作指南](/cn/watcher_operation_guideline) - SenseCAP Watcher 开关机的基本逻辑。
- [为 SenseCAP Watcher 训练设备端视觉模型](/cn/training_model_for_watcher) - 为 SenseCAP Watcher 训练设备端视觉模型的指南，包括数据准备、模型训练和部署。
- [SenseCAP Watcher - Web 控制面板](/cn/watcher_web_control_panel)
- [SenseCAP Watcher - 设备网络设置指南](/cn/device_network_setup/)
