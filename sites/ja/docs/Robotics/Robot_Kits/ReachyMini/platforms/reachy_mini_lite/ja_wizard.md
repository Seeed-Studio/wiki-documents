---
description: Reachy Mini Lite モーターの診断と設定を行うために、Dynamixel Wizard 2.0 ソフトウェアを使用してモーターのパラメータを読み取るためのガイドです。
title: Dynamixel Wizard を使用したモーターパラメータの読み取り
slug: /reachymini_platforms_reachy_mini_lite_wizard
keywords:
- dynamixel wizard
- motor parameters
- diagnosis
- configuration
- usb connection
- scan
- read
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Dynamixel Wizard を使用してモーターのパラメータを読み取る方法

## Dynamixel Wizard をインストールする
Dynamixel Wizard は次のリンクからダウンロードできます：
- [Dynamixel Wizard](https://emanual.robotis.com/docs/en/software/dynamixel/dynamixel_wizard2/)

## Reachy Mini Lite に接続する
1. 付属の電源アダプターを使用して Reachy Mini Lite の電源を入れます。
2. USB-C ケーブルを使用して、コンピューターを Reachy Mini Lite に接続します。
3. Dynamixel Wizard アプリケーションを開きます。
4. "connect button" の横にある "option" をクリックし、"scan" タブに移動して、すべてのモーターを検出できるように次の情報を確認します。
    - Protocol Version: 2.0
    - Baudrate: 1000000
    - Port: USB 接続に適したポートを選択します（例：Windows では COM3、Linux/Mac では /dev/ttyUSB0 など）。

![Dynamixel_Wizard_Scan_Settings](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/scan_parameters.png)

5. "Scan" ボタンをクリックして、接続されているすべてのモーターを検出します。ウィザードには、検出されたモーターとその ID の一覧が表示されます。

## モーターパラメータを読み取る
1. 検出されたモーターの一覧からモーターを 1 つ選択します。
2. 読み取りたいパラメータを選択します（例：Present Position、Present Velocity、Present Load など）。

![Dynamixel_Wizard_Read_Settings](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/wizard_parameters.png)
