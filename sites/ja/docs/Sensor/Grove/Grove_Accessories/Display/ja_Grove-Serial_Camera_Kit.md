---
description: Grove - Serial Camera Kit
title: Grove - Serial Camera Kit
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Serial_Camera_Kit
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - Serial Camera Kit
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Serial-Camera-Kit-p-1608.html
oldwikiname:  Grove - Serial Camera Kit
prodimagename: GSCK_Introduction.jpg
surveyurl: https://www.research.net/r/Grove_Serial_Camera_Kit
sku:  101020000
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Introduction.jpg)

Grove - Serial Camera Kitは、1つのコントロールボードと2つの交換可能なレンズ（標準レンズと広角レンズ）を含んでいます。このカメラはArduinoを中心とした画像認識プロジェクトに最適です。30万画素はArduinoにとって負担が少なく、リアルタイム画像認識が可能です。このキットには2種類のレンズが付属しており、標準レンズは一般的な写真撮影に、広角レンズは監視プロジェクトに特に適しています。

## 仕様

---

* 入力電圧: 5V

* ピクセル: 300,000

* 解像度: 640*480, 320*240, 160*120

* UARTボーレート: 9600~115200

* 通信: RS485およびRS232

* 写真JPEG圧縮、高、中、低グレード選択可能

* AGC（自動ゲイン制御）

* 自動露出イベント制御

* 自動ホワイトバランス制御

* 焦点調整可能

## デモンストレーション

---
このデモでは、Grove - Serial Camera Kitの使用方法を紹介します。必要なものは、[Seeeduino](https://www.seeedstudio.com/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7)、[SD Card Shield](https://www.seeedstudio.com/sd-card-shield-v40-p-1381.html?cPath=105)、および[Grove - Button](/ja/Grove-Button)です。ボタンを押すと写真を撮影し、SDカードに保存します。

以下の手順に従って進めれば、簡単にGrove - Serial Camera Kitを動作させることができます。それでは始めましょう。

### ハードウェアのインストール

SD Card Shield V4.0には2つのGroveインターフェースがあるため、Base Shieldは必要ありません。ボタンをI2C Groveに接続し、カメラをUART Groveに接続するだけです。

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Hardware.jpg)

### コードのダウンロードとアップロード

デモコードはGitHubからダウンロードできます。[こちら](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)をクリックしてください。

その後、コードをアップロードすると動作します。

### 写真を撮る

デモコードのアップロードが完了したら、写真を撮る準備が整います。ボタンを押して数秒待つと、写真がSDカードに保存されます。

以下の画像は、私のオフィスの天井を標準レンズで撮影したものです。

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_60.jpg)

### レンズの交換

もう1つの広角レンズがありますので、交換方法を紹介します。

まず、ドライバーを用意してください：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step1.jpg)

次に、レンズの側面のネジを外します：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step2.jpg)

レンズを回してみてください。ねじ込まれているので取り外せます：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step3.jpg)

広角レンズを使用して写真を撮影しました。これも私のオフィスの天井です！

以前の天井画像と何か違いが見つかりますか？

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_90.jpg)

### 焦点の合わせ方

レンズを異なる深さでねじ込むことで、異なる焦点距離を得ることができます。試してみてください。

## リソース

* **[ライブラリ]** [デモコード](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)
* **[データシート]** [CJ OV528](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/res/cj-ov528_protocol.pdf)

## プロジェクト

**Grove Camera -> PHPoC -> Web Application** このプロジェクトでは、Groveカメラからデータを読み取り、WebSocketを介してWebアプリケーションにデータを送信する方法を示します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phpoc_man/grove-camera-phpoc-web-application-1dfd63/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>