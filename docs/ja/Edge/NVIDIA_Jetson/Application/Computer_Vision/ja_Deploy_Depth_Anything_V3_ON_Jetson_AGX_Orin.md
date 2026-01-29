---
description: このwikiは、Jetson AGX Orinデバイス上でDepth Anything V3をデプロイするための包括的なステップバイステップガイドを提供します。環境設定、主要な依存関係（CUDA、ROS2、TensorRT）のインストール、TensorRTエンジンへのモデル変換、USBカメラ統合によるリアルタイム深度推定をカバーしています。このガイドでは、Depth Anything V3が単一のRGB画像から最小限の計算オーバーヘッドで高品質な深度マップを生成する能力を強調し、エッジデバイス上でのロボティクス、自律ナビゲーション、3D知覚アプリケーションに理想的であることを示しています。
title: Jetson AGX Orin上でDepth Anything V3をデプロイ
keywords:
- Depth Anything V3
- Jetson AGX Orin
- 深度推定
- TensorRT
- ROS2
- コンピュータビジョン
- ロボティクス
- 3D知覚
- USBカメラ
- エッジAI
image: https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp
slug: /ja/deploy_depth_anything_v3_jetson_agx_orin
last_update:
  date: 2026-01-09
  author: Zibo
---

<div align="center">
  <img width="600" src="https://github.com/ByteDance-Seed/Depth-Anything-3/raw/main/assets/images/demo320-2.gif"/>
</div>

## はじめに

