---
description: XIAO ePaper Display Board(nRF52840) - EN04 のはじめに
title: EN04 のはじめに
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
sku: 100003489,E25120101
last_update:
  date: 10/8/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/ja/epaper_EN04/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EN04 のはじめに

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

**XIAO nRF52840** Plus を搭載したディスプレイボード EN04 は、**24 ピン**および **50 ピン**の ePaper ディスプレイの両方をサポートします。JST 2.0 mm バッテリーコネクタと電源スイッチ、内蔵充電 IC を備え、1 つのリセットボタンと 3 つのユーザーボタンが付属しています。デジタルサイネージ、電子ラベル、携帯型情報ボードなど、低消費電力の ePaper プロジェクトに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_1.jpg" style={{width:800, height:'auto'}}/></div>

### 特長

- **XIAO nRF52840 Plus 搭載：** 対応する ePaper ディスプレイに接続するだけですぐに動作します。
- **多用途なディスプレイ対応：** 幅広い ePaper スクリーンに対応し、24 ピンおよび 50 ピンインターフェースの両方をサポート、ジャンパキャップで簡単に切り替えできます。
- **スイッチ付き BAT コネクタ：** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン：** 1 個のリセットボタンと 3 個のユーザープログラマブルボタンを備え、プロジェクトの開発を加速し、柔軟なカスタマイズ機能を提供します。

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
      <th>電源</th>
      <td>- 3.7V リチウムバッテリー<br />- USB Type-C</td>
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
            <th>拡張 IO ポート</th>
            <td>/</td>
            <td>他のコントローラとの接続</td>
            <td>追加センサーとの接続</td>
        </tr>
    </tbody>
</table>


### アプリケーション

- **スマートホームダッシュボード**：天気情報、カレンダーイベント、各種スマートホームデバイスからの通知など、リアルタイム情報を表示します。
- **エネルギーモニタリング**：スマートメーターからの電力消費データを表示し、家庭でのエネルギー使用状況をより効率的に把握・管理できるようにします。
- **セキュリティアラート**：モーション検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **スマートサーモスタットディスプレイ**：温度や湿度レベル、スマートサーモスタットの制御設定を表示します。
- **デジタルフォトフレーム**：スマートホームネットワーク上の画像を表示できる、WiFi 対応デジタルフォトフレームを作成します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

### 対応 ePaper ディスプレイ

#### 24 ピンコネクタ

