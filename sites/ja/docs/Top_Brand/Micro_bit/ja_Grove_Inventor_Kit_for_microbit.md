---
description: Grove_Inventor_Kit_for_microbit
title: Grove Inventor Kit for microbit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Inventor_Kit_for_microbit
sku: 103100063, 103030195, 110060762
last_update:
  date: 01/05/2022
  author: Eico
no_comments: false
createdAt: '2023-01-10'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/ja/Grove_Inventor_Kit_for_microbit/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>

BBC micro:bit はポケットサイズのコンピュータで、電気やコーディングの知識があまりなくても、簡単にあなたの創造性を形にすることができます。micro:bit を使えば、ロボットから楽器まで、数え切れないほどの作品を生み出すことができます。しかし、もっと多くのものを作りたい場合、micro:bit 1 台だけではほとんど足りません。そこで、Grove Inventor Kit for micro:bit をご紹介します。

Grove Inventor Kit for Micro:bit は、micro:bit に無限の可能性をもたらします。このキットのコアボードは Grove shield for micro:bit で、これを使うことで、センサー、ディスプレイ、アクチュエータなど多くの Grove モジュールを micro:bit と連携させることができます。もし Grove を使ったことがなく、何なのか分からない場合は、こちらに Grove の紹介があります。知っておくべきことは、Grove を使えば、もはやはんだ付けやジャンパワイヤは不要だということです。プロトタイピングがより簡単で、はるかに便利になります。

私たちは、micro:bit を始めるための 8 個の Grove モジュールをすでに用意しました。これらの Grove モジュールを使えば、距離を測って表示したり、ジェスチャーで異なる音楽を再生したり、机や部屋のためのスマートガードを作ったりできます。必要なライブラリ（パッケージ）はすべて無料でダウンロードできるように用意してあります。micro:bit の初心者であっても心配はいりません。ステップバイステップで学べる 12 個の異なるプロジェクトも用意しています。上級ユーザーであれば、このキットは他の人よりも創造的なプロジェクトを作るのに役立つでしょう。

:::note

micro:bit の出力電圧は約 3.0V です。micro:bit 本体や AA 電池で回路に電源を供給すると、高い入力電圧と駆動電流を必要とする Grove モジュール（例：Grove - Ultrasonic Ranger）が正常に動作しない場合があります。このような Grove を正しく動作させるために、回路への電源供給には Grove shield for microbit 上の micro-USB ポートを使用してください。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 豊富で便利な周辺機能を備えたクールな拡張シールド
- micro:bit 用に厳選された 10 個の Grove モジュール
- すぐに始められる 12 個の素晴らしいプロジェクト
- 充実したドキュメント付きの説明書

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg" alt="pir" width={600} height="auto" /></p>

### **部品リスト**

<table align="center">
  <tbody>
  <tr>
    <td><h3>部品名</h3></td>
    <td><h3>数量</h3></td>
  </tr>
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Rotary Angle Sensor(P)</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove - Speaker </h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Light Sensor v1.2</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - WS2812 Waterproof LED Strip - 30 LEDs 1 meter</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Red LED</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro USB Cable - 48cm</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>12 Projects Manual</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Alligator Cable</h4></td>
    <td><h4>10</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Cable</h4></td>
    <td><h4>7</h4></td>
  </tr>
  </tbody></table>

## 入門ガイド

### Micro:bit の基礎

