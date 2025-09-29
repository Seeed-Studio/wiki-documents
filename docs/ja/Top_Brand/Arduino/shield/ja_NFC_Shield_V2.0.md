---
description: NFC_Shield_V2.0
title: NFC Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/NFC_Shield_V2.0
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<table align="center">
  <tbody>
    <tr>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_front.png" alt="pir" width={200} height="auto" /></p>
        </td>
        <td>
          <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_back.png" alt="pir" width={200} height="auto" /></p>
        </td>
    </tr>
  </tbody>
</table>

NFC（近距離無線通信）は広く使用されている技術です。NFCの主な用途には、ワイヤレスアクセス制御システム（例：鍵のないドアやロック）、モバイルデバイスによる支払い（例：電話アプリケーションを介して支払い情報を受け取る店舗レジ）などがあります。

NFC ShieldはトランシーバーモジュールPN532を搭載しており、13.56MHzでの無線通信を処理します。これにより、このシールドを使用して13.56MHzタグを読み書きしたり、シールドとスマートフォン間でポイントツーポイント（P2P）データ交換を実装することができます。

この新しいバージョンのシールドでは、独立したPCBアンテナエリアを設けており、メイン回路エンクロージャの外部にNFCインターフェースをより簡単に拡張できるようになっています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/NFC-Shield-V2.0-p-1370.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

アプリケーションアイデア
-----------------

NFC Shield V2.0を使用して素晴らしいプロジェクトを作りたい場合、以下のプロジェクトを参考にしてください。

### NFC Shield デモ

***Paper Man: Androidとインタラクションする面白いオブジェクト***

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Seeed-recipe-paper_man.jpg" alt="pir" width={600} height="auto" /></p>

