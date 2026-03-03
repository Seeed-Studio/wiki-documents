---
description: XIAO用PCB設計
title: XIAO用PCB設計
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/PCB_Design_XIAO
last_update:
  date: 11/07/2023
  author: Matthew
---

# Flux.aiでXIAOコンポーネントを作成する

Fluxは、エレクトロニクスチーム間のシームレスなコラボレーションを可能にするブラウザベースのPCB設計ツールです。このツールの直感的なインターフェースにより、ユーザーは回路図とレイアウトを迅速かつ簡単に作成でき、内蔵のシミュレーション機能により設計が正確でエラーフリーであることを確保できます。

このセクションでは、Flux.aiでSeeed Studio XIAOシリーズコンポーネントを作成する方法について説明します。

## ブラウザでのSeeed Studio XIAOシリーズPCB設計

### Seeed Studio XIAO SAMD21

<div class="video-container">
<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1">
</iframe>
</div>

### Seeed Studio XIAO RP2040

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO nRF52840

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO nRF52840 Sense

<div class="video-container">
<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1">
</iframe>
</div>

### Seeed Studio XIAO ESP32C3

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO ESP32S3

<div class="video-container">
<iframe height="450" width="800" allowFullScreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3?editor=schematic&embed=1" />
</div>

### Seeed Studio XIAO ESP32S3 Sense

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1" />
</div>

## Flux.aiの知識 - パーツの作成

Fluxのパーツは5つの主要コンポーネントで構成されています。これらのコンポーネントはすべてオプションですが、コンポーネントが欠けているパーツは完全な機能を提供できません：

| 概念 | 説明 |
| --- | --- |
| Schematic | パーツの「内部」ビューで、端子のみで表現されます。 |
| Symbol | パーツが他のプロジェクトにドラッグされたときの表現で、通常他のツールからユーザーに馴染みがあります。 |
| Footprint | 物理的なパーツがボード上にどのように配置されるかを表します。 |
| 3D model | パーツの3D形状と寸法を示します。 |
| Simulation model | シミュレーション中にパーツがどのように動作するかを記述します。 |

## 始めに

### ステップ1 - 新しいパーツ回路図の作成

最初のステップは、新しい空白プロジェクトを作成することです。これは右上角のメインFluxメニューで行うことができます。端子はFluxで作成されるすべてのパーツの基礎です。パーツが回路の他の部分と相互作用することを可能にします。新しいパーツに端子を追加するには、ライブラリに移動し、"Terminal"を検索して必要な数だけドラッグインします。

この例では、Seeed Studio XIAO ESP32S3を追加するので、14個の端子ピンを追加し、名前と番号を付けました。

パーツプロパティで、メーカー部品番号（MPN）、メーカー名、データシートURLなど、パーツに関するより多くの情報を提供できます。コンポーネントのMPNを入力すると、コンポーネントの現在の在庫状況と価格を見つけるのに役立ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### ステップ2 - シンボルの作成

Fluxは、あなたが慣れ親しんでいる他のツールとは少し異なる動作をします。Fluxでは、パーツには2つの異なるビューがあります：回路図とシンボルです。ステップ1の回路図ビューには端子のみが含まれています。シンボルは、パーツがプロジェクトに配置されたときにのみ表示されます。今度はxiao用のシンボルを作成しましょう。そのためには、illustratorやInkscapeなどの外部ツールを使用する必要があります。設計されたシンボル形式は.svgである必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

シンボルを設計する際に考慮すべき事項：

- すべての形状と線は白色で、1pxのストローク幅、塗りつぶしなしにする必要があります。
- ピンは通常10〜18ピクセルの長さです。
シンボルをSVGファイルとしてエクスポートします。

### ステップ3 - SVGをアセットとして追加

SVGファイルを取得したら、それをアセットとして追加します。外部ファイルをアセットとして追加するには、オブジェクトが選択されていないことを確認してください（空のキャンバスをクリック）。右側のドロワーで、アセットパネルが見つかるまでスクロールダウンします。それを開いて"Add"（または"Manage"）をクリックします。これによりアセットダイアログが開きます。次に"Add item"をクリックして、ローカルドライブからファイルを選択します。
**ピン位置をカスタムシンボルと一致させる。**
デフォルトでは、すべての端子はシンボルの中央に配置されます。端子を希望の位置に配置するには、さらにいくつかのステップがあります。

1. パーツをライブラリに公開します。
2. 新しい空白プロジェクトを作成し、インポートするパーツをドラッグします。
3. 両方の端子がシンボルの中央にあることがわかります。今度はインポートしたパーツに戻ります。
4. パーツのすべての端子に対してこのプロセスを実行する必要があります。
a) 端子を選択し、右側パネルの"Properties"メニューを見つけます。
b) "Symbol Pin Position"フィールドに、端子がシンボル上に配置される希望のxおよびy座標を入力します。
c) パーツを公開し、新しいプロジェクトに戻ります。左下に"Update available for your parts"の凡例が表示されます。"Review"をクリックして変更を受け入れます。
d) 端子が移動したことがわかります。完璧な位置を決めるために、このプロセスを数回繰り返す必要があるかもしれません。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>

### ステップ4 - フットプリントの作成

フットプリントはFluxで非常に簡単に作成できます。Flux PCエディタで直接追加できるパッド、線、形状、テキストノードで構成されています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>

fluxで最初にフットプリントを作成すると、すべてのパッドが一箇所にあり、小さな点として表示されます。
 パッド位置を変更するには
 移動するパッドを選択し、右パネルのオブジェクト固有ルールで位置ルールを見つけます。
 希望のxおよびy位置をミリメートル単位で入力します。

### ステップ5 - パッドサイズと形状の変更

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>

パッドの1つをクリックすることで、その形状、位置、穴径、その他のプロパティを変更できます。xiaoの場合、3mm*2mmサイズのパッドと1.1mmの穴を選択しました。xおよびy位置ミリメートルを利用して、各ピンを2.54mm間隔で配置しました。
**3Dモデルの追加**

今度はxiaoの3Dモデルを追加する必要があります。fluxは3Dモデル用に.stepファイルをサポートしており、公式wikiページからダウンロードできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>

アシストセクションから3Dモデルをアップロードできます。3Dモデルの追加に関するより詳細な情報はビデオで利用できます。
オブジェクト指定ルールからx y z位置と回転を変更できます。これを使用して、はんだパッドの上に3Dモデルを配置できます。
**ライブラリへの公開**
コンポーネントを作成した後、それを公開する時です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>

左上角のfluxロゴを選択し、次にpublish changesを選択します。
これで私たちのコンポーネントがプロフィールで利用可能になり、パブリックライブラリ検索にも表示されます。

## さらに詳しく - チュートリアルビデオ

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ コントリビュータープロジェクト

- このプロジェクトは[Seeed Studio Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6)によってサポートされています。
- [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283)の努力に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
