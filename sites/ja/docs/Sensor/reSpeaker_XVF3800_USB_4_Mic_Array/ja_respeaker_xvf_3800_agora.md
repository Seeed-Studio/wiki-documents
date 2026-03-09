---
description: このプロジェクトでは、Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）をエッジ音声デバイスとして使用する方法を示します。Agora を介してリアルタイムの双方向オーディオリンクを確立し、Agora Conversational AI Agent API v2（LLM/ASR/TTS）に直接接続して、低遅延なリアルタイム音声対話を実現します。
title: reSpeaker XVF3800 + Agora Conversational AI Agent v2 エッジ音声対話クライアント デプロイガイド
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
slug: /respeaker_xvf3800_agora_convo_client
sku: 114993702,114993700
last_update:
  date: 2/04/2026
  author: Jiayu Zhan(Jack)
createdAt: '2026-02-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_agora_convo_client/
---

> 目標：ESP32S3 と reSpeaker XVF3800 を連携させて、**Agora RTC** を介した安定した低遅延の双方向オーディオリンクを構築します。
> プロジェクトのソースコード: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main

## はじめに

このチュートリアルでは、**Seeed Studio reSpeaker XVF3800（XIAO ESP32-S3）** をエッジ音声デバイスとして使用し、**Agora RTC** を介して安定した低遅延の双方向オーディオリンクを構築し、デバイス上から直接 **Agora Conversational AI Agent API v2** を呼び出して **ASR → LLM → TTS** の対話ループを完結させる方法を説明します。デバイスはマイク音声を取得してアップリンクし、クラウド側の AI が音声応答を生成してダウンリンクし、デバイスがそれをリアルタイムに再生することで、「電話の通話」のような音声対話体験を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## バックエンドを選ぶ

このガイドでは、**2 つのバックエンドオプション** を提供します。用途に合うものを選択してください。

| オプション | 最適な用途 | サーバーの要否 | リンク |
|---|---|---:|---|
| **Agora Conversational AI Agent v2（クラウド・直接接続）** | 最速のセットアップ / 最小限のインフラ | 不要 | 今見ているページです ✅ |
| **TEN Framework（セルフホスト、プラガブルな ASR/LLM/TTS）** | カスタムパイプライン / プロバイダー切り替え / 高度な機能 | 必要（Docker） | 👉 [TEN Framework 版へ移動](/ja/respeaker_xvf3800_agora_ten_framework_client) |

## 目次

