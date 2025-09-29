---
description: Bluetooth V4.0 HM-11 BLEモジュール
title: Bluetooth V4.0 HM-11 BLEモジュール
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bluetooth_V4.0_HM_11_BLE_Module
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11%20BLE%20Module.jpg)

これは、BLE BeeおよびXadow BLEで使用されるSMD BLEモジュールです。TI CC2541チップをベースにしており、低コストで堅牢なネットワークノードを構築でき、超低消費電力システムに非常に適しています。このモジュールは小型で使いやすく、メーカーのプリプログラム済みファームウェアを使用することで、ATコマンドを介して迅速にBLE通信を構築できます。iPhone、iPad、およびAndroid 4.3とのBLE通信をサポートしています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-V4.0-HM-11-BLE-Module-p-1803.html)

## 特徴
---
*   Bluetoothプロトコル: Bluetooth Specification V4.0 BLE

*   動作周波数: 2.4 GHz ISMバンド

*   インターフェース方式: シリアルポート

*   オープン環境で30メートル以内でモジュール間通信が可能

*   モジュール間で送受信するバイト数に制限なし

*   変調方式: GFSK (ガウス周波数シフトキーイング)

*   送信出力: - DBM, 23-6 DBM, 0 DBM, 6 DBM（ATコマンドで変更可能）

*   TI CC2541チップを使用、256 KBの構成スペースを持ち、ATコマンドをサポート。ユーザーは必要に応じて役割（マスター、スレーブモード）、シリアルポートのボーレート、デバイス名、パスワードなどのマッチングパラメータを変更可能。

*   電源供給: + 3.3 VDC 50 mA

*   動作温度: -5 ~ +65 ℃

## 仕様
---
<table>
<tr>
<th>仕様</th>
<th>値</th>
</tr>
<tr>
<td width="200px">マイクロプロセッサ</td>
<td width="200px">CC2541</td>
</tr>
<tr>
<td>リソース</td>
<td>ATコマンドをサポート。ユーザーは必要に応じて役割（マスター、スレーブモード）、シリアルポートのボーレート、デバイス名、パスワードなどのマッチングパラメータを柔軟に変更可能。</td>
</tr>
<tr>
<td>外形寸法</td>
<td>13.5mm x 18.5mm x 2.3mm</td>
</tr>
<tr>
<td>電源供給</td>
<td>3.3V</td>
</tr>
<tr>
<td>通信プロトコル</td>
<td>Uart(3.3V LVTTL)</td>
</tr>
<tr>
<td>IO数</td>
<td>2</td>
</tr>
<tr>
<td>キー入力IO</td>
<td>1</td>
</tr>
<tr>
<td>LEDインジケータIO</td>
<td>1</td>
</tr>
<tr>
<td>接続性</td>
<td>XBee互換ソケット</td>
</tr>
</table>

## 電気的特性
---
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
<td>8.5</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>ディープスリープ電流</td>
<td></td>
<td>600</td>
<td></td>
<td>uA</td>
</tr>
<tr>
<td>動作温度</td>
<td>-40</td>
<td></td>
<td>+65</td>
<td>°C</td>
</tr>
</table>

## ピン定義
---
![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11_Pinout.jpg)

<table>
<tr>
<th>ピン</th>
<th>名前</th>
<th>説明</th>
</tr>
<tr>
<td width="100px">1</td>
<td width="200px">UART_RTS</td>
<td width="350px">UART</td>
</tr>
<tr>
<td>2</td>
<td>UART_TX</td>
<td>UART</td>
</tr>
<tr>
<td>3</td>
<td>UART_CTS</td>
<td>UART</td>
</tr>
<tr>
<td>4</td>
<td>UART_RX</td>
<td>UART</td>
</tr>
<tr>
<td>5</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>VCC</td>
<td>電源供給 3.3V</td>
</tr>
<tr>
<td>10</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>RESETB</td>
<td>リセット、低アクティブで最低5ms</td>
</tr>
<tr>
<td>12</td>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>13</td>
<td>PIO3</td>
<td>IOポート、DHT11/DS18B20に接続するために使用</td>
</tr>
<tr>
<td>14</td>
<td>PIO2</td>
<td>デジタル入力、出力</td>
</tr>
<tr>
<td>15</td>
<td>PIO1</td>
<td>LEDインジケータ</td>
</tr>
<tr>
<td>16</td>
<td>PIO0</td>
<td>ボタンピン</td>
</tr>
</table>

## ATコマンドと設定
---
**1）	ネイティブMACアドレスのクエリ**

送信: AT+ADDR?

成功後の応答: OK+LADD: MACアドレス（12文字のアドレス）

**2）	ボーレートのクエリ**

送信: AT+BAUD?

成功後の応答: OK+Get: [para1]

para1の範囲: 0 ~ 8。対応するパラメータリストは以下の通り:

0 -------- 9600

1 -------- 19200

2 -------- 38400

3 -------- 57600

4 -------- 115200

5 -------- 4800

6 -------- 2400

7 -------- 1200

8 -------- 230400

デフォルト: 0 (9600)

**3）	ボーレートの設定**

送信: AT+BAUD[para1]

成功後の応答: OK+Set:[para1]

例: 送信: AT+BAUD1, 応答: OK+Set: 2。ボーレートが19200に設定されます。

