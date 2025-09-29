---
description: このwikiは、reComputerでROS上でOrbbec Depthカメラを使用するためのステップバイステップガイドを提供します。
title: Orbbec Depth Camera with ROS
keywords:
- Jetson Nano
- reComputer
- Orbbec
- Depth Camera
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/orbbec_depth_camera_on_ros
last_update:
  date: 10/10/2024
  author: Lidayu
---
# reComputerでROS上でOrbbec Depthカメラを使用する方法

## はじめに

このチュートリアルでは、[reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)シリーズデバイス上でROS経由でOrbbec Depth Cameraを使用する方法について、ステップバイステップガイドを提供します。Orbbec Gemini 2を例に取り、深度画像とポイントクラウドのトピックデータを取得し、rvizで可視化します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前提条件

- __[reComputer J30/40シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__：[JetPack 5.xシステム](/ja/reComputer_J4012_Flash_Jetpack)と[ROS Noetic環境](/ja/installing_ros1)に基づいてチュートリアルを実施します。

- 依存関係をインストールします（ROSディストリビューションに注意してください）：
  
  ```bash
  # Assuming you have sourced the ROS environment, same below
  sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
  ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
  ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs libdw-dev
  ```

## はじめに

### カメラの接続

Orbbec Depth CameraをUSB Type-CでJetsonに接続し、システムに[ROSがすでにインストール](/ja/installing_ros1)されていることを確認してください。

<div align="center">
      <img width={700}
      src="https://i.imgur.com/0gAng8s.jpg" />
  </div>

### インストール
__私たちのプロジェクトからOBcamera_wsをクローンしている場合は、以下のリンクからクローンする必要はありません。__

- **ステップ1：**ROSワークスペースを作成します（__まだ持っていない場合__）：

```bash
mkdir -p OBcamera_ws/src
```

- **ステップ 2:** ソースコードを取得する：

```bash
cd OBcamera_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
```

- **ステップ 3:** パッケージをビルドします：

```bash
cd OBcamera_ws
catkin_make
```

- **ステップ 4:** udev ルールをインストールします：

```bash
source ./devel/setup.bash
roscd orbbec_camera
sudo bash ./scripts/install_udev_rules.sh
```

### カメラの起動

カメラモデル __Gemini2__ の場合、ターミナル1で以下を入力してください：

```bash
source ./devel/setup.bash
roslaunch orbbec_camera gemini2.launch
```

ターミナル2で：

```bash
source ./devel/setup.bash
rviz
```

3番目のターミナルで `rostopic list` コマンドを入力すると、Orbbec Camera によって公開されているトピックを表示できます。利用可能なトピックは以下の通りです：

- `/camera/color/camera_info`: カラーカメラの情報。
- `/camera/color/image_raw`: カラーストリーム画像。
- `/camera/depth/camera_info`: 深度カメラの情報。
- `/camera/depth/image_raw`: 深度ストリーム画像。
- `/camera/depth/points`: ポイントクラウド、`enable_point_cloud` が `true` の場合のみ利用可能。
- `/camera/depth_registered/points`: カラーポイントクラウド、`enable_colored_point_cloud` が `true` の場合のみ利用可能。
- `/camera/left_ir/camera_info`: 左IRカメラの情報。
- `/camera/left_ir/image_raw`: 左IRストリーム画像。
- `/camera/right_ir/camera_info`: 右IRカメラの情報。
- `/camera/right_ir/image_raw`: 右IRストリーム画像。
- `/diagnostics`: カメラの診断情報。現在、診断情報にはカメラの温度のみが含まれています。

RVIZを起動し、RVIZインターフェースの左下のボタンからトピックを追加すると、以下のようなレンダリングを得ることができます：
<div align="center">
      <img width={700}
      src="https://i.imgur.com/7jmfnZ4.png" />
  </div>

使用しているカメラモデルが異なる場合は、以下の表から対応するlaunchファイル名を見つけて、ターミナル1の `gemini2.launch` を適宜置き換えてください。

| Product Serials                     | Launch File              |
| ----------------------------------- | ------------------------ |
| astra+                              | astra_adv.launch         |
| astra mini/astra mini pro/astra pro | astra.launch             |
| astra mini s pro                    | astra.launch             |
| astra2                              | astra2.launch            |
| astra stereo s                      | stereo_s_u3.launch       |
| astra pro2                          | astra_pro2.launch        |
| dabai                               | dabai.launch             |
| dabai d1                            | dabai_d1.launch          |
| dabai dcw                           | dabai_dcw.launch         |
| dabai dw                            | dabai_dw.launch          |
| dabai pro                           | dabai_pro.launch         |
| deeya                               | deeya.launch             |
| femto / femto w                     | femto.launch             |
| femto mega                          | femto_mega.launch        |
| femto bolt                          | femto_bolt.launch        |
| gemini                              | gemini.launch            |
| gemini2 / dabai DCL                 | gemini2.launch           |
| gemini2L                            | gemini2L.launch          |
| gemini e                            | gemini_e.launch          |
| gemini e lite                       | gemini_e_lite.launch     |
| dabai max                           | dabai_max.launch         |
| dabai max pro                       | dabai_max_pro.launch     |
| gemini uw                           | gemini_uw.launch         |
| dabai dcw2                          | dabai_dcw2.launch        |
| dabai dw2                           | dabai_dw2.launch         |
| gemini ew                           | gemini_ew.launch         |
| gemini ew lite                      | gemini_ew_lite.launch    |
| gemini 330 series                   | gemini_330_series.launch |

__すべてのlaunchファイルは本質的に類似しており、主な違いは同じシリーズ内の異なるモデルに設定されるパラメータのデフォルト値です。USB 2.0対USB 3.0などのUSB規格の違いにより、これらのパラメータの調整が必要な場合があります。起動に失敗した場合は、仕様書を注意深く確認してください。launchファイル内の解像度設定や他のパラメータに特に注意を払い、互換性と最適なパフォーマンスを確保してください。__

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
