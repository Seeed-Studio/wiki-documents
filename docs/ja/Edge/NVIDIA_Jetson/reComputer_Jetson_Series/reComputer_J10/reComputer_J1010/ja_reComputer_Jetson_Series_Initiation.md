---
description: reComputer for Jetson 初期設定
title: reComputer for Jetson 初期設定
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Initiation
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer for Jetson 初期設定

すべてのreComputer for Jetsonには16GB eMMCが搭載されており、`ubuntu 18.04 LTS`と`NVIDIA JetPack 4.6`が既にインストールされています。手順に従って周辺機器を接続し、電源を入れることで数秒で直接使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. 周辺機器の接続

reComputerホストにUSB接続のキーボード、マウスを接続し、HDMIポートまたはDPポート（A206キャリアボードのみ）経由で画面ディスプレイに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::note
HDMIまたはDPインターフェースの両方を持つreComputerホストの場合、2つのディスプレイ出力ポートがありますが、デュアルディスプレイ出力をサポートしていません。つまり、一度に使用できるディスプレイ出力インターフェースは1つだけです。
:::

## 2. 電源投入

周辺機器を接続した後、reComputerホストに電源を接続します。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)の電源はType-Cインターフェースで供給され、HDMIインターフェース近くの電源位置は下図に示されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::note
[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)には両側にType-Cポートがあり、LANポート近くの右側のものはデータ転送ポートです。右側のデータ転送ポートにType-C電源を挿入することは厳禁です。コンポーネントの損傷を引き起こす可能性があります。
:::

- [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)、[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)、および[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)は、HDMIインターフェース近くのDCインターフェースで電源供給されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

電源に接続すると、reComputerホストは自動的に電源が入ります。

## 3. 初期設定

新しいreComputerには既にシステムがフラッシュされています。しかし、使用する前に、いくつかの必要な初期設定が必要です。

### ステップ1: 電源投入を待つ

電源投入後、最初に画面中央に表示される巨大なNVIDIAアイコンが表示されます。設定ページに入る前に、reComputerが自動的に2回再起動することがあります。このプロセスには約1分かかります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ2: ライセンスの確認と同意

設定ページでは、まずライセンスを確認し、「**I accept the terms of these licenses**」を選択して同意し、次のステップに進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ3: システム言語とキーボードレイアウトの選択

「Continue」ボタンをクリックした後、次のページでシステム言語とキーボードレイアウトの選択を求められます。実際のニーズに応じて選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ4: ネットワークへの接続

reComputerをインターネットに接続する方法は2つあります。1つはネットワークケーブルで直接接続する方法、もう1つはWi-Fi（無線モジュールが必要）でインターネットに接続する方法です。ソフトウェアアップデートのためにインターネットアクセスが不要な場合は、このステップでインターネットに接続しないことを選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ5: ユーザー情報とパスワードの設定

次のページでは、ユーザー名とパスワードの入力を求められます。後でreComputerを起動する際に必要になるため、起動パスワードを覚えておく必要があります。

reComputerを起動するたびにパスワードを入力するのが面倒で、他の人が使用できないようにしたい場合は、下記の「Require my password to log in」オプションを選択できますが、推奨しません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ6: 供給電圧の選択

最後に選択するのは、reComputer動作時の供給電圧です。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)と[reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)は両方ともJetson Nanoモジュールを搭載しています。reComputerが正常に動作することを保証するため、**MAXN**モデルを強く推奨します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) と [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) は両方とも Jetson Xavier NX モジュールを搭載しており、様々な電源供給出力パワーオプションを提供します。デフォルトモデルは 10 W で `MODE_10W_DESKTOP - (Default)` として設定されており、ここで確認できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::note
以下の表は、NVIDIA が事前定義した電力モードと関連するモジュールリソース使用量の上限を示しています。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

上記の手順を完了した後、reComputer が最終設定を行うために 1〜2 分待つ必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. 使用開始

reComputer が初期設定を完了すると、自動的に再起動します。その後、下図に示すようにシステムデスクトップに入ります。これはシステムが正常に動作し、使用可能であることを示しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

この製品には内蔵 16 GB eMMC が含まれており、`ubuntu 18.04 LTS` と `NVIDIA JetPack 4.6` がインストールされているため、残りのユーザー使用可能領域は約 2GB です。以下の図は、ターミナルでディスク容量コマンドを使用した結果を示しています：

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

## reComputerにNVIDIAシステムをインストールする

reComputerデバイスがクラッシュしてNVIDIAシステムを再インストールしたい場合、reComputerにNVIDIAシステムをインストールする方法についてのwikiを提供しています。提供されているwikiには、A20Xキャリアボードとrecomputer J1010キャリアボードが含まれています：

- [A20XキャリアボードベースのNVIDIAシステムのインストール](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack/)
- [reComputer J1010キャリアボードベースのNVIDIAシステムのインストール](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/)

## トラブルシューティング

### Q1: 受け取ったreComputerのeMMCの残り容量が約2GBしかありません。容量不足の問題をどのように解決できますか？

現在、この特定の状況に対処する3つの方法を提供しており、実際の状況に基づいて適切な解決策を選択できます。

**オプション1.** 外部ストレージデバイスへのシステムの再デプロイ

reComputerでプロジェクトを開始していない場合は、このオプションを使用して十分な容量を持つストレージデバイスに新しいシステムを再デプロイすることを検討してください。

