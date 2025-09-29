---
title: Grove - スピーカー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Speaker/
slug: /ja/Grove-Speaker
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Grove_Speaker_01.jpg)

Grove - スピーカーは、電力増幅と音声出力を備えたモジュールです。音量はオンボードのポテンショメータで調整可能です。異なる入力周波数に応じて、スピーカーは異なる音を生成します。Arduinoで音楽をコーディングして、自分だけの音楽ボックスを作りましょう！

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-p-1445.html)

特徴
-------

- 音量調整可能
- Groveインターフェース

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

仕様
-------------

| 項目              | 最小 | 典型値  | 最大 | 単位 |
|-------------------|------|---------|------|------|
| 動作電圧         | 4.0  | 5.0     | 5.5  | VDC  |
| 電圧ゲイン       | -    | -       | 46   | dB   |
| 帯域幅           | -    | -       | 20   | KHz  |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

### Arduinoで遊ぶ

スピーカーは、車のクラクション、ドアベル、点火音など、さまざまな音を発することができます。異なる音は入力信号の周波数に基づいています。

Arduinoを使用して、このモジュールに異なる周波数の信号を供給できます。Arduinoはこれらの信号をPWMまたはデジタル書き込みと遅延を使用して生成します。ここでは、*delay()*を使用してこれらの信号を生成し、スピーカーで低音1〜7を再生する方法を示します。

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Tone.jpg)

```
/*スピーカーピンのマクロ定義*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//低音1〜7

void setup()
{
    pinInit();
}
void loop()
{
        /*低音1〜7を再生*/
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

:::note
容量の影響により、このモジュールは低音信号のみを出力でき、高音は発することができません。
:::

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - スピーカーをBase ShieldのD3ポートに接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メイン手順を作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ2.** 下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Speaker.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、スピーカーがDOからSIの音を出すのが聞こえます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Grove - Speaker Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip)
- [MCUで異なるトーンを生成する方法](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [Grove_-_Speaker_v1.0_brd.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_brd.pdf)
- [Grove_-_Speaker_v1.0_sch.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_sch.pdf)
- [LM386 低電圧オーディオパワーアンプ データシート](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)
- [CodeCraft コード](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Speaker.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Speaker から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>