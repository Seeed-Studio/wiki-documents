---
description: Xadow - BLE (デュアルモード) v1.0
title: Xadow - BLE (デュアルモード) v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_BLE_Dual_Model_V1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_PhotoBottom.jpg" alt="some_text"/>

Xadow - BLE (デュアルモード) v1.0は、CSRデュアルモードBluetoothチップを使用しており、ATコマンドをサポートするARMアーキテクチャのシングルチップを搭載しています。ユーザーはシリアルボーレート、デバイス名、ペアリングパスワードに基づいて柔軟に開発を行うことができます。

<a href="https://www.seeedstudio.com/Xadow-BLE-(dual-model)-p-2405.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>

## 特徴
---
- BTバージョン: Bluetooth Specification V4.0 & BLE
- UART送受信最大バイト数: 512
- 他のデバイスからモジュールへのSPPモード: 1パケットあたり90バイト
- 他のデバイスからモジュールへのBLEモード: 1パケットあたり20バイト
- 2つのデータ伝送モード: バランスモードと高速モード
- 動作周波数: 2.4GHz ISMバンド
- 変調方式: GFSK (ガウシアン周波数シフトキーイング)
- RF出力: -23dbm, -6dbm, 0dbm, 6dbm
- 速度: 非同期: 3Kバイト, 同期: 3Kバイト
- セキュリティ: 認証と暗号化
- サービス: スレーブSPP, ペリフェラルBLE, UUID FFE0, FFE1
- 電源: +3.3VDC 50mA
- 長距離通信: SPP 30メートル, BLE 60メートル
- 消費電力: SPP 13.5mA, BLE 9.5mA
- 動作温度: -5 ~ +65℃

## 仕様
---
<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/600px-Xadow_-_BLE_(dual_model)_v1.0.png" alt="some_text"/>

- **K2**: 接続状態では、K2を100ms以上押すと接続が切断されます。スリープモード中では、K2を押すことで工場出荷時設定に復元できます。
- **D1**: LEDは2つの動作モードを表示します: スリープ中はゆっくり点滅し、接続状態では連続点灯します。
- **J1&J2**: 標準のXadowコネクタ。

:::caution
    このモジュールの供給電圧は2.5V ~ 3.7Vです。これを超えるとデバイスに永久的な損傷を与える可能性があります。BLEの伝送速度はSPPの伝送速度よりも遅いため、設計ではBLEデュアルモード製品の計画に従い、低速の方を選択しました。
:::

## ハードウェアのインストール
---
**Uart Beeを介してPCにBluetoothを接続する**

