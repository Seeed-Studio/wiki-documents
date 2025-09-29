---
description: Seeeduino GPRS
title: Seeeduino GPRS
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_GPRS
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_cover.jpg)

Seeeduino GPRSはIoTパネルであり、GPRS無線ネットワークを通じてインターネットに接続することができます。音声通話の発信/受信やSMSメッセージの送信/受信もサポートされています。また、Seeeduino GPRSはFMラジオ機能とBluetooth通信をサポートしています。Seeeduino GPRSはAtmage32U4とSIM800Hを基盤としています。Atmage32U4はマイクロコントローラーであり、Arduinoと互換性があります。SIM800HはQuad-band 850/900/1800/1900MHzをサポートし、低消費電力で音声、SMS、データ情報を送信することができます。さらに、SIM800HはBluetoothやFMラジオなどの追加機能を提供します。省電力技術を採用しており、スリープモードでは消費電流が0.1mAと非常に低く抑えられています。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-GPRS-p-1909.html)

## アプリケーションアイデア

* モノのインターネット (IoT)
* スマートハウス
* ウェアラブルデザイン
* DIY電話
* 産業用途

以下は参考になる面白いプロジェクトです。

|Arduino GPS/GSM Tracker|Arduino Phone 2.0|Arduino GPRS Weather Station|
|----------|----------|---------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_3.jpg)|
|[今すぐ作る](https://www.instructables.com/id/Arduino-GPSGSM-Tracker/)|[今すぐ作る](https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/)|[今すぐ作る](https://www.instructables.com/id/Arduino-GPRS-Weather-Station-Part-1/)|

## 特徴

* 標準Arduino Leonardoと互換性あり
* Quad-Band 850/900/1800/1900MHz
* ヘッドセットジャック
* 便利な外部SIMカードホルダー
* ATコマンドによる制御
* Bluetooth対応
* FMラジオ対応
* 消費電流 < 2A
* Arduino Leonardoブートローダー

## 仕様

**SIM800Hモデル**

|パラメータ|値|
|------------|------------|
|GPRSモデル|SIM800H|
|Quad-Band|850/900/1800/1900MHz|
|GPRSマルチスロットクラス|12/10|
|GPRSモバイルステーションクラス|B|
|標準GSMフェーズ|2/2+|
|FM|76~109MHz|
|Bluetooth|3.0+EDR準拠|
|供給電圧範囲|3.4 ~ 4.4V|

**AVR Arduinoマイクロコントローラー**

|パラメータ|値|
|------------|-------------|
|マイクロコントローラー|ATmega32u4|
|フラッシュメモリ|32KB|
|SRAM|2.5kB|
|EEPROM|1kB|
|クロックスピード|16MHz|
|動作電圧|5V|
|デジタルI/Oピン|20|
|PWMチャンネル|7|
|アナログ入力チャンネル|12|

## ハードウェア概要

以下の画像はSeeeduino GPRSのハードウェア機能の概要を示しています。Seeeduino GPRSのピンアウトと各ピンの代替機能がピンアウト図に示されています。これをクイックリファレンスとして使用できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_hardware2.png)

* **電源スイッチ**  
スライドスイッチを使用して、ボードの論理レベルと電源出力を5Vまたは3.3Vに変更します。現在、多くの新しい優れたセンサーが3.3Vで動作するように開発されています。他のArduinoボードでは、ボードとセンサー間に論理レベルコンバーターを配置する必要がありますが、Seeeduino GPRSボードではスイッチをスライドするだけで済みます！

* **DC入力**  
DC入力を使用すると、Seeeduino GPRSボードを壁のアダプターから電力供給することができ、必要に応じてプロジェクトにより多くの電力を供給できます。例えば、DCモーターやその他の高電力デバイスを使用する場合です。DC入力は9V-12Vで、ピーク電流は2Aです。  
ただし、Seeeduino GPRSには注意すべきハードウェアバグがあります。外部電源入力時に、5Vピンに非常に短い6Vが約2ms間発生します。**これは5Vに接続されたデバイスを破損するリスクがあります。** そのため、システムをDC入力で電源供給しないことをお勧めします。このバグを修正することを検討していますが、すぐには解決しません。

