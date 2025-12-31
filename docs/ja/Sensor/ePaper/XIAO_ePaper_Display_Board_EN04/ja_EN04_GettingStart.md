---
description: XIAO ePaper Display Board(nRF52840) - EN04 入門ガイド
title: XIAO ePaper Display Board(nRF52840) - EN04 入門ガイド
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /ja/epaper_EN04
last_update:
  date: 11/25/2025
  author: Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display EN04 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO nRF52840** Plus を搭載したディスプレイボード EN04 は、**24ピン**と**50ピン**の両方の ePaper ディスプレイをサポートします。JST 2.0 mm バッテリーコネクタとパワースイッチ、内蔵充電IC、NFC機能を備え、1つのリセットボタンと3つのユーザーボタンが付属しています。デジタルサイネージ、電子ラベル、ポータブル情報ボードなどの低消費電力 ePaper プロジェクトに最適です。

### 特徴

- **XIAO nRF52840 Plus 搭載:** 対応する ePaper ディスプレイに接続するだけですぐに動作します。
- **多様なディスプレイサポート:** 幅広い ePaper スクリーンに対応し、24ピンと50ピンの両方のインターフェースをサポート、ジャンパーキャップで簡単に切り替え可能です。
- **スイッチ付きBATコネクタ:** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン:** 1つのリセットボタンと3つのユーザープログラマブルボタンを含み、プロジェクトの加速とカスタマイズ可能な機能の柔軟性を提供します。

### 仕様

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>プロセッサ</th>
      <td>XIAO nRF52840 Plus</td>
    </tr>
    <tr>
      <th>ePaper コネクタ</th>
      <td>FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm</td>
    </tr>
    <tr>
      <th>バッテリーコネクタ</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>スイッチ</th>
      <td>バッテリー電源 ON/OFF</td>
    </tr>
    <tr>
      <th>電源供給</th>
      <td>- 3.7V Li-Battery<br />- USB Type-C</td>
    </tr>
    <tr>
      <th>ボタン</th>
      <td>- 1x リセットボタン<br />- 3x ユーザーボタン</td>
    </tr>
  </tbody>
</table>

### ePaper ボード選択ガイド

<table>
    <thead>
        <tr>
            <th>製品</th>
            <th>ePaper Display Board EN04</th>
<th><a href="https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>プロセッサ</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO シリーズ</td>
            <td>XIAO シリーズ</td>
        </tr>
        <tr>
            <th>対応 ePaper ディスプレイ</th>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper コネクタ</th>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>バッテリーコネクタ</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>スイッチ</th>
            <td>バッテリー電源 ON/OFF</td>
            <td>/</td>
            <td>バッテリー電源 ON/OFF</td>
        </tr>
        <tr>
            <th>ボタン</th>
            <td>1x リセットボタン<br />3x ユーザーボタン</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>拡張IOポート</th>
            <td>/</td>
            <td>他のコントローラーとの接続</td>
            <td>追加センサーとの接続</td>
        </tr>
    </tbody>
</table>

### アプリケーション

- **スマートホームダッシュボード**: 天気予報、カレンダーイベント、各種スマートホームデバイスからの通知などのリアルタイム情報を表示。
- **エネルギー監視**: スマートメーターからのエネルギー消費データを表示し、住宅所有者がエネルギー使用量をより効率的に追跡・管理できるよう支援。
- **セキュリティアラート**: 動作検知やドア・窓センサーの作動などのセキュリティイベントに関するアラートと通知を表示。
- **スマートサーモスタットディスプレイ**: 温度と湿度レベル、およびスマートサーモスタットの制御設定を表示。
- **デジタルフォトフレーム**: スマートホームネットワークから画像を表示できるWiFi対応デジタルフォトフレームを作成。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

<!-- :::tip

This version XIAO ePaper Display Board(nRF52840) - EN04 does not support NFC functionality.

::: -->

### サポートされる ePaper

#### 24ピンコネクタ

