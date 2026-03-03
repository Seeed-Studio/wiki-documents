---
description: Xadow - BLE 
title: Xadow - BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_BLE
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/813004001xadow_ble.jpg)

Xadow - BLE は、HM-11 モジュールをベースにした Bluetooth Smart 対応の Xadow フォームファクタモジュールです。Xadow - BLE は、通常 Xadow モジュールが使用されるハードウェア構成で使用できます。Xadow - BLE を使用することで、Xadow 対応の組み込みシステムがデスクトップコンピュータ、スマートフォン、タブレットコンピュータ、さらには他の組み込みシステムと Bluetooth Smart（別名 Bluetooth Low Energy、BLE）を介して通信することが可能になります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-p-1727.html)


## 特徴
---
- XBee 形状に互換
- Bluetooth プロトコル: Bluetooth Specification V4.0 BLE
- 動作周波数: 2.4 GHz ISM バンド
- インターフェース方式: シリアルポート
- オープン環境で 30 メートル以内でモジュール間の通信が可能
- モジュール間で送受信する際のバイト制限なし
- 変調方式: GFSK (ガウス周波数偏移変調)
- 送信出力: - DBM, 23-6 DBM, 0 DBM, 6 DBM（AT コマンドで変更可能）
- TI CC2540 チップを使用、256 KB の構成スペースを持ち、AT コマンドをサポート。ユーザーは必要に応じて役割（マスター、スレーブモード）、シリアルポートのボーレート、デバイス名、パスワードなどのマッチングパラメータを変更可能。
- 電源供給: + 3.3 VDC 50 mA
- 動作温度: - 5 ~ + 65 ℃

## 仕様
---

|仕様|	値|
|---|---|
|マイクロプロセッサ|	CC2540|
|リソース|	AT コマンドをサポート。ユーザーは必要に応じて役割（マスター、スレーブモード）、シリアルポートのボーレート、デバイス名、パスワードなどのマッチングパラメータを変更可能。|
|PCB サイズ	|24.5mmx30.5mmx0.8mm|
|外形寸法	|24.5mmx30.5mmx9.77mm|
|電源供給	|3.3V|
|通信プロトコル|	Uart(TTL)|
|IO 数	|2|
|キー入力 IO	|1|
|LED インジケータ IO	|1|
|接続性	|Xadow と互換性のあるソケット|


## 電気的特性
---
|仕様	|最小|	典型	|最大|	単位|
|---|---|---|---|---|
|最大入力電圧|	-0.3	|-|	3.6|	V|
|動作入力電圧|	2.0	|3.3|	3.6|	V|
|送信電流	|-	|15	|-|	mA|
|受信電流	|-|	8.5	|-|	mA|
|ディープスリープ電流	|-	|600	|-	|uA|
|動作温度|	-40	|-|	125|	°C|


## ピン定義
---
![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Xadow_ble_pin.jpg)

:::note
    重要な代替機能のみが記載されています。詳細についてはデータシートを参照してください。
:::
## 使用方法
---
**AT コマンドと設定**

**1）	ネイティブ MAC アドレスを照会する**

送信: AT+ADDR?

送信後、成功すると次のように返されます: OK + LADD: MAC アドレス（アドレスは 12 文字列）

**2）	ボーレートを照会する**

送信: AT+BAUD?

送信後、成功すると次のように返されます: OK + Get: [para1]

para1 の範囲: 0 ~ 8。対応するパラメータ: 0 は 9600 を表し、1, 2, 9600, 38400 を表し、57600, 115200, 5, 4800, 6, 7 はそれぞれ 1200, 2400 を表します。デフォルトのボーレートは 9600 です。

**3）	ボーレートを設定する**

送信: AT+BAUD[para1]

送信後、成功すると次のように返されます: OK + Set:[para1]

例: 送信: AT + BAUD1, 返却: OK + Set: 2。ボーレートが 19200 に設定されます。

:::note
    1200 に切り替えた後、モジュールは AT コマンドの設定をサポートしなくなります。スタンバイ中に PIO0 を押すことで、モジュールは工場出荷時の設定に戻ります。ボーレートの使用は推奨されません。ボーレートを設定した後、モジュールを再起動して新しいパラメータを有効にする必要があります。
:::
**4）	指定された Bluetooth アドレスに接続する（スレーブデバイスから）**

送信: AT+CON[para1]

送信後、成功すると次のように返されます: OK + CONN[para2]

para2 の範囲は: A, E, F

例: Bluetooth アドレスが 0017EA0943AE の場合、AT + CON0017EA0943AE を送信すると、モジュールは次のように返します: OK + CONNA または OK + + CONNF または OK + CONNE。

**5）	デバイスのマッチング情報を削除する**

送信: AT+CLEAR

送信後、成功すると次のように返されます: OK + CLEAR

接続されたデバイスのアドレスコード情報をクリアします。

**6）	モジュールの動作モードを照会する**