1. [主な特長](#主な特長)
2. [システムアーキテクチャ](#システムアーキテクチャ)
3. [前提条件](#前提条件)
4. [ファームウェアとハードウェアに関する注意](#ファームウェアとハードウェアに関する注意)
5. [ESP32 へのデプロイ](#esp32-へのデプロイ)
   - [開発環境のセットアップ](#開発環境のセットアップ)
   - [Agora IoT SDK のダウンロード](#agora-iot-sdk-のダウンロード)
   - [ESP-ADF ボードピンの設定（重要）](#esp-adf-ボードピンの設定重要)
   - [プロジェクトパラメータの設定](#プロジェクトパラメータの設定)
   - [ビルドとフラッシュ](#ビルドとフラッシュ)
6. [検証とテスト](#検証とテスト)
7. [FAQ](#faq)
8. [参考資料](#参考資料)




## 主な特長

- **リアルタイム音声対話**：Agora RTC に基づく低遅延の双方向オーディオリンク  
- **AI Agent v2 への直接統合**：デバイスが Agora Conversational AI Agent API v2 に直接接続  
- **XVF3800 ボタン制御**：ボタンを I2C ポーリングして対話の開始/停止を制御  
- **アコースティックエコーキャンセレーション（AEC）**：デバイスのオーディオパイプラインに AEC を統合し、対話品質を向上  
- **G.711 μ-law コーデック**：組み込み音声シナリオ向けの効率的なコーデック/デコーダ  
- **設定可能な AI バックエンド**：サンプルは OpenAI / Azure OpenAI などをサポート  
- **8 kHz サンプリングレート**：音声対話シナリオ向けに最適化  



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

### エッジ側オーディオ処理パイプライン

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
| **Seeed Studio XIAO ESP32-S3** | メインコントローラボード（PSRAM 搭載版を推奨） |
| **reSpeaker XVF3800** | 4 マイクアレイ拡張ボード（DSP 搭載） |
| **スピーカー** | 再生用に 3.5mm オーディオジャックへ接続 |
| **USB-C データケーブル** | ファームウェアのフラッシュおよび電源供給用 |

:::tip Note
このプロジェクトでは、オーディオのコーデック/デコードは XVF3800 と AIC3104 によって処理されます。ESP32-S3 は I2S 経由でオーディオデータを転送し、I2C 経由でコーデック/ボタンを制御します。
:::

### ソフトウェア要件

| ソフトウェア | 推奨バージョン | 用途 |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | ESP32 開発フレームワーク |
| **ESP-ADF** | v2.7 | ESP32 オーディオ開発フレームワーク |
| **Python** | 3.8+ | ツールチェーン/ビルド依存関係 |
| **Git** | 最新版 | コードの取得と管理 |



## Conversational AI を有効化する（Agora Console）

このセクションでは、**Agora プロジェクト** で Console 上の **Enable Conversational AI** スイッチがオンになっていること、および後続の呼び出しに必要な **App ID / App Certificate / RTC Token** を準備できていることを確認します。この手順をスキップすると、デバイスは RTC チャンネルへの参加自体は成功しても、Conversational AI Engine の対話パイプラインを起動できない場合があります。

### 必要なもの

- **Agora アカウント**
- **Agora プロジェクト**（推奨：**Secured mode: APP ID + Token (Recommended)** で作成）
- プロジェクト情報：
  - **App ID**
  - **App Certificate**（サーバー側トークン生成用）
  - **RTC Token（テンポラリまたはサーバー生成）**（RTC 参加テスト用）

### 1) Agora にサインアップ / ログインする（概要）

- メール/電話番号での登録およびサードパーティログインに対応しています。
- 登録後、**Agora Console** にログインすると、通常はプロジェクト作成画面に誘導されます。

### 2) Agora プロジェクトを作成する（概要）

Agora Console の **Projects** ページで：

1. **Create New** をクリック
2. プロジェクト名 / Use case を入力
3. Authentication method: **APP ID + Token**（推奨）
4. 送信して作成

![Create project](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip Why is Token mode recommended?
本番環境でより安全であり、Conversational AI / RTC 連携における公式推奨の認証フローとも整合します。
:::

### 3) App ID を取得する

**Projects** リストで対象プロジェクトを探し、**App ID** をコピーします。
![Get App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )

### 4) App Certificate を取得する（サーバー側トークン生成用）

1. **Projects** リストで、対象プロジェクト右側の ✏️（編集/設定）アイコンをクリックします。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. プロジェクト設定ページで、**Primary Certificate** セクションから **App Certificate** をコピーします。
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )

:::caution Important
App Certificate は機密情報です。パブリックリポジトリにコミットしたり、公開ログに出力したりしないでください。
:::

### 5) RTC Token を生成する（クイックテスト用）

一般的な方法は 2 つあります：

- **Console で一時トークン（Temp Token）を生成する**
  1. プロジェクト設定ページへ移動
  2. Security パネルで **Generate Temp Token** をクリック
  3. Channel name を入力 → Generate → Token をコピー

- **Agora Token Builder（Web）を使用する**
  - App ID / App Certificate、channel name、UID などを入力して Token を生成します（サーバー側トークン生成を実装する前のクイック検証に便利です）

### 6) Enable Conversational AI をオンにする（重要）

Conversational AI Engine を使用する前に、対象アプリについて Console 上で有効化する必要があります。

1. **Projects** に移動し、対象プロジェクトを見つけて ✏️ をクリックし、設定画面に入ります。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. **All features** で **Conversational AI > Configurations** を探します。
3. **Enable Conversational AI** トグルをオンにします。
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip Old vs. new Console
旧 UI が表示されている場合は、まず新しい Console に切り替えてください（通常、「Switch to the new version」などの入口がページ上にあります）。
:::



## ファームウェアとハードウェアに関する注意

### 主要なピンマッピング（reSpeaker XVF3800 + XIAO ESP32-S3）

| インターフェース | 機能 | ESP32-S3 ピン |
|------|------|---------------|
| **I2C** | コーデック制御 + ボタン | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | オーディオデータ | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **電源** | 電源/フラッシュ | USB-C（XIAO ESP32-S3） |

:::caution 重要
デフォルトの ESP-ADF ボード設定は通常 Korvo-2-V3 用に用意されています。そのピンマッピングは XVF3800 とは異なります。このガイドに従って設定しない場合、**I2C 上で codec が検出されない / I2S で音声が出ない** といった一般的な症状が発生します。
:::


## ESP32 へのデプロイ

### このリポジトリをクローンする
```bash
git clone https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main/esp32-respeaker
```

### 開発環境のセットアップ

#### ステップ 1：ESP-IDF v5.2.3 をインストール

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

cd esp-idf
./install.sh esp32s3

# (Recommended) Create an environment load alias (write into ~/.bashrc or ~/.zshrc)
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

#### ステップ 2：ESP-ADF v2.7 をインストール

```bash
cd ~/esp
git clone -b v2.7 --recursive https://github.com/espressif/esp-adf.git

export ADF_PATH=~/esp/esp-adf
echo 'export ADF_PATH=~/esp/esp-adf' >> ~/.bashrc  # or ~/.zshrc
```

#### ステップ 3：IDF パッチを適用（ESP-ADF に必須）

```bash
cd ~/esp/esp-idf
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```


### Agora IoT SDK をダウンロード

Agora IoT SDK をプロジェクトの `components/` ディレクトリに展開します（プロジェクトルートを例とします）:

```bash
cd /path/to/esp32-client-Respeaker-convo/components

wget https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar
tar -xvf agora_iot_sdk.tar
```

展開後、ディレクトリ構造は次のようになります:

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

### ESP-ADF ボードピンの設定（重要）

このプロジェクトは ESP-ADF Korvo-2-V3 ボードをベースとして使用しますが、そのピンマッピングを XVF3800 用の設定に置き換える必要があります。

**方法 A（推奨）: board_pins_config.c を直接上書きする**

```bash
cp board_configs/board_pins_config_respeaker.c    $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

**反映されたことを確認する:**

```bash
grep "TAG =" $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

期待される出力には次のような内容が含まれます:

```c
static const char *TAG = "RESPEAKER_XVF3800";
```

:::tip なぜこれを変更するのか？
codec（AIC3104）の制御および I2S のキャプチャ/再生は、正しい I2C/I2S ピンマッピングに依存しているためです。ピンが間違っていると、**I2C timeout / 0x18 を検出できない / 音が出ない** などの問題が発生します。
:::


### プロジェクトパラメータの設定

`main/app_config.h` を編集し、以下を設定します:

#### 1) WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2) Agora アカウント情報

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3) RTC チャンネルと UID

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // Optional: tokens recommended in production
#define CONVO_AGENT_RTC_UID      1001
#define CONVO_REMOTE_RTC_UID     1000
```

#### 4) LLM 設定（例: OpenAI / Azure OpenAI）

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

#### 5) TTS 設定（例: Azure TTS）

```c
#define TTS_VENDOR               "azure"
#define TTS_API_KEY              "your-azure-speech-key"
#define TTS_REGION               "tts-region"
#define TTS_VOICE_NAME           "en-US-JennyNeural"
```

#### 6) ASR 設定

```c
#define ASR_LANGUAGE             "en-US"
```


### ビルドとフラッシュ

#### ステップ 1：ESP-IDF 環境を読み込む

```bash
get_idf
# or
. $HOME/esp/esp-idf/export.sh
```

#### ステップ 2：プロジェクトディレクトリに入り、ターゲットを設定

```bash
cd /path/to/esp32-client-Respeaker-convo
idf.py set-target esp32s3
```

#### ステップ 3：ビルド

```bash
idf.py build
```

#### ステップ 4：フラッシュとモニタ

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Linux のシリアル権限
「permission denied」と表示された場合は、次を実行します:
```bash
sudo usermod -aG dialout $USER
# Then log out and log back in
```
:::



## 検証とテスト

### 起動ログのチェックポイント

起動が成功すると、シリアルログには通常次の内容が含まれます:

- WiFi に接続され、IP を取得している
- AIC3104 が検出されている（I2C アドレスは通常 `0x18`）
- オーディオパイプラインが正常に開始されている
- Agora RTC に正常に参加（または待機状態）している

例（参考用）:

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### 会話を開始する（ボタン操作）

1. 電源を入れ、デバイスの準備が完了するまで待ちます  
2. **SET ボタンを 1 回押す**: 会話を開始/参加します（エージェントが RTC チャンネルに参加）  
3. マイクに向かって話しかけ、スピーカーから AI の応答が再生されるのを待ちます  
4. 会話を終了するには **SET** を再度押す（または **MUTE** を押す）  


## FAQ

### Q1: I2C timeout / AIC3104 (0x18) が見つからない

**考えられる原因:**
- このガイドで説明しているように ESP-ADF の `board_pins_config.c` が置き換えられていない
- I2C ピンマッピングが誤っている（SDA=GPIO5, SCL=GPIO6 である必要があります）
- ハードウェア接続の問題（XIAO と XVF3800 が正しく接続されていない）

**推奨される確認事項:**
- 「ESP-ADF ボードピンの設定」の手順をやり直し、その後 `idf.py fullclean` を実行して再ビルドする
- 起動ログで `0x18` を検出できているか確認する

### Q2: 録音/アップリンクは動作するが、スピーカー出力がない

**よくある原因:**
- I2S DIN/DOUT の方向設定が誤っている（DIN=GPIO43, DOUT=GPIO44）
- スピーカーが 3.5mm ジャックに接続されていない、または音量が小さすぎる
- AEC/オーディオパイプラインが正しく開始されていない

### Q3: ビルドエラーや依存関係の不足

**提案:**
- ESP-IDF / ESP-ADF のバージョンがこのガイドと一致していることを確認する
- サブモジュールを再初期化する（プロジェクトがサブモジュールを使用している場合）:
  ```bash
  git submodule update --init --recursive
  ```
- フルクリーンを実行する:
  ```bash
  idf.py fullclean
  ```



## 参考資料

- Agora Console（App ID / API Key）
- Agora RTC ドキュメントおよび IoT SDK ドキュメント
- ESP-IDF v5.2.3 ドキュメント
- ESP-ADF v2.7 ドキュメント
- reSpeaker XVF3800 の紹介およびファームウェア更新ガイド
- [ESP32 Conversational AI Clients](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、できるだけスムーズにご利用いただけるよう、さまざまな形態のサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
