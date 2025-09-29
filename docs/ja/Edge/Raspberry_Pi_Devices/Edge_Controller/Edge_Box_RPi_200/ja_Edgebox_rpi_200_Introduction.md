---
description: Edge Controller 入門ガイド
title: Edge Box RPI-200 入門ガイド
keywords:
- Raspberry pi
- Edge Controller
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge_Box_introduction
last_update:
  date: 2/29/2024
  author: Kasun Thushara
---

## はじめに

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

EdgeBox-RPI-200シリーズは、多様な産業用アプリケーション向けに設計されたRaspberry Piベースのオールインワン産業用エッジコンピューティングコントローラーです。高いスケーラビリティと堅牢なハードウェアを誇り、広範なRaspberry Pi産業用ソフトウェアエコシステムとシームレスに統合されます。これにより、スマート自動化および産業用IoT（IIoT）ソリューションに最適な選択肢となっています。

エッジコントローラーは、従来のPLCやPACに代わる汎用性の高い代替品として、慎重に設計されたオペレーティングシステムを通じて運用技術（OT）と情報技術（IT）の両方のニーズに対応します。決定論的ランタイムを保証し、分析などの高度なタスクのためのコンピューティング環境を提供し、様々な産業シナリオでの有用性を向上させます。スマートフォン時代により現代の労働力が最新のプログラミング言語と開発キット環境に精通していることから、EdgeBox-RPI-200シリーズコントローラーはユーザーフレンドリーなインターフェースを提供します。そのコンパクトなフォームファクターにより、リアルタイム動作とマルチプロセス制御が可能で、PLC、PAC、IIoTゲートウェイ、OPC UAサーバー、産業用PCなど、多様な産業用途に対応します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

**オールインワンコントローラー：** PLC、PAC、IIoTゲートウェイ、OPC UAサーバー、産業用PCの機能を統合。

**強力なプロセッサー：** 4GB RAM、16GB eMMCを搭載したRaspberry Pi Compute Module 4。リアルタイム動作、マルチプロセスサポート。

**豊富なIOとインターフェース：** 様々な産業用プロトコルをサポート。

**通信機能：** ワイヤレス接続、ギガビットイーサネット。複数のクラウドサービスと互換性。

**堅牢なハードウェア設計：** アルミニウムヒートシンク、35mm DIN、壁面取り付け。

**Raspberry Piエコシステム：** Codesys、Node Red、MQTT、OPC UA、Ignitionなどと互換性。

## 仕様

| パラメータ                | 詳細                                        |
|---------------------------|---------------------------------------------|
|**基本**                   |                        |
| CPUコア                   | 4コア Raspberry Pi CM4                      |
| メモリ                    | 1GB 2GB 4GB 8GB                             |
| ストレージ                | 8GB16GB 32GB                                |
| ワイヤレス                | WiFi                                        |
|                           | 2.4 GHz、5.0 GHz IEEE 802.11 b/g/n/ac搭載   |
| Bluetooth                | Bluetooth 5.0、BLE搭載                       |
| セルラー                  | Mini-PCIe対応 4G LTE（Quectel EC20/EC25テスト済み）|
| LoRa®                     | Mini-PCIe対応 LoRaWAN®（Seeed WM1302テスト済み）|
| **インターフェース**      |                                        |
| イーサネット              | 1000M RJ45 *1                               |
| HDMI                     | HDMI 2.0 最大4k@60fps                        |
| USB                      | USB2.0 A*2                                  |
| RSシリアル                | RS485 *1（絶縁）                         |
|                           | RS232 *1                                    |
| M.2ソケット               | 2242 NVME SSDカード                          |
| DI                        | 2（絶縁）                                   |
|                           | DC入力電圧 - 24V、電流 - 1000mA              |
| DO                        | 2（絶縁）                                   |
|                           | 出力電圧 - 60V未満、電流容量 - 500mA          |
| **追加機能**              |                                            |
| 電源供給                  | DC 12V - 36V                                |
| RTC                       | RTC                                         |
| ウォッチドッグタイマー    | スタンドアロン                              |
| 暗号化チップ              | Atecc608a（オプション）                      |
| 無停電電源装置            | UPS（オプション）                           |
| 動作温度                  | -20 ～ +60 °C                               |
| 認証                      | RoHS、CE、FCC、TELEC、UKCA                   |

## Raspberry Pi 産業用ソフトウェアエコシステム

優れた Raspberry Pi 産業用ソフトウェアエコシステムにより、EdgeBox には豊富なソフトウェアと自律プラットフォームがサポートされていることがわかります。

- [**Codesys**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## ハードウェア概要

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## ブロック図

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## 多機能 phoenix コネクタ

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## 初回起動

**ステップ 01:** 電源線をピン番号 1 と 2 に接続します。ピン番号 1 は電源用、ピン番号 2 はグランド用です。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
PE 信号はオプションです。EMI が存在しない場合、PE 接続は開放のままにできます。
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**ステップ 02**: 次に、イーサネットケーブルを接続します。最終的なセットアップは次のようになります

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**ステップ 03:** その後、IP アドレスを特定する必要があります。これを行うには、IP スキャンソフトウェアの使用を検討するか、ルーターの webUI を使用できます。特定したら、SSH を利用して Edge Box 200 との通信を確立します。

:::note
ユーザー名は pi、パスワードは raspberry です
:::

Edge Box-200 は、Raspberry Pi OS がプリインストールされた状態でお手元に届きます。HDMI ケーブルを使用するか、モニターを接続してグラフィカルユーザーインターフェースも使用できます。簡単にするために VNC サーバーを使用できます。

そのためにコマンドラインで次のように入力します：

```sh
sudo raspi-config
```

:::note
新しいOSインストールの場合、Raspberry Pi CM4のブートモード選択機能を含む最小限の開発ボードを購入する必要があります。[Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)はこの目的に最適です。
:::

**ステップ 04:** 次にinterfaceオプションを選択します

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>

**ステップ 05:** 次にVNCを選択して有効にします

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**ステップ 06:** 次にEdgeBoxを再起動します

```sh
sudo reboot
```

ローカルエリアネットワークとReal VNCがインストールされたPCを使用して、Edge-box 200 RPi GUIと直接やり取りできます。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## インターフェース

### シリアルポート（RS232およびRS485）

時には、クライアントとRS232またはRS485プロトコルで通信する必要がある場合があります。EdgeBox RPI 200には、シリアル通信用の専用ポートがあります。接続は以下の通りです：

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note
RS485用の120オーム終端抵抗は内部に設置されています。RS485_GND信号は「GND」信号から絶縁されています。シールド付きツイストペア線を使用する場合、RS485_GNDはシールドに接続されます。
:::

### DI&DO

2つのデジタル絶縁入力と2つのデジタル出力をEdgeBox RPI 200デバイスに接続できます。ピン配置は以下の通りです

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

これらの接続についてさらに理解するには、以下の図を参照してください

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note

- 入力のDC電圧は24V（±10%）です。
- 出力のDC電圧は60V未満である必要があり、電流容量は500maです。
- 入力のチャンネル0とチャンネル1は互いに絶縁されています
- 出力のチャンネル0とチャンネル1は互いに絶縁されています

:::

## 追加リソース

- [Edgebox Broadsheet](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Edgebox User Manual](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [EdgeBox 3D File](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## 技術サポート

当社の製品をお選びいただき、ありがとうございます！当社の製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
