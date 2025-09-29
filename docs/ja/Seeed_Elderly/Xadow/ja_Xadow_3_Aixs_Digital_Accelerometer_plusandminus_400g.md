---
description: Xadow - 3軸デジタル加速度センサー(±400g)
title: Xadow - 3軸デジタル加速度センサー(±400g)
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow_3Axis_Accelerometer400g.jpg)

H3LIS331DLは「nano」ファミリーに属する低消費電力・高性能な3軸線形加速度センサーで、デジタルI2Cシリアルインターフェース標準出力を備えています。このデバイスは超低消費電力動作モードを特徴とし、高度な省電力機能やスマートなスリープからのウェイクアップ機能を提供します。H3LIS331DLは±100g/±200g/±400gの動的にユーザー選択可能なフルスケールを持ち、0.5Hzから1kHzまでの出力データレートで加速度を測定することができます。

## 特徴
---
- 広い電源範囲 DC2.2V～3.6V
- Xadowの形状
- 3軸センサー
- 小型・低プロファイルパッケージ：3×3×1mm TFLGA
- 低消費電力 3.3Vで300µA（典型値）
- ±100g /±200g /±400g 動的に選択可能なフルスケール
- I2Cデジタル出力インターフェース（アドレス = 0xE7）
- 10000gの高衝撃耐性
- ECOPACK®RoHSおよび「グリーン」準拠

## 応用例

- 衝撃検知
- 衝撃認識とログ記録
- 脳震盪検知

## 使用方法
---
以下に、この加速度センサーから生データを読み取る方法を示します。
他のXadowモジュールと同様に、Xadow 3軸加速度センサーをXadowメインボードに接続し、テストコードをアップロードして加速度センサーの情報を取得する必要があります。

ハードウェアのインストール：

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow-3-Axis_Digital_Accelerometer_Connection.jpg)

:::note
    Xadow 3軸加速度センサーをXadowメインボードに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角部分に接続する必要があります（各Xadowモジュールの4つの角を参照してください）。
:::
コードをアップロードした後、シリアルモニターを開いてテスト結果を観察します。このセンサーの出力は、重力単位「g」に変換された3軸加速度情報です。

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Raw_data_of_H3LIS331DL.jpg)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
- [Xadow - 3軸デジタル加速度センサー(±400g) Eagleファイル](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip)
- [3軸デジタル加速度センサー(±400g)のGithubリポジトリ](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>