- [1.54-inch ePaper - モノクロ 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - モノクロ 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [2.13-inch ePaper - 4 色 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - モノクロ 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - 4 色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - モノクロ 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - モノクロ 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - モノクロ 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - モノクロ 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-inch ePaper - 3 色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを必ず設定してください：

- 24 Pin ePaper ディスプレイの場合 → ジャンパを 24 Pin に設定

⚠️ ジャンパ設定が誤っていると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

#### 50 ピンコネクタ

- [7.3-inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを必ず設定してください：

- 50 Pin ePaper ディスプレイの場合 → ジャンパを 50 Pin に設定

⚠️ ジャンパ設定が誤っていると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

### ユーザーボタン

EN04 には、さまざまな制御用途に使用できる 3 つのユーザープログラマブルボタンが搭載されています。すべてのボタンはアクティブ Low であり、押されているときは LOW、離されているときは HIGH を読み取ります。

EN04 では、3 つのボタンは次のように XIAO nRF52840 Plus に接続されています：

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
      <td>D1 / A1</td>
      <td>D2 / A2</td>
      <td>D4 / A4</td>
    </tr>
  </tbody>
</table>

:::note
ユーザーボタンはプログラム可能であり、ページ切り替え、モード選択、ePaper プロジェクト内で特定のアクションをトリガーするなど、さまざまな機能に設定できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.png" style={{width:500, height:'auto'}}/></div>

### バッテリーコネクタ

EN04 は JST 2.0 mm バッテリーコネクタと内蔵充電 IC を備えており、バッテリー駆動の低消費電力 ePaper プロジェクトに適しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.png" style={{width:600, height:'auto'}}/></div>

## Arduino ではじめる

### Seeed GFX2 ライブラリのインストール

EN04 用のすべての ePaper サンプルは **Seeed_GFX2** Arduino ライブラリ上に構築されており、[Supported ePaper Displays](#対応-epaper-ディスプレイ) セクションに記載されているすべての ePaper ディスプレイをサポートします。以下のサンプルでは、**7.5-inch モノクロ ePaper (800 x 480)** を例として使用します。

**ステップ 1. Seeed_GFX2 ライブラリをダウンロード**

[Seeed_GFX2 GitHub リポジトリ](https://github.com/Seeed-Studio/Seeed_GFX2) にアクセスし、緑色の **Code** ボタンをクリックして **Download ZIP** を選択し、ライブラリをコンピュータに保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2. ライブラリを Arduino IDE に追加**

Arduino IDE を開き、**Sketch → Include Library → Add .ZIP Library...** に移動し、先ほどダウンロードした ZIP ファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### プログラムの設定と書き込み

1. **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN04 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_01.png" style={{width:300, height:'auto'}}/></div>

2. **Tools → Board** で **Seeed XIAO nRF52840 Plus** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:800, height:'auto'}}/></div>

3. ボードを USB Type-C で接続し、対応するシリアルポートを選択して **Upload** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.png" style={{width:800, height:'auto'}}/></div>

:::note
上記のサンプルパスでは、7.5 インチモノクロディスプレイを例として使用しています。他の対応ディスプレイの場合は、**XIAO ePaper Display Board - EN04** 配下からお使いのスクリーンモデルに一致するフォルダを選択してください。各スクリーンには **HelloWorld**、**Bitmap**、**Custom_Demo** のサンプルが同梱されています（7.5 インチ Tri-Color のみ **HelloWorld** と **Custom_Demo** が同梱されています）。
:::

## ソフトウェア概要

#### 基本的なボタン読み取りの例

このサンプルでは、3 つすべてのボタン押下を検出し、その結果をシリアルモニタに出力する方法を示します。

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (verified on hardware)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D4 / A4 / P0.04
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 4;

void setup() {
  // Initialize serial port
  Serial.begin(9600);
  while (!Serial) delay(10);

  // Configure all button pins as input with internal pull-up
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Three-Button Detection Program Started");
  Serial.println("Press KEY1 / KEY2 / KEY3 to see output...");
}

// Helper function: check if a button is pressed (with debounce)
bool isButtonPressed(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(50); // debounce
    if (digitalRead(pin) == LOW) {
      // Wait for release to prevent repeated triggers
      while (digitalRead(pin) == LOW) {
        delay(10);
      }
      return true;
    }
  }
  return false;
}

void loop() {
  if (isButtonPressed(KEY1_PIN)) {
    Serial.println("Hello. This is KEY1");
  }
  if (isButtonPressed(KEY2_PIN)) {
    Serial.println("Hello. This is KEY2");
  }
  if (isButtonPressed(KEY3_PIN)) {
    Serial.println("Hello. This is KEY3");
  }

  delay(10);
}
```

#### バッテリー電圧読み取りの例

このサンプルでは、バッテリー電圧を読み取り、その値をシリアルモニタに出力する方法を示します。

:::tip
バッテリー電圧を読み取るコードを自分で記述する場合、analogRead() 関数の前に 10ms のディレイを追加すると、より正確になります。
:::

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

#define VOLTAGE_PIN A0 //P0.02
#define ADC_ENABLE_PIN A5 //P0.05

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

## トラブルシューティング

**Q1: 電源を入れても ePaper スクリーンに何も表示されません。**

- **DIY キットにはファームウェアがプリインストールされていません。** XIAO EN04 DIY キットには ePaper 用ファームウェアが書き込まれていないため、初回起動時に画面が真っ白または真っ黒であるのは正常です。
- **FPC ケーブルの向きを確認してください。** ePaper の FPC ケーブルが正しい向きで挿入されていることを確認してください。コネクタを逆向きに接続すると、画面が表示されないだけでなく、ディスプレイを破損する可能性があります。
- **RESET ボタンを押してください。** ファームウェアを書き込んだ後、または電源を接続した後に、RESET ボタンを一度押して画面のリフレッシュをトリガーしてください。

**Q2: 表示が乱れたり、一部だけ更新されます。**

- **ジャンパキャップの設定を確認してください。** EN04 は 24 ピンおよび 50 ピンの ePaper ディスプレイの両方をサポートしており、ジャンパキャップは使用するスクリーンタイプに合わせる必要があります。24 ピンのスクリーンには 24 Pin、50 ピンのスクリーンには 50 Pin に設定してください。
- **スクリーンモデルの選択を確認してください。** Arduino のサンプル内で、スクリーンのモデル（サイズとカラータイプ）が正しく選択されていることを確認してください。誤ったモデルを選択すると、表示が正しく行われません。
- **フルリフレッシュが完了するまで待ってください。** ePaper ディスプレイはフルリフレッシュサイクルを使用するため、更新中に一時的な乱れや残像が見えるのは正常であり、サイクル完了後に解消されます。

**Q3: バッテリー使用時にボードの電源が入りません。**

- **電源スイッチを確認してください。** バッテリー電源スイッチを ON 位置にスライドしてください。スイッチが OFF の場合、ボードはバッテリーから電源を取得しません。
- **JST コネクタの極性を確認してください。** JST 2.0 mm バッテリーコネクタが正しい極性で接続されていることを確認してください。バッテリーの極性が逆になると、ハードウェアを破損する可能性があります。バッテリーを接続する前に、コネクタの +/− 表示を必ず確認してください。
- **バッテリーを充電してください。** バッテリーが完全に放電している場合、ボードが起動しないことがあります。USB Type-C を接続してバッテリーを充電し、再度お試しください。

**Q4: Seeedash Firmware Flasher がボードを検出できません。**

- **RESET ボタンを押してください。** ボードを USB 接続した状態で RESET ボタンを押して離し、USB ポートを再認識させてから、再度検出を試してください。
- **データ通信対応の USB ケーブルを使用してください。** 一部の USB ケーブルは電源供給のみで、データ転送に対応していません。動作確認済みのデータ通信対応ケーブルに交換してください。
- **USB ポートを確認してください。** PC の別の USB ポートを試してください。一部のポートでは、電源やドライバに問題がある場合があります。

**Q5: Arduino IDE での書き込みに失敗します。**

- **正しいボードを選択してください。** **Tools** → **Board** に進み、**Seeed XIAO nRF52840 Plus** が選択されていることを確認してください。他の XIAO ボードバリエーションは選択しないでください。
- **正しいポートを選択してください。** **Tools** → **Port** に進み、ボードに対応するシリアルポートを選択してください。ポートが表示されない場合は、USB ケーブルと接続状態を確認してください。
- **必要に応じてブートローダーモードに入ってください。** 書き込みが継続的に失敗する場合は、RESET ボタンを素早く 2 回押してブートローダーモードに入り、ポートを再選択してから再度書き込みを行ってください。

## リソース
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
