---
description: Arch Link
title: Arch Link
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_Link
last_update:
  date: 05/15/2025
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_Link/img/1020800061.jpg)

**Arch Link**は、Nordic nRF51822とWIZnet W5500イーサネットインターフェースを基盤としたmbed対応の開発ボードです。Arduinoのフォームファクター、Groveコネクタ、micro SDインターフェースを備えており、Bluetooth Low Energyデバイスを非常に簡単に作成できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-Link-p-2511.html)

特徴
--------

- mbed対応
  - オンラインIDE
  - 使いやすいC/C++ SDK
  - 便利なライブラリ
- LPC11U35に基づくCMSIS DAP
  - ドラッグ＆ドロッププログラミング
  - CMSIS DAP標準を使用したデバッグ
  - 通信用のUSB仮想シリアル
- Groveコネクタを備えたArduinoフォームファクター
  - ボード上にI2CおよびUARTコネクタ
- Nordic nRF51822 マルチプロトコルBluetooth® 4.0 Low Energy/2.4GHz RF SoC
  - ARM Cortex M0プロセッサ
  - 256kBフラッシュ/16kB RAM
  - デジタルI/O用のI/Oマッピングを設定可能
- WIZnet W5500イーサネット
  - 以下のハードウェアTCP/IPプロトコルをサポート：TCP、UDP、ICMP、IPv4、ARP、IGMP、PPPoE
  - パワーダウンモードをサポート
  - UDP経由のWake on LANをサポート
  - 高速シリアルペリフェラルインターフェース（SPI MODE 0, 3）をサポート
  - Tx/Rxバッファ用の内部32Kバイトメモリ
  - 10BaseT/100BaseTXイーサネットPHY内蔵
  - RJ45コネクタ付き
- USB Micro Bコネクタ
- Micro SDカードコネクタ

ハードウェア概要
------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Arch_link_pinout.png)

始め方
-----------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Get_started_with_mbed.png)

1. [このリンク](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE)をクリックして**mbedにログインまたはサインアップ**します。
2. mbed_blinkyプログラムをインポートします。
3. 上部ツールバーの**Compile**アイコンをクリックしてプログラムをコンパイルし、コンパイルされたhexファイルをダウンロードします。
4. ダウンロードしたhexファイルをMBEDディスクにドラッグ＆ドロップします。

**main.cpp**を開いてプログラムを変更することができます。例えば、以下のコードを使用してLEDを0.1秒ごとに点滅させることができます。

```
    #include "mbed.h"

    DigitalOut led(p30);           // オンボードLEDはp30に接続されています

    int main()
    {
        while (true) {
            led = !led;
            wait(0.1);
        }
    }
```

<div className="admonition note">
<p className="admonition-title">注意</p>
<p>'device.h'が見つからないというコンパイルエラーが発生した場合は、プログラム内のmbedライブラリを最新のリビジョンに更新してみてください。</p>
</div>

アプリケーション
------------

1. Color Pixelsは、カラフルなLEDストリップをモバイルフォンで制御できます。

    - ハードウェア
        - Arch Link
        - [デジタルRGB LEDストリップ](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        - BLE対応のAndroidデバイス

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Ble_color_pixels_bb.png)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Color_pixels_app.png)

    - 実行方法

        1. [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)をダウンロードします。
        2. hexファイルをArch BLEのMBEDディスクにコピーします。
        3. [Color Pixels Androidアプリ](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)をダウンロードします。

       プログラムを変更したい場合は、[このリンク](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE)をクリックしてColor PixelsプログラムをmbedオンラインIDEにインポートしてください。

       BLEデバイスが頻繁に切断される場合は、BLEパラメータ（Advertising Duration（main.cpp）、Min IntervalおよびMax Interval（nRF51822/projectconfig.h））を変更することで安定性を向上させることができます。

        ```c
        #define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< 許容される最小接続間隔 */
        #define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< 許容される最大接続間隔 */
        ```

2. Arch Link をウェブダッシュボードとして使用できます。

   ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Arch_link_application1.png)

3. Arch Link をモバイルアプリのダッシュボードとしても使用できます。

   ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Arch_link_application2.png)

ファームウェアの更新または復元
--------------------------

Arch Link の最新ファームウェアバージョンは v0203（2015年6月4日ビルド）です。ファームウェアのバージョンとビルド日を確認するには、MBED ディスクの MBED.HTM または DETAILS.TXT をテキストエディタで開いてください。

変更履歴:

- 2015-06-4 初版リリース

ファームウェア:

Arch Link 用ファームウェア v0203 2015-06-04  
新しいファームウェアをフラッシュする手順:

- Arch Link のボタンを押しながら電源を入れる
- CRP DISABLD ディスクが表示されます
  - Windows の場合、`firmware.bin` を上記のファームウェアに置き換える
  - Linux/Mac の場合、以下のコマンドを使用:
    ```bash
    dd if={new_firmware.bin} of={firmware.bin} conv=notrunc
    ```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Arch Link mbed 開発者プラットフォームページ](https://developer.mbed.org/platforms/Seeed-Arch-Link/)
- [PDF形式の回路図](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_sch.pdf)
- [EAGLE形式の回路図と基板ファイル](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.rar)
- [LPC11U35 ファームウェア](https://files.seeedstudio.com/wiki/Arch_Link/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
- [Android 用 Seeed BLE カラーピクセルアプリ](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
- [BLE カラーピクセルアプリのソースコード](https://github.com/Seeed-Studio/ble_color_pixels)

関連リンク
--------

- [Arch BLE](/ja/Arch_BLE)
- [W5500 Ethernet Shield](/ja/W5500_Ethernet_Shield_v1.0)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Arch_Link から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>