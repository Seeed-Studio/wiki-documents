---
description: This wiki shows how to deploy and use Clawdbot on reComputer Jetson.
title: Local OpenClaw(Clawdbot) on reComputer Jetson with Ollama
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

## Overview

OpenClaw is an agent framework that can work with either cloud LLMs or local models, depending on your deployment needs. Cloud models are convenient to start with: they require no local setup, offer a wide range of model choices, and are easy to scale. The tradeoffs are ongoing token costs, dependence on external services, and stricter constraints around data residency and connectivity. Local models avoid recurring API fees, keep data on-device, and continue to operate in offline or restricted networks. The tradeoffs are additional setup effort and the need to match model size to the device’s compute and storage limits. For edge robotics and long-running assistants, these advantages make local deployment a practical default. This wiki shows how to run OpenClaw on reComputer Jetson with Ollama to build a self‑contained AI control hub.

## What You Will Build

- A local Ollama runtime on Jetson
- OpenClaw Gateway and WebUI running on Jetson
- OpenClaw configured to use an Ollama model as the default LLM

## Supported Hardware

- reComputer Jetson series (e.g., reComputer Robotics J501X)
- NVMe SSD is recommended for faster model loading

:::note
This wiki uses [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html) for the demo, but other Jetson models are also supported.
Ensure the Jetson device has at least 16GB of memory.
:::

## Prerequisites

- reComputer Robotics J5011 with pre-installed Jetpack6.2
- A Discord Bot Token

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::info
Please note that `Discord Bot Token` are not mandatory; you can also use other social software such as WhatsApp.
:::

## Hardware Connection

:::note
Before getting started, please connect the Jetson device to the network and power supply, and make sure the network connection remains stable.
:::


## Step 1: Install Ollama

Open a terminal window on Jetson device, run the follow command to install Ollama on Jetson:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Verify the local API is reachable:

```bash
curl http://localhost:11434/api/tags
```

If the output shows no errors, it means that Ollama has been installed correctly.

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/install_ollama.png" />
</div>

## Step 2: Pull a Local Model

Pull at least one model from Ollama. Example:

```bash
ollama pull qwen3-vl:2b
```

List installed models:

```bash
ollama list
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/ollama_list.png" />
</div>

## Step 3: Install OpenClaw (Clawdbot)

OpenClaw requires Node.js 22 or newer. Install it globally with npm:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

## Step 4: Configure OpenClaw

After the OpenClaw download is complete, it will automatically enter the configuration page. Please follow the instructions shown in the terminal window to configure OpenClaw.

:::danger
The setup wizard page may not include an option to configure a local model. Don’t worry — we can directly modify the configuration file later. In the setup wizard, you can choose to skip the model configuration or temporarily set up a cloud-based model.
:::

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/config.png" />
</div>

If you see the page above, it means that OpenClaw has been successfully installed and configured. Next, we will proceed to set up the local model.

Open the `~/.openclaw/openclaw.json` file and add or modify the following configuration.

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

The complete configuration file is as follows:

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

## Step 5: reStart OpenClaw Services

Run the restart command:

```bash
openclaw gateway restart
```

## Step 6: Open WebUI and Verify

Open the WebUI in jetson browser:

```
http://127.0.0.1:18789/
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/web_ui.png" />
</div>

If the page does not load, check that the Gateway is running.

:::danger
If you keep seeing an “unable to access” error when opening the WebUI, it may be because the access token is enabled. You can find the WebUI token in the configuration file and append it to the WebUI URL when accessing it.
`http://127.0.0.1:18789/?token=...`
::: 

## Effect Demonstration

The good news is that we have successfully run OpenClaw using low-power local computing (Jetson). 
The bad news is that the performance of the local model has not met expectations.

This may be due to my configuration parameters or prompt settings not being properly tuned. I believe that by adjusting OpenClaw’s working parameters, we can further optimize the performance of the local model.

If you are also interested in this project, try deploying it now! 

<iframe width="800" height="450" src="https://www.youtube.com/embed/kZbWuK7YFuc" title="Local OpenClaw(Clawdbot) on reComputer Jetson with Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## References

- https://docs.openclaw.ai/
- https://docs.openclaw.ai/providers/ollama
- https://ollama.com/
- https://wiki.seeedstudio.com/ai_robotics_recomputer_j501_robotics_getting_started/


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