Xadow - BLEは標準のXadowインターフェースを持ち、リードピッチがあります。[Xadow - Breakout](https://wiki.seeedstudio.com/ja/Xadow_Breakout)を使用してGroveソケットに変換します。

Xadowインターフェースは軸対称ポートであるため、組み立て方向を守る必要があります。以下の画像を参照してください。

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPC.jpg" alt="some_text"/>

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToPCConnect.jpg" alt="some_text"/>

**Xadow - メインボードにBluetoothを接続する**

Xadow BLEスレーブを[Xadow - メインボード](https://wiki.seeedstudio.com/ja/Xadow_Main_Board)に接続し、USBケーブルでメインボードをPCに接続します。

注意: Xadow - BLEをXadowメインボードに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填コーナーを別のモジュールの直角コーナーに接続することです（各Xadowモジュールの4つのコーナーを参照してください）。

<img src="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/Xadow_-_BLE_(dual_model)_v1.0_ConnectToArduino.jpg" alt="some_text"/>

## ソフトウェア説明
---
**規約**

- EDRモードでは、スレーブのみが設定可能で、BLEモードではマスターまたはスレーブのいずれも設定可能です。
- 工場出荷時のデフォルト設定：
  - EDR 名称: HMSoft、スレーブロール、PinCode: 1234
  - BLE 名称: HMSoft、スレーブロール、PinCode: 000000
  - ボーレート: 115200, N, 8, 1
- ATコマンド形式：
  - 大文字のATコマンド形式。文字列形式で、他の記号（例: \r または \n）は含まない。
  - 不正なコマンドは応答なし。

**ATコマンド**

**1. テストコマンド**

|送信|	受信|	パラメータ|
|---|---|---|
|AT	|OK/ER/リンク切断	|なし|

- モジュールがリモートデバイスに接続されていない場合、「OK」を受信します。
- モジュールにエラーがある場合、「ER」を受信します。
- モジュールが接続されている場合、リモートデバイスから切断されます。「AT + NOTI」が1に設定されている場合、情報文字列を受信します。

**2. モジュールのEDRアドレスを照会**

|送信|	受信|	パラメータ|
|---|---|---|
|AT+ADDE?	|OK+ Get: MAC|	なし|

**3. モジュールのBLEアドレスを照会**

|送信|	受信|	パラメータ|
|---|---|---|
|AT+ADDB?|	OK+ Get: MAC	|なし|

**4. 認証モードの照会/設定**

|送信|	受信|	パラメータ|
|---|---|---|
|Q: AT+AUTH?	|OK+ Get:[P1]	|P1: 0, 1, (デフォルト: 0) / 0 – 認証なし / 1 – 認証必須|
|S: AT+AUTH[P1]	|OK+ Set:[P1]|P1: 0, 1, (デフォルト: 0)/ 0 – 認証なし / 1 – 認証必須|

- AT+AUTH0: 安全でない接続を許可します。
- AT+AUTH1: すべての接続に認証が必要です。

**5. AからBモードの照会/設定**

|送信|	受信|	パラメータ|
|---|---|---|
|Q: AT+ATOB?	|OK+ Get:[P1]	|P1: 0, 1, (デフォルト: 0)/ 0 – ATOBモードを開かない / 1 – ATOBモードを開く|
|S: AT+ATOB[P1]	|OK+ Set:[P1]|P1: 0, 1, (デフォルト: 0)/ 0 – ATOBモードを開かない / 1 – ATOBモードを開く|

このコマンドはAT+MODE0コマンドと併用する必要があります。Aデバイス（SPPモード）がモジュールに接続され、Bデバイス（BLEモード）もモジュールに接続されている場合、Aデバイスからモジュールに送信されたデータ文字列はBデバイスに送信されます。Bデバイスからモジュールに送信されたデータ文字列もAデバイスに送信されます。

**6. ボーレートの照会/設定**

|送信|	受信|	パラメータ|
|---|---|---|
|Q: AT+BAUD?|	OK+ Get:[P1]	|P1: 1~7, (デフォルト: 6)./  1 - 4800  / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400 |
|S: AT+BAUD[P1]|	OK+ Set:[P1]|P1: 1~7, (デフォルト: 6). / 1 - 4800 / 2 – 9600 / 3 – 19200 / 4 – 38400 / 5 – 57600 / 6 – 115200 / 7 - 230400|

**7. ボンド情報のクリア**

|送信|	受信|	パラメータ|
|---|---|---|
|AT+BONDE|	OK+BONDE	|EDRボンド情報をクリア|
|AT+BONDB|	OK+BONDB	|BLEボンド情報をクリア|

BLEモードではまだサポートされていません。

**8. 最後に接続されたEDRデバイスアドレスのクリア**

|送信|	受信|	パラメータ|
|---|---|---|
|AT+CLEAE|	OK+CLEAE	|なし|

**9. 最後に接続されたBLEデバイスアドレスのクリア**

|送信|	受信|	パラメータ|
|---|---|---|
|AT+CLEAB|	OK+CLEAB|	なし|

**10. モジュールのデュアルワークモードの照会/設定**

|送信|	受信|	パラメータ|
|---|---|---|
|Q: AT+DUAL?	|OK+ Get:[P1]|	P1: 0, 1, (デフォルト: 0) / 0 – デュアル接続を許可 / 1 – 単一接続を許可|
|S: AT+DUAL[P1]	|OK+ Set:[P1]|P1: 0, 1, (デフォルト: 0) / 0 – デュアル接続を許可 / 1 – 単一接続を許可|

- AT+DUAL0: 同時に2つの接続を許可（SPPとBLE）。
- AT+DUAL1: 同時に1つの接続のみを許可（SPPまたはBLE）。

**11. ハードウェアフロー制御スイッチの照会/設定**

|送信|	受信|	パラメータ|
|---|---|---|
|AT+FIOW?|	OK+ Get:[P1]	|P1: 0, 1,(デフォルト: 0) / 0: ハードウェアフロー制御オフ / 1: ハードウェアフロー制御オン|
|AT+FIOW[P1]|	OK+ Set:[P1]|P1: 0, 1,(デフォルト: 0) / 0: ハードウェアフロー制御オフ / 1: ハードウェアフロー制御オン|

**12. モジュールデータ転送速度モードの照会/設定**

|送信|	受信|	パラメータ|
|---|---|---|
|AT+HIGH?	|OK+ Get:[P1]|	P1: 0, 1,(デフォルト: 0)/ 0: バランスモード / 1: 高速モード|
|AT+HIGH[P1]|	OK+ Set:[P1]|P1: 0, 1,(デフォルト: 0) / 0: バランスモード / 1: 高速モード|

- バランスモードでは、SPPとBLEの速度を安定させます。
- 高速モードでは速度を制御せず、SPPモードが高速になります。
- 高速モードでは、モジュールのRESETBピン機能が失われますが、「AT+RESET」コマンドを使用してモジュールをリセットできます。

**13. システムヘルプ情報**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+HELP?	|ヘルプ情報|	なし|

**14. モジュールロード通知の照会/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+INIT?	|OK+ Get:[P1]	|P1: 0, 1,?, (デフォルト: 0) / 0: ロード通知オフ / 1: ロード通知オン|
|AT+INIT[P1]|	OK+ Set:[P1]|P1: 0, 1,?, (デフォルト: 0) / 0: ロード通知オフ / 1: ロード通知オン|

「AT+INIT1」が設定されている場合、モジュールがロードされた後、モジュールはUARTを通じて「OK+INIT」文字列を出力します。

**15. モジュール作業モードの照会/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+MODE?	|OK+ Get:[P1]	|P1: 0, 1, (デフォルト: 0) / 0 – データ転送 / 1 – リモート制御|
|S: AT+MODE[P1]|	OK+ Set:[ P1]|P1: 0, 1, (デフォルト: 0) / 0 – データ転送 / 1 – リモート制御|

- AT+MODE0: 接続確立時のみデータを転送します。
- AT+MODE1: データを転送し、ATコマンドに応答します。

**16. 通知情報の照会/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+NOTI?	|OK+ Get:[P1]|	P1: 0, 1, (デフォルト: 0) / 0: 通知しない / 1: 通知する|
|S: AT+NOTI[P1]|	OK+ Set:[ P1]|P1: 0, 1, (デフォルト: 0) / 0: 通知しない / 1: 通知する|

- AT+NOTI1の後、モジュールの状態が変化すると、モジュールはUARTを通じて接続または切断文字列を送信します：
  - OK+CONE ======== EDR接続
  - OK+LSTE ========= EDR切断
  - OK+CONB========= BLE接続
  - OK+LSTB ========= BLE切断
  - OK+LSTA ========= 切断以外の場合、モジュールは500ms後にリセットされます。

**17. 通知モードの照会/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+NOTP?	|OK+ Get:[P1]	|P1: 0, 1; デフォルト: 0 / 0: アドレスなし / 1: アドレスあり|
|Q: AT+NOTP[P1]	|OK+ Set:[ P1]|P1: 0, 1; デフォルト: 0 / 0: アドレスなし / 1: アドレスあり|

このコマンドは「AT+NOTI1」と併用する必要があります。このスイッチがオンの場合、モジュールが接続または切断されると、プロンプト文字列にリモートアドレスが含まれます。

**18. モジュールEDR名の照会/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+NAME?|	OK+ Get:[P1]	|P1: モジュールEDR名 / 最大長は12 / デフォルト: HMSoft|
|Q: AT+NAME[P1]	|OK+ Set:[ P1]|P1: モジュールEDR名 / 最大長は12 / デフォルト: HMSoft|

**19. モジュールBLE名のクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+NAMB?|	OK+ Get:[P1]|	P1: モジュールBLE名 / 最大長は12 / デフォルト: HMSoft|
|S: AT+NAMB[P1]|	OK+ Set:[P1]|	P1: モジュールBLE名 / 最大長は12 / デフォルト: HMSoft|

**20. PIO1出力ステータス（システムLED）のクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+PIO1?|	OK+ Get:[P1]|	P1: 0, 1 / 0: 未接続時は500ms高出力、500ms低出力、接続時は高出力 / 1: 未接続時は低出力、接続時は高出力 / デフォルト: 0|
|S: AT+PIO1[P1]|	OK+ Set:[P1]|	P1: 0, 1 / 0: 未接続時は500ms高出力、500ms低出力、接続時は高出力 / 1: 未接続時は低出力、接続時は高出力 / デフォルト: 0|

**21. PIO出力ステータスのクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+PIO[P1]?|	OK+ Get:[P1][P2]|	P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: 低出力 / 1: 高出力 / ?: クエリ|
|S: AT+PIO[P1][P2]|	OK+ Set:[P1][P2]|	P1: 2~B (HM-12) / P2: 2~3 (HM-13) / 0: 低出力 / 1: 高出力 / ?: クエリ|

**22. EDRピンコードのクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+PINE?|	OK+ Get:[P1]|	P1: モジュールEDRコード / 最大長: 6 / デフォルト: 1234|
|S: AT+PINE[P1]|	OK+ Set:[P1]|	P1: モジュールEDRコード / 最大長: 6 / デフォルト: 1234|

**23. BLEピンコードのクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+PINB?|	OK+ Get:[P1]|	P1: モジュールBLEコード / 000000~999999 / デフォルト: 000000|
|S: AT+PINB[P1]|	OK+ Set:[P1]|	P1: モジュールBLEコード / 000000~999999 / デフォルト: 000000|

**24. UARTパリティビットのクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+PARI?|	OK+ Get:[P1]|	P1: 0, 1, 2, (デフォルト: 0) / 0: パリティなし / 1: 偶数パリティ / 2: 奇数パリティ|
|S: AT+PARI[P1]|	OK+ Set:[P1]|	P1: 0, 1, 2, (デフォルト: 0) / 0: パリティなし / 1: 偶数パリティ / 2: 奇数パリティ|

**25. 全設定値を工場出荷時設定に復元**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+RENEW|	OK+RENEW|	なし|

**26. モジュールの再起動**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+RESET|	OK+RESET|	なし|

**27. BLE RSSI値のクエリ**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+RSSB?|	OK+RSSB: [P1]|	P1: RSSI値 / 9999: 接続なし / 9998: 後で再試行 / 9997: 読み取りエラー / Xxxx: RSSI値|

このコマンドは「AT+MODE1」を設定した後に使用する必要があります。このコマンドはリモートBluetoothデバイスでのみ使用されます。

**28. EDR RSSI値のクエリ**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+RSSE?|	OK+RSSE: [P1]|	P1: RSSI値 / 9999: 接続なし / 9998: 後で再試行 / 9997: 読み取りエラー / Xxxx: RSSI値|

**29. 最後に接続したEDRデバイスアドレスのクエリ**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+RADE?|	OK+Get:MAC Address|	なし|

**30. 最後に接続したBLEデバイスアドレスのクエリ**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+RADB?|	OK+Get:MAC Address|	なし|

**31. マスターおよびスレーブロールのクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+ROLB?|	OK+ Get:[P1]|	P1: 0, 1 (デフォルト: 0) / 0: ペリフェラル / 1: セントラル|
|AT+ROLB[P1]|	OK+ Set:[P1]|	P1: 0, 1 (デフォルト: 0) / 0: ペリフェラル / 1: セントラル|

このコマンドはモジュールの次回電源オンまたはリセット後に有効になります。

**32. EDR動作モードのクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+SCAN?|	OK+ Get:[P1]|	P1: 0, 1, (デフォルト: 0) / 0: 検出可能かつ接続可能 / 1: 接続可能のみ|
|S: AT+SCAN[P1]|	OK+ Set:[P1]|	P1: 0, 1, (デフォルト: 0) / 0: 検出可能かつ接続可能 / 1: 接続可能のみ|

**33. UARTストップビットのクエリ/設定**

|送信|	受信	|パラメータ|
|---|---|---|
|Q: AT+STOP?|	OK+ Get:[P1]|	P1: 0, 1, (デフォルト: 0) / 0: 1ストップビット / 1: 2ストップビット|
|S: AT+STOP[P1]|	OK+ Set:[P1]|	P1: 0, 1, (デフォルト: 0) / 0: 1ストップビット / 1: 2ストップビット|

**34. ソフトウェアバージョンのクエリ**

|送信|	受信	|パラメータ|
|---|---|---|
|AT+VERR?|	バージョン情報|	なし|
|AT+VERS?|	バージョン情報|	なし|

## プログラミング
---
Windowsでシリアルを使用してBluetoothモジュールを設定する

このセクションでは、PCを使用してBluetoothを設定する方法を示します。基本的な設定方法を学ぶことができます。ハードウェア接続のセットアップについては「ハードウェアインストール」セクションを参照してください。モジュール上の青色LEDが点滅している場合、接続が設定されていないことを示しています。

シリアルターミナルを開き、以下の設定を行います：ボーレート：115200、データビット：8、ストップビット：1、フロー制御なし。「AT」をシリアルターミナルからBluetoothに送信すると、すべてが正常であれば「OK」が返されます。Bluetoothは接続が設定されていない場合のみATコマンドに応答します。接続が設定されている場合、すべてのコマンドは文字列として認識されて送信されます。LEDインジケーターを通じて状態を区別することができます。
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-AT.png)

次に、いくつかの便利な設定コマンドを送信できます。以下はコマンドとその応答の例です。

1. シリアル接続をテストする：「AT」を送信すると「OK」が返されます。
2. 工場出荷時設定に戻す：「AT+RENEW」を送信すると「OK+RENEW」が返されます。
3. シリアルポートのボーレートをリセットする：「AT+BAUD2」を送信すると「OK+Set:2」が返されます。
4. 認証を有効にする：「AT+AUTH1」を送信すると「OK+Set:1」が返されます。
5. Bluetoothをリセットする：「AT+RESET」を送信すると「OK+RESET」が返されます。
6. ファームウェアバージョンを照会する：「AT+VERS?」を送信すると「OK+Get:HMSoftV217」が返されます。
7. EDRのMACを照会する：「AT+ADDE?」を送信すると「OK+Get:000E0E002074」が返されます。
8. BLEのMACを照会する：「AT+ADDB?」を送信すると「OK+Get:000E0B002074」が返されます。
9. EDRの名前を設定する：「AT+NAMEHM-13-EDR」を送信すると「OK+Set:HM-13-EDR」が返されます。
10. BLEの名前を設定する：「AT+NAMEHM-13-BLE」を送信すると「OK+Set:HM-13-BLE」が返されます。
11. EDRのパスワードを設定する：「AT+PINE123451」を送信すると「OK+Set:123451」が返されます。
12. BLEのパスワードを設定する：「AT+PINB123451」を送信すると「OK+Set:123451」が返されます。
13. 検出可能および接続可能を有効にする：「AT+SCAN0」を送信すると「OK+Set:0」が返されます。
14. 接続情報の通知を有効にする：「AT+NOTI1」を送信すると「OK+Set:1」が返されます。
15. アドレスを含む通知情報を有効にする：「AT+NOTP1」を送信すると「OK+Set:1」が返されます。
16. ユーザーキーを有効にする：「AT+PIO01」を送信すると「OK+Set:1」が返されます。
17. セントラルモードに設定する：「AT+ROLB1」を送信すると「AT+ROLB1」が返されます。
または、ペリフェラルモードに設定する：「AT+ROLB0」を送信すると「AT+ROLB0」が返されます。

PCに接続された2つのBluetoothを使用し、1つをセントラルとして設定し、もう1つをペリフェラルとして設定します。数秒後、互いを検出し、LEDの点滅が停止して接続されます。

**iPhoneとの通信**

このBluetoothモジュールは、Bluetooth EDR（Enhanced Data Rate）とBluetooth Low Energyの2つのプロトコルを持っています。これにより、これらのプロトコルのいずれかを持つデバイスと通信できます。Android OS 4.3以上の一部のスマートフォンやiPhone4以降のモデルはBLE機能を備えています。ここでは、iPhoneを使用してBluetoothとのやり取りをデモンストレーションします。

Bluetoothを電源に接続し、ペリフェラルロールとして設定します。Apple StoreでLightBlueを検索してインストールします。アプリを起動すると、先ほど名前を変更した「HM-13-BLE」が表示されます。それをタッチして接続し、「Properties」をタッチして制御します。右上の「Hex」キーはデータ形式を変更するためのもので、文字列形式が見やすいかもしれません。「Listen for notifications」をタッチしてデータ受信を有効にします。その後、BLEを介してPCにデータを送信できます。「Write new value」をタッチしていくつかの文字列を入力します。また、PCはシリアルターミナルを使用してiPhoneにデータを転送することもできます。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-080911.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-14AT.png)

