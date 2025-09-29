---
description: BLE (dual) Bee v1.0
title: BLE (dual) Bee v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BLE_dual_Bee_v1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---



![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_PhotoBottom.jpg)

BLE (dual) Bee v1.0は、ATコマンドをサポートするARMアーキテクチャシングルチップを搭載したCSRデュアルモードBluetoothチップを使用しています。ユーザーはシリアルボーレート、機器名、ペアリングパスワードに応じて柔軟に開発できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE(dual-model)-Bee-p-2406.html)

##   特徴
---
- BTバージョン：Bluetooth仕様 V4.0 &amp; BLE

- UART送受信最大バイト数：512バイト

- 他のデバイスからモジュールへ（SPPモード）：1パケットあたり90バイト

- 他のデバイスからモジュールへ（BLEモード）：1パケットあたり20バイト

- 2つのデータ伝送モード：バランスモードと高速モード

- 動作周波数：2.4GHz ISMバンド

- 変調方式：GFSK（ガウシアン周波数偏移変調）

- RF出力：-23dbm、-6dbm、0dbm、6dbm

- 速度：非同期：3Kバイト

- 同期：3Kバイト

- セキュリティ：認証と暗号化

- サービス：スレーブSPP、ペリフェラルBLE、UUID FFE0、FFE1

- 電源：+3.3VDC 50mA

- 長距離通信：SPP 30メートル、BLE 60メートル

- 消費電力：SPP 13.5mA、BLE 9.5mA

- 動作温度：-5〜+65℃

##   仕様
---
![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/BLE-dual-Bee_v1.0.png)

- **U1**：U1はワイヤレスモジュールです。自動電源オンリセット回路を内蔵しています。

- **D3**：LEDは2つの動作モードを表示します：
スリープ時はゆっくり点滅、接続状態では連続点灯します。

- **JP1&amp;JP3**：標準Beeコネクタです。

##   注意事項
---
このモジュールの供給電圧は2.5V〜3.7Vです。これより高い電圧はデバイスに永久的な損傷を与える可能性があります。BLE伝送速度はSPP伝送よりも遅いため、設計ではBLEデュアルモード製品計画の速度に従って低い方を選択しました。

##   ハードウェアインストール
---
###   Uart BeeでBluetoothをPCに接続

<!-- Bluetoothは標準のXBeeソケットを提供します。ここでは[UartSBee V5](/ja/UartSBee_v5)を使用してBluetoothとPCを接続し、スライダーで供給電圧を3.3Vに選択していることを確認します。 -->

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPC.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToPCSet.jpg)
|---|---|

###   BluetoothをArduinoに接続

<!-- ここでは[XBee Shield](/ja/XBee_Shield_V2.0)をBluetoothと[Seeeduino Lotus](/ja/Seeeduino_Lotus)の間のブリッジとして使用します。 -->

SeeedのハードウェアUARTはPCとのデバッグに使用されているため、D2とD3を選択してソフトウェアUARTを模擬してBluetoothと通信します。下の図のジャンパー設定を参照してください。

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduino.jpg)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/Editing_BLE-dual-Bee_v1.0_ConnectToArduinoSet.jpg)
|---|---|

##   ソフトウェア説明
---
###   規則

*   EDRモードでは、スレーブのみ設定可能ですが、BLEモードではマスターまたはスレーブのいずれかを設定できます。
*   工場出荷時のデフォルト設定：

        *   EDR名：HMSoft、スレーブ役割、PinCode 1234
    *   BLE名：HMSoft、スレーブ役割、PinCode 000000
    *   ボーレート：115200、N、8、1

*   ATコマンド形式：

        *   大文字のATコマンド形式。文字列形式で、他の記号は含みません（例：\rや\n）。
    *   不正なコマンドに対しては応答がありません。

###   ATコマンド

**1. テストコマンド**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT</td>
<td width="300">OK/ER/Disconnect link</td>
<td width="300">なし</td>
</tr>
</table>

モジュールがリモートデバイスに接続されていない場合、「OK」を受信します。

モジュールにエラーがある場合、「ER」を受信します。

モジュールが接続されている場合、モジュールはリモートデバイスから切断され、「AT + NOTI」が1に設定されている場合、情報文字列を受信します。

**2. モジュールEDRアドレスの問い合わせ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+ADDE?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">なし</td>
</tr>
</table>

