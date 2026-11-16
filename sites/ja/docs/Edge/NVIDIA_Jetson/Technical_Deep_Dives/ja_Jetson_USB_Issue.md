---
description: Jetson SoC の USB リソース、キャリアボード上の USB Hub 回路図、Linux の lsusb -t によるトポロジーまでを辿りながら、なぜ USB 3.0 デバイスが USB 2.0（480M）でしか動作しないことがあるのか、そして SuperSpeed リンクに沿ってレイヤごとにどのようにトラブルシュートするかを説明します。
title: Jetson USB
keywords:
  - jetson
  - usb
  - usb3
  - usb2
  - 480M
  - super speed
  - lsusb
  - carrier board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_usb
last_update:
  date: 11/02/2026
  author: youjiang
---

この記事では、Jetson で非常によくある、そして間違えやすい問題である **USB** について話していきます。

例えば、USB 3.0 カメラを接続したのに、`lsusb -t` を実行してみると速度が `480M` しか出ていない、というケースがあります。つまり、本来 USB 3.0 をサポートしているこのデバイスが、Jetson 上では USB 2.0 でしか動作していないということです。このとき、多くの人の最初の反応は「USB 3.0 のドライバが動いていないのでは？」というものですが、実際には話はそれほど単純ではありません。というのも、Jetson SoC からあなたの手元の USB デバイスに至るまでの間には、実はかなり多くの要素が存在しているからです。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/usb_data_path.png"/></div>

これらのどのレイヤで問題が起きても、USB 3.x デバイスが最終的に USB 2.0 でしか動作しない、という結果になり得ます。

そこでこの記事では、「なぜ 480M になってしまうのか」だけを説明するのではなく、この問題を題材にして、**Jetson 上で USB がどのように動作しているのか、Carrier Board がどのように USB を引き出しているのか、そして Linux がこれらのデバイスをどのように認識しているのか** を一連の流れとして結び付けて解説していきます。

以下では、**reComputer Classic J4012** を例に取り、Jetson USB の内部ロジックを一つひとつ分解していきます。読み終える頃には、多くのことを学べているはずです。まず最初に、よくある 2 つの不安を解消しておきましょう。

1. あなたの Jetson デバイスが別のモデルであっても、これからの内容を読むうえで問題はありません。重要なのは、トラブルが発生したときの解析アプローチであって、ハードウェアそのものではないからです。
2. `lsusb -t` や USB Hub、UPHY といった概念に馴染みがなくても心配はいりません。後ほど実際のログとともに、一つずつ分解して説明していきます。

それでは、じっくりお楽しみください。

---

## Jetson Orin NX には実際どれくらいの USB があるのか？

まずは NVIDIA Jetson モジュールの仕様から見ていきましょう。各モジュールには固定のリソースがあり、これを一般的にネイティブインターフェースと呼びます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/jetson_modules.png"/></div>

画像出典: https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/

Jetson Orin Nano と Jetson Orin NX について、NVIDIA は 3x USB 3.2 Gen2 と 3x USB 2.0 を提供しています。詳細な説明は NVIDIA の Web サイトで確認できます。ここまで見ると、次のような誤解をしやすくなります。

```text
[3 × USB3] + [3 × USB2] = 6 USB Connectors?
```

実際にはそうではありません。ここで説明されているのは、

> **Jetson モジュールが提供する、下層の USB インターフェース / PHY リソースです。**

最終的にそれらがいくつかの Type-A ポートになるのか、いくつかの Type-C ポートになるのか、あるいは Hub や M.2、オンボードデバイスに接続されるのかは、Carrier Board によって決まります。

言い換えると、Jetson モジュールは USB リソースを提供し、Carrier Board がそれらのリソースの使い方を決め、その結果として私たちが目にするポートの形になります。

## reComputer Classic J401 はこれらの USB ポートをどう使っているのか？