**2つのArduino間のデータ送信**

コードを書く準備はできましたか？練習の後、何かを実行する時が来ました。BluetoothのペアとArduinoまたはその他のプラットフォームを準備します。ここでは2つのArduino Unoを使用します。「ハードウェアインストール」セクションで説明されているように接続をセットアップします。

セントラルとペリフェラルのプログラムは同じコードを使用しますが、プログラムの冒頭で定義されるマクロが異なります。Bluetoothをセントラルロールに割り当てるには、テキストを「#define MASTER 1」に変更するだけです。ペリフェラルロールを割り当てる場合は「#define MASTER 0」に変更します。

初期化プログラムのフローについては以下のフローチャートを参照してください。まず、Bluetoothの事前設定されたボーレートを区別する必要があります。その後、工場出荷時設定に戻すコマンドを送信し、ボーレートを115200から9600に変更します。これは、ソフトウェアシリアルが高ボーレートでは正常に動作しないためです。その後、Bluetoothにリセットコマンドを使用して他のパラメータを設定します。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Init-flowchat.png)

初期化後、セントラルとペリフェラルは異なる動作をします。セントラルは一定間隔でペリフェラルにメッセージを送信し、ペリフェラルから受信した内容を出力します。一方、ペリフェラルはセントラルに応答するだけです。

