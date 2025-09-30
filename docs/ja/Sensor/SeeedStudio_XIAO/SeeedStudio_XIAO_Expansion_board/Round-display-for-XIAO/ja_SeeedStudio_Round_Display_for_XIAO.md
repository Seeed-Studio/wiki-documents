---
description: XIAO Round Display 基本チュートリアル
title: Seeed Studio Round Display for XIAO 入門ガイド
keywords:
- XIAO
- Round Dislay
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/get_start_round_display
last_update:
  date: 07/11/2024
  author: Spencer
---

# Seeed Studio Round Display for XIAO 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

Seeed Studio Round Display for XIAOは、すべてのXIAO開発ボードと互換性のある拡張ボードです。片面に完全に覆われたタッチスクリーンを搭載し、39mmディスクとして設計されています。コンパクトなサイズの中にオンボードRTC、充電チップ、TFカードスロットを内蔵しており、スマートホーム、ウェアラブルデバイスなどのインタラクティブディスプレイに最適です。

<table align="center">
 <tr>
  <th>REV</th>
  <th>説明</th>
  <th>日付</th>
  <th>担当者</th>
 </tr>
 <tr>
  <td>v1.0</td>
  <td>初期バージョン</td>
  <td>2023/1/29</td>
  <td>Linus.Liao</td>
 </tr>
 <tr>
  <td>v1.1</td>
  <td>1.リチウムバッテリー充電ICの変更<br />2.A0とD6にスイッチを追加</td>
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
     <th>電源供給</th>
     <td>USB Type-C: 5V @35 mA <br></br> バッテリー充電: 3.7V @37mA</td>
 </tr>
 <tr>
     <th>充電電流</th>
     <td>~ 485 mA</td>
 </tr>
  <tr>
     <th>拡張可能メモリ</th>
     <td>最大32GB FATまでのTFカードスロット</td>
 </tr>
  <tr>
     <th>スクリーン</th>
     <td>1.28インチタッチスクリーン <br></br> 240×240解像度 <br></br> 65K色</td>
 </tr>
  <tr>
     <th>その他の外部機器</th>
     <td>JST 1.25コネクタ</td>
 </tr>
  <tr>
     <th>寸法</th>
     <td>39mm x 39mm</td>
 </tr>
</table>

### 機能

- **静電容量式タッチスクリーン拡張ボード**: 1.28インチ円形、240×240解像度、65K色のディスプレイで、鮮明でカラフルな画像表示を提供
- **高い互換性**: すべてのXIAOシリーズ製品と高い互換性を持ち、現在のプロジェクトに簡単に統合可能
- **豊富な周辺機能**: オンボードRTC、バッテリー充電チップ、TFカードスロット、JST 1.25コネクタを搭載し、すべてがコンパクトなサイズに収められています
- **腕時計サイズのデザイン**: 39mm円形デザインで、ウェアラブルおよびスペースが限られたプロジェクトに適しています
- **プラグアンドプレイ**: すべてのピンが引き出されており、はんだ付けは不要です

## ハードウェア概要

開始する前に、以下の画像を参照してRound Displayのピン設計を理解し、Round Displayの機能の理解を促進できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

2023年4月7日以降、改良されたRound Displayには、画面のバックライトとバッテリー電圧読み取りを制御する2ビットスイッチが追加されました。ユーザーがピンを使用するか解放するかを自由に選択できます。詳細については[こちら](https://wiki.seeedstudio.com/ja/seeedstudio_round_display_usage/#ke-button--gpio)をクリックしてお読みください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## はじめに

### ハードウェアの準備

Round Displayの全機能を活用し、優れた体験を得たい場合は、Round Displayのマザーボードとして当社のXIAOシリーズを購入することを強くお勧めします。

:::tip
XIAO SAMD21、RP2040、RA4M1は、メモリ不足により円形スクリーンと互換性が**ない**場合があります。
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Round Displayの背面にあるピンの列は、XIAOシリーズ用に設計されています。XIAOをお持ちの場合、追加のケーブルを準備する必要はありません。XIAOのピンを合わせて、Round Displayに直接差し込むだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
XIAOを接続する際は、**XIAOのType-Cコネクタが Round Displayの外側を向くように**してください。誤って極性を逆にしてしまっても、あまり心配する必要はありません。Round Displayには電源保護回路があり、簡単には損傷しませんが、長時間逆接続のままにしておくことはお勧めしません。
:::

Round Displayの推奨向きは、Round Displayに向かって、XIAOのType-Cコネクタが右側を向くようにすることです。これにより、Round Displayのオン/オフボタンが左下角に位置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### ソフトウェアの準備

Round Displayを使用するには、XIAOシリーズをプログラムする必要があります。推奨されるプログラミングツールはArduino IDEで、XIAOのArduino環境を設定し、オンボードパッケージを追加する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### ステップ1. お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### ステップ2. Arduinoアプリケーションを起動します。

#### ステップ3. 使用するXIAO用にArduino IDEを設定します。

- 後のルーチンで**Seeed Studio XIAO RP2350**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/getting-started-xiao-rp2350/)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO nRF52840**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32C3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32C6**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#software-preparation)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32S3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)**を参照して追加を完了してください。

