---
description: Jetson Orin の実際の UART ブートログを、Power On → BootROM → MB1 → MB2 → UEFI → L4TLauncher → Kernel → initrd → RootFS → systemd というチェーンに沿って段階ごとに追いかけ、「最後に正常到達したブートステージ」を手がかりにブート失敗をトラブルシュートする方法を学びます。
title: Jetson：電源投入から Ubuntu 起動まで
keywords:
  - jetson
  - boot
  - bootlog
  - uart
  - uefi
  - mb1
  - mb2
  - l4t
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_boot_log_analysis
last_update:
  date: 11/02/2026
  author: youjiang
---

前回の記事では、**JetPack、Jetson Linux / L4T、Ubuntu、Kernel、UEFI** とは何かを紹介しました。

では、これらのコンポーネントは実際にはどの順番で動作するのでしょうか？Jetson の電源ボタンを押したあと、なぜデバイスはすぐに Ubuntu に入らず、BootROM、MB1、MB2、UEFI、Kernel、initrd を順番に通過する必要があるのでしょうか？

さらに重要なのは次の点です：**Jetson がブートに失敗したとき、UART ログを使って「どのステージで止まっているか」を正確に特定するにはどうすればよいでしょうか？**

この記事では、アーキテクチャ図だけを見るのではなく、実際の **Jetson Orin UART ブートログ** を直接解析していきます。

もしブートログの取得方法がわからない場合は、次の 2 つの wiki 記事を参照してください：

> https://wiki.seeedstudio.com/cn/jetson_debug_guide/
> https://wiki.seeedstudio.com/cn/get_the_system_log_of_recomputer_j30_and_j40/

## まず全体像：Jetson は電源投入から Ubuntu までにどんなステージを通るのか？

ブートログを 1 行ずつ解析する前に、まず全体的なブートマップを作ってみましょう。

[**Jetson Linux Developer Guide**](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html) – Boot Architecture では、NVIDIA は Jetson Orin シリーズの Boot Flow を次のように定義しています：ブートローダが SoC、ストレージ、メモリ、CPU、セキュア環境、各種ファームウェアを段階的に初期化し、最終的に OS へシステムをブートする。公式ドキュメントによると、Orin シリーズの主な Boot Firmware ステージは **BootROM、PSCROM、MB1、MB2、UEFI** です。

公式の Boot Firmware フローをさらに後ろのステージまで延長し、実際に Ubuntu に入るところまでつなげると、次のような、より完全で理解しやすいブートチェーンになります：

> `Power On` --> `BootROM / PSCROM` --> `MB1` --> `MB2` --> `BL31 / OP-TEE` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` + `DTB + initrd` --> `Find RootFS` --> `NVMe / eMMC / SD` --> `Ubuntu RootFS` --> `systemd` --> `Login / Desktop / Application`

次に、**実際の Jetson Orin UART ブートログ** を使って、このブートチェーンを 1 ステージずつたどっていきます。

最終的に身につけたいのは、「Jetson がどうブートするか」という概念だけではなく、より実践的な診断スキルです：

> **Jetson のブートログを見て、デバイスがブートチェーンのどの層まで到達しているかを素早く判断し、ブートに失敗した場合はどの部分から優先的に調査すべきかを特定する。**

この部分の技術的なリファレンスとして、NVIDIA 公式の Boot Flow ドキュメントを利用できます：[NVIDIA Jetson Orin Series Boot Flow](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html?utm_source=chatgpt.com)

---

## 電源投入直後に現れる最初のログ行：なぜ MB1 から始まるのか？

この UART ログの最初の行は次のとおりです：

```text
[0000.066] I> MB1 (version: 1.4.0.4-t234-...)
[0000.071] I> t234-A01-1-Silicon
[0000.075] I> Boot-mode : Coldboot
[0000.082] I> last_boot_error: 0x0
```

ここが面白いところです。さきほど次のように説明しました：

```text
Power On
 ↓
