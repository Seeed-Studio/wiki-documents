---
description: "Hello Watcher"
title: AI Assistant that actively interacts with the world
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
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Imagine this
You walk into your study, and the SenseCAP Watcher on your desk instantly senses your presence. The screen lights up, it greets you with a smile, and displays your to-do list for the day—no need for you to speak a word or even lift a finger.
:::

SenseCAP Watcher is redefining how humans and devices interact.

It possesses a unique "Frictionless Trigger" conversational ability, initiating interaction proactively as you approach. This isn't just a technical upgrade; it's a fundamental shift in interaction logic: **For the first time, the initiative transitions from the human to the machine, achieving an experiential leap from "humans adapting to machines" to "machines actively adapting to humans."**

Watcher's "Keen Eye" is powered by a powerful **On-Device AI Vision Chip (Himax)**, enabling rapid local processing for object recognition and target tracking. Combined with the expandable assistant firmware, it's more than just a camera—it's a dedicated AI assistant that evolves and understands your needs.

## Core Advantages

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html?utm=wiki&utm=hello_watcher_llms">SenseCAP Watcher</a></h2>
      <p>An intelligent device integrating on-device AI vision and a flexible development environment, designed to help you easily build and deploy personalized AI applications.</p>
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
				<h3>Offline "Keen Eye": Efficient On-Device Vision Processing</h3>
				<p>Equipped with a high-performance AI vision chip (Himax), all image processing is completed locally on the device. Enjoy swift responses and enhanced privacy protection—your data doesn't need to be uploaded to the cloud.</p>
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
				<h3>Build AI Apps with Zero Code, As Simple As Lego</h3>
				<p>Leverage the SenseCraft AI platform to deploy AI models and quickly build applications for specific scenarios with just a few clicks. Deploying AI models becomes as easy as photo editing, requiring absolutely no programming background.</p>
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
				<h3>Flexible Integration Platform and Tools</h3>
				<p>Based on its flexible MCP architecture, you can freely define new AI tools and quickly integrate local or cloud services, seamlessly fitting into existing smart systems.</p>
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
				<h3>Hardware Expandability: Additional Interface Support</h3>
				<p>Features GPIO expansion interfaces for easy connection to various sensors and actuators, enabling deep customization and supporting more creative implementations.</p>
			</div>
		</li>
	</ul>
</div>

## How It Works

SenseCAP Watcher can be thought of as a "modular" intelligent robot, with its core operation relying on the collaboration of three main components:

1.  **Hardware Core (ESP32S3)**: Drives the underlying hardware, processes camera data, and maintains stable connections to cloud services.
2.  **Visual Nerve (Himax AI Chip)**: A powerful on-device AI vision processing unit that grants the device real-time environmental perception capabilities.
3.  **Cloud Brain (Backend Services)**: Responsible for AI role configuration, MCP tool scheduling, and unified device management.

The process can be simplified as follows:

Watcher's "eyes" (camera) capture images → The "visual nerve" (Himax chip) performs recognition and wakes up the assistant → The "brain" (backend AI, MCP services) understands the context and responds.

This modular design offers high flexibility and extensibility.

<div align="center">
  <img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-chatbot-diagram.png" alt="watcher-chatbot-diagram"/>
</div>

## Getting Started Guide

### Quick Start in Three Steps

Activate your Watcher in just three steps:

1.  **Power On the Device**: Provide power via the Type-C data cable; if using a battery, press and hold the side button to turn it on.
2.  **Connect to Network**: After booting, the device will generate a Wi-Fi hotspot. Connect your phone or computer to this hotspot. | 「[Watcher Network Setup](/device_network_setup)」
3.  **Configure and Activate**: Access `192.168.4.1` in your browser to configure Wi-Fi for Watcher and follow the instructions on the SenseCraft AI platform to complete activation. | 「[Watcher Web Control Panel](/watcher_web_control_panel/)」

:::info[Activation Tip]
If activation fails, please confirm the verification code is correct and the device authentication information is not lost. The following actions typically cause loss of authentication information:

1.  The firmware was overwritten by another program.
2.  A major firmware update was performed without backing up authentication information.
3.  A completely new firmware was flashed.

If reactivation is needed, please send the device's STA Mac address (can be obtained from serial logs) to sensecap@seeed.cc for assistance. Please refer to: [Flashing Authentication Info](/flash_watcher_agent_firmware/#flashing-authentication-info).
:::