[こちら](https://github.com/Seeed-Studio/HM-13_SW)をクリックしてテストコードをダウンロードし、Arduino IDEでHM-13_SW.inoを開きます。コンパイルしてArduino Unoにダウンロードします。プログラムの冒頭でマクロを変更してBluetoothを異なるロールに設定することを忘れないでください。Arduinoの使い方に関して問題がある場合は、[こちら](https://www.seeedstudio.com/wiki/Getting_Started_with_Seeeduino)をクリックしてヘルプを参照してください。

プログラムをダウンロードした後、2つのシリアルターミナルウィンドウを開きます。BluetoothのLEDが点滅し、数秒後に点滅が停止して点灯し続けます。これは、互いに接続されたことを示しています。プログラムに従い、セントラルはペリフェラルに継続的にメッセージを送信し、毎回フィードバックを受け取ります。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/img/HM-13-Debug_Output_Slave.png)

## リソース
---
- [HM-13 Bluetooth データシート](https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Bluetooth_HM-13_en.pdf)
- [Arduino コード](https://github.com/Seeed-Studio/HM-13_SW)
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0_sch_pcb.zip">Eagle_Xadow-BLE_(dual_model)_v1.0_sch_pcb]</a>
- <a href="https://files.seeedstudio.com/wiki/Xadow_BLE_Dual_Model_V1.0/res/Xadow-BLE_(dual_model)_v1.0.pdf"> PDF_Xadow-BLE_(dual_model)_v1.0</a>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>