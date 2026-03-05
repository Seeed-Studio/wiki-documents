---
description: このwikiは、Jetson AGX OrinデバイスでOrbbec RGB-DカメラとNVBloxを展開するための包括的なステップバイステップガイドを提供します。環境設定、依存関係のインストール、Isaac ROS統合、ロボティクスアプリケーション向けのリアルタイム3Dマッピングデモンストレーションをカバーしています。
title: Jetson AGX OrinでOrbbecカメラを使用したNVBloxの展開
keywords:
  - NVBlox
  - Jetson AGX Orin
  - Isaac ROS
  - ROS2
  - Computer Vision
  - Robotics
  - 3D Perception
  - RGB-D Camera
  - Edge AI
  - TSDF
  - ESDF
  - 3D Mapping
image: https://files.seeedstudio.com/wiki/other/page-nvblox.jpg
slug: /deploy_nvblox_jetson_agx_orin
sku: 101090144,100020039
last_update:
  date: 2026-01-20T00:00:00.000Z
  author: Dayu
createdAt: '2026-01-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/deploy_nvblox_jetson_agx_orin/
---

<div align="center">
    <img width={700}
     src="https://media.githubusercontent.com/media/NVIDIA-ISAAC-ROS/.github/release-4.0/resources/isaac_ros_docs/repositories_and_packages/isaac_ros_nvblox/isaac_sim_nvblox_humans.gif"/>
</div>

## はじめに

<div style={{ textAlign: "justify" }}>
[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox)は、リアルタイムロボット知覚のためにNVIDIAが開発した高性能GPU加速3Dマッピングフレームワークです。単眼深度推定モデルとは異なり、NVBloxはRGB-Dカメラやステレオカメラからの真の深度入力を消費して、正確な3Dシーン表現を構築します。

リアルタイムで密なTSDF（Truncated Signed Distance Field）およびESDF（Euclidean Signed Distance Field）マップを構築し、高品質な3D再構成、障害物認識ナビゲーション、衝突チェックを可能にします。NVBloxは、自律移動ロボット（AMR）に適したメッシュ、ボクセルベースのコストマップ、3D占有表現も生成できます。

これにより、ハードウェア制約と計算効率が重要な考慮事項であるエッジAIアプリケーションにとって特に価値があります。このwikiでは、**Jetson AGX Orin**で**ROS 2**統合を使用し、**Orbbec RGB-Dカメラ**とモバイルロボットプラットフォームを使用して、完全にオンデバイスの知覚とナビゲーションパイプラインを実現するIsaac ROS NVBloxの展開方法を実演します。🚀

</div>

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## 前提条件

