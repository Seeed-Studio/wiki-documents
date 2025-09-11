---
description: TensorRTとDeepStream SDKを使用してNVIDIA Jetson上でYOLOv8をデプロイする - データラベル、AIモデルのトレーニング、AIモデルのデプロイ
title: TensorRTとDeepStream SDKを使用したYOLOv8のデプロイ
tags:
  - データラベル
  - AIモデルのトレーニング
  - AIモデルのデプロイ
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/YOLOv8-DeepStream-TRT-Jetson
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# TensorRTとDeepStream SDKを使用してNVIDIA Jetson上でYOLOv8をデプロイする

このガイドでは、トレーニング済みのAIモデルをNVIDIA Jetsonプラットフォームにデプロイし、TensorRTとDeepStream SDKを使用して推論を実行する方法を説明します。ここでは、Jetsonプラットフォーム上で推論性能を最大化するためにTensorRTを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/car.gif" style={{width:1000, height:'auto'}}/></div>

## 前提条件

- UbuntuホストPC（ネイティブまたはVMware Workstation Playerを使用した仮想マシン）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) またはJetPack 4.6以上を実行しているその他のNVIDIA Jetsonデバイス

## JetPackバージョンに対応するDeepStreamバージョン

YOLOv8をDeepStreamと連携させるために、この[DeepStream-YOLO](https://github.com/marcoslucianops/DeepStream-Yolo)リポジトリを使用します。このリポジトリはDeepStreamの異なるバージョンをサポートしているため、正しいDeepStreamバージョンに対応するJetPackバージョンを使用してください。

<table>
  <thead>
    <tr>
      <th>DeepStreamバージョン</th>
      <th>JetPackバージョン</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>5.1.1</td>
    </tr>
    <tr>
      <td>5.1</td>
    </tr>
    <tr>
      <td>6.1.1</td>
      <td>5.0.2</td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>5.0.1 DP</td>
    </tr>
    <tr>
      <td rowSpan={3}>6.0.1</td>
      <td>4.6.3</td>
    </tr>
    <tr>
      <td>4.6.2</td>
    </tr>
    <tr>
      <td>4.6.1</td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>4.6</td>
    </tr>
  </tbody>
</table>

このWikiを検証するために、**DeepStream SDK 6.2**を**JetPack 5.1.1**システムにインストールし、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)上で実行しました。

## JetsonにJetPackをフラッシュする

