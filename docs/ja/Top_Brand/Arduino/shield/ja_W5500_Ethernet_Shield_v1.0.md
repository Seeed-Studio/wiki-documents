---
description: W5500_Ethernet_Shield_v1.0
title: W5500 Ethernet Shield v1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/W5500_Ethernet_Shield_v1.0
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500.jpg" alt="pir" width={600} height="auto" /></p>

W5500 Ethernet Shield v1.0は、プロジェクトにインターネット接続を提供することができます。W5500は、TCP/IPスタック、10 / 100 Ethernet MACおよびPHYを組み込んだ単一チップを使用することで、ユーザーがアプリケーションにインターネット接続を持つことを可能にします。このシールドには、Groveコネクタ2つとmicroSDカードソケットがあり、大量のデータをGroveセンサーから保存する必要があるプロジェクトをサポートします。RJ45ポート（イーサネットケーブルが接続される場所）は低い位置にあるため、必要に応じてこのシールドの上にさらにシールドを積み重ねることができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

--------

- ハードウェアTCP/IPプロトコルをサポート：TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE
- 同時に8つの独立したソケットをサポート
- パワーダウンモードをサポート
- UDP経由のWake on LANをサポート
- 高速シリアルペリフェラルインターフェース（SPI MODE 0, 3）をサポート
- TX/RXバッファ用の内部32Kバイトメモリ
- 10BaseT/100BaseTX Ethernet PHYを組み込み
- 自動ネゴシエーションをサポート（フルおよびハーフデュプレックス、10および100ベース）
- IPフラグメンテーションはサポートしない
- 3.3V動作で5V I/O信号耐性
- LED出力（フル/ハーフデュプレックス、リンク、速度、アクティブ）
- Micro-SDカードソケット
- I2CおよびUART用のGroveコネクタ

## ハードウェア概要

-----------------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500_Interface.jpg" alt="pir" width={600} height="auto" /></p>

**ハードウェア構成**

1. RJ45：イーサネットポート
2. IC W5500：ハードウェアTCP/IPイーサネットコントローラ
3. リセットボタン：イーサネットシールドのリセット
4. SDカードソケット：FAT16またはFAT32をサポートするMicro SDカード；最大ストレージは2GB
5. I2Cインターフェース
6. UARTインターフェース

**Arduinoでのピン使用**

1. D4：SDカードチップ選択
2. D10：W5200チップ選択
3. D11：SPI MOSI
4. D12：SPI MISO
5. D13：SPI SCK

:::note
W5500とSDカードはどちらもSPIバスを介してArduinoと通信します。ピン10とピン4はW5500およびSDスロットのチップ選択ピンです。これらは一般的なI/Oとして使用することはできません。
:::

使用方法
-----

例を示します。この例では、データをウェブページにアップロードし、センサーデータをSDカードに保存します。

### ハードウェア

**部品リスト:**
<table align="center">
  <tbody>
  <tr>
    <td><h3>名前</h3></td>
    <td><h3>機能</h3></td>
    <td><h3>数量</h3></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><span>W5500 Ethernet Shield</span></a></h4></td>
    <td><h4>イーサネット接続を提供</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html?queryID=dcb7226252c34d7139135b4fd97cafc5&objectID=627&indexName=bazaar_retailer_products" target="_blank"><span>Seeeduino V4.2</span></a></h4></td>
    <td><h4>コントローラ</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html" target="_blank"><span>Grove-Temp&Humi Sensor</span></a></h4></td>
    <td><h4>センサー</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Base Shield V2</span></a></h4></td>
    <td><h4>ベースシールド</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro SDカード</h4></td>
    <td><h4>データ保存</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

**手順:**

1. W5500 Ethernet Shield v1.0をArduinoに取り付け、Base Shield V2をEthernet Shieldに取り付け、Grove-Temp&HumiセンサーをBase ShieldのD5 Groveポートに接続し、SDカードを取り付けます。
2. 標準イーサネットケーブルでイーサネットシールドをネットワークに接続します。
3. USBケーブルでArduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20hardware.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェア

- [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)の手順に従ってライブラリをインストールしてください。
- 以下のボタンをクリックしてW5500 Ethernet Shieldライブラリをダウンロードしてください。

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/WIZ_Ethernet_Library-IDE1.6.x-master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/download%20W5500%20library.png" /></a></p>

- ダウンロードしたライブラリをArduino IDEにインストールします。
- 以下のコードをスケッチにコピーしてアップロードしてください。

