---
description: BLE Bee
title: BLE Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BLE_Bee
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee.jpg)

BLE Beeは、HM-11モジュールをベースにしたBluetooth Smart対応のXBEEフォームファクターモジュールです。BLE Beeは、通常XBEEモジュールが使用されるハードウェア構成で使用できます。BLE Beeを使用することで、XBEEソケット対応の組み込みシステムがデスクトップコンピュータ、スマートフォン、タブレットコンピュータ、さらには他の組み込みシステムとBluetooth Smart（別名Bluetooth Low Energy、BLE）を介して通信できます。

## 特徴 ##

- XBEE形状に対応

- Bluetoothプロトコル: Bluetooth Specification V4.0 BLE

- 動作周波数: 2.4 GHz ISMバンド

- インターフェース方式: シリアルポート

- オープン環境で30メートル以内でモジュール間の通信が可能

- モジュール間で送受信する際のバイト制限なし

- 変調方式: GFSK（ガウス周波数偏移変調）

- 送信出力: - DBM, 23-6 DBM, 0 DBM, 6 DBM（ATコマンドで変更可能）

- TI CC2540チップを使用、256 KBの構成スペースを持ち、ATコマンドをサポート。ユーザーは必要に応じて役割（マスター、スレーブモード）、シリアルポートのボーレート、デバイス名、パスワードなどのマッチングパラメータを変更可能。

- 電源供給: + 3.3 VDC 50 mA

- 動作温度: -5 ~ +65℃

## 仕様 ##

 |仕様|値
 |--|--|
 |マイクロプロセッサ|CC2540|
 |リソース|ATコマンドをサポート。ユーザーは必要に応じて役割（マスター、スレーブモード）、シリアルポートのボーレート、デバイス名、パスワードなどのマッチングパラメータを柔軟に変更可能。|
 |PCBサイズ|24.5mmx30.5mmx0.8mm|
 |外形寸法|24.5mmx30.5mmx9.77mm|
 |電源供給|3.3V|
 |通信プロトコル|Uart(TTL)|
 |IO数|2|
 |キー入力IO|1|
 |LEDインジケータIO|1|
 |接続性|XBee互換ソケット|

## 電気的特性 ##

| 仕様|最小|典型|最大|単位
|--|--|--|--|--|
 |最大入力電圧|-0.3||3.6|V|
 |動作入力電圧|2.0|3.3|3.6|V|
 |送信電流||15|| mA|
 |受信電流||8.5||mA|
 |ディープスリープ電流||600||uA|
 |動作温度|-40||125|°C|

## ピン定義 ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/BLE_BEE11.jpg)

注: 重要な代替機能のみがリストされています。詳細についてはデータシートを参照してください。

## 使用方法 ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee_user.jpg)

- Seeed BLE ShieldをArduino/Seeeduinoに直接接続します。**XBee Shield上のジャンパーの位置に注意してください。**

- ハードまたはソフトシリアルポート: 7つのデジタルピンのうち2つを通信チャネルとして選択できます。ジャンパーをヘッダーに差し込むだけです。

- 信号ランプ: BLEが接続されていない場合はランプが点滅しますが、BLEが接続されるとランプは点灯し続けます。

## ATコマンドと設定 ##

**1） ネイティブMACアドレスを照会**

送信: AT + ADDR?

送信後、成功すると次のように返されます: OK + LADD: MACアドレス（12文字のアドレス）

**2） ボーレートを照会**

送信: AT+BAUD?

送信後、成功すると次のように返されます: OK + Get: [para1]

para1の範囲: 0 ~ 8。対応するパラメータ: 0は9600、1は19200、2は38400、3は57600、4は115200、5は4800、6は2400、7は1200を表します。デフォルトのボーレートは9600です。

**3） ボーレートを設定**

送信: AT+BAUD[para1]

送信後、成功すると次のように返されます: OK+Set:[para1]

例: 送信: AT + BAUD1、返される値: OK + Set: 2。ボーレートが19200に設定されます。

注: 1200に切り替えた後、モジュールはATコマンドの設定をサポートしなくなります。スタンバイ中にPIO0を押すと、モジュールは工場出荷時の設定に戻ります。このボーレートの使用は推奨されません。ボーレートを設定した後、モジュールの電源を入れ直す必要があります。新しい設定が有効になります。

**4） 指定されたBluetoothアドレスに接続するデバイスから**

送信: AT+CON[para1]

送信後、成功すると次のように返されます: OK+CONN[para2]

para2の範囲: A, E, F

例: Bluetoothアドレスが0017EA0943AEの場合、AT + CON0017EA0943AEを送信すると、モジュールは次のように返します: OK + CONNA、OK + CONNF、OK + CONNEのいずれか。

**5） デバイスのマッチング情報を削除**

送信: AT + CLEAR

送信後、成功すると次のように返されます: OK + CLEAR

接続されたデバイスのアドレスコード情報をクリアします。

**6） モジュールの動作モードを照会**

送信: AT + MODE?

送信後、成功すると次のように返されます: OK + Get: [para]

paraの範囲: 0 ~ 2。0はパススルーモード、1はPIO取得+リモート制御+パススルー、2はパススルー+リモート制御モードを表します。デフォルトは0です。

**7） モジュールの動作モードを設定**

送信: AT + MODE []

送信後、成功すると次のように返されます: OK + Set: [para]

**8） デバイス名を照会**

送信: AT + NAME?

送信後、成功すると次のように返されます: OK + NAME [para1]

**9） デバイス名を設定**

送信: AT + NAME [para1]

送信後、成功すると次のように返されます: OK + Set: [para1]

