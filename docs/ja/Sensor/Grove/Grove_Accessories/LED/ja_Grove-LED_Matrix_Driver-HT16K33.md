---
description: Grove - LED マトリックスドライバー (HT16K33)
title: Grove - LED マトリックスドライバー (HT16K33)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LED_Matrix_Driver-HT16K33
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg" alt="pir" width={600} height="auto" /></p>

LEDマトリックスは低コストで、通常は簡単な数字や画像を表示するために使用されます。Grove - LED マトリックスドライバーはI2Cベースの製品で、準備された使いやすいライブラリを使用してLEDマトリックスを制御することができます。また、独自のライブラリを作成してニーズに合わせて制御することも可能です。この8×8 LEDマトリックスは、ドライバーボードから簡単に組み立てたり分解したりすることができるため、必要に応じて異なる色のLEDマトリックスディスプレイに変更するのが便利です。



<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
<!-- [<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## バージョン

<!-- | Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - LED Matrix Driver (HT16K33) | Initial                                                                                               | Sep 2018      | -->

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>製品バージョン</th>
            <th>変更点</th>
            <th>リリース日</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Grove - LED マトリックスドライバー (HT16K33)</td>
            <td>初期リリース</td>
            <td>2018年9月</td>
        </tr>
    </tbody>
</table>
</div>



## 特徴 

- 統合型RCオシレーター
- R/Wアドレス自動インクリメント
- 最大8×8パターン
- I2Cバスインターフェース


## 仕様

<!-- |Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|LED Matrix Dot NO.|8 * 8|
|Operating temperature|-40～85℃|
|Storage temperature|-50～125℃|
|Interface|I2C|
|I2C address|0x70(defult) 0x71~0x77(configurable)|
|size|L: 40mm W: 40mm H: 17mm| 
|Weight|8.8g|
|Package size|L: 140mm W: 90mm H: 18mm|
|Gross Weight|15g| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>項目</th>  
                <th>値</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>供給電圧</td>  
                <td>3.3V / 5V</td>  
            </tr>  
            <tr>  
                <td>LEDマトリックスドット数</td>  
                <td>8 × 8</td>  
            </tr>  
            <tr>  
                <td>動作温度</td>  
                <td>-40～85℃</td>  
            </tr>  
            <tr>  
                <td>保管温度</td>  
                <td>-50～125℃</td>  
            </tr>  
            <tr>  
                <td>インターフェース</td>  
                <td>I2C</td>  
            </tr>  
            <tr>  
                <td>I2Cアドレス</td>  
                <td>0x70 (デフォルト) 0x71～0x77 (設定可能)</td>  
            </tr>  
            <tr>  
                <td>サイズ</td>  
                <td>L: 40mm W: 40mm H: 17mm</td>  
            </tr>  
            <tr>  
                <td>重量</td>  
                <td>8.8g</td>  
            </tr>  
            <tr>  
                <td>パッケージサイズ</td>  
                <td>L: 140mm W: 90mm H: 18mm</td>  
            </tr>  
            <tr>  
                <td>総重量</td>  
                <td>15g</td>  
            </tr>  
        </tbody>  
    </table>  
</div>  


:::note
このGroveには、0x70から0x77までの8つの可能なI2Cアドレスがあります。デフォルトのI2Cアドレスは0x77です。以下の表に従って、いくつかのはんだ付けを行うことでI2Cアドレスを変更することができます。
:::
<!-- |I2C address|Connection|
|---|---|
|0x70|Disconnect: A0 A1 A2|
|0x71|Disconnect: A1 A2, Connect: A0|
|0x72|Disconnect: A0 A2, Connect: A1|
|0x73|Disconnect: A2, Connect: A1 A0|
|0x74|Disconnect: A0 A1, Connect: A2|
|0x75|Disconnect: A1, Connect: A0 A2|
|0x76|Disconnect: A0, Connect: A1 A2|
|0x77|Connect: A0 A1 A2| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>I2Cアドレス</th>  
                <th>接続</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>0x70</td>  
                <td>切断: A0 A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x71</td>  
                <td>切断: A1 A2, 接続: A0</td>  
            </tr>  
            <tr>  
                <td>0x72</td>  
                <td>切断: A0 A2, 接続: A1</td>  
            </tr>  
            <tr>  
                <td>0x73</td>  
                <td>切断: A2, 接続: A1 A0</td>  
            </tr>  
            <tr>  
                <td>0x74</td>  
                <td>切断: A0 A1, 接続: A2</td>  
            </tr>  
            <tr>  
                <td>0x75</td>  
                <td>切断: A1, 接続: A0 A2</td>  
            </tr>  
            <tr>  
                <td>0x76</td>  
                <td>切断: A0, 接続: A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x77</td>  
                <td>接続: A0 A1 A2</td>  
            </tr>  
        </tbody>  
    </table>  
</div>  

例えば、アドレスを0x73に変更したい場合、パッドA1とA0を接続し、パッドA2を切断する必要があります。これにより、アドレスは0b01110011、つまり0x73になります。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>

## 主な用途

- 産業用制御インジケーター
- デジタル時計、温度計、カウンター、マルチメーター
- コンボセット
- VCRセット
- 計測器の表示
- その他の消費者向けアプリケーション
- LEDディスプレイ

## ハードウェア概要

### ピンアウト

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" />|<img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" />|

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield|Grove-LED Matrix Driver| matrix LED - Red|
|--------------|-------------|-----------------|---------------|
|<img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" />|<img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" />|<img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail.jpg" alt="pir" width={600} height="auto" />|<img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/LED_matrix.jpg" alt="pir" width={600} height="auto" />
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html)|[今すぐ購入](https://www.seeedstudio.com/20mm-8-8-square-matrix-LED-Red-p-36.html)

:::note
**1.** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルはデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2.** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** 赤いスクエアマトリックスLEDをGrove-LED Matrix Driverに接続します。

- **ステップ2.** Grove-LED Matrix DriverをGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ3.** Grove-Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** Githubから[Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git)ライブラリをダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
  1. Arduino IDEで直接開きます。パスは次の通りです：**File --> Examples --> Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**。
  <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

2. **basic_demo.ino** を開きます。これは **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino** フォルダ内にあります。**XXXX** は Arduino IDE をインストールした場所です。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

3. または、コードブロックの右上にあるアイコンをクリックして以下のコードをコピーし、Arduino IDE の新しいスケッチに貼り付けることもできます。
<!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

```cpp
#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"

#include "SoftI2C.h"
#include "I2Cdev.h"

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
    hard_ware_iic.begin();
    matrix.init(&hard_ware_iic,0x70);
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop() {
    for (int i = 0; i < 33; i++) {
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

他の例を実行したい場合は、同様の手順を行うことで異なる表示を見ることができます。

### DIY

LEDマトリックスに絵文字を表示させたいですか？今度はあなたがデザインする番です。上記のハードウェアとソフトウェアの要件を準備してください。

- **ステップ 1.** オンラインの [LED Matrix Editor](http://xantorohara.github.io/led-matrix-editor/#) を使用して、8×8 LEDマトリックス用のアニメーションを編集および作成します。

- **ステップ 2.** 右上のLEDの色を選択します。私の場合、赤色LEDマトリックスを使用しているので「赤」を選択しました。

- **ステップ 3.** 空白のドットをクリックするだけで独自のデザインを作成します。

- **ステップ 4.** デザインに基づいて生成されたHEXファイルをコピーします。これには2つの方法があります：
    - 左下のHEXボックス内のHEX値をコピーします。
    - Arduino/Cコードセクション内の対応するコードをコピーします。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** 他のLEDマトリックスの例と同じフォルダ内に新しい '.ino' ファイルを作成し、以下のコードをコピーします。

```cpp
#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

#include "SoftI2C.h"
#include "I2Cdev.h"

//独自のデザインHEXグループをここに記載してください。
const uint64_t Emoji[] = {
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
  Wire.begin();
  matrix.init(&hard_ware_iic, 0x70);
  matrix.setBrightness(0);
  matrix.setBlinkRate(BLINK_OFF);
  /*************************************************************
    * 説明
    *    マトリックスの点滅速度を設定します
    * パラメータ
    *    blink_type: BLINK_OFF, BLINK_2HZ, BLINK_1HZ
    * 戻り値
    *    なし。
    *************************************************************/
}

void loop() {
  for (int i = 0; i < 3; i++) {
    matrix.writeOnePicture(Emoji[i]);
    /*************************************************************
        * 説明
        *    表示バッファに画像を書き込みます。
        *    display() を呼び出して表示バッファを表示します。
        * パラメータ
        *    pic: uint64_t 型の8×8マトリックス画像。以下のリンクで作成できます：
        *         https://xantorohara.github.io/led-matrix-editor/#
        * 戻り値
        *    なし。
        *************************************************************/
    matrix.display();
    /*************************************************************
        * 説明
        *    表示バッファをクリアします。
        *    この関数を呼び出した後、display() を呼び出すと8×8マトリックスには何も表示されません。
        * パラメータ
        *    なし。
        * 戻り値
        *    なし。
        *************************************************************/
    delay(500);
  }
}
```

- **ステップ 6.** プロジェクトをSeeeduinoにアップロードします。

:::success
すべてが正常に動作すれば、以下のようにLEDマトリックスが表示されます。
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - LED Matrix Driver(HT16K33) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip)

- **[Zip]** [Grove_LED_Matrix_Driver_HT16K33 ソフトウェアライブラリ](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [HT16K33 データシート](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349,SMD-IC-Driver;SOP-28-1.pdf)

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