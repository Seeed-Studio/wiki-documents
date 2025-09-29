---
description: Mesh Bee
title: Mesh Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mesh_Bee
last_update:
  date: 05/15/2025
  author: shuxu hu
---


## MeshBee Wikiへようこそ

---
これはコミュニティリソースであり、以下に関するドキュメント、デモ、および有益な情報源へのリンクをまとめることを目的としています：

 1. MeshBeeファームウェアアーキテクチャ
 2. MeshBeeスターターガイド
 3. MeshBeeの使用例とサンプル

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Mesh_bee.jpg)

Mesh BeeはSeeed Studioが提供する2.4GHzのワイヤレストランシーバーです。これはNXPの新しいJN516xシリーズのワイヤレスマイクロコントローラーチップをベースにしており、ZigBee Proネットワークスタックをサポートしています。工場出荷時のファームウェアは、複雑なZigBeeスタック操作を簡単に使用できるシリアルコマンドにラップし、Mesh Beeをシンプルなポイントツーポイント接続または複雑なメッシュネットワークの一部として機能する透過的なシリアル通信ノードに変えます。さらに、Mesh Beeは完全にオープンハードウェアおよびオープンソースであるため、要件に応じてファームウェアをカスタマイズできます。JN516xのARMコアを使用して制御を行い、JenOSを使用して開発を簡素化できます。NXPの開発環境とツールはすべて無料です。Mesh Beeは多くの楽しみを提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/s/Mesh%20Bee%20-%20Open%20Source%20Zigbee%20Pro%20Module%20with%20MCU%20(JN5168).html)

## 2. 特徴

---

* 範囲: 室内/都市部: 最大30m; 屋外見通し: 最大100m
* 受信感度: -95dBm
* データ伝送速度: 4800, 9600, 19200, 38400, 57600, 115200 (bps)
* 動作周波数: ライセンス不要の2.4GHz帯
* 通信タイプ: ポイントツーポイント、スター型ネットワーク、またはメッシュネットワーク
* OTAサポート: ノードのファームウェアを無線で更新
* 使いやすいシリアルインターフェースと拡張可能なポート
* 簡単に使用できるATコマンド: ZigBeeネットワークの設定、シリアルボーレートの設定など
* オープンソースハードウェアおよびファームウェア
* プログラム可能な32ビットRISC CPU: 32Mクロック、256KBフラッシュ、32KB RAM、4KB EEPROM
* Xbee互換ソケット: 迅速な交換として任意のXbeeソケットに差し込むことが可能

注意: Mesh Beeは、使用しているZigBeeスタックバージョンが異なるため、Xbeeと通信することはできません。

## 3. 仕様

---
<table>
<tr>
<th>仕様</th>
<th>値</th>
</tr>
<tr>
<td width="400px">マイクロプロセッサ</td>
<td width="600px">JN5168 (32ビットRISC CPU, 32MHzクロックスピード)</td>
</tr>
<tr>
<td>リソース</td>
<td>256kB/32kB/4kB (フラッシュ/RAM/EEPROM)</td>
</tr>
<tr>
<td>PCBサイズ</td>
<td>24.5mmx30.5mmx0.8mm</td>
</tr>
<tr>
<td>外形寸法</td>
<td>24.5mmx30.5mmx9.77mm</td>
</tr>
<tr>
<td>インジケータ</td>
<td>なし</td>
</tr>
<tr>
<td>電源供給</td>
<td>3.3V</td>
</tr>
<tr>
<td>IO数</td>
<td>12</td>
</tr>
<tr>
<td>ADC入力</td>
<td>3(2つはIOと多重化)</td>
</tr>
<tr>
<td>インターフェース</td>
<td>UARTx2, SPI, I2C</td>
</tr>
<tr>
<td>プログラムインターフェース</td>
<td>UART+MISO</td>
</tr>
<tr>
<td>接続性</td>
<td>XBee互換ソケット</td>
</tr>
<tr>
<td>通信プロトコル</td>
<td>Uart(TTL)</td>
</tr>
<tr>
<td>動作周波数帯</td>
<td>2.4GHz</td>
</tr>
<tr>
<td>スタック/ソフトウェア</td>
<td>RF4CE, JenNet-IP , ZigBee Pro</td>
</tr>
</table>

### 3.1 電気的特性

