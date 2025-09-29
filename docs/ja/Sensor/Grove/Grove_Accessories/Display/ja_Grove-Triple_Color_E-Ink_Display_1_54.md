---
description: Grove - トリプルカラー E-Ink ディスプレイ 1.54"
title: Grove - トリプルカラー E-Ink ディスプレイ 1.54"
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Triple_Color_E-Ink_Display_1_54
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg" alt="pir" width={600} height="auto" /></p>



Grove - トリプルカラー E-Ink ディスプレイ 1.54'' は、電源を切った後でも表示を維持できる画面で、E-Paper（電子ペーパー）または E-Ink と呼ばれます。このディスプレイは、TFT アクティブマトリックス電気泳動ディスプレイであり、インターフェースとリファレンスシステム設計を備えています。1.54 インチのアクティブエリアには 152x152 ピクセルが含まれ、1 ビットの白/黒および 1 ビットの赤のフル表示機能を持っています。

超低消費電力、広視野角、電力を使用しないクリアな表示といった利点により、棚ラベルや産業用計器などのアプリケーションに最適な選択肢です。




<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)
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
|ディスプレイ解像度|152(H) x 152(V) ピクセル|
|DPI|140|
|インターフェース|UART|
|Arduino のボーレート|230400|


:::note
頻繁な連続リフレッシュは E-Ink に修復不可能な損傷を与える可能性があります。リフレッシュ間隔は 180 秒以上を推奨します。
:::

## ピン配置



<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/pinout.jpg" alt="Grove - トリプルカラー E-Ink ディスプレイ 1.54'' ピン配置" title="Pinout" />
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

### Arduino デモ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - トリプルカラー E-Ink ディスプレイ 1.54'' |
|----------------|-------------|---------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。

**2** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

- **ステップ 1.** Grove - Base Shield を Seeeduino に接続します。

- **ステップ 2.** USBケーブルを使用して Seeeduino をPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** Grove - トリプルカラー E-Ink ディスプレイ 1.54'' を Grove-Base Shield の **UART** ポートに接続します。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/connect.jpg" alt="Grove - トリプルカラー E-Ink ディスプレイ 1.54'' 接続" title="接続" />
    <figcaption><b>図 2</b>. <i>接続</i></figcaption>
  </figure>
</div>

:::note
このモジュールは UART インターフェースを介して制御ボードと通信します。Arduino UNO や Seeeduino V4.2 のような Atmega328p ボードを使用する場合、コードをダウンロードする前にこのモジュールを取り外す必要があります。これは、ハードウェアシリアルポートが1つしかないためです。このモジュールが UART ポートを占有している場合、ダウンロードプログラムはシリアルポートを使用できません。ただし、Seeeduino Lotus や Arduino Mega のような SAMD ボードを使用する場合、2つ以上のハードウェアシリアルポートが利用可能です。そのため、コードをダウンロードする前にモジュールを取り外す必要はありません。
:::

#### ソフトウェア

:::note
Arduino を初めて使用する場合は、開始する前に [Arduino の始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) をご覧になることを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_1.54/tree/master/examples/E_ink154_factoryCode) を Github からダウンロードします。

- **ステップ 2.** Arduino IDE で **E_ink154_factoryCode.ino** ファイルを開きます。

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

:::success
すべてが正常に動作すれば、ディスプレイが点滅し、Seeed のロゴが表示されます。
:::

### DIY

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/demo_wiki.jpg" alt="Grove - トリプルカラー E-Ink ディスプレイ 1.54'' DIY" title="DIY デモ" />
    <figcaption><b>図 3</b>. <i>DIY デモ</i></figcaption>
  </figure>
</div>

自分の画像を表示するのはとても楽しいです。では、Eペーパーを自分でカスタマイズする方法を説明します。

開始する前に、**E_ink154_factoryCode.ino** を再度確認してください。以下の2つの配列が簡単に見つかります。

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

ご覧の通り、2つの配列は **const unsigned char IMAGE_BLACK[]** と **const unsigned char IMAGE_RED[]** と呼ばれています。
> **const unsigned char IMAGE_BLACK[]** は黒の画像表示に使用されます  
> **const unsigned char IMAGE_RED[]** は赤の画像表示に使用されます