例: デバイス名をSeeedに設定する場合、AT + NAMESeeedを送信すると、OK + Set: Seeedが返されます。この時点で、Bluetoothモジュールの名前がSeeedに変更されます。

注: コマンド実行後、電源を入れ直して設定を有効にする必要があります。

**10） マッチングパスワードを照会**

送信: AT + PASS?

送信後、成功すると次のように返されます: OK + PASS: [para1]

para1の範囲は000000 ~ 999999で、デフォルトは000000です。

**11） ペアリングパスワードを設定**

送信: AT + PASS [para1]

送信後、成功すると次のように返されます: OK + Set: [para1]

**12） 工場出荷時設定に戻す**

送信: AT + RENEW

送信後、成功すると次のように返されます: OK + RENEW

モジュールを工場出荷時のデフォルト設定に戻します。モジュール設定がリセットされ、工場出荷時の状態に戻ります。モジュールは500msの遅延後に再起動します。必要がない場合は注意してください。

**13） モジュールをリセット**

送信: AT + RESET

送信後、成功すると次のように返されます: OK + RESET

コマンド実行後、モジュールは500msの遅延後に再起動します。

**14） マスター・スレーブモードを設定**

送信: AT + ROLE [para1]

送信後、成功すると次のように返されます: OK + Set: [para1]

BLEモジュールのATコマンドに関する詳細情報については、データシートをご参照ください。リソーススペースからダウンロードできます。

##   SoftwareSerial通信  ##

BLE Beeはマスターまたはスレーブとして動作することができます。異なるデモを通じて使用することが可能です。**以下のSoftwareSerialプログラムを使用する場合は、前の図に示された接続方法を参照してください。BLE_TX-->D2、BLE_RX-->D3。**

Arduino IDEを開き、以下のプログラムをコピーしてArduino/Seeeduinoボードにアップロードしてください。その後、2つのBLEシールドが互いに通信できるようになります。

**デモ : BLEスレーブ**

```

#include <SoftwareSerial.h>   //ソフトウェアシリアルポート
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
  Serial.begin(9600);
  pinMode(RxD, INPUT);
  pinMode(TxD, OUTPUT);
  setupBleConnection();

}

void loop()
{
  char recvChar;
  while(1){
    if(BLE.available()){//リモートBLEシールドからデータが送信されているか確認
      recvChar = BLE.read();
      Serial.print(recvChar);
    }
    if(Serial.available()){//ローカルシリアルターミナルからデータが送信されているか確認。ここに他のアプリケーションを追加可能
      recvChar  = Serial.read();
      BLE.print(recvChar);
    }
  }
}

void setupBleConnection()
{
  BLE.begin(9600); //BLEのボーレートをデフォルトの9600に設定
  BLE.print("AT+CLEAR"); //以前の設定をすべてクリア
  BLE.print("AT+ROLE0"); //Bluetooth名をスレーブとして設定
  BLE.print("AT+SAVE1");  //接続情報を保存しない
}

```

**デモ : BLEマスター**

```

#include <SoftwareSerial.h>   //ソフトウェアシリアルポート
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
  Serial.begin(9600);
  pinMode(RxD, INPUT);
  pinMode(TxD, OUTPUT);
  setupBleConnection();

}

void loop()
{
  char recvChar;
  while(1){
    if(BLE.available()){//リモートBLEシールドからデータが送信されているか確認
      recvChar = BLE.read();
      Serial.print(recvChar);
    }
    if(Serial.available()){//ローカルシリアルターミナルからデータが送信されているか確認。ここに他のアプリケーションを追加可能
      recvChar  = Serial.read();
      BLE.print(recvChar);
    }
  }
}

void setupBleConnection()
{
  BLE.begin(9600); //BLEのボーレートをデフォルトの9600に設定
  BLE.print("AT+CLEAR"); //以前の設定をすべてクリア
  BLE.print("AT+ROLE1"); //Bluetooth名をマスターとして設定
  BLE.print("AT+SAVE1");  //接続情報を保存しない
}

```

###   HardwareSerial通信  ###

さらに、プログラムを使用せずにATコマンドを介してBLEシールドを使用することもできます。**ただし、2つのジャンパーの位置を変更する必要があります。BLE_TX-->D1、BLE_RX-->D0。**

その後、CoolTermなどのシリアルポートツールを開きます。以下は設定例です：ボーレート: 9600（デフォルト）、データビット: 8、パリティ: なし、ストップビット: 1。

まず、BLEシールドに「AT」コマンドを送信してテストを行います。「OK」が返ってきた場合、次のステップを実行できます。**返ってこない場合は、Arduino/Seeeduinoに空のプログラムをアップロードし、前述の操作を通じてシリアルポートツールから応答が得られるか確認してください。**

```

void setup()
{                
}

void loop()
{
}

```

次に、「AT+ROLE0」コマンドをBLEシールドに送信します。「OK+Set:0」が返ってきます。これは、現在BLEシールドがスレーブとして動作する準備が整ったことを意味します。

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Seeed_BLE-3.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース ##

 - **[回路図]**[BLE_Bee_v1.0の回路図](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip)

 - **[PDF]**[BLE Bee v1.0 PCB](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20PCB.pdf)

 - **[PDF]**[BLE Bee v1.0 回路図](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20sch.pdf)

 - **[APK]**[Android用BLEアプリ](https://files.seeedstudio.com/wiki/BLE_Bee/res/HMBLEComAssistant.rar)

- **[データシート]**[BLEモジュールのデータシート](https://files.seeedstudio.com/wiki/BLE_Bee/res/Bluetooth40_en.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>