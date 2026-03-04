---
description: reSpeaker + HorizonArm-Mark で音声制御スマートロボットアームを構築
title: reSpeaker + HorizonArm-Mark による音声制御スマートロボットアームの展開
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_arm
sku: 114993702,114993700
last_update:
  date: 2/6/2026
  author: Mingxi
---


> **目標**: HorizonArm-Mark ロボットアームを reSpeaker XVF3800 と連携させ、音声制御によるロボットアーム操作を実現する。
> 
> **Seeed-Projects**: https://github.com/Seeed-Projects

reSpeaker XVF3800 は、XMOS XVF3800 チップをベースとしたプロフェッショナル 4 マイク円形アレイです。デュアルモード、360° 遠距離集音（最大 5 メートル）、音響エコーキャンセレーション（AEC）、自動ゲイン制御（AGC）、到来方向推定（DoA）、残響除去、ビームフォーミング、ノイズ抑制機能を備え、騒音環境での信頼性の高い音声集音を提供します。強力な音声キャプチャとノイズ低減機能により、音声制御アプリケーションに優れた「耳」を提供します。

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## パート 1: reSpeaker ハードウェアとファームウェアの準備

このセクションでは、reSpeaker XVF3800 の USB ファームウェアをフラッシュする方法を説明します。USB ファームウェアはプラグアンドプレイモードをサポートし、PC、Raspberry Pi、その他のデバイスに直接接続できます。
USB ファームウェアは USB DFU のみをサポートします（I2C DFU はサポートしません）。デバイスが現在 I2S ファームウェアを実行している場合は、まず **Safe Mode** に入り、その後 USB DFU を使用して USB ファームウェアをフラッシュしてください。Safe Mode は USB DFU と I2C DFU の両方をサポートします。

