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
  date: 06/18/2026
  author: HaoChen
sku: 114110247
createdAt: '2026-06-15'
updatedAt: '2026-06-18'
url: https://wiki.seeedstudio.com/ja/reserver_industrial_poe_camera_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reServer Industrial における PoE カメラの使用

reServer Industrial は、**4 つの PoE PSE Ethernet ポート（LAN1–LAN4）** と **1 つのアップリンクポート（LAN0）** を備えたエッジ AI NVR として設計されています。**ネットワーク IP カメラ**（RTSP/ONVIF）および **産業用 PoE カメラ** を 1 本の Ethernet ケーブルだけで給電・接続でき、別途電源アダプタを用意する必要はありません。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

:::info
すべての Ethernet ポートと PoE 仕様の概要については、[reServer Industrial Hardware Interface Usage — Gigabit Ethernet Connectors](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#gigabit-ethernet-connectors) を参照してください。
:::

## ポート概要

| ポート | 役割 | PoE 出力 | 代表的な用途 |
| :--- | :--- | :--- | :--- |
| **LAN1 – LAN4** | カメラ | あり（802.3af、各ポート最大 15 W） | IP カメラ、産業用 PoE カメラ |
| **LAN0** | アップリンク | なし | インターネットおよび管理用のルーター/スイッチ |

**筐体上の物理ラベル**（LAN0–LAN4）は固定です。**Linux のインターフェース名**（`eth0`、`enP1p1s0` など）は JetPack のバージョンやカーネルによって異なるため、**固定の対応関係があると仮定しないでください**。各物理ポートとインターフェースを対応付けるには Step 2 を使用します。

複数のカメラを接続する場合、各 PoE ポートには**別々のサブネット**を使用し、工場出荷時のデフォルトアドレスが競合しないようにします（Step 3 の表を参照）。

## Step 1: PoE 電源を有効化する

PoE カメラを接続する**前に**、4 つの PSE ポートで PoE 出力を有効にします。この手順は [Hardware Interface Usage — Gigabit Ethernet](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#gigabit-ethernet-connectors) と同じです。

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
もし `gpiochip2` が見つからない場合、GPIO チップ名はイメージやカーネルによって異なることがあります。`gpioinfo` を実行し、PoE 制御に使用されているライン（多くの reServer Industrial ユニットでは `i2c/1-0021` 上の I2C エクスパンダにある gpio-315）を特定してください。そのチップ名とラインオフセットを `gpioset` で使用します。詳細は [Hardware Interface Usage](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#gpio) の GPIO テーブルを参照してください。
:::

PoE を無効にするには、GPIO の値を `1` ではなく `0` に設定します。

:::tip
起動のたびに自動で PoE を有効にするには、上記のコマンドを systemd サービスまたは `/etc/rc.local`（`exit 0` の前）に追加します。
:::

## Step 2: 物理ポートと Linux インターフェースを対応付ける

各物理 PoE ポートは 1 つの Linux インターフェース（`eth0`、`eth1`、…）に対応します。reServer Industrial では、PoE インターフェースは NetworkManager によって有効化されるまで**デフォルトで down** になっています。カメラを接続しただけでは、インターフェースがアクティブ化されるまで `ip -br link` に `LOWER_UP` は表示されません。

変数を制御しやすくするため、**一度に 1 つの物理ポートだけ**を対応付けてください：

**Step 1.** PoE を有効にした状態でインターフェースを一覧表示し、候補となる Ethernet 名をメモします（`lo`、`docker0`、`l4tbr0`、`rndis0`、`usb0` は無視します）:

```bash
ip -br link
```

**Step 2.** 候補となる各 PoE インターフェースに対して、リンク専用の NetworkManager プロファイル（IP は不要）を作成し、有効化します。`eth0` の例：

```bash
sudo nmcli connection add type ethernet ifname eth0 con-name POE1 \
  ipv4.method disabled connection.autoconnect yes
sudo nmcli -w 5 connection up POE1
```

`ipv4.method disabled` により、プロファイルはリンク専用のままになります。`-w 5` は待ち時間を 5 秒に制限します。まだカメラが接続されていない場合、コマンドはタイムアウトを報告することがありますが、インターフェース自体は有効化されています。

:::tip 代替案（簡易テスト用、永続化されません）
NetworkManager を使わずに単一インターフェースを up にするには：

```bash
sudo ip link set eth0 up
```

これは一度きりのポート対応付けには十分ですが、上記のように永続プロファイルを追加しない限り、再起動後に設定は失われます。
:::

**Step 3.** カメラを**1 つの**物理ポートのみに接続します（例：**LAN1**）。

**Step 4.** 再度 `ip -br link` を実行します。`UP` かつ `LOWER_UP` が表示されているインターフェースが、その物理ポートに対応する Linux インターフェースです。その対応関係を記録します（例：**LAN1** → `eth0`）。

**Step 5.** カメラを取り外し、**LAN2**、**LAN3**、**LAN4** について Step 3–4 を繰り返します。

| 物理ポート | Linux インターフェース | 備考 |
| :--- | :--- | :--- |
| LAN1 | _fill in_ | |
| LAN2 | _fill in_ | |
| LAN3 | _fill in_ | |
| LAN4 | _fill in_ | |
| LAN0 | _fill in_ | アップリンク — 通常はルーターに接続 |

reServer Industrial でインターネットアクセスが必要な場合は、**LAN0** をルーターまたはスイッチに接続したままにしてください。

## Step 3: reServer 側の IP を設定する

通信するには、reServer のインターフェースとカメラの両方が**同じサブネット**上の IP アドレスを持っている必要があります。カメラのアドレスは、ドキュメントまたは本体ラベルから取得します（多くのカメラは `192.168.1.64` のような固定デフォルトで出荷されます）。アドレスが不明な場合、カメラの電源を入れ直している間に対応付け済みインターフェース上で `tcpdump` を実行すると、一部の機種では起動時に一度だけ自分の IP をブロードキャストします。

Step 2 ですでにリンク専用プロファイル（例：`POE1`）を作成している場合は、そこに静的 IP を追加します。まだの場合は 1 回の手順でプロファイルを作成します。**LAN1**（`eth0`）、カメラ `192.168.1.64`、reServer `192.168.1.10/24` の例：

```bash
# Option A — profile already exists from Step 2
sudo nmcli connection modify POE1 ipv4.addresses 192.168.1.10/24
sudo nmcli connection modify POE1 ipv4.method manual
sudo nmcli -w 10 connection up POE1

# Option B — create profile with static IP in one command
sudo nmcli connection add type ethernet ifname eth0 con-name POE1 \
  ipv4.addresses 192.168.1.10/24 ipv4.method manual connection.autoconnect yes
sudo nmcli -w 10 connection up POE1
```

複数のカメラを使用する場合は、**1 つの PoE ポートにつき 1 台のカメラ**とし、**各ポートで異なるサブネット**を使用します：

| PoE ポート | 接続名 | reServer IP の例 | カメラサブネットの例 |
| :--- | :--- | :--- | :--- |
| LAN1 | POE1 | 192.168.1.10/24 | 192.168.1.0/24 |
| LAN2 | POE2 | 192.168.2.10/24 | 192.168.2.0/24 |
| LAN3 | POE3 | 192.168.3.10/24 | 192.168.3.0/24 |
| LAN4 | POE4 | 192.168.4.10/24 | 192.168.4.0/24 |

ポート対応付けおよびカメラのドキュメントに合わせて、`eth0`、接続名、アドレスを置き換えてください。

## Step 4: 接続性を確認する

```bash
ping -c 4 192.168.1.64
```

アドレスを自分のカメラ IP に置き換えてください。`ping` が成功すれば、reServer Industrial 上の PoE リンクと IP 設定は正しく構成されています。

接続性が確認できたら、次の手順についてはカメラメーカーのドキュメントを参照してください。たとえば RTSP ストリーム URL、ONVIF 設定、産業用 SDK との統合、NVR への取り込みなどです。reServer Industrial 上で複数カメラの AI パイプラインを構築する場合は、[AI NVR with reServer Jetson](https://wiki.seeedstudio.com/ja/ai_nvr_with_jetson/) を参照してください。

## トラブルシューティング

| 問題 | 想定される原因 | 解決策 |
| :--- | :--- | :--- |
| `gpiochip2` が見つからない（JetPack 6） | イメージによって GPIO チップ名が異なる | `gpioinfo` を実行し、PoE 用のチップとライン（gpio-315）を使用します。[GPIO table](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/#gpio) を参照 |
| カメラの電源が入らない | PoE GPIO が有効化されていない | Step 1 を再実行し、GPIO の値が `1` であることを確認 |
| カメラが繰り返し再起動する | 消費電力が 15 W を超えている | 802.3af（≤ 15 W）に対応したカメラ、または外部電源を使用 |
| カメラを接続しても `ip -br link` に `LOWER_UP` が表示されない | PoE インターフェースが有効化されていない | リンク専用プロファイルを作成し、`nmcli -w 5 connection up` を実行（Step 2）、または `sudo ip link set <if> up` を実行 |
| `nmcli connection up` がハングまたはタイムアウトする | まだキャリアがない（カメラ未接続） | 空ポートでは想定される動作です — `-w 5` を使用します。リンク自体は有効化されます。カメラを接続し、`ip -br link` を確認 |
| どのインターフェースが UP なのか特定できない | 複数のケーブルが接続されている | すべての PoE ポートを切断し、Step 2 のとおり一度に 1 つの物理ポートだけを対応付け |
| カメラに ping できない | サブネットの不一致またはインターフェースの誤り | reServer の IP がカメラと同じサブネット上にあることを確認し、Step 2 でのポート対応付けを再確認 |
| カメラの IP が不明 | ラベルに記載がない | 対応付け済みインターフェース上で `sudo tcpdump -i <poe-interface> -n` を実行し、その後カメラの電源を入れ直す |
| 複数のカメラが競合する | 同じデフォルト IP を使用している | カメラ 1 台につき 1 つの PoE ポートを使用し、サブネットを分離する（Step 3 の表を参照） |

## 関連リソース

- [reServer Industrial Getting Started](https://wiki.seeedstudio.com/ja/reServer_Industrial_Getting_Started/)
- [reServer Industrial Hardware Interface Usage](https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/)
- [AI NVR with reServer Jetson](https://wiki.seeedstudio.com/ja/ai_nvr_with_jetson/)
- [reServer Industrial Datasheet](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択できる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
