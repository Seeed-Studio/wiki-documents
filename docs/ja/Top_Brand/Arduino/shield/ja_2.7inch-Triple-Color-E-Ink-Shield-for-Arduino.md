---
description:  Arduino用2.7インチトリプルカラーEリンクシールド
title:  Arduino用2.7インチトリプルカラーEリンクシールド
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
nam2.7'' Triple-color E-link Shield for Arduinoe: 2.7'' Triple-Color E-Ink Shield for Arduino
category: Shield
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 104030067
tags:
--- -->

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-all.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

E-InkスクリーンはEペーパーとも呼ばれ、これまでにさまざまなサイズのE-Inkスクリーンをリリースしてきました。例えば、Grove E-InkモジュールやRaspberry Pi E-Ink Hatなどです。そして今回、新しいSeeed E-Inkファミリーのメンバーである「Arduino用2.7インチトリプルカラーE-Inkディスプレイ」をご紹介します。

Arduino用2.7インチトリプルカラーE-Inkディスプレイは、264x176ピクセルを持つArduino E-Inkディスプレイシールドで、各ピクセルに白/黒/赤を表示することができます。このシールドはSPIインターフェースを介してArduinoと通信し、他のモジュールと使用するためのGrove I2Cインターフェースを備えています。比較回路の助けを借りて、モジュールは3.3Vおよび5V電圧システムの自己適応を実現します。

従来のLCDディスプレイと比較して、E-Inkはバックライトを必要としないため、消費電力が非常に低くなります。また、E-Inkは非常に広い視野角と非常に高いコントラストを持ち、直射日光下でも鮮明に表示できます。さらに、E-Inkはユーザーが設定した画像を電源供給なしで長期間（数週間または数ヶ月）表示することができます。なんて素晴らしいディスプレイでしょう！

興味がある方は、以下の画像をクリックして、Arduino E-InkまたはRaspberry Pi E-Inkの異なるサイズをご覧ください。

## 特徴

- 超低消費電力
- 超広視野角
- 高コントラスト

## 応用例

- 低消費電力ディスプレイシーン
- 屋外ディスプレイシーン
- 産業用計器
- 棚ラベル

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

#### 必要な材料

| Seeeduino Lotus | 2.7インチ トリプルカラー E-Ink シールド for Arduino |
|------------------|--------------------------------------------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-integrate-thumbnail.png)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[今すぐ購入](https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html)|

#### ハードウェア概要

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/hardware_overview.png)

:::note
**1** USBケーブル、E-Ink FPCインターフェース、トリプルカラーE-InkシールドをSeeeduinoに慎重に接続してください。そうしないと、ポートが損傷する可能性があります。
:::

- **ステップ 1.** トリプルカラーE-InkシールドをSeeeduinoに接続します。

- **ステップ 2.** USBケーブルを使用してSeeeduinoをPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** コードを実行すると、独自の画像が画面に表示されます。

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/connection.jpg" alt="トリプルカラーE-Inkシールドの接続" title="接続" />
<figcaption><b>図2</b>. <i>接続</i></figcaption>
</figure>
</div>

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip)をダウンロードします。

- **ステップ 2.** Arduino IDEで**epd2in7b-demo.ino**ファイルを開きます。

- **ステップ 3.** **Seeed_Elink_Shield**フォルダ全体をコピーして、Arduino IDEのライブラリフォルダに貼り付けます。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip success
すべてが正常に動作すれば、ディスプレイが点滅し、Seeedのロゴが表示されます。
:::

### DIY

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/5.jpg" alt="トリプルカラーE-InkシールドのDIY" title="DIYデモ" />
<figcaption><b>図3</b>. <i>DIYデモ</i></figcaption>
</figure>
</div>

独自の画像を表示するのはとても楽しいです。では、独自のEペーパーをDIYする方法を説明します。

開始する前に、**E_ink154_factoryCode.ino**を再確認してください。この中で2つの配列を簡単に見つけることができます。

