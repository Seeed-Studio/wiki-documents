---
description: reComputer for Jetson 初期設定
title: reComputer for Jetson 初期設定
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Initiation
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer for Jetson 初期設定

すべてのreComputer for Jetsonには16 GBのeMMCが搭載されており、`ubuntu 18.04 LTS`と`NVIDIA JetPack 4.6`がすでにインストールされています。指示に従い、周辺機器を接続すれば、数秒で電源を入れて直接使用することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. 周辺機器を接続する

reComputerホストをUSB接続のキーボード、マウスに接続し、HDMIポートまたはDPポート（A206キャリアボードのみ）を介して画面表示に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::note
HDMIまたはDPインターフェースを備えたreComputerホストの場合、2つのディスプレイ出力ポートがありますが、デュアルディスプレイ出力をサポートしていません。つまり、同時に使用できるディスプレイ出力インターフェースは1つだけです。
:::

## 2. 電源を入れる

周辺機器を接続した後、reComputerホストに電源を接続します。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)の電源供給はType-Cインターフェースによって行われ、HDMIインターフェースの近くにある電源供給位置は以下の図に示されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::note
[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)には両側にType-Cポートがありますが、LANポートの近くにある右側のポートはデータ伝送ポートです。右側のデータ伝送ポートにType-C電源を挿入することは厳禁であり、コンポーネントが損傷する可能性があります。
:::

- [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、および[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)は、HDMIインターフェースの近くにあるDCインターフェースによって電源供給されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

電源を接続すると、reComputerホストは自動的に電源が入ります。

## 3. 初期設定

新しいreComputerにはすでにシステムがフラッシュされています。しかし、使用する前にいくつかの必要な初期設定が必要です。

### ステップ 1: 電源が入るのを待つ

電源を入れると、最初に画面中央に大きなNVIDIAアイコンが表示されます。設定ページに入る前に、reComputerが自動的に2回再起動することがあります。このプロセスは約1分かかります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ 2: ライセンスを確認して同意する

設定ページでは、まずライセンスを確認し、「**I accept the terms of these licenses**」を選択して同意し、次のステップに進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ 3: システム言語とキーボードレイアウトを選択する

「Continue」ボタンをクリックすると、次のページでシステム言語とキーボードレイアウトを選択するよう求められます。実際のニーズに応じて選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ 4: ネットワークに接続する

reComputerをインターネットに接続する方法は2つあります。1つはネットワークケーブルを直接接続する方法、もう1つはWi-Fi（ワイヤレスモジュールが必要）を介してインターネットに接続する方法です。ソフトウェアの更新のためにインターネット接続が必要ない場合、このステップではインターネットに接続しないことを選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ 5: ユーザー情報とパスワードを設定する

次のページでは、ユーザー名とパスワードを入力するよう求められます。後でreComputerを起動する際に必要となるため、起動パスワードを覚えておく必要があります。

毎回reComputerを起動するたびにパスワードを入力するのが面倒だと感じる場合、また他の人が使用できないようにするために、「Require my password to log in」オプションを選択することができますが、推奨はしません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ 6: 電源電圧を選択する

最後に選択するのは、reComputerの動作時の電源電圧です。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)および[reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)はどちらもJetson Nanoモジュールを搭載しています。reComputerが正常に動作することを保証するために、**MAXN**モデルを強く推奨します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) と [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) はどちらも Jetson Xavier NX モジュールを搭載しており、さまざまな電源出力オプションを提供します。デフォルトのモデルは `MODE_10W_DESKTOP - (Default)` として 10 W で、以下の画像で確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::note
以下の表は、NVIDIA が事前定義した電力モードと、それに関連するモジュールリソース使用制限を示しています。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

上記の手順を完了した後、reComputer が最終的な構成を行うために 1～2 分待つ必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. 開始する

reComputer が初期設定を完了すると、自動的に再起動します。その後、以下の図のようにシステムデスクトップに入ります。これにより、システムが準備完了で使用可能であることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

製品には 16 GB の eMMC が内蔵されており、`ubuntu 18.04 LTS` と `NVIDIA JetPack 4.6` がインストールされています。ユーザーが自由に使用できる残りのスペースは約 2GB です。以下の図は、ターミナルでディスクスペースコマンドを使用した結果を示しています。

```shell
seeed@seeed-desktop:~$ df -hl
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk0p1   14G   12G  2.0G  86% /
none            3.5G     0  3.5G   0% /dev
tmpfs           3.8G   75M  3.8G   2% /dev/shm
tmpfs           3.8G   22M  3.8G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup
tmpfs           777M  128K  777M   1% /run/user/1000
seeed@seeed-desktop:~$
```

## reComputer に NVIDIA システムをインストールする

reComputer デバイスがクラッシュし、NVIDIA システムを再インストールしたい場合、reComputer に NVIDIA システムをインストールする方法についての Wiki を提供しています。提供されている Wiki には A20X キャリアボードと reComputer J1010 キャリアボードが含まれています。