BootROM
 ↓
MB1
```

なぜログには BootROM が現れず、いきなり最初の行から MB1 が出てくるのでしょうか？

それは、**BootROM が Tegra SoC 自体に焼き込まれたブートコードだから**です。デバイスに電源が投入されたあと、BootROM はすでに実行されており、MB1 のロードに成功しています。そのため、このタイミングで UART には MB1 のログ行が出力され始めます。

つまり：

> **`MB1` が見えているということは、SoC の最初期の BootROM ステージが、少なくとも MB1 までは正常に進んだことを意味します。**

これはブートログをトラブルシュートするときの最初の考え方です：**エラーだけを見るのではなく、「最後に正常到達したブートステージ」を見ること。**

---

## MB1：基本的なハードウェア初期化を完了する

MB1 に入ると、まずブートストレージを初期化している様子がわかります：

```text
[0000.296] I> Task: Boot device init
[0000.299] I> Boot_device: QSPI_FLASH instance: 0
[0000.308] I> QSPI Flash: Macronix 64MB
[0000.312] I> QSPI-0l initialized successfully
```

これは、**MB1 が QSPI Flash に正常にアクセスできている** ことを示しています。たとえ最終的な Ubuntu RootFS が NVMe 上にある場合でも、Jetson の初期ブートファームウェアは、まず QSPI などのブートコンポーネントを経由する必要があります。

その後 MB1 は、Pinmux、電源、メモリなどの基本的な初期化を続けます：

```text
[0000.784] I> Task: Pinmux init
[0000.874] I> Task: Pad voltage init
[0000.884] I> Task: Common rail init
[0000.944] I> Task: SDRAM init
[0000.980] I> SDRAM initialized!
[0000.983] I> SDRAM Size in Total 0x100000000
```

この中で最も注目すべき行は次の部分です：

```text
[0000.980] I> SDRAM initialized!
```

これは、**DRAM の初期化が正常に完了し、MB1 における主要なハードウェア初期化フェーズが基本的に終わった** ことを意味します。

もしブートログが MB1 のところで長時間止まり、`SDRAM initialized!` がいつまでたっても現れない場合、調査の焦点は **MB1-BCT、DDR、PMIC、電源、ボードレベルの設定** に置くべきであり、Ubuntu や Linux Kernel ではありません。

なぜなら、この時点では **Linux はまだブートを開始していないからです。**

---

## MB1 のあと、MB2 へ進む

基本的なハードウェア初期化のあと、MB1 は次のステージである **MB2** をロードします：

```text
[0001.874] I> Task: Load MB2/Applet/FSKP
[0001.878] I> Loading MB2
[0001.888] I> Binary name: MB2
[0001.912] I> MB2 header integrity check is success
[0001.945] I> MB2 binary integrity check is success
[0001.950] I> Binary MB2 loaded successfully at 0x80000000
```

その後、ログは MB2 に入ります：

```text
I> MB2 (version: 0.0.0.0-t234-...)
I> Boot-mode : Coldboot
```

これは、ブートフローが MB1 から MB2 へ進んだことを意味します。

MB2 はさらにプラットフォームの初期化を進め、SPE、RCE、DCE、XUSB、PVA など SoC 内部で必要となるいくつかのファームウェアをロードおよび認証し、後続の UEFI ステージと Linux ブートに備えます。

ここでの核心的なポイントは次のとおりです：**Linux Kernel が実際に起動を開始する前に、Jetson はすでに大量の低レベルなハードウェアおよびファームウェア初期化を完了している。**

---

## MB2 のあと、UEFI へ進む

MB2 の処理が終わると、ログには非常にわかりやすい境界線が現れます：

```text
I> MB2 finished
```

その後、ARM Trusted Firmware と OP-TEE に入ります：

```text
NOTICE: BL31: v2.8
I/TC: OP-TEE version: 4.2
I/TC: Primary CPU switching to normal world boot
```

続いて、UEFI ブートが確認できます：

```text
Jetson UEFI firmware
(version 36.4.3-gcid-38968081 ...)
```

ここで **BL31** は ARM Trusted Firmware ステージを担当し、**OP-TEE** は Trusted Execution Environment（信頼実行環境）を提供します。一般的な Jetson 開発者にとっては、その内部実装まで深く理解する必要はありませんが、次のことは知っておくべきです：**UEFI のログが見えているということは、その前の MB1、MB2、およびセキュアファームウェアのステージが基本的に完了しており、システムはこれから OS ブートステージに入ろうとしている** ということです。

これは、後でトラブルシューティングを行う際にも非常に重要なチェックポイントになります。

---

## UEFI に入ったあとは：ブート問題の焦点は「システムブート」側へ移る

さらにログを追っていくと、次のような出力が現れます：

```text
Jetson System firmware version 36.4.3-gcid-38968081

