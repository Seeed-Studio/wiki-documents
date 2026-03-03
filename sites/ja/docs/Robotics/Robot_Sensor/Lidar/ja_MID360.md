---
description: このwikiは、ROSを使用してreComputer J30/40にMID360 LiDARをインストールし、セットアップするためのステップバイステップガイドを提供します。
title: Mid360 with ROS
keywords:
- Jetson Nano
- reComputer
- Mid360
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/mid360
last_update:
  date: 04/10/2024
  author: ZhuYaoHui
---
# reComputerでMID360 LiDARを使用する方法

## はじめに
MID360 LIDARセンサーは、様々なアプリケーション向けに高精度の3Dポイントクラウドデータを提供します。このガイドでは、ROS NoeticをランニングしているreComputer J30/40デバイスでMID360をセットアップすることに焦点を当てています。

このwikiは、ROSを使用して[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) JetsonにMID360 LiDARをインストールし、セットアップし、ポイントクラウドデータを可視化するためのステップバイステップガイドを提供します。
<!-- <div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div> -->


## 前提条件
- __[reComputer J30/40シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: チュートリアルに従って、すでに[JetPack 5.xシステムのインストール](/ja/reComputer_J4012_Flash_Jetpack)と[ROS Noetic環境](/ja/installing_ros1)のインストールが完了していること。

- __MID360 LIDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## はじめに

### SDK2のインストール
- **ステップ1:** Livox-SDK2をインストール
  ```bash
  git clone https://github.com/Livox-SDK/Livox-SDK2.git
  cd ./Livox-SDK2/
  mkdir build
  cd build
  cmake .. && make -j8
  sudo make install
  ```

- **ステップ2:** livox_ros_driver2をインストール:
  ```bash
  git clone https://github.com/Livox-SDK/livox_ros_driver2.git ~/ws_livox/src/livox_ros_driver2
  cd ~/ws_livox/src/livox_ros_driver2
  source /opt/ros/noetic/setup.sh
  ./build.sh ROS1
  ```

### reComputer IPアドレスの設定
MID360 LiDARのデフォルトIPアドレスは**_192.168.1.2xx_**で、ターゲットホストマシンのIPアドレスは**_192.168.1.50_**です。ハードウェアを接続した後、reComputerのIPアドレスを手動で設定する必要があります。

- **ステップ1:** イーサネット設定を開く。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **ステップ2:** IPv4フィールドで手動設定を選択し、IPアドレス**192.168.1.50**とマスク**255.255.255.0**を入力する。
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/change_ip.png" />
  </div>

- **ステップ3:** 設定パラメータ。
  次に、`livox_ros_driver2`の`~/src/livox_ros_driver2/config`ファイルを変更します。青い下線部分は静的IPと一致させる必要があります。赤い下線部分は`192.168.1.1xx`として設定し、最後の2桁はMID360ブロードキャストコードの最後の2桁に対応させます。例えば、ブロードキャストコードが47MDL1C0010081（14文字）の場合、IPアドレスは`192.168.1.181`として設定する必要があります。

  - `livox_ros_driver2/config/MID360_config.json`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MID360_config.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/rviz_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/RVIZ_MID360.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/msg_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MSG_MID360.png" />
      </div>


### Lidarコードの実行
  Lidarを開始:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 msg_MID360.launch
  ```
  
  新しいターミナルを開く:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 rviz_MID360.launch
  ```
  <div align="center">
  <img width={500} 
  src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/reesult.png" />
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