---
description: "Jetson AGX Orin 上で Depth Anything V3 をデプロイ：CUDA と ROS 2 のセットアップ、ONNX から TensorRT への変換、およびビデオからのリアルタイム深度推定。"
title: Jetson AGX Orin 上で Depth Anything V3 をデプロイする
keywords:
  - Depth Anything V3
  - Jetson AGX Orin
  - Depth Estimation
  - TensorRT
  - ROS2
  - Computer Vision
  - Robotics
  - 3D Perception
  - USB Camera
  - Edge AI
image: https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp
slug: /deploy_depth_anything_v3_jetson_agx_orin
last_update:
  date: 2026-01-09
  author: Zibo
createdAt: '2026-01-09'
updatedAt: '2026-01-16'
url: https://wiki.seeedstudio.com/ja/deploy_depth_anything_v3_jetson_agx_orin/
---

<div align="center">
  <img alt="Depth Anything 3 sample output: the input frame, a colour depth map and the resulting point cloud" width="600" src="https://github.com/ByteDance-Seed/Depth-Anything-3/raw/main/assets/images/demo320-2.gif"/>
</div>

## はじめに

<div style={{ textAlign: "justify" }}>
[Depth Anything V3](https://github.com/ByteDance-Seed/depth-anything-3) は、単一の RGB 画像から深度を推定します。そのため、ロボットはカメラ 1 台だけで、ステレオリグや深度センサを使わずに高密度な深度マップを取得できます。Jetson AGX Orin 上では、このモデルを TensorRT エンジンに変換し、ROS 2 トピック上に深度をパブリッシュします。これを下流の検出器やプランナが利用できます。以下のセクションでは、CUDA と ROS 2 のセットアップ、ONNX から TensorRT エンジンへの変換、そしてカメラ入力およびビデオ入力での実行方法を説明します。
</div>

<div align="center">
    <img alt="reComputer Mini J501 carrier board for Jetson AGX Orin, product photo" width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 前提条件

- **[reComputer Mini J501 Carrier Board](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)**（Jetson AGX Orin）と JetPack 6.2
- USB カメラ
- [ROS2 Humble](https://wiki.seeedstudio.com/ja/install_ros2_humble/) 環境がインストールされていること


<div align="center">
    <img alt="Real-time depth estimation from a USB camera running on the reComputer Mini J501" width={700}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/demo.gif"/>
</div>


## 技術ハイライト

- **高品質な単眼深度推定**：Depth Anything V3 は、専用の深度センサやステレオカメラ構成を必要とせず、単一の RGB 画像から高精度な深度マップを生成します。

- **エッジデバイス向けに最適化**：このモデルは Jetson AGX Orin のようなエッジデバイス上で効率的に推論できるよう特別に設計されており、TensorRT による最適化で最大限の性能を引き出します。

- **リアルタイム処理**：高解像度画像をリアルタイムで処理できるため、自律走行、障害物回避、ロボットマニピュレーションなどのタスクに適しています。

- **ROS2 との統合**：深度マップおよびポイントクラウドをパブリッシュする ROS2 Humble ネイティブサポートを提供し、ロボットシステムへのシームレスな統合を実現します。

- **柔軟な入力サポート**：USB カメラ、ROS イメージトピック、事前に録画したビデオストリームなど、さまざまな入力ソースで動作します。

## 環境構築

**Step 1.** 依存パッケージをインストールする

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

**Step 2.** Python の依存パッケージをインストールする

```bash
pip3 install numpy opencv-python
```

**Step 3.** CUDA の環境変数を設定する

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
    <img alt="nvcc --version output confirming the CUDA toolkit is on PATH" width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/nvcc.png"/>
</div>


**Step 4.** ROS2 USB カメラパッケージをインストールする

```bash
# Install USB camera driver for ROS2
sudo apt install -y ros-humble-usb-cam

# Install additional ROS2 dependencies
sudo apt install -y ros-humble-cv-bridge
sudo apt install -y ros-humble-image-transport
sudo apt install -y ros-humble-image-geometry
sudo apt install -y ros-humble-cv-bridge ros-humble-image-transport ros-humble-rviz2

```

**Step 5.** Depth Anything V3 ROS2 環境をセットアップする

```bash
# Clone the repository
git clone https://github.com/zibochen6/ros2-depth-anything-v3-trt.git

# Navigate to the project directory
cd ros2-depth-anything-v3-trt
```

**Step 6.** ROS2 パッケージをビルドする

```bash
# Build the depth_anything_v3 package with Release configuration
colcon build --packages-select depth_anything_v3 --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source install/setup.bash
```

**Step 7.** TensorRT エンジンを生成する

:::note
エンジンファイルを生成する前に、あらかじめ [Depth Anything V3 の `.onnx` モデル](https://huggingface.co/TillBeemelmanns/Depth-Anything-V3-ONNX) をダウンロードし、ros2-depth-anything-v3-trt/onnx ディレクトリに配置しておく必要があります。
:::

```bash
# Make the engine generation script executable
chmod +x generate_engines.sh

# Generate TensorRT engines from ONNX models
./generate_engines.sh onnx
```
`.engine` ファイルの生成には時間がかかる場合があります。変換が完了すると、`onnx` ディレクトリ内に次のように 2 つのファイルが作成されます。

<div align="center">
    <img alt="onnx directory listing the generated TensorRT .engine files next to the ONNX models" width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/engine.png"/>
</div>


## 深度推定の実行

### カメラを用いた深度推定

**Step 1.** USB カメラを接続する

USB カメラを Jetson AGX Orin デバイスに接続します。次のコマンドでカメラが認識されているか確認します：

```bash
# Check if USB camera is detected
ls /dev/video*
```
**期待される出力：**

```
/dev/video0  /dev/video1
```

**Step 2.** カメラキャリブレーション

`v4l2_camera` パッケージは、Linux の Video4Linux2 (V4L2) API と ROS 2 トピックの間のブリッジとして機能し、キャリブレーションパイプラインで簡単に利用できる画像およびカメラ情報メッセージをパブリッシュします。

カメラキャリブレーションパッケージをインストールします：

```bash
# Install Camera Calibration Package
sudo apt install ros-humble-camera-calibration

# v4l2_camera is the official ROS2 maintained node that can directly publish USB camera images
sudo apt install ros-${ROS_DISTRO}-v4l2-camera
```

カメラノードを起動します：

```bash
# Launch camera node
ros2 run v4l2_camera v4l2_camera_node \
  --ros-args \
  -p image_size:=[640,480] \
  -p pixel_format:=YUYV
```

デフォルトでパブリッシュされるトピックは次のとおりです：

- `/image_raw` - 生のカメラ画像
- `/camera` - カメラ情報

<div align="center">
    <img alt="v4l2_camera node running with the /image_raw and /camera topics published" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/image.png" />
</div>

カメラキャリブレーションを実行します：

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
- `--size 8x6` は内側のコーナー数を表します（9×7 グリッドに対して 8×6 = 48 コーナー）
- `--square 0.025` はマス目 1 辺の長さをメートル単位で表します（25mm）
- カメラを動かしてさまざまな角度からチェッカーボードを撮影し、`CALIBRATE` ボタンが有効になるまで続けます

:::

<div align="center">
    <img alt="camera_calibrator window with the checkerboard view and the CALIBRATE button" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal2.png" />
</div>

キャリブレーションが成功すると、ターミナルに次のようなカメラパラメータが出力されます：

<div align="center">
    <img alt="Camera intrinsics and distortion coefficients printed after calibration finishes" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal3.png" />
</div>

カメラキャリブレーションについては、[この Wiki](https://wiki.seeedstudio.com/ja/pycuvslam_recomputer_robotics/#カメラキャリブレーション) を参照してください。
キャリブレーションされたパラメータを `camera_info_example.yaml` ファイルに書き込みます。

**Step 3.** USB カメラノードを起動する 

GMSL カメラの魚眼歪みを補正するために、キャリブレーションパラメータを `camera_info_example.yaml` ファイルに保存します。その後、次のコマンドを実行してリアルタイム深度推定を行います：
```bash
#Start the script for camera depth estimation
CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1 ./run_camera_depth.sh
```

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/3Khm3OpLg3M" title="Deploy Depth Anything V3 on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### ビデオを用いた深度推定

**Step 1.** ビデオファイルを準備する

深度推定用のビデオファイルを準備します。

**Step 2.** ビデオ深度推定ノードを起動する 

```bash
#Start the script for video depth estimation
./run_video_depth.sh
```

<div align="center">
    <img alt="RViz showing the depth map, the camera view and the point cloud built from the video frame" width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3.gif"/>
</div>


## 参考資料

- [Depth Anything V3 GitHub Repository](https://github.com/DepthAnything/Depth-Anything-V3)
- [ROS2 Depth Anything V3 TRT Repository](https://github.com/ika-rwth-aachen/ros2-depth-anything-v3-trt)
- [TensorRT Documentation](https://developer.nvidia.com/tensorrt)
- [ROS2 Humble Documentation](https://docs.ros.org/en/humble/)


## FAQ

**このビルドはどの JetPack バージョンを対象としていますか？**
Jetson AGX Orin 上の JetPack 6.2 と reComputer Mini J501 キャリアボード、そして ROS 2 Humble を対象としています。TensorRT エンジンはデバイス上で生成されるため、JetPack のバージョンが異なる場合は、ONNX モデルからエンジンを再生成する必要があります。

**深度カメラやステレオリグは必要ですか？**
いいえ。Depth Anything V3 は単一の RGB フレームから深度を予測するため、USB カメラ 1 台で十分です。ただし、この深度は計測信号ではなく見た目から推定されたものなので、プランナに入力する前に、既知の物体と比較して絶対スケールを確認してください。

**ONNX モデルはどこに置けばよいですか？**
`.onnx` ファイルを `ros2-depth-anything-v3-trt/onnx` に配置し、`./generate_engines.sh onnx` を実行します。変換が完了すると、そのディレクトリに 2 つの `.engine` ファイルが生成されます。

**フレーム端の近くでデプスマップが歪んで見えます。何を変更すればよいですか？**
それはレンズ歪みです。`camera_calibrator` を実行し、得られた内部パラメータを `camera_info_example.yaml` に書き込んでから、`CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1` を指定して起動します。

**ライブカメラではなく、録画済みの動画を処理できますか？**
はい。`./run_video_depth.sh` は同じエンジンを動画ファイルに対して実行します。これは、カメラをロボットに取り付ける前に出力品質を確認する、より高速な方法です。

## 関連リソース

- [reComputer での PyCuVSLAM を用いたカメラキャリブレーション](/ja/pycuvslam_recomputer_robotics/)
- [Orbbec デプスカメラと YOLOv11 を組み合わせた距離計測](/ja/yolov11_with_depth_camera/)
- [Jetson 上での効率的なマルチタスクビジョン推論エンジン](/ja/deploy_visual_perception_engine_recomputer/)
- [reComputer Mini J501 製品ページ](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html)
- [ROS 2 Depth Anything V3 TensorRT リポジトリ](https://github.com/zibochen6/ros2-depth-anything-v3-trt)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

