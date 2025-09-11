---
description: reTerminal 用 Buildroot
title: reTerminal 用 Buildroot
keywords:
  - Edge
  - reTerminal OS_インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-Buildroot-SDK
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal 用 Buildroot

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## はじめに

[Buildroot](https://buildroot.org) は、クロスコンパイルを使用して、組み込みシステム用の完全な Linux システムを構築するプロセスを簡素化し、自動化する使いやすいツールです。

Buildroot は、ターゲット用のクロスコンパイルツールチェーン、ルートファイルシステム、Linux カーネルイメージ、およびブートローダーを生成することができます。これらのオプションを任意の組み合わせで独立して使用することも可能です（例えば、既存のクロスコンパイルツールチェーンを使用し、Buildroot でルートファイルシステムのみを構築することができます）。

Buildroot はシンプルな構造を持ち、理解しやすく拡張も容易です。また、よく知られた Makefile 言語にのみ依存しています。Buildroot はオープンソースプロジェクトであり、多くの開発者が日々貢献しています。

以下のガイドに従うことで、Buildroot を使用して独自の [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) システムイメージを構築することができます。それでは始めましょう！

## Buildroot ソースコードのコンパイル

### ローカルマシンでの手動コンパイル

ここでは、Buildroot を使用して reTerminal 用のシステムイメージを手動でコンパイルする方法を説明します。

**注意:** このガイドは、Ubuntu 20.04 をインストールしたホスト PC でテストした後に作成されました。ただし、他の Linux システムでも動作します。

- **ステップ 1.** ホスト PC に開発環境を準備し、以下のパッケージ（git、gcc、make）をインストールします。

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**注意:** 上記のパッケージがすでにインストールされている場合は、このステップをスキップできます。

- **ステップ 2.** 以下の GitHub リポジトリをクローンします。

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **ステップ 3.** **seeed-linux-buildroot** ディレクトリに移動します。

```sh
cd seeed-linux-buildroot
```

#### デフォルト設定で reTerminal をコンパイル

以下のコマンドを入力して、デフォルトの reTerminal 設定でコンパイルを開始します。

```sh
make reTerminal_64_defconfig
make
```

#### 独自の設定で reTerminal をコンパイル

独自の設定でコンパイルするために必要なパッケージをインストールするには、以下のコマンドを入力します。

```sh
sudo apt install libncurses-dev
```

- **ステップ 5.** 以下のコマンドを入力して、Buildroot 設定ウィンドウを開きます。

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

この設定ウィンドウを使用して、利用可能なオプションをナビゲートし、**イメージをカスタマイズ**することができます。また、このウィンドウで変更を加えずに **保存** および **終了** をクリックすると、デフォルトの reTerminal 設定が読み込まれます。

#### コンパイル済みイメージの確認

コンパイルが成功したら、`seeed-linux-buildroot/output/images` に移動し、**sdcard.img** という名前のコンパイル済みイメージを見つけることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### 既にコンパイル済みのイメージをダウンロード

Buildroot を使用して既にコンパイルされた reTerminal システムイメージをダウンロードしたい場合は、以下の手順に進んでください。

- **ステップ 1.** [このリンク](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions) を開き、**seeed-linux-buildroot** GitHub リポジトリの **Actions** ページにアクセスします。

- **ステップ 2.** 最新の **Seeed reTerminal buildroot** ワークフローをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** **Artifacts** の下にある **buildroot deploy** をクリックして、イメージのダウンロードを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**注意:** イメージをダウンロードした後、イメージを解凍して **sdcard.img** ファイルを取得してください。

## reTerminal にイメージを書き込む

次に、reTerminal の CM4 の eMMC にイメージを書き込む手順に進みます。

[この Wiki](https://wiki.seeedstudio.com/ja/reTerminal/#getting-started-with-reterminal-extended) の手順に従い、以下のステップに注意してください：

**注意:** **Raspberry Pi Imager** を開いたら、**CHOOSE OS** をクリックし、**Use custom** を選択して、ダウンロードした **sdcard.img** ファイルを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## reTerminal の初回起動

システムイメージを reTerminal に書き込んだ後、reTerminal の電源を入れます。ここで、reTerminal の LCD にカーネルログが表示され、最後に Qt を使用して作成されたデモアプリケーションが開きます。

デフォルトのシステムイメージの起動時間は約 30 秒です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Buildroot イメージの分析

前述のように、Buildroot は非常に強力なツールであり、サードパーティのライブラリやツールに依存して、必要なものを迅速に構築できます。Buildroot のコンパイル時間、依存関係、コンパイルによって消費されるリソースのサイズなどを理解したい場合、コードを通じて確認するのは非常に不便です。しかし、Buildroot はこれらを分析するための視覚的なツールを提供しており、いくつかの簡単なコマンドを使用するだけで利用できます。

以下のパッケージをインストールすることから始めます。

```sh
sudo apt install python3-matplotlib python3-numpy
```

### 依存関係図の生成

Buildroot の役割の 1 つは、パッケージ間の依存関係を理解し、それらが正しい順序でビルドされるようにすることです。これらの依存関係は時に複雑であり、特定のシステムにおいて、なぜあるパッケージが Buildroot によって導入され、正常にビルドされたのかを理解するのは容易ではありません。依存関係を理解し、組み込み Linux システムにおけるさまざまなコンポーネントの役割をよりよく理解するために、Buildroot は依存関係図（PDF 形式）を生成することができます。

- **ステップ 1.** 以下のパッケージをインストールします。

```sh
sudo apt install graphviz
```

- **ステップ 2.** 依存関係図を生成します。

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

上記のコマンドを実行すると、依存関係図が `seeed-linux-buildroot > output > graphs` に以下の形式で生成されます：

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**注意:** 上記の画像をクリックすると拡大版を表示できます。

### コンパイルによって消費されるリソースのサイズ分析の生成

Buildroot は、コンパイルによって消費されるリソースのサイズ分析を生成することができます。

以下のコマンドを入力します。

```sh
make graph-size
```

上記のコマンドを実行すると、視覚的な分析ファイルが `seeed-linux-buildroot > output > graphs` に以下の形式で生成されます：

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**注意:** 上記の画像をクリックすると拡大版を表示できます。

## Buildroot イメージのテスト

上記の Buildroot イメージを reTerminal でテストするには、[reTerminal ハードウェアとインターフェース使用法 wiki](https://wiki.seeedstudio.com/ja/reTerminal-hardware-interfaces-usage) を訪問し、記載されている手順を参照してください。

## リソース

- **[Webページ]** [Buildroot ドキュメント](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>