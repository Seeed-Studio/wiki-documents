---
description: "Hello Watcher"
title: SenseCAP Watcher - 主动与世界交互的 AI 助手
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
slug: /cn/solutions/hello_watcher_llms
last_update:
  date: 09/16/2025
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info 想象一下这样的场景
你走进书房，桌上的 SenseCAP Watcher 瞬间感知到你的存在。屏幕亮起，它微笑着向你问好，并显示今天的待办事项——无需你说一句话，甚至不用动一根手指。
:::

SenseCAP Watcher 正在重新定义人与设备的交互方式。

它拥有独特的"无摩擦触发"对话能力，在你接近时主动发起交互。这不仅仅是技术升级，更是交互逻辑的根本性转变：**首次实现了主动权从人转向机器，完成了从"人适应机器"到"机器主动适应人"的体验跃迁。**

Watcher 的"敏锐之眼"由强大的**端侧 AI 视觉芯片（Himax）**驱动，实现快速本地处理的物体识别和目标跟踪。结合可扩展的 **XiaoZhi** 助手固件，它不仅仅是一台摄像头——而是一个专属的 AI 助手，能够进化并理解你的需求。

## 核心优势

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html?utm=wiki&utm=hello_watcher_llms">SenseCAP Watcher</a></h2>
      <p>一款集成端侧 AI 视觉和灵活开发环境的智能设备，旨在帮助您轻松构建和部署个性化 AI 应用。</p>
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
				<h3>离线"敏锐之眼"：高效端侧视觉处理</h3>
				<p>配备高性能 AI 视觉芯片（Himax），所有图像处理均在设备本地完成。享受快速响应和增强的隐私保护——您的数据无需上传到云端。</p>
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
				<h3>零代码构建 AI 应用，如乐高般简单</h3>
				<p>利用 SenseCraft AI 平台部署 AI 模型，只需几次点击即可快速构建特定场景的应用。部署 AI 模型变得像图片编辑一样简单，完全不需要编程背景。</p>
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
				<h3>灵活的集成平台和工具</h3>
				<p>基于 XiaoZhi MCP 架构，您可以自由定义新的 AI 工具并快速集成本地或云端服务，无缝融入现有智能系统。</p>
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
				<h3>硬件可扩展性：额外接口支持</h3>
				<p>具备 GPIO 扩展接口，可轻松连接各种传感器和执行器，实现深度定制并支持更多创意实现。</p>
			</div>
		</li>
	</ul>
</div>

## 工作原理

SenseCAP Watcher 可以被视为一个"模块化"智能机器人，其核心运作依赖于三个主要组件的协作：

1.  **硬件核心（ESP32S3）**：驱动底层硬件，处理摄像头数据，并维持与云端服务的稳定连接。
2.  **视觉神经（Himax AI 芯片）**：强大的端侧 AI 视觉处理单元，赋予设备实时环境感知能力。
3.  **云端大脑（后端服务）**：负责 AI 角色配置、MCP 工具调度和统一设备管理。

这个过程可以简化为：

Watcher 的"眼睛"（摄像头）捕获图像 → "视觉神经"（Himax 芯片）进行识别并唤醒 XiaoZhi → "大脑"（后端 AI、MCP 服务）理解上下文并响应。

这种模块化设计提供了高度的灵活性和可扩展性。

<div align="center">
  <img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-chatbot-diagram.png" alt="watcher-chatbot-diagram"/>
</div>

## 入门指南

### 三步快速开始

只需三步即可激活您的 Watcher：

1.  **设备上电**：通过 Type-C 数据线供电；如使用电池，请长按侧面按钮开机。
2.  **连接网络**：启动后，设备将生成 Wi-Fi 热点。将您的手机或电脑连接到此热点。| 「[Watcher 网络设置](/cn/device_network_setup)」
3.  **配置和激活**：在浏览器中访问 `192.168.4.1` 为 Watcher 配置 Wi-Fi，并按照 SenseCraft AI 平台上的说明完成激活。| 「[Watcher Web 控制面板](/cn/watcher_web_control_panel/)」

:::info[激活提示]
如果激活失败，请确认验证码正确且设备认证信息未丢失。以下操作通常会导致认证信息丢失：

1.  固件被其他程序覆盖。
2.  执行了重大固件更新而未备份认证信息。
3.  刷入了全新的固件。

