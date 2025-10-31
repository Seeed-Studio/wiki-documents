---
description: SeeedStudio GD32 RISC-V 開発ボード
title: SeeedStudio GD32 RISC-V 開発ボード
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SeeedStudio-GD32-RISC-V-Dev-Board
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-all.jpg)

SeeedStudio GD32 RISC-V 開発ボードは、最大108MHzで動作可能なGD32VF103VBT6 MCUをベースにしています。GD32VF103デバイスはRISC-Vコアに基づく32ビット汎用マイクロコントローラーで、128KBのオンチップフラッシュメモリと32KBのSRAMメモリを提供します。また、豊富なインターフェースリソースを備えています：5x U(S)ART、2 x I2C、3 x SPI、2 x I2S、2 x CAN2.0、1 x USBFS。

GD32VF103のすべてのI/Oピン（合計80 GPIO）をブレークアウトしており、多様な開発ニーズに対応します。オンボードの8MBフラッシュと256バイトEEPROMにより、より複雑なアプリケーションを実現できます。さらに、開発ボードにはLCD、Type-C USBポート、TFカードスロット、2つのユーザーボタン、3つのユーザーLEDなど、豊富な周辺リソースが提供されています。

## 特徴

+ GD32VF103VBT6 RISC-V MCU @108MHz
+ 128KBオンチップフラッシュ + 8MBオンボードフラッシュ
+ LCDインターフェース：16ビット8080インターフェースおよびSPIタッチスクリーン制御インターフェース
+ USB Type-C
+ GUIサポート
+ LCDディスプレイ

## ハードウェア概要

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-pin.jpg)

### ピン配置

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-c.jpg)

## 対応プラットフォーム

| PlatformIO IDE                                                                                            |
|-----------------------------------------------------------------------------------------------------|
| ![画像説明を入力してください](https://files.seeedstudio.com/wiki/Bazaar_Document/platformio-logo.17fdc3bc.png)  |

## はじめに

### PlatformIO IDEを使用したテストデモ

#### ハードウェア

**必要な材料**

SeeedStudio GD32 RISC-V 開発ボード、2.8インチ240x320ピクセル抵抗式LCDスクリーン、およびFPCケーブル。これらは製品と一緒に購入できます：[SeeedStudio GD32 RISC-V kit with LCD](https://www.seeedstudio.com/SeeedStudio-GD32-RISC-V-kit-with-LCD-p-4303.html)。

![画像説明を入力してください](https://www.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/d/gd32vf-103vbt6-connect-2.jpg) <!-- 画像リンクに問題があります -->

[USB 3.1 Type-C to A ケーブル](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

+ **ステップ1**
FPCケーブルをLCDディスプレイとSeeedStudio GD32 RISC-V 開発ボードに接続します。FPCケーブルを接続する際は、写真のように「青い」側を上にしておいてください。

+ **ステップ2**
USB Type-CケーブルをPCとGD32ボードに接続します。

これでハードウェアの設定が完了です。

#### ソフトウェア

:::note
GD32ボードはArduinoフレームワークをサポートしていますが、Arduino IDEとの完全な互換性はありません。そのため、ここではPlatformIO IDEを使用して簡単なデモを作成します。Arduino IDEバージョンは後ほど更新される予定です。
:::

+ **ステップ1**
PlatformIO IDEをセットアップします。PlatformIO IDEはVisual Studio Codeをベースにしています。
[Visual Studio Code](https://code.visualstudio.com/)をダウンロードしてください。
Visual Studio Codeの左側にある「拡張機能」アイコンをクリックします。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

検索エンジンに「platformIO」と入力してインストールします。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

+ **ステップ2**
「プロジェクトを開く」をクリックしてプロジェクトファイルを見つけます。ここでは["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip)を例として使用します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki3.png)

ArduinoフレームワークとGD32ボードを選択します。

+ **ステップ3**
PlatformIO IDEに["LCD"ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)を追加します。通常、ライブラリファイルは/C:/user/admin/.platformio/lib/にあります。「LCD」ライブラリを圧縮してターゲットパスに追加します。[Arduinoフレームワーク](https://github.com/LynnL4/framework-arduino-gd32v)をGitクローンし、/.platformio/packages/...に追加します。

+ **ステップ4**
作業列が左側に配置されていることが確認できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki4.png)

「main.cpp」をクリックしてコードをコンパイルします。コンパイルボタンはVisual Studio Codeの下部にあります。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

+ **ステップ5**
コードはバイナリファイルにコンパイルされます。[DFUツール](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)を使用してバイナリファイルをボードにダウンロードできます。また、DFU方式でコードをダウンロードするためにDFUファームウェアをインストールする必要があります。DFUファームウェアは[DFUツール](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)と同じドキュメントにあります。
+ **ステップ6**
ボードを確認し、USB Type-Cインターフェースを介してPCに接続します。ボードのブート方法が正しいことを確認してください。boot0を高レベルに接続し、boot1をグランドに接続します。これらはGD32ボードの左側にあり、数本のワイヤーで調整できます。
+ **ステップ7**
DFUツールを開き、上記の手順でボードを設定した後、DFUツールは自動的にボードを認識します。以下の画像のように表示されます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

次に、APPプログラムファイルの列にバイナリファイルを追加する必要があります。バイナリファイルは\TFT_GD32.pio\build\gd32vf103v-evalのパスにあります。インデックス4を選択し、「OK」をクリックしてコードをボードにダウンロードします。ダウンロード後、「Leave DFU」をクリックしてボードをDFUツールから切断します。その後、LCD上でグラフィック処理の時間をカウントするデモが表示されます。このデモは「TFT_eSPI」ライブラリのすべてのAPIをほぼ含んでいます。

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/gd32.gif)

:::note
別のコードをダウンロードしたい場合は、ボード上のリセットボタンを押してから、[DFUツール](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)を開いてください。DFUツールが再びボードを認識します。また、リセットボタンを押してボード内のコードを削除する場合には、boot0をグラウンドに接続することもできます。
:::

## リソース

+ **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
+ **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
+ **[Zip]** ["LCD" ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)
+ **[Zip]** プロジェクトファイル["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip)
+ **[Zip]** [DFUツール](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)

## 技術サポート & 製品ディスカッション

<br />弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>