[今すぐ作る！](https://www.seeedstudio.com/recipe/40-paper-man-an-interesting-object-to-interact-with-android.html)

[***NFC Shield V2.0によるさらに素晴らしいプロジェクト***](https://www.seeedstudio.com/recipe/index.php?query=NFC+Shield)

特徴
--------

-   ICSPヘッダーを使用したSPI。これにより、以下のArduino開発ボードでシールドが動作します：Uno、Mega、Leonardo
-   13.56MHzでのワイヤレスNFC通信
-   SPIプロトコル - 4ピンのみを必要とするピン節約インターフェース
-   入力電圧：Arduinoの5Vピンからの5V
-   典型的な電流：100mA
-   最大有効範囲：5cm
-   P2P通信をサポート
-   ISO14443 Type AおよびType Bプロトコルをサポート

ハードウェア概要
-----------------

NFCシールドのピンとその他の端子について以下に説明します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Pn532-nfc-shield-pin-description.png" alt="pir" width={600} height="auto" /></p>

**NFCシールドインターフェース**

-   D10とD9はSPIチップセレクト（CS/SS）に使用されます。デフォルトではD10が接続されていますが、D9を接続するにはSSパッドをD9パッドにハンダ付けし、SSとD10の接続を削る必要があります。
-   D2はシールドの割り込み要求（IRQ）ピン信号を受信するために使用できます。デフォルトでは割り込みは接続されていません。「D2/INT0」と「IRQ」パッドをハンダ付けする必要があります。
-   シールドはArduinoのICSPヘッダーから直接SPIインターフェース（SPI MOSI、MISO、SCKピン）を取得します。これにより、以下のArduinoでシールドが動作します：Uno、Mega、Leonardo。
-   ANT1端子はNFCアンテナ（シールドに付属）が接続される場所です。
-   シールドはArduinoボードからの5Vで動作します。

NFCシールドに付属するアンテナは、ケーブルを介してシールドに接続される独立したPCBモジュールです。このアンテナは情報を受信および送信するためのエリアです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/NFC_Antanna_28x30.5.jpg" alt="pir" width={600} height="auto" /></p>

**NFCアンテナPCB接続**

NFC Shield セットアップ
----------------

### ハードウェアインストール

1.  NFCアンテナをシールドに接続します。
2.  NFCシールドをArduino開発ボードに積み重ね、USBケーブルを使用してボードをPCに接続します。

### ソフトウェアライブラリのインストール

- **ステップ1.**  [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)をダウンロードします。

- **ステップ2.**  [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用の**Seeed Arduino NFC**ライブラリをインストールします。

- **ステップ3.**  「WriteTag」コードを以下のパスで開きます：**File --> Examples --> WriteTag**。

- **ステップ4.**  SPI通信を有効にするために以下のコードを修正します。

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}
```

**Arduinoの利用可能なライブラリメニュー**

NFC Shieldの例/アプリケーション
--------------------------------

### 例：NFC WriteTag

この例では、NFCシールドを使用してNFCタグをスキャンし、その情報/データを表示する方法を示します。

Arduino IDEで以下のコードをコピー、貼り付け、アップロードしてボードに書き込みます。

#### コード

```cpp
#include <NfcAdapter.h>
#include <PN532/PN532/PN532.h>
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif

void setup() {
    SERIAL.begin(9600);
    SERIAL.println("NDEF Writer");
    nfc.begin();
}

void loop() {
    SERIAL.println("\nPlace a formatted Mifare Classic or Ultralight NFC tag on the reader.");
    if (nfc.tagPresent()) {
        NdefMessage message = NdefMessage();
        message.addUriRecord("http://arduino.cc");

        bool success = nfc.write(message);
        if (success) {
            SERIAL.println("Success. Try reading this tag with your phone.");
        } else {
            SERIAL.println("Write failed.");
        }
    }
    delay(5000);
}
```

コードをテストするには：

1. Arduinoのシリアルモニタウィンドウを開きます。
2. ボーレートを115200に設定します。
3. NFCタグをNFCアンテナエリアにかざします。
4. NFCシールドがタグをスキャンし、シリアルモニタウィンドウにNFCタグのUID、タグタイプ、およびメッセージ（利用可能な場合）が表示されるはずです。以下の図を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Nfc-pn532-output-example-1.png" alt="pir" width={600} height="auto" /></p>

<!-- **NFCタグをスキャンした際のシリアル通信ウィンドウ出力例 #1** -->

<!-- ### 例 #2: NFC（キー不要）ドアロック

この例では、NFCタグを鍵として使用してドアやロックを解除する方法を示します。ドア/ロックの仕組みは想像にお任せしますが、ここではNFC部分のコードのみをカバーします。

1. 上記の例 #1: NFCタグスキャンを実行して、NFCタグのUIDを取得します。
2. オプションの手順 - 緑色のLEDをピン3に接続します（以下の図/回路図を参照）。このLEDは、鍵が一致した場合の通知に使用します。
3. オプションの手順 - 赤色のLEDをピン4に接続します（以下の図/回路図を参照）。このLEDは、鍵が一致しなかった場合の通知に使用します。
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm.PNG" alt="pir" width={600} height="auto" /></p>

    **NFCロック回路**
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-2-red-green-led-nfc-alarm-real.png" alt="pir" width={600} height="auto" /></p>

    **NFCロック回路**

4. Arduino IDEで新しいスケッチを作成し、以下のコードをコピーして貼り付け、アップロードします。この際、例 #1で取得したタグのUIDを`myUID`文字列定数に置き換えてください。

#### コード
```cpp
	#if 1 // SPIを使用
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // ハードウェアシリアルを使用

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // ソフトウェアシリアルを使用

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else // I2Cを使用

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    String const myUID = "1B B3 C6 EF"; // このUIDをNFCタグのUIDに置き換えてください
    int const greenLedPin = 3; // 正しい鍵の通知に使用する緑色LED
    int const redLedPin = 4; // 間違った鍵の通知に使用する赤色LED

    void setup(void) {
        Serial.begin(115200); // シリアル通信を開始
        Serial.println("NDEF Reader");
        nfc.begin(); // NFC通信を開始

        // LEDピンを出力として設定
        pinMode(greenLedPin,OUTPUT);
        pinMode(redLedPin,OUTPUT);

        // LEDをオフにする
        digitalWrite(greenLedPin,LOW);
        digitalWrite(redLedPin,LOW);
    }

    void loop(void) {

        Serial.println("Scanning...");
        if (nfc.tagPresent()) // NFCタグがアンテナエリアに存在するか確認
        {
            NfcTag tag = nfc.read(); // NFCタグを読み取る
            String scannedUID = tag.getUidString(); // NFCタグのUIDを取得

            if( myUID.compareTo(scannedUID) == 0) // NFCタグのUIDを正しいUIDと比較（compareToが0を返す場合、一致）
            {
              // 正しいNFCタグが使用された
              Serial.println("Correct Key");
              // 緑色LEDを点滅させ、赤色LEDをオフにする
              digitalWrite(greenLedPin,HIGH);
              digitalWrite(redLedPin,LOW);

              delay(500);
              digitalWrite(greenLedPin,LOW);
              delay(500);
              digitalWrite(greenLedPin,HIGH);
              delay(500);
              digitalWrite(greenLedPin,LOW);
              // ここにロック解除メカニズムをトリガーするコードを追加（例：モーター、トランスデューサー）
            }else{
              // 間違ったNFCタグが使用された
              Serial.println("Incorrect key");
              // 赤色LEDを点滅させ、緑色LEDをオフにする
              digitalWrite(greenLedPin,LOW);
              digitalWrite(redLedPin,HIGH);

              delay(500);
              digitalWrite(redLedPin,LOW);
              delay(500);
              digitalWrite(redLedPin,HIGH);
              delay(500);
              digitalWrite(redLedPin,LOW);
              // ロックを解除しない！間違ったNFCタグが使用された。
              // アラームをトリガーするコードをここに追加（例：ブザー、スピーカー）または他の処理を実行
            }
        }
        delay(2000);
    }
```

コード/アプリケーションをテストするには：

1. Arduinoのシリアルモニタウィンドウを開きます。
2. 正しい鍵のNFCタグをアンテナエリアにかざします。
3. 緑色LEDが点灯し、シリアルウィンドウに「Correct Key」と表示されるはずです。
4. 次に、別のNFCタグをアンテナエリアにかざします。
5. 赤色LEDが点灯し、シリアルウィンドウに「Incorrect Key」と表示されるはずです。
 -->

<!-- ### 例 #3: 割り込みピンの使用方法（例 #2の再訪）

上記の例 #2のコードは必要な動作をしますが、NFCタグ検出を処理するよりエレガントな方法があります。この例では、NFCシールドの割り込みピンを使用して、シールドをポーリング（「タグが存在しますか？」と尋ねる）する代わりに、シールドがタグを読み取れる状態であることをArduinoに通知する方法を示します。なぜこれを行う必要があるのでしょうか？理由は多々ありますが、割り込みは別のトピックです。一つの理由として、シールド回路を継続的にトリガーしないため、プロジェクト/回路のバッテリーを節約できることが挙げられます。

#### ハードウェアの変更

NFCシールドの割り込みピン（IRQ）はArduinoのデジタルピン2（D2）から切断されています。IRQとD2ピンを接続するには、シールド上の「D2/INT0 IRQ」とラベル付けされたパッドをはんだ付けしてください。

#### コード

以下のコードをArduinoボードにアップロードしてください：

コード/アプリケーションをテストするには：


1. 必要に応じて、上記の例 #2 に示されているように LED を接続します。  
2. Arduino のシリアルモニターウィンドウを開きます。  
3. 正しいキーを持つ NFC タグをアンテナエリアにかざします。  
4. 緑色の LED が点灯し、シリアルウィンドウに「Correct Key」と表示されるはずです。  
5. 次に、別の NFC タグをアンテナエリアにかざします。  
6. 赤色の LED が点灯し、シリアルウィンドウに「Incorrect Key」と表示されるはずです。  

以下は、このコードをテストした際のシリアルウィンドウの出力例です。あなたの結果もこれに似たものになるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-3-nfc-pn532-shield-interrupt-example.png" alt="pir" width={600} height="auto" /></p>

**例 3 のシリアル通信ウィンドウ出力。**

<!-- ### 例 #4: タグに NDEF メッセージを書き込む

NFC タグはデータを保存することが可能で、保存できるデータ量は各タグによって異なります。この例では、2 つの文字列/メッセージをタグに保存します。その後、*例 #6: タグから NDEF メッセージを読み取る* のコードを使用してこのメッセージを読み取ることができます。

以下のコードを Arduino 開発ボードにアップロードしてください。

:::note
NFC タグが正しくフォーマットされていない場合（シリアル通信ウィンドウに「Message write failed」と表示されます）、コードを使用してタグをフォーマットできるか確認する必要があります。
:::

#### コード
```cpp
	#if 1 // SPI を使用
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // ハードウェアシリアルを使用

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // ソフトウェアシリアルを使用

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else // I2C を使用

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // シリアル通信を開始
        Serial.println("NDEF Reader");
        nfc.begin(); // NFC 通信を開始
    }

    void loop(void)
    {
      Serial.println("フォーマット済みの Mifare Classic NFC タグをリーダーに置いてください。");
      if(nfc.tagPresent())
      {
        NdefMessage message = NdefMessage();
        message.addUriRecord("Hello, world!");
        message.addUriRecord("How are you today?");

        bool success = nfc.write(message);
        if(success)
        {
          Serial.println("メッセージがタグに正常に書き込まれました。");
        }else{
          Serial.println("メッセージの書き込みに失敗しました。");
        }
      }

      delay(5000);
    }
```

上記のコードをテストするには：

1. Arduino のシリアル通信ウィンドウを開きます。  
2. NFC タグを NFC シールドのアンテナエリアにかざし、成功または失敗メッセージが表示されるのを待ちます（以下の図を参照）。  
3. 成功メッセージが表示されたら、再書き込みを防ぐために NFC タグをアンテナエリアから取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-4-write-ndef-message-to-tag.png" alt="pir" width={600} height="auto" /></p>

**カードに NDEF メッセージを書き込む例のシリアル通信ウィンドウ。**

<!-- ### 例 #5: タグを NDEF としてフォーマットする

新品の NFC タグは最初は NDEF フォーマットされていない場合があります。タグを NDEF としてフォーマットするには、以下のコードを Arduino 開発ボードにアップロードしてください：

#### コード
```cpp
	#if 1 // SPI を使用
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // ハードウェアシリアルを使用

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // ソフトウェアシリアルを使用

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else // I2C を使用

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // シリアル通信を開始
        Serial.println("NDEF Reader");
        nfc.begin(); // NFC 通信を開始
    }

    void loop(void)
    {
        Serial.println("未フォーマットの Mifare Classic タグをリーダーに置いてください。");
        if (nfc.tagPresent()) {

            bool success = nfc.format();
            if (success) {
              Serial.println("成功、タグが NDEF としてフォーマットされました。");
            } else {
              Serial.println("フォーマットに失敗しました。");
            }

        }
        delay(5000);
    }
