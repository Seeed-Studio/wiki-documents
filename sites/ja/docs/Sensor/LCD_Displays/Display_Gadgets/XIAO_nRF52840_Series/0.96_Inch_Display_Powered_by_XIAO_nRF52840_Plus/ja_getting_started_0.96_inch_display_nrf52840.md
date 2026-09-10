---
description: XIAO 0.96'' IPS Display (nRF52840) のはじめに。
title: XIAO 0.96'' IPS Display (nRF52840) のはじめに
sidebar_label: Getting Started
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - 0.96
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_0.96_inch_display_nrf52840
sku: 100063377
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/getting_started_0.96_inch_display_nrf52840/
---

# XIAO 0.96'' IPS Display (nRF52840) のはじめに

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 0.96'' IPS Display (nRF52840)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/NEW096_nRF52840Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/0-96-Inch-Display-Powered-by-XIAO-nRF52840-Plus-p-6992.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## はじめに

0.96'' IPS Display は、XIAO nRF52840 Plus を搭載した XIAO シリーズ向けの拡張ボードです。コンパクトな 80×160 IPS カラー LCD、オンボード PDM マイク、6 軸 IMU（LSM6DS3）、2 つのユーザーボタン、バッテリー残量表示付きの電源管理機能を備え、1.14'' IPS Display よりもさらに小さいフォームファクタに収められています。

この組み合わせにより、超小型ウェアラブル、キーチェーンガジェット、ポータブルセンサーノード、そしてわずかなスペースも無駄にできない IoT プロトタイピングに最適なプラットフォームとなります。

<div class="table-center">
  <table align="center">
    <tr><th>仕様</th><th>詳細</th></tr>
    <tr><td>製品ポジショニング</td><td>超コンパクト</td></tr>
    <tr><td>コアコントローラ</td><td>Seeed Studio XIAO nRF52840 Plus</td></tr>
    <tr><td>プロセッサ</td><td>Nordic nRF52840、ARM® Cortex®-M4 32-bit プロセッサ（FPU 搭載）、64 MHz</td></tr>
    <tr><td>メモリ</td><td>256 KB RAM + 1 MB 内蔵 Flash + 2 MB オンボード Flash</td></tr>
    <tr><td>無線接続</td><td>BLE 5.4</td></tr>
    <tr><td>ディスプレイタイプ</td><td>0.96" IPS TFT LCD</td></tr>
    <tr><td>解像度</td><td>80 × 160</td></tr>
    <tr><td>ディスプレイドライバ</td><td>ST7789</td></tr>
    <tr><td>ディスプレイインターフェース</td><td>SPI</td></tr>
    <tr><td>タッチ入力</td><td>なし</td></tr>
    <tr><td>6 軸 IMU</td><td>あり</td></tr>
    <tr><td>PDM デジタルマイク</td><td>あり</td></tr>
    <tr><td>MicroSD カードスロット</td><td>なし</td></tr>
    <tr><td>Grove I2C コネクタ</td><td>なし</td></tr>
    <tr><td>ユーザーボタン</td><td>2</td></tr>
    <tr><td>バッテリーコネクタ</td><td>3.7 V LiPo 用 2 ピン JST 2.0 コネクタ</td></tr>
    <tr><td>バッテリー監視</td><td>バッテリー状態検出に対応し、バッテリー電圧を監視してバッテリー残量を推定できます。</td></tr>
    <tr><td>拡張インターフェース</td><td>1x I2C パッド、1x I2S パッド</td></tr>
    <tr><td>基板サイズ</td><td>18.8 × 43.6 × 10.6 mm</td></tr>
    <tr><td>最適な用途</td><td>スマートバッジ、超小型ウェアラブル、BLE ステータスディスプレイ</td></tr>
  </table>
</div>

:::note
このディスプレイボードは **XIAO nRF52840 Plus** 用に設計されています。XIAO ESP32-S3 Plus バージョンを使用している場合は、代わりに XIAO 0.96'' IPS Display (ESP32-S3) ガイドを参照してください。
:::

