---
description: Grove - RGB LED スティック (10 - WS2813 Mini)
title: Grove - RGB LED スティック (10 - WS2813 Mini)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-RGB_LED_Stick-10-WS2813_Mini
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg" alt="pir" width={600} height="auto" /></p>

このスティックには10個のフルカラーRGB LEDを統合しており、1つの信号ピンだけで10個すべてのLEDを簡単に制御できます。すべてのLEDはWS2813 Miniであり、これはインテリジェント制御と高コストパフォーマンスを備えたLEDです。
さらに、WS2813は信号断点連続伝送をサポートしており、1つのLEDが故障しても他のLEDを引き続き使用することができます。

この小さなスティックを使用して、何十万もの光の効果を作り出すことができます。これがあなたにもっと楽しさをもたらすことを願っています。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html)

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED スティック (10 WS2813 Mini) | 初版                                                                                               | 2018年11月      |

## 特徴

- WS2813B IC、3535 LED
- インテリジェント逆接続保護
- 各ピクセルのグレーレベルは256で、「256*256*256=16777216」のフルカラー表示を実現
- リフレッシュ周波数は2KHzに達する
- シリアルカスケードインターフェース、データ受信とデコードは1本の信号線に依存
- デュアル信号線バージョン、信号断点連続伝送

### 信号断点連続伝送

<!-- ![](https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg" alt="pir" width={600} height="auto" /></p>

隣接する2つ以上のLEDが故障していない限り、残りのLEDは正常に動作します。



## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|-25℃ ~ +85℃|
|保存温度|-40℃ ~ +105℃|
|RGBチャンネル定電流|16mA|
|インターフェース|デジタル|
|サイズ|長さ: 80mm 幅: 10mm 高さ: 10mm| 
|重量|3.7g|
|パッケージサイズ|長さ: 150mm 幅: 100mm 高さ: 25mm|
|総重量|13g|


## 典型的な用途

- クリスマス装飾
- 照明
- おもちゃ



## ハードウェア概要

### ピンアウト

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ベースシールド | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

:::important
    **1** Arduino UNOをマザーボードとして使用する場合は、DC電源の使用を推奨します。そうしないと、VCCの最大リップルが100mVを超える可能性があります。Seeeduino V4.2をマザーボードとして使用する場合は、DC電源を接続する必要はありません。

    **2** ホットスワップはサポートされていません。
:::

- **ステップ1.** Grove - RGB LED Stick (10 WS2813 Mini)をGrove-Base Shieldのポート**D6**に接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Grove Base Shieldがない場合でも、以下のように直接このモジュールをSeeeduinoに接続することができます。
:::

| Seeeduino      |  Groveケーブル       | Grove - RGB LED Stick (10 WS2813 Mini) |
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5Vまたは3.3V   | 赤                | VCC |
| 接続なし       | 白                | NC |
| D6             | 黄                | SIG |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** Githubから[Led_Strip](https://github.com/Seeed-Studio/Seeed_Led_Strip)ライブラリをダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法のいずれかを使用します：
    1. Arduino IDEで直接開く：**File --> Examples --> Adafruit_Neopixel --> simple**のパスをたどります。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

2. **simple.ino** を開きます。このファイルは **XXXX\Arduino\libraries\Seeed_Led_Strip-master\examples\simple** フォルダ内にあります。ここで、**XXXX** は Arduino IDE をインストールした場所を指します。  
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

3. または、コードブロックの右上にあるアイコンをクリックして、以下のコードをコピーし、Arduino IDE の新しいスケッチに貼り付けることもできます。  
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

```cpp
// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// GPLv3 ライセンスの下でリリースされており、AdaFruit NeoPixel ライブラリと一致します。

#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
  #include <avr/power.h>
#endif

// Arduino のどのピンが NeoPixel に接続されていますか？
// Trinket または Gemma を使用する場合は、これを 1 に変更することをお勧めします。
#define PIN            6

// Arduino に接続されている NeoPixel の数
#define NUMPIXELS      10

// NeoPixel ライブラリをセットアップする際に、ピクセル数と信号を送信するピンを指定します。
// 古い NeoPixel ストリップの場合、3 番目のパラメータを変更する必要があるかもしれません。
// 詳細は strandtest の例を参照してください。
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int delayval = 500; // 0.5 秒の遅延

void setup() {
  // Trinket 5V 16MHz 用のコードです。Trinket を使用していない場合は、以下の 3 行を削除してください。
#if defined (__AVR_ATtiny85__)
  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);
#endif
  // Trinket 特殊コードの終了
  pixels.setBrightness(255);
  pixels.begin(); // NeoPixel ライブラリを初期化します。
}

void loop() {

  // NeoPixel のセットでは、最初の NeoPixel は 0、2 番目は 1、ピクセル数 - 1 まで続きます。

  for(int i=0;i<NUMPIXELS;i++){

    // pixels.Color は RGB 値を取り、0,0,0 から 255,255,255 までの範囲です。
    pixels.setPixelColor(i, pixels.Color(0,150,0)); // 中程度の明るさの緑色。

    pixels.show(); // 更新されたピクセルカラーをハードウェアに送信します。

    delay(delayval); // 一定時間（ミリ秒単位）遅延します。

  }
}
```

:::note
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の 2 つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

:::success
すべてが正常に動作すれば、LED ストリップが点灯するのが確認できます：
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - RGB LED Stick (10 WS2813 Mini) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip)

- **[Zip]** [Led_Strip ライブラリ](https://github.com/Seeed-Studio/Seeed_Led_Strip/archive/master.zip)

- **[PDF]** [WS2813-Mini データシート](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/WS2813-Mini.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>