- [A20X キャリアボードに基づく NVIDIA システムのインストール](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack/)
- [reComputer J1010 キャリアボードに基づく NVIDIA システムのインストール](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/)

## トラブルシューティング

### Q1: 受け取った reComputer の eMMC の残り容量が約 2GB しかない場合、容量不足の問題をどのように解決できますか？

現在、この特定の状況に対処するための 3 つの方法を提供しており、実際の状況に基づいて適切な解決策を選択できます。

**オプション 1.** 外部ストレージデバイスへのシステム再展開

reComputer でプロジェクトを開始していない場合、このオプションを使用して十分な容量を持つストレージデバイスに新しいシステムを再展開することを検討できます。

- reComputer にシステムをインストールする方法は一般的に 2 つあります。1 つ目は **NVIDIA SDK Manager** を使用する方法です。

**reComputer J2011** または **reComputer J2012** を使用している場合、[SDK Manager を使用した eMMC へのフラッシュ](/ja/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line) の **ステップ 12** で、システムの書き込み場所を変更することで容量を拡張できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
この方法は Jetson Nano モジュールには適用できません。
:::

- reComputer にシステムをインストールする方法は一般的に 2 つあります。2 つ目は **コマンドライン** を使用する方法です。

- **A20X キャリアボード** を使用している場合、コマンドラインを使用してシステムをインストールする方法は [コマンドラインを使用した eMMC へのフラッシュ](/ja/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line) に記載されています。

- **reComputer J1010 キャリアボード** を使用している場合、コマンドラインを使用してシステムをインストールする方法は [コマンドラインを使用した JetPack OS のフラッシュ](/ja/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line) に記載されています。

これらは本質的に以下のコマンドを使用してシステムのインストールを完了します。

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

以下の内容を指定します：

1. `[options]` は 1 つ以上のコマンドラインオプションです。すべてのオプションは任意です。[フラッシュスクリプトの使用法](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) を参照してオプションの情報を確認してください。

2. `<board>` はフラッシュ対象デバイスに適用される構成を指定します。値は [Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart) のトピック内の [Jetson Modules and Configurations](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) の表に記載されています。`flash.sh` は `<board>.conf` という名前の構成ファイルから構成を取得します。

3. `<rootdev>` はフラッシュ対象デバイスの種類を指定します。ローカルストレージデバイス (プラットフォームに応じて eMMC または SD カード) をフラッシュする場合は **mmcblk0p1** を使用します。例えば、NFS サーバーとは異なります。

上記の説明からわかるように、外部ストレージにシステムをインストールする場合は `<rootdev>` オプションを変更することで実現できます。

reComputer デバイスに接続された USB ストレージデバイスのパーティションの場合、以下のコマンドを入力します：

```sh
sudo ./flash.sh <board> sda<x>
```