J401 のデータシートでは、最終的にユーザに対して 4x USB 3.2 Type-A と 1x USB 2.0 Type-C を提供しています。Type-C ポートは Device Mode で動作し、主にシステムの書き込みに使用されます。一方、4 つの Type-A ポートは Host Mode で動作し、周辺機器の接続に使われます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_ports.png"/></div>

しかしここで、とても興味深い疑問が出てきます。Orin NX にはネイティブの USB3 ポートが 3 つしかないのに、なぜ J401 には USB3 Type-A ポートが 4 つあるのでしょうか？

その答えは、ボードのオープンソース[回路図](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)にすでに示されています。それは **USB Hub** です。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_blockdiagram.png"/></div>

キャリアボードは 1 本の USB3.2 チャネルを 4 つの USB 3.2 Type-A ポートに拡張しています。回路図をさらに詳しく見ると、この Hub が `VL822-Q7` であることが分かります。

ここで注意したいのは、4 つのポートはいずれも 10 Gbps をサポートしていますが、最終的には **Hub から Jetson へのアップリンク** を共有しているという点です。つまり、4 つの USB ポートは合計 10 Gbps の帯域を共有していることになります。

---

## USB3 ポートの中には USB2 も含まれている

外観だけを見ると、USB 2.0 Type-A と USB 3.x Type-A はほとんど同じに見えますし、USB3 デバイスを USB2 ポートにそのまま挿すこともできます。

そのため、「USB3 は USB2 の速度を 480 Mbps から 5 Gbps や 10 Gbps に単純に引き上げたものだ」という直感を持ちやすいでしょう。

しかし実際にはそうではありません。USB2 との互換性を保つために、USB3 は元の USB2 信号を単に「アップグレード」したわけではありません。代わりに、USB2 の配線をそのまま残したうえで、その上に SuperSpeed 専用の別系統の高速信号を追加しています。

USB2 Type-A ポートには通常、VBUS、D+、D-、GND の 4 本の配線があります。USB3 Type-A ポートでは、これらのピンに加えて SuperSpeed 用の信号 SSTX+ / SSTX- と SSRX+ / SSRX- が追加されています。

したがって、USB2 と USB3 の Type-A は**物理的には互換性があります**が、内部で実際に使われている信号はまったく同じというわけではありません。

これを簡単に理解するなら、次のようなイメージになります。

```text
              USB 3.x Type-A Connector
                         │
          ┌──────────────┴──────────────┐
          ↓                             ↓
       USB 2.0                       USB 3.x
      Original pins               New high-speed pins
          │                             │
       D+ / D-                     SSTX / SSRX
          │                             │
      USB2 PHY                        UPHY
          │                             │
        480M                         5G / 10G
```

言い換えると、USB3 Type-A ポートには実際には 2 つのデータパスが同時に存在しています。この設計の最大の利点は、**後方互換性**を確保できることです。

これはまた、非常に重要な現象も説明してくれます。**たとえ USB3 デバイスの SuperSpeed リンクに問題があっても、USB2 の D+ / D- ピン経由でシステムに認識されてしまうことがある、ということです。多くの場合、「使える」ことは「正常に動作している」ことと同義ではありません。**

キャリアボードの回路図に戻りましょう。VL822-Q7 には HSD0+/HSD0- と SSTX0+/SSTX0-、SSRX0+/SSRX0- の両方があります。ここで HSD は USB2 High-Speed チャネルに対応し、SSTX / SSRX は USB SuperSpeed チャネルに対応します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/vl822_schematic.png"/></div>

したがって、J401 の実際の USB アーキテクチャは、実は次のようなイメージに近くなります。

```text
                     Jetson Orin NX

                USB2                USB3
                  │                   │
                D+/D-             TX / RX
                  │                   │
                  └────────┬──────────┘
                           ↓
                        VL822-Q7
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
           USB2 Path                USB3 Path
              │                         │
           HSD1~4                 SSTX/SSRX 1~4
              │                         │
              └────────────┬────────────┘
                           ↓
                      4 × USB-A
```

