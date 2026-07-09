---
description: このWikiでは、デバイス上でIMUデータを取得する方法について簡単に紹介します。
title: reCamera Pro IMU の使用方法
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
updatedAt: '2026-07-9'
url: https://wiki.seeedstudio.com/ja/recamera_pro_imu_usage/
---

# IMU の使用方法
本デバイスに搭載されているIMUはICM-42670-Pであり、3軸加速度センサと3軸ジャイロスコープを統合した6軸センサです。ICM-42670-Pのジャイロスコープは±250 / ±500 / ±1000 / ±2000 dpsの測定レンジをサポートし、加速度センサは±2 / ±4 / ±8 / ±16 gのレンジをサポートします。内部データは16ビットの2の補数形式で出力されます。
## データパス
reCamera PROはIMUに標準のIIOドライバを使用しているため、IIOインターフェースを介して生データを直接取得できます。
生データファイルはディレクトリ ***/sys/bus/iio/devices/iio:device1/*** 以下にあります。

## データの読み取り
対応する生データを読み取るには、次のコマンドを実行します。以下の例では、X軸の加速度データを読み取る方法を示します：
``` bash
cat /sys/bus/iio/devices/iio:device1/in_accel_x_raw
```
## Python でデータを取得
Python を使用して簡単にIMUデータを取得できます。以下はシンプルな例です：
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


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>