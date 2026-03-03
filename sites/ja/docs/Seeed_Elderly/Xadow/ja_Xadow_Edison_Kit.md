---
description: Xadow - Edison Kit
title: Xadow - Edison Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Edison_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/110040001%201.jpg)

Xadow - Edison Kitは、Intel® Edisonをベースにしたキットで、IoTやウェアラブルコンピューティング製品のプロトタイピングと製造の障壁を低くすることを目的としています。このキットは高性能かつ低消費電力を特徴としており、プロジェクトを小型で携帯可能なものにします。特にウェアラブルプロジェクトに適しています。Xadow - Edison Kitには、2つのXadow互換インターフェース、1つのSDインターフェース、1つのプログラマーインターフェース、1つのバッテリーインターフェースを備えたXadow - Edisonメインボード、Xadow - Edisonプログラマー、Xadow - Edison SDが含まれています。Xadow - Edisonを使用することで、標準のXadowインターフェースを介して多くのXadowモジュールを利用することができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html)

## 特徴
---
- Intel® Edison向けに設計。
- USB電源供給（4.75〜5.25V）。
- Xadow互換インターフェース。
- SDカードコネクタ。
- USBマイクロType-Bコネクタを使用したデバイスUARTブリッジ。
- USBマイクロType-ABコネクタを使用したUSB OTG。
- バッテリーチャージャー。
- 電源/スリープ/ファームウェア復旧ボタン入力。

## 仕様
---
- USB電源供給：4.75V〜5.25V
- 2つの標準Xadowインターフェース
- 1つのSDカードコネクタ
- 1つのUSBマイクロType-Bコネクタ
- 1つのUSBマイクロType-ABコネクタ
- 1つのバッテリーインターフェース
- 電源/スリープ用ボタン1つ、ファームウェア復旧用ボタン1つ
- 寸法：30.0 × 40.0 × 7.0 mm
- 動作温度：32〜104°F（0〜40°C）

## ブロック図
---
以下の接続をFFCケーブルを使用して行います：

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Connection.png)

:::note
    他のXadowモジュールをXadow - Edisonに接続する際は、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を、別のモジュールの直角に接続することです（各Xadowモジュールの4つの角を参照）。
:::

## Edison Arduino IDEのインストール
---

Intel Edison公式サイトを参照してください：Edison [Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)

1. Edison Arduino IDEをダウンロードします。（注：お使いのOSを選択してください。）

2. ダウンロードした.zip形式のEdison Arduino IDEが保存されているフォルダに移動します。

3. .7zファイルを右クリックし、「7-zip」を選択して「Extract to “arduino-…”」を選択します。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_Extract_7z.png)

4. 作成されたフォルダをクリックして進み、「arduino.exe」ファイルを見つけます。このファイルをダブルクリックすると、以下のウィンドウが開きます。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_ArduinoIDE.png)

## 必要なドライバのインストール
---
1. [FTDIドライバ](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/CDM%20v2.10.00%20WHQL%20Certified.exe)をダウンロードします。
2. ダウンロードした.exeファイル（「CDM…」という名前のはずです）を右クリックし、「管理者として実行」を選択します。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver.jpg)

3. 「Extract」をクリックします。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install.jpg)

4. 「Next」をクリックします。
5. 以下の画面が表示されたら「Finish」をクリックします。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install_ok.jpg)

6. 必要なRNDIS、CDC、およびDFUドライバをインストールするために、[Intel Edison Drivers](https://downloadcenter.intel.com/product/83267)をダウンロードします。
7. .exeファイルをダブルクリックしてインストールを開始します。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Intel_Edison_Driver.jpg)

## 例
---
1. ウェブサイト [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos) を開き、プロジェクト全体をダウンロードします。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Github_Xadow_Edison_Demos.png)

2. 「ツール」>「シリアルポート」をクリックし、Intel Edison が接続されている Com # を選択します。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Import_Indoor_Kit_Demo.png)

3. 「スケッチ」>「ライブラリをインポート…」>「ライブラリを追加」をクリックし、ステップ1でダウンロードしたライブラリをインポートします。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Add_Library.png)

4. 「ファイル」>「例」>「Xadow_Edison_Demos」>「Edison_Pedometer_with_OLED」をクリックし、デモを選択します。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Select_Pedometer_Demo.png)

5. FFCケーブルを使用して、以下の接続を行います。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Pedometer.jpg)

6. アップロードアイコンをクリックします。

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_upload.png)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Edison 初期設定ガイド](https://software.intel.com/en-us/get-started-edison-windows)
- [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos)
- [Xadow-Edison_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_sch_v1.0.pdf)
- [Xadow - Edison 設計ファイル v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_v1.0_sch%26pcb.zip)
- [Xadow - Edison プログラマー回路図 v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_sch_v1.0.pdf)
- [Xadow - Edison プログラマー設計ファイル v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip)
- [Xadow - Edison_SD 回路図 v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_sch_v1.0.pdf)
- [Xadow - Edison_SD 設計ファイル v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_v1.0_sch%26pcb.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>