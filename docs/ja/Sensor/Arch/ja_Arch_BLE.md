---
description: Arch BLE
title: Arch BLE
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arch_BLE
last_update:
  date: 05/15/2025
  author: hushuxu
---


![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE.jpg)

Arch BLEは、Nordic nRF51822をベースにしたmbed対応の開発ボードです。ArduinoのフォームファクターとGroveコネクタを備えており、Bluetooth Low Energy（BLE）デバイスを非常に簡単に作成できます。

nRF51822は、ULPワイヤレスアプリケーション向けの強力なマルチプロトコル単一チップソリューションです。Nordicの最新の高性能無線トランシーバー、ARM Cortex M0 MCU、および256kBフラッシュ+16kB RAMメモリを統合しています。nRF51822は、Bluetooth® Low Energyおよび2.4 GHzプロトコルスタックをサポートしています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-BLE-p-1998.html)

特徴
--------

-   mbed対応
    -  オンラインIDE
    -  使いやすいC/C++ SDK
    -  便利なライブラリ
-   LPC11U35に基づくCMSIS DAP
    -  ドラッグ＆ドロッププログラミング
    -  CMSIS DAP標準を使用したデバッグ
    -  通信用のUSB仮想シリアル
-   ArduinoフォームファクターとGroveコネクタ
-   Nordic nRF51822 マルチプロトコルBluetooth® 4.0 Low Energy/2.4GHz RF SoC
    -  ARM Cortex M0プロセッサ
    -  256kBフラッシュ/16kB RAM
    -  デジタルI/O用の設定可能なI/Oマッピング
-   USB Micro Bコネクタ

ハードウェア概要
------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE_Pinout.png)

始め方
-----------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Get_started_with_mbed.png)

1.  [このリンク](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE)をクリックして**mbedにログインまたはサインアップ**します。
2.  mbed_blinkyプログラムをインポートします。
3.  上部ツールバーの**Compile**アイコンをクリックしてプログラムをコンパイルし、コンパイルされたhexファイルをダウンロードします。
4.  ダウンロードしたhexファイルをMBEDディスクにドラッグ＆ドロップします。

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

-  カラーピクセル：カラフルなLEDストリップを携帯電話で制御できます。

    *  ハードウェア
        -  [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
        -  [デジタルRGB LEDストリップ](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        -  BLE対応のAndroidデバイス

    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Ble_color_pixels_bb.png)
    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Color_pixels_app.png)

    *  実行方法

        1.  [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)をダウンロードします。
        2.  hexファイルをArch BLEのMBEDディスクにコピーします。
        3.  [Color Pixels Androidアプリ](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)をダウンロードします。

プログラムを変更したい場合は、[このリンク](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE)をクリックしてColor PixelsプログラムをmbedオンラインIDEにインポートしてください。

BLEデバイスが頻繁に切断される場合は、BLEパラメータ（main.cpp内の広告期間、nRF51822/projectconfig.h内の最小間隔および最大間隔）を変更することで安定性を向上させることができます。

```
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< 許容される最小接続間隔 */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< 許容される最大接続間隔 */
```

-  携帯電話で制御するおもちゃの車。

    *  ハードウェア
        -  [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
        -  [Shield Bot](https://www.seeedstudio.com/Shield-Bot-p-1380.html)

ファームウェアの更新または復元
--------------------------

Arch BLEの最新ファームウェアバージョンは、2015年3月2日にビルドされたv0221です。ファームウェアバージョンとビルド日を確認するには、MBEDディスクのMBED.HTMファイルをテキストエディタで開いてください。

変更履歴：

-   2014-06-26: 初版
-   2014-08-25: gccツールチェーンで生成されたhexファイルおよびソフトデバイスなしのドラッグ＆ドロップサポート
-   2014-10-08: USB再接続の代わりにUSB EJECT INSETを使用、インテルhexデータラインバッファを64バイトから128バイトに増加
-   2015-02-03: Mac OS X 10.10 Yosemiteの読み取り専用ファイルシステムバグを修正

既知の問題：

-   ChromeブラウザでhexファイルをMBEDディスクに直接ダウンロードする際の問題。原因は、Chromeがダウンロード中に一時ファイルを作成するためです。Chromeを使用している場合は、hexファイルを別の場所に保存してからMBEDディスクにコピーしてください。

ファームウェア：

-   [Arch BLE用ファームウェア v0221 2015-02-03](https://developer.mbed.org/media/uploads/yihui/arch_ble_interface_v221_20150203_2.bin)
-   [Arch BLE用ファームウェア v0203 2014-10-08](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)
-   [Arch BLE用ファームウェア v0203 2014-08-25](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20140825.bin)

新しいファームウェアをフラッシュするには：

-   Arch BLEのボタンを押しながら電源を入れます。
-   CRP DISABLDディスクが表示されます。
    -   Windowsの場合、上記のファームウェアでfirmware.binを置き換えます。
    -   Linux/Macの場合、以下のコマンドを使用します： **dd if=\{new_firmware.bin\} of=\{firmware.bin\} conv=notrunc**

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

-   [Arch BLE mbed 開発者プラットフォームページ](https://developer.mbed.org/platforms/Seeed-Arch-BLE/)
-   [PDF形式の回路図](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_pdf.pdf)
-   [EAGLE形式の回路図および基板ファイル](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip)
-   [LPC11U35 ファームウェア](https://files.seeedstudio.com/wiki/Arch_BLE/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
-   [Android用 Seeed BLE Color Pixels アプリ](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
-   [BLE Color Pixels アプリのソースコード](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Arch_BLE から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>