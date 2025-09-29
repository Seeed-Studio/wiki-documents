---
description: 你好 Watcher
title: SenseCAP Watcher：主动问候你的 AI 助手
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
# image:
slug: /cn/hello_watcher_llms
sidebar_position: 1
last_update:
  date: 09/12/2025
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Imagine this
想象一下：当你步入书房，桌上的 SenseCAP Watcher 立即感知到你的到来。屏幕亮起，它微笑着向你致意，并显示出今天的待办事项——无需你开口，甚至不需要任何操作。
:::

SenseCAP Watcher，正重新定义人与设备的交互方式。

它具备独特的“无感触发”对话能力，可在你靠近时主动发起交互。这不仅是一次技术升级，更是一种交互逻辑的根本转变：**主动权首次由人移交至机器，实现了从“人适应机器”到“机器主动适应人”的体验跨越。**

Watcher 的“慧眼”依托于强大的**端侧 AI 视觉芯片（Himax）**，使其能够在本机快速完成物体识别与目标追踪。结合可扩展的**小智**助手固件，它不止是一枚摄像头，更是一位可持续进化、懂你所需的专属AI助手。

<!--**(在此嵌入一段约30秒的 YouTube/Bilibili 视频，直观展示 Watcher 的主动交互体验)**-->

## 核心优势

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html?utm=wiki&utm=hello_watcher_llms">SenseCAP Watcher</a></h2>
      <p>一款集端侧AI视觉与灵活开发环境于一身的智能设备，旨在帮助你轻松构建与部署个性化AI应用。</p>
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
				<h3>离线运行的“火眼金睛”：高效端侧视觉处理</h3>
				<p>搭载高性能 AI 视觉芯片（Himax），所有图像处理均在设备本地完成。响应迅捷，同时更好地保护您的隐私——数据无需上传至云端。</p>
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
				<h3>零代码构建 AI 应用，像搭乐高一样简单</h3>
				<p>借助 SenseCraft AI 平台，只需鼠标点点操作即可部署AI模型，快速搭建适用于特定场景的应用程序。AI 模型部署变得如修图般轻松，完全无需编程基础。</p>
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
				<h3>灵活集成平台与工具</h3>
				<p>基于小智 MCP 架构，可自由定义新的 AI 工具，并快速接入本地或云端服务，无缝融入现有智能系统。</p>
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
				<h3>硬件可扩展：额外接口支持</h3>
				<p>提供 GPIO 扩展接口，可轻松连接各类传感器与执行器，实现深度定制，支持更多创意落地。</p>
			</div>
		</li>
	</ul>
</div>

## 工作原理

SenseCAP Watcher 可视为一个“模块化”的智能机器人，其核心由三大组件协同运作：

1. **硬件核心（ESP32S3）**：驱动底层硬件，处理摄像头数据，并稳定连接云端服务。
2. **视觉神经（Himax AI 芯片）**：强大的端侧AI视觉处理单元，赋予设备实时环境感知能力。
3. **云端大脑（后台服务）**：负责AI角色设定、MCP工具调度与设备统一管理。

整个过程可简化为：

Watcher 的“眼睛”（摄像头）捕捉图像 → “视觉神经”（Himax 芯片）进行识别、唤醒小智 → “大脑”（后台 AI、MCP 服务）理解情境并做出响应。

这种模块化设计带来高度的灵活性与扩展性。

<div align="center">
  <img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-chatbot-diagram.png" alt="watcher-chatbot-diagram"/>
</div>

## 使用指南

### 三步快速上手

只需三步，即可激活你的 Watcher：

1.  **启动设备**：通过 Type-C 数据线供电；若使用电池，长按侧边按键开机。
2.  **连接网络**：设备启动后将生成一个 Wi-Fi 热点，使用手机或电脑连接此热点。｜「[Watcher 网络配置](/cn/device_network_setup)」
3.  **配置与激活**：在浏览器中访问 `192.168.4.1`，为 Watcher 配置 Wi-Fi，并按照指引在 SenseCraft AI 平台上完成激活。｜「[Watcher Web 控制台](/cn/watcher_web_control_panel/)」

:::info[激活提示]
若无法成功激活，请确认验证码填写正确且设备鉴权信息未丢失。以下操作通常会导致鉴权信息丢失：

1.  固件被其他程序覆盖。
2.  进行大版本固件更新前未备份鉴权信息。
3.  刷写了全新的固件。

