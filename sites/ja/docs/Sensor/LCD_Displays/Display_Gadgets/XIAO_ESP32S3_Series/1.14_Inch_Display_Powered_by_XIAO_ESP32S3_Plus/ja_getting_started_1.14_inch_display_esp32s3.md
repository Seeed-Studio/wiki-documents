---
description: XIAO 1.14'' IPS Display (ESP32-S3) のはじめに。
title: XIAO 1.14'' IPS Display (ESP32-S3) のはじめに
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - 1.14
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_1.14_inch_display_esp32s3
sku: 100086099
sidebar_label: Getting Started
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/getting_started_1.14_inch_display_esp32s3/
---

# XIAO 1.14'' IPS Display (ESP32-S3) のはじめに

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.14'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-14-Inch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6991.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## はじめに

1.14'' IPS Display は、XIAO ESP32-S3 Plus を搭載した XIAO シリーズ向けに設計された拡張ボードです。135×240 の IPS カラー LCD、オンボード PDM マイク、6 軸 IMU、Grove I2C コネクタ、3 つのユーザーボタン、バッテリー電圧測定機能を備え、これらすべてがコンパクトなフォームファクタに統合されています。

この組み合わせにより、ウェアラブルデバイス、コンパクトなセンサーノード、ポータブル計測器、そしてスペースが限られる IoT プロトタイピングに最適なプラットフォームとなります。ESP32-S3 のデュアルコアプロセッサ、Wi-Fi、Bluetooth 機能により、このディスプレイはワイヤレス接続されたデバイスへと拡張されます。

<div class="table-center">
  <table align="center">
    <tr><th>仕様</th><th>詳細</th></tr>
    <tr><td>製品ポジショニング</td><td>センシング & 拡張</td></tr>
    <tr><td>コアコントローラ</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>プロセッサ</td><td>ESP32-S3R8、デュアルコア、最大 240 MHz</td></tr>
    <tr><td>メモリ</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>無線接続</td><td>2.4 GHz Wi-Fi + BLE 5.0</td></tr>
    <tr><td>ディスプレイタイプ</td><td>1.14" IPS TFT LCD</td></tr>
    <tr><td>解像度</td><td>135 × 240</td></tr>
    <tr><td>ディスプレイドライバ</td><td>ST7789</td></tr>
    <tr><td>ディスプレイインターフェース</td><td>SPI</td></tr>
    <tr><td>タッチ入力</td><td>なし</td></tr>
    <tr><td>6 軸 IMU</td><td>あり</td></tr>
    <tr><td>PDM デジタルマイク</td><td>あり</td></tr>
    <tr><td>MicroSD カードスロット</td><td>なし</td></tr>
    <tr><td>Grove I2C コネクタ</td><td>あり</td></tr>
    <tr><td>ユーザーボタン</td><td>3</td></tr>
    <tr><td>バッテリーコネクタ</td><td>2 ピン JST、3.7 V LiPo</td></tr>
    <tr><td>バッテリーモニタリング</td><td>D16 ADC によるバッテリー電圧モニタリング。測定電圧からバッテリー残量を推定できます。バッテリー状態検出はサポートされていません。</td></tr>
    <tr><td>拡張インターフェース</td><td>1x Grove I2C コネクタ、1x I2C パッド、1x I2S パッド、1x SWD パッド、3x ユーザーボタンパッド</td></tr>
    <tr><td>基板サイズ</td><td>26 × 48 × 10.6 mm</td></tr>
    <tr><td>最適な用途</td><td>センサーダッシュボード、Grove プロジェクト、フィジカルコントローラ</td></tr>
  </table>
</div>

:::note
このディスプレイボードは **XIAO ESP32-S3 Plus** 用に設計されています。XIAO nRF52840 Plus バージョンを使用している場合は、代わりに [XIAO 1.14'' IPS Display (nRF52840)](/ja/getting_started_1.14_inch_display_nrf52840) ガイドを参照してください。
:::

:::note
ESP32-S3 Plus は電圧測定に D16 を使用します。電圧デモはバッテリー残量（パーセンテージ）を表示せず、充電状態の信号も ESP32-S3 の GPIO には接続されていません。
:::

## ハードウェア概要

始める前に、以下の画像を参照して 1.14'' IPS Display の物理レイアウトを把握してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### ピンマップ

