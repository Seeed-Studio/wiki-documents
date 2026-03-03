---
description: このwikiはWHEELTEC IMUセンサーのチュートリアルを提供します。
title: WHEELTEC IMUセンサー
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg
slug: /ja/wheeltec_imu
last_update:
  date: 01/12/2025
  author: ZhuYaoHui
---

# WHEELTEC IMU IMUセンサー入門ガイド

WHEELTEC H30は、キャリアの重要なデータ（3D姿勢角、加速度、角速度、磁場強度）を正確に測定するために設計された高精度姿勢センサーです。産業グレードの信頼性を備えて設計されたこのセンサーは、3軸MEMSジャイロスコープ、3軸MEMS加速度計、3軸磁気センサーを統合し、プロフェッショナルアプリケーション向けの堅牢な性能を提供します。


<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg" />
</div>

## 仕様


| パラメータ                  | H30 MINI                          | H30WP                              |
|----------------------------|-----------------------------------|------------------------------------|
| モデル                      | H30 MINI                          | H30WP                              |
| 寸法                       | 24.5×24.5×14.5mm                  | 63×55×24.5mm                       |
| ハウジング                  | 超コンパクト金属ケース              | 標準金属ケース                      |
| 出力インターフェース         | Type-C/SH1.0 6PIN                 | 航空防水コネクタ                    |
| 消費電力                    | 186mW                             | 210mW                              |
| 予約インターフェース         | UART                              | UART/RS485                         |
| 入力電圧                    | 4.5–5.2V DC                       | 5–26V DC                           |
| 軸数                       | 9軸（全モデル）                    | 9軸（全モデル）                     |
| 動作温度                    | -40°C–85°C（全モデル）             | -40°C–85°C（全モデル）              |
| コマンド設定                | シリアルコマンド設定をサポート：キャリブレーション、セットアップ、モード切替など（全モデル） | シリアルコマンド設定をサポート：キャリブレーション、セットアップ、モード切替など（全モデル） |
| IMUデータ出力最大レート      | 400Hz                             | 400Hz                              |


### **サポートされているROSバージョン**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### 取り付け寸法図
H30 Mini
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/mini_install.png"/>
</div>

H30WP:
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wp_install.png"/>
</div>

## IMU入門ガイド
ユーザーマニュアル、ドライバー、SDKなどの資料については、[GitHubドキュメント](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU)をご参照ください。

[1. H30シリーズユーザーマニュアル](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/1.WHEELTEC%20H30%20Series%20Inertial%20Navigation%20User%20Manual%EF%BC%88English%EF%BC%89.pdf)

[2. YESENSE通信プロトコルドキュメント](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/4.YESENSE%20Communication%20Protocol%20Document%EF%BC%88English%EF%BC%89.pdf)

[3. ROS1/ROS2 SDK](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/2.ROS_SDK)

[4. ソフトウェアツール](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/3.Software%20tools)

[5. 機械モデルファイル](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/5.Mechanical%20model%20files)

[6. 慣性航法モジュール関連ルーチン](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/6.Routines%20related%20to%20the%20inertial%20navigation%20module)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
