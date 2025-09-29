---
description: Grove - OLED イエロー＆ブルーディスプレイ 0.96(SSD1315) - SPI/IIC -3.3V/5V
title: Grove - OLED イエロー＆ブルーディスプレイ 0.96(SSD1315) - SPI/IIC -3.3V/5V
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07.png" alt="pir" width={600} height="auto" /></p>

Grove - OLED イエロー＆ブルーディスプレイ 0.96 (SSD1315) は、**青と黄色**の2色ディスプレイで、解像度は128×64です。LCDと比較して、OLED（有機発光ダイオード）には自己発光、高コントラスト比、薄型設計、広視野角、低消費電力など多くの利点があります。このディスプレイは3.3Vおよび5Vの電源電圧で動作します。**I2C**または**SPI**インターフェースを使用して、マイクロコントローラーでディスプレイを点灯させ、文字や画像、その他表示したいものを表示できます。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)
## 特徴

- 3.3V/5V 電源供給対応
- 変更可能な I2C アドレス
- SPI 対応
- 低消費電力
- 黄色と青の2色、128×64ピクセル
- 高コントラスト、高輝度
- 広い動作温度範囲：-40℃ ~ +85 ℃

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img//10402049_Feature-02.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Feature-02.png" /></a></p>
  </figure>
</div>


## 仕様

| パラメータ | 値 |
|---|---|
| 入力電圧 | 3.3V / 5V |
| 出力電圧 | 0 ~ 2.3V |
| ピクセル | 128 x 64 |
| 温度範囲 | -40℃ ~ +85 ℃ |
| インターフェース | I2C/SPI |

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
| Arduino | Raspberry Pi |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Arduinoで遊んでみよう

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - OLED Yellow&Blue Display 0.96" |
|----------------|-------------|----------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

#### ハードウェア接続 (**I2C**)

- **ステップ 1.** Grove - OLED Yellow&Blue Display 0.96" をGrove - Base Shieldの**I2C**ポートにGroveケーブルを使って接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに接続します。

