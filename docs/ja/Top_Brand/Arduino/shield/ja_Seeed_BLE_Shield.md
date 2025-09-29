---
description: Seeed BLE Shield v1
title: Seeed BLE Shield v1
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeed_BLE_Shield
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Seeed BLE Shield v1
category: Shield
bzurl: https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html
oldwikiname: Seeed BLE Shield v1
prodimagename: Seeed_BLE-4.png
surveyurl: https://www.research.net/r/Seeed_BLE_Shield_v1
sku: 113030013
--- -->
![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-4.png)

Seeed BLE ShieldはHM-11モジュールを利用して、Arduino/SeeeduinoにシリアルBLE機能を提供します。このシールドとの通信にはマイクロコントローラーの2つのピンだけを使用します。BLE ComAssistant APKのサポートにより、このBLEシールドはペアリングなしでモバイルフォンと簡単に通信できます。ロボット制御やリモートコントロール機器など、さまざまな条件で使用できます。このシールド用に簡単で便利なコマンドセットを準備しており、簡潔なコードで機能を実行できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html)

## 仕様

---
<table>
<tr>
<th>仕様</th>
<th>値</th>
</tr>
<tr>
<td width="300px">BTバージョン</td>
<td width="500px">Bluetooth Specification V4.0 BLE</td>
</tr>
<tr>
<td>動作周波数</td>
<td>2.4GHz ISMバンド</td>
</tr>
<tr>
<td>動作電流</td>
<td>&lt; 15 mA</td>
</tr>
<tr>
<td>供給電流</td>
<td>&lt; 30 mA</td>
</tr>
<tr>
<td>スリープ電流</td>
<td>&lt; 3 mA</td>
</tr>
<tr>
<td>変調方式</td>
<td>GFSK（ガウシアン周波数シフトキーイング）</td>
</tr>
<tr>
<td>RF出力</td>
<td>-23dbm, -6dbm, 0dbm, 6dbm（ATコマンドAT+POWEで変更可能）</td>
</tr>
<tr>
<td>速度</td>
<td>非同期: 6K Bytes、同期: 6K Bytes</td>
</tr>
<tr>
<td>感度</td>
<td>≤-84dBm（0.1% BER時）</td>
</tr>
<tr>
<td>セキュリティ</td>
<td>認証と暗号化</td>
</tr>
<tr>
<td>サービス</td>
<td>中央＆周辺 UUID FFE0, FFE1</td>
</tr>
<tr>
<td>供給電力</td>
<td>5V</td>
</tr>
<tr>
<td>動作温度</td>
<td>-5 ~ +65℃</td>
</tr>
<tr>
<td>サイズ</td>
<td>68mm x 43mm</td>
</tr>
<tr>
<td>PINコード</td>
<td>000000（デフォルト）</td>
</tr>
</table>

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/BLE_Shield.png)

* HM-11: 基本モジュールはHM-11です。詳細については[HM-11](/ja/Bluetooth_V4.0_HM_11_BLE_Module)のWikiを参照してください。

* 信号ランプ: BLEが接続されていない場合はランプが点滅しますが、BLEが接続されるとランプは点灯し続けます。

* Groveコネクタ: BLEシールドには2つのGroveコネクタがあり、Grove製品を簡単にボードに接続できます。

* ハードまたはソフトシリアルポート: 7つのデジタルピンのうち2つを通信チャネルとして選択できます。ジャンパーをヘッダーに差し込むだけです。**シルクスクリーンに2つの誤りがあります。「WIFI_TX」と「WIFI_RX」を「BLE_TX」と「BLE_RX」として扱ってください。**

* HM-11からの予約ピンアウト: HM-11モジュールからの予約ピンアウトがいくつかあります（例: CTS1、RTS1、PIO2など）。

* リセットボタン: BLEシールドをリセットする必要がある場合はリセットボタンを押してください。ただし、BLEシールドがメインボード（例: Arduino Uno）に接続されている場合、このリセットボタンはメインボードの状態には影響しません。

## アプリケーション

---

### ハードウェア接続

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-2.png)

Seeed BLE Shield を Arduino/Seeeduino に直接接続します。**BLE Shield 上のジャンパーの位置に注意してください。**

### SoftwareSerial 通信

Seeed BLE Shield はマスターまたはスレーブとして動作することができます。異なるデモを通じて使用できます。**以下の SoftwareSerial プログラムを使用する場合は、前述の画像の接続方法を参照してください。BLE_TX--&gt;D2、BLE_RX--&gt;D3。**

Arduino IDE を開き、以下のプログラムをコピーして Arduino/Seeeduino ボードにアップロードします。その後、2つの BLE Shield が互いに通信できるようになります。

**デモ : BLE スレーブ**

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
        if(BLE.available()){//リモート BLE シールドからデータが送信されているか確認
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
    BLE.begin(9600); //BLE のボーレートをデフォルトの 9600 に設定
    BLE.print("AT+CLEAR"); //以前の設定をすべてクリア
    BLE.print("AT+ROLE0"); //Bluetooth 名をスレーブとして設定
    BLE.print("AT+SAVE1");  //接続情報を保存しない
}
```

**デモ : BLE マスター**

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
        if(BLE.available()){//リモート BLE シールドからデータが送信されているか確認
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
    BLE.begin(9600); //BLE のボーレートをデフォルトの 9600 に設定
    BLE.print("AT+CLEAR"); //以前の設定をすべてクリア
    BLE.print("AT+ROLE1"); //Bluetooth 名をマスターとして設定
    BLE.print("AT+SAVE1");  //接続情報を保存しない
}
```

### HardwareSerial 通信

さらに、BLE Shield を AT コマンドを使用してプログラムなしで使用することもできますが、**2つのジャンパーの位置を変更する必要があります。BLE_TX--&gt;D1、BLE_RX--&gt;D0。**

その後、CoolTerm などのシリアルポートツールを開きます。以下は設定の一例です：**ボーレート: 9600(デフォルト)、データビット: 8、パリティ: なし、ストップビット: 1。**

まず、BLE Shield に "AT" コマンドを送信してテストします。"OK" が返ってきた場合、次のステップに進むことができます。**返ってこない場合は、Arduino/Seeeduino に空のプログラムをアップロードし、前述の操作を通じてシリアルポートツールから応答が得られるか確認してください。**

```
void setup()
{
}

void loop()
{
}
```

その後、BLE Shield に "AT+ROLE0" コマンドを送信します。"OK+Set:0" が返ってきた場合、BLE Shield がスレーブとして動作する準備が整ったことを意味します。

![](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-3.png)

### AT コマンド

AT コマンドに関する詳細情報は、BLE モジュールのデータシートを参照してください。リソーススペースからダウンロードできます。

## 関連資料

---

* [Seeed BLE Shieldに関するFAQ](/ja/Seeed_BLE_Shield). _また、製品のWikiページ右側にある「FAQ」ボタンをクリックすることでFAQページにアクセスできます。_

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

[Seeed BLE Shieldの回路図](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip)

[Android用BLEアプリ](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/HMBLEComAssistant.rar)

[BLEモジュールのデータシート](https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/Bluetooth4_en.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>