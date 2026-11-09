---
description: XIAO ePaper Display Board(nRF52840) - EN05 入門ガイド
sku: 100085486
title: EN05 入門ガイド
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.webp
slug: /epaper_en05
last_update:
  date: 10/20/2026
  author: Nemo
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/ja/epaper_en05/
updatedAt: '2026-10-20'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EN05 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO nRF52840 Plus** を搭載したディスプレイボード EN05 は、幅広い 24 ピン ePaper ディスプレイをサポートします。追加センサー接続用の拡張 IO ポート、電源スイッチ付き JST 2.0 mm バッテリーコネクタ、内蔵充電 IC を備え、ユーザーボタンを 3 個搭載しています。スマートネームバッジ、電子棚札、会議室サイネージ、携帯型インフォメーションボードなど、超低消費電力の ePaper プロジェクトに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg" style={{width:800, height:'auto'}}/></div>

### 特長

- **XIAO nRF52840 Plus 搭載:** 対応する ePaper ディスプレイに接続するだけですぐに動作し、オンボード NFC インターフェースにより、タップでの設定、ペアリング、コンテンツ更新のトリガーが可能です。
- **多用途なディスプレイ対応:** 幅広い 24 ピン ePaper ディスプレイと互換性があり、さまざまなプロジェクト要件に対応する 24 ピン ePaper ディスプレイをサポートします。
- **拡張 IO ポート:** 温湿度センサーなどの追加センサーを接続でき、機能拡張が可能です。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **幅広いソフトウェア互換性:** Arduino でも PlatformIO でも、お好みの開発環境で使用でき、このドライバボードはプロジェクトに最大限の柔軟性を提供します。

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
      <th>無線</th>
      <td>Bluetooth 5.0</td>
    </tr>
    <tr>
      <th>ePaper コネクタ</th>
      <td>SPI FPC 24-Pin 0.5mm</td>
    </tr>
    <tr>
      <th>バッテリーコネクタ</th>
      <td>JST 2.0mm (3.7V リチウムバッテリー)</td>
    </tr>
    <tr>
      <th>スイッチ</th>
      <td>ハードウェア電源スライドスイッチ</td>
    </tr>
    <tr>
      <th>ボタン</th>
      <td>1x リセットボタン（側面実装）<br />3x ユーザーボタン（側面実装）</td>
    </tr>
    <tr>
      <th>PCB 厚さ</th>
      <td>1.2mm</td>
    </tr>
  </tbody>
</table>

### ePaper ボード選定ガイド

<table>
    <thead>
        <tr>
            <th>製品</th>
            <th>ePaper Display Board EN05</th>
<th><a href="https://wiki.seeedstudio.com/ja/epaper_EN04/">ePaper Display Board EN04</a></th>
<th><a href="https://wiki.seeedstudio.com/ja/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/ja/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>プロセッサ</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO シリーズ</td>
            <td>XIAO シリーズ</td>
        </tr>
        <tr>
            <th>対応 ePaper ディスプレイ</th>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper<br />50 Pin ePaper</td>
            <td>24 Pin ePaper</td>
            <td>24 Pin ePaper</td>
        </tr>
        <tr>
            <th>ePaper コネクタ</th>
            <td>FPC 24 Pin, 0.5mm</td>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>バッテリーコネクタ</th>
            <td>JST 2.0mm</td>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>スイッチ</th>
            <td>バッテリー電源 ON/OFF</td>
            <td>バッテリー電源 ON/OFF</td>
            <td>/</td>
            <td>バッテリー電源 ON/OFF</td>
        </tr>
        <tr>
            <th>ボタン</th>
            <td>1x リセットボタン<br />3x ユーザーボタン</td>
            <td>1x リセットボタン<br />3x ユーザーボタン</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>拡張 IO ポート</th>
            <td>追加センサーの接続</td>
            <td>/</td>
            <td>その他コントローラの接続</td>
            <td>追加センサーの接続</td>
        </tr>
    </tbody>
</table>

