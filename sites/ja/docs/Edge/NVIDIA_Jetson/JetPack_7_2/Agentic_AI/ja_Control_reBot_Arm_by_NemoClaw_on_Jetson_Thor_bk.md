---
description: この記事では、NVIDIA の NemoClaw/OpenClaw エージェントフレームワークを Nvidia Jetson Thor 上にデプロイし、reBot Arm B601 ロボットアームを統合して、視覚認識・LLM 推論・ロボット実行を組み合わせたローカル AI オートメーションシステムを構築する方法を説明します。ハードウェア接続、NemoClaw と Ollama のインストール、ロボットアームのバックエンド設定、権限管理、systemd 自動起動サービス、およびトラブルシューティングを含む、完全なセットアップガイドを提供します。
title: Nvidia Jetson Thor 上の NemoClaw で Rebot Arm を制御する
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg
slug: /control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk
sku: 100060965 | 100046482
last_update:
  date: 05/18/2026
  author: youjiang
createdAt: '2026-05-18'
url: https://wiki.seeedstudio.com/ja/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/
updatedAt: '2026-05-20'
---

# Nvidia Jetson Thor 上の NemoClaw で reBot Arm B601 を制御する

:::note JetPack 7.2 collection copy
この Jetson Thor の例は、JetPack 7.2 エコシステム内の agentic-AI ワークフローとして含まれています。デプロイ前に、インストール済みの JetPack/L4T バージョンを確認し、NemoClaw、Ollama、コンテナ、およびサービスのバージョンを再確認してください。
:::

## 1. プロジェクト概要

NVIDIA `NemoClaw` は、OpenClaw の常時稼働アシスタントをより安全かつ簡単に実行できるようにするオープンソースのリファレンススタックです。本 Wiki では、Jetson Thor 上に NemoClaw をデプロイし、`reBot Arm B601` の機能を NemoClaw エージェントワークフローに接続して、「セマンティック理解 + 画像認識 + ロボット実行」のクローズドループを構成する方法を説明します。

- `NemoClaw`: タスクオーケストレーションとコマンドルーティングのためのローカルエージェント／制御フレームワーク。
- `Nemotron3`: 意図理解と高レベル意思決定のためのオプションのモデル機能。
- `Nvidia Jetson Thor`: 推論、バックエンドサービス、デバイスドライバ用のローカルコンピュートプラットフォーム。
- `reBot Arm B601`: 把持および配置用のロボットアーム。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/overview.png" />
</div>

## 2. ハードウェア要件

