---
description: Grove - XBee Carrier
title: Grove - XBee Carrier
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-XBee_Carrier
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - XBee Carrier
category: Sensor
bzurl: https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134
oldwikiname:  Grove - XBee Carrier
prodimagename: Bee_Stem.jpg
surveyurl: https://www.research.net/r/Grove-XBee_Carrier
sku:  113020004
--- -->

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem.jpg)

Grove - XBee Carrierは、BeeシリーズおよびGroveユニット向けに設計されたワイヤレスセンサーネットワーク（WSN）ベースボードです。主に、ATMega328を搭載したRFBeeやWifi BeeのようなスタンドアロンBeeノード、およびXBee（Zigbee）モジュールに適しています。[RFBee](/ja/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")、[Wifi Bee](/ja/Wifi_Bee "Wifi Bee")、[XBee](http://garden.seeedstudio.com/index.php?title=Bee_series#ZigBee "Bee_series#ZigBee")、Bluetooth Beeと互換性があります。Bee用のソケットに加えて、2つのGroveコネクタも備えています。このボードはリチウムバッテリーまたはUSBケーブルで電源を供給できます。ワイヤレス充電器、ソーラーパネル、またはUSBケーブルを使用してバッテリーを充電することができます。オンボードのFT232RLチップは、Beeモジュールに直接プログラムをダウンロードするのに役立ちます。

ATMega328を搭載していないBluetooth BeeのようなBeeは、オンボードのFT232RL（USB to UART）を使用してのみ設定できます。これらのBeeはスタンドアロンアプリケーションには適していません。

オンボードのFT232RLは、Beeモジュールに接続されていない場合、他の3.3V USB to UARTインターフェースと同様に使用できます。これは、シリアルポートを介して3.3V MCUをプログラムする際に便利です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134)

## 特徴

---

* Bee互換ソケット

* 2つのGroveコネクタ

* 2つのGroveプレースホルダー

* PWR、充電インジケーター、UART伝送用LED

* 電源スイッチ

* リセットボタン

## 応用例

---

* [Wifi Bee](/ja/Wifi_Bee "Wifi Bee")のようなスタンドアロンBeeノードを使用したワイヤレスセンサーネットワーク。

* FT232RLを使用したBeeの設定補助。

* オンボード充電コントローラーを使用したリチウムイオンセルの充電器。

* FT232RLベースの3.3V USB-UARTとしての使用。

## 注意事項

---
<font color="red">
</font>

* Beeを正しい方向に挿入してください。シルクスクリーン上のBeeのアウトラインを使用してください。

## 仕様

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col">項目</th>
<th scope="col">最小</th>
<th scope="col">標準</th>
<th scope="col">最大</th>
<th scope="col">単位</th>
</tr>
<tr>
<th scope="row">電圧</th>
<td>3.0</td>
<td>3.3</td>
<td>3.6</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">充電コントローラー</th>
<td colspan="4">CN3063</td>
</tr>
<tr>
<th scope="row">充電器（LiPoバッテリーの充電電圧）</th>
<td colspan="4">4.4Vから6V（CN3063仕様に準拠）</td>
</tr>
<tr>
<th scope="row">充電電流</th>
<td colspan="4">最大500mA</td>
</tr>
<tr>
<th scope="row">3.3V LDO</th>
<td colspan="4">低ノイズ・低消費電力タイプ。バッテリー用途に適しています。</td>
</tr>
<tr>
<th scope="row">I/Oロジック</th>
<td colspan="4">3.3Vロジック</td>
</tr></table>

## インターフェース機能

---
![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Xbee_Carrier_Interface.jpg)

**U2:** RT9167A_33PB IC、3.3V LDO 低ノイズマイクロパワーレギュレータ  
**U3:** CN3083 IC、リチウム電池用充電コントローラ（ソーラーパネルを使用して充電）  
**U4:** FT232RL IC、USBからシリアルUARTインターフェース  

## 使用方法

---
RFBeeを使用する場合、Arduino IDEを使用するために以下のRFBee上のATmega168のピン配置が適用されます。

ピン5はI/O用のGroveコネクタ - 黄色のワイヤ  
ピン6はI/O用のGroveコネクタ - 白色のワイヤ  

ピン16は、I/O Groveに十分な電力を供給するために低電位に駆動する必要がある場合があります（MOSFET経由）。  
ピン17は、I2C Groveに十分な電力を供給するために低電位に駆動する必要がある場合があります（MOSFET経由）。  

**注意:** 白色と黄色のワイヤが一方で入れ替わったx2 Groveケーブルを使用して、両方のI/Oにアクセスすることができます。

