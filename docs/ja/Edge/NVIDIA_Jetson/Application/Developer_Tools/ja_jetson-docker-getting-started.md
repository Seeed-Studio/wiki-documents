---
description: Dockerの使い方を始める
title: Dockerの使い方を始める
keywords:
  - Edge
  - reComputer アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/jetson-docker-getting-started
last_update:
  date: 05/15/2025
  author: w0x7ce
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Dockerの使い方を始める

> これは、[Ajeet](https://collabnix.com/author/ajeetraina)による[collabnix.com](https://collabnix.com)の[ブログ](https://collabnix.com/getting-started-with-docker-on-seeed-studios-recomputer-powered-by-nvidia-jetson)を再投稿したものです。すべてのクレジットは彼に帰属します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/1.jpeg" /></div>

先週、私は幸運にも最新のSeeed Studio [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)エッジAIデバイスに初めてアクセスすることができました。reComputer J1020はJetson Nano開発キットを搭載しています。この小型で手のひらサイズの強力なコンピュータは、組み込み開発者向けに現代のAIの力をもたらします。この259ドルの小型デバイスは、NVIDIA Jetson Nanoシステムオンモジュールを中心に構築されており、エッジAIアプリケーション向けに設計されています。このデバイスは、画像分類、物体検出、セグメンテーション、音声処理などのアプリケーション向けに複数のニューラルネットワークを並列で実行することができます。豊富な拡張モジュール、産業用周辺機器、熱管理機能を備えたreComputer J1020は、人気のあるDNNモデルやMLフレームワークをエッジにデプロイし、高性能で推論を行うことで、リアルタイム分類や物体検出、ポーズ推定、セマンティックセグメンテーション、自然言語処理（NLP）などの次世代AI製品を加速・スケールする準備が整っています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/2.jpg" /></div>

## reComputer J1020のユニークな点は？

[Seeed Studio reComputer J1020](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Introduction/#recomputer-j1020)は、AIベースのアプリケーションを構築するために必要なすべてを備えています。NVIDIAが提供するJetson Nano開発キットと比較して、SDカードにオペレーティングシステムをゼロからフラッシュする必要がありません。Ubuntu OSが16GB eMMCにすでにプリインストールされています。reComputerにプリインストールされているJetpack 4.6には、ボードサポートパッケージ（BSP）、Linux OS、NVIDIA CUDA、cuDNN、TensorRTソフトウェアライブラリ（ディープラーニング、コンピュータビジョン、GPUコンピューティング、マルチメディア処理用）が含まれています。これは、[Jetsonソフトウェアスタック](https://developer.nvidia.com/embedded/develop/software)全体と、Seeed Edge AIパートナーが提供する[高速で堅牢なAIアプリケーションを構築するための](https://wiki.seeedstudio.com/ja/Jetson-AI-developer-tools)[さまざまな開発者ツール](https://wiki.seeedstudio.com/ja/Jetson-AI-developer-tools)をサポートしています。

## 主な特徴

- 128 NVIDIA CUDA®コア – 0.5 TFLOPs（FP16）を提供し、画像分類、物体検出、セグメンテーション、音声処理などのアプリケーション向けにAIフレームワークとモデルを実行可能
- Armv8プロセッサ搭載
- NVIDIA Tegra X1(nvgpu)/統合型
- ディスクサイズ16GB
- メモリ4GB
- 64ビットOSタイプ
- Ubuntu 18.04.5
- Seeed Studio reComputerにはJetPack 4.6システムがすでにインストール済み
- SDカードをフラッシュする必要なし、オペレーティングシステムがすでにインストール済み
- CUDA 10.2.300対応
- CUDAアーキテクチャ: 5.3
- OpenCVバージョン: 4.1.1

[reComputerのハードウェアレイアウトについてさらに学ぶ](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Hardware_Layout)

## reComputer の構成部品

以下の部品リストが含まれています：

- NVIDIA Jetson Nano x1
- Seed Reference Carrier Board x1
- パッシブアルミニウムヒートシンク x1
- アルミニウムケース x1
- 12V電源アダプター x1
- USB 3.0ポート x4
- HDMIポート x2
- MIPI-CSIカメラコネクタ
- コントロールおよびUARTヘッダー
- 40ピン拡張ヘッダー(GPIO, I2C, ヘッダー)
- 260ピンSODIMM
- MicroUSB
- ギガビットイーサネットポート
- LEDライト

## ハードウェアセットアップ

開始するには、以下の最小限の接続が必要です：

- 電源ケーブル
- WiFiモジュール / ギガビットイーサネットケーブル
- WiFiキーボードとマウス用のUSBレシーバー
- ディスプレイへのHDMI接続

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/3.jpg" /></div>

## CUDA deviceQuery の実行

```sh
cd /usr/local/cuda/samples/1_Utilities/deviceQuery
sudo make 
./deviceQuery
```

以下は結果です：

```sh
./deviceQuery Starting...

 CUDA Device Query (Runtime API) version (CUDART static linking
Detected 1 CUDA Capable device(s)

Device 0: "NVIDIA Tegra X1"
  CUDA Driver Version / Runtime Version          10.2 / 10.2
  CUDA Capability Major/Minor version number:    5.3
  Total amount of global memory:                 3956 MBytes (4148273152 bytes)
  ( 1) Multiprocessors, (128) CUDA Cores/MP:     128 CUDA Cores
  GPU Max Clock rate:                            922 MHz (0.92 GHz)
  Memory Clock rate:                             13 Mhz
  Memory Bus Width:                              64-bit
  L2 Cache Size:                                 262144 bytes
  Maximum Texture Dimension Size (x,y,z)         1D=(65536), 2D=(65536, 65536), 3D=(4096, 4096, 4096)
  Maximum Layered 1D Texture Size, (num) layers  1D=(16384), 2048 layers
  Maximum Layered 2D Texture Size, (num) layers  2D=(16384, 16384), 2048 layers
  Total amount of constant memory:               65536 bytes
  Total amount of shared memory per block:       49152 bytes
  Total number of registers available per block: 32768
  Warp size:                                     32
  Maximum number of threads per multiprocessor:  2048
  Maximum number of threads per block:           1024
  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)
  Maximum memory pitch:                          2147483647 bytes
  Texture alignment:                             512 bytes
  Concurrent copy and kernel execution:          Yes with 1 copy engine(s)
  Run time limit on kernels:                     Yes
  Integrated GPU sharing Host Memory:            Yes
  Support host page-locked memory mapping:       Yes
  Alignment requirement for Surfaces:            Yes
  Device has ECC support:                        Disabled
  Device supports Unified Addressing (UVA):      Yes
  Device supports Compute Preemption:            No
  Supports Cooperative Kernel Launch:            No
  Supports MultiDevice Co-op Kernel Launch:      No
  Device PCI Domain ID / Bus ID / location ID:   0 / 0 / 0
  Compute Mode:
     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >
deviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 10.2, CUDA Runtime Version = 10.2, NumDevs = 1

Result = PASS
```

## reComputer Jetson NanoでのDockerの実行

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/4.png" /></div>

[Docker](https://www.docker.com) は、個々のコンテナを作成、共有、実行するためのソフトウェア開発ツールのスイートです。これは、アプリケーションとそのすべての依存関係をDockerコンテナの形でパッケージ化し、どの環境でもアプリケーションがシームレスに動作することを保証するコンテナ化プラットフォームです。Dockerコンテナは、特定のアプリケーションや環境をデプロイするために即座に作成できる標準化されたユニットです。

今日では、どのような種類のアプリケーションを開発する場合でも複雑です。単にコードを書く以上のことが必要です。プログラミング言語、ウェブフレームワーク、複雑なアーキテクチャ、各ライフサイクル段階のツール間の不連続なインターフェースなど、多くの要素が絡み合い、膨大な複雑さを生み出します。Dockerはワークフローを簡素化し、加速させるとともに、開発者にツール、アプリケーションスタック、各プロジェクトのデプロイメント環境を自由に選択する権利を与えます。これにより、アプリケーションをインフラストラクチャから分離し、迅速にソフトウェアを提供することが可能になります。

Dockerは公式にreComputer J1020、Jetson Nanoを搭載した開発キットでサポートされています。このキットには最新バージョンのDockerがデフォルトでプリインストールされています。以下のコマンドを実行してDockerのバージョンを確認できます：

```sh
sudo docker version

Client: Docker Engine - Community
 Cloud integration: v1.0.25
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.17.11
 Git commit:        100c701
 Built:             Mon Jun  6 23:02:19 2022
 OS/Arch:           linux/arm64
 Context:           default
 Experimental:      true


Server: Docker Engine - Community
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
  Git commit:       a89b842
  Built:            Mon Jun  6 23:00:46 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.6
  GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc:
  Version:          1.1.2
  GitCommit:        v1.1.2-0-ga916309
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

## Docker Composeのインストール

reComputer Jetson にはDocker Composeがプリインストールされていません。以下の手順に従ってシステムにDocker Composeをインストールできます：

```sh
export DOCKER_COMPOSE_VERSION=2.6.0
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"
apt install python3
apt install python3-pip
pip install docker-compose
```

## 最新バージョンのCUDAツールキットをインストールする

```sh
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/sbsa/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo dpkg -i cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo apt-key add /var/cuda-repo-ubuntu1804-11-3-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```

## Docker ランタイムの確認

```sh
docker info | grep runtime

 Runtimes: nvidia runc io.containerd.runc.v2 io.containerd.runtime.v1.linuxs
```

## 初めての Python コンテナの実行

以下のコマンドを実行して、Arm ベースのシンプルな Python Docker イメージを試してみましょう：

```sh
sudo docker run arm64v8/python:slim ls
```

## JTOP Docker コンテナを使用した CPU、GPU、メモリの監視

このセクションでは、CPU、RAM、GPU を監視するためのシステム監視ユーティリティを設定する方法を説明します。ここでは JTOP ユーティリティを使用します。JTOP はターミナル上で動作するシステム監視ユーティリティで、reComputer Jetson Nano キットの CPU、RAM、GPU のステータスや周波数をリアルタイムで確認および制御できます。このユーティリティをコンテナ化する方法を見ていきましょう。それでは始めましょう –

まず、以下の内容で Dockerfile を作成します：

```sh
FROM python:3-alpine

RUN apk update \

    && apk --no-cache add bash \

    && pip install jetson-stats \

    && rm -rf /var/cache/apk/*
```

最初の行では、python:3-alpine をベースイメージとして選択しています。2 行目では jetson-stats とその依存パッケージをインストールしています。

## JTOP Docker イメージのビルド

Docker build CLI を使用して Docker イメージをビルドします。

```sh
docker build -t ajeetraina/jetson-stats-nano .
```

## JTOP Docker コンテナの実行

次に、–gpus パラメータを渡し、jtop ソケットにマウントして Docker コンテナを実行します。

```sh
docker run --rm -it --gpus all -v /run/jtop.sock:/run/jtop.sock ajeetraina/jetson-stats-nano jtop
```

以下のような結果が表示されます：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/jetson-docker/5.png" /></div>

次回のブログ記事では、Docker コンテナ内で OpenDatacam を使用して車両識別を実装する方法を紹介します。お楽しみに！

以下のアプリケーション例とチュートリアルもぜひご覧ください！

- [Edge Impulse による歩行者検出](https://www.edgeimpulse.com/blog/recognizing-your-blind-spots-pedestrian-detection-system-with-nvidia-jetson-nano)
- [ヘルメット検出](https://www.seeedstudio.com/blog/2022/03/03/deploy-hard-hat-detection-for-enforcing-workplace-safety) とカスタム PPE 検出の構築
- [alwaysAI を使用したポーズ推定](https://alwaysai.co/blog/using-pose-estimation-on-the-jetson-nano-with-alwaysai)
- [NVIDIA Deepstream IoT を使用した視覚的異常検出](https://developer.nvidia.com/gtc/2020/video/s22675-vid)
- [小売店の商品検出](https://www.seeedstudio.com/blog/2022/06/08/retail-store-items-detection-using-yolov5-roboflow-and-node-red)
- [山火事検出](https://github.com/Seeed-Studio/node-red-contrib-ml)
- [動物検出](https://github.com/Seeed-Studio/node-red-contrib-ml)

Ajeet をフォローする：

- [Twitter](https://twitter.com/ajeetsraina)
- [LinkedIn](https://www.linkedin.com/in/ajeetsraina)
- [collabnix](https://collabnix.com/author/ajeetraina)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートをご提供しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>