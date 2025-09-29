---
title: Grove - 433MHz Simple RF Link Kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-433MHz_Simple_RF_Link_Kit/
slug: /ja/Grove-433MHz_Simple_RF_Link_Kit
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/433MHz_Simple_RF.jpg)

このキットは、433MHzの周波数で一方向の無線通信を行うためのもので、送信モジュールと受信モジュールが含まれています。このキットのTwig構成により、屋内で約40メートル、屋外で約100メートルの送信距離が可能です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-433MHz-Simple-RF-link-kit-p-1062.html)

バージョントラッカー
----------------------

| リビジョン | 説明                     | リリース日       |
|------------|--------------------------|------------------|
| v0.9b      | 初回公開リリース         | 2011年10月3日    |

特徴
----

- GROVE互換インターフェース
- ASK（振幅偏移変調）を使用
- 一方向通信

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

仕様
----

### 送信モジュール

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
12.0
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
電流
</th>
<td>
3
</td>
<td>
/
</td>
<td>
10
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
動作モード
</th>
<td colspan="3">
ASK
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
送信出力（最大）
</th>
<td colspan="3">
15
</td>
<td>
mW
</td>
</tr>
<tr align="center">
<th scope="row">
動作距離
</th>
<td>
40
</td>
<td>
/
</td>
<td>
100
</td>
<td>
m
</td>
</tr>
</table>

### 受信モジュール

| 項目                  | 標準値 | 単位 |
|-----------------------|--------|------|
| 動作電圧             | 5      | VDC  |
| 待機電流             | 5      | mA   |
| 受信感度             | -105   | dBm  |
| 動作周波数           | 433.92 | MHz  |

応用例
------

- リモートコントロール
- リモートオートメーション
- アラーム

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記に記載されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

はじめに
--------

送信モジュールと受信モジュールはどちらも単一のワイヤで通信を行います。Arduinoプラットフォームが提供するUARTを使用することも可能ですが、代わりにAmplitude Shift Keyingを使用して通信を改善するVirtualWireライブラリを使用することをお勧めします。

送信モジュールと受信モジュールの両方には、Vcc、Ground、信号の3本のワイヤが必要です。キットの両方のパーツのピン2は接続されていません。

- 送信モジュールを使用するArduinoのGrove-Base Shield V2のデジタルI/O 2に接続します。

サムネイル作成エラー: 無効なサムネイルパラメータ

- 受信モジュールを受信側のArduinoのGrove-Base Shield V2のデジタルI/O 2に接続します。

サムネイル作成エラー: 無効なサムネイルパラメータ

- [VirtualWireライブラリ](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)をダウンロードし、Arduino IDEのライブラリフォルダに解凍します。パスは次のようになります: ..\\arduino-1.0\\libraries。詳細は[こちら](http://www.pjrc.com/teensy/td_libs_VirtualWire.html)を参照してください。
- 以下のコードを送信モジュール用にアップロードします：

```
    #include <VirtualWire.h>

    //Grove - 315(433) RF link kit Demo v1.0
    //by :https://www.seeedstudio.com/
    //送信モジュールをD2に接続して使用
    #include <VirtualWire.h>
     
    int RF_TX_PIN = 2;
     
    void setup()
    {
      vw_set_tx_pin(RF_TX_PIN); // 送信ピンを設定
      vw_setup(2000); // 送信速度（ビット/秒）
    }
     
    void loop()
    {
      const char *msg = "hello";
      vw_send((uint8_t *)msg, strlen(msg));  // 400msごとに「hello」を送信
      delay(400);
     
    }
```

- 以下のコードを受信モジュール用にアップロードします：

```
    //Grove - 315(433) RF link kit Demo v1.0
    //by :https://www.seeedstudio.com/
    //受信モジュールをD2に接続して使用
    #include <VirtualWire.h>
     
    int RF_RX_PIN = 2;
     
    void setup()
    {
      Serial.begin(9600);
      Serial.println("setup");
      vw_set_rx_pin(RF_RX_PIN);  // 受信ピンを設定
      vw_setup(2000); // 送信速度（ビット/秒）
      vw_rx_start(); // PLL受信機を開始
    }
     
    void loop()
    {
      uint8_t buf[VW_MAX_MESSAGE_LEN];
      uint8_t buflen = VW_MAX_MESSAGE_LEN;
      if(vw_get_message(buf, &buflen)) // 非ブロッキングI/O
      {
        int i;
        // チェックサムが正しいメッセージを受信、HEXでダンプ
        Serial.print("Got: ");
        for(i = 0; i < buflen; ++i)
        {
          Serial.print(buf[i], HEX);
          Serial.print(" ");
          //Serial.print(buf[i]);
        }
        Serial.println("");
      }
    }
```

- 受信モジュールのシリアルモニターを開いて結果を確認してください。

![](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

これは参考用としての単純な送信機と受信機の例です。

リソース
---------

- [VirtualWire Library.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)
- [433MHz_demo.zip](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)
- [VirtualWire Documentation](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/1110010P1.pdf)
- [R433A Datasheet](https://files.seeedstudio.com/wiki/Grove-433MHz_Simple_RF_Link_Kit/res/ADI;ACTR433A.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_433MHz_Simple_RF_Link_Kit から作成されました -->

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