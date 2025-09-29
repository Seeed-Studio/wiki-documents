---
description: Grove - OLED Display 0.96" (SSD1315)
title: Grove - OLED Display 0.96" (SSD1315)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-OLED-Display-0.96-SSD1315
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Grove - OLED Display 0.96" (SSD1315) は、Grove I2Cインターフェースを備えたモノクロ（白）128×64ピクセルのパッシブディスプレイマトリックスモジュールです。

新しいSSD1315チップのおかげで、3.3Vで動作可能となり、高価なDC-DC昇圧回路を取り除くことができました。また、オンボードのレベルシフト回路により、新しいGrove - OLED Display 0.96"は3.3Vおよび5Vプラットフォームで動作可能です。つまり、Arduino OLEDディスプレイやRaspberry Pi OLEDディスプレイとして簡単に使用できます。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)

## 特徴

- 3.3V/5V対応
- I2Cアドレス変更可能
- 低消費電力
- モノクロ（白）128×64ピクセル
- 高コントラスト、高輝度
- 広い動作温度範囲：-40℃ ~ +85℃

## 仕様

| パラメータ | 値 |
|---|---|
| 入力電圧 | 3.3V / 5V |
| 出力電圧 | 0 ~ 2.3V |
| ピクセル | 128 x 64 |
| 温度範囲 | -40℃ ~ +85℃ |
| インターフェース | I2C/Digital |

## ハードウェア概要

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpgg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpg" /></a></p>
  </figure>
</div>

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
| Arduino | Raspberry Pi |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - OLED Display 0.96" |
|----------------|-------------|----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

#### ハードウェア接続

- **ステップ 1.** Grove - TDSセンサーをGrove - Base Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに接続します。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** **Sketch** -> **Include Library** -> **Manage Libraries...** に移動し、**`U8g2`**ライブラリを**ライブラリマネージャー**で検索してインストールします。

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


U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);  // 高速I2C

// U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    // 低速I2C

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();					// 内部メモリをクリア
  u8g2.setFont(u8g2_font_ncenB08_tr);	// 適切なフォントを選択
  u8g2.drawStr(0,10,"Hello World!");	// 内部メモリに文字列を描画
  u8g2.sendBuffer();					// 内部メモリをディスプレイに転送
  delay(1000);  
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** OLEDディスプレイは以下のように表示されるはずです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/result.png" /></div>

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

**A1:** U8g2には初期化時に異なるモードがあります。ハードウェアI2Cの代わりにソフトウェアI2Cを使用することもできます。動作しない場合は、ソフトウェアI2Cを試してください。詳細については、[u8g2](https://github.com/olikraus/U8g2_Arduino)をご覧ください。また、いくつかの例と簡単な紹介が[こちら](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0)に提供されています。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - OLED Display 0.96" 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip)
- **[PDF]** [OLEDモジュールデータシート](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/OEL%20Display%20Module.pdf)

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