<div style={{ textAlign: "justify" }}>
[Depth Anything V3](https://github.com/ByteDance-Seed/depth-anything-3)は、単一のRGB画像から高品質な深度マップを生成することで3D知覚を革新する最先端の単眼深度推定モデルです。特殊なハードウェアや複数のカメラ入力を必要とする従来の深度推定手法とは異なり、Depth Anything V3は高度な深層学習技術を活用して、標準的な2D画像のみを使用して正確な深度情報を予測します。これにより、ハードウェアの制約と計算効率が重要な考慮事項となるエッジAIアプリケーションにとって特に価値があります。このwikiでは、リアルタイムロボティクスアプリケーション向けのROS2統合を使用して、Jetson AGX Orin上でDepth Anything V3をデプロイする方法をガイドします。
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 前提条件

- **[reComputer Mini J501 Carrier Board](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)**（Jetson AGX Orin）JetPack 6.2搭載
- USBカメラ
- [ROS2 Humble](https://wiki.seeedstudio.com/ja/install_ros2_humble/)環境がインストール済み


<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/demo.gif"/>
</div>


## 技術的ハイライト

- **高品質単眼深度推定**: Depth Anything V3は、特殊な深度センサーやステレオカメラセットアップを必要とせずに、単一のRGB画像から正確な深度マップを生成します。

- **エッジデプロイメント最適化**: このモデルは、Jetson AGX Orinなどのエッジデバイスでの効率的な推論のために特別に設計されており、最大パフォーマンスのためのTensorRT最適化を備えています。

- **リアルタイム処理**: 高解像度画像をリアルタイムで処理する能力があり、自律ナビゲーション、障害物回避、ロボット操作タスクに適しています。

- **ROS2統合**: ロボットシステムへのシームレスな統合のために、深度マップとポイントクラウド配信を備えたネイティブROS2 Humbleサポートを提供します。

- **柔軟な入力サポート**: USBカメラ、ROSイメージトピック、事前録画されたビデオストリームなど、さまざまな入力ソースで動作します。

## 環境設定

**ステップ1.**依存関係のインストール

```bash
sudo apt update
sudo apt install -y \
    build-essential \
    cmake \
    git \
    libopencv-dev \
    python3-pip \
    python3-colcon-common-extensions \
    v4l-utils
```

**ステップ2.** Python依存関係のインストール

```bash
pip3 install numpy opencv-python
```

**ステップ3.** CUDA環境変数の設定

```bash
# Add CUDA environment variables to .bashrc
echo '
# CUDA Environment
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc

# Reload shell configuration
source ~/.bashrc

# Verify CUDA installation
nvcc --version
```
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/nvcc.png"/>
</div>


**ステップ4.** ROS2 USBカメラパッケージのインストール

```bash
# Install USB camera driver for ROS2
sudo apt install -y ros-humble-usb-cam

# Install additional ROS2 dependencies
sudo apt install -y ros-humble-cv-bridge
sudo apt install -y ros-humble-image-transport
sudo apt install -y ros-humble-image-geometry
sudo apt install -y ros-humble-cv-bridge ros-humble-image-transport ros-humble-rviz2

```

**ステップ5.** Depth Anything V3 ROS2環境のセットアップ

```bash
# Clone the repository
git clone https://github.com/zibochen6/ros2-depth-anything-v3-trt.git

# Navigate to the project directory
cd ros2-depth-anything-v3-trt
```

**ステップ6.** ROS2パッケージのビルド

```bash
# Build the depth_anything_v3 package with Release configuration
colcon build --packages-select depth_anything_v3 --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source install/setup.bash
```

**ステップ7.** TensorRTエンジンの生成

:::note
エンジンファイルを生成する前に、[Depth Anything V3の`.onnx`モデル](https://huggingface.co/TillBeemelmanns/Depth-Anything-V3-ONNX)を事前にダウンロードし、ros2-depth-anything-v3-trt/onnxディレクトリに配置する必要があります。
:::

```bash
# Make the engine generation script executable
chmod +x generate_engines.sh

# Generate TensorRT engines from ONNX models
./generate_engines.sh onnx
```
`.engine`ファイルが生成されている間、しばらくお待ちください。変換が完了すると、`onnx`ディレクトリに以下のように2つのファイルが作成されます。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/engine.png"/>
</div>


## 深度推定の実行

### 深度推定用カメラ

**ステップ1.** USBカメラの接続

USBカメラをJetson AGX Orinデバイスに接続します。カメラが検出されていることを確認してください：

```bash
# Check if USB camera is detected
ls /dev/video*
```
**期待される出力：**

```
/dev/video0  /dev/video1
```

**ステップ2.** カメラキャリブレーション

`v4l2_camera`パッケージは、Linux Video4Linux2（V4L2）APIとROS 2トピック間のブリッジとして機能し、キャリブレーションパイプラインで簡単に使用できる画像とカメラ情報メッセージを配信します。

カメラキャリブレーションパッケージのインストール：

```bash
# Install Camera Calibration Package
sudo apt install ros-humble-camera-calibration

# v4l2_camera is the official ROS2 maintained node that can directly publish USB camera images
sudo apt install ros-${ROS_DISTRO}-v4l2-camera
```

カメラノードの起動：

```bash
# Launch camera node
ros2 run v4l2_camera v4l2_camera_node \
  --ros-args \
  -p image_size:=[640,480] \
  -p pixel_format:=YUYV
```

デフォルトで配信されるトピックは：

- `/image_raw` - 生カメラ画像
- `/camera` - カメラ情報

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/image.png" />
</div>

カメラキャリブレーションの実行：

```bash
# In another terminal
ros2 run camera_calibration cameracalibrator \
  --size 8x6 \
  --square 0.025 \
  --fisheye-recompute-extrinsicsts \
  --fisheye-fix-skew \
  --ros-args --remap image:=/image_raw --remap camera:=/v4l2_camera
```

:::note
- `--size 8x6`は内側の角の数を指します（8×6 = 9×7グリッドの48角）
- `--square 0.025`は正方形のサイズをメートル単位で指します（25mm）
- `CALIBRATE`ボタンが点灯するまで、カメラを動かしてさまざまな角度から画像をキャプチャしてください

:::

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal2.png" />
</div>

キャリブレーションが成功すると、ターミナルで以下のようなカメラパラメータが取得されます：

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal3.png" />
</div>

カメラキャリブレーションについては、[このwiki](https://wiki.seeedstudio.com/ja/pycuvslam_recomputer_robotics/#camera-calibration)を参照してください。
キャリブレーションされたパラメータを`camera_info_example.yaml`ファイルに書き込みます

**ステップ3.** USBカメラノードの起動

GMSLカメラの魚眼歪みを補正するために、キャリブレーションパラメータを`camera_info_example.yaml`ファイルに保存します。その後、リアルタイム深度推定のために以下のコマンドを実行します：
```bash
#Start the script for camera depth estimation
CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1 ./run_camera_depth.sh
```

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/3Khm3OpLg3M" title="Deploy Depth Anything V3 on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### 深度推定用ビデオ

**ステップ1.** ビデオファイルの準備

深度推定用のビデオファイルを準備します。

**ステップ2.** ビデオ深度推定ノードの起動

```bash
#Start the script for video depth estimation
./run_video_depth.sh
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3.gif"/>
</div>


## 参考文献

- [Depth Anything V3 GitHubリポジトリ](https://github.com/DepthAnything/Depth-Anything-V3)
- [ROS2 Depth Anything V3 TRTリポジトリ](https://github.com/ika-rwth-aachen/ros2-depth-anything-v3-trt)
- [TensorRTドキュメント](https://developer.nvidia.com/tensorrt)
- [ROS2 Humbleドキュメント](https://docs.ros.org/en/humble/)


## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

