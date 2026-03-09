---
description: Seeed Studio XIAO ESP32-S3 (Sense) 用の MicroPython ベースのリアルタイム GPIO モニター。Thonny を使用してローカル Web インターフェース経由でライブデジタルピン状態（HIGH/LOW/TOUCH）を表示します。
title: Seeed Studio XIAO ESP32-S3 (Sense) GPIO ビューア
keywords:
  - GPIO Viewer
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_10.webp
slug: /XIAO_ESP32S3_GPIO_Viewer
last_update:
  date: 01/06/2026
  author: Utkarsh Bhor Patil, Garla Guo
createdAt: '2026-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/XIAO_ESP32S3_GPIO_Viewer/
---

# XIAO ESP32-S3 (Sense) GPIO ビューア

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_1.png" style={{width:1000, height:'auto'}}/></div>


> [XIAO ESP32-S3 (Sense) GPIO ビューア](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer) は、Seeed Studio XIAO ESP32-S3 (Sense) 用の MicroPython ベースのリアルタイム GPIO モニターです。Thonny を使用してローカル Web インターフェース経由でライブデジタルピン状態（HIGH/LOW/TOUCH）を表示します。

## Web ページに表示される情報
- **GPIO & I/O モニタリング**: リアルタイムデジタル GPIO 状態、ライブ ADC 読み取り値、明確な GPIO ピン番号マッピングを表示します。
- **ランタイム情報**: 現在の CPU 周波数とシステム稼働時間を報告し、リアルタイムの動作状況を反映します。
- **メモリ & ストレージ**: ヒープメモリ使用量、ファイルシステム使用率、フラッシュサイズ、サポートされている場合の PSRAM 可用性を表示します。
- **ネットワーク情報**: IP アドレス、接続された Wi-Fi SSID、信号強度（RSSI）、MAC アドレス、ゲートウェイ、DNS サーバーを含むネットワーク診断を提供します。
- **ファームウェア & システム**: チップモデル、CPU コア数、MicroPython バージョン、ファームウェアビルド情報を識別します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

## 機能
- ライブ GPIO デジタル状態と ADC 読み取り値を表示し、プロトタイピングと開発中の視覚的デバッグを可能にします
- XIAO ESP32-S3 (Sense) 上で完全に動作する軽量組み込み Web サーバーとして動作し、デプロイ後は外部ソフトウェアやクラウドサービスを必要としません
- 同じローカルネットワーク上の任意のデバイスからアクセス可能なブラウザベースのインターフェースを提供し、リアルタイムモニタリングを実現します
- 追加のデバッグツールなしでセンサー入力、リレー、周辺モジュールの検証を簡素化します
- 可読性と迅速な反復のために MicroPython で構築されており、制約のある組み込みシステムに適した最小限のリソース使用量を維持します

## ビルドプロセス
これは MicroPython と Thonny IDE を使用した初心者向けのワークフローで、必要なツールのダウンロードから XIAO ESP32-S3 (Sense) での GPIOViewer プロジェクトの実行まで、最初から段階的に説明します。

### コンピューターの準備
XIAO ボードに触れる前に、Thonny IDE（Python エディター）をダウンロードしてインストールしましょう。

1. Web ブラウザ（Chrome や Safari など）を開きます。
2. https://thonny.org にアクセスします – これが公式サイトです。
3. お使いのコンピューター（Windows、macOS、または Linux）用のダウンロードリンクをクリックします。
4. ダウンロードが完了したら、インストーラーを実行し、画面の指示に従います（"Next" → "Install" → "Finish" をクリック）。

> Thonny は、ボードに Python コードを書いてアップロードするために使用するプログラムです。

### 必要な Python ツールのインストール（Esptool）

ボードを MicroPython 用に準備するには、**esptool** という小さなツールが必要です。

1. コンピューターで Terminal（Mac/Linux）または Command Prompt（Windows）を見つけて開きます。
2. 次のように入力して Enter を押します：
```
pip install esptool
```
これにより、XIAO ボードに MicroPython ファームウェアを書き込むためのツールがインストールされます。

### MicroPython ファームウェアのダウンロード

XIAO ボードで MicroPython を実行できるようにする特別なバイナリファイルが必要です。

1. Web ブラウザで https://micropython.org/download/ESP32_GENERIC_S3/ を開きます。
2. 最新の .bin ファイル（例：ESP32_GENERIC_S3-xxxxx.bin）をクリックしてダウンロードします。
3. デスクトップなど、見つけやすい場所に保存します。

### XIAO ESP32-S3 (Sense) をコンピューターに接続

1. USB-C ケーブルを取り、XIAO をコンピューターに接続します。

:::tip
ボードが表示されない場合は、接続時に BOOT ボタンを押し続けてください。
:::

