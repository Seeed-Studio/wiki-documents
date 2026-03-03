---
description: このwikiは、Isaac ROS AprilTagを使用するためのステップバイステップガイドを提供します。
title: Isaac ROS AprilTag
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/isaac_ros_apriltag
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Isaac ROS AprilTag

## 前提条件  
AprilTagをデプロイする前に、reComputerでIsaac ROSの基本環境が正常にセットアップされていることを確認してください [インストールガイド](/ja/install_isaacros)。ROS2がインストールされていない場合は、[このドキュメント](/ja/install_ros2_humble)を参照してください。  

### Isaac ROS AprilTagパッケージトピック  
**購読トピック：**  

| ROSトピック       | インターフェース                  | 説明                     |  
|-----------------|----------------------------|---------------------------------|  
| image         | sensor_msgs/Image        | 入力カメラストリーム。            |  
| camera_info   | sensor_msgs/CameraInfo   | 入力カメラ内部パラメータストリーム。 |  

**配信トピック：**  

| ROSトピック          | タイプ                                              | 説明                                      |  
|--------------------|---------------------------------------------------|--------------------------------------------------|  
| tag_detections   | isaac_ros_apriltag_interfaces/AprilTagDetectionArray | AprilTag検出メッセージの配列。           |  
| tf              | tf2_msgs/TFMessage                             | 検出されたAprilTag（TagFamily:ID）のカメラのframe_idに対する相対的な姿勢。 |  


## 1. Isaac ROS AprilTag環境セットアップ  

### ワークスペースの作成（既に完了している場合はスキップ）  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### パッケージとROSバッグデータのクローン  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_apriltag.git
cd ${ISAAC_ROS_WS}/src/isaac_ros_apriltag && \
  git lfs pull -X "" -I "resources/rosbags/quickstart.bag"
```

### Dockerコンテナに入る  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```


## 2. ROSバッグデータでのテスト  

### AprilTagパッケージのインストール（Docker内）  
```bash
sudo apt-get install -y ros-humble-isaac-ros-apriltag
```

### AprilTagノードの起動  
```bash
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### 新しいターミナルを開く（Docker内）  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

### ROSバッグの再生  
```bash
ros2 bag play --loop src/isaac_ros_apriltag/resources/rosbags/quickstart.bag
```

### RViz2での可視化  
ローカルターミナルでRViz2を開き、**Image**と**TF**コンポーネントを追加します：  
```bash
ros2 run rviz2 rviz2
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/1.png" />
</div>


## 3. USBカメラでのテスト  
ROS2がローカルにインストールされていることを確認してください。  

### USBカメラワークスペースの作成  
```bash
cd ~/
mkdir -p usbcam/src
cd usbcam/src
```

### `usb_cam`パッケージのクローンとビルド  
```bash
git clone https://github.com/ros-drivers/usb_cam.git
cd ..
colcon build
echo "source ~/usbcam/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### カメラフォーマットの確認  
カメラを接続し、デバイスパス（例：`/dev/video*`）を確認します。以下でテストします：  
```bash
cd ~/usbcam
ros2 run usb_cam usb_cam_node_exe
```

<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/2.png" />
</div>


#### サポートされているピクセルフォーマット：  
`rgb8`, `yuyv`, `yuyv2rgb`, `uyvy`, `uyvy2rgb`, `m4202rgb`, `mono8`, `mono16`, `y102mono8`, `raw_mjpeg`  

### カメラの設定  
1. `/usbcam/src/usb_cam/config/params_1.yaml`の`pixel_format`を変更します。  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/3.png" />
</div>

2. `frame_id`を調整します（デフォルト：`camera`）。  
3. `/usbcam/src/usb_cam/launch/camera_config.py`（58行目と62行目）でトピック名をAprilTagの要件（`/image`と`/camera_info`）に合わせてリマップします。  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/4.png" />
</div>

### 再ビルドとカメラの起動  
```bash
cd ~/usbcam
colcon build
ros2 launch usb_cam camera.launch.py
```

### AprilTagノードの実行（Docker内）  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### RViz2での可視化  
**Fixed Frame**をカメラの`frame_id`に設定し、`/image`を購読する**Image**コンポーネントを追加し、**TF**を有効にします。  
*注：このテストでは200mm × 200mmのAprilTagを使用しています。*  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/5.png" />
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>