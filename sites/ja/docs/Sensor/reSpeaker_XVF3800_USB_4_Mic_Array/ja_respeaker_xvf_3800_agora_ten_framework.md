---
description: このプロジェクトでは、Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）をエッジ音声デバイスとして使用し、Agora を介してリアルタイム双方向音声リンクを確立し、Agora ten-framework バックエンド（LLM/ASR/TTS）に接続して、低遅延なリアルタイム音声対話を実現する方法を示します。
title: reSpeaker XVF3800 + Agora ten-framework エッジ対話クライアント デプロイガイド
keywords:
  - reSpeaker
  - XVF3800
  - XIAO
  - ESP32S3
  - Agora
  - ten-framework
  - AI Agent
  - RTC
  - ESP-IDF
  - ESP-ADF
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_agora_ten_framework_client
sku: 114993702,114993700
last_update:
  date: 09/02/2026
  author: Jiayu Zhan(Jack)
createdAt: '2026-02-10'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_agora_ten_framework_client/
---

> 目標：ESP32S3 を reSpeaker XVF3800 と連携させ、**Agora RTC** を介して安定した低遅延の双方向音声リンクを構築します。
> ソースコード: https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework
> Seeed-Projects: https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework

## はじめに

このチュートリアルでは、Seeed XIAO ESP32-S3 と reSpeaker XVF3800 を使用して音声の取得と再生を行い、Agora RTC を用いてデバイスとバックエンド間のリアルタイム音声接続を完了する方法を案内します。バックエンドは AI Agent として動作します。本プロジェクトは標準化された設定方法（`.env` / `property.json`）を提供し、ワンクリック Docker デプロイ、動的トークン認証、プラガブルなプロバイダ（ASR/LLM/TTS を必要に応じて差し替え可能）をサポートします。**ASR → LLM → TTS** のフルループを自動的に完了し、合成音声をストリーミングでデバイスに送り返して再生することで、「一度話すと一度応答が返ってくる」低遅延の対話体験を実現します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## バックエンドを選ぶ

このガイドでは、**2 つのバックエンドオプション**を提供します。用途に合うものを選択してください：

| オプション | 最適な用途 | 必要なサーバー | リンク |
|---|---|---:|---|
| **Agora Conversational AI Agent v2（クラウド、直接接続）** | 最小限のインフラで最速セットアップ | いいえ | 👉 [Agent v2 版へ移動](/ja/respeaker_xvf3800_agora_convo_client) |
| **TEN Framework（セルフホスト、プラガブルな ASR/LLM/TTS）** | カスタムパイプライン / プロバイダ切り替え / 高度な機能 | はい（Docker） | 現在のページ ✅ |


## 目次