```

コードをテスト/実行するには：

1. Arduino のシリアル通信ウィンドウを開きます。  
2. フォーマットしたい NFC タグを NFC シールドのアンテナエリアにかざします。  
3. 成功または失敗メッセージが表示されるのを待ちます（以下の図を参照）。  
4. 再フォーマットを防ぐために NFC タグをアンテナエリアから取り外します。

<div class="admonition note">
<p class="admonition-title">注意</p>
タグのフォーマットに失敗した場合は、再試行してください。それでも失敗する場合、タグは NDEF としてフォーマットできない可能性があります。
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-5-format-nfc-tag-as-ndef.png" alt="pir" width={600} height="auto" /></p>

**NFC タグを NDEF にフォーマットする際のシリアル通信ウィンドウ出力。**
 -->
<!-- ### 例 #6: タグから NDEF メッセージを読み取る

これまでの例で示したように、NFC シールドは NFC タグにメッセージを書き込むことができます。この例では、NFC タグから NDEF メッセージを読み取る方法を示します。

#### コード

以下のコードを Arduino 開発ボードにアップロードしてください。

```cpp
	#if 1 // SPI を使用
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi(SPI, 10);
	NfcAdapter nfc = NfcAdapter(pn532spi);
	#elif 0 // ハードウェアシリアルを使用

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // ソフトウェアシリアルを使用

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else // I2C を使用

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

    void setup(void)
    {
        Serial.begin(115200); // シリアル通信を開始
        Serial.println("NDEF Reader");
        nfc.begin(); // NFC 通信を開始
    }

    void loop(void)
    {
      Serial.println("\nNFC タグをスキャンしてください\n");
      if (nfc.tagPresent()) // NFC タグが存在するかスキャン
      {
          NfcTag tag = nfc.read(); // NFC タグを読み取る
          if(tag.hasNdefMessage())
          {
            NdefMessage message = tag.getNdefMessage();
            for(int i=0;i<message.getRecordCount();i++)
            {
              NdefRecord record = message.getRecord(i);
              int payloadLength = record.getPayloadLength();
              byte payload[payloadLength];
              record.getPayload(payload);
              Serial.write(payload,payloadLength);
            }
          }
      }
      delay(500); // 次のスキャンまで 0.5 秒 (500ms) 待機（待機時間を増減可能）
    }
