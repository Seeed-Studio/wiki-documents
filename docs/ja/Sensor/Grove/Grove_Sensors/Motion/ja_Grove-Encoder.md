---
description: Grove-Encoder
title: Grove-Encoder
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Encoder
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg" alt="pir" width={600} height="auto" /></p>



このモジュールは増分型ロータリーエンコーダです。軸からの回転信号をエンコードし、電子パルスとして信号を出力します。Grove – EncoderはGroveシリーズの一つであり、標準的なGroveインターフェースを備えています。
プロジェクトにロータリーノブを追加する必要がある場合、例えばスピーカーのボリュームノブ、選択パネル、またはデジタル入力など、このモジュールが最初の選択肢となるでしょう。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Encoder-p-1352.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)

## 特徴

*   増分型エンコーダ
*   Groveインターフェース
*   360度回転可能

## 仕様

| 項目 | 最小 | 標準 | 最大 | 単位 |
|--|--|--|--|--|
| 電圧 | 4.5 | 5 | 5.5 | V |
| 電流 | 10 | 20 | 30 | mA |
| 寸法 | |20x 20 | |mm |
| 正味重量 || 12 || g |


## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - Circular LED | Grove - Encoder|
|--------------|-------------|-----------------|----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Circular%20LED._Sjpg.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Encoder.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)|

- **ステップ 2.** Grove-EncoderをGrove-Base ShieldのポートD2に接続します。
- **ステップ 3.** Grove-Circular LEDをGrove-Base ShieldのポートD5に接続します。
- **ステップ 4.** Grove-Base ShieldをSeeeduinoに差し込みます。
- **ステップ 5.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合は、以下のようにGrove-EncoderとGrove-Circular LEDをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove-Encoder  |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| D3           | 白                   |
| D2            | 黄                  |

| Seeeduino       | Grove-Circular LED  |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| D6           | 白                   |
| D5           | 黄                  |

:::note
    Grove-Encoderを他のポートに変更したい場合は、Encoder.cpp内のdigitalRead(2)とdigitalRead(3)を変更してください。
:::

#### ソフトウェア

- **ステップ 1.** [Encoderライブラリ](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip)、[CircularLEDライブラリ](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip)、[TimerOneライブラリ](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip)をGithubからダウンロードします。
- **ステップ 2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduinoにライブラリをインストールします。
- **ステップ 3.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```cpp
#include <CircularLED.h>
#include <Encoder.h>
#include <TimerOne.h>
CircularLED circularLED(6,5);

unsigned int LED[24];
int index_LED;
void setup()
{
  encoder.Timer_init();
}
void loop()
{
    if (encoder.rotate_flag ==1)
  {
    if (encoder.direct==1)
    {
      index_LED++;
      if (index_LED>23)
      index_LED=24;
      SenttocircularBar(index_LED);
    }
     else
     {
      index_LED--;
      if(index_LED<0)
      index_LED=0;
      SenttocircularBar(index_LED);
     }
    encoder.rotate_flag =0;
  }
}
void SenttocircularBar(int index)
{
  for (int i=0;i<24;i++)
  {
    if (i<index)
    {
      LED[i]=0xff;
    }
    else
    LED[i]=0;
  }
  circularLED.CircularLEDWrite(LED);
}
```

- **ステップ 4.** 以下のように、エンコーダを回転させるとライトが変化します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif" alt="pir" width={600} height="auto" /></p>

:::note
    押し込むと別の信号を生成することが可能ですが、Grove信号ケーブルの数の制限により、このモジュールはこの信号の出力を持たないように設計されています。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[Eagle]** [Grove-Encoder Eagle ファイル](https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip)
- **[Library]** [TimeOne ライブラリ](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip)
- **[Library]** [Encoder ライブラリ](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip)
- **[Library]** [CircularLED ライブラリ](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip)
- **[Demo]** [Arduino フォーラムでのデモ](https://arduino.cc/playground/Main/RotaryEncoders)


## 技術サポートと製品ディスカッション
私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>