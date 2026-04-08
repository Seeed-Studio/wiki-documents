---
description: 本教程介绍如何在 reBot Arm B601-DM 机械臂上使用 Pinocchio 和 MeshCat 进行运动学分析和可视化。
title: reBot Arm B601-DM入门Pinocchio与MeshCat
keywords:
  - Pinocchio
  - MeshCat
  - 机械臂
  - 机器人
  - LeRobot
  - 运动学
slug: /rebot_arm_b601_dm_pinocchio_meshcat
last_update:
  date: 2026-03-24
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-03-24'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 的 Pinocchio 与 MeshCat 入门指南

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

## 本文环境

本教程测试环境如下：

| 项目 | 要求 |
|------|------|
| **发行商 ID** | Ubuntu |
| **描述** | Ubuntu 22.04.5 LTS |
| **版本** | 22.04 |
| **开发代号** | Jammy |

## reBotArm_control 仓库克隆

```bash
cd ~/
git clone https://github.com/vectorBH6/reBotArm_control/tree/main
cd reBotArm_control
git switch robotpkg-ver
# main默认为本地编译版本，切换到robotpkg_dev分支以使用以下robotpkg&uv安装教程
```

## 安装 Pinocchio

:::tip
TODO

:::

### 安装 Pinocchio

通过以下命令安装 Pinocchio 及其依赖：

```bash
TODO
uv pip install pin
```

## 安装 uv

[MeshCat](https://github.com/rdeits/meshcat-python) 是一个基于 Web 的 3D 可视化工具，常用于机器人学的可视化展示。

安装 uv(如果您之前没有安装，已安装可跳过)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

使用 Python 3.10 创建虚拟环境，并安装包：

```bash
uv venv --python 3.10 --system-site-packages
source .venv/bin/activate
```

## 安装 MeshCat numpy

uv pip install meshcat
uv pip install "numpy<2"

## 构建目录 + 配置 + 编译

```bash
mkdir -p build && cd build
cmake ..
make
```

## 运行程序

![traj_sim_circle](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/traj_sim_circle.png)

仿真机械臂末端画圆进行

```bash
./traj_sim_circle
```

![traj_sim_cone](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/traj_sim_cone.png)

仿真机械臂末端沿圆锥形轨迹运动

```bash
./traj_sim_cone
```

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/traj_sim_geodesic.png)

在终端交互式输入目标位置

```bash
./traj_sim_geodesic
```
