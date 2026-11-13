---
description: Jetson プラットフォームにおける Device Tree の役割を説明します：Linux がキャリアボード上にどのハードウェアが接続されているかをどのように把握しているのか、キャリアボードを変更するとハードウェアが動かなくなることがある理由、DTS/DTSI/DTB/DTBO の違い、そしてなぜ Seeed Studio のキャリアボードには独自の BSP が必要なのかを解説します。
title: Jetson Device Tree
tags:
  - jetson
  - device tree
  - dts
  - dtsi
  - dtb
  - dtbo
  - carrier board
  - bsp
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_device_tree
last_update:
  date: 11/02/2026
  author: youjiang
---

前回までの 2 本の記事では、UART ブートログを使って、Jetson が電源投入から Ubuntu 起動に至るまでの完全なブートプロセスを一通り追いかけました：

`Power On` --> `MB1/2` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` --> `RootFS` --> `Systemd`

ブートチェーンを理解すると、次に自然と湧いてくる疑問はこうです：**Linux は実際に、このボード上にどんなハードウェアが接続されているかをどうやって知るのか？**

例えば、同じ Jetson Orin Nano Module は、NVIDIA 公式の Developer Kit Carrier Board 上では問題なく動作するのに、別の Carrier Board に載せ替えると USB が動かなくなることがあります。

Jetson モジュール自体は変わっておらず、Linux Kernel も同じままです。それなのに、キャリアボードを入れ替えただけで、システム全体の挙動がガラッと変わってしまうのはなぜでしょうか？ここで登場するのが、Jetson ハードウェア開発において非常に重要な概念である **Device Tree** です。本記事では主に次の疑問に答えていきます：

- **みんなが口にする Device Tree とは、そもそも何なのか？**
- **なぜキャリアボードを変更すると、多くのハードウェアコンポーネントがそのままでは使えなくなるのか？**
- **なぜ Seeed Studio の Jetson キャリアボードには、NVIDIA 公式 BSP をそのまま使わずに、独自の BSP が必要なのか？**

---

## Device Tree とは具体的に何か？

前述のとおり、Linux Kernel はシステム内の低レベルハードウェアを管理する役割を担っています。では Kernel は、キャリアボード上にどんなデバイスが載っているかをどうやって知るのでしょうか？その答えが **Device Tree** です。Device Tree の役割は、**ボード上にどんなハードウェアがあり、それらがどのように接続されているかを Linux Kernel に伝えること** です。例えば、回路図には「あるセンサがどの I2C バスに接続されているか」「そのバスアドレスはいくつか」「Reset がどの GPIO に接続されているか」などが定義されていますが、こうした情報が対応する形で Device Tree に記述されます。私は Device Tree を、Linux Kernel のために書かれた「ハードウェア接続マニュアル」と捉えるのがしっくりくると思っています。

**回路図は人間のために描かれ、Device Tree は Linux Kernel のために書かれる。**

後ほど、Seeed Studio の実際の L4T BSP と組み合わせて、これらの「ハードウェア接続関係」がコード上でどのような姿をしているのかを見ていきます。Seeed Studio は、すべての Jetson 製品の BSP を [Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) でオープンソース公開しています。リポジトリ内には `.dts` で終わるファイルが多数ありますが、これが本記事で扱う Device Tree ファイルです。

---

## 例：Device Tree は PCIe / NVMe にどう影響するか？

先ほど、Device Tree を「Linux Kernel のために書かれたハードウェア接続マニュアル」と表現しました。では、実際のコードではどのような見た目になっているのでしょうか？Seeed Studio J401 の Device Tree を直接見てみましょう。Seeed Studio のオープンソースリポジトリには、`tegra234-j401-p3768-0000+p3767-0000.dts` という Device Tree ファイルがあります。これを開くと、次のようなノードが見つかります：

```text
vdd_3v3_pcie: regulator-vdd-3v3-pcie {
    compatible = "regulator-fixed";
    regulator-name = "VDD_3V3_PCIE";

    regulator-min-microvolt = <3300000>;
    regulator-max-microvolt = <3300000>;

    gpio = <&gpio_aon
            TEGRA234_AON_GPIO(AA, 5)
            GPIO_ACTIVE_HIGH>;

    enable-active-high;
};
```

この設定は、PCIe 用に使われる **3.3V 電源レール** を記述しています。ここで特に重要な情報としては、次のようなものがあります：

```text
regulator-name
→ This power rail is named VDD_3V3_PCIE