- Nvidia Jetson Thor（JetPack 7.x インストール済み）
- [reBot Arm B601 DM](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [USB-to-CAN アダプタ](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- USB カメラ
- ロボットアーム用の電源および USB ケーブル
- USB ボタン（オプション）

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reBot Arm B601 </th>
        <th> NVIDIA® Jetson AGX Thor™ Developer Kit </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## 3. ハードウェア接続

1. ロボットアームを組み立てて設定します。
2. USB-to-CAN アダプタ、USB カメラ、およびロボットアームを Jetson Thor の USB Type-A ポートに接続します。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/hardware_connection.jpg" />
</div>

:::info
Jetson デバイスは USB Type-A ポートを 2 つしか備えていない場合があります。より多くのポートが必要な場合は USB ハブを使用してください。
:::

電源投入後、デバイスを確認します：

```bash
ls /dev/ttyACM*
ls /dev/video*
```

すべて正しく接続されていれば、次のような出力が表示されます：

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/check_device.png" />
</div>

## 4. システムおよび依存関係のセットアップ

### 4.1 Ollama のインストール

ローカル LLM 機能が必要な場合（オプション）：

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull nemotron3:33b
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/download_llm.png" />
</div>

### 4.2 NemoClaw のインストール

Jetson に NemoClaw をインストールします：

```bash
curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
```

その後、`nemoclaw onboard` を実行して新しいアプリを作成します。対話的なオンボーディングログの一例は次のとおりです：

<details>
<summary> nemoclaw onboard ログ </summary>

```bash
seeed@seeed:~$ nemoclaw onboard --no-gpu

  NemoClaw Onboarding
  ===================

  [1/8] Preflight checks
  ──────────────────────────────────────────────────
  ✓ Docker is running
  ✓ Container DNS resolution works
  ✓ Container runtime: docker
  ✓ Container runtime resources: 14 vCPU / 122.8 GiB
  ✓ openshell CLI: openshell 0.0.37
  Cleaning up previous NemoClaw session...
! No active forward found for port 18789
  ✓ Previous session cleaned up
  ✓ Port 8080 available (OpenShell gateway)
  ✓ NVIDIA GPU detected (NVIDIA Thor, 125771 MB)
  ✓ Sandbox GPU: disabled by configuration
  ✓ Memory OK: 125771 MB RAM + 0 MB swap
  NVIDIA GPU hardware detected but nvidia-smi is not available.
  Install NVIDIA drivers and the Container Toolkit for default GPU passthrough.

  [2/8] Starting OpenShell gateway
  ──────────────────────────────────────────────────
  Starting OpenShell Docker-driver gateway...
  Gateway log: /home/seeed/.local/state/nemoclaw/openshell-docker-gateway/openshell-gateway.log
  ✓ Docker-driver gateway is healthy

  [3/8] Configuring inference (NIM)
  ──────────────────────────────────────────────────
  Detected local inference option: Ollama


  Inference options:
    1) NVIDIA Endpoints
    2) OpenAI
    3) Other OpenAI-compatible endpoint
    4) Anthropic
    5) Other Anthropic-compatible endpoint
    6) Google Gemini
    7) Local Ollama (localhost:11434) — running (suggested)
    8) Model Router (experimental)

  Choose [1]: 7
  ✓ Using Ollama on localhost:11434 (proxy on :11435)

  Ollama models:
    1) nemotron3:33b
    2) qwen3.5:0.8b
    3) nemotron-3-nano:30b
    4) Other...

  Choose model [3]: 1
  Loading Ollama model: nemotron3:33b
  Chat Completions API available — OpenClaw will use openai-completions.
  Sandbox name (lowercase, starts with a letter, letters/numbers/internal hyphens only, ends with letter/number) [my-assistant]: 

  ──────────────────────────────────────────────────
  Review configuration
  ──────────────────────────────────────────────────
  Provider:      ollama-local
  Model:         nemotron3:33b
  API key:       (not required for ollama-local)
  Web search:    disabled
  Messaging:     none
  Sandbox name:  my-assistant
  Note:          Sandbox build typically takes 3–8 minutes on this host.
  ──────────────────────────────────────────────────
  Web search and messaging channels will be prompted next.
  Apply this configuration? [Y/n]: 

  [4/8] Setting up inference provider
  ──────────────────────────────────────────────────
✓ Active gateway set to 'nemoclaw'
✓ Updated provider ollama-local
Gateway inference configured:

  Route: inference.local
  Provider: ollama-local
  Model: nemotron3:33b
  Version: 12
  Timeout: 180s
  Priming Ollama model: nemotron3:33b
  ✓ Inference route set: ollama-local / nemotron3:33b
  Enable Brave Web Search? [y/N]: 

  [5/8] Messaging channels
  ──────────────────────────────────────────────────

  Available messaging channels:
    [1] ○ telegram — Telegram bot messaging
    [2] ○ discord — Discord bot messaging
    [3] ○ slack — Slack bot messaging

  Press 1-3 to toggle, Enter when done: 
  Skipping messaging channels.

  [6/8] Creating sandbox
  ──────────────────────────────────────────────────
  Creating sandbox 'my-assistant' (this takes a few minutes on first run)...
  Pinning base image to sha256:1fb69ddbe730...
  Building sandbox image...
  Building image openshell/sandbox-from:1778663150 from /tmp/nemoclaw-bu...
  Step 1/63 : ARG BASE_IMAGE=ghcr.io/nvidia/nemoclaw/sandbox-base@sha256...
  Step 2/63 : FROM node:22-trixie-slim@sha256:2d9f5c76c8f4dd36e8f253bee5...
  Step 3/63 : ENV NPM_CONFIG_AUDIT=false     NPM_CONFIG_FUND=false     N...
  Step 4/63 : COPY nemoclaw/package.json nemoclaw/package-lock.json nemo...
  Step 5/63 : COPY nemoclaw/src/ /opt/nemoclaw/src/
  Step 6/63 : WORKDIR /opt/nemoclaw
  Step 7/63 : RUN npm ci && npm run build
  Step 8/63 : FROM ${BASE_IMAGE}
  Step 9/63 : RUN set -eu;     apt-mark manual procps e2fsprogs 2>/dev/n...
  Step 10/63 : COPY --from=builder /opt/nemoclaw/dist/ /opt/nemoclaw/dist/
  Step 11/63 : COPY nemoclaw/openclaw.plugin.json /opt/nemoclaw/
  Step 12/63 : COPY nemoclaw/package.json nemoclaw/package-lock.json /op...
  Step 13/63 : COPY nemoclaw-blueprint/ /opt/nemoclaw-blueprint/
  Step 14/63 : WORKDIR /opt/nemoclaw
  Step 15/63 : RUN npm ci --omit=dev
  Step 16/63 : RUN set -eu;     MIN_VER=$(grep -m 1 'min_openclaw_versio...
  Step 17/63 : COPY scripts/rcf_patch.py /usr/local/lib/nemoclaw/rcf_pat...
  Step 18/63 : RUN set -eu;     OC_DIST=/usr/local/lib/node_modules/open...
  Step 19/63 : RUN mkdir -p /sandbox/.nemoclaw/blueprints/0.1.0     && c...
  Step 20/63 : COPY scripts/lib/sandbox-init.sh /usr/local/lib/nemoclaw/...
  Step 21/63 : COPY scripts/nemoclaw-start.sh /usr/local/bin/nemoclaw-start
  Step 22/63 : COPY nemoclaw-blueprint/scripts/*.js /usr/local/lib/nemoc...
  Step 23/63 : COPY scripts/codex-acp-wrapper.sh /usr/local/bin/nemoclaw...
  Step 24/63 : COPY scripts/generate-openclaw-config.py /usr/local/lib/n...
  Step 25/63 : COPY nemoclaw-blueprint/openclaw-plugins/ /usr/local/shar...
  Step 26/63 : RUN chmod 755 /usr/local/bin/nemoclaw-start /usr/local/bi...
  Step 27/63 : ARG NEMOCLAW_MODEL=nemotron3:33b
  Step 28/63 : ARG NEMOCLAW_PROVIDER_KEY=inference
  Step 29/63 : ARG NEMOCLAW_PRIMARY_MODEL_REF=inference/nemotron3:33b
  Step 30/63 : ARG CHAT_UI_URL=http://127.0.0.1:18789
  Step 31/63 : ARG NEMOCLAW_INFERENCE_BASE_URL=https://inference.local/v1
  Step 32/63 : ARG NEMOCLAW_INFERENCE_API=openai-completions
  Step 33/63 : ARG NEMOCLAW_CONTEXT_WINDOW=131072
  Step 34/63 : ARG NEMOCLAW_MAX_TOKENS=4096
  Step 35/63 : ARG NEMOCLAW_REASONING=false
  Step 36/63 : ARG NEMOCLAW_INFERENCE_INPUTS=text
  Step 37/63 : ARG NEMOCLAW_AGENT_TIMEOUT=600
  Step 38/63 : ARG NEMOCLAW_AGENT_HEARTBEAT_EVERY=
  Step 39/63 : ARG NEMOCLAW_INFERENCE_COMPAT_B64=e30=
  Step 40/63 : ARG NEMOCLAW_MESSAGING_CHANNELS_B64=W10=
  Step 41/63 : ARG NEMOCLAW_MESSAGING_ALLOWED_IDS_B64=e30=
  Step 42/63 : ARG NEMOCLAW_DISCORD_GUILDS_B64=e30=
  Step 43/63 : ARG NEMOCLAW_TELEGRAM_CONFIG_B64=e30=
  Step 44/63 : ARG NEMOCLAW_DISABLE_DEVICE_AUTH=1
  Step 45/63 : ARG NEMOCLAW_BUILD_ID=1778663150303
  Step 46/63 : ARG NEMOCLAW_PROXY_HOST=10.200.0.1
  Step 47/63 : ARG NEMOCLAW_PROXY_PORT=3128
  Step 48/63 : ARG NEMOCLAW_WEB_SEARCH_ENABLED=0
  Step 49/63 : ENV NEMOCLAW_MODEL=${NEMOCLAW_MODEL}     NEMOCLAW_PROVIDE...
  Step 50/63 : WORKDIR /sandbox
  Step 51/63 : USER sandbox
  Step 52/63 : RUN python3 /usr/local/lib/nemoclaw/generate-openclaw-con...
  Step 53/63 : RUN (openclaw doctor --fix > /dev/null 2>&1 || true)     ...
  Still building sandbox image... (20s elapsed)
  Still building sandbox image... (30s elapsed)
  Still building sandbox image... (45s elapsed)
  Still building sandbox image... (60s elapsed)
  Still building sandbox image... (75s elapsed)
  Still building sandbox image... (90s elapsed)
  Still building sandbox image... (105s elapsed)
  Still building sandbox image... (120s elapsed)
  Still building sandbox image... (135s elapsed)
  Step 54/63 : RUN python3 -c "import json, os; path = os.path.expanduse...
  Step 55/63 : USER root
  Step 56/63 : RUN set -eu;     config_dir=/sandbox/.openclaw;     data_...
  Step 57/63 : RUN if id gateway >/dev/null 2>&1 && id sandbox >/dev/nul...
  Step 58/63 : RUN chown -R sandbox:sandbox /sandbox/.openclaw     && ch...
  Still building sandbox image... (175s elapsed)
  Step 59/63 : RUN if ! grep -q "/tmp/nemoclaw-proxy-env.sh" /etc/profil...
  Step 60/63 : RUN sha256sum /sandbox/.openclaw/openclaw.json > /sandbox...
  Step 61/63 : RUN chown root:root /sandbox/.nemoclaw     && chmod 1755 ...
  Step 62/63 : ENTRYPOINT ["/usr/local/bin/nemoclaw-start"]
  Step 63/63 : CMD ["/bin/bash"]
  Built image openshell/sandbox-from:1778663150
  Waiting for sandbox to become ready...
  Sandbox reported Ready before create stream exited; continuing.
  Waiting for sandbox to become ready...
  Waiting for NemoClaw dashboard to become ready...
  ✓ Dashboard is live
! No active forward found for port 18789
  ✓ Sandbox 'my-assistant' created

  [7/8] Setting up OpenClaw inside sandbox
  ──────────────────────────────────────────────────
  ✓ OpenClaw gateway launched inside sandbox

  [8/8] Policy presets
  ──────────────────────────────────────────────────

  Policy tier — controls which network presets are enabled:
     [ ] Restricted
     [ ] Balanced
   > [✓] Open

  ↑/↓ j/k  move    Space  select    Enter  confirm


  Presets  (Open defaults):
   > [✓] [rw] npm
     [✓] [rw] pypi
     [✓] [rw] huggingface
     [✓] [rw] brew
     [✓] [rw] brave
     [✓] [rw] slack
     [✓] [rw] discord
     [✓] [rw] telegram
     [✓] [rw] jira
     [✓] [rw] outlook
     [ ]      github
     [✓] [rw] local-inference

  ↑/↓ j/k  move    Space  include    r  toggle rw    Enter  confirm

  Widening sandbox egress — adding: registry.npmjs.org, registry.yarnpkg.com
✓ Policy version 3 submitted (hash: 77d8e31dfb8c)
✓ Policy version 3 loaded (active version: 3)
  Applied preset: npm
  Widening sandbox egress — adding: pypi.org, files.pythonhosted.org
✓ Policy version 4 submitted (hash: 6637ad37a7b2)
✓ Policy version 4 loaded (active version: 4)
  Applied preset: pypi
  Widening sandbox egress — adding: huggingface.co, cdn-lfs.huggingface.co, router.huggingface.co
✓ Policy version 5 submitted (hash: e81bc64dabe1)
✓ Policy version 5 loaded (active version: 5)
  Applied preset: huggingface
  Widening sandbox egress — adding: formulae.brew.sh, github.com, ghcr.io, pkg-containers.githubusercontent.com, objects.githubusercontent.com, raw.githubusercontent.com
✓ Policy version 6 submitted (hash: d96caba06e19)
✓ Policy version 6 loaded (active version: 6)
  Applied preset: brew
  Widening sandbox egress — adding: api.search.brave.com
✓ Policy version 7 submitted (hash: be83e02b9a1c)
✓ Policy version 7 loaded (active version: 7)
  Applied preset: brave
  Widening sandbox egress — adding: slack.com, api.slack.com, hooks.slack.com, wss-primary.slack.com, wss-backup.slack.com
✓ Policy version 8 submitted (hash: 2b5d1cafea38)
✓ Policy version 8 loaded (active version: 8)
  Applied preset: slack
  Widening sandbox egress — adding: discord.com, gateway.discord.gg, cdn.discordapp.com, media.discordapp.net
✓ Policy version 9 submitted (hash: c4b43ab2846f)
✓ Policy version 9 loaded (active version: 9)
  Applied preset: discord
  Widening sandbox egress — adding: api.telegram.org
✓ Policy version 10 submitted (hash: 0bd5f6fdf97c)
✓ Policy version 10 loaded (active version: 10)
  Applied preset: telegram
  Widening sandbox egress — adding: *.atlassian.net, auth.atlassian.com, api.atlassian.com
✓ Policy version 11 submitted (hash: 3b7cf306a733)
✓ Policy version 11 loaded (active version: 11)
  Applied preset: jira
  Widening sandbox egress — adding: graph.microsoft.com, login.microsoftonline.com, outlook.office365.com, outlook.office.com
✓ Policy version 12 submitted (hash: 48737772cbc4)
✓ Policy version 12 loaded (active version: 12)
  Applied preset: outlook
  Widening sandbox egress — adding: host.openshell.internal, host.openshell.internal, host.openshell.internal
✓ Policy version 13 submitted (hash: a176881916b5)
✓ Policy version 13 loaded (active version: 13)
  Applied preset: local-inference
  ✓ Deployment verified — gateway and dashboard are healthy.
    OpenClaw version: 2026.4.24

  ──────────────────────────────────────────────────
  Sandbox      my-assistant (Landlock + seccomp + netns)
  Model        nemotron3:33b (Local Ollama)
  ──────────────────────────────────────────────────
  Run:         nemoclaw my-assistant connect
  Status:      nemoclaw my-assistant status
  Logs:        nemoclaw my-assistant logs --follow

  OpenClaw UI (auth token redacted from displayed URLs)
  Port 18789 must be forwarded before opening these URLs.
  Dashboard: http://127.0.0.1:18789/
  Token:       nemoclaw my-assistant gateway-token --quiet
               append  #token=<token> locally if the browser asks for auth.
  ──────────────────────────────────────────────────

  To change settings later:
    Model:       nemoclaw inference set --model <model> --provider <provider> --sandbox my-assistant
    Policies:    nemoclaw my-assistant policy-add
    Credentials: nemoclaw credentials reset <KEY>  then  nemoclaw onboard

seeed@seeed:~$ 
```

</details>

将来的に NeMoClaw コンテナ内からホストマシン上にデプロイされたサービスへアクセスする必要があることを考慮し、このアプリケーションのネットワークアクセスを構成するために、次のコマンドを実行してください。

```bash
nemoclaw my-assistant policy-add --from-file ~/rebot_arm_service/host-camera.yaml --yes
```

オンボーディングが成功したら、次を実行します：

```bash
nemoclaw my-assistant connect
```

動作している OpenClaw アプリ環境に入るはずです：

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/openclaw_webui.png" />
</div>

:::info
NeMoClaw CLI の詳細情報：
https://docs.nvidia.com/nemoclaw/latest/reference/cli-selection-guide.html
:::

### 4.3 ロボットアームサービスのインストール

Jetson 上で実行：

```bash
git clone https://github.com/yuyoujiang/rebot_arm_service.git ~
cd ~/rebot_arm_service
uv sync
# Configure GPU PyTorch runtime libraries
export LD_LIBRARY_PATH=/home/seeed/rebot_arm_service/.venv/lib/python3.12/site-packages/nvpl/lib:/usr/local/lib/ollama/cuda_v12:$LD_LIBRARY_PATH
python -c "import torch; print(torch.cuda.is_available())"
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/gpu_torch.png" />
</div>

## 5. デバイス権限の設定

デバイス権限を設定する方法は 2 つあります。

1. 一時的な権限（再起動後に失われます）：

```bash
sudo chmod 666 /dev/ttyACM0
```

2. 永続的な udev ルール（推奨）：

```bash
echo 'SUBSYSTEM=="tty", KERNEL=="ttyACM0", MODE:="0666", GROUP:="dialout"' | sudo tee /etc/udev/rules.d/99-rebot-arm.rules
sudo udevadm control --reload-rules
sudo udevadm trigger
```

## 6. サービスの起動

### 6.1 ロボットアームバックエンドの起動

```bash
cd ~/rebot_arm_service
export REBOT_CAMERA_DEVICE_INDEX=0
uv run rebot-arm-service
```

アクセス：

- WebUI: `http://127.0.0.1:8000/webui`
- ヘルスチェック: `http://127.0.0.1:8000/healthz`

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/robot_webui.png" />
</div>

### 6.2 キーボードリスナーの起動（オプション）

検出／把持をすばやくトリガーするために（エージェントの長い推論を待たずに）、F1 ホットキーリスナーを使用します。  
F1 が押されると、自動的に把持ミッションのエンドポイントへリクエストを送信します。

直接実行：

```bash
cd ~/rebot_arm_service
sudo ./.venv/bin/python scripts/space_mission_listener_evdev.py
```

スクリプト経由：

```bash
cd ~/rebot_arm_service
./scripts/start_space_listener_evdev.sh
```

### 6.3 起動時の自動開始を有効化（オプション）

2 つの systemd サービスを構成します：

- `rebot-arm.service`: バックエンドサービス

<details>
<summary> /etc/systemd/system/rebot-arm.service </summary>

```bash
[Unit]
Description=reBot Arm Backend Service
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=seeed
WorkingDirectory=/home/seeed/rebot_arm_service
Environment=PYTHONUNBUFFERED=1
Environment=LD_LIBRARY_PATH=/home/seeed/rebot_arm_service/.venv/lib/python3.12/site-packages/nvpl/lib:/usr/local/lib/ollama/cuda_v12
ExecStart=/home/seeed/rebot_arm_service/.venv/bin/rebot-arm-service
Restart=always
RestartSec=2

[Install]
WantedBy=multi-user.target
```

</details>

- `rebot-f1-listener.service`: F1 ホットキートリガー

<details>
<summary> /etc/systemd/system/rebot-f1-listener.service </summary>

```bash
[Unit]
Description=reBot F1 Keyboard Listener
After=network-online.target rebot-arm.service
Wants=network-online.target
Requires=rebot-arm.service

[Service]
Type=simple
User=root
WorkingDirectory=/home/seeed/rebot_arm_service
Environment=PYTHONUNBUFFERED=1
Environment=MISSION_BASE_URL=http://127.0.0.1:8000
ExecStart=/home/seeed/rebot_arm_service/.venv/bin/python /home/seeed/rebot_arm_service/scripts/space_mission_listener_evdev.py
Restart=always
RestartSec=2

[Install]
WantedBy=multi-user.target
```

</details>

:::danger
サービスを起動する前に、設定ファイル内のパスを必ず修正してください。
:::

管理コマンド：

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now rebot-arm.service rebot-f1-listener.service
systemctl status rebot-arm.service
sudo systemctl status rebot-f1-listener.service
```

ログ：

```bash
journalctl -u rebot-arm.service -f
sudo journalctl -u rebot-f1-listener.service -f
```

## 7. 機能デモ

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Npw494pmh4A" title="Control reBot Arm B601 with NemoClaw on Nvidia Jetson Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 8. トラブルシューティング

1. シリアルがビジー（`Device or resource busy`）  
古いプロセスを停止してから再接続します。アームを使用しているコントローラプロセスが 1 つだけであることを確認してください。

2. WebUI のシーンが空  
URDF とメッシュのリクエストが `200` を返しているか確認します。特に `/assets/urdf/...` を確認してください。

3. 検出が反応しない  
`camera/status` が `running=true` であることを確認し、その後ミッションステータスのエンドポイントを確認します。

4. ライブラリ不足で Torch のインポートに失敗する  
`LD_LIBRARY_PATH` に `nvpl` と `cuda_v12` の両方のパスが含まれていることを確認します。

5. F1 ホットキーが効かない  
`rebot-f1-listener.service` のログを確認し、正しいキーボードデバイスをリッスンしていることを確認します。

6. リスナー起動後に他のキーボードキーが動作しなくなる  
スクリプトが `dev.grab()` を使用していないことを確認します（排他的なキーボードキャプチャは削除する必要があります）。

7. 2 台目のアーム接続に失敗する  
前の接続が完全に解放されていることを確認し、再接続の前に切断を呼び出してください。

## 9. 参考資料

- https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/index.html
- https://github.com/Seeed-Projects/reBot-DevArm
- https://docs.nvidia.com/nemoclaw/latest/about/overview.html
- https://docs.openclaw.ai/
- https://wiki.seeedstudio.com/ja/lerobot_so100m_new/

## 10. 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
