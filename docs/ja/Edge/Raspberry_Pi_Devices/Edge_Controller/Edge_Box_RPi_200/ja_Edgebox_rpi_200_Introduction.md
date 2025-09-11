---
description: Edge Controller の始め方
title: Edge Box RPI-200 の始め方
keywords:
- Raspberry pi
- Edge Controller
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge_Box_introduction
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

EdgeBox-RPI-200シリーズは、Raspberry Piをベースとしたオールインワンの産業用エッジコンピューティングコントローラーであり、多様な産業用途に対応するよう設計されています。高い拡張性と堅牢なハードウェアを備え、広範なRaspberry Pi産業用ソフトウェアエコシステムとシームレスに統合されます。これにより、スマートオートメーションや産業用IoT（IIoT）ソリューションに最適な選択肢となります。

エッジコントローラーは、従来のPLCやPACの多用途な代替品として、運用技術（OT）と情報技術（IT）の両方のニーズに対応する慎重に設計されたオペレーティングシステムを提供します。これにより、決定論的なランタイムを確保し、分析などの高度なタスクのためのコンピューティング環境を提供します。スマートフォン時代により現代のプログラミング言語や開発キット環境に慣れた労働力にとって、EdgeBox-RPI-200シリーズコントローラーは使いやすいインターフェースを提供します。そのコンパクトな形状により、リアルタイム操作やマルチプロセス制御が可能となり、PLC、PAC、IIoTゲートウェイ、OPC UAサーバー、産業用PCなどの多様な産業用途に対応します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

**オールインワンコントローラー:** PLC、PAC、IIoTゲートウェイ、OPC UAサーバー、産業用PCの機能を統合。

**強力なプロセッサ:** Raspberry Pi Compute Module 4を搭載（4GB RAM、16GB eMMC）。リアルタイム操作、マルチプロセス対応。

**豊富なIOとインターフェース:** 多様な産業プロトコルをサポート。

**通信機能:** ワイヤレス接続、ギガビットイーサネット。複数のクラウドサービスに対応。

**堅牢なハードウェア設計:** アルミニウムヒートシンク、35mm DIN、壁面取り付け対応。

**Raspberry Piエコシステム:** Codesys、Node Red、MQTT、OPC UA、Ignitionなどに対応。

## 仕様

<table>
<tr>
  <td>パラメータ</td>
  <td>詳細</td>
</tr>
<tr>
  <td><strong>基本</strong></td>
  <td></td>
</tr>
<tr>
  <td>CPUコア</td>
  <td>4コア Raspberry Pi CM4</td>
</tr>
<tr>
  <td>メモリ</td>
  <td>1GB、2GB、4GB、8GB</td>
</tr>
<tr>
  <td>ストレージ</td>
  <td>8GB、16GB、32GB</td>
</tr>
<tr>
  <td>ワイヤレス</td>
  <td>WiFi</td>
</tr>
<tr>
  <td></td>
  <td>2.4 GHz、5.0 GHz IEEE 802.11 b/g/n/ac対応</td>
</tr>
<tr>
  <td>Bluetooth</td>
  <td>Bluetooth 5.0、BLE対応</td>
</tr>
<tr>
  <td>セルラー</td>
  <td>Mini-PCIe対応 4G LTE (Quectel EC20/EC25テスト済み)</td>
</tr>
<tr>
  <td>LoRa®</td>
  <td>Mini-PCIe対応 LoRaWAN® (Seeed WM1302テスト済み)</td>
</tr>
<tr>
  <td><strong>インターフェース</strong></td>
  <td></td>
</tr>
<tr>
  <td>イーサネット</td>
  <td>1000M RJ45 *1</td>
</tr>
<tr>
  <td>HDMI</td>
  <td>HDMI 2.0 最大4k@60fps</td>
</tr>
<tr>
  <td>USB</td>
  <td>USB2.0 A*2</td>
</tr>
<tr>
  <td>RSシリアル</td>
  <td>RS485 *1 (絶縁)</td>
</tr>
<tr>
  <td></td>
  <td>RS232 *1</td>
</tr>
<tr>
  <td>M.2ソケット</td>
  <td>2242 NVME SSDカード</td>
</tr>
<tr>
  <td>DI</td>
  <td>2 (絶縁)</td>
</tr>
<tr>
  <td></td>
  <td>DC入力電圧 - 24V、電流 - 1000mA</td>
