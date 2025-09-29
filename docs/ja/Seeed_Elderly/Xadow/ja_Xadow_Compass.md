---
description: Xadow - コンパス
title: Xadow - コンパス
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Compass
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/X_compass_01.jpg)

Xadow Compass は、Xadow ファミリーの一員である 3 軸デジタルコンパスです。このモジュールは低磁場磁気センサー HMC5883 をベースにしており、1°から2°のコンパス方位精度を特徴としています。また、I2C シリアルバスを使用してマイクロコントローラーと通信します。Xadow Compass は、方向情報を取得するのに役立つ便利なツールです。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Compass-p-1669.html)

## 仕様
---
- 動作電圧: 3.3V
- 線形性: 0.1 (最大) ±% FS
- 解像度: 10 ミリガウス
- 磁気動的範囲: ±1 ~ ±8 ガウス
- IIC アドレス:
  - 7ビットアドレス: 0x1E
  - 8ビット読み取りアドレス: 0x3D
  - 8ビット書き込みアドレス: 0x3C
- 動作温度: -30 ~ +85 °C
- 寸法: 25.43mm x 20.35mm

## デモンストレーション
---
このデモでは、生データの読み取り方法、ローカルの磁気偏角でデータをキャリブレーションする方法、および方位角を取得する方法を示します。

**ローカルの磁気偏角を取得する**

まず、何か行動を起こす前に、デモで使用するパラメータを準備する必要があります。それがローカルの磁気偏角です。
- [磁気偏角ウェブページ](http://www.magnetic-declination.com/)で度単位で確認できます。例えば、私の場合は -2°37’ で、これは -2.617 度です。
- 次に、それを度からラジアンに変換します。これで「declinationAngle」が得られます。例えば、私の場合、declinationAngle = -2.617 / （2*π）= -0.0456752665 ラジアンです。有効数字は3桁で十分です。したがって、-0.0456 ラジアンに短縮します。この値をデモコード内の "declinationAngle" の値に置き換えます。

**コードをダウンロードする**
- ハードウェアのインストールを完了します:
:::note
    Xadow Compass を Xadow Main Board に接続する際は、接続方向に注意してください。接続方法は、1つの Xadow モジュールの未充填コーナーを別のモジュールの直角コーナーに接続することです（各 Xadow モジュールの4つのコーナーを参照）。
:::
- ライブラリファイルをダウンロードします: [Digital Compass Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass)、そして Arduino ライブラリにインストールします。[Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してインストール方法を学びます。
- デモを次のパスで開きます: File -> Example -> Digital Compass -> HMC5883L_Example。変数 "declinationAngle" の値を、すでに計算した値に置き換えます。

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Xadow_Compass_Code.jpg)

- コードをアップロードします。シリアルモニターを開いて出力結果を確認します。

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Digital_Compass2.jpg)


## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [3軸デジタルコンパス HMC5883 データシート](https://files.seeedstudio.com/wiki/Xadow_Compass/res/HMC5883.pdf)
- [Xadow Compass Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip)
- [Xadow Compass ライブラリファイル](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>