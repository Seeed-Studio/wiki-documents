---
description: XIAO 0.96'' IPS Display (ESP32-S3) の入門ガイド。
title: XIAO 0.96'' IPS Display (ESP32-S3) の入門ガイド
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: 入門ガイド
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-20'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/getting_started_0.96_inch_display_esp32s3/
---

# XIAO 0.96'' IPS Display (ESP32-S3) の入門ガイド

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 0.96'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/0-96-Inch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6993.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## はじめに

0.96'' IPS Display は、XIAO ESP32-S3 Plus を搭載したコンパクトな拡張ボードです。80×160 の IPS カラー LCD、オンボード PDM マイク、6 軸 IMU、2 つのユーザーボタン、I2C および I2S 拡張パッド、バッテリー電圧検出機能を、小型の接続デバイス向けに設計されたフォームファクタにまとめています。

ESP32-S3 Plus により Wi-Fi と Bluetooth 接続が追加され、このボードはコンパクトなウェアラブル、ポータブルなセンサーダッシュボード、キーチェーンガジェット、ワイヤレス IoT プロトタイプに適しています。

<div class="table-center">
  <table align="center">
    <tr><th>仕様</th><th>詳細</th></tr>
    <tr><td>製品ポジショニング</td><td>超コンパクト</td></tr>
    <tr><td>コアコントローラ</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>プロセッサ</td><td>ESP32-S3R8、デュアルコア、最大 240 MHz</td></tr>
    <tr><td>メモリ</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>無線接続</td><td>2.4 GHz Wi-Fi + BLE 5.0</td></tr>
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
    <tr><td>バッテリーコネクタ</td><td>2 ピン JST、3.7 V LiPo</td></tr>
    <tr><td>バッテリーモニタリング</td><td>D16 ADC を介したバッテリー電圧モニタリング。測定電圧からバッテリー残量を推定できます。バッテリー状態検出には対応していません。</td></tr>
    <tr><td>拡張インターフェース</td><td>1x I2C インターフェース、1x I2S インターフェース、1x JTAG インターフェース、2x ユーザーボタンインターフェース</td></tr>
    <tr><td>基板サイズ</td><td>18.8 × 43.6 × 10.6 mm</td></tr>
    <tr><td>最適な用途</td><td>超小型 IoT デバイス、ウェアラブル、ステータスディスプレイ</td></tr>
  </table>
</div>

:::note
このディスプレイボードは **XIAO ESP32-S3 Plus** 用に設計されています。XIAO nRF52840 Plus バージョンを使用している場合は、代わりに [XIAO 0.96'' IPS Display (nRF52840)](/ja/getting_started_0.96_inch_display_nrf52840) ガイドを参照してください。
:::

:::note
ESP32-S3 Plus バージョンは、D16 を使用してバッテリー分圧電圧を測定します。充電状態インジケーターは提供されません。
:::

## ハードウェア概要

拡張ハードウェアを接続する前に、以下の図を参照してコネクタとオンボードコンポーネントを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_overviewNEW.png" style={{width:1000, height:'auto'}}/></div>

### ピンマップ

次の表は、ディスプレイボードおよびそのオンボード周辺機能で使用される XIAO ESP32-S3 Plus のピンを示しています。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO ピン</th><th>ネット名</th><th>機能説明</th><th>ハードウェア接続メモ</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>PDM マイククロック</td><td>オンボード PDM マイクに内部接続</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>PDM マイクデータ</td><td>オンボード PDM マイクに内部接続</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>LCD チップセレクト</td><td>LCD に内部接続</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>LCD データ/コマンド選択</td><td>LCD に内部接続</td></tr>
    <tr><td>D4</td><td>I2C_SDA</td><td>I2C データ</td><td>オンボード IMU と背面 I2C テストパッドで共有</td></tr>
    <tr><td>D5</td><td>I2C_SCL</td><td>I2C クロック</td><td>オンボード IMU と背面 I2C テストパッドで共有</td></tr>
    <tr><td>D6</td><td>BTN_USR1</td><td>ユーザーボタン 1</td><td>アクティブ Low</td></tr>
    <tr><td>D7</td><td>BTN_USR2</td><td>ユーザーボタン 2</td><td>アクティブ Low</td></tr>
    <tr><td>D8</td><td>LCD_SCK</td><td>ハードウェア SPI クロック</td><td>LCD に内部接続</td></tr>
    <tr><td>D9</td><td>NC</td><td>未接続</td><td>物理的な接続なし</td></tr>
    <tr><td>D10</td><td>LCD_MOSI</td><td>ハードウェア SPI データ出力</td><td>LCD に内部接続</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>I2S オーディオデータ</td><td>底面拡張パッドに外部出力</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>I2S ビットクロック</td><td>底面拡張パッドに外部出力</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>I2S ワードセレクト</td><td>底面拡張パッドに外部出力</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU 割り込み</td><td>モーションおよびダブルタップイベント用に LSM6DS3 に内部接続</td></tr>
    <tr><td>D15</td><td>NC</td><td>未接続</td><td>物理的な接続なし</td></tr>
    <tr><td>D16</td><td>VBAT_ADC</td><td>バッテリー電圧検出</td><td>316 kΩ / 160 kΩ の分圧器に接続。<strong>外部では使用しないでください</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>LCD リセット</td><td>LCD に内部接続</td></tr>
    <tr><td>D18</td><td>LCD_BL_PWM</td><td>LCD バックライト制御</td><td>バックライトドライバ回路に内部接続</td></tr>
    <tr><td>D19</td><td>NC</td><td>未接続</td><td>物理的な接続なし</td></tr>
  </table>
