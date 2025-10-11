---
description: NVIDIA Jetson Orin Nano/Orin NXを搭載したreComputer Miniは、PX4フライトコントローラー、ROS 2、Orbbec Gemini 2 3Dカメラを統合してリアルタイム目標追跡を実行するドローン向けに設計されたコンパクトなAIコンピューターです。このセットアップでは、PX4のROS2通信の設定、同期RGB-DデータをキャプチャするためのGemini 2 Python SDKのインストール、最適化された検出のためにTensorRTでエクスポートされたYOLOv11nモデルの使用が含まれます。ROS2パッケージは、正確なマルチオブジェクト追跡のためにYOLO検出とByteTrackアルゴリズムを組み合わせ、深度データによってドローンと目標間の距離を推定し、飛行中の精密なリアルタイムドローン追跡を可能にします。
title: reComputer JetsonとPX4による物体追跡
keywords:
- NVIDIA
- PX4
- ROS
- Jetson
- reComputer
- object tracking
- distance measure
- drone
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /ja/object_tracking_with_reComputer_jetson_and_pX4
last_update:
  date: 8/08/2025
  author: Zibo
---

## はじめに

<div style={{ textAlign: "justify" }}>
reComputer Miniは、NVIDIA Jetson Orin Nano/Orin NXモジュールを搭載した小型AIコンピューターで、最大100 TOPSのAI性能を提供します。
コンパクトな設計により、ドローンに搭載してAIタスクを処理するのに非常に適しています。このWikiでは、reComputerとpx4を使用してドローンでリアルタイム目標追跡を実現する方法を紹介します。
</div>

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 前提条件

- reComputerシリーズ製品
- PX4フライトコントローラー
- Jetson Pack 6.2と[ROS 2 Humble](https://wiki.seeedstudio.com/ja/install_ros2_humble/)がインストール済み
- [Orbbec Gemini 2 3Dカメラ](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## ROS2のPX4通信環境の設定

JetsonでドローンのState監視を実装するには、まず[このwiki](https://wiki.seeedstudio.com/ja/control_px4_with_recomputer_jetson/)を参照してPX4のROS2通信環境を設定してください。

## Gemini 2 Python SDKのセットアップ

Orbbec Gemini 2は、ロボティクス、3Dスキャン、コンピュータービジョンなどのアプリケーション向けに同期された深度とカラーデータをキャプチャする高精度RGB-D 3Dカメラです。

**ステップ1.** 依存関係をインストールしてリポジトリをクローンします：

```bash
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
#install pybind11
pip install pybind11
#clone the repository
git clone https://github.com/orbbec/pyorbbecsdk.git
#Install the necessary packages
cd pyorbbecsdk
pip install -r requirements.txt
```

**ステップ 2.** プロジェクトをビルドしてインストールします：

```bash
mkdir build && cd build
#Build the project
cmake \
  -Dpybind11_DIR=`pybind11-config --cmakedir` \
  -DPython3_EXECUTABLE=/usr/bin/python3.10 \
  -DPython3_INCLUDE_DIR=/usr/include/python3.10 \
  -DPython3_LIBRARY=/usr/lib/aarch64-linux-gnu/libpython3.10.so \
  ..
make -j4
sudo make install
#apply the python SDK
pip install wheel
python setup.py bdist_wheel
pip install dist/*.whl
#Configure udev_rules
export PYTHONPATH=$PYTHONPATH:$(pwd)/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

## ROS2でpx4が公開するトピックを読み取る

PX4コントローラーをJetsonのUART1シリアルポートに接続します
<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

ターミナルを1つ開き、jetson上でAgentを起動します：

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

以下のコマンドを使用して別のターミナルを開くことで、px4によって公開されているステータストピックを確認できます：

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
以下のトピックの内容を読むことで、ドローンの基本的なステータス情報を取得できます：

- /fmu/out/failsafe_flags -> 現在のフェイルセーフ状態のインジケーター。
- /fmu/out/sensor_combined -> 同期された生のIMU、磁力計、気圧計データ。
- /fmu/out/timesync_status -> 外部ソースとの時刻同期のステータス。
- /fmu/out/vehicle_attitude -> 四元数としての現在の機体姿勢。
- /fmu/out/vehicle_control_mode -> 現在アクティブな制御およびナビゲーションモード。
- /fmu/out/vehicle_local_position -> ローカルNEDフレームでの位置と速度。
- /fmu/out/vehicle_odometry -> 完全な6自由度姿勢と速度データ。
- /fmu/out/vehicle_status -> 機体の全体的な状態、モード、準備状況。

:::

## オブジェクト検出環境の迅速な設定

**ステップ1.** お使いのJetpackバージョンに応じて、[PyTorchのインストール](https://wiki.seeedstudio.com/ja/install_torch_on_recomputer/)とTorchvisionについては、このwikiを参照してください。

**ステップ2.** 必要な依存関係とパッケージをインストールします：

```bash
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
pip install ultralytics
pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
pip install numpy==1.23.5
```

**ステップ3.** YOLOv11nの事前学習済みモデルをダウンロードします：

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**ステップ4.** TensorRT推論を使用するためのエンジンモデルをエクスポートします：

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## ターゲット追跡用のROS2パッケージをインストールする

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# build the package
colcon build
```

:::note
検出ノードを実行する前に、以前に生成されたエンジンモデルファイルを `/ROS2-package-for-target-tracking/models` ディレクトリに移動する必要があります。さらに、ワークスペースのsrcディレクトリに `px4_msgs` と `px4_ros_com` パッケージ（[このwiki](https://wiki.seeedstudio.com/ja/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package)を参照）をクローンする必要があります。
srcディレクトリの構造は以下のようになります：

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

ターゲット追跡の通常動作のためにROS2パッケージを実行するには、ターミナルを開いてMicroXRCEAgentを起動する必要があります：

```bash
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600

# Open another terminal and run the detection node
cd /path/to/your/work_space
source install/setup.bash
ros2 run detect detect
```

<div class="video-container">
  <iframe width="853" height="480" src="https://www.youtube.com/embed/YG1XmZL6kpU" title="🚁 Autonomous Drone Target Tracking by reComputer Mini" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
上記の動画は、ドローンでターゲット追跡を実現する例を示しています。ターゲット検出を通じてターゲットを特定し、ByteTrackターゲット追跡アルゴリズムを使用して特定のターゲットを正確に追跡します。同時に、深度画像を使用してドローンとターゲット間の距離を推定します。
</div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
