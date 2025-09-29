---
title: Grove - BLE (デュアルモデル) v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-BLE-dual_model-v1.0/
slug: /ja/Grove-BLE-dual_model-v1.0
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0.jpg)

Grove - BLE (デュアルモデル) v1.0はCSRデュアルモードBluetoothチップを使用しています。このチップはARMアーキテクチャに基づいており、ATコマンドをサポートしています。ユーザーはシリアルボーレート、機器名、ペアリングパスワードに基づいて柔軟に開発することができます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-BLE-dual-model-p-2407.html)

特徴
--------

- BTバージョン: Bluetooth Specification V4.0 & BLE
- UART送受信最大バイト数: 512
- 他のデバイスからモジュールへのSPPモード: 1パケットあたり90バイト
- 他のデバイスからモジュールへのBLEモード: 1パケットあたり20バイト
- 2つのデータ伝送モード: バランスモードと高速モード
- 動作周波数: 2.4GHz ISMバンド
- 変調方式: GFSK(ガウス周波数シフトキーイング)
- RF出力: -23dbm, -6dbm, 0dbm, 6dbm
- 速度: 非同期: 3Kバイト、同期: 3Kバイト
- セキュリティ: 認証と暗号化
- サービス: スレーブSPP、ペリフェラルBLE、UUID FFE0, FFE1
- 電源: +3.3/+5.0VDC 50mA
- 長距離通信: SPP 30メートル、BLE 60メートル
- 消費電力: SPP 13.5mA、BLE 9.5mA
- 動作温度: -5 ~ +65度

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で言及されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-------------

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_PhotoTop.jpg)

**K2**: 接続状態では、K2ボタンを100ms以上押すことで接続を解除できます。スリープモードでは、K2（工場出荷時設定）ボタンを押すことで復元できます。

**U1**: U1はワイヤレスモジュールで、自動電源オンリセット回路を含みます。

**D1**: LEDは2つのモードで動作します: **スリープ**はゆっくり点滅し、**接続**状態は連続点灯で示されます。

**J1**: 標準的なGroveコネクタ。

<div class="admonition warning">
<p class="admonition-title">注意</p>
BLEの伝送速度はSPPの伝送速度よりも遅いため、設計時にBLEデュアルモード製品計画の速度に合わせて低速を選択しました。
</div>

ハードウェアインストール
---------------------

### UART Beeを介してPCにBluetoothを接続する

Bluetoothは標準的なGroveソケットを備えたシリアルポートを提供しており、ほとんどのUSB-UARTコンバータが使用可能です。ここでは[UartSBee V5](/ja/UartSBee_v5)を使用してBluetoothとPCを接続します。
![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_ConnectToPC.jpg)

### ArduinoにBluetoothを接続する

Arduino UnoにはGroveソケットがないため、代わりに<a href="/ja/Seeeduino_Lotus"><span><font color={'8DC215'} size={"3"}> Seeeduino Lotus </font></span></a>を使用します。また、Arduinoを**Grove Base Shield V2**と一緒に使用することもできます。
例として、D2とD3をソフトウェアUARTとして使用します。そのため、Groveケーブルを「D2」ソケットに差し込みます。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/Grove-BLE-dual_model-v1.0_ConnectToArduino.jpg)

ソフトウェアの説明
--------------------

### 規約

- EDRモードでは、スレーブのみが設定可能で、BLEモードではマスターまたはスレーブのいずれも設定可能です。
- 工場出荷時のデフォルト設定:
  - EDR名: HMSoft、スレーブロール、PinCode 1234
  - BLE名: HMSoft、スレーブロール、PinCode 000000
  - ボーレート: 115200, N, 8, 1;
