---
description: reSpeaker XVF3800 + XIAO ESP32-S3 上に Muse Gadget を構築します — XMOS I2S ファームウェアを書き込み、ESP-IDF でビルドし、BLE でペアリングして、音声メモをクラウド上の Muse VM にストリーミングします。
title: reSpeaker XVF3800 上の Muse Gadget
keywords:
  - reSpeaker
  - XIAO ESP32-S3
  - Muse
  - 音声アシスタント
  - BLE
  - ESP-IDF
  - TTS
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_muse_gadget
last_update:
  date: 11/09/2026
  author: Kasun Thushara
createdAt: '2026-11-09'
updatedAt: '2026-11-09'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf3800_muse_gadget/
---

## はじめに

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/WEcYu1k428E"
          title="Muse Gadget on reSpeaker XVF3800"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

このプロジェクトでは、**reSpeaker XVF3800** 4 マイクアレイと **XIAO ESP32-S3** を **Muse Gadget** に変身させます。ガジェットは BLE で Muse スマホアプリとペアリングし、あなたの Wi-Fi ネットワークに参加し、クラウド上の Muse VM への暗号化された Noise セッションを維持します。

- ボタンを**長押し**：音声メモを録音します。Muse が文字起こしして返信し、その返信はアプリに表示され、スピーカーから TTS で読み上げられます。
- **タップ**（1 秒未満）：ライブ音声通話を開始します（`MUSE_REALTIME_VOICE` がオンの場合）。
- もう一度**タップ**：通話を終了します。

概要として、データパスは次のようになります：

```text
XIAO ESP32-S3 ──BLE──> Muse app (pairing)
      │
      └──Wi-Fi──> encrypted Noise session ──> Muse VM
                        │
                        ├── /link-control : device.health, voice.configure, …
                        └── /chat/stream  : voice note → transcript → reply
```

XIAO は **I2S マスター**であり、XVF3800 は **I2S スレーブ 16 kHz** ファームウェアを実行し、自身の 12 個の LED リングとアンプを制御します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32-S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>



## 必要なもの

- [ ] Muse の **SDK トークン**（`mgst_…`）
- [ ] オプション：音声返信用の **AssemblyAI** キー
- [ ] スマホにインストールされた **Muse アプリ**（開発者モードをオン）
- [ ] **ESP-IDF v6.0.3** がインストールされていること
- [ ] **I2S スレーブ 16 kHz** ファームウェアが書き込まれた XVF3800
- [ ] JST **5 W** スピーカー（または 3.5 mm ヘッドホン）
- [ ] 2.4 GHz Wi-Fi の認証情報
- [ ] USB-C **データ**ケーブル

## アカウントと API キー