</div>


:::caution
D4 と D5 はオンボード IMU と共有されています。テストパッドに接続する外部 I2C デバイスは、一意のアドレスを使用し、3.3 V ロジックに対応している必要があります。
:::

## 入門ガイド

:::caution
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_handing_tips.png" style={{width:600, height:'auto'}}/></div>
:::

このガイドでは、最小限の **"Hello, XIAO"** スケッチをディスプレイボードに書き込みます。画面のバックライトが点灯し、黒で塗りつぶされ、中央揃えの大きな緑色のテキストで 2 行に分けて **"Hello,"** と **"XIAO"** を表示します。個々の周辺機能デモに進む前に、画面と開発環境が正しく動作していることを確認する最速の方法です。

### ソフトウェアの準備

次のツールとライブラリが必要です：

- **Arduino IDE**（バージョン 1.8 以降）

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div><br />

- **esp32 Boards by Espressif (3.3.11)** — 次の URL を **File > Preferences > Additional Boards Manager URLs** に追加します：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

その後、**Tools > Board > Boards Manager** を開き、**esp32** を検索して、バージョン **3.3.11** をインストールします。

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager にはないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。または、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリをクローンします。

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** に進み、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動でインストールする場合は、アーカイブを解凍し、展開したフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリが認識されるように Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、レイヤー化された `Board` + `Panel Config` アーキテクチャ上に構築された Seeed Studio のグラフィックスライブラリです。各デモは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートはピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** は 80×160 の解像度、色順序（BGR）、向きを組み込みます。`driver.h` や手動でのピン設定は不要です。
- このボードでは、スケッチは `Config_Seeed_0inch96_LCD_ST7789` を使用し、`Board_XIAO_0inch96_LCD<13, 12>`（RST=13, BL=12）を指定します。
:::

### コードをダウンロードする

サンプルスケッチは GitHub で入手できます：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_096_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

`code_GFX2/getting_started_code/xiao_esp32s3_096_hello/` に移動し、Arduino IDE で `xiao_esp32s3_096_hello.ino` を開きます。GitHub の Web ビューから `.ino` ソースをコピーするのではなく、**フォルダ全体をダウンロード**してください。

### スケッチを書き込む

**ステップ 1.** XIAO ESP32-S3 Plus を USB-C ケーブルでコンピュータに接続します。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** を選択します。

**ステップ 3.** **Tools > Port** から正しい **Port** を選択します。

**ステップ 4.** **Upload** をクリックします。スケッチがコンパイルされ、ボードに書き込まれます。

### 期待される出力

書き込み後、画面は黒い背景で点灯し、中央に大きな緑色のテキストが 2 行表示されます。1 行目に **"Hello,"**、2 行目に **"XIAO"** が表示されます。この挨拶メッセージは再描画されることなく画面に表示されたままになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

ディスプレイの初期化に失敗した場合、スケッチはシリアルモニタにライブラリのエラーメッセージを **115200** ボーで出力します。**Tools > Serial Monitor** を開き、ボーレートを 115200 に設定してメッセージを確認してください。

## 次のステップ

このディスプレイボードには、複数のオンボード周辺機能が搭載されています。[Function](/ja/function_0.96_inch_display_esp32s3) ページでは、それぞれに対応した単体デモを提供しています：

<div class="table-center">
  <table align="center">
    <tr><th>周辺機能</th><th>デモ</th></tr>
    <tr><td>画面</td><td>[GraphicTest](/ja/function_0.96_inch_display_esp32s3#screen-display--graphictest) — 10 種類のグラフィックプリミティブとタイミングベンチマーク</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/ja/function_0.96_inch_display_esp32s3#imu) — 6 軸モーションエフェクトとモーション検知によるウェイクアップ</td></tr>
    <tr><td>マイク & スピーカー</td><td>[Flash Recorder](/ja/function_0.96_inch_display_esp32s3#microphone--speaker--flash-recorder) — 音声の録音と再生</td></tr>
    <tr><td>ボタン</td><td>[User Buttons](/ja/function_0.96_inch_display_esp32s3#user-buttons) — 割り込みを用いたボタン押下の読み取りとチャタリング防止</td></tr>
    <tr><td>バッテリー</td><td>[Battery Voltage Detection](/ja/function_0.96_inch_display_esp32s3#battery-voltage-detection) — 分圧電圧の測定</td></tr>
  </table>
</div>

## FAQ

### Tools > Board メニューにボードが表示されません

1. **File > Preferences** を開き、ESP32 Boards Manager の URL を追加します：

   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```

2. **Tools > Board > Boards Manager** を開き、**esp32** を検索して、バージョン **3.3.11** をインストールします。
3. **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** を選択します。

それでもボードの項目が表示されない場合は、Arduino IDE を再起動してください。

### ボードはどのように持てばよいですか？

ボタン付近を持ち、**XIAO** モジュールには触れないでください。ボタンエリアをつかむようにして保持してください。

### [出荷時ファームウェアについて - DashBoard]

#### USB-C ケーブルを接続しても画面が明るくなりません。なぜですか？

画面のバックライトがオフになっている可能性があります。**USR2 (D7)** ボタンを押してバックライトを再度オンに切り替えると、ディスプレイが通常どおり点灯します。

## リソース

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad プロジェクト](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (ESP32-S3) 回路図](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP) 3D モデル](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 インチディスプレイ データシート](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (ESP32-S3) 出荷時ファームウェア](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

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
