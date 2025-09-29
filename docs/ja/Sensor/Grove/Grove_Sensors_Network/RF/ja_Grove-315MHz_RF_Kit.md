---
title: Grove - 315MHz RF Kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-315MHz_RF_Kit/
slug: /ja/Grove-315MHz_RF_Kit
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/img/315MHz-Simple-RF-Link-Kit.jpg)

このキットは、315MHzの周波数で一方向の無線通信を行うためのもので、送信モジュールと受信モジュールが含まれています。このキットのTwig構成により、屋内で約40メートル、屋外で約100メートルの送信距離が可能です。315MHzの周波数は、米国ではライセンスなしで使用するのに適しています。ヨーロッパで使用する場合は、この製品の433MHzバージョンをご覧ください。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-315MHz-Simple-RF-Link-Kit-p-1061.html)

特徴
--------

- GROVE互換インターフェース
- ASK（振幅変調）を使用
- 一方向通信

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
-----------------

- リモートコントロール
- リモートオートメーション
- アラーム

機械的寸法
-------------------

- 受信機：24mm x 42mm
- 送信機：20mm x 24mm

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で示されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

送信機と受信機モジュールはどちらも単一のワイヤーで通信を行います。Arduinoプラットフォームが提供するUARTを使用することも可能ですが、代わりにAmplitude Shift Keyingを使用するVirtualWireライブラリを使用することを推奨します。これにより、より良い通信が可能になります。

送信機と受信機モジュールはどちらも3本のワイヤー（Vcc、Ground、Signal）が必要です。キットの両方の部品のピン2は接続されていません。

### ハードウェアのインストール

送信機モジュールを使用するArduinoのGrove-Base Shield V2のデジタルI/O 2に接続します。

受信機モジュールを受信するArduinoのGrove-Base Shield V2のデジタルI/O 2に接続します。

### プログラミング

送信機のサンプルコード：

```
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

受信機のサンプルコード：

```
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
    // チェックサムが正しいメッセージを受信、HEXをダンプ
    Serial.print("Got: ");
    for(i = 0; i < buflen; ++i)
    {
      Serial.print(buf[i], HEX);
      Serial.print(" ");
    }
    Serial.println("");
  }
}
```

リソース
---------

- デモコード: [433MHz demo.zip](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/433MHz_demo.zip "File:433MHz demo.zip")
- [VirtualWire 1.27](http://www.airspayce.com/mikem/arduino/VirtualWire/VirtualWire-1.27.zip)
- [VirtualWire ドキュメント](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)
- [TI:LM358PSR](https://files.seeedstudio.com/wiki/Grove-315MHz_RF_Kit/res/1110010P1.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_315MHz_RF_Kit から作成されました -->

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>