## ハードウェア概要

始める前に、0.96'' IPS Display の物理レイアウトを理解するため、次の画像を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### ピンマップ

0.96'' IPS Display は、XIAO nRF52840 Plus のすべてのピンを引き出しています。下の表は、各ピン、そのディスプレイボード上でのネット名、その機能、およびオンボード周辺機器との接続方法を示しています。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO ピン</th><th>ネット名</th><th>機能の説明</th><th>ハードウェア接続メモ</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM デジタルマイクのクロック</td><td>内部で PDM マイクに接続</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>PDM デジタルマイクのデータ</td><td>内部で PDM マイクに接続</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>画面チップセレクト信号</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>画面データ/コマンド切り替え</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D4</td><td>SDA</td><td>I2C データバス</td><td>バス共有：内部で IMU に接続、外部には背面の 4 ピンテストパッドに引き出し</td></tr>
    <tr><td>D5</td><td>SCL</td><td>I2C クロックバス</td><td>バス共有：内部で IMU に接続、外部には背面の 4 ピンテストパッドに引き出し</td></tr>
    <tr><td>D6</td><td>BTN_USR1</td><td>ユーザーボタン 1（KEY1）</td><td>内部でマイクロスイッチ 1 に接続；バックライトの明るさを切り替え</td></tr>
    <tr><td>D7</td><td>BTN_USR2</td><td>ユーザーボタン 2（KEY2）</td><td>内部でマイクロスイッチ 2 に接続；バックライトの ON/OFF を切り替え</td></tr>
    <tr><td>D8</td><td>LCD_SCK</td><td>ハードウェア SPI クロック</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D9</td><td>NC</td><td>未接続（予約）</td><td>物理的な接続なし</td></tr>
    <tr><td>D10</td><td>LCD_MOSI</td><td>ハードウェア SPI データ出力</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>オーディオデータ出力</td><td>基板下部のオーディオ拡張パッドに外部引き出し</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>オーディオビットクロック</td><td>基板下部のオーディオ拡張パッドに外部引き出し</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>オーディオワードセレクト</td><td>基板下部のオーディオ拡張パッドに外部引き出し</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU モーションハードウェア割り込み</td><td>内部で 6 軸 IMU に接続（モーションウェイクアップ対応）</td></tr>
    <tr><td>D15</td><td>NC</td><td>未接続（予約）</td><td>物理的な接続なし</td></tr>
    <tr><td>D16</td><td>NC</td><td>未接続（予約）</td><td>物理的な接続なし — バッテリー電圧は D16 ではなく、モジュール内部の PIN_VBAT を通じて測定されます</td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>画面ソフトリセット</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>画面バックライト制御</td><td>内部でバックライトドライバ回路に接続</td></tr>
    <tr><td>D19</td><td>NC</td><td>未接続（予約）</td><td>物理的な接続なし</td></tr>
  </table>
</div>


## はじめに

このガイドでは、ディスプレイボードに最小限の **"Hello, XIAO"** スケッチを書き込みます。画面のバックライトが点灯し、背景が黒で塗りつぶされ、中央に大きな緑色のテキストで **"Hello,"** と **"XIAO"** の 2 行が表示されます。個々の周辺機能デモに進む前に、画面と開発環境が正しく動作していることを確認する最速の方法です。

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

その後、**Tools > Board > Boards Manager** を開き、**Seeed nRF52** を検索して、バージョン **1.1.13** をインストールします。

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager にはないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。または、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリをクローンしてもかまいません。

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** に進み、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動でインストールする場合は、アーカイブを解凍し、展開したフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリが認識されるように、Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、`Board` + `Panel Config` というレイヤー構造に基づいて構築された Seeed Studio のグラフィックスライブラリです。各デモでは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートはピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** は 80×160 の解像度、色順序（BGR）、向きを組み込みます。`driver.h` や手動のピン設定は不要です。
- このボードでは、スケッチは `Config_Seeed_0inch96_LCD_ST7789` とともに `Board_XIAO_0inch96_LCD<38, 37>`（RST=38, BL=37）を使用します。
- スケッチで使用されている **Adafruit TinyUSB** ライブラリは **Seeed nRF52 Boards** パッケージに同梱されているため、別途インストールする必要はありません。
:::