</tr>
<tr>
  <td>DO</td>
  <td>2 (絶縁)</td>
</tr>
<tr>
  <td></td>
  <td>出力電圧 - 60V以下、電流容量 - 500mA</td>
</tr>
<tr>
  <td><strong>追加機能</strong></td>
  <td></td>
</tr>
<tr>
  <td>電源供給</td>
  <td>DC 12V - 36V</td>
</tr>
<tr>
  <td>RTC</td>
  <td>RTC</td>
</tr>
<tr>
  <td>ウォッチドッグタイマー</td>
  <td>スタンドアロン</td>
</tr>
<tr>
  <td>暗号化チップ</td>
  <td>Atecc608a (オプション)</td>
</tr>
<tr>
  <td>無停電電源装置</td>
  <td>UPS (オプション)</td>
</tr>
<tr>
  <td>動作温度</td>
  <td>-20 ～ +60 °C</td>
</tr>
<tr>
  <td>認証</td>
  <td>RoHS、CE、FCC、TELEC、UKCA</td>
</tr>
</table>

## Raspberry Pi 工業用ソフトウェアエコシステム

優れた Raspberry Pi 工業用ソフトウェアエコシステムにより、EdgeBox は豊富なソフトウェアと自律プラットフォームのサポートを提供しています。
- [**Codesys**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## ハードウェア概要

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## ブロック図

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## マルチ機能フェニックスコネクタ

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## 初回起動

**ステップ 01:** ピン番号 1 と 2 に電源ラインを接続します。ピン番号 1 は電源用、ピン番号 2 はグラウンド用です。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
PE 信号はオプションです。EMI が存在しない場合、PE 接続は開いたままにしておくことができます。
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**ステップ 02:** 次に、イーサネットケーブルを接続します。最終的なセットアップは以下のようになります。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**ステップ 03:** 次に、IP アドレスを特定する必要があります。これを行うには、IP スキャンソフトウェアを使用するか、ルーターの WebUI を使用してください。IP アドレスが特定できたら、SSH を利用して Edge Box 200 と通信を確立します。

:::note
ユーザー名は pi、パスワードは raspberry です。
:::

Edge Box-200 は Raspberry Pi OS がプリインストールされた状態で提供されます。HDMI ケーブルを使用してモニターを接続し、グラフィカルユーザーインターフェースを使用することもできます。簡便性を考慮して VNC サーバーを使用することもできます。

そのためには、コマンドラインで以下を入力してください：

```sh
sudo raspi-config
```

:::note 
新しい OS をインストールする場合、Raspberry Pi CM4 のブートモードを選択する機能を含む最低限の開発ボードを購入する必要があります。[Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) はこの目的に最適です。
:::

**ステップ 04:** 次に、インターフェースオプションを選択します。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>

**ステップ 05:** 次に VNC を選択し、有効にします。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**ステップ 06:** 次に EdgeBox を再起動します。

```sh
sudo reboot
```

その後、ローカルエリアネットワークと Real VNC がインストールされた PC を使用して、Edge-box 200 RPi GUI に直接アクセスできます。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## インターフェース

### シリアルポート (RS232 および RS485)

場合によっては、クライアントと RS232 または RS485 プロトコルで通信する必要があるかもしれません。EdgeBox RPI 200 にはシリアル通信用の専用ポートがあります。接続は以下の通りです：

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note
RS485 用の 120 オーム終端抵抗は内部に取り付けられています。RS485_GND 信号は「GND」信号と絶縁されています。シールド付きツイストペア線を使用する場合、RS485_GND はシールドに接続されます。
:::

### DI&DO

2 つのデジタル絶縁入力と 2 つのデジタル出力を EdgeBox RPI 200 デバイスに接続できます。ピン配置は以下の通りです：

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

これらの接続についてさらに理解するために、以下の図を参照してください：

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note
- 入力用の DC 電圧は 24V (+- 10%) です。
- 出力用の DC 電圧は 60V 以下である必要があり、電流容量は 500mA です。
- 入力のチャンネル 0 とチャンネル 1 は互いに絶縁されています。
- 出力のチャンネル 0 とチャンネル 1 も互いに絶縁されています。
:::

## 追加リソース

- [Edgebox ブロードシート](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Edgebox ユーザーマニュアル](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [EdgeBox 3D ファイル](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>