<table>
<tr>
<th>仕様</th>
<th>最小</th>
<th>標準</th>
<th>最大</th>
<th>単位</th>
</tr>
<tr>
<td width="400px">最大入力電圧</td>
<td width="150px">-0.3</td>
<td width="150px"></td>
<td width="150px">3.6</td>
<td width="150px">V</td>
</tr>
<tr>
<td>動作入力電圧</td>
<td>2.0</td>
<td>3.3</td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>送信電流</td>
<td></td>
<td>15</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>受信電流</td>
<td></td>
<td>17</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>ディープスリープ電流</td>
<td></td>
<td>0.12</td>
<td></td>
<td>uA</td>
</tr>
<tr>
<td>動作温度</td>
<td>-40</td>
<td></td>
<td>125</td>
<td>°C</td>
</tr>
</table>

## 4. ピン定義

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Mesh_Bee_Pin.jpg)

<table>
<tr>
<th>ピン</th>
<th>代替機能</th>
<th>タイプ</th>
<th>説明</th>
</tr>
<tr>
<td width="100px">3V3</td>
<td width="200px">-</td>
<td width="200px">電源入力</td>
<td width="400px">VCC, +3.3V</td>
</tr>
<tr>
<td>TX1</td>
<td>D14</td>
<td>出力</td>
<td>Uart1 Tx ポート; デジタル IO 14</td>
</tr>
<tr>
<td>RX1</td>
<td>D15</td>
<td>入力</td>
<td>Uart Rx ポート; デジタル IO 15</td>
</tr>
<tr>
<td>DO1</td>
<td>SPIMISO</td>
<td>入力/出力</td>
<td>デジタル出力 1; SPI マスター入力スレーブ出力入力</td>
</tr>
<tr>
<td>!RST</td>
<td>-</td>
<td>入力</td>
<td>リセットポート</td>
</tr>
<tr>
<td>D11</td>
<td>PWM1</td>
<td>入力/出力</td>
<td>デジタル IO 11 (デフォルト使用: RSSI インジケータ); PWM1 出力</td>
</tr>
<tr>
<td>DO0</td>
<td>SPICLK</td>
<td>出力</td>
<td>デジタル出力 0; SPI マスタークロック出力</td>
</tr>
<tr>
<td>D18</td>
<td>SPIMOSI</td>
<td>入力/出力</td>
<td>デジタル IO 18; SPI マスター出力スレーブ入力出力</td>
</tr>
<tr>
<td>VRef</td>
<td>ADC2</td>
<td>入力</td>
<td>アナログ周辺機器基準電圧; ADC 入力 2</td>
</tr>
<tr>
<td>GND</td>
<td>-</td>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>TX0</td>
<td>D6</td>
<td>入力/出力</td>
<td>Uart0 Tx ポート; デジタル IO 6</td>
</tr>
<tr>
<td>D12</td>
<td>CTS0</td>
<td>入力/出力</td>
<td>デジタル IO 12; UART 0 クリアトゥセンド入力</td>
</tr>
<tr>
<td>D9</td>
<td>-</td>
<td>入力/出力</td>
<td>デジタル IO 9 (デフォルト使用: Mesh Bee ON/スリープインジケータ)</td>
</tr>
<tr>
<td>RX0</td>
<td>D7</td>
<td>入力/出力</td>
<td>Uart0 Rx ポート; デジタル IO 7</td>
</tr>
<tr>
<td>D10</td>
<td>-</td>
<td>入力/出力</td>
<td>デジタル IO 10 (デフォルト使用: ネットワークアソシエーションインジケータ)</td>
</tr>
<tr>
<td>D13</td>
<td>RTS0</td>
<td>入力/出力</td>
<td>デジタル IO 13; UART 0 リクエストトゥセンド出力</td>
</tr>
<tr>
<td>D1</td>
<td>SPISEL2; ADC4</td>
<td>入力/出力</td>
<td>デジタル IO 1; SPI マスターセレクト出力 2; ADC 入力 4</td>
</tr>
<tr>
<td>D0</td>
<td>SPISEL1; ADC3</td>
<td>入力/出力</td>
<td>デジタル IO 0; SPI マスターセレクト出力 1; ADC 入力 3</td>
</tr>
<tr>
<td>D16</td>
<td>SCL</td>
<td>入力/出力</td>
<td>デジタル IO 16; I2C クロック</td>
</tr>
<tr>
<td>D17</td>
<td>SDA</td>
<td>入力/出力</td>
<td>デジタル IO 17; I2C データ</td>
</tr>
</table>

