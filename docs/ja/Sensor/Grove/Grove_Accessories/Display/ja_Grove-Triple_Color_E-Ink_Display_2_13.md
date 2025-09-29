---
description: Grove - トリプルカラー E-Ink ディスプレイ 2.13"
title: Grove - トリプルカラー E-Ink ディスプレイ 2.13"
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Triple_Color_E-Ink_Display_2_13
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg" alt="pir" width={600} height="auto" /></p>



Grove - トリプルカラー E-Ink ディスプレイ 2.13'' は、電源を切った後でも表示を維持できるスクリーンです。このようなディスプレイは E-Paper（電子ペーパー）または E-Ink と呼ばれます。このディスプレイは TFT アクティブマトリックス電気泳動ディスプレイであり、インターフェースとリファレンスシステム設計を備えています。2.13 インチのアクティブエリアには 212x104 ピクセルが含まれ、1ビットの白/黒および1ビットの赤のフル表示機能を持っています。

超低消費電力、広視野角、電力を使用しないクリアな表示といった利点により、棚ラベルや産業用計器などの用途に最適な選択肢となります。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)
## 特徴

- 高コントラスト
- 高反射率
- 超広視野角
- 超低消費電力
- オンチップディスプレイ RAM

## 仕様

|項目|値|
|---|---|
|供給電圧|3.3V / 5V|
|動作温度| 0～40℃|
|保存温度| -25～60℃|
|湿度範囲|40~70%RH|
|ディスプレイ解像度|212(H) x 104(V) ピクセル|
|DPI|111|
|インターフェース|UART|
|Arduino のボーレート|230400|

:::note
頻繁な連続リフレッシュは E-Ink に修復不可能な損傷を与える可能性があります。リフレッシュ間隔は 180 秒以上を推奨します。
:::

## ピン配置

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/pinout.jpg" alt="Grove - トリプルカラー E-Ink ディスプレイ 2.13'' ピン配置" title="Pinout" />
    <figcaption><b>図 1</b>. <i>ピン配置</i></figcaption>
  </figure>
</div>

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Triple Color E-Ink Display 2.13'' |
|----------------|-------------|------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)|

:::note
**1** USBケーブルを慎重に接続してください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本の線しかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

**2** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

- **ステップ 1.** Grove - Base ShieldをSeeeduinoに接続します。

- **ステップ 2.** USBケーブルを使用してSeeeduinoをPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** Grove - Triple Color E-Ink Display 2.13''をGrove-Base Shieldの**UART**ポートに接続します。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' connect" title="connect" />
    <figcaption><b>図 2</b>. <i>接続</i></figcaption>
  </figure>
</div>

:::note
このモジュールはUARTインターフェースを介して制御ボードと通信します。Arduino UNOやSeeeduino V4.2のようなAtmega328pボードを使用する場合、コードをダウンロードする前にこのモジュールを取り外す必要があります。これは、ハードウェアシリアルポートが1つしかないためです。

このモジュールがUARTポートを占有している場合、ダウンロードプログラムはシリアルポートを使用できません。ただし、SAMDボード（Seeeduino LotusやArduino Megaなど）を使用する場合、2つ以上のハードウェアシリアルポートが利用可能です。そのため、コードをダウンロードする前にモジュールを取り外す必要はありません。
:::

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Githubから[デモコード](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_2.13/tree/master/examples/Eink_factory_code_213)をダウンロードします。

- **ステップ 2.** Arduino IDEで**Eink_factory_code_213.ino**ファイルを開きます。

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::success
すべてが正常に動作すれば、ディスプレイが点滅し、Seeedのロゴが表示されます。
:::

### DIY

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/demo.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
    <figcaption><b>図 3</b>. <i>DIYデモ</i></figcaption>
  </figure>
</div>

自分の画像を表示するのはとても楽しいです。では、自分のEペーパーをDIYする方法を説明します。

開始する前に、**Eink_factory_code_213.ino**を再確認してください。2つの配列が簡単に見つかります。

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

そして

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
> **const unsigned char IMAGE_BLACK[]**は黒い画像を表示するために使用されます  
> **const unsigned char IMAGE_RED[]**は赤い画像を表示するために使用されます

