---
description: ESP32S3 + reSpeaker を使用してクラウド AI Xiaozhi 音声アシスタントを構築する
title: ESP32S3 + reSpeaker を使用してクラウド AI Xiaozhi 音声アシスタントをデプロイする
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /ja/respeaker_xvf_3800_xiaozhi
sku: 114993702,114993700
last_update:
  date: 1/29/2026
  author: Mingxi
---


> 目標：ESP32S3 を reSpeaker XVF3800 と連携させ、クラウド大規模モデルを活用した Xiaozhi アシスタントを実行する。
> プロジェクトソース：https://github.com/Seeed-Projects/Xiaozhi_Esp32S3_reSpeaker
> Seeed-Projects：https://github.com/Seeed-Projects

reSpeaker XVF3800 は、XMOS XVF3800 チップをベースとした専門的な 4 マイク円形アレイです。デュアルモード、360° 遠距離集音（最大 5m）、音響エコーキャンセレーション（AEC）、自動ゲイン制御（AGC）、到来方向（DoA）、残響除去、ビームフォーミング、ノイズ抑制などの機能により、ノイズの多い環境でも信頼性の高い音声収集を提供します。その堅牢な収集とノイズ除去能力により、Xiaozhi はより優れた「耳」を得ることができます。

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## パート 1：reSpeaker ハードウェアファームウェアの準備

このセクションは reSpeaker XVF3800 ハードウェア自体を対象としています。デフォルトの USB ファームウェアは I2S 出力をサポートしていないため、XIAO ESP32S3 などのホストで使用するには専用の I2S ファームウェアをフラッシュする必要があります。