```cpp
//このスケッチはW5500 Ethernet Shield、Seeeduino V4.2、Grove-Temp&Humi、
//Base Shield V2センサーおよびMicro SDカードを使用して温度と湿度の収集ステーションを設計します。
//温度と湿度センサーをBase ShieldのD5 Groveポートに接続します。
//温度と湿度データをウェブページに公開し、5秒ごとに更新します。
//また、データをSDカードのdatalog.txtファイルに保存します。

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>
#include <dht11.h>
dht11 DHT;
#define DHT11_PIN 5
const int chipSelect = 4;

// ローカルネットワークに応じてIPアドレスを更新してください
#if defined(WIZ550io_WITH_MACADDRESS) // WIZ550ioの割り当てられたMACアドレスを使用
;
#else
byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
#endif  
IPAddress ip(192,168,0,177);

// Ethernetサーバーライブラリを初期化
// 使用するIPアドレスとポートを指定
// （HTTPのデフォルトポートは80）:
EthernetServer server(80);

void setup() {
 // シリアル通信を開始し、ポートが開くのを待つ:
  Serial.begin(9600);
   while (!Serial) {
    ; // シリアルポートが接続されるのを待つ。Leonardoのみ必要
  }

  // Ethernet接続とサーバーを開始:
#if defined(WIZ550io_WITH_MACADDRESS)
  Ethernet.begin(ip);
#else
  Ethernet.begin(mac, ip);
#endif  
  server.begin();
  Serial.print("サーバーのIPアドレス: ");
  Serial.println(Ethernet.localIP());

  // SDカードの初期化
  Serial.print("SDカードを初期化中...");

  // カードが存在し、初期化できるか確認:
  if (!SD.begin(chipSelect)) {
    Serial.println("カードが失敗したか、存在しません");
    // これ以上何もしない:
    return;
  }
  Serial.println("カードが初期化されました。");
}


void loop() {
  // クライアントの接続を待つ
  EthernetClient client = server.available();
  if (client) {
    Serial.println("新しいクライアント");
    // HTTPリクエストは空行で終了
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // 行の終わりに到達した場合（改行文字を受信）かつ行が空の場合、HTTPリクエストが終了
        if (c == '\n' && currentLineIsBlank) {
          // 標準HTTPレスポンスヘッダーを送信
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // レスポンス完了後に接続を閉じる
   client.println("Refresh: 5");  // ページを5秒ごとに自動更新
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");

          // ウェブ上に入力ピンの値を出力
          int chk;
          chk = DHT.read(DHT11_PIN);    // データを読み取る
          client.print("湿度: ");
          client.print(DHT.humidity);
          client.println("<br />");
          client.print("温度: ");
          client.print(DHT.temperature);   

          // 入力ピンの値をSDカードに書き込む
          // ログデータを組み立てるための文字列を作成:
          String dataString = "";
          // 湿度と温度を読み取り、文字列に追加:
          dataString = String(DHT.humidity) + String(DHT.temperature);
          // ファイルを開く。注意: 同時に開けるファイルは1つだけ
          File dataFile = SD.open("datalog.txt", FILE_WRITE);
          // ファイルが利用可能なら書き込む:
          if (dataFile) {
          dataFile.println(dataString);
          dataFile.close();
          // シリアルポートにも出力:
          Serial.println(dataString);
          }
          // ファイルが開けない場合、エラーを表示:
          else {
          Serial.println("datalog.txtのオープンエラー");
          }
          break;
        }
        if (c == '\n') {
          // 新しい行を開始
          currentLineIsBlank = true;
        }
        else if (c != '\r') {
          // 現在の行に文字を取得
          currentLineIsBlank = false;
        }
      }
    }
    // ウェブブラウザがデータを受信する時間を与える
    delay(1);
    // 接続を閉じる:
    client.stop();
    Serial.println("クライアントが切断されました");
  }
}

```

### 結果

ここでは結果を示します。

1. SDカードをコンピュータに挿入すると、いくつかの温度と湿度の情報が表示されます。
2. さらに、ウェブ上で情報を確認することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20on%20web.png" alt="pir" width={600} height="auto" /></p>

とても簡単ではありませんか？ぜひプロジェクトを始めてみてください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- [W5500 Ethernet Shield（Eagle形式）](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip)
- [W5500 Ethernet Shield 回路図（PDF形式）](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.pdf)
- [W5500 Ethernet Shield PCB（PDF形式）](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500%20Ethernet%20Shield%20v1.0%20PCB.pdf)
- [W5500 Ethernet Shield ライブラリ](https://github.com/embeddist/WIZ_Ethernet_Library-IDE1.6.x)
- [W5500 Ethernet Shield データシート（PDF形式）](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_datasheet_v1.0.2.pdf)
<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
