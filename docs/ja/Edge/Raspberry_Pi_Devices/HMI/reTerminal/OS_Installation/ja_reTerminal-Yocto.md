---
description: reTerminal 用 Yocto
title: reTerminal 用 Yocto
keywords:
  - Edge
  - reTerminal OS_インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-Yocto
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal 用 Yocto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"/></p>

## 概要

### Yocto Project® とは？

[Yocto Project](https://www.yoctoproject.org) は、ハードウェアアーキテクチャに関係なく、組み込み製品向けのカスタム Linux ベースのシステムを開発者が作成できるよう支援するオープンソースのコラボレーションプロジェクトです。

このプロジェクトは、柔軟なツールセットと、世界中の組み込み開発者が技術、ソフトウェアスタック、設定、およびベストプラクティスを共有できるスペースを提供します。これにより、組み込みデバイス向けのカスタマイズされた Linux イメージを作成できます。

また、このプロジェクトは、ハードウェアサポートとソフトウェアスタックを提供する標準を提供し、ソフトウェア設定やビルドの交換を可能にします。これらのツールを使用すると、複数のハードウェアプラットフォームやソフトウェアスタックに対するカスタマイズを、保守可能かつスケーラブルな方法で構築およびサポートできます。

### なぜ Yocto を使用するのか？

Yocto Project は、組み込み Linux を作成するための開発モデルを持っており、他の単純なビルドシステムとは異なります。それは **レイヤーモデル** と呼ばれます。

レイヤーモデルは、コラボレーションとカスタマイズの両方を同時にサポートするように設計されています。レイヤーは、ビルドシステムに何をすべきかを指示する関連する一連の指示を含むリポジトリです。ユーザーはレイヤーを共有し、再利用し、コラボレーションすることができます。レイヤーは、以前の指示や設定をいつでも変更することができます。

この強力なオーバーライド機能により、以前のコラボレーションやコミュニティ提供のレイヤーを製品要件に合わせてカスタマイズすることが可能です。

異なるレイヤーを使用して、ビルド内の情報を論理的に分離することができます。例えば、BSP レイヤー、GUI レイヤー、ディストリビューション設定、ミドルウェア、またはアプリケーションを持つことができます。ビルド全体を 1 つのレイヤーにまとめると、将来のカスタマイズや再利用が制限され、複雑になります。一方で、情報をレイヤーに分離することで、将来のカスタマイズや再利用が簡素化されます。

### Yocto の特徴

Yocto には以下の特徴があります：

- **CII ベストプラクティス:** Linux Foundation (LF) Core Infrastructure Initiative (CII) ベストプラクティスバッジは、フリー/オープンソースソフトウェア (FLOSS) プロジェクトがベストプラクティスに従っていることを示す方法です。Yocto Project は登録されており、以下のバッジレベルを持っています。

- **バイナリ再現性:** ディストリビューションが依存関係をサポートするためにどのパッケージを引き込むか、またはその順序を特定しない場合、ビルドシステムは依存関係が満たされるタイミングに基づいてパッケージを任意に含めることがあります。Yocto Project は依存関係を制御し、汚染を回避し、「core-image minimal」で 99.8% の再現性を達成し、拡張テストではやや低い再現性を達成しています。

- **クロスプラットフォーム開発フレームワーク (CROPS):** CROPS はオープンソースのクロスプラットフォーム開発フレームワークで、Docker コンテナを活用して、Windows、Linux、Mac OS X ホストのさまざまなアーキテクチャ向けにバイナリをビルドできる、管理が容易で拡張可能な環境を提供します。

- **拡張可能な SDK:** Yocto Project Extensible SDK (eSDK) には、新しいアプリケーションやライブラリをイメージに簡単に追加したり、既存のコンポーネントのソースを変更したり、ターゲットハードウェア上で変更をテストしたりするためのツールが含まれています。

- **Toaster:** Toaster は、Yocto Project で使用されるビルドシステムである OpenEmbedded と BitBake の Web インターフェースです。Toaster を使用すると、ビルドを構成して実行し、ビルドプロセスに関する情報や統計を提供します。

- **マルチコンフィグ:** ビルドシステムは、1 つのコマンドで複数の指定されたアーキテクチャを自動的かつ効率的にビルドできます。

- **バイナリビルド:** Yocto Project は、対応するソースコードファイルを含めることなく、バイナリファイルをビルドに含めることができます。

- **オープンソースライセンスマニフェスト生成:** Yocto Project は、ビルドで使用されるすべてのオープンソースライセンスを追跡し、それらのライセンスとソース参照のマニフェストを提供することができます。

以下のガイドに従うことで、Yocto を使用して独自の [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) システムイメージを構築できるようになります。それでは始めましょう！

## Yocto ソースコードのコンパイル

### ローカルマシンでの手動コンパイル - Bitbake（コマンドライン）を使用

ここでは、コマンドラインを使用して Yocto を介して reTerminal のシステムイメージを手動でコンパイルする方法を説明します。

**注意:** このガイドは、Ubuntu 20.04 をインストールしたホスト PC でテストした後に作成されました。ただし、他の Linux システムでも動作します。

#### reTerminal のデフォルト設定でコンパイルする

以下の手順に従って、reTerminal のデフォルト設定でコンパイルを開始してください。

- **ステップ 1.** ホスト PC に以下のパッケージをインストールして開発環境を準備します。

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**注意:** ホスト PC が異なる Linux ディストリビューションを実行している場合は、[こちら](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)を確認してください。

- **ステップ 2.** 新しい作業ディレクトリを作成して移動します。

```sh
mkdir reterminal-yocto
cd reterminal-yocto
```

- **ステップ 3.** レイヤーを追加するための新しいディレクトリを作成して移動します。

```sh
mkdir layers 
cd layers
```

- **ステップ 4.** 以下の GitHub リポジトリをクローンします。

```sh
git clone -b dunfell git://git.yoctoproject.org/poky
```

- **ステップ 5.** 以下のリポジトリをクローンします。

```sh
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git
git clone -b master git://git.yoctoproject.org/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git
```

- **ステップ 6.** meta-raspberrypi レイヤーでカーネルバージョンを 5.4 から 5.10 に変更します。

```sh
cd meta-raspberrypi/
cp -r recipes-kernel/linux/ ../
git checkout dunfell
rm -r recipes-kernel/linux/
mv -f ../linux/ recipes-kernel/
cd ../../
```

- **ステップ 7.** ビルド環境を初期化します。

```sh
source layers/poky/oe-init-build-env
```

- **ステップ 8.** レイヤーをビルド環境に追加します。

```sh
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
```

- **ステップ 9.** **build** ディレクトリに戻り、以下を実行してコンパイルを開始します。

```sh
MACHINE="seeed-reterminal" bitbake rpi-test-image
```

#### コンパイルされたイメージを見つける

コンパイルが完了したら、**build** ディレクトリに移動し、以下のコマンドを実行して **システムイメージ** が正常に生成されたか確認します。

```sh
cd tmp/deploy/images/seeed-reterminal/;ls -lh rpi-test-image*.wic.bz2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/Yocto-bitbake-image-location.png" alt="pir" width="1000" height="auto"/></p>

上記の画像に示されているように、**rpi-test-image-seeed-reterminal.rootfs.wic.bz2** が生成されたシステムイメージです。

#### 便利な Bitbake コマンド

以下を参照して、便利な Bitbake コマンドに慣れてください。

##### イメージのコンパイルを開始する

- bitbake < image >

このコマンドはイメージのコンパイルを開始します。エラーが見つかってもコンパイルを続行するには、-k を追加できます。失敗したターゲットやそれに依存するものはビルドできませんが、可能な限り多くの部分が停止する前にビルドされます。

例 1:

```sh
bitbake rpi-test-image
```

例 2:

```sh
bitbake rpi-test-image -k
```

##### イメージ内のパッケージを表示する

```sh
bitbake -g <image> && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

このコマンドは、イメージ内のパッケージを **pn-buildlist** という名前のファイルに保存し、コンソールにリスト表示します。

例:

```sh
bitbake -g rpi-test-image && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/image-packages.png" alt="pir" width="800" height="auto"/></p>

##### パッケージの依存関係を表示する

```sh
bitbake -g <package> && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

このコマンドは、パッケージの依存関係を **pn-buildlist** という名前のファイルに保存し、コンソールにリスト表示します。

例:

```sh
bitbake -g i2c-tools && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '{print $1}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/package-depends.png" alt="pir" width="800" height="auto"/></p>

##### タスク依存関係エクスプローラー UI

```sh
bitbake <image> -g -u taskexp
```

これはタスク依存関係エクスプローラー UI を表示するのに役立ちます。タスク間の依存関係を表示します。

例:

```sh
bitbake rpi-test-image -g -u taskexp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/task-explorer-ui.png" alt="pir" width="800" height="auto"/></p>

##### パッケージの devshell を起動する

```sh
bitbake <package> -c devshell
```

このコマンドは、新しいシェルを開き、パッケージに必要なシステム値がすでに定義されています。

例:

```sh
bitbake evtest -c devshell
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/devshell.png" alt="pir" width="800" height="auto"/></p>

##### パッケージタスクをリストする

- bitbake -c listtasks

このコマンドは、パッケージのすべてのタスクをリストします。

例:

```sh
bitbake evtest -c listtasks
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/tasks.png" alt="pir" width="800" height="auto"/></p>

##### インタラクティブなカーネル設定

- bitbake virtual/kernel -c menuconfig

このコマンドは、インタラクティブなカーネル設定ウィンドウを開き、必要に応じて設定を変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/kernel-config.png" alt="pir" width="800" height="auto"/></p>

##### レイヤーを表示する

- bitbake-layers show-layers

これにより、現在使用中のレイヤーとその優先順位のリストが表示されます。パッケージが2つ以上のレイヤーに存在する場合、優先順位が高いレイヤーからビルドされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/layers.png" alt="pir" width="800" height="auto"/></p>

##### レシピの表示

- bitbake-layers show-recipes

これにより、利用可能なすべてのレシピが表示されます。

以下のコマンドを入力すると、以前使用したレシピ（**rpi-test-image**）を確認できます。

```sh
bitbake-layers show-recipes | grep rpi
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/rpi-test.png" alt="pir" width="800" height="auto"/></p>

##### パッケージの確認

- bitbake -s | grep

これにより、現在のYoctoセットアップに特定のパッケージが存在するかどうかを確認できます。

```sh
bitbake -s | grep openssl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/check-package.png" alt="pir" width="800" height="auto"/></p>

##### 詳細なビルドログを保存

```sh
bitbake -v <image> 2>&1 | tee image_build.log
```

これにより、イメージのビルドが開始されると同時にコンソールに出力が表示され、詳細モードで**image_build.log**に出力が保存されます。

例:

```sh
bitbake -v rpi-test-image 2>&1 | tee image_build.log 
```

##### ビルド環境のクリーンアップ

- bitbake -c cleanall [package]

これにより、作業ディレクトリ、状態キャッシュ、およびパッケージに関連するすべての以前にダウンロードされたソースファイルが削除されます。特定のパッケージでビルドの問題が発生している場合に役立ちます。

例:

```
bitbake -c cleanall i2c-tools
```

### ローカルマシンでの手動コンパイル - Toaster（GUI）を使用

次に、Toasterを使用してreTerminal用のシステムイメージを手動でコンパイルします。

Toasterは、Yocto Project®で使用されるビルドシステムであるOpenEmbeddedとBitBakeのWebインターフェースです。Toasterを使用すると、ビルドを構成および実行し、ビルドプロセスに関する情報や統計を提供します。

**注意:** このガイドは、Ubuntu 20.04をインストールしたホストPCでテストした後に作成されました。

- **ステップ 1.** パッケージリストを更新します。

```sh
sudo apt update
```

- **ステップ 2.** ホストPCに以下のパッケージをインストールして開発環境を準備します。

```sh
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat cpio python3 python3-pip python3-pexpect \
     xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev \
     pylint3 xterm
```

**注意:** ホストPCが異なるLinuxディストリビューションを実行している場合は、[こちらをクリック](https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#required-packages-for-the-build-host)して、OSに応じてインストールする必要があるパッケージを確認してください。

- **ステップ 3.** 以下のGitHubリポジトリをクローンします。

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **ステップ 4.** **poky**ディレクトリに移動します。

```sh
cd poky
```

- **ステップ 5.** 以下のToasterパッケージをインストールします。

```sh
pip3 install --user -r bitbake/toaster-requirements.txt
```

- **ステップ 6.** pokyディレクトリを以下のコミットにリセットします。

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **ステップ 7.** ビルド環境スクリプトをソースします。

```sh
source oe-init-build-env
```

- **ステップ 8.** **build**ディレクトリからToasterを起動します。

```sh
source toaster start
```

- **ステップ 9.** ToasterのWebインターフェースにアクセスするには、お気に入りのブラウザを開き、以下を入力します。

```sh
http://127.0.0.1:8000
```

**注意:** デフォルトでは、Toasterはポート8000で起動します。**WEBPORT**パラメータを使用して別のポートを設定できます。たとえば、以下のコマンドはポートを「9000」に設定します。

```sh
source toaster start webport=9000
```

- **ステップ 10.** ToasterのWebインターフェースに入ったら、**New project**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 11.** **Project name**を入力し、**project type**を**New project**に設定し、**Release**で**Local Yocto Project**を選択して、最後に**Create project**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"/></p>

- **ステップ 12.** **Configuration**タブ内で、**Machine**の名前を**raspberrypi4-64**に変更し、**Save**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"/></p>

- **ステップ 13.** **Import layer**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 14.** 以下の情報を入力します。

  - Layer name: meta-raspberrypi
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/agherzan/meta-raspberrypi.git](https://github.com/agherzan/meta-raspberrypi.git)
  - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **ステップ 15.** **Import and add to project**をクリックします。

- **ステップ 16.** 上記の手順を繰り返して、以下のレイヤーをインポートします。

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

- **ステップ 17.** すべてのレイヤーをインポートしたら、**Layers** タブをクリックして追加したレイヤーを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 18.** **BitBake variables** に移動し、以下の内容で新しい変数を追加します。

```sh
- Variable:RPI_KERNEL_DEVICETREE_OVERLAYS_append
- Value: overlays/reTerminal.dtbo overlays/i2c3.dtbo
```

**注意:** **overlays/xxxx** の前にスペースを追加することを忘れないでください。

- **ステップ 19.** 同じ手順を繰り返して以下を追加します。

```sh
- Variable:PACKAGECONFIG_append_pn-qtbase
- Value: eglfs 
```

**注意:** **eglfs** の前にスペースを追加することを忘れないでください。

```sh
- Variable:DISTRO_FEATURES_remove
- Value: x11 wayland vulkan 
```

**注意:** **x11 xxx** の前にスペースを追加することを忘れないでください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 20.** 最後に **rpi-test-image** と入力し、**Build** をクリックしてプロジェクトのビルドを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"/></p>

次に、以下のようにビルドプロセスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"/></p>

ビルドが完了すると、以下の画面が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 21.** **rpi-test-image** をクリックして、イメージビルドの詳細を確認します。

- **ステップ 22.** **Image files** の下で **tar.bz2** をクリックして、コンパイルされたイメージをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 23.** このページをさらに下にスクロールして、**Build Summary** の詳細を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"/></p>

### 既にコンパイル済みのイメージをダウンロードする

Yocto を使用して既にコンパイルされた reTerminal システムイメージをダウンロードしたい場合は、以下の手順に進んでください。

- **ステップ 1.** [このリンク](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions) を開き、**meta-seeed-reterminal** GitHub リポジトリの **Actions** ページにアクセスします。

- **ステップ 2.** 最新の **Seeed reTerminal Yocto embedded linux** ワークフローをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** **Artifacts** の下で **yocto deploy** をクリックしてイメージのダウンロードを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** イメージをダウンロードすると、イメージは **yocto deploy.zip** という名前になります。この **.zip** ファイルを解凍すると、**yocto-image.tar.xz** という名前のファイルが見つかります。

- **ステップ 5.** この **yocto-image.tar.xz** ファイルを解凍すると、**yocto-image.tar** という名前のファイルが見つかります。

- **ステップ 6.** この **yocto-image.tar** ファイルを解凍し、`deploy > images > raspberrypi4-64` に移動します。拡張子が **.rootfs.wic.bz2** のファイルを探します。それがシステムイメージファイルです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"/></p>

## reTerminal にイメージを書き込む

次に、reTerminal の CM4 の eMMC にイメージを書き込む手順に進みます。

[このウィキ](https://wiki.seeedstudio.com/ja/reTerminal/#getting-started-with-reterminal-extended)の手順に従い、以下のステップに注意してください：

**注意:** **Raspberry Pi Imager** を開いたら、**CHOOSE OS** をクリックし、**Use custom** を選択して、ダウンロードした **.rootfs.wic.bz2** ファイルを選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## reTerminal の初回起動

システムイメージを reTerminal に書き込んだ後、reTerminal の電源を入れます。ここで、reTerminal の LCD にカーネルログが表示され、最後に Qt を使用して作成されたデモアプリケーションが開きます。

デフォルトのシステムイメージの起動時間は約17秒です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## PC からシリアルコンソール経由で reTerminal にログイン

シリアルコンソール接続を使用して、reTerminal 内の OS にログインすることをお勧めします。[このウィキ](https://wiki.seeedstudio.com/ja/reTerminal-FAQ/#q5-how-can-i-log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-a-usb-to-serial-converter)を参照してハードウェア接続を行い、**root** としてログインしてください。

## Yocto イメージのテスト

上記の Yocto イメージを reTerminal でテストするには、[reTerminal ハードウェアおよびインターフェース使用ウィキ](https://wiki.seeedstudio.com/ja/reTerminal-hardware-interfaces-usage)を訪問し、記載されている手順を参照してください。

## Yocto Project Summit 2021 での講演

この講演では、Yocto プロジェクトを使用して CM4 キャリアボード、X86、および STM32 ボード向けにカスタム Linux イメージを簡単に作成する方法を主に説明しています。また、講演の最後には、Qt、LVGL を使用した 2 つの HMI デモと、Mender を使用してこれらの SBC に安全で堅牢な OTA アップデートを実現するデモが紹介されています。

<p style={{textAlign: 'center'}}><iframe width="720" height="480" src="https://www.youtube.com/embed/OHT9f_NOEpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## リソース

- **[Webページ]** [Yocto ドキュメント](https://docs.yoctoproject.org/)
- **[Webページ]** [Toaster マニュアル](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>