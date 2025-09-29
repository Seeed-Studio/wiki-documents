---
description: Seeeduino Ethernet
title: Seeeduino Ethernet
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Ethernet
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-2.jpg)

Seeeduino Ethernetは、データロギングと処理、デバイス制御、Ethernet通信を1つに統合したコンパクトで多機能な開発プラットフォームです。MEGA328PチップとWiz5100を搭載しており、前者はArduinoの制御スタイルを提供し、後者はTCPおよびUDP Ethernet通信機能を提供します。さらに統合されたSDカードモジュールにより、ネットワークを介したリモートデータロギング、処理、転送が便利で整然としています。

このバージョンでは、RJ45の高さをヘッダーとバランスを取るために低くしました。また、I2CおよびUART Groveポートが搭載されているため、対応するGroveモジュールをこのボードに簡単に接続できます。

[![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Ethernet-p-1231.html)

## 仕様

---

* 電圧: 6.2-13V

* 電流: 140-550mA

* 対応カードタイプ: Micro SDカード(<font color="red">**必ずSanDisk製**</font>)、FAT/FAT32 (2GB以上は保証されません)

* 対応接続: TCP/UDP

* 正味重量: 23±2g

* Ethernetジャック: 標準RJ45

## デモンストレーション

---
Seeeduino EthernetのSDカードから情報を読み書きする機能と、A/Dデータをネットワークに送信する機能をテストします。
![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-1.jpg)

### ステップ1: ハードウェアのインストール

まず、ハードウェアをインストールします。電源を接続する方法は2つあります。

**方法1**: [Passive PoE Cable Set](https://www.seeedstudio.com/depot/passive-poe-cable-set-p-1175.html?cPath=207)を使用して、電源とEthernet接続を同時に提供します。以下の画像のように接続します。

![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-3.jpg)

**方法2**: 電源ケーブルとEthernetケーブルを別々に使用します。

![画像をここに入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-4.jpg)

### ステップ2: プログラミング

ハードウェアのインストールが完了したら、テストコードを試してみます。
このプログラムは、SDカードからデータを読み書きし、A/Dデータをネットワークに送信する機能をテストするために書かれています。
このデモコードは、テストプログラムとして使用できるだけでなく、ボードの機能をさらに探求したい場合の参考にもなります。

<font color="red">注意:</font>

1. 必要な".h"ファイルはすべてArduino IDE(1.0)に事前インストールされています。

2. Micro SDカードをインストールしてください。Micro SDカードが満杯でないこと、またフォーマットがFATまたはFAT32であることを確認してください。

```
/*
  SDカードの読み書き

 この例では、SDカードファイルへのデータの読み書き方法を示します。
 回路:
 * SDカードは以下のようにSPIバスに接続されています:
 ** MOSI - ピン11
 ** MISO - ピン12
 ** CLK - ピン13
 ** CS - ピン4

   Webサーバー

 アナログ入力ピンの値を表示するシンプルなWebサーバー。
 Arduino Wiznet Ethernetシールドを使用。

 回路:
 * Ethernetシールドはピン10, 11, 12, 13に接続されています。
 * アナログ入力はピンA0からA5に接続されています（オプション）。

 作成日: 2009年12月18日
 作成者: David A. Mellis
 修正日: 2010年9月4日
 修正者: Tom Igoe

 */

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>

// 以下にコントローラー用のMACアドレスとIPアドレスを入力してください。
// IPアドレスはローカルネットワークに依存します:
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192,168,1,177);

// Ethernetサーバーライブラリを初期化します。
// 使用するIPアドレスとポートを指定してください。
// （HTTPのデフォルトポートは80です）:
EthernetServer server(80);

File myFile;

void setup()
{
    Serial.begin(9600);
    Serial.print("SDカードを初期化中...");
    // Ethernetシールドでは、CSはピン4です。デフォルトで出力として設定されています。
    // CSピンとして使用されていなくても、ハードウェアSSピン
    // （ほとんどのArduinoボードでは10、Megaでは53）は出力として設定する必要があります。
    // そうしないとSDライブラリの機能が動作しません。
    pinMode(10, OUTPUT);
    // pinMode(4,OUTPUT);
    if (!SD.begin(4)) {
        Serial.println("初期化に失敗しました!");
        return;
    }
    Serial.println("初期化完了。");

    // ファイルを開きます。注意: 一度に開けるファイルは1つだけです。
    // 別のファイルを開く前にこのファイルを閉じる必要があります。

    myFile = SD.open("test.txt",FILE_WRITE);
    // ファイルが正常に開かれた場合、または作成された場合、データを書き込みます:
    if (myFile) {
        Serial.print("test.txtに書き込み中...");
        myFile.println("テスト 1, 2, 3.");
        // ファイルを閉じます:
        myFile.close();
        Serial.println("完了。");
    } else {
        // ファイルが開かなかった場合、エラーを表示します:
        Serial.println("test.txtのオープンエラー");
    }

    // 読み取り用にファイルを再オープンします:
    myFile = SD.open("test.txt");
    if (myFile) {
        Serial.println("test.txt:");

        // ファイルにデータがある限り読み取ります:
        while (myFile.available()) {
            Serial.write(myFile.read());
        }
        // ファイルを閉じます:
        myFile.close();
    } else {
        // ファイルが開かなかった場合、エラーを表示します:
        Serial.println("test.txtのオープンエラー");
    }
    // Ethernet接続とサーバーを開始します:
    Ethernet.begin(mac, ip);
    server.begin();
}
unsigned char buff[6];
void loop()
{
    EthernetClient client = server.available();
    if (client) {
        // HTTPリクエストは空行で終了します
        boolean currentLineIsBlank = true;
        while (client.connected()) {
            if (client.available()) {
                char c = client.read();
                // 行の終わりに到達した場合（改行文字を受信した場合）、
                // かつその行が空行の場合、HTTPリクエストが終了したとみなします。
                // そのため、返信を送信できます。
                if (c == '\n' && currentLineIsBlank) {
                    // 標準のHTTPレスポンスヘッダーを送信します
                    client.println("HTTP/1.1 200 OK");
                    client.println("Content-Type: text/html");
                    client.println();

                    // 各アナログ入力ピンの値を出力します
                    for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                        client.print("アナログ入力 ");
                        client.print(analogChannel);
                        client.print(" の値は ");
                        client.print(analogRead(analogChannel));
                        client.println("<br />");
                        buff[analogChannel] = analogRead(analogChannel);
                    }
                    break;
                }
                if (c == '\n') {
                    // 新しい行を開始します
                    currentLineIsBlank = true;
                }
                else if (c != '\r') {
                    // 現在の行に文字を取得しました
                    currentLineIsBlank = false;
                }
            }
        }
        // Webブラウザがデータを受信する時間を与えます
        delay(1);
        // 接続を閉じます:
        client.stop();
        myFile = SD.open("test.txt", FILE_WRITE);
        if (myFile) {
            Serial.println("test.txt:");
            for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                myFile.print("アナログ入力 ");
                myFile.print(analogChannel);
                myFile.print(" の値は ");
                myFile.println(analogRead(analogChannel));
            }
            // ファイルにデータがある限り読み取ります:
            myFile.close();
        }
        else {
            // ファイルが開かなかった場合、エラーを表示します:
            Serial.println("test.txtのオープンエラー");
        }

        myFile = SD.open("test.txt");
        if (myFile) {
            Serial.println("test.txt:");

            // ファイルにデータがある限り読み取ります:
            while (myFile.available()) {
                Serial.write(myFile.read());
            }
            // ファイルを閉じます:
            myFile.close();
        }
        else {
            // ファイルが開かなかった場合、エラーを表示します:
            Serial.println("test.txtのオープンエラー");
        }
    }
}
```

### ステップ 3: プログラムのダウンロード

ボードにはUSBコネクタがないため、Seeeduino Ethernetでプログラムをダウンロードするには、[UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109)が必要です。

以下のようにUartSBeeをSeeeduino Ethernetに接続してください：

![画像をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-11.jpg)

![画像をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-5.jpg)

:::note
プログラムをダウンロードする際は、ツールメニューでSeeeduino V3.0をボードとして選択してください。
:::

### ステップ 4: 結果のテスト

<font color="red">注意:</font> Seeeduino Ethernetとコンピュータが同じローカルエリアネットワーク内にあることを確認してください。
プログラムをダウンロードした後、シリアルモニターを開きます。ボードの状態を確認できます。

![画像をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-9.jpg)

ウェブブラウザを開き、ウェブアドレス「192.168.1.177」を入力すると、Seeeduino Ethernetから送信されたデータを確認できます：

![画像をここに入力](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Ethernet_shield2.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Seeeduino Ethernet Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip)

* [Seeeduino Ethernet Schematic.pdf](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeeduino_Ethernet_.pdf)

* このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードとライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされています。詳細はソースコードファイルをご確認ください。

* SDカードをFAT/FTA32形式に再フォーマットしてください。それでも動作しない場合は、[SD Formatter](https://www.sdcard.org/downloads/formatter_3/)をダウンロードし、このソフトウェアでSDカードを再フォーマットすることをお勧めします。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>