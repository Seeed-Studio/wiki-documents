---
description: このプロジェクトでは、Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）をエッジ音声デバイスとして使用し、Agora経由でリアルタイム双方向音声リンクを確立し、Agora ten-frameworkバックエンド（LLM/ASR/TTS）に接続して低遅延リアルタイム音声会話を実現する方法を実演します。
title: ReSpeaker XVF3800 + Agora ten-framework エッジ会話クライアント展開ガイド
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
slug: /ja/respeaker_xvf3800_agora_ten_framework_client
sku: 114993702,114993700
last_update:
  date: 09/2/2026
  author: Jiayu Zhan(Jack)
---

> 目標：ESP32S3をreSpeaker XVF3800と連携させ、**Agora RTC**を介して安定した低遅延双方向音声リンクを構築する。
> ソースコード：https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework
> Seeed-Projects：https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework

## はじめに

このチュートリアルでは、Seeed XIAO ESP32-S3とreSpeaker XVF3800を使用して音声キャプチャと再生を行い、Agora RTCを使用してデバイスとバックエンド間のリアルタイム音声接続を完了する方法をガイドします。バックエンドはAI Agentとして動作します。このプロジェクトは標準化された設定方法（`.env` / `property.json`）を提供し、ワンクリックDocker展開、動的トークン認証、プラガブルプロバイダー（ASR/LLM/TTSは必要に応じて交換可能）をサポートします。**ASR → LLM → TTS**の完全なループを自動的に完了し、合成された音声をデバイスにストリーミングして再生し、低遅延の「一度話して一度返答を得る」会話体験を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## バックエンドの選択

このガイドでは**2つのバックエンドオプション**を提供します。あなたのシナリオに適したものを選択してください：

| オプション | 最適な用途 | サーバー必要 | リンク |
|---|---|---:|---|
| **Agora Conversational AI Agent v2（クラウド、直接）** | 最速セットアップ / 最小インフラ | いいえ | 👉 [Agent v2バージョンへ](/ja/respeaker_xvf3800_agora_convo_client) |
| **TEN Framework（セルフホスト、プラガブルASR/LLM/TTS）** | カスタムパイプライン / プロバイダー切り替え / 高度な機能 | はい（Docker） | ここにいます ✅ |


## 目次

