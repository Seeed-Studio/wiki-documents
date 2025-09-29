---
description: Xadow チュートリアル - 加速度検出器
title: Xadow チュートリアル - 加速度検出器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Tutorial_Acceleration_Detector
last_update:
  date: 05/15/2025
  author: shuxu hu
---


私たちは加速度検出器を作成しました。このデバイスは加速度を検出し、振動によってユーザーに通知します。加速度が変化すると、Xadow Vibration が振動し、OLED に加速度計の値が表示されます。また、OLED ディスプレイで現在のバッテリー電圧も確認できます。

このデモに必要なもの：

<!-- 
*   [Xadow メインボード](/ja/Xadow_Main_Board/)

*   [Xadow OLED](/ja/Xado_OLED_128multiply64)

*   [Xadow 振動モーター](https://wiki.seeedstudio.com/ja/Xadow_Vibrator_Motor/)

*   [Xadow 加速度計](/ja/Xadow_3_Aixs_Accelerometer/) 
-->

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Untitled2.jpg)

デモを完成させるには、以下を行う必要があります：

*   Xadow メインボード、Xadow OLED、Xadow 振動モーター、Xadow 加速度計を FFC ケーブルで同じ方向に接続します。

<!-- *   Xadow メインボードを Micro USB ケーブルで PC に接続します。コードをアップロードする前に、Xadow ドライバーをインストールする必要があります。具体的な操作については [こちら](/ja/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board) をクリックしてください。 -->

*   「これで、他の Arduino ボードと同じように Xadow をプログラムして使用できます」と表示されたら、準備が完了したことを意味します。

*   [acceleDetector ライブラリ](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip) をダウンロードし、acceleDetector INO ファイルを直接開きます。

:::note
    コンパイルする前に、Arduino ライブラリに [OLED_Display12864 ライブラリ](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/OLED_Display12864.zip) と [sleep_FromArduino ライブラリ](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/Sleep_FromArduino.zip) があることを確認してください。ない場合は、それらをダウンロードして解凍後に Arduino IDE のライブラリフォルダ（パス: ..\arduino-1.0.1\libraries）に配置してください。
:::
*   コードをコンパイルして Xadow ボードにアップロードします。Arduino 環境の「ツール」|「ボード」メニューから Seeed Xadow を選択する必要があります。
*   次の画像が表示されます：

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Demo_1_effect_picture.jpg)

センサーを振って加速度値を変更すると、OLED モジュールにセンサー値が表示されます。

## リソース

[Demo1 acceleDetector コード](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>