- **ステップ 3.** SeeeduinoをUSBケーブルでPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/hd.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア (**I2C**)

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** **Sketch** -> **Include Library** -> **Manage Libraries...** に移動し、**Library Manager**で[**U8g2**](https://github.com/olikraus/u8g2)ライブラリを検索してインストールします。

- **ステップ 2.** Arduino IDEを開き、新しいファイルを作成して、以下のコードを新しいファイルにコピーします。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    // ソフトウェアI2C

void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // 内部メモリをクリア
  u8g2.setFont(u8g2_font_luBIS08_tf);   // 適切なフォントを選択
  u8g2.drawStr(0,10,"Hello Seeed!");    // 内部メモリに文字列を書き込む
  u8g2.drawStr(0,30,"Hello Studio!");   // 内部メモリに文字列を書き込む
  u8g2.drawStr(0,50,"Hello World!");    // 内部メモリに文字列を書き込む
  u8g2.sendBuffer();                    // 内部メモリをディスプレイに転送
  delay(100);  
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** OLEDディスプレイは次のように表示されるはずです：

<div align="center"><img src="./hd1.jpg" /></div>

#### **ハードウェア接続 (SPI)**

- **ステップ 1.** オスヘッダーをはんだ付けし、ワイヤーを接続します。

- **ステップ 2.** **黄色の線**に従って基板上のワイヤーを切断し、**白い線**に従ってSPIパネルと中央のパネルを1つずつはんだ付けします。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png" alt="pir" width={600} height="auto" /></p>

:::caution
**黄色の線**に従って1本ずつ慎重にワイヤーを切断してください。そうしないと、ディスプレイ全体が損傷します。拡大鏡の下でワイヤーを切断することをお勧めします。
:::
**注意**: これはワイヤーを切断する間違った方法です！

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** 写真に従ってディスプレイとSeeeduinoをワイヤーで接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/02s.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** SeeeduinoをUSBケーブルでPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア (**SPI**)

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** **Sketch** -> **Include Library** -> **Manage Libraries...** に移動し、**Library Manager**で[**U8g2**](https://github.com/olikraus/u8g2)ライブラリを検索してインストールします。

- **ステップ 2.** Arduino IDEを開き、新しいファイルを作成して、以下のコードを新しいファイルにコピーします。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 12, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8); // ソフトウェアSPI
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // 内部メモリをクリア
  u8g2.setFont(u8g2_font_luBIS08_tf);   // 適切なフォントを選択
  u8g2.drawStr(0,10,"Hello Seeed!");    // 内部メモリに文字列を書き込む
  u8g2.drawStr(0,30,"Hello Studio!");   // 内部メモリに文字列を書き込む
  u8g2.drawStr(0,50,"Hello World!");    // 内部メモリに文字列を書き込む
  u8g2.sendBuffer();                    // 内部メモリをディスプレイに転送
  delay(100);  
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** OLEDディスプレイは以下のように表示されるはずです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/spi2.jpg" /></div>


### RaspberryPiで遊ぶ


**必要な材料**


| Raspberry Pi | Grove Base Hat for Raspberry Pi | Grove - OLED Yellow&Blue Display 0.96"|
|--------------|---------------------------------|---------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Preview-07-thumbnail.png" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

#### **ハードウェア接続(I2C)**

- **ステップ 1.** OLED Yellow&Blue Display 0.96"をGrove - Base Hatの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base HatをRaspberryPiに接続します。

- **ステップ 3.** RaspberryPiをシリアルまたはSSHを介してPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** RaspberryPiでI2Cを有効にする

```shell
sudo apt-get install -y python-smbus
sudo apt-get install -y i2c-tools
sudo raspi-config
```

以下の画像に従って、RaspberryPiでI2Cを有効にしてください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" alt="pir" width={600} height="auto" /></p>

その後、RaspberryPiを再起動します。

```shell
sudo reboot
```

- **ステップ 2.** 必要なライブラリをインストールする

```shell
sudo apt-get install git
sudo apt-get install python-pip python3-pip
sudo apt-get install python-pil python3-pil
sudo pip install Adafruit-BBIO
sudo pip3 install Adafruit-BBIO
sudo pip install Adafruit-SSD1306
sudo pip3 install Adafruit-SSD1306
```

次に、GitHubから**Seeed_Python_SSD1315**をクローンします。

```shell
git clone https://github.com/IcingTomato/Seeed_Python_SSD1315.git
```

デモとして`stats.py`を使用できます。

```shell
cd ~/Adafruit_Python_SSD1306/example/
sudo python stats.py
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpi1.jpg" alt="pir" width={600} height="auto" /></p>

## U8g2ライブラリの紹介

U8g2は、組み込みデバイス向けのモノクログラフィックスライブラリです。U8g2はモノクロOLEDおよびLCDをサポートしており、これにはSSD1315チップも含まれます。

ArduinoライブラリのU8g2は、Arduino IDEのライブラリマネージャーからインストールできます。U8g2にはU8x8ライブラリも含まれています：

**U8g2**

- すべてのグラフィックス手続き（線/ボックス/円の描画）を含みます。
- 多くのフォントをサポートします。フォントの高さにほとんど制限がありません。
- ディスプレイをレンダリングするためにマイクロコントローラー内にある程度のメモリが必要です。

**U8x8**

- テキスト出力専用（文字）デバイス。
- 8x8ピクセルグリッドに収まるフォントのみが許可されます。
- ディスプレイに直接書き込みます。マイクロコントローラー内にバッファは必要ありません。

こちらに[**U8g2ライブラリwiki**](https://github.com/olikraus/u8g2/wiki)および[U8g2 APIリファレンス](https://github.com/olikraus/u8g2/wiki/u8g2reference)ページを提供しています。

## FAQ

**Q1#** 他のボードで例が動作しない？

**A1:** U8g2には初期化時に異なるモードがあります。ハードウェアI2Cの代わりにソフトウェアI2Cを使用することも可能です。動作しない場合は、ソフトウェアI2Cを試してください。詳細については、[u8g2](https://github.com/olikraus/U8g2_Arduino)をご覧ください。また、いくつかの例と簡単な紹介が[こちら](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0)に提供されています。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)_V1.0 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/Grove%20-%20OLED%20Yellow&Blue%20Display%200.96%20(SSD1315)_V1.0.zip)
- **[PDF]** [OLEDモジュールデータシート](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/0.96-30PIN-ZJY096-2864KSWPG01.pdf)
- **[PDF]** [SSD1315データシート](https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/res/SSD1315.pdf)

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