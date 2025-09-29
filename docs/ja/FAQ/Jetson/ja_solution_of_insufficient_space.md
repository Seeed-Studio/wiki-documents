---
description: reComputer-FAQ
title: 受け取ったreComputerのeMMCの残り容量が約2GBしかない場合、容量不足の問題をどのように解決しますか？
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /ja/solution_of_insufficient_space
last_update:
  date: 2023/6/30
  author: Seraphina
---

<!-- ### Q1: The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space? -->

この特定の状況に対処するために、現在3つの方法を提供しており、実際の状況に基づいて適切なソリューションを選択できます。

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

- **reComputer J1010 Carrier Board**を使用している場合は、[コマンドラインを使用したeMMCへのフラッシュ](/ja/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line)でコマンドラインを使用してシステムをインストールします。

これらは本質的に以下のコマンドを使用してシステムのインストールを完了します。

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

ここで：

1. `[options]`は1つ以上のコマンドラインオプションです。すべてのオプションは任意です。オプションについての情報は[Flashing Script Usage](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage)を参照してください。

2. `<board>`はフラッシュするデバイスに適用される設定を指定します。値は[Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart)トピックの[Jetson Modules and Configurations](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations)の表にリストされています。`flash.sh`は`<board>.conf`という名前の設定ファイルから設定を取得します。

3. `<rootdev>`はフラッシュするデバイスのタイプを指定します。ローカルストレージデバイス（プラットフォームに応じてeMMCまたはSDカード）をフラッシュするには、例えばNFSサーバーと区別して、値**mmcblk0p1**を使用します。

上記の説明からわかるように、外部ストレージにシステムをインストールしたい場合は、`<rootdev>`オプションを変更することで実行できます。

reComputerデバイスに接続されたUSBストレージデバイスのパーティションの場合、このコマンドを入力します：

```sh
sudo ./flash.sh <board> sda<x>
```

reComputerデバイスに接続されたNVMeストレージデバイスのパーティションの場合、このコマンドを入力します：

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>`はストレージデバイス上のAPPパーティションの位置を指定する番号です。例えば、USBデバイスの場合は`sda1`、NVMeストレージデバイスの場合は`nvme0n1p1`です。

**オプション2.** 不要なJetPackコンポーネントを削除してeMMC容量を増やす。

NVIDIA JetPack SDKは、エンドツーエンドの加速AIアプリケーションを構築するための最も包括的なソリューションです。すべてのJetsonモジュールと開発者キットはJetPack SDKによってサポートされています。

JetPack SDKには、LinuxオペレーティングシステムとCUDA-X加速ライブラリ、およびディープラーニング、コンピュータビジョン、加速コンピューティング、マルチメディア用のAPIを含むJetson Linux Driver Package（L4T）が含まれています。また、ホストコンピュータと開発者キットの両方のサンプル、ドキュメント、開発者ツールも含まれており、ストリーミングビデオ分析用のDeepStreamやロボティクス用のIsaacなどの高レベルSDKをサポートしています。

[この表](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages)はJetPack 4.6に含まれるすべてのコンポーネントをリストしています。

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
      <th align="center">NVIDIA container runtime with Docker integration</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

JetPack SDKには多くのコンテンツが含まれていますが、すべての開発者が使用する必要があるものではありません。そのため、より多くのストレージ容量を確保するために選択的に削除することは良い選択肢の一つです。

reComputer JetsonにインストールされているJetPackの情報は、以下のコマンドで確認できます。

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

このコマンドを使用すると、CUDA、openCVなど、JetPackにインストールされているコンポーネントの内容を素早く確認できます。

より詳細な情報を取得するには、以下のコマンドを使用して、reComputerに現在インストールされているすべてのソフトウェアとその説明情報を確認できます。

```sh
dpkg-query -l
```

その後、実際のニーズとコンポーネントの説明情報に応じて、不要なコンテンツを選択的に削除できます。削除コマンドは以下の通りです。

```sh
sudo apt autoremove ${packagesname}
```

環境変数`${packagesname}`は、削除したいコンポーネントパッケージの名前を示します。特定の名前で始まるすべてのパッケージを削除したい場合は、このプレフィックスに`*`を追加してそれを示すことができます。

例として、**CUDA**に関するすべてのコンポーネントを削除したい場合は、以下のコマンドを使用できます。

```sh
sudo apt autoremove cuda*
```

CUDAコンポーネントの内容を削除した後、eMMCの残り容量も大きくなることが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

他のJetPackコンポーネントについても同様です。

**オプション3.** 外部ストレージデバイスによる容量拡張。

reComputerを正常に使用してしばらく経っており、既存のシステム環境を破壊することなく拡張ソリューションを完了したい場合は、このオプションを選択できます。

すでによく開発された拡張wikiがあります：[reComputerシリーズのメモリ拡張](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Memory_Expansion/)。

注目すべきは、拡張操作は危険であり、すべてが始まる前にシステムの**バックアップを作成**することを積極的に行うことを期待していることです。