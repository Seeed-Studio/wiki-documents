---
description: XIAO ラウンドディスプレイ 基本チュートリアル
title: Seeed Studio Round Display for XIAO 入門ガイド
keywords:
  - XIAO
  - Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /get_start_round_display
sidebar_position: 1
sku: 104030087
last_update:
  date: 4/30/2026
  author: Spencer
createdAt: '2023-03-17'
updatedAt: '2026-04-30'
url: https://wiki.seeedstudio.com/ja/get_start_round_display/
---

# Seeed Studio Round Display for XIAO 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

Seeed Studio Round Display for XIAO は、すべての XIAO 開発ボードと互換性のある拡張ボードです。片面に 39mm の円盤状に設計された全面タッチスクリーンを備えています。コンパクトなサイズの中にオンボード RTC、充電チップ、TF カードスロットを内蔵しており、スマートホームやウェアラブルなどのインタラクティブなディスプレイに最適です。

<table align="center">
 <tr>
  <th>REV</th>
  <th>説明</th>
  <th>日付</th>
  <th>作成者</th>
 </tr>
 <tr>
  <td>v1.0</td>
  <td>初期バージョン</td>
  <td>2023/1/29</td>
  <td>Linus.Liao</td>
 </tr>
 <tr>
  <td>v1.1</td>
  <td>1.Li バッテリー充電 IC を変更<br />2.A0 と D6 にスイッチを追加</td>
  <td>2023/4/7</td>
  <td>Linus.Liao</td>
 </tr>
</table>

### 仕様

<table align="center">
 <tr>
     <th>項目</th>
     <th>詳細</th>
 </tr>
 <tr>
     <th>電源</th>
     <td>USB Type-C: 5V @35 mA <br></br> バッテリー充電: 3.7V @37mA</td>
 </tr>
 <tr>
     <th>充電電流</th>
     <td>~ 485 mA</td>
 </tr>
  <tr>
     <th>拡張メモリ</th>
     <td>最大 32GB FAT 対応 TF カードスロット</td>
 </tr>
  <tr>
     <th>スクリーン</th>
     <td>1.28 インチ タッチスクリーン <br></br> 240×240 解像度 <br></br> 65K 色</td>
 </tr>
  <tr>
     <th>その他の外部機器</th>
     <td>JST 1.25 コネクタ</td>
 </tr>
  <tr>
     <th>寸法</th>
     <td>39mm x 39mm</td>
 </tr>
</table>

### 特長

- **静電容量式タッチスクリーン拡張ボード**：1.28 インチ円形ディスプレイ、240×240 解像度、65K 色で、鮮明でカラフルな画像表示を提供します
- **高い互換性**：すべての XIAO シリーズ製品と高い互換性があり、現在のプロジェクトに簡単に統合できます
- **豊富なペリフェラル**：コンパクトなサイズの中に、オンボード RTC、バッテリー充電チップ、TF カードスロット、JST 1.25 コネクタを搭載
- **腕時計サイズのデザイン**：39 mm の円形デザインで、ウェアラブルやスペースに制約のあるプロジェクトに適しています
- **プラグアンドプレイ**：すべてのピンが引き出されており、はんだ付けは不要です

## ハードウェア概要

始める前に、Round Display のピン設計を理解し、Round Display の機能を把握しやすくするために、次の図を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

2023 年 4 月 7 日以降、改良版 Round Display には、画面のバックライトとバッテリー電圧の読み取りを制御する 2 ビットスイッチが追加されています。ユーザーがピンを使用するか解放するかを自由に選択できるようにするためです。詳細を読むには [こちら](https://wiki.seeedstudio.com/ja/seeedstudio_round_display_usage/#ke-ボタン--gpio) をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## セットアップ

### ハードウェアの準備

Round Display の機能を最大限に活用し、優れた体験を得るために、Round Display のマザーボードとして XIAO シリーズを購入することを強くお勧めします。

:::tip
XIAO SAMD21、RP2040 および RA4M1 は、メモリ不足のため円形スクリーンと互換性が **ない可能性があります**。
:::

<table align="center">
 <tr>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C6</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Round Display の背面のピン列は XIAO シリーズ用に設計されています。すでに XIAO をお持ちであれば、追加のケーブルを用意する必要はなく、XIAO のピンを Round Display のピンに合わせて、直接差し込むだけで使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
XIAO を接続する際は、**XIAO の Type-C コネクタが Round Display の外側を向くようにする必要がある**ことに注意してください。誤って極性を逆にしてしまっても、Round Display には電源保護回路があるため簡単には破損しませんが、逆接続の状態を長時間続けることは推奨しません。
:::

Round Display の推奨される向きは、Round Display に正面から向いたときに、XIAO の Type-C コネクタが右側を向き、Round Display の電源ボタンが左下に位置するようにすることです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### ソフトウェアの準備

Round Display を使用するには、XIAO シリーズにプログラムを書く必要があります。推奨される開発ツールは Arduino IDE で、XIAO 用に Arduino 環境を構成し、ボードパッケージを追加する必要があります。

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

#### ステップ 1. お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div>

#### ステップ 2. Arduino アプリケーションを起動します

#### ステップ 3. 使用する XIAO 用に Arduino IDE を設定します

- 後のルーチンで **Seeed Studio XIAO RP2350** を使用したい場合は、追加手順を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/getting-started-xiao-rp2350/)** を参照してください。