注意: 重要な代替機能のみ記載しています。他にもある場合がありますので、JN516x データシートを参照してください。

注意2: SPI 関連のピンは、外部フラッシュドライビングを無効にする方法を知っている場合にのみデジタル IO として使用できます。

## 5. 使用方法

---

### 5.1 ハードウェアのインストール

Mesh Bee は一般的な Bee ソケットを備えています。そのため、XBee や RFBee などと同じように使用できます。ただし、一部のピンを除いて、ピンは完全には互換性がありません。
Bee シリーズに不慣れな場合は、[このリンク](/ja/Grove_Cape_for_BeagleBone_Series "Grove_Cape_for_BeagleBone_Series")で Bee シリーズについて学び、[このリンク](/ja/RFbee_V1.1-Wireless_Arduino_compatible_node#Usage "RFbee V1.1 - Wireless Arduino compatible node")で他のハードウェアと Bee をインストールする方法を確認してください。

### 5.2 ファームウェアの更新方法

Mesh Bee にプリフラッシュされているデフォルトのファームウェアは、製造および販売の都合上、コーディネーターファームウェアです。ルーター/エンドデバイスのファームウェアは自分でフラッシュする必要があります。ただし、これはメイカーにとって十分簡単です。

JN516x には UART とその他のピンを備えた特定のファームウェアダウンロードインターフェースがあります。そのため、**プログラマー**が必要です。これには [UartSBee v5](/ja/UartSBee_v5 "UartSBee v5") を提供しています。UartSBee v5 は v4 のほとんどの機能を備えており、さらに Mesh Bee 用のプログラマーが追加されています。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/UartSBee_V05.jpg)

ファームウェアを更新するには、以下の手順に従ってください:

* ステップ 1: 最新のファームウェアを GitHub からダウンロードします;

  * [Mesh_Bee#9.1_Firmware_Downloads](/ja/Mesh_Bee#91-firmware-downloads "Mesh Bee")

* ステップ 2: FT_Prog を使用して UartSBee v5 を設定します;

  * FT_Prog をダウンロード: [File:FT Prog v2.8.2.0.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/FT_Prog_v2.8.2.0.zip "File:FT Prog v2.8.2.0.zip") をインストールします。(Windows のみ)

  * UartSBee v5 を PC に接続し、FT_Prog を開いて以下のように設定します:

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/FT_Prog.jpg)

* ステップ 3: SW1 を「3V3」に、SW3 を「Prog」位置に切り替えます;

* ステップ 4: Mesh Bee モジュールを UartSBee v5 に差し込みます;

* ステップ 5: "Jennic Flash Programmer" を使用してファームウェアをフラッシュします;

Jennic Flash Programmer をダウンロード: [File:Jennic flash programmer.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Jennic_flash_programmer.zip "File:Jennic flash programmer.zip") を解凍します。(Windows のみ)

"FlashGUI.exe" を開く -&gt; ファームウェアの bin ファイルを参照

-&gt; UartSBee v5 の COM ポートを選択 (存在しない場合はリフレッシュボタンをクリック)

-&gt; 他の選択肢は以下の画像のように設定 -&gt; 「Connect」をチェック

-&gt; デバイス情報と MAC アドレスが検出されます

-&gt; 「Program」ボタンをクリック

-&gt; 小さなツールウィンドウがポップアップし、ダウンロード進行状況が表示されます

-&gt; 完了。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer1.jpg)

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer3.png)

### 5.3 AT コマンドと設定

#### 5.3.1 AT コマンド

Mesh Bee は現在、AT コマンドで設定できます。バイナリ API 設定方法は必要に応じて提供される場合があります。この機能が必要な場合は、[ディスカッショングループ](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group)に要件を投稿してください。皆様の声に基づいて開発の決定を行います。

