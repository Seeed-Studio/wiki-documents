---
description: XIAO ePaper Display Board(nRF52840) - EN04 入門ガイド
title: XIAO ePaper Display Board(nRF52840) - EN04 入門ガイド
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
sku: 100003489,E25120101
last_update:
  date: 11/25/2025
  author: Allen
createdAt: '2025-09-25'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/epaper_EN04/
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

**XIAO nRF52840** Plus を搭載した EN04 ディスプレイボードは、**24 ピン**および **50 ピン**の ePaper ディスプレイの両方をサポートします。JST 2.0 mm バッテリーコネクタ（電源スイッチ付き）、内蔵充電 IC、NFC 機能を備え、1 つのリセットボタンと 3 つのユーザーボタンが付属しています。デジタルサイネージ、電子ラベル、携帯情報ボードなどの低消費電力 ePaper プロジェクトに最適です。

### 特長

- **XIAO nRF52840 Plus 搭載：** 対応する ePaper ディスプレイを接続するだけで、すぐに動作します。
- **多用途なディスプレイ対応：** 幅広い ePaper スクリーンに対応し、24 ピンおよび 50 ピンインターフェースの両方をサポート、ジャンパキャップで簡単に切り替えできます。
- **スイッチ付き BAT コネクタ：** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **使いやすいボタン：** 1 個のリセットボタンと 3 個のユーザープログラマブルボタンを備え、プロジェクトの迅速化や機能のカスタマイズに柔軟に対応できます。

### 仕様

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Processor</th>
      <td>XIAO nRF52840 Plus</td>
    </tr>
    <tr>
      <th>ePaper Connector</th>
      <td>FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm</td>
    </tr>
    <tr>
      <th>Battery Connector</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>Switch</th>
      <td>バッテリー電源 ON/OFF</td>
    </tr>
    <tr>
      <th>Power Supply</th>
      <td>- 3.7V リチウムバッテリー<br />- USB Type-C</td>
    </tr>
    <tr>
      <th>Button</th>
      <td>- 1x リセットボタン<br />- 3x ユーザーボタン</td>
    </tr>
  </tbody>
</table>

### ePaper ボード選定ガイド

<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>ePaper Display Board EN04</th>
<th><a href="https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processor</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO シリーズ</td>
            <td>XIAO シリーズ</td>
        </tr>
        <tr>
            <th>Compatible ePaper Displays</th>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper Connector</th>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>Battery Connector</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>Switch</th>
            <td>バッテリー電源 ON/OFF</td>
            <td>/</td>
            <td>バッテリー電源 ON/OFF</td>
        </tr>
        <tr>
            <th>Button</th>
            <td>1x リセットボタン<br />3x ユーザーボタン</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>Extension IO Port</th>
            <td>/</td>
            <td>他のコントローラとの接続</td>
            <td>追加センサーとの接続</td>
        </tr>
    </tbody>
</table>

### 応用例

- **スマートホームダッシュボード**：天気情報、カレンダーイベント、各種スマートホームデバイスからの通知などをリアルタイムに表示します。
- **エネルギーモニタリング**：スマートメーターからの電力消費データを表示し、家庭でのエネルギー使用状況を効率的に把握・管理できるようにします。
- **セキュリティアラート**：モーション検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **スマートサーモスタット表示**：温度や湿度の値、スマートサーモスタットの制御設定などを表示します。
- **デジタルフォトフレーム**：スマートホームネットワーク上の画像を表示できる、WiFi 対応デジタルフォトフレームを作成します。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

<!-- :::tip

This version XIAO ePaper Display Board(nRF52840) - EN04 does not support NFC functionality.

::: -->

### 対応 ePaper

#### 24 ピンコネクタ

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochorm 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochorm 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochorm 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochorm 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochorm 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5-inch ePaper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを設定してください：

- 24 Pin ePaper ディスプレイの場合 → ジャンパを 24 Pin に設定

⚠️ ジャンパ設定が間違っていると、ePaper が表示されなかったり、異常な表示になることがあります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

#### 50 ピンコネクタ

- [7.3-inch Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.jpg" style={{width:600, height:'auto'}}/></div>
:::tip
XIAO ePaper Display Board を使用する際は、ePaper ディスプレイの種類に応じてジャンパを設定してください：
- 50 Pin ePaper ディスプレイの場合 → ジャンパを 50 Pin に設定

⚠️ ジャンパ設定が間違っていると、ePaper が表示されなかったり、異常な表示になることがあります。電源を入れる前に、必ずジャンパ位置を再確認してください。

:::

## ソフトウェア概要

### Seeed GFX ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。すでに TFT ライブラリや類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

ページをスクロールして、このリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、いくつかのコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

そのため、ご使用のデバイスやコンポーネントの種類を必ず確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/6.jpg" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** を開き、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

基本的なサンプルが 4 つあります。好みの基本サンプルを開いてください：

1. Bitmap: ビットマップ画像を表示します。
2. Clock: アナログ時計を表示します。
3. Clock_digital: デジタル時計を表示します。
4. Shape: さまざまなサイズの文字や図形を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## セットアップ開始

ここでは例として 7.5 インチディスプレイを使用します。手順はすべての 24 ピン画面で同じであり、違いはドライバ内で適切な画面サイズを選択する点だけです。

**新しい "driver.h" ファイル**を作成し、その中に先ほどのコードを貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN04
```

その後、**Tools** -> **Board** -> **XIAO ESP32S3** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。次に **Upload** をクリックしてコードを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/7.jpg" style={{width:1000, height:'auto'}}/></div>

これで、ePaper 画面上にフィードバックが表示されます！以下は Helloworld サンプルの結果です。（何も表示されない場合は、リセットボタンを押してください）

:::tip
⚠️ 注意: ePaper ケーブルの向き
ePaper ディスプレイを XIAO ePaper Display Board に接続する際は、FPC ケーブルが正しい向きで挿入されていることを確認してください。

⚠️ コネクタの向きを逆にしないでください！ケーブルを上下逆さまに挿入すると、ePaper が表示できなくなったり、画面やボードを損傷したりするおそれがあります。
下の画像は正しい接続方法を示しています：
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.jpg" style={{width:500, height:'auto'}}/></div>

### XIAO ePaper Display Board(nRF52840) - EN04 のユーザーボタン

EN04 には、さまざまな制御用途に使用できるユーザープログラマブルボタンが 3 つ搭載されています。このセクションでは、Arduino を使用してボタン状態を読み取り、ボタン押下に応答する方法を示します。

EN04 では、3 つのボタンは XIAO nRF52840 Plus に接続されています：

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

このサンプルでは、ボタン押下を検出し、シリアルモニタにメッセージを出力する方法を示します。

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

### XIAO ePaper Display Board(nRF52840) - EN04 のバッテリー機能

バッテリー駆動時：

- リフレッシュの合間にデバイスは自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電から通常 3 か月程度）

- バッテリーレベルが 20% 未満になると、デバイスは右上隅にバッテリー残量低下アイコンを表示します

:::tip
自分でバッテリー電圧を読み取るコードを書きたい場合は、`analogRead()` 関数の前に 10ms のディレイを入れると、より正確になります。
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

当社の製品をお選びいただきありがとうございます！製品をできるだけ快適にご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