JetsonデバイスがCUDA、TensorRT、cuDNNなどのSDKコンポーネントを含む[JetPack](https://developer.nvidia.com/embedded/jetpack)システムでフラッシュされていることを確認する必要があります。JetPackをデバイスにフラッシュするには、NVIDIA SDK Managerまたはコマンドラインを使用できます。

Seeed Jetson搭載デバイスのフラッシュガイドについては、以下のリンクを参照してください：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
- [A203キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
- [A205キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01キット](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01キット](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## DeepStreamのインストール

JetsonデバイスにDeepStreamをインストールする方法はいくつかあります。[このガイド](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_Quickstart.html)を参照して詳細を確認できます。ただし、インストールの成功と簡便さを保証するために、SDK Managerを使用してDeepStreamをインストールすることをお勧めします。

SDK Managerを使用してDeepStreamをインストールした場合、システム起動後に以下のコマンドを実行して、DeepStreamの追加依存関係をインストールする必要があります。

```sh
sudo apt install \
libssl1.1 \
libgstreamer1.0-0 \
gstreamer1.0-tools \
gstreamer1.0-plugins-good \
gstreamer1.0-plugins-bad \
gstreamer1.0-plugins-ugly \
gstreamer1.0-libav \
libgstreamer-plugins-base1.0-dev \
libgstrtspserver-1.0-0 \
libjansson4 \
libyaml-cpp-dev
```

## 必要なパッケージのインストール

- **ステップ 1.** Jetsonデバイスのターミナルにアクセスし、pipをインストールしてアップグレードします。

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **ステップ 2.** 以下のリポジトリをクローンします。

```sh
git clone https://github.com/ultralytics/ultralytics.git
```

- **ステップ 3.** `requirements.txt`を開きます。

```sh
cd ultralytics
vi requirements.txt
```

- **ステップ 4.** 以下の行を編集します。この際、編集モードに入るために最初に`i`を押してください。編集後、`ESC`を押して`:wq`と入力し、保存して終了します。

```sh
# torch>=1.7.0
# torchvision>=0.8.1
```

**注意:** 現時点ではtorchとtorchvisionは除外されています。これらは後でインストールします。

- **ステップ 5.** 必要なパッケージをインストールします。

```sh
pip3 install -r requirements.txt
```

インストーラーが**python-dateutil**パッケージの古いバージョンについて警告する場合は、以下のコマンドでアップグレードしてください。

```sh
pip3 install python-dateutil --upgrade
```

## PyTorchとTorchvisionのインストール

PyTorchとTorchvisionはpipからインストールすることができません。なぜなら、これらは**ARM aarch64アーキテクチャ**に基づくJetsonプラットフォームでは互換性がないためです。そのため、事前にビルドされたPyTorchのpipホイールを手動でインストールし、Torchvisionをソースからコンパイル/インストールする必要があります。

[このページ](https://forums.developer.nvidia.com/t/pytorch-for-jetson)を訪問して、すべてのPyTorchとTorchvisionのリンクにアクセスしてください。

以下は、JetPack 5.0以降でサポートされているバージョンの一部です。

**PyTorch v1.11.0**

JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0)でPython 3.8をサポート

**ファイル名:** torch-1.11.0-cp38-cp38-linux_aarch64.whl  
**URL:** https://nvidia.box.com/shared/static/ssf2v7pf5i245fk4i0q926hy4imzs2ph.whl

**PyTorch v1.12.0**

JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0)でPython 3.8をサポート

**ファイル名:** torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl  
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl

- **ステップ 1.** 以下の形式で、JetPackバージョンに応じてtorchをインストールします。

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

例えば、ここでは**JP5.0.2**を使用しているため、**PyTorch v1.12.0**を選択します。

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl -O torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
pip3 install torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
```

- **ステップ 2.** インストールしたPyTorchのバージョンに応じてtorchvisionをインストールします。例えば、PyTorch v1.12.0を選択した場合、Torchvision v0.13.0を選択する必要があります。

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.13.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
```

以下は、PyTorchバージョンに応じてインストールする必要があるtorchvisionバージョンのリストです：

- PyTorch v1.11 - torchvision v0.12.0
- PyTorch v1.12 - torchvision v0.13.0

より詳細なリストについては、[こちらのリンク](https://github.com/pytorch/vision/blob/main/README.rst)を確認してください。

## YOLOv8 用 DeepStream 設定

- **ステップ 1.** 以下のリポジトリをクローンします

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **ステップ 2.** リポジトリを以下のコミットにチェックアウトします

```sh
cd DeepStream-Yolo
git checkout 68f762d5bdeae7ac3458529bfe6fed72714336ca
```

- **ステップ 3.** **DeepStream-Yolo/utils** 内の **gen_wts_yoloV8.py** を **ultralytics** ディレクトリにコピーします

```sh
cp utils/gen_wts_yoloV8.py ~/ultralytics
```

- **ステップ 4.** ultralytics リポジトリ内で、[YOLOv8 リリース](https://github.com/ultralytics/assets/releases/) から **pt ファイル**をダウンロードします（例：YOLOv8s）

```sh
wget https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt
```

**注意:** カスタムモデルを使用することも可能ですが、エンジンを正しく生成するために **cfg** および **weights/wts** ファイル名に YOLO モデル参照 **(yolov8_)** を含めることが重要です。

- **ステップ 5.** cfg、wts、labels.txt（利用可能な場合）ファイルを生成します（例：YOLOv8s）

```sh
python3 gen_wts_yoloV8.py -w yolov8s.pt
```

**注意:** 推論サイズを変更する場合（デフォルト: 640）

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

例：1280の場合

-s 1280
または
-s 1280 1280
```

- **ステップ 6.** 生成された **cfg**、**wts**、および **labels.txt**（生成された場合）ファイルを **DeepStream-Yolo** フォルダにコピーします

```sh
cp yolov8s.cfg ~/DeepStream-Yolo
cp yolov8s.wts ~/DeepStream-Yolo
cp labels.txt ~/DeepStream-Yolo
```

- **ステップ 7.** **DeepStream-Yolo** フォルダを開き、ライブラリをコンパイルします

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo  # DeepStream 6.2/ 6.1.1 / 6.1 用
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo  # DeepStream 6.0.1 / 6.0 用
```

- **ステップ 8.** モデルに応じて **config_infer_primary_yoloV8.txt** ファイルを編集します（例：80クラスの YOLOv8s）

```sh
[property]
...
custom-network-config=yolov8s.cfg
model-file=yolov8s.wts
...
num-detected-classes=80
...
```

- **ステップ 9.** **deepstream_app_config.txt** ファイルを編集します

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV8.txt
```

- **ステップ 10.** **deepstream_app_config.txt** ファイル内のビデオソースを変更します。以下のようにデフォルトのビデオファイルがロードされます

```sh
...
[source0]
...
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
```

## 推論の実行

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-1.gif" style={{width:1000, height:'auto'}}/></div>

上記の結果は、Jetson AGX Orin 32GB H01 キットで FP32 と YOLOv8s 640x640 を使用して実行されています。FPS は約 60 ですが、これは実際の FPS ではありません。**deepstream_app_config.txt** ファイル内の **[sink0]** セクションで **type=2** を設定すると、FPS はモニターのリフレッシュレート（今回使用したモニターは 60Hz）に制限されます。ただし、この値を **type=1** に変更すると、最大 FPS を取得できますが、ライブ検出出力は表示されません。

同じビデオソースと上記と同じモデルを使用し、**[sink0]** 内の **type=1** に変更した後、以下の結果が得られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-no-screen.gif" style={{width:1000, height:'auto'}}/></div>

ご覧の通り、約 139 FPS を取得でき、これが実際の FPS 値に相当します。

## INT8 キャリブレーション

推論に INT8 精度を使用したい場合は、以下の手順に従ってください。

- **ステップ 1.** OpenCV をインストールします

```sh
sudo apt-get install libopencv-dev
```

- **ステップ 2.** OpenCV サポートを有効にして **nvdsinfer_custom_impl_Yolo** ライブラリをコンパイル/再コンパイルします

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # DeepStream 6.2/ 6.1.1 / 6.1 用
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # DeepStream 6.0.1 / 6.0 用
```

- **ステップ 3.** COCO データセットの場合、[val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing) をダウンロードして解凍し、**DeepStream-Yolo** フォルダに移動します

- **ステップ 4.** キャリブレーション画像用の新しいディレクトリを作成します

```sh
mkdir calibration
```

- **ステップ 5.** 以下を実行して、COCO データセットからランダムに 1000 枚の画像を選択し、キャリブレーションを実行します

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**注意:** NVIDIA は、良好な精度を得るために少なくとも 500 枚の画像を推奨しています。この例では、より高い精度を得るために 1000 枚の画像を選択しています（画像が多いほど精度が向上します）。INT8_CALIB_BATCH_SIZE の値を大きくすると、精度が向上し、キャリブレーション速度が速くなります。GPU メモリに応じて設定してください。たとえば、2000 枚の画像の場合は `head -2000` を使用します。このプロセスには時間がかかる場合があります。

- **ステップ 6.** 選択したすべての画像を含む **calibration.txt** ファイルを作成します

```sh
realpath calibration/*jpg > calibration.txt
```

- **ステップ 7.** 環境変数を設定します

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **ステップ 8.** **config_infer_primary_yoloV8.txt** ファイルを更新します

以下を

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

次のように変更します

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **ステップ 9.** 推論を実行する前に、**deepstream_app_config.txt** ファイルの **[sink0]** セクションで **type=2** を設定して、最大 FPS パフォーマンスを得るようにします。

- **ステップ 10.** 推論を実行します

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/2.png" style={{width:1000, height:'auto'}}/></div>

ここでは、約 350 FPS の値を得ることができます！

## マルチストリーム設定

NVIDIA DeepStream を使用すると、単一の設定ファイルで簡単に複数のストリームを設定し、マルチストリームのビデオ分析アプリケーションを構築できます。この wiki の後半では、高 FPS パフォーマンスを持つモデルがマルチストリームアプリケーションでどのように役立つか、いくつかのベンチマークとともに説明します。

ここでは、9 ストリームを例として取り上げます。**deepstream_app_config.txt** ファイルを変更します。

- **ステップ 1.** **[tiled-display]** セクション内で、行と列を 3 と 3 に変更し、3x3 グリッドで 9 ストリームを表示できるようにします

```sh
[tiled-display]
rows=3
columns=3
```

- **ステップ 2.** **[source0]** セクション内で **num-sources=9** を設定し、さらに **uri** を追加します。ここでは、現在のサンプルビデオファイルを 8 回複製して合計 9 ストリームを作成します。ただし、アプリケーションに応じて異なるビデオストリームに変更することもできます

```sh
[source0]
enable=1
type=3
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
num-sources=9
```

次に、**deepstream-app -c deepstream_app_config.txt** コマンドでアプリケーションを再実行すると、以下の出力が表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/7.jpg" style={{width:1000, height:'auto'}}/></div>

## trtexec ツール

サンプルディレクトリには、[trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec) というコマンドラインラッパーツールが含まれています。trtexec は、独自のアプリケーションを開発することなく TensorRT を使用するためのツールです。trtexec ツールには以下の3つの主な目的があります：

- ランダムまたはユーザー提供の入力データを使用してネットワークをベンチマークする。
- モデルからシリアライズされたエンジンを生成する。
- ビルダーからシリアライズされたタイミングキャッシュを生成する。

ここでは、trtexec ツールを使用して、異なるパラメータでモデルを迅速にベンチマークすることができます。しかし、まず最初に ONNX モデルが必要です。この ONNX モデルは ultralytics yolov8 を使用して生成できます。

- **ステップ 1.** 次のコマンドで ONNX を構築します：

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **ステップ 2.** 次のように trtexec を使用してエンジンファイルを構築します：

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

例えば：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

これにより、以下のようなパフォーマンス結果が出力され、**.engine** ファイルが生成されます。デフォルトでは、ONNX を **FP32** 精度の TensorRT 最適化ファイルに変換し、以下のような出力が得られます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/3.png" style={{width:1000, height:'auto'}}/></div>

ここでは、平均レイテンシを 7.2ms として計算し、これは 139FPS に相当します。これは、以前の DeepStream デモで得られたパフォーマンスと同じです。

しかし、より高いパフォーマンスを提供する **INT8** 精度が必要な場合は、以下のように上記のコマンドを実行できます：

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/4.jpg" style={{width:1000, height:'auto'}}/></div>

ここでは、平均レイテンシを 3.2ms として計算し、これは 313FPS に相当します。

## YOLOv8 ベンチマーク結果

[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)、[AGX Orin 32GB H01 Kit](https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html)、および [reComputer J2021](https://www.seeedstudio.com/reComputer-J2021-p-5438.html) 上で動作する異なる YOLOv8 モデルのパフォーマンスベンチマークを実施しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/14.png" style={{width:1000, height:'auto'}}/></div>

YOLOv8 モデルを使用したパフォーマンスベンチマークの詳細については、[こちらのブログ](https://www.seeedstudio.com/blog/2023/03/30/yolov8-performance-benchmarks-on-nvidia-jetson-devices)をご覧ください。

## マルチストリームモデルベンチマーク

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg" style={{width:1000, height:'auto'}}/></div>

reComputer Jetson Orin シリーズ製品で複数の DeepStream アプリケーションを実行した後、YOLOv8s モデルを使用してベンチマークを行いました。

- 最初に、単一の AI モデルを使用し、同じ AI モデルで複数のストリームを実行しました。
- 次に、複数の AI モデルを使用し、複数のストリームを複数の AI モデルで実行しました。

これらのベンチマークは以下の条件下で実施されました：

- YOLOv8s 640x640 画像入力
- UI を無効化
- 最大電力および最大パフォーマンスモードを有効化

<iframe src="https://jetson-camera-selection-tool.seeedstudio.com/" width="100%" height="690px"></iframe>

これらのベンチマークから、INT8 精度の単一 YOLOv8s モデルを使用した場合、最高性能の Orin NX 16GB デバイスでは約 40 台のカメラを約 5fps で使用できることがわかります。一方、各ストリームに対して複数の YOLOv8s モデルを使用した場合、約 11 台のカメラを約 15fps で使用できます。マルチモデルアプリケーションでは、デバイスの RAM 制限によりカメラの数が減少します。各モデルが大量の RAM を消費するためです。

まとめると、YOLOv8 モデルのみを使用してアプリケーションを実行しない場合、<strong> Jetson Orin Nano 8GB は 4～6 ストリームをサポートでき、Jetson Orin NX 16GB は最大 16～18 ストリームを管理できます。</strong> ただし、実際のアプリケーションでは RAM リソースが使用されるため、これらの数値は減少する可能性があります。そのため、これらの数値をガイドラインとして使用し、特定の条件下で独自のテストを実施することをお勧めします。

## リソース

- [YOLOv8 ドキュメント](https://docs.ultralytics.com)
- [TensorRT ドキュメント](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)
- [DeepStream SDK ドキュメント](https://docs.nvidia.com/metropolis/deepstream/dev-guide)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>