3300000
→ The voltage is 3.3V

TEGRA234_AON_GPIO(AA, 5)
→ Controlled by AON GPIO AA.5

enable-active-high
→ This power rail is enabled when the GPIO is driven high
```

言い換えると、キャリアボードの回路図上にある、ある **PCIe Power Enable** 信号が、最終的には Device Tree を通じて Linux に伝えられているということです。これは「ハードウェア接続関係が Device Tree に書き込まれている」ということを非常に直感的に示す例です。これらの設定がすべて正しければ、Kernel は PCIe Link を確立し、PCIe バスに接続された NVMe を検出することができます。ここで前回の記事のブートログと組み合わせてみましょう。設定が正しい場合、UART ブートログには次のような出力が現れます：

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.649851] nvme nvme0: pci function 0004:01:00.0
[    6.665906] nvme0n1: p1 p2 p3 ...
```

ここから、次のような非常に重要な関係性を導くことができます：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/devicetree_flow2.png"/></div>

つまり、**ブートログは結果を示しており、その結果を生み出す重要な設定ソースのひとつが Device Tree である** ということです。

もし Device Tree が実際の Carrier Board と一致していなければ、問題が発生します。例えば、新しい Carrier Board では PCIe 3.3V Enable を別の GPIO に移動したのに、Device Tree には依然として次のように書かれているとします：

```text
AON GPIO AA.5
```

この場合、Linux は古い設計に従って、ずっと間違った GPIO を制御し続けるかもしれません。

その結果、NVMe SSD が正しく検出されない可能性があります。ブートログは Linux Kernel まで到達しているのに、PCIe Link up のメッセージが一向に現れない、といった状況です。ここまでで、Device Tree についての基本的なイメージはつかめたはずです。

---

## Device Tree のファイル形式：DTS / DTSI / DTB / DTBO の違いは？

Jetson の BSP では、`.dts`、`.dtsi`、`.dtb`、`.dtbo` という 4 種類のファイルをよく目にします。見た目はよく似ていますが、役割は異なります。

| File | Full Name | Main Role | Directly Readable | Example in Seeed Open-Source Repo |
|---|---|---|---|---|
| .dts | Device Tree Source | 特定のボードまたはオーバーレイを記述する | ✅ | tegra234-j401-p3768-0000+p3767-0000.dts |
| .dtsi | Device Tree Source Include | 複数の DTS ファイルから再利用される共通設定を格納する | ✅ | tegra234-p3768-0000+p3767-xxxx-nv-common.dtsi |
| .dtb | Device Tree Blob | DTS/DTSI からコンパイルされたバイナリ Device Tree | ❌ | tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb |
| .dtbo | Device Tree Blob Overlay | ベースの Device Tree の上に、ハードウェア設定の一部を追加・変更する | ❌ | tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo |

### まず DTS と DTSI を見てみる

`.dts` は特定ボードの「エントリファイル」、`.dtsi` は共通設定モジュールのようなものだと考えることができます。

例えば、Seeed J401 の DTS は、他の Device Tree ファイルをインクルードしています：

```text
#include "tegra234-p3767.dtsi"
#include "tegra234-p3768-0000.dtsi"
```

つまり、実際のプロジェクトでは、Device Tree は 1 つの巨大な `.dts` ファイルを最初から最後まで書き切るのではなく、多数の `.dtsi` ファイルをレイヤー状に組み合わせて構成されています。

これは C 言語にたとえることもできます：

```text
.dtsi is somewhat like .h
.dts is somewhat like the .c that finally combines these configurations
```

もちろん、このたとえは完全に同じというわけではなく、あくまで両者の関係性を素早くイメージするためのものです。

### DTB：Linux が実際に使うバイナリ Device Tree

`.dts` と `.dtsi` は、開発者が読み書きするためのものです。

これらを dtc（Device Tree Compiler）でコンパイルすると、`.dtb` ファイルが生成されます。

Linux がブート時に実際に読み込むのは、ソースディレクトリ内の `.dts` ではなく、コンパイル済みの `.dtb` です。

---

### DTBO：ハードウェア設定の一部だけを変更する

カメラのように、すべてのデバイスに必ずしも搭載されていないハードウェアもあります。もし IMX219 センサを 1 つ追加するだけのために、J401 の Device Tree 全体をコピーして保守しなければならないとしたら、とても面倒です。このような問題は DTBO（Device Tree Overlay）で扱うことができます。

例えば、Seeed の BSP には Camera Overlay が存在します：

