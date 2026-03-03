---
description: このwikiはIsaac ROSをインストールするためのステップバイステップガイドを提供します。
title: Isaac ROSのインストール
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/install_isaacros
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

## Isaac ROS初期環境セットアップ

### ReComputerの要件

#### ハードウェア環境

- Jetson Orin/Jetson Xavier

#### ソフトウェア環境

- JetPack 5.1.2
- Ubuntu 20.04+
- [ROS2 Humble](/ja/install_ros2_humble)

## 1. 初期依存関係のインストール

NVIDIAの公式イメージとSeeed WIkiのフラッシュガイドに従ってください：

```bash
sudo apt-get install python3-pip # python3をインストール
sudo apt-get install nvidia-jetpack # 開発者ツールをインストール
sudo pip3 install jetson-stats # Jetpackバージョンを確認するためにJtopをインストール
sudo apt-get install git-lfs # git-lfsをインストール
```

## 2. Docker-CEのインストール

ソフトウェアソースを更新：

```bash
sudo apt-get update
```

基本的な依存関係をインストール：

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # HTTPS経由でaptを使用するための必須パッケージをインストール
```

Dockerの公式GPGキーを追加：

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Dockerの安定版リポジトリを追加：

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

パッケージリストを再度更新（新しいリポジトリが追加されました）：

```bash
sudo apt-get update
```

Docker CE（Community Edition）をインストール：

```bash
sudo apt-get install docker-ce
```

Dockerの起動を確認：

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

権限を追加（ユーザーをDockerグループに追加）：

```bash
sudo usermod -aG docker $USER
```

システムを再起動またはログアウト：

```bash
sudo reboot
```

## 3. Isaac ROS Commonパッケージの設定

ワークスペースを作成し、環境に追加：

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

ワークスペースに入り、パッケージをクローン：

```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

公式Isaac Common Dockerイメージをプルし、Dockerに入る：

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

初期環境設定が完了しました。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>