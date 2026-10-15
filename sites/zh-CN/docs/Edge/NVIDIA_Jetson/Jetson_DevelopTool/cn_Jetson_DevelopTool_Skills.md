---
description: 在 Seeed Jetson DevelopTool 中使用 Skills 模块，在 Jetson 设备上一键运行 50+ 内置自动化脚本，用于驱动、AI 框架和系统调优。
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
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_skills/
---

**Skills** 模块提供 50+ 内置自动化脚本，可处理常见的 Jetson 安装和配置任务——从安装驱动到部署 AI 框架——只需一键即可完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-skills.png" style={{width:800, height:'auto'}}/></div>

## Skill 分类

### 驱动与修复
| Skill | 描述 |
|-------|-------------|
| USB-WiFi (88x2bu) | 为 RTL88x2BU Wi-Fi 适配器安装驱动 |
| 5G Module Support | 配置 5G 蜂窝模块连接 |
| Bluetooth Conflict Fix | 解决常见的蓝牙与 Wi-Fi 共存冲突问题 |
| NVMe Boot | 将系统配置为从 NVMe SSD 启动 |
| Docker Cleanup | 删除未使用的 Docker 镜像和容器以释放空间 |

### AI / LLM
| Skill | 描述 |
|-------|-------------|
| PyTorch (Jetson) | 为 JetPack 安装 NVIDIA 优化的 PyTorch wheel |
| Ollama | 安装 Ollama LLM 推理引擎 |
| DeepSeek | 在 Jetson 上部署 DeepSeek 模型 |
| Qwen2 | 安装带 Jetson 优化的 Qwen2 LLM |
| LeRobot | 配置 Hugging Face LeRobot 以实现具身智能 AI |
| vLLM | 安装 vLLM 高吞吐推理服务器 |

### 视觉 / YOLO
| Skill | 描述 |
|-------|-------------|
| YOLOv8 | 安装 Ultralytics YOLOv8 并支持 TensorRT 导出 |
| DeepStream | 配置 NVIDIA DeepStream SDK |
| NVBLOX | 安装 NVBLOX 以进行 3D 场景重建 |
| Depth Estimation | 配置深度估计流水线 |

### 网络与远程
| Skill | 描述 |
|-------|-------------|
| VS Code Server | 安装基于浏览器 IDE 的 code-server |
| VNC Server | 配置 noVNC 远程桌面 |
| SSH Key Setup | 配置免密 SSH 密钥认证 |
| Proxy Config | 配置系统级 HTTP/HTTPS 代理 |

### 系统调优
| Skill | 描述 |
|-------|-------------|
| Max Performance Mode | 将 Jetson 设置为最大 CPU/GPU 频率（`nvpmodel`） |
| Swap Config | 创建或调整交换分区大小 |
| Fan Control | 配置风扇曲线和散热策略 |
| Cache Cleanup | 清理软件包和 pip 缓存以回收磁盘空间 |

## 运行 Skill

1. 连接到你的 Jetson 设备。
2. 打开 **Skills** 选项卡。
3. 按分类浏览或通过关键字搜索。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-header.png" style={{width:800, height:'auto'}}/></div>

4. 在目标 Skill 上点击 **Run**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-cards.png" style={{width:800, height:'auto'}}/></div>

5. 日志窗口会实时显示执行输出。

## 社区 Skills（OpenClaw）

Skills 使用 [OpenClaw](https://github.com/Seeed-Studio/openclaw) 格式。你可以将自定义 Skill 放在 `skills/openclaw/` 目录中——工具会在启动时自动加载它们。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
