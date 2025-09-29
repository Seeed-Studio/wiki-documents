---
description: BLE Nitrogen
title: BLE Nitrogen
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BLE_Nitrogen
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/cover.png)

Zephyrアプリケーションは、nRF52 Nitrogenハードウェア上で動作するためにnrf52_nitrogen構成を使用します。この構成は、Nordic Semiconductor nRF52832 ARM Cortex-M4F CPUおよび以下のデバイスをサポートします：

* NVIC（ネストされたベクタ割り込みコントローラ）
* SYSTICK（システムティックシステムクロック）
* UART
* GPIO
* FLASH

[Nordic Semiconductor Infocenter](http://infocenter.nordicsemi.com/)には、プロセッサの情報やデータシートが含まれています。

最新の[SDK](https://www.zephyrproject.org/downloads/tools)で開発環境を更新することを強くお勧めします。新しい機能は最新リリースに対してテストされています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Nitrogen-p-2711.html)


## 特徴

* 512kBフラッシュ、64kB RAMを備えたnRF52832マイクロコントローラ
    * Cortex M4
    * BLE
    * NFC
* ヒューズ保護付きUSB電源供給
* バッテリー管理
    * オンボードバッテリーチャージャー
    * バッテリーコネクタ
    * バッテリー充電インジケーターLED
* LPC11U35オンボードSWDデバッガ
    * SWDデバッガファームウェア
    * USB to UART
    * ドラッグ＆ドロップによるファームウェアアップグレード
    * ファームウェアアップグレード後の自動リセットと実行
* BLE消費電力測定
    * オンボード電流測定回路
    * 1uA測定能力
    * 最大150mAの電流測定
* 7つのLED
    * USR1、BT、PWR、CDC、DAP、MSD、バッテリー充電
* 2つのプッシュボタン
    * USRおよびRESET（LPC11U35ファームウェアアップグレード用）
* SWDデバッグコネクタ
    * nRF52832 SWDコネクタ
    * nRF52832 UARTコネクタ
* オンボードチップアンテナ
* 1.8V動作電圧
* 2x20ピン2.0mmピッチ低速コネクタ
* 96Boards IoT標準に完全対応


## 仕様

| パラメータ | 値 |
|-----------|-------|
|チップセット|	nRF52832 |
|クロックスピード |	64MHz|
|フラッシュ|	512KB|
|SRAM|	96KB|
|デジタル出力電圧|	1.8V|
|アナログピン|	4|
|アナログ入力電圧|	1.8V|
|寸法|	60x30mm|

## ハードウェア概要

![画像をここに挿入](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/hardware_ov.png)

1. **Micro USB** - デバッグ、プログラミング、電源供給、バッテリー充電用。

2. **LEDインジケーター**

* ***USR1*** - ユーザー制御LED、P0.29に接続。
* ***BT*** - Bluetoothインジケーター。このLEDはデバイスに接続すると点灯します。
* ***PWR*** - USBまたはバッテリーが挿入されると点灯。
* ***CDC*** - UARTデータインジケーター。
* ***DAP*** - SWDインジケーター。
* ***MSD*** - マスストレージ/ドラッグ＆ドロップインジケーター。

3. **バッテリーコネクタ** - 3.7Vリチウムバッテリー用のJST-1.0コネクタ。

* **充電インジケーター**
    * 点滅: バッテリー未挿入
    * 点灯: 充電中
    * 消灯: 充電完了

4. **リセットボタン** - システムをリセットするために押します。

5. **ユーザーボタン** - ユーザーボタン、P0.27に接続、プルアップ。

6. **デバッグ用UART**

7. **BTチップアンテナ**

8. **NFCアンテナUFLコネクタ**

9. **ピン** - 詳細はピンマップを参照。

A. IC - **NRF52832**

B. IC - **LPC11U35**

C. IC - **ETA6003**

## ピンマップ

[![画像をここに挿入](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)

:::note
    クリックして画像を拡大表示。
:::

## ソフトウェア

### ドライバのインストール

[Mbed用ドライバ](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe)をダウンロードしてください。

ボードをMicro USBケーブルでPCに接続し、mbedWinSerial_16466.exeをダブルクリックしてインストールします。その後、デバイスマネージャに新しいデバイスが表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/install_driver.png)

### 上級者向けガイド

[![画像をここに挿入](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/guide.png)](https://www.zephyrproject.org/)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Eagleファイル形式の回路図](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip)
* [PDF形式の回路図](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE%20Nitrogen%20v1.0_SCH.pdf)
* [Mbed用ドライバ](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>