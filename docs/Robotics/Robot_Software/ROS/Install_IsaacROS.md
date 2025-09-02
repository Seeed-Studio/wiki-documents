---
description: This wiki provides a step-by-step guide to install Isaac ROS.
title: Install the Isaac ROS
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_isaacros
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

## Isaac ROS Initial Environment Setup

### ReComputer Requirements

#### Hardware Environment

- Jetson Orin/Jetson Xavier

#### Software Environment

- JetPack 5.1.2
- Ubuntu 20.04+
- [ROS2 Humble](/install_ros2_humble)

## 1. Install Initial Dependencies

Follow NVIDIA's official image and Seeed WIki's flashing guide:

```bash
sudo apt-get install python3-pip # Install python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check Jetpack version
sudo apt-get install git-lfs # Install git-lfs
```

## 2. Install Docker-CE

Update software sources:

```bash
sudo apt-get update
```

Install basic dependencies:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

Add Docker's official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add Docker's stable repository:

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Update package list again (new repository added):

```bash
sudo apt-get update
```

Install Docker CE (Community Edition):

```bash
sudo apt-get install docker-ce
```

Ensure Docker starts:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Add permissions (add user to Docker group):

```bash
sudo usermod -aG docker $USER
```

Reboot system or logout:

```bash
sudo reboot
```

## 3. Isaac ROS Common Package Configuration

Create workspace and add to environment:

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

Enter workspace and clone packages:

```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

Pull official Isaac Common Docker image and enter Docker:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

Initial environment configuration completed.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
