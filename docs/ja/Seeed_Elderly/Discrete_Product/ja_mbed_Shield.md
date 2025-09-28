---
description: Mbed Shield
title: Mbed Shield
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/mbed_Shield
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield_01.jpg)

Mbed Shieldは、Mbed LPC1768プロトタイピングボードを基にしたMbedアプリケーションボードです。センサーからの環境データを使用してイーサネットデバイスを制御することを想像してみてください。このボードは、CAN、イーサネット、USB、そして4つの標準Groveソケットなどの一連の外部インターフェースを統合し、1枚のボードにまとめています。Mbed Shieldは他の標準Arduinoシールドとも互換性があり、Mbedの拡張性をさらに強化します。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/mbed-shield-p-1390.html?cPath=132_134)

## 特徴
---
* 標準シールド形状設計
* Arduino互換ベースピン
* 多様なオンボードインターフェース：CAN、イーサネット、USB、Grove

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/mBed_Shield_Hardware_Overview.jpg)

## はじめに
---
ここでは、イーサネットデータとリムーバブルディスクデータを読み取る方法について簡単に説明します。

### 接続

- MbedプロトタイプボードのUSBコネクタをコンピュータのUSBポートに接続します。
- 新しいハードウェアが検出されたというプロンプトを待ちます。
- [Mbedシリアルポートドライバ](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip)をダウンロードしてインストールします。
- MbedプロトタイプボードをMbedベースシールドに差し込みます。

### Uディスクを読み取る

ユニバーサルシリアルバス（USB）は、今日のコンピュータで最も広く使用されているバスです。USBは、コンピュータと周辺機器間の接続を標準化するために特に設計されています。例えば、キーボード、マウス、USBオーディオデバイス、プリンタ、スキャナ、ディスクドライブ、またはカメラが同じバスを使用してコンピュータとデータを交換できます。USBデバイススタックは、USBの優れた機能をMbedに提供するために開発されました。

- USBインターフェースにUディスクを差し込みます。
- [MSCUsbHost.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip)をダウンロードし、Mbedディスクにファイルをコピーします。

:::note
    1) MSCUsbHost.binファイルはMbedオンラインコンパイラによって生成されます。  
    2) Mbedディスクに現れる関連のないbinファイルを削除してください。
:::
- リセットボタンを押します。シリアルポートは以下の情報を受信するはずです。

![](https://files.seeedstudio.com/wiki/mbed_Shield/img/MSCUsbHost.jpg)

### イーサネットデータを読み取る

この例では、イーサネット機能の使用方法を示します。

- 使用可能なイーサネットケーブルをイーサネットインターフェースに接続します。
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield1.jpg)
- [TCPSocket_HelloWorld.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip)をダウンロードし、MBEDディスクにファイルをコピーします。

:::note
    Mbedディスクに現れる関連のないbinファイルを削除してください。
:::
- リセットボタンを押します。シリアルポートは以下の情報を受信するはずです。
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Ethernet_Connector_Data.jpg)
- ウェブページを開くと、返された情報を確認できます。
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Ethernet.jpg)

## 回路図オンラインビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- **[Eagle]**[Mbed Shield Eagle File](https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip)
- **[PDF]**[Mbed Shield Schematic File](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20Sch.pdf)
- **[PDF]**[Mbed Shield PCB File](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20PCB.pdf)
- **[Tools]**[MSCUsbHost](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip)
- **[Tools]**[MbedDriver](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip)
- **[Tools]**[TCPSocket_HelloWorld](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip)

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