```

コードをテストする手順:

1. Arduinoのシリアル通信ウィンドウを開きます。
2. NDEFメッセージが書き込まれたNFCタグをNFCシールドのアンテナ領域にかざします。
3. タグに書き込まれたNDEFメッセージが以下の図のように表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/img/Example-6-read-ndef-message.png" alt="pir" width={600} height="auto" /></p>

**NDEFメッセージ読み取り時のシリアル通信ウィンドウ出力**
 
<!-- ### 例 #7: チップセレクトピンをD10からD9に変更する方法

#### ハードウェアの変更

1. シールド上の「SS」と「D10」とラベル付けされたパッドの接続を削り取ります。
2. シールド上の「SS」と「D9」のパッドを接続/はんだ付けします。

その後、上記の例と同じコードを使用できますが、PN532インターフェースのピンを10ではなく9に変更してください:

#### コード

    PN532_SPI interface(SPI, 9); // SPI CS端子をデジタルピン9に設定したシールド用のSPIインターフェースを作成
 -->
<!-- ### 例 #8: 1つのArduinoボードで2つのNFCシールドを使用する方法

#### ハードウェアの変更

1. 例#7で説明したハードウェア変更を2つのシールドのうち1つに適用します。
2. 両方のシールドをArduinoボードに積み重ねます。

これで、以下のように各シールドに対して2つの別々のNFCオブジェクトを作成できます:

#### コード
```cpp
	#if 1 // SPIを使用
	#include <SPI.h>
	#include <PN532/PN532_SPI/PN532_SPI.h>
	PN532_SPI pn532spi1(SPI, 10); // SPI CS端子をデジタルピン10に設定したシールド用のSPIインターフェースを作成
	NfcAdapter nfc1 = NfcAdapter(pn532spi1); // シールド1用のNFCアダプターオブジェクトを作成
	PN532_SPI pn532spi2(SPI, 9); // SPI CS端子をデジタルピン9に設定したシールド用のSPIインターフェースを作成
	NfcAdapter nfc2 = NfcAdapter(pn532spi2); // シールド2用のNFCアダプターオブジェクトを作成
	
	#elif 0 // ハードウェアシリアルを使用

	#include <PN532/PN532_HSU/PN532_HSU.h>
	PN532_HSU pn532hsu(Serial1);
	NfcAdapter nfc(pn532hsu);
	#elif 0  // ソフトウェアシリアルを使用

	#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
	#include "SoftwareSerial.h"
	SoftwareSerial SWSerial(2, 3);
	PN532_SWHSU pn532swhsu(SWSerial);
	NfcAdapter nfc(pn532swhsu);
	#else // I2Cを使用

	#include <Wire.h>
	#include <PN532/PN532_I2C/PN532_I2C.h>

	PN532_I2C pn532_i2c(Wire);
	NfcAdapter nfc = NfcAdapter(pn532_i2c);
	#endif

