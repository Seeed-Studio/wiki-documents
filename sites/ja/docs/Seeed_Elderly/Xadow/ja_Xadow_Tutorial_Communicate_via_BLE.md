---
description: Xadow チュートリアル - BLE を介した通信
title: Xadow チュートリアル - BLE を介した通信
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Tutorial_Communicate_via_BLE
last_update:
  date: 05/15/2025
  author: shuxu hu
---


次のようなシーンを想像したことはありますか？スマートフォンを開くと、現在の気圧や動きの加速度が確認できる。Xadow モジュールを使用すれば、これを実現することができます。

このデモを実行するには、以下のものが必要です：

*   Xadow メインボード

*   Xadow OLED

*   Xadow 加速度計

*   Xadow BLE スレーブ

もしすでに Demo 1 と Demo 2 を実行する方法を学んでいる場合は、Xadow メインボード、Xadow OLED、Xadow 加速度計、Xadow BLE スレーブモジュールを接続し、[コード: BLE_Slave](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip) をダウンロードするだけです。

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/BLEUsage.jpg)

次に、BLE_Slave INO ファイルを開き、コンパイルしてアップロードします。

<!-- 初めて使用する場合は、[こちら](/ja/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board)を参照して Xadow ドライバをインストールしてください。また、ライブラリ [DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/DigitalAccelerometer_ADXL345.zip) と [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/Sleep_FromArduino.zip) をダウンロードし、解凍後に Arduino IDE のライブラリフォルダ（..\arduino-1.0.1\libraries）に配置してください。 -->

<!-- 次に、スマートフォンの Bluetooth をオンにしてデータを観察できます。加速度計の値が変化すると、Bluetooth シリアルがリアルタイムデータを表示します。なお、スマートフォンの Bluetooth は Bluetooth 4.0（iPhone 4S 以上）である必要があり、Bluetooth シリアルツールをダウンロードする必要があります。詳細については、[Xadow BLE スレーブの使用方法](/ja/Xadow_BLE_Slave#Usage)を参照してください。 -->

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/Phone_and_BLE_Slave_Communicate.jpg)

スマートフォンの画面には、2 つのコマンド（ledon と ledoff）が表示されます。これらは、緑色のインジケータの状態を制御するために使用されます。ぜひ試してみてください！

##  リソース

[Demo3 BLESlave コード](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>