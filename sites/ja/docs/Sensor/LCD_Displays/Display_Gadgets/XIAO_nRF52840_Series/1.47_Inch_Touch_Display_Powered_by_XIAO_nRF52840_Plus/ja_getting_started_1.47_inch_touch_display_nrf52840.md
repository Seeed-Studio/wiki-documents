---
description: XIAO 1.47'' IPS Display (nRF52840) のはじめに。
title: XIAO 1.47'' IPS Display (nRF52840) のはじめに
sidebar_label: Getting Started
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/getting_started_1.47_inch_touch_display_nrf52840/
---

# XIAO 1.47'' IPS Display (nRF52840) のはじめに

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.47'' IPS Display (nRF52840)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/NEW147_nRF52840Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-nRF52840-Plus-p-6995.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## はじめに

1.47'' IPS Display は、XIAO nRF52840 Plus を搭載した XIAO シリーズ向けの拡張ボードです。172×320 のカラー LCD（静電容量式タッチ付き）、オンボード PDM マイク、6 軸 IMU（LSM6DS3）、MicroSD カードスロット、バッテリー電源管理を備え、これらすべてがコンパクトなフォームファクタに統合されています。

この組み合わせにより、ポータブル HMI アプリケーション、IoT ダッシュボード、ウェアラブルデバイス、インタラクティブなプロトタイピングに最適なプラットフォームとなります。

<div class="table-center">
  <table align="center">
    <tr><th>仕様</th><th>詳細</th></tr>
    <tr><td>製品ポジショニング</td><td>タッチ & フルインタラクション</td></tr>
    <tr><td>コアコントローラ</td><td>Seeed Studio XIAO nRF52840 Plus</td></tr>
    <tr><td>プロセッサ</td><td>Nordic nRF52840、ARM® Cortex®-M4 32-bit プロセッサ（FPU 搭載）、64 MHz</td></tr>
    <tr><td>メモリ</td><td>256 KB RAM + 1 MB 内蔵 Flash + 2 MB オンボード Flash</td></tr>
    <tr><td>無線接続</td><td>BLE 5.4</td></tr>
    <tr><td>ディスプレイタイプ</td><td>1.47" IPS TFT LCD</td></tr>
    <tr><td>解像度</td><td>172 × 320</td></tr>
    <tr><td>ディスプレイドライバ</td><td>JD9853A</td></tr>
    <tr><td>ディスプレイインターフェース</td><td>SPI</td></tr>
    <tr><td>タッチ入力</td><td>静電容量式タッチ</td></tr>
    <tr><td>6 軸 IMU</td><td>あり</td></tr>
    <tr><td>PDM デジタルマイク</td><td>あり</td></tr>
    <tr><td>MicroSD カードスロット</td><td>あり</td></tr>
    <tr><td>Grove I2C コネクタ</td><td>なし</td></tr>
    <tr><td>ユーザーボタン</td><td>2</td></tr>
    <tr><td>バッテリーコネクタ</td><td>3.7 V LiPo 用 2-pin JST 2.0 コネクタ</td></tr>
    <tr><td>バッテリーモニタリング</td><td>バッテリー状態検出に対応。バッテリー電圧も監視でき、バッテリー残量の推定に利用可能。</td></tr>
    <tr><td>拡張インターフェース</td><td>1x I2C パッド、1x I2S パッド、1x SWD パッド、2x ユーザーボタンパッド</td></tr>
    <tr><td>基板サイズ</td><td>26.4 × 51.4 × 12.6 mm</td></tr>
    <tr><td>最適な用途</td><td>タッチ UI、ポータブル HMI、ローカルメディアおよびデータロギング</td></tr>
  </table>
</div>

## ハードウェア概要

始める前に、1.47'' IPS Display の物理レイアウトを理解するため、次の画像を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### ピンマップ

1.47'' IPS Display は、XIAO nRF52840 Plus のすべてのピンを引き出しています。下の表は、各ピン、そのディスプレイボード上でのネット名、その機能、およびオンボード周辺機器への接続方法を示しています。

<div class="table-center">
  <table align="center">
    <tr><th>XIAO ピン</th><th>ネット名</th><th>機能の説明</th><th>ハードウェア接続メモ</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>MIC_CLK</td><td>PDM デジタルマイクのクロック</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>PDM デジタルマイクデータ</td><td>内部で PDM マイクに接続</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>画面チップセレクト信号</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>画面データ/コマンド切り替え</td><td>内部で LCD ドライバ IC に接続</td></tr>
    <tr><td>D4</td><td>SDA</td><td>I2C データバス</td><td>バス共有：内部で IMU とタッチ IC に接続、外部には I2C 拡張パッドとして引き出し</td></tr>
    <tr><td>D5</td><td>SCL</td><td>I2C クロックバス</td><td>バス共有：内部で IMU とタッチ IC に接続、外部には I2C 拡張パッドとして引き出し</td></tr>
    <tr><td>D6</td><td>SD_CS</td><td>SD カードチップセレクト信号</td><td>内部で MicroSD カードスロットに接続</td></tr>
    <tr><td>D7</td><td>TOUCH_INT</td><td>タッチ割り込み信号</td><td>非同期ウェイクアップ用に内部でタッチ IC に接続</td></tr>
    <tr><td>D8</td><td>SCK</td><td>ハードウェア SPI クロック</td><td>内部で LCD と SD カードスロットに接続</td></tr>
    <tr><td>D9</td><td>MISO</td><td>ハードウェア SPI データ入力</td><td>内部で SD カードスロットに接続</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>ハードウェア SPI データ出力</td><td>内部で LCD と SD カードスロットに接続</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>オーディオデータライン</td><td>I2S_SD のデフォルトマッピングに対応し、ボトムパッドグループに引き出し</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>オーディオビットクロック</td><td>I2S_SCK のデフォルトマッピングに対応し、ボトムパッドグループに引き出し</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>オーディオワードセレクト</td><td>I2S_WS のデフォルトマッピングに対応し、ボトムパッドグループに引き出し</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>IMU モーション割り込み</td><td>機能再割り当て：モーションウェイクアップ用</td></tr>
    <tr><td>D15</td><td>BTN_B</td><td>物理ボタン 2（USR2）</td><td>機能再割り当て：ユーザーボタン 2。外部にはボタン拡張パッドとして引き出し</td></tr>
    <tr><td>D16</td><td>NC</td><td>フローティング（予約）</td><td>物理的な接続なし</td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>画面リセット信号</td><td>信頼性の高い起動のための独立した GPIO 制御</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>画面バックライト制御</td><td>ハードウェア PWM による輝度調整をサポート</td></tr>
    <tr><td>D19</td><td>BTN_A</td><td>物理ボタン 1（USR1）</td><td>ユーザーボタン 1。外部にはボタン拡張パッドとして引き出し</td></tr>
  </table>
