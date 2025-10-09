---
description: このwikiはHEXFELLOW Y200 IMUセンサーのチュートリアルを提供します。
title: HEXFELLOW Y200 IMUセンサー
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.webp
slug: /ja/hexfellow_y200
last_update:
  date: 06/18/2025
  author: ZhuYaoHui
---

# HEXFELLOW Y200 IMUセンサー 入門ガイド

Y200は、ロボット専用に開発された9軸ジャイロスコープです。このデバイスは最大60Vの電源供給をサポートし、標準のXT30 CANインターフェースを使用してロボットネットワークに迅速に統合できます。優れた耐衝撃性を実現する内部ポッティング処理を特徴とし、そのケーシングは安定した信頼性の高い設置のための強化構造で設計されています。

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.jpg" />
</div>

## 仕様

以下は、すべてのモーターモデルのすべてのパラメータが記入された完成したテーブルです：

### 角度出力パラメータ

| 角度  |   | 値                     | 備考     |
|----------------|-------|--------------------------|----------|
| **ロール**            | 精度:  | 0.15°          | 1σ RMS   |
|                     | 範囲:  | ±180°             |          |
| **ピッチ**           | 精度:  | 0.15°          | 1σ RMS   |
|                     | 範囲:  | ±90°              |          |
| **ヨー（非参照）** | 精度:  | 0.2°        | 1σ RMS   |
|                     | 範囲:  | ±180°             |          |
| **分解能**      |   | 0.001°                   |          |

### ジャイロパラメータ

| パラメータ           | 値             | 備考                     |
|---------------------|-------------------|--------------------------|
| **範囲**           | ±2000°/s         |                          |
| **非線形性**   | ±0.05%FS         |                          |
| **ノイズ密度**   | 0.015°/s/√Hz     |                          |
| **バイアス不安定性**| 5°/h             | Allan分散、1σ       |
| **帯域幅（-3dB）**| 50Hz             |                          |
| **ゼロオフセット**     | ±0.5°/s          | 1σ RMS                   |
| **温度ドリフト**| ±1°/s           | 1σ RMS、-40~85°C         |

### 加速度計パラメータ

| パラメータ            | 値           | 備考                      |
|----------------------|-----------------|---------------------------|
| **範囲**            | ±12g           |                           |
| **非線形性**    | ±0.5%FS        |                           |
| **ノイズ密度**    | 190μg/√Hz      |                           |
| **バイアス不安定性** | 0.05mg         | Allan分散、1σ        |
| **帯域幅（-3dB）** | 50Hz           |                           |
| **ゼロオフセット**      | ±20mg          | 1σ RMS                    |
| **温度ドリフト**| ±20mg          | 1σ RMS、-40~85°C          |

### その他のパラメータ

| パラメータ              | 値             | 備考                                  |
|------------------------|-------------------|---------------------------------------|
| **電圧許容範囲**  | 12-60V            | XT30 2+2コネクタ用。USB-Cではありませんが、USB-C電源と互換性があります |
| **通信**      | CAN               |                                       |
| **最大出力周波数** | 200Hz           |                                       |
| **寸法**         | 60×60×15 mm       |                                       |
| **動作温度** | -20~85°C       |                                       |

### **対応プラットフォーム**

- [x] **reComputer Mini**
- [x] **reComputer Robotics**

### **対応ROSバージョン**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### 設置寸法図

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig3.png"/>
</div>

## reComputer JetsonでIMUを始める

SocketCANを使用したLinuxドライバーを提供しています。これがIMUを使用する推奨方法です。
開始する前に、デバイスをPCに接続する必要があります！以下はIMUのCANバス配線とボーレート定義です

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

私たちの​reComputer Mini​と​reComputer Robotics J40​（上図）の両方に、​XT30 2+2​ CAN通信インターフェースが搭載されており、IMUの​同時電源供給と通信をサポートしています。

:::tip