1.14'' IPS Display は、XIAO ESP32-S3 Plus のすべてのピンを引き出しています。下の表は、各ピン、そのディスプレイボード上でのネット名、その機能、およびオンボード周辺機器との接続方法を一覧にしています。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO ピン</th><th>ネット名</th><th>機能の説明</th><th>ハードウェア接続メモ</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM デジタルマイククロック</td><td>内部で PDM マイクに接続</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM デジタルマイクデータ</td><td>内部で PDM マイクに接続</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>画面チップセレクト信号</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>画面データ/コマンド切り替え</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D4</td><td>SDA</td><td>I2C データバス</td><td>バス共有：内部で IMU に接続、外部では Grove I2C コネクタに引き出し</td></tr>
    <tr><td>D5</td><td>SCL</td><td>I2C クロックバス</td><td>バス共有：内部で IMU に接続、外部では Grove I2C コネクタに引き出し</td></tr>
    <tr><td>D6</td><td>BTN_A</td><td>物理ボタン A（左）</td><td>内部で前面左マイクロスイッチに接続、外部 1 KΩ プルアップ。外部には U1 テストパッドとして引き出し</td></tr>
    <tr><td>D7</td><td>BTN_B</td><td>物理ボタン B（右）</td><td>内部で前面右マイクロスイッチに接続、外部 1 KΩ プルアップ。外部には U2 テストパッドとして引き出し</td></tr>
    <tr><td>D8</td><td>SCK</td><td>ハードウェア SPI クロック</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D9</td><td>NC</td><td>フローティング（予約）</td><td>物理的な接続なし</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>ハードウェア SPI データ出力</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>オーディオデータ出力</td><td>基板下部の拡張パッドに外部引き出し</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>オーディオビットクロック</td><td>基板下部の拡張パッドに外部引き出し</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>オーディオワードセレクト</td><td>基板下部の拡張パッドに外部引き出し</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU モーションハードウェア割り込み</td><td>非同期ウェイクアップ用に 6 軸 IMU に内部接続</td></tr>
    <tr><td>D15</td><td>NC</td><td>予約（テストポイント）</td><td>PCB 上のテストポイント TP15 に接続、機能的な周辺機器なし</td></tr>
    <tr><td>D16</td><td>BAT_ADC</td><td>バッテリー電圧検出</td><td>内部で分圧回路（316K / 160K）に接続。<strong>外部では使用しないでください</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>画面ソフトリセット</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>画面バックライト制御</td><td>内部でバックライトドライバ回路に接続</td></tr>
    <tr><td>D19</td><td>BTN_C</td><td>物理ボタン C（側面）</td><td>内部で側面マイクロスイッチに接続、外部 1 KΩ プルアップ。外部には U3 テストパッドとして引き出し</td></tr>
  </table>
</div>


## はじめの一歩

このガイドでは、ディスプレイボードに最小限の **"Hello, XIAO"** スケッチを書き込みます。画面のバックライトが点灯し、黒で塗りつぶされ、中央揃えの大きな緑色のテキストで 2 行に分けて **"Hello,"** と **"XIAO"** を表示します。個々の周辺機能デモに進む前に、画面と開発環境が正しく動作していることを確認する最速の方法です。

### ソフトウェアの準備

以下のツールとライブラリが必要です：

- **Arduino IDE**（バージョン 1.8 以降）

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div><br />

- **esp32 Boards by Espressif (3.3.11)** — 次の URL を **File > Preferences > Additional Boards Manager URLs** に追加します：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

その後、**Tools > Board > Boards Manager** に移動し、**esp32** を検索してバージョン **3.3.11** をインストールします。

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager では利用できないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。または、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリをクローンします。

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** に進み、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開されたフォルダ名を変更する必要はありません。（代わりに手動でインストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリが認識されるように Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、レイヤー化された `Board` + `Panel Config` アーキテクチャ上に構築された Seeed Studio のグラフィックスライブラリです。各デモでは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートがピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** が 135×240 の解像度、色順序、向きを組み込みます。`driver.h` や手動でのピン設定は不要です。
- このボードでは、スケッチは `Config_Seeed_1inch14_LCD_ST7789` とともに `Board_XIAO_1inch14_LCD<13, 12>`（RST=13, BL=12）を使用します。
:::

