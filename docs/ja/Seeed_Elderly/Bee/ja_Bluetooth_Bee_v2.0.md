---
description: Bluetooth Bee v2.0
title: Bluetooth Bee v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bluetooth_Bee_v2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
sku: 113050013
type: gettingstarted
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/113050014%201_02.jpg)

Bluetooth Beeは、既存のXbeeソケットと互換性があり、透明なワイヤレスシリアル接続のセットアップを目的とした、使いやすいBluetooth SPPモジュールです。

シリアルポートBluetoothモジュールは、完全に認定されたBluetooth V2.0+EDR（Enhanced Data Rate）3Mbps変調を備え、完全な2.4GHz無線トランシーバーとベースバンドを提供します。

このモジュールは、CMOS技術を使用したCSR Bluecore 04-External単一チップBluetoothシステムを採用しており、AFH（Adaptive Frequency Hopping Feature）を備えています。また、フットプリントが最小で、わずか12.7mm x 27mmという小型設計です。これにより、全体的な設計/開発サイクルを簡素化できることを期待しています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-v2.0-p-2373.html)

## 特徴

---

### ハードウェアの特徴

- 典型的な-80dBmの感度。

- 最大+4dBmのRF送信出力。

- 完全認定Bluetooth V2.0+EDR 3Mbps変調。

- 低消費電力1.8V動作、1.8〜3.6V I/O。

- PIO制御。

- プログラム可能なボーレートを備えたUARTインターフェース。

- 統合PCBアンテナ。

- Bee互換ヘッダー。

### ソフトウェアの特徴

- デフォルトのボーレート: 38400、データビット: 8、ストップビット: 1、パリティ: なし、データ制御: あり。

- サポートされるボーレート: 9600、19200、38400、57600、115200、230400、460800。

- CTSとRTSを使用してデータストリームを制御。

- PIO0で上昇パルスが検出されると、デバイスが切断されます。

- ステータス指示ポートPIO1: 低-切断、高-接続。

- PIO10は赤色LEDに接続され、PIO11は緑色LEDに接続されています。マスターとスレーブがペアリングされると、赤と緑のLEDが2秒間隔で1回点滅し、切断されると緑のLEDのみが1秒間に2回点滅します。

- デフォルトで電源投入時に最後に接続したデバイスに自動接続。

- デフォルトで一致したデバイスの接続を許可。

- デフォルトPINコード: 0000。

- 接続範囲外で切断された場合、30分以内に自動再接続。

:::caution
    このモジュールの供給電圧は3.3Vです。これを超えるとデバイスが永久的に損傷する可能性があります。
c;;;

## ハードウェアのインストール

---

### UART Beeを介してPCにBluetoothを接続する

<!-- Bluetoothは標準のXBeeソケットを提供します。ここでは、[UartSBee V5](/ja/UartSBee_v5)を使用してBluetoothとPCを接続し、スライダーで供給電圧を3.3Vに設定してください。 -->

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToPCSet.jpg)
|---|---|

### ArduinoにBluetoothを接続する

<!-- ここでは、[XBee Shield](/ja/XBee_Shield_V2.0)をBluetoothと[Seeeduino Lotus](/ja/Seeeduino_Lotus)の間のブリッジとして使用します。 -->

SeeedinoのハードウェアUARTはPCとのデバッグに使用されるため、D2とD3を選択してソフトウェアUARTをシミュレートし、Bluetoothと通信します。以下の画像のジャンパー設定を参照してください。

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/Bluetooth_Bee_v2.0_ConnectToArduinoSet.jpg)
|---|---|

## ソフトウェア説明書

---

### 規約

- 工場出荷時のデフォルト設定:

  - 名前: HMSoft;

    - ボーレート: 9600, N, 8, 1;

    - PINコード: 1234;

    - バージョン送信。

- ATコマンド形式:
  - 大文字のATコマンド形式。文字列形式で、他の記号（例: \r または \n）は含まない。

    - 誤ったコマンドには応答がありません。

### ATコマンド（続き）

**1. テストコマンド**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK</td>
<td width="300">なし</td>
</tr></table>

**2. ボーレートのクエリ/設定**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+BAUD?</td>
<td width="300">OK+Set:[para1]</td>
<td rowspan="2" width="300">Para1: ボーレート番号

<dl>1---------1200

<dl>2---------2400

<dl>3---------4800

<dl>4---------9600

<dl>5---------19200

