---
description: "reComputer Jetson 上で物体をトラッキングし、その位置を ROS 2 経由で PX4 に送信します：Gemini 2 の深度入力、YOLO 検出、MAVROS 出力。"
title: reComputer Jetson と PX4 を用いた物体追跡
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
slug: /object_tracking_with_reComputer_jetson_and_pX4
sku: 101090144,100071398
last_update:
  date: 8/08/2025
  author: Zibo
createdAt: '2025-08-08'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/object_tracking_with_reComputer_jetson_and_pX4/
---

## はじめに

<div style={{ textAlign: "justify" }}>
reComputer Mini は Jetson Orin Nano または Orin NX モジュールを搭載し、機体に搭載できるコンパクトな筐体で最大 100 TOPS の性能を発揮します。本構成では ROS 2 を介して PX4 と接続し、Gemini 2 のカラー映像に対して ByteTrack を用いた YOLO 検出を実行し、深度フレームを利用して追跡対象がドローンからどれだけ離れているかを計測します。
</div>

<div align="center">
  <img alt="Wi-Fi アンテナ付きの reComputer Mini が 2 台、NVIDIA Jetson Orin Nano / Orin NX のバッジ付き" width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 前提条件

- reComputer シリーズ製品
- PX4 フライトコントローラ
- JetPack 6.2 と [ROS 2 Humble](https://wiki.seeedstudio.com/ja/install_ros2_humble/) がインストール済みであること
- [Orbbec Gemini 2 3D Camera](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## ROS2 の PX4 通信環境を構成する

Jetson 上でドローンの状態監視を行うために、まず [この Wiki](https://wiki.seeedstudio.com/ja/control_px4_with_recomputer_jetson/) を参照して、PX4 用の ROS2 通信環境を構成してください。

## Gemini 2 Python SDK のセットアップ

Orbbec Gemini 2 は高精度な RGB-D 3D カメラで、ロボティクス、3D スキャン、コンピュータビジョンなどの用途向けに、同期された深度データとカラー データを取得できます。

**ステップ 1.** 依存関係をインストールし、リポジトリをクローンします：

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

## ROS2 で PX4 が公開するトピックを読み取る

PX4 コントローラを Jetson の UART1 シリアルポートに接続します

<div align="center">
    <img alt="Micro-XRCE-DDS 接続用に、Jetson の UART1 シリアルポートに配線された PX4 コントローラ" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

1 つ目のターミナルを開き、Jetson 上で Agent を起動します：

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

次のコマンドを使用して別のターミナルを開くと、px4 が公開しているステータストピックを確認できます：

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img alt="/fmu/out/ でフィルタした ros2 topic list に表示される PX4 ステータストピック" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
次のトピックの内容を読むことで、ドローンの基本的なステータス情報を取得できます：

- /fmu/out/failsafe_flags -> 現在のフェイルセーフ状態を示すインジケータ。
- /fmu/out/sensor_combined -> 同期された生の IMU、磁力計、気圧計データ。
- /fmu/out/timesync_status -> 外部ソースとの時刻同期ステータス。
- /fmu/out/vehicle_attitude -> クォータニオンで表される現在の機体姿勢。
- /fmu/out/vehicle_control_mode -> 現在有効な制御モードおよびナビゲーションモード。
- /fmu/out/vehicle_local_position -> ローカル NED 座標系での位置と速度。
- /fmu/out/vehicle_odometry -> 6 自由度の姿勢と速度の完全なデータ。
- /fmu/out/vehicle_status -> 機体の全体的な状態、モード、準備状況。

:::

## 物体検出環境を素早く構成する

**ステップ 1.** 使用している JetPack のバージョンに応じて、この Wiki を参照し [PyTorch をインストール](https://wiki.seeedstudio.com/ja/install_torch_on_recomputer/) し、Torchvision を導入します。

**ステップ 2.** 必要な依存関係とパッケージをインストールします：

```bash
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
pip install ultralytics
pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
pip install numpy==1.23.5
```

**ステップ 3.** YOLOv11n の事前学習済みモデルをダウンロードします：

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**ステップ 4.** TensorRT 推論で使用するためにエンジンモデルをエクスポートします：

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## ターゲットトラッキング用 ROS2 パッケージのインストール

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# build the package
colcon build
```

:::note
検出ノードを実行する前に、先ほど生成したエンジンモデルファイルを `/ROS2-package-for-target-tracking/models` ディレクトリに移動する必要があります。さらに、ワークスペースの src ディレクトリ内に `px4_msgs` と `px4_ros_com` パッケージ（[この Wiki](https://wiki.seeedstudio.com/ja/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package) を参照）をクローンしておく必要があります。

src ディレクトリの構成は次のようになっている必要があります：

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

ターゲットトラッキングを正常に動作させるために ROS2 パッケージを実行するには、ターミナルを 1 つ開き、MicroXRCEAgent を起動する必要があります：

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
上の動画は、ドローンでターゲットトラッキングを実現する例を示しています。ターゲット検出によって対象物を特定し、ByteTrack ターゲットトラッキングアルゴリズムを用いて特定のターゲットを高精度に追跡します。同時に、深度画像を使用してドローンとターゲット間の距離を推定します。
</div>

## FAQ

**Jetson は何を行い、PX4 は何を行いますか？**
Jetson は ByteTrack を用いた YOLO 検出を実行し、Gemini 2 の深度フレームから距離を読み取り、そのターゲット位置を ROS 2 経由で PX4 に送信します。PX4 は機体の飛行を継続して制御しており、この構成はフライトコントローラを置き換えるものではありません。

**PX4 への ROS 2 リンクにはどのシリアルポートを使用しますか？**
`/dev/ttyTHS1` を 921600 ボーで使用し、Micro-XRCE-DDS Agent を介して接続します：`./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600`。最初にエージェントを実行し、その後 2 つ目のターミナルで検出ノードを起動します。

**リンクが確立されていることはどのように確認できますか？**
`ros2 topic list | grep "/fmu/out/"` を実行すると、`vehicle_status`、`vehicle_local_position`、`vehicle_attitude` など PX4 のステータストピックが一覧表示されるはずです。トピックが何も表示されない場合は、問題は検出器ではなく、エージェントまたは配線にあります。

**この構成で使用している JetPack のバージョンはどれですか？**
JetPack 6.2 と ROS 2 Humble に加え、Orbbec Gemini 2 と `./scripts/install_udev_rules.sh` の udev ルールを使用しています。検出ノードは ROS 2 ワークスペース内でビルドされており、`PYTHONPATH` を `install/lib/` に拡張する必要があります。

## 関連リソース

- [ROS 2 上の Orbbec Gemini 2 3D カメラ](/ja/orbbec_gemini2/)
- [距離計測のために Gemini 2 を YOLOv11 と組み合わせる](/ja/yolov11_with_depth_camera/)
- [reComputer に ROS 2 Humble をインストール](/ja/install_ros2_humble/)
- [Orbbec Gemini 2 製品ページ](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