**AT コマンドマニュアルをダウンロード:** [File:AT command manual for Mesh Bee V1.0.pdf](https://files.seeedstudio.com/wiki/Mesh_Be/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf "File:AT command manual for Mesh Bee V1.0.pdf")

#### 5.3.2 設定

Mesh BeeはZigBee Pro標準をサポートしており、多数のノードでメッシュネットワークを構築することができます。より効果的に設定するためには、ZigBeeの基本知識が必要になる場合があります。しかし、ここでは簡単なポイントツーポイントネットワークを構築する方法を説明します。ZigBeeの基本知識がなくても誰でもこれを実現できます。

<big>ステップ1: 2つのMesh BeeモジュールとUartSBee v5を準備する;</big>

<big>ステップ2: 2つのMesh Beeのうち1つにエンドデバイス用のファームウェアをフラッシュする。詳細は5.2「ファームウェアの更新方法」を参照してください;</big>

<big>ステップ3: コーディネーターノードを設定する;</big>

Mesh Beeノードを設定するには、まずPCに接続する必要があります。これにはいくつかの方法があります。UartSBee v5を持っている場合は非常に簡単です。コーディネーターをUartSBee v5に接続し、SW3スイッチを「Uart」側に切り替えるだけです。

また、任意のUSB-to-TTLデバイスを使用することもできます。基本的には、Mesh BeeはUART1（TX1&amp;RX1）を介して外部と通信し、UART1の電圧レベルは3.3Vです。高い電圧はIOを破損させる可能性があります。

配線が完了したら、シリアルツールを開き、COMポートを選択し、ボーレートを115200（デフォルト）に設定します。

「+++」を送信して、Mesh BeeをATコマンドモードに切り替えます。シリアルツールをCR文字を送信するように設定する必要があることに注意してください。

「ATPA1」コマンドを送信します。

UartSBee v5のリセットボタンを押してMesh Beeをリセットします。

UartSBee v5の「ASSOC」LEDが点灯するまで待ちます。これで、コーディネーターがZigBeeネットワークの形成を完了しました。「ATIF」コマンドを送信してネットワーク情報を確認できます。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Configure_coo2.png)

「ATEX」コマンドを送信してATモードを終了し、データ送信モードに入ります。これでコーディネーターノードの設定が完了しました。

<big>ステップ4: エンドデバイスノードを設定する;</big>

まず、エンドデバイスのUART1にボーレート115200で接続します。UartSBee v5が1つしかなく、同じものでエンドデバイスを設定したい場合は、UartSBee v5からコーディネーターを取り外した後、再度コーディネーターの電源を入れる必要があります。コーディネーターは常に電源が入っている必要があります。なぜなら、ZigBeeネットワークを保持しているからです。コーディネーターが停止すると、ネットワークも消失します。

エンドデバイスに「+++」を送信します。

-&gt; 次に「ATAJ1」コマンドを送信します。

-&gt; 「ATRS」コマンドを送信します。

-&gt; 数秒待ちます。

-&gt; UartSBee v5の「ASSOC」LEDが点灯します（UartSBee v5で設定する場合）。

-&gt; 「ATIF」コマンドを送信し、「3. belonging to」セクションの「PANID」を確認します。「PANID」が0x0000でない場合、エンドデバイスはZigBeeネットワークに参加しています。

次に「ATEX」コマンドを送信してATモードを終了します。

これでエンドデバイスの設定が完了しました。

<big>ステップ5: 接続をテストする;</big>

シリアルツールを使用して2つのノード（コーディネーターとエンドデバイス）を接続します。一方でデータを送信し、もう一方で同じデータが受信されるか確認します。

接続情報は電源を切っても永続的に保存されます。

### 5.4 OTAガイド

Mesh Beeはファームウェアのオーバーザエア（OTA）更新をサポートしています。つまり、ネットワーク設定が完了した後、ルーターやエンドデバイスのファームウェアをOTAで更新できます。

<big>ステップ1: 新しいファームウェアをコーディネーターの外部フラッシュにフラッシュする。</big>

