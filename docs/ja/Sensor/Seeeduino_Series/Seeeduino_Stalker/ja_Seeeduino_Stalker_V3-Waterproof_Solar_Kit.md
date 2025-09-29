---
description: Seeeduino Stalker V3 - 防水ソーラーキット
title: Seeeduino Stalker V3 - 防水ソーラーキット
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Stalker_V3-Waterproof_Solar_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_V3-Waterproof_Solar_Kit.JPG)

Stalker Kitは、<a href="/ja/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker_v3 </font></span></a>をベースにした**ワイヤレスセンサーネットワーク**ノードの**データロガー**です。Seeeduino Stalker v3は、機能が豊富なArduino互換のワイヤレスセンサーネットワークノードです。そのモジュール構造とRTCやSDカードインターフェースなどのオンボード周辺機器により、センサー値を正確なタイムスタンプとともに定期的に記録することができます。Seeeduino Stalkerは、追跡、監視、制御プロジェクトに最適な候補です。

Stalker Kitには、Seeeduino Stalker v3.0を使用するために必要なすべてのコンポーネントが含まれています。Stalker Kitは防水性のプラスチックケースが付属しているため、屋外で使用することができます。そのため、特別なアイデアがある場合には水中に置くことも可能です。このキットにはソーラーパネルとLiPoバッテリーが付属しており、砂漠やジャングルなどの遠隔地で、収集した太陽エネルギーをLiPoバッテリーに蓄えて動作させることができます。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Stalker-V3-Waterproof-Solar-Kit-p-2441.html)

## Stalker Kitの内容

---
<table>
<tr>
<th> コンポーネント </th>
<th> 説明 </th>
<th> 数量 </th>
</tr>
<tr>
<td> <a href="/ja/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker_v3 </font></span></a> </td>
<td> Arduino互換のWSNノード </td>
<td> 1 </td>
</tr>
<tr>
<td> リチウムイオンポリマーバッテリー - 1050mAh容量 </td>
<td> Stalker v3を使用してソーラーパネルから充電 </td>
<td> 1 </td>
</tr>
<tr>
<td> SanDisk microSD™カード 4GB </td>
<td> センサー値とタイムスタンプデータを記録 </td>
<td> 1 </td>
</tr>
<tr>
<td> <a href="https://www.seeedstudio.com/mini-usb-cable-110cm-p-252.html?cPath=178_179" ><span><font size={"3"}> Mini USBケーブル 100cm </font></span></a> </td>
<td> UartSBeeと使用するプログラミングケーブル </td>
<td> 1 </td>
</tr>
<tr>
<td> <a href="https://www.seeedstudio.com/uartsbee-v31-p-688.html?cPath=109" ><span><font size={"3"}> UartSBee V4 </font></span></a> </td>
<td> Arduino IDEを使用してStalker V3をプログラムするためのUSB-シリアルポートを提供 </td>
<td> 1 </td>
</tr>
<tr>
<td> 6ピンケーブル </td>
<td> UartSBeeをSeeduinoに接続 </td>
<td> 1 </td>
</tr>
<tr>
<td> <a href="https://www.seeedstudio.com/Seeeduino-Stalker-v3-enclosure-p-2419.html" ><span><font size={"3"}> Seeeduino Stalker v3エンクロージャ </font></span></a> </td>
<td> 防水プラスチックケース </td>
<td> 1 </td>
</tr>
<tr>
<td> 0.5wソーラーパネル 53x53mm </td>
<td> 電源 </td>
<td> 1 </td>
</tr>
<tr>
<td> CR2032ボタン電池 </td>
<td> </td>
<td> 1 </td>
</tr>
</table>

## 特徴

---

* Seeeduino Stalkerはワイヤレスセンサーネットワークノードとして設計されているため、耐候性のあるエンクロージャが欠かせません。この点を考慮し、Seeeduino Stalkerの新しいバージョン（v1.0からv2.0への改訂）を再設計する際に、PCBの形状とネジの位置を調整し、このエンクロージャに収まるようにしました。このエンクロージャは頑丈で、防水シールが施されています。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Waterproof_enclosure.jpg).

* エンクロージャの上部の蓋は透明で、内部にソーラーパネルを取り付けることができます。安定性を高めるために、ソーラーパネルはエンクロージャの上部の蓋の下に固定されています。以下の画像をご覧ください：

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_kit_v3.0_1.jpg).

* 1050mAhのリチウムポリマーバッテリーは、Seeeduino Stalkerの下にエンクロージャ内に収納できます。ネジとプラスチック製の支柱を使用して固定することができます。

|![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_kit_battery.jpg) |![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_v3_with_battery.jpg)
|---|---|

:::note
[UartSBee_V4](/ja/UartSBee_V4 "UartSBee_V4")は、Seeeduino Stalkerに搭載されているBeeシリーズソケットに挿入することはできません。[UartSBee_V4](/ja/UartSBee_V4 "UartSBee_V4")は、上記の写真に示されている他のBeeモジュールをコンピュータに接続するために設計されており、これらのBeeモジュール用のソケットに直接挿入することはできません。Seeeduino StalkerとUartSBee_V4には、それぞれ別の5ピンヘッダーがあり、これらを相互に接続することができます。このピンヘッダーは以下の構成になっています：VCC（Stalkerへの電源供給）、TXD、RXD、DTR（Stalkerのリセット信号を制御するため）、およびGND。
:::


