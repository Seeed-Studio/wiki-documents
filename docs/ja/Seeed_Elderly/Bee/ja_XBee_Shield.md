---
description: XBee シールド
title: XBee シールド
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XBee_Shield
last_update:
  date: 05/15/2025
  author: shuxu hu
---


 ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshieldn2.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshield_bottom.jpg)

**XBee シールド**は、**Arduino** または [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) ボードが **Bee 互換モジュール**（Zigbee や BlueTooth Bee など）を使用して無線通信を行うことを可能にします。これは、**MaxStream の XBee モジュール**と一緒に使用するように設計されています。**シリアルポート** / **USB の代替**として使用できます。これにより、**Zigbee** / **Bluetooth Bee** を使用して 2 つの **Seeeduino** を接続したり、**Seeeduino** を PC と無線で接続したりすることができます。2 つのトグルスイッチにより、Bee モジュールの **RxD** および **TxD** ピンを **Seeeduino** のどのピンに接続するかを決定します。これらのスイッチは、Bee モジュールの **RxD** および **TxD** ラインを **Seeeduino ハードウェアシリアルポート**、**デジタルピン 11 および 12**、または **FTDI RxD および TxD ピン**に接続するオプションを提供します。

 **モデル：[WLS114A0P](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)**

Seeed Studio の **XBee®_Shield** は [Arduino Xbee シールド](https://arduino.cc/en/Main/ArduinoXbeeShield) を基にしており、以下の特徴があります：

* 小型フォーム
* ほとんどのコンポーネントが SMT パッケージ
* 低コスト

X-CTU を [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) で使用するには、以下のスケッチをアップロードしてください。

```c
void setup()
{
  DDRB=0;
  DDRC=0;
  DDRD=0;
}

void loop()
{

}  
```

## 特徴  

1. 31mm x 41mm の基板サイズ。
2. Arduino / Seeeduino と通信可能
    * ピン 11, 12 のソフトウェアシリアルポート経由
    * またはハードウェアシリアルポート経由

3. Xbee モジュールは USB 経由で X-CTU によって設定可能
4. すべてのピンのブレークアウト

## 応用アイデア  

* Bee モジュールを使用して Seeeduino / Arduino と PC を無線で通信。
* **GPS Bee** を Arduino / Seeeduino に接続。

## 注意事項  

* Bee モジュールや Arduino に接続する前に、トグルスイッチを正しい位置に設定してください。

## 回路図  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbee_Shield_Schematic.jpg)

## 仕様  

上記の [特徴](https://wiki.seeedstudio.com/ja/XBee_Shield/#features "XBee_Shield#Features") を参照してください。

## 機械的寸法  

XBee® シールドのサイズは 3.1cm x 4.1cm です。

## 使用方法  

**Bee モジュール**は XBee シールドを介して Arduino / Seeeduino に接続されます。Seeeduino の場合、動作電圧スイッチを 3.3V の位置に設定してください。通常、Bee モジュールはソフトウェアシリアルポートを介して接続され、トグルスイッチ（**TOG_1** および **TOG_2**）を **左側**の位置に設定します。以下の表を参照して、さまざまな設定を確認してください。

### ハードウェアのインストール  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_XBeeShield_XBeePro.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### XBee シールドの概要とトグルスイッチの位置  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/XBee_Shield_Outline.jpg)

<table>
<caption>Arduino</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>Xbee Tx 接続先</th>
<th>Xbee Rx 接続先</th>
</tr>
<tr>
<td width="200">左</td>
<td width="200">左</td>
<td width="300">デジタルピン 11</td>
<td width="300">デジタルピン 12</td>
</tr>
<tr>
<td>左</td>
<td>右</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>右</td>
<td>左</td>
<td>デジタルピン 11</td>
<td>デジタルピン 12</td>
</tr>
<tr>
<td>右</td>
<td>右</td>
<td>Atmege RxD</td>
<td>Atmege TxD</td>
</tr></table>
<table>
<caption> Arduino Mega</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>Xbee Tx 接続先</th>
<th>Xbee Rx 接続先</th>
</tr>
<tr>
<td width="200">左</td>
<td width="200">左</td>
<td width="300">デジタルピン 51</td>
<td width="300">デジタルピン 50</td>
</tr>
<tr>
<td>左</td>
<td>右</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>右</td>
<td>左</td>
<td>デジタルピン 51</td>
<td>デジタルピン 50</td>
</tr>
<tr>
<td>右</td>
<td>右</td>
<td>Atmege RxD0</td>
<td>Atmege TxD0</td>
</tr></table>

### Bee の AT コマンドのテスト  

以下のコードを使用して新しいスケッチを作成し、Arduino ボードにダウンロードしてください。

```c
//シリアルリレー - Arduino は
//コンピュータと Bee シールド間のシリアルリンクを
//9600 bps 8-N-1 でパッチします
//コンピュータはハードウェア UART に接続されています
//Bee シールドはソフトウェア UART に接続されています

#include <NewSoftSerial.h>
#define RxD 11
#define TxD 12

NewSoftSerial mySerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    mySerial.begin(9600);               // Bee のボーレート  
    Serial.begin(9600);                 // ターミナルのボーレート  
}

void loop()
{
    if(Serial.available())
    {
       mySerial.print((unsigned char)Serial.read());
     }
    else  if(mySerial.available())
    {
       Serial.print((unsigned char)mySerial.read());
     }  

}
```

その後、お気に入りのシリアルターミナルソフトウェアを起動し、Arduino 用の COM ポートを選択し、Bee のデフォルトボーレート（XBee のデフォルトは 9600 8-N-1）で動作するように設定します。接続してコマンドを送信します。XBee モジュールの場合、Arduino ボードに「+++」（引用符なし）を送信してみてください。XBee は「OK」を返して応答するはずです。

### V 1.0 用の AT 更新バージョンの送信  

上記のコードは以前のバージョンで動作していたかもしれませんが、SoftwareSerial ライブラリは現在コアの一部です。以下のコードは [Arduino SoftwareSerial マニュアル](https://arduino.cc/en/Reference/SoftwareSerial) からほぼ直接引用されています。

```c
/*
Arduino SoftwareSerial チュートリアルの例
 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(11, 12); // RX, TX

void setup()  
{
  // シリアル通信を開き、ポートが開くのを待ちます：
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() // 繰り返し実行
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

このコードをXbee Shieldを搭載したArduinoにアップロードし、シリアルモニターを起動すると、Arduinoのシリアルポートが現在動作中の他のXbeeラジオと無線で接続されます。シリアルモニターに入力した内容は他のラジオに送信され、逆に他のラジオからの内容も受信されます。

### プログラミング  

以下のスケッチは、[Bluetooth Bee](https://seeeddoc.github.io/Bluetooth_Bee/)を**スレーブデバイス**として設定し、PCまたは他のマスターデバイスからの接続要求を待機します。Bluetooth Beeは、上記のように**XBee®_Shield**を介してSeeeduinoに接続されています。

```
/*
BluetoothBee デモコード - フロー制御ベースの実装
2010,2011 Copyright (c) Seeed Technology Inc.  All rights reserved.

著者: Visweswara R

このデモコードはフリーソフトウェアです。GNU Lesser General Public Licenseのバージョン2.1またはそれ以降のバージョンの条件に基づいて、再配布および変更が可能です。

このライブラリは有用であることを願って配布されていますが、商品性や特定の目的への適合性に関する保証はありません。詳細についてはGNU Lesser General Public Licenseを参照してください。

このライブラリとともにGNU Lesser General Public Licenseのコピーを受け取ったはずです。受け取っていない場合は、以下の住所にあるFree Software Foundationにお問い合わせください。
Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

製品の詳細については、https://www.seeedstudio.com/depot/ をご確認ください。

このスケッチをSeeeduinoにアップロードし、リセットボタンを押してください。
*/

#include <NewSoftSerial.h>   //ソフトウェアシリアルポート
#define RxD 11
#define TxD 12
#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
pinMode(RxD, INPUT);
pinMode(TxD, OUTPUT);
setupBlueToothConnection();  
}

void loop()
{
//典型的なBluetoothコマンド - 応答シミュレーション:  
//PCのBluetoothシリアルターミナルから'a'を入力してください
//手順についてはWikiを参照してください  

  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("You are connected"); //ここにBluetooth通信ロジックを記述できます
  }  
}

void setupBlueToothConnection()
{
  blueToothSerial.begin(38400); //BluetoothBeeのボーレートをデフォルトの38400に設定
  delay(1000);
  sendBlueToothCommand("\r\n+STWMOD=0\r\n");
  sendBlueToothCommand("\r\n+STNA=SeeeduinoBluetooth\r\n");
  sendBlueToothCommand("\r\n+STAUTO=0\r\n");
  sendBlueToothCommand("\r\n+STOAUT=1\r\n");
  sendBlueToothCommand("\r\n+STPIN=0000\r\n");
  delay(2000); // この遅延は必要です。
  sendBlueToothCommand("\r\n+INQ=1\r\n");
  delay(2000); // この遅延は必要です。
}  


//応答として"OK"が受信されたか確認します
void CheckOK()
{
  char a,b;

  while(1)
  {
    if(blueToothSerial.available()) { a = blueToothSerial.read();   if('O' == a)
    {

      // 次の文字Kを待機します。場合によってはavailable()が必要です。Kはすぐには利用可能ではない場合があります。
      while(blueToothSerial.available())
      {
         b = blueToothSerial.read();
         break;
      }

      if('K' == b)
      {
        break;
      }
    }
  }
}  

  while( (a = blueToothSerial.read()) != -1)
  {
     //他の応答文字がすべて受信されるまで待機します
  }
}


void sendBlueToothCommand(char command[])
{
   blueToothSerial.print(command);
   CheckOK();
}
```

詳細については、**Bluetooth Bee Programming**を参照してください。

## FAQ  

質問がある場合は、こちらに記載してください。

## サポート  

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または **wish** にアクセスして議論してください。

## バージョントラッカー  

<table>
  <tbody><tr>
      <th>リビジョン</th>
      <th>説明</th>
      <th>リリース日</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}>XBee® Shield V1.1</td>
      <td width={500}>Seeedstudioによる新バージョン</td>
      <td width={200}>2009年7月6日</td>
    </tr></tbody></table>

## バグトラッカー  

バグトラッカーは、使用中に見つけた可能性のあるバグを報告する場所です。言いたいことを書き留めてください。あなたの回答は、私たちの製品改善に役立ちます。

## 追加アイデア  

追加アイデアは、この製品に関するプロジェクトアイデアや、見つけた他の使用方法を書き留める場所です。または、Projectsページに記載することもできます。

## 購入方法  

購入はこちらをクリックしてください: [https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)

## ライセンス  

このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードとライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされています。詳細はソースコードファイルを参照してください。

## 関連情報  

[Bluetooth Bee documentation](/ja/Bluetooth_Bee "Bluetooth_Bee") **XBee®_Shield**の使用例を示しています。

## 外部リンク  

アプリケーションアイデア、ドキュメント/データシート、またはソフトウェアライブラリを提供する外部ウェブページへのリンク。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース  

* **[Arduino]**    [Arduino Xbee Shield Page](https://arduino.cc/en/Main/ArduinoXbeeShield)

* **[Eagle]**    [eagle for Xbee_Shield_v1.0](https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip)

* **[PDF]**[XBee_Shield pdf](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.pdf)

* **[Eagle]**[XBee_Shield sch](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.sch)

* **[Eagle]**    [eagle for Xbee_Shield_v1.1](https://files.seeedstudio.com/wiki/XBee-Shield/res/Elage_xbee_shield_v1.1.zip)
* **[PDF]**[Xbee_shield_v1.1 pdf](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.pdf)

* **[EAGLE]**[Xbee_shield_v1.1 sch](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.sch)

## 技術サポートと製品ディスカッション  

私たちの製品を選んでいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>