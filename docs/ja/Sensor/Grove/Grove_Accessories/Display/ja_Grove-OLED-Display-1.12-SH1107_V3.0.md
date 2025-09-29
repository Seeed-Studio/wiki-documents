---
description: Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
title: Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-OLED-Display-1.12-SH1107_V3.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" />
</div>

Grove - OLED Display 1.12 V3.0 (SH1107) は、128×128 の解像度を持つ**モノクロ**ディスプレイです。LCD と比較して、OLED（有機発光ダイオード）には自己発光、高コントラスト比、薄型設計、広視野角、低消費電力など多くの利点があります。このディスプレイは 3.3V と 5V の両方の電源電圧で動作します。**I2C** または **SPI** インターフェースを使用して、マイクロコントローラーでディスプレイを点灯させ、文字や画像などを表示することができます。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)

## 特徴

- 3.3V/5V 電源供給対応
- I2C アドレスの変更可能
- SPI 対応
- 低消費電力
- モノクロ 128×128 ピクセル
- 高コントラスト、高輝度
- 広い動作温度範囲：-40℃ ~ +85℃

## バージョン
---
| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
|Grove - OLED Display 1.12" V1.0 | 初期バージョン                                                                                                                                                                                    | 2012年3月      |
|Grove - OLED Display 1.12" V2.1 | ドライバ IC を SSD1327 から SH1107G に変更、グレースケールピクセルを 96×96 から 128×128 にアップグレード | 2015年11月     |
|Grove - OLED Display 1.12" V3.0 | ドライバ IC を SSD1107G から SH1107 に変更、インターフェースを I2C から I2C/SPI にアップグレード | 2021年7月     |

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 対応プラットフォーム
---

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### ハードウェア

ここでは、Grove - OLED Display を使用した簡単なデモを通じて、このモジュールの動作を説明します。まず、以下のものを準備してください：

| Seeeduino V4 | Grove - OLED Display 1.12`` V3.0 | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

このモジュールは使いやすく、Base Shield の I2C ポートに接続するだけで使用できます。以下のように 4 つのピンが定義されています。

|ピン|機能  | 説明   | ケーブル色 |
|--------|------|-----|---------------|
|pin1	| SCL | I2C クロック | 黄色 |
|pin2   | SDA| I2C データ| 白色|
|pin3   | VCC  | 電源, 5V/3.3V| 赤色 |
|pin4	| GND  | グラウンド | 黒色 |

**ハードウェア概要 (I2C)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2185.JPG" />
</div>


### **ソフトウェア (I2C)**

- **ステップ 1.** Grove - OLED Display 1.12'' V3.0 を Grove ケーブルを使って Base Shield の **I2C** ポートに接続します。

- **ステップ 2.** Arduino IDE を開き、ライブラリマネージャー **(スケッチ > ライブラリを含む > ライブラリを管理)** を使用して u8g2 ライブラリをインストールします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **ステップ 3.** 検索フィールドに "**u8g2**" と入力し、最新バージョンを選択して「インストール」ボタンをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **ステップ 4.** 以下のデモコードを Arduino IDE にアップロードします。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::success
       すべてが正常に動作すれば、Grove - OLED Display 1.12'' の画面に「Hello Seeed!」と表示されます。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>


:::note
        Base Shield をお持ちでない場合でも、[Seeeduino Vx シリーズ](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) の **I2C インターフェース**を使用することで動作します。
:::

**ハードウェア概要 (SPI)**

- **ステップ 1.** オスヘッダーをはんだ付けし、ワイヤーを接続します。

- **ステップ 2.** **黄色**のラインに従って基板上のワイヤーを切断し、**白色**のラインに従って SPI パネルと中央のパネルを順番にはんだ付けします。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
    **注意**: **黄色**のラインに従ってワイヤーを 1 本ずつ慎重に切断してください。そうしないと、ディスプレイ全体が損傷する可能性があります。拡大鏡を使用してワイヤーを切断することをお勧めします。
:::
**注意**: これはワイヤーを切断する間違った方法です！

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** 写真に従ってディスプレイと Seeeduino をワイヤーで接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/wires.png" />
</div>


- **ステップ 4.** USB ケーブルを使用して Seeeduino を PC に接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2188.JPG" />
</div>


### ソフトウェア (**SPI**)

- **ステップ 1.** Arduino IDE を開き、ライブラリマネージャー **(スケッチ > ライブラリを含む > ライブラリを管理)** を使用して u8g2 ライブラリをインストールします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **ステップ 2.** 検索フィールドに "**u8g2**" と入力し、最新バージョンを選択して「インストール」ボタンをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **ステップ 3.** 以下のデモコードを Arduino IDE にアップロードします。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>
 
