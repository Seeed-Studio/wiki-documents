---
title: Grove BLE v1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-BLE_v1/
slug: /ja/Grove-BLE_v1
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_front.png)![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_Back.png)

Grove - BLE v1 (Grove - Bluetooth Low Energy v1) は、TI CC2540 チップをベースにした低消費電力 Bluetooth モジュール **HM-11** を使用しており、AT コマンドをサポートしています。Grove 製品として、Base Shield を介して Arduino ボードと簡単に接続できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-BLE-p-1929.html)

パラメータ
----------

| 仕様                 | 名称                                                             |
|---------------------|------------------------------------------------------------------|
| BT バージョン        | Bluetooth Specification V4.0 BLE                                 |
| 動作周波数           | 2.4GHz ISM バンド                                                |
| 変調方式             | GFSK (Gaussian Frequency Shift Keying)                           |
| RF 出力             | -23dbm, -6dbm, 0dbm, 6dbm, AT コマンド AT+POWE で変更可能         |
| 速度                 | 非同期: 6K バイト, 同期: 6K バイト                               |
| 感度                 | ≤-84dBm at 0.1% BER                                              |
| セキュリティ         | 認証と暗号化                                                     |
| サービス             | 中央 & 周辺 UUID FFE0, FFE1                                      |
| 電源供給             | 3.3v - 5v                                                        |
| 動作温度             | –5 ~ +65 度                                                      |
| サイズ               | 40cm x 20cm                                                      |
| 動作電流             | &lt; 10 mA                                                       |
| ソーシング電流       | &lt; 20 mA                                                       |
| スリープ電流         | &lt; 1 mA                                                        |

:::note
HM-11 の電源供給は 3.3v ですが、Grove - BLE は 3.3V から 5V です。
:::

:::tip
Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記の対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

### ピン配置

Grove コネクタには 4 本のワイヤがあります: GND, VCC, RX, TX。

### 設計の特徴

TD6810 チップを電圧レギュレータとして使用しているため、電源供給範囲は 3.3v から 5v です。また、データ伝送の正確性を確保するレベルシフト回路があります。

### AT コマンド

**1）モジュールアドレスのクエリ**

送信： AT+ADDR?

受信：OK+LADD:address

**2）ボーレートのクエリ**

送信：AT+BAUD?

受信：OK+Get:[para1]

範囲： 0~8; 0--9600，1--19200，2--38400，3--57600，4--115200，5--4800，6--2400，7--1200，8--230400

デフォルト: 0--9600.

**ボーレートの設定**

送信：AT+BAUD[para1]

受信：OK+Set:[para1]

例：送信 ：AT+BAUD1 ，受信：OK+Set:1. ボーレートが 19200 に設定されました。

:::note
値を 7 に設定した場合、次回の電源オン後、PIO0 が押されるまでモジュールは AT コマンドをサポートしません。その後、ボーレートは 9600 に変更されます。
:::

**3）アドレスへの接続を試みる**

送信：AT+CON[para1]

受信：OK+CONN[para2]

範囲 ：A,E,F

例：MAC アドレスが 00:17:EA:09:09:09 のデバイスに接続を試みる

送信: AT+CON0017EA090909

返信を受け取る可能性があります: OK+CONNA --> リクエストを受け入れ、接続中; OK+CONNE --> 接続エラー; OK+CONN --> 接続済み（AT+NOTI1 が設定されている場合）; OK+CONNF --> 接続失敗（10 秒後）

:::note
中央ロールのみ使用されます。リモートデバイスがすでに他のデバイスに接続されているか、シャットダウンしている場合、約 10 秒後に「OK+CONNF」が受信されます。
:::

**4）最後に接続したデバイスアドレスをクリア**

送信：AT+CLEAR

受信：OK+CLEAR

**5）モジュール動作モードのクエリ**

送信：AT+MODE?

受信：OK+Get:[para]

範囲： 0~2;


0--送信モード、1--PIO収集モード + モード0、2--リモートコントロールモード + モード0。

デフォルト: 0

**モジュール動作モードの設定**

送信：AT+MODE[]

受信：OK+Set:[para]

**6）モジュール名の問い合わせ**

送信：AT+NAME?

受信：OK+NAME[para1]

**モジュール名の設定**

送信：AT+NAME[para1]

受信：OK+Set:[para1]

例：送信: AT+NAMESeeed，受信 : OK+Set:Seeed

:::note
名前は次回の電源オン後に変更されます。
:::

**7）ピンコードの問い合わせ**

送信：AT+PASS?

受信：OK+PASS:[para1]

範囲 : 000000~999999。

デフォルト : 000000。

**ピンコードの設定**

送信: AT+PASS[para1]

受信：OK+Set:[para1]

**8）すべての設定値を工場出荷時の設定に戻す**

送信：AT+RENEW

受信：OK+RENEW

**9）モジュールの再起動**

送信：AT+RESET

受信：OK+RESET

**10）マスターとスレーブの役割を問い合わせ**

送信：AT+ROLE[para1]

受信：OK+Set:[para1]

範囲 : 0~1;

0--Peripheral : 1--Central : デフォルト: 0。

その他のATコマンドについては、BLEモジュールのデータシートを参照してください。

SoftwareSerial通信
----------------------------

![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_connection1.png)

Grove - BLEはマスターまたはスレーブとして使用できます。異なるデモを通じて使用できます。**以下のSoftwareSerialプログラムを使用する場合は、前の画像の接続方法を参照してください。TX-->D2、RX-->D3。**

Arduino IDEを開き、以下のプログラムをコピーしてArduino/Seeeduinoボードにアップロードします。その後、2つのBLEモジュールが互いに通信できるようになります。

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
        if(BLE.available()){//リモートBLEからデータが送信されているか確認
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//ローカルシリアルターミナルからデータが送信されているか確認、ここに他のアプリケーションを追加できます
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
        if(BLE.available()){//リモートBLEからデータが送信されているか確認
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//ローカルシリアルターミナルからデータが送信されているか確認、ここに他のアプリケーションを追加できます
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

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Android用BLEアプリ](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/HMBLEComAssistant.rar)
- [BLEモジュールのデータシート](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Bluetooth4_en.pdf)
- [回路図](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_BLE_v1 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>