---
description: Grove - 赤色 LED マトリックス（ドライバ付き）
title: Grove - 赤色 LED マトリックス（ドライバ付き）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Red_LED_Matrix_w_Driver
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main2.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Matrix-w-Driver.html" target="_blank"> 
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div>

LED マトリックスは低コストで、通常は簡単な数字や画像を表示するために使用されます。Grove - 赤色 LED マトリックス（ドライバ付き）は、20mm 8×8 赤色 LED マトリックスと Grove - LED マトリックスドライバを組み合わせた製品です。HT16K33 はメモリマッピングおよび多機能 LED コントローラドライバであり、準備された使いやすいライブラリを使用して LED マトリックスを制御することができます。また、独自のライブラリを作成して、ニーズに合わせて制御することも可能です。

<iframe width={800} height={450} src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 赤色 LED マトリックス（ドライバ付き） | 初版                                                                                               | 2018年9月      |

## 特徴

- 統合型 RC オシレータ
- 読み書きアドレスの自動インクリメント
- 最大 8 x 8 パターン
- I^2^C バスインターフェース

## 仕様

|項目|値|
|---|---|
|供給電圧|3.3V / 5V|
|LED マトリックスドット数|8 × 8|
|動作温度|-40～85℃|
|保存温度|-50～125℃|
|インターフェース|I2C|
|I2C アドレス|0x70（デフォルト） 0x71～0x77（設定可能）|
|サイズ|長さ: 40mm 幅: 40mm 高さ: 21mm| 
|重量|17.4g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 20mm|
|総重量|24g|

:::note
この Grove には 0x70 から 0x77 までの 8 つの I2C アドレスが使用可能です。デフォルトの I^2^C アドレスは 0x77 です。以下の表に従って、いくつかのはんだ付けを行うことで I2C アドレスを変更できます。
:::

|I^2^C アドレス|接続状態|
|---|---|
|0x70|切断: A0 A1 A2|
|0x71|切断: A1 A2, 接続: A0|
|0x72|切断: A0 A2, 接続: A1|
|0x73|切断: A2, 接続: A1 A0|
|0x74|切断: A0 A1, 接続: A2|
|0x75|切断: A1, 接続: A0 A2|
|0x76|切断: A0, 接続: A1 A2|
|0x77|接続: A0 A1 A2|

例えば、アドレスを 0x73 に変更したい場合は、パッド A1 と A0 を接続し、パッド A2 を切断する必要があります。これにより、アドレス 0b01110011（つまり 0x73）を取得できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>

## 典型的な用途

- 産業用制御インジケーター
- デジタル時計、温度計、カウンター、マルチメーター
- コンボセット
- VCRセット
- 計測器の表示
- その他の消費者向け用途
- LEDディスプレイ


## ハードウェア概要

### ピンアウト

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


## はじめに


### Arduinoで遊ぶ

**必要な材料**


| Seeeduino V4.2 | Base Shield|Grove - Red LED Matrix w/Driver| 
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail2.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Red-LED-Matrix-w/Driver.html)|


:::note
    **1.** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
    
    **2.** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - Red LED Matrix w/DriverをGrove-Base Shieldのポート**I^2^C**に接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>


#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を強くお勧めします。
:::

- **ステップ1.** Githubから[Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git)ライブラリをダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
    1. Arduino IDEで直接開きます。パスは次の通りです：**File --> Examples --> Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

    2. コンピュータで開きます。**XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino**フォルダ内の**basic_demo.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

    3. または、アイコンをクリックします。
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

右上隅にあるコードブロックのコピーアイコンをクリックして、以下のコードを Arduino IDE の新しいスケッチにコピーしてください。

```cpp
#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"

Matrix_8x8 matrix;

void setup()
{
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop()
{
    for (int i=0;i<33;i++)
    {
        // writeBar の入力範囲は [0-32] です
        matrix.writeBar(i);
        matrix.display();
        delay(150);
    }
}
```

:::note
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

:::success
すべてが正常に動作すれば、LEDマトリックスにさまざまなバーが表示されるのを見ることができます。
:::

他の例を実行したい場合は、同様の手順を行うことで、異なる表示を確認することができます。

---

**DIY**

LEDマトリックスに絵文字を表示させたいですか？今度はあなた自身でデザインしてみましょう。上記のハードウェアおよびソフトウェア要件を準備してください。

- **ステップ 1.** オンラインの [LED Matrix Editor](http://xantorohara.github.io/led-matrix-editor/#) を使用して、8×8 LEDマトリックス用のアニメーションを編集および作成します。

- **ステップ 2.** 右上隅でLEDの色を選択します。私の場合は、赤色のLEDマトリックスを使用しているため「赤」を選択しました。

- **ステップ 3.** 空白のドットをクリックするだけで、自分のデザインを作成します。

- **ステップ 4.** デザインに基づいて生成された16進数ファイルをコピーします。以下の2つの方法があります：
    - 左下隅の16進数ボックス内の値をコピーします。
    - Arduino/Cコードセクション内の対応するコードをコピーします。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** 他のLEDマトリックスの例と同じフォルダ内に新しい '.ino' ファイルを作成し、以下のコードをコピーします。

```cpp
#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

// 自分のデザインの16進数グループをここに記述します。
const uint64_t Emoji[] = 
{
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Matrix_8x8 matrix;

void setup() {
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
    /*************************************************************
    * 説明
    *    マトリックスの点滅速度を設定します
    * パラメータ
    *    blink_type: BLINK_OFF, BLINK_2HZ, BLINK_1HZ
    * 戻り値
    *    なし
    *************************************************************/
}

void loop() {
  for (int i = 0;i < 3;i++)
    {
        matrix.writeOnePicture(Emoji[i]);
        /*************************************************************
        * 説明
        *    表示バッファに画像を書き込みます。
        *    display() を呼び出して表示バッファを表示します。
        * パラメータ
        *    pic: uint64_t 型の 8x8 マトリックス画像。以下で作成可能：
        *         https://xantorohara.github.io/led-matrix-editor/#
        * 戻り値
        *    なし
        *************************************************************/
        matrix.display();
        /*************************************************************
        * 説明
        *    表示バッファをクリアします。
        *    この関数を呼び出した後、display() を呼び出すと何も表示されません。
        * パラメータ
        *    なし
        * 戻り値
        *    なし
        *************************************************************/
        delay(500);
    }
}
```

- **ステップ 6.** プロジェクトを Seeeduino にアップロードします。

:::success
すべてが正常に動作すれば、以下のようにLEDマトリックスが表示されます。
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - LED Matrix Driver(HT16K33) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip)

- **[Zip]** [Grove_LED_Matrix_Driver_HT16K33 ソフトウェアライブラリ](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [HT16K33 データシート](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349%2C%20SMD%20IC%20Driver%3BSOP-28-物料规格书-1.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>