> 注意：I2S ファームウェアは I2C DFU を使用します（USB DFU ではありません）。デバイスが既に I2S ファームウェアを持っているが異常な動作をする場合は、まず「セーフモード」に入ってから USB DFU を使用してファームウェアを復旧または切り替えてください。セーフモードは USB DFU と I2C DFU の両方をサポートします。
> 公式リファレンスを参照：
> - [reSpeaker XVF3800 入門ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_xiao_getting_started/)
> - [reSpeaker XVF3800 ファームウェアリポジトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
> - [reSpeaker コードリポジトリ](https://github.com/respeaker)

### 1.1 準備

#### ハードウェア

- reSpeaker XVF3800 USB 4-Mic Array
- USB Type-C データケーブル（電源 + データ）
- コンピュータ：Windows / macOS / Linux
- XIAO ESP32S3 と統合する場合は、I2S / I2C / 電源接続の適切なはんだ付けを確認してください

#### ソフトウェア（dfu-util のインストール）

Windows：

1. `dfu-util` バイナリをダウンロードして解凍します（例：`D:\dfu-util-0.11-binaries\win64\`）。
2. `dfu-util.exe` を含むディレクトリを PATH に追加します。
3. `dfu-util -V` で確認します。
4. `dfu-util -l` が `LIBUSB_ERROR_NOT_SUPPORTED` を返す場合は、Zadig を使用してデバイスドライバを WinUSB に置き換えてください。

macOS（Homebrew）：

```bash
brew install dfu-util
dfu-util -l
```

Linux（Debian / Ubuntu / Raspberry Pi OS）：

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### I2S ファームウェアのダウンロード

- ファームウェアリポジトリにアクセス：https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares
- `i2s` で始まる名前の `.bin` ファイルをダウンロードします（例：`respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin`）。

### 1.2 接続と DFU モードへの移行

#### 配線に関する注意

- コンピュータに接続する際は、3.5mm ヘッドフォンジャック近くの USB-C ポート（XMOS 側）を使用してください。XIAO 側のポートは使用しないでください。

#### セーフモードに入る（推奨）

次の場合に使用：現在のファームウェアが I2S だが USB に変更したい場合、ファームウェアが破損している場合、または間違ったファームウェアがフラッシュされた場合。

1. 電源を完全に取り外します。
2. オンボードの "Mute" ボタンを押し続けます。
3. ボタンを押し続けながら、電源を再接続します。
4. 赤色 LED が点滅し始めたらボタンを離します — デバイスはセーフモードになります。

### 1.3 dfu-util を使用した I2S ファームウェアのフラッシュ

#### デバイスが認識されることを確認

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l
# macOS / Windows
dfu-util -l
```

期待される出力には `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"` が含まれます。

#### フラッシュコマンド

```bash
# Linux / Raspberry Pi OS (replace path)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
# macOS / Windows (no sudo)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
```

パラメータ：`-R`（リセット/再起動）、`-e`（消去）、`-a 1`（Upgrade alt に書き込み）、`-D`（ファームウェアファイル）。

### 1.4 検証とトラブルシューティング

#### ファームウェアの検証

フラッシュ後、デバイスは自動的に再起動し、I2S ファームウェアがアクティブになります。ESP32S3 を I2S ホストとしてデバイスからオーディオデータを読み取ることで確認できます。

#### FAQ

- Q：`dfu-util -l` でデバイスが表示されない？
  - USB ケーブルとポートを確認してください（XMOS 側のコネクタを使用する必要があります）。
  - デバイスが現在 I2S ファームウェアを実行している場合は、フラッシュ前にセーフモードに入ってください。
  - Windows ユーザー：Zadig 経由で WinUSB ドライバを確認してください。
- Q：フラッシュ中にエラーが発生？
  - 別の USB ケーブルまたはホストポートを試し、セーフモードで再試行してください。
- Q：フラッシュ後にオーディオが出ない？
  - I2S ホスト設定（サンプルレート、チャンネル）がファームウェア設定と一致することを確認してください。

---

## パート 2：Xiaozhi ソフトウェア適応変更

このセクションでは、Xiaozhi プロジェクトが reSpeaker XVF3800 をサポートするためのコード変更について説明します。

### 2.1 変更の概要

主要な変更：

1. I2C マスターを一元管理し、競合を回避するための共有 I2C バスラッパーを追加。
2. 起動時のハードウェアプローブを追加：アプリケーション開始前に I2C 経由で XVF3800 をプローブ。
3. ボードレベル設定の分離：ピンとアドレスに `config.h` マクロを使用してポーティングを容易に。
4. ビルド更新：新しい BSP ソースファイルをビルドに含める。

### 2.2 主要なコード変更箇所

A. 新規：共有 I2C バス

- ファイル：`main/shared_i2c_bus.h` / `main/shared_i2c_bus.c`
- 目的：デフォルトで内部プルアップを有効にした ESP-IDF I2C マスター API を使用する `shared_i2c_master_bus_get()` を提供。

B. 新規：reSpeaker オーディオハードウェア初期化

- ファイル：`main/audio_bsp.c`
- 関数：`audio_hardware_init()`
- ロジック：共有 I2C バスを取得し、`i2c_master_probe()` を呼び出して `XVF3800_I2C_ADDR`（0x2C）を検出し、プローブログを出力。

C. 変更：起動順序

- ファイル：`main/main.cc`
- 変更：`Application::GetInstance().Start()` の前に `audio_hardware_init()` を呼び出し。

D. 変更：ビルドとボード設定

- `CMakeLists.txt`：ビルドソースに `audio_bsp.c` と `shared_i2c_bus.c` を追加。
- `boards/xiao-esp32s3-sense/config.h`：
  - `I2C_SDA_PIN`（5）、`I2C_SCL_PIN`（6）を追加。
  - `XVF3800_I2C_ADDR`（0x2C）を追加。
  - 完全な I2S ピンとビット幅設定。

---

## パート 3：ビルド、フラッシュ、デプロイ

このセクションでは、適応されたファームウェアのコンパイルと ESP32S3 へのフラッシュについて説明します。

### 3.1 ハードウェア接続の確認

ESP32S3 と reSpeaker XVF3800 間の接続を確認：

- I2S オーディオラインが正しく接続されている。
- I2C 制御ラインが接続されている：ESP32S3 GPIO5（SDA）/ GPIO6（SCL）から XVF3800 へ。

### 3.2 ビルドターゲットの選択

```bash
idf.py set-target esp32s3
```

### 3.3 Menuconfig

```bash
idf.py menuconfig
```

必要な調整：

1. ボードを選択：`Xiaozhi Assistant -> Board Type -> Seeed Studio XIAO ESP32S3 Sense`。
2. ピン競合を回避：I2S が GPIO43/44 を使用する場合、コンソール出力を USB に切り替え：
   `Component config -> ESP System Settings -> Channel for console output -> USB Serial/JTAG`。
3. フラッシュ設定：
   `Serial flasher config -> Flash size -> 8 MB` および
   `Partition Table -> Custom partition CSV file -> partitions/v1/8m.csv`。

### 3.4 ビルドとフラッシュ

```bash
idf.py build
idf.py flash
```

### 3.5 ログの監視と検証

```bash
idf.py monitor
```

---

## パート 4：ネットワーク設定とアクティベーション

フラッシュ後、デバイスは AI 会話機能を使用するためにネットワーク設定とクラウドバインディングが必要です。

### 4.1 デバイスホットスポットへの接続

1. スマートフォンで `Xiaozhi-XXXXXX` という名前の Wi-Fi SSID を見つけます。
2. ブラウザを開いて `http://192.168.4.1` にアクセスします。

### 4.2 Wi-Fi の設定

1. キャプティブポータルでネットワークスキャンを約 5 秒待ちます。
2. 2.4GHz Wi-Fi を選択します（iPhone ホットスポット：「最大互換性」を有効にしてください）。
3. パスワードを入力して "Connect" をクリックします。
4. "Login successful" の後、デバイスは約 3 秒で再起動します。
  ![configure-wifi](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/wifilist.png)

### 4.3 管理バックエンドへのデバイス追加

1. デバイス ID を取得：デバイスがオンラインになった後、「Hello Xiaozhi」と言ってウェイクし、6 桁の認証コードを聞きます。
2. https://xiaozhi.me にアクセスしてサインアップ/サインインします。
3. "Agents" またはデバイス管理セクションで「デバイスを追加」を選択し、6 桁のデバイス ID を入力して送信します。
  ![login-success-2](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/workbench.png)
  ![history-dialogs](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/history_talk.png)


完了すると、reSpeaker–Xiaozhi デバイスが準備完了し、動作可能になります。
そして、設定で出力言語をお好みに変更することをお忘れなく！
![language](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/xiaozhi_language.png)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




