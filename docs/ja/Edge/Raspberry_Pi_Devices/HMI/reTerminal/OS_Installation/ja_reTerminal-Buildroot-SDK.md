---
description:  reTerminal用Buildroot
title:  reTerminal用Buildroot
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-Buildroot-SDK
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# reTerminal用Buildroot

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## はじめに

[Buildroot](https://buildroot.org)は、クロスコンパイルを使用して組み込みシステム用の完全なLinuxシステムを構築するプロセスを簡素化し、自動化する使いやすいツールです。

これを実現するために、Buildrootはクロスコンパイルツールチェーン、ルートファイルシステム、Linuxカーネルイメージ、およびターゲット用のブートローダーを生成することができます。Buildrootは、これらのオプションの任意の組み合わせで独立して使用できます（例えば、既存のクロスコンパイルツールチェーンを使用し、Buildrootでルートファイルシステムのみを構築することができます）。

理解と拡張が容易なシンプルな構造を持っています。よく知られたMakefile言語のみに依存しています。Buildrootはオープンソースプロジェクトであり、多くの開発者が日々貢献しています。

以下のガイドに従うことで、Buildrootを使用して独自の[reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)システムイメージを構築することができます。それでは始めましょう！

## Buildrootソースコードのコンパイル

### ローカルマシンでの手動コンパイル

次に、Buildrootを使用してreTerminal用のシステムイメージを手動でコンパイルする方法に進みます。

**注意:** このガイドは、Ubuntu 20.04がインストールされたホストPCでテストした後に作成されました。ただし、他のLinuxシステムでも動作します。

- **ステップ1.** 以下のパッケージ（git、gcc、make）をインストールして、ホストPCで開発環境を準備します

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**注意:** 上記のパッケージが既にインストールされている場合は、この手順をスキップできます。

- **ステップ 2.** 以下のGitHubリポジトリをクローンします

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **ステップ 3.** **seeed-linux-buildroot** ディレクトリに移動します

```sh
cd seeed-linux-buildroot
```

#### デフォルト設定でreTerminal用にコンパイルする

以下を入力してデフォルトのreTerminal設定でコンパイルを開始します

```sh
make reTerminal_64_defconfig
make
```

#### 独自の設定でreTerminalをコンパイルする

独自の設定でコンパイルするために必要なパッケージをインストールするには、以下を入力してください

```sh
sudo apt install libncurses-dev
```

- **ステップ 5.** 以下を入力してbuildrootの設定ウィンドウを開きます

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

この設定ウィンドウを使用して、利用可能なオプションをナビゲートし、ニーズに応じて**イメージをカスタマイズ**できます。また、このウィンドウで変更を加えずに**保存**して**終了**をクリックすると、デフォルトのreTerminal設定が読み込まれます。

#### コンパイル済みイメージを見つける

コンパイルが成功したら、`seeed-linux-buildroot/output/images`に移動すると、コンパイル済みイメージが**sdcard.img**として見つかります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### 既にコンパイル済みのイメージをダウンロード

Buildrootを使用して既にコンパイル済みのreTerminalシステムイメージをダウンロードしたい場合は、以下の手順に進んでください。

- **ステップ1.** [このリンク](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions)を開いて、**seeed-linux-buildroot** GitHubリポジトリの**Actions**ページに入ります

- **ステップ2.** 最新の**Seeed reTerminal buildroot**ワークフローをクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** **Artifacts**の下で、**buildroot deploy**をクリックしてイメージのダウンロードを開始します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**注意:** イメージをダウンロードした後、イメージを展開して**sdcard.img**ファイルを取得してください

## reTerminalにイメージをフラッシュ

次に、reTerminal上のCM4のeMMCにイメージをフラッシュする作業に移ります。

[このwiki](https://wiki.seeedstudio.com/ja/reTerminal/#getting-started-with-reterminal-extended)の手順に従い、以下のステップに注意してください：

**注意:** **Raspberry Pi Imager**を開いたら、**CHOOSE OS**をクリックし、**Use custom**を選択して、ダウンロードした**sdcard.img**ファイルを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## reTerminalでの初回起動

システムイメージをreTerminalにフラッシュした後、reTerminalの電源を入れます。ここで、reTerminal LCDにカーネルログがポップアップし、最後にQtを使用して作成されたデモアプリケーションが開きます。

デフォルトシステムイメージの起動時間は約30秒です

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Buildrootイメージの分析

前述のように、Buildrootは非常に強力なツールで、サードパーティのライブラリやツールに依存し、必要なものを迅速に構築できます。Buildrootのコンパイル時間、依存関係、コンパイルで消費されるリソースのサイズなどを理解したい場合、コードを通じて確認するのは非常に不便です。しかし、Buildrootは上記を分析するための視覚的分析ツールを提供しており、いくつかの簡単なコマンドでそれらを使用できます。

まず、以下のパッケージをインストールしてください

```sh
sudo apt install python3-matplotlib python3-numpy
```

### 依存関係図の生成

Buildrootの役割の一つは、パッケージ間の依存関係を理解し、正しい順序でビルドされることを確認することです。これらの依存関係は時として複雑になることがあり、特定のシステムにおいて、なぜ特定のパッケージがBuildrootによって導入され、正常にビルドされたのかを理解するのは容易ではありません。依存関係を理解し、組み込みLinuxシステムにおける異なるコンポーネントの役割をより良く理解するために、Buildrootは依存関係図（PDF形式）を生成することができます。

- **ステップ 1.** 以下のパッケージをインストールしてください

```sh
sudo apt install graphviz
```

- **ステップ 2.** 依存関係図を生成します

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

上記のコマンドの後、依存関係図が `seeed-linux-buildroot > output > graphs` に以下のように生成されます：

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**注意：** 上記の画像をクリックすると拡大版を表示できます

### コンパイルで消費されるリソースのサイズ分析を生成する

Buildrootはコンパイルで消費されるリソースのサイズ分析を生成できます。

以下のコマンドを入力してください

```sh
make graph-size
```

上記のコマンドの後、視覚的解析ファイルが `seeed-linux-buildroot > output > graphs` に以下として生成されます：

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**注意：** 上記の画像をクリックすると拡大版を表示できます

## Buildroot イメージのテスト

上記の Buildroot イメージを reTerminal でテストするには、[reTerminal ハードウェアとインターフェース使用方法 wiki](https://wiki.seeedstudio.com/ja/reTerminal-hardware-interfaces-usage) にアクセスして、記載されている手順を参照してください。

## リソース

- **[Webpage]** [Buildroot Documentation](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
