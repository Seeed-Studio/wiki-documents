---
description: Jetson のソフトウェアエコシステムにおいて、JetPack、Jetson Linux / L4T、Ubuntu、Linux Kernel、UEFI の階層的な関係をソフトウェアスタックマップで明確にします。
title: JetPack、L4T、Ubuntu、Kernel、UEFI の関係とは？
keywords:
  - jetson
  - jetpack
  - l4t
  - ubuntu
  - kernel
  - uefi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_jetpack_l4t_ubuntu_kernel_uefi
last_update:
  date: 11/02/2026
  author: youjiang
---

Jetson を使い始めると、ほぼ全員が最初にぶつかる疑問があります：**Jetson には実際いくつ「システムバージョン」があるのか？**

場所によって、まったく違う番号を目にするかもしれません：

```text
JetPack 6.2.3
L4T / Jetson Linux R36.5.2
Ubuntu 22.04
Linux Kernel 5.15
UEFI 36.5.2
```

これらは 5 つの別々のシステムのように見えますが、実際には**同じ Jetson デバイスのソフトウェアスタック内の異なるレイヤー**を表しています。

これらの概念で最も重要なのは、定義を暗記することではなく、次のような認識を持つことです：

**Jetson のソフトウェアは「Ubuntu + NVIDIA GPU ドライバ」のように単純なものではありません。ブートファームウェア、Linux カーネル、Ubuntu のユーザ空間、そして CUDA や TensorRT のようなアクセラレーションパッケージにまでまたがる、完全なソフトウェアプラットフォームです。**

まずは、これらのコンポーネントがどのように互いに関係し、包含し合っているかを示す図から始めましょう。

```text
JetPack
│
├── Jetson Linux / L4T
│   │
│   ├── UEFI
│   ├── Linux Kernel
│   ├── NVIDIA Drivers
│   └── Ubuntu RootFS
│
├── CUDA
├── TensorRT
├── cuDNN
├── VPI
└── ...
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/jetpack_architecture.png"/></div>

この図はすべてを網羅しているわけではありませんが、本記事で扱う用語同士の関係を示すには十分です。より完全なアーキテクチャ図は記事の最後に掲載します。

---

## JetPack

**JetPack** は、NVIDIA が Jetson エッジコンピューティングデバイス向けに用意した、完全なソフトウェア開発環境と考えることができます。OS 関連コンポーネントだけでなく、セキュリティ関連ソフトウェアパッケージや AI アクセラレーションパッケージも含まれます。

そのため、誰かに「どの JetPack を使っていますか？」と聞かれたとき、

実際に聞かれているのは次のことです：

> **現在どの NVIDIA Jetson ソフトウェアプラットフォームを使用していますか？**

この意味で、JetPack は最上位の「ソフトウェアコレクション」と理解できます。

動作中のシステムが入った Jetson デバイスがあれば、Jetson のターミナルで次のコマンドを実行して JetPack のバージョンを確認できます：

```bash
seeed@ubuntu:~$ dpkg -l | grep nvidia-jetpack
ii  nvidia-jetpack                                    6.2.1+b38                                   arm64        NVIDIA Jetpack Meta Package
ii  nvidia-jetpack-dev                                6.2.1+b38                                   arm64        NVIDIA Jetpack dev Meta Package
ii  nvidia-jetpack-runtime                            6.2.1+b38                                   arm64        NVIDIA Jetpack runtime Meta Package
```

出力から、このデバイスが JetPack 6.2.1 を実行していることがわかります。

---

## Jetson Linux / L4T

JetPack が Jetson の「完全なソフトウェア」だとすると、**Jetson Linux / L4T は Jetson が実際に動作するために依存している基盤システム**です。まず、Jetson Linux と L4T の関係をはっきりさせましょう：

> L4T は古い／技術的な名称であり、Jetson Linux は現在 NVIDIA がより一般的に使用している名称です。これらは同じソフトウェアと理解して構いません。

以降、本記事では簡潔さのために Jetson Linux / L4T をまとめて L4T と呼びます。

L4T の正式名称は **Linux for Tegra** です。

Tegra は NVIDIA Jetson が使用する SoC プラットフォームなので、L4T は次のように理解できます：

> **Jetson ハードウェア専用に NVIDIA がカスタマイズした Linux BSP。**

ここで、もう一つ新しい用語 **BSP（Board Support Package）** が登場します。

その役割は単に Linux デスクトップを提供することではなく、Linux システムを Jetson ハードウェアに実際に接続することです。

次のように考えることができます：

```text
                Jetson Linux / L4T
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      UEFI          Linux Kernel     Ubuntu RootFS
        │               │               │
   Boot system      Manage HW      User space
                        │
                   NVIDIA Drivers
                        │
                  Jetson Hardware
