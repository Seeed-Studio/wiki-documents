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
  date: 09/25/2025
  author: Jason
createdAt: '2025-09-25'
updatedAt: '2026-01-20'
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

**XIAO ESP32-S3** Plus を搭載したディスプレイボード EE04 は、**24 ピン**および **50 ピン**の ePaper ディスプレイの両方をサポートします。JST 2.0 mm バッテリーコネクタ（電源スイッチ付き）、内蔵充電 IC を備え、1 つのリセットボタンと 3 つのユーザーボタンが付属しています。デジタルサイネージ、電子ラベル、携帯型情報ボードなど、低消費電力の ePaper プロジェクトに最適です。

### 特長

- **XIAO ESP32-S3 Plus 搭載:** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **多用途なディスプレイ対応:** 幅広い ePaper スクリーンに対応し、24 ピンおよび 50 ピンインターフェースの両方をサポート、ジャンパキャップで簡単に切り替え可能です。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン:** 1 個のリセットボタンと 3 個のユーザープログラマブルボタンを備え、プロジェクトの開発を加速し、柔軟なカスタマイズ機能を提供します。

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
      <td>XIAO ESP32-S3 Plus</td>
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
            <th>ePaper Display Board EE04</th>
<th><a href="https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board/">ePaper ブレイクアウト</a></th>
<th><a href="https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2/">ePaper ドライバボード</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>プロセッサ</th>
            <td>XIAO ESP32-S3 Plus</td>
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

### 応用例

- **スマートホームダッシュボード**: 天気情報、カレンダーイベント、各種スマートホームデバイスからの通知など、リアルタイム情報を表示します。
- **エネルギーモニタリング**: スマートメーターからの電力消費データを表示し、家庭でのエネルギー使用状況をより効率的に把握・管理できるようにします。
- **セキュリティアラート**: 人感検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **スマートサーモスタットディスプレイ**: 温度や湿度レベル、スマートサーモスタットの制御設定を表示します。
- **デジタルフォトフレーム**: スマートホームネットワーク上の画像を表示できる、WiFi 対応デジタルフォトフレームを作成します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

このバージョンの XIAO ePaper Display Board(ESP32-S3) - EE04 は、NFC 機能をサポートしていません。

:::

### 対応 ePaper

#### 24 ピンコネクタ

- [1.54-inch ePaper - モノクロ 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - フレキシブルモノクロ 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - 4 色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - モノクロ 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - 4 色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - モノクロ 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - モノクロ 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - モノクロ 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - モノクロ 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-inch ePaper - 3 色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを必ず設定してください。

- 24 Pin ePaper ディスプレイの場合 → ジャンパを 24 Pin に設定します

⚠️ ジャンパ設定を誤ると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

#### 50 ピンコネクタ

- [7.3-inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを必ず設定してください。
- 50 Pin ePaper ディスプレイの場合 → ジャンパを 50 Pin に設定します

⚠️ ジャンパ設定を誤ると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

## ソフトウェア概要

### Seeed GFX ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリや類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

スクロールダウンして、このリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、いくつかのコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

そのため、ご使用のデバイスやコンポーネントの種類を必ず確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/38.png" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

基本的なサンプルが 4 つあります。好みの基本サンプルを開きます。

1. Bitmap: ビットマップ画像を表示します。
2. Clock: アナログ時計を表示します。
3. Clock_digital: デジタル時計を表示します。
4. Shape: さまざまなサイズの文字や図形をランダムに表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## 使用開始

ここでは、5.83 インチディスプレイを例として使用します。手順はすべての 24 ピンスクリーンで同じで、違いはドライバ内で適切な画面サイズを選択する点だけです。

**新しい "driver.h" ファイル**を作成し、先ほどのコードを貼り付けます。コードは次のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/40.png" style={{width:1000, height:'auto'}}/></div>

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.86 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

その後、**Tools** -> **Board** -> **XIAO ESP32S3** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に移動します。次に **Upload** をクリックしてコードを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.png" style={{width:1000, height:'auto'}}/></div>

これで、ePaper 画面にフィードバックが表示されます！以下は Helloworld サンプルの結果です。

:::tip
⚠️ 注意：ePaper ケーブルの向き
ePaper ディスプレイを XIAO ePaper Display Board に接続する際は、FPC ケーブルが正しい向きで挿入されていることを確認してください。

⚠️ コネクタを逆向きにしないでください！ケーブルを上下逆さまに挿入すると、ePaper が表示されなくなったり、画面やボードを破損したりする可能性があります。
下図は正しい接続例です：
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.jpg" style={{width:500, height:'auto'}}/></div>

### XIAO ePaper Display Board(ESP32-S3) - EE04 のユーザーボタン

EE04 には、さまざまな制御用途に使用できるユーザー設定可能なボタンが 3 つ搭載されています。このセクションでは、Arduino を使用してボタンの状態を読み取り、ボタン押下に応答する方法を説明します。

EE04 では、3 つのボタンは XIAO ESP32-S3 Plus に次のように接続されています：

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


すべてのボタンはアクティブ Low であり、押されているときは LOW、離されているときは HIGH を読み取ります。

基本的なボタン読み取りの例

この例では、ボタン押下を検出し、シリアルモニタにメッセージを出力する方法を示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

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

### XIAO ePaper Display Board(ESP32-S3) - EE04 のバッテリー使用

バッテリー駆動時：

- デバイスはリフレッシュの合間に自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電時、通常は約 3 か月）

- バッテリー残量が 20% 未満になると、デバイスは右上隅にバッテリー低下アイコンを表示します

:::tip
自分でコードを書いてバッテリー電圧を読み取りたい場合は、`analogRead()` 関数の前に 10ms のディレイを追加すると、より正確になります。
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

### XIAO ePaper Display Board (ESP32-S3) - EE04 にカスタム画像を表示する

GFX ライブラリ内で Bitmap のサンプルを見つけて選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image1.png" style={{width:700, height:'auto'}}/></div>

プロジェクトディレクトリ内に driver.h ファイルを作成する必要がある点に注意してください。[詳細については、クリックして詳しく見る。](#install-seeed-gfx-library).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image2.png" style={{width:700, height:'auto'}}/></div>

次に、https://sensecraft.seeed.cc/hmi/tools/dither にある SenseCraft HMI Tool にアクセスし、表示したい画像をアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image3m.png" style={{width:700, height:'auto'}}/></div>

画像をアップロードしたら、C 配列（画像データ）を生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image4.png" style={{width:700, height:'auto'}}/></div>

配列の内容をコピーします。このとき、16 進データのみをコピーし、不要な文字を含めないよう注意してください。

:::tip 
表示される色が元のデザインと比べて反転して見える場合は、コードを生成する前に HMI ツールで Invert Colors オプションを選択してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image5.png" style={{width:700, height:'auto'}}/></div>

Arduino スケッチ内の image.c または image.h ファイルにある既存の配列を、コピーした配列で上書きします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image6.png" style={{width:700, height:'auto'}}/></div>

最後に、プログラムを XIAO ESP32-S3 に書き込みます。これで、ePaper 画面にカスタム画像が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image7.png" style={{width:700, height:'auto'}}/></div>

## リソース

- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 回路図](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 Grabcad 3D ファイル](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
