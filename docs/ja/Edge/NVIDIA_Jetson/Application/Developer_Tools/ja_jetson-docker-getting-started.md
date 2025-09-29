---
description: Dockerを始める
title: Dockerを始める
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/jetson-docker-getting-started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# Dockerを始める

> これは[collabnix.com](https://collabnix.com)の[Ajeet](https://collabnix.com/author/ajeetraina)によって書かれた[ブログ](https://collabnix.com/getting-started-with-docker-on-seeed-studios-recomputer-powered-by-nvidia-jetson)の再投稿です。すべてのクレジットは彼に帰属します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/1.jpeg" /></div>

先週、私は初めてSeeed Studioの最新[reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html)エッジAIデバイスにアクセスする幸運に恵まれました。reComputer J1020はJetson Nano開発キットによって駆動されています。これは小さく、手のひらサイズの強力なコンピューターで、組み込み開発者に現代AIの力をもたらします。この259ドルの小さなデバイスは、NVIDIA Jetson Nanoシステムオンモジュールを中心に構築され、エッジAIアプリケーション向けに設計されています。このデバイスでは、画像分類、物体検出、セグメンテーション、音声処理などのアプリケーション向けに複数のニューラルネットワークを並列実行できます。豊富な拡張モジュール、産業用周辺機器、熱管理により、reComputer J1020は人気のDNNモデルとMLフレームワークをエッジに展開し、リアルタイム分類と物体検出、姿勢推定、セマンティックセグメンテーション、自然言語処理（NLP）などのタスクに対して高性能で推論を行うことで、次世代AI製品の加速とスケールを支援する準備が整っています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/2.jpg" /></div>

## reComputer J1020の独自性とは？

[Seeed Studio reComputer J1020](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Introduction/#recomputer-j1020)は、AIベースのアプリケーションの構築を開始するために必要なすべてを備えています。NVIDIAが提供するJetson Nano開発キットと比較して、SDカードにオペレーティングシステムを一から書き込む必要がありません。16GB eMMCにUbuntu OSが既にプリインストールされています。reComputerにプリインストールされたJetpack 4.6には、ボードサポートパッケージ（BSP）、Linux OS、NVIDIA CUDA、cuDNN、および深層学習、コンピュータビジョン、GPU計算、マルチメディア処理などのためのTensorRTソフトウェアライブラリが含まれています。全体の[Jetsonソフトウェアスタック](https://developer.nvidia.com/embedded/develop/software)と、Seeed Edge AIパートナーが提供する[高速で堅牢なAIアプリケーションの構築](https://wiki.seeedstudio.com/ja/Jetson-AI-developer-tools)のための様々な[開発者ツール](https://wiki.seeedstudio.com/ja/Jetson-AI-developer-tools)をサポートしています。

## 注目すべき機能

- 128個のNVIDIA CUDA®コア – 0.5 TFLOPS（FP16）を提供し、画像分類、物体検出、セグメンテーション、音声処理などのアプリケーション向けのAIフレームワークとモデルを実行します。
- Armv8プロセッサを搭載
- NVIDIA Tegra X1（nvgpu）/統合型を搭載
- 16GBのディスクサイズ
- 4GBメモリ
- 64ビットOSタイプ
- Ubuntu 18.04.5
- Seeed Studio reComputerにはJetPack 4.6システムが既にインストール済み
- SDカードを書き込む必要がなく、オペレーティングシステムが既にインストール済み
- CUDA 10.2.300をサポート
- CUDAアーキテクチャ：5.3
- OpenCVバージョン：4.1.1

[reComputerのハードウェアレイアウトについて詳しく学ぶ](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Hardware_Layout)

## reComputerのコンポーネント

以下の部品リストが付属しています：

- NVIDIA Jetson Nano x1
- Seed リファレンスキャリアボード x1
- パッシブアルミニウムヒートシンク x1
- アルミニウムケース x1
- 12V電源アダプター x1
- 4x USB 3.0ポート
- 2x HDMIポート
- MIPI-CSIカメラコネクター
- 制御およびUARTヘッダー
- 40ピン拡張ヘッダー（GPIO、I2C、ヘッダー）
- 260ピンSODIMM
- MicroUSB
- ギガビットイーサネットポート
- LEDライト

## ハードウェアセットアップ

開始するには、以下の最小限のコネクターが必要です：

- 電源ケーブル
- Wifiモジュール / ギガビットイーサネットケーブル
- WiFiキーボードとマウス用USBレシーバー
- ディスプレイへのHDMI接続

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/3.jpg" /></div>

## CUDA deviceQueryの実行

```sh
cd /usr/local/cuda/samples/1_Utilities/deviceQuery
sudo make 
./deviceQuery
```

結果は以下の通りです：

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

## reComputer Jetson Nano での Docker の実行

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/4.png" /></div>

[Docker](https://www.docker.com) は、個別のコンテナを作成、共有、実行するためのソフトウェア開発ツールスイートです。これは、アプリケーションとそのすべての依存関係を Docker コンテナの形でパッケージ化するコンテナ化プラットフォームであり、アプリケーションがあらゆる環境でシームレスに動作することを保証します。Docker Container は、特定のアプリケーションや環境をデプロイするために即座に作成できる標準化されたユニットです。

今日、あらゆる種類のアプリケーションを開発することは複雑です。それはコードを書くことよりもはるかに多くのことを含みます。多数のプログラミング言語、Web フレームワーク、複雑なアーキテクチャ、そして各ライフサイクル段階のツール間の不連続なインターフェースがあり、それが膨大な複雑さを生み出しています。Docker はワークフローを簡素化し、加速させる一方で、開発者に各プロジェクトのツール、アプリケーションスタック、デプロイメント環境の選択の自由を与えます。これにより、アプリケーションをインフラストラクチャから分離し、ソフトウェアを迅速に提供できるようになります。

Docker は、Jetson Nano を搭載した開発キットである reComputer J1020 で公式にサポートされています。このキットには、デフォルトで最新バージョンの Docker がプリインストールされています。以下のコマンドを実行することで、Docker のバージョンを確認できます：

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

## Docker Compose のインストール

reComputer Jetson には Docker Compose がインストールされていません。以下の手順に従って、システムに Docker Compose をインストールできます：

```sh
export DOCKER_COMPOSE_VERSION=2.6.0
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"
apt install python3
apt install python3-pip
pip install docker-compose
```

## CUDA ツールキットの最新バージョンをインストールする

```sh
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/sbsa/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo dpkg -i cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo apt-key add /var/cuda-repo-ubuntu1804-11-3-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```

## Docker ランタイムの検証

```sh
docker info | grep runtime

 Runtimes: nvidia runc io.containerd.runc.v2 io.containerd.runtime.v1.linuxs
```

## 初回のPythonコンテナの実行

以下のコマンドを実行して、シンプルなArmベースのPython Docker イメージをテスト実行してみましょう：

```sh
sudo docker run arm64v8/python:slim ls
```

## JTOP Docker コンテナを使用したCPU、GPU、メモリの監視

このセクションでは、CPU、RAM、GPUを監視するためのシステム監視ユーティリティの設定方法を説明します。JTOPユーティリティを使用します。Jtopは、ターミナル上で動作するシステム監視ユーティリティで、reComputer Jetson Nanoキットの状態、CPU、RAM、GPUの状態と周波数をリアルタイムで確認・制御できます。このユーティリティをコンテナ化する方法を説明します。それでは始めましょう –

まず、以下の内容でDockerfileを作成します：

```sh
FROM python:3-alpine

RUN apk update \

    && apk --no-cache add bash \

    && pip install jetson-stats \

    && rm -rf /var/cache/apk/*
```

最初の行では、ベースイメージとして python:3-alpine を選択していることが示されています。2行目では jetson-stats と依存パッケージをインストールしています。

## JTOP Docker イメージのビルド

docker build CLI を使用して Docker イメージをビルドします

```sh
docker build -t ajeetraina/jetson-stats-nano .
```

## JTOP Docker コンテナの実行

–gpus をパラメータとして渡し、jtop ソケットにマウントして Docker コンテナを実行する時が来ました。

```sh
docker run --rm -it --gpus all -v /run/jtop.sock:/run/jtop.sock ajeetraina/jetson-stats-nano jtop
```

次の結果が表示されます：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/jetson-docker/5.png" /></div>

次のブログ投稿では、Dockerコンテナ内で動作するOpenDatacamを使用して車両識別を実装する方法を紹介します。お楽しみに！

以下のチュートリアル付きアプリケーション例もぜひご確認ください！

- [Edge Impulseによる歩行者検出](https://www.edgeimpulse.com/blog/recognizing-your-blind-spots-pedestrian-detection-system-with-nvidia-jetson-nano)
- [ヘルメット検出](https://www.seeedstudio.com/blog/2022/03/03/deploy-hard-hat-detection-for-enforcing-workplace-safety)とカスタムPPE検出の構築
- [alwaysAIによる姿勢推定](https://alwaysai.co/blog/using-pose-estimation-on-the-jetson-nano-with-alwaysai)
- [NVIDIA Deepstream IoTを使用した視覚的異常検出](https://developer.nvidia.com/gtc/2020/video/s22675-vid)
- [小売店商品検出](https://www.seeedstudio.com/blog/2022/06/08/retail-store-items-detection-using-yolov5-roboflow-and-node-red)
- [山火事検出](https://github.com/Seeed-Studio/node-red-contrib-ml)
- [動物検出](https://github.com/Seeed-Studio/node-red-contrib-ml)

Ajeetをフォローする：

- [Twitter](https://twitter.com/ajeetsraina)
- [LinkedIn](https://www.linkedin.com/in/ajeetsraina)
- [collabnix](https://collabnix.com/author/ajeetraina)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
