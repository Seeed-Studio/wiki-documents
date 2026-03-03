---
description: Seeeduino Stalker v1.0
title: Seeeduino Stalker v1.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Stalker_v1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Seeeduino-stalker-168.jpg)

**これは Seeeduino Stalker の最新バージョンではなく、販売が終了しています。
最新バージョンはこちらで確認できます：[Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/)
v1.0、v2.0、v2.1 の比較については、<a href="/ja/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker" ><span><font size={"3"}> Arduino </font></span></a> をご覧ください。**

このデバイスの製品ページへのリンク（購入はこちらから）：
**Seeeduino Stalker Atmega 168P v1.0モデル: [ARD125B5P](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-168-p-639.html?cPath=79_80)**

Seeeduino Stalker は、機能が豊富な Arduino 互換のワイヤレスセンサーネットワークノードです。そのモジュール構造とオンボード周辺機器により、定期的にタイムスタンプ付きセンサーデータを記録するのに便利です。Seeeduino Stalker は、追跡、監視、制御プロジェクトに最適な候補です。

## 特徴 ##

- **Arduino** 互換、[Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) に基づいています
- オンボードマイクロコントローラー：ATmega168P または ATmega328P（どちらのバリアントも購入可能）

- デュアル動作モード：スタンドアロン Arduino として、または Arduino 上に積み重ねられたシールドとして動作（ピンヘッダーの位置は Arduino Duemilanove 互換）

- CR2032 コイン電池をバックアップ電源とするオンボードリアルタイムクロックチップ

