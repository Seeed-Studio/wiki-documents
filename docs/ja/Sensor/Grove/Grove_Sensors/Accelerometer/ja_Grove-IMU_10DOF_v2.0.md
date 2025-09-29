---
description: Grove - IMU 10DOF v2.0
title: Grove - IMU 10DOF v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-IMU_10DOF_v2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0.jpg" alt="pir" width={600} height="auto" /></p>

Grove-IMU 10DOF v2.0は、Grove-IMU-10DOFのアップグレードバージョンであり、BMP180をBMP280に置き換えています。広く採用されているBMP180の後継機であるBMP280は、正確な圧力測定を必要とするすべてのアプリケーションで高性能を発揮します。このモジュールはMPU-9250とBMP280をベースにしており、MPU-9250は3軸ジャイロスコープ、3軸加速度計、3軸磁力計、およびデジタルモーションプロセッサ（DMP）を組み合わせた9軸モーショントラッキングデバイスです。一方、BMP280は消費者向けアプリケーション用の高精度で超低消費電力のデジタル圧力センサーです。このモジュールは、スマートフォン、タブレット、ウェアラブルデバイスのアプリケーションに非常に適しています。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)

## バージョン

|  製品バージョン         | 変更点                                                                                                                                                                                                                                      | リリース日     |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| Grove - IMU 10DOF      | [MPU-9250 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf ) と [BMP180 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf ) をベースに構築 | 2015年3月      |
| Grove - IMU 10DOF v2.0 | BMP180センサーをBOSCHの [BMP280 ](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf ) にアップグレード                                         | 2016年9月      |

## 仕様

-   I2C Groveインターフェース（GND、VCC、SDA、SCLを含む）
-   MPU-9250のI2Cアドレス選択可能
-   低消費電力
-   すべてのレジスタとの通信に400kHzの高速モードI2Cを使用
-   ユーザーがプログラム可能なフルスケール範囲（±250、±500、±1000、±2000°/秒）を持つデジタル出力X軸、Y軸、Z軸角速度センサー（ジャイロスコープ）
-   プログラム可能なフルスケール範囲（±2g、±4g、±8g、±16g）を持つデジタル出力3軸加速度計
-   フルスケール範囲（±4800uT）を持つデジタル出力磁力計
-   範囲300〜1100hPa（海抜+9000m〜-500mに相当）のデジタル出力気圧計
-   寸法：25.43mm x 20.35mm
-   I2Cアドレス：デフォルトではI2Cセレクトパッドのaとbが接続されている場合は0x68、bとcが接続されている場合は0x69

:::note
    複数のI2Cデバイスを使用したい場合は、[Software I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/)を参照してください。
:::
:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

-  **MPU-9250** のI2Cアドレス選択パッド：デフォルトでは **a** と **b** が接続されており、アドレスは0x68です。**b** と **c** を接続するとアドレスは0x69になります。
-  **MPU-9250** の割り込みピン：割り込みは設定する必要があります。利用可能な割り込みソースは以下の通りです：モーション検出、FIFOオーバーフロー、データ準備完了、I2Cマスターエラー。
- 軸の方向：
以下の図は、感度軸の方向と回転の極性を示しています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

- **BMP280** は、モバイルアプリケーション向けに特別に設計された絶対気圧センサーです。このセンサーモジュールは、2.0 × 2.5 mm²のフットプリントと0.95 mmのパッケージ高さを持つ、非常にコンパクトな8ピン金属蓋付きLGAパッケージに収められています。その小型サイズと、1Hzで2.7 μAという低消費電力により、携帯電話、GPSモジュール、時計などのバッテリー駆動デバイスへの実装が可能です。

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド | Grove - IMU 10DOF v2.0 |
|----------------|----------------|-------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)|

- **ステップ 2.** Grove - IMU 10DOF v2.0 をベースシールドの **I2C** ポートに接続します。
- **ステップ 3.** Grove - ベースシールドを Seeeduino に差し込みます。
- **ステップ 4.** USBケーブルを使用して Seeeduino をPCに接続します。

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [Grove-IMU_10DOF_v2 ライブラリ](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)をダウンロードします。
- **ステップ 2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)に従ってライブラリをインストールしてください。
- **ステップ 3.** Arduino IDEを再起動します。次のパスから「IMM_10DOF_Test」例を開きます：**File -> Example -> GROVE_IMU_10DOF_V2-master -> IMU_10DOF_V2_Test**。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** コードをアップロードします。正しいボードタイプとCOMポートを選択する必要があることに注意してください。
以下のように表示されます：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg" alt="pir" width={600} height="auto" /></p>

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - IMU 10DOF v2 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip)
- **[ライブラリ]** [GitHubからライブラリを取得](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
- **[データシート]** [BMP280 データシート](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/BMP280-Datasheet.pdf)
- **[データシート]** [MPU-9250 データシート](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_IMU_10DOF から作成されました -->

## プロジェクト

**Motorcycle Data App**: プロのようにライドから学びましょう！オートバイのレースチームは長年にわたりIMUデータを活用してきましたが、RideData+Arduinoを使えば、あなたも同じことが簡単にできます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験をしていただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>