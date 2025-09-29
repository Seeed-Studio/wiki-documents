---
title: Grove - Serial RF Pro
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Sensor_communication/
slug: /ja/Grove-Serial_RF_Pro
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Twigrf.jpg)

Grove-Serial RF Proは、433/470/868/915 MHzで動作する低コストで高性能な透過型FSKトランシーバーで、最適な性能は433M（デフォルト）で発揮されます。UARTインターフェースを備えており、UARTデータを提供するだけで簡単に無線データ伝送を実現できます。ユーザーはUARTボーレート、周波数、出力電力、データレート、周波数偏移、受信帯域幅などのパラメータを柔軟に設定できます。これは、無線データ伝送製品を設計するための理想的な選択肢であり、無線データ伝送分野で広く使用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)

## バージョントラッカー

<table>
<tr>
<th> リビジョン</th>
<th> 説明</th>
<th> リリース</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> 初回公開リリース</td>
<td width="200px"> NA</td>
</tr>
</table>

## 特徴

---

* Grove互換
* 高出力電力
* 小型サイズ
* 長距離伝送

## 応用アイデア

---

* リモートコントロール、リモート測定システム
* ワイヤレスメーター
* アクセス制御
* 識別システム
* データ収集
* IT家庭用電化製品
* ベビーモニタリングシステム

## 仕様

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 項目</th>
<th scope="col"> 最小</th>
<th scope="col"> 典型</th>
<th scope="col"> 最大</th>
<th scope="col"> 単位</th>
</tr>
<tr>
<td scope="row">動作電圧</td>
<td> 4.75</td>
<td> 5.0</td>
<td> 5.25</td>
<td> VDC</td>
</tr>
<tr>
<td scope="row"> スリープモード時の電流</td>
<td colspan="3"> 1</td>
<td> uA</td>
</tr>
<tr>
<td scope="row"> 出力電力</td>
<td> 1</td>
<td> -</td>
<td> 20</td>
<td> dB</td>
</tr>
<tr>
<td scope="row"> 通信速度</td>
<td> 1.2</td>
<td>  -</td>
<td> 115.2</td>
<td> Kbps</td>
</tr>
<tr>
<td scope="row"> 伝送距離（最大）</td>
<td colspan="3"> 1</td>
<td> Km</td>
</tr>
<tr>
<td scope="row"> 感度</td>
<td colspan="3"> -117</td>
<td> dBm</td>
</tr>
<tr>
<td scope="row"> 通信プロトコル</td>
<td colspan="3">  UART</td>
<td> /</td>
</tr>
<tr>
<td scope="row"> 動作温度</td>
<td> -40</td>
<td>  -</td>
<td> +85</td>
<td> ℃</td>
</tr>
</table>

## インターフェース機能

---
![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Serial_RF_Pro1.jpg)

<table >
<tr>
<th> パッドタイプ (5V ロジックレベル)</th>
<th> 説明</th>
</tr>
<tr>
<td width="100px"> G(GND)</td>
<td width="450px"> グランドポート</td>
</tr>
<tr>
<td> EN(ENABLE)</td>
<td> 通常モード（データ送受信）ではLowに設定（デフォルトは10kでGNDに接続）。
スリープモードにするにはHighに設定。</td>
</tr>
<tr>
<td> CON(CONFIG)</td>
<td> 設定モードではLowに設定（GNDに接続）。
通信モードではHighに設定（デフォルトはHigh）。</td>
</tr>
<tr>
<td> RX</td>
<td> UARTデータ入力</td>
</tr>
<tr>
<td> TX</td>
<td> UARTデータ出力</td>
</tr>
<tr>
<td> V(VCC)</td>
<td> 5V(+)電源用に設計</td>
</tr>
<tr>
<td> AT</td>
<td> アンテナピン</td>
</tr>
</table>

## はじめに

---
ここでは、2つのRF Pro Groveユニットが相互にデータを送受信するデモを紹介します。このデモを行うには、2つのRF Pro Groveユニットと2つのSeeeduinoが必要です。