注意: 1200に切り替えた後、モジュールはATコマンドの設定をサポートしなくなります。スタンバイ中にPIO0を押すと、モジュールは工場出荷時の設定に戻ります。このボーレートの使用は推奨されません。ボーレートを設定した後、モジュールを再起動して新しいパラメータを有効にする必要があります。

**4）	指定されたBluetoothアドレスに接続する**

送信: AT+CON[para1]

成功後の応答: OK+CONN[para2]

para2の範囲: A, E, F

例: Bluetoothアドレスが0017EA0943AEの場合、AT+CON0017EA0943AEを送信すると、モジュールはOK+CONNAまたはOK+CONNF、CONNEまたはOKを返します。

**5）	デバイスのペアリング情報を削除する**

送信: AT+CLEAR

成功後の応答: OK+CLEAR

接続されたデバイスのアドレスコード情報をクリアします。

**6）	モジュールの動作モードをクエリする**

送信: AT+MODE?

成功後の応答: OK+Get: [para]

paraの範囲: 0 ~ 2。0は透過モード、1はPIO取得+リモートコントロール+透過、2は透過+リモートコントロールモードを表します。デフォルトは0です。

**7）	モジュールの動作モードを設定する**

送信: AT+MODE []

成功後の応答: OK+Set: [para]

**8）	デバイス名をクエリする**

送信: AT+NAME?

成功後の応答: OK+NAME [para1]

**9）	デバイス名を設定する**

送信: AT+NAME [para1]

成功後の応答: OK+Set: [para1]

例: デバイス名をSeeedに設定する場合、AT+NAMESeeedを送信すると、OK+Set: Seeedが返されます。この時点でBluetoothモジュールの名前がSeeedに変更されます。
注意: コマンド実行後、再起動して設定を有効にする必要があります。

**10）	ペアリングパスワードをクエリする**

送信: AT+PASS?

成功後の応答: OK+PASS: [para1]

para1の範囲は000000 ~ 999999で、デフォルトは000000です。

**11）	ペアリングパスワードを設定する**

送信: AT+PASS [para1]

成功後の応答: OK+Set: [para1]

**12）	工場出荷時設定にリセットする**

送信: AT+RENEW

成功後の応答: OK+RENEW

モジュールを工場出荷時のデフォルト設定にリセットします。モジュール設定がリセットされ、工場出荷時の状態に戻ります。モジュールは500msの遅延後に再起動します。必要がない場合は注意してください。

**13）	モジュールをリセットする**

送信: AT+RESET

成功後の応答: OK+RESET

コマンド実行後、モジュールは500msの遅延後に再起動します。

**14）	マスター・スレーブモードを設定する**

送信: AT+ROLE [para1]

成功後の応答: OK+Set: [para1]

##    サンプルコード
---
//マスター
```
/*

 このサンプルコードはパブリックドメインに属します。

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // シリアル通信を開始し、ポートが開くのを待ちます:
    Serial.begin(9600);
    while (!Serial) {
        ; // シリアルポートが接続されるのを待ちます。Leonardoのみ必要
    }

    Serial.println("おやすみなさい、月!");

    // SoftwareSerialポートのデータレートを設定
    mySerial.begin(9600);
    // マスターを設定
    mySerial.print("AT+ROLE1");
    delay(10000);
}

void loop() // 繰り返し実行
{
    // SoftwareSerialポートのデータレートを設定
    mySerial.print("テスト 私はマスターです  ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```
//スレーブ
```
/*

 このサンプルコードはパブリックドメインに属します。

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // シリアル通信を開始し、ポートが開くのを待ちます:
    Serial.begin(9600);
    while (!Serial) {
        ; // シリアルポートが接続されるのを待ちます。Leonardoのみ必要
    }

    Serial.println("おやすみなさい、月!");

    // SoftwareSerialポートのデータレートを設定
    mySerial.begin(9600);
    // スレーブを設定
    mySerial.print("AT+ROLE0");
    delay(10000);
}

void loop() // 繰り返し実行
{
    // SoftwareSerialポートのデータレートを設定
    mySerial.print("テスト 私はスレーブです ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

##   関連プロジェクト
---
###  Grove-Serial Bluetoothとは

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/7be197fcaee35992babbffd47462bbc0.image.530x397.jpg)

シリアルBluetoothは、透明なワイヤレスシリアル接続を設定するために設計されています。

シリアルポートBluetoothモジュールは、完全に認定されたBluetooth V2.0+EDR（Enhanced Data Rate）3Mbps変調を備えた、完全な2.4GHz無線トランシーバーとベースバンドを提供します。

このモジュールは、CMOS技術を使用したCSR Bluecore 04-External単一チップBluetoothシステムを採用しており、AFH（Adaptive Frequency Hopping Feature）を備えています。

###   IRリモート

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/Seeed-recipe-66-20140625115150.jpg)

このプロジェクトでは、Grove - Water Sensorを使用して、植物に水をやるためのシンプルで効果的なソリューションを作成します。

このデモを使用すると、以下が可能です：

*   すべてのリモートコマンドを1つのAndroidデバイスに統合

*   SeeeduinoとAndroidパネル間でBluetoothを介して通信

*   IRを介したリモートコントロール

[**作ってみたい！**](https://www.seeedstudio.com/recipe/66-ir-remote.html)

[**Bluetoothを使った他の素晴らしいプロジェクト**](https://www.seeedstudio.com/recipe/index.php?query=bluetooth)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>