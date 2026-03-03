---
description: EEPROMを更新する
title: Compute Module 4のEEPROMを更新する
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Raspberry_pi_CM4_update_eeprom
last_update:
  date: 05/15/2025
  author: Peter Pan
---


<!-- ---
name: EEPROMを更新する
category: ソフトウェア
bzurl: 
wikiurl: 
sku: 
--- -->

# Compute Module 4とは

Raspberry Pi Compute Module 4 (CM4)は、人気のRaspberry Pi 4 Model Bの計算能力を活用し、前世代と比較して劇的な性能向上を実現しています。高速なCPUコア、優れたマルチメディア機能、より多くのインターフェース機能を備えています。そして今回初めて、RAM密度や無線接続オプションの複数の選択肢が提供されています。

外形寸法に関しては、このバージョンでは完全に新しい機械的標準を採用しています。キャリアボード上のモジュールの全体的なフットプリントが縮小され、製品への統合に適したより小型でコンパクトなフォームファクターを実現しています。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/102991421_front-05_2_1.png" alt="pir" width={650} height="auto" /></p>

:::note
埋め込み用途向けのコンパクトなフォームファクターにRaspberry Pi 4のパワーを搭載。Raspberry Pi Compute Module 4は、クアッドコアARM Cortex-A72プロセッサ、デュアルビデオ出力、および幅広いインターフェースを組み込んでいます。32種類のバリエーションがあり、RAMやeMMCフラッシュのオプション、無線接続の有無を選択できます。 -- [Raspberry Pi CM4](https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000)
:::

## Seeed Studio Compute Module 4製品

| reTerminal  | Edgebox-RPI-100  |EdgeLogix-RPI-1000| reRouter| デュアルギガビットイーサネットNICキャリアボード |
|---|---|---|---| --- |
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a> |  <a href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first_3.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/EdgeLogix-RPI-1000-CM4108032-p-5488.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991734-102110773-edgelogix--rpi-1000-firstone_1.jpg" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

## CM4 EEPROMを更新する方法

### 前提条件

**必要なハードウェア:**

* Linuxベースのホストコンピュータ（以下のいずれか）:
  * Raspberry Pi 4B（Raspberry Pi OSがインストールされているもの）
  * 最新のUbuntu OSがインストールされたPC
* USB Type-Cケーブル

**適用可能なSeeed Studioハードウェア:**

| reTerminal | reRouter | デュアルギガビットイーサネットNICキャリアボード |
|---|---|---|
| <a href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png" alt="pir" width="650" height="auto"/></a>  | <a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png" alt="pir" width="650" height="auto"/></a> | <a href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png" alt="pir" width="650" height="auto"/></a> |

:::note
このプロセスでは、CM4 eMMCストレージを「USBマスストレージ」モードにする必要があります。これは現在、reRouterおよびreTerminalでのみ適用可能です。Edgebox-RPI-200またはEdgeLogix-RPI-1000をお持ちの場合、CM4 eMMCストレージをUSBストレージモードにすることができるCM4開発ボードが必要です。例えば、[デュアルギガビットイーサネットNICキャリアボード](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)などです。
:::

### CM4 eMMCストレージをUSBマスストレージモードにする

**reTerminalの場合**

* **ステップ1:** ケースを開けてreTerminalのヒートシンクを取り外し、ブート選択スイッチにアクセスします。[reTerminal Getting Started Wiki Page](/ja/reTerminal)の手順に従い、ブートモードスイッチを切り替えるまで進めてください。

**reRouterの場合**

* **ステップ1:** 下図のように、底面の4つのネジと底面カバーを取り外してreRouterのケースを開けます:
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/bottom_screw.jpg" alt="pir" width={600} height="auto" /></p>

* **ステップ2:** ケースからreRouterボードをスライドさせて取り出します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/slide_pcb.jpg" alt="pir" width={600} height="auto" /></p>

* **ステップ3:** 3ピンインターフェースを見つけ、GNDとBOOTピンをショートさせます。

:::note
**デュアルギガビットイーサネットNICキャリアボード**はreRouterと同じPCBを使用しているため、**ステップ3**のみを実行してブートモードを選択する必要があります。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

### ソフトウェアのセットアップとEEPROMファームウェアの更新

**PCまたはRaspberry Pi 4B（フラッシュツール）で**

:::note
Raspberry PiのEEPROMを更新するにはLinuxベースのオペレーティングシステムが必要です。以下の手順は**Ubuntu 22.04を搭載したPC**および**Raspberry Pi OS（64ビット）を搭載したRaspberry Pi 4B（フラッシュツール）**でのみテストされています。
:::

* **ステップ1:** 必要なシステムソフトウェアパッケージをインストールします。`Terminal` アプリを開き、以下のコマンドを入力してください:

```bash
sudo apt-get update

sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

* **ステップ2:** `usbboot` ツールリポジトリをクローンします。

```bash
cd ~/

git clone --depth=1 https://github.com/raspberrypi/usbboot

cd usbboot
```

* **ステップ3:** `usbboot` ツールをビルドします。

```bash
make
```

* **ステップ4:** EEPROMを更新します。

:::note
`usbboot` GitHubリポジトリには最新のEEPROMブートローダーファームウェアが含まれているはずです。以下の手順で最新のEEPROMブートローダーファームウェアに更新されます。
:::

```bash
cd recovery