初めて Micro:bit に触れる場合は、いくつかの基本的な知識を知っておく必要があります。Micro:bit について詳しく知るには、[**here**](https://microbit.org/code/) をクリックしてください。

Micro:bit には 2 種類のエディタがあります。JavaScript Block Editor と Python Editor です。JavaScript Block Editor はグラフィカルプログラミングをサポートしており、学びやすいです。そのため、このチュートリアルは JavaScript Block Editor をベースにしています。

このキットを楽しむ前に、次の 2 つの簡単なステップを行ってください。その後でプログラミングを始めることができます。

#### ステップ1.Editor を開く

**[JavaScript Block Editor](https://makecode.microbit.org/)** をクリックして開くと、グラフィカルプログラミング用の Web ページが表示されます。

#### ステップ2.Grove パッケージを追加

- 右上の歯車をクリック > **Add Package** を選択

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

- プロジェクト URL を入力：**github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

- これでツールバーに **Grove** が表示されます。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### デモ 1. ジェスチャー認識

ジェスチャーセンサーは 9 種類の異なるジェスチャーを認識できます。このデモでは、認識された
ジェスチャー名を micro:bit に表示する方法を学びます。

#### 部品リスト

<table align="center">
  <tbody>
  <tr>
    <td><h3>部品名</h3></td>
    <td><h4>数量</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Universal 4 pin cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro-USB cable</h4></td>
    <td><h4>1</h4></td>
  </tr>

  </tbody></table>

#### 接続

- **micro:bit** を **Grove Shield for micro:bit** に差し込みます。
- Grove-Gesture を Grove Universal 4 pin cable を使って micro:bit の **I2C** ポートに接続します。
- micro:bit を Micro-USB ケーブルで PC に接続します。

:::warning

micro:bit を差し込むときは、LED アレイが上向きになっていることを必ず確認してください。そうしないと、ボードを破損するおそれがあります。

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- ステップ1:

  On Gesture ブロックを追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

- ステップ2:

  Right を選択します。これにより、センサーは手を右から左へ動かしたときにそれを認識できるようになります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

- ステップ3:

  Basic ブロック **show string** を追加し、Gesture ブロックの中に入れます。それから "Hello!" をダブルクリックして "Right" に変更します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

- ステップ4:

  同じ方法で "Left" と "Clockwise" を追加し、"Clockwise" の中に **show icon** を入れます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

- ステップ5:

  以上の作業が終わったら、プロジェクト名を "gesture" に変更します。その後、プロジェクトをボードにダウンロードできます。左下の **Download** をクリックし、ファイル **microbit-gesture.hex** を MICROBIT のフラッシュにダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  これでプロジェクトを楽しむ準備ができました。

:::tip
  ブロックは色で見つけることができます。例えば、**show icon** がどこにあるか分からない場合でも、それが青色で、モジュール **Basic** も青色なので、ここから見つけることができます。シンプルで効果的だと思いませんか？
:::

### デモ 2. 超音波メーター

このデモでは、超音波センサーを使って距離を測定し、その値を
ディスプレイに表示する方法を学びます。

#### 部品リスト

<table align="center">
  <tbody>
  <tr>
    <td><h3>部品名</h3></td>
    <td><h4>数量</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Universal 4 pin cable</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Micro-USB cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### 接続

- **micro:bit** を **Grove Shield for micro:bit** に差し込みます。

:::warning
micro:bit を差し込むときは、LED アレイが上向きになっていることを必ず確認してください。そうしないと、ボードを破損するおそれがあります。
:::

- Grove-Ultrasonic Ranger を Grove Universal 4 pin cable を使って micro:bit の **P0/P14** ポートに接続します。
- Grove-4-Digit Display を Grove Universal 4 pin cable を使って micro:bit の **P1/P15** ポートに接続します。
- micro:bit を Micro-USB ケーブルで PC に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- ステップ1:

  basic ブロック **on start** を追加し、次に変数ブロック **set item to 0** を追加して、‘items’ を ‘Display’ にリネームします。Grove パッケージの追加に成功していれば、“0” を Grove ブロックの 4-Digit Display at P1 and P15 に置き換えます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

- ステップ2：

  basic ブロックの forever を追加し、次に Grove ブロックの item show number 0 を追加し、‘item’ を ‘Display’ にリネームし、‘0’ を P0 の Grove ブロック Ultrasonic Sensor (in cm) に置き換えます。

- ステップ3：

  basic ブロックの pause (ms) (100) を追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

- ステップ4：

  プロジェクト名を "Ultrasonic Meter" に変更し、ダウンロードしてお楽しみください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

  [**Grove Inventor Kit for micro:bit ユーザーマニュアル**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**micro:bit 入門ビデオ**](http://microbit.org/start/)

  [**micro:bit について**](http://microbit.org/about/)

  [**micro:bit ハードウェア**](http://microbit.org/guide/hardware/)

  [**micro:bit アプリ**](http://microbit.org/code/)

  [**Grove Shield for micro:bit eagle プロジェクト**](https://files.seeedstudio.com/products/103100063/Res/Grove_Shield_for_microbit_v2.2_SCH-PCB_220406.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