### ハードウェアのインストール

#### 充電

<!-- アプリケーションに適したバッテリーを**SeeedStudio**の[バッテリーと充電器](/ja/Solar_Charger_Shield_V2.2 "Solar_Charger_Shield_V2.2")から選択できます -->

* 3.7V LiPoバッテリーを**BAT** JSTソケットに接続します。

* ソーラーパネルのような電源を**CHARGER** JSTソケットに接続します。

* バッテリーは継続的に充電されます。充電が終了すると、「OK」とマークされたLEDが点灯します。

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_with_LiPOBattery_Being_Charged_By_SolarCell.jpg)

#### スタンドアロンBeeノードとの連携

BeeノードはスタンドアロンのArduino互換ワイヤレスノードです。**SeeedStudio**には、[Wifi Bee](/ja/Wifi_Bee "Wifi Bee")と[RFBee](/ja/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")の2つのノードがあります。

* 以下の画像は、[WiFi Bee](/ja/Wifi_Bee "Wifi Bee")を**Grove - XBee Carrier**に接続した例を示しています。

* 任意のGroveモジュールを提供されたGroveソケットに接続できます。

* WiFi Beeのオンボード**AtMega328P**のプログラミングは、USBポートを介してPCに接続することで行われます（FT232RLが使用されます）。

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Grove.jpg)

Bee Stem Connected to Wifi BEE and A Twig.jpg

* プログラミング例については、[Wifi Bee使用ドキュメント](http://garden.seeedstudio.com/index.php?title=Wifi_Bee#Usage "Wifi_Bee#Usage")を参照してください。

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_To_RFBee_And_TwoTwigs.jpg)

Bee Stem Connected To RFBee And TwoTwigs.jpg

#### Beeモジュールとの連携

このセクションでは、Arduinoブートローダーで事前にプログラムされていないMCUを持つBeeモジュールについて説明します。これらは主にワイヤレス送受信機として機能します。これらの**Beeモジュール**（Bluetooth Beeなど）はPCとも通信できます。この場合、**Grove - XBee Carrier**はこれらのBeeモジュールのキャリアとして機能し、必要な電力を供給し、FT232RL USBからUARTを介してPCとの通信インターフェースを提供します。

<!-- *   以下の例では、[Bluetooth Bee](/ja/Bluetooth_Bee "Bluetooth Bee")が**Grove - XBee Carrier**に接続され、USB-UARTを使用して設定されています -->

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_Connected_to_BluetoothBee.jpg)

* Bluetooth BeeとPCの通信は、シリアルポートターミナルアプリケーションでキャプチャされます。

* 以下のスクリーンショットに、コマンドとその応答が表示されています。

* Bluetooth BeeはINQモードに設定され、近くのBluetoothデバイスを検出しました。

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_BluetoothBee_Commands.png)

<!-- *   [Bluetooth Bee](/ja/Bluetooth_Bee "Bluetooth Bee")の使用に関する詳細は、[Bluetooth Beeコマンドドキュメント](/ja/Bluetooth_Bee#Commands_to_change_default_configuration "Bluetooth Bee")を参照してください。 -->

### プログラミング

```
/*
  XBee CarrierとRF Beeで使用するためのテストコード

  PD5（例: Groveリレー）を1秒間オンにし、その後1秒間オフにする動作を繰り返します。
*/

void setup()
{
    // デジタルピンを出力として初期化します [ピン5はI/O用のGroveコネクタです]
    pinMode(5, OUTPUT);

    // リレーが動作するようにするために必要な行（Groveに電力を供給します）
    pinMode(16, OUTPUT);
    digitalWrite(16, LOW);
}

void loop() {
    digitalWrite(5, HIGH);   // LEDをオンにする
    delay(1000);              // 1秒待機
    digitalWrite(5, LOW);    // LEDをオフにする
    delay(1000);              // 1秒待機
}
```

## バージョントラッカー

---
<table>
<tr>
<th>改訂版</th>
<th>説明</th>
<th>リリース日</th>
</tr>
<tr>
<td width="300px">v0.9b</td>
<td width="500px">初回公開リリース</td>
<td width="200px">2011年7月13日</td>
</tr></table>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - XBee Carrier Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar)

* [Grove - XBee Carrier PDF 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/Bee_Stem_v0.9b.pdf)

* [CN3063](http://www.consonance-elec.com/pdf/%E6%8A%80%E6%9C%AF%E8%AF%B4%E6%98%8E%E4%B9%A6/DSC-CN3063.pdf)

* [RT9167A_33PB](http://www.richtek.com/download_ds.jsp?s=238)

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