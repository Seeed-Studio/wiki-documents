---
description: このwikiは、reComputer上でROSを使用して複数のCSIカメラを使用するためのステップバイステップガイドを提供します。
title: ROSでのCSIカメラ
keywords:
- Jetson Nano
- reComputer
- CSI
- Camera
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/csi_camera_on_ros
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# reComputerでROSを使用して複数のCSIカメラを使用する方法

## はじめに
このチュートリアルでは、[reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)シリーズデバイス上でROSを通じて複数のCSIカメラの画像データを読み取り、画像トピックを公開してRVIZ可視化インターフェースに表示する方法について、ステップバイステップのガイドを提供します。

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前提条件
- __[reComputer J30/40シリーズ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__：提供されたチュートリアルに従って[JetPack 5.xシステムのインストール](/ja/reComputer_J4012_Flash_Jetpack)と[ROS Noetic環境](/ja/installing_ros1)のセットアップが完了していることを確認してください。

- __サポートされているカメラは以下の通りです：__

  - IMX219カメラ

    - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
    - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
    - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
    - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
    - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
    - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
    - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
    - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
    - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
    - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

  - IMX477カメラ

    - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
    - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
    - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)


## はじめに
### カメラの接続
このチュートリアルに従って[CSIカメラの接続とテスト](/ja/J401_carrierboard_Hardware_Interfaces_Usage)を完了し、システムに[ROSがすでにインストール](/ja/installing_ros1)されていることを確認してください。

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig0.jpg" />
  </div>

### インストール
- **ステップ1：** reComputer上でターミナルを開き、ワークスペース用のディレクトリを作成します：
  ```bash
  mkdir -p ~/catkin_ws/src
  cd ~/catkin_ws/src
  ```
- **ステップ2：** 必要なROSパッケージをクローンします：
  ```bash
  git clone https://github.com/ZhuYaoHui1998/csi_camera_reader.git
  ```

- **ステップ3：** ワークスペースをビルドします：
  ```bash
  cd ~/catkin_ws/
  catkin_make
  ```

- **ステップ4：** 環境を更新するために、再度セットアップファイルをソースします：
  ```bash
  source devel/setup.bash
  ```

### 使用方法
- 1つのカメラストリームをROSトピック /csi_cam_0/image_raw に公開するには、ターミナルで次のコマンドを使用します：
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=0
  ```

- sensor_idを1に変更してインターフェースに合わせることもできます：
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=1
  ```

- 2つのCSIカメラを同時に開いてROSにトピックを公開したい場合は、次のコマンドを実行できます：

  ```bash
  roslaunch csi_camera_reader dual_camera.launch
  ```
  ターミナルで「**rostopic list**」コマンドを入力すると、カメラによって公開された画像トピックを確認できます。
  <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig1.png" />
  </div>
    RVIZ可視化ツールを使用して画像トピックを購読し、視覚情報を表示することもできます。
      <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig2.png" />
  </div>
## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>