* **SIM800hのブレークアウト**  
このインターフェースを使用してSim800hをデバッグできます。

* **ICSP**  
これはATMEGA32U4-MURのICSP接続であり、Arduino Uno、Due、Mega、Leonardo互換ハードウェア（例：シールド）がこのコネクターを使用する場合に標準のICSP/SPI位置に配置されています。このポートのSPIピン：MISO、SCK、MOSI。ただし、これらのピンはD11~D13に接続されていません。

* **LED PWR2**  
SIM800H電源インジケーター

* **LED STA**  
動作状態インジケーター

* **LED NET**

|状態|SIM800Hの動作|
|------------|-------------|
|オフ|SIM800Hが動作していない|
|64msオン/800msオフ|SIM800Hがネットワークに登録されていない|
|64msオン/3000msオフ|SIM800Hがネットワークに登録されている|
|64msオン/300msオフ|SIM800Hの通信が確立されている|

## ドライバーのインストール

まず以下を行ってください：

* **Micro-USBケーブルを準備する**  
Micro-USBケーブルが必要です。Androidスマートフォンのデータケーブルでも問題ありません。  
もし見つからない場合は、[こちら](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)で購入できます。

* **ボードを接続する**  
USBケーブルを使用してArduinoボードをコンピュータに接続してください。緑色の電源LED（**PWR**とラベル付けされています）が点灯するはずです。

**Windowsの場合**