./update-pieeprom.sh
```

以下のようなメッセージが表示されるはずです:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

**オプション:** 特定のリリースのブートローダーファームウェアを使用したい場合は、[rpi-eeprom](https://github.com/raspberrypi/rpi-eeprom/tree/master/firmware/)リポジトリのファームウェアフォルダを訪問し、ファームウェアbinファイルを選択して**`pieeprom.original.bin`**ファイルを置き換えることができます。例えば:

:::note
このオプションの手順では、執筆時点での最新の`stable`ビルドである**`pieeprom-2023-01-11.bin`**で**`pieeprom.original.bin`**ファイルを置き換えます。
:::

```bash
cd ~/usbboot/recovery

rm -f pieeprom.original.bin

curl -L -o pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin

./update-pieeprom.sh
```

以下のようなメッセージが表示されるはずです:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png" alt="pir" width={1000} height="auto" /></p>

* **ステップ5:** USB Type-Cケーブルを使用して、CM4デバイス（`reTerminal`、`reRouter`、`デュアルギガビットイーサネットNICキャリアボード`）と `ホストPC/Raspberry Pi 4B（フラッシュツール）` デバイスを接続します。このとき、CM4デバイスは **USBマスストレージモード** に設定されている必要があります。

* **ステップ6:** EEPROMファームウェアを適用して更新します。

```bash
cd ~/usbboot

./rpiboot -d recovery
```

以下のようなメッセージが表示されるはずです:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

この時点で、`CM4デバイス` には新しいブートオーダーが設定され、EEPROMファームウェアが更新されています。

### ブートオーダーの変更とEEPROMの更新

:::note
上記のセットアップ手順を `ステップ3` まで完了している必要があります。
:::

* **ステップ1:** `boot.conf`を編集します。

```bash
cd ~/usbboot/recovery

nano boot.conf
```

ファイルは以下のようになっているはずです:

```bash
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0

# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network
BOOT_ORDER=0xf25641

# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

`BOOT_ORDER=0xf25641` 行はブート順設定を示しており、現在のブート順設定は `SD CARD/eMMC > USB-MSD > NVME > BCM-USB-MSD > NETWORK > RESTART` です。ブート順を `NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART` に変更したい場合、ブート順設定は `BOOT_ORDER=0xf21564` にする必要があります。

したがって、新しいブート順設定を含む `boot.conf` は以下のようになります：

```bash
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0

# 最初にSDを試し（1）、次にUSB PCIe、NVMe PCIe、USB SoC XHCI、そしてネットワーク
BOOT_ORDER=0xf21564

# USB/ネットワークブートからのブートローダー更新を防ぐには0に設定
# リモートユニットではEEPROMハードウェア書き込み保護を使用する必要があります。
ENABLE_SELF_UPDATE=1
```

`nano` エディタで保存して終了します。

以下は、BOOT_ORDERの異なるブートモード設定のプロパティを定義した参考表です。

| 値 | モード  | 説明 |
|---|---|---|
|  0x0 | SD CARD DETECT | SDを試し、カード検出がカード変更を示すのを待つ - 現在は0xf（RESTART）が利用可能なため非推奨。  |
|  0x1 | SD CARD/eMMC | SDカード（またはCompute Module 4のeMMC）。  |
|  0x2 | NETWORK  | ネットワークブート  |
|  0x3 | RPIBOOT | RPIBOOT  |
|  0x4 | USB-MSD  | USBマスストレージブート   |
|  0x5 | BCM-USB-MSD  | USB 2.0ブート（CM4：CM4IOボードのUSBタイプAソケット）。  |
|  0x6 | NVME | CM4のみ：PCIeインターフェースに接続されたNVMe SSDからのブート。   |
|  0x7 | HTTP | イーサネット経由のHTTPブート。  |
|  0xe | STOP | 停止してエラーパターンを表示。 この状態を終了するには電源サイクルが必要。 |
|  0xf | RESTART|  BOOT_ORDERフィールド内の最初のブートモードから再起動、つまりループ |

> 参考: [BOOT_ORDER Property Table](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#BOOT_ORDER)

* **ステップ 2:** 最新のファームウェアを取得

```bash
wget -O pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin
```

* **ステップ 3:** 新しい `boot.conf` を使用してEEPROMファームウェアを更新

```bash
./update-pieeprom.sh
```

* **ステップ 4:** USB Type-CをCM4デバイス（`reTerminal`、`reRouter`、`Dual Gigabit Ethernet NICs Carrier Board`）と `ホストPC/Raspberry Pi 4B（フラッシュツール）` デバイスに接続します。この際、CM4デバイスは **USBマスストレージモード** に設定する必要があります。

* **ステップ 5:** デバイスにファームウェアを適用

```bash
cd ~/usbboot

sudo ./rpiboot -d recovery
```

以下のようなメッセージが表示されるはずです：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/update_log.png" alt="pir" width={600} height="auto" /></p>

この時点で、`CM4デバイス` は新しいブート順設定と更新されたEEPROMファームウェアを持つようになります。

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>