---
description: XIAO ePaper Display Board(ESP32-S3) - EE04 入門ガイド
title: EE04 入門ガイド
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /epaper_ee04
sidebar_position: 3
sku: 104990861,100075670,100064541,E25102101
last_update:
  date: 09/16/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-09-16'
url: https://wiki.seeedstudio.com/ja/epaper_ee04/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EE04 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO ESP32-S3** Plus を搭載したディスプレイボード EE04 は、**24 ピン**および **50 ピン**の両方の ePaper ディスプレイをサポートします。JST 2.0 mm バッテリーコネクタと電源スイッチ、内蔵充電 IC を備え、1 つのリセットボタンと 3 つのユーザーボタンを搭載しています。デジタルサイネージ、電子ラベル、携帯型情報ボードなど、低消費電力の ePaper プロジェクトに最適です。

### 特長

- **XIAO ESP32-S3 Plus 搭載:** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **多用途なディスプレイ対応:** 幅広い ePaper スクリーンに対応し、24 ピンおよび 50 ピンインターフェースの両方をサポート、ジャンパキャップで簡単に切り替え可能です。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン:** 1 つのリセットボタンと 3 つのユーザー設定可能ボタンを備え、プロジェクトの開発を加速し、機能を自由にカスタマイズできます。
- **低消費電力設計**: 省電力設計により、デフォルト設定ではフル充電で通常 3 か月程度動作するバッテリー駆動の ePaper アプリケーションに適しています。

### 仕様

| パラメータ | 説明 |
|-----------|-------------|
| プロセッサ | XIAO ESP32-S3 Plus |
| ePaper コネクタ | FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm |
| バッテリーコネクタ | JST 2.0mm |
| スイッチ | バッテリー電源 ON/OFF |
| 電源 | - 3.7V リチウムバッテリー<br />- USB Type-C |
| ボタン | - 1x リセットボタン<br />- 3x ユーザーボタン |

### ePaper ボード選定ガイド

| 製品 | ePaper Display Board EE04 | [ePaper Breakout](https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board/) | [ePaper Driver Board](https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2/) |
|---------|---------------------------|---------------|-----------------|
| プロセッサ | XIAO ESP32-S3 Plus | XIAO シリーズ | XIAO シリーズ |
| 対応 ePaper ディスプレイ | 24 Pin ePaper<br />50 Pin ePaper | 24 Pin ePaper | 24 Pin ePaper |
| ePaper コネクタ | FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm | FPC 24 Pin 0.5mm | FPC 24 Pin 0.5mm |
| バッテリーコネクタ | JST 2.0mm | / | JST 2.0mm |
| スイッチ | バッテリー電源 ON/OFF | / | バッテリー電源 ON/OFF |
| ボタン | 1x リセットボタン<br />3x ユーザーボタン | / | / |
| 拡張 IO ポート | / | 他のコントローラとの接続 | 追加センサーとの接続 |

### アプリケーション

- **スマートホームダッシュボード**: 天気情報、カレンダーイベント、各種スマートホームデバイスからの通知など、リアルタイム情報を表示します。
- **エネルギーモニタリング**: スマートメーターからの電力消費データを表示し、家庭でのエネルギー使用状況をより効率的に把握・管理できるようにします。
- **セキュリティアラート**: 動体検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **スマートサーモスタットディスプレイ**: 温度や湿度レベル、スマートサーモスタットの制御設定を表示します。
- **デジタルフォトフレーム**: スマートホームネットワーク上の画像を表示できる、WiFi 対応デジタルフォトフレームを作成します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

このバージョンの XIAO ePaper Display Board(ESP32-S3) - EE04 は、NFC 機能をサポートしていません。

:::

### 対応 ePaper

