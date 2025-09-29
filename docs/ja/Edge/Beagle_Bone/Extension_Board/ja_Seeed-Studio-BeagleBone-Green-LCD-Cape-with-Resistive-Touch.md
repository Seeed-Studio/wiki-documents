---
description: Seeed Studio BeagleBone® Green LCD Cape with Resistive Touch
title: Seeed Studio BeagleBone® Green LCD Cape with Resistive Touch
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08ddkssqrw2lfthpq0phlecp1r.jpg)

**Green LCD Cape with Resistive Touch**は、SeeedStudio BeagleBone® GreenまたはBeagleBone Black用に設計されたコンパクトな5インチLCDを備えた製品です。7インチよりも小型ですが、800x480の解像度を提供し、4線式抵抗タッチスクリーンを使用してユーザーとのインタラクションを可能にします。2x46ピンヘッダーをSeeedStudio BeagleBone® Green/BeagleBone® Blackに接続するだけで簡単にセットアップでき、電源供給やディスプレイ信号など、ケープに必要なすべてを提供します。さらに、背面に内蔵されたマイクロUSBから電源を供給することも可能です。画面下部のLEFT、RIGHT、UP、DOWN、ENTERボタンは、画面との代替的なインタラクション方法を提供します。2つのLEDは電源とユーザーステータスの表示に使用されます。

**5インチ**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**7インチ**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

--------

- 解像度：800x480（5インチ） / 1024x600（7インチ）
- 抵抗タッチスクリーン
- LEFT、RIGHT、UP、DOWN、ENTERの5つのボタン
- Debian対応
- ULPバックライト
- 4つの3mm取り付け穴
- 内蔵USB電源供給

## 仕様

-------------

| 項目                | 値                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| サイズ            | 200mm x130mm x50mm                                                                                              |
| 重量 | G.W 120g                                  |
| 動作電圧 | 5V |
| 動作電流 | 110mA |
| 消費電力 | 0.55W |

## 応用例

-----------------

BeagleBone®を使用して、任意の内容を表示できます。

## ハードウェア

-----------------

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08za8h5rzwtbm1lq3n3oydkcxp.jpg)

**SN74HC245**

- 広範囲のIO駆動電流

**Cape I2Cアドレススイッチ**

- I2Cアドレス設定スイッチ

**CAT4139TD**

- バックライト、定電流および定電圧

### 部品リスト

|                            |          |
|----------------------------|----------|
| **名称**             | 数量 |
|  Green LCD Cape with Resistive Touch | 1        |

## はじめに

-----------

***このセクションでは、ステップバイステップで始め方を説明します。***

### 準備

- BeagleBone® GreenボードまたはBeagleBone® Blackボード（OS[インストール](https://beagleboard.org/getting-started)済み） × 1
- USBケーブル（タイプAからマイクロタイプB） × 2

### ハードウェア接続

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-086yqt2uwelst8w5mwuaklys12.jpg)

:::note
BeagleBone® GreenボードとGreen LCD Cape with Resistive Touchの両方をUSB接続して十分な駆動力を確保してください。
:::

### ソフトウェア設定

1. デバイスマネージャでBeagleBone® Greenボードが使用しているCOMポートを確認します。

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png)

2. PuTTYを使用してCOMポート経由でBeagleBone® Greenボードシステムにアクセスします。

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/putty-config.png)

アカウント: debian, パスワード: temppwd

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/BBG-start.png)

3. `/boot/uEnv.txt`の設定を変更します。

```bash
sudo nano /boot/uEnv.txt
```

7インチ画面の場合:

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/7-inch-config.png)

5インチ画面の場合:

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/5-inch-config.png)

BeagleBone® HDMIを使用するディスプレイデバイスの場合、`disable_uboot_overlay_video=1`をコメント解除します。

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/HDMI-config.png)

4. システムを再起動します。LEDが点滅し、以下のウィンドウが表示されます。

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Bbb_vnc.jpg)

## リソース

---------

- **[回路図]** [回路図ファイル](https://statics3.seeedstudio.com/assets/file/bazaar/product/5INCH_BBG_00A2_SCH.pdf)

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>