私たちのデバイスの​CAN_H​と​CAN_L​のピン配置は、市販されているほとんどのモーターやセンサーと比較して​逆​になっています。したがって、配線時には適切な通信を確保するために​HとL接続を交換​する必要があります。より多くのデバイスでのCAN使用チュートリアルについては、[リンク](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/#can)を参照してください。

:::

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig4.jpg"/>  
</div>

### XT30 2+2ケーブルの接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig2.jpg"/>  
</div>

:::tip

私たちのデバイスの​CAN_H​と​CAN_L​のピン配置は、市販されているほとんどのモーターやセンサーと比較して​逆​になっています。したがって、配線時には適切な通信を確保するために​HとL接続を交換​する必要があります。より多くのデバイスでのCAN使用チュートリアルについては、[リンク](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/#can)を参照してください。
:::

### JetsonにROSをインストール

reComptuer Jetsonでの[ROS2 Humbleのインストール](/ja/install_ros2_humble)または[ROS1のインストール](/ja/installing_ros1)に関するチュートリアルを参照してください

### CAN機能を有効にする

**reComputer Robotics J401の場合：**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=60 2 3=0 & # For CAN1: gpioset --mode=time --sec=60 2 4=0 &
```

**reComputer Miniの場合：**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=30 0 43=0 # For CAN1: gpioset --mode=time --sec=30 0 106=0 &
```

### 依存関係をインストール

リポジトリをクローン：

```bash
cd ~/
pip3 install numpy==1.24
git clone https://github.com/hexfellow/hex_utils.git
```

パッケージをビルド：

```bash
cd hex_utils
sudo apt-get install python3-venv
python3 -m build
```

パッケージをインストール：

```bash
pip3 install dist/hex_utils-0.0.1-py3-none-any.whl
```

### ワークスペース`catkin_ws`を作成し、`src`に移動

```shell
mkdir -p catkin_ws/src
cd catkin_ws/src
```

### このリポジトリをクローン

```shell
git clone git@github.com:hexfellow/hex_imu.git
```

### `catkin_ws`ディレクトリに移動してリポジトリをビルド

- **ROS1**

```shell
cd ../
catkin_make
```

- **ROS2**

```shell
cd ../
colcon build
```

### `setup.bash`をソースして以下のテストを実行

- **ROS 1**

```shell
source devel/setup.bash --extend
```

- **ROS 2**

```shell
source install/setup.bash --extend
```

### **使用方法**

1. メインノードを起動：

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu.launch.py
```

2. IMUデータを可視化するための専用のlaunchファイルも提供しています。開始するには以下の手順に従ってください：

 開始する前に、RViz用の必要なプラグインがインストールされていることを確認してください：

- **ROS 1**

```
sudo apt install ros-noetic-rviz-imu-plugin
```

- **ROS 2**

```
sudo apt install ros-humble-rviz-imu-plugin
```

	プラグインがインストールされたら、以下のコマンドで可視化ツールを開始できます：

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu_display.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu_display.launch.py
```

3. 方位角を出力したい場合は、以下のサンプルコードを実行できます（ROS1のみサポート）

```shell
roslaunch hex_imu canopen_imu.launch

rosrun hex_imu example.py
```

## **パブリックAPI**

### **パブリッシュ**

| トピック              | メッセージタイプ                  | 説明                                |
| ------------------ | ------------------------- | ------------------------------------------ |
| `/imu_data`        | `sensor_msgs/Imu`         | 姿勢、角速度、線形加速度を含むIMUデータ |
| `/magnetic_data`   | `sensor_msgs/MagneticField` | 磁場データ |

### **サブスクライブ**

| トピック    | メッセージタイプ                      | 説明                           |
| -------- | ----------------------------- | ------------------------------------- |
| なし     | なし                          | サブスクリプションは不要              |

### **パラメータ**

| 名前                    | データタイプ             | 説明                                                                                |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| `node_id`              | `int`                 | IMUデバイスのCANopenノードID                                                          |
| `channel`              | `string`              | CANチャンネル名（例：'can0'）                                                            |
| `imu_topic`            | `string`              | IMUデータをパブリッシュするトピック名                                                         |
| `magnetic_topic`       | `string`              | 磁場データをパブリッシュするトピック名                                              |

---

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