- reComputerのシステムをインストールする方法は一般的に2つあり、最初の方法は**NVIDIA SDK Manager**を使用することです。

**reComputer J2011**または**reComputer J2012**を使用している場合、[SDK Managerを使用したeMMCへのフラッシュ](/ja/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)の**ステップ12**で、システム書き込みの場所を変更することで容量を拡張できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
この方法はJetson Nanoモジュールには適用されません。
:::

- reComputerのシステムをインストールする方法は一般的に2つあり、2番目の方法は**コマンドライン**を使用することです。

- **A20Xキャリアボード**を使用している場合、コマンドラインを使用してシステムをインストールする方法は[コマンドラインを使用したeMMCへのフラッシュ](/ja/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)にあります。

- **reComputer J1010キャリアボード**を使用している場合は、[コマンドラインを使用したeMMCへのフラッシュ](/ja/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line)でコマンドラインを使用してシステムをインストールします。

これらは本質的に以下のコマンドを使用してシステムのインストールを完了します。

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

ここで：

1. `[options]` は1つ以上のコマンドラインオプションです。すべてのオプションは任意です。オプションについての情報は [Flashing Script Usage](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) を参照してください。

2. `<board>` はフラッシュするデバイスに適用される設定を指定します。値は [Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart) トピック内の [Jetson Modules and Configurations](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) の表に記載されています。`flash.sh` は `<board>.conf` という名前の設定ファイルから設定を取得します。

3. `<rootdev>` はフラッシュするデバイスのタイプを指定します。ローカルストレージデバイス（プラットフォームに応じてeMMCまたはSDカード）をフラッシュするには、例えばNFSサーバーと区別して、値 **mmcblk0p1** を使用します。

上記の説明からわかるように、外部ストレージにシステムをインストールしたい場合は、`<rootdev>` オプションを変更することで実行できます。

reComputerデバイスに接続されたUSBストレージデバイスのパーティションの場合、次のコマンドを入力します：

```sh
sudo ./flash.sh <board> sda<x>
```

reComputerデバイスに接続されたNVMeストレージデバイス上のパーティションの場合は、次のコマンドを入力してください：

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` は、ストレージデバイス上のAPPパーティションの位置を指定する番号です。例えば、USBデバイスの場合は `sda1`、NVMeストレージデバイスの場合は `nvme0n1p1` となります。

**オプション 2.** 不要なJetPackコンポーネントを削除してeMMC容量を増やします。

NVIDIA JetPack SDKは、エンドツーエンドの加速AIアプリケーションを構築するための最も包括的なソリューションです。すべてのJetsonモジュールと開発者キットはJetPack SDKによってサポートされています。

JetPack SDKには、LinuxオペレーティングシステムとCUDA-X加速ライブラリ、およびディープラーニング、コンピュータビジョン、加速コンピューティング、マルチメディア用のAPIを含むJetson Linux Driver Package（L4T）が含まれています。また、ホストコンピュータと開発者キットの両方のサンプル、ドキュメント、開発者ツールも含まれており、ストリーミング動画解析用のDeepStreamやロボティクス用のIsaacなどの高レベルSDKもサポートしています。

[この表](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages)は、JetPack 4.6に含まれるすべてのコンポーネントをリストしています。

<table align="center">
  <tbody><tr>
      <th align="center">コンポーネントグループ</th>
      <th colSpan={2} align="center" valign="middle">パッケージ</th>
    </tr>
    <tr>
      <th align="center" valign="middle">CUDA Toolkit for L4T</th>
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
      <th align="center">Docker統合を含むNVIDIAコンテナランタイム</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

JetPack SDKには多くのコンテンツが含まれていますが、すべての開発者が使用する必要があるものではありません。そのため、より多くのストレージ容量を確保するために、選択的に削除することは良い選択肢の一つです。

以下のコマンドで、reComputer JetsonにインストールされているJetPackの情報を確認できます。

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

このコマンドを使用すると、JetPackにインストールされているコンポーネントの内容（CUDA、openCVなど）を素早く確認できます。

より詳細な情報を取得するには、以下のコマンドを使用してreComputerに現在インストールされているすべてのソフトウェアとその説明情報を確認できます。

```sh
dpkg-query -l
```

その後、実際のニーズとコンポーネントの説明情報に応じて、不要なコンテンツを選択的に削除できます。削除コマンドは以下の通りです。

```sh
sudo apt autoremove ${packagesname}
```

環境変数 `${packagesname}` は、削除したいコンポーネントパッケージの名前を示します。特定の名前で始まるすべてのパッケージを削除したい場合は、このプレフィックスに `*` を追加してそれを示すことができます。

例として、**CUDA** に関するすべてのコンポーネントを削除したい場合は、以下のコマンドを使用できます。

```sh
sudo apt autoremove cuda*
```

CUDAコンポーネントの内容をリリースした後、eMMCの残り容量も大きくなることがわかります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

他のJetPackコンポーネントについても同様です。

**オプション3.** 外部ストレージデバイスによる容量拡張。

reComputerを通常通りしばらく使用しており、既存のシステム環境を破壊することなく拡張ソリューションを完了したい場合は、このオプションを選択できます。

すでに十分に開発された拡張wikiがあります [Memory Expansion for reComputer series](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Memory_Expansion/)。

注目すべき点は、拡張操作は危険であり、すべてが始まる前にシステムの**バックアップを作成**することを積極的に行うことを期待していることです。

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
