---
description: このwikiは、ROSを使用してreComputer J30/40にRoboSense LiDARをインストールし、セットアップするためのステップバイステップガイドを提供します。
title: RoboSense Lidar with ROS
keywords:
- Jetson Nano
- reComputer
- Robosense
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/robosense_lidar
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# reComputerでRoboSense LiDARを使用する方法

## はじめに
RoboSense LiDARセンサーは、様々なアプリケーション向けに高精度な3Dポイントクラウドデータを提供します。このガイドでは、ROS NoeticをランニングしているreComputer J30/40デバイスでRS32モデルをセットアップすることに焦点を当てています。

このwikiは、ROSを使用してreComputer J30/40 JetsonにRoboSense LiDARをインストールし、セットアップし、ポイントクラウドデータを可視化するためのステップバイステップガイドを提供します。
<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div>


## 前提条件
- __[reComputer J30/40シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: チュートリアルに従って、すでに[JetPack 5.xシステムのインストール](/ja/reComputer_J4012_Flash_Jetpack)と[ROS Noetic環境](/ja/installing_ros1)のインストールが完了していること。

- __RoboSense全シリーズlidar__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## はじめに

### Robosense SDKのインストール
- **ステップ1:** 基本的な依存関係をインストール
  ```bash
  sudo apt-get update &&
  sudo apt-get install -y libyaml-cpp-dev libpcap-dev
  ```
- **ステップ2:** ワークスペースを作成
  ```bash
  mkdir -p catkin_ws/src
  cd catkin_ws/src
  ```
- **ステップ3:** rslidar_sdkをクローン
  ```bash
  git clone https://github.com/RoboSense-LiDAR/rslidar_sdk.git
  cd rslidar_sdk
  git submodule init
  git submodule update
  ```
- **ステップ4:** **_catkin_ws/src/rslidar_sdk/CMakeLists.txt_** にある **CMakeLists.txt** ファイルを開き、ファイルの上部にある変数 **_COMPILE_METHOD_** を **_CATKIN_** に変更します。

  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig3.png" />
  </div>

- **ステップ4:** **_catkin_ws/src/rslidar_sdk/ ディレクトリ_** にある既存の **package.xml** ファイルを削除し、**package_ros1.xml** ファイルを **package.xml** にリネームします。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig4.png" />
  </div>

- **ステップ5:** ターミナルで以下のコマンドを入力
  ```bash
  cd ~/catkin_ws/src/rslidar_sdk/
  mkdir build && cd build
  cmake .. && make -j4
  cd ~/catkin_ws/
  catkin_make
  ```
### ハードウェアの接続
- **ステップ1:** 以下の説明に従って、電源、Robosense RS32 LiDAR、インターフェースボックス、およびイーサネットケーブルをreComputer J4012に接続します：
<div align="center">
    <img width={500} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig5.gif" />
</div>

- **ステップ2:** **_/catkin_ws/src/rslidar_sdk/config/config.yaml_** にあるconfig.yamlファイルを開き、**10行目** の **lidar_type** を **RS32** に変更します。ファイルを保存して閉じます。お使いのデバイスに応じて正しいLiDARモデルを入力してください。
<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig6.png" />
</div>

### reComputer IPアドレスの設定
Robosense RS32 LiDARのデフォルトIPアドレスは **_192.168.1.200_**、ターゲットホストマシンのIPアドレスは **_192.168.1.102_**、MSOPパケットポート番号は6699、DIFOPパケットポート番号は7788です。ハードウェアを接続した後、reComputerのIPアドレスを手動で設定する必要があります。

- **ステップ1:** イーサネット設定を開きます。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **ステップ2:** IPv4フィールドで手動設定を選択し、IPアドレス **192.168.1.102** とマスク **255.255.255.0** を入力します。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig8.png" />
  </div>

  ```bash
  ping 192.168.1.200
  ```
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig9.png" />
  </div>
  LiDARからデータを受信できれば、接続が成功したことを示します。

### Lidarコードの実行
  ```bash
  cd ~/catkin_ws/
  source devel/setup.bash
  roslaunch rslidar_sdk start.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig10.png" />
  </div>

  
## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>