**参考リソース**:
- [reSpeaker XVF3800 入門ガイド](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)
- [reSpeaker XVF3800 ファームウェアリポジトリ](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
- [reSpeaker コードリポジトリ](https://github.com/respeaker)

### 1.1 準備

#### ハードウェア要件

| 項目 | 説明 |
|------|------|
| reSpeaker XVF3800 USB 4-Mic Array | メインコントローラーマイクアレイ |
| USB Type-C ケーブル | 電源とデータ伝送に使用 |
| コンピュータ | Windows / macOS / Linux 対応 |

#### ソフトウェア準備（dfu-util のインストール）

**Windows**:

1. `dfu-util` バイナリをダウンロードして展開（例：`D:\dfu-util-0.11-binaries\win64\`）
2. `dfu-util.exe` を含むディレクトリをシステム PATH に追加
3. コマンドプロンプトを開き、`dfu-util -V` を実行してインストールを確認
4. `dfu-util -l` が `LIBUSB_ERROR_NOT_SUPPORTED` を返す場合は、Zadig を使用してデバイスドライバを WinUSB に置き換えてください

**macOS (Homebrew)**:

```bash
brew install dfu-util
dfu-util -l
```

**Linux (Debian / Ubuntu / Raspberry Pi OS)**:

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### USB ファームウェアのダウンロード

ファームウェアリポジトリにアクセス: https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares

ニーズに応じて以下の USB ファームウェアの一つを選択してください（通常は 2 チャンネル版で十分です）:

| ファームウェア | チャンネル | 説明 |
|------|--------|------|
| `respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin` | 2 | 処理済みデュアルチャンネル出力<br />チャンネル 0: Conference<br />チャンネル 1: ASR |
| `respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin` | 6 | チャンネル 0: 処理済み音声（Conference）<br />チャンネル 1: 処理済み音声（ASR）<br />チャンネル 2-5: マイク 0-3 の生データ |

### 1.2 接続と DFU モードへの移行

#### 配線手順

コンピュータに接続する際は、**3.5mm ヘッドフォンジャック近くの USB-C ポート**（XMOS 側）を使用してください。XIAO 側のポートは使用しないでください。

#### Safe Mode への移行

Safe Mode は以下の状況で必要です:
- 現在のファームウェアが I2S モードで、USB モードに切り替える必要がある場合
- ファームウェアが破損している、または間違ったファームウェアがフラッシュされた場合

**操作手順**:

1. デバイスの電源を完全に切断
2. オンボードの **Mute** ボタンを押し続ける
3. ボタンを押したまま、電源を再接続
4. 赤色 LED が点滅し始めたらボタンを離す — デバイスが Safe Mode に入りました

### 1.3 dfu-util を使用した USB ファームウェアのフラッシュ

#### デバイスの認識確認

以下のコマンドを実行してデバイスが認識されているかを確認:

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l

# macOS / Windows
dfu-util -l
```

期待される出力には以下が含まれるはずです: `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`

#### フラッシュコマンドの実行

```bash
# Linux / Raspberry Pi OS (needs sudo)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin

# macOS / Windows (no sudo needed)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin
```

**パラメータ説明**:
- `-R`: フラッシュ完了後にデバイスをリセット/再起動
- `-e`: 元のファームウェアを消去
- `-a 1`: Upgrade パーティションに書き込み
- `-D`: ファームウェアファイルのパスを指定

フラッシュが完了すると、デバイスは自動的に再起動し、USB ファームウェアを読み込みます。

### 1.4 検証とトラブルシューティング

#### ファームウェアの検証

USB ファームウェアをフラッシュした後、以下の方法で検証できます:

1. **デバイスマネージャーでの検出**
   - **Windows**: デバイスマネージャーを開き、「サウンド、ビデオ、およびゲーム コントローラー」の下に「reSpeaker 3800」が表示されるはずです
   - **macOS/Linux**: `lsusb` コマンドを実行して、デバイスが USB オーディオデバイスとして認識されているかを確認

   ![usbset](https://files.seeedstudio.com/wiki/reSpeaker-arm/respeaker_usb.png)

2. **録音テスト**
   - Audacity またはその他の録音ソフトウェアを使用
   - 録音デバイスとして「reSpeaker 3800」を選択
   - サンプルレートを 16000 Hz に設定し、チャンネル数をフラッシュしたファームウェアに応じて設定（2 または 6 チャンネル）
   - 録音を開始して音声キャプチャをテスト

#### よくある質問

**Q: `dfu-util -l` でデバイスを検出できない？**
- USB ケーブルとポートを確認（XMOS 側のコネクタ、3.5mm ヘッドフォンジャック近くの USB-C ポートを使用する必要があります）
- デバイスが現在 I2S ファームウェアを実行している場合は、まず Safe Mode に入ってください
- Windows ユーザー: Zadig を使用して WinUSB ドライバが使用されていることを確認

**Q: フラッシュ中にエラーが発生？**
- USB ケーブルまたはホストポートを変更してみてください
- Safe Mode で再フラッシュしてください

**Q: フラッシュ後にコンピュータがデバイスを認識しない？**
- USB ファームウェアファイル（ファイル名が `usb` で始まる）を使用していることを確認し、I2S ファームウェアではないことを確認
- デバイスを再接続するか、USB ポートを変更してみてください

**Q: 録音時に音が出ない、または異常な音？**
- 録音ソフトウェアのサンプルレートが 16000 Hz に設定されているかを確認
- チャンネル数がファームウェアと一致していることを確認（2 または 6 チャンネル）
- マイクがミュートされていないかを確認（赤いミュート LED が点灯しているかを確認し、ミュートボタンを押してミュートを解除）

---

## パート 2: ソフトウェア設定と接続

### 2.1 ハードウェア接続

制御コンピュータがロボットアームとマイクアレイの両方に USB で接続されていることを確認してください。

### 2.2 ロボットアームの接続

1. ロボットアーム制御ソフトウェア HorizonArm を開く
2. 左上の **Connect** ボタンをクリック
3. 対応するシリアルポート（例：COM3）とボーレート（500000）を選択
4. **Motor ID Settings** → **Robotic Arm** → **Custom ID** を選択し、1, 2, 3, 4, 5, 6 が表示されることを確認
5. **Connect** をクリック

![armset](https://files.seeedstudio.com/wiki/reSpeaker-arm/armset.png)

接続が成功すると、HorizonArm インターフェースでロボットアームの状態を確認できます。**Go to Zero** をクリックしてアームを初期位置（90 度直立状態）に戻します。

### 2.3 AI システムの設定

1. **Embodied Intelligence** インターフェースをクリック
2. パラメータを設定:
   - LLM（大規模言語モデル）の API アドレスとキーを入力
   - カメラ ID を選択（通常は 1、一部のモデルでは 0）
3. **Initialize AI System** をクリック
4. **Embodied Drive** インターフェースに入って使用開始

![aiset](https://files.seeedstudio.com/wiki/reSpeaker-arm/aiset.png)

### 2.4 音声制御操作

実行インターフェースに入ると、4 つの制御ボタンが表示されます:

![monitor](https://files.seeedstudio.com/wiki/reSpeaker-arm/monitor.png)

**操作方法**:

| 機能 | 操作手順 |
|------|----------|
| **Execute Command** | テキストボックスにコマンドを入力してボタンをクリックして実行 |
| **Run Dialogue** | 録音機能に似ています:<br />• 最初のクリック: 録音開始<br />• 2 回目のクリック: 録音終了<br />録音は LLM に送信されて処理され、結果がインターフェースに表示され、ロボットアームが指示に基づいてアクションを実行します |
| **Enable Dialogue Mode** | ロボットアームが継続的なリスニング状態に入ります。ウェイクワード **"Mark"** を言った後、続く音声がコマンドとして認識され実行されます |

---

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！スムーズな製品体験を確保するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