| キー / 認証情報 | 必須か？ | 入手先 | 設定場所 |
|---|---|---|---|
| **Muse SDK トークン**（`mgst_…`, 48 文字） | **必須** | [gadgets.muse.ai](https://gadgets.muse.ai/settings/sdk-tokens) | ビルド時の `sdkconfig` 内の `CONFIG_GADGET_SDK_TOKEN` |
| **AssemblyAI キー**（32 文字） | オプション — 音声返信用 | [assemblyai.com](https://www.assemblyai.com/dashboard) | ビルド時の `sdkconfig` 内の `CONFIG_MUSE_TTS_API_KEY` |
| **Groq キー**（`gsk_…`） | 代替 TTS | [console.groq.com](https://console.groq.com/keys) | 同じ場所（Groq の URL/モデルを指定） |
| **Wi-Fi SSID + パスワード** | 必須 | あなたの 2.4 GHz ネットワーク / ホットスポット | ペアリング中の Muse アプリ |




### TTS プロバイダ設定

デフォルトのプロバイダは AssemblyAI です：

```ini
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_TIMEOUT_MS=15000
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

Groq（Orpheus、入力 200 文字の制限あり）は代替オプションです：

```ini
CONFIG_MUSE_TTS_URL="https://api.groq.com/openai/v1/audio/speech"
CONFIG_MUSE_TTS_MODEL="canopylabs/orpheus-v1-english"
CONFIG_MUSE_TTS_VOICE="hannah"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="wav"
CONFIG_MUSE_TTS_MAX_CHARS=200
CONFIG_MUSE_TTS_API_KEY="gsk_..."
```

スマホアプリには **TTS プロバイダ設定はありません**。TTS は完全にファームウェア側で処理されます。

## スマホアプリのセットアップ

- Android または iOS に **Muse** アプリ（Meta）をインストールします。
- Muse アカウントでサインインします。
- **Settings → Devices → Developer mode** をオンにします。
- Muse は **米国とカナダ**でローンチされています。ペアリングと返信テキストの表示には、このアカウント / アプリが必要です。
- アプリは返信を **テキスト**として表示し、TTS が設定されていればガジェットがそれを読み上げます。


### オプションの外部ボタン（Grove Button）

[Grove Button](https://www.seeedstudio.com/Grove-Button.html) を追加してプッシュ・トゥ・トークにすることができます：**VCC → D3, SIG → D0, GND → GND**。

| Grove Button | XIAO | GPIO |
|---|---|---|
| GND | GND | — |
| VCC | **D3** | 4（High 出力） |
| SIG | **D0** | 1（入力、アクティブ High） |
| NC | — | — |

ファームウェア設定はすでにオーバーレイに含まれています：

```ini
CONFIG_HOMEHUB_BUTTON_GPIO=1
CONFIG_HOMEHUB_BUTTON_POWER_GPIO=4
CONFIG_HOMEHUB_BUTTON_ACTIVE_HIGH=y
CONFIG_HOMEHUB_BUTTON_LABEL="TALK"
```

Grove Button は **アクティブ High** です。ファームウェアは GPIO4 を High にして電源を供給し、GPIO1 をプルダウン付きで読み取ります。

## XMOS I2S ファームウェアを書き込む

XIAO は **I2S マスター**なので、XVF3800 は **I2S スレーブ 16 kHz** ファームウェアを実行している必要があります。USB ファームウェアは XIAO では**動作しません**。

公式のファームウェア更新ガイドに従って、`respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin` イメージを書き込みます：

- [reSpeaker XVF3800 firmware update](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#usb-firmware)

> **`respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin`**（I2S スレーブ、16 kHz）を選択してください — デフォルトの USB ファームウェアではありません。

### 検証

Muse ファームウェアは次のようにログを出力します：

```text
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
```

または次を実行します：

```sh
xvf_host VERSION
```

## プロジェクトをクローンする

メンテナンスされているフォークをクローンします。これは upstream の SDK をベースとしており、すでに XVF3800 ポートと TTS 統合が含まれています：

```sh
git clone https://github.com/KasunThushara/muse-gadget-sdk.git
cd muse-gadget-sdk
```

> `seeed-respeaker-xvf3800` ポートは `facebookincubator/muse-gadget-sdk` の **upstream には含まれていません**。代わりに upstream を使う場合は、以下の追加を自分で適用する必要があります。

フォークによって追加されたファイル：

```text
esp32/devices/sdkconfig.seeed-respeaker-xvf3800
esp32/main/voice_board_xvf3800.c
esp32/main/xvf3800.c
esp32/main/xvf3800.h
```

フォークによって変更されたファイル：

```text
esp32/main/Kconfig.projbuild      (HOMEHUB_LED_BACKEND_XVF3800, button options)
esp32/main/CMakeLists.txt         (xvf3800.c, voice_board_xvf3800.c)
esp32/main/led_status.c           (XVF3800 ring over I2C)
esp32/main/button.c               (active-high button, optional power GPIO)
esp32/main/voice.c                (tap-vs-hold measurement)
esp32/tools/board.sh              (seeed-respeaker-xvf3800 case)
esp32/components/muse/Kconfig     (MUSE_TTS_*)
esp32/components/muse/muse_chat_session.cpp  (start_tts / WAV / MP3)
```

## ファームウェアをビルドする

### ESP-IDF v6.0.3 をインストール

`esp32/cmake/validate_config.cmake` は **ESP-IDF v6.0.3** を要求します：

```sh
git clone -b v6.0.3 --recursive https://github.com/espressif/esp-idf.git ~/esp/esp-idf-v6.0.3
~/esp/esp-idf-v6.0.3/install.sh esp32s3
. ~/esp/esp-idf-v6.0.3/export.sh
```

また、**Git**、**Python 3**、**USB-C データケーブル**も必要です。Windows では、XIAO のコンソールはネイティブ USB（`303a:1001`）で、`COMx` として認識されます。`tools/board.sh` は bash なので、**Git Bash** で実行するか、`idf.py` を直接呼び出してください。

### キーを設定する

```sh
cd esp32
idf.py -B build-seeed-respeaker-xvf3800 menuconfig
```

**ESP32 Device SDK** の下で設定します：

- **Muse Gadgets SDK トークン** → `mgst_…`
- TTS オプション（**Muse** メニュー内）→ プロバイダ、URL、モデル、ボイス、API キー

または `build-seeed-respeaker-xvf3800/sdkconfig` を直接編集します：

```ini
CONFIG_GADGET_SDK_TOKEN="mgst_…"
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

> 生成された `build-*/sdkconfig` はオーバーレイを上書きします。`devices/sdkconfig.seeed-respeaker-xvf3800` を変更した後は、生成された `sdkconfig` を更新するか削除してください。

### コンパイル

```sh
tools/board.sh seeed-respeaker-xvf3800 build
```

または直接：

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  build
```

イメージは次の場所に生成されます：

```text
esp32/build-seeed-respeaker-xvf3800/muse-gadget.bin
```

## ファームウェアを書き込む

```sh
tools/board.sh seeed-respeaker-xvf3800 flash COM10
```

または直接：

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  -p COM10 flash
```

- `COM10` を XIAO のポートに置き換えます（macOS では `ls /dev/cu.usbmodem*`、Linux では `/dev/ttyACM*`）。
- フラッシュが接続できない場合：**BOOT** を押し続け、**RESET** をタップし、**BOOT** を離してから再試行します。
- ポートを占有しているシリアルモニタを閉じます。
- 再フラッシュしてもペアリング / Wi-Fi は保持されます。`erase-flash` は NVS とペアリングを含め、すべてを消去します。

## ペアリングとテスト

1. Muse アプリ → **Settings → Devices → Developer mode ON**。
2. **Add Device (+)** → `MuseGadget-respeaker-XXXXXX` を選択。
3. 確認のためにボタン（または Grove Button）を**押します**。
4. **2.4 GHz** の Wi-Fi を選択し、パスワードを入力します。
5. **緑のリング**が点灯するまで待ちます。
6. ボタンを**長押し**して話し、離します：
   - `link.voice: recorded X.Xs`
   - `muse_chat_session: TTS: N chars`
   - `link.voice: reply: X.Xs of speech`
   - 返信はスピーカーから読み上げられ、アプリにも表示されます。
7. **音量：** Muse に依頼します（「音量を 80 にして」など）または `voice.configure` を使用します。
8. **ミュート：** XVF3800 の Mute ボタンを使用します。ミュート中もボタンはセットアップ用の役割を維持します。
9. **セットアップのリセット：** ボタンを **5 秒間**押し続けると、ペアリング / Wi-Fi を消去します。



役立つログ行：

```text
link.xvf3800: AIC3104 outputs powered (DAC 0 dB, HP + line out)
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
link.xvf3800: reSpeaker XVF3800 audio ready
link.voice:   ready
link.ble:     advertising as MuseGadget-respeaker-XXXXXX
muse_chat_session: connected to VM …
muse_chat_session: TTS: N chars
muse_chat_session: reply audio: 16000 Hz, 1 ch, 64 kbps
link.xvf3800: amp on: X0D30=0 X0D31=0 X0D33=1
```

## セキュリティに関する注意事項

- SDK トークンはファームウェア（または NVS）内に同梱されています。これはパスワードではなく識別子として扱ってください。漏えいした場合は `gadgets.muse.ai` で失効／ローテーションしてください。
- TTS キーは `esp32/build-*/sdkconfig` に保存されており、gitignore に設定されています。コミットしないでください。
- コミュニティペアリングにはメーカー認証がなく、アクティブな MITM を防ぐことはできません。信頼できるネットワーク上でセットアップしてください。
- セキュアブートとフラッシュ暗号化は **オフ** のままです。アプリはコミット済みの開発用キーで署名されているため、自由に再フラッシュできます。
- NVS 暗号化（`CONFIG_HOMEHUB_NVS_ENCRYPTION`）を推奨します。これは eFuse HMAC キーから自動的に導出されます。認証情報を保存する前に有効にするかどうかを決めてください。
- セキュアブートがない場合は `CONFIG_HOMEHUB_PAIRING_EFUSE_AUTH` を有効にしないでください。

## リソース

- このプロジェクト（XVF3800 ポートを含むフォーク）：[KasunThushara/muse-gadget-sdk](https://github.com/KasunThushara/muse-gadget-sdk)
- Muse Gadget SDK（アップストリーム）：[facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk)
- Seeed reSpeaker XVF3800 + XIAO：[入門ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_xiao_getting_started/)
- XMOS ファームウェア更新：[ファームウェア更新ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#ファームウェアを更新)
- I2S 再生／録音：[録音と再生](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_xiao_record_playback/)
- I2C コマンド一覧：[I2C コマンド一覧](https://wiki.seeedstudio.com/ja/respeaker_xvf_3800_i2c_list/)
- GPIO/GPI 制御：[GPIO 制御](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_xiao_gpio/)
- ベンダー提供ファームウェアリポジトリ：[reSpeaker_XVF3800_USB_4MIC_ARRAY](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)
- AssemblyAI TTS：[AssemblyAI TTS API](https://www.assemblyai.com/docs/tts/api-reference/http-api/create-speech-openai)
- Groq TTS：[Groq text-to-speech](https://console.groq.com/docs/text-to-speech)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