### コードをダウンロード

サンプルスケッチは GitHub で入手できます：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_114_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

`code_GFX2/getting_started_code/xiao_esp32s3_114_hello/` に移動し、Arduino IDE で `xiao_esp32s3_114_hello.ino` を開きます。GitHub の Web ビューから `.ino` ソースをコピーするのではなく、**フォルダ全体をダウンロード**してください。

### スケッチを書き込む

**ステップ 1.** XIAO ESP32-S3 Plus を USB-C ポート経由でコンピュータに接続します。

**ステップ 2.** Arduino IDE でボードを選択します：**Tools > Board > esp32 > XIAO_ESP32S3_PLUS**。

**ステップ 3.** **Tools > Port** から正しい **Port** を選択します。

**ステップ 4.** **Upload** ボタン（→）をクリックします。スケッチがコンパイルされ、ボードに書き込まれます。

### 期待される出力

書き込み後、画面は黒い背景で点灯し、中央に大きな緑色のテキストが 2 行表示されます。1 行目に **"Hello,"**、2 行目に **"XIAO"** が表示されます。この挨拶メッセージは再描画されることなく画面に表示されたままになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

ディスプレイの初期化に失敗した場合、スケッチはライブラリエラーメッセージをボーレート **115200** のシリアルモニタに出力します。**Tools > Serial Monitor** を開き、ボーレートを 115200 に設定して内容を確認してください。

## 次のステップ

このディスプレイボードには、複数のオンボード周辺機能が搭載されています。[Function](/ja/function_1.14_inch_display_esp32s3) ページでは、それぞれに対応する単体デモを提供しています：

<div class="table-center">
  <table align="center">
    <tr><th>周辺機能</th><th>デモ</th></tr>
    <tr><td>画面</td><td>[GraphicTest](/ja/function_1.14_inch_display_esp32s3#screen-display--graphictest) — 10 種類のグラフィックスプリミティブとタイミングベンチマーク</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/ja/function_1.14_inch_display_esp32s3#imu) — 6 軸モーションエフェクトとモーション検知によるウェイクアップ</td></tr>
    <tr><td>マイク & スピーカー</td><td>[Voice Bar + Flash Recorder](/ja/function_1.14_inch_display_esp32s3#microphone--speaker) — ライブ PDM レベルメーターと録音</td></tr>
    <tr><td>Grove I2C</td><td>[SHT31 Temperature & Humidity](/ja/function_1.14_inch_display_esp32s3#grove-i2c) — Grove SHT31 センサの読み取り</td></tr>
    <tr><td>ボタン</td><td>[User Buttons](/ja/function_1.14_inch_display_esp32s3#user-buttons) — 割り込みを用いたボタン押下の読み取りとデバウンス</td></tr>
    <tr><td>バッテリ</td><td>[Battery Voltage Detection](/ja/function_1.14_inch_display_esp32s3#battery-voltage-detection) — 分圧電圧の測定</td></tr>
  </table>
</div>

## FAQ

### Tools > Board メニューにボードが表示されない

Arduino IDE に ESP32 ボードパッケージが追加されていることを確認してください：

1. **File > Preferences** を開き、以下の URL を **Additional Boards Manager URLs** に貼り付けます：
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
2. **Tools > Board > Boards Manager** を開き、**esp32** を検索して、バージョン **3.3.11** をインストールします。
3. インストール後、メニューに **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** が表示されるはずです。

それでもボードが表示されない場合は、Arduino IDE を再起動してから再度お試しください。

### [Factory Firmware-DashBoard について]

#### ダッシュボードでの I2C スキャンがフリーズします — どうすればよいですか？

XIAO ESP32-S3 Plus 上の **Reset** ボタンを 1 回押してボードを再起動してください。これによりスタックした I2C バスがクリアされ、ダッシュボードは正常な状態に戻ります。

I2C インターフェースへのデバイスの**ホットプラグを行わないことを強く推奨**します。Grove I2C コネクタや SDA/SCL ブレークアウトパッドに何かを接続・取り外しする前には、必ずボードの電源を切ってください。ホットプラグは I2C バスをハングさせる原因になります。

## リソース

- **🗃️[PCB Design Files]** [XIAO 1.14'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.14'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 1.14'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
