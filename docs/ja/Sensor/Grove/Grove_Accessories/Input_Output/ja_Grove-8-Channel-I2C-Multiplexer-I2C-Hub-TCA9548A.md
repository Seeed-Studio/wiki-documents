---
title: Grove - 8 チャンネル I2C マルチプレクサ/I2C ハブ (TCA9548A)
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/
slug: /ja/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg)

すでに [Grove - I2C Hub (4 Port)](https://www.seeedstudio.com/Grove-I2C-Hub.html) と [Grove - I2C Hub (6 Port)](https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html) をリリースしています。まだ足りないですか？そうですね、もっと多くを求めていることは分かっています。そこで、Grove - 8 チャンネル I2C ハブをお届けします。

さらに重要なのは、これは単なるポート数の積み重ねではありません。ご存知の通り、I2C デバイスは同じバスシステム内で異なるアドレスを使用する必要があります。Grove I2C Hub (4 ポートまたは 6 ポート) を使用しても、このルールは変わりません。しかし、Grove - 8 チャンネル I2C ハブを使用すれば、最大 8 台の同じアドレスの I2C デバイスを同じ Grove I2C システムに接続することができます。これはすべて TCA9548A I2C マルチプレクサチップのおかげです。このチップは時分割多重化技術を採用しており、同じコントローラーで同じアドレスの 8 台の I2C デバイスを制御することが可能です。アドレスの競合を心配する必要はもうありません。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特徴

- 8 つの Grove I2C ポート
- 同じ I2C アドレスを持つ複数のデバイスをサポート
- 3.3V/5V システム対応

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Grove - 8 Channel I2C Hub に接続されたデバイスの I2C アドレスを読み取る

#### 必要な材料

|Seeeduino XIAO|Grove ブレッドボード|Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html)|

また、最大8つの I2C デバイスが必要です。お好きな Grove I2C デバイスを見つけるには [こちら](https://www.seeedstudio.com/catalogsearch/result/?q=i2c) をクリックしてください。
この例では、3つの I2C デバイスを使用します。

#### ハードウェア接続

![](https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-example.jpg)

I2C Hub を Seeeduino XIAO の I2C インターフェースに接続し、各 I2C デバイスを各ハブに接続します。

#### ソフトウェアコード

```cpp
#include "TCA9548A.h"

// ソフトウェア I2C を使用する場合は、TCA9548A.h 内の define SOFTWAREWIRE をコメント解除してください。
#ifdef SOFTWAREWIRE
  #include <SoftwareWIRE.h>
  SoftwareWire myWIRE(3, 2);
  TCA9548A<SoftwareWire> TCA;
  #define WIRE myWIRE
#else   
  #include <Wire.h>
  TCA9548A<TwoWire> TCA;
  #define WIRE Wire
#endif

#define SERIAL Serial

void setup()
{
  SERIAL.begin(115200);
  while(!SERIAL){};

  //WIRE.begin();
  TCA.begin(WIRE);
  // デフォルトではすべてのチャンネルが閉じています
  //TCA.openAll();
  //TCA.closeAll();

  // 開きたいチャンネルを選択します。複数のチャンネルを開くことができます。
  TCA.openChannel(TCA_CHANNEL_0);   //TCA.closeChannel(TCA_CHANNEL_0);
  TCA.openChannel(TCA_CHANNEL_1); //TCA.closeChannel(TCA_CHANNEL_1);
  TCA.openChannel(TCA_CHANNEL_2); //TCA.closeChannel(TCA_CHANNEL_2);
  TCA.openChannel(TCA_CHANNEL_3); //TCA.closeChannel(TCA_CHANNEL_3);
  TCA.openChannel(TCA_CHANNEL_4); //TCA.closeChannel(TCA_CHANNEL_4);
  TCA.openChannel(TCA_CHANNEL_5); //TCA.closeChannel(TCA_CHANNEL_5);
  TCA.openChannel(TCA_CHANNEL_6); //TCA.closeChannel(TCA_CHANNEL_6);
  TCA.openChannel(TCA_CHANNEL_7); //TCA.closeChannel(TCA_CHANNEL_7); 

}

void loop()
{

  uint8_t error, i2cAddress, devCount, unCount;

  SERIAL.println("スキャン中...");

  devCount = 0;
  unCount = 0;
  for(i2cAddress = 1; i2cAddress < 127; i2cAddress++ )
  {
    WIRE.beginTransmission(i2cAddress);
    error = WIRE.endTransmission();

    if (error == 0)
    {
      SERIAL.print("I2C デバイスが見つかりました: 0x");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      devCount++;
    }
    else if (error==4)
    {
      SERIAL.print("不明なエラー: 0x");
      if (i2cAddress<16) SERIAL.print("0");
      SERIAL.println(i2cAddress,HEX);
      unCount++;
    }    
  }

  if (devCount + unCount == 0)
    SERIAL.println("I2C デバイスが見つかりませんでした\n");
  else {
    SERIAL.print(devCount);
    SERIAL.print(" デバイスが見つかりました");
    if (unCount > 0) {
      SERIAL.print(", 不明なエラーが ");
      SERIAL.print(unCount);
      SERIAL.print(" アドレスで発生しました");
    }
    SERIAL.println();
  }
  SERIAL.println();
  delay(1000); 
}
```

- **ステップ 1** リソースからライブラリをダウンロードし、Arduino IDE に「zip」ライブラリを追加します。[Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) を参照してください。

- **ステップ 2** サンプルコードを見つけてボードにアップロードします。[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を参照してください。

- **ステップ 3** コードをアップロードした後、シリアルモニターから各デバイスの I2C アドレスが確認できます。アドレス 0x70 は I2C Hub の I2C アドレスです。
![](https://files.seeedstudio.com/products/103020293/img/Grove-8-channel-I2C-Hub-test-result.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [TCA9548A_DATASHEET](https://files.seeedstudio.com/products/103020293/document/TCA9548A_datasheet.pdf)
- **[PDF]** [ハードウェア回路図](https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-TCA9548A_v1.0_SCH_190814.pdf)
- **[ZiP]** [Grove 8 Channel I2C Hub ライブラリ](https://files.seeedstudio.com/products/103020293/document/Grove_8Channel_I2C_Hub_test_library.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>