```

言い換えると、L4T は単一のソフトウェアコンポーネントではなく、完全な下位システム環境です。

通常、次のものを含みます：

- UEFI / Bootloader：デバイスの電源投入後の**初期ブートとシステム立ち上げ**を担当。
- Linux Kernel：Linux の中核であり、**CPU スケジューリング、メモリ管理、プロセス管理、および各種ハードウェアドライバのフレームワーク**を担当。
- Device Tree：**ボード上にどのようなハードウェアがあり、それらがどのように接続されているか**を記述。
- NVIDIA Drivers：GPU、ISP、NVCSI などの機能をサポートするために NVIDIA が Jetson ハードウェア向けに提供するドライバ。
- Ubuntu RootFS：Jetson のユーザ空間環境 — 私たちが日常的に見て使っている Ubuntu デスクトップ。
- ...

Jetson は一般的な ARM Linux コンピュータではないことに注意してください。GPU、NVCSI、VI など、多くの NVIDIA 固有のハードウェアを備えています。これらのハードウェアが正しく動作するには、Device Tree、カーネルドライバ、ファームウェア、NVIDIA ドライバが連携する必要があります。このような低レベルのサポートは標準の Ubuntu には含まれておらず、L4T によって提供されています。

したがって：

> **Ubuntu を Jetson ハードウェア上で動作させている実体は L4T です。**

:::caution
ここまでで多くの用語が登場しましたが、この時点ですべてのコンポーネントを深く理解する必要はありません。まずは大まかな頭の中のモデルを作るだけで十分です。実際の作業の中でこれらに出会ったときに、必要に応じて掘り下げていきましょう。
:::

Jetson デバイスの L4T バージョンは、次のコマンドで確認できます：

```bash
seeed@ubuntu:~$ cat /etc/nv_tegra_release
# R36 (release), REVISION: 4.3, GCID: 38968081, BOARD: generic, EABI: aarch64, DATE: Wed Jan  8 01:49:37 UTC 2025
# KERNEL_VARIANT: oot
TARGET_USERSPACE_LIB_DIR=nvidia
TARGET_USERSPACE_LIB_DIR_PATH=usr/lib/aarch64-linux-gnu/nvidia
```

出力から、このデバイスが L4T 36.4.3 を実行していることがわかります。

:::info
JetPack と L4T には厳密な 1 対 1 の対応関係があることに注意してください。NVIDIA がリリースしたすべての JetPack バージョンは、次のリンクで確認できます： https://developer.nvidia.com/embedded/jetson-linux-archive
:::

---

## Ubuntu：Jetson で最も頻繁に触れるユーザ空間

Jetson 上で Ubuntu は、最も頻繁に目にし、日常的に操作するレイヤーです。

デスクトップを起動し、ターミナルを開いて次のように実行するとき：

```text
apt install
python3
docker
systemctl
cd /home
```

これらすべての操作は **Ubuntu のユーザ空間**で行われています。そのため、多くの人が「Jetson は Ubuntu を動かしている」と考えます。ここまで読んだあなたなら、この表現は間違いではないものの不完全だとわかるはずです。より正確には、**L4T が Ubuntu を RootFS およびユーザ空間のベースとして使用しているが、Ubuntu が Jetson システム全体というわけではない**、と言えます。

言い換えると、**Ubuntu はユーザインタラクションのレイヤー、つまり「ユーザやアプリケーションがマシンを利用できるようにする部分」を提供しています。**

Jetson ハードウェアを実際に直接管理しているのは主に次のものです：

```text
Linux Kernel
NVIDIA Drivers
Device Tree
Firmware
```

詳細については今後の記事で説明します。現時点では、次の 2 点を押さえておいてください：

1. 「**システムが NVMe にインストールされている**」と言うとき、多くの場合、実際に意味しているのは「**Ubuntu RootFS が NVMe に保存されている**」ということです。
2. Ubuntu は Jetson Linux のユーザ空間部分に過ぎず、システム全体ではありません。そのため、2 台の Jetson デバイスがどちらも Ubuntu 22.04 を実行していても、挙動がまったく異なることがあります。例えば、L4T R36.4.x と L4T R36.5.x はどちらもファイルシステムとして Ubuntu 22.04 を使用していますが、Kernel と NVIDIA Driver のバージョンは異なります。

Jetson では、`cat /etc/os-release` を実行するだけで Ubuntu のバージョンを確認できます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/os_release.png"/></div>

---

## Linux Kernel

Ubuntu が、私たちが毎日目にして使っている「ユーザ空間」だとすると、**Linux Kernel はハードウェアやシステムリソースを実際に管理しているシステム全体の中核**です。

それは Ubuntu とハードウェアの間に位置します：`Application` --> `Ubuntu` --> `Linux Kernel` --> `Drivers` --> `Jetson`

要するに：

> **Ubuntu はユーザとのやり取りを担当し、Kernel はハードウェアとのやり取りを担当します。**

Linux Kernel は非常に多くのことを処理しており、その中でも特に重要なのは CPU スケジューリング、メモリ管理、プロセス管理などです。

Linux Kernel がどのように動作するか、例を見てみましょう。USB カメラを接続したとき、`/dev/video0` デバイスが見えるようになる前に、データは次の経路を通ります：

```text
USB Camera
    ↓
