---
description: PCB Design for XIAO
title: PCB Design for XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/PCB_Design_XIAO
last_update:
  date: 11/07/2023
  author: Matthew
---

# Flux.ai で XIAO コンポーネントを作成する

Flux は、エレクトロニクスチーム間でシームレスなコラボレーションを可能にするブラウザベースの PCB 設計ツールです。このツールの直感的なインターフェースにより、ユーザーは回路図とレイアウトを迅速かつ簡単に作成でき、内蔵のシミュレーション機能により設計が正確でエラーフリーであることを確保できます。

このセクションでは、Flux.ai で Seeed Studio XIAO シリーズコンポーネントを作成する方法について説明します。

## Seeed Studio XIAO シリーズ PCB 設計をブラウザで閲覧

### Seeed Studio XIAO SAMD21

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1">
</iframe>

### Seeed Studio XIAO RP2040

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1" />

### Seeed Studio XIAO nRF52840

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1" />

### Seeed Studio XIAO nRF52840 Sense

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1">
</iframe>

### Seeed Studio XIAO ESP32C3

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1" />

### Seeed Studio XIAO ESP32S3

<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-esp32s3?editor=schematic&embed=1">
</iframe>

### Seeed Studio XIAO ESP32S3 Sense

<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1" />

## Flux.ai に関する知識 - パーツの作成

Flux のパーツは 5 つの主要コンポーネントで構成されています。これらのコンポーネントはすべてオプションですが、コンポーネントが欠けているパーツは完全な機能を提供できません：

| 概念 | 説明 |
| --- | --- |
| 回路図 | パーツの「内部」ビューで、端子のみで表現されます。 |
| シンボル | パーツが他のプロジェクトにドラッグされたときの表現で、通常は他のツールからユーザーに馴染みのあるものです。 |
| フットプリント | 物理的なパーツがボード上にどのように配置されるかを表します。 |
| 3D モデル | パーツの 3D 形状と寸法を示します。 |
| シミュレーションモデル | シミュレーション中にパーツがどのように動作すべきかを記述します。 |

## はじめに

### ステップ1 - 新しい部品回路図の作成

最初のステップは、新しい空白プロジェクトを作成することです。これは右上角のメインFluxメニューで行うことができます。ターミナルは、Fluxで作成されるすべての部品の基礎です。部品が回路の他の部分と相互作用することを可能にします。新しい部品にターミナルを追加するには、ライブラリに移動し、「Terminal」を検索して、必要な数だけドラッグしてください。

この例では、Seeed Studio XIAO ESP32S3を追加するので、14個のターミナルピンを追加し、名前と番号を付けました。

部品プロパティで、製造者部品番号（MPN）、製造者名、データシートURL等、部品に関するより多くの情報を提供できます。コンポーネントのMPNを入力すると、コンポーネントの現在の在庫状況と価格を見つけるのに役立ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### ステップ2 - シンボルの作成

Fluxは、あなたが慣れ親しんでいる他のツールとは少し異なる動作をします。Fluxでは、部品には回路図とシンボルという2つの異なるビューがあります。ステップ1の回路図ビューには、ターミナルのみが含まれています。シンボルは、部品がプロジェクトに配置されたときにのみ表示されます。今度は、xiaoのシンボルを作成しましょう。そのためには、IllustratorやInkscapeなどの外部ツールを使用する必要があります。設計されたシンボル形式は.svgである必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

シンボルを設計する際に考慮すべき事項：

- すべての形状と線は白色で、1pxのストローク幅、塗りつぶしなしにする必要があります。
- ピンは通常10〜18ピクセルの長さです。
シンボルをSVGファイルとしてエクスポートします。

### ステップ3 - SVGをアセットとして追加

SVGファイルを取得したら、それをアセットとして追加します。外部ファイルをアセットとして追加するには、オブジェクトが選択されていないことを確認してください（空のキャンバスをクリック）。右側のドロワーで、アセットパネルが見つかるまでスクロールダウンします。それを開いて「Add」（または「Manage」）をクリックします。これによりアセットダイアログが開きます。次に「Add item」をクリックして、ローカルドライブからファイルを選択します。
**ピン位置をカスタムシンボルと一致させる。**
デフォルトでは、すべてのターミナルはシンボルの中央に配置されます。ターミナルを希望の位置に配置するには、さらにいくつかのステップがあります。

1. 部品をライブラリに公開します。
2. 新しい空白プロジェクトを作成し、インポートする部品をドラッグします。
3. 両方のターミナルがシンボルの中央にあることに気づくでしょう。今度はインポートした部品に戻ります。
4. 部品内のすべてのターミナルに対してこのプロセスを実行する必要があります。
a) ターミナルを選択し、右側パネルの「Properties」メニューを見つけます。
b) 「Symbol Pin Position」フィールドで、ターミナルがシンボル上に配置される希望のxおよびy座標を入力します。
c) 部品を公開し、新しいプロジェクトに戻ります。左下に「Update available for your parts」の凡例が表示されます。「Review」をクリックして変更を受け入れます。
d) ターミナルが移動したことに気づくでしょう。完璧な位置を決めるために、このプロセスを数回繰り返す必要があるかもしれません。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>

### ステップ4 - フットプリントの作成

フットプリントはFluxで非常に簡単に作成できます。Flux PCエディタで直接追加できるパッド、線、形状、テキストノードで構成されています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>

fluxで最初にフットプリントを作成すると、すべてのパッドが一箇所にあり、小さな点として表示されます。
 パッド位置を変更するには
 移動するパッドを選択し、右パネルのオブジェクト固有ルールで位置ルールを見つけ、
 希望のxおよびy位置をミリメートル単位で入力します。

### ステップ5 - パッドサイズと形状の変更

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>

パッドの1つをクリックすることで、その形状、位置、穴径、その他のプロパティを変更できます。xiaoの場合、3mm*2mmサイズのパッドと1.1mmの穴を選択しました。xおよびy位置ミリメートルを利用して、各ピンを2.54mm間隔で配置しました。
**3Dモデルの追加**

今度はxiaoの3Dモデルを追加する必要があります。fluxは3Dモデル用に.stepファイルをサポートしており、公式wikiページからダウンロードできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>

アシストセクションから3Dモデルをアップロードできます。3Dモデルの追加に関するより詳細な情報は、ビデオで利用できます。
オブジェクト指定ルールからx y z位置と回転を変更できます。これを使用して、はんだパッドの上に3Dモデルを配置できます。
**ライブラリへの公開**
コンポーネントを作成した後、それを公開する時です

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>

左上角のfluxロゴを選択し、次に変更を公開を選択します。
これで、私たちのコンポーネントがプロファイルで利用可能になり、パブリックライブラリ検索にも表示されます。

## さらに詳しく - チュートリアル動画

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ コントリビュータープロジェクト

- このプロジェクトは[Seeed Studio Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6)によってサポートされています。
- [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283)の努力に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
