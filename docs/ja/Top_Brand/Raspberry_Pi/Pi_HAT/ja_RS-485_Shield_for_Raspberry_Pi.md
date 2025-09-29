---
description: Raspberry Pi用RS-485シールド
title: Raspberry Pi用RS-485シールド
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RS-485_Shield_for_Raspberry_Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/main.jpg)

RS-485はシリアル通信ネットワークにおけるコスト効率の高いソリューションです。データレートは最大10 Mbit/s、または低速時には最大1200mの距離で使用できます。このRS-485シールドは、Raspberry Pi用の標準的なアドオンボードです。シンプルなスクリュー端子とDB9インターフェースが統合されています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Raspberry Pi用RS-485シールド | 初期リリース                                                                                               | 2018年9月      |

## 特徴

- 各部品に1つのドライバと1つのレシーバ
- EMIノイズの最小化
- 最大2.5Mbpsの伝送速度
- ドライバのスルーレート制限なし
- 短絡電流制限
- フェイルセーフアプリケーション対応
- Raspberry Pi 3B/3B+/4をサポート

<!-- <div class="page"/></div> -->

## 仕様

|項目|値|
|:---|:---|
|動作供給電圧|3.3V|
|インターフェース|RS-485 DB9インターフェース X1<br />RS-485スクリューインターフェース X1 <br /> 2×13メスヘッダー（Raspberry Pi接続用）X1<br />  2×13拡張メスヘッダー X1<br />  Grove I2Cインターフェース X1|
|データレート|2.5Mbps|
|レシーバ数|32|
|保管温度範囲|-65～160℃|
|チャンネル数|8|
|解像度|12ビット|
|消費電力|伝送速度に応じて異なる消費電力|
|サイズ|長さ: 62mm 幅: 39.2mm 高さ: 21.8mm|
|重量|23g|
|パッケージサイズ|長さ: 140mm 幅: 75mm 高さ: 25mm|
|総重量|42g|

<!-- <div class="page"/></div> -->

## 主な用途

- 低消費電力RS-485トランシーバ
- レベル変換器
- EMIに敏感なアプリケーション向けトランシーバ
- 産業用制御ローカルエリアネットワーク
- 半二重アプリケーション

## ハードウェア概要

### ピン配置

**概要**

![Pin_map](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map.jpg)

<!-- <div class="page"/></div> -->

---
**RS-485 DB9インターフェース & RS-485スクリューインターフェース**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/8.jpg)

485インターフェースは差動信号伝送を使用します。ポートAが485デバイスのポートAに接続され、ポートBが485デバイスのポートBに接続されていることを確認してください。

>485-A: RS485データ送信線の端A、MAX485チップのピンAに接続。  
>485-B: RS485データ送信線の端B、MAX485チップのピンBに接続。  
>GND: Raspberry PiのGNDに接続。

[![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)

<p style={{textAlign: 'center'}}><font color="green">画像をクリックすると元のファイルを表示できます</font></p>

ご覧の通り、GPIO14とGPIO15がデータ伝送に使用され、GPIO18がイネーブル信号として使用されています。

論理信号の定義については、以下の表を参照してください。

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/function_table.jpg)

---
**Raspberry Pi用メスヘッダー**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/5.jpg)

このモジュールをRaspberry Piに接続するために2X13メスヘッダーを使用します。ピンが正しく揃っていることを確認してください。

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map_2.jpg)

---
**拡張メスヘッダー**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/6.jpg)

このRS-485シールドはRaspberry Piの26ピンを占有しますが、実際に使用されるのは5つのGPIOピンのみです。他の目的でこれらのピンが必要な場合に備えて、26ピンを取り出しています。

>GPIO占有リスト

GPIO番号|機能
:---:|---
GPIO02|Grove I2CポートのSDA
GPIO03|Grove I2CポートのSCL
GPIO14|Max485チップのピン**DI**に接続、データ伝送用。
GPIO15|Max485チップのピン**RO**に接続、データ伝送用。
GPIO18|Max485チップのピン**RE** & **DE**に接続、イネーブル信号として機能。

---
**Grove I2Cポート**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/3.jpg)

I2Cデバイスと簡単に使用できるようにI2Cインターフェースを予約しています。このポートのVCCは5Vであるため、モジュールが5V電圧に対応しているか確認する必要があります。

>SCL: I2Cシリアルクロック、Raspberry PiのGPIO03に接続。  
>SDA: I2Cシリアルデータ、Raspberry PiのGPIO02に接続。  
>VCC: Raspberry Piの5Vピンに接続。  
>GND: Raspberry PiのGNDピンに接続。

<!-- <div class="page"/></div> -->

---
**Max485チップ**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/7.jpg)

このシールドにはMAX485ESA ICを使用しています。このICの詳細については、[MAX485データシート](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)をご確認ください。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

<!-- <div class="page"/></div> -->

## はじめに

### ハードウェア

**必要な材料**

|Raspberry Pi|Raspberry Pi用RS-485シールド|
|------------|-----------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html)|

- **ステップ 1.** Raspberry Pi用RS-485シールドをRaspberry Piに接続します。

- **ステップ 2.** **485-A**を485ワイヤーAに接続し、**485-B**を485ワイヤーBに接続します。

:::note
    ワイヤーが逆に接続されている場合、通信はできません。
:::

- **ステップ 3.** Raspberry Piをmicro-USBケーブルで電源に接続します。

### ソフトウェア

#### 通信テストコード

新しいPythonファイルを作成し、以下のコードをそのファイルにコピーするか、リソースダウンロードエリアからソースファイルをダウンロードしてください。その後、ターミナルで実行します。

<!-- <div class="page"/></div> -->

**送信コード**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

send_str = "*******rs485888888--\n"

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200)

Tx_Enable = LED(18)
Tx_Enable.on()

while 1:
    ser.write(send_str)
    time.sleep(1)

```

<!-- <div class="page"/></div> -->

**受信コード**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200,timeout=1)
data = ''

Rx_Disable = LED(18)
Rx_Disable.off()

while True:
    str = ser.readall()  
    if str:  
        print str 

```

上記のコードをテストするには、2つのシールドと2つのRaspberry Piが必要です。または、PCのシリアルツールを使用してRaspberry Piと通信することもできます。

<!-- <div class="page"/></div> -->

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [RS-485 Shield for Raspberry Pi Eagle ファイル](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip)

- **[Zip]** [Python テストコード](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/Python_test.zip)

- **[PDF]** [MAX485 データシート](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)

- **[PDF]** [PDF形式のWiki](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485_Shield_for_Raspberry_Pi.pdf)

## 技術サポートと製品ディスカッション

 .
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>