ESC   to enter Setup.
F11   to enter Boot Manager Menu.
Enter to continue boot.
```

これは、システムが **UEFI ステージ** に正常に入ったことを意味します。言い換えると、それ以前の BootROM、MB1、MB2 などのブートフローは完了しています。

ここから先は、トラブルシューティングの焦点が変わります。

もし UEFI から先に Linux へ進めない場合、まず注目すべきなのは次の点です：

```text
Boot Order
Boot Device
EFI Boot Entry
L4TLauncher
Kernel / DTB / initrd
```

このステージは、ざっくり次のように理解できます：

```text
Early hardware init
      ↓
     UEFI
      ↓
Start selecting and loading Linux
```

> **UEFI が見えているということは、システムは低レベルのブートフローの大部分を完了している。次は「Linux をどこからブートしているのか、Linux のブートファイルは正しいか」に注目する。**

---

## L4TLauncher：UEFI から Linux Kernel へのバトンタッチ

UEFI に入ったあとは、システムは実際に Linux のロードを開始します。ログには次のように出力されます：

```text
L4TLauncher: Attempting Direct Boot
EFI stub: Booting Linux Kernel...
EFI stub: Using DTB from configuration table
EFI stub: Loaded initrd from LINUX_EFI_INITRD_MEDIA_GUID device path
EFI stub: Exiting boot services...
```

**L4TLauncher** は、Jetson UEFI でデフォルト使用される OS ローダです。これは Linux をブートするために必要なものを準備します。具体的には次のようなものです：

```text
Kernel   The Linux kernel
DTB      Hardware description
initrd   Temporary filesystem used in early boot
```

この中で最も重要な 2 行は次の部分です：

```text
EFI stub: Booting Linux Kernel...
EFI stub: Exiting boot services...
```

これらは、UEFI が Linux ブート環境の準備を終え、Kernel へシステム制御を渡し始めていることを意味します。

ここでブートフローは新しいステージに入ります。

> **すでに `EFI stub: Booting Linux Kernel...` が見えている場合、ブートローダステージは基本的に成功しており、その後にブートが失敗するなら、調査の焦点は徐々に Kernel、DTB、initrd、RootFS へと移っていきます。**

---

## Linux Kernel が正式に起動する

その直後、ログは Linux Kernel の出力に入ります：

```text
[    0.000000] Booting Linux on physical CPU 0x0000000000
[    0.000000] Linux version 5.15.148-tegra
[    0.000000] Machine model: NVIDIA Jetson Orin NX Engineering Reference Developer Kit Super
```

ここで明らかな変化が 1 つ見て取れます：**タイムスタンプが `0.000000` から再スタートしている** ことです。

これは、MB1、MB2、UEFI が Bootloader / Firmware ステージに属しているのに対し、ここからは **Linux Kernel 自身のランタイムステージ** に入ったことを意味します。

したがって、今後 UART ブートログを解析するときは、次のような出力を見つけたら：

```text
Linux version ...
```

次のように判断してかまいません：

> **ブートローダステージは完了しており、システムは正式に Linux Kernel に入っている。**

この瞬間から、ログの焦点は徐々に **デバイスドライバ、DTB、ストレージデバイス、initrd、RootFS** へと移っていきます。

---

## Kernel はブートパラメータを通じて RootFS を見つける

Kernel が起動したあと、実際の Ubuntu RootFS がどこにあるのかを知る必要があります。この情報は Kernel コマンドラインから確認できます：

```text
[    0.000000] Kernel command line:
root=PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
rw rootwait rootfstype=ext4 ...
```

ここでは Kernel に対して次のことを伝えています：

> **`/` としてマウントされる RootFS は、この PARTUUID に対応するパーティションです。**

もう 1 つ重要なパラメータとして `rootwait` があります。

これは、ルートデバイスがまだ準備できていない場合に、対応するストレージデバイスが現れるまで Kernel に待機させるためのものです。コントローラとドライバの初期化が先に必要となる NVMe や USB SSD のようなデバイスにとって、これは非常に重要です。

したがって、この段階は次のように単純化して理解できます：

> **Kernel までは起動しているのに RootFS が最後まで見つからない場合、調査の焦点は UEFI ではなく、ストレージデバイス、ドライバ、PARTUUID、ファイルシステムに移すべきです。**

---

## initramfs：本物の RootFS の前にある一時的な環境

Kernel が起動すると、まず initramfs を展開します：

```text
[    0.165968] Unpacking initramfs...
```

その後、早期ユーザ空間に入り、`/init` を実行します：

```text
[    2.540191] Freeing unused kernel memory: 7744K
[    2.540270] Run /init as init process
[    2.567003] Root device found: PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
```

ここでの `/init` は Ubuntu の `systemd` ではなく、**一時的な initramfs 環境**で動作する初期化プログラムです。その重要な役割の 1 つが、ストレージデバイスを準備し、本物の RootFS を見つけることです。

これは次のように理解できます：

```text
Linux Kernel
    ↓
