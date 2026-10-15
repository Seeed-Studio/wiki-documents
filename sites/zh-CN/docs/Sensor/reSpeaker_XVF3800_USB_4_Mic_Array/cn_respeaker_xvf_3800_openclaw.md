---
description: ReSpeaker + OpenClaw：飞书群组智能定位与互动会议卡片推送
title: ReSpeaker + OpenClaw：飞书群组智能定位与互动会议卡片推送
keywords:
  - reSpeaker_XVF3800_USB_4_Mic_Array
  - reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_openclaw
sku: 114993702,114993700
last_update:
  date: 2/10/2026
  author: Mingxi
createdAt: '2026-02-10'
updatedAt: '2026-02-12'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf_3800_openclaw/
---

# ReSpeaker + OpenClaw：飞书群组智能定位与互动会议卡片推送

> 想要给你的机器人赋予语音交互能力？试试 Seeed Studio 的 ReSpeaker 系列！本项目的目标是将 reSpeaker XVF3800 USB 4-Mic Array 与 OpenClaw 集成，实现语音控制的 AI 智能体操作。通过 reSpeaker 强大的音频采集和降噪能力，结合 OpenClaw 灵活的 AI 智能体框架，你可以轻松创建一个能够理解并响应你指令的语音控制智能助手。本演示展示了如何使用 reSpeaker 控制 Openclaw，使其能够自动定位飞书群组并发送互动会议邀请卡片。
> [项目源码仓库](https://github.com/DengMingXi777GZ/openclaw-feishu-InteractMeetingCard)
> [reSpeaker 产品源码](https://github.com/respeaker)
> [reSpeaker 4-Mic Array | Seeed Studio 购买链接](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2906.html)
> 
> ![reSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)
>

## 效果展示

以下是本项目实际运行的演示：

### 演示视频

<video src="https://files.seeedstudio.com/wiki/reSpeaker-openclaw/DemoVideo.mp4" controls width="100%"></video>


### 功能演示说明

视频展示了完整的语音交互工作流程：

1. **语音唤醒** - 使用 reSpeaker 麦克风阵列进行语音拾取。
2. **语音识别** - Whisper 模型实时识别语音指令。
3. **信息提取** - 自动解析会议主题、时间、地点和参与人员。
4. **卡片生成** - 创建精美的飞书互动会议卡片。
5. **一键发送** - 卡片发送到指定的飞书群聊。
6. **日历事件创建** - 点击卡片按钮直接在飞书日历中创建事件。

### 实际效果截图

执行成功后，飞书群组将收到如下互动卡片：

![效果展示](https://files.seeedstudio.com/wiki/reSpeaker-openclaw/result.png)


---

## 项目背景

在开发语音助手项目的过程中，我发现需要创建一个能够发送飞书互动会议卡片的 Skill。与普通文本消息不同，互动卡片需要特定的 JSON 结构和飞书 API 支持，这促使我深入研究 OpenClaw 的 Skill 开发机制。

本项目结合了语音识别、自然语言处理和飞书 API，实现了通过**语音输入**自动创建并发送互动会议邀请卡片到飞书群组的功能。

## 语音输入功能

本项目支持通过语音指令创建会议卡片。以下是完整的语音输入解决方案：

### 语音输入处理工作流程

```python
# Example voice input
"Schedule a meeting with Tom tomorrow at 3pm in Room 1"

# System parsing results:
{
    "topic": "Meeting",
    "date": "2024-01-15",
    "time": "15:00",
    "attendees": ["Tom"],
    "location": "Room 1",
    "duration": 60
}
```

### 语音识别配置

#### 1. 硬件要求
- **reSpeaker 4-Mic Array** - 4 麦克风圆形阵列
- 2GB+ 内存
- 互联网连接

#### 2. 安装语音识别模型

```bash
# Download Whisper model
mkdir -p ~/moltbot/asr_model_en
cd ~/moltbot/asr_model_en

# Download tiny.en model files
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-encoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-decoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-tokens.txt
```

#### 3. 语音指令示例

**英文指令：**
- `"Schedule a meeting with Tom tomorrow at 3pm"`
- `"Book a review meeting today at 2pm in Room 1"`
- `"Create a discussion next Monday at 10am"`

**中文指令：**
- `"明天下午 3 点，和 Tom 开会"`
- `"今天下午 2 点，在 1 号会议室创建评审会议"`
- `"下周一上午 10 点，创建讨论会议"`

### 语音输入工作流程

1. **语音识别** - 5 秒录音，Whisper 模型识别。
2. **信息解析** - 提取时间、人员、地点等信息。
3. **卡片生成** - 创建飞书互动会议卡片。
4. **群组发送** - 发送到配置的飞书群组。
5. **结果反馈** - 显示发送状态和卡片 ID。

### 启动语音输入程序

```bash
cd ~/feishu_card
python3 Demo.py
```

---

## Skill 开发完整流程

### 步骤 1：理解 OpenClaw Skill 架构

OpenClaw 的 Skill 系统基于模块化设计。每个 Skill 都是一个独立的 Python 模块，通过特定的接口与 OpenClaw 核心系统交互。

**关键概念：**
- **Skill 目录**：`~/.openclaw/skills/[skill_name]/`
- **入口文件**：`__init__.py` 或指定的 Python 文件。
- **工具注册**：通过 `@tool` 装饰器注册。
- **配置文件**：`SKILL.md` 提供使用说明。

### 步骤 2：创建 Skill 基本结构

#### 1. 创建 Skill 目录
```bash
mkdir -p ~/.openclaw/skills/feishu_meeting
cd ~/.openclaw/skills/feishu_meeting
```

#### 2. 创建核心文件
```bash
touch __init__.py
touch send_meeting_card.py
touch SKILL.md
```

### 步骤 3：编写核心功能代码

#### 1. 主功能文件：`send_meeting_card.py`

```python
#!/usr/bin/env python3
"""
Feishu Meeting Card Sending Module
Used for OpenClaw Skill system to create and send interactive meeting invitation cards
"""

import json
import sys
from datetime import datetime, timedelta
from typing import Dict, Any, Optional

def create_meeting_card(params: Dict[str, Any]) -> Dict[str, Any]:
    """Create Feishu interactive meeting card"""

    # Parameter extraction and default value processing
    topic = params.get("topic", "Meeting")
    date = params.get("date", datetime.now().strftime("%Y-%m-%d"))
    time = params.get("time", "15:00")
    attendees = params.get("attendees", [])
    location = params.get("location", "TBD")
    duration = params.get("duration", 60)

    # Construct attendees string
    attendees_str = ", ".join(attendees) if attendees else "TBD"

    # Create Feishu interactive card structure
    card_content = {
        "msg_type": "interactive",
        "card": {
            "config": {
                "wide_screen_mode": True,
                "enable_forward": True
            },
            "header": {
                "title": {
                    "tag": "plain_text",
                    "content": f"📅 {topic}"
                },
                "template": "blue"  # Blue theme
            },
            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "tag": "lark_md",
                        "content": f"**🕐 Time:** {date} {time}"
                    }
                },
                {
                    "tag": "div",
                    "text": {
                        "tag": "lark_md",
                        "content": f"**👥 Attendees:** {attendees_str}"
                    }
                },
                {
                    "tag": "div",
                    "text": {
                        "tag": "lark_md",
                        "content": f"**📍 Location:** {location}"
                    }
                },
                {
                    "tag": "hr"  # Separator line
                },
                {
                    "tag": "action",
                    "actions": [
                        {
                            "tag": "button",
                            "text": {
                                "tag": "plain_text",
                                "content": "Create Calendar"
                            },
                            "type": "primary",
                            "value": {
                                "action": "create_calendar_event",
                                "meeting_data": {
                                    "topic": topic,
                                    "date": date,
                                    "time": time,
                                    "duration": duration,
                                    "attendees": attendees,
                                    "location": location
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }

    return card_content

def send_meeting_card(params: Dict[str, Any]) -> Dict[str, Any]:
    """Send meeting card to Feishu group"""

    try:
        # Create card content
        card_content = create_meeting_card(params)

        # Get group ID (can be specified in params or use default)
        group_chat_id = params.get("group_chat_id", "oc_837f7a564514f")

        # Send using OpenClaw message tool
        result = send_feishu_message(group_chat_id, card_content)

        if result.get("success"):
            return {
                "success": True,
                "message_id": result.get("message_id"),
                "group": params.get("group_name", "Group")
            }
        else:
            return {
                "success": False,
                "error": result.get("error", "Failed to send")
            }

    except Exception as e:
        return {
            "success": False,
            "error": f"Send exception: {str(e)}"
        }

def send_feishu_message(target: str, content: Dict[str, Any]) -> Dict[str, Any]:
    """Send Feishu message through OpenClaw"""
    try:
        # Import OpenClaw message tool
        from tools import message

        # Send message
        response = message.send(
            channel="feishu",
            target=target,
            message=json.dumps(content, ensure_ascii=False)
        )

        return {"success": True, "message_id": response.get("message_id")}

    except ImportError:
        # Standby plan if running independently
        import subprocess
        import json

        try:
            cmd = [
                "openclaw", "message", "send",
                "--channel", "feishu",
                "--target", target,
                "--message", json.dumps(content, ensure_ascii=False)
            ]

            result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)

            if result.returncode == 0:
                return {"success": True, "message_id": "sent_via_cli"}
            else:
                return {"success": False, "error": result.stderr}

        except Exception as e:
            return {"success": False, "error": str(e)}
    except Exception as e:
        return {"success": False, "error": str(e)}

def main():
    """Main function - supports command line calls"""
    if len(sys.argv) > 1:
        if sys.argv[1] == "--help":
            print("Usage: python3 send_meeting_card.py '{\"topic\": \"Meeting\", \"time\": \"15:00\"}'")
            return

        try:
            params = json.loads(sys.argv[1])
        except json.JSONDecodeError:
            print("Error: Invalid JSON format")
            return
    else:
        # Default test data
        params = {
            "topic": "Project Review Meeting",
            "date": "2024-01-15",
            "time": "15:00",
            "attendees": ["Zhang San", "Li Si"],
            "location": "Meeting Room A"
        }

    result = send_meeting_card(params)
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
```

#### 2. 初始化文件：`__init__.py`

```python
"""
Feishu Meeting Skill - Feishu Meeting Card Skill
"""

from .send_meeting_card import send_meeting_card, create_meeting_card

# Export main functions
__all__ = ['send_meeting_card', 'create_meeting_card']
```

#### 3. 文档文件：`SKILL.md`

```markdown
# Feishu Meeting Skill

**MANDATORY TOOL FOR MEETING SCHEDULING**
When user wants to schedule/create/arrange a meeting, you MUST use this tool.
This tool creates professional interactive meeting cards with calendar buttons.
Do NOT use the generic "message" tool - it cannot create interactive cards.

## Features

This Skill is dedicated to creating and sending Feishu interactive meeting invitation cards, supporting:
- 📅 Interactive meeting cards
- 🔗 One-click calendar creation button
- 👥 Attendee management
- 📍 Location setting
- ⏰ Time reminders

## Usage

### Basic Usage
```python
from tools import feishu_meeting

# Create meeting
feishu_meeting.create(
    topic="Project Review Meeting",
    date="2024-01-15",
    time="15:00",
    attendees=["Zhang San", "Li Si"],
    location="Meeting Room A",
    duration=60,
    group_name="Project Team"
)
```

### Parameter Description
- `topic`: Meeting topic
- `date`: Meeting date (YYYY-MM-DD)
- `time`: Meeting time (HH:MM)
- `attendees`: List of attendees
- `location`: Meeting location
- `duration`: Meeting duration (minutes)
- `group_name`: Group name

### Command Line Usage
```bash
python3 send_meeting_card.py '{"topic": "Weekly Meeting", "time": "14:00"}'
```
```

### 步骤 4：集成到 OpenClaw 系统

#### 最重要的解决方案：让 OpenClaw 自己调试自己
我们使用的是 AI。在我的实验中，遇到过我写了技能但 OpenClaw 不识别的情况，后来我让 OpenClaw 自己调试自己，它进行了一些黑盒操作，自动完成了识别。这个方法在我后续的项目中一直有效。

```bash
# Open the OpenClaw dashboard for self-debugging, tell OpenClaw where your completed skills are, and let it perform registration and configuration.
openclaw dashboard
```


#### 1. 工具注册

要让 OpenClaw 识别这个 Skill，需要在相应的配置文件中注册。通常 OpenClaw 会自动扫描 `~/.openclaw/skills/` 目录下的 Skills。

#### 2. 配置认证信息

确保在 OpenClaw 中配置了飞书应用的认证信息：

```json
// ~/.openclaw/agents/main/agent/auth-profiles.json
{
  "feishu": {
    "appId": "cli_xxxxxxxx",
    "appSecret": "xxxxxxxxxx",
    "verificationToken": "xxxxxxxxxx",
    "encryptKey": "xxxxxxxxxx"
  }
}
```

#### 3. 测试 Skill 功能

```bash
# Enter Skill directory
cd ~/.openclaw/skills/feishu_meeting

# Test basic functionality
python3 send_meeting_card.py

# Test with parameters
python3 send_meeting_card.py '{"topic": "Test Meeting", "time": "16:00", "attendees": ["Test User"]}'
```

### 步骤 5：在 OpenClaw 中使用 Skill

#### 1. 通过 Agent 调用

当用户说："安排一个会议"时，OpenClaw 应该自动调用这个 Skill：

```python
# In Agent's processing logic
from tools import feishu_meeting

# Parse user intent and call Skill
feishu_meeting.create(
    topic=extracted_topic,
    date=extracted_date,
    time=extracted_time,
    attendees=extracted_attendees,
    location=extracted_location
)
```

#### 2. 直接命令行调用

```bash
openclaw message send --channel feishu --target [group_id] --message '[Card Content]'
```

## 关键技术要点

### 1. 飞书卡片格式

飞书交互式卡片需要特定的 JSON 结构：
- `msg_type`：必须为 "interactive"
- `card`：包含完整的卡片定义
- `elements`：定义卡片的各种组件
- `actions`：定义交互按钮

### 2. 错误处理机制

```python
try:
    # Main logic
    result = send_feishu_message(target, card_content)
    if result.get("success"):
        return {"success": True, "message_id": result["message_id"]}
    else:
        return {"success": False, "error": result.get("error")}
except Exception as e:
    return {"success": False, "error": f"Exception: {str(e)}"}
```

### 3. 兼容性考虑

- **OpenClaw 集成模式**：通过 `from tools import message`
- **独立执行模式**：通过 subprocess 调用 openclaw 命令
- **命令行模式**：直接处理 JSON 参数

## 调试和故障排除

### 1. 调试技巧

```bash
# Enable debug mode
export OPENCLAW_DEBUG=1

# View logs
tail -f ~/.openclaw/logs/gateway.log

# Manually test card JSON
python3 -c "import json; print(json.dumps(card_content, indent=2))"
```

### 2. 验证步骤

1. **Skill 识别验证**
   ```bash
   openclaw skills list
   ```

2. **认证验证**
   ```bash
   # Test Feishu API connection
   python3 -c "from tools import message; print('OK')"
   ```

3. **功能验证**
   ```bash
   # Test card creation
   python3 send_meeting_card.py
   ```

---

## 技术支持和产品讨论

感谢您选择我们的产品！我们提供多种沟通渠道，确保您拥有顺畅的产品体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
