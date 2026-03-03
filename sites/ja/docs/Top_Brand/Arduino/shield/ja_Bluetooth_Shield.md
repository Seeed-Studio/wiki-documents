---
description: Bluetooth Shield
title: Bluetooth Shield
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bluetooth_Shield
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield.jpg)

Bluetooth Shieldは、シリアルBluetoothモジュールを統合しています。これを使用することで、Arduino/Seeedstudioと簡単に透明なワイヤレスシリアル通信を行うことができます。ArduinoのD0からD7のピンのうち2つを選択して、Bluetooth Shieldと通信するためのソフトウェアシリアルポートとして使用できます（D0とD1はハードウェアシリアルポートです）。また、このシールドには2つのGroveコネクタ（1つはデジタル、もう1つはアナログ）があり、Groveモジュールを取り付けることができます。

モデル：[SLD63030P](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=19_21)

## 特徴 ##

- 入力電圧: 3.3V

- ボーレート: 9600, 19200, 38400, 57600, 115200, 230400, 460800

- Seeeduino/Arduino互換

- 障害物のない屋内で最大10mの通信距離

- UARTインターフェース（TTL）とプログラム可能なボーレート（SPPファームウェアがインストール済み）

- デフォルトボーレート: 38400、データビット: 8、ストップビット: 1、パリティ: なし

- デフォルトPINコード: "0000"

- 完全なセットの構成コマンド

- オンボードPCBアンテナ

- FCC Part 15認証済み

## インターフェース機能 ##

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/BluetoothInterface.jpg)

<table>
<tr>
  <th>パッドタイプ</th>
  <th>説明</th>
</tr>
<tr>
  <td>PIO1</td>
  <td>Bluetoothモジュールのステータス指示ポート。ArduinoのA1ポートで読み取ることが可能: 低-未接続、高-接続済み。</td>
</tr>
<tr>
  <td>BT_RX</td>
  <td>BluetoothモジュールのUARTデータ入力。</td>
</tr>
<tr>
  <td>BT_TX</td>
  <td>BluetoothモジュールのUARTデータ出力。</td>
</tr>
<tr>
  <td>2つのGroveコネクタ</td>
  <td>1つはデジタル（D8とD9）、もう1つはI2C/アナログ（A4とA5）。</td>
</tr>
</table>

## デモンストレーション1：2つのBluetooth Shieldの接続 ##

このデモでは、2つのBluetooth Shieldを接続する方法を示します。

必要なもの：
- 2つの[Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7)
- 1つの[Grove - Button](https://www.seeedstudio.com/depot/grove-button-p-766.html?cPath=85_50)
- 1つの[Grove - LED](https://www.seeedstudio.com/depot/grove-led-p-767.html?cPath=81_35)

1つのBluetooth Shieldをマスターとして設定し、もう1つをスレーブとして設定します。マスターにはボタンを接続し、スレーブにはLEDを接続します。

ボタンを押すと、スレーブのLEDが変化します。

### ハードウェアのインストール ###

まず、Bluetooth Shieldをマスターとして選択し、Grove - ButtonをこのBluetooth ShieldのD8,D9に接続します。

スレーブにはGrove - LEDをD8,D9のGroveに接続します。また、D7をTX、D6をRXとして設定します。以下のようになります：

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_2_connect.jpg)

### コードのダウンロードとアップロード ###

1. GitHubからコードをダウンロードします。[こちら](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code)をクリックして、Arduinoのライブラリフォルダに解凍してください。

2. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_Demo_Code -> Master_Buttonを選択して、マスターのコードを開きます。

3. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_ledを選択して、スレーブのコードを開きます。

4. アップロードボタンをクリックしてコードをアップロードします。Arduinoの使い方に関して問題がある場合は、[こちら](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/)をクリックしてヘルプをご覧ください。

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_ide_1.jpg)

### 結果の確認 ###

1. マスターとスレーブの両方にコードをアップロードした後、2つのデバイスを同時にリセットします。

2. 赤と緑のLEDが点滅し、デバイスが初期化および接続中であることを示します。

3. 数秒後、緑のLEDのみが点滅し、マスターとスレーブが接続されたことを示します。

4. ボタンを押すと、LEDの状態が変化します。

**注意**: 上記の現象が観察されない場合は、電源を抜いて再度差し込んでみてください。

## デモ 2：スマートフォンへの接続 ##

このデモでは、Bluetooth Shieldをスマートフォンに接続する方法を紹介します。

必要なものは、Seeeduino V3.0、Grove - 温度センサー、そしてBluetooth機能を備えたスマートフォンです。

