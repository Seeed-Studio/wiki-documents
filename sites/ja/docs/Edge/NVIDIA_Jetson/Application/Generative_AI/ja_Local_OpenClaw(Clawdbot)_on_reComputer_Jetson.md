---
description: このwikiでは、reComputer JetsonでClawdbotをデプロイして使用する方法を説明します。
title: reComputer Jetson上でOllamaを使用したローカルOpenClaw（Clawdbot）
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
createdAt: '2026-02-04'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/local_openclaw_on_recomputer_jetson/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

## 概要

OpenClawは、デプロイメントのニーズに応じてクラウドLLMまたはローカルモデルのいずれでも動作できるエージェントフレームワークです。クラウドモデルは開始するのに便利です：ローカルセットアップが不要で、幅広いモデル選択肢を提供し、スケールしやすいです。トレードオフは継続的なトークンコスト、外部サービスへの依存、データ居住性と接続性に関するより厳しい制約です。ローカルモデルは継続的なAPI料金を回避し、データをデバイス上に保持し、オフラインまたは制限されたネットワークでも動作し続けます。トレードオフは追加のセットアップ作業と、モデルサイズをデバイスの計算およびストレージ制限に合わせる必要があることです。エッジロボティクスと長時間実行アシスタントにとって、これらの利点はローカルデプロイメントを実用的なデフォルトにします。このwikiでは、reComputer JetsonでOllamaを使用してOpenClawを実行し、自己完結型AIコントロールハブを構築する方法を説明します。

## 構築するもの

- Jetson上のローカルOllamaランタイム
- Jetson上で実行されるOpenClaw GatewayとWebUI
- デフォルトLLMとしてOllamaモデルを使用するように設定されたOpenClaw

## サポートされているハードウェア

- reComputer Jetson シリーズ（例：reComputer Robotics J501X）
- より高速なモデル読み込みのためにNVMe SSDを推奨

:::note
このwikiでは[reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html)をデモに使用していますが、他のJetsonモデルもサポートされています。
Jetsonデバイスが少なくとも16GBのメモリを持っていることを確認してください。
:::

## 前提条件

- Jetpack6.2がプリインストールされたreComputer Robotics J5011
- Discord Bot Token

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

:::info
`Discord Bot Token`は必須ではないことに注意してください。WhatsAppなどの他のソーシャルソフトウェアも使用できます。
:::

## ハードウェア接続

:::note
開始する前に、Jetsonデバイスをネットワークと電源に接続し、ネットワーク接続が安定していることを確認してください。
:::


## ステップ1：Ollamaのインストール

Jetsonデバイスでターミナルウィンドウを開き、以下のコマンドを実行してJetsonにOllamaをインストールします：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

ローカルAPIが到達可能であることを確認します：

```bash
curl http://localhost:11434/api/tags
```

出力にエラーが表示されない場合、Ollamaが正しくインストールされていることを意味します。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/install_ollama.png" />
</div>

## ステップ2：ローカルモデルのプル

Ollamaから少なくとも1つのモデルをプルします。例：

```bash
ollama pull qwen3-vl:2b
```

インストールされたモデルをリストします：

```bash
ollama list
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/ollama_list.png" />
</div>

## ステップ3：OpenClaw（Clawdbot）のインストール

OpenClawにはNode.js 22以降が必要です。npmでグローバルにインストールします：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

## ステップ4：OpenClawの設定

OpenClawのダウンロードが完了すると、自動的に設定ページに入ります。ターミナルウィンドウに表示される指示に従ってOpenClawを設定してください。

:::danger
セットアップウィザードページにはローカルモデルを設定するオプションが含まれていない場合があります。心配しないでください — 後で設定ファイルを直接変更できます。セットアップウィザードでは、モデル設定をスキップするか、一時的にクラウドベースのモデルを設定することができます。
:::

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/config.png" />
</div>

上記のページが表示された場合、OpenClawが正常にインストールおよび設定されたことを意味します。次に、ローカルモデルの設定に進みます。

`~/.openclaw/openclaw.json`ファイルを開き、以下の設定を追加または変更します。

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

完全な設定ファイルは以下の通りです：

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

## ステップ5：OpenClawサービスの再起動

再起動コマンドを実行します：

```bash
openclaw gateway restart
```

## ステップ6：WebUIを開いて確認

jetsonブラウザでWebUIを開きます：

```
http://127.0.0.1:18789/
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/web_ui.png" />
</div>

ページが読み込まれない場合は、Gatewayが実行されていることを確認してください。

:::danger
WebUIを開く際に「アクセスできません」エラーが継続して表示される場合、アクセストークンが有効になっている可能性があります。設定ファイルでWebUIトークンを見つけて、アクセス時にWebUI URLに追加できます。
`http://127.0.0.1:18789/?token=...`
::: 

## 効果のデモンストレーション

良いニュースは、低電力ローカルコンピューティング（Jetson）を使用してOpenClawの実行に成功したことです。
悪いニュースは、ローカルモデルのパフォーマンスが期待に応えていないことです。

これは、私の設定パラメータやプロンプト設定が適切に調整されていないことが原因かもしれません。OpenClawの動作パラメータを調整することで、ローカルモデルのパフォーマンスをさらに最適化できると信じています。

このプロジェクトに興味がある方は、今すぐデプロイしてみてください！

<iframe width="800" height="450" src="https://www.youtube.com/embed/kZbWuK7YFuc" title="Local OpenClaw(Clawdbot) on reComputer Jetson with Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 参考文献

- https://docs.openclaw.ai/
- https://docs.openclaw.ai/providers/ollama
- https://ollama.com/
- https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_j501_robotics_getting_started/




## 参考資料

<JetsonLeadQuote
  buttonText="見積もり依頼"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