You can watch a detailed tutorial in the video below:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/6UDVsv953Tw?si=6OYFfx4orpC5p90d" title="SenseCAP Watcher for Xiaozhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Model and Firmware Updates: Customize Exclusive Skills

Developers or advanced users can flash different models or firmware to empower Watcher with more powerful, exclusive capabilities.

For detailed instructions, please refer to the relevant sections in our comprehensive guide:
- **[AI Model Flashing Process](/visual_trigger_and_ai_flash#ai-model-flashing-process)**
- **[Firmware Flashing Process](/visual_trigger_and_ai_flash#firmware-flashing-process)**

## Start a Conversation

Now that you have a basic understanding of SenseCAP Watcher, you can explore its conversational and tool-calling capabilities, such as using the camera function or setting time-based strategies for proactive interaction.

For example, if my agent's role name is set to `Watcher`, the settings would look like this:

<div align="center">
<img class='img-responsive' width="800" src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-agent-role.png" alt="watcher-agent-role"/>
</div>

### Wake the Device

The device remains in a standby state when not awakened, meaning it does not listen to surrounding conversations. Once awakened, it begins listening and can engage in dialogue or execute operations based on user instructions.

<Tabs>
<TabItem value="vision" label="Visual Wake-Up" default>

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/vision-trigger-watcher.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

:::info[How to Enable Visual Wake-Up]
By default, the visual wake-up feature is disabled. To turn it on, you can say to the Watcher when it's awaked:

**"Hey Watcher, turn on model inference."**
:::

The current visual wake-up function offers the following configuration options:

- **Target ID** (`target`): Specifies the target ID to detect. This ID depends on the visual model used; the default value is 0.
- **Detection Duration** (`duration`): Unit is seconds, used to adjust the sensitivity of the visual wake-up. The default is 1 second (this default does not include the 1-second debounce processing).
- **Confidence Threshold** (`threshold`): The lower confidence limit for the visual model to recognize an object, used to adjust detection sensitivity. Represented as a percentage, the default is 75%.
- **Cooldown Period** (`interval`): Unit is seconds, indicating the wait time required after one conversation ends before triggering again, used to avoid frequent interruptions by the same object. The default is 8 seconds.

For example, you can adjust the model's sensitivity by modifying the `threshold` parameter. If you find the current threshold too strict, simply say to Watcher: "Please set the confidence threshold to 60%".

</TabItem>

<TabItem value="voice" label="Voice Wake-Up">

<div style={{ textAlign: 'center' }}>
<video width="auto" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/voice-trigger-watcher.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

</TabItem>

<TabItem value="button" label="Button Wake-Up">
  <div style={{ textAlign: 'center' }}>
  <video width="auto" height="320" controls>
    <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/click-trigger-watcher.mov" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>
</TabItem>
</Tabs>

### Using the Camera

Say to Watcher:

- `Please turn on the camera`
- `What can you see?`
- `What's in front of you?`

<div style={{ textAlign: 'center' }}>
<video width="auto" height="320" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/ai-agents/sensecap-watcher/watcher-activate-camera.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

## Resources

Here are some advanced resources to help you further expand the application boundaries of SenseCAP Watcher according to your needs, whether for on-premise deployment, privacy protection, or building personalized knowledge bases:

- [AI Conversation-Driven Smart Home](/ha_dify_watcher_llms) - Control smart home devices like lights, AC, and curtains directly via voice through SenseCAP Watcher, saying goodbye to manual operation.
<!--- [Knowledge Based chatbots](/knowledge_watcher_llms) - Transform SenseCAP Watcher into a virtual exhibition secretary, automatically explaining products and solutions for businesses, with the ability to intelligently identify customer points of interest.-->

## References

- [SenseCAP Watcher Hardware Overview](/watcher_hardware_overview) - Hardware resources, structural design, etc., of SenseCAP Watcher.
- [SenseCAP Watcher Operation Guideline](/watcher_operation_guideline) - Basic logic for turning SenseCAP Watcher on and off.
- [Training On-Device Vision Models for SenseCAP Watcher](/training_model_for_watcher) - A guide to training on-device vision models for SenseCAP Watcher, including data preparation, model training, and deployment.
- [SenseCAP Watcher - Web Control Panel](/watcher_web_control_panel)
- [SenseCAP Watcher - Device Network Setup Guide](/device_network_setup/)
