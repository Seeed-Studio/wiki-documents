---
description: Xadow - IMU 10DOF
title: Xadow - IMU 10DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_IMU_10DOF
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-imu-10dof-shao.JPG)

Xadow - IMU 10DOF は、[Xadow - IMU 9DOF](https://wiki.seeedstudio.com/ja/Xadow_IMU_9DOF) と [Xadow - Barometer BMP180](https://wiki.seeedstudio.com/ja/Xadow_Barometer_BMP180) を組み合わせたモジュールです。このモジュールは MPU-9250 と BMP180 をベースにしており、MPU-9250 は 3 軸ジャイロスコープ、3 軸加速度計、3 軸磁力計、デジタルモーションプロセッサ (DMP) を組み合わせた 9 軸モーショントラッキングデバイスです。一方、BMP180 は高精度で超低消費電力のデジタル圧力センサーで、消費者向けアプリケーションに適しています。このモジュールは、スマートフォン、タブレット、ウェアラブルデバイスのアプリケーションに非常に適しています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-10DOF-p-2446.html)

## 仕様
---
- I2C インターフェース
- MPU-9250 の I2C アドレス選択可能
- 低消費電力
- すべてのレジスタとの通信に対応した 400kHz 高速モード I2C
- ユーザーがプログラム可能なフルスケール範囲（±250、±500、±1000、±2000°/秒）を持つデジタル出力 X、Y、Z 軸角速度センサー（ジャイロスコープ）
- プログラム可能なフルスケール範囲（±2g、±4g、±8g、±16g）を持つデジタル出力 3 軸加速度計
- フルスケール範囲（±4800uT）を持つデジタル出力磁力計
- 範囲 300 ~ 1100hPa（海抜 +9000m ~ -500m に相当）のデジタル出力気圧計
- 寸法：25.43mm x 20.35mm

## インターフェース機能
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_Interface.png)

- ①：MPU-9250 I2C アドレス選択パッド（デフォルト 0x68）
- ②：12P FPC ボトムコンタクト

## 使用方法
---
ここでは、このセンサーの使用方法を示す例を提供します。

**ハードウェアのインストール**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_installation.png)

:::note
    Xadow - IMU 10DOF を Xadow - Main Board に接続する際は、接続方向に注意してください。接続方法は、1 つの Xadow モジュールの未充填コーナーを別のモジュールの直角に接続することです（各 Xadow モジュールの 4 つのコーナーを参照してください）。
:::

**ソフトウェア部分**
1. ライブラリを [https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF](https://github.com/Seeed-Studio/IMU_10DOF) からダウンロードします。
2. Arduino IDE のライブラリフォルダに解凍します。
3. 次のパスでコードを直接開きます：**File -> Example -> IMU_10DOF_Test**
4. コードをアップロードします。正しいボードタイプと COM ポートを選択する必要があることに注意してください。

以下のように表示されます：

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-test.png)

**軸の方向**

以下の図は、感度軸の方向と回転の極性を示しています。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-dir-axes.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow - IMU 10DOF v1.0 eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip)
- [IMU 10DOF ライブラリ](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/IMU_10DOF_Library.zip)
- [BMP180 データシート](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/BMP180.pdf)
- [MPU-9250 データシート](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)

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