2. 接続後、コンピューターはボードに COM ポート（Windows）または Mac/Linux では tty デバイスを割り当てます。

### ボードへの MicroPython のフラッシュ（インストール）

次に、XIAO に MicroPython ファームウェアを書き込みます。

**1. 古いフラッシュメモリを消去**

ボードのポートを見つけて、Terminal / Command Prompt で次のように入力します：
```
esptool --chip esp32s3 --port COMX erase-flash
```

:::tip
COMX をシステムが表示するポートに置き換えてください。Mac では /dev/tty.usbmodemXXXX または /dev/tty.usbserialXXXX、Linux では /dev/ttyUSB0 または /dev/ttyACM0 の場合があります。
:::

**2. ファームウェアの書き込み**

Terminal で、まず bin ファイルの保存場所に移動し、次にフラッシュに書き込みます。

```
cd Desktop
esptool.py --chip esp32s3 --port COMX write_flash -z 0x0 ESP32_GENERIC_S3-xxxx.bin
```

ファイル名がダウンロードした `.bin` ファイルと一致していることを確認してください。このコマンドはボードに MicroPython をインストールします。

### Thonny を開いてボードに接続

ターミナルを閉じ、XIAO の USB ケーブルを抜き、5 秒待ってから XIAO を再び接続します（ボタンを押さずに接続するだけ）。これで MicroPython が動作しているのが確認できます！

1. コンピューターで **Thonny** を開きます。
2. **Run → Configure Interpreter** に移動します。
3. **Interpreter** を "MicroPython (ESP32)" に設定します。
4. XIAO に一致する **port** を選択します。
5. OK をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_3.png" style={{width:800, height:'auto'}}/></div>

Thonny の下部に MicroPython プロンプトが表示され、Python コマンドを入力できるようになります。
次のように入力してみてください：
```
print("Hello from XIAO!")
```
そして Enter を押します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_4.png" style={{width:600, height:'auto'}}/></div>

### GPIOViewer プロジェクトファイルのダウンロード

ボードで MicroPython が動作するようになったので：

1. ブラウザを開いて GitHub プロジェクトにアクセスします：https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer/tree/main
2. **Code → Download ZIP** をクリックしてプロジェクトをコンピューターに保存します。
3. ダウンロードした ZIP を覚えやすいフォルダに展開します。

### プロジェクトをボードにアップロード

Thonny で：

1. **Files** サイドバーを開きます（View → Files）。
2. 展開したプロジェクトフォルダに移動します。boot.py と main.py が表示されるはずです。
3. `boot.py` を右クリック → **Upload to / (root)**。
4. `main.py` についても同様に繰り返します。

これにより GPIOViewer コードが XIAO に配置され、ボードの起動時に実行されるように設定されます。

### Wi-Fi の設定（boot.py 内）

プロジェクトを開始する前に：

1. Thonny でアップロードした `boot.py` ファイルを開きます。
2. Wi-Fi SSID とパスワードの行を見つけます。
3. `"Your_WiFi_SSID"` と `"Your_WiFi_Password"` を自宅の Wi-Fi 名とパスワードに置き換えます。
4. ファイルを保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_5.png" style={{width:600, height:'auto'}}/></div>

### GPIO モニターの実行と表示

1. ボードが接続されたまま、Thonny で **Run**（緑のボタン）を押します。
2. 数秒後、ボードが Wi-Fi に接続されます。
3. Thonny の出力を確認してください — ボードが受信した **IP アドレス** が表示されます。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_6.png" style={{width:800, height:'auto'}}/></div>

4. コンピューターで **Web ブラウザ** を開き、その IP を入力します（例：http://192.168.6.80:8080 ）。
5. ピン状態を表示する **リアルタイム GPIO ダッシュボード** が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_8.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_9.png" style={{width:800, height:'auto'}}/></div>

:::tip
1. **Run** する前に、XIAO ESP32-S3 (Sense) にアンテナを接続してください。
2. Web ページを開けない場合、Thonny がボードに再接続した後に次の状況が発生します：
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_GPIO_Viewer/gpio_viewer_7.png" style={{width:800, height:'auto'}}/></div>
  心配しないでください。これは MicroPython + Thonny + Web Server セットアップでの正常な動作です。ボードの Reset ボタンを一度押すか、Thonny を閉じてください。
:::


## ✨ コントリビュータープロジェクト

- このプロジェクトは [コントリビュータープロジェクト](https://github.com/TuzaaBap/Seeed-Studio-XIAO-ESP32S3-GPIOViewer) によってサポートされています。
- 献身的な努力をしてくださった [Utkarsh Bhor Patil](https://github.com/TuzaaBap) に特別な感謝を申し上げます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>