### 応用例

- **スマートネームバッジ**: 超低消費電力のカンファレンス／社員バッジを作成し、名前、スケジュール、QR コードなどを表示できます。NFC タップでコンテンツ更新を設定できます。
- **電子棚札**: 1 回の充電で数か月動作し、価格変更時のみ更新されるバッテリー駆動の価格タグを構築できます。
- **会議室サイネージ**: 会議室の外に、部屋のステータス、予約情報、今後のイベントを、最小限の電力消費で表示します。
- **環境センサーダッシュボード**: 拡張 IO ポートと温湿度センサーを組み合わせ、常時表示の ePaper 画面にリアルタイムの環境データを表示します。
- **携帯型インフォメーションボード**: 軽量なバッテリー駆動ディスプレイを持ち運び、タスクリスト、メモ、参照情報などを、電源が切れても読みやすい状態で表示できます。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/HardwareOverview_EN05.png" style={{width:900, height:'auto'}}/></div>

### 対応 ePaper ディスプレイ

EN05 は、以下の 24 ピン SPI ePaper ディスプレイをサポートします。

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Monochrome 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [2.13-inch ePaper - Quadruple Color 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### ユーザーボタン

EN05 には、さまざまな制御用途に使用できる 3 つのユーザープログラマブルボタンが搭載されています。すべてのボタンはアクティブ Low であり、押されているときは LOW、離されているときは HIGH を読み取ります。

EN05 では、3 つのボタンは次のように XIAO nRF52840 Plus に接続されています。

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
      <td>D9</td>
    </tr>
  </tbody>
</table>

:::note
ユーザーボタンはプログラム可能であり、ページ切り替え、モード選択、ePaper プロジェクト内で特定のアクションをトリガーするなど、さまざまな機能に設定できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/EN05_Buttons.png" style={{width:700, height:'auto'}}/></div>

### バッテリーコネクタ

EN05 は JST 2.0 mm バッテリーコネクタと内蔵充電 IC を備えており、バッテリー駆動の低消費電力 ePaper プロジェクトに適しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/battery.png" style={{width:700, height:'auto'}}/></div>

## Arduino ではじめる

### Seeed GFX2 ライブラリのインストール

EN05 向けのすべての ePaper サンプルは、[Supported ePaper Displays](#対応-epaper-ディスプレイ) セクションに記載されているすべての ePaper ディスプレイをサポートする **Seeed_GFX2** Arduino ライブラリ上に構築されています。以下のサンプルでは、**7.5-inch Monochrome ePaper (800 x 480)** を例として使用します。

**ステップ 1. Seeed_GFX2 ライブラリをダウンロードする**

[Seeed_GFX2 GitHub リポジトリ](https://github.com/Seeed-Studio/Seeed_GFX2) にアクセスし、緑色の **Code** ボタンをクリックして **Download ZIP** を選択し、ライブラリをコンピュータに保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2. ライブラリを Arduino IDE に追加する**

Arduino IDE を開き、**Sketch → Include Library → Add .ZIP Library...** に移動し、先ほどダウンロードした ZIP ファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### プログラムの設定と書き込み

1. **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/Arduino_IDE_01.png" style={{width:800, height:'auto'}}/></div>

2. まだ XIAO nRF52840 ボードサポートを設定していない場合は、**Tools → Board → Boards Manager...** を開き、**Seeed nRF52 Boards** を検索してインストールします。これは通常の **Seeed nRF52 Boards** パッケージであり、*Seeed nRF52 mbed-enabled Boards* ではないことに注意してください。詳細なセットアップ手順については、[XIAO BLE Software Setup ガイド](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup) を参照してください。

3. **Tools → Board** で **Seeed XIAO nRF52840 Plus** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:400, height:'auto'}}/></div>

4. ボードを USB Type-C で接続し、対応するシリアルポートを選択して **Upload** をクリックします。書き込みが完了すると、ePaper がリフレッシュされ、デモが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.png" style={{width:300, height:'auto'}}/></div>

:::note
上記のサンプルパスでは、7.5 インチモノクロディスプレイを例として使用しています。他の対応ディスプレイの場合は、**XIAO ePaper Display Board - EN05** 配下からお使いのスクリーンモデルに一致するフォルダを選択してください。各スクリーンには **HelloWorld**、**Bitmap_&lt;screen_model&gt;**（例：`Bitmap_7_5_inch_Monochrome`）、**Custom_Demo** のサンプルが同梱されています。
:::

## ソフトウェア概要

#### 基本的なボタン読み取りの例

このサンプルでは、3 つすべてのボタン押下を検出し、シリアルモニタにメッセージを出力する方法を示します。

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (from the EN05 schematic V1.11)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D9
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 9;

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

## リソース
- **[PDF]** [XIAO ePaper Display Board Ex05 回路図](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN05/XIAO_ePaper_Display_Board_EN05_V1.11_SCH&PCB_260420.zip)

## トラブルシューティング

**Q1: 電源投入後も ePaper スクリーンに何も表示されません。**

- **FPC ケーブルの向きを確認してください。** ePaper の FPC ケーブルが正しい向きで挿入されていることを確認してください。コネクタを逆向きに接続すると、画面が真っ白になったり、ディスプレイが破損する可能性があります。
- **RESET ボタンを押してください。** ファームウェアの書き込み後や電源接続後に、リセットボタンを 1 回押して画面のリフレッシュを行ってください。

**Q2: 表示が文字化けしたり、一部だけ更新されます。**

- **スクリーンモデルの選択を確認してください。** Arduino のサンプル内で、スクリーンのサイズとカラータイプを含む、正確なスクリーンモデルを選択していることを確認してください。誤ったモデルを選択すると、表示が正しく行われません。
- **フルリフレッシュが完了するまで待ってください。** ePaper ディスプレイはフルリフレッシュサイクルを使用します。リフレッシュ中に部分的な更新や残像が見えるのは正常であり、サイクル完了後にクリアされます。

**Q3: バッテリー使用時にボードの電源が入りません。**

- **電源スイッチを確認してください。** バッテリー電源スイッチを ON の位置にスライドしてください。スイッチが OFF の場合、ボードはバッテリーから電源を取得しません。
- **JST コネクタの極性を確認してください。** JST 2.0 mm バッテリーコネクタが正しい極性で接続されていることを確認してください。バッテリーの極性が逆になると、ハードウェアが破損する可能性があります。接続前にコネクタの +/− 表示を確認してください。
- **バッテリーを充電してください。** バッテリーが完全に放電している場合、ボードが起動しないことがあります。USB Type-C を接続してバッテリーを充電し、再度お試しください。

**Q4: コンピュータがボードを認識せず、シリアルポートが表示されません。**

- **RESET ボタンを押してください。** ボードを USB 接続した状態で RESET ボタンを押して離し、USB ポートの再認識を行ってから再度お試しください。
- **データ通信対応の USB ケーブルを使用してください。** 一部の USB ケーブルは電源供給のみで、データ転送に対応していません。動作確認済みのデータ通信対応ケーブルに変更してください。
- **USB ポートを確認してください。** コンピュータの別の USB ポートを試してください。一部のポートでは電源やドライバに問題がある場合があります。

**Q5: Arduino IDE での書き込みに失敗します。**

- **正しいボードを選択してください。** **Tools** → **Board** に進み、**Seeed XIAO nRF52840 Plus** が選択されていることを確認してください。他の XIAO ボードバリアントは選択しないでください。
- **正しいポートを選択してください。** **Tools** → **Port** に進み、ボードに対応するシリアルポートを選択してください。ポートが表示されない場合は、USB ケーブルと接続状態を確認してください。
- **必要に応じてブートローダーモードに入ってください。** 書き込みが継続的に失敗する場合は、RESET ボタンを素早く 2 回押してブートローダーモードに入り、ポートを再選択してから再度書き込みを行ってください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、サポートをご提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