### コードをダウンロード

サンプルスケッチは GitHub で入手できます：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_nrf52840_096_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

`code_GFX2/getting_started_code/xiao_nrf52840_096_hello/` に移動し、Arduino IDE で `xiao_nrf52840_096_hello.ino` を開きます。GitHub の Web ビューから `.ino` ソースをコピーするのではなく、**フォルダ全体をダウンロード**してください。

### スケッチを書き込む

**ステップ 1.** XIAO nRF52840 Plus を USB-C ポート経由でコンピュータに接続します。

**ステップ 2.** Arduino IDE でボードを選択します：**Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus**。

**ステップ 3.** **Tools > Port** から正しい **Port** を選択します。

**ステップ 4.** **Upload** ボタン（→）をクリックします。スケッチがコンパイルされ、ボードに書き込まれます。

:::note
書き込み時に問題が発生した場合は、リセットボタンをダブルクリックしてブートローダーモードに入ってください。USR LED が赤くゆっくり点滅し、コンピュータ上に **NRF52BOOT** ドライブが表示されれば、ボードがブートローダーモードになっていることを示します。
:::

### 期待される出力

書き込み後、画面は黒い背景で点灯し、中央に大きな緑色のテキストが 2 行表示されます。1 行目に **"Hello,"**、2 行目に **"XIAO"** が表示されます。この挨拶メッセージは再描画されることなく画面に表示されたままになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

ディスプレイの初期化に失敗した場合、スケッチはライブラリエラーメッセージをボーレート **115200** のシリアルモニタに出力します。**Tools > Serial Monitor** を開き、ボーレートを 115200 に設定して内容を確認してください。

## 次のステップ

このディスプレイボードには、複数のオンボード周辺機能が搭載されています。[Function](/ja/function_0.96_inch_display_nrf52840) ページでは、それぞれに対応した単体デモを提供しています：

<div class="table-center">
  <table align="center">
    <tr><th>周辺機能</th><th>デモ</th></tr>
    <tr><td>画面</td><td>[GraphicTest](/ja/function_0.96_inch_display_nrf52840#screen-display--graphictest) — 10 種類のグラフィックプリミティブとタイミングベンチマーク</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/ja/function_0.96_inch_display_nrf52840#imu) — 6 軸モーションエフェクトとモーション検知によるウェイクアップ</td></tr>
    <tr><td>マイク & スピーカー</td><td>[Flash Recorder](/ja/function_0.96_inch_display_nrf52840#microphone--speaker--flash-recorder) — 音声の録音と再生</td></tr>
    <tr><td>ボタン</td><td>[User Buttons](/ja/function_0.96_inch_display_nrf52840#user-buttons) — ボタン押下の読み取りと割り込みによるチャタリング防止</td></tr>
    <tr><td>バッテリー</td><td>[Battery Status](/ja/function_0.96_inch_display_nrf52840#battery-status) — 電圧を測定し、パーセンテージに変換</td></tr>
  </table>
</div>

## FAQ

### 書き込みに失敗したり、ボードが認識されない場合はどうすればよいですか？

XIAO nRF52840 Plus のリセットボタンをダブルクリックします。USR LED が赤くゆっくり点滅し、**NRF52BOOT** という名前のドライブがコンピュータ上に表示されます。コンパイル済みの `.uf2` ファイルを **NRF52BOOT** ドライブにドラッグします。ボードは自動的に書き込みを行い、完了後に自動リセットされます。

## リソース

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

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