- [1.54インチ ePaper - モノクロ 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13インチ ePaper - フレキシブルモノクロ 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13インチ ePaper - 4色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9インチ ePaper - モノクロ 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9インチ ePaper - 4色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2インチ ePaper - モノクロ 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26インチ ePaper - モノクロ 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83インチ ePaper - モノクロ 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5インチ ePaper - モノクロ 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5インチ ePaper - 3色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイのタイプに応じてジャンパーを設定してください：

- 24ピン ePaper ディスプレイの場合 → ジャンパーを24ピンに設定

⚠️ 間違ったジャンパー設定を使用すると、ePaper の表示が失敗したり、異常なコンテンツが表示される可能性があります。電源を入れる前に、必ずジャンパーの位置を再確認してください。

:::

#### 50ピンコネクタ

- [7.3インチ Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.jpg" style={{width:600, height:'auto'}}/></div>
:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイのタイプに応じてジャンパーを設定してください：
- 50ピン ePaper ディスプレイの場合 → ジャンパーを50ピンに設定

⚠️ 間違ったジャンパー設定を使用すると、ePaper の表示が失敗したり、異常なコンテンツが表示される可能性があります。電源を入れる前に、必ずジャンパーの位置を再確認してください。

:::

## ソフトウェア概要

### Seeed GFX ライブラリのインストール

:::tip
このライブラリはTFTライブラリと同じ機能を持ちますが、互換性はありません。TFTライブラリや他の類似のディスプレイライブラリをインストールしている場合は、まずそれらをアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

下にスクロールして、このリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、コードが生成されます。そのコードをコピーして、後で使用します。

:::tip
間違った選択をすると、画面に何も表示されません。

デバイスやコンポーネントのタイプを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/6.jpg" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードした後、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動し、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

4つの基本的な例があります。お好みの基本例を開いてください：

1. Bitmap: ビットマップ画像を表示。
2. Clock: 時計を表示。
3. Clock_digital: デジタル時計を表示。
4. Shape: 異なるサイズの文字と図形を表示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## 開始方法

ここでは、7.5インチディスプレイを例として使用します。すべての24ピンスクリーンで手順は同じです。唯一の違いは、ドライバーで適切なスクリーンサイズを選択することです。

新しい **"driver.h" ファイル**を作成し、そのコードを貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN04
```

その後、**Tools** -> **Board** -> **XIAO ESP32S3** と **Tools** -> **Port** -> **ボードが接続されているポートを選択** に移動します。次に **Upload** をクリックしてコードをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/7.jpg" style={{width:1000, height:'auto'}}/></div>

これで電子ペーパー画面にフィードバックが表示されます！以下はHelloworldサンプルの結果です。（何も表示されない場合は、リセットボタンを押してください）

:::tip
⚠️ 注意：電子ペーパーケーブルの向き
電子ペーパーディスプレイをXIAO電子ペーパーディスプレイボードに接続する際は、FPCケーブルが正しい方向に挿入されていることを確認してください。

⚠️ コネクタを逆向きにしないでください！ケーブルを逆さまに挿入すると、電子ペーパーが表示されなくなったり、画面/ボードが損傷する可能性があります。
以下の画像は正しい接続を示しています：
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.jpg" style={{width:500, height:'auto'}}/></div>

### XIAO電子ペーパーディスプレイボード(nRF52840) - EN04のユーザーボタン

EN04には、様々な制御目的に使用できる3つのユーザープログラマブルボタンが搭載されています。このセクションでは、Arduinoを使用してボタンの状態を読み取り、ボタンの押下に応答する方法を説明します。

EN04では、3つのボタンがXIAO nRF52840 Plusに接続されています：

<table>
  <thead>
    <tr>
      <th>KEY1</th>
      <th>KEY2</th>
      <th>KEY3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>GPIO2_D1/A1</th>
      <th>GPIO3_D2/A2</th>
      <th>GPIO5_D4/A4</th>
    </tr>
  </tbody>
</table>


すべてのボタンはアクティブローで、押されたときにLOWを読み取り、離されたときにHIGHを読み取ります。

基本的なボタン読み取りサンプル

このサンプルでは、ボタンの押下を検出し、シリアルモニターにメッセージを出力する方法を説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.jpg" style={{width:500, height:'auto'}}/></div>

<br></br>

```cpp
// Define button pin (GPIO2 corresponds to Arduino digital pin 2)
const int KEY_PIN = 2;

void setup() {
  // Initialize serial port (baud rate 9600, nRF52840 compatible with default Serial)
  Serial.begin(9600);
  // Wait for serial port initialization to complete (for nRF52840 Bluetooth module serial buffer)
  while (!Serial) delay(10);

  // Configure button pin as input mode with internal pull-up resistor enabled
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Button Detection Program Started");
  Serial.println("Press the button connected to GPIO2 to see output...");
}

void loop() {
  // Read button state (INPUT_PULLUP mode: LOW = pressed, HIGH = not pressed)
  int keyState = digitalRead(KEY_PIN);

  // Detect if button is pressed (low level)
  if (keyState == LOW) {
    // 50ms delay for debounce handling (avoids false triggers from mechanical button bounce)
    delay(50);
    // Read state again to confirm (ensure stable press)
    if (digitalRead(KEY_PIN) == LOW) {
      // Print specified content via serial port
      Serial.println("Hello. This is key1");

      // Wait for button release (prevent repeated printing during long press)
      while (digitalRead(KEY_PIN) == LOW) {
        delay(10); // Short delay to reduce CPU usage
      }
    }
  }

  // Short delay in main loop for performance optimization
  delay(10);
}
```

### XIAO電子ペーパーディスプレイボード(nRF52840) - EN04のユーザーバッテリー

バッテリー電源で動作する場合：

- デバイスはリフレッシュ間隔の間、自動的に低電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電から通常3ヶ月）

- バッテリーレベルが20%を下回ると、デバイスは右上角に低バッテリーアイコンを表示します

:::tip
バッテリー電圧を読み取るコードを自分で書く場合は、analogRead()関数の前に10msの遅延を追加するとより正確になります。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.jpg" style={{width:600, height:'auto'}}/></div>

```cpp
#define VOLTAGE_PIN A0 //GPIO1
#define ADC_ENABLE_PIN A5 //GPIO6

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(VOLTAGE_PIN, INPUT);
  pinMode(ADC_ENABLE_PIN, OUTPUT);
  digitalWrite(ADC_ENABLE_PIN , HIGH);
}


void loop() {
  analogReadResolution(12); 
  int adcValue = analogRead(VOLTAGE_PIN);
  float voltage = (adcValue / 4096.0) *7.16;
  Serial.print("ADC Value: ");
  Serial.print(adcValue);
  Serial.print(" Voltage: ");
  Serial.print(voltage, 3);
  Serial.println(" V");
  delay(10);
}
```



## リソース
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
