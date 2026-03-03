---
description: このwikiは、Isaac ROS Visual SLAMを使用するためのステップバイステップガイドを提供します。
title: Isaac ROS Visual SLAM
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/isaac_ros_visual_slam
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---


# Isaac ROS Visual SLAM デプロイメント  

## 前提条件  
Visual SLAMをデプロイする前に、ReComputer上でIsaac ROS環境が適切にセットアップされていることを確認してください [インストールガイド](/ja/install_isaacros)。ROS2がインストールされていない場合は、[このドキュメント](/ja/install_ros2_humble)を参照してください。  


## 1. 環境設定  

### ワークスペースの作成（既存の場合はスキップ）  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Visual SLAMパッケージのクローン  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git
```

### Dockerコンテナに入る  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

## 2. ROS Bagデータでのテスト  

### Visual SLAMパッケージのインストール（Docker内）  
```bash
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
```

### Visual SLAMノードの起動  
```bash
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```

### 可視化のためのRViz2を開く  
**ローカルターミナル**（Docker外）で：  
```bash
cd ${ISAAC_ROS_WS}/src
rviz2 -d isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/default.cfg.rviz
```

### ステレオカメラROS Bagの再生  
**3番目のターミナル**で：  
```bash
cd ${ISAAC_ROS_WS}/src
ros2 bag play isaac_ros_visual_slam/isaac_ros_visual_slam/test/test_cases/rosbags/small_pol_test/
```

### 期待される出力：  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/6.png" />
</div>


### 注意事項：  
1. ROS bagに**ステレオカメラ画像**（左/右フレーム）が含まれていることを確認してください。  
2. 必要に応じてRViz2設定を調整してください（例：マップ可視化、軌跡設定）。  

トラブルシューティングについては、[公式ドキュメント](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam)を参照してください。  

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