**3. モジュールBLEアドレスの問い合わせ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+ADDB?</td>
<td width="300">OK+ Get: MAC</td>
<td width="300">なし</td>
</tr>
</table>

**4. 認証モードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+AUTH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (デフォルト: 0)<br/>0 – 認証なし<br/>1 – 認証必須</td>
</tr>
<tr>
<td width="300">S: AT+AUTH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+AUTH0：安全でない接続を許可します。

AT+AUTH1：すべての接続に認証が必要です。

**5. AからBモードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+ATOB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (デフォルト: 0)<br/>0 – ATOBを開かない<br/>1 – ATOBモードを開く</td>
</tr>
<tr>
<td width="300">S: AT+ATOB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

このコマンドはAT+MODE0コマンドと併用する必要があります。Aデバイス（SPPモード）がモジュールに接続し、Bデバイス（BLEモード）もモジュールに接続されている場合、Aデバイスからモジュールに送信されたデータ文字列はBデバイスに送信されます。Bデバイスからモジュールに送信されたデータ文字列もAデバイスに送信されます。

**6. ボーレートの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+BAUD?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 1~7, (デフォルト: 6).<br/>1 - 4800<br/>2 – 9600<br/>3 – 19200<br/>4 – 38400<br/>5 – 57600<br/>6 – 115200<br/>7 - 230400</td>
</tr>
<tr>
<td width="300">S: AT+BAUD[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**7. ボンド情報のクリア**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+BONDE</td>
<td width="300">OK+BONDE</td>
<td width="300">EDRボンド情報をクリア</td>
</tr>
<tr>
<td width="300">AT+BONDB</td>
<td width="300">OK+BONDB</td>
<td width="300">BLEボンド情報をクリア</td>
</tr>
</table>

BLEモードはまだサポートされていません。

**8. 最後に接続されたEDRデバイスアドレスのクリア**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+CLEAE</td>
<td width="300">OK+CLEAE</td>
<td width="300">なし</td>
</tr>
</table>

**9. 最後に接続されたBLEデバイスアドレスのクリア**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+CLEAB</td>
<td width="300">OK+CLEAB</td>
<td width="300">なし</td>
</tr>
</table>

**10. モジュールDUAL動作モードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+DUAL?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (デフォルト: 0)<br/>0 – デュアル接続を許可<br/>1 – 1つの接続のみ許可</td>
</tr>
<tr>
<td width="300">S: AT+DUAL[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

AT+DUAL0：同時に2つの接続を許可（SPPとBLE）。

AT+DUAL1：同時に1つの接続のみ許可（SPPまたはBLE）

**11. ハードウェアフロー制御スイッチの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+FIOW?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,(デフォルト: 0)<br/>0: ハードウェアフロー制御オフ<br/>1: ハードウェアフロー制御オン</td>
</tr>
<tr>
<td width="300">AT+FIOW[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**12. モジュールデータ伝送速度モードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+HIGH?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,(デフォルト: 0)<br/>0: バランスモード<br/>1: 高速モード</td>
</tr>
<tr>
<td width="300">AT+HIGH[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

バランスモードでは、SPPとBLEを安定した速度でバランスを取ります。

高速モードでは、速度を制御しないため、SPPモードは高速になります。

高速モードでは、モジュールはRESETBピン機能を失いますが、「AT+RESET」コマンドを使用してモジュールをリセットできます。

**13. システムヘルプ情報**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+HELP?</td>
<td width="300">ヘルプ情報</td>
<td width="300">なし</td>
</tr>
</table>

**14. モジュール読み込み通知の問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+INIT?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1,?, (デフォルト: 0)<br/>0: 読み込み通知オフ<br/>1: 読み込み通知オン</td>
</tr>
<tr>
<td width="300">AT+INIT[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

「AT+INIT1」が設定されている場合、モジュール読み込み後、モジュールはUARTを通じて「OK+INIT」文字列を出力します。

**15. モジュール動作モードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+MODE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (デフォルト: 0)<br/>0 – データ伝送<br/>1 – リモート制御</td>
</tr>
<tr>
<td width="300">S: AT+MODE[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

AT+MODE0：接続確立時のみデータを転送。

AT+MODE1：データ転送とATコマンドへの応答。

**16. 通知情報の問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+NOTI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (デフォルト: 0)<br/>0: 通知しない<br/>1: 通知する</td>
</tr>
<tr>
<td width="300">S: AT+NOTI[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

AT+NOTI1後、モジュール状態が変更されたときに、モジュールはUARTを通じて接続または切断文字列を送信します：

OK+CONE ======== EDR接続

OK+LSTE ========= EDR切断

OK+CONB========= BLE接続

OK+LSTB ========= BLE切断

OK+LSTA ========= 例外切断、モジュールは500ms後にリセットされます。

**17. 通知モードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+NOTP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1; デフォルト: 0<br/>0: アドレスなし<br/>1: アドレスあり</td>
</tr>
<tr>
<td width="300">Q: AT+NOTP[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

このコマンドは「AT+NOTI1」と併用する必要があります。このスイッチが開いている場合、モジュールが接続から切断されたときに、プロンプト文字列にリモートアドレスが含まれます。

**18. モジュールEDR名の問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+NAME?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: モジュールEDR名、<br/>最大長は12。<br/>デフォルト: HMSoft</td>
</tr>
<tr>
<td width="300">Q: AT+NAME[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**19. モジュールBLE名の問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+NAMB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: モジュールBLE名、<br/>最大長は12。<br/>デフォルト: HMSoft</td>
</tr>
<tr>
<td width="300">S: AT+NAMB[P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**20. PIO1出力状態の問い合わせ/設定（システムLED）**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+PIO1?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1<br/>0: 未接続時500msハイ500msロー出力、接続時ハイ出力。<br/>1: 未接続時ロー出力、接続時ハイ出力。<br/>デフォルト: 0</td>
</tr>
<tr>
<td width="300">S: AT+ PIO1 [P1]</td>
<td width="300">OK+ Set:[ P1]</td>
</tr>
</table>

**21. PIO出力状態の問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+PIO[P1]?</td>
<td width="300">OK+ Get:[P1][P2]</td>
<td rowspan="2" width="300">P1: 2~B (HM-12)<br/>P2: 2~3 (HM-13)<br/>0: ロー出力<br/>1: ハイ出力<br/>?: 問い合わせ</td>
</tr>
<tr>
<td width="300">S: AT+ PIO[P1][P2]</td>
<td width="300">OK+ Set:[P1][P2]</td>
</tr>
</table>

**22. EDR PINコードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+PINE?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: モジュールEDRコード<br/>最大長: 6<br/>デフォルト: 1234</td>
</tr>
<tr>
<td width="300">S: AT+PINE[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**23. BLE PINコードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+PINB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: モジュールBLEコード<br/>000000~999999<br/>デフォルト: 000000</td>
</tr>
<tr>
<td width="300">S: AT+PINB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**24. UARTパリティビットの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+PARI?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, 2, (デフォルト: 0)<br/>0: パリティなし<br/>1: 偶数パリティ<br/>2: 奇数パリティ</td>
</tr>
<tr>
<td width="300">S: AT+PARI[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**25. すべての設定値を工場出荷時設定に復元**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+RENEW</td>
<td width="300">OK+RENEW</td>
<td width="300">なし</td>
</tr>
</table>

**26. モジュール再起動**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+RESET</td>
<td width="300">OK+RESET</td>
<td width="300">なし</td>
</tr>
</table>

**27. BLE RSSI値の問い合わせ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+RSSB?</td>
<td width="300">OK+RSSB: [P1]</td>
<td width="300">P1: RSSI値<br/>9999: 接続なし<br/>9998: 後で試行<br/>9997: 読み取りエラー<br/>Xxxx: RSSI値</td>
</tr>
</table>

このコマンドは「AT+MODE1」設定後に使用する必要があります。
このコマンドはリモートBluetoothデバイスのみが使用します。

**28. EDR RSSI値の問い合わせ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+RSSE?</td>
<td width="300">OK+RSSE: [P1]</td>
<td width="300">P1: RSSI値<br/>9999: 接続なし<br/>9998: 後で試行<br/>9997: 読み取りエラー<br/>Xxxx: RSSI値</td>
</tr>
</table>

**29. 最後に接続されたEDRデバイスアドレスの問い合わせ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+RADE?</td>
<td width="300">OK+Get:MACアドレス</td>
<td width="300">なし</td>
</tr>
</table>

**30. 最後に接続されたBLEデバイスアドレスの問い合わせ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+RADB?</td>
<td width="300">OK+Get:MACアドレス</td>
<td width="300">なし</td>
</tr>
</table>

**31. マスターとスレーブ役割の問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+ROLB?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1 (デフォルト: 0)<br/>0: ペリフェラル<br/>1: セントラル</td>
</tr>
<tr>
<td width="300">AT+ROLB[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

このコマンドはモジュールの次回電源オンまたはリセット後に有効になります。

**32. EDR動作モードの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+SCAN?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (デフォルト: 0)<br/>0: 検出可能と接続可能<br/>1: 接続可能のみ</td>
</tr>
<tr>
<td width="300">S: AT+SCAN[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**33. UARTストップビットの問い合わせ/設定**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">Q: AT+STOP?</td>
<td width="300">OK+ Get:[P1]</td>
<td rowspan="2" width="300">P1: 0, 1, (デフォルト: 0)<br/>0: 1ストップビット<br/>1: 2ストップビット</td>
</tr>
<tr>
<td width="300">S: AT+STOP[P1]</td>
<td width="300">OK+ Set:[P1]</td>
</tr>
</table>

**34. ソフトウェアバージョンの問い合わせ**

<table>
<tr>
<th>送信</th>
<th>受信</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="300">AT+VERR?<br/>AT+VERS?</td>
<td width="300">バージョン情報</td>
<td width="300">なし</td>
</tr>
</table>

##   プログラミング
---
###   WindowsでシリアルによるBluetoothモジュールの設定

このセクションでは、PCでBluetoothを設定する方法を示し、いくつかの基本的な設定方法を学ぶことができます。
ハードウェア接続の設定については「ハードウェアインストール」セクションを参照してください。モジュール上の青いLEDが点滅していることで、接続が確立されていないことがわかります。

シリアルターミナルを開き、ボーレート：115200、データビット：8、ストップビット：1、フロー制御なしに設定します。シリアルターミナルでBluetoothに「AT」を送信すると、すべてがうまくいけば「OK」が返されます。Bluetoothは接続が確立されていない場合のみATコマンドに応答し、そうでなければすべてのコマンドは文字列として見なされ送信されます。LED表示で状態を区別できます。

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-AT.png)

次に、いくつかの有用な設定を送信できます。以下はコマンドと応答のサンプルです。

1. シリアル接続のテスト、「AT」を送信、「OK」が返されます。

2. 工場出荷時設定の復元、「AT+RENEW」を送信、「OK+RENEW」が返されます。

3. シリアルポートのボーレートリセット、「AT+BAUD2」を送信、「OK+Set:2」が返されます。

4. 認証の有効化、「AT+AUTH1」を送信、「OK+Set:1」が返されます。

5. Bluetoothのリセット、「AT+RESET」を送信、「OK+RESET」が返されます。

6. ファームウェアバージョンの問い合わせ、「AT+VERS?」を送信、「OK+Get:HMSoftV217」が返されます。

7. EDRのMACの問い合わせ、「AT+ADDE?」を送信、「OK+Get:000E0E002074」が返されます。

8. BLEのMACの問い合わせ、「AT+ADDB?」を送信、「OK+Get:000E0B002074」が返されます。

9. EDRの名前設定、「AT+NAMEHM-13-EDR」を送信、「OK+Set:HM-13-EDR」が返されます。

10. BLEの名前設定、「AT+NAMEHM-13-BLE」を送信、「OK+Set:HM-13-BLE」が返されます。

11. EDRのパスワード設定、「AT+PINE123451」を送信、「OK+Set:123451」が返されます。

12. BLEのパスワード設定、「AT+PINB123451」を送信、「OK+Set:123451」が返されます。

13. 検出可能と接続可能の有効化、「AT+SCAN0」を送信、「OK+Set:0」が返されます。

14. 接続の通知情報有効化、「AT+NOTI1」を送信、「OK+Set:1」が返されます。

15. 通知情報にアドレスを含める、「AT+NOTP1」を送信、「OK+Set:1」が返されます。

16. ユーザーキーの有効化、「AT+PIO01」を送信、「OK+Set:1」が返されます。

17. セントラルモードに設定、「AT+ROLB1」を送信、「AT+ROLB1」が返されます。

またはペリフェラルモードに設定、「AT+ROLB0」を送信、「AT+ROLB0」が返されます。

PCに接続された2つのBluetoothを使用し、一方をセントラル、もう一方をペリフェラルに設定します。数秒後、互いを見つけてLEDの点滅が止まり、接続されます！

###   iPhoneとの通信

この種類のBluetoothモジュールには2つのプロトコルがあります：Bluetooth EDR（Enhanced Data Rate）とBluetooth Low Energy。これらのプロトコルのいずれかを持つ任意のデバイスと通信できます。OS 4.3以上のAndroid携帯電話やiPhone4以降はBLE機能を持っています。iPhoneを使用してBluetoothとやり取りする方法を実演します。

Bluetoothをペリフェラルロールとして設定し電源を入れます。Apple StoreでLightBlueを検索してインストールします。アプリを起動すると、先ほど名前を変更した「HM-13-BLE」が見つかります。タッチして接続し、「Properties」をタッチして制御します。右上の「Hex」キーはデータ形式を変更するためのもので、Stringの方が見やすいでしょう。「Listen for notifications」をヒットしてデータ受信を有効にします。次に、BLEを通じてPCにデータを送信できます。「Write new value」をヒットして単語を書きます。PCもシリアルターミナルでiPhoneにデータを転送できます。

|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0108.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0109.PNG)|
|---|---|
|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0111.PNG)|![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-IMG_0114.PNG)|

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-DialogWithIOS.png)

###   2つのArduino間のデータ伝送

コードの準備はできていますか？練習後に何かをする時が来ました。BluetoothのペアとArduinoまたは他のプラットフォームを準備してそれらを制御します。ここでは2つのArduino Unoを使用します。
「ハードウェアインストール」セクションで述べたように接続を設定します。

セントラルとペリフェラルのプログラムは同じコードを使用し、唯一の違いはプログラムの最初のマクロ定義です。Bluetoothをセントラルロールに割り当てるには、テキストを「#define MASTER 1」に変更するだけです。ペリフェラルロールが割り当てられる場合は「#define MASTER 1」です。

初期化プログラムフローについては、以下のフローチャートを参照してください。まず、Bluetoothの事前設定ボーレートを区別する必要があります。その後、工場出荷時設定の復元コマンドを送信し、ソフトウェアシリアルが高いボーレートでうまく動作しないため、ボーレートを115200から9600に変更します。次に、他のパラメータがBluetoothに設定され、最後にリセットコマンドが実行されます。

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Init-flowchat.png)

初期化後、セントラルとペリフェラルは異なることを行います。セントラルは定期的にペリフェラルにメッセージを送信し、ペリフェラルから受信したものを印刷しますが、ペリフェラルはセントラルにのみ応答します。

<!-- [ここ](https://github.com/Seeed-Studio/HM-13_SW)をクリックしてテストコードをダウンロードし、Arduino IDEでHM-13_SW.inoを開き、コンパイルしてArduino Unoにダウンロードします。最初のマクロを変更してBluetoothを異なるロールに設定することを忘れないでください。Arduinoの開始方法について問題がある場合は、[ここ](/ja/Getting_Started_with_Seeeduino)をクリックしてヘルプを参照してください。 -->

プログラムをダウンロード後、2つのシリアルターミナルウィンドウを開くと、BluetoothのLEDが点滅し、数秒後に点滅が止まって点灯し続けます。これは互いに接続されたことを示しています。プログラムが書かれているとおり、セントラルは継続的にペリフェラルにメッセージを送信し、毎回フィードバックを受け取ります。

![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Master.png)
![](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/img/HM-13-Debug_Output_Slave.png)

## 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

##   リソース
---
*   [HM-13 Bluetoothデータシート](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/Bluetooth_HM-13_en.pdf)

*   [Arduinoコード](https://github.com/Seeed-Studio/HM-13_SW)

*   [Eagle_BLE(dual)_Bee_V1.0_sch_pcb](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-Bee_V1.0_sch_pcb.zip)

*   [PDF_BLE(dual)_bee_v1.0](https://files.seeedstudio.com/wiki/BLE_dual_Bee_v1.0/res/BLE-dual-bee_v1.0.pdf)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！私たちの製品での体験を可能な限りスムーズにするために、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>