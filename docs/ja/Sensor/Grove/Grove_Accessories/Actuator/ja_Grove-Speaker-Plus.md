---
title: Grove - Speaker Plus
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Speaker-Plus/
slug: /ja/Grove-Speaker-Plus
last_update:
  date: 05/15/2025
  author: gunengyu
---


<!--     -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/03.png" alt="pir" width={600} height="auto" /></p>

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)

Grove Speaker Plus は、強力なアンプドライバーボードと高品質スピーカーで構成されています。このスピーカーは、異なる入力周波数で異なる音を生成し、PWM信号で簡単に制御できます。簡単なコーディングや既存の多数の音楽コードを使用して、独自の音響効果を作成したり、お気に入りの曲を再生したり、独自のミュージックボックスを構築することができます。

以前のバージョンの Grove Speaker と比較して、Grove Speaker Plus は、分離可能で交換可能なスピーカーデザインを採用した、より高品質なスピーカーを備えています。これにより、好みの他のスピーカーに交換することが可能です。オンボードのポテンショメータを使用すれば、出力音量を簡単に調整できます。固定された音質の悪いスピーカーに飽きていませんか？自分のスピーカーを接続して再生したいですか？これがその選択肢です。

特徴
-------

- 高音量で良好な音質のスピーカー
- 分離可能で交換可能なスピーカーデザイン
- オンボードポテンショメータによる音量調整機能
- 簡単に使用できるプラグアンドプレイインターフェース

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

仕様
-------------

| パラメータ           | 値 |
|------|-----|
| 寸法 | 130mm x 90mm x 12mm |
| 重量   | G.W 12g |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

#### 必要な材料

| Seeeduino Lotus | Grove Speaker Plus |
|------------------|--------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/small.png)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)|

#### ハードウェア接続

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/Hardware_Connection.jpg" alt="Grove-Speaker Plusの接続結果" title="デモ" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

使用方法
-----

### Arduinoで遊ぶ

このスピーカーは、車のクラクション、ドアベル、点火音など、さまざまな音を発することができます。異なる音は入力信号の周波数に基づいています。

Arduinoを使用してこのモジュールに異なる周波数の信号を供給することができます。ArduinoはPWMやデジタル書き込みと遅延を使用してこれらの信号を生成します。ここでは、*delay()*を使用してこれらの信号を生成する方法を示します。スピーカーはベース音1～7を発します。

|音階|対応する周波数|半周期|
|----|--------------|-------|
|1| 261.6255653 |1911.128216|
|1.5|277.182631|1803.864832|
|2|293.6647679|1702.621678|
|2.5|311.1269837|1607.060866|
|3|329.6275569|1516.863471|
|4|349.2282314|1431.728466|
|4.5|369.9944227|1351.371722|
|5|391.995436|1275.525055|
|5.5|415.3046976|1203.935334|
|6|440|1136.363636|
|6.5|466.1637615|1072.584446|
|7|493.8833013|1012.384907|

#### ソフトウェアコード

**ステップ 1.** Grove - Speaker PlusをBase Shieldの**D3**ポートに接続し、Base ShieldをSeeeduinoに接続します。

**ステップ 2.** USBケーブルを使用してSeeeduinoをPCに接続します。

**ステップ 3.** 以下のコードをArduino IDEにアップロードします。

:::tip
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

```cpp
/*スピーカーピンのマクロ定義*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//ベース音1～7

void setup()
{
    pinInit();
}
void loop()
{
        /*ベース音1～7を発音*/
    for(int note_index=0;note_index<7;note_index++)
    {
        sound(note_index);
        delay(500);
    }
}
void pinInit()
{
    pinMode(SPEAKER,OUTPUT);
    digitalWrite(SPEAKER,LOW);
}
void sound(uint8_t note_index)
{
    for(int i=0;i<100;i++)
    {
        digitalWrite(SPEAKER,HIGH);
        delayMicroseconds(BassTab[note_index]);
        digitalWrite(SPEAKER,LOW);
        delayMicroseconds(BassTab[note_index]);
    }
}
```

<div class="admonition note">
<p class="admonition-title">注意</p>
容量の影響により、このモジュールはベース信号のみを出力でき、高音は発音できません。
</div>

:::tip
     コードのアップロードが完了すると、スピーカーがドからシの音を発するのが聞こえます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [MCUで異なる音色を生成する方法](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [LM386低電圧オーディオパワーアンプデータシート](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>