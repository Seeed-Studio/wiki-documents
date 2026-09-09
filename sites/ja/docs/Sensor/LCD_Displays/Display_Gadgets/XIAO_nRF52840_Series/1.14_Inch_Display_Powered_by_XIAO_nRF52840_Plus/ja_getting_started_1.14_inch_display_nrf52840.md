---
description: XIAO 1.14'' IPS Display (nRF52840) のはじめに。
title: XIAO 1.14'' IPS Display (nRF52840) のはじめに
sidebar_label: Getting Started
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - 1.14
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_1.14_inch_display_nrf52840
sku: 100069374
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/getting_started_1.14_inch_display_nrf52840/
---

# XIAO 1.14'' IPS Display (nRF52840) のはじめに

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.14'' IPS Display (nRF52840)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/NEW114_nRF52840Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-14-Inch-Display-Powered-by-XIAO-nRF52840-Plus-p-6994.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## はじめに

1.14'' IPS Display は、XIAO nRF52840 Plus を搭載した XIAO シリーズ向けの拡張ボードです。135×240 の IPS カラー LCD、オンボード PDM マイク、6 軸 IMU（LSM6DS3 互換）、Grove I2C コネクタ、3 つのユーザーボタン、バッテリー残量表示付きの電源管理機能を備え、これらすべてがコンパクトなフォームファクタに統合されています。

この組み合わせにより、ウェアラブルデバイス、コンパクトなセンサーノード、ポータブル計測器、スペースに制約のある IoT プロトタイピングに最適なプラットフォームとなります。

<div class="table-center">
  <table align="center">
    <tr><th>仕様</th><th>詳細</th></tr>
    <tr><td>製品ポジショニング</td><td>センシング & 拡張</td></tr>
    <tr><td>コアコントローラ</td><td>Seeed Studio XIAO nRF52840 Plus</td></tr>
    <tr><td>プロセッサ</td><td>Nordic nRF52840、ARM® Cortex®-M4 32-bit プロセッサ（FPU 搭載）、64 MHz</td></tr>
    <tr><td>メモリ</td><td>256 KB RAM + 1 MB 内蔵 Flash + 2 MB オンボード Flash</td></tr>
    <tr><td>無線接続</td><td>BLE 5.4</td></tr>
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
    <tr><td>バッテリーコネクタ</td><td>3.7 V LiPo 用 2 ピン JST 2.0 コネクタ</td></tr>
    <tr><td>バッテリーモニタリング</td><td>バッテリー状態検出に対応。バッテリー電圧を監視してバッテリー残量を推定することも可能。</td></tr>
    <tr><td>拡張インターフェース</td><td>1x Grove I2C コネクタ、1x I2C パッド、1x I2S パッド、1x SWD パッド、3x ユーザーボタンパッド</td></tr>
    <tr><td>基板サイズ</td><td>26 × 48 × 10.6 mm</td></tr>
    <tr><td>最適な用途</td><td>ポータブルセンサーディスプレイ、Grove デバイス、フィジカルコントローラ</td></tr>
  </table>
</div>

:::note
このディスプレイボードは **XIAO nRF52840 Plus** 用に設計されています。XIAO ESP32-S3 Plus バージョンを使用している場合は、代わりに XIAO 1.14'' IPS Display (ESP32-S3) ガイドを参照してください。
:::

## ハードウェア概要

始める前に、以下の画像を参照して 1.14'' IPS Display の物理的なレイアウトを把握してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### ピンマップ