1. [Agora Assistant – クイックスタートガイド](#agora-assistant--クイックスタートガイド)
2. [システムアーキテクチャ](#システムアーキテクチャ)
3. [前提条件](#前提条件)
4. [ファームウェアの更新](#ファームウェアの更新)
5. [サーバー側デプロイ](#サーバー側デプロイ)
   - [Windows でのデプロイ](#windows-でのデプロイ-recommended)
   - [Linux/Mac でのデプロイ](#linuxmac-でのデプロイ)
6. [ESP32 側デプロイ](#esp32-側デプロイ)
   - [開発環境のセットアップ](#開発環境のセットアップ)
   - [ビルド & フラッシュ](#ビルド--フラッシュ)
7. [検証とテスト](#検証とテスト)
8. [FAQ](#faq)
9. [参考資料](#参考資料)


## Agora Assistant – クイックスタートガイド

### アーキテクチャ概要

1. **ウェイクワード検出** – あらかじめ定義された起動フレーズを継続的に待ち受けます。
2. **Speech-to-Text (STT)** – 音声認識エンジンを使用してユーザーの音声をテキストに変換します。
3. **RAG 搭載 LLM** – ベクターデータベースから関連コンテキストを取得し、LLM を用いてインテリジェントな応答を生成します。
4. **Text-to-Speech (TTS)** – 生成された応答を自然な音声に変換します。


### コアディレクトリ構造

```text
ai_agents/
├── esp32-client/   # XIAO ESP32-S3 edge side: capture/play audio + Agora connection + conversation interaction
├── server/         # Server side: AI Agent orchestration / LLM / ASR / TTS, etc. (works with edge side)
├── agents/         # TEN Agent examples and extensions
├── playground/     # Web frontend UI
├── .env.example    # Environment variable template
├── docker-compose.yml  # Docker compose file
└── Dockerfile      # Docker image build file
```


## システムアーキテクチャ

```
┌─────────────────────────────────────────────────────────────────────┐
│                           System Architecture                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │  ESP32-S3 Device │                    │      AI Agent Server    │ │
│  │  (Edge Side)     │                    │        (Backend)        │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • Microphone In  │ ──── Agora RTC ──→ │ • ASR Speech Recognition│ │
│  │ • Wi-Fi          │   Real-time audio  │ • LLM Large Language    │ │
│  │ • Speaker Out    │ ←── Agora RTC ──── │ • TTS Speech Synthesis  │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Workflow:
1. ESP32-S3 connects to the network and joins an Agora channel
2. The edge side captures microphone audio and publishes it to Agora
3. The server receives audio and runs the ASR → LLM → TTS pipeline
4. The backend sends response audio back; the device plays it, enabling real-time voice conversation
```



## 前提条件

### ハードウェア要件

| ハードウェア | 説明 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | メインコントローラボード |
| **ReSpeaker XVF3800** | オーディオ拡張ボード（マイクアレイ + スピーカーインターフェース） |
| **スピーカー** | AI 応答を再生するためのスピーカーを少なくとも 1 つ |
| **USB-C データケーブル** | ファームウェアの書き込みとデバイスへの給電用 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp" alt="ReSpeaker XVF3800" width={500} height="auto" /></p>

### アカウントと API キー

デプロイ前に、以下のサービスに登録し、API キーを取得する必要があります：

#### 🔹 Agora – 必須

1. https://console.agora.io/ にアクセスします
2. 無料アカウントにサインアップします
3. 新しいプロジェクトを作成します
4. **App ID** と **App Certificate** をコピーします

#### 🔹 Deepgram（ASR）– 必須

1. https://console.deepgram.com/ にアクセスします
2. 無料アカウントにサインアップします（無料枠あり）
3. API Keys ページに移動します
4. 新しい API キーを作成します

#### 🔹 OpenAI（LLM）– 必須

1. https://platform.openai.com/ にアクセスします
2. サインアップして支払い方法を追加します
3. API Keys ページに移動します
4. 新しいシークレットキーを作成します

#### 🔹 Cartesia（TTS）– デフォルト

1. https://cartesia.ai/sonic にアクセスします
2. 無料アカウントにサインアップします（無料枠あり）
3. API Key → New API Key に移動します
4. API キーをコピーします

#### 🔹 FlowSpeech（TTS）– 任意

コンテキスト認識、感情、ポーズ制御が必要な場合は、デフォルトの TTS 拡張を [AI テキスト読み上げ](https://flowspeech.io) サービスに切り替えることができます：

1. FlowSpeech アカウントを登録します
2. Settings → API Keys に移動します
3. API キーを作成してコピーします
4. 下記の「任意：FlowSpeech TTS に切り替える」に従って拡張を設定します

### ソフトウェア要件

| ソフトウェア | バージョン | 用途 |
|------|----------|------|
| **Docker Desktop** | 最新版 | サーバーのコンテナデプロイ |
| **Git** | 最新版 | リポジトリのクローン |
| **ESP-IDF** | v5.2.3 | ESP32 開発フレームワーク |
| **ESP-ADF** | v2.7 | ESP32 オーディオ開発フレームワーク |

## ファームウェアの更新

最良の再生体験を得るために、XMOS ファームウェアを最新バージョンに更新することを推奨します。

### ファームウェアのダウンロード

ファームウェアは[こちら](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)からダウンロードできます。

### 更新手順

PC に **ReSpeaker XMOS XVF3800 with XIAO ESP32S3** を接続し、ファームウェアアップデートツールを実行して、ファームウェアを選択します。

詳しい手順については、[このページ](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)を参照してください。

:::tip Important
ファームウェアの更新は必須ステップであり、最高の音質と安定性のために強く推奨されます。
:::


## サーバー側デプロイ

### Windows でのデプロイ（推奨）

#### ステップ A: Docker Desktop のインストールと設定（初回のみ）

1. **Docker Desktop をダウンロードしてインストール**

   https://www.docker.com/products/docker-desktop/ にアクセスしてダウンロードし、インストールします。

2. **インストールオプション**
   - **Use WSL 2 instead of Hyper-V**（利用可能な場合）にチェックを入れます

3. **インストールの確認**
   - インストール後に Docker Desktop を開きます
   - トレイアイコンに **Docker is running** と表示されるまで待ちます

4. **（推奨）WSL 統合を有効化**
   - Docker Desktop → `Settings` → `Resources` → `WSL Integration`
   - よく使用する WSL ディストリビューション（例：Ubuntu）を有効にします

#### ステップ B: リポジトリのクローンと環境変数の設定

1. **PowerShell または Windows Terminal を開く**

2. **リポジトリをクローン**
   ```bash
   git clone https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework.git
   cd esp32-client-agora/ai_agents
   ```

3. **環境テンプレートをコピー**

   PowerShell:
   ```powershell
   Copy-Item .env.example .env
   ```

   CMD:
   ```cmd
   copy .env.example .env
   ```

4. **`.env` ファイルを編集して API キーを入力**

   `.env` をメモ帳または VS Code で開き、主要な項目を更新します：

   ```env
   # ==============================
   # Agora RTC (Required)
   # ==============================
   AGORA_APP_ID=your_agora_app_id
   AGORA_APP_CERTIFICATE=your_agora_app_certificate

   # ==============================
   # Deepgram ASR (Required)
   # ==============================
   DEEPGRAM_API_KEY=your_deepgram_api_key

   # ==============================
   # OpenAI LLM (Required)
   # ==============================
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-4o
   OPENAI_PROXY_URL=  # Optional: set if you need a proxy

   # ==============================
   # Cartesia TTS (Required)
   # ==============================
   Cartesia_TTS_KEY=your_cartesia_api_key

   # Optional: FlowSpeech TTS
   FLOWSPEECH_API_KEY=your_flowspeech_api_key

   # ==============================
   # Server config (usually no changes needed)
   # ==============================
   LOG_PATH=/tmp/ten_agent
   LOG_STDOUT=true
   GRAPH_DESIGNER_SERVER_PORT=49483
   SERVER_PORT=8080
   WORKERS_MAX=100
   ```

#### 任意：FlowSpeech TTS に切り替える

FlowSpeech 拡張は 24 kHz、モノラル、16 ビット PCM 音声を出力し、本サンプルの `tts` ノードに直接接続できます。`agents/examples/voice-assistant/tenapp/property.json` を開き、`tts` という名前のノードを次の内容に置き換えます：

```json
{
  "type": "extension",
  "name": "tts",
  "addon": "flowspeech_tts_python",
  "extension_group": "tts",
  "property": {
    "dump": false,
    "dump_path": "./",
    "params": {
      "api_key": "${env:FLOWSPEECH_API_KEY}",
      "base_url": "https://flowspeech.io",
      "voice_name": "Kore"
    }
  }
}
```

保存後、`task install` と `task run` を続行してください。API キーはローカルの `.env` ファイルにのみ保存し、Git リポジトリにはコミットしないでください。

#### ステップ C: Docker サービスを起動する

```bash
docker compose up -d
```

コンテナのステータスを確認します（任意）:
```bash
docker compose ps
```

次のような出力が表示されます:
```
NAME            STATUS    PORTS
ten_agent_dev   running   0.0.0.0:3000->3000/tcp, 0.0.0.0:49483->49483/tcp
```

#### ステップ D: コンテナに入ってサンプルを実行する

1. **コンテナに入る**
   ```bash
   docker exec -it ten_agent_dev bash
   ```

2. **Voice Assistant サンプルをインストールして実行する**
   ```bash
   cd agents/examples/voice-assistant
   task install
   task run
   ```

3. **サービスの起動を待つ**

   次のようなログが表示されたら、サービスは実行中です:
   ```
   [INFO] Server started on port 8080
   [INFO] Waiting for connections...
   ```

#### ステップ E: サービスを確認する

- **API server**: http://localhost:8080
- **Frontend UI**: http://localhost:3000
- **TMAN Designer**: http://localhost:49483

#### よく使うコマンド

```bash
# View container logs
docker compose logs -f

# Stop services
docker compose down

# Restart services
docker compose restart

# Full cleanup (including volumes)
docker compose down -v
```


### Linux/Mac へのデプロイ

#### ステップ 1：Docker をインストールする

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
# Log out and log back in to take effect
```

**macOS:**
```bash
# Install Docker Desktop via Homebrew
brew install --cask docker
# Then launch the Docker Desktop app
```

#### ステップ 2：クローンと設定

```bash
git clone https://github.com/zhannn668/esp32-client-agora.git
cd esp32-client-agora/ai_agents
cp .env.example .env
```

#### ステップ 3：環境変数を編集する

```bash
nano .env
# or use vim
vim .env
```

API キーを入力します（上記の Windows セクションを参照してください）。

#### ステップ 4：サービスを起動する

```bash
docker compose up -d
docker exec -it ten_agent_dev bash
cd agents/examples/voice-assistant
task install
task run
```


## ESP32 側のデプロイ

### 開発環境のセットアップ

#### ESP-IDF (v5.2.3) をインストールする

##### Windows

1. **ESP-IDF v5.2.3 オフラインインストーラをダウンロードする**

   https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32/get-started/windows-setup.html

2. **インストーラを実行する**
   - インストールパスを選択します（推奨デフォルト: `C:\Espressif`）
   - インストール後、スタートメニューに “ESP-IDF 5.2 PowerShell” ショートカットが表示されます

3. **インストールを確認する**

   “ESP-IDF 5.2 PowerShell” を開き、次を実行します:
   ```bash
   idf.py --version
   ```

##### Linux

```bash
# Create an install directory
mkdir -p ~/esp
cd ~/esp

# Clone ESP-IDF
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

# Install toolchain
cd esp-idf
./install.sh esp32s3

# Configure environment variables (add to ~/.bashrc)
echo 'alias get_idf=". $HOME/esp/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc
```

#### ESP-ADF (v2.7) をインストールする

##### Windows

1. **ESP-ADF をクローンする**

   ESP-IDF PowerShell で:
   ```bash
   cd C:\Espressif\frameworks
   git clone --recursive https://github.com/espressif/esp-adf.git
   cd esp-adf
   git checkout v2.7
   git submodule update --init --recursive
   ```

2. **ADF_PATH 環境変数を設定する**

   オプション 1: システム設定
   - “System Properties” → “Advanced” → “Environment Variables” を開きます
   - 新しいユーザー変数を作成: `ADF_PATH` = `C:\Espressif\frameworks\esp-adf`

   オプション 2: コマンドライン
   ```powershell
   setx ADF_PATH "C:\Espressif\frameworks\esp-adf"
   ```

   **重要**: 設定後に ESP-IDF PowerShell を再起動してください。

##### Linux

```bash
cd ~/esp
git clone --recursive https://github.com/espressif/esp-adf.git
cd esp-adf
git checkout v2.7
git submodule update --init --recursive

# Add env var
echo 'export ADF_PATH=$HOME/esp/esp-adf' >> ~/.bashrc
source ~/.bashrc
```

#### IDF パッチを適用する

ESP-ADF では、ESP-IDF に FreeRTOS パッチを適用する必要があります:

```bash
cd $IDF_PATH
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```

#### ESP-ADF ボードのピン設定を変更する（重要！）

ReSpeaker XVF3800 のピン配置はデフォルトの Korvo-2 V3 と異なるため、フレームワークのボード設定を変更する必要があります:

**ファイルの場所:**
- Windows: `C:\Espressif\frameworks\esp-adf\components\audio_board\esp32_s3_korvo2_v3\board_pins_config.c`
- Linux/Mac: `$ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c`

:::caution 重要
- このファイルは ESP-ADF フレームワークディレクトリ内にあり、プロジェクトディレクトリ内ではありません。
- 変更は、このボード設定を使用するすべてのプロジェクトに影響します。
- まず元のファイルをバックアップすることを推奨します: `cp board_pins_config.c board_pins_config.c.backup`
:::

**I2C ピンを更新する** – `get_i2c_pins()` を探し、次のように変更します:

```c
esp_err_t get_i2c_pins(i2c_port_t port, i2c_config_t *i2c_config)
{
    // ReSpeaker XVF3800 I2C configuration
    i2c_config->sda_io_num = GPIO_NUM_5;   // ReSpeaker I2C SDA
    i2c_config->scl_io_num = GPIO_NUM_6;   // ReSpeaker I2C SCL
    return ESP_OK;
}
```

**I2S ピンを更新する** – `get_i2s_pins()` を探し、次のように変更します:

```c
esp_err_t get_i2s_pins(int port, board_i2s_pin_t *i2s_config)
{
    // ReSpeaker XVF3800 I2S configuration
    i2s_config->bck_io_num   = GPIO_NUM_8;   // BCLK
    i2s_config->ws_io_num    = GPIO_NUM_7;   // WS/LRCK
    i2s_config->data_out_num = GPIO_NUM_44;  // DOUT
    i2s_config->data_in_num  = GPIO_NUM_43;  // DIN
    i2s_config->mck_io_num   = -1;           // Disable MCLK
    return ESP_OK;
}
```

#### Agora IoT SDK をダウンロードする

1. **SDK をダウンロードする**

   https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar

2. **components ディレクトリに展開する**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client/components
   tar -xvf agora_iot_sdk.tar
   ```

#### esp32-camera サブモジュールを初期化する

```bash
cd esp32-client-agora
git submodule update --init --recursive
```


### ビルドとフラッシュ

#### AI Agent パラメータを設定する

`ai_agents/esp32-client/main/app_config.h` を編集します。LAN IP を使用する場合は、ESP32 とサーバーが同じ LAN 内にあることを確認してください。パブリック IP を使用する場合は、この制約は無視できます。

```c
#pragma once

// ==============================
// AI Agent server configuration
// ==============================
// Change to your Server IP (the computer running Docker)
#define TENAI_AGENT_URL       "http://192.168.x.x:8080"

// ==============================
// Agent graph selection
// ==============================
#define CONFIG_GRAPH_OPENAI     // Use OpenAI graph

// ==============================
// Greeting and prompt
// ==============================
#define GREETING               "Can I help You?"
#define PROMPT                 ""

// ==============================
// Graph configuration
// ==============================
#if defined(CONFIG_GRAPH_OPENAI)
#define GRAPH_NAME             "voice_assistant"
#define V2V_MODEL              "gpt-realtime"
#define LANGUAGE               "en-US"
#define VOICE                  "ash"
#endif

// ==============================
// Agent identity configuration
// ==============================
#define AI_AGENT_NAME          "tenai0125-11"
#define AI_AGENT_CHANNEL_NAME  "test_channel_12345"  // Channel name
#define AI_AGENT_USER_ID        12345                 // User ID

// ==============================
// Audio codec configuration
// ==============================
#define CONFIG_USE_G711U_CODEC

// ==============================
// Agora App ID
// ==============================
#define AGORA_APP_ID "your_agora_app_id"
```

#### ファームウェアをビルドする

1. **ESP-IDF ターミナルを開く**
   - Windows: “ESP-IDF 5.2 PowerShell”
   - Linux/Mac: `get_idf` を実行

2. **プロジェクトディレクトリに入る**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client
   ```

3. **ターゲットチップを設定する**
   ```bash
   idf.py set-target esp32s3
   ```

4. **Wi-Fi と FreeRTOS を設定する**
   ```bash
   idf.py menuconfig
   ```

   次の項目を設定します:

   - **Wi-Fi 設定**:
     ```
     Agora Demo for ESP32 --->
         (your WiFi SSID) WiFi SSID
         (your WiFi password) WiFi Password
     ```

   - **FreeRTOS の後方互換性を有効にする**:
     ```
     Component config --->
         FreeRTOS --->
             Kernel --->
                 [*] configENABLE_BACKWARD_COMPATIBILITY
     ```

5. **ビルド**
   ```bash
   idf.py build
   ```

   成功すると次のように表示されます:
   ```
   Project build complete. To flash, run:
   idf.py flash
   ```

#### ファームウェアを書き込む

1. **ボードを接続する**
   - XIAO ESP32-S3 を USB-C ケーブルで PC に接続します

2. **シリアルポートを確認する**
   - Windows: デバイスマネージャー → Ports で COM ポートを確認（例: COM3）
   - Linux: 通常は `/dev/ttyUSB0` または `/dev/ttyACM0`
   - macOS: 通常は `/dev/cu.usbmodem*`

3. **フラッシュしてモニタする**
   ```bash
   # Windows
   idf.py -p COM3 flash monitor

   # Linux/Mac
   idf.py -p /dev/ttyUSB0 flash monitor
   ```

   **Linux のパーミッション問題**: permission denied が表示された場合は次を実行します:
   ```bash
   sudo usermod -aG dialout $USER
   # then log out and log back in
   ```

4. **フラッシュ成功の確認**

   次のようなログが表示されれば成功です:
   ```
   Hard resetting via RTS pin...
   Connecting...
   ```


## 検証とテスト

### ESP32 の起動ログを確認する

正常に起動すると、シリアル出力に次のような重要なログが含まれます:

```
I (xxxx) wifi: connected with YourWiFi, aid = 1
got ip: 192.168.x.x

~~~~~Initializing AIC3104 Codec~~~~
W (xxxx) AIC3104_NG: Found device at address 0x18
AIC3104 detected, page register = 0x00
~~~~~AIC3104 Codec initialized successfully~~~~

I (xxxx) AUDIO_PIPELINE: Pipeline started
~~~~~agora_rtc_join_channel success~~~~
Agora: Press [SET] key to join the Ai Agent ...
```

### 成功チェックリスト

| 項目 | 意味 |
|------|------|
|  `WiFi connected` | Wi-Fi に正常に接続できた |
|  `got ip: xxx.xxx.xxx.xxx` | IP アドレスを取得した |
|  `Found device at address 0x18` | AIC3104 を検出した |
|  `AIC3104 Codec initialized successfully` | コーデックが正常に初期化された |
|  `agora_rtc_join_channel success` | RTC チャンネルに正常に参加した |

### 音声会話テストを実行する

1. ボード上の **SET** ボタンを押して AI Agent を起動します
2. マイクに向かって話します
3. シリアルログを確認します。音声の送受信ログが表示されるはずです
4. スピーカーから AI の応答が再生されます


## FAQ

### サーバー側の問題

#### Q1: Docker コンテナが起動しない

**A:** 次の点を確認してください：
1. Docker Desktop が起動していることを確認します
2. ポートがすでに使用されていないか確認します：`netstat -an | grep 8080`
3. 詳細ログを確認します：`docker compose logs`

#### Q: コンテナに入った後に `task` コマンドが見つからない

**A:** 正しいイメージを使用していることを確認してください。`docker compose pull` を実行してイメージを更新します。



### ESP32 側の問題

#### Q2: ビルドエラー `i2c driver install error`

**A:** I2C ドライバの競合です。コードが新しい I2C API（`driver/i2c_master.h`）ではなく、レガシー I2C API（`driver/i2c.h`）を使用していることを確認してください。

#### Q: 実行時の I2C タイムアウト `ESP_ERR_TIMEOUT`

**A:** 想定される原因：
1. ハードウェア配線の問題 – I2C ライン／ケーブルを確認します
2. ピン設定の誤り – `board_pins_config.c` が正しく更新されているか確認します
3. I2C アドレスの誤り – ログ内でスキャンされたアドレスを確認します

デバッグログ：
```
W (xxxx) AIC3104_NG: Scanning I2C bus...
W (xxxx) AIC3104_NG: Found device at address 0x??
```
アドレスが `0x18` でない場合は、`aic3104_ng.h` 内の `AIC3104_ADDR` を変更する必要があります。

#### Q: 音声出力がない

**A:** 次を確認します：
1. AIC3104 が正常に初期化されているか（シリアルログを確認）
2. I2S ピンが正しく設定されているか
3. スピーカーが正しく接続されているか

#### Q: ネットワークバッファエラー `Not enough space`

**A:** これは実行時のネットワーク問題であり、通常は一時的に無視しても構いません：
1. ネットワーク品質を確認します
2. 音声ビットレートを下げます
3. ネットワークバッファサイズを増やします

#### Q: `board_pins_config.c` を変更してもエラーが続く

**A:**
1. 正しいファイルパスを編集したことを確認します
2. `idf.py fullclean` を実行してフルクリーンを行います
3. `idf.py build` で再ビルドします



## 参考資料

### 公式ドキュメント

| リソース | リンク |
|------|------|
| ESP-IDF プログラミングガイド | https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32s3/ |
| ESP-ADF プログラミングガイド | https://docs.espressif.com/projects/esp-adf/zh_CN/latest/ |
| Agora RTC ドキュメント | https://docs.agora.io/en/rtc/overview/product-overview |
| TEN Framework ドキュメント | https://doc.theten.ai |
| ReSpeaker XVF3800 ファームウェアガイド | https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/ |

### API サービス

| サービス | コンソール |
|------|-----------|
| Agora | https://console.agora.io/ |
| Deepgram | https://console.deepgram.com/ |
| OpenAI | https://platform.openai.com/ |
| ElevenLabs | https://elevenlabs.io/ |

### チップのデータシート

| データシート | リンク |
|------|------|
| TI AIC3104 データシート | https://www.ti.com/product/TLV320AIC3104 |
| XIAO ESP32-S3 Wiki | https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/ |

### プロジェクトリポジトリ

| リポジトリ | リンク |
|------|------|
| TEN Framework | https://github.com/TEN-framework/ten-framework |
| ESP32 Client Agora | https://github.com/zhannn668/esp32-client-agora |

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。できるだけスムーズにご利用いただけるよう、サポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
