---
description: このwikiは、ROS2 humbleをインストールするためのステップバイステップガイドを提供します。
title: ROS2 Humbleのインストール
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/install_ros2_humble
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ROS2 Humbleのインストール

ROS 2は、リアルタイム、信頼性、スケーラブルなロボットシステムを構築するために設計された次世代のオープンソースロボティクスミドルウェアです。このwikiでは、Jetsonを例にしてROS 2の詳細なインストールプロセスを説明します。


<Tabs>

<TabItem value="JP5.1.2" label="JP5.1.2">

## ロケールの設定
```bash
locale  # check for UTF-8
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
locale  # verify settings
```

## 依存関係のインストール
```bash
sudo apt update && sudo apt install gnupg wget
sudo apt install software-properties-common
sudo add-apt-repository universe
```

## ソースの初期化（地域を選択）
```bash
# US Region
echo 'deb https://isaac.download.nvidia.com/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list

# China Region
echo 'deb https://isaac.download.nvidia.cn/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list
```

## ROS 2 APTリポジトリの追加
```bash
sudo apt update && sudo apt install curl -y \
&& sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

## ROS2のインストール
```bash
sudo apt update
sudo apt install ros-humble-desktop-full  # Options: ros-humble-desktop-full, ros-humble-desktop, or ros-humble-ros-base
```

## 追加のビルドツールのインストール
```bash
sudo apt install ros-dev-tools
```

## ROS環境の初期化
```bash
sudo rosdep init
rosdep update
```

## ROS環境変数の設定
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Jetsonデバイスでターミナルを開き、以下のコマンドを入力します：

```bash
sudo apt install software-properties-common -y
sudo add-apt-repository universe
sudo apt update
sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
sudo apt update
sudo apt install ros-humble-desktop -y
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_install.png"/>
</div>

</TabItem>

</Tabs>

ROS2が正常にインストールされたかどうかを確認するために、デバイスで2つの新しいターミナルを作成し、それぞれ以下のコマンドを実行します。

```bash
# terminal1
ros2 run demo_nodes_cpp talker

# terminal2
ros2 run demo_nodes_py listener
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_test.png"/>
</div>

両方のターミナルでメッセージが出力されれば、ROS 2 Humbleが正常にインストールされています！🎉

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>