つまり、**J401 上の各 USB3 Type-A ポートの背後には、USB2 の経路と SuperSpeed の経路が両方存在している**ということです。この点は、後ほど行う故障解析において非常に重要になります。

---

## Linux はこれらの USB デバイスをどのように見ているのか？

回路を分析したところで、今度は Linux に戻り、最終的にシステムがこれらの USB デバイスをどのように認識しているのかを見てみましょう。

まず補足として、Linux で USB のトラブルシュートを行う際によく使われるコマンドが `lsusb -t` です。これを使うと、次のような情報を直接確認できます。

```text
USB Topology
Hub
Driver
Interface
Link Speed
```

よく目にする速度は、次のように理解できます。

| lsusb -t Display | 対応する USB リンク |
|---|---|
| 1.5M | Low-Speed |
| 12M | Full-Speed |
| 480M | USB 2.0 High-Speed |
| 5000M | USB 3.x SuperSpeed 5 Gbps |
| 10000M | USB 3.x SuperSpeed 10 Gbps |

注意：

> **ここに表示されているのは USB リンク速度であり、デバイスの実際のデータスループットではありません。**

例えば `5000M` は、その USB リンクが 5 Gbps の SuperSpeed モードで動作していることを意味しますが、カメラが実効 5000 Mbps のデータを継続的に出せることを意味しているわけではありません。

手元の reComputer Classic J4012 に USB 3.0 対応の Orbbec カメラを接続し、`lsusb -t` コマンドを実行すると、下図のような情報が返ってきました。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_camera.png"/></div>

ここでは 2 つのバスがはっきりと見えますが、これは USB2 Root Hub と SuperSpeed Root Hub の 2 つの論理トポロジに対応しています。

それでは、このターミナル出力を一緒に読み解いていきましょう。

```text
/:  Bus 02.Port 1: Dev 1, Class=root_hub, Driver=tegra-xusb/4p, 10000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 10000M
        |__ Port 3: Dev 3, If 0, Class=Video, Driver=uvcvideo, 5000M
        |__ Port 3: Dev 3, If 1, Class=Video, Driver=uvcvideo, 5000M
        ...
```

ここでは、たくさん出てくる `If 0 / If 1 / If 2` の行はひとまず気にせず、上位 3 層だけに注目します。

```text
Jetson XUSB Root Hub
       10000M
          ↓
   J401 VL822 Hub
       10000M
          ↓
    Orbbec Camera
        5000M
```

これは実際には、先ほど解析した回路図とちょうど 1 対 1 で対応しています。

```text
Driver=tegra-xusb/4p, 10000M
```

ここでの `tegra-xusb` は Jetson の USB Host Controller Driver です。そして `10000M` は、この側の Root Hub が 10 Gbps の SuperSpeed をサポートしていることを意味します。

```text
Class=Hub, Driver=hub/4p, 10000M
```

この Hub は、先ほど J401 の回路図で見た `VL822-Q7` に対応しています。ここでも `10000M` と表示されており、**Jetson と VL822 Hub 間の SuperSpeed アップリンクが正常に確立されている**ことを示しています。

```text
Class=Video, Driver=uvcvideo, 5000M
```

Camera の現在のリンク速度が `5000M` であることがわかります。これは、この Orbbec Camera が 5 Gbps の SuperSpeed リンクを正常に確立していることを意味します。

したがって、完全なチェーンは次のように表せます：

```text
Jetson XUSB
   │
   │ 10000M
   ↓
J401 VL822 Hub
   │
   │ 5000M
   ↓
Orbbec Camera
```

ここで疑問が出るかもしれません：Hub は明らかに `10000M` なのに、なぜ Camera は `5000M` だけなのか？

