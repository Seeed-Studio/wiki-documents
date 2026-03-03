---
description: reComputer Jetsonプラットフォームでの Orbbec Gemini 335Lg の使用方法を説明します。
title: AC1 入門ガイド
keywords:
- Jetson
- reComputer Robotics
- Computer Vision
- Autonomous Driving
- Industrial Robot
- Orbbec
- AI Camera
- Stereo Camera
- Depth Camera
- Visual SLAM
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1.webp 
slug: /ja/ac1
last_update:
  date: 2025-09-18
  author: Youjiang
---

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1_1.png" />
</div>

## はじめに

<div style={{ textAlign: "justify" }}>
RoboSenseによって発明されたActive Cameraは、移動知覚と運用認知の課題に取り組むために設計されたロボットビジョンの画期的なカテゴリです。

このシリーズの最初のAC1は、複数のセンサーを統合して、深度情報、画像データ、および動作姿勢データのハードウェアレベルの融合を提供し、時間と空間で同期されています。これにより、ロボットは包括的な環境詳細を捉えることができ、日光や高反射面からの干渉を克服し、多様な屋内外シナリオに適応できます。

このwikiでは、AC1をreComputer Roboticsと一緒に使用する詳細なプロセスを実演します。
</div>

## 前提条件

<div class="table-center">
  <table align="center">
    <tr>
        <th>AC1</th>
        <th>reComputer Robotics J4012</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1_1.png" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension_1.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.robosense.ai/en/IncrementalComponents/AC1" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
  </table>
</div>

## ハードウェア接続

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/hardware.png" />
</div>


## 入門ガイド

### ステップ1. reComputer Robotics J4012にROSをインストール

a. `~/.bashrc`に以下の内容を追加します。
```bash
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export PATH=/usr/src/tensorrt/bin:$PATH
```
:::info
ターミナルで`vim ~/bashrc`コマンドを入力してファイルを開くことができます。
:::

b. ターミナルで以下のコマンドを入力してROS2をインストールします。

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
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_install.png" />
</div>

ROS2が正常にインストールされたかどうかを確認するために、デバイスで2つの新しいターミナルを作成し、それぞれ以下のコマンドを実行できます。

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

### ステップ2. AC1用ROS SDKのインストール

reComputerのターミナルで以下のコマンドを入力します。
```bash
git clone https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra.git
sudo apt-get install libavformat-dev libavdevice-dev libavcodec-dev
sudo apt install python3-colcon-common-extensions -y
echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
source ~/.bashrc
cd robosense_ac_ros2_sdk_infra/modules/
colcon build
source install/setup.bash
```
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/install_ac1_sdk.png" />
</div>

すべてが順調に進めば、RvizでAC1によってキャプチャされた環境データを可視化できます。

```bash
ros2 launch ac_driver start.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/demo.png" />
</div>

## 次のステップ

:::note
AC1とreComputer Jetsonを組み合わせることで、多くの高度なアルゴリズムを再現できます。詳細については、[こちら](https://robosense-wiki-en.readthedocs.io/en/latest/ac_studio/algorithms.html)を参照してください。
:::

## リソース

- https://robosense-wiki-en.readthedocs.io/en/latest/
- https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra
- https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