initramfs
    ↓
Run /init
    ↓
Find Root Device
    ↓
Prepare to switch to Ubuntu RootFS
```

したがって、Jetson が起動中に initramfs / リカバリシェルで止まってしまう場合、例えば：

```text
bash-5.2#
```

これは通常、**Kernel と早期ユーザ空間までは正常に起動している**ことを意味します。この時点では、RootFS、ストレージデバイス、PARTUUID、ファイルシステムなど、より後ろの段階に注目すべきです。なお、このシェルに到達したからといって、**必ずしも故障とは限りません**。必ず具体的なログと合わせて解析する必要があります。

---

## Kernel が NVMe を検出し、RootFS を含むディスクを見つける

多くの Seeed Studio Jetson 製品では、Ubuntu RootFS は NVMe 上に配置されています。そのため Kernel 起動後、まず対応する PCIe および NVMe デバイスを検出する必要があります。

ログには、PCIe Link が確立されたことが示されています：

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.640379] tegra194-pcie 14160000.pcie: Link up
```

その後、システムは NVMe コントローラを検出します：

```text
[    6.649660] nvme 0004:01:00.0: Adding to iommu group 5
[    6.649851] nvme nvme0: pci function 0004:01:00.0
```

最後に、NVMe ディスクとそのパーティションが列挙されます：

```text
[    6.662942] nvme nvme0: 6/0/0 default/read/poll queues
[    6.665906] nvme0n1: p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15
```

このログから、チェーン全体がたどられたことが分かります：

```text
PCIe Link Up
    ↓
NVMe Controller found
    ↓
Identified as nvme0
    ↓
nvme0n1 created
    ↓
Partitions enumerated
```

**`nvme0n1` が見えていれば、Kernel がこの NVMe を正常に検出できたことを意味します。そのうえで初めて、本物の RootFS のマウント処理に進みます。**

---

## Ubuntu RootFS がマウントされる

NVMe が検出されると、システムは本物の RootFS のマウント処理を続行します。ログには次のように表示されます：