実際には、自分の画像を表示するには、これら2つの画像配列を置き換えるだけです。つまり、自分の画像配列を取得する必要があります。幸いなことに、**Image2LCD**というツールがあります。これをGoogleで検索すれば簡単に見つけることができます。このソフトウェアをダウンロードしてインストールしたと仮定します。次に、このソフトウェアの使用方法を説明します。

- **ステップ 1.** 104×212ピクセルの画像を準備します。

:::tip
インクスクリーンは、2階調のグレーレベル、つまり黒と白の画像のみをサポートします。画像のグレーレベルが多すぎる場合、全体の色が完全に表示されない可能性があります。
:::

- **ステップ 2.** **Image2LCD**ソフトウェアを開き、Openアイコンをクリックして画像を開きます。以下のウィンドウが表示されます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/image2LCD.png" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
    <figcaption><b>図 4</b>. <i>Image2LCD設定</i></figcaption>
  </figure>
</div>

以下のオプションを上記のように確認してください。

>1. 出力ファイルタイプ -> *.C  
>2. スキャンモード -> 水平スキャン  
>3. BitsPixel -> モノクロ  
>4. 最大幅と高さ -> 104 x 212  
>5. 色反転: このオプションを選択するかどうかは、表示したい効果に基づきます。詳細については、以下の**表1**を確認してください。

- **ステップ3.** 上記のオプションを設定した後、左上の**保存**ボタンをクリックするだけで、対応する画像配列が生成されます。その後、`factoryCode`配列を自分の画像配列に置き換えてください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/code.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title />
    <figcaption><b>図5</b>. <i>赤枠で選択された部分を置き換えるだけで、配列名はそのまま保持してください</i></figcaption>
  </figure>
</div>

前述のように、2つの配列がありますが、どちらを置き換えるべきか混乱するかもしれません。それは、どの表示効果を望むかによります。**表1**を確認してください。

|表示|<font color="red">黒背景 赤画像</font>|<font color="red">白背景 赤画像</font>|<font color="black">赤背景 黒画像</font>|赤背景 白画像 |
|---|----|----|----|----|
|黒配列|00|FF|00|FF|
|赤配列|画像(反転)|画像(反転)|画像|画像|

|表示|<font color="red">全画面赤</font>|<font color="black">白背景 黒画像</font>|<font color="red">赤背景赤</font>|黒背景 白画像 |
|---|----|----|----|----|
|黒配列|画像(反転)|画像(反転)|画像|画像|
|赤配列|00|FF|00|FF|

<div align="center"><b>表1.</b><i>配列表示効果</i></div>

:::note
        a. **00** は配列内のすべての要素が 0x00 であることを意味します。実際には 2756 個の 0x00 が必要です。  
        b. **FF** は配列内のすべての要素が 0xFF であることを意味します。実際には 2756 個の 0xFF が必要です。  
        c. **画像(反転)** は、**ステップ2(図4)** の**色反転**オプションを選択する必要があることを意味します。  
        d. **画像** は、**ステップ2(図4)** の**色反転**オプションを選択しないことを意味します。
:::
:::tip
        *2756 個の 0x00 または 0xFF 配列を作成する方法は？*  
        *心配しないでください。手間を省くために、0x00.c と 0xFF.c ファイルをクリックしてコードにコピーするだけです。*
:::
[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/ff.c)

初期状態は全画面白と仮定します。画像を更新する際には、まず黒配列が更新され、その後赤配列が更新されます。赤配列の画像が黒画像を上書きします。

このディスプレイは 104 x 212 のサイズであるため、104x212=22048 ピクセルがあります。各ピクセルは1ビットで制御されます。配列内の要素は2桁の16進数で表され、例えば **0xF0** のようになります。**0xF0** を2進数に変換すると **1111 0000** となります。値が1のピクセルは白を表示し、値が0のピクセルは対応する配列（赤または黒）の色を表示します。つまり、画像配列内の各要素は8ピクセルを制御します。そのため、22048/8=2756 要素の配列が必要です。

**ステップ4.** コードを Arduino にダウンロードし、ディスプレイモジュールを Arduino ボードに接続します。しばらく点滅した後、設定したパターンが表示されます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - トリプルカラー E-Ink ディスプレイ 2.13'' Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip)

- **[PDF]** [E-paper 2.13インチ データシート](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/E-paper_2.13_inch.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>