- JetPack 6.2を搭載した**[reComputer J50](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)**（Jetson AGX Orin）
- Orbbec RGB-Dカメラ 📷
- モバイルロボットシャーシ（オプション）🤖
- [ROS2 Humble](https://wiki.seeedstudio.com/ja/install_ros2_humble/)環境がインストール済み
- Orbbec ROS2 SDKのインストールが必要
- Isaac ROSのインストールが必要

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/page-nvblox.jpg"/>
</div>

## 技術的ハイライト

- **リアルタイム3Dマッピング**：NVBloxはGPU加速を使用してリアルタイムで密なTSDFおよびESDFマップを生成し、ロボティクスアプリケーション向けの高品質3Dシーン再構成を可能にします。

- **RGB-Dカメラ統合**：Orbbec RGB-Dカメラからの真の深度情報を活用して、単眼深度推定に依存することなく正確な3D表現を作成します。

- **エッジ展開向けに最適化**：Jetson AGX Orinなどのエッジデバイスでの効率的な推論のために特別に設計され、最大性能のためのCUDA最適化を備えています。

- **ナビゲーション対応出力**：自律ナビゲーションと衝突回避に適したメッシュ、ボクセルベースのコストマップ、3D占有グリッドを生成します。

- **ROS2ネイティブサポート**：既存のロボットシステムへの簡単な統合のために、標準的なロボティクスメッセージタイプでシームレスなROS2 Humble統合を提供します。

## 環境設定

### 基本依存関係のインストール

ターミナルで以下の依存関係をインストールします：

```bash
sudo apt update
sudo apt-get install python3-pip # Install Python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check JetPack version
sudo apt-get install git-lfs # Install Git LFS
```

### Docker CEのインストール

ソフトウェアソースを更新：

```bash
sudo apt-get update
```

基本依存関係をインストール：

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

DockerのオフィシャルGPGキーを追加：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Dockerの安定版リポジトリを追加：

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

パッケージリストを再度更新（新しいリポジトリが追加されました）：

```bash
sudo apt-get update
```

Docker CE（Community Edition）をインストール：

```bash
sudo apt-get install docker-ce
```

Dockerが開始することを確認：

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

権限を追加（ユーザーをDockerグループに追加）：

```bash
sudo usermod -aG docker $USER
```

システムを再起動またはログアウト：

```bash
sudo reboot
```

### Isaac ROS 3.2のインストール

ワークスペースを作成し、環境に追加：

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

ワークスペースに入り、パッケージをクローン：

```bash
cd ${ISAAC_ROS_WS}/src
git clone -b release-3.2 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

公式Isaac Common DockerイメージをプルしてDockerに入る：

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

`./scripts/run_dev.sh`を実行すると、Isaac ROSが自動的にインストールされ、コンテナが開始されます。

:::tip
Isaac ROSのインストールには、ターミナルでNVIDIA NGCにログインし、NGCアカウントで生成されたAPIキーを入力する必要があります 🔑
:::

### Orbbec SDK ROS2のインストール

Orbbec RGB-Dカメラを使用するには、SDKドライバーのインストールが必要です。このガイドでは、Build from Sourceメソッドを使用します。

依存関係をインストール：

```bash
sudo apt install libgflags-dev nlohmann-json3-dev \
ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-publisher ros-$ROS_DISTRO-camera-info-manager \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs ros-$ROS_DISTRO-xacro \
ros-$ROS_DISTRO-backward-ros libdw-dev libssl-dev mesa-utils libgl1 libgoogle-glog-dev
```

colconワークスペースを作成：

```bash
mkdir -p ~/ros2_ws/src

cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

作業ディレクトリに入り、コンパイル：

```bash
cd ~/ros2_ws
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

OrbbecカメラがLinux上で正しく認識されるようにするには、udevルールをインストールします。

ソースコード作業ディレクトリに入り、スクリプトを実行：

```bash
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

:::note
このスクリプトが実行されない場合、権限の問題によりデバイスのオープンが失敗します。sudo（管理者権限）でサンプルを実行する必要があります。⚠️
:::

## NVBloxの展開

### NVBloxのビルド

Orbbecカメラに適応したNVBloxソースコードを取得し、作業ディレクトリにコピー：

```bash
git clone https://github.com/jjjadand/isaac-NVblox-Orbbec.git
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nvblox/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nitros/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/build/ ${ISAAC_ROS_WS}/
```

ワークスペースに入り、Isaac ROS Dockerコンテナを開始：

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

（オプション）以下のようなエラーが発生した場合：

```bash
Finished pulling pre-built base image: nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c
Nothing to build, retagged nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c as isaac_ros_dev-aarch64
Running isaac_ros_dev-aarch64-container
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: could not apply required modification to OCI specification: error modifying OCI spec: failed to inject CDI devices: unresolvable CDI devices nvidia.com/gpu=all
```

ターミナルで以下のコマンドを実行して修正を試すことができます：

```bash
sudo nvidia-ctk cdi generate --mode=csv --output=/etc/cdi/nvidia.yaml
```

コンテナが正常に開始された後、以下のような画面が表示されるはずです：
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/isaac-ros.jpg"/>
</div>

追加の依存関係をインストール：

```bash
sudo apt update
sudo apt-get install -y ros-humble-magic-enum
sudo apt-get install -y ros-humble-foxglove-msgs
```

CUDA環境変数を`.bashrc`に追加：

```bash
echo '
CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc
```

シンボリックリンクを作成：

```bash
sudo ln -sf /opt/ros/humble/include/magic_enum.hpp /usr/include/magic_enum.hpp

sudo mkdir -p /opt/ros/humble/include/foxglove_msgs
sudo ln -sfn /opt/ros/humble/include/foxglove_msgs/foxglove_msgs/msg /opt/ros/humble/include/foxglove_msgs/msg
```

`/workspaces/isaac_ros-dev`でワークスペースをビルドして初期化：

```bash
colcon build --symlink-install --cmake-args -DBUILD_TESTING=OFF
source install/setup.bash
```

コンパイルが完了すると、以下のような結果が表示されるはずです：
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/NVblox-complied.jpg"/>
</div>

### NVBloxの起動

OrbbecカメラをデータケーブルでJetsonに接続した後、まずローカル環境でOrbbec ROS2スクリプトを開始：

```bash
cd ~/ros2_ws/src
source install/setup.bash

ros2 launch orbbec_camera <camera_name>.launch.py

# Example: ros2 launch orbbec_camera gemini2.launch.py
```

サポートされている`<camera_name>`パラメータの例：

- gemini210
- gemini2
- gemini2L
- gemini_330_gmsl
- gemini_330_series

:::warning
Dockerコンテナ内でOrbbecスクリプトを開始してはいけないことに注意してください。前のチュートリアルに従ってOrbbecドライバーをインストールしていることを確認してください。⚠️
:::

Isaac ROS コンテナは、デフォルトでローカルに公開された ROS2 とブリッジします。Docker コンテナ内で、次のように入力します：

```bash
ros2 topic list
```

通常、Docker コンテナ内で Orbbec カメラによって公開される以下のデータトピックが表示されるはずです：

```yaml
/camera/accel/imu_info
/camera/color/camera_info
/camera/color/image_raw
/camera/depth/camera_info
/camera/depth/image_raw
/camera/depth/points
/camera/depth_filter_status
/camera/device_status
/camera/gyro/imu_info
/camera/gyro_accel/sample
/camera/ir/camera_info
/camera/ir/image_raw
```

Orbbec カメラのデータトピックが読み取れることを確認してください。次に、Isaac ROS コンテナで NVBlox サンプルスクリプトを開始します：

```bash
cd ~/workspaces/isaac_ros-dev
source install/setup.bash

ros2 launch nvblox_examples_bringup orbbec_example.launch.py
```

RViz で NVBlox の 3D 占有グリッドとメッシュの出力を確認できます：
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/rviz.jpg"/>
</div>

RViz は以下のように設定できます。必要な可視化結果を有効にし、利用可能なトピック名を選択してください：
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/other/rviz-lan.jpg"/>
</div>

最後に、AGX Orin と Orbbec カメラをモバイル AGV に搭載することで、動画に示されている効果を実現できます：🎥

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/_TKNGejfGIo" title="Deploy NVBlox on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

これは、モバイルロボットの障害物検出やシーンの 3D メッシュマップ構築に使用できます。🤖

## 参考資料

- [Isaac ROS Common GitHub リポジトリ](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)
- [Isaac ROS NVBlox GitHub リポジトリ](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox.git)
- [Isaac NVBlox Orbbec GitHub リポジトリ](https://github.com/jjjadand/isaac-NVblox-Orbbec#)
- [ROS2 Humble ドキュメント](https://docs.ros.org/en/humble/)
- [Orbbec SDK ROS2 ドキュメント](https://github.com/orbbec/OrbbecSDK_ROS2)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