Bluetooth SPPアプリを使用して、Bluetooth Shieldに「t」を送信すると、温度が返されます。

### ハードウェアのインストール ###

Grove - 温度センサーをBluetooth ShieldのA4、A5のGroveコネクタに接続します。

TXをD7に、RXをD6に接続します。以下の図を参照してください：

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Phone.jpg)

### コードのダウンロードとアップロード ###

1. GitHubからコードをダウンロードします。[こちら](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code)をクリックして、Arduinoのライブラリフォルダに解凍してください。

2. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_Temperatureを選択してコードを開きます。

3. アップロードボタンをクリックしてコードをアップロードします。Arduinoの使い方に関して問題がある場合は、[こちら](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/)をクリックしてヘルプをご覧ください。

 ![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Demo2.jpg)

### SPPアプリのダウンロード ###

ここではAndroidスマートフォンを使用します。私のスマートフォンはXiaomi 2Aです。Google Playを開き、「bluetooth spp」を検索すると、多くの結果が表示されます。

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Find_spp.png)

これらのアプリのほとんどは有用です。1つ選んで試してみてください。

### 温度の取得 ###

SPPアプリをインストールした後、SeeedBTSlaveに接続してみてください。PINコードは「0000」です。

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_App_1.png)

接続が成功したら、SeeedBTSlaveに「t」を送信すると、現在の温度を取得できます：

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_get_temp.png)

## 関連プロジェクト ##

残念ながら、[Recipe](https://www.seeedstudio.com/recipe/)にはBluetooth Shieldに関するデモがまだありません。

CAN BUS Shieldに関する素晴らしいプロジェクトを投稿して、$100のクーポンを獲得しましょう！お気軽に[recipe@seeed.cc](mailto:recipe@seeed.cc)までご連絡ください。

ここでは、[シリアルポートBluetoothモジュール](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)に関するいくつかのプロジェクトを紹介します。

### シリアルポートBluetoothモジュールとは ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Serial_Port_Bluetooth_Module_.jpg)

シリアルポートBluetoothは、有線シリアル接続の代替として使用できるドロップインモジュールです。MCUとGPS、PCと組み込みプロジェクト間の接続を確立するためのシリアルポート代替として簡単に使用できます。

### シリアルポートBluetoothモジュールのデモ ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Control_Multiple_servo_Motor_From_android_app.jpg)

これは、シリアルポートBluetoothモジュールを介してAndroidアプリから複数のサーボモーターを制御する方法に関する完全なチュートリアルです。

[これを作りたい](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)。

### 素晴らしいプロジェクトを共有しよう ###

作ることと共有することの精神を持って生まれた、それが私たちが信じる「メイカー」の本質です。

この精神があるからこそ、オープンソースコミュニティは今日のように繁栄しています。

あなたが何者であれ、何を作ったとしても、ハッカー、メイカー、アーティスト、エンジニアであっても構いません。

自分の作品を他の人と共有し始めるだけで、あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ[Recipe](https://www.seeedstudio.com/recipe/)で素晴らしいプロジェクトを共有し、Seeedのコアユーザーになるチャンスを手に入れましょう。

- コアユーザーとは、Seeed製品に高い関心を持ち、Recipeで重要な貢献をした人々です。

- 私たちはコアユーザーと協力して新製品の開発を行います。つまり、コアユーザーはSeeedの新製品を公式発売前に体験する機会を得ることができ、その代わりに製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。さらに、コアユーザーが何か良いアイデアを持っている場合、ハードウェア、PCBAサービス、技術サポートを提供することもあります。また、コアユーザーとのさらなる商業的な協力も十分に可能です。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[EAGLE]**[Eagle形式の回路図とレイアウト](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip)
- **[PDF]**[Bluetooth Shield 回路図 (SCH)](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20SCH.pdf)
- **[PDF]**[Bluetooth Shield PCB](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20PCB.pdf)
- **[Library]**[Arduino 1.0用 Bluetooth Shield ライブラリ](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BluetoothShieldDemoCode_For_Arduino1.0.zip)
- **[Instruction]**[Bluetooth ソフトウェアの使用説明書](https://seeeddoc.github.io/Bluetooth_Shield/res/BTSoftware_Instruction.pdf)
- **[Datasheet]**[Bluetoothモジュール データシート](https://seeeddoc.github.io/Bluetooth_Shield/res/Bluetooth_module.pdf)
- **[Connections]** [2つのBluetoothBee間の接続手順](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>