---
description: Grove_Inventor_Kit_for_microbit
title: Grove Inventor Kit for microbit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Inventor_Kit_for_microbit
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>


BBC micro:bitはポケットサイズのコンピュータで、電気やコーディングの知識がほとんどなくても簡単に創造性を実現できます。micro:bitを使えば、ロボットから楽器まで、無限の創造の可能性を引き出すことができます。しかし、もっと多くのものを作りたい場合、1つのmicro:bitだけでは十分ではありません。そこで、Grove Inventor Kit for micro:bitを紹介します。

Grove Inventor Kit for Micro:bitは、micro:bitに無限の可能性をもたらします。このキットのコアボードはGrove shield for micro:bitで、これを使用することで、センサー、ディスプレイ、アクチュエータなどの多数のGroveモジュールをmicro:bitと連携させることができます。もしGroveを使ったことがなく、何なのか分からない場合は、以下にGroveの紹介があります。Groveを使えば、はんだ付けやジャンプワイヤーが不要になり、プロトタイピングがより簡単で便利になります。

私たちはすでにmicro:bitを始めるための8つのGroveモジュールを用意しました。これらのGroveモジュールを使えば、距離を測定して表示したり、ジェスチャーで異なる音楽を再生したり、机や部屋のスマートガードを作ったりすることができます。必要なライブラリ（パッケージ）は無料でダウンロードできるように準備しています。micro:bit初心者の方も心配ありません。12種類のプロジェクトを用意しており、ステップバイステップで学ぶことができます。上級者の方には、このキットが他のキットよりも創造的なプロジェクトを実現する手助けをします。


:::note

micro:bitの出力電圧は約3.0Vです。micro:bitやAA電池で回路に電力を供給すると、入力電圧と駆動電流が高いGroveモジュール（例：Grove - Ultrasonic Ranger）が正常に動作しない場合があります。このようなGroveモジュールを正常に動作させるためには、Grove shield for micro:bitのmicro-USBポートを使用して回路に電力を供給してください。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 特徴

  - 豊富で便利な周辺機器を備えたクールな拡張シールド
  - micro:bitで使用するために厳選された10個のGroveモジュール
  - すぐに始められる12の素晴らしいプロジェクト
  - 詳細な説明書付き


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
    <td><h4>Grove - Speaker</h4></td>
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
    <td><h4>12プロジェクトマニュアル</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>ワニ口クリップケーブル</h4></td>
    <td><h4>10</h4></td>
  </tr>
  <tr>
    <td><h4>Groveケーブル</h4></td>
    <td><h4>7</h4></td>
  </tr>
  </tbody></table>

## はじめに

### Micro:bit の基本

初めて Micro:bit を使用する場合、いくつかの基本的な知識を知っておく必要があります。[**こちら**](https://microbit.org/code/)をクリックして、Micro:bit についてさらに詳しく知ることができます。

Micro:bit では、JavaScript ブロックエディタと Python エディタの2種類のエディタを提供しています。JavaScript ブロックエディタはグラフィカルプログラミングをサポートしており、学びやすいです。このチュートリアルは JavaScript ブロックエディタを基にしています。

以下はキットを楽しむ前に必要な2つの簡単なステップです。この後、プログラムを開始できます。

#### ステップ1. エディタを開く

**[JavaScript ブロックエディタ](https://makecode.microbit.org/)** をクリックして開きます。グラフィカルプログラミングのウェブ画面が表示されます。

#### ステップ2. Grove パッケージを追加する
  - 右上のギアアイコンをクリック > **Add Package** を選択

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

  - プロジェクト URL を入力: **github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

  - ツールバーに **Grove** が表示されるようになります。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### デモ1. ジェスチャー認識

ジェスチャーセンサーは9種類の異なるジェスチャーを認識できます。このデモでは、認識されたジェスチャー名を Micro:bit に表示する方法を学びます。

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
    <td><h4>Micro-USB ケーブル</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### 接続

  - **micro:bit** を **Grove Shield for micro:bit** に差し込みます。
  - Grove-Gesture を Grove Universal 4 pin ケーブルを使用して **I2C** ポートに接続します。
  - Micro-USB ケーブルを使用して micro:bit を PC に接続します。

:::warning

micro:bit を差し込む際、LED アレイが上向きになっていることを確認してください。そうしないと基板が損傷する可能性があります。

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア
  - ステップ1:

  ジェスチャーブロックを追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

  - ステップ2:

  「右」を選択します。これにより、センサーが右から左に手を動かしたときに認識できるようになります。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

  - ステップ3:

  基本ブロック **show string** を追加し、それをジェスチャーブロックに埋め込みます。その後、「Hello!」をダブルクリックして「Right」に変更します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

  - ステップ4:

  同じ方法で「Left」と「Clockwise」を追加し、「Clockwise」に **show icon** を埋め込みます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

  - ステップ5:

  上記のすべてを完了したら、プロジェクト名を「gesture」に変更します。その後、プロジェクトをボードにダウンロードできます。左下の **Download** をクリックし、ファイル **microbit-gesture.hex** を MICROBIT のフラッシュにダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  これでプロジェクトを楽しむことができます。

:::tip
  ブロックは色で見つけることができます。例えば、**show icon** がどこにあるかわからない場合、青色であることから、モジュール **Basic** が青色であるため、そこにあることがわかります。簡単で効果的ですね。
:::

### デモ2. 超音波メーター

このデモでは、超音波センサーを使用して距離を測定し、その値をディスプレイに表示する方法を学びます。

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
    <td><h4>Micro-USB ケーブル</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### 接続

  - **micro:bit** を **Grove Shield for micro:bit** に差し込みます。

:::warning 
micro:bit を差し込む際、LED アレイが上向きになっていることを確認してください。そうしないと基板が損傷する可能性があります。
:::

  - Grove-Ultrasonic Ranger を Grove Universal 4 pin ケーブルを使用して **P0/P14** ポートに接続します。
  - Grove-4-Digit Display を Grove Universal 4 pin ケーブルを使用して **P1/P15** ポートに接続します。
  - Micro-USB ケーブルを使用して micro:bit を PC に接続します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

  - ステップ1:

  基本ブロック **on start** を追加し、変数ブロック **set item to 0** を追加します。「items」を「Display」に名前変更します。Grove パッケージを正常に追加した場合、「0」を Grove ブロック 4-Digit Display at P1 and P15 に置き換えます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

  - ステップ2:

  基本ブロック「forever」を追加し、次に Grove ブロック「item show number 0」を追加します。「item」を「Display」に名前変更し、「0」を Grove ブロック「Ultrasonic Sensor (in cm) at P0」に置き換えます。

  - ステップ3:

  基本ブロック「pause (ms) (100)」を追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

  - ステップ4:

  プロジェクト名を「Ultrasonic Meter」に変更し、ダウンロードして楽しんでください。


## 回路図オンラインビューア


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース

  [**Grove Inventor Kit for micro:bit ユーザーマニュアル**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**micro:bit 入門ビデオ**](http://microbit.org/start/)

  [**micro:bitについて**](http://microbit.org/about/)

  [**micro:bit ハードウェア**](http://microbit.org/guide/hardware/)

  [**micro:bit アプリ**](http://microbit.org/code/)

  [**Grove Shield for microbit_eagle file.zip**](https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip)

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