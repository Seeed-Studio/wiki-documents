---
description: XIAO ESP32-S3 Plus から、空いている D13 と D3 パッド上の U8g2 ソフトウェア I2C で reSpeaker XVF3800 44mm の 128x64 SSD1306 OLED を駆動し、D4/D5 の XVF3800 バスには触れません。
title: XIAO ESP32-S3 Plus を用いた reSpeaker XVF3800 44mm の I2C OLED ディスプレイ
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2C ディスプレイ
  - SSD1306
  - U8g2
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_i2c_display
sku: 100066841,100065276
last_update:
  date: 11/25/2026
  author: Kasun Thushara
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_i2c_display/
---
# XIAO ESP32-S3 Plus を用いた reSpeaker XVF3800 44mm の I2C OLED ディスプレイ

このスケッチは XIAO ESP32-S3 Plus から 128×64 の SSD1306 OLED を駆動し、**HELLO!** を表示します。ディスプレイは空いている **D13** と **D3** のパッドに接続し、U8g2 はソフトウェア（ビットバンギング）I2C ドライバで通信します。そのため、XIAO が XVF3800 と D4/D5 で共有する I2C バスには触れません。より大きなオーディオスケッチにステータス出力を追加する前に、ディスプレイの配線と U8g2 ライブラリを確認するために使ってください。

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="XIAO ESP32-S3 Plus を搭載した reSpeaker XVF3800 44mm" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

- ESP32 ボードパッケージをインストールした Arduino IDE。[ソフトウェアの準備](https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_getting_started/#ソフトウェアの準備) を参照してください。
- **Sketch > Include Library > Manage Libraries** から、oliver による **U8g2** ライブラリをインストールします。
- デフォルトアドレスが `0x3C` の 128×64 SSD1306 I2C OLED モジュール。
- 3V3、GND、SDA、SCL 用のジャンパワイヤ 4 本。
- ボードに **XIAO_ESP32S3_Plus** を選択し、ポート番号を選択する必要があります。

:::note
このスケッチは XVF3800 と通信しないため、どのファームウェアイメージでも動作し、I2S イメージで問題ありません。D4/D5 は XVF3800 への I2C バスを、D12 はその割り込みを担っているため、ディスプレイには空いている D13/D3 パッドを使います。
:::

## 配線

| OLED ピン | XIAO パッド | ESP32-S3 GPIO |
|----------|----------|---------------|
| `VCC` | `3V3` | — |
| `GND` | `GND` | — |
| `SDA` | `D13` | GPIO40 |
| `SCL` | `D3` | GPIO4 |

ジャンパ線は短くしてください。ソフトウェア I2C ドライバは CPU から信号線をトグルするため、線が長すぎる、または接触が悪いと、画面が空白になったり表示が乱れたりする一般的な原因になります。

## Arduino スケッチ

```c
#include <U8g2lib.h>

#define SDA_PIN D13
#define SCL_PIN D3

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(
  U8G2_R0,
  SCL_PIN,
  SDA_PIN,
  U8X8_PIN_NONE
);

void setup() {
  u8g2.setI2CAddress(0x3C << 1);
  u8g2.begin();

  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB14_tr);
  u8g2.drawStr(10, 30, "HELLO!");
  u8g2.sendBuffer();
}

void loop() {
}
```

## 期待される出力

OLED が点灯し、パネルの上半分に **HELLO!** と表示されます。

```text
HELLO!
```

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