:::note
このドライバーはWindows XP、Windows Vista、Windows 7、Windows 8/8.1、Windows 10に対応しています。
:::
[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

* ボードを接続し、Windowsがドライバーインストールプロセスを開始するのを待ちます。数秒後、プロセスは失敗します。
* スタートメニューをクリックし、コントロールパネルを開きます。
* コントロールパネル内で「システムとセキュリティ」に移動し、「システム」をクリックします。「システム」ウィンドウが表示されたら、**デバイスマネージャー**を開きます。
* 「ポート（COM & LPT）」を確認します。「Seeeduino GPRS」という名前の開いているポートが見つかるはずです。もし「COM & LPT」セクションがない場合は、「その他のデバイス」で「不明なデバイス」を探してください。
* 「Seeeduino GPRS」ポートを右クリックし、「ドライバーソフトウェアの更新」オプションを選択します。
* 次に、「コンピュータを参照してドライバーソフトウェアを検索」を選択します。
* 最後に、「seeed_usb_serial.inf」という名前のドライバーファイルを選択します。
* Windowsがドライバーインストールを完了します。

**Mac OSXの場合**

ドライバーをインストールする必要はありません。

## はじめに

:::note
Arduinoを初めて使用する場合は、[Arduinoのはじめ方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino)を参照することを強くお勧めします。
:::

まず、Arduinoソフトウェアをインストールする必要があります。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックしてください。

:::note
Arduinoソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで変更できます。[Arduinoソフトウェア（IDE）ページ](https://www.arduino.cc/en/Guide/Environment#languages)を参照してください。
:::

**Blink例を開く**

LED点滅の例を開きます：**ファイル > Examples > 01.Basics > Blink**。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**ボードを選択する**

**ツール > ボード**メニューで、使用しているArduinoに対応する項目を選択してください。  
**Arduino Leonardo**を選択します。Arduino Leonardoが見つからない場合は、[Arduino IDEにSeeedボードを追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を確認してください。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_board.png)

**シリアルポートを選択する**

**ツール > シリアルポート**メニューからArduinoボードのシリアルデバイスを選択します。通常はCOM3以上です（**COM1**と**COM2**は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduinoボードを取り外してメニューを再度開き、消える項目を確認してください。その項目がArduinoボードです。ボードを再接続してそのシリアルポートを選択します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_com.png)

:::note
Macの場合、**/dev/tty.USBmodem**のようなものになります。
:::

**プログラムをアップロードする**

環境内で「アップロード」ボタンをクリックするだけです。数秒待つと、アップロードが成功した場合、ステータスバーに「Done uploading.」というメッセージが表示されます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

アップロードが完了して数秒後、ボード上のピン13（LEDピン13）のLEDが点滅（緑色）を開始するはずです。点滅した場合、おめでとうございます！Arduinoが正常に動作しています。問題がある場合は、トラブルシューティングの提案を参照してください。

## Linuxでの開始方法

Linuxで使用する場合は、[LinuxでのArduinoのインストール](http://playground.arduino.cc/Learning/Linux)にアクセスしてください。

**GPRS機能**

Seeeduino GPRSは、音声通話の発信/受信、SMSの送受信、TCP接続の確立など、携帯電話の機能を提供します。[Seeeduino GPRSライブラリ](https://github.com/Seeed-Studio/Seeeduino_GPRS)をダウンロードして、Seeeduino GPRSを使用してください。以下は簡単な紹介です。

Seeeduino GPRSを使用するには、ヘッドフォンとSIMカードが必要です。

![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_t.jpg)

![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_b.jpg)

**通話をする**

ライブラリ内の例題スケッチ **GPRS_CallUp** (libraries/Seeeduino_GPRS/example/GPRS_CallUp/) を開き、`callUp`関数内の電話番号を置き換えます。その後、スケッチをコンパイルしてボードにアップロードします。Seeeduino GPRSはコードで指定された番号に電話をかけます。

```cpp
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Call up Test...");
    gprs.preInit(); // SIM800を電源オン
    delay(1000);
    while(0 != gprs.init()) { // GPRS初期化
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to call...");
    gprs.callUp("150****9566");
}

void loop() {
    // 何もしない
}
```

**SMSを送信する**

通話と同様に、Seeeduino GPRSを使用してSMSを送信することができます。ライブラリ内の例題スケッチ **GPRS_SendSMS** (libraries/Seeeduino_GPRS/example/GPRS_SendSMS/) を開き、`sendSMS`関数内の電話番号とメッセージを置き換えます。その後、スケッチをコンパイルしてボードにアップロードします。Seeeduino GPRSはコードで指定された番号にメッセージを送信します。

```cpp
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Send SMS Test ...");
    gprs.preInit();
    delay(1000);
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to send SMS message...");
    gprs.sendSMS("130****3364","hello,world"); // 電話番号とテキストを定義
}

void loop() {
    // 何もしない
}
```

**通話に応答し、SMSを読む**

誰かが電話をかけたりメッセージを送信した場合、Seeeduino GPRSは通話に応答したりメッセージを読み取ることができます。ライブラリ内の例題スケッチ **GPRS_LoopHandle** (libraries/Seeeduino_GPRS/example/GPRS_LoopHandle/) を開き、スケッチをコンパイルしてボードにアップロードします。Seeeduino GPRSは着信通話やSMSがあるかどうかをポーリングします。着信通話がある場合、Seeeduino GPRSは自動的に通話に応答します。着信SMSがある場合、Seeeduino GPRSはメッセージをシリアルモニターに表示します。

```cpp
#include <gprs.h>
#include <SoftwareSerial.h>
#include <stdio.h>

char gprsBuffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - LoopHandle Test...");
    gprs.preInit();
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to monitor your call or message...");
}

void loop() {
    if(gprs.serialSIM800.available()) {
        inComing = 1;
    } else {
        delay(100);
    }

    if(inComing) {
        gprs.readBuffer(gprsBuffer,32,DEFAULT_TIMEOUT);
        Serial.print(gprsBuffer);

        if(NULL != strstr(gprsBuffer,"RING")) {
            gprs.answer();
        } else if(NULL != (s = strstr(gprsBuffer,"+CMTI: \"SM\""))) { // SMS: $$+CMTI: "SM",24$$
            char message[MESSAGE_LENGTH];
            int messageIndex = atoi(s+12);
            gprs.readSMS(messageIndex, message,MESSAGE_LENGTH);
            Serial.print(message);
        }
        gprs.cleanBuffer(gprsBuffer,32);
        inComing = 0;
    }
}
```

**FMラジオ機能**

Seeeduino GPRSにはFMラジオ機能があります。ライブラリ内の例題スケッチ **FM_Test** (libraries/Seeeduino_GPRS/example/FM_Test/) を開き、ボタンをボードに接続します。その後、スケッチをコンパイルしてボードにアップロードします。Seeeduino GPRSはFMラジオとして機能します。ボタンを使用してチャンネルを変更することもできます。

```cpp
#include <fm.h>
#include <SoftwareSerial.h>

int channelButton = 5; // チャンネル変更用
FM fm;

void setup() {
    pinMode(channelButton,INPUT);
    Serial.begin(9600);
    Serial.println("FM Test...");
    fm.preInit();
    while(0 != fm.powerOn()) {
        Serial.println("FM power on failed, try again...");
        delay(2000);
    }
    fm.setVolume(6); // 0,1,2,3,4,5,6
    fm.scanChannel();
    Serial.println("FM init success");
}

void loop() {
    while(HIGH == digitalRead(channelButton)) {
        delay(50);
    }
    Serial.print("change Channel\r\n");
    fm.channelNext();
    while(LOW == digitalRead(channelButton)) {
        delay(50);
    }
}
```

**Bluetooth機能**

Seeeduino GPRSはBluetoothデバイスとして使用できますが、まだ非常に安定しているわけではありません。ライブラリには2つの例題スケッチがあります。1つ目は **Bluetooth AT Command** で、ATコマンドをSeeeduino GPRSに送信できます。もう1つは **Bluetooth_Communicate** で、SPPプロファイルでSeeeduino GPRSと通信できます。ただし、Bluetoothデバイスやモバイルとの接続時に問題が発生する可能性があります。以下はBluetooth AT Commandのコードです。

```cpp
#include <bluetooth.h>
#include <SoftwareSerial.h>

#define DEFAULT_TIMEOUT 5
#define BT_BUF_LEN      32
BlueTooth bluetooth;

char bluetoothBuffer[BT_BUF_LEN];
int start = 0;

void setup() {
    Serial.begin(9600);
    Serial.println("Bluetooth AT Command Test...");
    bluetooth.preInit();
    delay(3*1000);
    while(0 != bluetooth.powerOn()) { // Bluetoothの電源オン
        Serial.println("bluetooth power on failed, try again...");
        delay(2000);
    }
}

void loop() {
    if(bluetooth.serialSIM800.available()) {
        start = 1;
    } else {
        delay(500);
    }

    if(start) {
        // bluetooth.cleanBuffer(bluetoothBuffer,64);
        bluetooth.readBuffer(bluetoothBuffer,BT_BUF_LEN,DEFAULT_TIMEOUT);
        if(NULL != strstr(bluetoothBuffer,"+BTPAIRING:")) {
            bluetooth.acceptPairing();
        }
        if(NULL != strstr(bluetoothBuffer,"+BTCONNECTING:")) {
            bluetooth.acceptConnect();
        }
        start = 0;
    }
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **回路図**

    [Seeeduino GPRS Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip)

    [Seeeduino GPRS PDF ファイル](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Schematic.pdf)

* **ファームウェア**

    [Seeeduino GPRS ファームウェア & 更新ガイド](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Firmware_update_for_Seeeduino_GPRS_v1.0.zip)

* **SIM800 ATコマンド**

    [SIM800シリーズ ATコマンド PDF](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

* **Seeeduino GPRS ライブラリ**  

    [Seeeduino GPRS ライブラリ GitHub](https://github.com/Seeed-Studio/Seeeduino_GPRS)

## 技術サポート & 製品ディスカッション

   <br />
   弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>