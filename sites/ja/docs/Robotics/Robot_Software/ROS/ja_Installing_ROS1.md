---
description: このwikiはreComputerにROS1をインストールする方法を提供します。
title: ROS1のインストール
keywords:
- ROS1
- ROS installation
- Jetson Nano
- robotics
- Robot Operating System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/installing_ros1
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# reComputerにROS1をインストールする方法

## はじめに
ROS（Robot Operating System）は、ロボティクス開発と研究で広く使用されているオープンソースフレームワークです。最初はスタンフォード大学で開発され、後にWillow Garageによって発展されたROS1は、異種コンピューティングプラットフォーム、様々なプログラミング言語、モジュラー設計をサポートしています。Topics、Services、Parameter Serverを介した通信メカニズム、Catkinによる効率的なパッケージ管理、rviz、gazebo、rosbagなどの豊富な開発ツールセットを特徴とし、複雑なロボットシステムの構築と統合において重要なツールとなっています。

このwikiでは、[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)シリーズにROS Noeticをインストールする方法を学習します。以下の手順に従って開発環境をセットアップしてください。

## 前提条件
- __[reComputer J30/40シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__

  :::note
  reComputerデバイスに_JetPack 5.x_がインストールされており、必要なCUDAと関連ドライバーがすべて含まれていることを確認してください。以下に説明するハードウェア接続セットアップに従ってください。
  :::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig1.gif" />
</div>

## はじめに

### ROS1のインストール
- **ステップ1:** ターミナルを開いてシステムパッケージを更新します。
  ```bash
  sudo apt update 
  sudo apt upgrade
  ```
- **ステップ2:** 基本ツールをインストールします。
  ```bash
  sudo apt install curl gnupg2 lsb-release
  ```
- **ステップ3:** ROSリポジトリキーを追加します。
  ```bash
  sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```
- **ステップ4:** ROSリポジトリを追加します。
  ```bash
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```
- **ステップ5:** パッケージリストを更新します。
  ```bash
  sudo apt update
  ```
- **ステップ6:** ros-noetic-desktop-fullをインストールします。
  ```bash
  sudo apt install ros-noetic-desktop-full
  sudo apt-get install python3-rosdep
  ```
- **ステップ7:** rosdepを初期化します。
  ```bash
  sudo rosdep init
  rosdep update
  ```
- **ステップ8:** ROS環境変数を設定します。
  ```bash
  echo "source /opt/ros/noetic/setup.bash">> ~/.bashrc &&
  source ~/.bashrc
  ```
- **ステップ9:** 依存関係ツールをインストールします。
  ```bash
  sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
  ```
- **ステップ10:** インストールをテストします。
  ```bash
  roscore
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig2.png" />
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