---
description: 本维基提供了安装 Isaac ROS 的分步指南。
title: 安装 Isaac ROS
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/install_isaacros
last_update:
  date: 2025/5/28
  author: zhuyaohui
---

## Isaac ROS 初始环境设置

### ReComputer 要求
#### 硬件环境：
- Jetson Orin/Jetson Xavier

#### 软件环境：
- JetPack 5.1.2
- Ubuntu 20.04+
- [ROS2 Humble](/cn/install_ros2_humble)



## 1. 安装初始依赖项
按照 NVIDIA 官方镜像和 Seeed Wiki 的刷机指南操作：
```bash
sudo apt-get install python3-pip # 安装 python3
sudo apt-get install nvidia-jetpack # 安装开发工具
sudo pip3 install jetson-stats # 安装 Jtop 以检查 Jetpack 版本
sudo apt-get install git-lfs # 安装 git-lfs
```


## 2. 安装 Docker-CE
更新软件源：
```bash
sudo apt-get update
```

安装基本依赖项：
```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # 安装支持 apt 通过 HTTPS 的必要软件包
```

添加 Docker 官方 GPG 密钥：
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

添加 Docker 稳定版仓库：
```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

再次更新软件包列表（添加了新仓库）：
```bash
sudo apt-get update
```

安装 Docker CE（社区版）：
```bash
sudo apt-get install docker-ce
```

确保 Docker 启动：
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

添加权限（将用户添加到 Docker 组）：
```bash
sudo usermod -aG docker $USER
```

重启系统或注销：
```bash
sudo reboot
```


## 3. Isaac ROS 通用包配置
创建工作空间并添加到环境变量：
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

进入工作空间并克隆包：
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

拉取官方 Isaac 通用 Docker 镜像并进入 Docker：
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

初始环境配置完成。


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>