如需重新激活，请将设备的 STA Mac 地址（可从串口日志获取）发送至 sensecap@seeed.cc 寻求帮助。请参考：[刷入认证信息](/cn/flash_watcher_agent_firmware/#flashing-authentication-info)。
:::

您可以观看下面的详细教程视频：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/6UDVsv953Tw?si=6OYFfx4orpC5p90d" title="SenseCAP Watcher for Xiaozhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 模型和固件更新：定制专属技能

开发者或高级用户可以刷入不同的模型或固件，为 Watcher 赋予更强大、更专属的能力。

### 1. 刷入 AI 模型

利用内置的 Himax 端侧 AI 视觉芯片，您可以通过 SenseCraft AI 平台轻松部署新的识别模型：

- 将您的电脑连接到 Watcher 底部的 Type-C 接口。
- 在 SenseCraft AI 平台上，在工作区下选择 `SenseCAP Watcher`，并选择**序列号较小**的端口进行模型刷入。

  <div align="center">
    <img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/connect-watcher-himax.png" alt="connect-watcher-himax"/>
  </div>

- 如果刷入后摄像头无法正常工作，请尝试重启设备。

### 2. 刷入 XiaoZhi 固件

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI">

即将推出。

</TabItem>
<TabItem value="flasher" label="单文件刷入（推荐）" default>

- **最新固件 v1.8.8**：[下载链接](https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/v1.8.8_sensecap-watcher.zip)

- 解压下载的固件包，使用 [esptool.py](https://github.com/espressif/esptool) 工具执行刷入：

  ```shell
  esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
  ```
  *（注意：根据您的系统调整端口 `/dev/ttyACM0`，例如 Windows 上的 `COM3`）*

</TabItem>

<TabItem value="compile" label="从源码编译（开发者）">

- 需要预配置的 IDF 工具链环境。克隆代码仓库：[GitHub 仓库](https://github.com/Wvirgil123/xiaozhi-esp32/tree/feat-sscma_invoke)

- 在项目根目录执行以下命令：

  ```shell
  cd xiaozhi-esp32
  idf.py set-target esp32s3
  idf.py menuconfig  # In the GUI, select the board type as SenseCAP Watcher
  idf.py build flash monitor
  ```

</TabItem>
</Tabs>

## 开始对话

现在您已经对 SenseCAP Watcher 有了基本了解，可以探索其对话和工具调用能力，例如使用摄像头功能或设置基于时间的主动交互策略。

例如，如果我的智能体角色名称设置为 `Watcher`，设置如下所示：

<div align="center">
<img class='img-responsive' width="800" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-agent-role.png" alt="watcher-agent-role"/>
</div>

### 唤醒设备

设备在未被唤醒时保持待机状态，意味着它不会监听周围的对话。一旦被唤醒，它开始监听并可以根据用户指令进行对话或执行操作。

<Tabs>
<TabItem value="vision" label="视觉唤醒" default>

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/vision-trigger-watcher.mp4" type="video/mp4" />
  您的浏览器不支持视频标签。
</video>
</div>

当前的视觉唤醒功能提供以下配置选项：

- **目标 ID** (`target`)：指定要检测的目标 ID。此 ID 取决于所使用的视觉模型；默认值为 0。
- **检测持续时间** (`duration`)：单位为秒，用于调整视觉唤醒的敏感度。默认为 1 秒（此默认值不包括 1 秒的防抖处理）。
- **置信度阈值** (`threshold`)：视觉模型识别物体的置信度下限，用于调整检测敏感度。以百分比表示，默认为 75%。
- **冷却期** (`interval`)：单位为秒，表示一次对话结束后再次触发前所需的等待时间，用于避免同一物体频繁中断。默认为 8 秒。

例如，您可以通过修改 `threshold` 参数来调整模型的敏感度。如果您发现当前阈值过于严格，只需对 Watcher 说："请将置信度阈值设置为 60%"。

</TabItem>

<TabItem value="voice" label="语音唤醒">

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/voice-trigger-watcher.mov" type="video/mp4" />
  您的浏览器不支持视频标签。
</video>
</div>

</TabItem>

<TabItem value="button" label="按钮唤醒">
  <div style={{ textAlign: 'center' }}>
  <video width="auto" height="320" controls>
    <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/click-trigger-watcher.mov" type="video/mp4" />
    您的浏览器不支持视频标签。
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
  您的浏览器不支持视频标签。
</video>
</div>

## 资源

以下是一些高级资源，帮助您根据需要进一步扩展 SenseCAP Watcher 的应用边界，无论是本地部署、隐私保护还是构建个性化知识库：

- [AI 对话驱动的智能家居](/cn/ha_dify_watcher_llms) - 通过 SenseCAP Watcher 直接语音控制智能家居设备，如灯光、空调和窗帘，告别手动操作。
<!--- [基于知识的聊天机器人](/cn/knowledge_watcher_llms) - 将 SenseCAP Watcher 转变为虚拟展览秘书，为企业自动解释产品和解决方案，具备智能识别客户兴趣点的能力。-->

## 参考资料

- [SenseCAP Watcher 硬件概述](/cn/watcher_hardware_overview) - SenseCAP Watcher 的硬件资源、结构设计等。
- [SenseCAP Watcher 操作指南](/cn/watcher_operation_guideline) - SenseCAP Watcher 开关机的基本逻辑。
- [为 SenseCAP Watcher 训练设备端视觉模型](/cn/training_model_for_watcher) - 为 SenseCAP Watcher 训练设备端视觉模型的指南，包括数据准备、模型训练和部署。
- [SenseCAP Watcher - Web 控制面板](/cn/watcher_web_control_panel)
- [SenseCAP Watcher - 设备网络设置指南](/cn/device_network_setup/)
