---
description: この Wiki では、Wi-Fi 6 および Bluetooth に対応し、NVIDIA Jetson デバイスと互換性のある RTL8852BE 無線モジュールの機能と仕様を紹介します。この記事では、その技術仕様、JetPack 5 および JetPack 6 向けのドライバインストール方法、無線ネットワークおよび Bluetooth の設定方法について詳しく説明します。
title: Jetson 向け RTL8852BE 無線モジュール
keywords:
  - Edge
  - reComputer
  - Wifi
  - Wifi 6
  - Bluetooth
  - Wireless
  - RTL8852BE
slug: /rtl8852be_wireless_module_for_jetson
last_update:
  date: 4/14/2026
  author: Zibo
createdAt: '2026-04-14'
updatedAt: '2026-06-17'
sku: 100042928
url: https://wiki.seeedstudio.com/ja/rtl8852be_wireless_module_for_jetson/
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/8852be.png"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span>
    </strong>
  </a>
</div>



RTL8852BE は、Realtek チップセットをベースとした Wi-Fi 6 (802.11ax) 対応の M.2 無線モジュールです。WLAN 用の PCIe インターフェースと Bluetooth 用の USB インターフェースを統合しており、従来世代の Wi-Fi 5 モジュールと比べて大幅に高いスループットと低レイテンシを実現します。高性能な無線接続を必要とする [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) のような組み込み機器に最適です。

## 特長

- 2.4 GHz / 5 GHz デュアルバンド対応
- IEEE 802.11 a/b/g/n/ax (Wi-Fi 6)
- 5 GHz 帯で最大 1200 Mbps の PHY レート
- フォームファクタ：M.2 2230、A キーまたは E キー
- 電源：DC 3.3V
- Linux (JetPack 5 / JetPack 6)、Windows 10/11 対応

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>チップセット</td>
      <td>**RTL8852BE**</td>
    </tr>
    <tr>
      <td>WLAN 規格</td>
      <td>IEEE 802.11 a/b/g/n/ax (Wi-Fi 6)</td>
    </tr>
    <tr>
      <td>BT 規格</td>
      <td>Bluetooth 5.2</td>
    </tr>
    <tr>
      <td>ホストインターフェース</td>
      <td>WLAN 用 PCIe 2.1/2.0 & Bluetooth 用 USB 2.0</td>
    </tr>
    <tr>
      <td>アンテナ</td>
      <td>MHF4 コネクタを介して外部アンテナに接続</td>
    </tr>
    <tr>
      <td>寸法</td>
      <td>M.2 2230 (22 x 30 x 2.15 mm)</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>DC 3.3V</td>
    </tr>
    <tr>
      <td>最大無線速度</td>
      <td>最大 1200 Mbps</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td>-20°C ～ +70°C</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td>10% ～ 95% RH（結露なきこと）</td>
    </tr>
    </table>
</div>

## 対応デバイス

すべての reComputer シリーズ

- すべての reComputer シリーズ

## ドライバのインストール

RTL8852BE モジュールは、Jetson によって PCIe デバイスとして検出される場合がありますが、ドライバが自動的にロードされないことがあります。JetPack のバージョンに応じて、ドライバを手動でインストールする必要があります。

```bash
lspci | grep -i network
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/lspci.PNG"/>
</div>



### JetPack 5.x

JetPack 5 の場合は、[lwfinger/rtw8852be](https://github.com/lwfinger/rtw8852be) ドライバを使用します：

```bash
git clone https://github.com/lwfinger/rtw8852be.git
cd rtw8852be/
sudo apt-get update
sudo apt-get install make gcc linux-headers-$(uname -r) build-essential git
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp5_install.png"/>
</div>

```bash
make
sudo make install
sudo modprobe 8852be
```

### JetPack 6.x

JetPack 6 の場合は、[rtw89](https://github.com/a5a5aa555oo/rtw89) ドライバを使用します：

```bash
git clone https://github.com/a5a5aa555oo/rtw89
cd rtw89
```

`Makefile` を編集して、正しいカーネルヘッダのパスを設定します：

```diff
# JP 6.2
KDIR ?= /usr/src/linux-headers-5.15.148-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/

# JP 6.0
KDIR ?= /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/makefile.png"/>
</div>

その後、ビルドしてインストールします：

```bash
make
sudo make install
sudo modprobe rtw89_8852be
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/jp6_install.png"/>
</div>
## 無線モジュールの確認
:::info
インターフェース名は JetPack のバージョンによって異なる場合があります：

- JetPack 5：通常は `wlan0`
- JetPack 6：`wlP1p1s0` として表示される場合があります

以下のコマンド内のインターフェース名は、必要に応じて読み替えてください。次のコマンドで確認できます：
```bash
ifconfig
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/interface.png"/>
</div>

:::

## 無線ネットワークの設定

### 近くの WiFi ネットワークをスキャンする

```bash
sudo iw dev wlan0 scan | grep -E "SSID|freq"
```

異なる場合は、`wlan0` を実際のインターフェース名に置き換えてください。

### WiFi ネットワークに接続する

```bash
sudo nmcli device wifi connect "YOUR_SSID" password "YOUR_PASSWORD" ifname wlan0
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/link_wifi.png"/>
</div>

### WiFi 6 接続を確認する

現在のリンク状態を確認します：

```bash
iw dev wlan0 link
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/veryfiy_wifi6.PNG"/>
</div>

出力には次のような情報が表示されます：

- **freq**：動作周波数（例：5180 MHz は 5 GHz 帯に相当）
- **HE-MCS**：Wi-Fi 6 の変調および符号化方式（例：MCS 9 は最高の符号化効率を表します）
- **TX/RX rate**：現在の送信および受信速度

## Bluetooth の設定

RTL8852BE モジュールの Bluetooth 機能は、`bluetoothctl` を使用して設定できます：

```bash
bluetoothctl
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/rtl8852be/bluetooth.png"/>
</div>
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