``` 
 -->

## FAQs

**Q1: ケーブルの長さはどれくらいですか？また、より長いものが必要な場合はどれくらいまで可能ですか？**

A1: NFCシールドに付属しているケーブルの長さは12cmです。より長いものが必要な場合は、IPX/U.FLコネクタを使用して15cm以内にしてください。

**Q2: NFC Shield V2.0 (SKU: 113030001)に2つ以上のアンテナを追加することは可能ですか？**

A2: NFC Shield V2はPN532チップをベースにしています。この設計では1つのアンテナのみをサポートしていることに注意してください。



## NFC Shield v2.0 Eagleファイル回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## NFC Shield v2.1 Eagleファイル回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




リソース
---------

- [NFC Shield v2.0 回路図](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_Schematic.pdf)
- [NFC Shield v2.0 Eagleファイル](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_V2.0b_Eagle_files.zip)
- [NFC Shield v2.1 回路図](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1.pdf)
- [NFC Shield v2.1 Eagleファイル](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/NFC_Shield_v2.1_Eagle_File.zip)
- [PN532 データシート](https://files.seeedstudio.com/wiki/NFC_Shield_V2.0/res/PN532.pdf)
- [NFC Shield FAQ](http://support.seeedstudio.com/knowledgebase/articles/462025-nfc-shield-sku-sld01097p)
- [Seeed Arduino NFCライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)
- [PN532ライブラリ](https://github.com/Seeed-Studio/PN532)

## プロジェクト

**Paper Man** NFC技術を通じてAndroidデバイスとコミュニケーションする興味深い方法。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/xiaobo__/paper-man-0a6833/embed" width={350} />


**NFCカードで操作するリモートカー** あなたのコーディネーション能力に挑戦：NFCで操作する自分だけの車を作ろう

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/litliao/nfc-card-controlled-remote-car-af27c9/embed" width={350} />


<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/NFC_Shield_V2.0 から作成されました -->

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>