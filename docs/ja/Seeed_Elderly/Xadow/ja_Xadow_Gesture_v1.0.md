---
description: Xadow - Gesture v1.0
title: Xadow - Gesture v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Gesture_v1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_3.jpg)

Xadow - Gesture v1.0に搭載されているセンサーはPAJ7620U2で、ジェスチャー認識機能を一般的なI2Cインターフェースと統合した単一チップです。このセンサーは、上方向、下方向、左方向、右方向、前方向、後方向、時計回りの円、反時計回りの円、上から下、下から上、左から右、右から左、そしてウェーブの13種類のジェスチャーを認識できます。これらのジェスチャー情報は、I2Cバスを介して簡単に取得できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Gesture-v1.0-p-2460.html)

## 特徴
---
- 13種類のジェスチャー認識
- ジェスチャー速度は、通常モードで60°/秒から600°/秒、ゲームモードで60°/秒から1200°/秒
- 環境光耐性：< 100k Lux
- 内蔵の近接検出機能
- 最大400 kbit/sのI2Cインターフェース
- Xadowインターフェースに対応

## 仕様
---
- センサー: PAJ7620U2
- 電源供給: 2.8V～3.3V、I/O電圧は1.8V～3.3V
- 対応インターフェース: Xadowインターフェース
- インターフェース: IIC
- 動作温度: -40°C～+85°C
- 寸法: 25 * 20mm

## インターフェース機能
---
![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_2.jpg)

- P1: ショートサーキットすると、割り込み信号がピンPF0/A5に接続されます。
- U1: PAJ7620U2; 統合ジェスチャー認識センサー。
- J1, J2: FPCインターフェース。

:::note
Xadow - GestureをXadowメインボードに接続する際は、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填コーナーを別のモジュールの直角部分に接続することです（各Xadowモジュールの4つのコーナーを参照）。
:::

## ピン説明
---
Xadowモジュールの両側のピンは対称的です。以下は、上から下までのインターフェースに関するピンの説明です。

![](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_5.jpg)

| Xadowピン | PAJ7620U2ピン | 機能 |
|---|---|---|
| 1 | NC | (PCINT1/SCLK)PB1 |
| 2 | NC | (PDI/PCINT2/MOSI)PB2 |
| 3 | NC | (PDO/PCINT3/MISO)PB3 |
| 4 | 3/INT | PF5(ADC5/TMS) |
| 5 | 1/VBUS , 11/VLED , 12/VDD | VCC |
| 6 | 6/GND , 10/GND | GND |
| 7 | 6/GND , 10/GND | GND |
| 8 | 1/VBUS , 11/VLED , 12/VDD | VCC |
| 9 | 5/SCL | (OC0B/SCL/INT0 )PD0 |
| 10 | 2/SDA | (SDA/INT1)PD1 |
| 11 | NC | (RXD/INT2)PD2 |
| 12 | NC | (TXD/INT3)PD3 |

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow - Gesture v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip)
- [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- [Xadow - Gestureライブラリ](https://github.com/Seeed-Studio/Grove_Guesture)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>