#### ステップ4. グラフィックスライブラリとスクリーンドライバーライブラリのインストール

Round Displayを使用するには、事前に2つのライブラリをインストールする必要があります。1つはRound Displayデバイスドライバーライブラリで、デバイスのスクリーンとタッチ機能を駆動するために使用されます。もう1つはグラフィックス表示ライブラリで、グラフィックスを描画するための非常に一般的なインターフェースを提供します。

1. GitHubから**Seeed_Arduino_RoundDisplay**ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. GitHubから**Seeed_GFX**ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. Arduino IDEでZIPファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library**に移動し、ダウンロードしたZIPファイルを選択します。

:::note
以前にTFT_eSPIライブラリをインストールしている場合、競合を避けるために、ArduinoライブラリフォルダからTFT_eSPIライブラリを一時的に削除または名前を変更する必要があるかもしれません。Seeed_GFXは追加機能を持つTFT_eSPIのフォークです。
:::

### Arduino ライブラリ概要

上記のチュートリアルからおそらくわかるように、Round Display は主に **LVGL**、**TFT_eSPI**、**Arduino GFX** ライブラリを使用しています。スペースの都合上、ダイアルの描画例を使って **LVGL** と **TFT_eSPI** ライブラリの使用方法を別々に紹介します。

- **TFT_eSPI** ライブラリのインターフェースと使用方法については、**[こちら](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)** をクリックして学習できます。

- **LVGL** ライブラリのインターフェースと使用方法については、**[こちら](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)** をクリックして学習できます。

- **Arduino GFX** ライブラリのインターフェースと使用方法については、**[こちら](https://github.com/moononournation/Arduino_GFX)** をクリックして学習できます。

## Round Display を点灯させる

### デモ 1: Arduino Life - Round Display で Seeed_GFX ライブラリを使用する方法

Seeed_GFX ライブラリからサンプルスケッチを開きます：**[File > Seeed_GFX > Examples > Round Display > Arduino_Life](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/Round%20Display/Arduino_Life/Arduino_Life.ino)**

Arduino スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。サンプルタブの横にある矢印をクリックして「New Tab」を選択してください。

新しいファイルに `driver.h` という名前を付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) にアクセスし、画像に示すように「TRMNL 7.5" (OG) DIY Kit」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/108.png" style={{width:600, height:'auto'}}/></div>

生成されたコードをコピーして、作成した `driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 501 // Round Display for Seeed Studio XIAO （GC9A01)
```

今すぐサンプルをTRMNL DIYキットにアップロードして、ePaperディスプレイの動作を確認できます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/107.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
以降のすべての画面のコードには、使用する画面の種類を選択するために使用されるdriver.hファイルが必要であることに注意してください。
:::

### デモ2: TFTクロック

:::caution
Demo1を参照して、`.ino`ファイルと同じディレクトリに新しい`driver.h`ファイルを作成し、以下のコードを保持してください：`#define BOARD_SCREEN_COMBO 501`
:::

:::tip
ラウンドディスプレイのRTC機能を使用する必要があるため、**I2C BM8563 RTC**ライブラリも検索してインストールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

ハードウェアとソフトウェアの準備ができたら、最初のサンプルプログラムのアップロードを開始します。このサンプルプログラムは、ラウンドディスプレイのRTCクロックが正常に動作しているかどうかを確認するために使用できます。このデモは少量のメモリしか必要としないため、すべてのXIAOモデルに適しています。