1.14'' IPS Display は、XIAO nRF52840 Plus のすべてのピンを引き出しています。下の表は、各ピン、そのディスプレイボード上でのネット名、その機能、およびオンボード周辺機器への接続方法を示しています。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO ピン</th><th>ネット名</th><th>機能の説明</th><th>ハードウェア接続メモ</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM デジタルマイクのクロック</td><td>内部で PDM マイクに接続</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM デジタルマイクのデータ</td><td>内部で PDM マイクに接続</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>画面のチップセレクト信号</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>画面のデータ/コマンド切り替え</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D4</td><td>SDA</td><td>I2C データバス</td><td>バス共有：内部で IMU に接続、外部には Grove I2C コネクタとして引き出し</td></tr>
    <tr><td>D5</td><td>SCL</td><td>I2C クロックバス</td><td>バス共有：内部で IMU に接続、外部には Grove I2C コネクタとして引き出し</td></tr>
    <tr><td>D6</td><td>BTN_A</td><td>物理ボタン A（左）</td><td>内部で前面左のマイクロスイッチに外付け 1 KΩ プルアップ付きで接続。外部には U1 テストパッドとして引き出し</td></tr>
    <tr><td>D7</td><td>BTN_B</td><td>物理ボタン B（右）</td><td>内部で前面右のマイクロスイッチに外付け 1 KΩ プルアップ付きで接続。外部には U2 テストパッドとして引き出し</td></tr>
    <tr><td>D8</td><td>SCK</td><td>ハードウェア SPI クロック</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D9</td><td>NC</td><td>未接続（予約）</td><td>物理的な接続なし</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>ハードウェア SPI データ出力</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>オーディオデータ出力</td><td>基板下部の拡張パッドに引き出し</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>オーディオビットクロック</td><td>基板下部の拡張パッドに引き出し</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>オーディオワードセレクト</td><td>基板下部の拡張パッドに引き出し</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU のモーションハードウェア割り込み</td><td>非同期ウェイクアップ用に 6 軸 IMU に内部接続</td></tr>
    <tr><td>D15</td><td>NC</td><td>予約テストポイント</td><td>PCB 上にベア銅のテストパッドを予約</td></tr>
    <tr><td>D16</td><td>NC</td><td>未接続（予約）</td><td>物理的な接続なし</td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>画面のソフトリセット</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>画面のバックライト制御</td><td>内部でバックライトドライバ回路に接続</td></tr>
    <tr><td>D19</td><td>BTN_C</td><td>物理ボタン C（側面）</td><td>内部で側面のマイクロスイッチに外付け 1 KΩ プルアップ付きで接続。外部には U3 テストパッドとして引き出し</td></tr>
  </table>
</div>


## Getting Started

このガイドでは、ディスプレイボードに最小限の **"Hello, XIAO"** スケッチを書き込みます。画面のバックライトが点灯し、黒で塗りつぶされ、その中央に大きな緑色のテキストで 2 行に分けて **"Hello,"** と **"XIAO"** が表示されます。個々の周辺機能デモに進む前に、画面と開発環境が正しく動作していることを確認する最速の方法です。

### ソフトウェアの準備

以下のツールとライブラリが必要です：

- **Arduino IDE**（バージョン 1.8 以降）

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div><br />

- **Seeed nRF52 Boards (1.1.13)** — **File > Preferences > Additional Boards Manager URLs** に次の URL を追加します：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

その後、**Tools > Board > Boards Manager** を開き、**Seeed nRF52** を検索してバージョン **1.1.13** をインストールします。

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager にはないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。または、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリをクローンしてもかまいません。

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** に進み、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動でインストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリが認識されるように Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、`Board` + `Panel Config` のレイヤードアーキテクチャ上に構築された Seeed Studio のグラフィックスライブラリです。各デモは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートがピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** が 135×240 の解像度、色順序（BGR）、向きを組み込みます。`driver.h` や手動でのピン設定は不要です。
- このボードでは、スケッチは `Config_Seeed_1inch14_LCD_ST7789` を使用し、`Board_XIAO_1inch14_LCD<38, 37>`（RST=38, BL=37）を指定しています。
- スケッチで使用されている **Adafruit TinyUSB** ライブラリは **Seeed nRF52 Boards** パッケージに同梱されているため、別途インストールする必要はありません。
:::

### コードをダウンロードする

サンプルスケッチは GitHub で入手できます：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_nrf52840_114_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

`code_GFX2/getting_started_code/xiao_nrf52840_114_hello/` に移動し、Arduino IDE で `xiao_nrf52840_114_hello.ino` を開きます。GitHub の Web ビューから `.ino` ソースをコピーするのではなく、**フォルダ全体をダウンロード**してください。

