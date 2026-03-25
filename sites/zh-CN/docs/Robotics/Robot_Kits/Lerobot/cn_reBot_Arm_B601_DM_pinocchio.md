---
description: 本教程介绍如何在 reBot Arm B601-DM 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析和可视化。
title: reBot Arm B601-DM 的 Pinocchio 与 MeshCat 入门指南
keywords:
  - Pinocchio
  - MeshCat
  - 机械臂
  - 机器人
  - LeRobot
  - 运动学
slug: /reBot_Arm_B601_pinocchio
last_update:
  date: 2026-03-24
  author: LiuJunjie
createdAt: '2026-03-24'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/cn/reBot_Arm_B601_pinocchio/
---

# reBot Arm B601-DM 的 Pinocchio 与 MeshCat 入门指南

## 环境依赖

在开始本教程之前，请确保您的系统满足以下环境要求：

| 项目 | 要求 |
|------|------|
| **发行商 ID** | Ubuntu |
| **描述** | Ubuntu 22.04.5 LTS |
| **版本** | 22.04 |
| **开发代号** | Jammy |

## reBotArm_control 仓库克隆

```bash
git clone https://github.com/vectorBH6/reBotArm_control/tree/main
#main默认为本地编译版本，切换到TODO分支以使用以下robotpkg&uv安装教程
```



## 通过 robotpkg 安装 Pinocchio

:::tip
本教程为robotpkg安装[Pinocchio](https://stack-of-tasks.github.io/pinocchio/download.html)，您可以使用虚拟环境进行安装，请参考[官方文档](https://stack-of-tasks.github.io/pinocchio/download.html)
:::

如果您之前未添加过 robotpkg 软件仓库，请按照以下步骤 1 至 4 进行操作。如果已添加过，可直接跳至步骤 5。这些步骤与 http://robotpkg.openrobots.org/debian.html 上介绍的安装流程类似。

### 步骤 1. 确保已安装所需的依赖

```bash
sudo apt install -qqy lsb-release curl
```

### 步骤 2. 注册 robotpkg 的认证证书

```bash
sudo mkdir -p /etc/apt/keyrings
curl http://robotpkg.openrobots.org/packages/debian/robotpkg.asc \
    | sudo tee /etc/apt/keyrings/robotpkg.asc
```

### 步骤 3. 将 robotpkg 添加为 apt 源

```bash
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/robotpkg.asc] http://robotpkg.openrobots.org/packages/debian/pub $(lsb_release -cs) robotpkg" \
    | sudo tee /etc/apt/sources.list.d/robotpkg.list
```

### 步骤 4. 更新 apt 包列表

首次添加源后，需要至少运行一次 `apt update` 来获取软件包描述信息：

```bash
sudo apt update
```

### 步骤 5. 安装 Pinocchio

通过以下命令安装 Pinocchio 及其依赖：

```bash
sudo apt install -qqy robotpkg-py3*-pinocchio
sudo apt install -qqy robotpkg-yaml-cpp
```

该命令将自动安装所有系统依赖和所需的额外软件包。


安装完成后，Pinocchio 将被安装在 `/opt/openrobots` 目录下。您需要将相关路径添加到环境变量中：

```bash
export PATH=/opt/openrobots/bin:$PATH
export PKG_CONFIG_PATH=/opt/openrobots/lib/pkgconfig:$PKG_CONFIG_PATH
export LD_LIBRARY_PATH=/opt/openrobots/lib:$LD_LIBRARY_PATH
export PYTHONPATH=/opt/openrobots/lib/python3.10/site-packages:$PYTHONPATH # Adapt your desired python version here
export CMAKE_PREFIX_PATH=/opt/openrobots:$CMAKE_PREFIX_PATH
```

建议将上述命令添加到您的 `~/.bashrc` 或 `~/.zshrc` 文件中，以便每次登录时自动加载。
:::




## 通过 uv 安装 MeshCat numpy

[MeshCat](https://github.com/rdeits/meshcat-python) 是一个基于 Web 的 3D 可视化工具，常用于机器人学的可视化展示。

安装 uv(如果您之前没有安装，已安装可跳过)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

使用 Python 3.10 创建虚拟环境，并安装包：

```bash
uv venv --python 3.10 --system-site-packages
source .venv/bin/activate

#安装 MeshCat numpy
uv pip install meshcat
uv pip install "numpy<2"
```



## 构建目录 + 配置 + 编译
```bash
mkdir -p build && cd build
cmake ..
make
```

## 运行程序
TODO示意图
仿真机械臂末端画圆进行

```bash
./traj_sim_circle
```

仿真机械臂末端沿圆锥形轨迹运动

```bash
./traj_sim_cone
```

在终端交互式输入目标位置

```bash
./traj_sim_geodesic
```