如需重新激活，请将设备的 STA Mac 地址（可从串口日志中获取）发送至 sensecap@seeed.cc 获取协助。请参阅：[烧录认证信息](/cn/flash_watcher_agent_firmware/#flashing-authentication-info)。
:::

您可以通过以下视频观看详细教程：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/6UDVsv953Tw?si=6OYFfx4orpC5p90d" title="SenseCAP Watcher for Xiaozhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 模型及固件更新：定制专属技能

开发者或高级用户可通过烧录不同的模型或固件，为 Watcher 赋予更强大的专属能力。

### 1. 烧录 AI 模型

借助内置的 Himax 端侧 AI 视觉芯片，您可以通过 SenseCraft AI 平台轻松部署新的识别模型：

- 将电脑连接至 Watcher 底部的 Type-C 接口。
- 在 SenseCraft AI 平台中选择 Workspace 下的 `SenseCAP Watcher`，并选择**序列号较小**的端口进行模型烧录。

  <div align="center">
    <img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/connect-watcher-himax.png" alt="connect-watcher-himax"/>
  </div>

- 烧录完成后若摄像头未正常工作，请尝试重启设备。

### 2. 烧录 XiaoZhi 固件

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI">

Coming Soon.

</TabItem>
<TabItem value="flasher" label="单文件烧录（推荐）" default>

- **最新固件 v1.8.8**：[下载地址](https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/v1.8.8_sensecap-watcher.zip)

- 解压下载的固件包，使用 [esptool.py](https://github.com/espressif/esptool) 工具执行烧录：

  ```shell
  esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
  ```

</TabItem>

<TabItem value="compile" label="从源码编译（开发者适用）">

- 需提前配置好 IDF 工具链环境，并克隆代码仓库：[GitHub 仓库](https://github.com/Wvirgil123/xiaozhi-esp32/tree/feat-sscma_invoke)

- 在项目根目录下执行以下命令：

  ```shell
  cd xiaozhi-esp32
  idf.py --set-target esp32s3
  idf.py menuconfig  # 在图形化界面中选择板卡类型为 SenseCAP Watcher
  idf.py build flash monitor
  ```

</TabItem>
</Tabs>

## 开始对话

现在您已对 SenseCAP Watcher 的基本使用有了初步了解，接下来可以探索其对话与工具调用能力，例如调用摄像头功能或设置主动交互的时间策略。

例如我的角色名字设置为`Watcher`，设置如下：

<div align="center">
<img class='img-responsive' width="800" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-agent-role.png" alt="watcher-agent-role"/>
</div>

### 唤醒设备

设备在没有唤醒时，会保存待机的状态，从而不会监听周围的对话。当设备被唤醒后，它会开始监听周围的对话，并进行对话或者根据用户指令执行相应的操作。

<Tabs>
<TabItem value="vision" label="视觉唤醒" default>

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/vision-trigger-watcher.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

目前的视觉唤醒功能提供以下配置选项：

- **检测目标编号** (`target`)：指定待检测的目标编号。该编号取决于所使用的视觉模型，默认值为 0。
- **检测持续时间** (`duration`)：单位为秒，用于调节视觉唤醒的灵敏度。默认值为 1 秒（该默认值未包含 1 秒防抖处理）。
- **置信度阈值** (`threshold`)：视觉模型识别物体的置信度下限，用于调节模型检测灵敏度。以百分比表示，默认值为 75%。
- **冷却时间** (`interval`)：单位为秒，表示一次对话结束后再次触发前所需等待的时间，用于避免物体触发频繁打断。默认值为 8 秒。

例如，你可以通过修改 `threshold` 参数来调整模型的灵敏度。例如你觉得当前的阈值设置，太严格了，你只需要对 Watcher 说：“请设置置信度阈值为 60%”。

</TabItem>

<TabItem value="voice" label="语音唤醒">

<div style={{ textAlign: 'center' }}>
<video width="auto" height="320" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/voice-trigger-watcher.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

</TabItem>

<TabItem value="button" label="按键唤醒">
  <div style={{ textAlign: 'center' }}>
  <video width="auto" height="320" controls>
    <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/click-trigger-watcher.mov" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>
</TabItem>
</Tabs>

### 调用摄像头

对着 Watcher 说：

- `请打开摄像头`
- `你看看你能看到什么?`
- `你面前有什么东西？`

<div style={{ textAlign: 'center' }}>
<video width="auto" height="320" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-activate-camera.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

## 资源

以下是一些进阶资源，帮助您根据自身需求进一步拓展 SenseCAP Watcher 的应用边界，无论是在本地化部署、隐私保护还是构建个性化知识库方面，都能找到对应的实现方案：

- [AI 对话驱动全屋智能](/cn/ha_dify_watcher_llms) - 通过 SenseCAP Watcher 直接语音控制灯光、空调、窗帘等智能家居设备，彻底告别手动操作。
<!--- [搭建知识库聊天机器人](/cn/knowledge_watcher_llms) - 将 SenseCAP Watcher 变身虚拟展厅秘书，为企业自动讲解产品与方案，并能智能识别客户兴趣焦点。-->

## 引用

- [SenseCAP Watcher 硬件概述](/cn/watcher_hardware_overview) - SenseCAP Watcher 的硬件资源、结构设计等
- [SenseCAP Watcher 操作指南](/cn/watcher_operation_guideline) - SenseCAP Watcher 如何进行开机、关机的基本逻辑
- [SenseCAP Watcher 端侧视觉模型训练](/cn/training_model_for_watcher) - SenseCAP Watcher 端侧视觉模型训练指南，包括数据准备、模型训练和部署等步骤。
- [SenseCAP Watcher - 网页控制面板](/cn/watcher_web_control_panel)
- [SenseCAP Watcher - 设备网络设置指南](/cn/device_network_setup/)
