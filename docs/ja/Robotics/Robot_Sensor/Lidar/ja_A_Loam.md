---
description: このwikiでは、RoboSense RS32 LiDARセンサーを使用してreComputer Jetson上でA-LOAMアルゴリズムをセットアップし、実行するための詳細な手順を提供します。
title: A-LOAM 3D SLAMの実行
keywords:
- A-LOAM
- SLAM
- reComputer
- Jetson nano
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/a_loam
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# reComputer上でA-LOAM 3D SLAMを実行する方法

## A-LOAMの紹介

[A-LOAM](https://github.com/HKUST-Aerial-Robotics/A-LOAM/tree/devel)は、J. ZhangとS. Singhによる元のLOAM（Lidar Odometry and Mapping）アルゴリズムの高度な実装です。A-LOAMの主な特徴は以下の通りです：

- リアルタイムLiDARオドメトリとマッピング
- EigenとCeres Solverを使用した簡素化されたコード構造
- 多様な環境での高性能と堅牢性

A-LOAMは自動運転、ロボティクス、3Dマッピングなど様々なアプリケーションに使用できます。

このwikiでは、RoboSense RS32 LiDARセンサーを使用してreComputer Jetsonシリーズ上でA-LOAM（Advanced LOAM）アルゴリズムをセットアップし、実行するための詳細な手順を提供します。A-LOAMは、効率的でリアルタイムなマッピングと位置推定のためにEigenとCeres Solverを利用するLOAM（Lidar Odometry and Mapping in Real-time）の高度な実装です。
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig0.gif" />
  </div>

## 前提条件

- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__

- __RoboSense RS32 Lidar__

  :::note
  - reComputerがJetpack 5.xで動作していることを確認してください。Ubuntu 20.04とROS Noeticでのみテストしています。このガイドで説明されている[reComputer用ROS1インストール](/ja/installing_ros1)に従って、ROS環境のセットアップを完了してください。
  - チュートリアルに従って[reComputer上でRoboSense RS32 LiDARをROSで起動](/ja/robosense_lidar)し、点群データの可視化に成功していることを確認してください。
  :::

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## はじめに

### 環境セットアップ

- __ステップ1:__ gflags、google-glog、suitesparse、cxsparse3、cxsparseをインストールします。

    ```bash
    sudo apt-get install libgflags-dev libgoogle-glog-dev
    sudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev
    ```

- __ステップ2:__ PCL（Point Cloud Library）をインストールします。

  ```bash
  sudo apt install libpcl-dev
  ```

- __ステップ 3:__ Ceresをインストールします。

  ```bash
  wget ceres-solver.org/ceres-solver-1.14.0.tar.gz
  tar xvf ceres-solver-1.14.0.tar.gz
  cd ceres-solver-1.14.0
  mkdir build
  cd build
  cmake ..
  make -j4 
  sudo make install
  ```

- __ステップ 4:__ A-LOAMのコードをワークスペースのsrcディレクトリ（~/catkin_ws/src）にクローンしてください。

  ```bash
  cd ~/catkin_ws/src
  git clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git
  ```

### 設定ファイルとソースコードの修正

- __ステップ 1:__ A-LOAMアルゴリズムは点群タイプが __XYZIRT__ である必要がありますが、RS32 LiDARのデフォルト出力は __XYZI__ です。そのため、___~/catkin_ws/src/rslidar_sdk/___ ディレクトリの __CMakeLists.txt__ ファイルの __8__ 行目を修正し、__XYZI__ を __XYZIRT__ に変更する必要があります。
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png" />
  </div>

- __ステップ 2:__ A-LOAMがサブスクライブするデフォルトの点群トピックは ___/velodyne_points___ ですが、RS32 LiDARのデフォルト出力トピックは ___/rslidar_points___ です。そのため、___~/catkin_ws/src/rslidar_sdk/config/config.yaml___ ファイルの26行目のトピック名を ___/velodyne_points___ に修正します。
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png" />
  </div>

- __ステップ 3:__ C++14を使用している場合は、___~/catkin_ws/src/A-LOAM/___ ディレクトリにある __CMakeLists.txt__ ファイルの __5__ 行目を修正し、___C++11___ を ___C++14___ に変更します。
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png" />
  </div>

- __ステップ 4:__ __OpenCV 4.x__ を使用している場合は、___~/catkin_ws/src/A-LOAM/src___ ディレクトリにある __scanRegistration.cpp__ ファイルの __44__ 行目のOpenCVヘッダーファイル参照を更新する必要があります（OpenCV 3.xを使用している場合はこのステップをスキップできます）。

  コードを置換

  ```c++
  #include <opencv/cv.h>
  ```

  を

  ```c++
  #include <opencv2/opencv.hpp>
  ```

  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig4.png" />
  </div>

- __ステップ 5:__ ___~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp___ の __91__ 行目と __93__ 行目で、___CV_LOAD_IMAGE_GRAYSCALE___ を ___cv::IMREAD_GRAYSCALE___ に変更します
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png" />
  </div>

- __ステップ 6:__ __tf2__ を使用している場合は、___~/catkin_ws/src/A-LOAM/src/___ ディレクトリ内のすべての __.cpp__ ファイル __(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)__ を修正し、___frame_id=/camera_init___ を ___frame_id=camera_init___ に変更して、__'/'__ 記号のみを削除します。
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png" />
  </div>

### パッケージのコンパイル

- __ステップ 1:__ ワークスペースに戻り、機能パッケージを再コンパイルして環境を再読み込みします。

  ```bash
  cd ~/catkin_ws
  catkin_make
  source ~/catkin_ws/devel/setup.bash
  ```

### 3D SLAMの開始

- __ステップ1:__ ライダーコードの実行

  ```bash
    roslaunch rslidar_sdk start.launch
  ```

- __ステップ 2:__ A loam コードの実行

  ```bash
  roslaunch aloam_velodyne aloam_velodyne_HDL_32.launch
  ```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig7.png" />
  </div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
