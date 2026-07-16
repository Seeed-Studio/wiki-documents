---
title: 傾きおよび振動検知
description: この記事では、reCamera Pro 搭載のジャイロスコープ ICM-42670-P を使用して角速度データを取得し、デバイスの傾きおよび振動検知を実装し、トリガー時にスピーカーから音声警告を再生する方法を説明します。
keywords:
  - reCamera
  - reCamera Pro
  - IMU
  - Gyroscope
  - ICM-42670-P
  - Tilt Detection
  - Shake Detection
  - ALSA
  - aplay
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif
slug: /recamera_pro_imu_tilt_shake_detection
sidebar_position: 1
last_update:
  date: 2026-06-11T00:00:00.000Z
  author: Sizhao zhou
createdAt: "2026-06-11"
updatedAt: "2026-06-11"
url: https://wiki.seeedstudio.com/ja/recamera_pro_imu_tilt_shake_detection/
---

# reCamera Pro 搭載 IMU を用いた傾き・振動検知

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif" /></div>

## はじめに

この記事では、reCamera Pro に搭載されている 6 軸慣性計測ユニット（IMU）である ICM-42670-P ジャイロスコープを使用して、デバイスの傾きおよび振動検知を実装する方法を説明します。デバイスが傾いたり振動したりすると、システムはオンボードスピーカーから対応する音声警告を再生します。本チュートリアルを通じて、Linux IIO ドライバを介して生のジャイロスコープデータを読み取る方法、ALSA オーディオドライバを使用して警告音を再生する方法、そして最終的に完全な検知および警告プログラムを統合する方法を学びます。

## ハードウェアの準備
- reCamera Pro 1 台

<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>



## 実装原理

オンボードジャイロスコープ（ICM-42670-P）から生の角速度データを取得し、そのデータに基づいてデバイスが傾いたか、あるいは振動したかを判定します。現在の実装では単純なしきい値ベースの判定を使用しており、実際の要件に応じて後から最適化することができます。

### 振動検知

いずれかの軸の角速度データの絶対値があらかじめ設定したしきい値を超えた場合、それを振動と判定します。

### 傾き検知

いずれかの軸の角速度データの絶対値があらかじめ設定したしきい値を超えた場合、それを傾きと判定します。

## オンボードジャイロスコープのデータ取得

reCamera Pro の Linux 環境では IIO（Industrial I/O）ドライバを使用しており、センサーデータと設定は sysfs インターフェースを通じて公開され、ユーザ空間アプリケーションからアクセスできます。センサーデータのパスは次のとおりです：

```
/sys/bus/iio/devices/iio:device1
```

ジャイロスコープの生データファイルはこのディレクトリ内に公開されており、以下の画像のようになっています：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png" /></div>

生のジャイロスコープデータを取得するには、対応するファイルを読み取るだけです。たとえば、ジャイロスコープの X 軸データを取得するには、`in_anglvel_x_raw` ファイルを読み取ります：

```bash
cat /sys/bus/iio/devices/iio:device1/in_anglvel_x_raw
```

実行結果は次のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_data.png" /></div>

## オンボードスピーカーの使用

reCamera Pro のオンボードスピーカーは、標準的な Linux ALSA ドライバを介して制御されます。現在のサウンドカードデバイスは、次のコマンドで確認できます：

```bash
aplay -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_aplay_l.png" /></div>

次のコマンドを使用してオーディオファイルを再生します：

```bash
aplay test.wav
```

:::note
`aplay` は ALSA の PCM プレーヤーです。PCM/WAV 形式のデータのみを再生でき、MP3 をデコードすることはできません。MP3 を WAV 形式に変換するには、次のコマンドを使用できます：

```bash
ffmpeg -i test.mp3 test.wav
```
:::

## 基本実装コード

生のジャイロスコープデータの読み取り方法とオーディオの再生方法が分かったので、完全な機能を実装するコードを書いていきます。

### ジャイロスコープデータの取得

以下は、X 軸ジャイロスコープデータを取得する方法を示す最小限の関数例です。この関数を拡張して、他の軸のデータを取得することもできます。

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

### オーディオ再生

デバイスが傾きまたは振動をトリガーしたときに、対応する音声警告を再生する必要があります。以下のコードは、Python を使用してオーディオを再生する方法を示しています：

```python
#!/usr/bin/env python3

import subprocess

AUDIO = "test.wav"

subprocess.run([
    "aplay",
    AUDIO
])
```

### 最終実装コード

- デバイスが振動した場合、**"Warning: Do not shake the device"** を再生します。
- デバイスが傾いた場合、**"Warning: The equipment has toppled over. Please immediately check the equipment status to prevent any accidents"** を再生します。

関連コードは [reCamera_PRO_IMU_Detect](https://drive.google.com/drive/folders/1-3RTc0urrzMJVWGHqnLKwSMuZavLV9O0?usp=drive_link) からダウンロードできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_CODE.png" /></div>

## コードのデプロイ

以下の手順では、コードを reCamera Pro にデプロイして実行する方法を説明します：

1. SSH を介してフォルダ全体を reCamera Pro にアップロードします：

```bash
scp -r ./icm42670_project root@deviceIP:/userdata
```

2. メインプログラムを実行します：

```bash
./main.py
```

:::note
1. プログラムは初回実行時にキャリブレーション処理を行います。`main.py` を実行する前に、デバイスが安定して設置されていることを確認してください。再キャリブレーションが必要な場合（デフォルトのキャリブレーション時間は 3 秒）、次を実行します：

```bash
./main.py --force-calib
```

2. コードの使用方法ヘルプを表示します：

```bash
./main.py --help
```
:::

## トラブルシューティング

- **ジャイロスコープデータを読み取れない**：パス `/sys/bus/iio/devices/iio:device1` が存在し、`in_anglvel_x_raw` ファイルが読み取り可能であることを確認してください。パスが存在しない場合、IIO ドライバがロードされていない可能性があります。カーネルモジュールを確認してください。
- **オーディオ再生に失敗する**：オーディオファイルが WAV 形式であり、`aplay` コマンドが使用可能であることを確認してください。スピーカーから音が出ない場合は、ALSA のボリューム設定を確認してください。
- **キャリブレーションに失敗する**：キャリブレーション中にデバイスが静止して水平になっていることを確認してください。キャリブレーション時間が不十分な場合は、`--force-calib` を使用して再キャリブレーションを行ってください。


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>