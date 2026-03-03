---
description: 4WD Driver Platform V1.0
title: 4WD Driver Platform V1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/4WD_Driver_Platform_V1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_1200.jpg)

4WD Driver Platform V1.0（Intel Edison チップは含まれていません）は、各モーターを双方向かつ完全に制御できる4輪駆動をサポートするモータードライバーボードです。このドライブボードの最も重要な特徴は、Groveインターフェースによる拡張性であり、これによりプロジェクトをより多様化することが可能です。また、詳細で簡単なSDK（ソフトウェア開発キット）が付属しており、開発プロセスを迅速かつ容易にします。Edisonを搭載することで、さまざまなニーズに応える強力なシステムを構築することができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html)

## 特徴
---
* USBからデバイスUARTブリッジをサポート
* OTG（On The Go）をサポート
* SPIプログラムポートをサポート
* Groveインターフェースをサポート：UARTポート*1、I2Cポート*3
* 双方向の4輪エンコーダーモーター駆動をサポート（ピーク電流：3A）
* 過電流、過負荷、短絡保護機能をサポート
* 詳細で簡単なSDK
* Intel Edisonプラットフォーム向けに設計

## 仕様
---

<table>
<tr>
<th>項目</th>
<th>仕様</th>
</tr>
<tr>
<td colspan="2"><strong>基本パラメータ</strong></td>
</tr>
<tr>
<td>入力電圧</td>
<td>6-16V</td>
</tr>
<tr>
<td>出力電圧</td>
<td>5V/4V/3.3V/1.8V</td>
</tr>
<tr>
<td>待機電流</td>
<td>150mA未満</td>
</tr>
<tr>
<td>寸法</td>
<td>130*110mm</td>
</tr>
<tr>
<td colspan="2"><strong>モータードライバー</strong></td>
</tr>
<tr>
<td>ドライバーチップ</td>
<td>MC33931（Freescale） * 4、独立</td>
</tr>
<tr>
<td>入力電圧</td>
<td>5-30V</td>
</tr>
<tr>
<td>出力電流</td>
<td>3A（最大）</td>
</tr>
<tr>
<td>保護機能</td>
<td>高温、低電圧、短絡発生時の自動出力停止</td>
</tr>
<tr>
<td colspan="2"><strong>拡張性</strong></td>
</tr>
<tr>
<td>I2Cインターフェース</td>
<td>3</td>
</tr>
<tr>
<td>SPIインターフェース</td>
<td>1</td>
</tr>
<tr>
<td>UARTインターフェース</td>
<td>2</td>
</tr>
<tr>
<td>USB OTGインターフェース</td>
<td>1</td>
</tr>
</table>

## 応用アイデア
---

* 各種ロボット

* モータードライバー

* 玩具の車

* 産業用制御

## ハードウェア概要
---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_3400_Modules.jpg)

**すべてのモーターインターフェースおよびGroveモジュールには、3.3V電圧のみが適用可能であることに注意してください。**

## 始め方
---

:::note
    このセクションでは基本的な開発環境の構築方法のみを示します。
以下のガイドに従って、プロジェクトの開発環境を構築することができます。
:::
### 4WD DriverボードにEdisonを組み立てる

**必要な材料**
- 4WD Driver Platform V1.0 *1

- Intel Edison *1

- Micro BからType AへのUSBケーブル *2

**ソフトウェア作業**

*   [Intel統合ツールパックをダウンロード（ドライバーと一緒にインストール）](http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe)

*   [Arduino IDEをダウンロード（Arduinoボードでプロジェクトを開発する場合）](http://downloads.arduino.cc/arduino-1.6.5-r5-windows.exe)

基本ルール：Intelサーバーへの接続速度が十分に速くない場合は、最初にドライバーとフラッシュツールのみをインストールすることをお勧めします。他のツールを個別にダウンロードする方がはるかに速いです。

:::note
    4WD Driver Platform V1.0は現在、Windows 10ではサポートされていません。
:::
**IDEを確認する**

[シリアル通信用のputtyをダウンロード](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

1. デバイスマネージャーを開きます。

2. USBシリアルポートを見つけます。ポート（COM & LPT）の下に、_USB Serial Port(COMx)_（例：USB Serial Port(COM3)）を見つけます。

3. puttyを起動し、以下の図に示すように設定します（赤い四角でマークされています）。

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_config.jpg)putty設定

4. 「Open」をクリックしてシリアルターミナルに入ります。

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_login.png)

puttyログイン

5. Enterキーを押してユーザー名とパスワードを入力し、Edisonのシステムにログインします。

:::note
    - 初めてEdisonチップを使用する場合、パスワードは存在しません。
    - Intel Flash Toolを使用して最新のファームウェアイメージをEdisonにフラッシュすることができます。
:::
6. これでIDEが正常にインストールされました。

## デモ
---
:::note
    - このセクションでは、いくつかの簡単な機能を実装したデモを紹介します。
    - 前のセクションで開発環境を正常に構築したことを確認し、Arduinoプラットフォームに関する基本的な知識を持っていることを前提としています。
:::
4WD Driver Platform V1.0を使用した実用的なアプリケーションについては、[Edison 4WD Auto Robotic Platform 2.0](https://wiki.seeedstudio.com/ja/Edison_4WD_Auto_Robotic_Platform_2.0/)を参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
*   [回路図ファイル](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip)

*   [Gitライブラリ(SDK)ファイル](https://github.com/Pillar1989/webrobot/blob/master/motor.py)

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