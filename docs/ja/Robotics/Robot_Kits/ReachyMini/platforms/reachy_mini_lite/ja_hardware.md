---
description: Reachy Mini Lite のハードウェアデータシート。寸法、自由度、モータ仕様、カメラ、マイクアレイ、および電子部品を含みます。
title: Reachy Mini Lite ハードウェアデータシート
slug: /ja/reachymini_platforms_reachy_mini_lite_hardware
keywords:
- hardware
- datasheet
- specifications
- dimensions
- motors
- dynamixel
- camera
- microphone
- electronics
- lite
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini Lite ハードウェアデータシート

## 全体概要

![Dimensions](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_dimensions.png)

- 寸法: 30x20x15.5cm（伸長時）
- 質量: 1.350 Kg
- 材質: ABS、PC、アルミニウム、スチール
- 自由度:
    - 頭部: 6 自由度（3 回転 & 3 並進）
    - ボディ: 1 回転
    - アンテナ: 1 回転（x2）

    ![Dofs](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/degrees_of_freedom.png)

    ![dof_table](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/dof_table.png)


- 電源入力電圧: 6.8 - 7.6V
- 広角カメラ: 120° - 12MP - オートフォーカス
- サウンド: マイクアレイ + スピーカー

![Mics_and_camera](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/mic_and_camera.png)


![back_interface](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/back_interface.png)

- 制御: コンピュータインターフェース用 USB-C 接続。
この USB ポートからは充電*されない*ことに注意してください。
Reachy Mini Lite はコンピュータに接続して使用するデバイスです

![Components](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_components.png)


## 個別コンポーネント

- モータ仕様
    - ベース: 1x カスタム Dynamixel XC330-M288-PG（プラスチックギア付き [XC330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xc330-m288/)）
    - アンテナ: 2x Dynamixel [XL330-M077-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m077/)
    - スチュワートプラットフォーム: 6x Dynamixel [XL330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/)

    ![Motors](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/motors_detail.png)

- マイクアレイボード
    - 4 個の PDM MEMS デジタルマイク
    - 最大サンプリングレート 16 kHz / -26 dB FS 感度 / 64 dBA SNR
    - Seeed Studio の reSpeaker XMOS XVF3800 をベース
- カメラ
    - Raspberry pi camera v3 wide angle
        - Sony IMX708
        - 12MP
        - オートフォーカス
        - I2C*~1 x MIDI DSI 接続
- 5W @4Ohms スピーカー
- 電源ボード
    - 入力電圧: 6.8 - 7.6V

    ![Electronics](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/electronics.png)


- Lite コントローラボード:
    - 6.8 - 7.6 V（電源ボードから供給）
    - Dynamixel モータ TTL 接続
    - カメラ CSI 接続
    - マイクアレイ接続
    - USB-C 入力。ボトムインターフェースの USB ポートとして使用されます。この USB ポートからは充電*されない*ことに注意してください。Reachy Mini Lite はコンピュータに接続して使用するデバイスです