* 1つのGrove - Serial RF Proを[Grove - Base Shield](https://wiki.seeedstudio.com/ja/Base_Shield_V2/)のUARTに接続し、Grove - Base ShieldをSeeeduinoに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Rfdemo.jpg)

* もう1つのGrove - Serial RF Proを同じ方法でSeeeduinoに接続します。

### 設定および問い合わせ方法

ENABLEピンがLOW、CONFIGピンがLOWの場合、モジュールは設定状態になります。赤と緑のLEDが点灯し続けると、設定状態に入ります。この状態でモジュールの設定および問い合わせを行うことができます。

* CONピンをLOW/GNDに接続して設定モードに入ります。

* コマンドを送信してモジュールの設定を変更したり、設定を問い合わせたりします。設定および問い合わせの指示については[Reference](https://wiki.seeedstudio.com/ja/Grove-Serial_RF_Pro/#reference)を参照してください。

設定指示のフォーマットは、AA+FA+[指示]+[パラメータ]です。指示は1バイト、パラメータは0～4バイトのHEXデータ（ビッグエンディアン順、高位バイトが先）です。

**注意:**

1) UARTの転送速度（デフォルトは9600、変更しない方が良い）を変更する場合は、必ず覚えておいてください。変更しないとモジュールを制御できなくなります。指示の転送速度もUARTの転送速度に応じて変更されます。指示の転送速度の範囲は1.2Kbps～115.2Kbpsです。

2) LEDの機能説明:

- 赤と緑のLEDは、電源が入りモジュールが動作しているときに点滅します。
* EN（ENABLE）ピンがLOW（デフォルトはLOW）、CON（Config）ピンがLOWの場合、モジュールは設定モードになります。設定モードでは、赤と緑のLEDが点灯し続けます。
* モジュールが設定モードでない場合、赤と緑のLEDは点灯し続けません。
* モジュールがデータを送信しているとき、赤いLEDが点滅します。送信が終了すると赤いLEDは消灯します。
* モジュールがデータを受信待機中の場合、緑のLEDは消灯します。データを受信すると緑のLEDが一度点滅します。

### 通信モード

以下のコードをSeeeduinoにアップロードしてください。アップロード方法が分からない場合は[こちら](https://wiki.seeedstudio.com/ja/Upload_Code)をクリックしてください。

```cpp
// データ送信ルーチン

// コンピュータとSoftSerial Shield間のリンク
// 9600 bps 8-N-1
// コンピュータはハードウェアUARTに接続
// SoftSerial ShieldはソフトウェアUART:D2&D3に接続

#include <SoftwareSerial.h>

SoftwareSerial SoftSerial(11, 10); // TX, RX
int buffer[64];
int count=0;
void setup()
{
    SoftSerial.begin(9600);               // SoftSerialのボーレート
    Serial.begin(9600);             // Arduinoのシリアルポートのボーレート
}

void loop()
{
    delay(1000);
    SoftSerial.write(0xAA);
    SoftSerial.write(0xFA);
    SoftSerial.write(0xE1);

    if (SoftSerial.available())              // ソフトウェアシリアルポートからデータが来ている場合
    {
        while(SoftSerial.available())          // データをchar配列に読み込む
        {
            buffer[count++]=SoftSerial.read();     // 配列にデータを書き込む
            if(count == 64)break;
        }
        for (int i=0; i<count; i++) {
            Serial.print(buffer[i],HEX);            // データ送信が終了していない場合、バッファをハードウェアシリアルポートに書き込む
        }
        clearBufferArray();              // 配列に保存されたデータをクリアする関数を呼び出す
        count = 0;                       // whileループのカウンタをゼロに設定
    }
    if (Serial.available())            // ハードウェアシリアルポートにデータがある場合
    SoftSerial.write(Serial.read());       // SoftSerial Shieldに書き込む
    Serial.println("...");
}
void clearBufferArray()              // 配列をクリアする関数
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // 配列のすべてのインデックスをNULLでクリア
}
```

* シリアルモニタを開くと、以下のように表示されます。

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Communication_result.jpg)

## 参考

---
以下の表は、Serial RF Pro v0.9bとのやり取りに関わるコマンドと応答を示しています。

