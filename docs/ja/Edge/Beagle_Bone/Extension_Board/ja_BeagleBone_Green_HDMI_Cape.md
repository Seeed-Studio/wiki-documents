---
description: BeagleBone® Green HDMI Cape
title: BeagleBone® Green HDMI Cape
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BeagleBone_Green_HDMI_Cape
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape.jpg)

**BeagleBone® Green HDMI Cape**は、コンピュータモニター、ビデオプロジェクター、デジタルテレビ、またはデジタルオーディオデバイスなど、BeagleBone®を多様な周辺機器に拡張するための汎用統合HDMIコネクタです。このボードは標準HDMIレセプタクルを備えており、標準HDMI-to-HDMIケーブルを使用してモニターに接続できます。すべてのHD信号に対応しており、出力解像度は1280×720です。また、音声情報の送信にも使用できます。この製品は、BeagleBone®ボードを基盤としたアプリケーションをさまざまな状況に対応できるようにします。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/BeagleBone-Green-HDMI-Cape-p-2570.html)

特徴
--------

- プラグアンドプレイ。
- 異なる入力信号へのアダプター。
- 720P(1280×720)の出力解像度。

仕様
-------------

| パラメータ                | 値                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| 入力電圧                 | 5V/3.3V                                                                                                |
| 最大動作電流             | 80 mA                                                                                                  |
| HDMIバージョン           | バージョン1.2                                                                                          |
| 最大出力解像度           | 1280x720 @60Hz                                                                                         |
| 音声伝送                 | 利用可能                                                                                              |
| チップ                   | IT66121 HDMI Framer([データシート](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/IT66121FN_Datasheet_v1.02.pdf)) |

対応プラットフォーム
-------------------

アプリケーションアイデア
-----------------

BeagleBone®をコンピュータモニター、ビデオプロジェクター、デジタルテレビ、またはデジタルオーディオデバイスなどのマルチメディア周辺機器に拡張できます。

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Componentss.jpg)

**IT66121 HDMI Framer**

- HDMIトランスミッター

**Cape I2Cアドレススイッチ**

- 異なるケープアドレス識別子間の切り替え。

**Cape EEPROM**

- このケープ用のEEPROMメモリ。

**HDMIコネクタ**

### 部品リスト

|                            |          |
|----------------------------|----------|
| **部品名**                | 数量     |
| BeagleBone® Green HDMI Cape | 1        |

はじめに
-----------

***このセクションでは、この製品を数ステップで始める方法を説明します。***

### 準備

- BeagleBone® Greenボード × 1。
- USBケーブル（タイプAからマイクロタイプB） × 1。
- 標準HDMIケーブル（タイプAからタイプA） × 1。

### ハードウェア接続

- ステップ1. 以下の図に従ってハードウェアを接続してください。
![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Connection_1200_s.jpg)

- ステップ2. USBケーブル（タイプC端）をPCに接続してください。

### ソフトウェア

- ステップ1. beaglebone.orgから[Debian 8.10 2018-02-01 4GB SD SeeedStudio IoT](https://debian.beagleboard.org/images/bone-debian-8.10-seeed-iot-armhf-2018-02-01-4gb.img.xz)イメージをダウンロードしてください。
- ステップ2. [Etcher](https://etcher.io/)を使用してSDカードにイメージを書き込んでください。
- ステップ3. 画面にLinuxコマンドラインが表示されます。
- ステップ4. グラフィックUIを使用したい場合は、以下の手順に従ってlxdeをインストールしてください。

```
sudo apt-get update 
sudo apt-get install lxde lxde-core lxde-icon-theme
```

#### トラブルシューティング

1. コンピュータモニターにBeagleBone®デスクトップオペレーションシステムが表示されない場合は、以下の手順を試してください。

    - モニターの電源を切り、再起動してください。
    - BeagleBone® GreenボードのRESETボタンを押してください。
    - BeagleBone® GreenボードのPOWERボタンを押してから再度押してください。

    ![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Beaglebone-Green_s.jpg)

2. コンピュータのマウスが動作しない（電源が入らない）場合：
    - BeagleBone® GreenボードのRESETボタンを押し、起動を待ってください。

3. BeagleBone® Green HDMI Capeを迅速に取り外す方法：
    - HDMIレセプタクルの端を手で引き抜き、次にもう一方の端を引き抜きます。必要に応じて前述の2つのステップを繰り返してください。

4. lxdeグラフィックがwicdパスワードを繰り返し要求する場合は、以下の手順に従ってください。

    - ステップ1. 無視してください。
    - ステップ2. ターミナルを開き、以下のコマンドを実行してください。

    ```
    rm /etc/resolv.conf
    ln -s /run/resolvconf/resolv.conf
    rm /var/lib/wicd/resolv.conf.orig
    ln -s /run/resolvconf/resolv.conf /var/lib/wicd/resolv.conf.orig
    sudo service wicd start
    sudo reboot
    ```

    - ステップ3. wicdグラフィックツールを使用してWi-Fiに接続してください。
    - ステップ4. Wi-Fi、SSHツールを使用できます。

デモ
----

この[ビデオ](https://www.youtube.com/watch?v=-xvbXSd_9TY&feature=youtu.be)では、BeagleBone® Green HDMI Capeを使用してインターネットを閲覧し、音声を再生する方法を示しています。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [回路図ファイル](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip)
- [HDMI Cape Beaglebone イメージ](https://drive.google.com/open?id=15wXOtG4pZMifNoldoSvdOX9sBrev733L)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>