このステップを達成するには、[5.2 ファームウェアの更新方法](/ja/Mesh_Bee#52-how-to-update-firmware "Mesh Bee")と非常に似ています。唯一の違いは、「Flash Select」で「External」を選択することです。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_External.jpg)

<big>ステップ2: ネットワークが正しく設定され、ノードが互いに通信できることを確認する。</big>

[5.3.2_Configuration](/ja/Mesh_Bee#53-at-commands--configuration "Mesh Bee")で説明されているようにネットワークノードを設定します。「ATLA」コマンドを送信してネットワーク上のノードを確認します。

<big>ステップ3: OTAプロセスをトリガーする。</big>

「ATDAxxxx」コマンドを送信して宛先アドレスを設定します（xxxxはファームウェアを更新するノードのショートアドレスです）。

-&gt; 「ATOR200」を送信してOTAパケット間隔を200ms/パケットに設定します。遅い方が安全です。

-&gt; 「ATOT」を送信してOTAダウンロードプロセスをトリガーします。

-&gt; 「ATOS」を送信してダウンロードプロセスを監視するか、「ATOA」を送信してダウンロードを中止します。

ダウンロードが完了すると、ターゲットノードが再起動し、新しいファームウェアが適用されます。「ATLA」コマンドを送信してターゲットのファームウェアバージョンを確認できます。

### 5.5 例

この例はファームウェアv1.0にのみ対応しています。それ以降のバージョンのファームウェアについては、リソースセクションでダウンロードできるCook Bookを参照してください。

これは2つのMesh Beeノードを使用したリモートコントロールの簡単な例です。

<big>ステップ1: 材料を準備する</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example0.jpg)

必要なもの：

* [Seeeduino v3](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7) x2

* XBeeシールド x2（バージョン1/2、上記画像は[XBee Shield v1](https://www.seeedstudio.com/depot/xbee-shield-p-419.html?cPath=73)と[XBee Shield v2](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)を示しています）

* Mesh Bee x2（上記画像はプロトタイプバージョンを示しており、リリースバージョンは色が異なる場合があります）

* UartSBee v5 x1

* [ロータリーアングルセンサー](https://www.seeedstudio.com/depot/grove-rotary-angle-sensor-p-770.html?cPath=85_52) x1

* [サーボ](https://www.seeedstudio.com/depot/grove-servo-p-1241.html?cPath=39_41) x1

* ケーブル

<big>ステップ2: Mesh Beeノードを設定する</big>

[5.3.2_Configuration](/ja/Mesh_Bee#532-configuration "Mesh Bee")を参照してポイントツーポイント接続を設定します。

<big>ステップ3: サーボ側（制御される側）を組み立てる</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example1.jpg)

サーボの信号線（黄色）をデジタル10に接続し、赤線をVCC、黒/茶線をGNDに接続します。

-&gt; 「XB_TX」をD0に接続し、「XB_RX」をD1に接続します（SeeeduinoのハードウェアUARTを使用することを意味します）。

-&gt; Mesh Bee（コーディネーター）をXBeeシールドのBeeソケットに差し込みます。

-&gt; XBeeシールドをSeeeduinoに差し込むのを忘れないでください。

<big>ステップ4: 制御側を組み立てる</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example2.jpg)

ロータリーアングルセンサーの信号線（黄色）をA0に接続し、赤線をVCC、黒線をGNDに接続します。

-&gt; XBee Shield v1の「USB_UART_M..8」スイッチを右側（M..8）に、「D11/12_XBEE_UART」スイッチを右側（X_RX_X_TX）に切り替えます。

-&gt; Mesh Bee（エンドデバイス）を XBee シールドの Bee ソケットに接続します。

-&gt; XBee シールドを Seeeduino に取り付けます。

<big>ステップ 5: プログラム</big>

MeshBeeDemo_servo:

```
#include <Servo.h>
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(11, 12); // RX, TX

Servo myservo;  // サーボオブジェクトを作成してサーボを制御
// 最大8つのサーボオブジェクトを作成可能

int pos = 0;    // サーボ位置を格納する変数
unsigned int sensorValue = 0;  // センサーからの値を格納する変数
unsigned char cmd;
unsigned int lastSensorValue = 0;

void setup()
{
    Serial.begin(115200);
    //mySerial.begin(9600);
    myservo.attach(10);  // ピン9にサーボオブジェクトを接続

    // Mesh Bee の設定
    Serial.println("atex");
}

void loop()
{
    if (read_msg(&cmd, &sensorValue))
    {
        if (cmd ==  CMD_POS)
        {
            if (lastSensorValue != sensorValue)
            {
                lastSensorValue = sensorValue;
                //Serial.println(sensorValue);
                pos = map(sensorValue, 0, 1023, 0, 180);
                myservo.write(pos);
            }
        }
    }
    //delay(10);
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                // 有効なパケット
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

MeshBeeDemo_analogInput:

```
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(10, 11); // RX, TX

int sensorPin = A0;    // ポテンショメータの入力ピンを選択
int sensorValue = 0;  // センサーからの値を格納する変数
int lastSensorValue = 0;

void send_msg(unsigned char cmd, unsigned int msg);
boolean read_msg(unsigned char *cmd, unsigned int *msg);

void setup()
{
    // シリアル通信を開始し、ポートが開くのを待つ
    Serial.begin(115200);

    Serial.println("+++");
    Serial.println("ATTM1");  // Mesh Bee をユニキャスト送信モードに設定
    Serial.println("ATDA0000");  // ユニキャストアドレスを COO に設定
    Serial.println("ATEX");  // ATコマンドモードを終了

    // ソフトウェアシリアルポートのデータレートを設定
    //mySerial.begin(9600);
    //mySerial.println("Hello, world?");
}

void loop() // 繰り返し実行
{
    // センサーから値を読み取る
    sensorValue = analogRead(sensorPin);
    if (sensorValue != lastSensorValue || 1)
    {
        //Serial.println(sensorValue);
        send_msg(CMD_POS, (unsigned int)sensorValue);
        lastSensorValue = sensorValue;
        delay(50);
    }
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                // 有効なパケット
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example3.gif)

### 5.6 使用上の注意

ZigBee は低消費電力かつ低速のネットワーク伝送プロトコルです。そのため、高速な状況には適していません。

2～3ノードを持つ Mesh Bee ネットワークのデータレート仕様：

<table>
<tr>
<th>伝送方向</th>
<th>送信方法</th>
<th>パケット周期 (ms)</th>
<th>最大パケット長 (バイト)</th>
</tr>
<tr>
<td>COO/ROU</td>
<td>ブロードキャスト</td>
<td>250</td>
<td>50</td>
</tr>
<tr>
<td>COO/ROU -&gt; END</td>
<td>ユニキャスト</td>
<td>40</td>
<td>50</td>
</tr>
<tr>
<td>END</td>
<td>ブロードキャスト</td>
<td>150</td>
<td>50</td>
</tr>
<tr>
<td>END -&gt; COO/ROU</td>
<td>ユニキャスト</td>
<td>20</td>
<td>25</td>
</tr>
<tr>
<td>END -&gt; COO/ROU</td>
<td>ユニキャスト</td>
<td>40</td>
<td>50</td>
</tr>
</table>

ネットワークが大きくなるとデータレートはさらに低下します。

## 6. 開発

私たちが紹介したい最大の特徴は、Mesh Beeが再プログラミングをサポートしていることです。この価格でプログラム可能なZigBeeモジュールを手に入れることができるのは非常に魅力的です。

Mesh Beeは、32ビットRISCコアと豊富なリソースを備えたJN5168というチップを使用しています：

* フラッシュ/RAM/EEPROM: 256kB/32kB/4kB

* マスターSPIポート（3つのセレクト出力付き）

* スレーブSPIポート

* 2つのUART

* 5つのPWM（4つのタイマー &amp; 1つのカウンター）

* I2C

* 4チャンネル10ビットADC

* コンパレータ

* バッテリー &amp; 温度センサー

UartSBee v5を使用すれば、簡単にMesh Beeを再プログラムできます。ただし、NXPのドキュメントを少し学ぶ必要があります。

### 7.1 ソフトウェアアーキテクチャ

以下はMesh Beeのソフトウェアアーキテクチャです。

AUPSでスタンドアロンアプリケーションを開発することができます。ユーザーアプリケーションは、トップレベルで2つのArduinoスタイルの関数（setup &amp; loop）で構成されており、Arduinoと同じように動作します。

また、Suliも導入しました。SuliはSeeed Unified Library Interfaceの略です。今後のモジュールドライバ/ライブラリのリリースではSuliに切り替える予定です。これにより、Suli互換のライブラリ/ドライバはSuliがサポートするすべてのプラットフォームに適応します。詳細については、[https://github.com/Seeed-Studio/Suli](https://github.com/Seeed-Studio/Suli)をご覧ください。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeArchitecture0603.jpg)

### 7.2 開発環境

NXPは、フルスケールの開発環境、ツール、およびドキュメントを提供しています。開発環境は、SDKツールチェーンとZigBeeスタックSDKで構成されています。

これらのリソースと詳細な説明ページを入手するには、NXPのウェブサイトにアクセスしてください：[http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

注意：Mesh Beeの工場出荷時ファームウェアは、Smart Energyプロファイルに基づいて開発されています。

開発環境を作成するには、以下をダウンロードしてください：

* JN-SW-4041    SDKツールチェーン

* JN-SW-4064    ZigBee Smart Energy SDK

* JN-SW-4067-JN516x ZigBee Home Automation SDK

その後、Windows PCにインストールします（JN-SW-4041の後にJN-SW-4064をインストールしてください）。

.oscfgdiagファイルと.zpscfgファイルを編集するには、&lt;[SDK Installation and User Guide.pdf](https://files.seeedstudio.com/wiki/Mesh_Bee/res/SDK_Installation_and_User_Guide.pdf)&gt;のセクション6.2.2に従ってEclipseプラグインをインストールする必要があります。

注意2：残念ながら、現在はWindows用のツールチェーンのみが提供されています。LinuxおよびMacユーザーの場合、Windows VMを使用するのが選択肢となるかもしれません。

### 7.3 プログラミングガイド

JN5168をプログラミングするには基本的な知識が必要であり、簡単に説明するのは難しいです。公式ドキュメントを深く掘り下げることが必須かもしれません。

NXP公式リソース：

ユーザーガイド

* **JN-UG-3048 &lt;ZigBee PRO Stack User Guide&gt; ZigBee PROの基本概念を紹介し、アプリケーション開発のためのZigBee PRO APIを詳細に説明します。**

* JN-UG-3059 &lt;ZigBee PRO Smart Energy API User Guide&gt; ZigBee Smart Energy（SE）を紹介し、アプリケーション開発のためのSE APIを詳細に説明します。

* **JN-UG-3075 &lt;JenOS User Guide&gt; ZigBee PROアプリケーションコードでOSリソースを管理するためのJenOS APIを詳細に説明します。**

* JN-UG-3077 &lt;ZigBee Cluster Library User Guide&gt; ZigBee Cluster Library（ZCL）のNXP実装について説明します。

アプリケーションノート

* JN-AN-1135 &lt;Smart Energy HAN Solutions Application Note&gt; スマートエネルギーホームエリアネットワークソリューションの例を提供し、説明します。

関連ドキュメント

* **JN-DS-JN516x &lt;JN516x Datasheet&gt; JN516xシリーズのマイクロコントローラーについて詳細に説明します。**

* **JN-UG-3087 &lt;JN516x Integrated Peripherals API User Guide&gt; アプリケーションコードでJN516xオンチップペリフェラルと対話するためのJN516x Integrated Peripherals APIを詳細に説明します。**

ダウンロードページ：[http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

### 7.4 貢献

[![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeFirmwareProject.png)](https://seeed-studio.github.io/Mesh_Bee/)

## 8. ディスカッショングループ

Mesh Beeに関する一般的なディスカッションや開発関連のトピックについて話し合うために、Googleグループを作成しました。以下のリンクから、そこでの活動をご覧いただけます：[https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 9. リソース

* [Mesh Bee v1.0用Eagleファイル](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip)

* [Mesh Bee V1.0用ATコマンドマニュアル](https://files.seeedstudio.com/wiki/Mesh_Bee/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf)

* [JN5168データシート](https://files.seeedstudio.com/wiki/Mesh_Bee/res/JN516X.pdf)

* [v1004用クックブック](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_Cook_Book.pdf)

* [v1004用ユーザーマニュアル](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_User_Manual_v0.3.pdf)

### 9.1 ファームウェアダウンロード

**v1001（工場出荷時のファームウェア、現在最も安定したバージョン）：**

コーディネーター用ファームウェア: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin)

ルーター用ファームウェア: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin)

エンドデバイス用ファームウェア: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin)

**v1004**

コーディネーター用ファームウェア: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin)

ルーター用ファームウェア: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin)

エンドデバイス用ファームウェア: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin)

**開発およびリリースの同期:**

[https://github.com/Seeed-Studio/Mesh_Bee/releases](https://github.com/Seeed-Studio/Mesh_Bee/releases)

**Mesh Beeのファームウェアに関する詳細情報:**

* [Github上のMesh Beeファームウェアソースコード](https://github.com/Seeed-Studio/Mesh_Bee)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>