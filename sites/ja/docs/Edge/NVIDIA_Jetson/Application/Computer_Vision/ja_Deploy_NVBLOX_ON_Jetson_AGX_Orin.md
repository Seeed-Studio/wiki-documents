---
description: このWikiでは、Jetson AGX Orin デバイス上で Orbbec RGB-D カメラとともに NVBlox をデプロイするための、包括的でステップバイステップのガイドを提供します。環境構築、依存関係のインストール、Isaac ROS との統合、およびロボットアプリケーション向けのリアルタイム3Dマッピングデモを網羅しています。
title: Jetson AGX Orin 上で Orbbec カメラとともに NVBlox をデプロイする
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
[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox) は、NVIDIA によって開発されたリアルタイムロボット認識向けの高性能 GPU アクセラレート 3D マッピングフレームワークです。単眼の深度推定モデルとは異なり、NVBlox は RGB-D カメラやステレオカメラからの真の深度入力を利用して、正確な3Dシーン表現を構築します。

これにより、リアルタイムで高密度な TSDF（Truncated Signed Distance Field）および ESDF（Euclidean Signed Distance Field）マップを生成し、高品質な3D再構成、障害物を考慮したナビゲーション、衝突チェックを可能にします。NVBlox は、メッシュ、ボクセルベースのコストマップ、そして自律移動ロボット（AMR）に適した3Dオクパンシ表現も生成できます。

これは、ハードウェア制約と計算効率が重要となるエッジAIアプリケーションにとって特に有用です。本Wikiでは、**Jetson AGX Orin** 上で **ROS 2** と統合し、**Orbbec RGB-D カメラ** とモバイルロボットプラットフォームを用いて、完全にオンデバイスで動作する認識およびナビゲーションパイプラインを実現する Isaac ROS NVBlox のデプロイ方法を紹介します。🚀

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