USB Controller
    ↓
Kernel USB Driver
    ↓
/dev/video0
    ↓
Application
```

Jetson のターミナルで `uname -r` を実行すると、Linux Kernel のバージョンを確認できます：

```bash
seeed@ubuntu:~$ uname -r
5.15.148-tegra
```

---

## UEFI

Ubuntu がユーザ空間、Linux Kernel がシステムの中核だとすると、**UEFI は Linux が起動する前に「システムを立ち上げる」重要なレイヤー**です。UEFI は **Unified Extensible Firmware Interface** の略で、**従来の BIOS に代わって現代のコンピュータが使用するブートファームウェアインターフェース**と考えることができます。

Jetson では、デバイスを「ハードウェアに電源が入った状態」から「Linux Kernel が動作を開始できる状態」まで進めます。その作業には、ブート環境の初期化、ブート可能デバイスの認識、ブート設定の読み取り、Kernel の読み込み、initrd の読み込み、Device Tree の読み込み、そして制御を Linux に引き渡すことが含まれます。

まずはシンプルな頭の中のモデルを作りましょう：

`Power On` --> `UEFI` --> `Linux Kernel` --> `Ubuntu RootFS`

つまり：

> **UEFI が動作している間は、Linux Kernel はまだ実際には動き始めておらず、Ubuntu はまったく起動していません。**

ここで注意すべき点は次のとおりです：

1. 多くの Jetson Orin デバイスでは、ブートファームウェアは QSPI NOR フラッシュに保存されています。Ubuntu RootFS を NVMe にインストールしている場合でも、デバイスはまず QSPI 上の UEFI を経由してブートする必要があるかもしれません。

2. Jetson が起動に失敗した場合、最初に確認すべきなのはブートプロセス中の UEFI ログです。根本原因はそこに隠れている可能性が非常に高いです。

3. UEFI は、最初にどのブートデバイスから Linux を読み込むかを決定します。電源投入後に NVIDIA ロゴが表示されたら、`ESC` または `F1` を押して UEFI セットアップページに入り、ここで設定を行うことができます。

Jetson のターミナルで `cat /sys/class/dmi/id/bios_version` を実行して、UEFI バージョンを確認します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/uefi_version.png"/></div>

---

本記事では、Jetson ソフトウェアスタックにおけるいくつかの一般的なブート関連の概念をまとめて取り上げ、素早く全体像を把握することを目標としました。本記事で最も重要なのは、それぞれの用語の定義を暗記することではなく、これらの概念が独立したシステムではなく、Jetson ソフトウェアスタック内の異なるレイヤーであるという基本的な理解を築くことです。この基礎があれば、Jetson のブート／システム問題をデバッグする場合でも、他の開発者と技術的な詳細を議論する場合でも、より効率的かつ効果的に取り組むことができます。

もちろん、ここで扱った内容は Jetson のブート関連トピックのごく一部に過ぎません。詳細は NVIDIA のウェブサイトで確認できます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/nvidia_ecosystem.png"/></div>

画像出典: https://developer.nvidia.com/embedded/jetpack

今後の記事では、このブートチェーンに沿ってさらに進めていきます。電源投入、ファームウェア初期化、Kernel の読み込みから Ubuntu に入るまでの一連のプロセスを最初に説明し、その後、ハードウェアインターフェース、カメラ、ロボット制御などへと話を広げていきます。もし取り上げてほしいトピックがあれば、ぜひコメントやメッセージでお知らせください。

次回は、最も基本的な問いから始めます：

> **Jetson は、電源投入から Ubuntu に入るまでに、具体的に何を経験しているのか？**

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