</div>


## はじめに

このガイドでは、最小限の **"Hello, XIAO"** スケッチをディスプレイボードに書き込みます。画面のバックライトが点灯し、黒で塗りつぶされ、中央揃えの大きな緑色のテキストで 2 行に分けて **"Hello,"** と **"XIAO"** を表示します。個々の周辺機能デモに進む前に、画面と開発環境が正しく動作していることを確認する最速の方法です。

### ソフトウェアの準備

次のツールとライブラリが必要です：

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

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** に進み、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動でインストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリが認識されるように Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、`Board` + `Panel Config` のレイヤードアーキテクチャ上に構築された Seeed Studio のグラフィックスライブラリです。各デモは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートはピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** は 172×320 の解像度、色順序（BGR）、向きを組み込みます。`driver.h` や手動のピン設定は不要です。
- このボードでは、スケッチは `Board_XIAO_1inch47_Touch_Display<38, 37>`（RST=38, BL=37）と `Config_Seeed_1inch47_Touch_JD9853A` を使用します。
- スケッチで使用される **Adafruit TinyUSB** ライブラリは **Seeed nRF52 Boards** パッケージに同梱されているため、別途インストールする必要はありません。
:::

### コードをダウンロード

サンプルスケッチは GitHub で入手できます：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_nrf52840_147_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

`code_GFX2/getting_started_code/xiao_nrf52840_147_hello/` に移動し、Arduino IDE で `xiao_nrf52840_147_hello.ino` を開きます。GitHub の Web ビューから `.ino` ソースをコピーするのではなく、**フォルダ全体をダウンロード**してください。

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

ディスプレイの初期化に失敗した場合、スケッチはライブラリのエラーメッセージをボーレート **115200** でシリアルモニタに出力します。**Tools > Serial Monitor** を開き、ボーレートを 115200 に設定してメッセージを確認してください。

## 次のステップ

このディスプレイボードには、複数のオンボード周辺機能が搭載されています。[Function](/ja/function_1.47_inch_touch_display_nrf52840) ページでは、それぞれの機能に対して単体のデモを提供しています：

<div class="table-center">
  <table align="center">
    <tr><th>周辺機能</th><th>デモ</th></tr>
    <tr><td>画面</td><td>[GraphicTest](/ja/function_1.47_inch_touch_display_nrf52840#screen-display--graphictest) — 10 種類のグラフィックプリミティブとタイミングベンチマーク</td></tr>
    <tr><td>タッチ</td><td>[Touch Circle](/ja/function_1.47_inch_touch_display_nrf52840#touch--touch-circle) — 指に追従する円</td></tr>
    <tr><td>SD カード</td><td>[Image Reader](/ja/function_1.47_inch_touch_display_nrf52840#sd-card--image-reader) — MicroSD カードから BMP を表示</td></tr>
    <tr><td>マイク & スピーカー</td><td>[Volume Bar + Record to SD](/ja/function_1.47_inch_touch_display_nrf52840#microphone--speaker) — ライブ PDM レベルメーターと SD への録音</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/ja/function_1.47_inch_touch_display_nrf52840#imu) — 6 軸モーションエフェクトとモーション検知でのウェイクアップ</td></tr>
    <tr><td>ボタン</td><td>[User Button](/ja/function_1.47_inch_touch_display_nrf52840#user-button) — 割り込みを用いたボタン押下の読み取りとデバウンス</td></tr>
    <tr><td>バッテリー</td><td>[Battery Status](/ja/function_1.47_inch_touch_display_nrf52840#battery-status) — 電圧を測定し、パーセンテージに変換</td></tr>
  </table>
</div>

## FAQ

### 書き込みに失敗したり、ボードが認識されない場合は？

XIAO nRF52840 Plus のリセットボタンをダブルクリックします。USR LED が赤くゆっくり点滅し、コンピュータ上に **NRF52BOOT** という名前のドライブが表示されます。コンパイルされた `.uf2` ファイルを **NRF52BOOT** ドライブにドラッグします。ボードは自動的に書き込みを行い、完了後に自動でリセットされます。

## リソース

- **🗃️[PCB 設計ファイル]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[回路図]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D モデル]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[データシート]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[工場出荷時ファームウェア]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルを提供しています。

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
