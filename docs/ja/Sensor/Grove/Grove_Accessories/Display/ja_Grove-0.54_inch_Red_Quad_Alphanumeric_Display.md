---
description: Grove - 0.54インチ 赤色 4桁英数字ディスプレイ
title: Grove - 0.54インチ 赤色 4桁英数字ディスプレイ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-0.54_inch_Red_Quad_Alphanumeric_Display
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front.png" alt="pir" width={600} height="auto" /></p>

このモジュールは高輝度の赤色バックライトを備えた4桁の英数字ディスプレイで、各桁は14セグメントデジタルチューブで構成されています。一般的に使用される7セグメントディスプレイ（例：[Grove - 4-Digit Display](https://www.seeedstudio.com/Grove-4-Digit-Display.html)）は、数字0～9と限られた文字しか表示できません。それに対して、14セグメントデジタルディスプレイにはこの制限がなく、すべての文字を表示できます。そのため、英数字ディスプレイと呼ばれています。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/seve-seg-compare-14-seg.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/seve-seg-compare-14-seg.png" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>7セグメントディスプレイ vs 14セグメントディスプレイ</b><i> </i></div>

このモジュールの桁の高さは0.54インチで、使用されている赤色LEDは非常に高輝度であるため、数メートル離れた場所からでも視認できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/digit-height.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/digit-height.jpg" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>0.54インチ英数字ディスプレイの高さ</b><i> </i></div>

通常、14セグメントディスプレイを制御するには17本以上のワイヤが必要であり、これによりメイン制御ボード（例：Arduino）の大量のIOピンが占有されます。しかし、オンボードのHT16K33チップとGroveコネクタを使用することで、このディスプレイをi2cディスプレイに変換し、わずか4本のワイヤで十分になります。面倒なハンダ付けや複雑な配線は不要で、[seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html)を使用している場合は、プラグ＆プレイで簡単に使用できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pins-compare.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pins-compare.jpg" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>18ピン vs 4ピン</b><i> </i></div>

Arduino、Raspberry Pi、Beaglebone、その他のSBC（シングルボードコンピュータ）向けに多くの[ディスプレイ](https://www.seeedstudio.com/displays-c-929.html)をリリースしてきましたが、今回はGrove - 0.54インチ 赤色 4桁英数字ディスプレイをお届けします。このディスプレイを使用して「Love」のような4文字の単語を表示したり、時計を作成することができます。要するに、14セグメントディスプレイはより多くの可能性と創造性を意味します。このディスプレイが、より興味深いプロジェクトを作成する手助けになることを願っています。

もし2桁の英数字ディスプレイが必要な場合は、[Grove - 0.54インチ 赤色 2桁英数字ディスプレイ](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)をご確認ください。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)

## 特徴

- すべての文字と数字を表示可能
- 超高輝度：30mcd
- Grove I2C、わずか2つのIOピンを使用
- オンボードドライバー、簡単に使用可能
- カソード表示


## 仕様

| パラメータ                     | 値               |
|-------------------------------|-----------------|
| 電源電圧                      | 3.3V / 5V       |
| 動作環境温度                  | -30°C ～ 85°C   |
| LEDディスプレイ               | JM-S05442ASR-001|
| LEDコントローラドライバー     | HT16K33         |
| LEDカラー                     | 赤              |
| 超高輝度                      | 30mcd           |
| LED高さ                       | 0.54インチ      |
| LEDセグメント                 | 14              |
| サイズ                        | 40 * 60mm       |
| 出力インターフェース          | I2C             |
| I2Cアドレス（選択可能）       | 0x71（デフォルト）|

## 応用例

- 産業用制御インジケーター
- デジタル時計、温度計、カウンター、マルチメーター
- 計測器の読み取り
- その他の消費者向けアプリケーション
- LEDディスプレイ


## ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/pinout.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

以下はI2Cアドレスに関する表です。

| A2 | A1 | A0 | I2Cアドレス |
|----|----|----|-------------|
| 0  | 0  | 0  | 0x70        |
| 0  | 0  | 1  | 0x71（デフォルト）|
| 0  | 1  | 0  | 0x72        |
| 0  | 1  | 1  | 0x73        |
| 1  | 0  | 0  | 0x74        |
| 1  | 0  | 1  | 0x75        |
| 1  | 1  | 0  | 0x76        |
| 1  | 1  | 1  | 0x77        |


:::warning
    複数のディスプレイを接続する場合は、外部のVCCとGNDを個別にディスプレイに供給し、SDA、SCL、GNDをSeeeduinoボードに接続する必要があります。
:::

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

| Seeeduino V4.2 | Base Shield | Grove - 0.54" Red Quad Alphanumeric Display |
|----------------|-------------|--------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front-s.png" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)|

> さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

#### ハードウェア接続

- **ステップ1.** Grove - 0.54" Red Quad Alphanumeric DisplayをBase Shieldの**I2C**ポートに接続します。
- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/wiki_connect.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/wiki_connect.png" alt="pir" width={600} height="auto" /></p>

:::note
Grove Base Shieldがない場合は、以下のようにGrove - 0.54" Red Quad Alphanumeric DisplayをSeeeduinoに直接接続することもできます。

| Seeeduino       | Grove - 0.54" Red Quad Alphanumeric Display |
|-----------------|--------------------------------------------|
| 5V             | Red                                       |
| GND            | Black                                     |
| SDA            | White                                     |
| SCL            | Yellow                                    |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

**1. display_basicで始める**

- **ステップ1.** [Grove - 0.54" Red Quad Alphanumeric Displayライブラリ](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)をGithubからダウンロードします。
- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ3.** **Arduino IDE -> File -> Examples -> Seeed_Alphanumeric_Display_HT16K33 -> display_basic**を開きます。
- **ステップ4.** 以下のように**tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR)**をコメント解除します。他の例でも同様にコメント解除する必要があります。

```
    // 4つのデジタルチューブを使用する場合、この設定を使用します。
       tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR);

    // 2つのデジタルチューブを使用する場合、この設定を使用します。
    // tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR);
```

- **ステップ5.** サンプルをArduinoにアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。
- **ステップ6.** LEDが「12 -> 4567 -> AB -> abcd」を繰り返し表示するのが確認できます。

**2. その他の例**

- **display_custom:** 単一の文字とドットを表示します。
- **display_scroll_string:** 4文字以上のスクロール文字列を表示します。
- **display_scroll_number:** 9999以上のスクロール数字を表示します。
- **number_increment:** 数字を増加させて表示します（右側の2つのチューブ）。
- **combine_two_displays:** 2つのGrove - 0.54" Red Quad Alphanumeric Displays、またはGrove - 0.54" Red Dual Alphanumeric Display、またはその両方を接続できます。

2つのGrove - 0.54" Red Quad Alphanumeric Displaysを使用する場合、以下のようにコードを変更してください。

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x75     // Grove - 0.54" Red Quad Alphanumeric Displaysの変更後のI2Cアドレス
#define I2C_ADDR_DEFAULT_FOUR       0x71     // Grove - 0.54" Red Quad Alphanumeric DisplaysのデフォルトI2Cアドレス

tube1.setTubeType(TYPE_4,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

Grove - 0.54" Red Dual Alphanumeric DisplayとGrove - 0.54" Red Quad Alphanumeric Displayの両方を使用する場合、以下のようにコードを変更してください。

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x70     // Grove - 0.54" Red Dual Alphanumeric Displaysの変更後のI2Cアドレス
#define I2C_ADDR_DEFAULT_FOUR       0x71     // Grove - 0.54" Red Quad Alphanumeric DisplaysのデフォルトI2Cアドレス

tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

:::warning
2つのモジュールを接続すると、Arduinoの電力供給が制限されるため、赤いチューブが少し暗くなる場合があります。
:::

**3. API**

- **Init(NUMERIC_I2C_ADDR):** デバイスをI2Cアドレスで初期化します。Grove - 0.54" Red Quad Alphanumeric DisplayのデフォルトI2Cアドレスは0x71です。
- **setBrightness(15):** 明るさを設定します。範囲は0-15で、明るさが高いほど消費電力が増加します。
- **setBlinkRate(BLINK_OFF):** 点滅間隔を設定します。BLINK_OFF/BLINK_2HZ/BLINK_1HZから選択できます。
- **displayNum(1234567,500):** 数字を表示します。最初のパラメータは数字、2番目のパラメータはスクロール間隔(ms)です。数字が10000未満の場合、チューブは静的な数字を表示します。それ以外の場合、スクロール数字を表示します。スクロール間隔(ms)はスクロールモードでのみ機能し、0に設定することもできます。
- **displayString("ABCDEFGHJIYZ",500):** 文字列を表示します。最初のパラメータは文字列、2番目のパラメータはスクロール間隔(ms)です。文字列が4文字未満の場合、チューブは静的な文字列を表示します。それ以外の場合、スクロール文字列を表示します。スクロール間隔(ms)はスクロールモードでのみ機能し、0に設定することもできます。この関数は小文字をサポートしておらず、大文字として表示されます。
- **setTubeSingleChar(FIRST_TUBE,'t'):** 特定のチューブに単一の文字を設定します。
- **tube.setPoint(true,false):** 2つのドットをオンまたはオフに設定します。この例では、最初のドットをオン、2番目をオフに設定しています。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - 0.54" Quad Dual Alphanumeric Display 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip)
- **[PDF]** [LEDモジュールデータシート](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/DIP-LED-4.pdf)
- **[PDF]** [HT16K33データシート](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/HT16K33.pdf)
- **[PDF]** [MPS MP2155データシート](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/MPS_MP2155%20datasheetpdf.pdf)
- **[Library]** [Grove - 0.54" Quad Dual Alphanumeric Display ライブラリ](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)

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