---
description: reTerminal用Yocto
title: reTerminal用Yocto
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-Yocto
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# reTerminal用Yocto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"/></p>

## 概要

### Yocto Project®とは？

[Yocto Project](https://www.yoctoproject.org)は、ハードウェアアーキテクチャに関係なく、開発者が組み込み製品向けのカスタムLinuxベースシステムを作成するのを支援するオープンソースコラボレーションプロジェクトです。

このプロジェクトは、柔軟なツールセットと、世界中の組み込み開発者が技術、ソフトウェアスタック、設定、ベストプラクティスを共有できるスペースを提供し、組み込みデバイス向けのカスタマイズされたLinuxイメージの作成に使用できます。

このプロジェクトは、ハードウェアサポートとソフトウェアスタックの提供における標準を提供し、ソフトウェア設定とビルドの交換を可能にします。これらのツールにより、ユーザーは保守可能でスケーラブルな方法で、複数のハードウェアプラットフォームとソフトウェアスタック向けのカスタマイゼーションを構築およびサポートできます。

### なぜYoctoを使用するのか？

Yocto Projectには、他の単純なビルドシステムとは異なる組み込みLinux作成のための開発モデルがあります。これは**レイヤーモデル**と呼ばれています。

レイヤーモデルは、コラボレーションとカスタマイゼーションの両方を同時にサポートするように設計されています。レイヤーは、ビルドシステムに何をすべきかを指示する関連する命令セットを含むリポジトリです。ユーザーはレイヤーをコラボレーション、共有、再利用できます。レイヤーには、いつでも以前の命令や設定への変更を含めることができます。

この強力なオーバーライド機能により、以前のコラボレーティブまたはコミュニティ提供のレイヤーを製品要件に合わせてカスタマイズできます。

ビルド内の情報を論理的に分離するために、異なるレイヤーを使用します。例として、BSPレイヤー、GUIレイヤー、ディストリビューション設定、ミドルウェア、またはアプリケーションを持つことができます。ビルド全体を1つのレイヤーに入れることは、将来のカスタマイゼーションと再利用を制限し、複雑にします。一方、情報をレイヤーに分離することは、将来のカスタマイゼーションと再利用を簡素化するのに役立ちます。

### Yoctoの機能

Yoctoには以下の機能があります：

- **CIIベストプラクティス：** Linux Foundation（LF）Core Infrastructure Initiative（CII）ベストプラクティスバッジは、Free/Libre and Open Source Software（FLOSS）プロジェクトがベストプラクティスに従っていることを示す方法です。Yocto Projectは登録されており、以下のバッジレベルを持っています。

- **バイナリ再現性：** ディストリビューションが依存関係をサポートするためにどのパッケージを取り込むか、またはその順序について具体的でない場合、ビルドシステムは依存関係が満たされるタイミングに基づいて任意にパッケージを含めることができます。Yocto Projectは汚染を避けるために依存関係を制御し、「core-image minimal」で99.8%の再現性を達成し、拡張テストではわずかに低い再現性を実現しています。

- **クロスプラットフォーム開発フレームワーク（CROPS）：** CROPSは、Dockerコンテナを活用して、開発者がWindows、Linux、Mac OS Xホスト上で様々なアーキテクチャ向けのバイナリを構築できる、簡単に管理可能で拡張可能な環境を提供するオープンソースのクロスプラットフォーム開発フレームワークです。

- **拡張可能SDK：** Yocto Project拡張可能SDK（eSDK）には、イメージに新しいアプリケーションやライブラリを簡単に追加し、既存のコンポーネントのソースを変更し、ターゲットハードウェア上で変更をテストできるツールがあります。

- **Toaster：** ToasterはYocto Projectで使用されるビルドシステムであるOpenEmbeddedとBitBakeのWebインターフェースです。Toasterを使用すると、ビルドを設定および実行でき、ビルドプロセスに関する情報と統計を提供します。

- **マルチ設定：** ビルドシステムは、1つのコマンドで指定された複数のアーキテクチャを自動的かつ効率的にビルドできます。

- **バイナリビルド：** Yocto Projectでは、対応するソースコードファイルを含めることなく、バイナリファイルをビルドに含めることができます。

- **オープンソースライセンスマニフェスト生成：** Yocto Projectは、ビルドで使用されるすべてのオープンソースライセンスを追跡し、それらのライセンスとソース参照のマニフェストを提供できます。

以下のガイドに従うことで、Yoctoを使用して独自の[reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)システムイメージを構築できるようになります。それでは始めましょう！

## Yoctoソースコードのコンパイル

### ローカルマシンでの手動コンパイル - Bitbakeの使用（コマンドライン）

ここでは、コマンドラインを通じてYoctoを使用してreTerminal用のシステムイメージを手動でコンパイルする方法に進みます。

**注意:** このガイドは、Ubuntu 20.04がインストールされたホストPCでテストした後に作成されました。ただし、他のLinuxシステムでも動作します。

#### reTerminalのデフォルト設定でコンパイル

以下の手順に従って、reTerminalのデフォルト設定でコンパイルを開始してください

- **ステップ 1.** 以下のパッケージをインストールして、ホストPC上で開発環境を準備します

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**注意:** ホストPCが異なるLinuxディストリビューションを実行している場合は、[こちら](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)を確認してください

- **ステップ 2.** 新しい作業ディレクトリを作成して入る

```sh
mkdir reterminal-yocto
cd reterminal-yocto
```

- **ステップ 3.** レイヤーを追加するための新しいディレクトリを作成し、そこに移動します

```sh
mkdir layers 
cd layers
```

- **ステップ 4.** 以下のGitHubリポジトリをクローンする

```sh
git clone -b dunfell git://git.yoctoproject.org/poky
```

- **ステップ 5.** 以下のリポジトリをクローンします

```sh
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git
git clone -b master git://git.yoctoproject.org/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git
```

- **ステップ 6.** meta-raspberrypi レイヤーでカーネルバージョンを 5.4 から 5.10 に変更する

```sh
cd meta-raspberrypi/
cp -r recipes-kernel/linux/ ../
git checkout dunfell
rm -r recipes-kernel/linux/
mv -f ../linux/ recipes-kernel/
cd ../../
```

- **ステップ 7.** ビルド環境を初期化する

```sh
source layers/poky/oe-init-build-env
```

- **ステップ 8.** ビルド環境にレイヤーを追加する

```sh
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
```

- **ステップ 9.** **build**ディレクトリに戻り、以下を実行してコンパイルを開始する

```sh
MACHINE="seeed-reterminal" bitbake rpi-test-image
```

#### コンパイル済みイメージの検索

コンパイルが完了したら、**build** ディレクトリに移動し、以下のコマンドを実行して **システムイメージ** が正常に生成されているかを確認してください

```sh
cd tmp/deploy/images/seeed-reterminal/;ls -lh rpi-test-image*.wic.bz2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/Yocto-bitbake-image-location.png" alt="pir" width="1000" height="auto"/></p>

上記の画像に示すように、**rpi-test-image-seeed-reterminal.rootfs.wic.bz2** が生成されたシステムイメージです

#### 便利なBitbakeコマンド

以下を参照して、便利なBitbakeコマンドに慣れ親しんでください

##### イメージのコンパイルを開始する

- bitbake `<image>`

このコマンドはイメージのコンパイルを開始します。エラーが見つかっても継続してコンパイルするために -k を追加できます。失敗したターゲットとそれに依存するものはビルドできませんが、停止する前に可能な限り多くのものがビルドされます。

例 1:

```sh
bitbake rpi-test-image
```

例 2:

```sh
bitbake rpi-test-image -k
```

##### イメージ内のパッケージを表示する

- bitbake -g `<image>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

これにより、イメージ内のパッケージが **pn-buildlist** という名前のファイルに保存され、コンソールに一覧表示されます

例：

```sh
bitbake -g rpi-test-image && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/image-packages.png" alt="pir" width="800" height="auto"/></p>

##### パッケージの依存関係を表示

- bitbake -g `<package>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

これにより、パッケージの依存関係が **pn-buildlist** という名前のファイルに保存され、コンソールに一覧表示されます

例：

```sh
bitbake -g i2c-tools && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/package-depends.png" alt="pir" width="800" height="auto"/></p>

##### タスク依存関係エクスプローラー UI

- bitbake `<image>` -g -u taskexp

これはタスク依存関係エクスプローラー UI を表示するのに役立ちます。タスク間の依存関係を表示します

例：

```sh
bitbake rpi-test-image -g -u taskexp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/task-explorer-ui.png" alt="pir" width="800" height="auto"/></p>

##### パッケージのdevshellを起動する

- bitbake `<package>` -c devshell

これにより、パッケージに必要なシステム値がすでに定義された新しいシェルが開きます

例：

```sh
bitbake evtest -c devshell
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/devshell.png" alt="pir" width="800" height="auto"/></p>

##### パッケージタスクの一覧表示

- bitbake -c listtasks

これはパッケージのすべてのタスクを一覧表示します

例：

```sh
bitbake evtest -c listtasks
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/tasks.png" alt="pir" width="800" height="auto"/></p>

##### インタラクティブカーネル設定

- bitbake virtual/kernel -c menuconfig

これにより、インタラクティブなカーネル設定ウィンドウが開き、必要に応じて設定を変更できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/kernel-config.png" alt="pir" width="800" height="auto"/></p>

##### レイヤーの表示

- bitbake-layers show-layers

これにより、現在使用中のレイヤーのリストとその優先度が表示されます。パッケージが2つ以上のレイヤーに存在する場合、より高い優先度を持つレイヤーからビルドされます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/layers.png" alt="pir" width="800" height="auto"/></p>

##### レシピの表示

- bitbake-layers show-recipes

これにより、利用可能なすべてのレシピが表示されます

以下のように入力すると、以前に使用したレシピである **rpi-test-image** を確認できます

```sh
bitbake-layers show-recipes | grep rpi
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/rpi-test.png" alt="pir" width="800" height="auto"/></p>

##### パッケージの確認

- bitbake -s | grep

これは現在のYoctoセットアップに特定のパッケージが存在するかどうかを確認します

```sh
bitbake -s | grep openssl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/check-package.png" alt="pir" width="800" height="auto"/></p>

##### 詳細なビルドログを保存する

- bitbake -v `<image>` 2>&1 | tee image_build.log

これにより、イメージのビルドが開始されるとコンソールに出力され、詳細モードで **image_build.log** に出力が保存されます

例：

```sh
bitbake -v rpi-test-image 2>&1 | tee image_build.log 
```

##### ビルド環境のクリーンアップ

- bitbake -c cleanall [package]

これにより、作業ディレクトリ、状態キャッシュ、およびパッケージに関連する以前にダウンロードされたすべてのソースファイルが削除されます。特定のパッケージでビルドの問題が発生している場合に役立ちます

例：

```
bitbake -c cleanall i2c-tools
```

### ローカルマシンでの手動コンパイル - Toaster（GUI）の使用

次に、Toasterを使用してreTerminal用のシステムイメージを手動でコンパイルする方法に進みます。

ToasterはYocto Project®で使用されるビルドシステムであるOpenEmbeddedとBitBakeのWebインターフェースです。Toasterを使用すると、ビルドの設定と実行が可能で、ビルドプロセスに関する情報と統計を提供します。

**注意:** このガイドはUbuntu 20.04がインストールされたホストPCでテストした後に作成されました。

- **ステップ 1.** パッケージリストを更新する

```sh
sudo apt update
```

- **ステップ 2.** 以下のパッケージをインストールして、ホストPC上で開発環境を準備します

```sh
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat cpio python3 python3-pip python3-pexpect \
     xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev \
     pylint3 xterm
```

**注意:** ホストPCが異なるLinuxディストリビューションを実行している場合は、[こちらをクリック](https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#required-packages-for-the-build-host)してお使いのOSに応じてインストールが必要なパッケージを確認してください

- **ステップ 3.** 以下のGitHubリポジトリをクローンします

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **ステップ 4.** **poky** ディレクトリに移動する

```sh
cd poky
```

- **ステップ 5.** 以下のtoasterパッケージをインストールします

```sh
pip3 install --user -r bitbake/toaster-requirements.txt
```

- **ステップ 6.** poky ディレクトリを以下のコミットに戻す

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **ステップ 7.** ビルド環境スクリプトを読み込む

```sh
source oe-init-build-env
```

- **ステップ 8.** **build** ディレクトリから、toaster を開始する

```sh
source toaster start
```

- **ステップ 9.** Toaster ウェブインターフェースにアクセスするには、お気に入りのブラウザを開いて以下を入力してください

```sh
http://127.0.0.1:8000
```

**注意:** デフォルトでは、Toasterはポート8000で開始されます。**WEBPORT**パラメータを使用して異なるポートを設定できます。例えば、以下のコマンドはポートを"9000"に設定します

```sh
source toaster start webport=9000
```

- **ステップ 10.** Toaster ウェブインターフェースに入ったら、**New project** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **Project name** を入力し、**project type** を **New project** に設定し、**Release** の下で **Local Yocto Project** を選択し、最後に **Create project** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"/></p>

- **ステップ 12.** **Configuration** タブ内で、**Machine** の下で名前を **raspberrypi4-64** に変更し、**Save** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"/></p>

- **ステップ 13.** **Import layer** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 14.** 以下のように情報を入力します

  - Layer name: meta-raspberrypi
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/agherzan/meta-raspberrypi.git](https://github.com/agherzan/meta-raspberrypi.git)
  - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **ステップ 15.** **Import and add to project** をクリックします

- **ステップ 16.** 上記の手順を繰り返して、以下のようにさらにレイヤーをインポートします

- **meta-qt5**

  - Layer name: meta-qt5
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/meta-qt5/meta-qt5.git](https://github.com/meta-qt5/meta-qt5.git)
  - Git revision: master

- **meta-seeed-reterminal**

  - Layer name: meta-seeed-reterminal
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/Seeed-Studio/meta-seeed-reterminal.git](https://github.com/Seeed-Studio/meta-seeed-reterminal.git)
  - Git revision: main

- **meta-oe**

  - Layer name: meta-oe
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-oe
  - Git revision: master

- **meta-python**

  - Layer name: meta-python
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-python
  - Git revision: master

- **ステップ 17.** すべてのレイヤーがインポートされたら、**Layers** タブをクリックして追加したレイヤーを確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 18.** **BitBake variables** に移動し、以下の新しい変数を追加します

```sh
- Variable:RPI_KERNEL_DEVICETREE_OVERLAYS_append
- Value: overlays/reTerminal.dtbo overlays/i2c3.dtbo
```

**注意:** **overlays/xxxx** の前に必ずスペースを追加してください

- **ステップ 19.** 同じ手順を繰り返して以下を追加してください

```sh
- Variable:PACKAGECONFIG_append_pn-qtbase
- Value: eglfs 
```

**注意:** **eglfs** の前にスペースを追加することを確認してください

```sh
- Variable:DISTRO_FEATURES_remove
- Value: x11 wayland vulkan 
```

**注意:** **x11 xxx** の前にスペースを追加することを確認してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 20.** 最後に **rpi-test-image** と入力し、**Build** をクリックしてプロジェクトのビルドを開始します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"/></p>

以下のようにビルドプロセスが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"/></p>

ビルドが完了すると、以下のように表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 21.** **rpi-test-image** をクリックして、イメージビルドの詳細を確認します

- **ステップ 22.** **Image files** の下で、**tar.bz2** をクリックしてコンパイル済みイメージをダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 23.** このページをさらに下にスクロールして、**Build Summary** について詳しく学習します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"/></p>

### 既にコンパイル済みのイメージをダウンロード

Yoctoを使用して既にコンパイル済みのreTerminalシステムイメージをダウンロードしたい場合は、以下の手順に進んでください。

- **ステップ 1.** [このリンク](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions)を開いて、**meta-seeed-reterminal** GitHub リポジトリの **Actions** ページに入ります

- **ステップ 2.** 最新の **Seeed reTerminal Yocto embedded linux** ワークフローをクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** **Artifacts** の下で、**yocto deploy** をクリックしてイメージのダウンロードを開始します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** イメージをダウンロードした後、イメージは **yocto deploy.zip** という名前になります。この **.zip** ファイルを展開すると、**yocto-image.tar.xz** という名前のファイルが見つかります

- **ステップ 5.** この **yocto-image.tar.xz** ファイルを展開すると、**yocto-image.tar** という名前のファイルが見つかります

- **ステップ 5.** この **yocto-image.tar** ファイルを展開し、`deploy > images > raspberrypi4-64` に移動します。拡張子が **.rootfs.wic.bz2** のファイルを探してください。それがシステムイメージファイルです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"/></p>

## reTerminalにイメージをフラッシュ

次に、reTerminal上のCM4のeMMCにイメージをフラッシュする作業に移ります。

[このwiki](https://wiki.seeedstudio.com/ja/reTerminal/#getting-started-with-reterminal-extended)の手順に従い、以下のステップに注意してください：

**注意:** **Raspberry Pi Imager** を開いたら、**CHOOSE OS** をクリックし、**Use custom** を選択して、ダウンロードした **.rootfs.wic.bz2** ファイルを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## reTerminalでの初回起動

システムイメージをreTerminalにフラッシュした後、reTerminalの電源を入れます。ここでreTerminal LCDにカーネルログがポップアップし、最後にQtを使用して作成されたデモアプリケーションが開きます。

デフォルトシステムイメージの起動時間は約17秒です

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## シリアルコンソール経由でPCからreTerminalにログイン

シリアルコンソール接続を使用してreTerminal内のOSにログインすることをお勧めします。ハードウェア接続を行い、**root**としてログインするには、[このwiki](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q5-how-can-i-log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-a-usb-to-serial-converter)を確認してください

## Yoctoイメージのテスト

上記のYoctoイメージをreTerminalでテストするには、[reTerminal Hardware and Interfaces Usage wiki](https://wiki.seeedstudio.com/ja/reTerminal-hardware-interfaces-usage)にアクセスして、記載されている手順を参照してください。

## Yocto Project Summit 2021での講演

この講演は主に、Yoctoプロジェクトを使用してCM4キャリアボード、X86、STM32ボード用のカスタムLinuxイメージを簡単に作成する方法について説明することに焦点を当てています。また、講演の最後には、Qt、LVGLに基づく2つのHMIデモと、Menderを使用してこれらのSBCに安全で堅牢なOTAアップデートを提供するデモがあります。

<div class="video-container">
<iframe width="720" height="480" src="https://www.youtube.com/embed/OHT9f_NOEpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## リソース

- **[Webpage]** [Yocto Documentation](https://docs.yoctoproject.org/)
- **[Webpage]** [Toaster Manual](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
