---
description: このプロジェクトは、Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）をエッジ音声デバイスとして使用する方法を実演します。Agora経由でリアルタイムの双方向音声リンクを確立し、Agora Conversational AI Agent API v2（LLM/ASR/TTS）に直接接続して、低遅延のリアルタイム音声会話を可能にします。
title: ReSpeaker XVF3800 + Agora Conversational AI Agent v2 エッジ会話クライアント展開ガイド
keywords:
- reSpeaker
- XVF3800
- XIAO
- ESP32S3
- Agora
- Conversational AI
- AI Agent
- RTC
- ESP-IDF
- ESP-ADF
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /ja/respeaker_xvf3800_agora_convo_client
sku: 114993702,114993700
last_update:
  date: 04/2/2026
  author: Jiayu Zhan(Jack)
---

> 目標：ESP32S3をreSpeaker XVF3800と連携させて、**Agora RTC**経由で安定した低遅延の双方向音声リンクを確立する。
> プロジェクトソースコード：https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects：https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main

## はじめに

このチュートリアルでは、**Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）**をエッジ音声デバイスとして使用し、**Agora RTC**経由で安定した低遅延の双方向音声リンクを確立し、デバイス上で直接**Agora Conversational AI Agent API v2**を呼び出して**ASR → LLM → TTS**の会話ループを完成させる方法をガイドします：デバイスがマイク音声をキャプチャしてアップリンクで送信し、クラウドAIが音声応答を生成してダウンリンクで送信し、デバイスがリアルタイムで再生する—「電話のような」音声会話体験を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## バックエンドの選択

このガイドでは**2つのバックエンドオプション**を提供します。あなたのシナリオに適したものを選択してください：

| オプション | 最適な用途 | サーバー必要 | リンク |
|---|---|---:|---|
| **Agora Conversational AI Agent v2（クラウド、直接）** | 最速セットアップ / 最小インフラ | いいえ | ここにいます ✅ |
| **TEN Framework（セルフホスト、プラガブルASR/LLM/TTS）** | カスタムパイプライン / プロバイダー切り替え / 高度な機能 | はい（Docker） | 👉 [TEN Frameworkバージョンへ](/ja/respeaker_xvf3800_agora_ten_framework_client) |

## 目次

