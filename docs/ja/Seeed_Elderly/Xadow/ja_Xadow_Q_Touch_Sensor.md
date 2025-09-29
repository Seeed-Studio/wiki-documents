---
description: Xadow - Q Touch Sensor
title: Xadow - Q Touch Sensor
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Q_Touch_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow%20Q%20touch%20sensor.jpg)

Q Touch Sensorは、高感度かつ高ノイズ耐性を備えたタッチ入力デバイスです。これはAtmel AT42QT1070をベースにしています。

AT42QT1070は、バーストをスプレッドスペクトラム方式で変調し、外部ノイズの影響を大幅に抑制し、RF放射を抑制します。QT1070はデュアルパルス方式の取得方法を使用しています。これにより、ノイズ耐性が向上し、外部サンプリングコンデンサが不要となり、単一ピンでのタッチセンシングが可能になります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html)

## 仕様
---
*   動作電圧: 3 ~ 5.5V
*   動作電流 @3.3V: 1mA
*   タッチキー: 7キー; key0, key1, key2はXadow PCBの底面に配置
*   通信プロトコル: I2C
*   I2Cアドレス: 0x1B

## インターフェース機能
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow-Q_Touch.png)

*   ①：タッチキー3、キー4のブレークアウト
*   ②：タッチキー5、キー6のブレークアウト

キー容量Cxの推奨範囲は1 pF – 30 pFです。Cxの値が大きいほど感度が低下します。

*   ③：Xadowインターフェース
*   ④：オンボードタッチキー0
*   ⑤：オンボードタッチキー1
*   ⑥：オンボードタッチキー2

## 使用方法
---
デモ:

ボード上のタッチパッドに触れると、シリアルポートからメッセージが表示されます。

## ハードウェアのインストール
---
- Xadow - Q Touch SensorをXadow - Main Boardに接続します。

## ソフトウェア部分
---
1) ライブラリをダウンロードします [[Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)];

2) Arduino IDEのライブラリフォルダに解凍します。パス: ..\arduino-1.0.5\libraries.

3) 次のパスからコードを直接開きます: File -> Example -> getTouchNumber.ino

4) コードをアップロードします。正しいボードタイプとCOMポートを選択する必要があることに注意してください。

以下のように表示されます:

![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Q_Touch_Demo_output.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
*   [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)

*   [回路図PDF](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0.pdf)

*   [Eagleファイル](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip)

*   [AT42QT107データシート](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/AT42QT1070-MMH.pdf)

<!-- *   [指タッチを検出する方法](/ja/How_to_detect_finger_touch) -->

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