---
description: RS232_Shield
title: RS232 Shield

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RS232_Shield
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_Photo.jpg" alt="pir" width={600} height="auto" /></p>

RS232 Shieldは、産業機器向けの標準通信ポートです。このモジュールはMAX232をベースにしており、これはデュアルドライバ/レシーバで、単一の5V電源からTIA/EIA-232-F電圧レベルを供給するための容量性電圧ジェネレータを含んでいます。このシールドはDB9コネクタ（メス）を統合しており、RS232インターフェースを持つさまざまなデバイスへの接続を提供します。また、RS232ヘッダーは接続と試運転を容易にします。さらに、余分なスペースを最大限に活用するための溶接エリアを提供しており、プロトタイピングに非常に便利です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS232-Shield-p-1910.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 仕様
-------------

-   TIA/EIA-232-FおよびITUに準拠またはそれを超える性能
-   最大120 kbit/sで動作
-   低消費電流
-   LEDインジケータ
-   DB9コネクタ（メス）
-   溶接エリア


## インターフェース機能
------------------

**使用方法**

まず、コンピュータでテストできます。

### ハードウェアのインストール

1. Seeeduino v3.0、Mini USBケーブル、RS232 Shield、RS232 to USBケーブルを用意します。
2. 以下のように接続します。ジャンパーハットを使用してデジタルピンからソフトウェアシリアルポートを選択できます。D7（232_TX）とD6（232_RX）に設定し、コードを "*SoftwareSerial mySerial(7, 6); // 232_TX, 232_RX*" に変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェア部分

-   1) Arduino IDEを開き、以下のコードを貼り付けます。

```cpp
 
#include <SoftwareSerial.h>
 
SoftwareSerial mySerial(7, 6); //232_TX,232_RX
 
void setup()
{
    // シリアル通信を開き、ポートが開くのを待ちます:
    Serial.begin(9600);
    while (!Serial) {
        ; // シリアルポートが接続されるのを待ちます。Leonardoのみ必要
    }
 
 
    Serial.println("Goodnight moon!");
 
    // ソフトウェアシリアルポートのデータレートを設定
    mySerial.begin(9600);
    mySerial.println("Hello, world?");
}
 
void loop() // 繰り返し実行
{
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

-   2) コードをアップロードします。正しいボードタイプとCOMポートを選択することを忘れないでください。
-   3) シリアルモニタを開きます。

以下のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage1.jpg" alt="pir" width={600} height="auto" /></p>


<div>
  ## オンライン回路図ビューア
  <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
  </div>
</div>



リソース
--------

-   [RS232 Shield eagleファイル](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip)
-   [RS232_Shield_v1.0.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.pdf)
-   [Datasheet MAX232D.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/MAX232D.pdf)


<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/RS232_Shieldから作成されました -->

## 技術サポートと製品ディスカッション
当社の製品をお選びいただきありがとうございます！当社は、製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>