<table>
  <tbody><tr>
      <th>命令(HEX)</th>
      <th>説明</th>
      <th>設定命令(HEX)</th>
      <th>返却値</th>
    </tr>
    <tr>
      <td>F0</td>
      <td>デフォルトパラメータにリセット（UART転送速度を除く）、パラメータは後続しない</td>
      <td width="400px">AA FA F0</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
    </tr>
    <tr>
      <td>E1</td>
      <td>現在の設定パラメータを読み取る、パラメータは後続しない</td>
      <td>AA FA E1</td>
      <td>16バイト: (**以下の順序に従う**) 動作周波数-4バイト, 無線データレート-4バイト, 受信帯域幅-2バイト, 周波数偏差-1バイト, 送信電力-1バイト, UART転送速度-4バイト</td>
    </tr>
    <tr>
      <td>D2</td>
      <td>動作周波数を設定，[パラメータ]4バイト，[パラメータ]単位: Hz。設定範囲: *HM-TRP-433: 414000000-454000000Hz; *HM-TRP-470: 450000000-490000000Hz; *HM-TRP-868: 849000000-889000000Hz; *HM-TRP-915: 895000000-935000000Hz</td>
      <td>例: *設定命令: AA FA D2 **36 89 CA C0**, 周波数を915000000Hzに設定。(**0x36 89 CA C0=915000000**) *設定命令: AA FA D2 **19 DE 50 80**, 周波数を434000000Hzに設定。(**0x19 DE 50 80=434000000**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
    </tr>
    <tr>
      <td>C3</td>
      <td>無線データレートを設定，[パラメータ]4バイト，[パラメータ]単位: bps。設定範囲:1200-115200 bps</td>
      <td>例: *設定命令: AA FA C3 **00 00 25 80**,転送速度を9600bpsに設定。(**0x00 00 25 80=9600**) *設定命令: AA FA C3 **00 00 96 00**, 転送速度を38400bpsに設定。(**0x00 00 96 00=38400**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
    </tr>
    <tr>
      <td>B4</td>
      <td>受信帯域幅を設定，[パラメータ]2バイト，[パラメータ]単位: KHz 設定範囲:30-620KHz</td>
      <td>例: *設定命令: AA FA B4 **00 69**, 受信帯域幅を105KHzに設定。(**0x00 69=105**) *設定命令: AA FA B4 **01 2C**, 受信帯域幅を300KHzに設定。(**0x01 2C=300**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
    </tr>
    <tr>
      <td>A5</td>
      <td>周波数偏差を設定，[パラメータ]1バイト，[パラメータ]単位: KHz 設定範囲:10-160KHz</td>
      <td>例: *設定命令: AA FA A5 **23**, 変調周波数を35KHzに設定。(**0x23=35**) *設定命令: AA FA A5 **32**, 変調周波数を50KHzに設定。(**0x32=50**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
    </tr>
    <tr>
      <td>96</td>
      <td>送信電力を設定 ,[パラメータ]1バイト，0~7レベル 設定範囲:0-7レベル(1-20 dBm)</td>
      <td>例: *設定命令: AA FA 96 **07**, 送信電力をレベル7 (+20 dBm)に設定 *設定命令:AA FA 96 **03**, 送信電力をレベル3 (+8 dBm)に設定 送信電力レベル表: 7=+20dBm, 6=+17dBm, 5=+14dBm, 4=+11dBm, 3=+8dBm, 2=+5dBm, 1=+2dBm, 0=+1dBm</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
    </tr>
    <tr>
      <td>1E</td>
      <td>UART転送速度を設定，[パラメータ]4バイト，[パラメータ]単位: bps 設定範囲:1200-115200 bps</td>
      <td>例: *設定命令 :AA FA 1E **00 00 25 80**,転送速度を9600bpsに設定。(**0x00 00 25 80=9600**) *設定命令 :AA FA 1E **00 00 96 00**, 転送速度を38400bpsに設定。(**0x00 00 96 00=38400**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
    </tr>
    <tr>
      <td>87</td>
      <td>有効データを受信する際の無線信号強度、[パラメータ]は後続しない</td>
      <td>設定命令：AA FA 87 ![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/WirelesssignalstrengthRSSI.jpg)</td>
      <td>RSSI値は8ビット、範囲: 0-255</td>
    </tr>
    <tr>
      <td>78</td>
      <td>無線信号強度の妨害、[パラメータ]は後続しない 注意： *変調指数 : h = Fd/Rb, 範囲は0.5 ~ 32。 *h&gt;1の場合、BW =Rb+2Fd; h&lt;1の場合、BW =2Rb+ Fd。</td>
      <td>設定命令：AA FA 78</td>
      <td>RSSI値は8ビット , 範囲: 0-255</td>
    </tr>
  </tbody>
</table>

## リソース

* **[コード]** [Serial RF Pro デモコード](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/Grove-Serial_RF_Pro_Demo_Code.zip)

* **[データシート]** [HopeRF HM-TRP シリーズ 100mW トランシーバーモジュール V1.0 データシート](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/HM-TRP-RS232_enV1.0_20120604.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>