```cpp
const unsigned char IMAGE_BLACK[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

および

```cpp
const unsigned char IMAGE_RED[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

ご覧の通り、2つの配列は**const unsigned char IMAGE_BLACK[]**と**const unsigned char IMAGE_RED[]**と呼ばれています。
> **const unsigned char IMAGE_BLACK[]**は黒い画像の表示に使用されます  
> **const unsigned char IMAGE_RED[]**は赤い画像の表示に使用されます

実際には、独自の画像を表示するには、これら2つの画像配列を置き換えるだけです。つまり、独自の画像配列を取得する必要があります。幸いなことに、[Image2LCD](https://www.buydisplay.com/download/software/Image2Lcd.zip)というツールがあります。Googleで検索すれば簡単に見つかります。このソフトウェアをダウンロードしてインストールしたと仮定します。次に、このソフトウェアの使用方法を説明します。

- **ステップ 1.** 264*176ピクセルの画像を準備します。

:::tip
E-Inkスクリーンは2階調のグレースケール画像（つまり、白黒）のみをサポートします。画像のグレースケールが多すぎる場合、全体の色が完全に表示されない可能性があります。
:::

- **ステップ 2.** **Image2LCD**ソフトウェアを開き、アイコンをクリックして画像を開きます。以下のウィンドウが表示されます。

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image2LCD_1.png" alt="トリプルカラーE-InkシールドのDIY" title="DIYデモ" />
<figcaption><b>図4</b>. <i>Image2LCDの設定</i></figcaption>
</figure>
</div>

上記のように対応するオプションを確認してください。

>1. 出力ファイルタイプ -> *.C  
>2. スキャンモード -> 水平スキャン  
>3. ビットピクセル -> モノクロ  
>4. 最大幅と高さ -> 264 x 176  
>5. 色反転: このオプションをチェックするかどうかは、表示したい効果に基づきます。詳細は以下の**表1**を参照してください。

- **ステップ 3.** 上記のオプションを設定した後、左上の**保存**ボタンをクリックするだけで、対応する画像配列が生成されます。その後、工場出荷時の配列を独自の画像配列に置き換えます。

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image3.png" alt="トリプルカラーE-InkシールドのDIY" title="" />
<figcaption><b>図5</b>. <i>赤枠で選択された部分を置き換えるだけで、配列名はそのままにしてください</i></figcaption>
</figure>
</div>

上記で述べたように、2つの配列がありますが、どちらを置き換えるべきか混乱するかもしれません。それは、どのような表示効果を望むかによります。**表1**を確認してください。そして、置き換える色を選んだ後、もう一方の色のコードを削除することを忘れないでください。ただし、配列名は保持する必要があります。

|<br />表示|<p style={{background: 'black'}}><font color="red">黒背景<br /> 赤画像</font></p>|<p style={{background: 'white'}}><font color="red">白背景<br /> 赤画像</font></p>|<p style={{background: 'red'}}><font color="black">赤背景<br /> 黒画像</font></p>|<p style={{background: 'red'}}><font color="white">赤背景<br /> 白画像</font></p>|
|---|----|----|----|----|
|黒配列|00|FF|00|FF|
|赤配列|画像（反転）|画像（反転）|画像|画像|

|<br />表示|<p style={{background: 'red'}}><font color="black">全画面<br /> 赤</font></p>|<p style={{background: 'white'}}><font color="black">白背景<br /> 黒画像</font></p>|<p style={{background: 'red'}}><font color="black">赤背景<br /> 赤</font></p>|<p style={{background: 'black'}}><font color="white">黒背景<br /> 白画像</font></p>|
|---|----|----|----|----|
|黒配列|画像（反転）|画像（反転）|画像|画像|
|赤配列|00|FF|00|FF|

<div align="center"><b>表1.</b><i>配列表示効果</i></div>

:::note
a. **00** は配列内のすべての要素が 0x00 であることを意味します。実際には 2888 個の 0x00 が必要です。<br />
b. **FF** は配列内のすべての要素が 0xFF であることを意味します。実際には 2888 個の 0xFF が必要です。<br />
c. **画像（反転）** は、**ステップ2（図4）** で **色を反転** オプションを選択する必要があることを意味します。<br />
d. **画像** は、**ステップ2（図4）** で **色を反転** オプションを選択しないことを意味します。
:::

:::tip
*2888 個の 0x00 または 0xFF 配列を作成する方法は？*  
*心配しないでください。手間を軽減するために、0x00.c と 0xFF.c ファイルをクリックしてコードにコピーするだけです。*
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)

初期状態は全画面が白であると仮定します。画像を更新する際には、まず黒配列が更新され、その後赤配列が更新されます。そして赤配列の画像が黒画像を上書きします。

このディスプレイは 152 x 152 の解像度を持つため、152x152=23104 ピクセルがあります。各ピクセルは1ビットで制御されます。配列内の要素は2桁の16進数で表され、例えば **0xF0** のようになります。**0xF0** を2進数に変換すると **1111 0000** となります。値が1のピクセルは白を表示し、値が0のピクセルは対応する配列（赤または黒）の色を表示します。つまり、画像配列内の各要素は8ピクセルを制御します。そのため、23104/8=2888 要素の配列が必要です。

**ステップ4.** コードを Arduino にダウンロードし、ディスプレイモジュールを Arduino ボードに接続します。しばらく点滅した後、設定したパターンが表示されます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [2.7インチ トリプルカラー E-Ink ディスプレイ for Arduino.zip](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip)
- **[Zip]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>