送信: AT+MODE?

送信後、成功すると次のように返されます: OK + Get: [para]

para の範囲: 0 ~ 2。0 はパススルーモードを表し、1 は PIO 取得 + リモートコントロール + パススルーを表し、2 はパススルー + リモートコントロールモードを表します。デフォルトは 0 です。

**7）	モジュールの動作モードを設定する**

送信: AT+MODE[para1]

送信後、成功すると次のように返されます: OK + Set: [para]

**8）	デバイス名を照会する**

送信: AT+NAME?

送信後、成功すると次のように返されます: OK + NAME [para1]

**9）	デバイス名を設定する**

送信: AT+NAME[para1]

送信後、成功すると次のように返されます: OK + Set: [para1]

例: デバイス名を Seeed に設定する場合、AT + NAMESeeed を送信すると、OK + Set: Seeed が返されます。この時点で、Bluetooth モジュールの名前が Seeed に変更されます。注意: この指示を実行した後、電源を入れ直して設定パラメータを有効にする必要があります。

**10）	マッチングパスワードを照会する**

送信: AT+PASS?

送信後、成功すると次のように返されます: OK + PASS: [para1]

para1 の範囲は 000000 ~ 999999 で、デフォルトは 000000 です。

**11）	ペアリングパスワードを設定する**

送信: AT+PASS[para1]

送信後、成功すると次のように返されます: OK + Set: [para1]

**12）	工場出荷時の設定に戻す**

送信: AT+RENEW

送信後、成功すると次のように返されます: OK + RENEW

モジュールを工場出荷時のデフォルト設定に戻します。モジュールの設定がリセットされ、工場出荷時の状態に戻ります。モジュールは 500 ms の遅延後に再起動します。必要がない場合は注意してください。

**13）	モジュールをリセットする**

送信: AT+RESET

送信後、成功すると次のように返されます: OK + RESET

この指示を実行した後、モジュールは 500 ms の遅延後に再起動します。

**14）	マスター・スレーブモードを設定する**
送信: AT+ROLE[para1]
送信後、成功すると次のように返されます: OK + Set: [para1]

## HelloWorld
---
:::note
Xadow-BLEをXadow Main Boardに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角部分に接続する必要があります（各Xadowモジュールの4つの角を参照してください）。
:::
**//Xadow BLEをBLEマスターデバイスとして設定する**

```
#define SerialBaud   9600
#define Serial1Baud  9600

void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // マスターとして設定
    Serial1.print("AT+ROLE1");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

**//Xadow BLEをBLEスレーブデバイスとして設定する**

```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // スレーブとして設定
    Serial1.print("AT+ROLE0");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

## Android BLE通信
---
ここでは、Xadow-BLEをAndroidスマートフォンと通信させる方法を説明します（注：Androidのシステムバージョンは4.3以上である必要があります）。
1. Androidアプリを[こちら](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar)からダウンロードし、Androidスマートフォンにインストールします。
2. Xadow BLEをXadow Main Boardに接続し、上記のXadow BLEスレーブデバイスのデモコードをコピーして、コンパイルしてXadow Main Boardにアップロードします。
3. シリアルツール（例：SSCOM32）を開き、Xadow Main Boardのシリアルポートを開きます。
4. 最初のステップでインストールしたBLE Example APKを開きます。以下のような画面が表示されます。

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_start.png)

5. UIの中央にあるスタートボタンをクリックすると、BLEスレーブデバイスのスキャンが開始されます。スキャン結果はダイアログリストに表示されます。

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_scanResult.png)

6. Seeed BLEを選択すると、Xadow BLEへの接続が自動的に試行されます。
7. BLEスレーブデバイスへの接続が成功すると、UUIDがnullであることがわかります。Characteristics UUIDリストから1つを選択する必要があります。ここではUUID:0000ffe1-0000-1000-8000-00805f9b34fbを選択します。

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_UUIDSelected.png)

8. さあ、エキサイティングな瞬間です！テキストボックスにコマンド（データ）を入力し、送信ボタンをクリックすると、指定されたBLEデバイスにメッセージが送信されます。そして、受信テキストボックスにはスレーブデバイスからのメッセージが表示されます。以下のようになります。楽しんでください！
![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_sendData.png)![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_recvData.png)


## 回路図オンラインビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow-BLE_v1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip)
- [Android 用 BLE アプリ](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar)
- [BLE モジュールのデータシート](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Bluetooth4_en.pdf)
- [GitHub 上の BLE Android ソースコード](https://github.com/Seeed-Studio/BLE_Example)
- [4.0 BLE IOS6 ソースコード](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMSoft_ios6.zip)
- [4.0 BLE IOS7 ソースコード](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-HMSoft_ios7.zip)
- [4.0 BLE Android ソースコード](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-BluetoothLeGatt.rar)
- [その他のドキュメント URL](http://www.huamaosoft.com/index_en.asp?page=2&ID=1)

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