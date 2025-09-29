---
description: Bluetooth Bee
title: Bluetooth Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bluetooth_Bee_Standalone
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/P3302883_02.jpg)

余っているArduinoを別のプロジェクトに使うために取っておく必要はありません。この2-in-1デバイスにはArduinoが内蔵されています。Bluetooth Bee with Arduinoは、Bluetooth Beeの強化版です。オンボードATMEGA168を追加することで、完全な機能を備えたArduinoとして動作しつつ、Bluetooth Beeと同じフットプリントと命令セットを維持しています。さらに、XBee Carrier、XBee® Shield、UartSBeeにスタックして拡張や再プログラミングを行うことも可能です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)

## 特徴

---

* 小型フットプリント
* Bluetooth Beeと同一の設定およびペアリング方法
* BluetoothモジュールとATMEGA168間でソフトウェアシリアルポートを採用
* XBee Carrier、XBee® Shield、UartsBeeとの互換性を維持

### ハードウェアの特徴

* 典型的な-80dBm感度
* 最大+4dBmのRF送信出力
* 完全認定Bluetooth V2.0+EDR 3Mbps変調
* 3.3V電源
* 統合PCBアンテナ
* ソフトウェアを介してBluetoothを切断および監視可能
* xBee互換ヘッダー

### ソフトウェアの特徴

* SoftSerialプログラムを使用して通信
* デフォルトのボーレート: **38400**、データビット: 8、ストップビット: 1、パリティ: なし、データ制御: あり
* サポートされるボーレート: 9600, 19200, 38400, 57600, 115200, 230400, 460800
* CTSおよびRTSを使用してデータストリームを制御
* PC2の立ち上がりエッジでBluetoothを切断
* ステータス指示ポートPB2: 低-切断、高-接続
* PIO10は赤色LEDに接続、PIO11は青色LEDに接続。マスターとスレーブがペアリングされると、赤と青のLEDが2秒間隔で1回点滅し、切断されると青色LEDのみが1秒間に2回点滅
* デフォルトで電源投入時に最後に接続したデバイスに自動接続
* デフォルトで一致するデバイスの接続を許可
* デフォルトPINコード: "0000"
* 接続範囲外で切断された場合、30分以内に自動再接続

## 応用アイデア

---

* Bluetooth通信を備えたArduino互換モジュール
<!-- *   Bluetooth Serial Port for PC when connected with [UartSBee](/ja/UartSBee_V4) and uploading SoftSerial program to **ATMEGA168**. -->

:::caution
    *3.3V電源が必要です。
    *   UartSBeeと使用する場合、動作電圧を3.3Vに設定してください。
    *   ボーレートを変更するコマンドはリセット後も保持されます。そのため、次回使用時のボーレートを覚えておいてください。
:::

## ピン定義と定格

---
ボトムビュー:
 ![](https://files.seeedstudio.com/Grove-Red_LED/wiki/Bluetooth_Bee_Standalone/img/Bluetooth-standalone_pin.jpg)

* PD4 - PD7 = Arduino IDEデジタルピン 4 - 7  (5,6 PWM)

* PB0 , PB1 = Arduino IDEデジタルピン 8 , 9  (9 PWM)

* PC0 - PC3 = Arduino IDEアナログピン 0 - 3  (注: PC2は立ち上がりエッジでBluetoothを切断)


## 使用方法

---
<!-- 例: Bluetooth Bee-Standalone を使用して XBee キャリアで [Grove-Red_LED](/ja/Grove-Red_LED) を制御します。 -->

* ステップ 1

Grove-Red_LED と Bluetooth Bee-Standalone モジュールを XBee キャリアに以下のように接続します。

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone3.jpg)

* ステップ 2

Arduino-IDE を使用してプログラムを作成し、Bluetooth Softserial ポートから情報を読み取り、LED をオンまたはオフにするように識別します。

```
/*
BluetoothBee デモコード - フロー制御ベースの実装
2010,2011 Copyright (c) Seeed Technology Inc.  All rights reserved.

著者: Visweswara R      修正: Joinj

このデモコードはフリーソフトウェアです。GNU Lesser General Public License のバージョン 2.1 またはそれ以降のバージョンに基づいて、再配布および変更が可能です。

このライブラリは有用であることを願って配布されていますが、商品性や特定の目的への適合性についての保証はありません。詳細については GNU Lesser General Public License を参照してください。

このライブラリとともに GNU Lesser General Public License のコピーを受け取ったはずです。受け取っていない場合は、以下に連絡してください:
Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

製品の詳細については https://www.seeedstudio.com/depot/ をご確認ください。

*/

/* このスケッチを Seeeduino にアップロードし、リセットボタンを押してください */

#include <NewSoftSerial.h>   // ソフトウェアシリアルポート
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(5,OUTPUT);
    setupBlueToothConnection();
}

void loop()
{
    unsigned char control;
    unsigned char temp;
    while(temp!='4')  {
        temp=blueToothSerial.read();
    }
    Serial.println("接続されました");
    blueToothSerial.print("接続されました");      // ここに Bluetooth 通信ロジックを記述できます
    while(1)  {
        temp=blueToothSerial.read();
        switch(temp)  {
            case 'O':{while(temp!='N')  {temp=blueToothSerial.read();}  digitalWrite(5,HIGH);break;}
            case 'S':{while(temp!='H')  {temp=blueToothSerial.read();}  digitalWrite(5,LOW);break;}
            default:break;
        }
    }
}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); // BluetoothBee のデフォルトボーレート 38400 に設定
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeedBluetooth-st\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // この遅延は必要です。
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // この遅延は必要です。
}

// 応答 "OK" が受信されたか確認
void CheckOK()
{
    char a,b;
    while(1)
    {
        if(blueToothSerial.available())
        {
            a = blueToothSerial.read();

            if('O' == a)
            {
                // 次の文字 K を待機します。場合によっては available() が必要です。K がすぐに利用可能ではない場合があります。
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
        // 他の応答文字がすべて受信されるまで待機
    }
}

void sendBlueToothCommand(char command[])
{
    blueToothSerial.print(command);
    CheckOK();
}
```

* ステップ 3

XBee キャリアを USB ケーブルでコンピュータに接続し、Bluetooth Bee-Standalone 上の **ATMEGA168** にプログラムをアップロードします。

* ステップ 4

XBee キャリアから USB ケーブルを取り外し、3.7V バッテリーを以下のように XBee キャリアに接続します。

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone2.jpg)

* ステップ 5

<!-- 別の Bluetooth Bee を使用して Bluetooth Bee-Standalone に接続します。接続方法については [Bluetooth Bee](/ja/Bluetooth_Bee) を参照してください。接続が完了すると、別の Bluetooth Bee を使用して LED を制御できます。"ON" を Bluetooth Bee-Standalone に送信すると LED が動作し、"SH"（SHUT の略）を送信すると LED がオフになります。 -->

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone1.jpg)

## 追加のアイデア

---

* [Bluetooth Bee - Standalone のテスト方法](http://dejwoot.blogspot.hk/2012/07/howto-test-your-bluetooth-bee-standalone.html)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [BlueTooth Bee - Standalone Eagle ファイル](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip).

* [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

* Seeedstudio フォーラムで、Bluetooth Bee 間の接続を設定する方法に関する[情報](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)が利用可能です。

* Seeedstudio フォーラムで、PC と Bluetooth Bee を接続する方法に関する[情報](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)が利用可能です。

* [ファイル: Bluetooth Bee Standalone v1.0.pdf](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee_Standalone_v1.0.pdf "File:Bluetooth Bee Standalone v1.0.pdf")

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>