### スケッチを書き込む

**Step 1.** XIAO nRF52840 Plus を USB-C ポート経由でコンピュータに接続します。

**Step 2.** Arduino IDE でボードを選択します：**Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus**。

**Step 3.** **Tools > Port** から正しい **Port** を選択します。

**Step 4.** **Upload** ボタン（→）をクリックします。スケッチがコンパイルされ、ボードに書き込まれます。

:::note
書き込み時に問題が発生した場合は、リセットボタンをダブルクリックしてブートローダーモードに入ってください。USR LED が赤くゆっくり点滅し、コンピュータ上に **NRF52BOOT** ドライブが表示されれば、ボードがブートローダーモードになっていることを示します。
:::

### 期待される出力

書き込み後、画面は黒い背景で点灯し、中央に大きな緑色のテキストが 2 行表示されます。1 行目に **"Hello,"**、2 行目に **"XIAO"** が表示されます。この挨拶メッセージは再描画されることなく画面に表示されたままになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

ディスプレイの初期化に失敗した場合、スケッチはライブラリのエラーメッセージをボーレート **115200** でシリアルモニタに出力します。**Tools > Serial Monitor** を開き、ボーレートを 115200 に設定して内容を確認してください。

## 次のステップ

このディスプレイボードには、複数のオンボード周辺機能が搭載されています。[Function](/ja/function_1.14_inch_display_nrf52840) ページでは、それぞれに対応した単体デモを提供しています：

<div class="table-center">
  <table align="center">
    <tr><th>周辺機能</th><th>デモ</th></tr>
    <tr><td>画面</td><td>[GraphicTest](/ja/function_1.14_inch_display_nrf52840#screen-display--graphictest) — 10 種類のグラフィックプリミティブとタイミングベンチマーク</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/ja/function_1.14_inch_display_nrf52840#imu) — 6 軸モーションエフェクトとモーション検知によるウェイクアップ</td></tr>
    <tr><td>マイク & スピーカー</td><td>[Voice Bar + Flash Recorder](/ja/function_1.14_inch_display_nrf52840#microphone--speaker) — ライブ PDM レベルメーターと I2S 再生付き録音</td></tr>
    <tr><td>Grove I2C</td><td>[SHT31 Temperature & Humidity](/ja/function_1.14_inch_display_nrf52840#grove-i2c) — Grove SHT31 センサの読み取り</td></tr>
    <tr><td>ボタン</td><td>[User Buttons](/ja/function_1.14_inch_display_nrf52840#user-buttons) — 割り込みを用いたボタン押下の読み取りとデバウンス</td></tr>
    <tr><td>バッテリー</td><td>[Battery Status](/ja/function_1.14_inch_display_nrf52840#battery-status) — 電圧を測定し、パーセンテージに変換</td></tr>
  </table>
</div>

## FAQ

### 書き込みに失敗したり、ボードが認識されない場合は？

XIAO nRF52840 Plus のリセットボタンをダブルクリックしてください。USR LED が赤くゆっくり点滅し、**NRF52BOOT** という名前のドライブがコンピュータ上に表示されます。コンパイル済みの `.uf2` ファイルを **NRF52BOOT** ドライブにドラッグします。ボードは自動的に書き込みを行い、リセットされます。

### [出荷時ファームウェア - DashBoard について]

#### ダッシュボード実行中に I2C デバイスをホットプラグできますか？

いいえ。ダッシュボード実行中に I2C インターフェース上のデバイスを**ホットプラグすることは強く非推奨**です。Grove I2C コネクタや SDA/SCL ブレークアウトパッドに何かを接続・取り外しする際は、必ずボードの電源を切ってから行ってください。ホットプラグは I2C バスをハングさせる可能性があります。

## リソース

- **🗃️[PCB 設計ファイル]** [XIAO 1.14'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[回路図]** [XIAO 1.14'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D モデル]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[データシート]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[出荷時ファームウェア]** [XIAO 1.14'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

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