<dl>6---------38400

<dl>7---------57600

<dl>8---------115200

<dl>9---------230400

<dl>A---------460800

<dl>B---------921600

<dl>C---------1382400

<dl>デフォルト: 4(9600)</td></tr>

<tr>
<td width="300">AT+BAUD[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**3. パリティビットのクエリ/設定**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">クエリ: AT+CHK?</td>
<td width="300">OK+CHK:[para1]</td>
<td rowspan="2" width="300">Para1: 0,1,2

<dl>0:なし

<dl>1:奇数

<dl>2:偶数

<dl>デフォルト: 0 (なし)</td></tr>
<tr>
<td width="300">設定: AT+CHK[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**4. ストップビットのクエリ/設定**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+STOP?</td>
<td width="300">OK+STOP:[para1]</td>
<td rowspan="2" width="300">Para1:1, 2

<dl>1: 1ストップビット

<dl>2: 2ストップビット

<dl>デフォルト: 1 (1ストップビット)</td></tr>
<tr>
<td width="300">AT+STOP[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**5. ボーレート、パリティビット、ストップビットのクエリ/設定**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+UART?</td>
<td width="300">OK+UART:[para1],[para2],[para3]</td>
<td rowspan="2" width="300">Para1: ボーレート

<dl>値: 1~C

<dl>デフォルト: 4(9600)

<dl>Para2: パリティビット

<dl>値: 0,1,2

<dl>デフォルト: 0 (なし)

<dl>Para3: ストップビット

<dl>値: 1, 2

<dl>デフォルト: 1(1ビット)</td></tr>
<tr>
<td width="300">AT+UART[para1][para2][para3]</td>
<td width="300">OK+Set:[para1] [para2] [para3]</td></tr></table> -->

**6. モジュール自己診断コマンド**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+SECH?</td>
<td width="300">OK+SECH:OKAY または

OK+SECH:FAIL</td>
<td width="300">なし</td></tr></table>

**7. モジュールアプリケーションセクタ診断コマンド**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+APCH?</td>
<td width="300">OK+APCH:OKAY または

OK+APCH:FAIL</td>
<td width="300">なし</td></tr></table> -->

**8. モジュール温度クエリコマンド**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+TEMP?</td>
<td width="300">OK+TEMP:[temp value]</td>
<td width="300">なし</td></tr></table>

**9. モジュールの検出可能状態のクエリ/設定**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+DISC?</td>
<td width="300">OK+DISC:[para1]</td>
<td rowspan="2" width="300">Para1: 0,1,2

<dl>0: 検出可能かつ接続可能

<dl>1: 検出可能のみ、接続不可

<dl>2: 接続可能のみ

<dl>デフォルト: 0</td></tr>
<tr>
<td width="300">AT+DISC [para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**10. PIO0機能（システムキー）のクエリ/設定**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+KEY?</td>
<td width="300">OK+KEY:[para1]</td>
<td rowspan="2" width="300">Para1: 0, 1

<dl>0: 現在の状態をキャンセル。

<dl>1: 現在の状態をキャンセルし、工場出荷時設定に戻す。

<dl>デフォルト: 0</td></tr>
<tr>
<td width="300">AT+ KEY[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**11. PIO1出力状態（システムLED）のクエリ/設定**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+LED?</td>
<td width="300">OK+LED:[para1]</td>
<td rowspan="2" width="300">Para1: 0, 1

<dl>0: 未接続時は500ms高、500ms低、接続時は高出力。

<dl>1: 未接続時は低出力、接続時は高出力。

<dl>デフォルト: 0</td></tr>
<tr>
<td width="300">AT+ LED [para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table> -->

**12. モジュールPIOピン出力状態のクエリ/設定**

<!-- <table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+PIO?</td>
<td width="300">OK+PIO:[para1]</td>
<td rowspan="2" width="300">Para1: 長さ10、各ビット値は1または0。

<dl>0: 低出力; 1: 高出力

<dl>デフォルト: 0000000000</td></tr>
<tr>
<td width="300">AT+PIO[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**13. PIOピンの高低出力のクエリ/設定**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+PIO[para1]?</td>
<td width="300">OK+PIO:[para1][para2]</td>
<td rowspan="2" width="300">Para1: 2~B Para2: 0, 1

<dl>Para1はクエリ/設定したいPIOピンを指定します。値:2,3,4,5,6,7,8,9,A,B。

<dl>Para2はクエリまたは設定値を指定します。0は低、1は高。</td></tr>
<tr>
<td width="300">AT+PIO[para1][para2]</td>
<td width="300">OK+Set:[para1][para2]</td></tr></table>

**14. モジュール名のクエリ/設定**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+NAME?</td>
<td width="300">OK+NAME[para1]</td>
<td rowspan="2" width="300">Para1: モジュール名、最大長は12。

デフォルト: HMSoft</td></tr>
<tr>
<td width="300">AT+NAME[para1]</td>
<td width="300">OK+Set[para1]</td></tr></table>

**15. すべての設定値を工場出荷時設定に戻す**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+DEFAULT</td>
<td width="300">OK+DEFAULT</td>
<td rowspan="2" width="300">なし</td></tr></table>

**16. モジュールを再起動する**

<table >
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+RESTART</td>
<td width="300">OK+RESTART</td>
<td rowspan="2" width="300">なし</td></tr></table>

**17. マスターおよびスレーブロールのクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+ROLE?</td>
<td width="300">OK+ROLE:[para1]</td>
<td rowspan="2" width="300">Para1: M, S

<dl>M: マスター

<dl>S: スレーブ

<dl>デフォルト: S</td></tr>
<tr>
<td width="300">AT+ROLE[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**18. ピンコードのクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+PIN?</td>
<td width="300">OK+PIN:[para1]</td>
<td rowspan="2" width="300">Para1はピンコードで、最大長は12文字、A~Z、a~z、0~9を許可

デフォルト: 1234</td></tr>
<tr>
<td width="300">AT+PIN[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**19. 接続されたデバイスアドレスのクリア**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+CLEAR</td>
<td width="300">OK+CLEAR</td>
<td rowspan="2" width="300">なし</td></tr></table>

**20. スレーブデバイスのスキャン**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+SCAN?</td>
<td width="300">OK+SCANS

OK+SCAN[MAC]

……………

OK+SCANE</td>
<td rowspan="2" width="300">なし</td></tr></table>

**21. スレーブデバイスのMACアドレスに接続**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+LNK[para1]</td>
<td width="300">OK+CONNS(接続開始)

<dl>OK+CONN(接続成功)

<dl>OK+CONNF(接続失敗)</td>
<td rowspan="2" width="300">Para1はMACアドレス文字列です。</td></tr></table>

**22. ソフトウェアバージョンのクエリ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+VERSION

AT+VERSION?</td>
<td width="300">バージョン情報</td>
<td rowspan="2" width="300">なし</td></tr></table>

**23. システムヘルプ情報**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+HELP?</td>
<td width="300">ヘルプ情報</td>
<td rowspan="2" width="300">なし</td></tr></table>

**24. 最後に接続されたデバイスアドレスのクエリ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+RADD?</td>
<td width="300">OK+ADDR:MACアドレス</td>
<td rowspan="2" width="300">なし</td></tr></table>

**25. モジュールアドレスのクエリ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+LADD?

<dl>AT+ADDR?</td>
<td width="300">OK+LADD:MACアドレス</td>
<td rowspan="2" width="300">なし</td></tr></table>

**26. モジュール動作タイプのクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+IMME?</td>
<td width="300">OOK+IMME:[para1]</td>
<td rowspan="2" width="300">Para1: 0, 1

<dl>0: モジュールが電源オン時、ATコマンドにのみ応答し、AT+WORKを受信するまで何もしない。

<dl>1: 電源オン時に即座に動作

<dl>デフォルト: 1</td></tr>
<tr>
<td width="300">AT+IMME[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**27. 即座に動作**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+WORK</td>
<td width="300">OK+WORK</td>
<td rowspan="2" width="300">なし</td></tr></table>

**28. モジュールがリモートデバイスに接続するタイムアウト値のクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+TCON?</td>
<td width="300">OK+TCON:[para1]</td>
<td rowspan="2" width="300">Para1はタイムアウト値です。時間が切れるとモジュールはこのアドレスに接続しなくなり、検索モードに入ります。

<dl>Para1許容値: 0000~9999 単位は秒。

<dl>デフォルト: 0000 永続的に接続</td></tr>
<tr>
<td width="300">AT+TCON[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**27. 即座に動作**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+WORK</td>
<td width="300">OK+WORK</td>
<td rowspan="2" width="300">なし</td></tr></table>

**29. モジュール動作モードのクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+TYPE?</td>
<td width="300">OK+TYPE:[para1]</td>
<td rowspan="2" width="300">Para1: 0~2

<dl>0: 伝送モード

<dl>1: リモートコントロールモード

<dl>2: PIO収集モード
デフォルト: 0</td></tr>
<tr>
<td width="300">AT+TYPE[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**30. PIO状態文字列の遅延時間(単位ms)のクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+TPIO?</td>
<td width="300">OK+TPIO:[para1]</td>
<td rowspan="2" width="300">Para1値は0000から9999msの間です。値が0より大きい場合、PIO状態が変更されると、モジュールはこの値の遅延後にリモートデバイスにPIO状態文字列を送信します。

<dl>デフォルト: 0 一度だけ送信</td></tr>
<tr>
<td width="300">AT+TPIO[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**31. リモートコントロールモードを伝送モードに切り替え(今回のみ)**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+START</td>
<td width="300">OK+START</td>
<td rowspan="2" width="300">なし</td></tr></table>

**32. バッファ保存パラメータのクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+BUFF?</td>
<td width="300">OK+BUFF:[para1]</td>
<td width="300">なし</td></tr>
<tr>
<td width="300">AT+BUFF[para1]</td>
<td width="300">OK+Set:[para1]</td>
<td width="300">Para1: 0~1

<dl>0: 保存しない

<dl>1: 保存する

<dl>デフォルト: 0</td></tr></table>

**33. 検索フィルターのクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+FILT?</td>
<td width="300">OK+FILT:[para1]</td>
<td rowspan="2" width="300">Para1: 許容タイプ

<dl>値: 0~C

<dl>デフォルト: C (すべて)</td></tr>
<tr>
<td width="300">AT+FILT[para1]</td>
<td width="300">OK+Set:[para1]</td></tr></table>

**34. モジュール通知のクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th></tr>
<tr>
<td width="300">AT+NOTI?</td>
<td width="300">OK+NOTI:[para1]</td>
<td width="300">なし</td></tr>
<tr>
<td width="300">AT+NOTI[para1]</td>
<td width="300">OK+Set:[para1]</td>
<td width="300">Para1値は0, 1。

<dl>0: 通知しない(デフォルト)

<dl>1: 接続または切断時に通知する</td></tr></table></td></tr></table>

**35. モジュールのデバイスクラスのクエリ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+COD?</td>
<td width="300">OK+COD:[para1]</td>
<td width="300">なし</td>
</tr>
<tr>
<td width="300">AT+COD[para1]</td>
<td width="300">OK+Set:[para1]</td>
<td width="300">Para1はCOD値です。

<dl>値: 0000~0xFFFF

<dl>デフォルト: 0x1F00 (不明なデバイス)</td>
</tr>
</table>

## プログラミング

### Windowsでシリアルポートを使用してBluetoothモジュールを設定する

このセクションでは、PCを使用してBluetoothを設定する方法を示します。基本的な設定方法を学ぶことができます。

「ハードウェアインストール」セクションを参照してハードウェア接続を設定します。モジュールの青色LEDが点滅している場合、接続が設定されていないことを示します。

シリアルターミナルを開き、ボーレート: 9600、データビット: 8、ストップビット: 1、フロー制御なしに設定します。シリアルターミナルを使用してBluetoothに「AT」を送信すると、すべてが正常であれば「OK」が返されます。Bluetoothは接続が設定されていない場合にのみATコマンドに応答し、接続が設定されている場合はすべてのコマンドが文字列として認識されて送信されます。LEDインジケータを通じて状態を区別できます。

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-AT.png)

次に、いくつかの便利な設定を送信できます。以下はコマンドと応答のサンプルです。

1. シリアル接続をテストする: 「AT」を送信すると、「OK」が返されます。

2. ファームウェアバージョンを取得する: 「AT+VERSION?」を送信すると、「OK+VERSION:HMSoft V621」が返されます。

3. 工場出荷時設定に戻す: 「AT+DEFAULT」を送信すると、「OK+DEFAULT」が返されます。

4. モジュールを再起動する: 「AT+RESTART」を送信すると、「OK+RESTART」が返されます。

5. シリアルポートのボーレートをリセットする: 「AT+BAUD4」を送信すると、「OK+Set:9600」が返されます。

6. 認証を有効にする: 「AT+AUTH1」を送信すると、「OK+SetAuth:1」が返されます。

7. モジュールアドレスをクエリする: 「AT+LADD?」を送信すると、「OK+LADD:000EEACF1A57」が返されます。

8. 最後に接続されたデバイスのアドレスをクエリする: 「AT+RADD?」を送信すると、「OK+RADD:000000000000」が返されます。

9. モジュール名を設定する: 「AT+NAMEHM-01」を送信すると、「OK+Set:HM-01」が返されます。

10. PINコードを設定する: 「AT+PIN8888」を送信すると、「OK+SetPin:8888」が返されます。

11. 接続情報の通知を有効にする: 「AT+NOTI1」を送信すると、「OK+Set:1」が返されます。

12. マスターモードに設定する: 「AT+ROLEM」を送信すると、「OK+Set:M」が返されます。

またはスレーブモードに設定する: 「AT+ROLES」を送信すると、「OK+Set:S」が返されます。

PCに接続された2つのBluetoothを使用し、1つを中央（Central）として設定し、もう1つを周辺（Peripheral）として設定します。数秒後、互いを見つけてLEDの点滅が停止し、接続されます！

### Androidとの通信

このBluetoothモジュールはBluetooth仕様V2.1+EDR、V2.0+EDR、V2.1、V2.0に対応しており、これらのプロトコルのいずれかを持つデバイスと通信できます。Android携帯電話を使用して、Bluetoothモジュールとのやり取り方法を示します。

モジュールに電源を供給し、スレーブモードに設定します（「AT+ROLES」をモジュールに送信）。Android携帯電話で「Bluetooth SPP pro」というアプリを検索してインストールします。アプリを起動すると、すべてのBluetoothデバイスが自動的にスキャンされます。「HMSoft」を選択して「Connect」ボタンをタッチし、その後「Byte stream mode」を選択します。これでPCにデータを送信できます。携帯電話のテキストフィールドにいくつかの単語を書き込み、送信ボタンを押します。また、PCはシリアルターミナルを使用して携帯電話にデータを転送できます。

|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Screenshot_2015-01-09-14-37-42.png)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Screenshot_2015-01-09-14-38-43.png)
|---|---|
|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Screenshot_2015-01-09-14-38-48.png)|![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Screenshot_2015-01-09-14-39-52.png)|

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Dialog_with_Android.png)

### 2つのArduino間のデータ送信

コードを書く準備はできましたか？練習の後に何かを実行する時が来ました。BluetoothのペアとArduinoまたはそれを制御する他のプラットフォームを準備します。ここでは2つのArduino Unoを使用します。「ハードウェアインストール」セクションで説明されているように接続を設定します。

中央（Central）と周辺（Peripheral）のプログラムは同じコードを使用しますが、プログラムの冒頭でのマイクロ定義が異なります。Bluetoothを中央モードに割り当てるには、テキストを「#define MASTER 1」に変更するだけです。周辺モードに割り当てる場合は「#define MASTER 0」に変更します。

初期化プログラムのフローは以下のフローチャートを参照してください。まず、Bluetoothの事前設定されたボーレートを区別する必要があります。その後、工場出荷時設定に戻すコマンドを送信し、ボーレートを115200から9600に変更します。これは、ソフトウェアシリアルが高ボーレートでは正常に動作しないためです。その後、リセットコマンドを使用してBluetoothに他のパラメータを設定します。

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Init-flowchat.png)

初期化後、中央（Central）と周辺（Peripheral）は異なる動作をします。中央は一定間隔で周辺にメッセージを送信し、周辺から受信した内容を出力します。一方、周辺は中央に応答するだけです。

<!-- [こちら](https://github.com/Seeed-Studio/HM-13_SW)をクリックしてテストコードをダウンロードし、HM-13_SW.inoをArduino IDEで開き、コンパイルしてArduino Unoにダウンロードしてください。プログラムの冒頭でマクロを変更してBluetoothを異なる役割に設定することを忘れないでください。Arduinoの使い方に関する問題がある場合は、[こちら](/ja/Getting_Started_with_Seeeduino)をクリックしてヘルプを参照してください。 -->

プログラムをダウンロードした後、2つのシリアルターミナルウィンドウを開きます。BluetoothのLEDが点滅し、数秒後に点滅が停止して点灯し続けます。これは、互いに接続されたことを示します。プログラムに従って、中央は周辺に継続的にメッセージを送信し、毎回フィードバックを受け取ります。

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_v2.0/img/HM-01-Debug_Output_Slave.png)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験をしていただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
