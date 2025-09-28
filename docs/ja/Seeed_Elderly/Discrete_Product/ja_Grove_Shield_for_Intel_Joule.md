---
description: Intel Joule用Groveシールド
title: Intel Joule用Groveシールド
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Shield_for_Intel_Joule
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/1.jpg)

2016年のIntel Developer Forumで、Intelは高い計算能力、RAM、ストレージを備えたLinuxシステムオンモジュールであるJouleモジュールの提供を発表しました。このGroveシールドは、強力なIntel Joule™にGroveモジュールファミリーを導入し、発明家やIoT開発者がプロジェクトをより便利かつ迅速に作成できるようにすることを目的としています。

Jouleボードに簡単に接続するだけで、I2C、UART、デジタルI/O、アナログ入力などのインターフェースを含む8つの堅牢で使いやすいGroveコネクタをすぐに利用できます。豊富なGroveコネクタに加えて、プロジェクトでさらに多くのGPIOが必要な場合に備えて、シールドには2x20ピンヘッダーも保持されています。ボードに統合されたスイッチにより、動作電圧を5Vまたは3.3Vに選択することができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Shield-for-Intel-Joule-p-2782.html)

## 特徴

- インターフェース: 8つのGroveコネクタ

- プラグアンドプレイ

- インターフェース詳細: I2C x 3、UART x 1、デジタル x 2、アナログ x 2

- 動作電圧: 5V/3.3V

- 動作電圧を選択するためのスイッチ

- 4チャンネルアナログインターフェース、解像度: 12ビット

- 動作温度: -40 - 85℃

- サイズ: 84.9*51.7mm

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Grove_Shield_for_Intel_Joule/img/Grove%20Shield%20for%20intel%20Joule%20Pin.png)

- Groveアナログポート: ⑥/⑨

- Groveデジタルポート: ⑧/⑩

- Grove UARTポート: ⑦

- Grove I2Cポート: ③/④/⑤

- [Intel JouleのBreakout 1 / J12: ①](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- [Intel JouleのBreakout 2 / J13: ②](https://www.intel.com/content/www/us/en/support/boards-and-kits/000022494.html)

- 3.3V & 5V電源スイッチ: ⑪

### ピン間接続図
|Groveシールドコネクタ/ピン|SOC（回路図）信号|TuChuckコネクタ/ピン|
|:---:|:---:|:---:|
|J1|Breakout1|J12|
|J2|Breakout2|J13|
|J3-1|I2C_0_SCL_H|J12-13|
|J3-2|I2C_0_SDA_H|J12-11|
|J4-1|I2C_1_SCL_H|J13-33|
|J4-2|I2C_1_SDA_H|J13-31|
|J5-1|I2C_2_SCL_H|J13-37|
|J5-2|I2C_2_SDA_H|J13-35|
|J6-1|AIN2|/|
|J6-2|AIN3|/|
|J7-1|UART_0_TXD|J12-7|
|J7-2|UART_0_RXD|J13-28|
|J8-1|Digital_1_PWM_0|J12-26|
|J8-2|Digital_1_PWM_1|J12-28|
|J9-1|AIN0|/|
|J9-2|AIN01|/|
|J10-1|Digital_2_PWM_2|J12-30|
|J10-2|Digital_2_PWM_3|J12-32|

:::note
    * シールドを接続する際は、向きに注意してください。
    * 現時点では、LibmraaはJouleのUARTピンをサポートしていません。そのため、UARTインターフェースは利用できません。
:::

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Intel Joule用Groveシールド回路図ファイル](https://github.com/SeeedDocument/Grove_Shield_for_Intel_Joule/tree/master/res)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>