reComputer デバイスに接続された NVMe ストレージデバイスのパーティションの場合、以下のコマンドを入力します：

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` はストレージデバイス上の APP パーティションの位置を指定する番号です。例えば、USB デバイスの場合は `sda1`、NVMe ストレージデバイスの場合は `nvme0n1p1` です。

**オプション 2.** JetPack の不要なコンポーネントを削除して eMMC の空き容量を増やす。

NVIDIA JetPack SDKは、エンドツーエンドの高速化されたAIアプリケーションを構築するための最も包括的なソリューションです。すべてのJetsonモジュールおよび開発者キットはJetPack SDKによってサポートされています。

JetPack SDKには、Linuxオペレーティングシステムを含むJetson Linux Driver Package (L4T)と、Deep Learning、Computer Vision、Accelerated Computing、Multimedia向けのCUDA-X高速化ライブラリおよびAPIが含まれています。また、ホストコンピュータおよび開発者キット向けのサンプル、ドキュメント、開発者ツールが含まれており、DeepStream（ストリーミングビデオ分析用）やIsaac（ロボティクス用）などの上位SDKもサポートしています。

[この表](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages)は、JetPack 4.6に含まれるすべてのコンポーネントを示しています。

<table align="center">
  <tbody><tr>
      <th align="center">コンポーネントグループ</th>
      <th colSpan={2} align="center" valign="middle">パッケージ</th>
    </tr>
    <tr>
      <th align="center" valign="middle">L4T用CUDA Toolkit</th>
      <td align="center">cuda <br /> cuda-11-4 <br /> cuda-cccl-11-4 <br /> cuda-command-line-tools-11-4 <br /> cuda-compiler-11-4 <br /> cuda-cudart-11-4 <br /> cuda-cudart-dev-11-4 <br /> cuda-cuobjdump-11-4 <br /> cuda-cupti-11-4 <br /> cuda-cupti-dev-11-4 <br /> cuda-cuxxfilt-11-4 <br /> cuda-documentation-11-4 <br /> cuda-driver-dev-11-4 <br /> cuda-gdb-11-4 <br /> cuda-gdb-src-11-4 <br /> cuda-libraries-11-4 <br /> cuda-libraries-dev-11-4 <br /> cuda-minimal-build-11-4 <br /> cuda-nvcc-11-4 <br /> cuda-nvdisasm-11-4 <br /> cuda-nvml-dev-11-4 <br /> cuda-nvprof-11-4 <br /> cuda-nvprune-11-4 <br /> cuda-nvrtc-11-4 <br /> cuda-nvrtc-dev-11-4 <br /> cuda-nvtx-11-4</td>
      <td align="center">cuda-runtime-11-4 <br /> cuda-samples-11-4 <br /> cuda-sanitizer-11-4 <br /> cuda-toolkit-11-4 <br /> cuda-toolkit-11-4-config-common <br /> cuda-toolkit-11-config-common <br /> cuda-toolkit-config-common <br /> cuda-tools-11-4 <br /> cuda-visual-tools-11-4 <br /> libcublas-11-4 <br /> libcublas-dev-11-4 <br /> libcudla-11-4 <br /> libcudla-dev-11-4 <br /> libcufft-11-4 <br /> libcufft-dev-11-4 <br /> libcurand-11-4 <br /> libcurand-dev-11-4 <br /> libcusolver-11-4 <br /> libcusolver-dev-11-4 <br /> libcusparse-11-4 <br /> libcusparse-dev-11-4 <br /> libnpp-11-4 <br /> libnpp-dev-11-4</td>
    </tr>
    <tr>
      <th align="center">cuDNN</th>
      <td align="center">libcudnn8 <br /> libcudnn8-dev</td>
      <td align="center">libcudnn8-samples</td>
    </tr>
    <tr>
      <th align="center">TensorRT</th>
      <td align="center">graphsurgeon-tf <br /> libnvinfer-bin <br /> libnvinfer-dev <br /> libnvinfer-doc <br /> libnvinfer-plugin-dev <br /> libnvinfer-plugin8 <br /> libnvinfer-samples <br /> libnvinfer8</td>
      <td align="center">libnvonnxparsers-dev <br /> libnvonnxparsers8 <br /> libnvparsers-dev <br /> libnvparsers8 <br /> python3-libnvinfer <br /> python3-libnvinfer-dev <br /> tensorrt <br /> uff-converter-tf</td>
    </tr>
    <tr>
      <th align="center">OpenCV</th>
      <td align="center">libopencv <br /> libopencv-dev <br /> opencv-licenses</td>
      <td align="center">libopencv-python <br /> libopencv-samples</td>
    </tr>
    <tr>
      <th align="center">VPI</th>
      <td align="center">libnvvpi2 <br /> vpi2-dev <br /> python-vpi2</td>
      <td align="center">python3.9-vpi2 <br /> vpi2-samples <br /> vpi2-demos</td>
    </tr>
    <tr>
      <th align="center">Docker統合によるNVIDIAコンテナランタイム</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">マルチメディアAPI</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

JetPack SDKには多くのコンテンツが含まれていますが、すべての開発者がそれを使用する必要があるわけではありません。そのため、ストレージスペースを増やすために選択的に削除するのも良い選択肢の一つです。

reComputer JetsonにインストールされているJetPackの情報は、以下のコマンドで確認できます。

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

このコマンドを使用すると、JetPackにインストールされているCUDAやOpenCVなどのコンポーネントの内容をすばやく確認できます。

さらに詳細な情報を得るには、以下のコマンドを使用してreComputerに現在インストールされているすべてのソフトウェアとその説明情報を確認できます。

```sh
dpkg-query -l
```

その後、実際のニーズやコンポーネントの説明情報に基づいて不要なコンテンツを選択的に削除できます。削除コマンドは以下の通りです。

```sh
sudo apt autoremove ${packagesname}
```

環境変数`${packagesname}`は、削除したいコンポーネントパッケージの名前を示します。特定の名前で始まるすべてのパッケージを削除したい場合は、この接頭辞に`*`を追加して示すことができます。

例えば、**CUDA**に関するすべてのコンポーネントを削除したい場合、以下のコマンドを使用します。

```sh
sudo apt autoremove cuda*
```

CUDAコンポーネントの内容を解放した後、eMMCの残り容量が増加することが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

他のJetPackコンポーネントにも同様の操作が適用できます。

**オプション3.** 外部ストレージデバイスによる容量拡張。

通常の使用を続けながら既存のシステム環境を破壊せずに拡張ソリューションを完了したい場合、このオプションを選択できます。

私たちはすでに拡張に関する詳細なWikiを提供しています：[reComputerシリーズのメモリ拡張](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Memory_Expansion/)。

なお、いかなる拡張操作も危険を伴うため、すべてを開始する前にシステムの**バックアップを作成**することを強く推奨します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>