---
description: Tiny BLE
title: Tiny BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Tiny_BLE
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/BLE_Smurfs_Photo.png)

Tiny BLEは、低消費電力と小型サイズを念頭に設計されたBluetooth Low Energy開発ボードです。リアルタイムのエネルギー消費データを提供する電流測定機能が統合されており、開発者がソフトウェアを最適化して長寿命バッテリーのデバイスを設計するのに役立ちます。ARM mbedクラウドベースのIDEをサポートしており、便利なC/C++ SDKと多数のオープンソースライブラリを備えているため、プロトタイピングと開発が非常に簡単です。

|![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_interface.png) |![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_ble.png)
|---|---|

モジュール設計により、CMSIS DAPインターフェース部分とBLE部分の2つに分けることができます。CMSIS DAPインターフェース部分はスイスアーミーナイフのようなもので、ドラッグ＆ドロッププログラミング、CMSIS DAPデバッグ、USB仮想シリアルポート、電流測定、バッテリー充電を提供します。BLE部分はNordic nRF51822を基盤としており、Bluetooth Low Energy 2.4GHzマルチプロトコル無線と16MHzで動作する32ビットARM Cortex-M0コアを備えています。また、6自由度（3D加速度計と3Dジャイロスコープ）を持つMPU6050が統合されており、モーション検出機能を提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Tiny-BLE-BLE-%2B-6DOF-Mbed-Platform-p-2268.html)

## 特徴
---
* nRF51822: ARM Cortex-M0 + 2.4GHz無線（BLEまたはANT+）

* MPU-6050: 3D加速度計 + 3Dジャイロスコープ

* LPC11U35FHI33: CMSIS DAP

* 電流測定

* CN3065: USB部分のバッテリー充電ポート

* 電源供給: USB/バッテリー（3.5-4.2V）

* 出力電圧: 3.3V

* 4つのI/O、すべてアナログ入力、デジタル入力/出力、I2C、SPIまたはUARTとして使用可能

* VCC出力制御

## 仕様
---
<table>
<tr>
<th>仕様</th>
<th>値</th>
</tr>
<tr>
<td width="200px">マイクロコントローラー</td>
<td width="400px">nRF51822QFAA; LPC11U35FHI33</td>
</tr>
<tr>
<td>外形寸法</td>
<td>43.3mm x 29.0mm x 4.3mm</td>
</tr>
<tr>
<td>電源供給</td>
<td>USB/バッテリー（JST-1.0バッテリーホルダー）</td>
</tr>
</table>

## 始め方
---
![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Get_started_with_mbed.png)

1. [このリンク](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE)をクリックして、**mbedにログインまたはサインアップ**します。

2. [mbed_blinkyプログラムをインポート](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE)し、以下のようにmain.cppのコードを変更します。

3. 上部ツールバーの**Compile**アイコンをクリックしてプログラムをコンパイルし、コンパイルされたhexファイルをダウンロードします。

4. ダウンロードしたhexファイルをMBEDディスクにドラッグ＆ドロップします。

5. 青色のLEDが点滅します。
```
#include "mbed.h"

DigitalOut red(p22);           // 赤色LED
DigitalOut green(p21);         // 緑色LED
DigitalOut blue(p23);          // 青色LED

int main()
{
    while (true) {
        blue = !blue;
        wait(0.1);
    }
}
```

[Seeed_Tiny_BLE_Get_Startedプログラム](http://developer.mbed.org/teams/Seeed/code/Seeed_Tiny_BLE_Get_Started/)には、モーション検出、ボタン、バッテリーレベルの検出が含まれています。始めるのに良い参考資料です。

### デバッグ

SWDデバッグを有効にし、USB仮想シリアルを通じてデバッグメッセージを取得するには、[mbedのドライバー](https://developer.mbed.org/handbook/Windows-serial-configuration)をインストールしてください。

### エネルギーモニタリング

USB仮想シリアルポートのボーレートを4000000以上に変更すると、電流測定がトリガーされます。電力消費情報を簡単に取得できるように設計されたツール「Tiny BLE MONITOR」をご利用ください。

* [Tiny BLE MONITOR for Windows](http://tangram.qiniudn.com/ble_smurfs_monitor_v0.1.exe)

* [Tiny BLE MONITOR for Linux/Mac OS](https://github.com/Seeed-Studio/Tiny_BLE/tree/master/utils)、追加要件: pyqtgraph

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_monitor_preview.png)

### ファームウェアの更新または復元

Arch BLEの最新ファームウェアバージョンは、2015年2月6日にビルドされたv0221です。ファームウェアバージョンとビルド日を確認するには、MBEDディスクのMBED.HTMまたはDETAILS.TXTをテキストエディタで開いてください。

変更履歴:

* 2015-02-07 Mac OS X 10.10の問題を修正

ファームウェア:

* [最新のインターフェースファームウェア v221 2015-02-06](https://github.com/Seeed-Studio/Tiny_BLE/raw/master/seeed_tiny_ble_interface_latest.bin)

### オーバー・ザ・エア（OTA）

アプリケーションをオーバー・ザ・エア（OTA）で更新するためにカスタマイズされたDFUブートローダーを用意しました。[github.com/Seeed-Studio/nrf51_dfu_bootloader](https://github.com/Seeed-Studio/nrf51_dfu_bootloader)をご覧ください。また、[mbed.org FOTA](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates)も参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
*   [Tiny BLE V1.0 eagle ファイル](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip)

*   [Tiny BLE V1.0.pdf](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0_PDF.pdf)

*   [GitHub上のリソース](https://github.com/Seeed-Studio/Tiny_BLE)

*   [Fritzing パーツ](https://github.com/Seeed-Studio/Tiny_BLE/blob/master/tiny_ble.fzpz)

*   [MPU6050 ライブラリ](http://developer.mbed.org/teams/Seeed/code/eMPL_MPU6050/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>