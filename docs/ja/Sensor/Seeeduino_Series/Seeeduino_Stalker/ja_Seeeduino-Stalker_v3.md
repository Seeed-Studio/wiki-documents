---
description: Seeeduino Stalker V3
title: Seeeduino Stalker V3
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-Stalker_v3
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-6.png)

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-7.png)

Seeeduino Stalker v3.0は、特に屋外の**データロギング**アプリケーションに便利な、機能豊富なArduino互換の**ワイヤレスセンサーネットワークノード**です。X-Beeモジュール（GPS Bee、Bluetooth Bee、Wifi Beeなど）と一緒に使用するためのX-Beeキャリアボードを備えています。そのモジュール構造とオンボード周辺機器により、定期的にタイムスタンプ付きのセンサーデータを記録するのに便利です。Seeeduino Stalkerには、バックアップ電源付きRTC、SDカードソケット、Beeソケット、ソーラーベースのリチウムイオンバッテリーチャージャーが搭載されています。Seeeduino Stalkerは、追跡、監視、制御プロジェクトに最適な候補です。

**注意:** Seeeduino Stalker v3.0はこのボードの最新バージョンです。このボードの古いバージョンとの比較については[こちら](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker)をご覧ください。Seeeduino Stalker V3には多くの機能があり、PCBジャンパーをはんだ付けまたは切断することで機能を変更する方法を提供します。このドキュメントを理解し、プログラミングを行う前に回路図を参照してください。

<span>注意</span>：Seeeduino Stalkerにいくつかの更新と変更を加えました。このページの**ハードウェア概要**セクションで後ほど説明します。

### バージョントラッカー

| 製品バージョン                              | リリース日   | サポート状況   | 備考  |
|---------------------------------------------|--------------|----------------|-------|
| Seeeduino Stalker v3(v3.0, 古いバージョン)  | 2015年10月   | 2015年10月     | なし  |
| Seeeduino Stalker v3(v3.1, 古いバージョン)  | 2016年7月    | サポート中     | なし  |

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)  

## 特徴

* Seeeduino互換（I/Oポートは3.3Vロジックを使用）。Arduino Processing言語でプログラム可能。

* オンボードマイクロコントローラー：**ATMega328P**

* オンボードリアルタイムクロックチップDS1337S（RTCのバックアップ電源として機能するCR1220コインセル用ソケット付き）

