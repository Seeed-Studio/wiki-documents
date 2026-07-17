---
description: Seeed Studio XIAO nRF52840 Sense における 6 軸 IMU の使用方法
title: XIAO nRF52840 Sense 用 IMU の使い方
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 7/17/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2023-07-21'
url: https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-IMU-Usage/
---

# Seeed Studio XIAO nRF52840 Sense における 6 軸 IMU の使用方法

**Seeed Studio XIAO nRF52840 Sense** には高精度の **6 軸慣性計測ユニット (IMU)** が搭載されており、**3 軸加速度センサ** と **3 軸ジャイロスコープ** が含まれています。また、このモジュールには **内蔵温度センサ** も備わっています。このモジュールは TinyML プロジェクトに大いに役立つと考えています。本 Wiki では、このボード上で IMU を使用するための基本について紹介します。

**注意**

- **Seeed Studio XIAO nRF52840** にはこの IMU モジュールは搭載されていません。

## シリアルモニタで加速度、ジャイロスコープ、温度データを表示する

この例では、Seeed Studio XIAO nRF52840 Sense から取得した加速度、ジャイロスコープ、温度データを Arduino シリアルモニタ上で表示します。

- **Step 1**. [Seeed_Arduino_LSM6DS3 ライブラリを zip ファイルとしてダウンロード](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2**. Arduino IDE を開き、`Sketch > Include Library > Add .ZIP Library...` に移動して、ダウンロードした zip ファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Step 3.** `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` に移動して **HighLevelExample** を開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **Step 4.** コードを書き込んで **Serial Monitor** を開きます

**Note:** コードを書き込んだだけでは自動的には実行されません。Arduino ウィンドウ右上の **Serial Monitor** をクリックして初めて実行されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

これで、上図のようにシリアルモニタ上に加速度、ジャイロスコープ、温度データが次々と表示されるのが確認できます。

## さらに詳しく

さらに多くのサンプルを試したい場合は、`File > Examples > Accelerometer And Gyroscope LSM6DS3` に移動し、**Accelerometer And Gyroscope LSM6DS3** 配下のすべてのサンプルを確認してください。