- 後のルーチンで **Seeed Studio XIAO nRF52840** を使用したい場合は、追加手順を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照してください。

- 後のルーチンで **Seeed Studio XIAO ESP32C3** を使用したい場合は、追加手順を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照してください。

- 後のルーチンで **Seeed Studio XIAO ESP32C6** を使用したい場合は、追加手順を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#software-preparation)** を参照してください。

- 後のルーチンで **Seeed Studio XIAO ESP32S3** を使用したい場合は、追加手順を完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照してください。

#### ステップ 4. グラフィックライブラリとスクリーンドライバライブラリのインストール

Round Display を使用するには、事前に 2 つのライブラリをインストールする必要があります。1 つは Round Display デバイスドライバライブラリで、デバイスの画面とタッチ機能を駆動するために使用します。もう 1 つはグラフィック表示ライブラリで、図形描画のための非常に一般的なインターフェースを提供します。

1. GitHub から **Seeed_Arduino_RoundDisplay** ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. GitHub から **Seeed_GFX** ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. Arduino IDE で ZIP ファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library** に進み、ダウンロードした ZIP ファイルを選択します。

:::note
以前に TFT_eSPI ライブラリをインストールしている場合、Seeed_GFX は TFT_eSPI をフォークして機能を追加したライブラリであるため、競合を避けるために Arduino のライブラリフォルダから一時的に削除するか名前を変更する必要があるかもしれません。
:::

### Arduino ライブラリ概要

上記のチュートリアルからも分かるように、Round Display は主に **LVGL**、**TFT_eSPI**、**Arduino GFX** ライブラリを使用します。紙面の都合上、ダイヤル描画の例を用いて **LVGL** と **TFT_eSPI** ライブラリの使い方をそれぞれ紹介します。