#### 24 ピンコネクタ

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Monochrome 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [2.13-inch ePaper - Quadruple 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 296x128](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Flexible Monochrome 296x128](https://www.seeedstudio.com/2-9-Flexible-Monochrome-ePaper-Display-with-296x128-Pixels-p-5780.html)
- [2.9-inch ePaper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-inch ePaper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを必ず設定してください。

- 24 Pin ePaper ディスプレイの場合 → ジャンパを 24 Pin 側に設定

⚠️ 間違ったジャンパ設定を使用すると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

#### 50 ピンコネクタ

- [7.3-inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを必ず設定してください。
- 50 Pin ePaper ディスプレイの場合 → ジャンパを 50 Pin 側に設定

⚠️ 間違ったジャンパ設定を使用すると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

### ボタン

EE04 には 1 つのリセットボタンと 3 つのユーザー設定可能ボタンが搭載されており、ユーザーインタラクションやプロジェクトのカスタマイズに柔軟性を提供します。

| ボタン | GPIO | 機能 |
|--------|------|----------|
| KEY0 | GPIO2_D1/A1 | ユーザーボタン（プログラム可能） |
| KEY1 | GPIO3_D2/A2 | ユーザーボタン（プログラム可能） |
| KEY2 | GPIO5_D4/A4 | ユーザーボタン（プログラム可能） |
| RESET | - | リセットボタン |

:::note
ユーザーボタンはプログラム可能であり、ページ切り替え、モード選択、ePaper プロジェクト内で特定のアクションをトリガーするなど、さまざまな機能に設定できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

### ジャンパキャップの選択

EE04 は 24 ピンおよび 50 ピンの両方の ePaper ディスプレイをサポートします。お使いのディスプレイに合わせて、ジャンパキャップで正しいピン構成を選択してください。

- **24 ピンモード**: ジャンパキャップを 24 ピン側に配置します
- **50 ピンモード**: ジャンパキャップを 50 ピン側に配置します

:::caution
ジャンパキャップが、お使いの ePaper ディスプレイのピン数に応じて正しく配置されていることを必ず確認してください。ジャンパキャップの誤った配置は、表示不良や画面の損傷を引き起こす可能性があります。
:::

### バッテリーコネクタ

本ボードには電源スイッチ付き JST 2.0mm バッテリーコネクタが搭載されており、3.7V リチウムバッテリーでデバイスに電源を供給できるため、ポータブル用途に適しています。内蔵充電 IC により、USB Type-C 経由でバッテリー充電が可能です。

デバイスがバッテリー駆動の場合、以下の現象は SenseCraft Seeedash ファームウェア自体に由来する正常な動作です。

- デバイスはリフレッシュの合間に自動的に低消費電力モードに入ります
- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定ではフル充電で通常 3 か月程度）
- バッテリー残量が 20% 未満になると、画面右上にバッテリー低下アイコンが表示されます

## SenseCraft Seeedash を使ったセットアップ

このセクションでは、EE04 を SenseCraft Seeedash プラットフォームに接続し、画面コンテンツをワイヤレスで簡単に更新する手順を説明します。

:::note
**このガイドで使用しているスクリーンはどれですか？** 単一パネルのボードとは異なり、EE04 は複数の ePaper パネルに対応しています（上記の **対応 ePaper** セクションを参照）。本ガイドでは、例として **7.5-inch Monochrome ePaper (800 x 480)** を使用しており、以下のスクリーンショットはすべてこのパネルで取得したものです。別のスクリーンをお持ちの場合は、ステップ 2 でファームウェアを書き込む際にご自身のパネルモデルを選択するだけで構いません。それ以外の手順はまったく同じです。
:::

:::caution
**初回起動時にウェルカム画面が表示されない？それは正常です。** EE04 は複数の ePaper パネルをサポートしているため、工場出荷時ファームウェアは特定のスクリーン向けにプリインストールされていません。スクリーンを接続して新品のボードの電源を入れても、ディスプレイはほとんどの場合真っ白のままです — これはボードやスクリーンの故障を意味するものではありません。まず、お使いのスクリーンモデルに対応した SenseCraft Seeedash ファームウェアを書き込む必要があります（以下のステップ 2）。書き込み後に、ウェルカム画面とネットワーク設定画面が表示されます。
:::
### 機材のセットアップ

**ステップ 1. スクリーンとボードを接続する**
ePaper スクリーンの FPC ケーブルを、EE04 ドライバボード上のコネクタに慎重に接続します。ロック機構が確実に固定されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/Connect.gif" style={{width:800, height:'auto'}}/></div>

**ステップ 2. 画面用の HMI ファームウェアを書き込む**

EE04 ボードを USB Type-C **データ** ケーブル（電源供給と書き込みの両方に同じケーブルを使用）でパソコンに接続したまま、次の操作を行います：

1. [SenseCraft Seeedash プラットフォーム](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントにサインインします。
2. 左側メニューから **Tools** → **Firmware Flasher** を開きます。
3. デバイス一覧で **XIAO EE04 DIY Kit** を選択します。
4. ボードに接続されている画面モデルに一致するファームウェア項目を選択します。**このガイドでは 7.5" Monochrome Display 800 x 480 を使用します** — 異なるパネルを使用している場合は、ここでご自身のパネルに対応するものを選択してください。
5. **Flash** をクリックし、ポップアップウィンドウでボードのシリアルポートを選択し、書き込みが完了するまで待ちます。

:::tip
シリアルポートが表示されない場合は、ボード上の **RESET** ボタンを押してから再試行してください。また、使用している USB-C ケーブルが充電専用ではなくデータ転送に対応していることを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_7.png" style={{width:800,height:'auto'}}/></div>

**ステップ 3. ネットワーク設定モードに入る**
ファームウェアの書き込みが完了すると、ボードは自動的に再起動します。画面には最初にウェルカム画像が表示され、その後ネットワーク設定インターフェースに更新されます。これは、デバイスが Wi-Fi 接続の準備ができていることを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_1.png" style={{width:300,height:'auto'}}/></div>


### ネットワーク設定

**ステップ 4. スマートフォンで Wi-Fi を設定する**
スマートフォンで画面に表示されている QR コードをスキャンします。スマートフォン上の指示に従って、ローカル Wi-Fi の SSID とパスワードを入力し、EE04 をインターネットに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**ステップ 5. ペアコードを取得する**
ネットワーク設定が成功すると、画面が再度更新され、一意の **Pair Code** が表示されます。次のステップでこのコードが必要になります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_2.png" style={{width:300,height:'auto'}}/></div>

### プラットフォームのバインドと更新

**ステップ 6. SenseCraft Seeedash でデバイスをバインドする**
[SenseCraft Seeedash プラットフォーム](https://sensecraft.seeed.cc/hmi/device) にアクセスします。アカウントにログインします。デバイス管理セクションに移動し、「New Device」を選択します。E-ink 画面に表示されている Pair Code を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**ステップ 7. 新しいインターフェースを作成してプッシュする**     
SenseCraft Seeedash プラットフォーム上で、7.5 インチ画面に適したテンプレートを選択して新しいインターフェースを作成するか、画像をアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_5.png" style={{width:500, height:'auto'}}/></div>

**ステップ 8. 画像を適用する**
作業が完了したら、"Apply" ボタンをクリックし、自分の EE04 デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 9. 画面に表示する**
最後に、EE04 がデータを受信し、7.5 インチ画面が新しいコンテンツで更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI_4.png" style={{width:300, height:'auto'}}/></div>


## Arduino でのはじめ方

### Seeed GFX2 ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性は**ありません**。TFT ライブラリやその他の類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX2 ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### プログラムの設定と書き込み

図のように、次のメニューからサンプルスケッチに移動します：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE04 → 7.5-inch ePaper - Monochrome 800x480 → 7_5_inch_Monochrome_HelloWorld

:::note
このガイドでは、例として **7.5-inch Monochrome ePaper (800 x 480)** を使用しています。異なる画面をお持ちの場合は、代わりに `EE04` 配下の、ご自身のパネルモデルに対応するサンプルフォルダを開いてください。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo_1.png" style={{width:800, height:'auto'}}/></div>

その後、**Tools** -> **Board** -> **XIAO ESP32S3 Plus** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。 

PSRAM が有効になっていることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードを書き込みます。
これで E-paper 画面にフィードバックが表示されます！以下は HelloWorld サンプルの結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/GFX2_EE04_demo.png" style={{width:500, height:'auto'}}/></div>

## ソフトウェア概要

### XIAO ePaper Display Board(ESP32-S3) - EE04 上のユーザーボタン

このセクションでは、Arduino を使用してボタンの状態を読み取り、ボタン押下に応答する方法を説明します。
すべてのボタンはアクティブローであり、押されているときは LOW、離されているときは HIGH を読み取ります。
基本的なボタン読み取りの例
この例では、ボタン押下を検出し、シリアルモニタにメッセージを出力する方法を示します。

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }

  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

### XIAO ePaper Display Board(ESP32-S3) - EE04 上のユーザーバッテリー

バッテリー駆動時には：

- リフレッシュの合間にデバイスは自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定ではフル充電で通常 3 か月程度）

- バッテリーレベルが 20% 未満になると、デバイスは右上隅にバッテリー残量低下アイコンを表示します

:::tip
自分でバッテリー電圧を読み取るコードを書きたい場合は、analogRead() 関数の前に 10ms のディレイを追加すると、より正確になります。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04battery.jpg" style={{width:700, height:'auto'}}/></div>

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

- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 回路図](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 Grabcad 3D ファイル](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
