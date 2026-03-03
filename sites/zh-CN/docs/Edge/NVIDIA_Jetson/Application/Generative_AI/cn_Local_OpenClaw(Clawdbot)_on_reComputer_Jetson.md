---
description: 本 wiki 展示如何在 reComputer Jetson 上部署和使用 Clawdbot。
title: 在 reComputer Jetson 上使用 Ollama 运行本地 OpenClaw（Clawdbot）
keywords:
- reComputer
- Jetson
- LLM
- Clawdbot
- Qwen
- Ollama
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops_homepage.webp
slug: /local_openclaw_on_recomputer_jetson
sku: 114110314, 114090066
last_update:
  date: 02/3/2026
  author: Youjiang
---

## 概述

OpenClaw 是一个智能体框架，可以根据您的部署需求与云端 LLM 或本地模型配合使用。云端模型便于入门：无需本地设置，提供广泛的模型选择，易于扩展。权衡之处在于持续的令牌成本、对外部服务的依赖，以及围绕数据驻留和连接性的更严格约束。本地模型避免了重复的 API 费用，将数据保留在设备上，并在离线或受限网络中继续运行。权衡之处在于额外的设置工作以及需要将模型大小与设备的计算和存储限制相匹配。对于边缘机器人和长期运行的助手，这些优势使本地部署成为实用的默认选择。本 wiki 展示如何在 reComputer Jetson 上使用 Ollama 运行 OpenClaw，构建一个自包含的 AI 控制中心。

## 您将构建的内容

- 在 Jetson 上运行的本地 Ollama 运行时
- 在 Jetson 上运行的 OpenClaw Gateway 和 WebUI
- 配置 OpenClaw 使用 Ollama 模型作为默认 LLM

## 支持的硬件

- reComputer Jetson 系列（例如，reComputer Robotics J501X）
- 建议使用 NVMe SSD 以加快模型加载速度

:::note
本 wiki 使用 [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html) 进行演示，但也支持其他 Jetson 型号。
确保 Jetson 设备至少有 16GB 内存。
:::

## 前提条件

- 预装 Jetpack6.2 的 reComputer Robotics J5011
- Discord Bot Token

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

:::info
请注意，`Discord Bot Token` 不是必需的；您也可以使用其他社交软件，如 WhatsApp。
:::

## 硬件连接

:::note
开始之前，请将 Jetson 设备连接到网络和电源，并确保网络连接保持稳定。
:::


## 步骤 1：安装 Ollama

在 Jetson 设备上打开终端窗口，运行以下命令在 Jetson 上安装 Ollama：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

验证本地 API 是否可访问：

```bash
curl http://localhost:11434/api/tags
```

如果输出显示没有错误，说明 Ollama 已正确安装。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/install_ollama.png" />
</div>

## 步骤 2：拉取本地模型

从 Ollama 拉取至少一个模型。示例：

```bash
ollama pull qwen3-vl:2b
```

列出已安装的模型：

```bash
ollama list
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/ollama_list.png" />
</div>

## 步骤 3：安装 OpenClaw（Clawdbot）

OpenClaw 需要 Node.js 22 或更新版本。使用 npm 全局安装：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

## 步骤 4：配置 OpenClaw

OpenClaw 下载完成后，将自动进入配置页面。请按照终端窗口中显示的说明配置 OpenClaw。

:::danger
设置向导页面可能不包含配置本地模型的选项。不用担心——我们稍后可以直接修改配置文件。在设置向导中，您可以选择跳过模型配置或暂时设置基于云的模型。
:::

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/config.png" />
</div>

如果您看到上面的页面，说明 OpenClaw 已成功安装和配置。接下来，我们将继续设置本地模型。

打开 `~/.openclaw/openclaw.json` 文件并添加或修改以下配置。

```json
{
  "agents": {
    "defaults": {
      "models": {"ollama":{}},
      "model": {"primary": "ollama/qwen3-vl:2b"}
    }
  },
  "models": {
    "providers": {
      "ollama":{
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:2b",
            "name": "Qwen3 VL 2B",
            "reasoning": false,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
}
```

完整的配置文件如下：

<details>

<summary> ~/.openclaw/openclaw.json </summary>

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "agents": {
    "defaults": {
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      },
      "compaction": {
        "mode": "safeguard"
      },
      "workspace": "/home/seeed/.openclaw",
      "models": {
        "qwen-portal/coder-model": {
          "alias": "qwen"
        },
        "qwen-portal/vision-model": {},
        "ollama":{}
      },
      "model": {
        "primary": "ollama/qwen3-vl:2b"
      }
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    "port": 18789,
    "bind": "loopback",
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "plugins": {
    "entries": {
      "qwen-portal-auth": {
        "enabled": true
      },
      "discord": {
        "enabled": true
      }
    }
  },
  "models": {
    "providers": {
      "qwen-portal": {
        "baseUrl": "https://portal.qwen.ai/v1",
        "apiKey": "qwen-oauth",
        "api": "openai-completions",
        "models": [
          {
            "id": "coder-model",
            "name": "Qwen Coder",
            "reasoning": false,
            "input": [
              "text"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          },
          {
            "id": "vision-model",
            "name": "Qwen Vision",
            "reasoning": false,
            "input": [
              "text",
              "image"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      },
      "ollama":{
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:2b",
            "name": "Qwen3 VL 2B",
            "reasoning": false,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "auth": {
    "profiles": {
      "qwen-portal:default": {
        "provider": "qwen-portal",
        "mode": "oauth"
      }
    }
  },
  "channels": {
    "discord": {
      "enabled": true,
      "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "groupPolicy": "open"
    }
  },
  "skills": {
    "install": {
      "nodeManager": "npm"
    }
  },
  "wizard": {
    "lastRunAt": "2026-02-02T06:19:11.256Z",
    "lastRunVersion": "2026.1.30",
    "lastRunCommand": "onboard",
    "lastRunMode": "local"
  },
  "meta": {
    "lastTouchedVersion": "2026.1.30",
    "lastTouchedAt": "2026-02-02T06:19:11.282Z"
  }
}
```

</details>

## 步骤 5：重启 OpenClaw 服务

运行重启命令：

```bash
openclaw gateway restart
```

## 步骤 6：打开 WebUI 并验证

在 jetson 浏览器中打开 WebUI：

```
http://127.0.0.1:18789/
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/web_ui.png" />
</div>

如果页面无法加载，请检查 Gateway 是否正在运行。

:::danger
如果在打开 WebUI 时持续看到"无法访问"错误，可能是因为启用了访问令牌。您可以在配置文件中找到 WebUI 令牌，并在访问时将其附加到 WebUI URL。
`http://127.0.0.1:18789/?token=...`
::: 

## 效果演示

好消息是我们已经成功使用低功耗本地计算（Jetson）运行了 OpenClaw。
坏消息是本地模型的性能没有达到预期。

这可能是由于我的配置参数或提示设置没有得到适当调整。我相信通过调整 OpenClaw 的工作参数，我们可以进一步优化本地模型的性能。

如果您也对这个项目感兴趣，现在就试着部署它吧！

<iframe width="800" height="450" src="https://www.youtube.com/embed/kZbWuK7YFuc" title="Local OpenClaw(Clawdbot) on reComputer Jetson with Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 参考资料

- https://docs.openclaw.ai/
- https://docs.openclaw.ai/providers/ollama
- https://ollama.com/
- https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_j501_robotics_getting_started/


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
