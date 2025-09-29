---
description: Seeed Studio XIAO nRF52840 Senseでの6軸IMU使用方法
title: XIAO nRF52840 SenseのIMU使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO nRF52840 Senseでの6軸IMU使用方法

**Seeed Studio XIAO nRF52840 Sense**には、**3軸加速度計**と**3軸ジャイロスコープ**を含む高精度な**6軸慣性測定ユニット（IMU）**が搭載されています。このモジュールには**内蔵温度センサー**も含まれています。このモジュールがあなたのTinyMLプロジェクトに大いに役立つと確信しています。このwikiでは、このボード上でのIMUの基本的な使用方法を紹介します。

**注意**

- **Seeed Studio XIAO nRF52840**にはこのIMUモジュールは搭載されていません。
- IMU機能は「Seeed nrf52 mbed-enabled Boards Library」を使用する際により良いパフォーマンスを発揮するため、こちらを強く推奨します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>


## シリアルモニターで加速度計、ジャイロスコープ、温度データを表示

この例では、Seeed Studio XIAO nRF52840 Senseからの加速度計、ジャイロスコープ、温度データをArduino シリアルモニターで表示します。

- **ステップ 1**. [Seeed_Arduino_LSM6DS3 Library](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)をzipファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **ステップ 2**. Arduino IDEを開き、`スケッチ > ライブラリをインクルード > .ZIP形式のライブラリをインストール...`に移動し、ダウンロードしたzipファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **ステップ 3.** `ファイル > スケッチ例 > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample`に移動して**HighLevelExample**を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **ステップ 4.** コードをアップロードし、**シリアルモニター**を開きます

**注意:** コードをアップロードした後、Arduinoウィンドウの右上角にある**シリアルモニター**をクリックするまで自動的に実行されません。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

これで、上記のようにシリアルモニターに加速度計、ジャイロスコープ、温度データが順次表示されます！

## さらに詳しく

より多くの例を試したい場合は、`ファイル > スケッチ例 > Accelerometer And Gyroscope LSM6DS3`に移動し、**Accelerometer And Gyroscope LSM6DS3**の下にあるすべての例を確認してください。