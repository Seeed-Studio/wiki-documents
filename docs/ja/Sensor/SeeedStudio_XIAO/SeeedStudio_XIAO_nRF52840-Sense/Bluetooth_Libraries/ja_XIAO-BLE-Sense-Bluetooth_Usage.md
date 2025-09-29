---
description: Seeed nRF52 ボードライブラリ用
title: Seeed nRF52 ボードライブラリ用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Bluetooth使用方法（Seeed nRF52 ボードライブラリ）

**Seeed Studio XIAO nRF52840** と **Seeed Studio XIAO nRF52840 Sense** は両方ともBluetoothコネクティビティをサポートしています。このwikiでは、「Seeed nRF52 ボードライブラリ」で使用される基本的なBluetooth機能を紹介します。

## はじめに

### 必要なハードウェア

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Bluetooth接続機能付きスマートフォン
- 1 x USB Type-Cケーブル

### 必要なソフトウェア

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### インストール

> 使用する機能は「Seeed nRF52 ボードライブラリ」にパッケージされているため、別のサードパーティライブラリをインストールする必要はありません。この手順はスキップできます。

- **方法1**（この方法は上記のコードライブラリの両方で利用可能です。）

zipライブラリをダウンロードしたら、Arduino IDEを開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。ダウンロードしたzipファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>


- **方法2**（ArduinoBLEライブラリのみインストール可能です。）

ライブラリマネージャーは、Arduino IDEバージョン1.5以降（1.6.x）から追加されました。「Sketch」メニューの「Include Library」、「Manage Libraries...」にあります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>


ライブラリマネージャーを開くと、ワンクリックでインストールできるライブラリの大きなリストが表示されます。製品のライブラリを見つけるには、製品名または「k type」や「digitizer」などのキーワードで検索すると、必要なライブラリが表示されます。目的のライブラリをクリックすると、「Install」ボタンが表示されます。そのボタンをクリックすると、ライブラリが自動的にインストールされます。インストールが完了したら、ライブラリマネージャーを閉じます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## アプリケーション例

ここではBluetoothアプリケーションを紹介します。

### PCキーボードをモバイルフォンにワイヤレス接続

**ステップ1.** Arduinoアプリケーションを起動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>


**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。ここでは「Seeed nRF52 ボードライブラリ」を使用しています。

> ボードライブラリのインストールについては、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照してインストールを完了してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>


**ステップ3.** **「File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard」** に移動し、「blehid_keyboard」サンプルファイルを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>


**ステップ4.** 「Upload」をクリックし、Arduino IDEの右上角にある「monitor」を開きます。モニターは次のように表示されます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>


**ステップ5.** モバイルフォンで「nRF Connect for Mobile」アプリまたは「LightBlue」アプリを開き、同時にフォンがBluetoothに接続されていることを確認します。しばらくすると、「XIAO nRF52840」という名前のデバイスがリストに表示されます。

- **nRF Connect for Mobile APP** の場合：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>


- **LightBlue APP** の場合：

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>


**ステップ6.** デバイスを単純にクリックすると、接続が自動的に完了します。その後、PCキーボードでモニターに文字を入力し、モバイルフォンで何が起こるかを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>


## さらに詳しく

より多くの例を試したい場合は、`File > Examples > INCOMPATIBLE > ArduinoBLE` に移動し、**ArduinoBLE** の下にあるすべての例を確認してください。


## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>