## 使用方法

---
<big>はじめに</big>

もし「フィジカルコンピューティング」の世界に初めて触れる場合、または Seeeduino Stalker が初めてのフィジカルコンピューティングプラットフォームである場合は、<a href="/ja/Seeeduino-Stalker_v3"><span><font size={"3"}>Seeeduino</font></span></a>から始めることをお勧めします。

以下の手順は、Seeeduino Stalker v3 を使い始めるために必要なハードウェアおよびソフトウェアリソースを準備するのに役立ちます。

**ステップ 1: ハードウェアの準備**

最初のプログラムを実行するために、以下のハードウェアが必要です。

|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeed_Stalker_v3-6.png)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Uartsb40.jpg)|
|:---:|:---:|
|**Seeeduino Stalker v3** [購入はこちら](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)|**UartsBee v4.0** Seeeduino Stalker をプログラミングするために必要です。[購入はこちら](https://www.seeedstudio.com/uartsbee-v31-p-688.html)|

|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Miniusb.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_V3-Waterproof_Solar_Kit_5pin_cable.jpg)|
|---|---|
|**Mini USB ケーブル** おそらく手元にあるかと思いますが、ない場合は[こちら](https://www.seeedstudio.com/mini-usb-cable-110cm-p-252.html)で購入できます。このケーブルを使用して UartSBee_V4 をコンピュータの USB ポートに接続します。|**6 ピン デュアルメス ジャンパーワイヤー** UartSBee_V4 を Seeeduino Stalker に接続するために必要です。作業場にいくつかあるかもしれませんが、ない場合は[こちら](https://www.seeedstudio.com/6-pin-dualfemale-jumper-wire-100mm-5-PCs-pack-p-129.html)でカラフルなものを購入できます。

**ステップ 2: ドライバのインストールとハードウェアの接続**

1. [UartSBee_V4](/ja/UartSBee_V4 "UartSBee_V4") は、フィジカルコンピューティングの世界における多目的なスイスアーミーナイフのようなものです。Windows および GNU/Linux ユーザー向けに非常に詳細な使用手順が[こちら](/ja/UartSBee_V4 "UartSBee_V4")にあります。今回のケースでは、以下の 3 つの機能を果たします：
    * Seeeduino Stalker のプログラミングを可能にします。
    * Seeeduino Stalker との通信を可能にします。
    * コンピュータの USB 電源から Seeeduino Stalker（および接続された周辺機器）に電力を供給します。

2. UartSBee_V4 の最初の 2 つの機能（プログラミングと通信）は、FT232RL という集積回路を通じて実現されます。この機能を使用するには、FT232RL のドライバ（FT232RL の製造元から無料で提供されているプログラム）を Windows または Ubuntu ベースの PC にインストールする必要があります。次に進む前に、[こちら](https://www.ftdichip.com/Drivers/CDM/CDM20802_Setup.exe)からドライバセットアップファイルをダウンロードし、Windows PC にインストールしてください。

3. UartSBee_V4 にはオンボードの電圧レギュレータとスイッチがあり、ターゲット回路基板に供給する電圧（5.0V または 3.3V）を選択できます。今回のターゲット回路基板は Seeeduino Stalker なので、このスライドスイッチを 5.0 ボルトに設定してください。

4. ハードウェアの配線接続スキームは次の通りです：**"<font color="Navy">コンピュータ</font><font color="Grey">→(Mini USB ケーブル)→</font><font color="Navy">UartSBee </font><font color="Grey">→(フラットリボンケーブル)→</font><font color="Navy">Seeeduino Stalker</font>"**。ジャンパーワイヤーは、UartSBee_V4 をコンピュータに接続する前に UartSBee_V4 と Seeeduino Stalker の間に接続する必要があります。以下の写真を参照し、信号が表に示されているように一致していることを確認してください（**注：TXD と RXD ピンは表に示されているようにクロス接続する必要があります**）。

5. 次に、Mini USB ケーブルを UartSBee_V4 からコンピュータに接続します。Windows ベースの PC を使用している場合、「新しいハードウェアが見つかりました」というバルーンが表示され、数秒以内に FT232RL（つまり UartSBee_V4）のドライバがインストールされます。

![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_Uartsbee_4.0_Connection.jpg)

Seeeduino Stalker v3 &lt;---&gt; UartSBee v4.0 接続

<table>
<caption>ジャンパーワイヤー接続</caption>
<tr>
<th>Seeeduino Stalker</th>
<th>UartSBee_V4</th>
</tr>
<tr>
<td>USB5V</td>
<td>VCC</td>
</tr>
<tr>
<td><font color="Red">RXD</font></td>
<td><font color="Green">TXD</font></td>
</tr>
<tr>
<td><font color="Green">TXD</font></td>
<td><font color="Red">RXD</font></td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>DTR</td>
<td>DTR</td>
</tr>
</table>

<big>接続に関する注意事項</big>

* **Bee シリーズソケット** - 2*10 ピン 2.0mm ピッチ（[ワイヤレスモジュール](/ja/Wifi_Bee "Wifi_Bee")のいずれか：[XBee](/ja/XBee_Shield "Zigbee Networking with XBee Series_2 and Seeeds Products"), [BluetoothBee](/ja/Bluetooth_Bee "Bluetooth Bee"), [GPSBee](/ja/GPS_Bee_kit "GPS_Bee_kit"), [RFBee](/ja/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")と一度に接続可能）。これらのモジュールとの通信は UART を通じて行われます。
* **シリアルインターフェース** – スペースを節約しコストを削減するため、USB&lt;-&gt;シリアル接続はデフォルトでは提供されていません。FT232 ベースの [UartSBee_V4](/ja/UartSBee_V4 "UartSBee_V4") または他の USB からシリアルアダプタボードを使用してプログラミングや PC との通信を行うことができます。
* **ユーザー LED** – 必要に応じてアプリケーションで使用できる LED がオンボードに提供されています。
* **I<sup>2</sup>C インターフェース** – オンボードの I<sup>2</sup>C レベルシフタ IC は、3.3V と 5V デバイス間の電圧変換を提供します。これにより、マイクロコントローラが 3.3 ボルトで動作している場合でも、5.0 ボルトの I<sup>2</sup>C IC を接続できます。

## プログラミング例

---

* リソースセクションで提供されている DS1337 ライブラリとスケッチをダウンロードしてインストールしてください。DS1337 ライブラリには、Jean-Claude Wippler による DateTime クラスの改良版が含まれています。[JeeLabs](http://jeelabs.net/projects/cafe/wiki/) を参照してください。

* データロガーのデモスケッチは Arduino SD ライブラリを使用します。

<big>日付/時刻の調整</big>

* Arduino ボードを `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` に設定してください。

* DS1337 ライブラリから **adjust.ino** の例を開いてください。

* 例の DateTime クラスオブジェクト **dt** を使用して現在の日付/時刻を設定します：

  * `DateTime dt(year, month, date, hour, min, sec, week-day(starts from 0 and goes to 6));`

    * **例：** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

* コンパイルして <a href="/ja/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a> にアップロードしてください。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_adjust.png)

**adjust.ino の出力**

現在の日付/時刻を取得

* * *

* Arduino ボードを `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` に設定してください。

* DS1337 ライブラリから **now.ino** の例を開いてください。

* ` RTC.now() ` 関数を使用して DS1337 から現在の日付/時刻を読み取ります。

  * **例：** `DateTime now = RTC.now();`

* コンパイルして <a href="/ja/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a> にアップロードしてください。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_now.png)

**now.ino の出力**

DS1337 の割り込み

この例は、DS1337 の INT 出力からの割り込み検出をデモンストレーションします。この機能は、MCU を使用していないときにスリープモードにし、DS1337 INT が定期的に CPU を起動することでバッテリー寿命を延ばすデータロガー機能に役立ちます。完全な操作はコード内に記録されています。

* P3 ジャンパーをハンダ付けしてください。

  * これにより、DS1337 の割り込み出力ピンが ATmega328 の INT0 ピンに接続されます。

* Arduino ボードを `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` に設定してください。

* DS1337 ライブラリから **interrupts.ino** の例を開いてください。

* コンパイルして <a href="/ja/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a> にアップロードしてください。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_interrupt.png)
**interrupts.ino の出力**

データロガーの例

* * *

Seeeduino Stalker v3.0 の主な用途は、バッテリー電圧などのセンサー信号をタイムスタンプとともにデータロギングすることです。このスケッチは、データサンプリング/ロギング操作を行っていないときに MCU をスリープモードにします。完全な実装はコード内で非常に詳細に記録されています。以下のセクションでは概要を示します：

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_SolarPanel.jpg)

**データロガー例のハードウェア設定**

1. **StalkerV30_DataLogger_10Sec.ino**

    * このスケッチは、**`RTC.enableInterrupts(_h, m, s_)`** 関数によって設定された SD カードにバッテリー電圧データを記録します。
    * _周期性_ は h, m, s を使用して提供されます。割り込みが検出されると、次の割り込み時間は h, m, s の値を進めることで更新されます。DateTime クラスがこれに役立ちます。

        * 例：`interruptTime = DateTime(interruptTime.get() + interruptInterval);  //次の割り込み時間を決定`

        * このスケッチは詳細な出力も生成します。つまり、MCU 内で発生するさまざまなイベントがシリアルターミナルに表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_v3.0_datalogger_flowchart.png)

**データロガー実装の概要**

## リソース

---

* [Seeeduino Stalker の各バージョンの比較](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker)

* [カプセル型のSDカード読み取り用ミニUSBケーブル](https://www.seeedstudio.com/sd-card-reading-miniusb-cable-in-a-capsule-p-575.html?cPath=77)

## 技術サポート & 製品ディスカッション

   <br />
 当社の製品をお選びいただきありがとうございます！お客様が当社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>