1. [主要機能](#主要機能)
2. [システムアーキテクチャ](#システムアーキテクチャ)
3. [前提条件](#前提条件)
4. [ファームウェアとハードウェアの注意事項](#ファームウェアとハードウェアの注意事項)
5. [ESP32展開](#ESP32展開)
   - [開発環境セットアップ](#開発環境セットアップ)
   - [Agora IoT SDKダウンロード](#Agora-IoT-SDKダウンロード)
   - [ESP-ADFボードピン設定（重要）](#ESP-ADFボードピン設定重要)
   - [プロジェクトパラメータ設定](#プロジェクトパラメータ設定)
   - [ビルドとフラッシュ](#ビルドとフラッシュ)
6. [検証とテスト](#検証とテスト)
7. [FAQ](#FAQ)
8. [参考資料](#参考資料)




## 主要機能

- **リアルタイム音声会話**：Agora RTCベースの低遅延双方向音声リンク  
- **直接AI Agent v2統合**：デバイスがAgora Conversational AI Agent API v2に直接接続  
- **XVF3800ボタン制御**：ボタンのI2Cポーリングによる会話開始/停止  
- **音響エコーキャンセレーション（AEC）**：会話品質向上のためデバイス音声パイプラインにAECを統合  
- **G.711 μ-lawコーデック**：組み込み音声シナリオ向けの効率的なコーデック/デコーダー  
- **設定可能なAIバックエンド**：サンプルはOpenAI / Azure OpenAIなどをサポート  
- **8 kHzサンプルレート**：音声会話シナリオ向けに最適化  



## システムアーキテクチャ

### アーキテクチャ概要

```
┌─────────────────────────────────────────────────────────────────────┐
│                          System Architecture                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │   ESP32-S3 Device│                    │   Agora Conversational  │ │
│  │   (Edge)         │                    │      AI Agent v2        │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • Microphone cap.│ ──── Agora RTC ──→ │ • ASR (speech recog.)   │ │
│  │ • WiFi           │     real-time audio│ • LLM (large language)  │ │
│  │ • Speaker play   │ ←── Agora RTC ──── │ • TTS (speech synth.)   │ │
│  │ • Button control │                    │ • Agent mgmt/auth       │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### エッジ音声処理パイプライン

```
Microphone (XVF3800)
    ↓ I2S (DIN)
I2S Capture
    ↓
AEC / Audio Processing
    ↓
RTC Encode (G.711 μ-law, 8kHz)
    ↓
Agora RTC Uplink → AI Agent v2
    ↓
(Cloud: ASR → LLM → TTS)
    ↓
Agora RTC Downlink ← AI Agent v2
    ↓
RTC Decode
    ↓
I2S Playback (DOUT)
    ↓
Speaker (3.5mm / AIC3104)
```



## 前提条件

### ハードウェア要件

| ハードウェア | 説明 |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | メインコントローラーボード（PSRAMバージョン推奨） |
| **reSpeaker XVF3800** | 4マイクアレイ拡張ボード（DSP付き） |
| **スピーカー** | 再生用の3.5mmオーディオジャックに接続 |
| **USB-Cデータケーブル** | ファームウェアフラッシュと電源供給用 |

:::tip 注意
このプロジェクトでは、音声コーデック/デコードはXVF3800とAIC3104によって処理されます。ESP32-S3はI2S経由で音声データを転送し、I2C経由でコーデック/ボタンを制御します。
:::

### ソフトウェア要件

| ソフトウェア | 推奨バージョン | 目的 |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | ESP32開発フレームワーク |
| **ESP-ADF** | v2.7 | ESP32音声開発フレームワーク |
| **Python** | 3.8+ | ツールチェーン/ビルド依存関係 |
| **Git** | 最新 | コード取得と管理 |



## Conversational AIの有効化（Agoraコンソール）

このセクションでは、**Agoraプロジェクト**のコンソールで**Enable Conversational AI**スイッチがオンになっていることを確認し、後続の呼び出しに必要な**App ID / App Certificate / RTCトークン**を準備します。この手順をスキップすると、デバイスはRTCチャンネルへの参加に成功する可能性がありますが、Conversational AI Engineの会話パイプラインのトリガーに失敗する場合があります。

### 必要なもの

- **Agoraアカウント**
- **Agoraプロジェクト**（推奨：**セキュアモード：APP ID + Token（推奨）**で作成）
- プロジェクト情報：
  - **App ID**
  - **App Certificate**（サーバーサイドトークン生成用）
  - **RTCトークン（一時的またはサーバー生成）**（RTC参加テスト用）

### 1) Agoraへのサインアップ/ログイン（概要）

- メール/電話登録とサードパーティログインをサポート。
- 登録後、**Agoraコンソール**にログイン；通常はプロジェクト作成にガイドされます。

### 2) Agoraプロジェクトの作成（概要）

Agoraコンソールの**Projects**ページで：

1. **Create New**をクリック
2. プロジェクト名/ユースケースを入力
3. 認証方法：**APP ID + Token**（推奨）
4. 送信して作成

![Create project](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip なぜTokenモードが推奨されるのか？
本番環境でより安全で、Conversational AI / RTC統合の公式推奨認証フローとより良く整合します。
:::

### 3) App IDの取得

**Projects**リストで、あなたのプロジェクトを見つけて**App ID**をコピーします。
![Get App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )

### 4) App Certificateの取得（サーバーサイドトークン生成用）

1. **Projects**リストで、プロジェクトの右側にある✏️（編集/設定）アイコンをクリックします。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. プロジェクト設定ページで、**Primary Certificate**セクションから**App Certificate**をコピーします。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )

:::caution 重要
App Certificateは機密情報です。パブリックリポジトリにコミットしたり、パブリックログに出力したりしないでください。
:::

### 5) RTCトークンの生成（クイックテスト用）

2つの一般的な方法：

- **コンソールで一時トークンを生成（Temp Token）**
  1. プロジェクト設定ページに移動
  2. Securityパネルで**Generate Temp Token**をクリック
  3. チャンネル名を入力 → 生成 → トークンをコピー

- **Agora Token Builder（ウェブ）を使用**
  - App ID / App Certificate、チャンネル名、UIDなどを入力してトークンを生成（サーバーサイドトークン生成を実装する前のクイック検証に便利）

### 6) Enable Conversational AIをオンにする（重要）

Conversational AI Engineを使用する前に、アプリのコンソールで有効にする必要があります：

1. **Projects**に移動し、対象プロジェクトを見つけて✏️をクリックして設定に入ります。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. **All features**で、**Conversational AI > Configurations**を見つけます
3. **Enable Conversational AI**トグルをオンにします。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip 旧コンソール vs 新コンソール
旧UIが表示されている場合は、まず新しいコンソールに切り替えてください（ページには通常「新バージョンに切り替え」などのエントリが提供されています）。
:::



## ファームウェアとハードウェアの注意事項

### 主要ピンマッピング（reSpeaker XVF3800 + XIAO ESP32-S3）

| インターフェース | 機能 | ESP32-S3ピン |
|------|------|---------------|
| **I2C** | コーデック制御 + ボタン | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | 音声データ | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **電源** | 電源/フラッシュ | USB-C（XIAO ESP32-S3） |

:::caution 重要
デフォルトのESP-ADFボード設定は通常Korvo-2-V3用に準備されています。そのピンマッピングはXVF3800とは異なります。このガイドに従って設定しない場合、**I2C経由でコーデックが検出されない / I2Sでオーディオが出力されない**などの一般的な症状が発生します。
:::


## ESP32デプロイメント

### このリポジトリをクローン
```bash
git clone https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main/esp32-respeaker
```

### 開発環境のセットアップ

#### ステップ1：ESP-IDF v5.2.3をインストール

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

cd esp-idf
./install.sh esp32s3

# (Recommended) Create an environment load alias (write into ~/.bashrc or ~/.zshrc)
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

#### ステップ2：ESP-ADF v2.7をインストール

```bash
cd ~/esp
git clone -b v2.7 --recursive https://github.com/espressif/esp-adf.git

export ADF_PATH=~/esp/esp-adf
echo 'export ADF_PATH=~/esp/esp-adf' >> ~/.bashrc  # or ~/.zshrc
```

#### ステップ3：IDFパッチを適用（ESP-ADFで必要）

```bash
cd ~/esp/esp-idf
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```


### Agora IoT SDKをダウンロード

Agora IoT SDKをプロジェクトの`components/`ディレクトリに展開します（プロジェクトルートを例として使用）：

```bash
cd /path/to/esp32-client-Respeaker-convo/components

wget https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar
tar -xvf agora_iot_sdk.tar
```

展開後、ディレクトリ構造は次のようになります：

```text
components/agora_iot_sdk/
├── CMakeLists.txt
├── include/
│   └── agora_rtc_api.h
└── libs/
    ├── libagora-cjson.a
    ├── libahpl.a
    └── librtsa.a
```

### ESP-ADFボードピンの設定（重要）

このプロジェクトはESP-ADF Korvo-2-V3ボードをベースとして使用していますが、そのピンマッピングをXVF3800設定に置き換える必要があります。

**方法A（推奨）：board_pins_config.cを直接上書き**

```bash
cp board_configs/board_pins_config_respeaker.c    $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

**効果を確認：**

```bash
grep "TAG =" $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

期待される出力には以下が含まれます：

```c
static const char *TAG = "RESPEAKER_XVF3800";
```

:::tip なぜこれを変更するのか？
コーデック（AIC3104）制御とI2Sキャプチャ/再生は正しいI2C/I2Sピンマッピングに依存しているためです。ピンが間違っていると、**I2Cタイムアウト / 0x18を検出できない / 音が出ない**などの問題が発生します。
:::


### プロジェクトパラメータ設定

`main/app_config.h`を編集して以下を設定します：

#### 1) WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2) Agoraアカウント情報

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3) RTCチャンネルとUID

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // Optional: tokens recommended in production
#define CONVO_AGENT_RTC_UID      1001
#define CONVO_REMOTE_RTC_UID     1000
```

#### 4) LLM設定（例：OpenAI / Azure OpenAI）

```c
#define LLM_URL                  "https://api.openai.com/v1/chat/completions"
#define LLM_API_KEY              "sk-your-openai-api-key"
#define LLM_MODEL                "gpt-4o-mini"
#define LLM_SYSTEM_MESSAGE       "You are a helpful AI assistant."
```

```c
#define LLM_URL                  "https://your-resource.openai.azure.com/openai/deployments/..."
#define LLM_API_KEY              "your-azure-api-key"
#define LLM_MODEL                "gpt-4"
```

#### 5) TTS設定（例：Azure TTS）

```c
#define TTS_VENDOR               "azure"
#define TTS_API_KEY              "your-azure-speech-key"
#define TTS_REGION               "tts-region"
#define TTS_VOICE_NAME           "en-US-JennyNeural"
```

#### 6) ASR設定

```c
#define ASR_LANGUAGE             "en-US"
```


### ビルドとフラッシュ

#### ステップ1：ESP-IDF環境をロード

```bash
get_idf
# or
. $HOME/esp/esp-idf/export.sh
```

#### ステップ2：プロジェクトディレクトリに入りターゲットを設定

```bash
cd /path/to/esp32-client-Respeaker-convo
idf.py set-target esp32s3
```

#### ステップ3：ビルド

```bash
idf.py build
```

#### ステップ4：フラッシュとモニター

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Linuxシリアル権限
「permission denied」が表示される場合は、以下を実行してください：
```bash
sudo usermod -aG dialout $USER
# Then log out and log back in
```
:::



## 検証とテスト

### 起動ログチェックリスト

正常に起動した場合、シリアルログには通常以下が含まれます：

- WiFi接続とIP取得
- AIC3104検出（I2Cアドレスは通常`0x18`）
- オーディオパイプライン正常開始
- Agora RTC正常参加（または準備完了）

例（参考のみ）：

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### 会話を開始（ボタン制御）

1. 電源を入れ、デバイスが準備完了になるまで待つ  
2. **SETボタンを一度押す**：会話を開始/参加（エージェントがRTCチャンネルに参加）  
3. マイクに向かって話し、スピーカーからAIの返答が再生されるのを待つ  
4. 再度**SET**を押す（または**MUTE**を押す）と会話を停止  


## FAQ

### Q1：I2Cタイムアウト / AIC3104（0x18）が見つからない

**考えられる原因：**
- ESP-ADFの`board_pins_config.c`がこのガイドの説明通りに置き換えられていない
- 間違ったI2Cピンマッピング（SDA=GPIO5、SCL=GPIO6であるべき）
- ハードウェア接続の問題（XIAOとXVF3800が正しく接続されていない）

**推奨チェック：**
- 「ESP-ADFボードピンの設定」ステップを繰り返し、`idf.py fullclean`を実行して再ビルド
- 起動ログで`0x18`が検出されるかどうかを確認

### Q2：録音/アップリンクは動作するが、スピーカー出力がない

**一般的な原因：**
- I2S DIN/DOUT方向の設定ミス（DIN=GPIO43、DOUT=GPIO44）
- スピーカーが3.5mmジャックに接続されていない、または音量が低すぎる
- AEC/オーディオパイプラインが正しく開始されていない

### Q3：ビルドエラーまたは依存関係の不足

**提案：**
- ESP-IDF / ESP-ADFのバージョンがこのガイドと一致することを確認
- サブモジュールを再初期化（プロジェクトがサブモジュールを使用している場合）：
  ```bash
  git submodule update --init --recursive
  ```
- 完全クリーンを実行：
  ```bash
  idf.py fullclean
  ```



## 参考資料

- Agoraコンソール（App ID / API Key）
- Agora RTCドキュメントとIoT SDKドキュメント
- ESP-IDF v5.2.3ドキュメント
- ESP-ADF v2.7ドキュメント
- reSpeaker XVF3800紹介とファームウェア更新ガイド
- [ESP32 Conversational AI Clients](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに合わせて、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
