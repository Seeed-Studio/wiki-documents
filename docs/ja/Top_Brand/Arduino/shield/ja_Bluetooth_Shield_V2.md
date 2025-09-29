---
description: Bluetooth_Shield_V2
title: Bluetooth Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bluetooth_Shield_V2
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shiled_v2.JPG" alt="pir" width={600} height="auto" /></p>

Bluetooth ShieldはシリアルBluetoothモジュールを統合しています。これを使用すると、Arduino/Seeedstudioと簡単に連携し、透明なワイヤレスシリアル通信を実現できます。ArduinoのD0からD7の2つのピンを選択して、Bluetooth Shieldと通信するためのソフトウェアシリアルポートとして使用できます（D0とD1はハードウェアシリアルポートです）。また、このシールドには2つのGroveコネクタ（1つはデジタル、もう1つはアナログ）があり、Groveモジュールを取り付けることができます。

## 特徴
---
* 入力電圧: 3.3V
* ボーレート: 9600, 19200, 38400, 57600, 115200, 230400, 460800
* Seeeduino/Arduino互換
* 障害物のない室内で最大10mの通信距離
* プログラム可能なボーレートを持つUARTインターフェース（TTL）
* デフォルトのボーレート: 9600、データビット: 8、ストップビット: 1、パリティ: なし
* デフォルトのPINコード: "1234"
* 完全な設定コマンドセット
* オンボードPCBアンテナ

## インターフェース機能
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_V2.0_K.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>パッドタイプ</h3></td>
    <td><h3>説明</h3></td>
  </tr>
  <tr>
    <td><h4>BT_IO</h4></td>
    <td><h4>BluetoothモジュールのIOポート。読み取り、書き込みが可能。</h4></td>
  </tr>
  <tr>
    <td><h4>BT_RX</h4></td>
    <td><h4>BluetoothモジュールのUARTデータ入力。</h4></td>
  </tr>  
  <tr>
    <td><h4>BT_TX</h4></td>
    <td><h4>BluetoothモジュールのUARTデータ出力。</h4></td>
  </tr>
  <tr>
    <td><h4>2つのGroveコネクタ</h4></td>
    <td><h4>1つはデジタル（D8とD9）、もう1つはI2C/アナログ（A4とA5）。</h4></td>
  </tr>
  </tbody></table>


## デモンストレーション

### 1：2つのBluetooth Shieldを接続

このデモでは、2つのBluetooth Shieldを接続する方法を示します。

必要なもの：
- 2つの[Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7)
- 1つのBluetooth Shieldをマスターとして、もう1つをスレーブとして使用

**ハードウェアのインストール**

以下のように接続します：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image0.png" alt="pir" width={600} height="auto" /></p>

ジャンパーの正しい接続を確認してください：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image4.jpg" alt="pir" width={600} height="auto" /></p>

**コードのダウンロードとアップロード**

1. GitHubからコードをダウンロードします。[こちらをクリック](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip)して、Arduinoのライブラリフォルダに解凍してください。

2. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Master_Buttonを選択して、マスターのコードを開きます。

3. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_ledを選択して、スレーブのコードを開きます。

4. アップロードボタンをクリックしてコードをアップロードします。Arduinoの使い方に問題がある場合は、[こちら](/ja/Getting_Started_with_Seeeduino)をクリックしてヘルプを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_ide_1.jpg" alt="pir" width={600} height="auto" /></p>

**結果を確認**

1. マスターとスレーブの両方にコードをアップロードした後、2つのデバイスを同時にリセットします。

2. LEDが点滅しているのが確認でき、デバイスが初期化および接続中であることを示します。

3. 数秒後、LEDが点灯し、マスターとスレーブが接続されたことを示します。

!!!注意
    上記の現象が見られない場合は、電源を抜いて再度差し込んでみてください。


### 2：スマートフォンに接続

このデモでは、Bluetooth Shieldをスマートフォンに接続する方法を示します。

必要なもの：
- 1つのSeeeduino V3.0
- Bluetooth機能を備えたスマートフォン

Bluetooth SPPアプリを使用します。

**ハードウェアのインストール**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image1.png" alt="pir" width={600} height="auto" /></p>

**コードのダウンロードとアップロード**

1. GitHubからコードをダウンロードします。[こちらをクリック](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip)して、Arduinoのライブラリフォルダに解凍してください。

2. Arduino IDEを開き、File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_Temperatureを選択してコードを開きます。

3. アップロードボタンをクリックしてコードをアップロードします。Arduinoの使い方に問題がある場合は、[こちら](//Getting_Started_with_Seeeduino)をクリックしてヘルプを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Demo2.jpg" alt="pir" width={600} height="auto" /></p>

**SSPアプリのダウンロード**

ここではAndroidスマートフォンを使用します。私の端末はXiaomi 2Aです。Google Playを開き、「bluetooth spp」を検索すると、多くの結果が表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Find_spp.png" alt="pir" width={600} height="auto" /></p>

これらのアプリのほとんどは有用です。1つ選んで試してみてください。

**温度を取得**

SSPアプリをインストールした後、SeeedBTSlaveに接続してみてください。PINコードは「0000」です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_App_1.png" alt="pir" width={600} height="auto" /></p>

接続が成功したら、't'をSeeedBTSlaveに送信すると、現在の温度を取得できます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_get_temp.png" alt="pir" width={600} height="auto" /></p>

## リソース
*   [Eagle形式の回路図とレイアウト](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Buletooth_Shield_v2.0_sch_pcb.zip)

*   [モジュールデータシート](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>