- **TFT_eSPI** ライブラリのインターフェースと使い方については、**[こちら](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display#tft-ライブラリの共通インターフェース)** をクリックして確認できます。

- **LVGL** ライブラリのインターフェースと使い方については、**[こちら](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display#lvgl-ライブラリの共通インターフェース)** をクリックして確認できます。

- **Arduino GFX** ライブラリのインターフェースと使い方については、**[こちら](https://github.com/moononournation/Arduino_GFX)** をクリックして確認できます。

## Round Display を点灯させる

### デモ 1: Arduino Life - Round Display で Seeed_GFX ライブラリを使う方法

Seeed_GFX ライブラリのサンプルスケッチを開きます：**[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

例のタブ横の矢印をクリックして "New Tab" を選択し、Arduino スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。

新しいファイル名を `driver.h` とします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) にアクセスし、画像のように "Round Display for Seeed Studio XIAO" を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

生成されたコードをコピーして、作成した `driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

これで、サンプルを Round Display にアップロードして、LCD ディスプレイの動作を確認できます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
以降のすべての画面用コードには、使用する画面の種類を選択するための driver.h ファイルを付随させる必要があることに注意してください。
:::

### デモ 2: TFT Clock

:::caution
Demo1 を参照し、`.ino` ファイルと同じディレクトリに新しい `driver.h` ファイルを作成し、その中に次のコードを保持してください：`#define BOARD_SCREEN_COMBO 501`
:::

:::tip
Round Display 上で RTC 機能を使用する必要があるため、**I2C BM8563 RTC** ライブラリも検索してインストールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

ハードウェアとソフトウェアの準備が整ったら、最初のサンプルプログラムのアップロードを開始します。このサンプルプログラムは、Round Display の RTC クロックが正しく動作しているかを確認するために使用できます。このデモは必要なメモリ量が少ないため、すべての XIAO モデルに適しています。

:::tip
このデモを改造してより複雑な表示を実装したい場合は、使用している XIAO のメモリ容量に注意してください。具体的な容量は、その XIAO の紹介ページで確認できます。
:::

このサンプルプログラムは Arduino IDE の **File -> Examples -> Seeed Arduino Round display -> TFT_Clock** にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

使用している XIAO と、その XIAO が接続されているポート番号を選択し、コンパイルしてアップロードするだけです。

Round Display のスイッチが ON の位置に切り替えられていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

プログラムが正常に動作すれば、次のような表示が見られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### デモ 3: Hareware Test

:::caution
Demo1 を参照し、`.ino` ファイルと同じディレクトリに新しい `driver.h` ファイルを作成し、その中に次のコードを保持してください：`#define BOARD_SCREEN_COMBO 501`
:::

HardwareTest デモは少し複雑で、より多くのメモリを占有するため、一部の XIAO モデルではメモリ不足により正常に実行できない場合があります。TFT ライブラリと Arduino GFX ライブラリを使用したテスト結果を、参考用に表にまとめました。

|         | TFT library | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 non mbed version| ✅  | ❌  |
| XIAO nRF52840 mbed version| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

このサンプルプログラムは、Round Display の RTC クロック、SD カード、およびタッチ機能が正しく動作しているかを確認するために使用できます。

:::tip
Round Display 上で RTC 機能を使用する必要があるため、**I2C BM8563 RTC** ライブラリも検索してインストールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

このサンプルプログラムは Arduino IDE の **File -> Examples -> Seeed Arduino Round display -> HardwareTest** にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

使用している XIAO と、その XIAO が接続されているポート番号を選択し、コンパイルしてアップロードするだけです。

Round Display のスイッチが ON の位置に切り替えられていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

プログラムが正常に動作すれば、次のような表示が見られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
このサンプルプログラムは、RTC 機能を含む拡張ボードのすべての機能項目をテストします。I2C BM8563 RTC ライブラリをインストールしていない場合はエラーが報告されることがあります。その場合は、`lv_hardware_test()` 関数をコメントアウトしてください。そうすると SD カードの機能検出もオフになります。
:::

## キャリブレーションファームウェアの更新

:::tip
タッチが反応しないことがある場合は、以下の手順に従って画面のキャリブレーションファームウェアを更新できます。
:::

1. この[リンク](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)からコードをダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. それらを同じディレクトリに置き、このファームウェアを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. シリアルモニタを開くと、下の画像のような成功メッセージが表示されます。これは更新が成功したことを意味し、その後ご自身のプログラムをアップロードして試すことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## トラブルシューティング

### Q1: プログラムをアップロードしたのに、ディスプレイに何も表示されないのはなぜですか？

A: Round Display のスイッチがオンになっているか確認してください。XIAO ESP32C3 を使用している場合は、プログラムをアップロードした後に Reset を押して動作させる必要がある場合があります。

### Q2: Seeed Studio XIAO ESP32S3 Sense をこの拡張スクリーンに接続したい場合、2 つの TF カードスロットが競合することはありますか？

A: これは競合を引き起こしません。異なる SD カードスロットはチップセレクトによって制御されます。Sense 上の microSD カードスロットを使用したい場合、チップセレクトピンは **21** にする必要があります。Round Display 上の microSD カードスロットを使用したい場合、チップセレクトピンは **D2** にする必要があります。

S3 Sense カメラチュートリアルでは、ハードウェアと microSD カードの両方を使用する[サンプル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera)を用意しています。

### Q3: Round Display 用の HardwareTest のコードを使用すると、XIAO RP2040 で非常に奇妙な C++ エラーが発生するのはなぜですか？

A: これは、XIAO RP2040 に対して適切なコンパイルオプションを選択していないことが原因の可能性があります。下の図を参照して設定を行い、プログラムを再度アップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[PDF]** [充電 IC データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410 データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563 データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [1.28'' a-Si TFT 液晶ディスプレイ データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 回路図](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 回路図 v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [GJX0128A4-15HY データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio Round Display for XIAO 回路図 & PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio Round Display for XIAO 回路図 & PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [Round Display for XIAO の 3D モデル](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [Round Display 用シェルの 3D モデル図](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense Round Screen ケース](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