:::tip
このデモを変更してより複雑な表示を実装したい場合は、使用しているXIAOのメモリサイズに注意してください。具体的なサイズは、そのXIAOの紹介ページで確認できます。
:::

このサンプルプログラムは、Arduino IDEの**File -> Examples -> Seeed Arduino Round display -> TFT_Clock**で見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

使用しているXIAOとXIAOが接続されているポート番号を選択し、コンパイルしてアップロードするだけです。

ラウンドディスプレイのスイッチがON位置に切り替わっていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

プログラムが正常に実行されると、以下の効果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### デモ3: ハードウェアテスト

:::caution
Demo1を参照して、`.ino`ファイルと同じディレクトリに新しい`driver.h`ファイルを作成し、以下のコードを保持してください：`#define BOARD_SCREEN_COMBO 501`
:::

HardwareTestデモは少し複雑で、より大きなメモリ容量を占有するため、一部のXIAOモデルではメモリ不足により正常に実行できない場合があります。TFTライブラリとArduino GFXライブラリを使用して、参考用のテスト表を作成しました。

|         | TFTライブラリ | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 non mbed version| ✅  | ❌  |
| XIAO nRF52840 mbed version| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

このサンプルプログラムは、Round DisplayのRTCクロック、SDカード、タッチ機能が正常に動作しているかどうかを確認するために使用できます。

:::tip
Round Displayでは RTC 機能を使用する必要があるため、**I2C BM8563 RTC** ライブラリも検索してインストールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

このサンプルプログラムは、Arduino IDEの **File -> Examples -> Seeed Arduino Round display -> HardwareTest** で見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

使用しているXIAOとXIAOが接続されているポート番号を選択し、コンパイルしてアップロードするだけです。

Round Displayのスイッチが ON 位置に切り替わっていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

プログラムが正常に実行されると、以下のような効果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
このサンプルプログラムは、RTC機能を含む拡張ボードのすべての機能項目をテストします。I2C BM8563 RTCライブラリがインストールされていない場合、エラーが報告される可能性があります。その場合は、関数 `lv_hardware_test()` をコメントアウトすることで、SDカードの機能検出もオフになります。
:::

## キャリブレーションファームウェアアップデート

:::tip
タッチが時々反応しない場合は、以下の手順に従って画面のキャリブレーションファームウェアを更新できます。
:::

1. この[リンク](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)からコードをダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. 同じディレクトリに配置し、このファームウェアを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. シリアルモニターを開くと、以下の画像のような成功メッセージが表示されます。これは更新が成功したことを意味し、プログラムをアップロードして試すことができます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## トラブルシューティング

### Q1: プログラムをアップロードした後、ディスプレイに何も表示されないのはなぜですか？

A: Round Displayのスイッチがオンになっていることを確認してください。XIAO ESP32C3 を使用している場合は、プログラムをアップロードした後にリセットを押して動作させる必要がある場合もあります。

### Q2: Seeed Studio XIAO ESP32S3 Senseをこの拡張画面に接続したい場合、2つのTFカードスロットで競合が発生しますか？

A: これは競合を引き起こしません。異なるSDカードスロットはチップセレクトによって制御されます。Sense上のmicroSDカードスロットを使用したい場合、チップセレクトピンは **21** にする必要があり、Round Display上のmicroSDカードスロットを使用したい場合、チップセレクトピンは **D2** にする必要があります。

S3 Senseカメラチュートリアルには、ハードウェアとmicroSDカードの両方を使用する[例](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera)があります。

### Q3: XIAO RP2040 でRound DisplayのHardwareTestコードを使用すると、非常に奇妙なC++エラーが発生するのはなぜですか？

A: これは、XIAO RP2040 に適切なコンパイルオプションを選択していないことが原因である可能性があります。以下の図を参考に設定し、プログラムを再アップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## Resources

- **[PDF]** [充電IC データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410 データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563 データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [1.28'' a-Si TFT液晶ディスプレイ データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 回路図](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 回路図 v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [GJX0128A4-15HY データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio Round Display for XIAO 回路図&PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio Round Display for XIAO 回路図&PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [Round Display for XIAOの3Dモデル](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [Round Display用シェルの3Dモデル図](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense ラウンドスクリーン付きケース](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