```text
[    7.426780] EXT4-fs (nvme0n1p1): mounted filesystem with ordered data mode.
[    7.433141] Rootfs mounted over PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
[    7.439898] Switching from initrd to actual rootfs
```

これは、システムが一時的な initramfs 環境を抜けて、本物の Ubuntu RootFS を使い始めたことを意味します。

> **ここまで確認できれば、Kernel、ストレージデバイス、RootFS のマウントはいずれも成功しており、起動フローは Ubuntu User Space に入ろうとしているとほぼ判断できます。**

これは前回の記事で述べた概念にも対応しています：**Ubuntu は Jetson システム全体そのものではなく、起動チェーン後半で実際にマウントされる RootFS とユーザ空間環境です。**

---

## systemd の起動：Ubuntu User Space への突入

RootFS の切り替え後、`systemd` の起動が見られます：

```text
[    7.550899] systemd[1]: systemd 249.11-0ubuntu3.12 running in system mode
[    7.551400] systemd[1]: Detected architecture arm64.
[    7.559528] systemd[1]: Hostname set to <ubuntu>.
```

これは、システムがブート段階から本物の **Ubuntu User Space** に移行したことを示しています。

その後 `systemd` は、デバイス管理、ネットワーク、ログ、NVIDIA 関連サービス、グラフィカルインターフェースなどのシステムサービスを順次起動していきます。

ログには次のような表示もあります：

```text
[    7.774172] systemd[1]: Queued start job for default target Graphical Interface.
```

つまり、システムの次の起動ターゲットは：

```text
graphical.target
```

すなわちグラフィカルなデスクトップ環境です。この時点で、**Bootloader、Linux Kernel、NVMe、RootFS はすべて成功しており、システムは Ubuntu User Space に入っています。** 電源投入から Ubuntu ユーザ空間に至るまでの主要なブートチェーンは、ここでほぼ完結します。

余談ですが、もし起動時に自動起動するソフトウェアを設定していれば、このタイミングで順次起動されます。

---

## 起動トラブルシューティング：まず「最後に到達したレイヤー」を特定する

Seeed の Jetson 技術コミュニティでは、「Jetson が起動しないのはなぜですか？」という質問をよく目にします。

再フラッシュで 90% の問題は解決できますが、それでもまずデバイスの **UART ブートログ** を取得し、**最後に正常に現れたブート段階** に基づいて、起動失敗の真の原因を分析することをお勧めします。具体的な原因を理解してこそ、今後同様の問題を避けることができます。

解析手法そのものは、本質的には **障害がどのブート段階にあるのかを徐々に絞り込んでいくこと** です。

もう 1 つ注意すべき点として、ブートログ中の Error や Warning が、必ずしも起動フローの失敗を意味するわけではありません。Error があっても、それがデバイスが起動しない直接の原因とは限りません。例えば、Ubuntu User Space に入った後でも、次のようなログが見られることがあります：

```text
imx219 ... error during i2c read probe
imx219 ... board setup failed
imx219 ... probe ... failed
```

ここで実際に失敗しているのは **IMX219 カメラのプローブ処理** であり、Jetson 全体のブートフローではありません。

ここで改めて強調したいポイントは次のとおりです：**ブートログを読むときに最も重要なのは、最初の Error を見つけることではなく、ブートチェーン上で最後に成功したブート段階を見つけることです。**

---

## まとめ

Jetson のブートログは非常に長いですが、トラブルシューティングの際にすべての行を理解する必要はありません。AI 支援の解析と組み合わせて、怪しい部分に注目することをお勧めします。システムがどのレイヤーで止まったかさえ特定できれば、問題の範囲は通常すぐに絞り込めます。これが Jetson の起動問題を分析するうえで最も重要なアプローチです。この方法を身につければ、何千行もあるブートログはもはや雑多な情報の塊ではなく、問題の迅速な特定を助けてくれる **Jetson ブートマップ** になるでしょう。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