U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

:::success
       すべてが正常に動作すれば、Grove - OLED Display 1.12'' の画面に「Hello Seeed!」と表示されます。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG" />
</div>

## RaspberryPiでのプレイ

**必要な材料**


| Raspberry Pi | Grove Base Hat for Raspberry Pi | Grove - OLED Display 1.12" V3.0 |
|--------------|---------------------------------|----------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### RaspberryPiの準備

#### I2C接続

- **ステップ1.** OLED Yellow&Blue Display 0.96" を Grove - Base Hat の **I2C** ポートに接続します。

- **ステップ2.** Grove - Base Hat を RaspberryPi に接続します。

- **ステップ3.** RaspberryPi を PC にシリアルまたはSSHで接続します。

#### SPI接続

- **ステップ1.** Grove - Base Hat 上の配線を以下の表に従って接続します。

| Grove - OLED Display 1.12" V3.0 ピン | Raspberry Pi GPIO | BCM2835コード |
|-------------------------------------|-------------------|---------------|
| VCC | 3.3V | 3.3V |
| GND | GND | GND |
| SI | MOSI | 10 |
| SCL | SCLK | 11 |
| CS | CE0 | 8 |
| DC | GPIO.6 | 25 |
| RES | GPIO.2 | 27 |

- **ステップ2.** Grove - Base Hat を RaspberryPi に接続します。

- **ステップ3.** RaspberryPi を PC にシリアルまたはSSHで接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ1.** RaspberryPiでI2CとSPIを有効化します

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

以下の画像に従って、RaspberryPiでI2CとSPIを有効化してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>
 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg" alt="pir" width={600} height="auto" /></p>

その後、RaspberryPiを再起動します。

```shell
sudo reboot
```

- **ステップ2.** 必要なライブラリをインストールします

```shell
sudo apt-get install wget gcc make unzip -y
```

WiringPiライブラリをインストールします

*WiringPiを使用する場合、バージョン2.52に更新する必要があります。このライブラリは更新されない可能性があります。他のライブラリを推奨します。*
```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

bcm2835をインストールします

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

最新のライブラリや詳細情報については、以下のウェブサイトを参照してください：[bcm2835](http://www.airspayce.com/mikem/bcm2835/)

- **ステップ3.** デモコードをダウンロードします

**1.** [**I2C**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip)の場合

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip
mkdir I2C
unzip RaspberryPiI2C.zip ./I2C/
cd ./I2C/RaspberryPiI2C/c/
sudo chmod 777 test.sh
./test.sh
```

**2.** [**SPI**](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip)の場合

```shell
wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip
mkdir SPI
unzip RaspberryPiSPI.zip ./SPI/
cd ./SPI/RaspberryPiSPI/c/
sudo chmod 777 test.sh
./test.sh
```

さらにデモを楽しみたい場合は、以下のビデオクリップもあります。

```shell
sudo chmod 777 badapple.sh
./badapple.sh
```
<iframe width={560} height={315} src="https://www.youtube.com/embed/mHhZgUNkPM0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## U8g2ライブラリの紹介

U8g2は、組み込みデバイス向けのモノクログラフィックスライブラリです。U8g2は、SSD1327/SH1107Gチップを含むモノクロOLEDおよびLCDをサポートしています。

ArduinoライブラリのU8g2は、Arduino IDEのライブラリマネージャーからインストールできます。U8g2にはU8x8ライブラリも含まれています：

**U8g2**

- すべてのグラフィックス手続き（線/ボックス/円の描画）を含みます。
- 多くのフォントをサポートします。フォントの高さにほぼ制限がありません。
- ディスプレイをレンダリングするためにマイクロコントローラー内にいくらかのメモリが必要です。

**U8x8**

- テキスト出力のみ（文字）デバイス。
- 8x8ピクセルグリッドに収まるフォントのみが許可されます。
- ディスプレイに直接書き込みます。マイクロコントローラー内にバッファは必要ありません。

以下に[**U8g2ライブラリwiki**](https://github.com/olikraus/u8g2/wiki)および[U8g2 APIリファレンス](https://github.com/olikraus/u8g2/wiki/u8g2reference)ページを提供します。



## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---------
* **[Eagle]** [Eagle形式のGrove-OLED Display 1.12インチ](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip)
* **[PDF]** [Grove-OLED Display 1.12インチ V3.0 回路図](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.pdf)
* **[データシート]** [SH1107データシート](https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/SH1107V2.1.pdf)

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>