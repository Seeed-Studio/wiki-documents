---
description: Use the Skills module in Seeed Jetson DevelopTool to run 50+ built-in automation scripts for drivers, AI frameworks, and system tuning on your Jetson device.
title: Skills
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Skills
  - automation
  - OpenClaw
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_skills
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/jetson_developtool_skills/
---

The **Skills** module provides 50+ built-in automation scripts that handle common Jetson setup and configuration tasks — from installing drivers to deploying AI frameworks — with a single click.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-skills.png" style={{width:800, height:'auto'}}/></div>

## Skill Categories

### Drivers & Fixes
| Skill | Description |
|-------|-------------|
| USB-WiFi (88x2bu) | Install driver for RTL88x2BU Wi-Fi adapters |
| 5G Module Support | Configure 5G cellular module connectivity |
| Bluetooth Conflict Fix | Resolve common Bluetooth + Wi-Fi coexistence issues |
| NVMe Boot | Configure the system to boot from NVMe SSD |
| Docker Cleanup | Remove unused Docker images and containers to free space |

### AI / LLM
| Skill | Description |
|-------|-------------|
| PyTorch (Jetson) | Install the NVIDIA-optimized PyTorch wheel for JetPack |
| Ollama | Install Ollama LLM inference engine |
| DeepSeek | Deploy DeepSeek models on Jetson |
| Qwen2 | Install Qwen2 LLM with Jetson optimizations |
| LeRobot | Set up Hugging Face LeRobot for embodied AI |
| vLLM | Install vLLM high-throughput inference server |

### Vision / YOLO
| Skill | Description |
|-------|-------------|
| YOLOv8 | Install Ultralytics YOLOv8 with TensorRT export |
| DeepStream | Set up NVIDIA DeepStream SDK |
| NVBLOX | Install NVBLOX for 3D scene reconstruction |
| Depth Estimation | Configure depth estimation pipeline |

### Network & Remote
| Skill | Description |
|-------|-------------|
| VS Code Server | Install code-server for browser-based IDE |
| VNC Server | Set up noVNC remote desktop |
| SSH Key Setup | Configure passwordless SSH key authentication |
| Proxy Config | Configure system-wide HTTP/HTTPS proxy |

### System Tuning
| Skill | Description |
|-------|-------------|
| Max Performance Mode | Set Jetson to maximum CPU/GPU clock speeds (`nvpmodel`) |
| Swap Config | Create or resize swap space |
| Fan Control | Configure fan curve and cooling profile |
| Cache Cleanup | Clear package and pip caches to recover disk space |

## Running a Skill

1. Connect to your Jetson device.
2. Open the **Skills** tab.
3. Browse by category or search by keyword.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-header.png" style={{width:800, height:'auto'}}/></div>

4. Click **Run** on the desired skill.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-cards.png" style={{width:800, height:'auto'}}/></div>

5. A log window shows the execution output in real time.

## Community Skills (OpenClaw)

Skills use the [OpenClaw](https://github.com/Seeed-Studio/openclaw) format. You can add your own custom skills by placing them in the `skills/openclaw/` directory — the tool auto-loads them on startup.

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
