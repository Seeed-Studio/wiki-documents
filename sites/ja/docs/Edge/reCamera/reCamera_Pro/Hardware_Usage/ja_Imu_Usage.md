---
description: この Wiki では、デバイス上で IMU データを取得する方法について簡単に紹介します。
title: IMU の使用方法
keywords:
  - reCamera
  - reCamera Pro
  - IMU
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_imu_usage
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_imu_usage/
---

# reCamera Pro IMU の使用方法

本デバイスに搭載されている IMU モデルは ICM-42670-P であり、3 軸加速度センサと 3 軸ジャイロスコープを統合した 6 軸センサです。ICM-42670-P のジャイロスコープは ±250 / ±500 / ±1000 / ±2000 dps の測定レンジをサポートし、加速度センサは ±2 / ±4 / ±8 / ±16 g のレンジをサポートします。内部データは 16 ビットの 2 の補数形式で出力されます。

## データパス

reCamera PRO は IMU に対して標準の IIO ドライバを使用しているため、生データは IIO インターフェースを介して直接取得できます。
生データファイルは ***/sys/bus/iio/devices/iio:device1/*** ディレクトリ内にあります。
![IMU_DATA_SAMPLE](https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png)

## データの読み取り

対応する生データを読み取るには、次のコマンドを実行します。以下の例では、X 軸の加速度データを読み取る方法を示します。

``` bash
cat /sys/bus/iio/devices/iio:device1/in_accel_x_raw
```

## Python でデータを取得する

Python を使用すると、IMU データを簡単に取得できます。以下はその簡単な例です。

```python
#!/usr/bin/env python3
DEVICE = "/sys/bus/iio/devices/iio:device1"
with open(f"{DEVICE}/in_anglvel_scale", "r") as f:
    scale = float(f.read().strip())
with open(f"{DEVICE}/in_anglvel_x_raw", "r") as f:
    raw = int(f.read().strip())
gyro_x = raw * scale
print(f"Gyroscope X: {gyro_x:.6f} rad/s")
```

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
