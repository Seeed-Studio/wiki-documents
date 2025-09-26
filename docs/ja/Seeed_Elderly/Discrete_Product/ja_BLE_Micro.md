---
description: BLE Micro
title: BLE Micro
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BLE_Micro
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE%20Micro_03.jpg)

BLE Microは、nRF51822 SoCを使用したBluetooth® Smart設計向けの低コストARM Cortex-M0ベースのモジュールです。このモジュールは、最大23個のGPIOピンにピンパッドを介してアクセス可能で、オンボードPCBアンテナを組み込むことで材料コストを最小化しつつ、優れた性能を提供します。アプリケーションエンジニアは、特定のインピーダンスマッチングや微細ピッチのはんだ付けに関連する無線設計の問題を心配することなく、このモジュールを簡単に適用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Micro-BLE-Module-w%26-Cortex-M0-Based-nRF51822-SoC-p-1975.html)

## 特徴
---
*   マルチプロトコル2.4GHz無線

*   32ビットARM Cortex M0プロセッサ

*   256kBフラッシュ/16kB RAM

*   +4dBmから-20dBmまでのプログラム可能な出力電力

*   柔軟で構成可能な23ピンGPIO

*   広い供給電圧範囲（1.8Vから3.6V）

*   RSSI


## 仕様
---
仕様|値
--|--
マイクロプロセッサ|32ビットARM Cortex M0ベースのnRF51822
外形寸法|13.0mm x 18.5mm x 2.3mm
電源|3.3V
オンエアデータレート|250 kbps、1 Mbpsまたは2 Mbps
変調方式|GFSK
出力電力|プログラム可能: +4から-20dBm（4dBステップ）
感度|-92.5dBm Bluetooth Low Energy / 250kbpsで96dBm / 1Mbpsで-90dBm / 2Mbpsで-85dBm
無線電流消費量 LDO 1.8V|+4dBM出力電力で16mA / 0dBm出力電力で10.5mA / 1Mbpsで13mA
無線電流消費量 DC-DC 3V|+4dBm出力電力で10.5mA / 0dBm出力電力で8.1mA / 1Mbpsで9.5mA
システム電流消費量|RAM保持なしで420nA / 8k RAM保持で530nA / IDLEモードで全周辺機器2μA
ハードウェアセキュリティ|128ビットAES ECB/CCM/AARコプロセッサ
GPIO|23
周辺機器|10ビットADC / 温度センサー / RTC / RNG

## ピン配置
---

BLE Microの底面ビュー:

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Pinout.png)

注意: ピンSWDIOはnRESETとしても使用されます。


## 寸法
---

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Dimension.jpeg)

## オーバー・ザ・エア
---
BLE Microモジュールには2つのバッチがあり、1つはNordic S110 SoftDevice 6.0と「DfuTarg」というBLEデバイス名を持ち、もう1つはS110 SoftDevice 7.0と「SD7DFU」というBLEデバイス名を持っています。
BLE Microには事前にフラッシュされたOTAブートローダーが搭載されています。OTAモードに入るには以下の手順を実行してください:

1. BLE Microのp18をGNDに接続します。

2. BLE Microの電源をオンにします。

3. SoftDevice 6.0の場合は「DfuTarg」、SoftDevice 7.0の場合は「SD7DFU」という名前のBLEデバイスがスキャン可能になります。

4. [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)を使用してBLEアプリをアップグレードします。

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Ota-ui.png)

## SWDインターフェースを介したダウンロードとデバッグ
---
BLE Microの新しいアプリケーションを[Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html)またはJ-Linkを使用してSWDインターフェースを介してダウンロードおよびデバッグできます。Arch BLEはBLE MicroとCMSIS DAPインターフェースを組み合わせたもので、ドラッグ＆ドロッププログラミング、デバッグ、USB仮想シリアルポート通信などの機能を提供します。

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Using_arch_ble_to_flash_ble_micro.png)

## アプリケーションの開発
---
[Seeedstudio mbed BLE プロジェクト](https://github.com/Seeed-Studio/mbed_ble)（または [SoftDevice 6.0 ブランチ](https://github.com/Seeed-Studio/mbed_ble/tree/softdevice_v6)）にアクセスして開発を開始してください。カスタムアプリケーションの hex ファイルを取得した後、OTA を使用して BLE Micro をアップグレードします。

Docker に精通している場合は、Paul によって作成された [Docker コンテナ](https://registry.hub.docker.com/u/skyplabs/ble-micro/) を使用してツールチェーンを迅速にセットアップできます。[Dockerfile](https://github.com/SkypLabs/ble_micro_dockerfile) を使用して開始してください。

<!-- [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html) をお持ちの場合は、[ARM mbed クラウドベース IDE](https://developer.mbed.org/compiler/) を使用することもできます。[Arch BLE wiki](/ja/Arch_BLE) も参照してください。 -->

## BLE UART
---
デフォルトでは、BLE Micro は BLE から UART デバイスとして動作します。Android または iOS に接続可能です。

*   BLE デバイス名: nRF UART

*   UART RX: p7

*   UART TX: p8

*   UART ボーレート: 38400

*   Android アプリ: [nRF UART on Google Play](https://play.google.com/store/apps/details?id=com.nordicsemi.nrfUARTv2&amp;hl=en)

*   iOS アプリ: [nRF UART on iTunes](https://itunes.apple.com/us/app/nrf-uart/id614594903?mt=8)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
*   [回路図 pdf](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro.pdf)

*   [Eagle ファイル](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip)

*   [Eagle ライブラリ](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_Eagle_Library.zip)

*   [ファームウェア](https://files.seeedstudio.com/wiki/BLE_Micro/res/Ble_micro_firmware.zip)

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