* スタンドアロンモードでのプログラミング時に自動リセット用のDTR付きシリアルインターフェース。（プログラミングには[UartSBee](https://seeeddoc.github.io/UartSBee/)を別途購入する必要があります。）

* microSDカードソケット
* I2Cピンヘッダー（動作電圧は5.0Vまたは3.3Vを選択可能）

* Groveインターフェース（動作電圧は5.0Vまたは3.3Vを選択可能）

* XBeeモジュールおよびATMega328P用のリセットボタン

* **Beeシリーズソケット** - 2*10ピン2.0mmピッチ（以下のいずれかのワイヤレスモジュールと接続可能：**XBee**、[BluetoothBee](/ja/Bluetooth_Bee "Bluetooth Bee")、[GPSBee](https://seeeddoc.github.io/Bluetooth_Bee/)、または[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)。）

## 仕様

<table>
<tr>
<th> パラメータ </th>
<th> 値 </th>
</tr>
<tr>
<td> MCU </td>
<td> ATmega328 </td>
</tr>
<tr>
<td> 水晶発振器 </td>
<td> 8 MHz </td>
</tr>
<tr>
<td> RTC </td>
<td> DS1337S </td>
</tr>
<tr>
<td> I/O ロジック </td>
<td> 3.3v </td>
</tr>
<tr>
<td> Arduino IDE 用ボード </td>
<td> Arduino Pro または Pro Mini (**3.3v**, 8 MHz) w/ATmega328 </td>
</tr>
<tr>
<td> 電源 </td>
<td> 3.7v LiPo バッテリー、バッテリー充電には 5VDC ソーラーパネルを使用 </td>
</tr>
<tr>
<td> 電源コネクタ </td>
<td> 2 ピン JST/ USB </td>
</tr>
<tr>
<td> 接続性 </td>
<td> I<sup>2</sup>C, UART, SPI </td>
</tr>
<tr>
<td> 開回路電流 </td>
<td> 最大 6 mA </td>
</tr>
<tr>
<td> 充電電流 </td>
<td> 300mA </td>
</tr>
<tr>
<td> 3.3v ポートの最大電流 </td>
<td> 800mA </td>
</tr>
<tr>
<td> PCB サイズ </td>
<td> 86.74mm x 60.96mm </td>
</tr>
</table>

## アプリケーションアイデア  

* ワイヤレスセンサーネットワーク (**XBee** を使用 - 別途購入)

* GPS ロギング ([GPSBee](https://seeeddoc.github.io/GPS_Bee_kit/) を使用 - 別途購入)

* iPhone/Android Phone 上で動作するアプリと通信可能なデータ収集システム ([BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) を使用 - 別途購入)

* RF リモートコントロール ([RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) を使用 - 別途購入)

* シンプルなスタンドアロン Arduino 互換物理コンピューティングプラットフォーム ([UartSBee](https://seeeddoc.github.io/UartSBee/) を別途購入してプログラミングに使用)

## ハードウェア概要

<span>注意</span>: Seeeduino Stalker (バージョン v3.0 から v3.1) にいくつかの更新と変更を加えました。

1. ハードウェアシリアルポート (D0, D1 経由) とソフトウェアシリアルポート (仮想シリアルポート; D5, D6 経由) を切り替えるスイッチを追加しました。このスイッチは以下のように青い四角でマークされています。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.1_serial_port_switch_1200_s.jpg)

2. RTC 回路について、現在はリチウムバッテリーからの単一電源のみを使用しています。適用可能なリチウムポリマーバッテリーモデルは CR1120 です。

3. RTC 回路について、MCU に 2 つの割り込み (RTC の INT A と INT B が MCU の INT0 と INT1 に対応) を有効にするためのトグルスイッチを追加しました。これらの割り込みは MCU をスリープモードから起動するために使用されます。割り込みを送信する前にこれらのスイッチを **ON** に切り替える必要があります。

4. MCU がスリープモードの場合、D9 ピンを使用して Bee コネクタおよび 3.3V または 5V のすべての VCC ピンへの電源入力を制御 (有効化または無効化) できます。

5. スリープモード (すべてのモジュール) では、動作電流は 100 μA まで低下します。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3.png)

* **Bee 用リセット (RST):** このボタンを押して Bee モジュールをリセットします。ただし、このリセットボタンはメインボード (ATmega328) の状態には影響しません。

* **ATmega328 用リセット (RST):** このボタンを押してメインボードをリセットします。

* **ATmega328:** メインボードのマイクロコントローラー。水晶発振器は 8MHz です。

* **SD ソケット:** SD カードにデータを保存するのに便利です。**SD カードの電源供給をデジタルピン **D4** を介して ON または OFF に切り替えるためのパッド (P2) があります。**

* **Bee ソケット:** メインボードが他のワイヤレスモジュールと通信するための Bee ソケットが用意されています。**Bee ソケットの電源供給をデジタルピン **D5** を介して ON または OFF に切り替えるためのパッド (P1) があります。**

* **ソーラーパネル:** ソーラーパネルを使用して日光を電力に変換し、USB ケーブルの制約なしに電力を供給します。

* **Li-Po バッテリー:** Li-Po バッテリーを介してメインボードに電力を供給します。バッテリーはソーラーパネルで充電可能です。

* **CN3065:** ソーラーパワーシステム用のリチウムイオンバッテリーチャージャー。ボードには "**OK**" と "**CH**" の 2 つのインジケータライトがあり、それぞれ "**Charged**" と "**Charging**" を意味します。

* **TD6810:** 1.5MHz 800mA 同期降圧レギュレータドロップアウトで、メインボードに 3.3V の電源を供給します。

* **RTC:** I2C シリアルリアルタイムクロック -- DS1337S。**2 つのオプションの割り込み信号ピンがパッド (P3 および P4) としてブレークアウトされています。** これらのジャンパーパッドを使用して、RTC /INTA ピンをデジタルピン **D2** に、RTC /INTB をデジタルピン **D3** に接続できます。

* **RTC 用バッテリー:** CR1220 バッテリーで、RTC に独立した電源を供給します。

* **Grove コネクタ:** ボードには 2 つの Grove コネクタ (I2C および D7) があり、これらの Grove コネクタを介して Grove 製品を直接ボードに接続できます。

* **UartSBee ヘッダー:** UartSBee v4 と一緒に使用される UartSBee ヘッダーで、これらのヘッダーを介してメインボードにプログラムをアップロードできます。

### PCB ジャンパーパッド

Seeeduino Stalker V3 の底面には、構成/機能をオプションで変更するための多くの PCB ジャンパーパッドがあります。以下の表はその詳細を示しています。

| ジャンパーパッド名 | 用途                                                                                                                                                                                                                                                                                                                                                 | 回路                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| P1               | このジャンパーをはんだ付けすると、デジタルピン D5 を使用して Bee ソケットの電源供給を ON または OFF にできます。                                                                                                                                                                                                                                                                       | ![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P1.jpg)       |
| P2               | このジャンパーパッドをはんだ付けすると、デジタルピン D4 を使用して SD の電源供給を ON または OFF に切り替えることができます。                                                                                                                                                                                                                                                                  | ![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P2.jpg)       |
| P3               | このジャンパーパッドをはんだ付けすると、RTC /INTA ピンをデジタルピン **D2(INT0)** に接続できます。                                                                                                                                                                                                                                                                             | ![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P3.jpg)       |
| P4               | このジャンパーパッドをはんだ付けすると、RTC /INTB をデジタルピン **D3(INT1)** に接続できます。                                                                                                                                                                                                                                                                                 | ![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P4.jpg)       |
| P5               | このジャンパーはデフォルトで BEE_TXD をデジタルピン D0 (H/W UART TXD) に接続します。既存の PCB 接続を切断し、隣接するパッドにはんだ付けすることで、BEE_TXD をデジタルピン **D7** (S/W シリアル) に接続できます。**注意**: 既知のハードウェアバグがあります。回避策については [こちら](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#Known_Issue) を参照してください。 | ![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |
| P6               | このジャンパーはデフォルトで BEE_RXD をデジタルピン D0 (H/W UART RXD) に接続します。既存の PCB 接続を切断し、隣接するパッドにはんだ付けすることで、BEE_RXD をデジタルピン **D6** (S/W シリアル) に接続できます。                                                                                                                                              | ![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |

これらに加えて、WIRELESS_PROGRAMMING、RSSI_STATUS、CH_STATUS用の他のジャンパーパッドもあります。これらはデフォルトで接続されていますが、機能を変更したい場合は回路図を参照してください。

## はじめに

もし「フィジカルコンピューティング」の世界に初めて触れる場合、そして**Seeeduino Stalker v3.0**が最初のプラットフォームであるなら、[Seeeduino](https://seeeddoc.github.io/Seeeduino_v4.0/)から始めることをお勧めします。

以下の手順は、**Seeeduino Stalker v3.0**を使い始めるために必要なハードウェアとソフトウェアリソースを準備するのに役立ちます。

#### ステップ 1. ハードウェアの準備

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-1.png)

上の画像は、Seeeduino Stalker v3をPCと通信させるために必要なハードウェアとコンポーネントを示しています。StalkerにはUSBからシリアルへの機能がないため、**UartSBee**が必要です。これを使用してPC経由でStalkerをプログラムします。他のUSBからシリアルへの変換ボードを使用してUartSBee v4の代わりにすることも可能です。

**注意: UartSBee v4は別途購入する必要があります**。

#### ステップ 2: ドライバのインストールとハードウェアの接続  

1. [UartSBee](https://seeeddoc.github.io/UartSBee/)は、フィジカルコンピューティングの世界における多目的なスイスアーミーナイフのようなものです。WindowsおよびGNU/Linuxユーザー向けにUartSBeeを使用するための非常に詳細な手順が[こちら](https://seeeddoc.github.io/UartSBee/)にあります。今回の場合、UartSBeeは以下の3つの機能を果たします：
    * Seeeduino Stalkerのプログラム。
    * Seeeduino Stalkerとの通信。
    * Seeeduino Stalker（および接続された周辺機器）への電力供給（PCのUSB電源から）。

2. UartSBeeにはオンボードの電圧レギュレータと、ターゲットボードの電圧（5.0Vまたは3.3V）を選択するスイッチがあります。Seeeduino Stalkerの場合、このスライドスイッチを5.0Vに設定してください。

3. ハードウェアの配線接続スキームは次のようになります：**"<font >コンピュータ</font><font >→(Mini USBケーブル)→</font><font >UartSBee </font><font >→(フラットリボンケーブル)→</font><font >Seeeduino Stalker</font>"**。UartSBeeをコンピュータに接続する前に、UartSBeeとSeeeduino Stalkerの間にジャンパーワイヤを接続する必要があります。**注意: TXDとRXDピンは以下の表に示すようにクロス接続する必要があります**。
4. Mini USBケーブルをUartSBeeからPCに接続します。WindowsベースのPCを使用している場合、「新しいハードウェアが見つかりました」というバルーンが表示され、数秒以内にFT232ドライバがインストールされます。

<font >**以下の表は、Seeeduino Stalker v3とUartSBee v4の接続を示しています。**</font>

<table>
<caption> ピン接続 </caption>
<tr>
<th> Seeeduino Stalker v3 </th>
<th> </th>
<th> UartSBee v4 </th>
</tr>
<tr>
<td> 5V </td>
<td>   ↔   </td>
<td> VCC </td>
</tr>
<tr>
<td> <font >RXD </font> </td>
<td>   ↔   </td>
<td> <font >TXD </font> </td>
</tr>
<tr>
<td> <font >TXD </font> </td>
<td>   ↔   </td>
<td> <font >RXD </font> </td>
</tr>
<tr>
<td> GND </td>
<td>   ↔   </td>
<td> GND </td>
</tr>
<tr>
<td> DTR </td>
<td>   ↔   </td>
<td> DTR </td>
</tr>
</table>

## デモ

リソースセクションで利用可能な DS1337 ライブラリとスケッチをダウンロードしてインストールしてください。DS1337 ライブラリには、Jean-Claude Wippler による DateTime クラスの改良版が含まれています。[JeeLabs](http://jeelabs.net/projects/cafe/wiki/)

* データロガーデモスケッチは Arduino SD ライブラリを使用します。

### 1.RTC

<font >**注意: 「Interrupts」デモを使用する際にはいくつかのパッドをハンダ付けする必要があります**</font>

<table>
<caption> <font >ハンダ付け方法</font> </caption>
<tr>
<th> RTC のピン </th>
<th> Seeeduino Stalker v3 のパッド </th>
<th> ATmega328 のピン </th>
</tr>
<tr>
<td> INTA </td>
<td> P3 </td>
<td> digital 2 </td>
</tr>
<tr>
<td> INTB </td>
<td> P4 </td>
<td> digital 3 </td>
</tr>
</table>

#### 日付/時刻の調整

* * *

* Arduino ボードを `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` に設定します。

* DS1337 ライブラリから **adjust.ino** の例を開きます。

* 例の DateTime クラスオブジェクト **dt** を使用して現在の日付/時刻を設定します:

  * `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6));`

    * **例:-** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

* **Seeeduino-Stalker v3** にコンパイルしてアップロードします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_adjust.png)

#### 現在の日付/時刻を取得

* * *

* Arduino ボードを `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` に設定します。

* DS1337 ライブラリから **now.ino** の例を開きます。

* DS1337 から現在の日付/時刻を ` RTC.now() ` 関数を使用して読み取ります。

  * **例:- `DateTime now = RTC.now();`**

* **Seeeduino-Stalker v3** にコンパイルしてアップロードします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_now.png)

#### DS1337 割り込み例

* * *

この例は DS1337 の <span >INT</span> 出力からの割り込み検出のデモンストレーションです。この機能は、MCU を使用していないときにスリープモードにし、DS1337 の <span >INT</span> が定期的に CPU を起動するデータロガー機能に役立ちます。これによりバッテリーの寿命が延びます。完全な操作はコード内で記録されています。

* P3 ジャンパーをハンダ付けします。

  * これにより、DS1337 の割り込み出力ピンが ATmega328 の INT0 ピンに接続されます。

* Arduino ボードを `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` に設定します。

* DS1337 ライブラリから **interrupts.ino** の例を開きます。

* **Seeeduino-Stalker v3** にコンパイルしてアップロードします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_interrupt.png)

#### データロガー例

* * *

Seeeduino Stalker v3.0 の主な用途は、バッテリー電圧などのセンサー信号をタイムスタンプとともにデータロギングすることです。このスケッチは、データサンプリング/ロギング操作を行っていないときに MCU をスリープモードにします。完全な実装はコード内で非常に詳細に記録されています。以下は概要です:

1. **StalkerV30_DataLogger_10Sec.ino**

    * このスケッチは、**`RTC.enableInterrupts(_h, m, s_)`** 関数によって設定された SD カードにバッテリー電圧データを記録します。
    * _周期性_ は h, m, s を使用して提供されます。割り込みが検出されると、次の割り込み時間は h, m, s の値を進めることで更新されます。DateTime クラスがこれに役立ちます。

        * 例:- `interruptTime = DateTime(interruptTime.get() + interruptInterval);  //次の割り込み時間を決定`

        * このスケッチは詳細な出力も生成します。つまり、MCU 内で発生しているさまざまなイベントがシリアルターミナルに表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Stalker_v3.0_datalogger_flowchart.png)

### 充電状態を読み取る

* * *

バッテリーの充電状態は以下のスケッチを使用して読み取ることができます。バッテリーはソーラーパネルをボードに接続するか、UartSBee を介して充電できます。

```
void setup()
{
  Serial.begin(57600);
  analogReference(INTERNAL);
  //analogRead(6);
}

void loop()
{
  char CH_status_print[][4]=
  {
    "off","on ","ok ","err"
  };
  unsigned char CHstatus = read_charge_status();//充電状態を読み取る
  Serial.print("充電状態 -->");
  Serial.println(CH_status_print[CHstatus]);
  delay(500);
}


unsigned char read_charge_status(void)
{
  unsigned char CH_Status=0;
  unsigned int ADC6=analogRead(6);
  if(ADC6>900)
  {
    CH_Status = 0;//スリープ中
  }
  else if(ADC6>550)
  {
    CH_Status = 1;//充電中
  }
  else if(ADC6>350)
  {
    CH_Status = 2;//充電完了
  }
  else
  {
    CH_Status = 3;//エラー
  }
  return CH_Status;
}
```

### Li-Po バッテリーの電圧を読み取る

* * *

Seeeduino Stalker V3 に接続された Li-Po バッテリーの電圧は、アナログピン A7 を使用して読み取ることができます。以下のスケッチがその方法を示しています。

```
void setup(){
    Serial.begin(57600);
    analogReference(INTERNAL);
}

void loop() {

float voltage;
int BatteryValue;

    BatteryValue = analogRead(A7);
    voltage = BatteryValue * (1.1 / 1024)* (10+2)/2;  //電圧分圧

    Serial.print("バッテリー電圧 -> ");
    Serial.print(voltage);
    Serial.print("V   ");
    Serial.println();

    delay(500);
}
```

_参考: [analogReference](https://arduino.cc/en/Reference/AnalogReference)_

## Beeモジュールの使用に関する追加情報

以下の表は、BeeソケットとATMega328 MCU間のデフォルトUART接続を示しています。

<table>
<caption> <font>使用方法</font> </caption>
<tr>
<th>Beeソケットのピン</th>
<th>ATmega328のピン</th>
</tr>
<tr>
<td>BEE_TXD</td>
<td>デジタル 0</td>
</tr>
<tr>
<td>BEE_RXD</td>
<td>デジタル 1</td>
</tr>
</table>

また、オプションのパッドを使用してBeeモジュールの電源供給をオンまたはオフにすることができます。

<font>操作：Seeeduino Stalker v3の背面に「P1」というはんだパッドがあります。P1をはんだ付けし、以下のコードを使用して電源供給を切断します。</font>

<pre>
digitalWrite(5,HIGH);
</pre>

## 既知の問題

**影響を受けるユーザー**: この問題は、BeeソケットをデフォルトのH/Wシリアルポートではなく、ソフトウェアシリアルポートに接続するオプション機能を使用したいユーザーに影響します。

**問題**: ジャンパーP5を切断して再はんだ付けすることでデフォルト接続を変更し、ソフトウェアシリアルポートを使用するように構成することができません。(例: BEE_RXDをデフォルトのPD1ではなくPD7に接続することが、[P5の説明](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#PCB_Jumper_Pads)に従ってジャンパーを切断/はんだ付けするだけではできません)。これはハードウェアのバグです。

**回避策**:

1. トップレイヤーでPD1/TXD信号からR16抵抗への配線を以下の画像のように切断します。鋭いナイフを使用し、慎重に接続を切断してください。

![変更前](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_1.jpg)

変更前

![変更後](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_Workaround.jpg)

変更後

2. 次に、<a href="/ja/Seeeduino-Stalker_v3#pcb-jumper-pads"><span><font size={"3"}>Seeeduino-Stalker v3</font></span></a>に記載されている手順を適用します。(例: ジャンパーを切断し、ジャンパーP5の中央パッドをPD7に接続する)。

## ボードレイアウト

画像はEAGLEファイルから取得されています。

![Seeeduino_Stalker_v3.0_Board](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Board.PNG)

Seeeduino_Stalker_v3.0_Board

![電源](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_1.PNG)

電源

![Arduino](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_2.PNG)

Arduino

![BEE TF](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_3.PNG)

BEE TF

![RTC I2C](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_4.PNG)

RTC I2C

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* ソフトウェア:

  * [Seeeduino Stalker V3 - DS1337 RTCライブラリ](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337.zip)

  * [Seeeduino Stalker V3.0 - データロガー例](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/StalkerV30_DataLogger_10Sec.zip)

* 設計:

  * [Seeeduino Stalker v3.0 - PDF回路図 &amp; EAGLEファイル](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip)

  * [Seeeduino Stalker v3.0 PDF](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.pdf)

* [Seeeduino Stalker v3.0 sch](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.sch)

* データシート:

  * [DS1337Sのデータシート](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337-DS1337C-99519.pdf)

  * [CN3065のデータシート](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/CN3065.pdf)
  * [CN3065のデータシート (英語)](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DSE-CN3065.pdf)

  * [TD6810のデータシート](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/TD6810.pdf)

* その他:

  * [AVRISP MKIIを使用したブートローダー](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/ATmegaBOOT_168_atmega328_pro_8MHz.hex.zip)

  * [オフラインAVRISPによる完成ファイル](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Stalker_V2_Final.Prjt.zip)

## 技術サポートと製品ディスカッション

   <br />
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>