これはまったく正常です。`10000M` は **Jetson ↔ Hub** 区間の能力を表し、`5000M` は **Hub ↔ Camera** 区間でネゴシエーションされた速度を表しています。異なる区間が異なる速度で動作することは、まったく問題ありません。

---

## 同じカメラなのに、なぜこんなに多くの行が表示されるのか？

ここで、誤解されやすい問題について説明しておきます。接続したカメラは 1 台だけなのに、なぜ複数行の情報が表示されるのでしょうか？

ログの中で `Dev 3` が何度も登場します。これは 8 台の USB デバイスが接続されているという意味ではありません。**同じ USB Composite Device が複数の USB Interface を公開している**という意味です。私の深度カメラには多くの機能があり、それぞれ独立して利用可能な機能ごとに 1 つの Interface があります。Linux はこれら各 Interface に対応する Driver をバインドします。したがって、`Dev` は USB デバイスそのもの、`If` はそのデバイス内部の異なる Interface を表していると理解できます。

---

## 次に 480M バスを見てみましょう

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_480m.png"/></div>

この下にも情報があることに注意してください：

```bash
Port 3: Dev 3, If 0, Class=Wireless, Driver=btusb, 12M
```

これは Bluetooth デバイスです。しかし、私は USB Type-A ポートに Bluetooth デバイスを何も接続していません。では、Linux はどのようにしてこのデバイスを検出したのでしょうか？最初にキャリアボードの回路図を見たとき、USB2_D が M.2 Key E スロットに接続されていることを学びました。ここに現れている `btusb` は、実際には M.2 インターフェース上に接続されています。

## トラブルシューティングの考え方：USB3 デバイスが USB2 になってしまうとき

ここでようやく、最初に挙げた疑問に答えることができます。トラブルシューティングの観点から、「USB3 デバイスが USB2 に格下げされた」という状況をより正確に理解すると、**USB2 リンクは正常だが、SuperSpeed リンクが確立されなかった**ということになります。したがって、本来 USB3 をサポートしているデバイスが `lsusb -t` で `480M` としか表示されない場合は、USB 通信チェーンに沿って遡って確認する必要があります。現在のテストシナリオでは、もし次のように表示されていれば：

```text
Hub      10000M
Camera    480M
```

これは `Jetson → VL822` の SuperSpeed リンクが正常であることを意味します。すると問題は、次の部分にある可能性が高くなります：

```text
VL822 Downstream Port --> USB Connector --> Cable --> Camera
```

この時点で、優先して確認すべきなのは次の点です：

- 外付け HUB があるか、またその外付け HUB が USB3.x をサポートしているか
- 別の USB Type-A ポートを試し、特定の USB Type-A ポートの故障を切り分ける
- 使用しているデータケーブルが USB3.x をサポートしているか
- 既知の正常な USB3 デバイスを別に試し、USB デバイス自体の問題を切り分ける
- ...

逆に、`Hub 10000M` すら表示されず、USB2 の `Hub 480M` しか見えない場合は、問題はより上流側に近いところにあると考えられます：

```text
Jetson --> UPHY --> Carrier Board
```

この場合、次の点を確認する必要があります：

- 書き込んだシステムが、デバイスメーカーが提供しているものかどうか
- 自分でファームウェアをビルドした場合、UPHY Configuration、Device Tree などの設定ファイルが正しいかどうか
- キャリアボードの設計が妥当か、USB HUB の配線が正常かどうか
- ...

---

## まとめ

最後に、本記事の核心となる内容を簡単にまとめます。USB3 デバイスが 480M としか表示されない場合、多くの場合それは「USB 全体が壊れている」のではなく、USB2 リンクは正常だが SuperSpeed リンクが確立されていない、という状況です。トラブルシューティングの際は、まず `lsusb -t` を使って SuperSpeed リンクがどこまで正常に到達しているかを特定し、その後 Cable、Hub、Carrier Board、UPHY、BSP といった要素に沿って、段階的に範囲を絞り込んでいきます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