実際には、自分の画像を表示するには、これら2つの画像配列を置き換えるだけです。つまり、自分の画像配列を取得する必要があります。幸いなことに、**Image2LCD** というツールがあります。Googleで検索すれば簡単に見つかります。このソフトウェアをダウンロードしてインストールしたと仮定します。次に、このソフトウェアの使用方法を説明します。

- **ステップ 1.** 152*152 ピクセルの画像を準備します。

:::tip
インクスクリーンは2階調のグレーレベル、つまり白黒の画像のみをサポートします。画像のグレーレベルが多すぎる場合、全体の色が完全に表示されない可能性があります。
:::

- **ステップ 2.** **Image2LCD** ソフトウェアを開き、アイコンをクリックして画像を開きます。以下のウィンドウが表示されます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/image2LCD_1.png" alt="Grove - トリプルカラー E-Ink ディスプレイ 1.54'' DIY" title="DIY デモ" />
    <figcaption><b>図 4</b>. <i>Image2LCD 設定</i></figcaption>
  </figure>
</div>

上記のオプションを確認してください。

>1. 出力ファイルタイプ -> *.C  
>2. スキャンモード -> 水平スキャン  
>3. BitsPixel -> モノクロ  
>4. 最大幅と高さ -> 152 x 152  
>5. 色反転: このオプションをチェックするかどうかは、表示したい効果に基づきます。詳細については、以下の **表1** を確認してください。

- **ステップ3.** 上記のオプションを設定した後、左上の **保存** ボタンをクリックするだけで、対応する画像配列が生成されます。その後、factoryCode 配列を自分の画像配列に置き換えてください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/code.png" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title />
    <figcaption><b>図5</b>. <i>赤枠で選択された部分を置き換えるだけです。配列名はそのまま保持してください。</i></figcaption>
  </figure>
</div>

前述の通り、2つの配列がありますが、どちらを置き換えるべきか迷うかもしれません。それは、どの表示効果を望むかによります。**表1** を確認してください。

|表示|<font color="red">黒背景に赤画像</font>|<font color="red">白背景に赤画像</font>|<font color="black">赤背景に黒画像</font>|赤背景に白画像 |
|---|----|----|----|----|
|黒配列|00|FF|00|FF|
|赤配列|画像(反転)|画像(反転)|画像|画像|

|表示|<font color="red">全画面赤</font>|<font color="black">白背景に黒画像</font>|<font color="red">赤背景に赤</font>|黒背景に白画像 |
|---|----|----|----|----|
|黒配列|画像(反転)|画像(反転)|画像|画像|
|赤配列|00|FF|00|FF|

<div align="center"><b>表1.</b><i>配列表示効果</i></div>

:::note
        a. **00** は配列内のすべての要素が 0x00 であることを意味します。実際には 2888 個の 0x00 が必要です。  
        b. **FF** は配列内のすべての要素が 0xFF であることを意味します。実際には 2888 個の 0xFF が必要です。  
        c. **画像(反転)** は **ステップ2(図4)** で **色反転** オプションをチェックする必要があることを意味します。  
        d. **画像** は **ステップ2(図4)** で **色反転** オプションをチェックしないことを意味します。
:::
:::tip
        *2888 個の 0x00 または 0xFF 配列を作成するには？*  
        *心配しないでください。手間を省くために、0x00.c と 0xFF.c ファイルをクリックしてコードにコピーするだけです。*
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)

初期状態は全画面白と考えます。画像を更新する際、まず黒配列が更新され、その後赤配列が更新されます。赤配列の画像が黒画像を上書きします。

このディスプレイは 152 x 152 のサイズであるため、152x152=23104 ピクセルがあります。各ピクセルは1ビットで制御されます。配列内の要素は2桁の16進数で表され、例えば **0xF0** のようになります。**0xF0** を2進数に変換すると **1111 0000** になります。値が1のピクセルは白を表示し、値が0のピクセルは対応する配列（赤または黒）の色を表示します。つまり、画像配列内の各要素は8ピクセルを制御します。そのため、23104/8=2888 要素の配列が必要です。

**ステップ4.** コードを Arduino にダウンロードし、ディスプレイモジュールを Arduino ボードに接続します。しばらく点滅した後、設定したパターンが表示されます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Triple Color E-Ink Display 1.54'' Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip)

- **[PDF]** [E-paper 1.54インチ データシート](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/E-Ink%20152X152-Black%2CWhite%20and%20Red-1.54inch.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なるニーズやご希望に応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>