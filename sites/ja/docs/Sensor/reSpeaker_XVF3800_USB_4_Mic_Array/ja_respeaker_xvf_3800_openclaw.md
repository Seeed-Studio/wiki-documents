---
description: "ReSpeaker + OpenClaw: Lark グループスマート位置特定とインタラクティブ会議カードプッシュ"
title: "ReSpeaker + OpenClaw: Lark グループスマート位置特定とインタラクティブ会議カードプッシュ"
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_openclaw
sku: 114993702,114993700
last_update:
  date: 2/10/2026
  author: Mingxi
---

# ReSpeaker + OpenClaw: Lark グループスマート位置特定とインタラクティブ会議カードプッシュ

> ロボットに音声インタラクション機能を与えたいですか？Seeed Studio の ReSpeaker シリーズをお試しください！このプロジェクトの目標は、reSpeaker XVF3800 USB 4-Mic Array を OpenClaw と統合し、音声制御 AI エージェント操作を可能にすることです。reSpeaker の強力な音声キャプチャとノイズリダクション機能と、OpenClaw の柔軟な AI エージェントフレームワークを組み合わせることで、コマンドを理解し応答する音声制御スマートアシスタントを簡単に作成できます。このデモでは、reSpeaker を使用して Openclaw を制御し、Lark グループを自動的に特定してインタラクティブ会議招待カードを送信する方法を実演します。
> [プロジェクトソースコードリポジトリ](https://github.com/DengMingXi777GZ/openclaw-feishu-InteractMeetingCard)
> [reSpeaker 製品ソースコード](https://github.com/respeaker)
> [reSpeaker 4-Mic Array | Seeed Studio 購入リンク](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2906.html)
> 
> ![reSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)
>

## 結果ショーケース

以下は、このプロジェクトの実際の動作のデモンストレーションです：

### デモビデオ

<video src="https://files.seeedstudio.com/wiki/reSpeaker-openclaw/DemoVideo.mp4" controls width="100%"></video>


### 機能デモンストレーション説明

ビデオは完全な音声インタラクションワークフローを実演しています：

1. **音声ウェイクアップ** - reSpeaker マイクロフォンアレイを使用した音声ピックアップ。
2. **音声認識** - Whisper モデルがリアルタイムで音声コマンドを認識。
3. **情報抽出** - 会議トピック、時間、場所、参加者を自動解析。
4. **カード生成** - 美しい Feishu インタラクティブ会議カードを作成。
5. **ワンクリック送信** - カードを指定された Feishu グループチャットに送信。
6. **カレンダーイベント作成** - カードボタンをクリックして Feishu カレンダーに直接イベントを作成。

### 実際の効果スクリーンショット

実行成功後、Feishu グループは以下のようなインタラクティブカードを受信します：

![効果ショーケース](https://files.seeedstudio.com/wiki/reSpeaker-openclaw/result.png)


---

## プロジェクト背景

音声アシスタントプロジェクトを開発している際、Feishu インタラクティブ会議カードを送信できる Skill を作成する必要があることがわかりました。プレーンテキストメッセージとは異なり、インタラクティブカードには特定の JSON 構造と Feishu API サポートが必要で、これにより OpenClaw の Skill 開発メカニズムをより深く掘り下げることになりました。

このプロジェクトは、音声認識、自然言語処理、Feishu API を組み合わせて、**音声入力**を通じて Feishu グループにインタラクティブ会議招待カードを自動作成・送信する機能を実装しています。

## 音声入力機能

このプロジェクトは音声コマンドによる会議カード作成をサポートしています。以下は完全な音声入力ソリューションです：

### 音声入力処理ワークフロー

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

### 音声認識設定

#### 1. ハードウェア要件
- **reSpeaker 4-Mic Array** - 4マイクロフォン円形アレイ
- 2GB+ RAM
- インターネット接続

#### 2. 音声認識モデルのインストール

```bash
# Download Whisper model
mkdir -p ~/moltbot/asr_model_en
cd ~/moltbot/asr_model_en

# Download tiny.en model files
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-encoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-decoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-tokens.txt
```

#### 3. 音声コマンド例

**英語コマンド：**
- `"Schedule a meeting with Tom tomorrow at 3pm"`
- `"Book a review meeting today at 2pm in Room 1"`
- `"Create a discussion next Monday at 10am"`

**中国語コマンド：**
- `"Tomorrow at 3pm, have a meeting with Tom"`
- `"Today at 2pm, create a review meeting in Room 1"`
- `"Next Monday 10am, create a discussion meeting"`

### 音声入力ワークフロー

1. **音声認識** - 5秒録音、Whisper モデル認識。
2. **情報解析** - 時間、人物、場所などを抽出。
3. **カード生成** - Feishu インタラクティブ会議カードを作成。
4. **グループ送信** - 設定された Feishu グループに送信。
5. **結果フィードバック** - 送信ステータスとカード ID を表示。

### 音声入力プログラムの開始

```bash
cd ~/feishu_card
python3 Demo.py
```

---

## Skill 開発完全プロセス

### ステップ 1: OpenClaw Skill アーキテクチャの理解

OpenClaw の Skill システムはモジュラー設計に基づいています。各 Skill は独立した Python モジュールで、特定のインターフェースを通じて OpenClaw コアシステムと相互作用します。

**主要概念：**
- **Skill ディレクトリ**: `~/.openclaw/skills/[skill_name]/`
- **エントリファイル**: `__init__.py` または指定された Python ファイル。
- **ツール登録**: `@tool` デコレータを通じて登録。
- **設定ファイル**: `SKILL.md` が使用方法を提供。

### ステップ 2: Skill 基本構造の作成

#### 1. Skill ディレクトリの作成
```bash
mkdir -p ~/.openclaw/skills/feishu_meeting
cd ~/.openclaw/skills/feishu_meeting
```

#### 2. コアファイルの作成
```bash
touch __init__.py
touch send_meeting_card.py
touch SKILL.md
```

### ステップ 3: コア機能コードの記述

#### 1. メイン機能ファイル: `send_meeting_card.py`

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

#### 2. 初期化ファイル：`__init__.py`

```python
"""
Feishu Meeting Skill - Feishu Meeting Card Skill
"""

from .send_meeting_card import send_meeting_card, create_meeting_card

# Export main functions
__all__ = ['send_meeting_card', 'create_meeting_card']
```

#### 3. ドキュメントファイル：`SKILL.md`

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

### ステップ4：OpenClawシステムへの統合

#### 最も重要な解決策：OpenClawに自己デバッグさせる
私たちはAIを使用しています。私の実験では、スキルを書いたのにOpenClawが認識しない状況に遭遇しました。その後、OpenClawに自己デバッグさせたところ、ブラックボックス操作を実行して自動的に認識を完了しました。この方法は、その後のプロジェクトでも効果的であり続けています。

```bash
# Open the OpenClaw dashboard for self-debugging, tell OpenClaw where your completed skills are, and let it perform registration and configuration.
openclaw dashboard
```


#### 1. ツール登録

OpenClawにこのスキルを認識させるには、適切な設定ファイルに登録する必要があります。通常、OpenClawは`~/.openclaw/skills/`ディレクトリを自動的にスキャンしてスキルを検索します。

#### 2. 認証情報の設定

Feishuアプリケーションの認証情報がOpenClawで設定されていることを確認してください：

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

#### 3. スキル機能のテスト

```bash
# Enter Skill directory
cd ~/.openclaw/skills/feishu_meeting

# Test basic functionality
python3 send_meeting_card.py

# Test with parameters
python3 send_meeting_card.py '{"topic": "Test Meeting", "time": "16:00", "attendees": ["Test User"]}'
```

### ステップ5：OpenClawでのスキル使用

#### 1. エージェント経由での呼び出し

ユーザーが「会議をスケジュールして」と言った時、OpenClawは自動的にこのスキルを呼び出すはずです：

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

#### 2. 直接コマンドライン呼び出し

```bash
openclaw message send --channel feishu --target [group_id] --message '[Card Content]'
```

## 主要技術ポイント

### 1. Feishuカード形式

Feishuインタラクティブカードには特定のJSON構造が必要です：
- `msg_type`：「interactive」である必要があります
- `card`：完全なカード定義を含みます
- `elements`：カードの様々なコンポーネントを定義します
- `actions`：インタラクティブボタンを定義します

### 2. エラーハンドリングメカニズム

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

### 3. 互換性の考慮事項

- **OpenClaw統合モード**：`from tools import message`経由
- **独立実行モード**：subprocessを介してopenclawコマンドを呼び出し
- **コマンドラインモード**：JSONパラメータを直接処理

## デバッグとトラブルシューティング

### 1. デバッグのヒント

```bash
# Enable debug mode
export OPENCLAW_DEBUG=1

# View logs
tail -f ~/.openclaw/logs/gateway.log

# Manually test card JSON
python3 -c "import json; print(json.dumps(card_content, indent=2))"
```

### 2. 検証手順

1. **スキル認識の検証**
   ```bash
   openclaw skills list
   ```

2. **認証の検証**
   ```bash
   # Test Feishu API connection
   python3 -c "from tools import message; print('OK')"
   ```

3. **機能の検証**
   ```bash
   # Test card creation
   python3 send_meeting_card.py
   ```

---

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！スムーズな製品体験を確保するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
