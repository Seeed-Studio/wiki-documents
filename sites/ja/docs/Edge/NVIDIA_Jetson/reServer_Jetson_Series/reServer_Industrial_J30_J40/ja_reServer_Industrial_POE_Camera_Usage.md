---
description: PoE ポートを介してネットワークカメラおよび産業用カメラを reServer Industrial に接続する
title: reServer Industrial における PoE カメラの使用
keywords:
  - reServer
  - PoE
  - IP camera
  - RTSP
  - industrial camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_poe_camera_usage
last_update:
  date: 06/17/2026
  author: HaoChen
sku: 114110247
createdAt: '2026-06-15'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/ja/reserver_industrial_poe_camera_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reServer Industrial における PoE カメラの使用

reServer Industrial は、**4 つの PoE PSE Ethernet ポート（LAN1–LAN4）** と **1 つのアップリンクポート（LAN0）** を備えたエッジ AI NVR として設計されています。**ネットワーク IP カメラ**（RTSP/ONVIF）および **産業用 PoE カメラ** を 1 本の Ethernet ケーブルだけで給電・接続でき、別途電源アダプタを用意する必要はありません。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

:::info
すべての Ethernet ポートと PoE 仕様の概要については、[reServer Industrial ハードウェアインターフェースの使用 — ギガビット Ethernet コネクタ](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#ギガビット-Ethernet-コネクタ)を参照してください。
:::

## ポート概要

| ポート | 役割 | PoE 出力 | 主な用途 |
| :--- | :--- | :--- | :--- |
| **LAN1 – LAN4** | カメラ | 対応（802.3af、各ポート最大 15 W） | IP カメラ、産業用 PoE カメラ |
| **LAN0** | アップリンク | 非対応 | インターネットおよび管理用のルーター／スイッチ |

**筐体上の物理ラベル**（LAN0–LAN4）は固定です。**Linux のインターフェース名**（`eth0`、`enP1p1s0` など）は JetPack のバージョンやカーネルによって異なるため、**固定の対応関係があると仮定しないでください**。各物理ポートとインターフェースの対応付けにはステップ 2 を使用します。

複数のカメラを接続する場合、各 PoE ポートには**別々のサブネット**を使用し、工場出荷時のデフォルトアドレスが競合しないようにします（ステップ 3 の表を参照）。

## ステップ 1: PoE 電源を有効化する

PoE カメラを接続する**前に**、4 つの PSE ポートで PoE 出力を有効にします。この手順は [ハードウェアインターフェースの使用 — ギガビット Ethernet](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#ギガビット-Ethernet-コネクタ) と同じです。

<Tabs>
<TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

```sh
sudo -i
cd /sys/class/gpio
echo 315 > export
cd gpio315
echo "out" > direction
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

```sh
sudo apt update
sudo apt install gpiod
gpioset gpiochip2 15=1
```

</TabItem>
</Tabs>

:::info
`gpiochip2` が見つからない場合、GPIO チップ名はイメージやカーネルによって異なることがあります。`gpioinfo` を実行し、PoE 制御に使用されているライン（多くの reServer Industrial ユニットでは `i2c/1-0021` 上の I2C エクスパンダにある gpio-315）を特定してください。そのチップ名とラインオフセットを `gpioset` で使用します。詳細は [ハードウェアインターフェースの使用](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#GPIO-テーブル)の GPIO テーブルを参照してください。
:::

PoE を無効にするには、GPIO の値を `1` ではなく `0` に設定します。

:::tip
起動のたびに自動で PoE を有効化するには、上記のコマンドを systemd サービスまたは `/etc/rc.local`（`exit 0` の前）に追加します。
:::

## ステップ 2: 物理ポートと Linux インターフェースを対応付ける

各物理 PoE ポートは 1 つの Linux インターフェース（`eth0`、`eth1`、…）に対応します。リンク状態は、IP を事前に設定しなくても `ip -br link` で確認できます。ケーブルが接続されているインターフェースは `UP` かつ `LOWER_UP` と表示されます。

変数を制御しやすくするため、**一度に 1 つの物理ポートだけ**を対応付けます：

**ステップ 1.** PoE を有効にし、PoE ポートには**カメラを接続していない状態**で、インターフェースを一覧表示します：

```bash
ip -br link
```

`lo`、`docker0`、`l4tbr0`、`rndis0`、`usb0` などの仮想インターフェースは無視します。

**ステップ 2.** カメラを **1 つの** 物理ポート（例：**LAN1**）のみに接続します。

**ステップ 3.** 再度 `ip -br link` を実行します。状態が `UP` / `LOWER_UP` に変化したインターフェースが、その物理ポートに対応する Linux インターフェースです。その対応関係を記録します（例：**LAN1** → `eth0`）。

**ステップ 4.** カメラを取り外し、**LAN2**、**LAN3**、**LAN4** についてステップ 2〜3 を繰り返します。

| 物理ポート | Linux インターフェース | 備考 |
| :--- | :--- | :--- |
| LAN1 | _fill in_ | |
| LAN2 | _fill in_ | |
| LAN3 | _fill in_ | |
| LAN4 | _fill in_ | |
| LAN0 | _fill in_ | アップリンク — 通常はルーターに接続 |

reServer Industrial でインターネット接続が必要な場合は、**LAN0** をルーターまたはスイッチに接続したままにしておきます。

## ステップ 3: reServer 側の IP を設定する

通信するには、reServer のインターフェースとカメラの両方に、**同じサブネット**上の IP アドレスが必要です。カメラのアドレスは、マニュアルや本体ラベルから取得します（多くのカメラは `192.168.1.64` のような固定デフォルトで出荷されます）。アドレスが不明な場合は、カメラの電源を入れ直している間に対応付け済みインターフェース上で `tcpdump` を実行すると、一部の機種では起動時に一度だけ自分の IP をブロードキャストします。

各 PoE ポートに対して、reServer 側に静的 IP を割り当てます。例：**LAN1**（`eth0`）、カメラ `192.168.1.64`、reServer `192.168.1.10/24` の場合：

```bash
sudo nmcli connection add type ethernet ifname eth0 con-name POE1
sudo nmcli connection modify POE1 ipv4.addresses 192.168.1.10/24
sudo nmcli connection modify POE1 ipv4.method manual
sudo nmcli connection up POE1
```

複数のカメラを使用する場合は、**1 つの PoE ポートにつき 1 台のカメラ**とし、各ポートで**異なるサブネット**を使用します：

| PoE ポート | 接続名 | reServer IP の例 | カメラサブネットの例 |
| :--- | :--- | :--- | :--- |
| LAN1 | POE1 | 192.168.1.10/24 | 192.168.1.0/24 |
| LAN2 | POE2 | 192.168.2.10/24 | 192.168.2.0/24 |
| LAN3 | POE3 | 192.168.3.10/24 | 192.168.3.0/24 |
| LAN4 | POE4 | 192.168.4.10/24 | 192.168.4.0/24 |

ポート対応表およびカメラのマニュアルに合わせて、`eth0`、接続名、アドレスを置き換えてください。

## ステップ 4: 接続性を確認する

```bash
ping -c 4 192.168.1.64
```

アドレスは使用しているカメラの IP に置き換えてください。`ping` が成功すれば、reServer Industrial 上の PoE リンクと IP 設定は正しく構成されています。

接続性が確認できたら、次の手順（RTSP ストリーム URL、ONVIF 設定、産業用 SDK 連携、NVR への取り込みなど）についてはカメラメーカーのマニュアルを参照してください。reServer Industrial 上で複数カメラの AI パイプラインを構成する場合は、[reServer Jetson による AI NVR](https://wiki.seeedstudio.com/ja/ai_nvr_with_jetson/) を参照してください。

## トラブルシューティング

| 問題 | 想定される原因 | 解決策 |
| :--- | :--- | :--- |
| `gpiochip2` が見つからない（JetPack 6） | イメージによって GPIO チップ名が異なる | `gpioinfo` を実行し、PoE 用のチップとライン（gpio-315）を使用します。[GPIO テーブル](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#GPIO-テーブル)を参照 |
| カメラの電源が入らない | PoE 用 GPIO が有効化されていない | ステップ 1 を再実行し、GPIO の値が `1` であることを確認 |
| カメラが繰り返し再起動する | 消費電力が 15 W を超えている | 802.3af（≤ 15 W）に対応したカメラ、または外部電源を使用 |
| どのインターフェースが UP なのか特定できない | 複数のケーブルが接続されている | すべての PoE ポートを切断し、1 つの物理ポートずつ対応付ける（ステップ 2） |
| カメラに ping が届かない | サブネットの不一致またはインターフェースの誤り | reServer の IP がカメラと同じサブネットにあることを確認し、ステップ 2 のポート対応を再確認 |
| カメラの IP が不明 | ラベルに記載がない | 対応付け済みインターフェース上で `sudo tcpdump -i <poe-interface> -n` を実行し、その後カメラの電源を入れ直す |
| 複数のカメラが競合する | 同じデフォルト IP を使用している | カメラ 1 台につき 1 つの PoE ポートを使用し、サブネットを分離する（ステップ 3 の表を参照） |

## 関連リソース

- [reServer Industrial クイックスタート](https://wiki.seeedstudio.com/ja/reServer_Industrial_Getting_Started/)
- [reServer Industrial ハードウェアインターフェースの使用](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/)
- [reServer Jetson による AI NVR](https://wiki.seeedstudio.com/ja/ai_nvr_with_jetson/)
- [reServer Industrial データシート](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