```text
tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

これは完全な J401 Device Tree ではなく、**IMX219 カメラに関連する設定** のみを記述しています。例えば次のようなものです：

- I2C アドレス
- Reset / Power GPIO
- CSI インターフェース
- NVCSI / VI の接続関係
- カメラセンサノード
- など

同様の設定は、Seeed の `recomputer-orin-j401.conf` にも見ることができます：

```text
OVERLAY_DTB_FILE+=tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

つまり、J401 のベースとなるハードウェア設定は元の DTB をそのまま使い、カメラ関連の設定だけを追加で読み込めばよい、ということです。

---

## Device Tree のさらに外側：Jetson にはそれ以前のボードレベル設定もある

ここまでで、Device Tree について大まかな理解ができ、記事冒頭の問いに対する答えも得られたと思います。しかし、ここで新たな疑問に気づいたのではないでしょうか：

Device Tree は Linux Kernel にとっての回路図です。しかし前回の記事のブートログに基づくと、Linux Kernel が起動するより前の段階で、GPIO や Pinmux、Pad Voltage は誰が設定しているのでしょうか？その答えは、ブートローダ段階自体にも独自のボードレベル設定が存在する、ということです。

したがって Jetson では、「キャリアボードの適合＝Kernel の DTB を変更すること」と単純に考えることはできません。より完全な関係性は次のようになります：

```text
                Carrier Board
                     ↓
              Real hardware connections
                     ↓
        ┌────────────┴────────────┐
        ↓                         ↓
Bootloader Board Config     Kernel Device Tree
        ↓                         ↓
   MB1 / MB2 / UEFI          Linux Kernel
        ↓                         ↓
Pinmux / Pad Voltage        USB / PCIe / Camera
 GPIO / Early HW             Ethernet / Sensor
```

これらの関係を理解したい場合は、Seeed Studio の `Linux_for_Tegra` リポジトリから直接学ぶことをおすすめします。

J401 を例に取ると、フラッシュ時には `recomputer-orin-j401.conf` が使用されます。このファイルは、J401 にとって重要な「ボードレベル設定のエントリ」と考えることができます。

Jetson Module の SKU に応じて、対応する DTB を選択します。例えば次のようになります：

```text
tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

ここで非常に重要な情報が 1 つ見えてきます：

> **デバイスツリーはキャリアボードだけでなく、キャリアボード + Jetson モジュールの組み合わせにも関係します。**

しかし、`.conf` ファイルには次の内容以外にも多くの情報が含まれています：

```text
DTB_FILE --> The Kernel Device Tree used by Linux
```

さらに次のような内容も確認できます：

```text
PINMUX_CONFIG --> Pinmux configuration
PMC_CONFIG --> Pad Voltage / PMC related configuration
OVERLAY_DTB_FILE --> Additional overlays such as Camera and Display
BPFDTB_FILE --> Device Tree used by BPMP
```

ここでは残りの詳細には踏み込みません。もし興味があればご自身で調べてみてください。また、Seeed Jetson コミュニティに参加して一緒に議論していただくことも歓迎します。

---

## 現在 Linux が実際に使用しているデバイスツリーを確認する方法

デバイスがすでにシステムのデスクトップまで起動できている場合は、現在のシステムが実際に動作させているデバイスツリーを直接確認することもできます。

現在動作中のデバイスツリーをエクスポートします：

```text
sudo dtc -I fs -O dts  /proc/device-tree > running.dts
```

その後、対応するノードを直接確認できます。例えば：

```text
grep -n "pcie" running.dts
grep -n "usb" running.dts
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/running_devicetree.png"/></div>

デバイスツリーをデバッグする際に本当に確認すべきなのは、どの DTS を変更したかだけでなく、システムが実際にその変更済みバージョンを読み込んでいるかどうかです。

---

## まとめ

デバイスツリー自体はそれほど複雑ではありません。実際に解決している中核的な問題はただ一つです：

> **このキャリアボード上にどのようなハードウェアがあり、そのハードウェアがどのように接続されているかをソフトウェアに知らせること。**

しかし Jetson では、キャリアボードの適合は Kernel デバイスツリーだけでは完結しません。

Seeed Studio の L4T BSP から分かるように、キャリアボードに本当に必要なのは、ボードレベルの設定一式です。これは、Seeed Studio の Jetson 製品が、NVIDIA Developer Kit の設定を単純にそのまま使うのではなく、独自の BSP を必要とする理由でもあります。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