- スタンドアロンモードでのプログラミング時に自動リセットを行うための DTR を備えたシリアルインターフェース（プログラミングには [UartSBee](https://seeeddoc.github.io/UartSBee/) を別途購入する必要があります）

- microSD カードソケット

- I2C ピンヘッダー（動作電圧は 5.0V または 3.3V を選択可能）

- ユーザー定義のスイッチと LED

- **Bee シリーズソケット** - 2*10 ピン 2.0mm ピッチ（以下のいずれかのワイヤレスモジュールと接続可能：**XBee**、[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)、**GPSBee** または [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)。ただし、[UartSBee](https://seeeddoc.github.io/UartSBee/) はこのソケットと互換性がありません - [UartSBee](https://seeeddoc.github.io/UartSBee/) 用の別のシリアルインターフェースコネクタが提供されています）

## 応用例 ##

- ワイヤレスセンサーネットワーク（**XBee** を使用 - 別途購入）

- GPS ロギング（**GPSBee** を使用 - 別途購入）

- iPhone/Android Phone/Nokia Phone 上で動作するアプリと通信可能なデータ収集システム（[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) を使用 - 別途購入）

- RF リモートコントロール（[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) を使用 - 別途購入）

- シンプルなスタンドアロン Arduino 互換の物理コンピューティングプラットフォームとして（プログラミングには [UartSBee](https://seeeddoc.github.io/UartSBee/) を別途購入する必要があります）

## 注意事項 ##

- 本製品は現状のまま提供されます。特に乾燥した（湿度が低い）天候では、静電気対策（ESD対策）を遵守してください。

- Windowsベースの開発マシンを使用する場合、Arduino IDEがフリーズするのを防ぐためにBluetoothシリアルポートを無効にしてください。

## ブロック図 ##

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-Block.jpg)

## 回路図 ##

[Seeeduino Stalker v1.0の回路図 (PDF)](https://www.seeedstudio.com/depot/datasheet/Seeedstalker_V1.0.pdf)

## 仕様 ##

### 主な技術仕様 ###

|マイクロプロセッサ:|ATMega168P または ATmega328P|
|---|---|
|PCBサイズ:|6.8cm x 5.5cm x 0.16cm|
|インジケータ:|リセット、電源、PB5上のLED (Arduinoピン13)|
|電源供給:|5V または 7-12V|
|電源コネクタ:|2ピン JST/ USB|
|I/O数:|20|
|ADC入力:|専用2チャンネル (10ビット解像度)|
|接続性:|I2C、UART、SPI|
|RoHS準拠:|はい|

### 電気的特性 ###

 |仕様|最小|標準|最大|単位|
|---|---|---|---|---|
 |入力電圧|  5|  9|  12|  ボルト (DC)|
 |全体の電流消費量|  -|  300|  1000|  mA|
 |3.3V I2C電圧|  3.2|  3.3|3.5|  ボルト (DC)|
 |5.0V I2C電圧|  4.6|  4.7|  5|  ボルト (DC)|
| UARTボーレート(プログラミング時)|  -|  -|  115200|  bps|

## 使用方法 ##

### アプリケーションノート ###

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-applications.jpg)

### 接続ノート ###

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-hardware.jpg)

- **Beeシリーズ**ソケット - 2*10ピン 2.0mmピッチ（これにより、**XBee**、[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)、**GPSBee**、または[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)などの**ワイヤレスモジュール**を1つずつ接続可能）。これらのモジュールとの通信はUARTを介して行われます。

- シリアルインターフェース – スペースを節約しコストを削減するため、USB&lt;-&gt;シリアル接続はデフォルトでは提供されていません。FT232ベースのUartSBee (title=undefined) または他のUSB-シリアルアダプタを使用してプログラミングやPCとの通信を行うことができます。

- ユーザーLEDとスイッチ – LEDとスイッチがオンボードに提供されており、必要に応じてアプリケーションで使用できます。

- マスタースイッチ – Seeeduino Stalkerボードから電源を切断します。CR2032バッテリーが装着されている場合、RTCは動作を続けます。

- 割り込みジャンパー – Beeシリーズソケットに挿入されたモジュールがデータ受信イベント時にマイクロコントローラーを割り込ませることを許可する場合、このジャンパーを取り付けます。これは、センサーネットワークアプリケーションでマイクロコントローラーをスリープモードから起動する際に役立ちます。

- I2Cインターフェース: オンボードのI2CレベルシフターICは、3.3Vと5Vデバイス間の電圧変換を提供します。これにより、マイクロコントローラーが3.3ボルトで動作している場合でも、5.0ボルトのI2C ICを接続することができます。

## コンポーネントのデータシート ##

- [ATmega168](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf) - Seeeduino Stalkerに搭載されている8ビットAVRマイクロコントローラー。

- [PCA9306](http://www.nxp.com/documents/data_sheet/PCA9306.pdf) - デュアル双方向I2CバスおよびSMBus電圧レベル変換器。

- [DS1307](http://pdfserv.maxim-ic.com/en/ds/DS1307.pdf) - I2Cリアルタイムクロックチップ。

- [LM1117](http://www.national.com/ds/LM/LM1117.pdf) - 電源セクションで使用される低ドロップアウト線形電圧レギュレーター。

## ソースコード例 ##

Seeeduino Stalkerのプログラミングは、Arduinoとそのライブラリを使用することで簡単に行えます。以下に示すいくつかのコードスニペットは、プロジェクトのコーディングを開始するのに役立ちます。以下のスケッチをすべて含むRARアーカイブは**こちら**から入手できます。

以下に示すすべてのデモスケッチはFileLoggerライブラリを使用しています。Arduinoフォーラムの[このスレッド](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1240704747/all)を参照し、Google Codeの[プロジェクトページ](http://code.google.com/p/arduino-filelogger/)からライブラリをダウンロードしてください。

また、いくつかのSeeeduino Stalkerユーザーが開発したコードをArduinoフォーラムの[スレッド](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1273413449%20)で共有しています。

### デモ 1 - SDカードの使用 ###

FileLoggerライブラリを使用してGPSBeeからのすべてのデータをSDカードに保存します。

```
#include <SD.h>constint chipSelect =10;
String buffer ="";unsignedchar ptr;
File myFile;
byte val;voidsetup(){Serial.begin(19200);pinMode(chipSelect,OUTPUT);if(!SD.begin(chipSelect)){return;}
  File myFile = SD.open("data.log",FILE_WRITE);
   myFile.close();}voidloop(){if(Serial.available()>0){
    val =Serial.read();
    buffer = String(val);
    myFile = SD.open("data.log",FILE_WRITE);
    myFile.print(buffer);
    myFile.close();}}
```

### デモ 2 – タイムスタンプ付きセンサーデータの記録 ###

オンボードのリアルタイムクロックモジュールを使用して、定期的に読み取ったセンサーデータにタイムスタンプを追加できます。

以下のArduinoスケッチは、アナログピン0からセンサーの読み取りを行い、タイムスタンプとともにSDカードに保存する方法を示しています。

```
#include "FileLogger.h"#include "DS1307.h"#include <WProgram.h>#include <Wire.h>#define Timing 0#define Accept 1#define Record 2
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};
byte buffer[20];int temp;
byte ASCII[10]={'0','1','2','3','4','5','6','7','8','9'};unsignedchar result;unsignedchar state;inttime=0;int oldtime=0;voidsetup(void){
    result = FileLogger::append("data.log", start, 7);//SDカードの初期化while(result) result = FileLogger::append("data.log", start, 7);
    RTC.stop();
    RTC.set(DS1307_MIN,30);//分を設定
    RTC.set(DS1307_HR,10);//時を設定
    RTC.set(DS1307_DATE,22);//日付を設定
    RTC.set(DS1307_MTH,12);//月を設定
    RTC.set(DS1307_YR,9);//年を設定
    RTC.start();}voidloop(void){switch(state){case Timing:time=RTC.get(DS1307_SEC,true);delay(200);if(time!=oldtime){
            oldtime=time;
            temp=RTC.get(DS1307_MTH,false);
            buffer[0]=ASCII[(temp/10)];
            buffer[1]=ASCII[(temp%10)];
            buffer[2]='-';
            temp=RTC.get(DS1307_DATE,false);
            buffer[3]=ASCII[(temp/10)];
            buffer[4]=ASCII[(temp%10)];
            buffer[5]='-';
            temp=RTC.get(DS1307_HR,false);
            buffer[6]=ASCII[(temp/10)];
            buffer[7]=ASCII[(temp%10)];
            buffer[8]='-';
            temp=RTC.get(DS1307_MIN,false);
            buffer[9]=ASCII[(temp/10)];
            buffer[10]=ASCII[(temp%10)];
            buffer[11]='-';//temp=RTC.get(DS1307_SEC,false);
            buffer[12]=ASCII[(time/10)];
            buffer[13]=ASCII[(time%10)];
            buffer[14]=':';
            state=Accept;}break;case Accept:
        temp=analogRead(0);
        buffer[15]=ASCII[(temp/100)];
        buffer[16]=ASCII[((temp%100)/10)];
        buffer[17]=ASCII[(temp%10)];
        buffer[18]=0x0D;
        buffer[19]=0x0A;
        state=Record;break;case Record:
        result = FileLogger::append("data.log", buffer, 20);if(result==0){
            state=Timing;}break;default:
        state=Timing;break;}}
```

### デモ 3 - Seeeduino Stalkerをシールドとして操作する ###

Seeeduino Stalkerは、他のArduino Duemilanove/UNO互換ボードにシールドとして取り付けることができます。

以下のスケッチは、I2Cを介して下位のマイクロコントローラーからデータを受信し、それをSDカードに保存する方法を示しています。

```
#include "FileLogger.h"#include <Wire.h>
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};unsignedchar buffer[10];unsignedchar result;unsignedchar state;voidsetup(){
    result = FileLogger::append("data.log", start, 7);//SDカードの初期化while(result) result = FileLogger::append("data.log", start, 7);Wire.begin(4);// I2Cバスにアドレス#4で参加Wire.onReceive(receiveEvent);// イベントを登録}voidloop(){}void receiveEvent(int howMany){unsignedchar i=0;while(Wire.available()>0){
        buffer[i]=Wire.receive();// バイトを文字として受信
        i++;}
    result = FileLogger::append("data.log", buffer, i);while(result) result = FileLogger::append("data.log", start, 7);}
```

## サポート ##

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または **wish** にて議論することができます。

## 改訂履歴 ##

|改訂|説明|リリース日|
|---|---|---|
|Seeeduino Stalker v1.0 |初回公開リリース|2009年12月23日|
|Seeeduino Stalker v2.0 |新機能を追加した改良版|2010年12月17日|

## バグトラッカー ##

バグトラッカーは、使用中に発見した可能性のあるバグを公開する場所です。ご意見をお書きください。皆様の回答が製品の改善に役立ちます。

## 追加アイデア ##

追加アイデアは、この製品に関するプロジェクトアイデアや、発見した他の用途を書き込む場所です。または、プロジェクトページに記載することもできます。

## リソース ##

[Stalker Eagle デザインファイル](https://www.seeedstudio.com/wiki/images/4/40/Stalker.zip)

## 購入方法 ##

Seeeduino Stalker v1.0 はすでに在庫切れです（製品ページ [こちら](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-328-p-600.html?cPath=80)）。代わりに Seeeduino Stalker v2.0 をご確認ください：[Wikiページ](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/) | [製品ページ](https://www.seeedstudio.com/depot/seeeduino-stalker-v2b-p-727.html?cPath=80)

## 関連情報 ##

- [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)
- [Seeeduino Stalker の各バージョン間の比較](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker)

## ライセンス ##

このドキュメントは Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細はソースコードファイルをご確認ください。

## 技術サポート & 製品ディスカッション ##

   <br />
   弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>