- ATコマンド形式:
  - ATコマンド形式は大文字で、文字列形式で、他の記号を含まない。(例: //r または //n)
  - 不正なコマンドは応答がありません。

### ATコマンド

**1. テストコマンド**

| 送信 | 受信                     | パラメータ |
|------|--------------------------|-----------|
| AT   | OK/ER/リンク切断         | なし      |

モジュールがリモートデバイスに接続されていない場合、「OK」を受信します。

モジュールにエラーがある場合、「ER」を受信します。

モジュールが接続されている場合、リモートデバイスから切断されます。「AT + NOTI」が1に設定されている場合、情報文字列を受信します。

**2. モジュールEDRアドレスのクエリ**

| 送信     | 受信          | パラメータ |
|----------|--------------|-----------|
| AT+ADDE? | OK+ Get: MAC | なし      |

**3. クエリモジュール BLE アドレス**

| 送信      | 受信           | パラメータ |
|-----------|----------------|------------|
| AT+ADDB?  | OK+ Get: MAC   | なし       |

**4. 認証モードのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+AUTH?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (デフォルト: 0)
0 – 認証なし
1 – 認証必須

</td>
</tr>
<tr>
<td width="300">
S: AT+AUTH[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

AT+AUTH0: 安全でない接続を許可します。  
AT+AUTH1: すべての接続に認証が必要です。

**5. A to B モードのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+ATOB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (デフォルト: 0)
0 – ATOBモードを開かない
1 – ATOBモードを開く

</td>
</tr>
<tr>
<td width="300">
S: AT+ATOB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

このコマンドは AT+MODE0 コマンドと併用する必要があります。Aデバイス（SPPモード）がモジュールに接続され、Bデバイス（BLEモード）もモジュールに接続されている場合、Aデバイスからモジュールに送信されたデータ文字列はBデバイスに送信されます。同様に、Bデバイスからモジュールに送信されたデータ文字列もAデバイスに送信されます。

**6. ボーレートのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+BAUD?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 1~7, (デフォルト: 6).
1 - 4800  
2 – 9600  
3 – 19200  
4 – 38400  
5 – 57600  
6 – 115200  
7 - 230400  

</td>
</tr>
<tr>
<td width="300">
S: AT+BAUD[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**7. ボンド情報のクリア**

| 送信      | 受信       | パラメータ               |
|-----------|------------|--------------------------|
| AT+BONDE  | OK+BONDE   | EDRボンド情報をクリア    |
| AT+BONDB  | OK+BONDB   | BLEボンド情報をクリア    |

BLEモードではまだサポートされていません。

**8. 最後に接続されたEDRデバイスアドレスのクリア**

| 送信      | 受信       | パラメータ |
|-----------|------------|------------|
| AT+CLEAE  | OK+CLEAE   | なし       |

**9. 最後に接続されたBLEデバイスアドレスのクリア**

| 送信      | 受信       | パラメータ |
|-----------|------------|------------|
| AT+CLEAB  | OK+CLEAB   | なし       |

**10. モジュールデュアルワークモードのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+DUAL?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (デフォルト: 0)
0 – デュアル接続を許可。
1 – 1つの接続のみを許可。

</td>
</tr>
<tr>
<td width="300">
S: AT+DUAL[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

AT+DUAL0: 同時に2つの接続を許可します（SPPとBLE）。  
AT+DUAL1: 同時に1つの接続のみを許可します（SPPまたはBLE）。

**11. ハードウェアフロー制御スイッチのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
AT+FIOW?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,(デフォルト: 0)
0: ハードウェアフロー制御オフ  
1: ハードウェアフロー制御オン  

</td>
</tr>
<tr>
<td width="300">
AT+FIOW[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**12. モジュールデータ転送速度モードのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
AT+HIGH?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,(デフォルト: 0)
0: バランスモード  
1: 高速モード  

</td>
</tr>
<tr>
<td width="300">
AT+HIGH[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

バランスモードでは、SPPとBLEを安定した速度でバランスさせます。  
高速モードでは速度を制御せず、SPPモードが高速になります。  
高速モードではモジュールがRESETBピン機能を失いますが、「AT+RESET」コマンドを使用してモジュールをリセットすることは可能です。

**13. システムヘルプ情報**

| 送信      | 受信             | パラメータ |
|-----------|------------------|------------|
| AT+HELP?  | ヘルプ情報       | なし       |

**14. モジュールロード通知のクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
AT+INIT?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1,?, (デフォルト: 0)
0: ロード通知オフ  
1: ロード通知オン  

</td>
</tr>
<tr>
<td width="300">
AT+INIT[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

「AT+INIT1」が設定されると、モジュールがロードされた後、モジュールはUARTを介して「OK+INIT」文字列を出力します。

**15. モジュールワークモードのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+MODE?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (デフォルト: 0)
0 – データ転送。  
1 – リモートコントロール。  

</td>
</tr>
<tr>
<td width="300">
S: AT+MODE[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

AT+MODE0: 接続が確立された場合のみデータを転送します。  
AT+MODE1: データを転送し、ATコマンドに応答します。

**16. 通知情報のクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+NOTI?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, (デフォルト: 0)
0: 通知しない  
1: 通知する  

</td>
</tr>
<tr>
<td width="300">
S: AT+NOTI[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

AT+NOTI1の後、モジュールの状態が変化すると、モジュールは接続または切断文字列をUARTを介して送信します：

OK+CONE ======== EDR接続  
OK+LSTE ========= EDR切断  
OK+CONB========= BLE接続  
OK+LSTB ========= BLE切断  
OK+LSTA ========= 切断以外の場合、モジュールは500ms後にリセットされます。

**17. 通知モードのクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+NOTP?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1; デフォルト: 0  
0: アドレスなし  
1: アドレス付き  

</td>
</tr>
<tr>
<td width="300">
Q: AT+NOTP[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

このコマンドは「AT+NOTI1」と併用する必要があります。このスイッチがオンの場合、モジュールが接続または切断されると、プロンプト文字列にリモートアドレスが含まれます。

**18. モジュールEDR名のクエリ/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+NAME?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: モジュールEDR名、  
最大長は12文字。  
デフォルト: HMSoft  

</td>
</tr>
<tr>
<td width="300">
Q: AT+NAME[P1]
</td>
<td width="300">
OK+ Set:[ P1]
</td>
</tr>
</table>

**19. モジュール BLE 名の照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+NAMB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: モジュール BLE 名  
最大長は12文字  
デフォルト: HMSoft
</td>
</tr>
<tr>
<td width="300">
S: AT+NAMB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**20. PIO1 出力状態 (システム LED) の照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+PIO1?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1  
0: 未接続時 500ms 高出力、500ms 低出力、接続時 高出力  
1: 未接続時 低出力、接続時 高出力  
デフォルト: 0
</td>
</tr>
<tr>
<td width="300">
S: AT+PIO1[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**21. PIO 出力状態の照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+PIO[P1]?
</td>
<td width="300">
OK+ Get:[P1][P2]
</td>
<td rowspan="2" width="300">
P1: 2~B (HM-12)  
P2: 2~3 (HM-13)  
0: 低出力  
1: 高出力  
?: 照会
</td>
</tr>
<tr>
<td width="300">
S: AT+PIO[P1][P2]
</td>
<td width="300">
OK+ Set:[P1][P2]
</td>
</tr>
</table>

**22. EDR ピンコードの照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+PINE?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: モジュール EDR コード  
最大長: 6  
デフォルト: 1234
</td>
</tr>
<tr>
<td width="300">
S: AT+PINE[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**23. BLE ピンコードの照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+PINB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: モジュール BLE コード  
000000~999999  
デフォルト: 000000
</td>
</tr>
<tr>
<td width="300">
S: AT+PINB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**24. UART パリティビットの照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+PARI?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1, 2 (デフォルト: 0)  
0: パリティなし  
1: 偶数パリティ  
2: 奇数パリティ
</td>
</tr>
<tr>
<td width="300">
S: AT+PARI[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**25. すべての設定値を工場出荷時設定に戻す**

| 送信     | 受信       | パラメータ |
|----------|------------|-----------|
| AT+RENEW | OK+RENEW   | なし      |

**26. モジュールの再起動**

| 送信     | 受信       | パラメータ |
|----------|------------|-----------|
| AT+RESET | OK+RESET   | なし      |

**27. BLE RSSI 値の照会**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AT+RSSB?</td>
<td>OK+RSSB: [P1]</td>
<td>P1: RSSI 値<br />
9999: 接続なし<br />
9998: 後で試してください<br />
9997: 読み取りエラー<br />
Xxxx: RSSI 値</td>
</tr>
</tbody>
</table>

このコマンドは「AT+MODE1」を設定した後に使用する必要があります。このコマンドはリモート Bluetooth デバイスでのみ使用されます。

**28. EDR RSSI 値の照会**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AT+RSSE?</td>
<td>OK+RSSE: [P1]</td>
<td>P1: RSSI 値<br />
9999: 接続なし<br />
9998: 後で試してください<br />
9997: 読み取りエラー<br />
Xxxx: RSSI 値</td>
</tr>
</tbody>
</table>

**29. 最後に接続された EDR デバイスのアドレスの照会**

| 送信     | 受信                | パラメータ |
|----------|--------------------|-----------|
| AT+RADE? | OK+Get:MAC Address | なし      |

**30. 最後に接続された BLE デバイスのアドレスの照会**

| 送信     | 受信                | パラメータ |
|----------|--------------------|-----------|
| AT+RADB? | OK+Get:MAC Address | なし      |

**31. マスターおよびスレーブロールの照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
AT+ROLB?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1 (デフォルト: 0)  
0: ペリフェラル  
1: セントラル
</td>
</tr>
<tr>
<td width="300">
AT+ROLB[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

このコマンドはモジュールの次回電源オンまたはリセット後に有効になります。

**32. EDR 動作モードの照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+SCAN?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1 (デフォルト: 0)  
0: 検出および接続可能  
1: 接続可能のみ
</td>
</tr>
<tr>
<td width="300">
S: AT+SCAN[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**33. UART ストップビットの照会/設定**

<table border="1">
<tr>
<th>
送信
</th>
<th>
受信
</th>
<th>
パラメータ
</th>
</tr>
<tr>
<td width="300">
Q: AT+STOP?
</td>
<td width="300">
OK+ Get:[P1]
</td>
<td rowspan="2" width="300">
P1: 0, 1 (デフォルト: 0)  
0: 1 ストップビット  
1: 2 ストップビット
</td>
</tr>
<tr>
<td width="300">
S: AT+STOP[P1]
</td>
<td width="300">
OK+ Set:[P1]
</td>
</tr>
</table>

**34. ソフトウェアバージョンの照会**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>AT+VERR?<br />
AT+VERS?</td>
<td>バージョン情報</td>
<td>なし</td>
</tr>
</tbody>
</table>

プログラミング
--------------

### Windowsでシリアルを使用してBluetoothモジュールを設定する

このセクションでは、PCを使用してBluetoothを設定する方法を示します。基本的な設定方法を学ぶことができます。「ハードウェアインストール」セクションを参照してハードウェア接続をセットアップしてください。モジュールの青色LEDが点滅している場合、接続が設定されていないことを示します。

シリアルターミナルを開き、ボーレート: 115200、データビット: 8、ストップビット: 1、フロー制御なしを設定します。シリアルターミナルを使用してBluetoothに「AT」を送信し、すべてが正常であれば「OK」が返されます。Bluetoothは接続が設定されていない場合にのみATコマンドに応答し、接続が設定されている場合はすべてのコマンドが文字列として送信されます。LEDのインジケータを通じて状態を区別することができます。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-AT.png)

次に、いくつかの便利な設定コマンドを送信することができます。以下はコマンドとその応答のサンプルです。

1. シリアル接続のテスト: 「AT」を送信すると、「OK」が返されます。

2. 工場出荷時設定にリセット: 「AT+RENEW」を送信すると、「OK+RENEW」が返されます。

3. シリアルポートのボーレートをリセット: 「AT+BAUD2」を送信すると、「OK+Set:2」が返されます。

4. 認証を有効化: 「AT+AUTH1」を送信すると、「OK+Set:1」が返されます。

5. Bluetoothをリセット: 「AT+RESET」を送信すると、「OK+RESET」が返されます。

6. ファームウェアバージョンを照会: 「AT+VERS?」を送信すると、「OK+Get:HMSoftV217」が返されます。

7. EDRのMACアドレスを照会: 「AT+ADDE?」を送信すると、「OK+Get:000E0E002074」が返されます。

8. BLEのMACアドレスを照会: 「AT+ADDB?」を送信すると、「OK+Get:000E0B002074」が返されます。

9. EDRの名前を設定: 「AT+NAMEHM-13-EDR」を送信すると、「OK+Set:HM-13-EDR」が返されます。

10. BLEの名前を設定: 「AT+NAMEHM-13-BLE」を送信すると、「OK+Set:HM-13-BLE」が返されます。

11. EDRのパスワードを設定: 「AT+PINE123451」を送信すると、「OK+Set:123451」が返されます。

12. BLEのパスワードを設定: 「AT+PINB123451」を送信すると、「OK+Set:123451」が返されます。

13. 検出可能および接続可能を有効化: 「AT+SCAN0」を送信すると、「OK+Set:0」が返されます。

14. 接続通知情報を有効化: 「AT+NOTI1」を送信すると、「OK+Set:1」が返されます。

15. 通知情報にアドレスを含める: 「AT+NOTP1」を送信すると、「OK+Set:1」が返されます。

16. ユーザーキーを有効化: 「AT+PIO01」を送信すると、「OK+Set:1」が返されます。

17. セントラルモードに設定: 「AT+ROLB1」を送信すると、「AT+ROLB1」が返されます。

または、ペリフェラルモードに設定: 「AT+ROLB0」を送信すると、「AT+ROLB0」が返されます。

PCに接続された2つのBluetoothを使用し、一方をセントラルモード、もう一方をペリフェラルモードに設定します。数秒後、互いを検出し、LEDが点滅を停止して接続されます！

### iPhoneとの通信

このBluetoothモジュールは、Bluetooth EDR（Enhanced Data Rate）とBluetooth Low Energyの2つのプロトコルを持っています。これにより、これらのプロトコルを持つデバイスと通信することができます。Android OS 4.3以上の一部のスマートフォンやiPhone4以降のモデルはBLE機能を備えています。ここでは、iPhoneを使用してBluetoothとのやり取りをデモンストレーションします。

Bluetoothを電源に接続し、ペリフェラルモードに設定します。Apple Storeで「LightBlue」を検索してインストールします。アプリを起動すると、先ほど名前を変更した「HM-13-BLE」が表示されます。それをタッチして接続し、「Properties」をタッチして制御します。右上の「Hex」キーはデータ形式を変更するためのもので、文字列形式が見やすいかもしれません。「Listen for notifications」をタッチしてデータ受信を有効にします。その後、BLEを介してPCにデータを送信できます。「Write new value」をタッチしていくつかの単語を書き込んでください。また、PCはシリアルターミナルを使用してiPhoneにデータを転送することもできます。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0108.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0109.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0111.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-IMG_0114.PNG)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-DialogWithIOS.png)

### 2つのArduino間のデータ送信

コードを書く準備はできましたか？練習の後、何かを実行する時が来ました。BluetoothのペアとArduinoまたはその他のプラットフォームを準備して、それらを制御します。ここでは2つのArduino Unoを使用します。「ハードウェアインストール」セクションで説明したように接続を設定してください。

セントラルとペリフェラルのプログラムは同じコードを使用しますが、プログラムの冒頭でのマイクロ定義が異なります。Bluetoothをセントラルモードに割り当てるには、テキストを「/#define MASTER 1」に変更するだけです。または、ペリフェラルモードに割り当てる場合は「/#define MASTER 0」に変更します。

初期化プログラムのフローについては、以下のフローチャートを参照してください。まず、Bluetoothの事前設定されたボーレートを区別する必要があります。その後、工場出荷時設定にリセットするコマンドを送信し、ボーレートを115200から9600に変更します。これは、ソフトウェアシリアルが高ボーレートでは正常に動作しないためです。その後、Bluetoothに他のパラメータを設定し、最後にリセットコマンドを送信します。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Init-flowchat.png)

初期化後、セントラルとペリフェラルは異なる動作をします。セントラルは一定間隔でペリフェラルにメッセージを送信し、ペリフェラルから受信した内容を印刷します。一方、ペリフェラルはセントラルに応答するだけです。

[こちら](https://github.com/Seeed-Studio/HM-13_SW)をクリックしてテストコードをダウンロードし、Arduino IDEでHM-13/_SW.inoを開き、コンパイルしてArduino Unoにダウンロードしてください。プログラムの冒頭でマクロを変更してBluetoothを異なる役割に設定することを忘れないでください。Arduinoの使い方に関して問題がある場合は、<a href="/ja/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}>こちら</font></span></a>をクリックしてヘルプを参照してください。

プログラムをダウンロードした後、2つのシリアルターミナルウィンドウを開きます。BluetoothのLEDが点滅し、数秒後に点滅が停止して点灯し続けます。これは、互いに接続されたことを示します。
プログラムに記述されている通り、セントラルはペリフェラルに継続的にメッセージを送信し、毎回フィードバックを受け取ります。

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Debug_Output_Master.png)

![](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/img/HM-13-Debug_Output_Slave.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Eagle_Grove-BLE-dual_model-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [HM-13 Bluetooth モジュールデータシート](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Bluetooth_HM-13_en.pdf)
- [Arduino コード](https://github.com/Seeed-Studio/HM-13_SW)
- [EAGLE/_Grove-BLE/_(dual/_model)/_v1.0/_sch/_pcb](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Eagle_Grove-BLE-dual_model-v1.0_sch_pcb.zip)
- [PDF/_Grove-BLE/_(dual/_model)/_v1.0/_sch](https://files.seeedstudio.com/wiki/Grove-BLE-dual_model-v1.0/res/Grove-BLE-dual_model-v1.0.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_BLE_(dual_model)_v1.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>