---
description: Xadow - IMU 9DOF
title: Xadow - IMU 9DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_IMU_9DOF
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_9dof.jpg)
Xadow - IMU 9DOFは、高性能な9軸モーション追跡モジュールであり、MPU-9150を基盤としています。MPU-9150は、スマートフォン、タブレット、ウェアラブルセンサーなどの消費者向け電子機器の低消費電力、低コスト、高性能要件に対応するために設計された世界初の統合型9軸モーション追跡デバイスです。MPU-9150は、ジャイロスコープ出力をデジタル化するための3つの16ビットADC、加速度計出力をデジタル化するための3つの16ビットADC、および磁力計出力をデジタル化するための3つの13ビットADCを備えています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-9DOF-p-1776.html)

## 仕様
---
- I2Cインターフェース
- 低コスト
- すべてのレジスタとの通信のための400kHz高速モードI2C
- ユーザーがプログラム可能なフルスケール範囲（±250、±500、±1000、±2000°/秒）を持つデジタル出力X、Y、Z軸角速度センサー（ジャイロスコープ）
- プログラム可能なフルスケール範囲（±2g、±4g、±8g、±16g）を持つデジタル出力3軸加速度計
- 磁力集中器を備えた3軸シリコンモノリシックホール効果磁力センサー

## インターフェース機能
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_-_IMU_9DOF.jpg)

- ①：12P FPCボトムコンタクト
- ②：アドレス選択抵抗：R4、R5（デフォルトアドレスは0x68）
  - アドレスが0x68の場合：R4は未はんだ。
  - アドレスが0x69の場合：R5は未はんだ。

## 使用方法
---
ライブラリを基に、シリアルモニターで加速度計、ジャイロスコープ、磁力計の値を表示できます。以下にモジュールの使用方法を示します。

**ハードウェアのインストール**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/IMU_9DOF.jpg)

ハードウェアのインストールは非常に簡単です。FPCケーブルを使用してXadow - メインボードに接続できます。

**ソフトウェア部分**
1. ライブラリをダウンロードします：[libraries.zip](https://github.com/Seeed-Studio/Grove_IMU_9DOF);
2. Arduino IDEのライブラリフォルダにライブラリを解凍します。パス：..\arduino-1.0.5\libraries。
3. IMU_9D0F_DemoファイルをArduino IDEのライブラリフォルダに解凍します。パス：..\arduino-1.0.5\libraries。
4. パス：File -> Example -> IMU_9D0F_Demoからコードを直接開きます。
5. コードをアップロードします。正しいボードタイプとCOMポートを選択する必要があることに注意してください。
6. 以下のように表示されます：

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/9DOF_Serial_Monitor.jpg)

静止状態では、z軸の出力値は約0.98gです。これを参考にしてセンサーが正常に動作するかどうかをテストできます。

**軸の方向**

以下の図は、感度軸の方向と回転の極性を示しています。

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/MPU9150.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow_IMU_9DOF_Eagle_File.zip](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip)
- [Xadow_IMU_9DOF_Sch_PDF File](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Sch_Of_Xadow-IMU_9DOF_v1.0.pdf)
- [MPU_9150_Datasheet.pdf](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/MPU-9150.pdf)

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