1. [Agora Assistant – クイックスタートガイド](#Agora-Assistant-–-クイックスタートガイド)
2. [システムアーキテクチャ](#システムアーキテクチャ)
3. [前提条件](#前提条件)
4. [ファームウェア更新](#ファームウェア更新)
5. [サーバーサイド展開](#サーバーサイド展開)
   - [Windows展開](#Windows展開-推奨)
   - [Linux/Mac展開](#Linux/Mac展開)
6. [ESP32サイド展開](#ESP32サイド展開)
   - [開発環境セットアップ](#開発環境セットアップ)
   - [ビルド & フラッシュ](#ビルド-&-フラッシュ)
7. [検証 & テスト](#検証-&-テスト)
8. [FAQ](#FAQ)
9. [参考文献](#参考文献)


## Agora Assistant – クイックスタートガイド

### アーキテクチャ概要

1. **ウェイクワード検出** – 事前定義されたアクティベーションフレーズを継続的に聞き取ります。
2. **音声テキスト変換（STT）** – 音声認識エンジンを使用してユーザーの音声をテキストに変換します。
3. **RAG対応LLM** – ベクターデータベースから関連するコンテキストを取得し、LLMを使用してインテリジェントな応答を生成します。
4. **テキスト音声変換（TTS）** – 生成された応答を自然な音声に変換します。


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

| ハードウェア | 備考 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | メインコントローラーボード |
| **ReSpeaker XVF3800** | 音声拡張ボード（マイクアレイ + スピーカーインターフェース） |
| **スピーカー** | AI応答を再生するための少なくとも1つのスピーカー |
| **USB-Cデータケーブル** | ファームウェアフラッシュとデバイス電源供給用 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp" alt="ReSpeaker XVF3800" width={500} height="auto" /></p>

### アカウント & APIキー

展開前に、以下のサービスに登録してAPIキーを取得する必要があります：

#### 🔹 Agora – 必須

1. https://console.agora.io/ にアクセス
2. 無料アカウントにサインアップ
3. 新しいプロジェクトを作成
4. **App ID**と**App Certificate**をコピー

#### 🔹 Deepgram（ASR）– 必須

1. https://console.deepgram.com/ にアクセス
2. 無料アカウントにサインアップ（無料クォータ利用可能）
3. API Keysページに移動
4. 新しいAPIキーを作成

#### 🔹 OpenAI（LLM）– 必須

1. https://platform.openai.com/ にアクセス
2. サインアップして支払い方法を追加
3. API Keysページに移動
4. 新しいシークレットキーを作成

#### 🔹 Cartesia（TTS）– 必須

1. https://cartesia.ai/sonic にアクセス
2. 無料アカウントにサインアップ（無料クォータ利用可能）
3. API Key → New API Keyに移動
4. APIキーをコピー

### ソフトウェア要件

| ソフトウェア | バージョン | 目的 |
|------|----------|------|
| **Docker Desktop** | 最新 | コンテナ化されたサーバー展開 |
| **Git** | 最新 | リポジトリのクローン |
| **ESP-IDF** | v5.2.3 | ESP32開発フレームワーク |
| **ESP-ADF** | v2.7 | ESP32音声開発フレームワーク |

## ファームウェア更新

最高の再生体験を実現するため、XMOSファームウェアを最新バージョンに更新することをお勧めします。

### ファームウェアダウンロード

ファームウェアは[こちら](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)からダウンロードできます。

### 更新手順

コンピューターで**ReSpeaker XMOS XVF3800 with XIAO ESP32S3**を接続し、ファームウェア更新ツールを実行してファームウェアを選択します。

詳細なガイドについては、[このページ](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)を参照してください。

:::tip 重要
ファームウェア更新は必須手順であり、最高の音声体験と安定性のために強く推奨されます。
:::


## サーバーサイド展開

### Windows展開（推奨）

#### ステップA：Docker Desktopのインストールと設定（初回のみ）

1. **Docker Desktopのダウンロードとインストール**

   https://www.docker.com/products/docker-desktop/ にアクセスしてダウンロードとインストールを行います。

2. **インストールオプション**
   - **Use WSL 2 instead of Hyper-V**をチェック（利用可能な場合）

3. **インストールの確認**
   - インストール後にDocker Desktopを開く
   - トレイアイコンが**Docker is running**を表示するまで待つ

4. **（推奨）WSL統合を有効にする**
   - Docker Desktop → `Settings` → `Resources` → `WSL Integration`
   - よく使用するWSLディストリビューション（例：Ubuntu）を有効にする

#### ステップB：リポジトリのクローンと環境変数の設定

1. **PowerShellまたはWindows Terminalを開く**

2. **リポジトリのクローン**
   ```bash
   git clone https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework.git
   cd esp32-client-agora/ai_agents
   ```

3. **環境テンプレートのコピー**

   PowerShell：
   ```powershell
   Copy-Item .env.example .env
   ```

   CMD：
   ```cmd
   copy .env.example .env
   ```

4. **`.env`ファイルを編集してAPIキーを入力**

   メモ帳またはVS Codeで`.env`を開き、キーフィールドを更新します：

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

   # ==============================
   # Server config (usually no changes needed)
   # ==============================
   LOG_PATH=/tmp/ten_agent
   LOG_STDOUT=true
   GRAPH_DESIGNER_SERVER_PORT=49483
   SERVER_PORT=8080
   WORKERS_MAX=100
   ```

#### ステップ C: Docker サービスを開始

```bash
docker compose up -d
```

コンテナの状態を確認（オプション）：
```bash
docker compose ps
```

以下のような出力が表示されるはずです：
```
NAME            STATUS    PORTS
ten_agent_dev   running   0.0.0.0:3000->3000/tcp, 0.0.0.0:49483->49483/tcp
```

#### ステップ D: コンテナに入り、サンプルを実行

1. **コンテナに入る**
   ```bash
   docker exec -it ten_agent_dev bash
   ```

2. **音声アシスタントサンプルをインストールして実行**
   ```bash
   cd agents/examples/voice-assistant
   task install
   task run
   ```

3. **サービスの開始を待つ**

   以下のようなログが表示されたら、サービスが実行中です：
   ```
   [INFO] Server started on port 8080
   [INFO] Waiting for connections...
   ```

#### ステップ E: サービスを確認

- **API サーバー**: http://localhost:8080
- **フロントエンド UI**: http://localhost:3000
- **TMAN Designer**: http://localhost:49483

#### 一般的なコマンド

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


### Linux/Mac デプロイメント

#### ステップ 1: Docker をインストール

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

#### ステップ 2: クローンと設定

```bash
git clone https://github.com/zhannn668/esp32-client-agora.git
cd esp32-client-agora/ai_agents
cp .env.example .env
```

#### ステップ 3: 環境変数を編集

```bash
nano .env
# or use vim
vim .env
```

API キーを入力してください（上記の Windows セクションを参照）。

#### ステップ 4: サービスを開始

```bash
docker compose up -d
docker exec -it ten_agent_dev bash
cd agents/examples/voice-assistant
task install
task run
```


## ESP32 側のデプロイメント

### 開発環境のセットアップ

#### ESP-IDF (v5.2.3) をインストール

##### Windows

1. **ESP-IDF v5.2.3 オフラインインストーラーをダウンロード**

   https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32/get-started/windows-setup.html

2. **インストーラーを実行**
   - インストールパスを選択（推奨デフォルト：`C:\Espressif`）
   - インストール後、スタートメニューに「ESP-IDF 5.2 PowerShell」のショートカットが表示されます

3. **インストールを確認**

   「ESP-IDF 5.2 PowerShell」を開いて実行：
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

#### ESP-ADF (v2.7) をインストール

##### Windows

1. **ESP-ADF をクローン**

   ESP-IDF PowerShell で：
   ```bash
   cd C:\Espressif\frameworks
   git clone --recursive https://github.com/espressif/esp-adf.git
   cd esp-adf
   git checkout v2.7
   git submodule update --init --recursive
   ```

2. **ADF_PATH 環境変数を設定**

   オプション 1: システム設定
   - 「システムのプロパティ」→「詳細設定」→「環境変数」を開く
   - 新しいユーザー変数を作成：`ADF_PATH` = `C:\Espressif\frameworks\esp-adf`

   オプション 2: コマンドライン
   ```powershell
   setx ADF_PATH "C:\Espressif\frameworks\esp-adf"
   ```

   **重要**: 設定後、ESP-IDF PowerShell を再起動してください。

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

#### IDF パッチを適用

ESP-ADF では ESP-IDF に FreeRTOS パッチを適用する必要があります：

```bash
cd $IDF_PATH
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```

#### ESP-ADF ボードピン設定を変更（重要！）

ReSpeaker XVF3800 のピン配置がデフォルトの Korvo-2 V3 と異なるため、フレームワークのボード設定を変更する必要があります：

**ファイルの場所：**
- Windows: `C:\Espressif\frameworks\esp-adf\components\audio_board\esp32_s3_korvo2_v3\board_pins_config.c`
- Linux/Mac: `$ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c`

:::caution 重要
- このファイルは ESP-ADF フレームワークディレクトリにあり、プロジェクトディレクトリにはありません。
- 変更はこのボード設定を使用するすべてのプロジェクトに影響します。
- 最初に元のファイルをバックアップすることをお勧めします：`cp board_pins_config.c board_pins_config.c.backup`
:::

**I2C ピンを更新** – `get_i2c_pins()` を見つけて以下に変更：

```c
esp_err_t get_i2c_pins(i2c_port_t port, i2c_config_t *i2c_config)
{
    // ReSpeaker XVF3800 I2C configuration
    i2c_config->sda_io_num = GPIO_NUM_5;   // ReSpeaker I2C SDA
    i2c_config->scl_io_num = GPIO_NUM_6;   // ReSpeaker I2C SCL
    return ESP_OK;
}
```

**I2S ピンを更新** – `get_i2s_pins()` を見つけて以下に変更：

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

#### Agora IoT SDK をダウンロード

1. **SDK をダウンロード**

   https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar

2. **components ディレクトリに展開**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client/components
   tar -xvf agora_iot_sdk.tar
   ```

#### esp32-camera サブモジュールを初期化

```bash
cd esp32-client-agora
git submodule update --init --recursive
```


### ビルドとフラッシュ

#### AI エージェントパラメータを設定

`ai_agents/esp32-client/main/app_config.h` を編集します。LAN IP を使用する場合は、ESP32 とサーバーが同じ LAN にあることを確認してください。パブリック IP を使用する場合は、これを無視できます。

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

#### ファームウェアをビルド

1. **ESP-IDF ターミナルを開く**
   - Windows: 「ESP-IDF 5.2 PowerShell」
   - Linux/Mac: `get_idf` を実行

2. **プロジェクトディレクトリに移動**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client
   ```

3. **ターゲットチップを設定**
   ```bash
   idf.py set-target esp32s3
   ```

4. **Wi-Fi と FreeRTOS を設定**
   ```bash
   idf.py menuconfig
   ```

   以下の項目を設定：

   - **Wi-Fi 設定**:
     ```
     Agora Demo for ESP32 --->
         (your WiFi SSID) WiFi SSID
         (your WiFi password) WiFi Password
     ```

   - **FreeRTOS 後方互換性を有効化**:
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

   成功すると以下が表示されます：
   ```
   Project build complete. To flash, run:
   idf.py flash
   ```

#### ファームウェアをフラッシュ

1. **ボードを接続**
   - XIAO ESP32-S3 を USB-C ケーブルでコンピュータに接続

2. **シリアルポートを特定**
   - Windows: デバイスマネージャー → ポート、COM ポートを見つける（例：COM3）
   - Linux: 通常 `/dev/ttyUSB0` または `/dev/ttyACM0`
   - macOS: 通常 `/dev/cu.usbmodem*`

3. **フラッシュとモニター**
   ```bash
   # Windows
   idf.py -p COM3 flash monitor

   # Linux/Mac
   idf.py -p /dev/ttyUSB0 flash monitor
   ```

   **Linux 権限の問題**: 権限拒否エラーが表示された場合、実行：
   ```bash
   sudo usermod -aG dialout $USER
   # then log out and log back in
   ```

4. **フラッシュ成功の確認**

   以下のようなログが表示されれば成功です：
   ```
   Hard resetting via RTS pin...
   Connecting...
   ```


## 検証とテスト

### ESP32 起動ログを確認

正常に起動すると、シリアル出力に以下の重要なログが含まれるはずです：

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
|  `WiFi connected` | Wi-Fi 接続成功 |
|  `got ip: xxx.xxx.xxx.xxx` | IP アドレス取得 |
|  `Found device at address 0x18` | AIC3104 検出 |
|  `AIC3104 Codec initialized successfully` | コーデック初期化成功 |
|  `agora_rtc_join_channel success` | RTC チャンネル参加成功 |

### 音声会話テストの実行

1. ボード上の **SET** ボタンを押してAIエージェントを開始します
2. マイクに向かって話します
3. シリアルログを確認します。音声送受信ログが表示されるはずです
4. スピーカーがAIの返答を再生します


## FAQ

### サーバーサイドの問題

#### Q1: Dockerコンテナの起動に失敗する

**A:** 以下を確認してください：
1. Docker Desktopが実行されていることを確認します
2. ポートが既に使用されているかチェックします：`netstat -an | grep 8080`
3. 詳細ログを確認します：`docker compose logs`

#### Q: コンテナに入った後、`task`コマンドが見つからない

**A:** 正しいイメージを使用していることを確認してください。`docker compose pull`を実行してイメージを更新します。



### ESP32サイドの問題

#### Q2: ビルドエラー `i2c driver install error`

**A:** I2Cドライバの競合です。コードが新しいAPI（`driver/i2c_master.h`）ではなく、レガシーI2C API（`driver/i2c.h`）を使用していることを確認してください。

#### Q: ランタイムI2Cタイムアウト `ESP_ERR_TIMEOUT`

**A:** 考えられる原因：
1. ハードウェア配線の問題 – I2Cライン/ケーブルを確認してください
2. 間違ったピン設定 – `board_pins_config.c`が正しく更新されているか確認してください
3. 間違ったI2Cアドレス – ログでスキャンされたアドレスを確認してください

デバッグログ：
```
W (xxxx) AIC3104_NG: Scanning I2C bus...
W (xxxx) AIC3104_NG: Found device at address 0x??
```
アドレスが`0x18`でない場合、`aic3104_ng.h`の`AIC3104_ADDR`を変更する必要があります。

#### Q: 音声出力がない

**A:** 以下を確認してください：
1. AIC3104が正常に初期化されているか（シリアルログを確認）
2. I2Sピンが正しく設定されているか
3. スピーカーが正しく接続されているか

#### Q: ネットワークバッファエラー `Not enough space`

**A:** これはランタイムネットワークの問題で、通常は一時的に無視できます：
1. ネットワーク品質を確認してください
2. 音声ビットレートを下げてください
3. ネットワークバッファサイズを増やしてください

#### Q: `board_pins_config.c`を修正した後もエラーが続く

**A:**
1. 正しいファイルパスを編集したことを確認してください
2. 完全クリーンのため`idf.py fullclean`を実行してください
3. `idf.py build`で再ビルドしてください



## リファレンス

### 公式ドキュメント

| リソース | リンク |
|------|------|
| ESP-IDFプログラミングガイド | https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32s3/ |
| ESP-ADFプログラミングガイド | https://docs.espressif.com/projects/esp-adf/zh_CN/latest/ |
| Agora RTCドキュメント | https://docs.agora.io/en/rtc/overview/product-overview |
| TENフレームワークドキュメント | https://doc.theten.ai |
| ReSpeaker XVF3800ファームウェアガイド | https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/ |

### APIサービス

| サービス | コンソール |
|------|-----------|
| Agora | https://console.agora.io/ |
| Deepgram | https://console.deepgram.com/ |
| OpenAI | https://platform.openai.com/ |
| ElevenLabs | https://elevenlabs.io/ |

### チップデータシート

| データシート | リンク |
|------|------|
| TI AIC3104データシート | https://www.ti.com/product/TLV320AIC3104 |
| XIAO ESP32-S3 Wiki | https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/ |

### プロジェクトリポジトリ

| リポジトリ | リンク |
|------|------|
| TENフレームワーク | https://github.com/TEN-framework/ten-framework |
| ESP32 Client Agora | https://github.com/zhannn668/esp32-client-agora |

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の体験を可能な限りスムーズにするため、サポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