- **[reComputer J50](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)**（Jetson AGX Orin）と JetPack 6.2.1
- Orbbec RGB-D カメラ 📷
- モバイルロボットシャーシ（オプション）🤖
- [ROS2 Humble](https://wiki.seeedstudio.com/ja/install_ros2_humble/) 環境がインストールされていること
- Orbbec ROS2 SDK のインストールが必要
- Isaac ROS のインストールが必要

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/page-nvblox.jpg"/>
</div>

## 技術ハイライト

- **リアルタイム3Dマッピング**: NVBlox は GPU アクセラレーションを用いてリアルタイムに高密度な TSDF および ESDF マップを生成し、ロボットアプリケーション向けの高品質な3Dシーン再構成を実現します。

- **RGB-D カメラ統合**: Orbbec RGB-D カメラからの真の深度情報を活用し、単眼の深度推定に依存することなく正確な3D表現を生成します。

- **エッジデプロイ向けに最適化**: Jetson AGX Orin のようなエッジデバイス上で効率的に推論できるよう特別に設計されており、CUDA による最適化で最大限の性能を引き出します。

- **ナビゲーション対応の出力**: メッシュ、ボクセルベースのコストマップ、3Dオクパンシグリッドを生成し、自律ナビゲーションや衝突回避に適しています。

- **ROS2 ネイティブサポート**: 標準的なロボット用メッセージタイプを用いた ROS2 Humble とのシームレスな統合を提供し、既存のロボットシステムへの容易な組み込みを可能にします。

## 環境構築

### 基本的な依存関係のインストール

ターミナルで次の依存関係をインストールします：

```bash
sudo apt update
sudo apt-get install python3-pip # Install Python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check JetPack version
sudo apt-get install git-lfs # Install Git LFS
```

### Docker CE のインストール

ソフトウェアソースを更新します：

```bash
sudo apt-get update
```

基本的な依存関係をインストールします：

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

Docker 公式の GPG キーを追加します：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Docker の安定版リポジトリを追加します：

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

（新しいリポジトリが追加されたので）パッケージリストを再度更新します：

```bash
sudo apt-get update
```

Docker CE（Community Edition）をインストールします：

```bash
sudo apt-get install docker-ce
```

Docker が起動することを確認します：

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

権限を追加します（ユーザーを Docker グループに追加）：

```bash
sudo usermod -aG docker $USER
```

システムを再起動するかログアウトします：

```bash
sudo reboot
```

### Isaac ROS 3.2 のインストール

ワークスペースを作成し、環境に追加します：

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

ワークスペースに入り、パッケージをクローンします：

```bash
cd ${ISAAC_ROS_WS}/src
git clone -b release-3.2 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

公式 Isaac Common Docker イメージを取得し、Docker に入ります：

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

`./scripts/run_dev.sh` を実行すると、Isaac ROS が自動的にインストールされ、コンテナが起動します。

:::tip
Isaac ROS のインストールには、ターミナルで NVIDIA NGC にログインし、NGC アカウントで生成した API Key を入力する必要があります 🔑
:::

### Orbbec SDK ROS2 のインストール

Orbbec RGB-D カメラを使用するには、SDK ドライバのインストールが必要です。このガイドではソースからビルドする方法を使用します。

依存関係をインストールします：

```bash
sudo apt install libgflags-dev nlohmann-json3-dev \
ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-publisher ros-$ROS_DISTRO-camera-info-manager \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs ros-$ROS_DISTRO-xacro \
ros-$ROS_DISTRO-backward-ros libdw-dev libssl-dev mesa-utils libgl1 libgoogle-glog-dev
```

colcon ワークスペースを作成します：

```bash
mkdir -p ~/ros2_ws/src

cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

作業ディレクトリに入り、ビルドします：

```bash
cd ~/ros2_ws
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

Linux 上で Orbbec カメラを正しく認識させるために、udev ルールをインストールします。

ソースコードの作業ディレクトリに入り、スクリプトを実行します：

```bash
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

:::note
このスクリプトを実行しない場合、権限の問題によりデバイスを開くことに失敗します。その場合、サンプルを sudo（管理者権限）で実行する必要があります。⚠️
:::

## NVBlox のデプロイ

### NVBlox のビルド

Orbbec カメラ対応の NVBlox ソースコードを取得し、作業ディレクトリにコピーします：

```bash
git clone https://github.com/jjjadand/isaac-NVblox-Orbbec.git
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nvblox/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nitros/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/build/ ${ISAAC_ROS_WS}/
```

ワークスペースに入り、Isaac ROS Docker コンテナを起動します：

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

（オプション）次のようなエラーが発生した場合：

```bash
Finished pulling pre-built base image: nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c
Nothing to build, retagged nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c as isaac_ros_dev-aarch64
Running isaac_ros_dev-aarch64-container
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: could not apply required modification to OCI specification: error modifying OCI spec: failed to inject CDI devices: unresolvable CDI devices nvidia.com/gpu=all
```

ターミナルで次のコマンドを実行して修正を試すことができます：

```bash
sudo nvidia-ctk cdi generate --mode=csv --output=/etc/cdi/nvidia.yaml
```

コンテナの起動に成功すると、次のような表示が見えるはずです：
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/isaac-ros.jpg"/>
</div>

追加の依存関係をインストールします：

```bash
sudo apt update
sudo apt-get install -y ros-humble-magic-enum
sudo apt-get install -y ros-humble-foxglove-msgs
```

CUDA の環境変数を `.bashrc` に追加します：

```bash
echo '
CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc
```

シンボリックリンクを作成します：

```bash
sudo ln -sf /opt/ros/humble/include/magic_enum.hpp /usr/include/magic_enum.hpp

sudo mkdir -p /opt/ros/humble/include/foxglove_msgs
sudo ln -sfn /opt/ros/humble/include/foxglove_msgs/foxglove_msgs/msg /opt/ros/humble/include/foxglove_msgs/msg
```

`/workspaces/isaac_ros-dev` でワークスペースをビルドおよび初期化します：

```bash
colcon build --symlink-install --cmake-args -DBUILD_TESTING=OFF
source install/setup.bash
```

コンパイルが完了すると、次のような結果が表示されるはずです：
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/NVblox-complied.jpg"/>
</div>

### NVBlox の起動

Orbbec カメラをデータケーブルで Jetson に接続した後、まずローカル環境で Orbbec ROS2 スクリプトを起動します：

```bash
cd ~/ros2_ws/src
source install/setup.bash

ros2 launch orbbec_camera <camera_name>.launch.py

# Example: ros2 launch orbbec_camera gemini2.launch.py
```

サポートされている `<camera_name>` パラメータの例をいくつか示します：

- gemini210
- gemini2
- gemini2L
- gemini_330_gmsl
- gemini_330_series

:::warning
Orbbec スクリプトは Docker コンテナ内では起動しないでください。必ず、前のチュートリアルに従って Orbbec ドライバをインストールしていることを確認してください。⚠️
:::

Isaac ROS コンテナは、デフォルトでローカルで公開されている ROS2 とブリッジ接続されています。Docker コンテナ内で次を入力します：

```bash
ros2 topic list
```

通常、Docker コンテナ内で Orbbec カメラによって公開されている、次のデータトピックが表示されます：

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

Orbbec カメラのデータトピックを読み取れることを確認します。その後、Isaac ROS コンテナ内で NVBlox のサンプルスクリプトを起動します：

```bash
cd ~/workspaces/isaac_ros-dev
source install/setup.bash

ros2 launch nvblox_examples_bringup orbbec_example.launch.py
```

RViz で、NVBlox による 3D オキュパンシーグリッドとメッシュの出力を確認できます：
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/rviz.jpg"/>
</div>

RViz は以下のように設定できます。表示したい可視化結果を有効にし、利用可能なトピック名を選択してください：
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/other/rviz-lan.jpg"/>
</div>

最後に、AGX Orin と Orbbec カメラを移動型 AGV に搭載することで、ビデオに示すような効果を実現できます：🎥

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/_TKNGejfGIo" title="Deploy NVBlox on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

これは、移動ロボット向けの障害物検知や、シーンの 3D メッシュマップ構築に利用できます。🤖

## 参考資料

- [Isaac ROS Common GitHub リポジトリ](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)
- [Isaac ROS NVBlox GitHub リポジトリ](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox.git)
- [Isaac NVBlox Orbbec GitHub リポジトリ](https://github.com/jjjadand/isaac-NVblox-Orbbec#)
- [ROS2 Humble ドキュメント](https://docs.ros.org/en/humble/)
- [Orbbec SDK ROS2 ドキュメント](https://github.com/orbbec/OrbbecSDK_ROS2)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
